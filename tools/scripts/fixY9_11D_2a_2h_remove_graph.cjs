const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  const ids = ['y9-11d-q2a', 'y9-11d-q2b', 'y9-11d-q2c', 'y9-11d-q2d', 'y9-11d-q2e', 'y9-11d-q2f', 'y9-11d-q2g', 'y9-11d-q2h'];

  for (let id of ids) {
    batch.update(db.collection('questions').doc(id), {
      'graphData': null,
      'updatedAt': FieldValue.serverTimestamp()
    });
  }

  await batch.commit();
  console.log("Removed top-level graphData for y9-11d-q2a to 2h.");
  process.exit(0);
}

run().catch(console.error);
