const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // Revert y8-19a-q2 subquestions
  const q2aText = 'a) What is the median?';
  const q2bText = 'b) Calculate the mean, correct to two decimal places.';

  await db.collection('questions').doc('y8-19a-q2a').update({ question: q2aText, updatedAt: FieldValue.serverTimestamp() });
  await db.collection('questions').doc('y8-19a-q2b').update({ question: q2bText, updatedAt: FieldValue.serverTimestamp() });

  const parent2Snap = await db.collection('questions').doc('y8-19a-q2').get();
  if (parent2Snap.exists) {
    const p2Data = parent2Snap.data();
    if (p2Data.subQuestions) {
      const newSq = p2Data.subQuestions.map(sq => {
        if (sq.id === 'y8-19a-q2a') return { ...sq, question: q2aText };
        if (sq.id === 'y8-19a-q2b') return { ...sq, question: q2bText };
        return sq;
      });
      await db.collection('questions').doc('y8-19a-q2').update({ subQuestions: newSq, updatedAt: FieldValue.serverTimestamp() });
    }
  }

  // Revert y8-19a-q10 subquestions
  const q10aText = 'a) Which of the following is the correct stem-and-leaf plot for the data?';
  const q10bText = 'b) Find the median birth weight.';
  const q10cText = 'c) Find the mean birth weight.';

  await db.collection('questions').doc('y8-19a-q10a').update({ question: q10aText, updatedAt: FieldValue.serverTimestamp() });
  await db.collection('questions').doc('y8-19a-q10b').update({ question: q10bText, updatedAt: FieldValue.serverTimestamp() });
  await db.collection('questions').doc('y8-19a-q10c').update({ question: q10cText, updatedAt: FieldValue.serverTimestamp() });

  const parent10Snap = await db.collection('questions').doc('y8-19a-q10').get();
  if (parent10Snap.exists) {
    const p10Data = parent10Snap.data();
    if (p10Data.subQuestions) {
      const newSq = p10Data.subQuestions.map(sq => {
        if (sq.id === 'y8-19a-q10a') return { ...sq, question: q10aText };
        if (sq.id === 'y8-19a-q10b') return { ...sq, question: q10bText };
        if (sq.id === 'y8-19a-q10c') return { ...sq, question: q10cText };
        return sq;
      });
      await db.collection('questions').doc('y8-19a-q10').update({ subQuestions: newSq, updatedAt: FieldValue.serverTimestamp() });
    }
  }

  console.log("Reverted context injection for y8-19a-q2 and y8-19a-q10");
  process.exit(0);
}

run().catch(console.error);
