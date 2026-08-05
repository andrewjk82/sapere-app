const fs = require('fs');
const pathOrig = './src/constants/seedYear9Ch11CQuestions.js';
let contentOrig = fs.readFileSync(pathOrig, 'utf8');
const matchOrig = contentOrig.match(/export const Y9_CH11C_QUESTIONS = (\[[\s\S]*?\]);\n/);
let qOrig = eval(matchOrig[1]);

let toFix = [];

for (let i = 0; i < qOrig.length; i++) {
  const q = qOrig[i];
  if (JSON.stringify(q.solutionSteps).includes("Given: read") && q.type === 'multiple_choice') {
    toFix.push(q);
    if (toFix.length >= 10) break;
  }
}

toFix.forEach(q => {
  console.log(`\nID: ${q.id}`);
  console.log(`Q: ${q.question.split('\n').join(' ')}`);
  console.log(`A: ${q.solution}`);
  console.log(`opts: ${q.opts}`);
});
