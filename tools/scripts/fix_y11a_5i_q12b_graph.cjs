const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const filePath = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear11Ch5IQuestions.js';
let content = fs.readFileSync(filePath, 'utf8');
const match = content.match(/export const Y11_CH5I_QUESTIONS = (\[[\s\S]*\]);$/m);
let questions = eval(match[1]);

let updatedQ = null;

let q = questions.find(x => x.id === 'y11a-5i-q12b');
if (!q) {
  let parent = questions.find(x => x.subQuestions && x.subQuestions.some(sq => sq.id === 'y11a-5i-q12b'));
  if (parent) q = parent.subQuestions.find(sq => sq.id === 'y11a-5i-q12b');
}

if (q && q.solutionSteps && q.solutionSteps.length > 0) {
  let lastStep = q.solutionSteps[q.solutionSteps.length - 1];
  if (lastStep.graphData && lastStep.graphData.jsxGraph) {
    let script = lastStep.graphData.jsxGraph.script;
    script = script.replace(/3-\\\\sqrt\{7\}/g, '3-√7');
    script = script.replace(/3\+\\\\sqrt\{7\}/g, '3+√7');
    
    // Just in case it was stored with single slash
    script = script.replace(/3-\\sqrt\{7\}/g, '3-√7');
    script = script.replace(/3\+\\sqrt\{7\}/g, '3+√7');
    
    lastStep.graphData.jsxGraph.script = script;
    updatedQ = q;
  }
}

if (updatedQ) {
  const newArrayStr = JSON.stringify(questions, null, 2).replace(/"([a-zA-Z_$][0-9a-zA-Z_$]*)":/g, '$1:');
  fs.writeFileSync(filePath, content.substring(0, match.index) + 'export const Y11_CH5I_QUESTIONS = ' + newArrayStr + ';\n', 'utf8');

  async function updateDb() {
    const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
    initializeApp({ credential: cert(serviceAccount) });
    const db = getFirestore();
    
    let isSub = !questions.find(x => x.id === updatedQ.id);
    if (!isSub) {
      await db.collection('questions').doc(updatedQ.id).update({
        solutionSteps: updatedQ.solutionSteps
      });
    } else {
      let parent = questions.find(x => x.subQuestions && x.subQuestions.some(sq => sq.id === updatedQ.id));
      if (parent) {
        let parentDoc = await db.collection('questions').doc(parent.id).get();
        if (parentDoc.exists) {
          let pData = parentDoc.data();
          let sqIdx = pData.subQuestions.findIndex(sq => sq.id === updatedQ.id);
          if (sqIdx > -1) {
            pData.subQuestions[sqIdx].solutionSteps = updatedQ.solutionSteps;
            await db.collection('questions').doc(parent.id).update({
              subQuestions: pData.subQuestions
            });
          }
        }
      }
    }
    console.log('Successfully fixed the unicode labels for q12b graph.');
    process.exit(0);
  }
  updateDb();
} else {
  console.log("q12b or its graph not found.");
  process.exit(0);
}
