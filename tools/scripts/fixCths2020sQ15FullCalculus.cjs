const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const path = './src/constants/seedCherrybrookTech2020SimilarQuestions.js';
let content = fs.readFileSync(path, 'utf8');

const match = content.match(/export const CTHS_2020_SIMILAR_QUESTIONS = (\[[\s\S]*?\]);\n/);
if (!match) throw new Error("Not found");

let questions = eval(match[1]);
const qIndex = questions.findIndex(x => x.id === 'cths2020s-q15');
if (qIndex === -1) throw new Error("Question not found");

// Add graphData
questions[qIndex].graphData = {
  jsxGraph: {
    width: 400,
    height: 300,
    boundingbox: [-3.5, 10, 3, -3],
    script: "board.suspendUpdate();\n" +
            "board.create('arrow', [[-3,0],[2.5,0]], {strokeColor:'black'});\n" +
            "board.create('arrow', [[0,-2.5],[0,9.5]], {strokeColor:'black'});\n" +
            "var f=function(x){ return -(x+2)*Math.pow(x-1, 3); };\n" +
            "board.create('functiongraph', [f, -2.5, 1.8], {strokeColor:'#1d4ed8',strokeWidth:2});\n" +
            "board.create('point', [-2, 0], {name:'-2', size:2, color:'red', label:{offset:[-10,10]}});\n" +
            "board.create('point', [1, 0], {name:'1', size:2, color:'red', label:{offset:[10,10]}});\n" +
            "board.create('point', [0, 2], {name:'2', size:2, color:'red', label:{offset:[10,5]}});\n" +
            "board.create('text', [2.6, -0.4, 'x'], {fontSize:13});\n" +
            "board.create('text', [0.15, 9, 'y'], {fontSize:13});\n" +
            "board.unsuspendUpdate();"
  }
};

// Rewrite solutionSteps with full calculus
questions[qIndex].solutionSteps = [
  {
    explanation: "Step 1: Find the first derivative \\(y'\\) using the product rule to locate the stationary points (turning points and horizontal POIs).",
    workingOut: "$$ \\begin{aligned} y' &= -\\left[ 1 \\cdot (x-1)^3 + (x+2) \\cdot 3(x-1)^2 \\right] \\\\\\\\ &= -(x-1)^2 \\left[ (x-1) + 3(x+2) \\right] \\\\\\\\ &= -(x-1)^2 (4x + 5) \\\\\\\\ y' &= 0 \\implies x = 1 \\text{ or } x = -\\dfrac{5}{4} \\end{aligned} $$",
    graphData: null
  },
  {
    explanation: "Step 2: Find the second derivative \\(y''\\) to classify the stationary points and find possible points of inflection.",
    workingOut: "$$ \\begin{aligned} y'' &= -\\left[ 2(x-1)(4x+5) + (x-1)^2 \\cdot 4 \\right] \\\\\\\\ &= -2(x-1) \\left[ (4x+5) + 2(x-1) \\right] \\\\\\\\ &= -2(x-1)(6x + 3) = -6(x-1)(2x+1) \\\\\\\\ y'' &= 0 \\implies x = 1 \\text{ or } x = -\\dfrac{1}{2} \\end{aligned} $$",
    graphData: null
  },
  {
    explanation: "Step 3: Classify the stationary point at \\(x = -\\dfrac{5}{4}\\) using the second derivative.",
    workingOut: "$$ y''\\left(-\\dfrac{5}{4}\\right) = -6\\left(-\\dfrac{9}{4}\\right)\\left(-\\dfrac{3}{2}\\right) < 0 \\implies \\text{Local Maximum at } \\left(-\\dfrac{5}{4}, 8.54\\right) $$",
    graphData: null
  },
  {
    explanation: "Step 4: Classify \\(x = 1\\). Since \\(y'(1) = 0\\) and \\(y''(1) = 0\\), check for a change in concavity using test points around \\(x=1\\).",
    workingOut: "$$ \\begin{aligned} y''(0) &= -6(-1)(1) = 6 > 0 \\quad (\\text{Concave up}) \\\\\\\\ y''(2) &= -6(1)(5) = -30 < 0 \\quad (\\text{Concave down}) \\end{aligned} $$ \n Since concavity changes, \\((1, 0)\\) is a horizontal point of inflection.",
    graphData: null
  },
  {
    explanation: "Step 5: Check the other possible POI at \\(x = -1/2\\) using test points \\(x=-1\\) and \\(x=0\\).",
    workingOut: "$$ \\begin{aligned} y''(-1) &= -6(-2)(-1) = -12 < 0 \\quad (\\text{Concave down}) \\\\\\\\ y''(0) &= 6 > 0 \\quad (\\text{Concave up}) \\end{aligned} $$ \n Concavity changes, so there is a non-horizontal point of inflection at \\(x = -1/2\\).",
    graphData: null
  },
  {
    explanation: "Step 6: Finally, calculate the \\(x\\) and \\(y\\) intercepts to complete the sketch.",
    workingOut: "$$ \\begin{aligned} x\\text{-intercepts: } y=0 &\\implies x = -2, \\; x = 1 \\\\\\\\ y\\text{-intercept: } x=0 &\\implies y = -(2)(-1)^3 = 2 \\end{aligned} $$",
    graphData: questions[qIndex].graphData
  }
];

fs.writeFileSync(path, `export const CTHS_2020_SIMILAR_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`, 'utf8');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  await db.collection('questions').doc('cths2020s-q15').update({
    solutionSteps: questions[qIndex].solutionSteps,
    graphData: questions[qIndex].graphData,
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.doc('sync_meta/questions').update({
    version: Date.now(),
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Successfully updated cths2020s-q15 with graph and full calculus explanation!');
  process.exit(0);
}
run();
