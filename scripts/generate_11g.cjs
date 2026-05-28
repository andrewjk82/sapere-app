const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '../src/constants/seedYear9Ch11GQuestions.js');

const questions = [];

// Q1 (a-h): State which lines are parallel (easy, timeLimit:30, split)
// We will change the lines but maintain parallel relationships.
// Parallel sets:
// A: y = 3x - 5 (m=3)
// B: 2x + y = 6 (m=-2)
// C: y = 5 - 2x (m=-2)
// D: x = 1/3*y + 2 => y = 3x - 6 (m=3)
// E: y = 1/2*x - 4 (m=1/2)
// F: 2y - x = 8 => y = 1/2*x + 4 (m=1/2)
// G: 3y + x = 9 => y = -1/3*x + 3 (m=-1/3)
// H: y = -2x + 7 (m=-2)
const q1Lines = [
  { label: 'a', eq: 'y = 3x - 5', m: 3 },
  { label: 'b', eq: '2x + y = 6', m: -2 },
  { label: 'c', eq: 'y = 5 - 2x', m: -2 },
  { label: 'd', eq: 'x = \\frac{1}{3}y + 2', m: 3 },
  { label: 'e', eq: 'y = \\frac{1}{2}x - 4', m: 0.5 },
  { label: 'f', eq: '2y - x = 8', m: 0.5 },
  { label: 'g', eq: '3y + x = 9', m: -1/3 },
  { label: 'h', eq: 'y = -2x + 7', m: -2 }
];

questions.push({
  id: "y9-11g-q1",
  type: "short_answer",
  difficulty: "easy",
  timeLimit: 30,
  question: `The equations of eight lines are given below:\n` +
    `**a** \\(y = 3x - 5\\)\n` +
    `**b** \\(2x + y = 6\\)\n` +
    `**c** \\(y = 5 - 2x\\)\n` +
    `**d** \\(x = \\frac{1}{3}y + 2\\)\n` +
    `**e** \\(y = \\frac{1}{2}x - 4\\)\n` +
    `**f** \\(2y - x = 8\\)\n` +
    `**g** \\(3y + x = 9\\)\n` +
    `**h** \\(y = -2x + 7\\)\n\n` +
    `State which groups of lines are parallel (have the same gradient). Format parallel groups separated by semicolons (e.g. a and d; b, c and h; e and f).`,
  a: "a and d; b, c and h; e and f",
  solution: `Let's find the gradient \\(m\\) of each line:\n` +
    `- **a**: \\(y = 3x - 5 \\implies m = 3\\)\n` +
    `- **b**: \\(y = -2x + 6 \\implies m = -2\\)\n` +
    `- **c**: \\(y = -2x + 5 \\implies m = -2\\)\n` +
    `- **d**: \\(y = 3x - 6 \\implies m = 3\\)\n` +
    `- **e**: \\(y = \\frac{1}{2}x - 4 \\implies m = \\frac{1}{2}\\)\n` +
    `- **f**: \\(y = \\frac{1}{2}x + 4 \\implies m = \\frac{1}{2}\\)\n` +
    `- **g**: \\(y = -\\frac{1}{3}x + 3 \\implies m = -\\frac{1}{3}\\)\n` +
    `- **h**: \\(y = -2x + 7 \\implies m = -2\\)\n\n` +
    `Parallel groups:\n` +
    `- Gradient \\(3\\): **a and d**\n` +
    `- Gradient \\(-2\\): **b, c and h**\n` +
    `- Gradient \\(0.5\\): **e and f**`,
  t: "Parallel and perpendicular straight lines",
  hint: "Find the gradient of each line by rearranging into the form \\(y = mx + c\\). Lines with equal gradients are parallel.",
  solutionSteps: [
    {
      explanation: "Find gradient of each line.",
      workingOut: "m_a=3, m_b=-2, m_c=-2, m_d=3, m_e=0.5, m_f=0.5, m_g=-1/3, m_h=-2"
    }
  ],
  graphData: null
});

// Q2 (a-f): Find parallel lines passing through point (easy, 30s limit, split)
const q2Data = [
  { sub: 'a', eq: 'y = 3x - 1', m: 3, px: 2, py: 7, ans: 'y = 3x + 1' },
  { sub: 'b', eq: 'y = 2x + 4', m: 2, px: -1, py: 3, ans: 'y = 2x + 5' },
  { sub: 'c', eq: 'y = 3 - x', m: -1, px: -2, py: -3, ans: 'y = -x - 5' },
  { sub: 'd', eq: 'x + 3y = 9', m: -1/3, px: 3, py: -2, ans: 'y = -1/3x - 1', mText: '-\\frac{1}{3}' },
  { sub: 'e', eq: 'y - 2x = 5', m: 2, px: 1, py: -4, ans: 'y = 2x - 6' },
  { sub: 'f', eq: '3y + x = 6', m: -1/3, px: 6, py: -3, ans: 'y = -1/3x - 1', mText: '-\\frac{1}{3}' }
];

q2Data.forEach(q => {
  questions.push({
    id: `y9-11g-q2${q.sub}`,
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 30,
    question: `Find the equation of the line that is parallel to the line \\(${q.eq}\\) and passes through the point \\((${q.px}, ${q.py})\\).`,
    a: q.ans,
    solution: `1. The gradient of the parallel line is same as \\(${q.eq}\\), which is \\(m = ${q.mText || q.m}\\).\n` +
      `2. Use Point-Slope formula \\(y - y_1 = m(x - x_1)\\) with point \\((${q.px}, ${q.py})\\):\n` +
      `   \\(y - ${q.py < 0 ? `(${q.py})` : q.py} = ${q.mText || q.m}(x - ${q.px < 0 ? `(${q.px})` : q.px})\\)\n` +
      `   \\(${q.ans}\\).`,
    t: "Parallel and perpendicular straight lines",
    hint: "Parallel lines have the same gradient. Find the gradient of the given line, then use point-gradient form.",
    solutionSteps: [
      {
        explanation: "Identify the gradient of the line.",
        workingOut: `m = ${q.mText || q.m}`
      },
      {
        explanation: "Substitute gradient and point into point-slope formula.",
        workingOut: `y - ${q.py} = ${q.mText || q.m}(x - ${q.px}) \\implies ${q.ans}`
      }
    ],
    graphData: null
  });
});

// Q3-Q5: Find value of a (easy, 30s limit)
// Q3: y = (a + 3)x + 5 parallel to y = 4x - 2. a + 3 = 4 => a = 1
questions.push({
  id: "y9-11g-q3",
  type: "short_answer",
  difficulty: "easy",
  timeLimit: 30,
  question: "If \\(y = (a + 3)x + 5\\) is parallel to \\(y = 4x - 2\\), find the value of \\(a\\).",
  a: "1",
  solution: "Since the lines are parallel, their gradients must be equal:\n" +
    "\\(a + 3 = 4 \\implies a = 1\\).",
  t: "Parallel and perpendicular straight lines",
  hint: "Parallel lines have equal coefficients of \\(x\\) when written in the form \\(y = mx + c\\).",
  solutionSteps: [
    {
      explanation: "Equate the gradients.",
      workingOut: "a + 3 = 4"
    },
    {
      explanation: "Solve for a.",
      workingOut: "a = 1"
    }
  ],
  graphData: null
});

