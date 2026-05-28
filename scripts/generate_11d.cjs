const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '../src/constants/seedYear9Ch11DQuestions.js');

const questions = [];

// Q1 (a-f): Write down the equation of the line
const q1Data = [
  { sub: 'a', m: 3, c: 5, mText: '3', cText: '5' },
  { sub: 'b', m: 4, c: 6, mText: '4', cText: '6' },
  { sub: 'c', m: -3, c: 2, mText: '-3', cText: '2' },
  { sub: 'd', m: -1, c: 4, mText: '-1', cText: '4' },
  { sub: 'e', m: '3/4', c: 2, mText: '\\frac{3}{4}', cText: '2', isFrac: true },
  { sub: 'f', m: '-2/5', c: 0, mText: '-\\frac{2}{5}', cText: '0', isFrac: true }
];

q1Data.forEach(q => {
  let ans = '';
  if (q.c === 0) {
    ans = `y = ${q.m === -1 ? '-' : q.m}x`;
  } else {
    ans = `y = ${q.m === 1 ? '' : q.m === -1 ? '-' : q.m}x ${q.c > 0 ? '+' : '-'} ${Math.abs(q.c)}`;
  }
  if (q.isFrac) {
    ans = q.c === 0 ? `y = ${q.m}x` : `y = ${q.m}x + ${q.c}`;
  }

  questions.push({
    id: `y9-11d-q1${q.sub}`,
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 30,
    question: `Write down the equation of the line that has gradient \\(${q.mText}\\) and \\(y\\)-intercept \\(${q.cText}\\).`,
    a: ans,
    solution: `Using the gradient-intercept form of a straight line:\n\\(y = mx + c\\)\nwhere \\(m\\) is the gradient and \\(c\\) is the \\(y\\)-intercept.\n\nSubstituting \\(m = ${q.mText}\\) and \\(c = ${q.cText}\\):\n\\(${ans}\\).`,
    t: "The equation of a straight line",
    hint: "Substitute the gradient for \\(m\\) and the \\(y\\)-intercept for \\(c\\) in \\(y = mx + c\\).",
    solutionSteps: [
      {
        explanation: "Recall the gradient-intercept form equation.",
        workingOut: "y = mx + c"
      },
      {
        explanation: "Substitute the given gradient and y-intercept.",
        workingOut: `m = ${q.mText}, \\quad c = ${q.cText} \\implies ${ans}`
      }
    ],
    graphData: null
  });
});

// Q2 (a-l): Write down gradient and y-intercept and sketch
const q2Data = [
  { sub: 'a', eq: 'y = 3x + 2', m: 3, c: 2, eqLatex: 'y = 3x + 2' },
  { sub: 'b', eq: 'y = 2x + 5', m: 2, c: 5, eqLatex: 'y = 2x + 5' },
  { sub: 'c', eq: 'y = -3x + 4', m: -3, c: 4, eqLatex: 'y = -3x + 4' },
  { sub: 'd', eq: 'y = -2x + 2', m: -2, c: 2, eqLatex: 'y = -2x + 2' },
  { sub: 'e', eq: 'y = -4x - 3', m: -4, c: -3, eqLatex: 'y = -4x - 3' },
  { sub: 'f', eq: 'y = -3x - 5', m: -3, c: -5, eqLatex: 'y = -3x - 5' },
  { sub: 'g', eq: 'y = 1/3*x - 3', m: 1/3, c: -3, eqLatex: 'y = \\frac{1}{3}x - 3', isFrac: true, mNum: 1, mDen: 3 },
  { sub: 'h', eq: 'y = 3/4*x + 2', m: 3/4, c: 2, eqLatex: 'y = \\frac{3}{4}x + 2', isFrac: true, mNum: 3, mDen: 4 },
  { sub: 'i', eq: 'y = -3x', m: -3, c: 0, eqLatex: 'y = -3x' },
  { sub: 'j', eq: 'y = -5x', m: -5, c: 0, eqLatex: 'y = -5x' },
  { sub: 'k', eq: 'y = 2 - 4x', m: -4, c: 2, eqLatex: 'y = 2 - 4x' },
  { sub: 'l', eq: 'y = 3 - 6x', m: -6, c: 3, eqLatex: 'y = 3 - 6x' }
];

