const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '../src/constants/seedYear9Ch11HQuestions.js');

const questions = [];

// Q1: Test whether or not the point is on x^2 + y^2 = 25 (easy, timeLimit: 30, split)
const q1Points = [
  { sub: 'a', coord: '(5, 0)', ans: 'Yes', check: '5^2 + 0^2 = 25' },
  { sub: 'b', coord: '(3, 4)', ans: 'Yes', check: '3^2 + 4^2 = 25' },
  { sub: 'c', coord: '(0, -5)', ans: 'Yes', check: '0^2 + (-5)^2 = 25' },
  { sub: 'd', coord: '(3, 3)', ans: 'No', check: '3^2 + 3^2 = 18 \\neq 25' },
  { sub: 'e', coord: '(-4, 3)', ans: 'Yes', check: '(-4)^2 + 3^2 = 25' },
  { sub: 'f', coord: '(5\\sqrt{2}, 5\\sqrt{2})', ans: 'No', check: '(5\\sqrt{2})^2 + (5\\sqrt{2})^2 = 50 \\neq 25' },
  { sub: 'g', coord: '(\\frac{5\\sqrt{2}}{2}, \\frac{5\\sqrt{2}}{2})', ans: 'Yes', check: '(\\frac{5\\sqrt{2}}{2})^2 + (\\frac{5\\sqrt{2}}{2})^2 = 12.5 + 12.5 = 25' },
  { sub: 'h', coord: '(2, \\sqrt{21})', ans: 'Yes', check: '2^2 + (\\sqrt{21})^2 = 4 + 21 = 25' },
  { sub: 'i', coord: '(\\sqrt{7}, 3\\sqrt{2})', ans: 'Yes', check: '(\\sqrt{7})^2 + (3\\sqrt{2})^2 = 7 + 18 = 25' }
];

q1Points.forEach(p => {
  questions.push({
    id: `y9-11h-q1${p.sub}`,
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 30,
    question: `Test whether or not the point with the coordinates \\(${p.coord}\\) lies on the circle \\(x^2 + y^2 = 25\\). Enter 'Yes' or 'No'.`,
    a: p.ans,
    solution: `Substitute the coordinates into \\(x^2 + y^2\\):\n` +
      `\\(${p.check}\\).\n` +
      `Therefore, the answer is **${p.ans}**.`,
    t: "The circle",
    hint: "Substitute the x and y values of the point into the left side of the circle equation and check if it equals 25.",
    solutionSteps: [
      {
        explanation: "Substitute point into LHS of circle equation.",
        workingOut: `${p.check}`
      }
    ],
    graphData: null
  });
});

// Q2: Test whether or not the point is on x^2 + y^2 = 64 (easy, timeLimit: 30, split)
const q2Points = [
  { sub: 'a', coord: '(8, 0)', ans: 'Yes', check: '8^2 + 0^2 = 64' },
  { sub: 'b', coord: '(6, 6)', ans: 'No', check: '6^2 + 6^2 = 72 \\neq 64' },
  { sub: 'c', coord: '(4\\sqrt{2}, 4\\sqrt{2})', ans: 'Yes', check: '(4\\sqrt{2})^2 + (4\\sqrt{2})^2 = 32 + 32 = 64' },
  { sub: 'd', coord: '(8, 8)', ans: 'No', check: '8^2 + 8^2 = 128 \\neq 64' },
  { sub: 'e', coord: '(0, -8)', ans: 'Yes', check: '0^2 + (-8)^2 = 64' },
  { sub: 'f', coord: '(-4\\sqrt{2}, 4\\sqrt{2})', ans: 'Yes', check: '(-4\\sqrt{2})^2 + (4\\sqrt{2})^2 = 32 + 32 = 64' },
  { sub: 'g', coord: '(4, 4\\sqrt{3})', ans: 'Yes', check: '4^2 + (4\\sqrt{3})^2 = 16 + 48 = 64' },
  { sub: 'h', coord: '(2, 2\\sqrt{15})', ans: 'Yes', check: '2^2 + (2\\sqrt{15})^2 = 4 + 60 = 64' },
  { sub: 'i', coord: '(\\sqrt{14}, 5\\sqrt{2})', ans: 'Yes', check: '(\\sqrt{14})^2 + (5\\sqrt{2})^2 = 14 + 50 = 64' }
];

q2Points.forEach(p => {
  questions.push({
    id: `y9-11h-q2${p.sub}`,
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 30,
    question: `Test whether or not the point with the coordinates \\(${p.coord}\\) lies on the circle \\(x^2 + y^2 = 64\\). Enter 'Yes' or 'No'.`,
    a: p.ans,
    solution: `Substitute the coordinates into \\(x^2 + y^2\\):\n` +
      `\\(${p.check}\\).\n` +
      `Therefore, the answer is **${p.ans}**.`,
    t: "The circle",
    hint: "Substitute the x and y values of the point into the left side of the circle equation and check if it equals 64.",
    solutionSteps: [
      {
        explanation: "Substitute point into LHS of circle equation.",
        workingOut: `${p.check}`
      }
    ],
    graphData: null
  });
});

