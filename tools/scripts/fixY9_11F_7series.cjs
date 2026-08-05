const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  const graphScript = "board.suspendUpdate(); board.create('arrow', [[-2,0],[12,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-2],[0,22]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [11.5, -0.5, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.2, 21.5, 'y'], {fontSize:13, color:'#64748b'}); board.create('point', [3, 6], {name:'B', size:3, color:'#ef4444'}); board.create('point', [9, 18], {name:'W', size:3, color:'#ef4444'}); board.create('segment', [[3, 6], [9, 18]], {strokeColor:'#6366f1', strokeWidth:2}); board.create('point', [6, 12], {name:'M', size:3, color:'#10b981'}); board.unsuspendUpdate();";
  const parentGraphData = { jsxGraph: { width: 360, height: 360, boundingbox: [-2, 22, 12, -2], script: graphScript } };

  // Update q7a
  const q7aData = {
    type: 'multiple_choice',
    requiresManualGrading: false,
    options: [
      { text: '\\(5\\sqrt{6}\\)', imageUrl: '' },
      { text: '\\(6\\sqrt{5}\\)', imageUrl: '' },
      { text: '\\(3\\sqrt{10}\\)', imageUrl: '' },
      { text: '\\(\\sqrt{18}\\)', imageUrl: '' }
    ],
    answer: '1',
    solutionSteps: [
      {
        explanation: 'State the distance formula.',
        workingOut: 'd = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}',
        graphData: null
      },
      {
        explanation: 'Substitute the coordinates of $B(3, 6)$ and $W(9, 18)$.',
        workingOut: 'd = \\sqrt{(9 - 3)^2 + (18 - 6)^2}',
        graphData: null
      },
      {
        explanation: 'Evaluate the expression under the square root.',
        workingOut: 'd = \\sqrt{6^2 + 12^2} \\\\ d = \\sqrt{36 + 144} \\\\ d = \\sqrt{180}',
        graphData: null
      },
      {
        explanation: 'Express in simplified surd form.',
        workingOut: 'd = \\sqrt{36 \\times 5} \\\\ d = 6\\sqrt{5}',
        graphData: null
      }
    ]
  };
  batch.update(db.collection('questions').doc('y9-11f-q7a'), { ...q7aData, updatedAt: FieldValue.serverTimestamp() });

  // Update q7b
  const q7bData = {
    type: 'multiple_choice',
    requiresManualGrading: false,
    options: [
      { text: '\\(2\\)', imageUrl: '' },
      { text: '\\(\\frac{1}{2}\\)', imageUrl: '' },
      { text: '\\(-2\\)', imageUrl: '' },
      { text: '\\(-\\frac{1}{2}\\)', imageUrl: '' }
    ],
    answer: '0',
    solutionSteps: [
      {
        explanation: 'State the gradient formula.',
        workingOut: 'm = \\frac{y_2 - y_1}{x_2 - x_1}',
        graphData: null
      },
      {
        explanation: 'Substitute the coordinates of $B(3, 6)$ and $W(9, 18)$.',
        workingOut: 'm = \\frac{18 - 6}{9 - 3}',
        graphData: null
      },
      {
        explanation: 'Simplify to find the gradient.',
        workingOut: 'm = \\frac{12}{6} \\\\ m = 2',
        graphData: null
      }
    ]
  };
  batch.update(db.collection('questions').doc('y9-11f-q7b'), { ...q7bData, updatedAt: FieldValue.serverTimestamp() });

  // Update q7c
  const q7cData = {
    type: 'multiple_choice',
    requiresManualGrading: false,
    options: [
      { text: '\\(y = 2x - 3\\)', imageUrl: '' },
      { text: '\\(y = \\frac{1}{2}x + 6\\)', imageUrl: '' },
      { text: '\\(y = 2x\\)', imageUrl: '' },
      { text: '\\(y = x + 3\\)', imageUrl: '' }
    ],
    answer: '2',
    solutionSteps: [
      {
        explanation: 'State the point-gradient formula.',
        workingOut: 'y - y_1 = m(x - x_1)',
        graphData: null
      },
      {
        explanation: 'Substitute the gradient $m = 2$ and the coordinates of point $B(3, 6)$.',
        workingOut: 'y - 6 = 2(x - 3)',
        graphData: null
      },
      {
        explanation: 'Expand and rearrange.',
        workingOut: 'y - 6 = 2x - 6 \\\\ y = 2x',
        graphData: null
      }
    ]
  };
  batch.update(db.collection('questions').doc('y9-11f-q7c'), { ...q7cData, updatedAt: FieldValue.serverTimestamp() });

  // Update q7d
  const q7dData = {
    type: 'multiple_choice',
    requiresManualGrading: false,
    options: [
      { text: '\\((3, 6)\\)', imageUrl: '' },
      { text: '\\((6, 12)\\)', imageUrl: '' },
      { text: '\\((12, 24)\\)', imageUrl: '' },
      { text: '\\((4.5, 9)\\)', imageUrl: '' }
    ],
    answer: '1',
    solutionSteps: [
      {
        explanation: 'State the midpoint formula.',
        workingOut: 'M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)',
        graphData: null
      },
      {
        explanation: 'Substitute the coordinates of $B(3, 6)$ and $W(9, 18)$.',
        workingOut: 'M = \\left(\\frac{3 + 9}{2}, \\frac{6 + 18}{2}\\right)',
        graphData: null
      },
      {
        explanation: 'Simplify to find the coordinates.',
        workingOut: 'M = \\left(\\frac{12}{2}, \\frac{24}{2}\\right) \\\\ M = (6, 12)',
        graphData: null
      }
    ]
  };
  batch.update(db.collection('questions').doc('y9-11f-q7d'), { ...q7dData, updatedAt: FieldValue.serverTimestamp() });

  // Update Parent
  const parentRef = db.collection('questions').doc('y9-11f-q7');
  const parentDoc = await parentRef.get();
  let parentData = parentDoc.data();

  const newSubQs = [
    { ...parentData.subQuestions[0], ...q7aData },
    { ...parentData.subQuestions[1], ...q7bData },
    { ...parentData.subQuestions[2], ...q7cData },
    { ...parentData.subQuestions[3], ...q7dData }
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
  console.log("Updated y9-11f-q7 parent and subquestions successfully.");
  process.exit(0);
}

run().catch(console.error);
