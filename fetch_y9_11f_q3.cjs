const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldPath } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const snapshot = await db.collection('questions')
    .where(FieldPath.documentId(), 'in', ['y9-11f-q3a', 'y9-11f-q3b', 'y9-11f-q3c'])
    .get();

  let results = {};
  snapshot.forEach(doc => {
    results[doc.id] = doc.data();
  });

  fs.writeFileSync('fetch_y9_11f_q3.json', JSON.stringify(results, null, 2));
  console.log(`Saved ${Object.keys(results).length} questions to fetch_y9_11f_q3.json`);
  process.exit(0);
}

run().catch(console.error);
