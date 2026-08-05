const fs = require('fs');
const path = require('path');

const p = path.resolve('.agents/skills/sapere-question-audit/SKILL.md');
let content = fs.readFileSync(p, 'utf8');

const newCategory = `
---

## 8. Category H: LaTeX Formatting (Math Mode Wrappers & Fractions)

**Symptoms:**
- 수학 수식 문자열(예: \`LHS = ...\`)이 화면에 일반 텍스트로 렌더링되거나 이탤릭체(\`cos\`)가 섞여 나옴.
- "MODEL ANSWER" UI 텍스트 렌더링이 깨짐.
- 분수나 곱셈이 \`1 / \\cos x\` 이나 \`\\tan x * \\sin x\` 같은 원시적인 텍스트 형태로 렌더링됨.

**Diagnosis & Root Causes:**
- **Missing Wrappers**: Sapere 앱은 문자열이 수학 공식임을 인식하기 위해 반드시 문자열 전체 또는 수식 부분 앞뒤에 LaTeX Math Mode 구분자인 \`\\(\` 와 \`\\)\` 를 필요로 합니다. 이게 없으면 \`\\sin\` 을 써도 MathJax가 구동되지 않습니다.
  - 특히 \`solutionSteps\`의 \`workingOut\` 필드나 서술형 문항의 \`answer\` / \`solution\` 필드에서 자주 누락됩니다.
- **Poor Fractions & Asterisks**: 과거 데이터가 빗금(\`/\`)을 분수로, 별표(\`*\`)를 곱셈으로 썼습니다. LaTeX에서는 \`\\frac{a}{b}\` 와 띄어쓰기(또는 \`\\cdot\`)를 사용해야 합니다.

**Fix Workflow:**
1. \`solutionSteps\`를 동적으로 생성하는 스크립트를 작성할 때, \`workingOut\` 속성에 들어가는 모든 수식 문자열의 양 끝을 \`\\(\` 와 \`\\)\` 로 감싸는 코드를 반드시 포함하세요.
2. 서술형 문항(\`type: 'teacher_review'\`)의 \`answer\` 와 \`solution\` 필드를 스캔하여, 수식이 포함되어 있다면 양 끝에 \`\\(\` 와 \`\\)\` 가 있는지 확인하고 없으면 씌웁니다.
3. \`answer\` 와 \`solution\` 필드를 스캔하여 \`/\` 또는 \`*\` 기호가 사용된 수식이 있다면, 이를 정규 LaTeX 포맷인 \`\\frac{numerator}{denominator}\` 로 치환하는 스크립트를 작성하여 Firestore에 병합합니다.
`;

if (!content.includes('Category H: LaTeX Formatting')) {
  fs.writeFileSync(p, content + newCategory, 'utf8');
  console.log('Category H appended successfully.');
} else {
  console.log('Category H already exists.');
}
