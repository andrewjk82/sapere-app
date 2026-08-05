const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const doc = await db.collection('questions').doc('y9-11f-q5').get();
  
  if (doc.exists) {
    fs.writeFileSync('fetch_y9_11f_q5_parent.json', JSON.stringify(doc.data(), null, 2));
    console.log("Found and saved y9-11f-q5");
  } else {
    console.log("Document y9-11f-q5 does NOT exist.");
  }
  process.exit(0);
}

run().catch(console.error);
