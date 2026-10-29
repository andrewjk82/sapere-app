# User-Reported Regression Lessons

Apply these lessons to every future past-paper import and repair. They record
recurring student-facing problems the user has reported across Years 7–10.

## Prompt wording and multipart structure

- Preserve the source's mathematical wording, values, units, and requested
  precision. Do not add, omit, or change what the problem asks.
- Strip redundant source markers such as `(a)`, `(b)`, `(c)`, `(i)`, and `(ii)`
  from displayed stems, including multipart children. Retain structure in the
  data model and IDs instead of repeating the source marker in student text.
- Check parent and child stems independently; a clean parent does not guarantee
  its children are clean.

## Diagrams

- Inspect the source PDF image itself before redrawing. Match the labels to the
  exact vertices, edges, and angles from the source; do not rely only on OCR,
  the existing SVG, or a solution description.
- For triangles, place each angle arc between its actual rays and each side
  label alongside the segment it measures. Keep labels close enough to identify
  the intended feature, with clear space from lines, arcs, vertices, and other
  text. Equal-side ticks and right-angle markers must mark the correct sides
  and vertex.
- For 3D figures, establish vertex correspondence before drawing. Draw visible
  edges solid and only genuinely occluded edges dashed. Verify each given
  dimension is attached to the source edge; distinguish a face diagonal from
  an edge and show a spatial diagonal only when the question needs it.
- At student display size, render and inspect every changed question figure
  and every step figure. Check stroke weight, clipping, label overlap, scale,
  arc direction, and that the diagram visibly matches the source geometry.
- When a user requests a whole question family or ID prefix, audit every
  matching question figure against its source, not only the named examples or
  figures already reported as missing. Replace fuzzy scanned traces across the
  full requested set with clean SVGs; retain text-only questions when the source
  has no illustration. Before delivery, confirm the coverage count and review a
  contact sheet so skipped figures, omitted panels, and labels lost in a partial
  redraw are caught.
- “SVG” means genuinely vector-based: do not leave raster PNG/JPEG embedded in
  an SVG `<image>` element. For scanned figures, redraw the geometry with vector
  paths and text, or trace the scan to vector paths while preserving all source
  values, answer choices, labels, and marks; verify legibility at student size.
- Preserve whether a composite source drawing shows only the outside silhouette
  or also its internal tile boundaries. Do not draw separate full tile outlines
  when the source shows only the joined shape's external perimeter; match the
  tile placement and any note such as “not to scale”.
- In geometry/trigonometry solutions, explicitly name the sides and angles
  used, explain opposite/adjacent/hypotenuse or included-angle relationships,
  and highlight those exact features in the corresponding step figure. Progress
  the figure as the reasoning advances; do not repeat an unannotated diagram.
- A step figure is not decoration or a repeated reference image: it must show what that step reads or uses. Add a distinct highlight (such as a marked graph endpoint/projection, shaded region, selected table cell, or highlighted side/angle) and explain its mathematical use in the adjacent calculation. Do not repeat the same full graph unchanged across steps. Omit figures from purely algebraic calculation or final-answer steps when they add no new visual information. Compare every figure in a solution sequence side by side and verify that each retained one advances the explanation.

## Solutions, hints, and mathematical notation

- Write a bespoke, sufficiently detailed sequence for each question. Show the
  relevant rule, identify known and unknown quantities, substitute values,
  show intermediate calculations, handle units and rounding, and state the
  result. Do not skip algebraic transitions or rely on vague filler such as
  “calculate” without showing the calculation.
- Give each item a useful, problem-specific hint that enables a first step
  without revealing the full answer. Check that each highlighted key point is
  an exact substring of its displayed stem.
- Use valid KaTeX delimiters for every math expression in stems, choices,
  explanations, and working. Balance delimiters and braces; use `\frac{...}{...}`
  for stacked fractions, `\sqrt{...}` for roots, and proper subscripts/superscripts.
  Never leave raw underscore notation such as `log_a` or slash fractions such
  as `x/5` when the expression should render as mathematics.
