const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  // Get the correct data from asc2020-q17-a
  const correctDoc = await db.collection('questions').doc('asc2020-q17-a').get();
  if (!correctDoc.exists) throw new Error("correct doc missing");
  const correctData = correctDoc.data();
  
  // Update asc2020-q17a
  await db.collection('questions').doc('asc2020-q17a').update({
    type: "multiple_choice",
    opts: correctData.opts,
    options: correctData.options,
    a: correctData.a,
    answer: correctData.answer,
    solutionSteps: correctData.solutionSteps,
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.doc('sync_meta/questions').update({
    version: Date.now(),
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Successfully updated asc2020-q17a to match asc2020-q17-a!');
  process.exit(0);
}
run();
