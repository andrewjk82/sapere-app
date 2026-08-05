const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  const graphScript = "board.suspendUpdate(); board.create('arrow', [[-2,0],[12,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-5],[0,10]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [11.5, -0.5, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.2, 9.5, 'y'], {fontSize:13, color:'#64748b'}); board.create('point', [2, 3], {name:'A', size:3, color:'#ef4444'}); board.create('point', [6, 7], {name:'B', size:3, color:'#ef4444'}); board.create('point', [9, 1], {name:'C', size:3, color:'#ef4444'}); board.create('point', [7, -3], {name:'D', size:3, color:'#ef4444'}); board.create('polygon', [[2,3], [6,7], [9,1], [7,-3]], {fillColor:'none', borders:{strokeColor:'#94a3b8', strokeWidth:2}}); board.create('point', [4, 5], {name:'M', size:3, color:'#10b981'}); board.create('point', [8, -1], {name:'N', size:3, color:'#10b981'}); board.create('line', [[4,5], [8,-1]], {strokeColor:'#6366f1', strokeWidth:1.5}); board.create('point', [5.5, 2], {name:'P', size:3, color:'#f59e0b'}); board.create('line', [[5.5,2], [6.5,5]], {strokeColor:'#f59e0b', strokeWidth:1.5, strokeDasharray:'4 4'}); board.unsuspendUpdate();";
  const parentGraphData = { jsxGraph: { width: 360, height: 360, boundingbox: [-2, 10, 12, -5], script: graphScript } };

  // Update q8a
  const q8aData = {
    type: 'multiple_choice',
    requiresManualGrading: false,
    options: [
      { text: '\\((3, 4)\\)', imageUrl: '' },
      { text: '\\((5, 6)\\)', imageUrl: '' },
      { text: '\\((4, 5)\\)', imageUrl: '' }, // Correct
      { text: '\\((2, 2)\\)', imageUrl: '' }
    ],
    answer: '2',
    solutionSteps: [
      {
        explanation: 'State the midpoint formula.',
        workingOut: 'M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)',
        graphData: null
      },
      {
        explanation: 'Substitute the coordinates of $A(2, 3)$ and $B(6, 7)$.',
        workingOut: 'M = \\left(\\frac{2 + 6}{2}, \\frac{3 + 7}{2}\\right)',
        graphData: null
      },
      {
        explanation: 'Simplify to find the coordinates.',
        workingOut: 'M = \\left(\\frac{8}{2}, \\frac{10}{2}\\right) \\\\ M = (4, 5)',
        graphData: null
      }
    ]
  };

  // Update q8b
  const q8bData = {
    type: 'multiple_choice',
    requiresManualGrading: false,
    options: [
      { text: '\\((8, -1)\\)', imageUrl: '' }, // Correct
      { text: '\\((7, 2)\\)', imageUrl: '' },
      { text: '\\((6, -2)\\)', imageUrl: '' },
      { text: '\\((9, -1)\\)', imageUrl: '' }
    ],
    answer: '0',
    solutionSteps: [
      {
        explanation: 'State the midpoint formula.',
        workingOut: 'N = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)',
        graphData: null
      },
      {
        explanation: 'Substitute the coordinates of $C(9, 1)$ and $D(7, -3)$.',
        workingOut: 'N = \\left(\\frac{9 + 7}{2}, \\frac{1 + (-3)}{2}\\right)',
        graphData: null
      },
      {
        explanation: 'Simplify to find the coordinates.',
        workingOut: 'N = \\left(\\frac{16}{2}, \\frac{-2}{2}\\right) \\\\ N = (8, -1)',
        graphData: null
      }
    ]
  };

  // Update q8c
  const q8cData = {
    type: 'multiple_choice',
    requiresManualGrading: false,
    options: [
      { text: '\\(-1.5\\)', imageUrl: '' }, // Correct
      { text: '\\(1.5\\)', imageUrl: '' },
      { text: '\\(-2.5\\)', imageUrl: '' },
      { text: '\\(0.5\\)', imageUrl: '' }
    ],
    answer: '0',
    solutionSteps: [
      {
        explanation: 'State the gradient formula.',
        workingOut: 'm = \\frac{y_2 - y_1}{x_2 - x_1}',
        graphData: null
      },
      {
        explanation: 'Substitute the coordinates of $M(4, 5)$ and $N(8, -1)$.',
        workingOut: 'm = \\frac{-1 - 5}{8 - 4}',
        graphData: null
      },
      {
        explanation: 'Simplify to find the gradient.',
        workingOut: 'm = \\frac{-6}{4} = -1.5',
        graphData: null
      }
    ]
  };

  // Update q8d
  const q8dData = {
    type: 'multiple_choice',
    requiresManualGrading: false,
    options: [
      { text: '\\(y = -\\frac{1}{2}x + 7\\)', imageUrl: '' },
      { text: '\\(y = \\frac{3}{2}x + 5\\)', imageUrl: '' },
      { text: '\\(y = -2x + 9\\)', imageUrl: '' },
      { text: '\\(y = -\\frac{3}{2}x + 11\\)', imageUrl: '' } // Correct
    ],
    answer: '3',
    solutionSteps: [
      {
        explanation: 'State the point-gradient formula.',
        workingOut: 'y - y_1 = m(x - x_1)',
        graphData: null
      },
      {
        explanation: 'Substitute $m = -\\frac{3}{2}$ and the coordinates of point $M(4, 5)$.',
        workingOut: 'y - 5 = -\\frac{3}{2}(x - 4)',
        graphData: null
      },
      {
        explanation: 'Expand and rearrange.',
        workingOut: 'y - 5 = -\\frac{3}{2}x + 6 \\\\ y = -\\frac{3}{2}x + 11',
        graphData: null
      }
    ]
  };

  // Update q8e
  const q8eData = {
    type: 'multiple_choice',
    requiresManualGrading: false,
    options: [
      { text: '\\((5.5, 2)\\)', imageUrl: '' }, // Correct
      { text: '\\((4.5, 3)\\)', imageUrl: '' },
      { text: '\\((6, 2.5)\\)', imageUrl: '' },
      { text: '\\((5, 1.5)\\)', imageUrl: '' }
    ],
    answer: '0',
    solutionSteps: [
      {
        explanation: 'State the midpoint formula.',
        workingOut: 'P = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)',
        graphData: null
      },
      {
        explanation: 'Substitute the coordinates of $A(2, 3)$ and $C(9, 1)$.',
        workingOut: 'P = \\left(\\frac{2 + 9}{2}, \\frac{3 + 1}{2}\\right)',
        graphData: null
      },
      {
        explanation: 'Simplify to find the coordinates.',
        workingOut: 'P = \\left(\\frac{11}{2}, \\frac{4}{2}\\right) \\\\ P = (5.5, 2)',
        graphData: null
      }
    ]
  };

  // Update q8f
  const q8fData = {
    type: 'multiple_choice',
    requiresManualGrading: false,
    options: [
      { text: '\\(y = 3x - 14.5\\)', imageUrl: '' }, // Correct
      { text: '\\(y = 2x - 9\\)', imageUrl: '' },
      { text: '\\(y = 4x - 20\\)', imageUrl: '' },
      { text: '\\(y = 3x + 14.5\\)', imageUrl: '' }
    ],
    answer: '0',
    solutionSteps: [
      {
        explanation: 'State the point-gradient formula.',
        workingOut: 'y - y_1 = m(x - x_1)',
        graphData: null
      },
      {
        explanation: 'Substitute $m = 3$ and the coordinates of point $P(5.5, 2)$.',
        workingOut: 'y - 2 = 3(x - 5.5)',
        graphData: null
      },
      {
        explanation: 'Expand and rearrange.',
        workingOut: 'y - 2 = 3x - 16.5 \\\\ y = 3x - 14.5',
        graphData: null
      }
    ]
  };

  batch.update(db.collection('questions').doc('y9-11f-q8a'), { ...q8aData, updatedAt: FieldValue.serverTimestamp() });
  batch.update(db.collection('questions').doc('y9-11f-q8b'), { ...q8bData, updatedAt: FieldValue.serverTimestamp() });
  batch.update(db.collection('questions').doc('y9-11f-q8c'), { ...q8cData, updatedAt: FieldValue.serverTimestamp() });
  batch.update(db.collection('questions').doc('y9-11f-q8d'), { ...q8dData, updatedAt: FieldValue.serverTimestamp() });
  batch.update(db.collection('questions').doc('y9-11f-q8e'), { ...q8eData, updatedAt: FieldValue.serverTimestamp() });
  batch.update(db.collection('questions').doc('y9-11f-q8f'), { ...q8fData, updatedAt: FieldValue.serverTimestamp() });

  // Update Parent
  const parentRef = db.collection('questions').doc('y9-11f-q8');
  const parentDoc = await parentRef.get();
  let parentData = parentDoc.data();

  const newSubQs = [
    { ...parentData.subQuestions[0], ...q8aData },
    { ...parentData.subQuestions[1], ...q8bData },
    { ...parentData.subQuestions[2], ...q8cData },
    { ...parentData.subQuestions[3], ...q8dData },
    { ...parentData.subQuestions[4], ...q8eData },
    { ...parentData.subQuestions[5], ...q8fData }
  ];

  newSubQs.forEach(sq => delete sq.updatedAt);

  batch.update(parentRef, {
    subQuestions: newSubQs,
    solution: "",
    graphData: parentGraphData,
    updatedAt: FieldValue.serverTimestamp()
  });

  await batch.commit();
  console.log("Updated y9-11f-q8 parent and subquestions successfully.");
  process.exit(0);
}

run().catch(console.error);
