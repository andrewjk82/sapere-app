const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function run() {
  await db.collection('questions').doc('f0d567f3509d847d3aa7db2765530ba4').update({
    solution: '<div style="text-align: left;"><p>Using elimination:</p><p>\\(3x + 2y = -4 \\quad \\cdots (1)\\)</p><p>\\(x - 2y = -12 \\quad \\cdots (2)\\)</p><p>Multiply (2) by 3:</p><p>\\(3x - 6y = -36 \\quad \\cdots (3)\\)</p><p>Subtract (3) from (1):</p><p>\\((3x + 2y) - (3x - 6y) = -4 - (-36)\\)</p><p>\\(8y = 32 \\Rightarrow y = 4\\)</p></div>',
    hint: 'Multiply the second equation by 3 to match the \\(x\\) coefficients, then subtract to eliminate \\(x\\) and solve directly for \\(y\\).',
    solutionSteps: [
      {
        explanation: 'Multiply the second equation to align the coefficients of \\(x\\).',
        workingOut: '<div style="text-align: left;"><p>We have:</p><p>\\(3x + 2y = -4 \\quad \\cdots (1)\\)</p><p>\\(x - 2y = -12 \\quad \\cdots (2)\\)</p><p>To solve directly for \\(y\\), let us eliminate \\(x\\). Multiply equation (2) by 3:</p><p>\\(3(x - 2y) = 3(-12) \\Rightarrow 3x - 6y = -36 \\quad \\cdots (3)\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Subtract the equations to eliminate \\(x\\).',
        workingOut: '<div style="text-align: left;"><p>Subtract equation (3) from equation (1):</p><p>\\((3x + 2y) - (3x - 6y) = -4 - (-36)\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Simplify and solve for \\(y\\).',
        workingOut: '<div style="text-align: left;"><p>The \\(x\\) terms cancel out, leaving \\(2y - (-6y)\\):</p><p>\\(8y = 32\\)</p><p>Divide both sides by 8:</p><p>\\(y = 4\\)</p><p>Therefore, the value of \\(y\\) is 4.</p></div>',
        graphData: null
      }
    ]
  });
  console.log('Fixed f0d567f3509d847d3aa7db2765530ba4');
}
run().catch(console.error);
