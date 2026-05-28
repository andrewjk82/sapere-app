const fs = require('fs');
const path = require('path');

// Target file
const targetFile = path.join(__dirname, '../src/constants/seedYear9Ch11EQuestions.js');

const questions = [];

// Helper to format fraction
function formatFrac(num, den) {
  if (num % den === 0) return `${num / den}`;
  const g = gcd(Math.abs(num), Math.abs(den));
  const n = num / g;
  const d = den / g;
  if (d === 1) return `${n}`;
  if (n < 0) return `-\\frac{${Math.abs(n)}}{${d}}`;
  return `\\frac{${n}}{${d}}`;
}

function gcd(a, b) {
  return b ? gcd(b, a % b) : a;
}

// -------------------------------------------------------------
// Q1: Sketch the graph by finding y-intercept and one other point
// Difficulty: easy, timeLimit: 30
// -------------------------------------------------------------
const q1Data = [
  { sub: 'a', eq: 'y = 3x + 1', m: 3, c: 1, eqLatex: 'y = 3x + 1' },
  { sub: 'b', eq: 'y = 2x + 3', m: 2, c: 3, eqLatex: 'y = 2x + 3' },
  { sub: 'c', eq: 'y = 2x - 3', m: 2, c: -3, eqLatex: 'y = 2x - 3' },
  { sub: 'd', eq: 'y = 3x + 4', m: 3, c: 4, eqLatex: 'y = 3x + 4' },
  { sub: 'e', eq: 'y = 5 - 3x', m: -3, c: 5, eqLatex: 'y = 5 - 3x' },
  { sub: 'f', eq: 'y = 4 - x', m: -1, c: 4, eqLatex: 'y = 4 - x' },
  { sub: 'g', eq: 'y = 1/3*x + 2', m: 1/3, c: 2, eqLatex: 'y = \\frac{1}{3}x + 2', isFrac: true, mNum: 1, mDen: 3 },
  { sub: 'h', eq: 'y = 3/4*x + 1', m: 3/4, c: 1, eqLatex: 'y = \\frac{3}{4}x + 1', isFrac: true, mNum: 3, mDen: 4 },
  { sub: 'i', eq: 'y = -3x + 2', m: -3, c: 2, eqLatex: 'y = -3x + 2' }
];

