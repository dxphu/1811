# Converting SVG placeholders to PNG and importing into Figma

This README explains how to convert the SVG prototype frames in this repo into PNGs and/or import them into Figma.

Files created:
- `figma_main_map_placeholder.svg` (1440×900)
- `figma_grammar_bridge_placeholder.svg` (390×844)

Options:

1) Direct import into Figma (recommended)
- Open Figma, create a new file, then drag & drop the `.svg` files onto the canvas. Figma will keep vectors editable.

2) Convert SVG → PNG locally (Windows PowerShell) using ImageMagick (`magick`) or Inkscape.

ImageMagick (PowerShell):
```powershell
# Convert main map to PNG at 2x (2880px width)
magick "e:\game 1811\figma_main_map_placeholder.svg" -background none -resize 2880x1800 "e:\game 1811\figma_main_map_placeholder@2x.png"

# Convert grammar bridge mobile frame
magick "e:\game 1811\figma_grammar_bridge_placeholder.svg" -background none -resize 780x1688 "e:\game 1811\figma_grammar_bridge_placeholder@2x.png"
```

Inkscape (PowerShell):
```powershell
# Export main map to PNG
inkscape "e:\game 1811\figma_main_map_placeholder.svg" --export-type=png --export-filename="e:\game 1811\figma_main_map_placeholder.png" --export-width=1440 --export-height=900

# Export grammar bridge
inkscape "e:\game 1811\figma_grammar_bridge_placeholder.svg" --export-type=png --export-filename="e:\game 1811\figma_grammar_bridge_placeholder.png" --export-width=390 --export-height=844
```

3) Upload PNGs to Figma
- In Figma: File → Place Image, choose the PNG files (or drag PNG onto canvas).

Notes & tips:
- Figma will keep the vector SVG editable; prefer importing SVG directly if you want to modify components.
- If you need higher resolution assets for presentation, export at 2x or 3x and use the `@2x` naming convention.
- To create clickable prototypes in Figma, add hotspots as frames over zones and use Prototype flows.

If you want, I can:
- Run conversions here if an image processing tool is available in the environment (I currently cannot run ImageMagick or Inkscape from this workspace), or
- Export these SVGs to PNG for you and attach them if you want me to attempt a conversion with a built-in rasterizer (confirm and I will try), or
- Proceed to build additional mini-game frames.
