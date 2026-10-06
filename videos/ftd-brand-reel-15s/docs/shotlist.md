# Shotlist — Fee The Developer, 15s brand reel

**Status: APPROVED by King Fee, 2026-10-06.** Build proceeds against this shotlist.

15.0s · 120 bpm · 30 beats · 7.5 bars · 60 fps · 16:9 and 9:16 · no voiceover

Every word below is either the site's own copy or the brand's own tagline. No numbers,
client names, testimonials or results appear, because none have been supplied.

---

## 1 — Hook · beats 0–4 · 0.0–2.0s

**On screen:** `BUILD.` `AUTOMATE.` `CREATE.` `SCALE.`
Two lines in 16:9 (`BUILD. AUTOMATE.` / `CREATE. SCALE.`), four stacked lines in 9:16.
Accent `#2578FF` on `AUTOMATE.` only. Eyebrow above, fading in: `VETERAN-OWNED · WEB · AI · BUSINESS PRESENCE`.

**Motion:** words masked-rise one per half-beat, `heavy` spring. `BUILD.` is released at
beat −0.4 so **frame 0 already reads it** — the frame is never empty. Site grid texture
drifts up behind at a constant 6px/s. Camera push 1.00 → 1.04 across the shot.

**Transition out:** the headline block **gets covered** by the site panel rising from below.

**SFX:** `thump` on beat 0 (BUILD lands) · `pop` on beats 1, 2, 3.

**9:16:** four lines, type at 92px, block sits between the top 14% and bottom 20% zones.

**Source:** the site's own H1 (`assets/site/hero.png`) and its `status-chip`.

---

## 2 — The site · beats 4–10 · 2.0–5.0s

**On screen:** the real feethedeveloper.com hero, rebuilt from the capture — nav wordmark
`FEE THE DEVELOPER`, the nav rule, the chip, and the founder card with its caption
`Technology execution backed by a complete digital business presence.`

**Motion:** the panel rises through the frame and covers the hook. The nav rule wipes
left→right on beat 6. The founder card settles out of a 16° perspective toward ~3° with a
deep contact shadow, landing on beat 7.5. Camera push 1.00 → 1.03.

**Transition out:** hard cut on the bar line at beat 10, under full cover of a horizontal wipe.

**SFX:** `whoosh` on beat 4 · `click` on 5 and 6 · `whoosh` on 7.5.

**9:16:** a tighter crop of the real hero — founder card and chip only, nav wordmark above.

**Source:** `assets/site/hero.png`, `assets/brand/ftd-founder-hero.webp`. Checked: no
emails, keys, dashboards or client records in frame.

---

## 3 — Systems · beats 10–16 · 5.0–8.0s

**On screen:** three cards, left to right — `WEB` · `AI` · `BUSINESS PRESENCE`.
Under them, one line: `We design the site, wire the systems, and connect the business.`

**Motion:** cards build skeleton → content, one per 1.5 beats. An accent indicator bar
tracks between them (`Motion.indicator`): leading edge stiffer, so it stretches and
settles on each card. Camera drifts laterally with the indicator, 40px total.

**Transition out:** the three cards **collapse into** the promise line that replaces them.

**SFX:** `whoosh` on 10 · `click` on 10.5, 12, 13.5.

**9:16:** cards stack vertically, indicator runs down the left edge.

**Source:** the site's own capability wording, shortened from the hero sub
(`We design the site, wire the systems, strengthen the digital presence, and connect the
business to the tools that make it move.`).

---

## 4 — The promise · beats 16–20 · 8.0–10.0s

**On screen:** `Veteran-owned software.` / `Custom builds, automation, AI integration.`
Second line in accent.

**Motion:** the collapsing cards become the first line. Second line masked-rises on beat 18,
first line is fully gone before it lands. Grid still drifting. Camera push 1.00 → 1.05.

**Transition out:** push past camera into shot 5.

**SFX:** `whoosh` on 16 · `pop` on 18.

**9:16:** same two lines, type at 78px.

**Source:** the preset's stated positioning, which is the site's own.

---

## 5 — Build · beats 20–26 · 10.0–13.0s

**On screen:** `PLAN.` `DEVELOP.` `DEPLOY.` `REPEAT.` cycling on the beat in one fixed
slot — one word visible at a time, each lifting out as the next rises. Behind them the
42px grid accelerates and the accent ramp (`#0D2BFF → #2578FF → #22D3EE`) sweeps through it.

**Motion:** word swaps are strictly sequential — outgoing ≥95% gone before the incoming
lands. Grid speed ramps from 6px/s to 90px/s across the shot. Music drops out at beat 25
(the gap) while the riser climbs.

**Transition out:** the grid snaps to a stop and the logo lands on the downbeat at 26.

**SFX:** `whoosh` on 20 · `tick` every half-beat from 20 to 24 · `riser` from 25.

**9:16:** identical; the word slot moves above centre to clear the bottom 20%.

**Source:** `Plan. Develop. Deploy. Repeat.` — the brand's own line, read off the logo
artwork (`public/logo.png`).

---

## 6 — End card · beats 26–30 · 13.0–15.0s · 2.0s

**On screen:** the FTD logo mark, `IDEAS TO IMPACT` beneath it, and `feethedeveloper.com`.

**Motion:** the logo lands hard on beat 26 (scale 0.88 → 1, `heavy`), the tagline rule
draws out from under it on 26.5, `feethedeveloper.com` rises on 27. **Never static:** the
logo holds a 1.00 → 1.03 push and the grid keeps a slow drift for the full 2s. Closes on
the same dark field it opened on, so the reel loops clean.

**SFX:** `thump` on 26 · `pop` on 27. Music drop on 26, ending in a swell into the loop point.

**9:16:** logo larger, stack centred between the 14% and 20% zones.

**Source:** `public/logo.png` (the real brand mark), `siteConfig` URL.

---

## Palette, fonts, music, VO — for the OK

- **Palette:** `#05070B` bg · `#0B1018` card · `#F3F6FA` ink · `#91A0B7` ink-2 ·
  **one accent `#2578FF`** with ramp `#0D2BFF` → `#22D3EE`. All from `tailwind.config.ts`
  and confirmed against the live site capture. `greenglow` and `redglow` are deliberately
  not used — a second accent breaks the house rule.
- **Fonts:** Manrope — the site's real face. Display 800, UI 400–600.
  `assets/fonts/manrope-latin-var.woff2`, SIL OFL 1.1, redistributable.
- **Music:** synthesized in code (`music.py`), Am–F–C–G at 120 bpm, with a gap before the
  end card and a drop on the logo. No licensed track needed. Mixed to −14 LUFS, TP ≤ −1 dBTP.
- **Voiceover:** none. **No VO spend.**
- **Formats:** 16:9 and 9:16, both 60 fps.

## Checks this shotlist satisfies

- Hook reads in the first 2s, and frame 0 is not empty.
- Something new happens every 2–3s; nothing holds longer than one bar.
- End card is exactly 2.0s and never static.
- No crossfades, no spins, no glitches, no light leaks, no glow on UI chrome.
- No pure opacity fade used as an enter or exit (only the shot-1 eyebrow fades).
- One accent, as a tonal ramp.
- Every readable element ≥28px at 1080p and clears the 360px phone check.
- No fabricated proof: no numbers, no client names, no testimonials, no results.
- One company only. Nothing from Hutchrok, Runner Gang Lifestyle, Fee The Producer or
  Runner Sports & Analytics appears.
