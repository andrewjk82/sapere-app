export const Y11_CH3F_QUESTIONS = [
  {
    "id": "y11a-3f-q1",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "The quadratic formulae and the graph",
    "question": "Consider the parabola with equation \\( y = x^2 - 4x - 1 \\).",
    "subQuestions": [
      {
        "id": "y11a-3f-q1a1",
        "type": "multiple_choice",
        "question": "a) (i) Use the value of \\( a \\) to determine the concavity of the parabola.",
        "opts": [
          "Concave up because \\( a = 1 > 0 \\).",
          "Concave down because \\( a = -4 < 0 \\).",
          "Concave up because \\( a = -1 < 0 \\).",
          "Concave down because \\( a = 1 > 0 \\)."
        ],
        "a": "0"
      },
      {
        "id": "y11a-3f-q1a2",
        "type": "short_answer",
        "question": "a) (ii) Write down the value of the \\( y \\)-intercept.",
        "a": "-1"
      },
      {
        "id": "y11a-3f-q1a3",
        "type": "short_answer",
        "question": "a) (iii) Use the formula \\( x = \\frac{-b}{2a} \\) to find the axis of symmetry. (Format: 'x = k')",
        "a": "x = 2"
      },
      {
        "id": "y11a-3f-q1a4",
        "type": "short_answer",
        "question": "a) (iv) Use the axis of symmetry to find the \\( y \\)-coordinate of the vertex.",
        "a": "-5"
      },
      {
        "id": "y11a-3f-q1a5",
        "type": "short_answer",
        "question": "a) (v) Calculate the discriminant \\( \\Delta = b^2 - 4ac \\).",
        "a": "20"
      },
      {
        "id": "y11a-3f-q1a6",
        "type": "multiple_choice",
        "question": "a) (vi) Explain why this parabola must have \\( x \\)-intercepts.",
        "opts": [
          "Because the discriminant is positive (\\( \\Delta = 20 > 0 \\)).",
          "Because the vertex is below the x-axis and it is concave up.",
          "Both of the above are correct and consistent.",
          "None of the above."
        ],
        "a": "2"
      },
      {
        "id": "y11a-3f-q1a7",
        "type": "short_answer",
        "question": "a) (vii) Find the \\( x \\)-intercepts using the quadratic formula. (Format: 'x = a - \\sqrt{b}, a + \\sqrt{b}' in ascending order)",
        "a": "x = 2 - sqrt{5}, 2 + sqrt{5}"
      },
      {
        "id": "y11a-3f-q1b",
        "type": "teacher_review",
        "question": "b) Sketch the parabola, showing these features.",
        "a": "Parabola opening upwards with vertex at (2, -5), y-intercept at (0, -1), and x-intercepts at 2 ± √5."
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Compare the equation to the standard form \\( y = ax^2 + bx + c \\) to find \\( a = 1, b = -4, c = -1 \\). Since \\( a > 0 \\), the curve is concave up.",
        "workingOut": ""
      },
      {
        "explanation": "Substitute \\( x = 0 \\) to find the y-intercept: \\( y = 0^2 - 4(0) - 1 = -1 \\).",
        "workingOut": ""
      },
      {
        "explanation": "Find the axis of symmetry: \\( x = \\frac{-(-4)}{2(1)} = 2 \\).",
        "workingOut": ""
      },
      {
        "explanation": "Substitute \\( x = 2 \\) to get the vertex y-coordinate: \\( y = 2^2 - 4(2) - 1 = 4 - 8 - 1 = -5 \\). Vertex is \\( (2, -5) \\).",
        "workingOut": ""
      },
      {
        "explanation": "Calculate the discriminant: \\( \\Delta = b^2 - 4ac = (-4)^2 - 4(1)(-1) = 16 + 4 = 20 \\).",
        "workingOut": ""
      },
      {
        "explanation": "Solve \\( x^2 - 4x - 1 = 0 \\) using the quadratic formula: \\( x = \\frac{4 \\pm \\sqrt{20}}{2} = 2 \\pm \\sqrt{5} \\).",
        "workingOut": ""
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [
          -3,
          6,
          7,
          -6
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-2.5,0], [6.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-5.5], [0,5.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [6.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 5.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return x*x - 4*x - 1; }], {strokeColor: '#4f46e5', strokeWidth: 1.5});\nboard.create('point', [2, -5], {name: 'V(2,-5)', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [0, -1], {name: '-1', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [2 - Math.sqrt(5), 0], {name: '2-√5', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [2 + Math.sqrt(5), 0], {name: '2+√5', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('line', [[2,-6], [2,6]], {strokeColor: '#64748b', dash: 2, strokeWidth: 1});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y11a-3f-q2a",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "The quadratic formulae and the graph",
    "question": "Follow the steps of Question 1 to sketch the parabola: \\( y = x^2 + 6x + 2 \\).",
    "a": "Parabola opening upwards with vertex at (-3, -7), y-intercept at (0, 2), and x-intercepts at -3 ± √7.",
    "solutionSteps": [
      {
        "explanation": "Determine coefficients: \\( a = 1, b = 6, c = 2 \\). Concavity is up (\\( a = 1 > 0 \\)), y-intercept is \\( 2 \\).",
        "workingOut": ""
      },
      {
        "explanation": "Find axis of symmetry: \\( x = \\frac{-6}{2} = -3 \\). Vertex is \\( (-3, -7) \\).",
        "workingOut": "y = (-3)^2 + 6(-3) + 2 = 9 - 18 + 2 = -7"
      },
      {
        "explanation": "Compute discriminant: \\( \\Delta = 36 - 8 = 28 \\). Zeroes are \\( x = -3 \\pm \\sqrt{7} \\).",
        "workingOut": ""
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [
          -8,
          5,
          2,
          -9
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-7.5,0], [1.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-8.5], [0,4.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [1.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 4.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return x*x + 6*x + 2; }], {strokeColor: '#4f46e5', strokeWidth: 1.5});\nboard.create('point', [-3, -7], {name: 'V(-3,-7)', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [0, 2], {name: '2', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y11a-3f-q2b",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "The quadratic formulae and the graph",
    "question": "Follow the steps of Question 1 to sketch the parabola: \\( y = -x^2 + 4x + 1 \\).",
    "a": "Parabola opening downwards with vertex at (2, 5), y-intercept at (0, 1), and x-intercepts at 2 ± √5.",
    "solutionSteps": [
      {
        "explanation": "Determine coefficients: \\( a = -1, b = 4, c = 1 \\). Concavity is down (\\( a = -1 < 0 \\)), y-intercept is \\( 1 \\).",
        "workingOut": ""
      },
      {
        "explanation": "Find axis of symmetry: \\( x = \\frac{-4}{-2} = 2 \\). Vertex: \\( (2, 5) \\).",
        "workingOut": "y = -2^2 + 4(2) + 1 = 5"
      },
      {
        "explanation": "Compute discriminant: \\( \\Delta = 16 - 4(-1)(1) = 20 \\). Zeroes are \\( x = 2 \\pm \\sqrt{5} \\).",
        "workingOut": ""
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [
          -3,
          7,
          7,
          -3
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-2.5,0], [6.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-2.5], [0,6.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [6.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 6.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return -x*x + 4*x + 1; }], {strokeColor: '#4f46e5', strokeWidth: 1.5});\nboard.create('point', [2, 5], {name: 'V(2,5)', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [0, 1], {name: '1', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y11a-3f-q3",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "The quadratic formulae and the graph",
    "question": "Consider the parabola with equation \\( y = x^2 + 4x + 6 \\).",
    "subQuestions": [
      {
        "id": "y11a-3f-q3a1",
        "type": "multiple_choice",
        "question": "a) (i) Use the value of \\( a \\) to determine the concavity of the parabola.",
        "opts": [
          "Concave up because \\( a = 1 > 0 \\).",
          "Concave down because \\( a = 1 > 0 \\).",
          "Concave up because the constant term is 6.",
          "Concave down because the discriminant is negative."
        ],
        "a": "0"
      },
      {
        "id": "y11a-3f-q3a2",
        "type": "short_answer",
        "question": "a) (ii) Write down the value of the \\( y \\)-intercept.",
        "a": "6"
      },
      {
        "id": "y11a-3f-q3a3",
        "type": "short_answer",
        "question": "a) (iii) Use the formula \\( x = \\frac{-b}{2a} \\) to find the axis of symmetry. (Format: 'x = k')",
        "a": "x = -2"
      },
      {
        "id": "y11a-3f-q3a4",
        "type": "short_answer",
        "question": "a) (iv) Use the axis of symmetry to find the \\( y \\)-coordinate of the vertex.",
        "a": "2"
      },
      {
        "id": "y11a-3f-q3a5",
        "type": "short_answer",
        "question": "a) (v) Calculate the discriminant \\( \\Delta = b^2 - 4ac \\).",
        "a": "-8"
      },
      {
        "id": "y11a-3f-q3a6",
        "type": "multiple_choice",
        "question": "a) (vi) Explain why this parabola has no \\( x \\)-intercepts.",
        "opts": [
          "Because the discriminant is negative (\\( \\Delta = -8 < 0 \\)).",
          "Because the vertex is above the x-axis \\( (y = 2 > 0) \\) and it is concave up.",
          "Both of the above are correct and consistent.",
          "None of the above."
        ],
        "a": "2"
      },
      {
        "id": "y11a-3f-q3b",
        "type": "teacher_review",
        "question": "b) Sketch the parabola, showing the \\( y \\)-intercept and vertex. Use symmetry to locate another point on the parabola and add this to your sketch.",
        "a": "Parabola opening upwards with vertex at (-2, 2), y-intercept at (0, 6), and symmetrical point at (-4, 6)."
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Here \\( a = 1, b = 4, c = 6 \\). Concavity is up because \\( a > 0 \\).",
        "workingOut": ""
      },
      {
        "explanation": "Substitute \\( x = 0 \\) to get the y-intercept of 6.",
        "workingOut": ""
      },
      {
        "explanation": "Compute the axis of symmetry: \\( x = \\frac{-4}{2(1)} = -2 \\).",
        "workingOut": ""
      },
      {
        "explanation": "Substitute \\( x = -2 \\) to get the vertex y-coordinate: \\( y = (-2)^2 + 4(-2) + 6 = 2 \\). Vertex is \\( (-2, 2) \\).",
        "workingOut": ""
      },
      {
        "explanation": "Calculate the discriminant: \\( \\Delta = 4^2 - 4(1)(6) = 16 - 24 = -8 \\).",
        "workingOut": ""
      },
      {
        "explanation": "Since \\( \\Delta < 0 \\), there are no real roots, so there are no x-intercepts.",
        "workingOut": ""
      },
      {
        "explanation": "Use symmetry about \\( x = -2 \\). The y-intercept \\( (0, 6) \\) is 2 units to the right of the axis of symmetry. The reflection point 2 units to the left is \\( (-4, 6) \\).",
        "workingOut": ""
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [
          -6,
          8,
          2,
          -1
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-5.5,0], [1.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-0.5], [0,7.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [1.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 7.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return x*x + 4*x + 6; }], {strokeColor: '#4f46e5', strokeWidth: 1.5});\nboard.create('point', [-2, 2], {name: 'V(-2,2)', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [0, 6], {name: '6', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [-4, 6], {name: '(-4,6)', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('line', [[-2,-1], [-2,8]], {strokeColor: '#64748b', dash: 2, strokeWidth: 1});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y11a-3f-q4a",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "The quadratic formulae and the graph",
    "question": "Follow the steps shown in Question 3 to sketch the parabola: \\( y = x^2 - 4x + 5 \\).",
    "a": "Parabola opening upwards with vertex at (2, 1), y-intercept at (0, 5), and symmetrical point at (4, 5). No x-intercepts.",
    "solutionSteps": [
      {
        "explanation": "Determine coefficients: \\( a = 1, b = -4, c = 5 \\). Concavity is up (\\( a = 1 > 0 \\)), y-intercept is \\( 5 \\).",
        "workingOut": ""
      },
      {
        "explanation": "Find axis of symmetry: \\( x = \\frac{4}{2} = 2 \\). Vertex is \\( (2, 1) \\).",
        "workingOut": "y = 2^2 - 4(2) + 5 = 1"
      },
      {
        "explanation": "Discriminant: \\( \\Delta = 16 - 20 = -4 < 0 \\implies \\text{no x-intercepts} \\). Symmetrical point: \\( (4, 5) \\).",
        "workingOut": ""
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [
          -2,
          7,
          6,
          -1
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-1.5,0], [5.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-0.5], [0,6.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [5.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 6.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return x*x - 4*x + 5; }], {strokeColor: '#4f46e5', strokeWidth: 1.5});\nboard.create('point', [2, 1], {name: 'V(2,1)', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [0, 5], {name: '5', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [4, 5], {name: '(4,5)', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y11a-3f-q4b",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "The quadratic formulae and the graph",
    "question": "Follow the steps shown in Question 3 to sketch the parabola: \\( y = -x^2 - 4x - 6 \\).",
    "a": "Parabola opening downwards with vertex at (-2, -2), y-intercept at (0, -6), and symmetrical point at (-4, -6). No x-intercepts.",
    "solutionSteps": [
      {
        "explanation": "Determine coefficients: \\( a = -1, b = -4, c = -6 \\). Concavity is down (\\( a = -1 < 0 \\)), y-intercept is \\( -6 \\).",
        "workingOut": ""
      },
      {
        "explanation": "Find axis of symmetry: \\( x = \\frac{4}{-2} = -2 \\). Vertex is \\( (-2, -2) \\).",
        "workingOut": "y = -(-2)^2 - 4(-2) - 6 = -4 + 8 - 6 = -2"
      },
      {
        "explanation": "Discriminant: \\( \\Delta = 16 - 24 = -8 < 0 \\implies \\text{no x-intercepts} \\). Symmetrical point: \\( (-4, -6) \\).",
        "workingOut": ""
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [
          -6,
          2,
          2,
          -8
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-5.5,0], [1.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-7.5], [0,1.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [1.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 1.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return -x*x - 4*x - 6; }], {strokeColor: '#4f46e5', strokeWidth: 1.5});\nboard.create('point', [-2, -2], {name: 'V(-2,-2)', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [0, -6], {name: '-6', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [-4, -6], {name: '(-4,-6)', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y11a-3f-q5a",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "The quadratic formulae and the graph",
    "question": "Find the discriminant \\( \\Delta = b^2 - 4ac \\) and then the zeroes of the quadratic function \\( f(x) = x^2 + 4x - 1 \\). Give the zeroes in exact surd form. (Format for zeroes: 'x = a - \\sqrt{b}, a + \\sqrt{b}' in ascending order)",
    "a": "x = -2 - sqrt{5}, -2 + sqrt{5}",
    "solutionSteps": [
      {
        "explanation": "Calculate the discriminant for \\( a=1, b=4, c=-1 \\).",
        "workingOut": "\\Delta = b^2 - 4ac = 4^2 - 4(1)(-1) = 20"
      },
      {
        "explanation": "Use the quadratic formula to find the roots.",
        "workingOut": "x = \\frac{-4 \\pm \\sqrt{20}}{2} = -2 \\pm \\sqrt{5}"
      }
    ]
  },
  {
    "id": "y11a-3f-q5b",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "The quadratic formulae and the graph",
    "question": "Find the discriminant \\( \\Delta \\) and then the zeroes of the quadratic function \\( f(x) = x^2 - 6x + 2 \\) in exact surd form. (Format: 'x = a - \\sqrt{b}, a + \\sqrt{b}')",
    "a": "x = 3 - sqrt{7}, 3 + sqrt{7}",
    "solutionSteps": [
      {
        "explanation": "Calculate \\( \\Delta \\) with \\( a=1, b=-6, c=2 \\).",
        "workingOut": "\\Delta = (-6)^2 - 4(1)(2) = 28"
      },
      {
        "explanation": "Solve using the quadratic formula.",
        "workingOut": "x = \\frac{6 \\pm \\sqrt{28}}{2} = 3 \\pm \\sqrt{7}"
      }
    ]
  },
  {
    "id": "y11a-3f-q5c",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "The quadratic formulae and the graph",
    "question": "Find the discriminant \\( \\Delta \\) and then the zeroes of \\( f(x) = x^2 + 5x - 2 \\) in exact surd form. (Format: 'x = (-b - \\sqrt{\\Delta}) / 2, (-b + \\sqrt{\\Delta}) / 2')",
    "a": "x = (-5 - sqrt{33})/2, (-5 + sqrt{33})/2",
    "solutionSteps": [
      {
        "explanation": "Find \\( \\Delta \\) where \\( a=1, b=5, c=-2 \\).",
        "workingOut": "\\Delta = 5^2 - 4(1)(-2) = 33"
      },
      {
        "explanation": "Apply the quadratic formula.",
        "workingOut": "x = \\frac{-5 \\pm \\sqrt{33}}{2}"
      }
    ]
  },
  {
    "id": "y11a-3f-q5d",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "The quadratic formulae and the graph",
    "question": "Find the discriminant \\( \\Delta \\) and then the zeroes of \\( f(x) = -x^2 - 4x + 1 \\) in exact surd form.",
    "a": "x = -2 - sqrt{5}, -2 + sqrt{5}",
    "solutionSteps": [
      {
        "explanation": "Calculate the discriminant for \\( a=-1, b=-4, c=1 \\).",
        "workingOut": "\\Delta = (-4)^2 - 4(-1)(1) = 20"
      },
      {
        "explanation": "Calculate the roots.",
        "workingOut": "x = \\frac{4 \\pm \\sqrt{20}}{-2} = -2 \\pm \\sqrt{5}"
      }
    ]
  },
  {
    "id": "y11a-3f-q5e",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "The quadratic formulae and the graph",
    "question": "Find the discriminant \\( \\Delta \\) and then the zeroes of \\( f(x) = 2x^2 - 6x - 1 \\) in exact surd form.",
    "a": "x = (3 - sqrt{11})/2, (3 + sqrt{11})/2",
    "solutionSteps": [
      {
        "explanation": "Discriminant for \\( a=2, b=-6, c=-1 \\).",
        "workingOut": "\\Delta = (-6)^2 - 4(2)(-1) = 36 + 8 = 44"
      },
      {
        "explanation": "Solve using quadratic formula.",
        "workingOut": "x = \\frac{6 \\pm \\sqrt{44}}{4} = \\frac{6 \\pm 2\\sqrt{11}}{4} = \\frac{3 \\pm \\sqrt{11}}{2}"
      }
    ]
  },
  {
    "id": "y11a-3f-q5f",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "The quadratic formulae and the graph",
    "question": "Find the discriminant \\( \\Delta \\) and then the zeroes of \\( f(x) = 3x^2 + 6x - 1 \\) in exact surd form.",
    "a": "x = (-3 - 2sqrt{3})/3, (-3 + 2sqrt{3})/3",
    "solutionSteps": [
      {
        "explanation": "Calculate the discriminant for \\( a=3, b=6, c=-1 \\).",
        "workingOut": "\\Delta = 6^2 - 4(3)(-1) = 36 + 12 = 48"
      },
      {
        "explanation": "Find the zeroes using the quadratic formula.",
        "workingOut": "x = \\frac{-6 \\pm \\sqrt{48}}{6} = \\frac{-6 \\pm 4\\sqrt{3}}{6} = \\frac{-3 \\pm 2\\sqrt{3}}{3}"
      }
    ]
  },
  {
    "id": "y11a-3f-q6a",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "The quadratic formulae and the graph",
    "question": "Sketch the graph of \\( y = x^2 + 4x + 1 \\) by checking concavity, intercepts, axis of symmetry, vertex, and discriminant.",
    "a": "Concave up, vertex (-2, -3), y-intercept (0, 1), x-intercepts at -2 ± √3.",
    "solutionSteps": [
      {
        "explanation": "Coefficients: \\( a=1, b=4, c=1 \\). Opens up. y-intercept is 1.",
        "workingOut": ""
      },
      {
        "explanation": "Axis of symmetry: \\( x = \\frac{-4}{2} = -2 \\). Vertex: \\( (-2, -3) \\).",
        "workingOut": "y = (-2)^2 + 4(-2) + 1 = -3"
      },
      {
        "explanation": "Roots: \\( x = -2 \\pm \\sqrt{3} \\).",
        "workingOut": ""
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [
          -6,
          5,
          2,
          -5
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-5.5,0], [1.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-4.5], [0,4.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [1.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 4.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return x*x + 4*x + 1; }], {strokeColor: '#4f46e5', strokeWidth: 1.5});\nboard.create('point', [-2, -3], {name: 'V(-2,-3)', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [0, 1], {name: '1', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y11a-3f-q6b",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "The quadratic formulae and the graph",
    "question": "Sketch the graph of \\( y = x^2 - 6x + 10 \\) by identifying vertex, axis of symmetry, intercepts, and concavity.",
    "a": "Concave up, vertex (3, 1), y-intercept (0, 10), no x-intercepts.",
    "solutionSteps": [
      {
        "explanation": "Concave up. y-intercept is 10.",
        "workingOut": ""
      },
      {
        "explanation": "Axis: \\( x = 3 \\). Vertex: \\( (3, 1) \\). Since vertex is above the x-axis and it opens up, there are no x-intercepts.",
        "workingOut": ""
      }
    ]
  },
  {
    "id": "y11a-3f-q6c",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "The quadratic formulae and the graph",
    "question": "Sketch the graph of \\( y = -x^2 + 4x + 2 \\) by identifying all key features.",
    "a": "Concave down, vertex (2, 6), y-intercept (0, 2), x-intercepts at 2 ± √6.",
    "solutionSteps": [
      {
        "explanation": "Concave down. y-intercept is 2.",
        "workingOut": ""
      },
      {
        "explanation": "Axis: \\( x = 2 \\). Vertex: \\( (2, 6) \\).",
        "workingOut": "y = -2^2 + 4(2) + 2 = 6"
      },
      {
        "explanation": "Roots: \\( x = 2 \\pm \\sqrt{6} \\).",
        "workingOut": ""
      }
    ]
  },
  {
    "id": "y11a-3f-q6d",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "The quadratic formulae and the graph",
    "question": "Sketch the graph of \\( y = -2x^2 + 8x - 9 \\).",
    "a": "Concave down, vertex (2, -1), y-intercept (0, -9), no x-intercepts.",
    "solutionSteps": [
      {
        "explanation": "Concave down. y-intercept: -9. Axis: \\( x = 2 \\). Vertex: \\( (2, -1) \\). Since vertex y-coord is negative and it opens down, no x-intercepts.",
        "workingOut": ""
      }
    ]
  },
  {
    "id": "y11a-3f-q6e",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "The quadratic formulae and the graph",
    "question": "Sketch the graph of \\( y = 3x^2 + 12x - 2 \\).",
    "a": "Concave up, vertex (-2, -14), y-intercept (0, -2), x-intercepts at -2 ± √(14/3).",
    "solutionSteps": [
      {
        "explanation": "Concave up. y-intercept: -2. Axis: \\( x = -2 \\). Vertex: \\( (-2, -14) \\). Roots: \\( x = -2 \\pm \\sqrt{\\frac{14}{3}} \\).",
        "workingOut": ""
      }
    ]
  },
  {
    "id": "y11a-3f-q6f",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "The quadratic formulae and the graph",
    "question": "Sketch the graph of \\( y = 2x^2 + 8x - 1 \\).",
    "a": "Concave up, vertex (-2, -9), y-intercept (0, -1), x-intercepts at -2 ± 3/√2.",
    "solutionSteps": [
      {
        "explanation": "Concave up. y-intercept: -1. Axis: \\( x = -2 \\). Vertex: \\( (-2, -9) \\). Roots: \\( x = -2 \\pm \\frac{3}{\\sqrt{2}} \\).",
        "workingOut": ""
      }
    ]
  },
  {
    "id": "y11a-3f-q7a",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "The quadratic formulae and the graph",
    "question": "Find the zeroes of the quadratic function \\( f(x) = x^2 - 2x - 8 \\) using three methods (factoring, completing the square, and quadratic formula). Show they all yield the same zeroes. (Format: 'x = a, b' in ascending order)",
    "a": "x = -2, 4",
    "solutionSteps": [
      {
        "explanation": "Method 1: Factoring. Find numbers that multiply to -8 and add to -2.",
        "workingOut": "f(x) = (x - 4)(x + 2) = 0 \\implies x = -2, 4"
      },
      {
        "explanation": "Method 2: Completing the square.",
        "workingOut": "x^2 - 2x + 1 - 9 = 0 \\implies (x - 1)^2 = 9 \\implies x = 1 \\pm 3 \\implies x = -2, 4"
      },
      {
        "explanation": "Method 3: Quadratic formula with \\( a=1, b=-2, c=-8 \\).",
        "workingOut": "x = \\frac{2 \\pm \\sqrt{4 - 4(1)(-8)}}{2} = \\frac{2 \\pm 6}{2} \\implies x = -2, 4"
      }
    ]
  },
  {
    "id": "y11a-3f-q7b",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "The quadratic formulae and the graph",
    "question": "Find the zeroes of the quadratic function \\( f(x) = x^2 - 7x + 10 \\) using the three methods.",
    "a": "x = 2, 5",
    "solutionSteps": [
      {
        "explanation": "Factoring: \\( (x - 2)(x - 5) = 0 \\implies x = 2, 5 \\).",
        "workingOut": ""
      },
      {
        "explanation": "Completing the square: \\( (x - 3.5)^2 - 2.25 = 0 \\implies x = 3.5 \\pm 1.5 \\implies x = 2, 5 \\).",
        "workingOut": ""
      },
      {
        "explanation": "Formula: \\( x = \\frac{7 \\pm \\sqrt{49 - 40}}{2} = 2, 5 \\).",
        "workingOut": ""
      }
    ]
  },
  {
    "id": "y11a-3f-q7c",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "The quadratic formulae and the graph",
    "question": "Find the zeroes of the quadratic function \\( f(x) = -x^2 + 2x + 15 \\) using the three methods.",
    "a": "x = -3, 5",
    "solutionSteps": [
      {
        "explanation": "Factor out -1 first: \\( -(x^2 - 2x - 15) = -(x - 5)(x + 3) = 0 \\implies x = -3, 5 \\).",
        "workingOut": ""
      }
    ]
  },
  {
    "id": "y11a-3f-q8a",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "The quadratic formulae and the graph",
    "question": "Consider the parabola \\( y = x^2 + 3 \\). Show that it has no x-intercepts, find vertex and y-intercept, and find a second point and its symmetrical point to sketch the graph.",
    "a": "vertex/y-intercept: (0, 3); point: (1, 4), symmetric point: (-1, 4); no x-intercepts.",
    "solutionSteps": [
      {
        "explanation": "Find discriminant for \\( a=1, b=0, c=3 \\).",
        "workingOut": "\\Delta = 0^2 - 4(1)(3) = -12 < 0 \\implies \\text{no x-intercepts}"
      },
      {
        "explanation": "The y-intercept and vertex are at the same point because \\( b = 0 \\).",
        "workingOut": "\\text{Vertex/y-intercept: } (0, 3)"
      },
      {
        "explanation": "Substitute \\( x = 1 \\) to get a second point: \\( y = 1^2 + 3 = 4 \\implies (1, 4) \\).",
        "workingOut": ""
      },
      {
        "explanation": "By symmetry about the y-axis (\\( x = 0 \\)), a third point is at \\( (-1, 4) \\).",
        "workingOut": ""
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [
          -3,
          7,
          3,
          -1
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-2.5,0], [2.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-0.5], [0,6.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [2.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 6.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return x*x + 3; }], {strokeColor: '#4f46e5', strokeWidth: 1.5});\nboard.create('point', [0, 3], {name: 'V(0,3)', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [1, 4], {name: '(1,4)', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [-1, 4], {name: '(-1,4)', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y11a-3f-q8bi",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "The quadratic formulae and the graph",
    "question": "Follow similar working to sketch the parabola: \\( y = -x^2 - 2 \\).",
    "a": "Vertex/y-intercept: (0, -2); concave down; passes through (1, -3) and (-1, -3); no x-intercepts.",
    "solutionSteps": [
      {
        "explanation": "Identify vertex: \\( V(0, -2) \\). Concavity is down (\\( a = -1 < 0 \\)).",
        "workingOut": ""
      },
      {
        "explanation": "Points: \\( x = 1 \\implies y = -3 \\implies (1, -3) \\); \\( x = -1 \\implies y = -3 \\implies (-1, -3) \\).",
        "workingOut": ""
      }
    ]
  },
  {
    "id": "y11a-3f-q8bii",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "The quadratic formulae and the graph",
    "question": "Follow similar working to sketch the parabola: \\( y = \\frac{1}{3}x^2 + 2 \\).",
    "a": "Vertex/y-intercept: (0, 2); concave up; passes through (3, 5) and (-3, 5); no x-intercepts.",
    "solutionSteps": [
      {
        "explanation": "Identify vertex: \\( V(0, 2) \\). Concavity is up.",
        "workingOut": ""
      },
      {
        "explanation": "Substitute \\( x = 3 \\) to find a point with integer coordinates: \\( y = \\frac{1}{3}(9) + 2 = 5 \\implies (3, 5) \\).",
        "workingOut": ""
      }
    ]
  },
  {
    "id": "y11a-3f-q9a",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "The quadratic formulae and the graph",
    "question": "Find the discriminant \\( \\Delta = b^2 - 4ac \\) for the quadratic function \\( f(x) = x^2 + 5x - 3 \\) and state how many zeroes it has, without drawing its graph.",
    "a": "37, 2 zeroes",
    "solutionSteps": [
      {
        "explanation": "Calculate \\( \\Delta \\) where \\( a=1, b=5, c=-3 \\).",
        "workingOut": "\\Delta = 5^2 - 4(1)(-3) = 25 + 12 = 37"
      },
      {
        "explanation": "Since \\( \\Delta = 37 > 0 \\), the function has 2 distinct zeroes.",
        "workingOut": ""
      }
    ]
  },
  {
    "id": "y11a-3f-q9b",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "The quadratic formulae and the graph",
    "question": "Find the discriminant \\( \\Delta \\) for the quadratic function \\( f(x) = 4x^2 - 12x + 9 \\) and state how many zeroes it has.",
    "a": "0, 1 zero",
    "solutionSteps": [
      {
        "explanation": "Calculate \\( \\Delta \\) for \\( a=4, b=-12, c=9 \\).",
        "workingOut": "\\Delta = (-12)^2 - 4(4)(9) = 144 - 144 = 0"
      },
      {
        "explanation": "Since \\( \\Delta = 0 \\), the function has 1 real zero (equal roots).",
        "workingOut": ""
      }
    ]
  },
  {
    "id": "y11a-3f-q9c",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "The quadratic formulae and the graph",
    "question": "Find the discriminant \\( \\Delta \\) for the quadratic function \\( f(x) = -3x^2 + 6x - 5 \\) and state how many zeroes it has.",
    "a": "-24, 0 zeroes",
    "solutionSteps": [
      {
        "explanation": "Calculate \\( \\Delta \\) for \\( a=-3, b=6, c=-5 \\).",
        "workingOut": "\\Delta = 6^2 - 4(-3)(-5) = 36 - 60 = -24"
      },
      {
        "explanation": "Since \\( \\Delta = -24 < 0 \\), there are no real zeroes.",
        "workingOut": ""
      }
    ]
  },
  {
    "id": "y11a-3f-q10",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "The quadratic formulae and the graph",
    "question": "Find intersections of the parabola \\( y = -x^2 + 4x + 1 \\) with horizontal lines.",
    "subQuestions": [
      {
        "id": "y11a-3f-q10a1",
        "type": "short_answer",
        "question": "a) (i) Find the x-coordinates of the intersection points with the line \\( y = 3 \\). (Format: 'x = a - \\sqrt{b}, a + \\sqrt{b}' in ascending order)",
        "a": "x = 2 - sqrt{2}, 2 + sqrt{2}"
      },
      {
        "id": "y11a-3f-q10a2",
        "type": "short_answer",
        "question": "a) (ii) Find the x-coordinates of the intersection points with the line \\( y = 5 \\).",
        "a": "2"
      },
      {
        "id": "y11a-3f-q10a3",
        "type": "short_answer",
        "question": "a) (iii) Find the intersection points with the line \\( y = 7 \\). (Write 'No intersection' if none exist)",
        "a": "No intersection"
      },
      {
        "id": "y11a-3f-q10b",
        "type": "teacher_review",
        "question": "b) Graph the situation.",
        "a": "Parabola with vertex (2, 5) opening down, shown alongside horizontal lines y = 3, y = 5, y = 7."
      },
      {
        "id": "y11a-3f-q10c",
        "type": "multiple_choice",
        "question": "c) For what values of \\( k \\) does the parabola intersect the line \\( y = k \\) twice?",
        "opts": [
          "k < 5",
          "k > 5",
          "k = 5",
          "For all values of k"
        ],
        "a": "0"
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Set the parabola equation equal to each y-value.",
        "workingOut": "\\text{For } y=3 \\implies -x^2 + 4x + 1 = 3 \\implies x^2 - 4x + 2 = 0 \\implies x = 2 \\pm \\sqrt{2}"
      },
      {
        "explanation": "For \\( y=5 \\), set the equation equal to 5.",
        "workingOut": "-x^2 + 4x + 1 = 5 \\implies x^2 - 4x + 4 = 0 \\implies (x - 2)^2 = 0 \\implies x = 2"
      },
      {
        "explanation": "For \\( y=7 \\), set the equation equal to 7.",
        "workingOut": "-x^2 + 4x + 1 = 7 \\implies x^2 - 4x + 6 = 0 \\implies \\Delta = 16 - 24 = -8 < 0 \\implies \\text{no solution}"
      },
      {
        "explanation": "The maximum y-value of the parabola is at the vertex \\( (2, 5) \\). Any line \\( y = k \\) below the vertex height (\\( k < 5 \\)) will cross the parabola twice.",
        "workingOut": ""
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [
          -2,
          8,
          6,
          -2
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-1.5,0], [5.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-1.5], [0,7.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [5.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 7.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return -x*x + 4*x + 1; }], {strokeColor: '#4f46e5', strokeWidth: 1.5});\nboard.create('line', [[-2,3], [6,3]], {strokeColor: '#64748b', dash: 1, strokeWidth: 1});\nboard.create('line', [[-2,5], [6,5]], {strokeColor: '#64748b', dash: 1, strokeWidth: 1});\nboard.create('line', [[-2,7], [6,7]], {strokeColor: '#64748b', dash: 1, strokeWidth: 1});\nboard.create('point', [2, 5], {name: 'V(2,5)', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('text', [4.5, 3.2, 'y=3'], {fontSize: 12});\nboard.create('text', [4.5, 5.2, 'y=5'], {fontSize: 12});\nboard.create('text', [4.5, 7.2, 'y=7'], {fontSize: 12});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y11a-3f-q11a",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The quadratic formulae and the graph",
    "question": "Use the quadratic formula to find the roots \\( \\alpha \\) and \\( \\beta \\) of \\( x^2 - 4x + 2 = 0 \\). Hence show that both \\( \\alpha + \\beta = -\\frac{b}{a} \\) and \\( \\alpha\\beta = \\frac{c}{a} \\) hold.",
    "a": "roots: 2 - √2, 2 + √2. Sum = 4 (-b/a = 4). Product = 2 (c/a = 2). Both hold.",
    "solutionSteps": [
      {
        "explanation": "Identify coefficients: \\( a=1, b=-4, c=2 \\). Apply quadratic formula.",
        "workingOut": "x = \\frac{4 \\pm \\sqrt{16 - 8}}{2} = 2 \\pm \\sqrt{2}"
      },
      {
        "explanation": "Compute the sum of the roots.",
        "workingOut": "\\alpha + \\beta = (2 - \\sqrt{2}) + (2 + \\sqrt{2}) = 4, quad -\\frac{b}{a} = -\\frac{-4}{1} = 4"
      },
      {
        "explanation": "Compute the product of the roots.",
        "workingOut": "\\alpha\\beta = (2 - \\sqrt{2})(2 + \\sqrt{2}) = 4 - 2 = 2, quad \\frac{c}{a} = \\frac{2}{1} = 2"
      }
    ]
  },
  {
    "id": "y11a-3f-q11b",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The quadratic formulae and the graph",
    "question": "Use the quadratic formula to find the roots \\( \\alpha \\) and \\( \\beta \\) of \\( x^2 - 6x - 3 = 0 \\). Hence show that both \\( \\alpha + \\beta = -\\frac{b}{a} \\) and \\( \\alpha\\beta = \\frac{c}{a} \\) hold.",
    "a": "roots: 3 - 2√3, 3 + 2√3. Sum = 6 (-b/a = 6). Product = -3 (c/a = -3).",
    "solutionSteps": [
      {
        "explanation": "Solve \\( x^2 - 6x - 3 = 0 \\) using formula.",
        "workingOut": "x = \\frac{6 \\pm \\sqrt{36 + 12}}{2} = 3 \\pm 2\\sqrt{3}"
      },
      {
        "explanation": "Verify sum and product.",
        "workingOut": "\\alpha + \\beta = 6 = -\\frac{b}{a}; \\quad \\alpha\\beta = (3-2\\sqrt{3})(3+2\\sqrt{3}) = 9-12 = -3 = \\frac{c}{a}"
      }
    ]
  },
  {
    "id": "y11a-3f-q11c",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The quadratic formulae and the graph",
    "question": "Use the quadratic formula to find the roots \\( \\alpha \\) and \\( \\beta \\) of \\( -2x^2 + 8x - 3 = 0 \\). Hence show that both \\( \\alpha + \\beta = -\\frac{b}{a} \\) and \\( \\alpha\\beta = \\frac{c}{a} \\) hold.",
    "a": "roots: (4 - √10)/2, (4 + √10)/2. Sum = 4 (-b/a = 4). Product = 1.5 (c/a = 1.5).",
    "solutionSteps": [
      {
        "explanation": "Solve using formula.",
        "workingOut": "x = \\frac{-8 \\pm \\sqrt{64 - 24}}{-4} = \\frac{-8 \\pm 2\\sqrt{10}}{-4} = \\frac{4 \\pm \\sqrt{10}}{2}"
      },
      {
        "explanation": "Verify sum and product.",
        "workingOut": "\\alpha + \\beta = 4 = -\\frac{8}{-2}; \\quad \\alpha\\beta = \\frac{16 - 10}{4} = 1.5 = \\frac{-3}{-2}"
      }
    ]
  },
  {
    "id": "y11a-3f-q12a",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The quadratic formulae and the graph",
    "question": "Use the quadratic formula to find the zeroes \\( \\alpha \\) and \\( \\beta \\) of \\( f(x) = x^2 - 4x + 1 \\). Hence write the function in factored form \\( f(x) = (x - \\alpha)(x - \\beta) \\). (Format: '(x - (a - \\sqrt{b}))(x - (a + \\sqrt{b}))')",
    "a": "(x - (2 - sqrt{3}))(x - (2 + sqrt{3}))",
    "solutionSteps": [
      {
        "explanation": "Find roots using formula.",
        "workingOut": "x = \\frac{4 \\pm \\sqrt{16 - 4}}{2} = 2 \\pm \\sqrt{3}"
      },
      {
        "explanation": "Write expression in factored form.",
        "workingOut": "f(x) = (x - (2 - \\sqrt{3}))(x - (2 + \\sqrt{3}))"
      }
    ]
  },
  {
    "id": "y11a-3f-q12b",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The quadratic formulae and the graph",
    "question": "Use the quadratic formula to find the zeroes of \\( f(x) = x^2 + 6x - 2 \\) and write it in factored form.",
    "a": "(x - (-3 - sqrt{11}))(x - (-3 + sqrt{11}))",
    "solutionSteps": [
      {
        "explanation": "Solve using formula.",
        "workingOut": "x = \\frac{-6 \\pm \\sqrt{36 + 8}}{2} = -3 \\pm \\sqrt{11}"
      },
      {
        "explanation": "Rewrite as factors.",
        "workingOut": "f(x) = (x - (-3 - \\sqrt{11}))(x - (-3 + \\sqrt{11}))"
      }
    ]
  },
  {
    "id": "y11a-3f-q12c",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The quadratic formulae and the graph",
    "question": "Use the quadratic formula to find the zeroes of \\( f(x) = x^2 - 5x + 3 \\) and write it in factored form.",
    "a": "(x - (5 - sqrt{13})/2)(x - (5 + sqrt{13})/2)",
    "solutionSteps": [
      {
        "explanation": "Solve using formula.",
        "workingOut": "x = \\frac{5 \\pm \\sqrt{25 - 12}}{2} = \\frac{5 \\pm \\sqrt{13}}{2}"
      },
      {
        "explanation": "Rewrite as factors.",
        "workingOut": "f(x) = \\left(x - \\frac{5 - \\sqrt{13}}{2}\\right)\\left(x - \\frac{5 + \\sqrt{13}}{2}\\right)"
      }
    ]
  },
  {
    "id": "y11a-3f-q13",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The quadratic formulae and the graph",
    "question": "Consider the general parabola \\( y = ax^2 + bx + c \\) with axis of symmetry \\( x = -\\frac{b}{2a} \\).",
    "subQuestions": [
      {
        "id": "y11a-3f-q13a",
        "type": "teacher_review",
        "question": "a) Use this value of \\( x \\) to show that the vertex of the parabola is \\( V\\left(-\\frac{b}{2a}, -\\frac{\\Delta}{4a}\\right) \\).",
        "a": "Proof: Substitute x = -b/(2a) into y = ax^2+bx+c. y = a(b^2/(4a^2)) + b(-b/(2a)) + c = b^2/(4a) - b^2/(2a) + c = (b^2 - 2b^2 + 4ac)/(4a) = -(b^2 - 4ac)/(4a) = -Δ/(4a)."
      },
      {
        "id": "y11a-3f-q13b",
        "type": "teacher_review",
        "question": "b) Use this formula to check the coordinates of the vertices in Question 6a (\\( y = x^2 + 4x + 1 \\)).",
        "a": "For y = x^2 + 4x + 1: a=1, b=4, c=1. Δ = 12. x = -4/2 = -2. y = -12/4 = -3. Vertex is (-2, -3), which matches Question 6a."
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Substitute \\( x = -\\frac{b}{2a} \\) into \\( y = ax^2 + bx + c \\).",
        "workingOut": "y = a\\left(-\\frac{b}{2a}\\right)^2 + b\\left(-\\frac{b}{2a}\\right) + c = \\frac{ab^2}{4a^2} - \\frac{b^2}{2a} + c = \\frac{b^2}{4a} - \\frac{2b^2}{4a} + \\frac{4ac}{4a} = -\\frac{b^2 - 4ac}{4a} = -\\frac{\\Delta}{4a}"
      }
    ]
  },
  {
    "id": "y11a-3f-q14",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "The quadratic formulae and the graph",
    "question": "Let \\( f(x) = ax^2 + bx + c \\), where \\( a \\neq 0 \\).",
    "subQuestions": [
      {
        "id": "y11a-3f-q14a",
        "type": "teacher_review",
        "question": "a) Show that \\( f\\left(-\\frac{b}{a}\\right) = f(0) \\).",
        "a": "Proof: f(-b/a) = a(-b/a)^2 + b(-b/a) + c = a(b^2/a^2) - b^2/a + c = b^2/a - b^2/a + c = c. Since f(0) = c, f(-b/a) = f(0) holds."
      },
      {
        "id": "y11a-3f-q14b",
        "type": "teacher_review",
        "question": "b) Explain this result in terms of the symmetry of the parabola.",
        "a": "The axis of symmetry is x = -b/(2a). The points x = 0 and x = -b/a are symmetric because their midpoint is (-b/a + 0)/2 = -b/(2a), and both points lie b/(2a) units away from the axis. Thus, they must have the same y-value, which is c."
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Evaluate the function at \\( x = -\\frac{b}{a} \\) and \\( x = 0 \\).",
        "workingOut": "f\\left(-\\frac{b}{a}\\right) = a\\left(-\\frac{b}{a}\\right)^2 + b\\left(-\\frac{b}{a}\\right) + c = c = f(0)"
      },
      {
        "explanation": "The midpoint of the interval \\( [0, -\\frac{b}{a}] \\) is \\( x = -\\frac{b}{2a} \\), which is the axis of symmetry. Symmetrical inputs always produce equal outputs.",
        "workingOut": ""
      }
    ]
  }
];
