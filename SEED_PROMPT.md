# NSW 수학 커리큘럼 → 디지털 학습 앱 시드 데이터 변환 프롬프트

> [!CAUTION]
> ## 🚨 CRITICAL WORKFLOW SOP: ADDING NEW QUESTIONS
> **NEVER upload questions directly to Firestore using one-off scripts without updating the Curriculum map.**
> If questions are uploaded to the DB but not mapped in `Curriculum.jsx`, the UI will NOT show them.
>
> **MANDATORY 3-STEP PROCESS:**
> 1. **Write to a Seed File:** Generate your question data as an array inside a new file in `src/constants/` (e.g., `seedYear10Ch1Questions.js`).
> 2. **Update Curriculum.jsx:** You MUST add the new topic to the `CURRICULUM` array in `src/components/Curriculum.jsx` and link the seed file via the `seed:` property.
> 3. **Sync via Admin Seeder:** Run the standard sync script (e.g., `sync_curriculum.cjs`) or click the Seeder button in the Admin UI. This ensures the DB, Curriculum mapping, and cache metadata (`sync_meta`) are updated together.

---

## ✏️ 설정값 (여기만 바꾸세요)

> 아래 값만 수정하면 시스템 전체에 자동 반영됩니다.

### 기본 정보

```
학년:        Year 11
챕터 번호:   1
chapterId:   y11a-1
서브토픽 ID: y11a-1f
토픽 코드:   1F
서브토픽 제목: Revision
```

### 난이도 기준 (문제 번호 → difficulty)

```
Q1 ~ Q2  → easy
Q3 ~ Q5 → medium
Q6 →  hard
※ 실제 난이도가 명백히 다르면 판단하여 조정
```

### 난이도별 제한 시간

```
easy   → timeLimit: 60    (60초)
medium → timeLimit: 90    (1분 30초)
hard   → timeLimit: 120   (2분)
```

### 서브문제 분리 방식

```
SPLIT_SUB_QUESTIONS = true
  true  → a)b)c)를 subQuestions 배열로 분리
  false → 분리 안 함

SPLIT_MULTI_UNKNOWN = true
  true  → "Find x, y" 등 미지수를 개별 문제로 분리
  false → 분리 안 함

개별 top-level 문제로 분리할 문제 번호 목록:
  Q1 ~ Q8
  (이 문제들은 subQuestions 대신 별개 top-level 문제로 분리)
```

---

이하 규칙은 위 설정값을 기준으로 자동 적용합니다. 수정하지 마세요.

---

## [1] 대상 챕터

위 설정값을 읽어 아래 항목을 자동 결정합니다.

| 항목 | 자동 결정 규칙 |
|---|---|
| 학년 | 설정값 `학년` 그대로 사용 |
| 챕터 | `Chapter {챕터 번호}` |
| chapterId | 설정값 `chapterId` 그대로 사용 |
| 서브토픽 | 문제를 보고 알맞은 토픽에 배정 |
| 파일명 | `seedYear{YEAR}Ch{CHAPTER_NUM}Questions.js` |
| 상수명 | `Y{year_short}_CH{chapter_short}_QUESTIONS` |

예) `학년=Year 8`, `챕터 번호=1` → 파일명: `seedYear8Ch1Questions.js`, 상수명: `Y8_CH1_QUESTIONS`

---

## [2] 출력 형식

하나의 JS 파일만 출력합니다. **설명·주석 없이 코드만** 작성합니다.

```js
export const Y8_CH1_QUESTIONS = [
  { ... },
  { ... },
];
```

### 각 문제 객체 필드

