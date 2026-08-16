# Sapere — project rules

## Multiple-choice option shuffle (Daily Challenge / quiz)

Seed/bank MC answers are often a **0-based index** (`"0"`…`"3"`). When options
are shuffled for the student, grading and feedback must **never** treat that
index as a position in the shuffled list — that marks **two** options green
(the real correct choice by text + a wrong choice at the old index).

**Required:** use `src/utils/mcOptionShuffle.js` only:

- `prepareShuffledMcOptions(q)` — sets `_shuffledAnswer` + `_shuffledAnswerIndex`
- `isDisplayedOptionCorrect(q, displayOptions, i)` — feedback highlight
- `gradeMcSelection(q, optionText, optIdx, displayOptions)` — submit grading
- `resolveCorrectOptionText(q)` — display the answer (never print raw `q.answer`;
  for MC it is usually an index, which showed students "Answer: 2")

Regression: `npm run test:mc` — unit tests **and** the repo guard. Must stay green.

**Never hand-roll a shuffle.** Every screen that re-implemented it got the same
thing wrong (2026-07, four copies):

```js
const correctIdx = Number(q.answer);            // ← "any integer is an index"
const newAnswer  = order.indexOf(correctIdx);   // ← WRONG for answer "2" = the value two
```

That marks an unrelated option green *and* fails the student who picked
correctly. `npm run test:mc-guard` fails the build on this idiom; do not
allowlist your file, use the helper. `isOptionIndexAnswer()` is what decides
index-vs-value, and it needs `isManual` to disambiguate a numeric answer that is
also an option value ("2" among `["1","2","3","4"]`) — 335 seeds rely on it.

**Never seed-time shuffle.** Every quiz surface shuffles at display time.
Shuffling at write time adds nothing and only makes the stored index fragile.

**Never guess an answer at write time.** `chapterSeeder.js` used to fall back to
`answer = "0"` when the seed's answer matched no option — silently declaring the
FIRST option correct. Broken LaTeX is visible; a wrong answer key is not. Bad MC
answers are now skipped + reported like bad LaTeX. Audit the seed files (local,
**zero Firestore reads**) with:

```
npm run audit:mc-seeds
```

## Corpus-generated questions: multiple_choice only, no exceptions (2026-07-30)

When generating new questions from the local corpus (`tools/corpus/`, see
`QUESTION_BANK_EXPANSION.md`), **every question must be `type:
'multiple_choice'`.** Never generate `short_answer`, `teacher_review`, or
`fill_blank` questions this way — standing rule, applies automatically,
never needs to be repeated.

In practice this means skipping any skill that only makes sense as an
open-ended prompt — "show that", "prove", "draw", "construct", "justify",
"explain why". Don't force those into a multiple-choice shape; drop that
skill from the batch (or ask if the requested topic is mostly such skills).

Pre-2026-07-30 generated questions with other types are grandfathered in —
only touch them if the user explicitly asks.

## Corpus-generated geometry/mensuration questions need an SVG diagram (2026-07-30)

Any corpus-generated question involving a shape or solid (composite area,
prism/cylinder/cone/sphere surface area or volume, coordinate geometry,
angle/trig diagrams — anything a diagram would clarify) must include a
hand-authored SVG, not just a text description. Standing rule, applies
automatically, never needs to be repeated. Pure algebra/equations/stats
questions don't need one.

Put it in `graphData.svg` (or `.diagramSvg`) as a raw `<svg>...</svg>`
string — `MathView.jsx` renders anything starting with `<svg` as-is via
`encodeSvgDataUrl()` (pure encode, no parsing/validation), so no other
tooling is required. Do NOT use `graphData.geometry` (`GeometryFigure` —
no solid/3D primitives) or `graphData.jsxGraph` (`GeometryRenderer` — has a
known non-square-boundingbox clipping bug, 2026-07-28). There is no
SVG-generator tool; hand-write the `<path>`/`<line>`/`<circle>`/`<text>`
coordinates per question, matching existing style: non-square `viewBox`
sized to the real shape (never force a fixed square canvas — that's what
clips), `width="100%" height="auto"`, visible faces filled `#dbeafe`/
`#fef3c7`/`#e0e7ff` at 0.4–0.75 opacity with `#475569` 2px solid edges,
hidden edges `#94a3b8`/`#64748b` 1.2–1.5px dashed (`4 3`), labels in
`system-ui` 11–13px weight 600 `#1e293b`. See `QUESTION_BANK_EXPANSION.md`
§2.6 for the full convention and a worked example
(`src/constants/seedYear9Ch16BQuestions.js`).

Pre-2026-07-30 generated questions without a diagram are grandfathered in —
only add one if the user explicitly asks.

## Question cache invalidation is per-chapter, not global (2026-07-28 incident)

`chapterQuestionsCache.js` used to gate every student's cached chapter against
one global `sync_meta/questions.version` — any content edit anywhere in the
bank invalidated every chapter's cache for every student. `LearningPath.jsx`
additionally force-refreshed that version on every mount and eagerly wiped a
student's entire local cache the moment it moved. An edit landing at the
after-school login peak made every freshly-opened session redownload every
cached chapter at once — the traffic spike that started this investigation.

