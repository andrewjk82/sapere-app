const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const doc = await db.collection('questions').doc('girr2020-mc19bs').get();
  const data = doc.data();
  console.log("=== girr2020-mc19bs ALL FIELDS ===");
  console.log("q:", data.q);
  console.log("question:", data.question);
  console.log("hint:", data.hint);
  console.log("h:", data.h);
  console.log("=== ALL KEYS ===");
  console.log(Object.keys(data));

  process.exit(0);
}

run().catch(console.error);
