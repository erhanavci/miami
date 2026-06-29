-- Miami Workflow clean start
-- Run in Supabase SQL Editor to remove all existing workflow task data.
-- This keeps users/profiles/admin approvals intact.

delete from public.task_activity;
delete from public.task_notes;
delete from public.task_assignees;
delete from public.task_files;
delete from public.voice_notes;
delete from public.tasks;

notify pgrst, 'reload schema';
