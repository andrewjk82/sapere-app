const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const getSteps = (eq, h_val, k_val, h_str, k_str, graph, isNegativeA = false) => [
    {
      explanation: 'Recognise the form of the equation. This parabola is written in **vertex form**:\n\\(y = a(x - h)^2 + k\\)\nwhere \\((h, k)\\) is the vertex and \\(x = h\\) is the axis of symmetry.',
      workingOut: '',
      graphData: null
    },
    {
      explanation: `Compare \\(${eq}\\) with the vertex form \\(y = a(x - h)^2 + k\\).\nMatch each part carefully — watch the signs!`,
      workingOut: [
        `\\(y = ${isNegativeA ? '-' : ''}(x - \\mathbf{${h_str}})^2 + \\mathbf{${k_str}}\\)`,
        `\\(h = ${h_val}, \\quad k = ${k_val}\\)`
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Read off the axis of symmetry and the vertex directly from \\(h\\) and \\(k\\).',
      workingOut: [
        `\\(\\text{Axis of symmetry: } x = h = ${h_val}\\)`,
        `\\(\\text{Vertex: } (h,\\, k) = (${h_val},\\, ${k_val})\\)`
      ].join('\n'),
      graphData: null
    },
    {
      explanation: `Here is the graph confirming the vertex at \\((${h_val}, ${k_val})\\) and the axis of symmetry \\(x = ${h_val}\\).`,
      workingOut: '',
      graphData: graph
    }
  ];

  const graphData = (eq_func, h, k, eq_text, opensUp = true) => {
    let y_min, y_max;
    if (opensUp) {
      y_min = Math.min(k - 2, -2);
      y_max = Math.max(k + 8, 8);
    } else {
      y_min = Math.min(k - 8, -8);
      y_max = Math.max(k + 2, 2);
    }
    const x_min = h - 5;
    const x_max = h + 5;
    return {
      jsxGraph: {
        width: 360, height: 300,
        boundingbox: [x_min, y_max, x_max, y_min],
        script: `board.suspendUpdate();
board.create('arrow',[[${x_min},0],[${x_max},0]],{strokeColor:'#94a3b8',strokeWidth:1.5});
board.create('arrow',[[0,${y_min}],[0,${y_max}]],{strokeColor:'#94a3b8',strokeWidth:1.5});
board.create('functiongraph',[${eq_func},${x_min},${x_max}],{strokeColor:'#6366f1',strokeWidth:2.5});
board.create('line',[[${h},${y_min}],[${h},${y_max}]],{strokeColor:'#dc2626',strokeWidth:1.5,dash:2,straightFirst:false,straightLast:false});
board.create('point',[${h},${k}],{name:'Vertex (${h}, ${k})',size:4,color:'#dc2626',label:{autoPosition:false,offset:[8,8]}});
board.create('text',[${h+1},${k+(opensUp?3:-3)},'${eq_text}'],{fontSize:12,color:'#4f46e5'});
board.unsuspendUpdate();`
      }
    };
  };

  const updates = [
    {
      id: 'y10-7a-q1h',
      opts: [
        { text: 'Axis: \\(x = 2\\), Vertex: \\((2,\\; -3)\\)', imageUrl: '' },
        { text: 'Axis: \\(x = -2\\), Vertex: \\((-2,\\; -3)\\)', imageUrl: '' }, // Correct -> 1
        { text: 'Axis: \\(x = -2\\), Vertex: \\((-2,\\; 3)\\)', imageUrl: '' },
        { text: 'Axis: \\(x = 2\\), Vertex: \\((2,\\; 3)\\)', imageUrl: '' }
      ],
      answer: '1',
      steps: getSteps('y = (x + 2)^2 - 3', -2, -3, '-2', '-3', graphData('function(x){return (x+2)*(x+2)-3;}', -2, -3, 'y = (x+2)² - 3', true))
    },
    {
      id: 'y10-7a-q1i',
      opts: [
        { text: 'Axis: \\(x = -6\\), Vertex: \\((-6,\\; 6)\\)', imageUrl: '' },
        { text: 'Axis: \\(x = 6\\), Vertex: \\((-6,\\; 6)\\)', imageUrl: '' },
        { text: 'Axis: \\(x = 6\\), Vertex: \\((6,\\; -6)\\)', imageUrl: '' },
        { text: 'Axis: \\(x = 6\\), Vertex: \\((6,\\; 6)\\)', imageUrl: '' } // Correct -> 3
      ],
      answer: '3',
      steps: getSteps('y = (x - 6)^2 + 6', 6, 6, '6', '6', graphData('function(x){return (x-6)*(x-6)+6;}', 6, 6, 'y = (x-6)² + 6', true))
    },
    {
      id: 'y10-7a-q1j',
      opts: [
        { text: 'Axis: \\(x = 1\\), Vertex: \\((1,\\; 0)\\)', imageUrl: '' },
        { text: 'Axis: \\(x = -1\\), Vertex: \\((0,\\; -1)\\)', imageUrl: '' },
        { text: 'Axis: \\(x = -1\\), Vertex: \\((-1,\\; 0)\\)', imageUrl: '' }, // Correct -> 2
        { text: 'Axis: \\(x = 0\\), Vertex: \\((-1,\\; 0)\\)', imageUrl: '' }
      ],
      answer: '2',
      steps: getSteps('y = -(x + 1)^2', -1, 0, '-1', '0', graphData('function(x){return -(x+1)*(x+1);}', -1, 0, 'y = -(x+1)²', false), true)
    },
    {
      id: 'y10-7a-q1k',
      opts: [
        { text: 'Axis: \\(x = -2\\), Vertex: \\((-2,\\; 1)\\)', imageUrl: '' },
        { text: 'Axis: \\(x = 2\\), Vertex: \\((2,\\; 1)\\)', imageUrl: '' }, // Correct -> 1
        { text: 'Axis: \\(x = 2\\), Vertex: \\((-2,\\; 1)\\)', imageUrl: '' },
        { text: 'Axis: \\(x = 1\\), Vertex: \\((1,\\; 2)\\)', imageUrl: '' }
      ],
      answer: '1',
      steps: getSteps('y = -(x - 2)^2 + 1', 2, 1, '2', '1', graphData('function(x){return -(x-2)*(x-2)+1;}', 2, 1, 'y = -(x-2)² + 1', false), true)
    },
    {
      id: 'y10-7a-q1l',
      opts: [
        { text: 'Axis: \\(x = 3\\), Vertex: \\((3,\\; 5)\\)', imageUrl: '' },
        { text: 'Axis: \\(x = -3\\), Vertex: \\((3,\\; -5)\\)', imageUrl: '' },
        { text: 'Axis: \\(x = -3\\), Vertex: \\((-3,\\; -5)\\)', imageUrl: '' },
        { text: 'Axis: \\(x = -3\\), Vertex: \\((-3,\\; 5)\\)', imageUrl: '' } // Correct -> 3
      ],
      answer: '3',
      steps: getSteps('y = -(x + 3)^2 + 5', -3, 5, '-3', '5', graphData('function(x){return -(x+3)*(x+3)+5;}', -3, 5, 'y = -(x+3)² + 5', false), true)
    }
  ];

  for (const u of updates) {
    await db.collection('questions').doc(u.id).update({
      type: 'multiple_choice',
      options: u.opts,
      answer: u.answer,
      solutionSteps: u.steps,
      requiresManualGrading: FieldValue.delete(),
      updatedAt: FieldValue.serverTimestamp()
    });
  }

  // Handle q2a separately
  const graph2a = {
    jsxGraph: {
      width: 360, height: 320,
      boundingbox: [-4, 5, 8, -8],
      script: `board.suspendUpdate();
board.create('arrow',[[-4,0],[8,0]],{strokeColor:'#94a3b8',strokeWidth:1.5});
board.create('arrow',[[0,-8],[0,5]],{strokeColor:'#94a3b8',strokeWidth:1.5});
board.create('text',[7.5,-0.5,'x'],{fontSize:13,color:'#64748b'});
board.create('text',[0.2,4.5,'y'],{fontSize:13,color:'#64748b'});
board.create('functiongraph',[function(x){return (x-2)*(x-2)-7;},-2,6],{strokeColor:'#6366f1',strokeWidth:2.5});
board.create('point',[0,-3],{name:'y-intercept (0, -3)',size:4,color:'#dc2626',label:{autoPosition:false,offset:[-100,5]}});
board.create('point',[2,-7],{name:'Vertex',size:3,color:'#f97316',label:{autoPosition:false,offset:[5,0]}});
board.create('text',[3,1,'y = (x-2)² - 7'],{fontSize:12,color:'#4f46e5'});
board.unsuspendUpdate();`
    }
  };

  const steps2a = [
    {
      explanation: 'To find the \\(y\\)-intercept of any function, we substitute \\(x = 0\\) into the equation.',
      workingOut: '\\(x = 0\\)',
      graphData: null
    },
    {
      explanation: 'Substitute \\(x = 0\\) into the equation \\(y = (x - 2)^2 - 7\\).',
      workingOut: [
        '\\(y = (0 - 2)^2 - 7\\)',
        '\\(y = (-2)^2 - 7\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Calculate the result. Remember that \\((-2)^2 = 4\\).',
      workingOut: [
        '\\(y = 4 - 7\\)',
        '\\(y = -3\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'So, the \\(y\\)-intercept is \\(-3\\) (or the point \\((0, -3)\\)). Here is the graph showing this:',
      workingOut: '',
      graphData: graph2a
    }
  ];

  await db.collection('questions').doc('y10-7a-q2a').update({
    type: 'multiple_choice',
    options: [
      { text: '\\(y = -7\\)', imageUrl: '' },
      { text: '\\(y = -3\\)', imageUrl: '' }, // Correct -> 1
      { text: '\\(y = -11\\)', imageUrl: '' },
      { text: '\\(y = 3\\)', imageUrl: '' }
    ],
    answer: '1',
    solutionSteps: steps2a,
    requiresManualGrading: FieldValue.delete(),
    updatedAt: FieldValue.serverTimestamp()
  });

  // Update parent subQuestions
  const pRef1 = db.collection('questions').doc('y10-7a-q1');
  const pSnap1 = await pRef1.get();
  if (pSnap1.exists && pSnap1.data().subQuestions) {
    const newSubQs = pSnap1.data().subQuestions.map(sq => {
      const u = updates.find(x => x.id === sq.id);
      if (u) {
        return {
          ...sq,
          type: 'multiple_choice',
          options: u.opts,
          answer: u.answer,
          solutionSteps: u.steps,
          requiresManualGrading: FieldValue.delete()
        };
      }
      return sq;
    });
    await pRef1.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
  }

  const pRef2 = db.collection('questions').doc('y10-7a-q2');
  const pSnap2 = await pRef2.get();
  if (pSnap2.exists && pSnap2.data().subQuestions) {
    const newSubQs = pSnap2.data().subQuestions.map(sq => {
      if (sq.id === 'y10-7a-q2a') {
        return {
          ...sq,
          type: 'multiple_choice',
          options: [
            { text: '\\(y = -7\\)', imageUrl: '' },
            { text: '\\(y = -3\\)', imageUrl: '' },
            { text: '\\(y = -11\\)', imageUrl: '' },
            { text: '\\(y = 3\\)', imageUrl: '' }
          ],
          answer: '1',
          solutionSteps: steps2a,
          requiresManualGrading: FieldValue.delete()
        };
      }
      return sq;
    });
    await pRef2.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
  }

  console.log("Updated q1h to q1l, and q2a");
  process.exit(0);
}

run().catch(console.error);
