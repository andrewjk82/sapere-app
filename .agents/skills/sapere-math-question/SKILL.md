---
name: sapere-math-question
description: >
  Create, convert, and update math questions for the Sapere education platform.
  Use when asked to: create math problems, convert to multiple choice,
  add step-by-step solutions, draw JSXGraph graphs, update Firestore questions,
  generate LaTeX formatted math content, or modify seedYear11 question files.
  Triggers on: "문제", "객관식", "step by step", "그래프", "솔루션",
  "question", "multiple choice", "solution steps", "graph", "sketch",
  "LaTeX", "수학", "math question", "seed question", "Firestore update".
---

# Sapere Math Question — Creation & Conversion Skill

> ⚠️ **Read `CLAUDE.md`'s top section first.** Question content is git-based
> (`content/chapters/*.json`) as of 2026-09-16 — NOT seed files, NOT Firestore.
> Section 6 below and the field names in Section 1 reflect that; if anything
> further down still says "seed file" or "Firestore", CLAUDE.md wins.

## Overview

This skill handles the full lifecycle of math questions for the Sapere education
platform: reading existing content, converting question types, writing
pedagogically rich step-by-step solutions, generating SVG/JSXGraph visualisations,
and committing updates to `content/chapters/*.json` via git.

---

## 1. Question Data Schema

See `references/question_schema.md` for the complete field reference (canonical
`content/chapters/*.json` shape — `content/schema.js` is the source of truth if
the two ever disagree).
See `references/svg_label_rules.md` for rules on preventing label overlaps in graphs.
See `references/svg_3d_geometry_rules.md` for CRITICAL rules on 3D projections, hidden lines, and dimension formatting.

### Quick Reference — Key Fields (canonical, `content/chapters/*.json`)

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | e.g. `y11a-5i-q18a` |
| `type` | string | `mc` · `short` · `review` · `multipart` |
| `stem` | string | LaTeX-enabled question text |
| `options` | string[] | 4 options (`mc` only) — plain strings, or `{text, image?, figure?}` for a rich option |
| `answer` | number | 0-indexed correct option (`mc` only) — always a plain number, never a string |
| `steps` | object[] | Array of `{ explain, work, figure? }` |
| `figure` | object\|null | `{ svg: "<svg>...</svg>" }` — root-level diagram (shown in the question stem); hand-author inline, the build externalises it |
| `manual` | boolean | `true` for `review` questions needing a teacher to grade (was `requiresManualGrading`) |
| `parts` | object[] | A `multipart` question's sub-questions, same schema recursively (was `subQuestions`) |

These are the CANONICAL field names — write them exactly like this into
`content/chapters/*.json`. The legacy names (`opts`, `a`, `question`,
`solutionSteps`/`explanation`/`workingOut`, `graphData`, `subQuestions`,
`requiresManualGrading`, `type: 'multiple_choice'` etc.) only exist at the
Question Bank UI boundary (`content/legacy.js`) — never write them into a
chapter file directly.

---

## 2. Question Type Conversion Rules

### When to convert to Multiple Choice
- Questions with a **single definitive numerical/algebraic answer** → MC
- Domain/range questions → MC
- Transformation identification (dilation type, reflection axis) → MC

### When to keep as Teacher Review
- "Sketch the graph" / "Draw" / "Prove" / "Show that" → teacher_review
- Questions requiring free-form working → teacher_review

### Multiple Choice — Distractor Design (매우 중요!)

> **절대 규칙: 랜덤으로 답에 마이너스만 붙이면 안 됨.**

Distractors (오답) must reflect **real student mistakes**:

1. **부호 실수** — e.g. `x - 2 ≥ 0`을 `x ≥ -2`로 푸는 실수
2. **합성함수 순서 착각** — `f(g(x))` 대신 `g(f(x))` 결과
3. **수평/수직 혼동** — 수평 이동을 수직 이동으로 착각
4. **역수 간과** — `f(x/3)` → 확대비율이 3인데 1/3으로 답하는 실수
5. **등호/부등호 경계** — `y > 3` vs `y ≥ 3` (경계값 포함 여부)
6. **계수 실수** — 전개 시 계수를 빼먹거나 잘못 곱하는 경우
7. **포맷 통일 (No Mixed Formats)** — 4개의 보기 중 분수(`/`)와 소수점(`.`)을 절대 섞어 쓰지 마세요. 모두 분수이거나 모두 소수점이어야 합니다.
8. **논리적 오답 (No Illogical Negatives)** — 확률(Probability)이나 기하학(길이, 넓이, 각도) 등 음수가 나올 수 없는 주제에서는 절대 음수 보기를 생성하지 마세요.

