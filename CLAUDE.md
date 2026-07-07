# Sapere — project rules

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
