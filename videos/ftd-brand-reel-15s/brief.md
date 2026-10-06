# Brief

Preset: `fee-the-developer` (Fee The Developer - brand reels). Fields it did not fill still say `?`.

Fill every field before building. `?` means "ask the user". A default is used only if the user says "your call".

| Input | Value | Default if "your call" |
|---|---|---|
| Product | Fee The Developer | — (required) |
| URL | https://www.feethedeveloper.com | — (required; the source of real UI, fonts and colours) |
| One-line promise | Veteran-owned software: custom builds, automation and AI integration. | the site's H1, shortened |
| Audience / platform | ? | social feed (sound-off readable) |
| Duration (s) | 15 | 15–20 |
| Formats | 16x9, 9x16 | 16x9 + 9x16 (also available: 1x1, 4x5) |
| Brand colours | ? | measured from the site (capture.mjs) → one accent |
| Fonts | ? | the site's own faces (capture.mjs downloads them) |
| Reference film | ? | none: rhythm from the house rules |
| Music | synth | `synth` (scripts/music.py) or a supplied file path |
| Voiceover | none | none, or ElevenLabs / Fish Audio (voice id / name) |
| CTA / end card | ? | "Try it at <domain>" |
| Must show | ? | the 3 features the site leads with |
| Must avoid | other companies' logos, colours or client data (Hutchrok, Runner Gang, Fee The Producer, Runner Sports and clients each have their own preset); unverified numbers, testimonials or results; credentials or private dashboards in screenshots | — |

## Messages, in order
1.
2.
3.

## Notes
- One company per film. Nothing from another Hutchrok network company or client appears in an FTD reel.
- Colours, fonts and UI are measured from feethedeveloper.com or supplied by King Fee. Never guessed.
- On-screen numbers, client names and results must be real and supplied. No placeholder proof.
- Check every captured screenshot for credentials, emails and client records before it enters the film.
- Shotlist needs King Fee's explicit OK before any build. Publishing is his call, not part of the render.
- Everything that must be read passes the 360 px-wide phone check in every format.
- Parallel sessions: always scaffold into a new, distinctive videos/<slug>.
