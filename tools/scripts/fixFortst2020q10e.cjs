const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const pathOrig = './src/constants/seedFortSt2020Questions.js';
const pathSim = './src/constants/seedFortSt2020SimilarQuestions.js';

let contentOrig = fs.readFileSync(pathOrig, 'utf8');
let contentSim = fs.readFileSync(pathSim, 'utf8');

const matchOrig = contentOrig.match(/export const FORT_STREET_2020_QUESTIONS = (\[[\s\S]*?\]);\n/);
const matchSim = contentSim.match(/export const FORT_STREET_2020_SIMILAR_QUESTIONS = (\[[\s\S]*?\]);\n/);

let qOrig = eval(matchOrig[1]);
let qSim = eval(matchSim[1]);

const qIndexOrig = qOrig.findIndex(x => x.id === 'fortst2020-q10e');
const qIndexSim = qSim.findIndex(x => x.id === 'fortst2020s-q10e');

// Original
const graphOrig = {
  jsxGraph: {
    width: 400,
    height: 300,
    boundingbox: [-3, 10, 3.5, -35],
    script: "board.suspendUpdate();\n" +
            "board.create('arrow', [[-2.5,0],[3,0]], {strokeColor:'black'});\n" +
            "board.create('arrow', [[0,-32],[0,8]], {strokeColor:'black'});\n" +
            "var f=function(x){ return (x+2)*Math.pow(x-2, 3); };\n" +
            "board.create('functiongraph', [f, -2.2, 2.5], {strokeColor:'#1d4ed8',strokeWidth:2});\n" +
            "board.create('point', [-2, 0], {name:'(-2,0)', size:2, color:'red', label:{offset:[-10,10]}});\n" +
            "board.create('point', [2, 0], {name:'(2,0)', size:2, color:'red', label:{offset:[10,10]}});\n" +
            "board.create('point', [0, -16], {name:'(0,-16)', size:2, color:'red', label:{offset:[10,10]}});\n" +
            "board.create('point', [-1, -27], {name:'Min(-1,-27)', size:2, color:'purple', label:{offset:[10,-10]}});\n" +
            "board.create('point', [0, -16], {name:'POI', size:0, fixed:true, label:{offset:[-30,-10]}});\n" +
            "board.create('point', [2, 0], {name:'POI', size:0, fixed:true, label:{offset:[10,-15]}});\n" +
            "board.create('text', [2.8, -1.5, 'x'], {fontSize:13});\n" +
            "board.create('text', [0.2, 6, 'y'], {fontSize:13});\n" +
            "board.unsuspendUpdate();"
  }
};

qOrig[qIndexOrig].solutionSteps = [
  {
    explanation: "Step 1: To sketch \\(f(x) = (x+2)(x-2)^3\\), we synthesize the results from the previous parts. First, recall the stationary points.",
    workingOut: "$$ f'(x) = 4(x-2)^2(x+1) = 0 \\implies \\text{Min at } (-1, -27) \\text{ and Horizontal POI at } (2, 0) $$",
    graphData: null
  },
  {
    explanation: "Step 2: Recall the points of inflection by setting \\(f''(x) = 0\\).",
    workingOut: "$$ f''(x) = 12x(x-2) = 0 \\implies \\text{POI at } (0, -16) \\text{ and } (2, 0) $$",
    graphData: null
  },
  {
    explanation: "Step 3: Find the intercepts on the axes.",
    workingOut: "$$ \\begin{aligned} x\\text{-intercepts: } f(x) = 0 &\\implies x = -2, \\; x = 2 \\\\\\\\ y\\text{-intercept: } f(0) &\\implies y = (2)(-8) = -16 \\end{aligned} $$",
    graphData: null
  },
  {
    explanation: "Step 4: Check the end behaviour. The leading term of \\((x)(x^3)\\) is \\(x^4\\), which means the curve goes to \\(+\\infty\\) on both sides.",
    workingOut: "$$ \\text{As } x \\to \\pm\\infty, \\; f(x) \\to +\\infty $$",
    graphData: null
  },
  {
    explanation: "Step 5: Combine all features to sketch the graph.",
    workingOut: "Plot the intercepts \\((-2,0)\\), \\((2,0)\\), \\((0,-16)\\), the minimum at \\((-1,-27)\\), and the points of inflection at \\((0,-16)\\) and \\((2,0)\\).",
    graphData: null
  },
  {
    explanation: "Step 6: The final sketch of \\(y = f(x)\\) is shown below.",
    workingOut: "$$ \\text{Graph of } y = (x+2)(x-2)^3 $$",
    graphData: graphOrig
  }
];

