const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const pathOrig = './src/constants/seedYear9Ch11BQuestions.js';
let contentOrig = fs.readFileSync(pathOrig, 'utf8');
const matchOrig = contentOrig.match(/export const Y9_CH11B_QUESTIONS = (\[[\s\S]*?\]);\n/);
let qOrig = eval(matchOrig[1]);

const overrides = {
  'y9-11b-q4a': {
    steps: [
      { explanation: "Step 1: Identify the coordinates of the endpoints for interval \\(AB\\).", workingOut: "$$ A(1, 2), \\; B(5, 4) $$", graphData: null },
      { explanation: "Step 2: State the midpoint formula.", workingOut: "\\( M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right) \\)", graphData: null },
      { explanation: "Step 3: Substitute the coordinates into the formula.", workingOut: "$$ M = \\left(\\frac{1 + 5}{2}, \\frac{2 + 4}{2}\\right) = \\left(\\frac{6}{2}, \\frac{6}{2}\\right) $$", graphData: null },
      { explanation: "Step 4: Simplify to find the final coordinates of \\(M\\).", workingOut: "$$ M(3, 3) $$", graphData: {
          jsxGraph: { width: 400, height: 400, boundingbox: [-1, 6, 9, -2], boardOptions: { axis: true, grid: true },
          script: `board.suspendUpdate(); board.create('point', [1, 2], {name:'A(1,2)', size:3, color:'red', label:{offset:[-20,10]}}); board.create('point', [5, 4], {name:'B(5,4)', size:3, color:'red', label:{offset:[10,10]}}); board.create('point', [3, 3], {name:'M(3,3)', size:3, color:'blue', label:{offset:[-10,15]}}); board.create('segment', [[1,2], [5,4]], {strokeColor: 'blue', dash: 2}); board.unsuspendUpdate();` }
        }
      }
    ]
  },
  'y9-11b-q4b': {
    steps: [
      { explanation: "Step 1: Identify the coordinates of the endpoints for interval \\(AC\\).", workingOut: "$$ A(1, 2), \\; C(7, 0) $$", graphData: null },
      { explanation: "Step 2: State the midpoint formula.", workingOut: "\\( N = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right) \\)", graphData: null },
      { explanation: "Step 3: Substitute the coordinates into the formula.", workingOut: "$$ N = \\left(\\frac{1 + 7}{2}, \\frac{2 + 0}{2}\\right) = \\left(\\frac{8}{2}, \\frac{2}{2}\\right) $$", graphData: null },
      { explanation: "Step 4: Simplify to find the final coordinates of \\(N\\).", workingOut: "$$ N(4, 1) $$", graphData: {
          jsxGraph: { width: 400, height: 400, boundingbox: [-1, 6, 9, -2], boardOptions: { axis: true, grid: true },
          script: `board.suspendUpdate(); board.create('point', [1, 2], {name:'A(1,2)', size:3, color:'red', label:{offset:[-20,10]}}); board.create('point', [7, 0], {name:'C(7,0)', size:3, color:'red', label:{offset:[10,10]}}); board.create('point', [4, 1], {name:'N(4,1)', size:3, color:'blue', label:{offset:[5,15]}}); board.create('segment', [[1,2], [7,0]], {strokeColor: 'blue', dash: 2}); board.unsuspendUpdate();` }
        }
      }
    ]
  },
  'y9-11b-q4c': {
    steps: [
      { explanation: "Step 1: Identify the coordinates of points \\(B\\) and \\(C\\).", workingOut: "$$ B(5, 4), \\; C(7, 0) $$", graphData: null },
      { explanation: "Step 2: State the distance formula.", workingOut: "\\( d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} \\)", graphData: null },
      { explanation: "Step 3: Substitute the coordinates into the formula.", workingOut: "$$ BC = \\sqrt{(7 - 5)^2 + (0 - 4)^2} = \\sqrt{2^2 + (-4)^2} $$", graphData: null },
      { explanation: "Step 4: Simplify the expression.", workingOut: "$$ BC = \\sqrt{4 + 16} = \\sqrt{20} = 2\\sqrt{5} $$", graphData: null }
    ]
  },
  'y9-11b-q4d': {
    steps: [
      { explanation: "Step 1: Identify the coordinates of midpoints \\(M\\) and \\(N\\) from previous parts.", workingOut: "$$ M(3, 3), \\; N(4, 1) $$", graphData: null },
      { explanation: "Step 2: State the distance formula.", workingOut: "\\( d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} \\)", graphData: null },
      { explanation: "Step 3: Substitute the coordinates into the formula.", workingOut: "$$ MN = \\sqrt{(4 - 3)^2 + (1 - 3)^2} = \\sqrt{1^2 + (-2)^2} $$", graphData: null },
      { explanation: "Step 4: Simplify the expression.", workingOut: "$$ MN = \\sqrt{1 + 4} = \\sqrt{5} $$", graphData: null }
    ]
  },
  'y9-11b-q5a': {
    steps: [
      { explanation: "Step 1: Identify the coordinates of the endpoints for diagonal \\(PR\\).", workingOut: "$$ P(1, 7), \\; R(5, 1) $$", graphData: null },
      { explanation: "Step 2: State the midpoint formula.", workingOut: "\\( M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right) \\)", graphData: null },
      { explanation: "Step 3: Substitute the coordinates into the formula.", workingOut: "$$ M = \\left(\\frac{1 + 5}{2}, \\frac{7 + 1}{2}\\right) = \\left(\\frac{6}{2}, \\frac{8}{2}\\right) $$", graphData: null },
      { explanation: "Step 4: Simplify to find the midpoint.", workingOut: "$$ (3, 4) $$", graphData: null }
    ]
  },
  'y9-11b-q5b': {
    steps: [
      { explanation: "Step 1: Identify the coordinates of the endpoints for diagonal \\(SQ\\).", workingOut: "$$ S(0, 2), \\; Q(6, 6) $$", graphData: null },
      { explanation: "Step 2: State the midpoint formula.", workingOut: "\\( M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right) \\)", graphData: null },
      { explanation: "Step 3: Substitute the coordinates into the formula.", workingOut: "$$ M = \\left(\\frac{0 + 6}{2}, \\frac{2 + 6}{2}\\right) = \\left(\\frac{6}{2}, \\frac{8}{2}\\right) $$", graphData: null },
      { explanation: "Step 4: Simplify to find the midpoint.", workingOut: "$$ (3, 4) $$", graphData: null }
    ]
  },
  'y9-11b-q5c': {
    // This is multiple choice question for a property
    opts: [
      "Diagonals bisect each other.",
      "Diagonals are equal in length.",
      "Diagonals are perpendicular.",
      "Diagonals do not intersect."
    ],
    answerStr: "0",
    steps: [
      { explanation: "Step 1: Compare the midpoints of the two diagonals \\(PR\\) and \\(SQ\\).", workingOut: "From the previous parts, the midpoint of \\(PR\\) is \\((3, 4)\\) and the midpoint of \\(SQ\\) is \\((3, 4)\\).", graphData: null },
      { explanation: "Step 2: Relate the mathematical result to geometric properties.", workingOut: "Since both diagonals have the exact same midpoint, they intersect at their mutual halfway point.", graphData: null },
      { explanation: "Step 3: Define this property.", workingOut: "When two line segments intersect at their midpoints, we say they bisect each other.", graphData: null },
      { explanation: "Step 4: Conclude.", workingOut: "This demonstrates the well-known property that the diagonals of a parallelogram bisect each other.", graphData: null }
    ]
  },
  'y9-11b-q6': {
    // Type is likely teacher_review or short_answer
    opts: [
      "\\((2, 3), (1, 1.5), (3, 4.5)\\)",
      "\\((1, 3), (2, 4), (3, 5)\\)",
      "\\((-1, -1.5), (5, 7.5), (6, 9)\\)",
      "None of the above"
    ],
    answerStr: "0",
    steps: [
      { explanation: "Step 1: Find the first midpoint between the original points \\((0, 0)\\) and \\((4, 6)\\).", workingOut: "$$ M_1 = \\left(\\frac{0+4}{2}, \\frac{0+6}{2}\\right) = (2, 3) $$", graphData: null },
      { explanation: "Step 2: Find a second point by taking the midpoint of \\((0, 0)\\) and \\((2, 3)\\).", workingOut: "$$ M_2 = \\left(\\frac{0+2}{2}, \\frac{0+3}{2}\\right) = (1, 1.5) $$", graphData: null },
      { explanation: "Step 3: Find a third point by taking the midpoint of \\((2, 3)\\) and \\((4, 6)\\).", workingOut: "$$ M_3 = \\left(\\frac{2+4}{2}, \\frac{3+6}{2}\\right) = (3, 4.5) $$", graphData: null },
      { explanation: "Step 4: List the three new points that lie on the line.", workingOut: "$$ (2, 3), (1, 1.5), (3, 4.5) $$", graphData: null }
    ]
  },
  'y9-11b-q7': {
    opts: [
      "\\((0, 1), (-1, -1), (1, 3)\\)",
      "\\((0, 1), (-1, 0), (1, 2)\\)",
      "\\((0, 1), (1, 1.5), (-1, 0.5)\\)",
      "None of the above"
    ],
    answerStr: "0",
    steps: [
      { explanation: "Step 1: Find the first midpoint between the original points \\((-2, -3)\\) and \\((2, 5)\\).", workingOut: "$$ M_1 = \\left(\\frac{-2+2}{2}, \\frac{-3+5}{2}\\right) = (0, 1) $$", graphData: null },
      { explanation: "Step 2: Find a second point by taking the midpoint of \\((-2, -3)\\) and \\((0, 1)\\).", workingOut: "$$ M_2 = \\left(\\frac{-2+0}{2}, \\frac{-3+1}{2}\\right) = (-1, -1) $$", graphData: null },
      { explanation: "Step 3: Find a third point by taking the midpoint of \\((0, 1)\\) and \\((2, 5)\\).", workingOut: "$$ M_3 = \\left(\\frac{0+2}{2}, \\frac{1+5}{2}\\right) = (1, 3) $$", graphData: null },
      { explanation: "Step 4: List the three new points that lie on the line.", workingOut: "$$ (0, 1), (-1, -1), (1, 3) $$", graphData: null }
    ]
  },
  'y9-11b-q8a': {
    steps: [
      { explanation: "Step 1: Identify coordinates for \\(A\\) and \\(C\\).", workingOut: "$$ A(-3, 2), \\; C(4, 3) $$", graphData: null },
      { explanation: "Step 2: State the midpoint formula.", workingOut: "\\( M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right) \\)", graphData: null },
      { explanation: "Step 3: Substitute and compute.", workingOut: "$$ M = \\left(\\frac{-3 + 4}{2}, \\frac{2 + 3}{2}\\right) = \\left(\\frac{1}{2}, \\frac{5}{2}\\right) $$", graphData: null },
      { explanation: "Step 4: Final coordinates.", workingOut: "$$ (0.5, 2.5) $$", graphData: null }
    ]
  },
  'y9-11b-q8b': {
    steps: [
      { explanation: "Step 1: Identify coordinates for \\(B\\) and \\(M\\).", workingOut: "$$ B(-2, 5), \\; M(0.5, 2.5) $$", graphData: null },
      { explanation: "Step 2: State the distance formula.", workingOut: "\\( d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} \\)", graphData: null },
      { explanation: "Step 3: Substitute the coordinates.", workingOut: "$$ BM = \\sqrt{(0.5 - (-2))^2 + (2.5 - 5)^2} = \\sqrt{2.5^2 + (-2.5)^2} $$", graphData: null },
      { explanation: "Step 4: Simplify.", workingOut: "$$ BM = \\sqrt{6.25 + 6.25} = \\sqrt{12.5} = \\frac{5\\sqrt{2}}{2} $$", graphData: null }
    ]
  },
  'y9-11b-q8c': {
    opts: [
      "\\(AM = BM = CM = \\sqrt{12.5}\\)",
      "\\(AM = BM = CM = 5\\)",
      "\\(AM = BM = CM = 12.5\\)",
      "None of the above"
    ],
    answerStr: "0",
    steps: [
      { explanation: "Step 1: Recall the coordinates.", workingOut: "$$ A(-3, 2), \\; B(-2, 5), \\; C(4, 3), \\; M(0.5, 2.5) $$", graphData: null },
      { explanation: "Step 2: Calculate \\(AM\\).", workingOut: "$$ AM = \\sqrt{(0.5 - (-3))^2 + (2.5 - 2)^2} = \\sqrt{3.5^2 + 0.5^2} = \\sqrt{12.25 + 0.25} = \\sqrt{12.5} $$", graphData: null },
      { explanation: "Step 3: Calculate \\(CM\\).", workingOut: "$$ CM = \\sqrt{(0.5 - 4)^2 + (2.5 - 3)^2} = \\sqrt{(-3.5)^2 + (-0.5)^2} = \\sqrt{12.25 + 0.25} = \\sqrt{12.5} $$", graphData: null },
      { explanation: "Step 4: Compare lengths.", workingOut: "From earlier, \\(BM = \\sqrt{12.5}\\). Thus, \\(AM = BM = CM = \\sqrt{12.5}\\).", graphData: null }
    ]
  },
  'y9-11b-q9a': {
    opts: [
      "\\(M(2, 5), N(5, 5)\\)",
      "\\(M(5, 2), N(5, 5)\\)",
      "\\(M(2, 5), N(3, 5)\\)",
      "None of the above"
    ],
    answerStr: "0",
    steps: [
      { explanation: "Step 1: Identify coordinates.", workingOut: "$$ A(1, 2), \\; B(3, 8), \\; C(7, 2) $$", graphData: null },
      { explanation: "Step 2: Find \\(M\\), midpoint of \\(AB\\).", workingOut: "$$ M = \\left(\\frac{1+3}{2}, \\frac{2+8}{2}\\right) = \\left(\\frac{4}{2}, \\frac{10}{2}\\right) = (2, 5) $$", graphData: null },
      { explanation: "Step 3: Find \\(N\\), midpoint of \\(BC\\).", workingOut: "$$ N = \\left(\\frac{3+7}{2}, \\frac{8+2}{2}\\right) = \\left(\\frac{10}{2}, \\frac{10}{2}\\right) = (5, 5) $$", graphData: null },
      { explanation: "Step 4: State final answer.", workingOut: "$$ M(2, 5), \\; N(5, 5) $$", graphData: null }
    ]
  },
  'y9-11b-q9b': {
    opts: [
      "\\(BC = 2\\sqrt{13}, MP = \\sqrt{13}; \\; AB = 2\\sqrt{10}, PN = \\sqrt{10}\\)",
      "Cannot be determined",
      "None of the above",
      "Not enough information"
    ],
    answerStr: "0",
    steps: [
      { explanation: "Step 1: Find \\(P\\), midpoint of \\(AC\\).", workingOut: "$$ P = \\left(\\frac{1+7}{2}, \\frac{2+2}{2}\\right) = (4, 2) $$", graphData: null },
      { explanation: "Step 2: Calculate lengths \\(BC\\) and \\(MP\\).", workingOut: "$$ \\begin{aligned} BC &= \\sqrt{(7-3)^2 + (2-8)^2} = \\sqrt{16 + 36} = \\sqrt{52} = 2\\sqrt{13} \\\\\\\\ MP &= \\sqrt{(4-2)^2 + (2-5)^2} = \\sqrt{4 + 9} = \\sqrt{13} \\end{aligned} $$ \nThus \\(BC = 2MP\\).", graphData: null },
      { explanation: "Step 3: Calculate lengths \\(AB\\) and \\(PN\\).", workingOut: "$$ \\begin{aligned} AB &= \\sqrt{(3-1)^2 + (8-2)^2} = \\sqrt{4 + 36} = \\sqrt{40} = 2\\sqrt{10} \\\\\\\\ PN &= \\sqrt{(5-4)^2 + (5-2)^2} = \\sqrt{1 + 9} = \\sqrt{10} \\end{aligned} $$ \nThus \\(AB = 2PN\\).", graphData: null },
      { explanation: "Step 4: Conclude.", workingOut: "We have shown that \\(BC = 2MP\\) and \\(AB = 2PN\\), satisfying the Midpoint Theorem.", graphData: null }
    ]
  }
};

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();
  let updatedCount = 0;
  
  for (let i = 0; i < qOrig.length; i++) {
    const q = qOrig[i];
    
    if (overrides[q.id]) {
      const data = overrides[q.id];
      qOrig[i].solutionSteps = data.steps;

      // Ensure question is multiple_choice if options are provided
      if (data.opts) {
        qOrig[i].type = 'multiple_choice';
        qOrig[i].requiresManualGrading = false;
        
        // Randomize the opts array while tracking correct answer
        let correctOpt = data.opts[parseInt(data.answerStr)];
        let newOpts = [...data.opts];
        
        const shuffled = newOpts.map(value => ({ value, sort: Math.random() }))
                                .sort((a, b) => a.sort - b.sort)
                                .map(({ value }) => value);
        const newAnswerIndex = shuffled.indexOf(correctOpt);
        
        qOrig[i].opts = shuffled;
        qOrig[i].a = newAnswerIndex;
        qOrig[i].answer = newAnswerIndex.toString();
        qOrig[i].options = shuffled.map(opt => ({ text: opt, imageUrl: "" }));
      }

      batch.update(db.collection('questions').doc(qOrig[i].id), {
        type: qOrig[i].type,
        requiresManualGrading: qOrig[i].requiresManualGrading,
        opts: qOrig[i].opts || [],
        a: qOrig[i].a || 0,
        answer: qOrig[i].answer || "0",
        options: qOrig[i].options || [],
        solutionSteps: qOrig[i].solutionSteps,
        updatedAt: FieldValue.serverTimestamp()
      });
      updatedCount++;
    }
  }

  batch.update(db.doc('sync_meta/questions'), {
    version: Date.now(),
    updatedAt: FieldValue.serverTimestamp()
  });

  await batch.commit();

  fs.writeFileSync(pathOrig, `export const Y9_CH11B_QUESTIONS = ${JSON.stringify(qOrig, null, 2)};\n`, 'utf8');

  console.log(`Successfully updated ${updatedCount} remaining questions!`);
  process.exit(0);
}

run().catch(console.error);
