# Question Corpus (local only)

A private SQLite database with three kinds of rows, distinguished by `source`:

- `'original'` — copyrighted past-paper text, style/difficulty reference ONLY.
- `'existing'` — everything already live in the app today, pulled straight
  from the local seed files (see below) — safe style reference.
- `'generated'` — a fresh candidate Claude wrote from the corpus, pending
  approval. **The only value ever eligible for Firestore upload.**

See [`QUESTION_BANK_EXPANSION.md`](../../QUESTION_BANK_EXPANSION.md) for the
generation workflow this corpus feeds.

**The DB file (`tools/corpus/data/corpus.db`) is gitignored and must never be
committed or deployed** — it can contain copyrighted exam text.

## Import everything already live in the app

```bash
npm run corpus:ingest-all
```

Pulls every question from `CHAPTER_SEED_REGISTRY` in
`src/constants/curriculumSeeds.js` — the local seed files that back the whole
app — straight into the corpus. **Zero Firestore reads, zero network
traffic**: this is a pure static import of files already in the repo, so it's
free and fast (~20k questions in well under a minute). Re-running it is safe
(upserts by id).

Tags `source='original'` for real past-paper exam chapters (`exam:...`) and
`source='existing'` for everything else, and marks all of them
`deploy_status='deployed'` since they're already live — `deploy.js` never
touches these (it only ever selects `source='generated'`).

This also runs every question through the same LaTeX/answer-index validator
as the live seed pipeline, for free — filter `validationStatus=failed` in the
viewer to see anything currently broken in production.

## Ingest a batch

```bash
npm run corpus:ingest -- path/to/file.js --source=original --paper="Killara High School" --course="Year 7" --examYear=1995
npm run corpus:ingest -- path/to/file.js --source=generated
```

`file.js` must export an array of questions in the same seed dialect
`chapterSeeder.js` expects (`id`, `type`, `question`/`q`, `options`/`opts`,
`answer`/`a`, `difficulty`, `chapterId`, `topicId`, `topicCode`, `t`,
`solutionSteps`, `subQuestions`, `graphData`, ...).

Every question is validated with the SAME LaTeX/answer-index checker the real
seed pipeline uses (`src/utils/latexValidate.js`, also behind `npm run
validate-seeds`), plus duplicate-option and duplicate-id checks. Failing rows
are still stored (so you can see and fix them in the viewer) but are flagged
`validation_status='failed'` and are never deploy-eligible.

**Every newly-ingested row lands `corpus_status='pending'`** — see "New
Questions" below. It does NOT show up in Browse, in topic/year counts, or as
generation reference until reviewed. (`corpus:ingest-all`'s historical bulk
import is the one exception — those rows are marked `'approved'` directly
since they're already live in production.)

## Browse the corpus

```bash
npm run corpus:viewer
```

Opens `http://127.0.0.1:5391` — binds to localhost only. Renders every
question exactly as KaTeX renders it in the app (same `toDisplayText` +
`renderMathInElement` pipeline as `MathView.jsx`). Two tabs:

- **Browse Corpus** — only `corpus_status='approved'` rows. Filter by topic,
  year, source, difficulty, type, validation status, or deploy status; click
  a question to preview it in full, including sub-questions and solution
  steps.
- **New Questions** — the pending review queue (everything freshly ingested,
  regardless of source). Each question has **Add to corpus** (promotes it to
  `corpus_status='approved'` — now it shows up in Browse and counts as style
  reference for future generation) or **Reject** (deletes it outright — it
  never entered the corpus, so there's nothing to undo). Both are pure local
  DB flag flips; neither touches Firestore.

Once a `source='generated'` question is corpus-approved AND has passed
validation, its detail view additionally shows an **Approve for deploy**
button — this is the SEPARATE, second gate below.

## Deploy approved questions to Firestore

```bash
node tools/corpus/deploy.js          # dry run — prints what would be written, writes nothing
node tools/corpus/deploy.js --live   # actually writes to Firestore
```

This is the ONLY script in the pipeline that touches Firestore. It only ever
deploys rows that are `source='generated'` AND `corpus_status='approved'` AND
`validation_status='passed'` AND `deploy_status='approved'` — a question must
clear the New Questions review gate before it can even be offered the deploy
gate. `source='original'` rows are never eligible, full stop.

On `--live`, it maps each question to the exact same Firestore document shape
`chapterSeeder.js`'s `mapSeedQuestion()` produces (see
`tools/corpus/lib/mapToFirestoreDoc.js`), refuses to guess an unresolvable MC
answer (throws instead — same "never guess" contract as the real seed
pipeline), skips (and reports) any id that would collide with an existing
`origin:'teacher'` doc, then automatically runs
`tools/scripts/rebuildQuestionIndexes.js` for every chapter touched, and
finally marks those rows `deploy_status='deployed'` in the local DB.

## Schema

- `papers` — one row per ingested exam paper (school, year, course).
- `question_types` — a "유형" (question type) taxonomy, scoped per `topic_id`
  so the same code (e.g. "A") can mean different things across topics.
- `questions` — one row per question. Key columns: `source`
  (`original`/`existing`/`generated`), `corpus_status`
  (`pending`/`approved` — the New Questions review gate), `validation_status`,
  `deploy_status` (`NULL`/`approved`/`deployed` — the separate Firestore
  deploy gate, only reachable once `corpus_status='approved'`), plus
  `raw_json` (the full original object, always kept as ground truth for
  re-export).
