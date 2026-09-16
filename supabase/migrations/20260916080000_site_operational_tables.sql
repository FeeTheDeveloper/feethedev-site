-- Fee The Developer site operational tables.
-- RLS is enabled on every table. Public (anon) forms only get INSERT.
-- clients / service_orders / stripe_event_log / resend_event_log have no
-- anon policies at all — they are written only by server routes using the
-- service-role key (webhooks, checkout confirmation), never by the browser.

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  message text,
  source text not null default 'website',
  service_interest text
);
alter table public.leads enable row level security;
create policy "leads_public_insert" on public.leads
  for insert to anon with check (true);

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
alter table public.project_intakes enable row level security;
create policy "project_intakes_public_insert" on public.project_intakes
  for insert to anon with check (true);

create table if not exists public.clients (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  company text,
  status text not null default 'active'
);
alter table public.clients enable row level security;

create table if not exists public.service_orders (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  stripe_checkout_session_id text not null unique,
  product_id text,
  product_slug text,
  customer_email text,
  status text not null default 'pending'
);
alter table public.service_orders enable row level security;

create table if not exists public.apprenticeship_applications (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  stage_interest text,
  background text,
  notes text,
  status text not null default 'new'
);
alter table public.apprenticeship_applications enable row level security;
create policy "apprenticeship_applications_public_insert" on public.apprenticeship_applications
  for insert to anon with check (true);

create table if not exists public.devil_to_developer_signups (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  notes text,
  status text not null default 'new'
);
alter table public.devil_to_developer_signups enable row level security;
create policy "devil_to_developer_signups_public_insert" on public.devil_to_developer_signups
  for insert to anon with check (true);

create table if not exists public.veteran_verifications (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  branch text,
  notes text,
  status text not null default 'pending'
);
alter table public.veteran_verifications enable row level security;
create policy "veteran_verifications_public_insert" on public.veteran_verifications
  for insert to anon with check (true);

create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  message text not null
);
alter table public.contact_submissions enable row level security;
create policy "contact_submissions_public_insert" on public.contact_submissions
  for insert to anon with check (true);

create table if not exists public.newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  email text not null unique,
  subscribed boolean not null default true
);
alter table public.newsletter_subscribers enable row level security;
create policy "newsletter_subscribers_public_insert" on public.newsletter_subscribers
  for insert to anon with check (true);

create table if not exists public.stripe_event_log (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  stripe_event_id text not null unique,
  event_type text not null,
  payload jsonb
);
alter table public.stripe_event_log enable row level security;

create table if not exists public.resend_event_log (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  resend_event_id text,
  event_type text not null,
  payload jsonb
);
alter table public.resend_event_log enable row level security;
