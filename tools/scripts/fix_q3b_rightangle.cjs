const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const updateDoc = async (id) => {
    const snap = await db.collection('questions').doc(id).get();
    if (snap.exists) {
      const data = snap.data();
      if (data.graphData && data.graphData.geometry && data.graphData.geometry.angles) {
        let changed = false;
        const newAngles = data.graphData.geometry.angles.map(ang => {
          if (ang.at === 'M' && ang.right) {
            changed = true;
            return { ...ang, labelPos: [3.5, 0.5] };
          }
          return ang;
        });
        if (changed) {
          await snap.ref.update({
            'graphData.geometry.angles': newAngles,
            updatedAt: FieldValue.serverTimestamp()
          });
          console.log('Updated SVG for', id);
        }
      }
    }
  };

  await updateDoc('y10-8e-q3');
  await updateDoc('y10-8e-q3b');

  const pSnap = await db.collection('questions').doc('y10-8e-q3').get();
  if (pSnap.exists && pSnap.data().subQuestions) {
    let changed = false;
    const newSubQs = pSnap.data().subQuestions.map(sq => {
      if (sq.graphData && sq.graphData.geometry && sq.graphData.geometry.angles) {
        const newAngles = sq.graphData.geometry.angles.map(ang => {
          if (ang.at === 'M' && ang.right) {
            changed = true;
            return { ...ang, labelPos: [3.5, 0.5] };
          }
          return ang;
        });
        return { ...sq, graphData: { ...sq.graphData, geometry: { ...sq.graphData.geometry, angles: newAngles } } };
      }
      return sq;
    });
    if (changed) {
      await pSnap.ref.update({
        subQuestions: newSubQs,
        updatedAt: FieldValue.serverTimestamp()
      });
      console.log('Updated parent subQuestions for q3');
    }
  }

  console.log('Done!');
  process.exit(0);
}

run().catch(console.error);
