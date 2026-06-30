Year12 Advanced Ch1G   기존 문제들을 분석후 그 문제들을 기반으로 고난도 문제 100개 추가해

수학 교육용 서비스의 문제 시드 데이터(JSON/JS Array 포맷)를 다음 3가지 규칙에 맞추어 변환해주세요.

### [규칙 1] 모든 객관식(multiple_choice) 옵션의 LaTeX 구분자 수정
- 객관식 문항의 `options` 배열 내부 요소 중, 수식이 포함된 경우 기존의 `$` 기호를 절대 사용하지 말고, 반드시 `\\( ... \\)` 인라인 수식 구분자로 수정해주세요.
- 예:
  * [AS-IS] `'$5, 6, 7, 8$'` 또는 `'$5$, $6$, $7$, $8$'`
  * [TO-BE] `'\\(5, 6, 7, 8\\)'`

### [규칙 2] Step-by-Step 솔루션 구조 적용 (`solutionSteps`)
- 자세한 단계별 설명 -> 학생들이 쉽게 이해 할수 있도록
- 기존의 단일 HTML 문자열 형태의 `solution` 값을 사용하지 마세요.
- 대신, `solutionSteps` 필드를 추가하여 3~5단계의 상세 해설을 포함하는 객체 배열(`[{ explanation, workingOut, graphData }]`) 형태로 변환해주세요.
- 각각의 스텝은 다음을 만족해야 합니다:
  1. `explanation`: 해당 단계에서 풀어야 할 원리 또는 목적을 설명하는 한글/영어 텍스트 (마크다운 특수문자 없이 깔끔한 텍스트 선호).
  2. `workingOut`: 수식 계산 과정. **반드시 LaTeX 수식 형태여야 함**.
  3. `graphData`: 그래프가 필요 없을 경우 `null`.

### [규칙 3] 수식 계산식(`workingOut`) 내 특수 기호 이중 이스케이프 및 LaTeX 인라인 래핑
- 수식 계산 과정(`workingOut`)에서 집합 기호 `{ }`나 특수 문자 등을 사용할 때는 반드시 LaTeX 기호(`\\{` 및 `\\}`)로 작성하고, 이를 감싸는 인라인 구분자 `\\( ... \\)`를 붙여주세요.
- 구분자가 생략되면 수식 엔진이 텍스트로 오인하여 백슬래시가 화면에 깨져서 노출됩니다.
- 예:
  * [AS-IS] `"workingOut: '\\{0, 1, 2, 3, 4, 5\\}'"` (렌더링 시 `\{0, 1, 2, 3, 4, 5\}`로 깨짐)
  * [TO-BE] `"workingOut: '\\(\\{0, 1, 2, 3, 4, 5\\}\\)'"` (렌더링 시 수식으로 정상 변환됨)
- 멀티플 초이스에 가능한 답이 잘 보이게 가끔 식도 들어가는데 불필요한 식을 여기에 적을 필요없어

## [13] 추가 시드 변환 규칙 (초중요)

### [규칙 1] 모든 객관식(multiple_choice) 옵션의 LaTeX 구분자 수정
- 객관식 문항의 `options` 배열 내부 요소 중, 수식이 포함된 경우 기존의 `$` 기호를 절대 사용하지 말고, 반드시 `\\( ... \\)` 인라인 수식 구분자로 수정해주세요.
- 예:
  * [AS-IS] `'$5, 6, 7, 8$'` 또는 `'$5$, $6$, $7$, $8$'`
  * [TO-BE] `'\\(5, 6, 7, 8\\)'`

### [규칙 2] Step-by-Step 솔루션 구조 적용 (`solutionSteps`)
- 자세한 단계별 설명 -> 학생들이 쉽게 이해 할수 있도록
- 기존의 단일 HTML 문자열 형태의 `solution` 값을 사용하지 마세요.
- 대신, `solutionSteps` 필드를 추가하여 3~5단계의 상세 해설을 포함하는 객체 배열(`[{ explanation, workingOut, graphData }]`) 형태로 변환해주세요.
- 각각의 스텝은 다음을 만족해야 합니다:
  1. `explanation`: 해당 단계에서 풀어야 할 원리 또는 목적을 설명하는 한글/영어 텍스트 (마크다운 특수문자 없이 깔끔한 텍스트 선호).
  2. `workingOut`: 수식 계산 과정. **반드시 LaTeX 수식 형태여야 함**.
  3. `graphData`: 그래프가 필요 없을 경우 `null`.

## [8] solutionSteps (최소 3~5단계 상세 풀이 프로세스)
  학생들이 중간 과정을 전혀 건너뛰지 않고 혼자서도 완벽하게 이해할 수 있도록 극도로 상세하게 구성해야 합니다.

  1. **상세한 설명 (explanation)**:
     - 단순한 행위(예: "x를 구합니다", "방정식을 풉니다")의 나열은 절대 금지합니다.
     - "이 단계에서 이 공식을 사용해야 하는 수학적 이유(Why)"와 "이것을 통해 도출하고자 하는 중간 목표(What)"를 최소 2문장 이상의 구체적인 한글/영어 설명으로 기술해야 합니다.
  2. **연산 과정 세분화 (workingOut)**:
     - 한 단계(Step)에는 오직 **하나의 연산이나 한 줄의 논리적 전개**만 포함해야 합니다.
     - 여러 계산 프로세스나 연산(이항, 약분, 양변 제곱 등)을 하나의 스텝에서 한 번에 건너뛰며 계산하지 마세요. 중간 이항 과정이나 식 정리 과정도 개별 스텝으로 쪼개서 친절하게 전부 보여주어야 합니다.
     - 모든 수식식은 예외 없이 LaTeX `\\( ... \\)` 로 감싸야 합니다.
  3. **첫 단계의 명확성**:
     - 문제 풀이를 시작하기 전, 문제에서 주어진 조건(Given)들을 먼저 정리하고 어떤 공식이나 정리(Theorem)를 적용할 것인지 계획을 세우는 단계를 반드시 첫 번째 스텝으로 잡습니다.
  4. **마지막 단계의 완결성**:
     - 최종 계산 결과만 툭 던지는 것이 아니라, 최종 답을 구한 뒤 그 답이 문제의 맥락(예: 실생활 문제에서의 단위, 변수의 정의 범위 부합 여부)에서 어떤 의미를 갖는지 명확하게 설명하며 마무리해야 합니다.


