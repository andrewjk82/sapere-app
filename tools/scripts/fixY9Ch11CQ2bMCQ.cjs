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
    if (qOrig[i].id === 'y9-11c-q2b') {
      qOrig[i].type = 'multiple_choice';
      qOrig[i].requiresManualGrading = false;
      
      const shuffledOpts = [
        "\\\\(-1\\\\)",
        "\\\\(-\\\\frac{1}{3}\\\\)",
        "\\\\(\\\\frac{1}{3}\\\\)",
        "\\\\(1\\\\)"
      ];
      
      qOrig[i].opts = shuffledOpts;
      qOrig[i].a = 3; // since "\\(1\\)" is at index 3
      qOrig[i].answer = "3";
      qOrig[i].options = shuffledOpts.map(opt => ({ text: opt, imageUrl: "" }));
      
      // Update solution steps
      qOrig[i].solutionSteps = [
        {
          explanation: "Step 1: Identify the coordinates of two points on the line.",
          workingOut: "From the graph, we can see the $x$-intercept is $(-3, 0)$ and the $y$-intercept is $(0, 3)$.",
          graphData: null
        },
        {
          explanation: "Step 2: State the formula for the gradient \\(m\\).",
          workingOut: "$$ m = \\frac{Rise}{Run} = \\frac{y_2 - y_1}{x_2 - x_1} $$",
          graphData: null
        },
        {
          explanation: "Step 3: Substitute the coordinates into the formula.",
          workingOut: "$$ m = \\frac{3 - 0}{0 - (-3)} = \\frac{3}{3} $$",
          graphData: null
        },
        {
          explanation: "Step 4: Simplify the fraction to find the final gradient.",
          workingOut: "$$ m = 1 $$",
          graphData: {
            jsxGraph: {
              width: 300,
              height: 300,
              boundingbox: [-5, 5, 2, -2],
              boardOptions: { axis: true, grid: true },
              script: `board.suspendUpdate();
board.create('line', [[-3, 0], [0, 3]], {strokeColor: 'blue', strokeWidth: 1.5});
board.create('point', [-3, 0], {size: 3, color: 'red', name: '(-3, 0)', label: {offset: [-15, -15]}});
board.create('point', [0, 3], {size: 3, color: 'red', name: '(0, 3)', label: {offset: [-40, 0]}});
board.create('segment', [[-3, 0], [0, 0]], {strokeColor: 'green', dash: 2, name: 'Run=3', withLabel: true});
board.create('segment', [[0, 0], [0, 3]], {strokeColor: 'orange', dash: 2, name: 'Rise=3', withLabel: true});
board.unsuspendUpdate();`
            }
          }
        }
      ];

      batch.update(db.collection('questions').doc(qOrig[i].id), {
        type: 'multiple_choice',
        requiresManualGrading: false,
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
