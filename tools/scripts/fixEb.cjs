const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function run() {
  await db.collection('questions').doc('ebb0756ccadd5d77dc1256d836dd2b82').update({
    answer: '0', 
    options: [
      { text: '\\( y = \\frac{10}{3}, \\; 2 \\)', imageUrl: '' },
      { text: '\\( y = -\\frac{10}{3}, \\; 2 \\)', imageUrl: '' },
      { text: '\\( y = \\frac{10}{3}, \\; -2 \\)', imageUrl: '' },
      { text: '\\( y = -\\frac{10}{3}, \\; -2 \\)', imageUrl: '' }
    ],
    solution: '<div style="text-align: left;"><p>Using substitution:</p><p>\\(x = \\frac{10}{y}\\)</p><p>\\(2\\left(\\frac{10}{y}\\right) + 3y = 16\\)</p><p>\\(\\frac{20}{y} + 3y = 16 \\Rightarrow 20 + 3y^2 = 16y\\)</p><p>\\(3y^2 - 16y + 20 = 0\\)</p><p>\\((3y - 10)(y - 2) = 0 \\Rightarrow y = \\frac{10}{3}, 2\\)</p></div>',
    hint: 'Isolate \\(x\\) from the product equation (\\(x = \\frac{10}{y}\\)) and substitute it into the linear equation to solve for \\(y\\).',
    solutionSteps: [
      {
        explanation: 'Rearrange the product equation to isolate \\(x\\).',
        workingOut: '<div style="text-align: left;"><p>From the equation \\(xy = 10\\), isolate \\(x\\):</p><p>\\(x = \\frac{10}{y}\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Substitute this expression into the linear equation.',
        workingOut: '<div style="text-align: left;"><p>Substitute \\(x = \\frac{10}{y}\\) into \\(2x + 3y = 16\\):</p><p>\\(2\\left(\\frac{10}{y}\\right) + 3y = 16\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Clear the fraction and rearrange into a quadratic equation.',
        workingOut: '<div style="text-align: left;"><p>Multiply out the bracket:</p><p>\\(\\frac{20}{y} + 3y = 16\\)</p><p>Multiply every term by \\(y\\) to clear the fraction:</p><p>\\(20 + 3y^2 = 16y\\)</p><p>Subtract \\(16y\\) from both sides to form a standard quadratic equation:</p><p>\\(3y^2 - 16y + 20 = 0\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Factorise and solve for \\(y\\).',
        workingOut: '<div style="text-align: left;"><p>Find two numbers that multiply to \\(3 \\times 20 = 60\\) and add to \\(-16\\) (which are \\(-10\\) and \\(-6\\)):</p><p>\\(3y^2 - 6y - 10y + 20 = 0\\)</p><p>\\(3y(y - 2) - 10(y - 2) = 0\\)</p><p>\\((3y - 10)(y - 2) = 0\\)</p><p>Therefore, \\(y = \\frac{10}{3}\\) or \\(y = 2\\).</p></div>',
        graphData: null
      }
    ]
  });
  console.log('Fixed ebb0756ccadd5d77dc1256d836dd2b82');
}
run().catch(console.error);
