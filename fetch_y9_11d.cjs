const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const ids = ['y9-11d-q10', 'y9-11d-q11', 'y9-11d-q12a'];
  const results = {};
  for (let id of ids) {
    const doc = await db.collection('questions').doc(id).get();
    if (doc.exists) {
      results[id] = doc.data();
    } else {
      results[id] = 'Not found';
    }
  }

  fs.writeFileSync('fetch_y9_11d.json', JSON.stringify(results, null, 2));
  console.log("Saved to fetch_y9_11d.json");
  process.exit(0);
}

run().catch(console.error);
