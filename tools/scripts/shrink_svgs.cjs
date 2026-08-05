const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const questionsToShrink = [
    { id: 'y10-8a-q2g-alpha', newViewBox: 'viewBox="-40 -40 340 310"' },
    { id: 'y10-8a-q2g-theta', newViewBox: 'viewBox="-40 -40 340 310"' },
    { id: 'y10-8a-q2h-alpha', newViewBox: 'viewBox="-50 -50 300 300"' },
    { id: 'y10-8a-q2h-beta',  newViewBox: 'viewBox="-50 -50 300 300"' },
    { id: 'y10-8a-q2i-alpha', newViewBox: 'viewBox="-20 -40 280 280"' },
    { id: 'y10-8a-q2i-beta',  newViewBox: 'viewBox="-20 -40 280 280"' },
    { id: 'y10-8a-q2j-alpha', newViewBox: 'viewBox="-50 -30 300 260"' },
    { id: 'y10-8a-q2k-alpha', newViewBox: 'viewBox="-30 -30 220 270"' },
    { id: 'y10-8a-q2l-alpha', newViewBox: 'viewBox="-40 -40 280 280"' },
    { id: 'y10-8a-q2m-alpha', newViewBox: 'viewBox="-50 0 390 230"' }
  ];

  const parentSnapMap = {};

  for (const q of questionsToShrink) {
    const snap = await db.collection('questions').doc(q.id).get();
    if (!snap.exists) continue;
    
    const data = snap.data();
    if (data.graphData && data.graphData.svg) {
      let svg = data.graphData.svg;
      svg = svg.replace(/viewBox="[^"]+"/, q.newViewBox);
      
      await db.collection('questions').doc(q.id).update({
        'graphData.svg': svg,
        updatedAt: FieldValue.serverTimestamp()
      });
      console.log('Shrunk graph for', q.id);

      const parentId = q.id.substring(0, q.id.lastIndexOf('-'));
      parentSnapMap[parentId] = true;
    }
  }

  for (const parentId of Object.keys(parentSnapMap)) {
    const pSnap = await db.collection('questions').doc(parentId).get();
    if (pSnap.exists && pSnap.data().subQuestions) {
      const newSubQs = pSnap.data().subQuestions.map(sq => {
        const matchingQ = questionsToShrink.find(q => q.id === sq.id);
        if (matchingQ && sq.graphData && sq.graphData.svg) {
          let svg = sq.graphData.svg.replace(/viewBox="[^"]+"/, matchingQ.newViewBox);
          return { ...sq, graphData: { svg } };
        }
        return sq;
      });
      await pSnap.ref.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
      console.log('Updated parent', parentId, 'with shrunk SVGs');
    }
  }

  console.log('Done!');
  process.exit(0);
}

run().catch(console.error);
