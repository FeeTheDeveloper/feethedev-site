-- Durable project intake for feethedeveloper.com /start.
-- Written only by the site's server route with the Supabase secret key.
-- anon/authenticated roles have no access; RLS is enabled with no policies.
create table public.project_intakes (
  id uuid primary key default gen_random_uuid(),
  submission_id uuid not null unique,
  tenant_id text not null default 'fee-the-developer'
    check (tenant_id = 'fee-the-developer'),
  name text not null check (char_length(name) between 1 and 200),
  email text not null check (char_length(email) between 3 and 320),
  company text check (company is null or char_length(company) <= 200),
  service text not null check (char_length(service) between 1 and 120),
  budget text not null check (char_length(budget) between 1 and 60),
  timeline text check (timeline is null or char_length(timeline) <= 120),
  goals text not null check (char_length(goals) between 20 and 5000),
  source text not null default 'feethedev-site:/start',
  status text not null default 'received'
    check (status in ('received', 'acknowledged', 'qualified', 'scheduled', 'closed', 'spam')),
  user_agent text check (user_agent is null or char_length(user_agent) <= 300),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index project_intakes_created_at_idx on public.project_intakes (created_at desc);
create index project_intakes_status_idx on public.project_intakes (status);

alter table public.project_intakes enable row level security;
revoke all on table public.project_intakes from anon, authenticated;
