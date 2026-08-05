const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function check() {
  const ids = ['3VCQGRNFnpRFvQPtBACD','53BWnLQL10wmGZabBsET','9iQj7JXO1W9cduNrYGrx'];
  for (const id of ids) {
    const doc = await db.collection('questions').doc(id).get();
    if (doc.exists) {
      const d = doc.data();
      console.log(`\n=== ${id} ===`);
      console.log('question:', d.question);
      (d.solutionSteps||[]).forEach((s,i) => console.log(`step${i}:`, s.workingOut));
    }
  }
}
check().catch(console.error);
