import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

async function run() {
  const batch = db.batch();
  const questionsCol = db.collection('questions');

  // Query all Chapter 5H questions
  const snap = await questionsCol.orderBy('__name__').startAt('y9-5h').endAt('y9-5h\uf8ff').get();
  console.log(`Auditing and wrapping workingOut of ${snap.size} Chapter 5H questions in \\(...\\) delimiters...`);

  snap.forEach(doc => {
    const data = doc.data();
    if (!Array.isArray(data.solutionSteps)) return;

    let modified = false;
    const updatedSteps = data.solutionSteps.map(step => {
      let wo = step.workingOut || "";
      if (wo.trim() && !wo.startsWith('\\(') && !wo.startsWith('$$') && !wo.startsWith('$') && !wo.startsWith('\\[') && !wo.startsWith('`')) {
        // Wrap the raw equation in standard KaTeX math delimiters
        wo = `\\(${wo}\\)`;
        modified = true;
      }
      return {
        ...step,
        workingOut: wo
      };
    });

    if (modified) {
      console.log(`Wrapping workingOut in math delimiters for doc ${doc.id}...`);
      batch.update(doc.ref, {
        solutionSteps: updatedSteps
      });
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
  console.log('Successfully completed wrapping workingOut in math delimiters for Chapter 5H!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
