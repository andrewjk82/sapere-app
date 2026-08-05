const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  const graphScript = "board.suspendUpdate(); board.create('arrow', [[-5,0],[10,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-10],[0,10]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [9.5, -0.5, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.2, 9.5, 'y'], {fontSize:13, color:'#64748b'}); board.create('point', [2, -3], {name:'A', size:3, color:'#ef4444'}); board.create('point', [3, 4], {name:'B', size:3, color:'#ef4444'}); board.create('point', [0, -7], {name:'D', size:3, color:'#f59e0b'}); board.create('line', [[2,-3],[0,-7]], {strokeColor:'#6366f1', strokeWidth:1.5}); board.create('line', [[3,4],[0,-7]], {strokeColor:'#10b981', strokeWidth:1.5}); board.unsuspendUpdate();";
  const parentGraphData = { jsxGraph: { width: 360, height: 360, boundingbox: [-5, 10, 10, -10], script: graphScript } };

  // Update q6a
  const q6aData = {
    type: 'multiple_choice',
    requiresManualGrading: false,
    options: [
      { text: '\\(y = 2x - 7\\)', imageUrl: '' },
      { text: '\\(y = 3x - 2\\)', imageUrl: '' },
      { text: '\\(y = 4x + 1\\)', imageUrl: '' },
      { text: '\\(y = -x + 6\\)', imageUrl: '' }
    ],
    answer: '0',
    solutionSteps: [
      {
        explanation: 'State the point-gradient formula.',
        workingOut: 'y - y_1 = m(x - x_1)',
        graphData: null
      },
      {
        explanation: 'Substitute $m = 2$ and $A(2, -3)$ into the formula.',
        workingOut: 'y - (-3) = 2(x - 2)',
        graphData: null
      },
      {
        explanation: 'Expand and rearrange into the slope-intercept form $y = mx + c$.',
        workingOut: 'y + 3 = 2x - 4 \\\\ y = 2x - 7',
        graphData: null
      }
    ]
  };
  batch.update(db.collection('questions').doc('y9-11f-q6a'), { ...q6aData, updatedAt: FieldValue.serverTimestamp() });

  // Update q6b
  const q6bData = {
    type: 'multiple_choice',
    requiresManualGrading: false,
    options: [
      { text: '\\((2, 0)\\)', imageUrl: '' },
      { text: '\\((0, -7)\\)', imageUrl: '' },
      { text: '\\((-7, 0)\\)', imageUrl: '' },
      { text: '\\((0, 2)\\)', imageUrl: '' }
    ],
    answer: '1',
    solutionSteps: [
      {
        explanation: 'Identify that the $y$-intercept occurs when $x = 0$.',
        workingOut: '\\text{Let } x = 0 \\text{ in } y = 2x - 7',
        graphData: null
      },
      {
        explanation: 'Substitute $x = 0$ to find the $y$-coordinate.',
        workingOut: 'y = 2(0) - 7 = -7',
        graphData: null
      },
      {
        explanation: 'State the coordinates of point $D$.',
        workingOut: 'D = (0, -7)',
        graphData: null
      }
    ]
  };
  batch.update(db.collection('questions').doc('y9-11f-q6b'), { ...q6bData, updatedAt: FieldValue.serverTimestamp() });

  // Update q6c
  const q6cData = {
    type: 'multiple_choice',
    requiresManualGrading: false,
    options: [
      { text: '\\(\\frac{11}{3}\\)', imageUrl: '' },
      { text: '\\(\\frac{3}{11}\\)', imageUrl: '' },
      { text: '\\(-\\frac{11}{3}\\)', imageUrl: '' },
      { text: '\\(3\\)', imageUrl: '' }
    ],
    answer: '0',
    solutionSteps: [
      {
        explanation: 'State the gradient formula for two points.',
        workingOut: 'm = \\frac{y_2 - y_1}{x_2 - x_1}',
        graphData: null
      },
      {
        explanation: 'Substitute the coordinates of $B(3, 4)$ and $D(0, -7)$.',
        workingOut: 'm = \\frac{-7 - 4}{0 - 3}',
        graphData: null
      },
      {
        explanation: 'Simplify to find the gradient.',
        workingOut: 'm = \\frac{-11}{-3} = \\frac{11}{3}',
        graphData: null
      }
    ]
  };
  batch.update(db.collection('questions').doc('y9-11f-q6c'), { ...q6cData, updatedAt: FieldValue.serverTimestamp() });

  // Update q6d
  const q6dData = {
    type: 'multiple_choice',
    requiresManualGrading: false,
    options: [
      { text: '\\(y = 3x - 11\\)', imageUrl: '' },
      { text: '\\(y = -\\frac{11}{3}x + 7\\)', imageUrl: '' },
      { text: '\\(y = \\frac{3}{11}x - 7\\)', imageUrl: '' },
      { text: '\\(y = \\frac{11}{3}x - 7\\)', imageUrl: '' }
    ],
    answer: '3',
    solutionSteps: [
      {
        explanation: 'State the slope-intercept form for the equation of a line.',
        workingOut: 'y = mx + c',
        graphData: null
      },
      {
        explanation: 'Substitute the gradient $m = \\frac{11}{3}$ and the $y$-intercept $c = -7$ (from point $D$).',
        workingOut: 'y = \\frac{11}{3}x - 7',
        graphData: null
      }
    ]
  };
  batch.update(db.collection('questions').doc('y9-11f-q6d'), { ...q6dData, updatedAt: FieldValue.serverTimestamp() });

  // Update Parent
  const parentRef = db.collection('questions').doc('y9-11f-q6');
  const parentDoc = await parentRef.get();
  let parentData = parentDoc.data();

  const newSubQs = [
    { ...parentData.subQuestions[0], ...q6aData },
    { ...parentData.subQuestions[1], ...q6bData },
    { ...parentData.subQuestions[2], ...q6cData },
    { ...parentData.subQuestions[3], ...q6dData }
  ];
  
  // Clean up any updatedAt from array items just in case
  newSubQs.forEach(sq => delete sq.updatedAt);

  batch.update(parentRef, {
    subQuestions: newSubQs,
    solution: "",
    graphData: parentGraphData,
    updatedAt: FieldValue.serverTimestamp()
  });

  await batch.commit();
  console.log("Updated y9-11f-q6 parent and subquestions successfully.");
  process.exit(0);
}

run().catch(console.error);
