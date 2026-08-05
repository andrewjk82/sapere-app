const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();
async function run() {
  const doc = await db.collection('questions').doc('eca5c97290eacabf249ec4d887ff17f1').get();
  if (doc.exists) console.log('\n=== eca5c97290eacabf249ec4d887ff17f1 ===\n', JSON.stringify(doc.data(), null, 2));
}
run().catch(console.error);
