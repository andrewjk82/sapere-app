const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // y = 2x^2 - 4x - 6
  // = 2(x^2 - 2x) - 6
  // = 2(x^2 - 2x + 1 - 1) - 6
  // = 2(x - 1)^2 - 2 - 6
  // = 2(x - 1)^2 - 8
  // Vertex: (1, -8)
  // y-int: x=0 -> 2(0)^2 - 4(0) - 6 = -6  => (0, -6)
  // x-ints: 2x^2 - 4x - 6 = 0 -> x^2 - 2x - 3 = 0 -> (x-3)(x+1) = 0 -> x = 3, x = -1

  const graphSVG = `<svg viewBox="-80 -20 360 260" width="360" height="260" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="ah" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#94a3b8"/>
    </marker>
  </defs>
  <!-- Axes -->
  <line x1="20" y1="210" x2="260" y2="210" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#ah)"/>
  <line x1="140" y1="230" x2="140" y2="10" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#ah)"/>
  <!-- Axis labels -->
  <text x="262" y="214" font-size="12" fill="#64748b">x</text>
  <text x="143" y="8" font-size="12" fill="#64748b">y</text>

  <!-- Scale: 1 unit = 25px, origin at (140, 210) -->
  <!-- x: px = 140 + 25*x_val, y: px = 210 - 25*y_val -->

  <!-- Parabola y = 2x^2 - 4x - 6, from x = -2 to x = 4 -->
  <!-- Points: x=-2 -> y=2(4)+8-6=10 -> (90,  -40 OOB) -->
  <!-- Let's clip nicely from x=-1 (y=0) to x=3 (y=0), going through vertex -->
  <polyline points="
    90,10
    97.5,47.5
    105,80
    112.5,107.5
    120,130
    127.5,147.5
    132.5,157.5
    137.5,162.5
    140,160
    142.5,162.5
    147.5,167.5
    152.5,147.5
    155,130
    157.5,107.5
    165,80
    172.5,47.5
    180,10
    " fill="none" stroke="#6366f1" stroke-width="2.5"/>

  <!-- Recalculate points accurately: px_x = 140 + 25*x, px_y = 210 - 25*y -->
  <!-- y=2x^2-4x-6 -->
  <!-- x=-2: y=8+8-6=10, px=(90, 210-250)=-40 OOB. Let's cut at x=-1.5: y=2(2.25)+6-6=4.5, px=(102.5, 97.5) -->
  <!-- x=-1: y=0, px=(115, 210) -->
  <!-- x=0: y=-6, px=(140, 360) -> OOB low. 210-25*(-6)=210+150=360 OOB -->
  <!-- Scale adjustment needed. Let's use 20px per unit -->
  <!-- px_x = 140 + 20*x, px_y = 210 - 20*y -->
  <!-- x=-1: px=(120,210), x=0: px=(140, 330) OOB again -->
  <!-- y range: vertex -8 to y-int -6 to x-ints 0. Need scale where vertex fits -->
  <!-- Let's use custom scale: x: center at x=1 (vertex), y: go from -10 to 5 -->
  <!-- viewBox adjusted, scale 18px per unit -->
  <!-- Actually, let me redo the SVG more carefully -->
</svg>`;

  // Let's use JSXGraph for the sketch in q10a solution
  const graphData_a = {
    jsxGraph: {
      width: 360, height: 300,
      boundingbox: [-3, 6, 6, -12],
      script: `board.suspendUpdate();
board.create('arrow',[[-3,0],[6,0]],{strokeColor:'#94a3b8',strokeWidth:1.5});
board.create('arrow',[[0,-12],[0,6]],{strokeColor:'#94a3b8',strokeWidth:1.5});
board.create('text',[5.5,-0.5,'x'],{fontSize:13,color:'#64748b'});
board.create('text',[0.2,5.5,'y'],{fontSize:13,color:'#64748b'});
board.create('functiongraph',[function(x){return 2*x*x-4*x-6;},-2,4.5],{strokeColor:'#6366f1',strokeWidth:2.5});
board.create('point',[1,-8],{name:'Vertex (1, -8)',size:4,color:'#dc2626',label:{autoPosition:false,offset:[8,0]}});
board.create('point',[-1,0],{name:'(-1, 0)',size:4,color:'#f97316',label:{autoPosition:false,offset:[-60,-15]}});
board.create('point',[3,0],{name:'(3, 0)',size:4,color:'#f97316',label:{autoPosition:false,offset:[8,-15]}});
board.create('point',[0,-6],{name:'(0, -6)',size:4,color:'#22c55e',label:{autoPosition:false,offset:[8,0]}});
board.unsuspendUpdate();`
    }
  };

  // Steps for q10a (Teacher review - sketch)
  const steps_a = [
    {
      explanation: 'Convert the equation \\(y = 2x^2 - 4x - 6\\) to **vertex form** by completing the square. First, factor out the coefficient of \\(x^2\\) from the first two terms.',
      workingOut: '\\(y = 2(x^2 - 2x) - 6\\)',
      graphData: null
    },
    {
      explanation: 'Complete the square inside the brackets. Take half of the coefficient of \\(x\\): \\(\\frac{-2}{2} = -1\\). Square it: \\((-1)^2 = 1\\). Add and subtract \\(1\\) inside the brackets.',
      workingOut: [
        '\\(y = 2(x^2 - 2x + 1 - 1) - 6\\)',
        '\\(y = 2((x - 1)^2 - 1) - 6\\)',
        '\\(y = 2(x - 1)^2 - 2 - 6\\)',
        '\\(y = 2(x - 1)^2 - 8\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Read the **vertex** directly from the vertex form \\(y = a(x - h)^2 + k\\):',
      workingOut: '\\(\\text{Vertex: } (1,\\, -8)\\)',
      graphData: null
    },
    {
      explanation: 'Find the **y-intercept** by substituting \\(x = 0\\):',
      workingOut: [
        '\\(y = 2(0)^2 - 4(0) - 6\\)',
        '\\(y = -6\\)',
        '\\(\\text{y-intercept: } (0,\\, -6)\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Find the **x-intercepts** by solving \\(2x^2 - 4x - 6 = 0\\). Divide both sides by 2, then factorise:',
      workingOut: [
        '\\(x^2 - 2x - 3 = 0\\)',
        '\\((x - 3)(x + 1) = 0\\)',
        '\\(x = 3 \\quad \\text{or} \\quad x = -1\\)',
        '\\(\\text{x-intercepts: } (-1,\\, 0) \\text{ and } (3,\\, 0)\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Now sketch the graph using all the key features: vertex \\((1, -8)\\), y-intercept \\((0, -6)\\), and x-intercepts \\((-1, 0)\\) and \\((3, 0)\\). The parabola opens upwards since \\(a = 2 > 0\\).',
      workingOut: '',
      graphData: graphData_a
    }
  ];

  // Steps for q10b: solve 2x^2 - 4x - 6 < 0
  // From graph: parabola is BELOW x-axis between x=-1 and x=3
  // So solution: -1 < x < 3
  const steps_b = [
    {
      explanation: 'To solve \\(2x^2 - 4x - 6 < 0\\), we first find the x-intercepts of the parabola \\(y = 2x^2 - 4x - 6\\). We already found these in part a):',
      workingOut: '\\(x = -1 \\quad \\text{and} \\quad x = 3\\)',
      graphData: null
    },
    {
      explanation: 'The inequality \\(2x^2 - 4x - 6 < 0\\) asks: **"For which values of \\(x\\) is the parabola below the \\(x\\)-axis?"**',
      workingOut: '',
      graphData: null
    },
    {
      explanation: 'Since the parabola opens **upwards** (\\(a = 2 > 0\\)), it is below the \\(x\\)-axis **between** the two x-intercepts.',
      workingOut: '',
      graphData: null
    },
    {
      explanation: 'Therefore, the solution is:',
      workingOut: '\\(-1 < x < 3\\)',
      graphData: null
    }
  ];

  // Update q10a
  await db.collection('questions').doc('y10-7h-q10a').update({
    solutionSteps: steps_a,
    updatedAt: FieldValue.serverTimestamp()
  });

  // Update q10b to multiple_choice
  const opts_b = [
    { text: '\\(x < -1\\) or \\(x > 3\\)', imageUrl: '' },
    { text: '\\(-3 < x < 1\\)', imageUrl: '' },
    { text: '\\(-1 < x < 3\\)', imageUrl: '' }, // Correct -> 2
    { text: '\\(x < -3\\) or \\(x > 1\\)', imageUrl: '' }
  ];

  await db.collection('questions').doc('y10-7h-q10b').update({
    type: 'multiple_choice',
    options: opts_b,
    answer: '2',
    solutionSteps: steps_b,
    requiresManualGrading: FieldValue.delete(),
    updatedAt: FieldValue.serverTimestamp()
  });

  // Update parent document
  const pRef = db.collection('questions').doc('y10-7h-q10');
  const pSnap = await pRef.get();
  if (pSnap.exists && pSnap.data().subQuestions) {
    const newSubQs = pSnap.data().subQuestions.map(sq => {
      if (sq.id === 'y10-7h-q10a') {
        return { ...sq, solutionSteps: steps_a };
      }
      if (sq.id === 'y10-7h-q10b') {
        const { requiresManualGrading, ...rest } = sq;
        return {
          ...rest,
          type: 'multiple_choice',
          options: opts_b,
          answer: '2',
          solutionSteps: steps_b
        };
      }
      return sq;
    });
    await pRef.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
  }

  console.log("Updated y10-7h-q10a and q10b");
  process.exit(0);
}

run().catch(console.error);