Fixed: cache freshness is now keyed off `question_index/{chapterId}.updatedAt`
(that one chapter's own last-write time), and the eager whole-cache wipe in
`LearningPath.jsx` is gone. **Do not reintroduce a single global
version/timestamp as the freshness key for chapter/topic question caches** —
scope any future cache-invalidation signal to the chapter (or narrower) it
actually belongs to.

## Question DNA reasoning-blueprint authoring (2026-08-16)

Applies whenever adding to a DNA's warmup pool (`question_dna/{dnaId}.reasoningBlueprint`,
`tools/dna/dnaTaxonomy.js`) or a question's own pre-steps
(`questions/{id}.reasoning_blueprint`) — the Question DNA v2.0 reasoning
layer (`DnaReasoningWarmup.jsx`, `QuestionReasoningSteps.jsx`,
`HscTypePracticeSession.jsx`). Standing rules, apply automatically:

**1. Verify before you enrich.** Before writing any step on top of a
question, independently re-derive its correct answer (don't trust the
stored `answer` field), confirm its `dnaId` classification actually
matches its content, and scan its options for known corpus bugs
(leftover generic-template garbage like `\dfrac{12}{x+2}`, `\dfrac{13}{x+3}`,
`"The opposite of this statement is true."`; equivalent-option
duplicates — `\dfrac` vs `\frac` on the same value, a glued
double-negative, an unfactored form equal to the factored "wrong"
option). This session alone surfaced 15+ dnaId misclassifications, 7
wrong answer keys, and 9+ equivalent-option-duplicate bugs this way —
none of them reported by anyone, all found purely by verifying before
building. Guard every write script with `requireAnswer`/`requireType`
checks that **abort** (don't guess) when the doc doesn't match what was
verified — a mismatch is a signal to re-investigate, not push through.

**2. Every step is `interaction_type: 'select'` (multiple-choice),
never free-text** — same project-wide MC-only rule as the option-shuffle
section above, applies here too.

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
question sharing that DNA.

**4. Highlight the question text a step is actually about, when it
helps.** A pre-step can carry `highlight: {before, mark, after, color}`
(`QuestionReasoningSteps.jsx`) — three self-contained (`$...$`-balanced)
LaTeX fragments that together reconstruct the question text, with `mark`
shown on a colored background so the student sees exactly which part of
the question the step refers to. Optional, not mandatory for every step
— use it when a step is literally about one specific notation/expression
in the question (e.g. "what does $f'(x)$ mean?", "which rule does
$3x^4(4-x)^3$ need?"). Falls back to plain question text when absent.

**5. DNA-generic warmup pools are randomized, not a fixed 3.**
`DnaReasoningWarmup.jsx` draws `WARMUP_SIZE=3` at random from however many
items are in `reasoningBlueprint` each session — grow a DNA's pool over
time (CALC-DIFF-01 is the pilot at 24) rather than assuming only 3 items
ever exist. Every pool item must stay DNA-generic (true regardless of
which specific question the student sees next), never reference specific
question numbers.

**6. Any script that writes `reasoning_blueprint` onto a `questions/{id}`
doc must also set `hasReasoningBlueprint: true`** alongside it (merge
write). This is the indexed flag the teacher-facing "Question Pre-Steps
Review" page queries (`where('hasReasoningBlueprint','==',true)`) instead
of scanning the whole `questions` collection, which project convention
forbids. Forgetting this flag makes new pre-steps invisible to that
review page even though they work fine for students. See
`tools/scripts/backfillReasoningBlueprintFlag.js` if a flag ever needs
backfilling after the fact.

**7. Call `touchChapterIndex(db, chapterId)`** after any
`reasoning_blueprint`/`hasReasoningBlueprint` write, same as any other
content-only edit to `questions/*` (see the cache-invalidation section
above) — every script in `tools/scripts/add*ReasoningBlueprint*.js`
already does this; keep doing it in new ones.

**8. Never let a `reasoning_blueprint` array end up with duplicate
`step_id`s.** Easy to trip on when PREPENDING new steps to an existing
array whose steps already use `S1`/`S2` — the new steps' own `S0`/`S1`
will collide. Renumber the whole array sequentially (`S0, S1, S2, ...`)
after combining, and check `new Set(steps.map(s=>s.step_id)).size ===
steps.length` before writing.

**9. Two teacher-facing review pages exist for this layer** — Sidebar
"DNA Warmup" (`DnaWarmupReviewPage.jsx`, every DNA's full warmup pool)
and "Question Pre-Steps" (`QuestionPreStepsReviewPage.jsx`, every
question with its own pre-steps) — both `isAdmin`-gated, read-only.
Spot-check new content there (or ask the user to) rather than assuming
it renders correctly; this is how the `f'(x)` LaTeX-rendering gap in
`DnaReasoningWarmup.jsx`'s objective field was actually caught.

**10. Commit messages referencing code with backticks or `$` must be
written to a temp file and committed with `git commit -F <file>`, never
inline `-m "..."`** — a bare backtick in an inline `-m` message triggers
shell command substitution and silently mangles the message (the code
itself is unaffected, only the message text).