// Q3: Test whether or not the point is on x^2 + y^2 = 50 (easy, timeLimit: 30, split)
const q3Points = [
  { sub: 'a', coord: '(5\\sqrt{2}, 0)', ans: 'Yes', check: '(5\\sqrt{2})^2 + 0^2 = 50' },
  { sub: 'b', coord: '(5, 5)', ans: 'Yes', check: '5^2 + 5^2 = 50' },
  { sub: 'c', coord: '(-5, 5)', ans: 'Yes', check: '(-5)^2 + 5^2 = 50' },
  { sub: 'd', coord: '(0, -5\\sqrt{2})', ans: 'Yes', check: '0^2 + (-5\\sqrt{2})^2 = 50' },
  { sub: 'e', coord: '(3, \\sqrt{41})', ans: 'Yes', check: '3^2 + (\\sqrt{41})^2 = 9 + 41 = 50' },
  { sub: 'f', coord: '(7, 1)', ans: 'Yes', check: '7^2 + 1^2 = 50' },
  { sub: 'g', coord: '(5, 5\\sqrt{2})', ans: 'No', check: '5^2 + (5\\sqrt{2})^2 = 25 + 50 = 75 \\neq 50' },
  { sub: 'h', coord: '(1, 7)', ans: 'Yes', check: '1^2 + 7^2 = 50' },
  { sub: 'i', coord: '(-\\sqrt{10}, 2\\sqrt{10})', ans: 'Yes', check: '(-\\sqrt{10})^2 + (2\\sqrt{10})^2 = 10 + 40 = 50' }
];

q3Points.forEach(p => {
  questions.push({
    id: `y9-11h-q3${p.sub}`,
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 30,
    question: `Test whether or not the point with the coordinates \\(${p.coord}\\) lies on the circle \\(x^2 + y^2 = 50\\). Enter 'Yes' or 'No'.`,
    a: p.ans,
    solution: `Substitute the coordinates into \\(x^2 + y^2\\):\n` +
      `\\(${p.check}\\).\n` +
      `Therefore, the answer is **${p.ans}**.`,
    t: "The circle",
    hint: "Substitute the x and y values of the point into the left side of the circle equation and check if it equals 50.",
    solutionSteps: [
      {
        explanation: "Substitute point into LHS of circle equation.",
        workingOut: `${p.check}`
      }
    ],
    graphData: null
  });
});

// Q4: Sketch the graph of the circle (easy, timeLimit: 30, split)
const q4Equations = [
  { sub: 'a', eq: 'x^2 + y^2 = 9', r: 3 },
  { sub: 'b', eq: 'x^2 + y^2 = 5', r: Math.sqrt(5), rText: '\\sqrt{5}' },
  { sub: 'c', eq: 'x^2 + y^2 = 36', r: 6 },
  { sub: 'd', eq: 'x^2 + y^2 = 12', r: Math.sqrt(12), rText: '2\\sqrt{3}' },
  { sub: 'e', eq: 'x^2 + y^2 = 8', r: Math.sqrt(8), rText: '2\\sqrt{2}' },
  { sub: 'f', eq: 'x^2 + y^2 = 49', r: 7 },
  { sub: 'g', eq: 'y^2 = 18 - x^2', r: Math.sqrt(18), rText: '3\\sqrt{2}' },
  { sub: 'h', eq: 'x^2 = 27 - y^2', r: Math.sqrt(27), rText: '3\\sqrt{3}' },
  { sub: 'i', eq: 'y^2 = 20 - x^2', r: Math.sqrt(20), rText: '2\\sqrt{5}' }
];

