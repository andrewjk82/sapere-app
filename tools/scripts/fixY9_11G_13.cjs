const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  const graphScript = `board.suspendUpdate();
board.create('arrow', [[-1,0],[11,0]], {strokeColor:'#94a3b8', strokeWidth:1.5});
board.create('arrow', [[0,-1],[0,7]], {strokeColor:'#94a3b8', strokeWidth:1.5});
board.create('text', [10.5, -0.5, 'x'], {fontSize:13, color:'#64748b'});
board.create('text', [0.2, 6.5, 'y'], {fontSize:13, color:'#64748b'});

board.create('segment', [[2,1], [5,5]], {strokeColor:'#6366f1', strokeWidth:2});
board.create('segment', [[5,5], [9,2]], {strokeColor:'#6366f1', strokeWidth:2});
board.create('segment', [[9,2], [2,1]], {strokeColor:'#94a3b8', strokeWidth:1.5, strokeDasharray:'4 4'});

board.create('point', [2, 1], {name:'A', size:3, color:'#ef4444'});
board.create('point', [5, 5], {name:'B', size:3, color:'#ef4444'});
board.create('point', [9, 2], {name:'C', size:3, color:'#ef4444'});
board.unsuspendUpdate();`;
  
  const parentGraphData = { jsxGraph: { width: 360, height: 280, boundingbox: [-1, 7, 11, -1], script: graphScript } };

  // q13a
  const q13aData = {
    id: 'y9-11g-q13a',
    type: 'multiple_choice',
    requiresManualGrading: false,
    question: 'a) Find the gradient of \\(AB\\).',
    options: [
      { text: '\\(\\frac{4}{3}\\)', imageUrl: '' },
      { text: '\\(-\\frac{3}{4}\\)', imageUrl: '' },
      { text: '\\(\\frac{3}{4}\\)', imageUrl: '' },
      { text: '\\(-\\frac{4}{3}\\)', imageUrl: '' }
    ],
    answer: '0',
    solutionSteps: [
      { explanation: 'State the gradient formula.', workingOut: 'm = \\frac{y_2 - y_1}{x_2 - x_1}', graphData: null },
      { explanation: 'Substitute the coordinates of $A(2, 1)$ and $B(5, 5)$.', workingOut: 'm_{AB} = \\frac{5 - 1}{5 - 2}', graphData: null },
      { explanation: 'Simplify to find the gradient.', workingOut: 'm_{AB} = \\frac{4}{3}', graphData: null }
    ]
  };

  // q13b
  const q13bData = {
    id: 'y9-11g-q13b',
    type: 'multiple_choice',
    requiresManualGrading: false,
    question: 'b) Find the gradient of \\(BC\\).',
    options: [
      { text: '\\(-\\frac{3}{4}\\)', imageUrl: '' },
      { text: '\\(\\frac{4}{3}\\)', imageUrl: '' },
      { text: '\\(\\frac{3}{4}\\)', imageUrl: '' },
      { text: '\\(-\\frac{4}{3}\\)', imageUrl: '' }
    ],
    answer: '0',
    solutionSteps: [
      { explanation: 'State the gradient formula.', workingOut: 'm = \\frac{y_2 - y_1}{x_2 - x_1}', graphData: null },
      { explanation: 'Substitute the coordinates of $B(5, 5)$ and $C(9, 2)$.', workingOut: 'm_{BC} = \\frac{2 - 5}{9 - 5}', graphData: null },
      { explanation: 'Simplify to find the gradient.', workingOut: 'm_{BC} = \\frac{-3}{4} = -\\frac{3}{4}', graphData: null }
    ]
  };

  // q13c
  const q13cData = {
    id: 'y9-11g-q13c',
    type: 'multiple_choice',
    requiresManualGrading: false,
    question: 'c) Calculate the product of the gradients of \\(AB\\) and \\(BC\\).',
    options: [
      { text: '\\(-1\\)', imageUrl: '' },
      { text: '\\(1\\)', imageUrl: '' },
      { text: '\\(0\\)', imageUrl: '' },
      { text: '\\(-2\\)', imageUrl: '' }
    ],
    answer: '0',
    solutionSteps: [
      { explanation: 'Multiply the gradient of $AB$ by the gradient of $BC$.', workingOut: 'm_{AB} \\times m_{BC} = \\frac{4}{3} \\times \\left(-\\frac{3}{4}\\right)', graphData: null },
      { explanation: 'Simplify the multiplication.', workingOut: 'm_{AB} \\times m_{BC} = -1', graphData: null }
    ]
  };

  // q13d
  const q13dData = {
    id: 'y9-11g-q13d',
    type: 'multiple_choice',
    requiresManualGrading: false,
    question: 'd) What does this result tell us about \\(\\Delta ABC\\)?',
    options: [
      { text: '\\(Angle\\ B\\ is\\ a\\ right\\ angle\\ (90^\\circ).\\)', imageUrl: '' },
      { text: '\\(Angle\\ A\\ is\\ a\\ right\\ angle\\ (90^\\circ).\\)', imageUrl: '' },
      { text: '\\(Angle\\ C\\ is\\ a\\ right\\ angle\\ (90^\\circ).\\)', imageUrl: '' },
      { text: '\\(The\\ triangle\\ is\\ equilateral.\\)', imageUrl: '' }
    ],
    answer: '0',
    solutionSteps: [
      { explanation: 'Recall the condition for perpendicular lines.', workingOut: 'm_1 \\times m_2 = -1', graphData: null },
      { explanation: 'Since the product of gradients is -1, the lines are perpendicular.', workingOut: 'AB \\perp BC', graphData: null },
      { explanation: 'Therefore, the angle formed by these two lines is a right angle.', workingOut: '\\angle B = 90^\\circ', graphData: null }
    ]
  };

  // Create standalone docs
  const baseDocInfo = {
    chapterId: "y9-11",
    chapterTitle: "Chapter 11: Coordinate geometry",
    topicId: "y9-11g",
    topicCode: "11G",
    topicTitle: "Parallel and perpendicular straight lines",
    year: "Year 9",
    isManual: true,
    difficulty: "medium",
    timeLimit: 90,
    isActive: true,
    origin: "seed",
    updatedAt: FieldValue.serverTimestamp()
  };

  batch.set(db.collection('questions').doc('y9-11g-q13a'), { ...baseDocInfo, ...q13aData });
  batch.set(db.collection('questions').doc('y9-11g-q13b'), { ...baseDocInfo, ...q13bData });
  batch.set(db.collection('questions').doc('y9-11g-q13c'), { ...baseDocInfo, ...q13cData });
  batch.set(db.collection('questions').doc('y9-11g-q13d'), { ...baseDocInfo, ...q13dData });

  // Update parent
  const parentRef = db.collection('questions').doc('y9-11g-q13');
  const parentText = "Triangle \\(ABC\\) has vertices \\(A(2, 1)\\), \\(B(5, 5)\\) and \\(C(9, 2)\\). Answer the following sub-questions to show that \\(\\Delta ABC\\) is right-angled.";
  
  batch.update(parentRef, {
    type: 'teacher_review',
    question: parentText,
    solution: "",
    graphData: parentGraphData,
    subQuestions: [q13aData, q13bData, q13cData, q13dData],
    updatedAt: FieldValue.serverTimestamp()
  });

  await batch.commit();
  console.log("Updated q13 and created subquestions successfully.");
  process.exit(0);
}

run().catch(console.error);