- Check that the final working agrees with the marked answer, and that MC
  choices are unique and only one is correct.

## Layout and release gate

- Ensure tables, diagrams, and long expressions fit inside the question card
  and viewport. Scale tables down or make them responsive instead of clipping
  columns; do not make a table unnecessarily dominate the card.
- Render the final content after every change. A successful JSON parse or
  validator run does not catch visual defects such as broken LaTeX, reversed
  arcs, duplicated markers, clipped tables, or labels on the wrong segment.
- Before finishing, scan every new or changed ID recursively, run
  `npm run content:validate` and `git diff --check`, visually inspect the
  rendered result, and stage only files for the requested task.
- For imports with explicit settings, apply the requested timer and XP to every
  leaf question. If the standing request is 60 seconds and 1 XP, enforce that
  consistently across parents and children as appropriate.

## SVG display and step-by-step figure regressions

- For diagrams rendered as inline HTML/SVG (including SVG strings inserted by React), use ordinary SVG element names such as `<svg>`, `<g>`, `<path>`, and `<text>`. Do not leave XML serializer prefixes such as `<ns0:path>`: XML parsing can succeed while the browser displays no graphic.
- Treat 50% as a starting size, not a hard cap. Inspect the actual student-facing size after rendering; when a source figure is unreadably small (as reported for `yr7-measurement-revision-*`), enlarge the related question and solution figures together while preserving aspect ratio and keeping them within the card.
- If a source SVG is a low-resolution trace and its dimensions or labels are blurred or clipped, redraw it as clean vector geometry with clear text instead of merely enlarging the trace. For 3D diagrams, layer hidden dashed edges behind solid objects and recheck all dimension labels at student-facing size. Avoid printing the same measurement twice beside one edge: show each given overall dimension once in the question figure, and put derived segment lengths only in the relevant solution step. Keep measurement arrows clear of the shape outline and inside the SVG viewBox.
- Verify every source and step SVG through the same HTML rendering path the student app uses, at its actual display size. Keep intrinsic width/height consistent with the viewBox and the requested 50% sizing; XML validity by itself does not prove visibility.
- In every visual solution step, progressively highlight the specific side, angle, segment, table cell, region, or graph feature used in that step, and pair it with the relevant formula and calculation. Do not repeat an unchanged diagram as filler. Omit a figure from a final arithmetic-only step when it adds no new information.

## Tables in question figures

- When a question supplies tabular data, render it as a real, readable grid
  with explicit row/column boundaries and the source values in the correct
  cells; do not substitute a loose decorative panel or leave the data as
  ambiguous prose.
- Keep a table SVG's background exactly within its grid. Set the SVG viewBox,
  intrinsic pixel width/height, and table geometry consistently, with padding
  around all four sides. Never let a background rectangle extend past the
  grid or the viewBox, since that makes the table look like an oversized blank
  coloured box.
- Use compact fixed pixel dimensions for a small standalone table and center
  it in the card. In a solution step, highlight only the row/cell used by that
  calculation, and keep the highlight inside the same table grid.
- Check the table at student-facing size for correct cell alignment, readable
  text, no clipping, and no unnecessary blank colored area before finalizing.

## Scanned assessment imports

- When a source PDF is scanned or combines question pages and worked-solution
  pages, inspect each page image and its matching solution page; OCR is only a
  locator. Preserve source page/question/part metadata so repeated printed
  question numbers cannot collide.
- Recalculate every answer independently from the printed data. Treat a worked
  solution as supporting evidence, not ground truth; correct arithmetic and
  percentage-language interpretation when the source solution is wrong.
- If a source graph or figure is genuinely missing from the scan, reconstruct it
  only when the surviving prompt and worked solution uniquely determine it.
  Mark the reconstruction in metadata and tell the user which figure was
  reconstructed.
- Place each item in the closest matching existing topic. Do not group
  unrelated subparts from different topics into one multipart parent simply
  because the source labels them with the same question number.
