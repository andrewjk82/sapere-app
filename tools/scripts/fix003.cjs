const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function run() {
  await db.collection('questions').doc('0038d23960d139db7d6eb9044f37f527').update({
    answer: '0',
    solution: '<div style="text-align: left;"><p>Using elimination:</p><p>\\(3x - 5y = 21 \\quad \\cdots (1)\\)</p><p>\\(2x + 3y = -5 \\quad \\cdots (2)\\)</p><p>Multiply (1) by 3 and (2) by 5:</p><p>\\(9x - 15y = 63 \\quad \\cdots (3)\\)</p><p>\\(10x + 15y = -25 \\quad \\cdots (4)\\)</p><p>Add (3) and (4):</p><p>\\(19x = 38 \\Rightarrow x = 2\\)</p><p>Substitute \\(x = 2\\) into (2):</p><p>\\(2(2) + 3y = -5 \\Rightarrow 4 + 3y = -5 \\Rightarrow 3y = -9 \\Rightarrow y = -3\\)</p></div>',
    hint: 'Multiply the first equation by 3 and the second by 5 to match the \\(y\\) coefficients (making them -15 and +15), then add the equations to eliminate \\(y\\).',
    solutionSteps: [
      {
        explanation: 'Multiply both equations to align the coefficients of \\(y\\).',
        workingOut: '<div style="text-align: left;"><p>We have:</p><p>\\(3x - 5y = 21 \\quad \\cdots (1)\\)</p><p>\\(2x + 3y = -5 \\quad \\cdots (2)\\)</p><p>To eliminate \\(y\\), find a common multiple for 5 and 3 (which is 15):</p><p>Multiply equation (1) by 3:</p><p>\\(3(3x - 5y) = 3(21) \\Rightarrow 9x - 15y = 63 \\quad \\cdots (3)\\)</p><p>Multiply equation (2) by 5:</p><p>\\(5(2x + 3y) = 5(-5) \\Rightarrow 10x + 15y = -25 \\quad \\cdots (4)\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Add the equations to eliminate \\(y\\).',
        workingOut: '<div style="text-align: left;"><p>Since the \\(y\\) coefficients are -15 and +15, we can add equation (3) and equation (4) to eliminate \\(y\\):</p><p>\\((9x - 15y) + (10x + 15y) = 63 + (-25)\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Simplify and solve for \\(x\\).',
        workingOut: '<div style="text-align: left;"><p>The \\(y\\) terms cancel out, leaving:</p><p>\\(19x = 38\\)</p><p>Divide both sides by 19:</p><p>\\(x = 2\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Substitute \\(x\\) back to find \\(y\\).',
        workingOut: '<div style="text-align: left;"><p>Substitute \\(x = 2\\) into the second equation:</p><p>\\(2(2) + 3y = -5\\)</p><p>\\(4 + 3y = -5\\)</p><p>Subtract 4 from both sides:</p><p>\\(3y = -9\\)</p><p>Divide by 3:</p><p>\\(y = -3\\)</p><p>Therefore, the complete solutions are \\(x = 2, y = -3\\).</p></div>',
        graphData: null
      }
    ]
  });
  console.log('Fixed 0038d23960d139db7d6eb9044f37f527');
}
run().catch(console.error);
