const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const getSteps = (eq, h, k, y_int, eval_steps, graphData, isNegativeA = false) => [
    {
      explanation: 'First, find the vertex of the parabola. The equation is in vertex form: \\(y = a(x - h)^2 + k\\), where \\((h, k)\\) is the vertex.',
      workingOut: `\\(\\text{Vertex: } (${h},\\, ${k})\\)`,
      graphData: null
    },
    {
      explanation: 'Next, find the \\(y\\)-intercept by substituting \\(x = 0\\) into the equation.',
      workingOut: eval_steps.join('\n'),
      graphData: null
    },
    {
      explanation: `The \\(y\\)-intercept is \\(${y_int}\\), so the graph crosses the \\(y\\)-axis at \\((0,\\, ${y_int})\\).`,
      workingOut: '',
      graphData: null
    },
    {
      explanation: `Finally, sketch the graph. Plot the vertex \\((${h},\\, ${k})\\) and the \\(y\\)-intercept \\((0,\\, ${y_int})\\). The parabola opens ${isNegativeA ? 'downwards' : 'upwards'} because the number in front of the squared term is ${isNegativeA ? 'negative' : 'positive'}.`,
      workingOut: '',
      graphData: graphData
    }
  ];

  const createGraph = (eq_func, h, k, y_int, eq_text, isNegativeA = false) => {
    // Determine bounding box based on vertex and y-intercept
    let y_min, y_max, x_min, x_max;
    if (isNegativeA) {
      y_max = Math.max(k + 2, 2);
      y_min = Math.min(y_int - 5, -10);
    } else {
      y_min = Math.min(k - 2, -2);
      y_max = Math.max(y_int + 5, 10);
    }
    
    // Make sure y-axis is visible
    x_min = Math.min(-2, h - Math.abs(h)*0.5 - 2);
    x_max = Math.max(2, h + Math.abs(h)*0.5 + 2);
    if(h > 0 && x_min > -2) x_min = -2;
    if(h < 0 && x_max < 2) x_max = 2;

    return {
      jsxGraph: {
        width: 360, height: 320,
        boundingbox: [x_min, y_max, x_max, y_min],
        script: `board.suspendUpdate();
board.create('arrow',[[${x_min},0],[${x_max},0]],{strokeColor:'#94a3b8',strokeWidth:1.5});
board.create('arrow',[[0,${y_min}],[0,${y_max}]],{strokeColor:'#94a3b8',strokeWidth:1.5});
board.create('functiongraph',[${eq_func},${x_min},${x_max}],{strokeColor:'#6366f1',strokeWidth:2.5});
board.create('point',[${h},${k}],{name:'Vertex (${h}, ${k})',size:4,color:'#dc2626',label:{autoPosition:true}});
board.create('point',[0,${y_int}],{name:'y-int (0, ${y_int})',size:4,color:'#f97316',label:{autoPosition:true}});
board.create('text',[${h+1},${k+(isNegativeA?-3:3)},'${eq_text}'],{fontSize:12,color:'#4f46e5'});
board.unsuspendUpdate();`
      }
    };
  };

  const updates = [
    {
      id: 'y10-7a-q3a',
      steps: getSteps('y = (x - 5)^2', 5, 0, 25, ['\\(y = (0 - 5)^2\\)', '\\(y = (-5)^2 = 25\\)'], createGraph('function(x){return (x-5)*(x-5);}', 5, 0, 25, 'y = (x-5)²'))
    },
    {
      id: 'y10-7a-q3b',
      steps: getSteps('y = (x - 1)^2 - 3', 1, -3, -2, ['\\(y = (0 - 1)^2 - 3\\)', '\\(y = 1 - 3 = -2\\)'], createGraph('function(x){return (x-1)*(x-1)-3;}', 1, -3, -2, 'y = (x-1)² - 3'))
    },
    {
      id: 'y10-7a-q3c',
      steps: getSteps('y = (x + 2)^2 + 3', -2, 3, 7, ['\\(y = (0 + 2)^2 + 3\\)', '\\(y = 4 + 3 = 7\\)'], createGraph('function(x){return (x+2)*(x+2)+3;}', -2, 3, 7, 'y = (x+2)² + 3'))
    },
    {
      id: 'y10-7a-q3d',
      steps: getSteps('y = (x - 4)^2 - 3', 4, -3, 13, ['\\(y = (0 - 4)^2 - 3\\)', '\\(y = 16 - 3 = 13\\)'], createGraph('function(x){return (x-4)*(x-4)-3;}', 4, -3, 13, 'y = (x-4)² - 3'))
    },
    {
      id: 'y10-7a-q3e',
      steps: getSteps('y = (x - 1)^2 + 6', 1, 6, 7, ['\\(y = (0 - 1)^2 + 6\\)', '\\(y = 1 + 6 = 7\\)'], createGraph('function(x){return (x-1)*(x-1)+6;}', 1, 6, 7, 'y = (x-1)² + 6'))
    },
    {
      id: 'y10-7a-q3f',
      steps: getSteps('y = (x - 4)^2 - 4', 4, -4, 12, ['\\(y = (0 - 4)^2 - 4\\)', '\\(y = 16 - 4 = 12\\)'], createGraph('function(x){return (x-4)*(x-4)-4;}', 4, -4, 12, 'y = (x-4)² - 4'))
    },
    {
      id: 'y10-7a-q4a',
      steps: getSteps('y = -x^2 - 7', 0, -7, -7, ['\\(y = -(0)^2 - 7\\)', '\\(y = -7\\)'], createGraph('function(x){return -x*x-7;}', 0, -7, -7, 'y = -x² - 7', true), true)
    }
  ];

  for (const u of updates) {
    await db.collection('questions').doc(u.id).update({
      solutionSteps: u.steps,
      requiresManualGrading: FieldValue.delete(),
      updatedAt: FieldValue.serverTimestamp()
    });
  }

  // Update parent subQuestions for q3
  const pRef3 = db.collection('questions').doc('y10-7a-q3');
  const pSnap3 = await pRef3.get();
  if (pSnap3.exists && pSnap3.data().subQuestions) {
    const newSubQs = pSnap3.data().subQuestions.map(sq => {
      const u = updates.find(x => x.id === sq.id);
      if (u) {
        return {
          ...sq,
          solutionSteps: u.steps,
          requiresManualGrading: FieldValue.delete()
        };
      }
      return sq;
    });
    await pRef3.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
  }

  // Update parent subQuestions for q4
  const pRef4 = db.collection('questions').doc('y10-7a-q4');
  const pSnap4 = await pRef4.get();
  if (pSnap4.exists && pSnap4.data().subQuestions) {
    const newSubQs = pSnap4.data().subQuestions.map(sq => {
      const u = updates.find(x => x.id === sq.id);
      if (u) {
        return {
          ...sq,
          solutionSteps: u.steps,
          requiresManualGrading: FieldValue.delete()
        };
      }
      return sq;
    });
    await pRef4.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
  }

  console.log("Updated q3a-q3f, q4a");
  process.exit(0);
}

run().catch(console.error);
