# UI Prototype Specification - Lingua Quest

## Purpose
This spec provides the screens, user flows, and assets needed for an interactive Figma prototype (MVP): Main Map, Mini-game screens (Grammar Bridge, Listening Lighthouse, Word Arena, Dialogue Train), City Store, Memory Vault, Legendary Expedition flow, and basic onboarding.

---

## Primary Screens

1) Main Map (Interactive City)
- Elements:
  - Isometric city map with 4 main zones (icons): Grammar Bridge, Listening Lighthouse, Word Arena, Dialogue Train
  - Top bar: Player avatar + level, Gold & Gems, Streak indicator
  - Bottom nav: Home (map), Memory Vault, Store, Profile
  - Floating CTA: Daily Challenge / Legendary Expedition
- Interactions:
  - Tap a zone → zone detail modal with "Play" and "Zone Progress"
  - Long-press building → show building details (benefit, remaining build time)

2) Zone Detail / Level Selector
- Elements:
  - List of levels in the zone with progress (star ratings)
  - "Play" button to start the selected mini-game level
  - "Review Vault" quick link
- Interactions:
  - Tap level → preview questions or start
  - Swipe left/right to change zone

3) Mini-game Screen (Grammar Bridge example)
- Elements:
  - Header: Zone name, progress bar
  - Main area: Question card
  - Multiple-choice buttons (or drag/drop area depending on mini-game)
  - Bottom: XP and reward preview, Hint button, Pause/Exit
- Interactions:
  - Answer selection: immediate feedback animation (green/red) + short explanation on wrong
  - Retry / Continue flow

4) Memory Vault (SRS Review)
- Elements:
  - Daily count badge, list of words to review
  - Flashcard mode: word, definition, example, buttons "I Know" / "I Forgot"
  - Stats: Today reviews done, XP earned
- Interactions:
  - Tap "I Know" or "I Forgot" to move to next
  - Option to play pronunciations (audio icon)

5) City Store
- Elements:
  - Currency display (Gold & Gems)
  - Tabs: Buildings, Cosmetics, Boosts
  - Build flow: confirm cost, build timer progress, accelerate with Gems
- Interactions:
  - Buy / Build / Apply cosmetic
  - Show ownership and limits (e.g., max 3 Libraries)

6) Legendary Expedition Flow (Onboarding & Retention)
- Elements:
  - Progress tracker for Day 1/3/7
  - Fortune Wheel (Day 3) modal
  - Day-7 reward modal with options to claim or share
- Interactions:
  - Push notification deep-link to open the Expedition screen
  - Spin wheel animation with confetti for reward

7) Profile & Settings
- Elements:
  - Avatar customization, Stats (XP, Zones completed, Streaks), Leaderboard shortcut
  - Settings: audio volume, notifications, language
- Interactions:
  - Edit avatar → open cosmetic store
  - Connect with friends (optional)

---

## Visual & Interaction Guidelines
- Art style: friendly low-poly / 2.5D isometric for map; flat, colorful UI for overlays.
- Font: Use a readable sans-serif (e.g., Inter or Roboto). Headings heavier weight, body normal.
- Colors: Warm primary palette (teal, coral) + neutral backgrounds; high-contrast for text.
- Animations: small, quick (150-400ms) for click feedback; 0.5-2s celebratory animations for unlocks.
- Accessibility: High-contrast mode, adjustable text size, alt text for images, audio captions for listening tasks.

---

## Prototype Scope (Figma)
- Frames to create:
  - Onboarding (3 frames)
  - Main Map (1 interactive frame)
  - Zone modal + Level Selector (3 zones templates)
  - Mini-game templates (4 templates: multiple choice, listening, drag-drop, reorder)
  - Memory Vault flashcard flow (1 flow)
  - Store flow (build + cosmetic purchase) (2 frames)
  - Legendary Expedition (3 frames: day tracker, fortune wheel, day7 reward)
  - Profile/Settings (1 frame)
- Components to build:
  - Top bar, bottom nav, currency chip, progress bar, modal, button variants, hint badge
- Interactions to wire:
  - Map tap → zone modal
  - Play → mini-game start (simulate 3 question sequence)
  - Correct/incorrect animation (simulate) and reward modal
  - Spin wheel (prototype: navigate to a reward frame)

---

## Assets Needed for Figma
- Isometric city map background (PNG or vector)
- 4 zone icons (SVG)
- Avatar illustrator files (SVG layers)
- Companion sprites (PNG or SVG)
- UI icons (audio, hint, coin, gem, settings)
- Sample word images for Word Arena (100 images for prototype)
- Short audio clips for 50 listening items (mp3)

---

## Handoff Notes
- Export tokens for colors and typographic scale.
- Provide component names and variants consistent with design system (Button/Primary, Button/Secondary, Input/TextField).
- Deliver Figma file with pages: "Design System", "Map", "Mini-Games", "Store", "Memory Vault", "Expedition", "Profile".

---

## Next Steps
1. Create Figma skeleton frames for Main Map and one mini-game template.
2. Provide 10 sample screens (export PNGs) for developer review.
3. Populate sample assets (avatars + 50 listening audio clips) for prototype interactions.
