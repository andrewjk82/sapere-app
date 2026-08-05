---
name: sapere-question-audit
description: >
  Audit, diagnose, and repair existing math questions in the Sapere platform.
  Use when: graphs are broken or not rendering, labels overlap on graphs,
  answers are incorrect, step-by-step solutions are generic/bulk-applied
  and need per-question customisation, solution quality needs improvement,
  or legacy-format import files need converting to the modern seed format.
  Triggers on: "그래프가 안보여", "그림이 깨졌", "답이 틀려", "솔루션이 맞지 않",
  "step by step 수정", "문제 수정", "레이블 겹쳐", "audit", "fix questions",
  "broken graph", "wrong answer", "generic solution", "quality check",
  "일괄적으로 적용", "하나씩 수정", "커리큘럼에 맞게", "legacy format",
  "포맷 변환", "import 파일", "레거시 변환".
---

# Sapere Question Audit & Repair Skill

## Overview

This skill provides a systematic workflow for diagnosing and repairing
quality issues in existing Sapere math questions. It handles four main
categories of defects found in production questions.

### Troubleshooting / Fixing Rules
- **[E] Orphaned Context**: If a root-level question uses phrases like "from the previous" or "from the same group" but is structurally standalone, it will confuse students. You must either:
  1. **Standalone Enrichment (Preferred for stability)**: Copy the missing context (the main stem) from the first question (e.g., `q8a`) and prepend it directly into the `question` field of all dependent questions (e.g., `q8b`, `q8c`).
  2. **Multipart Restructuring**: Combine them into a single `multipart` question where the shared context is the root `question`, and `q8a` to `q8i` are moved into `subQuestions`.
- **[F] Poor Distractors (매력 없는 오답 금지)**: 
  - **Lazy Negatives 금지**: 정답에 단순히 마이너스(-) 부호만 붙여서 오답(예: 정답 45, 오답 -45)을 대충 만들지 마세요. 학생이 흔히 할 법한 계산 실수(역수, 부호 잘못 분배, 다른 공식 착각 등)를 기반으로 오답을 구성해야 합니다.
  - **연속된 숫자 금지**: +1/-1 차이만 나는 의미 없는 오답(예: 59, 60, 61)은 금지합니다.
  - **비논리적 값 금지**: 도형의 길이나 경사각(Angle of inclination, 항상 \(0^\circ \le \alpha < 180^\circ\)) 문제에서 음수 값을 오답으로 넣지 마세요. 대신 30°, 45°, 60°, 90°, 120° 같은 기하학적으로 의미 있는 각도나, 보각(180 - x), 여각(90 - x) 등을 활용하세요.
- **[G] No Mixed Formats (포맷 통일)**: Never mix fractions and decimals in multiple-choice options. If one option is a fraction, ALL options must be fractions. If one is a decimal, ALL must be decimals.
- **[H] Firestore Update Enforcement (필수사항)**: When you modify a local seed file to fix questions, you MUST ALWAYS write and run a Node.js script to push those changes to Firestore (`db.collection('questions').doc(id).update({...})` or `set({...}, { merge: true })`). Do not just stop at editing the local file, as live production relies on Firestore data. **CRITICAL:** When replacing legacy fields (e.g. replacing `opts` with `options`), you MUST explicitly delete the old field in Firestore using `FieldValue.delete()` (e.g. `updateData.opts = FieldValue.delete()`). Otherwise, `{ merge: true }` will leave the old fields intact, causing bugs in the app UI.
- **[I] Graphical Representations (SVG vs jsxGraph)**: If a question relies on `graphData.jsxGraph` for diagrams, you must replace the `jsxGraph` payload entirely with a highly polished inline SVG (`graphData: { svg: "<svg>...</svg>" }`).
  - **Visuals:** Use harmonious colors (e.g. pastel fills for faces, slightly darker strokes). Do not use generic browser defaults.
  - **3D Geometry & Visibility:** For 3D prisms or cylinders, strictly respect the viewing perspective. Draw visible edges as **Solid Lines** and occluded/hidden edges as **Dashed Lines** (e.g., `stroke-dasharray="5,5"`).

---

## 1. Defect Categories & Diagnosis

### Category A: Graph Rendering Failures (그래프가 안 보임)

**Symptoms:**
- 빈 회색 박스만 표시됨
- 그래프가 아예 나타나지 않음
- 콘솔에 `SyntaxError` 출력

