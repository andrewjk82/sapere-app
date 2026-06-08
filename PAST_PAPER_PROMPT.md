# Past Paper Import Prompt

아래 프롬프트를 Claude Code에 붙여넣고, 그 밑에 past paper 문제들을 붙여넣으면 됩니다.

---

## 사용법

1. 아래 [PROMPT] 전체 복사
2. Claude Code에 붙여넣기
3. 프롬프트 끝에 past paper 원문 텍스트 붙여넣기
4. 전송

---

## [PROMPT]

You are adding a new NSW HSC past paper to the Sapere app.

### Your task
Convert the past paper questions below into a JavaScript seed file matching the exact format of `/Users/andrewkim/Desktop/sapere1/src/constants/seedAbbotsleigh2020Questions.js`.

### Output file
Create a new file: `/Users/andrewkim/Desktop/sapere1/src/constants/seed[SchoolName][Year]Questions.js`

Export a const array named `[SCHOOLNAME]_[YEAR]_QUESTIONS`.

### Question object format

```js
{
  id: 'xxx-mc1',           // e.g. 'ros2023-mc1', 'abb2022-q11a'
  topicId: 'y12a-3F',      // see topic map below — MUST match exactly
  c: '3F',                 // topic code only (no year prefix)
  t: 'Global maximum and minimum',  // topic title from the map
  source: 'Roseville 2023 Trial Q1',
  type: 'multiple_choice', // or 'short_answer'
  difficulty: 'medium',    // 'easy' | 'medium' | 'hard'
  q: 'Question text with LaTeX using $...$ for inline and $$...$$ for display math',
  a: 'Correct answer (LaTeX ok)',
  opts: [                  // ONLY for multiple_choice — 4 options, correct answer included
    'Option A',
    'Option B',
    'Option C',
    'Option D'
  ],
  h: 'One-sentence hint (LaTeX ok)',
  s: 'Full solution text (LaTeX ok)',
  solutionSteps: [         // 5–8 steps, every step has BOTH fields
    { explanation: 'What to do and why (LaTeX ok)', workingOut: 'LaTeX math only, no $ wrapping needed' },
    { explanation: '...', workingOut: '...' },
    // ...
  ]
}
```

### Rules

**IDs:**
- Multiple choice: `[school][year]-mc1`, `[school][year]-mc2`, etc.
- Free response: `[school][year]-q11a`, `[school][year]-q11bi`, etc.
- School prefix: abb=Abbotsleigh, ros=Roseville, nor=Normanhurst, nsg=North Sydney Girls, baulko=Baulkham Hills, etc.

**LaTeX:**
- Always use `$...$` for inline math in `q`, `a`, `h`, `s`, `explanation` fields
- In `workingOut` field: write raw LaTeX only (no `$` delimiters) — the app wraps it automatically
- Use `\\` for backslash in JS strings (e.g. `\\frac`, `\\sqrt`, `\\pi`)
- Fractions: `\\dfrac{a}{b}` for display size, `\\frac{a}{b}` for inline
- Multiplication dot: `\\cdot`
- Approximately: `\\approx`
- Greek letters: `\\alpha`, `\\beta`, `\\theta`, `\\pi`, etc.

**solutionSteps — write 5–8 steps, detailed and professional:**
- Every step must have a clear `explanation` (what you are doing and **why**) and a precise `workingOut` (the exact mathematical expression for that step only — no skipping).
- Step 1: Identify the problem type and state the exact formula, rule, or theorem to be used (e.g. "Apply the cosine rule: $c^2 = a^2 + b^2 - 2ab\cos C$").
- Step 2: Set up the equation or expression by substituting known values — show every substitution explicitly.
- Steps 3–6: Execute **one mathematical operation per step** — factorise, differentiate, simplify, substitute, expand, etc. Do not combine multiple operations into one step.
- Second-to-last step: Verify the answer — check the domain, apply the second derivative test, substitute back into the original equation, or confirm units/sign.
- Last step: State the final answer clearly and completely, including units where applicable.
- Write `explanation` in plain English as if explaining to a student who has never seen this type of problem. Avoid vague phrases like "simplify" — say exactly what is being simplified and how.
- **Each `explanation` must be a full 1–3 sentence description** that covers: (1) what operation is being performed, (2) why it is being done at this point in the solution, and (3) what mathematical principle or rule justifies it. For example, instead of `"Differentiate."`, write `"Differentiate $y$ with respect to $x$ using the chain rule, because the function is a composition of an outer power and an inner trigonometric function. Bring down the power, reduce the exponent by 1, then multiply by the derivative of the inner function."`.
- Never leave an `explanation` as a single word or a fragment. Every step must be self-contained and understandable without reading the other steps.