q2Data.forEach(q => {
  const otherX = q.isFrac ? q.mDen : 1;
  const otherY = q.m * otherX + q.c;

  const yMin = Math.min(-6, q.c - 2, otherY - 2);
  const yMax = Math.max(6, q.c + 2, otherY + 2);
  const xMin = Math.min(-4, -otherX - 2);
  const xMax = Math.max(4, otherX + 2);
  
  const bbox = [xMin - 1, yMax + 1, xMax + 1, yMin - 1];

  const script = `board.suspendUpdate();
board.create('arrow', [[${bbox[0] + 0.5}, 0], [${bbox[2] - 0.5}, 0]], {strokeColor: 'black', strokeWidth: 1});
board.create('arrow', [[0, ${bbox[3] + 0.5}], [0, ${bbox[1] - 0.5}]], {strokeColor: 'black', strokeWidth: 1});
board.create('text', [${bbox[2] - 0.8}, -0.5, 'x'], {fontSize: 12});
board.create('text', [-0.5, ${bbox[1] - 0.8}, 'y'], {fontSize: 12});
board.create('line', [[0, ${q.c}], [${otherX}, ${otherY}]], {strokeColor: 'blue', strokeWidth: 2});
board.create('point', [0, ${q.c}], {size: 3, color: 'red', name: '(0, ${q.c})', withLabel: true, label: {offset: [10, 5]}});
board.create('point', [${otherX}, ${otherY}], {size: 3, color: 'red', name: '(${otherX}, ${otherY})', withLabel: true, label: {offset: [10, 5]}});
board.unsuspendUpdate();`;

  questions.push({
    id: `y9-11d-q2${q.sub}`,
    type: "teacher_review",
    difficulty: "easy",
    timeLimit: 30,
    question: `Write down the gradient and \\(y\\)-intercept of the line \\(${q.eqLatex}\\). Sketch the graph of the line by plotting two points.`,
    a: `m = ${q.isFrac ? `\\frac{${q.mNum}}{${q.mDen}}` : q.m}, y-intercept = ${q.c}. Line passes through \\((0, ${q.c})\\) and \\((${otherX}, ${otherY})\\).`,
    solution: `Comparing \\(${q.eqLatex}\\) to \\(y = mx + c\\):\n- Gradient \\(m = ${q.isFrac ? `\\frac{${q.mNum}}{${q.mDen}}` : q.m}\\)\n- \\(y\\)-intercept \\(c = ${q.c}\\) (coordinates: \\((0, ${q.c})\\))\n\nPlot a second point by substituting \\(x = ${otherX}\\):\n\\(y = ${otherY}\\) \\(\\implies (${otherX}, ${otherY})\\).\nDraw a line passing through both points.`,
    t: "The equation of a straight line",
    hint: "Identify \\(m\\) and \\(c\\) directly from the equation, plot the \\(y\\)-intercept, and substitute another \\(x\\) value to find a second point.",
    solutionSteps: [
      {
        explanation: "Identify gradient and y-intercept.",
        workingOut: `m = ${q.isFrac ? `\\frac{${q.mNum}}{${q.mDen}}` : q.m}, \\quad c = ${q.c}`
      },
      {
        explanation: "Find a second point by substituting x.",
        workingOut: `x = ${otherX} \\implies y = ${otherY}`
      }
    ],
    graphData: {
      jsxGraph: {
        width: 300,
        height: 300,
        boundingbox: bbox,
        showConstructionPoints: true,
        boardOptions: {
          axis: true,
          grid: true
        },
        script: script
      }
    }
  });
});

