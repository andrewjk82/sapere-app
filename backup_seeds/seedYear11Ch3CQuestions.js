export const Y11_CH3C_QUESTIONS = [
  // ── QUESTION 1 (teacher_review — already MC) ──
  {
    "id": "y11a-3c-q1",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Review of linear graphs",
    "question": "For the straight line \\( 2x + 3y - 6 = 0 \\), find the \\( y \\)-intercept by putting \\( x = 0 \\).",
    "subQuestions": [
      {
        "id": "y11a-3c-q1a",
        "type": "multiple_choice",
        "question": "Which of the following correctly identifies the y-intercept of \\( 2x + 3y - 6 = 0 \\)?",
        "opts": [
          "\\(y\\)-intercept is \\(2\\) (at the point \\((0,2)\\))",
          "\\(y\\)-intercept is \\(3\\) (at the point \\((0,3)\\))",
          "\\(y\\)-intercept is \\(6\\) (at the point \\((0,6)\\))",
          "\\(y\\)-intercept is \\(-2\\) (at the point \\((0,-2)\\))"
        ],
        "a": 0
      }
    ],
    "solutionSteps": [
      {
        "explanation": "주어진 조건: \\(2x + 3y - 6 = 0\\)에서 x = 0을 대입하여 y절편을 구합니다.",
        "workingOut": "2(0) + 3y - 6 = 0",
        "graphData": null
      },
      {
        "explanation": "y에 대해 풀면:",
        "workingOut": "3y = 6 \\implies y = 2",
        "graphData": null
      },
      {
        "explanation": "결론: y절편은 2이며, 점 \\((0, 2)\\)에서 y축과 만납니다.",
        "workingOut": "\\text{y-intercept: } (0, 2)",
        "graphData": null
      }
    ]
  },

  // ── QUESTION 2 (y-intercept, x-intercept, sketch) ──
  {
    "id": "y11a-3c-q2a",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Review of linear graphs",
    "question": "For the straight line \\( 2x + 3y - 6 = 0 \\), which value is the \\( y \\)-intercept (put \\( x = 0 \\))?",
    "opts": [
      "\\(2\\)",
      "\\(3\\)",
      "\\(6\\)",
      "\\(-6\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "주어진 조건: \\(2x + 3y - 6 = 0\\)에서 x = 0을 대입합니다.",
        "workingOut": "2(0) + 3y - 6 = 0",
        "graphData": null
      },
      {
        "explanation": "y에 대해 풀면:",
        "workingOut": "3y = 6 \\implies y = 2",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-3c-q2b",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Review of linear graphs",
    "question": "For the straight line \\( 2x + 3y - 6 = 0 \\), which value is the \\( x \\)-intercept (put \\( y = 0 \\))?",
    "opts": [
      "\\(3\\)",
      "\\(2\\)",
      "\\(6\\)",
      "\\(-3\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "주어진 조건: \\(2x + 3y - 6 = 0\\)에서 y = 0을 대입합니다.",
        "workingOut": "2x + 3(0) - 6 = 0",
        "graphData": null
      },
      {
        "explanation": "x에 대해 풀면:",
        "workingOut": "2x = 6 \\implies x = 3",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-3c-q2c",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Review of linear graphs",
    "question": "Plot the intercepts \\( (0, 2) \\) and \\( (3, 0) \\) and sketch the line representing \\( 2x + 3y - 6 = 0 \\).",
    "a": "Straight line passing through (0, 2) and (3, 0).",
    "solutionSteps": [
      {
        "explanation": "y절편과 x절편을 좌표축에 표시합니다.",
        "workingOut": "\\text{y-intercept: } (0, 2), \\quad \\text{x-intercept: } (3, 0)",
        "graphData": null
      },
      {
        "explanation": "두 점을 직선으로 연결합니다.",
        "workingOut": "",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-2, 5, 5, -3],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-1.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-2.5], [0,4.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 4.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return (6 - 2*x)/3; }], {strokeColor: '#4f46e5', strokeWidth: 1.5});\nboard.create('point', [0, 2], {name: '(0,2)', visible: true, withLabel: true, label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [3, 0], {name: '(3,0)', visible: true, withLabel: true, label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
      }
    }
  },

  // ── QUESTION 3 (teacher_review — sketch) ──
  {
    "id": "y11a-3c-q3a",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Review of linear graphs",
    "question": "Find the intercepts and sketch the line for the equation \\( y = x + 2 \\).",
    "a": "x-intercept: (-2, 0), y-intercept: (0, 2).",
    "solutionSteps": [
      {"explanation": "y절편: x = 0 대입.", "workingOut": "y = 0 + 2 = 2 \\implies (0, 2)", "graphData": null},
      {"explanation": "x절편: y = 0 대입.", "workingOut": "0 = x + 2 \\implies x = -2 \\implies (-2, 0)", "graphData": null}
    ],
    "graphData": {"jsxGraph": {"width": 350, "height": 250, "boundingbox": [-4, 5, 3, -3], "script": "board.suspendUpdate();\nboard.create('arrow', [[-3.5,0], [2.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-2.5], [0,4.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [2.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 4.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return x + 2; }], {strokeColor: '#4f46e5', strokeWidth: 1.5});\nboard.create('point', [0, 2], {name: '(0,2)', visible: true});\nboard.create('point', [-2, 0], {name: '(-2,0)', visible: true});\nboard.unsuspendUpdate();"}}
  },
  {
    "id": "y11a-3c-q3b",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Review of linear graphs",
    "question": "Find the intercepts and sketch the line for the equation \\( y = 6 - 3x \\).",
    "a": "x-intercept: (2, 0), y-intercept: (0, 6).",
    "solutionSteps": [
      {"explanation": "y절편: x = 0 대입.", "workingOut": "y = 6 - 3(0) = 6 \\implies (0, 6)", "graphData": null},
      {"explanation": "x절편: y = 0 대입.", "workingOut": "0 = 6 - 3x \\implies x = 2 \\implies (2, 0)", "graphData": null}
    ],
    "graphData": {"jsxGraph": {"width": 350, "height": 250, "boundingbox": [-2, 8, 5, -2], "script": "board.suspendUpdate();\nboard.create('arrow', [[-1.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-1.5], [0,7.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 7.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return 6 - 3*x; }], {strokeColor: '#4f46e5', strokeWidth: 1.5});\nboard.create('point', [0, 6], {name: '(0,6)', visible: true});\nboard.create('point', [2, 0], {name: '(2,0)', visible: true});\nboard.unsuspendUpdate();"}}
  },
  {
    "id": "y11a-3c-q3c",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Review of linear graphs",
    "question": "Find the intercepts and sketch the line for the equation \\( y = \\frac{1}{2}x - 2 \\).",
    "a": "x-intercept: (4, 0), y-intercept: (0, -2).",
    "solutionSteps": [
      {"explanation": "y절편: x = 0 대입.", "workingOut": "y = 0.5(0) - 2 = -2 \\implies (0, -2)", "graphData": null},
      {"explanation": "x절편: y = 0 대입.", "workingOut": "0 = 0.5x - 2 \\implies x = 4 \\implies (4, 0)", "graphData": null}
    ],
    "graphData": {"jsxGraph": {"width": 350, "height": 250, "boundingbox": [-2, 3, 6, -4], "script": "board.suspendUpdate();\nboard.create('arrow', [[-1.5,0], [5.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.5], [0,2.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('functiongraph', [function(x){ return 0.5*x - 2; }], {strokeColor: '#4f46e5', strokeWidth: 1.5});\nboard.create('point', [0, -2], {name: '(0,-2)', visible: true});\nboard.create('point', [4, 0], {name: '(4,0)', visible: true});\nboard.unsuspendUpdate();"}}
  },
  {
    "id": "y11a-3c-q3d",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Review of linear graphs",
    "question": "Find the intercepts and sketch the line for the equation \\( x + y - 2 = 0 \\).",
    "a": "x-intercept: (2, 0), y-intercept: (0, 2).",
    "solutionSteps": [
      {"explanation": "y절편: x = 0 대입.", "workingOut": "0 + y - 2 = 0 \\implies y = 2", "graphData": null},
      {"explanation": "x절편: y = 0 대입.", "workingOut": "x + 0 - 2 = 0 \\implies x = 2", "graphData": null}
    ]
  },
  {
    "id": "y11a-3c-q3e",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Review of linear graphs",
    "question": "Find the intercepts and sketch the line for the equation \\( 3x - y + 3 = 0 \\).",
    "a": "x-intercept: (-1, 0), y-intercept: (0, 3).",
    "solutionSteps": [
      {"explanation": "y절편: x = 0 대입.", "workingOut": "3(0) - y + 3 = 0 \\implies y = 3", "graphData": null},
      {"explanation": "x절편: y = 0 대입.", "workingOut": "3x - 0 + 3 = 0 \\implies x = -1", "graphData": null}
    ]
  },
  {
    "id": "y11a-3c-q3f",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Review of linear graphs",
    "question": "Find the intercepts and sketch the line for the equation \\( x - 2y - 4 = 0 \\).",
    "a": "x-intercept: (4, 0), y-intercept: (0, -2).",
    "solutionSteps": [
      {"explanation": "y절편: x = 0 대입.", "workingOut": "0 - 2y - 4 = 0 \\implies y = -2", "graphData": null},
      {"explanation": "x절편: y = 0 대입.", "workingOut": "x - 0 - 4 = 0 \\implies x = 4", "graphData": null}
    ]
  },
  {
    "id": "y11a-3c-q3g",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Review of linear graphs",
    "question": "Find the intercepts and sketch the line for the equation \\( 3x - 2y - 12 = 0 \\).",
    "a": "x-intercept: (4, 0), y-intercept: (0, -6).",
    "solutionSteps": [
      {"explanation": "y절편: x = 0 대입.", "workingOut": "3(0) - 2y - 12 = 0 \\implies y = -6", "graphData": null},
      {"explanation": "x절편: y = 0 대입.", "workingOut": "3x - 2(0) - 12 = 0 \\implies x = 4", "graphData": null}
    ]
  },
  {
    "id": "y11a-3c-q3h",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Review of linear graphs",
    "question": "Find the intercepts and sketch the line for the equation \\( x + 3y + 6 = 0 \\).",
    "a": "x-intercept: (-6, 0), y-intercept: (0, -2).",
    "solutionSteps": [
      {"explanation": "y절편: x = 0 대입.", "workingOut": "0 + 3y + 6 = 0 \\implies y = -2", "graphData": null},
      {"explanation": "x절편: y = 0 대입.", "workingOut": "x + 3(0) + 6 = 0 \\implies x = -6", "graphData": null}
    ]
  },
  {
    "id": "y11a-3c-q3i",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Review of linear graphs",
    "question": "Find the intercepts and sketch the line for the equation \\( 4x + 3y - 12 = 0 \\).",
    "a": "x-intercept: (3, 0), y-intercept: (0, 4).",
    "solutionSteps": [
      {"explanation": "y절편: x = 0 대입.", "workingOut": "4(0) + 3y - 12 = 0 \\implies y = 4", "graphData": null},
      {"explanation": "x절편: y = 0 대입.", "workingOut": "4x + 3(0) - 12 = 0 \\implies x = 3", "graphData": null}
    ]
  },

  // ── QUESTION 4 (teacher_review — show) ──
  {
    "id": "y11a-3c-q4a",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Review of linear graphs",
    "question": "A linear function has the equation \\( y = -3x \\). Show that the \\( x \\)-intercept and the \\( y \\)-intercept are both zero.",
    "a": "Putting x = 0 gives y = 0. Putting y = 0 gives 3x = 0 => x = 0. Thus, both intercepts are (0, 0).",
    "solutionSteps": [
      {"explanation": "y절편: x = 0 대입.", "workingOut": "y = -3(0) = 0 \\implies (0, 0)", "graphData": null},
      {"explanation": "x절편: y = 0 대입.", "workingOut": "0 = -3x \\implies x = 0 \\implies (0, 0)", "graphData": null}
    ]
  },
  {
    "id": "y11a-3c-q4b",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Review of linear graphs",
    "question": "For the line \\( y = -3x \\), substitute \\( x = 1 \\) to find a second point on the line, then sketch the line.",
    "a": "Second point: (1, -3). The line passes through (0, 0) and (1, -3).",
    "solutionSteps": [
      {"explanation": "x = 1 대입.", "workingOut": "y = -3(1) = -3 \\implies (1, -3)", "graphData": null},
      {"explanation": "원점과 (1, -3)을 연결하여 직선을 그립니다.", "workingOut": "", "graphData": null}
    ]
  },

  // ── QUESTION 5 (teacher_review — sketch) ──
  {
    "id": "y11a-3c-q5a",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Review of linear graphs",
    "question": "Sketch the graph of the line \\( y = 2x \\). Indicate the origin and another point on the line.",
    "a": "Line passing through (0, 0) and (1, 2).",
    "solutionSteps": [
      {"explanation": "원점을 지나는 직선.", "workingOut": "(0, 0)", "graphData": null},
      {"explanation": "x = 1 대입.", "workingOut": "y = 2(1) = 2 \\implies (1, 2)", "graphData": null}
    ]
  },
  {
    "id": "y11a-3c-q5b",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Review of linear graphs",
    "question": "Sketch the graph of the line \\( y = 4x \\). Indicate the origin and another point on the line.",
    "a": "Line passing through (0, 0) and (1, 4).",
    "solutionSteps": [
      {"explanation": "원점을 지나는 직선.", "workingOut": "(0, 0)", "graphData": null},
      {"explanation": "x = 1 대입.", "workingOut": "y = 4(1) = 4 \\implies (1, 4)", "graphData": null}
    ]
  },
  {
    "id": "y11a-3c-q5c",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Review of linear graphs",
    "question": "Sketch the graph of the line \\( y = -5x \\). Indicate the origin and another point on the line.",
    "a": "Line passing through (0, 0) and (1, -5).",
    "solutionSteps": [
      {"explanation": "원점을 지나는 직선.", "workingOut": "(0, 0)", "graphData": null},
      {"explanation": "x = 1 대입.", "workingOut": "y = -5(1) = -5 \\implies (1, -5)", "graphData": null}
    ]
  },
  {
    "id": "y11a-3c-q5d",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Review of linear graphs",
    "question": "Sketch the graph of the line \\( x + 2y = 0 \\). Indicate the origin and another point on the line.",
    "a": "Line passing through (0, 0) and (2, -1).",
    "solutionSteps": [
      {"explanation": "y에 대해 풀면: \\(y = -\\frac{1}{2}x\\)", "workingOut": "y = -\\frac{1}{2}x", "graphData": null},
      {"explanation": "x = 2 대입.", "workingOut": "y = -1 \\implies (2, -1)", "graphData": null}
    ]
  },
  {
    "id": "y11a-3c-q5e",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Review of linear graphs",
    "question": "Sketch the graph of the line \\( x - 3y = 0 \\). Indicate the origin and another point on the line.",
    "a": "Line passing through (0, 0) and (3, 1).",
    "solutionSteps": [
      {"explanation": "y에 대해 풀면: \\(y = \\frac{1}{3}x\\)", "workingOut": "y = \\frac{1}{3}x", "graphData": null},
      {"explanation": "x = 3 대입.", "workingOut": "y = 1 \\implies (3, 1)", "graphData": null}
    ]
  },
  {
    "id": "y11a-3c-q5f",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Review of linear graphs",
    "question": "Sketch the graph of the line \\( 2x + 3y = 0 \\). Indicate the origin and another point on the line.",
    "a": "Line passing through (0, 0) and (3, -2).",
    "solutionSteps": [
      {"explanation": "y에 대해 풀면: \\(y = -\\frac{2}{3}x\\)", "workingOut": "y = -\\frac{2}{3}x", "graphData": null},
      {"explanation": "x = 3 대입.", "workingOut": "y = -2 \\implies (3, -2)", "graphData": null}
    ]
  },

  // ── QUESTION 6 (teacher_review — graph) ──
  {
    "id": "y11a-3c-q6a",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Review of linear graphs",
    "question": "Graph the function \\( y = f(x) \\) where \\( f(x) = -2x - 4 \\). Show the intercepts with the axes.",
    "a": "Line with y-intercept (0, -4) and x-intercept (-2, 0).",
    "solutionSteps": [
      {"explanation": "y절편: x = 0 대입.", "workingOut": "f(0) = -4 \\implies (0, -4)", "graphData": null},
      {"explanation": "x절편: f(x) = 0 설정.", "workingOut": "-2x - 4 = 0 \\implies x = -2 \\implies (-2, 0)", "graphData": null}
    ]
  },
  {
    "id": "y11a-3c-q6b",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Review of linear graphs",
    "question": "Graph the function \\( y = f(x) \\) where \\( f(x) = \\frac{1}{3}x - 1 \\). Show the intercepts with the axes.",
    "a": "Line with y-intercept (0, -1) and x-intercept (3, 0).",
    "solutionSteps": [
      {"explanation": "y절편: x = 0 대입.", "workingOut": "f(0) = -1 \\implies (0, -1)", "graphData": null},
      {"explanation": "x절편: f(x) = 0 설정.", "workingOut": "\\frac{1}{3}x - 1 = 0 \\implies x = 3 \\implies (3, 0)", "graphData": null}
    ]
  },
  {
    "id": "y11a-3c-q6c",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Review of linear graphs",
    "question": "Graph the function \\( y = f(x) \\) where \\( f(x) = -\\frac{1}{3}x \\). Indicate the origin and another point on the line.",
    "a": "Line passing through (0, 0) and (3, -1).",
    "solutionSteps": [
      {"explanation": "상수항이 없으므로 원점을 지납니다.", "workingOut": "(0, 0)", "graphData": null},
      {"explanation": "x = 3 대입.", "workingOut": "f(3) = -1 \\implies (3, -1)", "graphData": null}
    ]
  },

  // ── QUESTION 7 (teacher_review — sketch vertical/horizontal) ──
  {
    "id": "y11a-3c-q7a",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Review of linear graphs",
    "question": "Sketch the vertical line \\( x = 2 \\).",
    "a": "Vertical line passing through (2, 0).",
    "solutionSteps": [
      {"explanation": "x = 2는 x좌표가 모두 2인 수직선입니다.", "workingOut": "\\text{Line is } x = 2", "graphData": null}
    ],
    "graphData": {"jsxGraph": {"width": 350, "height": 250, "boundingbox": [-2, 4, 5, -4], "script": "board.suspendUpdate();\nboard.create('arrow', [[-1.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.5], [0,3.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 3.2, 'y'], {fontSize: 14});\nboard.create('line', [[2, -4], [2, 4]], {strokeColor: '#4f46e5', strokeWidth: 1.5});\nboard.create('point', [2, 0], {name: '2', visible: true});\nboard.unsuspendUpdate();"}}
  },
  {
    "id": "y11a-3c-q7b",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Review of linear graphs",
    "question": "Sketch the horizontal line \\( y = 3 \\).",
    "a": "Horizontal line passing through (0, 3).",
    "solutionSteps": [
      {"explanation": "y = 3은 y좌표가 모두 3인 수평선입니다.", "workingOut": "\\text{Line is } y = 3", "graphData": null}
    ]
  },
  {
    "id": "y11a-3c-q7c",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Review of linear graphs",
    "question": "Sketch the vertical line \\( x = -3 \\).",
    "a": "Vertical line passing through (-3, 0).",
    "solutionSteps": [
      {"explanation": "x = -3은 x좌표가 모두 -3인 수직선입니다.", "workingOut": "\\text{Line is } x = -3", "graphData": null}
    ]
  },
  {
    "id": "y11a-3c-q7d",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Review of linear graphs",
    "question": "Sketch the horizontal line \\( y = -2 \\).",
    "a": "Horizontal line passing through (0, -2).",
    "solutionSteps": [
      {"explanation": "y = -2는 y좌표가 모두 -2인 수평선입니다.", "workingOut": "\\text{Line is } y = -2", "graphData": null}
    ]
  },
  {
    "id": "y11a-3c-q7e",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Review of linear graphs",
    "question": "Sketch the horizontal line \\( 2y = -5 \\).",
    "a": "Horizontal line y = -2.5.",
    "solutionSteps": [
      {"explanation": "먼저 y에 대해 풀면:", "workingOut": "y = -\\frac{5}{2} = -2.5", "graphData": null},
      {"explanation": "y = -2.5는 y좌표가 모두 -2.5인 수평선입니다.", "workingOut": "", "graphData": null}
    ]
  },
  {
    "id": "y11a-3c-q7f",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Review of linear graphs",
    "question": "Sketch the vertical line \\( 3x = 4 \\).",
    "a": "Vertical line x = 4/3.",
    "solutionSteps": [
      {"explanation": "먼저 x에 대해 풀면:", "workingOut": "x = \\frac{4}{3}", "graphData": null},
      {"explanation": "x = 4/3을 지나는 수직선입니다.", "workingOut": "", "graphData": null}
    ]
  },

  // ── QUESTION 8 (subQuestions — MC and teacher_review) ──
  {
    "id": "y11a-3c-q8",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Review of linear graphs",
    "question": "Analyze the vertical and horizontal lines sketched in the previous question.",
    "subQuestions": [
      {
        "id": "y11a-3c-q8a",
        "type": "multiple_choice",
        "question": "a) Which lines are NOT functions?",
        "opts": [
          "The vertical lines (x = 2, x = -3, and 3x = 4)",
          "The horizontal lines (y = 3, y = -2, and 2y = -5)",
          "All horizontal and vertical lines are functions",
          "None of the lines are functions"
        ],
        "a": 0
      },
      {
        "id": "y11a-3c-q8b",
        "type": "teacher_review",
        "question": "b) For one of the vertical lines (e.g. \\( x = 2 \\)), write down the coordinates of two points on the line that have the same \\( x \\)-coordinate.",
        "a": "For x = 2, any two points like (2, 1) and (2, 5) have the same x-coordinate."
      }
    ],
    "solutionSteps": [
      {
        "explanation": "수직선은 수직선 검사에서 실패합니다. 수직선 위에 수직선을 그리면 무한한 점에서 교차합니다.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "x = k 형태의 직선 위 점은 모두 (k, y) 형태입니다. 두 개의 다른 y값을 선택하면 됩니다.",
        "workingOut": "\\text{For } x = 2 \\implies (2, 1) \\text{ and } (2, 5)",
        "graphData": null
      }
    ]
  },

  // ── QUESTION 9 (short_answer → MC: 방정식을 f(x) 형태로 변환) ──
  {
    "id": "y11a-3c-q9a",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Review of linear graphs",
    "question": "Solve \\( x + y - 2 = 0 \\) for \\( y \\) and write it in function notation \\( f(x) \\).",
    "opts": [
      "\\(f(x) = -x + 2\\)",
      "\\(f(x) = x + 2\\)",
      "\\(f(x) = x - 2\\)",
      "\\(f(x) = -x - 2\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "주어진 조건: \\(x + y - 2 = 0\\)에서 y를 분리합니다.",
        "workingOut": "y = -x + 2",
        "graphData": null
      },
      {
        "explanation": "함수 표기법으로 변환합니다.",
        "workingOut": "f(x) = -x + 2",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-3c-q9b",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Review of linear graphs",
    "question": "Solve \\( 3x - y + 3 = 0 \\) for \\( y \\) and write it in function notation \\( f(x) \\).",
    "opts": [
      "\\(f(x) = 3x + 3\\)",
      "\\(f(x) = -3x + 3\\)",
      "\\(f(x) = 3x - 3\\)",
      "\\(f(x) = -3x - 3\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "주어진 조건: \\(3x - y + 3 = 0\\)에서 y를 분리합니다.",
        "workingOut": "3x + 3 = y \\implies y = 3x + 3",
        "graphData": null
      },
      {
        "explanation": "함수 표기법으로 변환합니다.",
        "workingOut": "f(x) = 3x + 3",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-3c-q9c",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Review of linear graphs",
    "question": "Solve \\( x - 2y - 4 = 0 \\) for \\( y \\) and write it in function notation.",
    "opts": [
      "\\(f(x) = \\frac{1}{2}x - 2\\)",
      "\\(f(x) = 2x - 4\\)",
      "\\(f(x) = \\frac{1}{2}x + 2\\)",
      "\\(f(x) = -\\frac{1}{2}x - 2\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "주어진 조건: \\(x - 2y - 4 = 0\\)에서 2y를 분리합니다.",
        "workingOut": "2y = x - 4",
        "graphData": null
      },
      {
        "explanation": "양변을 2로 나눕니다.",
        "workingOut": "y = \\frac{1}{2}x - 2",
        "graphData": null
      },
      {
        "explanation": "함수 표기법으로 변환합니다.",
        "workingOut": "f(x) = \\frac{1}{2}x - 2",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-3c-q9d",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Review of linear graphs",
    "question": "Solve \\( 3x - 2y - 12 = 0 \\) for \\( y \\) and write it in function notation.",
    "opts": [
      "\\(f(x) = 1.5x - 6\\)",
      "\\(f(x) = 1.5x + 6\\)",
      "\\(f(x) = -1.5x - 6\\)",
      "\\(f(x) = 3x - 12\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "주어진 조건: \\(3x - 2y - 12 = 0\\)에서 2y를 분리합니다.",
        "workingOut": "2y = 3x - 12",
        "graphData": null
      },
      {
        "explanation": "양변을 2로 나눕니다.",
        "workingOut": "y = 1.5x - 6",
        "graphData": null
      },
      {
        "explanation": "함수 표기법: \\(f(x) = 1.5x - 6\\)",
        "workingOut": "f(x) = 1.5x - 6",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-3c-q9e",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Review of linear graphs",
    "question": "Solve \\( x + 3y + 6 = 0 \\) for \\( y \\) and write it in function notation.",
    "opts": [
      "\\(f(x) = -\\frac{1}{3}x - 2\\)",
      "\\(f(x) = \\frac{1}{3}x - 2\\)",
      "\\(f(x) = -3x - 6\\)",
      "\\(f(x) = -\\frac{1}{3}x + 2\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "주어진 조건: \\(x + 3y + 6 = 0\\)에서 3y를 분리합니다.",
        "workingOut": "3y = -x - 6",
        "graphData": null
      },
      {
        "explanation": "양변을 3으로 나눕니다.",
        "workingOut": "y = -\\frac{1}{3}x - 2",
        "graphData": null
      },
      {
        "explanation": "함수 표기법: \\(f(x) = -\\frac{1}{3}x - 2\\)",
        "workingOut": "f(x) = -\\frac{1}{3}x - 2",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-3c-q9f",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Review of linear graphs",
    "question": "Solve \\( 4x + 3y - 12 = 0 \\) for \\( y \\) and write it in function notation.",
    "opts": [
      "\\(f(x) = -\\frac{4}{3}x + 4\\)",
      "\\(f(x) = \\frac{4}{3}x + 4\\)",
      "\\(f(x) = -\\frac{4}{3}x - 4\\)",
      "\\(f(x) = 4x - 12\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "주어진 조건: \\(4x + 3y - 12 = 0\\)에서 3y를 분리합니다.",
        "workingOut": "3y = -4x + 12",
        "graphData": null
      },
      {
        "explanation": "양변을 3으로 나눕니다.",
        "workingOut": "y = -\\frac{4}{3}x + 4",
        "graphData": null
      },
      {
        "explanation": "함수 표기법: \\(f(x) = -\\frac{4}{3}x + 4\\)",
        "workingOut": "f(x) = -\\frac{4}{3}x + 4",
        "graphData": null
      }
    ]
  },

  // ── QUESTION 10 (점 위에 있는지 — MC) ──
  {
    "id": "y11a-3c-q10a",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Review of linear graphs",
    "question": "Does the point \\( (4, 2) \\) lie on the line \\( y = x - 2 \\)?",
    "opts": [
      "Yes — LHS = 2, RHS = 4 - 2 = 2. They are equal.",
      "No — LHS = 2, RHS = 4 + 2 = 6. They differ.",
      "Yes — the point has positive coordinates.",
      "No — the line has a positive gradient."
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "주어진 조건: x = 4, y = 2를 \\(y = x - 2\\)에 대입합니다.",
        "workingOut": "\\text{LHS} = 2, \\quad \\text{RHS} = 4 - 2 = 2",
        "graphData": null
      },
      {
        "explanation": "LHS = RHS이므로 이 점은 직선 위에 있습니다.",
        "workingOut": "2 = 2 \\implies \\text{Yes}",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-3c-q10b",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Review of linear graphs",
    "question": "Does the point \\( (6, 5) \\) lie on the line \\( y = 17 - 2x \\)?",
    "opts": [
      "Yes — LHS = 5, RHS = 17 - 12 = 5. They are equal.",
      "No — LHS = 5, RHS = 17 - 6 = 11. They differ.",
      "Yes — because x = 6 is in the domain.",
      "No — because the gradient is negative."
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "x = 6, y = 5를 \\(y = 17 - 2x\\)에 대입합니다.",
        "workingOut": "\\text{LHS} = 5, \\quad \\text{RHS} = 17 - 2(6) = 5",
        "graphData": null
      },
      {
        "explanation": "LHS = RHS이므로 이 점은 직선 위에 있습니다.",
        "workingOut": "5 = 5 \\implies \\text{Yes}",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-3c-q10c",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Review of linear graphs",
    "question": "Does the point \\( (2, -3) \\) lie on the line \\( y = -4x + 5 \\)?",
    "opts": [
      "Yes — LHS = -3, RHS = -8 + 5 = -3. They are equal.",
      "No — LHS = -3, RHS = -4(2) + 5 = -3. They are equal (this option is also Yes).",
      "No — the y-value should be positive.",
      "No — LHS = -3, RHS = 8 - 5 = 3. They differ."
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "x = 2, y = -3을 \\(y = -4x + 5\\)에 대입합니다.",
        "workingOut": "\\text{LHS} = -3, \\quad \\text{RHS} = -4(2) + 5 = -8 + 5 = -3",
        "graphData": null
      },
      {
        "explanation": "LHS = RHS이므로 이 점은 직선 위에 있습니다.",
        "workingOut": "-3 = -3 \\implies \\text{Yes}",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-3c-q10d",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Review of linear graphs",
    "question": "Does the point \\( (-4, 2) \\) lie on the line \\( 3x + 4y + 4 = 0 \\)?",
    "opts": [
      "Yes — substituting gives \\(3(-4) + 4(2) + 4 = -12 + 8 + 4 = 0\\).",
      "No — the x-value is negative, so it cannot be on the line.",
      "No — substituting gives a non-zero value.",
      "Yes — because the point is in the second quadrant."
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "x = -4, y = 2를 방정식에 대입합니다.",
        "workingOut": "\\text{LHS} = 3(-4) + 4(2) + 4 = -12 + 8 + 4 = 0",
        "graphData": null
      },
      {
        "explanation": "LHS = 0 = RHS이므로 이 점은 직선 위에 있습니다.",
        "workingOut": "0 = 0 \\implies \\text{Yes}",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-3c-q10e",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Review of linear graphs",
    "question": "Does the point \\( (-2, -5) \\) lie on the line \\( 2x - 3y - 11 = 0 \\)?",
    "opts": [
      "Yes — substituting gives \\(2(-2) - 3(-5) - 11 = -4 + 15 - 11 = 0\\).",
      "No — both coordinates are negative.",
      "No — substituting gives a non-zero value.",
      "Yes — because the gradient is positive."
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "x = -2, y = -5를 방정식에 대입합니다.",
        "workingOut": "\\text{LHS} = 2(-2) - 3(-5) - 11 = -4 + 15 - 11 = 0",
        "graphData": null
      },
      {
        "explanation": "결론: LHS = 0이므로 이 점은 직선 위에 있습니다.",
        "workingOut": "0 = 0 \\implies \\text{Yes}",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-3c-q10f",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Review of linear graphs",
    "question": "Does the point \\( (-5, -3) \\) lie on the line \\( 3x - 5y = 0 \\)?",
    "opts": [
      "Yes — substituting gives \\(3(-5) - 5(-3) = -15 + 15 = 0\\).",
      "No — the line passes through the origin only.",
      "No — the coordinates are both negative.",
      "Yes — because both values are the same magnitude."
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "x = -5, y = -3을 방정식에 대입합니다.",
        "workingOut": "\\text{LHS} = 3(-5) - 5(-3) = -15 + 15 = 0",
        "graphData": null
      },
      {
        "explanation": "결론: LHS = 0이므로 이 점은 직선 위에 있습니다.",
        "workingOut": "0 = 0 \\implies \\text{Yes}",
        "graphData": null
      }
    ]
  },

  // ── QUESTION 11 (teacher_review and MC) ──
  {
    "id": "y11a-3c-q11a",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Review of linear graphs",
    "question": "On a single set of coordinate axes, graph the two lines \\( x + y = 6 \\) and \\( x - y = 2 \\).",
    "a": "Two straight lines intersecting at (4, 2).",
    "solutionSteps": [
      {"explanation": "첫 번째 직선 \\(x + y = 6\\)의 절편: \\((0, 6)\\)과 \\((6, 0)\\).", "workingOut": "", "graphData": null},
      {"explanation": "두 번째 직선 \\(x - y = 2\\)의 절편: \\((0, -2)\\)과 \\((2, 0)\\).", "workingOut": "", "graphData": null}
    ]
  },
  {
    "id": "y11a-3c-q11b",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Review of linear graphs",
    "question": "From your graph of \\( x + y = 6 \\) and \\( x - y = 2 \\), which point is the intersection?",
    "opts": [
      "\\((4, 2)\\)",
      "\\((2, 4)\\)",
      "\\((3, 3)\\)",
      "\\((6, 0)\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "두 직선의 교점을 그래프에서 읽습니다.",
        "workingOut": "\\text{교점: } x = 4, y = 2",
        "graphData": null
      },
      {
        "explanation": "결론: 교점은 \\((4, 2)\\)입니다.",
        "workingOut": "(4, 2)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-3c-q11c",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Review of linear graphs",
    "question": "Confirm your graphical intersection point by solving \\( x + y = 6 \\) and \\( x - y = 2 \\) simultaneously.",
    "a": "Add the equations: 2x = 8 => x = 4. Substitute into first: 4 + y = 6 => y = 2. Thus, (4, 2) is the solution.",
    "solutionSteps": [
      {"explanation": "두 방정식을 더하여 y를 제거합니다.", "workingOut": "(x + y) + (x - y) = 6 + 2 \\implies 2x = 8 \\implies x = 4", "graphData": null},
      {"explanation": "x = 4를 첫 번째 방정식에 대입합니다.", "workingOut": "4 + y = 6 \\implies y = 2", "graphData": null},
      {"explanation": "결론: 교점은 \\((4, 2)\\)입니다.", "workingOut": "\\text{교점: } (4, 2)", "graphData": null}
    ]
  },

  // ── QUESTION 12 (subQuestions — MC versions) ──
  {
    "id": "y11a-3c-q12",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Review of linear graphs",
    "question": "Find the point of intersection for the following pairs of straight lines.",
    "subQuestions": [
      {
        "id": "y11a-3c-q12a",
        "type": "multiple_choice",
        "question": "a) Find the intersection of \\( x + y = 3 \\) and \\( x - y = -5 \\).",
        "opts": [
          "\\((-1, 4)\\)",
          "\\((1, 2)\\)",
          "\\((4, -1)\\)",
          "\\((-4, 1)\\)"
        ],
        "a": 0
      },
      {
        "id": "y11a-3c-q12b",
        "type": "multiple_choice",
        "question": "b) Find the intersection of \\( x - y = 4 \\) and \\( 3x + y = 0 \\).",
        "opts": [
          "\\((1, -3)\\)",
          "\\((-1, 3)\\)",
          "\\((3, -1)\\)",
          "\\((0, -4)\\)"
        ],
        "a": 0
      },
      {
        "id": "y11a-3c-q12c",
        "type": "multiple_choice",
        "question": "c) Find the intersection of \\( x + 3y = -5 \\) and \\( 3x - y = -5 \\).",
        "opts": [
          "\\((-2, -1)\\)",
          "\\((2, 1)\\)",
          "\\((-1, -2)\\)",
          "\\((-5, 0)\\)"
        ],
        "a": 0
      }
    ],
    "solutionSteps": [
      {
        "explanation": "a) 두 방정식을 더하면: 2x = -2 ⟹ x = -1. 대입: -1 + y = 3 ⟹ y = 4.",
        "workingOut": "(-1, 4)",
        "graphData": null
      },
      {
        "explanation": "b) 두 방정식을 더하면: 4x = 4 ⟹ x = 1. 대입: 1 - y = 4 ⟹ y = -3.",
        "workingOut": "(1, -3)",
        "graphData": null
      },
      {
        "explanation": "c) 두 번째 방정식 × 3 후 첫 번째 방정식에 더합니다: 10x = -20 ⟹ x = -2. 대입: -2 + 3y = -5 ⟹ y = -1.",
        "workingOut": "(-2, -1)",
        "graphData": null
      }
    ]
  },

  // ── QUESTION 13 (subQuestions — cost functions → MC) ──
  {
    "id": "y11a-3c-q13",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Review of linear graphs",
    "question": "A custom shirt company charges \\( \\$70 \\) for the first shirt and \\( \\$55 \\) for each shirt purchased after that.",
    "subQuestions": [
      {
        "id": "y11a-3c-q13a",
        "type": "multiple_choice",
        "question": "a) Which expression correctly gives the cost \\( C \\) in dollars of buying \\( n \\) shirts?",
        "opts": [
          "\\(C = 55n + 15\\)",
          "\\(C = 70n\\)",
          "\\(C = 55n + 70\\)",
          "\\(C = 55n\\)"
        ],
        "a": 0
      },
      {
        "id": "y11a-3c-q13bi",
        "type": "multiple_choice",
        "question": "b) (i) Delivery costs \\( \\$12 \\) for one shirt and \\( \\$3 \\) for each subsequent shirt. Which expression gives the delivery cost \\( D \\)?",
        "opts": [
          "\\(D = 3n + 9\\)",
          "\\(D = 12n\\)",
          "\\(D = 3n + 12\\)",
          "\\(D = 12n + 3\\)"
        ],
        "a": 0
      },
      {
        "id": "y11a-3c-q13bii",
        "type": "multiple_choice",
        "question": "b) (ii) What is the total cost \\( T \\) of buying AND delivering \\( n \\) shirts?",
        "opts": [
          "\\(T = 58n + 24\\)",
          "\\(T = 55n + 24\\)",
          "\\(T = 58n + 15\\)",
          "\\(T = 67n + 27\\)"
        ],
        "a": 0
      }
    ],
    "solutionSteps": [
      {
        "explanation": "a) 첫 번째 셔츠 \\$70, 나머지 (n-1)개는 \\$55씩이므로: \\(C = 70 + 55(n-1) = 55n + 15\\).",
        "workingOut": "C(n) = 70 + 55(n-1) = 55n + 15",
        "graphData": null
      },
      {
        "explanation": "b(i)) 첫 번째 배달 \\$12, 나머지 (n-1)개는 \\$3씩이므로: \\(D = 12 + 3(n-1) = 3n + 9\\).",
        "workingOut": "D(n) = 3n + 9",
        "graphData": null
      },
      {
        "explanation": "b(ii)) 총 비용 = 구매 + 배달: \\(T = (55n + 15) + (3n + 9) = 58n + 24\\).",
        "workingOut": "T(n) = 58n + 24",
        "graphData": null
      }
    ]
  },

  // ── QUESTION 14 (teacher_review + already MC) ──
  {
    "id": "y11a-3c-q14",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Review of linear graphs",
    "question": "Consider the family of linear equations \\( y = \\frac{1}{3}x + c \\).",
    "subQuestions": [
      {
        "id": "y11a-3c-q14a",
        "type": "teacher_review",
        "question": "a) Sketch on a single coordinate plane the four lines corresponding to: \\( c = -3 \\), \\( c = -1 \\), \\( c = 1 \\), \\( c = 3 \\).",
        "a": "Four parallel straight lines with slope 1/3, crossing the y-axis at -3, -1, 1, and 3."
      },
      {
        "id": "y11a-3c-q14b",
        "type": "multiple_choice",
        "question": "b) What do you notice about all these lines?",
        "opts": [
          "They are all parallel because they share the same gradient of 1/3.",
          "They all intersect at the same point on the x-axis.",
          "They are perpendicular to each other.",
          "They represent the same line."
        ],
        "a": 0
      }
    ],
    "solutionSteps": [
      {
        "explanation": "기울기가 같은 직선들은 서로 평행합니다. 모든 직선의 기울기는 1/3입니다.",
        "workingOut": "m = \\frac{1}{3} \\implies \\text{모두 평행}",
        "graphData": null
      }
    ]
  },

  // ── QUESTION 15 (teacher_review + MC) ──
  {
    "id": "y11a-3c-q15a",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Review of linear graphs",
    "question": "Consider the equation \\( y - 3 = m(x - 2) \\). Sketch on a single coordinate plane the four lines corresponding to: \\( m = 1 \\), \\( m = 2 \\), \\( m = -\\frac{1}{2} \\), \\( m = 0 \\).",
    "a": "Four lines with different slopes (1, 2, -1/2, 0) all passing through the point (2, 3).",
    "solutionSteps": [
      {
        "explanation": "각 기울기 값에 대한 방정식을 구합니다.",
        "workingOut": "m=1: y = x+1, \\quad m=2: y = 2x-1, \\quad m=-0.5: y = -0.5x+4, \\quad m=0: y = 3",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-3c-q15b",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Review of linear graphs",
    "question": "Through which single point do all four lines from \\( y - 3 = m(x - 2) \\) pass, regardless of \\( m \\)?",
    "opts": [
      "\\((2, 3)\\)",
      "\\((0, 3)\\)",
      "\\((2, 0)\\)",
      "\\((0, 0)\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "점 기울기 형태 \\(y - y_1 = m(x - x_1)\\)에서, m에 관계없이 항상 고정점 \\((x_1, y_1)\\)을 지납니다.",
        "workingOut": "y - 3 = m(x - 2) \\implies (x_1, y_1) = (2, 3)",
        "graphData": null
      },
      {
        "explanation": "x = 2, y = 3을 대입하면: LHS = 3 - 3 = 0, RHS = m(2 - 2) = 0. 항상 성립합니다.",
        "workingOut": "0 = m \\cdot 0 = 0 \\implies \\text{항상 참}",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-3c-q15c",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Review of linear graphs",
    "question": "Prove mathematically that the line \\( y - 3 = m(x - 2) \\) must pass through the point \\( (2, 3) \\), regardless of the value of \\( m \\).",
    "a": "Substitute x = 2 and y = 3 into the equation. LHS: 3 - 3 = 0. RHS: m(2 - 2) = m(0) = 0. Since LHS = RHS = 0, the equation is satisfied for any real m.",
    "solutionSteps": [
      {"explanation": "x = 2, y = 3을 방정식에 대입합니다.", "workingOut": "\\text{LHS} = 3 - 3 = 0", "graphData": null},
      {"explanation": "RHS를 계산합니다.", "workingOut": "\\text{RHS} = m(2 - 2) = m(0) = 0", "graphData": null},
      {"explanation": "LHS = RHS = 0이므로 m의 어떤 값에 대해서도 방정식이 성립합니다.", "workingOut": "", "graphData": null}
    ]
  }
];
