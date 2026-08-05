const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  const opts = [
    { text: '\\(2\\)', imageUrl: '' },
    { text: '\\(-2\\)', imageUrl: '' },
    { text: '\\(4\\)', imageUrl: '' },
    { text: '\\(\\frac{1}{3}\\)', imageUrl: '' }
  ];

  const steps = [
    { explanation: 'Identify the gradient of both lines from their equations.', workingOut: 'm_1 = (3a - 2), \\quad m_2 = 4', graphData: null },
    { explanation: 'Set the gradients equal since the lines are parallel.', workingOut: '3a - 2 = 4', graphData: null },
    { explanation: 'Add 2 to both sides.', workingOut: '3a = 6', graphData: null },
    { explanation: 'Divide by 3 to solve for $a$.', workingOut: 'a = 2', graphData: null }
  ];

  batch.update(db.collection('questions').doc('y9-11g-q4'), {
    type: 'multiple_choice',
    requiresManualGrading: false,
    options: opts,
    answer: '0',
    solutionSteps: steps,
    updatedAt: FieldValue.serverTimestamp()
  });

  await batch.commit();
  console.log("Updated q4 to multiple choice successfully.");
  process.exit(0);
}

run().catch(console.error);
