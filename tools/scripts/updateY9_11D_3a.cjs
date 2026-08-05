const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  const scriptBase = `board.suspendUpdate(); board.create('arrow', [[-6,0],[6,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-6],[0,6]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.28, -2.0999999999999996, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.4, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return (3)*x + (-2); }, -5.5, 5.5], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [2.2, 3.5, 'y = 3x-2'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();`;

  const newSteps = [
    {
      explanation: 'To check if the point $(2, 4)$ lies on the line $y = 3x - 2$, substitute the $x$-coordinate into the equation.',
      workingOut: 'x = 2'
    },
    {
      explanation: 'Calculate the corresponding $y$-value.',
      workingOut: 'y = 3(2) - 2 \\\\ y = 6 - 2 \\\\ y = 4'
    },
    {
      explanation: 'Since the calculated $y$-value matches the $y$-coordinate of the given point $(2, 4)$, the point lies on the line.',
      workingOut: '4 = 4 \\implies \\text{Yes}',
      graphData: {
        jsxGraph: {
          width: 360,
          height: 280,
          boundingbox: [-6, 6, 6, -6],
          script: scriptBase
        }
      }
    }
  ];

  batch.update(db.collection('questions').doc('y9-11d-q3a'), {
    'answer': '0',
    'options': [
      { text: 'Yes', imageUrl: '' },
      { text: 'No', imageUrl: '' }
    ],
    'solutionSteps': newSteps,
    'graphData': null,
    'updatedAt': FieldValue.serverTimestamp()
  });

  await batch.commit();
  console.log("Updated y9-11d-q3a options and solution steps.");
  process.exit(0);
}

run().catch(console.error);