q4Equations.forEach(p => {
  const rVal = p.rText || p.r.toString();
  questions.push({
    id: `y9-11h-q4${p.sub}`,
    type: "teacher_review",
    difficulty: "easy",
    timeLimit: 30,
    question: `Sketch the graph of the circle \\(${p.eq}\\), labelling the \\(x\\)- and \\(y\\)-intercepts.`,
    a: `Circle centered at (0, 0) with radius R = ${rVal}. Intercepts: (${rVal}, 0), (-${rVal}, 0), (0, ${rVal}), (0, -${rVal}).`,
    solution: `1. Identify the equation as a circle of form \\(x^2 + y^2 = r^2\\) centered at the origin.\n` +
      `2. Here, \\(r^2 = ${p.eq.includes('=') ? p.eq.split('=')[1].trim() : p.eq.split(' = ')[1] || p.r * p.r}\\), so radius \\(r = ${rVal}\\).\n` +
      `3. Sketch a circle centered at \\((0,0)\\) passing through intercepts:\n` +
      `   - \\(x\\)-intercepts: \\((${rVal}, 0)\\) and \\((- ${rVal}, 0)\\)\n` +
      `   - \\(y\\)-intercepts: \\((0, ${rVal})\\) and \\((0, - ${rVal})\\).`,
    t: "The circle",
    hint: "Identify the radius, then plot intercepts at (±r, 0) and (0, ±r) before sketching the circular outline.",
    solutionSteps: [
      {
        explanation: "Find the radius of the circle.",
        workingOut: `r = \\sqrt{${p.r * p.r}} = ${rVal}`
      },
      {
        explanation: "Determine the coordinate intercepts.",
        workingOut: `x\\text{-intercepts}: (\\pm ${rVal}, 0), \\quad y\\text{-intercepts}: (0, \\pm ${rVal})`
      }
    ],
    graphData: {
      jsxGraph: {
        width: 300,
        height: 300,
        boundingbox: [-p.r - 2, p.r + 2, p.r + 2, -p.r - 2],
        showConstructionPoints: true,
        boardOptions: {
          axis: true,
          grid: true
        },
        script: `board.suspendUpdate();
var c = board.create('circle', [[0, 0], ${p.r}], {strokeColor: 'blue', strokeWidth: 2, fillColor: 'none'});
var p1 = board.create('point', [${p.r}, 0], {size: 3, color: 'red', name: '(${rVal}, 0)', withLabel: true, label: {offset: [10, 10]}});
var p2 = board.create('point', [-${p.r}, 0], {size: 3, color: 'red', name: '(-${rVal}, 0)', withLabel: true, label: {offset: [-35, 10]}});
var p3 = board.create('point', [0, ${p.r}], {size: 3, color: 'red', name: '(0, ${rVal})', withLabel: true, label: {offset: [10, 10]}});
var p4 = board.create('point', [0, -${p.r}], {size: 3, color: 'red', name: '(0, -${rVal})', withLabel: true, label: {offset: [10, -15]}});
board.unsuspendUpdate();`
      }
    }
  });
});

// Q5: Write down the equation of the circle (easy, timeLimit: 30, split)
const q5Data = [
  { sub: 'a', r: '11', ans: 'x^2 + y^2 = 121' },
  { sub: 'b', r: '\\sqrt{7}', ans: 'x^2 + y^2 = 7' },
  { sub: 'c', r: '2\\sqrt{3}', ans: 'x^2 + y^2 = 12' },
  { sub: 'd', r: '5\\sqrt{3}', ans: 'x^2 + y^2 = 75' }
];

q5Data.forEach(p => {
  questions.push({
    id: `y9-11h-q5${p.sub}`,
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 30,
    question: `Write down the equation of the circle with centre the origin and radius \\(${p.r}\\).`,
    a: p.ans,
    solution: `The standard equation of a circle centered at the origin with radius \\(r\\) is \\(x^2 + y^2 = r^2\\).\n` +
      `Here, \\(r = ${p.r}\\), so \\(r^2 = (${p.r})^2 = ${p.ans.split('=')[1].trim()}\\).\n` +
      `Thus, the equation is \\(${p.ans}\\).`,
    t: "The circle",
    hint: "Use the formula \\(x^2 + y^2 = r^2\\) where \\(r\\) is the radius.",
    solutionSteps: [
      {
        explanation: "Calculate r^2.",
        workingOut: `r^2 = (${p.r})^2 = ${p.ans.split('=')[1].trim()}`
      },
      {
        explanation: "Substitute into equation form.",
        workingOut: `${p.ans}`
      }
    ],
    graphData: null
  });
});

// Q6: Find the equation of the circle passing through the point (easy, timeLimit: 30, split)
const q6Data = [
  { sub: 'a', pt: '(2, 2)', r2: 8 },
  { sub: 'b', pt: '(3, 2)', r2: 13 },
  { sub: 'c', pt: '(4, 1)', r2: 17 },
  { sub: 'd', pt: '(1, 8)', r2: 65 },
  { sub: 'e', pt: '(3, 4)', r2: 25 },
  { sub: 'f', pt: '(5, 12)', r2: 169 },
  { sub: 'g', pt: '(\\sqrt{3}, \\sqrt{3})', r2: 6 },
  { sub: 'h', pt: '(\\sqrt{5}, \\sqrt{5})', r2: 10 },
  { sub: 'i', pt: '(-2, 5)', r2: 29 },
  { sub: 'j', pt: '(-3, -4)', r2: 25 },
  { sub: 'k', pt: '(-8, 15)', r2: 289 },
  { sub: 'l', pt: '(3\\sqrt{2}, 3\\sqrt{2})', r2: 36 }
];

