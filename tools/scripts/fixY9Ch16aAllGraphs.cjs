const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const path = './src/constants/seedYear9Ch16Questions.js';
let content = fs.readFileSync(path, 'utf8');

const arrayMatch = content.match(/export const Y9_CH16_QUESTIONS = (\[[\s\S]*?\]);\n/);
if (!arrayMatch) throw new Error("No array found");

let questions = eval(arrayMatch[1]);
let updatedQuestionIds = [];

questions = questions.map(q => {
  if (q.id && q.id.startsWith('y9-16a-')) {
    let updated = false;

    // Process main graphData
    if (q.graphData && q.graphData.svg) {
      if (q.graphData.svg.includes('background-color:#f8fafc') || q.graphData.svg.includes('border:1px solid #e2e8f0;')) {
        q.graphData.svg = q.graphData.svg
          .replace(/background-color:#f8fafc;?/g, 'background-color:#ffffff;')
          .replace(/border:1px solid #e2e8f0;?/g, '');
        updated = true;
      }
    }

    // Process solutionSteps
    if (q.solutionSteps) {
      q.solutionSteps.forEach(step => {
        if (step.graphData && step.graphData.svg) {
          if (step.graphData.svg.includes('background-color:#f8fafc') || step.graphData.svg.includes('border:1px solid #e2e8f0;')) {
            step.graphData.svg = step.graphData.svg
              .replace(/background-color:#f8fafc;?/g, 'background-color:#ffffff;')
              .replace(/border:1px solid #e2e8f0;?/g, '');
            updated = true;
          }
        }
      });
    }

    if (updated) {
      updatedQuestionIds.push(q.id);
    }
  }
  return q;
});

const newContent = `export const Y9_CH16_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(path, newContent, 'utf8');
console.log(`Locally updated ${updatedQuestionIds.length} questions.`);

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  const batch = db.batch();
  for (const id of updatedQuestionIds) {
    const docRef = db.collection('questions').doc(id);
    const q = questions.find(x => x.id === id);
    batch.update(docRef, {
      graphData: q.graphData || null,
      solutionSteps: q.solutionSteps || null,
      updatedAt: FieldValue.serverTimestamp()
    });
  }

  if (updatedQuestionIds.length > 0) {
    const metaRef = db.doc('sync_meta/questions');
    batch.update(metaRef, {
      version: Date.now(),
      updatedAt: FieldValue.serverTimestamp()
    });
    await batch.commit();
    console.log(`Successfully batch updated ${updatedQuestionIds.length} questions in Firebase.`);
  }
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
