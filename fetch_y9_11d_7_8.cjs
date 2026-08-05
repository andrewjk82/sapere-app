const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldPath } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const questions = {};

  const snapshot7 = await db.collection('questions')
    .where(FieldPath.documentId(), '>=', 'y9-11d-q7')
    .where(FieldPath.documentId(), '<=', 'y9-11d-q7\uf8ff')
    .get();
    
  snapshot7.forEach(doc => {
    questions[doc.id] = doc.data();
  });

  const snapshot8 = await db.collection('questions')
    .where(FieldPath.documentId(), '>=', 'y9-11d-q8')
    .where(FieldPath.documentId(), '<=', 'y9-11d-q8\uf8ff')
    .get();
    
  snapshot8.forEach(doc => {
    questions[doc.id] = doc.data();
  });

  fs.writeFileSync('fetch_y9_11d_7_8_all.json', JSON.stringify(questions, null, 2));
  console.log(`Saved ${Object.keys(questions).length} questions to fetch_y9_11d_7_8_all.json`);
  process.exit(0);
}

run().catch(console.error);
