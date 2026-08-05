const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // ----------------------------------------------------
  // girr2020-mc19cs
  // ----------------------------------------------------
  const steps19cs = [
    {
      explanation: 'To find $P(Y \\leq 1)$, we need to add the probabilities of all outcomes where $Y$ is less than or equal to $1$.',
      workingOut: '$P(Y \\leq 1) = P(Y=0) + P(Y=1)$'
    },
    {
      explanation: 'Substitute the given probability values from the distribution in part (a).',
      workingOut: '$P(Y \\leq 1) = 0.15 + 0.25$'
    },
    {
      explanation: 'Add the probabilities together to get the final answer.',
      workingOut: '$\\begin{aligned} P(Y \\leq 1) &= 0.40 \\end{aligned}$'
    }
  ];

  await db.collection('questions').doc('girr2020-mc19cs').update({
    solutionSteps: steps19cs,
    updatedAt: FieldValue.serverTimestamp()
  });

  // Update sync version
  const questionsMetaRef = db.doc('sync_meta/questions');
  const now = Date.now();
  await questionsMetaRef.update({
    version: now,
    membershipVersion: now,
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log("Updated 19cs in Firestore.");
  process.exit(0);
}

run().catch(console.error);
