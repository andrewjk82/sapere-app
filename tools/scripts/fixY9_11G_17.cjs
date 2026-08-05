const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  const parentText = "Adjacent vertices of a square \\(ABCD\\) are \\(A(4, 5)\\) and \\(B(5, 7)\\). Answer the following sub-questions.";
  const title = "Adjacent vertices of a square \\(ABCD\\) are \\(A(4, 5)\\)...";
  
  const graphScript = `board.suspendUpdate();
board.create('arrow', [[2,3],[9,3]], {strokeColor:'#94a3b8', strokeWidth:1.5});
board.create('arrow', [[3,2],[3,9]], {strokeColor:'#94a3b8', strokeWidth:1.5});
board.create('text', [8.5, 2.5, 'x'], {fontSize:13, color:'#64748b'});
board.create('text', [3.2, 8.5, 'y'], {fontSize:13, color:'#64748b'});

board.create('point', [4, 5], {name:'A', size:3, color:'#ef4444', label:{offset:[-15,-15]}});
board.create('point', [5, 7], {name:'B', size:3, color:'#ef4444', label:{offset:[-10,15]}});
board.create('point', [7, 6], {name:'C', size:3, color:'#ef4444', label:{offset:[15,10]}});
board.create('point', [6, 4], {name:'D', size:3, color:'#ef4444', label:{offset:[15,-15]}});

board.create('segment', [[4,5], [5,7]], {strokeColor:'#6366f1', strokeWidth:2});
board.create('segment', [[5,7], [7,6]], {strokeColor:'#6366f1', strokeWidth:2});
board.create('segment', [[7,6], [6,4]], {strokeColor:'#6366f1', strokeWidth:2});
board.create('segment', [[6,4], [4,5]], {strokeColor:'#6366f1', strokeWidth:2});

board.unsuspendUpdate();`;
  
  const parentGraphData = { jsxGraph: { width: 360, height: 320, boundingbox: [2, 9, 9, 2], script: graphScript } };

  const buildQ = (qData, options, answerIdx, steps) => {
    return {
      ...qData,
      options: options,
      answer: answerIdx.toString(),
      solutionSteps: steps.map(s => ({ ...s, graphData: null })),
      graphData: null
    };
  };

  const aOpts = [
    { text: '\\(\\sqrt{3}\\)', imageUrl: '' },
    { text: '\\(5\\)', imageUrl: '' },
    { text: '\\(\\sqrt{5}\\)', imageUrl: '' },
    { text: '\\(3\\)', imageUrl: '' }
  ];
  const aSteps = [
    { explanation: 'State the distance formula.', workingOut: 'd = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}' },
    { explanation: 'Substitute coordinates for A(4, 5) and B(5, 7).', workingOut: 'd_{AB} = \\sqrt{(5 - 4)^2 + (7 - 5)^2}' },
    { explanation: 'Simplify the expression under the square root.', workingOut: 'd_{AB} = \\sqrt{1^2 + 2^2} = \\sqrt{1 + 4} = \\sqrt{5}' }
  ];
  const q17aData = buildQ({ id: 'y9-11g-q17a', type: 'multiple_choice', requiresManualGrading: false, question: 'a) Find the length of each side of the square.' }, aOpts, 2, aSteps);

  const bOpts = [
    { text: '\\(2\\)', imageUrl: '' },
    { text: '\\(-2\\)', imageUrl: '' },
    { text: '\\(\\frac{1}{2}\\)', imageUrl: '' },
    { text: '\\(-\\frac{1}{2}\\)', imageUrl: '' }
  ];
  const bSteps = [
    { explanation: 'State the gradient formula.', workingOut: 'm = \\frac{y_2 - y_1}{x_2 - x_1}' },
    { explanation: 'Substitute coordinates for A(4, 5) and B(5, 7).', workingOut: 'm_{AB} = \\frac{7 - 5}{5 - 4}' },
    { explanation: 'Simplify the fraction.', workingOut: 'm_{AB} = \\frac{2}{1} = 2' }
  ];
  const q17bData = buildQ({ id: 'y9-11g-q17b', type: 'multiple_choice', requiresManualGrading: false, question: 'b) Find the gradient of \\(AB\\).' }, bOpts, 0, bSteps);

  const cOpts = [
    { text: '\\(-2\\)', imageUrl: '' },
    { text: '\\(\\frac{1}{2}\\)', imageUrl: '' },
    { text: '\\(-\\frac{1}{2}\\)', imageUrl: '' },
    { text: '\\(2\\)', imageUrl: '' }
  ];
  const cSteps = [
    { explanation: 'Recognise that adjacent sides of a square are perpendicular.', workingOut: 'BC \\perp AB' },
    { explanation: 'State the relationship between perpendicular gradients.', workingOut: 'm_1 \\times m_2 = -1' },
    { explanation: 'Find the negative reciprocal of the gradient of AB.', workingOut: 'm_{BC} = -\\frac{1}{2}' }
  ];
  const q17cData = buildQ({ id: 'y9-11g-q17c', type: 'multiple_choice', requiresManualGrading: false, question: 'c) Find the gradient of \\(BC\\).' }, cOpts, 2, cSteps);

  const dOpts = [
    { text: '\\(4\\)', imageUrl: '' },
    { text: '\\(6\\)', imageUrl: '' },
    { text: '\\(-1\\)', imageUrl: '' },
    { text: '\\(7\\)', imageUrl: '' }
  ];
  const dSteps = [
    { explanation: 'Set up an expression for the gradient of BC using B(5, 7) and C(7, c).', workingOut: 'm_{BC} = \\frac{c - 7}{7 - 5} = \\frac{c - 7}{2}' },
    { explanation: 'Equate this expression to the known gradient of BC from part c).', workingOut: '\\frac{c - 7}{2} = -\\frac{1}{2}' },
    { explanation: 'Multiply both sides by 2.', workingOut: 'c - 7 = -1' },
    { explanation: 'Solve for c.', workingOut: 'c = 6' }
  ];
  const q17dData = buildQ({ id: 'y9-11g-q17d', type: 'multiple_choice', requiresManualGrading: false, question: 'd) The coordinates of \\(C\\) are \\((7, c)\\). Find the value of \\(c\\).' }, dOpts, 1, dSteps);

  const eOpts = [
    { text: '\\((4, 6)\\)', imageUrl: '' },
    { text: '\\((7, 3)\\)', imageUrl: '' },
    { text: '\\((6, 4)\\)', imageUrl: '' },
    { text: '\\((5, 5)\\)', imageUrl: '' }
  ];
  const eSteps = [
    { explanation: 'Determine the translation vector from B(5, 7) to C(7, 6).', workingOut: '\\vec{BC} = (7 - 5, 6 - 7) = (2, -1)' },
    { explanation: 'Recognise that in a square, the translation from A to D is identical to B to C.', workingOut: '\\vec{AD} = \\vec{BC} = (2, -1)' },
    { explanation: 'Apply the translation vector to point A(4, 5).', workingOut: 'D = A + (2, -1) = (4 + 2, 5 - 1)' },
    { explanation: 'Calculate final coordinates.', workingOut: 'D = (6, 4)' }
  ];
  const q17eData = buildQ({ id: 'y9-11g-q17e', type: 'multiple_choice', requiresManualGrading: false, question: 'e) Find the coordinates of \\(D\\).' }, eOpts, 2, eSteps);

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

  const allSubData = [q17aData, q17bData, q17cData, q17dData, q17eData];

  for (const q of allSubData) {
    batch.set(db.collection('questions').doc(q.id), { 
      ...baseDocInfo, 
      ...q, 
      question: parentText + '\n' + q.question 
    });
  }

  const parentRef = db.collection('questions').doc('y9-11g-q17');
  batch.update(parentRef, {
    requiresManualGrading: false,
    type: 'teacher_review',
    question: parentText,
    solution: "",
    solutionSteps: [], // clean parent steps
    graphData: parentGraphData,
    subQuestions: allSubData,
    updatedAt: FieldValue.serverTimestamp()
  });

  await batch.commit();
  console.log("Updated q17 and its subquestions successfully.");
  process.exit(0);
}

run().catch(console.error);
