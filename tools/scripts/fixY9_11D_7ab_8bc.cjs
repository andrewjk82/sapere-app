const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  // ----- 7a -----
  const scriptBase7a = `board.suspendUpdate();
board.create('arrow', [[-6,0],[6,0]], {strokeColor:'#94a3b8', strokeWidth:1.5});
board.create('arrow', [[0,-6],[0,6]], {strokeColor:'#94a3b8', strokeWidth:1.5});
board.create('text', [5.28, -2.1, 'x'], {fontSize:13, color:'#64748b'});
board.create('text', [0.12, 5.4, 'y'], {fontSize:13, color:'#64748b'});
board.create('functiongraph', [function(x){ return -4*x + 3; }, -5.5, 5.5], {strokeColor:'#6366f1', strokeWidth:2.6});
board.unsuspendUpdate();`;

  const newSteps7a = [
    {
      explanation: 'To find the $y$-coordinate, substitute the given $x$-coordinate into the equation of the line.',
      workingOut: 'y = -4x + 3 \\\\ x = 4'
    },
    {
      explanation: 'Calculate the $y$-value.',
      workingOut: 'y = -4(4) + 3 \\\\ y = -16 + 3 \\\\ y = -13'
    },
    {
      explanation: 'Therefore, the $y$-coordinate is $-13$.',
      workingOut: '-13',
      graphData: {
        jsxGraph: {
          width: 360, height: 280, boundingbox: [-6, 6, 6, -6],
          script: scriptBase7a
        }
      }
    }
  ];

  batch.update(db.collection('questions').doc('y9-11d-q7a'), {
    solutionSteps: newSteps7a,
    graphData: null,
    updatedAt: FieldValue.serverTimestamp()
  });

  // ----- 7b -----
  const newSteps7b = [
    {
      explanation: 'To find the $y$-coordinate, substitute the given $x$-coordinate into the equation of the line.',
      workingOut: 'y = -4x + 3 \\\\ x = -2'
    },
    {
      explanation: 'Calculate the $y$-value.',
      workingOut: 'y = -4(-2) + 3 \\\\ y = 8 + 3 \\\\ y = 11'
    },
    {
      explanation: 'Therefore, the $y$-coordinate is $11$.',
      workingOut: '11',
      graphData: {
        jsxGraph: {
          width: 360, height: 280, boundingbox: [-6, 6, 6, -6],
          script: scriptBase7a
        }
      }
    }
  ];

  batch.update(db.collection('questions').doc('y9-11d-q7b'), {
    solutionSteps: newSteps7b,
    graphData: null,
    updatedAt: FieldValue.serverTimestamp()
  });

  // ----- 8b -----
  const scriptBase8b = `board.suspendUpdate();
board.create('arrow', [[-6,0],[6,0]], {strokeColor:'#94a3b8', strokeWidth:1.5});
board.create('arrow', [[0,-6],[0,6]], {strokeColor:'#94a3b8', strokeWidth:1.5});
board.create('text', [5.28, -2.1, 'x'], {fontSize:13, color:'#64748b'});
board.create('text', [0.12, 5.4, 'y'], {fontSize:13, color:'#64748b'});
board.create('functiongraph', [function(x){ return 3*x + 9; }, -5.5, 5.5], {strokeColor:'#6366f1', strokeWidth:2.6});
board.unsuspendUpdate();`;

  const newSteps8b = [
    {
      explanation: 'To find the $x$-coordinate, substitute the given $y$-coordinate into the equation of the line.',
      workingOut: 'y = 3x + 9 \\\\ y = 0'
    },
    {
      explanation: 'Set up the equation and isolate $x$.',
      workingOut: '0 = 3x + 9 \\\\ -9 = 3x'
    },
    {
      explanation: 'Solve for $x$.',
      workingOut: 'x = \\frac{-9}{3} \\\\ x = -3',
      graphData: {
        jsxGraph: {
          width: 360, height: 280, boundingbox: [-6, 6, 6, -6],
          script: scriptBase8b
        }
      }
    }
  ];

  batch.update(db.collection('questions').doc('y9-11d-q8b'), {
    solutionSteps: newSteps8b,
    graphData: null,
    updatedAt: FieldValue.serverTimestamp()
  });

  // ----- 8c -----
  const newSteps8c = [
    {
      explanation: 'To find the $x$-coordinate, substitute the given $y$-coordinate into the equation of the line.',
      workingOut: 'y = 3x + 9 \\\\ y = -3'
    },
    {
      explanation: 'Set up the equation and isolate $x$.',
      workingOut: '-3 = 3x + 9 \\\\ -3 - 9 = 3x \\\\ -12 = 3x'
    },
    {
      explanation: 'Solve for $x$.',
      workingOut: 'x = \\frac{-12}{3} \\\\ x = -4',
      graphData: {
        jsxGraph: {
          width: 360, height: 280, boundingbox: [-6, 6, 6, -6],
          script: scriptBase8b
        }
      }
    }
  ];

  batch.update(db.collection('questions').doc('y9-11d-q8c'), {
    solutionSteps: newSteps8c,
    graphData: null,
    updatedAt: FieldValue.serverTimestamp()
  });

  await batch.commit();
  console.log("Updated 7a, 7b, 8b, 8c successfully.");
  process.exit(0);
}

run().catch(console.error);
