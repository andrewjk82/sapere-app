const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '../src/constants/seedYear9Ch11FQuestions.js');

const questions = [];

// Q1: Find the equation of the line that passes through point and has gradient
// difficulty: easy, timeLimit: 30
const q1Data = [
  { sub: 'a', x: 1, y: 4, m: 2, mText: '2', eq: 'y = 2x + 2' },
  { sub: 'b', x: 2, y: 5, m: 3, mText: '3', eq: 'y = 3x - 1' },
  { sub: 'c', x: -1, y: 2, m: 5, mText: '5', eq: 'y = 5x + 7' },
  { sub: 'd', x: -2, y: -5, m: 3, mText: '3', eq: 'y = 3x + 1' },
  { sub: 'e', x: -1, y: 4, m: 1/2, mText: '\\frac{1}{2}', eq: 'y = \\frac{1}{2}x + \\frac{9}{2}', isFrac: true, mNum: 1, mDen: 2, cNum: 9, cDen: 2 },
  { sub: 'f', x: 3, y: -2, m: 2/3, mText: '\\frac{2}{3}', eq: 'y = \\frac{2}{3}x - 4', isFrac: true, mNum: 2, mDen: 3, cNum: -4, cDen: 1 },
  { sub: 'g', x: -2, y: 0, m: -1/3, mText: '-\\frac{1}{3}', eq: 'y = -\\frac{1}{3}x - \\frac{2}{3}', isFrac: true, mNum: -1, mDen: 3, cNum: -2, cDen: 3 },
  { sub: 'h', x: -1, y: -3, m: -2/5, mText: '-\\frac{2}{5}', eq: 'y = -\\frac{2}{5}x - \\frac{17}{5}', isFrac: true, mNum: -2, mDen: 5, cNum: -17, cDen: 5 }
];

q1Data.forEach(q => {
  questions.push({
    id: `y9-11f-q1${q.sub}`,
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 30,
    question: `Find the equation of the line that passes through the point \\((${q.x}, ${q.y})\\) and has gradient \\(${q.mText}\\).`,
    a: q.eq,
    solution: `Using point-gradient form \\(y - y_1 = m(x - x_1)\\) with point \\((${q.x}, ${q.y})\\) and \\(m = ${q.mText}\\):\n\n\\(y - ${q.y < 0 ? `(${q.y})` : q.y} = ${q.mText}(x - ${q.x < 0 ? `(${q.x})` : q.x})\\)\n\\(y ${q.y < 0 ? '+' : '-'} ${Math.abs(q.y)} = ${q.mText}(x ${q.x < 0 ? '+' : '-'} ${Math.abs(q.x)})\\)\n\nSimplifying to slope-intercept form:\n\\(${q.eq}\\).`,
    t: "The equation of a line using the gradient and a point",
    hint: "Use point-gradient form \\(y - y_1 = m(x - x_1)\\). Make sure to simplify to the final form \\(y = mx + c\\).",
    solutionSteps: [
      {
        explanation: "Substitute point and gradient into the formula.",
        workingOut: `y - ${q.y} = ${q.mText}(x - ${q.x})`
      },
      {
        explanation: "Expand and simplify.",
        workingOut: `${q.eq}`
      }
    ],
    graphData: null
  });
});

