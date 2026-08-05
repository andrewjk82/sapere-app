const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const filePath = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear11Ch5IQuestions.js';
let content = fs.readFileSync(filePath, 'utf8');
const match = content.match(/export const Y11_CH5I_QUESTIONS = (\[[\s\S]*\]);$/m);
let questions = eval(match[1]);

let updatedQs = [];

const updates = {
  'y11a-5i-q18a': {
    type: 'multiple_choice',
    opts: [
      "Vertical dilation by a scale factor of \\(\\frac{1}{9}\\)",
      "Horizontal dilation by a scale factor of \\(\\frac{1}{3}\\)",
      "Horizontal dilation by a scale factor of \\(3\\)",
      "Vertical dilation by a scale factor of \\(\\frac{1}{3}\\)"
    ],
    a: 2,
    steps: [
      {
        explanation: "Let the first function be \\(f(x) = x^2 - 4x\\). We need to express the second function, \\(y = \\frac{1}{9}x^2 - \\frac{4}{3}x\\), in terms of \\(f(x)\\).",
        workingOut: "y = \\frac{1}{9}x^2 - \\frac{4}{3}x"
      },
      {
        explanation: "Try factoring out constants or rewriting the \\(x\\) terms to see if it matches \\(f(kx)\\) or \\(k f(x)\\). Notice that \\(\\frac{1}{9}x^2 = (\\frac{x}{3})^2\\) and \\(\\frac{4}{3}x = 4(\\frac{x}{3})\\).",
        workingOut: "y = \\left(\\frac{x}{3}\\right)^2 - 4\\left(\\frac{x}{3}\\right)"
      },
      {
        explanation: "This exactly matches the structure of \\(f(x)\\), but with every \\(x\\) replaced by \\(\\frac{x}{3}\\).",
        workingOut: "y = f\\left(\\frac{x}{3}\\right)"
      },
      {
        explanation: "Recall that a transformation of the form \\(f\\left(\\frac{x}{k}\\right)\\) represents a horizontal dilation by a scale factor of \\(k\\). A common mistake is seeing the fraction \\(\\frac{1}{3}\\) and thinking the scale factor is \\(\\frac{1}{3}\\), but horizontal scale factors are the reciprocal of the coefficient of \\(x\\).",
        workingOut: "\\text{Horizontal dilation by a scale factor of } 3."
      }
    ]
  },
  'y11a-5i-q18b': {
    type: 'multiple_choice',
    opts: [
      "Vertical dilation by a scale factor of \\(\\frac{1}{3}\\)",
      "Horizontal dilation by a scale factor of \\(\\frac{1}{3}\\)",
      "Horizontal dilation by a scale factor of \\(3\\)",
      "Vertical dilation by a scale factor of \\(3\\)"
    ],
    a: 0,
    steps: [
      {
        explanation: "Let the first function be \\(f(x) = \\frac{1}{x - 3}\\). We need to express the second function, \\(y = \\frac{1}{3x - 9}\\), in terms of \\(f(x)\\).",
        workingOut: "y = \\frac{1}{3x - 9}"
      },
      {
        explanation: "First, let's see if this is a horizontal dilation \\(f(3x)\\). If we substitute \\(3x\\) into \\(f(x)\\), we get \\(\\frac{1}{3x - 3}\\), which does NOT match our target equation. So it is not a horizontal dilation of \\(f(x)\\).",
        workingOut: "f(3x) = \\frac{1}{3x - 3} \\neq \\frac{1}{3x - 9}"
      },
      {
        explanation: "Instead, let's factor the denominator of the second equation.",
        workingOut: "y = \\frac{1}{3(x - 3)} = \\frac{1}{3} \\cdot \\frac{1}{x - 3}"
      },
      {
        explanation: "Now we can clearly see this is exactly \\(\\frac{1}{3}\\) multiplied by the original function \\(f(x)\\).",
        workingOut: "y = \\frac{1}{3} f(x)"
      },
      {
        explanation: "A transformation of the form \\(y = k \\cdot f(x)\\) represents a vertical dilation by a scale factor of \\(k\\).",
        workingOut: "\\text{Vertical dilation by a scale factor of } \\frac{1}{3}."
      }
    ]
  },
  'y11a-5i-q19a': {
    type: 'teacher_review',
    steps: [
      {
        explanation: "Analyze the equations: \\(y = 3x\\), \\(y = 3x + 4\\), and \\(y = 3x - 3\\). Notice they are all straight lines in the form \\(y = mx + c\\).",
        workingOut: "\\text{All three lines have the same gradient, } m = 3."
      },
      {
        explanation: "Because the gradients are identical, these lines are parallel. The \\(y\\)-intercepts (\\(c\\)) are \\(0\\), \\(4\\), and \\(-3\\) respectively.",
        workingOut: "\\text{The lines are vertical translations of each other.}"
      },
      {
        explanation: "Sketch them on the same axes. They should have the same steepness but cross the \\(y\\)-axis at different heights.",
        workingOut: "\\text{See the final graph below.}"
      }
    ],
    graph: {
      jsxGraph: {
        width: 400, height: 300, boundingbox: [-4, 6, 4, -5],
        script: `board.suspendUpdate();
board.create('arrow', [[-4,0],[4,0]], {strokeColor:'black'});
board.create('arrow', [[0,-5],[0,6]], {strokeColor:'black'});
board.create('functiongraph', [function(x){ return 3*x; }, -4, 4], {strokeColor:'#6366f1',strokeWidth:2});
board.create('text', [1, 2, 'y = 3x'], {color:'#6366f1'});
board.create('functiongraph', [function(x){ return 3*x + 4; }, -4, 4], {strokeColor:'#f43f5e',strokeWidth:2});
board.create('text', [-1.5, 1, 'y = 3x+4'], {color:'#f43f5e'});
board.create('functiongraph', [function(x){ return 3*x - 3; }, -4, 4], {strokeColor:'#10b981',strokeWidth:2});
board.create('text', [1.5, 0, 'y = 3x-3'], {color:'#10b981'});
board.unsuspendUpdate();`
      }
    }
  },
  'y11a-5i-q19b': {
    type: 'teacher_review',
    steps: [
      {
        explanation: "Analyze the equations: \\(y = -\\frac{1}{3}x\\), \\(y = -\\frac{1}{3}x + 2\\), and \\(y = -\\frac{1}{3}x - 3\\).",
        workingOut: "\\text{All three lines have the same gradient, } m = -\\frac{1}{3}."
      },
      {
        explanation: "Since they share the same gradient, they are parallel lines sloping downwards (from top-left to bottom-right). Their \\(y\\)-intercepts are \\(0\\), \\(2\\), and \\(-3\\).",
        workingOut: "\\text{The lines are vertical translations of each other.}"
      },
      {
        explanation: "Sketch them carefully. A gradient of \\(-\\frac{1}{3}\\) means for every 3 units right, the line goes 1 unit down.",
        workingOut: "\\text{See the final graph below.}"
      }
    ],
    graph: {
      jsxGraph: {
        width: 400, height: 300, boundingbox: [-6, 5, 6, -5],
        script: `board.suspendUpdate();
board.create('arrow', [[-6,0],[6,0]], {strokeColor:'black'});
board.create('arrow', [[0,-5],[0,5]], {strokeColor:'black'});
board.create('functiongraph', [function(x){ return -x/3; }, -6, 6], {strokeColor:'#6366f1',strokeWidth:2});
board.create('text', [3, -1.5, 'y = -1/3x'], {color:'#6366f1'});
board.create('functiongraph', [function(x){ return -x/3 + 2; }, -6, 6], {strokeColor:'#f43f5e',strokeWidth:2});
board.create('text', [3, 1.5, 'y = -1/3x+2'], {color:'#f43f5e'});
board.create('functiongraph', [function(x){ return -x/3 - 3; }, -6, 6], {strokeColor:'#10b981',strokeWidth:2});
board.create('text', [3, -4.5, 'y = -1/3x-3'], {color:'#10b981'});
board.unsuspendUpdate();`
      }
    }
  },
  'y11a-5i-q19c': {
    type: 'teacher_review',
    steps: [
      {
        explanation: "Analyze the equations: \\(y = x + 4\\), \\(y = 4 - x\\) (which is \\(-x + 4\\)), and \\(y = -x - 4\\).",
        workingOut: "\\text{Find their intercepts to sketch them easily.}"
      },
      {
        explanation: "For \\(y = x + 4\\), the \\(y\\)-intercept is \\(4\\) and the \\(x\\)-intercept is \\(-4\\).\nFor \\(y = -x + 4\\), the \\(y\\)-intercept is \\(4\\) and the \\(x\\)-intercept is \\(4\\).\nFor \\(y = -x - 4\\), the \\(y\\)-intercept is \\(-4\\) and the \\(x\\)-intercept is \\(-4\\).",
        workingOut: "\\text{Two of the lines (} y=-x+4 \\text{ and } y=-x-4 \\text{) are parallel.}"
      },
      {
        explanation: "Sketch all three lines. They will intersect and form regions on the Cartesian plane.",
        workingOut: "\\text{See the final graph below.}"
      }
    ],
    graph: {
      jsxGraph: {
        width: 400, height: 300, boundingbox: [-6, 6, 6, -6],
        script: `board.suspendUpdate();
board.create('arrow', [[-6,0],[6,0]], {strokeColor:'black'});
board.create('arrow', [[0,-6],[0,6]], {strokeColor:'black'});
board.create('functiongraph', [function(x){ return x + 4; }, -6, 6], {strokeColor:'#6366f1',strokeWidth:2});
board.create('text', [-5, 0, 'y = x+4'], {color:'#6366f1'});
board.create('functiongraph', [function(x){ return 4 - x; }, -6, 6], {strokeColor:'#f43f5e',strokeWidth:2});
board.create('text', [2, 3, 'y = 4-x'], {color:'#f43f5e'});
board.create('functiongraph', [function(x){ return -x - 4; }, -6, 6], {strokeColor:'#10b981',strokeWidth:2});
board.create('text', [-5, -1, 'y = -x-4'], {color:'#10b981'});
board.unsuspendUpdate();`
      }
    }
  },
  'y11a-5i-q19d': {
    type: 'teacher_review',
    steps: [
      {
        explanation: "Analyze the parabolas. They are all in turning point form \\(y = a(x-h)^2 + k\\), with turning point \\((h, k)\\).",
        workingOut: "\\text{Find the vertex of each parabola.}"
      },
      {
        explanation: "\\(y = (x - 3)^2 - 2\\) has vertex \\((3, -2)\\) and opens upwards.\n\\(y = (x + 3)^2 - 2\\) has vertex \\((-3, -2)\\) and opens upwards.\n\\(y = -(x + 3)^2 + 2\\) has vertex \\((-3, 2)\\) and opens downwards.",
        workingOut: "\\text{Note that the second and third parabolas share an axis of symmetry } (x = -3)."
      },
      {
        explanation: "Sketch the parabolas, ensuring their turning points are correctly placed and they open in the correct directions.",
        workingOut: "\\text{See the final graph below.}"
      }
    ],
    graph: {
      jsxGraph: {
        width: 400, height: 300, boundingbox: [-6, 5, 6, -5],
        script: `board.suspendUpdate();
board.create('arrow', [[-6,0],[6,0]], {strokeColor:'black'});
board.create('arrow', [[0,-5],[0,5]], {strokeColor:'black'});
board.create('functiongraph', [function(x){ return (x-3)*(x-3)-2; }, -6, 6], {strokeColor:'#6366f1',strokeWidth:2});
board.create('text', [4, 1, 'y=(x-3)²-2'], {color:'#6366f1'});
board.create('functiongraph', [function(x){ return (x+3)*(x+3)-2; }, -6, 6], {strokeColor:'#f43f5e',strokeWidth:2});
board.create('text', [-5.5, 1, 'y=(x+3)²-2'], {color:'#f43f5e'});
board.create('functiongraph', [function(x){ return -(x+3)*(x+3)+2; }, -6, 6], {strokeColor:'#10b981',strokeWidth:2});
board.create('text', [-5.5, -2, 'y=-(x+3)²+2'], {color:'#10b981'});
board.unsuspendUpdate();`
      }
    }
  },
  'y11a-5i-q19e': {
    type: 'teacher_review',
    steps: [
      {
        explanation: "Analyze the parabolas. \\(y = x^2\\) is the basic parabola with turning point at the origin \\((0,0)\\).",
        workingOut: "\\text{Base graph: } y = x^2"
      },
      {
        explanation: "\\(y = (x + 3)^2\\) is a horizontal translation of \\(y = x^2\\) by 3 units to the left. Its turning point is \\((-3, 0)\\).",
        workingOut: "\\text{Shift left by 3.}"
      },
      {
        explanation: "\\(y = (x - 2)^2\\) is a horizontal translation of \\(y = x^2\\) by 2 units to the right. Its turning point is \\((2, 0)\\).",
        workingOut: "\\text{Shift right by 2.}"
      },
      {
        explanation: "All three parabolas have the same shape and open upwards, they are simply shifted along the \\(x\\)-axis.",
        workingOut: "\\text{See the final graph below.}"
      }
    ],
    graph: {
      jsxGraph: {
        width: 400, height: 300, boundingbox: [-6, 9, 5, -2],
        script: `board.suspendUpdate();
board.create('arrow', [[-6,0],[5,0]], {strokeColor:'black'});
board.create('arrow', [[0,-2],[0,9]], {strokeColor:'black'});
board.create('functiongraph', [function(x){ return x*x; }, -6, 5], {strokeColor:'#6366f1',strokeWidth:2});
board.create('text', [0.5, 1, 'y=x²'], {color:'#6366f1'});
board.create('functiongraph', [function(x){ return (x+3)*(x+3); }, -6, 5], {strokeColor:'#f43f5e',strokeWidth:2});
board.create('text', [-3.5, 4, 'y=(x+3)²'], {color:'#f43f5e'});
board.create('functiongraph', [function(x){ return (x-2)*(x-2); }, -6, 5], {strokeColor:'#10b981',strokeWidth:2});
board.create('text', [3, 4, 'y=(x-2)²'], {color:'#10b981'});
board.unsuspendUpdate();`
      }
    }
  },
  'y11a-5i-q19f': {
    type: 'teacher_review',
    steps: [
      {
        explanation: "Analyze the equations. They are all in the circle form \\((x - h)^2 + (y - k)^2 = r^2\\), with centre \\((h, k)\\) and radius \\(r\\).",
        workingOut: "\\text{Find the centre and radius of each circle.}"
      },
      {
        explanation: "For \\((x - 2)^2 + y^2 = 4\\), the centre is \\((2, 0)\\) and radius is \\(\\sqrt{4} = 2\\).\nFor \\((x + 2)^2 + y^2 = 4\\), the centre is \\((-2, 0)\\) and radius is \\(2\\).\nFor \\(x^2 + (y - 2)^2 = 4\\), the centre is \\((0, 2)\\) and radius is \\(2\\).",
        workingOut: "\\text{All circles have the same radius (2).}"
      },
      {
        explanation: "Sketch the three circles. Since the distance from the origin to each centre is 2 (which is equal to the radius), all three circles will pass exactly through the origin \\((0,0)\\).",
        workingOut: "\\text{See the final graph below.}"
      }
    ],
    graph: {
      jsxGraph: {
        width: 400, height: 400, boundingbox: [-5, 5, 5, -5],
        script: `board.suspendUpdate();
board.create('arrow', [[-5,0],[5,0]], {strokeColor:'black'});
board.create('arrow', [[0,-5],[0,5]], {strokeColor:'black'});
board.create('circle', [[2,0], 2], {strokeColor:'#6366f1',strokeWidth:2, fillColor:'none'});
board.create('circle', [[-2,0], 2], {strokeColor:'#f43f5e',strokeWidth:2, fillColor:'none'});
board.create('circle', [[0,2], 2], {strokeColor:'#10b981',strokeWidth:2, fillColor:'none'});
board.unsuspendUpdate();`
      }
    }
  }
};

