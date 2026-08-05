const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const qIds = ['y10-7h-q1a', 'y10-7h-q1b', 'y10-7h-q1c', 'y10-7h-q1d'];

  for (const id of qIds) {
    await db.collection('questions').doc(id).update({
      graphData: FieldValue.delete(),
      updatedAt: FieldValue.serverTimestamp()
    });
  }

  const pRef = db.collection('questions').doc('y10-7h-q1');
  const pSnap = await pRef.get();
  if (pSnap.exists && pSnap.data().subQuestions) {
    const newSubQs = pSnap.data().subQuestions.map(sq => {
      if (qIds.includes(sq.id)) {
        const { graphData, ...rest } = sq;
        return rest;
      }
      return sq;
    });
    await pRef.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
  }

  console.log("Removed graphData from the root of q1 questions");
  process.exit(0);
}

run().catch(console.error);
