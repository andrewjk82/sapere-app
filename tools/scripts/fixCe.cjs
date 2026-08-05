const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function run() {
  await db.collection('questions').doc('cee4f05e4cf2b5d000e3c55894749b85').update({
    solution: '<div style="text-align: left;"><p>Using substitution:</p><p>\\(y = 3x\\)</p><p>\\(2x + 3x = 10\\)</p><p>\\(5x = 10 \\Rightarrow x = 2\\)</p></div>',
    hint: 'Substitute \\(y = 3x\\) directly into the second equation to solve for \\(x\\).',
    solutionSteps: [
      {
        explanation: 'Identify the isolated variable.',
        workingOut: '<div style="text-align: left;"><p>The first equation already has \\(y\\) isolated:</p><p>\\(y = 3x\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Substitute this expression into the second equation.',
        workingOut: '<div style="text-align: left;"><p>Substitute \\(y = 3x\\) into \\(2x + y = 10\\):</p><p>\\(2x + 3x = 10\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Simplify the equation.',
        workingOut: '<div style="text-align: left;"><p>Combine the \\(x\\) terms:</p><p>\\(5x = 10\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Solve for \\(x\\).',
        workingOut: '<div style="text-align: left;"><p>Divide both sides by 5:</p><p>\\(x = 2\\)</p><p>Therefore, the value of \\(x\\) is 2.</p></div>',
        graphData: null
      }
    ]
  });
  console.log('Fixed cee4f05e4cf2b5d000e3c55894749b85');
}
run().catch(console.error);
