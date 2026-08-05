const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();
async function run() {
  const doc = await db.collection('questions').doc('e5c2e9b5a792fdf98ead0f5740c2e964').get();
  if (doc.exists) console.log('\n=== e5c2e9b5a792fdf98ead0f5740c2e964 ===\n', JSON.stringify(doc.data(), null, 2));
}
run().catch(console.error);
