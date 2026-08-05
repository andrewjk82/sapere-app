const fs = require('fs');
const path = require('path');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const seedFilePath = path.join(__dirname, '../../src/constants/seedYear9Ch11HQuestions.js');

  // Using parametric curve for circle and straightFirst/Last: false line segments for square.
  // This completely bypasses JSXGraph's circle/segment bug in JsxGraphDiagram.jsx!
  const graphScript = `board.suspendUpdate();
board.create('arrow', [[-11.5,0],[11.5,0]], {strokeColor:'#94a3b8', strokeWidth:1.5});
board.create('arrow', [[0,-11.5],[0,11.5]], {strokeColor:'#94a3b8', strokeWidth:1.5});
board.create('text', [10.12, -4.025, 'x'], {fontSize:13, color:'#64748b'});
board.create('text', [0.12, 10.35, 'y'], {fontSize:13, color:'#64748b'});

board.create('curve', [
  function(t) { return 10 * Math.cos(t); },
  function(t) { return 10 * Math.sin(t); },
  0, 2 * Math.PI
], {
  strokeColor: '#6366f1',
  strokeWidth: 2.5,
  fillColor: '#6366f1',
  fillOpacity: 0.06
});

board.create('point', [0,0], {name:'O', size:3, color:'#64748b', fixed:true});
board.create('text', [3.5, 4.5, 'x² + y² = 100'], {fontSize:12, color:'#4f46e5', fontWeight:'bold'});

var pA = board.create('point', [8, -6], {name:'A(8, -6)', size:3.5, color:'#1e293b', fixed:true, withLabel:true, label:{autoPosition:false, offset:[10, -15]}});
var pB = board.create('point', [6, 8], {name:'B(6, 8)', size:3.5, color:'#1e293b', fixed:true, withLabel:true, label:{autoPosition:false, offset:[10, 10]}});
var pC = board.create('point', [-8, 6], {name:'C(-8, 6)', size:3.5, color:'#1e293b', fixed:true, withLabel:true, label:{autoPosition:false, offset:[-65, 10]}});
var pD = board.create('point', [-6, -8], {name:'D(-6, -8)', size:3.5, color:'#1e293b', fixed:true, withLabel:true, label:{autoPosition:false, offset:[-70, -10]}});

board.create('line', [pA, pB], {straightFirst: false, straightLast: false, strokeColor: '#1e293b', strokeWidth: 2});
board.create('line', [pB, pC], {straightFirst: false, straightLast: false, strokeColor: '#1e293b', strokeWidth: 2});
board.create('line', [pC, pD], {straightFirst: false, straightLast: false, strokeColor: '#1e293b', strokeWidth: 2});
board.create('line', [pD, pA], {straightFirst: false, straightLast: false, strokeColor: '#1e293b', strokeWidth: 2});

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

  // 1. Update disk seed file
  let seedContent = fs.readFileSync(seedFilePath, 'utf8');
  // Replace graph script for y9-11h-q10a, b, c, d in disk seed
  const scriptOneLiner = graphScript.replace(/\n/g, ' ');
  seedContent = seedContent.replace(/board\.suspendUpdate\(\);[\s\S]*?board\.unsuspendUpdate\(\);/g, scriptOneLiner);
  fs.writeFileSync(seedFilePath, seedContent, 'utf8');
  console.log("Updated seed file on disk.");

  // 2. Update Firestore DB
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  await db.collection('questions').doc('y9-11h-q10').set({
    id: 'y9-11h-q10',
    title: 'The circle shown below has equation \\(x^2 + y^2 = 100\\). A square \\(ABCD\\) is inscribed in the circle with vertices \\(A(8, -6)\\), \\(B(6, 8)\\), \\(C(-8, 6)\\), and \\(D(-6, -8)\\). Answer the following sub-questions.',
    question: 'The circle shown below has equation \\(x^2 + y^2 = 100\\). A square \\(ABCD\\) is inscribed in the circle with vertices \\(A(8, -6)\\), \\(B(6, 8)\\), \\(C(-8, 6)\\), and \\(D(-6, -8)\\). Answer the following sub-questions.',
    solution: "",
    graphData: baseGraphData,
    type: 'parent',
    updatedAt: FieldValue.serverTimestamp()
  }, { merge: true });

  const subIds = ['y9-11h-q10a', 'y9-11h-q10b', 'y9-11h-q10c', 'y9-11h-q10d'];
  for (const id of subIds) {
    await db.collection('questions').doc(id).set({
      graphData: null,
      updatedAt: FieldValue.serverTimestamp()
    }, { merge: true });
  }

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

  console.log("Successfully updated Firebase DB with parametric curve & bounded lines!");
  process.exit(0);
}

run().catch(console.error);
