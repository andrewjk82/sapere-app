export const Y11_CH3D_QUESTIONS = [
// ── QUESTION 1 ──
{
  "id": "y11a-3d-q1",
  "type": "teacher_review",
  "difficulty": "easy",
  "timeLimit": 60,
  "t": "Quadratic functions — factoring and the graph",
  "question": "Analyze the properties of the concave-up parabola with equation \\( y = (x - 2)(x - 4) \\).",
  "subQuestions": [
  {
    "id": "y11a-3d-q1a1",
    "type": "multiple_choice",
    "question": "i) Explain why the parabola is concave up.",
    "opts": [
    "The coefficient of \\( x^2 \\) is positive (\\( a = 1 > 0 \\)).",
    "The coefficient of \\( x^2 \\) is negative (\\( a = -1 < 0 \\)).",
    "The constant term is positive (\\( c = 8 > 0 \\)).",
    "The parabola has two distinct real roots."],

    "a": "0"
  },
  {
    "id": "y11a-3d-q1a2",
    "type": "short_answer",
    "question": "ii) Write down its \\( y \\)-intercept.",
    "a": "8"
  },
  {
    "id": "y11a-3d-q1a3",
    "type": "short_answer",
    "question": "iii) Put \\( y = 0 \\) to find the \\( x \\)-intercepts. (Format: 'x = a, b' in ascending order)",
    "a": "x = 2, 4"
  },
  {
    "id": "y11a-3d-q1a4",
    "type": "short_answer",
    "question": "iv) Hence determine the equation of the axis of symmetry. (Format: 'x = k')",
    "a": "x = 3"
  },
  {
    "id": "y11a-3d-q1a5",
    "type": "short_answer",
    "question": "v) Use the axis of symmetry to find the coordinates of the vertex. (Format: '(x, y)')",
    "a": "(3, -1)"
  },
  {
    "id": "y11a-3d-q1a6",
    "type": "teacher_review",
    "question": "vi) Sketch the parabola, showing these features.",
    "a": "Parabola opening upwards with vertex at (3, -1), y-intercept at (0, 8), and x-intercepts at (2, 0) and (4, 0)."
  },
  {
    "id": "y11a-3d-q1a7",
    "type": "multiple_choice",
    "question": "vii) Does the quadratic function have equal zeroes or are the zeroes distinct?",
    "opts": [
    "Distinct zeroes",
    "Equal zeroes",
    "No real zeroes",
    "Infinite zeroes"],

    "a": "0"
  },
  {
    "id": "y11a-3d-q1b1",
    "type": "teacher_review",
    "question": "b) (i) Sketch the concave-up parabola \\( y = (x - 2)(x + 4) \\), showing its intercepts, axis of symmetry, and vertex.",
    "a": "Parabola concave up with vertex (-1, -9), y-intercept (0, -8), and x-intercepts (2, 0), (-4, 0)."
  },
  {
    "id": "y11a-3d-q1b2",
    "type": "teacher_review",
    "question": "b) (ii) Sketch the concave-up parabola \\( y = (x - 3)(x + 3) \\), showing its intercepts, axis of symmetry, and vertex.",
    "a": "Parabola concave up with vertex (0, -9), y-intercept (0, -9), and x-intercepts (3, 0), (-3, 0)."
  }],

  "solutionSteps": [
  {
    "explanation": "Identify concavity: Since the expansion is \\( y = x^2 - 6x + 8 \\), the coefficient of \\( x^2 \\) is \\( a = 1 > 0 \\), so it is concave up.",
    "workingOut": "a = 1 > 0 \\implies \\text{concave up}"
  },
  {
    "explanation": "Find the y-intercept by putting \\( x = 0 \\).",
    "workingOut": "y = (0 - 2)(0 - 4) = 8"
  },
  {
    "explanation": "Find the x-intercepts by setting \\( y = 0 \\).",
    "workingOut": "(x - 2)(x - 4) = 0 \\implies x = 2 \\text{ or } x = 4"
  },
  {
    "explanation": "Find the axis of symmetry, which is midway between the x-intercepts.",
    "workingOut": "x = \\frac{2 + 4}{2} = 3"
  },
  {
    "explanation": "Substitute \\( x = 3 \\) into the equation to find the vertex.",
    "workingOut": "y = (3 - 2)(3 - 4) = -1 \\implies \\text{Vertex: } (3, -1)"
  }],

  "graphData": {
    "jsxGraph": {
      "width": 350,
      "height": 250,
      "boundingbox": [-5, 11, 7, -3],
      "script": "board.suspendUpdate();\nboard.create('arrow', [[-4.5,0], [6.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-2.5], [0,10.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [6.3, -0.5, 'x'], {fontSize: 14});\nboard.create('text', [-0.5, 9.8, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return (x-2)*(x-4); }], {strokeColor: '#4f46e5', strokeWidth: 1.5});\nboard.create('point', [3, -1], {name: 'V(3,-1)', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [0, 8], {name: '(0,8)', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [2, 0], {name: '2', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [4, 0], {name: '4', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('line', [[3,-3], [3,11]], {strokeColor: '#64748b', dash: 2, strokeWidth: 1});\nboard.unsuspendUpdate();"
    }
  }
},

// ── QUESTION 2 ──
{
  "id": "y11a-3d-q2",
  "type": "teacher_review",
  "difficulty": "easy",
  "timeLimit": 60,
  "t": "Quadratic functions — factoring and the graph",
  "question": "Analyze the properties of the concave-down parabola with equation \\( y = -x(x - 4) \\).",
  "subQuestions": [
  {
    "id": "y11a-3d-q2a1",
    "type": "multiple_choice",
    "question": "i) Explain why the parabola is concave down.",
    "opts": [
    "The coefficient of \\( x^2 \\) is negative (\\( a = -1 < 0 \\)).",
    "The coefficient of \\( x^2 \\) is positive (\\( a = 1 > 0 \\)).",
    "The constant term is zero.",
    "The vertex lies in the first quadrant."],

    "a": "0"
  },
  {
    "id": "y11a-3d-q2a2",
    "type": "short_answer",
    "question": "ii) Write down its \\( y \\)-intercept.",
    "a": "0"
  },
  {
    "id": "y11a-3d-q2a3",
    "type": "short_answer",
    "question": "iii) Put \\( y = 0 \\) to find the \\( x \\)-intercepts. (Format: 'x = a, b' in ascending order)",
    "a": "x = 0, 4"
  },
  {
    "id": "y11a-3d-q2a4",
    "type": "short_answer",
    "question": "iv) Hence determine the equation of the axis of symmetry. (Format: 'x = k')",
    "a": "x = 2"
  },
  {
    "id": "y11a-3d-q2a5",
    "type": "short_answer",
    "question": "v) Use the axis of symmetry to find the coordinates of the vertex. (Format: '(x, y)')",
    "a": "(2, 4)"
  },
  {
    "id": "y11a-3d-q2a6",
    "type": "teacher_review",
    "question": "vi) Sketch the parabola, showing these features.",
    "a": "Parabola opening downwards with vertex at (2, 4), passing through (0, 0) and (4, 0)."
  },
  {
    "id": "y11a-3d-q2a7",
    "type": "multiple_choice",
    "question": "vii) Does the quadratic function have equal zeroes or are the zeroes distinct?",
    "opts": [
    "Distinct zeroes",
    "Equal zeroes",
    "No real zeroes",
    "Infinite zeroes"],

    "a": "0"
  },
  {
    "id": "y11a-3d-q2b1",
    "type": "teacher_review",
    "question": "b) (i) Sketch the concave-down parabola \\( y = (3 + x)(3 - x) \\), showing its intercepts, axis of symmetry, and vertex.",
    "a": "Parabola concave down with vertex at (0, 9), y-intercept at (0, 9), and x-intercepts at (-3, 0) and (3, 0)."
  },
  {
    "id": "y11a-3d-q2b2",
    "type": "teacher_review",
    "question": "b) (ii) Sketch the concave-down parabola \\( y = (x + 1)(5 - x) \\), showing its intercepts, axis of symmetry, and vertex.",
    "a": "Parabola concave down with vertex at (2, 9), y-intercept at (0, 5), and x-intercepts at (-1, 0) and (5, 0)."
  }],

  "solutionSteps": [
  {
    "explanation": "Expanding the equation gives \\( y = -x^2 + 4x \\). Since the coefficient of \\( x^2 \\) is \\( a = -1 < 0 \\), the curve is concave down.",
    "workingOut": "a = -1 < 0 \\implies \\text{concave down}"
  },
  {
    "explanation": "Substitute \\( x = 0 \\) to find the y-intercept.",
    "workingOut": "y = -0(0 - 4) = 0"
  },
  {
    "explanation": "Set \\( y = 0 \\) to find the x-intercepts.",
    "workingOut": "-x(x - 4) = 0 \\implies x = 0 \\text{ or } x = 4"
  },
  {
    "explanation": "Calculate the axis of symmetry by taking the midpoint of the intercepts.",
    "workingOut": "x = \\frac{0 + 4}{2} = 2"
  },
  {
    "explanation": "Substitute \\( x = 2 \\) back into the formula to find the vertex coordinates.",
    "workingOut": "y = -2(2 - 4) = 4 \\implies \\text{Vertex: } (2, 4)"
  }],

  "graphData": {
    "jsxGraph": {
      "width": 350,
      "height": 250,
      "boundingbox": [-3, 6, 7, -2],
      "script": "board.suspendUpdate();\nboard.create('arrow', [[-2.5,0], [6.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-1.5], [0,5.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [6.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 5.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return -x*(x-4); }], {strokeColor: '#4f46e5', strokeWidth: 1.5});\nboard.create('point', [2, 4], {name: 'V(2,4)', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [0, 0], {name: '(0,0)', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [4, 0], {name: '4', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('line', [[2,-2], [2,6]], {strokeColor: '#64748b', dash: 2, strokeWidth: 1});\nboard.unsuspendUpdate();"
    }
  }
},

// ── QUESTION 3 ──
{
  "id": "y11a-3d-q3",
  "type": "teacher_review",
  "difficulty": "easy",
  "timeLimit": 60,
  "t": "Quadratic functions — factoring and the graph",
  "question": "Analyze the properties of the perfect square parabola with equation \\( y = (x - 3)^2 \\).",
  "subQuestions": [
  {
    "id": "y11a-3d-q3a1",
    "type": "multiple_choice",
    "question": "i) Explain whether the parabola is concave up or concave down.",
    "opts": [
    "Concave up because the coefficient of \\( x^2 \\) is positive (\\( a = 1 > 0 \\)).",
    "Concave down because the coefficient of \\( x^2 \\) is negative (\\( a = -1 < 0 \\)).",
    "Concave up because the vertex is at (3, 0).",
    "Concave down because it is a perfect square."],

    "a": "0"
  },
  {
    "id": "y11a-3d-q3a2",
    "type": "short_answer",
    "question": "ii) Write down its \\( y \\)-intercept.",
    "a": "9"
  },
  {
    "id": "y11a-3d-q3a3",
    "type": "short_answer",
    "question": "iii) Put \\( y = 0 \\) to find its single \\( x \\)-intercept at the vertex.",
    "a": "3"
  },
  {
    "id": "y11a-3d-q3a4",
    "type": "short_answer",
    "question": "iv) Use symmetry and the \\( y \\)-intercept to find another point on the parabola. (Format: '(x, y)')",
    "a": "(6, 9)"
  },
  {
    "id": "y11a-3d-q3a5",
    "type": "teacher_review",
    "question": "v) Sketch the parabola showing these points.",
    "a": "Parabola concave up with vertex at (3, 0), y-intercept at (0, 9), and symmetrical point at (6, 9)."
  },
  {
    "id": "y11a-3d-q3a6",
    "type": "multiple_choice",
    "question": "vi) Does the quadratic function have equal zeroes or are the zeroes distinct?",
    "opts": [
    "Equal zeroes",
    "Distinct zeroes",
    "No real zeroes",
    "Infinite zeroes"],

    "a": "0"
  },
  {
    "id": "y11a-3d-q3b1",
    "type": "teacher_review",
    "question": "b) (i) Sketch the perfect square parabola \\( y = (x + 2)^2 \\) showing its intercepts and vertex.",
    "a": "Parabola concave up with vertex/x-intercept at (-2, 0) and y-intercept at (0, 4)."
  },
  {
    "id": "y11a-3d-q3b2",
    "type": "teacher_review",
    "question": "b) (ii) Sketch the perfect square parabola \\( y = -(x - 4)^2 \\) showing its intercepts and vertex.",
    "a": "Parabola concave down with vertex/x-intercept at (4, 0) and y-intercept at (0, -16)."
  }],

  "solutionSteps": [
  {
    "explanation": "Expanding the equation gives \\( y = x^2 - 6x + 9 \\). The leading coefficient is \\( 1 > 0 \\), so it is concave up.",
    "workingOut": "a = 1 \\implies \\text{concave up}"
  },
  {
    "explanation": "Set \\( x = 0 \\) to find the y-intercept.",
    "workingOut": "y = (0 - 3)^2 = 9"
  },
  {
    "explanation": "Set \\( y = 0 \\) to find the x-intercept.",
    "workingOut": "(x - 3)^2 = 0 \\implies x = 3"
  },
  {
    "explanation": "The vertex is at \\( (3, 0) \\). Since the y-intercept is at \\( x = 0 \\) (3 units left of axis of symmetry), a symmetrical point is located 3 units to the right of \\( x = 3 \\).",
    "workingOut": "x = 3 + 3 = 6 \\implies (6, 9)"
  }],

  "graphData": {
    "jsxGraph": {
      "width": 350,
      "height": 250,
      "boundingbox": [-3, 12, 9, -2],
      "script": "board.suspendUpdate();\nboard.create('arrow', [[-2.5,0], [8.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-1.5], [0,11.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [8.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 11.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return Math.pow(x-3, 2); }], {strokeColor: '#4f46e5', strokeWidth: 1.5});\nboard.create('point', [3, 0], {name: 'V(3,0)', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [0, 9], {name: '(0,9)', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [6, 9], {name: '(6,9)', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('line', [[3,-2], [3,12]], {strokeColor: '#64748b', dash: 2, strokeWidth: 1});\nboard.unsuspendUpdate();"
    }
  }
},

// ── QUESTION 4 ──
{
  "id": "y11a-3d-q4",
  "type": "teacher_review",
  "difficulty": "easy",
  "timeLimit": 60,
  "t": "Quadratic functions — factoring and the graph",
  "question": "Consider the properties of the parabola \\( y = \\frac{1}{4}x^2 \\), which passes through the origin.",
  "subQuestions": [
  {
    "id": "y11a-3d-q4a1",
    "type": "short_answer",
    "question": "a) (i) Plot the point corresponding to \\( x = 4 \\) on this parabola. What is its y-value?",
    "a": "4"
  },
  {
    "id": "y11a-3d-q4a2",
    "type": "short_answer",
    "question": "a) (ii) What other point must lie on the parabola due to symmetry about the y-axis? (Format: '(x, y)')",
    "a": "(-4, 4)"
  },
  {
    "id": "y11a-3d-q4a3",
    "type": "teacher_review",
    "question": "a) (iii) Sketch the graph of \\( y = \\frac{1}{4}x^2 \\).",
    "a": "Parabola concave up passing through (0, 0), (4, 4), and (-4, 4)."
  },
  {
    "id": "y11a-3d-q4b1",
    "type": "teacher_review",
    "question": "b) (i) Use a similar approach to graph the parabola \\( y = -2x^2 \\).",
    "a": "Narrow concave down parabola passing through (0, 0), (1, -2), and (-1, -2)."
  },
  {
    "id": "y11a-3d-q4b2",
    "type": "teacher_review",
    "question": "b) (ii) Use a similar approach to graph the parabola \\( y = \\frac{1}{5}x^2 \\).",
    "a": "Wide concave up parabola passing through (0, 0), (5, 5), and (-5, 5)."
  }],

  "solutionSteps": [
  {
    "explanation": "Substitute \\( x = 4 \\) into the equation \\( y = \\frac{1}{4}x^2 \\).",
    "workingOut": "y = \\frac{1}{4}(4)^2 = 4 \\implies (4, 4)"
  },
  {
    "explanation": "Since the parabola is symmetric about the y-axis \\( x = 0 \\), the point reflecting across the y-axis must have the opposite x-value but same y-value.",
    "workingOut": "\\text{Symmetric point to } (4, 4) \\text{ is } (-4, 4)"
  }],

  "graphData": {
    "jsxGraph": {
      "width": 350,
      "height": 250,
      "boundingbox": [-6, 6, 6, -2],
      "script": "board.suspendUpdate();\nboard.create('arrow', [[-5.5,0], [5.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-1.5], [0,5.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [5.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 5.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return 0.25*x*x; }], {strokeColor: '#4f46e5', strokeWidth: 1.5});\nboard.create('point', [0, 0], {name: '(0,0)', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [4, 4], {name: '(4,4)', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [-4, 4], {name: '(-4,4)', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
    }
  }
},

// ── QUESTION 5a ──
{
  "id": "y11a-3d-q5a",
  "type": "short_answer",
  "difficulty": "easy",
  "timeLimit": 60,
  "t": "Quadratic functions — factoring and the graph",
  "question": "Write down, in factored form, the equation of the monic quadratic function with zeroes: 3 and 5. (Format: 'y = (x - a)(x - b)')",
  "a": "y = (x - 3)(x - 5)",
  "solutionSteps": [
  {
    "explanation": "A monic quadratic function with zeroes \\( \\alpha \\) and \\( \\beta \\) is given by \\( y = (x - \\alpha)(x - \\beta) \\).",
    "workingOut": "y = (x - 3)(x - 5)"
  }]

},

// ── QUESTION 5b ──
{
  "id": "y11a-3d-q5b",
  "type": "short_answer",
  "difficulty": "easy",
  "timeLimit": 60,
  "t": "Quadratic functions — factoring and the graph",
  "question": "Write down, in factored form, the equation of the monic quadratic function with zeroes: 0 and 4. (Format: 'y = x(x - 4)')",
  "a": "y = x(x - 4)",
  "solutionSteps": [
  {
    "explanation": "Substitute \\( \\alpha = 0 \\) and \\( \\beta = 4 \\) into the factored form equation.",
    "workingOut": "y = (x - 0)(x - 4) = x(x - 4)"
  }]

},

// ── QUESTION 5c ──
{
  "id": "y11a-3d-q5c",
  "type": "short_answer",
  "difficulty": "easy",
  "timeLimit": 60,
  "t": "Quadratic functions — factoring and the graph",
  "question": "Write down, in factored form, the equation of the monic quadratic function with zeroes: -2 and 6. (Format: 'y = (x + a)(x - b)')",
  "a": "y = (x + 2)(x - 6)",
  "solutionSteps": [
  {
    "explanation": "Substitute the zeroes into the formula \\( y = (x - \\alpha)(x - \\beta) \\).",
    "workingOut": "y = (x - (-2))(x - 6) = (x + 2)(x - 6)"
  }]

},

// ── QUESTION 5d ──
{
  "id": "y11a-3d-q5d",
  "type": "short_answer",
  "difficulty": "easy",
  "timeLimit": 60,
  "t": "Quadratic functions — factoring and the graph",
  "question": "Write down, in factored form, the equation of the monic quadratic function with zeroes: -5 and -2. (Format: 'y = (x + a)(x + b)')",
  "a": "y = (x + 5)(x + 2)",
  "solutionSteps": [
  {
    "explanation": "Apply the zeroes \\( \\alpha = -5 \\) and \\( \\beta = -2 \\) to the factored form.",
    "workingOut": "y = (x - (-5))(x - (-2)) = (x + 5)(x + 2)"
  }]

},

// ── QUESTION 6a ──
{
  "id": "y11a-3d-q6a",
  "type": "short_answer",
  "difficulty": "easy",
  "timeLimit": 60,
  "t": "Quadratic functions — factoring and the graph",
  "question": "Write down, in factored form, the equation of the quadratic function \\( y = f(x) \\) sketched below. The coefficient of \\( x^2 \\) is either 1 or -1. The parabola is concave up and has \\( x \\)-intercepts at 0 and 4. (Format: 'y = x(x - 4)')",
  "a": "y = x(x - 4)",
  "solutionSteps": [
  {
    "explanation": "Since the parabola is concave up, the leading coefficient is positive \\( (a = 1) \\). The intercepts are 0 and 4.",
    "workingOut": "y = 1 \\cdot (x - 0)(x - 4) = x(x - 4)"
  }],

  "graphData": {
    "jsxGraph": {
      "width": 350,
      "height": 250,
      "boundingbox": [-2, 6, 6, -5],
      "script": "board.suspendUpdate();\nboard.create('arrow', [[-1.5,0], [5.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-4.5], [0,5.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [5.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 5.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return x*(x-4); }], {strokeColor: '#4f46e5', strokeWidth: 1.5});\nboard.create('point', [0, 0], {name: 'O', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [4, 0], {name: '4', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
    }
  }
},

// ── QUESTION 6b ──
{
  "id": "y11a-3d-q6b",
  "type": "short_answer",
  "difficulty": "easy",
  "timeLimit": 60,
  "t": "Quadratic functions — factoring and the graph",
  "question": "Write down, in factored form, the equation of the quadratic function \\( y = f(x) \\) sketched below. The coefficient of \\( x^2 \\) is either 1 or -1. The parabola is concave up and has \\( x \\)-intercepts at -3 and 2. (Format: 'y = (x + 3)(x - 2)')",
  "a": "y = (x + 3)(x - 2)",
  "solutionSteps": [
  {
    "explanation": "Since it is concave up and has zeroes at -3 and 2, the monic factored form has a positive coefficient.",
    "workingOut": "y = (x - (-3))(x - 2) = (x + 3)(x - 2)"
  }],

  "graphData": {
    "jsxGraph": {
      "width": 350,
      "height": 250,
      "boundingbox": [-5, 6, 4, -7],
      "script": "board.suspendUpdate();\nboard.create('arrow', [[-4.5,0], [3.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-6.5], [0,5.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [3.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 5.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return (x+3)*(x-2); }], {strokeColor: '#4f46e5', strokeWidth: 1.5});\nboard.create('point', [-3, 0], {name: '-3', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [2, 0], {name: '2', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [0, -6], {name: '-6', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
    }
  }
},

// ── QUESTION 6c ──
{
  "id": "y11a-3d-q6c",
  "type": "short_answer",
  "difficulty": "easy",
  "timeLimit": 60,
  "t": "Quadratic functions — factoring and the graph",
  "question": "Write down, in factored form, the equation of the quadratic function \\( y = f(x) \\) sketched below. The coefficient of \\( x^2 \\) is either 1 or -1. The parabola is concave down and has \\( x \\)-intercepts at -2 and 4. (Format: 'y = -(x + 2)(x - 4)')",
  "a": "y = -(x + 2)(x - 4)",
  "solutionSteps": [
  {
    "explanation": "The parabola opens downwards, so the leading coefficient is negative \\( (a = -1) \\). Incorporate the roots at -2 and 4.",
    "workingOut": "y = -1 \\cdot (x - (-2))(x - 4) = -(x + 2)(x - 4)"
  }],

  "graphData": {
    "jsxGraph": {
      "width": 350,
      "height": 250,
      "boundingbox": [-4, 11, 6, -3],
      "script": "board.suspendUpdate();\nboard.create('arrow', [[-3.5,0], [5.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-2.5], [0,10.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [5.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 9.8, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return -(x+2)*(x-4); }], {strokeColor: '#4f46e5', strokeWidth: 1.5});\nboard.create('point', [-2, 0], {name: '-2', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [4, 0], {name: '4', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [0, 8], {name: '8', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
    }
  }
},

// ── QUESTION 6d ──
{
  "id": "y11a-3d-q6d",
  "type": "short_answer",
  "difficulty": "easy",
  "timeLimit": 60,
  "t": "Quadratic functions — factoring and the graph",
  "question": "Write down, in factored form, the equation of the quadratic function \\( y = f(x) \\) sketched below. The coefficient of \\( x^2 \\) is either 1 or -1. The parabola is concave down and has \\( x \\)-intercepts at -6 and -1. (Format: 'y = -(x + 6)(x + 1)')",
  "a": "y = -(x + 6)(x + 1)",
  "solutionSteps": [
  {
    "explanation": "Since it is concave down and has zeroes at -6 and -1, the leading coefficient is negative.",
    "workingOut": "y = -(x - (-6))(x - (-1)) = -(x + 6)(x + 1)"
  }],

  "graphData": {
    "jsxGraph": {
      "width": 350,
      "height": 250,
      "boundingbox": [-8, 8, 2, -8],
      "script": "board.suspendUpdate();\nboard.create('arrow', [[-7.5,0], [1.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-7.5], [0,7.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [1.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 7.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return -(x+6)*(x+1); }], {strokeColor: '#4f46e5', strokeWidth: 1.5});\nboard.create('point', [-6, 0], {name: '-6', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [-1, 0], {name: '-1', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [0, -6], {name: '-6', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
    }
  }
},

// ── QUESTION 7a ──
{
  "id": "y11a-3d-q7a",
  "type": "teacher_review",
  "difficulty": "medium",
  "timeLimit": 90,
  "t": "Quadratic functions — factoring and the graph",
  "question": "Use factoring to find the zeroes of the quadratic function \\( f(x) = x^2 - 16 \\). Hence sketch the graph of \\( y = f(x) \\), showing all intercepts and the coordinates of the vertex.",
  "a": "zeroes: x = -4, 4; vertex: (0, -16); y-intercept: (0, -16).",
  "solutionSteps": [
  {
    "explanation": "Factor the difference of two squares.",
    "workingOut": "f(x) = (x - 4)(x + 4)"
  },
  {
    "explanation": "Set \\( f(x) = 0 \\) to solve for the zeroes (x-intercepts).",
    "workingOut": "(x - 4)(x + 4) = 0 \\implies x = 4 \\text{ or } x = -4"
  },
  {
    "explanation": "Identify the vertex. For a function of form \\( f(x) = x^2 - k \\), the axis of symmetry is \\( x = 0 \\).",
    "workingOut": "x_v = 0 \\implies f(0) = -16 \\implies \\text{Vertex: } (0, -16)"
  }]

},

// ── QUESTION 7b ──
{
  "id": "y11a-3d-q7b",
  "type": "teacher_review",
  "difficulty": "medium",
  "timeLimit": 90,
  "t": "Quadratic functions — factoring and the graph",
  "question": "Use factoring to find the zeroes of the quadratic function \\( f(x) = x^2 + 2x - 3 \\). Hence sketch the graph of \\( y = f(x) \\), showing all intercepts and the coordinates of the vertex.",
  "a": "zeroes: x = -3, 1; vertex: (-1, -4); y-intercept: (0, -3).",
  "solutionSteps": [
  {
    "explanation": "Factor the quadratic expression by finding two numbers that multiply to -3 and add to 2.",
    "workingOut": "f(x) = (x + 3)(x - 1)"
  },
  {
    "explanation": "Set the factors to zero to find the roots.",
    "workingOut": "x + 3 = 0 \\implies x = -3; \\quad x - 1 = 0 \\implies x = 1"
  },
  {
    "explanation": "The axis of symmetry lies midway between the roots.",
    "workingOut": "x = \\frac{-3 + 1}{2} = -1"
  },
  {
    "explanation": "Substitute \\( x = -1 \\) to get the vertex y-coordinate.",
    "workingOut": "f(-1) = (-1 + 3)(-1 - 1) = -4 \\implies \\text{Vertex: } (-1, -4)"
  }]

},

// ── QUESTION 7c ──
{
  "id": "y11a-3d-q7c",
  "type": "teacher_review",
  "difficulty": "medium",
  "timeLimit": 90,
  "t": "Quadratic functions — factoring and the graph",
  "question": "Use factoring to find the zeroes of the quadratic function \\( f(x) = x^2 + 2x - 8 \\). Hence sketch the graph of \\( y = f(x) \\), showing all intercepts and the coordinates of the vertex.",
  "a": "zeroes: x = -4, 2; vertex: (-1, -9); y-intercept: (0, -8).",
  "solutionSteps": [
  {
    "explanation": "Factor the trinomial into two binomials.",
    "workingOut": "f(x) = (x + 4)(x - 2)"
  },
  {
    "explanation": "Solve \\( f(x) = 0 \\) to get the x-intercepts.",
    "workingOut": "x = -4 \\text{ or } x = 2"
  },
  {
    "explanation": "Determine the vertex coordinates.",
    "workingOut": "x_v = \\frac{-4 + 2}{2} = -1 \\implies f(-1) = (-1+4)(-1-2) = -9 \\implies \\text{Vertex: } (-1, -9)"
  }]

},

// ── QUESTION 8a ──
{
  "id": "y11a-3d-q8a",
  "type": "teacher_review",
  "difficulty": "medium",
  "timeLimit": 90,
  "t": "Quadratic functions — factoring and the graph",
  "question": "Use factoring to find the zeroes of the quadratic function \\( f(x) = 6x - x^2 \\). Hence sketch the graph of \\( y = f(x) \\), showing all intercepts and the coordinates of the vertex.",
  "a": "zeroes: x = 0, 6; vertex: (3, 9); y-intercept: (0, 0).",
  "solutionSteps": [
  {
    "explanation": "Factor out the common factor of x.",
    "workingOut": "f(x) = x(6 - x)"
  },
  {
    "explanation": "Determine the zeroes of the function.",
    "workingOut": "x = 0 \\text{ or } x = 6"
  },
  {
    "explanation": "Find the vertex coordinates. Note that it is concave down since the coefficient of \\( x^2 \\) is negative.",
    "workingOut": "x_v = \\frac{0 + 6}{2} = 3 \\implies f(3) = 3(6 - 3) = 9 \\implies \\text{Vertex: } (3, 9)"
  }]

},

// ── QUESTION 8b ──
{
  "id": "y11a-3d-q8b",
  "type": "teacher_review",
  "difficulty": "medium",
  "timeLimit": 90,
  "t": "Quadratic functions — factoring and the graph",
  "question": "Use factoring to find the zeroes of the quadratic function \\( f(x) = -x^2 + 4x + 5 \\). Hence sketch the graph of \\( y = f(x) \\), showing all intercepts and the coordinates of the vertex.",
  "a": "zeroes: x = -1, 5; vertex: (2, 9); y-intercept: (0, 5).",
  "solutionSteps": [
  {
    "explanation": "Factor out the negative sign and then factor the trinomial.",
    "workingOut": "f(x) = -(x^2 - 4x - 5) = -(x - 5)(x + 1)"
  },
  {
    "explanation": "Find the x-intercepts.",
    "workingOut": "x = 5 \\text{ or } x = -1"
  },
  {
    "explanation": "Compute the vertex. The axis of symmetry is midway between the intercepts.",
    "workingOut": "x_v = \\frac{5 + (-1)}{2} = 2 \\implies f(2) = -(2 - 5)(2 + 1) = 9 \\implies \\text{Vertex: } (2, 9)"
  }]

},

// ── QUESTION 8c ──
{
  "id": "y11a-3d-q8c",
  "type": "teacher_review",
  "difficulty": "medium",
  "timeLimit": 90,
  "t": "Quadratic functions — factoring and the graph",
  "question": "Use factoring to find the zeroes of the quadratic function \\( f(x) = 12 - 4x - x^2 \\). Hence sketch the graph of \\( y = f(x) \\), showing all intercepts and the coordinates of the vertex.",
  "a": "zeroes: x = -6, 2; vertex: (-2, 16); y-intercept: (0, 12).",
  "solutionSteps": [
  {
    "explanation": "Factor out the negative sign and then factor the quadratic expression.",
    "workingOut": "f(x) = -(x^2 + 4x - 12) = -(x + 6)(x - 2)"
  },
  {
    "explanation": "Identify the zeroes.",
    "workingOut": "x = -6 \\text{ or } x = 2"
  },
  {
    "explanation": "Locate the vertex using the midpoint of the zeroes.",
    "workingOut": "x_v = \\frac{-6 + 2}{2} = -2 \\implies f(-2) = -(-2 + 6)(-2 - 2) = 16 \\implies \\text{Vertex: } (-2, 16)"
  }]

},

// ── QUESTION 9a ──
{
  "id": "y11a-3d-q9a",
  "type": "teacher_review",
  "difficulty": "medium",
  "timeLimit": 90,
  "t": "Quadratic functions — factoring and the graph",
  "question": "Sketch the parabola \\( y = x^2 - 4x + 4 \\) involving a perfect square. Hint: Begin by factoring the quadratic. Find the vertex (the single x-intercept) and use symmetry to find a third point.",
  "a": "vertex: (2, 0); y-intercept: (0, 4); third point: (4, 4).",
  "solutionSteps": [
  {
    "explanation": "Factor the quadratic expression as a perfect square.",
    "workingOut": "y = (x - 2)^2"
  },
  {
    "explanation": "Find the vertex/x-intercept by setting \\( y = 0 \\).",
    "workingOut": "(x - 2)^2 = 0 \\implies x = 2 \\implies \\text{Vertex: } (2, 0)"
  },
  {
    "explanation": "Find the y-intercept by substituting \\( x = 0 \\).",
    "workingOut": "y = (0 - 2)^2 = 4 \\implies \\text{Point: } (0, 4)"
  },
  {
    "explanation": "Use symmetry about \\( x = 2 \\) to find a third point (2 units right of the vertex).",
    "workingOut": "x = 2 + 2 = 4 \\implies y = (4 - 2)^2 = 4 \\implies \\text{Point: } (4, 4)"
  }]

},

// ── QUESTION 9b ──
{
  "id": "y11a-3d-q9b",
  "type": "teacher_review",
  "difficulty": "medium",
  "timeLimit": 90,
  "t": "Quadratic functions — factoring and the graph",
  "question": "Sketch the parabola \\( y = -x^2 + 6x - 9 \\) involving a perfect square. Hint: Begin by factoring the quadratic. Find the vertex (the single x-intercept) and use symmetry to find a third point.",
  "a": "vertex: (3, 0); y-intercept: (0, -9); third point: (6, -9).",
  "solutionSteps": [
  {
    "explanation": "Factor out the negative sign and rewrite as a perfect square.",
    "workingOut": "y = -(x^2 - 6x + 9) = -(x - 3)^2"
  },
  {
    "explanation": "Find the vertex/x-intercept.",
    "workingOut": "y = 0 \\implies -(x - 3)^2 = 0 \\implies x = 3 \\implies \\text{Vertex: } (3, 0)"
  },
  {
    "explanation": "Substitute \\( x = 0 \\) to find the y-intercept.",
    "workingOut": "y = -(0 - 3)^2 = -9"
  },
  {
    "explanation": "Mirror the y-intercept point across the axis of symmetry \\( x = 3 \\) to find a third point.",
    "workingOut": "x = 3 + 3 = 6 \\implies y = -(6 - 3)^2 = -9 \\implies \\text{Point: } (6, -9)"
  }]

},

// ── QUESTION 10a ──
{
  "id": "y11a-3d-q10a",
  "type": "teacher_review",
  "difficulty": "medium",
  "timeLimit": 90,
  "t": "Quadratic functions — factoring and the graph",
  "question": "Use factoring to sketch the graph of the non-monic quadratic function \\( y = 2x^2 + 9x + 4 \\), clearly indicating the vertex and the intercepts with the axes.",
  "a": "x-intercepts: -0.5, -4; y-intercept: 4; vertex: (-2.25, -6.125).",
  "solutionSteps": [
  {
    "explanation": "Factor the non-monic quadratic using splitting the middle term.",
    "workingOut": "2x^2 + 8x + x + 4 = 2x(x + 4) + 1(x + 4) = (2x + 1)(x + 4)"
  },
  {
    "explanation": "Set the factors to zero to find the x-intercepts.",
    "workingOut": "x = -\\frac{1}{2} = -0.5 \\quad \\text{and} \\quad x = -4"
  },
  {
    "explanation": "Determine the y-intercept.",
    "workingOut": "x = 0 \\implies y = 4"
  },
  {
    "explanation": "Locate the vertex using the midpoint of the intercepts.",
    "workingOut": "x_v = \\frac{-0.5 + (-4)}{2} = -2.25 \\\\\ny_v = 2(-2.25)^2 + 9(-2.25) + 4 = -6.125 \\implies \\text{Vertex: } (-2.25, -6.125)"
  }]

},

// ── QUESTION 10b ──
{
  "id": "y11a-3d-q10b",
  "type": "teacher_review",
  "difficulty": "medium",
  "timeLimit": 90,
  "t": "Quadratic functions — factoring and the graph",
  "question": "Use factoring to sketch the graph of the non-monic quadratic function \\( y = 2x^2 + 3x - 5 \\), clearly indicating the vertex and the intercepts with the axes.",
  "a": "x-intercepts: 1, -2.5; y-intercept: -5; vertex: (-0.75, -6.125).",
  "solutionSteps": [
  {
    "explanation": "Split the middle term to factor the non-monic trinomial.",
    "workingOut": "2x^2 + 5x - 2x - 5 = x(2x + 5) - 1(2x + 5) = (2x + 5)(x - 1)"
  },
  {
    "explanation": "Determine the roots by solving \\( (2x + 5)(x - 1) = 0 \\).",
    "workingOut": "x = -\\frac{5}{2} = -2.5 \\quad \\text{or} \\quad x = 1"
  },
  {
    "explanation": "Substitute \\( x = 0 \\) to find the y-intercept.",
    "workingOut": "y = -5"
  },
  {
    "explanation": "Calculate the coordinates of the vertex.",
    "workingOut": "x_v = \\frac{-2.5 + 1}{2} = -0.75 \\\\\ny_v = 2(-0.75)^2 + 3(-0.75) - 5 = -6.125 \\implies \\text{Vertex: } (-0.75, -6.125)"
  }]

},

// ── QUESTION 10c ──
{
  "id": "y11a-3d-q10c",
  "type": "teacher_review",
  "difficulty": "medium",
  "timeLimit": 90,
  "t": "Quadratic functions — factoring and the graph",
  "question": "Use factoring to sketch the graph of the non-monic quadratic function \\( y = 3x^2 + 4x - 4 \\), clearly indicating the vertex and the intercepts with the axes.",
  "a": "x-intercepts: 2/3, -2; y-intercept: -4; vertex: (-2/3, -16/3).",
  "solutionSteps": [
  {
    "explanation": "Factor the non-monic quadratic by splitting the middle term.",
    "workingOut": "3x^2 + 6x - 2x - 4 = 3x(x + 2) - 2(x + 2) = (3x - 2)(x + 2)"
  },
  {
    "explanation": "Find the roots of the expression.",
    "workingOut": "x = \\frac{2}{3} \\approx 0.67 \\quad \\text{or} \\quad x = -2"
  },
  {
    "explanation": "Evaluate the y-intercept and compute the vertex coordinates.",
    "workingOut": "y(0) = -4; \\quad x_v = \\frac{\\frac{2}{3} + (-2)}{2} = -\\frac{2}{3} \\\\\ny_v = 3\\left(-\\frac{2}{3}\\right)^2 + 4\\left(-\\frac{2}{3}\\right) - 4 = -\\frac{16}{3} \\approx -5.33"
  }]

},

// ── QUESTION 11a ──
{
  "id": "y11a-3d-q11a",
  "type": "short_answer",
  "difficulty": "medium",
  "timeLimit": 90,
  "t": "Quadratic functions — factoring and the graph",
  "question": "Find the equation of the quadratic function sketched below in factored form. The parabola is concave up, has \\( x \\)-intercepts at -2 and 3, and a \\( y \\)-intercept at -6. (Format: 'y = (x + a)(x - b)')",
  "a": "y = (x + 2)(x - 3)",
  "solutionSteps": [
  {
    "explanation": "Set up the general factored form: \\( y = a_0(x - \alpha)(x - \beta) \\) with \\( \alpha = -2 \\) and \\( \beta = 3 \\).",
    "workingOut": "y = a_0(x + 2)(x - 3)"
  },
  {
    "explanation": "Substitute the y-intercept \\( (0, -6) \\) to determine the scaling coefficient \\( a_0 \\).",
    "workingOut": "-6 = a_0(0 + 2)(0 - 3) \\implies -6 = -6a_0 \\implies a_0 = 1"
  },
  {
    "explanation": "Write the final equation.",
    "workingOut": "y = (x + 2)(x - 3)"
  }],

  "graphData": {
    "jsxGraph": {
      "width": 350,
      "height": 250,
      "boundingbox": [-4, 4, 5, -8],
      "script": "board.suspendUpdate();\nboard.create('arrow', [[-3.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-7.5], [0,3.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 3.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return (x+2)*(x-3); }], {strokeColor: '#4f46e5', strokeWidth: 1.5});\nboard.create('point', [-2, 0], {name: '-2', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [3, 0], {name: '3', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [0, -6], {name: '-6', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
    }
  }
},

// ── QUESTION 11b ──
{
  "id": "y11a-3d-q11b",
  "type": "short_answer",
  "difficulty": "medium",
  "timeLimit": 90,
  "t": "Quadratic functions — factoring and the graph",
  "question": "Find the equation of the quadratic function sketched below in factored form. The parabola is concave down, has \\( x \\)-intercepts at -4 and 2, and a \\( y \\)-intercept at 8. (Format: 'y = -(x + a)(x - b)')",
  "a": "y = -(x + 4)(x - 2)",
  "solutionSteps": [
  {
    "explanation": "Apply the roots \\( x = -4 \\) and \\( x = 2 \\) to the factored form.",
    "workingOut": "y = a_0(x + 4)(x - 2)"
  },
  {
    "explanation": "Determine the scale factor using the y-intercept \\( (0, 8) \\).",
    "workingOut": "8 = a_0(0 + 4)(0 - 2) \\implies 8 = -8a_0 \\implies a_0 = -1"
  },
  {
    "explanation": "Formulate the final equation.",
    "workingOut": "y = -(x + 4)(x - 2)"
  }],

  "graphData": {
    "jsxGraph": {
      "width": 350,
      "height": 250,
      "boundingbox": [-6, 11, 4, -4],
      "script": "board.suspendUpdate();\nboard.create('arrow', [[-5.5,0], [3.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.5], [0,10.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [3.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 9.8, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return -(x+4)*(x-2); }], {strokeColor: '#4f46e5', strokeWidth: 1.5});\nboard.create('point', [-4, 0], {name: '-4', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [2, 0], {name: '2', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [0, 8], {name: '8', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
    }
  }
},

// ── QUESTION 11c ──
{
  "id": "y11a-3d-q11c",
  "type": "short_answer",
  "difficulty": "medium",
  "timeLimit": 90,
  "t": "Quadratic functions — factoring and the graph",
  "question": "Find the equation of the quadratic function sketched below in factored form. The parabola is concave up, has \\( x \\)-intercepts at -3 and 3, and a \\( y \\)-intercept at -18. (Format: 'y = a(x + b)(x - c)')",
  "a": "y = 2(x + 3)(x - 3)",
  "solutionSteps": [
  {
    "explanation": "Use the symmetric roots \\( x = -3 \\) and \\( x = 3 \\).",
    "workingOut": "y = a_0(x + 3)(x - 3)"
  },
  {
    "explanation": "Find the value of \\( a_0 \\) using \\( (0, -18) \\).",
    "workingOut": "-18 = a_0(0 + 3)(0 - 3) \\implies -18 = -9a_0 \\implies a_0 = 2"
  },
  {
    "explanation": "Substitute \\( a_0 \\) back into the formula.",
    "workingOut": "y = 2(x + 3)(x - 3)"
  }],

  "graphData": {
    "jsxGraph": {
      "width": 350,
      "height": 250,
      "boundingbox": [-5, 6, 5, -22],
      "script": "board.suspendUpdate();\nboard.create('arrow', [[-4.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-21], [0,5.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 5.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return 2*(x+3)*(x-3); }], {strokeColor: '#4f46e5', strokeWidth: 1.5});\nboard.create('point', [-3, 0], {name: '-3', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [3, 0], {name: '3', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [0, -18], {name: '-18', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
    }
  }
},

// ── QUESTION 11d ──
{
  "id": "y11a-3d-q11d",
  "type": "short_answer",
  "difficulty": "medium",
  "timeLimit": 90,
  "t": "Quadratic functions — factoring and the graph",
  "question": "Find the equation of the quadratic function sketched below in factored form. The parabola is concave down, has \\( x \\)-intercepts at -3 and 3, and a \\( y \\)-intercept at 3. (Format: 'y = -1/3(x + 3)(x - 3)')",
  "a": "y = -1/3(x + 3)(x - 3)",
  "solutionSteps": [
  {
    "explanation": "Set up the quadratic using its symmetric roots.",
    "workingOut": "y = a_0(x + 3)(x - 3)"
  },
  {
    "explanation": "Apply the y-intercept value of 3 at \\( x = 0 \\).",
    "workingOut": "3 = a_0(0 + 3)(0 - 3) \\implies 3 = -9a_0 \\implies a_0 = -\\frac{1}{3}"
  },
  {
    "explanation": "Write down the resulting equation.",
    "workingOut": "y = -\\frac{1}{3}(x + 3)(x - 3)"
  }],

  "graphData": {
    "jsxGraph": {
      "width": 350,
      "height": 250,
      "boundingbox": [-5, 5, 5, -3],
      "script": "board.suspendUpdate();\nboard.create('arrow', [[-4.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-2.5], [0,4.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 4.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return -1/3*(x+3)*(x-3); }], {strokeColor: '#4f46e5', strokeWidth: 1.5});\nboard.create('point', [-3, 0], {name: '-3', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [3, 0], {name: '3', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [0, 3], {name: '3', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
    }
  }
},

// ── QUESTION 12a ──
{
  "id": "y11a-3d-q12a",
  "type": "short_answer",
  "difficulty": "medium",
  "timeLimit": 90,
  "t": "Quadratic functions — factoring and the graph",
  "question": "Find, in factored form, the equation of the parabola with the given intercepts: \\( x \\)-intercepts at \\( x = 2, 4 \\) and \\( y \\)-intercept at \\( y = 16 \\). (Format: 'y = a(x - b)(x - c)')",
  "a": "y = 2(x - 2)(x - 4)",
  "solutionSteps": [
  {
    "explanation": "Create the factored template.",
    "workingOut": "y = a_0(x - 2)(x - 4)"
  },
  {
    "explanation": "Substitute the y-intercept \\( (0, 16) \\) to find \\( a_0 \\).",
    "workingOut": "16 = a_0(0 - 2)(0 - 4) \\implies 16 = 8a_0 \\implies a_0 = 2"
  },
  {
    "explanation": "Write the completed equation.",
    "workingOut": "y = 2(x - 2)(x - 4)"
  }]

},

// ── QUESTION 12b ──
{
  "id": "y11a-3d-q12b",
  "type": "short_answer",
  "difficulty": "medium",
  "timeLimit": 90,
  "t": "Quadratic functions — factoring and the graph",
  "question": "Find, in factored form, the equation of the parabola with the given intercepts: \\( x \\)-intercepts at \\( x = -3, 1 \\) and \\( y \\)-intercept at \\( y = 6 \\). (Format: 'y = a(x + b)(x - c)')",
  "a": "y = -2(x + 3)(x - 1)",
  "solutionSteps": [
  {
    "explanation": "Form the factored equation.",
    "workingOut": "y = a_0(x + 3)(x - 1)"
  },
  {
    "explanation": "Substitute the point \\( (0, 6) \\) into the equation.",
    "workingOut": "6 = a_0(0 + 3)(0 - 1) \\implies 6 = -3a_0 \\implies a_0 = -2"
  },
  {
    "explanation": "Assemble the final formula.",
    "workingOut": "y = -2(x + 3)(x - 1)"
  }]

},

// ── QUESTION 12c ──
{
  "id": "y11a-3d-q12c",
  "type": "short_answer",
  "difficulty": "medium",
  "timeLimit": 90,
  "t": "Quadratic functions — factoring and the graph",
  "question": "Find, in factored form, the equation of the parabola with the given intercepts: \\( x \\)-intercepts at \\( x = -2, 4 \\) and \\( y \\)-intercept at \\( y = 16 \\). (Format: 'y = a(x + b)(x - c)')",
  "a": "y = -2(x + 2)(x - 4)",
  "solutionSteps": [
  {
    "explanation": "Generate the equation using roots.",
    "workingOut": "y = a_0(x + 2)(x - 4)"
  },
  {
    "explanation": "Find the constant \\( a_0 \\) using the y-intercept \\( 16 \\).",
    "workingOut": "16 = a_0(0 + 2)(0 - 4) \\implies 16 = -8a_0 \\implies a_0 = -2"
  },
  {
    "explanation": "Finalize the equation.",
    "workingOut": "y = -2(x + 2)(x - 4)"
  }]

},

// ── QUESTION 12d ──
{
  "id": "y11a-3d-q12d",
  "type": "short_answer",
  "difficulty": "medium",
  "timeLimit": 90,
  "t": "Quadratic functions — factoring and the graph",
  "question": "Find, in factored form, the equation of the parabola with the given intercepts: \\( x \\)-intercepts at \\( x = -1, -3 \\) and \\( y \\)-intercept at \\( y = 6 \\). (Format: 'y = a(x + b)(x + c)')",
  "a": "y = 2(x + 1)(x + 3)",
  "solutionSteps": [
  {
    "explanation": "Translate roots to factors.",
    "workingOut": "y = a_0(x + 1)(x + 3)"
  },
  {
    "explanation": "Solve for the leading coefficient.",
    "workingOut": "6 = a_0(0 + 1)(0 + 3) \\implies 6 = 3a_0 \\implies a_0 = 2"
  },
  {
    "explanation": "Combine terms.",
    "workingOut": "y = 2(x + 1)(x + 3)"
  }]

},

// ── QUESTION 13a ──
{
  "id": "y11a-3d-q13a",
  "type": "teacher_review",
  "difficulty": "medium",
  "timeLimit": 90,
  "t": "Quadratic functions — factoring and the graph",
  "question": "Sketch on a single coordinate plane the four parabolas corresponding to \\( y = a(x - 2)(x - 4) \\) for: \\( a = 2 \\), \\( a = 1 \\), \\( a = -1 \\), \\( a = -2 \\).",
  "a": "Four parabolas passing through (2, 0) and (4, 0), two opening upwards (a = 1, 2) and two opening downwards (a = -1, -2).",
  "solutionSteps": [
  {
    "explanation": "Plot each of the four equations.",
    "workingOut": "\\begin{aligned} y &= 2(x-2)(x-4) \\\\ y &= 1(x-2)(x-4) \\\\ y &= -1(x-2)(x-4) \\\\ y &= -2(x-2)(x-4) \\end{aligned}"
  },
  {
    "explanation": "Notice that all four parabolas share the x-intercepts at \\( x = 2 \\) and \\( x = 4 \\).",
    "workingOut": ""
  }],

  "graphData": {
    "jsxGraph": {
      "width": 400,
      "height": 300,
      "boundingbox": [-1, 7, 7, -7],
      "script": "board.suspendUpdate();\nboard.create('arrow', [[-0.5,0], [6.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-6.5], [0,6.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [6.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 6.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return 2*(x-2)*(x-4); }], {strokeColor: '#4f46e5', strokeWidth: 1.2});\nboard.create('functiongraph', [function(x){ return 1*(x-2)*(x-4); }], {strokeColor: '#8b5cf6', strokeWidth: 1.2});\nboard.create('functiongraph', [function(x){ return -1*(x-2)*(x-4); }], {strokeColor: '#10b981', strokeWidth: 1.2});\nboard.create('functiongraph', [function(x){ return -2*(x-2)*(x-4); }], {strokeColor: '#f43f5e', strokeWidth: 1.2});\nboard.create('point', [2, 0], {name: '2', visible: true, strokeColor: 'black', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [4, 0], {name: '4', visible: true, strokeColor: 'black', label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
    }
  }
},

// ── QUESTION 13b ──
{
  "id": "y11a-3d-q13b",
  "type": "short_answer",
  "difficulty": "medium",
  "timeLimit": 90,
  "t": "Quadratic functions — factoring and the graph",
  "question": "Identify the two points on the coordinate plane through which all four parabolas from \\( y = a(x - 2)(x - 4) \\) pass. (Format: '(x1, y1) and (x2, y2)' in ascending order, e.g. '(1, 0) and (3, 0)')",
  "a": "(2, 0) and (4, 0)",
  "solutionSteps": [
  {
    "explanation": "Since each function is of the form \\( y = a(x - 2)(x - 4) \\), setting \\( x = 2 \\) or \\( x = 4 \\) makes the product zero regardless of \\( a \\).",
    "workingOut": "x = 2 \\implies y = 0 \\quad \\text{and} \\quad x = 4 \\implies y = 0"
  }]

},

// ── QUESTION 14a ──
{
  "id": "y11a-3d-q14a",
  "type": "teacher_review",
  "difficulty": "hard",
  "timeLimit": 120,
  "t": "Quadratic functions — factoring and the graph",
  "question": "Use factoring to find the zeroes of the quadratic function \\( y = 3x^2 - 12 \\). Sketch a graph of the function, clearly indicating all intercepts and the coordinates of the vertex.",
  "a": "zeroes: -2, 2; y-intercept: -12; vertex: (0, -12).",
  "solutionSteps": [
  {
    "explanation": "Factor out the common factor 3, then factor the difference of squares.",
    "workingOut": "y = 3(x^2 - 4) = 3(x - 2)(x + 2)"
  },
  {
    "explanation": "Find the zeroes by setting \\( y = 0 \\).",
    "workingOut": "x = 2 \\text{ or } x = -2"
  },
  {
    "explanation": "Find the vertex: Since the linear term is missing, the axis of symmetry is \\( x = 0 \\). The vertex lies on the y-axis.",
    "workingOut": "x_v = 0 \\implies y_v = -12 \\implies \\text{Vertex/y-intercept: } (0, -12)"
  }]

},

// ── QUESTION 14b ──
{
  "id": "y11a-3d-q14b",
  "type": "teacher_review",
  "difficulty": "hard",
  "timeLimit": 120,
  "t": "Quadratic functions — factoring and the graph",
  "question": "Use factoring to find the zeroes of the quadratic function \\( y = 2x^2 + x - 3 \\). Sketch a graph of the function, clearly indicating all intercepts and the coordinates of the vertex.",
  "a": "zeroes: 1, -1.5; y-intercept: -3; vertex: (-0.25, -3.125).",
  "solutionSteps": [
  {
    "explanation": "Factor the non-monic trinomial by splitting the middle term.",
    "workingOut": "2x^2 + 3x - 2x - 3 = x(2x + 3) - 1(2x + 3) = (2x + 3)(x - 1)"
  },
  {
    "explanation": "Solve \\( y = 0 \\) for the roots.",
    "workingOut": "x = -\\frac{3}{2} = -1.5 \\quad \\text{or} \\quad x = 1"
  },
  {
    "explanation": "Determine the vertex coordinates.",
    "workingOut": "x_v = \\frac{-1.5 + 1}{2} = -0.25 \\\\\ny_v = 2(-0.25)^2 + (-0.25) - 3 = -3.125 \\implies \\text{Vertex: } (-0.25, -3.125)"
  }]

},

// ── QUESTION 14c ──
{
  "id": "y11a-3d-q14c",
  "type": "teacher_review",
  "difficulty": "hard",
  "timeLimit": 120,
  "t": "Quadratic functions — factoring and the graph",
  "question": "Use factoring to find the zeroes of the quadratic function \\( y = 5x - 2 - 3x^2 \\). Sketch a graph of the function, clearly indicating all intercepts and the coordinates of the vertex.",
  "a": "zeroes: 1, 2/3; y-intercept: -2; vertex: (5/6, 1/12).",
  "solutionSteps": [
  {
    "explanation": "Rearrange the trinomial and factor out the negative sign.",
    "workingOut": "y = -(3x^2 - 5x + 2)"
  },
  {
    "explanation": "Split the middle term to factor the quadratic.",
    "workingOut": "y = -(3x^2 - 3x - 2x + 2) = -[3x(x - 1) - 2(x - 1)] = -(3x - 2)(x - 1)"
  },
  {
    "explanation": "Identify the zeroes by solving \\( y = 0 \\).",
    "workingOut": "x = \\frac{2}{3} \\quad \\text{and} \\quad x = 1"
  },
  {
    "explanation": "Calculate the coordinates of the vertex.",
    "workingOut": "x_v = \\frac{\\frac{2}{3} + 1}{2} = \\frac{5}{6} \\\\\ny_v = -\\left(3\\left(\\frac{5}{6}\\right)^2 - 5\\left(\\frac{5}{6}\\right) + 2\\right) = \\frac{1}{12}"
  }]

},

// ── QUESTION 15a ──
{
  "id": "y11a-3d-q15a",
  "type": "short_answer",
  "difficulty": "hard",
  "timeLimit": 120,
  "t": "Quadratic functions — factoring and the graph",
  "question": "The general form of a quadratic with zeroes \\( x = 3 \\) and \\( x = 9 \\) is \\( y = a(x - 3)(x - 9) \\). Find the equation of such a quadratic for which the coefficient of \\( x^2 \\) is 2. (Format: 'y = a(x - b)(x - c)')",
  "a": "y = 2(x - 3)(x - 9)",
  "solutionSteps": [
  {
    "explanation": "In \\( y = a(x - 3)(x - 9) = a(x^2 - 12x + 27) \\), the coefficient of \\( x^2 \\) is \\( a \\).",
    "workingOut": "a = 2 \\implies y = 2(x - 3)(x - 9)"
  }]

},

// ── QUESTION 15b ──
{
  "id": "y11a-3d-q15b",
  "type": "short_answer",
  "difficulty": "hard",
  "timeLimit": 120,
  "t": "Quadratic functions — factoring and the graph",
  "question": "The general form of a quadratic with zeroes \\( x = 3 \\) and \\( x = 9 \\) is \\( y = a(x - 3)(x - 9) \\). Find the equation of such a quadratic for which the \\( y \\)-intercept is -54. (Format: 'y = a(x - b)(x - c)')",
  "a": "y = -2(x - 3)(x - 9)",
  "solutionSteps": [
  {
    "explanation": "Substitute \\( x = 0 \\) and set \\( y = -54 \\) to solve for \\( a \\).",
    "workingOut": "-54 = a(0 - 3)(0 - 9) \\implies -54 = 27a \\implies a = -2"
  },
  {
    "explanation": "Formulate the final equation.",
    "workingOut": "y = -2(x - 3)(x - 9)"
  }]

},

// ── QUESTION 15c ──
{
  "id": "y11a-3d-q15c",
  "type": "short_answer",
  "difficulty": "hard",
  "timeLimit": 120,
  "t": "Quadratic functions — factoring and the graph",
  "question": "The general form of a quadratic with zeroes \\( x = 3 \\) and \\( x = 9 \\) is \\( y = a(x - 3)(x - 9) \\). Find the equation of such a quadratic for which the vertex is \\( (6, -18) \\). (Format: 'y = a(x - b)(x - c)')",
  "a": "y = 2(x - 3)(x - 9)",
  "solutionSteps": [
  {
    "explanation": "Substitute the vertex coordinates \\( (6, -18) \\) into the general equation.",
    "workingOut": "-18 = a(6 - 3)(6 - 9) \\implies -18 = -9a \\implies a = 2"
  },
  {
    "explanation": "Write down the resulting formula.",
    "workingOut": "y = 2(x - 3)(x - 9)"
  }]

},

// ── QUESTION 15d ──
{
  "id": "y11a-3d-q15d",
  "type": "short_answer",
  "difficulty": "hard",
  "timeLimit": 120,
  "t": "Quadratic functions — factoring and the graph",
  "question": "The general form of a quadratic with zeroes \\( x = 3 \\) and \\( x = 9 \\) is \\( y = a(x - 3)(x - 9) \\). Find the equation of such a quadratic which passes through \\( (2, -14) \\). (Format: 'y = a(x - b)(x - c)')",
  "a": "y = -2(x - 3)(x - 9)",
  "solutionSteps": [
  {
    "explanation": "Substitute the point \\( (2, -14) \\) into the general form.",
    "workingOut": "-14 = a(2 - 3)(2 - 9) \\implies -14 = 7a \\implies a = -2"
  },
  {
    "explanation": "Write the completed equation.",
    "workingOut": "y = -2(x - 3)(x - 9)"
  }]

},

// ── QUESTION 16 ──
{
  "id": "y11a-3d-q16",
  "type": "teacher_review",
  "difficulty": "hard",
  "timeLimit": 120,
  "t": "Quadratic functions — factoring and the graph",
  "question": "Investigate the symmetry of the quadratic function \\( f(x) = x^2 - 4x - 5 \\).",
  "subQuestions": [
  {
    "id": "y11a-3d-q16a",
    "type": "short_answer",
    "question": "a) Factor the quadratic \\( f(x) = x^2 - 4x - 5 \\) and hence find the equation of its axis of symmetry. (Format for axis of symmetry: 'x = k')",
    "a": "x = 2"
  },
  {
    "id": "y11a-3d-q16bi",
    "type": "short_answer",
    "question": "b) (i) Expand and simplify \\( f(2 + h) \\) and \\( f(2 - h) \\). What is the simplified expression for both? (Format: 'h^2 - k')",
    "a": "h^2 - 9"
  },
  {
    "id": "y11a-3d-q16bii",
    "type": "multiple_choice",
    "question": "b) (ii) What geometric feature of the parabola does the result \\( f(2 + h) = f(2 - h) \\) demonstrate?",
    "opts": [
    "It demonstrates that the parabola is symmetrical about the vertical line \\( x = 2 \\).",
    "It demonstrates that the parabola is concave up.",
    "It demonstrates that the parabola has two distinct real zeroes.",
    "It demonstrates that the y-intercept is at \\( y = -5 \\)."],

    "a": "0"
  }],

  "solutionSteps": [
  {
    "explanation": "Factor the quadratic trinomial.",
    "workingOut": "f(x) = (x - 5)(x + 1) \\implies \\text{Zeroes: } 5, -1"
  },
  {
    "explanation": "Find the axis of symmetry midway between the zeroes.",
    "workingOut": "x = \\frac{5 + (-1)}{2} = 2"
  },
  {
    "explanation": "For part b(i), evaluate \\( f(2 + h) \\).",
    "workingOut": "f(2 + h) = (2 + h)^2 - 4(2 + h) - 5 = 4 + 4h + h^2 - 8 - 4h - 5 = h^2 - 9"
  },
  {
    "explanation": "Evaluate \\( f(2 - h) \\).",
    "workingOut": "f(2 - h) = (2 - h)^2 - 4(2 - h) - 5 = 4 - 4h + h^2 - 8 + 4h - 5 = h^2 - 9"
  },
  {
    "explanation": "For part b(ii), since \\( f(2 + h) = f(2 - h) \\) for any real \\( h \\), the height at any distance \\( h \\) to the right of \\( x=2 \\) equals the height at distance \\( h \\) to the left.",
    "workingOut": "\\text{This proves line symmetry about } x = 2"
  }]

}];