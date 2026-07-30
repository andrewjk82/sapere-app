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

**Content-only edit (no add/delete/rename — just fixing text/options/SVG/steps
on existing docs)?** `rebuildQuestionIndexes.js` still works but rescans the
whole `questions` collection (23k+ docs = 23k+ reads) just to touch a handful
of chapters. Use the cheap alternative instead:

```js
import { touchChapterIndex } from './_lib/touchChapterIndex.js';
await touchChapterIndex(db, 'y10-8'); // once per chapter your script edited
```

This only bumps that chapter's `question_index/{chapterId}.updatedAt` — the
exact field `chapterQuestionsCache.js` checks to decide whether a student's
locally-cached copy of *that one chapter* is stale (see 2026-07-28 incident
below). Skipping this after a content-only script leaves students looking at
their old cached copy until something else happens to touch that chapter.

**Never write an unfiltered `db.collection('questions').get()`.** No `where()`
means a full 23k+-doc scan billed as 23k+ reads. Scope to
`where('chapterId', '==', ...)` / `where('topicId', '==', ...)`, or point-read
specific ids with `.doc(id)`. 2026-07-28 incident: three one-off scripts
(`fix_global_negative_distractors.cjs`, `cleanup_bad_distractors.cjs`,
`fix_dummy_fractions.cjs`) full-scanned the collection in a single morning —
~70K+ reads from three lines. Every other script that session was scoped
correctly, so this is a one-character mistake, not a knowledge gap.

Enforced by a repo guard — `npm run test:question-scan-guard` — which fails the
build on any NEW unfiltered read (admin-SDK chains and client
`getDocs(collection(db, 'questions'))` alike). Scoping calls (`.where`, `.doc`,
`.limit`, `.count`, `.select`) satisfy it. 13 pre-existing one-off scripts are
quarantined in that guard's `LEGACY_FILES`; **never re-run one of those
unscoped, and never add to that list to silence new code** — allowlist a
genuine full rebuild via `ALLOWED_FILES` with a comment instead.

Other standing rules for question-writing scripts:

- Never overwrite or delete docs with `origin: 'teacher'` (teacher edits win).
- New questions must be counted via `questionCountsService` semantics —
  `rebuildQuestionIndexes.js` handles this for you.
- Deploy is Vercel (`https://sapere-app.vercel.app/`) — never `firebase deploy`.

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
