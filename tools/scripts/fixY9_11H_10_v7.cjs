const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // Create circle using center point O(0,0) and vertex B(6,8) explicitly.
  // Use bold dark indigo strokeColor (#4f46e5) and strokeWidth 3 so it is unmistakably visible!
  const graphScript = `board.suspendUpdate();
board.create('arrow', [[-11.5,0],[11.5,0]], {strokeColor:'#94a3b8', strokeWidth:1.5});
board.create('arrow', [[0,-11.5],[0,11.5]], {strokeColor:'#94a3b8', strokeWidth:1.5});
board.create('text', [10.12, -4.025, 'x'], {fontSize:13, color:'#64748b'});
board.create('text', [0.12, 10.35, 'y'], {fontSize:13, color:'#64748b'});

var pO = board.create('point', [0,0], {name:'O', size:3, color:'#64748b', fixed:true});

var pA = board.create('point', [8, -6], {name:'A(8, -6)', size:3.5, color:'#1e293b', fixed:true, withLabel:true, label:{autoPosition:false, offset:[10, -15]}});
var pB = board.create('point', [6, 8], {name:'B(6, 8)', size:3.5, color:'#1e293b', fixed:true, withLabel:true, label:{autoPosition:false, offset:[10, 10]}});
var pC = board.create('point', [-8, 6], {name:'C(-8, 6)', size:3.5, color:'#1e293b', fixed:true, withLabel:true, label:{autoPosition:false, offset:[-65, 10]}});
var pD = board.create('point', [-6, -8], {name:'D(-6, -8)', size:3.5, color:'#1e293b', fixed:true, withLabel:true, label:{autoPosition:false, offset:[-70, -10]}});

// Circle centered at O and passing through B(6,8), with bold dark indigo border (#4f46e5)
board.create('circle', [pO, pB], {strokeColor:'#4f46e5', strokeWidth:3, fillColor:'#6366f1', fillOpacity:0.08});
board.create('text', [5.2, 7.8, 'x² + y² = 100'], {fontSize:13, color:'#4f46e5', fontWeight:'bold'});

// Inscribed Square ABCD segments
board.create('segment', [pA, pB], {strokeColor: '#1e293b', strokeWidth: 2});
board.create('segment', [pB, pC], {strokeColor: '#1e293b', strokeWidth: 2});
board.create('segment', [pC, pD], {strokeColor: '#1e293b', strokeWidth: 2});
board.create('segment', [pD, pA], {strokeColor: '#1e293b', strokeWidth: 2});

board.unsuspendUpdate();`;

  const baseGraphData = {
    jsxGraph: {
      width: 340,
      height: 340,
      boundingbox: [-11.5, 11.5, 11.5, -11.5],
      showConstructionPoints: true,
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

  console.log("Successfully updated circle to use explicit point reference [pO, pB] and bold stroke #4f46e5");
  process.exit(0);
}

run().catch(console.error);
