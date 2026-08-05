const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function run() {
  await db.collection('questions').doc('a8cc5e50c8632e7539777858ddfb51c2').update({
    solution: '<div style="text-align: left;"><p>Using substitution:</p><p>\\(2(4y + 3) - y = 13\\)</p><p>\\(8y + 6 - y = 13\\)</p><p>\\(7y = 7 \\Rightarrow y = 1\\)</p></div>',
    solutionSteps: [
      {
        explanation: 'Identify the isolated variable.',
        workingOut: '<div style="text-align: left;"><p>The first equation already has \\(x\\) isolated:</p><p>\\(x = 4y + 3\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Substitute this expression into the second equation.',
        workingOut: '<div style="text-align: left;"><p>Substitute \\(x = 4y + 3\\) into \\(2x - y = 13\\):</p><p>\\(2(4y + 3) - y = 13\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Expand the brackets.',
        workingOut: '<div style="text-align: left;"><p>\\(8y + 6 - y = 13\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Collect like terms and solve for \\(y\\).',
        workingOut: '<div style="text-align: left;"><p>\\(7y + 6 = 13\\)</p><p>Subtract 6 from both sides:</p><p>\\(7y = 7\\)</p><p>Divide by 7:</p><p>\\(y = 1\\)</p></div>',
        graphData: null
      }
    ]
  });
  console.log('Fixed a8cc5e50c8632e7539777858ddfb51c2');
}
run().catch(console.error);
