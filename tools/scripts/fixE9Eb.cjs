const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function run() {
  // Update e92eecb53c2404d35ffda7e143405d11 (Substitution)
  await db.collection('questions').doc('e92eecb53c2404d35ffda7e143405d11').update({
    answer: '0', 
    options: [
      { text: '\\(x = 3, \\; y = -1\\) and \\(x = 4, \\; y = 0\\)', imageUrl: '' },
      { text: '\\(x = 3, \\; y = 1\\) and \\(x = 4, \\; y = 0\\)', imageUrl: '' },
      { text: '\\(x = -3, \\; y = -1\\) and \\(x = -4, \\; y = 0\\)', imageUrl: '' },
      { text: '\\(x = -3, \\; y = 1\\) and \\(x = -4, \\; y = 0\\)', imageUrl: '' }
    ],
    solution: '<div style="text-align: left;"><p>Using substitution:</p><p>\\(x^2 - 6x + 8 = x - 4\\)</p><p>\\(x^2 - 7x + 12 = 0\\)</p><p>\\((x - 3)(x - 4) = 0 \\Rightarrow x = 3, 4\\)</p><p>If \\(x = 3\\), \\(y = 3 - 4 = -1\\).</p><p>If \\(x = 4\\), \\(y = 4 - 4 = 0\\).</p></div>',
    hint: 'Since both equations are equal to \\(y\\), set them equal to each other to solve for \\(x\\) first.',
    solutionSteps: [
      {
        explanation: 'Set the expressions equal.',
        workingOut: '<div style="text-align: left;"><p>Since both expressions equal \\(y\\), we can substitute one into the other:</p><p>\\(x^2 - 6x + 8 = x - 4\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Rearrange into a standard quadratic equation.',
        workingOut: '<div style="text-align: left;"><p>Subtract \\(x\\) and add \\(4\\) to both sides:</p><p>\\(x^2 - 7x + 12 = 0\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Factorise and solve for \\(x\\).',
        workingOut: '<div style="text-align: left;"><p>Find two numbers that multiply to \\(12\\) and add to \\(-7\\) (which are \\(-3\\) and \\(-4\\)):</p><p>\\((x - 3)(x - 4) = 0\\)</p><p>Therefore, \\(x = 3 \\text{ or } x = 4\\).</p></div>',
        graphData: null
      },
      {
        explanation: 'Find the corresponding \\(y\\) values.',
        workingOut: '<div style="text-align: left;"><p>Substitute \\(x = 3\\) into \\(y = x - 4\\):</p><p>\\(y = 3 - 4 = -1\\)</p><p>Substitute \\(x = 4\\) into \\(y = x - 4\\):</p><p>\\(y = 4 - 4 = 0\\)</p><p>The solutions are \\(x = 3, y = -1\\) and \\(x = 4, y = 0\\).</p></div>',
        graphData: null
      }
    ]
  });
  console.log('Fixed e92eecb53c2404d35ffda7e143405d11');

  // Update eb670dc5a59c9a83a32db4cea3181e75 (Elimination)
  await db.collection('questions').doc('eb670dc5a59c9a83a32db4cea3181e75').update({
    solution: '<div style="text-align: left;"><p>Using elimination:</p><p>\\(a + 4b = 13 \\quad \\cdots (1)\\)</p><p>\\(a + 3b = 10 \\quad \\cdots (2)\\)</p><p>Subtract (2) from (1):</p><p>\\((a + 4b) - (a + 3b) = 13 - 10\\)</p><p>\\(b = 3\\)</p></div>',
    hint: 'Subtract the second equation from the first to eliminate \\(a\\) and solve directly for \\(b\\).',
    solutionSteps: [
      {
        explanation: 'Subtract the equations to eliminate \\(a\\).',
        workingOut: '<div style="text-align: left;"><p>We have:</p><p>\\(a + 4b = 13 \\quad \\cdots (1)\\)</p><p>\\(a + 3b = 10 \\quad \\cdots (2)\\)</p><p>Since the coefficients of \\(a\\) are identical, subtract equation (2) from equation (1):</p><p>\\((a + 4b) - (a + 3b) = 13 - 10\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Simplify and solve for \\(b\\).',
        workingOut: '<div style="text-align: left;"><p>The \\(a\\) terms cancel out, leaving \\(4b - 3b\\):</p><p>\\(b = 3\\)</p><p>Therefore, the value of \\(b\\) is 3.</p></div>',
        graphData: null
      }
    ]
  });
  console.log('Fixed eb670dc5a59c9a83a32db4cea3181e75');
}
run().catch(console.error);
