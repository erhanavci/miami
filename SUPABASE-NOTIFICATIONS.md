# Miami Workflow Supabase Notes

## SQL order

Run these in Supabase SQL Editor in this order:

1. `supabase-schema.sql`
2. `supabase-admin-approval.sql`
3. Optional clean start: `supabase-clear-miami-tasks.sql`

The admin approval file repairs older `profiles` tables that were created before `auth_user_id` existed.

`supabase-clear-miami-tasks.sql` removes existing tasks, assignments, notes, files, voice notes and activity records while keeping users and admin approvals.

After step 2, make your own account admin:

```sql
update public.profiles
set approval_status = 'approved', is_admin = true
where auth_user_id = (
  select id from auth.users where email = 'erhanavci@hotmail.com'
);
```

## Confirmation email

Supabase confirmation emails are controlled from:

Authentication -> Providers -> Email

Check these:

- Confirm email is enabled.
- SMTP host, port, username and password are saved.
- Sender email is `erhanavci@hotmail.com`.
- Site URL is `https://miami.vercel.app`.
- Redirect URLs include `https://miami.vercel.app/**`.

If SMTP is correct but emails still do not arrive, check Supabase Auth logs and the SMTP provider logs. The app cannot force Auth confirmation emails from the browser.

## Task assignment emails

Browser notifications are handled in the app. Email notifications need the Edge Function in:

`supabase/functions/task-assignment-email/index.ts`

Set these Supabase function secrets:

```bash
supabase secrets set RESEND_API_KEY=your_resend_key
supabase secrets set TASK_EMAIL_FROM=erhanavci@hotmail.com
```

Deploy:

```bash
supabase functions deploy task-assignment-email
```

The domain behind `erhanavci@hotmail.com` must be verified in the email provider. Supabase's Auth SMTP settings send login/confirmation emails only; they do not send custom task assignment emails by themselves.

## Mobile push notifications

The app is PWA-ready and includes OneSignal Web Push support.

OneSignal setup:

1. Create a OneSignal Web Push app.
2. Integration type: `Custom Code`.
3. Site URL: your exact Vercel domain, for example `https://miami.vercel.app`.
4. Service worker path: `push/onesignal/`
5. Service worker file: `OneSignalSDKWorker.js`
6. Service worker scope: `/push/onesignal/`
7. Copy the OneSignal App ID into `ONESIGNAL_APP_ID` in `src/supabase-kanban.js`.

Set these Supabase Edge Function secrets:

```bash
supabase secrets set ONESIGNAL_APP_ID=your_onesignal_app_id
supabase secrets set ONESIGNAL_REST_API_KEY=your_onesignal_rest_api_key
supabase secrets set SITE_URL=https://miami.vercel.app
```

Deploy the updated notification function:

```bash
supabase functions deploy task-assignment-email
supabase functions deploy deadline-push
```

iPhone users must open the site, tap Share, choose Add to Home Screen, open the app from the home screen, then tap the notification button in the app. This is required by iOS for web push.

For deadline reminders, schedule `deadline-push` to run once every morning from Supabase:

Project -> Edge Functions -> deadline-push -> Schedule

Example cron for every day at 09:00 Turkey time during summer:

```text
0 6 * * *
```

## Admin approval panel

Admin approval is handled in the app's admin panel. New users are saved with:

```text
approval_status = pending
```

An approved admin sees them in the `User Approvals / Kullanıcı Onayları` panel and clicks `Approve / Onayla`.

Admin approval email is optional and not required for the normal access flow.
