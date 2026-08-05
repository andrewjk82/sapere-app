const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function run() {
  await db.collection('questions').doc('00428f2373f88b962c3e7a07936b33f3').update({
    answer: '2',
    solution: '<div style="text-align: left;"><p>Using an elimination technique:</p><p>Square (1): \\((x - y)^2 = 4 \\Rightarrow x^2 - 2xy + y^2 = 4 \\quad \\cdots (3)\\)</p><p>Subtract (3) from (2): \\(2xy = 70 \\Rightarrow xy = 35\\)</p><p>Substitute \\(x = \\frac{35}{y}\\) into (1): \\(\\frac{35}{y} - y = 2\\)</p><p>\\(35 - y^2 = 2y \\Rightarrow y^2 + 2y - 35 = 0\\)</p><p>\\((y - 5)(y + 7) = 0 \\Rightarrow y = 5, -7\\)</p></div>',
    hint: 'Square the linear equation to create \\(x^2\\) and \\(y^2\\) terms, then subtract it from the quadratic equation to eliminate those terms and find \\(xy\\).',
    solutionSteps: [
      {
        explanation: 'Square the linear equation to create matching \\(x^2\\) and \\(y^2\\) terms.',
        workingOut: '<div style="text-align: left;"><p>We have:</p><p>\\(x - y = 2 \\quad \\cdots (1)\\)</p><p>\\(x^2 + y^2 = 74 \\quad \\cdots (2)\\)</p><p>To use an elimination method on a linear-quadratic system, we can square the linear equation:</p><p>\\((x - y)^2 = 2^2\\)</p><p>\\(x^2 - 2xy + y^2 = 4 \\quad \\cdots (3)\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Subtract the new equation from the quadratic equation to eliminate \\(x^2\\) and \\(y^2\\).',
        workingOut: '<div style="text-align: left;"><p>Subtract equation (3) from equation (2):</p><p>\\((x^2 + y^2) - (x^2 - 2xy + y^2) = 74 - 4\\)</p><p>The squared terms cancel out, leaving:</p><p>\\(2xy = 70\\)</p><p>Divide by 2:</p><p>\\(xy = 35 \\quad \\cdots (4)\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Combine this result with the original linear equation to solve for \\(y\\).',
        workingOut: '<div style="text-align: left;"><p>We now have a simpler system: \\(x - y = 2\\) and \\(xy = 35\\).</p><p>From \\(xy = 35\\), we can express \\(x = \\frac{35}{y}\\).</p><p>Substitute this back into equation (1):</p><p>\\(\\frac{35}{y} - y = 2\\)</p><p>Multiply the entire equation by \\(y\\) to clear the fraction:</p><p>\\(35 - y^2 = 2y\\)</p><p>Rearrange into a standard quadratic equation:</p><p>\\(y^2 + 2y - 35 = 0\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Factorise and solve for \\(y\\).',
        workingOut: '<div style="text-align: left;"><p>Find two numbers that multiply to \\(-35\\) and add to \\(2\\) (which are \\(7\\) and \\(-5\\)):</p><p>\\((y - 5)(y + 7) = 0\\)</p><p>Therefore, \\(y = 5\\) or \\(y = -7\\).</p></div>',
        graphData: null
      }
    ]
  });
  console.log('Fixed 00428f2373f88b962c3e7a07936b33f3');
}
run().catch(console.error);
