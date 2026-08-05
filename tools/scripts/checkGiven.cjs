const fs = require('fs');

const pathOrig = './src/constants/seedYear9Ch11BQuestions.js';
let contentOrig = fs.readFileSync(pathOrig, 'utf8');
const matchOrig = contentOrig.match(/export const Y9_CH11B_QUESTIONS = (\[[\s\S]*?\]);\n/);
let qOrig = eval(matchOrig[1]);

let failed = [];

for (let i = 0; i < qOrig.length; i++) {
  const q = qOrig[i];
  if (JSON.stringify(q.solutionSteps).includes("Given: read")) {
    failed.push(q.id);
  }
}

console.log("Still raw templates:", failed);
