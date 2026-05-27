# Sapere App — Claude 작업 가이드

이 파일은 Claude Code가 이 프로젝트에서 작업할 때 항상 참조하는 컨텍스트입니다.

---

## 프로젝트 개요

- NSW 수학 커리큘럼 기반 학생 학습 앱 (React + Firebase + Vercel)
- 학생: Year 3–12, 선생님 어드민 포함
- 주요 기능: Daily Challenge, Exam Prep, Secret Note, Library, Curriculum (Learning Path)

---

## 시드 데이터 생성 프롬프트

문제 사진이나 문제 텍스트를 받아 앱용 시드 데이터로 변환할 때 아래 규칙을 따릅니다.

---

# NSW 수학 커리큘럼 → 디지털 학습 앱 시드 데이터 변환 프롬프트

> 당신은 NSW 수학 커리큘럼 문제를 디지털 학습 앱용 시드 데이터로 변환하는 전문가입니다.
> 첨부된 문제 사진들을 보고 아래 규칙에 따라 JS 시드 파일을 생성하고, 앱에 바로 등록까지 완료하세요.

---

## ⚙️ 설정값 (매번 여기만 바꾸세요)

> ✏️ **아래 값만 수정하면 시스템 전체에 자동 반영됩니다.**

```
- 학년: Year 9
- 챕터: Chapter 3 (chapterId: "y9-3")
- 서브토픽: 3A (topicId: "y9-3a", topicCode: "3A", t: "<서브토픽 제목>")
※ 다른 챕터면 이 4개 값만 바꿔서 쓰세요.
```

### 난이도 기준 (문제 번호 → difficulty)

```
Q1  ~ Q6 → easy      ← 범위 직접 수정
Q7  ~ Q12  → medium    ← 범위 직접 수정
Q3 → hard      ← 범위 직접 수정
※ 실제 난이도가 명백히 다르면 판단하여 조정
```

### 난이도별 제한 시간

```
easy   → timeLimit: 30       (30초)
medium → timeLimit: 90       (1분 30초)
hard   → timeLimit: 120      (2분)
```

### 서브문제 분리 방식

```
- Q1, Q6, Q8,  Q9 : 서브문제(a, b, …)가 있으면 각각을 "별개의 top-level 문제"로
            분리. id를 따로 부여 (y9-3a-q3a, y9-3a-q3b …).
            subQuestions 쓰지 말 것.
- 다른 문제들: 서브문제가 있으면 한 문제 안에 넣음:
            subQuestions: [
              { "id":"...a", "type":"short_answer",
                "question":"a) ...", "a":"..." },
              { "id":"...b", "type":"...", "question":"b) ...", "a":"..." }
            ]

SPLIT_SUB_QUESTIONS = true    ← true: a)b)c)를 subQuestions로 분리 / false: 분리 안 함
SPLIT_MULTI_UNKNOWN = true    ← true: "Find x, y" 등 미지수를 개별 문제로 분리 / false: 분리 안 함
```

---

이하 규칙은 **위 설정값을 기준으로 자동 적용**합니다. 수정하지 마세요.

---

## [1] 대상 챕터

위 설정값(`YEAR`, `CHAPTER_NUM`, `CHAPTER_ID`)을 읽어 아래 항목을 자동 결정합니다.

| 항목 | 자동 결정 규칙 |
|---|---|
| 학년 | `YEAR` 값 그대로 사용 |
| 챕터 | `Chapter {CHAPTER_NUM}` |
| chapterId | `CHAPTER_ID` 값 그대로 사용 |
| 서브토픽 | 문제를 보고 알맞은 토픽에 배정 |
| 파일명 | `seedYear{YEAR}Ch{CHAPTER_NUM}Questions.js` 형식 |
| 상수명 | `Y{year_short}_CH{chapter_short}_QUESTIONS` 형식 |

예) `YEAR=Year 8`, `CHAPTER_NUM=1` → 파일명: `seedYear8Ch1Questions.js`, 상수명: `Y8_CH1_QUESTIONS`

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
| `hint` | string | 힌트. 단계별로 제공하려면 아래 [HINT] 형식 사용 |
| `solutionSteps` | array | 단계별 working out: `[{ "explanation": "단계 설명", "workingOut": "수식" }, ...]` |
| `graphData` | object\|null | 그림 없으면 `null`. 있으면 [7] 형식 참고 |
| `subQuestions` | array | 서브문제 ([4] 참고). `SPLIT_SUB_QUESTIONS = true`일 때만 적용. 없으면 생략 |

---

## [HINT] 단계별 힌트 작성 규칙

힌트(`hint` 필드)는 학생에게 단계별로 한 번에 하나씩 공개됩니다.
앱이 자동으로 아래 형식을 파싱해 각 줄/단락을 개별 힌트 스텝으로 표시합니다.

### 지원 형식 (우선순위 순)

