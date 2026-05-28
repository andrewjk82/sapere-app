const fs = require('fs');

// Annotated parabola jsxGraph script builder
function parabolaScript({fn, vx, vy, axisX, yint, roots, bb, aVal}) {
  const rooted = Array.isArray(roots) ? roots : [];
  const isUp = aVal >= 0;
  
  let script = `board.suspendUpdate();
board.create('axis',[[0,0],[1,0]],{ticks:{drawLabels:true}});
board.create('axis',[[0,0],[0,1]],{ticks:{drawLabels:true}});
`;

  // Parabola curve
  script += `var f=function(x){return ${fn};};
board.create('functiongraph',[f],{strokeColor:'#2563eb',strokeWidth:2.5});
`;

  // Axis of symmetry (dashed vertical)
  script += `board.create('line',[[${axisX},0],[${axisX},1]],{strokeColor:'#dc2626',strokeWidth:1.5,dash:2,straightFirst:true,straightLast:true,fixed:true});
board.create('text',[${axisX + 0.3},${vy > 0 ? vy * 0.4 : vy * 0.5 + 1},'x = ${axisX}'],{color:'#dc2626',fontSize:13});
`;

  // Vertex (red)
  script += `board.create('point',[${vx},${vy}],{name:'V(${vx}, ${vy})',size:5,color:'#dc2626',fixed:true,label:{offset:[8,${isUp ? -16 : 8}],fontsize:13}});
`;

  // y-intercept (blue)
  script += `board.create('point',[0,${yint}],{name:'(0, ${yint})',size:4,color:'#2563eb',fixed:true,label:{offset:[10,0],fontsize:13}});
`;

  // x-intercepts (blue)
  rooted.forEach(r => {
    script += `board.create('point',[${r},0],{name:'(${r}, 0)',size:4,color:'#2563eb',fixed:true,label:{offset:[5,10],fontsize:13}});
`;
  });

  script += `board.unsuspendUpdate();`;
  return script;
}

const questions = [];

const createTopQ = (id, difficulty, timeLimit, type, qText, aText, steps, graphData = null) => {
  const q = {
    id: `y10-7h-${id}`,
    type,
    difficulty,
    timeLimit,
    question: qText,
    a: type === 'teacher_review' ? '' : aText,
    solution: type === 'teacher_review' ? aText : '',
    solutionSteps: steps || [],
    hint: '',
    t: 'Revision',
    graphData: null
  };
  questions.push(q);
};

const createSubQ = (id, difficulty, timeLimit, qText, subQs, graphData = null) => {
  questions.push({
    id: `y10-7h-${id}`,
    type: 'short_answer',
    difficulty,
    timeLimit,
    question: qText,
    a: '',
    solution: '',
    solutionSteps: [],
    hint: '',
    t: 'Revision',
    graphData,
    subQuestions: subQs.map(sq => ({
      id: `y10-7h-${id}${sq.id}`,
      type: sq.type || 'short_answer',
      question: sq.q,
      a: sq.type === 'teacher_review' ? '' : sq.a,
      solution: sq.type === 'teacher_review' ? sq.a : '',
      solutionSteps: sq.steps || [],
      graphData: null
    }))
  });
};

// Build annotated sketch step
function sketchStep(cfg) {
  return {
    explanation: `Key features: Vertex ${cfg.vertex}, x-intercept(s): ${cfg.roots.join(', ')}, y-intercept: (0, ${cfg.yint}), Axis of symmetry: x = ${cfg.axisX}`,
    workingOut: '',
    graphData: {
      jsxGraph: {
        width: 400,
        height: 400,
        boundingbox: cfg.bb,
        script: parabolaScript(cfg)
      }
    }
  };
}

