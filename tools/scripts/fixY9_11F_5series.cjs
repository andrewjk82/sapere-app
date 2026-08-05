const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  const baseGraphScript = "board.suspendUpdate(); board.create('arrow', [[-8,0],[8,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-8],[0,8]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [7.5, -0.5, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.2, 7.5, 'y'], {fontSize:13, color:'#64748b'}); board.create('point', [-2, -5], {name:'A', size:3, color:'#ef4444'}); board.create('point', [4, 7], {name:'B', size:3, color:'#ef4444'}); board.create('segment', [[-2,-5], [4,7]], {strokeColor:'#6366f1', strokeWidth:2}); board.unsuspendUpdate();";

  const extendedGraphScript = "board.suspendUpdate(); board.create('arrow', [[-8,0],[8,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-8],[0,8]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [7.5, -0.5, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.2, 7.5, 'y'], {fontSize:13, color:'#64748b'}); board.create('point', [-2, -5], {name:'A', size:3, color:'#ef4444'}); board.create('point', [4, 7], {name:'B', size:3, color:'#ef4444'}); board.create('segment', [[-2,-5], [4,7]], {strokeColor:'#6366f1', strokeWidth:2}); board.create('point', [1, 1], {name:'C', size:3, color:'#10b981'}); board.create('point', [0, 1.5], {name:'D', size:3, color:'#f59e0b'}); board.create('functiongraph', [function(x){ return -0.5*x + 1.5; }], {strokeColor:'#10b981', strokeWidth:2}); board.unsuspendUpdate();";

  const baseGraphData = { jsxGraph: { width: 360, height: 360, boundingbox: [-8, 8, 8, -8], script: baseGraphScript } };
  const extendedGraphData = { jsxGraph: { width: 360, height: 360, boundingbox: [-8, 8, 8, -8], script: extendedGraphScript } };

  // q5a
  batch.update(db.collection('questions').doc('y9-11f-q5a'), {
    type: 'multiple_choice',
    requiresManualGrading: false,
    graphData: baseGraphData,
    options: [
      { text: '\\(4\\)', imageUrl: '' },
      { text: '\\(2\\)', imageUrl: '' }, // Correct
      { text: '\\(-2\\)', imageUrl: '' },
      { text: '\\(-\\frac{1}{2}\\)', imageUrl: '' }
    ],
    answer: '1',
    solutionSteps: [
      {
        explanation: 'State the gradient formula for two points $(x_1, y_1)$ and $(x_2, y_2)$.',
        workingOut: 'm = \\frac{y_2 - y_1}{x_2 - x_1}',
        graphData: baseGraphData
      },
      {
        explanation: 'Substitute the coordinates of $A(-2, -5)$ and $B(4, 7)$ to find the gradient $m$.',
        workingOut: 'm = \\frac{7 - (-5)}{4 - (-2)}',
        graphData: null
      },
      {
        explanation: 'Simplify the numerator and denominator to get the final gradient.',
        workingOut: 'm = \\frac{12}{6} \\\\ m = 2',
        graphData: null
      }
    ],
    updatedAt: FieldValue.serverTimestamp()
  });

  // q5b
  batch.update(db.collection('questions').doc('y9-11f-q5b'), {
    graphData: baseGraphData,
    options: [
      { text: '\\((3, 6)\\)', imageUrl: '' },
      { text: '\\((1, 1)\\)', imageUrl: '' }, // Correct
      { text: '\\((-1, -1)\\)', imageUrl: '' },
      { text: '\\((2, 2)\\)', imageUrl: '' }
    ],
    answer: '1',
    solutionSteps: [
      {
        explanation: 'State the midpoint formula for two points $(x_1, y_1)$ and $(x_2, y_2)$.',
        workingOut: 'M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)',
        graphData: extendedGraphData
      },
      {
        explanation: 'Substitute the coordinates of $A(-2, -5)$ and $B(4, 7)$.',
        workingOut: 'M = \\left(\\frac{-2 + 4}{2}, \\frac{-5 + 7}{2}\\right)',
        graphData: null
      },
      {
        explanation: 'Simplify to find the coordinates of $C$.',
        workingOut: 'M = \\left(\\frac{2}{2}, \\frac{2}{2}\\right) \\\\ C = (1, 1)',
        graphData: null
      }
    ],
    updatedAt: FieldValue.serverTimestamp()
  });

  // q5c
  batch.update(db.collection('questions').doc('y9-11f-q5c'), {
    graphData: extendedGraphData,
    options: [
      { text: '\\(y = \\frac{1}{2}x + \\frac{1}{2}\\)', imageUrl: '' },
      { text: '\\(y = -\\frac{1}{2}x + \\frac{3}{2}\\)', imageUrl: '' }, // Correct
      { text: '\\(y = -2x + 3\\)', imageUrl: '' },
      { text: '\\(y = -\\frac{1}{2}x - \\frac{3}{2}\\)', imageUrl: '' }
    ],
    answer: '1',
    solutionSteps: [
      {
        explanation: 'State the point-gradient formula.',
        workingOut: 'y - y_1 = m(x - x_1)',
        graphData: extendedGraphData
      },
      {
        explanation: 'Substitute the gradient $m = -\\frac{1}{2}$ and the coordinates of $C(1, 1)$.',
        workingOut: 'y - 1 = -\\frac{1}{2}(x - 1)',
        graphData: null
      },
      {
        explanation: 'Expand and rearrange into the slope-intercept form $y = mx + c$.',
        workingOut: 'y - 1 = -\\frac{1}{2}x + \\frac{1}{2} \\\\ y = -\\frac{1}{2}x + \\frac{3}{2}',
        graphData: null
      }
    ],
    updatedAt: FieldValue.serverTimestamp()
  });

  // q5d
  batch.update(db.collection('questions').doc('y9-11f-q5d'), {
    graphData: extendedGraphData,
    options: [
      { text: '\\((1.5, 0)\\)', imageUrl: '' },
      { text: '\\((0, 1.5)\\)', imageUrl: '' }, // Correct
      { text: '\\((0, -1.5)\\)', imageUrl: '' },
      { text: '\\((3, 0)\\)', imageUrl: '' }
    ],
    answer: '1',
    solutionSteps: [
      {
        explanation: 'Identify that the point where a line intersects the $y$-axis is its $y$-intercept.',
        workingOut: '\\text{Let } x = 0 \\text{ in the equation } y = -\\frac{1}{2}x + \\frac{3}{2}',
        graphData: extendedGraphData
      },
      {
        explanation: 'Evaluate the equation when $x = 0$ to find the $y$-coordinate of $D$.',
        workingOut: 'y = -\\frac{1}{2}(0) + \\frac{3}{2} \\\\ y = \\frac{3}{2} = 1.5',
        graphData: null
      },
      {
        explanation: 'State the coordinates of $D$.',
        workingOut: 'D = (0, 1.5)',
        graphData: null
      }
    ],
    updatedAt: FieldValue.serverTimestamp()
  });

  // q5e
  batch.update(db.collection('questions').doc('y9-11f-q5e'), {
    graphData: extendedGraphData,
    options: [
      { text: '\\(1.25\\)', imageUrl: '' },
      { text: '\\(\\sqrt{1.25}\\)', imageUrl: '' }, // Correct
      { text: '\\(\\sqrt{5}\\)', imageUrl: '' },
      { text: '\\(2.5\\)', imageUrl: '' }
    ],
    answer: '1',
    solutionSteps: [
      {
        explanation: 'State the distance formula for two points $(x_1, y_1)$ and $(x_2, y_2)$.',
        workingOut: 'd = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}',
        graphData: extendedGraphData
      },
      {
        explanation: 'Substitute the coordinates of $C(1, 1)$ and $D(0, 1.5)$.',
        workingOut: 'd = \\sqrt{(0 - 1)^2 + (1.5 - 1)^2}',
        graphData: null
      },
      {
        explanation: 'Evaluate the expression under the square root.',
        workingOut: 'd = \\sqrt{(-1)^2 + (0.5)^2} \\\\ d = \\sqrt{1 + 0.25}',
        graphData: null
      },
      {
        explanation: 'Simplify to find the final distance.',
        workingOut: 'd = \\sqrt{1.25}',
        graphData: null
      }
    ],
    updatedAt: FieldValue.serverTimestamp()
  });

  await batch.commit();
  console.log("Updated 5a, 5b, 5c, 5d, 5e successfully.");
  process.exit(0);
}

run().catch(console.error);
