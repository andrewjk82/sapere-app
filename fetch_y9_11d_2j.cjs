const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const doc = await db.collection('questions').doc('y9-11d-q2j').get();
  let results = {};
  if (doc.exists) {
    results['y9-11d-q2j'] = doc.data();
  } else {
    results['y9-11d-q2j'] = 'Not found';
  }

  fs.writeFileSync('fetch_y9_11d_2j.json', JSON.stringify(results, null, 2));
  console.log("Saved to fetch_y9_11d_2j.json");
  process.exit(0);
}

run().catch(console.error);
