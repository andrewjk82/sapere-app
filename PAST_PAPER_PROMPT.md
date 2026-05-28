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

**solutionSteps — write 5–8 steps:**
- Step 1: Identify what type of problem this is / what formula or rule to use
- Step 2: Set up the equation / expression
- Steps 3–6: Execute each mathematical operation one at a time (factorise, differentiate, substitute, etc.)
- Second-to-last step: Verify the answer (check domain, second derivative test, substitute back, etc.)
- Last step: State the final answer clearly

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

### After generating the file

**Step 1: Register in Curriculum.jsx**

Open `/Users/andrewkim/Desktop/sapere1/src/components/Curriculum.jsx`.

At the top with the other imports (around line 83), add:
```js
import { [SCHOOLNAME]_[YEAR]_QUESTIONS } from '../constants/seed[SchoolName][Year]Questions.js';
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
  seed: [SCHOOLNAME]_[YEAR]_QUESTIONS,
  label: 'Y12 · [School] [Year] HSC Trial (Advanced)'
},
```

**Step 2: Build and deploy**
```
npm run build
git add -A
git commit -m "feat: add [School] [Year] past paper questions"
git push origin main
npx vercel --prod
```

---

## Past paper text (paste below this line):

