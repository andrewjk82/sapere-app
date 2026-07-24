const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const path = './src/constants/seedDanebank2020Questions.js';
let content = fs.readFileSync(path, 'utf8');

const match = content.match(/export const DANEBANK_2020_QUESTIONS = (\[[\s\S]*?\]);\n/);
if (!match) throw new Error("Not found");

let questions = eval(match[1]);
const qIndex = questions.findIndex(x => x.id === 'dane2020-q21b');
if (qIndex === -1) throw new Error("Question not found");

// Update graphData
questions[qIndex].graphData = {
  jsxGraph: {
    width: 400,
    height: 300,
    boundingbox: [-2, 35, 5, -10],
    script: "board.suspendUpdate();\n" +
            "board.create('arrow', [[-1.5,0],[4.8,0]], {strokeColor:'black'});\n" +
            "board.create('arrow', [[0,-5],[0,33]], {strokeColor:'black'});\n" +
            "var f=function(x){ return 4*Math.pow(x, 3) - Math.pow(x, 4); };\n" +
            "board.create('functiongraph', [f, -1.2, 4.2], {strokeColor:'#1d4ed8',strokeWidth:2});\n" +
            "board.create('point', [0, 0], {name:'(0,0)', size:2, color:'red', label:{offset:[10,-10]}});\n" +
            "board.create('point', [4, 0], {name:'(4,0)', size:2, color:'red', label:{offset:[10,10]}});\n" +
            "board.create('point', [3, 27], {name:'Max(3, 27)', size:2, color:'purple', label:{offset:[-30,15]}});\n" +
            "board.create('point', [2, 16], {name:'POI(2, 16)', size:2, color:'green', label:{offset:[10,-15]}});\n" +
            "board.create('text', [4.5, -2, 'x'], {fontSize:13});\n" +
            "board.create('text', [0.3, 31, 'y'], {fontSize:13});\n" +
            "board.unsuspendUpdate();"
  }
};

// Rewrite solutionSteps with full calculus
questions[qIndex].solutionSteps = [
  {
    explanation: "Step 1: Differentiate \\(f(x)\\) to find the first derivative \\(f'(x)\\). Set it to \\(0\\) to locate the stationary points (turning points or horizontal points of inflection).",
    workingOut: "$$ \\begin{aligned} f'(x) &= 12x^2 - 4x^3 \\\\\\\\ 4x^2(3 - x) &= 0 \\implies x = 0 \\text{ or } x = 3 \\end{aligned} $$",
    graphData: null
  },
  {
    explanation: "Step 2: Differentiate again to find the second derivative \\(f''(x)\\). This helps classify the stationary points and identify potential points of inflection (POI).",
    workingOut: "$$ \\begin{aligned} f''(x) &= 24x - 12x^2 \\\\\\\\ 12x(2 - x) &= 0 \\implies x = 0 \\text{ or } x = 2 \\end{aligned} $$",
    graphData: null
  },
  {
    explanation: "Step 3: Classify the stationary point at \\(x = 3\\) using the second derivative test, and calculate its \\(y\\)-coordinate.",
    workingOut: "$$ f''(3) = 12(3)(2 - 3) = -36 < 0 \\implies \\text{Local Maximum} \\\\\\\\ f(3) = 4(3)^3 - (3)^4 = 108 - 81 = 27 \\implies \\text{Max at } (3, 27) $$",
    graphData: null
  },
  {
    explanation: "Step 4: Classify the stationary point at \\(x = 0\\). Since \\(f'(0) = 0\\) and \\(f''(0) = 0\\), we check for a change in concavity using test points.",
    workingOut: "$$ \\begin{aligned} f''(-1) &= 12(-1)(3) = -36 < 0 \\quad (\\text{Concave down}) \\\\\\\\ f''(1) &= 12(1)(1) = 12 > 0 \\quad (\\text{Concave up}) \\end{aligned} $$ \n Since concavity changes, \\((0,0)\\) is a horizontal point of inflection.",
    graphData: null
  },
  {
    explanation: "Step 5: Verify the other potential POI at \\(x = 2\\). We check concavity around \\(x=2\\).",
    workingOut: "$$ \\begin{aligned} f''(1) &= 12 > 0 \\quad (\\text{Concave up}) \\\\\\\\ f''(3) &= -36 < 0 \\quad (\\text{Concave down}) \\end{aligned} $$ \n Concavity changes, so \\(x=2\\) is a non-horizontal POI. \\(f(2) = 4(8) - 16 = 16\\), so the POI is at \\((2, 16)\\).",
    graphData: null
  },
  {
    explanation: "Step 6: Finally, find the \\(x\\) and \\(y\\) intercepts to complete the sketch.",
    workingOut: "$$ \\begin{aligned} y\\text{-intercept: } x=0 &\\implies y = 0 \\\\\\\\ x\\text{-intercepts: } 4x^3 - x^4 &= 0 \\implies x^3(4-x) = 0 \\implies x = 0, \\; x = 4 \\end{aligned} $$",
    graphData: questions[qIndex].graphData
  }
];

fs.writeFileSync(path, `export const DANEBANK_2020_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`, 'utf8');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  await db.collection('questions').doc('dane2020-q21b').update({
    solutionSteps: questions[qIndex].solutionSteps,
    graphData: questions[qIndex].graphData,
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.doc('sync_meta/questions').update({
    version: Date.now(),
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Successfully updated dane2020-q21b with graph and full calculus explanation!');
  process.exit(0);
}
run();
