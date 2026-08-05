const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  // Fix q10
  const q10Steps = [
    { explanation: 'State the rule for perpendicular gradients.', workingOut: 'm_1 \\times m_2 = -1', graphData: null },
    { explanation: 'Substitute the gradients from the given lines.', workingOut: '(a + 2) \\times 3 = -1', graphData: null },
    { explanation: 'Solve the equation for $a$.', workingOut: 'a + 2 = -\\frac{1}{3} \\\\ a = -2 - \\frac{1}{3} \\\\ a = -\\frac{7}{3}', graphData: null }
  ];
  batch.update(db.collection('questions').doc('y9-11g-q10'), { solutionSteps: q10Steps, updatedAt: FieldValue.serverTimestamp() });

  // Fix q11
  const q11Steps = [
    { explanation: 'State the rule for perpendicular gradients.', workingOut: 'm_1 \\times m_2 = -1', graphData: null },
    { explanation: 'Substitute the gradients from the given lines.', workingOut: '(3a + 1) \\times 2 = -1', graphData: null },
    { explanation: 'Solve the equation for $a$.', workingOut: '3a + 1 = -\\frac{1}{2} \\\\ 3a = -\\frac{3}{2} \\\\ a = -\\frac{1}{2}', graphData: null }
  ];
  batch.update(db.collection('questions').doc('y9-11g-q11'), { solutionSteps: q11Steps, updatedAt: FieldValue.serverTimestamp() });

  // Fix q12
  const q12Graph = `board.suspendUpdate();
board.create('arrow', [[-2,0],[10,0]], {strokeColor:'#94a3b8', strokeWidth:1.5});
board.create('arrow', [[0,-2],[0,14]], {strokeColor:'#94a3b8', strokeWidth:1.5});
board.create('text', [9.5, -0.5, 'x'], {fontSize:13, color:'#64748b'});
board.create('text', [0.2, 13.5, 'y'], {fontSize:13, color:'#64748b'});
board.create('point', [3, 4], {name:'A', size:3, color:'#ef4444'});
board.create('point', [7, 12], {name:'B', size:3, color:'#ef4444'});
board.create('segment', [[3,4],[7,12]], {strokeColor:'#94a3b8', strokeWidth:1.5});
board.create('point', [5, 8], {name:'C', size:3, color:'#10b981', label:{offset:[10,-10]}});
board.create('functiongraph', [function(x){ return -0.5*x + 10.5; }], {strokeColor:'#6366f1', strokeWidth:2});
board.unsuspendUpdate();`;
  const q12GraphObj = { jsxGraph: { width: 360, height: 360, boundingbox: [-2, 14, 10, -2], script: q12Graph } };

  const q12aData = {
    type: 'multiple_choice',
    requiresManualGrading: false,
    options: [
      { text: '\\(2\\)', imageUrl: '' },
      { text: '\\(1/2\\)', imageUrl: '' },
      { text: '\\(-2\\)', imageUrl: '' },
      { text: '\\(-1/2\\)', imageUrl: '' }
    ],
    answer: '0',
    solutionSteps: [
      { explanation: 'State the gradient formula.', workingOut: 'm = \\frac{y_2 - y_1}{x_2 - x_1}', graphData: null },
      { explanation: 'Substitute the coordinates of $A(3, 4)$ and $B(7, 12)$.', workingOut: 'm = \\frac{12 - 4}{7 - 3}', graphData: null },
      { explanation: 'Simplify to find the gradient.', workingOut: 'm = \\frac{8}{4} = 2', graphData: null }
    ]
  };

  const q12bData = {
    type: 'multiple_choice',
    requiresManualGrading: false,
    options: [
      { text: '\\((4, 8)\\)', imageUrl: '' },
      { text: '\\((5, 8)\\)', imageUrl: '' },
      { text: '\\((2, 4)\\)', imageUrl: '' },
      { text: '\\((10, 16)\\)', imageUrl: '' }
    ],
    answer: '1',
    solutionSteps: [
      { explanation: 'State the midpoint formula.', workingOut: 'C = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)', graphData: null },
      { explanation: 'Substitute the coordinates of $A(3, 4)$ and $B(7, 12)$.', workingOut: 'C = \\left(\\frac{3 + 7}{2}, \\frac{4 + 12}{2}\\right)', graphData: null },
      { explanation: 'Simplify to find the coordinates.', workingOut: 'C = \\left(\\frac{10}{2}, \\frac{16}{2}\\right) = (5, 8)', graphData: null }
    ]
  };

  const q12cData = {
    type: 'multiple_choice',
    requiresManualGrading: false,
    options: [
      { text: '\\(y = -2x + 18\\)', imageUrl: '' },
      { text: '\\(y = -\\frac{1}{2}x + \\frac{21}{2}\\)', imageUrl: '' },
      { text: '\\(y = 2x - 2\\)', imageUrl: '' },
      { text: '\\(y = \\frac{1}{2}x + \\frac{11}{2}\\)', imageUrl: '' }
    ],
    answer: '1',
    solutionSteps: [
      { explanation: 'Find the perpendicular gradient.', workingOut: 'm_{\\perp} = -\\frac{1}{m_{AB}} = -\\frac{1}{2}', graphData: null },
      { explanation: 'State the point-gradient formula.', workingOut: 'y - y_1 = m(x - x_1)', graphData: null },
      { explanation: 'Substitute the perpendicular gradient and midpoint $C(5, 8)$.', workingOut: 'y - 8 = -\\frac{1}{2}(x - 5)', graphData: null },
      { explanation: 'Expand and rearrange.', workingOut: 'y - 8 = -\\frac{1}{2}x + \\frac{5}{2} \\\\ y = -\\frac{1}{2}x + \\frac{21}{2}', graphData: null }
    ]
  };

  const q12dData = {
    type: 'multiple_choice',
    requiresManualGrading: false,
    options: [
      { text: '\\(10.5\\)', imageUrl: '' },
      { text: '\\(-10.5\\)', imageUrl: '' },
      { text: '\\(8.5\\)', imageUrl: '' },
      { text: '\\(21\\)', imageUrl: '' }
    ],
    answer: '0',
    solutionSteps: [
      { explanation: 'Identify the $y$-intercept from the equation $y = mx + c$.', workingOut: 'c = \\frac{21}{2}', graphData: null },
      { explanation: 'Convert to a decimal or leave as fraction.', workingOut: '\\frac{21}{2} = 10.5', graphData: null }
    ]
  };

  batch.update(db.collection('questions').doc('y9-11g-q12a'), { ...q12aData, updatedAt: FieldValue.serverTimestamp() });
  batch.update(db.collection('questions').doc('y9-11g-q12b'), { ...q12bData, updatedAt: FieldValue.serverTimestamp() });
  batch.update(db.collection('questions').doc('y9-11g-q12c'), { ...q12cData, updatedAt: FieldValue.serverTimestamp() });
  batch.update(db.collection('questions').doc('y9-11g-q12d'), { ...q12dData, updatedAt: FieldValue.serverTimestamp() });

  const parentRef = db.collection('questions').doc('y9-11g-q12');
  const parentDoc = await parentRef.get();
  let parentData = parentDoc.data();
  const newSubQs = [
    { ...parentData.subQuestions[0], ...q12aData },
    { ...parentData.subQuestions[1], ...q12bData },
    { ...parentData.subQuestions[2], ...q12cData },
    { ...parentData.subQuestions[3], ...q12dData }
  ];
  newSubQs.forEach(sq => delete sq.updatedAt);
  batch.update(parentRef, { subQuestions: newSubQs, solution: "", graphData: q12GraphObj, updatedAt: FieldValue.serverTimestamp() });

  await batch.commit();
  console.log("Updated q10, q11, q12 successfully.");
  process.exit(0);
}

run().catch(console.error);
