const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const filePath = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear11Ch5IQuestions.js';
let content = fs.readFileSync(filePath, 'utf8');
const match = content.match(/export const Y11_CH5I_QUESTIONS = (\[[\s\S]*\]);$/m);
let questions = eval(match[1]);

let updatedQs = [];

const updates = {
  'y11a-5i-q16bi': {
    type: 'multiple_choice',
    opts: [
      "Domain \\(x \\neq 0\\), Range \\(y \\neq 0\\)", // Distractor
      "Domain \\(x \\in \\mathbb{R}\\), Range \\(0 < y \\le \\frac{2}{3}\\)", // Correct (B)
      "Domain \\(x \\in \\mathbb{R}\\), Range \\(y \\ge 3\\)", // Distractor
      "Domain \\(x \\neq \\pm\\sqrt{3}\\), Range \\(y \\le \\frac{2}{3}\\)" // Distractor
    ],
    a: 1,
    steps: [
      {
        explanation: "First, find the expression for the composite function \\(f(g(x))\\).",
        workingOut: "g(x) = x^2 + 3 \\implies f(g(x)) = f(x^2 + 3) = \\frac{2}{x^2 + 3}"
      },
      {
        explanation: "Determine the Domain. The inner function \\(g(x)\\) has no restrictions (\\(x \\in \\mathbb{R}\\)). The outer function \\(f(u) = \\frac{2}{u}\\) requires \\(u \\neq 0\\). Since \\(u = x^2 + 3\\) is always \\(\\ge 3\\), it can never be zero.",
        workingOut: "x^2 + 3 \\neq 0 \\text{ for all real } x \\implies \\text{Domain: } x \\in \\mathbb{R}"
      },
      {
        explanation: "Determine the Range. The denominator \\(x^2 + 3\\) reaches its minimum value of \\(3\\) when \\(x = 0\\). Therefore, the fraction reaches its maximum value of \\(\\frac{2}{3}\\). As \\(x \\to \\pm\\infty\\), the fraction approaches \\(0\\) but never reaches it.",
        workingOut: "x^2 + 3 \\ge 3 \\implies 0 < \\frac{2}{x^2 + 3} \\le \\frac{2}{3}"
      },
      {
        explanation: "State the final domain and range.",
        workingOut: "\\text{Domain } x \\in \\mathbb{R}, \\text{ Range } 0 < y \\le \\frac{2}{3}"
      }
    ]
  },
  'y11a-5i-q16bii': {
    type: 'multiple_choice',
    opts: [
      "Domain \\(x \\neq 0\\), Range \\(y \\ge 3\\)", // Distractor: thinks y can be 3
      "Domain \\(x \\in \\mathbb{R}\\), Range \\(0 < y \\le \\frac{2}{3}\\)", // Distractor: gave f(g(x))
      "Domain \\(x \\neq 0\\), Range \\(y > 3\\)", // Correct (C)
      "Domain \\(x \\neq 0\\), Range \\(y \\neq 0\\)" // Distractor: just f(x)
    ],
    a: 2,
    steps: [
      {
        explanation: "First, find the expression for the composite function \\(g(f(x))\\).",
        workingOut: "f(x) = \\frac{2}{x} \\implies g(f(x)) = g\\left(\\frac{2}{x}\\right) = \\left(\\frac{2}{x}\\right)^2 + 3 = \\frac{4}{x^2} + 3"
      },
      {
        explanation: "Determine the Domain. The inner function \\(f(x)\\) restricts \\(x \\neq 0\\). The outer function has no further restrictions.",
        workingOut: "\\text{Domain: } x \\neq 0"
      },
      {
        explanation: "Determine the Range. Since \\(x \\neq 0\\), the term \\(\\frac{4}{x^2}\\) is strictly positive (\\(> 0\\)).",
        workingOut: "\\frac{4}{x^2} > 0 \\implies \\frac{4}{x^2} + 3 > 3"
      },
      {
        explanation: "State the final domain and range. A common mistake is writing \\(y \\ge 3\\), but \\(y\\) can never equal \\(3\\) because \\(x\\) cannot be infinity.",
        workingOut: "\\text{Domain } x \\neq 0, \\text{ Range } y > 3"
      }
    ]
  },
  'y11a-5i-q17a': {
    type: 'teacher_review',
    steps: [
      {
        explanation: "Analyze the transformation \\(y = f(x + 2)\\). Adding \\(2\\) inside the function arguments represents a horizontal shift.",
        workingOut: "\\text{Shift LEFT by 2 units.}"
      },
      {
        explanation: "Identify key features (e.g., intercepts, turning points) on the original graph and subtract \\(2\\) from all their \\(x\\)-coordinates.",
        workingOut: "(x, y) \\to (x - 2, y)"
      },
      {
        explanation: "Sketch the new curve maintaining the exact same shape, just translated 2 units horizontally to the left.",
        workingOut: "\\text{See the comparative graph in the solution below.}"
      }
    ],
    graph: {
      jsxGraph: {
        width: 400,
        height: 300,
        boundingbox: [-7, 5, 5, -3],
        script: `board.suspendUpdate();
board.create('arrow', [[-7,0],[5,0]], {strokeColor:'black', strokeWidth:1});
board.create('arrow', [[0,-3],[0,5]], {strokeColor:'black', strokeWidth:1});

// Original
board.create('functiongraph', [function(x){ return 0.1*(x+2)*(x+2)*(3-x) + 0.5; }, -5, 4], {strokeColor:'#94a3b8',strokeWidth:2, dash:2});
board.create('text', [2, 3, 'y = f(x)'], {color:'#94a3b8'});

// Transformed
board.create('functiongraph', [function(x){ return 0.1*(x+4)*(x+4)*(3-(x+2)) + 0.5; }, -7, 2], {strokeColor:'red',strokeWidth:2});
board.create('text', [-4, 4, 'y = f(x+2)'], {color:'red'});

// Shift arrows
board.create('arrow', [[0,1.7], [-2,1.7]], {strokeColor:'green', strokeWidth:1.5, dash:1});
board.create('arrow', [[-2,0.5], [-4,0.5]], {strokeColor:'green', strokeWidth:1.5, dash:1});

board.unsuspendUpdate();`
      }
    }
  },
  'y11a-5i-q17b': {
    type: 'teacher_review',
    steps: [
      {
        explanation: "Analyze the transformation \\(y = f(x) + 2\\). Adding \\(2\\) outside the function represents a vertical shift.",
        workingOut: "\\text{Shift UPWARDS by 2 units.}"
      },
      {
        explanation: "Identify key features (e.g., intercepts, turning points) on the original graph and add \\(2\\) to all their \\(y\\)-coordinates.",
        workingOut: "(x, y) \\to (x, y + 2)"
      },
      {
        explanation: "Sketch the new curve maintaining the exact same shape, just translated 2 units vertically upwards.",
        workingOut: "\\text{See the comparative graph in the solution below.}"
      }
    ],
    graph: {
      jsxGraph: {
        width: 400,
        height: 300,
        boundingbox: [-6, 7, 6, -1],
        script: `board.suspendUpdate();
board.create('arrow', [[-6,0],[6,0]], {strokeColor:'black', strokeWidth:1});
board.create('arrow', [[0,-1],[0,7]], {strokeColor:'black', strokeWidth:1});

// Original
board.create('functiongraph', [function(x){ return 0.1*(x+2)*(x+2)*(3-x) + 0.5; }, -5, 4], {strokeColor:'#94a3b8',strokeWidth:2, dash:2});
board.create('text', [2, 2.5, 'y = f(x)'], {color:'#94a3b8'});

// Transformed
board.create('functiongraph', [function(x){ return 0.1*(x+2)*(x+2)*(3-x) + 0.5 + 2; }, -5, 4], {strokeColor:'red',strokeWidth:2});
board.create('text', [2, 5, 'y = f(x) + 2'], {color:'red'});

// Shift arrows
board.create('arrow', [[-2,0.5], [-2,2.5]], {strokeColor:'green', strokeWidth:1.5, dash:1});
board.create('arrow', [[1.33, 1.98], [1.33, 3.98]], {strokeColor:'green', strokeWidth:1.5, dash:1});

board.unsuspendUpdate();`
      }
    }
  }
};