| 형식 | 예시 | 파싱 결과 |
|---|---|---|
| 번호 목록 | `1. 공식을 확인한다\n2. 값을 대입한다\n3. 정리한다` | 3단계 |
| Step N: 접두사 | `Step 1: 미분한다\nStep 2: 0으로 놓는다` | 2단계 |
| 빈 줄 단락 | `먼저 공식을 떠올려봐요.\n\n그 다음 값을 대입하세요.` | 2단계 |
| 단일 힌트 | `이차공식을 사용하세요.` | 1단계 |

### 작성 원칙

- **힌트는 답을 바로 알려주지 않고, 생각의 방향을 유도**합니다.
- 단계가 많을수록 좋습니다 (최소 2단계 권장, 어려운 문제는 3~4단계).
- 각 단계는 독립적으로 읽혀야 합니다 (앞 단계를 못 봐도 이해 가능).
- 수식은 LaTeX 인라인: `\\(\\frac{a}{b}\\)` 형식.
- 힌트가 없는 경우 `hint` 필드를 아예 생략하세요 (빈 문자열 `""` 금지).

### 작성 예시

```js
// ✅ 좋은 예 — 3단계 번호 형식
hint: "1. 삼각형의 내각의 합이 몇 도인지 생각해보세요.\n2. 이미 알고 있는 두 각의 합을 구하세요.\n3. 전체에서 빼면 나머지 각을 구할 수 있어요."

// ✅ 좋은 예 — Step 형식
hint: "Step 1: 주어진 식을 인수분해 가능한 형태로 변환하세요.\nStep 2: 공통인수를 찾아 묶으세요.\nStep 3: 각 인수를 0으로 놓고 x값을 구하세요."

// ✅ 좋은 예 — 단일 힌트 (간단한 문제)
hint: "\\(a^2 + b^2 = c^2\\) 공식을 사용하세요."

// ❌ 나쁜 예 — 답을 직접 알려줌
hint: "x = 5를 대입하면 됩니다."

// ❌ 나쁜 예 — 빈 문자열
hint: ""
```

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

---

## [5] 다중 미지수 분리

`SPLIT_MULTI_UNKNOWN` 설정값에 따라 동작합니다.

- **`true`**: 한 문제가 미지수를 2개 이상 물을 경우 ("Find x, y", "Find α and β" 등) → **미지수마다 1개씩 분리**합니다.
  - 각 분리 문제는 그 미지수만 묻습니다: `"Find x, giving reasons."` 등
  - 각각 `short_answer` + 해당 미지수의 깔끔한 `a` 값
  - 각 분리 문제의 `timeLimit`은 `difficulty` 기준으로 자동 적용
  - **같은 그림(`graphData`)을 분리된 모든 문제/서브문제에 동일하게 넣습니다**
  - 분리 위치는 [4] 규칙을 따릅니다 (Q1 → `subQuestions`)
- **`false`**: 미지수를 분리하지 않고 하나의 문제로 유지합니다.

---

## [6] 문제 타입 판단

| 조건 | 타입 |
|---|---|
| 답이 정해진 값(숫자·각도·식) | `"short_answer"` + `a` 필수. ※ "giving reasons"가 붙어도 답이 값이면 `short_answer` |
| 보기 중 선택이 자연스러운 경우 | `"multiple_choice"` + `opts` |
| "Draw", "Sketch", "Construct", "Show that", "Prove", "Justify", "Explain why" 류 | `"teacher_review"` (선생님이 리뷰·채점, `a`엔 모범답안) |
| 탭해서 색칠/선택하는 인터랙티브 | `"interactive_grid"` + `gridConfig: { "type": "triangle_split"\|"rect", "rows": N, "cols": N }` |

---

## [7] 그림 (선언형 도형)

도형 종류에 따라 아래 세 가지 방식 중 하나를 선택합니다. **스크립트를 짜지 말고 JSON 선언만** 작성합니다.

| 도형 종류 | 사용 방식 |
|---|---|
| 삼각형·사각형·평행선·각도 등 **평면 도형** | `graphData.geometry` (2D) |
| 직육면체·각뿔·원기둥·원뿔·구 등 **입체 도형** | `graphData.geometry3d` (3D 아이소메트릭) |
| 포물선·함수 그래프 등 **곡선** | jsxGraph 방식 (기존 유지) |
| 그림 없음 | `"graphData": null` |

### 선언형 다면체 / 다각형 (graphData.geometry)

- **2D 평면 도형:** `points`의 좌표를 2개(`[x, y]`)로 입력하면 자동으로 평면(2D)으로 렌더링됩니다.
- **3D 입체 도형:** `points`의 좌표를 3개(`[x, y, z]`)로 입력하면 자동으로 3D 아이소메트릭(입체)으로 렌더링됩니다.
- **원 (Circle):** `circles` 배열에 중심점(`center`)과 지나는 점(`through`) 또는 반지름(`radius`)을 명시합니다.
- ※ `shape: 'cylinder'` 등의 단축키는 현재 미지원이므로 곡면은 다면체로 근사하거나 생략합니다.