// Q2: Line l has equation y = 2x + 6
// a) What is the y-intercept of l?
// b) What is the gradient of l?
// c) Find the equation of the line with same y-intercept but gradient 1/3
// d) Find the equation of the line with same gradient but y-intercept -4
const q2Data = [
  { sub: 'a', q: "What is the \\(y\\)-intercept of the line \\(\\ell: y = 2x + 6\\)?", a: "6", sol: "By comparing \\(y = 2x + 6\\) to \\(y = mx + c\\), the \\(y\\)-intercept is \\(c = 6\\)." },
  { sub: 'b', q: "What is the gradient of the line \\(\\ell: y = 2x + 6\\)?", a: "2", sol: "By comparing \\(y = 2x + 6\\) to \\(y = mx + c\\), the gradient is \\(m = 2\\)." },
  { sub: 'c', q: "Find the equation of the line that has the same \\(y\\)-intercept as \\(\\ell: y = 2x + 6\\) but has a gradient of \\(\\frac{1}{3}\\).", a: "y = \\frac{1}{3}x + 6", sol: "The \\(y\\)-intercept is \\(6\\) and gradient is \\(\\frac{1}{3}\\). Substituting into \\(y = mx + c\\) gives \\(y = \\frac{1}{3}x + 6\\)." },
  { sub: 'd', q: "Find the equation of the line that has the same gradient as \\(\\ell: y = 2x + 6\\) but has a \\(y\\)-intercept of \\(-4\\).", a: "y = 2x - 4", sol: "The gradient is \\(2\\) and \\(y\\)-intercept is \\(-4\\). Substituting into \\(y = mx + c\\) gives \\(y = 2x - 4\\)." }
];

q2Data.forEach(q => {
  questions.push({
    id: `y9-11f-q2${q.sub}`,
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 30,
    question: q.q,
    a: q.a,
    solution: q.sol,
    t: "The equation of a line using the gradient and a point",
    hint: "Identify the gradient \\(m\\) and y-intercept \\(c\\) from \\(y = mx + c\\) to answer the sub-questions.",
    solutionSteps: [
      {
        explanation: "Analyze gradient and intercept parameters.",
        workingOut: "y = 2x + 6 \\implies m = 2, \\quad c = 6"
      }
    ],
    graphData: null
  });
});

// Q3: Line passes through A(2, 4) and B(5, 13)
// a) Find gradient of AB
// b) Using gradient and point A, find eq of AB
// c) Using gradient and point B, find eq of AB
const q3Data = [
  { sub: 'a', q: "Find the gradient of the interval \\(AB\\) where \\(A(2, 4)\\) and \\(B(5, 13)\\).", a: "3", sol: "Using gradient formula:\n\\(m = \\frac{13 - 4}{5 - 2} = \\frac{9}{3} = 3\\)." },
  { sub: 'b', q: "Using the gradient and point \\(A(2, 4)\\), find the equation of the line \\(AB\\).", a: "y = 3x - 2", sol: "Substituting \\(m = 3\\) and \\((2, 4)\\) into Point-Slope form:\n\\(y - 4 = 3(x - 2) \\implies y - 4 = 3x - 6 \\implies y = 3x - 2\\)." },
  { sub: 'c', q: "Using the gradient and point \\(B(5, 13)\\), find the equation of the line \\(AB\\).", a: "y = 3x - 2", sol: "Substituting \\(m = 3\\) and \\((5, 13)\\) into Point-Slope form:\n\\(y - 13 = 3(x - 5) \\implies y - 13 = 3x - 15 \\implies y = 3x - 2\\)." }
];

q3Data.forEach(q => {
  questions.push({
    id: `y9-11f-q3${q.sub}`,
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 30,
    question: q.q,
    a: q.a,
    solution: q.sol,
    t: "The equation of a line using the gradient and a point",
    hint: "Use coordinates to compute the gradient, then apply the point-gradient formula using either point.",
    solutionSteps: [
      {
        explanation: "Apply coordinates into calculations.",
        workingOut: "A(2, 4), \\quad B(5, 13)"
      }
    ],
    graphData: null
  });
});

