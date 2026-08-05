const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function run() {
  await db.collection('questions').doc('cff3f55c97191b4487acdedc37f9983e').update({
    answer: '0', 
    options: [
      { text: '\\(x = 2, y = 7\\) and \\(x = -2, y = -1\\)', imageUrl: '' },
      { text: '\\(x = -2, y = 7\\) and \\(x = 2, y = -1\\)', imageUrl: '' },
      { text: '\\(x = 2, y = -7\\) and \\(x = -2, y = 1\\)', imageUrl: '' },
      { text: '\\(x = -2, y = -7\\) and \\(x = 2, y = 1\\)', imageUrl: '' }
    ],
    solution: '<div style="text-align: left;"><p>Using substitution:</p><p>\\(x^2 + 2x - 1 = 2x + 3\\)</p><p>\\(x^2 - 4 = 0 \\Rightarrow x^2 = 4\\)</p><p>\\(x = 2, -2\\)</p><p>If \\(x = 2\\), \\(y = 2(2) + 3 = 7\\).</p><p>If \\(x = -2\\), \\(y = 2(-2) + 3 = -1\\).</p></div>',
    hint: 'Since both equations are equal to \\(y\\), set them equal to each other to solve for \\(x\\) first.',
    solutionSteps: [
      {
        explanation: 'Set the equations equal to each other.',
        workingOut: '<div style="text-align: left;"><p>Since both equations are equal to \\(y\\), we can substitute one into the other:</p><p>\\(x^2 + 2x - 1 = 2x + 3\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Simplify into a standard quadratic equation.',
        workingOut: '<div style="text-align: left;"><p>Subtract \\(2x\\) and \\(3\\) from both sides to collect terms:</p><p>\\(x^2 - 4 = 0\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Solve for \\(x\\).',
        workingOut: '<div style="text-align: left;"><p>Add 4 to both sides:</p><p>\\(x^2 = 4\\)</p><p>Take the square root of both sides:</p><p>\\(x = 2 \\text{ or } x = -2\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Find the corresponding \\(y\\) values.',
        workingOut: '<div style="text-align: left;"><p>Substitute \\(x = 2\\) into \\(y = 2x + 3\\):</p><p>\\(y = 2(2) + 3 = 7\\)</p><p>Substitute \\(x = -2\\) into \\(y = 2x + 3\\):</p><p>\\(y = 2(-2) + 3 = -1\\)</p><p>Therefore, the solutions are \\(x = 2, y = 7\\) and \\(x = -2, y = -1\\).</p></div>',
        graphData: null
      }
    ]
  });
  console.log('Fixed cff3f55c97191b4487acdedc37f9983e');
}
run().catch(console.error);