// Q3-Q5: Point lies on line questions
const linesQ35 = [
  { id: '3', eqLatex: 'y = 3x - 2', m: 3, c: -2, pts: [{ sub: 'a', x: 2, y: 4, lies: true }, { sub: 'b', x: -2, y: -8, lies: true }, { sub: 'c', x: -1, y: -4, lies: false }, { sub: 'd', x: 3, y: 8, lies: false }] },
  { id: '4', eqLatex: 'y = -3x + 2', m: -3, c: 2, pts: [{ sub: 'a', x: 2, y: -4, lies: true }, { sub: 'b', x: -2, y: 8, lies: true }, { sub: 'c', x: -1, y: 4, lies: false }, { sub: 'd', x: 3, y: -6, lies: false }] },
  { id: '5', eqLatex: 'y = -5x', m: -5, c: 0, pts: [{ sub: 'a', x: 0, y: 0, lies: true }, { sub: 'b', x: 1, y: -5, lies: true }, { sub: 'c', x: -1, y: 6, lies: false }, { sub: 'd', x: 2, y: -8, lies: false }] }
];

linesQ35.forEach(line => {
  line.pts.forEach(p => {
    const calcY = line.m * p.x + line.c;
    const ans = p.lies ? "Yes" : "No";
    questions.push({
      id: `y9-11d-q${line.id}${p.sub}`,
      type: "short_answer",
      difficulty: "easy",
      timeLimit: 30,
      question: `Check whether or not the point \\((${p.x}, ${p.y})\\) lies on the line with equation \\(${line.eqLatex}\\).`,
      a: ans,
      solution: `Substitute \\(x = ${p.x}\\) into the equation \\(${line.eqLatex}\\):\n\\(y = ${line.m}(${p.x}) ${line.c >= 0 ? '+' : '-'} ${Math.abs(line.c)} = ${calcY}\\).\n\nSince the calculated \\(y\\)-value is ${p.lies ? 'equal' : 'not equal'} to the point's \\(y\\)-coordinate of \\(${p.y}\\), the point **${p.lies ? 'lies' : 'does not lie'}** on the line.`,
      t: "The equation of a straight line",
      hint: "Substitute the x-coordinate of the point into the line equation and see if the resulting y matches the point's y-coordinate.",
      solutionSteps: [
        {
          explanation: "Substitute the x-coordinate into the equation.",
          workingOut: `y = ${line.m}(${p.x}) ${line.c >= 0 ? '+' : '-'} ${Math.abs(line.c)}`
        },
        {
          explanation: "Compare calculated y with point's y-coordinate.",
          workingOut: `${calcY} ${p.lies ? '=' : '\\ne'} ${p.y}`
        }
      ],
      graphData: null
    });
  });
});

// Q6-Q9: Find coordinate given other coordinate
const q69Data = [
  { id: '6', eqLatex: 'y = 4x - 3', m: 4, c: -3, findY: true, pts: [{ sub: 'a', val: 3 }, { sub: 'b', val: 0 }, { sub: 'c', val: -2 }] },
  { id: '7', eqLatex: 'y = -4x + 3', m: -4, c: 3, findY: true, pts: [{ sub: 'a', val: 4 }, { sub: 'b', val: -2 }, { sub: 'c', val: 0 }] },
  { id: '8', eqLatex: 'y = 3x + 9', m: 3, c: 9, findY: false, pts: [{ sub: 'a', val: 12 }, { sub: 'b', val: 0 }, { sub: 'c', val: -3 }] },
  { id: '9', eqLatex: 'y = -3x - 6', m: -3, c: -6, findY: false, pts: [{ sub: 'a', val: 9 }, { sub: 'b', val: 0 }, { sub: 'c', val: -3 }] }
];

