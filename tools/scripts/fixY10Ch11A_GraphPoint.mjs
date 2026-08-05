import fs from 'fs';
import path from 'path';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';

const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

async function run() {
  const filepath = path.resolve('src/constants/seedYear10Ch11AQuestions.js');
  let content = fs.readFileSync(filepath, 'utf8');
  let match = content.match(/export const Y10_CH11A_QUESTIONS = (\[[\s\S]*\]);\n$/);
  let questions = eval(match[1]);
  
  let rootUpdates = [];
  let parentUpdates = {};
  let updateCount = 0;

  for (let q of questions) {
    if (q.question && q.question.includes('Check whether or not the point')) {
      let ptMatch = q.question.match(/point \\\(\((.*?)\)\\\)/);
      if(ptMatch && q.solutionSteps && q.solutionSteps[0].graphData && q.solutionSteps[0].graphData.jsxGraph) {
        let ptStr = ptMatch[1]; // e.g. "-1, 7" or "5\\sqrt{2}, 0"
        let parts = ptStr.split(',');
        let xRaw = parts[0].trim();
        let yRaw = parts[1].trim();
        
        // Evaluate the coordinate value in JS for JSXGraph
        // Note: xRaw could be "-1", "5\\sqrt{2}", etc.
        let xEvalStr = xRaw.replace(/\\sqrt\{(\d+)\}/g, 'Math.sqrt($1)').replace(/(\d)(Math)/g, '$1*$2');
        let yEvalStr = yRaw.replace(/\\sqrt\{(\d+)\}/g, 'Math.sqrt($1)').replace(/(\d)(Math)/g, '$1*$2');
        let xVal = eval(xEvalStr);
        let yVal = eval(yEvalStr);

        let script = q.solutionSteps[0].graphData.jsxGraph.script;
        
        // Check if point is already plotted to avoid duplicates
        // Note: the point name will be the raw LaTeX string, e.g. $(-1, 7)$ or $(5\sqrt{2}, 0)$
        // JSXGraph allows math in names using LaTeX, e.g. name: '$(-1, 7)$'
        let pointName = `'$(${xRaw.replace(/\\/g, '\\\\')}, ${yRaw.replace(/\\/g, '\\\\')})$'`;
        
        // Cleanup any broken point commands from previous run
        script = script.replace(/board\.create\('point', \[[^\]]+\], \{name:'\$\([^)]+\), size:3, color:'#ef4444', label: \{autoPosition: true, offset: \[10, 10\]\}\}\);\s*/g, '');

        if (!script.includes(`color:'#ef4444'`)) {
          // Find the last board.unsuspendUpdate(); and insert the point before it
          let newPointCmd = `board.create('point', [${xVal}, ${yVal}], {name:${pointName}, size:3, color:'#ef4444', label: {autoPosition: true, offset: [10, 10]}}); `;
          script = script.replace('board.unsuspendUpdate();', () => newPointCmd + 'board.unsuspendUpdate();');
          q.solutionSteps[0].graphData.jsxGraph.script = script;
          
          rootUpdates.push(q);
          const parentId = q.id.replace(/[a-z]$/, '');
          if (parentId !== q.id) {
            if (!parentUpdates[parentId]) parentUpdates[parentId] = [];
            parentUpdates[parentId].push(q);
          }
          updateCount++;
        }
      }
    }
  }

  if (updateCount > 0) {
    const newFileContent = `export const Y10_CH11A_QUESTIONS = ` + JSON.stringify(questions, null, 2) + ";\n";
    fs.writeFileSync(filepath, newFileContent, 'utf8');
    console.log(`Updated ${updateCount} questions.`);
  }

  // Update root docs in Firestore
  for (const rq of rootUpdates) {
    try {
      await db.collection('questions').doc(rq.id).update({
        solutionSteps: rq.solutionSteps,
        updatedAt: FieldValue.serverTimestamp()
      });
      console.log(`Successfully updated root document ${rq.id}`);
    } catch(e) {
      console.error(`Failed to update root document ${rq.id}:`, e);
    }
  }

  // Update parent docs in Firestore
  for (const [parentId, subQs] of Object.entries(parentUpdates)) {
    try {
      const parentRef = db.collection('questions').doc(parentId);
      const parentSnap = await parentRef.get();
      if (parentSnap.exists) {
        let parentData = parentSnap.data();
        let currentSubQs = parentData.subQuestions || [];
        for (let i = 0; i < currentSubQs.length; i++) {
          const newSq = subQs.find(s => s.id === currentSubQs[i].id);
          if (newSq) {
            currentSubQs[i].solutionSteps = newSq.solutionSteps;
          }
        }
        await parentRef.update({
          subQuestions: currentSubQs,
          updatedAt: FieldValue.serverTimestamp()
        });
        console.log(`Successfully updated parent ${parentId} with subQuestions`);
      }
    } catch(e) {
      console.error(`Failed to update parent ${parentId}:`, e);
    }
  }
}

run().catch(console.error);
