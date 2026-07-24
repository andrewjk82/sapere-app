const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const pathOrig = './src/constants/seedYear9Ch11BQuestions.js';
let contentOrig = fs.readFileSync(pathOrig, 'utf8');
const matchOrig = contentOrig.match(/export const Y9_CH11B_QUESTIONS = (\[[\s\S]*?\]);\n/);
let qOrig = eval(matchOrig[1]);

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();
  let updatedCount = 0;
  
  const toFix = ['y9-11b-q4e', 'y9-11b-q4f', 'y9-11b-q4i', 'y9-11b-q4k', 'y9-11b-q5d'];

  for (let i = 0; i < qOrig.length; i++) {
    const q = qOrig[i];
    
    if (toFix.includes(q.id)) {
      if (q.id === 'y9-11b-q4e') {
        // Compare BC with MN
        // A(1, 2), B(5, 4), C(7, 0)
        // M = (3, 3), N = (4, 1)
        // BC = sqrt(4 + 16) = sqrt(20) = 2 sqrt(5)
        // MN = sqrt(1 + 4) = sqrt(5)
        // So BC = 2MN
        qOrig[i].opts = [
          "\\(BC = 2MN\\)",
          "\\(BC = MN\\)",
          "\\(BC = \\frac{1}{2}MN\\)",
          "\\(BC = 3MN\\)"
        ];
        qOrig[i].a = 0;
        qOrig[i].answer = "0";
        qOrig[i].options = qOrig[i].opts.map(opt => ({ text: opt, imageUrl: "" }));
        
        qOrig[i].solutionSteps = [
          {
            explanation: "Step 1: Find the coordinates of midpoints \\(M\\) and \\(N\\).",
            workingOut: `$$ \\begin{aligned} M &= \\left(\\frac{1+5}{2}, \\frac{2+4}{2}\\right) = (3, 3) \\\\\\\\ N &= \\left(\\frac{1+7}{2}, \\frac{2+0}{2}\\right) = (4, 1) \\end{aligned} $$`,
            graphData: null
          },
          {
            explanation: "Step 2: Calculate the length of \\(BC\\) using the distance formula.",
            workingOut: `$$ BC = \\sqrt{(7-5)^2 + (0-4)^2} = \\sqrt{2^2 + (-4)^2} = \\sqrt{4 + 16} = \\sqrt{20} = 2\\sqrt{5} $$`,
            graphData: null
          },
          {
            explanation: "Step 3: Calculate the length of \\(MN\\) using the distance formula.",
            workingOut: `$$ MN = \\sqrt{(4-3)^2 + (1-3)^2} = \\sqrt{1^2 + (-2)^2} = \\sqrt{1 + 4} = \\sqrt{5} $$`,
            graphData: null
          },
          {
            explanation: "Step 4: Compare \\(BC\\) and \\(MN\\).",
            workingOut: `Since \\(BC = 2\\sqrt{5}\\) and \\(MN = \\sqrt{5}\\), we have \\(BC = 2MN\\). This is a general property of triangles: the segment connecting the midpoints of two sides is half the length of the third side.`,
            graphData: {
              jsxGraph: {
                width: 400,
                height: 400,
                boundingbox: [-1, 6, 9, -2],
                boardOptions: { axis: true, grid: true },
                script: `board.suspendUpdate();
board.create('point', [1, 2], {name:'A(1,2)', size:3, color:'red', label:{offset:[-20,10]}});
board.create('point', [5, 4], {name:'B(5,4)', size:3, color:'red', label:{offset:[10,10]}});
board.create('point', [7, 0], {name:'C(7,0)', size:3, color:'red', label:{offset:[10,10]}});
board.create('point', [3, 3], {name:'M(3,3)', size:3, color:'blue', label:{offset:[-10,15]}});
board.create('point', [4, 1], {name:'N(4,1)', size:3, color:'blue', label:{offset:[-10,-15]}});
board.create('polygon', [[1,2], [5,4], [7,0]], {fillColor: 'none', borders: {strokeColor: 'black', strokeWidth: 1.5}});
board.create('segment', [[3,3], [4,1]], {strokeColor: 'blue', strokeWidth: 2, dash: 2});
board.unsuspendUpdate();`
              }
            }
          }
        ];
      } else if (q.id === 'y9-11b-q4f') {
        // "Show that the intervals BC and MN are parallel."
        qOrig[i].opts = [
          "Both have a gradient of \\(-2\\)",
          "Both have a gradient of \\(2\\)",
          "Both have a gradient of \\(\\frac{1}{2}\\)",
          "Both have a gradient of \\(-\\frac{1}{2}\\)"
        ];
        qOrig[i].a = 0;
        qOrig[i].answer = "0";
        qOrig[i].options = qOrig[i].opts.map(opt => ({ text: opt, imageUrl: "" }));
        
        qOrig[i].solutionSteps = [
          {
            explanation: "Step 1: Recall the condition for two lines to be parallel.",
            workingOut: `Two lines are parallel if and only if they have the same gradient (slope), $m_1 = m_2$. The gradient formula is $m = \\frac{y_2 - y_1}{x_2 - x_1}$.`,
            graphData: null
          },
          {
            explanation: "Step 2: Calculate the gradient of \\(BC\\).",
            workingOut: `Using $B(5, 4)$ and $C(7, 0)$:
$$ m_{BC} = \\frac{0 - 4}{7 - 5} = \\frac{-4}{2} = -2 $$`,
            graphData: null
          },
          {
            explanation: "Step 3: Calculate the gradient of \\(MN\\).",
            workingOut: `Using $M(3, 3)$ and $N(4, 1)$ (found previously):
$$ m_{MN} = \\frac{1 - 3}{4 - 3} = \\frac{-2}{1} = -2 $$`,
            graphData: null
          },
          {
            explanation: "Step 4: Conclude.",
            workingOut: `Since both $BC$ and $MN$ have the same gradient of $-2$, the intervals are parallel.`,
            graphData: null
          }
        ];
      } else if (q.id === 'y9-11b-q4i') {
        // Evaluate y9-11b-q4i
        // "Consider the three points P(3, 0), Q(5, 6) and R(11, 2). Let S and T be the midpoints of PR and QR respectively... Compare length PQ with length ST."
        // P(3,0), Q(5,6), R(11,2)
        // S = mid(PR) = (7, 1)
        // T = mid(QR) = (8, 4)
        // PQ = sqrt(4 + 36) = sqrt(40) = 2 sqrt(10)
        // ST = sqrt(1 + 9) = sqrt(10)
        qOrig[i].opts = [
          "\\(PQ = 2ST\\)",
          "\\(PQ = ST\\)",
          "\\(PQ = \\frac{1}{2}ST\\)",
          "\\(PQ = 3ST\\)"
        ];
        qOrig[i].a = 0;
        qOrig[i].answer = "0";
        qOrig[i].options = qOrig[i].opts.map(opt => ({ text: opt, imageUrl: "" }));
        
        qOrig[i].solutionSteps = [
          {
            explanation: "Step 1: Find the coordinates of midpoints \\(S\\) and \\(T\\).",
            workingOut: `$$ \\begin{aligned} S &= \\left(\\frac{3+11}{2}, \\frac{0+2}{2}\\right) = (7, 1) \\\\\\\\ T &= \\left(\\frac{5+11}{2}, \\frac{6+2}{2}\\right) = (8, 4) \\end{aligned} $$`,
            graphData: null
          },
          {
            explanation: "Step 2: Calculate the length of \\(PQ\\).",
            workingOut: `$$ PQ = \\sqrt{(5-3)^2 + (6-0)^2} = \\sqrt{2^2 + 6^2} = \\sqrt{4 + 36} = \\sqrt{40} = 2\\sqrt{10} $$`,
            graphData: null
          },
          {
            explanation: "Step 3: Calculate the length of \\(ST\\).",
            workingOut: `$$ ST = \\sqrt{(8-7)^2 + (4-1)^2} = \\sqrt{1^2 + 3^2} = \\sqrt{1 + 9} = \\sqrt{10} $$`,
            graphData: null
          },
          {
            explanation: "Step 4: Compare \\(PQ\\) and \\(ST\\).",
            workingOut: `Since \\(PQ = 2\\sqrt{10}\\) and \\(ST = \\sqrt{10}\\), we have \\(PQ = 2ST\\).`,
            graphData: {
              jsxGraph: {
                width: 400,
                height: 400,
                boundingbox: [1, 8, 13, -2],
                boardOptions: { axis: true, grid: true },
                script: `board.suspendUpdate();
board.create('point', [3, 0], {name:'P(3,0)', size:3, color:'red', label:{offset:[-20,-10]}});
board.create('point', [5, 6], {name:'Q(5,6)', size:3, color:'red', label:{offset:[10,10]}});
board.create('point', [11, 2], {name:'R(11,2)', size:3, color:'red', label:{offset:[10,10]}});
board.create('point', [7, 1], {name:'S(7,1)', size:3, color:'blue', label:{offset:[5,-15]}});
board.create('point', [8, 4], {name:'T(8,4)', size:3, color:'blue', label:{offset:[10,-10]}});
board.create('polygon', [[3,0], [5,6], [11,2]], {fillColor: 'none', borders: {strokeColor: 'black', strokeWidth: 1.5}});
board.create('segment', [[7,1], [8,4]], {strokeColor: 'blue', strokeWidth: 2, dash: 2});
board.unsuspendUpdate();`
              }
            }
          }
        ];
      } else if (q.id === 'y9-11b-q4k') {
        // "Show that the intervals PQ and ST are parallel."
        qOrig[i].opts = [
          "Both have a gradient of \\(3\\)",
          "Both have a gradient of \\(-3\\)",
          "Both have a gradient of \\(\\frac{1}{3}\\)",
          "Both have a gradient of \\(-\\frac{1}{3}\\)"
        ];
        qOrig[i].a = 0;
        qOrig[i].answer = "0";
        qOrig[i].options = qOrig[i].opts.map(opt => ({ text: opt, imageUrl: "" }));
        
        qOrig[i].solutionSteps = [
          {
            explanation: "Step 1: State the condition for parallel lines.",
            workingOut: `Two lines are parallel if they have the same gradient $m = \\frac{y_2 - y_1}{x_2 - x_1}$.`,
            graphData: null
          },
          {
            explanation: "Step 2: Find the gradient of \\(PQ\\).",
            workingOut: `Using $P(3, 0)$ and $Q(5, 6)$:
$$ m_{PQ} = \\frac{6 - 0}{5 - 3} = \\frac{6}{2} = 3 $$`,
            graphData: null
          },
          {
            explanation: "Step 3: Find the gradient of \\(ST\\).",
            workingOut: `Using $S(7, 1)$ and $T(8, 4)$:
$$ m_{ST} = \\frac{4 - 1}{8 - 7} = \\frac{3}{1} = 3 $$`,
            graphData: null
          },
          {
            explanation: "Step 4: Conclude.",
            workingOut: `Since both $PQ$ and $ST$ have the same gradient of $3$, the intervals are parallel.`,
            graphData: null
          }
        ];
      } else if (q.id === 'y9-11b-q5d') {
        // "Question 5: A(4, 5) and C(2, -3) are opposite vertices of a rhombus ABCD... Explain why B and D must lie on the line y = -1/4 x + 3/2"
        qOrig[i].opts = [
          "The diagonals of a rhombus are perpendicular bisectors of each other.",
          "The diagonals of a rhombus are equal in length.",
          "The diagonals of a rhombus are parallel to the sides.",
          "The diagonals of a rhombus do not intersect."
        ];
        qOrig[i].a = 0;
        qOrig[i].answer = "0";
        qOrig[i].options = qOrig[i].opts.map(opt => ({ text: opt, imageUrl: "" }));
        
        qOrig[i].solutionSteps = [
          {
            explanation: "Step 1: Recall the properties of the diagonals of a rhombus.",
            workingOut: `The diagonals of a rhombus are **perpendicular bisectors** of each other. This means diagonal $BD$ passes through the midpoint of $AC$ and is perpendicular to $AC$.`,
            graphData: null
          },
          {
            explanation: "Step 2: Find the midpoint of \\(AC\\).",
            workingOut: `Using $A(4, 5)$ and $C(2, -3)$:
$$ M = \\left(\\frac{4+2}{2}, \\frac{5-3}{2}\\right) = \\left(\\frac{6}{2}, \\frac{2}{2}\\right) = (3, 1) $$
The line $BD$ must pass through $(3, 1)$.`,
            graphData: null
          },
          {
            explanation: "Step 3: Find the gradient of \\(AC\\) and the perpendicular gradient.",
            workingOut: `$$ m_{AC} = \\frac{-3 - 5}{2 - 4} = \\frac{-8}{-2} = 4 $$
The gradient of $BD$ must be perpendicular to $AC$:
$$ m_{BD} = -\\frac{1}{m_{AC}} = -\\frac{1}{4} $$`,
            graphData: null
          },
          {
            explanation: "Step 4: Find the equation of the line \\(BD\\).",
            workingOut: `Using point-slope form $y - y_1 = m(x - x_1)$ with $M(3, 1)$ and $m = -1/4$:
$$ y - 1 = -\\frac{1}{4}(x - 3) $$
$$ y = -\\frac{1}{4}x + \\frac{3}{4} + 1 = -\\frac{1}{4}x + \\frac{7}{4} $$
*(Note: The question's prompt mentioned $y = -1/4 x + 3/2$, but the correct perpendicular bisector for A(4,5) and C(2,-3) is actually $y = -1/4 x + 7/4$.)*`,
            graphData: null
          }
        ];
      }

      batch.update(db.collection('questions').doc(qOrig[i].id), {
        opts: qOrig[i].opts,
        a: qOrig[i].a,
        answer: qOrig[i].answer,
        options: qOrig[i].options,
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

  console.log(`Successfully updated ${updatedCount} misc remaining questions!`);
  process.exit(0);
}

run().catch(console.error);
