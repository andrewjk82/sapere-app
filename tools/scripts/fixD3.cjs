const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function run() {
  await db.collection('questions').doc('d319917ef87aa119ff709e5d06d1d34f').update({
    solution: '<div style="text-align: left;"><p>Using elimination:</p><p>\\(6x + 5y = 21 \\quad \\cdots (1)\\)</p><p>\\(2x + 3y = 11 \\quad \\cdots (2)\\)</p><p>Multiply (1) by 3 and (2) by 5:</p><p>\\(18x + 15y = 63 \\quad \\cdots (3)\\)</p><p>\\(10x + 15y = 55 \\quad \\cdots (4)\\)</p><p>Subtract (4) from (3):</p><p>\\(8x = 8 \\Rightarrow x = 1\\)</p></div>',
    hint: 'Multiply the first equation by 3 and the second equation by 5 to match the \\(y\\) coefficients, then subtract to eliminate \\(y\\) and solve directly for \\(x\\).',
    solutionSteps: [
      {
        explanation: 'Multiply both equations to align the coefficients of \\(y\\).',
        workingOut: '<div style="text-align: left;"><p>We have:</p><p>\\(6x + 5y = 21 \\quad \\cdots (1)\\)</p><p>\\(2x + 3y = 11 \\quad \\cdots (2)\\)</p><p>To eliminate \\(y\\), find a common multiple for 5 and 3 (which is 15):</p><p>Multiply equation (1) by 3:</p><p>\\(18x + 15y = 63 \\quad \\cdots (3)\\)</p><p>Multiply equation (2) by 5:</p><p>\\(10x + 15y = 55 \\quad \\cdots (4)\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Subtract the equations to eliminate \\(y\\).',
        workingOut: '<div style="text-align: left;"><p>Subtract equation (4) from equation (3):</p><p>\\((18x + 15y) - (10x + 15y) = 63 - 55\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Simplify and solve for \\(x\\).',
        workingOut: '<div style="text-align: left;"><p>The \\(y\\) terms cancel out, leaving:</p><p>\\(8x = 8\\)</p><p>Divide both sides by 8:</p><p>\\(x = 1\\)</p><p>Therefore, the value of \\(x\\) is 1.</p></div>',
        graphData: null
      }
    ]
  });
  console.log('Fixed d319917ef87aa119ff709e5d06d1d34f');
}
run().catch(console.error);
