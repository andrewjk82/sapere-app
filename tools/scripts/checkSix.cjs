const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function check() {
  const ids = ['j2434fSDlkYYajG7ARxd','jKWgDPPnCbnUriSEPkPb','lGFeYxCB6tyfGm0dnw0d','LMgiYvyJC8gXtYL5NMS0','nr61rVufvMITKSPmLtWM','sbeB0NeLphIP8adMfpDP'];
  for (const id of ids) {
    const doc = await db.collection('questions').doc(id).get();
    if (doc.exists) {
      const d = doc.data();
      console.log(`\n=== ID: ${id} ===`);
      (d.solutionSteps || []).forEach((s, i) => {
        console.log(`Step ${i} workingOut: ${(s.workingOut||'').substring(0,200)}`);
      });
      console.log(`Solution: ${(d.solution||'').substring(0,200)}`);
    } else {
      console.log(`ID ${id} not found.`);
    }
  }
}
check().catch(console.error);