// Q4: y = (3a - 2)x + 2 parallel to y = 4x - 1. 3a - 2 = 4 => a = 2
questions.push({
  id: "y9-11g-q4",
  type: "short_answer",
  difficulty: "easy",
  timeLimit: 30,
  question: "If \\(y = (3a - 2)x + 2\\) is parallel to \\(y = 4x - 1\\), find the value of \\(a\\).",
  a: "2",
  solution: "Equate the gradients of parallel lines:\n" +
    "\\(3a - 2 = 4 \\implies 3a = 6 \\implies a = 2\\).",
  t: "Parallel and perpendicular straight lines",
  hint: "Identify the gradients of both lines and set them equal to each other.",
  solutionSteps: [
    {
      explanation: "Equate gradients.",
      workingOut: "3a - 2 = 4"
    },
    {
      explanation: "Solve for a.",
      workingOut: "3a = 6 \\implies a = 2"
    }
  ],
  graphData: null
});

// Q5: y = (2a + 3)x - 2 is parallel to y = ax - 5. 2a + 3 = a => a = -3
questions.push({
  id: "y9-11g-q5",
  type: "short_answer",
  difficulty: "easy",
  timeLimit: 30,
  question: "If \\(y = (2a + 3)x - 2\\) is parallel to \\(y = ax - 5\\), find the value of \\(a\\).",
  a: "-3",
  solution: "Gradients of parallel lines are equal:\n" +
    "\\(2a + 3 = a \\implies a = -3\\).",
  t: "Parallel and perpendicular straight lines",
  hint: "Set the coefficient of \\(x\\) of both equations equal to each other.",
  solutionSteps: [
    {
      explanation: "Equate the coefficients of x.",
      workingOut: "2a + 3 = a"
    },
    {
      explanation: "Solve for a.",
      workingOut: "a = -3"
    }
  ],
  graphData: null
});

// Q6: Table of perpendicular gradients (easy, 30s limit)
questions.push({
  id: "y9-11g-q6",
  type: "short_answer",
  difficulty: "easy",
  timeLimit: 30,
  question: "For each perpendicular line pair \\(\\ell_1\\) and \\(\\ell_2\\), find the gradient of \\(\\ell_2\\) given the gradient of \\(\\ell_1\\):\n" +
    "a) \\(m_1 = \\frac{1}{3}\\)\n" +
    "b) \\(m_1 = 3\\)\n" +
    "c) \\(m_1 = \\frac{5}{2}\\)\n" +
    "d) \\(m_1 = 4\\)\n" +
    "e) \\(m_1 = \\frac{2}{3}\\)\n" +
    "f) \\(m_1 = -3\\)\n" +
    "g) \\(m_1 = -4\\)\n" +
    "h) \\(m_1 = -\\frac{1}{3}\\)\n" +
    "i) \\(m_1 = \\frac{3}{5}\\)\n" +
    "j) \\(m_1 = \\frac{3}{4}\\)\n\n" +
    "Format answers in order separated by commas (e.g. -3, -1/3, ...)",
  a: "-3, -1/3, -2/5, -1/4, -3/2, 1/3, 1/4, 3, -5/3, -4/3",
  solution: "Since \\(\\ell_1 \\perp \\ell_2\\), their gradients satisfy \\(m_1 \\times m_2 = -1\\) (negative reciprocals):\n" +
    "- a) \\(m_2 = -3\\)\n" +
    "- b) \\(m_2 = -\\frac{1}{3}\\)\n" +
    "- c) \\(m_2 = -\\frac{2}{5}\\)\n" +
    "- d) \\(m_2 = -\\frac{1}{4}\\)\n" +
    "- e) \\(m_2 = -\\frac{3}{2}\\)\n" +
    "- f) \\(m_2 = \\frac{1}{3}\\)\n" +
    "- g) \\(m_2 = \\frac{1}{4}\\)\n" +
    "- h) \\(m_2 = 3\\)\n" +
    "- i) \\(m_2 = -\\frac{5}{3}\\)\n" +
    "- j) \\(m_2 = -\\frac{4}{3}\\)",
  t: "Parallel and perpendicular straight lines",
  hint: "Perpendicular gradients are negative reciprocals: \\(m_2 = -\\frac{1}{m_1}\\).",
  solutionSteps: [
    {
      explanation: "Calculate negative reciprocals for each gradient.",
      workingOut: "m_2 = -\\frac{1}{m_1}"
    }
  ],
  graphData: null
});

// Q7: State which lines are perpendicular (easy, 30s limit)
questions.push({
  id: "y9-11g-q7",
  type: "short_answer",
  difficulty: "easy",
  timeLimit: 30,
  question: `The equations of eight lines are given below:\n` +
    `**a** \\(y = 3x - 5\\)\n` +
    `**b** \\(3y + x = 6\\)\n` +
    `**c** \\(y = x + 3\\)\n` +
    `**d** \\(2y - x = 4\\)\n` +
    `**e** \\(y = 5 - x\\)\n` +
    `**f** \\(2y + x = 6\\)\n` +
    `**g** \\(2y - 4x = 8\\)\n` +
    `**h** \\(y = -3x + 1\\)\n\n` +
    `State which pairs of lines are perpendicular. Format perpendicular pairs separated by semicolons (e.g. a and b; c and e; f and g).`,
  a: "a and b; c and e; f and g",
  solution: `Let's find the gradient \\(m\\) of each line:\n` +
    `- **a**: \\(y = 3x - 5 \\implies m_a = 3\\)\n` +
    `- **b**: \\(y = -\\frac{1}{3}x + 2 \\implies m_b = -\\frac{1}{3}\\)\n` +
    `- **c**: \\(y = x + 3 \\implies m_c = 1\\)\n` +
    `- **d**: \\(y = \\frac{1}{2}x + 2 \\implies m_d = \\frac{1}{2}\\)\n` +
    `- **e**: \\(y = -x + 5 \\implies m_e = -1\\)\n` +
    `- **f**: \\(y = -\\frac{1}{2}x + 3 \\implies m_f = -\\frac{1}{2}\\)\n` +
    `- **g**: \\(y = 2x + 4 \\implies m_g = 2\\)\n` +
    `- **h**: \\(y = -3x + 1 \\implies m_h = -3\\)\n\n` +
    `Perpendicular pairs (where \\(m_1 \\times m_2 = -1\\)):\n` +
    `- \\(3 \\times -\\frac{1}{3} = -1\\): **a and b**\n` +
    `- \\(1 \\times -1 = -1\\): **c and e**\n` +
    `- \\(2 \\times -\\frac{1}{2} = -1\\): **f and g**`,
  t: "Parallel and perpendicular straight lines",
  hint: "Rearrange each equation to \\(y = mx + c\\) and verify if the product of their gradients is \\(-1\\).",
  solutionSteps: [
    {
      explanation: "Find gradient of each line.",
      workingOut: "m_a=3, m_b=-1/3, m_c=1, m_d=1/2, m_e=-1, m_f=-1/2, m_g=2, m_h=-3"
    }
  ],
  graphData: null
});

