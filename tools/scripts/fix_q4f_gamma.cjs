const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const filePath = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear10Ch13AQuestions.js';
let content = fs.readFileSync(filePath, 'utf8');
const match = content.match(/export const Y10_CH13A_QUESTIONS = (\[[\s\S]*\]);$/m);
let questions = eval(match[1]);

const q = questions.find(x => x.id === 'y10-13a-q4f');

// Match the actual unicode character 'γ'
const gammaAngle = q.graphData.jsxGraph.elements.find(e => e.type === 'angle' && e.name === 'γ');
if (gammaAngle) {
  gammaAngle.points = ['O', 'P', 'Q'];
} else {
  console.log("Could not find gamma angle!");
}

const newArrayStr = JSON.stringify(questions, null, 2).replace(/"([^"]+)":/g, '$1:');
fs.writeFileSync(filePath, content.substring(0, match.index) + 'export const Y10_CH13A_QUESTIONS = ' + newArrayStr + ';\n', 'utf8');
console.log('Fixed q4f points in seed file.');
