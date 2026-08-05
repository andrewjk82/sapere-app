const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue, FieldPath } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const idsToProcess = [];
  for (let j = 0; j < 8; j++) idsToProcess.push('y9-8a-2' + String.fromCharCode(97 + j));
  for (let j = 0; j < 8; j++) idsToProcess.push('y9-8a-4' + String.fromCharCode(97 + j));

  let updateCount = 0;

  for (const id of idsToProcess) {
    const docRef = db.collection('questions').doc(id);
    const snap = await docRef.get();
    if (snap.exists) {
      const data = snap.data();
      let changed = false;
      if (data.solutionSteps && Array.isArray(data.solutionSteps)) {
         const newSteps = data.solutionSteps.map(step => {
            if (step.workingOut && step.workingOut.includes('= \\(')) {
               changed = true;
               // "workingOut": "\\( 2 \\times 2 \\times 2 \\times 2 = \\(2^{4}\\) \\)",
               let fixed = step.workingOut.replace('= \\(', '= ').replace('\\) \\)', '\\)');
               return { ...step, workingOut: fixed };
            }
            return step;
         });
         if (changed) {
            await docRef.update({
              solutionSteps: newSteps,
              updatedAt: FieldValue.serverTimestamp()
            });
            updateCount++;
         }
      }
    }
  }

  for (const qNum of ['2', '4']) {
      const pRef = db.collection('questions').doc('y9-8a-' + qNum);
      const pSnap = await pRef.get();
      if (pSnap.exists && pSnap.data().subQuestions) {
        const newSubQs = await Promise.all(pSnap.data().subQuestions.map(async sq => {
          const cSnap = await db.collection('questions').doc(sq.id).get();
          if (cSnap.exists) {
            return {
              ...sq,
              solutionSteps: cSnap.data().solutionSteps || sq.solutionSteps
            };
          }
          return sq;
        }));
        await pRef.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
      }
  }

  console.log('Fixed latex nesting in', updateCount, 'documents for q2 and q4');
  process.exit(0);
}

run().catch(console.error);
