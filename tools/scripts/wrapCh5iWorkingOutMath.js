import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

async function run() {
  const batch = db.batch();
  const questionsCol = db.collection('questions');

  // Query all Chapter 5I questions
  const snap = await questionsCol.orderBy('__name__').startAt('y9-5i').endAt('y9-5i\uf8ff').get();
  console.log(`Auditing and wrapping workingOut of ${snap.size} Chapter 5I questions in \\(...\\) delimiters...`);

  snap.forEach(doc => {
    const data = doc.data();
    
    // Check main solutionSteps
    let modified = false;
    let updatedSteps = null;
    if (Array.isArray(data.solutionSteps)) {
      updatedSteps = data.solutionSteps.map(step => {
        let wo = step.workingOut || "";
        if (wo.trim() && !wo.startsWith('\\(') && !wo.startsWith('$$') && !wo.startsWith('$') && !wo.startsWith('\\[') && !wo.startsWith('`')) {
          wo = `\\(${wo}\\)`;
          modified = true;
        }
        return {
          ...step,
          workingOut: wo
        };
      });
    }

    // Check subQuestions solutionSteps
    let updatedSubs = null;
    if (Array.isArray(data.subQuestions)) {
      updatedSubs = data.subQuestions.map(sq => {
        if (Array.isArray(sq.solutionSteps)) {
          const updatedSqSteps = sq.solutionSteps.map(step => {
            let wo = step.workingOut || "";
            if (wo.trim() && !wo.startsWith('\\(') && !wo.startsWith('$$') && !wo.startsWith('$') && !wo.startsWith('\\[') && !wo.startsWith('`')) {
              wo = `\\(${wo}\\)`;
              modified = true;
            }
            return {
              ...step,
              workingOut: wo
            };
          });
          return {
            ...sq,
            solutionSteps: updatedSqSteps
          };
        }
        return sq;
      });
    }

    if (modified) {
      console.log(`Wrapping workingOut in math delimiters for doc ${doc.id}...`);
      const updatePayload = {};
      if (updatedSteps) updatePayload.solutionSteps = updatedSteps;
      if (updatedSubs) updatePayload.subQuestions = updatedSubs;
      
      batch.update(doc.ref, updatePayload);
    }
  });

  // Update sync version
  const questionsMetaRef = db.doc('sync_meta/questions');
  const now = Date.now();
  batch.update(questionsMetaRef, {
    version: now,
    membershipVersion: now,
    updatedAt: FieldValue.serverTimestamp()
  });

  await batch.commit();
  console.log('Successfully wrapped all Chapter 5I workingOut fields in math delimiters!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
