# Past Paper PDF → Sapere Content Prompt

Use this prompt after extracting the past-paper PDF to text or images. Paste the extracted paper after the prompt. The output must be ready to add to the canonical content files in `content/chapters/`.

## Workflow

1. Extract the PDF while preserving question numbering, section headings, diagram references, tables, and page numbers. Include page images or describe diagrams when text extraction cannot capture them.
2. Check the repository's `CLAUDE.md`, `content/README.md`, `content/schema.js`, and `.agents/skills/sapere-math-question/SKILL.md` before authoring. These are the current source of truth for content format and question quality.
3. Map each question to the right chapter and topic using the current content files and curriculum map. Do not invent topic IDs or titles.
4. Produce canonical JSON question objects grouped by topic. Target `content/chapters/<chapterId>.json`; do not create or update legacy seed JS files or write question content to Firestore.
5. Run `npm run content:validate` after integrating the questions into chapter JSON.

---

## [PROMPT]

You are converting an NSW HSC past-paper PDF into Sapere's canonical question content.

### Goal

Convert the supplied extracted paper into question objects that can be integrated into `content/chapters/<chapterId>.json`. Follow the repository's current instructions in `CLAUDE.md`, `content/README.md`, `content/schema.js`, and `.agents/skills/sapere-math-question/SKILL.md`. If any instruction here conflicts with those sources, follow the repository source of truth.

Do not edit legacy `src/constants/seed*.js` files, use the retired seed schema, or write questions to Firestore. Content is stored in git under `content/chapters/*.json`.

### Before writing

- Identify the paper's school, year, exam type, sections, question numbers, and page numbers.
- Map each question to an existing `chapterId`, `topicId`, `code`, and `title`. Verify these in the current chapter JSON and curriculum data; never guess.
- Read any applicable chapter profile in `profiles/` before writing solutions. Follow its standard method and common-pitfall guidance. If a needed profile is absent, report which material is needed instead of inventing curriculum-specific methodology.
- Preserve the question's mathematical meaning, wording, values, units, diagrams, and sub-question dependencies. Do not silently repair ambiguity or missing PDF content; flag it for review.

### Output format

Return one JSON object per question, grouped under the relevant topic, using the canonical `content/chapters/*.json` shape:

```json
{
  "id": "ros2023-q1",
  "type": "mc",
  "stem": "Question text with LaTeX",
  "options": ["Option A", "Option B", "Option C", "Option D"],
  "answer": 0,
  "hint": "A useful concise hint.",
  "keyPoints": [
    { "text": "the exact words from the stem", "note": "A short English tip explaining this phrase." }
  ],
  "solution": "A coherent full solution.",
  "steps": [
    { "explain": "Explain the purpose and reasoning for this step.", "work": "\\(a=b\\)" }
  ],
  "difficulty": "medium",
  "meta": {
    "source": "Roseville 2023 Trial, Question 1",
    "school": "Roseville",
    "year": 2023,
    "page": 4
  }
}
```

The surrounding chapter structure is:

```json
{
  "chapterId": "y12a-3",
  "title": "Chapter title from the existing file",
  "year": "12",
  "topics": [
    {
      "topicId": "y12a-3F",
      "code": "3F",
      "title": "Topic title from the existing file",
      "questions": []
    }
  ]
}
```

Output only fields permitted by `content/schema.js`. In particular, use these canonical names:

- `type`: `mc`, `short`, `review`, or `multipart`
- `stem`, `options`, `answer`, `hint`, `solution`, `steps`
- `steps[]`: `explain`, optional `work`, and optional `figure`
- `figure`: `{ "svg": "<svg>...</svg>" }` or a valid existing figure reference
- `parts`: nested questions for a genuine multipart question
- `manual: true` only where teacher marking is required
- `keyPoints`: up to six `{ "text", "note" }` pairs for contextual, tappable highlights in the question stem
- `meta` for provenance, including source, school, year, question label, and page when known

Do not include legacy fields such as `q`, `a`, `opts`, `h`, `s`, `solutionSteps`, `explanation`, `workingOut`, `graphData`, `subQuestions`, `topicId` on an individual question, or topic code/title on an individual question.

### Question type and structure