// Q8 (a-f): Find perpendicular lines passing through point (easy, 30s limit)
const q8Data = [
  { sub: 'a', eq: 'y = 3x - 1', m: 3, px: 2, py: 5, ans: 'y = -1/3x + 17/3', perpM: -1/3, perpMText: '-\\frac{1}{3}' },
  { sub: 'b', eq: 'y = 2x + 4', m: 2, px: -2, py: 4, ans: 'y = -1/2x + 3', perpM: -1/2, perpMText: '-\\frac{1}{2}' },
  { sub: 'c', eq: 'y = 5 - x', m: -1, px: -3, py: -2, ans: 'y = x + 1', perpM: 1, perpMText: '1' },
  { sub: 'd', eq: 'x + 4y = 8', m: -1/4, px: 2, py: -5, ans: 'y = 4x - 13', perpM: 4, perpMText: '4' },
  { sub: 'e', eq: 'y - 3x = 6', m: 3, px: 2, py: -4, ans: 'y = -1/3x - 10/3', perpM: -1/3, perpMText: '-\\frac{1}{3}' },
  { sub: 'f', eq: '2y + x = 4', m: -1/2, px: 4, py: -3, ans: 'y = 2x - 11', perpM: 2, perpMText: '2' }
];

q8Data.forEach(q => {
  questions.push({
    id: `y9-11g-q8${q.sub}`,
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 30,
    question: `Find the equation of the line that is perpendicular to the line \\(${q.eq}\\) and passes through the point \\((${q.px}, ${q.py})\\).`,
    a: q.ans,
    solution: `1. The gradient of the perpendicular line is the negative reciprocal of the gradient of \\(${q.eq}\\), which gives \\(m_2 = ${q.perpMText}\\).\n` +
      `2. Use Point-Slope formula \\(y - y_1 = m_2(x - x_1)\\) with point \\((${q.px}, ${q.py})\\):\n` +
      `   \\(y - ${q.py < 0 ? `(${q.py})` : q.py} = ${q.perpMText}(x - ${q.px < 0 ? `(${q.px})` : q.px})\\)\n` +
      `   \\(${q.ans}\\).`,
    t: "Parallel and perpendicular straight lines",
    hint: "Find the gradient of the given line, determine its negative reciprocal, and then use point-gradient form.",
    solutionSteps: [
      {
        explanation: "Find the gradient of the perpendicular line.",
        workingOut: `m_2 = -\\frac{1}{m_1} = ${q.perpMText}`
      },
      {
        explanation: "Apply point-slope form.",
        workingOut: `y - ${q.py} = ${q.perpMText}(x - ${q.px}) \\implies ${q.ans}`
      }
    ],
    graphData: null
  });
});

// Q9: Quadrilateral midpoint polygon (medium, 90s limit)
questions.push({
  id: "y9-11g-q9",
  type: "teacher_review",
  difficulty: "medium",
  timeLimit: 90,
  question: "Consider the quadrilateral \\(ABCD\\) with vertices \\(A(2, 3)\\), \\(B(4, 6)\\), \\(C(8, 0)\\), and \\(D(6, -3)\\). Answer the following sub-questions.",
  a: "a) M(3, 4.5), b) N(6, 3), c) m_MN = -0.5, d) m_PQ = -0.5, e) Parallel, f) m_QM = 7.5, m_PN = 7.5, g) Parallelogram",
  solution: "a) Midpoint \\(M\\) of \\(AB\\): \\(\\left(\\frac{2+4}{2}, \\frac{3+6}{2}\right) = (3, 4.5)\\).\n\n" +
    "b) Midpoint \\(N\\) of \\(BC\\): \\(\\left(\\frac{4+8}{2}, \\frac{6+0}{2}\right) = (6, 3)\\).\n\n" +
    "c) Gradient \\(MN\\): \\(m = \\frac{3 - 4.5}{6 - 3} = \\frac{-1.5}{3} = -0.5\\).\n\n" +
    "d) Midpoints \\(P\\) of \\(CD\\) and \\(Q\\) of \\(DA\\):\n" +
    "   - \\(P = \\left(\\frac{8+6}{2}, \\frac{0-3}{2}\\right) = (7, -1.5)\\)\n" +
    "   - \\(Q = \\left(\\frac{6+2}{2}, \\frac{-3+3}{2}\\right) = (4, 0)\\)\n" +
    "   - Gradient \\(PQ\\): \\(\\frac{0 - (-1.5)}{4 - 7} = \\frac{1.5}{-3} = -0.5\\).\n\n" +
    "e) Since \\(m_{MN} = m_{PQ} = -0.5\\), the intervals \\(MN\\) and \\(PQ\\) are **parallel**.\n\n" +
    "f) Gradients of \\(QM\\) and \\(PN\\):\n" +
    "   - \\(m_{QM} = \\frac{4.5 - 0}{3 - 4} = -4.5\\)\n" +
    "   - \\(m_{PN} = \\frac{3 - (-1.5)}{6 - 7} = -4.5\\).\n\n" +
    "g) Since opposite sides are parallel (\\(MN \\parallel PQ\\) and \\(QM \\parallel PN\\)), \\(MNPQ\\) is a **parallelogram**.",
  t: "Parallel and perpendicular straight lines",
  hint: "Compute midpoints using averages, gradients using rise-over-run, and check if opposite gradients are equal.",
  graphData: {
    jsxGraph: {
      width: 350,
      height: 350,
      boundingbox: [-1, 8, 10, -5],
      showConstructionPoints: true,
      boardOptions: {
        axis: true,
        grid: true
      },
      script: `board.suspendUpdate();
var pA = board.create('point', [2, 3], {size: 3, color: 'black', name: 'A(2, 3)', withLabel: true, label: {offset: [-15, 10]}});
var pB = board.create('point', [4, 6], {size: 3, color: 'black', name: 'B(4, 6)', withLabel: true, label: {offset: [10, 10]}});
var pC = board.create('point', [8, 0], {size: 3, color: 'black', name: 'C(8, 0)', withLabel: true, label: {offset: [10, -10]}});
var pD = board.create('point', [6, -3], {size: 3, color: 'black', name: 'D(6, -3)', withLabel: true, label: {offset: [-15, -15]}});
board.create('polygon', [pA, pB, pC, pD], {fillColor: 'none', borders: {strokeColor: 'black', strokeWidth: 1}});
var pM = board.create('point', [3, 4.5], {size: 3, color: 'blue', name: 'M(3, 4.5)', withLabel: true, label: {offset: [-20, 10]}});
var pN = board.create('point', [6, 3], {size: 3, color: 'blue', name: 'N(6, 3)', withLabel: true, label: {offset: [10, 10]}});
var pP = board.create('point', [7, -1.5], {size: 3, color: 'blue', name: 'P(7, -1.5)', withLabel: true, label: {offset: [10, -5]}});
var pQ = board.create('point', [4, 0], {size: 3, color: 'blue', name: 'Q(4, 0)', withLabel: true, label: {offset: [-20, -10]}});
board.create('polygon', [pM, pN, pP, pQ], {fillColor: '#bfdbfe', fillOpacity: 0.3, borders: {strokeColor: 'blue', strokeWidth: 1.5}});
board.unsuspendUpdate();`
    }
  },
  subQuestions: [
    {
      id: "y9-11g-q9a",
      type: "short_answer",
      difficulty: "medium",
      timeLimit: 90,
      question: "a) Find the coordinates of \\(M\\), the midpoint of \\(AB\\).",
      a: "(3, 4.5)",
      solutionSteps: [
        {
          explanation: "Average coordinates.",
          workingOut: "M = \\left(\\frac{2+4}{2}, \\frac{3+6}{2}\\right) = (3, 4.5)"
        }
      ]
    },
    {
      id: "y9-11g-q9b",
      type: "short_answer",
      difficulty: "medium",
      timeLimit: 90,
      question: "b) Find the coordinates of \\(N\\), the midpoint of \\(BC\\).",
      a: "(6, 3)",
      solutionSteps: [
        {
          explanation: "Average coordinates.",
          workingOut: "N = \\left(\\frac{4+8}{2}, \\frac{6+0}{2}\\right) = (6, 3)"
        }
      ]
    },
    {
      id: "y9-11g-q9c",
      type: "short_answer",
      difficulty: "medium",
      timeLimit: 90,
      question: "c) Calculate the gradient of \\(MN\\).",
      a: "-0.5",
      solutionSteps: [
        {
          explanation: "Find gradient of segment MN.",
          workingOut: "m = \\frac{3 - 4.5}{6 - 3} = -0.5"
        }
      ]
    },
    {
      id: "y9-11g-q9d",
      type: "short_answer",
      difficulty: "medium",
      timeLimit: 90,
      question: "d) If \\(P\\) is the midpoint of \\(CD\\) and \\(Q\\) is the midpoint of \\(DA\\), find the gradient of \\(PQ\\).",
      a: "-0.5",
      solutionSteps: [
        {
          explanation: "Calculate midpoints P and Q, then compute gradient.",
          workingOut: "P(7, -1.5), \\quad Q(4, 0) \\implies m = \\frac{0 - (-1.5)}{4 - 7} = -0.5"
        }
      ]
    },
    {
      id: "y9-11g-q9e",
      type: "short_answer",
      difficulty: "medium",
      timeLimit: 90,
      question: "e) What can be concluded about the intervals \\(MN\\) and \\(PQ\\)?",
      a: "Parallel",
      solutionSteps: [
        {
          explanation: "Compare the gradients.",
          workingOut: "m_{MN} = m_{PQ} = -0.5 \\implies Parallel"
        }
      ]
    },
    {
      id: "y9-11g-q9f",
      type: "short_answer",
      difficulty: "medium",
      timeLimit: 90,
      question: "f) Find the gradients of \\(QM\\) and \\(PN\\). Format: [val1], [val2]",
      a: "-4.5, -4.5",
      solutionSteps: [
        {
          explanation: "Compute gradients using coordinates.",
          workingOut: "m_{QM} = \\frac{4.5 - 0}{3 - 4} = -4.5, \\quad m_{PN} = \\frac{3 - (-1.5)}{6 - 7} = -4.5"
        }
      ]
    },
    {
      id: "y9-11g-q9g",
      type: "short_answer",
      difficulty: "medium",
      timeLimit: 90,
      question: "g) What type of quadrilateral is \\(MNPQ\\)?",
      a: "Parallelogram",
      solutionSteps: [
        {
          explanation: "Identify shape based on parallel opposite sides.",
          workingOut: "MN \\parallel PQ \\text{ and } QM \\parallel PN \\implies Parallelogram"
        }
      ]
    }
  ]
});

