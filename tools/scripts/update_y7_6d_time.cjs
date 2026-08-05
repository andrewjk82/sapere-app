const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const snap = await db.collection('questions')
    .where('topicId', '==', 'y7-6d')
    .get();

  let updateCount = 0;
  const parentSet = new Set();

  for (const doc of snap.docs) {
    const data = doc.data();
    if (data.timeLimit !== 45) {
      await doc.ref.update({ timeLimit: 45, updatedAt: FieldValue.serverTimestamp() });
      console.log(`Updated timeLimit for ${doc.id}`);
      updateCount++;
      const parentId = doc.id.replace(/[a-z]$/, '');
      parentSet.add(parentId);
    }
  }

  for (const parentId of parentSet) {
    const pSnap = await db.collection('questions').doc(parentId).get();
    if (pSnap.exists && pSnap.data().subQuestions) {
      const newSubQs = await Promise.all(pSnap.data().subQuestions.map(async sq => {
        const cSnap = await db.collection('questions').doc(sq.id).get();
        return cSnap.exists ? { ...sq, timeLimit: cSnap.data().timeLimit } : sq;
      }));
      await pSnap.ref.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
    }
  }

  console.log('\\nTotal questions updated to 45s:', updateCount);
  process.exit(0);
}

run().catch(console.error);
