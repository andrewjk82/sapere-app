const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  const updateQ = (id, options, answerIdx, steps, extraUpdates = {}) => {
    batch.update(db.collection('questions').doc(id), {
      options: options,
      answer: answerIdx.toString(),
      solutionSteps: steps.map(s => ({ ...s, graphData: null })),
      updatedAt: FieldValue.serverTimestamp(),
      ...extraUpdates
    });
  };

  const eOpts = [
    { text: '\\(y = 5x + 2\\)', imageUrl: '' },
    { text: '\\(y = 2x - 6\\)', imageUrl: '' },
    { text: '\\(y = -2x + 7\\)', imageUrl: '' },
    { text: '\\(y = 4x - 3\\)', imageUrl: '' }
  ];
  const eSteps = [
    { explanation: 'Rearrange the given equation into slope-intercept form to find its gradient.', workingOut: 'y - 2x = 5 \\implies y = 2x + 5 \\implies m = 2' },
    { explanation: 'State the rule for parallel lines.', workingOut: 'm_{\\parallel} = m = 2' },
    { explanation: 'Use the point-gradient formula with the point $(1, -4)$.', workingOut: 'y - (-4) = 2(x - 1)' },
    { explanation: 'Expand and solve for $y$ to get the slope-intercept form.', workingOut: 'y + 4 = 2x - 2 \\implies y = 2x - 6' }
  ];
  updateQ('y9-11g-q2e', eOpts, 1, eSteps);

  const fOpts = [
    { text: '\\(y = 6x + 3\\)', imageUrl: '' },
    { text: '\\(y = -\\frac{1}{3}x - 1\\)', imageUrl: '' },
    { text: '\\(y = -3x + 8\\)', imageUrl: '' },
    { text: '\\(y = 5x - 4\\)', imageUrl: '' }
  ];
  const fSteps = [
    { explanation: 'Rearrange the given equation into slope-intercept form to find its gradient.', workingOut: '3y + x = 6 \\implies 3y = -x + 6 \\implies y = -\\frac{1}{3}x + 2 \\implies m = -\\frac{1}{3}' },
    { explanation: 'State the rule for parallel lines.', workingOut: 'm_{\\parallel} = m = -\\frac{1}{3}' },
    { explanation: 'Use the point-gradient formula with the point $(6, -3)$.', workingOut: 'y - (-3) = -\\frac{1}{3}(x - 6)' },
    { explanation: 'Expand and solve for $y$ to get the slope-intercept form.', workingOut: 'y + 3 = -\\frac{1}{3}x + 2 \\implies y = -\\frac{1}{3}x - 1' }
  ];
  updateQ('y9-11g-q2f', fOpts, 1, fSteps);

  const q3Opts = [
    { text: '\\(1\\)', imageUrl: '' },
    { text: '\\(-1\\)', imageUrl: '' },
    { text: '\\(4\\)', imageUrl: '' },
    { text: '\\(3\\)', imageUrl: '' }
  ];
  const q3Steps = [
    { explanation: 'Identify the gradient of both lines from their equations.', workingOut: 'm_1 = (a + 3), \\quad m_2 = 4' },
    { explanation: 'Set the gradients equal since the lines are parallel.', workingOut: 'a + 3 = 4' },
    { explanation: 'Solve the equation for $a$.', workingOut: 'a = 4 - 3 = 1' }
  ];
  updateQ('y9-11g-q3', q3Opts, 0, q3Steps, { type: 'multiple_choice', requiresManualGrading: false });

  await batch.commit();
  console.log("Updated q2e, q2f, and q3 successfully.");
  process.exit(0);
}

run().catch(console.error);
