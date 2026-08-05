const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const filePath = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear10Ch13AQuestions.js';
let content = fs.readFileSync(filePath, 'utf8');
const match = content.match(/export const Y10_CH13A_QUESTIONS = (\[[\s\S]*\]);$/m);
let questions = eval(match[1]);

function fixFractions(str) {
  if (!str) return str;
  // Replace (A - B) / 2 with \frac{A - B}{2}
  let s = str.replace(/\(([^)]+)\)\s*\/\s*2/g, '\\frac{$1}{2}');
  // Replace X^\circ / 2 with \frac{X^\circ}{2}
  s = s.replace(/(\d+\^\\circ)\s*\/\s*2/g, '\\frac{$1}{2}');
  // Replace X^\circ / Y with \frac{X^\circ}{Y} if there are any others
  s = s.replace(/(\d+\^\\circ)\s*\/\s*(\d+)/g, '\\frac{$1}{$2}');
  return s;
}

async function run() {
  let updatedCount = 0;
  for (let q of questions) {
    if (q.id.startsWith('y10-13a-q') && q.solutionSteps) {
      let changed = false;
      q.solutionSteps.forEach(step => {
        let oldWorkingOut = step.workingOut;
        step.workingOut = fixFractions(step.workingOut);
        if (oldWorkingOut !== step.workingOut) {
          changed = true;
        }
      });
      if (changed) {
        updatedCount++;
      }
    }
  }
  
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  for (let q of questions) {
    if (q.id.startsWith('y10-13a-q') && q.solutionSteps) {
      const docRef = db.collection('questions').doc(q.id);
      await docRef.update({
        solutionSteps: q.solutionSteps
      });
      console.log('Updated fractions in DB for', q.id);
    }
  }
  
  const newArrayStr = JSON.stringify(questions, null, 2).replace(/"([^"]+)":/g, '$1:');
  fs.writeFileSync(filePath, content.substring(0, match.index) + 'export const Y10_CH13A_QUESTIONS = ' + newArrayStr + ';\n', 'utf8');
  console.log('Updated local seed file fractions. Total updated:', updatedCount);
  process.exit(0);
}

run();
