const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function run() {
  await db.collection('questions').doc('dadd32e10529898e4cd6ef9a3a506492').update({
    solutionSteps: [
      {
        explanation: 'Subtract equation (2) from equation (1) to eliminate both \\(x\\) and \\(z\\).',
        workingOut: '<div style="text-align: left;"><p>We are given the system:</p><p>\\(x + y + z = 12 \\quad \\cdots (1)\\)</p><p>\\(x - y + z = 6 \\quad \\cdots (2)\\)</p><p>\\(x + y - z = 4 \\quad \\cdots (3)\\)</p><p>Notice that the coefficients of \\(x\\) and \\(z\\) are exactly the same in equations (1) and (2). If we subtract equation (2) from equation (1), both \\(x\\) and \\(z\\) will cancel out:</p><p>\\((x + y + z) - (x - y + z) = 12 - 6\\)</p><p>Distribute the negative sign:</p><p>\\(x + y + z - x + y - z = 6\\)</p><p>The \\(x\\) and \\(-x\\) cancel out, and the \\(z\\) and \\(-z\\) cancel out, leaving just the \\(y\\) terms:</p><p>\\(2y = 6\\)</p><p>Divide both sides by 2:</p><p>\\(y = 3\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Subtract equation (3) from equation (1) to eliminate both \\(x\\) and \\(y\\).',
        workingOut: '<div style="text-align: left;"><p>Now, look at equation (1) and equation (3). The coefficients of both \\(x\\) and \\(y\\) are identical.</p><p>Subtract equation (3) from equation (1):</p><p>\\((x + y + z) - (x + y - z) = 12 - 4\\)</p><p>Distribute the negative sign:</p><p>\\(x + y + z - x - y + z = 8\\)</p><p>This time, the \\(x\\) and \\(y\\) terms cancel out entirely, leaving only the \\(z\\) terms:</p><p>\\(2z = 8\\)</p><p>Divide both sides by 2:</p><p>\\(z = 4\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Substitute the values of \\(y\\) and \\(z\\) back into any original equation to find \\(x\\).',
        workingOut: '<div style="text-align: left;"><p>Now that we have \\(y = 3\\) and \\(z = 4\\), we can substitute these values back into equation (1) to find the remaining variable, \\(x\\):</p><p>\\(x + y + z = 12\\)</p><p>\\(x + (3) + (4) = 12\\)</p><p>Combine the numbers:</p><p>\\(x + 7 = 12\\)</p><p>Subtract 7 from both sides to isolate \\(x\\):</p><p>\\(x = 5\\)</p><p>Therefore, the complete solution is \\(x = 5, \\; y = 3, \\; z = 4\\).</p></div>',
        graphData: null
      }
    ]
  });
  console.log('Fixed dadd32e10529898e4cd6ef9a3a506492 with extreme details');
}
run().catch(console.error);
