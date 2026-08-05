const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  const newText6c = "c) Find the gradient of the line connecting \\(B\\) and the point \\(D\\) from part b).";
  const newText6d = "d) Find the equation of the line connecting \\(B\\) and \\(D\\).";

  // Update q6c and q6d standalone documents
  batch.update(db.collection('questions').doc('y9-11f-q6c'), {
    question: "Consider the interval \\(AB\\) with endpoints \\(A(2, -3)\\) and \\(B(3, 4)\\). Answer the following sub-questions.\n" + newText6c,
    updatedAt: FieldValue.serverTimestamp()
  });

  batch.update(db.collection('questions').doc('y9-11f-q6d'), {
    question: "Consider the interval \\(AB\\) with endpoints \\(A(2, -3)\\) and \\(B(3, 4)\\). Answer the following sub-questions.\n" + newText6d,
    updatedAt: FieldValue.serverTimestamp()
  });

  // Update Parent's subQuestions array
  const parentRef = db.collection('questions').doc('y9-11f-q6');
  const parentDoc = await parentRef.get();
  let parentData = parentDoc.data();

  let newSubQs = parentData.subQuestions.map(sq => {
    if (sq.id === 'y9-11f-q6c') {
      return { ...sq, question: newText6c };
    }
    if (sq.id === 'y9-11f-q6d') {
      return { ...sq, question: newText6d };
    }
    return sq;
  });

  batch.update(parentRef, {
    subQuestions: newSubQs,
    updatedAt: FieldValue.serverTimestamp()
  });

  await batch.commit();
  console.log("Updated q6c and q6d question texts successfully.");
  process.exit(0);
}

run().catch(console.error);
