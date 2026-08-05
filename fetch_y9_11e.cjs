const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const questions = {};

  const snapshot = await db.collection('questions')
    .where('topicId', '==', 'y9-11e')
    .get();
    
  snapshot.forEach(doc => {
    questions[doc.id] = doc.data();
  });

  fs.writeFileSync('fetch_y9_11e_all.json', JSON.stringify(questions, null, 2));
  console.log(`Saved ${Object.keys(questions).length} questions to fetch_y9_11e_all.json`);
  process.exit(0);
}

run().catch(console.error);
