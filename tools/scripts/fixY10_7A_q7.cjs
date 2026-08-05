const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const getHorizontalStep = (direction, units) => {
    let sign = direction === 'right' ? '-' : '+';
    let replaceStr = `(x ${sign} ${units})`;
    return {
      explanation: `A translation of **${units} units to the ${direction}** means we replace every \\(x\\) with \\(${replaceStr}\\).`,
      workingOut: '',
      graphData: null
    };
  };

  const getVerticalStep = (direction, units) => {
    let sign = direction === 'up' ? '+' : '-';
    return {
      explanation: `A translation of **${units} units ${direction}** means we append \\(${sign} ${units}\\) to the end of the entire function.`,
      workingOut: '',
      graphData: null
    };
  };

  const createTranslationGraph = (baseEqFunc, translatedEqFunc, v1x, v1y, v2x, v2y, labelX, labelY) => {
    let x_min = Math.min(v1x, v2x) - 4;
    let x_max = Math.max(v1x, v2x) + 4;
    let y_min = Math.min(v1y, v2y) - 2;
    let y_max = Math.max(v1y, v2y) + 8;
    
    // Some basic bounding checks to ensure axes are somewhat visible
    if (x_min > -2) x_min = -2;
    if (x_max < 2) x_max = 2;
    if (y_min > -2) y_min = -2;
    
    let scriptLines = [
      `board.suspendUpdate();`,
      `board.create('arrow',[[${x_min},0],[${x_max},0]],{strokeColor:'#94a3b8',strokeWidth:1.5});`,
      `board.create('arrow',[[0,${y_min}],[0,${y_max}]],{strokeColor:'#94a3b8',strokeWidth:1.5});`,
      `board.create('functiongraph',[${baseEqFunc},${x_min},${x_max}],{strokeColor:'#94a3b8',strokeWidth:1.5,dash:2});`,
      `board.create('functiongraph',[${translatedEqFunc},${x_min},${x_max}],{strokeColor:'#6366f1',strokeWidth:2.5});`
    ];

    if (v1x !== v2x && v1y !== v2y) {
      scriptLines.push(`board.create('arrow',[[${v1x},${v1y}],[${v2x},${v1y}]],{strokeColor:'#f59e0b',strokeWidth:2});`);
      scriptLines.push(`board.create('arrow',[[${v2x},${v1y}],[${v2x},${v2y}]],{strokeColor:'#f59e0b',strokeWidth:2});`);
      scriptLines.push(`board.create('text',[${(v1x+v2x)/2},${v1y - 1},'${labelX}'],{fontSize:12,color:'#d97706'});`);
      scriptLines.push(`board.create('text',[${v2x + 0.5},${(v1y+v2y)/2},'${labelY}'],{fontSize:12,color:'#d97706'});`);
    }

    scriptLines.push(`board.create('point',[${v1x},${v1y}],{name:'Original Vertex',size:3,color:'#94a3b8',label:{autoPosition:true}});`);
    scriptLines.push(`board.create('point',[${v2x},${v2y}],{name:'New Vertex',size:3,color:'#dc2626',label:{autoPosition:true}});`);
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
      id: 'y10-7a-q7a',
      opts: [
        { text: '\\(y = (x + 6)^2\\)', imageUrl: '' },
        { text: '\\(y = x^2\\)', imageUrl: '' }, // Correct -> 1
        { text: '\\(y = (x + 6)^2 - 16\\)', imageUrl: '' },
        { text: '\\(y = (x - 6)^2\\)', imageUrl: '' }
      ],
      answer: '1',
      steps: [
        { explanation: 'We start with the parabola \\(y = (x + 3)^2 - 8\\).', workingOut: '', graphData: null },
        getHorizontalStep('right', '3'),
        getVerticalStep('up', '8'),
        {
          explanation: 'Apply these transformations to the original equation:',
          workingOut: [
            '\\(y = ((x - 3) + 3)^2 - 8 + 8\\)',
            '\\(y = (x - 3 + 3)^2 + 0\\)'
          ].join('\n'),
          graphData: null
        },
        {
          explanation: 'Simplify to get the final equation:',
          workingOut: '\\(y = x^2\\)',
          graphData: createTranslationGraph('function(x){return (x+3)*(x+3)-8;}', 'function(x){return x*x;}', -3, -8, 0, 0, '3 units right', '8 units up')
        }
      ]
    },
    {
      id: 'y10-7a-q7b',
      opts: [
        { text: '\\(y = (x + 1)^2 - 5\\)', imageUrl: '' },
        { text: '\\(y = (x + 1)^2 - 11\\)', imageUrl: '' },
        { text: '\\(y = (x + 5)^2 - 5\\)', imageUrl: '' },
        { text: '\\(y = (x + 5)^2 - 11\\)', imageUrl: '' } // Correct -> 3
      ],
      answer: '3',
      steps: [
        { explanation: 'We start with the parabola \\(y = (x + 3)^2 - 8\\).', workingOut: '', graphData: null },
        getHorizontalStep('left', '2'),
        getVerticalStep('down', '3'),
        {
          explanation: 'Apply these transformations to the original equation:',
          workingOut: [
            '\\(y = ((x + 2) + 3)^2 - 8 - 3\\)',
            '\\(y = (x + 2 + 3)^2 - 11\\)'
          ].join('\n'),
          graphData: null
        },
        {
          explanation: 'Simplify to get the final equation:',
          workingOut: '\\(y = (x + 5)^2 - 11\\)',
          graphData: createTranslationGraph('function(x){return (x+3)*(x+3)-8;}', 'function(x){return (x+5)*(x+5)-11;}', -3, -8, -5, -11, '2 units left', '3 units down')
        }
      ]
    },
    {
      id: 'y10-7a-q7c',
      opts: [
        { text: '\\(y = (x + a + 3)^2 + b - 8\\)', imageUrl: '' },
        { text: '\\(y = (x - a + 3)^2 - b - 8\\)', imageUrl: '' }, // 1
        { text: '\\(y = (x - a + 3)^2 + b - 8\\)', imageUrl: '' }, // Correct -> 2
        { text: '\\(y = (x + a + 3)^2 - b - 8\\)', imageUrl: '' }
      ],
      answer: '2',
      steps: [
        { explanation: 'We start with the parabola \\(y = (x + 3)^2 - 8\\).', workingOut: '', graphData: null },
        getHorizontalStep('right', 'a'),
        getVerticalStep('up', 'b'),
        {
          explanation: 'Apply these transformations to the original equation:',
          workingOut: [
            '\\(y = ((x - a) + 3)^2 - 8 + b\\)'
          ].join('\n'),
          graphData: null
        },
        {
          explanation: 'Rearrange the terms to get the final equation:',
          workingOut: '\\(y = (x - a + 3)^2 + b - 8\\)',
          graphData: createTranslationGraph('function(x){return (x+3)*(x+3)-8;}', 'function(x){return (x-2)*(x-2)-3;}', -3, -8, 2, -3, 'a units right', 'b units up') // Dummy values a=5, b=5 for graph representation
        }
      ]
    }
  ];

  for (const u of updates) {
    await db.collection('questions').doc(u.id).update({
      type: 'multiple_choice',
      options: u.opts,
      answer: u.answer,
      solutionSteps: u.steps,
      graphData: FieldValue.delete(),
      requiresManualGrading: FieldValue.delete(),
      updatedAt: FieldValue.serverTimestamp()
    });
  }

  const pRef7 = db.collection('questions').doc('y10-7a-q7');
  const pSnap7 = await pRef7.get();
  if (pSnap7.exists && pSnap7.data().subQuestions) {
    const newSubQs = pSnap7.data().subQuestions.map(sq => {
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
    await pRef7.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
  }

  console.log("Updated q7a, q7b, q7c");
  process.exit(0);
}

run().catch(console.error);
