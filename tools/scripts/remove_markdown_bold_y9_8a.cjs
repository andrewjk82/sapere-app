const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue, FieldPath } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const snap = await db.collection('questions')
    .where(FieldPath.documentId(), '>=', 'y9-8a')
    .where(FieldPath.documentId(), '<=', 'y9-8a\uf8ff')
    .get();

  let updateCount = 0;
  
  for (const doc of snap.docs) {
    const data = doc.data();
    let updates = {};
    let changed = false;
    
    // Check main document steps
    if (data.solutionSteps && Array.isArray(data.solutionSteps)) {
       const newSteps = data.solutionSteps.map(step => {
          if (step.explanation && step.explanation.includes('**')) {
             changed = true;
             return { ...step, explanation: step.explanation.replace(/\*\*/g, '') };
          }
          return step;
       });
       if (changed) updates.solutionSteps = newSteps;
    }
    
    // Check subQuestions steps
    if (data.subQuestions && Array.isArray(data.subQuestions)) {
       let subChanged = false;
       const newSubQs = data.subQuestions.map(sq => {
         if (sq.solutionSteps && Array.isArray(sq.solutionSteps)) {
            let sqStepsChanged = false;
            const newSqSteps = sq.solutionSteps.map(step => {
               if (step.explanation && step.explanation.includes('**')) {
                  subChanged = true;
                  sqStepsChanged = true;
                  return { ...step, explanation: step.explanation.replace(/\*\*/g, '') };
               }
               return step;
            });
            if (sqStepsChanged) {
               return { ...sq, solutionSteps: newSqSteps };
            }
         }
         return sq;
       });
       
       if (subChanged) {
          updates.subQuestions = newSubQs;
          changed = true;
       }
    }
    
    if (changed) {
       updates.updatedAt = FieldValue.serverTimestamp();
       await doc.ref.update(updates);
       updateCount++;
    }
  }

  console.log('Removed markdown bold tags from', updateCount, 'documents in Year 9 Chapter 8A');
  process.exit(0);
}

run().catch(console.error);
