const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const ids = [
    'y10-8a-q1a-x', 'y10-8a-q2a', 'y10-8a-q2b-theta', 'y10-8a-q2c-theta', 'y10-8a-q2c-y',
    'y10-8a-q2d-alpha', 'y10-8a-q2d-beta', 'y10-8a-q2d-y',
    'y10-8a-q2e-alpha', 'y10-8a-q2e-theta',
    'y10-8a-q2f-alpha', 'y10-8a-q2f-beta'
  ];

  const parentSet = new Set();
  
  for (const id of ids) {
    const docRef = db.collection('questions').doc(id);
    const snap = await docRef.get();
    if (snap.exists) {
      const data = snap.data();
      if (data.graphData && data.graphData.svg) {
         let newSvg = data.graphData.svg.replace(/font-size="14"/g, 'font-size="9"');
         await docRef.update({
           'graphData.svg': newSvg,
           updatedAt: FieldValue.serverTimestamp()
         });
         console.log("Updated font size for " + id);
      }
    }
    
    let parentId = id;
    if (id.includes('-')) {
       let parts = id.split('-');
       if (parts.length > 3) {
          parentId = parts.slice(0, 3).join('-');
       } else {
          parentId = id.replace(/[a-z]$/, '');
       }
    }
    parentSet.add(parentId);
  }

  for (const parentId of parentSet) {
    const pSnap = await db.collection('questions').doc(parentId).get();
    if (pSnap.exists && pSnap.data().subQuestions) {
      const newSubQs = await Promise.all(pSnap.data().subQuestions.map(async sq => {
        const cSnap = await db.collection('questions').doc(sq.id).get();
        return cSnap.exists ? { ...sq, graphData: cSnap.data().graphData } : sq;
      }));
      await pSnap.ref.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
    }
  }

  console.log('Finished font size reduction');
  process.exit(0);
}

run().catch(console.error);
