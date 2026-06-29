create extension if not exists "pgcrypto";

create table if not exists public.profiles (
  id uuid primary key default gen_random_uuid(),
  auth_user_id uuid unique references auth.users(id) on delete cascade,
  full_name text not null,
  role text,
  approval_status text default 'pending' check (approval_status in ('pending', 'approved', 'rejected')),
  is_admin boolean default false,
  avatar_url text,
  created_at timestamptz default now()
);

alter table public.profiles add column if not exists auth_user_id uuid unique references auth.users(id) on delete cascade;
alter table public.profiles add column if not exists approval_status text default 'pending';
alter table public.profiles add column if not exists is_admin boolean default false;
alter table public.profiles add column if not exists avatar_url text;

create table if not exists public.tasks (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  status text not null default 'plan',
  task_date date,
  deadline_date date,
  priority text not null default 'medium' check (priority in ('low', 'medium', 'high', 'urgent')),
  progress_status text not null default 'ongoing' check (progress_status in ('ongoing', 'completed')),
  google_meet_url text,
  google_event_id text,
  google_calendar_id text,
  google_meet_start timestamptz,
  google_meet_end timestamptz,
  import_key text unique,
  created_by uuid references auth.users(id),
  created_at timestamptz default now()
);

alter table public.tasks add column if not exists deadline_date date;
alter table public.tasks add column if not exists priority text not null default 'medium';
alter table public.tasks add column if not exists progress_status text not null default 'ongoing';
alter table public.tasks add column if not exists google_meet_url text;
alter table public.tasks add column if not exists google_event_id text;
alter table public.tasks add column if not exists google_calendar_id text;
alter table public.tasks add column if not exists google_meet_start timestamptz;
alter table public.tasks add column if not exists google_meet_end timestamptz;
alter table public.tasks
  drop constraint if exists tasks_priority_check;
alter table public.tasks
  add constraint tasks_priority_check
  check (priority in ('low', 'medium', 'high', 'urgent'));
alter table public.tasks
  drop constraint if exists tasks_progress_status_check;
alter table public.tasks
  add constraint tasks_progress_status_check
  check (progress_status in ('ongoing', 'completed'));

create table if not exists public.task_assignees (
  task_id uuid references public.tasks(id) on delete cascade,
  user_id uuid references public.profiles(id) on delete cascade,
  primary key (task_id, user_id)
);

create table if not exists public.task_files (
  id uuid primary key default gen_random_uuid(),
  task_id uuid references public.tasks(id) on delete cascade,
  file_url text not null,
  file_name text,
  file_type text,
  created_by uuid references auth.users(id),
  created_at timestamptz default now()
);

alter table public.task_files add column if not exists created_by uuid references auth.users(id);

create table if not exists public.voice_notes (
  id uuid primary key default gen_random_uuid(),
  task_id uuid references public.tasks(id) on delete cascade,
  audio_url text not null,
  file_name text,
  created_by uuid references auth.users(id),
  created_at timestamptz default now()
);

alter table public.voice_notes add column if not exists file_name text;

create table if not exists public.task_notes (
  id uuid primary key default gen_random_uuid(),
  task_id uuid references public.tasks(id) on delete cascade,
  note_text text not null,
  created_by uuid references auth.users(id),
  created_at timestamptz default now()
);

create table if not exists public.task_activity (
  id uuid primary key default gen_random_uuid(),
  task_id uuid references public.tasks(id) on delete cascade,
  action text not null,
  actor_id uuid references auth.users(id),
  created_at timestamptz default now()
);

create table if not exists public.google_oauth_tokens (
  id text primary key default 'default',
  refresh_token text,
  access_token text,
  expires_at timestamptz,
  updated_at timestamptz default now()
);

update public.tasks
set status = 'live'
where status = 'post';

create or replace function public.is_admin()
returns boolean
language sql
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.profiles
    where auth_user_id = auth.uid()
      and is_admin = true
      and approval_status = 'approved'
  );
$$;

create or replace function public.protect_profile_admin_fields()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if not public.is_admin() then
    new.id = old.id;
    new.auth_user_id = old.auth_user_id;
    new.approval_status = old.approval_status;
    new.is_admin = old.is_admin;
  end if;
  return new;
end;
$$;

drop trigger if exists protect_profile_admin_fields_trigger on public.profiles;
create trigger protect_profile_admin_fields_trigger
before update on public.profiles
for each row execute function public.protect_profile_admin_fields();

create or replace function public.preserve_task_creator()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  new.created_by = old.created_by;
  return new;
end;
$$;

drop trigger if exists preserve_task_creator_trigger on public.tasks;
create trigger preserve_task_creator_trigger
before update on public.tasks
for each row execute function public.preserve_task_creator();

alter table public.profiles enable row level security;
alter table public.tasks enable row level security;
alter table public.task_assignees enable row level security;
alter table public.task_files enable row level security;
alter table public.voice_notes enable row level security;
alter table public.task_notes enable row level security;
alter table public.task_activity enable row level security;
alter table public.google_oauth_tokens enable row level security;

