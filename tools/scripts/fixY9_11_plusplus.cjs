const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  console.log("Fetching all Year 9 Chapter 11 questions...");
  const snapshot = await db.collection('questions')
    .where('chapterId', '==', 'y9-11')
    .get();

  let count = 0;
  snapshot.forEach(doc => {
    const data = doc.data();
    let changed = false;

    // Check top-level graphData
    if (data.graphData && data.graphData.jsxGraph && data.graphData.jsxGraph.script) {
      if (data.graphData.jsxGraph.script.includes('++')) {
        data.graphData.jsxGraph.script = data.graphData.jsxGraph.script.replace(/\+\+/g, '+');
        changed = true;
      }
    }

    // Check solutionSteps graphData
    if (data.solutionSteps) {
      data.solutionSteps.forEach(step => {
        if (step.graphData && step.graphData.jsxGraph && step.graphData.jsxGraph.script) {
          if (step.graphData.jsxGraph.script.includes('++')) {
            step.graphData.jsxGraph.script = step.graphData.jsxGraph.script.replace(/\+\+/g, '+');
            changed = true;
          }
        }
      });
    }

    if (changed) {
      batch.update(doc.ref, {
        graphData: data.graphData,
        solutionSteps: data.solutionSteps,
        updatedAt: FieldValue.serverTimestamp()
      });
      count++;
    }
  });

  if (count > 0) {
    await batch.commit();
    console.log(`Successfully fixed "++" typo in ${count} questions.`);
  } else {
    console.log('No questions found with "++" typo.');
  }

  process.exit(0);
}

run().catch(console.error);
