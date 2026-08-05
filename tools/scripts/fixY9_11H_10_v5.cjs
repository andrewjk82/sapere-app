const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // Exactly match the codebase's official seed script format for Chapter 11H circles!
  const graphScript = `board.suspendUpdate();
board.create('arrow', [[-11.5,0],[11.5,0]], {strokeColor:'#94a3b8', strokeWidth:1.5});
board.create('arrow', [[0,-11.5],[0,11.5]], {strokeColor:'#94a3b8', strokeWidth:1.5});
board.create('text', [10.12, -4.025, 'x'], {fontSize:13, color:'#64748b'});
board.create('text', [0.12, 10.35, 'y'], {fontSize:13, color:'#64748b'});

board.create('circle', [[0,0], 10], {strokeColor:'#6366f1', strokeWidth:2.5, fillColor:'#6366f1', fillOpacity:0.06});
board.create('point', [0,0], {name:'O', size:2, color:'#64748b', fixed:true});
board.create('text', [5, 7.5, 'x² + y² = 100'], {fontSize:12, color:'#4f46e5'});

board.create('point', [8, -6], {name:'A(8, -6)', size:3, color:'#1e293b', fixed:true, withLabel:true, label:{autoPosition:false, offset:[10, -15]}});
board.create('point', [6, 8], {name:'B(6, 8)', size:3, color:'#1e293b', fixed:true, withLabel:true, label:{autoPosition:false, offset:[10, 10]}});
board.create('point', [-8, 6], {name:'C(-8, 6)', size:3, color:'#1e293b', fixed:true, withLabel:true, label:{autoPosition:false, offset:[-65, 10]}});
board.create('point', [-6, -8], {name:'D(-6, -8)', size:3, color:'#1e293b', fixed:true, withLabel:true, label:{autoPosition:false, offset:[-70, -10]}});

board.create('segment', [[8, -6], [6, 8]], {strokeColor: '#334155', strokeWidth: 1.5});
board.create('segment', [[6, 8], [-8, 6]], {strokeColor: '#334155', strokeWidth: 1.5});
board.create('segment', [[-8, 6], [-6, -8]], {strokeColor: '#334155', strokeWidth: 1.5});
board.create('segment', [[-6, -8], [8, -6]], {strokeColor: '#334155', strokeWidth: 1.5});

board.unsuspendUpdate();`;

  const baseGraphData = {
    jsxGraph: {
      width: 340,
      height: 340,
      boundingbox: [-11.5, 11.5, 11.5, -11.5],
      script: graphScript
    }
  };

  // Update parent document
  await db.collection('questions').doc('y9-11h-q10').update({
    graphData: baseGraphData,
    updatedAt: FieldValue.serverTimestamp()
  });

  // Sync subQuestions array on parent
  const subIds = ['y9-11h-q10a', 'y9-11h-q10b', 'y9-11h-q10c', 'y9-11h-q10d'];
  const subQuestions = [];
  for (const id of subIds) {
    const doc = await db.collection('questions').doc(id).get();
    if (doc.exists) {
      subQuestions.push({
        id: id,
        ...doc.data(),
      });
    }
  }

  await db.collection('questions').doc('y9-11h-q10').update({
    subQuestions: subQuestions,
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log("Successfully rebuilt graph for y9-11h-q10 following native seed format!");
  process.exit(0);
}

run().catch(console.error);
