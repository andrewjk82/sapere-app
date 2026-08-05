const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldPath } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // Fetch parent and all possible children
  const snapshot = await db.collection('questions')
    .where(FieldPath.documentId(), '>=', 'y9-11f-q6')
    .where(FieldPath.documentId(), '<=', 'y9-11f-q6\uf8ff')
    .get();

  let results = {};
  snapshot.forEach(doc => {
    results[doc.id] = doc.data();
  });

  fs.writeFileSync('fetch_y9_11f_q6.json', JSON.stringify(results, null, 2));
  console.log(`Saved ${Object.keys(results).length} questions to fetch_y9_11f_q6.json`);
  process.exit(0);
}

run().catch(console.error);