for (let id of Object.keys(updates)) {
  let q = questions.find(x => x.id === id);
  if (!q) {
    let parent = questions.find(x => x.subQuestions && x.subQuestions.some(sq => sq.id === id));
    if (parent) q = parent.subQuestions.find(sq => sq.id === id);
  }
  if (q) {
    let upd = updates[id];
    
    if (upd.type === 'multiple_choice') {
      q.type = 'multiple_choice';
      q.opts = upd.opts;
      q.a = upd.a;
      q.answer = upd.a.toString();
      q.solutionSteps = upd.steps;
      q.solution = upd.steps[upd.steps.length - 1].workingOut;
      q.requiresManualGrading = false;
      q.graphData = null; // No graph for these
    } else {
      q.type = 'teacher_review';
      delete q.opts;
      delete q.a;
      delete q.answer;
      q.solutionSteps = upd.steps;
      q.solutionSteps[q.solutionSteps.length - 1].graphData = upd.graph;
      q.solution = "See the final comparative graph.";
      q.requiresManualGrading = true;
      // We purposefully DO NOT touch q.graphData here because the question needs the reference graph
    }
    
    updatedQs.push(q);
  }
}

const newArrayStr = JSON.stringify(questions, null, 2).replace(/"([a-zA-Z_$][0-9a-zA-Z_$]*)":/g, '$1:');
fs.writeFileSync(filePath, content.substring(0, match.index) + 'export const Y11_CH5I_QUESTIONS = ' + newArrayStr + ';\n', 'utf8');