**type field:**
- `multiple_choice` — Section I questions with 4 options
- `short_answer` — Section II questions (free response, show working)

**difficulty:**
- `easy` — straightforward recall or single-step
- `medium` — 2–3 steps, standard exam question
- `hard` — multi-step, proof, or conceptual

**opts array:**
- Include all 4 options for multiple_choice
- The correct answer (`a`) must appear verbatim as one of the opts
- For short_answer: set `opts: []`

**subQuestions and graphData (Geometry diagrams):**
- If a question has sub-questions (`subQuestions` array) and all sub-questions refer to the same diagram (e.g. "in the diagram shown"), define `graphData` ONCE on the parent question level. Set `graphData: null` or omit it on the individual sub-question objects.
- If the sub-questions require different diagrams, define `graphData` directly inside each sub-question object, and set the parent's `graphData` to `null`.

**Geometry Diagrams (graphData.geometry):**
- **Mathematical Accuracy:** All coordinates, intersections, perpendicularity, and side lengths MUST be mathematically consistent and validated. Do not guess coordinates. For example, if a point $F$ is defined as the perpendicular intersection of two lines, calculate its coordinates exactly.
- **No Degenerate Triangles:** Ensure that no three vertices of a triangle in the proof are collinear (which would render it as a straight line segment instead of a triangle).
- **Proportions and Orientation:** Verify that the coordinates reflect the visual hierarchy (e.g., if a vertex is at the bottom in the textbook, it must have the lowest y-coordinate, and the figure should be balanced).
- **Tick Marks and Angle Labels:** Use `ticks: 1` or `ticks: 2` on segments to indicate equal lengths (e.g., `{ from: "B", to: "D", ticks: 1 }`). Use `labelPos` for angles (especially right angles) to ensure the marker is drawn inside the correct quadrant.

**Function Graphs (graphData.jsxGraph):**
- **Sizing:** Default width/height should be set to `width: 400, height: 300` for clear layout.
- **Axes & Arrows:** Axes should be created with double-ended arrows pointing in both positive and negative directions (e.g. `firstArrow: true, lastArrow: true` will be automatically formatted).
- **Labels:** Always label the x-axis, y-axis (using text objects near the tips), and the origin with `'O'`. Point labels with LaTeX (e.g. `$(0, \sqrt{5})$`) are dynamically rendered as premium speech bubbles (tooltips) pointing directly to the dot. The app automatically aligns them along the 4 cardinal directions (top, bottom, left, right) depending on boundary proximity and axes to prevent covering the point markers and overlapping with tick marks. Avoid hardcoding custom offsets (like `[10, 10]`) so the automatic speech bubble alignment works perfectly.
- **Curve Bounds:** Draw function curves from the very left edge of the bounding box to the very right edge (avoid leaving gaps or letting them float in mid-air).
- **Points:** Plot and label all crucial features mentioned in the question (such as stationary points $P, Q$, vertices, intercepts) on the graph.
- **Aspect Ratio:** If the graph is a function sketch (e.g. cubic, exponential) with unbalanced x and y domains, set `keepaspectratio: false` in `boardOptions` so it is not vertically squished.
- **Styling / Color:** Do not specify color on `functiongraph`, `curve`, or `point` elements unless a specific color coding is requested. They automatically default to Slate (`#64748b`) matching the axes. Point markers automatically display with a clean, smaller size of `2.2`.
- **Sketch Questions:** For questions that ask the student to draw or sketch a graph (e.g. "Sketch the graph of..."), set `type: "teacher_review"` in the seed question. This tells the application to hide the graph in the question body so the student can sketch it independently on the canvas, while queuing it in the teacher's grading list. Put the correct graph only in the worked solution.


**Terminology & Proof Logic:**
- **Australian NSW Curriculum Terminology:** NEVER use American terms or acronyms like **"CPCTC"** (Corresponding Parts of Congruent Triangles are Congruent). Instead, write out: *"corresponding angles/sides of congruent triangles are equal"*.
- **Logical Proof Flow:** Do not assume properties that are not explicitly marked as given in the diagram. For example, if $AB = CB$ is not given, prove it first (e.g., using SAS congruence on $\Delta ABG \equiv \Delta CBG$) rather than stating it is given.

