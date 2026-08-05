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
      `board.create('segment',[[${axisX},${yMin}],[${axisX},${yMax}]],{strokeColor:'#f59e0b',strokeWidth:1.5,dash:2});`,
      `board.create('text',[${axisX + 0.2},${vY + (opensUp ? 2 : -2)},'x=${axisX}'],{fontSize:11,color:'#f59e0b'});`,
      // Parabola
      `board.create('functiongraph',[function(x){return ${eqStr};},${xMin},${xMax}],{strokeColor:'#6366f1',strokeWidth:2.5});`,
      // Vertex
      `board.create('point',[${vX},${vY}],{name:'Vertex (${vX}, ${vY})',size:4,color:'#dc2626',label:{autoPosition:false,offset:[8, ${opensUp ? -15 : 15}]}});`,
    ];

    if (vX !== yIntX || vY !== yIntY) {
      scriptLines.push(`board.create('point',[${yIntX},${yIntY}],{name:'(0, ${yIntY})',size:4,color:'#22c55e',label:{autoPosition:false,offset:[8,0]}});`);
    }

    for (const xi of xInts) {
      if (xi !== vX || 0 !== vY) {
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

  const createInequalityGraph = () => {
    return {
      jsxGraph: {
        width: 360, height: 280,
        boundingbox: [-7, 8, 3, -12],
        script: `board.suspendUpdate();
board.create('arrow',[[-7,0],[3,0]],{strokeColor:'#94a3b8',strokeWidth:1.5});
board.create('arrow',[[0,-12],[0,8]],{strokeColor:'#94a3b8',strokeWidth:1.5});
board.create('text',[2.5,-0.5,'x'],{fontSize:13,color:'#64748b'});
board.create('text',[0.2,7.5,'y'],{fontSize:13,color:'#64748b'});
// Portions NOT satisfying (above x-axis, outside roots) — light dashed
board.create('functiongraph',[function(x){return x*x+4*x-5;},-7,-5],{strokeColor:'#c4b5fd',strokeWidth:1.5,dash:1});
board.create('functiongraph',[function(x){return x*x+4*x-5;},1,3],{strokeColor:'#c4b5fd',strokeWidth:1.5,dash:1});
// Solution region (below x-axis between roots) — RED BOLD
board.create('functiongraph',[function(x){return x*x+4*x-5;},-5,1],{strokeColor:'#ef4444',strokeWidth:3});
// x-intercepts
board.create('point',[-5,0],{name:'(-5, 0)',size:4,color:'#f97316',label:{autoPosition:false,offset:[-65,-15]}});
board.create('point',[1,0],{name:'(1, 0)',size:4,color:'#f97316',label:{autoPosition:false,offset:[8,-15]}});
// Vertex
board.create('point',[-2,-9],{name:'Vertex (-2,-9)',size:3,color:'#dc2626',label:{autoPosition:false,offset:[8,8]}});
board.create('text',[-2,-5,'← solution region →'],{fontSize:11,color:'#dc2626'});
board.unsuspendUpdate();`
      }
    };
  };

  const updates = [
    {
      id: 'y10-7h-q9a',
      opts: [
        { text: '\\( (-2, -9) \\)', imageUrl: '' }, // Correct -> 0
        { text: '\\( (2, -9) \\)', imageUrl: '' },
        { text: '\\( (-2, 9) \\)', imageUrl: '' },
        { text: '\\( (2, 9) \\)', imageUrl: '' }
      ],
      answer: '0',
      optsReordered: [
        { text: '\\( (2, -9) \\)', imageUrl: '' },
        { text: '\\( (-2, 9) \\)', imageUrl: '' },
        { text: '\\( (-2, -9) \\)', imageUrl: '' }, // Correct -> 2
        { text: '\\( (2, 9) \\)', imageUrl: '' }
      ],
      steps: [
        {
          explanation: 'To find the turning point (vertex) by completing the square, start with the equation \\( y = x^2 + 4x - 5 \\). Take half of the \\(x\\)-coefficient (which is 4) and square it: \\( (\\frac{4}{2})^2 = 2^2 = 4 \\).',
          workingOut: '',
          graphData: null
        },
        {
          explanation: 'Add and subtract this value inside the expression to create a perfect square trinomial.',
          workingOut: '\\( y = (x^2 + 4x + 4 - 4) - 5 \\)',
          graphData: null
        },
        {
          explanation: 'Factor the perfect square trinomial and simplify the constants at the end.',
          workingOut: [
            '\\( y = (x + 2)^2 - 4 - 5 \\)',
            '\\( y = (x + 2)^2 - 9 \\)'
          ].join('\n'),
          graphData: null
        },
        {
          explanation: 'The equation is now in the form \\( y = a(x - h)^2 + k \\). The turning point is \\( (h, k) \\). Remember to flip the sign inside the bracket.',
          workingOut: 'Turning point: \\( (-2, -9) \\)',
          graphData: null
        }
      ]
    },
    {
      id: 'y10-7h-q9b',
      opts: [
        { text: 'y-int: \\( (0, -5) \\), x-ints: \\( (-5, 0) \\) and \\( (1, 0) \\)', imageUrl: '' }, // Correct -> 0
        { text: 'y-int: \\( (0, 5) \\), x-ints: \\( (5, 0) \\) and \\( (-1, 0) \\)', imageUrl: '' },
        { text: 'y-int: \\( (0, -5) \\), x-ints: \\( (5, 0) \\) and \\( (-1, 0) \\)', imageUrl: '' },
        { text: 'y-int: \\( (0, 5) \\), x-ints: \\( (-5, 0) \\) and \\( (1, 0) \\)', imageUrl: '' }
      ],
      answer: '0',
      optsReordered: [
        { text: 'y-int: \\( (0, 5) \\), x-ints: \\( (5, 0) \\) and \\( (-1, 0) \\)', imageUrl: '' },
        { text: 'y-int: \\( (0, -5) \\), x-ints: \\( (5, 0) \\) and \\( (-1, 0) \\)', imageUrl: '' },
        { text: 'y-int: \\( (0, 5) \\), x-ints: \\( (-5, 0) \\) and \\( (1, 0) \\)', imageUrl: '' },
        { text: 'y-int: \\( (0, -5) \\), x-ints: \\( (-5, 0) \\) and \\( (1, 0) \\)', imageUrl: '' } // Correct -> 3
      ],
      steps: [
        {
          explanation: 'First, find the \\(y\\)-intercept by setting \\( x = 0 \\) in the original equation.',
          workingOut: [
            '\\( y = (0)^2 + 4(0) - 5 \\)',
            '\\( y = -5 \\)',
            'y-intercept: \\( (0, -5) \\)'
          ].join('\n'),
          graphData: null
        },
        {
          explanation: 'Next, find the \\(x\\)-intercepts by setting \\( y = 0 \\).',
          workingOut: '\\( 0 = x^2 + 4x - 5 \\)',
          graphData: null
        },
        {
          explanation: 'Factorise the quadratic by finding two numbers that multiply to \\(-5\\) and add to \\(4\\).',
          workingOut: [
            '\\( 0 = (x + 5)(x - 1) \\)',
            '\\( x + 5 = 0 \\quad \\text{or} \\quad x - 1 = 0 \\)',
            '\\( x = -5 \\quad \\text{or} \\quad x = 1 \\)'
          ].join('\n'),
          graphData: null
        },
        {
          explanation: 'Write these as coordinate points.',
          workingOut: 'x-intercepts: \\( (-5, 0) \\) and \\( (1, 0) \\)',
          graphData: null
        }
      ]
    },
    {
      id: 'y10-7h-q9c',
      opts: [
        { text: 'Upward-opening, vertex at \\((-2, -9)\\), x-intercepts at \\(-5\\) and \\(1\\)', imageUrl: '' }, // Correct -> 0
        { text: 'Downward-opening, vertex at \\((-2, -9)\\), x-intercepts at \\(-5\\) and \\(1\\)', imageUrl: '' },
        { text: 'Upward-opening, vertex at \\((2, 9)\\), x-intercepts at \\(-1\\) and \\(5\\)', imageUrl: '' },
        { text: 'Downward-opening, vertex at \\((2, 9)\\), x-intercepts at \\(-1\\) and \\(5\\)', imageUrl: '' }
      ],
      answer: '0',
      optsReordered: [
        { text: 'Downward-opening, vertex at \\((-2, -9)\\), x-intercepts at \\(-5\\) and \\(1\\)', imageUrl: '' },
        { text: 'Upward-opening, vertex at \\((-2, -9)\\), x-intercepts at \\(-5\\) and \\(1\\)', imageUrl: '' }, // Correct -> 1
        { text: 'Upward-opening, vertex at \\((2, 9)\\), x-intercepts at \\(-1\\) and \\(5\\)', imageUrl: '' },
        { text: 'Downward-opening, vertex at \\((2, 9)\\), x-intercepts at \\(-1\\) and \\(5\\)', imageUrl: '' }
      ],
      steps: [
        {
          explanation: 'To sketch the graph, we gather all the key points we found in parts a and b.',
          workingOut: [
            'Vertex: \\( (-2, -9) \\)',
            'y-intercept: \\( (0, -5) \\)',
            'x-intercepts: \\( (-5, 0) \\) and \\( (1, 0) \\)'
          ].join('\n'),
          graphData: null
        },
        {
          explanation: 'Since the coefficient of \\( x^2 \\) is positive (it is 1), the parabola will open **upwards** (a U-shape).',
          workingOut: '',
          graphData: null
        },
        {
          explanation: 'Plot these points on a Cartesian plane and draw a smooth curve through them.',
          workingOut: '',
          graphData: createGraph('x*x+4*x-5', -2, -9, 0, -5, [-5, 1], -2, -11, 6, -7, 3, true)
        }
      ]
    },
    {
      id: 'y10-7h-q9d',
      opts: [
        { text: '\\( -5 \\le x \\le 1 \\)', imageUrl: '' }, // Correct -> 0
        { text: '\\( x \\le -5 \\text{ or } x \\ge 1 \\)', imageUrl: '' },
        { text: '\\( -1 \\le x \\le 5 \\)', imageUrl: '' },
        { text: '\\( x \\le -1 \\text{ or } x \\ge 5 \\)', imageUrl: '' }
      ],
      answer: '0',
      optsReordered: [
        { text: '\\( x \\le -5 \\text{ or } x \\ge 1 \\)', imageUrl: '' },
        { text: '\\( x \\le -1 \\text{ or } x \\ge 5 \\)', imageUrl: '' },
        { text: '\\( -1 \\le x \\le 5 \\)', imageUrl: '' },
        { text: '\\( -5 \\le x \\le 1 \\)', imageUrl: '' } // Correct -> 3
      ],
      steps: [
        {
          explanation: 'We need to solve the inequality \\( x^2 + 4x - 5 \\le 0 \\). This means we want to find where the graph of \\( y = x^2 + 4x - 5 \\) is **below or on the x-axis**.',
          workingOut: '',
          graphData: null
        },
        {
          explanation: 'From our previous work, we know the x-intercepts (where the graph touches the x-axis) are \\( x = -5 \\) and \\( x = 1 \\).',
          workingOut: '',
          graphData: null
        },
        {
          explanation: 'Looking at the sketch from part c, the parabola dips below the x-axis **between** these two intercepts.',
          workingOut: '',
          graphData: createInequalityGraph()
        },
        {
          explanation: 'Therefore, the solution is all \\( x \\)-values from \\( -5 \\) up to \\( 1 \\), inclusive.',
          workingOut: '\\( -5 \\le x \\le 1 \\)',
          graphData: null
        }
      ]
    }
  ];

  for (const u of updates) {
    const finalAns = u.optsReordered === updates[0].optsReordered ? '2' : (u.id === 'y10-7h-q9b' ? '3' : (u.id === 'y10-7h-q9c' ? '1' : '3'));
    
    // Change question text for q9c to suit multiple choice
    let updateData = {
      type: 'multiple_choice',
      options: u.optsReordered,
      answer: finalAns,
      solutionSteps: u.steps,
      graphData: FieldValue.delete(),
      requiresManualGrading: FieldValue.delete(),
      updatedAt: FieldValue.serverTimestamp()
    };
    
    if (u.id === 'y10-7h-q9c') {
      updateData.question = 'Consider the quadratic equation \\( y = x^2 + 4x - 5 \\).\n\nc) Which of the following correctly describes the sketched graph of this equation?';
    }

    await db.collection('questions').doc(u.id).update(updateData);
  }

  // Update parent subQuestions for q9
  const pRef = db.collection('questions').doc('y10-7h-q9');
  const pSnap = await pRef.get();
  if (pSnap.exists && pSnap.data().subQuestions) {
    const newSubQs = pSnap.data().subQuestions.map(sq => {
      const u = updates.find(x => x.id === sq.id);
      if (u) {
        const finalAns = u.optsReordered === updates[0].optsReordered ? '2' : (u.id === 'y10-7h-q9b' ? '3' : (u.id === 'y10-7h-q9c' ? '1' : '3'));
        const { graphData, requiresManualGrading, ...rest } = sq;
        
        let newSq = {
          ...rest,
          type: 'multiple_choice',
          options: u.optsReordered,
          answer: finalAns,
          solutionSteps: u.steps
        };
        
        if (u.id === 'y10-7h-q9c') {
          newSq.question = 'Consider the quadratic equation \\( y = x^2 + 4x - 5 \\).\n\nc) Which of the following correctly describes the sketched graph of this equation?';
        }
        return newSq;
      }
      return sq;
    });
    await pRef.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
  }

  console.log("Updated q9a, q9b, q9c, q9d");
  process.exit(0);
}

run().catch(console.error);
