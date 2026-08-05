const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const id = 'girr2020-mc2';
  const docRef = db.collection('questions').doc(id);
  const docSnap = await docRef.get();
  
  if (docSnap.exists) {
    const data = docSnap.data();
    if (data.graphData && data.solutionSteps && data.solutionSteps.length > 0) {
      const steps = [...data.solutionSteps];
      steps[steps.length - 1].graphData = data.graphData;
      
      await docRef.update({
        solutionSteps: steps,
        graphData: FieldValue.delete(),
        updatedAt: FieldValue.serverTimestamp()
      });
      
      // Update sync version
      const questionsMetaRef = db.doc('sync_meta/questions');
      const now = Date.now();
      await questionsMetaRef.update({
        version: now,
        membershipVersion: now,
        updatedAt: FieldValue.serverTimestamp()
      });

      console.log(`Moved graphData to solutionSteps for ${id}`);
    } else {
      console.log(`No root graphData found for ${id}`);
    }
  }

  process.exit(0);
}

run().catch(console.error);