| 필드 | 타입 | 설명 |
|---|---|---|
| `id` | string | **필수·고유.** 예: `"y8-1a-q1"`, `"y8-1a-q5b"` ★ 없거나 중복 시 기존 문제 덮어씀 |
| `type` | string | `"short_answer"` \| `"multiple_choice"` \| `"teacher_review"` \| `"interactive_grid"` |
| `difficulty` | string | `"easy"` \| `"medium"` \| `"hard"` — 설정값 [난이도 기준] 자동 적용 |
| `timeLimit` | number | 설정값 [난이도별 제한 시간] 자동 적용. `easy→30` / `medium→90` / `hard→120` |
| `question` | string | 문제 텍스트. 수식은 인라인. 줄바꿈은 `\n` |
| `a` | string | 채점용 **정답만** (short_answer/MC 필수). 예: `"70°"`, `"21"` ★ solution과 절대 섞지 말 것 |
| `opts` | array | multiple_choice일 때만. 보기 문자열 배열 4개 |
| `solution` | string | 풀이 설명문(모범답안). teacher_review는 여기에 모범답안 작성 |
| `t` | string | 서브토픽 제목 |
| `hint` | string | 힌트 한 줄 |
| `solutionSteps` | array | 단계별 working out: `[{ "explanation": "단계 설명", "workingOut": "수식", "graphData": null }, ...]` ★ "Sketch the graph" 류의 문제나 삼각방정식(예: "Solve cos x = 1/2")처럼 그래프가 정답의 힌트를 다 보여주는 문제의 경우, 정답이 되는 그래프(`graphData`)는 절대로 최상위(`question` 객체)에 넣지 말고, 반드시 `solutionSteps`의 마지막 단계에만 넣으세요 (미리 답이 보이는 현상 방지). |
| `graphData` | object\|null | 문제 본문과 함께 보여져야 할 그림. 없으면 `null`. ★ (중요) 문제의 정답이 되는 그래프나 풀이 힌트가 들어있는 단위원/함수 그래프는 여기에 넣으면 안 됩니다! 대신 `solutionSteps`의 마지막 단계에 넣으세요 (미리 답이 보이는 현상 방지). |
| `subQuestions` | array | 서브문제 ([4] 참고). `SPLIT_SUB_QUESTIONS = true`일 때만 적용. 없으면 생략 |

### 중요 텍스트 및 데이터 무결성 규칙 (CRITICAL RULES)

1. **Language Requirements**: ALL text, including explanations, questions, and hints, MUST be written strictly in English. **DO NOT use Korean or any other language.**
2. **Currency/Dollar Signs**: Do NOT use the `$` symbol anywhere in the text (questions, hints, or explanations). The `$` symbol acts as an inline math delimiter in the Markdown parser and will break the formatting. Instead, always write out the word 'dollars' (e.g., '25 dollars' instead of '$25').
3. **Strict LaTeX Formatting**: 기호, 변수, 각도 표시(예: $\theta$, $\alpha$, $x^2$) 등 모든 수학적 표현은 **반드시** 정확한 LaTeX 문법으로 감싸야 합니다(예: `$\theta$`). `graphData` 내부의 텍스트 라벨에서도 LaTeX 기호가 깨지지 않도록 올바르게 입력하세요 (예: `"text": "$\\theta$"`).
4. **NO Missing Information (Zero Omission Policy)**: 원본 문제 이미지나 텍스트에 포함된 **어떤 정보도 절대 누락해서는 안 됩니다**.
   - 각도(예: $\theta$, $32^\circ$), 변의 길이, 꼭짓점 알파벳(A, B, C 등)이 원본에 있다면 `question` 텍스트나 `graphData` 그림 내에 **반드시 모두 똑같이 명시**되어야 합니다. (예: 그림에 $\theta$가 빠져서 학생이 무엇을 구해야 할지 모르는 상황 절대 금지)
5. **DO NOT Skip or Simplify Hard Problems**: 원본 교재나 자료에 있는 **고난이도 문제, 증명(Proof) 문제, 실생활 응용 문제 등을 절대 임의로 생략하거나 쉬운 형태로 단순화해서는 안 됩니다**.
   - 모든 문제는 원문 그대로의 복잡도와 요구사항을 유지하여 `teacher_review` 혹은 적절한 포맷으로 전부 포함시켜야 합니다.
