const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function check() {
  const ids = ['WRLBARk7ruucLqXRm9qQ','xuFKu9fW2J0c70falQ3A','yGWGwNKlpEVvffnvqbPC','z9dqmYOzb2NUkn36lnpr'];
  for (const id of ids) {
    const doc = await db.collection('questions').doc(id).get();
    if (doc.exists) {
      const d = doc.data();
      console.log(`\n=== ID: ${id} ===`);
      (d.solutionSteps || []).forEach((s, i) => {
        console.log(`Step ${i}: ${(s.workingOut||'').substring(0,180)}`);
      });
    }
  }
}
check().catch(console.error);
