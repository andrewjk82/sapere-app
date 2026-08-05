const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function run() {
  await db.collection('questions').doc('bbd007b1275bcf0339b5706dee043e74').update({
    answer: '2', // y = 5, 3 is option 2
    solution: '<div style="text-align: left;"><p>Using substitution:</p><p>\\(x = 8 - y\\)</p><p>\\((8 - y)^2 + (8 - y)y + y^2 = 49\\)</p><p>\\(64 - 16y + y^2 + 8y - y^2 + y^2 = 49\\)</p><p>\\(y^2 - 8y + 15 = 0\\)</p><p>\\((y - 3)(y - 5) = 0 \\Rightarrow y = 3, 5\\)</p></div>',
    hint: 'Rearrange the linear equation to isolate \\(x\\) (i.e. \\(x = 8 - y\\)), then substitute this into the non-linear equation to solve for \\(y\\) directly.',
    solutionSteps: [
      {
        explanation: 'Rearrange the linear equation to make \\(x\\) the subject.',
        workingOut: '<div style="text-align: left;"><p>From the linear equation \\(x + y = 8\\), isolate \\(x\\):</p><p>\\(x = 8 - y\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Substitute this expression for \\(x\\) into the non-linear equation.',
        workingOut: '<div style="text-align: left;"><p>Substitute \\(x = 8 - y\\) into \\(x^2 + xy + y^2 = 49\\):</p><p>\\((8 - y)^2 + (8 - y)y + y^2 = 49\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Expand the brackets and simplify into a standard quadratic equation.',
        workingOut: '<div style="text-align: left;"><p>Expand each term:</p><p>\\((64 - 16y + y^2) + (8y - y^2) + y^2 = 49\\)</p><p>Combine like terms:</p><p>\\(y^2 - 8y + 64 = 49\\)</p><p>Subtract 49 from both sides:</p><p>\\(y^2 - 8y + 15 = 0\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Factorise and solve for \\(y\\).',
        workingOut: '<div style="text-align: left;"><p>Find two numbers that multiply to \\(15\\) and add to \\(-8\\) (which are \\(-3\\) and \\(-5\\)):</p><p>\\((y - 3)(y - 5) = 0\\)</p><p>Therefore, \\(y = 3\\) or \\(y = 5\\).</p></div>',
        graphData: null
      }
    ]
  });
  console.log('Fixed bbd007b1275bcf0339b5706dee043e74');
}
run().catch(console.error);