// ---------- Q1 ----------
createTopQ('q1a','easy',30,'short_answer',"Find the \\( x \\)-intercepts of the graph for the equation \\( y = x^2 + 5x + 4 \\).","-1, -4",[
  {explanation:'Set y to 0',workingOut:'x^2 + 5x + 4 = 0'},
  {explanation:'Factorise',workingOut:'(x + 1)(x + 4) = 0'},
  {explanation:'Solve for x',workingOut:'x = -1 \\text{ or } x = -4'}
]);
createTopQ('q1b','easy',30,'short_answer',"Find the \\( x \\)-intercepts of the graph for the equation \\( y = 3x^2 - 10x - 8 \\).","-2/3, 4",[
  {explanation:'Set y to 0',workingOut:'3x^2 - 10x - 8 = 0'},
  {explanation:'Factorise',workingOut:'(3x + 2)(x - 4) = 0'},
  {explanation:'Solve for x',workingOut:'x = -\\frac{2}{3} \\text{ or } x = 4'}
]);
createTopQ('q1c','easy',30,'short_answer',"Find the \\( x \\)-intercepts of the graph for the equation \\( y = (x + 5)^2 - 4 \\).","-3, -7",[
  {explanation:'Set y to 0',workingOut:'(x + 5)^2 - 4 = 0'},
  {explanation:'Rearrange',workingOut:'(x + 5)^2 = 4'},
  {explanation:'Take square root',workingOut:'x + 5 = \\pm 2'},
  {explanation:'Solve for x',workingOut:'x = -3 \\text{ or } x = -7'}
]);
createTopQ('q1d','easy',30,'short_answer',"Find the \\( x \\)-intercepts of the graph for the equation \\( y = 2(x - 3)^2 - 8 \\).","1, 5",[
  {explanation:'Set y to 0',workingOut:'2(x - 3)^2 - 8 = 0'},
  {explanation:'Rearrange',workingOut:'(x - 3)^2 = 4'},
  {explanation:'Take square root',workingOut:'x - 3 = \\pm 2'},
  {explanation:'Solve for x',workingOut:'x = 1 \\text{ or } x = 5'}
]);

// ---------- Q2 ----------
createTopQ('q2a','easy',30,'short_answer',"Express the equation \\( y = x^2 + 8x + 5 \\) in the form \\( y = a(x - h)^2 + k \\), and hence state the coordinates of the vertex.","(-4, -11)",[
  {explanation:'Complete the square',workingOut:'y = (x^2 + 8x + 16) - 16 + 5'},
  {explanation:'Simplify',workingOut:'y = (x + 4)^2 - 11'},
  {explanation:'State vertex',workingOut:'(-4, -11)'}
]);
createTopQ('q2b','easy',30,'short_answer',"Express the equation \\( y = x^2 - 6x + 4 \\) in the form \\( y = a(x - h)^2 + k \\), and hence state the coordinates of the vertex.","(3, -5)",[
  {explanation:'Complete the square',workingOut:'y = (x^2 - 6x + 9) - 9 + 4'},
  {explanation:'Simplify',workingOut:'y = (x - 3)^2 - 5'},
  {explanation:'State vertex',workingOut:'(3, -5)'}
]);
createTopQ('q2c','easy',30,'short_answer',"Express the equation \\( y = 2x^2 + 8x + 3 \\) in the form \\( y = a(x - h)^2 + k \\), and hence state the coordinates of the vertex.","(-2, -5)",[
  {explanation:'Factor out 2',workingOut:'y = 2(x^2 + 4x) + 3'},
  {explanation:'Complete the square',workingOut:'y = 2(x^2 + 4x + 4 - 4) + 3'},
  {explanation:'Expand and simplify',workingOut:'y = 2(x + 2)^2 - 8 + 3 = 2(x + 2)^2 - 5'},
  {explanation:'State vertex',workingOut:'(-2, -5)'}
]);
createTopQ('q2d','easy',30,'short_answer',"Express the equation \\( y = 3x^2 + 12x + 5 \\) in the form \\( y = a(x - h)^2 + k \\), and hence state the coordinates of the vertex.","(-2, -7)",[
  {explanation:'Factor out 3',workingOut:'y = 3(x^2 + 4x) + 5'},
  {explanation:'Complete the square',workingOut:'y = 3(x^2 + 4x + 4 - 4) + 5'},
  {explanation:'Expand and simplify',workingOut:'y = 3(x + 2)^2 - 12 + 5 = 3(x + 2)^2 - 7'},
  {explanation:'State vertex',workingOut:'(-2, -7)'}
]);

// ---------- Q3 ----------
createTopQ('q3a','easy',30,'short_answer',"A parabola has \\( x \\)-intercepts \\( -2 \\) and \\( 5 \\), and \\( y \\)-intercept \\( 10 \\). Find the equation of the parabola.","y = -x^2 + 3x + 10",[
  {explanation:'Use intercept form',workingOut:'y = a(x + 2)(x - 5)'},
  {explanation:'Substitute y-intercept (0, 10)',workingOut:'10 = a(2)(-5) = -10a \\Rightarrow a = -1'},
  {explanation:'Expand',workingOut:'y = -(x^2 - 3x - 10) = -x^2 + 3x + 10'}
]);
createTopQ('q3b','easy',30,'short_answer',"A parabola has \\( x \\)-intercepts \\( 2 \\) and \\( 6 \\), and passes through the point \\( (1, 10) \\). Find the equation of the parabola.","y = 2x^2 - 16x + 24",[
  {explanation:'Use intercept form',workingOut:'y = a(x - 2)(x - 6)'},
  {explanation:'Substitute point (1, 10)',workingOut:'10 = a(1 - 2)(1 - 6) = 5a \\Rightarrow a = 2'},
  {explanation:'Expand',workingOut:'y = 2(x^2 - 8x + 12) = 2x^2 - 16x + 24'}
]);

