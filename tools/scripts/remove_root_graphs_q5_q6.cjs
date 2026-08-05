const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const qIds = [
    'y10-7a-q5a', 'y10-7a-q5b', 'y10-7a-q5c', 'y10-7a-q5d',
    'y10-7a-q6a', 'y10-7a-q6b', 'y10-7a-q6c', 'y10-7a-q6d'
  ];

  for (const id of qIds) {
    await db.collection('questions').doc(id).update({
      graphData: FieldValue.delete(),
      updatedAt: FieldValue.serverTimestamp()
    });
  }

  const pRef5 = db.collection('questions').doc('y10-7a-q5');
  const pSnap5 = await pRef5.get();
  if (pSnap5.exists && pSnap5.data().subQuestions) {
    const newSubQs = pSnap5.data().subQuestions.map(sq => {
      if (qIds.includes(sq.id)) {
        const { graphData, ...rest } = sq;
        return rest;
      }
      return sq;
    });
    await pRef5.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
  }

  const pRef6 = db.collection('questions').doc('y10-7a-q6');
  const pSnap6 = await pRef6.get();
  if (pSnap6.exists && pSnap6.data().subQuestions) {
    const newSubQs = pSnap6.data().subQuestions.map(sq => {
      if (qIds.includes(sq.id)) {
        const { graphData, ...rest } = sq;
        return rest;
      }
      return sq;
    });
    await pRef6.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
  }

  console.log("Removed graphData from question roots");
  process.exit(0);
}

run().catch(console.error);
