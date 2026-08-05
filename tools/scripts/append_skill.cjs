const fs = require('fs');
const path = require('path');
const p = path.resolve('.agents/skills/sapere-question-audit/SKILL.md');
let content = fs.readFileSync(p, 'utf8');

const newCategory = `
---

## 6. Category F: Multipart & Parent Question UI Rendering Issues (다지선다 부모 문항 UI 버그)

**Symptoms:**
- 객관식 문제인데 앱에서 주관식 입력창("Type answer...")이 나타남.
- a), b), c) 서브 문제들의 지문이 엉망이거나 부모 지문에 불필요한 a) b) c) 목록이 중복 표시됨.
- Step-by-step 해설이 각 문제 하단에 한 번, 카드 제일 하단에 또 한 번 중복 출력됨.
- 특정 텍스트(예: $10)가 화면 밖으로 뚫고 나감(CSS Overflow).

**Diagnosis & Root Causes:**
1. **Parent Document Priority**: UI는 독립된 하위 문서(\`q10a\`)보다 부모 문서(\`q10\`)의 \`subQuestions\` 배열을 우선하여 통째로 렌더링합니다. 개별 문서만 고치고 부모 문서 내부 데이터를 안 고치면 화면에 반영되지 않습니다.
2. **isManual Toggle**: \`isManual: true\`이면 \`type: 'multiple_choice'\`라도 강제로 주관식 텍스트 입력창이 열립니다.
3. **Legacy opts vs Modern options**: 앱은 구형 \`opts\` 문자열 배열 대신 \`options: [{ text, imageUrl }]\` 객체 배열을 요구합니다.
4. **LaTeX Regex Bug**: 과거 스크립트가 돈(Money) 기호 \`$10 ... $10\`을 맹목적으로 수학 수식 \`\\(10 ... \\)10\`으로 변환해버려, 브라우저가 이를 하나의 쪼갤 수 없는 수식 블록으로 간주해 화면 밖으로 밀어냅니다.

**Fix Workflow (필수 준수):**
1. **부모 문서 내부 \`subQuestions\` 업데이트**:
   - 하위 문제의 수정된 데이터를 부모 문서의 \`subQuestions\` 배열 안의 객체들에 덮어씌워야 합니다.
   - 반드시 \`isManual: false\`로 설정하고, \`options\` 배열을 채워 넣으세요.
2. **부모 문항 지문(Stem) 청소**:
   - 부모 \`question\` 필드에 나열된 불필요한 \`a) ... b) ...\` 텍스트를 정규식이나 \`split\`으로 깔끔하게 잘라내어 메인 상황만 남깁니다.
3. **부모 문항 \`solutionSteps\` 비우기**:
   - 하위 문제마다 해설을 넣었다면, 부모 문서의 \`solutionSteps\`는 \`[]\`로 비워 중복 출력을 방지합니다.
4. **수식 렌더링 오작동(Overflow) 복구**:
   - \`\\(10 ... \\)10\` 처럼 잘못 묶인 달러 기호를 찾아 다시 \`$10\` 일반 텍스트로 되돌려 줄바꿈이 정상 작동하게 합니다.
`;

fs.writeFileSync(p, content + newCategory, 'utf8');
console.log('Appended Category F to SKILL.md');
