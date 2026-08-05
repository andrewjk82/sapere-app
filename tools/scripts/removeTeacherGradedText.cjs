const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // Fix girr2020-mc14b
  const docRef14b = db.collection('questions').doc('girr2020-mc14b');
  await docRef14b.update({
    q: 'Sketch the graph of $f(x) = x^3 - 3x^2 + 3x$ for $-1 \\leq x \\leq 3$. Show the stationary point and any intercepts.',
    question: 'Sketch the graph of $f(x) = x^3 - 3x^2 + 3x$ for $-1 \\leq x \\leq 3$. Show the stationary point and any intercepts.',
    updatedAt: FieldValue.serverTimestamp()
  });

  // Fix girr2020-mc14bs
  const docRef14bs = db.collection('questions').doc('girr2020-mc14bs');
  await docRef14bs.update({
    q: 'Sketch the graph of $f(x) = x^3 - 6x^2 + 12x$ for $-1 \\leq x \\leq 5$.',
    question: 'Sketch the graph of $f(x) = x^3 - 6x^2 + 12x$ for $-1 \\leq x \\leq 5$.',
    updatedAt: FieldValue.serverTimestamp()
  });

  // Update sync version
  const questionsMetaRef = db.doc('sync_meta/questions');
  const now = Date.now();
  await questionsMetaRef.update({
    version: now,
    membershipVersion: now,
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log("Successfully removed Teacher-graded sketch text from Firestore for both questions.");
  process.exit(0);
}

run().catch(console.error);
