const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const filePath = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear10Ch11AQuestions.js';
let content = fs.readFileSync(filePath, 'utf8');

const match = content.match(/export const Y10_CH11A_QUESTIONS = (\[[\s\S]*\]);$/m);
if (!match) {
  console.error("Could not parse file.");
  process.exit(1);
}

let Y10_CH11A_QUESTIONS = eval(match[1]);
const modifiedIds = new Set();

Y10_CH11A_QUESTIONS.forEach(q => {
  let changed = false;

  // 1. Remove root graphData from ALL questions in 11A so the answer isn't given away in the question stem
  if (q.graphData) {
    delete q.graphData;
    changed = true;
  }

  // 2. Fix the hallucinated options for q3 and q4 series
  if ((q.id.startsWith('y10-11a-q3') || q.id.startsWith('y10-11a-q4')) && q.opts) {
    // The question asks "Enter 'Yes' or 'No'"
    q.opts = ["Yes", "No"];
    changed = true;
  }
  
  if (changed) {
    modifiedIds.add(q.id);
  }
});

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  for (const id of modifiedIds) {
    const docRef = db.collection('questions').doc(id);
    const doc = await docRef.get();
    
    if (doc.exists) {
      const q = Y10_CH11A_QUESTIONS.find(x => x.id === id);
      
      const updatePayload = {};
      if (q.id.startsWith('y10-11a-q3') || q.id.startsWith('y10-11a-q4')) {
        updatePayload.opts = ["Yes", "No"];
      }
      
      // Firestore delete for a field uses FieldValue.delete(). But since we're using admin SDK, we can't easily import FieldValue without it.
      // So let's just require it.
      const { FieldValue } = require('firebase-admin/firestore');
      updatePayload.graphData = FieldValue.delete();
      
      await docRef.update(updatePayload);
      console.log('Fixed', id, 'in Firestore');
    }
  }

  const newArrayStr = JSON.stringify(Y10_CH11A_QUESTIONS, null, 2)
    .replace(/"([^"]+)":/g, '$1:');
  
  fs.writeFileSync(filePath, content.substring(0, match.index) + 'export const Y10_CH11A_QUESTIONS = ' + newArrayStr + ';\n', 'utf8');
  console.log('Updated local seed file.');
  process.exit(0);
}

run();
