const fs = require('fs');
const path = require('path');
const p = path.resolve('.agents/skills/sapere-question-audit/SKILL.md');
let content = fs.readFileSync(p, 'utf8');

const newCategory = `
---

## 7. Category G: Missing LaTeX Backslashes on Math Functions (수식 이탤릭체 렌더링 오류)

**Symptoms:**
- 객관식 보기나 문제 본문에 있는 삼각함수(sin, cos, tan 등)가 정직한 함수 폰트가 아니라 변수들의 곱처럼 이탤릭체(\\(sin\\) 대신 \\(s \\times i \\times n\\) 느낌)로 누워서 렌더링 됨.
- 특정 보기만 글씨체가 다르게 보임.

**Diagnosis & Root Causes:**
- LaTeX에서 함수를 인식하려면 반드시 백슬래시(\`\\\`)가 앞에 있어야 합니다. (\`\\sin\`, \`\\cos\`).
- 과거 데이터 이관 중 혹은 정규식 변환 중, \`\\(sin x\\)\` 와 같이 백슬래시가 누락된 채로 데이터베이스에 들어간 경우, LaTeX 엔진은 이를 \`s * i * n * x\` 로 취급하여 모두 이탤릭체로 기울입니다.

**Fix Workflow:**
1. 시드(Seed) 파일 전체를 훑어 \`\\( ... \\)\` 내부의 \`sin, cos, tan, csc, sec, cot\` 앞의 백슬래시 누락을 찾습니다.
2. JavaScript 정규식을 사용하여 안전하게 백슬래시를 추가하는 스크립트를 작성합니다.
   - 예시: \`str.replace(/(?<![a-zA-Z\\\\])(sin|cos|tan|csc|sec|cot)(?![a-zA-Z])/g, '\\\\\\\\$1');\`
   - 주의: \`cosine\` 같은 단어 내부의 \`cos\`를 치환하지 않도록 부정형 전방/후방 탐색(Negative Lookaround)을 반드시 사용해야 합니다.
3. 수정된 시드 데이터를 다시 Firestore에 병합(merge) 또는 덮어쓰기 합니다.
`;

if (!content.includes('Category G: Missing LaTeX Backslashes')) {
  fs.writeFileSync(p, content + newCategory, 'utf8');
  console.log('Appended Category G successfully.');
} else {
  console.log('Category G already exists.');
}
