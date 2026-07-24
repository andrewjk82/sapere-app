const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const pathOrig = './src/constants/seedYear9Ch11EQuestions.js';

let contentOrig = fs.readFileSync(pathOrig, 'utf8');
const matchOrig = contentOrig.match(/export const Y9_CH11E_QUESTIONS = (\[[\s\S]*?\]);\n/);
let qOrig = eval(matchOrig[1]);

for (let i = 0; i < qOrig.length; i++) {
  if (qOrig[i].graphData && qOrig[i].question.includes('Sketch')) {
    // If it's a sketch question and has graphData at the top level, move it to the last step
    const graph = qOrig[i].graphData;
    
    // Clean up from top level
    qOrig[i].graphData = null;
    
    // Clean up from step 0 if it exists
    if (qOrig[i].solutionSteps && qOrig[i].solutionSteps[0] && qOrig[i].solutionSteps[0].graphData) {
      qOrig[i].solutionSteps[0].graphData = null;
    }
    
    // Add to last step
    if (qOrig[i].solutionSteps && qOrig[i].solutionSteps.length > 0) {
      qOrig[i].solutionSteps[qOrig[i].solutionSteps.length - 1].graphData = graph;
    }
  }
}

fs.writeFileSync(pathOrig, `export const Y9_CH11E_QUESTIONS = ${JSON.stringify(qOrig, null, 2)};\n`, 'utf8');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  const batch = db.batch();
  for (const q of qOrig) {
    if (q.question.includes('Sketch')) {
      batch.update(db.collection('questions').doc(q.id), {
        graphData: null,
        solutionSteps: q.solutionSteps,
        updatedAt: FieldValue.serverTimestamp()
      });
    }
  }

  batch.update(db.doc('sync_meta/questions'), {
    version: Date.now(),
    updatedAt: FieldValue.serverTimestamp()
  });
  
  await batch.commit();

  console.log('Successfully fixed graphData placement for all sketch questions in Chapter 11E!');
  process.exit(0);
}
run();
