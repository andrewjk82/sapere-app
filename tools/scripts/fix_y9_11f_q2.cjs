const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const filePath = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear9Ch11FQuestions.js';
let content = fs.readFileSync(filePath, 'utf8');
const match = content.match(/export const Y9_CH11F_QUESTIONS = (\[[\s\S]*\]);$/m);
let questions = eval(match[1]);

let updatedQs = [];

const configs = {
  'y9-11f-q2a': {
    targetExp: '(-1)*x + 6',
    targetLabel: 'y = -x + 6'
  },
  'y9-11f-q2b': {
    targetExp: '(4)*x + 6',
    targetLabel: 'y = 4x + 6'
  },
  'y9-11f-q2c': {
    targetExp: '(1/3)*x + 6',
    targetLabel: 'y = (1/3)x + 6'
  },
  'y9-11f-q2d': {
    targetExp: '(2)*x - 4',
    targetLabel: 'y = 2x - 4'
  }
};

for (let id of Object.keys(configs)) {
  let q = questions.find(x => x.id === id);
  if (!q) {
    let parent = questions.find(x => x.subQuestions && x.subQuestions.some(sq => sq.id === id));
    if (parent) q = parent.subQuestions.find(sq => sq.id === id);
  }
  if (q) {
    // 1. Remove graph from question body
    delete q.graphData;
    
    // 2. Add dual graph to solution steps
    if (q.solutionSteps && q.solutionSteps.length > 0) {
      let scriptStr = `board.suspendUpdate();
board.create('arrow', [[-6,0],[6,0]], {strokeColor:'#94a3b8', strokeWidth:1.5});
board.create('arrow', [[0,-8],[0,8]], {strokeColor:'#94a3b8', strokeWidth:1.5});
board.create('text', [5.28, -1, 'x'], {fontSize:13, color:'#64748b'});
board.create('text', [0.3, 7.5, 'y'], {fontSize:13, color:'#64748b'});
// Reference line
board.create('functiongraph', [function(x){ return 2*x + 6; }, -6, 6], {strokeColor:'#94a3b8', strokeWidth:2, dash:2});
board.create('text', [-3, 1.5, 'l: y = 2x + 6'], {fontSize:12, color:'#94a3b8', strokeColor:'#94a3b8'});
// Target line
board.create('functiongraph', [function(x){ return ${configs[id].targetExp}; }, -6, 6], {strokeColor:'#ef4444', strokeWidth:3});
board.create('text', [1.5, -3, 'Target: ${configs[id].targetLabel}'], {fontSize:14, color:'#ef4444', strokeColor:'#ef4444'});
board.unsuspendUpdate();`;

      q.solutionSteps[q.solutionSteps.length - 1].graphData = {
        jsxGraph: {
          width: 360,
          height: 300,
          boundingbox: [-6, 8, 6, -8],
          script: scriptStr
        }
      };
      
      // Update explanation to point to the graph
      let expl = q.solutionSteps[q.solutionSteps.length - 1].explanation;
      if (!expl.includes('graph')) {
         q.solutionSteps[q.solutionSteps.length - 1].explanation = expl + " (See the red line in the solution graph below.)";
      }
    }
    updatedQs.push(q);
  }
}

const newArrayStr = JSON.stringify(questions, null, 2).replace(/"([a-zA-Z_$][0-9a-zA-Z_$]*)":/g, '$1:');
fs.writeFileSync(filePath, content.substring(0, match.index) + 'export const Y9_CH11F_QUESTIONS = ' + newArrayStr + ';\n', 'utf8');

async function updateDb() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  for (let q of updatedQs) {
    let isSub = !questions.find(x => x.id === q.id);
    if (!isSub) {
      await db.collection('questions').doc(q.id).update({
        graphData: null, // delete from DB
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
  console.log('Successfully updated q2a-d: removed misleading graph from question and added comparative graph to solution.');
  process.exit(0);
}
updateDb();