for (let id of Object.keys(updates)) {
  let q = questions.find(x => x.id === id);
  if (!q) {
    let parent = questions.find(x => x.subQuestions && x.subQuestions.some(sq => sq.id === id));
    if (parent) q = parent.subQuestions.find(sq => sq.id === id);
  }
  if (q) {
    let upd = updates[id];
    
    q.type = upd.type;
    if (upd.type === 'multiple_choice') {
      q.opts = upd.opts;
      q.a = upd.a;
      q.answer = upd.a.toString();
      q.requiresManualGrading = false;
      q.graphData = null; // Remove root graph if any
    } else {
      delete q.opts;
      delete q.a;
      delete q.answer;
      q.requiresManualGrading = true;
      q.graphData = null; // Remove root graph so user relies on their sketch + solution
    }
    
    q.solutionSteps = upd.steps;
    if (upd.graph) {
      q.solutionSteps[q.solutionSteps.length - 1].graphData = upd.graph;
    }
    q.solution = upd.steps[upd.steps.length - 1].workingOut;
    
    updatedQs.push(q);
  }
}

const newArrayStr = JSON.stringify(questions, null, 2).replace(/"([a-zA-Z_$][0-9a-zA-Z_$]*)":/g, '$1:');
fs.writeFileSync(filePath, content.substring(0, match.index) + 'export const Y11_CH5I_QUESTIONS = ' + newArrayStr + ';\n', 'utf8');

