const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  const parentText = "Triangle \\(ABC\\) has vertices \\(A(2, 1)\\), \\(B(5, 5)\\) and \\(C(9, 2)\\). Answer the following sub-questions to show that \\(\\Delta ABC\\) is right-angled.";
  const title = "Triangle \\(ABC\\) has vertices \\(A(2, 1)\\), \\(B(5, 5)\\) and \\(C(9, 2)\\)...";
  
  const graphScript = `board.suspendUpdate();
board.create('arrow', [[-1,0],[11,0]], {strokeColor:'#94a3b8', strokeWidth:1.5});
board.create('arrow', [[0,-1],[0,7]], {strokeColor:'#94a3b8', strokeWidth:1.5});
board.create('text', [10.5, -0.5, 'x'], {fontSize:13, color:'#64748b'});
board.create('text', [0.2, 6.5, 'y'], {fontSize:13, color:'#64748b'});

board.create('segment', [[2,1], [5,5]], {strokeColor:'#6366f1', strokeWidth:2});
board.create('segment', [[5,5], [9,2]], {strokeColor:'#6366f1', strokeWidth:2});
board.create('segment', [[9,2], [2,1]], {strokeColor:'#94a3b8', strokeWidth:1.5, strokeDasharray:'4 4'});

board.create('point', [2, 1], {name:'A', size:3, color:'#ef4444'});
board.create('point', [5, 5], {name:'B', size:3, color:'#ef4444'});
board.create('point', [9, 2], {name:'C', size:3, color:'#ef4444'});
board.unsuspendUpdate();`;
  
  const parentGraphData = { jsxGraph: { width: 360, height: 280, boundingbox: [-1, 7, 11, -1], script: graphScript } };

  // Update standalone docs with full context
  const subQuestions = ['a', 'b', 'c', 'd'];
  const questions = [
    'a) Find the gradient of \\(AB\\).',
    'b) Find the gradient of \\(BC\\).',
    'c) Calculate the product of the gradients of \\(AB\\) and \\(BC\\).',
    'd) What does this result tell us about \\(\\Delta ABC\\)?'
  ];

  for (let i = 0; i < subQuestions.length; i++) {
    const docId = `y9-11g-q13${subQuestions[i]}`;
    batch.update(db.collection('questions').doc(docId), {
      title: title,
      question: parentText + "\n" + questions[i],
      graphData: parentGraphData,
      updatedAt: FieldValue.serverTimestamp()
    });
  }

  // Ensure parent has proper flags
  batch.update(db.collection('questions').doc('y9-11g-q13'), {
    requiresManualGrading: false,
    updatedAt: FieldValue.serverTimestamp()
  });

  await batch.commit();
  console.log("Updated q13 standalone docs with context and parent flags successfully.");
  process.exit(0);
}

run().catch(console.error);