**Root Causes & Fixes:**

| Cause | How to Detect | Fix |
|-------|---------------|-----|
| `\\n` 이중 이스케이프 | `script.includes('\\\\n')` → true | `script.replace(/\\\\n/g, '\n')` |
| 문법 오류 (괄호 불일치) | `new Function('board','JXG', script)` throw | 스크립트 수동 검토 후 수정 |
| 지원되지 않는 JSXGraph 요소 | `slider`, `angle` 등 사용 | `functiongraph`, `point`, `text` 등으로 대체 |
| `graphData`가 null 또는 누락 | DB에서 확인 | seed 파일에서 올바른 graphData 재삽입 |
| 시드 데이터 중복 (duplicate entries) | 같은 ID가 2번 이상 | 중복 제거, 올바른 데이터만 유지 |

**Diagnosis Script:**
```javascript
// 그래프 렌더링 가능 여부를 로컬에서 테스트
const script = question.graphData?.jsxGraph?.script;
if (!script) {
  console.log('No script found');
} else if (script.includes('\\\\n')) {
  console.log('BROKEN: double-escaped newlines');
} else {
  try {
    const board = {
      create(type, parents, attrs = {}) {
        return { type, parents, attrs, _fn: typeof parents?.[0] === 'function' ? parents[0] : null };
      },
      suspendUpdate() {},
      unsuspendUpdate() {},
      options: { point: {} },
      objects: {}
    };
    new Function('board', 'JXG', script)(board, { Math });
    console.log('OK: script parses successfully');
  } catch (e) {
    console.log('BROKEN: ' + e.message);
  }
}
```

---

### Category B: Label Overlap & Layout Issues (레이블 겹침)

**Symptoms:**
- 그래프 위의 텍스트 라벨이 서로 겹쳐서 읽기 어려움
- 함수 이름이 곡선 위에 가려짐
- 축 라벨과 함수 라벨이 충돌

**Diagnosis Checklist:**
- [ ] `board.create('text', [x, y, label])` 의 좌표가 곡선과 겹치지 않는지 확인
- [ ] 여러 라벨의 `[x, y]` 좌표가 너무 가까이 있지 않는지 확인 (최소 1~2 단위 간격)
- [ ] `boundingbox` 가 모든 요소를 담기에 충분히 넓은지 확인

**Fix Strategy:**
1. 각 `text` 요소의 좌표를 곡선의 빈 공간으로 이동
2. 여러 라벨 간 최소 간격 확보 (x 또는 y 방향으로 1.5+ 단위)
3. 필요시 `boundingbox`를 넓혀서 여유 공간 확보
4. 라벨 위치 조정 후 반드시 시각적으로 검증

**Example Fix:**
```javascript
// ❌ 겹침: 두 라벨이 같은 위치
board.create('text', [2, 3, 'y = f(x)'], {color:'grey'});
board.create('text', [2, 3, 'y = f(x+2)'], {color:'red'});

// ✅ 수정: 라벨을 다른 위치로 분산
board.create('text', [3, 2, 'y = f(x)'], {color:'grey'});
board.create('text', [-3, 4, 'y = f(x+2)'], {color:'red'});
```

---

### Category C: Incorrect Answers (답안 오류)

**Symptoms:**
- 정답으로 표시된 보기가 실제로 틀린 답
- `a` (정답 인덱스)가 잘못된 보기를 가리킴
- 풀이와 최종 답이 일치하지 않음

**Diagnosis Workflow:**

1. **문제를 직접 풀어본다** — 에이전트가 문제를 처음부터 독립적으로 풀기
2. **에이전트의 답과 DB의 답을 비교** — 불일치 시 오류 확정
3. **어느 쪽이 맞는지 수학적으로 검증** — 이중 검산

**Fix Checklist:**
- [ ] `opts[a]` 가 정확한 수학적 답인지 검증
- [ ] `solution` 필드가 정답과 일치하는지 확인
- [ ] `solutionSteps` 의 마지막 단계 `workingOut`이 정답과 일치하는지 확인
- [ ] 다른 보기(오답)들이 실제로 틀린 답인지도 검증 (실수로 정답이 2개 있으면 안 됨)

---

### Category D: Generic/Bulk-Applied Solutions (일괄 적용된 해설)

