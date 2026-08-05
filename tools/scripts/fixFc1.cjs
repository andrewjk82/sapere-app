const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function run() {
  await db.collection('questions').doc('fc1edb66e671a9c8a9083339a6831efd').update({
    type: 'multiple_choice',
    requiresManualGrading: false,
    answer: '0',
    options: [
      { text: 'Apple: \\(\\$1.50\\), Banana: \\(\\$2.00\\)', imageUrl: '' },
      { text: 'Apple: \\(\\$2.00\\), Banana: \\(\\$1.50\\)', imageUrl: '' },
      { text: 'Apple: \\(\\$1.25\\), Banana: \\(\\$2.25\\)', imageUrl: '' },
      { text: 'Apple: \\(\\$1.75\\), Banana: \\(\\$1.75\\)', imageUrl: '' }
    ],
    solution: '<div style="text-align: left;"><p>Set up the equations:</p><p>\\(3x + 5y = 14.50\\) and \\(5x + 3y = 13.50\\)</p><p>Solve to get \\(x = 1.50,\\ y = 2.00\\).</p></div>',
    solutionSteps: [
      {
        explanation: 'Write the two equations from the given information.',
        workingOut: '<div style="text-align: left;"><p>Let \\(x\\) = cost of apple, \\(y\\) = cost of banana.</p><p>\\(3x + 5y = 14.50 \\quad \\cdots (1)\\)</p><p>\\(5x + 3y = 13.50 \\quad \\cdots (2)\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Eliminate y by multiplying: (1)×3 and (2)×5.',
        workingOut: '<div style="text-align: left;"><p>\\(9x + 15y = 43.50 \\quad \\cdots (3)\\)</p><p>\\(25x + 15y = 67.50 \\quad \\cdots (4)\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Subtract (3) from (4) to solve for x.',
        workingOut: '<div style="text-align: left;"><p>\\((4) - (3): \\quad 16x = 24\\)</p><p>\\(x = 1.50\\)</p></div>',
        graphData: null
      },
      {
        explanation: 'Substitute x = 1.50 back to find y.',
        workingOut: '<div style="text-align: left;"><p>\\(3(1.50) + 5y = 14.50\\)</p><p>\\(4.50 + 5y = 14.50\\)</p><p>\\(5y = 10 \\Rightarrow y = 2.00\\)</p><p>Therefore: Apple costs \\(\\$1.50\\) and Banana costs \\(\\$2.00\\).</p></div>',
        graphData: null
      }
    ]
  });
  console.log('Fixed fc1edb66e671a9c8a9083339a6831efd: converted to MCQ with answer Apple $1.50, Banana $2.00');
}
run().catch(console.error);
