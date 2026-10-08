# FTD site — 3D signal depth

- **Date:** 2026-10-08
- **Repository / branch:** `feethedev-site` / `feat/3d-signal-depth`
- **Owner:** Claude (engineering) → King Fee (review and merge)
- **Status:** REVIEW

## Objective

Add 3D enhancement to the public site without breaking the signal-system design rules: contrast first, motion removed under reduced motion, no client data implied.

## What shipped

| Piece           | File                                                          | Behavior                                                                                                                                                                   |
| --------------- | ------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 3D signal field | `components/three/SignalField.tsx`                            | three.js node network in brand tokens (electric, cyan, green, rare orange); packets travel node-to-node along links; pointer parallax; scroll drift. Deterministic layout. |
| Layer gate      | `components/three/SignalFieldLayer.tsx`                       | Lazy-loads the scene after hydration; skipped for reduced motion or no WebGL; pauses when off-screen or the tab is hidden; lighter density under 640px.                    |
| Depth tilt      | `components/Tilt3D.tsx` + `.tilt-3d*` in `styles/globals.css` | Perspective tilt and glare on the hero stage, homepage showcase cards, and `/work` portfolio cards. Mouse-only; reduced motion disables it.                                |
| Headline mask   | `.signal-field-mask` in `styles/globals.css`                  | Dims the field behind the hero headline so type keeps full contrast.                                                                                                       |

## Decision log

- **Plain three.js, not `@react-three/fiber`.** The installed fiber v8 crashes on the React 19 runtime bundled with Next 15 (`Cannot read properties of undefined (reading 'ReactCurrentBatchConfig')`), and the crash takes down the whole page. The scene needs no React reconciler, so it uses three.js directly. The existing unused `components/FuturisticRubiksCube.tsx` has the same incompatibility and would crash if mounted.
- Tilt wraps elements instead of transforming them, so GSAP hero choreography and Tailwind hover transforms keep working.

## Verification

- `npx tsc --noEmit`, `npm run lint`, `npm run format:check`, `npm run build`: pass.
- Headless Chromium against `next start`: canvas renders on desktop and mobile; no canvas under `prefers-reduced-motion: reduce`; tilt variables update on pointer move; no page errors. three.js ships in a separate lazy chunk, not in the initial homepage scripts.
- The only console error is a 404 for `/favicon.ico`, which exists on `main` and is unrelated to this change.

## Environment variables

None added.

## Follow-ups (not in scope)

- Remove or upgrade the unused `@react-three/fiber` / `@react-three/drei` dependencies and `FuturisticRubiksCube.tsx` (fiber v9 + drei v10 need React 19 in `package.json`).
- Add `/favicon.ico` (or an `app/icon`) to clear the existing 404.
