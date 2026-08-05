const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function run() {
  await db.collection('questions').doc('f8f52396a4a76fd4122f20824b73e306').update({
    title: 'Solve by elimination for \\( y \\):...',
    question: 'Solve by elimination for \\( y \\):\n\\( y = 5 - x \\)\n\\( x + 4y = 11 \\)',
    solution: '<div style="text-align: left;"><p>Using elimination:</p><p>Rearrange the first equation: \\(x + y = 5 \\quad \\cdots (1)\\)</p><p>\\(x + 4y = 11 \\quad \\cdots (2)\\)</p><p>Subtract (1) from (2):</p><p>\\((x + 4y) - (x + y) = 11 - 5\\)</p><p>\\(3y = 6 \\Rightarrow y = 2\\)</p></div>',
    hint: 'Rearrange the first equation into standard form (\\(x + y = 5\\)) so the \\(x\\) coefficients match, then subtract the equations to solve directly for \\(y\\).',
    solutionSteps: [
      {
        explanation: 'Rearrange the first equation into standard form.',
        workingOut: '<div style="text-align: left;"><p>To use the elimination method, let us rearrange the first equation so the variables align with the second equation.</p><p>From \\(y = 5 - x\\), add \\(x\\) to both sides:</p><p>\\(x + y = 5 \\quad \\cdots (3)\\)</p><p>We now have our aligned system:</p><p>\\(x + y = 5 \\quad \\cdots (3)\\)</p><p>\\(x + 4y = 11 \\quad \\cdots (2)\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Subtract the equations to eliminate \\(x\\).',
        workingOut: '<div style="text-align: left;"><p>Since the coefficients of \\(x\\) are identical in both equations, we can subtract equation (3) from equation (2) to eliminate \\(x\\):</p><p>\\((x + 4y) - (x + y) = 11 - 5\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Simplify and solve for \\(y\\).',
        workingOut: '<div style="text-align: left;"><p>The \\(x\\) terms cancel out, leaving:</p><p>\\(3y = 6\\)</p><p>Divide both sides by 3:</p><p>\\(y = 2\\)</p><p>Therefore, the value of \\(y\\) is 2.</p></div>',
        graphData: null
      }
    ]
  });
  console.log('Fixed f8f52396a4a76fd4122f20824b73e306');
}
run().catch(console.error);
