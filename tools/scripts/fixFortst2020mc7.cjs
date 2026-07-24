const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const path = './src/constants/seedFortSt2020Questions.js';
let content = fs.readFileSync(path, 'utf8');

const match = content.match(/export const FORT_STREET_2020_QUESTIONS = (\[[\s\S]*?\]);\n/);
if (!match) throw new Error("Not found");

let questions = eval(match[1]);
const qIndex = questions.findIndex(x => x.id === 'fortst2020-mc7');
if (qIndex === -1) throw new Error("Question not found");

// Add graphData for the solution (f(x)) to the last step
const solutionGraph = {
  jsxGraph: {
    width: 440,
    height: 300,
    boundingbox: [-7, 15, 5, -20],
    boardOptions: {
      keepaspectratio: false
    },
    script: "board.suspendUpdate();\n" +
            "board.create('arrow', [[-6.5,0],[4.5,0]], {strokeColor:'black'});\n" +
            "board.create('arrow', [[0,-18],[0,13]], {strokeColor:'black'});\n" +
            "var f=function(x){ return -0.055*Math.pow(x,4) - 0.44*Math.pow(x,3) + 7.04*x; };\n" +
            "board.create('functiongraph', [f, -6, 3.5], {strokeColor:'#e11d48',strokeWidth:2});\n" +
            "board.create('point', [2, f(2)], {name:'Max', size:2, color:'purple', label:{offset:[10,10]}});\n" +
            "board.create('point', [-4, f(-4)], {name:'Horiz. POI', size:2, color:'red', label:{offset:[-60,-15]}});\n" +
            "board.create('point', [0, 0], {name:'POI', size:2, color:'green', label:{offset:[10,-10]}});\n" +
            "board.create('text', [3.9, -1, 'x'], {fontSize:13});\n" +
            "board.create('text', [0.3, 12, 'y'], {fontSize:13});\n" +
            "board.create('text', [1.5, -15, 'y = f(x)'], {fontSize:13, strokeColor:'#e11d48'});\n" +
            "board.unsuspendUpdate();"
  }
};

// Rewrite solutionSteps with full calculus
questions[qIndex].solutionSteps = [
  {
    explanation: "Step 1: The stationary points of \\(f(x)\\) occur where the first derivative \\(f'(x) = 0\\). From the given graph of \\(f'(x)\\), the \\(x\\)-intercepts are \\(x = -4\\) and \\(x = 2\\).",
    workingOut: "$$ f'(x) = 0 \\implies x = -4, \\; x = 2 $$",
    graphData: null
  },
  {
    explanation: "Step 2: To classify these stationary points, we analyse the sign of the second derivative \\(f''(x)\\), which corresponds to the gradient of the \\(f'(x)\\) graph.",
    workingOut: "$$ f''(x) = \\frac{d}{dx}[f'(x)] \\quad (\\text{gradient of the drawn curve}) $$",
    graphData: null
  },
  {
    explanation: "Step 3: Classify the stationary point at \\(x = 2\\). The graph of \\(f'(x)\\) is decreasing as it crosses the \\(x\\)-axis at \\(x=2\\), meaning its gradient \\(f''(2)\\) is negative.",
    workingOut: "$$ f''(2) < 0 \\implies \\text{Local Maximum at } x = 2 $$",
    graphData: null
  },
  {
    explanation: "Step 4: Classify the stationary point at \\(x = -4\\). The graph of \\(f'(x)\\) touches the \\(x\\)-axis and turns around, meaning \\(f''(-4) = 0\\). We must check the concavity (the sign of \\(f''(x)\\)) around \\(x = -4\\).",
    workingOut: "$$ \\text{At } x = -4, \\; f''(-4) = 0 $$",
    graphData: null
  },
  {
    explanation: "Step 5: Check concavity around \\(x = -4\\). Before \\(x=-4\\), \\(f'(x)\\) is increasing (so \\(f''(x) > 0\\)). After \\(x=-4\\), \\(f'(x)\\) is decreasing (so \\(f''(x) < 0\\)).",
    workingOut: "$$ \\begin{aligned} x < -4 &\\implies f''(x) > 0 \\quad (\\text{Concave up}) \\\\\\\\ x > -4 &\\implies f''(x) < 0 \\quad (\\text{Concave down}) \\end{aligned} $$ \n Since concavity changes, \\(x = -4\\) is a horizontal point of inflexion.",
    graphData: null
  },
  {
    explanation: "Step 6: We can also see that \\(f'(x)\\) has a maximum at \\(x = 0\\). Since \\(f''(0) = 0\\) and \\(f''\\) changes sign from positive to negative, \\(x = 0\\) is another (non-horizontal) point of inflexion. The full shape of \\(f(x)\\) is sketched below.",
    workingOut: "$$ \\text{Answer: A horizontal point of inflexion at } x = -4. $$",
    graphData: solutionGraph
  }
];

fs.writeFileSync(path, `export const FORT_STREET_2020_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`, 'utf8');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  await db.collection('questions').doc('fortst2020-mc7').update({
    solutionSteps: questions[qIndex].solutionSteps,
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.doc('sync_meta/questions').update({
    version: Date.now(),
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Successfully updated fortst2020-mc7 with full calculus explanation and f(x) graph!');
  process.exit(0);
}
run();