6. **Prevent JSXGraph Angle Label Overlap**: JSXGraph에서 중심각/원주각 등을 그릴 때, **각도 레이블(Label)이 겹치지 않도록 점의 좌표를 정교하게 설정**해야 합니다.
   - 한 점(예: 중심 $O$)을 기준으로 내부 각도($160^\circ$)와 반사각($200^\circ$)을 동시에 그릴 경우, 두 선분이 직선($180^\circ$)에 가깝게 설정되면 레이블이 중앙에서 겹쳐버릴 수 있습니다.
   - 좌표를 설정할 때 반드시 두 각의 크기에 맞게 실제 좌표를 다르게 배치하고, 필요하다면 `radius` 속성을 다르게 주어(예: `radius: 1.0`, `radius: 1.5`) 레이블 텍스트가 명확하게 분리되어 렌더링되도록 하세요.


---

## [3] 난이도 및 제한 시간 적용

설정값 [난이도 기준]과 [난이도별 제한 시간]을 읽어 **모든 문제와 서브문제에 자동 적용**합니다.

- `difficulty` 필드: 설정값 범위 기준으로 배정
- `timeLimit` 필드: difficulty에 따라 자동 결정
  - `"easy"` → `timeLimit: 30`
  - `"medium"` → `timeLimit: 90`
  - `"hard"` → `timeLimit: 120`
- 실제 난이도가 명백히 다르면 판단하여 조정 (timeLimit도 함께 조정)

---

## [4] 서브문제 분리

`SPLIT_SUB_QUESTIONS` 설정값에 따라 동작합니다.

- **`true` (항상 권장)**: 문제 안에 a), b) 등 서브문제가 있으면 `subQuestions` 배열에 넣지 말고, **각각을 별개의 top-level 문제로 완벽히 분리**하여 시드 배열에 평탄화(Flatten)하여 추가합니다.
  - 각각 고유한 id를 부여합니다 (예: `y11a-6k-q5a`, `y11a-6k-q5b`).
  - **중요**: 각 분리된 개별 문제의 본문(`q`)에는 상위 질문의 전체 상황 설명(예: "헬리콥터가 도로 위를 비행 중이다...")이 누락 없이 접두사(Prefix)로 포함되어 각 문제가 독립적으로 완전해야 합니다.
  - **중요**: 상위 질문에 있던 기하학적 다이어그램(`graphData`)은 분리된 모든 개별 문제에 **동일하게 복사**되어 누락되지 않아야 합니다.
- **`false`**: 서브문제를 분리하지 않고 `question` 텍스트 안에 그대로 포함합니다. (단, UX 향상을 위해 가급적 true 방식을 이용해 개별 문제로 분리하세요.)

---

## [5] 다중 미지수 분리

`SPLIT_MULTI_UNKNOWN` 설정값에 따라 동작합니다.

- **`true`**: 한 문제가 미지수를 2개 이상 물을 경우 ("Find x, y", "Find α and β" 등) → **미지수마다 1개씩 분리**합니다.
  - 각 분리 문제는 그 미지수만 묻습니다: `"Find x, giving reasons."` 등
  - 각각 `short_answer` + 해당 미지수의 깔끔한 `a` 값
  - 각 분리 문제의 `timeLimit`은 `difficulty` 기준으로 자동 적용
  - **같은 그림(`graphData`)을 분리된 모든 문제/서브문제에 동일하게 넣습니다**
  - 분리 위치는 [4] 규칙을 따릅니다
- **`false`**: 미지수를 분리하지 않고 하나의 문제로 유지합니다.

---

## [6] 문제 타입 판단

| 조건 | 타입 |
|---|---|
| 답이 정해진 값(숫자·각도·식) | `"short_answer"` + `a` 필수. ※ "giving reasons"가 붙어도 답이 값이면 `short_answer` |
| 보기 중 선택이 자연스러운 경우 | `"multiple_choice"` + `opts` |
| "Draw", "Sketch", "Construct", "Show that", "Prove", "Justify", "Explain why" 류 | `"teacher_review"` (선생님이 리뷰·채점, `a`엔 모범답안) ★ (중요) 특히 "Sketch" 문제는 학생이 직접 그리는 문제이므로 무조건 `teacher_review` 타입으로 설정해야 합니다. |
| 탭해서 색칠/선택하는 인터랙티브 | `"interactive_grid"` + `gridConfig: { "type": "triangle_split"\|"rect", "rows": N, "cols": N }` |

