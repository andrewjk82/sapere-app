const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function run() {
  await db.collection('questions').doc('c9e953a5cdd77aeb0f96ebcf3376b78b').update({
    solution: '<div style="text-align: left;"><p>Using elimination:</p><p>\\(3x + 2y = -4 \\quad \\cdots (1)\\)</p><p>\\(x - 2y = -12 \\quad \\cdots (2)\\)</p><p>Add (1) and (2):</p><p>\\((3x + 2y) + (x - 2y) = -4 + (-12)\\)</p><p>\\(4x = -16 \\Rightarrow x = -4\\)</p></div>',
    hint: 'Add the two equations together to eliminate the \\(2y\\) and \\(-2y\\) terms, then solve directly for \\(x\\).',
    solutionSteps: [
      {
        explanation: 'Add the equations to eliminate \\(y\\).',
        workingOut: '<div style="text-align: left;"><p>We have:</p><p>\\(3x + 2y = -4 \\quad \\cdots (1)\\)</p><p>\\(x - 2y = -12 \\quad \\cdots (2)\\)</p><p>Since the coefficients of \\(y\\) are opposites (\\(+2\\) and \\(-2\\)), add equation (1) and equation (2):</p><p>\\((3x + 2y) + (x - 2y) = -4 + (-12)\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Simplify the resulting equation.',
        workingOut: '<div style="text-align: left;"><p>The \\(y\\) terms cancel out, leaving:</p><p>\\(4x = -16\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Solve for \\(x\\).',
        workingOut: '<div style="text-align: left;"><p>Divide both sides by 4:</p><p>\\(x = -4\\)</p><p>Therefore, the value of \\(x\\) is -4.</p></div>',
        graphData: null
      }
    ]
  });
  console.log('Fixed c9e953a5cdd77aeb0f96ebcf3376b78b');
}
run().catch(console.error);
