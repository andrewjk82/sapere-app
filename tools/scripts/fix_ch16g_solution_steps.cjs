const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  const seedPath = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear9Ch16GQuestions.js';
  let content = fs.readFileSync(seedPath, 'utf8');
  
  const prefix = 'export const Y9_CH16G_QUESTIONS = ';
  if (!content.startsWith(prefix)) {
    console.error('File does not start with expected prefix.');
    process.exit(1);
  }
  
  const arrayString = content.slice(prefix.length).trim().replace(/;$/, '');
  let questions = JSON.parse(arrayString);
  
  let updatedCount = 0;
  for (let q of questions) {
    let modified = false;
    if (q.solutionSteps) {
      q.solutionSteps.forEach(step => {
        if (step.graphData && step.graphData.jsxGraph && step.graphData.jsxGraph.elements) {
          // This is a hallucinated schema. Let's just delete it to prevent viewer crashes.
          step.graphData = null;
          modified = true;
        }
      });
    }
    
    if (modified) {
      const docRef = db.collection('questions').doc(q.id);
      batch.update(docRef, { 
        solutionSteps: q.solutionSteps,
        updatedAt: FieldValue.serverTimestamp()
      });
      updatedCount++;
    }
  }

  if (updatedCount > 0) {
    await batch.commit();
    console.log(`Successfully fixed solutionSteps in ${updatedCount} questions in Firestore.`);
    
    const output = prefix + JSON.stringify(questions, null, 2) + ';\n';
    fs.writeFileSync(seedPath, output);
    console.log('Successfully updated seedYear9Ch16GQuestions.js locally.');
  } else {
    console.log('No questions needed fixing.');
  }

  process.exit(0);
}

run().catch(console.error);
