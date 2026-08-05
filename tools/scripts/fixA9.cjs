const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function run() {
  await db.collection('questions').doc('a98e0522f30b7d67f2f2cc08b86724bf').update({
    solution: '<div style="text-align: left;"><p>Using elimination:</p><p>\\(2x + 3y = 0 \\quad \\cdots (1)\\)</p><p>\\(3x - y = 22 \\quad \\cdots (2)\\)</p><p>Multiply (2) by 3:</p><p>\\(9x - 3y = 66 \\quad \\cdots (3)\\)</p><p>Add (1) and (3):</p><p>\\(11x = 66 \\Rightarrow x = 6\\)</p></div>',
    hint: 'Multiply the second equation by 3 to make the coefficients of \\(y\\) match (with opposite signs), then add the equations together to eliminate \\(y\\).',
    solutionSteps: [
      {
        explanation: 'Multiply one equation to align the coefficients of \\(y\\).',
        workingOut: '<div style="text-align: left;"><p>We have:</p><p>\\(2x + 3y = 0 \\quad \\cdots (1)\\)</p><p>\\(3x - y = 22 \\quad \\cdots (2)\\)</p><p>Multiply equation (2) by 3 so the \\(y\\) terms can be eliminated:</p><p>\\(3(3x - y) = 3(22)\\)</p><p>\\(9x - 3y = 66 \\quad \\cdots (3)\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Add the equations together to eliminate \\(y\\).',
        workingOut: '<div style="text-align: left;"><p>Add equation (1) and equation (3):</p><p>\\((2x + 3y) + (9x - 3y) = 0 + 66\\)</p><p>The \\(y\\) terms cancel out:</p><p>\\(11x = 66\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Solve for \\(x\\).',
        workingOut: '<div style="text-align: left;"><p>Divide both sides by 11:</p><p>\\(x = 6\\)</p><p>Therefore, the value of \\(x\\) is 6.</p></div>',
        graphData: null
      }
    ]
  });
  console.log('Fixed a98e0522f30b7d67f2f2cc08b86724bf');
}
run().catch(console.error);
