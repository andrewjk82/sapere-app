const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // ================= q1a =================
  // y = (x-4)²  →  vertex form y = (x-h)² + k, h=4, k=0
  // Axis: x = 4, Vertex: (4, 0)
  // Correct → B (index 1)

  const opts1a = [
    { text: 'Axis: \\(x = -4\\), Vertex: \\((-4,\\; 0)\\)', imageUrl: '' },
    { text: 'Axis: \\(x = 4\\), Vertex: \\((4,\\; 0)\\)', imageUrl: '' },   // Correct → B
    { text: 'Axis: \\(x = 4\\), Vertex: \\((0,\\; 4)\\)', imageUrl: '' },
    { text: 'Axis: \\(x = 0\\), Vertex: \\((4,\\; 4)\\)', imageUrl: '' }
  ];

  const graph1a = {
    jsxGraph: {
      width: 360, height: 300,
      boundingbox: [-2, 10, 10, -2],
      script: `board.suspendUpdate();
board.create('arrow',[[-2,0],[10,0]],{strokeColor:'#94a3b8',strokeWidth:1.5});
board.create('arrow',[[0,-2],[0,10]],{strokeColor:'#94a3b8',strokeWidth:1.5});
board.create('text',[9.3,-0.6,'x'],{fontSize:13,color:'#64748b'});
board.create('text',[0.2,9.3,'y'],{fontSize:13,color:'#64748b'});
board.create('functiongraph',[function(x){return (x-4)*(x-4);},0,8],{strokeColor:'#6366f1',strokeWidth:2.5});
board.create('line',[[4,-2],[4,10]],{strokeColor:'#dc2626',strokeWidth:1.5,dash:2,straightFirst:false,straightLast:false});
board.create('text',[4.15,8.5,'x = 4'],{fontSize:12,color:'#dc2626'});
board.create('point',[4,0],{name:'Vertex (4, 0)',size:4,color:'#dc2626',label:{autoPosition:false,offset:[8,8]}});
board.create('text',[5.5,3,'y = (x − 4)²'],{fontSize:12,color:'#4f46e5'});
board.unsuspendUpdate();`
    }
  };

  const steps1a = [
    {
      explanation: 'Recognise the form of the equation. This parabola is written in **vertex form**:\n\\(y = (x - h)^2 + k\\)\nwhere \\((h, k)\\) is the vertex and \\(x = h\\) is the axis of symmetry.',
      workingOut: '',
      graphData: null
    },
    {
      explanation: 'Compare \\(y = (x - 4)^2\\) with the vertex form \\(y = (x - h)^2 + k\\).\nMatch each part carefully — watch the sign!',
      workingOut: [
        '\\(y = (x - \\mathbf{4})^2 + \\mathbf{0}\\)',
        '\\(h = 4, \\quad k = 0\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Read off the axis of symmetry and the vertex directly from \\(h\\) and \\(k\\).',
      workingOut: [
        '\\(\\text{Axis of symmetry: } x = h = 4\\)',
        '\\(\\text{Vertex: } (h,\\, k) = (4,\\, 0)\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Here is the graph confirming the vertex at \\((4, 0)\\) and the axis of symmetry \\(x = 4\\) (red dashed line).',
      workingOut: '',
      graphData: graph1a
    }
  ];

  // ================= q1b =================
  // y = x² - 4  →  y = (x-0)² + (-4), h=0, k=-4
  // Axis: x = 0, Vertex: (0, -4)
  // Correct → C (index 2)

  const opts1b = [
    { text: 'Axis: \\(x = 0\\), Vertex: \\((0,\\; 4)\\)', imageUrl: '' },
    { text: 'Axis: \\(x = -4\\), Vertex: \\((-4,\\; 0)\\)', imageUrl: '' },
    { text: 'Axis: \\(x = 0\\), Vertex: \\((0,\\; -4)\\)', imageUrl: '' },  // Correct → C
    { text: 'Axis: \\(x = 4\\), Vertex: \\((4,\\; -4)\\)', imageUrl: '' }
  ];

  const graph1b = {
    jsxGraph: {
      width: 360, height: 300,
      boundingbox: [-5, 8, 5, -6],
      script: `board.suspendUpdate();
board.create('arrow',[[-5,0],[5,0]],{strokeColor:'#94a3b8',strokeWidth:1.5});
board.create('arrow',[[0,-6],[0,8]],{strokeColor:'#94a3b8',strokeWidth:1.5});
board.create('text',[4.3,-0.6,'x'],{fontSize:13,color:'#64748b'});
board.create('text',[0.2,7.3,'y'],{fontSize:13,color:'#64748b'});
board.create('functiongraph',[function(x){return x*x-4;},-3.5,3.5],{strokeColor:'#6366f1',strokeWidth:2.5});
board.create('line',[[0,-6],[0,8]],{strokeColor:'#dc2626',strokeWidth:1.5,dash:2,straightFirst:false,straightLast:false});
board.create('text',[0.2,6.5,'x = 0'],{fontSize:12,color:'#dc2626'});
board.create('point',[0,-4],{name:'Vertex (0, −4)',size:4,color:'#dc2626',label:{autoPosition:false,offset:[8,-12]}});
board.create('text',[1.5,4,'y = x² − 4'],{fontSize:12,color:'#4f46e5'});
board.unsuspendUpdate();`
    }
  };

  const steps1b = [
    {
      explanation: 'Recognise the form. The equation \\(y = x^2 - 4\\) is a vertical shift of the basic parabola \\(y = x^2\\). We can rewrite it in **vertex form** to read off the vertex and axis of symmetry:\n\\(y = (x - h)^2 + k\\)',
      workingOut: '',
      graphData: null
    },
    {
      explanation: 'Rewrite \\(y = x^2 - 4\\) in vertex form by identifying \\(h\\) and \\(k\\).',
      workingOut: [
        '\\(y = x^2 - 4\\)',
        '\\(y = (x - \\mathbf{0})^2 + (\\mathbf{-4})\\)',
        '\\(h = 0, \\quad k = -4\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Read off the axis of symmetry and the vertex from \\(h\\) and \\(k\\).\nNotice that when \\(h = 0\\), the axis of symmetry is the \\(y\\)-axis itself.',
      workingOut: [
        '\\(\\text{Axis of symmetry: } x = h = 0\\)',
        '\\(\\text{Vertex: } (h,\\, k) = (0,\\, -4)\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Here is the graph. The parabola is the same shape as \\(y = x^2\\) but shifted **4 units downward**, placing the vertex at \\((0, -4)\\). The axis of symmetry is the \\(y\\)-axis (\\(x = 0\\), shown in red).',
      workingOut: '',
      graphData: graph1b
    }
  ];

  const updates = [
    { id: 'y10-7a-q1a', opts: opts1a, answer: '1', steps: steps1a },
    { id: 'y10-7a-q1b', opts: opts1b, answer: '2', steps: steps1b }
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
  const pRef = db.collection('questions').doc('y10-7a-q1');
  const pSnap = await pRef.get();
  if (pSnap.exists) {
    const pData = pSnap.data();
    if (pData.subQuestions) {
      const newSubQs = pData.subQuestions.map(sq => {
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
  }

  console.log("Updated y10-7a-q1a, q1b with correct options and detailed steps");
  process.exit(0);
}

run().catch(console.error);
