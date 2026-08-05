const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const getSteps = (eq, y_int, eval_steps, graphData) => [
    {
      explanation: 'To find the \\(y\\)-intercept of a function, substitute \\(x = 0\\) into the equation. This is because the \\(y\\)-axis is where \\(x\\) is exactly zero.',
      workingOut: '\\(x = 0\\)',
      graphData: null
    },
    {
      explanation: `Substitute \\(x = 0\\) into \\(${eq}\\).`,
      workingOut: eval_steps[0],
      graphData: null
    },
    {
      explanation: 'Calculate the result carefully.',
      workingOut: eval_steps.slice(1).join('\n'),
      graphData: null
    },
    {
      explanation: `So, the \\(y\\)-intercept is \\(${y_int}\\) (or the point \\((0, ${y_int})\\)). Here is the graph showing where the parabola crosses the \\(y\\)-axis:`,
      workingOut: '',
      graphData: graphData
    }
  ];

  const createGraph = (eq_func, y_int, eq_text) => {
    let y_min, y_max;
    if (y_int > 0) {
      y_min = -Math.max(5, y_int * 0.2);
      y_max = y_int + Math.max(5, y_int * 0.3);
    } else {
      y_max = Math.max(5, Math.abs(y_int) * 0.2);
      y_min = y_int - Math.max(5, Math.abs(y_int) * 0.3);
    }
    
    // Some logic to make sure origin is visible
    if (y_min > -2) y_min = -2;
    if (y_max < 2) y_max = 2;

    const x_min = -10, x_max = 10;
    
    return {
      jsxGraph: {
        width: 360, height: 320,
        boundingbox: [x_min, y_max, x_max, y_min],
        script: `board.suspendUpdate();
board.create('arrow',[[${x_min},0],[${x_max},0]],{strokeColor:'#94a3b8',strokeWidth:1.5});
board.create('arrow',[[0,${y_min}],[0,${y_max}]],{strokeColor:'#94a3b8',strokeWidth:1.5});
board.create('functiongraph',[${eq_func},${x_min},${x_max}],{strokeColor:'#6366f1',strokeWidth:2.5});
board.create('point',[0,${y_int}],{name:'y-intercept (0, ${y_int})',size:4,color:'#dc2626',label:{autoPosition:false,offset:[10,0]}});
board.create('text',[2,${y_max - (y_max-y_min)*0.1},'${eq_text}'],{fontSize:12,color:'#4f46e5'});
board.unsuspendUpdate();`
      }
    };
  };

  const updates = [
    {
      id: 'y10-7a-q2b',
      opts: [
        { text: '\\(y = -3\\)', imageUrl: '' },
        { text: '\\(y = 10\\)', imageUrl: '' },
        { text: '\\(y = 46\\)', imageUrl: '' }, // Correct -> 2
        { text: '\\(y = -46\\)', imageUrl: '' }
      ],
      answer: '2',
      steps: getSteps(
        'y = (x - 7)^2 - 3',
        46,
        [
          '\\(y = (0 - 7)^2 - 3\\)',
          '\\(y = (-7)^2 - 3\\)',
          '\\(y = 49 - 3\\)',
          '\\(y = 46\\)'
        ],
        createGraph('function(x){return (x-7)*(x-7)-3;}', 46, 'y = (x-7)² - 3')
      )
    },
    {
      id: 'y10-7a-q2c',
      opts: [
        { text: '\\(y = 4\\)', imageUrl: '' },
        { text: '\\(y = -3\\)', imageUrl: '' },
        { text: '\\(y = 6\\)', imageUrl: '' },
        { text: '\\(y = 5\\)', imageUrl: '' } // Correct -> 3
      ],
      answer: '3',
      steps: getSteps(
        'y = (x + 1)^2 + 4',
        5,
        [
          '\\(y = (0 + 1)^2 + 4\\)',
          '\\(y = (1)^2 + 4\\)',
          '\\(y = 1 + 4\\)',
          '\\(y = 5\\)'
        ],
        createGraph('function(x){return (x+1)*(x+1)+4;}', 5, 'y = (x+1)² + 4')
      )
    },
    {
      id: 'y10-7a-q2d',
      opts: [
        { text: '\\(y = 9\\)', imageUrl: '' },
        { text: '\\(y = -9\\)', imageUrl: '' }, // Correct -> 1
        { text: '\\(y = 3\\)', imageUrl: '' },
        { text: '\\(y = -3\\)', imageUrl: '' }
      ],
      answer: '1',
      steps: getSteps(
        'y = -(x - 3)^2',
        -9,
        [
          '\\(y = -(0 - 3)^2\\)',
          '\\(y = -(-3)^2\\)',
          '\\(y = -(9)\\)',
          '\\(y = -9\\)'
        ],
        createGraph('function(x){return -(x-3)*(x-3);}', -9, 'y = -(x-3)²')
      )
    },
    {
      id: 'y10-7a-q2e',
      opts: [
        { text: '\\(y = 0\\)', imageUrl: '' },
        { text: '\\(y = -4\\)', imageUrl: '' },
        { text: '\\(y = -8\\)', imageUrl: '' }, // Correct -> 2
        { text: '\\(y = 8\\)', imageUrl: '' }
      ],
      answer: '2',
      steps: getSteps(
        'y = -(x + 2)^2 - 4',
        -8,
        [
          '\\(y = -(0 + 2)^2 - 4\\)',
          '\\(y = -(2)^2 - 4\\)',
          '\\(y = -4 - 4\\)',
          '\\(y = -8\\)'
        ],
        createGraph('function(x){return -(x+2)*(x+2)-4;}', -8, 'y = -(x+2)² - 4')
      )
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

  // Update parent subQuestions
  const pRef = db.collection('questions').doc('y10-7a-q2');
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

  console.log("Updated q2b, q2c, q2d, q2e");
  process.exit(0);
}

run().catch(console.error);
