const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const q2f_id = 'y10-7a-q2f';

  const graphData = {
    jsxGraph: {
      width: 360, height: 320,
      boundingbox: [-4, 8, 8, -4],
      script: `board.suspendUpdate();
board.create('arrow',[[-4,0],[8,0]],{strokeColor:'#94a3b8',strokeWidth:1.5});
board.create('arrow',[[0,-4],[0,8]],{strokeColor:'#94a3b8',strokeWidth:1.5});
board.create('functiongraph',[function(x){return -(x-2)*(x-2)+6;},-3,7],{strokeColor:'#6366f1',strokeWidth:2.5});
board.create('point',[0,2],{name:'y-intercept (0, 2)',size:4,color:'#dc2626',label:{autoPosition:false,offset:[-100,0]}});
board.create('text',[3,6,'y = -(x-2)² + 6'],{fontSize:12,color:'#4f46e5'});
board.unsuspendUpdate();`
    }
  };

  const steps = [
    {
      explanation: 'To find the \\(y\\)-intercept of a function, substitute \\(x = 0\\) into the equation. This is because the \\(y\\)-axis is where \\(x\\) is exactly zero.',
      workingOut: '\\(x = 0\\)',
      graphData: null
    },
    {
      explanation: 'Substitute \\(x = 0\\) into the equation \\(y = -(x - 2)^2 + 6\\).',
      workingOut: [
        '\\(y = -(0 - 2)^2 + 6\\)',
        '\\(y = -(-2)^2 + 6\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Calculate the result carefully. Remember that \\((-2)^2 = 4\\), so we have \\(-4\\) before adding \\(6\\).',
      workingOut: [
        '\\(y = -(4) + 6\\)',
        '\\(y = -4 + 6\\)',
        '\\(y = 2\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'So, the \\(y\\)-intercept is \\(2\\) (or the point \\((0, 2)\\)). Here is the graph showing where the parabola crosses the \\(y\\)-axis:',
      workingOut: '',
      graphData: graphData
    }
  ];

  const opts = [
    { text: '\\(y = -2\\)', imageUrl: '' },
    { text: '\\(y = 6\\)', imageUrl: '' },
    { text: '\\(y = 10\\)', imageUrl: '' },
    { text: '\\(y = 2\\)', imageUrl: '' } // Correct -> 3
  ];

  await db.collection('questions').doc(q2f_id).update({
    type: 'multiple_choice',
    options: opts,
    answer: '3',
    solutionSteps: steps,
    requiresManualGrading: FieldValue.delete(),
    updatedAt: FieldValue.serverTimestamp()
  });

  const pRef = db.collection('questions').doc('y10-7a-q2');
  const pSnap = await pRef.get();
  if (pSnap.exists && pSnap.data().subQuestions) {
    const newSubQs = pSnap.data().subQuestions.map(sq => {
      if (sq.id === q2f_id) {
        return {
          ...sq,
          type: 'multiple_choice',
          options: opts,
          answer: '3',
          solutionSteps: steps,
          requiresManualGrading: FieldValue.delete()
        };
      }
      return sq;
    });
    await pRef.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
  }

  console.log("Updated q2f");
  process.exit(0);
}

run().catch(console.error);
