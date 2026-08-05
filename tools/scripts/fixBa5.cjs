const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function run() {
  await db.collection('questions').doc('ba5b52482a4f9fcd91b3b6e353a103bc').update({
    solution: '<div style="text-align: left;"><p>Using substitution:</p><p>\\(y = 7 - 2x\\)</p><p>\\(5x + 3(7 - 2x) = 18\\)</p><p>\\(5x + 21 - 6x = 18 \\Rightarrow -x = -3 \\Rightarrow x = 3\\)</p><p>\\(y = 7 - 2(3) = 1\\)</p></div>',
    hint: 'Rearrange the first equation to isolate \\(y\\) (i.e. \\(y = 7 - 2x\\)), substitute it into the second equation to find \\(x\\), and then calculate \\(y\\).',
    solutionSteps: [
      {
        explanation: 'Rearrange the first equation to make \\(y\\) the subject.',
        workingOut: '<div style="text-align: left;"><p>From the first equation \\(2x + y = 7\\), subtract \\(2x\\) from both sides:</p><p>\\(y = 7 - 2x\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Substitute this expression for \\(y\\) into the second equation.',
        workingOut: '<div style="text-align: left;"><p>Substitute \\(y = 7 - 2x\\) into \\(5x + 3y = 18\\):</p><p>\\(5x + 3(7 - 2x) = 18\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Expand the brackets and solve for \\(x\\).',
        workingOut: '<div style="text-align: left;"><p>\\(5x + 21 - 6x = 18\\)</p><p>\\(-x + 21 = 18\\)</p><p>Subtract 21 from both sides:</p><p>\\(-x = -3 \\Rightarrow x = 3\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Substitute the value of \\(x\\) back into the rearranged first equation to find \\(y\\).',
        workingOut: '<div style="text-align: left;"><p>Substitute \\(x = 3\\) into \\(y = 7 - 2x\\):</p><p>\\(y = 7 - 2(3)\\)</p><p>\\(y = 7 - 6 = 1\\)</p><p>Therefore, \\(y = 1\\).</p></div>',
        graphData: null
      }
    ]
  });
  console.log('Fixed ba5b52482a4f9fcd91b3b6e353a103bc');
}
run().catch(console.error);