// Q10-Q11: Solve for perpendicular a (medium, 90s limit)
// Q10: y = (a + 2)x + 3 is perpendicular to y = 3x - 1 => (a + 2) * 3 = -1 => a + 2 = -1/3 => a = -7/3
questions.push({
  id: "y9-11g-q10",
  type: "short_answer",
  difficulty: "medium",
  timeLimit: 90,
  question: "If the line \\(y = (a + 2)x + 3\\) is perpendicular to \\(y = 3x - 1\\), find the value of \\(a\\).",
  a: "-7/3",
  solution: "Since the lines are perpendicular, the product of their gradients is \\(-1\\):\n" +
    "\\((a + 2) \\times 3 = -1\\)\n" +
    "\\(a + 2 = -\\frac{1}{3}\\)\n" +
    "\\(a = -2 - \\frac{1}{3} = -\\frac{7}{3}\\).",
  t: "Parallel and perpendicular straight lines",
  hint: "Perpendicular lines satisfy \\(m_1 \\times m_2 = -1\\). Set up the equation and solve for \\(a\\).",
  solutionSteps: [
    {
      explanation: "Set product of gradients to -1.",
      workingOut: "3(a + 2) = -1"
    },
    {
      explanation: "Solve for a.",
      workingOut: "a + 2 = -\\frac{1}{3} \\implies a = -\\frac{7}{3}"
    }
  ],
  graphData: null
});

// Q11: y = (3a + 1)x + 2 is perpendicular to y = 2x - 5 => (3a + 1) * 2 = -1 => 3a + 1 = -1/2 => 3a = -3/2 => a = -1/2
questions.push({
  id: "y9-11g-q11",
  type: "short_answer",
  difficulty: "medium",
  timeLimit: 90,
  question: "If the line \\(y = (3a + 1)x + 2\\) is perpendicular to \\(y = 2x - 5\\), find the value of \\(a\\).",
  a: "-1/2",
  solution: "Since the lines are perpendicular:\n" +
    "\\((3a + 1) \\times 2 = -1\\)\n" +
    "\\(3a + 1 = -\\frac{1}{2}\\)\n" +
    "\\(3a = -\\frac{3}{2} \\implies a = -\\frac{1}{2}\\).",
  t: "Parallel and perpendicular straight lines",
  hint: "Verify gradients product rule \\(m_1 \\times m_2 = -1\\).",
  solutionSteps: [
    {
      explanation: "Apply perpendicular rule.",
      workingOut: "2(3a + 1) = -1"
    },
    {
      explanation: "Solve the equation.",
      workingOut: "3a + 1 = -\\frac{1}{2} \\implies 3a = -\\frac{3}{2} \\implies a = -\\frac{1}{2}"
    }
  ],
  graphData: null
});

