# tools/scripts — admin-SDK script rules

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
locally-cached copy of *that one chapter* is stale (see the "Question cache
invalidation is per-chapter, not global" rule in the project root CLAUDE.md).
Skipping this after a content-only script leaves students looking at
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
