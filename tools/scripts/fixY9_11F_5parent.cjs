const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  // Fetch the 5 individual child documents
  const q5a = await db.collection('questions').doc('y9-11f-q5a').get();
  const q5b = await db.collection('questions').doc('y9-11f-q5b').get();
  const q5c = await db.collection('questions').doc('y9-11f-q5c').get();
  const q5d = await db.collection('questions').doc('y9-11f-q5d').get();
  const q5e = await db.collection('questions').doc('y9-11f-q5e').get();

  const parentRef = db.collection('questions').doc('y9-11f-q5');
  const parentDoc = await parentRef.get();

  if (!parentDoc.exists) {
    console.log("Parent document not found.");
    process.exit(1);
  }

  const parentData = parentDoc.data();
  const oldSubQs = parentData.subQuestions || [];

  const newSubQs = [
    {
      ...oldSubQs[0],
      id: 'y9-11f-q5a',
      type: 'multiple_choice',
      requiresManualGrading: false,
      options: q5a.data().options,
      answer: q5a.data().answer,
      solutionSteps: q5a.data().solutionSteps,
      graphData: q5a.data().graphData
    },
    {
      ...oldSubQs[1],
      id: 'y9-11f-q5b',
      type: 'multiple_choice',
      requiresManualGrading: false,
      options: q5b.data().options,
      answer: q5b.data().answer,
      solutionSteps: q5b.data().solutionSteps,
      graphData: q5b.data().graphData
    },
    {
      ...oldSubQs[2],
      id: 'y9-11f-q5c',
      type: 'multiple_choice',
      requiresManualGrading: false,
      options: q5c.data().options,
      answer: q5c.data().answer,
      solutionSteps: q5c.data().solutionSteps,
      graphData: q5c.data().graphData
    },
    {
      ...oldSubQs[3],
      id: 'y9-11f-q5d',
      type: 'multiple_choice',
      requiresManualGrading: false,
      options: q5d.data().options,
      answer: q5d.data().answer,
      solutionSteps: q5d.data().solutionSteps,
      graphData: q5d.data().graphData
    },
    {
      ...oldSubQs[4],
      id: 'y9-11f-q5e',
      type: 'multiple_choice',
      requiresManualGrading: false,
      options: q5e.data().options,
      answer: q5e.data().answer,
      solutionSteps: q5e.data().solutionSteps,
      graphData: q5e.data().graphData
    }
  ];

  // We also want to replace the parent's graphData with the extended graph data so it looks good at the top level
  const extendedGraphScript = "board.suspendUpdate(); board.create('arrow', [[-8,0],[8,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-8],[0,8]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [7.5, -0.5, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.2, 7.5, 'y'], {fontSize:13, color:'#64748b'}); board.create('point', [-2, -5], {name:'A', size:3, color:'#ef4444'}); board.create('point', [4, 7], {name:'B', size:3, color:'#ef4444'}); board.create('segment', [[-2,-5], [4,7]], {strokeColor:'#6366f1', strokeWidth:2}); board.create('point', [1, 1], {name:'C', size:3, color:'#10b981'}); board.create('point', [0, 1.5], {name:'D', size:3, color:'#f59e0b'}); board.create('functiongraph', [function(x){ return -0.5*x + 1.5; }], {strokeColor:'#10b981', strokeWidth:2}); board.unsuspendUpdate();";
  const extendedGraphData = { jsxGraph: { width: 360, height: 360, boundingbox: [-8, 8, 8, -8], script: extendedGraphScript } };

  batch.update(parentRef, {
    subQuestions: newSubQs,
    graphData: extendedGraphData,
    updatedAt: FieldValue.serverTimestamp()
  });

  await batch.commit();
  console.log("Successfully synced child data into parent document y9-11f-q5.");
  process.exit(0);
}

run().catch(console.error);
