const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldPath } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const qs = ['y9-11g-q10', 'y9-11g-q11', 'y9-11g-q12', 'y9-11g-q12a'];
  let results = {};
  
  for (const q of qs) {
    const doc = await db.collection('questions').doc(q).get();
    if (doc.exists) {
      results[q] = doc.data();
    }
  }

  // q12 might have children up to q12z, fetch them too if they exist
  const snapshot = await db.collection('questions')
    .where(FieldPath.documentId(), '>=', 'y9-11g-q12a')
    .where(FieldPath.documentId(), '<=', 'y9-11g-q12\uf8ff')
    .get();

  snapshot.forEach(doc => {
    results[doc.id] = doc.data();
  });

  fs.writeFileSync('fetch_y9_11g_q10_12.json', JSON.stringify(results, null, 2));
  console.log(`Saved ${Object.keys(results).length} questions to fetch_y9_11g_q10_12.json`);
  process.exit(0);
}

run().catch(console.error);
