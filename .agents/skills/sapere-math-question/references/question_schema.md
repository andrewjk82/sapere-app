# Question Schema Reference

> **Canonical source of truth is `content/schema.js`** (zod). This file is a human-readable
> walkthrough of that schema for `content/chapters/*.json` — edit chapter files to match this
> shape. The old Firestore/seed shape is kept below, clearly marked, only because
> `content/legacy.js`'s `toLegacy`/`fromLegacy` still produces/accepts it at the browser-component
> boundary (so components like `MathView.jsx` don't need to change) — never write the legacy
> field names into a chapter file.

## Canonical shape (`content/chapters/<chapterId>.json`)

Each chapter file is `{ chapterId, topics: [{ topicId, questions: [...] }] }`. A question:

```javascript
{
  // === Identity ===
  id: "y11a-5i-q18a",         // Format: y{year}a-{chapter}-q{number}{sub}
  // topicId / chapter placement comes from where the question sits in the file — not a field.

  // === Question Content ===
  type: "mc",                  // "mc" | "short" | "review" | "multipart"
  difficulty: "medium",        // "easy" | "medium" | "hard"
  timeLimit: 60,                // seconds
  stem: "...",                  // LaTeX-enabled string using \\( \\)

  // === Answer (mc) ===
  options: [                    // exactly 4 options (string, or {text, image?, figure?})
    "\\(7\\)",
    "\\(-7\\)",
    "\\(0\\)",
    "\\(1\\)"
  ],
  answer: 0,                    // 0-indexed integer — ALWAYS a plain number for mc, never a string

  // === Answer (short / review) ===
  // For short:  answer: "x = 3"   (expected text answer)
  // For review: answer: null      (no auto-gradable answer; manual grading)

  // === Hints & Solutions ===
  hint: "Brief hint text",
  solution: "Final answer text with LaTeX",

  // === Step-by-Step Solution ===
  steps: [
    {
      explain: "Natural language explanation of this step",
      work: "LaTeX math expression for the calculation",
      figure: null              // or { svg: "<svg>...</svg>" | "fig:<sha>" } (usually only on last step)
    }
  ],

  // === Visual ===
  figure: {                     // omit/null if no diagram needed
    svg: "<svg ...>...</svg>",  // hand-authored SVG; build externalises it to content/figures/<sha>.svg
    // or a bare JSXGraph config kept under figure.raw for continuity — MathView only renders
    // figure.jsxGraph today, see legacy.js for exact field carry-through
  },

  // === Metadata ===
  manual: false,                // true only when this needs a human to grade (review-type default)
  meta: { source: "...", school: "..." },

  // === Sub-parts (multipart questions only) ===
  parts: [
    { /* same schema, recursively */ }
  ]
}
```

## Type-specific required fields

### `mc`
| Field | Required | Notes |
|-------|----------|-------|
| options | ✅ | exactly 4 strings (or option objects) |
| answer | ✅ | 0-indexed integer |
| manual | ❌ | always `false` (or omitted) |

### `review`
| Field | Required | Notes |
|-------|----------|-------|
| options | ❌ | omit |
| answer | ❌ | can be `null` |
| manual | ✅ | `true` |

### `multipart`
| Field | Required | Notes |
|-------|----------|-------|
| parts | ✅ | array of sub-questions, same schema recursively |
| top-level `steps` | ❌ | must be empty `[]` when every part already has its own `steps` — see SKILL.md §13 |

---

## Legacy shape (display-only — `content/legacy.js` output, what old components still read)

This is what `toLegacy()` produces (and `fromLegacy()` accepts back) at the UI boundary — you
should never author this shape by hand in a chapter file, but it's useful to recognise when
reading component code (`ExamPrep.jsx`, `MathView.jsx`, etc.) that still expects it:

```javascript
{
  type: "multiple_choice",     // "multiple_choice" | "short_answer" | "teacher_review" | "multi_part"
  question: "...",              // ← canonical stem
  opts: [...],                  // ← canonical options
  a: 0,                         // ← canonical answer (mc only)
  answer: "0",                  // stringified `a` for mc; raw text for short/review
  solutionSteps: [{ explanation, workingOut, graphData }],  // ← canonical steps[].{explain,work,figure}
  graphData: { jsxGraph: {...} },  // ← canonical figure
  requiresManualGrading: false,     // ← canonical manual
  subQuestions: [...]               // ← canonical parts
}
```

Field-for-field mapping is the same table as CLAUDE.md's top section — that table is the
authoritative one if this ever drifts from it.
