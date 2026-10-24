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
- In geometry/trigonometry solutions, explicitly name the sides and angles
  used, explain opposite/adjacent/hypotenuse or included-angle relationships,
  and highlight those exact features in the corresponding step figure. Progress
  the figure as the reasoning advances; do not repeat an unannotated diagram.

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
