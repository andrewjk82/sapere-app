const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  // Update Q12b
  batch.update(db.collection('questions').doc('y9-11d-q12b'), {
    'answer': '0',
    'options': [
      { text: '$y = -4x + 3,\\quad m = -4,\\quad c = 3$', imageUrl: '' },
      { text: '$y = 4x + 3,\\quad m = 4,\\quad c = 3$', imageUrl: '' },
      { text: '$y = -4x - 3,\\quad m = -4,\\quad c = -3$', imageUrl: '' },
      { text: '$y = 4x - 3,\\quad m = 4,\\quad c = -3$', imageUrl: '' }
    ],
    'solutionSteps': [
      {
        explanation: 'Start with the given equation and isolate $y$ on the left side to get it into the form $y = mx + c$. First, subtract $8x$ from both sides.',
        workingOut: '8x + 2y = 6 \\\\ 2y = -8x + 6'
      },
      {
        explanation: 'Divide every term by $2$.',
        workingOut: 'y = \\frac{-8x}{2} + \\frac{6}{2} \\\\ y = -4x + 3'
      },
      {
        explanation: 'Identify the gradient $m$ and the $y$-intercept $c$ from the equation $y = -4x + 3$.',
        workingOut: 'm = -4, \\quad c = 3'
      },
      {
        explanation: 'State the final answer clearly.',
        workingOut: 'y = -4x + 3,\\quad m = -4,\\quad c = 3'
      }
    ],
    'updatedAt': FieldValue.serverTimestamp()
  });

  // Update Q12c
  batch.update(db.collection('questions').doc('y9-11d-q12c'), {
    'answer': '1',
    'options': [
      { text: '$y = -2x - 4,\\quad m = -2,\\quad c = -4$', imageUrl: '' },
      { text: '$y = 2x - 4,\\quad m = 2,\\quad c = -4$', imageUrl: '' },
      { text: '$y = 2x + 4,\\quad m = 2,\\quad c = 4$', imageUrl: '' },
      { text: '$y = -2x + 4,\\quad m = -2,\\quad c = 4$', imageUrl: '' }
    ],
    'solutionSteps': [
      {
        explanation: 'Start with the given equation and isolate $y$. First, subtract $4x$ from both sides.',
        workingOut: '4x - 2y = 8 \\\\ -2y = -4x + 8'
      },
      {
        explanation: 'Divide every term by $-2$ to solve for $y$.',
        workingOut: 'y = \\frac{-4x}{-2} + \\frac{8}{-2} \\\\ y = 2x - 4'
      },
      {
        explanation: 'Identify the gradient $m$ and the $y$-intercept $c$ from the equation $y = 2x - 4$.',
        workingOut: 'm = 2, \\quad c = -4'
      },
      {
        explanation: 'State the final answer clearly.',
        workingOut: 'y = 2x - 4,\\quad m = 2,\\quad c = -4'
      }
    ],
    'updatedAt': FieldValue.serverTimestamp()
  });

  // Update Q12d
  batch.update(db.collection('questions').doc('y9-11d-q12d'), {
    'answer': '2',
    'options': [
      { text: '$y = -\\frac{5}{2}x - 5,\\quad m = -\\frac{5}{2},\\quad c = -5$', imageUrl: '' },
      { text: '$y = \\frac{2}{5}x - 5,\\quad m = \\frac{2}{5},\\quad c = -5$', imageUrl: '' },
      { text: '$y = \\frac{5}{2}x - 5,\\quad m = \\frac{5}{2},\\quad c = -5$', imageUrl: '' },
      { text: '$y = \\frac{5}{2}x + 5,\\quad m = \\frac{5}{2},\\quad c = 5$', imageUrl: '' }
    ],
    'solutionSteps': [
      {
        explanation: 'Start with the given equation and isolate $y$. First, subtract $5x$ from both sides.',
        workingOut: '5x - 2y = 10 \\\\ -2y = -5x + 10'
      },
      {
        explanation: 'Divide every term by $-2$ to solve for $y$.',
        workingOut: 'y = \\frac{-5x}{-2} + \\frac{10}{-2} \\\\ y = \\frac{5}{2}x - 5'
      },
      {
        explanation: 'Identify the gradient $m$ and the $y$-intercept $c$ from the equation $y = \\frac{5}{2}x - 5$.',
        workingOut: 'm = \\frac{5}{2}, \\quad c = -5'
      },
      {
        explanation: 'State the final answer clearly.',
        workingOut: 'y = \\frac{5}{2}x - 5,\\quad m = \\frac{5}{2},\\quad c = -5'
      }
    ],
    'updatedAt': FieldValue.serverTimestamp()
  });

  await batch.commit();
  console.log("Updated y9-11d-q12b, q12c, q12d.");
  process.exit(0);
}

run().catch(console.error);
