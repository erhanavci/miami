import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
const oneSignalAppId = Deno.env.get("ONESIGNAL_APP_ID") ?? "";
const oneSignalRestApiKey = Deno.env.get("ONESIGNAL_REST_API_KEY") ?? "";
const siteUrl = Deno.env.get("SITE_URL") ?? "https://miami.vercel.app";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    if (!oneSignalAppId || !oneSignalRestApiKey) {
      return json({ sent: 0, skipped: "OneSignal secrets are missing." });
    }

    const admin = createClient(supabaseUrl, serviceRoleKey);
    const tomorrow = tomorrowKey();
    const { data: tasks, error: taskError } = await admin
      .from("tasks")
      .select("id, title, description, deadline_date, priority")
      .eq("deadline_date", tomorrow)
      .neq("progress_status", "completed");
    if (taskError) throw taskError;

    let sent = 0;
    for (const task of tasks ?? []) {
      const { data: assignees, error: assigneeError } = await admin
        .from("task_assignees")
        .select("user_id")
        .eq("task_id", task.id);
      if (assigneeError) throw assigneeError;

      const profileIds = (assignees ?? []).map((row) => row.user_id).filter(Boolean);
      if (!profileIds.length) continue;

      const result = await sendPush({
        profileIds,
        title: task.title,
        body: `Deadline yarın: ${task.description || task.title}`,
        url: siteUrl,
        collapseId: `deadline-${task.id}-${tomorrow}`,
      });
      if (!result.error) sent += profileIds.length;
    }

    return json({ sent, date: tomorrow });
  } catch (error) {
    return json({ error: error.message }, 400);
  }
});

async function sendPush(payload: { profileIds: string[]; title: string; body: string; url: string; collapseId: string }) {
  const response = await fetch("https://api.onesignal.com/notifications", {
    method: "POST",
    headers: {
      Authorization: `Key ${oneSignalRestApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      app_id: oneSignalAppId,
      target_channel: "push",
      include_aliases: { external_id: payload.profileIds },
      headings: { en: payload.title, tr: payload.title },
      contents: { en: payload.body, tr: payload.body },
      url: payload.url,
      collapse_id: payload.collapseId,
    }),
  });

  if (!response.ok) return { error: await response.text() };
  return response.json();
}

function tomorrowKey() {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return `${tomorrow.getFullYear()}-${String(tomorrow.getMonth() + 1).padStart(2, "0")}-${String(tomorrow.getDate()).padStart(2, "0")}`;
}

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}
