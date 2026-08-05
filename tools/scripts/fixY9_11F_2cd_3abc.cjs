const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  // --- q2c ---
  batch.update(db.collection('questions').doc('y9-11f-q2c'), {
    options: [
      { text: '\\(y = 3x + 6\\)', imageUrl: '' },
      { text: '\\(y = \\frac{1}{3}x + 6\\)', imageUrl: '' },
      { text: '\\(y = 2x + \\frac{1}{3}\\)', imageUrl: '' },
      { text: '\\(y = \\frac{1}{3}x + 2\\)', imageUrl: '' }
    ],
    answer: '1',
    solutionSteps: [
      {
        explanation: 'Identify the $y$-intercept ($c$) of the line $y = 2x + 6$.',
        workingOut: 'c = 6',
        graphData: null
      },
      {
        explanation: 'Identify the given gradient ($m$) for the new line.',
        workingOut: 'm = \\frac{1}{3}',
        graphData: null
      },
      {
        explanation: 'Substitute $m$ and $c$ into the slope-intercept form $y = mx + c$.',
        workingOut: 'y = \\frac{1}{3}x + 6',
        graphData: null
      }
    ],
    updatedAt: FieldValue.serverTimestamp()
  });

  // --- q2d ---
  batch.update(db.collection('questions').doc('y9-11f-q2d'), {
    options: [
      { text: '\\(y = -4x + 2\\)', imageUrl: '' },
      { text: '\\(y = 2x - 4\\)', imageUrl: '' },
      { text: '\\(y = 2x + 6\\)', imageUrl: '' },
      { text: '\\(y = -2x - 4\\)', imageUrl: '' }
    ],
    answer: '1',
    solutionSteps: [
      {
        explanation: 'Identify the gradient ($m$) of the line $y = 2x + 6$.',
        workingOut: 'm = 2',
        graphData: null
      },
      {
        explanation: 'Identify the given $y$-intercept ($c$) for the new line.',
        workingOut: 'c = -4',
        graphData: null
      },
      {
        explanation: 'Substitute $m$ and $c$ into the slope-intercept form $y = mx + c$.',
        workingOut: 'y = 2x - 4',
        graphData: null
      }
    ],
    updatedAt: FieldValue.serverTimestamp()
  });

  // --- q3a ---
  batch.update(db.collection('questions').doc('y9-11f-q3a'), {
    type: 'multiple_choice',
    requiresManualGrading: false,
    options: [
      { text: '\\(1\\)', imageUrl: '' },
      { text: '\\(2\\)', imageUrl: '' },
      { text: '\\(3\\)', imageUrl: '' },
      { text: '\\(4\\)', imageUrl: '' }
    ],
    answer: '2',
    solutionSteps: [
      {
        explanation: 'State the gradient formula for two points $(x_1, y_1)$ and $(x_2, y_2)$.',
        workingOut: 'm = \\frac{y_2 - y_1}{x_2 - x_1}',
        graphData: null
      },
      {
        explanation: 'Substitute the coordinates of $A(2, 4)$ and $B(5, 13)$ into the formula.',
        workingOut: 'm = \\frac{13 - 4}{5 - 2}',
        graphData: null
      },
      {
        explanation: 'Simplify the numerator and denominator to find the gradient.',
        workingOut: 'm = \\frac{9}{3} \\\\ m = 3',
        graphData: null
      }
    ],
    updatedAt: FieldValue.serverTimestamp()
  });

  // --- q3b ---
  batch.update(db.collection('questions').doc('y9-11f-q3b'), {
    options: [
      { text: '\\(y = 3x + 4\\)', imageUrl: '' },
      { text: '\\(y = 3x - 2\\)', imageUrl: '' },
      { text: '\\(y = 2x + 3\\)', imageUrl: '' },
      { text: '\\(y = 3x + 2\\)', imageUrl: '' }
    ],
    answer: '1',
    solutionSteps: [
      {
        explanation: 'State the point-gradient formula.',
        workingOut: 'y - y_1 = m(x - x_1)',
        graphData: null
      },
      {
        explanation: 'Substitute $m = 3$ and $A(2, 4)$ into the formula.',
        workingOut: 'y - 4 = 3(x - 2)',
        graphData: null
      },
      {
        explanation: 'Expand and rearrange to the slope-intercept form $y = mx + c$.',
        workingOut: 'y - 4 = 3x - 6 \\\\ y = 3x - 2',
        graphData: null
      }
    ],
    updatedAt: FieldValue.serverTimestamp()
  });

  // --- q3c ---
  batch.update(db.collection('questions').doc('y9-11f-q3c'), {
    options: [
      { text: '\\(y = 3x + 13\\)', imageUrl: '' },
      { text: '\\(y = 3x - 2\\)', imageUrl: '' },
      { text: '\\(y = 5x - 2\\)', imageUrl: '' },
      { text: '\\(y = 3x + 2\\)', imageUrl: '' }
    ],
    answer: '1',
    solutionSteps: [
      {
        explanation: 'State the point-gradient formula.',
        workingOut: 'y - y_1 = m(x - x_1)',
        graphData: null
      },
      {
        explanation: 'Substitute $m = 3$ and $B(5, 13)$ into the formula.',
        workingOut: 'y - 13 = 3(x - 5)',
        graphData: null
      },
      {
        explanation: 'Expand and rearrange to the slope-intercept form $y = mx + c$.',
        workingOut: 'y - 13 = 3x - 15 \\\\ y = 3x - 2',
        graphData: null
      }
    ],
    updatedAt: FieldValue.serverTimestamp()
  });

  await batch.commit();
  console.log("Updated 2c, 2d, 3a, 3b, 3c successfully.");
  process.exit(0);
}

run().catch(console.error);
