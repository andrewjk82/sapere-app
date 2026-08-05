const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const docRef = db.collection('questions').doc('y8-15a-q2a');
  await docRef.update({
    graphData: null,
    updatedAt: FieldValue.serverTimestamp()
  });

  const parentRef = db.collection('questions').doc('y8-15a-q2');
  const parentSnap = await parentRef.get();
  if (parentSnap.exists) {
    const parentData = parentSnap.data();
    
    // Also remove top-level graphData from parent just in case
    await parentRef.update({
      graphData: null,
      updatedAt: FieldValue.serverTimestamp()
    });

    if (parentData.subQuestions) {
      const newSubQs = parentData.subQuestions.map(sq => {
        if (sq.id === 'y8-15a-q2a') {
          return {
            ...sq,
            graphData: null
          };
        }
        return sq;
      });
      await parentRef.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
    }
  }

  console.log("Removed top-level graphData from y8-15a-q2a and parent");
  process.exit(0);
}

run().catch(console.error);
