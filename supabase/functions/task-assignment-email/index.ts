import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
const resendApiKey = Deno.env.get("RESEND_API_KEY") ?? "";
const fromEmail = Deno.env.get("TASK_EMAIL_FROM") ?? "erhanavci@hotmail.com";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const authHeader = request.headers.get("Authorization");
    if (!authHeader) throw new Error("Missing authorization header.");

    const admin = createClient(supabaseUrl, serviceRoleKey);
    const token = authHeader.replace("Bearer ", "");
    const { data: userResult, error: userError } = await admin.auth.getUser(token);
    if (userError || !userResult.user) throw new Error("Unauthorized.");

    const { taskId, assigneeIds } = await request.json();
    if (!taskId || !Array.isArray(assigneeIds) || !assigneeIds.length) {
      throw new Error("taskId and assigneeIds are required.");
    }

    const { data: sender } = await admin
      .from("profiles")
      .select("full_name")
      .eq("auth_user_id", userResult.user.id)
      .maybeSingle();

    const { data: task, error: taskError } = await admin
      .from("tasks")
      .select("title, description, task_date, deadline_date, priority")
      .eq("id", taskId)
      .single();
    if (taskError) throw taskError;

    const { data: recipients, error: recipientError } = await admin
      .from("profiles")
      .select("full_name, auth_user_id")
      .in("id", assigneeIds)
      .not("auth_user_id", "is", null);
    if (recipientError) throw recipientError;

    const authIds = (recipients ?? []).map((profile) => profile.auth_user_id);
    const {
      data: { users },
      error: usersError,
    } = await admin.auth.admin.listUsers();
    if (usersError) throw usersError;

    const emails = users
      .filter((user) => authIds.includes(user.id) && user.email)
      .map((user) => user.email);

    if (!emails.length) {
      return json({ sent: 0 });
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: emails,
        subject: `MIAMI WORKFLOW: ${task.title}`,
        html: `
          <h2>Yeni görev tanımlandı</h2>
          <p><strong>Gönderen:</strong> ${escapeHtml(sender?.full_name ?? userResult.user.email ?? "Miami Workflow")}</p>
          <p><strong>Görev:</strong> ${escapeHtml(task.title)}</p>
          <p><strong>Tarih:</strong> ${task.task_date ?? "-"}</p>
          <p><strong>Deadline:</strong> ${task.deadline_date ?? "-"}</p>
          <p><strong>Öncelik:</strong> ${task.priority ?? "medium"}</p>
          <p>${escapeHtml(task.description ?? "")}</p>
        `,
      }),
    });

    if (!response.ok) {
      throw new Error(await response.text());
    }

    return json({ sent: emails.length });
  } catch (error) {
    return json({ error: error.message }, 400);
  }
});

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (char) => {
    const map: Record<string, string> = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" };
    return map[char];
  });
}