---

## [7] 그림 (선언형 도형)

### 1. 선언형 다면체 / 다각형 (graphData.geometry)

- **2D 평면 도형:** `points`의 좌표를 2개(`[x, y]`)로 입력하면 자동으로 평면(2D)으로 렌더링됩니다.
- **3D 입체 도형:** `points`의 좌표를 3개(`[x, y, z]`)로 입력하면 자동으로 3D 아이소메트릭(입체)으로 렌더링됩니다.
- **원 (Circle):** `circles` 배열에 중심점(`center`)과 지나는 점(`through`) 또는 반지름(`radius`)을 명시하여 원을 그립니다.
- **angles 배열 키값:** `text` 속성 금지, 반드시 `"label"` 속성 사용 (예: `{"at": "A", "label": "32°"}`)

---

### 2. 함수 그래프 및 기하 도형 (graphData.jsxGraph)

원·각도·다각형 등 **기하 도형**과 좌표계 문제 모두 `jsxGraph`를 사용합니다.

---

#### 기하 도형: elements 배열 형식 (항상 이 형식 사용)

**`"elements"` 배열을 사용합니다. `"script"` 방식은 함수 그래프에만 사용하세요.**

```json
"graphData": {
  "jsxGraph": {
    "width": 300,
    "height": 300,
    "boundingbox": [-7, 7, 7, -7],
    "boardOptions": { "keepaspectratio": true },
    "elements": [
      { "type": "circle",  "id": "c1", "center": [0, 0], "radius": 5 },
      { "type": "point",   "id": "O",  "coords": [0, 0], "name": "O", "color": "red",  "label": { "offset": [8, 0] } },
      { "type": "point",   "id": "P",  "on": "c1", "angle": 155, "name": "P", "label": { "offset": [-12, 0] } },
      { "type": "point",   "id": "Q",  "on": "c1", "angle": 35,  "name": "Q", "label": { "offset": [8, 8] } },
      { "type": "segment", "from": "O", "to": "P" },
      { "type": "segment", "from": "O", "to": "Q" },
      { "type": "polygon", "points": ["P", "Q", "O"] },
      { "type": "angle",   "points": ["Q", "O", "P"], "name": "20", "radius": 1.2, "label": { "offset": [0, 14] } }
    ]
  }
}
```

#### 요소(element) 타입 레퍼런스

| type | 필수 | 선택 |
|------|------|------|
| `circle` | `id`, `center`, `radius` | `color`, `strokeWidth`, `fillColor` |
| `point` | `id`, `coords` 또는 `on`+`angle` | `name`, `color`, `size`, `label` |
| `segment` | `from`, `to` | `color`, `strokeWidth`, `dash`, `firstArrow`, `lastArrow` |
| `line` | `through`([id,id]) | `color`, `strokeWidth` |
| `arrow` | `from`, `to` | `color`, `strokeWidth`, `bidirectional` |
| `polygon` | `points`([id,...]) | `fillColor`, `fillOpacity`, `color`, `strokeWidth` |
| `angle` | `points`([from-id, vertex-id, to-id]) | `name`, `radius`, `color`, `label` |
| `rightangle` | `points`([from-id, vertex-id, to-id]) | `size`(기본 0.4), `color` |
| `arc` | `center`, `from`, `to` | `color`, `strokeWidth` |
| `text` | `coords`, `content` | `color`, `fontSize`, `anchorX`, `anchorY` |
| `tick` | `segment` | `count` |

**point 배치:** `coords:[x,y]` 또는 `on`(circle id)+`angle`(0-360, 0=오른쪽, 반시계방향+)

