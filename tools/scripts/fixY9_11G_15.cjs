const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  const parentText = "The coordinates of the vertices of \\(\\Delta PQR\\) are \\(P(2, -3)\\), \\(Q(4, 5)\\), and \\(R(8, -1)\\). Answer the following sub-questions.";
  const title = "The coordinates of the vertices of \\(\\Delta PQR\\)...";
  
  const graphScript = `board.suspendUpdate();
board.create('arrow', [[-1,0],[10,0]], {strokeColor:'#94a3b8', strokeWidth:1.5});
board.create('arrow', [[0,-5],[0,7]], {strokeColor:'#94a3b8', strokeWidth:1.5});
board.create('text', [9.5, -0.5, 'x'], {fontSize:13, color:'#64748b'});
board.create('text', [0.2, 6.5, 'y'], {fontSize:13, color:'#64748b'});

var pP = board.create('point', [2, -3], {name:'P', size:3, color:'#ef4444', label:{offset:[-15,-15]}});
var pQ = board.create('point', [4, 5], {name:'Q', size:3, color:'#ef4444', label:{offset:[-10,15]}});
var pR = board.create('point', [8, -1], {name:'R', size:3, color:'#ef4444', label:{offset:[10,-10]}});

board.create('segment', [pP, pQ], {strokeColor:'#6366f1', strokeWidth:2});
board.create('segment', [pQ, pR], {strokeColor:'#6366f1', strokeWidth:2});
board.create('segment', [pR, pP], {strokeColor:'#6366f1', strokeWidth:2});
board.unsuspendUpdate();`;
  
  const parentGraphData = { jsxGraph: { width: 360, height: 320, boundingbox: [-1, 7, 10, -5], script: graphScript } };

  const buildQ = (qData, options, answerIdx, steps, sub) => {
    return {
      ...qData,
      options: options,
      answer: answerIdx.toString(),
      solutionSteps: steps.map(s => ({ ...s, graphData: null })),
      graphData: null
    };
  };

  const aOpts = [
    { text: '\\((3, 2)\\)', imageUrl: '' },
    { text: '\\((3, 1)\\)', imageUrl: '' },
    { text: '\\((4, 1)\\)', imageUrl: '' },
    { text: '\\((2, 1)\\)', imageUrl: '' }
  ];
  const aSteps = [
    { explanation: 'State the midpoint formula.', workingOut: 'M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)' },
    { explanation: 'Substitute the coordinates of $P(2, -3)$ and $Q(4, 5)$.', workingOut: 'S = \\left(\\frac{2 + 4}{2}, \\frac{-3 + 5}{2}\\right)' },
    { explanation: 'Simplify to find the coordinates.', workingOut: 'S = \\left(\\frac{6}{2}, \\frac{2}{2}\\right) = (3, 1)' }
  ];
  const q15aData = buildQ({ id: 'y9-11g-q15a', type: 'multiple_choice', requiresManualGrading: false, question: 'a) Find the coordinates of \\(S\\), the midpoint of \\(PQ\\).' }, aOpts, 1, aSteps);

  const bOpts = [
    { text: '\\(0.4\\)', imageUrl: '' },
    { text: '\\(-2.5\\)', imageUrl: '' },
    { text: '\\(2.5\\)', imageUrl: '' },
    { text: '\\(-0.4\\)', imageUrl: '' }
  ];
  const bSteps = [
    { explanation: 'State the gradient formula.', workingOut: 'm = \\frac{y_2 - y_1}{x_2 - x_1}' },
    { explanation: 'Substitute the coordinates of $S(3, 1)$ and $R(8, -1)$.', workingOut: 'm_{SR} = \\frac{-1 - 1}{8 - 3}' },
    { explanation: 'Simplify to find the gradient as a decimal.', workingOut: 'm_{SR} = \\frac{-2}{5} = -0.4' }
  ];
  const q15bData = buildQ({ id: 'y9-11g-q15b', type: 'multiple_choice', requiresManualGrading: false, question: 'b) Find the gradient of \\(SR\\).' }, bOpts, 3, bSteps);

  const cOpts = [
    { text: '\\(y = \\frac{2}{5}x + \\frac{11}{5}\\)', imageUrl: '' },
    { text: '\\(y = -\\frac{5}{2}x + \\frac{2}{5}\\)', imageUrl: '' },
    { text: '\\(y = -\\frac{2}{5}x + \\frac{11}{5}\\)', imageUrl: '' },
    { text: '\\(y = \\frac{5}{2}x - 2\\)', imageUrl: '' }
  ];
  const cSteps = [
    { explanation: 'State the point-gradient formula.', workingOut: 'y - y_1 = m(x - x_1)' },
    { explanation: 'Substitute the gradient $m = -\\frac{2}{5}$ and point $S(3, 1)$.', workingOut: 'y - 1 = -\\frac{2}{5}(x - 3)' },
    { explanation: 'Expand the right side.', workingOut: 'y - 1 = -\\frac{2}{5}x + \\frac{6}{5}' },
    { explanation: 'Solve for $y$ to get the slope-intercept form.', workingOut: 'y = -\\frac{2}{5}x + \\frac{6}{5} + \\frac{5}{5} \\implies y = -\\frac{2}{5}x + \\frac{11}{5}' }
  ];
  const q15cData = buildQ({ id: 'y9-11g-q15c', type: 'multiple_choice', requiresManualGrading: false, question: 'c) Find the equation of the line \\(SR\\).' }, cOpts, 2, cSteps);

  const dOpts = [
    { text: '\\(y = \\frac{5}{4}x - \\frac{11}{2}; \\quad y = -7x + 33\\)', imageUrl: '' },
    { text: '\\(y = \\frac{4}{5}x + \\frac{1}{2}; \\quad y = 7x - 3\\)', imageUrl: '' },
    { text: '\\(y = -\\frac{5}{4}x + 11; \\quad y = -7x - 33\\)', imageUrl: '' },
    { text: '\\(y = -\\frac{4}{5}x + 2; \\quad y = 7x + 33\\)', imageUrl: '' }
  ];
  const dSteps = [
    { explanation: 'Find the midpoint $T$ of $QR$ and the equation of median $PT$.', workingOut: 'T = \\left(\\frac{4+8}{2}, \\frac{5-1}{2}\\right) = (6, 2) \\\\ m_{PT} = \\frac{2 - (-3)}{6 - 2} = \\frac{5}{4} \\\\ y - 2 = \\frac{5}{4}(x - 6) \\implies y = \\frac{5}{4}x - \\frac{11}{2}' },
    { explanation: 'Find the midpoint $U$ of $PR$ and the equation of median $QU$.', workingOut: 'U = \\left(\\frac{2+8}{2}, \\frac{-3-1}{2}\\right) = (5, -2) \\\\ m_{QU} = \\frac{-2 - 5}{5 - 4} = -7 \\\\ y - 5 = -7(x - 4) \\implies y = -7x + 33' }
  ];
  const q15dData = buildQ({ id: 'y9-11g-q15d', type: 'multiple_choice', requiresManualGrading: false, question: 'd) Find the equations of the other two medians of the triangle.' }, dOpts, 0, dSteps);

  const eOpts = [
    { text: '\\(4\\)', imageUrl: '' },
    { text: '\\(-4\\)', imageUrl: '' },
    { text: '\\(\\frac{1}{4}\\)', imageUrl: '' },
    { text: '\\(-\\frac{1}{4}\\)', imageUrl: '' }
  ];
  const eSteps = [
    { explanation: 'State the gradient formula.', workingOut: 'm = \\frac{y_2 - y_1}{x_2 - x_1}' },
    { explanation: 'Substitute the coordinates of $P(2, -3)$ and $Q(4, 5)$.', workingOut: 'm_{PQ} = \\frac{5 - (-3)}{4 - 2}' },
    { explanation: 'Simplify to find the gradient.', workingOut: 'm_{PQ} = \\frac{8}{2} = 4' }
  ];
  const q15eData = buildQ({ id: 'y9-11g-q15e', type: 'multiple_choice', requiresManualGrading: false, question: 'e) Find the gradient of \\(PQ\\).' }, eOpts, 0, eSteps);

  const fOpts = [
    { text: '\\(y = 4x - 11\\)', imageUrl: '' },
    { text: '\\(y = \\frac{1}{4}x + \\frac{1}{4}\\)', imageUrl: '' },
    { text: '\\(y = -\\frac{1}{4}x + \\frac{7}{4}\\)', imageUrl: '' },
    { text: '\\(y = -4x + 13\\)', imageUrl: '' }
  ];
  const fSteps = [
    { explanation: 'Determine the perpendicular gradient to $PQ$.', workingOut: 'm_{\\perp} = -\\frac{1}{4}' },
    { explanation: 'Use the midpoint of $PQ$, which is $S(3, 1)$ from part a).', workingOut: 'y - y_1 = m(x - x_1) \\implies y - 1 = -\\frac{1}{4}(x - 3)' },
    { explanation: 'Expand and rearrange into slope-intercept form.', workingOut: 'y = -\\frac{1}{4}x + \\frac{3}{4} + \\frac{4}{4} \\implies y = -\\frac{1}{4}x + \\frac{7}{4}' }
  ];
  const q15fData = buildQ({ id: 'y9-11g-q15f', type: 'multiple_choice', requiresManualGrading: false, question: 'f) Find the equation of the perpendicular bisector of \\(PQ\\).' }, fOpts, 2, fSteps);

  const gOpts = [
    { text: '\\(y = -\\frac{3}{2}x + 11\\)', imageUrl: '' },
    { text: '\\(y = \\frac{2}{3}x - 2\\)', imageUrl: '' },
    { text: '\\(y = -\\frac{2}{3}x + 6\\)', imageUrl: '' },
    { text: '\\(y = \\frac{3}{2}x - 7\\)', imageUrl: '' }
  ];
  const gSteps = [
    { explanation: 'Find the midpoint and gradient of $QR$.', workingOut: 'T = (6, 2), \\quad m_{QR} = \\frac{-1 - 5}{8 - 4} = -\\frac{3}{2}' },
    { explanation: 'Determine the perpendicular gradient.', workingOut: 'm_{\\perp} = \\frac{2}{3}' },
    { explanation: 'Substitute into the point-gradient formula.', workingOut: 'y - 2 = \\frac{2}{3}(x - 6)' },
    { explanation: 'Expand and rearrange into slope-intercept form.', workingOut: 'y = \\frac{2}{3}x - 4 + 2 \\implies y = \\frac{2}{3}x - 2' }
  ];
  const q15gData = buildQ({ id: 'y9-11g-q15g', type: 'multiple_choice', requiresManualGrading: false, question: 'g) Find the equation of the perpendicular bisector of the side \\(QR\\).' }, gOpts, 1, gSteps);

  const hOpts = [
    { text: '\\(y = 3x - 17\\)', imageUrl: '' },
    { text: '\\(y = \\frac{1}{3}x - \\frac{11}{3}\\)', imageUrl: '' },
    { text: '\\(y = -\\frac{1}{3}x - \\frac{1}{3}\\)', imageUrl: '' },
    { text: '\\(y = -3x + 13\\)', imageUrl: '' }
  ];
  const hSteps = [
    { explanation: 'Find the midpoint and gradient of $PR$.', workingOut: 'U = (5, -2), \\quad m_{PR} = \\frac{-1 - (-3)}{8 - 2} = \\frac{1}{3}' },
    { explanation: 'Determine the perpendicular gradient.', workingOut: 'm_{\\perp} = -3' },
    { explanation: 'Substitute into the point-gradient formula.', workingOut: 'y - (-2) = -3(x - 5)' },
    { explanation: 'Expand and rearrange into slope-intercept form.', workingOut: 'y + 2 = -3x + 15 \\implies y = -3x + 13' }
  ];
  const q15hData = buildQ({ id: 'y9-11g-q15h', type: 'multiple_choice', requiresManualGrading: false, question: 'h) Find the equation of the perpendicular bisector of the side \\(PR\\).' }, hOpts, 3, hSteps);

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

  const allSubData = [q15aData, q15bData, q15cData, q15dData, q15eData, q15fData, q15gData, q15hData];

  for (const q of allSubData) {
    batch.set(db.collection('questions').doc(q.id), { 
      ...baseDocInfo, 
      ...q, 
      question: parentText + '\n' + q.question 
    });
  }

  const parentRef = db.collection('questions').doc('y9-11g-q15');
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
  console.log("Updated q15 and its 8 subquestions successfully.");
  process.exit(0);
}

run().catch(console.error);
