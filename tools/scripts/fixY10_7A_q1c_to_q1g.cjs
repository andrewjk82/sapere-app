const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const getSteps = (eq, h_val, k_val, h_str, k_str, graph) => [
    {
      explanation: 'Recognise the form of the equation. This parabola is written in **vertex form**:\n\\(y = a(x - h)^2 + k\\)\nwhere \\((h, k)\\) is the vertex and \\(x = h\\) is the axis of symmetry.',
      workingOut: '',
      graphData: null
    },
    {
      explanation: `Compare \\(${eq}\\) with the vertex form \\(y = a(x - h)^2 + k\\).\nMatch each part carefully — watch the signs!`,
      workingOut: [
        `\\(y = a(x - \\mathbf{${h_str}})^2 + \\mathbf{${k_str}}\\)`,
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

  const graphData = (eq_func, x_min, x_max, h, k, eq_text) => ({
    jsxGraph: {
      width: 360, height: 300,
      boundingbox: [h - 6, Math.max(k + 8, 10), h + 6, Math.min(k - 2, -2)],
      script: `board.suspendUpdate();
board.create('arrow',[[${h-6},0],[${h+6},0]],{strokeColor:'#94a3b8',strokeWidth:1.5});
board.create('arrow',[[0,${Math.min(k-2,-2)}],[0,${Math.max(k+8,10)}]],{strokeColor:'#94a3b8',strokeWidth:1.5});
board.create('functiongraph',[${eq_func},${x_min},${x_max}],{strokeColor:'#6366f1',strokeWidth:2.5});
board.create('line',[[${h},${k-5}],[${h},${k+10}]],{strokeColor:'#dc2626',strokeWidth:1.5,dash:2,straightFirst:false,straightLast:false});
board.create('point',[${h},${k}],{name:'Vertex (${h}, ${k})',size:4,color:'#dc2626',label:{autoPosition:false,offset:[8,8]}});
board.create('text',[${h+1.5},${k+4},'${eq_text}'],{fontSize:12,color:'#4f46e5'});
board.unsuspendUpdate();`
    }
  });

  const updates = [
    {
      id: 'y10-7a-q1c',
      opts: [
        { text: 'Axis: \\(x = -2\\), Vertex: \\((-2,\\; 6)\\)', imageUrl: '' },
        { text: 'Axis: \\(x = 2\\), Vertex: \\((2,\\; 6)\\)', imageUrl: '' },
        { text: 'Axis: \\(x = 2\\), Vertex: \\((0,\\; 6)\\)', imageUrl: '' },
        { text: 'Axis: \\(x = 6\\), Vertex: \\((6,\\; 2)\\)', imageUrl: '' }
      ],
      answer: '1',
      steps: getSteps('y = (x - 2)^2 + 6', 2, 6, '2', '6', graphData('function(x){return (x-2)*(x-2)+6;}', -2, 6, 2, 6, 'y = (x-2)² + 6'))
    },
    {
      id: 'y10-7a-q1d',
      opts: [
        { text: 'Axis: \\(x = 3\\), Vertex: \\((3,\\; 7)\\)', imageUrl: '' },
        { text: 'Axis: \\(x = -3\\), Vertex: \\((-3,\\; -7)\\)', imageUrl: '' },
        { text: 'Axis: \\(x = 3\\), Vertex: \\((-3,\\; 7)\\)', imageUrl: '' },
        { text: 'Axis: \\(x = -3\\), Vertex: \\((-3,\\; 7)\\)', imageUrl: '' }
      ],
      answer: '3',
      steps: getSteps('y = (x + 3)^2 + 7', -3, 7, '-3', '7', graphData('function(x){return (x+3)*(x+3)+7;}', -7, 1, -3, 7, 'y = (x+3)² + 7'))
    },
    {
      id: 'y10-7a-q1e',
      opts: [
        { text: 'Axis: \\(x = 2\\), Vertex: \\((2,\\; 3)\\)', imageUrl: '' },
        { text: 'Axis: \\(x = -2\\), Vertex: \\((-2,\\; -3)\\)', imageUrl: '' },
        { text: 'Axis: \\(x = -2\\), Vertex: \\((-2,\\; 3)\\)', imageUrl: '' },
        { text: 'Axis: \\(x = 3\\), Vertex: \\((3,\\; -2)\\)', imageUrl: '' }
      ],
      answer: '2',
      steps: getSteps('y = (x + 2)^2 + 3', -2, 3, '-2', '3', graphData('function(x){return (x+2)*(x+2)+3;}', -6, 2, -2, 3, 'y = (x+2)² + 3'))
    },
    {
      id: 'y10-7a-q1f',
      opts: [
        { text: 'Axis: \\(x = 9\\), Vertex: \\((9,\\; 0)\\)', imageUrl: '' },
        { text: 'Axis: \\(x = 0\\), Vertex: \\((0,\\; 9)\\)', imageUrl: '' },
        { text: 'Axis: \\(x = 0\\), Vertex: \\((9,\\; 9)\\)', imageUrl: '' },
        { text: 'Axis: \\(x = -9\\), Vertex: \\((0,\\; -9)\\)', imageUrl: '' }
      ],
      answer: '1',
      steps: getSteps('y = -x^2 + 9', 0, 9, '0', '9', graphData('function(x){return -x*x+9;}', -4, 4, 0, 9, 'y = -x² + 9'))
    },
    {
      id: 'y10-7a-q1g',
      opts: [
        { text: 'Axis: \\(x = -3\\), Vertex: \\((-3,\\; -4)\\)', imageUrl: '' },
        { text: 'Axis: \\(x = -3\\), Vertex: \\((3,\\; -4)\\)', imageUrl: '' },
        { text: 'Axis: \\(x = 3\\), Vertex: \\((3,\\; 4)\\)', imageUrl: '' },
        { text: 'Axis: \\(x = 3\\), Vertex: \\((3,\\; -4)\\)', imageUrl: '' }
      ],
      answer: '3',
      steps: getSteps('y = (x - 3)^2 - 4', 3, -4, '3', '-4', graphData('function(x){return (x-3)*(x-3)-4;}', -1, 7, 3, -4, 'y = (x-3)² - 4'))
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

  const pRef = db.collection('questions').doc('y10-7a-q1');
  const pSnap = await pRef.get();
  if (pSnap.exists && pSnap.data().subQuestions) {
    const newSubQs = pSnap.data().subQuestions.map(sq => {
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
    await pRef.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
  }

  console.log("Updated q1c, q1d, q1e, q1f, q1g");
  process.exit(0);
}

run().catch(console.error);
