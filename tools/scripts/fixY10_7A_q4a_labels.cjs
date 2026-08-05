const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const q4a_id = 'y10-7a-q4a';

  const graphData = {
    jsxGraph: {
      width: 360, height: 320,
      boundingbox: [-2, 2, 2, -10],
      script: `board.suspendUpdate();
board.create('arrow',[[-2,0],[2,0]],{strokeColor:'#94a3b8',strokeWidth:1.5});
board.create('arrow',[[0,-10],[0,2]],{strokeColor:'#94a3b8',strokeWidth:1.5});
board.create('functiongraph',[function(x){return -x*x-7;},-2,2],{strokeColor:'#6366f1',strokeWidth:2.5});
// Since Vertex and y-intercept are the same point (0, -7), draw only one point with a combined label
board.create('point',[0,-7],{name:'Vertex & y-int (0, -7)',size:4,color:'#dc2626',label:{autoPosition:false,offset:[10,0]}});
board.create('text',[0.5,-8.5,'y = -x² - 7'],{fontSize:12,color:'#4f46e5'});
board.unsuspendUpdate();`
    }
  };

  const steps = [
    {
      explanation: 'First, find the vertex of the parabola. The equation is in vertex form: \\(y = a(x - h)^2 + k\\), where \\((h, k)\\) is the vertex.',
      workingOut: '\\(\\text{Vertex: } (0,\\, -7)\\)',
      graphData: null
    },
    {
      explanation: 'Next, find the \\(y\\)-intercept by substituting \\(x = 0\\) into the equation.',
      workingOut: '\\(y = -(0)^2 - 7\\)\n\\(y = -7\\)',
      graphData: null
    },
    {
      explanation: 'The \\(y\\)-intercept is \\(-7\\), so the graph crosses the \\(y\\)-axis at \\((0,\\, -7)\\). Note that in this case, the vertex and the \\(y\\)-intercept are the same point.',
      workingOut: '',
      graphData: null
    },
    {
      explanation: 'Finally, sketch the graph. Plot the vertex \\((0,\\, -7)\\). The parabola opens downwards because the number in front of the squared term is negative.',
      workingOut: '',
      graphData: graphData
    }
  ];

  await db.collection('questions').doc(q4a_id).update({
    solutionSteps: steps,
    updatedAt: FieldValue.serverTimestamp()
  });

  const pRef = db.collection('questions').doc('y10-7a-q4');
  const pSnap = await pRef.get();
  if (pSnap.exists && pSnap.data().subQuestions) {
    const newSubQs = pSnap.data().subQuestions.map(sq => {
      if (sq.id === q4a_id) {
        return {
          ...sq,
          solutionSteps: steps,
          requiresManualGrading: FieldValue.delete()
        };
      }
      return sq;
    });
    await pRef.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
  }

  console.log("Fixed overlapping labels in q4a");
  process.exit(0);
}

run().catch(console.error);
