# SVG & JSXGraph Label Placement Rules

## The Golden Rule of Labels
**Labels MUST NEVER intersect or overlap with geometric lines or axes.**
If a number or label is placed directly on top of a line, it makes the diagram look unprofessional and hinders readability.

## Guidelines for SVG Placement

### 1. Vertical Lines
If a label describes a vertical line (e.g., the height of a shape), place it **clearly to the left or right** of the line.
- **Left Side:** Use `text-anchor="end"` and shift `x` at least 10px to the left of the line.
  - *Good:* `<text x="35" y="155" text-anchor="end">1.5 m</text>` (Line is at x=45)
  - *Bad:* `<text x="25" y="155">1.5 m</text>` (Without text-anchor="end", text flows right and hits the line at x=45).
- **Right Side:** Use `text-anchor="start"` and shift `x` at least 10px to the right of the line.

### 2. Horizontal Lines
If a label describes a horizontal line, place it **clearly above or below** the line.
- **Above:** Shift `y` at least 10px above the line.
- **Below:** Shift `y` at least 15px below the line (accounting for text baseline).

### 3. Slanted Lines
- Offset both `x` and `y` proportionally away from the midpoint of the line. 
- You can use the `dx` and `dy` attributes or simply calculate an `x, y` coordinate that is safely pushed outward.

### 4. Background Fill
If a label *must* be placed inside a shape or over a busy background, ensure the text is legible. However, it still must never cross the border strokes of the polygon.

## Testing Your Mental Model
Before outputting SVG `<text>` tags, mentally trace the length of the string from its `x, y` origin based on its `text-anchor`. If that bounding box hits a `<line>` or `<polygon>` stroke, **move it further away.**