// Q12: Perpendicular bisector (medium, 90s limit, subQuestions)
questions.push({
  id: "y9-11g-q12",
  type: "teacher_review",
  difficulty: "medium",
  timeLimit: 90,
  question: "Let \\(AB\\) be the interval with endpoints \\(A(3, 4)\\) and \\(B(7, 12)\\). Answer the following sub-questions.",
  a: "a) m = 2, b) C(5, 8), c) y = -1/2x + 21/2, d) 10.5",
  solution: "a) Gradient: \\(m = \\frac{12 - 4}{7 - 3} = \\frac{8}{4} = 2\\).\n\n" +
    "b) Midpoint \\(C\\): \\(\\left(\\frac{3+7}{2}, \\frac{4+12}{2}\\right) = (5, 8)\\).\n\n" +
    "c) Perpendicular bisector has gradient \\(-\\frac{1}{2}\\) and passes through \\(C(5, 8)\\):\n" +
    "   \\(y - 8 = -\\frac{1}{2}(x - 5) \\implies y - 8 = -\\frac{1}{2}x + \\frac{5}{2} \\implies y = -\\frac{1}{2}x + \\frac{21}{2}\\).\n\n" +
    "d) Y-intercept is when \\(x = 0 \\implies y = \\frac{21}{2} = 10.5\\).",
  t: "Parallel and perpendicular straight lines",
  hint: "Find the gradient and midpoint of AB first, then determine the perpendicular gradient and point-slope equation.",
  graphData: {
    jsxGraph: {
      width: 350,
      height: 350,
      boundingbox: [-1, 14, 9, -2],
      showConstructionPoints: true,
      boardOptions: {
        axis: true,
        grid: true
      },
      script: `board.suspendUpdate();
var pA = board.create('point', [3, 4], {size: 3, color: 'black', name: 'A(3, 4)', withLabel: true, label: {offset: [-15, -15]}});
var pB = board.create('point', [7, 12], {size: 3, color: 'black', name: 'B(7, 12)', withLabel: true, label: {offset: [10, 10]}});
board.create('segment', [pA, pB], {strokeColor: 'black', strokeWidth: 1.5});
var pC = board.create('point', [5, 8], {size: 3, color: 'blue', name: 'C(5, 8)', withLabel: true, label: {offset: [10, 10]}});
board.create('line', [[5, 8], [0, 10.5]], {strokeColor: 'red', strokeWidth: 1.5});
board.unsuspendUpdate();`
    }
  },
  subQuestions: [
    {
      id: "y9-11g-q12a",
      type: "short_answer",
      difficulty: "medium",
      timeLimit: 90,
      question: "a) Find the gradient of \\(AB\\).",
      a: "2",
      solutionSteps: [
        {
          explanation: "Compute gradient.",
          workingOut: "m = \\frac{12 - 4}{7 - 3} = 2"
        }
      ]
    },
    {
      id: "y9-11g-q12b",
      type: "short_answer",
      difficulty: "medium",
      timeLimit: 90,
      question: "b) Find the coordinates of \\(C\\), the midpoint of \\(AB\\).",
      a: "(5, 8)",
      solutionSteps: [
        {
          explanation: "Find midpoint coordinates.",
          workingOut: "C = \\left(\\frac{3+7}{2}, \\frac{4+12}{2}\\right) = (5, 8)"
        }
      ]
    },
    {
      id: "y9-11g-q12c",
      type: "short_answer",
      difficulty: "medium",
      timeLimit: 90,
      question: "c) Find the equation of the line that is perpendicular to \\(AB\\) and passes through \\(C\\). This line is the perpendicular bisector of \\(AB\\).",
      a: "y = -1/2x + 21/2",
      solutionSteps: [
        {
          explanation: "Apply point-slope form with perpendicular gradient.",
          workingOut: "y - 8 = -\\frac{1}{2}(x - 5) \\implies y = -\\frac{1}{2}x + \\frac{21}{2}"
        }
      ]
    },
    {
      id: "y9-11g-q12d",
      type: "short_answer",
      difficulty: "medium",
      timeLimit: 90,
      question: "d) What is the \\(y\\)-intercept of this perpendicular bisector?",
      a: "10.5",
      solutionSteps: [
        {
          explanation: "Set x = 0.",
          workingOut: "y = \\frac{21}{2} = 10.5"
        }
      ]
    }
  ]
});

// Q13: Triangle is right-angled (hard, 120s limit)
questions.push({
  id: "y9-11g-q13",
  type: "teacher_review",
  difficulty: "hard",
  timeLimit: 120,
  question: "Triangle \\(ABC\\) has vertices \\(A(2, 1)\\), \\(B(5, 5)\\) and \\(C(9, 2)\\). By calculating gradients, show that \\(\\Delta ABC\\) is right-angled.",
  a: "Proof: Gradient m_AB = 4/3, m_BC = -3/4. Since m_AB * m_BC = -1, AB is perpendicular to BC, so angle B is 90 degrees.",
  solution: "1. Calculate gradient of side \\(AB\\):\n" +
    "   \\(m_{AB} = \\frac{5 - 1}{5 - 2} = \\frac{4}{3}\\).\n\n" +
    "2. Calculate gradient of side \\(BC\\):\n" +
    "   \\(m_{BC} = \\frac{2 - 5}{9 - 5} = -\\frac{3}{4}\\).\n\n" +
    "3. Multiply the gradients:\n" +
    "   \\(m_{AB} \\times m_{BC} = \\frac{4}{3} \\times \\left(-\\frac{3}{4}\\right) = -1\\).\n\n" +
    "Since the product of the gradients is \\(-1\\), the sides \\(AB\\) and \\(BC\\) are perpendicular (\\(AB \\perp BC\\)). Therefore, \\(\\angle B = 90^\\circ\\), and the triangle is right-angled.",
  t: "Parallel and perpendicular straight lines",
  hint: "Compute the gradients of the three sides. Look for two sides whose gradients multiply to give \\(-1\\).",
  solutionSteps: [
    {
      explanation: "Find gradient of AB.",
      workingOut: "m_{AB} = \\frac{5 - 1}{5 - 2} = \\frac{4}{3}"
    },
    {
      explanation: "Find gradient of BC.",
      workingOut: "m_{BC} = \\frac{2 - 5}{9 - 5} = -\\frac{3}{4}"
    },
    {
      explanation: "Show gradients multiply to -1.",
      workingOut: "m_{AB} \\times m_{BC} = \\frac{4}{3} \\times -\\frac{3}{4} = -1 \\implies AB \\perp BC"
    }
  ],
  graphData: {
    jsxGraph: {
      width: 350,
      height: 350,
      boundingbox: [0, 7, 11, 0],
      showConstructionPoints: true,
      boardOptions: {
        axis: true,
        grid: true
      },
      script: `board.suspendUpdate();
var pA = board.create('point', [2, 1], {size: 3, color: 'black', name: 'A(2, 1)', withLabel: true, label: {offset: [-15, -15]}});
var pB = board.create('point', [5, 5], {size: 3, color: 'black', name: 'B(5, 5)', withLabel: true, label: {offset: [-10, 15]}});
var pC = board.create('point', [9, 2], {size: 3, color: 'black', name: 'C(9, 2)', withLabel: true, label: {offset: [15, 10]}});
board.create('polygon', [pA, pB, pC], {fillColor: 'none', borders: {strokeColor: 'black', strokeWidth: 1.5}});
board.unsuspendUpdate();`
    }
  }
});

