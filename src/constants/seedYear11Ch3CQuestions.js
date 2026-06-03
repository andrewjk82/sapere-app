export const Y11_CH3C_QUESTIONS = [
  // ── QUESTION 1 ──
  {
    "id": "y11a-3c-q1a",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Review of linear graphs",
    "question": "For the linear function \\( y = 3x - 3 \\), find the \\( y \\)-intercept by putting \\( x = 0 \\).",
    "a": "-3",
    "solutionSteps": [
      {
        "explanation": "To find the y-intercept, substitute \\( x = 0 \\) into the equation.",
        "workingOut": "y = 3(0) - 3"
      },
      {
        "explanation": "Simplify the expression.",
        "workingOut": "y = -3"
      }
    ]
  },
  {
    "id": "y11a-3c-q1b",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Review of linear graphs",
    "question": "For the linear function \\( y = 3x - 3 \\), find the \\( x \\)-intercept by putting \\( y = 0 \\).",
    "a": "1",
    "solutionSteps": [
      {
        "explanation": "To find the x-intercept, substitute \\( y = 0 \\) into the equation.",
        "workingOut": "0 = 3x - 3"
      },
      {
        "explanation": "Add 3 to both sides and solve for \\( x \\).",
        "workingOut": "3x = 3 \\implies x = 1"
      }
    ]
  },
  {
    "id": "y11a-3c-q1c",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Review of linear graphs",
    "question": "Plot the intercepts \\( (0, -3) \\) and \\( (1, 0) \\) and sketch the line representing \\( y = 3x - 3 \\).",
    "a": "Straight line passing through (0, -3) and (1, 0).",
    "solutionSteps": [
      {
        "explanation": "Locate the intercepts on the coordinate axes.",
        "workingOut": "\\text{y-intercept: } (0, -3), \\quad \\text{x-intercept: } (1, 0)"
      },
      {
        "explanation": "Draw a straight line passing through these two points.",
        "workingOut": ""
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-3, 5, 4, -5],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-2.5,0], [3.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-4.5], [0,4.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [3.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 4.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return 3*x - 3; }], {strokeColor: '#4f46e5', strokeWidth: 1.5});\nboard.create('point', [0, -3], {name: '(0,-3)', visible: true, withLabel: true});\nboard.create('point', [1, 0], {name: '(1,0)', visible: true, withLabel: true});\nboard.unsuspendUpdate();"
      }
    }
  },

  // ── QUESTION 2 ──
  {
    "id": "y11a-3c-q2a",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Review of linear graphs",
    "question": "For the straight line \\( 2x + 3y - 6 = 0 \\), find the \\( y \\)-intercept by putting \\( x = 0 \\).",
    "a": "2",
    "solutionSteps": [
      {
        "explanation": "Substitute \\( x = 0 \\) into the general form equation.",
        "workingOut": "2(0) + 3y - 6 = 0"
      },
      {
        "explanation": "Solve the resulting equation for \\( y \\).",
        "workingOut": "3y = 6 \\implies y = 2"
      }
    ]
  },
  {
    "id": "y11a-3c-q2b",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Review of linear graphs",
    "question": "For the straight line \\( 2x + 3y - 6 = 0 \\), find the \\( x \\)-intercept by putting \\( y = 0 \\).",
    "a": "3",
    "solutionSteps": [
      {
        "explanation": "Substitute \\( y = 0 \\) into the equation.",
        "workingOut": "2x + 3(0) - 6 = 0"
      },
      {
        "explanation": "Solve for \\( x \\).",
        "workingOut": "2x = 6 \\implies x = 3"
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
        "explanation": "Locate the intercepts on the coordinate axes.",
        "workingOut": "\\text{y-intercept: } (0, 2), \\quad \\text{x-intercept: } (3, 0)"
      },
      {
        "explanation": "Draw a straight line passing through these two points.",
        "workingOut": ""
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-2, 5, 5, -3],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-1.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-2.5], [0,4.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 4.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return (6 - 2*x)/3; }], {strokeColor: '#4f46e5', strokeWidth: 1.5});\nboard.create('point', [0, 2], {name: '(0,2)', visible: true, withLabel: true});\nboard.create('point', [3, 0], {name: '(3,0)', visible: true, withLabel: true});\nboard.unsuspendUpdate();"
      }
    }
  },

  // ── QUESTION 3 ──
  {
    "id": "y11a-3c-q3a",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Review of linear graphs",
    "question": "Find the intercepts and sketch the line for the equation \\( y = x + 2 \\).",
    "a": "x-intercept: (-2, 0), y-intercept: (0, 2).",
    "solutionSteps": [
      {
        "explanation": "Find the y-intercept by putting \\( x = 0 \\).",
        "workingOut": "y = 0 + 2 = 2 \\implies (0, 2)"
      },
      {
        "explanation": "Find the x-intercept by putting \\( y = 0 \\).",
        "workingOut": "0 = x + 2 \\implies x = -2 \\implies (-2, 0)"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-4, 5, 3, -3],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-3.5,0], [2.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-2.5], [0,4.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [2.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 4.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return x + 2; }], {strokeColor: '#4f46e5', strokeWidth: 1.5});\nboard.create('point', [0, 2], {name: '(0,2)', visible: true});\nboard.create('point', [-2, 0], {name: '(-2,0)', visible: true});\nboard.unsuspendUpdate();"
      }
    }
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
      {
        "explanation": "Find the y-intercept by substituting \\( x = 0 \\).",
        "workingOut": "y = 6 - 3(0) = 6 \\implies (0, 6)"
      },
      {
        "explanation": "Find the x-intercept by substituting \\( y = 0 \\).",
        "workingOut": "0 = 6 - 3x \\implies 3x = 6 \\implies x = 2 \\implies (2, 0)"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-2, 8, 5, -2],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-1.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-1.5], [0,7.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 7.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return 6 - 3*x; }], {strokeColor: '#4f46e5', strokeWidth: 1.5});\nboard.create('point', [0, 6], {name: '(0,6)', visible: true});\nboard.create('point', [2, 0], {name: '(2,0)', visible: true});\nboard.unsuspendUpdate();"
      }
    }
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
      {
        "explanation": "Find the y-intercept by substituting \\( x = 0 \\).",
        "workingOut": "y = 0.5(0) - 2 = -2 \\implies (0, -2)"
      },
      {
        "explanation": "Find the x-intercept by substituting \\( y = 0 \\).",
        "workingOut": "0 = 0.5x - 2 \\implies 0.5x = 2 \\implies x = 4 \\implies (4, 0)"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-2, 3, 6, -4],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-1.5,0], [5.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.5], [0,2.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [5.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 2.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return 0.5*x - 2; }], {strokeColor: '#4f46e5', strokeWidth: 1.5});\nboard.create('point', [0, -2], {name: '(0,-2)', visible: true});\nboard.create('point', [4, 0], {name: '(4,0)', visible: true});\nboard.unsuspendUpdate();"
      }
    }
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
      {
        "explanation": "Substitute \\( x = 0 \\) to find the y-intercept.",
        "workingOut": "0 + y - 2 = 0 \\implies y = 2 \\implies (0, 2)"
      },
      {
        "explanation": "Substitute \\( y = 0 \\) to find the x-intercept.",
        "workingOut": "x + 0 - 2 = 0 \\implies x = 2 \\implies (2, 0)"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-2, 4, 4, -2],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-1.5,0], [3.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-1.5], [0,3.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [3.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 3.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return 2 - x; }], {strokeColor: '#4f46e5', strokeWidth: 1.5});\nboard.create('point', [0, 2], {name: '(0,2)', visible: true});\nboard.create('point', [2, 0], {name: '(2,0)', visible: true});\nboard.unsuspendUpdate();"
      }
    }
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
      {
        "explanation": "Find the y-intercept by substituting \\( x = 0 \\).",
        "workingOut": "3(0) - y + 3 = 0 \\implies y = 3 \\implies (0, 3)"
      },
      {
        "explanation": "Find the x-intercept by substituting \\( y = 0 \\).",
        "workingOut": "3x - 0 + 3 = 0 \\implies 3x = -3 \\implies x = -1 \\implies (-1, 0)"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-3, 5, 2, -2],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-2.5,0], [1.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-1.5], [0,4.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [1.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 4.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return 3*x + 3; }], {strokeColor: '#4f46e5', strokeWidth: 1.5});\nboard.create('point', [0, 3], {name: '(0,3)', visible: true});\nboard.create('point', [-1, 0], {name: '(-1,0)', visible: true});\nboard.unsuspendUpdate();"
      }
    }
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
      {
        "explanation": "Substitute \\( x = 0 \\) to find the y-intercept.",
        "workingOut": "0 - 2y - 4 = 0 \\implies -2y = 4 \\implies y = -2 \\implies (0, -2)"
      },
      {
        "explanation": "Substitute \\( y = 0 \\) to find the x-intercept.",
        "workingOut": "x - 2(0) - 4 = 0 \\implies x = 4 \\implies (4, 0)"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-2, 3, 6, -4],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-1.5,0], [5.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.5], [0,2.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [5.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 2.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return 0.5*x - 2; }], {strokeColor: '#4f46e5', strokeWidth: 1.5});\nboard.create('point', [0, -2], {name: '(0,-2)', visible: true});\nboard.create('point', [4, 0], {name: '(4,0)', visible: true});\nboard.unsuspendUpdate();"
      }
    }
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
      {
        "explanation": "Substitute \\( x = 0 \\) to find the y-intercept.",
        "workingOut": "3(0) - 2y - 12 = 0 \\implies -2y = 12 \\implies y = -6 \\implies (0, -6)"
      },
      {
        "explanation": "Substitute \\( y = 0 \\) to find the x-intercept.",
        "workingOut": "3x - 2(0) - 12 = 0 \\implies 3x = 12 \\implies x = 4 \\implies (4, 0)"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-2, 3, 6, -8],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-1.5,0], [5.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-7.5], [0,2.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [5.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 2.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return 1.5*x - 6; }], {strokeColor: '#4f46e5', strokeWidth: 1.5});\nboard.create('point', [0, -6], {name: '(0,-6)', visible: true});\nboard.create('point', [4, 0], {name: '(4,0)', visible: true});\nboard.unsuspendUpdate();"
      }
    }
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
      {
        "explanation": "Substitute \\( x = 0 \\) to find the y-intercept.",
        "workingOut": "0 + 3y + 6 = 0 \\implies 3y = -6 \\implies y = -2 \\implies (0, -2)"
      },
      {
        "explanation": "Substitute \\( y = 0 \\) to find the x-intercept.",
        "workingOut": "x + 3(0) + 6 = 0 \\implies x = -6 \\implies (-6, 0)"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-8, 2, 2, -4],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-7.5,0], [1.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.5], [0,1.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [1.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 1.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return (-x - 6)/3; }], {strokeColor: '#4f46e5', strokeWidth: 1.5});\nboard.create('point', [0, -2], {name: '(0,-2)', visible: true});\nboard.create('point', [-6, 0], {name: '(-6,0)', visible: true});\nboard.unsuspendUpdate();"
      }
    }
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
      {
        "explanation": "Substitute \\( x = 0 \\) to find the y-intercept.",
        "workingOut": "4(0) + 3y - 12 = 0 \\implies 3y = 12 \\implies y = 4 \\implies (0, 4)"
      },
      {
        "explanation": "Substitute \\( y = 0 \\) to find the x-intercept.",
        "workingOut": "4x + 3(0) - 12 = 0 \\implies 4x = 12 \\implies x = 3 \\implies (3, 0)"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-2, 6, 5, -2],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-1.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-1.5], [0,5.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 5.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return (12 - 4*x)/3; }], {strokeColor: '#4f46e5', strokeWidth: 1.5});\nboard.create('point', [0, 4], {name: '(0,4)', visible: true});\nboard.create('point', [3, 0], {name: '(3,0)', visible: true});\nboard.unsuspendUpdate();"
      }
    }
  },

  // ── QUESTION 4 ──
  {
    "id": "y11a-3c-q4a",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Review of linear graphs",
    "question": "A linear function has the equation \\( y = -3x \\). Show that the \\( x \\)-intercept and the \\( y \\)-intercept are both zero.",
    "a": "Putting x = 0 gives y = 0. Putting y = 0 gives 3x = 0 => x = 0. Thus, both intercepts are (0, 0).",
    "solutionSteps": [
      {
        "explanation": "Find the y-intercept by substituting \\( x = 0 \\).",
        "workingOut": "y = -3(0) = 0 \\implies (0, 0)"
      },
      {
        "explanation": "Find the x-intercept by substituting \\( y = 0 \\).",
        "workingOut": "0 = -3x \\implies x = 0 \\implies (0, 0)"
      }
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
      {
        "explanation": "Substitute \\( x = 1 \\) into the equation.",
        "workingOut": "y = -3(1) = -3 \\implies \\text{point: } (1, -3)"
      },
      {
        "explanation": "Draw the straight line that passes through the origin \\( (0, 0) \\) and the second point \\( (1, -3) \\).",
        "workingOut": ""
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-3, 5, 3, -5],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-2.5,0], [2.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-4.5], [0,4.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [2.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 4.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return -3*x; }], {strokeColor: '#4f46e5', strokeWidth: 1.5});\nboard.create('point', [0, 0], {name: '(0,0)', visible: true});\nboard.create('point', [1, -3], {name: '(1,-3)', visible: true});\nboard.unsuspendUpdate();"
      }
    }
  },

  // ── QUESTION 5 ──
  {
    "id": "y11a-3c-q5a",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Review of linear graphs",
    "question": "Sketch the graph of the line \\( y = 2x \\). Indicate the origin and another point on the line.",
    "a": "Line passing through (0, 0) and (1, 2).",
    "solutionSteps": [
      {
        "explanation": "The line passes through the origin since there is no constant term.",
        "workingOut": "y = 2(0) = 0 \\implies (0, 0)"
      },
      {
        "explanation": "Find a second point by letting \\( x = 1 \\).",
        "workingOut": "y = 2(1) = 2 \\implies (1, 2)"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-3, 4, 3, -4],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-2.5,0], [2.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.5], [0,3.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [2.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 3.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return 2*x; }], {strokeColor: '#4f46e5', strokeWidth: 1.5});\nboard.create('point', [0, 0], {name: '(0,0)', visible: true});\nboard.create('point', [1, 2], {name: '(1,2)', visible: true});\nboard.unsuspendUpdate();"
      }
    }
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
      {
        "explanation": "The line has a y-intercept of 0.",
        "workingOut": "y = 4(0) = 0 \\implies (0, 0)"
      },
      {
        "explanation": "Evaluate the function at \\( x = 1 \\) to get a second point.",
        "workingOut": "y = 4(1) = 4 \\implies (1, 4)"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-2, 6, 2, -6],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-1.5,0], [1.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-5.5], [0,5.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [1.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 5.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return 4*x; }], {strokeColor: '#4f46e5', strokeWidth: 1.5});\nboard.create('point', [0, 0], {name: '(0,0)', visible: true});\nboard.create('point', [1, 4], {name: '(1,4)', visible: true});\nboard.unsuspendUpdate();"
      }
    }
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
      {
        "explanation": "The line passes through the origin.",
        "workingOut": "(0, 0)"
      },
      {
        "explanation": "Evaluate at \\( x = 1 \\) to get the second point.",
        "workingOut": "y = -5(1) = -5 \\implies (1, -5)"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-2, 6, 2, -6],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-1.5,0], [1.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-5.5], [0,5.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [1.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 5.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return -5*x; }], {strokeColor: '#4f46e5', strokeWidth: 1.5});\nboard.create('point', [0, 0], {name: '(0,0)', visible: true});\nboard.create('point', [1, -5], {name: '(1,-5)', visible: true});\nboard.unsuspendUpdate();"
      }
    }
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
      {
        "explanation": "Solve the equation for \\( y \\).",
        "workingOut": "2y = -x \\implies y = -\\frac{1}{2}x"
      },
      {
        "explanation": "Let \\( x = 2 \\) to find a coordinate point with integer coordinates.",
        "workingOut": "y = -0.5(2) = -1 \\implies (2, -1)"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-4, 3, 4, -3],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-3.5,0], [3.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-2.5], [0,2.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [3.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 2.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return -0.5*x; }], {strokeColor: '#4f46e5', strokeWidth: 1.5});\nboard.create('point', [0, 0], {name: '(0,0)', visible: true});\nboard.create('point', [2, -1], {name: '(2,-1)', visible: true});\nboard.unsuspendUpdate();"
      }
    }
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
      {
        "explanation": "Rearrange to make \\( y \\) the subject.",
        "workingOut": "3y = x \\implies y = \\frac{1}{3}x"
      },
      {
        "explanation": "Let \\( x = 3 \\) to calculate a point with integer coordinates.",
        "workingOut": "y = \\frac{1}{3}(3) = 1 \\implies (3, 1)"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-5, 3, 5, -3],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-4.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-2.5], [0,2.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 2.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return x/3; }], {strokeColor: '#4f46e5', strokeWidth: 1.5});\nboard.create('point', [0, 0], {name: '(0,0)', visible: true});\nboard.create('point', [3, 1], {name: '(3,1)', visible: true});\nboard.unsuspendUpdate();"
      }
    }
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
      {
        "explanation": "Solve the equation for \\( y \\).",
        "workingOut": "3y = -2x \\implies y = -\\frac{2}{3}x"
      },
      {
        "explanation": "Let \\( x = 3 \\) to compute the coordinates of a second point.",
        "workingOut": "y = -\\frac{2}{3}(3) = -2 \\implies (3, -2)"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-5, 4, 5, -4],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-4.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.5], [0,3.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 3.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return (-2*x)/3; }], {strokeColor: '#4f46e5', strokeWidth: 1.5});\nboard.create('point', [0, 0], {name: '(0,0)', visible: true});\nboard.create('point', [3, -2], {name: '(3,-2)', visible: true});\nboard.unsuspendUpdate();"
      }
    }
  },

  // ── QUESTION 6 ──
  {
    "id": "y11a-3c-q6a",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Review of linear graphs",
    "question": "Graph the function \\( y = f(x) \\) where \\( f(x) = -2x - 4 \\). Show the intercepts with the axes.",
    "a": "Line with y-intercept (0, -4) and x-intercept (-2, 0).",
    "solutionSteps": [
      {
        "explanation": "Find the y-intercept by putting \\( x = 0 \\).",
        "workingOut": "f(0) = -2(0) - 4 = -4 \\implies (0, -4)"
      },
      {
        "explanation": "Find the x-intercept by setting \\( f(x) = 0 \\).",
        "workingOut": "-2x - 4 = 0 \\implies 2x = -4 \\implies x = -2 \\implies (-2, 0)"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-4, 3, 3, -6],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-3.5,0], [2.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-5.5], [0,2.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [2.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 2.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return -2*x - 4; }], {strokeColor: '#4f46e5', strokeWidth: 1.5});\nboard.create('point', [0, -4], {name: '(0,-4)', visible: true});\nboard.create('point', [-2, 0], {name: '(-2,0)', visible: true});\nboard.unsuspendUpdate();"
      }
    }
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
      {
        "explanation": "Find the y-intercept by putting \\( x = 0 \\).",
        "workingOut": "f(0) = -1 \\implies (0, -1)"
      },
      {
        "explanation": "Find the x-intercept by setting \\( f(x) = 0 \\).",
        "workingOut": "\\frac{1}{3}x - 1 = 0 \\implies \\frac{1}{3}x = 1 \\implies x = 3 \\implies (3, 0)"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-2, 3, 5, -3],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-1.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-2.5], [0,2.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 2.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return x/3 - 1; }], {strokeColor: '#4f46e5', strokeWidth: 1.5});\nboard.create('point', [0, -1], {name: '(0,-1)', visible: true});\nboard.create('point', [3, 0], {name: '(3,0)', visible: true});\nboard.unsuspendUpdate();"
      }
    }
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
      {
        "explanation": "Since there is no constant term, the line passes through the origin.",
        "workingOut": "(0, 0)"
      },
      {
        "explanation": "Choose \\( x = 3 \\) to find a second point with integer coordinates.",
        "workingOut": "f(3) = -\\frac{1}{3}(3) = -1 \\implies (3, -1)"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-5, 3, 5, -3],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-4.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-2.5], [0,2.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 2.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return -x/3; }], {strokeColor: '#4f46e5', strokeWidth: 1.5});\nboard.create('point', [0, 0], {name: '(0,0)', visible: true});\nboard.create('point', [3, -1], {name: '(3,-1)', visible: true});\nboard.unsuspendUpdate();"
      }
    }
  },

  // ── QUESTION 7 ──
  {
    "id": "y11a-3c-q7a",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Review of linear graphs",
    "question": "Sketch the vertical line \\( x = 2 \\).",
    "a": "Vertical line passing through (2, 0).",
    "solutionSteps": [
      {
        "explanation": "The equation represents all points where the x-coordinate is 2.",
        "workingOut": "\\text{Line is } x = 2"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-2, 4, 5, -4],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-1.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.5], [0,3.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 3.2, 'y'], {fontSize: 14});\nboard.create('line', [[2, -4], [2, 4]], {strokeColor: '#4f46e5', strokeWidth: 1.5});\nboard.create('point', [2, 0], {name: '2', visible: true});\nboard.unsuspendUpdate();"
      }
    }
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
      {
        "explanation": "The equation represents all points where the y-coordinate is 3.",
        "workingOut": "\\text{Line is } y = 3"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-4, 5, 4, -2],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-3.5,0], [3.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-1.5], [0,4.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [3.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 4.2, 'y'], {fontSize: 14});\nboard.create('line', [[-4, 3], [4, 3]], {strokeColor: '#4f46e5', strokeWidth: 1.5});\nboard.create('point', [0, 3], {name: '3', visible: true});\nboard.unsuspendUpdate();"
      }
    }
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
      {
        "explanation": "The equation represents all points where the x-coordinate is -3.",
        "workingOut": "\\text{Line is } x = -3"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-5, 4, 2, -4],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-4.5,0], [1.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.5], [0,3.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [1.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 3.2, 'y'], {fontSize: 14});\nboard.create('line', [[-3, -4], [-3, 4]], {strokeColor: '#4f46e5', strokeWidth: 1.5});\nboard.create('point', [-3, 0], {name: '-3', visible: true});\nboard.unsuspendUpdate();"
      }
    }
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
      {
        "explanation": "The equation represents a horizontal line passing through \\( (0, -2) \\).",
        "workingOut": "\\text{Line is } y = -2"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-4, 2, 4, -4],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-3.5,0], [3.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.5], [0,1.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [3.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 1.2, 'y'], {fontSize: 14});\nboard.create('line', [[-4, -2], [4, -2]], {strokeColor: '#4f46e5', strokeWidth: 1.5});\nboard.create('point', [0, -2], {name: '-2', visible: true});\nboard.unsuspendUpdate();"
      }
    }
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
      {
        "explanation": "Solve the equation for \\( y \\).",
        "workingOut": "y = -\\frac{5}{2} = -2.5"
      },
      {
        "explanation": "This represents a horizontal line passing through \\( (0, -2.5) \\).",
        "workingOut": ""
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-4, 2, 4, -5],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-3.5,0], [3.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-4.5], [0,1.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [3.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 1.2, 'y'], {fontSize: 14});\nboard.create('line', [[-4, -2.5], [4, -2.5]], {strokeColor: '#4f46e5', strokeWidth: 1.5});\nboard.create('point', [0, -2.5], {name: '-2.5', visible: true});\nboard.unsuspendUpdate();"
      }
    }
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
      {
        "explanation": "Solve the equation for \\( x \\).",
        "workingOut": "x = \\frac{4}{3} \\approx 1.33"
      },
      {
        "explanation": "This represents a vertical line passing through \\( (\\frac{4}{3}, 0) \\).",
        "workingOut": ""
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-2, 4, 4, -4],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-1.5,0], [3.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.5], [0,3.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [3.5, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 3.2, 'y'], {fontSize: 14});\nboard.create('line', [[4/3, -4], [4/3, 4]], {strokeColor: '#4f46e5', strokeWidth: 1.5});\nboard.create('point', [4/3, 0], {name: '4/3', visible: true});\nboard.unsuspendUpdate();"
      }
    }
  },

  // ── QUESTION 8 (subQuestions) ──
  {
    "id": "y11a-3c-q8",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Review of linear graphs",
    "question": "Analyze the vertical and horizontal lines sketched in the previous question (representing lines of the form \\( x=2 \\), \\( y=3 \\), \\( x=-3 \\), \\( y=-2 \\), \\( y=-2.5 \\), \\( x=4/3 \\)).",
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
        "a": "The vertical lines (x = 2, x = -3, and 3x = 4)"
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
        "explanation": "For part a, vertical lines fail the vertical line test because a vertical line drawn on top of them intersects the graph at infinitely many points.",
        "workingOut": ""
      },
      {
        "explanation": "For part b, on any line \\( x = k \\), every point has the format \\( (k, y) \\). We can choose any two different y-coordinates.",
        "workingOut": "\\text{For } x = 2 \\implies (2, 1) \\text{ and } (2, 5)"
      }
    ]
  },

  // ── QUESTION 9 ──
  {
    "id": "y11a-3c-q9a",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Review of linear graphs",
    "question": "Solve the equation \\( x + y - 2 = 0 \\) for \\( y \\) and write it in function notation.",
    "a": "f(x) = -x + 2",
    "solutionSteps": [
      {
        "explanation": "Isolate \\( y \\) on the left-hand side of the equation.",
        "workingOut": "y = -x + 2"
      },
      {
        "explanation": "Replace \\( y \\) with \\( f(x) \\).",
        "workingOut": "f(x) = -x + 2"
      }
    ]
  },
  {
    "id": "y11a-3c-q9b",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Review of linear graphs",
    "question": "Solve the equation \\( 3x - y + 3 = 0 \\) for \\( y \\) and write it in function notation.",
    "a": "f(x) = 3x + 3",
    "solutionSteps": [
      {
        "explanation": "Add \\( y \\) to both sides to solve for \\( y \\).",
        "workingOut": "3x + 3 = y \\implies y = 3x + 3"
      },
      {
        "explanation": "Write in function notation \\( f(x) \\).",
        "workingOut": "f(x) = 3x + 3"
      }
    ]
  },
  {
    "id": "y11a-3c-q9c",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Review of linear graphs",
    "question": "Solve the equation \\( x - 2y - 4 = 0 \\) for \\( y \\) and write it in function notation.",
    "a": "f(x) = 0.5x - 2",
    "solutionSteps": [
      {
        "explanation": "Isolate the \\( 2y \\) term.",
        "workingOut": "2y = x - 4"
      },
      {
        "explanation": "Divide all terms by 2.",
        "workingOut": "y = \\frac{1}{2}x - 2 = 0.5x - 2"
      },
      {
        "explanation": "Convert to function notation.",
        "workingOut": "f(x) = 0.5x - 2"
      }
    ]
  },
  {
    "id": "y11a-3c-q9d",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Review of linear graphs",
    "question": "Solve the equation \\( 3x - 2y - 12 = 0 \\) for \\( y \\) and write it in function notation.",
    "a": "f(x) = 1.5x - 6",
    "solutionSteps": [
      {
        "explanation": "Isolate \\( 2y \\).",
        "workingOut": "2y = 3x - 12"
      },
      {
        "explanation": "Divide by 2.",
        "workingOut": "y = 1.5x - 6"
      },
      {
        "explanation": "Write in function notation.",
        "workingOut": "f(x) = 1.5x - 6"
      }
    ]
  },
  {
    "id": "y11a-3c-q9e",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Review of linear graphs",
    "question": "Solve the equation \\( x + 3y + 6 = 0 \\) for \\( y \\) and write it in function notation.",
    "a": "f(x) = -1/3*x - 2",
    "solutionSteps": [
      {
        "explanation": "Isolate the y term.",
        "workingOut": "3y = -x - 6"
      },
      {
        "explanation": "Divide by 3.",
        "workingOut": "y = -\\frac{1}{3}x - 2"
      },
      {
        "explanation": "Write in function notation.",
        "workingOut": "f(x) = -\\frac{1}{3}x - 2"
      }
    ]
  },
  {
    "id": "y11a-3c-q9f",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Review of linear graphs",
    "question": "Solve the equation \\( 4x + 3y - 12 = 0 \\) for \\( y \\) and write it in function notation.",
    "a": "f(x) = -4/3*x + 4",
    "solutionSteps": [
      {
        "explanation": "Isolate the y term.",
        "workingOut": "3y = -4x + 12"
      },
      {
        "explanation": "Divide by 3.",
        "workingOut": "y = -\\frac{4}{3}x + 4"
      },
      {
        "explanation": "Write in function notation.",
        "workingOut": "f(x) = -\\frac{4}{3}x + 4"
      }
    ]
  },

  // ── QUESTION 10 ──
  {
    "id": "y11a-3c-q10a",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Review of linear graphs",
    "question": "Determine whether the point \\( (4, 2) \\) lies on the line \\( y = x - 2 \\). (Write 'Yes' or 'No')",
    "a": "Yes",
    "solutionSteps": [
      {
        "explanation": "Substitute \\( x = 4 \\) and \\( y = 2 \\) into the equation.",
        "workingOut": "\\text{LHS} = 2, \\quad \\text{RHS} = 4 - 2 = 2"
      },
      {
        "explanation": "Since LHS = RHS, the point lies on the line.",
        "workingOut": ""
      }
    ]
  },
  {
    "id": "y11a-3c-q10b",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Review of linear graphs",
    "question": "Determine whether the point \\( (6, 5) \\) lies on the line \\( y = 17 - 2x \\). (Write 'Yes' or 'No')",
    "a": "Yes",
    "solutionSteps": [
      {
        "explanation": "Substitute \\( x = 6 \\) and \\( y = 5 \\) into the equation.",
        "workingOut": "\\text{LHS} = 5, \\quad \\text{RHS} = 17 - 2(6) = 17 - 12 = 5"
      },
      {
        "explanation": "LHS = RHS, so the point lies on the line.",
        "workingOut": ""
      }
    ]
  },
  {
    "id": "y11a-3c-q10c",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Review of linear graphs",
    "question": "Determine whether the point \\( (2, -3) \\) lies on the line \\( y = -4x + 5 \\). (Write 'Yes' or 'No')",
    "a": "Yes",
    "solutionSteps": [
      {
        "explanation": "Substitute \\( x = 2 \\) and \\( y = -3 \\) into the equation.",
        "workingOut": "\\text{LHS} = -3, \\quad \\text{RHS} = -4(2) + 5 = -8 + 5 = -3"
      },
      {
        "explanation": "Since LHS = RHS, the statement is true.",
        "workingOut": ""
      }
    ]
  },
  {
    "id": "y11a-3c-q10d",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Review of linear graphs",
    "question": "Determine whether the point \\( (-4, 2) \\) lies on the line \\( 3x + 4y + 4 = 0 \\). (Write 'Yes' or 'No')",
    "a": "Yes",
    "solutionSteps": [
      {
        "explanation": "Substitute the point into the equation.",
        "workingOut": "\\text{LHS} = 3(-4) + 4(2) + 4 = -12 + 8 + 4 = 0"
      },
      {
        "explanation": "Since LHS = 0, the point lies on the line.",
        "workingOut": ""
      }
    ]
  },
  {
    "id": "y11a-3c-q10e",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Review of linear graphs",
    "question": "Determine whether the point \\( (-2, -5) \\) lies on the line \\( 2x - 3y - 11 = 0 \\). (Write 'Yes' or 'No')",
    "a": "Yes",
    "solutionSteps": [
      {
        "explanation": "Substitute \\( x = -2 \\) and \\( y = -5 \\) into the equation.",
        "workingOut": "\\text{LHS} = 2(-2) - 3(-5) - 11 = -4 + 15 - 11 = 0"
      },
      {
        "explanation": "LHS matches the RHS (0), so it lies on the line.",
        "workingOut": ""
      }
    ]
  },
  {
    "id": "y11a-3c-q10f",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Review of linear graphs",
    "question": "Determine whether the point \\( (-5, -3) \\) lies on the line \\( 3x - 5y = 0 \\). (Write 'Yes' or 'No')",
    "a": "Yes",
    "solutionSteps": [
      {
        "explanation": "Substitute \\( x = -5 \\) and \\( y = -3 \\) into the equation.",
        "workingOut": "\\text{LHS} = 3(-5) - 5(-3) = -15 + 15 = 0"
      },
      {
        "explanation": "The coordinates satisfy the equation.",
        "workingOut": ""
      }
    ]
  },

  // ── QUESTION 11 ──
  {
    "id": "y11a-3c-q11a",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Review of linear graphs",
    "question": "On a single set of coordinate axes, graph the two lines \\( x + y = 6 \\) and \\( x - y = 2 \\).",
    "a": "Two straight lines intersecting at (4, 2).",
    "solutionSteps": [
      {
        "explanation": "Graph the first line \\( x + y = 6 \\) using its intercepts: \\( (0, 6) \\) and \\( (6, 0) \\).",
        "workingOut": ""
      },
      {
        "explanation": "Graph the second line \\( x - y = 2 \\) using its intercepts: \\( (0, -2) \\) and \\( (2, 0) \\).",
        "workingOut": ""
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-2, 8, 8, -4],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-1.5,0], [7.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.5], [0,7.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [7.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 7.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return 6 - x; }], {strokeColor: '#4f46e5', strokeWidth: 1.5});\nboard.create('functiongraph', [function(x){ return x - 2; }], {strokeColor: '#f43f5e', strokeWidth: 1.5});\nboard.create('point', [4, 2], {name: '(4,2)', visible: true});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y11a-3c-q11b",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Review of linear graphs",
    "question": "From your graph of \\( x + y = 6 \\) and \\( x - y = 2 \\), read off the coordinates of the point of intersection.",
    "a": "(4, 2)",
    "solutionSteps": [
      {
        "explanation": "Look at the intersection of the two lines on the graph.",
        "workingOut": "\\text{Intersection occurs at } x = 4, y = 2"
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
      {
        "explanation": "Add the two simultaneous equations together to eliminate \\( y \\).",
        "workingOut": "(x + y) + (x - y) = 6 + 2 \\implies 2x = 8 \\implies x = 4"
      },
      {
        "explanation": "Substitute \\( x = 4 \\) back into the first equation.",
        "workingOut": "4 + y = 6 \\implies y = 2"
      },
      {
        "explanation": "State the final coordinates.",
        "workingOut": "\\text{Intersection is } (4, 2)"
      }
    ]
  },

  // ── QUESTION 12 (subQuestions) ──
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
        "type": "short_answer",
        "question": "a) Find the intersection of \\( x + y = 3 \\) and \\( x - y = -5 \\). (Format: '(x, y)' e.g. '(1, 2)')",
        "a": "(-1, 4)"
      },
      {
        "id": "y11a-3c-q12b",
        "type": "short_answer",
        "question": "b) Find the intersection of \\( x - y = 4 \\) and \\( 3x + y = 0 \\). (Format: '(x, y)')",
        "a": "(1, -3)"
      },
      {
        "id": "y11a-3c-q12c",
        "type": "short_answer",
        "question": "c) Find the intersection of \\( x + 3y = -5 \\) and \\( 3x - y = -5 \\). (Format: '(x, y)')",
        "a": "(-2, -1)"
      }
    ],
    "solutionSteps": [
      {
        "explanation": "For part a, add the two equations.",
        "workingOut": "2x = 3 - 5 = -2 \\implies x = -1 \\\\\n-1 + y = 3 \\implies y = 4 \\implies (-1, 4)"
      },
      {
        "explanation": "For part b, add the equations.",
        "workingOut": "4x = 4 \\implies x = 1 \\\\\n1 - y = 4 \\implies y = -3 \\implies (1, -3)"
      },
      {
        "explanation": "For part c, multiply the second equation by 3 and add to the first.",
        "workingOut": "\\begin{aligned} x + 3y &= -5 \\\\ 9x - 3y &= -15 \\\\ \\text{Add: } 10x &= -20 \\implies x = -2 \\\\ -2 + 3y &= -5 \\implies 3y = -3 \\implies y = -1 \\implies (-2, -1) \\end{aligned}"
      }
    ]
  },

  // ── QUESTION 13 (subQuestions) ──
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
        "type": "short_answer",
        "question": "a) Find an expression for the cost \\( C \\) in dollars of buying \\( n \\) shirts. (Write as a simplified linear function, e.g. 'C = 55n + 15')",
        "a": "C = 55n + 15"
      },
      {
        "id": "y11a-3c-q13bi",
        "type": "short_answer",
        "question": "b) (i) Delivery costs \\( \\$12 \\) for one shirt and \\( \\$3 \\) for each subsequent shirt. Find the cost \\( D \\) in dollars of delivering \\( n \\) shirts.",
        "a": "D = 3n + 9"
      },
      {
        "id": "y11a-3c-q13bii",
        "type": "short_answer",
        "question": "b) (ii) Find the total cost \\( T \\) in dollars of buying and delivering \\( n \\) shirts.",
        "a": "T = 58n + 24"
      }
    ],
    "solutionSteps": [
      {
        "explanation": "For part a, the first shirt costs \\( \\$70 \\) and the remaining \\( n-1 \\) shirts cost \\( \\$55 \\) each.",
        "workingOut": "C(n) = 70 + 55(n-1) = 70 + 55n - 55 = 55n + 15"
      },
      {
        "explanation": "For part b(i), delivery is \\( \\$12 \\) for the first and \\( \\$3 \\) for the remaining \\( n-1 \\).",
        "workingOut": "D(n) = 12 + 3(n-1) = 12 + 3n - 3 = 3n + 9"
      },
      {
        "explanation": "For part b(ii), total cost is the sum of the purchase cost and the delivery cost.",
        "workingOut": "T(n) = C(n) + D(n) = (55n + 15) + (3n + 9) = 58n + 24"
      }
    ]
  },

  // ── QUESTION 14 (subQuestions) ──
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
        "a": "They are all parallel because they share the same gradient of 1/3."
      }
    ],
    "solutionSteps": [
      {
        "explanation": "For part a, sketch lines with the equation \\( y = \\frac{1}{3}x + c \\) for \\( c \\in \\{-3, -1, 1, 3\\} \\). Each line has gradient \\( m = \\frac{1}{3} \\) and y-intercept \\( c \\).",
        "workingOut": ""
      },
      {
        "explanation": "For part b, since the slope coefficient \\( m = \\frac{1}{3} \\) is identical for all lines, the lines are parallel to each other.",
        "workingOut": ""
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 400,
        "height": 300,
        "boundingbox": [-5, 6, 5, -6],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-4.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-5.5], [0,5.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 5.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return x/3 - 3; }], {strokeColor: '#4f46e5', strokeWidth: 1.2});\nboard.create('functiongraph', [function(x){ return x/3 - 1; }], {strokeColor: '#8b5cf6', strokeWidth: 1.2});\nboard.create('functiongraph', [function(x){ return x/3 + 1; }], {strokeColor: '#10b981', strokeWidth: 1.2});\nboard.create('functiongraph', [function(x){ return x/3 + 3; }], {strokeColor: '#f43f5e', strokeWidth: 1.2});\nboard.unsuspendUpdate();"
      }
    }
  },

  // ── QUESTION 15 ──
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
        "explanation": "Evaluate the equation for each slope.",
        "workingOut": "\\begin{aligned} m=1 \\implies y - 3 &= x - 2 \\implies y = x + 1 \\\\ m=2 \\implies y - 3 &= 2x - 4 \\implies y = 2x - 1 \\\\ m=-0.5 \\implies y - 3 &= -0.5x + 1 \\implies y = -0.5x + 4 \\\\ m=0 \\implies y - 3 &= 0 \\implies y = 3 \\end{aligned}"
      },
      {
        "explanation": "Plot these four equations on the grid.",
        "workingOut": ""
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 400,
        "height": 300,
        "boundingbox": [-2, 8, 6, -2],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-1.5,0], [5.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-1.5], [0,7.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [5.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 7.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return x + 1; }], {strokeColor: '#4f46e5', strokeWidth: 1.2});\nboard.create('functiongraph', [function(x){ return 2*x - 1; }], {strokeColor: '#8b5cf6', strokeWidth: 1.2});\nboard.create('functiongraph', [function(x){ return -0.5*x + 4; }], {strokeColor: '#10b981', strokeWidth: 1.2});\nboard.create('functiongraph', [function(x){ return 3; }], {strokeColor: '#f43f5e', strokeWidth: 1.2});\nboard.create('point', [2, 3], {name: '(2,3)', visible: true});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y11a-3c-q15b",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Review of linear graphs",
    "question": "Identify the single point on the coordinate plane through which all four lines from \\( y - 3 = m(x - 2) \\) pass. (Format: '(x, y)')",
    "a": "(2, 3)",
    "solutionSteps": [
      {
        "explanation": "Looking at the point-slope form \\( y - y_1 = m(x - x_1) \\), the line always passes through the fixed point \\( (x_1, y_1) \\) regardless of \\( m \\).",
        "workingOut": "y - 3 = m(x - 2) \\implies (x_1, y_1) = (2, 3)"
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
      {
        "explanation": "Substitute \\( x = 2 \\) and \\( y = 3 \\) into the equation.",
        "workingOut": "\\text{LHS} = 3 - 3 = 0"
      },
      {
        "explanation": "Evaluate the right-hand side.",
        "workingOut": "\\text{RHS} = m(2 - 2) = m(0) = 0"
      },
      {
        "explanation": "Since LHS = RHS = 0 holds true for any value of \\( m \\), the line must always contain the point \\( (2, 3) \\).",
        "workingOut": ""
      }
    ]
  }
];
