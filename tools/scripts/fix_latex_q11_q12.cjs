const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  for (const qId of ['y9-11h-q11', 'y9-11h-q12']) {
    const docRef = db.collection('questions').doc(qId);
    const doc = await docRef.get();
    if (!doc.exists) continue;

    let data = doc.data();
    let updated = false;

    if (data.subQuestions) {
      const newSubQuestions = data.subQuestions.map(sq => {
        if (sq.solutionSteps) {
          sq.solutionSteps = sq.solutionSteps.map(step => {
            if (step.workingOut && !step.workingOut.startsWith('\\(') && !step.workingOut.startsWith('$$')) {
              step.workingOut = '\\(' + step.workingOut + '\\)';
              updated = true;
            }
            return step;
          });
        }
        return sq;
      });

      if (updated) {
        await docRef.update({ subQuestions: newSubQuestions });
        console.log(`Updated latex in workingOut for ${qId}`);
      } else {
        console.log(`No changes needed for ${qId}`);
      }
    }
  }

  process.exit(0);
}

run().catch(console.error);
