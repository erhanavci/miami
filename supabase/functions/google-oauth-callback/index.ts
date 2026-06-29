import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
const googleClientId = Deno.env.get("GOOGLE_CLIENT_ID") ?? "";
const googleClientSecret = Deno.env.get("GOOGLE_CLIENT_SECRET") ?? "";
const googleRedirectUri = Deno.env.get("GOOGLE_REDIRECT_URI") ?? "";
const appOrigin = Deno.env.get("APP_ORIGIN") ?? "https://miami.vercel.app";

Deno.serve(async (request) => {
  try {
    const requestUrl = new URL(request.url);
    const code = requestUrl.searchParams.get("code");
    const state = requestUrl.searchParams.get("state") ?? "";
    if (!code) throw new Error("Missing Google authorization code.");

    const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        code,
        client_id: googleClientId,
        client_secret: googleClientSecret,
        redirect_uri: googleRedirectUri,
        grant_type: "authorization_code",
      }),
    });
    const tokenData = await tokenResponse.json();
    if (!tokenResponse.ok) throw new Error(tokenData.error_description || tokenData.error || "Google token exchange failed.");
    if (!tokenData.refresh_token) throw new Error("Google did not return a refresh token. Reconnect and approve offline access.");

    const admin = createClient(supabaseUrl, serviceRoleKey);
    await admin.from("google_oauth_tokens").upsert({
      id: "default",
      refresh_token: tokenData.refresh_token,
      access_token: tokenData.access_token,
      expires_at: new Date(Date.now() + Number(tokenData.expires_in || 3600) * 1000).toISOString(),
      updated_at: new Date().toISOString(),
    });

    const returnTo = decodeState(state).returnTo || `${appOrigin}/preview`;
    return Response.redirect(returnTo, 302);
  } catch (error) {
    return Response.redirect(`${appOrigin}/preview?google_error=${encodeURIComponent(error.message)}`, 302);
  }
});

function decodeState(state: string) {
  try {
    const padded = state.padEnd(Math.ceil(state.length / 4) * 4, "=");
    return JSON.parse(atob(padded));
  } catch {
    return {};
  }
}
