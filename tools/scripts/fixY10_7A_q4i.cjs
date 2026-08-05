const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const q4i_id = 'y10-7a-q4i';
  const h = 1, k = 6, y_int = 5;

  const graphData = {
    jsxGraph: {
      width: 360, height: 320,
      boundingbox: [-3, 8, 5, -2],
      script: `board.suspendUpdate();
board.create('arrow',[[-3,0],[5,0]],{strokeColor:'#94a3b8',strokeWidth:1.5});
board.create('arrow',[[0,-2],[0,8]],{strokeColor:'#94a3b8',strokeWidth:1.5});
board.create('functiongraph',[function(x){return -(x-1)*(x-1)+6;},-2.5,4.5],{strokeColor:'#6366f1',strokeWidth:2.5});
board.create('point',[1,6],{name:'Vertex (1, 6)',size:4,color:'#dc2626',label:{autoPosition:true}});
board.create('point',[0,5],{name:'y-int (0, 5)',size:4,color:'#f97316',label:{autoPosition:true}});
board.create('text',[2,3,'y = -(x-1)² + 6'],{fontSize:12,color:'#4f46e5'});
board.unsuspendUpdate();`
    }
  };

  const steps = [
    {
      explanation: 'First, find the vertex of the parabola. The equation is in vertex form: \\(y = a(x - h)^2 + k\\), where \\((h, k)\\) is the vertex.',
      workingOut: '\\(\\text{Vertex: } (1,\\, 6)\\)',
      graphData: null
    },
    {
      explanation: 'Next, find the \\(y\\)-intercept by substituting \\(x = 0\\) into the equation.',
      workingOut: [
        '\\(y = -(0 - 1)^2 + 6\\)',
        '\\(y = -(-1)^2 + 6\\)',
        '\\(y = -1 + 6 = 5\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'The \\(y\\)-intercept is \\(5\\), so the graph crosses the \\(y\\)-axis at \\((0,\\, 5)\\).',
      workingOut: '',
      graphData: null
    },
    {
      explanation: 'Finally, sketch the graph. Plot the vertex \\((1,\\, 6)\\) and the \\(y\\)-intercept \\((0,\\, 5)\\). The parabola opens downwards because the number in front of the squared term is negative.',
      workingOut: '',
      graphData: graphData
    }
  ];

  await db.collection('questions').doc(q4i_id).update({
    solutionSteps: steps,
    updatedAt: FieldValue.serverTimestamp()
  });

  const pRef = db.collection('questions').doc('y10-7a-q4');
  const pSnap = await pRef.get();
  if (pSnap.exists && pSnap.data().subQuestions) {
    const newSubQs = pSnap.data().subQuestions.map(sq => {
      if (sq.id === q4i_id) {
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

  console.log("Updated q4i");
  process.exit(0);
}

run().catch(console.error);