**Symptoms:**
- 모든 문제의 `solutionSteps`가 동일한 템플릿 텍스트
- "Apply the appropriate standard form" 같은 범용 문구가 그대로 들어가 있음
- 해설이 해당 문제의 구체적인 수식이나 개념을 전혀 언급하지 않음
- Step 수가 부족하거나 (1~2 Step) 피상적

**How to Detect:**
```javascript
// 일괄 적용된 해설의 전형적 패턴
const GENERIC_PATTERNS = [
  "Apply the appropriate standard form",
  "Carry out the algebra carefully",
  "Final answer:",
  "What rule or formula applies?",
  "Identify the relevant differentiation/integration",
  "read the full stem carefully and list the known quantities",
  "Identify the geometric constraints given in the problem.",
  "Set up the necessary algebraic equations.",
  "Solve the equations systematically.",
  "State the final required values clearly."
];

const isGeneric = (step) =>
  GENERIC_PATTERNS.some(p => step.explanation?.includes(p));
```

---

## 2. Repair Workflow — Step-by-Step Solution Rewrite

### 원칙: 한 문제 한 문제 독립적으로 풀고 해설 작성

> **절대 금지:** 여러 문제에 같은 템플릿을 복사-붙여넣기 하지 않는다.
> 각 문제를 실제로 풀어보고, 그 풀이 과정을 해설로 변환한다.

### Step 구조 (최소 4단계)

#### Step 1 — 문제 파악 및 전략 수립
```json
{
  "explanation": "이 문제에서 구해야 하는 것이 무엇인지, 주어진 조건은 무엇인지 파악합니다.",
  "workingOut": "주어진 함수: f(x) = x^2 - 4x,  구해야 하는 것: f(g(x))의 정의역과 치역"
}
```
- 문제의 **구체적인** 함수/수식/조건을 명시
- 어떤 수학적 개념이 필요한지 미리 안내

#### Step 2 — 핵심 원리 적용
```json
{
  "explanation": "합성함수 \\(f(g(x))\\)를 구할 때, \\(g(x)\\)의 출력을 \\(f\\)의 입력으로 대입합니다.",
  "workingOut": "f(g(x)) = f(x^2 + 1) = (x^2+1)^2 - 4(x^2+1)"
}
```
- **왜** 이 원리를 적용하는지 설명
- 학생이 "왜 이렇게 하지?"라고 물을 때의 답이 되어야 함

#### Step 3 — 계산 수행
```json
{
  "explanation": "식을 전개하고 정리합니다. 부호에 주의하세요.",
  "workingOut": "= x^4 + 2x^2 + 1 - 4x^2 - 4 = x^4 - 2x^2 - 3"
}
```
- 실제 계산 과정을 **빼먹지 않고** 단계적으로
- 학생이 자주 실수하는 포인트에서 경고 삽입

#### Step 4 — 최종 답 & 검증
```json
{
  "explanation": "최종 답을 정리합니다. 흔한 실수: \\(x^2+1\\) 대신 \\(x^2-1\\)을 대입하면 완전히 다른 결과가 나옵니다.",
  "workingOut": "\\text{최종 답: } x^4 - 2x^2 - 3"
}
```
- 정답을 명확하게 제시
- 다른 보기가 왜 틀린지 (가능하면) 간단히 언급
- 그래프 문제의 경우 여기에 `graphData` 포함

### 추가 Step 가이드라인

| 문제 난이도 | 권장 Step 수 |
|------------|-------------|
| Easy | 3~4 Steps |
| Medium | 4~5 Steps |
| Hard | 5~6 Steps |

| 문제 유형 | 추가 고려사항 |
|----------|-------------|
| 합성함수 | "안쪽 함수 먼저" 원칙을 Step 2에서 강조 |
| 정의역/치역 | 부등식의 방향, 등호 포함 여부를 별도 Step으로 |
| 그래프 변환 | 변환 방향 (좌→우 vs 우→좌) 혼동 경고 |
| 원(Circle) | 중심과 반지름 추출을 별도 Step으로 |
| 증명/Show that | 논리적 흐름을 Step별로, 비약 없이 |

---

## 3. Batch Audit Workflow

여러 문제를 한번에 감사할 때의 체계적 절차:

