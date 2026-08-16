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

## Question DNA reasoning-blueprint authoring

See the `sapere-question-dna` skill (`.agents/skills/sapere-question-dna/SKILL.md`)
for the full standing rules on authoring/extending/reviewing the
reasoning-blueprint layer (DNA-generic warmup pools + question-specific
pre-steps) — kept as a skill rather than inline here since it only
applies to that specific workflow.
