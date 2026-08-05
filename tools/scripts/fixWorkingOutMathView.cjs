const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // Fix girr2020-mc12s
  const docRef12 = db.collection('questions').doc('girr2020-mc12s');
  const doc12 = await docRef12.get();
  if (doc12.exists) {
    const data = doc12.data();
    const newSteps = (data.solutionSteps || []).map(step => ({
      ...step,
      workingOut: step.workingOut ? (step.workingOut.startsWith('$') ? step.workingOut : `$${step.workingOut}$`) : ''
    }));
    await docRef12.update({ solutionSteps: newSteps, updatedAt: FieldValue.serverTimestamp() });
  }

  // Fix girr2020-mc13s
  const docRef13 = db.collection('questions').doc('girr2020-mc13s');
  const doc13 = await docRef13.get();
  if (doc13.exists) {
    const data = doc13.data();
    const newSteps = (data.solutionSteps || []).map(step => ({
      ...step,
      workingOut: step.workingOut ? (step.workingOut.startsWith('$') ? step.workingOut : `$${step.workingOut}$`) : ''
    }));
    await docRef13.update({ solutionSteps: newSteps, updatedAt: FieldValue.serverTimestamp() });
  }

  // Update sync version
  const questionsMetaRef = db.doc('sync_meta/questions');
  const now = Date.now();
  await questionsMetaRef.update({
    version: now,
    membershipVersion: now,
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log("Successfully wrapped workingOut in $ for girr2020-mc12s and girr2020-mc13s in Firestore");
  process.exit(0);
}

run().catch(console.error);
