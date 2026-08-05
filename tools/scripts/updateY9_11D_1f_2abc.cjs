const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  // Update Q1f
  batch.update(db.collection('questions').doc('y9-11d-q1f'), {
    'answer': '1',
    'options': [
      { text: '$y = \\frac{2}{5}x$', imageUrl: '' },
      { text: '$y = -\\frac{2}{5}x$', imageUrl: '' },
      { text: '$y = -\\frac{2}{5}x + 1$', imageUrl: '' },
      { text: '$y = -\\frac{5}{2}x$', imageUrl: '' }
    ],
    'solutionSteps': [
      {
        explanation: 'Start with the gradient-intercept form of a straight line, which is $y = mx + c$.',
        workingOut: 'y = mx + c'
      },
      {
        explanation: 'Identify the given values for the gradient $m$ and the $y$-intercept $c$.',
        workingOut: 'm = -\\frac{2}{5}, \\quad c = 0'
      },
      {
        explanation: 'Substitute these values into the equation.',
        workingOut: 'y = (-\\frac{2}{5})x + (0) \\\\ y = -\\frac{2}{5}x'
      }
    ],
    'updatedAt': FieldValue.serverTimestamp()
  });

  // Update Q2a
  batch.update(db.collection('questions').doc('y9-11d-q2a'), {
    'type': 'multiple_choice',
    'question': 'Write down the gradient and \\(y\\)-intercept of the line \\(y = 3x + 2\\).',
    'answer': '1',
    'options': [
      { text: '$m = -3,\\quad c = 2$', imageUrl: '' },
      { text: '$m = 3,\\quad c = 2$', imageUrl: '' },
      { text: '$m = 3,\\quad c = -2$', imageUrl: '' },
      { text: '$m = 2,\\quad c = 3$', imageUrl: '' }
    ],
    'solutionSteps': [
      {
        explanation: 'The equation is already in the gradient-intercept form, $y = mx + c$.',
        workingOut: 'y = 3x + 2'
      },
      {
        explanation: 'Compare this equation to $y = mx + c$ to identify the gradient $m$ and the $y$-intercept $c$.',
        workingOut: 'm = 3, \\quad c = 2'
      }
    ],
    'requiresManualGrading': false,
    'updatedAt': FieldValue.serverTimestamp()
  });

  // Update Q2b
  batch.update(db.collection('questions').doc('y9-11d-q2b'), {
    'type': 'multiple_choice',
    'question': 'Write down the gradient and \\(y\\)-intercept of the line \\(y = 2x + 5\\).',
    'answer': '1',
    'options': [
      { text: '$m = -2,\\quad c = 5$', imageUrl: '' },
      { text: '$m = 2,\\quad c = 5$', imageUrl: '' },
      { text: '$m = 2,\\quad c = -5$', imageUrl: '' },
      { text: '$m = 5,\\quad c = 2$', imageUrl: '' }
    ],
    'solutionSteps': [
      {
        explanation: 'The equation is already in the gradient-intercept form, $y = mx + c$.',
        workingOut: 'y = 2x + 5'
      },
      {
        explanation: 'Compare this equation to $y = mx + c$ to identify the gradient $m$ and the $y$-intercept $c$.',
        workingOut: 'm = 2, \\quad c = 5'
      }
    ],
    'requiresManualGrading': false,
    'updatedAt': FieldValue.serverTimestamp()
  });

  // Update Q2c
  batch.update(db.collection('questions').doc('y9-11d-q2c'), {
    'type': 'multiple_choice',
    'question': 'Write down the gradient and \\(y\\)-intercept of the line \\(y = -3x + 4\\).',
    'answer': '1',
    'options': [
      { text: '$m = 3,\\quad c = 4$', imageUrl: '' },
      { text: '$m = -3,\\quad c = 4$', imageUrl: '' },
      { text: '$m = -3,\\quad c = -4$', imageUrl: '' },
      { text: '$m = 4,\\quad c = -3$', imageUrl: '' }
    ],
    'solutionSteps': [
      {
        explanation: 'The equation is already in the gradient-intercept form, $y = mx + c$.',
        workingOut: 'y = -3x + 4'
      },
      {
        explanation: 'Compare this equation to $y = mx + c$ to identify the gradient $m$ and the $y$-intercept $c$.',
        workingOut: 'm = -3, \\quad c = 4'
      }
    ],
    'requiresManualGrading': false,
    'updatedAt': FieldValue.serverTimestamp()
  });

  await batch.commit();
  console.log("Updated y9-11d-q1f and q2abc.");
  process.exit(0);
}

run().catch(console.error);
