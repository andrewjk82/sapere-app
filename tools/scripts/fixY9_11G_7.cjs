const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  const opts = [
    { text: 'a and b; c and e; f and g', imageUrl: '' },
    { text: 'a and h; c and e; d and f', imageUrl: '' },
    { text: 'a and b; c and d; f and h', imageUrl: '' },
    { text: 'a and h; b and g; c and e', imageUrl: '' }
  ];

  const steps = [
    { explanation: 'Rearrange each equation to $y = mx + c$ to find its gradient $m$.', workingOut: 'm_a = 3, m_b = -\\frac{1}{3}, m_c = 1, m_d = \\frac{1}{2}, m_e = -1, m_f = -\\frac{1}{2}, m_g = 2, m_h = -3', graphData: null },
    { explanation: 'Recall the condition for perpendicular lines.', workingOut: 'm_1 \\times m_2 = -1', graphData: null },
    { explanation: 'Test pairs of gradients to see which multiply to -1.', workingOut: '3 \\times \\left(-\\frac{1}{3}\\right) = -1 \\implies \\text{a and b}', graphData: null },
    { explanation: 'Identify the remaining perpendicular pairs.', workingOut: '1 \\times -1 = -1 \\implies \\text{c and e} \\\\ 2 \\times \\left(-\\frac{1}{2}\\right) = -1 \\implies \\text{f and g}', graphData: null }
  ];

  // Shuffle options, we want to place correct answer (opts[0]) at index 2 (C)
  const shuffledOpts = [opts[1], opts[3], opts[0], opts[2]];

  batch.update(db.collection('questions').doc('y9-11g-q7'), {
    type: 'multiple_choice',
    requiresManualGrading: false,
    options: shuffledOpts,
    answer: '2',
    solutionSteps: steps,
    updatedAt: FieldValue.serverTimestamp()
  });

  await batch.commit();
  console.log("Updated q7 to multiple choice with realistic options successfully.");
  process.exit(0);
}

run().catch(console.error);
