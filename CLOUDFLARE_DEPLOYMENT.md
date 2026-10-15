# Cloudflare Workers Deployment

This Next.js application deploys to Cloudflare Workers through the OpenNext adapter.

- Worker name: `fee-the-developer`
- Account: `Fee@feethedeveloper.com's Account` (`62738e2bb751720449f1cd904f6d175f`, pinned as `account_id` in `wrangler.jsonc`)

## Authentication

`wrangler deploy` needs the `workers_scripts:write` scope. A token holding only
the legacy `workers:write` scope fails with `No access to the specified resource`
against `/workers/scripts/...`. Refresh it with:

```bash
npx wrangler login
```

Or export a scoped API token (Workers Scripts:Edit) instead:

```bash
export CLOUDFLARE_API_TOKEN=...
```

Check what the current token holds with `npx wrangler whoami`.

## Configuration split

`wrangler.jsonc` → `vars` holds only values that are safe to commit: the site
and booking URLs, the Clerk publishable key, and the Supabase project URL plus
publishable key.

Secrets are never committed. Push them from `.env.local` with:

```bash
npm run cf:secrets            # dry run, prints names and lengths
node scripts/set-cloudflare-secrets.mjs --apply
```

That covers `CLERK_SECRET_KEY`, `SUPABASE_SECRET_KEY`, `STRIPE_SECRET_KEY`, and
the four `MERCH_*_STRIPE_LINK` maps.

`CLERK_SECRET_KEY` is load-bearing. `middleware.ts` enforces `/dashboard`
protection when both Clerk keys are present and fails closed with `404` when
they are not.

## Build

```bash
npm run deploy    # opennextjs-cloudflare build && opennextjs-cloudflare deploy
```

### Windows caveat

OpenNext warns that it is not fully supported on Windows, and in this repo its
child `npm run build` aborts with status 134 while the same build succeeds when
run directly. Work around it by producing the standalone output first and
letting OpenNext reuse it:

```bash
NEXT_PRIVATE_STANDALONE=true npm run build
npx opennextjs-cloudflare build --skipNextBuild
npx wrangler deploy
```

Prefer WSL or Linux CI for a clean single-command build.

`wrangler.jsonc` deliberately has no `build.command`. `npm run deploy` already
runs the OpenNext build, so a custom build command there makes `wrangler deploy`
re-enter that build.

## Local verification

```bash
npx wrangler dev --local --port 8787
```

Runtime secrets come from `.dev.vars` (gitignored). This runs the real `workerd`
runtime and is the production-parity check. Verified routes:

- `/` returns 200
- `/dashboard` returns 307 to `/sign-in` (Clerk middleware active)
- `/merch` renders the Stripe payment links
- `/api/supabase/health` reports key wiring and `service_catalog` reachability

## Supabase

The project is `gbsqtusozqvfxaojfflt`. The new-format keys
(`sb_publishable_…` / `sb_secret_…`) are wired through `lib/supabase/`.

`/api/supabase/health` returns 503 until
`supabase/migrations/20261001190207_create_fee_developer_service_catalog_20261001.sql`
is applied to that project.

## Domain cutover

`feethedeveloper.com` is already on Cloudflare nameservers but its records still
point at Vercel (apex `216.150.x`, `www` → `vercel-dns`). The Worker is verified
on `*.workers.dev` only. To move the live site:

1. Attach `feethedeveloper.com` and `www` as Worker custom domains.
2. Let Cloudflare replace the Vercel apex/`www` records.
3. Keep DNS proxied.

Before cutover, set a real `NEXT_PUBLIC_DEPOSIT_URL`. `.env.local` holds a
placeholder, and `lib/site-config.ts` only accepts a `buy.stripe.com` host, so
the deposit button currently falls back to `/start#next-step`.

## Security and operations

- Worker observability is enabled in `wrangler.jsonc`.
- Static Next.js assets use immutable one-year caching.
- Runtime compatibility uses `nodejs_compat`.
- `NEXT_PUBLIC_RESEND_API_KEY` in `.env.local` is a live `re_…` key carrying a
  browser-exposed prefix and is read by nothing in the source. It is not set on
  Cloudflare; rotate and remove it.
