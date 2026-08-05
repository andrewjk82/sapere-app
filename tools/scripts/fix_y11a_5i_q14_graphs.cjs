const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const filePath = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear11Ch5IQuestions.js';
let content = fs.readFileSync(filePath, 'utf8');
const match = content.match(/export const Y11_CH5I_QUESTIONS = (\[[\s\S]*\]);$/m);
let questions = eval(match[1]);

let updatedQs = [];

const updates = {
  'y11a-5i-q14a': {
    graph: {
      jsxGraph: {
        width: 400,
        height: 300,
        boundingbox: [-4, 8, 8, -2],
        script: `board.suspendUpdate();
board.create('arrow', [[-4,0],[8,0]], {strokeColor:'black', strokeWidth:1});
board.create('arrow', [[0,-2],[0,8]], {strokeColor:'black', strokeWidth:1});

// Original graph
board.create('functiongraph', [function(x){ return x*x; }, -4, 4], {strokeColor:'#94a3b8', strokeWidth:2, dash:2});
board.create('point', [0, 0], {name:'(0,0)', size:3, color:'#94a3b8', label:{offset:[10,-10]}});
board.create('text', [-2, 5, 'y = x^2'], {color:'#94a3b8'});

// Transformed graph
board.create('functiongraph', [function(x){ return (x-3)*(x-3)+2; }, 0, 8], {strokeColor:'red', strokeWidth:2});
board.create('point', [3, 2], {name:'V(3,2)', size:3, color:'blue', label:{offset:[10,-10]}});
board.create('text', [4, 6, 'y = (x-3)^2 + 2'], {color:'red'});

// Shift arrow
board.create('arrow', [[0,0], [3,2]], {strokeColor:'green', strokeWidth:1.5, dash:1});
board.unsuspendUpdate();`
      }
    }
  },
  'y11a-5i-q14b': {
    graph: {
      jsxGraph: {
        width: 400,
        height: 300,
        boundingbox: [-8, 4, 4, -10],
        script: `board.suspendUpdate();
board.create('arrow', [[-8,0],[4,0]], {strokeColor:'black', strokeWidth:1});
board.create('arrow', [[0,-10],[0,4]], {strokeColor:'black', strokeWidth:1});

// Original graph
board.create('functiongraph', [function(x){ return 1/x; }, -8, -0.01], {strokeColor:'#94a3b8', strokeWidth:2, dash:2});
board.create('functiongraph', [function(x){ return 1/x; }, 0.01, 4], {strokeColor:'#94a3b8', strokeWidth:2, dash:2});
board.create('text', [1, 2, 'y = 1/x'], {color:'#94a3b8'});

// Transformed graph asymptotes
board.create('line', [[-3, -10], [-3, 4]], {strokeColor:'blue', strokeWidth:1, dash:2});
board.create('line', [[-8, -4], [4, -4]], {strokeColor:'blue', strokeWidth:1, dash:2});
board.create('text', [-3.2, 2, 'x = -3'], {color:'blue', anchorY:'middle', anchorX:'right'});
board.create('text', [2, -3.8, 'y = -4'], {color:'blue', anchorY:'bottom'});

// Transformed graph
board.create('functiongraph', [function(x){ return 1/(x+3) - 4; }, -8, -3.05], {strokeColor:'red', strokeWidth:2});
board.create('functiongraph', [function(x){ return 1/(x+3) - 4; }, -2.95, 4], {strokeColor:'red', strokeWidth:2});
board.create('text', [-1.5, -6, 'y = 1/(x+3) - 4'], {color:'red'});

// Reference point shift (1,1) to (-2, -3)
board.create('point', [1, 1], {name:'(1,1)', size:2, color:'#94a3b8'});
board.create('point', [-2, -3], {name:'(-2,-3)', size:3, color:'red', label:{offset:[10,0]}});
board.create('arrow', [[1,1], [-2,-3]], {strokeColor:'green', strokeWidth:1.5, dash:1});

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
    
    // Remove graph from root
    q.graphData = null;
    
    // Ensure we append text about the graph to the last step explanation
    let lastStep = q.solutionSteps[q.solutionSteps.length - 1];
    if (!lastStep.explanation.includes('graph')) {
        lastStep.explanation += " (See the comparative graph in the solution below.)";
    }
    
    // Add graph to last step
    lastStep.graphData = upd.graph;
    
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
        graphData: null,
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
            pData.subQuestions[sqIdx].graphData = null;
            pData.subQuestions[sqIdx].solutionSteps = q.solutionSteps;
            await db.collection('questions').doc(parent.id).update({
              subQuestions: pData.subQuestions
            });
          }
        }
      }
    }
  }
  console.log('Successfully updated q14a and q14b to have comparative graphs in solution.');
  process.exit(0);
}
updateDb();
