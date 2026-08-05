const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  const updateQ = (id, options, steps) => {
    batch.update(db.collection('questions').doc(id), {
      options: options,
      solutionSteps: steps.map(s => ({ ...s, graphData: null })),
      updatedAt: FieldValue.serverTimestamp()
    });
  };

  const aOpts = [
    { text: '\\(y = 6x - 2\\)', imageUrl: '' },
    { text: '\\(y = 3x + 1\\)', imageUrl: '' },
    { text: '\\(y = -2x + 8\\)', imageUrl: '' },
    { text: '\\(y = 3x - 5\\)', imageUrl: '' }
  ];
  const aSteps = [
    { explanation: 'Identify the gradient of the given line.', workingOut: 'y = 3x - 1 \\implies m = 3' },
    { explanation: 'State the rule for parallel lines.', workingOut: 'm_{\\parallel} = m = 3' },
    { explanation: 'Use the point-gradient formula with the point $(2, 7)$.', workingOut: 'y - 7 = 3(x - 2)' },
    { explanation: 'Expand and solve for $y$ to get the slope-intercept form.', workingOut: 'y - 7 = 3x - 6 \\implies y = 3x + 1' }
  ];
  updateQ('y9-11g-q2a', aOpts, aSteps);

  const bOpts = [
    { text: '\\(y = 2x - 1\\)', imageUrl: '' },
    { text: '\\(y = 2x + 5\\)', imageUrl: '' },
    { text: '\\(y = -3x + 4\\)', imageUrl: '' },
    { text: '\\(y = 4x - 6\\)', imageUrl: '' }
  ];
  const bSteps = [
    { explanation: 'Identify the gradient of the given line.', workingOut: 'y = 2x + 4 \\implies m = 2' },
    { explanation: 'State the rule for parallel lines.', workingOut: 'm_{\\parallel} = m = 2' },
    { explanation: 'Use the point-gradient formula with the point $(-1, 3)$.', workingOut: 'y - 3 = 2(x - (-1))' },
    { explanation: 'Expand and solve for $y$ to get the slope-intercept form.', workingOut: 'y - 3 = 2(x + 1) \\implies y - 3 = 2x + 2 \\implies y = 2x + 5' }
  ];
  updateQ('y9-11g-q2b', bOpts, bSteps);

  const cOpts = [
    { text: '\\(y = 3x\\)', imageUrl: '' },
    { text: '\\(y = -x - 5\\)', imageUrl: '' },
    { text: '\\(y = -4x + 5\\)', imageUrl: '' },
    { text: '\\(y = 5x - 7\\)', imageUrl: '' }
  ];
  const cSteps = [
    { explanation: 'Identify the gradient of the given line.', workingOut: 'y = -x + 3 \\implies m = -1' },
    { explanation: 'State the rule for parallel lines.', workingOut: 'm_{\\parallel} = m = -1' },
    { explanation: 'Use the point-gradient formula with the point $(-2, -3)$.', workingOut: 'y - (-3) = -1(x - (-2))' },
    { explanation: 'Expand and solve for $y$ to get the slope-intercept form.', workingOut: 'y + 3 = -1(x + 2) \\implies y + 3 = -x - 2 \\implies y = -x - 5' }
  ];
  updateQ('y9-11g-q2c', cOpts, cSteps);

  const dOpts = [
    { text: '\\(y = 4x + 1\\)', imageUrl: '' },
    { text: '\\(y = -\\frac{1}{3}x - 1\\)', imageUrl: '' },
    { text: '\\(y = -x + 6\\)', imageUrl: '' },
    { text: '\\(y = 3x - 2\\)', imageUrl: '' }
  ];
  const dSteps = [
    { explanation: 'Rearrange the given equation into slope-intercept form to find its gradient.', workingOut: '3y = -x + 9 \\implies y = -\\frac{1}{3}x + 3 \\implies m = -\\frac{1}{3}' },
    { explanation: 'State the rule for parallel lines.', workingOut: 'm_{\\parallel} = m = -\\frac{1}{3}' },
    { explanation: 'Use the point-gradient formula with the point $(3, -2)$.', workingOut: 'y - (-2) = -\\frac{1}{3}(x - 3)' },
    { explanation: 'Expand and solve for $y$ to get the slope-intercept form.', workingOut: 'y + 2 = -\\frac{1}{3}x + 1 \\implies y = -\\frac{1}{3}x - 1' }
  ];
  updateQ('y9-11g-q2d', dOpts, dSteps);

  await batch.commit();
  console.log("Updated q2a-d options and solutionSteps successfully.");
  process.exit(0);
}

run().catch(console.error);
