const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const graphData = {
    jsxGraph: {
      width: 360, height: 300,
      boundingbox: [-3, 6, 6, -12],
      script: `board.suspendUpdate();
board.create('arrow',[[-3,0],[6,0]],{strokeColor:'#94a3b8',strokeWidth:1.5});
board.create('arrow',[[0,-12],[0,6]],{strokeColor:'#94a3b8',strokeWidth:1.5});
board.create('text',[5.5,-0.4,'x'],{fontSize:13,color:'#64748b'});
board.create('text',[0.2,5.5,'y'],{fontSize:13,color:'#64748b'});
board.create('functiongraph',[function(x){return 2*x*x-4*x-6;},-2.2,4.2],{strokeColor:'#6366f1',strokeWidth:2.5});
// Shade the region below x-axis between x=-1 and x=3
board.create('curve',[
  function(t){return t;},
  function(t){return Math.min(2*t*t-4*t-6,0);},
  -1, 3
],{fillColor:'#f87171',fillOpacity:0.25,strokeColor:'none'});
// x-intercepts
board.create('point',[-1,0],{name:'(-1, 0)',size:4,color:'#f97316',label:{autoPosition:false,offset:[-65,-15]}});
board.create('point',[3,0],{name:'(3, 0)',size:4,color:'#f97316',label:{autoPosition:false,offset:[8,-15]}});
// Vertex
board.create('point',[1,-8],{name:'Vertex (1,-8)',size:4,color:'#dc2626',label:{autoPosition:false,offset:[8,0]}});
// Region label
board.create('text',[1,-4,'Below x-axis'],{fontSize:11,color:'#dc2626'});
// Arrow showing region
board.create('line',[[-1,0],[3,0]],{strokeColor:'#f97316',strokeWidth:2,dash:0,straightFirst:false,straightLast:false});
board.unsuspendUpdate();`
    }
  };

  const steps_b = [
    {
      explanation: 'We need to solve \\(2x^2 - 4x - 6 < 0\\). This means we want to find all values of \\(x\\) where the parabola \\(y = 2x^2 - 4x - 6\\) is **below the \\(x\\)-axis** (i.e., where \\(y < 0\\)).',
      workingOut: '',
      graphData: null
    },
    {
      explanation: 'From part a), we know the **x-intercepts** of the parabola are where \\(y = 0\\). These are the boundary points of our solution:',
      workingOut: [
        '\\(2x^2 - 4x - 6 = 0\\)',
        '\\(x^2 - 2x - 3 = 0\\)',
        '\\((x - 3)(x + 1) = 0\\)',
        '\\(x = -1 \\quad \\text{or} \\quad x = 3\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Look at the graph below. The **shaded red region** shows where the parabola is below the \\(x\\)-axis. Since the parabola opens **upwards** (\\(a = 2 > 0\\)), it dips below the \\(x\\)-axis **between** the two x-intercepts.',
      workingOut: '',
      graphData: graphData
    },
    {
      explanation: 'Therefore, the parabola satisfies \\(y < 0\\) for all \\(x\\) values **strictly between** \\(-1\\) and \\(3\\):',
      workingOut: '\\(-1 < x < 3\\)',
      graphData: null
    }
  ];

  await db.collection('questions').doc('y10-7h-q10b').update({
    solutionSteps: steps_b,
    updatedAt: FieldValue.serverTimestamp()
  });

  // Update parent
  const pRef = db.collection('questions').doc('y10-7h-q10');
  const pSnap = await pRef.get();
  if (pSnap.exists && pSnap.data().subQuestions) {
    const newSubQs = pSnap.data().subQuestions.map(sq => {
      if (sq.id === 'y10-7h-q10b') {
        return { ...sq, solutionSteps: steps_b };
      }
      return sq;
    });
    await pRef.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
  }

  console.log("Updated q10b with graph-based solution");
  process.exit(0);
}

run().catch(console.error);