async function updateDb() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  for (let q of updatedQs) {
    let isSub = !questions.find(x => x.id === q.id);
    if (!isSub) {
      await db.collection('questions').doc(q.id).update({
        type: q.type,
        opts: q.opts || null,
        options: q.opts ? q.opts.map(o => ({ text: o, imageUrl: '' })) : null,
        a: q.a !== undefined ? q.a : null,
        answer: q.answer || null,
        solution: q.solution,
        solutionSteps: q.solutionSteps,
        requiresManualGrading: q.requiresManualGrading,
        graphData: q.graphData
      });
    } else {
      let parent = questions.find(x => x.subQuestions && x.subQuestions.some(sq => sq.id === q.id));
      if (parent) {
        let parentDoc = await db.collection('questions').doc(parent.id).get();
        if (parentDoc.exists) {
          let pData = parentDoc.data();
          let sqIdx = pData.subQuestions.findIndex(sq => sq.id === q.id);
          if (sqIdx > -1) {
            pData.subQuestions[sqIdx].type = q.type;
            pData.subQuestions[sqIdx].opts = q.opts || null;
            pData.subQuestions[sqIdx].options = q.opts ? q.opts.map(o => ({ text: o, imageUrl: '' })) : null;
            pData.subQuestions[sqIdx].a = q.a !== undefined ? q.a : null;
            pData.subQuestions[sqIdx].answer = q.answer || null;
            pData.subQuestions[sqIdx].solution = q.solution;
            pData.subQuestions[sqIdx].solutionSteps = q.solutionSteps;
            pData.subQuestions[sqIdx].requiresManualGrading = q.requiresManualGrading;
            pData.subQuestions[sqIdx].graphData = q.graphData;
            await db.collection('questions').doc(parent.id).update({
              subQuestions: pData.subQuestions
            });
          }
        }
      }
    }
  }
  console.log('Successfully updated q18a through q19f.');
  process.exit(0);
}
updateDb();
