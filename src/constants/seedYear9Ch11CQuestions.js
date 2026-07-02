export const Y9_CH11C_QUESTIONS = [
  {
    "id": "y9-11c-q1a",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the gradient of the interval \\(AB\\) with endpoints \\(A(5, 4)\\) and \\(B(1, 1)\\).",
    "a": "3/4",
    "solution": "Using the gradient formula:\n\\(m = \\frac{y_2 - y_1}{x_2 - x_1}\\)\nSubstituting the coordinates \\(A(5, 4)\\) and \\(B(1, 1)\\):\n\\(m = \\frac{1 - 4}{1 - 5} = \\frac{-3}{-4} = \\frac{3}{4}\\).",
    "t": "The gradient of a line",
    "hint": "Use the gradient formula \\(m = \\frac{y_2 - y_1}{x_2 - x_1}\\). Watch the signs.",
    "solutionSteps": [
      {
        "explanation": "Identify coordinates.",
        "workingOut": "A(x_1, y_1) = (5, 4), quad B(x_2, y_2) = (1, 1)"
      },
      {
        "explanation": "Substitute into the gradient formula.",
        "workingOut": "m = \\frac{1 - 4}{1 - 5}"
      },
      {
        "explanation": "Simplify the numerator and denominator.",
        "workingOut": "m = \\frac{-3}{-4} = \\frac{3}{4}"
      }
    ],
    "graphData": null
  },
  {
    "id": "y9-11c-q1b",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the gradient of the interval \\(AB\\) with endpoints \\(A(-3, 5)\\) and \\(B(0, 11)\\).",
    "a": "2",
    "solution": "Using the gradient formula:\n\\(m = \\frac{11 - 5}{0 - (-3)} = \\frac{6}{3} = 2\\).",
    "t": "The gradient of a line",
    "hint": "Recall \\(m = \\frac{y_2 - y_1}{x_2 - x_1}\\). Be careful with double negatives.",
    "solutionSteps": [
      {
        "explanation": "Identify endpoints.",
        "workingOut": "A(-3, 5), quad B(0, 11)"
      },
      {
        "explanation": "Substitute into formula.",
        "workingOut": "m = \\frac{11 - 5}{0 - (-3)}"
      },
      {
        "explanation": "Simplify.",
        "workingOut": "m = \\frac{6}{3} = 2"
      }
    ],
    "graphData": null
  },
  {
    "id": "y9-11c-q1c",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the gradient of the interval \\(AB\\) with endpoints \\(A(-2, 8)\\) and \\(B(5, -6)\\).",
    "a": "-2",
    "solution": "Using the gradient formula:\n\\(m = \\frac{-6 - 8}{5 - (-2)} = \\frac{-14}{7} = -2\\).",
    "t": "The gradient of a line",
    "hint": "Apply the gradient formula: \\(m = \\frac{y_2 - y_1}{x_2 - x_1}\\). Check negative subtraction.",
    "solutionSteps": [
      {
        "explanation": "Substitute endpoints.",
        "workingOut": "m = \\frac{-6 - 8}{5 - (-2)}"
      },
      {
        "explanation": "Simplify the fraction.",
        "workingOut": "m = \\frac{-14}{7} = -2"
      }
    ],
    "graphData": null
  },
  {
    "id": "y9-11c-q1d",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the gradient of the interval \\(AB\\) with endpoints \\(A(1, 4)\\) and \\(B(-5, 6)\\).",
    "a": "-1/3",
    "solution": "Using the gradient formula:\n\\(m = \\frac{6 - 4}{-5 - 1} = \\frac{2}{-6} = -\\frac{1}{3}\\).",
    "t": "The gradient of a line",
    "hint": "Average rise over run. Simplify the resulting fraction.",
    "solutionSteps": [
      {
        "explanation": "Apply formula.",
        "workingOut": "m = \\frac{6 - 4}{-5 - 1}"
      },
      {
        "explanation": "Simplify fraction to simplest form.",
        "workingOut": "m = \\frac{2}{-6} = -\\frac{1}{3}"
      }
    ],
    "graphData": null
  },
  {
    "id": "y9-11c-q2a",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the gradient of the line shown in the graph.",
    "a": "4",
    "solution": "Observe from the graph that the line passes through \\((0, 0)\\) and \\((1, 4)\\).\nUsing the gradient formula:\n\\(m = \\frac{4 - 0}{1 - 0} = 4\\).",
    "t": "The gradient of a line",
    "hint": "Find the coordinates of two points on the line, then calculate the gradient.",
    "solutionSteps": [
      {
        "explanation": "Identify two points on the line.",
        "workingOut": "(0, 0) \\text{ and } (1, 4)"
      },
      {
        "explanation": "Use the gradient formula.",
        "workingOut": "m = \\frac{4 - 0}{1 - 0} = 4"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 250,
        "height": 250,
        "boundingbox": [
          -2,
          6,
          4,
          -2
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-1.5, 0], [3.5, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -1.5], [0, 5.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [3.3, -0.3, 'x'], {fontSize: 12});\nboard.create('text', [-0.3, 5.3, 'y'], {fontSize: 12});\nboard.create('text', [-0.3, -0.3, '0'], {fontSize: 12});\nboard.create('line', [[0, 0], [1, 4]], {strokeColor: 'blue', strokeWidth: 1.5});\nboard.create('point', [1, 4], {size: 3, color: 'red', name: '(1, 4)', withLabel: true, label: {autoPosition: false, offset: [5, 5]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y9-11c-q2b",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the gradient of the line shown in the graph.",
    "a": "1",
    "solution": "The line passes through the points \\((-3, 0)\\) and \\((0, 3)\\).\nGradient:\n\\(m = \\frac{3 - 0}{0 - (-3)} = \\frac{3}{3} = 1\\).",
    "t": "The gradient of a line",
    "hint": "Identify the \\(x\\)-intercept and \\(y\\)-intercept on the graph.",
    "solutionSteps": [
      {
        "explanation": "Identify two points.",
        "workingOut": "(-3, 0) \\text{ and } (0, 3)"
      },
      {
        "explanation": "Calculate gradient.",
        "workingOut": "m = \\frac{3 - 0}{0 - (-3)} = 1"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 250,
        "height": 250,
        "boundingbox": [
          -5,
          5,
          2,
          -2
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-4, 0], [1, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -1], [0, 4]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [0.8, -0.3, 'x'], {fontSize: 12});\nboard.create('text', [-0.3, 3.8, 'y'], {fontSize: 12});\nboard.create('text', [0.2, -0.3, '0'], {fontSize: 12});\nboard.create('line', [[-3, 0], [0, 3]], {strokeColor: 'blue', strokeWidth: 1.5});\nboard.create('point', [-3, 0], {size: 3, color: 'red', name: '(-3, 0)', withLabel: true, label: {autoPosition: false, offset: [-15, -10]}});\nboard.create('point', [0, 3], {size: 3, color: 'red', name: '(0, 3)', withLabel: true, label: {autoPosition: false, offset: [5, 5]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y9-11c-q2c",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the gradient of the line shown in the graph.",
    "a": "-3",
    "solution": "The line passes through \\((0, 0)\\) and \\((2, -6)\\).\nGradient:\n\\(m = \\frac{-6 - 0}{2 - 0} = -3\\).",
    "t": "The gradient of a line",
    "hint": "Calculate rise over run using the origin and the given point.",
    "solutionSteps": [
      {
        "explanation": "Identify two points.",
        "workingOut": "(0, 0) \\text{ and } (2, -6)"
      },
      {
        "explanation": "Apply formula.",
        "workingOut": "m = \\frac{-6 - 0}{2 - 0} = -3"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 250,
        "height": 250,
        "boundingbox": [
          -1,
          2,
          4,
          -8
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-1, 0], [3.5, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -7.5], [0, 1.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [3.3, -0.3, 'x'], {fontSize: 12});\nboard.create('text', [-0.3, 1.3, 'y'], {fontSize: 12});\nboard.create('text', [-0.3, 0.3, '0'], {fontSize: 12});\nboard.create('line', [[0, 0], [2, -6]], {strokeColor: 'blue', strokeWidth: 1.5});\nboard.create('point', [2, -6], {size: 3, color: 'red', name: '(2, -6)', withLabel: true, label: {autoPosition: false, offset: [5, -5]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y9-11c-q2d",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the gradient of the line shown in the graph.",
    "a": "-1/3",
    "solution": "The line passes through \\((-6, 0)\\) and \\((0, -2)\\).\nGradient:\n\\(m = \\frac{-2 - 0}{0 - (-6)} = \\frac{-2}{6} = -\\frac{1}{3}\\).",
    "t": "The gradient of a line",
    "hint": "Identify the intercepts and apply the gradient formula.",
    "solutionSteps": [
      {
        "explanation": "Identify intercepts.",
        "workingOut": "(-6, 0) \\text{ and } (0, -2)"
      },
      {
        "explanation": "Calculate.",
        "workingOut": "m = \\frac{-2 - 0}{0 - (-6)} = -\\frac{1}{3}"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 250,
        "height": 250,
        "boundingbox": [
          -8,
          2,
          2,
          -4
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-7.5, 0], [1.5, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -3.5], [0, 1.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [1.3, -0.3, 'x'], {fontSize: 12});\nboard.create('text', [-0.3, 1.3, 'y'], {fontSize: 12});\nboard.create('text', [0.2, 0.2, '0'], {fontSize: 12});\nboard.create('line', [[-6, 0], [0, -2]], {strokeColor: 'blue', strokeWidth: 1.5});\nboard.create('point', [-6, 0], {size: 3, color: 'red', name: '(-6, 0)', withLabel: true, label: {autoPosition: false, offset: [-15, 10]}});\nboard.create('point', [0, -2], {size: 3, color: 'red', name: '(0, -2)', withLabel: true, label: {autoPosition: false, offset: [5, -5]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y9-11c-q2e",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the gradient of the line shown in the graph.",
    "a": "3/4",
    "solution": "The line passes through \\((-1, 2)\\) and \\((3, 5)\\).\nGradient:\n\\(m = \\frac{5 - 2}{3 - (-1)} = \\frac{3}{4}\\).",
    "t": "The gradient of a line",
    "hint": "Identify the coordinates of the two marked points on the line.",
    "solutionSteps": [
      {
        "explanation": "Read coordinates from graph.",
        "workingOut": "(-1, 2) \\text{ and } (3, 5)"
      },
      {
        "explanation": "Calculate gradient.",
        "workingOut": "m = \\frac{5 - 2}{3 - (-1)} = \\frac{3}{4}"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 250,
        "height": 250,
        "boundingbox": [
          -3,
          7,
          5,
          -2
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-2.5, 0], [4.5, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -1.5], [0, 6.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.3, -0.3, 'x'], {fontSize: 12});\nboard.create('text', [-0.3, 6.3, 'y'], {fontSize: 12});\nboard.create('text', [-0.3, -0.3, '0'], {fontSize: 12});\nboard.create('line', [[-1, 2], [3, 5]], {strokeColor: 'blue', strokeWidth: 1.5});\nboard.create('point', [-1, 2], {size: 3, color: 'red', name: '(-1, 2)', withLabel: true, label: {autoPosition: false, offset: [-15, 10]}});\nboard.create('point', [3, 5], {size: 3, color: 'red', name: '(3, 5)', withLabel: true, label: {autoPosition: false, offset: [5, -5]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y9-11c-q2f",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the gradient of the line shown in the graph.",
    "a": "-5/4",
    "solution": "The line passes through \\((-2, 4)\\) and \\((2, -1)\\).\nGradient:\n\\(m = \\frac{-1 - 4}{2 - (-2)} = \\frac{-5}{4} = -\\frac{5}{4}\\).",
    "t": "The gradient of a line",
    "hint": "Identify the coordinates of the two marked points on the line.",
    "solutionSteps": [
      {
        "explanation": "Read points.",
        "workingOut": "(-2, 4) \\text{ and } (2, -1)"
      },
      {
        "explanation": "Calculate.",
        "workingOut": "m = \\frac{-1 - 4}{2 - (-2)} = -\\frac{5}{4}"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 250,
        "height": 250,
        "boundingbox": [
          -4,
          6,
          4,
          -3
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-3.5, 0], [3.5, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -2.5], [0, 5.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [3.3, -0.3, 'x'], {fontSize: 12});\nboard.create('text', [-0.3, 5.3, 'y'], {fontSize: 12});\nboard.create('text', [-0.3, -0.3, '0'], {fontSize: 12});\nboard.create('line', [[-2, 4], [2, -1]], {strokeColor: 'blue', strokeWidth: 1.5});\nboard.create('point', [-2, 4], {size: 3, color: 'red', name: '(-2, 4)', withLabel: true, label: {autoPosition: false, offset: [-15, 10]}});\nboard.create('point', [2, -1], {size: 3, color: 'red', name: '(2, -1)', withLabel: true, label: {autoPosition: false, offset: [5, 5]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y9-11c-q3a",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the gradient of the line passing through \\((0, 0)\\) and \\((8, -2)\\).",
    "a": "-1/4",
    "solution": "Using the gradient formula:\n\\(m = \\frac{-2 - 0}{8 - 0} = -\\frac{2}{8} = -\\frac{1}{4}\\).",
    "t": "The gradient of a line",
    "hint": "Use \\(m = \\frac{y_2 - y_1}{x_2 - x_1}\\).",
    "solutionSteps": [
      {
        "explanation": "Substitute points into formula.",
        "workingOut": "m = \\frac{-2 - 0}{8 - 0}"
      },
      {
        "explanation": "Simplify the fraction.",
        "workingOut": "m = -\\frac{2}{8} = -\\frac{1}{4}"
      }
    ],
    "graphData": null
  },
  {
    "id": "y9-11c-q3b",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the gradient of the line passing through \\((0, 0)\\) and \\((-3, -4)\\).",
    "a": "4/3",
    "solution": "Using the gradient formula:\n\\(m = \\frac{-4 - 0}{-3 - 0} = \\frac{-4}{-3} = \\frac{4}{3}\\).",
    "t": "The gradient of a line",
    "hint": "Use \\(m = \\frac{y_2 - y_1}{x_2 - x_1}\\). Divide negative by negative.",
    "solutionSteps": [
      {
        "explanation": "Apply formula.",
        "workingOut": "m = \\frac{-4 - 0}{-3 - 0}"
      },
      {
        "explanation": "Simplify.",
        "workingOut": "m = \\frac{4}{3}"
      }
    ],
    "graphData": null
  },
  {
    "id": "y9-11c-q3c",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the gradient of the line passing through \\((2, 5)\\) and \\((6, -3)\\).",
    "a": "-2",
    "solution": "Using the gradient formula:\n\\(m = \\frac{-3 - 5}{6 - 2} = \\frac{-8}{4} = -2\\).",
    "t": "The gradient of a line",
    "hint": "Use \\(m = \\frac{y_2 - y_1}{x_2 - x_1}\\). Simplify the fraction.",
    "solutionSteps": [
      {
        "explanation": "Apply formula.",
        "workingOut": "m = \\frac{-3 - 5}{6 - 2}"
      },
      {
        "explanation": "Simplify.",
        "workingOut": "m = \\frac{-8}{4} = -2"
      }
    ],
    "graphData": null
  },
  {
    "id": "y9-11c-q3d",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the gradient of the line passing through \\((-3, -6)\\) and \\((-5, -2)\\).",
    "a": "-2",
    "solution": "Using the gradient formula:\n\\(m = \\frac{-2 - (-6)}{-5 - (-3)} = \\frac{4}{-2} = -2\\).",
    "t": "The gradient of a line",
    "hint": "Watch negative signs carefully: \\(-2 - (-6) = -2 + 6 = 4\\).",
    "solutionSteps": [
      {
        "explanation": "Substitute coordinates.",
        "workingOut": "m = \\frac{-2 - (-6)}{-5 - (-3)}"
      },
      {
        "explanation": "Simplify numerator and denominator.",
        "workingOut": "m = \\frac{4}{-2}"
      },
      {
        "explanation": "Simplify.",
        "workingOut": "m = -2"
      }
    ],
    "graphData": null
  },
  {
    "id": "y9-11c-q3e",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the gradient of the line passing through \\((3, -4)\\) and \\((-2, 6)\\).",
    "a": "-2",
    "solution": "Using the gradient formula:\n\\(m = \\frac{6 - (-4)}{-2 - 3} = \\frac{10}{-5} = -2\\).",
    "t": "The gradient of a line",
    "hint": "Use \\(m = \\frac{y_2 - y_1}{x_2 - x_1}\\). Make sure to simplify.",
    "solutionSteps": [
      {
        "explanation": "Apply formula.",
        "workingOut": "m = \\frac{6 - (-4)}{-2 - 3}"
      },
      {
        "explanation": "Simplify.",
        "workingOut": "m = \\frac{10}{-5} = -2"
      }
    ],
    "graphData": null
  },
  {
    "id": "y9-11c-q3f",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the gradient of the line passing through \\((-1, 8)\\) and \\((4, -2)\\).",
    "a": "-2",
    "solution": "Using the gradient formula:\n\\(m = \\frac{-2 - 8}{4 - (-1)} = \\frac{-10}{5} = -2\\).",
    "t": "The gradient of a line",
    "hint": "Apply the formula and divide.",
    "solutionSteps": [
      {
        "explanation": "Apply formula.",
        "workingOut": "m = \\frac{-2 - 8}{4 - (-1)}"
      },
      {
        "explanation": "Simplify.",
        "workingOut": "m = \\frac{-10}{5} = -2"
      }
    ],
    "graphData": null
  },
  {
    "id": "y9-11c-q4a",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "A line passes through the point \\((3, 5)\\) and has gradient 2. Find the \\(y\\)-coordinate of the point on the line when \\(x = 4\\).",
    "a": "7",
    "solution": "Using the point-gradient form of a line:\n\\(y - y_1 = m(x - x_1) \\implies y - 5 = 2(x - 3)\\)\nSimplify the equation:\n\\(y = 2x - 6 + 5 \\implies y = 2x - 1\\)\nSubstitute \\(x = 4\\):\n\\(y = 2(4) - 1 = 7\\).",
    "t": "The gradient of a line",
    "hint": "Find the equation of the line first, then substitute \\(x = 4\\). Alternatively, use the definition of gradient.",
    "solutionSteps": [
      {
        "explanation": "Write the line's equation using \\(m=2\\) and \\((3,5)\\).",
        "workingOut": "y - 5 = 2(x - 3)"
      },
      {
        "explanation": "Simplify the equation.",
        "workingOut": "y = 2x - 1"
      },
      {
        "explanation": "Substitute \\(x = 4\\) to find \\(y\\).",
        "workingOut": "y = 2(4) - 1 = 7"
      }
    ],
    "graphData": null
  },
  {
    "id": "y9-11c-q4b",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "A line passes through the point \\((6, 10)\\) and has gradient \\(\\frac{1}{2}\\). Find the \\(y\\)-coordinate of the point on the line when \\(x = 12\\).",
    "a": "13",
    "solution": "Point-gradient form:\n\\(y - 10 = \\frac{1}{2}(x - 6) \\implies y = \\frac{1}{2}x - 3 + 10 \\implies y = \\frac{1}{2}x + 7\\)\nSubstitute \\(x = 12\\):\n\\(y = \\frac{1}{2}(12) + 7 = 6 + 7 = 13\\).",
    "t": "The gradient of a line",
    "hint": "Set up the equation \\(y - 10 = \\frac{1}{2}(x - 6)\\) and solve for \\(y\\) when \\(x = 12\\).",
    "solutionSteps": [
      {
        "explanation": "Write equation.",
        "workingOut": "y - 10 = \\frac{1}{2}(x - 6)"
      },
      {
        "explanation": "Simplify.",
        "workingOut": "y = \\frac{1}{2}x + 7"
      },
      {
        "explanation": "Substitute \\(x = 12\\).",
        "workingOut": "y = \\frac{1}{2}(12) + 7 = 13"
      }
    ],
    "graphData": null
  },
  {
    "id": "y9-11c-q4c",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "A line passes through the point \\((-2, 7)\\) and has gradient \\(-1\\). Find the \\(y\\)-coordinate of the point on the line when \\(x = 5\\).",
    "a": "0",
    "solution": "Point-gradient form:\n\\(y - 7 = -1(x - (-2)) \\implies y - 7 = -x - 2 \\implies y = -x + 5\\)\nSubstitute \\(x = 5\\):\n\\(y = -5 + 5 = 0\\).",
    "t": "The gradient of a line",
    "hint": "Find the equation of the line, keeping double negatives in mind: \\(x - (-2) = x + 2\\).",
    "solutionSteps": [
      {
        "explanation": "Write equation.",
        "workingOut": "y - 7 = -1(x + 2)"
      },
      {
        "explanation": "Simplify.",
        "workingOut": "y = -x + 5"
      },
      {
        "explanation": "Substitute \\(x = 5\\).",
        "workingOut": "y = -5 + 5 = 0"
      }
    ],
    "graphData": null
  },
  {
    "id": "y9-11c-q5a",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "A line passes through the point \\((1, 4)\\) and has gradient 4. Find the \\(x\\)-coordinate of the point on the line when \\(y = 16\\).",
    "a": "4",
    "solution": "1. Find the equation of the line:\n   \\(y - 4 = 4(x - 1) \\implies y - 4 = 4x - 4 \\implies y = 4x\\).\n2. Substitute \\(y = 16\\) into the equation:\n   \\(16 = 4x \\implies x = 4\\).\nSo the \\(x\\)-coordinate is 4.",
    "t": "The gradient of a line",
    "hint": "Find the line's equation \\(y = 4x\\) first, then substitute \\(y = 16\\) and solve for \\(x\\).",
    "solutionSteps": [
      {
        "explanation": "Find the equation of the line.",
        "workingOut": "y - 4 = 4(x - 1) \\implies y = 4x"
      },
      {
        "explanation": "Substitute \\(y = 16\\) and solve for \\(x\\).",
        "workingOut": "16 = 4x \\implies x = 4"
      }
    ],
    "graphData": null
  },
  {
    "id": "y9-11c-q5b",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "A line passes through the point \\((1, 4)\\) and has gradient 4. Find the \\(y\\)-coordinate of the point on the line when \\(x = 3\\).",
    "a": "12",
    "solution": "1. The line's equation is \\(y = 4x\\).\n2. Substitute \\(x = 3\\):\n   \\(y = 4(3) = 12\\).",
    "t": "The gradient of a line",
    "hint": "Use the line equation \\(y = 4x\\) and substitute \\(x = 3\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the line equation.",
        "workingOut": "y = 4x"
      },
      {
        "explanation": "Substitute \\(x = 3\\) and solve.",
        "workingOut": "y = 4(3) = 12"
      }
    ],
    "graphData": null
  },
  {
    "id": "y9-11c-q5c",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "A line passes through the point \\((1, 4)\\) and has gradient 4. Find the \\(x\\)-coordinate of the point on the line when \\(y = 0\\).",
    "a": "0",
    "solution": "1. The line's equation is \\(y = 4x\\).\n2. Substitute \\(y = 0\\):\n   \\(0 = 4x \\implies x = 0\\).",
    "t": "The gradient of a line",
    "hint": "Set \\(y = 0\\) in the line's equation \\(y = 4x\\) and solve for \\(x\\).",
    "solutionSteps": [
      {
        "explanation": "Identify equation.",
        "workingOut": "y = 4x"
      },
      {
        "explanation": "Solve for \\(x\\) when \\(y = 0\\).",
        "workingOut": "0 = 4x \\implies x = 0"
      }
    ],
    "graphData": null
  },
  {
    "id": "y9-11c-q5d",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "A line passes through the point \\((1, 4)\\) and has gradient 4. Find the \\(y\\)-coordinate of the point on the line when \\(x = -2\\).",
    "a": "-8",
    "solution": "1. The line's equation is \\(y = 4x\\).\n2. Substitute \\(x = -2\\):\n   \\(y = 4(-2) = -8\\).",
    "t": "The gradient of a line",
    "hint": "Use the line equation \\(y = 4x\\) and substitute \\(x = -2\\).",
    "solutionSteps": [
      {
        "explanation": "Identify equation.",
        "workingOut": "y = 4x"
      },
      {
        "explanation": "Substitute \\(x = -2\\).",
        "workingOut": "y = 4(-2) = -8"
      }
    ],
    "graphData": null
  },
  {
    "id": "y9-11c-q6",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Complete the table of values for the following lines given a point and gradient.",
    "a": "a) -6, -1, 3, 3, b) -10, -1, 5, 10, c) -14, 1, 6, d) -2, 6, 0, 0",
    "solution": "We find the equations of the lines first:\n- **a**: Passes through \\((0, 0)\\), gradient 3. Equation: \\(y = 3x\\).\n  - \\(x = -2 \\implies y = -6\\)\n  - \\(y = -3 \\implies -3 = 3x \\implies x = -1\\)\n  - \\(x = 1 \\implies y = 3\\)\n  - \\(y = 9 \\implies 9 = 3x \\implies x = 3\\)\n\n- **b**: Passes through \\((0, 2)\\), gradient \\(\\frac{3}{5}\\). Equation: \\(y = \\frac{3}{5}x + 2\\).\n  - \\(y = -4 \\implies -4 = \\frac{3}{5}x + 2 \\implies -6 = \\frac{3}{5}x \\implies x = -10\\)\n  - \\(x = -5 \\implies y = \\frac{3}{5}(-5) + 2 = -3 + 2 = -1\\)\n  - \\(x = 5 \\implies y = \\frac{3}{5}(5) + 2 = 3 + 2 = 5\\)\n  - \\(y = 8 \\implies 8 = \\frac{3}{5}x + 2 \\implies 6 = \\frac{3}{5}x \\implies x = 10\\)\n\n- **c**: Passes through \\((0, 3)\\), gradient \\(\\frac{1}{2}\\). Equation: \\(y = \\frac{1}{2}x + 3\\).\n  - \\(y = -4 \\implies -4 = \\frac{1}{2}x + 3 \\implies -7 = \\frac{1}{2}x \\implies x = -14\\)\n  - \\(x = -4 \\implies y = \\frac{1}{2}(-4) + 3 = -2 + 3 = 1\\)\n  - \\(y = 6 \\implies 6 = \\frac{1}{2}x + 3 \\implies 3 = \\frac{1}{2}x \\implies x = 6\\)\n\n- **d**: Passes through \\((2, -3)\\), gradient \\(-3\\). Equation: \\(y - (-3) = -3(x - 2) \\implies y + 3 = -3x + 6 \\implies y = -3x + 3\\).\n  - \\(y = 9 \\implies 9 = -3x + 3 \\implies 6 = -3x \\implies x = -2\\)\n  - \\(x = -1 \\implies y = -3(-1) + 3 = 6\\)\n  - \\(y = 3 \\implies 3 = -3x + 3 \\implies 0 = -3x \\implies x = 0\\)\n  - \\(x = 1 \\implies y = -3(1) + 3 = 0\\)",
    "t": "The gradient of a line",
    "hint": "Use the point and gradient to write the equation of each line, then solve for the missing variables.",
    "solutionSteps": [
      {
        "explanation": "For part a, use \\(y = 3x\\) to find the missing values.",
        "workingOut": "\\text{x=-2 } \\implies \\text{ y=-6}; \\quad \\text{y=-3 } \\implies \\text{ x=-1}; \\quad \\text{x=1 } \\implies \\text{ y=3}; \\quad \\text{y=9 } \\implies \\text{ x=3}"
      },
      {
        "explanation": "For part b, use \\(y = \\frac{3}{5}x + 2\\) to find the missing values.",
        "workingOut": "\\text{y=-4 } \\implies \\text{ x=-10}; \\quad \\text{x=-5 } \\implies \\text{ y=-1}; \\quad \\text{x=5 } \\implies \\text{ y=5}; \\quad \\text{y=8 } \\implies \\text{ x=10}"
      },
      {
        "explanation": "For part c, use \\(y = \\frac{1}{2}x + 3\\) to find the missing values.",
        "workingOut": "\\text{y=-4 } \\implies \\text{ x=-14}; \\quad \\text{x=-4 } \\implies \\text{ y=1}; \\quad \\text{y=6 } \\implies \\text{ x=6}"
      },
      {
        "explanation": "For part d, use \\(y = -3x + 3\\) to find the missing values.",
        "workingOut": "\\text{y=9 } \\implies \\text{ x=-2}; \\quad \\text{x=-1 } \\implies \\text{ y=6}; \\quad \\text{y=3 } \\implies \\text{ x=0}; \\quad \\text{x=1 } \\implies \\text{ y=0}"
      }
    ],
    "graphData": null,
    "subQuestions": [
      {
        "id": "y9-11c-q6a",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": "a) Complete the table for the line passing through \\((0, 0)\\) with gradient 3. Find the missing values in order: \\(y\\) when \\(x = -2\\), \\(x\\) when \\(y = -3\\), \\(y\\) when \\(x = 1\\), and \\(x\\) when \\(y = 9\\). Format: [val1], [val2], [val3], [val4]",
        "a": "-6, -1, 3, 3",
        "solutionSteps": [
          {
            "explanation": "Substitute coordinates into \\(y = 3x\\).",
            "workingOut": "-6, -1, 3, 3"
          }
        ]
      },
      {
        "id": "y9-11c-q6b",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": "b) Complete the table for the line passing through \\((0, 2)\\) with gradient \\(\\frac{3}{5}\\). Find the missing values: \\(x\\) when \\(y = -4\\), \\(y\\) when \\(x = -5\\), \\(y\\) when \\(x = 5\\), and \\(x\\) when \\(y = 8\\). Format: [val1], [val2], [val3], [val4]",
        "a": "-10, -1, 5, 10",
        "solutionSteps": [
          {
            "explanation": "Substitute coordinates into \\(y = \\frac{3}{5}x + 2\\).",
            "workingOut": "-10, -1, 5, 10"
          }
        ]
      },
      {
        "id": "y9-11c-q6c",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": "c) Complete the table for the line passing through \\((0, 3)\\) with gradient \\(\\frac{1}{2}\\). Find the missing values: \\(x\\) when \\(y = -4\\), \\(y\\) when \\(x = -4\\), and \\(x\\) when \\(y = 6\\). Format: [val1], [val2], [val3]",
        "a": "-14, 1, 6",
        "solutionSteps": [
          {
            "explanation": "Substitute coordinates into \\(y = \\frac{1}{2}x + 3\\).",
            "workingOut": "-14, 1, 6"
          }
        ]
      },
      {
        "id": "y9-11c-q6d",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": "d) Complete the table for the line passing through \\((2, -3)\\) with gradient \\(-3\\). Find the missing values: \\(x\\) when \\(y = 9\\), \\(y\\) when \\(x = -1\\), \\(x\\) when \\(y = 3\\), and \\(y\\) when \\(x = 1\\). Format: [val1], [val2], [val3], [val4]",
        "a": "-2, 6, 0, 0",
        "solutionSteps": [
          {
            "explanation": "Substitute coordinates into \\(y = -3x + 3\\).",
            "workingOut": "-2, 6, 0, 0"
          }
        ]
      }
    ]
  },
  {
    "id": "y9-11c-q7",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Complete the table relating x-intercepts, y-intercepts, and gradients of straight lines.",
    "a": "a) 2, b) 12, c) -10, d) 4, e) -6, f) 5, g) -1/4",
    "solution": "Using intercept and gradient definitions:\n- **a**: Given x-intercept = \\(-2\\) and y-intercept = \\(4\\). Points: \\((-2, 0)\\) and \\((0, 4)\\).\n  \\(m = \\frac{4 - 0}{0 - (-2)} = 2\\).\n\n- **b**: Given x-intercept = \\(-3\\) and gradient = \\(4\\). Point: \\((-3, 0)\\).\n  Line equation: \\(y - 0 = 4(x - (-3)) \\implies y = 4x + 12\\).\n  The y-intercept is \\(12\\).\n\n- **c**: Given y-intercept = \\(5\\) and gradient = \\(\\frac{1}{2}\\).\n  Line equation: \\(y = \\frac{1}{2}x + 5\\).\n  To find x-intercept, set \\(y = 0\\): \\(0 = \\frac{1}{2}x + 5 \\implies x = -10\\).\n\n- **d**: Given y-intercept = \\(-3\\) and gradient = \\(\\frac{3}{4}\\).\n  Line equation: \\(y = \\frac{3}{4}x - 3\\).\n  Set \\(y = 0\\): \\(0 = \\frac{3}{4}x - 3 \\implies 3 = \\frac{3}{4}x \\implies x = 4\\).\n\n- **e**: Given x-intercept = \\(-6\\) and gradient = \\(-1\\). Point: \\((-6, 0)\\).\n  Line equation: \\(y = -1(x + 6) \\implies y = -x - 6\\).\n  The y-intercept is \\(-6\\).\n\n- **f**: Given y-intercept = \\(10\\) and gradient = \\(-2\\).\n  Line equation: \\(y = -2x + 10\\).\n  Set \\(y = 0\\): \\(0 = -2x + 10 \\implies x = 5\\).\n\n- **g**: Given x-intercept = \\(8\\) and y-intercept = \\(2\\). Points: \\((8, 0)\\) and \\((0, 2)\\).\n  \\(m = \\frac{2 - 0}{0 - 8} = -\\frac{1}{4}\\).",
    "t": "The gradient of a line",
    "hint": "Recall that the x-intercept is \\((x_0, 0)\\) and the y-intercept is \\((0, y_0)\\). Use these to calculate the third value.",
    "solutionSteps": [
      {
        "explanation": "Use coordinates of intercepts to determine the line's gradient or write its equation.",
        "workingOut": "\\text{x-intercept } x_0 \\implies (x_0, 0), quad \\text{y-intercept } y_0 \\implies (0, y_0)"
      }
    ],
    "graphData": null,
    "subQuestions": [
      {
        "id": "y9-11c-q7a",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": "a) Find the missing Gradient for row a.",
        "a": "2",
        "solutionSteps": [
          {
            "explanation": "Find gradient between \\((-2, 0)\\) and \\((0, 4)\\).",
            "workingOut": "m = \\frac{4 - 0}{0 - (-2)} = 2"
          }
        ]
      },
      {
        "id": "y9-11c-q7b",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": "b) Find the missing y-intercept for row b.",
        "a": "12",
        "solutionSteps": [
          {
            "explanation": "Use point-slope form with \\((-3, 0)\\) and \\(m = 4\\).",
            "workingOut": "y = 4(x + 3) \\implies y = 4x + 12"
          }
        ]
      },
      {
        "id": "y9-11c-q7c",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": "c) Find the missing x-intercept for row c.",
        "a": "-10",
        "solutionSteps": [
          {
            "explanation": "Substitute \\(y = 0\\) into \\(y = \\frac{1}{2}x + 5\\).",
            "workingOut": "0 = \\frac{1}{2}x + 5 \\implies x = -10"
          }
        ]
      },
      {
        "id": "y9-11c-q7d",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": "d) Find the missing x-intercept for row d.",
        "a": "4",
        "solutionSteps": [
          {
            "explanation": "Substitute \\(y = 0\\) into \\(y = \\frac{3}{4}x - 3\\).",
            "workingOut": "0 = \\frac{3}{4}x - 3 \\implies x = 4"
          }
        ]
      },
      {
        "id": "y9-11c-q7e",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": "e) Find the missing y-intercept for row e.",
        "a": "-6",
        "solutionSteps": [
          {
            "explanation": "Use point-slope form with \\((-6, 0)\\) and \\(m = -1\\).",
            "workingOut": "y = -1(x + 6) \\implies y = -x - 6"
          }
        ]
      },
      {
        "id": "y9-11c-q7f",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": "f) Find the missing x-intercept for row f.",
        "a": "5",
        "solutionSteps": [
          {
            "explanation": "Substitute \\(y = 0\\) into \\(y = -2x + 10\\).",
            "workingOut": "0 = -2x + 10 \\implies x = 5"
          }
        ]
      },
      {
        "id": "y9-11c-q7g",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": "g) Find the missing Gradient for row g.",
        "a": "-1/4",
        "solutionSteps": [
          {
            "explanation": "Find gradient between \\((8, 0)\\) and \\((0, 2)\\).",
            "workingOut": "m = \\frac{2 - 0}{0 - 8} = -\\frac{1}{4}"
          }
        ]
      }
    ]
  },
  {
    "id": "y9-11c-q8",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "A line passes through the point \\(A(3, 8)\\) and has gradient 2. Find where the line crosses the \\(x\\)-axis and the \\(y\\)-axis.",
    "a": "x-axis at (-1, 0), y-axis at (0, 2)",
    "solution": "1. Write the equation of the line using \\(m = 2\\) and point \\((3, 8)\\):\n   \\(y - 8 = 2(x - 3) \\implies y = 2x + 2\\).\n2. Find where it crosses the x-axis (set \\(y = 0\\)):\n   \\(0 = 2x + 2 \\implies 2x = -2 \\implies x = -1\\), so it crosses at \\((-1, 0)\\).\n3. Find where it crosses the y-axis (set \\(x = 0\\)):\n   \\(y = 2(0) + 2 = 2\\), so it crosses at \\((0, 2)\\).",
    "t": "The gradient of a line",
    "hint": "Determine the line's equation first, then set \\(y = 0\\) for the \\(x\\)-intercept and \\(x = 0\\) for the \\(y\\)-intercept.",
    "solutionSteps": [
      {
        "explanation": "Find the equation of the line.",
        "workingOut": "y - 8 = 2(x - 3) \\implies y = 2x + 2"
      },
      {
        "explanation": "Find the \\(x\\)-intercept.",
        "workingOut": "0 = 2x + 2 \\implies x = -1 \\implies (-1, 0)"
      },
      {
        "explanation": "Find the \\(y\\)-intercept.",
        "workingOut": "y = 2(0) + 2 = 2 \\implies (0, 2)"
      }
    ],
    "graphData": null,
    "subQuestions": [
      {
        "id": "y9-11c-q8a",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": "a) Find the coordinates of the point where the line crosses the \\(x\\)-axis.",
        "a": "(-1, 0)",
        "solutionSteps": [
          {
            "explanation": "Set \\(y = 0\\) in the line equation \\(y = 2x + 2\\).",
            "workingOut": "0 = 2x + 2 \\implies x = -1 \\implies (-1, 0)"
          }
        ]
      },
      {
        "id": "y9-11c-q8b",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": "b) Find the coordinates of the point where the line crosses the \\(y\\)-axis.",
        "a": "(0, 2)",
        "solutionSteps": [
          {
            "explanation": "Set \\(x = 0\\) in the line equation \\(y = 2x + 2\\).",
            "workingOut": "y = 2(0) + 2 = 2 \\implies (0, 2)"
          }
        ]
      }
    ]
  },
  {
    "id": "y9-11c-q9",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "A line passes through the point \\((3, 11)\\) and crosses the \\(y\\)-axis at the point \\((0, 5)\\). At what point does it cross the \\(x\\)-axis?",
    "a": "(-2.5, 0)",
    "solution": "1. The \\(y\\)-intercept is \\((0, 5)\\), so \\(c = 5\\) in \\(y = mx + c\\).\n2. Substitute the point \\((3, 11)\\) to find the gradient \\(m\\):\n   \\(11 = m(3) + 5 \\implies 3m = 6 \\implies m = 2\\).\n   So, the line's equation is \\(y = 2x + 5\\).\n3. Find the \\(x\\)-intercept by setting \\(y = 0\\):\n   \\(0 = 2x + 5 \\implies 2x = -5 \\implies x = -2.5\\).\nTherefore, the line crosses the \\(x\\)-axis at the point \\((-2.5, 0)\\).",
    "t": "The gradient of a line",
    "hint": "Identify the y-intercept, calculate the gradient, write the line equation, and then find where \\(y = 0\\).",
    "solutionSteps": [
      {
        "explanation": "Determine the \\(y\\)-intercept.",
        "workingOut": "c = 5"
      },
      {
        "explanation": "Substitute \\((3, 11)\\) into \\(y = mx + 5\\) to find the gradient.",
        "workingOut": "11 = 3m + 5 \\implies 3m = 6 \\implies m = 2"
      },
      {
        "explanation": "Write the line's equation.",
        "workingOut": "y = 2x + 5"
      },
      {
        "explanation": "Find the \\(x\\)-intercept.",
        "workingOut": "0 = 2x + 5 \\implies 2x = -5 \\implies x = -2.5 \\implies (-2.5, 0)"
      }
    ],
    "graphData": null
  },
  {
    "id": "y9-11c-q10",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "A line passes through \\((0, p)\\) and \\((q, 0)\\). Find the gradient of the line.",
    "a": "-p/q",
    "solution": "Using the gradient formula with endpoints \\((x_1, y_1) = (0, p)\\) and \\((x_2, y_2) = (q, 0)\\):\n\\(m = \\frac{y_2 - y_1}{x_2 - x_1}\\)\n\\(m = \\frac{0 - p}{q - 0} = \\frac{-p}{q} = -\\frac{p}{q}\\).\nSo the gradient is \\(-\\frac{p}{q}\\).",
    "t": "The gradient of a line",
    "hint": "Substitute the variables into the gradient formula \\(m = \\frac{y_2 - y_1}{x_2 - x_1}\\) and simplify.",
    "solutionSteps": [
      {
        "explanation": "Identify the endpoints.",
        "workingOut": "(0, p) \\quad \\text{and} \\quad (q, 0)"
      },
      {
        "explanation": "Substitute coordinates into the gradient formula.",
        "workingOut": "m = \\frac{0 - p}{q - 0}"
      },
      {
        "explanation": "Simplify the expression.",
        "workingOut": "m = -\\frac{p}{q}"
      }
    ],
    "graphData": null
  }
];
