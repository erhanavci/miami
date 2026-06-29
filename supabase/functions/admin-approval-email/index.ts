const resendApiKey = Deno.env.get("RESEND_API_KEY") ?? "";
const fromEmail = Deno.env.get("TASK_EMAIL_FROM") ?? "erhanavci@hotmail.com";
const adminEmail = Deno.env.get("ADMIN_APPROVAL_EMAIL") ?? "erhanavci@hotmail.com";
const siteUrl = Deno.env.get("SITE_URL") ?? "https://miami.vercel.app";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { email, fullName, role } = await request.json();
    if (!email || !fullName) throw new Error("email and fullName are required.");

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: adminEmail,
        subject: "MIAMI WORKFLOW: Yeni kullanici onayi",
        html: `
          <h2>Yeni kullanici onay bekliyor</h2>
          <p><strong>Ad Soyad:</strong> ${escapeHtml(fullName)}</p>
          <p><strong>E-posta:</strong> ${escapeHtml(email)}</p>
          <p><strong>Rol:</strong> ${escapeHtml(role ?? "-")}</p>
          <p>Onaylamak icin admin hesabinizla giris yapin:</p>
          <p><a href="${siteUrl}">${siteUrl}</a></p>
        `,
      }),
    });

    if (!response.ok) throw new Error(await response.text());
    return json({ sent: true });
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
