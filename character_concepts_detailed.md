# Character Concepts — Detailed Brief

This document expands the initial character concepts into actionable art briefs for concept artists and 2D/3D modelers.

## Overview
Deliver three primary avatar archetypes + three Spirit Companions (final deliverables: concept sheets, expressions, turnaround, and small animated loops). Each avatar should be easily customizable with modular cosmetics (hats, coats, backpacks, emotes).

---

## Avatar 1 — The Explorer
- Core idea: Curious world-traveler who discovers vocabulary and plants city landmarks.
- Visual cues: Leather travel coat, satchel with map, compass necklace, sturdy boots.
- Silhouette: Triangular (broad shoulders, tapered legs) for recognizability at small sizes.
- Palette: Earth tones (olive #708238, tan #D2B48C) + teal accent (#00A8A0).
- Expressions: neutral, happy (cheer), surprised, thinking (hand on chin).
- Poses: idle (breathing), inspect (holds map), plant-flag (victory).
- Anim loops: idle (0.8s), cheer (0.6s), planting flag (1.2s).
- Cosmetic slots: Headgear, Top, Backpack, Footwear, Accessory.
- Lore blurb (2 lines): "An intrepid explorer mapping the City of Words — collects new words and plants knowledge flags across zones."

---

## Avatar 2 — The Scholar
- Core idea: Knowledge-focused character; fits Grammar Bridge and Library themes.
- Visual cues: Glasses, rolled-up parchment, shoulder satchel, long cardigan.
- Silhouette: Tall and rectangular (bookish profile).
- Palette: Deep indigo #2B3A67, maroon accent #8B3A3A.
- Expressions: neutral, encouraging (smile), proud, corrected (embarrassed)
- Poses: reading, pointing to chalkboard, awarding star.
- Anim loops: reading (1.2s), present-explain (0.8s).
- Cosmetic slots: Glasses, Scarf, Robe/Coat, Accessory (bookmark).
- Lore blurb: "The Scholar stores grammar rules in the Library and rewards learners with insight."

---

## Avatar 3 — The Street Artist
- Core idea: Youthful, energetic; matches Word Arena and creative reward systems.
- Visual cues: Hoodie, paint-splattered jeans, headphones, sticker patches.
- Silhouette: Dynamic, slightly asymmetrical to communicate movement.
- Palette: Charcoal #2F2F2F with neon coral #FF6B6B and cyan #00CED1 highlights.
- Expressions: playful, mischievous, focused.
- Poses: spray-tag, jumping (celebrate), freestyle typing.
- Anim loops: spray-tag (0.9s), cheer (0.6s).
- Cosmetic slots: Hoodie, Headphones, Shoes, Stickers.
- Lore blurb: "Creative soul of the City — turns learning into a playful performance."

---

## Companion 1 — Little Owl (Blinky)
- Function: Passive tutor: shows grammar tip bubbles on mistakes.
- Visuals: small round owl, oversized eyes, feather shaped like a tiny book.
- Palette: warm beige #F5E9DA and chestnut #8B5E3C.
- Anim: idle blink, hop, flap wings when cheering.
- Deliverables: 3 sprites (idle, hint, celebration); 1 sticker/emote PNG.

## Companion 2 — Pocket Fox (Flick)
- Function: Collects daily tokens, gives hints for Memory Vault.
- Visuals: small fox with glowing tail tip, satchel.
- Palette: russet #C04E01, cream #FFF3E0.
- Anim: tail-wag, dash, present-token.
- Deliverables: 3 sprites + 1 6-frame run cycle for small in-map movement.

## Companion 3 — Lantern Bug (Lumi)
- Function: Visualizes SRS progress by changing light color on streaks.
- Visuals: beetle-like with tiny lantern abdomen; soft glow.
- Palette: midnight blue #0C1B2A with biolum green #8DFC9A.
- Anim: glow pulse (loop), fly hover.
- Deliverables: 3 sprites with glow pass, 1 small particle effect spec (confetti on unlock).

---

## Art Deliverables & File Format
- Concept sheet per character: PNG 3000×3000 px (front, 3/4, back) + layered PSD/AI/SVG.
- Expression sheet: 1200×800 px (4 expressions) PNG + source.
- Turnaround: 2000×2000 px (front/side/back) PNG + source.
- Small sprites / UI icons: 128×128, 64×64, 32×32 PNG (transparent) for companion and emotes.
- Animated loops (for game): 24–30 fps, exported as sprite sheets (Power-of-two frames if possible) + Lottie JSON (for simple vector loops) if vector art used.

---

## Priority & Timeline (suggested)
- Week 1: Finalize silhouettes and palettes (3 concepts each, choose 1–2 to move forward).
- Week 2: Full concept sheet + expression sheets for selected designs.
- Week 3: Produce sprites and animation loops for UI use.

---

## Notes for Artists
- Keep shapes readable at small sizes (icon/sprite scale). Test at 64×64 and 32×32.
- Provide color tokens (HEX) and contrast tests for accessibility.
- Deliver layered source files for future recoloring and customization.

---

## Handoff Checklist
- [ ] Concept sheets (source + PNG)
- [ ] Expression sheets
- [ ] Turnarounds
- [ ] Sprite sheets (PNG/atlas) + frame maps
- [ ] Short animation loops (GIF/MP4) for preview
- [ ] Naming and metadata JSON for each asset (id, slot, cost tier, unlock source)

