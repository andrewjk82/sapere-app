const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const createTranslationGraph = (baseEqStr, baseEqFunc, translatedEqFunc, moveX, moveY, labelX, labelY, opensUp = true) => {
    let y_max = opensUp ? Math.max(moveY + 6, 8) : Math.max(moveY + 2, 2);
    let y_min = opensUp ? Math.min(moveY - 2, -2) : Math.min(moveY - 6, -8);
    let x_min = Math.min(-3, moveX - 4);
    let x_max = Math.max(3, moveX + 4);

    let scriptLines = [
      `board.suspendUpdate();`,
      `board.create('arrow',[[${x_min},0],[${x_max},0]],{strokeColor:'#94a3b8',strokeWidth:1.5});`,
      `board.create('arrow',[[0,${y_min}],[0,${y_max}]],{strokeColor:'#94a3b8',strokeWidth:1.5});`,
      // Base parabola (dashed/lighter)
      `board.create('functiongraph',[${baseEqFunc},${x_min},${x_max}],{strokeColor:'#94a3b8',strokeWidth:1.5,dash:2});`,
      // Translated parabola (solid)
      `board.create('functiongraph',[${translatedEqFunc},${x_min},${x_max}],{strokeColor:'#6366f1',strokeWidth:2.5});`
    ];

    if (moveX !== 0 && moveY !== 0) {
      scriptLines.push(`board.create('arrow',[[0,0],[${moveX},0]],{strokeColor:'#f59e0b',strokeWidth:2});`);
      scriptLines.push(`board.create('arrow',[[${moveX},0],[${moveX},${moveY}]],{strokeColor:'#f59e0b',strokeWidth:2});`);
      scriptLines.push(`board.create('text',[${moveX/2},-1,'${labelX}'],{fontSize:12,color:'#d97706'});`);
      scriptLines.push(`board.create('text',[${moveX+0.5},${moveY/2},'${labelY}'],{fontSize:12,color:'#d97706'});`);
    } else if (moveX !== 0) {
      scriptLines.push(`board.create('arrow',[[0,0],[${moveX},0]],{strokeColor:'#f59e0b',strokeWidth:2});`);
      scriptLines.push(`board.create('text',[${moveX/2},-1,'${labelX}'],{fontSize:12,color:'#d97706'});`);
    } else if (moveY !== 0) {
      scriptLines.push(`board.create('arrow',[[0,0],[0,${moveY}]],{strokeColor:'#f59e0b',strokeWidth:2});`);
      scriptLines.push(`board.create('text',[0.5,${moveY/2},'${labelY}'],{fontSize:12,color:'#d97706'});`);
    }

    scriptLines.push(`board.create('point',[0,0],{name:'(0,0)',size:3,color:'#94a3b8',label:{autoPosition:true}});`);
    scriptLines.push(`board.create('point',[${moveX},${moveY}],{name:'Vertex',size:3,color:'#dc2626',label:{autoPosition:true}});`);
    scriptLines.push(`board.unsuspendUpdate();`);

    return {
      jsxGraph: {
        width: 360, height: 320,
        boundingbox: [x_min, y_max, x_max, y_min],
        script: scriptLines.join('\n')
      }
    };
  };

  const getDocAndModify = async (id, graphData) => {
    const docRef = db.collection('questions').doc(id);
    const snap = await docRef.get();
    if (!snap.exists) return;
    const data = snap.data();
    if (data.solutionSteps && data.solutionSteps.length > 0) {
      const steps = [...data.solutionSteps];
      // Attach graph to the last step
      steps[steps.length - 1].graphData = graphData;
      steps[steps.length - 1].explanation += ' Here is a visual representation of the translation from the basic parabola (dashed line) to the new parabola (solid line).';
      
      await docRef.update({
        solutionSteps: steps,
        updatedAt: FieldValue.serverTimestamp()
      });
      return steps;
    }
  };

  // Maps for the graphs
  const modifications = [
    { id: 'y10-7a-q5a', graph: createTranslationGraph('y=-x^2', 'function(x){return -x*x;}', 'function(x){return -(x-3)*(x-3);}', 3, 0, '3 units right', '', false) },
    { id: 'y10-7a-q5b', graph: createTranslationGraph('y=-x^2', 'function(x){return -x*x;}', 'function(x){return -(x+4)*(x+4);}', -4, 0, 'b units left', '', false) },
    { id: 'y10-7a-q5c', graph: createTranslationGraph('y=-x^2', 'function(x){return -x*x;}', 'function(x){return -x*x-6;}', 0, -6, '', '6 units down', false) },
    { id: 'y10-7a-q5d', graph: createTranslationGraph('y=-x^2', 'function(x){return -x*x;}', 'function(x){return -x*x+5;}', 0, 5, '', 'c units up', false) },
    
    { id: 'y10-7a-q6a', graph: createTranslationGraph('y=x^2', 'function(x){return x*x;}', 'function(x){return (x+4)*(x+4)+3;}', -4, 3, '4 units left', '3 units up', true) },
    { id: 'y10-7a-q6b', graph: createTranslationGraph('y=x^2', 'function(x){return x*x;}', 'function(x){return (x-6)*(x-6)-5;}', 6, -5, '6 units right', '5 units down', true) },
    { id: 'y10-7a-q6c', graph: createTranslationGraph('y=x^2', 'function(x){return x*x;}', 'function(x){return (x-4)*(x-4)+3;}', 4, 3, 'a units right', 'b units up', true) },
    { id: 'y10-7a-q6d', graph: createTranslationGraph('y=x^2', 'function(x){return x*x;}', 'function(x){return (x+4)*(x+4)-3;}', -4, -3, 'd units left', 'c units down', true) }
  ];

  const updatedStepsMap = {};

  for (const m of modifications) {
    const steps = await getDocAndModify(m.id, m.graph);
    if (steps) updatedStepsMap[m.id] = steps;
  }

  // Update parents
  for (const pId of ['y10-7a-q5', 'y10-7a-q6']) {
    const pRef = db.collection('questions').doc(pId);
    const pSnap = await pRef.get();
    if (pSnap.exists && pSnap.data().subQuestions) {
      const newSubQs = pSnap.data().subQuestions.map(sq => {
        if (updatedStepsMap[sq.id]) {
          return {
            ...sq,
            solutionSteps: updatedStepsMap[sq.id]
          };
        }
        return sq;
      });
      await pRef.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
    }
  }

  console.log("Added translation graphs to q5 and q6 solutions");
  process.exit(0);
}

run().catch(console.error);
