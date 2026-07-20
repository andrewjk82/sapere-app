import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

async function run() {
  const docRef = db.collection('questions').doc('cR3Rwod6nxnPELv16cIx');
  const doc = await docRef.get();
  const subQuestions = doc.data().subQuestions;

  // Replace \\; with \; in subQuestions[0].solutionSteps[0].workingOut
  // In Javascript string literal, \\; is "\\\\;" and \; is "\\;"
  const steps = subQuestions[0].solutionSteps;
  steps[0].workingOut = steps[0].workingOut.replace(/\\\\;/g, '\\;');
  
  console.log('Fixed workingOut:', steps[0].workingOut);

  await docRef.update({
    subQuestions,
    isNew: true
  });

  // Update sync version
  const questionsMetaRef = db.doc('sync_meta/questions');
  const now = Date.now();
  await questionsMetaRef.update({
    version: now,
    membershipVersion: now,
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Done!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
