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
          "The parabola has two distinct real roots."
        ],
        "a": 0
      },
      {
        "id": "y11a-3d-q1a2",
        "type": "multiple_choice",
        "question": "ii) What is the \\( y \\)-intercept of \\( y = (x - 2)(x - 4) \\)?",
        "opts": [
          "\\(8\\)",
          "\\(-8\\)",
          "\\(4\\)",
          "\\(-4\\)"
        ],
        "a": 0
      },
      {
        "id": "y11a-3d-q1a3",
        "type": "multiple_choice",
        "question": "iii) What are the \\( x \\)-intercepts of \\( y = (x - 2)(x - 4) \\)?",
        "opts": [
          "\\(x = 2\\) and \\(x = 4\\)",
          "\\(x = -2\\) and \\(x = -4\\)",
          "\\(x = 2\\) and \\(x = -4\\)",
          "\\(x = 0\\) and \\(x = 4\\)"
        ],
        "a": 0
      },
      {
        "id": "y11a-3d-q1a4",
        "type": "multiple_choice",
        "question": "iv) What is the equation of the axis of symmetry?",
        "opts": [
          "\\(x = 3\\)",
          "\\(x = 2\\)",
          "\\(x = 4\\)",
          "\\(x = 1\\)"
        ],
        "a": 0
      },
      {
        "id": "y11a-3d-q1a5",
        "type": "multiple_choice",
        "question": "v) What are the coordinates of the vertex?",
        "opts": [
          "\\((3, -1)\\)",
          "\\((3, 1)\\)",
          "\\((2, 0)\\)",
          "\\((4, 0)\\)"
        ],
        "a": 0
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
        "question": "vii) Does the quadratic function have equal zeroes or distinct zeroes?",
        "opts": [
          "Distinct zeroes",
          "Equal zeroes",
          "No real zeroes",
          "Infinite zeroes"
        ],
        "a": 0
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
      }
    ],
    "solutionSteps": [
      {
        "explanation": "전개하면 \\(y = x^2 - 6x + 8\\). x² 계수가 양수 \\(a = 1 > 0\\)이므로 위로 볼록합니다.",
        "workingOut": "a = 1 > 0 \\implies \\text{위로 볼록}",
        "graphData": null
      },
      {
        "explanation": "y절편: x = 0 대입.",
        "workingOut": "y = (0-2)(0-4) = 8",
        "graphData": null
      },
      {
        "explanation": "x절편: y = 0 설정.",
        "workingOut": "(x-2)(x-4) = 0 \\implies x = 2 \\text{ 또는 } x = 4",
        "graphData": null
      },
      {
        "explanation": "대칭축: x절편의 중점.",
        "workingOut": "x = \\frac{2+4}{2} = 3",
        "graphData": null
      },
      {
        "explanation": "꼭짓점: x = 3 대입.",
        "workingOut": "y = (3-2)(3-4) = -1 \\implies \\text{꼭짓점: } (3, -1)",
        "graphData": null
      }
    ],
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
          "The vertex lies in the first quadrant."
        ],
        "a": 0
      },
      {
        "id": "y11a-3d-q2a2",
        "type": "multiple_choice",
        "question": "ii) What is the \\( y \\)-intercept of \\( y = -x(x - 4) \\)?",
        "opts": [
          "\\(0\\)",
          "\\(4\\)",
          "\\(-4\\)",
          "\\(8\\)"
        ],
        "a": 0
      },
      {
        "id": "y11a-3d-q2a3",
        "type": "multiple_choice",
        "question": "iii) What are the \\( x \\)-intercepts of \\( y = -x(x - 4) \\)?",
        "opts": [
          "\\(x = 0\\) and \\(x = 4\\)",
          "\\(x = 0\\) and \\(x = -4\\)",
          "\\(x = -4\\) and \\(x = 4\\)",
          "\\(x = 2\\) and \\(x = 4\\)"
        ],
        "a": 0
      },
      {
        "id": "y11a-3d-q2a4",
        "type": "multiple_choice",
        "question": "iv) What is the equation of the axis of symmetry?",
        "opts": [
          "\\(x = 2\\)",
          "\\(x = 0\\)",
          "\\(x = 4\\)",
          "\\(x = -2\\)"
        ],
        "a": 0
      },
      {
        "id": "y11a-3d-q2a5",
        "type": "multiple_choice",
        "question": "v) What are the coordinates of the vertex?",
        "opts": [
          "\\((2, 4)\\)",
          "\\((2, -4)\\)",
          "\\((0, 0)\\)",
          "\\((4, 0)\\)"
        ],
        "a": 0
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
        "question": "vii) Does the quadratic function have equal zeroes or distinct zeroes?",
        "opts": [
          "Distinct zeroes",
          "Equal zeroes",
          "No real zeroes",
          "Infinite zeroes"
        ],
        "a": 0
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
      }
    ],
    "solutionSteps": [
      {
        "explanation": "전개하면 \\(y = -x^2 + 4x\\). x² 계수가 음수 \\(a = -1 < 0\\)이므로 아래로 볼록합니다.",
        "workingOut": "a = -1 < 0 \\implies \\text{아래로 볼록}",
        "graphData": null
      },
      {
        "explanation": "y절편: x = 0 대입.",
        "workingOut": "y = -0(0-4) = 0",
        "graphData": null
      },
      {
        "explanation": "x절편: y = 0 설정.",
        "workingOut": "-x(x-4) = 0 \\implies x = 0 \\text{ 또는 } x = 4",
        "graphData": null
      },
      {
        "explanation": "대칭축: x절편의 중점.",
        "workingOut": "x = \\frac{0+4}{2} = 2",
        "graphData": null
      },
      {
        "explanation": "꼭짓점: x = 2 대입.",
        "workingOut": "y = -2(2-4) = 4 \\implies \\text{꼭짓점: } (2, 4)",
        "graphData": null
      }
    ],
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
          "Concave down because it is a perfect square."
        ],
        "a": 0
      },
      {
        "id": "y11a-3d-q3a2",
        "type": "multiple_choice",
        "question": "ii) What is the \\( y \\)-intercept of \\( y = (x - 3)^2 \\)?",
        "opts": [
          "\\(9\\)",
          "\\(3\\)",
          "\\(-9\\)",
          "\\(-3\\)"
        ],
        "a": 0
      },
      {
        "id": "y11a-3d-q3a3",
        "type": "multiple_choice",
        "question": "iii) What is the single \\( x \\)-intercept (vertex) of \\( y = (x - 3)^2 \\)?",
        "opts": [
          "\\(x = 3\\)",
          "\\(x = -3\\)",
          "\\(x = 0\\)",
          "\\(x = 9\\)"
        ],
        "a": 0
      },
      {
        "id": "y11a-3d-q3a4",
        "type": "multiple_choice",
        "question": "iv) Using symmetry about \\( x = 3 \\) and the y-intercept, which other point lies on the parabola?",
        "opts": [
          "\\((6, 9)\\)",
          "\\((6, -9)\\)",
          "\\((-3, 9)\\)",
          "\\((3, 9)\\)"
        ],
        "a": 0
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
        "question": "vi) Does the quadratic function have equal zeroes or distinct zeroes?",
        "opts": [
          "Equal zeroes",
          "Distinct zeroes",
          "No real zeroes",
          "Infinite zeroes"
        ],
        "a": 0
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
      }
    ],
    "solutionSteps": [
      {
        "explanation": "전개하면 \\(y = x^2 - 6x + 9\\). x² 계수가 양수이므로 위로 볼록합니다.",
        "workingOut": "a = 1 \\implies \\text{위로 볼록}",
        "graphData": null
      },
      {
        "explanation": "y절편: x = 0 대입.",
        "workingOut": "y = (0-3)^2 = 9",
        "graphData": null
      },
      {
        "explanation": "x절편: y = 0 설정.",
        "workingOut": "(x-3)^2 = 0 \\implies x = 3",
        "graphData": null
      },
      {
        "explanation": "대칭점: 꼭짓점 x = 3에서 3만큼 오른쪽 지점.",
        "workingOut": "x = 3+3 = 6 \\implies (6, 9)",
        "graphData": null
      }
    ],
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
        "type": "multiple_choice",
        "question": "a) (i) What is the y-value when \\( x = 4 \\) for \\( y = \\frac{1}{4}x^2 \\)?",
        "opts": [
          "\\(4\\)",
          "\\(2\\)",
          "\\(8\\)",
          "\\(16\\)"
        ],
        "a": 0
      },
      {
        "id": "y11a-3d-q4a2",
        "type": "multiple_choice",
        "question": "a) (ii) What other point lies on the parabola due to symmetry about the y-axis?",
        "opts": [
          "\\((-4, 4)\\)",
          "\\((4, -4)\\)",
          "\\((-4, -4)\\)",
          "\\((4, 4)\\)"
        ],
        "a": 0
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
      }
    ],
    "solutionSteps": [
      {
        "explanation": "x = 4를 \\(y = \\frac{1}{4}x^2\\)에 대입합니다.",
        "workingOut": "y = \\frac{1}{4}(4)^2 = 4 \\implies (4, 4)",
        "graphData": null
      },
      {
        "explanation": "y축 대칭이므로 (4, 4)의 반대쪽 점은 (-4, 4)입니다.",
        "workingOut": "\\text{Symmetric point: } (-4, 4)",
        "graphData": null
      }
    ],
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
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Quadratic functions — factoring and the graph",
    "question": "Write down, in factored form, the equation of the monic quadratic function with zeroes 3 and 5.",
    "opts": [
      "\\(y = (x - 3)(x - 5)\\)",
      "\\(y = (x + 3)(x + 5)\\)",
      "\\(y = (x - 3)(x + 5)\\)",
      "\\(y = x(x - 15)\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "영점이 \\(\\alpha\\)와 \\(\\beta\\)인 이차함수는 \\(y = (x - \\alpha)(x - \\beta)\\)입니다.",
        "workingOut": "y = (x - 3)(x - 5)",
        "graphData": null
      }
    ]
  },

  // ── QUESTION 5b ──
  {
    "id": "y11a-3d-q5b",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Quadratic functions — factoring and the graph",
    "question": "Write down, in factored form, the equation of the monic quadratic function with zeroes 0 and 4.",
    "opts": [
      "\\(y = x(x - 4)\\)",
      "\\(y = (x - 4)(x + 4)\\)",
      "\\(y = x(x + 4)\\)",
      "\\(y = (x - 2)(x - 2)\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "영점 0과 4를 이용합니다.",
        "workingOut": "y = (x - 0)(x - 4) = x(x - 4)",
        "graphData": null
      }
    ]
  },

  // ── QUESTION 5c ──
  {
    "id": "y11a-3d-q5c",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Quadratic functions — factoring and the graph",
    "question": "Write down, in factored form, the equation of the monic quadratic function with zeroes \\(-2\\) and \\(6\\).",
    "opts": [
      "\\(y = (x + 2)(x - 6)\\)",
      "\\(y = (x - 2)(x + 6)\\)",
      "\\(y = (x + 2)(x + 6)\\)",
      "\\(y = (x - 2)(x - 6)\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "영점을 인수 공식에 대입합니다.",
        "workingOut": "y = (x - (-2))(x - 6) = (x + 2)(x - 6)",
        "graphData": null
      }
    ]
  },

  // ── QUESTION 5d ──
  {
    "id": "y11a-3d-q5d",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Quadratic functions — factoring and the graph",
    "question": "Write down, in factored form, the equation of the monic quadratic function with zeroes \\(-5\\) and \\(-2\\).",
    "opts": [
      "\\(y = (x + 5)(x + 2)\\)",
      "\\(y = (x - 5)(x - 2)\\)",
      "\\(y = (x + 5)(x - 2)\\)",
      "\\(y = (x - 5)(x + 2)\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "영점 \\(\\alpha = -5\\), \\(\\beta = -2\\)를 인수 형태에 적용합니다.",
        "workingOut": "y = (x - (-5))(x - (-2)) = (x + 5)(x + 2)",
        "graphData": null
      }
    ]
  },

  // ── QUESTION 6a ──
  {
    "id": "y11a-3d-q6a",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Quadratic functions — factoring and the graph",
    "question": "The parabola is concave up and has \\( x \\)-intercepts at 0 and 4. What is the equation in factored form?",
    "opts": [
      "\\(y = x(x - 4)\\)",
      "\\(y = -x(x - 4)\\)",
      "\\(y = (x + 4)(x - 4)\\)",
      "\\(y = x(x + 4)\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "위로 볼록하므로 선행 계수 양수 (a = 1). 절편이 0과 4입니다.",
        "workingOut": "y = 1 \\cdot (x - 0)(x - 4) = x(x - 4)",
        "graphData": null
      }
    ],
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
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Quadratic functions — factoring and the graph",
    "question": "The parabola is concave up and has \\( x \\)-intercepts at \\(-3\\) and \\(2\\). What is the equation in factored form?",
    "opts": [
      "\\(y = (x + 3)(x - 2)\\)",
      "\\(y = -(x + 3)(x - 2)\\)",
      "\\(y = (x - 3)(x + 2)\\)",
      "\\(y = (x + 3)(x + 2)\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "위로 볼록하므로 선행 계수 양수. 절편 -3과 2를 적용합니다.",
        "workingOut": "y = (x - (-3))(x - 2) = (x + 3)(x - 2)",
        "graphData": null
      }
    ]
  },

  // ── QUESTION 6c ──
  {
    "id": "y11a-3d-q6c",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Quadratic functions — factoring and the graph",
    "question": "The parabola is concave down and has \\( x \\)-intercepts at \\(-2\\) and \\(4\\). What is the equation in factored form?",
    "opts": [
      "\\(y = -(x + 2)(x - 4)\\)",
      "\\(y = (x + 2)(x - 4)\\)",
      "\\(y = -(x - 2)(x + 4)\\)",
      "\\(y = -(x - 2)(x - 4)\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "아래로 볼록이므로 선행 계수 음수 (a = -1). 절편 -2와 4를 사용합니다.",
        "workingOut": "y = -1 \\cdot (x - (-2))(x - 4) = -(x + 2)(x - 4)",
        "graphData": null
      }
    ]
  },

  // ── QUESTION 6d ──
  {
    "id": "y11a-3d-q6d",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Quadratic functions — factoring and the graph",
    "question": "The parabola is concave down and has \\( x \\)-intercepts at \\(-6\\) and \\(-1\\). What is the equation in factored form?",
    "opts": [
      "\\(y = -(x + 6)(x + 1)\\)",
      "\\(y = (x + 6)(x + 1)\\)",
      "\\(y = -(x - 6)(x - 1)\\)",
      "\\(y = -(x + 6)(x - 1)\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "아래로 볼록하므로 선행 계수 음수. 절편 -6과 -1을 사용합니다.",
        "workingOut": "y = -(x - (-6))(x - (-1)) = -(x + 6)(x + 1)",
        "graphData": null
      }
    ]
  },

  // ── QUESTION 7a (teacher_review — sketch/factor) ──
  {
    "id": "y11a-3d-q7a",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Quadratic functions — factoring and the graph",
    "question": "Use factoring to find the zeroes of the quadratic function \\( f(x) = x^2 - 16 \\). Hence sketch the graph of \\( y = f(x) \\), showing all intercepts and the coordinates of the vertex.",
    "a": "zeroes: x = -4, 4; vertex: (0, -16); y-intercept: (0, -16).",
    "solutionSteps": [
      {"explanation": "차이의 제곱 인수분해.", "workingOut": "f(x) = (x-4)(x+4)", "graphData": null},
      {"explanation": "영점: f(x) = 0 설정.", "workingOut": "(x-4)(x+4) = 0 \\implies x = 4 \\text{ 또는 } x = -4", "graphData": null},
      {"explanation": "꼭짓점: 대칭축이 x = 0이고, f(0) = -16.", "workingOut": "\\text{꼭짓점: } (0, -16)", "graphData": null}
    ]
  },

  // ── QUESTION 7b (teacher_review — sketch/factor) ──
  {
    "id": "y11a-3d-q7b",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Quadratic functions — factoring and the graph",
    "question": "Use factoring to find the zeroes of the quadratic function \\( f(x) = x^2 + 2x - 3 \\). Hence sketch the graph of \\( y = f(x) \\), showing all intercepts and the coordinates of the vertex.",
    "a": "zeroes: x = -3, 1; vertex: (-1, -4); y-intercept: (0, -3).",
    "solutionSteps": [
      {"explanation": "이차식 인수분해.", "workingOut": "f(x) = (x+3)(x-1)", "graphData": null},
      {"explanation": "영점: x = -3, x = 1.", "workingOut": "x+3=0 \\implies x=-3; \\quad x-1=0 \\implies x=1", "graphData": null},
      {"explanation": "대칭축: 영점의 중점.", "workingOut": "x = \\frac{-3+1}{2} = -1", "graphData": null},
      {"explanation": "꼭짓점: x = -1 대입.", "workingOut": "f(-1) = (-1+3)(-1-1) = -4 \\implies \\text{꼭짓점: } (-1, -4)", "graphData": null}
    ]
  },

  // ── QUESTION 7c (teacher_review — sketch/factor) ──
  {
    "id": "y11a-3d-q7c",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Quadratic functions — factoring and the graph",
    "question": "Use factoring to find the zeroes of the quadratic function \\( f(x) = x^2 + 2x - 8 \\). Hence sketch the graph of \\( y = f(x) \\), showing all intercepts and the coordinates of the vertex.",
    "a": "zeroes: x = -4, 2; vertex: (-1, -9); y-intercept: (0, -8).",
    "solutionSteps": [
      {"explanation": "이차식 인수분해.", "workingOut": "f(x) = (x+4)(x-2)", "graphData": null},
      {"explanation": "영점: x = -4, x = 2.", "workingOut": "x = -4 \\text{ 또는 } x = 2", "graphData": null},
      {"explanation": "꼭짓점 좌표 결정.", "workingOut": "x_v = \\frac{-4+2}{2} = -1 \\implies f(-1) = (-1+4)(-1-2) = -9 \\implies \\text{꼭짓점: } (-1, -9)", "graphData": null}
    ]
  },

  // ── QUESTION 8a (teacher_review — sketch/factor) ──
  {
    "id": "y11a-3d-q8a",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Quadratic functions — factoring and the graph",
    "question": "Use factoring to find the zeroes of the quadratic function \\( f(x) = 6x - x^2 \\). Hence sketch the graph of \\( y = f(x) \\), showing all intercepts and the coordinates of the vertex.",
    "a": "zeroes: x = 0, 6; vertex: (3, 9); y-intercept: (0, 0).",
    "solutionSteps": [
      {"explanation": "공통 인수 x를 묶어냅니다.", "workingOut": "f(x) = x(6-x)", "graphData": null},
      {"explanation": "영점: x = 0 또는 x = 6.", "workingOut": "x = 0 \\text{ 또는 } x = 6", "graphData": null},
      {"explanation": "꼭짓점 좌표 (아래로 볼록).", "workingOut": "x_v = \\frac{0+6}{2} = 3 \\implies f(3) = 3(6-3) = 9 \\implies \\text{꼭짓점: } (3, 9)", "graphData": null}
    ]
  },

  // ── QUESTION 8b (teacher_review — sketch/factor) ──
  {
    "id": "y11a-3d-q8b",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Quadratic functions — factoring and the graph",
    "question": "Use factoring to find the zeroes of the quadratic function \\( f(x) = -x^2 + 4x + 5 \\). Hence sketch the graph of \\( y = f(x) \\), showing all intercepts and the coordinates of the vertex.",
    "a": "zeroes: x = -1, 5; vertex: (2, 9); y-intercept: (0, 5).",
    "solutionSteps": [
      {"explanation": "음수 부호를 밖으로 빼고 인수분해합니다.", "workingOut": "f(x) = -(x^2-4x-5) = -(x-5)(x+1)", "graphData": null},
      {"explanation": "영점: x = 5 또는 x = -1.", "workingOut": "x = 5 \\text{ 또는 } x = -1", "graphData": null},
      {"explanation": "꼭짓점: 대칭축은 영점의 중점.", "workingOut": "x_v = \\frac{5+(-1)}{2} = 2 \\implies f(2) = -(2-5)(2+1) = 9 \\implies \\text{꼭짓점: } (2, 9)", "graphData": null}
    ]
  },

  // ── QUESTION 8c (teacher_review — sketch/factor) ──
  {
    "id": "y11a-3d-q8c",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Quadratic functions — factoring and the graph",
    "question": "Use factoring to find the zeroes of the quadratic function \\( f(x) = 12 - 4x - x^2 \\). Hence sketch the graph of \\( y = f(x) \\), showing all intercepts and the coordinates of the vertex.",
    "a": "zeroes: x = -6, 2; vertex: (-2, 16); y-intercept: (0, 12).",
    "solutionSteps": [
      {"explanation": "음수 부호를 밖으로 빼고 인수분해합니다.", "workingOut": "f(x) = -(x^2+4x-12) = -(x+6)(x-2)", "graphData": null},
      {"explanation": "영점: x = -6 또는 x = 2.", "workingOut": "x = -6 \\text{ 또는 } x = 2", "graphData": null},
      {"explanation": "꼭짓점: 영점의 중점 이용.", "workingOut": "x_v = \\frac{-6+2}{2} = -2 \\implies f(-2) = -(-2+6)(-2-2) = 16 \\implies \\text{꼭짓점: } (-2, 16)", "graphData": null}
    ]
  },

  // ── QUESTION 9a (teacher_review — sketch perfect square) ──
  {
    "id": "y11a-3d-q9a",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Quadratic functions — factoring and the graph",
    "question": "Sketch the parabola \\( y = x^2 - 4x + 4 \\) involving a perfect square. Find the vertex (the single x-intercept) and use symmetry to find a third point.",
    "a": "vertex: (2, 0); y-intercept: (0, 4); third point: (4, 4).",
    "solutionSteps": [
      {"explanation": "완전제곱식으로 인수분해.", "workingOut": "y = (x-2)^2", "graphData": null},
      {"explanation": "꼭짓점/x절편: y = 0 설정.", "workingOut": "(x-2)^2 = 0 \\implies x = 2 \\implies \\text{꼭짓점: } (2, 0)", "graphData": null},
      {"explanation": "y절편: x = 0 대입.", "workingOut": "y = (0-2)^2 = 4 \\implies (0, 4)", "graphData": null},
      {"explanation": "대칭점: x = 2에서 2만큼 오른쪽.", "workingOut": "x = 2+2 = 4 \\implies y = (4-2)^2 = 4 \\implies (4, 4)", "graphData": null}
    ]
  },

  // ── QUESTION 9b (teacher_review — sketch perfect square) ──
  {
    "id": "y11a-3d-q9b",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Quadratic functions — factoring and the graph",
    "question": "Sketch the parabola \\( y = -x^2 + 6x - 9 \\) involving a perfect square. Find the vertex (the single x-intercept) and use symmetry to find a third point.",
    "a": "vertex: (3, 0); y-intercept: (0, -9); third point: (6, -9).",
    "solutionSteps": [
      {"explanation": "음수 부호를 밖으로 빼고 완전제곱식으로 인수분해.", "workingOut": "y = -(x^2-6x+9) = -(x-3)^2", "graphData": null},
      {"explanation": "꼭짓점/x절편: y = 0 설정.", "workingOut": "y = 0 \\implies -(x-3)^2 = 0 \\implies x = 3 \\implies \\text{꼭짓점: } (3, 0)", "graphData": null},
      {"explanation": "y절편: x = 0 대입.", "workingOut": "y = -(0-3)^2 = -9", "graphData": null},
      {"explanation": "대칭점: x = 3에서 3만큼 오른쪽.", "workingOut": "x = 3+3 = 6 \\implies y = -(6-3)^2 = -9 \\implies (6, -9)", "graphData": null}
    ]
  },

  // ── QUESTION 10a (teacher_review — non-monic sketch) ──
  {
    "id": "y11a-3d-q10a",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Quadratic functions — factoring and the graph",
    "question": "Use factoring to sketch the graph of the non-monic quadratic function \\( y = 2x^2 + 9x + 4 \\), clearly indicating the vertex and the intercepts with the axes.",
    "a": "x-intercepts: -0.5, -4; y-intercept: 4; vertex: (-2.25, -6.125).",
    "solutionSteps": [
      {"explanation": "중간항 분리로 인수분해.", "workingOut": "2x^2+8x+x+4 = 2x(x+4)+1(x+4) = (2x+1)(x+4)", "graphData": null},
      {"explanation": "x절편: 인수를 0으로 설정.", "workingOut": "x = -\\frac{1}{2} = -0.5 \\quad \\text{및} \\quad x = -4", "graphData": null},
      {"explanation": "y절편: x = 0 대입.", "workingOut": "x=0 \\implies y = 4", "graphData": null},
      {"explanation": "꼭짓점: 절편의 중점.", "workingOut": "x_v = \\frac{-0.5+(-4)}{2} = -2.25 \\\\\ny_v = 2(-2.25)^2+9(-2.25)+4 = -6.125", "graphData": null}
    ]
  },

  // ── QUESTION 10b (teacher_review) ──
  {
    "id": "y11a-3d-q10b",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Quadratic functions — factoring and the graph",
    "question": "Use factoring to sketch the graph of the non-monic quadratic function \\( y = 2x^2 + 3x - 5 \\), clearly indicating the vertex and the intercepts with the axes.",
    "a": "x-intercepts: 1, -2.5; y-intercept: -5; vertex: (-0.75, -6.125).",
    "solutionSteps": [
      {"explanation": "중간항 분리로 인수분해.", "workingOut": "2x^2+5x-2x-5 = x(2x+5)-1(2x+5) = (2x+5)(x-1)", "graphData": null},
      {"explanation": "영점 찾기.", "workingOut": "x = -\\frac{5}{2} = -2.5 \\quad \\text{또는} \\quad x = 1", "graphData": null},
      {"explanation": "꼭짓점 계산.", "workingOut": "x_v = \\frac{-2.5+1}{2} = -0.75 \\\\\ny_v = 2(-0.75)^2+3(-0.75)-5 = -6.125", "graphData": null}
    ]
  },

  // ── QUESTION 10c (teacher_review) ──
  {
    "id": "y11a-3d-q10c",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Quadratic functions — factoring and the graph",
    "question": "Use factoring to sketch the graph of the non-monic quadratic function \\( y = 3x^2 + 4x - 4 \\), clearly indicating the vertex and the intercepts with the axes.",
    "a": "x-intercepts: 2/3, -2; y-intercept: -4; vertex: (-2/3, -16/3).",
    "solutionSteps": [
      {"explanation": "중간항 분리로 인수분해.", "workingOut": "3x^2+6x-2x-4 = 3x(x+2)-2(x+2) = (3x-2)(x+2)", "graphData": null},
      {"explanation": "영점 찾기.", "workingOut": "x = \\frac{2}{3} \\quad \\text{또는} \\quad x = -2", "graphData": null},
      {"explanation": "꼭짓점 계산.", "workingOut": "x_v = \\frac{\\frac{2}{3}+(-2)}{2} = -\\frac{2}{3} \\\\\ny_v = 3\\left(-\\frac{2}{3}\\right)^2+4\\left(-\\frac{2}{3}\\right)-4 = -\\frac{16}{3}", "graphData": null}
    ]
  },

  // ── QUESTION 11a ──
  {
    "id": "y11a-3d-q11a",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Quadratic functions — factoring and the graph",
    "question": "The parabola is concave up, has \\( x \\)-intercepts at \\(-2\\) and \\(3\\), and a \\( y \\)-intercept at \\(-6\\). Find its equation in factored form.",
    "opts": [
      "\\(y = (x + 2)(x - 3)\\)",
      "\\(y = -(x + 2)(x - 3)\\)",
      "\\(y = (x - 2)(x + 3)\\)",
      "\\(y = 2(x + 2)(x - 3)\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "일반 인수 형태 설정: \\(y = a_0(x + 2)(x - 3)\\).",
        "workingOut": "y = a_0(x+2)(x-3)",
        "graphData": null
      },
      {
        "explanation": "y절편 \\((0, -6)\\) 대입으로 \\(a_0\\) 결정.",
        "workingOut": "-6 = a_0(0+2)(0-3) \\implies -6 = -6a_0 \\implies a_0 = 1",
        "graphData": null
      },
      {
        "explanation": "최종 방정식.",
        "workingOut": "y = (x+2)(x-3)",
        "graphData": null
      }
    ]
  },

  // ── QUESTION 11b ──
  {
    "id": "y11a-3d-q11b",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Quadratic functions — factoring and the graph",
    "question": "The parabola is concave down, has \\( x \\)-intercepts at \\(-4\\) and \\(2\\), and a \\( y \\)-intercept at \\(8\\). Find its equation in factored form.",
    "opts": [
      "\\(y = -(x + 4)(x - 2)\\)",
      "\\(y = (x + 4)(x - 2)\\)",
      "\\(y = -2(x + 4)(x - 2)\\)",
      "\\(y = -(x - 4)(x + 2)\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "일반 인수 형태 설정.",
        "workingOut": "y = a_0(x+4)(x-2)",
        "graphData": null
      },
      {
        "explanation": "y절편 \\((0, 8)\\)으로 \\(a_0\\) 결정.",
        "workingOut": "8 = a_0(0+4)(0-2) \\implies 8 = -8a_0 \\implies a_0 = -1",
        "graphData": null
      },
      {
        "explanation": "최종 방정식.",
        "workingOut": "y = -(x+4)(x-2)",
        "graphData": null
      }
    ]
  },

  // ── QUESTION 11c ──
  {
    "id": "y11a-3d-q11c",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Quadratic functions — factoring and the graph",
    "question": "The parabola is concave up, has \\( x \\)-intercepts at \\(-3\\) and \\(3\\), and a \\( y \\)-intercept at \\(-18\\). Find its equation in factored form.",
    "opts": [
      "\\(y = 2(x + 3)(x - 3)\\)",
      "\\(y = (x + 3)(x - 3)\\)",
      "\\(y = -2(x + 3)(x - 3)\\)",
      "\\(y = 3(x + 3)(x - 3)\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "대칭인 영점 \\(x = -3\\), \\(x = 3\\) 사용.",
        "workingOut": "y = a_0(x+3)(x-3)",
        "graphData": null
      },
      {
        "explanation": "y절편 \\((0, -18)\\)으로 \\(a_0\\) 결정.",
        "workingOut": "-18 = a_0(0+3)(0-3) \\implies -18 = -9a_0 \\implies a_0 = 2",
        "graphData": null
      },
      {
        "explanation": "최종 방정식.",
        "workingOut": "y = 2(x+3)(x-3)",
        "graphData": null
      }
    ]
  },

  // ── QUESTION 11d ──
  {
    "id": "y11a-3d-q11d",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Quadratic functions — factoring and the graph",
    "question": "The parabola is concave down, has \\( x \\)-intercepts at \\(-3\\) and \\(3\\), and a \\( y \\)-intercept at \\(3\\). Find its equation in factored form.",
    "opts": [
      "\\(y = -\\frac{1}{3}(x + 3)(x - 3)\\)",
      "\\(y = \\frac{1}{3}(x + 3)(x - 3)\\)",
      "\\(y = -(x + 3)(x - 3)\\)",
      "\\(y = -3(x + 3)(x - 3)\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "대칭 영점을 이용하여 이차식 설정.",
        "workingOut": "y = a_0(x+3)(x-3)",
        "graphData": null
      },
      {
        "explanation": "y절편 3에서 \\(x = 0\\) 대입.",
        "workingOut": "3 = a_0(0+3)(0-3) \\implies 3 = -9a_0 \\implies a_0 = -\\frac{1}{3}",
        "graphData": null
      },
      {
        "explanation": "최종 방정식.",
        "workingOut": "y = -\\frac{1}{3}(x+3)(x-3)",
        "graphData": null
      }
    ]
  },

  // ── QUESTION 12a ──
  {
    "id": "y11a-3d-q12a",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Quadratic functions — factoring and the graph",
    "question": "Find, in factored form, the equation of the parabola with \\( x \\)-intercepts at \\( x = 2, 4 \\) and \\( y \\)-intercept at \\( y = 16 \\).",
    "opts": [
      "\\(y = 2(x - 2)(x - 4)\\)",
      "\\(y = (x - 2)(x - 4)\\)",
      "\\(y = -2(x - 2)(x - 4)\\)",
      "\\(y = 4(x - 2)(x - 4)\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "인수 형태 설정.",
        "workingOut": "y = a_0(x-2)(x-4)",
        "graphData": null
      },
      {
        "explanation": "y절편 \\((0, 16)\\)으로 \\(a_0\\) 결정.",
        "workingOut": "16 = a_0(0-2)(0-4) \\implies 16 = 8a_0 \\implies a_0 = 2",
        "graphData": null
      },
      {
        "explanation": "최종 방정식.",
        "workingOut": "y = 2(x-2)(x-4)",
        "graphData": null
      }
    ]
  },

  // ── QUESTION 12b ──
  {
    "id": "y11a-3d-q12b",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Quadratic functions — factoring and the graph",
    "question": "Find, in factored form, the equation of the parabola with \\( x \\)-intercepts at \\( x = -3, 1 \\) and \\( y \\)-intercept at \\( y = 6 \\).",
    "opts": [
      "\\(y = -2(x + 3)(x - 1)\\)",
      "\\(y = 2(x + 3)(x - 1)\\)",
      "\\(y = (x + 3)(x - 1)\\)",
      "\\(y = -3(x + 3)(x - 1)\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "인수 형태 설정.",
        "workingOut": "y = a_0(x+3)(x-1)",
        "graphData": null
      },
      {
        "explanation": "점 \\((0, 6)\\) 대입.",
        "workingOut": "6 = a_0(0+3)(0-1) \\implies 6 = -3a_0 \\implies a_0 = -2",
        "graphData": null
      },
      {
        "explanation": "최종 방정식.",
        "workingOut": "y = -2(x+3)(x-1)",
        "graphData": null
      }
    ]
  },

  // ── QUESTION 12c ──
  {
    "id": "y11a-3d-q12c",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Quadratic functions — factoring and the graph",
    "question": "Find, in factored form, the equation of the parabola with \\( x \\)-intercepts at \\( x = -2, 4 \\) and \\( y \\)-intercept at \\( y = 16 \\).",
    "opts": [
      "\\(y = -2(x + 2)(x - 4)\\)",
      "\\(y = 2(x + 2)(x - 4)\\)",
      "\\(y = -(x + 2)(x - 4)\\)",
      "\\(y = -4(x + 2)(x - 4)\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "인수 형태 설정.",
        "workingOut": "y = a_0(x+2)(x-4)",
        "graphData": null
      },
      {
        "explanation": "y절편 16으로 \\(a_0\\) 결정.",
        "workingOut": "16 = a_0(0+2)(0-4) \\implies 16 = -8a_0 \\implies a_0 = -2",
        "graphData": null
      },
      {
        "explanation": "최종 방정식.",
        "workingOut": "y = -2(x+2)(x-4)",
        "graphData": null
      }
    ]
  },

  // ── QUESTION 12d ──
  {
    "id": "y11a-3d-q12d",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Quadratic functions — factoring and the graph",
    "question": "Find, in factored form, the equation of the parabola with \\( x \\)-intercepts at \\( x = -1, -3 \\) and \\( y \\)-intercept at \\( y = 6 \\).",
    "opts": [
      "\\(y = 2(x + 1)(x + 3)\\)",
      "\\(y = (x + 1)(x + 3)\\)",
      "\\(y = -2(x + 1)(x + 3)\\)",
      "\\(y = 3(x + 1)(x + 3)\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "영점을 인수로 변환.",
        "workingOut": "y = a_0(x+1)(x+3)",
        "graphData": null
      },
      {
        "explanation": "선행 계수 결정.",
        "workingOut": "6 = a_0(0+1)(0+3) \\implies 6 = 3a_0 \\implies a_0 = 2",
        "graphData": null
      },
      {
        "explanation": "최종 방정식.",
        "workingOut": "y = 2(x+1)(x+3)",
        "graphData": null
      }
    ]
  },

  // ── QUESTION 13a (teacher_review — sketch) ──
  {
    "id": "y11a-3d-q13a",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Quadratic functions — factoring and the graph",
    "question": "Sketch on a single coordinate plane the four parabolas corresponding to \\( y = a(x - 2)(x - 4) \\) for: \\( a = 2 \\), \\( a = 1 \\), \\( a = -1 \\), \\( a = -2 \\).",
    "a": "Four parabolas passing through (2, 0) and (4, 0), two opening upwards (a = 1, 2) and two opening downwards (a = -1, -2).",
    "solutionSteps": [
      {"explanation": "네 방정식을 그립니다.", "workingOut": "y = 2(x-2)(x-4), \\ y = (x-2)(x-4), \\ y = -(x-2)(x-4), \\ y = -2(x-2)(x-4)", "graphData": null},
      {"explanation": "모든 포물선이 x = 2와 x = 4에서 x축과 만납니다.", "workingOut": "", "graphData": null}
    ]
  },

  // ── QUESTION 13b ──
  {
    "id": "y11a-3d-q13b",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Quadratic functions — factoring and the graph",
    "question": "Identify the two points through which all four parabolas from \\( y = a(x - 2)(x - 4) \\) pass, regardless of \\( a \\).",
    "opts": [
      "\\((2, 0)\\) and \\((4, 0)\\)",
      "\\((0, 2)\\) and \\((0, 4)\\)",
      "\\((2, 4)\\) and \\((4, 2)\\)",
      "\\((0, 8)\\) only"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "\\(y = a(x-2)(x-4)\\) 형태에서 x = 2 또는 x = 4이면 a에 관계없이 y = 0입니다.",
        "workingOut": "x = 2 \\implies y = 0 \\quad \\text{및} \\quad x = 4 \\implies y = 0",
        "graphData": null
      }
    ]
  },

  // ── QUESTION 14a (teacher_review — sketch) ──
  {
    "id": "y11a-3d-q14a",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Quadratic functions — factoring and the graph",
    "question": "Use factoring to find the zeroes of the quadratic function \\( y = 3x^2 - 12 \\). Sketch a graph of the function, clearly indicating all intercepts and the coordinates of the vertex.",
    "a": "zeroes: -2, 2; y-intercept: -12; vertex: (0, -12).",
    "solutionSteps": [
      {"explanation": "공통 인수 3을 묶고 차이의 제곱 인수분해.", "workingOut": "y = 3(x^2-4) = 3(x-2)(x+2)", "graphData": null},
      {"explanation": "영점: y = 0 설정.", "workingOut": "x = 2 \\text{ 또는 } x = -2", "graphData": null},
      {"explanation": "꼭짓점: 선형 항이 없으므로 대칭축은 x = 0.", "workingOut": "x_v = 0 \\implies y_v = -12 \\implies \\text{꼭짓점: } (0, -12)", "graphData": null}
    ]
  },

  // ── QUESTION 14b (teacher_review — sketch) ──
  {
    "id": "y11a-3d-q14b",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Quadratic functions — factoring and the graph",
    "question": "Use factoring to find the zeroes of the quadratic function \\( y = 2x^2 + x - 3 \\). Sketch a graph of the function, clearly indicating all intercepts and the coordinates of the vertex.",
    "a": "zeroes: 1, -1.5; y-intercept: -3; vertex: (-0.25, -3.125).",
    "solutionSteps": [
      {"explanation": "중간항 분리로 비수적 이차식 인수분해.", "workingOut": "2x^2+3x-2x-3 = x(2x+3)-1(2x+3) = (2x+3)(x-1)", "graphData": null},
      {"explanation": "영점: y = 0 설정.", "workingOut": "x = -\\frac{3}{2} = -1.5 \\quad \\text{또는} \\quad x = 1", "graphData": null},
      {"explanation": "꼭짓점 좌표 결정.", "workingOut": "x_v = \\frac{-1.5+1}{2} = -0.25 \\\\\ny_v = 2(-0.25)^2+(-0.25)-3 = -3.125", "graphData": null}
    ]
  },

  // ── QUESTION 14c (teacher_review — sketch) ──
  {
    "id": "y11a-3d-q14c",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Quadratic functions — factoring and the graph",
    "question": "Use factoring to find the zeroes of the quadratic function \\( y = 5x - 2 - 3x^2 \\). Sketch a graph of the function, clearly indicating all intercepts and the coordinates of the vertex.",
    "a": "zeroes: 1, 2/3; y-intercept: -2; vertex: (5/6, 1/12).",
    "solutionSteps": [
      {"explanation": "정리하고 음수 부호 묶어내기.", "workingOut": "y = -(3x^2-5x+2)", "graphData": null},
      {"explanation": "중간항 분리로 인수분해.", "workingOut": "y = -(3x^2-3x-2x+2) = -[3x(x-1)-2(x-1)] = -(3x-2)(x-1)", "graphData": null},
      {"explanation": "영점: y = 0 설정.", "workingOut": "x = \\frac{2}{3} \\quad \\text{및} \\quad x = 1", "graphData": null},
      {"explanation": "꼭짓점 좌표 계산.", "workingOut": "x_v = \\frac{\\frac{2}{3}+1}{2} = \\frac{5}{6} \\implies y_v = \\frac{1}{12}", "graphData": null}
    ]
  },

  // ── QUESTION 15a ──
  {
    "id": "y11a-3d-q15a",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Quadratic functions — factoring and the graph",
    "question": "The general form with zeroes \\( x = 3 \\) and \\( x = 9 \\) is \\( y = a(x-3)(x-9) \\). Find the equation where the coefficient of \\( x^2 \\) is 2.",
    "opts": [
      "\\(y = 2(x - 3)(x - 9)\\)",
      "\\(y = (x - 3)(x - 9)\\)",
      "\\(y = -2(x - 3)(x - 9)\\)",
      "\\(y = 2(x + 3)(x + 9)\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "\\(y = a(x-3)(x-9) = a(x^2-12x+27)\\)에서 x² 계수가 a입니다.",
        "workingOut": "a = 2 \\implies y = 2(x-3)(x-9)",
        "graphData": null
      }
    ]
  },

  // ── QUESTION 15b ──
  {
    "id": "y11a-3d-q15b",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Quadratic functions — factoring and the graph",
    "question": "The general form with zeroes \\( x = 3 \\) and \\( x = 9 \\) is \\( y = a(x-3)(x-9) \\). Find the equation where the \\( y \\)-intercept is \\(-54\\).",
    "opts": [
      "\\(y = -2(x - 3)(x - 9)\\)",
      "\\(y = 2(x - 3)(x - 9)\\)",
      "\\(y = -6(x - 3)(x - 9)\\)",
      "\\(y = -(x - 3)(x - 9)\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "x = 0, y = -54를 대입하여 a를 구합니다.",
        "workingOut": "-54 = a(0-3)(0-9) \\implies -54 = 27a \\implies a = -2",
        "graphData": null
      },
      {
        "explanation": "최종 방정식.",
        "workingOut": "y = -2(x-3)(x-9)",
        "graphData": null
      }
    ]
  },

  // ── QUESTION 15c ──
  {
    "id": "y11a-3d-q15c",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Quadratic functions — factoring and the graph",
    "question": "The general form with zeroes \\( x = 3 \\) and \\( x = 9 \\) is \\( y = a(x-3)(x-9) \\). Find the equation where the vertex is \\( (6, -18) \\).",
    "opts": [
      "\\(y = 2(x - 3)(x - 9)\\)",
      "\\(y = -2(x - 3)(x - 9)\\)",
      "\\(y = (x - 3)(x - 9)\\)",
      "\\(y = -18(x - 3)(x - 9)\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "꼭짓점 \\((6, -18)\\)을 대입.",
        "workingOut": "-18 = a(6-3)(6-9) \\implies -18 = -9a \\implies a = 2",
        "graphData": null
      },
      {
        "explanation": "최종 방정식.",
        "workingOut": "y = 2(x-3)(x-9)",
        "graphData": null
      }
    ]
  },

  // ── QUESTION 15d ──
  {
    "id": "y11a-3d-q15d",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Quadratic functions — factoring and the graph",
    "question": "The general form with zeroes \\( x = 3 \\) and \\( x = 9 \\) is \\( y = a(x-3)(x-9) \\). Find the equation which passes through \\( (2, -14) \\).",
    "opts": [
      "\\(y = -2(x - 3)(x - 9)\\)",
      "\\(y = 2(x - 3)(x - 9)\\)",
      "\\(y = -(x - 3)(x - 9)\\)",
      "\\(y = -7(x - 3)(x - 9)\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "점 \\((2, -14)\\)를 일반 형태에 대입.",
        "workingOut": "-14 = a(2-3)(2-9) \\implies -14 = 7a \\implies a = -2",
        "graphData": null
      },
      {
        "explanation": "최종 방정식.",
        "workingOut": "y = -2(x-3)(x-9)",
        "graphData": null
      }
    ]
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
        "type": "multiple_choice",
        "question": "a) Factor \\( f(x) = x^2 - 4x - 5 \\) and find the equation of the axis of symmetry.",
        "opts": [
          "\\(x = 2\\)",
          "\\(x = -2\\)",
          "\\(x = 4\\)",
          "\\(x = 5\\)"
        ],
        "a": 0
      },
      {
        "id": "y11a-3d-q16bi",
        "type": "multiple_choice",
        "question": "b) (i) Both \\( f(2+h) \\) and \\( f(2-h) \\) simplify to the same expression. What is that expression?",
        "opts": [
          "\\(h^2 - 9\\)",
          "\\(h^2 + 9\\)",
          "\\(h^2 - 5\\)",
          "\\(4h^2 - 9\\)"
        ],
        "a": 0
      },
      {
        "id": "y11a-3d-q16bii",
        "type": "multiple_choice",
        "question": "b) (ii) What geometric feature does \\( f(2+h) = f(2-h) \\) demonstrate?",
        "opts": [
          "It demonstrates that the parabola is symmetrical about the vertical line \\( x = 2 \\).",
          "It demonstrates that the parabola is concave up.",
          "It demonstrates that the parabola has two distinct real zeroes.",
          "It demonstrates that the y-intercept is at \\( y = -5 \\)."
        ],
        "a": 0
      }
    ],
    "solutionSteps": [
      {
        "explanation": "이차식 인수분해.",
        "workingOut": "f(x) = (x-5)(x+1) \\implies \\text{영점: } 5, -1",
        "graphData": null
      },
      {
        "explanation": "대칭축: 영점의 중점.",
        "workingOut": "x = \\frac{5+(-1)}{2} = 2",
        "graphData": null
      },
      {
        "explanation": "b(i): \\(f(2+h)\\) 전개.",
        "workingOut": "f(2+h) = (2+h)^2-4(2+h)-5 = 4+4h+h^2-8-4h-5 = h^2-9",
        "graphData": null
      },
      {
        "explanation": "b(i): \\(f(2-h)\\) 전개.",
        "workingOut": "f(2-h) = (2-h)^2-4(2-h)-5 = 4-4h+h^2-8+4h-5 = h^2-9",
        "graphData": null
      },
      {
        "explanation": "b(ii): \\(f(2+h) = f(2-h)\\)이므로 x = 2에 대한 선대칭 증명.",
        "workingOut": "\\text{x = 2에 대하여 선대칭}",
        "graphData": null
      }
    ]
  }
];
