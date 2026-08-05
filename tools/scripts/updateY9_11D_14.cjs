const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  batch.update(db.collection('questions').doc('y9-11d-q14'), {
    'solutionSteps': [
      {
        explanation: 'First, find the gradient $m$ of the line passing through $(a, 0)$ and $(0, b)$.',
        workingOut: 'm = \\frac{y_2 - y_1}{x_2 - x_1} \\\\ m = \\frac{b - 0}{0 - a} = -\\frac{b}{a}'
      },
      {
        explanation: 'Identify the $y$-intercept $c$. The line passes through $(0, b)$, so the $y$-intercept is $b$.',
        workingOut: 'c = b'
      },
      {
        explanation: 'Substitute $m$ and $c$ into the gradient-intercept form, $y = mx + c$.',
        workingOut: 'y = -\\frac{b}{a}x + b'
      },
      {
        explanation: 'Rearrange the equation to match the required form. First, divide every term by $b$.',
        workingOut: '\\frac{y}{b} = \\frac{-\\frac{b}{a}x}{b} + \\frac{b}{b} \\\\ \\frac{y}{b} = -\\frac{x}{a} + 1'
      },
      {
        explanation: 'Finally, add $\\frac{x}{a}$ to both sides to complete the proof.',
        workingOut: '\\frac{x}{a} + \\frac{y}{b} = 1'
      }
    ],
    'updatedAt': FieldValue.serverTimestamp()
  });

  await batch.commit();
  console.log("Updated y9-11d-q14 solution steps.");
  process.exit(0);
}

run().catch(console.error);