### Topic ID map (CambridgeMATHS Year 11/12 Advanced)

**Year 11 (y11a-)**
```
1A Expanding brackets          1B Factoring                   1C Algebraic fractions
1D Solving quadratic equations 1E Solving simultaneous equations
2A Real numbers and intervals  2B Surds and their arithmetic  2C Further simplification of surds
2D Rationalising the denominator 2E Binomial expansion of surds 2F Further rationalising 2G Surd equations
3A Functions and function notation 3B Functions, relations, and graphs 3C Review of linear graphs
3D Quadratic functions         3E Completing the square        3F The quadratic formulae and the graph
3G Powers, cubics, and circles 3H Two graphs that have asymptotes 3I Direct and inverse variation
4A Inequations and inequalities 4B Solving quadratic inequations 4C Intercepts and sign
4D Odd and even symmetry       4E The absolute value function  4F Regions in the number plane
5A Translations of known graphs 5B Reflection in axes          5C Even and odd symmetry
5D Horizontal and vertical dilations 5E Absolute value function 5F Composite functions
5G Combining transformations   5H Continuity and piecewise-defined functions
6A Trig with right-angled triangles 6B Problems with right-angled triangles
6C Trig functions of a general angle 6D Quadrant, sign, and related acute angle
6E Given one trig function, find another 6F Trigonometric identities 6G Trigonometric equations
6H The sine rule and the area formula 6I The cosine rule 6J Problems with general triangles
7A Lengths and midpoints        7B Gradients                   7C Equations of lines
7D Further equations of lines   7E Using pronumerals
8A Indices  8B Fractional indices  8C Logarithms  8D Laws for logarithms
8E Equations involving logs/indices  8F Exponential and logarithmic graphs  8G Applications
9A Tangents and the derivative  9B The derivative as a limit   9C Differentiating powers of x
9D dy/dx notation               9E Negative index powers       9F Fractional index powers
9G The chain rule  9H The product rule  9I The quotient rule
9J Rates of change  9K Average velocity and speed  9L Instantaneous velocity and speed
10A The exponential function base e  10B Transformations of exponential functions  10C Logarithmic function base e
11A Radian measure  11B Solving trig equations  11C Arcs and sectors  11D Trig graphs in radians
12A Sets and Venn diagrams  12B Probability and sample spaces  12C Sample space graphs and tree diagrams
12D Venn diagrams and the addition theorem  12E Multi-stage experiments  12F Probability tree diagrams  12G Conditional probability
13A Random variables and frequency tables  13B Cumulative frequency  13C Grouped data
```

**Year 12 (y12a-)**
```
1A Sequences and how to specify them  1B Arithmetic sequences  1C Geometric sequences
1D Solving problems involving APs and GPs  1E Adding up the terms of a sequence
1F Summing an arithmetic series  1G Summing a geometric series  1H The limiting sum of a geometric series
1I Recurring decimals and geometric series
2A The sign of a function  2B Vertical and horizontal asymptotes  2C A curve-sketching menu
2D Solving inequations  2E Using graphs to solve equations and inequations
2F Review of translations and reflections  2G Dilations  2H Combinations of transformations  2I Trigonometric graphs
3A Increasing, decreasing and stationary at a point  3B Stationary points and turning points
3C Second and higher derivatives  3D Concavity and points of inflection
3E Systematic curve sketching with the derivative  3F Global maximum and minimum
3G Applications of maximisation and minimisation  3H Primitive functions
4A Areas and the definite integral  4B The fundamental theorem of calculus
4C The definite integral and its properties  4D Challenge – proving the fundamental theorem
4E The indefinite integral  4F Finding areas by integration  4G Areas of compound regions  4H The trapezoidal rule
5A Review of exponential functions base e  5B Differentiation of e^x  5C Applications of differentiation
5D Integration of e^x  5E Applications of integration  5F Review of logarithmic functions
5G Differentiation of logarithmic functions  5H Applications of differentiation of log
5I Integration of the reciprocal function  5J Applications of integration of log  5K Calculus with other bases
6A The trigonometric functions  6B Differentiating the trig functions  6C Applications of differentiation of trig
6D Integrating the trig functions  6E Applications of integration of trig
7A Average velocity and speed  7B Velocity and acceleration as derivatives  7C Integrating with respect to time
7D Simple harmonic motion  7E Rates and integration  7F Harder rates problems
8A Applications of APs and GPs  8B Financial applications of geometric series
8C Simple and compound interest  8D Depreciation and loans  8E Paying off a loan
9A The language of statistics  9B Grouped data and histograms  9C Quartiles and interquartile range
9D Bivariate data  9E Line of best fit  9F Using technology with bivariate data
10A Probability distributions  10B Continuous distributions  10C Mean and variance of a distribution
10D The standard normal distribution  10E Normal distributions  10F Applications of the normal distribution
10G Investigations using the normal distribution
```

