const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function run() {
  await db.collection('questions').doc('eca5c97290eacabf249ec4d887ff17f1').update({
    solution: '<div style="text-align: left;"><p>Using elimination:</p><p>\\(4x + 3y = 10 \\quad \\cdots (1)\\)</p><p>\\(3x + y = 5 \\quad \\cdots (2)\\)</p><p>Multiply (1) by 3 and (2) by 4:</p><p>\\(12x + 9y = 30 \\quad \\cdots (3)\\)</p><p>\\(12x + 4y = 20 \\quad \\cdots (4)\\)</p><p>Subtract (4) from (3):</p><p>\\(5y = 10 \\Rightarrow y = 2\\)</p></div>',
    hint: 'Multiply the equations to match the \\(x\\) coefficients (e.g. 12), then subtract to eliminate \\(x\\) and solve directly for \\(y\\).',
    solutionSteps: [
      {
        explanation: 'Multiply both equations to align the coefficients of \\(x\\).',
        workingOut: '<div style="text-align: left;"><p>We have:</p><p>\\(4x + 3y = 10 \\quad \\cdots (1)\\)</p><p>\\(3x + y = 5 \\quad \\cdots (2)\\)</p><p>To solve for \\(y\\), let us eliminate \\(x\\) by finding a common multiple for 4 and 3 (which is 12):</p><p>Multiply equation (1) by 3:</p><p>\\(12x + 9y = 30 \\quad \\cdots (3)\\)</p><p>Multiply equation (2) by 4:</p><p>\\(12x + 4y = 20 \\quad \\cdots (4)\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Subtract the equations to eliminate \\(x\\).',
        workingOut: '<div style="text-align: left;"><p>Subtract equation (4) from equation (3):</p><p>\\((12x + 9y) - (12x + 4y) = 30 - 20\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Simplify and solve for \\(y\\).',
        workingOut: '<div style="text-align: left;"><p>The \\(x\\) terms cancel out, leaving:</p><p>\\(5y = 10\\)</p><p>Divide both sides by 5:</p><p>\\(y = 2\\)</p><p>Therefore, the value of \\(y\\) is 2.</p></div>',
        graphData: null
      }
    ]
  });
  console.log('Fixed eca5c97290eacabf249ec4d887ff17f1');
}
run().catch(console.error);