drop policy if exists "profiles read authenticated" on public.profiles;
create policy "profiles read authenticated" on public.profiles
  for select to authenticated using (true);

drop policy if exists "profiles insert authenticated" on public.profiles;
create policy "profiles insert authenticated" on public.profiles
  for insert to authenticated with check (true);

drop policy if exists "profiles update authenticated" on public.profiles;
create policy "profiles update authenticated" on public.profiles
  for update to authenticated using (true) with check (true);

drop policy if exists "tasks read authenticated" on public.tasks;
create policy "tasks read authenticated" on public.tasks
  for select to authenticated using (true);

drop policy if exists "tasks insert authenticated" on public.tasks;
create policy "tasks insert authenticated" on public.tasks
  for insert to authenticated with check (auth.uid() = created_by);

drop policy if exists "tasks update authenticated" on public.tasks;
create policy "tasks update authenticated" on public.tasks
  for update to authenticated using (true) with check (true);

drop policy if exists "tasks delete authenticated" on public.tasks;
create policy "tasks delete authenticated" on public.tasks
  for delete to authenticated using (auth.uid() = created_by);

drop policy if exists "task assignees read authenticated" on public.task_assignees;
create policy "task assignees read authenticated" on public.task_assignees
  for select to authenticated using (true);

drop policy if exists "task assignees write authenticated" on public.task_assignees;
create policy "task assignees write authenticated" on public.task_assignees
  for all to authenticated using (true) with check (true);

drop policy if exists "task files read authenticated" on public.task_files;
create policy "task files read authenticated" on public.task_files
  for select to authenticated using (true);

drop policy if exists "task files write authenticated" on public.task_files;
drop policy if exists "task files insert authenticated" on public.task_files;
drop policy if exists "task files update own" on public.task_files;
drop policy if exists "task files delete own" on public.task_files;
create policy "task files insert authenticated" on public.task_files
  for insert to authenticated with check (auth.uid() = created_by);
create policy "task files update own" on public.task_files
  for update to authenticated using (auth.uid() = created_by) with check (auth.uid() = created_by);
create policy "task files delete own" on public.task_files
  for delete to authenticated using (auth.uid() = created_by);

drop policy if exists "voice notes read authenticated" on public.voice_notes;
create policy "voice notes read authenticated" on public.voice_notes
  for select to authenticated using (true);

drop policy if exists "voice notes write authenticated" on public.voice_notes;
drop policy if exists "voice notes insert authenticated" on public.voice_notes;
drop policy if exists "voice notes update own" on public.voice_notes;
drop policy if exists "voice notes delete own" on public.voice_notes;
create policy "voice notes insert authenticated" on public.voice_notes
  for insert to authenticated with check (auth.uid() = created_by);
create policy "voice notes update own" on public.voice_notes
  for update to authenticated using (auth.uid() = created_by) with check (auth.uid() = created_by);
create policy "voice notes delete own" on public.voice_notes
  for delete to authenticated using (auth.uid() = created_by);

drop policy if exists "task notes read authenticated" on public.task_notes;
create policy "task notes read authenticated" on public.task_notes
  for select to authenticated using (true);

drop policy if exists "task notes write authenticated" on public.task_notes;
drop policy if exists "task notes insert authenticated" on public.task_notes;
drop policy if exists "task notes update own" on public.task_notes;
drop policy if exists "task notes delete own" on public.task_notes;
create policy "task notes insert authenticated" on public.task_notes
  for insert to authenticated with check (auth.uid() = created_by);
create policy "task notes update own" on public.task_notes
  for update to authenticated using (auth.uid() = created_by) with check (auth.uid() = created_by);
create policy "task notes delete own" on public.task_notes
  for delete to authenticated using (auth.uid() = created_by);

drop policy if exists "task activity read authenticated" on public.task_activity;
create policy "task activity read authenticated" on public.task_activity
  for select to authenticated using (true);

drop policy if exists "task activity insert authenticated" on public.task_activity;
create policy "task activity insert authenticated" on public.task_activity
  for insert to authenticated with check (auth.uid() = actor_id);

insert into storage.buckets (id, name, public)
values ('task-assets', 'task-assets', true)
on conflict (id) do update set public = true;

drop policy if exists "task assets public read" on storage.objects;
create policy "task assets public read" on storage.objects
  for select using (bucket_id = 'task-assets');

drop policy if exists "task assets authenticated upload" on storage.objects;
create policy "task assets authenticated upload" on storage.objects
  for insert to authenticated with check (bucket_id = 'task-assets');

drop policy if exists "task assets authenticated update" on storage.objects;
create policy "task assets authenticated update" on storage.objects
  for update to authenticated using (bucket_id = 'task-assets') with check (bucket_id = 'task-assets');