q69Data.forEach(q => {
  q.pts.forEach(p => {
    let ans = '';
    let steps = [];
    if (q.findY) {
      const yVal = q.m * p.val + q.c;
      ans = `${yVal}`;
      steps = [
        {
          explanation: `Substitute x = ${p.val} into the equation.`,
          workingOut: `y = ${q.m}(${p.val}) ${q.c >= 0 ? '+' : '-'} ${Math.abs(q.c)}`
        },
        {
          explanation: "Simplify to find y.",
          workingOut: `y = ${yVal}`
        }
      ];
    } else {
      const xVal = (p.val - q.c) / q.m;
      ans = `${xVal.toFixed(1).replace('.0','')}`;
      steps = [
        {
          explanation: `Substitute y = ${p.val} into the equation.`,
          workingOut: `${p.val} = ${q.m}x ${q.c >= 0 ? '+' : '-'} ${Math.abs(q.c)}`
        },
        {
          explanation: "Solve for x.",
          workingOut: `${q.m}x = ${p.val - q.c} \\implies x = ${ans}`
        }
      ];
    }

    questions.push({
      id: `y9-11d-q${q.id}${p.sub}`,
      type: "short_answer",
      difficulty: "easy",
      timeLimit: 30,
      question: q.findY 
        ? `Find the \\(y\\)-coordinate of the point on the line \\(${q.eqLatex}\\) with \\(x\\)-coordinate \\(${p.val}\\).`
        : `Find the \\(x\\)-coordinate of the point on the line \\(${q.eqLatex}\\) with \\(y\\)-coordinate \\(${p.val}\\).`,
      a: ans,
      solution: q.findY 
        ? `Substitute \\(x = ${p.val}\\) into the equation:\n\\(y = ${q.m}(${p.val}) ${q.c >= 0 ? '+' : '-'} ${Math.abs(q.c)} = ${ans}\\).`
        : `Substitute \\(y = ${p.val}\\) into the equation and solve for \\(x\\):\n\\(${p.val} = ${q.m}x ${q.c >= 0 ? '+' : '-'} ${Math.abs(q.c)}\\)\n\\(${q.m}x = ${p.val - q.c}\\)\n\\(x = ${ans}\\).`,
      t: "The equation of a straight line",
      hint: q.findY ? "Substitute the x-value and evaluate y." : "Substitute the y-value and solve the linear equation for x.",
      solutionSteps: steps,
      graphData: null
    });
  });
});

// Q10-Q11: Graph shown, find a, b, c
// Q10: y = 3x + 6. Find a, b, c. a = 6, b = -2, c = 9
questions.push({
  id: `y9-11d-q10`,
  type: "short_answer",
  difficulty: "medium",
  timeLimit: 90,
  question: "The graph of \\(y = 3x + 6\\) is shown. Find the values of \\(a\\), \\(b\\) and \\(c\\) corresponding to the highlighted intercepts \\((0, a)\\), \\((b, 0)\\), and point \\((1, c)\\). Format: a = [val], b = [val], c = [val]",
  a: "a = 6, b = -2, c = 9",
  solution: "1. The point \\((0, a)\\) is the \\(y\\)-intercept. Setting \\(x = 0\\):\n   \\(y = 3(0) + 6 = 6 \\implies a = 6\\).\n\n2. The point \\((b, 0)\\) is the \\(x\\)-intercept. Setting \\(y = 0\\):\n   \\(0 = 3b + 6 \\implies 3b = -6 \\implies b = -2\\).\n\n3. The point \\((1, c)\\) lies on the line. Setting \\(x = 1\\):\n   \\(c = 3(1) + 6 = 9 \\implies c = 9\\).",
  t: "The equation of a straight line",
  hint: "Substitute \\(x=0\\) to find \\(a\\), set \\(y=0\\) to find \\(b\\), and substitute \\(x=1\\) to find \\(c\\).",
  solutionSteps: [
    {
      explanation: "Find a (y-intercept) by substituting x = 0.",
      workingOut: "a = 3(0) + 6 = 6"
    },
    {
      explanation: "Find b (x-intercept) by setting y = 0.",
      workingOut: "3b + 6 = 0 \\implies b = -2"
    },
    {
      explanation: "Find c by substituting x = 1.",
      workingOut: "c = 3(1) + 6 = 9"
    }
  ],
  graphData: {
    jsxGraph: {
      width: 350,
      height: 300,
      boundingbox: [-4, 11, 3, -3],
      showConstructionPoints: true,
      boardOptions: {
        axis: true,
        grid: true
      },
      script: `board.suspendUpdate();
board.create('line', [[0, 6], [1, 9]], {strokeColor: 'blue', strokeWidth: 2});
board.create('point', [0, 6], {size: 3, color: 'red', name: '(0, a)', withLabel: true, label: {offset: [10, 0]}});
board.create('point', [-2, 0], {size: 3, color: 'red', name: '(b, 0)', withLabel: true, label: {offset: [-10, 10]}});
board.create('point', [1, 9], {size: 3, color: 'red', name: '(1, c)', withLabel: true, label: {offset: [10, 5]}});
board.unsuspendUpdate();`
    }
  }
});

