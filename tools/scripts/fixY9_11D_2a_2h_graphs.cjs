const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  const ids = ['y9-11d-q2a', 'y9-11d-q2b', 'y9-11d-q2c', 'y9-11d-q2d', 'y9-11d-q2e', 'y9-11d-q2f', 'y9-11d-q2g', 'y9-11d-q2h'];

  for (let id of ids) {
    const docRef = db.collection('questions').doc(id);
    const doc = await docRef.get();
    if (!doc.exists) continue;

    const data = doc.data();
    let updates = {};
    let changed = false;

    // Fix top-level graphData
    if (data.graphData && data.graphData.jsxGraph && data.graphData.jsxGraph.script) {
      let script = data.graphData.jsxGraph.script;
      if (script.includes("{strokeColor: 'blue', strokeWidth: 2}") && !script.includes("straightFirst: true")) {
        script = script.replace("{strokeColor: 'blue', strokeWidth: 2}", "{strokeColor: 'blue', strokeWidth: 2, straightFirst: true, straightLast: true}");
        updates.graphData = {
          ...data.graphData,
          jsxGraph: {
            ...data.graphData.jsxGraph,
            script: script
          }
        };
        changed = true;
      }
    }

    // Fix solutionSteps graphData
    if (data.solutionSteps && data.solutionSteps.length > 0) {
      let stepsChanged = false;
      let newSteps = data.solutionSteps.map(step => {
        if (step.graphData && step.graphData.jsxGraph && step.graphData.jsxGraph.script) {
          let script = step.graphData.jsxGraph.script;
          if (script.includes("{strokeColor: 'blue', strokeWidth: 2}") && !script.includes("straightFirst: true")) {
            script = script.replace("{strokeColor: 'blue', strokeWidth: 2}", "{strokeColor: 'blue', strokeWidth: 2, straightFirst: true, straightLast: true}");
            stepsChanged = true;
            return {
              ...step,
              graphData: {
                ...step.graphData,
                jsxGraph: {
                  ...step.graphData.jsxGraph,
                  script: script
                }
              }
            };
          }
        }
        return step;
      });

      if (stepsChanged) {
        updates.solutionSteps = newSteps;
        changed = true;
      }
    }

    if (changed) {
      updates.updatedAt = FieldValue.serverTimestamp();
      batch.update(docRef, updates);
    }
  }

  await batch.commit();
  console.log("Updated graphs to be proper lines for y9-11d-q2a to 2h.");
  process.exit(0);
}

run().catch(console.error);
