const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function checkRufx() {
  const doc = await db.collection('questions').doc('RufxKAOuzyBOf5Jy4FV5').get();
  if (doc.exists) {
    const d = doc.data();
    console.log('=== RufxKAOuzyBOf5Jy4FV5 ===');
    (d.solutionSteps||[]).forEach((s,i) => console.log(`Step ${i}: ${(s.workingOut||'').substring(0,200)}`));
    console.log('Solution:', (d.solution||'').substring(0,200));
  }
}
checkRufx().catch(console.error);
