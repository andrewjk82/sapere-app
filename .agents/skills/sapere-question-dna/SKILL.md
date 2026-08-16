---
name: sapere-question-dna
description: >
  Author, extend, or review Question DNA reasoning-blueprint content in the
  Sapere platform — the pre-question scaffolding layer (Sapere_Question_DNA_v2.0)
  that sits in front of real questions: DNA-generic warmup pools
  (question_dna/{dnaId}.reasoningBlueprint, shown by DnaReasoningWarmup.jsx)
  and question-specific pre-steps (questions/{id}.reasoning_blueprint, shown
  by QuestionReasoningSteps.jsx). Use when adding a new DNA, expanding a
  warmup pool, writing pre-steps for a question, or reviewing/debugging this
  layer's content or rendering.
  Triggers on: "DNA 문제", "reasoning blueprint", "워밍업 풀", "warmup pool",
  "사전단계", "pre-step", "Question DNA", "DnaReasoningWarmup",
  "QuestionReasoningSteps", "hasReasoningBlueprint", "step_id".
---

# Sapere Question DNA Reasoning-Blueprint Skill

## Overview

Question DNA v2.0 pipeline: HSC Question → Question DNA → Reasoning
Blueprint → Student Interaction → Step Evidence → Student Model. This
skill covers the reasoning-blueprint authoring layer specifically —
not the DNA classification/tagging pipeline (`tools/dna/`) and not the
final-answer MC grading (`src/utils/mcOptionShuffle.js`, covered by the
project's general MC-shuffle rule).

Two distinct data shapes, same underlying step schema:

- **DNA-generic warmup pool** — `question_dna/{dnaId}.reasoningBlueprint`
  (array in `tools/dna/dnaTaxonomy.js`, pushed via
  `tools/scripts/addDnaReasoningBlueprint.js`). Runs once per DNA-focus
  session, BEFORE the student sees any real question. Every item must be
  true regardless of which specific question comes next — no question
  numbers, no question-specific numbers.
- **Question-specific pre-steps** — `questions/{id}.reasoning_blueprint`
  (written by one-off `tools/scripts/add*ReasoningBlueprint*.js`
  scripts). Runs once per question, using that exact question's own
  numbers, immediately before the real MC options are shown.

Step schema (both shapes): `{ step_id, objective, axis, required_skill?,
interaction_type: 'select', options: [{id, label}], expected_response,
common_errors?, hints: string[], explanation, highlight? }`.

## Standing rules

**1. Verify before you enrich.** Before writing any step on top of a
question, independently re-derive its correct answer (don't trust the
stored `answer` field), confirm its `dnaId` classification actually
matches its content, and scan its options for known corpus bugs:
leftover generic-template garbage (`\dfrac{12}{x+2}`, `\dfrac{13}{x+3}`,
`"The opposite of this statement is true."`), equivalent-option
duplicates (`\dfrac` vs `\frac` on the same value, a glued double-negative,
an unfactored form equal to the "wrong" factored option), and mangled-LHS
notation (`\frac{1}{dx} = ...`). A single DNA pilot this session surfaced
15+ dnaId misclassifications, 7 wrong answer keys, and 9+ equivalent-option
duplicates this way — none reported by anyone, all found purely by
verifying before building. Guard every write script with
`requireAnswer`/`requireType` checks that **abort** (don't guess) when the
doc doesn't match what was verified — a mismatch is a signal to
re-investigate, not push through.

**2. Every step is `interaction_type: 'select'` (multiple-choice), never
free-text** — same project-wide MC-only rule as the option-shuffle
section of `CLAUDE.md`, applies here too.

**3. Question-specific pre-steps must target what's actually unique to
THAT question's own numbers/structure — never a generic "which rule
applies?" template reused across many similar-shaped questions.** If a
step could be pasted unchanged onto a different question with different
numbers and still make sense, it's too generic — find the concrete
non-obvious trap instead (a sign flip from an unusual "b−x" inner
expression, a specific factoring/arithmetic step tied to this question's
own coefficients, an instruction easy to misread for this exact
phrasing). Generic rule-recognition ("is this a product or a
composition?") belongs in the DNA-generic warmup pool, not repeated
per-question — the warmup already covers it once, generically, for every
question sharing that DNA. Worked example: `abb2020-mc6`
(`tools/scripts/fixAbb2020Mc6PreSteps.js`) — rewritten from a generic
"needs which combination of rules?" into steps about the actual trap
(the inner factor is "$4-x$", so its derivative is $-1$, not the more
common $+1$ case) and the actual factoring arithmetic
($4(4-x)-3x=16-7x$) tied to this question's own coefficients.

**4. Highlight the question text a step is actually about, when it
helps.** A pre-step can carry `highlight: {before, mark, after, color}`
(`QuestionReasoningSteps.jsx`) — three self-contained (`$...$`-balanced)
LaTeX fragments that together reconstruct the question text, with `mark`
shown on a colored background so the student sees exactly which part of
the question the step refers to. Optional, not mandatory for every step
— use it when a step is literally about one specific notation/expression
in the question (e.g. "what does $f'(x)$ mean?", "which rule does
$3x^4(4-x)^3$ need?"). Falls back to plain question text when absent.
Worked example: `tools/scripts/addAbb2020Mc6HighlightSteps.js`.

**5. DNA-generic warmup pools are randomized, not a fixed 3.**
`DnaReasoningWarmup.jsx` draws `WARMUP_SIZE=3` at random from however many
items are in `reasoningBlueprint` each session (see `pickRandomSteps()`,
a Fisher-Yates shuffle called from a `useState` lazy initializer so it
only runs once per mount) — grow a DNA's pool over time (CALC-DIFF-01 is
the pilot at 24 items) rather than assuming only 3 items ever exist.
Every pool item must stay DNA-generic (true regardless of which specific
question the student sees next).

**6. Any script that writes `reasoning_blueprint` onto a
`questions/{id}` doc must also set `hasReasoningBlueprint: true`**
alongside it (merge write). This is the indexed flag the teacher-facing
"Question Pre-Steps Review" page queries
(`where('hasReasoningBlueprint','==',true)`) instead of scanning the
whole `questions` collection, which project convention forbids (see
`tools/scripts/CLAUDE.md` / memory "stat 컬렉션 스캔 금지"). Forgetting
this flag makes new pre-steps invisible to that review page even though
they work fine for students. See
`tools/scripts/backfillReasoningBlueprintFlag.js` if a flag ever needs
backfilling after the fact — it's driven by a static candidate-ID list
(`tools/scripts/_reasoningBlueprintCandidateIds.txt`), not a live scan;
extend that list (or re-grep every `add*ReasoningBlueprint*.js` script's
`id:` entries) and re-run it after any batch that might have missed the
flag.

**7. Call `touchChapterIndex(db, chapterId)`** after any
`reasoning_blueprint`/`hasReasoningBlueprint` write, same as any other
content-only edit to `questions/*` (see `CLAUDE.md`'s cache-invalidation
section) — every script in `tools/scripts/add*ReasoningBlueprint*.js`
already does this; keep doing it in new ones.

**8. Never let a `reasoning_blueprint` array end up with duplicate
`step_id`s.** Easy to trip on when PREPENDING new steps to an existing
array whose steps already use `S1`/`S2` — the new steps' own `S0`/`S1`
will collide. Renumber the whole array sequentially (`S0, S1, S2, ...`)
after combining, and check `new Set(steps.map(s=>s.step_id)).size ===
steps.length` before writing.

**9. Two teacher-facing review pages exist for this layer** — Sidebar
"DNA Warmup" (`src/components/hsc/DnaWarmupReviewPage.jsx`, every DNA's
full warmup pool) and "Question Pre-Steps"
(`src/components/hsc/QuestionPreStepsReviewPage.jsx`, every question
with its own pre-steps) — both `isAdmin`-gated, read-only, share
`ReasoningStepCard.jsx` for step rendering. Spot-check new content there
(or ask the user to) rather than assuming it renders correctly — this is
how the `f'(x)` LaTeX-rendering gap in `DnaReasoningWarmup.jsx`'s
objective field was actually caught (it rendered `step.objective` as raw
React text instead of through `<MathView>`, invisible until an objective
with inline LaTeX was authored).

**10. Commit messages referencing code with backticks or `$` must be
written to a temp file and committed with `git commit -F <file>`, never
inline `-m "..."`** — a bare backtick in an inline `-m` message triggers
shell command substitution and silently mangles the message (the code
itself is unaffected, only the message text).

## Reference: service account / script boilerplate

Every `tools/scripts/*ReasoningBlueprint*.js` script follows the same
shape — service-account discovery (tries
`/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json`
among other paths), a small `mc(stepId, objective, axis, options,
correctId, hints, explanation)` helper to keep step literals concise,
per-question `requireAnswer`/`requireType` guards, `origin:'teacher'`
skip guard, and a `touchChapterIndex` pass at the end over every touched
chapter. Copy an existing script (e.g.
`tools/scripts/addCalcDiffReasoningBlueprintBatch8.js` for
question-specific pre-steps, or `tools/scripts/addDnaReasoningBlueprint.js`
for the generic warmup pool) as the starting template rather than
writing one from scratch.
