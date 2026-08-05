const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // =========================================================
  // q10a: y = x² rotated 135° CLOCKWISE
  // Parametric: x(t) = (√2/2)(t²-t),  y(t) = -(√2/2)(t²+t)
  // Axis of symmetry rotates from +y direction (90°) to 90°-135° = -45°
  // Opens toward lower-right along y = -x
  // =========================================================

  // Step 1 graph: original y=x²
  const graph10a_step1 = {
    jsxGraph: {
      width: 340, height: 280,
      boundingbox: [-5, 8, 5, -3],
      script: `board.suspendUpdate();
board.create('arrow',[[-5,0],[5,0]],{strokeColor:'#94a3b8',strokeWidth:1.5});
board.create('arrow',[[0,-3],[0,8]],{strokeColor:'#94a3b8',strokeWidth:1.5});
board.create('text',[4.4,-0.6,'x'],{fontSize:13,color:'#64748b'});
board.create('text',[0.15,7.3,'y'],{fontSize:13,color:'#64748b'});
board.create('functiongraph',[function(x){return x*x;},-3.5,3.5],{strokeColor:'#6366f1',strokeWidth:2.5});
board.create('text',[1.6,5.4,'y = x²'],{fontSize:12,color:'#4f46e5'});
board.create('point',[0,0],{name:'Vertex (0,0)',size:3,color:'#dc2626',label:{autoPosition:false,offset:[8,8]}});
board.create('point',[1,1],{name:'(1,1)',size:3,color:'#f97316',label:{autoPosition:false,offset:[6,0]}});
board.create('point',[-1,1],{name:'(-1,1)',size:3,color:'#f97316',label:{autoPosition:false,offset:[-40,0]}});
board.create('point',[2,4],{name:'(2,4)',size:3,color:'#f97316',label:{autoPosition:false,offset:[6,0]}});
board.unsuspendUpdate();`
    }
  };

  // Step 3 graph: rotated 135° clockwise
  const s2 = Math.SQRT2 / 2; // ≈ 0.7071
  const graph10a_step3 = {
    jsxGraph: {
      width: 340, height: 340,
      boundingbox: [-5, 5, 8, -5],
      script: `board.suspendUpdate();
board.create('arrow',[[-5,0],[8,0]],{strokeColor:'#94a3b8',strokeWidth:1.5});
board.create('arrow',[[0,-5],[0,5]],{strokeColor:'#94a3b8',strokeWidth:1.5});
board.create('text',[7.3,-0.5,'x'],{fontSize:13,color:'#64748b'});
board.create('text',[0.15,4.5,'y'],{fontSize:13,color:'#64748b'});
var s = Math.SQRT2/2;
board.create('curve',[function(t){return s*(t*t-t);},function(t){return -s*(t*t+t);},-4,4],{strokeColor:'#6366f1',strokeWidth:2.5});
board.create('text',[3.5,-3.8,'Rotated 135° CW'],{fontSize:11,color:'#4f46e5'});
board.create('point',[0,0],{name:'(0,0)',size:3,color:'#dc2626',label:{autoPosition:false,offset:[8,8]}});
board.create('point',[0,-1.414],{name:'(1,1)→(0,−√2)',size:3,color:'#f97316',label:{autoPosition:false,offset:[6,-10]}});
board.create('point',[1.414,0],{name:'(−1,1)→(√2,0)',size:3,color:'#f97316',label:{autoPosition:false,offset:[6,8]}});
board.create('line',[[0,0],[1,-1]],{strokeColor:'#94a3b8',strokeWidth:1,dash:2,straightFirst:false,straightLast:true});
board.create('text',[3.5,-2.7,'axis: y = −x'],{fontSize:11,color:'#64748b'});
board.unsuspendUpdate();`
    }
  };

  const steps10a = [
    {
      explanation: 'Start with the original parabola \\(y = x^2\\). It has its vertex at the origin \\((0, 0)\\) and opens upward. Note some key reference points before the rotation.',
      workingOut: '\\((0, 0),\\quad (1, 1),\\quad (-1, 1),\\quad (2, 4)\\)',
      graphData: graph10a_step1
    },
    {
      explanation: 'To rotate a parabola \\(135^\\circ\\) clockwise, we apply the rotation matrix for \\(\\theta = -135^\\circ\\). The rotation formula for each point \\((x, y)\\) gives a new point \\((x\', y\')\\):\n\\(x\' = x\\cos(-135^\\circ) - y\\sin(-135^\\circ)\\)\n\\(y\' = x\\sin(-135^\\circ) + y\\cos(-135^\\circ)\\)\nSince \\(\\cos(135^\\circ) = -\\dfrac{\\sqrt{2}}{2}\\) and \\(\\sin(135^\\circ) = \\dfrac{\\sqrt{2}}{2}\\):\n\\(x\' = \\dfrac{\\sqrt{2}}{2}(y - x)\\)\n\\(y\' = -\\dfrac{\\sqrt{2}}{2}(y + x)\\)',
      workingOut: '',
      graphData: null
    },
    {
      explanation: 'Apply the rotation formula to the key reference points to find where they map to.',
      workingOut: [
        '\\((0,0) \\rightarrow (0, 0)\\) ✓ (vertex stays at origin)',
        '\\((1,1) \\rightarrow \\left(\\dfrac{\\sqrt{2}}{2}(1-1),\\;-\\dfrac{\\sqrt{2}}{2}(1+1)\\right) = (0, -\\sqrt{2})\\)',
        '\\((-1,1) \\rightarrow \\left(\\dfrac{\\sqrt{2}}{2}(1+1),\\;-\\dfrac{\\sqrt{2}}{2}(1-1)\\right) = (\\sqrt{2}, 0)\\)',
        '\\((2,4) \\rightarrow \\left(\\dfrac{\\sqrt{2}}{2}(2),\\;-\\dfrac{\\sqrt{2}}{2}(6)\\right) = (\\sqrt{2}, -3\\sqrt{2})\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'The axis of symmetry was along the positive \\(y\\)-axis. After rotating \\(135^\\circ\\) clockwise, it now points in the direction \\(45^\\circ\\) below the positive \\(x\\)-axis — along the line \\(y = -x\\). The parabola opens toward the lower-right. Here is the result:',
      workingOut: '',
      graphData: graph10a_step3
    }
  ];

  // =========================================================
  // q10b: y = x² rotated 90° ANTICLOCKWISE
  // Parametric: x(t) = -t²,  y(t) = t
  // So x = -y²  — parabola opening LEFT
  // =========================================================

  const graph10b_step1 = {
    jsxGraph: {
      width: 340, height: 280,
      boundingbox: [-5, 8, 5, -3],
      script: `board.suspendUpdate();
board.create('arrow',[[-5,0],[5,0]],{strokeColor:'#94a3b8',strokeWidth:1.5});
board.create('arrow',[[0,-3],[0,8]],{strokeColor:'#94a3b8',strokeWidth:1.5});
board.create('text',[4.4,-0.6,'x'],{fontSize:13,color:'#64748b'});
board.create('text',[0.15,7.3,'y'],{fontSize:13,color:'#64748b'});
board.create('functiongraph',[function(x){return x*x;},-3.5,3.5],{strokeColor:'#6366f1',strokeWidth:2.5});
board.create('text',[1.6,5.4,'y = x²'],{fontSize:12,color:'#4f46e5'});
board.create('point',[0,0],{name:'(0,0)',size:3,color:'#dc2626',label:{autoPosition:false,offset:[8,8]}});
board.create('point',[1,1],{name:'(1,1)',size:3,color:'#f97316',label:{autoPosition:false,offset:[6,0]}});
board.create('point',[-1,1],{name:'(-1,1)',size:3,color:'#f97316',label:{autoPosition:false,offset:[-40,0]}});
board.create('point',[2,4],{name:'(2,4)',size:3,color:'#f97316',label:{autoPosition:false,offset:[6,0]}});
board.unsuspendUpdate();`
    }
  };

  const graph10b_step3 = {
    jsxGraph: {
      width: 340, height: 340,
      boundingbox: [-8, 5, 2, -5],
      script: `board.suspendUpdate();
board.create('arrow',[[-8,0],[2,0]],{strokeColor:'#94a3b8',strokeWidth:1.5});
board.create('arrow',[[0,-5],[0,5]],{strokeColor:'#94a3b8',strokeWidth:1.5});
board.create('text',[1.3,-0.5,'x'],{fontSize:13,color:'#64748b'});
board.create('text',[0.15,4.5,'y'],{fontSize:13,color:'#64748b'});
board.create('curve',[function(t){return -t*t;},function(t){return t;},-4,4],{strokeColor:'#6366f1',strokeWidth:2.5});
board.create('text',[-6.5,3.5,'x = −y²'],{fontSize:12,color:'#4f46e5'});
board.create('text',[-5.5,2.8,'(opens left)'],{fontSize:11,color:'#64748b'});
board.create('point',[0,0],{name:'(0,0)',size:3,color:'#dc2626',label:{autoPosition:false,offset:[8,8]}});
board.create('point',[-1,1],{name:'(1,1)→(−1,1)',size:3,color:'#f97316',label:{autoPosition:false,offset:[-60,8]}});
board.create('point',[-1,-1],{name:'(−1,1)→(−1,−1)',size:3,color:'#f97316',label:{autoPosition:false,offset:[-70,-12]}});
board.create('point',[-4,2],{name:'(2,4)→(−4,2)',size:3,color:'#f97316',label:{autoPosition:false,offset:[-65,8]}});
board.create('line',[[0,0],[0,1]],{strokeColor:'#94a3b8',strokeWidth:1,dash:2,straightFirst:false,straightLast:true});
board.create('text',[0.2,3,'axis: y = 0'],{fontSize:11,color:'#64748b'});
board.unsuspendUpdate();`
    }
  };

  const steps10b = [
    {
      explanation: 'Start with the original parabola \\(y = x^2\\). It has its vertex at the origin \\((0, 0)\\) and opens upward. Note some key reference points before the rotation.',
      workingOut: '\\((0, 0),\\quad (1, 1),\\quad (-1, 1),\\quad (2, 4)\\)',
      graphData: graph10b_step1
    },
    {
      explanation: 'To rotate \\(90^\\circ\\) anticlockwise (counterclockwise), apply the rotation formula with \\(\\theta = +90^\\circ\\). Since \\(\\cos(90^\\circ) = 0\\) and \\(\\sin(90^\\circ) = 1\\):\n\\(x\' = x\\cos(90^\\circ) - y\\sin(90^\\circ) = -y\\)\n\\(y\' = x\\sin(90^\\circ) + y\\cos(90^\\circ) = x\\)',
      workingOut: 'Simple rule: \\((x, y) \\rightarrow (-y, x)\\)',
      graphData: null
    },
    {
      explanation: 'Apply the rule \\((x, y) \\rightarrow (-y, x)\\) to the key reference points.',
      workingOut: [
        '\\((0, 0) \\rightarrow (0, 0)\\) ✓ (vertex stays at origin)',
        '\\((1, 1) \\rightarrow (-1, 1)\\)',
        '\\((-1, 1) \\rightarrow (-1, -1)\\)',
        '\\((2, 4) \\rightarrow (-4, 2)\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'The original equation \\(y = x^2\\) becomes \\(x = -y^2\\) after a \\(90^\\circ\\) anticlockwise rotation. The axis of symmetry was the \\(y\\)-axis; after rotating \\(90^\\circ\\) anticlockwise, the axis becomes the \\(x\\)-axis (the line \\(y = 0\\)). The parabola now opens to the LEFT.',
      workingOut: '\\(x = -y^2\\)  (a sideways parabola opening to the left)',
      graphData: graph10b_step3
    }
  ];

  const updates = [
    { id: 'y10-7a-q10a', steps: steps10a },
    { id: 'y10-7a-q10b', steps: steps10b }
  ];

  for (const u of updates) {
    await db.collection('questions').doc(u.id).update({
      solutionSteps: u.steps,
      updatedAt: FieldValue.serverTimestamp()
    });
  }

  // Update parent subQuestions
  const pRef = db.collection('questions').doc('y10-7a-q10');
  const pSnap = await pRef.get();
  if (pSnap.exists) {
    const pData = pSnap.data();
    if (pData.subQuestions) {
      const newSubQs = pData.subQuestions.map(sq => {
        const u = updates.find(x => x.id === sq.id);
        if (u) return { ...sq, solutionSteps: u.steps };
        return sq;
      });
      await pRef.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
    }
  }

  console.log("Updated q10a, q10b with detailed rotation steps and graphs");
  process.exit(0);
}

run().catch(console.error);