### Source labelling (REQUIRED)

Every question **must** have a `source` field that names the school and year:

```
source: 'Blacktown Boys 2020 Trial Q1'
```

This applies to both original questions and similar variant questions — the source label is the same for both.

---

### Similar variant questions (REQUIRED)

For **every** original question, you must also create a paired **similar variant** question in a **separate file**:

- File: `seed[SchoolName][Year]SimilarQuestions.js`
- Export: `[SCHOOLNAME]_[YEAR]_SIMILAR_QUESTIONS`
- Use the same `id` prefix but append `s-`: e.g. `bbhs2020s-mc1`, `bbhs2020s-11a`

**What to change in each variant:**
- Numbers and values (e.g. side lengths 8, 10, 7 → 9, 12, 6)
- Pronumerals and variable names (e.g. $A$ → $B$, $r$ → $k$)
- Person names in word problems (e.g. Jesse → Mia, Shaon → Kaito)
- Context/scenario (e.g. roses → sunflowers, cake shop → music store)
- Keep the **same topic, same structure, same difficulty**

The similar variants are combined with the originals in `Curriculum.jsx`:
```js
seed: [...SCHOOLNAME_YEAR_QUESTIONS, ...SCHOOLNAME_YEAR_SIMILAR_QUESTIONS]
```

Result: **2× the question count** (50 original + 50 similar = 100 total for a standard HSC paper).

---

### After generating the file

**Step 1: Register in Curriculum.jsx**

Open `/Users/andrewkim/Desktop/sapere1/src/components/Curriculum.jsx`.

At the top with the other imports (around line 83), add:
```js
import { [SCHOOLNAME]_[YEAR]_QUESTIONS } from '../constants/seed[SchoolName][Year]Questions.js';
import { [SCHOOLNAME]_[YEAR]_SIMILAR_QUESTIONS } from '../constants/seed[SchoolName][Year]SimilarQuestions.js';
```

Then find the array where exam papers are listed (search for `chapterId: 'exam:abbotsleigh-2020'`) and add a new entry in the same format:
```js
{
  chapterId: 'exam:[school]-[year]',
  badgeLabel: 'Y12 EXAM',
  examPaper: '[school]-[year]',
  chapterTitle: '[School] [Year] HSC Trial',
  topicId: 'y12a-exam',
  topicCode: 'EXAM',
  topicTitle: '[School] [Year] Trial Exam',
  year: 'Year 12',
  seed: [...[SCHOOLNAME]_[YEAR]_QUESTIONS, ...[SCHOOLNAME]_[YEAR]_SIMILAR_QUESTIONS],
  label: 'Y12 · [School] [Year] HSC Trial (Advanced)'
},
```

**Step 2: Register in allPastPaperQuestions.js (Practice Paper Generator)**

Open `/Users/andrewkim/Desktop/sapere1/src/constants/allPastPaperQuestions.js`.

Add the import near the top with the other imports:
```js
import { [SCHOOLNAME]_[YEAR]_QUESTIONS } from './seed[SchoolName][Year]Questions.js';
```

Then add the spread inside the `ALL_PAST_PAPER_QUESTIONS` array:
```js
export const ALL_PAST_PAPER_QUESTIONS = [
  // ... existing entries ...
  ...[SCHOOLNAME]_[YEAR]_QUESTIONS,
  // ─── Add new past paper arrays above this line ────────────────────────────
];
```

> This file powers the "Generate Practice Paper" button in HscJourney — students get randomised questions drawn from every registered past paper.

**Step 3: Build and deploy**
```
npm run build
git add -A
git commit -m "feat: add [School] [Year] past paper questions"
git push origin main
npx vercel --prod
```

---

## Past paper text (paste below this line):

