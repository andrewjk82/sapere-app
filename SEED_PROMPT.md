# NSW 수학 커리큘럼 → 디지털 학습 앱 시드 데이터 변환 프롬프트

---

## ✏️ 설정값 (여기만 바꾸세요)

> 아래 값만 수정하면 시스템 전체에 자동 반영됩니다.

### 기본 정보

```
학년:        Year 10
챕터 번호:   1
chapterId:   y10-12
서브토픽 ID: y7-12a
토픽 코드:   12A
서브토픽 제목: Review of the basic trigonometric ratios
```

### 난이도 기준 (문제 번호 → difficulty)

```
Q1 ~ Q5  → easy
none → medium
none → hard
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
  Q1 ~Q5
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
| `solutionSteps` | array | 단계별 working out: `[{ "explanation": "단계 설명", "workingOut": "수식", "graphData": null }, ...]` ★ "Sketch the graph" 류의 문제에서 정답이 되는 그래프(`graphData`)는 절대로 최상위(`question` 객체)에 넣지 말고, 반드시 `solutionSteps`의 마지막 단계에만 넣으세요 (미리 답이 보이는 현상 방지). |
| `graphData` | object\|null | 문제 본문과 함께 보여져야 할 그림. 없으면 `null`. ★ (중요) 문제의 정답이 되는 그래프(예: "Sketch each graph")는 여기에 넣으면 안 됩니다! 대신 `solutionSteps` 안에 넣으세요. |
| `subQuestions` | array | 서브문제 ([4] 참고). `SPLIT_SUB_QUESTIONS = true`일 때만 적용. 없으면 생략 |

### 중요 텍스트 및 데이터 무결성 규칙 (CRITICAL RULES)

1. **Language Requirements**: ALL text, including explanations, questions, and hints, MUST be written strictly in English. **DO NOT use Korean or any other language.**
2. **Currency/Dollar Signs**: Do NOT use the `$` symbol anywhere in the text (questions, hints, or explanations). The `$` symbol acts as an inline math delimiter in the Markdown parser and will break the formatting. Instead, always write out the word 'dollars' (e.g., '25 dollars' instead of '$25').
3. **Strict LaTeX Formatting**: 기호, 변수, 각도 표시(예: $\theta$, $\alpha$, $x^2$) 등 모든 수학적 표현은 **반드시** 정확한 LaTeX 문법으로 감싸야 합니다(예: `$\theta$`). `graphData` 내부의 텍스트 라벨에서도 LaTeX 기호가 깨지지 않도록 올바르게 입력하세요 (예: `"text": "$\\theta$"`).
4. **NO Missing Information (Zero Omission Policy)**: 원본 문제 이미지나 텍스트에 포함된 **어떤 정보도 절대 누락해서는 안 됩니다**. 
   - 각도(예: $\theta$, $32^\circ$), 변의 길이, 꼭짓점 알파벳(A, B, C 등)이 원본에 있다면 `question` 텍스트나 `graphData` 그림 내에 **반드시 모두 똑같이 명시**되어야 합니다. (예: 그림에 $\theta$가 빠져서 학생이 무엇을 구해야 할지 모르는 상황 절대 금지)


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

- **`true`**: 문제 안에 a), b) 등 서브문제가 있으면 `subQuestions` 배열로 분리합니다.
  각 서브문제도 동일한 필드 구조(id, type, difficulty, timeLimit, question, a, solutionSteps 등)를 따릅니다.
- **`false`**: 서브문제를 분리하지 않고 `question` 텍스트 안에 그대로 포함합니다.

설정값에서 지정한 **개별 top-level 문제로 분리할 문제 번호**(예: Q1, Q6, Q8, Q9)는 `subQuestions` 대신 각각을 별개의 top-level 문제로 분리하고 id를 따로 부여합니다 (예: `y9-3a-q1a`, `y9-3a-q1b`).

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

## [7] 그림 (선언형 도형 — 좌표만 채우면 됨)

도형 종류에 따라 아래 세 가지 방식 중 하나를 선택합니다. **스크립트를 짜지 말고 JSON 선언만** 작성합니다.

| 도형 종류 | 사용 방식 |
|---|---|
| 삼각형·사각형·평행선·각도 등 **평면 도형** | `graphData.geometry` (2D) |
| 직육면체·각뿔·원기둥·원뿔·구 등 **입체 도형** | `graphData.geometry` (3D 아이소메트릭) |
| 포물선·함수 그래프 등 **곡선** | `graphData.jsxGraph` |
| 그림 없음 | `"graphData": null` |

### 1. 선언형 다면체 / 다각형 (graphData.geometry)

- **2D 평면 도형:** `points`의 좌표를 2개(`[x, y]`)로 입력하면 자동으로 평면(2D)으로 렌더링됩니다.
- **3D 입체 도형:** `points`의 좌표를 3개(`[x, y, z]`)로 입력하면 자동으로 3D 아이소메트릭(입체)으로 렌더링됩니다.
- **원 (Circle):** `circles` 배열에 중심점(`center`)과 지나는 점(`through`) 또는 반지름(`radius`)을 명시하여 원을 그립니다.
- ※ `shape: 'cylinder'` 등의 단축키는 현재 미지원이므로 곡면은 다면체로 근사하거나 생략합니다.

**[작성 예시]**

```json
"graphData": {
  "geometry": {
    "width": 300,
    "points": {
      "A": [0, 0, 0],
      "B": [4, 0, 0],
      "C": [4, 0, 3],
      "D": [0, 0, 3]
    },
    "circles": [
      { "center": "O", "through": "B" },
      { "center": "A", "radius": 2, "dashed": true }
    ],
    "segments": [
      { "from": "A", "to": "B" },
      { "from": "A", "to": "D", "dashed": true }
    ],
    "sideLabels": [
      { "between": ["A", "B"], "text": "4 cm" }
    ],
    "angles": [
      { "at": "A", "right": true }
    ]
  }
}
```

### 2. 함수 그래프 및 좌표평면 (graphData.jsxGraph)

x축/y축이 있는 데카르트 좌표계 문제(선형 그래프, 포물선 등)는 반드시 `jsxGraph`를 사용해 정교하게 그립니다.

**[작성 예시]**

```json
"graphData": {
  "jsxGraph": {
    "width": 350,
    "height": 250,
    "boundingbox": [-5, 50, 50, -5],
    "script": "board.suspendUpdate();\nboard.create('arrow', [[0,0],[0,45]], {strokeColor:'black',strokeWidth:1});\nboard.create('arrow', [[0,0],[45,0]], {strokeColor:'black',strokeWidth:1});\nboard.create('text', [45,-2], 't (hours)', {anchorX:'right',anchorY:'top',fontSize:14});\nboard.create('text', [-1,45], 'V (litres)', {anchorX:'right',anchorY:'top',fontSize:14});\nboard.create('segment', [[-1,20],[0,20]], {strokeColor:'black'});\nboard.create('text', [-1,20,'20'], {anchorX:'right',anchorY:'middle'});\nboard.create('segment', [[0,40],[20,20]], {strokeColor:'blue',strokeWidth:2});\nboard.unsuspendUpdate();"
  }
}
```

### jsxGraph 작성 필수 규칙

1. **차트 크기 및 비율**
   - 기본 캔버스: `width: 400, height: 300`
   - 함수 그래프: `boardOptions: { keepaspectratio: false }`
   - 기하학 문제: `keepaspectratio: true`

2. **곡선 연장 및 좌표축**
   - 함수 곡선은 boundingbox 기준 가로축 끝까지 꽉 채워 렌더링
   - 좌표축은 양방향 연장 화살표(`firstArrow: true, lastArrow: true`) 명시

3. **원점, 축 및 주요 좌표 라벨**
   - 원점 `O`, 축 라벨 `x`, `y` 반드시 명시
   - 극대·극소·꼭짓점·절편 등 주요 좌표는 텍스트와 함께 포인트로 마킹

4. **색상 통일**
   - 함수 선·특징점·텍스트 라벨: 인디고 테마(`#4f46e5`)
   - 보조 좌표축선: 슬레이트 그레이(`#64748b`)
   - `functiongraph`, `curve`, `point`에는 별도 색상 미지정 시 자동 적용

