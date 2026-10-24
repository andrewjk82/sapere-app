# Persistent Question-Batch Quality Profile

Apply this checklist whenever adding questions from an exam or worksheet. It records the user's standing requirements and recurring corrections.

## Source and topic mapping
- Read both the exam and its solutions. Match each sub-question to the existing year/topic taxonomy before adding it.
- Preserve the source question wording verbatim; do not paraphrase or silently alter the prompt. Remove redundant source numbering markers such as `(a)`, `(b)`, `(i)`, `(ii)` from student-facing stems, including multipart children, when the user has asked to remove them. Keep source numbering in internal metadata/IDs as needed; do not duplicate it in the visible wording.
- Preserve the source question's mathematical meaning and include all relevant parts. Count every parent and sub-question against the source before and after import; do not duplicate a source part or omit a sub-question.
- Verify answer keys against the mathematics, even when the supplied key or diagram seems inconsistent.

## Question types and assessment settings
- Convert every question with one definite answer to four-option multiple choice. Keep drawing, sketching, construction, proof, and “show that” tasks as teacher-review items unless they can be assessed objectively without changing the task.
- Use plausible distractors based on likely student errors. Balance correct-option positions across the batch and avoid runs of three identical positions.
- Apply the user's explicit time and XP settings for the current batch; when given, use those values for every sub-question.

## Student-facing help
- Every question needs a specific, usable `hint` for Show Hint. Do not rely on the step solution as a substitute for the hint.
- Add `keyPoints` for useful parts of the stem with concise, question-specific English tips. Each highlighted `text` must exactly match a substring of the stem.
- Give each question a clear, detailed step-by-step solution with mathematical working, not generic prose. Show substitutions, intermediate calculations, units, and the final result.
- For drawing/construction tasks, keep the learner's question diagram unfinished and include a complete, clearly labelled sample in the final solution step.
- If a source diagram is needed in the solution, use step figures to explain the actual calculation: identify and highlight the exact sides/angles/data at that step, and show the substitutions/calculations alongside. Do not hide the only useful diagram in the question card when the requested task is to construct/draw it.

## Diagrams and rendering
- Include the diagram or graph needed to solve the source problem. Use the matching geometry and label every relevant point, side, angle, axis, and unit.
- **Multipart figure placement:** Put a shared diagram on the multipart parent once. Do not repeat an identical, unannotated copy on every child question; add a child-level figure only when that sub-question needs a distinct diagram or focused annotation. Keep calculation diagrams in the relevant solution steps.
- **Multipart pre-publish audit:** Inspect the saved parent and every nested child record/card after editing. Confirm the shared diagram appears on the parent, identical child `figure` fields are absent, and any retained child figure is specifically needed by that child.
- Preserve source label-to-vertex correspondence when redrawing or rotating a figure: each interior angle variable must remain paired with its stated adjacent exterior angle at the same vertex (for example, x↔a, y↔b, z↔c). Recheck every numeric label in worked diagrams against that mapping.
- In solution diagrams, highlight the exact sides, angles, graph features, or data used in that step. Keep angle arcs within the two rays they describe and put angle labels inside the correct sectors, close to the arcs without overlap.
- Check that equal-side marks sit on the sides, right-angle marks are at the correct vertices, and coordinates/labels do not overlap or clip. Do not leave a requested sample diagram blank.
- Render and visually inspect authored SVGs at their intended size; correct layout issues before completing the batch.
- **No-overlap rule:** no text label may touch or cross any graph line/curve, axis, marker, angle arc, side, or another label. Check the entire text bounding box against the feature, especially for coordinate labels near intercepts. Recheck at the actual student-facing 50% diagram size; move labels into clear whitespace and render again.
- **Coordinate-label proximity:** place a coordinate label close to the plotted point/intercept it names while keeping it fully clear of the point, line, and axis. If nearby whitespace is tight, adjust the viewBox or add a small margin instead of moving the label far away from its point.
- **Math inside diagrams:** diagram labels that contain algebra or units must use clear mathematical typography too: variables italic, coefficients and units upright, exponents raised, and fractions/roots properly structured. Do not leave raw notation like `2x cm` in plain default SVG text when it can be typeset with MathJax; for inline SVG, use carefully styled `<tspan>` elements or another math-rendered path. Keep labels clear of edges and one another.
- Always compare imported/redrawn diagrams directly with the source PDF. Check vertex correspondence, dimension-to-edge attachment, angle sectors, visible/hidden edges, and whether the solid's projected geometry communicates the stated shape. Never infer a 3D diagram from the intended answer alone.
- After moving any label to fix overlap, render again and re-check that it still clearly identifies its intended edge/angle and remains inside the viewBox.

## Final checks
- Check question count and IDs against the source, correct options against the worked solution, topic placement, hints, exact highlight substrings, step figures, timer, and XP.
- Run `npm run content:validate` and `git diff --check`; stage only files for the requested task.

### SVG sizing and geometry-specific visual QA (standing corrections)
- **Default figure size (standing user requirement):** set every new question and solution-step diagram to `width="50%"` of its available content width by default, preserving its `viewBox` and aspect ratio. Do not stretch an illustration to `100%` just to fill the card. Only enlarge beyond 50% when the diagram would otherwise be unreadable (for example, a dense table or multi-panel graph); check the rendered student-facing size and keep it within the card. Apply the same 50% rule when revising existing imported question figures.
- Keep geometry strokes light and consistent: usually `1.6–2.2` SVG units for outlines and `1.3–1.8` for angle arcs at a `380×240`-style viewBox. Avoid heavy `3+` unit outlines unless a mark needs deliberate emphasis.
- Keep the drawn shape compact and consistent with the user's smaller reference diagrams. Use viewBox whitespace or a smaller SVG drawing scale so a single shape does not dominate the whole question card; paired diagrams may use more width, but should still leave visible margins.
- Every solution-step diagram must show the exact angle, side, length, or graph feature used in that step with a clear highlight. Progress the annotations as the reasoning advances; never repeat the same unannotated diagram in every step.
- Draw every angle arc inside the correct sector between its two rays. Put its numeric or variable label inside that same sector and close to the arc, with enough clearance from rays, arc strokes, vertex labels, and tick marks. For exterior angles, the label belongs in the exterior sector bounded by the extended side and adjacent side.
- For an exterior-angle arc, draw the matching side extension that forms the marked angle; verify both arc endpoints lie on the two rays shown. Never pair an exterior arc with the extension of the other side.
- Check the diagram at its rendered student-facing size. Specifically inspect stroke weight, overall footprint, angle-sector direction, label collisions/clipping, right-angle markers, and equal-side ticks before finishing.