### Phase 1: 스캔 (자동)
```javascript
// 모든 문제를 순회하며 결함 탐지
for (const q of questions) {
  const issues = [];

  // A: 그래프 렌더링
  if (q.graphData?.jsxGraph?.script?.includes('\\\\n'))
    issues.push('GRAPH: double-escaped newlines');

  // B: 라벨 겹침 (text 요소 좌표 비교)
  // ... (좌표 파싱 후 거리 계산)

  // C: 답안 검증
  if (q.type === 'multiple_choice' && q.a !== undefined) {
    // 에이전트가 문제를 직접 풀어서 검증
  }

  // D: 일괄 적용 해설 탐지
  if (q.solutionSteps?.some(s =>
    s.explanation?.includes('Apply the appropriate standard form')))
    issues.push('SOLUTION: generic template detected');

  if (issues.length) console.log(q.id, issues);
}
```

### Phase 2: 개별 수리 (수동 + 에이전트)

감사에서 발견된 각 문제에 대해:

1. **문제를 직접 읽고 이해**
2. **에이전트가 독립적으로 풀어봄**
3. **기존 답/해설과 비교**
4. **불일치 시 올바른 해설로 교체**
5. **그래프 있는 경우 렌더링 테스트**

### Phase 3: 검증

- [ ] 수정된 모든 문제의 `solutionSteps`가 해당 문제에 특화된 내용인지 확인
- [ ] 각 Step이 이전 Step의 논리적 연장선인지 확인
- [ ] 마지막 Step의 `workingOut`이 정답(`opts[a]` 또는 `answer`)과 일치하는지 확인
- [ ] 그래프 문제: 스크립트가 정상 파싱되는지 mock board로 테스트
- [ ] Firestore 업데이트 후 실제 화면에서 렌더링 확인

---

## 4. Curriculum Alignment (커리큘럼 정합성)

### 해설이 커리큘럼에 맞는지 확인하는 체크리스트

- [ ] 해당 학년에서 배운 개념만 사용하는가? (예: Y11에서 미적분 용어 사용 금지)
- [ ] 풀이 방법이 교과서에서 가르치는 표준 방법인가?
- [ ] 수학적 표기법이 호주 커리큘럼 표준을 따르는가?
- [ ] 난이도가 해당 챕터의 수준에 적합한가?

### Year Level Vocabulary Guide

| Year | 사용 가능 개념 | 사용 금지 개념 |
|------|--------------|--------------|
| Y7-8 | 사칙연산, 분수, 비율, 기초 대수 | 이차방정식, 삼각함수 |
| Y9-10 | 이차함수, 인수분해, 피타고라스, 기초 삼각함수 | 미적분, 로그 |
| Y11 | 합성함수, 변환, 정의역/치역, 수열 | 복소수 (Extension 제외) |
| Y12 | 미적분, 확률분포, 벡터 | 대학 수준 증명 |

---

## 5. Quick Reference: Repair Script Template

문제 수리 시 사용하는 Node.js 스크립트 패턴은
`sapere-math-question` 스킬의 `references/firestore_update.md`를 참조하세요.

수리 스크립트의 핵심 차이점:
- 기존 데이터를 **읽고 검증한 후** 수정 (맹목적 덮어쓰기 금지)
- 수정 전후를 콘솔에 출력하여 변경 사항 확인
- 그래프 스크립트 수정 시 mock board 테스트를 스크립트 내에서 실행

---

## 5. Category E: Legacy Format Detection & Auto-Conversion (레거시 포맷 자동 변환)

### 증상 (Symptoms)
- 문제 데이터가 `tools/scripts/importYear7Ch*.js` 같은 파일에 저장되어 있음
- `options` 필드가 객체 배열(`[{ text, imageUrl }]`)이 아닌 **문자열 배열** (`["optA", "optB"]`)
- `solution` 필드가 구조화된 `solutionSteps` 배열이 아닌 **HTML 덩어리 문자열**
- 수식에 `$...$` 등 구형 LaTeX 구분자를 사용하고 있음
- `fixOptPlaceholders.js`, `cleanupLazyDistractors.js`, `enrichSolutionsTextbook.js` 등의 감사 스크립트를 적용할 수 없음

### 탐지 방법 (How to Detect)
```javascript
// 레거시 포맷 여부 확인
const content = fs.readFileSync(filePath, 'utf8');
const isLegacy =
  content.includes('export const allQuestions =') &&  // 구형 export명
  content.includes('"solution":') &&                   // HTML solution 존재
  !content.includes('"solutionSteps"');                // 현대 solutionSteps 없음
```

### 변환 절차 (Conversion Pipeline) — 절대 생략 금지!

레거시 파일이 발견되면, 수동 패치 없이 **무조건 아래 파이프라인을 순서대로 실행**합니다:

