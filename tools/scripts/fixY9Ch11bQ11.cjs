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
  
  for (let i = 0; i < qOrig.length; i++) {
    const q = qOrig[i];
    if (q.id === 'y9-11b-q11a') {
      const correctOpt = "\\(M(0, 4), N(6, 8), P(6, 4)\\)";
      let newOpts = [
        correctOpt,
        "\\(M(0, 4), N(8, 6), P(4, 6)\\)",
        "\\(M(4, 0), N(6, 8), P(6, 4)\\)",
        "\\(M(0, 4), N(6, 4), P(6, 8)\\)"
      ];

      const shuffled = newOpts.map(value => ({ value, sort: Math.random() }))
                              .sort((a, b) => a.sort - b.sort)
                              .map(({ value }) => value);
      const newAnswerIndex = shuffled.indexOf(correctOpt);

      qOrig[i].opts = shuffled;
      qOrig[i].a = newAnswerIndex;
      qOrig[i].answer = newAnswerIndex.toString();
      qOrig[i].options = shuffled.map(opt => ({ text: opt, imageUrl: "" }));

      let jsxScript = `board.suspendUpdate();
board.create('arrow', [[-2, 0], [14, 0]], {strokeColor: 'black'});
board.create('arrow', [[0, -2], [0, 10]], {strokeColor: 'black'});
let pA = board.create('point', [0, 0], {name:'A(0, 0)', size:3, color:'red', label:{offset:[-15,-15]}});
let pB = board.create('point', [0, 8], {name:'B(0, 8)', size:3, color:'red', label:{offset:[-15,10]}});
let pC = board.create('point', [12, 8], {name:'C(12, 8)', size:3, color:'red', label:{offset:[5,10]}});
board.create('polygon', [pA, pB, pC], {fillColor:'rgba(255,0,0,0.1)', borders:{strokeColor:'red', strokeWidth:2}});

board.create('point', [0, 4], {name:'M(0, 4)', size:3, color:'green', label:{offset:[-35,0]}});
board.create('point', [6, 8], {name:'N(6, 8)', size:3, color:'green', label:{offset:[0,15]}});
board.create('point', [6, 4], {name:'P(6, 4)', size:3, color:'green', label:{offset:[5,-15]}});
board.create('polygon', [[0,4], [6,8], [6,4]], {fillColor:'rgba(0,255,0,0.2)', borders:{strokeColor:'green', dash:2}});
board.unsuspendUpdate();`;

      qOrig[i].solutionSteps = [
        {
          "explanation": "Step 1: Identify the coordinates of the vertices.",
          "workingOut": "\\(A(0, 0)\\), \\(B(0, 8)\\), \\(C(12, 8)\\)",
          "graphData": null
        },
        {
          "explanation": "Step 2: State the midpoint formula.",
          "workingOut": "\\( M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right) \\)",
          "graphData": null
        },
        {
          "explanation": "Step 3: Calculate the midpoint for each side.",
          "workingOut": `$$ \\begin{aligned} M_{AB} &= \\left(\\frac{0 + 0}{2}, \\frac{0 + 8}{2}\\right) = (0, 4) \\\\\\\\ N_{BC} &= \\left(\\frac{0 + 12}{2}, \\frac{8 + 8}{2}\\right) = (6, 8) \\\\\\\\ P_{CA} &= \\left(\\frac{12 + 0}{2}, \\frac{8 + 0}{2}\\right) = (6, 4) \\end{aligned} $$`,
          "graphData": null
        },
        {
          "explanation": "Step 4: State the final coordinates.",
          "workingOut": "\\(M(0, 4), N(6, 8), P(6, 4)\\)",
          "graphData": {
            "jsxGraph": {
              "width": 400,
              "height": 400,
              "boundingbox": [-3, 11, 14, -3],
              "boardOptions": { "axis": true, "grid": true },
              "script": jsxScript
            }
          }
        }
      ];

      batch.update(db.collection('questions').doc(qOrig[i].id), {
        opts: qOrig[i].opts,
        options: qOrig[i].options,
        a: qOrig[i].a,
        answer: qOrig[i].answer,
        solutionSteps: qOrig[i].solutionSteps,
        updatedAt: FieldValue.serverTimestamp()
      });
      updatedCount++;
    } else if (q.id === 'y9-11b-q11b') {
      const correctOpt = "\\((3, 6), (6, 6), (3, 4)\\)";
      let newOpts = [
        correctOpt,
        "\\((6, 3), (6, 6), (4, 3)\\)",
        "\\((3, 4), (6, 6), (3, 6)\\)",
        "\\((3, 6), (6, 4), (3, 4)\\)"
      ];

      const shuffled = newOpts.map(value => ({ value, sort: Math.random() }))
                              .sort((a, b) => a.sort - b.sort)
                              .map(({ value }) => value);
      const newAnswerIndex = shuffled.indexOf(correctOpt);

      qOrig[i].opts = shuffled;
      qOrig[i].a = newAnswerIndex;
      qOrig[i].answer = newAnswerIndex.toString();
      qOrig[i].options = shuffled.map(opt => ({ text: opt, imageUrl: "" }));

      let jsxScript = `board.suspendUpdate();
board.create('arrow', [[-2, 0], [14, 0]], {strokeColor: 'black'});
board.create('arrow', [[0, -2], [0, 10]], {strokeColor: 'black'});

board.create('polygon', [[0,0], [0,8], [12,8]], {fillColor:'transparent', borders:{strokeColor:'gray', dash:1}});

let pM = board.create('point', [0, 4], {name:'M(0, 4)', size:3, color:'green', label:{offset:[-35,0]}});
let pN = board.create('point', [6, 8], {name:'N(6, 8)', size:3, color:'green', label:{offset:[0,10]}});
let pP = board.create('point', [6, 4], {name:'P(6, 4)', size:3, color:'green', label:{offset:[10,-10]}});
board.create('polygon', [pM, pN, pP], {fillColor:'rgba(0,255,0,0.1)', borders:{strokeColor:'green', strokeWidth:2}});

board.create('point', [3, 6], {name:'(3, 6)', size:3, color:'blue', label:{offset:[-30,10]}});
board.create('point', [6, 6], {name:'(6, 6)', size:3, color:'blue', label:{offset:[10,0]}});
board.create('point', [3, 4], {name:'(3, 4)', size:3, color:'blue', label:{offset:[-10,-15]}});
board.create('polygon', [[3,6], [6,6], [3,4]], {fillColor:'rgba(0,0,255,0.2)', borders:{strokeColor:'blue', dash:2}});

board.unsuspendUpdate();`;

      qOrig[i].solutionSteps = [
        {
          "explanation": "Step 1: Identify the coordinates of the vertices of \\(\\Delta MNP\\) (from the previous part).",
          "workingOut": "\\(M(0, 4)\\), \\(N(6, 8)\\), \\(P(6, 4)\\)",
          "graphData": null
        },
        {
          "explanation": "Step 2: State the midpoint formula.",
          "workingOut": "\\( \\text{Midpoint} = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right) \\)",
          "graphData": null
        },
        {
          "explanation": "Step 3: Calculate the midpoint for each side of \\(\\Delta MNP\\).",
          "workingOut": `$$ \\begin{aligned} \\text{Midpoint of } MN &= \\left(\\frac{0 + 6}{2}, \\frac{4 + 8}{2}\\right) = (3, 6) \\\\\\\\ \\text{Midpoint of } NP &= \\left(\\frac{6 + 6}{2}, \\frac{8 + 4}{2}\\right) = (6, 6) \\\\\\\\ \\text{Midpoint of } PM &= \\left(\\frac{6 + 0}{2}, \\frac{4 + 4}{2}\\right) = (3, 4) \\end{aligned} $$`,
          "graphData": null
        },
        {
          "explanation": "Step 4: State the final coordinates of the midpoints.",
          "workingOut": "\\((3, 6), (6, 6), (3, 4)\\)",
          "graphData": {
            "jsxGraph": {
              "width": 400,
              "height": 400,
              "boundingbox": [-3, 11, 14, -3],
              "boardOptions": { "axis": true, "grid": true },
              "script": jsxScript
            }
          }
        }
      ];

      batch.update(db.collection('questions').doc(qOrig[i].id), {
        opts: qOrig[i].opts,
        options: qOrig[i].options,
        a: qOrig[i].a,
        answer: qOrig[i].answer,
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

  console.log(`Successfully updated ${updatedCount} questions (q11a and q11b)!`);
  process.exit(0);
}

run().catch(console.error);
