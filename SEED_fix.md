Ch1E 고난도 문제 100개 추가하고 그리고 반드시 show that, prove, skectch 빼고는 모두 멀티플초이스로 바꾸야해

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



---

## 🛠️ 변환 대상 데이터 예시 (여기에 대상 코드를 붙여넣으세요)

[여기에 수정이 필요한 JSON/JS Array 문제 데이터를 넣어주세요]
