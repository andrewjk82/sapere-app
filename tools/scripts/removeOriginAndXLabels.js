import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

(async () => {
  try {
    console.log('[JSXGraph Force Remove] Fetching thermometer questions...');
    const snap = await db.collection('questions').where('chapterId', '==', 'y8-4').get();
    
    let patchedCount = 0;

    for (const doc of snap.docs) {
      const data = doc.data();
      let modified = false;

      const injectSettings = (script) => {
        if (script.includes("board.suspendUpdate();") && !script.includes("board.removeObject")) {
          const replacement = `board.suspendUpdate();
        board.options.point.withLabel = false;
        board.options.point.visible = false;
        if (board.defaultAxes) {
          if (board.defaultAxes.x) { board.defaultAxes.x.visible = false; if (board.defaultAxes.x.line) board.defaultAxes.x.line.visible = false; }
          if (board.defaultAxes.y) { board.defaultAxes.y.visible = false; if (board.defaultAxes.y.line) board.defaultAxes.y.line.visible = false; }
        }
        var objO = board.select('O'); if (objO) { board.removeObject(objO); }
        var objX = board.select('x'); if (objX) { board.removeObject(objX); }
        var objY = board.select('y'); if (objY) { board.removeObject(objY); }`;
          
          // Clear the previous patch first to avoid duplicate settings
          let cleanScript = script.replace("board.options.point.withLabel = false;\n        board.options.point.visible = false;", "");
          cleanScript = cleanScript.replace("board.options.point.withLabel = false;\r\n        board.options.point.visible = false;", "");
          return cleanScript.replace("board.suspendUpdate();", replacement);
        }
        return script;
      };

      // 1. Process top-level graphData
      if (data.graphData && data.graphData.jsxGraph && typeof data.graphData.jsxGraph.script === 'string') {
        const originalScript = data.graphData.jsxGraph.script;
        const newScript = injectSettings(originalScript);
        if (newScript !== originalScript) {
          data.graphData.jsxGraph.script = newScript;
          modified = true;
        }
      }

      // 2. Process solutionSteps graphData if exists
      if (data.solutionSteps && Array.isArray(data.solutionSteps)) {
        data.solutionSteps.forEach(step => {
          if (step.graphData && step.graphData.jsxGraph && typeof step.graphData.jsxGraph.script === 'string') {
            const originalScript = step.graphData.jsxGraph.script;
            const newScript = injectSettings(originalScript);
            if (newScript !== originalScript) {
              step.graphData.jsxGraph.script = newScript;
              modified = true;
            }
          }
        });
      }

      if (modified) {
        await doc.ref.update({
          graphData: data.graphData,
          solutionSteps: data.solutionSteps
        });
        console.log(`  [FORCE REMOVED] ID: ${doc.id}`);
        patchedCount++;
      }
    }

    console.log(`\nSuccessfully ran force remove labels for ${patchedCount} thermometer questions.`);
    process.exit(0);
  } catch (err) {
    console.error('Fatal error during force remove patch:', err);
    process.exit(1);
  }
})();
