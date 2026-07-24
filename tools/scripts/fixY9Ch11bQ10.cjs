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
    if (q.id === 'y9-11b-q10') {
      const correctOpt = "\\(7 \\text{ or } -3\\)";
      let newOpts = [
        correctOpt,
        "\\(7 \\text{ or } 3\\)",
        "\\(-7 \\text{ or } 3\\)",
        "\\(5 \\text{ or } -1\\)"
      ];

      // Shuffle options
      const shuffled = newOpts.map(value => ({ value, sort: Math.random() }))
                              .sort((a, b) => a.sort - b.sort)
                              .map(({ value }) => value);
      const newAnswerIndex = shuffled.indexOf(correctOpt);

      qOrig[i].opts = shuffled;
      qOrig[i].a = newAnswerIndex;
      qOrig[i].answer = newAnswerIndex.toString();
      qOrig[i].options = shuffled.map(opt => ({ text: opt, imageUrl: "" }));

      // JSXGraph script
      let jsxScript = `board.suspendUpdate();
board.create('arrow', [[-5, 0], [10, 0]], {strokeColor: 'black'});
board.create('arrow', [[0, -2], [0, 13]], {strokeColor: 'black'});
board.create('point', [2, 5], {name:'A(2, 5)', size:3, color:'red', label:{offset:[5,10]}});
board.create('point', [2, 11], {name:'B(2, 11)', size:3, color:'red', label:{offset:[5,10]}});
board.create('segment', [[2, 5], [2, 11]], {strokeColor: 'blue', strokeWidth: 2});
board.create('point', [7, 7], {name:'C1(7, 7)', size:3, color:'green', label:{offset:[5,10]}});
board.create('point', [-3, 7], {name:'C2(-3, 7)', size:3, color:'green', label:{offset:[5,10]}});
board.create('polygon', [[2, 5], [2, 11], [7, 7]], {fillColor: 'rgba(0,0,255,0.1)', borders:{strokeColor:'blue', dash: 2}});
board.create('polygon', [[2, 5], [2, 11], [-3, 7]], {fillColor: 'rgba(255,0,0,0.1)', borders:{strokeColor:'red', dash: 2}});
board.unsuspendUpdate();`;

      qOrig[i].solutionSteps = [
        {
          "explanation": "Step 1: Identify that side \\(AB\\) is vertical.",
          "workingOut": "The vertices \\(A(2, 5)\\) and \\(B(2, 11)\\) lie on the vertical line \\(x = 2\\). Therefore, the base length is \\(AB = |11 - 5| = 6\\).",
          "graphData": null
        },
        {
          "explanation": "Step 2: Determine the height of the triangle \\(\\Delta ABC\\).",
          "workingOut": "The height of the triangle is the perpendicular distance from \\(C(a, 7)\\) to the line \\(x = 2\\), which is given by \\(h = |a - 2|\\).",
          "graphData": null
        },
        {
          "explanation": "Step 3: Use the area formula to set up an equation.",
          "workingOut": `$$ \\begin{aligned} \\text{Area} &= \\frac{1}{2} \\times \\text{base} \\times \\text{height} \\\\\\\\ 15 &= \\frac{1}{2} \\times 6 \\times |a - 2| \\\\\\\\ 15 &= 3|a - 2| \\implies |a - 2| = 5 \\end{aligned} $$`,
          "graphData": null
        },
        {
          "explanation": "Step 4: Solve the absolute value equation for \\(a\\).",
          "workingOut": `$$ \\begin{aligned} a - 2 &= 5 \\implies a = 7 \\\\\\\\ a - 2 &= -5 \\implies a = -3 \\end{aligned} $$ \nTherefore, the possible values are \\(7 \\text{ or } -3\\).`,
          "graphData": {
            "jsxGraph": {
              "width": 400,
              "height": 400,
              "boundingbox": [-5, 13, 10, -2],
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

  // Update sync metadata
  batch.update(db.doc('sync_meta/questions'), {
    version: Date.now(),
    updatedAt: FieldValue.serverTimestamp()
  });

  await batch.commit();

  fs.writeFileSync(pathOrig, `export const Y9_CH11B_QUESTIONS = ${JSON.stringify(qOrig, null, 2)};\n`, 'utf8');

  console.log(`Successfully updated y9-11b-q10!`);
  process.exit(0);
}

run().catch(console.error);
