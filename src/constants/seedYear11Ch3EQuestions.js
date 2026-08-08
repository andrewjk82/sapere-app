export const Y11_CH3E_QUESTIONS = [
  {
    "id": "y11a-3e-q1",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Completing the square and the graph",
    "question": "Consider the parabola with equation \\( y = (x - 3)^2 - 4 \\) in completed square form.",
    "subQuestions": [
      {
        "id": "y11a-3e-q1a1",
        "type": "multiple_choice",
        "question": "a) (i) What is the concavity of this parabola?",
        "opts": [
          "Concave up because the coefficient of the squared term is positive (\\( a = 1 > 0 \\)).",
          "Concave down because the coefficient of the squared term is negative.",
          "Concave up because the vertex is below the x-axis.",
          "Concave down because it has two x-intercepts."
        ],
        "a": "0"
      },
      {
        "id": "y11a-3e-q1a2",
        "type": "short_answer",
        "question": "a) (ii) Substitute \\( x = 0 \\) to find the \\( y \\)-intercept.",
        "a": "5"
      },
      {
        "id": "y11a-3e-q1a3",
        "type": "short_answer",
        "question": "a) (iii) Write down the equation of the axis of symmetry and the coordinates of the vertex. (Format: 'x = h, V(h, k)')",
        "a": "x = 3, V(3, -4)"
      },
      {
        "id": "y11a-3e-q1a4",
        "type": "short_answer",
        "question": "a) (iv) Explain why there must be \\( x \\)-intercepts, then find them by putting \\( y = 0 \\). (Format: 'x = a, b' in ascending order)",
        "a": "x = 1, 5"
      },
      {
        "id": "y11a-3e-q1a5",
        "type": "teacher_review",
        "question": "a) (v) Sketch this parabola, showing all key features.",
        "a": "Parabola opening upwards with vertex at (3, -4), axis of symmetry x = 3, y-intercept at (0, 5), and x-intercepts at (1, 0) and (5, 0)."
      },
      {
        "id": "y11a-3e-q1b1",
        "type": "teacher_review",
        "question": "b) (i) Sketch the graph of \\( y = (x + 2)^2 - 9 \\), showing all key features.",
        "a": "Parabola concave up with vertex (-2, -9), y-intercept (0, -5), and x-intercepts (-5, 0) and (1, 0)."
      },
      {
        "id": "y11a-3e-q1b2",
        "type": "teacher_review",
        "question": "b) (ii) Sketch the graph of \\( y = (x - 2)^2 - 16 \\), showing all key features.",
        "a": "Parabola concave up with vertex (2, -16), y-intercept (0, -12), and x-intercepts (-2, 0) and (6, 0)."
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [
          -3,
          8,
          9,
          -5
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-2.5,0], [8.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-4.5], [0,7.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [8.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 7.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return Math.pow(x-3, 2) - 4; }], {strokeColor: '#4f46e5', strokeWidth: 1.5});\nboard.create('point', [3, -4], {name: 'V(3,-4)', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [0, 5], {name: '(0,5)', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [1, 0], {name: '1', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [5, 0], {name: '5', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('line', [[3,-5], [3,8]], {strokeColor: '#64748b', dash: 2, strokeWidth: 1});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y11a-3e-q2",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Completing the square and the graph",
    "question": "Consider the concave-down parabola with completed square form \\( y = -(x - 2)^2 + 4 \\).",
    "subQuestions": [
      {
        "id": "y11a-3e-q2a1",
        "type": "multiple_choice",
        "question": "a) (i) Why is the parabola concave down?",
        "opts": [
          "The coefficient of the squared term is negative (\\( a = -1 < 0 \\)).",
          "The vertex lies in the upper half-plane.",
          "The constant term is positive.",
          "It has two distinct real roots."
        ],
        "a": "0"
      },
      {
        "id": "y11a-3e-q2a2",
        "type": "short_answer",
        "question": "a) (ii) Substitute \\( x = 0 \\) to find the \\( y \\)-intercept.",
        "a": "0"
      },
      {
        "id": "y11a-3e-q2a3",
        "type": "short_answer",
        "question": "a) (iii) Write down the equation of the axis of symmetry and the coordinates of the vertex. (Format: 'x = h, V(h, k)')",
        "a": "x = 2, V(2, 4)"
      },
      {
        "id": "y11a-3e-q2a4",
        "type": "short_answer",
        "question": "a) (iv) Explain why there must be \\( x \\)-intercepts, then find them by putting \\( y = 0 \\). (Format: 'x = a, b' in ascending order)",
        "a": "x = 0, 4"
      },
      {
        "id": "y11a-3e-q2a5",
        "type": "teacher_review",
        "question": "a) (v) Sketch this parabola, showing this information.",
        "a": "Parabola opening downwards with vertex at (2, 4), axis of symmetry x = 2, passing through (0, 0) and (4, 0)."
      },
      {
        "id": "y11a-3e-q2b1",
        "type": "teacher_review",
        "question": "b) (i) Sketch the graph of \\( y = -(x + 1)^2 + 9 \\), showing all key features.",
        "a": "Parabola concave down with vertex at (-1, 9), y-intercept at (0, 8), and x-intercepts at (-4, 0) and (2, 0)."
      },
      {
        "id": "y11a-3e-q2b2",
        "type": "teacher_review",
        "question": "b) (ii) Sketch the graph of \\( y = -(x - 3)^2 + 1 \\), showing all key features.",
        "a": "Parabola concave down with vertex at (3, 1), y-intercept at (0, -8), and x-intercepts at (2, 0) and (4, 0)."
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
          -2
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-2.5,0], [6.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-1.5], [0,5.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [6.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 5.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return -Math.pow(x-2, 2) + 4; }], {strokeColor: '#4f46e5', strokeWidth: 1.5});\nboard.create('point', [2, 4], {name: 'V(2,4)', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [0, 0], {name: 'O', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [4, 0], {name: '4', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('line', [[2,-2], [2,6]], {strokeColor: '#64748b', dash: 2, strokeWidth: 1});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y11a-3e-q3a",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Completing the square and the graph",
    "question": "Complete the square in the monic quadratic function: \\( f(x) = x^2 - 6x + 10 \\). (Format: '(x - h)^2 + k')",
    "a": "(x - 3)^2 + 1",
    "solutionSteps": [
      {
        "explanation": "Halve the coefficient of the x-term (\\( -6 / 2 = -3 \\)) and square it (\\( 9 \\)) to find the completed square part.",
        "workingOut": "f(x) = (x^2 - 6x + 9) + 10 - 9"
      },
      {
        "explanation": "Rewrite as a perfect square and collect constant terms.",
        "workingOut": "f(x) = (x - 3)^2 + 1"
      }
    ]
  },
  {
    "id": "y11a-3e-q3b",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Completing the square and the graph",
    "question": "Complete the square in the monic quadratic function: \\( f(x) = x^2 + 8x + 18 \\). (Format: '(x + h)^2 + k')",
    "a": "(x + 4)^2 + 2",
    "solutionSteps": [
      {
        "explanation": "Take half of the coefficient of x (\\( 8 / 2 = 4 \\)), square it (\\( 16 \\)), and adjust the constant.",
        "workingOut": "f(x) = (x^2 + 8x + 16) + 18 - 16"
      },
      {
        "explanation": "Factor the perfect square trinomial.",
        "workingOut": "f(x) = (x + 4)^2 + 2"
      }
    ]
  },
  {
    "id": "y11a-3e-q3c",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Completing the square and the graph",
    "question": "Complete the square in the monic quadratic function: \\( f(x) = x^2 - 4x + 9. \\)",
    "a": "(x - 2)^2 + 5",
    "solutionSteps": [
      {
        "explanation": "Use half the x-coefficient (\\( -4 / 2 = -2 \\)), square it (\\( 4 \\)) and add/subtract it.",
        "workingOut": "f(x) = (x^2 - 4x + 4) + 9 - 4"
      },
      {
        "explanation": "Group the terms into vertex form.",
        "workingOut": "f(x) = (x - 2)^2 + 5"
      }
    ]
  },
  {
    "id": "y11a-3e-q3d",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Completing the square and the graph",
    "question": "Complete the square in the monic quadratic function: \\( f(x) = x^2 - 12x + 5. \\)",
    "a": "(x - 6)^2 - 31",
    "solutionSteps": [
      {
        "explanation": "Add and subtract the square of half the x-coefficient (\\( (-12/2)^2 = 36 \\)).",
        "workingOut": "f(x) = (x^2 - 12x + 36) + 5 - 36"
      },
      {
        "explanation": "Form the completed square.",
        "workingOut": "f(x) = (x - 6)^2 - 31"
      }
    ]
  },
  {
    "id": "y11a-3e-q3e",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Completing the square and the graph",
    "question": "Complete the square in the monic quadratic function: \\( f(x) = x^2 + 4x - 3. \\)",
    "a": "(x + 2)^2 - 7",
    "solutionSteps": [
      {
        "explanation": "Add and subtract the square of half the x-coefficient (\\( (4/2)^2 = 4 \\)).",
        "workingOut": "f(x) = (x^2 + 4x + 4) - 3 - 4"
      },
      {
        "explanation": "Write in vertex form.",
        "workingOut": "f(x) = (x + 2)^2 - 7"
      }
    ]
  },
  {
    "id": "y11a-3e-q3f",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Completing the square and the graph",
    "question": "Complete the square in the monic quadratic function: \\( f(x) = x^2 + 6x - 2. \\)",
    "a": "(x + 3)^2 - 11",
    "solutionSteps": [
      {
        "explanation": "Halve 6 to get 3, square to get 9, and add/subtract.",
        "workingOut": "f(x) = (x^2 + 6x + 9) - 2 - 9"
      },
      {
        "explanation": "Combine the terms.",
        "workingOut": "f(x) = (x + 3)^2 - 11"
      }
    ]
  },
  {
    "id": "y11a-3e-q4",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Completing the square and the graph",
    "question": "Analyze and sketch parabolas where the x-intercepts involve surds.",
    "subQuestions": [
      {
        "id": "y11a-3e-q4a",
        "type": "teacher_review",
        "question": "a) Sketch the graph of \\( y = (x + 2)^2 - 5 \\), showing its vertex, y-intercept, and exact x-intercepts.",
        "a": "Parabola concave up with vertex (-2, -5), y-intercept (0, -1), and x-intercepts at -2 ± √5."
      },
      {
        "id": "y11a-3e-q4b",
        "type": "teacher_review",
        "question": "b) Sketch the graph of \\( y = (x - 3)^2 - 6 \\), showing its vertex, y-intercept, and exact x-intercepts.",
        "a": "Parabola concave up with vertex (3, -6), y-intercept (0, 3), and x-intercepts at 3 ± √6."
      },
      {
        "id": "y11a-3e-q4c",
        "type": "teacher_review",
        "question": "c) Sketch the graph of \\( y = (x - 2)^2 - 3 \\), showing its vertex, y-intercept, and exact x-intercepts.",
        "a": "Parabola concave up with vertex (2, -3), y-intercept (0, 1), and x-intercepts at 2 ± √3."
      }
    ]
  },
  {
    "id": "y11a-3e-q5a",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Completing the square and the graph",
    "question": "Complete the square for \\( y = x^2 - 4x \\). Sketch the graph of the function, showing the vertex and the intercepts with the axes.",
    "a": "vertex: (2, -4); x-intercepts: 0, 4; y-intercept: 0.",
    "solutionSteps": [
      {
        "explanation": "Complete the square for \\( y = x^2 - 4x \\) by adding and subtracting \\( 4 \\).",
        "workingOut": "y = (x^2 - 4x + 4) - 4 = (x - 2)^2 - 4"
      },
      {
        "explanation": "Read the vertex from completed square form.",
        "workingOut": "\\text{Vertex: } (2, -4)"
      },
      {
        "explanation": "Find intercepts: \\( x^2 - 4x = 0 \\implies x(x - 4) = 0 \\implies x = 0, 4 \\).",
        "workingOut": "\\text{Intercepts: } (0, 0), (4, 0)"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [
          -2,
          6,
          6,
          -5
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-1.5,0], [5.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-4.5], [0,5.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [5.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 5.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return x*x - 4*x; }], {strokeColor: '#4f46e5', strokeWidth: 1.5});\nboard.create('point', [2, -4], {name: 'V(2,-4)', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [0, 0], {name: 'O', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [4, 0], {name: '4', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y11a-3e-q5b",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Completing the square and the graph",
    "question": "Complete the square for \\( y = x^2 - 6x + 5 \\). Sketch the graph, showing the vertex and the intercepts.",
    "a": "vertex: (3, -4); x-intercepts: 1, 5; y-intercept: 5.",
    "solutionSteps": [
      {
        "explanation": "Complete the square: half of -6 is -3, square is 9.",
        "workingOut": "y = (x^2 - 6x + 9) + 5 - 9 = (x - 3)^2 - 4"
      },
      {
        "explanation": "Vertex is at \\( (3, -4) \\).",
        "workingOut": ""
      },
      {
        "explanation": "Find x-intercepts by factoring or setting \\( y = 0 \\).",
        "workingOut": "(x - 1)(x - 5) = 0 \\implies x = 1, 5"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [
          -2,
          8,
          7,
          -5
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-1.5,0], [6.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-4.5], [0,7.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [6.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 7.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return x*x - 6*x + 5; }], {strokeColor: '#4f46e5', strokeWidth: 1.5});\nboard.create('point', [3, -4], {name: 'V(3,-4)', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [0, 5], {name: '5', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [1, 0], {name: '1', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [5, 0], {name: '5', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y11a-3e-q5c",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Completing the square and the graph",
    "question": "Complete the square for \\( y = x^2 - 4x - 1 \\). Sketch the graph, showing the vertex and intercepts.",
    "a": "vertex: (2, -5); x-intercepts: 2 ± √5; y-intercept: -1.",
    "solutionSteps": [
      {
        "explanation": "Complete the square by adding and subtracting \\( 4 \\).",
        "workingOut": "y = (x^2 - 4x + 4) - 1 - 4 = (x - 2)^2 - 5"
      },
      {
        "explanation": "Vertex is \\( (2, -5) \\).",
        "workingOut": ""
      },
      {
        "explanation": "For x-intercepts, solve \\( (x-2)^2 - 5 = 0 \\).",
        "workingOut": "(x-2)^2 = 5 \\implies x = 2 \\pm \\sqrt{5}"
      }
    ]
  },
  {
    "id": "y11a-3e-q5d",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Completing the square and the graph",
    "question": "Complete the square for \\( y = x^2 + 6x + 2 \\). Sketch the graph, showing the vertex and intercepts.",
    "a": "vertex: (-3, -7); x-intercepts: -3 ± √7; y-intercept: 2.",
    "solutionSteps": [
      {
        "explanation": "Complete the square: half of 6 is 3, square is 9.",
        "workingOut": "y = (x^2 + 6x + 9) + 2 - 9 = (x + 3)^2 - 7"
      },
      {
        "explanation": "Vertex is at \\( (-3, -7) \\) and y-intercept is at \\( (0, 2) \\).",
        "workingOut": ""
      },
      {
        "explanation": "Solve for x-intercepts: \\( (x+3)^2 = 7 \\implies x = -3 \\pm \\sqrt{7} \\).",
        "workingOut": ""
      }
    ]
  },
  {
    "id": "y11a-3e-q5e",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Completing the square and the graph",
    "question": "Complete the square for \\( y = x^2 + 4x + 5 \\). Sketch the graph, showing the vertex and intercepts.",
    "a": "vertex: (-2, 1); no x-intercepts; y-intercept: 5.",
    "solutionSteps": [
      {
        "explanation": "Complete the square: half of 4 is 2, square is 4.",
        "workingOut": "y = (x^2 + 4x + 4) + 5 - 4 = (x + 2)^2 + 1"
      },
      {
        "explanation": "Vertex is at \\( (-2, 1) \\). Since vertex y-coordinate is positive and it opens up, there are no x-intercepts.",
        "workingOut": ""
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [
          -5,
          8,
          2,
          -2
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-4.5,0], [1.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-1.5], [0,7.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [1.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 7.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return x*x + 4*x + 5; }], {strokeColor: '#4f46e5', strokeWidth: 1.5});\nboard.create('point', [-2, 1], {name: 'V(-2,1)', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [0, 5], {name: '5', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y11a-3e-q5f",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Completing the square and the graph",
    "question": "Complete the square for \\( y = x^2 - 5x + 7 \\). Sketch the graph, showing the vertex and intercepts.",
    "a": "vertex: (2.5, 0.75); no x-intercepts; y-intercept: 7.",
    "solutionSteps": [
      {
        "explanation": "Complete the square: half of -5 is -2.5, square is 6.25.",
        "workingOut": "y = (x^2 - 5x + 6.25) + 7 - 6.25 = (x - 2.5)^2 + 0.75"
      },
      {
        "explanation": "Read the vertex: \\( (2.5, 0.75) \\). Since \\( y \\ge 0.75 \\), there are no x-intercepts.",
        "workingOut": ""
      }
    ]
  },
  {
    "id": "y11a-3e-q6a",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Completing the square and the graph",
    "question": "Find the zeroes of the quadratic function \\( f(x) = x^2 - 6x + 8 \\) by completing the square. (Format: 'x = a, b' in ascending order)",
    "a": "x = 2, 4",
    "solutionSteps": [
      {
        "explanation": "Complete the square and set equal to zero.",
        "workingOut": "x^2 - 6x + 9 - 1 = 0 \\implies (x - 3)^2 = 1"
      },
      {
        "explanation": "Take the square root of both sides and solve.",
        "workingOut": "x - 3 = \\pm 1 \\implies x = 2, 4"
      }
    ]
  },
  {
    "id": "y11a-3e-q6b",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Completing the square and the graph",
    "question": "Find the zeroes of the quadratic function \\( f(x) = x^2 + 4x - 5 \\) by completing the square.",
    "a": "x = -5, 1",
    "solutionSteps": [
      {
        "explanation": "Complete the square and solve.",
        "workingOut": "(x^2 + 4x + 4) - 9 = 0 \\implies (x + 2)^2 = 9"
      },
      {
        "explanation": "Find roots.",
        "workingOut": "x + 2 = \\pm 3 \\implies x = -5, 1"
      }
    ]
  },
  {
    "id": "y11a-3e-q6c",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Completing the square and the graph",
    "question": "Find the zeroes of the quadratic function \\( f(x) = x^2 - 3x - 4 \\) by completing the square.",
    "a": "x = -1, 4",
    "solutionSteps": [
      {
        "explanation": "Complete the square.",
        "workingOut": "(x - 1.5)^2 - 6.25 = 0 \\implies (x - 1.5)^2 = 6.25"
      },
      {
        "explanation": "Take the square root and solve.",
        "workingOut": "x - 1.5 = \\pm 2.5 \\implies x = -1, 4"
      }
    ]
  },
  {
    "id": "y11a-3e-q7a",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Completing the square and the graph",
    "question": "Complete the square of \\( f(x) = x^2 - 6x + 4 \\) in order to find its zeroes. (Format: 'x = a - \\sqrt{b}, a + \\sqrt{b}' or similar ascending format)",
    "a": "x = 3 - sqrt{5}, 3 + sqrt{5}",
    "solutionSteps": [
      {
        "explanation": "Complete the square by adding and subtracting \\( 9 \\).",
        "workingOut": "(x^2 - 6x + 9) - 5 = 0 \\implies (x - 3)^2 = 5"
      },
      {
        "explanation": "Solve for x.",
        "workingOut": "x - 3 = \\pm \\sqrt{5} \\implies x = 3 \\pm \\sqrt{5}"
      }
    ]
  },
  {
    "id": "y11a-3e-q7b",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Completing the square and the graph",
    "question": "Complete the square of \\( f(x) = 2x^2 - 8x - 2 \\) in order to find its zeroes.",
    "a": "x = 2 - sqrt{5}, 2 + sqrt{5}",
    "solutionSteps": [
      {
        "explanation": "Factor out 2 first, then complete the square inside.",
        "workingOut": "2(x^2 - 4x - 1) = 0 \\implies 2[(x - 2)^2 - 5] = 0"
      },
      {
        "explanation": "Solve for x.",
        "workingOut": "(x - 2)^2 = 5 \\implies x = 2 \\pm \\sqrt{5}"
      }
    ]
  },
  {
    "id": "y11a-3e-q7c",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Completing the square and the graph",
    "question": "Complete the square of \\( f(x) = -x^2 - 4x + 2 \\) in order to find its zeroes.",
    "a": "x = -2 - sqrt{6}, -2 + sqrt{6}",
    "solutionSteps": [
      {
        "explanation": "Factor out -1 and complete the square.",
        "workingOut": "-(x^2 + 4x - 2) = 0 \\implies -[(x + 2)^2 - 6] = 0"
      },
      {
        "explanation": "Solve for the roots.",
        "workingOut": "(x + 2)^2 = 6 \\implies x = -2 \\pm \\sqrt{6}"
      }
    ]
  },
  {
    "id": "y11a-3e-q8a",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Completing the square and the graph",
    "question": "Find the equation of the quadratic function sketched below in completed square form. The coefficient of \\( x^2 \\) is either 1 or -1. The parabola has vertex \\( (2, 3) \\) and \\( y \\)-intercept at 7. (Format: 'y = (x - h)^2 + k')",
    "a": "y = (x - 2)^2 + 3",
    "solutionSteps": [
      {
        "explanation": "Use the vertex \\( (2, 3) \\) in the vertex form template with positive concavity.",
        "workingOut": "y = (x - 2)^2 + 3"
      },
      {
        "explanation": "Verify the y-intercept by putting \\( x = 0 \\).",
        "workingOut": "y(0) = (0 - 2)^2 + 3 = 7 \\implies \\text{Matches!}"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [
          -2,
          9,
          6,
          -1
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-1.5,0], [5.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-0.5], [0,8.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [5.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 8.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return Math.pow(x-2,2)+3; }], {strokeColor: '#4f46e5', strokeWidth: 1.5});\nboard.create('point', [2, 3], {name: '(2,3)', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [0, 7], {name: '7', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y11a-3e-q8b",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Completing the square and the graph",
    "question": "Find the equation of the quadratic function sketched below in completed square form. The coefficient of \\( x^2 \\) is either 1 or -1. The parabola has vertex \\( (-1, -4) \\) and \\( y \\)-intercept at -3. (Format: 'y = (x + h)^2 - k')",
    "a": "y = (x + 1)^2 - 4",
    "solutionSteps": [
      {
        "explanation": "Substitute the vertex \\( (-1, -4) \\) into the vertex form template.",
        "workingOut": "y = (x + 1)^2 - 4"
      },
      {
        "explanation": "Verify using the y-intercept.",
        "workingOut": "y(0) = (0 + 1)^2 - 4 = -3"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [
          -4,
          3,
          3,
          -6
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-3.5,0], [2.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-5.5], [0,2.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [2.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 2.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return Math.pow(x+1,2)-4; }], {strokeColor: '#4f46e5', strokeWidth: 1.5});\nboard.create('point', [-1, -4], {name: '(-1,-4)', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [0, -3], {name: '-3', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y11a-3e-q8c",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Completing the square and the graph",
    "question": "Find the equation of the quadratic function sketched below in completed square form. The coefficient of \\( x^2 \\) is either 1 or -1. The parabola has vertex \\( (2, 5) \\) and \\( y \\)-intercept at 1. (Format: 'y = -(x - h)^2 + k')",
    "a": "y = -(x - 2)^2 + 5",
    "solutionSteps": [
      {
        "explanation": "Since the parabola is concave down with vertex at \\( (2, 5) \\), write: ",
        "workingOut": "y = -(x - 2)^2 + 5"
      },
      {
        "explanation": "Verify the y-intercept.",
        "workingOut": "y(0) = -(0 - 2)^2 + 5 = -4 + 5 = 1"
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
          -3
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-1.5,0], [5.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-2.5], [0,6.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [5.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 6.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return -Math.pow(x-2,2)+5; }], {strokeColor: '#4f46e5', strokeWidth: 1.5});\nboard.create('point', [2, 5], {name: '(2,5)', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [0, 1], {name: '1', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y11a-3e-q8d",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Completing the square and the graph",
    "question": "Find the equation of the quadratic function sketched below in completed square form. The coefficient of \\( x^2 \\) is either 1 or -1. The parabola has vertex \\( (3, -2) \\) and \\( y \\)-intercept at -11. (Format: 'y = -(x - h)^2 - k')",
    "a": "y = -(x - 3)^2 - 2",
    "solutionSteps": [
      {
        "explanation": "Using the concave-down vertex form template with vertex \\( (3, -2) \\):",
        "workingOut": "y = -(x - 3)^2 - 2"
      },
      {
        "explanation": "Verify y-intercept: ",
        "workingOut": "y(0) = -(0 - 3)^2 - 2 = -9 - 2 = -11"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [
          -2,
          2,
          7,
          -13
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-1.5,0], [6.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-12.5], [0,1.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [6.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 1.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return -Math.pow(x-3,2)-2; }], {strokeColor: '#4f46e5', strokeWidth: 1.5});\nboard.create('point', [3, -2], {name: '(3,-2)', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [0, -11], {name: '-11', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y11a-3e-q9a",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Completing the square and the graph",
    "question": "Write down the equation of the monic quadratic function with vertex at \\( (3, 4) \\). (Format: 'y = (x - h)^2 + k')",
    "a": "y = (x - 3)^2 + 4",
    "solutionSteps": [
      {
        "explanation": "A monic quadratic function in vertex form is \\( y = (x - h)^2 + k \\). Substitute \\( h = 3, k = 4 \\).",
        "workingOut": "y = (x - 3)^2 + 4"
      }
    ]
  },
  {
    "id": "y11a-3e-q9b",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Completing the square and the graph",
    "question": "Write down the equation of the monic quadratic function with vertex at \\( (0, -5) \\). (Format: 'y = x^2 - k')",
    "a": "y = x^2 - 5",
    "solutionSteps": [
      {
        "explanation": "Substitute \\( h = 0, k = -5 \\) into the vertex form formula.",
        "workingOut": "y = (x - 0)^2 - 5 = x^2 - 5"
      }
    ]
  },
  {
    "id": "y11a-3e-q9c",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Completing the square and the graph",
    "question": "Write down the equation of the monic quadratic function with vertex at \\( (-2, 6) \\). (Format: 'y = (x + h)^2 + k')",
    "a": "y = (x + 2)^2 + 6",
    "solutionSteps": [
      {
        "explanation": "Substitute \\( h = -2, k = 6 \\) into the vertex form formula.",
        "workingOut": "y = (x - (-2))^2 + 6 = (x + 2)^2 + 6"
      }
    ]
  },
  {
    "id": "y11a-3e-q9d",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Completing the square and the graph",
    "question": "Write down the equation of the monic quadratic function with vertex at \\( (4, -9) \\). (Format: 'y = (x - h)^2 - k')",
    "a": "y = (x - 4)^2 - 9",
    "solutionSteps": [
      {
        "explanation": "Substitute \\( h = 4, k = -9 \\) into the vertex form template.",
        "workingOut": "y = (x - 4)^2 - 9"
      }
    ]
  },
  {
    "id": "y11a-3e-q10",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Completing the square and the graph",
    "question": "Investigate properties of the family of parabolas given by \\( y = a(x - 2)^2 - 3 \\).",
    "subQuestions": [
      {
        "id": "y11a-3e-q10a",
        "type": "teacher_review",
        "question": "a) Sketch on a single coordinate plane the four parabolas corresponding to: \\( a = 2 \\), \\( a = 1 \\), \\( a = -1 \\), \\( a = -2 \\).",
        "a": "Four curves sharing the vertex (2, -3). The parabolas for a = 1, 2 open up (with a = 2 being narrower), while a = -1, -2 open down."
      },
      {
        "id": "y11a-3e-q10b",
        "type": "short_answer",
        "question": "b) Which point do all these parabolas pass through? (Format: '(x, y)')",
        "a": "(2, -3)"
      },
      {
        "id": "y11a-3e-q10c",
        "type": "multiple_choice",
        "question": "c) For which values of \\( a \\) does the parabola have \\( x \\)-intercepts?",
        "opts": [
          "a > 0",
          "a < 0",
          "a = 0",
          "For all values of a"
        ],
        "a": "0"
      },
      {
        "id": "y11a-3e-q10d",
        "type": "teacher_review",
        "question": "d) Explain your answer to part c geometrically.",
        "a": "Geometrically, the shared vertex (2, -3) lies below the x-axis. If a > 0, the parabola opens upwards and must cross the x-axis. If a < 0, it opens downwards and moves away from the x-axis, having no intercepts."
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 400,
        "height": 300,
        "boundingbox": [
          -1,
          7,
          5,
          -9
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-0.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-8.5], [0,6.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 6.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return 2*Math.pow(x-2,2)-3; }], {strokeColor: '#4f46e5', strokeWidth: 1.2});\nboard.create('functiongraph', [function(x){ return Math.pow(x-2,2)-3; }], {strokeColor: '#8b5cf6', strokeWidth: 1.2});\nboard.create('functiongraph', [function(x){ return -Math.pow(x-2,2)-3; }], {strokeColor: '#10b981', strokeWidth: 1.2});\nboard.create('functiongraph', [function(x){ return -2*Math.pow(x-2,2)-3; }], {strokeColor: '#f43f5e', strokeWidth: 1.2});\nboard.create('point', [2, -3], {name: '(2,-3)', visible: true, strokeColor: 'black', label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y11a-3e-q11",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Completing the square and the graph",
    "question": "Consider the general quadratic function \\( y = ax^2 + bx + c \\). Complete the general completing the square derivation.",
    "subQuestions": [
      {
        "id": "y11a-3e-q11a",
        "type": "teacher_review",
        "question": "a) Divide through by \\( a \\) and complete the square in \\( x \\) in order to show that \\( \\frac{y}{a} = \\left(x + \\frac{b}{2a}\\right)^2 - \\frac{b^2 - 4ac}{4a^2} \\).",
        "a": "Proof: y/a = x^2 + b/a*x + c/a. Complete square: y/a = (x^2 + b/a*x + b^2/(4a^2)) + c/a - b^2/(4a^2) = (x + b/(2a))^2 - (b^2 - 4ac)/(4a^2)."
      },
      {
        "id": "y11a-3e-q11b",
        "type": "teacher_review",
        "question": "b) Make \\( y \\) the subject, and hence write down the coordinates of the vertex and the equation of the axis of symmetry.",
        "a": "Vertex: (-b/(2a), -(b^2-4ac)/(4a)) or (-b/(2a), c - b^2/(4a)). Axis of symmetry: x = -b/(2a)."
      },
      {
        "id": "y11a-3e-q11c",
        "type": "teacher_review",
        "question": "c) Put \\( y = 0 \\) in order to find the \\( x \\)-intercepts.",
        "a": "0 = a(x + b/(2a))^2 - (b^2-4ac)/(4a) => (x + b/(2a))^2 = (b^2-4ac)/(4a^2) => x = (-b ± √(b^2-4ac)) / (2a)."
      }
    ]
  },
  {
    "id": "y11a-3e-q12",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Completing the square and the graph",
    "question": "For each parabola, write down the coordinates of the vertex, state the concavity, and determine the number of \\( x \\)-intercepts.",
    "subQuestions": [
      {
        "id": "y11a-3e-q12a",
        "type": "short_answer",
        "question": "a) For \\( y = 3(x - 2)^2 - 6 \\), find vertex and number of x-intercepts. (Format: 'V(h, k), n intercepts')",
        "a": "V(2, -6), 2 intercepts"
      },
      {
        "id": "y11a-3e-q12b",
        "type": "short_answer",
        "question": "b) For \\( y = -2(x + 3)^2 - 4 \\), find vertex and number of x-intercepts.",
        "a": "V(-3, -4), 0 intercepts"
      },
      {
        "id": "y11a-3e-q12c",
        "type": "short_answer",
        "question": "c) For \\( y = 5(x - 1)^2 \\), find vertex and number of x-intercepts.",
        "a": "V(1, 0), 1 intercept"
      }
    ]
  },
  {
    "id": "y11a-3e-q13",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Completing the square and the graph",
    "question": "Complete the square for these non-monic quadratics, and sketch their curves showing the vertex and intercepts.",
    "subQuestions": [
      {
        "id": "y11a-3e-q13a",
        "type": "teacher_review",
        "question": "a) Complete the square and sketch \\( y = -x^2 + 6x - 4 \\).",
        "a": "y = -(x - 3)^2 + 5; vertex is (3, 5); x-intercepts at 3 ± √5; y-intercept is -4."
      },
      {
        "id": "y11a-3e-q13b",
        "type": "teacher_review",
        "question": "b) Complete the square and sketch \\( y = 2x^2 - 8x + 10 \\).",
        "a": "y = 2(x - 2)^2 + 2; vertex is (2, 2); no x-intercepts; y-intercept is 10."
      },
      {
        "id": "y11a-3e-q13c",
        "type": "teacher_review",
        "question": "c) Complete the square and sketch \\( y = 2x^2 + 4x - 2 \\).",
        "a": "y = 2(x + 1)^2 - 4; vertex is (-1, -4); x-intercepts at -1 ± √2; y-intercept is -2."
      }
    ]
  },
  {
    "id": "y11a-3e-q14",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Completing the square and the graph",
    "question": "Complete the square for each quadratic function, and use this to write the expression in factored form.",
    "subQuestions": [
      {
        "id": "y11a-3e-q14a",
        "type": "short_answer",
        "question": "a) Write \\( f(x) = x^2 + 4x - 2 \\) in factored form using surds. (Format: '(x + a - \\sqrt{b})(x + a + \\sqrt{b})')",
        "a": "(x + 2 - sqrt{6})(x + 2 + sqrt{6})"
      },
      {
        "id": "y11a-3e-q14b",
        "type": "short_answer",
        "question": "b) Write \\( f(x) = x^2 - 6x + 2 \\) in factored form using surds.",
        "a": "(x - 3 - sqrt{7})(x - 3 + sqrt{7})"
      },
      {
        "id": "y11a-3e-q14c",
        "type": "short_answer",
        "question": "c) Write \\( f(x) = -x^2 - 4x + 3 \\) in factored form using surds. (Format: '(\\sqrt{a} - x - b)(\\sqrt{a} + x + b)')",
        "a": "(sqrt{7} - x - 2)(sqrt{7} + x + 2)"
      }
    ]
  },
  {
    "id": "y11a-3e-q15",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Completing the square and the graph",
    "question": "The general form of a quadratic with vertex \\( (-3, 4) \\) is \\( y = a(x + 3)^2 + 4 \\). Find the equation of the quadratic given these conditions.",
    "subQuestions": [
      {
        "id": "y11a-3e-q15a",
        "type": "short_answer",
        "question": "a) Find the equation if the quadratic is monic. (Format: 'y = (x + h)^2 + k')",
        "a": "y = (x + 3)^2 + 4"
      },
      {
        "id": "y11a-3e-q15b",
        "type": "short_answer",
        "question": "b) Find the equation if the coefficient of \\( x^2 \\) is 2.",
        "a": "y = 2(x + 3)^2 + 4"
      },
      {
        "id": "y11a-3e-q15c",
        "type": "short_answer",
        "question": "c) Find the equation if the \\( y \\)-intercept is 22.",
        "a": "y = 2(x + 3)^2 + 4"
      },
      {
        "id": "y11a-3e-q15d",
        "type": "short_answer",
        "question": "d) Find the equation if the curve passes through the origin. (Format: 'y = a(x + h)^2 + k' where a is a fraction)",
        "a": "y = -4/9(x + 3)^2 + 4"
      }
    ]
  }
];
