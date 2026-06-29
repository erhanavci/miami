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

## Admin approval panel

Admin approval is handled in the app's admin panel. New users are saved with:

```text
approval_status = pending
```

An approved admin sees them in the `User Approvals / Kullanıcı Onayları` panel and clicks `Approve / Onayla`.

Admin approval email is optional and not required for the normal access flow.
