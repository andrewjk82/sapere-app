const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const docRef = db.collection('questions').doc('y10-2g-q14b');
  const doc = await docRef.get();
  
  if (doc.exists) {
    const newOpts = ["3", "6", "9", "12"];
    await docRef.update({
      opts: newOpts,
      options: newOpts,
      answer: 2
    });
    console.log('Updated y10-2g-q14b options in Firestore.');
  }
  
  process.exit(0);
}

run().catch(console.error);
