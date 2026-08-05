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

## 5. Sector Angles (>180 Degrees)
When illustrating a large sector (e.g., 270 degrees) extruded into 3D:
- The angle arc MUST be drawn ON the solid face, wrapping all the way around the 3D solid (using `large-arc-flag="1"`), NOT placed inside the empty/cut-out quadrant.
- Always use an arrowhead (`marker-end`) on the angle arc to indicate the direction of the sweep.
- Position the angle text (e.g., `270°`) near the solid arc, not floating in empty space.
