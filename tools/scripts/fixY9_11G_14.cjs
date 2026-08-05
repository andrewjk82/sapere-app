const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  const parentText = "Quadrilateral \\(ABCD\\) has vertices \\(A(1, -3)\\), \\(B(4, 1)\\), \\(C(8, -2)\\) and \\(D(5, -6)\\). Answer the following sub-questions to show that the diagonals \\(AC\\) and \\(BD\\) are perpendicular.";
  const title = "Quadrilateral \\(ABCD\\) has vertices \\(A(1, -3)\\)...";
  
  const graphScript = `board.suspendUpdate();
board.create('arrow', [[-1,0],[10,0]], {strokeColor:'#94a3b8', strokeWidth:1.5});
board.create('arrow', [[0,-8],[0,3]], {strokeColor:'#94a3b8', strokeWidth:1.5});
board.create('text', [9.5, -0.5, 'x'], {fontSize:13, color:'#64748b'});
board.create('text', [0.2, 2.5, 'y'], {fontSize:13, color:'#64748b'});

var pA = board.create('point', [1, -3], {name:'A', size:3, color:'#ef4444', label:{offset:[-15,-15]}});
var pB = board.create('point', [4, 1], {name:'B', size:3, color:'#ef4444', label:{offset:[-10,15]}});
var pC = board.create('point', [8, -2], {name:'C', size:3, color:'#ef4444', label:{offset:[10,10]}});
var pD = board.create('point', [5, -6], {name:'D', size:3, color:'#ef4444', label:{offset:[10,-15]}});

board.create('segment', [pA, pB], {strokeColor:'#6366f1', strokeWidth:2});
board.create('segment', [pB, pC], {strokeColor:'#6366f1', strokeWidth:2});
board.create('segment', [pC, pD], {strokeColor:'#6366f1', strokeWidth:2});
board.create('segment', [pD, pA], {strokeColor:'#6366f1', strokeWidth:2});

board.create('segment', [pA, pC], {strokeColor:'#10b981', strokeWidth:1.5, strokeDasharray:'4 4'});
board.create('segment', [pB, pD], {strokeColor:'#10b981', strokeWidth:1.5, strokeDasharray:'4 4'});

board.unsuspendUpdate();`;
  
  const parentGraphData = { jsxGraph: { width: 360, height: 320, boundingbox: [-1, 3, 10, -8], script: graphScript } };

  const q14aData = {
    id: 'y9-11g-q14a',
    type: 'multiple_choice',
    requiresManualGrading: false,
    question: 'a) Find the gradient of diagonal \\(AC\\).',
    options: [
      { text: '\\(7\\)', imageUrl: '' },
      { text: '\\(-\\frac{1}{7}\\)', imageUrl: '' },
      { text: '\\(\\frac{1}{7}\\)', imageUrl: '' }, // Ans: 2
      { text: '\\(-7\\)', imageUrl: '' }
    ],
    answer: '2',
    solutionSteps: [
      { explanation: 'State the gradient formula.', workingOut: 'm = \\frac{y_2 - y_1}{x_2 - x_1}', graphData: null },
      { explanation: 'Substitute the coordinates of $A(1, -3)$ and $C(8, -2)$.', workingOut: 'm_{AC} = \\frac{-2 - (-3)}{8 - 1}', graphData: null },
      { explanation: 'Simplify to find the gradient.', workingOut: 'm_{AC} = \\frac{1}{7}', graphData: null }
    ]
  };

  const q14bData = {
    id: 'y9-11g-q14b',
    type: 'multiple_choice',
    requiresManualGrading: false,
    question: 'b) Find the gradient of diagonal \\(BD\\).',
    options: [
      { text: '\\(-7\\)', imageUrl: '' }, // Ans: 0
      { text: '\\(-\\frac{1}{7}\\)', imageUrl: '' },
      { text: '\\(7\\)', imageUrl: '' },
      { text: '\\(\\frac{1}{7}\\)', imageUrl: '' }
    ],
    answer: '0',
    solutionSteps: [
      { explanation: 'State the gradient formula.', workingOut: 'm = \\frac{y_2 - y_1}{x_2 - x_1}', graphData: null },
      { explanation: 'Substitute the coordinates of $B(4, 1)$ and $D(5, -6)$.', workingOut: 'm_{BD} = \\frac{-6 - 1}{5 - 4}', graphData: null },
      { explanation: 'Simplify to find the gradient.', workingOut: 'm_{BD} = \\frac{-7}{1} = -7', graphData: null }
    ]
  };

  const q14cData = {
    id: 'y9-11g-q14c',
    type: 'multiple_choice',
    requiresManualGrading: false,
    question: 'c) Calculate the product of the gradients of \\(AC\\) and \\(BD\\).',
    options: [
      { text: '\\(1\\)', imageUrl: '' },
      { text: '\\(0\\)', imageUrl: '' },
      { text: '\\(-7\\)', imageUrl: '' },
      { text: '\\(-1\\)', imageUrl: '' } // Ans: 3
    ],
    answer: '3',
    solutionSteps: [
      { explanation: 'Multiply the gradient of $AC$ by the gradient of $BD$.', workingOut: 'm_{AC} \\times m_{BD} = \\frac{1}{7} \\times (-7)', graphData: null },
      { explanation: 'Simplify the multiplication.', workingOut: 'm_{AC} \\times m_{BD} = -1', graphData: null }
    ]
  };

  const q14dData = {
    id: 'y9-11g-q14d',
    type: 'multiple_choice',
    requiresManualGrading: false,
    question: 'd) What does this result tell us about the diagonals \\(AC\\) and \\(BD\\)?',
    options: [
      { text: '\\(They\\ are\\ parallel.\\)', imageUrl: '' },
      { text: '\\(They\\ are\\ perpendicular.\\)', imageUrl: '' }, // Ans: 1
      { text: '\\(They\\ bisect\\ each\\ other.\\)', imageUrl: '' },
      { text: '\\(They\\ are\\ equal\\ in\\ length.\\)', imageUrl: '' }
    ],
    answer: '1',
    solutionSteps: [
      { explanation: 'Recall the condition for perpendicular lines.', workingOut: 'm_1 \\times m_2 = -1', graphData: null },
      { explanation: 'Since the product of the gradients is -1, the lines are perpendicular.', workingOut: 'AC \\perp BD', graphData: null }
    ]
  };

  const baseDocInfo = {
    chapterId: "y9-11",
    chapterTitle: "Chapter 11: Coordinate geometry",
    topicId: "y9-11g",
    topicCode: "11G",
    topicTitle: "Parallel and perpendicular straight lines",
    year: "Year 9",
    isManual: true,
    difficulty: "hard",
    timeLimit: 120,
    isActive: true,
    origin: "seed",
    title: title,
    graphData: parentGraphData,
    updatedAt: FieldValue.serverTimestamp()
  };

  // Standalone docs
  batch.set(db.collection('questions').doc('y9-11g-q14a'), { ...baseDocInfo, ...q14aData, question: parentText + '\n' + q14aData.question });
  batch.set(db.collection('questions').doc('y9-11g-q14b'), { ...baseDocInfo, ...q14bData, question: parentText + '\n' + q14bData.question });
  batch.set(db.collection('questions').doc('y9-11g-q14c'), { ...baseDocInfo, ...q14cData, question: parentText + '\n' + q14cData.question });
  batch.set(db.collection('questions').doc('y9-11g-q14d'), { ...baseDocInfo, ...q14dData, question: parentText + '\n' + q14dData.question });

  // Update parent
  const parentRef = db.collection('questions').doc('y9-11g-q14');
  batch.update(parentRef, {
    requiresManualGrading: false,
    type: 'teacher_review',
    question: parentText,
    solution: "",
    solutionSteps: [], // clean parent steps
    graphData: parentGraphData,
    subQuestions: [q14aData, q14bData, q14cData, q14dData],
    updatedAt: FieldValue.serverTimestamp()
  });

  await batch.commit();
  console.log("Updated q14 and created subquestions successfully.");
  process.exit(0);
}

run().catch(console.error);
