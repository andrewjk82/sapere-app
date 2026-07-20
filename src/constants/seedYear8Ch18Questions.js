export const Y8_CH18A_QUESTIONS = [
  {
    "id": "y8-18a-q1a",
    "topicId": "y8-18a",
    "c": "18A",
    "t": "The Cartesian plane",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 180,
    "question": "For the given rule \\(y = 2x\\):\n\n1. Complete the table below.\n2. List the coordinates.\n3. Plot the corresponding set of points on a number plane and draw a line through them.\n\n| \\(x\\) | \\(-3\\) | \\(-2\\) | \\(-1\\) | \\(0\\) | \\(1\\) | \\(2\\) | \\(3\\) |\n| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |\n| \\(y\\) | | | | | | | |",
    "answer": "Completed table: y = [-6, -4, -2, 0, 2, 4, 6]\nCoordinates: (-3, -6), (-2, -4), (-1, -2), (0, 0), (1, 2), (2, 4), (3, 6)\nGraph: A straight line passing through the origin (0, 0) with a gradient of 2.",
    "hint": "Multiply each \\(x\\)-value by 2 to find the corresponding \\(y\\)-value. Then form coordinate pairs \\((x, y)\\) and plot them.",
    "solution": "Completed table: y = [-6, -4, -2, 0, 2, 4, 6]\nCoordinates: (-3, -6), (-2, -4), (-1, -2), (0, 0), (1, 2), (2, 4), (3, 6)\nGraph: A straight line passing through the origin (0, 0) with a gradient of 2.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for The Cartesian plane: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "y = 2(-3) = -6, quad y = 2(-2) = -4, quad y = 2(-1) = -2, quad y = 2(0) = 0, quad y = 2(1) = 2, quad y = 2(2) = 4, quad y = 2(3) = 6",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -6,
              6,
              6,
              -6
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-6,0],[6,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-6],[0,6]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.28, -2.0999999999999996, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.4, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return (2)*x + (0); }, -5.5, 5.5], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [2.2, 3.5, 'y = 2x+0'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(\\text{Coordinates}: (-3, -6), (-2, -4), (-1, -2), (0, 0), (1, 2), (2, 4), (3, 6)\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\text{Line passes through } (0,0) \\text{ with gradient } 2\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Completed table: y = [-6, -4, -2, 0, 2, 4, 6]\nCoordinates: (-3, -6), (-2, -4), (-1, -2), (0, 0), (1, 2), (2, 4), (3, 6)\nGraph: A straight line passing through the origin (0, 0) with a gradient of 2.. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Completed table: y = [-6, -4, -2, 0, 2, 4, 6]\nCoordinates: (-3, -6), (-2, -4), (-1, -2), (0, 0), (1, 2), (2, 4), (3, 6)\nGraph: A straight line passing through the origin (0, 0) with a gradient of 2.",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 360,
        "height": 280,
        "boundingbox": [
          -6,
          6,
          6,
          -6
        ],
        "script": "board.suspendUpdate(); board.create('arrow', [[-6,0],[6,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-6],[0,6]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.28, -2.0999999999999996, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.4, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return (2)*x + (0); }, -5.5, 5.5], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [2.2, 3.5, 'y = 2x+0'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y8-18a-q1b",
    "topicId": "y8-18a",
    "c": "18A",
    "t": "The Cartesian plane",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 180,
    "question": "For the given rule \\(y = -3x\\):\n\n1. Complete the table below.\n2. List the coordinates.\n3. Plot the corresponding set of points on a number plane and draw a line through them.\n\n| \\(x\\) | \\(-3\\) | \\(-2\\) | \\(-1\\) | \\(0\\) | \\(1\\) | \\(2\\) | \\(3\\) |\n| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |\n| \\(y\\) | | | | | | | |",
    "answer": "Completed table: y = [9, 6, 3, 0, -3, -6, -9]\nCoordinates: (-3, 9), (-2, 6), (-1, 3), (0, 0), (1, -3), (2, -6), (3, -9)\nGraph: A straight line passing through the origin (0, 0) with a gradient of -3.",
    "hint": "Multiply each \\(x\\)-value by \\(-3\\) (remember that a negative times a negative is positive).",
    "solution": "Completed table: y = [9, 6, 3, 0, -3, -6, -9]\nCoordinates: (-3, 9), (-2, 6), (-1, 3), (0, 0), (1, -3), (2, -6), (3, -9)\nGraph: A straight line passing through the origin (0, 0) with a gradient of -3.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for The Cartesian plane: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "y = -3(-3) = 9, quad y = -3(-2) = 6, quad y = -3(-1) = 3, quad y = -3(0) = 0, quad y = -3(1) = -3, quad y = -3(2) = -6, quad y = -3(3) = -9",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -6,
              6,
              6,
              -6
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-6,0],[6,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-6],[0,6]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.28, -2.0999999999999996, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.4, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return (-3)*x + (0); }, -5.5, 5.5], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [2.2, 3.5, 'y = -3x+0'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(\\text{Coordinates}: (-3, 9), (-2, 6), (-1, 3), (0, 0), (1, -3), (2, -6), (3, -9)\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\text{Line passes through } (0,0) \\text{ with gradient } -3\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Completed table: y = [9, 6, 3, 0, -3, -6, -9]\nCoordinates: (-3, 9), (-2, 6), (-1, 3), (0, 0), (1, -3), (2, -6), (3, -9)\nGraph: A straight line passing through the origin (0, 0) with a gradient of -3.. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Completed table: y = [9, 6, 3, 0, -3, -6, -9]\nCoordinates: (-3, 9), (-2, 6), (-1, 3), (0, 0), (1, -3), (2, -6), (3, -9)\nGraph: A straight line passing through the origin (0, 0) with a gradient of -3.",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 360,
        "height": 280,
        "boundingbox": [
          -6,
          6,
          6,
          -6
        ],
        "script": "board.suspendUpdate(); board.create('arrow', [[-6,0],[6,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-6],[0,6]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.28, -2.0999999999999996, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.4, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return (-3)*x + (0); }, -5.5, 5.5], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [2.2, 3.5, 'y = -3x+0'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y8-18a-q1c",
    "topicId": "y8-18a",
    "c": "18A",
    "t": "The Cartesian plane",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 180,
    "question": "For the given rule \\(y = x - 3\\):\n\n1. Complete the table below.\n2. List the coordinates.\n3. Plot the corresponding set of points on a number plane and draw a line through them.\n\n| \\(x\\) | \\(-3\\) | \\(-2\\) | \\(-1\\) | \\(0\\) | \\(1\\) | \\(2\\) | \\(3\\) |\n| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |\n| \\(y\\) | | | | | | | |",
    "answer": "Completed table: y = [-6, -5, -4, -3, -2, -1, 0]\nCoordinates: (-3, -6), (-2, -5), (-1, -4), (0, -3), (1, -2), (2, -1), (3, 0)\nGraph: A straight line with y-intercept (0, -3) and x-intercept (3, 0).",
    "hint": "Subtract 3 from each \\(x\\)-value to get the corresponding \\(y\\)-value.",
    "solution": "Completed table: y = [-6, -5, -4, -3, -2, -1, 0]\nCoordinates: (-3, -6), (-2, -5), (-1, -4), (0, -3), (1, -2), (2, -1), (3, 0)\nGraph: A straight line with y-intercept (0, -3) and x-intercept (3, 0).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for The Cartesian plane: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "y = -3 - 3 = -6, quad y = -2 - 3 = -5, quad y = -1 - 3 = -4, quad y = 0 - 3 = -3, quad y = 1 - 3 = -2, quad y = 2 - 3 = -1, quad y = 3 - 3 = 0",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -6,
              6,
              6,
              -6
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-6,0],[6,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-6],[0,6]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.28, -2.0999999999999996, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.4, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return (1)*x + (-3); }, -5.5, 5.5], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [2.2, 3.5, 'y = 1x-3'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(\\text{Coordinates}: (-3, -6), (-2, -5), (-1, -4), (0, -3), (1, -2), (2, -1), (3, 0)\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\text{Line with y-intercept } (0, -3) \\text{ and gradient } 1\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Completed table: y = [-6, -5, -4, -3, -2, -1, 0]\nCoordinates: (-3, -6), (-2, -5), (-1, -4), (0, -3), (1, -2), (2, -1), (3, 0)\nGraph: A straight line with y-intercept (0, -3) and x-intercept (3, 0).. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Completed table: y = [-6, -5, -4, -3, -2, -1, 0]\nCoordinates: (-3, -6), (-2, -5), (-1, -4), (0, -3), (1, -2), (2, -1), (3, 0)\nGraph: A straight line with y-intercept (0, -3) and x-intercept (3, 0).",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 360,
        "height": 280,
        "boundingbox": [
          -6,
          6,
          6,
          -6
        ],
        "script": "board.suspendUpdate(); board.create('arrow', [[-6,0],[6,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-6],[0,6]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.28, -2.0999999999999996, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.4, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return (1)*x + (-3); }, -5.5, 5.5], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [2.2, 3.5, 'y = 1x-3'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y8-18a-q1d",
    "topicId": "y8-18a",
    "c": "18A",
    "t": "The Cartesian plane",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 180,
    "question": "For the given rule \\(y = x + 3\\):\n\n1. Complete the table below.\n2. List the coordinates.\n3. Plot the corresponding set of points on a number plane and draw a line through them.\n\n| \\(x\\) | \\(-3\\) | \\(-2\\) | \\(-1\\) | \\(0\\) | \\(1\\) | \\(2\\) | \\(3\\) |\n| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |\n| \\(y\\) | | | | | | | |",
    "answer": "Completed table: y = [0, 1, 2, 3, 4, 5, 6]\nCoordinates: (-3, 0), (-2, 1), (-1, 2), (0, 3), (1, 4), (2, 5), (3, 6)\nGraph: A straight line with y-intercept (0, 3) and x-intercept (-3, 0).",
    "hint": "Add 3 to each \\(x\\)-value to get the corresponding \\(y\\)-value.",
    "solution": "Completed table: y = [0, 1, 2, 3, 4, 5, 6]\nCoordinates: (-3, 0), (-2, 1), (-1, 2), (0, 3), (1, 4), (2, 5), (3, 6)\nGraph: A straight line with y-intercept (0, 3) and x-intercept (-3, 0).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for The Cartesian plane: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "y = -3 + 3 = 0, quad y = -2 + 3 = 1, quad y = -1 + 3 = 2, quad y = 0 + 3 = 3, quad y = 1 + 3 = 4, quad y = 2 + 3 = 5, quad y = 3 + 3 = 6",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -6,
              6,
              6,
              -6
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-6,0],[6,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-6],[0,6]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.28, -2.0999999999999996, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.4, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return (1)*x + (+3); }, -5.5, 5.5], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [2.2, 3.5, 'y = 1x++3'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(\\text{Coordinates}: (-3, 0), (-2, 1), (-1, 2), (0, 3), (1, 4), (2, 5), (3, 6)\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\text{Line with y-intercept } (0, 3) \\text{ and gradient } 1\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Completed table: y = [0, 1, 2, 3, 4, 5, 6]\nCoordinates: (-3, 0), (-2, 1), (-1, 2), (0, 3), (1, 4), (2, 5), (3, 6)\nGraph: A straight line with y-intercept (0, 3) and x-intercept (-3, 0).. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Completed table: y = [0, 1, 2, 3, 4, 5, 6]\nCoordinates: (-3, 0), (-2, 1), (-1, 2), (0, 3), (1, 4), (2, 5), (3, 6)\nGraph: A straight line with y-intercept (0, 3) and x-intercept (-3, 0).",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 360,
        "height": 280,
        "boundingbox": [
          -6,
          6,
          6,
          -6
        ],
        "script": "board.suspendUpdate(); board.create('arrow', [[-6,0],[6,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-6],[0,6]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.28, -2.0999999999999996, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.4, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return (1)*x + (+3); }, -5.5, 5.5], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [2.2, 3.5, 'y = 1x++3'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y8-18a-q1e",
    "topicId": "y8-18a",
    "c": "18A",
    "t": "The Cartesian plane",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 180,
    "question": "For the given rule \\(y = 2x - 1\\):\n\n1. Complete the table below.\n2. List the coordinates.\n3. Plot the corresponding set of points on a number plane and draw a line through them.\n\n| \\(x\\) | \\(-3\\) | \\(-2\\) | \\(-1\\) | \\(0\\) | \\(1\\) | \\(2\\) | \\(3\\) |\n| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |\n| \\(y\\) | | | | | | | |",
    "answer": "Completed table: y = [-7, -5, -3, -1, 1, 3, 5]\nCoordinates: (-3, -7), (-2, -5), (-1, -3), (0, -1), (1, 1), (2, 3), (3, 5)\nGraph: A straight line with y-intercept (0, -1) and gradient of 2.",
    "hint": "Multiply each \\(x\\)-value by 2, then subtract 1.",
    "solution": "Completed table: y = [-7, -5, -3, -1, 1, 3, 5]\nCoordinates: (-3, -7), (-2, -5), (-1, -3), (0, -1), (1, 1), (2, 3), (3, 5)\nGraph: A straight line with y-intercept (0, -1) and gradient of 2.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for The Cartesian plane: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "y = 2(-3)-1 = -7, quad y = 2(-2)-1 = -5, quad y = 2(-1)-1 = -3, quad y = 2(0)-1 = -1, quad y = 2(1)-1 = 1, quad y = 2(2)-1 = 3, quad y = 2(3)-1 = 5",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -6,
              6,
              6,
              -6
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-6,0],[6,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-6],[0,6]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.28, -2.0999999999999996, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.4, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return (2)*x + (-1); }, -5.5, 5.5], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [2.2, 3.5, 'y = 2x-1'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(\\text{Coordinates}: (-3, -7), (-2, -5), (-1, -3), (0, -1), (1, 1), (2, 3), (3, 5)\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\text{Line with y-intercept } (0, -1) \\text{ and gradient } 2\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Completed table: y = [-7, -5, -3, -1, 1, 3, 5]\nCoordinates: (-3, -7), (-2, -5), (-1, -3), (0, -1), (1, 1), (2, 3), (3, 5)\nGraph: A straight line with y-intercept (0, -1) and gradient of 2.. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Completed table: y = [-7, -5, -3, -1, 1, 3, 5]\nCoordinates: (-3, -7), (-2, -5), (-1, -3), (0, -1), (1, 1), (2, 3), (3, 5)\nGraph: A straight line with y-intercept (0, -1) and gradient of 2.",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 360,
        "height": 280,
        "boundingbox": [
          -6,
          6,
          6,
          -6
        ],
        "script": "board.suspendUpdate(); board.create('arrow', [[-6,0],[6,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-6],[0,6]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.28, -2.0999999999999996, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.4, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return (2)*x + (-1); }, -5.5, 5.5], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [2.2, 3.5, 'y = 2x-1'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y8-18a-q1f",
    "topicId": "y8-18a",
    "c": "18A",
    "t": "The Cartesian plane",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 180,
    "question": "For the given rule \\(y = 2 - x\\):\n\n1. Complete the table below.\n2. List the coordinates.\n3. Plot the corresponding set of points on a number plane and draw a line through them.\n\n| \\(x\\) | \\(-3\\) | \\(-2\\) | \\(-1\\) | \\(0\\) | \\(1\\) | \\(2\\) | \\(3\\) |\n| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |\n| \\(y\\) | | | | | | | |",
    "answer": "Completed table: y = [5, 4, 3, 2, 1, 0, -1]\nCoordinates: (-3, 5), (-2, 4), (-1, 3), (0, 2), (1, 1), (2, 0), (3, -1)\nGraph: A straight line with y-intercept (0, 2) and x-intercept (2, 0).",
    "hint": "Subtract each \\(x\\)-value from 2. Remember that subtracting a negative number is the same as adding.",
    "solution": "Completed table: y = [5, 4, 3, 2, 1, 0, -1]\nCoordinates: (-3, 5), (-2, 4), (-1, 3), (0, 2), (1, 1), (2, 0), (3, -1)\nGraph: A straight line with y-intercept (0, 2) and x-intercept (2, 0).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for The Cartesian plane: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "y = 2 - (-3) = 5, quad y = 2 - (-2) = 4, quad y = 2 - (-1) = 3, quad y = 2 - 0 = 2, quad y = 2 - 1 = 1, quad y = 2 - 2 = 0, quad y = 2 - 3 = -1",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(\\text{Coordinates}: (-3, 5), (-2, 4), (-1, 3), (0, 2), (1, 1), (2, 0), (3, -1)\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\text{Line with y-intercept } (0, 2) \\text{ and gradient } -1\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Completed table: y = [5, 4, 3, 2, 1, 0, -1]\nCoordinates: (-3, 5), (-2, 4), (-1, 3), (0, 2), (1, 1), (2, 0), (3, -1)\nGraph: A straight line with y-intercept (0, 2) and x-intercept (2, 0).. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Completed table: y = [5, 4, 3, 2, 1, 0, -1]\nCoordinates: (-3, 5), (-2, 4), (-1, 3), (0, 2), (1, 1), (2, 0), (3, -1)\nGraph: A straight line with y-intercept (0, 2) and x-intercept (2, 0).",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y8-18a-q2a",
    "topicId": "y8-18a",
    "c": "18A",
    "t": "The Cartesian plane",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 180,
    "question": "For the given rule \\(y = x + \\frac{3}{2}\\):\n\n1. Complete the table below.\n2. List the coordinates.\n3. Plot the corresponding set of points on a number plane and draw a line through them.\n\n| \\(x\\) | \\(-3\\) | \\(-2\\) | \\(-1\\) | \\(0\\) | \\(1\\) | \\(2\\) | \\(3\\) |\n| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |\n| \\(y\\) | | | | | | | |",
    "answer": "Completed table: y = [-1.5, -0.5, 0.5, 1.5, 2.5, 3.5, 4.5] (or equivalent fraction forms)\nCoordinates: (-3, -1.5), (-2, -0.5), (-1, 0.5), (0, 1.5), (1, 2.5), (2, 3.5), (3, 4.5)\nGraph: A straight line with y-intercept (0, 1.5) and gradient of 1.",
    "hint": "Convert \\(\\frac{3}{2}\\) to \\(1.5\\) to make calculation easier. Add 1.5 to each \\(x\\)-value.",
    "solution": "Completed table: y = [-1.5, -0.5, 0.5, 1.5, 2.5, 3.5, 4.5] (or equivalent fraction forms)\nCoordinates: (-3, -1.5), (-2, -0.5), (-1, 0.5), (0, 1.5), (1, 2.5), (2, 3.5), (3, 4.5)\nGraph: A straight line with y-intercept (0, 1.5) and gradient of 1.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for The Cartesian plane: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "y = -3+1.5 = -1.5, quad y = -2+1.5 = -0.5, quad y = -1+1.5 = 0.5, quad y = 0+1.5 = 1.5, quad y = 1+1.5 = 2.5, quad y = 2+1.5 = 3.5, quad y = 3+1.5 = 4.5",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -6,
              6,
              6,
              -6
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-6,0],[6,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-6],[0,6]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.28, -2.0999999999999996, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.4, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return (1)*x + (0); }, -5.5, 5.5], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [2.2, 3.5, 'y = 1x+0'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(\\text{Coordinates}: (-3, -1.5), (-2, -0.5), (-1, 0.5), (0, 1.5), (1, 2.5), (2, 3.5), (3, 4.5)\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\text{Line with y-intercept } (0, 1.5) \\text{ and gradient } 1\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Completed table: y = [-1.5, -0.5, 0.5, 1.5, 2.5, 3.5, 4.5] (or equivalent fraction forms)\nCoordinates: (-3, -1.5), (-2, -0.5), (-1, 0.5), (0, 1.5), (1, 2.5), (2, 3.5), (3, 4.5)\nGraph: A straight line with y-intercept (0, 1.5) and gradient of 1.. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Completed table: y = [-1.5, -0.5, 0.5, 1.5, 2.5, 3.5, 4.5] (or equivalent fraction forms)\nCoordinates: (-3, -1.5), (-2, -0.5), (-1, 0.5), (0, 1.5), (1, 2.5), (2, 3.5), (3, 4.5)\nGraph: A straight line with y-intercept (0, 1.5) and gradient of 1.",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 360,
        "height": 280,
        "boundingbox": [
          -6,
          6,
          6,
          -6
        ],
        "script": "board.suspendUpdate(); board.create('arrow', [[-6,0],[6,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-6],[0,6]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.28, -2.0999999999999996, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.4, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return (1)*x + (0); }, -5.5, 5.5], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [2.2, 3.5, 'y = 1x+0'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y8-18a-q2b",
    "topicId": "y8-18a",
    "c": "18A",
    "t": "The Cartesian plane",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 180,
    "question": "For the given rule \\(y = x - \\frac{3}{2}\\):\n\n1. Complete the table below.\n2. List the coordinates.\n3. Plot the corresponding set of points on a number plane and draw a line through them.\n\n| \\(x\\) | \\(-3\\) | \\(-2\\) | \\(-1\\) | \\(0\\) | \\(1\\) | \\(2\\) | \\(3\\) |\n| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |\n| \\(y\\) | | | | | | | |",
    "answer": "Completed table: y = [-4.5, -3.5, -2.5, -1.5, -0.5, 0.5, 1.5] (or equivalent fraction forms)\nCoordinates: (-3, -4.5), (-2, -3.5), (-1, -2.5), (0, -1.5), (1, -0.5), (2, 0.5), (3, 1.5)\nGraph: A straight line with y-intercept (0, -1.5) and gradient of 1.",
    "hint": "Convert \\(-\\frac{3}{2}\\) to \\(-1.5\\) and subtract 1.5 from each \\(x\\)-value.",
    "solution": "Completed table: y = [-4.5, -3.5, -2.5, -1.5, -0.5, 0.5, 1.5] (or equivalent fraction forms)\nCoordinates: (-3, -4.5), (-2, -3.5), (-1, -2.5), (0, -1.5), (1, -0.5), (2, 0.5), (3, 1.5)\nGraph: A straight line with y-intercept (0, -1.5) and gradient of 1.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for The Cartesian plane: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "y = -3-1.5 = -4.5, quad y = -2-1.5 = -3.5, quad y = -1-1.5 = -2.5, quad y = 0-1.5 = -1.5, quad y = 1-1.5 = -0.5, quad y = 2-1.5 = 0.5, quad y = 3-1.5 = 1.5",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -6,
              6,
              6,
              -6
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-6,0],[6,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-6],[0,6]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.28, -2.0999999999999996, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.4, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return (1)*x + (0); }, -5.5, 5.5], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [2.2, 3.5, 'y = 1x+0'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(\\text{Coordinates}: (-3, -4.5), (-2, -3.5), (-1, -2.5), (0, -1.5), (1, -0.5), (2, 0.5), (3, 1.5)\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\text{Line with y-intercept } (0, -1.5) \\text{ and gradient } 1\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Completed table: y = [-4.5, -3.5, -2.5, -1.5, -0.5, 0.5, 1.5] (or equivalent fraction forms)\nCoordinates: (-3, -4.5), (-2, -3.5), (-1, -2.5), (0, -1.5), (1, -0.5), (2, 0.5), (3, 1.5)\nGraph: A straight line with y-intercept (0, -1.5) and gradient of 1.. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Completed table: y = [-4.5, -3.5, -2.5, -1.5, -0.5, 0.5, 1.5] (or equivalent fraction forms)\nCoordinates: (-3, -4.5), (-2, -3.5), (-1, -2.5), (0, -1.5), (1, -0.5), (2, 0.5), (3, 1.5)\nGraph: A straight line with y-intercept (0, -1.5) and gradient of 1.",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 360,
        "height": 280,
        "boundingbox": [
          -6,
          6,
          6,
          -6
        ],
        "script": "board.suspendUpdate(); board.create('arrow', [[-6,0],[6,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-6],[0,6]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.28, -2.0999999999999996, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.4, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return (1)*x + (0); }, -5.5, 5.5], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [2.2, 3.5, 'y = 1x+0'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y8-18a-q2c",
    "topicId": "y8-18a",
    "c": "18A",
    "t": "The Cartesian plane",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 180,
    "question": "For the given rule \\(y = 2x - \\frac{1}{2}\\):\n\n1. Complete the table below.\n2. List the coordinates.\n3. Plot the corresponding set of points on a number plane and draw a line through them.\n\n| \\(x\\) | \\(-3\\) | \\(-2\\) | \\(-1\\) | \\(0\\) | \\(1\\) | \\(2\\) | \\(3\\) |\n| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |\n| \\(y\\) | | | | | | | |",
    "answer": "Completed table: y = [-6.5, -4.5, -2.5, -0.5, 1.5, 3.5, 5.5] (or equivalent fraction forms)\nCoordinates: (-3, -6.5), (-2, -4.5), (-1, -2.5), (0, -0.5), (1, 1.5), (2, 3.5), (3, 5.5)\nGraph: A straight line with y-intercept (0, -0.5) and gradient of 2.",
    "hint": "Multiply each \\(x\\)-value by 2 first, and then subtract \\(0.5\\) (or \\(\\frac{1}{2}\\)).",
    "solution": "Completed table: y = [-6.5, -4.5, -2.5, -0.5, 1.5, 3.5, 5.5] (or equivalent fraction forms)\nCoordinates: (-3, -6.5), (-2, -4.5), (-1, -2.5), (0, -0.5), (1, 1.5), (2, 3.5), (3, 5.5)\nGraph: A straight line with y-intercept (0, -0.5) and gradient of 2.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for The Cartesian plane: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "y = 2(-3)-0.5 = -6.5, quad y = 2(-2)-0.5 = -4.5, quad y = 2(-1)-0.5 = -2.5, quad y = 2(0)-0.5 = -0.5, quad y = 2(1)-0.5 = 1.5, quad y = 2(2)-0.5 = 3.5, quad y = 2(3)-0.5 = 5.5",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -6,
              6,
              6,
              -6
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-6,0],[6,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-6],[0,6]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.28, -2.0999999999999996, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.4, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return (2)*x + (0); }, -5.5, 5.5], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [2.2, 3.5, 'y = 2x+0'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(\\text{Coordinates}: (-3, -6.5), (-2, -4.5), (-1, -2.5), (0, -0.5), (1, 1.5), (2, 3.5), (3, 5.5)\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\text{Line with y-intercept } (0, -0.5) \\text{ and gradient } 2\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Completed table: y = [-6.5, -4.5, -2.5, -0.5, 1.5, 3.5, 5.5] (or equivalent fraction forms)\nCoordinates: (-3, -6.5), (-2, -4.5), (-1, -2.5), (0, -0.5), (1, 1.5), (2, 3.5), (3, 5.5)\nGraph: A straight line with y-intercept (0, -0.5) and gradient of 2.. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Completed table: y = [-6.5, -4.5, -2.5, -0.5, 1.5, 3.5, 5.5] (or equivalent fraction forms)\nCoordinates: (-3, -6.5), (-2, -4.5), (-1, -2.5), (0, -0.5), (1, 1.5), (2, 3.5), (3, 5.5)\nGraph: A straight line with y-intercept (0, -0.5) and gradient of 2.",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 360,
        "height": 280,
        "boundingbox": [
          -6,
          6,
          6,
          -6
        ],
        "script": "board.suspendUpdate(); board.create('arrow', [[-6,0],[6,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-6],[0,6]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.28, -2.0999999999999996, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.4, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return (2)*x + (0); }, -5.5, 5.5], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [2.2, 3.5, 'y = 2x+0'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y8-18a-q2d",
    "topicId": "y8-18a",
    "c": "18A",
    "t": "The Cartesian plane",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 180,
    "question": "For the given rule \\(y = -x - \\frac{1}{2}\\):\n\n1. Complete the table below.\n2. List the coordinates.\n3. Plot the corresponding set of points on a number plane and draw a line through them.\n\n| \\(x\\) | \\(-3\\) | \\(-2\\) | \\(-1\\) | \\(0\\) | \\(1\\) | \\(2\\) | \\(3\\) |\n| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |\n| \\(y\\) | | | | | | | |",
    "answer": "Completed table: y = [2.5, 1.5, 0.5, -0.5, -1.5, -2.5, -3.5] (or equivalent fraction forms)\nCoordinates: (-3, 2.5), (-2, 1.5), (-1, 0.5), (0, -0.5), (1, -1.5), (2, -2.5), (3, -3.5)\nGraph: A straight line with y-intercept (0, -0.5) and gradient of -1.",
    "hint": "Negate each \\(x\\)-value, then subtract \\(0.5\\). Note that negating a negative number yields a positive number.",
    "solution": "Completed table: y = [2.5, 1.5, 0.5, -0.5, -1.5, -2.5, -3.5] (or equivalent fraction forms)\nCoordinates: (-3, 2.5), (-2, 1.5), (-1, 0.5), (0, -0.5), (1, -1.5), (2, -2.5), (3, -3.5)\nGraph: A straight line with y-intercept (0, -0.5) and gradient of -1.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for The Cartesian plane: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "y = -(-3)-0.5 = 2.5, quad y = -(-2)-0.5 = 1.5, quad y = -(-1)-0.5 = 0.5, quad y = -(0)-0.5 = -0.5, quad y = -(1)-0.5 = -1.5, quad y = -(2)-0.5 = -2.5, quad y = -(3)-0.5 = -3.5",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -6,
              6,
              6,
              -6
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-6,0],[6,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-6],[0,6]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.28, -2.0999999999999996, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.4, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return (-1)*x + (0); }, -5.5, 5.5], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [2.2, 3.5, 'y = -1x+0'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(\\text{Coordinates}: (-3, 2.5), (-2, 1.5), (-1, 0.5), (0, -0.5), (1, -1.5), (2, -2.5), (3, -3.5)\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\text{Line with y-intercept } (0, -0.5) \\text{ and gradient } -1\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Completed table: y = [2.5, 1.5, 0.5, -0.5, -1.5, -2.5, -3.5] (or equivalent fraction forms)\nCoordinates: (-3, 2.5), (-2, 1.5), (-1, 0.5), (0, -0.5), (1, -1.5), (2, -2.5), (3, -3.5)\nGraph: A straight line with y-intercept (0, -0.5) and gradient of -1.. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Completed table: y = [2.5, 1.5, 0.5, -0.5, -1.5, -2.5, -3.5] (or equivalent fraction forms)\nCoordinates: (-3, 2.5), (-2, 1.5), (-1, 0.5), (0, -0.5), (1, -1.5), (2, -2.5), (3, -3.5)\nGraph: A straight line with y-intercept (0, -0.5) and gradient of -1.",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 360,
        "height": 280,
        "boundingbox": [
          -6,
          6,
          6,
          -6
        ],
        "script": "board.suspendUpdate(); board.create('arrow', [[-6,0],[6,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-6],[0,6]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.28, -2.0999999999999996, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.4, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return (-1)*x + (0); }, -5.5, 5.5], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [2.2, 3.5, 'y = -1x+0'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": true
  }
];
