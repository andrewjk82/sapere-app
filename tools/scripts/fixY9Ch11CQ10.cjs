const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const pathOrig = './src/constants/seedYear9Ch11CQuestions.js';
let contentOrig = fs.readFileSync(pathOrig, 'utf8');
const matchOrig = contentOrig.match(/export const Y9_CH11C_QUESTIONS = (\[[\s\S]*?\]);\n/);
let qOrig = eval(matchOrig[1]);

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();
  let updatedCount = 0;

  for (let i = 0; i < qOrig.length; i++) {
    const q = qOrig[i];
    
    if (q.id === 'y9-11c-q10') {
      qOrig[i].opts = [
        "\\\\(-\\\\frac{p}{q}\\\\)",
        "\\\\(\\\\frac{p}{q}\\\\)",
        "\\\\(-\\\\frac{q}{p}\\\\)",
        "\\\\(\\\\frac{q}{p}\\\\)"
      ];
      qOrig[i].a = 0;
      qOrig[i].answer = "0";
      qOrig[i].options = qOrig[i].opts.map(opt => ({ text: opt, imageUrl: "" }));
      
      qOrig[i].solutionSteps = [
        {
          explanation: "Step 1: Identify the coordinates of the two points.",
          workingOut: "Let $(x_1, y_1) = (0, p)$ and $(x_2, y_2) = (q, 0)$.",
          graphData: null
        },
        {
          explanation: "Step 2: State the formula for the gradient \\(m\\).",
          workingOut: "$$ m = \\frac{Rise}{Run} = \\frac{y_2 - y_1}{x_2 - x_1} $$",
          graphData: null
        },
        {
          explanation: "Step 3: Substitute the coordinates into the formula.",
          workingOut: "$$ m = \\frac{0 - p}{q - 0} $$",
          graphData: null
        },
        {
          explanation: "Step 4: Simplify the fraction to find the final gradient.",
          workingOut: "$$ m = \\frac{-p}{q} = -\\frac{p}{q} $$",
          graphData: {
            jsxGraph: {
              width: 400,
              height: 400,
              boundingbox: [-2, 6, 6, -2],
              boardOptions: { axis: true, grid: true },
              script: `board.suspendUpdate();
board.create('point', [0, 4], {name:'(0, p)', size:3, color:'red', label:{offset:[-35,10]}});
board.create('point', [4, 0], {name:'(q, 0)', size:3, color:'red', label:{offset:[10,10]}});
board.create('line', [[0, 4], [4, 0]], {strokeColor: 'blue', straightFirst: true, straightLast: true});
board.create('segment', [[0, 4], [4, 4]], {strokeColor: 'green', dash: 2});
board.create('segment', [[4, 4], [4, 0]], {strokeColor: 'orange', dash: 2});
board.unsuspendUpdate();`
            }
          }
        }
      ];
      
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

  if (updatedCount > 0) {
    batch.update(db.doc('sync_meta/questions'), {
      version: Date.now(),
      updatedAt: FieldValue.serverTimestamp()
    });
    await batch.commit();
    fs.writeFileSync(pathOrig, `export const Y9_CH11C_QUESTIONS = ${JSON.stringify(qOrig, null, 2)};\n`, 'utf8');
    console.log(`Successfully updated ${updatedCount} question(s)!`);
  }
  process.exit(0);
}

run().catch(console.error);
