const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const filePath = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear12aCh3IQuestions.js';
let content = fs.readFileSync(filePath, 'utf8');
const match = content.match(/export const Y12A_CH3I_QUESTIONS = (\[[\s\S]*\]);$/m);
let questions = eval(match[1]);

let qs = [];
const qIds = ['y12a-3i-q9a', 'y12a-3i-q9b', 'y12a-3i-q9c', 'y12a-3i-q9d'];

// Define the modified data
const updates = {
  'y12a-3i-q9a': {
    question: "The constant function \\( y = 3 \\) is graphed below. Sketch the graph of its derivative function \\( y' \\).",
    solutionGraph: {
      jsxGraph: {
        width: 350,
        height: 250,
        boundingbox: [-5, 5, 5, -2],
        script: "board.suspendUpdate();\nboard.create('arrow', [[-4,0], [4,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-1.5], [0,4.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('segment', [[-4,3], [4,3]], {strokeColor: 'blue', strokeWidth: 2, dash: 2});\nboard.create('segment', [[-4,0], [4,0]], {strokeColor: 'red', strokeWidth: 3});\nboard.create('text', [2, 0.5, \"y' = 0\"], {fontSize: 14, strokeColor: 'red'});\nboard.unsuspendUpdate();"
      }
    }
  },
  'y12a-3i-q9b': {
    question: "A rising line passing through the origin with slope 1.5, \\( y = 1.5x \\), is shown below. Sketch the graph of its derivative \\( y' \\).",
    solutionGraph: {
      jsxGraph: {
        width: 350,
        height: 250,
        boundingbox: [-5, 6, 5, -6],
        script: "board.suspendUpdate();\nboard.create('arrow', [[-4,0], [4,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-5], [0,5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('segment', [[-3,-4.5], [3,4.5]], {strokeColor: 'blue', strokeWidth: 2, dash: 2});\nboard.create('segment', [[-4,1.5], [4,1.5]], {strokeColor: 'red', strokeWidth: 3});\nboard.create('text', [2, 2.5, \"y' = 1.5\"], {fontSize: 14, strokeColor: 'red'});\nboard.unsuspendUpdate();"
      }
    }
  },
  'y12a-3i-q9c': {
    question: "A parabola with vertex at \\( x = 3 \\), \\( y = (x-3)^2 \\), is graphed below. Sketch the graph of its derivative function \\( y' \\).",
    solutionGraph: {
      jsxGraph: {
        width: 350,
        height: 250,
        boundingbox: [-2, 8, 7, -4],
        script: "board.suspendUpdate();\nboard.create('arrow', [[-1,0], [6,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3], [0,7]], {strokeColor: 'black', strokeWidth: 1});\nvar f = function(x){return (x-3)*(x-3);};\nboard.create('functiongraph', [f, -1, 6], {strokeColor: 'blue', strokeWidth: 2, dash: 2});\nvar df = function(x){return 2*x - 6;};\nboard.create('functiongraph', [df, -1, 6], {strokeColor: 'red', strokeWidth: 3});\nboard.create('text', [4, 4, \"y' = 2x - 6\"], {fontSize: 14, strokeColor: 'red'});\nboard.unsuspendUpdate();"
      }
    }
  },
  'y12a-3i-q9d': {
    question: "A cubic curve with turning points at \\( x = -2 \\) and \\( x = 2 \\), \\( y = 0.1(12x - x^3) \\), is shown below. Sketch the graph of its derivative function \\( y' \\).",
    solutionGraph: {
      jsxGraph: {
        width: 350,
        height: 250,
        boundingbox: [-5, 4, 5, -4],
        script: "board.suspendUpdate();\nboard.create('arrow', [[-4, 0], [4, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -3], [0, 3]], {strokeColor: 'black', strokeWidth: 1});\nvar f = function(x){return 0.1*(12*x - x*x*x);};\nboard.create('functiongraph', [f, -4, 4], {strokeColor: 'blue', strokeWidth: 2, dash: 2});\nvar df = function(x){return 1.2 - 0.3*x*x;};\nboard.create('functiongraph', [df, -4, 4], {strokeColor: 'red', strokeWidth: 3});\nboard.create('text', [0.5, 2, \"y' = 1.2 - 0.3x^2\"], {fontSize: 14, strokeColor: 'red'});\nboard.unsuspendUpdate();"
      }
    }
  }
};

for (let id of qIds) {
  let q = questions.find(x => x.id === id);
  if (!q) {
    let parent = questions.find(x => x.subQuestions && x.subQuestions.some(sq => sq.id === id));
    if (parent) q = parent.subQuestions.find(sq => sq.id === id);
  }
  if (q) {
    q.type = 'teacher_review'; // manual grading
    q.question = updates[id].question;
    delete q.opts; // remove multiple choice options
    delete q.a; // remove multiple choice answer index
    
    // update explanation text slightly
    if (q.solutionSteps.length > 0) {
      q.solutionSteps[q.solutionSteps.length - 1].explanation = "Draw derivative graph shape (See red curve in the solution graph above/below)";
      q.solutionSteps[q.solutionSteps.length - 1].graphData = updates[id].solutionGraph;
    }
    qs.push(q);
  }
}

const newArrayStr = JSON.stringify(questions, null, 2).replace(/"([a-zA-Z_$][0-9a-zA-Z_$]*)":/g, '$1:');
fs.writeFileSync(filePath, content.substring(0, match.index) + 'export const Y12A_CH3I_QUESTIONS = ' + newArrayStr + ';\n', 'utf8');

async function updateDb() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  for (let q of qs) {
    let isSub = !questions.find(x => x.id === q.id);
    if (!isSub) {
      await db.collection('questions').doc(q.id).update({
        type: 'teacher_review',
        question: q.question,
        opts: null,
        a: null,
        solutionSteps: q.solutionSteps
      });
    } else {
      let parent = questions.find(x => x.subQuestions && x.subQuestions.some(sq => sq.id === q.id));
      if (parent) {
        let parentDoc = await db.collection('questions').doc(parent.id).get();
        if (parentDoc.exists) {
          let pData = parentDoc.data();
          let sqIdx = pData.subQuestions.findIndex(sq => sq.id === q.id);
          if (sqIdx > -1) {
            pData.subQuestions[sqIdx].type = 'teacher_review';
            pData.subQuestions[sqIdx].question = q.question;
            pData.subQuestions[sqIdx].opts = null;
            pData.subQuestions[sqIdx].a = null;
            pData.subQuestions[sqIdx].solutionSteps = q.solutionSteps;
            await db.collection('questions').doc(parent.id).update({
              subQuestions: pData.subQuestions
            });
          }
        }
      }
    }
  }
  console.log('Successfully updated q9a-d to teacher_review format with solution graphs.');
  process.exit(0);
}
updateDb();
