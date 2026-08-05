const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function run() {
  await db.collection('questions').doc('c0c74552e1c874878158606177107d50').update({
    solution: '<div style="text-align: left;"><p>Using elimination:</p><p>\\(6x + 5y = 21 \\quad \\cdots (1)\\)</p><p>\\(2x + 3y = 11 \\quad \\cdots (2)\\)</p><p>Multiply (2) by 3:</p><p>\\(6x + 9y = 33 \\quad \\cdots (3)\\)</p><p>Subtract (1) from (3):</p><p>\\(4y = 12 \\Rightarrow y = 3\\)</p></div>',
    hint: 'Multiply the second equation by 3 to match the \\(x\\) coefficients, then subtract the first equation from it to eliminate \\(x\\) and solve for \\(y\\).',
    solutionSteps: [
      {
        explanation: 'Multiply one equation to align the coefficients of \\(x\\).',
        workingOut: '<div style="text-align: left;"><p>We have:</p><p>\\(6x + 5y = 21 \\quad \\cdots (1)\\)</p><p>\\(2x + 3y = 11 \\quad \\cdots (2)\\)</p><p>Multiply equation (2) by 3 so the \\(x\\) terms can be eliminated:</p><p>\\(3(2x + 3y) = 3(11)\\)</p><p>\\(6x + 9y = 33 \\quad \\cdots (3)\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Subtract the equations to eliminate \\(x\\).',
        workingOut: '<div style="text-align: left;"><p>Subtract equation (1) from equation (3):</p><p>\\((6x + 9y) - (6x + 5y) = 33 - 21\\)</p><p>The \\(x\\) terms cancel out, leaving:</p><p>\\(4y = 12\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Solve for \\(y\\).',
        workingOut: '<div style="text-align: left;"><p>Divide both sides by 4:</p><p>\\(y = 3\\)</p><p>Therefore, the value of \\(y\\) is 3.</p></div>',
        graphData: null
      }
    ]
  });
  console.log('Fixed c0c74552e1c874878158606177107d50');
}
run().catch(console.error);
