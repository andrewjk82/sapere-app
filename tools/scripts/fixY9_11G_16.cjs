const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  const parentText = "In triangle \\(ABC\\), the altitude through \\(A\\) is the line through \\(A\\) perpendicular to \\(BC\\). The coordinates of the vertices of the triangle are \\(A(1, 2)\\), \\(B(5, 8)\\), and \\(C(7, 0)\\). Answer the following sub-questions.";
  const title = "In triangle \\(ABC\\), the altitude through \\(A\\)...";
  
  const graphScript = `board.suspendUpdate();
board.create('arrow', [[-1,0],[9,0]], {strokeColor:'#94a3b8', strokeWidth:1.5});
board.create('arrow', [[0,-2],[0,10]], {strokeColor:'#94a3b8', strokeWidth:1.5});
board.create('text', [8.5, -0.5, 'x'], {fontSize:13, color:'#64748b'});
board.create('text', [0.2, 9.5, 'y'], {fontSize:13, color:'#64748b'});

board.create('point', [1, 2], {name:'A', size:3, color:'#ef4444', label:{offset:[-15,10]}});
board.create('point', [5, 8], {name:'B', size:3, color:'#ef4444', label:{offset:[-10,15]}});
board.create('point', [7, 0], {name:'C', size:3, color:'#ef4444', label:{offset:[10,-10]}});

board.create('segment', [[1,2], [5,8]], {strokeColor:'#6366f1', strokeWidth:2});
board.create('segment', [[5,8], [7,0]], {strokeColor:'#6366f1', strokeWidth:2});
board.create('segment', [[7,0], [1,2]], {strokeColor:'#6366f1', strokeWidth:2});

board.unsuspendUpdate();`;
  
  const parentGraphData = { jsxGraph: { width: 360, height: 320, boundingbox: [-1, 10, 9, -2], script: graphScript } };

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
    { text: '\\(y = -\\frac{2}{3}x + \\frac{14}{3}\\)', imageUrl: '' },
    { text: '\\(y = \\frac{2}{3}x - \\frac{14}{3}\\)', imageUrl: '' },
    { text: '\\(y = -\\frac{3}{2}x + \\frac{21}{2}\\)', imageUrl: '' },
    { text: '\\(y = \\frac{3}{2}x - \\frac{21}{2}\\)', imageUrl: '' }
  ];
  const aSteps = [
    { explanation: 'Find the gradient of $AB$.', workingOut: 'm_{AB} = \\frac{8 - 2}{5 - 1} = \\frac{6}{4} = \\frac{3}{2}' },
    { explanation: 'Determine the perpendicular gradient for the altitude.', workingOut: 'm_{\\perp} = -\\frac{2}{3}' },
    { explanation: 'Substitute the altitude gradient and point $C(7, 0)$ into the point-gradient formula.', workingOut: 'y - 0 = -\\frac{2}{3}(x - 7)' },
    { explanation: 'Expand to get the slope-intercept form.', workingOut: 'y = -\\frac{2}{3}x + \\frac{14}{3}' }
  ];
  const q16aData = buildQ({ id: 'y9-11g-q16a', type: 'multiple_choice', requiresManualGrading: false, question: 'a) Find the equation of the altitude through \\(C\\).' }, aOpts, 0, aSteps);

  const bOpts = [
    { text: '\\(y = -3x + 23\\)', imageUrl: '' },
    { text: '\\(y = -\\frac{1}{3}x + \\frac{29}{3}\\)', imageUrl: '' },
    { text: '\\(y = \\frac{1}{3}x + \\frac{19}{3}\\)', imageUrl: '' },
    { text: '\\(y = 3x - 7\\)', imageUrl: '' }
  ];
  const bSteps = [
    { explanation: 'Find the gradient of $AC$.', workingOut: 'm_{AC} = \\frac{0 - 2}{7 - 1} = -\\frac{2}{6} = -\\frac{1}{3}' },
    { explanation: 'Determine the perpendicular gradient for the altitude.', workingOut: 'm_{\\perp} = 3' },
    { explanation: 'Substitute the altitude gradient and point $B(5, 8)$ into the point-gradient formula.', workingOut: 'y - 8 = 3(x - 5)' },
    { explanation: 'Expand to get the slope-intercept form.', workingOut: 'y = 3x - 15 + 8 \\implies y = 3x - 7' }
  ];
  const q16bData = buildQ({ id: 'y9-11g-q16b', type: 'multiple_choice', requiresManualGrading: false, question: 'b) Find the equation of the altitude through \\(B\\).' }, bOpts, 3, bSteps);

  const cOpts = [
    { text: '\\(y = -\\frac{1}{4}x + \\frac{9}{4}\\)', imageUrl: '' },
    { text: '\\(y = \\frac{1}{4}x + \\frac{7}{4}\\)', imageUrl: '' },
    { text: '\\(y = 4x - 2\\)', imageUrl: '' },
    { text: '\\(y = -4x + 6\\)', imageUrl: '' }
  ];
  const cSteps = [
    { explanation: 'Find the gradient of $BC$.', workingOut: 'm_{BC} = \\frac{0 - 8}{7 - 5} = -4' },
    { explanation: 'Determine the perpendicular gradient for the altitude.', workingOut: 'm_{\\perp} = \\frac{1}{4}' },
    { explanation: 'Substitute the altitude gradient and point $A(1, 2)$ into the point-gradient formula.', workingOut: 'y - 2 = \\frac{1}{4}(x - 1)' },
    { explanation: 'Expand to get the slope-intercept form.', workingOut: 'y = \\frac{1}{4}x - \\frac{1}{4} + \\frac{8}{4} \\implies y = \\frac{1}{4}x + \\frac{7}{4}' }
  ];
  const q16cData = buildQ({ id: 'y9-11g-q16c', type: 'multiple_choice', requiresManualGrading: false, question: 'c) Find the equation of the altitude through \\(A\\).' }, cOpts, 1, cSteps);

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

  const allSubData = [q16aData, q16bData, q16cData];

  for (const q of allSubData) {
    batch.set(db.collection('questions').doc(q.id), { 
      ...baseDocInfo, 
      ...q, 
      question: parentText + '\n' + q.question 
    });
  }

  const parentRef = db.collection('questions').doc('y9-11g-q16');
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
  console.log("Updated q16 and its subquestions successfully.");
  process.exit(0);
}

run().catch(console.error);
