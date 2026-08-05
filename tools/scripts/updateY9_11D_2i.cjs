const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  const scriptBase = `board.suspendUpdate();
board.create('arrow', [[-4.5, 0], [4.5, 0]], {strokeColor: 'black', strokeWidth: 1});
board.create('arrow', [[0, -6.5], [0, 6.5]], {strokeColor: 'black', strokeWidth: 1});
board.create('text', [4.2, -0.5, 'x'], {fontSize: 12});
board.create('text', [-0.5, 6.2, 'y'], {fontSize: 12});
board.create('functiongraph', [function(x){ return -3*x; }], {strokeColor: 'blue', strokeWidth: 2});
board.unsuspendUpdate();`;

  const newSteps = [
    {
      explanation: 'The equation is already in the gradient-intercept form, $y = mx + c$. Note that since there is no constant term, $c = 0$.',
      workingOut: 'y = -3x + 0'
    },
    {
      explanation: 'Compare this equation to $y = mx + c$ to identify the gradient $m$ and the $y$-intercept $c$.',
      workingOut: 'm = -3, \\quad c = 0'
    },
    {
      explanation: 'The graph of this linear equation passes through $(0, 0)$ and is a straight line.',
      workingOut: 'y = -3x',
      graphData: {
        jsxGraph: {
          width: 300,
          height: 300,
          boundingbox: [-5, 7, 5, -7],
          showConstructionPoints: true,
          boardOptions: { axis: true, grid: true },
          script: scriptBase
        }
      }
    }
  ];

  batch.update(db.collection('questions').doc('y9-11d-q2i'), {
    'type': 'multiple_choice',
    'question': 'Write down the gradient and \\(y\\)-intercept of the line \\(y = -3x\\).',
    'answer': '0',
    'options': [
      { text: '$m = -3,\\quad c = 0$', imageUrl: '' },
      { text: '$m = 3,\\quad c = 0$', imageUrl: '' },
      { text: '$m = -3,\\quad c = 3$', imageUrl: '' },
      { text: '$m = 0,\\quad c = -3$', imageUrl: '' }
    ],
    'solutionSteps': newSteps,
    'graphData': null,
    'requiresManualGrading': false,
    'updatedAt': FieldValue.serverTimestamp()
  });

  await batch.commit();
  console.log("Updated y9-11d-q2i to MCQ, fixed graph, and removed top-level graph.");
  process.exit(0);
}

run().catch(console.error);
