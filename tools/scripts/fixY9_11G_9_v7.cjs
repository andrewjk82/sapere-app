const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  const redundantPrefix = "Consider the quadrilateral \\(ABCD\\) with vertices \\(A(2, 3)\\), \\(B(4, 6)\\), \\(C(8, 0)\\), and \\(D(6, -3)\\). Answer the following sub-questions.\n";

  const subIds = ['y9-11g-q9a', 'y9-11g-q9b', 'y9-11g-q9c', 'y9-11g-q9d', 'y9-11g-q9e', 'y9-11g-q9f', 'y9-11g-q9g'];
  
  for (const id of subIds) {
    const docRef = db.collection('questions').doc(id);
    const doc = await docRef.get();
    
    if (doc.exists) {
      const currentQuestion = doc.data().question;
      if (currentQuestion && currentQuestion.startsWith("Consider the quadrilateral")) {
        // Strip out the prefix
        const cleanQuestion = currentQuestion.replace(redundantPrefix, "").trim();
        batch.update(docRef, {
          question: cleanQuestion,
          updatedAt: FieldValue.serverTimestamp()
        });
      }
    }
  }

  await batch.commit();

  // Update parent subQuestions array
  const subQuestions = [];
  for (const id of subIds) {
    const doc = await db.collection('questions').doc(id).get();
    if (doc.exists) {
      subQuestions.push({
        id: id,
        ...doc.data(),
      });
    }
  }
  
  await db.collection('questions').doc('y9-11g-q9').update({
    subQuestions: subQuestions,
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log("Removed redundant prefix from all sub-questions.");
  process.exit(0);
}

run().catch(console.error);