#### Step 1: 변환 스크립트 실행
```bash
node tools/scripts/convertLegacyToSeedFormat.js \
  --input tools/scripts/importYear7ChXX.js \
  --outdir src/constants \
  --prefix seedYear7ChXX \
  --export-prefix Y7_CHXX
```
이 스크립트는:
- 모든 `$...$` → `\\(...\\)` 변환 (Rule C)
- `options` 문자열 → `[{ text, imageUrl: "" }]` 객체 변환
- HTML `solution` → Textbook Profile 기반 `solutionSteps` 배열 변환
- 토픽 코드별 분리 (`seedYear7Ch7AQuestions.js`, `seedYear7Ch7BQuestions.js`, ...)

#### Step 2: 감사 스크립트 적용
```bash
node tools/scripts/fixOptPlaceholders.js src/constants/seedYear7ChXX*.js
node tools/scripts/cleanupLazyDistractors.js src/constants/seedYear7ChXX*.js
node tools/scripts/enrichSolutionsTextbook.js src/constants/seedYear7ChXX*.js
```

#### Step 3: Firestore 업로드 (백업 필수 포함)
업로드 스크립트를 작성(`tools/scripts/upload_y7_chXX.js`)하여 Admin SDK로 배포.
**⚠️ 삭제 전 반드시 기존 데이터를 백업** (Rule G):
```javascript
// 반드시 이 패턴을 upload 스크립트에 포함할 것
const existing = await db.collection('questions').where('chapterId', '==', chapterId).get();
const backup = existing.docs.map(d => ({ id: d.id, ...d.data() }));
fs.writeFileSync(`tools/audit-state/backup_${chapterId}_${Date.now()}.json`, JSON.stringify(backup, null, 2));
console.log(`Backed up ${backup.length} docs.`);
// 백업 확인 후에만 삭제 진행
```
```bash
node tools/scripts/upload_y7_chXX.js
```

#### Step 4: Question Index 재빌드 (절대 생략 금지)
업로드 직후 반드시 실행 (Rule H). 생략 시 앱의 문제 수 표시가 틀어집니다:
```bash
node tools/scripts/rebuildQuestionIndexes.js y7-XX
```

### 주의사항
- **레거시 파일 (`importYear7Ch*.js`)을 직접 수정하지 말 것**: 항상 현대 포맷으로 변환 후 `seedYear7Ch*Questions.js`를 수정한다.
- **HTML 해설을 직접 재사용하지 말 것**: 반드시 `solutionSteps` 배열로 변환하고, 해당 챕터의 Textbook Profile 원칙을 주입한다 (Rule F 참조).
- **구형 LaTeX `$...$` 절대 사용 금지**: 변환 후 `\\(...\\)` 형식만 허용 (Rule C 참조).
- **기존 데이터 삭제 전 백업 필수**: 백업 없이 delete 실행 금지 (Rule G 참조).
- **업로드 후 인덱스 재빌드 필수**: `rebuildQuestionIndexes.js` 실행 없이 작업 완료 불가 (Rule H 참조).

---

## 6. Category F: Multipart & Parent Question UI Rendering Issues (다지선다 부모 문항 UI 버그)

**Symptoms:**
- 객관식 문제인데 앱에서 주관식 입력창("Type answer...")이 나타남.
- a), b), c) 서브 문제들의 지문이 엉망이거나 부모 지문에 불필요한 a) b) c) 목록이 중복 표시됨.
- Step-by-step 해설이 각 문제 하단에 한 번, 카드 제일 하단에 또 한 번 중복 출력됨.
- 특정 텍스트(예: $10)가 화면 밖으로 뚫고 나감(CSS Overflow).

**Diagnosis & Root Causes:**
1. **Parent Document Priority**: UI는 독립된 하위 문서(`q10a`)보다 부모 문서(`q10`)의 `subQuestions` 배열을 우선하여 통째로 렌더링합니다. 개별 문서만 고치고 부모 문서 내부 데이터를 안 고치면 화면에 반영되지 않습니다.
2. **isManual Toggle**: `isManual: true`이면 `type: 'multiple_choice'`라도 강제로 주관식 텍스트 입력창이 열립니다.
3. **Legacy opts vs Modern options**: 앱은 구형 `opts` 문자열 배열 대신 `options: [{ text, imageUrl }]` 객체 배열을 요구합니다.
4. **LaTeX Regex Bug**: 과거 스크립트가 돈(Money) 기호 `$10 ... $10`을 맹목적으로 수학 수식 `\(10 ... \)10`으로 변환해버려, 브라우저가 이를 하나의 쪼갤 수 없는 수식 블록으로 간주해 화면 밖으로 밀어냅니다.

