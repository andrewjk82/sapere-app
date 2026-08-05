const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  // Update Q12i
  batch.update(db.collection('questions').doc('y9-11d-q12i'), {
    'question': 'Rewrite the equation \\(x = -3y\\) in the form \\(y = mx + c\\) and write down the gradient and \\(y\\)-intercept.',
    'answer': '1',
    'options': [
      { text: '$y = \\frac{1}{3}x,\\quad m = \\frac{1}{3},\\quad c = 0$', imageUrl: '' },
      { text: '$y = -\\frac{1}{3}x,\\quad m = -\\frac{1}{3},\\quad c = 0$', imageUrl: '' },
      { text: '$y = -\\frac{1}{3}x + 3,\\quad m = -\\frac{1}{3},\\quad c = 3$', imageUrl: '' },
      { text: '$y = -3x,\\quad m = -3,\\quad c = 0$', imageUrl: '' }
    ],
    'solutionSteps': [
      {
        explanation: 'Start with the given equation and isolate $y$.',
        workingOut: 'x = -3y'
      },
      {
        explanation: 'Divide both sides by $-3$.',
        workingOut: 'y = \\frac{x}{-3} \\\\ y = -\\frac{1}{3}x'
      },
      {
        explanation: 'Identify the gradient $m$ and the $y$-intercept $c$ from the equation $y = -\\frac{1}{3}x + 0$.',
        workingOut: 'm = -\\frac{1}{3}, \\quad c = 0'
      },
      {
        explanation: 'State the final answer clearly.',
        workingOut: 'y = -\\frac{1}{3}x,\\quad m = -\\frac{1}{3},\\quad c = 0'
      }
    ],
    'updatedAt': FieldValue.serverTimestamp()
  });

  // Update Q12j
  batch.update(db.collection('questions').doc('y9-11d-q12j'), {
    'question': 'Rewrite the equation \\(x = -5y\\) in the form \\(y = mx + c\\) and write down the gradient and \\(y\\)-intercept.',
    'answer': '1',
    'options': [
      { text: '$y = \\frac{1}{5}x,\\quad m = \\frac{1}{5},\\quad c = 0$', imageUrl: '' },
      { text: '$y = -\\frac{1}{5}x,\\quad m = -\\frac{1}{5},\\quad c = 0$', imageUrl: '' },
      { text: '$y = -\\frac{1}{5}x - 5,\\quad m = -\\frac{1}{5},\\quad c = -5$', imageUrl: '' },
      { text: '$y = -5x,\\quad m = -5,\\quad c = 0$', imageUrl: '' }
    ],
    'solutionSteps': [
      {
        explanation: 'Start with the given equation and isolate $y$.',
        workingOut: 'x = -5y'
      },
      {
        explanation: 'Divide both sides by $-5$.',
        workingOut: 'y = \\frac{x}{-5} \\\\ y = -\\frac{1}{5}x'
      },
      {
        explanation: 'Identify the gradient $m$ and the $y$-intercept $c$ from the equation $y = -\\frac{1}{5}x + 0$.',
        workingOut: 'm = -\\frac{1}{5}, \\quad c = 0'
      },
      {
        explanation: 'State the final answer clearly.',
        workingOut: 'y = -\\frac{1}{5}x,\\quad m = -\\frac{1}{5},\\quad c = 0'
      }
    ],
    'updatedAt': FieldValue.serverTimestamp()
  });

  // Update Q12k
  batch.update(db.collection('questions').doc('y9-11d-q12k'), {
    'question': 'Rewrite the equation \\(y + 4x = 0\\) in the form \\(y = mx + c\\) and write down the gradient and \\(y\\)-intercept.',
    'answer': '2',
    'options': [
      { text: '$y = -\\frac{1}{4}x,\\quad m = -\\frac{1}{4},\\quad c = 0$', imageUrl: '' },
      { text: '$y = 4x,\\quad m = 4,\\quad c = 0$', imageUrl: '' },
      { text: '$y = -4x,\\quad m = -4,\\quad c = 0$', imageUrl: '' },
      { text: '$y = -4x + 4,\\quad m = -4,\\quad c = 4$', imageUrl: '' }
    ],
    'solutionSteps': [
      {
        explanation: 'Start with the given equation and isolate $y$. Subtract $4x$ from both sides.',
        workingOut: 'y + 4x = 0 \\\\ y = -4x'
      },
      {
        explanation: 'Identify the gradient $m$ and the $y$-intercept $c$ from the equation $y = -4x + 0$.',
        workingOut: 'm = -4, \\quad c = 0'
      },
      {
        explanation: 'State the final answer clearly.',
        workingOut: 'y = -4x,\\quad m = -4,\\quad c = 0'
      }
    ],
    'updatedAt': FieldValue.serverTimestamp()
  });

  // Update Q12l
  batch.update(db.collection('questions').doc('y9-11d-q12l'), {
    'question': 'Rewrite the equation \\(x - 3y = 0\\) in the form \\(y = mx + c\\) and write down the gradient and \\(y\\)-intercept.',
    'answer': '1',
    'options': [
      { text: '$y = -\\frac{1}{3}x,\\quad m = -\\frac{1}{3},\\quad c = 0$', imageUrl: '' },
      { text: '$y = \\frac{1}{3}x,\\quad m = \\frac{1}{3},\\quad c = 0$', imageUrl: '' },
      { text: '$y = 3x,\\quad m = 3,\\quad c = 0$', imageUrl: '' },
      { text: '$y = \\frac{1}{3}x - 3,\\quad m = \\frac{1}{3},\\quad c = -3$', imageUrl: '' }
    ],
    'solutionSteps': [
      {
        explanation: 'Start with the given equation and isolate $y$. Add $3y$ to both sides.',
        workingOut: 'x - 3y = 0 \\\\ x = 3y \\\\ 3y = x'
      },
      {
        explanation: 'Divide both sides by $3$.',
        workingOut: 'y = \\frac{x}{3} \\\\ y = \\frac{1}{3}x'
      },
      {
        explanation: 'Identify the gradient $m$ and the $y$-intercept $c$ from the equation $y = \\frac{1}{3}x + 0$.',
        workingOut: 'm = \\frac{1}{3}, \\quad c = 0'
      },
      {
        explanation: 'State the final answer clearly.',
        workingOut: 'y = \\frac{1}{3}x,\\quad m = \\frac{1}{3},\\quad c = 0'
      }
    ],
    'updatedAt': FieldValue.serverTimestamp()
  });

  await batch.commit();
  console.log("Updated y9-11d-q12i, q12j, q12k, q12l.");
  process.exit(0);
}

run().catch(console.error);
