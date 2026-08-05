const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  // FIX Q13 GRAPH
  const q13GraphScript = `board.suspendUpdate();
board.create('arrow', [[-1,0],[11,0]], {strokeColor:'#94a3b8', strokeWidth:1.5});
board.create('arrow', [[0,-1],[0,7]], {strokeColor:'#94a3b8', strokeWidth:1.5});
board.create('text', [10.5, -0.5, 'x'], {fontSize:13, color:'#64748b'});
board.create('text', [0.2, 6.5, 'y'], {fontSize:13, color:'#64748b'});

board.create('point', [2, 1], {name:'A', size:3, color:'#ef4444'});
board.create('point', [5, 5], {name:'B', size:3, color:'#ef4444'});
board.create('point', [9, 2], {name:'C', size:3, color:'#ef4444'});

board.create('segment', [[2,1], [5,5]], {strokeColor:'#6366f1', strokeWidth:2});
board.create('segment', [[5,5], [9,2]], {strokeColor:'#6366f1', strokeWidth:2});
board.create('segment', [[9,2], [2,1]], {strokeColor:'#94a3b8', strokeWidth:1.5, dash:2});

board.unsuspendUpdate();`;
  const q13Graph = { jsxGraph: { width: 360, height: 280, boundingbox: [-1, 7, 11, -1], script: q13GraphScript } };
  
  batch.update(db.collection('questions').doc('y9-11g-q13'), { graphData: q13Graph });
  ['a','b','c','d'].forEach(sub => {
    batch.update(db.collection('questions').doc(`y9-11g-q13${sub}`), { graphData: q13Graph });
  });

  // FIX Q14 GRAPH
  const q14GraphScript = `board.suspendUpdate();
board.create('arrow', [[-1,0],[10,0]], {strokeColor:'#94a3b8', strokeWidth:1.5});
board.create('arrow', [[0,-8],[0,3]], {strokeColor:'#94a3b8', strokeWidth:1.5});
board.create('text', [9.5, -0.5, 'x'], {fontSize:13, color:'#64748b'});
board.create('text', [0.2, 2.5, 'y'], {fontSize:13, color:'#64748b'});

board.create('point', [1, -3], {name:'A', size:3, color:'#ef4444', label:{offset:[-15,-15]}});
board.create('point', [4, 1], {name:'B', size:3, color:'#ef4444', label:{offset:[-10,15]}});
board.create('point', [8, -2], {name:'C', size:3, color:'#ef4444', label:{offset:[10,10]}});
board.create('point', [5, -6], {name:'D', size:3, color:'#ef4444', label:{offset:[10,-15]}});

board.create('segment', [[1,-3], [4,1]], {strokeColor:'#6366f1', strokeWidth:2});
board.create('segment', [[4,1], [8,-2]], {strokeColor:'#6366f1', strokeWidth:2});
board.create('segment', [[8,-2], [5,-6]], {strokeColor:'#6366f1', strokeWidth:2});
board.create('segment', [[5,-6], [1,-3]], {strokeColor:'#6366f1', strokeWidth:2});

board.create('segment', [[1,-3], [8,-2]], {strokeColor:'#10b981', strokeWidth:1.5, dash:2});
board.create('segment', [[4,1], [5,-6]], {strokeColor:'#10b981', strokeWidth:1.5, dash:2});

board.unsuspendUpdate();`;
  const q14Graph = { jsxGraph: { width: 360, height: 320, boundingbox: [-1, 3, 10, -8], script: q14GraphScript } };
  
  batch.update(db.collection('questions').doc('y9-11g-q14'), { graphData: q14Graph });
  ['a','b','c','d'].forEach(sub => {
    batch.update(db.collection('questions').doc(`y9-11g-q14${sub}`), { graphData: q14Graph });
  });

  // FIX Q15 GRAPH
  const q15GraphScript = `board.suspendUpdate();
board.create('arrow', [[-1,0],[10,0]], {strokeColor:'#94a3b8', strokeWidth:1.5});
board.create('arrow', [[0,-5],[0,7]], {strokeColor:'#94a3b8', strokeWidth:1.5});
board.create('text', [9.5, -0.5, 'x'], {fontSize:13, color:'#64748b'});
board.create('text', [0.2, 6.5, 'y'], {fontSize:13, color:'#64748b'});

board.create('point', [2, -3], {name:'P', size:3, color:'#ef4444', label:{offset:[-15,-15]}});
board.create('point', [4, 5], {name:'Q', size:3, color:'#ef4444', label:{offset:[-10,15]}});
board.create('point', [8, -1], {name:'R', size:3, color:'#ef4444', label:{offset:[10,-10]}});

board.create('segment', [[2,-3], [4,5]], {strokeColor:'#6366f1', strokeWidth:2});
board.create('segment', [[4,5], [8,-1]], {strokeColor:'#6366f1', strokeWidth:2});
board.create('segment', [[8,-1], [2,-3]], {strokeColor:'#6366f1', strokeWidth:2});

board.unsuspendUpdate();`;
  const q15Graph = { jsxGraph: { width: 360, height: 320, boundingbox: [-1, 7, 10, -5], script: q15GraphScript } };
  
  batch.update(db.collection('questions').doc('y9-11g-q15'), { graphData: q15Graph });
  ['a','b','c','d','e','f','g','h'].forEach(sub => {
    batch.update(db.collection('questions').doc(`y9-11g-q15${sub}`), { graphData: q15Graph });
  });

  await batch.commit();
  console.log("Fixed JSXGraph segment bugs for q13, q14, and q15.");
  process.exit(0);
}

run().catch(console.error);