5. **Boundingbox 여백**
   - 텍스트·화살표가 잘리지 않도록 상하좌우 20% 이상 넉넉하게 설정
   - 예: 최대 Y값이 200이라면 top은 250~280으로 설정

6. **텍스트 및 레이블 겹침/가림 방지**
   - 축 라벨은 `anchorX`, `anchorY`로 숫자와 겹치지 않게 배치
   - 수식/LaTeX 포인트 레이블(예: `name: '$(0, \\sqrt{5})$'`)은 앱 내부에서 사분면 및 경계면 위치를 고려하여 **말풍선(Speech Bubble) 툴팁** 형태로 렌더링되며, 뾰족한 화살표 꼬리가 포인트를 정확히 가리키도록 자동 정렬됩니다.
   - 말풍선 박스가 포인트를 절대 가리지 않도록 4대 방위(상/하/좌/우)에 최적화되어 배치됩니다.
   - 따라서 포인트 생성 시 하드코딩된 임의의 오프셋(예: `label: {offset: [10, 10]}`)은 가급적 부여하지 마세요. 앱 자체의 스마트 말풍선 배치 기능이 작동하게 내버려두는 것이 가장 안전합니다.
   - 긴 좌표 텍스트는 공백 제거 (예: `(500,20000)`)

7. **Sketch 문제**
   - "Sketch the graph of…" 등 학생이 직접 그려야 하는 문제는 `type: "teacher_review"` 설정
   - 정답 그래프는 `solutionSteps`에만 포함 (문제 본문엔 숨김)

8. **정의역 제한 및 화살표 비활성화**
   - 정의역에 경계가 있어 그래프가 특정 지점에서 시작하거나 끝나는 경우(예: 무리함수 \\( y = \\sqrt{x} \\)의 원점 시작점, 또는 범위가 제한된 실생활 문제 등), 그 시작점/끝점에는 화살표를 넣지 않아야 합니다.
   - ★ 특히 원점(Origin, (0,0))이나 경계점(Boundary)에서 함수 그래프가 시작하거나 끝날 때 그 지점에 화살표가 표시되지 않도록 하십시오.
   - JSXGraph 컴포넌트는 기본적으로 곡선 양 끝에 화살표를 그리도록 설정되어 있으므로, 경계 지점에서는 `{ firstArrow: false }` 또는 `{ lastArrow: false }`를 설정에 추가하여 화살표를 명시적으로 꺼주어야 합니다.

9. **부등식 경계선 (Dashed vs Solid)**
   - 부등식 영역을 표현할 때, 등호가 포함되지 않은 부등호(`<`, `>`)의 경계선은 반드시 점선(예: `{ dash: 2 }`)으로 설정해야 합니다.
   - 등호가 포함된 부등호(`\\le`, `\\ge`)의 경계선은 실선으로 설정해야 합니다.

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

위 규칙대로 시드 파일을 생성하고 [12]까지 완료하세요.
