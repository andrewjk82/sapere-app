const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function run() {
  // Update e17faa00040453f4d520224d62c903bb (Elimination)
  await db.collection('questions').doc('e17faa00040453f4d520224d62c903bb').update({
    solution: '<div style="text-align: left;"><p>Using elimination:</p><p>\\(5x - 3y = 29 \\quad \\cdots (1)\\)</p><p>\\(2x - y = 11 \\quad \\cdots (2)\\)</p><p>Multiply (1) by 2 and (2) by 5:</p><p>\\(10x - 6y = 58 \\quad \\cdots (3)\\)</p><p>\\(10x - 5y = 55 \\quad \\cdots (4)\\)</p><p>Subtract (4) from (3):</p><p>\\(-y = 3 \\Rightarrow y = -3\\)</p></div>',
    hint: 'Multiply the first equation by 2 and the second equation by 5 to match the \\(x\\) coefficients, then subtract to eliminate \\(x\\) and solve directly for \\(y\\).',
    solutionSteps: [
      {
        explanation: 'Multiply both equations to align the coefficients of \\(x\\).',
        workingOut: '<div style="text-align: left;"><p>We have:</p><p>\\(5x - 3y = 29 \\quad \\cdots (1)\\)</p><p>\\(2x - y = 11 \\quad \\cdots (2)\\)</p><p>To eliminate \\(x\\), find a common multiple for 5 and 2 (which is 10):</p><p>Multiply equation (1) by 2:</p><p>\\(10x - 6y = 58 \\quad \\cdots (3)\\)</p><p>Multiply equation (2) by 5:</p><p>\\(10x - 5y = 55 \\quad \\cdots (4)\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Subtract the equations to eliminate \\(x\\).',
        workingOut: '<div style="text-align: left;"><p>Subtract equation (4) from equation (3):</p><p>\\((10x - 6y) - (10x - 5y) = 58 - 55\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Simplify and solve for \\(y\\).',
        workingOut: '<div style="text-align: left;"><p>The \\(x\\) terms cancel out, leaving \\(-6y - (-5y)\\):</p><p>\\(-y = 3\\)</p><p>Divide by -1:</p><p>\\(y = -3\\)</p><p>Therefore, the value of \\(y\\) is -3.</p></div>',
        graphData: null
      }
    ]
  });
  console.log('Fixed e17faa00040453f4d520224d62c903bb');

  // Update e45bcdf3830f6d41338f1dc3455c462c (Substitution)
  await db.collection('questions').doc('e45bcdf3830f6d41338f1dc3455c462c').update({
    answer: '2',
    options: [
      { text: '\\(x = 4, \\; y = -8\\) and \\(x = 8, \\; y = -4\\)', imageUrl: '' },
      { text: '\\(x = -4, \\; y = -8\\) and \\(x = -8, \\; y = -4\\)', imageUrl: '' },
      { text: '\\(x = 4, \\; y = 8\\) and \\(x = 8, \\; y = 4\\)', imageUrl: '' },
      { text: '\\(x = -4, \\; y = 8\\) and \\(x = -8, \\; y = 4\\)', imageUrl: '' }
    ],
    solution: '<div style="text-align: left;"><p>Using substitution:</p><p>\\(y = 12 - x\\)</p><p>\\(x^2 + (12 - x)^2 = 80\\)</p><p>\\(x^2 + 144 - 24x + x^2 = 80\\)</p><p>\\(2x^2 - 24x + 64 = 0 \\Rightarrow x^2 - 12x + 32 = 0\\)</p><p>\\((x - 4)(x - 8) = 0 \\Rightarrow x = 4, 8\\)</p><p>If \\(x = 4\\), \\(y = 12 - 4 = 8\\).</p><p>If \\(x = 8\\), \\(y = 12 - 8 = 4\\).</p></div>',
    hint: 'Isolate \\(y\\) in the linear equation and substitute it into the sum of squares equation.',
    solutionSteps: [
      {
        explanation: 'Rearrange the linear equation to make \\(y\\) the subject.',
        workingOut: '<div style="text-align: left;"><p>From the linear equation \\(x + y = 12\\), isolate \\(y\\):</p><p>\\(y = 12 - x\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Substitute this expression into the quadratic equation.',
        workingOut: '<div style="text-align: left;"><p>Substitute \\(y = 12 - x\\) into \\(x^2 + y^2 = 80\\):</p><p>\\(x^2 + (12 - x)^2 = 80\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Expand and simplify into a standard quadratic form.',
        workingOut: '<div style="text-align: left;"><p>Expand the brackets:</p><p>\\(x^2 + 144 - 24x + x^2 = 80\\)</p><p>Combine like terms:</p><p>\\(2x^2 - 24x + 144 = 80\\)</p><p>Subtract 80 from both sides:</p><p>\\(2x^2 - 24x + 64 = 0\\)</p><p>Divide the entire equation by 2:</p><p>\\(x^2 - 12x + 32 = 0\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Factorise and find the corresponding solutions.',
        workingOut: '<div style="text-align: left;"><p>Factorise the quadratic equation:</p><p>\\((x - 4)(x - 8) = 0 \\Rightarrow x = 4 \\text{ or } x = 8\\)</p><p>Substitute \\(x = 4\\) into \\(y = 12 - x\\):</p><p>\\(y = 12 - 4 = 8\\)</p><p>Substitute \\(x = 8\\) into \\(y = 12 - x\\):</p><p>\\(y = 12 - 8 = 4\\)</p><p>The solutions are \\(x = 4, y = 8\\) and \\(x = 8, y = 4\\).</p></div>',
        graphData: null
      }
    ]
  });
  console.log('Fixed e45bcdf3830f6d41338f1dc3455c462c');
}
run().catch(console.error);
