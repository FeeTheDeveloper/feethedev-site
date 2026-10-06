# Review log — Fee The Developer 15s brand reel

Shotlist approved 2026-10-06. Rounds 1–3 below were judged by the builder from the
rendered contact sheets and stills (not from the code). Round 4 is an independent critic.

---

## Round 1: first full build, both formats

Judged from `review/sheets/sheet_16x9.jpg` and `sheet_9x16.jpg`.

**3 worst problems**

1. **The build shot was empty for more than half its length (10.0–13.0s).** `PLAN.` /
   `DEVELOP.` / `DEPLOY.` were on a 1-beat cycle, but a `heavy` rise leads the beat by
   ~0.27 beats and a `snappy` exit needs ~0.38 beats, so each word was on screen for
   ~0.3s and the sheet caught empty slots at beats 20, 21, 22 and 23. Only `REPEAT.` read.
2. **The site capture was unreadable at 16:9.** The whole 1600×1000 hero was scaled into a
   1640×700 card, so the real UI — the point of the shot — was a grey smudge.
3. **Shot 3 collided with shot 4 at beat 16.** The three system cards were still at full
   opacity while `Veteran-owned software.` rose through them. Mush, not a collapse.

**Fixes applied for round 2**

1. Cycle respaced to 1.5 beats (20.5 / 22 / 23.5 / 25) — ~0.8s per word.
2. Capture re-cropped to a logical origin + scale per format: 16:9 frames the headline and
   the founder card, 9:16 frames the founder card alone.
3. The collapse now starts 0.55 beats before `promise` and drops card opacity as they
   converge, so the cards are clear before the new line is readable.

Also: shortened the beat-10 cover from 1.5 beats to 0.8 (it was holding a flat blue card),
pulled the riser bloom back, enlarged the end-card badge, and moved the 9:16 wordmark
inside the right 12% zone.

---

## Round 2: after respacing and re-cropping

**3 worst problems**

1. **Bar lines 20 and 23 still sampled empty** — the cycle started on the half-beat, so the
   hard cut into the build shot opened on an eyebrow and a bar, with no word.
2. **The hook was sliced by the rising panel's top edge** at beat 4, reading as a clipping
   bug rather than a deliberate cover.
3. **9:16: the systems caption ran through card three.** Cards at 300px tall starting at
   y=420 ended at 1464; the caption sat at 1356.

**Fixes applied for round 3**

1. Cycle moved onto the bar lines: 20 / 21.5 / 23 / 24.5.
2. Hook block lifts and recedes as the panel rises instead of sitting still under the edge.
3. 9:16 cards shortened to 262px with a 44px gap; caption moved to 1356/1404, clearing the
   bottom 20% zone at 1536.

Also: the capture now fills the card by beat 5 (was beat 6), so the panel is never a blank
rectangle while it rises.

---

## Round 3: after re-timing — measured

`review/r3/metrics.json` and `review/r4/metrics.json`:

| Metric | Value | Target |
|---|---|---|
| near-blank frames | `[]` | none |
| longest static run | 0.70s | < 2s outside the end card |
| max gap between visual events | 2.43s | 2–4s |
| loop seam jump | 12.6 | < 10 reads continuous; 40–80 is a hard cut |
| loudness | −14.0 LUFS | −14 ±0.5 |
| true peak | −1.2 dBTP | ≤ −1 |
| determinism | 12/12 probes identical, both formats | all identical |

**3 worst problems**

1. **9:16: the hook exited up through the top 14% platform UI zone** (`review/r3/safe_9x16.jpg`,
   2s) — `CREATE.` / `SCALE.` sat in the unsafe band while leaving.
2. **Glyph slivers left of the covering panel.** `.abs` anchors transforms at 0,0, so
   shrinking the hook block pushed its left edge ~10px outside the panel; stubs of
   `B`/`A`/`C`/`S` stayed visible beside the card through 2.5s (`review/stills/9x16/t2.500.png`).
3. **Indicator hits read ~67ms early** (`metrics.sync`, 7/12 within 45ms). The stops were
   already offset by `leadFor('snappy')` and then sprang from there — a double lead.

**Fixes applied for round 4**

1. 9:16 panel raised to y=300 and the hook lift cut to 170px, so the words are covered
   rather than travelling through the zone. Verified in `review/r4/safe_9x16.jpg`.
2. Hook block given an explicit centre transform-origin, so it recedes inward. Verified at
   `--at 2.4` in both formats: no bleed past the panel edge.
3. Indicator lead halved in both the systems and build shots.

---