// Q11: y = -2x + 8. Find a, b, c. a = 8, b = 4, c = 10 (at x = -1)
questions.push({
  id: `y9-11d-q11`,
  type: "short_answer",
  difficulty: "medium",
  timeLimit: 90,
  question: "The graph of \\(y = -2x + 8\\) is shown. Find the values of \\(a\\), \\(b\\) and \\(c\\) corresponding to the highlighted intercepts \\((0, a)\\), \\((b, 0)\\), and point \\((-1, c)\\). Format: a = [val], b = [val], c = [val]",
  a: "a = 8, b = 4, c = 10",
  solution: "1. The point \\((0, a)\\) is the \\(y\\)-intercept. Setting \\(x = 0\\):\n   \\(y = -2(0) + 8 = 8 \\implies a = 8\\).\n\n2. The point \\((b, 0)\\) is the \\(x\\)-intercept. Setting \\(y = 0\\):\n   \\(0 = -2b + 8 \\implies 2b = 8 \\implies b = 4\\).\n\n3. The point \\((-1, c)\\) lies on the line. Setting \\(x = -1\\):\n   \\(c = -2(-1) + 8 = 2 + 8 = 10 \\implies c = 10\\).",
  t: "The equation of a straight line",
  hint: "Determine each value by substituting the corresponding coordinates into the equation \\(y = -2x + 8\\).",
  solutionSteps: [
    {
      explanation: "Substitute x = 0 to solve for a.",
      workingOut: "a = -2(0) + 8 = 8"
    },
    {
      explanation: "Set y = 0 to solve for b.",
      workingOut: "-2b + 8 = 0 \\implies b = 4"
    },
    {
      explanation: "Substitute x = -1 to solve for c.",
      workingOut: "c = -2(-1) + 8 = 10"
    }
  ],
  graphData: {
    jsxGraph: {
      width: 350,
      height: 300,
      boundingbox: [-3, 12, 6, -2],
      showConstructionPoints: true,
      boardOptions: {
        axis: true,
        grid: true
      },
      script: `board.suspendUpdate();
board.create('line', [[0, 8], [4, 0]], {strokeColor: 'blue', strokeWidth: 2});
board.create('point', [0, 8], {size: 3, color: 'red', name: '(0, a)', withLabel: true, label: {offset: [10, 0]}});
board.create('point', [4, 0], {size: 3, color: 'red', name: '(b, 0)', withLabel: true, label: {offset: [-10, 10]}});
board.create('point', [-1, 10], {size: 3, color: 'red', name: '(-1, c)', withLabel: true, label: {offset: [10, 5]}});
board.unsuspendUpdate();`
    }
  }
});

