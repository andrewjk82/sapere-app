const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function run() {
  await db.collection('questions').doc('b2fcdb6d4409df193a49f8e4821bc760').update({
    solution: '<div style="text-align: left;"><p>Using elimination:</p><p>\\(5c - d = 11 \\quad \\cdots (1)\\)</p><p>\\(3c - d = 7 \\quad \\cdots (2)\\)</p><p>Subtract (2) from (1):</p><p>\\(2c = 4 \\Rightarrow c = 2\\)</p><p>Substitute \\(c = 2\\) into (2):</p><p>\\(3(2) - d = 7 \\Rightarrow 6 - d = 7 \\Rightarrow d = -1\\)</p></div>',
    hint: 'Subtract the second equation from the first to eliminate \\(d\\) and solve for \\(c\\), then substitute the value of \\(c\\) back into either equation to find \\(d\\).',
    solutionSteps: [
      {
        explanation: 'Subtract the equations to eliminate \\(d\\).',
        workingOut: '<div style="text-align: left;"><p>We have:</p><p>\\(5c - d = 11 \\quad \\cdots (1)\\)</p><p>\\(3c - d = 7 \\quad \\cdots (2)\\)</p><p>Since the coefficients of \\(d\\) are identical, subtract equation (2) from equation (1):</p><p>\\((5c - d) - (3c - d) = 11 - 7\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Solve for \\(c\\).',
        workingOut: '<div style="text-align: left;"><p>Simplify the equation:</p><p>\\(2c = 4\\)</p><p>Divide by 2:</p><p>\\(c = 2\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Substitute the value of \\(c\\) into one of the original equations.',
        workingOut: '<div style="text-align: left;"><p>Substitute \\(c = 2\\) into equation (2):</p><p>\\(3(2) - d = 7\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Solve for \\(d\\).',
        workingOut: '<div style="text-align: left;"><p>\\(6 - d = 7\\)</p><p>Subtract 6 from both sides:</p><p>\\(-d = 1\\)</p><p>Multiply by -1:</p><p>\\(d = -1\\)</p></div>',
        graphData: null
      }
    ]
  });
  console.log('Fixed b2fcdb6d4409df193a49f8e4821bc760');
}
run().catch(console.error);
