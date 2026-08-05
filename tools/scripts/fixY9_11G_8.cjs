const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  const updateQ = (id, options, answerIdx, steps) => {
    batch.update(db.collection('questions').doc(id), {
      options: options,
      answer: answerIdx.toString(),
      solutionSteps: steps.map(s => ({ ...s, graphData: null })),
      updatedAt: FieldValue.serverTimestamp()
    });
  };

  const aOpts = [
    { text: '\\(y = 2x - 3\\)', imageUrl: '' },
    { text: '\\(y = -\\frac{1}{3}x + \\frac{17}{3}\\)', imageUrl: '' },
    { text: '\\(y = -4x + 4\\)', imageUrl: '' },
    { text: '\\(y = 3x - 5\\)', imageUrl: '' }
  ];
  const aSteps = [
    { explanation: 'Identify the gradient of the given line.', workingOut: 'y = 3x - 1 \\implies m_1 = 3' },
    { explanation: 'Find the negative reciprocal for the perpendicular gradient.', workingOut: 'm_{\\perp} = -\\frac{1}{3}' },
    { explanation: 'Use the point-gradient formula with point $(2, 5)$.', workingOut: 'y - 5 = -\\frac{1}{3}(x - 2)' },
    { explanation: 'Expand and solve for $y$ to get slope-intercept form.', workingOut: 'y - 5 = -\\frac{1}{3}x + \\frac{2}{3} \\implies y = -\\frac{1}{3}x + \\frac{17}{3}' }
  ];
  updateQ('y9-11g-q8a', aOpts, 1, aSteps);

  const bOpts = [
    { text: '\\(y = 3x - 2\\)', imageUrl: '' },
    { text: '\\(y = -\\frac{1}{2}x + 3\\)', imageUrl: '' },
    { text: '\\(y = -x + 5\\)', imageUrl: '' },
    { text: '\\(y = 4x - 6\\)', imageUrl: '' }
  ];
  const bSteps = [
    { explanation: 'Identify the gradient of the given line.', workingOut: 'y = 2x + 4 \\implies m_1 = 2' },
    { explanation: 'Find the negative reciprocal for the perpendicular gradient.', workingOut: 'm_{\\perp} = -\\frac{1}{2}' },
    { explanation: 'Use the point-gradient formula with point $(-2, 4)$.', workingOut: 'y - 4 = -\\frac{1}{2}(x - (-2))' },
    { explanation: 'Expand and solve for $y$ to get slope-intercept form.', workingOut: 'y - 4 = -\\frac{1}{2}x - 1 \\implies y = -\\frac{1}{2}x + 3' }
  ];
  updateQ('y9-11g-q8b', bOpts, 1, bSteps);

  const cOpts = [
    { text: '\\(y = 4x - 1\\)', imageUrl: '' },
    { text: '\\(y = x + 1\\)', imageUrl: '' },
    { text: '\\(y = -2x + 6\\)', imageUrl: '' },
    { text: '\\(y = 5x - 7\\)', imageUrl: '' }
  ];
  const cSteps = [
    { explanation: 'Identify the gradient of the given line.', workingOut: 'y = -x + 5 \\implies m_1 = -1' },
    { explanation: 'Find the negative reciprocal for the perpendicular gradient.', workingOut: 'm_{\\perp} = 1' },
    { explanation: 'Use the point-gradient formula with point $(-3, -2)$.', workingOut: 'y - (-2) = 1(x - (-3))' },
    { explanation: 'Expand and solve for $y$ to get slope-intercept form.', workingOut: 'y + 2 = x + 3 \\implies y = x + 1' }
  ];
  updateQ('y9-11g-q8c', cOpts, 1, cSteps);

  const dOpts = [
    { text: '\\(y = 5x\\)', imageUrl: '' },
    { text: '\\(y = 4x - 13\\)', imageUrl: '' },
    { text: '\\(y = -3x + 7\\)', imageUrl: '' },
    { text: '\\(y = 3x - 2\\)', imageUrl: '' }
  ];
  const dSteps = [
    { explanation: 'Rearrange the equation to find its gradient.', workingOut: 'x + 4y = 8 \\implies 4y = -x + 8 \\implies y = -\\frac{1}{4}x + 2 \\implies m_1 = -\\frac{1}{4}' },
    { explanation: 'Find the negative reciprocal for the perpendicular gradient.', workingOut: 'm_{\\perp} = 4' },
    { explanation: 'Use the point-gradient formula with point $(2, -5)$.', workingOut: 'y - (-5) = 4(x - 2)' },
    { explanation: 'Expand and solve for $y$ to get slope-intercept form.', workingOut: 'y + 5 = 4x - 8 \\implies y = 4x - 13' }
  ];
  updateQ('y9-11g-q8d', dOpts, 1, dSteps);

  const eOpts = [
    { text: '\\(y = 6x + 1\\)', imageUrl: '' },
    { text: '\\(y = -\\frac{1}{3}x - \\frac{10}{3}\\)', imageUrl: '' },
    { text: '\\(y = -4x + 8\\)', imageUrl: '' },
    { text: '\\(y = 4x - 3\\)', imageUrl: '' }
  ];
  const eSteps = [
    { explanation: 'Rearrange the equation to find its gradient.', workingOut: 'y - 3x = 6 \\implies y = 3x + 6 \\implies m_1 = 3' },
    { explanation: 'Find the negative reciprocal for the perpendicular gradient.', workingOut: 'm_{\\perp} = -\\frac{1}{3}' },
    { explanation: 'Use the point-gradient formula with point $(2, -4)$.', workingOut: 'y - (-4) = -\\frac{1}{3}(x - 2)' },
    { explanation: 'Expand and solve for $y$ to get slope-intercept form.', workingOut: 'y + 4 = -\\frac{1}{3}x + \\frac{2}{3} \\implies y = -\\frac{1}{3}x - \\frac{10}{3}' }
  ];
  updateQ('y9-11g-q8e', eOpts, 1, eSteps);

  const fOpts = [
    { text: '\\(y = 2x + 2\\)', imageUrl: '' },
    { text: '\\(y = 2x - 11\\)', imageUrl: '' },
    { text: '\\(y = -x + 4\\)', imageUrl: '' },
    { text: '\\(y = 5x - 4\\)', imageUrl: '' }
  ];
  const fSteps = [
    { explanation: 'Rearrange the equation to find its gradient.', workingOut: '2y + x = 4 \\implies 2y = -x + 4 \\implies y = -\\frac{1}{2}x + 2 \\implies m_1 = -\\frac{1}{2}' },
    { explanation: 'Find the negative reciprocal for the perpendicular gradient.', workingOut: 'm_{\\perp} = 2' },
    { explanation: 'Use the point-gradient formula with point $(4, -3)$.', workingOut: 'y - (-3) = 2(x - 4)' },
    { explanation: 'Expand and solve for $y$ to get slope-intercept form.', workingOut: 'y + 3 = 2x - 8 \\implies y = 2x - 11' }
  ];
  updateQ('y9-11g-q8f', fOpts, 1, fSteps);

  await batch.commit();
  console.log("Updated q8a-f options and steps successfully.");
  process.exit(0);
}

run().catch(console.error);
