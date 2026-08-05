const fs = require('fs');
const pathOrig = './src/constants/seedYear9Ch11BQuestions.js';
let contentOrig = fs.readFileSync(pathOrig, 'utf8');
const matchOrig = contentOrig.match(/export const Y9_CH11B_QUESTIONS = (\[[\s\S]*?\]);\n/);
let qOrig = eval(matchOrig[1]);

const failed = [
  'y9-11b-q4a', 'y9-11b-q4b', 'y9-11b-q4c', 'y9-11b-q4d',
  'y9-11b-q5a', 'y9-11b-q5b', 'y9-11b-q5c', 'y9-11b-q6',
  'y9-11b-q7',  'y9-11b-q8a', 'y9-11b-q8b', 'y9-11b-q8c',
  'y9-11b-q9a', 'y9-11b-q9b'
];

for (let i = 0; i < qOrig.length; i++) {
  if (failed.includes(qOrig[i].id)) {
    console.log(`\nID: ${qOrig[i].id}`);
    console.log(`Q: ${qOrig[i].question.split('\n').join(' ')}`);
    console.log(`A: ${qOrig[i].solution}`);
  }
}