// Q4: Find the equation of the line through each pair of points
// difficulty: easy, timeLimit: 30
const q4Data = [
  { sub: 'a', x1: 4, y1: 5, x2: 1, y2: -1, eq: 'y = 2x - 3', m: 2 },
  { sub: 'b', x1: 3, y1: 2, x2: 5, y2: 8, eq: 'y = 3x - 7', m: 3 },
  { sub: 'c', x1: 2, y1: 3, x2: 3, y2: 5, eq: 'y = 2x - 1', m: 2 },
  { sub: 'd', x1: -2, y1: 5, x2: 1, y2: -4, eq: 'y = -3x - 1', m: -3 },
  { sub: 'e', x1: -1, y1: 5, x2: 2, y2: -7, eq: 'y = -4x + 1', m: -4 },
  { sub: 'f', x1: -2, y1: -3, x2: 2, y2: 5, eq: 'y = 2x + 1', m: 2 }
];

q4Data.forEach(q => {
  questions.push({
    id: `y9-11f-q4${q.sub}`,
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 30,
    question: `Find the equation of the line passing through points \\(A(${q.x1}, ${q.y1})\\) and \\(B(${q.x2}, ${q.y2})\\).`,
    a: q.eq,
    solution: `1. **Calculate the gradient**:\n   \\(m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{${q.y2} - ${q.y1 < 0 ? `(${q.y1})` : q.y1}}{${q.x2} - ${q.x1 < 0 ? `(${q.x1})` : q.x1}} = \\frac{${q.y2 - q.y1}}{${q.x2 - q.x1}} = ${q.m}\\).\n\n2. **Apply point-gradient form** with point \\(A(${q.x1}, ${q.y1})\\):\n   \\(y - ${q.y1 < 0 ? `(${q.y1})` : q.y1} = ${q.m}(x - ${q.x1 < 0 ? `(${q.x1})` : q.x1})\\)\n   \\(y = ${q.eq.replace('y = ', '')}\\).`,
    t: "The equation of a line using the gradient and a point",
    hint: "First find the gradient using the two points, then apply the point-gradient formula using one of the points.",
    solutionSteps: [
      {
        explanation: "Find the gradient of the line.",
        workingOut: `m = \\frac{${q.y2} - ${q.y1}}{${q.x2} - ${q.x1}} = ${q.m}`
      },
      {
        explanation: "Apply point-gradient form with one of the points.",
        workingOut: `y - ${q.y1} = ${q.m}(x - ${q.x1}) \\implies ${q.eq}`
      }
    ],
    graphData: null
  });
});

