-- Durable project intake for feethedeveloper.com /start.
--
-- public.project_intakes already exists in production (created by the remote
-- migration `site_operational_tables`, 2026-09-16, which is not in this repo):
--   id, created_at, name, email, company, service, budget_range, timeline, goals
-- This migration is additive only. It adds the columns /api/intake needs for
-- idempotent, tenant-scoped storage and locks the table to server-side writes.
-- Written only by the site's server route with the Supabase secret key.

create table if not exists public.project_intakes (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  company text,
  service text not null,
  budget_range text,
  timeline text,
  goals text not null
);

alter table public.project_intakes
  add column if not exists submission_id uuid,
  add column if not exists tenant_id text not null default 'fee-the-developer',
  add column if not exists source text not null default 'feethedev-site:/start',
  add column if not exists status text not null default 'received',
  add column if not exists user_agent text,
  add column if not exists updated_at timestamptz not null default now();

do $$
begin
  if not exists (select 1 from pg_constraint where conname = 'project_intakes_submission_id_key') then
    alter table public.project_intakes
      add constraint project_intakes_submission_id_key unique (submission_id);
  end if;
  if not exists (select 1 from pg_constraint where conname = 'project_intakes_tenant_check') then
    alter table public.project_intakes
      add constraint project_intakes_tenant_check check (tenant_id = 'fee-the-developer');
  end if;
  if not exists (select 1 from pg_constraint where conname = 'project_intakes_status_check') then
    alter table public.project_intakes
      add constraint project_intakes_status_check
      check (status in ('received', 'acknowledged', 'qualified', 'scheduled', 'closed', 'spam'));
  end if;
  if not exists (select 1 from pg_constraint where conname = 'project_intakes_length_check') then
    alter table public.project_intakes
      add constraint project_intakes_length_check check (
        char_length(name) between 1 and 200
        and char_length(email) between 3 and 320
        and (company is null or char_length(company) <= 200)
        and char_length(service) between 1 and 120
        and (budget_range is null or char_length(budget_range) <= 60)
        and (timeline is null or char_length(timeline) <= 120)
        and char_length(goals) between 20 and 5000
        and (user_agent is null or char_length(user_agent) <= 300)
      );
  end if;
end $$;

create index if not exists project_intakes_created_at_idx on public.project_intakes (created_at desc);
create index if not exists project_intakes_status_idx on public.project_intakes (status);

alter table public.project_intakes enable row level security;
revoke all on table public.project_intakes from anon, authenticated;
