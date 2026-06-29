import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
const googleClientId = Deno.env.get("GOOGLE_CLIENT_ID") ?? "";
const googleClientSecret = Deno.env.get("GOOGLE_CLIENT_SECRET") ?? "";
const googleCalendarId = Deno.env.get("GOOGLE_CALENDAR_ID") ?? "primary";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const authHeader = request.headers.get("Authorization");
    if (!authHeader) throw new Error("Missing authorization header.");

    const admin = createClient(supabaseUrl, serviceRoleKey);
    const token = authHeader.replace("Bearer ", "");
    const { data: userResult, error: userError } = await admin.auth.getUser(token);
    if (userError || !userResult.user) throw new Error("Unauthorized.");

    const { data: profile } = await admin
      .from("profiles")
      .select("approval_status")
      .eq("auth_user_id", userResult.user.id)
      .maybeSingle();
    if (profile?.approval_status !== "approved") throw new Error("Profile is not approved.");

    const { taskId, mode = "create", meetingDate, startTime = "10:00", endTime = "11:00" } = await request.json();

    if (mode === "status") {
      const { data: stored } = await admin.from("google_oauth_tokens").select("refresh_token, updated_at").eq("id", "default").maybeSingle();
      return json({ connected: Boolean(stored?.refresh_token), updatedAt: stored?.updated_at ?? null });
    }

    if (mode === "disconnect") {
      await admin.from("google_oauth_tokens").delete().eq("id", "default");
      return json({ disconnected: true });
    }

    if (!taskId) throw new Error("taskId is required.");

    const { data: task, error: taskError } = await admin
      .from("tasks")
      .select("id, title, description, task_date, deadline_date, google_meet_url, google_event_id, google_calendar_id")
      .eq("id", taskId)
      .single();
    if (taskError) throw taskError;

    const { accessToken } = await getGoogleAccessToken(admin);

    if (mode === "delete") {
      if (task.google_event_id) {
        const deleteResponse = await fetch(
          `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(task.google_calendar_id || googleCalendarId)}/events/${encodeURIComponent(task.google_event_id)}`,
          { method: "DELETE", headers: { Authorization: `Bearer ${accessToken}` } },
        );
        if (!deleteResponse.ok && deleteResponse.status !== 404) {
          const deleteData = await deleteResponse.json().catch(() => ({}));
          throw new Error(deleteData.error?.message || "Google Calendar event could not be deleted.");
        }
      }
      const { error: clearError } = await admin
        .from("tasks")
        .update({
          google_meet_url: null,
          google_event_id: null,
          google_calendar_id: null,
          google_meet_start: null,
          google_meet_end: null,
        })
        .eq("id", taskId);
      if (clearError) throw clearError;
      return json({ deleted: true });
    }

    const event = buildCalendarEvent(task, meetingDate, startTime, endTime, mode === "update");
    const hasEvent = Boolean(task.google_event_id);
    const calendarUrl = hasEvent
      ? `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(task.google_calendar_id || googleCalendarId)}/events/${encodeURIComponent(task.google_event_id)}?conferenceDataVersion=1`
      : `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(googleCalendarId)}/events?conferenceDataVersion=1`;
    const calendarResponse = await fetch(calendarUrl, {
      method: hasEvent ? "PATCH" : "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event),
    });
    const calendarData = await calendarResponse.json();
    if (!calendarResponse.ok) throw new Error(calendarData.error?.message || "Google Calendar event could not be created.");

    const meetUrl = calendarData.hangoutLink || calendarData.conferenceData?.entryPoints?.find((entry: any) => entry.entryPointType === "video")?.uri;
    if (!meetUrl) throw new Error("Google Calendar did not return a Meet link.");

    const { error: updateError } = await admin
      .from("tasks")
      .update({
        google_meet_url: meetUrl,
        google_event_id: calendarData.id,
        google_calendar_id: task.google_calendar_id || googleCalendarId,
        google_meet_start: event.start.dateTime,
        google_meet_end: event.end.dateTime,
      })
      .eq("id", taskId);
    if (updateError) throw updateError;

    return json({ meetUrl, eventId: calendarData.id });
  } catch (error) {
    return json({ error: error.message }, 400);
  }
});

async function getGoogleAccessToken(admin: any) {
  const { data: stored, error } = await admin.from("google_oauth_tokens").select("*").eq("id", "default").maybeSingle();
  if (error) throw error;
  if (!stored?.refresh_token) throw new Error("Google is not connected yet.");

  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: googleClientId,
      client_secret: googleClientSecret,
      refresh_token: stored.refresh_token,
      grant_type: "refresh_token",
    }),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.error_description || data.error || "Google token refresh failed.");

  await admin.from("google_oauth_tokens").upsert({
    id: "default",
    refresh_token: stored.refresh_token,
    access_token: data.access_token,
    expires_at: new Date(Date.now() + Number(data.expires_in || 3600) * 1000).toISOString(),
    updated_at: new Date().toISOString(),
  });

  return { accessToken: data.access_token };
}

function buildCalendarEvent(task: any, meetingDate?: string, startTime = "10:00", endTime = "11:00", keepConference = false) {
  const date = meetingDate || task.deadline_date || task.task_date || new Date().toISOString().slice(0, 10);
  const start = `${date}T${startTime}:00+03:00`;
  const end = `${date}T${endTime}:00+03:00`;
  const event: Record<string, unknown> = {
    summary: task.title,
    description: task.description || "",
    start: { dateTime: start, timeZone: "Europe/Istanbul" },
    end: { dateTime: end, timeZone: "Europe/Istanbul" },
  };
  if (!keepConference) {
    event.conferenceData = {
      createRequest: {
        requestId: crypto.randomUUID(),
        conferenceSolutionKey: { type: "hangoutsMeet" },
      },
    };
  }
  return event;
}

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}
