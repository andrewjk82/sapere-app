# Persistent Question-Batch Quality Profile

Apply this checklist whenever adding questions from an exam or worksheet. It records the user's standing requirements and recurring corrections.

## Source and topic mapping
- Read both the exam and its solutions. Match each sub-question to the existing year/topic taxonomy before adding it.
- Preserve the source question's mathematical meaning and include all relevant parts. Do not duplicate a source part or omit a sub-question.
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

## Diagrams and rendering
- Include the diagram or graph needed to solve the source problem. Use the matching geometry and label every relevant point, side, angle, axis, and unit.
- Preserve source label-to-vertex correspondence when redrawing or rotating a figure: each interior angle variable must remain paired with its stated adjacent exterior angle at the same vertex (for example, x↔a, y↔b, z↔c). Recheck every numeric label in worked diagrams against that mapping.
- In solution diagrams, highlight the exact sides, angles, graph features, or data used in that step. Keep angle arcs within the two rays they describe and put angle labels inside the correct sectors, close to the arcs without overlap.
- Check that equal-side marks sit on the sides, right-angle marks are at the correct vertices, and coordinates/labels do not overlap or clip. Do not leave a requested sample diagram blank.
- Render and visually inspect authored SVGs at their intended size; correct layout issues before completing the batch.

## Final checks
- Check question count and IDs against the source, correct options against the worked solution, topic placement, hints, exact highlight substrings, step figures, timer, and XP.
- Run `npm run content:validate` and `git diff --check`; stage only files for the requested task.

### SVG sizing and geometry-specific visual QA (standing corrections)
- Keep geometry strokes light and consistent: usually `1.6–2.2` SVG units for outlines and `1.3–1.8` for angle arcs at a `380×240`-style viewBox. Avoid heavy `3+` unit outlines unless a mark needs deliberate emphasis.
- Keep the drawn shape compact and consistent with the user's smaller reference diagrams. Use viewBox whitespace or a smaller SVG drawing scale so a single shape does not dominate the whole question card; paired diagrams may use more width, but should still leave visible margins.
- Every solution-step diagram must show the exact angle, side, length, or graph feature used in that step with a clear highlight. Progress the annotations as the reasoning advances; never repeat the same unannotated diagram in every step.
- Draw every angle arc inside the correct sector between its two rays. Put its numeric or variable label inside that same sector and close to the arc, with enough clearance from rays, arc strokes, vertex labels, and tick marks. For exterior angles, the label belongs in the exterior sector bounded by the extended side and adjacent side.
- Check the diagram at its rendered student-facing size. Specifically inspect stroke weight, overall footprint, angle-sector direction, label collisions/clipping, right-angle markers, and equal-side ticks before finishing.
