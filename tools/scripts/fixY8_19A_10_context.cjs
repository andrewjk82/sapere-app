const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const dataContext = `The birth weights, in kilograms, of the first 20 babies born at a hospital in a selected month are as follows:

\\(3.1, 2.9, 3.7, 2.9, 3.7, 3.8, 3.3, 4.0, 3.7, 4.3\\)
\\(3.8, 2.8, 3.2, 3.1, 2.6, 2.7, 3.7, 2.5, 3.0, 3.3\\)

`;

  // Update top-level docs
  const qA = dataContext + 'a) Which of the following is the correct stem-and-leaf plot for the data?';
  const qB = dataContext + 'b) Find the median birth weight from the data above.';
  const qC = dataContext + 'c) Find the mean birth weight from the data above.';

  await db.collection('questions').doc('y8-19a-q10a').update({
    question: qA,
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.collection('questions').doc('y8-19a-q10b').update({
    question: qB,
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.collection('questions').doc('y8-19a-q10c').update({
    question: qC,
    updatedAt: FieldValue.serverTimestamp()
  });

  // Also update the subQuestions array in the parent document to reflect these new texts
  const parentRef = db.collection('questions').doc('y8-19a-q10');
  const parentSnap = await parentRef.get();
  const parentData = parentSnap.data();

  if (parentData && parentData.subQuestions) {
    const newSubQs = parentData.subQuestions.map(sq => {
      if (sq.id === 'y8-19a-q10a') return { ...sq, question: qA };
      if (sq.id === 'y8-19a-q10b') return { ...sq, question: qB };
      if (sq.id === 'y8-19a-q10c') return { ...sq, question: qC };
      return sq;
    });

    await parentRef.update({
      subQuestions: newSubQs,
      updatedAt: FieldValue.serverTimestamp()
    });
  }

  console.log("Injected data context into y8-19a-q10 subquestions");
  process.exit(0);
}

run().catch(console.error);
