const fs = require('fs');

async function run() {
  const seedPath = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear9Ch11HQuestions.js';
  let content = fs.readFileSync(seedPath, 'utf8');
  
  // Find where the array starts
  const prefix = 'export const Y9_CH11H_QUESTIONS = ';
  if (!content.startsWith(prefix)) {
    console.error('File does not start with expected prefix.');
    process.exit(1);
  }
  
  const arrayString = content.slice(prefix.length).trim().replace(/;$/, '');
  let questions = JSON.parse(arrayString);
  
  const badIds = ['y9-11h-q10a', 'y9-11h-q10b', 'y9-11h-q10c', 'y9-11h-q10d'];
  
  const correctQ10 = {
    id: "y9-11h-q10",
    topicId: "y9-11h",
    c: "11H",
    t: "The circle",
    type: "teacher_review",
    difficulty: "medium",
    timeLimit: 120,
    question: "The circle shown below has equation \\(x^2 + y^2 = 100\\). A square \\(ABCD\\) is inscribed in the circle with vertices \\(A(8, -6)\\), \\(B(6, 8)\\), \\(C(-8, 6)\\), and \\(D(-6, -8)\\).",
    graphData: {
      jsxGraph: {
        width: 340,
        height: 340,
        boundingbox: [-11.5, 11.5, 11.5, -11.5],
        script: "board.suspendUpdate(); board.create('arrow', [[-11.5,0],[11.5,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-11.5],[0,11.5]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [10.12, -4.025, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 10.35, 'y'], {fontSize:13, color:'#64748b'});  board.create('curve', [   function(t) { return 10 * Math.cos(t); },   function(t) { return 10 * Math.sin(t); },   0, 2 * Math.PI ], {   strokeColor: '#6366f1',   strokeWidth: 2.5,   fillColor: '#6366f1',   fillOpacity: 0.06 });  board.create('point', [0,0], {name:'O', size:3, color:'#64748b', fixed:true}); board.create('text', [3.5, 4.5, 'x² + y² = 100'], {fontSize:12, color:'#4f46e5', fontWeight:'bold'});  var pA = board.create('point', [8, -6], {name:'A(8, -6)', size:3.5, color:'#1e293b', fixed:true, withLabel:true, label:{autoPosition:false, offset:[10, -15]}}); var pB = board.create('point', [6, 8], {name:'B(6, 8)', size:3.5, color:'#1e293b', fixed:true, withLabel:true, label:{autoPosition:false, offset:[10, 10]}}); var pC = board.create('point', [-8, 6], {name:'C(-8, 6)', size:3.5, color:'#1e293b', fixed:true, withLabel:true, label:{autoPosition:false, offset:[-65, 10]}}); var pD = board.create('point', [-6, -8], {name:'D(-6, -8)', size:3.5, color:'#1e293b', fixed:true, withLabel:true, label:{autoPosition:false, offset:[-70, -10]}});  board.create('line', [pA, pB], {straightFirst: false, straightLast: false, strokeColor: '#1e293b', strokeWidth: 2}); board.create('line', [pB, pC], {straightFirst: false, straightLast: false, strokeColor: '#1e293b', strokeWidth: 2}); board.create('line', [pC, pD], {straightFirst: false, straightLast: false, strokeColor: '#1e293b', strokeWidth: 2}); board.create('line', [pD, pA], {straightFirst: false, straightLast: false, strokeColor: '#1e293b', strokeWidth: 2});  board.unsuspendUpdate();"
      }
    },
    subQuestions: [
      {
        id: "y9-11h-q10a",
        type: "short_answer",
        difficulty: "easy",
        timeLimit: 60,
        question: "Find the gradient of \\(AB\\).",
        a: "-7",
        solutionSteps: [
          { explanation: "Use the gradient formula \\(m = \\frac{y_2 - y_1}{x_2 - x_1}\\) with points \\(A(8, -6)\\) and \\(B(6, 8)\\).", workingOut: "m = \\frac{8 - (-6)}{6 - 8}", graphData: null },
          { explanation: "Simplify the fraction.", workingOut: "m = \\frac{14}{-2} = -7", graphData: null }
        ]
      },
      {
        id: "y9-11h-q10b",
        type: "short_answer",
        difficulty: "medium",
        timeLimit: 90,
        question: "Find the equation of the line \\(AB\\).",
        a: "y = -7x + 50",
        solutionSteps: [
          { explanation: "Use the point-gradient formula \\(y - y_1 = m(x - x_1)\\) with point \\(B(6, 8)\\) and gradient \\(m = -7\\).", workingOut: "y - 8 = -7(x - 6)", graphData: null },
          { explanation: "Expand and simplify into the form \\(y = mx + c\\).", workingOut: "y - 8 = -7x + 42 \\\\ y = -7x + 50", graphData: null }
        ]
      },
      {
        id: "y9-11h-q10c",
        type: "short_answer",
        difficulty: "medium",
        timeLimit: 90,
        question: "Find the exact distance \\(AB\\).",
        a: "10\\sqrt{2}",
        solutionSteps: [
          { explanation: "Use the distance formula \\(d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}\\) for points \\(A(8, -6)\\) and \\(B(6, 8)\\).", workingOut: "AB = \\sqrt{(6 - 8)^2 + (8 - (-6))^2}", graphData: null },
          { explanation: "Calculate the squares.", workingOut: "AB = \\sqrt{(-2)^2 + 14^2} = \\sqrt{4 + 196} = \\sqrt{200}", graphData: null },
          { explanation: "Simplify the surd.", workingOut: "\\sqrt{200} = \\sqrt{100 \\times 2} = 10\\sqrt{2}", graphData: null }
        ]
      },
      {
        id: "y9-11h-q10d",
        type: "short_answer",
        difficulty: "easy",
        timeLimit: 60,
        question: "Find the area of the square \\(ABCD\\).",
        a: "200",
        solutionSteps: [
          { explanation: "The area of a square is the side length squared. The side length is \\(AB\\).", workingOut: "\\text{Area} = (AB)^2 = (\\sqrt{200})^2", graphData: null },
          { explanation: "Calculate the final area.", workingOut: "\\text{Area} = 200", graphData: null }
        ]
      }
    ]
  };

  const filteredQuestions = questions.filter(q => !badIds.includes(q.id));
  
  const q11Index = filteredQuestions.findIndex(q => q.id === 'y9-11h-q11a' || q.id === 'y9-11h-q11');
  if (q11Index !== -1) {
    filteredQuestions.splice(q11Index, 0, correctQ10);
  } else {
    filteredQuestions.push(correctQ10);
  }

  const output = prefix + JSON.stringify(filteredQuestions, null, 2) + ';\n';
  fs.writeFileSync(seedPath, output);
  console.log('Successfully updated seedYear9Ch11HQuestions.js locally.');

  process.exit(0);
}

run().catch(console.error);
