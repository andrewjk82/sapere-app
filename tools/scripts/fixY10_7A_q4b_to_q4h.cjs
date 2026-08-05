const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const getSteps = (eq, h, k, y_int, eval_steps, graphData) => {
    let explanation3 = `The \\(y\\)-intercept is \\(${y_int}\\), so the graph crosses the \\(y\\)-axis at \\((0,\\, ${y_int})\\).`;
    if (h === 0 && k === y_int) {
      explanation3 += ' Note that in this case, the vertex and the \\(y\\)-intercept are the same point.';
    }

    return [
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
        explanation: explanation3,
        workingOut: '',
        graphData: null
      },
      {
        explanation: `Finally, sketch the graph. Plot the vertex \\((${h},\\, ${k})\\)${h === 0 && k === y_int ? '' : ` and the \\(y\\)-intercept \\((0,\\, ${y_int})\\)`}. The parabola opens downwards because the number in front of the squared term is negative.`,
        workingOut: '',
        graphData: graphData
      }
    ];
  };

  const createGraph = (eq_func, h, k, y_int, eq_text) => {
    // All these open downwards.
    let y_max = Math.max(k + 2, 2);
    let y_min = Math.min(y_int - 5, -10);
    
    // Ensure y-axis is somewhat central/visible if x is far
    let x_min = Math.min(-2, h - Math.abs(h)*0.5 - 2);
    let x_max = Math.max(2, h + Math.abs(h)*0.5 + 2);
    if (h > 0 && x_min > -2) x_min = -2;
    if (h < 0 && x_max < 2) x_max = 2;
    
    // For very steep ones (like q4f where y-int is -36), scale the x_min, x_max slightly to make it look decent
    if (y_int < -20) {
       y_min = y_int - 5;
       x_min = Math.min(-4, h - 5);
       x_max = Math.max(4, h + 5);
    }

    let scriptLines = [
      `board.suspendUpdate();`,
      `board.create('arrow',[[${x_min},0],[${x_max},0]],{strokeColor:'#94a3b8',strokeWidth:1.5});`,
      `board.create('arrow',[[0,${y_min}],[0,${y_max}]],{strokeColor:'#94a3b8',strokeWidth:1.5});`,
      `board.create('functiongraph',[${eq_func},${x_min},${x_max}],{strokeColor:'#6366f1',strokeWidth:2.5});`
    ];

    if (h === 0 && k === y_int) {
      scriptLines.push(`board.create('point',[0,${k}],{name:'Vertex & y-int (0, ${k})',size:4,color:'#dc2626',label:{autoPosition:false,offset:[10,0]}});`);
    } else {
      scriptLines.push(`board.create('point',[${h},${k}],{name:'Vertex (${h}, ${k})',size:4,color:'#dc2626',label:{autoPosition:true}});`);
      scriptLines.push(`board.create('point',[0,${y_int}],{name:'y-int (0, ${y_int})',size:4,color:'#f97316',label:{autoPosition:false,offset:[10,0]}});`);
    }
    
    // Position text below the vertex roughly
    scriptLines.push(`board.create('text',[${h+1},${k-4},'${eq_text}'],{fontSize:12,color:'#4f46e5'});`);
    scriptLines.push(`board.unsuspendUpdate();`);

    return {
      jsxGraph: {
        width: 360, height: 320,
        boundingbox: [x_min, y_max, x_max, y_min],
        script: scriptLines.join('\n')
      }
    };
  };

  const updates = [
    {
      id: 'y10-7a-q4b',
      steps: getSteps('y = -x^2 + 7', 0, 7, 7, ['\\(y = -(0)^2 + 7\\)', '\\(y = 7\\)'], createGraph('function(x){return -x*x+7;}', 0, 7, 7, 'y = -x² + 7'))
    },
    {
      id: 'y10-7a-q4c',
      steps: getSteps('y = -(x - 3)^2 + 5', 3, 5, -4, ['\\(y = -(0 - 3)^2 + 5\\)', '\\(y = -(-3)^2 + 5\\)', '\\(y = -9 + 5 = -4\\)'], createGraph('function(x){return -(x-3)*(x-3)+5;}', 3, 5, -4, 'y = -(x-3)² + 5'))
    },
    {
      id: 'y10-7a-q4d',
      steps: getSteps('y = -(x - 3)^2 - 7', 3, -7, -16, ['\\(y = -(0 - 3)^2 - 7\\)', '\\(y = -(-3)^2 - 7\\)', '\\(y = -9 - 7 = -16\\)'], createGraph('function(x){return -(x-3)*(x-3)-7;}', 3, -7, -16, 'y = -(x-3)² - 7'))
    },
    {
      id: 'y10-7a-q4e',
      steps: getSteps('y = -(x + 4)^2', -4, 0, -16, ['\\(y = -(0 + 4)^2\\)', '\\(y = -(4)^2 = -16\\)'], createGraph('function(x){return -(x+4)*(x+4);}', -4, 0, -16, 'y = -(x+4)²'))
    },
    {
      id: 'y10-7a-q4f',
      steps: getSteps('y = -(x - 6)^2', 6, 0, -36, ['\\(y = -(0 - 6)^2\\)', '\\(y = -(-6)^2 = -36\\)'], createGraph('function(x){return -(x-6)*(x-6);}', 6, 0, -36, 'y = -(x-6)²'))
    },
    {
      id: 'y10-7a-q4g',
      steps: getSteps('y = -(x + 4)^2 - 3', -4, -3, -19, ['\\(y = -(0 + 4)^2 - 3\\)', '\\(y = -(4)^2 - 3\\)', '\\(y = -16 - 3 = -19\\)'], createGraph('function(x){return -(x+4)*(x+4)-3;}', -4, -3, -19, 'y = -(x+4)² - 3'))
    },
    {
      id: 'y10-7a-q4h',
      steps: getSteps('y = -(x + 3)^2 + 11', -3, 11, 2, ['\\(y = -(0 + 3)^2 + 11\\)', '\\(y = -(3)^2 + 11\\)', '\\(y = -9 + 11 = 2\\)'], createGraph('function(x){return -(x+3)*(x+3)+11;}', -3, 11, 2, 'y = -(x+3)² + 11'))
    }
  ];

  for (const u of updates) {
    await db.collection('questions').doc(u.id).update({
      solutionSteps: u.steps,
      requiresManualGrading: FieldValue.delete(),
      updatedAt: FieldValue.serverTimestamp()
    });
  }

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

  console.log("Updated q4b-q4h");
  process.exit(0);
}

run().catch(console.error);
