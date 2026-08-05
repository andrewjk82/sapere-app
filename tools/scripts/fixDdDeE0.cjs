const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function run() {
  // Update dd9adf592212da6b4c48c82f50517950 (Substitution for y)
  await db.collection('questions').doc('dd9adf592212da6b4c48c82f50517950').update({
    solution: '<div style="text-align: left;"><p>Using substitution:</p><p>\\(x = 38 - 8y\\)</p><p>\\(3(38 - 8y) - 4y = 2\\)</p><p>\\(114 - 24y - 4y = 2\\)</p><p>\\(114 - 28y = 2 \\Rightarrow 28y = 112 \\Rightarrow y = 4\\)</p></div>',
    hint: 'Isolate \\(x\\) in the second equation (\\(x = 38 - 8y\\)) and substitute it into the first equation to solve directly for \\(y\\).',
    solutionSteps: [
      {
        explanation: 'Rearrange the linear equation to make \\(x\\) the subject.',
        workingOut: '<div style="text-align: left;"><p>From the second equation \\(x + 8y = 38\\), isolate \\(x\\):</p><p>\\(x = 38 - 8y\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Substitute this expression into the other equation.',
        workingOut: '<div style="text-align: left;"><p>Substitute \\(x = 38 - 8y\\) into the first equation \\(3x - 4y = 2\\):</p><p>\\(3(38 - 8y) - 4y = 2\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Expand and simplify.',
        workingOut: '<div style="text-align: left;"><p>Expand the brackets:</p><p>\\(114 - 24y - 4y = 2\\)</p><p>Combine the \\(y\\) terms:</p><p>\\(114 - 28y = 2\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Solve for \\(y\\).',
        workingOut: '<div style="text-align: left;"><p>Subtract 114 from both sides:</p><p>\\(-28y = -112\\)</p><p>Divide by -28:</p><p>\\(y = 4\\)</p><p>Therefore, the value of \\(y\\) is 4.</p></div>',
        graphData: null
      }
    ]
  });
  console.log('Fixed dd9adf592212da6b4c48c82f50517950');

  // Update decc1505518c9f1b404d29c1b23bfd6f (Substitution, fixing options and answer)
  await db.collection('questions').doc('decc1505518c9f1b404d29c1b23bfd6f').update({
    answer: '0',
    options: [
      { text: '\\(x = 3, \\; y = 1\\) and \\(x = -1, \\; y = 3\\)', imageUrl: '' },
      { text: '\\(x = -3, \\; y = -1\\) and \\(x = 1, \\; y = -3\\)', imageUrl: '' },
      { text: '\\(x = 3, \\; y = -1\\) and \\(x = -1, \\; y = -3\\)', imageUrl: '' },
      { text: '\\(x = -3, \\; y = 1\\) and \\(x = 1, \\; y = 3\\)', imageUrl: '' }
    ],
    solution: '<div style="text-align: left;"><p>Using substitution:</p><p>\\(x = 5 - 2y\\)</p><p>\\((5 - 2y)^2 + y^2 = 10\\)</p><p>\\(25 - 20y + 4y^2 + y^2 = 10\\)</p><p>\\(5y^2 - 20y + 15 = 0 \\Rightarrow y^2 - 4y + 3 = 0\\)</p><p>\\((y - 1)(y - 3) = 0 \\Rightarrow y = 1, 3\\)</p><p>If \\(y = 1\\), \\(x = 5 - 2(1) = 3\\).</p><p>If \\(y = 3\\), \\(x = 5 - 2(3) = -1\\).</p></div>',
    hint: 'Isolate \\(x\\) in the linear equation and substitute it into the circle equation.',
    solutionSteps: [
      {
        explanation: 'Rearrange the linear equation to make \\(x\\) the subject.',
        workingOut: '<div style="text-align: left;"><p>From the linear equation \\(x + 2y = 5\\), isolate \\(x\\):</p><p>\\(x = 5 - 2y\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Substitute this expression into the quadratic equation.',
        workingOut: '<div style="text-align: left;"><p>Substitute \\(x = 5 - 2y\\) into \\(x^2 + y^2 = 10\\):</p><p>\\((5 - 2y)^2 + y^2 = 10\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Expand and simplify into a standard quadratic form.',
        workingOut: '<div style="text-align: left;"><p>Expand the brackets:</p><p>\\(25 - 20y + 4y^2 + y^2 = 10\\)</p><p>Combine like terms:</p><p>\\(5y^2 - 20y + 25 = 10\\)</p><p>Subtract 10 from both sides:</p><p>\\(5y^2 - 20y + 15 = 0\\)</p><p>Divide the entire equation by 5:</p><p>\\(y^2 - 4y + 3 = 0\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Factorise and find the corresponding solutions.',
        workingOut: '<div style="text-align: left;"><p>Factorise the quadratic equation:</p><p>\\((y - 1)(y - 3) = 0 \\Rightarrow y = 1 \\text{ or } y = 3\\)</p><p>Substitute \\(y = 1\\) into \\(x = 5 - 2y\\):</p><p>\\(x = 5 - 2(1) = 3\\)</p><p>Substitute \\(y = 3\\) into \\(x = 5 - 2y\\):</p><p>\\(x = 5 - 2(3) = -1\\)</p><p>The solutions are \\(x = 3, y = 1\\) and \\(x = -1, y = 3\\).</p></div>',
        graphData: null
      }
    ]
  });
  console.log('Fixed decc1505518c9f1b404d29c1b23bfd6f');

  // Update e020c594be58d5b33628a71966f652f6 (Substitution for x)
  await db.collection('questions').doc('e020c594be58d5b33628a71966f652f6').update({
    solution: '<div style="text-align: left;"><p>Using substitution:</p><p>\\(y = 3x\\)</p><p>\\(2x + 3(3x) = 22\\)</p><p>\\(2x + 9x = 22\\)</p><p>\\(11x = 22 \\Rightarrow x = 2\\)</p></div>',
    hint: 'Substitute \\(y = 3x\\) directly into the second equation to solve for \\(x\\).',
    solutionSteps: [
      {
        explanation: 'Identify the isolated variable.',
        workingOut: '<div style="text-align: left;"><p>The first equation already has \\(y\\) isolated:</p><p>\\(y = 3x\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Substitute this expression into the second equation.',
        workingOut: '<div style="text-align: left;"><p>Substitute \\(y = 3x\\) into \\(2x + 3y = 22\\):</p><p>\\(2x + 3(3x) = 22\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Expand and simplify.',
        workingOut: '<div style="text-align: left;"><p>Expand the bracket:</p><p>\\(2x + 9x = 22\\)</p><p>Combine the \\(x\\) terms:</p><p>\\(11x = 22\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Solve for \\(x\\).',
        workingOut: '<div style="text-align: left;"><p>Divide both sides by 11:</p><p>\\(x = 2\\)</p><p>Therefore, the value of \\(x\\) is 2.</p></div>',
        graphData: null
      }
    ]
  });
  console.log('Fixed e020c594be58d5b33628a71966f652f6');
}
run().catch(console.error);