// Q12 (a-l): Rewrite in the form y = mx + c and write down gradient and y-intercept
const q12Data = [
  { sub: 'a', eq: '3x + y = 12', form: 'y = -3x + 12', m: '-3', c: '12' },
  { sub: 'b', eq: '8x + 2y = 6', form: 'y = -4x + 3', m: '-4', c: '3' },
  { sub: 'c', eq: '4x - 2y = 8', form: 'y = 2x - 4', m: '2', c: '-4' },
  { sub: 'd', eq: '5x - 2y = 10', form: 'y = \\frac{5}{2}x - 5', m: '\\frac{5}{2}', c: '-5' },
  { sub: 'e', eq: '4y - 3x = 8', form: 'y = \\frac{3}{4}x + 2', m: '\\frac{3}{4}', c: '2' },
  { sub: 'f', eq: '5x - 3y = 9', form: 'y = \\frac{5}{3}x - 3', m: '\\frac{5}{3}', c: '-3' },
  { sub: 'g', eq: 'x = 3y - 6', form: 'y = \\frac{1}{3}x + 2', m: '\\frac{1}{3}', c: '2' },
  { sub: 'h', eq: 'x = 4y + 8', form: 'y = \\frac{1}{4}x - 2', m: '\\frac{1}{4}', c: '-2' },
  { sub: 'i', eq: 'x = -3y', form: 'y = -\\frac{1}{3}x', m: '-\\frac{1}{3}', c: '0' },
  { sub: 'j', eq: 'x = -5y', form: 'y = -\\frac{1}{5}x', m: '-\\frac{1}{5}', c: '0' },
  { sub: 'k', eq: 'y + 4x = 0', form: 'y = -4x', m: '-4', c: '0' },
  { sub: 'l', eq: 'x - 3y = 0', form: 'y = \\frac{1}{3}x', m: '\\frac{1}{3}', c: '0' }
];

q12Data.forEach(q => {
  questions.push({
    id: `y9-11d-q12${q.sub}`,
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 30,
    question: `Rewrite the equation \\(${q.eq}\\) in the form \\(y = mx + c\\) and write down the gradient and \\(y\\)-intercept. Format: y = [eq], m = [val], c = [val]`,
    a: `y = ${q.form.replace(/\\\\/g, '\\')}, m = ${q.m.replace(/\\\\/g, '\\')}, c = ${q.c}`,
    solution: `Rearrange the equation to isolate \\(y\\):\n\\(${q.eq}\\) becomes \\(${q.form}\\).\n\nFrom this form:\n- Gradient \\(m = ${q.m}\\)\n- \\(y\\)-intercept \\(c = ${q.c}\\).`,
    t: "The equation of a straight line",
    hint: "Solve the equation for \\(y\\) to write it in the form \\(y = mx + c\\).",
    solutionSteps: [
      {
        explanation: "Rearrange the equation to solve for y.",
        workingOut: `${q.eq} \\implies ${q.form}`
      },
      {
        explanation: "Read the gradient (m) and y-intercept (c).",
        workingOut: `m = ${q.m}, \\quad c = ${q.c}`
      }
    ],
    graphData: null
  });
});

