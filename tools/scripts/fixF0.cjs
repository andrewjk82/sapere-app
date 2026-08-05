const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function run() {
  await db.collection('questions').doc('f0d39facd9cdde52396ce0073facc1ac').update({
    solution: '<div style="text-align: left;"><p>Using elimination:</p><p>\\(3x + y = 2 \\quad \\cdots (1)\\)</p><p>\\(x - y = -6 \\quad \\cdots (2)\\)</p><p>Multiply (2) by 3:</p><p>\\(3x - 3y = -18 \\quad \\cdots (3)\\)</p><p>Subtract (3) from (1):</p><p>\\((3x + y) - (3x - 3y) = 2 - (-18)\\)</p><p>\\(4y = 20 \\Rightarrow y = 5\\)</p></div>',
    hint: 'Multiply the second equation by 3 to match the \\(x\\) coefficients, then subtract to eliminate \\(x\\) and solve directly for \\(y\\).',
    solutionSteps: [
      {
        explanation: 'Multiply the second equation to align the coefficients of \\(x\\).',
        workingOut: '<div style="text-align: left;"><p>We have:</p><p>\\(3x + y = 2 \\quad \\cdots (1)\\)</p><p>\\(x - y = -6 \\quad \\cdots (2)\\)</p><p>To solve directly for \\(y\\), let us eliminate \\(x\\). Multiply equation (2) by 3:</p><p>\\(3(x - y) = 3(-6) \\Rightarrow 3x - 3y = -18 \\quad \\cdots (3)\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Subtract the equations to eliminate \\(x\\).',
        workingOut: '<div style="text-align: left;"><p>Subtract equation (3) from equation (1):</p><p>\\((3x + y) - (3x - 3y) = 2 - (-18)\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Simplify and solve for \\(y\\).',
        workingOut: '<div style="text-align: left;"><p>The \\(x\\) terms cancel out, leaving:</p><p>\\(4y = 20\\)</p><p>Divide both sides by 4:</p><p>\\(y = 5\\)</p><p>Therefore, the value of \\(y\\) is 5.</p></div>',
        graphData: null
      }
    ]
  });
  console.log('Fixed f0d39facd9cdde52396ce0073facc1ac');
}
run().catch(console.error);
