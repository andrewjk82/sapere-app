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
    if (q.id === 'y9-11b-q12') {

      qOrig[i].type = "multiple_choice";
      
      const correctOpt = "\\(MN = OP = \\sqrt{61}, NO = PM = \\sqrt{2}\\); Parallelogram";
      let newOpts = [
        correctOpt,
        "\\(MN = OP = \\sqrt{61}, NO = PM = \\sqrt{2}\\); Rectangle",
        "\\(MN = OP = 61, NO = PM = 2\\); Parallelogram",
        "\\(MN = OP = \\sqrt{53}, NO = PM = \\sqrt{5}\\); Parallelogram"
      ];

      const shuffled = newOpts.map(value => ({ value, sort: Math.random() }))
                              .sort((a, b) => a.sort - b.sort)
                              .map(({ value }) => value);
      const newAnswerIndex = shuffled.indexOf(correctOpt);

      qOrig[i].opts = shuffled;
      qOrig[i].a = newAnswerIndex;
      qOrig[i].answer = newAnswerIndex.toString();
      qOrig[i].options = shuffled.map(opt => ({ text: opt, imageUrl: "" }));
      qOrig[i].requiresManualGrading = false;

      // Top level graph: Just the ABCD quadrilateral
      let questionGraph = `board.suspendUpdate();
board.create('arrow', [[-2, 0], [14, 0]], {strokeColor: 'black'});
board.create('arrow', [[0, -2], [0, 12]], {strokeColor: 'black'});
let pA = board.create('point', [0, 0], {name:'A(0, 0)', size:3, color:'red', label:{offset:[-20,-10]}});
let pB = board.create('point', [4, 8], {name:'B(4, 8)', size:3, color:'red', label:{offset:[-20,10]}});
let pC = board.create('point', [12, 10], {name:'C(12, 10)', size:3, color:'red', label:{offset:[10,10]}});
let pD = board.create('point', [2, 6], {name:'D(2, 6)', size:3, color:'red', label:{offset:[-20,-10]}});
board.create('polygon', [pA, pB, pC, pD], {fillColor:'rgba(255,0,0,0.05)', borders:{strokeColor:'red', strokeWidth:2}});
board.unsuspendUpdate();`;

      qOrig[i].graphData = {
        jsxGraph: {
          width: 400,
          height: 400,
          boundingbox: [-3, 13, 15, -3],
          boardOptions: { axis: false, grid: true },
          script: questionGraph
        }
      };

      // Solution Graph: Includes midpoints
      let solutionGraph = `board.suspendUpdate();
board.create('arrow', [[-2, 0], [14, 0]], {strokeColor: 'black'});
board.create('arrow', [[0, -2], [0, 12]], {strokeColor: 'black'});
let pA = board.create('point', [0, 0], {name:'A', size:2, color:'gray'});
let pB = board.create('point', [4, 8], {name:'B', size:2, color:'gray'});
let pC = board.create('point', [12, 10], {name:'C', size:2, color:'gray'});
let pD = board.create('point', [2, 6], {name:'D', size:2, color:'gray'});
board.create('polygon', [pA, pB, pC, pD], {fillColor:'rgba(255,0,0,0.05)', borders:{strokeColor:'gray', strokeWidth:1, dash:2}});

let pM = board.create('point', [2, 4], {name:'M(2, 4)', size:3, color:'blue', label:{offset:[-35,0]}});
let pN = board.create('point', [8, 9], {name:'N(8, 9)', size:3, color:'blue', label:{offset:[0,15]}});
let pO = board.create('point', [7, 8], {name:'O(7, 8)', size:3, color:'blue', label:{offset:[10,-10]}});
let pP = board.create('point', [1, 3], {name:'P(1, 3)', size:3, color:'blue', label:{offset:[-35,-5]}});
board.create('polygon', [pM, pN, pO, pP], {fillColor:'rgba(0,0,255,0.2)', borders:{strokeColor:'blue', strokeWidth:2}});
board.unsuspendUpdate();`;

      qOrig[i].solutionSteps = [
        {
          "explanation": "Step 1: Find the coordinates of the midpoints M, N, O, P.",
          "workingOut": `Using the midpoint formula \\( \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right) \\):
- \\(M\\) (midpoint of \\(AB\\)): \\( \\left(\\frac{0+4}{2}, \\frac{0+8}{2}\\right) = (2, 4) \\)
- \\(N\\) (midpoint of \\(BC\\)): \\( \\left(\\frac{4+12}{2}, \\frac{8+10}{2}\\right) = (8, 9) \\)
- \\(O\\) (midpoint of \\(CD\\)): \\( \\left(\\frac{12+2}{2}, \\frac{10+6}{2}\\right) = (7, 8) \\)
- \\(P\\) (midpoint of \\(DA\\)): \\( \\left(\\frac{2+0}{2}, \\frac{6+0}{2}\\right) = (1, 3) \\)`,
          "graphData": null
        },
        {
          "explanation": "Step 2: Calculate the lengths of the opposite sides \\(MN\\) and \\(OP\\).",
          "workingOut": `Using the distance formula \\( d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} \\):
$$ \\begin{aligned} MN &= \\sqrt{(8 - 2)^2 + (9 - 4)^2} = \\sqrt{6^2 + 5^2} = \\sqrt{36 + 25} = \\sqrt{61} \\\\\\\\ OP &= \\sqrt{(1 - 7)^2 + (3 - 8)^2} = \\sqrt{(-6)^2 + (-5)^2} = \\sqrt{36 + 25} = \\sqrt{61} \\end{aligned} $$
Thus, \\( MN = OP = \\sqrt{61} \\).`,
          "graphData": null
        },
        {
          "explanation": "Step 3: Calculate the lengths of the opposite sides \\(NO\\) and \\(PM\\).",
          "workingOut": `$$ \\begin{aligned} NO &= \\sqrt{(7 - 8)^2 + (8 - 9)^2} = \\sqrt{(-1)^2 + (-1)^2} = \\sqrt{1 + 1} = \\sqrt{2} \\\\\\\\ PM &= \\sqrt{(2 - 1)^2 + (4 - 3)^2} = \\sqrt{1^2 + 1^2} = \\sqrt{1 + 1} = \\sqrt{2} \\end{aligned} $$
Thus, \\( NO = PM = \\sqrt{2} \\).`,
          "graphData": null
        },
        {
          "explanation": "Step 4: Describe the quadrilateral.",
          "workingOut": "Since the opposite sides of the quadrilateral \\(MNOP\\) are equal in length (\\(MN = OP\\) and \\(NO = PM\\)), the quadrilateral is a **parallelogram**.",
          "graphData": {
            "jsxGraph": {
              "width": 400,
              "height": 400,
              "boundingbox": [-3, 13, 15, -3],
              "boardOptions": { "axis": false, "grid": true },
              "script": solutionGraph
            }
          }
        }
      ];

      batch.update(db.collection('questions').doc(qOrig[i].id), {
        type: qOrig[i].type,
        requiresManualGrading: qOrig[i].requiresManualGrading,
        opts: qOrig[i].opts,
        options: qOrig[i].options,
        a: qOrig[i].a,
        answer: qOrig[i].answer,
        solutionSteps: qOrig[i].solutionSteps,
        graphData: qOrig[i].graphData,
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

  console.log(`Successfully updated q12!`);
  process.exit(0);
}

run().catch(console.error);