q6Data.forEach(p => {
  questions.push({
    id: `y9-11h-q6${p.sub}`,
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 30,
    question: `Find the equation of the circle with centre the origin passing through the point \\(${p.pt}\\).`,
    a: `x^2 + y^2 = ${p.r2}`,
    solution: `1. The circle equation has the form \\(x^2 + y^2 = r^2\\).\n` +
      `2. Substitute the given point \\(${p.pt}\\) into the LHS to find \\(r^2\\):\n` +
      `   \\(r^2 = x^2 + y^2 = ${p.r2}\\).\n` +
      `3. Thus, the equation is \\(x^2 + y^2 = ${p.r2}\\).`,
    t: "The circle",
    hint: "Use \\(x^2 + y^2 = r^2\\) and substitute the given coordinates to calculate \\(r^2\\).",
    solutionSteps: [
      {
        explanation: "Substitute coordinates to find r^2.",
        workingOut: `r^2 = x^2 + y^2 = ${p.r2}`
      },
      {
        explanation: "Write down the circle equation.",
        workingOut: `x^2 + y^2 = ${p.r2}`
      }
    ],
    graphData: null
  });
});

// Q7: Find the equation of the circle with centre the origin and diameter (easy, timeLimit: 30, split)
const q7Data = [
  { sub: 'a', d: '8', r2: '16' },
  { sub: 'b', d: '14', r2: '49' },
  { sub: 'c', d: '5', r2: '25/4' },
  { sub: 'd', d: '9', r2: '81/4' },
  { sub: 'e', d: '\\frac{5}{6}', r2: '25/144' }
];

q7Data.forEach(p => {
  questions.push({
    id: `y9-11h-q7${p.sub}`,
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 30,
    question: `Find the equation of the circle with centre the origin and diameter \\(${p.d}\\).`,
    a: `x^2 + y^2 = ${p.r2}`,
    solution: `1. The radius is half of the diameter:\n` +
      `   \\(r = \\frac{d}{2} = \\frac{${p.d}}{2}\\).\n` +
      `2. The circle equation is \\(x^2 + y^2 = r^2\\).\n` +
      `   \\(r^2 = \\left(\\frac{${p.d}}{2}\\right)^2 = ${p.r2}\\).\n` +
      `3. The equation is \\(x^2 + y^2 = ${p.r2}\\).`,
    t: "The circle",
    hint: "Halve the diameter to find the radius, then square it to find \\(r^2\\) in \\(x^2 + y^2 = r^2\\).",
    solutionSteps: [
      {
        explanation: "Calculate the radius from the diameter.",
        workingOut: `r = \\frac{${p.d}}{2}`
      },
      {
        explanation: "Calculate r^2 and write circle equation.",
        workingOut: `r^2 = ${p.r2} \\implies x^2 + y^2 = ${p.r2}`
      }
    ],
    graphData: null
  });
});

// Q8: Inscribed rectangle in circle (medium, timeLimit: 90)
questions.push({
  id: "y9-11h-q8",
  type: "short_answer",
  difficulty: "medium",
  timeLimit: 90,
  question: "The point \\(A(5, 12)\\) lies on the circle \\(x^2 + y^2 = 169\\). The rectangle \\(ABCD\\) has axes of symmetry the \\(x\\)- and \\(y\\)-axes. Find the coordinates of \\(B\\), \\(C\\) and \\(D\\). Format: B(x, y), C(x, y), D(x, y)",
  a: "B(-5, 12), C(-5, -12), D(5, -12)",
  solution: "Since the axes of symmetry of the rectangle \\(ABCD\\) are the coordinate axes:\n" +
    "1. Point \\(B\\) is in Quadrant II, symmetric to \\(A(5, 12)\\) across the \\(y\\)-axis, so \\(B(-5, 12)\\).\n" +
    "2. Point \\(C\\) is in Quadrant III, symmetric to \\(A\\) across the origin, so \\(C(-5, -12)\\).\n" +
    "3. Point \\(D\\) is in Quadrant IV, symmetric to \\(A\\) across the \\(x\\)-axis, so \\(D(5, -12)\\).",
  t: "The circle",
  hint: "Reflect the coordinates of \\(A(5, 12)\\) across the coordinate axes to find the other vertices in each quadrant.",
  solutionSteps: [
    {
      explanation: "Reflect across y-axis for B.",
      workingOut: "B = (-5, 12)"
    },
    {
      explanation: "Reflect across origin for C.",
      workingOut: "C = (-5, -12)"
    },
    {
      explanation: "Reflect across x-axis for D.",
      workingOut: "D = (5, -12)"
    }
  ],
  graphData: {
    jsxGraph: {
      width: 350,
      height: 350,
      boundingbox: [-15, 15, 15, -15],
      showConstructionPoints: true,
      boardOptions: {
        axis: true,
        grid: true
      },
      script: `board.suspendUpdate();
board.create('circle', [[0, 0], 13], {strokeColor: 'blue', fillColor: 'none', strokeWidth: 1.5});
var pA = board.create('point', [5, 12], {size: 3, color: 'black', name: 'A(5, 12)', withLabel: true, label: {offset: [10, 10]}});
var pB = board.create('point', [-5, 12], {size: 3, color: 'black', name: 'B(-5, 12)', withLabel: true, label: {offset: [-70, 10]}});
var pC = board.create('point', [-5, -12], {size: 3, color: 'black', name: 'C(-5, -12)', withLabel: true, label: {offset: [-75, -15]}});
var pD = board.create('point', [5, -12], {size: 3, color: 'black', name: 'D(5, -12)', withLabel: true, label: {offset: [10, -15]}});
board.create('polygon', [pA, pB, pC, pD], {fillColor: 'none', borders: {strokeColor: 'black', strokeWidth: 1}});
board.unsuspendUpdate();`
    }
  }
});

