# Custom behavior rules for Antigravity Coding Assistant

## [규칙 C] 중첩 LaTeX 구분자 사용 절대 금지 (No Nested LaTeX Delimiters)
* **내용**: `workingOut`, `question`, `options` 등의 수식 데이터 생성 시, 외부 LaTeX 구분자 `\\( ... \\)` 또는 `\\[ ... \\]` 안에 동일한 수식 구분자 `\\( ... \\)` 또는 `\\( ... \\)`가 겹치거나 중첩해서 들어가지 않도록 하십시오.
* **오류 사례**: 
  * `\\(\\text{Final Expression} = \\(m + 3\\)\\)` ❌ (KaTeX 파싱 오류로 붉은색 텍스트가 깨져서 출력됨)
* **올바른 사례**:
  * `\\(\\text{Final Expression} = m + 3\\)` ✅ (단 하나의 수식 래퍼만 사용)
* **원인 및 방지책**: 문자열 조립 시 다른 변수(`ansClean`, `correctText` 등)에 이미 수식 구분자가 포함되어 있는지 반드시 체크하고, 문자열 삽입 전에 이를 완전히 벗겨낸 뒤(Strip) 최종 조립된 형태에서만 바깥쪽에 단 한번만 수식 기호가 적용되도록 가공해야 합니다.
