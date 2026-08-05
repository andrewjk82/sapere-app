const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function run() {
  await db.collection('questions').doc('c2eb0edee84db18ee255309de51d3114').update({
    solution: '<div style="text-align: left;"><p>Using substitution:</p><p>\\(y = 3x\\)</p><p>\\(2x + 3(3x) = 22\\)</p><p>\\(11x = 22 \\Rightarrow x = 2\\)</p><p>\\(y = 3(2) = 6\\)</p></div>',
    hint: 'Substitute \\(y = 3x\\) into the second equation to solve for \\(x\\), then substitute that value back to find \\(y\\).',
    solutionSteps: [
      {
        explanation: 'Identify the isolated variable.',
        workingOut: '<div style="text-align: left;"><p>The first equation already has \\(y\\) isolated:</p><p>\\(y = 3x\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Substitute this expression into the second equation.',
        workingOut: '<div style="text-align: left;"><p>Substitute \\(y = 3x\\) into \\(2x + 3y = 22\\):</p><p>\\(2x + 3(3x) = 22\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Expand and solve for \\(x\\).',
        workingOut: '<div style="text-align: left;"><p>\\(2x + 9x = 22\\)</p><p>\\(11x = 22\\)</p><p>Divide by 11:</p><p>\\(x = 2\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Substitute the value of \\(x\\) back to find \\(y\\).',
        workingOut: '<div style="text-align: left;"><p>Substitute \\(x = 2\\) into the first equation:</p><p>\\(y = 3(2)\\)</p><p>\\(y = 6\\)</p></div>',
        graphData: null
      }
    ]
  });
  console.log('Fixed c2eb0edee84db18ee255309de51d3114');
}
run().catch(console.error);