// Q14: Show that diagonals are perpendicular (hard, 120s limit)
questions.push({
  id: "y9-11g-q14",
  type: "teacher_review",
  difficulty: "hard",
  timeLimit: 120,
  question: "Quadrilateral \\(ABCD\\) has vertices \\(A(1, -3)\\), \\(B(4, 1)\\), \\(C(8, -2)\\) and \\(D(5, -6)\\). Show that the diagonals \\(AC\\) and \\(BD\\) are perpendicular.",
  a: "Proof: Gradient m_AC = 1/7, m_BD = -7. Since m_AC * m_BD = -1, the diagonals AC and BD are perpendicular.",
  solution: "1. Calculate gradient of diagonal \\(AC\\) using points \\(A(1, -3)\\) and \\(C(8, -2)\\):\n" +
    "   \\(m_{AC} = \\frac{-2 - (-3)}{8 - 1} = \\frac{1}{7}\\).\n\n" +
    "2. Calculate gradient of diagonal \\(BD\\) using points \\(B(4, 1)\\) and \\(D(5, -6)\\):\n" +
    "   \\(m_{BD} = \\frac{-6 - 1}{5 - 4} = \\frac{-7}{1} = -7\\).\n\n" +
    "3. Multiply gradients:\n" +
    "   \\(m_{AC} \\times m_{BD} = \\frac{1}{7} \\times (-7) = -1\\).\n\n" +
    "Since the product is \\(-1\\), the diagonals \\(AC\\) and \\(BD\\) are perpendicular (\\(AC \\perp BD\\)).",
  t: "Parallel and perpendicular straight lines",
  hint: "Compute the gradients of diagonals AC and BD, then verify if their product is \\(-1\\).",
  solutionSteps: [
    {
      explanation: "Find gradient of diagonal AC.",
      workingOut: "m_{AC} = \\frac{-2 - (-3)}{8 - 1} = \\frac{1}{7}"
    },
    {
      explanation: "Find gradient of diagonal BD.",
      workingOut: "m_{BD} = \\frac{-6 - 1}{5 - 4} = -7"
    },
    {
      explanation: "Multiply gradients to show they are perpendicular.",
      workingOut: "m_{AC} \\times m_{BD} = \\frac{1}{7} \\times (-7) = -1"
    }
  ],
  graphData: {
    jsxGraph: {
      width: 350,
      height: 350,
      boundingbox: [-1, 3, 10, -8],
      showConstructionPoints: true,
      boardOptions: {
        axis: true,
        grid: true
      },
      script: `board.suspendUpdate();
var pA = board.create('point', [1, -3], {size: 3, color: 'black', name: 'A(1, -3)', withLabel: true, label: {offset: [-15, -15]}});
var pB = board.create('point', [4, 1], {size: 3, color: 'black', name: 'B(4, 1)', withLabel: true, label: {offset: [-10, 15]}});
var pC = board.create('point', [8, -2], {size: 3, color: 'black', name: 'C(8, -2)', withLabel: true, label: {offset: [15, 10]}});
var pD = board.create('point', [5, -6], {size: 3, color: 'black', name: 'D(5, -6)', withLabel: true, label: {offset: [15, -15]}});
board.create('polygon', [pA, pB, pC, pD], {fillColor: 'none', borders: {strokeColor: 'black', strokeWidth: 1}});
board.create('segment', [pA, pC], {strokeColor: 'blue', strokeWidth: 1.5, strokeDasharray: '4 4'});
board.create('segment', [pB, pD], {strokeColor: 'blue', strokeWidth: 1.5, strokeDasharray: '4 4'});
board.unsuspendUpdate();`
    }
  }
});

