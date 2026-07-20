import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

(async () => {
  try {
    console.log('[JSXGraph Label Patch] Fetching thermometer questions...');
    const snap = await db.collection('questions').where('chapterId', '==', 'y8-4').get();
    
    let patchedCount = 0;

    for (const doc of snap.docs) {
      const data = doc.data();
      let modified = false;

      const injectSettings = (script) => {
        if (script.includes("board.suspendUpdate();") && !script.includes("board.options.point.withLabel = false;")) {
          // Inject point options disabling labels right after suspendUpdate
          const replacement = `board.suspendUpdate();\n        board.options.point.withLabel = false;\n        board.options.point.visible = false;`;
          return script.replace("board.suspendUpdate();", replacement);
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
        console.log(`  [LABELS HIDDEN] ID: ${doc.id}`);
        patchedCount++;
      }
    }

    console.log(`\nSuccessfully hid origin and axis labels for ${patchedCount} thermometer questions.`);
    process.exit(0);
  } catch (err) {
    console.error('Fatal error during patch:', err);
    process.exit(1);
  }
})();