// ---------- Q4 ----------
createTopQ('q4a','easy',30,'short_answer',"A parabola has vertex \\( (4, -3) \\) and \\( y \\)-intercept \\( 13 \\). Find the equation of the parabola.","y = x^2 - 8x + 13",[
  {explanation:'Use vertex form',workingOut:'y = a(x - 4)^2 - 3'},
  {explanation:'Substitute y-intercept (0, 13)',workingOut:'13 = 16a - 3 \\Rightarrow a = 1'},
  {explanation:'Expand',workingOut:'y = x^2 - 8x + 13'}
]);
createTopQ('q4b','easy',30,'short_answer',"A parabola has vertex \\( (3, 6) \\) and passes through the point \\( (1, -2) \\). Find the equation of the parabola.","y = -2x^2 + 12x - 12",[
  {explanation:'Use vertex form',workingOut:'y = a(x - 3)^2 + 6'},
  {explanation:'Substitute point (1, -2)',workingOut:'-2 = 4a + 6 \\Rightarrow a = -2'},
  {explanation:'Expand',workingOut:'y = -2x^2 + 12x - 12'}
]);

// ---------- Q5 ----------
createTopQ('q5a','easy',30,'short_answer',"Write the equation of the parabola obtained when the graph of \\( y = x^2 \\) is stretched by a factor of 2 from the \\( x \\)-axis and translated 3 units to the right.","y = 2(x - 3)^2",[
  {explanation:'Stretch by factor of 2',workingOut:'y = 2x^2'},
  {explanation:'Translate 3 units right',workingOut:'y = 2(x - 3)^2'}
]);
createTopQ('q5b','easy',30,'short_answer',"Write the equation of the parabola obtained when the graph of \\( y = x^2 \\) is reflected in the \\( x \\)-axis and then translated 2 units to the left and 4 units up.","y = -(x + 2)^2 + 4",[
  {explanation:'Reflect in x-axis',workingOut:'y = -x^2'},
  {explanation:'Translate 2 units left and 4 units up',workingOut:'y = -(x + 2)^2 + 4'}
]);
createTopQ('q5c','easy',30,'short_answer',"Write the equation of the parabola obtained when the graph of \\( y = x^2 \\) is translated 4 units to the right and 5 units down.","y = (x - 4)^2 - 5",[
  {explanation:'Translate 4 units right and 5 units down',workingOut:'y = (x - 4)^2 - 5'}
]);

// ---------- Q6 Sketch questions — fully annotated ----------
const q6Items = [
  {
    id:'q6a', eq:'y = x^2 - 4x + 3', fn:'x*x - 4*x + 3',
    vx:2, vy:-1, axisX:2, yint:3, roots:[1,3], aVal:1, vertex:'(2, -1)',
    bb:[-2, 7, 7, -4]
  },
  {
    id:'q6b', eq:'y = -x^2 - 2x + 8', fn:'-x*x - 2*x + 8',
    vx:-1, vy:9, axisX:-1, yint:8, roots:[-4,2], aVal:-1, vertex:'(-1, 9)',
    bb:[-7, 13, 5, -3]
  },
  {
    id:'q6c', eq:'y = 9 - x^2', fn:'9 - x*x',
    vx:0, vy:9, axisX:0, yint:9, roots:[-3,3], aVal:-1, vertex:'(0, 9)',
    bb:[-6, 13, 6, -3]
  },
  {
    id:'q6d', eq:'y = (x + 2)^2', fn:'(x+2)*(x+2)',
    vx:-2, vy:0, axisX:-2, yint:4, roots:[-2], aVal:1, vertex:'(-2, 0)',
    bb:[-7, 12, 4, -2]
  },
  {
    id:'q6e', eq:'y = (x - 2)^2 - 9', fn:'(x-2)*(x-2) - 9',
    vx:2, vy:-9, axisX:2, yint:-5, roots:[-1,5], aVal:1, vertex:'(2, -9)',
    bb:[-4, 6, 8, -12]
  },
  {
    id:'q6f', eq:'y = x^2 - 4', fn:'x*x - 4',
    vx:0, vy:-4, axisX:0, yint:-4, roots:[-2,2], aVal:1, vertex:'(0, -4)',
    bb:[-5, 6, 5, -7]
  }
];

