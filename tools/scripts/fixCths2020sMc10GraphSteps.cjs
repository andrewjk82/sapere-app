const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const path = './src/constants/seedCherrybrookTech2020SimilarQuestions.js';
let content = fs.readFileSync(path, 'utf8');

const match = content.match(/export const CTHS_2020_SIMILAR_QUESTIONS = (\[[\s\S]*?\]);\n/);
if (!match) throw new Error("Not found");

let questions = eval(match[1]);
const qIndex = questions.findIndex(x => x.id === 'cths2020s-mc10');
if (qIndex === -1) throw new Error("Question not found");

// Update graphData
questions[qIndex].graphData = {
  jsxGraph: {
    width: 400,
    height: 300,
    boundingbox: [-5.5, 4, 1, -3],
    script: "board.suspendUpdate();\n" +
            "board.create('arrow', [[-5.5,0],[0.8,0]], {strokeColor:'black'});\n" +
            "board.create('arrow', [[0,-2.5],[0,3.5]], {strokeColor:'black'});\n" +
            "var f=function(x){ return (1/3)*x*x*x + 2.5*x*x + 4*x; };\n" +
            "board.create('functiongraph', [f, -5.5, 0.5], {strokeColor:'#1d4ed8',strokeWidth:2});\n" +
            "board.create('point', [-4, 0], {name:'P', size:0, fixed:true, label:{offset:[-4,15]}});\n" +
            "board.create('point', [-2.5, 0], {name:'Q', size:0, fixed:true, label:{offset:[-4,-15]}});\n" +
            "board.create('point', [-1, 0], {name:'R', size:0, fixed:true, label:{offset:[-4,-15]}});\n" +
            "board.create('segment', [[-4,0], [-4, f(-4)]], {strokeColor:'gray', dash:2});\n" +
            "board.create('segment', [[-2.5,0], [-2.5, f(-2.5)]], {strokeColor:'gray', dash:2});\n" +
            "board.create('segment', [[-1,0], [-1, f(-1)]], {strokeColor:'gray', dash:2});\n" +
            "board.create('point', [-4, f(-4)], {name:'', size:2, color:'black', fixed:true});\n" +
            "board.create('point', [-2.5, f(-2.5)], {name:'', size:2, color:'black', fixed:true});\n" +
            "board.create('point', [-1, f(-1)], {name:'', size:2, color:'black', fixed:true});\n" +
            "board.create('text', [0.5, -0.3, 'x'], {fontSize:13});\n" +
            "board.create('text', [0.15, 3.2, 'y'], {fontSize:13});\n" +
            "board.unsuspendUpdate();"
  }
};

// Update question text
questions[qIndex].question = "The graph of $y = g(x)$ is shown below. The coordinates $x = P$ and $x = R$ denote a local maximum and a local minimum respectively, and $x = Q$ denotes a point of inflection. Over what domain is $g'(x) < 0$ and $g''(x) < 0$?";

// Update solution steps
questions[qIndex].solutionSteps = [
  {
    explanation: "Step 1: First, identify the condition for the first derivative, \\(g'(x) < 0\\). This means the curve must be strictly decreasing. Based on the graph, the function decreases from the local maximum at \\(P\\) down to the local minimum at \\(R\\).",
    workingOut: "$$ \\text{For } g'(x) < 0, \\quad x \\in (P, R) $$",
    graphData: null
  },
  {
    explanation: "Step 2: Identify the condition for the second derivative, \\(g''(x) < 0\\). This signifies that the curve must be concave down (shaped like an upside-down bowl). The point \\(Q\\) is the point of inflection (POI). To the left of \\(Q\\), the curve is concave down.",
    workingOut: "$$ \\text{For } g''(x) < 0, \\quad x \\in (-\\infty, Q) $$",
    graphData: null
  },
  {
    explanation: "Step 3: To satisfy both conditions simultaneously, calculate the intersection of the two domains from Step 1 and Step 2. Given the order \\(P < Q < R\\), the overlapping region is strictly between \\(P\\) and \\(Q\\).",
    workingOut: "$$ \\begin{aligned} \\text{Required Domain} &= (P, R) \\cap (-\\infty, Q) \\\\\\\\ &= (P, Q) \\end{aligned} $$",
    graphData: null
  }
];

fs.writeFileSync(path, `export const CTHS_2020_SIMILAR_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`, 'utf8');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  await db.collection('questions').doc('cths2020s-mc10').update({
    question: questions[qIndex].question,
    solutionSteps: questions[qIndex].solutionSteps,
    graphData: questions[qIndex].graphData,
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.doc('sync_meta/questions').update({
    version: Date.now(),
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Successfully updated cths2020s-mc10 with graph and calculus explanation!');
  process.exit(0);
}
run();