// Similar
const graphSim = {
  jsxGraph: {
    width: 400,
    height: 300,
    boundingbox: [-4, 10, 2.5, -35],
    script: "board.suspendUpdate();\n" +
            "board.create('arrow', [[-3.5,0],[2,0]], {strokeColor:'black'});\n" +
            "board.create('arrow', [[0,-32],[0,8]], {strokeColor:'black'});\n" +
            "var f=function(x){ return (x+3)*Math.pow(x-1, 3); };\n" +
            "board.create('functiongraph', [f, -3.2, 1.6], {strokeColor:'#1d4ed8',strokeWidth:2});\n" +
            "board.create('point', [-3, 0], {name:'(-3,0)', size:2, color:'red', label:{offset:[-10,10]}});\n" +
            "board.create('point', [1, 0], {name:'(1,0)', size:2, color:'red', label:{offset:[10,10]}});\n" +
            "board.create('point', [0, -3], {name:'(0,-3)', size:2, color:'red', label:{offset:[10,10]}});\n" +
            "board.create('point', [-2, -27], {name:'Min(-2,-27)', size:2, color:'purple', label:{offset:[10,-10]}});\n" +
            "board.create('point', [-1, -16], {name:'POI(-1,-16)', size:2, color:'green', label:{offset:[10,0]}});\n" +
            "board.create('point', [1, 0], {name:'POI', size:0, fixed:true, label:{offset:[10,-15]}});\n" +
            "board.create('text', [1.8, -1.5, 'x'], {fontSize:13});\n" +
            "board.create('text', [0.2, 6, 'y'], {fontSize:13});\n" +
            "board.unsuspendUpdate();"
  }
};

qSim[qIndexSim].solutionSteps = [
  {
    explanation: "Step 1: To sketch \\(f(x) = (x+3)(x-1)^3\\), we first find the stationary points by setting \\(f'(x) = 0\\).",
    workingOut: "$$ \\begin{aligned} f'(x) &= 1(x-1)^3 + (x+3)\\cdot 3(x-1)^2 = (x-1)^2 [x - 1 + 3x + 9] \\\\\\\\ &= 4(x-1)^2 (x+2) = 0 \\implies x = 1, \\; x = -2 \\end{aligned} $$",
    graphData: null
  },
  {
    explanation: "Step 2: Find the points of inflection by setting \\(f''(x) = 0\\).",
    workingOut: "$$ \\begin{aligned} f''(x) &= 4 [ 2(x-1)(x+2) + (x-1)^2(1) ] = 4(x-1) [ 2x + 4 + x - 1 ] \\\\\\\\ &= 12(x-1)(x+1) = 0 \\implies x = 1, \\; x = -1 \\end{aligned} $$",
    graphData: null
  },
  {
    explanation: "Step 3: Classify the stationary point at \\(x = -2\\) and find its coordinates.",
    workingOut: "$$ \\begin{aligned} f''(-2) &= 12(-3)(-1) = 36 > 0 \\implies \\text{Local Minimum} \\\\\\\\ f(-2) &= (-2+3)(-2-1)^3 = -27 \\implies \\text{Min at } (-2, -27) \\end{aligned} $$",
    graphData: null
  },
  {
    explanation: "Step 4: Check concavity around the points \\(x=-1\\) and \\(x=1\\). Since \\(f''(x) = 12(x-1)(x+1)\\) changes sign at both points, they are both points of inflection. Evaluate their coordinates.",
    workingOut: "$$ \\begin{aligned} f(-1) &= (2)(-8) = -16 \\implies \\text{POI at } (-1, -16) \\\\\\\\ f(1) &= 0 \\implies \\text{Horizontal POI at } (1, 0) \\end{aligned} $$",
    graphData: null
  },
  {
    explanation: "Step 5: Find the intercepts and end behaviour.",
    workingOut: "$$ \\begin{aligned} x\\text{-intercepts: } f(x) = 0 &\\implies x = -3, \\; x = 1 \\\\\\\\ y\\text{-intercept: } f(0) &\\implies y = (3)(-1)^3 = -3 \\\\\\\\ \\text{End behaviour: Leading term } x^4 &\\implies f(x) \\to +\\infty \\text{ as } x \\to \\pm\\infty \\end{aligned} $$",
    graphData: null
  },
  {
    explanation: "Step 6: Combine all features to sketch the graph of \\(y = f(x)\\).",
    workingOut: "$$ \\text{Graph of } y = (x+3)(x-1)^3 $$",
    graphData: graphSim
  }
];


fs.writeFileSync(pathOrig, `export const FORT_STREET_2020_QUESTIONS = ${JSON.stringify(qOrig, null, 2)};\n`, 'utf8');
fs.writeFileSync(pathSim, `export const FORT_STREET_2020_SIMILAR_QUESTIONS = ${JSON.stringify(qSim, null, 2)};\n`, 'utf8');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  await db.collection('questions').doc('fortst2020-q10e').update({
    solutionSteps: qOrig[qIndexOrig].solutionSteps,
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.collection('questions').doc('fortst2020s-q10e').update({
    solutionSteps: qSim[qIndexSim].solutionSteps,
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.doc('sync_meta/questions').update({
    version: Date.now(),
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Successfully updated fortst2020-q10e and fortst2020s-q10e with graphs and calculus steps!');
  process.exit(0);
}
run();