### Answer Distribution (답 골고루)
- 4~5문제 묶음에서 정답 위치를 **A, B, C, D 골고루** 분배
- 같은 위치가 연속 3회 이상 나오지 않도록 조정

---

## 3. Step-by-Step Solution Writing (상세 해설)

### Structure: 3~5 Steps

Each step is an object (canonical field names — see `content/schema.js` / CLAUDE.md's field
mapping table; legacy `explanation`/`workingOut`/`graphData` are display-only names produced by
`content/legacy.js` at the UI boundary, never write them into a chapter file):
```json
{
  "explain": "Explain what is happening in this step and why (English only)",
  "work": "LaTeX mathematical working",
  "figure": null  // or { "svg": "<svg>...</svg>" } (only in the final step)
}
```

### Chapter Profile Workflow
When creating or modifying step-by-step solutions for a specific chapter, you MUST first check for a corresponding chapter profile in `profiles/` (e.g., `profiles/Y9_Ch16_Profile.md`). 
If a profile exists:
1. Base the explanation structure entirely on the core concepts defined in the profile.
2. Integrate the **Common Student Pitfalls** directly into the `explanation` or `workingOut` as warnings (e.g., "Pitfall: ...").
3. Ensure the mathematical steps align with the "Standard Solution Methodology" outlined in the profile.

If a profile does not exist for the target chapter, **DO NOT proceed with modifying questions**. You MUST first ask the user to provide the textbook or curriculum material for that chapter, create the profile in `profiles/`, and then proceed.

### Pedagogical Guidelines

1. **Step 1 — 문제 파악**: 주어진 정보 정리, 어떤 개념이 필요한지 명시
2. **Step 2 — 핵심 공식/원리**: 적용할 수학적 원리를 명시하고, 왜 이것이 적용되는지 설명
3. **Step 3 — 풀이 과정**: 실제 계산을 단계적으로 보여줌
4. **Step 4 (선택)** — 흔한 실수 경고: "여기서 학생들이 자주 하는 실수는..."
5. **최종 Step — 정답 제시**: 최종 답을 명확하게 기술. 그래프 문제의 경우 여기에 `graphData` 포함

### Explanation vs WorkingOut
- `explanation`: 자연어로 된 교사의 설명 (왜 이 단계를 하는지)
- `workingOut`: LaTeX 수식 중심의 풀이 (실제 계산 과정)

---

## 4. LaTeX Conventions

See `references/latex_conventions.md` for full details.

### Critical Rules

| Context (canonical field, `content/chapters/*.json`) | Delimiter | Example |
|---------|-----------|---------|
| `stem` | `\\(` `\\)` | `\\(x^2 + 3x\\)` |
| `options[]` array | `\\(` `\\)` | `\\(\\frac{2}{3}\\)` |
| `steps[].work` | `\\(` `\\)` — **every math line, no exceptions** | `\\(x^2 + 3x = 0\\)` |
| `steps[].explain` | `\\(` `\\)` for inline math | `함수 \\(f(x)\\)에 대해` |

