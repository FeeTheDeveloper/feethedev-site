# Durable project intake + dashboard fail-closed (2026-10-07)

Source: Fee The Developer Autonomous Operations Engineering Handoff v1.0, phase P2 (durable intake). King Fee's decisions on 2026-10-07:

- The public contact address is `contact@feethedeveloper.com`.
- Supabase is the source of truth for leads, clients and projects.

## What changed

**`POST /api/intake`** (`app/api/intake/route.ts`, `lib/intake.ts`)

What it checks and returns:

| Request                                                           | Response                           |
| ----------------------------------------------------------------- | ---------------------------------- |
| `Origin` doesn't match the request host or `NEXT_PUBLIC_SITE_URL` | `403`                              |
| Not a JSON body                                                   | `415`                              |
| Body over 16 KB                                                   | `413`                              |
| Fails field validation                                            | `400` with the failing field names |
| Honeypot field `website` filled                                   | `202`, nothing stored              |
| Supabase not configured                                           | `503`                              |
| Supabase unreachable or rejects the write                         | `502`                              |
| Stored                                                            | `201` with a reference             |

How storage works:

- The route writes to `public.project_intakes` through Supabase REST using the server-only `SUPABASE_SECRET_KEY`.
- The browser creates a `submissionId` once per visit. The write uses `on_conflict=submission_id` with `resolution=ignore-duplicates`, so a retry or a double-click stores one row.
- Any non-2xx response sends the visitor to the existing email draft to `contact@feethedeveloper.com`. The email path stays as the fallback.

**`ProjectIntakeForm`**

- Posts to `/api/intake` and shows a confirmation with the reference.
- Disables the submit button while sending.
- Falls back to email on any failure.

**Migration `supabase/migrations/20261007190000_create_project_intakes.sql`**

- Creates `public.project_intakes`.
- The tenant is pinned to `fee-the-developer`.
- Every field has a length check, and status is limited to a fixed set of values.
- RLS is enabled and anon/authenticated access is revoked. Only the server key can read or write.

**`middleware.ts`**

- Returns 404 for `/dashboard(.*)` when Clerk is not configured.
- `app/dashboard/page.tsx` already called `notFound()` in that case, so this adds a second layer.

## Production schema reconciliation (2026-10-07)

`public.project_intakes` already existed in production. It was created by the remote-only migration `site_operational_tables` (2026-09-16), which is not in this repo, with a `budget_range` column and no idempotency key. The original `create table` migration would have failed, and the route's inserts would have been rejected. Fix:

- The migration is now additive. It adds `submission_id` (unique), `tenant_id`, `source`, `status`, `user_agent` and `updated_at`, plus constraints and indexes, and revokes anon/authenticated access.
- King Fee approved it, and it was applied to Supabase project `wjedqgrzuvkhnqctsmnd` on 2026-10-07. It is recorded in the remote history as `create_project_intakes`.
- The route now writes `budget_range`.
- Verified in production inside a rolled-back transaction: a duplicate `submission_id` stores one row with tenant `fee-the-developer` and status `received`.

## Activation (remaining)

1. ~~Apply the migration to the production Supabase project.~~ Done 2026-10-07.
2. Set `SUPABASE_SECRET_KEY` on the production host: a Cloudflare Worker secret (`wrangler secret put SUPABASE_SECRET_KEY`) and/or a Vercel project environment variable, depending on which host serves feethedeveloper.com.
3. Confirm `NEXT_PUBLIC_SUPABASE_URL` is set for the build.
4. Deploy. Production deploys need Level C approval.
5. Submit one test intake and confirm the row.

Until steps 1–3 are done, `/api/intake` returns 503 and every visitor gets the email path, which is the current behavior.

## Known gaps

- No rate limiting beyond the Origin check, honeypot and size limits. Turnstile or Cloudflare rate limiting is the follow-up.
- No acknowledgement email to the prospect yet. That needs the mailbox connector for `contact@` (P2).
- There is no test runner in this repo. Verification was done by running the production build locally against a mock Supabase REST server; see the PR.