// Q5: Consider interval AB with endpoints A(-2, -5) and B(4, 7)
// difficulty: medium, timeLimit: 90
questions.push({
  id: "y9-11f-q5",
  type: "teacher_review",
  difficulty: "medium",
  timeLimit: 90,
  question: "Consider the interval \\(AB\\) with endpoints \\(A(-2, -5)\\) and \\(B(4, 7)\\). Answer the following sub-questions.",
  a: "a) m = 2, b) C(1, 1), c) y = -1/2x + 3/2, d) D(0, 1.5), e) CD = \\sqrt{1.25} = \\frac{\\sqrt{5}}{2}",
  solution: "a) Gradient: \\(m = \\frac{7 - (-5)}{4 - (-2)} = \\frac{12}{6} = 2\\).\n\nb) Midpoint \\(C\\): \\(\\left(\\frac{-2+4}{2}, \\frac{-5+7}{2}\\right) = (1, 1)\\).\n\nc) Equation of line through \\(C(1, 1)\\) with gradient \\(-\\frac{1}{2}\\):\n   \\(y - 1 = -\\frac{1}{2}(x - 1) \\implies y = -\\frac{1}{2}x + \\frac{3}{2}\\).\n\nd) Y-intercept \\(D\\) of this line (set \\(x = 0\\)): \\(y = \\frac{3}{2} = 1.5 \\implies D(0, 1.5)\\).\n\ne) Distance \\(CD\\): \\(\\sqrt{(0 - 1)^2 + (1.5 - 1)^2} = \\sqrt{1 + 0.25} = \\sqrt{1.25} = \\frac{\\sqrt{5}}{2}\\).",
  t: "The equation of a line using the gradient and a point",
  hint: "Use gradient, midpoint, point-slope, y-intercept, and distance formulas step by step.",
  graphData: {
    jsxGraph: {
      width: 350,
      height: 350,
      boundingbox: [-4, 9, 6, -7],
      showConstructionPoints: true,
      boardOptions: {
        axis: true,
        grid: true
      },
      script: `board.suspendUpdate();
var pA = board.create('point', [-2, -5], {size: 3, color: 'black', name: 'A(-2, -5)', withLabel: true, label: {offset: [-20, -10]}});
var pB = board.create('point', [4, 7], {size: 3, color: 'black', name: 'B(4, 7)', withLabel: true, label: {offset: [10, 10]}});
board.create('segment', [pA, pB], {strokeColor: 'black', strokeWidth: 1.5});
var pC = board.create('point', [1, 1], {size: 3, color: 'blue', name: 'C(1, 1)', withLabel: true, label: {offset: [10, 10]}});
board.create('line', [[1, 1], [0, 1.5]], {strokeColor: 'red', strokeWidth: 1.5, strokeDasharray: '6 4'});
var pD = board.create('point', [0, 1.5], {size: 3, color: 'red', name: 'D(0, 1.5)', withLabel: true, label: {offset: [-35, 10]}});
board.unsuspendUpdate();`
    }
  },
  subQuestions: [
    {
      id: "y9-11f-q5a",
      type: "short_answer",
      difficulty: "medium",
      timeLimit: 90,
      question: "a) Find the gradient of \\(AB\\).",
      a: "2",
      solutionSteps: [
        {
          explanation: "Apply endpoints to the gradient formula.",
          workingOut: "m = \\frac{7 - (-5)}{4 - (-2)} = 2"
        }
      ]
    },
    {
      id: "y9-11f-q5b",
      type: "short_answer",
      difficulty: "medium",
      timeLimit: 90,
      question: "b) Find the coordinates of \\(C\\), the midpoint of interval \\(AB\\).",
      a: "(1, 1)",
      solutionSteps: [
        {
          explanation: "Calculate average of coordinates.",
          workingOut: "C = \\left(\\frac{-2+4}{2}, \\frac{-5+7}{2}\\right) = (1, 1)"
        }
      ]
    },
    {
      id: "y9-11f-q5c",
      type: "short_answer",
      difficulty: "medium",
      timeLimit: 90,
      question: "c) Find the equation of the line that passes through \\(C\\) with gradient \\(-\\frac{1}{2}\\).",
      a: "y = -1/2x + 3/2",
      solutionSteps: [
        {
          explanation: "Use point-slope form with midpoint C(1, 1).",
          workingOut: "y - 1 = -\\frac{1}{2}(x - 1) \\implies y = -\\frac{1}{2}x + \\frac{3}{2}"
        }
      ]
    },
    {
      id: "y9-11f-q5d",
      type: "short_answer",
      difficulty: "medium",
      timeLimit: 90,
      question: "d) What are the coordinates of the point \\(D\\), where the line intersects the \\(y\\)-axis?",
      a: "(0, 1.5)",
      solutionSteps: [
        {
          explanation: "Substitute x = 0 into the equation.",
          workingOut: "x = 0 \\implies y = 1.5 \\implies D(0, 1.5)"
        }
      ]
    },
    {
      id: "y9-11f-q5e",
      type: "short_answer",
      difficulty: "medium",
      timeLimit: 90,
      question: "e) How far is the point \\(C\\) from the point \\(D\\)?",
      a: "\\sqrt{1.25}",
      solutionSteps: [
        {
          explanation: "Apply the distance formula between C(1, 1) and D(0, 1.5).",
          workingOut: "CD = \\sqrt{(0-1)^2 + (1.5-1)^2} = \\sqrt{1 + 0.25} = \\sqrt{1.25}"
        }
      ]
    }
  ]
});

