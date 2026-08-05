const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldPath } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const results = {};
  const doc = await db.collection('questions').doc('y9-11g-q7').get();
  if (doc.exists) {
    results['y9-11g-q7'] = doc.data();
  }

  fs.writeFileSync('fetch_y9_11g_q7.json', JSON.stringify(results, null, 2));
  console.log(`Saved ${Object.keys(results).length} questions to fetch_y9_11g_q7.json`);
  process.exit(0);
}

run().catch(console.error);
