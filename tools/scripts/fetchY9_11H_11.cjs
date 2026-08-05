const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const docRef = db.collection('questions').doc('y9-11h-q11');
  const doc = await docRef.get();
  
  if (!doc.exists) {
    console.log("Document y9-11h-q11 does not exist!");
    process.exit(1);
  }

  const data = doc.data();
  console.log(JSON.stringify(data, null, 2));
  
  process.exit(0);
}

run().catch(console.error);
