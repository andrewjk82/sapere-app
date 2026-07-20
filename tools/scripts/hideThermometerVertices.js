import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

(async () => {
  try {
    console.log('[JSXGraph Patch] Fetching thermometer questions in Chapter 4...');
    const snap = await db.collection('questions').where('chapterId', '==', 'y8-4').get();
    
    let patchedCount = 0;

    for (const doc of snap.docs) {
      const data = doc.data();
      let modified = false;

      // 1. Process top-level graphData
      if (data.graphData && data.graphData.jsxGraph && typeof data.graphData.jsxGraph.script === 'string') {
        let script = data.graphData.jsxGraph.script;
        
        // Check if vertices option is missing for polygon creations
        if (script.includes("board.create('polygon'") && !script.includes("vertices: {visible: false}")) {
          // Replace standard polygon lines to inject the vertices option
          script = script.replace(
            /board\.create\('polygon',\s*\[\[-2\.5,\s*50\],\s*\[2\.5,\s*50\],\s*\[2\.5,\s*yOffset\+4\],\s*\[-2\.5,\s*yOffset\+4\]\],\s*\{fillColor:\s*'#f8f9fa',\s*strokeColor:\s*'#475569',\s*borders:\s*\{strokeWidth:\s*1\}\}\);/g,
            "board.create('polygon', [[-2.5, 50], [2.5, 50], [2.5, yOffset+4], [-2.5, yOffset+4]], {fillColor: '#f8f9fa', strokeColor: '#475569', borders: {strokeWidth: 1}, vertices: {visible: false}});"
          );
          
          script = script.replace(
            /board\.create\('polygon',\s*\[\[-1\.5,\s*(-?\d+(\.\d+)?|yOffset\+\d+)\],\s*\[1\.5,\s*(-?\d+(\.\d+)?|yOffset\+\d+)\],\s*\[1\.5,\s*yOffset\+4\],\s*\[-1\.5,\s*yOffset\+4\]\],\s*\{fillColor:\s*'#cc0000',\s*strokeColor:\s*'#cc0000',\s*borders:\s*\{strokeWidth:\s*0\}\}\);/g,
            "board.create('polygon', [[-1.5, $1], [1.5, $3], [1.5, yOffset+4], [-1.5, yOffset+4]], {fillColor: '#cc0000', strokeColor: '#cc0000', borders: {strokeWidth: 0}, vertices: {visible: false}});"
          );

          // General fallback regex just in case format slightly differs
          script = script.replace(
            /borders:\s*\{strokeWidth:\s*(\d+)\}\s*\}(?!\s*,\s*vertices)/g,
            "borders: {strokeWidth: $1}, vertices: {visible: false}}"
          );

          data.graphData.jsxGraph.script = script;
          modified = true;
        }
      }

      // 2. Process solutionSteps graphData if exists
      if (data.solutionSteps && Array.isArray(data.solutionSteps)) {
        data.solutionSteps.forEach(step => {
          if (step.graphData && step.graphData.jsxGraph && typeof step.graphData.jsxGraph.script === 'string') {
            let script = step.graphData.jsxGraph.script;
            if (script.includes("board.create('polygon'") && !script.includes("vertices: {visible: false}")) {
              script = script.replace(
                /borders:\s*\{strokeWidth:\s*(\d+)\}\s*\}(?!\s*,\s*vertices)/g,
                "borders: {strokeWidth: $1}, vertices: {visible: false}}"
              );
              step.graphData.jsxGraph.script = script;
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
        console.log(`  [PATCHED JSXGRAPH] ID: ${doc.id}`);
        patchedCount++;
      }
    }

    console.log(`\nSuccessfully hid vertices for ${patchedCount} thermometer questions.`);
    process.exit(0);
  } catch (err) {
    console.error('Fatal error during patch:', err);
    process.exit(1);
  }
})();