// Q6: Consider the interval AB with endpoints A(2, -3) and B(3, 4)
// difficulty: medium, timeLimit: 90
questions.push({
  id: "y9-11f-q6",
  type: "teacher_review",
  difficulty: "medium",
  timeLimit: 90,
  question: "Consider the interval \\(AB\\) with endpoints \\(A(2, -3)\\) and \\(B(3, 4)\\). Answer the following sub-questions.",
  a: "a) y = 2x - 7, b) D(0, -7), c) m = 11/3, d) y = 11/3x - 7",
  solution: "a) Equation of line through \\(A(2, -3)\\) with gradient \\(2\\):\n   \\(y - (-3) = 2(x - 2) \\implies y + 3 = 2x - 4 \\implies y = 2x - 7\\).\n\nb) Y-intercept \\(D\\) of this line (set \\(x = 0\\)): \\(D(0, -7)\\).\n\nc) Gradient of \\(BD\\) where \\(B(3, 4)\\) and \\(D(0, -7)\\):\n   \\(m_{BD} = \\frac{4 - (-7)}{3 - 0} = \\frac{11}{3}\\).\n\nd) Equation of line \\(BD\\) (with y-intercept at \\(-7\\)):\n   \\(y = \\frac{11}{3}x - 7\\).",
  t: "The equation of a line using the gradient and a point",
  hint: "Find equations using point-slope and slope-intercept form, then find y-intercept and new gradients.",
  graphData: {
    jsxGraph: {
      width: 350,
      height: 350,
      boundingbox: [-3, 6, 5, -9],
      showConstructionPoints: true,
      boardOptions: {
        axis: true,
        grid: true
      },
      script: `board.suspendUpdate();
var pA = board.create('point', [2, -3], {size: 3, color: 'black', name: 'A(2, -3)', withLabel: true, label: {offset: [-10, -10]}});
var pB = board.create('point', [3, 4], {size: 3, color: 'black', name: 'B(3, 4)', withLabel: true, label: {offset: [10, 10]}});
board.create('line', [[2, -3], [0, -7]], {strokeColor: 'blue', strokeWidth: 1.5});
board.create('line', [[3, 4], [0, -7]], {strokeColor: 'red', strokeWidth: 1.5, strokeDasharray: '6 4'});
var pD = board.create('point', [0, -7], {size: 3, color: 'red', name: 'D(0, -7)', withLabel: true, label: {offset: [10, 0]}});
board.unsuspendUpdate();`
    }
  },
  subQuestions: [
    {
      id: "y9-11f-q6a",
      type: "short_answer",
      difficulty: "medium",
      timeLimit: 90,
      question: "a) Find the equation of the line that passes through \\(A\\) with gradient 2.",
      a: "y = 2x - 7",
      solutionSteps: [
        {
          explanation: "Use point-slope form with A(2, -3) and m = 2.",
          workingOut: "y - (-3) = 2(x - 2) \\implies y = 2x - 7"
        }
      ]
    },
    {
      id: "y9-11f-q6b",
      type: "short_answer",
      difficulty: "medium",
      timeLimit: 90,
      question: "b) Find the coordinates of \\(D\\), the point where this line crosses the \\(y\\)-axis.",
      a: "(0, -7)",
      solutionSteps: [
        {
          explanation: "Set x = 0 in the equation.",
          workingOut: "x = 0 \\implies y = -7 \\implies D(0, -7)"
        }
      ]
    },
    {
      id: "y9-11f-q6c",
      type: "short_answer",
      difficulty: "medium",
      timeLimit: 90,
      question: "c) Find the gradient of the line \\(BD\\).",
      a: "11/3",
      solutionSteps: [
        {
          explanation: "Calculate gradient between B(3, 4) and D(0, -7).",
          workingOut: "m = \\frac{4 - (-7)}{3 - 0} = \\frac{11}{3}"
        }
      ]
    },
    {
      id: "y9-11f-q6d",
      type: "short_answer",
      difficulty: "medium",
      timeLimit: 90,
      question: "d) Find the equation of the line \\(BD\\).",
      a: "y = 11/3x - 7",
      solutionSteps: [
        {
          explanation: "Use slope-intercept form with gradient 11/3 and y-intercept -7.",
          workingOut: "y = \\frac{11}{3}x - 7"
        }
      ]
    }
  ]
});

