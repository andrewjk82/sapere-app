const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const path = './src/constants/seedDanebank2020SimilarQuestions.js';
let content = fs.readFileSync(path, 'utf8');

const match = content.match(/export const DANEBANK_2020_SIMILAR_QUESTIONS = (\[[\s\S]*?\]);\n/);
if (!match) throw new Error("Not found");

let questions = eval(match[1]);
const qIndex = questions.findIndex(x => x.id === 'dane2020s-q21b');
if (qIndex === -1) throw new Error("Question not found");

// Update graphData
questions[qIndex].graphData = {
  jsxGraph: {
    width: 400,
    height: 300,
    boundingbox: [-1.5, 20, 4, -5],
    script: "board.suspendUpdate();\n" +
            "board.create('arrow', [[-1.2,0],[3.5,0]], {strokeColor:'black'});\n" +
            "board.create('arrow', [[0,-3],[0,18]], {strokeColor:'black'});\n" +
            "var f=function(x){ return 8*Math.pow(x, 3) - 3*Math.pow(x, 4); };\n" +
            "board.create('functiongraph', [f, -0.9, 3.1], {strokeColor:'#1d4ed8',strokeWidth:2});\n" +
            "board.create('point', [0, 0], {name:'(0,0)', size:2, color:'red', label:{offset:[10,-10]}});\n" +
            "board.create('point', [8/3, 0], {name:'(8/3,0)', size:2, color:'red', label:{offset:[10,10]}});\n" +
            "board.create('point', [2, 16], {name:'Max(2, 16)', size:2, color:'purple', label:{offset:[-40,15]}});\n" +
            "board.create('point', [4/3, 256/27], {name:'POI(4/3, 256/27)', size:2, color:'green', label:{offset:[10,-15]}});\n" +
            "board.create('text', [3.3, -1.2, 'x'], {fontSize:13});\n" +
            "board.create('text', [0.2, 17, 'y'], {fontSize:13});\n" +
            "board.unsuspendUpdate();"
  }
};

// Rewrite solutionSteps with full calculus
questions[qIndex].solutionSteps = [
  {
    explanation: "Step 1: Differentiate \\(f(x)\\) to find the first derivative \\(f'(x)\\). Set it to \\(0\\) to locate the stationary points.",
    workingOut: "$$ \\begin{aligned} f'(x) &= 24x^2 - 12x^3 \\\\\\\\ 12x^2(2 - x) &= 0 \\implies x = 0 \\text{ or } x = 2 \\end{aligned} $$",
    graphData: null
  },
  {
    explanation: "Step 2: Differentiate again to find the second derivative \\(f''(x)\\). This helps classify the stationary points and identify potential points of inflection (POI).",
    workingOut: "$$ \\begin{aligned} f''(x) &= 48x - 36x^2 \\\\\\\\ 12x(4 - 3x) &= 0 \\implies x = 0 \\text{ or } x = \\dfrac{4}{3} \\end{aligned} $$",
    graphData: null
  },
  {
    explanation: "Step 3: Classify the stationary point at \\(x = 2\\) using the second derivative test, and calculate its \\(y\\)-coordinate.",
    workingOut: "$$ f''(2) = 12(2)(4 - 6) = -48 < 0 \\implies \\text{Local Maximum} \\\\\\\\ f(2) = 8(2)^3 - 3(2)^4 = 64 - 48 = 16 \\implies \\text{Max at } (2, 16) $$",
    graphData: null
  },
  {
    explanation: "Step 4: Classify the stationary point at \\(x = 0\\). Since \\(f'(0) = 0\\) and \\(f''(0) = 0\\), we check for a change in concavity using test points.",
    workingOut: "$$ \\begin{aligned} f''(-1) &= 12(-1)(4 + 3) = -84 < 0 \\quad (\\text{Concave down}) \\\\\\\\ f''(1) &= 12(1)(4 - 3) = 12 > 0 \\quad (\\text{Concave up}) \\end{aligned} $$ \n Since concavity changes, \\((0,0)\\) is a horizontal point of inflection.",
    graphData: null
  },
  {
    explanation: "Step 5: Verify the other potential POI at \\(x = 4/3\\). We check concavity around \\(x = 4/3\\).",
    workingOut: "$$ \\begin{aligned} f''(1) &= 12 > 0 \\quad (\\text{Concave up}) \\\\\\\\ f''(2) &= -48 < 0 \\quad (\\text{Concave down}) \\end{aligned} $$ \n Concavity changes, so \\(x = 4/3\\) is a non-horizontal POI. \\(f(4/3) = 256/27 \\approx 9.48\\), so the POI is at \\((4/3, 256/27)\\).",
    graphData: null
  },
  {
    explanation: "Step 6: Finally, find the \\(x\\) and \\(y\\) intercepts to complete the sketch.",
    workingOut: "$$ \\begin{aligned} y\\text{-intercept: } x=0 &\\implies y = 0 \\\\\\\\ x\\text{-intercepts: } 8x^3 - 3x^4 &= 0 \\implies x^3(8-3x) = 0 \\implies x = 0, \\; x = \\dfrac{8}{3} \\end{aligned} $$",
    graphData: questions[qIndex].graphData
  }
];

fs.writeFileSync(path, `export const DANEBANK_2020_SIMILAR_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`, 'utf8');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  await db.collection('questions').doc('dane2020s-q21b').update({
    solutionSteps: questions[qIndex].solutionSteps,
    graphData: questions[qIndex].graphData,
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.doc('sync_meta/questions').update({
    version: Date.now(),
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Successfully updated dane2020s-q21b with graph and full calculus explanation!');
  process.exit(0);
}
run();
