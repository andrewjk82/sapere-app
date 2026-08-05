const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  // ----- 7c -----
  const scriptBase7c = `board.suspendUpdate();
board.create('arrow', [[-6,0],[6,0]], {strokeColor:'#94a3b8', strokeWidth:1.5});
board.create('arrow', [[0,-6],[0,6]], {strokeColor:'#94a3b8', strokeWidth:1.5});
board.create('text', [5.28, -2.1, 'x'], {fontSize:13, color:'#64748b'});
board.create('text', [0.12, 5.4, 'y'], {fontSize:13, color:'#64748b'});
board.create('functiongraph', [function(x){ return -4*x + 3; }, -5.5, 5.5], {strokeColor:'#6366f1', strokeWidth:2.6});
board.unsuspendUpdate();`;

  const newSteps7c = [
    {
      explanation: 'To find the $y$-coordinate, substitute the given $x$-coordinate into the equation of the line.',
      workingOut: 'y = -4x + 3 \\\\ x = 0'
    },
    {
      explanation: 'Calculate the $y$-value.',
      workingOut: 'y = -4(0) + 3 \\\\ y = 3'
    },
    {
      explanation: 'Therefore, the $y$-coordinate is $3$.',
      workingOut: '3',
      graphData: {
        jsxGraph: {
          width: 360,
          height: 280,
          boundingbox: [-6, 6, 6, -6],
          script: scriptBase7c
        }
      }
    }
  ];

  batch.update(db.collection('questions').doc('y9-11d-q7c'), {
    'type': 'multiple_choice',
    'answer': '0',
    'options': [
      { text: '$3$', imageUrl: '' },
      { text: '$-3$', imageUrl: '' },
      { text: '$0$', imageUrl: '' },
      { text: '$4$', imageUrl: '' }
    ],
    'solutionSteps': newSteps7c,
    'graphData': null,
    'requiresManualGrading': false,
    'updatedAt': FieldValue.serverTimestamp()
  });

  // ----- 8a -----
  const scriptBase8a = `board.suspendUpdate();
board.create('arrow', [[-6,0],[6,0]], {strokeColor:'#94a3b8', strokeWidth:1.5});
board.create('arrow', [[0,-6],[0,6]], {strokeColor:'#94a3b8', strokeWidth:1.5});
board.create('text', [5.28, -2.1, 'x'], {fontSize:13, color:'#64748b'});
board.create('text', [0.12, 5.4, 'y'], {fontSize:13, color:'#64748b'});
board.create('functiongraph', [function(x){ return 3*x + 9; }, -5.5, 5.5], {strokeColor:'#6366f1', strokeWidth:2.6});
board.unsuspendUpdate();`;

  const newSteps8a = [
    {
      explanation: 'To find the $x$-coordinate, substitute the given $y$-coordinate into the equation of the line.',
      workingOut: 'y = 3x + 9 \\\\ y = 12'
    },
    {
      explanation: 'Set up the equation and isolate $x$.',
      workingOut: '12 = 3x + 9 \\\\ 12 - 9 = 3x \\\\ 3 = 3x'
    },
    {
      explanation: 'Solve for $x$.',
      workingOut: 'x = \\frac{3}{3} \\\\ x = 1',
      graphData: {
        jsxGraph: {
          width: 360,
          height: 280,
          boundingbox: [-6, 6, 6, -6],
          script: scriptBase8a
        }
      }
    }
  ];

  batch.update(db.collection('questions').doc('y9-11d-q8a'), {
    'type': 'multiple_choice',
    'answer': '0',
    'options': [
      { text: '$1$', imageUrl: '' },
      { text: '$2$', imageUrl: '' },
      { text: '$3$', imageUrl: '' },
      { text: '$4$', imageUrl: '' }
    ],
    'solutionSteps': newSteps8a,
    'graphData': null,
    'requiresManualGrading': false,
    'updatedAt': FieldValue.serverTimestamp()
  });

  await batch.commit();
  console.log("Updated y9-11d-q7c and q8a.");
  process.exit(0);
}

run().catch(console.error);
