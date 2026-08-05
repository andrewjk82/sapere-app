const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function run() {
  const ids = ['nCKo52mDIP3LflkqCgSY', 'noMuAGc7hT6Y0SOgvxSO', 'wmxAxsAKLuFECkgVTxTR'];
  for (const id of ids) {
    const doc = await db.collection('questions').doc(id).get();
    console.log(`\n=== ${id} ===`);
    const data = doc.data();
    console.log(`Options: ${JSON.stringify(data.options)}`);
    console.log(`Solution: ${data.solution}`);
  }
}
run().catch(console.error);
