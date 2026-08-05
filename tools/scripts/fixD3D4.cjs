const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function run() {
  // Update d3f30ab69aa74f20ac6f50b9b037ce5a (Substitution Method)
  await db.collection('questions').doc('d3f30ab69aa74f20ac6f50b9b037ce5a').update({
    answer: '0', 
    options: [
      { text: '\\(x = 3, y = 5\\) and \\(x = -1, y = -3\\)', imageUrl: '' },
      { text: '\\(x = -3, y = -5\\) and \\(x = 1, y = 3\\)', imageUrl: '' },
      { text: '\\(x = 3, y = -5\\) and \\(x = -1, y = 3\\)', imageUrl: '' },
      { text: '\\(x = -3, y = 5\\) and \\(x = 1, y = -3\\)', imageUrl: '' }
    ],
    solution: '<div style="text-align: left;"><p>Using substitution:</p><p>\\(x^2 - 4 = 2x - 1\\)</p><p>\\(x^2 - 2x - 3 = 0\\)</p><p>\\((x - 3)(x + 1) = 0 \\Rightarrow x = 3, -1\\)</p><p>If \\(x = 3\\), \\(y = 2(3) - 1 = 5\\).</p><p>If \\(x = -1\\), \\(y = 2(-1) - 1 = -3\\).</p></div>',
    hint: 'Since both equations are equal to \\(y\\), set them equal to each other to solve for \\(x\\) first.',
    solutionSteps: [
      {
        explanation: 'Set the equations equal to each other.',
        workingOut: '<div style="text-align: left;"><p>Since both equations are equal to \\(y\\), substitute one into the other:</p><p>\\(x^2 - 4 = 2x - 1\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Simplify into a standard quadratic equation.',
        workingOut: '<div style="text-align: left;"><p>Subtract \\(2x\\) and add \\(1\\) to both sides to collect terms:</p><p>\\(x^2 - 2x - 3 = 0\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Factorise and solve for \\(x\\).',
        workingOut: '<div style="text-align: left;"><p>Find two numbers that multiply to \\(-3\\) and add to \\(-2\\) (which are \\(-3\\) and \\(1\\)):</p><p>\\((x - 3)(x + 1) = 0\\)</p><p>Therefore, \\(x = 3 \\text{ or } x = -1\\).</p></div>',
        graphData: null
      },
      {
        explanation: 'Find the corresponding \\(y\\) values.',
        workingOut: '<div style="text-align: left;"><p>Substitute \\(x = 3\\) into \\(y = 2x - 1\\):</p><p>\\(y = 2(3) - 1 = 5\\)</p><p>Substitute \\(x = -1\\) into \\(y = 2x - 1\\):</p><p>\\(y = 2(-1) - 1 = -3\\)</p><p>Therefore, the solutions are \\(x = 3, y = 5\\) and \\(x = -1, y = -3\\).</p></div>',
        graphData: null
      }
    ]
  });
  console.log('Fixed d3f30ab69aa74f20ac6f50b9b037ce5a');

  // Update d4c125eab1edc1c554df8b7a4674e8ac (Elimination Method)
  await db.collection('questions').doc('d4c125eab1edc1c554df8b7a4674e8ac').update({
    solution: '<div style="text-align: left;"><p>Using elimination:</p><p>Rearrange (1): \\(p + q = 6\\)</p><p>Equation (2): \\(p - q = 2\\)</p><p>Subtract (2) from (1):</p><p>\\((p + q) - (p - q) = 6 - 2\\)</p><p>\\(2q = 4 \\Rightarrow q = 2\\)</p></div>',
    hint: 'Rearrange the first equation to align the variables (i.e. \\(p + q = 6\\)), then subtract the second equation to eliminate \\(p\\) and solve for \\(q\\).',
    solutionSteps: [
      {
        explanation: 'Rearrange the first equation to align the variables.',
        workingOut: '<div style="text-align: left;"><p>Rearrange the first equation \\(p = 6 - q\\) by adding \\(q\\) to both sides:</p><p>\\(p + q = 6 \\quad \\cdots (1)\\)</p><p>The second equation is:</p><p>\\(p - q = 2 \\quad \\cdots (2)\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Subtract the equations to eliminate \\(p\\).',
        workingOut: '<div style="text-align: left;"><p>Since the coefficients of \\(p\\) are both 1, subtract equation (2) from equation (1):</p><p>\\((p + q) - (p - q) = 6 - 2\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Simplify and solve for \\(q\\).',
        workingOut: '<div style="text-align: left;"><p>The \\(p\\) terms cancel out, leaving \\(q - (-q)\\):</p><p>\\(2q = 4\\)</p><p>Divide by 2:</p><p>\\(q = 2\\)</p><p>Therefore, the value of \\(q\\) is 2.</p></div>',
        graphData: null
      }
    ]
  });
  console.log('Fixed d4c125eab1edc1c554df8b7a4674e8ac');
}
run().catch(console.error);