```json
"graphData": {
  "geometry": {
    "width": 300,
    "points": {
      "A": [0, 0],
      "B": [4, 0],
      "C": [4, 3]
    },
    "segments": [
      { "from": "A", "to": "B" },
      { "from": "A", "to": "C", "dashed": true }
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

### 함수 그래프 및 좌표평면 (graphData.jsxGraph)

x축/y축이 있는 데카르트 좌표계 문제는 반드시 `jsxGraph`를 사용합니다.

```json
"graphData": {
  "jsxGraph": {
    "width": 350,
    "height": 250,
    "boundingbox": [-5, 50, 50, -5],
    "script": "board.suspendUpdate();\nboard.create('arrow', [[0,0],[0,45]], {strokeColor:'black'});\nboard.unsuspendUpdate();"
  }
}
```

**jsxGraph 주의사항:**
1. `boundingbox`는 그릴 영역보다 상하좌우 20% 이상 넉넉하게 설정
2. 축 라벨은 `anchorX`, `anchorY`로 겹침 방지
3. 긴 텍스트는 공백 제거 (`(500, 20000)`)

---

## [8] Working Out (solutionSteps)

- `solutionSteps`에 **가능한 자세히, 단계별(step-by-step)** 로 작성합니다.
- 각 step: 짧은 `explanation` + `workingOut` 수식 한 줄
- 학생이 따라올 수 있게 논리 흐름을 빠짐없이 작성합니다.

---

## [9] 숫자·미지수 교체

원본 사진의 숫자와 미지수는 **바꿔서 출제**합니다.
구조·난이도는 유지하고, 값만 교체합니다.

---

## [10] LaTeX 주의사항

- 수식은 `\( \)`로 감쌉니다. 분수: `\frac{a}{b}`, 제곱: `^2`, 루트: `\sqrt{}`
- JSON 문자열 안 백슬래시는 이스케이프: `\\frac`, `\\sqrt`
- LaTeX가 깨지지 않도록 괄호·중괄호 짝을 반드시 맞춥니다.
- [7]의 도형 레이블(`geometry`)은 LaTeX 아님 — 유니코드 기호 그대로 사용합니다.

---

## [11] 필수 — 데이터 무결성 및 덮어쓰기 방지 ⚠️

- ★ **기존 데이터 덮어쓰기 절대 금지**: 새 챕터나 토픽을 등록하기 전에 `curriculumData.js`를 반드시 먼저 조회하여 이미 존재하는 `topicId`가 있는지 확인합니다.
- ★ 기존 토픽이 이미 있다면, 겹치지 않는 새로운 `topicId`와 고유한 id 체계를 생성해서 할당합니다.
- 모든 문제·서브문제에 **고유 id를 반드시 부여**합니다.
- `question`과 `a`가 빈 문자열로 나가지 않도록 합니다.
- 그림이 필요한 문제는 `graphData`를 반드시 채웁니다 (`null`로 두지 말 것).
- 사진의 **모든 문제를 빠짐없이 포함**합니다.

---

## [12] 파일 저장 및 앱 등록 (코드 직접 수정)

시드 배열을 만든 뒤, 다음 작업까지 직접 수행합니다.

### (a) 시드 파일 저장

- **경로**: `src/constants/seedYear{YEAR}Ch{CHAPTER_NUM}Questions.js`
- **내용**: `export const Y{year_short}_CH{chapter_short}_QUESTIONS = [...]` 전체

### (b) Curriculum.jsx에 등록

파일 상단에 import 추가:
```js
import { Y8_CH1_QUESTIONS } from '../constants/seedYear8Ch1Questions';
```

`CHAPTER_SEED_REGISTRY` 배열에 항목 1줄 추가:
```js
{
  chapterId: 'y8-1',
  chapterTitle: 'Chapter 1: <챕터 제목>',
  topicId: 'y8-1a',
  topicCode: '1A',
  topicTitle: '<서브토픽 제목>',
  year: 'Year 8',
  seed: Y8_CH1_QUESTIONS,
  label: 'Y8 Ch1 · <챕터 제목>',
}
```

> ★ 해당 `chapterId`/`topicId` 항목이 이미 등록돼 있으면 import·registry는 건드리지 말고 **(a) 시드 파일 내용만 교체**합니다.
> ★ import 줄과 registry 항목은 **절대 중복 추가하지 않습니다.**

### (c) 작업 완료 후 안내

> "어드민 → Curriculum에서 해당 챕터의 '🌱 Seed' 버튼만 누르면 됩니다."

---

> **참고**: 시드는 비파괴 upsert(set merge)이므로 기존 문제는 사라지지 않고, 같은 id는 덮어쓰기, 새 id는 추가됩니다. 따라서 기존 문제를 의도치 않게 삭제(덮어쓰기)하지 않도록 **고유 ID 정책을 엄수**합니다.
