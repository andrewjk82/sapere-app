const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  // ----- 2k -----
  const scriptBaseK = `board.suspendUpdate();
board.create('arrow', [[-4.5, 0], [4.5, 0]], {strokeColor: 'black', strokeWidth: 1});
board.create('arrow', [[0, -6.5], [0, 6.5]], {strokeColor: 'black', strokeWidth: 1});
board.create('text', [4.2, -0.5, 'x'], {fontSize: 12});
board.create('text', [-0.5, 6.2, 'y'], {fontSize: 12});
board.create('functiongraph', [function(x){ return -4*x + 2; }], {strokeColor: 'blue', strokeWidth: 2});
board.unsuspendUpdate();`;

  const newStepsK = [
    {
      explanation: 'Rearrange the equation into the gradient-intercept form, $y = mx + c$.',
      workingOut: 'y = 2 - 4x \\\\ y = -4x + 2'
    },
    {
      explanation: 'Compare this equation to $y = mx + c$ to identify the gradient $m$ and the $y$-intercept $c$.',
      workingOut: 'm = -4, \\quad c = 2'
    },
    {
      explanation: 'The graph of this linear equation passes through $(0, 2)$ and is a straight line.',
      workingOut: 'y = -4x + 2',
      graphData: {
        jsxGraph: {
          width: 300,
          height: 300,
          boundingbox: [-5, 7, 5, -7],
          showConstructionPoints: true,
          boardOptions: { axis: true, grid: true },
          script: scriptBaseK
        }
      }
    }
  ];

  batch.update(db.collection('questions').doc('y9-11d-q2k'), {
    'type': 'multiple_choice',
    'question': 'Write down the gradient and \\(y\\)-intercept of the line \\(y = 2 - 4x\\).',
    'answer': '0',
    'options': [
      { text: '$m = -4,\\quad c = 2$', imageUrl: '' },
      { text: '$m = 2,\\quad c = -4$', imageUrl: '' },
      { text: '$m = 4,\\quad c = 2$', imageUrl: '' },
      { text: '$m = -4,\\quad c = -2$', imageUrl: '' }
    ],
    'solutionSteps': newStepsK,
    'graphData': null,
    'requiresManualGrading': false,
    'updatedAt': FieldValue.serverTimestamp()
  });

  // ----- 2l -----
  const scriptBaseL = `board.suspendUpdate();
board.create('arrow', [[-4.5, 0], [4.5, 0]], {strokeColor: 'black', strokeWidth: 1});
board.create('arrow', [[0, -6.5], [0, 6.5]], {strokeColor: 'black', strokeWidth: 1});
board.create('text', [4.2, -0.5, 'x'], {fontSize: 12});
board.create('text', [-0.5, 6.2, 'y'], {fontSize: 12});
board.create('functiongraph', [function(x){ return -6*x + 3; }], {strokeColor: 'blue', strokeWidth: 2});
board.unsuspendUpdate();`;

  const newStepsL = [
    {
      explanation: 'Rearrange the equation into the gradient-intercept form, $y = mx + c$.',
      workingOut: 'y = 3 - 6x \\\\ y = -6x + 3'
    },
    {
      explanation: 'Compare this equation to $y = mx + c$ to identify the gradient $m$ and the $y$-intercept $c$.',
      workingOut: 'm = -6, \\quad c = 3'
    },
    {
      explanation: 'The graph of this linear equation passes through $(0, 3)$ and is a straight line.',
      workingOut: 'y = -6x + 3',
      graphData: {
        jsxGraph: {
          width: 300,
          height: 300,
          boundingbox: [-5, 7, 5, -7],
          showConstructionPoints: true,
          boardOptions: { axis: true, grid: true },
          script: scriptBaseL
        }
      }
    }
  ];

  batch.update(db.collection('questions').doc('y9-11d-q2l'), {
    'type': 'multiple_choice',
    'question': 'Write down the gradient and \\(y\\)-intercept of the line \\(y = 3 - 6x\\).',
    'answer': '0',
    'options': [
      { text: '$m = -6,\\quad c = 3$', imageUrl: '' },
      { text: '$m = 3,\\quad c = -6$', imageUrl: '' },
      { text: '$m = 6,\\quad c = 3$', imageUrl: '' },
      { text: '$m = -6,\\quad c = -3$', imageUrl: '' }
    ],
    'solutionSteps': newStepsL,
    'graphData': null,
    'requiresManualGrading': false,
    'updatedAt': FieldValue.serverTimestamp()
  });

  await batch.commit();
  console.log("Updated y9-11d-q2k and q2l.");
  process.exit(0);
}

run().catch(console.error);
