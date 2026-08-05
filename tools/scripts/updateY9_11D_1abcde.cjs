const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  // Update Q1a
  batch.update(db.collection('questions').doc('y9-11d-q1a'), {
    'answer': '2',
    'options': [
      { text: '$y = -3x + 5$', imageUrl: '' },
      { text: '$y = 3x - 5$', imageUrl: '' },
      { text: '$y = 3x + 5$', imageUrl: '' },
      { text: '$y = 5x + 3$', imageUrl: '' }
    ],
    'solutionSteps': [
      {
        explanation: 'Start with the gradient-intercept form of a straight line, which is $y = mx + c$.',
        workingOut: 'y = mx + c'
      },
      {
        explanation: 'Identify the given values for the gradient $m$ and the $y$-intercept $c$.',
        workingOut: 'm = 3, \\quad c = 5'
      },
      {
        explanation: 'Substitute these values into the equation.',
        workingOut: 'y = (3)x + (5) \\\\ y = 3x + 5'
      }
    ],
    'updatedAt': FieldValue.serverTimestamp()
  });

  // Update Q1b
  batch.update(db.collection('questions').doc('y9-11d-q1b'), {
    'answer': '2',
    'options': [
      { text: '$y = -4x + 6$', imageUrl: '' },
      { text: '$y = 4x - 6$', imageUrl: '' },
      { text: '$y = 4x + 6$', imageUrl: '' },
      { text: '$y = 6x + 4$', imageUrl: '' }
    ],
    'solutionSteps': [
      {
        explanation: 'Start with the gradient-intercept form of a straight line, which is $y = mx + c$.',
        workingOut: 'y = mx + c'
      },
      {
        explanation: 'Identify the given values for the gradient $m$ and the $y$-intercept $c$.',
        workingOut: 'm = 4, \\quad c = 6'
      },
      {
        explanation: 'Substitute these values into the equation.',
        workingOut: 'y = (4)x + (6) \\\\ y = 4x + 6'
      }
    ],
    'updatedAt': FieldValue.serverTimestamp()
  });

  // Update Q1c
  batch.update(db.collection('questions').doc('y9-11d-q1c'), {
    'answer': '1',
    'options': [
      { text: '$y = 3x + 2$', imageUrl: '' },
      { text: '$y = -3x + 2$', imageUrl: '' },
      { text: '$y = -3x - 2$', imageUrl: '' },
      { text: '$y = 2x - 3$', imageUrl: '' }
    ],
    'solutionSteps': [
      {
        explanation: 'Start with the gradient-intercept form of a straight line, which is $y = mx + c$.',
        workingOut: 'y = mx + c'
      },
      {
        explanation: 'Identify the given values for the gradient $m$ and the $y$-intercept $c$.',
        workingOut: 'm = -3, \\quad c = 2'
      },
      {
        explanation: 'Substitute these values into the equation.',
        workingOut: 'y = (-3)x + (2) \\\\ y = -3x + 2'
      }
    ],
    'updatedAt': FieldValue.serverTimestamp()
  });

  // Update Q1d
  batch.update(db.collection('questions').doc('y9-11d-q1d'), {
    'answer': '2',
    'options': [
      { text: '$y = x + 4$', imageUrl: '' },
      { text: '$y = -x - 4$', imageUrl: '' },
      { text: '$y = -x + 4$', imageUrl: '' },
      { text: '$y = 4x - 1$', imageUrl: '' }
    ],
    'solutionSteps': [
      {
        explanation: 'Start with the gradient-intercept form of a straight line, which is $y = mx + c$.',
        workingOut: 'y = mx + c'
      },
      {
        explanation: 'Identify the given values for the gradient $m$ and the $y$-intercept $c$.',
        workingOut: 'm = -1, \\quad c = 4'
      },
      {
        explanation: 'Substitute these values into the equation.',
        workingOut: 'y = (-1)x + (4) \\\\ y = -x + 4'
      }
    ],
    'updatedAt': FieldValue.serverTimestamp()
  });

  // Update Q1e
  batch.update(db.collection('questions').doc('y9-11d-q1e'), {
    'answer': '1',
    'options': [
      { text: '$y = \\frac{4}{3}x + 2$', imageUrl: '' },
      { text: '$y = \\frac{3}{4}x + 2$', imageUrl: '' },
      { text: '$y = \\frac{3}{4}x - 2$', imageUrl: '' },
      { text: '$y = -\\frac{3}{4}x + 2$', imageUrl: '' }
    ],
    'solutionSteps': [
      {
        explanation: 'Start with the gradient-intercept form of a straight line, which is $y = mx + c$.',
        workingOut: 'y = mx + c'
      },
      {
        explanation: 'Identify the given values for the gradient $m$ and the $y$-intercept $c$.',
        workingOut: 'm = \\frac{3}{4}, \\quad c = 2'
      },
      {
        explanation: 'Substitute these values into the equation.',
        workingOut: 'y = (\\frac{3}{4})x + (2) \\\\ y = \\frac{3}{4}x + 2'
      }
    ],
    'updatedAt': FieldValue.serverTimestamp()
  });

  await batch.commit();
  console.log("Updated y9-11d-q1a to 1e.");
  process.exit(0);
}

run().catch(console.error);
