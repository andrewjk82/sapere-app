const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const doc = await db.collection('questions').doc('girr2020-mc19bs').get();
  console.log("Firestore girr2020-mc19bs question text:");
  console.log(doc.data().q);

  process.exit(0);
}

run().catch(console.error);
