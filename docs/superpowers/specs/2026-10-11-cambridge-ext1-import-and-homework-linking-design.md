# Cambridge Extension 1 import and homework linking

## Goal

Import the supplied *CambridgeMATHS NSW Stage 6 Mathematics Extension 1 Year 11, Second Edition* into Sapere in verified chapter-sized batches.  When a teacher has marked a workbook question incorrect, the homework redo flow should open the corresponding Sapere question when it exists, while retaining the original worksheet PDF as a fallback and reference.

## Scope

The first delivery is Chapter 1 plus the reusable source-reference and homework-linking infrastructure.  Remaining chapters follow the same validated process in later batches.  Existing content and unrelated uncommitted work are out of scope.

## Source identity

Every imported question carries a stable, structured source reference in canonical question metadata:

```json
{
  "meta": {
    "source": {
      "bookId": "cambridge-nsw-ext1-y11-2ed",
      "chapter": "1",
      "exercise": "1A",
      "question": "3b",
      "page": 12
    }
  }
}
```

The exact matching key is the normalised tuple `(bookId, topicId, exercise, question)`.  It is deliberately not derived from prompt text, so changes to wording, typesetting, or hints cannot create a false match.  Imported multipart questions retain their source label at the part level where homework marking distinguishes parts.

## Content import

1. Extract Chapter 1 questions and verify question boundaries, diagrams, and answer material against the supplied PDF.
2. Create the missing Year 11 Extension 1 Chapter 1 teaching profile before authoring worked solutions.
3. Add a canonical chapter content file using the current `content/schema.js` schema.  Questions receive English hints, source-specific worked solutions, and student-mistake-based distractors where a multiple-choice conversion is appropriate.
4. Run content schema, KaTeX, answer-index, source-reference, and duplicate-reference checks.  Inspect every generated diagram at student display size.

## Homework redo behaviour

`HomeworkRedo` already has an authoritative wrong-question identifier in the form `topicId|section|label`.  Its behaviour becomes:

1. Resolve the active `(topicId, section, label)` against the imported-content source-reference index for the selected student/course.
2. If exactly one active Sapere question matches, expose **Practise in Sapere** for that problem.  Activating it opens the existing question experience with its hint and worked solution, without changing the teacher's recorded mark or the student's current redo notes.
3. Keep **Worksheet** available at all times as the original PDF reference.
4. When there is no unique match, retain today's worksheet-PDF-only behaviour.  Ambiguous matches are treated as no match and logged locally for diagnosis; the application must never send a student to a potentially different question.

The link is additive: answer-key images, redo progress stored locally, and marking keys are unchanged.

## Data access and publishing

The content publishing step will emit a compact lookup index keyed by the source tuple, pointing to the canonical question ID and topic.  The client reads that static index alongside its existing content manifest; it does not scan Firestore or load all questions.  The generated index is build output, not hand-maintained data.

## Error handling

- Missing, malformed, duplicate, or unresolved references never block the redo UI; they fall back to the worksheet.
- Source-reference validation rejects newly imported duplicate keys in the same book/topic.
- A stale cached index is safely handled as an unavailable link, and the PDF remains accessible.

## Testing

- Unit tests cover reference normalisation, unique/missing/ambiguous resolution, and the PDF fallback decision.
- A UI-level test verifies that a matched incorrect homework item presents the internal-practice action and an unmatched item does not.
- Content validation confirms Chapter 1's canonical schema, math rendering, answer indices, and source-reference uniqueness.

## Rollout

1. Ship the source-reference index and redo-link UI with no behavioural change for existing content.
2. Import and validate Chapter 1; matching homework labels begin linking automatically.
3. Import later chapters in independently validated batches.
