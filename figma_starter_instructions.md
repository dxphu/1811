# Figma Starter Instructions — Lingua Quest Prototype

Purpose: give the design team a step-by-step recipe to create the initial Figma project (Main Map + Grammar Bridge mini-game prototype). Includes component tokens, breakpoints, and export settings.

---

## Project Setup
1. Create a new Figma file named `Lingua Quest - Prototype`.
2. Add pages: `Design System`, `Map`, `Mini-Games`, `Store`, `Memory Vault`, `Expedition`, `Profile`.
3. Invite stakeholders (PM, Tech Lead, Art Lead) and set comment-only on `Design System` for freeze.

---

## Design System Page
- Add color tokens (Primary, Secondary, Accent, Background, Surface, Success, Warn, Error).
- Typography tokens: H1 (32), H2 (24), H3 (18), Body (14), Small (12). Use `Inter`.
- Spacing scale: 4, 8, 12, 16, 24, 32.
- Components: Button/Primary, Button/Secondary, TopBar, NavBar, CurrencyChip, ProgressBar, Modal.

**Color tokens (suggested):**
- Primary: #00A8A0 (teal)
- Secondary: #FF6B6B (coral)
- Background: #F7F9FB
- Surface: #FFFFFF
- Accent: #FFD166
- Success: #38C172
- Text Primary: #1F2937

---

## Map Page (Main Map Frame)
- Frame size: 1440×900 (desktop canvas for wide previews), create 2 additional frames: 1080×1920 (mobile portrait), 390×844 (iPhone 12).
- Place isometric city background (import vector or PNG). Create groups for each zone with clickable hotspots (use Prototype links).
- Top bar component: left avatar + name, center progress, right currency chips.
- Bottom nav: icons for Home, Vault, Store, Profile.

Interactions to wire:
- Tap zone hotspot → open Zone Detail modal (overlay)
- Tap Daily CTA → open Legendary Expedition

---

## Mini-Game Template: Grammar Bridge (Mobile)
- Frame size: 390×844.
- Header: Zone name + small progress bar.
- Question Card area: 320×220 centered; use rounded corner card with drop shadow.
- Choice buttons: 4 buttons (full-width) spaced with 12px gap; button height 48px.
- Bottom row: hint (left), XP/Rewards (center), exit (right).
- Prototype flow: simulate 3-question sequence with correct/incorrect state overlays and reward modal.

Assets to create in Figma:
- Zone icons (SVG)
- Question card component (variants: default, correct, incorrect)
- Choice button component (default, hover, selected, disabled)
- Reward modal component (confetti animation can be simulated with Lottie plugin or GIF)

---

## Export & Handoff
- Export settings: PNG @2x for raster art; SVG for icons.
- Provide an `assets` folder inside the Figma file with named exports matching `artist_asset_list.json` ids.
- Generate a specs page with spacing & token usage for developers.

---

## Quick Tasks for First Day
1. Create `Design System` tokens and components (buttons, top bar, chips).
2. Import city background and place 4 zone hotspots.
3. Build Grammar Bridge mini-game frame + 3-question prototype.
4. Export PNGs (mobile frames) for developer previews.

---

## Plugins & Tools Recommended
- Content Reel (sample text)
- LottieFiles (embed simple animations)
- Iconify or Feather Icons
- Stark (accessibility checks)

---

## Notes for Devs
- Keep Figma components atomic and use variants for states.
- Name layers and components clearly (e.g., `Btn / Primary / Default`).
- Deliver an export manifest CSV mapping asset id -> Figma node id -> export format.