**Fix Workflow (필수 준수):**
1. **부모 문서 내부 `subQuestions` 업데이트**:
   - 하위 문제의 수정된 데이터를 부모 문서의 `subQuestions` 배열 안의 객체들에 덮어씌워야 합니다.
   - 반드시 `isManual: false`로 설정하고, `options` 배열을 채워 넣으세요.
2. **부모 문항 지문(Stem) 청소**:
   - 부모 `question` 필드에 나열된 불필요한 `a) ... b) ...` 텍스트를 정규식이나 `split`으로 깔끔하게 잘라내어 메인 상황만 남깁니다.
3. **부모 문항 `solutionSteps` 비우기**:
   - 하위 문제마다 해설을 넣었다면, 부모 문서의 `solutionSteps`는 `[]`로 비워 중복 출력을 방지합니다.
4. **수식 렌더링 오작동(Overflow) 복구**:
   - `\(10 ... \)10` 처럼 잘못 묶인 달러 기호를 찾아 다시 `$10` 일반 텍스트로 되돌려 줄바꿈이 정상 작동하게 합니다.

---

## 7. Category G: Missing LaTeX Backslashes on Math Functions (수식 이탤릭체 렌더링 오류)

**Symptoms:**
- 객관식 보기나 문제 본문에 있는 삼각함수(sin, cos, tan 등)가 정직한 함수 폰트가 아니라 변수들의 곱처럼 이탤릭체(\(sin\) 대신 \(s \times i \times n\) 느낌)로 누워서 렌더링 됨.
- 특정 보기만 글씨체가 다르게 보임.

