const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();
async function run() {
  const doc = await db.collection('questions').doc('be464d6957dc5bcba4cfd272543b6422').get();
  if (doc.exists) console.log(JSON.stringify(doc.data(), null, 2));
  else console.log('Not found');
}
run().catch(console.error);
