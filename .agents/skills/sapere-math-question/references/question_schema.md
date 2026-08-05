# Question Schema Reference

## Complete Field Specification

### Top-Level Fields

```javascript
{
  // === Identity ===
  id: "y11a-5i-q18a",        // Format: y{year}a-{chapter}-q{number}{sub}
  topicId: "y11a-5I",         // Topic grouping
  c: "5I",                    // Chapter code
  t: "Revision",              // Topic label

  // === Question Content ===
  type: "multiple_choice",    // "multiple_choice" | "short_answer" | "teacher_review" | "graph_sketch"
  difficulty: "medium",       // "easy" | "medium" | "hard"
  timeLimit: 60,              // Seconds
  question: "...",            // LaTeX-enabled string using \\( \\)

  // === Answer (MC) ===
  opts: [                     // Exactly 4 options
    "\\(7\\)",                // Each option uses \\( \\) for math
    "\\(-7\\)",
    "\\(0\\)",
    "\\(1\\)"
  ],
  a: 0,                       // 0-indexed correct answer
  answer: "0",                // String version of `a`

  // === Answer (Short Answer / Teacher Review) ===
  // For short_answer:
  answer: "x = 3",            // Expected text answer
  // For teacher_review:
  answer: null,               // No auto-gradable answer

  // === Hints & Solutions ===
  hint: "Brief hint text",
  solution: "Final answer text with LaTeX",

  // === Step-by-Step Solution ===
  solutionSteps: [
    {
      explanation: "Natural language explanation of this step",
      workingOut: "LaTeX math expression for the calculation",
      graphData: null          // or JSXGraph object (usually only on last step)
    }
  ],

  // === Visual ===
  graphData: {                 // null if no graph needed
    jsxGraph: {
      width: 300,
      height: 300,
      boundingbox: [-5, 5, 5, -3],  // [xMin, yMax, xMax, yMin]
      boardOptions: { keepaspectratio: true },
      script: "board.suspendUpdate();\n..."  // JSXGraph commands
    }
  },

  // === Metadata ===
  isNew: true,
  requiresManualGrading: false,  // true for teacher_review, graph_sketch

  // === Sub-Questions (optional) ===
  subQuestions: [
    { /* same schema as top-level */ }
  ]
}
```

## Firestore `options` Field

When writing to Firestore, `opts` must also be written as `options`:
```javascript
options: opts.map(o => ({ text: o, imageUrl: '' }))
```

## Type-Specific Required Fields

### `multiple_choice`
| Field | Required | Notes |
|-------|----------|-------|
| opts | ✅ | Exactly 4 strings |
| a | ✅ | 0-indexed integer |
| answer | ✅ | String of `a` |
| requiresManualGrading | ✅ | Always `false` |

### `teacher_review`
| Field | Required | Notes |
|-------|----------|-------|
| opts | ❌ | Should be deleted/null |
| a | ❌ | Should be deleted/null |
| answer | ❌ | Can be null |
| requiresManualGrading | ✅ | Always `true` |

### `graph_sketch`
| Field | Required | Notes |
|-------|----------|-------|
| graphData | ✅ | The reference graph to sketch on |
| requiresManualGrading | ✅ | Always `true` |
