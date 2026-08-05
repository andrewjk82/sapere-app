const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const createGraph = (eqStr, vX, vY, yIntX, yIntY, xInts, axisX, yMin, yMax, xMin, xMax, opensUp) => {
    let scriptLines = [
      `board.suspendUpdate();`,
      `board.create('arrow',[[${xMin},0],[${xMax},0]],{strokeColor:'#94a3b8',strokeWidth:1.5});`,
      `board.create('arrow',[[0,${yMin}],[0,${yMax}]],{strokeColor:'#94a3b8',strokeWidth:1.5});`,
      `board.create('text',[${xMax - 0.5},-0.5,'x'],{fontSize:13,color:'#64748b'});`,
      `board.create('text',[0.2,${yMax - 0.5},'y'],{fontSize:13,color:'#64748b'});`,
      // Axis of symmetry
      `board.create('line',[[${axisX},0],[${axisX},1]],{strokeColor:'#f59e0b',strokeWidth:1.5,dash:2});`,
      `board.create('text',[${axisX + 0.2},${vY + (opensUp ? 2 : -2)},'x=${axisX}'],{fontSize:11,color:'#f59e0b'});`,
      // Parabola
      `board.create('functiongraph',[function(x){return ${eqStr};},${xMin},${xMax}],{strokeColor:'#6366f1',strokeWidth:2.5});`,
      // Vertex
      `board.create('point',[${vX},${vY}],{name:'Vertex (${vX}, ${vY})',size:4,color:'#dc2626',label:{autoPosition:false,offset:[8, ${opensUp ? -15 : 15}]}});`,
      // y-intercept (if different from vertex)
    ];

    if (vX !== yIntX || vY !== yIntY) {
      scriptLines.push(`board.create('point',[${yIntX},${yIntY}],{name:'(0, ${yIntY})',size:4,color:'#22c55e',label:{autoPosition:false,offset:[8,0]}});`);
    }

    // x-intercepts
    for (const xi of xInts) {
      if (xi !== vX || 0 !== vY) { // Don't duplicate vertex
         scriptLines.push(`board.create('point',[${xi},0],{name:'(${xi}, 0)',size:4,color:'#f97316',label:{autoPosition:false,offset:[${xi < vX ? -45 : 8}, -15]}});`);
      }
    }

    scriptLines.push(`board.unsuspendUpdate();`);

    return {
      jsxGraph: {
        width: 360, height: 320,
        boundingbox: [xMin, yMax, xMax, yMin],
        script: scriptLines.join('\n')
      }
    };
  };

  const updates = [
    {
      id: 'y10-7h-q6a', // y = x^2 - 4x + 3
      steps: [
        {
          explanation: 'To sketch a parabola, we need to find its key features: the \\( y \\)-intercept, the \\( x \\)-intercepts, and the vertex.\n\nFirst, find the **\\( y \\)-intercept** by setting \\( x = 0 \\).',
          workingOut: [
            '\\( y = (0)^2 - 4(0) + 3 \\)',
            '\\( y = 3 \\)',
            '\\( y \\)-intercept: \\( (0, 3) \\)'
          ].join('\n'),
          graphData: null
        },
        {
          explanation: 'Next, find the **\\( x \\)-intercepts** by setting \\( y = 0 \\) and factorising.',
          workingOut: [
            '\\( 0 = x^2 - 4x + 3 \\)',
            '\\( 0 = (x - 1)(x - 3) \\)',
            '\\( x = 1 \\quad \\text{or} \\quad x = 3 \\)',
            '\\( x \\)-intercepts: \\( (1, 0) \\) and \\( (3, 0) \\)'
          ].join('\n'),
          graphData: null
        },
        {
          explanation: 'Find the **axis of symmetry**. This is exactly halfway between the \\( x \\)-intercepts.',
          workingOut: [
            '\\( x = \\frac{1 + 3}{2} = 2 \\)',
            'Axis of symmetry: \\( x = 2 \\)'
          ].join('\n'),
          graphData: null
        },
        {
          explanation: 'Find the **vertex** by substituting the \\( x \\)-value of the axis of symmetry back into the equation to find the corresponding \\( y \\)-value.',
          workingOut: [
            '\\( y = (2)^2 - 4(2) + 3 \\)',
            '\\( y = 4 - 8 + 3 = -1 \\)',
            'Vertex: \\( (2, -1) \\)'
          ].join('\n'),
          graphData: null
        },
        {
          explanation: 'Now, plot these points and draw a smooth, **upward-opening** U-shape through them (since the \\(x^2\\) coefficient is positive).',
          workingOut: '',
          graphData: createGraph('x*x-4*x+3', 2, -1, 0, 3, [1, 3], 2, -3, 5, -2, 6, true)
        }
      ]
    },
    {
      id: 'y10-7h-q6b', // y = -x^2 - 2x + 8
      steps: [
        {
          explanation: 'Find the **\\( y \\)-intercept** by setting \\( x = 0 \\).',
          workingOut: [
            '\\( y = -(0)^2 - 2(0) + 8 \\)',
            '\\( y = 8 \\)',
            '\\( y \\)-intercept: \\( (0, 8) \\)'
          ].join('\n'),
          graphData: null
        },
        {
          explanation: 'Find the **\\( x \\)-intercepts** by setting \\( y = 0 \\) and factorising. Multiply the whole equation by \\(-1\\) first to make it easier.',
          workingOut: [
            '\\( 0 = -x^2 - 2x + 8 \\)',
            '\\( 0 = x^2 + 2x - 8 \\)',
            '\\( 0 = (x + 4)(x - 2) \\)',
            '\\( x = -4 \\quad \\text{or} \\quad x = 2 \\)',
            '\\( x \\)-intercepts: \\( (-4, 0) \\) and \\( (2, 0) \\)'
          ].join('\n'),
          graphData: null
        },
        {
          explanation: 'Find the **axis of symmetry** (halfway between the \\( x \\)-intercepts).',
          workingOut: [
            '\\( x = \\frac{-4 + 2}{2} = -1 \\)',
            'Axis of symmetry: \\( x = -1 \\)'
          ].join('\n'),
          graphData: null
        },
        {
          explanation: 'Find the **vertex** by substituting \\( x = -1 \\) back into the original equation.',
          workingOut: [
            '\\( y = -(-1)^2 - 2(-1) + 8 \\)',
            '\\( y = -1 + 2 + 8 = 9 \\)',
            'Vertex: \\( (-1, 9) \\)'
          ].join('\n'),
          graphData: null
        },
        {
          explanation: 'Plot the points and draw a **downward-opening** U-shape (since the \\(x^2\\) coefficient is negative).',
          workingOut: '',
          graphData: createGraph('-x*x-2*x+8', -1, 9, 0, 8, [-4, 2], -1, -2, 11, -6, 4, false)
        }
      ]
    },
    {
      id: 'y10-7h-q6c', // y = 9 - x^2
      steps: [
        {
          explanation: 'Find the **\\( y \\)-intercept** by setting \\( x = 0 \\).',
          workingOut: [
            '\\( y = 9 - (0)^2 \\)',
            '\\( y = 9 \\)',
            '\\( y \\)-intercept: \\( (0, 9) \\)'
          ].join('\n'),
          graphData: null
        },
        {
          explanation: 'Find the **\\( x \\)-intercepts** by setting \\( y = 0 \\).',
          workingOut: [
            '\\( 0 = 9 - x^2 \\)',
            '\\( x^2 = 9 \\)',
            '\\( x = \\pm3 \\)',
            '\\( x \\)-intercepts: \\( (-3, 0) \\) and \\( (3, 0) \\)'
          ].join('\n'),
          graphData: null
        },
        {
          explanation: 'Find the **axis of symmetry**. It is halfway between \\( x = -3 \\) and \\( x = 3 \\).',
          workingOut: [
            '\\( x = \\frac{-3 + 3}{2} = 0 \\)',
            'Axis of symmetry: \\( x = 0 \\) (the y-axis)'
          ].join('\n'),
          graphData: null
        },
        {
          explanation: 'Find the **vertex**. Since the axis of symmetry is \\( x = 0 \\), the vertex is the same as the y-intercept!',
          workingOut: [
            'Vertex: \\( (0, 9) \\)'
          ].join('\n'),
          graphData: null
        },
        {
          explanation: 'Plot the points and draw a **downward-opening** parabola.',
          workingOut: '',
          graphData: createGraph('9-x*x', 0, 9, 0, 9, [-3, 3], 0, -2, 11, -5, 5, false)
        }
      ]
    },
    {
      id: 'y10-7h-q6d', // y = (x + 2)^2
      steps: [
        {
          explanation: 'Find the **\\( y \\)-intercept** by setting \\( x = 0 \\).',
          workingOut: [
            '\\( y = (0 + 2)^2 \\)',
            '\\( y = 4 \\)',
            '\\( y \\)-intercept: \\( (0, 4) \\)'
          ].join('\n'),
          graphData: null
        },
        {
          explanation: 'Find the **\\( x \\)-intercepts** by setting \\( y = 0 \\).',
          workingOut: [
            '\\( 0 = (x + 2)^2 \\)',
            '\\( x + 2 = 0 \\)',
            '\\( x = -2 \\)',
            '\\( x \\)-intercept: \\( (-2, 0) \\)'
          ].join('\n'),
          graphData: null
        },
        {
          explanation: 'Find the **vertex** and **axis of symmetry**. Because the equation is given in vertex form \\( y = a(x - h)^2 + k \\), we can read it directly. Here, \\( h = -2 \\) and \\( k = 0 \\).',
          workingOut: [
            'Vertex: \\( (-2, 0) \\)',
            'Axis of symmetry: \\( x = -2 \\)'
          ].join('\n'),
          graphData: null
        },
        {
          explanation: 'In this case, the vertex is the only \\( x \\)-intercept, meaning the parabola just touches the x-axis. Plot the points and draw an **upward-opening** parabola.',
          workingOut: '',
          graphData: createGraph('(x+2)*(x+2)', -2, 0, 0, 4, [-2], -2, -2, 8, -6, 2, true)
        }
      ]
    },
    {
      id: 'y10-7h-q6e', // y = (x - 2)^2 - 9
      steps: [
        {
          explanation: 'Find the **vertex** and **axis of symmetry**. Since the equation is in vertex form \\( y = a(x - h)^2 + k \\), we can read it directly. \\( h = 2 \\) and \\( k = -9 \\).',
          workingOut: [
            'Vertex: \\( (2, -9) \\)',
            'Axis of symmetry: \\( x = 2 \\)'
          ].join('\n'),
          graphData: null
        },
        {
          explanation: 'Find the **\\( y \\)-intercept** by setting \\( x = 0 \\).',
          workingOut: [
            '\\( y = (0 - 2)^2 - 9 \\)',
            '\\( y = 4 - 9 = -5 \\)',
            '\\( y \\)-intercept: \\( (0, -5) \\)'
          ].join('\n'),
          graphData: null
        },
        {
          explanation: 'Find the **\\( x \\)-intercepts** by setting \\( y = 0 \\).',
          workingOut: [
            '\\( 0 = (x - 2)^2 - 9 \\)',
            '\\( (x - 2)^2 = 9 \\)',
            '\\( x - 2 = \\pm3 \\)',
            '\\( x = 2 \\pm 3 \\)',
            '\\( x = 5 \\quad \\text{or} \\quad x = -1 \\)',
            '\\( x \\)-intercepts: \\( (-1, 0) \\) and \\( (5, 0) \\)'
          ].join('\n'),
          graphData: null
        },
        {
          explanation: 'Plot all key points and draw a smooth, **upward-opening** parabola.',
          workingOut: '',
          graphData: createGraph('(x-2)*(x-2)-9', 2, -9, 0, -5, [-1, 5], 2, -11, 4, -4, 8, true)
        }
      ]
    },
    {
      id: 'y10-7h-q6f', // y = x^2 - 4
      steps: [
        {
          explanation: 'Find the **\\( y \\)-intercept** by setting \\( x = 0 \\).',
          workingOut: [
            '\\( y = (0)^2 - 4 \\)',
            '\\( y = -4 \\)',
            '\\( y \\)-intercept: \\( (0, -4) \\)'
          ].join('\n'),
          graphData: null
        },
        {
          explanation: 'Find the **\\( x \\)-intercepts** by setting \\( y = 0 \\).',
          workingOut: [
            '\\( 0 = x^2 - 4 \\)',
            '\\( x^2 = 4 \\)',
            '\\( x = \\pm2 \\)',
            '\\( x \\)-intercepts: \\( (-2, 0) \\) and \\( (2, 0) \\)'
          ].join('\n'),
          graphData: null
        },
        {
          explanation: 'Find the **axis of symmetry**. It is halfway between \\( x = -2 \\) and \\( x = 2 \\).',
          workingOut: [
            '\\( x = \\frac{-2 + 2}{2} = 0 \\)',
            'Axis of symmetry: \\( x = 0 \\) (the y-axis)'
          ].join('\n'),
          graphData: null
        },
        {
          explanation: 'Find the **vertex**. Since the axis of symmetry is \\( x = 0 \\), the vertex is the same as the \\( y \\)-intercept.',
          workingOut: [
            'Vertex: \\( (0, -4) \\)'
          ].join('\n'),
          graphData: null
        },
        {
          explanation: 'Plot the points and draw an **upward-opening** parabola.',
          workingOut: '',
          graphData: createGraph('x*x-4', 0, -4, 0, -4, [-2, 2], 0, -6, 5, -5, 5, true)
        }
      ]
    }
  ];

  for (const u of updates) {
    await db.collection('questions').doc(u.id).update({
      solutionSteps: u.steps,
      graphData: FieldValue.delete(),
      updatedAt: FieldValue.serverTimestamp()
    });
  }

  // Update parent subQuestions for q6
  const pRef = db.collection('questions').doc('y10-7h-q6');
  const pSnap = await pRef.get();
  if (pSnap.exists && pSnap.data().subQuestions) {
    const newSubQs = pSnap.data().subQuestions.map(sq => {
      const u = updates.find(x => x.id === sq.id);
      if (u) {
        const { graphData, ...rest } = sq;
        return {
          ...rest,
          solutionSteps: u.steps
        };
      }
      return sq;
    });
    await pRef.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
  }

  console.log("Updated q6a-q6f with step-by-step logic and full graphs");
  process.exit(0);
}

run().catch(console.error);
