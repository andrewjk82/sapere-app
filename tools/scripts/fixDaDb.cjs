const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function run() {
  // Update dadd32e10529898e4cd6ef9a3a506492 (Elimination)
  await db.collection('questions').doc('dadd32e10529898e4cd6ef9a3a506492').update({
    answer: '3', 
    options: [
      { text: '\\(x = 5, \\; y = -3, \\; z = -4\\)', imageUrl: '' },
      { text: '\\(x = -5, \\; y = 3, \\; z = 4\\)', imageUrl: '' },
      { text: '\\(x = 5, \\; y = 3, \\; z = -4\\)', imageUrl: '' },
      { text: '\\(x = 5, \\; y = 3, \\; z = 4\\)', imageUrl: '' }
    ],
    solution: '<div style="text-align: left;"><p>Using elimination:</p><p>(1) - (2): \\(2y = 6 \\Rightarrow y = 3\\)</p><p>(1) - (3): \\(2z = 8 \\Rightarrow z = 4\\)</p><p>Substitute into (1): \\(x + 3 + 4 = 12 \\Rightarrow x = 5\\)</p></div>',
    hint: 'Subtract pairs of equations (e.g. subtract equation 2 from equation 1) to eliminate two variables at once.',
    solutionSteps: [
      {
        explanation: 'Subtract equation (2) from equation (1) to eliminate \\(x\\) and \\(z\\).',
        workingOut: '<div style="text-align: left;"><p>\\((x + y + z) - (x - y + z) = 12 - 6\\)</p><p>\\(2y = 6 \\Rightarrow y = 3\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Subtract equation (3) from equation (1) to eliminate \\(x\\) and \\(y\\).',
        workingOut: '<div style="text-align: left;"><p>\\((x + y + z) - (x + y - z) = 12 - 4\\)</p><p>\\(2z = 8 \\Rightarrow z = 4\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Substitute \\(y\\) and \\(z\\) back into equation (1) to find \\(x\\).',
        workingOut: '<div style="text-align: left;"><p>Substitute \\(y = 3\\) and \\(z = 4\\) into \\(x + y + z = 12\\):</p><p>\\(x + 3 + 4 = 12\\)</p><p>\\(x + 7 = 12 \\Rightarrow x = 5\\)</p><p>The solution is \\(x = 5, y = 3, z = 4\\).</p></div>',
        graphData: null
      }
    ]
  });
  console.log('Fixed dadd32e10529898e4cd6ef9a3a506492');

  // Update db65bd3d89222045c977f4f83af66113 (Substitution)
  await db.collection('questions').doc('db65bd3d89222045c977f4f83af66113').update({
    answer: '0',
    options: [
      { text: '\\(x = 2, \\; y = 3\\) and \\(x = \\frac{3}{2}, \\; y = 4\\)', imageUrl: '' },
      { text: '\\(x = -2, \\; y = 3\\) and \\(x = -\\frac{3}{2}, \\; y = 4\\)', imageUrl: '' },
      { text: '\\(x = 2, \\; y = -3\\) and \\(x = \\frac{3}{2}, \\; y = -4\\)', imageUrl: '' },
      { text: '\\(x = -2, \\; y = -3\\) and \\(x = -\\frac{3}{2}, \\; y = -4\\)', imageUrl: '' }
    ],
    solution: '<div style="text-align: left;"><p>Using substitution:</p><p>\\(y = 7 - 2x\\)</p><p>\\(x(7 - 2x) = 6 \\Rightarrow 2x^2 - 7x + 6 = 0\\)</p><p>\\((2x - 3)(x - 2) = 0 \\Rightarrow x = \\frac{3}{2}, 2\\)</p><p>If \\(x = \\frac{3}{2}\\), \\(y = 4\\).</p><p>If \\(x = 2\\), \\(y = 3\\).</p></div>',
    hint: 'Express \\(y\\) from the linear equation (\\(y = 7 - 2x\\)) and substitute it into the product equation \\(xy = 6\\).',
    solutionSteps: [
      {
        explanation: 'Isolate \\(y\\) in the linear equation.',
        workingOut: '<div style="text-align: left;"><p>From \\(2x + y = 7\\):</p><p>\\(y = 7 - 2x\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Substitute \\(y\\) into the non-linear equation.',
        workingOut: '<div style="text-align: left;"><p>Substitute \\(y = 7 - 2x\\) into \\(xy = 6\\):</p><p>\\(x(7 - 2x) = 6\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Expand and rearrange into a standard quadratic equation.',
        workingOut: '<div style="text-align: left;"><p>Expand the brackets:</p><p>\\(7x - 2x^2 = 6\\)</p><p>Rearrange into \\(ax^2 + bx + c = 0\\) form by moving everything to the right side:</p><p>\\(2x^2 - 7x + 6 = 0\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Factorise and solve for \\(x\\), then find \\(y\\).',
        workingOut: '<div style="text-align: left;"><p>Factorise the quadratic:</p><p>\\((2x - 3)(x - 2) = 0 \\Rightarrow x = \\frac{3}{2} \\text{ or } x = 2\\)</p><p>If \\(x = \\frac{3}{2}\\), substitute back to find \\(y\\): \\(y = 7 - 2(\\frac{3}{2}) = 4\\)</p><p>If \\(x = 2\\), substitute back to find \\(y\\): \\(y = 7 - 2(2) = 3\\)</p><p>The solutions are \\(x = 2, y = 3\\) and \\(x = \\frac{3}{2}, y = 4\\).</p></div>',
        graphData: null
      }
    ]
  });
  console.log('Fixed db65bd3d89222045c977f4f83af66113');
}
run().catch(console.error);