**Diagnosis & Root Causes:**
- LaTeX에서 함수를 인식하려면 반드시 백슬래시(`\`)가 앞에 있어야 합니다. (`\sin`, `\cos`).
- 과거 데이터 이관 중 혹은 정규식 변환 중, `\(sin x\)` 와 같이 백슬래시가 누락된 채로 데이터베이스에 들어간 경우, LaTeX 엔진은 이를 `s * i * n * x` 로 취급하여 모두 이탤릭체로 기울입니다.

**Fix Workflow:**
1. 시드(Seed) 파일 전체를 훑어 `\( ... \)` 내부의 `sin, cos, tan, csc, sec, cot` 앞의 백슬래시 누락을 찾습니다.
2. JavaScript 정규식을 사용하여 안전하게 백슬래시를 추가하는 스크립트를 작성합니다.
   - 예시: `str.replace(/(?<![a-zA-Z\\])(sin|cos|tan|csc|sec|cot)(?![a-zA-Z])/g, '\\\\$1');`
   - 주의: `cosine` 같은 단어 내부의 `cos`를 치환하지 않도록 부정형 전방/후방 탐색(Negative Lookaround)을 반드시 사용해야 합니다.
3. 수정된 시드 데이터를 다시 Firestore에 병합(merge) 또는 덮어쓰기 합니다.

---

## 8. Category H: LaTeX Formatting (Math Mode Wrappers & Fractions)

**Symptoms:**
- 수학 수식 문자열(예: `LHS = ...`)이 화면에 일반 텍스트로 렌더링되거나 이탤릭체(`cos`)가 섞여 나옴.
- "MODEL ANSWER" UI 텍스트 렌더링이 깨짐.
- 분수나 곱셈이 `1 / \cos x` 이나 `\tan x * \sin x` 같은 원시적인 텍스트 형태로 렌더링됨.

**Diagnosis & Root Causes:**
- **Missing Wrappers**: Sapere 앱은 문자열이 수학 공식임을 인식하기 위해 반드시 문자열 전체 또는 수식 부분 앞뒤에 LaTeX Math Mode 구분자인 `\(` 와 `\)` 를 필요로 합니다. 이게 없으면 `\sin` 을 써도 MathJax가 구동되지 않습니다.
  - 특히 `solutionSteps`의 `workingOut` 필드나 서술형 문항의 `answer` / `solution` 필드에서 자주 누락됩니다.
- **Poor Fractions & Asterisks**: 과거 데이터가 빗금(`/`)을 분수로, 별표(`*`)를 곱셈으로 썼습니다. LaTeX에서는 `\frac{a}{b}` 와 띄어쓰기(또는 `\cdot`)를 사용해야 합니다.

**Fix Workflow:**
1. `solutionSteps`를 동적으로 생성하는 스크립트를 작성할 때, `workingOut` 속성에 들어가는 모든 수식 문자열의 양 끝을 `\(` 와 `\)` 로 감싸는 코드를 반드시 포함하세요.
2. 서술형 문항(`type: 'teacher_review'`)의 `answer` 와 `solution` 필드를 스캔하여, 수식이 포함되어 있다면 양 끝에 `\(` 와 `\)` 가 있는지 확인하고 없으면 씌웁니다.
3. `answer` 와 `solution` 필드를 스캔하여 `/` 또는 `*` 기호가 사용된 수식이 있다면, 이를 정규 LaTeX 포맷인 `\frac{numerator}{denominator}` 로 치환하는 스크립트를 작성하여 Firestore에 병합합니다.

---

## 9. Category I: Diagram-Dependent Text without GraphData

**Symptoms:**
- The question stem says "Refer to the given plan measurements on the diagram," but the database has `graphData: null` (the diagram is missing).
- Custom step-by-step solutions suddenly introduce numbers that the student cannot see in the problem.

**Fix Workflow:**
- Instead of relying on a missing diagram, explicitly inject the reverse-engineered measurements directly into the `question` text (e.g., "The plan measurements are as follows: Length = 12 cm, Width = 6 cm...").

---

## 10. Category J: Leaked Answers in Formatting Hints

**Symptoms:**
- A question converted to `multiple_choice` still contains legacy formatting hints like `(Enter the parts..., e.g. 1440, 720, 360)`.
- The example provided in the hint is the *actual correct answer*, completely spoiling the question.

**Fix Workflow:**
- Use a regex script (e.g., `str.replace(/\s*\([^)]*e\.g\.[^)]*\)/g, '')`) to safely strip out all `(e.g. <answer>)` hints and redundant formatting instructions from the `question` field across the entire chapter.

---

## 11. Category K: Missed Conversions in Multipart Sub-questions

**Symptoms:**
- Bulk conversion scripts fail to convert sub-questions (e.g., `q16a, q16b`) to `multiple_choice` because they are nested inside the parent document's `subQuestions` array, or they are incorrectly marked as `type: 'teacher_review'`.

**Fix Workflow:**
- When converting to multiple choice, scripts must explicitly check and overwrite `type: 'multiple_choice'`, `isManual: false`, and `requiresManualGrading: false` for *every* child object inside the parent document's `subQuestions` array.
- Crucially, you must explicitly push the updated `subQuestions` array back to the parent document in Firestore.

---

## 12. Category L: Subjective (Manual) Questions to Multiple Choice Conversion

**Symptoms:**
- Questions with simple, deterministic answers (like True/False, or straightforward numerical comparisons like "$0.50 cheaper") are unnecessarily configured as `teacher_review` (`isManual: true`), requiring manual grading.

**Fix Workflow:**
- Convert these deterministic questions to `multiple_choice` by calculating the exact answer, generating plausible distractors dynamically, injecting a proper 4-option array, and updating both the local seed file and Firestore.
- **CRITICAL:** When converting a question to `type: 'multiple_choice'`, you MUST explicitly set `isManual: false`. If `isManual: true` is left intact, the app will display a text input box instead of radio buttons, causing student answers to be incorrectly rejected during exact string comparison!

---

## 13. Category M: Duplicate Geometry Labels (도형 라벨 중복)

**Symptoms:**
- A single measurement or variable (e.g., `x`) appears twice on a rectangle or polygon diagram: once as a blue label inside the shape, and again as a black label with dimension arrows (`<--- x --->`) outside the shape.

**Diagnosis & Root Causes:**
- The rendering engine automatically generates external dimension lines (with arrows) based on the overall `width` and `height` properties of the `geometry` object.
- If the `graphData.geometry.sideLabels` array *also* explicitly defines a label (e.g., `text: "x m"`) for that same edge, both the auto-generated dimension line and the explicit side label will render simultaneously.

**Fix Workflow:**
- Inspect the `graphData.geometry.sideLabels` array in the database.
- Remove the redundant explicit label object from the `sideLabels` array, allowing the auto-generated external dimension line to serve as the sole indicator of that length.
