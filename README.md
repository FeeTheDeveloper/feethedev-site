# FEE THE DEVELOPER

Production-ready Next.js 14 starter using the App Router, TypeScript, Tailwind CSS, Framer Motion, React Three Fiber, and Drei.

## Included

- Next.js 14
- App Router
- TypeScript
- Tailwind CSS
- ESLint + Prettier
- Framer Motion
- React 18
- React Three Fiber
- Drei

## Local Development

```bash
npm install
npm run dev
```

## Quality Checks

```bash
npm run lint
npm run build
npm run format:check
```

## Structure

- `app/` App Router entrypoints
- `components/` reusable UI and Three.js components
- `lib/` shared config and helpers
- `styles/` global theme styles
- `public/` static assets

## Deployment

This project is ready for a standard Vercel deployment with no custom server setup.

### Recommended Vercel Settings

- Framework Preset: `Next.js`
- Root Directory: `.`
- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: leave blank
- Node Version: use the Vercel default for Next.js 14 or set a current LTS release

### Deploy Flow

1. Push the repository to GitHub on `main`.
2. Import the repository into Vercel.
3. Keep the detected Next.js settings.
4. Deploy.

### Pre-Deploy Checks

```bash
npm run format:check
npm run lint
npm run build
```

### Notes

- No environment variables are required for the current build, but setting `NEXT_PUBLIC_SITE_URL` in Vercel is recommended for the final canonical domain.
- `app/` uses the Next.js App Router and is already production-ready.
- `app/robots.ts` and `app/sitemap.ts` are included for search-engine-ready deployment.

## Commerce, Data, and Program Systems

Added: `/pricing`, `/certifications`, `/data-intelligence`, a site-wide header/nav, live Stripe
checkout wired to the real Fee The Developer LLC catalog (`lib/products.ts`), a veteran-verification
request flow, and Supabase-backed lead capture.

**Required environment variables** (see `.env.example`):

| Variable | Purpose |
| --- | --- |
| `STRIPE_SECRET_KEY` | Server-side Checkout Session creation (`app/api/checkout`) |
| `STRIPE_WEBHOOK_SECRET` | Verifies `app/api/stripe-webhook` signatures |
| `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Public-form inserts (RLS-scoped) |
| `SUPABASE_SERVICE_ROLE_KEY` | Server-only, used exclusively by the Stripe webhook to log events/orders |
| `RESEND_API_KEY` | Lead confirmation emails |

Supabase project: `wjedqgrzuvkhnqctsmnd` ("Fee The Developer"). Migration
`supabase/migrations/20260916080000_site_operational_tables.sql` has already been applied — it adds
`leads`, `project_intakes`, `clients`, `service_orders`, `apprenticeship_applications`,
`devil_to_developer_signups`, `veteran_verifications`, `contact_submissions`,
`newsletter_subscribers`, `stripe_event_log`, and `resend_event_log`, all with RLS enabled. Public
forms get INSERT-only policies; `clients`, `service_orders`, and the event logs have no anon
policies at all and are only ever written by the service-role client in the Stripe webhook route.

**Known gaps / next steps:**

- The Resend domain (`feethedeveloper.com`) is added but its DNS verification status is currently
  `failed` — add the DNS records Resend provides at your registrar before relying on outbound email.
- The real Google Business Intelligence certificate image hasn't been supplied. `lib/certifications.ts`
  intentionally sets `image: null` so the card falls back to a generic "Credential Seal" instead of a
  broken image; drop the real JPG at `public/images/certifications/` and update that field once you
  have it.
- `project_intakes`, `clients`, `contact_submissions`, `newsletter_subscribers`,
  `apprenticeship_applications`, and `devil_to_developer_signups` have schema + RLS ready but are not
  yet wired to a specific form — `/start` still uses its existing `mailto:` flow by design (left
  untouched as a working integration), and the new `leads` / `veteran_verifications` tables are the
  two fully wired end-to-end examples to extend from.
- Veteran pricing is enforced by Stripe's `allow_promotion_codes` on eligible Checkout Sessions, not by
  a custom gate — the `VETERAN20` code itself is only ever shared after a human reviews a submitted
  `veteran_verifications` row, by design.
