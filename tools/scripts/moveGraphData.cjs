const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const ids = [
    'girr2020-mc14b', 'girr2020-mc14bs',
    'girr2020-mc15as', 'girr2020-mc15bs',
    'girr2020-mc16s', 'girr2020-mc17s', 'girr2020-mc18as'
  ];

  for (const id of ids) {
    const docRef = db.collection('questions').doc(id);
    const docSnap = await docRef.get();
    if (!docSnap.exists) continue;
    
    const data = docSnap.data();
    if (data.graphData && data.solutionSteps && data.solutionSteps.length > 0) {
      const steps = [...data.solutionSteps];
      steps[steps.length - 1].graphData = data.graphData;
      
      await docRef.update({
        solutionSteps: steps,
        graphData: FieldValue.delete(),
        updatedAt: FieldValue.serverTimestamp()
      });
      console.log(`Updated ${id}`);
    }
  }

  // Update sync version
  const questionsMetaRef = db.doc('sync_meta/questions');
  const now = Date.now();
  await questionsMetaRef.update({
    version: now,
    membershipVersion: now,
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log("Moved graphData to solutionSteps in Firestore.");
  process.exit(0);
}

run().catch(console.error);