q1Data.forEach(q => {
  const otherX = 1;
  const otherY = q.m * otherX + q.c;
  
  const yInt = q.c;
  const xInt = -q.c / q.m;

  // Let's decide bounding box
  const xMin = Math.min(-3, xInt - 2);
  const xMax = Math.max(3, xInt + 2);
  const yMin = Math.min(-3, yInt - 2);
  const yMax = Math.max(5, yInt + 2);

  const padding = 1.5;
  const bbox = [xMin - padding, yMax + padding, xMax + padding, yMin - padding];

  const script = `board.suspendUpdate();
board.create('arrow', [[${bbox[0] + 0.5}, 0], [${bbox[2] - 0.5}, 0]], {strokeColor: 'black', strokeWidth: 1});
board.create('arrow', [[0, ${bbox[3] + 0.5}], [0, ${bbox[1] - 0.5}]], {strokeColor: 'black', strokeWidth: 1});
board.create('text', [${bbox[2] - 0.8}, -0.5, 'x'], {fontSize: 12});
board.create('text', [-0.5, ${bbox[1] - 0.8}, 'y'], {fontSize: 12});
board.create('line', [[0, ${yInt}], [${otherX}, ${otherY}]], {strokeColor: 'blue', strokeWidth: 2});
board.create('point', [0, ${yInt}], {size: 3, color: 'red', name: '(0, ${yInt})', withLabel: true, label: {offset: [10, 5]}});
board.create('point', [${otherX}, ${otherY}], {size: 3, color: 'red', name: '(${otherX}, ${otherY})', withLabel: true, label: {offset: [10, 5]}});
board.unsuspendUpdate();`;

  questions.push({
    id: `y9-11e-q1${q.sub}`,
    type: "teacher_review",
    difficulty: "easy",
    timeLimit: 30,
    question: `Sketch the graph of the line \\(${q.eqLatex}\\) by calculating the \\(y\\)-intercept and finding one other point.`,
    a: `Line with y-intercept at \\((0, ${yInt})\\) passing through \\((${otherX}, ${otherY})\\).`,
    solution: `To sketch the line \\(${q.eqLatex}\\):\n\n1. **Find the \\(y\\)-intercept** (set \\(x = 0\\)):\n   \\(y = ${q.isFrac ? `${formatFrac(q.mNum, q.mDen)}(0) + ${q.c}` : `${q.m}(0) + ${q.c}`} = ${yInt}\\)\n   So, the \\(y\\)-intercept is at \\((0, ${yInt})\\).\n\n2. **Find one other point** (substitute \\(x = 1\\)):\n   \\(y = ${q.isFrac ? `${formatFrac(q.mNum, q.mDen)}(1) + ${q.c}` : `${q.m}(1) + ${q.c}`} = ${otherY}\\)\n   So, another point on the line is \\((${otherX}, ${otherY})\\).\n\n3. Plot these two points and draw a straight line through them.`,
    t: "Sketching linear graphs",
    hint: "Substitute \\(x = 0\\) to find the \\(y\\)-intercept, then choose another value like \\(x = 1\\) to find a second point.",
    solutionSteps: [
      {
        explanation: "Calculate the y-intercept by setting x = 0.",
        workingOut: `x = 0 \\implies y = ${yInt}`
      },
      {
        explanation: "Find another point by setting x = 1.",
        workingOut: `x = 1 \\implies y = ${otherY}`
      },
      {
        explanation: "Draw a straight line through (0, y-intercept) and the second point.",
        workingOut: `\\text{Line passes through } (0, ${yInt}) \\text{ and } (1, ${otherY})`
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

// -------------------------------------------------------------
// Q2: Sketch the graph of equations passing through the origin (y = mx or ax + by = 0)
// Difficulty: easy, timeLimit: 30
// -------------------------------------------------------------
const q2Data = [
  { sub: 'a', eq: 'y = 5x', m: 5, c: 0, eqLatex: 'y = 5x' },
  { sub: 'b', eq: 'y = 3x', m: 3, c: 0, eqLatex: 'y = 3x' },
  { sub: 'c', eq: 'y = 4x', m: 4, c: 0, eqLatex: 'y = 4x' },
  { sub: 'd', eq: 'y = 1/3*x', m: 1/3, c: 0, eqLatex: 'y = \\frac{1}{3}x', isFrac: true, mNum: 1, mDen: 3 },
  { sub: 'e', eq: 'y = -3x', m: -3, c: 0, eqLatex: 'y = -3x' },
  { sub: 'f', eq: 'y = -2x', m: -2, c: 0, eqLatex: 'y = -2x' },
  { sub: 'g', eq: 'x + 3y = 0', m: -1/3, c: 0, eqLatex: 'x + 3y = 0', isImplicit: true },
  { sub: 'h', eq: '3x + y = 0', m: -3, c: 0, eqLatex: '3x + y = 0', isImplicit: true },
  { sub: 'i', eq: '3y - 2x = 0', m: 2/3, c: 0, eqLatex: '3y - 2x = 0', isImplicit: true },
  { sub: 'j', eq: '2x + y = 0', m: -2, c: 0, eqLatex: '2x + y = 0', isImplicit: true },
  { sub: 'k', eq: 'x/4 - y/3 = 0', m: 3/4, c: 0, eqLatex: '\\frac{x}{4} - \\frac{y}{3} = 0', isImplicit: true },
  { sub: 'l', eq: 'y/3 - x = 0', m: 3, c: 0, eqLatex: '\\frac{y}{3} - x = 0', isImplicit: true }
];

q2Data.forEach(q => {
  // Since they all pass through the origin (0, 0), let's use x = 0 (0, 0) and x = 3 (if fraction) or x = 1.
  const otherX = q.eq === 'y = 1/3*x' || q.eq === 'x + 3y = 0' || q.eq === '3y - 2x = 0' || q.eq === 'x/4 - y/3 = 0' || q.eq === 'y/3 - x = 0' ? 12 : 2;
  const otherY = q.m * otherX;
  const ptLabel = `(${otherX}, ${otherY})`;

  const xMin = Math.min(-5, -Math.abs(otherX) - 2);
  const xMax = Math.max(5, Math.abs(otherX) + 2);
  const yMin = Math.min(-5, -Math.abs(otherY) - 2);
  const yMax = Math.max(5, Math.abs(otherY) + 2);

  const padding = 1.5;
  const bbox = [xMin - padding, yMax + padding, xMax + padding, yMin - padding];

  const script = `board.suspendUpdate();
board.create('arrow', [[${bbox[0] + 0.5}, 0], [${bbox[2] - 0.5}, 0]], {strokeColor: 'black', strokeWidth: 1});
board.create('arrow', [[0, ${bbox[3] + 0.5}], [0, ${bbox[1] - 0.5}]], {strokeColor: 'black', strokeWidth: 1});
board.create('text', [${bbox[2] - 0.8}, -0.5, 'x'], {fontSize: 12});
board.create('text', [-0.5, ${bbox[1] - 0.8}, 'y'], {fontSize: 12});
board.create('line', [[0, 0], [${otherX}, ${otherY}]], {strokeColor: 'blue', strokeWidth: 2});
board.create('point', [0, 0], {size: 3, color: 'red', name: '(0, 0)', withLabel: true, label: {offset: [-15, -15]}});
board.create('point', [${otherX}, ${otherY}], {size: 3, color: 'red', name: '${ptLabel}', withLabel: true, label: {offset: [10, 5]}});
board.unsuspendUpdate();`;

  const workingOutSteps = [];
  if (q.isImplicit) {
    workingOutSteps.push({
      explanation: "Rearrange the equation to express y in terms of x.",
      workingOut: `y = ${formatFrac(Math.round(q.m*12), 12)}x`
    });
  }
  workingOutSteps.push({
    explanation: "Identify the origin (0, 0) as the y-intercept.",
    workingOut: "x = 0 \\implies y = 0"
  });
  workingOutSteps.push({
    explanation: `Find a second point by substituting x = ${otherX}.`,
    workingOut: `x = ${otherX} \\implies y = ${otherY}`
  });

  questions.push({
    id: `y9-11e-q2${q.sub}`,
    type: "teacher_review",
    difficulty: "easy",
    timeLimit: 30,
    question: `Sketch the graph of the line \\(${q.eqLatex}\\).`,
    a: `Line passing through the origin \\((0, 0)\\) and \\((${otherX}, ${otherY})\\).`,
    solution: `To sketch the line \\(${q.eqLatex}\\):\n\n1. **Recognise it passes through the origin**:\n   When \\(x = 0\\), \\(y = 0\\).\n   This gives our first point: \\((0, 0)\\).\n\n2. **Find a second point**:\n   Substitute \\(x = ${otherX}\\):\n   \\(y = ${formatFrac(Math.round(q.m*12), 12)} \\times ${otherX} = ${otherY}\\).\n   This gives our second point: \\((${otherX}, ${otherY})\\).\n\n3. Plot \\((0, 0)\\) and \\((${otherX}, ${otherY})\\) and draw a line through them.`,
    t: "Sketching linear graphs",
    hint: "This line passes through the origin. Find a second point by substituting a non-zero value for \\(x\\).",
    solutionSteps: workingOutSteps,
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

// -------------------------------------------------------------
// Q3: Sketch the graph by finding x- and y-intercepts
// Difficulty: medium, timeLimit: 90
// -------------------------------------------------------------
const q3Data = [
  { sub: 'a', eq: '3x + y = 6', aCoef: 3, bCoef: 1, const: 6, eqLatex: '3x + y = 6' },
  { sub: 'b', eq: 'x + 2y = 4', aCoef: 1, bCoef: 2, const: 4, eqLatex: 'x + 2y = 4' },
  { sub: 'c', eq: '2x + 5y = 10', aCoef: 2, bCoef: 5, const: 10, eqLatex: '2x + 5y = 10' },
  { sub: 'd', eq: '3x + 2y = 6', aCoef: 3, bCoef: 2, const: 6, eqLatex: '3x + 2y = 6' },
  { sub: 'e', eq: 'x + 3y = 3', aCoef: 1, bCoef: 3, const: 3, eqLatex: 'x + 3y = 3' },
  { sub: 'f', eq: '2x + y = 4', aCoef: 2, bCoef: 1, const: 4, eqLatex: '2x + y = 4' },
  { sub: 'g', eq: 'x - y = 3', aCoef: 1, bCoef: -1, const: 3, eqLatex: 'x - y = 3' },
  { sub: 'h', eq: 'x - y = 2', aCoef: 1, bCoef: -1, const: 2, eqLatex: 'x - y = 2' },
  { sub: 'i', eq: '4x - y = 4', aCoef: 4, bCoef: -1, const: 4, eqLatex: '4x - y = 4' },
  { sub: 'j', eq: 'x - 3y = 6', aCoef: 1, bCoef: -3, const: 6, eqLatex: 'x - 3y = 6' },
  { sub: 'k', eq: '3x - 2y = 6', aCoef: 3, bCoef: -2, const: 6, eqLatex: '3x - 2y = 6' },
  { sub: 'l', eq: '2x - 3y = 6', aCoef: 2, bCoef: -3, const: 6, eqLatex: '2x - 3y = 6' },
  { sub: 'm', eq: '2y - x = 6', aCoef: -1, bCoef: 2, const: 6, eqLatex: '2y - x = 6' },
  { sub: 'n', eq: '3y - 2x = 6', aCoef: -2, bCoef: 3, const: 6, eqLatex: '3y - 2x = 6' },
  { sub: 'o', eq: 'x/3 + y/2 = 1', aCoef: 4, bCoef: 6, const: 12, eqLatex: '\\frac{x}{3} + \\frac{y}{2} = 1', isFrac: true, xInt: 3, yInt: 2 },
  { sub: 'p', eq: 'x/2 - y/5 = 1', aCoef: 5, bCoef: -2, const: 10, eqLatex: '\\frac{x}{2} - \\frac{y}{5} = 1', isFrac: true, xInt: 2, yInt: -5 },
  { sub: 'q', eq: '3x/4 - 2y/3 = 2', aCoef: 9, bCoef: -8, const: 24, eqLatex: '\\frac{3x}{4} - \\frac{2y}{3} = 2', isFrac: true, xInt: 8/3, yInt: -3 },
  { sub: 'r', eq: 'x/5 + 3y/2 = 3', aCoef: 2, bCoef: 15, const: 30, eqLatex: '\\frac{x}{5} + \\frac{3y}{2} = 3', isFrac: true, xInt: 15, yInt: 2 }
];

q3Data.forEach(q => {
  let xInt, yInt;
  if (q.isFrac) {
    xInt = q.xInt;
    yInt = q.yInt;
  } else {
    xInt = q.const / q.aCoef;
    yInt = q.const / q.bCoef;
  }

  const xMin = Math.min(-4, xInt - 2);
  const xMax = Math.max(4, xInt + 2);
  const yMin = Math.min(-4, yInt - 2);
  const yMax = Math.max(4, yInt + 2);

  const padding = 1.5;
  const bbox = [xMin - padding, yMax + padding, xMax + padding, yMin - padding];

  const script = `board.suspendUpdate();
board.create('arrow', [[${bbox[0] + 0.5}, 0], [${bbox[2] - 0.5}, 0]], {strokeColor: 'black', strokeWidth: 1});
board.create('arrow', [[0, ${bbox[3] + 0.5}], [0, ${bbox[1] - 0.5}]], {strokeColor: 'black', strokeWidth: 1});
board.create('text', [${bbox[2] - 0.8}, -0.5, 'x'], {fontSize: 12});
board.create('text', [-0.5, ${bbox[1] - 0.8}, 'y'], {fontSize: 12});
board.create('line', [[${xInt}, 0], [0, ${yInt}]], {strokeColor: 'blue', strokeWidth: 2});
board.create('point', [${xInt}, 0], {size: 3, color: 'red', name: '(${xInt.toFixed(1).replace('.0','')}, 0)', withLabel: true, label: {offset: [5, 10]}});
board.create('point', [0, ${yInt}], {size: 3, color: 'red', name: '(0, ${yInt.toFixed(1).replace('.0','')})', withLabel: true, label: {offset: [10, 5]}});
board.unsuspendUpdate();`;

  questions.push({
    id: `y9-11e-q3${q.sub}`,
    type: "teacher_review",
    difficulty: "medium",
    timeLimit: 90,
    question: `Sketch the graph of the line \\(${q.eqLatex}\\) by calculating the coordinates of the \\(x\\)- and \\(y\\)-intercepts.`,
    a: `Line with x-intercept at \\((${xInt.toFixed(1).replace('.0','')}, 0)\\) and y-intercept at \\((0, ${yInt.toFixed(1).replace('.0','')})\\).`,
    solution: `To sketch the line \\(${q.eqLatex}\\) using intercepts:\n\n1. **Find the \\(y\\)-intercept** (set \\(x = 0\\)):\n   Substitute \\(x = 0\\):\n   \\(y = ${yInt.toFixed(1).replace('.0','')}\\).\n   So, the \\(y\\)-intercept is \\((0, ${yInt.toFixed(1).replace('.0','')})\\).\n\n2. **Find the \\(x\\)-intercept** (set \\(y = 0\\)):\n   Substitute \\(y = 0\\):\n   \\(x = ${xInt.toFixed(1).replace('.0','')}\\).\n   So, the \\(x\\)-intercept is \\((${xInt.toFixed(1).replace('.0','')}, 0)\\).\n\n3. Plot \\((0, ${yInt.toFixed(1).replace('.0','')})\\) and \\((${xInt.toFixed(1).replace('.0','')}, 0)\\) and draw a line through them.`,
    t: "Sketching linear graphs",
    hint: "Set \\(x = 0\\) to find the \\(y\\)-intercept, and set \\(y = 0\\) to find the \\(x\\)-intercept.",
    solutionSteps: [
      {
        explanation: "Calculate the y-intercept by setting x = 0.",
        workingOut: `x = 0 \\implies y = ${yInt.toFixed(1).replace('.0','')}`
      },
      {
        explanation: "Calculate the x-intercept by setting y = 0.",
        workingOut: `y = 0 \\implies x = ${xInt.toFixed(1).replace('.0','')}`
      },
      {
        explanation: "Draw a straight line passing through both intercepts.",
        workingOut: `\\text{Line passes through } (0, ${yInt.toFixed(1).replace('.0','')}) \\text{ and } (${xInt.toFixed(1).replace('.0','')}, 0)`
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

// -------------------------------------------------------------
// Q4: Sketch the graph of horizontal and vertical lines (y = k or x = k)
// Difficulty: medium, timeLimit: 90
// -------------------------------------------------------------
const q4Data = [
  { sub: 'a', eq: 'y = 4', val: 4, isHorizontal: true, eqLatex: 'y = 4' },
  { sub: 'b', eq: 'x = -2', val: -2, isHorizontal: false, eqLatex: 'x = -2' },
  { sub: 'c', eq: 'x + 3 = 0', val: -3, isHorizontal: false, eqLatex: 'x + 3 = 0' },
  { sub: 'd', eq: 'y - 4 = 0', val: 4, isHorizontal: true, eqLatex: 'y - 4 = 0' },
  { sub: 'e', eq: '5 - y = 0', val: 5, isHorizontal: true, eqLatex: '5 - y = 0' },
  { sub: 'f', eq: '6 + x = 0', val: -6, isHorizontal: false, eqLatex: '6 + x = 0' }
];

q4Data.forEach(q => {
  const isH = q.isHorizontal;
  const val = q.val;

  const xMin = isH ? -6 : Math.min(-6, val - 2);
  const xMax = isH ? 6 : Math.max(6, val + 2);
  const yMin = isH ? Math.min(-6, val - 2) : -6;
  const yMax = isH ? Math.max(6, val + 2) : 6;

  const padding = 1.5;
  const bbox = [xMin - padding, yMax + padding, xMax + padding, yMin - padding];

  const lineScript = isH 
    ? `board.create('line', [[-10, ${val}], [10, ${val}]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [0, ${val}], {size: 3, color: 'red', name: '(0, ${val})', withLabel: true, label: {offset: [10, 5]}});`
    : `board.create('line', [[${val}, -10], [${val}, 10]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [${val}, 0], {size: 3, color: 'red', name: '(${val}, 0)', withLabel: true, label: {offset: [5, 10]}});`;

  const script = `board.suspendUpdate();
board.create('arrow', [[${bbox[0] + 0.5}, 0], [${bbox[2] - 0.5}, 0]], {strokeColor: 'black', strokeWidth: 1});
board.create('arrow', [[0, ${bbox[3] + 0.5}], [0, ${bbox[1] - 0.5}]], {strokeColor: 'black', strokeWidth: 1});
board.create('text', [${bbox[2] - 0.8}, -0.5, 'x'], {fontSize: 12});
board.create('text', [-0.5, ${bbox[1] - 0.8}, 'y'], {fontSize: 12});
${lineScript}
board.unsuspendUpdate();`;

  questions.push({
    id: `y9-11e-q4${q.sub}`,
    type: "teacher_review",
    difficulty: "medium",
    timeLimit: 90,
    question: `Sketch the graph of the line \\(${q.eqLatex}\\).`,
    a: isH ? `Horizontal line at y = ${val}.` : `Vertical line at x = ${val}.`,
    solution: `To sketch the line \\(${q.eqLatex}\\):\n\n1. **Simplify the equation** (if necessary):\n   \\(${q.eqLatex}\\) simplifies to \\(${isH ? 'y' : 'x'} = ${val}\\).\n\n2. **Identify the nature of the line**:\n   - An equation of the form \\(y = k\\) is a **horizontal line** where every point has a \\(y\\)-coordinate of \\(k\\).\n   - An equation of the form \\(x = k\\) is a **vertical line** where every point has an \\(x\\)-coordinate of \\(k\\).\n\n3. Draw the straight ${isH ? 'horizontal' : 'vertical'} line passing through ${isH ? `(0, ${val})` : `(${val}, 0)`}.`,
    t: "Sketching linear graphs",
    hint: `Rearrange the equation if needed. Remember that \\(y = k\\) is a horizontal line and \\(x = k\\) is a vertical line.`,
    solutionSteps: [
      {
        explanation: "Rearrange the equation to express x or y directly.",
        workingOut: `${isH ? 'y' : 'x'} = ${val}`
      },
      {
        explanation: `Draw a ${isH ? 'horizontal' : 'vertical'} line representing the equation.`,
        workingOut: `\\text{Line passes through } ${isH ? `(0, ${val})` : `(${val}, 0)`}`
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

// Write to file
const fileContent = `export const Y9_CH11E_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(targetFile, fileContent, 'utf-8');
console.log("Successfully generated seedYear9Ch11EQuestions.js!");
