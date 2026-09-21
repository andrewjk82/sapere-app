# SVG 3D Geometry & Labeling Rules

These rules specifically govern the creation of 3D shapes (cylinders, prisms, sectors) and dimension labeling in SVG, to ensure mathematical accuracy and visual clarity.

## 1. Dimension Label Formatting
- **Strict Format:** ALL dimension labels MUST use the exact format `[Number] [Unit]` (e.g., `10 cm`, `16 mm`).
- **NO Prefixing:** NEVER use prefixes or mixed formats like `h = 10`, `Width = 16 cm`, or `r=4`. Maintain absolute consistency across all labels.

## 2. Text Readability (The "Halo" Effect)
To ensure labels are always readable even when slightly overlapping geometric lines, **always apply a background stroke (halo)** to text tags.
```xml
<!-- Example of Halo Effect -->
<text x="125" y="155" font-family="sans-serif" font-size="14" stroke="#f8fafc" stroke-width="4" stroke-linejoin="round" text-anchor="middle">10 cm</text>
<text x="125" y="155" font-family="sans-serif" font-size="14" fill="#1d4ed8" text-anchor="middle">10 cm</text>
```

**MUST be exactly two separate `<text>` elements, same position, stacked.**
The first has `stroke` + `stroke-width` and no `fill` (or explicit `fill="none"`);
the second has only `fill`, no stroke. **2026-08-26 incident:** a prism
diagram (willoughby2019-s6-q3) instead defined a single global CSS rule —
`text { ...; stroke: #f8fafc; stroke-width: 3px; fill: #1e293b; }` — applied
to every `<text>` tag. Putting both `stroke` and `fill` on **one** element
(rather than two stacked elements) makes the thick white stroke dominate the
glyph outline with no crisp colored layer on top to cover it, rendering as a
blurry white blob instead of readable text. Never take the "one CSS rule for
all text" shortcut for the halo effect — it must always be the two-element
pattern above, built per-label, not via a shared class/style block.

**2026-08-26 sizing follow-up:** the same diagram also had no `max-width` on
the `<svg>` tag, so at `width="100%"` it stretched to fill the entire card
width and rendered oversized. Always cap 3D-shape / coordinate-plane SVGs
with an explicit `max-width` (e.g. `280-340px`) plus
`display:block;margin:0 auto;` in the inline style, same as the dot-plot
sizing rule in `SKILL.md` §9 — this applies to every standalone diagram
inside a solutionStep, not just data plots.

## 3. Placement of Dimension Arrows
- **Depth/Length:** Dimension arrows for the depth or length of a 3D shape MUST NOT pierce through solid front faces. They must be offset completely outside the shape, drawn parallel to the target edge.
- **Radius Representation:** NEVER leave a radius text floating arbitrarily inside a circle/face. You MUST draw a clear center point (e.g., `<circle r="3">`) and a radius line (with `marker-end`) extending to the edge to visually represent the length.

## 4. 3D Cylinder Projection (Visibility Rules)
When projecting cylinders (horizontal or vertical) in isometric/dimetric 3D:
- **Tangent Boundaries:** The outer boundaries of the curved surface are defined by tangents parallel to the extrusion vector.
- **Horizontal Cylinders (Viewed from Front-Right-Top):** 
  - The left circular base is at the back.
  - The **LEFT half** of this base forms the outer boundary and is **VISIBLE (solid)**.
  - The **RIGHT half** goes inside the cylinder body and is **HIDDEN (dashed)**.
  - Be extremely careful with SVG arc `sweep-flag` (1=clockwise, 0=counter-clockwise). From Top to Bottom clockwise is the RIGHT half.
- **Base Edges (Half-cylinders):** The rectangular base edges that sit at the bottom-back are hidden (dashed), while the edges at the front-right are visible (solid).
- **Vertical Cylinder's Bottom Ellipse (viewed from the front, e.g. a cylinder+hemisphere composite solid):** the bottom ellipse is drawn as two half-arcs from the left point to the right point. The half that bulges DOWNWARD (larger y, nearer the viewer) is the front, VISIBLE half — solid. The half that bulges UPWARD into the cylinder body (smaller y, tucked behind) is HIDDEN — dashed. **2026-08-26 incident:** these were swapped in a generated cylinder+hemisphere diagram (y11s-2c-gen-4) — the hidden top-bulging arc was solid and the visible bottom-bulging arc was dashed. Don't guess sweep-flag direction from memory: for two arcs `M x1,cy A rx,ry 0 0 0 x2,cy` (sweep=0) and `M x1,cy A rx,ry 0 0 1 x2,cy` (sweep=1) both centered so `cy` is exactly between them, work out which one reaches `y = cy + ry` (bottom, sweep=0 in this exact two-endpoint case) vs `y = cy - ry` (top, sweep=1) before assigning solid/dashed — or just render and visually check which arc bulges which way.

## 5. Sector Angles (>180 Degrees)
When illustrating a large sector (e.g., 270 degrees) extruded into 3D:
- The angle arc MUST be drawn ON the solid face, wrapping all the way around the 3D solid (using `large-arc-flag="1"`), NOT placed inside the empty/cut-out quadrant.
- Always use an arrowhead (`marker-end`) on the angle arc to indicate the direction of the sweep.
- Position the angle text (e.g., `270°`) near the solid arc, not floating in empty space.
