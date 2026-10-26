# Past Paper Import Checklist

Current source of truth for importing past papers into Sapere's canonical chapter content. Use this with `PAST_PAPER_PROMPT.md`, `content/schema.js`, `content/README.md`, the topic profile, and the applicable math-question skill. Do not follow obsolete seed/Firestore workflows from archived notes.

## Source fidelity and scope

- Extract and inspect every page, including diagrams and the worked solutions. Count every question and sub-question before importing; account for all of them.
- Preserve source wording, numbers, units, assumptions, and mathematical meaning. Do not paraphrase or create variants unless the user explicitly asks.
- Remove only redundant leading labels such as `(a)`, `(b)`, `(i)`, and `(ii)` from displayed stems. Keep meaningful internal references to other parts.
- Group related sub-questions under one `multipart` parent with separate, self-contained `parts`. Keep genuinely independent questions separate.
- Map each item to an existing Year 11/12 Extension 1 chapter and topic using repository curriculum data and topic profiles. Never invent IDs or titles.

## Question format and settings

- Use canonical JSON in `content/chapters/*.json`; do not use legacy seed formats or write to Firestore unless separately requested.
- Convert objectively markable questions to four-option `mc` questions whenever possible without changing the assessed task. Keep proof, explanation, construction, and sketch tasks as `review` when a selected option would not meet the task's purpose.
- Verify every answer independently against the source working and the mathematics. Use four distinct options with plausible misconceptions and exactly one correct answer.
- Set every root and leaf question to `timeLimit: 60` and `xp: 1`.
- Add a concise, question-specific `hint` and useful `keyPoints`. Each highlight must be an exact substring of that question's own stem, and its note should explain how that highlighted datum or phrase helps solve the problem.

## Student-facing solutions and figures

- Give each assessable question its own complete, student-friendly solution. Explain why each method applies, identify the exact side, angle, graph feature, or formula used, substitute the actual values, show intermediate calculations, and state units and rounding. Do not skip essential algebra or rely on the learner having solved a sibling part.
- For multi-stage exam problems, use at least four distinct steps unless the task is genuinely a single-rule calculation. Include the setup, substitutions, intermediate arithmetic/algebra, and a final interpretation or check; never compress several important operations into one line merely to keep the step count short.
- For visual questions, use the diagram at the step where it supports the reasoning. Highlight the relevant side, angle sector, point, or graph feature alongside the calculation. Do not repeat an unchanged diagram in steps without a learning purpose.
- Put a requested answer sketch/construction in the solution steps, not in the question prompt. Include a prompt diagram only when it is needed to state or solve the question.
- Keep authored figures at about 50% of the oversized presentation scale seen in previous imports. Place labels next to the features they name; ensure no label, line, angle marker, or other label overlaps. Use mathematical notation in diagram labels.
- Render and inspect each authored/adjusted figure at its intended display size. Check that the geometry, labels, markers, and highlighted features are accurate and legible.

## LaTeX and final checks

- Wrap math in explicit `\\( ... \\)` or `\\[ ... \\]` delimiters in stems, options, hints, answers, and solution steps.
- Check all question and child IDs are unique, MC option arrays have four distinct entries, answer indices point to the verified correct choice, each child has its own hint and steps, and all settings are present.
- Run `npm run content:validate` after integration and report any baseline errors separately from errors introduced by this import.
- Do not report an import as finished until the source coverage, answer checks, LaTeX validation, topic mapping, and figure inspection are complete.