// Q15: Vertices of PQR: P(2, -3), Q(4, 5), R(8, -1). Medians and perpendicular bisectors (hard, 120s limit)
questions.push({
  id: "y9-11g-q15",
  type: "teacher_review",
  difficulty: "hard",
  timeLimit: 120,
  question: "The coordinates of the vertices of \\(\\Delta PQR\\) are \\(P(2, -3)\\), \\(Q(4, 5)\\), and \\(R(8, -1)\\). Answer the following sub-questions.",
  a: "a) S(3, 1), b) m_SR = -0.4, c) y = -2/5x + 11/5, d) y = 5/4x - 11/2; y = -7x + 33, e) m_PQ = 4, f) y = -1/4x + 7/4, g) y = 2/3x - 2, h) y = -3x + 13",
  solution: "a) Midpoint \\(S\\) of \\(PQ\\): \\(\\left(\\frac{2+4}{2}, \\frac{-3+5}{2}\right) = (3, 1)\\).\n\n" +
    "b) Gradient of \\(SR\\) where \\(S(3, 1)\\), \\(R(8, -1)\\):\n" +
    "   \\(m = \\frac{-1 - 1}{8 - 3} = -\\frac{2}{5} = -0.4\\).\n\n" +
    "c) Equation of line \\(SR\\):\n" +
    "   \\(y - 1 = -\\frac{2}{5}(x - 3) \\implies y = -\\frac{2}{5}x + \\frac{11}{5}\\).\n\n" +
    "d) Equations of the other two medians:\n" +
    "   - Midpoint of \\(QR\\): \\(T(6, 2)\\). Median through \\(P\\) is \\(y = \\frac{5}{4}x - \\frac{11}{2}\\).\n" +
    "   - Midpoint of \\(PR\\): \\(U(5, -2)\\). Median through \\(Q\\) is \\(y = -7x + 33\\).\n\n" +
    "e) Gradient of \\(PQ\\): \\(m_{PQ} = \\frac{5 - (-3)}{4 - 2} = 4\\).\n\n" +
    "f) Equation of perpendicular bisector of \\(PQ\\) (passes through \\(S(3, 1)\\) with gradient \\(-\\frac{1}{4}\\)):\n" +
    "   \\(y - 1 = -\\frac{1}{4}(x - 3) \\implies y = -\\frac{1}{4}x + \\frac{7}{4}\\).\n\n" +
    "g) Perpendicular bisector of \\(QR\\) (passes through \\(T(6, 2)\\) with gradient \\(\\frac{2}{3}\\)):\n" +
    "   \\(y - 2 = \\frac{2}{3}(x - 6) \\implies y = \\frac{2}{3}x - 2\\).\n\n" +
    "h) Perpendicular bisector of \\(PR\\) (passes through \\(U(5, -2)\\) with gradient \\(-3\\)):\n" +
    "   \\(y - (-2) = -3(x - 5) \\implies y = -3x + 13\\).",
  t: "Parallel and perpendicular straight lines",
  hint: "Midpoint coordinates, gradients (and their negative reciprocals for perpendicular bisectors), and point-slope equations are required.",
  graphData: {
    jsxGraph: {
      width: 350,
      height: 350,
      boundingbox: [-1, 7, 10, -5],
      showConstructionPoints: true,
      boardOptions: {
        axis: true,
        grid: true
      },
      script: `board.suspendUpdate();
var pP = board.create('point', [2, -3], {size: 3, color: 'black', name: 'P(2, -3)', withLabel: true, label: {offset: [-15, -15]}});
var pQ = board.create('point', [4, 5], {size: 3, color: 'black', name: 'Q(4, 5)', withLabel: true, label: {offset: [-10, 15]}});
var pR = board.create('point', [8, -1], {size: 3, color: 'black', name: 'R(8, -1)', withLabel: true, label: {offset: [15, 10]}});
board.create('polygon', [pP, pQ, pR], {fillColor: 'none', borders: {strokeColor: 'black', strokeWidth: 1.5}});
var pS = board.create('point', [3, 1], {size: 3, color: 'blue', name: 'S(3, 1)', withLabel: true, label: {offset: [-15, 10]}});
board.create('segment', [pS, pR], {strokeColor: 'blue', strokeWidth: 1});
board.unsuspendUpdate();`
    }
  },
  subQuestions: [
    {
      id: "y9-11g-q15a",
      type: "short_answer",
      difficulty: "hard",
      timeLimit: 120,
      question: "a) Find the coordinates of \\(S\\), the midpoint of \\(PQ\\).",
      a: "(3, 1)",
      solutionSteps: [
        {
          explanation: "Average coordinates.",
          workingOut: "S = \\left(\\frac{2+4}{2}, \\frac{-3+5}{2}\\right) = (3, 1)"
        }
      ]
    },
    {
      id: "y9-11g-q15b",
      type: "short_answer",
      difficulty: "hard",
      timeLimit: 120,
      question: "b) Find the gradient of \\(SR\\).",
      a: "-0.4",
      solutionSteps: [
        {
          explanation: "Find gradient of segment SR.",
          workingOut: "m = \\frac{-1 - 1}{8 - 3} = -0.4"
        }
      ]
    },
    {
      id: "y9-11g-q15c",
      type: "short_answer",
      difficulty: "hard",
      timeLimit: 120,
      question: "c) Find the equation of the line \\(SR\\).",
      a: "y = -2/5x + 11/5",
      solutionSteps: [
        {
          explanation: "Use point-gradient form.",
          workingOut: "y - 1 = -\\frac{2}{5}(x - 3) \\implies y = -\\frac{2}{5}x + \\frac{11}{5}"
        }
      ]
    },
    {
      id: "y9-11g-q15d",
      type: "short_answer",
      difficulty: "hard",
      timeLimit: 120,
      question: "d) Find the equations of the other two medians of the triangle. (Format: y = 5/4x - 11/2; y = -7x + 33)",
      a: "y = 5/4x - 11/2; y = -7x + 33",
      solutionSteps: [
        {
          explanation: "Find midpoints T(6, 2) and U(5, -2), then find equations of PT and QU.",
          workingOut: "y - 2 = \\frac{5}{4}(x - 6) \\implies y = \\frac{5}{4}x - \\frac{11}{2}; \\quad y - 5 = -7(x - 4) \\implies y = -7x + 33"
        }
      ]
    },
    {
      id: "y9-11g-q15e",
      type: "short_answer",
      difficulty: "hard",
      timeLimit: 120,
      question: "e) Find the gradient of \\(PQ\\).",
      a: "4",
      solutionSteps: [
        {
          explanation: "Find gradient of PQ.",
          workingOut: "m = \\frac{5 - (-3)}{4 - 2} = 4"
        }
      ]
    },
    {
      id: "y9-11g-q15f",
      type: "short_answer",
      difficulty: "hard",
      timeLimit: 120,
      question: "f) Find the equation of the perpendicular bisector of \\(PQ\\).",
      a: "y = -1/4x + 7/4",
      solutionSteps: [
        {
          explanation: "Use midpoint S(3, 1) and perpendicular gradient -1/4.",
          workingOut: "y - 1 = -\\frac{1}{4}(x - 3) \\implies y = -\\frac{1}{4}x + \\frac{7}{4}"
        }
      ]
    },
    {
      id: "y9-11g-q15g",
      type: "short_answer",
      difficulty: "hard",
      timeLimit: 120,
      question: "g) Find the equation of the perpendicular bisector of the side \\(QR\\).",
      a: "y = 2/3x - 2",
      solutionSteps: [
        {
          explanation: "Midpoint of QR is T(6, 2). Gradient of QR is -3/2. Perpendicular gradient is 2/3.",
          workingOut: "y - 2 = \\frac{2}{3}(x - 6) \\implies y = \\frac{2}{3}x - 2"
        }
      ]
    },
    {
      id: "y9-11g-q15h",
      type: "short_answer",
      difficulty: "hard",
      timeLimit: 120,
      question: "h) Find the equation of the perpendicular bisector of the side \\(PR\\).",
      a: "y = -3x + 13",
      solutionSteps: [
        {
          explanation: "Midpoint of PR is U(5, -2). Gradient of PR is 1/3. Perpendicular gradient is -3.",
          workingOut: "y - (-2) = -3(x - 5) \\implies y = -3x + 13"
        }
      ]
    }
  ]
});

// Q16: Altitudes of triangle ABC with A(1, 2), B(5, 8), C(7, 0) (hard, 120s limit)
questions.push({
  id: "y9-11g-q16",
  type: "teacher_review",
  difficulty: "hard",
  timeLimit: 120,
  question: "In triangle \\(ABC\\), the altitude through \\(A\\) is the line through \\(A\\) perpendicular to \\(BC\\). The coordinates of the vertices of the triangle are \\(A(1, 2)\\), \\(B(5, 8)\\), and \\(C(7, 0)\\). Answer the following sub-questions.",
  a: "a) y = -2/3x + 14/3, b) y = 3x - 7, c) y = 1/4x + 7/4",
  solution: "a) Altitude through \\(C\\) is perpendicular to \\(AB\\):\n" +
    "   - Gradient \\(AB\\): \\(m_{AB} = \\frac{8 - 2}{5 - 1} = \\frac{3}{2}\\).\n" +
    "   - Perpendicular gradient: \\(-\\frac{2}{3}\\).\n" +
    "   - Equation: \\(y - 0 = -\\frac{2}{3}(x - 7) \\implies y = -\\frac{2}{3}x + \\frac{14}{3}\\).\n\n" +
    "b) Altitude through \\(B\\) is perpendicular to \\(AC\\):\n" +
    "   - Gradient \\(AC\\): \\(m_{AC} = \\frac{0 - 2}{7 - 1} = -\\frac{1}{3}\\).\n" +
    "   - Perpendicular gradient: \\(3\\).\n" +
    "   - Equation: \\(y - 8 = 3(x - 5) \\implies y = 3x - 7\\).\n\n" +
    "c) Altitude through \\(A\\) is perpendicular to \\(BC\\):\n" +
    "   - Gradient \\(BC\\): \\(m_{BC} = \\frac{0 - 8}{7 - 5} = -4\\).\n" +
    "   - Perpendicular gradient: \\(\\frac{1}{4}\\).\n" +
    "   - Equation: \\(y - 2 = \\frac{1}{4}(x - 1) \\implies y = \\frac{1}{4}x + \\frac{7}{4}\\).",
  t: "Parallel and perpendicular straight lines",
  hint: "An altitude is a line through a vertex perpendicular to the opposite side. Find the gradient of the opposite side, take its negative reciprocal, and use point-gradient form.",
  graphData: {
    jsxGraph: {
      width: 350,
      height: 350,
      boundingbox: [-1, 10, 9, -2],
      showConstructionPoints: true,
      boardOptions: {
        axis: true,
        grid: true
      },
      script: `board.suspendUpdate();
var pA = board.create('point', [1, 2], {size: 3, color: 'black', name: 'A(1, 2)', withLabel: true, label: {offset: [-15, 10]}});
var pB = board.create('point', [5, 8], {size: 3, color: 'black', name: 'B(5, 8)', withLabel: true, label: {offset: [10, 10]}});
var pC = board.create('point', [7, 0], {size: 3, color: 'black', name: 'C(7, 0)', withLabel: true, label: {offset: [10, -10]}});
board.create('polygon', [pA, pB, pC], {fillColor: 'none', borders: {strokeColor: 'black', strokeWidth: 1.5}});
board.unsuspendUpdate();`
    }
  },
  subQuestions: [
    {
      id: "y9-11g-q16a",
      type: "short_answer",
      difficulty: "hard",
      timeLimit: 120,
      question: "a) Find the equation of the altitude through \\(C\\).",
      a: "y = -2/3x + 14/3",
      solutionSteps: [
        {
          explanation: "Gradient of AB is 3/2, so the altitude gradient is -2/3.",
          workingOut: "y - 0 = -\\frac{2}{3}(x - 7) \\implies y = -\\frac{2}{3}x + \\frac{14}{3}"
        }
      ]
    },
    {
      id: "y9-11g-q16b",
      type: "short_answer",
      difficulty: "hard",
      timeLimit: 120,
      question: "b) Find the equation of the altitude through \\(B\\).",
      a: "y = 3x - 7",
      solutionSteps: [
        {
          explanation: "Gradient of AC is -1/3, so the altitude gradient is 3.",
          workingOut: "y - 8 = 3(x - 5) \\implies y = 3x - 7"
        }
      ]
    },
    {
      id: "y9-11g-q16c",
      type: "short_answer",
      difficulty: "hard",
      timeLimit: 120,
      question: "c) Find the equation of the altitude through \\(A\\).",
      a: "y = 1/4x + 7/4",
      solutionSteps: [
        {
          explanation: "Gradient of BC is -4, so the altitude gradient is 1/4.",
          workingOut: "y - 2 = \\frac{1}{4}(x - 1) \\implies y = \\frac{1}{4}x + \\frac{7}{4}"
        }
      ]
    }
  ]
});

