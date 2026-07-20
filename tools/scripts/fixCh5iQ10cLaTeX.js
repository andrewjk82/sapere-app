import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

async function run() {
  const batch = db.batch();
  const docRef = db.collection('questions').doc('y9-5i-q10c');

  const snap = await docRef.get();
  if (snap.exists) {
    const data = snap.data();
    const updatedSteps = data.solutionSteps.map((step, idx) => {
      if (idx === 1) { // Step 2 (0-indexed 1)
        return {
          ...step,
          workingOut: "25\\text{ dollars} = 2500\\text{ cents}"
        };
      }
      return step;
    });

    // Also let's wrap all workingOuts of y9-5i-q10c in \(\) to be consistent and render in beautiful math font
    const wrappedSteps = updatedSteps.map(step => {
      let wo = step.workingOut || "";
      if (wo.trim() && !wo.startsWith('\\(') && !wo.startsWith('$$') && !wo.startsWith('$')) {
        wo = `\\(${wo}\\)`;
      }
      return {
        ...step,
        workingOut: wo
      };
    });

    console.log('Updating y9-5i-q10c solution steps to use clean dollars/cents and wrap in math delimiters...');
    batch.update(docRef, {
      solutionSteps: wrappedSteps
    });
  }

  // Update sync version
  const questionsMetaRef = db.doc('sync_meta/questions');
  const now = Date.now();
  batch.update(questionsMetaRef, {
    version: now,
    membershipVersion: now,
    updatedAt: FieldValue.serverTimestamp()
  });

  await batch.commit();
  console.log('Successfully completed fixing y9-5i-q10c step 2 in Firestore!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
