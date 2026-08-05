const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  const steps = [
    { explanation: 'Identify the gradient of both lines from their equations.', workingOut: 'm_1 = (2a + 3), \\quad m_2 = a', graphData: null },
    { explanation: 'Set the gradients equal since the lines are parallel.', workingOut: '2a + 3 = a', graphData: null },
    { explanation: 'Subtract $a$ from both sides.', workingOut: 'a + 3 = 0', graphData: null },
    { explanation: 'Subtract $3$ from both sides to solve for $a$.', workingOut: 'a = -3', graphData: null }
  ];

  await db.collection('questions').doc('y9-11g-q5').update({
    solutionSteps: steps,
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log("Updated q5 solutionSteps successfully.");
  process.exit(0);
}

run().catch(console.error);