// Q9: Inscribed square ABCD with vertices on axes (medium, timeLimit: 90, subQuestions)
questions.push({
  id: "y9-11h-q9",
  type: "teacher_review",
  difficulty: "medium",
  timeLimit: 90,
  question: "The circle shown below has equation \\(x^2 + y^2 = 36\\). A square \\(ABCD\\) is inscribed in the circle with vertices on the axes: \\(A(0, 6)\\), \\(B(6, 0)\\), \\(C(0, -6)\\), and \\(D(-6, 0)\\). Answer the following sub-questions.",
  a: "a) 6\\sqrt{2}, b) 72",
  solution: "a) Distance \\(AB\\): \\(d = \\sqrt{(6-0)^2 + (0-6)^2} = \\sqrt{36+36} = \\sqrt{72} = 6\\sqrt{2}\\).\n\n" +
    "b) Area of the square \\(ABCD\\): \\(\\text{Area} = AB^2 = (6\\sqrt{2})^2 = 72\\).",
  t: "The circle",
  hint: "Use the distance formula for side length AB, then square it to find the area.",
  graphData: {
    jsxGraph: {
      width: 350,
      height: 350,
      boundingbox: [-8, 8, 8, -8],
      showConstructionPoints: true,
      boardOptions: {
        axis: true,
        grid: true
      },
      script: `board.suspendUpdate();
board.create('circle', [[0, 0], 6], {strokeColor: 'blue', fillColor: 'none', strokeWidth: 1.5});
var pA = board.create('point', [0, 6], {size: 3, color: 'black', name: 'A(0, 6)', withLabel: true, label: {offset: [10, 10]}});
var pB = board.create('point', [6, 0], {size: 3, color: 'black', name: 'B(6, 0)', withLabel: true, label: {offset: [10, 10]}});
var pC = board.create('point', [0, -6], {size: 3, color: 'black', name: 'C(0, -6)', withLabel: true, label: {offset: [10, -15]}});
var pD = board.create('point', [-6, 0], {size: 3, color: 'black', name: 'D(-6, 0)', withLabel: true, label: {offset: [-40, 10]}});
board.create('polygon', [pA, pB, pC, pD], {fillColor: 'none', borders: {strokeColor: 'black', strokeWidth: 1}});
board.unsuspendUpdate();`
    }
  },
  subQuestions: [
    {
      id: "y9-11h-q9a",
      type: "short_answer",
      difficulty: "medium",
      timeLimit: 90,
      question: "a) Find the distance \\(AB\\).",
      a: "6\\sqrt{2}",
      solutionSteps: [
        {
          explanation: "Apply distance formula.",
          workingOut: "AB = \\sqrt{(6-0)^2 + (0-6)^2} = \\sqrt{72} = 6\\sqrt{2}"
        }
      ]
    },
    {
      id: "y9-11h-q9b",
      type: "short_answer",
      difficulty: "medium",
      timeLimit: 90,
      question: "b) Find the area of the square \\(ABCD\\).",
      a: "72",
      solutionSteps: [
        {
          explanation: "Area is side length squared.",
          workingOut: "Area = (6\\sqrt{2})^2 = 72"
        }
      ]
    }
  ]
});

