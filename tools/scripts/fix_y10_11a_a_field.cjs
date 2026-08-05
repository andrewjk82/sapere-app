const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const filePath = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear10Ch11AQuestions.js';
let content = fs.readFileSync(filePath, 'utf8');
const match = content.match(/export const Y10_CH11A_QUESTIONS = (\[[\s\S]*\]);$/m);
let Y10_CH11A_QUESTIONS = eval(match[1]);

const checkQs = Y10_CH11A_QUESTIONS.filter(q => q.id.startsWith('y10-11a-q3') || q.id.startsWith('y10-11a-q4'));

checkQs.forEach(q => {
  // Extract point and circle radius from question string
  // e.g. "Check whether or not the point \((5, 5)\) lies on the circle \(x^2 + y^2 = 50\)."
  const pointMatch = q.question.match(/\\\(\(([-\d]+),\s*([-\d]+)\)\\\)/);
  const circleMatch = q.question.match(/x\^2 \+ y\^2 = (\d+)/);
  
  if (pointMatch && circleMatch) {
    const x = parseInt(pointMatch[1], 10);
    const y = parseInt(pointMatch[2], 10);
    const r2 = parseInt(circleMatch[1], 10);
    
    const isYes = (x * x + y * y === r2);
    
    // Standardize opts to 4 choices so the UI doesn't freak out
    q.opts = ['Yes', 'No', 'Cannot be determined', 'None of the above'];
    q.a = isYes ? 0 : 1;
    q.answer = isYes ? '0' : '1';
    
    // Also clean solution to match
    q.solution = 'The correct answer is ' + (isYes ? 'Yes' : 'No') + '.';
  }
});

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  for (const q of checkQs) {
    const docRef = db.collection('questions').doc(q.id);
    const doc = await docRef.get();
    if (doc.exists) {
      await docRef.update({
        opts: q.opts,
        a: q.a,
        answer: q.answer,
        solution: q.solution
      });
      console.log('Fixed', q.id, 'in Firestore with a:', q.a, 'and opts:', q.opts);
    }
  }

  const newArrayStr = JSON.stringify(Y10_CH11A_QUESTIONS, null, 2)
    .replace(/"([^"]+)":/g, '$1:');
  
  fs.writeFileSync(filePath, content.substring(0, match.index) + 'export const Y10_CH11A_QUESTIONS = ' + newArrayStr + ';\n', 'utf8');
  console.log('Updated local seed file.');
  process.exit(0);
}

run();
