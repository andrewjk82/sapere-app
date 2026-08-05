const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

async function fixGraphData() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // 1. Get the graphData from parent q14
  let doc14 = await db.collection('questions').doc('y10-8e-q14').get();
  if (!doc14.exists) {
    console.log("Parent q14 not found in DB.");
    process.exit(1);
  }
  let parentData = doc14.data();
  let graphData = parentData.graphData;

  // 2. Update flat q14a and q14b in Firestore
  await db.collection('questions').doc('y10-8e-q14a').update({ graphData: graphData });
  await db.collection('questions').doc('y10-8e-q14b').update({ graphData: graphData });
  console.log("Updated flat questions in Firestore.");

  // 3. Update the seed file in the codebase
  const filePath = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear10Ch8EQuestions.js';
  let content = fs.readFileSync(filePath, 'utf8');
  const match = content.match(/export const Y10_CH8E_QUESTIONS = (\[[\s\S]*\]);$/m);
  if (match) {
    let questions = eval(match[1]);
    let q14a = questions.find(x => x.id === 'y10-8e-q14a');
    let q14b = questions.find(x => x.id === 'y10-8e-q14b');
    
    if (q14a) q14a.graphData = graphData;
    if (q14b) q14b.graphData = graphData;
    
    const newArrayStr = JSON.stringify(questions, null, 2).replace(/"([^"]+)":/g, '$1:');
    fs.writeFileSync(filePath, content.substring(0, match.index) + 'export const Y10_CH8E_QUESTIONS = ' + newArrayStr + ';\n', 'utf8');
    console.log("Updated seed file.");
  } else {
    console.log("Could not find Y10_CH8E_QUESTIONS array in seed file.");
  }
  
  process.exit(0);
}

fixGraphData();
