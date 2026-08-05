const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const filePath = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear10Ch13AQuestions.js';
let content = fs.readFileSync(filePath, 'utf8');
const match = content.match(/export const Y10_CH13A_QUESTIONS = (\[[\s\S]*\]);$/m);
let questions = eval(match[1]);

const q = questions.find(x => x.id === 'y10-13a-q4g');

const betaAngle = q.graphData.jsxGraph.elements.find(e => e.type === 'angle' && e.name === 'β');
if (betaAngle) {
  betaAngle.isReflex = true;
}

const newArrayStr = JSON.stringify(questions, null, 2).replace(/"([^"]+)":/g, '$1:');
fs.writeFileSync(filePath, content.substring(0, match.index) + 'export const Y10_CH13A_QUESTIONS = ' + newArrayStr + ';\n', 'utf8');
console.log('Added isReflex to q4g beta angle.');
