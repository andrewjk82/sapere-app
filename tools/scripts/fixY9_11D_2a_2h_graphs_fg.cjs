const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  const equations = {
    'y9-11d-q2a': '3*x + 2',
    'y9-11d-q2b': '2*x + 5',
    'y9-11d-q2c': '-3*x + 4',
    'y9-11d-q2d': '-2*x + 2',
    'y9-11d-q2e': '-4*x - 3',
    'y9-11d-q2f': '-3*x - 5',
    'y9-11d-q2g': '(1/3)*x - 3',
    'y9-11d-q2h': '(3/4)*x + 2'
  };

  const ids = Object.keys(equations);

  function fixScript(script, eq) {
    if (!script) return script;
    // Remove the bad line creation
    let newScript = script.replace(/board\.create\('line', \[pt1, pt2\].*?\);\n?/, '');
    // Insert function graph before unsuspendUpdate
    const fg = `board.create('functiongraph', [function(x){ return ${eq}; }], {strokeColor: 'blue', strokeWidth: 2});\n`;
    newScript = newScript.replace('board.unsuspendUpdate();', fg + 'board.unsuspendUpdate();');
    return newScript;
  }

  for (let id of ids) {
    const docRef = db.collection('questions').doc(id);
    const doc = await docRef.get();
    if (!doc.exists) continue;

    const data = doc.data();
    let updates = {};
    let changed = false;

    if (data.graphData && data.graphData.jsxGraph && data.graphData.jsxGraph.script) {
      const oldScript = data.graphData.jsxGraph.script;
      const newScript = fixScript(oldScript, equations[id]);
      if (oldScript !== newScript) {
        updates.graphData = {
          ...data.graphData,
          jsxGraph: { ...data.graphData.jsxGraph, script: newScript }
        };
        changed = true;
      }
    }

    if (data.solutionSteps && data.solutionSteps.length > 0) {
      let stepsChanged = false;
      let newSteps = data.solutionSteps.map(step => {
        if (step.graphData && step.graphData.jsxGraph && step.graphData.jsxGraph.script) {
          const oldScript = step.graphData.jsxGraph.script;
          const newScript = fixScript(oldScript, equations[id]);
          if (oldScript !== newScript) {
            stepsChanged = true;
            return {
              ...step,
              graphData: {
                ...step.graphData,
                jsxGraph: { ...step.graphData.jsxGraph, script: newScript }
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
  console.log("Fixed graphs using functiongraph for y9-11d-q2a to 2h.");
  process.exit(0);
}

run().catch(console.error);