// Q13: Hard question (subQuestions inside because difficulty is hard)
questions.push({
  id: "y9-11d-q13",
  type: "teacher_review",
  difficulty: "hard",
  timeLimit: 120,
  question: "Answer the following analytical questions regarding the general linear equation \\(ax + by = d\\).",
  a: "a) y = -\\frac{a}{b}x + \\frac{d}{b}, b) m = -\\frac{a}{b}, c = \\frac{d}{b}",
  solution: "a) Rearrange \\(ax + by = d\\):\n   \\(by = -ax + d \\implies y = -\\frac{a}{b}x + \\frac{d}{b}\\).\n\nb) Comparing to \\(y = mx + c\\):\n   - Gradient \\(m = -\\frac{a}{b}\\)\n   - \\(y\\)-intercept \\(c = \\frac{d}{b}\\).",
  t: "The equation of a straight line",
  hint: "Isolate \\(y\\) by moving the \\(x\\) term to the right side, then divide all terms by \\(b\\).",
  graphData: null,
  subQuestions: [
    {
      id: "y9-11d-q13a",
      type: "short_answer",
      difficulty: "hard",
      timeLimit: 120,
      question: "a) Express the equation \\(ax + by = d\\), where \\(a\\), \\(b\\) and \\(d\\) are constants (\\(b \\neq 0\\)), in the form \\(y = mx + c\\).",
      a: "y = -\\frac{a}{b}x + \\frac{d}{b}",
      solutionSteps: [
        {
          explanation: "Subtract ax from both sides.",
          workingOut: "by = -ax + d"
        },
        {
          explanation: "Divide both sides by b.",
          workingOut: "y = -\\frac{a}{b}x + \\frac{d}{b}"
        }
      ]
    },
    {
      id: "y9-11d-q13b",
      type: "short_answer",
      difficulty: "hard",
      timeLimit: 120,
      question: "b) Write down the gradient and \\(y\\)-intercept of the line whose equation is \\(ax + by = d\\). Format: m = [val], c = [val]",
      a: "m = -\\frac{a}{b}, c = \\frac{d}{b}",
      solutionSteps: [
        {
          explanation: "Identify m and c by matching with y = mx + c.",
          workingOut: "m = -\\frac{a}{b}, \\quad c = \\frac{d}{b}"
        }
      ]
    }
  ]
});

// Q14: Show that line passing through (a,0) and (0,b) has equation x/a + y/b = 1
questions.push({
  id: "y9-11d-q14",
  type: "teacher_review",
  difficulty: "hard",
  timeLimit: 120,
  question: "Show that the line passing through \\((a, 0)\\) and \\((0, b)\\) has the equation \\(\\frac{x}{a} + \\frac{y}{b} = 1\\).",
  a: "Proof: Gradient m = -b/a, y-intercept c = b. Substituting into y = mx + c gives y = -b/a * x + b. Dividing by b yields y/b = -x/a + 1, which rearranges to x/a + y/b = 1.",
  solution: "1. Calculate the gradient \\(m\\) between the points \\((a, 0)\\) and \\((0, b)\\):\n   \\(m = \\frac{b - 0}{0 - a} = -\\frac{b}{a}\\).\n\n2. The \\(y\\)-intercept is given directly by the point \\((0, b)\\), so \\(c = b\\).\n\n3. Substitute \\(m\\) and \\(c\\) into the slope-intercept form \\(y = mx + c\\):\n   \\(y = -\\frac{b}{a}x + b\\).\n\n4. Divide the entire equation by \\(b\\):\n   \\(\\frac{y}{b} = -\\frac{x}{a} + 1\\).\n\n5. Rearrange terms to get the final form:\n   \\(\\frac{x}{a} + \\frac{y}{b} = 1\\). (Intercept Form)",
  t: "The equation of a straight line",
  hint: "Find the gradient first, substitute it and the y-intercept into \\(y = mx + c\\), then divide both sides by \\(b\\).",
  solutionSteps: [
    {
      explanation: "Find the gradient between (a, 0) and (0, b).",
      workingOut: "m = \\frac{b - 0}{0 - a} = -\\frac{b}{a}"
    },
    {
      explanation: "Substitute the gradient and y-intercept into slope-intercept form.",
      workingOut: "y = -\\frac{b}{a}x + b"
    },
    {
      explanation: "Divide by b and rearrange.",
      workingOut: "\\frac{y}{b} = -\\frac{x}{a} + 1 \\implies \\frac{x}{a} + \\frac{y}{b} = 1"
    }
  ],
  graphData: null
});

const fileContent = `export const Y9_CH11D_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(targetFile, fileContent, 'utf-8');
console.log("Successfully generated seedYear9Ch11DQuestions.js!");
