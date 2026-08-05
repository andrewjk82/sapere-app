const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function run() {
  await db.collection('questions').doc('b579b068f9970b62253a031073711fc3').update({
    answer: '0', // y = 2, -6 is option 0
    solution: '<div style="text-align: left;"><p>Using substitution:</p><p>\\(x = y + 4\\)</p><p>\\((y + 4)y = 12 \\Rightarrow y^2 + 4y - 12 = 0\\)</p><p>\\((y + 6)(y - 2) = 0 \\Rightarrow y = -6, 2\\)</p></div>',
    hint: 'Rearrange the linear equation to isolate \\(x\\) (e.g. \\(x = y + 4\\)), then substitute this into the non-linear equation to solve for \\(y\\) directly.',
    solutionSteps: [
      {
        explanation: 'Rearrange the linear equation to make \\(x\\) the subject.',
        workingOut: '<div style="text-align: left;"><p>From the first equation \\(x - y = 4\\), we can isolate \\(x\\):</p><p>\\(x = y + 4\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Substitute this expression for \\(x\\) into the non-linear equation.',
        workingOut: '<div style="text-align: left;"><p>Substitute \\(x = y + 4\\) into \\(xy = 12\\):</p><p>\\((y + 4)y = 12\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Expand and rearrange into a standard quadratic equation.',
        workingOut: '<div style="text-align: left;"><p>Expand the brackets:</p><p>\\(y^2 + 4y = 12\\)</p><p>Subtract 12 from both sides:</p><p>\\(y^2 + 4y - 12 = 0\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Factorise and solve for \\(y\\).',
        workingOut: '<div style="text-align: left;"><p>Find two numbers that multiply to \\(-12\\) and add to \\(4\\) (which are \\(6\\) and \\(-2\\)):</p><p>\\((y + 6)(y - 2) = 0\\)</p><p>Therefore, \\(y = -6\\) or \\(y = 2\\).</p></div>',
        graphData: null
      }
    ]
  });
  console.log('Fixed b579b068f9970b62253a031073711fc3');
}
run().catch(console.error);