- Use `mc` for a source multiple-choice question. `answer` is the zero-based numeric index of the correct option. Include all source options and verify the answer against the worked solution. Never guess a key; use `null` only for an unresolved key and clearly flag it for review.
- Use `short` for a machine-markable response with a definitive answer. `answer` must be a string; add `accepted` only for genuinely equivalent accepted forms.
- Use `review` with `manual: true` for proof, explanation, construction, sketching, or other responses that need teacher judgment. `answer` must be a string describing the expected result or marking guidance.
- Use `multipart` when the source question has connected parts. Store each sub-question as a full canonical question in `parts`; keep shared source diagrams at the parent when appropriate. Avoid duplicating the parts' solutions in the parent's top-level `steps`.
- Preserve the original numbering in IDs and provenance. IDs must be unique across the content bank; check existing IDs before choosing one. Use a stable readable prefix based on school and year, followed by the question label (for example, `ros2023-q11a`).
- Assign difficulty based on the actual reasoning demand, not merely the exam section.

### Solutions and pedagogy

- Write a complete solution that stands on its own; do not rely on a student's having read sibling questions or earlier parts.
- Use a suitable number of steps for the actual solution. Each `explain` should say what is being done and why. Each `work` should show the corresponding mathematical work without skipping essential reasoning.
- Re-derive any value used from a sibling part when it is needed to solve this part.
- For sketch/draw questions, do not put the answer diagram in the question's top-level `figure`. Build the diagram through the solution steps when useful.
- For multi-part questions with per-part solutions, leave the parent's `steps` empty or omit them.
- Follow any applicable chapter profile and the skill's current guidance on distractors, diagrams, student pitfalls, and answer conventions.

### Hints and contextual highlights

- Add both kinds of hint when useful: `hint` is the existing concise, whole-question hint; `keyPoints` are the new in-question highlights shown when a student taps a highlighted phrase.
- For each new machine-markable question (`mc` or `short`), inspect the stem and add one to six `keyPoints` when it contains meaningful vocabulary, a condition, or a phrase that benefits from a targeted explanation. Do not add highlights just to fill a quota. For `review` or `multipart`, add them when they provide a clear student benefit; put part-specific highlights on the relevant question inside `parts`.
- Each entry is `{ "text": "...", "note": "..." }`. `text` must be an exact, contiguous substring of that question's `stem`; keep it concise and meaningful. If the selected text touches a mathematical expression, the UI highlights the whole expression automatically.
- Write every `note` in clear, concise English for the student. Explain what the highlighted phrase means or how to use it, then give a useful first move without disclosing the final answer. Make the tip specific to that phrase and this question, not a generic instruction such as “Read carefully.”
- Keep `hint` and `keyPoints` complementary: the whole-question hint can suggest an overall strategy, while each highlight explains one local idea. Do not repeat the same tip in both fields. If no useful phrase exists, omit `keyPoints`; do not fabricate a highlight.
- Before returning the JSON, verify that every `keyPoints[].text` occurs verbatim in its own `stem`, every note is non-empty English, and there are no more than six entries. A parent multipart question and each part have their own stem and key points.

### LaTeX and diagrams

- Use explicit `\\( ... \\)` delimiters for inline math in `stem`, `options`, `hint`, `solution`, `steps[].explain`, and `steps[].work`. Use `\\[ ... \\]` for display math where suitable. Do not rely on renderer auto-wrapping.
- In JSON, escape every LaTeX backslash (`\\`). Keep ordinary prose outside math delimiters; wrap only mathematical expressions.
- Preserve source diagrams faithfully. If a diagram is unavailable or extraction is ambiguous, identify the page/question and request the missing image or mark the figure for review. Never invent dimensions, coordinates, intersections, or geometric relationships.
- When authoring a replacement SVG, follow the repository's diagram rules and verify the geometry and labels. Use the canonical `figure` field and a valid SVG string.

### Distractors and answer checks

- For any newly constructed options, use plausible misconceptions as distractors; do not generate random sign changes.
- Keep option formats consistent (for example, do not mix fractions and decimals without a reason) and avoid impossible values for the context.
- Independently solve each question and check every answer, unit, domain restriction, option key, and part dependency.
- Do not alter source-provided options without noting why; retain the original answer choices when readable.

### Required response

1. List any extraction uncertainties, missing diagrams, unreadable text, or answer-key ambiguities.
2. State the chapter/topic mapping used, with evidence from the repository.
3. Provide the canonical JSON grouped by topic, ready to merge into the chapter files.
4. Summarize question IDs and counts by topic.
5. After integration, run `npm run content:validate` and report its result. Do not claim validation if the command was not run.

### Extracted paper

[Paste extracted PDF text here. Include source filename, page numbers, and images/descriptions of figures.]
