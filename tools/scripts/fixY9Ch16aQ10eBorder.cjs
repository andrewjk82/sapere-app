const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const path = './src/constants/seedYear9Ch16Questions.js';
let content = fs.readFileSync(path, 'utf8');

const arrayMatch = content.match(/export const Y9_CH16_QUESTIONS = (\[[\s\S]*?\]);\n/);
if (!arrayMatch) throw new Error("No array found");

let questions = eval(arrayMatch[1]);
const qIndex = questions.findIndex(x => x.id === 'y9-16a-q10e');
if (qIndex === -1) throw new Error("Question not found");

// Remove border from style
if (questions[qIndex].graphData && questions[qIndex].graphData.svg) {
  questions[qIndex].graphData.svg = questions[qIndex].graphData.svg.replace('border:1px solid #e2e8f0;', '');
}
if (questions[qIndex].solutionSteps && questions[qIndex].solutionSteps[0] && questions[qIndex].solutionSteps[0].graphData) {
  questions[qIndex].solutionSteps[0].graphData.svg = questions[qIndex].solutionSteps[0].graphData.svg.replace('border:1px solid #e2e8f0;', '');
}

const newContent = `export const Y9_CH16_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(path, newContent, 'utf8');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  await db.collection('questions').doc('y9-16a-q10e').update({
    graphData: questions[qIndex].graphData,
    solutionSteps: questions[qIndex].solutionSteps,
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.doc('sync_meta/questions').update({
    version: Date.now(),
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Successfully removed border in DB.');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