// Q10: Square ABCD inscribed in circle x^2 + y^2 = 100 (medium, timeLimit: 90, subQuestions)
questions.push({
  id: "y9-11h-q10",
  type: "teacher_review",
  difficulty: "medium",
  timeLimit: 90,
  question: "The circle shown below has equation \\(x^2 + y^2 = 100\\). A square \\(ABCD\\) is inscribed in the circle with vertices \\(A(8, -6)\\), \\(B(6, 8)\\), \\(C(-8, 6)\\), and \\(D(-6, -8)\\). Answer the following sub-questions.",
  a: "a) -7, b) y = -7x + 50, c) 10\\sqrt{2}, d) 200",
  solution: "a) Gradient \\(AB\\): \\(m = \\frac{8 - (-6)}{6 - 8} = \\frac{14}{-2} = -7\\).\n\n" +
    "b) Equation of line \\(AB\\) passing through \\(B(6, 8)\\):\n" +
    "   \\(y - 8 = -7(x - 6) \\implies y - 8 = -7x + 42 \\implies y = -7x + 50\\).\n\n" +
    "c) Distance \\(AB\\): \\(d = \\sqrt{(6-8)^2 + (8 - (-6))^2} = \\sqrt{(-2)^2 + 14^2} = \\sqrt{4 + 196} = \\sqrt{200} = 10\\sqrt{2}\\).\n\n" +
    "d) Area of the square \\(ABCD\\): \\(\\text{Area} = AB^2 = (10\\sqrt{2})^2 = 200\\).",
  t: "The circle",
  hint: "Compute slopes and equations using line formula, and calculate length and area using coordinates.",
  graphData: {
    jsxGraph: {
      width: 350,
      height: 350,
      boundingbox: [-12, 12, 12, -12],
      showConstructionPoints: true,
      boardOptions: {
        axis: true,
        grid: true
      },
      script: `board.suspendUpdate();
board.create('circle', [[0, 0], 10], {strokeColor: 'blue', fillColor: 'none', strokeWidth: 1.5});
var pA = board.create('point', [8, -6], {size: 3, color: 'black', name: 'A(8, -6)', withLabel: true, label: {offset: [10, -5]}});
var pB = board.create('point', [6, 8], {size: 3, color: 'black', name: 'B(6, 8)', withLabel: true, label: {offset: [10, 10]}});
var pC = board.create('point', [-8, 6], {size: 3, color: 'black', name: 'C(-8, 6)', withLabel: true, label: {offset: [-55, 10]}});
var pD = board.create('point', [-6, -8], {size: 3, color: 'black', name: 'D(-6, -8)', withLabel: true, label: {offset: [-60, -15]}});
board.create('polygon', [pA, pB, pC, pD], {fillColor: 'none', borders: {strokeColor: 'black', strokeWidth: 1}});
board.unsuspendUpdate();`
    }
  },
  subQuestions: [
    {
      id: "y9-11h-q10a",
      type: "short_answer",
      difficulty: "medium",
      timeLimit: 90,
      question: "a) Find the gradient of \\(AB\\).",
      a: "-7",
      solutionSteps: [
        {
          explanation: "Find gradient of AB.",
          workingOut: "m = \\frac{8 - (-6)}{6 - 8} = -7"
        }
      ]
    },
    {
      id: "y9-11h-q10b",
      type: "short_answer",
      difficulty: "medium",
      timeLimit: 90,
      question: "b) Find the equation of the line \\(AB\\).",
      a: "y = -7x + 50",
      solutionSteps: [
        {
          explanation: "Apply point-slope formula.",
          workingOut: "y - 8 = -7(x - 6) \\implies y = -7x + 50"
        }
      ]
    },
    {
      id: "y9-11h-q10c",
      type: "short_answer",
      difficulty: "medium",
      timeLimit: 90,
      question: "c) Find the distance \\(AB\\).",
      a: "10\\sqrt{2}",
      solutionSteps: [
        {
          explanation: "Calculate distance.",
          workingOut: "AB = \\sqrt{(6-8)^2 + (8 - (-6))^2} = \\sqrt{200} = 10\\sqrt{2}"
        }
      ]
    },
    {
      id: "y9-11h-q10d",
      type: "short_answer",
      difficulty: "medium",
      timeLimit: 90,
      question: "d) Find the area of the square \\(ABCD\\).",
      a: "200",
      solutionSteps: [
        {
          explanation: "Square the side length.",
          workingOut: "Area = (10\\sqrt{2})^2 = 200"
        }
      ]
    }
  ]
});

