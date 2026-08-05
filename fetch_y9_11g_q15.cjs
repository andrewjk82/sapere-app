const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldPath } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const doc = await db.collection('questions').doc('y9-11g-q15').get();
  const results = {};
  if (doc.exists) {
    results['y9-11g-q15'] = doc.data();
  }

  // check if there are sub-questions
  const snapshot = await db.collection('questions')
    .where(FieldPath.documentId(), '>=', 'y9-11g-q15a')
    .where(FieldPath.documentId(), '<=', 'y9-11g-q15\uf8ff')
    .get();

  snapshot.forEach(d => {
    results[d.id] = d.data();
  });

  fs.writeFileSync('fetch_y9_11g_q15.json', JSON.stringify(results, null, 2));
  console.log(`Saved ${Object.keys(results).length} questions to fetch_y9_11g_q15.json`);
  process.exit(0);
}

run().catch(console.error);
