# Exam Import Regression Checklist

Run this checklist for every past-paper import, in addition to the batch quality
profile and the target chapter profile. It records recurring defects reported by
the user and prevents them from returning in later imports.

## Preserve source questions

- Compare every imported leaf against the source PDF. Keep the question's
  mathematical wording, values, units, conditions, and requested precision
  unchanged. Multiple-choice conversion may add answer options, but must not
  rewrite what the question asks.
- Account for every question and subquestion in the source before finishing.
  Track source page, question number, and subpart for each imported item.
- Remove source numbering markers such as `(a)`, `(b)`, `(i)`, and `(ii)` from
  student-facing stems, including multipart children. The multipart structure
  or question ID provides the organization; do not leave a visible duplicate
  marker in the wording. Preserve all mathematical wording after the marker.
- Keep related subparts together when they depend on earlier answers or are
  explicitly presented as parts of one source question.
- Match each leaf to the target year, chapter, and topic profile before writing
  it. If the required chapter profile is missing, stop that chapter and ask for
  the relevant curriculum or textbook material.

## Question settings and answer formats

- Set every imported question and subquestion to the user's requested time and
  XP values. For this user's exam imports, the standing values are 60 seconds
  and 1 XP unless the current request says otherwise.
- Convert to four-option multiple choice when the original task has one
  objectively checkable answer. Keep drawing, sketching, and proof tasks as
  teacher-reviewed responses when options would remove the required skill.
- Check every MC item has four distinct options, one correct answer, and
  distractors based on plausible mathematical errors. Recalculate the answer
  independently before setting its answer index.

## Step-by-step solutions and hints

- Write a question-specific solution for every leaf; do not reuse a generic
  solution across different questions. Show the formula or theorem, identify
  the quantities used, substitute the actual values, show intermediate
  arithmetic/algebra, and state the final answer with the required units and
  rounding. Do not skip transformations that students need to follow.
- For geometry, name the actual sides and angles used (for example, “opposite
  the 30° angle” or “the included angle between sides AB and AC”). Make sure
  the solution's correspondence and theorem match the diagram.
- Tailor every hint to the question and give a useful first move without
  revealing the complete answer. Every key-point highlight string must be an
  exact substring of that question's displayed stem.
- Check that multipart parents and every nested leaf have the intended settings,
  hint, solution steps, and source metadata.

## LaTeX and diagrams

- Use the canonical LaTeX delimiters for every expression in stems, options,
  explanations, and working. Keep currency symbols escaped inside math mode.
  Check that every opening delimiter has its matching closing delimiter.
- Render-check representative stems, every option set, and every solution after
  the final edit. `npm run content:validate` must report zero new errors; this
  does not replace visual inspection.
- Keep a question-level diagram only when the source task needs it. Do not add a
  solution annotation or computed value to the question diagram if it changes
  or gives away the original task.
- Inspect each diagram at student display size. Labels must not overlap edges,
  angle arcs, other labels, or the figure boundary. Confirm each label is
  attached to the intended segment/vertex and each angle arc faces the correct
  angle.
- For 3D solids, verify the vertex correspondence and dimensions against the
  source. Use dashed lines for genuinely hidden edges, solid lines for visible
  edges, and distinguish given dimensions from lengths being found. For
  step-by-step geometry, highlight the exact sides/angles used at that step.
- For every step figure, identify the visual information that step reads and mark it directly on the figure. Use different annotations as the solution progresses; never repeat a full unannotated graph/diagram as filler. Pair the highlight with the relevant calculation. Remove a figure from steps that only perform algebra or arithmetic when the image adds no new information. Compare all figures in each solution sequence before release.
- Directly compare every imported or redrawn figure with the source PDF. Verify
  which side each length labels, which vertex owns each angle, all vertex
  correspondences in 3D solids, and whether each visible/hidden edge is drawn
  correctly. Do not accept a plausible-looking sketch without matching the
  original geometry.
- Remove unnecessary diagrams from questions that are text/algebra only. Do not
  leave source subpart labels duplicated in stems or rendered solution text.

## Final audit

- Count source questions/subparts against imported leaves and record any items
  held for a missing chapter profile.
- Scan all new records recursively (including multipart children) for settings,
  four unique options, key-point substring matches, LaTeX delimiter balance,
  non-empty hints, detailed steps, and diagrams where the source requires them.
- Review `git diff --check`, run `npm run content:validate`, and visually inspect
  the changed questions before committing or pushing.
