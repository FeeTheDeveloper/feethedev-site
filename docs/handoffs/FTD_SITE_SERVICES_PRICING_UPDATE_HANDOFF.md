# Fee The Developer Website Services and Pricing Update Handoff

**Repository:** `FeeTheDeveloper/feethedev-site`  
**Website:** `feethedeveloper.com`  
**Prepared:** October 1, 2026  
**Purpose:** Update the public Services and Pricing pages so they describe the actual service catalog and use transparent, defensible DFW-oriented starting prices.

## Objective

Make the Services and Pricing pages the public reference for Fee The Developer’s work and the starting point for honest, project-specific proposals. Replace the current low flat prices with clearly labeled starting prices. Show the client what a starting price assumes, how hours are estimated, and when a written quote is required.

This is a pricing recommendation and engineering handoff. The public figures below are proposed Fee The Developer prices, not an independently measured DFW market average or guaranteed quote.

## Current condition observed in the repository

- `/services` renders service groups from `lib/catalog.ts`.
- `/pricing` renders package and add-on prices from the same `lib/catalog.ts`.
- The current catalog includes three broad service groups and four packages priced at $799, $1,299, $1,999, and $2,499, plus add-ons from $149 and monthly support at $249.
- The shared catalog is the correct single source of truth for names, prices, descriptions, and inclusion bullets. Avoid hard-coding separate price lists into page components.
- The current catalog does not explain a local rate basis, starting-price assumptions, third-party charges, hours included, overage approval, or Developer Protection limits.

## DFW pricing basis and limits

