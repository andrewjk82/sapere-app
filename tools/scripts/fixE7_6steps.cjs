const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function run() {
  await db.collection('questions').doc('e7feeaf3eaa26401d5f4c608a88b04e4').update({
    solutionSteps: [
      {
        explanation: 'Rearrange the linear equation to isolate \\(x\\).',
        workingOut: '<div style="text-align: left;"><p>We are given the system:</p><p>\\(|x + y| = 5 \\quad \\cdots (1)\\)</p><p>\\(x - y = 1 \\quad \\cdots (2)\\)</p><p>To use the substitution method, we first need to isolate one variable. Let us isolate \\(x\\) in equation (2) by adding \\(y\\) to both sides:</p><p>\\(x = y + 1\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Substitute this expression into the absolute value equation.',
        workingOut: '<div style="text-align: left;"><p>Now, replace every \\(x\\) in equation (1) with \\((y + 1)\\):</p><p>\\(|(y + 1) + y| = 5\\)</p><p>Combine the like terms inside the absolute value bars (\\(y + y = 2y\\)):</p><p>\\(|2y + 1| = 5\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Interpret the absolute value equation and set up two possible cases.',
        workingOut: '<div style="text-align: left;"><p>The equation \\(|2y + 1| = 5\\) tells us that the distance from 0 to \\(2y + 1\\) on a number line is exactly 5.</p><p>This means the expression inside the absolute value, \\(2y + 1\\), can be either exactly \\(5\\) or exactly \\(-5\\).</p><p>Therefore, we must split this into two separate cases to find all possible solutions:</p><p><strong>Case 1:</strong> \\(2y + 1 = 5\\)</p><p><strong>Case 2:</strong> \\(2y + 1 = -5\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Solve Case 1 to find the first pair of solutions.',
        workingOut: '<div style="text-align: left;"><p><strong>Case 1:</strong> Assume what is inside the absolute value is positive.</p><p>\\(2y + 1 = 5\\)</p><p>Subtract 1 from both sides:</p><p>\\(2y = 4\\)</p><p>Divide by 2:</p><p>\\(y = 2\\)</p><p>Now substitute \\(y = 2\\) back into our rearranged linear equation (\\(x = y + 1\\)):</p><p>\\(x = (2) + 1 = 3\\)</p><p>So, our first solution pair is \\(x = 3, y = 2\\).</p></div>',
        graphData: null
      },
      {
        explanation: 'Solve Case 2 to find the second pair of solutions.',
        workingOut: '<div style="text-align: left;"><p><strong>Case 2:</strong> Assume what is inside the absolute value is negative.</p><p>\\(2y + 1 = -5\\)</p><p>Subtract 1 from both sides:</p><p>\\(2y = -6\\)</p><p>Divide by 2:</p><p>\\(y = -3\\)</p><p>Now substitute \\(y = -3\\) back into our rearranged linear equation (\\(x = y + 1\\)):</p><p>\\(x = (-3) + 1 = -2\\)</p><p>So, our second solution pair is \\(x = -2, y = -3\\).</p></div>',
        graphData: null
      },
      {
        explanation: 'Combine the results from both cases to state the final solutions.',
        workingOut: '<div style="text-align: left;"><p>By solving both cases, we have found two distinct points where these equations are satisfied simultaneously.</p><p>Therefore, the complete solutions to this system of equations are:</p><p>\\(x = 3, y = 2\\) and \\(x = -2, y = -3\\).</p></div>',
        graphData: null
      }
    ]
  });
  console.log('Fixed e7feeaf3eaa26401d5f4c608a88b04e4 with 6 steps');
}
run().catch(console.error);
