const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const doc = await db.collection('questions').doc('asc2020-q17a').get();
  if (doc.exists) {
    console.log(JSON.stringify(doc.data(), null, 2));
  } else {
    console.log("No such document: asc2020-q17a");
  }
  process.exit(0);
}
run();
