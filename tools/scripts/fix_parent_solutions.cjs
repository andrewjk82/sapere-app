const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // Clear solution and solutionSteps from parent documents y8-19a-q2 and y8-19a-q10
  // Since the subquestions now contain detailed solutions, having them in the parent is redundant.

  await db.collection('questions').doc('y8-19a-q2').update({
    solution: '',
    solutionSteps: [],
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.collection('questions').doc('y8-19a-q10').update({
    solution: '',
    solutionSteps: [],
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log("Removed redundant parent solutions for y8-19a-q2 and y8-19a-q10");
  process.exit(0);
}

run().catch(console.error);
