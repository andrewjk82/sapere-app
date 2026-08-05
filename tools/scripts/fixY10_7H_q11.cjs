const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // ─── q11a: x^2 + 2x < 15 ─────────────────────────────────────────────────
  // x^2 + 2x - 15 < 0  =>  (x+5)(x-3) < 0  =>  -5 < x < 3
  const graph_11a = {
    jsxGraph: {
      width: 360, height: 280,
      boundingbox: [-8, 12, 6, -20],
      script: `board.suspendUpdate();
board.create('arrow',[[-8,0],[6,0]],{strokeColor:'#94a3b8',strokeWidth:1.5});
board.create('arrow',[[0,-20],[0,12]],{strokeColor:'#94a3b8',strokeWidth:1.5});
board.create('text',[5.5,-0.5,'x'],{fontSize:13,color:'#64748b'});
board.create('text',[0.2,11,'y'],{fontSize:13,color:'#64748b'});
board.create('functiongraph',[function(x){return x*x+2*x-15;},-7,5],{strokeColor:'#6366f1',strokeWidth:2.5});
board.create('curve',[
  function(t){return t;},
  function(t){return Math.min(t*t+2*t-15,0);},
  -5,3
],{fillColor:'#f87171',fillOpacity:0.3,strokeColor:'none'});
board.create('point',[-5,0],{name:'(-5, 0)',size:4,color:'#f97316',label:{autoPosition:false,offset:[-65,-15]}});
board.create('point',[3,0],{name:'(3, 0)',size:4,color:'#f97316',label:{autoPosition:false,offset:[8,-15]}});
board.create('point',[-1,-16],{name:'Vertex (-1,-16)',size:3,color:'#dc2626',label:{autoPosition:false,offset:[8,0]}});
board.create('text',[-1,-9,'y < 0 here (shaded)'],{fontSize:11,color:'#dc2626'});
board.create('line',[[-5,0],[3,0]],{strokeColor:'#f97316',strokeWidth:2.5,dash:0,straightFirst:false,straightLast:false});
board.unsuspendUpdate();`
    }
  };

  const steps_11a = [
    {
      explanation: 'Rearrange the inequality so that one side is **zero**. This lets us treat it like a quadratic equation to find boundary points.',
      workingOut: [
        '\\(x^2 + 2x < 15\\)',
        '\\(x^2 + 2x - 15 < 0\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Find the **x-intercepts** by solving \\(x^2 + 2x - 15 = 0\\). Factorise by finding two numbers that multiply to \\(-15\\) and add to \\(+2\\).',
      workingOut: [
        '\\(x^2 + 2x - 15 = 0\\)',
        '\\((x + 5)(x - 3) = 0\\)',
        '\\(x = -5 \\quad \\text{or} \\quad x = 3\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Now think about the graph of \\(y = x^2 + 2x - 15\\). It is an **upward-opening** parabola (\\(a = 1 > 0\\)), crossing the x-axis at \\(x = -5\\) and \\(x = 3\\).\n\nWe need \\(y < 0\\), so we want the part of the parabola that is **below the x-axis** (shown in red).',
      workingOut: '',
      graphData: graph_11a
    },
    {
      explanation: 'The parabola is below the x-axis **between** the two x-intercepts. Therefore, the solution is:',
      workingOut: '\\(-5 < x < 3\\)',
      graphData: null
    }
  ];

  // ─── q11b: x^2 + 4x >= -3 ────────────────────────────────────────────────
  // x^2 + 4x + 3 >= 0  =>  (x+3)(x+1) >= 0  =>  x <= -3 or x >= -1
  const graph_11b = {
    jsxGraph: {
      width: 360, height: 280,
      boundingbox: [-6, 8, 3, -4],
      script: `board.suspendUpdate();
board.create('arrow',[[-6,0],[3,0]],{strokeColor:'#94a3b8',strokeWidth:1.5});
board.create('arrow',[[0,-4],[0,8]],{strokeColor:'#94a3b8',strokeWidth:1.5});
board.create('text',[2.5,-0.4,'x'],{fontSize:13,color:'#64748b'});
board.create('text',[0.2,7.5,'y'],{fontSize:13,color:'#64748b'});
board.create('functiongraph',[function(x){return x*x+4*x+3;},-5.5,2],{strokeColor:'#6366f1',strokeWidth:2.5});
// Shade above x-axis: left of x=-3 and right of x=-1
board.create('curve',[
  function(t){return t;},
  function(t){return Math.max(t*t+4*t+3,0);},
  -5.5,-3
],{fillColor:'#86efac',fillOpacity:0.4,strokeColor:'none'});
board.create('curve',[
  function(t){return t;},
  function(t){return Math.max(t*t+4*t+3,0);},
  -1,2
],{fillColor:'#86efac',fillOpacity:0.4,strokeColor:'none'});
board.create('point',[-3,0],{name:'(-3, 0)',size:4,color:'#f97316',label:{autoPosition:false,offset:[-65,-15]}});
board.create('point'),[-1,0],{name:'(-1, 0)',size:4,color:'#f97316',label:{autoPosition:false,offset:[8,-15]}});
board.create('point'),[-2,-1],{name:'Vertex (-2,-1)',size:3,color:'#dc2626',label:{autoPosition:false,offset:[8,0]}});
board.create('text',[-4.5,4,'y ≥ 0'],{fontSize:11,color:'#16a34a'});
board.create('text',[0.5,4,'y ≥ 0'],{fontSize:11,color:'#16a34a'});
board.unsuspendUpdate();`
    }
  };

  // JSXGraph has a syntax issue with the extra ')' - let me fix this script
  const graph_11b_fixed = {
    jsxGraph: {
      width: 360, height: 280,
      boundingbox: [-6, 8, 3, -4],
      script: `board.suspendUpdate();
board.create('arrow',[[-6,0],[3,0]],{strokeColor:'#94a3b8',strokeWidth:1.5});
board.create('arrow',[[0,-4],[0,8]],{strokeColor:'#94a3b8',strokeWidth:1.5});
board.create('text',[2.5,-0.4,'x'],{fontSize:13,color:'#64748b'});
board.create('text',[0.2,7.5,'y'],{fontSize:13,color:'#64748b'});
board.create('functiongraph',[function(x){return x*x+4*x+3;},-5.5,2],{strokeColor:'#6366f1',strokeWidth:2.5});
board.create('curve',[function(t){return t;},function(t){return Math.max(t*t+4*t+3,0);},-5.5,-3],{fillColor:'#86efac',fillOpacity:0.4,strokeColor:'none'});
board.create('curve',[function(t){return t;},function(t){return Math.max(t*t+4*t+3,0);},-1,2],{fillColor:'#86efac',fillOpacity:0.4,strokeColor:'none'});
board.create('point',[-3,0],{name:'(-3, 0)',size:4,color:'#f97316',label:{autoPosition:false,offset:[-65,-15]}});
board.create('point',[-1,0],{name:'(-1, 0)',size:4,color:'#f97316',label:{autoPosition:false,offset:[8,-15]}});
board.create('point',[-2,-1],{name:'Vertex (-2,-1)',size:3,color:'#dc2626',label:{autoPosition:false,offset:[8,0]}});
board.create('text',[-4.5,4,'y >= 0 here'],{fontSize:11,color:'#16a34a'});
board.create('text',[0.2,4,'y >= 0 here'],{fontSize:11,color:'#16a34a'});
board.unsuspendUpdate();`
    }
  };

  const steps_11b = [
    {
      explanation: 'Rearrange the inequality so that one side is **zero**.',
      workingOut: [
        '\\(x^2 + 4x \\ge -3\\)',
        '\\(x^2 + 4x + 3 \\ge 0\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Find the **x-intercepts** by solving \\(x^2 + 4x + 3 = 0\\). Factorise by finding two numbers that multiply to \\(+3\\) and add to \\(+4\\).',
      workingOut: [
        '\\(x^2 + 4x + 3 = 0\\)',
        '\\((x + 3)(x + 1) = 0\\)',
        '\\(x = -3 \\quad \\text{or} \\quad x = -1\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'The graph of \\(y = x^2 + 4x + 3\\) is an **upward-opening** parabola (\\(a = 1 > 0\\)). We need \\(y \\ge 0\\), which is the part of the parabola **on or above the x-axis** (shown in green).\n\nNotice this is the **outside** region — not between the roots, but to the left of \\(x = -3\\) and to the right of \\(x = -1\\).',
      workingOut: '',
      graphData: graph_11b_fixed
    },
    {
      explanation: 'The parabola is above (or on) the x-axis when \\(x\\) is **outside** the two x-intercepts. Therefore, the solution is:',
      workingOut: '\\(x \\le -3 \\quad \\text{or} \\quad x \\ge -1\\)',
      graphData: null
    }
  ];

  // ─── q11c: -x^2 + 2x + 24 <= 0 ───────────────────────────────────────────
  // multiply by -1 (flip): x^2 - 2x - 24 >= 0 => (x-6)(x+4) >= 0 => x <= -4 or x >= 6
  const graph_11c = {
    jsxGraph: {
      width: 360, height: 280,
      boundingbox: [-7, 30, 9, -10],
      script: `board.suspendUpdate();
board.create('arrow',[[-7,0],[9,0]],{strokeColor:'#94a3b8',strokeWidth:1.5});
board.create('arrow',[[0,-10],[0,30]],{strokeColor:'#94a3b8',strokeWidth:1.5});
board.create('text',[8.5,-0.8,'x'],{fontSize:13,color:'#64748b'});
board.create('text',[0.2,29,'y'],{fontSize:13,color:'#64748b'});
board.create('functiongraph',[function(x){return -x*x+2*x+24;},-6,8],{strokeColor:'#6366f1',strokeWidth:2.5});
board.create('curve',[function(t){return t;},function(t){return Math.min(-t*t+2*t+24,0);},-6,-4],{fillColor:'#86efac',fillOpacity:0.4,strokeColor:'none'});
board.create('curve',[function(t){return t;},function(t){return Math.min(-t*t+2*t+24,0);},6,8],{fillColor:'#86efac',fillOpacity:0.4,strokeColor:'none'});
board.create('point',[-4,0],{name:'(-4, 0)',size:4,color:'#f97316',label:{autoPosition:false,offset:[-65,-15]}});
board.create('point',[6,0],{name:'(6, 0)',size:4,color:'#f97316',label:{autoPosition:false,offset:[8,-15]}});
board.create('point',[1,25],{name:'Vertex (1,25)',size:3,color:'#dc2626',label:{autoPosition:false,offset:[8,0]}});
board.create('text',[-5.5,-5,'y <= 0'],{fontSize:11,color:'#16a34a'});
board.create('text',[6.5,-5,'y <= 0'],{fontSize:11,color:'#16a34a'});
board.unsuspendUpdate();`
    }
  };

  const steps_11c = [
    {
      explanation: 'We have \\(-x^2 + 2x + 24 \\le 0\\). First, find the **x-intercepts** by solving \\(-x^2 + 2x + 24 = 0\\). Multiply both sides by \\(-1\\) (remember to **flip the inequality sign!**) and factorise.',
      workingOut: [
        '\\(-x^2 + 2x + 24 = 0\\)',
        '\\(x^2 - 2x - 24 = 0\\)',
        '\\((x - 6)(x + 4) = 0\\)',
        '\\(x = 6 \\quad \\text{or} \\quad x = -4\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Now consider the graph of \\(y = -x^2 + 2x + 24\\). Because the coefficient of \\(x^2\\) is **negative** (\\(a = -1 < 0\\)), this is a **downward-opening** parabola. It is above the x-axis between the roots and below the x-axis outside the roots.\n\nWe need \\(y \\le 0\\), so we want the parts **on or below the x-axis** (shown in green).',
      workingOut: '',
      graphData: graph_11c
    },
    {
      explanation: 'The graph is below (or on) the x-axis to the **left** of \\(x = -4\\) and to the **right** of \\(x = 6\\).\n\nImportant: the inequality sign is \\(\\le\\) (not strict \\(<\\)), so the boundary points \\(x = -4\\) and \\(x = 6\\) are **included** in the solution.',
      workingOut: '',
      graphData: null
    },
    {
      explanation: 'Therefore, the solution is:',
      workingOut: '\\(x \\le -4 \\quad \\text{or} \\quad x \\ge 6\\)',
      graphData: null
    }
  ];

  const updates = [
    {
      id: 'y10-7h-q11a',
      opts: [
        { text: '\\(-5 < x < 3\\)', imageUrl: '' }, // Correct -> 0
        { text: '\\(x < -5 \\text{ or } x > 3\\)', imageUrl: '' },
        { text: '\\(-3 < x < 5\\)', imageUrl: '' },
        { text: '\\(x < -3 \\text{ or } x > 5\\)', imageUrl: '' }
      ],
      answer: '0',
      optsReordered: [
        { text: '\\(x < -5 \\text{ or } x > 3\\)', imageUrl: '' },
        { text: '\\(-3 < x < 5\\)', imageUrl: '' },
        { text: '\\(-5 < x < 3\\)', imageUrl: '' }, // Correct -> 2
        { text: '\\(x < -3 \\text{ or } x > 5\\)', imageUrl: '' }
      ],
      answer_reordered: '2',
      steps: steps_11a
    },
    {
      id: 'y10-7h-q11b',
      optsReordered: [
        { text: '\\(-3 < x < -1\\)', imageUrl: '' },
        { text: '\\(x \\le -3 \\text{ or } x \\ge -1\\)', imageUrl: '' }, // Correct -> 1
        { text: '\\(x < 1 \\text{ or } x > 3\\)', imageUrl: '' },
        { text: '\\(-1 < x < 3\\)', imageUrl: '' }
      ],
      answer_reordered: '1',
      steps: steps_11b
    },
    {
      id: 'y10-7h-q11c',
      optsReordered: [
        { text: '\\(-4 < x < 6\\)', imageUrl: '' },
        { text: '\\(x < -6 \\text{ or } x > 4\\)', imageUrl: '' },
        { text: '\\(x \\le -4 \\text{ or } x \\ge 6\\)', imageUrl: '' }, // Correct -> 2
        { text: '\\(x \\le 4 \\text{ or } x \\ge -6\\)', imageUrl: '' }
      ],
      answer_reordered: '2',
      steps: steps_11c
    }
  ];

  for (const u of updates) {
    await db.collection('questions').doc(u.id).update({
      type: 'multiple_choice',
      options: u.optsReordered,
      answer: u.answer_reordered,
      solutionSteps: u.steps,
      requiresManualGrading: FieldValue.delete(),
      updatedAt: FieldValue.serverTimestamp()
    });
  }

  // Update parent
  const pRef = db.collection('questions').doc('y10-7h-q11');
  const pSnap = await pRef.get();
  if (pSnap.exists && pSnap.data().subQuestions) {
    const newSubQs = pSnap.data().subQuestions.map(sq => {
      const u = updates.find(x => x.id === sq.id);
      if (u) {
        const { requiresManualGrading, ...rest } = sq;
        return {
          ...rest,
          type: 'multiple_choice',
          options: u.optsReordered,
          answer: u.answer_reordered,
          solutionSteps: u.steps
        };
      }
      return sq;
    });
    await pRef.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
  }

  console.log("Updated q11a, q11b, q11c");
  process.exit(0);
}

run().catch(console.error);
