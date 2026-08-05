const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function run() {
  // Update e5c2e9b5a792fdf98ead0f5740c2e964 (Substitution)
  await db.collection('questions').doc('e5c2e9b5a792fdf98ead0f5740c2e964').update({
    solution: '<div style="text-align: left;"><p>Using substitution:</p><p>\\(p = 6 - q\\)</p><p>\\((6 - q) - q = 2\\)</p><p>\\(6 - 2q = 2 \\Rightarrow -2q = -4 \\Rightarrow q = 2\\)</p><p>\\(p = 6 - (2) = 4\\)</p></div>',
    hint: 'Substitute the expression for \\(p\\) into the second equation to solve for \\(q\\), then substitute that value back into the first equation to find \\(p\\).',
    solutionSteps: [
      {
        explanation: 'Identify the isolated variable.',
        workingOut: '<div style="text-align: left;"><p>The first equation already has \\(p\\) isolated:</p><p>\\(p = 6 - q\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Substitute this expression into the second equation.',
        workingOut: '<div style="text-align: left;"><p>Substitute \\(p = 6 - q\\) into \\(p - q = 2\\):</p><p>\\((6 - q) - q = 2\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Simplify and solve for \\(q\\).',
        workingOut: '<div style="text-align: left;"><p>Combine the \\(q\\) terms:</p><p>\\(6 - 2q = 2\\)</p><p>Subtract 6 from both sides:</p><p>\\(-2q = -4\\)</p><p>Divide by -2:</p><p>\\(q = 2\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Substitute the value of \\(q\\) back to find \\(p\\).',
        workingOut: '<div style="text-align: left;"><p>Substitute \\(q = 2\\) into the first equation:</p><p>\\(p = 6 - (2)\\)</p><p>\\(p = 4\\)</p><p>Therefore, the value of \\(p\\) is 4.</p></div>',
        graphData: null
      }
    ]
  });
  console.log('Fixed e5c2e9b5a792fdf98ead0f5740c2e964');

  // Update e7feeaf3eaa26401d5f4c608a88b04e4 (Substitution, complex, extreme details)
  await db.collection('questions').doc('e7feeaf3eaa26401d5f4c608a88b04e4').update({
    answer: '0',
    options: [
      { text: '\\(x = 3, \\; y = 2\\) and \\(x = -2, \\; y = -3\\)', imageUrl: '' },
      { text: '\\(x = -3, \\; y = 2\\) and \\(x = 2, \\; y = -3\\)', imageUrl: '' },
      { text: '\\(x = -3, \\; y = -2\\) and \\(x = -2, \\; y = -3\\)', imageUrl: '' },
      { text: '\\(x = 3, \\; y = -2\\) and \\(x = 2, \\; y = 3\\)', imageUrl: '' }
    ],
    solution: '<div style="text-align: left;"><p>Using substitution:</p><p>\\(x - y = 1 \\Rightarrow x = y + 1\\)</p><p>Substitute into \\(|x + y| = 5\\):</p><p>\\(|(y + 1) + y| = 5 \\Rightarrow |2y + 1| = 5\\)</p><p>Case 1: \\(2y + 1 = 5 \\Rightarrow 2y = 4 \\Rightarrow y = 2\\). Then \\(x = 2 + 1 = 3\\).</p><p>Case 2: \\(2y + 1 = -5 \\Rightarrow 2y = -6 \\Rightarrow y = -3\\). Then \\(x = -3 + 1 = -2\\).</p></div>',
    hint: 'Isolate \\(x\\) in the linear equation, substitute it into the absolute value equation, and split it into two cases (positive and negative) to find all solutions.',
    solutionSteps: [
      {
        explanation: 'Rearrange the linear equation to isolate one variable.',
        workingOut: '<div style="text-align: left;"><p>We are given the system:</p><p>\\(|x + y| = 5 \\quad \\cdots (1)\\)</p><p>\\(x - y = 1 \\quad \\cdots (2)\\)</p><p>To use the substitution method, we first need to isolate one variable. Let us isolate \\(x\\) in equation (2) by adding \\(y\\) to both sides:</p><p>\\(x = y + 1\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Substitute this expression into the absolute value equation.',
        workingOut: '<div style="text-align: left;"><p>Now, replace every \\(x\\) in equation (1) with \\((y + 1)\\):</p><p>\\(|(y + 1) + y| = 5\\)</p><p>Combine the like terms inside the absolute value bars (\\(y + y = 2y\\)):</p><p>\\(|2y + 1| = 5\\)</p><p>This equation tells us that the distance from 0 to \\(2y + 1\\) is exactly 5. This means \\(2y + 1\\) can be either exactly \\(5\\) or exactly \\(-5\\).</p></div>',
        graphData: null
      },
      {
        explanation: 'Solve Case 1: The positive outcome.',
        workingOut: '<div style="text-align: left;"><p><strong>Case 1:</strong> Assume what is inside the absolute value is positive.</p><p>\\(2y + 1 = 5\\)</p><p>Subtract 1 from both sides:</p><p>\\(2y = 4\\)</p><p>Divide by 2:</p><p>\\(y = 2\\)</p><p>Now substitute \\(y = 2\\) back into our rearranged linear equation (\\(x = y + 1\\)):</p><p>\\(x = (2) + 1 = 3\\)</p><p>So, our first solution pair is \\(x = 3, y = 2\\).</p></div>',
        graphData: null
      },
      {
        explanation: 'Solve Case 2: The negative outcome.',
        workingOut: '<div style="text-align: left;"><p><strong>Case 2:</strong> Assume what is inside the absolute value is negative.</p><p>\\(2y + 1 = -5\\)</p><p>Subtract 1 from both sides:</p><p>\\(2y = -6\\)</p><p>Divide by 2:</p><p>\\(y = -3\\)</p><p>Now substitute \\(y = -3\\) back into our rearranged linear equation (\\(x = y + 1\\)):</p><p>\\(x = (-3) + 1 = -2\\)</p><p>So, our second solution pair is \\(x = -2, y = -3\\).</p><p>Therefore, the complete solutions are \\(x = 3, y = 2\\) and \\(x = -2, y = -3\\).</p></div>',
        graphData: null
      }
    ]
  });
  console.log('Fixed e7feeaf3eaa26401d5f4c608a88b04e4');
}
run().catch(console.error);
