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
