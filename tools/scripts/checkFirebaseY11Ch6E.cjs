const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const { readFileSync } = require('fs');

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

async function check() {
  const doc = await db.collection('questions').doc('y11a-6e-q10a').get();
  const data = doc.data();
  console.log("opts: ", JSON.stringify(data.opts, null, 2));
  console.log("options: ", JSON.stringify(data.options, null, 2));
  process.exit(0);
}
check();
