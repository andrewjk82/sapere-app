const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const options = [
    { text: "\\(2\\)" },
    { text: "\\(3\\)" },
    { text: "\\(4\\)" },
    { text: "\\(5\\)" }
  ];

  const docRef = db.collection('questions').doc('y10-8e-q1b-a');
  await docRef.update({
    type: 'multiple_choice',
    options: options,
    answer: 1, // index for 3
    updatedAt: FieldValue.serverTimestamp()
  });
  console.log('Updated y10-8e-q1b-a to multiple choice');

  // Attempt to update parent subQuestions if applicable
  const parentRef = db.collection('questions').doc('y10-8e-q1b');
  const parentSnap = await parentRef.get();
  if (parentSnap.exists && parentSnap.data().subQuestions) {
    const newSubQs = parentSnap.data().subQuestions.map(sq => {
      if (sq.id === 'y10-8e-q1b-a') {
        return {
          ...sq,
          type: 'multiple_choice',
          options: options,
          answer: 1
        };
      }
      return sq;
    });
    await parentRef.update({
      subQuestions: newSubQs,
      updatedAt: FieldValue.serverTimestamp()
    });
    console.log('Updated parent subQuestions for y10-8e-q1b');
  }

  console.log('Done!');
  process.exit(0);
}

run().catch(console.error);
