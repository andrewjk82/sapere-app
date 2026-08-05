const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function run() {
  await db.collection('questions').doc('efd5e2d5f3372407ae4a0a9dc8545ebd').update({
    answer: '1', 
    options: [
      { text: '\\(x = 2, \\; y = 3\\) and \\(x = -2, \\; y = 5\\)', imageUrl: '' },
      { text: '\\(x = 2, \\; y = -3\\) and \\(x = -2, \\; y = 5\\)', imageUrl: '' },
      { text: '\\(x = -2, \\; y = 3\\) and \\(x = 2, \\; y = 5\\)', imageUrl: '' },
      { text: '\\(x = -2, \\; y = -3\\) and \\(x = 2, \\; y = 5\\)', imageUrl: '' }
    ],
    solution: '<div style="text-align: left;"><p>Using substitution:</p><p>\\(1 - 2x = x^2 - 2x - 3\\)</p><p>\\(1 = x^2 - 3 \\Rightarrow x^2 = 4\\)</p><p>\\(x = 2, -2\\)</p><p>If \\(x = 2\\), \\(y = 1 - 2(2) = -3\\).</p><p>If \\(x = -2\\), \\(y = 1 - 2(-2) = 5\\).</p></div>',
    hint: 'Since both equations equal \\(y\\), set them equal to each other to solve for \\(x\\) first.',
    solutionSteps: [
      {
        explanation: 'Set the equations equal to each other.',
        workingOut: '<div style="text-align: left;"><p>Since both equations are equal to \\(y\\), substitute one into the other:</p><p>\\(1 - 2x = x^2 - 2x - 3\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Simplify the equation.',
        workingOut: '<div style="text-align: left;"><p>Add \\(2x\\) to both sides to cancel out the \\(x\\) terms:</p><p>\\(1 = x^2 - 3\\)</p><p>Add 3 to both sides:</p><p>\\(x^2 = 4\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Solve for \\(x\\).',
        workingOut: '<div style="text-align: left;"><p>Take the square root of both sides:</p><p>\\(x = 2 \\text{ or } x = -2\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Find the corresponding \\(y\\) values.',
        workingOut: '<div style="text-align: left;"><p>Substitute \\(x = 2\\) into \\(y = 1 - 2x\\):</p><p>\\(y = 1 - 2(2) = -3\\)</p><p>Substitute \\(x = -2\\) into \\(y = 1 - 2x\\):</p><p>\\(y = 1 - 2(-2) = 5\\)</p><p>Therefore, the solutions are \\(x = 2, y = -3\\) and \\(x = -2, y = 5\\).</p></div>',
        graphData: null
      }
    ]
  });
  console.log('Fixed efd5e2d5f3372407ae4a0a9dc8545ebd');
}
run().catch(console.error);
