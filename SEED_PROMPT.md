# NSW 수학 커리큘럼 → 시드 데이터 변환

> 🚨 SOP: 새 문제는 절대 일회성 스크립트로 Firestore 직접 업로드 금지.
> ① src/constants/ 에 시드 파일 작성 → ② Curriculum.jsx의 CHAPTER_SEED_REGISTRY에 등록(seed: 연결) → ③ Admin Seeder/sync 스크립트로 동기화(DB·매핑·sync_meta 함께 갱신). 매핑 안 하면 UI에 안 보임.

## ✏️ 설정값 (여기만 수정)
학년: Year 11 | 챕터 번호: 6 | chapterId: y11a-6
서브토픽 ID: y11a-6k | 토픽 코드: 6K | 서브토픽 제목: Revision

난이도: Q1~Q2 easy / Q3~Q12 medium / Q13 hard (명백히 다르면 조정)
timeLimit: easy 60 / medium 90 / hard 120
SPLIT_SUB_QUESTIONS=true (a)b)c)→subQuestions 배열)
SPLIT_MULTI_UNKNOWN=true ("Find x,y"→미지수별 분리)
개별 top-level 분리: Q1~Q3, Q11~Q12

---
이하 규칙은 위 설정값 기준 자동 적용. 수정 금지.

## [1] 대상 결정
학년=설정값. 챕터=Chapter{번호}. chapterId=설정값. 서브토픽=문제 보고 배정.
파일명=seedYear{YEAR}Ch{NUM}Questions.js. 상수명=Y{year}_CH{ch}_QUESTIONS.
예) Year8 Ch1 → seedYear8Ch1Questions.js, Y8_CH1_QUESTIONS.

## [2] 출력
JS 파일 하나, 설명·주석 없이 코드만: `export const Y8_CH1_QUESTIONS = [ {...} ];`

필드:
- id(필수·고유, 예 "y8-1a-q1"; 없거나 중복 시 덮어씀)
- type: short_answer | multiple_choice | teacher_review | interactive_grid
- difficulty / timeLimit: 설정값 자동
- question(수식 인라인, 줄바꿈 \n)
- a: 채점용 정답만(short/MC 필수; solution과 절대 혼용 금지)
- opts: MC일 때 보기 4개 배열
- solution: 모범답안(teacher_review는 여기)
- t: 서브토픽 제목 / hint: 한 줄
- solutionSteps: [{explanation, workingOut, graphData:null}]  ★정답/힌트 그래프는 최상위 아닌 마지막 step에만
- graphData: 본문용 그림 또는 null  ★정답/풀이 힌트가 들어있는 단위원/함수 그래프는 여기 넣지 말 것(solutionSteps의 마지막 step으로)
- subQuestions: ★사용 금지. 서브문제는 항상 평탄화(Flatten)하여 개별 top-level 문제로 분리할 것.

무결성 규칙:
1. 모든 텍스트 영어만 (한국어 금지).
2. `$` 금지 — 인라인 수식 구분자라 깨짐. 'dollars'로 표기(25 dollars).
3. 모든 수학기호는 정확한 LaTeX로 감쌈($\theta$ 등). graphData 라벨도 동일("$\\theta$").
4. 원본의 어떤 정보도 누락 금지 — 각도/변길이/꼭짓점 알파벳 전부 question 또는 graphData에 명시.
5. 고난이도/증명/응용 문제 생략·단순화 금지. 전부 포함(teacher_review 등).
6. JSXGraph 각도 레이블 겹침 방지 — 좌표 정교 배치, 필요시 radius 다르게(1.0/1.5).

## [3] 난이도·시간
모든 문제·서브문제에 자동 적용. easy30·medium90·hard120(★주: 설정값엔 easy60이나 이 절은 30 명시 — 원문대로 유지). 명백히 다르면 조정.

## [4] 서브문제 분리
서브문제가 있으면 subQuestions 배열에 넣지 말고, **각각을 별개의 top-level 문제로 완벽히 분리(Flatten)하여 시드 배열에 추가**합니다.
- 각각 고유한 id를 부여합니다 (예: `y11a-6k-q5a`, `y11a-6k-q5b`).
- **중요**: 각 분리된 개별 문제의 본문(`q`)에는 상위 질문의 전체 상황 설명(예: "헬리콥터가 도로 위를 비행 중이다...")이 누락 없이 접두사로 포함되어야 합니다.
- **중요**: 상위 질문에 있던 기하학적 다이어그램(`graphData`)은 분리된 모든 개별 문제에 동일하게 복사되어야 합니다.

## [5] 다중 미지수 분리
true: 미지수 2개↑("Find x,y") → 미지수마다 1문제로 분리. 각각 그 미지수만 묻고 short_answer+깔끔한 a. timeLimit은 difficulty 기준. 같은 graphData를 분리된 모두에 동일 적용. 위치는 [4] 규칙.
false: 하나로 유지.

## [6] 타입 판단
- 값(숫자·각도·식) 답 → 가능한 한 `multiple_choice` + `opts`(보기 4개)로 만듭니다. 특히 `Ax + By + C = 0`처럼 수식이나 문자가 포함되어 학생들이 모바일/웹에서 직접 타이핑하기 힘든 모든 값 형태의 답은 반드시 객관식(`multiple_choice`)으로 생성해야 합니다.
- Draw/Sketch/Construct/Show that/Prove/Justify/Explain why → teacher_review (a=모범답안). ★Sketch는 무조건 teacher_review.
- 탭 색칠/선택 → interactive_grid + gridConfig:{type:"triangle_split"|"rect", rows, cols}


