const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  const newQuestionText = "b) Find the coordinates of \\(D\\), the point where the line from part a) crosses the \\(y\\)-axis.";

  // Update q6b standalone document
  batch.update(db.collection('questions').doc('y9-11f-q6b'), {
    question: "Consider the interval \\(AB\\) with endpoints \\(A(2, -3)\\) and \\(B(3, 4)\\). Answer the following sub-questions.\n" + newQuestionText,
    updatedAt: FieldValue.serverTimestamp()
  });

  // Update Parent's subQuestions array
  const parentRef = db.collection('questions').doc('y9-11f-q6');
  const parentDoc = await parentRef.get();
  let parentData = parentDoc.data();

  // We need to find q6b inside the subQuestions array and update its question text
  let newSubQs = parentData.subQuestions.map(sq => {
    if (sq.id === 'y9-11f-q6b') {
      return { ...sq, question: newQuestionText };
    }
    return sq;
  });

  batch.update(parentRef, {
    subQuestions: newSubQs,
    updatedAt: FieldValue.serverTimestamp()
  });

  await batch.commit();
  console.log("Updated q6b question text successfully.");
  process.exit(0);
}

run().catch(console.error);
