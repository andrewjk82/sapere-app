const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const filePath = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear9Ch11HQuestions.js';
let content = fs.readFileSync(filePath, 'utf8');

const match = content.match(/export const Y9_CH11H_QUESTIONS = (\[[\s\S]*\]);$/m);
let Y9_CH11H_QUESTIONS = eval(match[1]);

const targetPrefixes = ['y9-11h-q1', 'y9-11h-q2', 'y9-11h-q3', 'y9-11h-q4', 'y9-11h-q8'];

let modifiedIds = [];

Y9_CH11H_QUESTIONS.forEach(q => {
  const needsFix = targetPrefixes.some(prefix => q.id.startsWith(prefix)) && q.id !== 'y9-11h-q10';
  
  if (needsFix && q.graphData) {
    // Make sure we have the graph in solution steps before deleting it from root just to be safe
    if (q.solutionSteps && q.solutionSteps.length > 0 && !q.solutionSteps[0].graphData) {
      q.solutionSteps[0].graphData = q.graphData;
    }
    
    delete q.graphData;
    modifiedIds.push(q.id);
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
      const q = Y9_CH11H_QUESTIONS.find(x => x.id === id);
      
      const payload = {
        graphData: FieldValue.delete()
      };
      
      if (q.solutionSteps && q.solutionSteps.length > 0) {
        payload.solutionSteps = q.solutionSteps;
      }
      
      await docRef.update(payload);
      console.log('Removed root graphData for', id);
    }
  }

  const newArrayStr = JSON.stringify(Y9_CH11H_QUESTIONS, null, 2)
    .replace(/"([^"]+)":/g, '$1:');
  
  fs.writeFileSync(filePath, content.substring(0, match.index) + 'export const Y9_CH11H_QUESTIONS = ' + newArrayStr + ';\n', 'utf8');
  console.log('Updated local seed file.');
  process.exit(0);
}

run();