**label:** `"label": { "offset": [dx, dy] }` — dx: 오른쪽+, dy: 위+ (픽셀 단위)

**named 색상:** `"blue"` `"red"` `"green"` `"orange"` `"purple"` `"slate"` `"black"`

---

#### 함수 그래프: script 방식

```json
"graphData": {
  "jsxGraph": {
    "width": 400, "height": 300,
    "boundingbox": [-2, 12, 10, -2],
    "boardOptions": { "keepaspectratio": false },
    "script": "board.suspendUpdate();\nboard.create('arrow', [[0,-1],[0,11]], {strokeColor:'black'});\nboard.create('functiongraph', [function(x){ return x*x/4; }, -1, 9], {strokeColor:'blue',strokeWidth:2});\nboard.unsuspendUpdate();"
  }
}
```

### jsxGraph 필수 규칙

1. **기하 도형 → `elements` 배열**, 함수 그래프 → `script` (혼용 금지)
2. **`label.offset` 항상 명시** — angle과 named point 모두 `"label": { "offset": [0, 0] }`
3. **원 위의 점** → `"on": "circleId", "angle": degrees` (Math.cos 직접 계산 금지)
4. **선언 순서** — 참조될 요소를 먼저 선언 (circle → point → segment 순)
5. **boundingbox 여백** — 텍스트가 잘리지 않게 20% 이상 여유
6. **부등식 경계선** — 등호 없으면 `"dash": 2` (점선)
7. **함수 화살표** — 정의역 경계가 있으면 `firstArrow: false` 또는 `lastArrow: false`
8. **★ [초민감 규칙] Firestore 2D 중첩 배열 오류 방지**:
   - Firestore는 객체 내부에 nested array (2차원 배열, 배열 안의 배열)의 저장을 지원하지 않습니다.
   - 따라서 `"coords": [[0, 0], [1, 0]]` (축(axis)의 좌표 정의) 이나 `"through": [[-4, -4], [4, 4]]` (선(line)의 통과점 좌표 정의) 같은 표현을 **절대로 사용해서는 안 됩니다.**
   - **해결책**: 항상 flat 1D 배열만 사용하는 helper 점(`point`)을 미리 정의하고(예: `id: "X1", coords: [-4, 0], visible: false`), 이 점들의 ID를 참조하여 세그먼트나 라인을 그리세요 (예: `"from": "X1", "to": "X2"`, 또는 `"through": ["X1", "X2"]`).
   - 축(`axis`)은 GeometryRenderer가 직접 렌더링하지 않으므로, 축 대신 `visible: false`로 감춘 보조 점 두 개를 잇는 화살표(`arrow`)나 세그먼트(`segment`)를 이용해 좌표축을 커스텀 정의하세요.

---

## [8] Working Out (solutionSteps)

`solutionSteps`는 학생이 혼자서도 풀이 과정을 완전히 이해할 수 있도록 **단계별로 가능한 한 자세하게** 작성합니다.

### 작성 규칙

1. **`explanation` — "왜" + "무엇을" 동시에 설명**
   - ❌ 나쁜 예: `"양변에서 8을 빼줍니다."`  (단순 행위 설명)
   - ✅ 좋은 예: `"미지수 x를 한쪽으로 모으기 위해, 양변에서 8을 빼서 상수항을 오른쪽으로 이동시킵니다."`  (이유 + 행위)

2. **`workingOut` — 실제 수식 한 줄**
   - LaTeX로 작성합니다. 예: `"\\(x = 21 - 8 = 13\\)"`
   - 단위가 있는 경우 반드시 포함합니다. 예: `"\\(= 1200 \\text{ mL}\\)"`

3. **단계 수**
   - 최소 3단계 이상. 중간 계산 과정도 생략하지 않습니다.
   - 연산이 여러 개이면 한 단계에 한 연산씩 분리합니다.

4. **첫 단계**: 항상 "무엇을 구하는 문제인지" 또는 "어떤 공식/원리를 쓸 것인지"를 `explanation`으로 시작합니다.

