create table public.service_catalog (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  category text not null check (category in ('package', 'service')),
  amount_cents integer not null check (amount_cents > 0),
  currency text not null default 'usd' check (currency = 'usd'),
  billing_interval text not null check (billing_interval in ('one_time', 'month')),
  price_qualifier text not null default 'Starting at' check (price_qualifier = 'Starting at'),
  scope_note text not null,
  sort_order integer not null unique,
  source_ref text not null default 'docs/handoffs/FTD_SITE_SERVICES_PRICING_UPDATE_HANDOFF.md',
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.service_catalog enable row level security;
revoke all on table public.service_catalog from anon, authenticated;
insert into public.service_catalog
  (slug, name, category, billing_interval, scope_note, amount_cents, sort_order)
values
('website-launch', 'Website Launch', 'package', 'one_time', 'Midpoint of published $3,000–$8,000 DFW professional small-business build range. Define the entry scope as a custom mobile-ready marketing site with agreed pages, supplied content, contact path, accessibility/performance checks, and launch QA.', 550000, 1),
('digital-presence-bundle', 'Digital Presence Bundle', 'package', 'one_time', 'Website Launch plus a defined set of business-profile setup/alignment tasks. State exact included profiles and business locations.', 675000, 2),
('custom-software-and-automation', 'Custom Software and Automation', 'package', 'one_time', '20 engineering hours × $175/hour. Discovery confirms the feature list; client approves more time before work exceeds the starting allowance.', 350000, 3),
('full-business-system', 'Full Business System', 'package', 'one_time', 'Midpoint of published $5,000–$15,000+ custom-feature/e-commerce range. Limit entry scope to one website plus one defined workflow/integration; portals, payments, multi-tenant access, and multiple integrations need a separate quote.', 1000000, 4),
('business-website-design-and-development', 'Business website design and development', 'service', 'one_time', 'Fixed starting scope described above; scope-dependent.', 550000, 5),
('strategic-website-redesign', 'Strategic website redesign', 'service', 'one_time', 'Starting point for a scoped redesign; migration, content writing, complex integrations, and e-commerce priced separately.', 475000, 6),
('e-commerce-or-custom-website-features', 'E-commerce or custom website features', 'service', 'one_time', 'Starting point for custom functionality; payment-provider fees, inventory, tax/shipping setup, and vendor plans excluded.', 1000000, 7),
('ga4-property-review-audit', 'GA4 property review / audit', 'service', 'one_time', 'Existing client-owned property required; findings and prioritized fixes. Does not include implementation.', 45000, 8),
('ga4-setup-and-validation', 'GA4 setup and validation', 'service', 'one_time', 'New or reset property, measurement plan, agreed events/conversions, consent-aware implementation requirements, validation, and handoff. Does not include a historical audit. Custom checkout tracking is separately scoped.', 92500, 9),
('clerk-supabase-completion', 'Clerk + Supabase completion', 'service', 'one_time', 'Estimate at $175/hour. Review current code and client-owned accounts first. Starting scope: environment/configuration check, defined sign-in/sign-up flow, database access rules for agreed user types, basic flow tests, and handoff. Beyond 20 hours requires a written estimate and client approval. This is not a full customer portal, billing system, or production security certification.', 350000, 10),
('google-business-profile-setup-and-verification-support', 'Google Business Profile setup and verification support', 'service', 'one_time', 'Setup and owner-guided verification support; Google controls verification and approval. No guarantee of profile approval or ranking.', 52500, 11),
('apple-business-connect-setup', 'Apple Business Connect setup', 'service', 'one_time', 'One business/location setup, subject to Apple account ownership and review.', 35000, 12),
('yelp-profile-setup-or-cleanup', 'Yelp profile setup or cleanup', 'service', 'one_time', 'One profile, information cleanup, and handoff. Reviews, ranking, ads, and platform decisions are not guaranteed.', 35000, 13),
('contact-category-location-and-service-area-alignment', 'Contact, category, location, and service-area alignment', 'service', 'one_time', 'Up to three client-selected profiles; additional locations/platforms quoted separately.', 70000, 14),
('google-workspace-and-business-email-setup', 'Google Workspace and business email setup', 'service', 'one_time', 'One domain and agreed mailbox/user configuration. Google subscriptions, migration, and domain charges are separate.', 52500, 15),
('lead-capture-and-crm-automation', 'Lead capture and CRM automation', 'service', 'one_time', 'One defined lead flow into one CRM, basic notifications, testing, and handoff. CRM licenses, marketing campaigns, and multi-stage automation excluded.', 140000, 16),
('api-integration-setup', 'API integration setup', 'service', 'one_time', 'One documented API and one defined data flow. API access approval, vendor fees, rate limits, and work beyond the agreed endpoint/data scope are separate.', 210000, 17),
('ai-assistant-or-chatbot-setup', 'AI assistant or chatbot setup', 'service', 'one_time', 'One bounded use case, approved knowledge sources, safety/fallback behavior, and testing. Model usage, hosting, and unsupported content moderation guarantees excluded.', 210000, 18),
('business-analytics-dashboard', 'Business analytics dashboard', 'service', 'one_time', 'One defined dashboard with agreed data sources and measures. Source-system access, paid BI tools, and additional connectors excluded.', 350000, 19),
('custom-public-data-collection-tool', 'Custom public-data collection tool', 'service', 'one_time', 'Only publicly accessible, permitted data sources or approved APIs; review source terms, rate limits, privacy, and data rights before work. No login bypass, anti-bot evasion, or collection of sensitive personal data.', 350000, 20),
('public-data-monitoring-and-change-alerts', 'Public-data monitoring and change alerts', 'service', 'month', 'Limited source list and check cadence in writing. Hosting/API/notification fees separate; no uptime or change-detection guarantee for third-party sites.', 35000, 21),
('website-maintenance-and-support', 'Website Maintenance and Support', 'service', 'month', 'Routine agreed updates, backup checks, basic availability/security checks, and support intake. No included feature-development hours or guarantee against compromise/outage.', 17500, 22),
('developer-change-block', 'Developer change block', 'service', 'month', 'Three hours of requested code/content/configuration changes at the $175/hour estimating rate. Additional time only after approval. No rollover unless stated in the client agreement.', 52500, 23),
('cloud-management', 'Cloud Management', 'service', 'month', 'Monthly billing/usage review, deployment and backup/recovery review, access/security checklist, and concise report. Vendor bills, 24/7 monitoring, incident response labor, and remediation are separate unless written into scope.', 35000, 24),
('fee-developer-protection', 'Fee Developer Protection', 'service', 'month', 'Bundled website care, three hours of agreed changes, and a monthly cloud/security review. Publish the precise checklist, response target, emergency approval limit, exclusions, and vendor-fee treatment. Protection reduces risk; it does not guarantee security or uninterrupted service.', 85000, 25);
