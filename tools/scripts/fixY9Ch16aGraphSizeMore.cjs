const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const path = './src/constants/seedYear9Ch16Questions.js';
let content = fs.readFileSync(path, 'utf8');

const arrayMatch = content.match(/export const Y9_CH16_QUESTIONS = (\[[\s\S]*?\]);\n/);
if (!arrayMatch) throw new Error("No array found");

let questions = eval(arrayMatch[1]);
let updatedQuestionIds = [];

const reduceMaxWidth = (svgStr) => {
  return svgStr.replace(/max-width:(\d+)px/g, (match, p1) => {
    const originalWidth = parseInt(p1, 10);
    const newWidth = Math.round(originalWidth * 0.7); // Reduce by another 30%
    return `max-width:${newWidth}px`;
  });
};

questions = questions.map(q => {
  if (q.id && q.id.startsWith('y9-16a-')) {
    let updated = false;

    // Process main graphData
    if (q.graphData && q.graphData.svg) {
      const newSvg = reduceMaxWidth(q.graphData.svg);
      if (newSvg !== q.graphData.svg) {
        q.graphData.svg = newSvg;
        updated = true;
      }
    }

    // Process solutionSteps
    if (q.solutionSteps) {
      q.solutionSteps.forEach(step => {
        if (step.graphData && step.graphData.svg) {
          const newSvg = reduceMaxWidth(step.graphData.svg);
          if (newSvg !== step.graphData.svg) {
            step.graphData.svg = newSvg;
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
console.log(`Locally updated ${updatedQuestionIds.length} questions for 30% further size reduction.`);

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
