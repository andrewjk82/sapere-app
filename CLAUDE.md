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

## Admin-SDK scripts that write to `questions` (tools/scripts/*)

The client keeps four denormalized docs in sync incrementally; admin scripts
bypass all of that. Readers (Question Bank, practice pools, daily assignments)
**trust an existing `question_index/{chapterId}` doc completely** — a stale or
partial index silently hides questions from students and teachers.

**Contract: after ANY script that adds, deletes, re-uploads or renames docs in
the `questions` collection, run:**

```
node tools/scripts/rebuildQuestionIndexes.js <chapterId> [chapterId ...]
```

This rebuilds `question_index/{chapterId}`, `question_topic_index/{topicId}`
and `sync_meta/question_counts` from actual DB state, and stamps
`sync_meta/questions` (version + membershipVersion) and
`question_index/_meta.builtVersion` with one shared version. Never write these
docs by hand from a one-off script — partial/sparse index docs are worse than
missing ones (missing → readers fall back to a full query; sparse → questions
vanish). 2026-07-06 incident: `migrateY5Ch5Questions.js` re-uploaded 4 topics
without rebuilding the index and the Question Bank showed 1 of 23 questions.

Other standing rules for question-writing scripts:

- Never overwrite or delete docs with `origin: 'teacher'` (teacher edits win).
- New questions must be counted via `questionCountsService` semantics —
  `rebuildQuestionIndexes.js` handles this for you.
- Deploy is Vercel (`https://sapere-app.vercel.app/`) — never `firebase deploy`.

## Admin scripts: never full-scan `daily_stats` / `calc_stats`

Firestore bills **1 read per document**. A full

```js
db.collection('users').doc(uid).collection('daily_stats').get()
```

costs ~30–90+ reads **per student**. Looping all users easily hits **thousands
of reads in one investigation** (2026-07 traffic spike contributor).

**Required pattern** — use point-reads by `YYYY-MM-DD` doc id:

```js
import {
  getUserStatDoc,
  getUserStatsForDateRange,
  getUserStatsSinceReset,
} from './_lib/safeUserStats.js';

// One day:
await getUserStatDoc(db, uid, 'daily_stats', '2026-07-13');

// Tight window (max 120 days, enforced):
await getUserStatsForDateRange(db, uid, 'daily_stats', '2026-07-11', '2026-07-13');

// Since season XP reset (default since 2026-07-11):
await getUserStatsSinceReset(db, uid, 'daily_stats');
```

Example CLI: `node tools/scripts/auditUserXpSinceReset.js Wonmin`

Emergency override only: `SAPERE_ALLOW_FULL_STATS_SCAN=1` (still logs a warning).
Never use full collection scans in default tooling or one-off audits.
