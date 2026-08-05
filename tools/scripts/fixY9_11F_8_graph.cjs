const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  const graphScript = `board.suspendUpdate();
board.create('arrow', [[-2,0],[12,0]], {strokeColor:'#94a3b8', strokeWidth:1.5});
board.create('arrow', [[0,-5],[0,10]], {strokeColor:'#94a3b8', strokeWidth:1.5});
board.create('text', [11.5, -0.5, 'x'], {fontSize:13, color:'#64748b'});
board.create('text', [0.2, 9.5, 'y'], {fontSize:13, color:'#64748b'});

board.create('segment', [[2,3], [6,7]], {strokeColor:'#94a3b8', strokeWidth:1.5});
board.create('segment', [[6,7], [9,1]], {strokeColor:'#94a3b8', strokeWidth:1.5});
board.create('segment', [[9,1], [7,-3]], {strokeColor:'#94a3b8', strokeWidth:1.5});
board.create('segment', [[7,-3], [2,3]], {strokeColor:'#94a3b8', strokeWidth:1.5});
board.create('point', [2, 3], {name:'A', size:3, color:'#ef4444'});
board.create('point', [6, 7], {name:'B', size:3, color:'#ef4444'});
board.create('point', [9, 1], {name:'C', size:3, color:'#ef4444'});
board.create('point', [7, -3], {name:'D', size:3, color:'#ef4444'});

board.create('point', [4, 5], {name:'M', size:3, color:'#10b981', label:{offset:[-15, 10]}});
board.create('point', [8, -1], {name:'N', size:3, color:'#10b981', label:{offset:[10, 5]}});
board.create('point', [5.5, 2], {name:'P', size:3, color:'#f59e0b', label:{offset:[10, 10]}});

board.create('functiongraph', [function(x){ return -1.5*x + 11; }], {strokeColor:'#6366f1', strokeWidth:2});
board.create('functiongraph', [function(x){ return 3*x - 14.5; }], {strokeColor:'#f59e0b', strokeWidth:2, strokeDasharray:'4 4'});

board.unsuspendUpdate();`;

  const parentGraphData = { jsxGraph: { width: 360, height: 360, boundingbox: [-2, 10, 12, -5], script: graphScript } };

  await db.collection('questions').doc('y9-11f-q8').update({
    graphData: parentGraphData,
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log("Fixed y9-11f-q8 graphData successfully.");
  process.exit(0);
}

run().catch(console.error);
