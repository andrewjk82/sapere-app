const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const questionsToUpdate = [
    'y9-11h-q1a', 'y9-11h-q1b', 'y9-11h-q1c', 
    'y9-11h-q1d', 'y9-11h-q1e', 'y9-11h-q1f', 
    'y9-11h-q1g', 'y9-11h-q1h', 'y9-11h-q1i'
  ];

  for (const qId of questionsToUpdate) {
    const docRef = db.collection('questions').doc(qId);
    const doc = await docRef.get();
    
    if (!doc.exists) continue;

    // We set `options: ["Yes", "No"]` and delete `opts` to avoid confusion.
    await docRef.update({
      options: ["Yes", "No"],
      opts: FieldValue.delete(),
      updatedAt: FieldValue.serverTimestamp()
    });
    
    console.log(`Fixed options for ${qId}`);
  }

  console.log("Batch update completed.");
  process.exit(0);
}

run().catch(console.error);