**2026-08-26 incident — this table used to say `workingOut` needs no delimiters
("raw LaTeX for display math"). That was wrong and caused a 55-question batch
(willoughby2019-* exam) to render literal `\frac{5}{y}`/`\textbf{Answer: }`
text on the page instead of typeset math, because both generating subagents
followed this doc literally.** `workingOut` renders through the exact same
`\( ... \)` pipeline as every other field — there is no separate
"display-math, no-delimiter" mode. Every math expression inside `workingOut`
(fractions, roots, trig functions, `\text{}`, `\approx`, superscripts,
Greek letters — anything that isn't plain prose) must be wrapped in its own
`\( ... \)`. A `workingOut` with multiple `\n\n`-separated lines needs each
math line wrapped individually. Before writing any batch of questions,
mentally render one sample `workingOut` and confirm every LaTeX command sits
inside a `\(...\)` pair — an unclosed `\(` or a bare `\text{}`/`\textbf{}`
outside any delimiter is the bug to catch.

**2026-08-27 incident — same bug at full-batch scale, different cause:** an
agent generating 32 brand-new `gosford2020-q*` documents from scratch (not
editing existing ones) produced 266 fully-undelimited strings (zero `\(`
anywhere) across 30/32 docs — `question`, `options[].text`,
`solutionSteps[].workingOut`/`.explanation`, and the same three fields again
inside every `subQuestions[]` entry (a composite question's sub-parts are easy
to forget — they carry their own full copy of these fields). **Mentally
rendering one sample is not enough for a multi-document batch — actually run
a delimiter scan before reporting the task done**, on every doc you wrote:
```javascript
const LATEX_CMD = /\\(dfrac|frac|sqrt|sin|cos|tan|sec|csc|cosec|ln|log|left|right|angle|infty|pi|times|cdot|int|sum|geq|leq|neq|approx|text|tfrac|pm|Rightarrow|operatorname|degree|blacksquare|ldots|qquad|quad)\b/;
const needsWrap = (s) => typeof s === 'string' && s && LATEX_CMD.test(s) && !s.includes('\\(');
```
Check every field above, including inside every `subQuestions[]` entry. Zero
hits required before the task is actually finished — see
`references/latex_conventions.md` §3 for the full incident writeup.

### Escape Rules When Editing `content/chapters/*.json`
- These are plain JSON files — a LaTeX delimiter is written literally as `\\(x\\)` in the JSON
  string value (JSON's own `\\` escaping applies, same as any other string containing a backslash).
  There is no seed-file/Node-script double-escaping layer anymore.
- **절대 금지**: 중첩 LaTeX 구분자 `\\(\\(x\\)\\)` ❌ — this is `content/known-defects.json`'s
  single largest defect category (445 instances, grandfathered baseline only — never add new ones).
- After editing, `npm run content:validate` re-renders every string through the same KaTeX
  preprocessing the student app uses and fails the build on any NEW parse error.

---

## 5. JSXGraph / SVG Graph Rules

See `references/jsxgraph_patterns.md` for code patterns.

### Where Graphs Go

| Scenario | Root `figure` (canonical field) | Solution Step `figure` |
|----------|------------------|--------------------------|
| 문제에 참고용 그래프 필요 (sketch 문제) | ✅ 원본 그래프 | ✅ 마지막 Step에 비교 그래프 |
| 문제에 그래프 불필요 (계산 문제) | `null` | ✅ 필요시 마지막 Step |
| 객관식 변환 후 | `null` (제거) | ✅ 필요시 |

### JSXGraph Script String — Escape 규칙 (매우 중요!)

`content/chapters/*.json` is plain JSON, edited directly (no seed-file/Node-upload-script layer
anymore). A JSXGraph script string's newlines are just JSON's own `\n` escape inside the string
value — write it the way any JSON string containing newlines is written, and don't hand-roll any
extra escaping pass. `npm run content:validate` catches malformed JSON before it ever reaches git.

### Comparative Graph Pattern (비교 그래프)
```javascript
// Original: 회색 점선
board.create('functiongraph', [fn_original, xMin, xMax],
  {strokeColor:'#94a3b8', strokeWidth:2, dash:2});
board.create('text', [x, y, 'y = f(x)'], {color:'#94a3b8'});

// Transformed: 빨간색 실선
board.create('functiongraph', [fn_transformed, xMin, xMax],
  {strokeColor:'red', strokeWidth:2});
board.create('text', [x, y, 'y = f(x+2)'], {color:'red'});

// 이동 화살표: 초록색 점선
board.create('arrow', [[x1,y1], [x2,y2]],
  {strokeColor:'green', strokeWidth:1.5, dash:1});
```

### Multi-Function Graph Pattern (여러 함수 동시 표시)
- 색상 순서: `#6366f1` (인디고), `#f43f5e` (빨강), `#10b981` (초록)
- 각 함수에 `board.create('text', ...)` 라벨 추가

### Circle Rendering
```javascript
board.create('circle', [[cx, cy], radius],
  {strokeColor:'#6366f1', strokeWidth:2, fillColor:'none'});
```

---

## 6. Content Update Workflow (git — 2026-09 migration)

> As of 2026-09-16, question content is edited in git, not Firestore or seed files. See
> CLAUDE.md's top section and `content/README.md` for the full picture. See
> `references/firestore_update.md` for the current update-template pattern.

### Standard Process
1. Find the question: it lives under `content/chapters/<chapterId>.json`, grouped by topic. If you
   don't already know the chapter id, `grep -rl '"<questionId>"' content/chapters/` finds it.
2. Edit the JSON in place — modify the question object directly, matching `content/schema.js`'s
   canonical shape (`stem`, `options`, `answer:number`, `steps:[{explain,work,figure?}]`, `figure`,
   `parts`, not the old `question`/`opts`/`a`/`solutionSteps`/`graphData`/`subQuestions` names).
3. `npm run content:validate` — schema + KaTeX + MC-key checks; fails the build only on a *new*
   defect (existing baseline defects are grandfathered in `content/known-defects.json`).
4. `git commit` and `git push` — Vercel's build runs `content:validate` → `content:publish` →
   `vite build` automatically; the edit is live for students in ~2 minutes. No separate deploy step.

### Sub-questions (multipart)
A multipart question's sub-parts are `parts: [...]` (recursively the same schema) on the parent
question object in the same chapter file — there is no separate document or collection to touch.

### After Update
There is no `sync_meta/questions` or per-chapter index document to touch by hand — the publish
step (`tools/content/publish.mjs`, run automatically by `npm run build`) regenerates
`public/content/manifest.json` and the per-(chapter,topic) files from the chapter JSON on every
deploy, so pushing the commit is the whole "index update."

### What NOT to do
- Do not write to Firestore `questions`/`question_index`/`question_topic_index`/`sync_meta` for
  content changes — nothing reads them for question content anymore.
- Do not edit `src/constants/seed*.js` — retired for content, still physically present pending P5
  cleanup.
- Do not run `db.collection('questions').get()` or any `.where(...)` scan over it — banned
  regardless (see `feedback_never-scan-questions-collection`), and pointless now besides.
- `api/content.js` is the one path that still writes through a request rather than a direct file
  edit — that's the live Question Bank UI committing a *teacher's* edit as a human user; an AI
  editing `content/chapters/*.json` directly in the repo doesn't need to call it.

---

## 7. Complete Workflow Checklist

When the user says "문제들 객관식으로 바꿔":

- [ ] 1. 해당 문제 ID를 `content/chapters/<chapterId>.json`에서 찾기 (모르면 `grep -rl '"<id>"' content/chapters/`)
- [ ] 2. 문제 유형 판단 (MC 변환 가능 vs `type: 'review'` 유지)
- [ ] 3. MC 변환 시:
  - [ ] 3a. 학생 실수 기반 오답 4개 설계 (마이너스만 붙이기 금지)
  - [ ] 3b. 정답 위치 골고루 분배 (A/B/C/D)
  - [ ] 3c. `type: 'mc'`, `options`, `answer:number` (0-based 인덱스) 설정
  - [ ] 3d. `manual` 필요 없으면 생략 (수동 채점 필요할 때만 true)
- [ ] 4. `steps: [{explain, work, figure?}]` 3~5단계 작성 (교육적 설명 + 흔한 실수 경고)
- [ ] 5. 그래프 문제의 경우 마지막 step의 `figure`에 비교 그래프 삽입
- [ ] 6. `npm run content:validate` — 스키마 + KaTeX + MC 정답키 검사 (신규 결함만 fail)
- [ ] 7. `git commit && git push` — Vercel이 validate → publish → build 자동 실행, ~2분 내 반영

---

> **Sections 8–13 below are incident writeups from before the 2026-09 git migration** — the
> pedagogical rules and failure patterns they describe are still fully in force, but the field
> names in their prose (`question`, `opts`, `graphData`, `solutionSteps`, `subQuestions`,
> `type: 'teacher_review'`/`'multiple_choice'`) are the old Firestore/seed shape. When applying
> any rule below to `content/chapters/*.json` today, read them as `stem`, `options`, `figure`,
> `steps`, `parts`, `type: 'review'`/`'mc'` respectively (see CLAUDE.md's mapping table) — the
> incidents themselves are left as originally written since they're historical record, not
> instructions to write legacy field names into a chapter file.

## 8. Multi-part / Past-paper Questions — Each Doc Must Stand Alone

**2026-08-26 incident:** A past-paper exam (matchbox frequency-table experiment,
3 sub-parts a/b/c) was split into 3 *independent* Firestore documents by ID
(`willoughby2019-s7-q1a/b/c`), each shown to students as its own standalone
question — but q1b and q1c only said *"Using the matchbox experiment data (see
question Q1a)..."* instead of repeating the table. Students opening q1b/q1c
directly have no way to see Q1a's data — the question is literally unsolvable.

**Rule:** When a past-paper problem has shared context (a data table, a
diagram, a defined variable, "using the equation above") that spans multiple
sub-parts, and those sub-parts are being created as **separate top-level
Firestore documents** (not as a `subQuestions` array under one parent, which
is the other valid pattern — see `glenwood2020-q28`), **every one of those
documents must repeat the full shared context in its own `question` field.**
Never write "see part (a)" / "using the data above" / "from question Q1a" —
the reader may never see that other document. This applies automatically
whenever generating a batch of questions from one multi-part source problem,
whether by hand or via a delegated subagent — state it explicitly in the
subagent's task prompt.

**Alternative (equally valid):** package the whole multi-part problem as ONE
document using the `subQuestions` array pattern instead of splitting into N
independent docs — then the shared stem naturally stays with all parts. Pick
whichever pattern before generating, not after.

---

## 9. Statistics/Data Questions Need a Rendered Table or Plot, Not Prose

**2026-08-26 incident:** the same willoughby2019 batch described a frequency
table, a stem-and-leaf plot, and a dot plot entirely as **run-on prose**
inside the `question` string — e.g. `"the frequency distribution shows: 47
boxes (1 match), 48 boxes (9 matches)..."` and `"Data: 5|7 | 6|0 2 8 8 | 7|8
| 8|1 3 9 | 9|5"`. Source exams present these as an actual formatted table /
stem-leaf grid / dot plot — flattening that into a sentence makes students
parse a wall of numbers instead of reading the data the way it was designed
to be read, and a stem-and-leaf plot written as `5|7 | 6|0 2 8 8` is actively
ambiguous (looks like division/OR).

**Rule — applies automatically, no need to ask:** any question whose source
material is a frequency table, stem-and-leaf plot, dot plot, two-way table,
or similar tabular/graphical data display **must render that display as a
hand-authored SVG in `graphData.svg`**, matching the diagram conventions in
`references/svg_label_rules.md` (pixel-scale viewBox, no unrequested labels,
overlap-checked). The `question` field then only states what's being asked,
not the raw data in prose — the data lives in the diagram, exactly like a
geometry question's diagram carries the shape instead of describing it in
words. A markdown pipe-table (`| a | b |`) in the `question` string is also
not acceptable as a substitute — it doesn't reliably render as a real table
in the student-facing quiz UI and must become an SVG too.

Quick per-type approach:
- **Frequency table**: SVG two-row grid, header row = category values (monospace, centered), second row = counts, with a light divider line between header and data rows.
- **Stem-and-leaf plot**: SVG two-column table (Stem | Leaf), vertical divider line, monospace digits, key stated once at the top (`Key: 5 | 7 = 57`).
- **Dot plot**: SVG number line with tick marks at each value, stacked filled circles above each tick (one circle per data point at that value).
- **Two-way table**: SVG grid with row/column headers, same conventions as the frequency table.

This applies whether written by hand or delegated to a subagent generating a
batch from a past paper — state it explicitly in the subagent's task prompt
alongside the other standing rules (MC shuffle, LaTeX delimiters, standalone
context from §8).

**2026-08-26 follow-up — sizing/centering bug:** the first dot-plot SVG built
for this rule computed the rightmost point's x-coordinate exactly equal to
the viewBox width (`cx = originX + maxValue * scaleX` with no margin after
it), so the last point/tick/label sat flush on the edge and was clipped by
the container. It was also full-width and left-aligned instead of scaled
down and centered. Fixed pattern for any axis-based SVG (dot plot, number
line, bar chart):
- Compute the viewBox width as `origin + (maxDataValue) * scale + rightMargin` — never let the last coordinate equal the viewBox boundary; always leave ≥15px of margin past the last tick/point.
- Set `width="70%"` (not `100%`) on the `<svg>` tag for standalone data-plot diagrams (tables/plots read fine smaller than a full-bleed geometry diagram), and add `style="display:block;margin:0 auto;..."` so it centers in its container instead of stretching or left-hugging.
- Before finalizing, mentally check the highest-x and highest-stack-height elements both land safely inside `[0, viewBox width]` / `[0, viewBox height]` with margin, not exactly on the boundary.

---

## 10. Parabola Intercept Answer Format — Value vs Coordinate Pair

**2026-08-26 fix:** a "find the y-intercept" question was answered as the
coordinate pair `(0, -8)` — technically not wrong, but inconsistent with how
this same batch answered the axis of symmetry (`x = 1`, a bare value) and
made the option set read oddly next to the x-intercept question's `x = 4,
x = -2` format.

**Convention to follow:**
- **y-intercept** of a parabola: there is only one, and it's unambiguous on its own axis — answer as the bare y-value (`-8`), not `(0, -8)`.
- **x-intercepts**: there are (usually) two, so give both as `x = a, x = b` — a bare list of two numbers is ambiguous about which is which without the `x =` label.
- **Vertex**: always a genuine coordinate pair, `(h, k)` — never split into two separate value-questions.
- **Axis of symmetry**: always `x = h`, never just the bare number.

---

## 11. Sibling Sub-questions — Don't Assume a Fact Derived Elsewhere

**2026-08-26 incident:** in the same parabola set, the "find the vertex"
question's Step 1 said only *"The x-coordinate of the vertex is the axis of
symmetry: x = 1"* — stating the value with no derivation, silently relying
on the reader having already seen the separate "find the axis of symmetry"
question's working (`x = -b/2a = 1`). A student who opens the vertex
question on its own has no idea where `1` came from.

This is the solutionSteps-level version of the §8 rule (which covered the
`question` field for shared context like a data table). It applies just as
much here: **when a multi-part problem is split into separate documents and
one part's answer depends on a value computed in a sibling part (axis of
symmetry → vertex, part (a)'s bearing → part (c)'s cosine rule, etc.), the
dependent part's own solutionSteps must re-derive that value from scratch**
— show the actual formula and substitution, not just assert the number and
move on. Never write a step whose only content is restating a fact as if
already known. Before finalizing a batch, check every sub-question you know
depends on another part's result actually shows that derivation inline.

**Graph-sketching questions are the sharpest version of this** — a "sketch
the parabola" (or sketch-any-function) question needs the SAME treatment as
any other sibling sub-question: every key feature it plots (y-intercept,
x-intercepts, vertex/axis of symmetry, etc.) must be derived by calculation
in its own solutionSteps, not asserted via a "from the previous questions..."
list dump. Structure it as a progressive build, one feature derived +
plotted per step, each step's own diagram showing the graph so far (empty
axes → +1 point → +more points → final smooth curve) — mirroring the
project's general per-step diagram convention (each step's SVG shows only
what that step just established, building toward the final complete graph).
Never make the last step the only one with a diagram; every step that adds a
new derived feature should show it plotted immediately.

---

## 12. "Sketch/Draw/Graph It Yourself" Questions Must Not Show the Answer Graph in the Question

**2026-08-26 incident:** two `teacher_review` questions asking the student to
draw something themselves (*"On a coordinate plane, graph the line
2x-3y=6"*, *"Sketch the graph of the parabola y=x²-2x-8"*) had the finished,
correct graph sitting in the top-level `graphData.svg` — i.e. attached to the
`question` field, visible to the student on the question card itself, before
they've attempted anything. That hands them the answer.

**Rule:** for any question whose task is "sketch/draw/graph ___ yourself"
(`type: 'teacher_review'`, no diagram given in the source problem), the
finished diagram belongs **only inside `solutionSteps`** (built up
progressively per §11's graph-sketching guidance), never in the top-level
`graphData` field. Top-level `graphData` is for diagrams that are *given* as
part of the problem statement (a shape with labeled dimensions the student
must use) — it is never appropriate for a diagram that IS the answer being
asked for. Before setting `graphData` on any question, check: is this
picture something the student is given, or is drawing this picture the task?
If the latter, `graphData: null` on the question, full diagram only in the
solution.

---

## 13. Composite Questions (`subQuestions[]`) Must Not Duplicate the Solution at the Top Level

**2026-08-27 incident:** 15 of the 32 questions in a single batch
(gosford2020-q13/17/18/20/22–32) had a full step-by-step solution written
**twice** — once in the parent document's top-level `solutionSteps` (covering
all sub-parts combined), and again inside each `subQuestions[].solutionSteps`
(covering just that sub-part). The student-facing UI renders both, so the
same working appeared to repeat itself immediately after finishing the
sub-parts — confusing, and double the content to review for no benefit.

**Rule:** when a question has a real `subQuestions[]` array and every entry
in it already carries its own complete `solutionSteps`, the **parent
document's top-level `solutionSteps` must be empty (`[]`)** — the sub-parts'
own steps are the only solution content, full stop. Only give a question
top-level `solutionSteps` when it has NO `subQuestions[]` (a genuinely
single-part question). Before finishing any batch that creates composite
questions, check every doc for this exact condition (non-empty top-level
`solutionSteps` AND every `subQuestions[]` entry also has its own non-empty
`solutionSteps`) and clear the top-level one wherever both are true.
