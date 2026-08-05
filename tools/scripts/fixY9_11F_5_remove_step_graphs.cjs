const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  const subQIds = ['y9-11f-q5a', 'y9-11f-q5b', 'y9-11f-q5c', 'y9-11f-q5d', 'y9-11f-q5e'];
  
  for (const id of subQIds) {
    const docRef = db.collection('questions').doc(id);
    const doc = await docRef.get();
    if (doc.exists) {
      let data = doc.data();
      let changed = false;
      
      // Also remove root graphData from sub-questions, since the parent document already has it!
      // Wait, if it's rendered standalone, it needs a root graphData. The user complained about the one inside the step.
      // Let's just remove it from solutionSteps.
      if (data.solutionSteps) {
        data.solutionSteps.forEach(step => {
          if (step.graphData !== null) {
            step.graphData = null;
            changed = true;
          }
        });
      }
      
      if (changed) {
        batch.update(docRef, {
          solutionSteps: data.solutionSteps,
          updatedAt: FieldValue.serverTimestamp()
        });
      }
    }
  }

  const parentRef = db.collection('questions').doc('y9-11f-q5');
  const parentDoc = await parentRef.get();
  if (parentDoc.exists) {
    let parentData = parentDoc.data();
    let changed = false;
    
    if (parentData.subQuestions) {
      parentData.subQuestions.forEach(sq => {
        if (sq.solutionSteps) {
          sq.solutionSteps.forEach(step => {
            if (step.graphData !== null) {
              step.graphData = null;
              changed = true;
            }
          });
        }
      });
    }
    
    if (changed) {
      batch.update(parentRef, {
        subQuestions: parentData.subQuestions,
        updatedAt: FieldValue.serverTimestamp()
      });
    }
  }

  await batch.commit();
  console.log("Removed redundant graphData from solutionSteps successfully.");
  process.exit(0);
}

run().catch(console.error);