// Q11: Triangle ABC inscribed in x^2 + y^2 = 36 (hard, timeLimit: 120, subQuestions)
questions.push({
  id: "y9-11h-q11",
  type: "teacher_review",
  difficulty: "hard",
  timeLimit: 120,
  question: "In the diagram, \\(\\Delta ABC\\) is inscribed in the circle \\(x^2 + y^2 = 36\\) where \\(A(0, 6)\\), \\(B(a, -3)\\) and \\(C(-a, -3)\\) (with \\(a > 0\\)). Answer the following sub-questions.",
  a: "a) 3\\sqrt{3}, b) 6\\sqrt{3}, c) 6\\sqrt{3}, d) Equilateral",
  solution: "a) Since \\(B(a, -3)\\) lies on the circle \\(x^2 + y^2 = 36\\):\n" +
    "   \\(a^2 + (-3)^2 = 36 \\implies a^2 + 9 = 36 \\implies a^2 = 27 \\implies a = 3\\sqrt{3}\\) (since \\(a > 0\\)).\n\n" +
    "b) Distance \\(AB\\) from \\(A(0, 6)\\) to \\(B(3\\sqrt{3}, -3)\\):\n" +
    "   \\(AB = \\sqrt{(3\\sqrt{3} - 0)^2 + (-3 - 6)^2} = \\sqrt{27 + 81} = \\sqrt{108} = 6\\sqrt{3}\\).\n\n" +
    "c) Distance \\(BC\\) from \\(C(-3\\sqrt{3}, -3)\\) to \\(B(3\\sqrt{3}, -3)\\):\n" +
    "   \\(BC = 3\\sqrt{3} - (-3\\sqrt{3}) = 6\\sqrt{3}\\).\n\n" +
    "d) Since \\(AB = BC = CA = 6\\sqrt{3}\\), all three sides are equal, so \\(\\Delta ABC\\) is **equilateral**.",
  t: "The circle",
  hint: "Substitute the point B into the circle equation to solve for a, then use distance formula for side lengths.",
  graphData: {
    jsxGraph: {
      width: 350,
      height: 350,
      boundingbox: [-8, 8, 8, -8],
      showConstructionPoints: true,
      boardOptions: {
        axis: true,
        grid: true
      },
      script: `board.suspendUpdate();
board.create('circle', [[0, 0], 6], {strokeColor: 'blue', fillColor: 'none', strokeWidth: 1.5});
var pA = board.create('point', [0, 6], {size: 3, color: 'black', name: 'A(0, 6)', withLabel: true, label: {offset: [10, 10]}});
var pB = board.create('point', [5.196, -3], {size: 3, color: 'black', name: 'B(a, -3)', withLabel: true, label: {offset: [10, -5]}});
var pC = board.create('point', [-5.196, -3], {size: 3, color: 'black', name: 'C(-a, -3)', withLabel: true, label: {offset: [-60, -5]}});
board.create('polygon', [pA, pB, pC], {fillColor: 'none', borders: {strokeColor: 'black', strokeWidth: 1.5}});
board.unsuspendUpdate();`
    }
  },
  subQuestions: [
    {
      id: "y9-11h-q11a",
      type: "short_answer",
      difficulty: "hard",
      timeLimit: 120,
      question: "a) Find the value of \\(a\\).",
      a: "3\\sqrt{3}",
      solutionSteps: [
        {
          explanation: "Substitute B(a, -3) into circle equation.",
          workingOut: "a^2 + (-3)^2 = 36 \\implies a^2 = 27 \\implies a = 3\\sqrt{3}"
        }
      ]
    },
    {
      id: "y9-11h-q11b",
      type: "short_answer",
      difficulty: "hard",
      timeLimit: 120,
      question: "b) Find the distance \\(AB\\).",
      a: "6\\sqrt{3}",
      solutionSteps: [
        {
          explanation: "Find distance between A and B.",
          workingOut: "AB = \\sqrt{(3\\sqrt{3})^2 + (-3-6)^2} = \\sqrt{27 + 81} = 6\\sqrt{3}"
        }
      ]
    },
    {
      id: "y9-11h-q11c",
      type: "short_answer",
      difficulty: "hard",
      timeLimit: 120,
      question: "c) Find the distance \\(BC\\).",
      a: "6\\sqrt{3}",
      solutionSteps: [
        {
          explanation: "Find distance between B and C.",
          workingOut: "BC = 2a = 6\\sqrt{3}"
        }
      ]
    },
    {
      id: "y9-11h-q11d",
      type: "short_answer",
      difficulty: "hard",
      timeLimit: 120,
      question: "d) What type of triangle is \\(\\Delta ABC\\)?",
      a: "Equilateral",
      solutionSteps: [
        {
          explanation: "Compare all side lengths.",
          workingOut: "AB = BC = CA = 6\\sqrt{3} \\implies Equilateral"
        }
      ]
    }
  ]
});

