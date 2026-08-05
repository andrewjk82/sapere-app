const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  const subIds = ['y9-11g-q9a', 'y9-11g-q9b', 'y9-11g-q9c', 'y9-11g-q9d', 'y9-11g-q9e', 'y9-11g-q9f', 'y9-11g-q9g'];
  
  const subQuestions = [];
  for (const id of subIds) {
    const doc = await db.collection('questions').doc(id).get();
    if (doc.exists) {
      const data = doc.data();
      // Only take the fields that are needed for subQuestions array, typically id, type, question, options, answer, solutionSteps, graphData, etc.
      // We will include everything just to be safe, or just the whole doc data
      // Actually we must ensure 'id' is in the object
      subQuestions.push({
        id: id,
        ...data,
      });
    }
  }
  
  await db.collection('questions').doc('y9-11g-q9').update({
    subQuestions: subQuestions,
    updatedAt: FieldValue.serverTimestamp()
  });
  
  console.log("Updated subQuestions array in y9-11g-q9.");
  process.exit(0);
}

run().catch(console.error);