q6Items.forEach(d => {
  const annotated = sketchStep(d);
  questions.push({
    id: `y10-7h-${d.id}`,
    type: 'teacher_review',
    difficulty: 'easy',
    timeLimit: 30,
    question: `Sketch the graph of \\( ${d.eq} \\), labelling the vertex, axis of symmetry and the intercepts.`,
    a: '',
    solution: `Vertex: ${d.vertex}, y-intercept: (0, ${d.yint}), x-intercept(s): ${d.roots.map(r=>`(${r}, 0)`).join(', ')}, Axis of symmetry: x = ${d.axisX}`,
    solutionSteps: [annotated],
    hint: '',
    t: 'Revision',
    graphData: null
  });
});

// ---------- Q7 ----------
createSubQ('q7','medium',90,"For the graph with equation \\( y = 2x^2 - 4x - 6 \\), find the coordinates of the:",[
  {id:'a',q:'a) vertex',a:'(1, -8)',steps:[
    {explanation:'Factor out 2',workingOut:'y = 2(x^2 - 2x) - 6'},
    {explanation:'Complete the square',workingOut:'y = 2(x - 1)^2 - 8'},
    {explanation:'State vertex',workingOut:'(1, -8)'}
  ]},
  {id:'b',q:'b) \\( x \\)-intercepts',a:'-1, 3',steps:[
    {explanation:'Set y to 0',workingOut:'2x^2 - 4x - 6 = 0'},
    {explanation:'Divide by 2',workingOut:'x^2 - 2x - 3 = 0'},
    {explanation:'Factorise',workingOut:'(x - 3)(x + 1) = 0 \\Rightarrow x = 3, -1'}
  ]}
]);

// ---------- Q8 ----------
createSubQ('q8','medium',90,"A gardener is planning to establish a vegetable garden. The garden will have a wooden border and two wooden dividers to form three partitions. Thirty-two metres of timber is used for the border and the dividers. Let \\( x \\) m be the length of the dividers and two of the sides of the garden.",[
  {id:'a',q:'a) Express the other side length of the garden in terms of \\( x \\).',a:'16 - 2x',steps:[
    {explanation:'4 vertical sides + 2 horizontal sides',workingOut:'4x + 2y = 32'},
    {explanation:'Solve for y',workingOut:'y = 16 - 2x'}
  ]},
  {id:'b',q:'b) Let \\( A \\) m\\(^2\\) be the area of the garden. Write an equation for \\( A \\) in terms of \\( x \\).',a:'A = 16x - 2x^2',steps:[
    {explanation:'Area = length × width',workingOut:'A = x(16 - 2x) = 16x - 2x^2'}
  ]},
  {id:'c',q:'c) Find the length and width in order for the area to be a maximum.',a:'length 8 m, width 4 m',steps:[
    {explanation:'Complete the square',workingOut:'A = -2(x - 4)^2 + 32'},
    {explanation:'Max at x = 4',workingOut:'\\text{Width } x = 4 \\text{ m}'},
    {explanation:'Find length',workingOut:'y = 16 - 2(4) = 8 \\text{ m}'}
  ]}
],{
  geometry:{
    width:300,
    points:{'A':[0,0],'B':[20,0],'C':[20,10],'D':[0,10],'E':[6.6,0],'F':[6.6,10],'G':[13.3,0],'H':[13.3,10]},
    segments:[{from:'A',to:'B'},{from:'B',to:'C'},{from:'C',to:'D'},{from:'D',to:'A'},{from:'E',to:'F'},{from:'G',to:'H'}],
    sideLabels:[{between:['B','C'],text:'x m'}]
  }
});

// ---------- Q9 ----------
const q9GraphStep = {
  explanation: "Key features: Vertex (-2, -9), x-intercepts: (-5, 0) and (1, 0), y-intercept: (0, -5), Axis of symmetry: x = -2",
  workingOut: '',
  graphData: {
    jsxGraph: {
      width:400, height:400, boundingbox:[-8, 6, 5, -13],
      script: parabolaScript({fn:'x*x + 4*x - 5', vx:-2, vy:-9, axisX:-2, yint:-5, roots:[-5,1], aVal:1, vertex:'(-2, -9)', bb:[-8,6,5,-13]})
    }
  }
};