// Q12: Inscribed circle in equilateral triangle (hard, timeLimit: 120, subQuestions)
questions.push({
  id: "y9-11h-q12",
  type: "teacher_review",
  difficulty: "hard",
  timeLimit: 120,
  question: "A circle with centre the origin \\(O\\) is inscribed in the equilateral triangle \\(ABC\\) with base vertices \\(B(6, -y_0)\\), \\(C(-6, -y_0)\\), and \\(A(0, y_A)\\). The side \\(AB\\) is tangent to the circle at \\(X\\), and the side \\(BC\\) is tangent to the circle at \\(Y(0, -r)\\). Answer the following sub-questions.",
  a: "a) 6\\sqrt{3}, b) Proof: Angle AXO = Angle AYB = 90 degrees, Angle XAO = Angle YAB is a common angle. Hence similar by AA.",
  solution: "a) Since the base \\(BC\\) has length \\(6 - (-6) = 12\\) and \\(\\Delta ABC\\) is equilateral, the height \\(AY\\) is:\n" +
    "   \\(AY = \\text{side} \\times \\frac{\\sqrt{3}}{2} = 12 \\times \\frac{\\sqrt{3}}{2} = 6\\sqrt{3}\\).\n\n" +
    "b) Let's prove similarity of \\(\\Delta AXO\\) and \\(\\Delta AYB\\):\n" +
    "   1. \\(\\angle AXO = \\angle AYB = 90^\\circ\\) (radius to tangent is perpendicular, and altitude to base is perpendicular).\n" +
    "   2. \\(\\angle XAO = \\angle YAB\\) (common angle).\n" +
    "   Therefore, \\(\\Delta AXO \\sim \\Delta AYB\\) by AA Similarity.\n\n" +
    "c) By similar triangles, the ratio of corresponding sides is equal:\n" +
    "   \\(\\frac{OX}{YB} = \\frac{AO}{AB}\\)\n" +
    "   Let the radius of the circle be \\(r\\). Then \\(OX = r\\), \\(YB = 6\\), \\(AB = 12\\), and \\(AO = AY - OY = 6\\sqrt{3} - r\\).\n" +
    "   \\(\\frac{r}{6} = \\frac{6\\sqrt{3} - r}{12} \\implies 2r = 6\\sqrt{3} - r \\implies 3r = 6\\sqrt{3} \\implies r = 2\\sqrt{3}\\).\n" +
    "   Thus, \\(OX = 2\\sqrt{3}\\).\n" +
    "   The equation of the circle is \\(x^2 + y^2 = r^2 = 12\\).",
  t: "The circle",
  hint: "Find height of equilateral triangle, verify similarity of triangles by AA similarity, and set up ratios to solve for the radius r.",
  graphData: {
    jsxGraph: {
      width: 350,
      height: 350,
      boundingbox: [-7, 12, 7, -5],
      showConstructionPoints: true,
      boardOptions: {
        axis: true,
        grid: true
      },
      script: `board.suspendUpdate();
var pA = board.create('point', [0, 6.928], {size: 3, color: 'black', name: 'A', withLabel: true, label: {offset: [10, 10]}});
var pB = board.create('point', [6, -3.464], {size: 3, color: 'black', name: 'B', withLabel: true, label: {offset: [10, -5]}});
var pC = board.create('point', [-6, -3.464], {size: 3, color: 'black', name: 'C', withLabel: true, label: {offset: [-20, -5]}});
board.create('polygon', [pA, pB, pC], {fillColor: 'none', borders: {strokeColor: 'black', strokeWidth: 1.5}});
var pO = board.create('point', [0, 0], {size: 3, color: 'red', name: 'O', withLabel: true, label: {offset: [-15, 10]}});
board.create('circle', [[0, 0], 3.464], {strokeColor: 'blue', fillColor: 'none', strokeWidth: 1.5});
var pY = board.create('point', [0, -3.464], {size: 3, color: 'black', name: 'Y', withLabel: true, label: {offset: [10, -10]}});
var pX = board.create('point', [3, 1.732], {size: 3, color: 'black', name: 'X', withLabel: true, label: {offset: [10, 10]}});
board.create('segment', [pO, pX], {strokeColor: 'red', strokeWidth: 1});
board.create('segment', [pO, pY], {strokeColor: 'red', strokeWidth: 1});
board.unsuspendUpdate();`
    }
  },
  subQuestions: [
    {
      id: "y9-11h-q12a",
      type: "short_answer",
      difficulty: "hard",
      timeLimit: 120,
      question: "a) Find \\(AY\\).",
      a: "6\\sqrt{3}",
      solutionSteps: [
        {
          explanation: "Use height formula for equilateral triangle.",
          workingOut: "AY = 12 \\times \\frac{\\sqrt{3}}{2} = 6\\sqrt{3}"
        }
      ]
    },
    {
      id: "y9-11h-q12b",
      type: "teacher_review",
      difficulty: "hard",
      timeLimit: 120,
      question: "b) Give reasons why \\(\\Delta AXO\\) is similar to \\(\\Delta AYB\\).",
      a: "Proof: Angle AXO = Angle AYB = 90 degrees, Angle XAO = Angle YAB is a common angle. Hence similar by AA.",
      solutionSteps: [
        {
          explanation: "Identify angles.",
          workingOut: "\\angle AXO = \\angle AYB = 90^\\circ, \\quad \\angle XAO = \\angle YAB \\implies AA Similarity"
        }
      ]
    },
    {
      id: "y9-11h-q12c",
      type: "short_answer",
      difficulty: "hard",
      timeLimit: 120,
      question: "c) Find \\(OX\\) and hence find the equation of the circle. (Format: OX = [value], [equation])",
      a: "OX = 2\\sqrt{3}, x^2 + y^2 = 12",
      solutionSteps: [
        {
          explanation: "Set up ratio of sides from similar triangles.",
          workingOut: "\\frac{r}{6} = \\frac{6\\sqrt{3} - r}{12} \\implies 2r = 6\\sqrt{3} - r \\implies r = 2\\sqrt{3}"
        },
        {
          explanation: "Write down the circle equation.",
          workingOut: "x^2 + y^2 = r^2 = 12"
        }
      ]
    }
  ]
});

// Write to file
const fileContent = `export const Y9_CH11H_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(targetFile, fileContent, 'utf-8');
console.log("Successfully generated seedYear9Ch11HQuestions.js!");
