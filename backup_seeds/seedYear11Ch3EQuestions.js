export const Y11_CH3E_QUESTIONS = [
  // ── QUESTION 1 ──
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
        "a": 0
      },
      {
        "id": "y11a-3e-q1a2",
        "type": "multiple_choice",
        "question": "a) (ii) What is the \\( y \\)-intercept of \\( y = (x - 3)^2 - 4 \\)?",
        "opts": [
          "\\(5\\)",
          "\\(-4\\)",
          "\\(9\\)",
          "\\(-5\\)"
        ],
        "a": 0
      },
      {
        "id": "y11a-3e-q1a3",
        "type": "multiple_choice",
        "question": "a) (iii) What is the vertex of \\( y = (x - 3)^2 - 4 \\)?",
        "opts": [
          "\\(V(3, -4)\\)",
          "\\(V(-3, -4)\\)",
          "\\(V(3, 4)\\)",
          "\\(V(0, -4)\\)"
        ],
        "a": 0
      },
      {
        "id": "y11a-3e-q1a4",
        "type": "multiple_choice",
        "question": "a) (iv) What are the \\( x \\)-intercepts of \\( y = (x - 3)^2 - 4 \\)?",
        "opts": [
          "\\(x = 1\\) and \\(x = 5\\)",
          "\\(x = -1\\) and \\(x = 7\\)",
          "\\(x = 3\\) and \\(x = -3\\)",
          "\\(x = 0\\) and \\(x = 3\\)"
        ],
        "a": 0
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
    "solutionSteps": [
      {
        "explanation": "선행 계수의 부호로 볼록 방향 결정.",
        "workingOut": "y = 1(x-3)^2-4 \\implies a = 1 > 0 \\implies \\text{위로 볼록}",
        "graphData": null
      },
      {
        "explanation": "y절편: x = 0 대입.",
        "workingOut": "y = (0-3)^2-4 = 9-4 = 5 \\implies (0, 5)",
        "graphData": null
      },
      {
        "explanation": "꼭짓점 형태 \\(y = a(x-h)^2 + k\\)에서 꼭짓점은 \\((h, k)\\).",
        "workingOut": "\\text{꼭짓점: } V(3, -4), \\quad \\text{대칭축: } x = 3",
        "graphData": null
      },
      {
        "explanation": "꼭짓점이 x축 아래이고 위로 볼록이므로 x절편 존재. y = 0 설정.",
        "workingOut": "0 = (x-3)^2-4 \\implies (x-3)^2 = 4 \\implies x-3 = \\pm 2 \\implies x = 1, 5",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-3, 8, 9, -5],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-2.5,0], [8.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-4.5], [0,7.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [8.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 7.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return Math.pow(x-3, 2) - 4; }], {strokeColor: '#4f46e5', strokeWidth: 1.5});\nboard.create('point', [3, -4], {name: 'V(3,-4)', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [0, 5], {name: '(0,5)', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [1, 0], {name: '1', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [5, 0], {name: '5', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('line', [[3,-5], [3,8]], {strokeColor: '#64748b', dash: 2, strokeWidth: 1});\nboard.unsuspendUpdate();"
      }
    }
  },

  // ── QUESTION 2 ──
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
        "a": 0
      },
      {
        "id": "y11a-3e-q2a2",
        "type": "multiple_choice",
        "question": "a) (ii) What is the \\( y \\)-intercept of \\( y = -(x - 2)^2 + 4 \\)?",
        "opts": [
          "\\(0\\)",
          "\\(4\\)",
          "\\(-4\\)",
          "\\(8\\)"
        ],
        "a": 0
      },
      {
        "id": "y11a-3e-q2a3",
        "type": "multiple_choice",
        "question": "a) (iii) What is the vertex of \\( y = -(x - 2)^2 + 4 \\)?",
        "opts": [
          "\\(V(2, 4)\\)",
          "\\(V(-2, 4)\\)",
          "\\(V(2, -4)\\)",
          "\\(V(0, 4)\\)"
        ],
        "a": 0
      },
      {
        "id": "y11a-3e-q2a4",
        "type": "multiple_choice",
        "question": "a) (iv) What are the \\( x \\)-intercepts of \\( y = -(x - 2)^2 + 4 \\)?",
        "opts": [
          "\\(x = 0\\) and \\(x = 4\\)",
          "\\(x = -2\\) and \\(x = 6\\)",
          "\\(x = 1\\) and \\(x = 3\\)",
          "\\(x = 2\\) and \\(x = 4\\)"
        ],
        "a": 0
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
    "solutionSteps": [
      {
        "explanation": "괄호 앞의 음수 부호를 확인합니다.",
        "workingOut": "y = -1(x-2)^2+4 \\implies a = -1 < 0 \\implies \\text{아래로 볼록}",
        "graphData": null
      },
      {
        "explanation": "y절편: x = 0 대입.",
        "workingOut": "y = -(0-2)^2+4 = -4+4 = 0 \\implies (0, 0)",
        "graphData": null
      },
      {
        "explanation": "꼭짓점: \\(y = -(x-h)^2+k\\) 형태에서 \\((h, k)\\) 읽기.",
        "workingOut": "\\text{꼭짓점: } V(2, 4), \\quad \\text{대칭축: } x = 2",
        "graphData": null
      },
      {
        "explanation": "꼭짓점이 x축 위이고 아래로 볼록이므로 x절편 존재. y = 0 설정.",
        "workingOut": "0 = -(x-2)^2+4 \\implies (x-2)^2 = 4 \\implies x = 0, 4",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-3, 6, 7, -2],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-2.5,0], [6.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-1.5], [0,5.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [6.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 5.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return -Math.pow(x-2, 2) + 4; }], {strokeColor: '#4f46e5', strokeWidth: 1.5});\nboard.create('point', [2, 4], {name: 'V(2,4)', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [0, 0], {name: 'O', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [4, 0], {name: '4', visible: true, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('line', [[2,-2], [2,6]], {strokeColor: '#64748b', dash: 2, strokeWidth: 1});\nboard.unsuspendUpdate();"
      }
    }
  },

  // ── QUESTION 3a ──
  {
    "id": "y11a-3e-q3a",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Completing the square and the graph",
    "question": "Complete the square in the monic quadratic function \\( f(x) = x^2 - 6x + 10 \\).",
    "opts": [
      "\\((x - 3)^2 + 1\\)",
      "\\((x - 3)^2 - 1\\)",
      "\\((x + 3)^2 + 1\\)",
      "\\((x - 6)^2 + 10\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "x 항 계수의 절반 \\(-6/2 = -3\\)을 구하고 제곱하면 9.",
        "workingOut": "f(x) = (x^2-6x+9)+10-9",
        "graphData": null
      },
      {
        "explanation": "완전제곱식으로 정리.",
        "workingOut": "f(x) = (x-3)^2+1",
        "graphData": null
      }
    ]
  },

  // ── QUESTION 3b ──
  {
    "id": "y11a-3e-q3b",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Completing the square and the graph",
    "question": "Complete the square in the monic quadratic function \\( f(x) = x^2 + 8x + 18 \\).",
    "opts": [
      "\\((x + 4)^2 + 2\\)",
      "\\((x + 4)^2 - 2\\)",
      "\\((x - 4)^2 + 2\\)",
      "\\((x + 8)^2 + 18\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "x 항 계수의 절반 \\(8/2 = 4\\)을 구하고 제곱하면 16.",
        "workingOut": "f(x) = (x^2+8x+16)+18-16",
        "graphData": null
      },
      {
        "explanation": "완전제곱식으로 정리.",
        "workingOut": "f(x) = (x+4)^2+2",
        "graphData": null
      }
    ]
  },

  // ── QUESTION 3c ──
  {
    "id": "y11a-3e-q3c",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Completing the square and the graph",
    "question": "Complete the square in the monic quadratic function \\( f(x) = x^2 - 4x + 9 \\).",
    "opts": [
      "\\((x - 2)^2 + 5\\)",
      "\\((x - 2)^2 - 5\\)",
      "\\((x + 2)^2 + 5\\)",
      "\\((x - 4)^2 + 9\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "x 항 계수의 절반 \\(-4/2 = -2\\)을 구하고 제곱하면 4.",
        "workingOut": "f(x) = (x^2-4x+4)+9-4",
        "graphData": null
      },
      {
        "explanation": "꼭짓점 형태로 묶기.",
        "workingOut": "f(x) = (x-2)^2+5",
        "graphData": null
      }
    ]
  },

  // ── QUESTION 3d ──
  {
    "id": "y11a-3e-q3d",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Completing the square and the graph",
    "question": "Complete the square in the monic quadratic function \\( f(x) = x^2 - 12x + 5 \\).",
    "opts": [
      "\\((x - 6)^2 - 31\\)",
      "\\((x - 6)^2 + 31\\)",
      "\\((x + 6)^2 - 31\\)",
      "\\((x - 12)^2 + 5\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "x 항 계수의 절반의 제곱: \\((-12/2)^2 = 36\\).",
        "workingOut": "f(x) = (x^2-12x+36)+5-36",
        "graphData": null
      },
      {
        "explanation": "완전제곱식으로 정리.",
        "workingOut": "f(x) = (x-6)^2-31",
        "graphData": null
      }
    ]
  },

  // ── QUESTION 3e ──
  {
    "id": "y11a-3e-q3e",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Completing the square and the graph",
    "question": "Complete the square in the monic quadratic function \\( f(x) = x^2 + 4x - 3 \\).",
    "opts": [
      "\\((x + 2)^2 - 7\\)",
      "\\((x + 2)^2 + 7\\)",
      "\\((x - 2)^2 - 7\\)",
      "\\((x + 4)^2 - 3\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "x 항 계수의 절반의 제곱: \\((4/2)^2 = 4\\).",
        "workingOut": "f(x) = (x^2+4x+4)-3-4",
        "graphData": null
      },
      {
        "explanation": "꼭짓점 형태로 묶기.",
        "workingOut": "f(x) = (x+2)^2-7",
        "graphData": null
      }
    ]
  },

  // ── QUESTION 3f ──
  {
    "id": "y11a-3e-q3f",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Completing the square and the graph",
    "question": "Complete the square in the monic quadratic function \\( f(x) = x^2 + 6x - 2 \\).",
    "opts": [
      "\\((x + 3)^2 - 11\\)",
      "\\((x + 3)^2 + 11\\)",
      "\\((x - 3)^2 - 11\\)",
      "\\((x + 6)^2 - 2\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "6의 절반은 3, 제곱은 9.",
        "workingOut": "f(x) = (x^2+6x+9)-2-9",
        "graphData": null
      },
      {
        "explanation": "항 합치기.",
        "workingOut": "f(x) = (x+3)^2-11",
        "graphData": null
      }
    ]
  },

  // ── QUESTION 4 (teacher_review — sketch with surds) ──
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
    ],
    "solutionSteps": [
      {"explanation": "a) 꼭짓점: \\(V(-2, -5)\\). y절편: \\(y = (0+2)^2-5 = -1\\). x절편: \\((x+2)^2=5 \\implies x = -2 \\pm \\sqrt{5}\\).", "workingOut": "", "graphData": null},
      {"explanation": "b) 꼭짓점: \\(V(3, -6)\\). y절편: \\(y = (0-3)^2-6 = 3\\). x절편: \\((x-3)^2=6 \\implies x = 3 \\pm \\sqrt{6}\\).", "workingOut": "", "graphData": null},
      {"explanation": "c) 꼭짓점: \\(V(2, -3)\\). y절편: \\(y = (0-2)^2-3 = 1\\). x절편: \\((x-2)^2=3 \\implies x = 2 \\pm \\sqrt{3}\\).", "workingOut": "", "graphData": null}
    ]
  },

  // ── QUESTION 5a (teacher_review — sketch) ──
  {
    "id": "y11a-3e-q5a",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Completing the square and the graph",
    "question": "Complete the square for \\( y = x^2 - 4x \\). Sketch the graph of the function, showing the vertex and the intercepts with the axes.",
    "a": "vertex: (2, -4); x-intercepts: 0, 4; y-intercept: 0.",
    "solutionSteps": [
      {"explanation": "완전제곱식 완성.", "workingOut": "y = (x^2-4x+4)-4 = (x-2)^2-4", "graphData": null},
      {"explanation": "꼭짓점: \\((2, -4)\\).", "workingOut": "\\text{꼭짓점: } (2, -4)", "graphData": null},
      {"explanation": "x절편: \\(x^2-4x = 0 \\implies x(x-4) = 0 \\implies x = 0, 4\\).", "workingOut": "\\text{절편: } (0, 0), (4, 0)", "graphData": null}
    ]
  },

  // ── QUESTION 5b (teacher_review) ──
  {
    "id": "y11a-3e-q5b",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Completing the square and the graph",
    "question": "Complete the square for \\( y = x^2 - 6x + 5 \\). Sketch the graph, showing the vertex and the intercepts.",
    "a": "vertex: (3, -4); x-intercepts: 1, 5; y-intercept: 5.",
    "solutionSteps": [
      {"explanation": "완전제곱식 완성: -6의 절반은 -3, 제곱은 9.", "workingOut": "y = (x^2-6x+9)+5-9 = (x-3)^2-4", "graphData": null},
      {"explanation": "꼭짓점: \\((3, -4)\\).", "workingOut": "", "graphData": null},
      {"explanation": "x절편: 인수분해.", "workingOut": "(x-1)(x-5) = 0 \\implies x = 1, 5", "graphData": null}
    ]
  },

  // ── QUESTION 5c (teacher_review) ──
  {
    "id": "y11a-3e-q5c",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Completing the square and the graph",
    "question": "Complete the square for \\( y = x^2 - 4x - 1 \\). Sketch the graph, showing the vertex and intercepts.",
    "a": "vertex: (2, -5); x-intercepts: 2 ± √5; y-intercept: -1.",
    "solutionSteps": [
      {"explanation": "완전제곱식 완성: 4 더하고 빼기.", "workingOut": "y = (x^2-4x+4)-1-4 = (x-2)^2-5", "graphData": null},
      {"explanation": "꼭짓점: \\((2, -5)\\).", "workingOut": "", "graphData": null},
      {"explanation": "x절편: \\((x-2)^2-5=0\\).", "workingOut": "(x-2)^2 = 5 \\implies x = 2 \\pm \\sqrt{5}", "graphData": null}
    ]
  },

  // ── QUESTION 5d (teacher_review) ──
  {
    "id": "y11a-3e-q5d",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Completing the square and the graph",
    "question": "Complete the square for \\( y = x^2 + 6x + 2 \\). Sketch the graph, showing the vertex and intercepts.",
    "a": "vertex: (-3, -7); x-intercepts: -3 ± √7; y-intercept: 2.",
    "solutionSteps": [
      {"explanation": "6의 절반은 3, 제곱은 9.", "workingOut": "y = (x^2+6x+9)+2-9 = (x+3)^2-7", "graphData": null},
      {"explanation": "꼭짓점: \\((-3, -7)\\), y절편: \\((0, 2)\\).", "workingOut": "", "graphData": null},
      {"explanation": "x절편: \\((x+3)^2=7 \\implies x = -3 \\pm \\sqrt{7}\\).", "workingOut": "", "graphData": null}
    ]
  },

  // ── QUESTION 5e (teacher_review) ──
  {
    "id": "y11a-3e-q5e",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Completing the square and the graph",
    "question": "Complete the square for \\( y = x^2 + 4x + 5 \\). Sketch the graph, showing the vertex and intercepts.",
    "a": "vertex: (-2, 1); no x-intercepts; y-intercept: 5.",
    "solutionSteps": [
      {"explanation": "4의 절반은 2, 제곱은 4.", "workingOut": "y = (x^2+4x+4)+5-4 = (x+2)^2+1", "graphData": null},
      {"explanation": "꼭짓점: \\((-2, 1)\\). 꼭짓점 y값이 양수이고 위로 볼록이므로 x절편 없음.", "workingOut": "", "graphData": null}
    ]
  },

  // ── QUESTION 5f (teacher_review) ──
  {
    "id": "y11a-3e-q5f",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Completing the square and the graph",
    "question": "Complete the square for \\( y = x^2 - 5x + 7 \\). Sketch the graph, showing the vertex and intercepts.",
    "a": "vertex: (2.5, 0.75); no x-intercepts; y-intercept: 7.",
    "solutionSteps": [
      {"explanation": "-5의 절반은 -2.5, 제곱은 6.25.", "workingOut": "y = (x^2-5x+6.25)+7-6.25 = (x-2.5)^2+0.75", "graphData": null},
      {"explanation": "꼭짓점: \\((2.5, 0.75)\\). \\(y \\geq 0.75\\)이므로 x절편 없음.", "workingOut": "", "graphData": null}
    ]
  },

  // ── QUESTION 6a ──
  {
    "id": "y11a-3e-q6a",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Completing the square and the graph",
    "question": "Find the zeroes of \\( f(x) = x^2 - 6x + 8 \\) by completing the square.",
    "opts": [
      "\\(x = 2, 4\\)",
      "\\(x = -2, -4\\)",
      "\\(x = 3 \\pm \\sqrt{2}\\)",
      "\\(x = 1, 8\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "완전제곱식 완성하고 0으로 놓습니다.",
        "workingOut": "x^2-6x+9-1 = 0 \\implies (x-3)^2 = 1",
        "graphData": null
      },
      {
        "explanation": "양변에 제곱근을 취하고 풀기.",
        "workingOut": "x-3 = \\pm 1 \\implies x = 2, 4",
        "graphData": null
      }
    ]
  },

  // ── QUESTION 6b ──
  {
    "id": "y11a-3e-q6b",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Completing the square and the graph",
    "question": "Find the zeroes of \\( f(x) = x^2 + 4x - 5 \\) by completing the square.",
    "opts": [
      "\\(x = -5, 1\\)",
      "\\(x = 5, -1\\)",
      "\\(x = -2 \\pm 3\\)",
      "\\(x = 1, 5\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "완전제곱식 완성하고 풀기.",
        "workingOut": "(x^2+4x+4)-9 = 0 \\implies (x+2)^2 = 9",
        "graphData": null
      },
      {
        "explanation": "근 구하기.",
        "workingOut": "x+2 = \\pm 3 \\implies x = -5, 1",
        "graphData": null
      }
    ]
  },

  // ── QUESTION 6c ──
  {
    "id": "y11a-3e-q6c",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Completing the square and the graph",
    "question": "Find the zeroes of \\( f(x) = x^2 - 3x - 4 \\) by completing the square.",
    "opts": [
      "\\(x = -1, 4\\)",
      "\\(x = 1, -4\\)",
      "\\(x = 3 \\pm 2.5\\)",
      "\\(x = -3, 4\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "완전제곱식 완성.",
        "workingOut": "(x-1.5)^2-6.25 = 0 \\implies (x-1.5)^2 = 6.25",
        "graphData": null
      },
      {
        "explanation": "제곱근 취하고 풀기.",
        "workingOut": "x-1.5 = \\pm 2.5 \\implies x = -1, 4",
        "graphData": null
      }
    ]
  },

  // ── QUESTION 7a ──
  {
    "id": "y11a-3e-q7a",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Completing the square and the graph",
    "question": "Complete the square of \\( f(x) = x^2 - 6x + 4 \\) to find its zeroes.",
    "opts": [
      "\\(x = 3 \\pm \\sqrt{5}\\)",
      "\\(x = 3 \\pm \\sqrt{4}\\)",
      "\\(x = -3 \\pm \\sqrt{5}\\)",
      "\\(x = 6 \\pm \\sqrt{5}\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "9를 더하고 빼서 완전제곱식 완성.",
        "workingOut": "(x^2-6x+9)-5 = 0 \\implies (x-3)^2 = 5",
        "graphData": null
      },
      {
        "explanation": "x에 대해 풀기.",
        "workingOut": "x-3 = \\pm \\sqrt{5} \\implies x = 3 \\pm \\sqrt{5}",
        "graphData": null
      }
    ]
  },

  // ── QUESTION 7b ──
  {
    "id": "y11a-3e-q7b",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Completing the square and the graph",
    "question": "Complete the square of \\( f(x) = 2x^2 - 8x - 2 \\) to find its zeroes.",
    "opts": [
      "\\(x = 2 \\pm \\sqrt{5}\\)",
      "\\(x = 2 \\pm \\sqrt{4}\\)",
      "\\(x = -2 \\pm \\sqrt{5}\\)",
      "\\(x = 4 \\pm \\sqrt{5}\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "먼저 2로 나누고 완전제곱식 완성.",
        "workingOut": "2(x^2-4x-1) = 0 \\implies 2[(x-2)^2-5] = 0",
        "graphData": null
      },
      {
        "explanation": "x에 대해 풀기.",
        "workingOut": "(x-2)^2 = 5 \\implies x = 2 \\pm \\sqrt{5}",
        "graphData": null
      }
    ]
  },

  // ── QUESTION 7c ──
  {
    "id": "y11a-3e-q7c",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Completing the square and the graph",
    "question": "Complete the square of \\( f(x) = -x^2 - 4x + 2 \\) to find its zeroes.",
    "opts": [
      "\\(x = -2 \\pm \\sqrt{6}\\)",
      "\\(x = 2 \\pm \\sqrt{6}\\)",
      "\\(x = -2 \\pm \\sqrt{2}\\)",
      "\\(x = -4 \\pm \\sqrt{6}\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "-1을 묶고 완전제곱식 완성.",
        "workingOut": "-(x^2+4x-2) = 0 \\implies -[(x+2)^2-6] = 0",
        "graphData": null
      },
      {
        "explanation": "근 구하기.",
        "workingOut": "(x+2)^2 = 6 \\implies x = -2 \\pm \\sqrt{6}",
        "graphData": null
      }
    ]
  },

  // ── QUESTION 8a ──
  {
    "id": "y11a-3e-q8a",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Completing the square and the graph",
    "question": "The parabola has vertex \\( (2, 3) \\) and \\( y \\)-intercept at 7. The coefficient of \\( x^2 \\) is 1. Find its equation in completed square form.",
    "opts": [
      "\\(y = (x - 2)^2 + 3\\)",
      "\\(y = (x + 2)^2 + 3\\)",
      "\\(y = -(x - 2)^2 + 3\\)",
      "\\(y = (x - 2)^2 - 3\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "꼭짓점 \\((2, 3)\\)과 양의 오목성을 이용하여 꼭짓점 형태를 씁니다.",
        "workingOut": "y = (x-2)^2+3",
        "graphData": null
      },
      {
        "explanation": "y절편 확인: x = 0 대입.",
        "workingOut": "y(0) = (0-2)^2+3 = 7 \\implies \\text{일치!}",
        "graphData": null
      }
    ]
  },

  // ── QUESTION 8b ──
  {
    "id": "y11a-3e-q8b",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Completing the square and the graph",
    "question": "The parabola has vertex \\( (-1, -4) \\) and \\( y \\)-intercept at \\(-3\\). The coefficient of \\( x^2 \\) is 1. Find its equation in completed square form.",
    "opts": [
      "\\(y = (x + 1)^2 - 4\\)",
      "\\(y = (x - 1)^2 - 4\\)",
      "\\(y = -(x + 1)^2 - 4\\)",
      "\\(y = (x + 1)^2 + 4\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "꼭짓점 \\((-1, -4)\\)을 꼭짓점 형태에 대입.",
        "workingOut": "y = (x+1)^2-4",
        "graphData": null
      },
      {
        "explanation": "y절편 확인.",
        "workingOut": "y(0) = (0+1)^2-4 = -3 \\implies \\text{일치!}",
        "graphData": null
      }
    ]
  },

  // ── QUESTION 8c ──
  {
    "id": "y11a-3e-q8c",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Completing the square and the graph",
    "question": "The parabola has vertex \\( (2, 5) \\) and \\( y \\)-intercept at 1. The coefficient of \\( x^2 \\) is \\(-1\\). Find its equation in completed square form.",
    "opts": [
      "\\(y = -(x - 2)^2 + 5\\)",
      "\\(y = (x - 2)^2 + 5\\)",
      "\\(y = -(x + 2)^2 + 5\\)",
      "\\(y = -(x - 2)^2 - 5\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "꼭짓점 \\((2, 5)\\)과 아래로 볼록성으로 꼭짓점 형태 작성.",
        "workingOut": "y = -(x-2)^2+5",
        "graphData": null
      },
      {
        "explanation": "y절편 확인.",
        "workingOut": "y(0) = -(0-2)^2+5 = -4+5 = 1 \\implies \\text{일치!}",
        "graphData": null
      }
    ]
  },

  // ── QUESTION 8d ──
  {
    "id": "y11a-3e-q8d",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Completing the square and the graph",
    "question": "The parabola has vertex \\( (3, -2) \\) and \\( y \\)-intercept at \\(-11\\). The coefficient of \\( x^2 \\) is \\(-1\\). Find its equation in completed square form.",
    "opts": [
      "\\(y = -(x - 3)^2 - 2\\)",
      "\\(y = (x - 3)^2 - 2\\)",
      "\\(y = -(x + 3)^2 - 2\\)",
      "\\(y = -(x - 3)^2 + 2\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "꼭짓점 \\((3, -2)\\)과 아래로 볼록성으로 꼭짓점 형태 작성.",
        "workingOut": "y = -(x-3)^2-2",
        "graphData": null
      },
      {
        "explanation": "y절편 확인.",
        "workingOut": "y(0) = -(0-3)^2-2 = -9-2 = -11 \\implies \\text{일치!}",
        "graphData": null
      }
    ]
  },

  // ── QUESTION 9a ──
  {
    "id": "y11a-3e-q9a",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Completing the square and the graph",
    "question": "Write down the equation of the monic quadratic function with vertex at \\( (3, 4) \\).",
    "opts": [
      "\\(y = (x - 3)^2 + 4\\)",
      "\\(y = (x + 3)^2 + 4\\)",
      "\\(y = (x - 3)^2 - 4\\)",
      "\\(y = (x + 3)^2 - 4\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "수직 이차함수의 꼭짓점 형태: \\(y = (x-h)^2+k\\). h = 3, k = 4 대입.",
        "workingOut": "y = (x-3)^2+4",
        "graphData": null
      }
    ]
  },

  // ── QUESTION 9b ──
  {
    "id": "y11a-3e-q9b",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Completing the square and the graph",
    "question": "Write down the equation of the monic quadratic function with vertex at \\( (0, -5) \\).",
    "opts": [
      "\\(y = x^2 - 5\\)",
      "\\(y = x^2 + 5\\)",
      "\\(y = (x - 5)^2\\)",
      "\\(y = (x + 5)^2\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "h = 0, k = -5를 꼭짓점 형태에 대입.",
        "workingOut": "y = (x-0)^2-5 = x^2-5",
        "graphData": null
      }
    ]
  },

  // ── QUESTION 9c ──
  {
    "id": "y11a-3e-q9c",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Completing the square and the graph",
    "question": "Write down the equation of the monic quadratic function with vertex at \\( (-2, 6) \\).",
    "opts": [
      "\\(y = (x + 2)^2 + 6\\)",
      "\\(y = (x - 2)^2 + 6\\)",
      "\\(y = (x + 2)^2 - 6\\)",
      "\\(y = (x - 2)^2 - 6\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "h = -2, k = 6를 꼭짓점 형태에 대입.",
        "workingOut": "y = (x-(-2))^2+6 = (x+2)^2+6",
        "graphData": null
      }
    ]
  },

  // ── QUESTION 9d ──
  {
    "id": "y11a-3e-q9d",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Completing the square and the graph",
    "question": "Write down the equation of the monic quadratic function with vertex at \\( (4, -9) \\).",
    "opts": [
      "\\(y = (x - 4)^2 - 9\\)",
      "\\(y = (x + 4)^2 - 9\\)",
      "\\(y = (x - 4)^2 + 9\\)",
      "\\(y = (x + 4)^2 + 9\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "h = 4, k = -9를 꼭짓점 형태에 대입.",
        "workingOut": "y = (x-4)^2-9",
        "graphData": null
      }
    ]
  },

  // ── QUESTION 10 ──
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
        "type": "multiple_choice",
        "question": "b) Which point do all these parabolas pass through?",
        "opts": [
          "\\((2, -3)\\)",
          "\\((0, -3)\\)",
          "\\((2, 0)\\)",
          "\\((0, 0)\\)"
        ],
        "a": 0
      },
      {
        "id": "y11a-3e-q10c",
        "type": "multiple_choice",
        "question": "c) For which values of \\( a \\) does the parabola have \\( x \\)-intercepts?",
        "opts": [
          "\\(a > 0\\)",
          "\\(a < 0\\)",
          "\\(a = 0\\)",
          "For all values of a"
        ],
        "a": 0
      },
      {
        "id": "y11a-3e-q10d",
        "type": "teacher_review",
        "question": "d) Explain your answer to part c geometrically.",
        "a": "Geometrically, the shared vertex (2, -3) lies below the x-axis. If a > 0, the parabola opens upwards and must cross the x-axis. If a < 0, it opens downwards and moves away from the x-axis, having no intercepts."
      }
    ],
    "solutionSteps": [
      {
        "explanation": "x = 2를 대입하면 a에 관계없이 y = -3. 따라서 모든 곡선이 꼭짓점 \\((2, -3)\\)을 공유합니다.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "꼭짓점이 x축 아래이므로 위로 볼록 (a > 0)이면 x절편 존재, 아래로 볼록 (a < 0)이면 x절편 없음.",
        "workingOut": "",
        "graphData": null
      }
    ]
  },

  // ── QUESTION 11 (teacher_review — proof) ──
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
    ],
    "solutionSteps": [
      {"explanation": "a로 나누기: \\(\\frac{y}{a} = x^2 + \\frac{b}{a}x + \\frac{c}{a}\\).", "workingOut": "", "graphData": null},
      {"explanation": "\\(\\left(\\frac{b}{2a}\\right)^2 = \\frac{b^2}{4a^2}\\)를 더하고 빼기.", "workingOut": "\\frac{y}{a} = \\left(x + \\frac{b}{2a}\\right)^2 - \\frac{b^2-4ac}{4a^2}", "graphData": null},
      {"explanation": "a를 곱하면 꼭짓점이 \\(x = -\\frac{b}{2a}\\).", "workingOut": "", "graphData": null}
    ]
  },

  // ── QUESTION 12 ──
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
        "type": "multiple_choice",
        "question": "a) For \\( y = 3(x - 2)^2 - 6 \\), how many x-intercepts does the parabola have?",
        "opts": [
          "\\(V(2, -6)\\), 2 intercepts",
          "\\(V(2, -6)\\), 0 intercepts",
          "\\(V(2, 6)\\), 2 intercepts",
          "\\(V(-2, -6)\\), 1 intercept"
        ],
        "a": 0
      },
      {
        "id": "y11a-3e-q12b",
        "type": "multiple_choice",
        "question": "b) For \\( y = -2(x + 3)^2 - 4 \\), how many x-intercepts does the parabola have?",
        "opts": [
          "\\(V(-3, -4)\\), 0 intercepts",
          "\\(V(-3, -4)\\), 2 intercepts",
          "\\(V(3, -4)\\), 0 intercepts",
          "\\(V(-3, 4)\\), 1 intercept"
        ],
        "a": 0
      },
      {
        "id": "y11a-3e-q12c",
        "type": "multiple_choice",
        "question": "c) For \\( y = 5(x - 1)^2 \\), how many x-intercepts does the parabola have?",
        "opts": [
          "\\(V(1, 0)\\), 1 intercept",
          "\\(V(1, 0)\\), 2 intercepts",
          "\\(V(-1, 0)\\), 1 intercept",
          "\\(V(1, 0)\\), 0 intercepts"
        ],
        "a": 0
      }
    ],
    "solutionSteps": [
      {"explanation": "a) \\(V(2, -6)\\)이 x축 아래, a = 3 > 0 위로 볼록 → 두 번 교차.", "workingOut": "", "graphData": null},
      {"explanation": "b) \\(V(-3, -4)\\)이 x축 아래, a = -2 < 0 아래로 볼록 → 교차 없음.", "workingOut": "", "graphData": null},
      {"explanation": "c) \\(V(1, 0)\\)이 x축 위에 정확히 → 꼭짓점이 유일한 x절편.", "workingOut": "", "graphData": null}
    ]
  },

  // ── QUESTION 13 (teacher_review) ──
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
    ],
    "solutionSteps": [
      {"explanation": "a) \\(y = -(x^2-6x+9)-4+9 = -(x-3)^2+5\\). 꼭짓점 \\((3, 5)\\).", "workingOut": "", "graphData": null},
      {"explanation": "b) \\(y = 2(x^2-4x+4)+10-8 = 2(x-2)^2+2\\). 꼭짓점 \\((2, 2)\\).", "workingOut": "", "graphData": null},
      {"explanation": "c) \\(y = 2(x^2+2x+1)-2-2 = 2(x+1)^2-4\\). 꼭짓점 \\((-1, -4)\\).", "workingOut": "", "graphData": null}
    ]
  },

  // ── QUESTION 14 (subQuestions — MC for surds) ──
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
        "type": "multiple_choice",
        "question": "a) Write \\( f(x) = x^2 + 4x - 2 \\) in factored form using surds.",
        "opts": [
          "\\((x + 2 - \\sqrt{6})(x + 2 + \\sqrt{6})\\)",
          "\\((x - 2 - \\sqrt{6})(x - 2 + \\sqrt{6})\\)",
          "\\((x + 2 - \\sqrt{2})(x + 2 + \\sqrt{2})\\)",
          "\\((x + 4 - \\sqrt{6})(x + 4 + \\sqrt{6})\\)"
        ],
        "a": 0
      },
      {
        "id": "y11a-3e-q14b",
        "type": "multiple_choice",
        "question": "b) Write \\( f(x) = x^2 - 6x + 2 \\) in factored form using surds.",
        "opts": [
          "\\((x - 3 - \\sqrt{7})(x - 3 + \\sqrt{7})\\)",
          "\\((x + 3 - \\sqrt{7})(x + 3 + \\sqrt{7})\\)",
          "\\((x - 3 - \\sqrt{6})(x - 3 + \\sqrt{6})\\)",
          "\\((x - 6 - \\sqrt{7})(x - 6 + \\sqrt{7})\\)"
        ],
        "a": 0
      },
      {
        "id": "y11a-3e-q14c",
        "type": "multiple_choice",
        "question": "c) Write \\( f(x) = -x^2 - 4x + 3 \\) in factored form using surds.",
        "opts": [
          "\\((\\sqrt{7} - x - 2)(\\sqrt{7} + x + 2)\\)",
          "\\((\\sqrt{3} - x - 2)(\\sqrt{3} + x + 2)\\)",
          "\\((\\sqrt{7} - x + 2)(\\sqrt{7} + x - 2)\\)",
          "\\(-(x + 2 - \\sqrt{7})(x + 2 + \\sqrt{7})\\)"
        ],
        "a": 0
      }
    ],
    "solutionSteps": [
      {"explanation": "a) 완전제곱식: \\((x+2)^2-6\\). 차이의 제곱: \\((x+2-\\sqrt{6})(x+2+\\sqrt{6})\\).", "workingOut": "", "graphData": null},
      {"explanation": "b) 완전제곱식: \\((x-3)^2-7\\). 인수: \\((x-3-\\sqrt{7})(x-3+\\sqrt{7})\\).", "workingOut": "", "graphData": null},
      {"explanation": "c) \\(7-(x+2)^2 = (\\sqrt{7})^2-(x+2)^2 = (\\sqrt{7}-(x+2))(\\sqrt{7}+(x+2))\\).", "workingOut": "", "graphData": null}
    ]
  },

  // ── QUESTION 15 ──
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
        "type": "multiple_choice",
        "question": "a) Find the equation if the quadratic is monic.",
        "opts": [
          "\\(y = (x + 3)^2 + 4\\)",
          "\\(y = (x - 3)^2 + 4\\)",
          "\\(y = -(x + 3)^2 + 4\\)",
          "\\(y = (x + 3)^2 - 4\\)"
        ],
        "a": 0
      },
      {
        "id": "y11a-3e-q15b",
        "type": "multiple_choice",
        "question": "b) Find the equation if the coefficient of \\( x^2 \\) is 2.",
        "opts": [
          "\\(y = 2(x + 3)^2 + 4\\)",
          "\\(y = (x + 3)^2 + 4\\)",
          "\\(y = -2(x + 3)^2 + 4\\)",
          "\\(y = 2(x - 3)^2 + 4\\)"
        ],
        "a": 0
      },
      {
        "id": "y11a-3e-q15c",
        "type": "multiple_choice",
        "question": "c) Find the equation if the \\( y \\)-intercept is 22.",
        "opts": [
          "\\(y = 2(x + 3)^2 + 4\\)",
          "\\(y = 18(x + 3)^2 + 4\\)",
          "\\(y = (x + 3)^2 + 4\\)",
          "\\(y = -2(x + 3)^2 + 4\\)"
        ],
        "a": 0
      },
      {
        "id": "y11a-3e-q15d",
        "type": "multiple_choice",
        "question": "d) Find the equation if the curve passes through the origin.",
        "opts": [
          "\\(y = -\\frac{4}{9}(x + 3)^2 + 4\\)",
          "\\(y = \\frac{4}{9}(x + 3)^2 + 4\\)",
          "\\(y = -\\frac{9}{4}(x + 3)^2 + 4\\)",
          "\\(y = -(x + 3)^2 + 4\\)"
        ],
        "a": 0
      }
    ],
    "solutionSteps": [
      {"explanation": "a) 단위 이차함수: a = 1이므로 \\(y = (x+3)^2+4\\).", "workingOut": "", "graphData": null},
      {"explanation": "b) x² 계수가 2이므로 a = 2, \\(y = 2(x+3)^2+4\\).", "workingOut": "", "graphData": null},
      {"explanation": "c) y절편 22: \\(22 = a(0+3)^2+4 \\implies 18 = 9a \\implies a = 2\\), \\(y = 2(x+3)^2+4\\).", "workingOut": "", "graphData": null},
      {"explanation": "d) 원점 통과 \\((0,0)\\): \\(0 = a(0+3)^2+4 \\implies 9a = -4 \\implies a = -\\frac{4}{9}\\), \\(y = -\\frac{4}{9}(x+3)^2+4\\).", "workingOut": "", "graphData": null}
    ]
  }
];