createSubQ('q9','medium',90,"Consider the quadratic equation \\( y = x^2 + 4x - 5 \\).",[
  {id:'a',q:'a) By expressing the equation in the form \\( y = a(x - h)^2 + k \\), find the turning point.',a:'(-2, -9)',steps:[
    {explanation:'Complete the square',workingOut:'y = (x + 2)^2 - 9'},
    {explanation:'State turning point',workingOut:'(-2, -9)'}
  ]},
  {id:'b',q:'b) Find the points of intersection with the axes.',a:'(0, -5), (-5, 0), (1, 0)',steps:[
    {explanation:'y-intercept (x=0)',workingOut:'y = -5 \\Rightarrow (0, -5)'},
    {explanation:'x-intercepts (y=0)',workingOut:'(x + 5)(x - 1) = 0 \\Rightarrow x = -5, 1'}
  ]},
  {id:'c',q:'c) Sketch the graph, marking on your sketch the points found in a and b.',type:'teacher_review',
    a:'Sketch: vertex (-2, -9), x-intercepts (-5, 0) and (1, 0), y-intercept (0, -5), axis of symmetry x = -2',
    steps:[q9GraphStep]
  },
  {id:'d',q:'d) Solve \\( x^2 + 4x - 5 \\le 0 \\) for \\( x \\).',a:'-5 \\le x \\le 1',steps:[
    {explanation:'Parabola is below/on x-axis between the intercepts',workingOut:'-5 \\le x \\le 1'}
  ]}
]);

// ---------- Q10 ----------
const q10GraphStep = {
  explanation: "Key features: Vertex (1, -8), x-intercepts: (-1, 0) and (3, 0), y-intercept: (0, -6), Axis of symmetry: x = 1",
  workingOut: '',
  graphData: {
    jsxGraph: {
      width:400, height:400, boundingbox:[-4, 6, 7, -12],
      script: parabolaScript({fn:'2*x*x - 4*x - 6', vx:1, vy:-8, axisX:1, yint:-6, roots:[-1,3], aVal:2, vertex:'(1, -8)', bb:[-4,6,7,-12]})
    }
  }
};

createSubQ('q10','medium',90,"Consider the quadratic equation \\( y = 2x^2 - 4x - 6 \\).",[
  {id:'a',q:'a) Sketch the graph, labelling clearly the coordinates of the turning point and the points of intersection with the axes.',
    type:'teacher_review', a:'Sketch: vertex (1, -8), x-intercepts (-1, 0) and (3, 0), y-intercept (0, -6), axis of symmetry x = 1',
    steps:[q10GraphStep]
  },
  {id:'b',q:'b) Solve \\( 2x^2 - 4x - 6 < 0 \\) for \\( x \\).',a:'-1 < x < 3',steps:[
    {explanation:'Parabola is strictly below x-axis between the intercepts',workingOut:'-1 < x < 3'}
  ]}
]);

// ---------- Q11 ----------
createTopQ('q11a','medium',90,'short_answer',"Solve for \\( x \\): \\( x^2 + 2x < 15 \\)","-5 < x < 3",[
  {explanation:'Rearrange',workingOut:'x^2 + 2x - 15 < 0'},
  {explanation:'Factorise',workingOut:'(x + 5)(x - 3) < 0'},
  {explanation:'State solution',workingOut:'-5 < x < 3'}
]);
createTopQ('q11b','medium',90,'short_answer',"Solve for \\( x \\): \\( x^2 + 4x \\ge -3 \\)","x \\le -3 \\text{ or } x \\ge -1",[
  {explanation:'Rearrange',workingOut:'x^2 + 4x + 3 \\ge 0'},
  {explanation:'Factorise',workingOut:'(x + 3)(x + 1) \\ge 0'},
  {explanation:'State solution',workingOut:'x \\le -3 \\text{ or } x \\ge -1'}
]);
createTopQ('q11c','medium',90,'short_answer',"Solve for \\( x \\): \\( -x^2 + 2x + 24 \\le 0 \\)","x \\le -4 \\text{ or } x \\ge 6",[
  {explanation:'Multiply by -1 (flip inequality)',workingOut:'x^2 - 2x - 24 \\ge 0'},
  {explanation:'Factorise',workingOut:'(x - 6)(x + 4) \\ge 0'},
  {explanation:'State solution',workingOut:'x \\le -4 \\text{ or } x \\ge 6'}
]);

const out = 'export const Y10_CH7H_QUESTIONS = ' + JSON.stringify(questions, null, 2) + ';';
fs.writeFileSync('src/constants/seedYear10Ch7HQuestions.js', out);
console.log('Done! Total questions:', questions.length);
