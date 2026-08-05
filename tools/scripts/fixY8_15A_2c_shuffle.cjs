const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // Answer is 144. Shuffle to C (index 2).
  const newOpts = [
    { text: '\\(135\\text{ mm}^2\\)', imageUrl: '' },
    { text: '\\(60\\text{ mm}^2\\)', imageUrl: '' },
    { text: '\\(144\\text{ mm}^2\\)', imageUrl: '' }, // Correct -> C
    { text: '\\(225\\text{ mm}^2\\)', imageUrl: '' }
  ];

  const docRef = db.collection('questions').doc('y8-15a-q2c');
  await docRef.update({
    options: newOpts,
    answer: '2',
    updatedAt: FieldValue.serverTimestamp()
  });

  const parentRef = db.collection('questions').doc('y8-15a-q2');
  const parentSnap = await parentRef.get();
  if (parentSnap.exists) {
    const parentData = parentSnap.data();
    if (parentData.subQuestions) {
      const newSubQs = parentData.subQuestions.map(sq => {
        if (sq.id === 'y8-15a-q2c') {
          return {
            ...sq,
            options: newOpts,
            answer: '2'
          };
        }
        return sq;
      });
      await parentRef.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
    }
  }

  console.log("Shuffled y8-15a-q2c answer away from A");
  process.exit(0);
}

run().catch(console.error);
