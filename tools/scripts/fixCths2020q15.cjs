const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const path = './src/constants/seedCherrybrookTech2020Questions.js';
let content = fs.readFileSync(path, 'utf8');

const match = content.match(/export const CTHS_2020_QUESTIONS = (\[[\s\S]*?\]);\n/);
if (!match) throw new Error("Not found");

let questions = eval(match[1]);
const qIndex = questions.findIndex(x => x.id === 'cths2020-q15');
if (qIndex === -1) throw new Error("Question not found");

// Update graphData
questions[qIndex].graphData = {
  jsxGraph: {
    width: 400,
    height: 300,
    boundingbox: [-3, 10, 4, -4],
    script: "board.suspendUpdate();\n" +
            "board.create('arrow', [[-3,0],[4,0]], {strokeColor:'black'});\n" +
            "board.create('arrow', [[0,-4],[0,10]], {strokeColor:'black'});\n" +
            "var f=function(x){ return -(x+1)*Math.pow(x-2, 3); };\n" +
            "board.create('functiongraph', [f, -2.5, 3.5], {strokeColor:'#1d4ed8',strokeWidth:2});\n" +
            "board.create('point', [-1, 0], {name:'-1', size:2, color:'red', label:{offset:[-10,10]}});\n" +
            "board.create('point', [2, 0], {name:'2', size:2, color:'red', label:{offset:[10,10]}});\n" +
            "board.create('point', [0, 8], {name:'8', size:2, color:'red', label:{offset:[10,5]}});\n" +
            "board.create('text', [3.6, -0.4, 'x'], {fontSize:13});\n" +
            "board.create('text', [0.15, 9.5, 'y'], {fontSize:13});\n" +
            "board.unsuspendUpdate();"
  }
};

// Update solutionSteps
questions[qIndex].solutionSteps = [
  {
    explanation: "Step 1: Find the \\(x\\)-intercepts by setting \\(y = 0\\). The roots and their multiplicities determine the curve's behaviour at the axis.",
    workingOut: "$$ \\begin{aligned} -(x+1)(x-2)^3 &= 0 \\\\\\\\ x &= -1 \\quad (\\text{multiplicity 1, crosses axis}) \\\\\\\\ x &= 2 \\quad (\\text{multiplicity 3, horizontal point of inflection}) \\end{aligned} $$",
    graphData: null
  },
  {
    explanation: "Step 2: Find the \\(y\\)-intercept by setting \\(x = 0\\).",
    workingOut: "$$ y = -(0+1)(0-2)^3 = -(1)(-8) = 8 $$",
    graphData: null
  },
  {
    explanation: "Step 3: Determine the end behaviour by looking at the leading term of the polynomial.",
    workingOut: "$$ \\text{Leading term: } -x \\cdot x^3 = -x^4 \\\\\\\\ \\text{As } x \\to \\pm\\infty, \\; y \\to -\\infty $$",
    graphData: null
  },
  {
    explanation: "Step 4: Sketch the curve using the intercepts and end behaviour. The curve rises from the bottom left, crosses at \\(x=-1\\), passes through \\(y=8\\), reaches a local maximum, and then inflects horizontally through \\(x=2\\) before falling to the bottom right.",
    workingOut: "$$ \\text{Draw the graph passing through } (-1, 0), (0, 8), \\text{ and inflecting at } (2, 0). $$",
    graphData: questions[qIndex].graphData
  }
];

fs.writeFileSync(path, `export const CTHS_2020_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`, 'utf8');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  await db.collection('questions').doc('cths2020-q15').update({
    solutionSteps: questions[qIndex].solutionSteps,
    graphData: questions[qIndex].graphData,
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.doc('sync_meta/questions').update({
    version: Date.now(),
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Successfully fixed cths2020-q15 graph and steps!');
  process.exit(0);
}
run();
