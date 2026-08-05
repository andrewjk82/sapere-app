const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const qIds = ['y10-7h-q6a', 'y10-7h-q6b', 'y10-7h-q6c', 'y10-7h-q6d', 'y10-7h-q6e', 'y10-7h-q6f'];
  
  // We'll fetch each doc, find the graphData in the last step, and replace the axis of symmetry line.
  for (const id of qIds) {
    const docRef = db.collection('questions').doc(id);
    const snap = await docRef.get();
    if (snap.exists) {
      const data = snap.data();
      if (data.solutionSteps && data.solutionSteps.length > 0) {
        const steps = [...data.solutionSteps];
        const lastStep = steps[steps.length - 1];
        if (lastStep.graphData && lastStep.graphData.jsxGraph) {
          let script = lastStep.graphData.jsxGraph.script;
          // Find the bounding box yMin and yMax
          const bb = lastStep.graphData.jsxGraph.boundingbox; // [xMin, yMax, xMax, yMin]
          const yMax = bb[1];
          const yMin = bb[3];
          
          // The line creation string looks like:
          // board.create('line',[[2,0],[2,1]],{strokeColor:'#f59e0b',strokeWidth:1.5,dash:2});
          // We will replace it with a segment that spans from yMin to yMax
          script = script.replace(/board\.create\('line',\[\[([\-\d\.]+),0\],\[([\-\d\.]+),1\]\]/g, 
            `board.create('segment',[[$1,${yMin}],[$1,${yMax}]]`);
          
          lastStep.graphData.jsxGraph.script = script;
        }
        await docRef.update({
          solutionSteps: steps,
          updatedAt: FieldValue.serverTimestamp()
        });
      }
    }
  }

  // Update parent subQuestions for q6
  const pRef = db.collection('questions').doc('y10-7h-q6');
  const pSnap = await pRef.get();
  if (pSnap.exists && pSnap.data().subQuestions) {
    const newSubQs = pSnap.data().subQuestions.map(sq => {
      if (qIds.includes(sq.id)) {
        if (sq.solutionSteps && sq.solutionSteps.length > 0) {
          const lastStep = sq.solutionSteps[sq.solutionSteps.length - 1];
          if (lastStep.graphData && lastStep.graphData.jsxGraph) {
            let script = lastStep.graphData.jsxGraph.script;
            const bb = lastStep.graphData.jsxGraph.boundingbox;
            const yMax = bb[1];
            const yMin = bb[3];
            script = script.replace(/board\.create\('line',\[\[([\-\d\.]+),0\],\[([\-\d\.]+),1\]\]/g, 
              `board.create('segment',[[$1,${yMin}],[$1,${yMax}]]`);
            lastStep.graphData.jsxGraph.script = script;
          }
        }
      }
      return sq;
    });
    await pRef.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
  }

  console.log("Fixed axis of symmetry to span the full graph height");
  process.exit(0);
}

run().catch(console.error);
