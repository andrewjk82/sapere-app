const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();
async function run() {
  const doc = await db.collection('questions').doc('f0d567f3509d847d3aa7db2765530ba4').get();
  if (doc.exists) console.log(JSON.stringify(doc.data(), null, 2));
  else console.log('Not found');
}
run().catch(console.error);
