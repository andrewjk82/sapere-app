export const Y9_CH11E_QUESTIONS = [
  {
    "id": "y9-11e-q1a",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Sketch the graph of the line \\(y = 3x + 1\\) by calculating the \\(y\\)-intercept and finding one other point.",
    "a": "Line with y-intercept at \\((0, 1)\\) passing through \\((1, 4)\\).",
    "solution": "To sketch the line \\(y = 3x + 1\\):\n\n1. **Find the \\(y\\)-intercept** (set \\(x = 0\\)):\n   \\(y = 3(0) + 1 = 1\\)\n   So, the \\(y\\)-intercept is at \\((0, 1)\\).\n\n2. **Find one other point** (substitute \\(x = 1\\)):\n   \\(y = 3(1) + 1 = 4\\)\n   So, another point on the line is \\((1, 4)\\).\n\n3. Plot these two points and draw a straight line through them.",
    "t": "Sketching linear graphs",
    "hint": "Substitute \\(x = 0\\) to find the \\(y\\)-intercept, then choose another value like \\(x = 1\\) to find a second point.",
    "solutionSteps": [
      {
        "explanation": "Calculate the y-intercept by setting x = 0.",
        "workingOut": "x = 0 \\implies y = 1"
      },
      {
        "explanation": "Find another point by setting x = 1.",
        "workingOut": "x = 1 \\implies y = 4"
      },
      {
        "explanation": "Draw a straight line through (0, y-intercept) and the second point.",
        "workingOut": "\\text{Line passes through } (0, 1) \\text{ and } (1, 4)"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -4.5,
          6.5,
          4.5,
          -4.5
        ],
        "showConstructionPoints": true,
        "boardOptions": {
          "axis": true,
          "grid": true
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-4, 0], [4, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -4], [0, 6]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [3.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 5.7, 'y'], {fontSize: 12});\nboard.create('line', [[0, 1], [1, 4]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [0, 1], {size: 3, color: 'red', name: '(0, 1)', withLabel: true, label: {offset: [10, 5]}});\nboard.create('point', [1, 4], {size: 3, color: 'red', name: '(1, 4)', withLabel: true, label: {offset: [10, 5]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y9-11e-q1b",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Sketch the graph of the line \\(y = 2x + 3\\) by calculating the \\(y\\)-intercept and finding one other point.",
    "a": "Line with y-intercept at \\((0, 3)\\) passing through \\((1, 5)\\).",
    "solution": "To sketch the line \\(y = 2x + 3\\):\n\n1. **Find the \\(y\\)-intercept** (set \\(x = 0\\)):\n   \\(y = 2(0) + 3 = 3\\)\n   So, the \\(y\\)-intercept is at \\((0, 3)\\).\n\n2. **Find one other point** (substitute \\(x = 1\\)):\n   \\(y = 2(1) + 3 = 5\\)\n   So, another point on the line is \\((1, 5)\\).\n\n3. Plot these two points and draw a straight line through them.",
    "t": "Sketching linear graphs",
    "hint": "Substitute \\(x = 0\\) to find the \\(y\\)-intercept, then choose another value like \\(x = 1\\) to find a second point.",
    "solutionSteps": [
      {
        "explanation": "Calculate the y-intercept by setting x = 0.",
        "workingOut": "x = 0 \\implies y = 3"
      },
      {
        "explanation": "Find another point by setting x = 1.",
        "workingOut": "x = 1 \\implies y = 5"
      },
      {
        "explanation": "Draw a straight line through (0, y-intercept) and the second point.",
        "workingOut": "\\text{Line passes through } (0, 3) \\text{ and } (1, 5)"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -5,
          6.5,
          4.5,
          -4.5
        ],
        "showConstructionPoints": true,
        "boardOptions": {
          "axis": true,
          "grid": true
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-4.5, 0], [4, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -4], [0, 6]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [3.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 5.7, 'y'], {fontSize: 12});\nboard.create('line', [[0, 3], [1, 5]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [0, 3], {size: 3, color: 'red', name: '(0, 3)', withLabel: true, label: {offset: [10, 5]}});\nboard.create('point', [1, 5], {size: 3, color: 'red', name: '(1, 5)', withLabel: true, label: {offset: [10, 5]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y9-11e-q1c",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Sketch the graph of the line \\(y = 2x - 3\\) by calculating the \\(y\\)-intercept and finding one other point.",
    "a": "Line with y-intercept at \\((0, -3)\\) passing through \\((1, -1)\\).",
    "solution": "To sketch the line \\(y = 2x - 3\\):\n\n1. **Find the \\(y\\)-intercept** (set \\(x = 0\\)):\n   \\(y = 2(0) + -3 = -3\\)\n   So, the \\(y\\)-intercept is at \\((0, -3)\\).\n\n2. **Find one other point** (substitute \\(x = 1\\)):\n   \\(y = 2(1) + -3 = -1\\)\n   So, another point on the line is \\((1, -1)\\).\n\n3. Plot these two points and draw a straight line through them.",
    "t": "Sketching linear graphs",
    "hint": "Substitute \\(x = 0\\) to find the \\(y\\)-intercept, then choose another value like \\(x = 1\\) to find a second point.",
    "solutionSteps": [
      {
        "explanation": "Calculate the y-intercept by setting x = 0.",
        "workingOut": "x = 0 \\implies y = -3"
      },
      {
        "explanation": "Find another point by setting x = 1.",
        "workingOut": "x = 1 \\implies y = -1"
      },
      {
        "explanation": "Draw a straight line through (0, y-intercept) and the second point.",
        "workingOut": "\\text{Line passes through } (0, -3) \\text{ and } (1, -1)"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -4.5,
          6.5,
          5,
          -6.5
        ],
        "showConstructionPoints": true,
        "boardOptions": {
          "axis": true,
          "grid": true
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-4, 0], [4.5, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -6], [0, 6]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.2, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 5.7, 'y'], {fontSize: 12});\nboard.create('line', [[0, -3], [1, -1]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [0, -3], {size: 3, color: 'red', name: '(0, -3)', withLabel: true, label: {offset: [10, 5]}});\nboard.create('point', [1, -1], {size: 3, color: 'red', name: '(1, -1)', withLabel: true, label: {offset: [10, 5]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y9-11e-q1d",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Sketch the graph of the line \\(y = 3x + 4\\) by calculating the \\(y\\)-intercept and finding one other point.",
    "a": "Line with y-intercept at \\((0, 4)\\) passing through \\((1, 7)\\).",
    "solution": "To sketch the line \\(y = 3x + 4\\):\n\n1. **Find the \\(y\\)-intercept** (set \\(x = 0\\)):\n   \\(y = 3(0) + 4 = 4\\)\n   So, the \\(y\\)-intercept is at \\((0, 4)\\).\n\n2. **Find one other point** (substitute \\(x = 1\\)):\n   \\(y = 3(1) + 4 = 7\\)\n   So, another point on the line is \\((1, 7)\\).\n\n3. Plot these two points and draw a straight line through them.",
    "t": "Sketching linear graphs",
    "hint": "Substitute \\(x = 0\\) to find the \\(y\\)-intercept, then choose another value like \\(x = 1\\) to find a second point.",
    "solutionSteps": [
      {
        "explanation": "Calculate the y-intercept by setting x = 0.",
        "workingOut": "x = 0 \\implies y = 4"
      },
      {
        "explanation": "Find another point by setting x = 1.",
        "workingOut": "x = 1 \\implies y = 7"
      },
      {
        "explanation": "Draw a straight line through (0, y-intercept) and the second point.",
        "workingOut": "\\text{Line passes through } (0, 4) \\text{ and } (1, 7)"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -4.833333333333333,
          7.5,
          4.5,
          -4.5
        ],
        "showConstructionPoints": true,
        "boardOptions": {
          "axis": true,
          "grid": true
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-4.333333333333333, 0], [4, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -4], [0, 7]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [3.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 6.7, 'y'], {fontSize: 12});\nboard.create('line', [[0, 4], [1, 7]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [0, 4], {size: 3, color: 'red', name: '(0, 4)', withLabel: true, label: {offset: [10, 5]}});\nboard.create('point', [1, 7], {size: 3, color: 'red', name: '(1, 7)', withLabel: true, label: {offset: [10, 5]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y9-11e-q1e",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Sketch the graph of the line \\(y = 5 - 3x\\) by calculating the \\(y\\)-intercept and finding one other point.",
    "a": "Line with y-intercept at \\((0, 5)\\) passing through \\((1, 2)\\).",
    "solution": "To sketch the line \\(y = 5 - 3x\\):\n\n1. **Find the \\(y\\)-intercept** (set \\(x = 0\\)):\n   \\(y = -3(0) + 5 = 5\\)\n   So, the \\(y\\)-intercept is at \\((0, 5)\\).\n\n2. **Find one other point** (substitute \\(x = 1\\)):\n   \\(y = -3(1) + 5 = 2\\)\n   So, another point on the line is \\((1, 2)\\).\n\n3. Plot these two points and draw a straight line through them.",
    "t": "Sketching linear graphs",
    "hint": "Substitute \\(x = 0\\) to find the \\(y\\)-intercept, then choose another value like \\(x = 1\\) to find a second point.",
    "solutionSteps": [
      {
        "explanation": "Calculate the y-intercept by setting x = 0.",
        "workingOut": "x = 0 \\implies y = 5"
      },
      {
        "explanation": "Find another point by setting x = 1.",
        "workingOut": "x = 1 \\implies y = 2"
      },
      {
        "explanation": "Draw a straight line through (0, y-intercept) and the second point.",
        "workingOut": "\\text{Line passes through } (0, 5) \\text{ and } (1, 2)"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -4.5,
          8.5,
          5.166666666666667,
          -4.5
        ],
        "showConstructionPoints": true,
        "boardOptions": {
          "axis": true,
          "grid": true
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-4, 0], [4.666666666666667, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -4], [0, 8]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.366666666666667, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 7.7, 'y'], {fontSize: 12});\nboard.create('line', [[0, 5], [1, 2]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [0, 5], {size: 3, color: 'red', name: '(0, 5)', withLabel: true, label: {offset: [10, 5]}});\nboard.create('point', [1, 2], {size: 3, color: 'red', name: '(1, 2)', withLabel: true, label: {offset: [10, 5]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y9-11e-q1f",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Sketch the graph of the line \\(y = 4 - x\\) by calculating the \\(y\\)-intercept and finding one other point.",
    "a": "Line with y-intercept at \\((0, 4)\\) passing through \\((1, 3)\\).",
    "solution": "To sketch the line \\(y = 4 - x\\):\n\n1. **Find the \\(y\\)-intercept** (set \\(x = 0\\)):\n   \\(y = -1(0) + 4 = 4\\)\n   So, the \\(y\\)-intercept is at \\((0, 4)\\).\n\n2. **Find one other point** (substitute \\(x = 1\\)):\n   \\(y = -1(1) + 4 = 3\\)\n   So, another point on the line is \\((1, 3)\\).\n\n3. Plot these two points and draw a straight line through them.",
    "t": "Sketching linear graphs",
    "hint": "Substitute \\(x = 0\\) to find the \\(y\\)-intercept, then choose another value like \\(x = 1\\) to find a second point.",
    "solutionSteps": [
      {
        "explanation": "Calculate the y-intercept by setting x = 0.",
        "workingOut": "x = 0 \\implies y = 4"
      },
      {
        "explanation": "Find another point by setting x = 1.",
        "workingOut": "x = 1 \\implies y = 3"
      },
      {
        "explanation": "Draw a straight line through (0, y-intercept) and the second point.",
        "workingOut": "\\text{Line passes through } (0, 4) \\text{ and } (1, 3)"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -4.5,
          7.5,
          7.5,
          -4.5
        ],
        "showConstructionPoints": true,
        "boardOptions": {
          "axis": true,
          "grid": true
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-4, 0], [7, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -4], [0, 7]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [6.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 6.7, 'y'], {fontSize: 12});\nboard.create('line', [[0, 4], [1, 3]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [0, 4], {size: 3, color: 'red', name: '(0, 4)', withLabel: true, label: {offset: [10, 5]}});\nboard.create('point', [1, 3], {size: 3, color: 'red', name: '(1, 3)', withLabel: true, label: {offset: [10, 5]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y9-11e-q1g",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Sketch the graph of the line \\(y = \\frac{1}{3}x + 2\\) by calculating the \\(y\\)-intercept and finding one other point.",
    "a": "Line with y-intercept at \\((0, 2)\\) passing through \\((1, 2.3333333333333335)\\).",
    "solution": "To sketch the line \\(y = \\frac{1}{3}x + 2\\):\n\n1. **Find the \\(y\\)-intercept** (set \\(x = 0\\)):\n   \\(y = \\frac{1}{3}(0) + 2 = 2\\)\n   So, the \\(y\\)-intercept is at \\((0, 2)\\).\n\n2. **Find one other point** (substitute \\(x = 1\\)):\n   \\(y = \\frac{1}{3}(1) + 2 = 2.3333333333333335\\)\n   So, another point on the line is \\((1, 2.3333333333333335)\\).\n\n3. Plot these two points and draw a straight line through them.",
    "t": "Sketching linear graphs",
    "hint": "Substitute \\(x = 0\\) to find the \\(y\\)-intercept, then choose another value like \\(x = 1\\) to find a second point.",
    "solutionSteps": [
      {
        "explanation": "Calculate the y-intercept by setting x = 0.",
        "workingOut": "x = 0 \\implies y = 2"
      },
      {
        "explanation": "Find another point by setting x = 1.",
        "workingOut": "x = 1 \\implies y = 2.3333333333333335"
      },
      {
        "explanation": "Draw a straight line through (0, y-intercept) and the second point.",
        "workingOut": "\\text{Line passes through } (0, 2) \\text{ and } (1, 2.3333333333333335)"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -9.5,
          6.5,
          4.5,
          -4.5
        ],
        "showConstructionPoints": true,
        "boardOptions": {
          "axis": true,
          "grid": true
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-9, 0], [4, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -4], [0, 6]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [3.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 5.7, 'y'], {fontSize: 12});\nboard.create('line', [[0, 2], [1, 2.3333333333333335]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [0, 2], {size: 3, color: 'red', name: '(0, 2)', withLabel: true, label: {offset: [10, 5]}});\nboard.create('point', [1, 2.3333333333333335], {size: 3, color: 'red', name: '(1, 2.3333333333333335)', withLabel: true, label: {offset: [10, 5]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y9-11e-q1h",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Sketch the graph of the line \\(y = \\frac{3}{4}x + 1\\) by calculating the \\(y\\)-intercept and finding one other point.",
    "a": "Line with y-intercept at \\((0, 1)\\) passing through \\((1, 1.75)\\).",
    "solution": "To sketch the line \\(y = \\frac{3}{4}x + 1\\):\n\n1. **Find the \\(y\\)-intercept** (set \\(x = 0\\)):\n   \\(y = \\frac{3}{4}(0) + 1 = 1\\)\n   So, the \\(y\\)-intercept is at \\((0, 1)\\).\n\n2. **Find one other point** (substitute \\(x = 1\\)):\n   \\(y = \\frac{3}{4}(1) + 1 = 1.75\\)\n   So, another point on the line is \\((1, 1.75)\\).\n\n3. Plot these two points and draw a straight line through them.",
    "t": "Sketching linear graphs",
    "hint": "Substitute \\(x = 0\\) to find the \\(y\\)-intercept, then choose another value like \\(x = 1\\) to find a second point.",
    "solutionSteps": [
      {
        "explanation": "Calculate the y-intercept by setting x = 0.",
        "workingOut": "x = 0 \\implies y = 1"
      },
      {
        "explanation": "Find another point by setting x = 1.",
        "workingOut": "x = 1 \\implies y = 1.75"
      },
      {
        "explanation": "Draw a straight line through (0, y-intercept) and the second point.",
        "workingOut": "\\text{Line passes through } (0, 1) \\text{ and } (1, 1.75)"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -4.833333333333333,
          6.5,
          4.5,
          -4.5
        ],
        "showConstructionPoints": true,
        "boardOptions": {
          "axis": true,
          "grid": true
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-4.333333333333333, 0], [4, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -4], [0, 6]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [3.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 5.7, 'y'], {fontSize: 12});\nboard.create('line', [[0, 1], [1, 1.75]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [0, 1], {size: 3, color: 'red', name: '(0, 1)', withLabel: true, label: {offset: [10, 5]}});\nboard.create('point', [1, 1.75], {size: 3, color: 'red', name: '(1, 1.75)', withLabel: true, label: {offset: [10, 5]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y9-11e-q1i",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Sketch the graph of the line \\(y = -3x + 2\\) by calculating the \\(y\\)-intercept and finding one other point.",
    "a": "Line with y-intercept at \\((0, 2)\\) passing through \\((1, -1)\\).",
    "solution": "To sketch the line \\(y = -3x + 2\\):\n\n1. **Find the \\(y\\)-intercept** (set \\(x = 0\\)):\n   \\(y = -3(0) + 2 = 2\\)\n   So, the \\(y\\)-intercept is at \\((0, 2)\\).\n\n2. **Find one other point** (substitute \\(x = 1\\)):\n   \\(y = -3(1) + 2 = -1\\)\n   So, another point on the line is \\((1, -1)\\).\n\n3. Plot these two points and draw a straight line through them.",
    "t": "Sketching linear graphs",
    "hint": "Substitute \\(x = 0\\) to find the \\(y\\)-intercept, then choose another value like \\(x = 1\\) to find a second point.",
    "solutionSteps": [
      {
        "explanation": "Calculate the y-intercept by setting x = 0.",
        "workingOut": "x = 0 \\implies y = 2"
      },
      {
        "explanation": "Find another point by setting x = 1.",
        "workingOut": "x = 1 \\implies y = -1"
      },
      {
        "explanation": "Draw a straight line through (0, y-intercept) and the second point.",
        "workingOut": "\\text{Line passes through } (0, 2) \\text{ and } (1, -1)"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -4.5,
          6.5,
          4.5,
          -4.5
        ],
        "showConstructionPoints": true,
        "boardOptions": {
          "axis": true,
          "grid": true
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-4, 0], [4, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -4], [0, 6]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [3.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 5.7, 'y'], {fontSize: 12});\nboard.create('line', [[0, 2], [1, -1]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [0, 2], {size: 3, color: 'red', name: '(0, 2)', withLabel: true, label: {offset: [10, 5]}});\nboard.create('point', [1, -1], {size: 3, color: 'red', name: '(1, -1)', withLabel: true, label: {offset: [10, 5]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y9-11e-q2a",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Sketch the graph of the line \\(y = 5x\\).",
    "a": "Line passing through the origin \\((0, 0)\\) and \\((2, 10)\\).",
    "solution": "To sketch the line \\(y = 5x\\):\n\n1. **Recognise it passes through the origin**:\n   When \\(x = 0\\), \\(y = 0\\).\n   This gives our first point: \\((0, 0)\\).\n\n2. **Find a second point**:\n   Substitute \\(x = 2\\):\n   \\(y = 5 \\times 2 = 10\\).\n   This gives our second point: \\((2, 10)\\).\n\n3. Plot \\((0, 0)\\) and \\((2, 10)\\) and draw a line through them.",
    "t": "Sketching linear graphs",
    "hint": "This line passes through the origin. Find a second point by substituting a non-zero value for \\(x\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the origin (0, 0) as the y-intercept.",
        "workingOut": "x = 0 \\implies y = 0"
      },
      {
        "explanation": "Find a second point by substituting x = 2.",
        "workingOut": "x = 2 \\implies y = 10"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -6.5,
          13.5,
          6.5,
          -13.5
        ],
        "showConstructionPoints": true,
        "boardOptions": {
          "axis": true,
          "grid": true
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-6, 0], [6, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -13], [0, 13]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [5.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 12.7, 'y'], {fontSize: 12});\nboard.create('line', [[0, 0], [2, 10]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [0, 0], {size: 3, color: 'red', name: '(0, 0)', withLabel: true, label: {offset: [-15, -15]}});\nboard.create('point', [2, 10], {size: 3, color: 'red', name: '(2, 10)', withLabel: true, label: {offset: [10, 5]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y9-11e-q2b",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Sketch the graph of the line \\(y = 3x\\).",
    "a": "Line passing through the origin \\((0, 0)\\) and \\((2, 6)\\).",
    "solution": "To sketch the line \\(y = 3x\\):\n\n1. **Recognise it passes through the origin**:\n   When \\(x = 0\\), \\(y = 0\\).\n   This gives our first point: \\((0, 0)\\).\n\n2. **Find a second point**:\n   Substitute \\(x = 2\\):\n   \\(y = 3 \\times 2 = 6\\).\n   This gives our second point: \\((2, 6)\\).\n\n3. Plot \\((0, 0)\\) and \\((2, 6)\\) and draw a line through them.",
    "t": "Sketching linear graphs",
    "hint": "This line passes through the origin. Find a second point by substituting a non-zero value for \\(x\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the origin (0, 0) as the y-intercept.",
        "workingOut": "x = 0 \\implies y = 0"
      },
      {
        "explanation": "Find a second point by substituting x = 2.",
        "workingOut": "x = 2 \\implies y = 6"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -6.5,
          9.5,
          6.5,
          -9.5
        ],
        "showConstructionPoints": true,
        "boardOptions": {
          "axis": true,
          "grid": true
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-6, 0], [6, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -9], [0, 9]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [5.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 8.7, 'y'], {fontSize: 12});\nboard.create('line', [[0, 0], [2, 6]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [0, 0], {size: 3, color: 'red', name: '(0, 0)', withLabel: true, label: {offset: [-15, -15]}});\nboard.create('point', [2, 6], {size: 3, color: 'red', name: '(2, 6)', withLabel: true, label: {offset: [10, 5]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y9-11e-q2c",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Sketch the graph of the line \\(y = 4x\\).",
    "a": "Line passing through the origin \\((0, 0)\\) and \\((2, 8)\\).",
    "solution": "To sketch the line \\(y = 4x\\):\n\n1. **Recognise it passes through the origin**:\n   When \\(x = 0\\), \\(y = 0\\).\n   This gives our first point: \\((0, 0)\\).\n\n2. **Find a second point**:\n   Substitute \\(x = 2\\):\n   \\(y = 4 \\times 2 = 8\\).\n   This gives our second point: \\((2, 8)\\).\n\n3. Plot \\((0, 0)\\) and \\((2, 8)\\) and draw a line through them.",
    "t": "Sketching linear graphs",
    "hint": "This line passes through the origin. Find a second point by substituting a non-zero value for \\(x\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the origin (0, 0) as the y-intercept.",
        "workingOut": "x = 0 \\implies y = 0"
      },
      {
        "explanation": "Find a second point by substituting x = 2.",
        "workingOut": "x = 2 \\implies y = 8"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -6.5,
          11.5,
          6.5,
          -11.5
        ],
        "showConstructionPoints": true,
        "boardOptions": {
          "axis": true,
          "grid": true
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-6, 0], [6, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -11], [0, 11]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [5.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 10.7, 'y'], {fontSize: 12});\nboard.create('line', [[0, 0], [2, 8]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [0, 0], {size: 3, color: 'red', name: '(0, 0)', withLabel: true, label: {offset: [-15, -15]}});\nboard.create('point', [2, 8], {size: 3, color: 'red', name: '(2, 8)', withLabel: true, label: {offset: [10, 5]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y9-11e-q2d",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Sketch the graph of the line \\(y = \\frac{1}{3}x\\).",
    "a": "Line passing through the origin \\((0, 0)\\) and \\((12, 4)\\).",
    "solution": "To sketch the line \\(y = \\frac{1}{3}x\\):\n\n1. **Recognise it passes through the origin**:\n   When \\(x = 0\\), \\(y = 0\\).\n   This gives our first point: \\((0, 0)\\).\n\n2. **Find a second point**:\n   Substitute \\(x = 12\\):\n   \\(y = \\frac{1}{3} \\times 12 = 4\\).\n   This gives our second point: \\((12, 4)\\).\n\n3. Plot \\((0, 0)\\) and \\((12, 4)\\) and draw a line through them.",
    "t": "Sketching linear graphs",
    "hint": "This line passes through the origin. Find a second point by substituting a non-zero value for \\(x\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the origin (0, 0) as the y-intercept.",
        "workingOut": "x = 0 \\implies y = 0"
      },
      {
        "explanation": "Find a second point by substituting x = 12.",
        "workingOut": "x = 12 \\implies y = 4"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -15.5,
          7.5,
          15.5,
          -7.5
        ],
        "showConstructionPoints": true,
        "boardOptions": {
          "axis": true,
          "grid": true
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-15, 0], [15, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -7], [0, 7]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [14.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 6.7, 'y'], {fontSize: 12});\nboard.create('line', [[0, 0], [12, 4]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [0, 0], {size: 3, color: 'red', name: '(0, 0)', withLabel: true, label: {offset: [-15, -15]}});\nboard.create('point', [12, 4], {size: 3, color: 'red', name: '(12, 4)', withLabel: true, label: {offset: [10, 5]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y9-11e-q2e",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Sketch the graph of the line \\(y = -3x\\).",
    "a": "Line passing through the origin \\((0, 0)\\) and \\((2, -6)\\).",
    "solution": "To sketch the line \\(y = -3x\\):\n\n1. **Recognise it passes through the origin**:\n   When \\(x = 0\\), \\(y = 0\\).\n   This gives our first point: \\((0, 0)\\).\n\n2. **Find a second point**:\n   Substitute \\(x = 2\\):\n   \\(y = -3 \\times 2 = -6\\).\n   This gives our second point: \\((2, -6)\\).\n\n3. Plot \\((0, 0)\\) and \\((2, -6)\\) and draw a line through them.",
    "t": "Sketching linear graphs",
    "hint": "This line passes through the origin. Find a second point by substituting a non-zero value for \\(x\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the origin (0, 0) as the y-intercept.",
        "workingOut": "x = 0 \\implies y = 0"
      },
      {
        "explanation": "Find a second point by substituting x = 2.",
        "workingOut": "x = 2 \\implies y = -6"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -6.5,
          9.5,
          6.5,
          -9.5
        ],
        "showConstructionPoints": true,
        "boardOptions": {
          "axis": true,
          "grid": true
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-6, 0], [6, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -9], [0, 9]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [5.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 8.7, 'y'], {fontSize: 12});\nboard.create('line', [[0, 0], [2, -6]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [0, 0], {size: 3, color: 'red', name: '(0, 0)', withLabel: true, label: {offset: [-15, -15]}});\nboard.create('point', [2, -6], {size: 3, color: 'red', name: '(2, -6)', withLabel: true, label: {offset: [10, 5]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y9-11e-q2f",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Sketch the graph of the line \\(y = -2x\\).",
    "a": "Line passing through the origin \\((0, 0)\\) and \\((2, -4)\\).",
    "solution": "To sketch the line \\(y = -2x\\):\n\n1. **Recognise it passes through the origin**:\n   When \\(x = 0\\), \\(y = 0\\).\n   This gives our first point: \\((0, 0)\\).\n\n2. **Find a second point**:\n   Substitute \\(x = 2\\):\n   \\(y = -2 \\times 2 = -4\\).\n   This gives our second point: \\((2, -4)\\).\n\n3. Plot \\((0, 0)\\) and \\((2, -4)\\) and draw a line through them.",
    "t": "Sketching linear graphs",
    "hint": "This line passes through the origin. Find a second point by substituting a non-zero value for \\(x\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the origin (0, 0) as the y-intercept.",
        "workingOut": "x = 0 \\implies y = 0"
      },
      {
        "explanation": "Find a second point by substituting x = 2.",
        "workingOut": "x = 2 \\implies y = -4"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -6.5,
          7.5,
          6.5,
          -7.5
        ],
        "showConstructionPoints": true,
        "boardOptions": {
          "axis": true,
          "grid": true
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-6, 0], [6, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -7], [0, 7]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [5.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 6.7, 'y'], {fontSize: 12});\nboard.create('line', [[0, 0], [2, -4]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [0, 0], {size: 3, color: 'red', name: '(0, 0)', withLabel: true, label: {offset: [-15, -15]}});\nboard.create('point', [2, -4], {size: 3, color: 'red', name: '(2, -4)', withLabel: true, label: {offset: [10, 5]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y9-11e-q2g",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Sketch the graph of the line \\(x + 3y = 0\\).",
    "a": "Line passing through the origin \\((0, 0)\\) and \\((12, -4)\\).",
    "solution": "To sketch the line \\(x + 3y = 0\\):\n\n1. **Recognise it passes through the origin**:\n   When \\(x = 0\\), \\(y = 0\\).\n   This gives our first point: \\((0, 0)\\).\n\n2. **Find a second point**:\n   Substitute \\(x = 12\\):\n   \\(y = -\\frac{1}{3} \\times 12 = -4\\).\n   This gives our second point: \\((12, -4)\\).\n\n3. Plot \\((0, 0)\\) and \\((12, -4)\\) and draw a line through them.",
    "t": "Sketching linear graphs",
    "hint": "This line passes through the origin. Find a second point by substituting a non-zero value for \\(x\\).",
    "solutionSteps": [
      {
        "explanation": "Rearrange the equation to express y in terms of x.",
        "workingOut": "y = -\\frac{1}{3}x"
      },
      {
        "explanation": "Identify the origin (0, 0) as the y-intercept.",
        "workingOut": "x = 0 \\implies y = 0"
      },
      {
        "explanation": "Find a second point by substituting x = 12.",
        "workingOut": "x = 12 \\implies y = -4"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -15.5,
          7.5,
          15.5,
          -7.5
        ],
        "showConstructionPoints": true,
        "boardOptions": {
          "axis": true,
          "grid": true
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-15, 0], [15, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -7], [0, 7]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [14.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 6.7, 'y'], {fontSize: 12});\nboard.create('line', [[0, 0], [12, -4]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [0, 0], {size: 3, color: 'red', name: '(0, 0)', withLabel: true, label: {offset: [-15, -15]}});\nboard.create('point', [12, -4], {size: 3, color: 'red', name: '(12, -4)', withLabel: true, label: {offset: [10, 5]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y9-11e-q2h",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Sketch the graph of the line \\(3x + y = 0\\).",
    "a": "Line passing through the origin \\((0, 0)\\) and \\((2, -6)\\).",
    "solution": "To sketch the line \\(3x + y = 0\\):\n\n1. **Recognise it passes through the origin**:\n   When \\(x = 0\\), \\(y = 0\\).\n   This gives our first point: \\((0, 0)\\).\n\n2. **Find a second point**:\n   Substitute \\(x = 2\\):\n   \\(y = -3 \\times 2 = -6\\).\n   This gives our second point: \\((2, -6)\\).\n\n3. Plot \\((0, 0)\\) and \\((2, -6)\\) and draw a line through them.",
    "t": "Sketching linear graphs",
    "hint": "This line passes through the origin. Find a second point by substituting a non-zero value for \\(x\\).",
    "solutionSteps": [
      {
        "explanation": "Rearrange the equation to express y in terms of x.",
        "workingOut": "y = -3x"
      },
      {
        "explanation": "Identify the origin (0, 0) as the y-intercept.",
        "workingOut": "x = 0 \\implies y = 0"
      },
      {
        "explanation": "Find a second point by substituting x = 2.",
        "workingOut": "x = 2 \\implies y = -6"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -6.5,
          9.5,
          6.5,
          -9.5
        ],
        "showConstructionPoints": true,
        "boardOptions": {
          "axis": true,
          "grid": true
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-6, 0], [6, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -9], [0, 9]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [5.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 8.7, 'y'], {fontSize: 12});\nboard.create('line', [[0, 0], [2, -6]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [0, 0], {size: 3, color: 'red', name: '(0, 0)', withLabel: true, label: {offset: [-15, -15]}});\nboard.create('point', [2, -6], {size: 3, color: 'red', name: '(2, -6)', withLabel: true, label: {offset: [10, 5]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y9-11e-q2i",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Sketch the graph of the line \\(3y - 2x = 0\\).",
    "a": "Line passing through the origin \\((0, 0)\\) and \\((12, 8)\\).",
    "solution": "To sketch the line \\(3y - 2x = 0\\):\n\n1. **Recognise it passes through the origin**:\n   When \\(x = 0\\), \\(y = 0\\).\n   This gives our first point: \\((0, 0)\\).\n\n2. **Find a second point**:\n   Substitute \\(x = 12\\):\n   \\(y = \\frac{2}{3} \\times 12 = 8\\).\n   This gives our second point: \\((12, 8)\\).\n\n3. Plot \\((0, 0)\\) and \\((12, 8)\\) and draw a line through them.",
    "t": "Sketching linear graphs",
    "hint": "This line passes through the origin. Find a second point by substituting a non-zero value for \\(x\\).",
    "solutionSteps": [
      {
        "explanation": "Rearrange the equation to express y in terms of x.",
        "workingOut": "y = \\frac{2}{3}x"
      },
      {
        "explanation": "Identify the origin (0, 0) as the y-intercept.",
        "workingOut": "x = 0 \\implies y = 0"
      },
      {
        "explanation": "Find a second point by substituting x = 12.",
        "workingOut": "x = 12 \\implies y = 8"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -15.5,
          11.5,
          15.5,
          -11.5
        ],
        "showConstructionPoints": true,
        "boardOptions": {
          "axis": true,
          "grid": true
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-15, 0], [15, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -11], [0, 11]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [14.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 10.7, 'y'], {fontSize: 12});\nboard.create('line', [[0, 0], [12, 8]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [0, 0], {size: 3, color: 'red', name: '(0, 0)', withLabel: true, label: {offset: [-15, -15]}});\nboard.create('point', [12, 8], {size: 3, color: 'red', name: '(12, 8)', withLabel: true, label: {offset: [10, 5]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y9-11e-q2j",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Sketch the graph of the line \\(2x + y = 0\\).",
    "a": "Line passing through the origin \\((0, 0)\\) and \\((2, -4)\\).",
    "solution": "To sketch the line \\(2x + y = 0\\):\n\n1. **Recognise it passes through the origin**:\n   When \\(x = 0\\), \\(y = 0\\).\n   This gives our first point: \\((0, 0)\\).\n\n2. **Find a second point**:\n   Substitute \\(x = 2\\):\n   \\(y = -2 \\times 2 = -4\\).\n   This gives our second point: \\((2, -4)\\).\n\n3. Plot \\((0, 0)\\) and \\((2, -4)\\) and draw a line through them.",
    "t": "Sketching linear graphs",
    "hint": "This line passes through the origin. Find a second point by substituting a non-zero value for \\(x\\).",
    "solutionSteps": [
      {
        "explanation": "Rearrange the equation to express y in terms of x.",
        "workingOut": "y = -2x"
      },
      {
        "explanation": "Identify the origin (0, 0) as the y-intercept.",
        "workingOut": "x = 0 \\implies y = 0"
      },
      {
        "explanation": "Find a second point by substituting x = 2.",
        "workingOut": "x = 2 \\implies y = -4"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -6.5,
          7.5,
          6.5,
          -7.5
        ],
        "showConstructionPoints": true,
        "boardOptions": {
          "axis": true,
          "grid": true
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-6, 0], [6, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -7], [0, 7]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [5.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 6.7, 'y'], {fontSize: 12});\nboard.create('line', [[0, 0], [2, -4]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [0, 0], {size: 3, color: 'red', name: '(0, 0)', withLabel: true, label: {offset: [-15, -15]}});\nboard.create('point', [2, -4], {size: 3, color: 'red', name: '(2, -4)', withLabel: true, label: {offset: [10, 5]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y9-11e-q2k",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Sketch the graph of the line \\(\\frac{x}{4} - \\frac{y}{3} = 0\\).",
    "a": "Line passing through the origin \\((0, 0)\\) and \\((12, 9)\\).",
    "solution": "To sketch the line \\(\\frac{x}{4} - \\frac{y}{3} = 0\\):\n\n1. **Recognise it passes through the origin**:\n   When \\(x = 0\\), \\(y = 0\\).\n   This gives our first point: \\((0, 0)\\).\n\n2. **Find a second point**:\n   Substitute \\(x = 12\\):\n   \\(y = \\frac{3}{4} \\times 12 = 9\\).\n   This gives our second point: \\((12, 9)\\).\n\n3. Plot \\((0, 0)\\) and \\((12, 9)\\) and draw a line through them.",
    "t": "Sketching linear graphs",
    "hint": "This line passes through the origin. Find a second point by substituting a non-zero value for \\(x\\).",
    "solutionSteps": [
      {
        "explanation": "Rearrange the equation to express y in terms of x.",
        "workingOut": "y = \\frac{3}{4}x"
      },
      {
        "explanation": "Identify the origin (0, 0) as the y-intercept.",
        "workingOut": "x = 0 \\implies y = 0"
      },
      {
        "explanation": "Find a second point by substituting x = 12.",
        "workingOut": "x = 12 \\implies y = 9"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -15.5,
          12.5,
          15.5,
          -12.5
        ],
        "showConstructionPoints": true,
        "boardOptions": {
          "axis": true,
          "grid": true
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-15, 0], [15, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -12], [0, 12]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [14.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 11.7, 'y'], {fontSize: 12});\nboard.create('line', [[0, 0], [12, 9]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [0, 0], {size: 3, color: 'red', name: '(0, 0)', withLabel: true, label: {offset: [-15, -15]}});\nboard.create('point', [12, 9], {size: 3, color: 'red', name: '(12, 9)', withLabel: true, label: {offset: [10, 5]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y9-11e-q2l",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Sketch the graph of the line \\(\\frac{y}{3} - x = 0\\).",
    "a": "Line passing through the origin \\((0, 0)\\) and \\((12, 36)\\).",
    "solution": "To sketch the line \\(\\frac{y}{3} - x = 0\\):\n\n1. **Recognise it passes through the origin**:\n   When \\(x = 0\\), \\(y = 0\\).\n   This gives our first point: \\((0, 0)\\).\n\n2. **Find a second point**:\n   Substitute \\(x = 12\\):\n   \\(y = 3 \\times 12 = 36\\).\n   This gives our second point: \\((12, 36)\\).\n\n3. Plot \\((0, 0)\\) and \\((12, 36)\\) and draw a line through them.",
    "t": "Sketching linear graphs",
    "hint": "This line passes through the origin. Find a second point by substituting a non-zero value for \\(x\\).",
    "solutionSteps": [
      {
        "explanation": "Rearrange the equation to express y in terms of x.",
        "workingOut": "y = 3x"
      },
      {
        "explanation": "Identify the origin (0, 0) as the y-intercept.",
        "workingOut": "x = 0 \\implies y = 0"
      },
      {
        "explanation": "Find a second point by substituting x = 12.",
        "workingOut": "x = 12 \\implies y = 36"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -15.5,
          39.5,
          15.5,
          -39.5
        ],
        "showConstructionPoints": true,
        "boardOptions": {
          "axis": true,
          "grid": true
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-15, 0], [15, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -39], [0, 39]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [14.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 38.7, 'y'], {fontSize: 12});\nboard.create('line', [[0, 0], [12, 36]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [0, 0], {size: 3, color: 'red', name: '(0, 0)', withLabel: true, label: {offset: [-15, -15]}});\nboard.create('point', [12, 36], {size: 3, color: 'red', name: '(12, 36)', withLabel: true, label: {offset: [10, 5]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y9-11e-q3a",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Sketch the graph of the line \\(3x + y = 6\\) by calculating the coordinates of the \\(x\\)- and \\(y\\)-intercepts.",
    "a": "Line with x-intercept at \\((2, 0)\\) and y-intercept at \\((0, 6)\\).",
    "solution": "To sketch the line \\(3x + y = 6\\) using intercepts:\n\n1. **Find the \\(y\\)-intercept** (set \\(x = 0\\)):\n   Substitute \\(x = 0\\):\n   \\(y = 6\\).\n   So, the \\(y\\)-intercept is \\((0, 6)\\).\n\n2. **Find the \\(x\\)-intercept** (set \\(y = 0\\)):\n   Substitute \\(y = 0\\):\n   \\(x = 2\\).\n   So, the \\(x\\)-intercept is \\((2, 0)\\).\n\n3. Plot \\((0, 6)\\) and \\((2, 0)\\) and draw a line through them.",
    "t": "Sketching linear graphs",
    "hint": "Set \\(x = 0\\) to find the \\(y\\)-intercept, and set \\(y = 0\\) to find the \\(x\\)-intercept.",
    "solutionSteps": [
      {
        "explanation": "Calculate the y-intercept by setting x = 0.",
        "workingOut": "x = 0 \\implies y = 6"
      },
      {
        "explanation": "Calculate the x-intercept by setting y = 0.",
        "workingOut": "y = 0 \\implies x = 2"
      },
      {
        "explanation": "Draw a straight line passing through both intercepts.",
        "workingOut": "\\text{Line passes through } (0, 6) \\text{ and } (2, 0)"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -5.5,
          9.5,
          5.5,
          -5.5
        ],
        "showConstructionPoints": true,
        "boardOptions": {
          "axis": true,
          "grid": true
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-5, 0], [5, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -5], [0, 9]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 8.7, 'y'], {fontSize: 12});\nboard.create('line', [[2, 0], [0, 6]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [2, 0], {size: 3, color: 'red', name: '(2, 0)', withLabel: true, label: {offset: [5, 10]}});\nboard.create('point', [0, 6], {size: 3, color: 'red', name: '(0, 6)', withLabel: true, label: {offset: [10, 5]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y9-11e-q3b",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Sketch the graph of the line \\(x + 2y = 4\\) by calculating the coordinates of the \\(x\\)- and \\(y\\)-intercepts.",
    "a": "Line with x-intercept at \\((4, 0)\\) and y-intercept at \\((0, 2)\\).",
    "solution": "To sketch the line \\(x + 2y = 4\\) using intercepts:\n\n1. **Find the \\(y\\)-intercept** (set \\(x = 0\\)):\n   Substitute \\(x = 0\\):\n   \\(y = 2\\).\n   So, the \\(y\\)-intercept is \\((0, 2)\\).\n\n2. **Find the \\(x\\)-intercept** (set \\(y = 0\\)):\n   Substitute \\(y = 0\\):\n   \\(x = 4\\).\n   So, the \\(x\\)-intercept is \\((4, 0)\\).\n\n3. Plot \\((0, 2)\\) and \\((4, 0)\\) and draw a line through them.",
    "t": "Sketching linear graphs",
    "hint": "Set \\(x = 0\\) to find the \\(y\\)-intercept, and set \\(y = 0\\) to find the \\(x\\)-intercept.",
    "solutionSteps": [
      {
        "explanation": "Calculate the y-intercept by setting x = 0.",
        "workingOut": "x = 0 \\implies y = 2"
      },
      {
        "explanation": "Calculate the x-intercept by setting y = 0.",
        "workingOut": "y = 0 \\implies x = 4"
      },
      {
        "explanation": "Draw a straight line passing through both intercepts.",
        "workingOut": "\\text{Line passes through } (0, 2) \\text{ and } (4, 0)"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -5.5,
          5.5,
          7.5,
          -5.5
        ],
        "showConstructionPoints": true,
        "boardOptions": {
          "axis": true,
          "grid": true
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-5, 0], [7, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -5], [0, 5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [6.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 4.7, 'y'], {fontSize: 12});\nboard.create('line', [[4, 0], [0, 2]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [4, 0], {size: 3, color: 'red', name: '(4, 0)', withLabel: true, label: {offset: [5, 10]}});\nboard.create('point', [0, 2], {size: 3, color: 'red', name: '(0, 2)', withLabel: true, label: {offset: [10, 5]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y9-11e-q3c",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Sketch the graph of the line \\(2x + 5y = 10\\) by calculating the coordinates of the \\(x\\)- and \\(y\\)-intercepts.",
    "a": "Line with x-intercept at \\((5, 0)\\) and y-intercept at \\((0, 2)\\).",
    "solution": "To sketch the line \\(2x + 5y = 10\\) using intercepts:\n\n1. **Find the \\(y\\)-intercept** (set \\(x = 0\\)):\n   Substitute \\(x = 0\\):\n   \\(y = 2\\).\n   So, the \\(y\\)-intercept is \\((0, 2)\\).\n\n2. **Find the \\(x\\)-intercept** (set \\(y = 0\\)):\n   Substitute \\(y = 0\\):\n   \\(x = 5\\).\n   So, the \\(x\\)-intercept is \\((5, 0)\\).\n\n3. Plot \\((0, 2)\\) and \\((5, 0)\\) and draw a line through them.",
    "t": "Sketching linear graphs",
    "hint": "Set \\(x = 0\\) to find the \\(y\\)-intercept, and set \\(y = 0\\) to find the \\(x\\)-intercept.",
    "solutionSteps": [
      {
        "explanation": "Calculate the y-intercept by setting x = 0.",
        "workingOut": "x = 0 \\implies y = 2"
      },
      {
        "explanation": "Calculate the x-intercept by setting y = 0.",
        "workingOut": "y = 0 \\implies x = 5"
      },
      {
        "explanation": "Draw a straight line passing through both intercepts.",
        "workingOut": "\\text{Line passes through } (0, 2) \\text{ and } (5, 0)"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -5.5,
          5.5,
          8.5,
          -5.5
        ],
        "showConstructionPoints": true,
        "boardOptions": {
          "axis": true,
          "grid": true
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-5, 0], [8, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -5], [0, 5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [7.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 4.7, 'y'], {fontSize: 12});\nboard.create('line', [[5, 0], [0, 2]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [5, 0], {size: 3, color: 'red', name: '(5, 0)', withLabel: true, label: {offset: [5, 10]}});\nboard.create('point', [0, 2], {size: 3, color: 'red', name: '(0, 2)', withLabel: true, label: {offset: [10, 5]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y9-11e-q3d",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Sketch the graph of the line \\(3x + 2y = 6\\) by calculating the coordinates of the \\(x\\)- and \\(y\\)-intercepts.",
    "a": "Line with x-intercept at \\((2, 0)\\) and y-intercept at \\((0, 3)\\).",
    "solution": "To sketch the line \\(3x + 2y = 6\\) using intercepts:\n\n1. **Find the \\(y\\)-intercept** (set \\(x = 0\\)):\n   Substitute \\(x = 0\\):\n   \\(y = 3\\).\n   So, the \\(y\\)-intercept is \\((0, 3)\\).\n\n2. **Find the \\(x\\)-intercept** (set \\(y = 0\\)):\n   Substitute \\(y = 0\\):\n   \\(x = 2\\).\n   So, the \\(x\\)-intercept is \\((2, 0)\\).\n\n3. Plot \\((0, 3)\\) and \\((2, 0)\\) and draw a line through them.",
    "t": "Sketching linear graphs",
    "hint": "Set \\(x = 0\\) to find the \\(y\\)-intercept, and set \\(y = 0\\) to find the \\(x\\)-intercept.",
    "solutionSteps": [
      {
        "explanation": "Calculate the y-intercept by setting x = 0.",
        "workingOut": "x = 0 \\implies y = 3"
      },
      {
        "explanation": "Calculate the x-intercept by setting y = 0.",
        "workingOut": "y = 0 \\implies x = 2"
      },
      {
        "explanation": "Draw a straight line passing through both intercepts.",
        "workingOut": "\\text{Line passes through } (0, 3) \\text{ and } (2, 0)"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -5.5,
          6.5,
          5.5,
          -5.5
        ],
        "showConstructionPoints": true,
        "boardOptions": {
          "axis": true,
          "grid": true
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-5, 0], [5, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -5], [0, 6]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 5.7, 'y'], {fontSize: 12});\nboard.create('line', [[2, 0], [0, 3]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [2, 0], {size: 3, color: 'red', name: '(2, 0)', withLabel: true, label: {offset: [5, 10]}});\nboard.create('point', [0, 3], {size: 3, color: 'red', name: '(0, 3)', withLabel: true, label: {offset: [10, 5]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y9-11e-q3e",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Sketch the graph of the line \\(x + 3y = 3\\) by calculating the coordinates of the \\(x\\)- and \\(y\\)-intercepts.",
    "a": "Line with x-intercept at \\((3, 0)\\) and y-intercept at \\((0, 1)\\).",
    "solution": "To sketch the line \\(x + 3y = 3\\) using intercepts:\n\n1. **Find the \\(y\\)-intercept** (set \\(x = 0\\)):\n   Substitute \\(x = 0\\):\n   \\(y = 1\\).\n   So, the \\(y\\)-intercept is \\((0, 1)\\).\n\n2. **Find the \\(x\\)-intercept** (set \\(y = 0\\)):\n   Substitute \\(y = 0\\):\n   \\(x = 3\\).\n   So, the \\(x\\)-intercept is \\((3, 0)\\).\n\n3. Plot \\((0, 1)\\) and \\((3, 0)\\) and draw a line through them.",
    "t": "Sketching linear graphs",
    "hint": "Set \\(x = 0\\) to find the \\(y\\)-intercept, and set \\(y = 0\\) to find the \\(x\\)-intercept.",
    "solutionSteps": [
      {
        "explanation": "Calculate the y-intercept by setting x = 0.",
        "workingOut": "x = 0 \\implies y = 1"
      },
      {
        "explanation": "Calculate the x-intercept by setting y = 0.",
        "workingOut": "y = 0 \\implies x = 3"
      },
      {
        "explanation": "Draw a straight line passing through both intercepts.",
        "workingOut": "\\text{Line passes through } (0, 1) \\text{ and } (3, 0)"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -5.5,
          5.5,
          6.5,
          -5.5
        ],
        "showConstructionPoints": true,
        "boardOptions": {
          "axis": true,
          "grid": true
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-5, 0], [6, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -5], [0, 5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [5.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 4.7, 'y'], {fontSize: 12});\nboard.create('line', [[3, 0], [0, 1]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [3, 0], {size: 3, color: 'red', name: '(3, 0)', withLabel: true, label: {offset: [5, 10]}});\nboard.create('point', [0, 1], {size: 3, color: 'red', name: '(0, 1)', withLabel: true, label: {offset: [10, 5]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y9-11e-q3f",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Sketch the graph of the line \\(2x + y = 4\\) by calculating the coordinates of the \\(x\\)- and \\(y\\)-intercepts.",
    "a": "Line with x-intercept at \\((2, 0)\\) and y-intercept at \\((0, 4)\\).",
    "solution": "To sketch the line \\(2x + y = 4\\) using intercepts:\n\n1. **Find the \\(y\\)-intercept** (set \\(x = 0\\)):\n   Substitute \\(x = 0\\):\n   \\(y = 4\\).\n   So, the \\(y\\)-intercept is \\((0, 4)\\).\n\n2. **Find the \\(x\\)-intercept** (set \\(y = 0\\)):\n   Substitute \\(y = 0\\):\n   \\(x = 2\\).\n   So, the \\(x\\)-intercept is \\((2, 0)\\).\n\n3. Plot \\((0, 4)\\) and \\((2, 0)\\) and draw a line through them.",
    "t": "Sketching linear graphs",
    "hint": "Set \\(x = 0\\) to find the \\(y\\)-intercept, and set \\(y = 0\\) to find the \\(x\\)-intercept.",
    "solutionSteps": [
      {
        "explanation": "Calculate the y-intercept by setting x = 0.",
        "workingOut": "x = 0 \\implies y = 4"
      },
      {
        "explanation": "Calculate the x-intercept by setting y = 0.",
        "workingOut": "y = 0 \\implies x = 2"
      },
      {
        "explanation": "Draw a straight line passing through both intercepts.",
        "workingOut": "\\text{Line passes through } (0, 4) \\text{ and } (2, 0)"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -5.5,
          7.5,
          5.5,
          -5.5
        ],
        "showConstructionPoints": true,
        "boardOptions": {
          "axis": true,
          "grid": true
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-5, 0], [5, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -5], [0, 7]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 6.7, 'y'], {fontSize: 12});\nboard.create('line', [[2, 0], [0, 4]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [2, 0], {size: 3, color: 'red', name: '(2, 0)', withLabel: true, label: {offset: [5, 10]}});\nboard.create('point', [0, 4], {size: 3, color: 'red', name: '(0, 4)', withLabel: true, label: {offset: [10, 5]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y9-11e-q3g",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Sketch the graph of the line \\(x - y = 3\\) by calculating the coordinates of the \\(x\\)- and \\(y\\)-intercepts.",
    "a": "Line with x-intercept at \\((3, 0)\\) and y-intercept at \\((0, -3)\\).",
    "solution": "To sketch the line \\(x - y = 3\\) using intercepts:\n\n1. **Find the \\(y\\)-intercept** (set \\(x = 0\\)):\n   Substitute \\(x = 0\\):\n   \\(y = -3\\).\n   So, the \\(y\\)-intercept is \\((0, -3)\\).\n\n2. **Find the \\(x\\)-intercept** (set \\(y = 0\\)):\n   Substitute \\(y = 0\\):\n   \\(x = 3\\).\n   So, the \\(x\\)-intercept is \\((3, 0)\\).\n\n3. Plot \\((0, -3)\\) and \\((3, 0)\\) and draw a line through them.",
    "t": "Sketching linear graphs",
    "hint": "Set \\(x = 0\\) to find the \\(y\\)-intercept, and set \\(y = 0\\) to find the \\(x\\)-intercept.",
    "solutionSteps": [
      {
        "explanation": "Calculate the y-intercept by setting x = 0.",
        "workingOut": "x = 0 \\implies y = -3"
      },
      {
        "explanation": "Calculate the x-intercept by setting y = 0.",
        "workingOut": "y = 0 \\implies x = 3"
      },
      {
        "explanation": "Draw a straight line passing through both intercepts.",
        "workingOut": "\\text{Line passes through } (0, -3) \\text{ and } (3, 0)"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -5.5,
          5.5,
          6.5,
          -6.5
        ],
        "showConstructionPoints": true,
        "boardOptions": {
          "axis": true,
          "grid": true
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-5, 0], [6, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -6], [0, 5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [5.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 4.7, 'y'], {fontSize: 12});\nboard.create('line', [[3, 0], [0, -3]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [3, 0], {size: 3, color: 'red', name: '(3, 0)', withLabel: true, label: {offset: [5, 10]}});\nboard.create('point', [0, -3], {size: 3, color: 'red', name: '(0, -3)', withLabel: true, label: {offset: [10, 5]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y9-11e-q3h",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Sketch the graph of the line \\(x - y = 2\\) by calculating the coordinates of the \\(x\\)- and \\(y\\)-intercepts.",
    "a": "Line with x-intercept at \\((2, 0)\\) and y-intercept at \\((0, -2)\\).",
    "solution": "To sketch the line \\(x - y = 2\\) using intercepts:\n\n1. **Find the \\(y\\)-intercept** (set \\(x = 0\\)):\n   Substitute \\(x = 0\\):\n   \\(y = -2\\).\n   So, the \\(y\\)-intercept is \\((0, -2)\\).\n\n2. **Find the \\(x\\)-intercept** (set \\(y = 0\\)):\n   Substitute \\(y = 0\\):\n   \\(x = 2\\).\n   So, the \\(x\\)-intercept is \\((2, 0)\\).\n\n3. Plot \\((0, -2)\\) and \\((2, 0)\\) and draw a line through them.",
    "t": "Sketching linear graphs",
    "hint": "Set \\(x = 0\\) to find the \\(y\\)-intercept, and set \\(y = 0\\) to find the \\(x\\)-intercept.",
    "solutionSteps": [
      {
        "explanation": "Calculate the y-intercept by setting x = 0.",
        "workingOut": "x = 0 \\implies y = -2"
      },
      {
        "explanation": "Calculate the x-intercept by setting y = 0.",
        "workingOut": "y = 0 \\implies x = 2"
      },
      {
        "explanation": "Draw a straight line passing through both intercepts.",
        "workingOut": "\\text{Line passes through } (0, -2) \\text{ and } (2, 0)"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -5.5,
          5.5,
          5.5,
          -5.5
        ],
        "showConstructionPoints": true,
        "boardOptions": {
          "axis": true,
          "grid": true
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-5, 0], [5, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -5], [0, 5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 4.7, 'y'], {fontSize: 12});\nboard.create('line', [[2, 0], [0, -2]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [2, 0], {size: 3, color: 'red', name: '(2, 0)', withLabel: true, label: {offset: [5, 10]}});\nboard.create('point', [0, -2], {size: 3, color: 'red', name: '(0, -2)', withLabel: true, label: {offset: [10, 5]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y9-11e-q3i",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Sketch the graph of the line \\(4x - y = 4\\) by calculating the coordinates of the \\(x\\)- and \\(y\\)-intercepts.",
    "a": "Line with x-intercept at \\((1, 0)\\) and y-intercept at \\((0, -4)\\).",
    "solution": "To sketch the line \\(4x - y = 4\\) using intercepts:\n\n1. **Find the \\(y\\)-intercept** (set \\(x = 0\\)):\n   Substitute \\(x = 0\\):\n   \\(y = -4\\).\n   So, the \\(y\\)-intercept is \\((0, -4)\\).\n\n2. **Find the \\(x\\)-intercept** (set \\(y = 0\\)):\n   Substitute \\(y = 0\\):\n   \\(x = 1\\).\n   So, the \\(x\\)-intercept is \\((1, 0)\\).\n\n3. Plot \\((0, -4)\\) and \\((1, 0)\\) and draw a line through them.",
    "t": "Sketching linear graphs",
    "hint": "Set \\(x = 0\\) to find the \\(y\\)-intercept, and set \\(y = 0\\) to find the \\(x\\)-intercept.",
    "solutionSteps": [
      {
        "explanation": "Calculate the y-intercept by setting x = 0.",
        "workingOut": "x = 0 \\implies y = -4"
      },
      {
        "explanation": "Calculate the x-intercept by setting y = 0.",
        "workingOut": "y = 0 \\implies x = 1"
      },
      {
        "explanation": "Draw a straight line passing through both intercepts.",
        "workingOut": "\\text{Line passes through } (0, -4) \\text{ and } (1, 0)"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -5.5,
          5.5,
          5.5,
          -7.5
        ],
        "showConstructionPoints": true,
        "boardOptions": {
          "axis": true,
          "grid": true
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-5, 0], [5, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -7], [0, 5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 4.7, 'y'], {fontSize: 12});\nboard.create('line', [[1, 0], [0, -4]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [1, 0], {size: 3, color: 'red', name: '(1, 0)', withLabel: true, label: {offset: [5, 10]}});\nboard.create('point', [0, -4], {size: 3, color: 'red', name: '(0, -4)', withLabel: true, label: {offset: [10, 5]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y9-11e-q3j",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Sketch the graph of the line \\(x - 3y = 6\\) by calculating the coordinates of the \\(x\\)- and \\(y\\)-intercepts.",
    "a": "Line with x-intercept at \\((6, 0)\\) and y-intercept at \\((0, -2)\\).",
    "solution": "To sketch the line \\(x - 3y = 6\\) using intercepts:\n\n1. **Find the \\(y\\)-intercept** (set \\(x = 0\\)):\n   Substitute \\(x = 0\\):\n   \\(y = -2\\).\n   So, the \\(y\\)-intercept is \\((0, -2)\\).\n\n2. **Find the \\(x\\)-intercept** (set \\(y = 0\\)):\n   Substitute \\(y = 0\\):\n   \\(x = 6\\).\n   So, the \\(x\\)-intercept is \\((6, 0)\\).\n\n3. Plot \\((0, -2)\\) and \\((6, 0)\\) and draw a line through them.",
    "t": "Sketching linear graphs",
    "hint": "Set \\(x = 0\\) to find the \\(y\\)-intercept, and set \\(y = 0\\) to find the \\(x\\)-intercept.",
    "solutionSteps": [
      {
        "explanation": "Calculate the y-intercept by setting x = 0.",
        "workingOut": "x = 0 \\implies y = -2"
      },
      {
        "explanation": "Calculate the x-intercept by setting y = 0.",
        "workingOut": "y = 0 \\implies x = 6"
      },
      {
        "explanation": "Draw a straight line passing through both intercepts.",
        "workingOut": "\\text{Line passes through } (0, -2) \\text{ and } (6, 0)"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -5.5,
          5.5,
          9.5,
          -5.5
        ],
        "showConstructionPoints": true,
        "boardOptions": {
          "axis": true,
          "grid": true
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-5, 0], [9, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -5], [0, 5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [8.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 4.7, 'y'], {fontSize: 12});\nboard.create('line', [[6, 0], [0, -2]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [6, 0], {size: 3, color: 'red', name: '(6, 0)', withLabel: true, label: {offset: [5, 10]}});\nboard.create('point', [0, -2], {size: 3, color: 'red', name: '(0, -2)', withLabel: true, label: {offset: [10, 5]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y9-11e-q3k",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Sketch the graph of the line \\(3x - 2y = 6\\) by calculating the coordinates of the \\(x\\)- and \\(y\\)-intercepts.",
    "a": "Line with x-intercept at \\((2, 0)\\) and y-intercept at \\((0, -3)\\).",
    "solution": "To sketch the line \\(3x - 2y = 6\\) using intercepts:\n\n1. **Find the \\(y\\)-intercept** (set \\(x = 0\\)):\n   Substitute \\(x = 0\\):\n   \\(y = -3\\).\n   So, the \\(y\\)-intercept is \\((0, -3)\\).\n\n2. **Find the \\(x\\)-intercept** (set \\(y = 0\\)):\n   Substitute \\(y = 0\\):\n   \\(x = 2\\).\n   So, the \\(x\\)-intercept is \\((2, 0)\\).\n\n3. Plot \\((0, -3)\\) and \\((2, 0)\\) and draw a line through them.",
    "t": "Sketching linear graphs",
    "hint": "Set \\(x = 0\\) to find the \\(y\\)-intercept, and set \\(y = 0\\) to find the \\(x\\)-intercept.",
    "solutionSteps": [
      {
        "explanation": "Calculate the y-intercept by setting x = 0.",
        "workingOut": "x = 0 \\implies y = -3"
      },
      {
        "explanation": "Calculate the x-intercept by setting y = 0.",
        "workingOut": "y = 0 \\implies x = 2"
      },
      {
        "explanation": "Draw a straight line passing through both intercepts.",
        "workingOut": "\\text{Line passes through } (0, -3) \\text{ and } (2, 0)"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -5.5,
          5.5,
          5.5,
          -6.5
        ],
        "showConstructionPoints": true,
        "boardOptions": {
          "axis": true,
          "grid": true
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-5, 0], [5, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -6], [0, 5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 4.7, 'y'], {fontSize: 12});\nboard.create('line', [[2, 0], [0, -3]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [2, 0], {size: 3, color: 'red', name: '(2, 0)', withLabel: true, label: {offset: [5, 10]}});\nboard.create('point', [0, -3], {size: 3, color: 'red', name: '(0, -3)', withLabel: true, label: {offset: [10, 5]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y9-11e-q3l",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Sketch the graph of the line \\(2x - 3y = 6\\) by calculating the coordinates of the \\(x\\)- and \\(y\\)-intercepts.",
    "a": "Line with x-intercept at \\((3, 0)\\) and y-intercept at \\((0, -2)\\).",
    "solution": "To sketch the line \\(2x - 3y = 6\\) using intercepts:\n\n1. **Find the \\(y\\)-intercept** (set \\(x = 0\\)):\n   Substitute \\(x = 0\\):\n   \\(y = -2\\).\n   So, the \\(y\\)-intercept is \\((0, -2)\\).\n\n2. **Find the \\(x\\)-intercept** (set \\(y = 0\\)):\n   Substitute \\(y = 0\\):\n   \\(x = 3\\).\n   So, the \\(x\\)-intercept is \\((3, 0)\\).\n\n3. Plot \\((0, -2)\\) and \\((3, 0)\\) and draw a line through them.",
    "t": "Sketching linear graphs",
    "hint": "Set \\(x = 0\\) to find the \\(y\\)-intercept, and set \\(y = 0\\) to find the \\(x\\)-intercept.",
    "solutionSteps": [
      {
        "explanation": "Calculate the y-intercept by setting x = 0.",
        "workingOut": "x = 0 \\implies y = -2"
      },
      {
        "explanation": "Calculate the x-intercept by setting y = 0.",
        "workingOut": "y = 0 \\implies x = 3"
      },
      {
        "explanation": "Draw a straight line passing through both intercepts.",
        "workingOut": "\\text{Line passes through } (0, -2) \\text{ and } (3, 0)"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -5.5,
          5.5,
          6.5,
          -5.5
        ],
        "showConstructionPoints": true,
        "boardOptions": {
          "axis": true,
          "grid": true
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-5, 0], [6, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -5], [0, 5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [5.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 4.7, 'y'], {fontSize: 12});\nboard.create('line', [[3, 0], [0, -2]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [3, 0], {size: 3, color: 'red', name: '(3, 0)', withLabel: true, label: {offset: [5, 10]}});\nboard.create('point', [0, -2], {size: 3, color: 'red', name: '(0, -2)', withLabel: true, label: {offset: [10, 5]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y9-11e-q3m",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Sketch the graph of the line \\(2y - x = 6\\) by calculating the coordinates of the \\(x\\)- and \\(y\\)-intercepts.",
    "a": "Line with x-intercept at \\((-6, 0)\\) and y-intercept at \\((0, 3)\\).",
    "solution": "To sketch the line \\(2y - x = 6\\) using intercepts:\n\n1. **Find the \\(y\\)-intercept** (set \\(x = 0\\)):\n   Substitute \\(x = 0\\):\n   \\(y = 3\\).\n   So, the \\(y\\)-intercept is \\((0, 3)\\).\n\n2. **Find the \\(x\\)-intercept** (set \\(y = 0\\)):\n   Substitute \\(y = 0\\):\n   \\(x = -6\\).\n   So, the \\(x\\)-intercept is \\((-6, 0)\\).\n\n3. Plot \\((0, 3)\\) and \\((-6, 0)\\) and draw a line through them.",
    "t": "Sketching linear graphs",
    "hint": "Set \\(x = 0\\) to find the \\(y\\)-intercept, and set \\(y = 0\\) to find the \\(x\\)-intercept.",
    "solutionSteps": [
      {
        "explanation": "Calculate the y-intercept by setting x = 0.",
        "workingOut": "x = 0 \\implies y = 3"
      },
      {
        "explanation": "Calculate the x-intercept by setting y = 0.",
        "workingOut": "y = 0 \\implies x = -6"
      },
      {
        "explanation": "Draw a straight line passing through both intercepts.",
        "workingOut": "\\text{Line passes through } (0, 3) \\text{ and } (-6, 0)"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -9.5,
          6.5,
          5.5,
          -5.5
        ],
        "showConstructionPoints": true,
        "boardOptions": {
          "axis": true,
          "grid": true
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-9, 0], [5, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -5], [0, 6]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 5.7, 'y'], {fontSize: 12});\nboard.create('line', [[-6, 0], [0, 3]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [-6, 0], {size: 3, color: 'red', name: '(-6, 0)', withLabel: true, label: {offset: [5, 10]}});\nboard.create('point', [0, 3], {size: 3, color: 'red', name: '(0, 3)', withLabel: true, label: {offset: [10, 5]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y9-11e-q3n",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Sketch the graph of the line \\(3y - 2x = 6\\) by calculating the coordinates of the \\(x\\)- and \\(y\\)-intercepts.",
    "a": "Line with x-intercept at \\((-3, 0)\\) and y-intercept at \\((0, 2)\\).",
    "solution": "To sketch the line \\(3y - 2x = 6\\) using intercepts:\n\n1. **Find the \\(y\\)-intercept** (set \\(x = 0\\)):\n   Substitute \\(x = 0\\):\n   \\(y = 2\\).\n   So, the \\(y\\)-intercept is \\((0, 2)\\).\n\n2. **Find the \\(x\\)-intercept** (set \\(y = 0\\)):\n   Substitute \\(y = 0\\):\n   \\(x = -3\\).\n   So, the \\(x\\)-intercept is \\((-3, 0)\\).\n\n3. Plot \\((0, 2)\\) and \\((-3, 0)\\) and draw a line through them.",
    "t": "Sketching linear graphs",
    "hint": "Set \\(x = 0\\) to find the \\(y\\)-intercept, and set \\(y = 0\\) to find the \\(x\\)-intercept.",
    "solutionSteps": [
      {
        "explanation": "Calculate the y-intercept by setting x = 0.",
        "workingOut": "x = 0 \\implies y = 2"
      },
      {
        "explanation": "Calculate the x-intercept by setting y = 0.",
        "workingOut": "y = 0 \\implies x = -3"
      },
      {
        "explanation": "Draw a straight line passing through both intercepts.",
        "workingOut": "\\text{Line passes through } (0, 2) \\text{ and } (-3, 0)"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -6.5,
          5.5,
          5.5,
          -5.5
        ],
        "showConstructionPoints": true,
        "boardOptions": {
          "axis": true,
          "grid": true
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-6, 0], [5, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -5], [0, 5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 4.7, 'y'], {fontSize: 12});\nboard.create('line', [[-3, 0], [0, 2]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [-3, 0], {size: 3, color: 'red', name: '(-3, 0)', withLabel: true, label: {offset: [5, 10]}});\nboard.create('point', [0, 2], {size: 3, color: 'red', name: '(0, 2)', withLabel: true, label: {offset: [10, 5]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y9-11e-q3o",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Sketch the graph of the line \\(\\frac{x}{3} + \\frac{y}{2} = 1\\) by calculating the coordinates of the \\(x\\)- and \\(y\\)-intercepts.",
    "a": "Line with x-intercept at \\((3, 0)\\) and y-intercept at \\((0, 2)\\).",
    "solution": "To sketch the line \\(\\frac{x}{3} + \\frac{y}{2} = 1\\) using intercepts:\n\n1. **Find the \\(y\\)-intercept** (set \\(x = 0\\)):\n   Substitute \\(x = 0\\):\n   \\(y = 2\\).\n   So, the \\(y\\)-intercept is \\((0, 2)\\).\n\n2. **Find the \\(x\\)-intercept** (set \\(y = 0\\)):\n   Substitute \\(y = 0\\):\n   \\(x = 3\\).\n   So, the \\(x\\)-intercept is \\((3, 0)\\).\n\n3. Plot \\((0, 2)\\) and \\((3, 0)\\) and draw a line through them.",
    "t": "Sketching linear graphs",
    "hint": "Set \\(x = 0\\) to find the \\(y\\)-intercept, and set \\(y = 0\\) to find the \\(x\\)-intercept.",
    "solutionSteps": [
      {
        "explanation": "Calculate the y-intercept by setting x = 0.",
        "workingOut": "x = 0 \\implies y = 2"
      },
      {
        "explanation": "Calculate the x-intercept by setting y = 0.",
        "workingOut": "y = 0 \\implies x = 3"
      },
      {
        "explanation": "Draw a straight line passing through both intercepts.",
        "workingOut": "\\text{Line passes through } (0, 2) \\text{ and } (3, 0)"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -5.5,
          5.5,
          6.5,
          -5.5
        ],
        "showConstructionPoints": true,
        "boardOptions": {
          "axis": true,
          "grid": true
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-5, 0], [6, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -5], [0, 5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [5.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 4.7, 'y'], {fontSize: 12});\nboard.create('line', [[3, 0], [0, 2]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [3, 0], {size: 3, color: 'red', name: '(3, 0)', withLabel: true, label: {offset: [5, 10]}});\nboard.create('point', [0, 2], {size: 3, color: 'red', name: '(0, 2)', withLabel: true, label: {offset: [10, 5]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y9-11e-q3p",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Sketch the graph of the line \\(\\frac{x}{2} - \\frac{y}{5} = 1\\) by calculating the coordinates of the \\(x\\)- and \\(y\\)-intercepts.",
    "a": "Line with x-intercept at \\((2, 0)\\) and y-intercept at \\((0, -5)\\).",
    "solution": "To sketch the line \\(\\frac{x}{2} - \\frac{y}{5} = 1\\) using intercepts:\n\n1. **Find the \\(y\\)-intercept** (set \\(x = 0\\)):\n   Substitute \\(x = 0\\):\n   \\(y = -5\\).\n   So, the \\(y\\)-intercept is \\((0, -5)\\).\n\n2. **Find the \\(x\\)-intercept** (set \\(y = 0\\)):\n   Substitute \\(y = 0\\):\n   \\(x = 2\\).\n   So, the \\(x\\)-intercept is \\((2, 0)\\).\n\n3. Plot \\((0, -5)\\) and \\((2, 0)\\) and draw a line through them.",
    "t": "Sketching linear graphs",
    "hint": "Set \\(x = 0\\) to find the \\(y\\)-intercept, and set \\(y = 0\\) to find the \\(x\\)-intercept.",
    "solutionSteps": [
      {
        "explanation": "Calculate the y-intercept by setting x = 0.",
        "workingOut": "x = 0 \\implies y = -5"
      },
      {
        "explanation": "Calculate the x-intercept by setting y = 0.",
        "workingOut": "y = 0 \\implies x = 2"
      },
      {
        "explanation": "Draw a straight line passing through both intercepts.",
        "workingOut": "\\text{Line passes through } (0, -5) \\text{ and } (2, 0)"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -5.5,
          5.5,
          5.5,
          -8.5
        ],
        "showConstructionPoints": true,
        "boardOptions": {
          "axis": true,
          "grid": true
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-5, 0], [5, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -8], [0, 5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 4.7, 'y'], {fontSize: 12});\nboard.create('line', [[2, 0], [0, -5]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [2, 0], {size: 3, color: 'red', name: '(2, 0)', withLabel: true, label: {offset: [5, 10]}});\nboard.create('point', [0, -5], {size: 3, color: 'red', name: '(0, -5)', withLabel: true, label: {offset: [10, 5]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y9-11e-q3q",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Sketch the graph of the line \\(\\frac{3x}{4} - \\frac{2y}{3} = 2\\) by calculating the coordinates of the \\(x\\)- and \\(y\\)-intercepts.",
    "a": "Line with x-intercept at \\((2.7, 0)\\) and y-intercept at \\((0, -3)\\).",
    "solution": "To sketch the line \\(\\frac{3x}{4} - \\frac{2y}{3} = 2\\) using intercepts:\n\n1. **Find the \\(y\\)-intercept** (set \\(x = 0\\)):\n   Substitute \\(x = 0\\):\n   \\(y = -3\\).\n   So, the \\(y\\)-intercept is \\((0, -3)\\).\n\n2. **Find the \\(x\\)-intercept** (set \\(y = 0\\)):\n   Substitute \\(y = 0\\):\n   \\(x = 2.7\\).\n   So, the \\(x\\)-intercept is \\((2.7, 0)\\).\n\n3. Plot \\((0, -3)\\) and \\((2.7, 0)\\) and draw a line through them.",
    "t": "Sketching linear graphs",
    "hint": "Set \\(x = 0\\) to find the \\(y\\)-intercept, and set \\(y = 0\\) to find the \\(x\\)-intercept.",
    "solutionSteps": [
      {
        "explanation": "Calculate the y-intercept by setting x = 0.",
        "workingOut": "x = 0 \\implies y = -3"
      },
      {
        "explanation": "Calculate the x-intercept by setting y = 0.",
        "workingOut": "y = 0 \\implies x = 2.7"
      },
      {
        "explanation": "Draw a straight line passing through both intercepts.",
        "workingOut": "\\text{Line passes through } (0, -3) \\text{ and } (2.7, 0)"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -5.5,
          5.5,
          6.166666666666666,
          -6.5
        ],
        "showConstructionPoints": true,
        "boardOptions": {
          "axis": true,
          "grid": true
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-5, 0], [5.666666666666666, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -6], [0, 5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [5.366666666666666, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 4.7, 'y'], {fontSize: 12});\nboard.create('line', [[2.6666666666666665, 0], [0, -3]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [2.6666666666666665, 0], {size: 3, color: 'red', name: '(2.7, 0)', withLabel: true, label: {offset: [5, 10]}});\nboard.create('point', [0, -3], {size: 3, color: 'red', name: '(0, -3)', withLabel: true, label: {offset: [10, 5]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y9-11e-q3r",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Sketch the graph of the line \\(\\frac{x}{5} + \\frac{3y}{2} = 3\\) by calculating the coordinates of the \\(x\\)- and \\(y\\)-intercepts.",
    "a": "Line with x-intercept at \\((15, 0)\\) and y-intercept at \\((0, 2)\\).",
    "solution": "To sketch the line \\(\\frac{x}{5} + \\frac{3y}{2} = 3\\) using intercepts:\n\n1. **Find the \\(y\\)-intercept** (set \\(x = 0\\)):\n   Substitute \\(x = 0\\):\n   \\(y = 2\\).\n   So, the \\(y\\)-intercept is \\((0, 2)\\).\n\n2. **Find the \\(x\\)-intercept** (set \\(y = 0\\)):\n   Substitute \\(y = 0\\):\n   \\(x = 15\\).\n   So, the \\(x\\)-intercept is \\((15, 0)\\).\n\n3. Plot \\((0, 2)\\) and \\((15, 0)\\) and draw a line through them.",
    "t": "Sketching linear graphs",
    "hint": "Set \\(x = 0\\) to find the \\(y\\)-intercept, and set \\(y = 0\\) to find the \\(x\\)-intercept.",
    "solutionSteps": [
      {
        "explanation": "Calculate the y-intercept by setting x = 0.",
        "workingOut": "x = 0 \\implies y = 2"
      },
      {
        "explanation": "Calculate the x-intercept by setting y = 0.",
        "workingOut": "y = 0 \\implies x = 15"
      },
      {
        "explanation": "Draw a straight line passing through both intercepts.",
        "workingOut": "\\text{Line passes through } (0, 2) \\text{ and } (15, 0)"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -5.5,
          5.5,
          18.5,
          -5.5
        ],
        "showConstructionPoints": true,
        "boardOptions": {
          "axis": true,
          "grid": true
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-5, 0], [18, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -5], [0, 5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [17.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 4.7, 'y'], {fontSize: 12});\nboard.create('line', [[15, 0], [0, 2]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [15, 0], {size: 3, color: 'red', name: '(15, 0)', withLabel: true, label: {offset: [5, 10]}});\nboard.create('point', [0, 2], {size: 3, color: 'red', name: '(0, 2)', withLabel: true, label: {offset: [10, 5]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y9-11e-q4a",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Sketch the graph of the line \\(y = 4\\).",
    "a": "Horizontal line at y = 4.",
    "solution": "To sketch the line \\(y = 4\\):\n\n1. **Simplify the equation** (if necessary):\n   \\(y = 4\\) simplifies to \\(y = 4\\).\n\n2. **Identify the nature of the line**:\n   - An equation of the form \\(y = k\\) is a **horizontal line** where every point has a \\(y\\)-coordinate of \\(k\\).\n   - An equation of the form \\(x = k\\) is a **vertical line** where every point has an \\(x\\)-coordinate of \\(k\\).\n\n3. Draw the straight horizontal line passing through (0, 4).",
    "t": "Sketching linear graphs",
    "hint": "Rearrange the equation if needed. Remember that \\(y = k\\) is a horizontal line and \\(x = k\\) is a vertical line.",
    "solutionSteps": [
      {
        "explanation": "Rearrange the equation to express x or y directly.",
        "workingOut": "y = 4"
      },
      {
        "explanation": "Draw a horizontal line representing the equation.",
        "workingOut": "\\text{Line passes through } (0, 4)"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -7.5,
          7.5,
          7.5,
          -7.5
        ],
        "showConstructionPoints": true,
        "boardOptions": {
          "axis": true,
          "grid": true
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-7, 0], [7, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -7], [0, 7]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [6.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 6.7, 'y'], {fontSize: 12});\nboard.create('line', [[-10, 4], [10, 4]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [0, 4], {size: 3, color: 'red', name: '(0, 4)', withLabel: true, label: {offset: [10, 5]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y9-11e-q4b",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Sketch the graph of the line \\(x = -2\\).",
    "a": "Vertical line at x = -2.",
    "solution": "To sketch the line \\(x = -2\\):\n\n1. **Simplify the equation** (if necessary):\n   \\(x = -2\\) simplifies to \\(x = -2\\).\n\n2. **Identify the nature of the line**:\n   - An equation of the form \\(y = k\\) is a **horizontal line** where every point has a \\(y\\)-coordinate of \\(k\\).\n   - An equation of the form \\(x = k\\) is a **vertical line** where every point has an \\(x\\)-coordinate of \\(k\\).\n\n3. Draw the straight vertical line passing through (-2, 0).",
    "t": "Sketching linear graphs",
    "hint": "Rearrange the equation if needed. Remember that \\(y = k\\) is a horizontal line and \\(x = k\\) is a vertical line.",
    "solutionSteps": [
      {
        "explanation": "Rearrange the equation to express x or y directly.",
        "workingOut": "x = -2"
      },
      {
        "explanation": "Draw a vertical line representing the equation.",
        "workingOut": "\\text{Line passes through } (-2, 0)"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -7.5,
          7.5,
          7.5,
          -7.5
        ],
        "showConstructionPoints": true,
        "boardOptions": {
          "axis": true,
          "grid": true
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-7, 0], [7, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -7], [0, 7]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [6.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 6.7, 'y'], {fontSize: 12});\nboard.create('line', [[-2, -10], [-2, 10]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [-2, 0], {size: 3, color: 'red', name: '(-2, 0)', withLabel: true, label: {offset: [5, 10]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y9-11e-q4c",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Sketch the graph of the line \\(x + 3 = 0\\).",
    "a": "Vertical line at x = -3.",
    "solution": "To sketch the line \\(x + 3 = 0\\):\n\n1. **Simplify the equation** (if necessary):\n   \\(x + 3 = 0\\) simplifies to \\(x = -3\\).\n\n2. **Identify the nature of the line**:\n   - An equation of the form \\(y = k\\) is a **horizontal line** where every point has a \\(y\\)-coordinate of \\(k\\).\n   - An equation of the form \\(x = k\\) is a **vertical line** where every point has an \\(x\\)-coordinate of \\(k\\).\n\n3. Draw the straight vertical line passing through (-3, 0).",
    "t": "Sketching linear graphs",
    "hint": "Rearrange the equation if needed. Remember that \\(y = k\\) is a horizontal line and \\(x = k\\) is a vertical line.",
    "solutionSteps": [
      {
        "explanation": "Rearrange the equation to express x or y directly.",
        "workingOut": "x = -3"
      },
      {
        "explanation": "Draw a vertical line representing the equation.",
        "workingOut": "\\text{Line passes through } (-3, 0)"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -7.5,
          7.5,
          7.5,
          -7.5
        ],
        "showConstructionPoints": true,
        "boardOptions": {
          "axis": true,
          "grid": true
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-7, 0], [7, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -7], [0, 7]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [6.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 6.7, 'y'], {fontSize: 12});\nboard.create('line', [[-3, -10], [-3, 10]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [-3, 0], {size: 3, color: 'red', name: '(-3, 0)', withLabel: true, label: {offset: [5, 10]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y9-11e-q4d",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Sketch the graph of the line \\(y - 4 = 0\\).",
    "a": "Horizontal line at y = 4.",
    "solution": "To sketch the line \\(y - 4 = 0\\):\n\n1. **Simplify the equation** (if necessary):\n   \\(y - 4 = 0\\) simplifies to \\(y = 4\\).\n\n2. **Identify the nature of the line**:\n   - An equation of the form \\(y = k\\) is a **horizontal line** where every point has a \\(y\\)-coordinate of \\(k\\).\n   - An equation of the form \\(x = k\\) is a **vertical line** where every point has an \\(x\\)-coordinate of \\(k\\).\n\n3. Draw the straight horizontal line passing through (0, 4).",
    "t": "Sketching linear graphs",
    "hint": "Rearrange the equation if needed. Remember that \\(y = k\\) is a horizontal line and \\(x = k\\) is a vertical line.",
    "solutionSteps": [
      {
        "explanation": "Rearrange the equation to express x or y directly.",
        "workingOut": "y = 4"
      },
      {
        "explanation": "Draw a horizontal line representing the equation.",
        "workingOut": "\\text{Line passes through } (0, 4)"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -7.5,
          7.5,
          7.5,
          -7.5
        ],
        "showConstructionPoints": true,
        "boardOptions": {
          "axis": true,
          "grid": true
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-7, 0], [7, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -7], [0, 7]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [6.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 6.7, 'y'], {fontSize: 12});\nboard.create('line', [[-10, 4], [10, 4]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [0, 4], {size: 3, color: 'red', name: '(0, 4)', withLabel: true, label: {offset: [10, 5]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y9-11e-q4e",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Sketch the graph of the line \\(5 - y = 0\\).",
    "a": "Horizontal line at y = 5.",
    "solution": "To sketch the line \\(5 - y = 0\\):\n\n1. **Simplify the equation** (if necessary):\n   \\(5 - y = 0\\) simplifies to \\(y = 5\\).\n\n2. **Identify the nature of the line**:\n   - An equation of the form \\(y = k\\) is a **horizontal line** where every point has a \\(y\\)-coordinate of \\(k\\).\n   - An equation of the form \\(x = k\\) is a **vertical line** where every point has an \\(x\\)-coordinate of \\(k\\).\n\n3. Draw the straight horizontal line passing through (0, 5).",
    "t": "Sketching linear graphs",
    "hint": "Rearrange the equation if needed. Remember that \\(y = k\\) is a horizontal line and \\(x = k\\) is a vertical line.",
    "solutionSteps": [
      {
        "explanation": "Rearrange the equation to express x or y directly.",
        "workingOut": "y = 5"
      },
      {
        "explanation": "Draw a horizontal line representing the equation.",
        "workingOut": "\\text{Line passes through } (0, 5)"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -7.5,
          8.5,
          7.5,
          -7.5
        ],
        "showConstructionPoints": true,
        "boardOptions": {
          "axis": true,
          "grid": true
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-7, 0], [7, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -7], [0, 8]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [6.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 7.7, 'y'], {fontSize: 12});\nboard.create('line', [[-10, 5], [10, 5]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [0, 5], {size: 3, color: 'red', name: '(0, 5)', withLabel: true, label: {offset: [10, 5]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y9-11e-q4f",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Sketch the graph of the line \\(6 + x = 0\\).",
    "a": "Vertical line at x = -6.",
    "solution": "To sketch the line \\(6 + x = 0\\):\n\n1. **Simplify the equation** (if necessary):\n   \\(6 + x = 0\\) simplifies to \\(x = -6\\).\n\n2. **Identify the nature of the line**:\n   - An equation of the form \\(y = k\\) is a **horizontal line** where every point has a \\(y\\)-coordinate of \\(k\\).\n   - An equation of the form \\(x = k\\) is a **vertical line** where every point has an \\(x\\)-coordinate of \\(k\\).\n\n3. Draw the straight vertical line passing through (-6, 0).",
    "t": "Sketching linear graphs",
    "hint": "Rearrange the equation if needed. Remember that \\(y = k\\) is a horizontal line and \\(x = k\\) is a vertical line.",
    "solutionSteps": [
      {
        "explanation": "Rearrange the equation to express x or y directly.",
        "workingOut": "x = -6"
      },
      {
        "explanation": "Draw a vertical line representing the equation.",
        "workingOut": "\\text{Line passes through } (-6, 0)"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -9.5,
          7.5,
          7.5,
          -7.5
        ],
        "showConstructionPoints": true,
        "boardOptions": {
          "axis": true,
          "grid": true
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-9, 0], [7, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -7], [0, 7]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [6.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 6.7, 'y'], {fontSize: 12});\nboard.create('line', [[-6, -10], [-6, 10]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [-6, 0], {size: 3, color: 'red', name: '(-6, 0)', withLabel: true, label: {offset: [5, 10]}});\nboard.unsuspendUpdate();"
      }
    }
  }
];
