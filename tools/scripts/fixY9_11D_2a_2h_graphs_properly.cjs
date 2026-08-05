const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  const ids = ['y9-11d-q2a', 'y9-11d-q2b', 'y9-11d-q2c', 'y9-11d-q2d', 'y9-11d-q2e', 'y9-11d-q2f', 'y9-11d-q2g', 'y9-11d-q2h'];

  function fixScript(script) {
    if (!script) return script;
    // Find the line coordinates
    const lineRegex = /board\.create\('line',\s*(\[\[.*?\]\])/;
    const match = script.match(lineRegex);
    if (!match) return script;

    const coordsStr = match[1]; // e.g. "[[0, 2], [1, 5]]"
    let coords = JSON.parse(coordsStr); // [[0,2], [1,5]]

    // Remove the old line creation
    let newScript = script.replace(/board\.create\('line'.*?\);\n?/, '');

    // Now find the points and make them variables
    // Replace board.create('point', [0, 2] with var p1 = board.create('point', [0, 2]
    // Note: the coordinates might have spaces like [0, 2] vs [0,2], so we use regex or just replace specifically.
    // Let's just find the first point and second point creation
    let p1Found = false;
    let p2Found = false;
    
    // Instead of regex hacking the points, let's just replace all `board.create('point', ` with `var ptX = board.create('point', `
    let count = 1;
    newScript = newScript.replace(/board\.create\('point',/g, function() {
      return `var pt${count++} = board.create('point',`;
    });

    // Now insert the line creation right before board.unsuspendUpdate();
    newScript = newScript.replace('board.unsuspendUpdate();', "board.create('line', [pt1, pt2], {strokeColor: 'blue', strokeWidth: 2});\nboard.unsuspendUpdate();");

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
      const newScript = fixScript(oldScript);
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
          const newScript = fixScript(oldScript);
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
  console.log("Properly fixed graphs using variables for points for y9-11d-q2a to 2h.");
  process.exit(0);
}

run().catch(console.error);
