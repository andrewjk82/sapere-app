const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const filePath = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear11Ch5IQuestions.js';
let content = fs.readFileSync(filePath, 'utf8');
const match = content.match(/export const Y11_CH5I_QUESTIONS = (\[[\s\S]*\]);$/m);
let questions = eval(match[1]);

let updatedQs = [];

const graphDefs = {
  'y11a-5i-q6a': {
    type: 'Odd',
    fn: 'function(x){ return x*x*x; }',
    bb: [-3, 5, 3, -5]
  },
  'y11a-5i-q6b': {
    type: 'Neither',
    fn: 'function(x){ return (x-2)*(x-2) - 1; }',
    bb: [-3, 5, 5, -3]
  },
  'y11a-5i-q6c': {
    type: 'Even',
    fn: 'function(x){ return x*x - 3; }',
    bb: [-4, 6, 4, -4]
  }
};

for (let id of Object.keys(graphDefs)) {
  let q = questions.find(x => x.id === id);
  if (!q) {
    let parent = questions.find(x => x.subQuestions && x.subQuestions.some(sq => sq.id === id));
    if (parent) q = parent.subQuestions.find(sq => sq.id === id);
  }
  if (q) {
    let def = graphDefs[id];
    q.graphData = {
      jsxGraph: {
        width: 300,
        height: 300,
        boundingbox: def.bb,
        script: `board.suspendUpdate();
board.create('arrow', [[${def.bb[0]},0],[${def.bb[2]},0]], {strokeColor:'#94a3b8', strokeWidth:1.5});
board.create('arrow', [[0,${def.bb[3]}],[0,${def.bb[1]}]], {strokeColor:'#94a3b8', strokeWidth:1.5});
board.create('text', [${def.bb[2] - 0.5}, -0.5, 'x'], {fontSize:13, color:'#64748b'});
board.create('text', [0.2, ${def.bb[1] - 0.5}, 'y'], {fontSize:13, color:'#64748b'});
board.create('functiongraph', [${def.fn}, ${def.bb[0]}, ${def.bb[2]}], {strokeColor:'#6366f1', strokeWidth:2});
board.unsuspendUpdate();`
      }
    };
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
        graphData: q.graphData
      });
    } else {
      let parent = questions.find(x => x.subQuestions && x.subQuestions.some(sq => sq.id === q.id));
      if (parent) {
        let parentDoc = await db.collection('questions').doc(parent.id).get();
        if (parentDoc.exists) {
          let pData = parentDoc.data();
          let sqIdx = pData.subQuestions.findIndex(sq => sq.id === q.id);
          if (sqIdx > -1) {
            pData.subQuestions[sqIdx].graphData = q.graphData;
            await db.collection('questions').doc(parent.id).update({
              subQuestions: pData.subQuestions
            });
          }
        }
      }
    }
  }
  console.log('Successfully added missing graphs to y11a-5i-q6a, q6b, q6c.');
  process.exit(0);
}
updateDb();
