const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const filePath = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear11Ch5IQuestions.js';
let content = fs.readFileSync(filePath, 'utf8');
const match = content.match(/export const Y11_CH5I_QUESTIONS = (\[[\s\S]*\]);$/m);
let questions = eval(match[1]);

let updatedQs = [];

const updates = {
  'y11a-5i-q17c': {
    steps: [
      {
        explanation: "Analyze the transformation \\(y = f(x - 2)\\). Subtracting \\(2\\) inside the function arguments represents a horizontal shift.",
        workingOut: "\\text{Shift RIGHT by 2 units.}"
      },
      {
        explanation: "Identify key features on the original graph and add \\(2\\) to all their \\(x\\)-coordinates.",
        workingOut: "(x, y) \\to (x + 2, y)"
      },
      {
        explanation: "Sketch the new curve. The shape is identical, just translated 2 units horizontally to the right.",
        workingOut: "\\text{See the comparative graph below.}"
      }
    ],
    graph: {
      jsxGraph: {
        width: 400,
        height: 300,
        boundingbox: [-5, 5, 7, -3],
        script: `board.suspendUpdate();
board.create('arrow', [[-5,0],[7,0]], {strokeColor:'black'});
board.create('arrow', [[0,-3],[0,5]], {strokeColor:'black'});
// Original
board.create('functiongraph', [function(x){ return 0.1*(x+2)*(x+2)*(3-x) + 0.5; }, -5, 4], {strokeColor:'#94a3b8',strokeWidth:2, dash:2});
board.create('text', [-3, 3, 'y = f(x)'], {color:'#94a3b8'});
// Transformed
board.create('functiongraph', [function(x){ return 0.1*(x)*(x)*(3-(x-2)) + 0.5; }, -3, 6], {strokeColor:'red',strokeWidth:2});
board.create('text', [4, 3, 'y = f(x-2)'], {color:'red'});
// Arrows
board.create('arrow', [[-2,0.5], [0,0.5]], {strokeColor:'green', strokeWidth:1.5, dash:1});
board.create('arrow', [[0,1.7], [2,1.7]], {strokeColor:'green', strokeWidth:1.5, dash:1});
board.unsuspendUpdate();`
      }
    }
  },
  'y11a-5i-q17d': {
    steps: [
      {
        explanation: "Analyze the transformation \\(y = f(x) - 2\\). Subtracting \\(2\\) outside the function represents a vertical shift.",
        workingOut: "\\text{Shift DOWNWARDS by 2 units.}"
      },
      {
        explanation: "Identify key features on the original graph and subtract \\(2\\) from all their \\(y\\)-coordinates.",
        workingOut: "(x, y) \\to (x, y - 2)"
      },
      {
        explanation: "Sketch the new curve maintaining the exact same shape, translated vertically.",
        workingOut: "\\text{See the comparative graph below.}"
      }
    ],
    graph: {
      jsxGraph: {
        width: 400,
        height: 300,
        boundingbox: [-5, 5, 5, -5],
        script: `board.suspendUpdate();
board.create('arrow', [[-5,0],[5,0]], {strokeColor:'black'});
board.create('arrow', [[0,-5],[0,5]], {strokeColor:'black'});
// Original
board.create('functiongraph', [function(x){ return 0.1*(x+2)*(x+2)*(3-x) + 0.5; }, -5, 4], {strokeColor:'#94a3b8',strokeWidth:2, dash:2});
board.create('text', [2, 3, 'y = f(x)'], {color:'#94a3b8'});
// Transformed
board.create('functiongraph', [function(x){ return 0.1*(x+2)*(x+2)*(3-x) + 0.5 - 2; }, -5, 4], {strokeColor:'red',strokeWidth:2});
board.create('text', [2, -2, 'y = f(x)-2'], {color:'red'});
// Arrows
board.create('arrow', [[-2,0.5], [-2,-1.5]], {strokeColor:'green', strokeWidth:1.5, dash:1});
board.unsuspendUpdate();`
      }
    }
  },
  'y11a-5i-q17e': {
    steps: [
      {
        explanation: "Analyze the transformation \\(y = f(-x)\\). Negating the input \\(x\\) causes a horizontal reflection.",
        workingOut: "\\text{Reflect across the } y\\text{-axis.}"
      },
      {
        explanation: "Identify key features on the original graph and negate their \\(x\\)-coordinates.",
        workingOut: "(x, y) \\to (-x, y)"
      },
      {
        explanation: "Sketch the new curve by flipping the graph like a mirror image across the vertical axis.",
        workingOut: "\\text{See the comparative graph below.}"
      }
    ],
    graph: {
      jsxGraph: {
        width: 400,
        height: 300,
        boundingbox: [-5, 5, 5, -3],
        script: `board.suspendUpdate();
board.create('arrow', [[-5,0],[5,0]], {strokeColor:'black'});
board.create('arrow', [[0,-3],[0,5]], {strokeColor:'black'});
// Original
board.create('functiongraph', [function(x){ return 0.1*(x+2)*(x+2)*(3-x) + 0.5; }, -5, 4], {strokeColor:'#94a3b8',strokeWidth:2, dash:2});
board.create('text', [-3, 3, 'y = f(x)'], {color:'#94a3b8'});
// Transformed
board.create('functiongraph', [function(x){ return 0.1*(-x+2)*(-x+2)*(3+x) + 0.5; }, -4, 5], {strokeColor:'red',strokeWidth:2});
board.create('text', [3, 3, 'y = f(-x)'], {color:'red'});
// Arrows
board.create('arrow', [[1.33,1.98], [-1.33,1.98]], {strokeColor:'green', strokeWidth:1.5, dash:1});
board.unsuspendUpdate();`
      }
    }
  },
  'y11a-5i-q17f': {
    steps: [
      {
        explanation: "Analyze the transformation \\(y = -f(x)\\). Negating the output of the function causes a vertical reflection.",
        workingOut: "\\text{Reflect across the } x\\text{-axis.}"
      },
      {
        explanation: "Identify key features on the original graph and negate their \\(y\\)-coordinates.",
        workingOut: "(x, y) \\to (x, -y)"
      },
      {
        explanation: "Sketch the new curve by flipping the graph upside down across the horizontal axis.",
        workingOut: "\\text{See the comparative graph below.}"
      }
    ],
    graph: {
      jsxGraph: {
        width: 400,
        height: 300,
        boundingbox: [-5, 4, 5, -4],
        script: `board.suspendUpdate();
board.create('arrow', [[-5,0],[5,0]], {strokeColor:'black'});
board.create('arrow', [[0,-4],[0,4]], {strokeColor:'black'});
// Original
board.create('functiongraph', [function(x){ return 0.1*(x+2)*(x+2)*(3-x) + 0.5; }, -5, 4], {strokeColor:'#94a3b8',strokeWidth:2, dash:2});
board.create('text', [-3, 3, 'y = f(x)'], {color:'#94a3b8'});
// Transformed
board.create('functiongraph', [function(x){ return -(0.1*(x+2)*(x+2)*(3-x) + 0.5); }, -5, 4], {strokeColor:'red',strokeWidth:2});
board.create('text', [2, -2, 'y = -f(x)'], {color:'red'});
// Arrows
board.create('arrow', [[1.33,1.98], [1.33,-1.98]], {strokeColor:'green', strokeWidth:1.5, dash:1});
board.unsuspendUpdate();`
      }
    }
  },
  'y11a-5i-q17g': {
    steps: [
      {
        explanation: "Analyze the transformation \\(y = -f(-x)\\). This combines a reflection across the \\(x\\)-axis and a reflection across the \\(y\\)-axis.",
        workingOut: "\\text{Reflect across the origin (a } 180^\\circ \\text{ rotation).}"
      },
      {
        explanation: "Identify key features on the original graph and negate both coordinates.",
        workingOut: "(x, y) \\to (-x, -y)"
      },
      {
        explanation: "Sketch the curve. It's often easiest to perform the two reflections one at a time.",
        workingOut: "\\text{See the comparative graph below.}"
      }
    ],
    graph: {
      jsxGraph: {
        width: 400,
        height: 300,
        boundingbox: [-5, 4, 5, -4],
        script: `board.suspendUpdate();
board.create('arrow', [[-5,0],[5,0]], {strokeColor:'black'});
board.create('arrow', [[0,-4],[0,4]], {strokeColor:'black'});
// Original
board.create('functiongraph', [function(x){ return 0.1*(x+2)*(x+2)*(3-x) + 0.5; }, -5, 4], {strokeColor:'#94a3b8',strokeWidth:2, dash:2});
board.create('text', [-3, 3, 'y = f(x)'], {color:'#94a3b8'});
// Transformed
board.create('functiongraph', [function(x){ return -(0.1*(-x+2)*(-x+2)*(3+x) + 0.5); }, -4, 5], {strokeColor:'red',strokeWidth:2});
board.create('text', [3, -2, 'y = -f(-x)'], {color:'red'});
// Arrows
board.create('arrow', [[1.33,1.98], [-1.33,-1.98]], {strokeColor:'green', strokeWidth:1.5, dash:1});
board.unsuspendUpdate();`
      }
    }
  },
  'y11a-5i-q17h': {
    steps: [
      {
        explanation: "Analyze the transformation \\(y = 3f(x)\\). Multiplying the output by a constant \\(> 1\\) causes a vertical stretch (dilation).",
        workingOut: "\\text{Vertical dilation by a scale factor of } 3."
      },
      {
        explanation: "Identify key features on the original graph and multiply their \\(y\\)-coordinates by \\(3\\). The \\(x\\)-intercepts remain fixed.",
        workingOut: "(x, y) \\to (x, 3y)"
      },
      {
        explanation: "Sketch the curve. It will appear 'taller' and steeper.",
        workingOut: "\\text{See the comparative graph below.}"
      }
    ],
    graph: {
      jsxGraph: {
        width: 400,
        height: 300,
        boundingbox: [-5, 8, 5, -4],
        script: `board.suspendUpdate();
board.create('arrow', [[-5,0],[5,0]], {strokeColor:'black'});
board.create('arrow', [[0,-4],[0,8]], {strokeColor:'black'});
// Original
board.create('functiongraph', [function(x){ return 0.1*(x+2)*(x+2)*(3-x) + 0.5; }, -5, 4], {strokeColor:'#94a3b8',strokeWidth:2, dash:2});
board.create('text', [2, 2, 'y = f(x)'], {color:'#94a3b8'});
// Transformed
board.create('functiongraph', [function(x){ return 3*(0.1*(x+2)*(x+2)*(3-x) + 0.5); }, -5, 4], {strokeColor:'red',strokeWidth:2});
board.create('text', [2.5, 6, 'y = 3f(x)'], {color:'red'});
// Arrows
board.create('arrow', [[1.33,1.98], [1.33,5.94]], {strokeColor:'green', strokeWidth:1.5, dash:1});
board.unsuspendUpdate();`
      }
    }
  },
  'y11a-5i-q17i': {
    steps: [
      {
        explanation: "Analyze the transformation \\(y = f(\\frac{1}{3}x)\\). Multiplying the input by a factor less than \\(1\\) causes a horizontal stretch (dilation).",
        workingOut: "\\text{Horizontal dilation by a scale factor of } 3."
      },
      {
        explanation: "Identify key features on the original graph and multiply their \\(x\\)-coordinates by \\(3\\). The \\(y\\)-intercept remains fixed.",
        workingOut: "(x, y) \\to (3x, y)"
      },
      {
        explanation: "Sketch the curve. It will appear horizontally 'wider'.",
        workingOut: "\\text{See the comparative graph below.}"
      }
    ],
    graph: {
      jsxGraph: {
        width: 400,
        height: 300,
        boundingbox: [-10, 4, 10, -2],
        script: `board.suspendUpdate();
board.create('arrow', [[-10,0],[10,0]], {strokeColor:'black'});
board.create('arrow', [[0,-2],[0,4]], {strokeColor:'black'});
// Original
board.create('functiongraph', [function(x){ return 0.1*(x+2)*(x+2)*(3-x) + 0.5; }, -5, 4], {strokeColor:'#94a3b8',strokeWidth:2, dash:2});
board.create('text', [-3, 3, 'y = f(x)'], {color:'#94a3b8'});
// Transformed
board.create('functiongraph', [function(x){ return 0.1*(x/3+2)*(x/3+2)*(3-x/3) + 0.5; }, -10, 10], {strokeColor:'red',strokeWidth:2});
board.create('text', [6, 2, 'y = f(x/3)'], {color:'red'});
// Arrows
board.create('arrow', [[-2,0.5], [-6,0.5]], {strokeColor:'green', strokeWidth:1.5, dash:1});
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
    
    q.type = 'teacher_review';
    delete q.opts;
    delete q.a;
    delete q.answer;
    
    q.solutionSteps = upd.steps;
    q.solutionSteps[q.solutionSteps.length - 1].graphData = upd.graph;
    q.solution = "See the final comparative graph.";
    q.requiresManualGrading = true;
    // Keep root graphData
    
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
  console.log('Successfully updated q17c through q17i.');
  process.exit(0);
}
updateDb();