// Q7: A hiker wishes to hike from base camp B to water W
// coordinates of B and W are (3, 6) and (9, 18) respectively
// difficulty: medium, timeLimit: 90
questions.push({
  id: "y9-11f-q7",
  type: "teacher_review",
  difficulty: "medium",
  timeLimit: 90,
  question: "A hiker wishes to hike from his base camp \\(B\\) to a water supply located at point \\(W\\). Relative to a fixed origin, the coordinates of \\(B\\) and \\(W\\) are \\((3, 6)\\) and \\((9, 18)\\) respectively. Distances are measured in kilometres.",
  a: "a) 6\\sqrt{5} km, b) 2, c) y = 2x, d) (6, 12)",
  solution: "a) Distance: \\(\\sqrt{(9-3)^2 + (18-6)^2} = \\sqrt{6^2 + 12^2} = \\sqrt{36 + 144} = \\sqrt{180} = 6\\sqrt{5} \\approx 13.42\\text{ km}\\).\n\nb) Gradient of \\(BW\\): \\(m = \\frac{18 - 6}{9 - 3} = \\frac{12}{6} = 2\\).\n\nc) Line equation through \\(B(3, 6)\\) with gradient \\(2\\):\n   \\(y - 6 = 2(x - 3) \\implies y - 6 = 2x - 6 \\implies y = 2x\\).\n\nd) Midpoint: \\(\\left(\\frac{3+9}{2}, \\frac{6+18}{2}\\right) = (6, 12)\\).",
  t: "The equation of a line using the gradient and a point",
  hint: "Use distance formula, gradient formula, point-gradient formula, and midpoint formula.",
  graphData: {
    jsxGraph: {
      width: 350,
      height: 350,
      boundingbox: [-2, 21, 11, -2],
      showConstructionPoints: true,
      boardOptions: {
        axis: true,
        grid: true
      },
      script: `board.suspendUpdate();
var pB = board.create('point', [3, 6], {size: 3, color: 'black', name: 'B(3, 6)', withLabel: true, label: {offset: [-15, -15]}});
var pW = board.create('point', [9, 18], {size: 3, color: 'black', name: 'W(9, 18)', withLabel: true, label: {offset: [10, 5]}});
board.create('segment', [pB, pW], {strokeColor: 'blue', strokeWidth: 2});
var pM = board.create('point', [6, 12], {size: 3, color: 'red', name: 'M(6, 12)', withLabel: true, label: {offset: [-20, 10]}});
board.unsuspendUpdate();`
    }
  },
  subQuestions: [
    {
      id: "y9-11f-q7a",
      type: "short_answer",
      difficulty: "medium",
      timeLimit: 90,
      question: "a) How far is \\(W\\) from \\(B\\)? Give answer in simplified surd form.",
      a: "6\\sqrt{5}",
      solutionSteps: [
        {
          explanation: "Use distance formula.",
          workingOut: "d = \\sqrt{(9-3)^2 + (18-6)^2} = \\sqrt{180} = 6\\sqrt{5}"
        }
      ]
    },
    {
      id: "y9-11f-q7b",
      type: "short_answer",
      difficulty: "medium",
      timeLimit: 90,
      question: "b) What is the gradient of the interval \\(BW\\)?",
      a: "2",
      solutionSteps: [
        {
          explanation: "Compute rise over run.",
          workingOut: "m = \\frac{18 - 6}{9 - 3} = 2"
        }
      ]
    },
    {
      id: "y9-11f-q7c",
      type: "short_answer",
      difficulty: "medium",
      timeLimit: 90,
      question: "c) The hiker walks in a straight line from \\(B\\) to \\(W\\). Find the equation of this line.",
      a: "y = 2x",
      solutionSteps: [
        {
          explanation: "Use point-gradient form.",
          workingOut: "y - 6 = 2(x - 3) \\implies y = 2x"
        }
      ]
    },
    {
      id: "y9-11f-q7d",
      type: "short_answer",
      difficulty: "medium",
      timeLimit: 90,
      question: "d) What are the coordinates of the point halfway between \\(B\\) and \\(W\\)?",
      a: "(6, 12)",
      solutionSteps: [
        {
          explanation: "Find midpoint coordinates.",
          workingOut: "M = \\left(\\frac{3+9}{2}, \\frac{6+18}{2}\\right) = (6, 12)"
        }
      ]
    }
  ]
});

