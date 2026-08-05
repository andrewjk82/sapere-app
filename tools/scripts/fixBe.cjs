const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function run() {
  await db.collection('questions').doc('be464d6957dc5bcba4cfd272543b6422').update({
    solution: '<div style="text-align: left;"><p>Using elimination:</p><p>\\(5c - d = 11 \\quad \\cdots (1)\\)</p><p>\\(3c - d = 7 \\quad \\cdots (2)\\)</p><p>Subtract (2) from (1):</p><p>\\((5c - d) - (3c - d) = 11 - 7\\)</p><p>\\(2c = 4 \\Rightarrow c = 2\\)</p></div>',
    hint: 'Subtract the second equation from the first to eliminate \\(d\\) and solve for \\(c\\).',
    solutionSteps: [
      {
        explanation: 'Subtract the equations to eliminate \\(d\\).',
        workingOut: '<div style="text-align: left;"><p>We have:</p><p>\\(5c - d = 11 \\quad \\cdots (1)\\)</p><p>\\(3c - d = 7 \\quad \\cdots (2)\\)</p><p>Since the coefficients of \\(d\\) are identical, subtract equation (2) from equation (1):</p><p>\\((5c - d) - (3c - d) = 11 - 7\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Solve for \\(c\\).',
        workingOut: '<div style="text-align: left;"><p>Simplify the equation:</p><p>\\(2c = 4\\)</p><p>Divide by 2:</p><p>\\(c = 2\\)</p></div>',
        graphData: null
      }
    ]
  });
  console.log('Fixed be464d6957dc5bcba4cfd272543b6422');
}
run().catch(console.error);
