const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const docRef = db.collection('questions').doc('y9-11h-q11');
  const doc = await docRef.get();
  
  if (!doc.exists) {
    console.log("Document y9-11h-q11 does not exist!");
    process.exit(1);
  }

  const data = doc.data();
  let subQs = data.subQuestions;

  // Shuffle options manually so they are not all A
  subQs = subQs.map(sq => {
    if (sq.id === 'y9-11h-q11a') {
      sq.options = ["\\(6\\)", "\\(3\\sqrt{3}\\)", "\\(3\\sqrt{2}\\)", "\\(9\\)"]; // B
    } else if (sq.id === 'y9-11h-q11b') {
      sq.options = ["\\(9\\)", "\\(12\\)", "\\(6\\sqrt{3}\\)", "\\(6\\sqrt{2}\\)"]; // C
    } else if (sq.id === 'y9-11h-q11c') {
      sq.options = ["\\(6\\sqrt{2}\\)", "\\(9\\)", "\\(3\\sqrt{3}\\)", "\\(6\\sqrt{3}\\)"]; // D
    } else if (sq.id === 'y9-11h-q11d') {
      sq.options = ["Right Isosceles", "Equilateral", "Scalene", "Obtuse Isosceles"]; // B
    }
    return sq;
  });

  await docRef.update({
    solution: "", // Remove redundant root solution
    subQuestions: subQs,
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log("Updated y9-11h-q11: cleared root solution and shuffled options.");
  process.exit(0);
}

run().catch(console.error);