5. **마지막 단계**: 최종 답을 명확히 쓰고, 필요하면 단위·맥락도 붙입니다.

6. **단어 문제(word problem)**: 수식으로 번역하는 과정을 별도 단계로 포함합니다.

7. **주석 단계 허용**: 풀이 중간에 "이 단계에서 ∼를 가정합니다" 또는 "∼ 법칙을 적용합니다"처럼 메모 성격의 단계도 `workingOut: ""` (빈 문자열)로 넣어도 됩니다.

### 형식 예시 (3단계짜리 덧셈 문제)

```json
"solutionSteps": [
  {
    "explanation": "To solve this vertical addition, start by adding the units column. 4 + 7 equals 11.",
    "workingOut": "\\(\\begin{array}{r} \\overset{1}{\\phantom{0}}24 \\\\ + \\quad 37 \\\\ \\hline 1 \\end{array}\\)"
  },
  {
    "explanation": "Write down 1 in the units place and carry over 1 to the tens column. Now add the tens column: 2 + 3 + 1 (carried over).",
    "workingOut": "\\(\\begin{array}{r} \\overset{1}{\\phantom{0}}24 \\\\ + \\quad 37 \\\\ \\hline 61 \\end{array}\\)"
  },
  {
    "explanation": "The final sum is 61.",
    "workingOut": "\\(\\therefore\\; 61\\)"
  }
]
```

---

## [9] 숫자·미지수 교체

원본 사진의 숫자와 미지수는 **바꿔서 출제**합니다.
구조·난이도는 유지하고, 값만 교체합니다.

---

## [10] LaTeX 주의사항

- 수식은 `\( \)`로 감쌉니다. 분수: `\frac{a}{b}`, 제곱: `^2`, 루트: `\sqrt{}`
- JSON 문자열 안 백슬래시는 이스케이프: `\\frac`, `\\sqrt`
- LaTeX가 깨지지 않도록 괄호·중괄호 짝을 반드시 맞춥니다.
- **[매우 중요] KaTeX 배열(Array) 문법 오류 방지**: KaTeX는 `\begin{array}`의 열 정렬 기호로 `@`를 지원하지 않습니다! (예: `r@{\quad}l` 또는 `c@{\quad}r` 사용 시 Parse Error가 발생하며 수식이 빨간색 텍스트로 깨집니다). **절대로 `@`를 사용하지 마세요.** 대신 `r`, `c`, `l` 등 기본 정렬 기호만 사용하고(예: `\begin{array}{r}`), 띄어쓰기가 필요한 곳에는 셀 안에 직접 `\quad`를 삽입하세요.
- **[매우 중요] `\text{...}` 사용 금지**: `workingOut`의 수식 내부에 `\text{Opposite}`나 `\text{Unknown}` 같이 3글자 이상의 영어 단어를 `\text{}`로 감싸서 작성하지 마세요. 자체 수식 렌더러가 이를 일반 문장(Prose)으로 착각하여 구문 분석 오류(Parse Error)를 일으킵니다. 미지수는 가급적 $x$ 같은 단일 문자를 쓰거나, 영단어가 필요하다면 `\mathrm{Opposite}` 처럼 `\mathrm{}`을 사용하세요.
- [7]의 도형 레이블(`geometry`)은 LaTeX 아님 — 유니코드 기호 그대로 사용합니다.

---

## [11] 수학적 정확성 및 데이터 무결성 ⚠️

### 기하학적 정확성

