# Prototype — Next Steps & How to Use These Placeholders

I created SVG placeholder frames for the main prototype screens. Use these files to build the Figma interactive prototype or to rasterize PNGs for presentations.

Files added (placeholders):
- `figma_main_map_placeholder.svg` (Main Map)
- `figma_grammar_bridge_placeholder.svg` (Grammar Bridge)
- `figma_listening_lighthouse_placeholder.svg` (Listening Lighthouse)
- `figma_word_arena_placeholder.svg` (Word Arena)
- `figma_dialogue_train_placeholder.svg` (Dialogue Train)
- `figma_store_placeholder.svg` (City Store)
- `figma_memory_vault_placeholder.svg` (Memory Vault)
- `figma_expedition_placeholder.svg` (Legendary Expedition)

Suggested immediate actions:
1. Import the SVGs directly into a new Figma file (drag & drop) and place them as frames.
2. On the `Map` frame, overlay hotspots linked to the zone frames to create a clickable prototype.
3. Replace placeholder text and images with real content from `vocab_200_sample.csv` or `vocab_1000.csv` for realistic testing.
4. Export PNGs at @2x for QA and demos using ImageMagick or Inkscape (see `figma_png_conversion_README.md`).

If you want I will:
- Attempt to convert these SVGs to PNGs here (I will try if raster tools exist in the environment).  
- Or proceed to scaffold a GitHub repo with initial project structure and starter Cloud Functions (no external credentials needed at this step).

Next automated step I will take (no prompt required):
- Scaffold the project repo skeleton (`/client-unity` or `/client-rn`, `/server/functions`, `/design`, `/docs`) and add a minimal `README.md`, `.gitignore`, and `package.json` for Cloud Functions. This prepares the codebase for developers.

If you'd like me to continue, I will proceed with the repo scaffold now.