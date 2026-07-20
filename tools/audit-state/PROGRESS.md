# Question quality audit — persistent progress

## 2026-07-08 — MCQ conversion test run (y10-5a)

User asked for a manual test of the MCQ conversion pipeline (`MCQ_CONVERSION_RULES.md`)
on Year 10 `y10-5a` before letting the daily scheduled task run unattended. Queried
chapterId='y10-5'/topicId='y10-5a' directly (targeted query, not a full scan) — 75
docs, all `short_answer`, none `origin:'teacher'`, none `requiresManualGrading`.
Converted the first 15 (q1a-q1l, q2a-q2c) to `multiple_choice`: independently
re-derived every answer (null factor law / factorising quadratics), wrote 4-option
sets with `\( ... \)` delimiters and mistake-based distractors, 4-step `solutionSteps`
each, randomized correct-option position (not clustered at index 0 — roughly even
spread across indices 0-3), set `isNew: true`. All 15 passed KaTeX
self-validation before write; 0 failures. Full old/new values logged to
`fix-y10-5-log.json` for rollback.

**Found while converting:** `y10-5a-q2f` has a separate content bug — question
text shows `n^2 = \frac{1}{1}n` but the stored answer is `n = 0, n = 1/3`, which
only makes sense if the question should read `\frac{1}{3}n`. Not fixed yet — out
of scope for this batch, flagged in CHAPTER_MAP.md for the next pass through this
topic.

**Remaining in y10-5a:** 60 questions (q2d onward). Not yet touched.

**Correction (same day):** the 15 `solutionSteps.explanation` texts were written in
Korean by mistake — student-facing text must be English (project standard, same as
question/options/hint). Fixed via `tools/scripts/fixY10Ch5ABatch1English.js` (15
reads + 15 writes, `explanation` field only, `workingOut`/LaTeX untouched).
`MCQ_CONVERSION_RULES.md` rule 2 updated to state this explicitly so it doesn't
recur in the daily scheduled run.

Started 2026-07-08. Goal: across all ~22,105 docs in the Firestore `questions`
collection, verify/fix (1) duplicate MCQ options, (2) broken LaTeX, (3)
answer-index vs solution-text mismatches, (4) out-of-bounds/missing answers,
(5) severely broken `exam:` chapter content (empty question/options).

**Cost discipline (hard rule for every future run):** minimize Firestore
reads. Never re-scan the full `questions` collection — the one-time
structural audit already happened and is cached in this directory. Read only
the specific doc IDs you're about to act on. Batch a day's work into ONE
small chunk (roughly 20-50 docs worth of reads+writes) and stop — do not try
to clear a whole category in one run.

**Reality check (2026-07-08, tallied a full session):** the dollar cost here
is genuinely trivial — a whole session with 3 wasteful full-collection scans
(~66,000 reads) plus everything else still totaled only ~$0.025. Converting
the ENTIRE remaining ~18,125-question non-exam curriculum in one pass, done
via targeted chapter-scoped queries (not full scans), would cost roughly
$0.02-0.03 total. **The constraint was never total Firestore spend — it's (a)
never repeat a full-collection scan (that's the only pattern that actually
wastes money at any real scale), and (b) for the MCQ-conversion campaign
specifically, generation time and quality control per session, not cost.**
For that campaign the per-run unit is now one whole chapter (see
`MCQ_CONVERSION_RULES.md` and the `daily-mcq-conversion-coworker` scheduled
task), not a fixed small doc count — see that task's prompt for the current
pacing rule. **Year 5 and Year 6 are excluded from the MCQ conversion
campaign** (user decision) — see CHAPTER_MAP.md, both sections marked ⛔.

## Traversal order

`CHAPTER_MAP.md` in this same directory is the master chapter/topic list —
Year 1, 5-12, built from curriculumSeeds.js plus a cheap `question_index` /
`question_topic_index` check (~600 small summary docs, not the full 22,105
`questions` collection) that found 30 non-empty "orphan" chapters (including
all of Year 6) that exist in Firestore but have no seed file. Work through it
top to bottom, checking off chapters as they're done. `[seed]` chapters can
eventually round-trip through a seed file if desired; `[orphan]` chapters
must be read/written directly against Firestore (same pattern as y7-4a).

