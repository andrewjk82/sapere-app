const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  const questionsData = JSON.parse(fs.readFileSync('fetch_y9_11e_all.json', 'utf8'));
  let updatedCount = 0;

  for (const [id, data] of Object.entries(questionsData)) {
    let changed = false;

    // Check all solution steps for graphData
    if (data.solutionSteps) {
      data.solutionSteps.forEach(step => {
        if (step.graphData && step.graphData.jsxGraph && step.graphData.jsxGraph.script) {
          const script = step.graphData.jsxGraph.script;
          
          // Match board.create('line', [[x1, y1], [x2, y2]], ...);
          const lineRegex = /board\.create\('line',\s*\[\[([-0-9.]+),\s*([-0-9.]+)\],\s*\[([-0-9.]+),\s*([-0-9.]+)\]\],\s*(\{.*?\})\);/g;
          
          const newScript = script.replace(lineRegex, (match, x1, y1, x2, y2, options) => {
            x1 = parseFloat(x1);
            y1 = parseFloat(y1);
            x2 = parseFloat(x2);
            y2 = parseFloat(y2);
            
            if (x1 === x2) {
              return match; // Can't use functiongraph for vertical line
            }
            
            const m = (y2 - y1) / (x2 - x1);
            const c = y1 - m * x1;
            
            changed = true;
            return `board.create('functiongraph', [function(x){ return ${m}*x + ${c}; }], ${options});`;
          });
          
          if (changed) {
            step.graphData.jsxGraph.script = newScript;
          }
        }
      });
    }

    if (changed) {
      batch.update(db.collection('questions').doc(id), {
        solutionSteps: data.solutionSteps,
        updatedAt: FieldValue.serverTimestamp()
      });
      updatedCount++;
    }
  }

  await batch.commit();
  console.log(`Updated ${updatedCount} questions with functiongraph instead of line segments.`);
  process.exit(0);
}

run().catch(console.error);