1. **좌표 정확성**: 좌표값을 임의로 짐작하지 말 것. 수선의 발이나 대칭점 등은 수식(기울기, 중점, 점과 직선 사이의 거리 공식)으로 수학적으로 정확하게 산출할 것.
2. **비퇴화 삼각형**: 증명 대상인 삼각형의 세 꼭짓점이 한 직선 위에 놓이지 않도록 사전에 방지할 것.
3. **교재 비례 유지**: 교재 그림에서 특정 꼭짓점이 가장 아래에 있다면 실제 y좌표도 가장 낮아야 하며, 도형 전체의 비례와 밸런스를 검증할 것.
4. **호주(NSW) 용어 사용**: 미국식 약어 CPCTC 절대 사용 금지. 대신 *"corresponding angles/sides of congruent triangles are equal"* 로 풀어 작성할 것.
5. **엄밀한 증명 흐름**: 그림에 명시적으로 주어지지 않은 조건은 함부로 (given)으로 처리하지 말고, 합동조건(RHS, SAS 등)을 단계별로 엄밀하게 증명할 것.

### 데이터 무결성

- ★ **기존 데이터 덮어쓰기 절대 금지**: 새 챕터나 토픽 등록 전에 `curriculumData.js`를 반드시 먼저 조회하여 이미 존재하는 `topicId`가 있는지 확인합니다.
- ★ 기존 토픽이 이미 있다면, 겹치지 않는 새로운 `topicId`와 고유한 id 체계를 생성해서 할당합니다.
- 모든 문제·서브문제에 **고유 id를 반드시 부여**합니다.
- `question`과 `a`가 빈 문자열로 나가지 않도록 합니다.
- 그림이 필요한 문제는 `graphData`를 반드시 채웁니다 (`null`로 두지 말 것).
- 사진의 **모든 문제를 빠짐없이 포함**합니다.

---

## [12] 파일 저장 및 앱 등록

시드 배열을 만든 뒤, 다음 작업까지 직접 수행합니다. **파일명·상수명·ID는 모두 설정값 기준으로 자동 결정합니다.**

### (a) 시드 파일 저장

- **경로**: `src/constants/seedYear{YEAR}Ch{CHAPTER_NUM}Questions.js`
- **내용**: `export const Y{year_short}_CH{chapter_short}_QUESTIONS = [...]` 전체

### (b) Curriculum.jsx에 등록

파일 상단에 import 추가:

```js
import { Y9_CH3_QUESTIONS } from '../constants/seedYear9Ch3Questions';
```

`CHAPTER_SEED_REGISTRY` 배열에 항목 1줄 추가:

```js
{
  chapterId: 'y9-3',
  chapterTitle: 'Chapter 3: <챕터 제목>',
  topicId: 'y9-3a',
  topicCode: '3A',
  topicTitle: '<서브토픽 제목>',
  year: 'Year 9',
  seed: Y9_CH3_QUESTIONS,
  label: 'Y9 Ch3 · <챕터 제목>',
}
```

> ★ 해당 `chapterId`/`topicId` 항목이 이미 등록돼 있으면 import·registry는 건드리지 말고 **(a) 시드 파일 내용만 교체**합니다.
> ★ import 줄과 registry 항목은 **절대 중복 추가하지 않습니다.**

### (c) 작업 완료 후 사용자 안내

> "어드민 → Curriculum에서 해당 챕터의 '🌱 Seed' 버튼만 누르면 됩니다."

---

> **참고 (매우 중요)**:
> 1. **기존 수동 문제 보존**: 시드는 비파괴 upsert 방식입니다. 사용자가 웹에서 수동으로 등록한 문제들이 유실되지 않도록 **전체 삭제 후 시드하는 방식이 아닙니다**.
> 2. **안정적인 고유 ID 사용**: 랜덤 ID(예: auto-generated firestore ID)로 시드하면 중복 문제나 고아(orphaned) 문제가 발생하므로, 반드시 `y7-1h-q1a`처럼 **규칙성 있고 예측 가능한 고유 ID**를 고정해서 사용해야 합니다.
> 3. **KaTeX 문법 준수**: `\begin{array}` 사용 시 절대 `@` 기호(`c@{\quad}r` 등)를 쓰지 않아야 수식이 깨지지 않습니다.

---

문제 누락하지 마 특히 어려운 문제들 누락하거나 쉬운 문제로 바꾸지 말고 푸시 배포까지

위 규칙대로 시드 파일을 생성하고 [12]까지 완료하세요.
