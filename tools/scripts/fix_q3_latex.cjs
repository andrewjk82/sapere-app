const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const fixSteps = (steps) => {
    if (!steps) return steps;
    return steps.map(step => {
      let w = step.workingOut;
      if (w && !w.trim().startsWith('\\(') && !w.trim().startsWith('<div')) {
        w = '\\( ' + w + ' \\)';
      }
      return { ...step, workingOut: w };
    });
  };

  const pSnap = await db.collection('questions').doc('y10-8e-q3').get();
  if (pSnap.exists && pSnap.data().subQuestions) {
    const newSubQs = pSnap.data().subQuestions.map(sq => {
      if (sq.solutionSteps) {
        return { ...sq, solutionSteps: fixSteps(sq.solutionSteps) };
      }
      return sq;
    });
    
    await pSnap.ref.update({
      subQuestions: newSubQs,
      updatedAt: FieldValue.serverTimestamp()
    });
    console.log('Updated parent subQuestions for q3');
    
    // Also update individual subquestion docs just in case
    for (const sq of newSubQs) {
      const sSnap = await db.collection('questions').doc(sq.id).get();
      if (sSnap.exists) {
        await sSnap.ref.update({
          solutionSteps: sq.solutionSteps,
          updatedAt: FieldValue.serverTimestamp()
        });
        console.log('Updated subquestion doc', sq.id);
      }
    }
  }

  console.log('Done!');
  process.exit(0);
}

run().catch(console.error);
