const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const path = './src/constants/seedCherrybrookTech2020Questions.js';
let content = fs.readFileSync(path, 'utf8');

const match = content.match(/export const CTHS_2020_QUESTIONS = (\[[\s\S]*?\]);\n/);
if (!match) throw new Error("Not found");

let questions = eval(match[1]);
const qIndex = questions.findIndex(x => x.id === 'cths2020-mc10');
if (qIndex === -1) throw new Error("Question not found");

// Add graphData
questions[qIndex].graphData = {
  jsxGraph: {
    width: 400,
    height: 300,
    boundingbox: [-5.5, 4, 1, -3],
    script: "board.suspendUpdate();\n" +
            "board.create('arrow', [[-5,0],[0.5,0]], {strokeColor:'black'});\n" +
            "board.create('arrow', [[0,-2.5],[0,3.5]], {strokeColor:'black'});\n" +
            "var f=function(x){ return (1/3)*x*x*x + 2.5*x*x + 4*x; };\n" +
            "board.create('functiongraph', [f, -5, 0.2], {strokeColor:'#1d4ed8',strokeWidth:2});\n" +
            "board.create('point', [-4, 0], {name:'A', size:0, fixed:true, label:{offset:[-4,15]}});\n" +
            "board.create('point', [-2.5, 0], {name:'B', size:0, fixed:true, label:{offset:[-4,-15]}});\n" +
            "board.create('point', [-1, 0], {name:'C', size:0, fixed:true, label:{offset:[-4,-15]}});\n" +
            "board.create('segment', [[-4,0], [-4, f(-4)]], {strokeColor:'gray', dash:2});\n" +
            "board.create('segment', [[-2.5,0], [-2.5, f(-2.5)]], {strokeColor:'gray', dash:2});\n" +
            "board.create('segment', [[-1,0], [-1, f(-1)]], {strokeColor:'gray', dash:2});\n" +
            "board.create('point', [-4, f(-4)], {name:'', size:2, color:'black', fixed:true});\n" +
            "board.create('point', [-2.5, f(-2.5)], {name:'', size:2, color:'black', fixed:true});\n" +
            "board.create('point', [-1, f(-1)], {name:'', size:2, color:'black', fixed:true});\n" +
            "board.create('text', [0.2, -0.3, 'x'], {fontSize:13});\n" +
            "board.create('text', [0.15, 3.2, 'y'], {fontSize:13});\n" +
            "board.unsuspendUpdate();"
  }
};

// Also update the question text to remove the "From the graph..." part that is no longer needed since we have a real graph.
questions[qIndex].question = "The graph of $y = f(x)$ is shown below. The coordinates $x = A$ and $x = C$ denote stationary points, and $x = B$ denotes a point of inflection. Over what domain is $f'(x) < 0$ and $f''(x) > 0$?";

fs.writeFileSync(path, `export const CTHS_2020_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`, 'utf8');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  await db.collection('questions').doc('cths2020-mc10').update({
    question: questions[qIndex].question,
    graphData: questions[qIndex].graphData,
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.doc('sync_meta/questions').update({
    version: Date.now(),
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Successfully fixed cths2020-mc10 graph!');
  process.exit(0);
}
run();