### [규칙 3] 수식 계산식(`workingOut`) 내 특수 기호 이중 이스케이프 및 LaTeX 인라인 래핑
- 수식 계산 과정(`workingOut`)에서 집합 기호 `{ }`나 특수 문자 등을 사용할 때는 반드시 LaTeX 기호(`\\{` 및 `\\}`)로 작성하고, 이를 감싸는 인라인 구분자 `\\( ... \\)`를 붙여주세요.
- 구분자가 생략되면 수식 엔진이 텍스트로 오인하여 백슬래시가 화면에 깨져서 노출됩니다.
- 예:
  * [AS-IS] `"workingOut: '\\{0, 1, 2, 3, 4, 5\\}'"` (렌더링 시 `\{0, 1, 2, 3, 4, 5\}`로 깨짐)
  * [TO-BE] `"workingOut: '\\(\\{0, 1, 2, 3, 4, 5\\}\\)'"` (렌더링 시 수식으로 정상 변환됨)
- 멀티플 초이스에 가능한 답이 잘 보이게 가끔 식도 들어가는데 불필요한 식을 여기에 적을 필요없어

### [규칙 6] 서술형 및 증명형 문제(`teacher_review`)의 줄바꿈 규칙
- `teacher_review` 타입 문항의 `answer` 필드 및 `solutionSteps` 내부 단계별 텍스트는 브라우저 렌더링 시 자동으로 한 줄로 뭉쳐서 표시되는 문제를 원천 차단하기 위해, 문장 끝 마침표(`.`)를 기준으로 반드시 줄바꿈 기호(`\\n`)를 명시적으로 추가하여 문장 단위로 줄바꿈이 깔끔하게 표시되도록 포맷팅해야 합니다.


### CRITICAL RULES FOR QUESTION DIVERSITY:
1. **NO SIMPLE VALUE LOOPING**: Absolutely do not generate questions by using the same template/context and just looping or changing numbers. Every single question must have a unique scenario, context, and mathematical structure.
2. **CONTEXT & ENTITY DIVERSITY**:
   - Randomize all names, company names, items, objects, and scenarios (e.g., instead of just "selling laptops", use specialized industrial robotics, cryptocurrency value changes, logistics yields, local wildlife populations, chemistry mixtures, crop growth, etc.).
   - Do not reuse the same story or scenario setup twice in the same chapter.
3. **MATHEMATICAL VARIATION**:
   - Vary the question structures. For example, in percentages, combine: reverse percentage calculations, multi-stage markups/discounts, fractions-to-percentage conversions, finding the unknown percentage rate, and compound changes over different periods.
   - Mix positive and negative changes, compound vs flat changes, and different rounding constraints (e.g., nearest dollar, nearest cent, 2 decimal places, nearest integer).
4. **UNIQUE DISTRACTORS**: Multiple-choice options must be calculated dynamically based on the specific math of that question, not generic offsets.

### [규칙 A] answer 인덱스 무결성 ⚠️ 절대 위반 금지
MC 문항의 `a` 필드 작성 절차:
1. opts 배열을 먼저 확정한다
2. 정답이 opts[몇 번째]인지 세어본다 (0부터 시작)
3. 그 숫자(정수)를 `a`에 적는다
4. ★자가검증: opts[a] === 정답 텍스트 인지 눈으로 확인
금지:
- a: "0"  ❌  (문자열 금지, 반드시 정수)
- a: "Option A" ❌
- a: "x = 5" ❌
예시:
opts: ["\\(2\\)", "\\(4\\)", "\\(6\\)", "\\(8\\)"] 이고 정답이 6이면
→ a: 2  ✅  (opts[2] === "\\(6\\)")
### [규칙 B] 다양성 ⚠️ 절대 위반 금지
1. 같은 시나리오에 숫자만 바꿔서 반복 출제 금지
2. 매 문제마다 다른 컨텍스트 사용
   (예: 로봇, 항공기, 농업, 의료기기, 선박, 화학, 야생동물, 부동산 등)
3. 같은 스토리 두 번 사용 금지
4. 수학 구조도 다양하게:
   - 순방향 계산 / 역산(원래 값 구하기) / 변화율 구하기 / 기간 구하기
   - 단계 비교 / 세금+감가 혼합 / 매각 손익 / 퍼센트 감소율 등
5. 오답 보기는 실제 계산 실수 기반으로 동적 생성
   (n-1 실수, 단리 혼동, 반올림 오류 등)

---

## 🛠️ 변환 대상 데이터 예시 (여기에 대상 코드를 붙여넣으세요)

[여기에 수정이 필요한 JSON/JS Array 문제 데이터를 넣어주세요]
