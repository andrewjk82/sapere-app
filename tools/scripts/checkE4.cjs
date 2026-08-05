const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();
async function run() {
  const doc = await db.collection('questions').doc('e45bcdf3830f6d41338f1dc3455c462c').get();
  if (doc.exists) console.log('\n=== e45bcdf3830f6d41338f1dc3455c462c ===\n', JSON.stringify(doc.data(), null, 2));
}
run().catch(console.error);