// Q8: The quadrilateral ABCD has vertices A(2, 3), B(6, 7), C(9, 1), D(7, -3)
// difficulty: medium, timeLimit: 90
questions.push({
  id: "y9-11f-q8",
  type: "teacher_review",
  difficulty: "medium",
  timeLimit: 90,
  question: "The quadrilateral \\(ABCD\\) has vertices \\(A(2, 3)\\), \\(B(6, 7)\\), \\(C(9, 1)\\), and \\(D(7, -3)\\). Answer the following sub-questions.",
  a: "a) M(4, 5), b) N(8, -1), c) m = -1.5, d) y = -3/2x + 11, e) P(5.5, 2), f) y = 3x - 14.5",
  solution: "a) Midpoint \\(M\\) of \\(AB\\): \\(\\left(\\frac{2+6}{2}, \\frac{3+7}{2}\\right) = (4, 5)\\).\n\nb) Midpoint \\(N\\) of \\(CD\\): \\(\\left(\\frac{9+7}{2}, \\frac{1-3}{2}\\right) = (8, -1)\\).\n\nc) Gradient of \\(MN\\): \\(m = \\frac{-1 - 5}{8 - 4} = -\\frac{6}{4} = -\\frac{3}{2} = -1.5\\).\n\nd) Equation of \\(MN\\) through \\(M(4, 5)\\) with gradient \\(-\\frac{3}{2}\\):\n   \\(y - 5 = -\\frac{3}{2}(x - 4) \\implies y = -\\frac{3}{2}x + 11\\).\n\ne) Midpoint \\(P\\) of \\(AC\\): \\(\\left(\\frac{2+9}{2}, \\frac{3+1}{2}\\right) = (5.5, 2)\\).\n\nf) Equation of line through \\(P(5.5, 2)\\) with gradient 3:\n   \\(y - 2 = 3(x - 5.5) \\implies y - 2 = 3x - 16.5 \\implies y = 3x - 14.5\\).",
  t: "The equation of a line using the gradient and a point",
  hint: "Determine the coordinates of midpoints first, then find the equations of lines using the coordinates and gradients.",
  graphData: {
    jsxGraph: {
      width: 350,
      height: 350,
      boundingbox: [0, 9, 11, -5],
      showConstructionPoints: true,
      boardOptions: {
        axis: true,
        grid: true
      },
      script: `board.suspendUpdate();
var pA = board.create('point', [2, 3], {size: 3, color: 'black', name: 'A(2, 3)', withLabel: true, label: {offset: [-20, 10]}});
var pB = board.create('point', [6, 7], {size: 3, color: 'black', name: 'B(6, 7)', withLabel: true, label: {offset: [10, 10]}});
var pC = board.create('point', [9, 1], {size: 3, color: 'black', name: 'C(9, 1)', withLabel: true, label: {offset: [10, -5]}});
var pD = board.create('point', [7, -3], {size: 3, color: 'black', name: 'D(7, -3)', withLabel: true, label: {offset: [-15, -15]}});
board.create('polygon', [pA, pB, pC, pD], {fillColor: 'none', borders: {strokeColor: 'black', strokeWidth: 1}});
var pM = board.create('point', [4, 5], {size: 3, color: 'blue', name: 'M(4, 5)', withLabel: true, label: {offset: [-15, 10]}});
var pN = board.create('point', [8, -1], {size: 3, color: 'blue', name: 'N(8, -1)', withLabel: true, label: {offset: [10, 5]}});
board.create('line', [pM, pN], {strokeColor: 'blue', strokeWidth: 1.5});
var pP = board.create('point', [5.5, 2], {size: 3, color: 'red', name: 'P(5.5, 2)', withLabel: true, label: {offset: [10, 10]}});
board.create('line', [[5.5, 2], [6, 3.5]], {strokeColor: 'red', strokeWidth: 1.5, strokeDasharray: '4 4'});
board.unsuspendUpdate();`
    }
  },
  subQuestions: [
    {
      id: "y9-11f-q8a",
      type: "short_answer",
      difficulty: "medium",
      timeLimit: 90,
      question: "a) Find the coordinates of \\(M\\), the midpoint of \\(AB\\).",
      a: "(4, 5)",
      solutionSteps: [
        {
          explanation: "Average the coordinates of A and B.",
          workingOut: "M = \\left(\\frac{2+6}{2}, \\frac{3+7}{2}\\right) = (4, 5)"
        }
      ]
    },
    {
      id: "y9-11f-q8b",
      type: "short_answer",
      difficulty: "medium",
      timeLimit: 90,
      question: "b) Find the coordinates of \\(N\\), the midpoint of \\(CD\\).",
      a: "(8, -1)",
      solutionSteps: [
        {
          explanation: "Average the coordinates of C and D.",
          workingOut: "N = \\left(\\frac{9+7}{2}, \\frac{1-3}{2}\\right) = (8, -1)"
        }
      ]
    },
    {
      id: "y9-11f-q8c",
      type: "short_answer",
      difficulty: "medium",
      timeLimit: 90,
      question: "c) Find the gradient of \\(MN\\).",
      a: "-1.5",
      solutionSteps: [
        {
          explanation: "Find gradient of line segment MN.",
          workingOut: "m = \\frac{-1 - 5}{8 - 4} = -1.5"
        }
      ]
    },
    {
      id: "y9-11f-q8d",
      type: "short_answer",
      difficulty: "medium",
      timeLimit: 90,
      question: "d) Find the equation of the line \\(MN\\).",
      a: "y = -3/2x + 11",
      solutionSteps: [
        {
          explanation: "Use point-gradient form with M(4, 5).",
          workingOut: "y - 5 = -\\frac{3}{2}(x - 4) \\implies y = -\\frac{3}{2}x + 11"
        }
      ]
    },
    {
      id: "y9-11f-q8e",
      type: "short_answer",
      difficulty: "medium",
      timeLimit: 90,
      question: "e) Find the coordinates of \\(P\\), the midpoint of \\(AC\\).",
      a: "(5.5, 2)",
      solutionSteps: [
        {
          explanation: "Average the coordinates of A and C.",
          workingOut: "P = \\left(\\frac{2+9}{2}, \\frac{3+1}{2}\\right) = (5.5, 2)"
        }
      ]
    },
    {
      id: "y9-11f-q8f",
      type: "short_answer",
      difficulty: "medium",
      timeLimit: 90,
      question: "f) Find the equation of the line that passes through \\(P\\) with gradient 3.",
      a: "y = 3x - 14.5",
      solutionSteps: [
        {
          explanation: "Use point-gradient form with P(5.5, 2) and m = 3.",
          workingOut: "y - 2 = 3(x - 5.5) \\implies y = 3x - 14.5"
        }
      ]
    }
  ]
});

const fileContent = `export const Y9_CH11F_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(targetFile, fileContent, 'utf-8');
console.log("Successfully generated seedYear9Ch11FQuestions.js!");
