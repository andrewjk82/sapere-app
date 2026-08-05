const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function run() {
  await db.collection('questions').doc('c332a45851ec27aa5f49ddad2eb9e9ee').update({
    solution: '<div style="text-align: left;"><p>Using elimination:</p><p>\\(x + y = 7 \\quad \\cdots (1)\\)</p><p>\\(x - y = 3 \\quad \\cdots (2)\\)</p><p>Subtract (2) from (1):</p><p>\\((x + y) - (x - y) = 7 - 3\\)</p><p>\\(2y = 4 \\Rightarrow y = 2\\)</p></div>',
    hint: 'Subtract the second equation from the first to eliminate \\(x\\) and solve directly for \\(y\\).',
    solutionSteps: [
      {
        explanation: 'Subtract the equations to eliminate \\(x\\).',
        workingOut: '<div style="text-align: left;"><p>We have:</p><p>\\(x + y = 7 \\quad \\cdots (1)\\)</p><p>\\(x - y = 3 \\quad \\cdots (2)\\)</p><p>Since the coefficients of \\(x\\) are identical, subtract equation (2) from equation (1):</p><p>\\((x + y) - (x - y) = 7 - 3\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Simplify the resulting equation.',
        workingOut: '<div style="text-align: left;"><p>The \\(x\\) terms cancel out, leaving \\(y - (-y)\\):</p><p>\\(2y = 4\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Solve for \\(y\\).',
        workingOut: '<div style="text-align: left;"><p>Divide both sides by 2:</p><p>\\(y = 2\\)</p><p>Therefore, the value of \\(y\\) is 2.</p></div>',
        graphData: null
      }
    ]
  });
  console.log('Fixed c332a45851ec27aa5f49ddad2eb9e9ee');
}
run().catch(console.error);
