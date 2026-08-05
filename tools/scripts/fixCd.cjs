const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function run() {
  await db.collection('questions').doc('cd57894886b03fd54ab94c6f474f0385').update({
    solution: '<div style="text-align: left;"><p>Using elimination:</p><p>\\(p - 3q = 2 \\quad \\cdots (1)\\)</p><p>\\(2p - 3q = 7 \\quad \\cdots (2)\\)</p><p>Multiply (1) by 2:</p><p>\\(2p - 6q = 4 \\quad \\cdots (3)\\)</p><p>Subtract (2) from (3):</p><p>\\(-3q = -3 \\Rightarrow q = 1\\)</p></div>',
    hint: 'Multiply the first equation by 2 to match the coefficients of \\(p\\), then subtract the second equation from it to eliminate \\(p\\) and solve directly for \\(q\\).',
    solutionSteps: [
      {
        explanation: 'Multiply one equation to align the coefficients of \\(p\\).',
        workingOut: '<div style="text-align: left;"><p>We have:</p><p>\\(p - 3q = 2 \\quad \\cdots (1)\\)</p><p>\\(2p - 3q = 7 \\quad \\cdots (2)\\)</p><p>Multiply equation (1) by 2 so the \\(p\\) terms match and can be eliminated:</p><p>\\(2(p - 3q) = 2(2)\\)</p><p>\\(2p - 6q = 4 \\quad \\cdots (3)\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Subtract the equations to eliminate \\(p\\).',
        workingOut: '<div style="text-align: left;"><p>Subtract equation (2) from equation (3):</p><p>\\((2p - 6q) - (2p - 3q) = 4 - 7\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Simplify the resulting equation.',
        workingOut: '<div style="text-align: left;"><p>The \\(p\\) terms cancel out, leaving \\(-6q - (-3q)\\):</p><p>\\(-3q = -3\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Solve for \\(q\\).',
        workingOut: '<div style="text-align: left;"><p>Divide both sides by -3:</p><p>\\(q = 1\\)</p><p>Therefore, the value of \\(q\\) is 1.</p></div>',
        graphData: null
      }
    ]
  });
  console.log('Fixed cd57894886b03fd54ab94c6f474f0385');
}
run().catch(console.error);
