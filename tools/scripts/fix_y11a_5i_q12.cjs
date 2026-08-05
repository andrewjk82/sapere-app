const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const filePath = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear11Ch5IQuestions.js';
let content = fs.readFileSync(filePath, 'utf8');
const match = content.match(/export const Y11_CH5I_QUESTIONS = (\[[\s\S]*\]);$/m);
let questions = eval(match[1]);

let updatedQs = [];

const updates = {
  'y11a-5i-q12a': {
    steps: [
      {
        explanation: "Group the \\(x\\) terms and complete the square by adding and subtracting \\((\\frac{b}{2})^2\\).",
        workingOut: "y = (x^2 + 4x) + 5 \\implies y = (x^2 + 4x + 4) - 4 + 5"
      },
      {
        explanation: "Write the expression in vertex form \\(y = a(x - h)^2 + k\\).",
        workingOut: "y = (x + 2)^2 + 1"
      },
      {
        explanation: "Identify the vertex \\((h, k)\\).",
        workingOut: "\\text{Vertex: } (-2, 1)"
      },
      {
        explanation: "Find the \\(y\\)-intercept by setting \\(x = 0\\).",
        workingOut: "y = 0^2 + 4(0) + 5 = 5 \\implies \\text{y-intercept: } (0, 5)"
      },
      {
        explanation: "Find the \\(x\\)-intercepts by setting \\(y = 0\\). Since \\((x+2)^2 = -1\\) has no real solution, there are no \\(x\\)-intercepts.",
        workingOut: "\\text{No } x\\text{-intercepts}"
      },
      {
        explanation: "Sketch the graph using the vertex and \\(y\\)-intercept. The parabola opens upwards.",
        workingOut: "\\text{See the final graph in the solution below.}"
      }
    ],
    graph: {
      jsxGraph: {
        width: 400,
        height: 300,
        boundingbox: [-6, 8, 2, -2],
        script: `board.suspendUpdate();
board.create('arrow', [[-6,0],[2,0]], {strokeColor:'black', strokeWidth:1});
board.create('arrow', [[0,-2],[0,8]], {strokeColor:'black', strokeWidth:1});
board.create('functiongraph', [function(x){ return (x+2)*(x+2)+1; }, -6, 2], {strokeColor:'red', strokeWidth:2});
board.create('point', [-2, 1], {name:'V(-2,1)', size:3, color:'blue'});
board.create('point', [0, 5], {name:'(0,5)', size:3, color:'blue'});
board.unsuspendUpdate();`
      }
    }
  },
  'y11a-5i-q12b': {
    steps: [
      {
        explanation: "Group the \\(x\\) terms and complete the square by adding and subtracting \\((\\frac{b}{2})^2 = (-3)^2 = 9\\).",
        workingOut: "y = (x^2 - 6x) + 2 \\implies y = (x^2 - 6x + 9) - 9 + 2"
      },
      {
        explanation: "Write the expression in vertex form \\(y = a(x - h)^2 + k\\).",
        workingOut: "y = (x - 3)^2 - 7"
      },
      {
        explanation: "Identify the vertex \\((h, k)\\).",
        workingOut: "\\text{Vertex: } (3, -7)"
      },
      {
        explanation: "Find the \\(y\\)-intercept by setting \\(x = 0\\).",
        workingOut: "y = 0^2 - 6(0) + 2 = 2 \\implies \\text{y-intercept: } (0, 2)"
      },
      {
        explanation: "Find the \\(x\\)-intercepts by setting \\(y = 0\\). Solve \\((x - 3)^2 = 7\\).",
        workingOut: "x - 3 = \\pm\\sqrt{7} \\implies x = 3 + \\sqrt{7}, 3 - \\sqrt{7}"
      },
      {
        explanation: "Sketch the graph. The parabola opens upwards and crosses the \\(x\\)-axis twice.",
        workingOut: "\\text{See the final graph in the solution below.}"
      }
    ],
    graph: {
      jsxGraph: {
        width: 400,
        height: 300,
        boundingbox: [-2, 4, 8, -8],
        script: `board.suspendUpdate();
board.create('arrow', [[-2,0],[8,0]], {strokeColor:'black', strokeWidth:1});
board.create('arrow', [[0,-8],[0,4]], {strokeColor:'black', strokeWidth:1});
board.create('functiongraph', [function(x){ return (x-3)*(x-3)-7; }, -2, 8], {strokeColor:'red', strokeWidth:2});
board.create('point', [3, -7], {name:'V(3,-7)', size:3, color:'blue'});
board.create('point', [0, 2], {name:'(0,2)', size:3, color:'blue', label:{offset:[10,0]}});
board.create('point', [3 - Math.sqrt(7), 0], {name:'3-\\sqrt{7}', size:3, color:'green', label:{offset:[-30,10]}});
board.create('point', [3 + Math.sqrt(7), 0], {name:'3+\\sqrt{7}', size:3, color:'green'});
board.unsuspendUpdate();`
      }
    }
  },
  'y11a-5i-q12c': {
    steps: [
      {
        explanation: "Rearrange the equation and factor out \\(-1\\) from the \\(x\\) terms to prepare for completing the square.",
        workingOut: "y = -x^2 + 4x + 5 \\implies y = -(x^2 - 4x) + 5"
      },
      {
        explanation: "Complete the square inside the parenthesis. Adding \\(4\\) inside means we subtracted \\(4\\), so we must add \\(4\\) outside.",
        workingOut: "y = -(x^2 - 4x + 4) + 4 + 5"
      },
      {
        explanation: "Write the expression in vertex form \\(y = a(x - h)^2 + k\\).",
        workingOut: "y = -(x - 2)^2 + 9"
      },
      {
        explanation: "Identify the vertex \\((h, k)\\). Since \\(a = -1\\), the parabola opens downwards and has a maximum.",
        workingOut: "\\text{Vertex: } (2, 9)"
      },
      {
        explanation: "Find the \\(y\\)-intercept by setting \\(x = 0\\).",
        workingOut: "y = 5 + 4(0) - 0^2 = 5 \\implies \\text{y-intercept: } (0, 5)"
      },
      {
        explanation: "Find the \\(x\\)-intercepts by setting \\(y = 0\\). Solve \\(-(x - 2)^2 + 9 = 0\\).",
        workingOut: "(x - 2)^2 = 9 \\implies x - 2 = \\pm 3 \\implies x = 5, -1"
      },
      {
        explanation: "Sketch the graph pointing downwards, crossing through the intercepts and vertex.",
        workingOut: "\\text{See the final graph in the solution below.}"
      }
    ],
    graph: {
      jsxGraph: {
        width: 400,
        height: 300,
        boundingbox: [-3, 11, 7, -2],
        script: `board.suspendUpdate();
board.create('arrow', [[-3,0],[7,0]], {strokeColor:'black', strokeWidth:1});
board.create('arrow', [[0,-2],[0,11]], {strokeColor:'black', strokeWidth:1});
board.create('functiongraph', [function(x){ return -(x-2)*(x-2)+9; }, -3, 7], {strokeColor:'red', strokeWidth:2});
board.create('point', [2, 9], {name:'V(2,9)', size:3, color:'blue'});
board.create('point', [0, 5], {name:'(0,5)', size:3, color:'blue', label:{offset:[10,0]}});
board.create('point', [-1, 0], {name:'(-1,0)', size:3, color:'green', label:{offset:[-20,-15]}});
board.create('point', [5, 0], {name:'(5,0)', size:3, color:'green', label:{offset:[10,-15]}});
board.unsuspendUpdate();`
      }
    }
  },
  'y11a-5i-q12d': {
    steps: [
      {
        explanation: "Group the \\(x\\) terms and complete the square by adding and subtracting \\((\\frac{b}{2})^2 = (-1)^2 = 1\\).",
        workingOut: "y = (x^2 - 2x) - 3 \\implies y = (x^2 - 2x + 1) - 1 - 3"
      },
      {
        explanation: "Write the expression in vertex form \\(y = a(x - h)^2 + k\\).",
        workingOut: "y = (x - 1)^2 - 4"
      },
      {
        explanation: "Identify the vertex \\((h, k)\\).",
        workingOut: "\\text{Vertex: } (1, -4)"
      },
      {
        explanation: "Find the \\(y\\)-intercept by setting \\(x = 0\\).",
        workingOut: "y = 0^2 - 2(0) - 3 = -3 \\implies \\text{y-intercept: } (0, -3)"
      },
      {
        explanation: "Find the \\(x\\)-intercepts by setting \\(y = 0\\). Solve \\((x - 1)^2 = 4\\).",
        workingOut: "x - 1 = \\pm 2 \\implies x = 3, -1"
      },
      {
        explanation: "Sketch the graph. The parabola opens upwards.",
        workingOut: "\\text{See the final graph in the solution below.}"
      }
    ],
    graph: {
      jsxGraph: {
        width: 400,
        height: 300,
        boundingbox: [-3, 6, 5, -6],
        script: `board.suspendUpdate();
board.create('arrow', [[-3,0],[5,0]], {strokeColor:'black', strokeWidth:1});
board.create('arrow', [[0,-6],[0,6]], {strokeColor:'black', strokeWidth:1});
board.create('functiongraph', [function(x){ return (x-1)*(x-1)-4; }, -3, 5], {strokeColor:'red', strokeWidth:2});
board.create('point', [1, -4], {name:'V(1,-4)', size:3, color:'blue'});
board.create('point', [0, -3], {name:'(0,-3)', size:3, color:'blue', label:{offset:[10,0]}});
board.create('point', [-1, 0], {name:'(-1,0)', size:3, color:'green', label:{offset:[-25,-15]}});
board.create('point', [3, 0], {name:'(3,0)', size:3, color:'green', label:{offset:[10,-15]}});
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
    
    // Remove graph from question body
    q.graphData = null;
    
    // Make sure it's teacher review (no opts)
    q.type = 'teacher_review';
    delete q.opts;
    delete q.a;
    delete q.answer;
    
    // Update steps
    q.solutionSteps = upd.steps;
    
    // Add graph to last solution step
    q.solutionSteps[q.solutionSteps.length - 1].graphData = upd.graph;
    
    q.solution = "Vertex form found by completing the square, intercepts calculated, and graphed as shown below.";
    
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
        type: 'teacher_review',
        opts: null,
        options: null,
        a: null,
        answer: null,
        solution: q.solution,
        solutionSteps: q.solutionSteps,
        graphData: null
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
            pData.subQuestions[sqIdx].opts = null;
            pData.subQuestions[sqIdx].options = null;
            pData.subQuestions[sqIdx].a = null;
            pData.subQuestions[sqIdx].answer = null;
            pData.subQuestions[sqIdx].solution = q.solution;
            pData.subQuestions[sqIdx].solutionSteps = q.solutionSteps;
            pData.subQuestions[sqIdx].graphData = null;
            await db.collection('questions').doc(parent.id).update({
              subQuestions: pData.subQuestions
            });
          }
        }
      }
    }
  }
  console.log('Successfully updated q12a-d: removed graph from question, added detailed steps, and injected graph to solution.');
  process.exit(0);
}
updateDb();
