const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const filePath = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear10Ch11AQuestions.js';
let content = fs.readFileSync(filePath, 'utf8');
const match = content.match(/export const Y10_CH11A_QUESTIONS = (\[[\s\S]*\]);$/m);
let Y10_CH11A_QUESTIONS = eval(match[1]);

const fixIds = ['y10-11a-q3e', 'y10-11a-q4e'];

fixIds.forEach(id => {
  const q = Y10_CH11A_QUESTIONS.find(x => x.id === id);
  if (q) {
    q.opts = ['Yes', 'No', 'Cannot be determined', 'None of the above'];
    q.a = 0; // Both are YES
    q.answer = '0';
    q.solution = 'The correct answer is Yes.';
  }
});

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  for (const id of fixIds) {
    const q = Y10_CH11A_QUESTIONS.find(x => x.id === id);
    const docRef = db.collection('questions').doc(id);
    const doc = await docRef.get();
    if (doc.exists) {
      await docRef.update({
        opts: q.opts,
        a: q.a,
        answer: q.answer,
        solution: q.solution
      });
      console.log('Fixed', id, 'in Firestore');
    }
  }

  const newArrayStr = JSON.stringify(Y10_CH11A_QUESTIONS, null, 2)
    .replace(/"([^"]+)":/g, '$1:');
  
  fs.writeFileSync(filePath, content.substring(0, match.index) + 'export const Y10_CH11A_QUESTIONS = ' + newArrayStr + ';\n', 'utf8');
  console.log('Updated local seed file.');
  process.exit(0);
}

run();
