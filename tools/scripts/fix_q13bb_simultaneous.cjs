const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const filePath = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear12aCh3IQuestions.js';
let content = fs.readFileSync(filePath, 'utf8');
const match = content.match(/export const Y12A_CH3I_QUESTIONS = (\[[\s\S]*\]);$/m);
let questions = eval(match[1]);

let q13bb = questions.find(x => x.id === 'y12a-3i-q13bb');

if (q13bb) {
  q13bb.solutionSteps = [
    { explanation: "Understand the turning point conditions", workingOut: "\\text{A turning point at } (-2, 1) \\text{ means the point lies on the curve, and the gradient (derivative) is zero at } x = -2." },
    { explanation: "Equation 1: Use the derivative condition", workingOut: "y' = 2ax + b \\implies 2a(-2) + b = 0 \\implies -4a + b = 0 \\implies b = 4a" },
    { explanation: "Equation 2: Use the point condition", workingOut: "y(-2) = 1 \\implies a(-2)^2 + b(-2) + 5 = 1 \\implies 4a - 2b = -4 \\implies 2a - b = -2" },
    { explanation: "Solve the simultaneous equations for b", workingOut: "\\text{We have two equations:}\\\\ \\text{1) } b = 4a\\\\ \\text{2) } 2a - b = -2\\\\ \\text{Substitute (1) into (2):}\\\\ 2a - (4a) = -2 \\implies -2a = -2 \\implies a = 1.\\\\ \\text{Now substitute } a = 1 \\text{ back into equation (1) to find } b:\\\\ b = 4(1) = 4" }
  ];
}

const newArrayStr = JSON.stringify(questions, null, 2).replace(/"([^"]+)":/g, '$1:');
fs.writeFileSync(filePath, content.substring(0, match.index) + 'export const Y12A_CH3I_QUESTIONS = ' + newArrayStr + ';\n', 'utf8');

async function updateDb() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  if (q13bb) {
    await db.collection('questions').doc('y12a-3i-q13bb').update({
      solutionSteps: q13bb.solutionSteps
    });
    console.log('Updated in DB: y12a-3i-q13bb');
  }
  
  process.exit(0);
}
updateDb();