## Cached artifacts in this directory (no Firestore access needed to read these)

- `structural-audit-report.json` — full census of all 22,105 docs, grouped by
  chapterId/topicId, categorized by error type. This is the master list.
- `answer-mismatch-parsed.json` / `answer-mismatch-full.json` — the 188
  answer_mismatch findings (task #3), with full doc data already fetched.
- `fix-y11a7.json`, `fix-y9-8.json`, `fix-y9-1.json` — fix lists for chapters
  already written to Firestore (done, see below).
- `fix-y10-1.json` — 11 confirmed fixes for chapter y10-1, verified but
  **NOT YET WRITTEN to Firestore**. Do this first on the next run.

## Status by task

### Task 3 — answer/solution mismatches (188 total)
Methodology: do NOT trust the audit's auto-suggested index blindly — it's a
fuzzy text-match heuristic and is frequently wrong (confirmed false positives
in y9-8, y9-1, y10-1 where the ALREADY-marked answer was actually correct).
Always independently verify the math per question, or at minimum sanity-check
against `solutionSteps` (may be array-of-objects with `.workingOut`, or
sometimes array-of-strings — check both) before changing `answer`.

- [x] y11a-7 (59/59 fixed) — systemic bug, all confirmed via direct math verification, applied.
- [x] y9-8 (7 fixed, 36 confirmed-correct/false-positive, no change needed)
- [x] y9-1 (12 fixed, 15 confirmed-correct/false-positive)
- [ ] y10-1 (11 fixes confirmed in `fix-y10-1.json`, NOT YET APPLIED — apply next)
      Also: `y10-1a-q2h` has genuinely broken options (none of the 4 options
      represent the correct fraction 1⅗) — needs new options written, not
      just an index fix. Flag for a human or a more careful pass; skip in
      automated runs.
- [ ] y11a-3 (18 items) — not yet analyzed
- [ ] Small tail chapters (15 items total, 1-3 each): y10-4, y7-10, y10-2,
      y7-15, y11a-2, y7-14, y7-16, y11a-5, y12a-3, y9-7 — not yet analyzed

### Task 1 — duplicate MCQ options (306 flagged, non-exam)
Not started. List is in `structural-audit-report.json` (filter for error
containing "Duplicate option"). Pilot pattern from y7-4a: when the duplicate
equals the correct answer's own text, replace with the unsimplified/distractor
form; when duplicate is between two wrong options, needs individual judgment.

### Task 2 — remaining LaTeX parse errors (~435 non-exam, minus 28 already fixed)
The single biggest pattern (`$\$` currency-escape bug, 28 docs) is already
fixed — see `tools/scripts/fixCurrencyDollarEscapeBug.js` (safe to re-run,
it's self-verifying and idempotent; will find ~9 additional known-unresolved
cases that need individual attention). Remaining ~435 need pattern analysis
similar to how the currency bug was isolated — group by normalized KaTeX
error message in `structural-audit-report.json` and look for more shared
root causes before fixing one-by-one.

### Task 4 — answer-index-out-of-bounds / too-few-options / missing-answer (41 non-exam)
Not started. List is in `structural-audit-report.json`.

### Task 5 — `exam:` chapter content (~2,355 severely broken)
Not started, deliberately deprioritized until tasks 1-4 (non-exam) are done.
Root cause confirmed: `question` and `options` fields are empty; real content
survives only in `title` (truncated) and `solutionSteps`. This needs content
RECONSTRUCTION (generating proper question text + plausible MCQ options from
the surviving title+solutionSteps), not a simple index/field patch — treat as
a different, higher-effort project once reached.

## Tools already built (reuse, don't rewrite)

- `tools/scripts/structuralAuditAllQuestions.js` — full census (already run once, don't re-run unless data is stale — it's a full-collection scan).
- `tools/scripts/fixCurrencyDollarEscapeBug.js` — self-verifying bulk fix for the `$\$` pattern, supports `--dry-run`.
- `tools/scripts/applyAnswerFix.js <fixListPath> [--dry-run]` — generic self-verifying answer-index fix applier; reads current doc, checks origin!='teacher', re-validates with KaTeX before writing. **Improvement needed**: currently re-reads each doc from Firestore even in `--dry-run` mode — for future runs, prefer validating against already-cached local JSON (e.g. `answer-mismatch-full.json`) instead of hitting Firestore twice per doc.

## "NEW question" badge — set `isNew: true` on every fix going forward

The app has an existing notification feature: any question doc with
`isNew: true` shows a `[NEW]` badge in `QuestionBankPage.jsx`, and
`Curriculum.jsx` queries `where('isNew','==',true)` to cascade a dot badge up
through topic and chapter nav. It's normally set by `chapterSeeder.js` from a
seed file's `raw.isNew` field — since we're writing directly to Firestore now
(no seed files), **every fix/creation script must explicitly include
`isNew: true`** in its write, or the badge silently never fires for that
question. Done retroactively for the 107 questions fixed so far via
`tools/scripts/setIsNewForFixedQuestions.js` (write-only, no reads — ids
already known from the fix logs).

**Caveat, not yet resolved:** nothing in the codebase ever sets `isNew` back
to `false`. The "read" state is tracked only client-side (localStorage key
`sapere_viewed_questions`), so the Firestore-side flag accumulates forever —
`Curriculum.jsx`'s `where('isNew','==',true)` query will keep returning more
docs as more get fixed, on every load, for every user, which works against
the read-minimization goal this whole project started from. Not fixed yet —
worth deciding later whether to (a) add a periodic clear (e.g. isNew docs
older than N days get flipped back to false by a small script), or (b) accept
the slow growth since it's still far cheaper than re-scanning the full
collection. Flag this to the user before the isNew-tagged set gets large
(hundreds+).

## Rollback & audit trail discipline (replaces seed-file git history)

Seed files are no longer required for new/fixed content (see decision below).
The only thing that setup used to give us for free was a git-diffable history
of what a question looked like before a change. Since we now write directly
to Firestore, **every fix log in this directory must contain the full old
field value(s)**, not just error counts or a summary — enough that a single
`.update()` call with the logged old value(s) fully restores the doc. Commit
these log files to git as they're created; the git history of this directory
IS the rollback trail.

**Audit of existing logs — which are actually rollback-capable today:**

- `fix-y11a7-log.json`, `fix-y9-8-log.json`, `fix-y9-1-log.json` — ✅ capable.
  Each entry has `{id, oldAnswer, newAnswer}`; rollback = write `oldAnswer`
  back to the `answer` field of that doc id.
- `fix-y7-4a-log.json` — ✅ capable (reconstructed after the fact from the
  session transcript, since the original fix script only printed to console
  and didn't write a log file — lesson: always write the log file, don't
  just print).
- `currency-fix-log.json` — ❌ **NOT capable**. It only logged
  `{id, chapterId, topicId, beforeErrors, afterErrors}` — no old field text
  was captured for the 28 docs it touched. If one of those 28 ever needs to
  be rolled back, there is no local record of the original `question` /
  `solution` / `options` / `solutionSteps` text — it would require a fresh
  single-doc Firestore read and manual judgment (re-introduce the `$\$`
  pattern that was removed), not a mechanical restore. Known, accepted gap —
  not worth a proactive fix-up read just to backfill this.

**Going forward, every new fix script must log, per doc touched:**
`{ id, chapterId, topicId, changedFields: { fieldName: { old: <full old value>, new: <full new value> } } }`
— not summaries, not counts. This is the standing format from now on.

## Standing rules (from CLAUDE.md, still apply)

- Never overwrite `origin: 'teacher'` docs.
- After any script that adds/deletes/re-uploads/renames docs in `questions`,
  run `node tools/scripts/rebuildQuestionIndexes.js <chapterId>`. Simple
  field updates (like everything done so far) do NOT need this — only
  membership changes do.
- Deploy is Vercel, never `firebase deploy` (not relevant to this audit work,
  but stated here per project convention).
