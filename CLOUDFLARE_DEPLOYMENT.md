# Cloudflare Workers Deployment

This Next.js application deploys to Cloudflare Workers through the OpenNext adapter.

## Cloudflare dashboard setup

1. Open **Workers & Pages → Create → Import a repository**.
2. Select `FeeTheDeveloper/feethedev-site`.
3. Use `npm install` as the dependency installation command.
4. Use `npm run deploy` as the deploy command.
5. Configure the production branch after Pull Request #2 is merged.

## Build variables

Configure these under **Build Variables and secrets**:

- `NEXT_PUBLIC_SITE_URL=https://feethedeveloper.com`
- `NEXT_PUBLIC_BOOKING_URL=<approved scheduling URL>`
- `NEXT_PUBLIC_DEPOSIT_URL=<approved payment URL>`

These `NEXT_PUBLIC_*` values are compiled into the client bundle and are not secrets.

## Local verification

```bash
npm install
npm run build
npm run preview
```

The preview command runs through the Cloudflare `workerd` runtime and is the production-parity check.

## Deployment

```bash
npm run deploy
```

Attach `feethedeveloper.com` as the Worker custom domain after the first successful deployment. Keep DNS proxied through Cloudflare.

## Security and operations

- Worker observability is enabled in `wrangler.jsonc`.
- Static Next.js assets use immutable one-year caching.
- Runtime compatibility uses `nodejs_compat`.
- Secrets must be configured in Cloudflare and never committed.
