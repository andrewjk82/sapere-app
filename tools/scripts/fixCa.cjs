const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function run() {
  await db.collection('questions').doc('ca51b31168fb578c55277a8fc930e728').update({
    answer: '3', // y = 7, 3 is option 3
    solution: '<div style="text-align: left;"><p>Using substitution:</p><p>\\(x = 10 - y\\)</p><p>\\((10 - y)^2 + y^2 = 58\\)</p><p>\\(100 - 20y + 2y^2 = 58\\)</p><p>\\(2y^2 - 20y + 42 = 0 \\Rightarrow y^2 - 10y + 21 = 0\\)</p><p>\\((y - 3)(y - 7) = 0 \\Rightarrow y = 3, 7\\)</p></div>',
    hint: 'Rearrange the linear equation to isolate \\(x\\) (i.e. \\(x = 10 - y\\)), then substitute this into the non-linear equation to solve for \\(y\\) directly.',
    solutionSteps: [
      {
        explanation: 'Rearrange the linear equation to make \\(x\\) the subject.',
        workingOut: '<div style="text-align: left;"><p>From the linear equation \\(x + y = 10\\), isolate \\(x\\):</p><p>\\(x = 10 - y\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Substitute this expression into the non-linear equation.',
        workingOut: '<div style="text-align: left;"><p>Substitute \\(x = 10 - y\\) into \\(x^2 + y^2 = 58\\):</p><p>\\((10 - y)^2 + y^2 = 58\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Expand and simplify to form a standard quadratic equation.',
        workingOut: '<div style="text-align: left;"><p>Expand the brackets:</p><p>\\(100 - 20y + y^2 + y^2 = 58\\)</p><p>Combine like terms:</p><p>\\(2y^2 - 20y + 100 = 58\\)</p><p>Subtract 58 from both sides:</p><p>\\(2y^2 - 20y + 42 = 0\\)</p><p>Divide the entire equation by 2:</p><p>\\(y^2 - 10y + 21 = 0\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Factorise and solve for \\(y\\).',
        workingOut: '<div style="text-align: left;"><p>Find two numbers that multiply to \\(21\\) and add to \\(-10\\) (which are \\(-3\\) and \\(-7\\)):</p><p>\\((y - 3)(y - 7) = 0\\)</p><p>Therefore, \\(y = 3\\) or \\(y = 7\\).</p></div>',
        graphData: null
      }
    ]
  });
  console.log('Fixed ca51b31168fb578c55277a8fc930e728');
}
run().catch(console.error);
