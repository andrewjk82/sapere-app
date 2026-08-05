const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const correctTicks = `  <!-- AB (double) -->
  <line x1="93" y1="111" x2="101" y2="117" stroke="#000" stroke-width="1.5"/>
  <line x1="99" y1="103" x2="107" y2="109" stroke="#000" stroke-width="1.5"/>
  <!-- CB (double) -->
  <line x1="193" y1="109" x2="201" y2="103" stroke="#000" stroke-width="1.5"/>
  <line x1="199" y1="117" x2="207" y2="111" stroke="#000" stroke-width="1.5"/>`;

  // Function to replace ticks
  const replaceTicks = (svg) => {
    return svg.replace(/<!-- AB \(double\) -->[\s\S]*?<!-- AD \(single\) -->/, correctTicks + '\n  \n  <!-- AD (single) -->');
  };

  const updateDoc = async (id) => {
    const snap = await db.collection('questions').doc(id).get();
    if (snap.exists) {
      const data = snap.data();
      if (data.graphData && data.graphData.svg) {
        const newSvg = replaceTicks(data.graphData.svg);
        await snap.ref.update({
          'graphData.svg': newSvg,
          updatedAt: FieldValue.serverTimestamp()
        });
        console.log('Updated SVG for', id);
      }
    }
  };

  await updateDoc('y10-8e-q13');
  await updateDoc('y10-8e-q13a');
  await updateDoc('y10-8e-q13b');

  const pSnap = await db.collection('questions').doc('y10-8e-q13').get();
  if (pSnap.exists && pSnap.data().subQuestions) {
    const newSubQs = pSnap.data().subQuestions.map(sq => {
      if (sq.graphData && sq.graphData.svg) {
        return { ...sq, graphData: { svg: replaceTicks(sq.graphData.svg) } };
      }
      return sq;
    });
    await pSnap.ref.update({
      subQuestions: newSubQs,
      updatedAt: FieldValue.serverTimestamp()
    });
    console.log('Updated parent subQuestions for q13');
  }

  console.log('Done!');
  process.exit(0);
}

run().catch(console.error);
