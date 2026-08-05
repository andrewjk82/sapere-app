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

## Overview

This skill handles the full lifecycle of math questions for the Sapere education
platform: reading existing seed data, converting question types, writing
pedagogically rich step-by-step solutions, generating JSXGraph visualisations,
and pushing updates to both the local seed file and Firestore.

---

## 1. Question Data Schema

See `references/question_schema.md` for the complete field reference.
See `references/svg_label_rules.md` for rules on preventing label overlaps in graphs.
See `references/svg_3d_geometry_rules.md` for CRITICAL rules on 3D projections, hidden lines, and dimension formatting.

### Quick Reference — Key Fields

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | e.g. `y11a-5i-q18a` |
| `type` | string | `multiple_choice` · `short_answer` · `teacher_review` · `graph_sketch` |
| `question` | string | LaTeX-enabled question text |
| `opts` | string[] | 4 options (MC only) |
| `a` | number | 0-indexed correct answer (MC only) |
| `answer` | string | Stringified index for MC, or text answer |
| `solutionSteps` | object[] | Array of `{ explanation, workingOut, graphData? }` |
| `graphData` | object\|null | Root-level graph (shown in the question stem) |
| `requiresManualGrading` | boolean | `true` for teacher_review / graph_sketch |

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

Each step is an object:
```json
{
  "explanation": "Explain what is happening in this step and why (English only)",
  "workingOut": "LaTeX mathematical working",
  "graphData": null  // or JSXGraph object (only in the final step)
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

| Context | Delimiter | Example |
|---------|-----------|---------|
| `question` field | `\\(` `\\)` | `\\(x^2 + 3x\\)` |
| `opts[]` array | `\\(` `\\)` | `\\(\\frac{2}{3}\\)` |
| `workingOut` field | Raw LaTeX (no delimiters needed for display math) | `x^2 + 3x = 0` |
| `explanation` field | `\\(` `\\)` for inline math | `함수 \\(f(x)\\)에 대해` |

### Escape Rules in JS String Literals
- In seed JS files: `\\\\(` → renders as `\(`
- In Firestore (written by Node scripts): `\\(` → renders as `\(`
- **절대 금지**: 중첩 LaTeX 구분자 `\\(\\(x\\)\\)` ❌

---

## 5. JSXGraph / SVG Graph Rules

See `references/jsxgraph_patterns.md` for code patterns.

### Where Graphs Go

| Scenario | Root `graphData` | Solution Step `graphData` |
|----------|------------------|--------------------------|
| 문제에 참고용 그래프 필요 (sketch 문제) | ✅ 원본 그래프 | ✅ 마지막 Step에 비교 그래프 |
| 문제에 그래프 불필요 (계산 문제) | `null` | ✅ 필요시 마지막 Step |
| 객관식 변환 후 | `null` (제거) | ✅ 필요시 |

### JSXGraph Script String — Escape 규칙 (매우 중요!)

> **Firestore에 저장할 때 `\\n` (literal backslash-n) 이 아닌 `\n` (실제 줄바꿈)이 저장되어야 함.**

- Seed JS 파일: 백틱 (`` ` ``) 템플릿 리터럴 사용 → 자연 줄바꿈 OK
- Node.js 업로드 스크립트: 문자열에 `\n` 이 실제 줄바꿈으로 전달되는지 반드시 확인
- `JSON.stringify()` 후 Firestore 저장 시 이중 이스케이프 발생하지 않는지 확인

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

## 6. Firestore Update Workflow

See `references/firestore_update.md` for the template script.

### Standard Process
1. Read seed file → `eval()` the array
2. Modify the question objects in memory
3. Write back to seed file with `JSON.stringify()` + regex to unquote keys
4. Connect to Firestore using service account
5. Update each document:
   - Top-level questions: `db.collection('questions').doc(id).update({...})`
   - Sub-questions: Read parent → modify `subQuestions` array → write parent back

### Service Account Path
```
/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json
```

### Seed File Pattern
```
/Users/andrewkim/Desktop/sapere1/src/constants/seedYear11Ch{X}Questions.js
```

### After Update
- **절대** `sync_meta/questions`를 직접 수정하지 마세요
- 대신 `tools/scripts/_lib/touchChapterIndex.js`의 `touchChapterIndex(db, chapterId)` 호출

---

## 7. Complete Workflow Checklist

When the user says "문제들 객관식으로 바꿔":

- [ ] 1. 해당 문제 ID의 현재 상태를 seed 파일에서 읽기
- [ ] 2. 문제 유형 판단 (MC 변환 가능 vs teacher_review 유지)
- [ ] 3. MC 변환 시:
  - [ ] 3a. 학생 실수 기반 오답 4개 설계 (마이너스만 붙이기 금지)
  - [ ] 3b. 정답 위치 골고루 분배 (A/B/C/D)
  - [ ] 3c. `type: 'multiple_choice'`, `opts`, `a`, `answer` 설정
  - [ ] 3d. `requiresManualGrading: false`
- [ ] 4. Step-by-step 해설 3~5단계 작성 (교육적 설명 + 흔한 실수 경고)
- [ ] 5. 그래프 문제의 경우 solution의 마지막 Step에 비교 그래프 삽입
- [ ] 6. Node.js 스크립트 작성 → seed 파일 + Firestore 동시 업데이트
- [ ] 7. 스크립트 실행 및 성공 확인
