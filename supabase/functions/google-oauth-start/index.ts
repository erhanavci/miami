const googleClientId = Deno.env.get("GOOGLE_CLIENT_ID") ?? "";
const googleRedirectUri = Deno.env.get("GOOGLE_REDIRECT_URI") ?? "";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const { returnTo = "" } = await request.json().catch(() => ({}));
    if (!googleClientId || !googleRedirectUri) throw new Error("Google OAuth secrets are missing.");

    const state = btoa(JSON.stringify({ returnTo })).replace(/=+$/g, "");
    const url = new URL("https://accounts.google.com/o/oauth2/v2/auth");
    url.searchParams.set("client_id", googleClientId);
    url.searchParams.set("redirect_uri", googleRedirectUri);
    url.searchParams.set("response_type", "code");
    url.searchParams.set("access_type", "offline");
    url.searchParams.set("prompt", "consent");
    url.searchParams.set("scope", "https://www.googleapis.com/auth/calendar.events");
    url.searchParams.set("state", state);

    return json({ url: url.toString() });
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