async function updateDb() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  for (let q of updatedQs) {
    let isSub = !questions.find(x => x.id === q.id);
    if (!isSub) {
      await db.collection('questions').doc(q.id).update({
        type: q.type,
        opts: q.opts || null,
        options: q.opts ? q.opts.map(o => ({ text: o, imageUrl: '' })) : null,
        a: q.a !== undefined ? q.a : null,
        answer: q.answer || null,
        solution: q.solution,
        solutionSteps: q.solutionSteps,
        requiresManualGrading: q.requiresManualGrading
      });
    } else {
      let parent = questions.find(x => x.subQuestions && x.subQuestions.some(sq => sq.id === q.id));
      if (parent) {
        let parentDoc = await db.collection('questions').doc(parent.id).get();
        if (parentDoc.exists) {
          let pData = parentDoc.data();
          let sqIdx = pData.subQuestions.findIndex(sq => sq.id === q.id);
          if (sqIdx > -1) {
            pData.subQuestions[sqIdx].type = q.type;
            pData.subQuestions[sqIdx].opts = q.opts || null;
            pData.subQuestions[sqIdx].options = q.opts ? q.opts.map(o => ({ text: o, imageUrl: '' })) : null;
            pData.subQuestions[sqIdx].a = q.a !== undefined ? q.a : null;
            pData.subQuestions[sqIdx].answer = q.answer || null;
            pData.subQuestions[sqIdx].solution = q.solution;
            pData.subQuestions[sqIdx].solutionSteps = q.solutionSteps;
            pData.subQuestions[sqIdx].requiresManualGrading = q.requiresManualGrading;
            await db.collection('questions').doc(parent.id).update({
              subQuestions: pData.subQuestions
            });
          }
        }
      }
    }
  }
  console.log('Successfully updated the remaining questions.');
  process.exit(0);
}
updateDb();
