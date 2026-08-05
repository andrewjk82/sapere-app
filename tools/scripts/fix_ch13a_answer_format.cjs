const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const filePath = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear10Ch13AQuestions.js';
let content = fs.readFileSync(filePath, 'utf8');
const match = content.match(/export const Y10_CH13A_QUESTIONS = (\[[\s\S]*\]);$/m);
let questions = eval(match[1]);

async function run() {
  let updatedCount = 0;
  for (let q of questions) {
    if (q.id.match(/^y10-13a-q[2345]/)) {
      // It is a multiple choice question. The correct option is at index 2 (which I spliced).
      q.answer = 2;
      q.a = 2; // Also set 'a' just in case the UI falls back to it
      updatedCount++;
    }
  }
  
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  for (let q of questions) {
    if (q.id.match(/^y10-13a-q[2345]/)) {
      const docRef = db.collection('questions').doc(q.id);
      await docRef.update({
        answer: q.answer,
        a: q.a
      });
      console.log('Fixed answer format in DB for', q.id);
    }
  }
  
  const newArrayStr = JSON.stringify(questions, null, 2).replace(/"([^"]+)":/g, '$1:');
  fs.writeFileSync(filePath, content.substring(0, match.index) + 'export const Y10_CH13A_QUESTIONS = ' + newArrayStr + ';\n', 'utf8');
  console.log('Updated local seed file answer format. Total updated:', updatedCount);
  process.exit(0);
}

run();
