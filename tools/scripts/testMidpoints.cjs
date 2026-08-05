const fs = require('fs');

const pathOrig = './src/constants/seedYear9Ch11BQuestions.js';
let contentOrig = fs.readFileSync(pathOrig, 'utf8');
const matchOrig = contentOrig.match(/export const Y9_CH11B_QUESTIONS = (\[[\s\S]*?\]);\n/);
let qOrig = eval(matchOrig[1]);

let failed = [];
let passed = [];

for (let i = 0; i < 15; i++) {
  const q = qOrig[i];
  // check if solutionSteps contains the raw template "Given: read the full stem carefully..."
  if (JSON.stringify(q.solutionSteps).includes("Given: read the full stem carefully")) {
    failed.push(q.id);
  } else {
    passed.push(q.id);
  }
}

console.log("Failed to update step-by-step for:", failed);
console.log("Passed:", passed);