## [7] 그림
A. 선언형 도형 graphData.geometry:
- points 좌표 2개[x,y]→2D, 3개[x,y,z]→3D 아이소메트릭.
- circles: center + through 또는 radius.
- angles 배열: text 금지, 반드시 "label" 사용 ({"at":"A","label":"32°"}).

B. 함수그래프·기하도형 graphData.jsxGraph:
- 기하도형 → "elements" 배열. 함수그래프 → "script". 혼용 금지.
- elements 예: circle{id,center,radius} / point{id,coords 또는 on+angle, name,color,label} / segment{from,to} / line{through} / arrow{from,to} / polygon{points} / angle{points:[from,vertex,to],name,radius,label} / rightangle{points,size} / arc{center,from,to} / text{coords,content} / tick{segment,count}
- point: coords[x,y] 또는 on(circleId)+angle(0=오른쪽,반시계+).
- label: {"offset":[dx,dy]} dx오른쪽+ dy위+.
- 색상: blue red green orange purple slate black.
- script 방식은 함수그래프용(board.create('functiongraph',...)).

jsxGraph 필수:
1. 기하→elements, 함수→script(혼용금지)
2. label.offset 항상 명시(angle·named point)
3. 원 위 점→on+angle(Math.cos 직접계산 금지)
4. 참조요소 먼저 선언(circle→point→segment)
5. boundingbox 여백 20%↑
6. 부등식 경계 등호없으면 dash:2
7. 함수 정의역 경계 있으면 firstArrow/lastArrow false
8. ★[초민감] Firestore 2D 중첩배열 오류 방지: coords: [[0,0],[1,0]] 이나 through: [[x,y],[x,y]] 같은 2D 중첩 배열 사용 절대 금지. 대신 보조 점(point)을 미리 정의(visible: false)하고, 그 ID들을 문자열 배열로 참조해 선/세그먼트(through: ["P1", "P2"])를 그릴 것. 축(axis)은 elements에 사용하지 말고 보조 점을 잇는 arrow/segment로 그릴 것.

## [8] solutionSteps
혼자 이해 가능하게 단계별 상세히.
1. explanation = "왜"+"무엇" (단순행위 설명 ✗)
2. workingOut = 수식 한 줄, LaTeX, 단위 포함 ("\\(x=21-8=13\\)")
3. 최소 3단계, 중간계산 생략금지, 연산 여러개면 한 단계 한 연산
4. 첫 단계: 무엇을 구하는지/어떤 공식·원리 쓸지
5. 마지막 단계: 최종답 명확+단위·맥락
6. word problem: 수식 번역 단계 별도
7. 메모성 단계는 workingOut:"" 허용

## [9] 숫자·미지수 교체
원본 숫자·미지수는 바꿔 출제. 구조·난이도 유지, 값만 교체.

## [10] LaTeX
- \( \)로 감쌈. \frac{a}{b}, ^2, \sqrt{}. JSON 내 백슬래시 이스케이프(\\frac).
- 괄호·중괄호 짝 맞춤.
- ★KaTeX array에서 `@` 절대 금지(r@{\quad}l 등 Parse Error). 기본 r/c/l만, 띄어쓰기는 셀 안 \quad.
- ★workingOut에서 3글자↑ 영단어를 \text{} 금지(Parse Error). 단일문자 x 쓰거나 \mathrm{} 사용.
- geometry 라벨은 LaTeX 아님, 유니코드 그대로.

## [11] 정확성·무결성 ⚠️
기하: ①좌표 짐작금지, 수식으로 산출 ②비퇴화 삼각형(세 점 일직선 금지) ③교재 비례 유지(아래 꼭짓점은 y최소) ④NSW 용어(CPCTC 금지→"corresponding angles/sides of congruent triangles are equal") ⑤그림에 없는 조건 given 처리 금지, 합동조건(RHS/SAS) 단계별 증명.
데이터: ★기존 덮어쓰기 금지 — 등록 전 curriculumData.js 조회해 topicId 중복 확인, 있으면 새 topicId·id 체계. 모든 문제 고유 id. question·a 빈문자열 금지. 그림 필요 문제 graphData 채움(null 금지). 모든 문제 빠짐없이.

## [12] 저장·등록
(a) src/constants/seedYear{YEAR}Ch{NUM}Questions.js 에 export const 전체 저장.
(b) Curriculum.jsx 상단 import 추가 + CHAPTER_SEED_REGISTRY에 1줄:
   { chapterId, chapterTitle:'Chapter N: 제목', topicId, topicCode, topicTitle, year, seed, label }
   ★이미 등록된 chapterId/topicId면 import·registry 건드리지 말고 (a) 시드 내용만 교체. 중복 추가 절대 금지.
(c) 안내: "어드민 → Curriculum에서 해당 챕터 '🌱 Seed' 버튼만 누르면 됩니다."

참고: ①비파괴 upsert(전체삭제 후 시드 아님, 수동 문제 보존) ②안정적 고유 ID 고정(랜덤 ID 금지) ③KaTeX array에 @ 금지.

문제 누락·단순화 금지(특히 어려운 문제). 푸시 배포까지 완료.
