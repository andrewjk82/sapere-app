const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  // Update Q12e
  batch.update(db.collection('questions').doc('y9-11d-q12e'), {
    'question': 'Rewrite the equation \\(4y - 3x = 8\\) in the form \\(y = mx + c\\) and write down the gradient and \\(y\\)-intercept.',
    'answer': '1',
    'options': [
      { text: '$y = -\\frac{3}{4}x - 2,\\quad m = -\\frac{3}{4},\\quad c = -2$', imageUrl: '' },
      { text: '$y = \\frac{3}{4}x + 2,\\quad m = \\frac{3}{4},\\quad c = 2$', imageUrl: '' },
      { text: '$y = \\frac{3}{4}x + 3,\\quad m = \\frac{3}{4},\\quad c = 3$', imageUrl: '' },
      { text: '$y = \\frac{4}{3}x + 2,\\quad m = \\frac{4}{3},\\quad c = 2$', imageUrl: '' }
    ],
    'solutionSteps': [
      {
        explanation: 'Start with the given equation and isolate $y$. First, add $3x$ to both sides.',
        workingOut: '4y - 3x = 8 \\\\ 4y = 3x + 8'
      },
      {
        explanation: 'Divide every term by $4$ to solve for $y$.',
        workingOut: 'y = \\frac{3x}{4} + \\frac{8}{4} \\\\ y = \\frac{3}{4}x + 2'
      },
      {
        explanation: 'Identify the gradient $m$ and the $y$-intercept $c$ from the equation $y = \\frac{3}{4}x + 2$.',
        workingOut: 'm = \\frac{3}{4}, \\quad c = 2'
      },
      {
        explanation: 'State the final answer clearly.',
        workingOut: 'y = \\frac{3}{4}x + 2,\\quad m = \\frac{3}{4},\\quad c = 2'
      }
    ],
    'updatedAt': FieldValue.serverTimestamp()
  });

  // Update Q12f
  batch.update(db.collection('questions').doc('y9-11d-q12f'), {
    'question': 'Rewrite the equation \\(5x - 3y = 9\\) in the form \\(y = mx + c\\) and write down the gradient and \\(y\\)-intercept.',
    'answer': '2',
    'options': [
      { text: '$y = -\\frac{5}{3}x - 3,\\quad m = -\\frac{5}{3},\\quad c = -3$', imageUrl: '' },
      { text: '$y = \\frac{3}{5}x - 3,\\quad m = \\frac{3}{5},\\quad c = -3$', imageUrl: '' },
      { text: '$y = \\frac{5}{3}x - 3,\\quad m = \\frac{5}{3},\\quad c = -3$', imageUrl: '' },
      { text: '$y = \\frac{5}{3}x + 3,\\quad m = \\frac{5}{3},\\quad c = 3$', imageUrl: '' }
    ],
    'solutionSteps': [
      {
        explanation: 'Start with the given equation and isolate $y$. Add $3y$ to both sides and subtract $9$ from both sides.',
        workingOut: '5x - 3y = 9 \\\\ 5x - 9 = 3y \\\\ 3y = 5x - 9'
      },
      {
        explanation: 'Divide every term by $3$ to solve for $y$.',
        workingOut: 'y = \\frac{5x}{3} - \\frac{9}{3} \\\\ y = \\frac{5}{3}x - 3'
      },
      {
        explanation: 'Identify the gradient $m$ and the $y$-intercept $c$ from the equation $y = \\frac{5}{3}x - 3$.',
        workingOut: 'm = \\frac{5}{3}, \\quad c = -3'
      },
      {
        explanation: 'State the final answer clearly.',
        workingOut: 'y = \\frac{5}{3}x - 3,\\quad m = \\frac{5}{3},\\quad c = -3'
      }
    ],
    'updatedAt': FieldValue.serverTimestamp()
  });

  // Update Q12g
  batch.update(db.collection('questions').doc('y9-11d-q12g'), {
    'question': 'Rewrite the equation \\(x = 3y - 6\\) in the form \\(y = mx + c\\) and write down the gradient and \\(y\\)-intercept.',
    'answer': '1',
    'options': [
      { text: '$y = -\\frac{1}{3}x + 2,\\quad m = -\\frac{1}{3},\\quad c = 2$', imageUrl: '' },
      { text: '$y = \\frac{1}{3}x + 2,\\quad m = \\frac{1}{3},\\quad c = 2$', imageUrl: '' },
      { text: '$y = \\frac{1}{3}x - 2,\\quad m = \\frac{1}{3},\\quad c = -2$', imageUrl: '' },
      { text: '$y = 3x + 2,\\quad m = 3,\\quad c = 2$', imageUrl: '' }
    ],
    'solutionSteps': [
      {
        explanation: 'Start with the given equation and isolate $y$. Add $6$ to both sides.',
        workingOut: 'x = 3y - 6 \\\\ x + 6 = 3y \\\\ 3y = x + 6'
      },
      {
        explanation: 'Divide every term by $3$ to solve for $y$.',
        workingOut: 'y = \\frac{x}{3} + \\frac{6}{3} \\\\ y = \\frac{1}{3}x + 2'
      },
      {
        explanation: 'Identify the gradient $m$ and the $y$-intercept $c$ from the equation $y = \\frac{1}{3}x + 2$.',
        workingOut: 'm = \\frac{1}{3}, \\quad c = 2'
      },
      {
        explanation: 'State the final answer clearly.',
        workingOut: 'y = \\frac{1}{3}x + 2,\\quad m = \\frac{1}{3},\\quad c = 2'
      }
    ],
    'updatedAt': FieldValue.serverTimestamp()
  });

  // Update Q12h
  batch.update(db.collection('questions').doc('y9-11d-q12h'), {
    'question': 'Rewrite the equation \\(x = 4y + 8\\) in the form \\(y = mx + c\\) and write down the gradient and \\(y\\)-intercept.',
    'answer': '1',
    'options': [
      { text: '$y = -\\frac{1}{4}x - 2,\\quad m = -\\frac{1}{4},\\quad c = -2$', imageUrl: '' },
      { text: '$y = \\frac{1}{4}x - 2,\\quad m = \\frac{1}{4},\\quad c = -2$', imageUrl: '' },
      { text: '$y = \\frac{1}{4}x + 2,\\quad m = \\frac{1}{4},\\quad c = 2$', imageUrl: '' },
      { text: '$y = 4x - 2,\\quad m = 4,\\quad c = -2$', imageUrl: '' }
    ],
    'solutionSteps': [
      {
        explanation: 'Start with the given equation and isolate $y$. Subtract $8$ from both sides.',
        workingOut: 'x = 4y + 8 \\\\ x - 8 = 4y \\\\ 4y = x - 8'
      },
      {
        explanation: 'Divide every term by $4$ to solve for $y$.',
        workingOut: 'y = \\frac{x}{4} - \\frac{8}{4} \\\\ y = \\frac{1}{4}x - 2'
      },
      {
        explanation: 'Identify the gradient $m$ and the $y$-intercept $c$ from the equation $y = \\frac{1}{4}x - 2$.',
        workingOut: 'm = \\frac{1}{4}, \\quad c = -2'
      },
      {
        explanation: 'State the final answer clearly.',
        workingOut: 'y = \\frac{1}{4}x - 2,\\quad m = \\frac{1}{4},\\quad c = -2'
      }
    ],
    'updatedAt': FieldValue.serverTimestamp()
  });

  await batch.commit();
  console.log("Updated y9-11d-q12e, q12f, q12g, q12h.");
  process.exit(0);
}

run().catch(console.error);