// Q17: Adjacent vertices of square ABCD A(4, 5) and B(5, 7) (hard, 120s limit)
questions.push({
  id: "y9-11g-q17",
  type: "teacher_review",
  difficulty: "hard",
  timeLimit: 120,
  question: "Adjacent vertices of a square \\(ABCD\\) are \\(A(4, 5)\\) and \\(B(5, 7)\\). Answer the following sub-questions.",
  a: "a) \\sqrt{5}, b) 2, c) -1/2, d) 6, e) (6, 4)",
  solution: "a) Side length \\(AB\\): \\(d = \\sqrt{(5-4)^2 + (7-5)^2} = \\sqrt{1 + 4} = \\sqrt{5}\\).\n\n" +
    "b) Gradient of \\(AB\\): \\(m = \\frac{7 - 5}{5 - 4} = 2\\).\n\n" +
    "c) Since opposite/adjacent sides of a square are perpendicular, \\(BC \\perp AB\\), so the gradient of \\(BC\\) is \\(-\\frac{1}{2}\\).\n\n" +
    "d) Given \\(C(7, c)\\), the gradient of \\(BC\\) is \\(\\frac{c - 7}{7 - 5} = \\frac{c - 7}{2}\\).\n" +
    "   Set \\(\\frac{c - 7}{2} = -\\frac{1}{2} \\implies c - 7 = -1 \\implies c = 6\\).\n\n" +
    "e) Vector \\(\\vec{AD} = \\vec{BC} = C - B = (7 - 5, 6 - 7) = (2, -1)\\).\n" +
    "   Therefore, \\(D = A + (2, -1) = (4 + 2, 5 - 1) = (6, 4)\\).",
  t: "Parallel and perpendicular straight lines",
  hint: "Use the distance formula for side length, perpendicular slope condition for gradients, and translation vectors to find coordinate points.",
  graphData: {
    jsxGraph: {
      width: 350,
      height: 350,
      boundingbox: [2, 9, 9, 2],
      showConstructionPoints: true,
      boardOptions: {
        axis: true,
        grid: true
      },
      script: `board.suspendUpdate();
var pA = board.create('point', [4, 5], {size: 3, color: 'black', name: 'A(4, 5)', withLabel: true, label: {offset: [-15, -15]}});
var pB = board.create('point', [5, 7], {size: 3, color: 'black', name: 'B(5, 7)', withLabel: true, label: {offset: [-10, 15]}});
var pC = board.create('point', [7, 6], {size: 3, color: 'black', name: 'C(7, 6)', withLabel: true, label: {offset: [15, 10]}});
var pD = board.create('point', [6, 4], {size: 3, color: 'black', name: 'D(6, 4)', withLabel: true, label: {offset: [15, -15]}});
board.create('polygon', [pA, pB, pC, pD], {fillColor: 'none', borders: {strokeColor: 'black', strokeWidth: 1.5}});
board.unsuspendUpdate();`
    }
  },
  subQuestions: [
    {
      id: "y9-11g-q17a",
      type: "short_answer",
      difficulty: "hard",
      timeLimit: 120,
      question: "a) Find the length of each side of the square.",
      a: "\\sqrt{5}",
      solutionSteps: [
        {
          explanation: "Use distance formula.",
          workingOut: "AB = \\sqrt{(5-4)^2 + (7-5)^2} = \\sqrt{5}"
        }
      ]
    },
    {
      id: "y9-11g-q17b",
      type: "short_answer",
      difficulty: "hard",
      timeLimit: 120,
      question: "b) Find the gradient of \\(AB\\).",
      a: "2",
      solutionSteps: [
        {
          explanation: "Use gradient formula.",
          workingOut: "m = \\frac{7 - 5}{5 - 4} = 2"
        }
      ]
    },
    {
      id: "y9-11g-q17c",
      type: "short_answer",
      difficulty: "hard",
      timeLimit: 120,
      question: "c) Find the gradient of \\(BC\\).",
      a: "-1/2",
      solutionSteps: [
        {
          explanation: "BC is perpendicular to AB.",
          workingOut: "m = -\\frac{1}{2}"
        }
      ]
    },
    {
      id: "y9-11g-q17d",
      type: "short_answer",
      difficulty: "hard",
      timeLimit: 120,
      question: "d) The coordinates of \\(C\\) are \\((7, c)\\). Find the value of \\(c\\).",
      a: "6",
      solutionSteps: [
        {
          explanation: "Set gradient of BC to -1/2.",
          workingOut: "\\frac{c - 7}{7 - 5} = -\\frac{1}{2} \\implies c - 7 = -1 \\implies c = 6"
        }
      ]
    },
    {
      id: "y9-11g-q17e",
      type: "short_answer",
      difficulty: "hard",
      timeLimit: 120,
      question: "e) Find the coordinates of \\(D\\).",
      a: "(6, 4)",
      solutionSteps: [
        {
          explanation: "Translate A by the vector BC = (2, -1).",
          workingOut: "D = (4 + 2, 5 - 1) = (6, 4)"
        }
      ]
    }
  ]
});

// Write to file
const fileContent = `export const Y9_CH11G_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(targetFile, fileContent, 'utf-8');
console.log("Successfully generated seedYear9Ch11GQuestions.js!");
