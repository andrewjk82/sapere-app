const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();
async function run() {
  const doc = await db.collection('questions').doc('e020c594be58d5b33628a71966f652f6').get();
  if (doc.exists) console.log('\n=== e020c594be58d5b33628a71966f652f6 ===\n', JSON.stringify(doc.data(), null, 2));
}
run().catch(console.error);