Published DFW examples show a broad spread, depending on scope. PCDrama’s August 2026 guide places professional custom small-business websites at $3,000–$8,000 and custom-feature/e-commerce projects at $5,000–$15,000+. The midpoint of the first range is $5,500; the midpoint of the second is $10,000. Red Spot Design publishes a broader $5,000–$20,000 range for professional responsive sites with custom features. [PCDrama DFW web development pricing](https://pcdrama.com/web-development) · [Red Spot Design Dallas pricing](https://www.redspotdesign.com/average-cost-website-design-dallas/)

A DFW care-cost guide reports $35–$100/month for basic maintenance and $100–$250/month for busier sites. A published plan at $349/month includes three hours of content updates. These are care-plan comparisons, not necessarily custom-code/cloud engineering retainers. [DFW maintenance comparison](https://websitemaintenance.com/articles/website-maintenance-cost-in-dallas)

For custom software, a Dallas engineering source reports senior rates of $140–$210/hour. The handoff uses the midpoint, **$175/hour**, as Fee The Developer’s proposed estimating baseline for custom engineering. A price derived from hours is an estimate and must be confirmed after reviewing the client’s goals, current code, vendor accounts, and access. [Dallas software engineering rate reference](https://www.nextgencodingcompany.com/insights/custom-software-development-company-dallas)

For analytics, published specialist prices are national rather than DFW-specific: $449 for a GA4 audit, $649 for a standard GA4 setup, and $899 for an audit plus fix sprint. Standard Google Analytics is offered free of charge; the setup and review prices below are Fee The Developer labor fees. [GA4 specialist packages](https://ga4services.com/packages/) · [Google Analytics](https://marketingplatform.google.com/about/analytics/)

These sources are published asking prices, not a statistically representative DFW survey. Do not describe the prices on the website as a market average. Describe them as Fee The Developer starting prices informed by published local comparisons and stated assumptions.

## Recommended public pricing menu

### Core packages

| Website item                   | Recommended public starting price | Basis and scope cue                                                                                                                                                                                                                                 |
| ------------------------------ | --------------------------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Website Launch                 |            **Starting at $5,500** | Midpoint of published $3,000–$8,000 DFW professional small-business build range. Define the entry scope as a custom mobile-ready marketing site with agreed pages, supplied content, contact path, accessibility/performance checks, and launch QA. |
| Digital Presence Bundle        |            **Starting at $6,750** | Website Launch plus a defined set of business-profile setup/alignment tasks. State exact included profiles and business locations.                                                                                                                  |
| Custom Software and Automation |            **Starting at $3,500** | 20 engineering hours × $175/hour. Discovery confirms the feature list; client approves more time before work exceeds the starting allowance.                                                                                                        |
| Full Business System           |           **Starting at $10,000** | Midpoint of published $5,000–$15,000+ custom-feature/e-commerce range. Limit entry scope to one website plus one defined workflow/integration; portals, payments, multi-tenant access, and multiple integrations need a separate quote.             |

### Individual services and add-ons

Use **$175/hour** as the disclosed custom-engineering estimate basis. For services without a reliable local fixed-price comparison, show an hours-based starting estimate, not a claim that the amount is a DFW average.

| Service                                                 |                 Recommended starting price | Starting basis / boundary                                                                                                                                                                                                                                                                                                                                                                         |
| ------------------------------------------------------- | -----------------------------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Business website design and development                 |                                 **$5,500** | Fixed starting scope described above; scope-dependent.                                                                                                                                                                                                                                                                                                                                            |
| Strategic website redesign                              |                                 **$4,750** | Starting point for a scoped redesign; migration, content writing, complex integrations, and e-commerce priced separately.                                                                                                                                                                                                                                                                         |
| E-commerce or custom website features                   |                                **$10,000** | Starting point for custom functionality; payment-provider fees, inventory, tax/shipping setup, and vendor plans excluded.                                                                                                                                                                                                                                                                         |
| GA4 property review / audit                             |                                   **$450** | Existing client-owned property required; findings and prioritized fixes. Does not include implementation.                                                                                                                                                                                                                                                                                         |
| GA4 setup and validation                                |                                   **$925** | New or reset property, measurement plan, agreed events/conversions, consent-aware implementation requirements, validation, and handoff. Does not include a historical audit. Custom checkout tracking is separately scoped.                                                                                                                                                                       |
| Clerk + Supabase completion                             |          **Starting at $3,500 (20 hours)** | Estimate at $175/hour. Review current code and client-owned accounts first. Starting scope: environment/configuration check, defined sign-in/sign-up flow, database access rules for agreed user types, basic flow tests, and handoff. Beyond 20 hours requires a written estimate and client approval. This is not a full customer portal, billing system, or production security certification. |
| Google Business Profile setup and verification support  |             **Starting at $525 (3 hours)** | Setup and owner-guided verification support; Google controls verification and approval. No guarantee of profile approval or ranking.                                                                                                                                                                                                                                                              |
| Apple Business Connect setup                            |             **Starting at $350 (2 hours)** | One business/location setup, subject to Apple account ownership and review.                                                                                                                                                                                                                                                                                                                       |
| Yelp profile setup or cleanup                           |             **Starting at $350 (2 hours)** | One profile, information cleanup, and handoff. Reviews, ranking, ads, and platform decisions are not guaranteed.                                                                                                                                                                                                                                                                                  |
| Contact, category, location, and service-area alignment |             **Starting at $700 (4 hours)** | Up to three client-selected profiles; additional locations/platforms quoted separately.                                                                                                                                                                                                                                                                                                           |
| Google Workspace and business email setup               |             **Starting at $525 (3 hours)** | One domain and agreed mailbox/user configuration. Google subscriptions, migration, and domain charges are separate.                                                                                                                                                                                                                                                                               |
| Lead capture and CRM automation                         |           **Starting at $1,400 (8 hours)** | One defined lead flow into one CRM, basic notifications, testing, and handoff. CRM licenses, marketing campaigns, and multi-stage automation excluded.                                                                                                                                                                                                                                            |
| API integration setup                                   |          **Starting at $2,100 (12 hours)** | One documented API and one defined data flow. API access approval, vendor fees, rate limits, and work beyond the agreed endpoint/data scope are separate.                                                                                                                                                                                                                                         |
| AI assistant or chatbot setup                           |          **Starting at $2,100 (12 hours)** | One bounded use case, approved knowledge sources, safety/fallback behavior, and testing. Model usage, hosting, and unsupported content moderation guarantees excluded.                                                                                                                                                                                                                            |
| Business analytics dashboard                            |          **Starting at $3,500 (20 hours)** | One defined dashboard with agreed data sources and measures. Source-system access, paid BI tools, and additional connectors excluded.                                                                                                                                                                                                                                                             |
| Custom public-data collection tool                      |          **Starting at $3,500 (20 hours)** | Only publicly accessible, permitted data sources or approved APIs; review source terms, rate limits, privacy, and data rights before work. No login bypass, anti-bot evasion, or collection of sensitive personal data.                                                                                                                                                                           |
| Public-data monitoring and change alerts                | **Starting at $350/month (2 hours/month)** | Limited source list and check cadence in writing. Hosting/API/notification fees separate; no uptime or change-detection guarantee for third-party sites.                                                                                                                                                                                                                                          |
| Website Maintenance and Support                         |                 **Starting at $175/month** | Routine agreed updates, backup checks, basic availability/security checks, and support intake. No included feature-development hours or guarantee against compromise/outage.                                                                                                                                                                                                                      |
| Developer change block                                  |       **Starting at $525/month (3 hours)** | Three hours of requested code/content/configuration changes at the $175/hour estimating rate. Additional time only after approval. No rollover unless stated in the client agreement.                                                                                                                                                                                                             |
| Cloud Management                                        | **Starting at $350/month (2 hours/month)** | Monthly billing/usage review, deployment and backup/recovery review, access/security checklist, and concise report. Vendor bills, 24/7 monitoring, incident response labor, and remediation are separate unless written into scope.                                                                                                                                                               |
| Fee Developer Protection                                |                 **Starting at $850/month** | Bundled website care, three hours of agreed changes, and a monthly cloud/security review. Publish the precise checklist, response target, emergency approval limit, exclusions, and vendor-fee treatment. Protection reduces risk; it does not guarantee security or uninterrupted service.                                                                                                       |

### Price and scope rules for the website

1. Put **“Starting at”** next to every price that depends on discovery or client content.
2. State the starting assumptions beside each service. A starting price is not a fixed bid and does not promise completion of an unspecified feature set.
3. For custom engineering, show: **“Planning rate: $175/hour. Starting estimates are based on the listed hours. We confirm the estimate after reviewing requirements and the existing system; additional work begins only after written approval.”**
4. Keep one-time professional fees separate from monthly retainers and third-party vendor charges.
5. Say that clients own and pay for their own domain, hosting, Google Analytics, Clerk, Supabase, Vercel, CRM, and other vendor accounts unless a signed proposal expressly says otherwise.
6. Avoid saying Fee The Developer “waives” a vendor’s charges. If a promotion waives Fee The Developer’s own setup/build fee in exchange for an active protection subscription, identify the waived amount, subscription term, cancellation effects, and third-party costs in the client-specific agreement.
7. Existing contracted or paid work is credited; the public starting price must not imply an automatic new charge for work already paid.
8. Do not publish a guaranteed response time, resolution time, security level, or verification outcome unless an operational service level is actually funded and deliverable.

## Proposed site structure

- `/services`: preserve the current three service groups but make the full delivery scope scannable. Add the relevant new service items: maintenance and protection, analytics, identity/database completion, cloud management, and change retainers.
- `/pricing`: update `lib/catalog.ts` as the single data source for package prices and add-ons. Use one reusable price/assumption display pattern so all starting prices explain their basis.
- Keep Services and Pricing links in global navigation. Keep existing metadata/canonical URLs unless implementation review finds a concrete issue.
- Add a short price-basis note on `/pricing`: DFW comparisons informed these Fee The Developer starting prices; prices are not a statistical market average; final price follows written discovery and scope.

## Acceptance criteria

- All current service categories remain represented: web presence, business discovery, software/automation, support, and add-ons.
- Existing prices that conflict with the new catalog are replaced consistently from `lib/catalog.ts`; no stale $799/$1,299/$1,999/$2,499 or old add-on prices remain in public pricing copy or metadata.
- Clerk + Supabase is shown as **“Starting at $3,500 (20 hours)”**, using $175/hour as the planning rate, with discovery and approval gates for work beyond the initial estimate.
- Services with uncertain or variable requirements display “Starting at” and concise scope limits.
- GA4 audit is only offered if the client has an accessible property; GA4 setup is described as setup, not a historical audit; Google Analytics vendor charges are not represented as Fee The Developer charges.
- Monthly offerings clearly distinguish Maintenance and Support, Developer Change Block, Cloud Management, and the bundled Fee Developer Protection plan. No included hours are counted twice.
- Third-party subscriptions, usage charges, taxes, domains, hosting, premium software, and advertising are disclosed as separate where applicable.
- Build/lint/type checks pass; `/services` and `/pricing` render on mobile and desktop; keyboard/focus states and accessible labels remain valid; all navigation/CTA links work.
- Inspect production/deployment preview before publishing. Do not publish or change the live site audience as part of this content update without the normal release step.

## Dependencies and decisions

- Confirm the $175/hour planning rate is approved for public display.
- Confirm the included entry scope for Website Launch and Digital Presence Bundle.
- Confirm whether the Fee Developer Protection bundle includes hosting/vendor costs or only administration; recommendation is that vendor costs remain client-owned and separate.
- Confirm support hours, response target, backup frequency, retention, and emergency-work cap before describing them as commitments.
- Confirm whether the service should be named “Fee Developer Protection” or “Fee Developer Protection Contract” in the public site catalog; reserve “Contract” for the signed client agreement.
- Confirm whether the customer account feature is a basic auth/database completion or a full customer portal; the published $3,500 starting point applies only to the bounded basic completion described above.

## Security and ownership considerations

- Never place Clerk secrets, Supabase service-role keys, Google credentials, or client credentials in source code, screenshots, public proposals, or browser-visible environment values.
- Client-owned accounts should retain owner/admin authority. Use named least-privilege collaborator access for Fee The Developer.
- Ensure Supabase row-level security is reviewed and tested before enabling client data flows; a successful login is not evidence that data is isolated correctly.
- Confirm privacy notice, consent, retention, and analytics choices with the client. Fee The Developer does not provide legal advice.
- Use a written client approval for extra work, emergency remediation, migrations, and access changes.

## Source links for the implementation brief

- [Current site repository](https://github.com/FeeTheDeveloper/feethedev-site)
- [PCDrama DFW web development pricing](https://pcdrama.com/web-development)
- [Red Spot Design Dallas website pricing](https://www.redspotdesign.com/average-cost-website-design-dallas/)
- [DFW maintenance pricing comparison](https://websitemaintenance.com/articles/website-maintenance-cost-in-dallas)
- [Dallas custom software engineering rates](https://www.nextgencodingcompany.com/insights/custom-software-development-company-dallas)
- [GA4 specialist packages](https://ga4services.com/packages/)
- [Google Analytics](https://marketingplatform.google.com/about/analytics/)
