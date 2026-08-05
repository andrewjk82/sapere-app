const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldPath } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const results = {};
  
  const ids = ['y9-11g-q2a', 'y9-11g-q2b', 'y9-11g-q2c', 'y9-11g-q2d'];
  for (const id of ids) {
    const doc = await db.collection('questions').doc(id).get();
    if (doc.exists) {
      results[id] = doc.data();
    }
  }

  // Also fetch parent
  const parent = await db.collection('questions').doc('y9-11g-q2').get();
  if (parent.exists) {
    results['y9-11g-q2'] = parent.data();
  }

  fs.writeFileSync('fetch_y9_11g_q2.json', JSON.stringify(results, null, 2));
  console.log(`Saved ${Object.keys(results).length} questions to fetch_y9_11g_q2.json`);
  process.exit(0);
}

run().catch(console.error);
