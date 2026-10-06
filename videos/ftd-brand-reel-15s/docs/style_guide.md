# Style guide — Fee The Developer, 15s brand reel

Everything here is measured, not invented. Sources are named per value.

## Palette

One accent, as a tonal ramp. The brand language is multi-coloured (the site headline
runs a gradient through AUTOMATE; the merch wordmark is red/blue/green). Per the house
rule, the film uses ONE accent and translates the rest into a ramp of it.

| Token | Hex | Source |
|---|---|---|
| `--bg` | `#05070B` | `tailwind.config.ts` `background`; confirmed by capture (`rgb(5, 7, 11)`, 6 uses) |
| `--card` | `#0B1018` | `tailwind.config.ts` `panel` |
| `--ink` | `#F3F6FA` | `tailwind.config.ts` `silver`; capture `rgb(243, 246, 250)`, 17 uses |
| `--ink-2` | `#91A0B7` | `tailwind.config.ts` `muted`; capture `rgb(148, 163, 184)`, 24 uses |
| `--accent` | `#2578FF` | `tailwind.config.ts` `electric` — the site's action colour (`shadow-electric`, CTA fills) |
| `--accent-deep` | `#0D2BFF` | `tailwind.config.ts` `cobalt` — low end of the ramp |
| `--accent-lift` | `#22D3EE` | `tailwind.config.ts` `cyan` — high end of the ramp |
| `--line` | `rgba(255,255,255,0.10)` | `tailwind.config.ts` `line`; matches captured borders |

Not used in this film, and deliberately: `greenglow #14E8B4` and `redglow #FF6B35`. They
are real brand colours but a second and third accent would break the one-accent rule.
The grid texture is the site's own: `rgba(255,255,255,.045)` 1px lines on a 42px pitch
(`tailwind.config.ts` `backgroundImage['ftd-grid']`, `styles` `body::before`).

## Type

One display face, one UI face — both Manrope, the site's real face.

- **Display:** Manrope 800, tracking `-0.03em`, line-height `0.95`. The site sets its
  headline and wordmark in Manrope 800 (capture: `FEE THE DEVELOPER` at 18px/800/ls 1.8px).
- **UI:** Manrope 400–600.
- **File:** `assets/fonts/manrope-latin-var.woff2` — the variable Latin subset, weights
  200–800, from Google Fonts. Manrope is SIL OFL 1.1, so redistribution is allowed.
  (`capture.mjs` pulled the site's own static 400 subsets; the variable file is used
  instead because the display weight needs 800.)
- Eyebrow / chip text: Manrope 600, uppercase, tracking `0.22em` — the site's own
  `status-chip` habit.
- Punctuation habit: the site ends headline words with full stops — `BUILD.` `AUTOMATE.`
  `CREATE.` `SCALE.` That habit carries into the film.
- Type is left-aligned at x ≥ 120px (1080p). Nothing readable drops below 28px at 1080p.

## Rhythm

120 bpm, 4/4, 2.0s per bar. 15s = 30 beats = 7.5 bars. Hard cuts land on bar lines;
inner events land on beats and half-beats, read from `beats.json`.

| Shot | Beats | Time | Holds |
|---|---|---|---|
| 1 Hook | 0–4 | 0.0–2.0s | 2.0s — four words, one per half-bar |
| 2 The site | 4–10 | 2.0–5.0s | 3.0s |
| 3 Systems | 10–16 | 5.0–8.0s | 3.0s |
| 4 The promise | 16–20 | 8.0–10.0s | 2.0s |
| 5 Build | 20–26 | 10.0–13.0s | 3.0s |
| 6 End card | 26–30 | 13.0–15.0s | 2.0s — never static |

Nothing holds longer than one bar without a new element. Every held shot keeps a micro
push of 1.00 → 1.03–1.06.

## Transitions

- Hook → site: the headline block **gets covered** by the site panel rising from below.
- Site → systems: a hard cut on the bar line, under full cover of a horizontal wipe.
- Systems → promise: the three cards **collapse into** the promise line that replaces them.
- Promise → build: push past camera.
- Build → end card: the grid accelerates and the logo lands on the downbeat.

No crossfades. No spins, glitches or light leaks. A pure opacity fade is never an enter
or an exit; only the eyebrow lines may fade.

## Camera

Slow, heavy. One push per shot, 1.00 → 1.04 over the shot, `heavy` spring. One lateral
drift in shot 3 only, tracking the indicator. Camera multipliers are divided out
downstream so they do not compound.

## Texture

The site's own 42px grid at 4.5% white, masked to fade out toward the bottom — matching
`body::before`. Deep soft contact shadows under cards (`0 30px 80px -20px rgba(0,0,0,.6)`).
No glow on UI chrome. The site's radial washes (electric at 16%/8%, cyan low) sit behind
the grid at reduced opacity.

## Text in / out

- **In:** masked rise, words released per-beat, starting ≥140% below the mask.
- **Out:** lift back through the mask, exit ≈0.14s, fully gone before the incoming line
  lands (at most one frame of overlap, outgoing ≥95% gone).
- Accent goes on one key word per line only — `AUTOMATE.` in the hook, the second phrase
  elsewhere.

## Sound

Synth score (`music.py`), Am–F–C–G, 120 bpm. Section plan: intro at the hook, full at the
site, build through the systems, gap before the end card, drop on the logo. SFX are
synthesized (`sfx.mjs`) and every hit is declared in `timeline.json` `sfx` on the measured
grid. Mix to −14 LUFS integrated, true peak ≤ −1 dBTP. No voiceover in this cut.

## 9:16

Re-blocked, never letterboxed. Key content clears the platform UI zones: top 14%,
bottom 20%, right 12%. The hook stacks to four lines instead of two; the three system
cards stack vertically and the indicator runs down the left edge instead of across;
the site panel uses a tighter crop of the real hero rather than the full width.

## What this film must not do

Per the FTD preset: no other company's logo, colour or client data (Hutchrok, Runner Gang
Lifestyle, Fee The Producer, Runner Sports & Analytics and clients each have their own
preset). No numbers, testimonials, client names or results — none have been supplied, so
none appear. No credentials, emails or dashboards from the captures.
