const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  // Update standalone q13a
  batch.update(db.collection('questions').doc('y9-11d-q13a'), {
    'answer': '0',
    'options': [
      { text: '$y = -\\frac{a}{b}x + \\frac{d}{b}$', imageUrl: '' },
      { text: '$y = \\frac{a}{b}x + \\frac{d}{b}$', imageUrl: '' },
      { text: '$y = -\\frac{a}{b}x - \\frac{d}{b}$', imageUrl: '' },
      { text: '$y = -\\frac{b}{a}x + \\frac{d}{a}$', imageUrl: '' }
    ],
    'solutionSteps': [
      {
        explanation: 'Start with the given equation and isolate the term with $y$. Subtract $ax$ from both sides.',
        workingOut: 'ax + by = d \\\\ by = -ax + d'
      },
      {
        explanation: 'Divide every term by $b$ to solve for $y$.',
        workingOut: 'y = \\frac{-ax}{b} + \\frac{d}{b} \\\\ y = -\\frac{a}{b}x + \\frac{d}{b}'
      }
    ],
    'updatedAt': FieldValue.serverTimestamp()
  });

  // Update standalone q13b
  batch.update(db.collection('questions').doc('y9-11d-q13b'), {
    'question': 'Answer the following analytical questions regarding the general linear equation \\(ax + by = d\\).\nb) Write down the gradient and \\(y\\)-intercept of the line whose equation is \\(ax + by = d\\).',
    'answer': '1',
    'options': [
      { text: '$m = \\frac{a}{b},\\quad c = \\frac{d}{b}$', imageUrl: '' },
      { text: '$m = -\\frac{a}{b},\\quad c = \\frac{d}{b}$', imageUrl: '' },
      { text: '$m = -\\frac{a}{b},\\quad c = -\\frac{d}{b}$', imageUrl: '' },
      { text: '$m = \\frac{b}{a},\\quad c = \\frac{d}{a}$', imageUrl: '' }
    ],
    'solutionSteps': [
      {
        explanation: 'From part (a), the equation in gradient-intercept form is $y = -\\frac{a}{b}x + \\frac{d}{b}$.',
        workingOut: 'y = -\\frac{a}{b}x + \\frac{d}{b}'
      },
      {
        explanation: 'Identify the gradient $m$ and the $y$-intercept $c$.',
        workingOut: 'm = -\\frac{a}{b}, \\quad c = \\frac{d}{b}'
      }
    ],
    'updatedAt': FieldValue.serverTimestamp()
  });

  await batch.commit();
  console.log("Updated standalone y9-11d-q13a and q13b.");
  process.exit(0);
}

run().catch(console.error);
