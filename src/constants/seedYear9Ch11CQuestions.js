export const Y9_CH11C_QUESTIONS = [
  {
    "id": "y9-11c-q1a",
    "topicId": "y9-11c",
    "c": "11C",
    "t": "The gradient of a line",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the gradient of the interval \\(AB\\) with endpoints \\(A(5, 4)\\) and \\(B(1, 1)\\).",
    "opts": [
      "\\\\(-\\\\frac{4}{3}\\\\)",
      "\\\\(\\\\frac{4}{3}\\\\)",
      "\\\\(\\\\frac{3}{4}\\\\)",
      "\\\\(-\\\\frac{3}{4}\\\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Use the gradient formula \\(m = \\frac{y_2 - y_1}{x_2 - x_1}\\). Watch the signs.",
    "solution": "Using the gradient formula:\n\\(m = \\frac{y_2 - y_1}{x_2 - x_1}\\)\nSubstituting the coordinates \\(A(5, 4)\\) and \\(B(1, 1)\\):\n\\(m = \\frac{1 - 4}{1 - 5} = \\frac{-3}{-4} = \\frac{3}{4}\\).",
    "solutionSteps": [
      {
        "explanation": "Step 1: Identify the coordinates of the two points.",
        "workingOut": "Let $(x_1, y_1) = (5, 4)$ and $(x_2, y_2) = (1, 1)$.",
        "graphData": null
      },
      {
        "explanation": "Step 2: State the formula for the gradient \\(m\\).",
        "workingOut": "$$ m = \\frac{Rise}{Run} = \\frac{y_2 - y_1}{x_2 - x_1} $$",
        "graphData": null
      },
      {
        "explanation": "Step 3: Substitute the coordinates into the formula.",
        "workingOut": "$$ m = \\frac{1 - (4)}{1 - (5)} = \\frac{-3}{-4} $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: Simplify the fraction to find the final gradient.",
        "workingOut": "$$ m = \\frac{3}{4} $$",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              -1,
              6,
              7,
              -1
            ],
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nboard.create('point', [5, 4], {name:'(5, 4)', size:3, color:'red', label:{offset:[-20,10]}});\nboard.create('point', [1, 1], {name:'(1, 1)', size:3, color:'red', label:{offset:[10,10]}});\nboard.create('line', [[5, 4], [1, 1]], {strokeColor: 'blue', straightFirst: true, straightLast: true});\nboard.create('segment', [[5, 4], [1, 4]], {strokeColor: 'green', dash: 2, name: 'Run', withLabel: true});\nboard.create('segment', [[1, 4], [1, 1]], {strokeColor: 'orange', dash: 2, name: 'Rise', withLabel: true});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\\\(-\\\\frac{4}{3}\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(\\\\frac{4}{3}\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(\\\\frac{3}{4}\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(-\\\\frac{3}{4}\\\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y9-11c-q1b",
    "topicId": "y9-11c",
    "c": "11C",
    "t": "The gradient of a line",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the gradient of the interval \\(AB\\) with endpoints \\(A(-3, 5)\\) and \\(B(0, 11)\\).",
    "answer": "3",
    "hint": "Recall \\(m = \\frac{y_2 - y_1}{x_2 - x_1}\\). Be careful with double negatives.",
    "solution": "2",
    "solutionSteps": [
      {
        "explanation": "Step 1: Identify the coordinates of the two points.",
        "workingOut": "Let $(x_1, y_1) = (-3, 5)$ and $(x_2, y_2) = (0, 11)$.",
        "graphData": null
      },
      {
        "explanation": "Step 2: State the formula for the gradient \\(m\\).",
        "workingOut": "$$ m = \\frac{Rise}{Run} = \\frac{y_2 - y_1}{x_2 - x_1} $$",
        "graphData": null
      },
      {
        "explanation": "Step 3: Substitute the coordinates into the formula.",
        "workingOut": "$$ m = \\frac{11 - 5}{0 - (-3)} = \\frac{6}{3} $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: Simplify the fraction to find the final gradient.",
        "workingOut": "$$ m = 2 $$",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              -5,
              13,
              3,
              3
            ],
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nboard.create('point', [-3, 5], {name:'A(-3, 5)', size:3, color:'red', label:{offset:[-40,-10]}});\nboard.create('point', [0, 11], {name:'B(0, 11)', size:3, color:'red', label:{offset:[10,10]}});\nboard.create('line', [[-3, 5], [0, 11]], {strokeColor: 'blue', straightFirst: true, straightLast: true});\nboard.create('segment', [[-3, 5], [0, 5]], {strokeColor: 'green', dash: 2, name: 'Run=3', withLabel: true});\nboard.create('segment', [[0, 5], [0, 11]], {strokeColor: 'orange', dash: 2, name: 'Rise=6', withLabel: true});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\\\(-2\\\\)",
      "\\\\(-\\\\frac{1}{2}\\\\)",
      "\\\\(\\\\frac{1}{2}\\\\)",
      "\\\\(2\\\\)"
    ],
    "a": 3,
    "options": [
      {
        "text": "\\\\(-2\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(-\\\\frac{1}{2}\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(\\\\frac{1}{2}\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(2\\\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y9-11c-q1c",
    "topicId": "y9-11c",
    "c": "11C",
    "t": "The gradient of a line",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the gradient of the interval \\(AB\\) with endpoints \\(A(-2, 8)\\) and \\(B(5, -6)\\).",
    "opts": [
      "\\\\(2\\\\)",
      "\\\\(-2\\\\)",
      "\\\\(-\\\\frac{1}{2}\\\\)",
      "\\\\(\\\\frac{1}{2}\\\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Apply the gradient formula: \\(m = \\frac{y_2 - y_1}{x_2 - x_1}\\). Check negative subtraction.",
    "solution": "Using the gradient formula:\n\\(m = \\frac{-6 - 8}{5 - (-2)} = \\frac{-14}{7} = -2\\).",
    "solutionSteps": [
      {
        "explanation": "Step 1: Identify the coordinates of the two points.",
        "workingOut": "Let $(x_1, y_1) = (-2, 8)$ and $(x_2, y_2) = (5, -6)$.",
        "graphData": null
      },
      {
        "explanation": "Step 2: State the formula for the gradient \\(m\\).",
        "workingOut": "$$ m = \\frac{Rise}{Run} = \\frac{y_2 - y_1}{x_2 - x_1} $$",
        "graphData": null
      },
      {
        "explanation": "Step 3: Substitute the coordinates into the formula.",
        "workingOut": "$$ m = \\frac{-6 - (8)}{5 - (-2)} = \\frac{-14}{7} $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: Simplify the fraction to find the final gradient.",
        "workingOut": "$$ m = -2 $$",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              -4,
              10,
              7,
              -8
            ],
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nboard.create('point', [-2, 8], {name:'(-2, 8)', size:3, color:'red', label:{offset:[-20,10]}});\nboard.create('point', [5, -6], {name:'(5, -6)', size:3, color:'red', label:{offset:[10,10]}});\nboard.create('line', [[-2, 8], [5, -6]], {strokeColor: 'blue', straightFirst: true, straightLast: true});\nboard.create('segment', [[-2, 8], [5, 8]], {strokeColor: 'green', dash: 2, name: 'Run', withLabel: true});\nboard.create('segment', [[5, 8], [5, -6]], {strokeColor: 'orange', dash: 2, name: 'Rise', withLabel: true});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\\\(2\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(-2\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(-\\\\frac{1}{2}\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(\\\\frac{1}{2}\\\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y9-11c-q1d",
    "topicId": "y9-11c",
    "c": "11C",
    "t": "The gradient of a line",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the gradient of the interval \\(AB\\) with endpoints \\(A(1, 4)\\) and \\(B(-5, 6)\\).",
    "opts": [
      "\\\\(-\\\\frac{1}{3}\\\\)",
      "\\\\(\\\\frac{1}{3}\\\\)",
      "\\\\(-3\\\\)",
      "\\\\(3\\\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Average rise over run. Simplify the resulting fraction.",
    "solution": "Using the gradient formula:\n\\(m = \\frac{6 - 4}{-5 - 1} = \\frac{2}{-6} = -\\frac{1}{3}\\).",
    "solutionSteps": [
      {
        "explanation": "Step 1: Identify the coordinates of the two points.",
        "workingOut": "Let $(x_1, y_1) = (1, 4)$ and $(x_2, y_2) = (-5, 6)$.",
        "graphData": null
      },
      {
        "explanation": "Step 2: State the formula for the gradient \\(m\\).",
        "workingOut": "$$ m = \\frac{Rise}{Run} = \\frac{y_2 - y_1}{x_2 - x_1} $$",
        "graphData": null
      },
      {
        "explanation": "Step 3: Substitute the coordinates into the formula.",
        "workingOut": "$$ m = \\frac{6 - (4)}{-5 - (1)} = \\frac{2}{-6} $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: Simplify the fraction to find the final gradient.",
        "workingOut": "$$ m = -\\frac{1}{3} $$",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              -7,
              8,
              3,
              2
            ],
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nboard.create('point', [1, 4], {name:'(1, 4)', size:3, color:'red', label:{offset:[-20,10]}});\nboard.create('point', [-5, 6], {name:'(-5, 6)', size:3, color:'red', label:{offset:[10,10]}});\nboard.create('line', [[1, 4], [-5, 6]], {strokeColor: 'blue', straightFirst: true, straightLast: true});\nboard.create('segment', [[1, 4], [-5, 4]], {strokeColor: 'green', dash: 2, name: 'Run', withLabel: true});\nboard.create('segment', [[-5, 4], [-5, 6]], {strokeColor: 'orange', dash: 2, name: 'Rise', withLabel: true});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\\\(-\\\\frac{1}{3}\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(\\\\frac{1}{3}\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(-3\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(3\\\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y9-11c-q2a",
    "topicId": "y9-11c",
    "c": "11C",
    "t": "The gradient of a line",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the gradient of the line shown in the graph.",
    "opts": [
      "\\\\(\\\\frac{1}{4}\\\\)",
      "\\\\(-4\\\\)",
      "\\\\(-\\\\frac{1}{4}\\\\)",
      "\\\\(4\\\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "Find the coordinates of two points on the line, then calculate the gradient.",
    "solution": "Observe from the graph that the line passes through \\((0, 0)\\) and \\((1, 4)\\).\nUsing the gradient formula:\n\\(m = \\frac{4 - 0}{1 - 0} = 4\\).",
    "solutionSteps": [
      {
        "explanation": "Step 1: Identify the coordinates of the two points.",
        "workingOut": "Let $(x_1, y_1) = (0, 0)$ and $(x_2, y_2) = (1, 4)$.",
        "graphData": null
      },
      {
        "explanation": "Step 2: State the formula for the gradient \\(m\\).",
        "workingOut": "$$ m = \\frac{Rise}{Run} = \\frac{y_2 - y_1}{x_2 - x_1} $$",
        "graphData": null
      },
      {
        "explanation": "Step 3: Substitute the coordinates into the formula.",
        "workingOut": "$$ m = \\frac{4 - (0)}{1 - (0)} = \\frac{4}{1} $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: Simplify the fraction to find the final gradient.",
        "workingOut": "$$ m = 4 $$",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              -2,
              6,
              3,
              -2
            ],
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nboard.create('point', [0, 0], {name:'(0, 0)', size:3, color:'red', label:{offset:[-20,10]}});\nboard.create('point', [1, 4], {name:'(1, 4)', size:3, color:'red', label:{offset:[10,10]}});\nboard.create('line', [[0, 0], [1, 4]], {strokeColor: 'blue', straightFirst: true, straightLast: true});\nboard.create('segment', [[0, 0], [1, 0]], {strokeColor: 'green', dash: 2, name: 'Run', withLabel: true});\nboard.create('segment', [[1, 0], [1, 4]], {strokeColor: 'orange', dash: 2, name: 'Rise', withLabel: true});\nboard.unsuspendUpdate();"
          }
        }
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
    },
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\\\(\\\\frac{1}{4}\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(-4\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(-\\\\frac{1}{4}\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(4\\\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y9-11c-q2b",
    "topicId": "y9-11c",
    "c": "11C",
    "t": "The gradient of a line",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the gradient of the line shown in the graph.",
    "answer": "1",
    "hint": "Identify the \\(x\\)-intercept and \\(y\\)-intercept on the graph.",
    "solution": "1",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for The gradient of a line: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\((-3, 0) \\text{ and } (0, 3)\\)",
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
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(m = \\frac{3 - 0}{0 - (-3)} = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(1\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 1. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(1\\)",
        "graphData": null
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
    },
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-11c-q2c",
    "topicId": "y9-11c",
    "c": "11C",
    "t": "The gradient of a line",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the gradient of the line shown in the graph.",
    "opts": [
      "\\\\(3\\\\)",
      "\\\\(-3\\\\)",
      "\\\\(-\\\\frac{1}{3}\\\\)",
      "\\\\(\\\\frac{1}{3}\\\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Calculate rise over run using the origin and the given point.",
    "solution": "The line passes through \\((0, 0)\\) and \\((2, -6)\\).\nGradient:\n\\(m = \\frac{-6 - 0}{2 - 0} = -3\\).",
    "solutionSteps": [
      {
        "explanation": "Step 1: Identify the coordinates of the two points.",
        "workingOut": "Let $(x_1, y_1) = (0, 0)$ and $(x_2, y_2) = (2, -6)$.",
        "graphData": null
      },
      {
        "explanation": "Step 2: State the formula for the gradient \\(m\\).",
        "workingOut": "$$ m = \\frac{Rise}{Run} = \\frac{y_2 - y_1}{x_2 - x_1} $$",
        "graphData": null
      },
      {
        "explanation": "Step 3: Substitute the coordinates into the formula.",
        "workingOut": "$$ m = \\frac{-6 - (0)}{2 - (0)} = \\frac{-6}{2} $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: Simplify the fraction to find the final gradient.",
        "workingOut": "$$ m = -3 $$",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              -2,
              2,
              4,
              -8
            ],
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nboard.create('point', [0, 0], {name:'(0, 0)', size:3, color:'red', label:{offset:[-20,10]}});\nboard.create('point', [2, -6], {name:'(2, -6)', size:3, color:'red', label:{offset:[10,10]}});\nboard.create('line', [[0, 0], [2, -6]], {strokeColor: 'blue', straightFirst: true, straightLast: true});\nboard.create('segment', [[0, 0], [2, 0]], {strokeColor: 'green', dash: 2, name: 'Run', withLabel: true});\nboard.create('segment', [[2, 0], [2, -6]], {strokeColor: 'orange', dash: 2, name: 'Rise', withLabel: true});\nboard.unsuspendUpdate();"
          }
        }
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
    },
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\\\(3\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(-3\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(-\\\\frac{1}{3}\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(\\\\frac{1}{3}\\\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y9-11c-q2d",
    "topicId": "y9-11c",
    "c": "11C",
    "t": "The gradient of a line",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the gradient of the line shown in the graph.",
    "opts": [
      "\\\\(-\\\\frac{1}{3}\\\\)",
      "\\\\(3\\\\)",
      "\\\\(\\\\frac{1}{3}\\\\)",
      "\\\\(-3\\\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Identify the intercepts and apply the gradient formula.",
    "solution": "The line passes through \\((-6, 0)\\) and \\((0, -2)\\).\nGradient:\n\\(m = \\frac{-2 - 0}{0 - (-6)} = \\frac{-2}{6} = -\\frac{1}{3}\\).",
    "solutionSteps": [
      {
        "explanation": "Step 1: Identify the coordinates of the two points.",
        "workingOut": "Let $(x_1, y_1) = (-6, 0)$ and $(x_2, y_2) = (0, -2)$.",
        "graphData": null
      },
      {
        "explanation": "Step 2: State the formula for the gradient \\(m\\).",
        "workingOut": "$$ m = \\frac{Rise}{Run} = \\frac{y_2 - y_1}{x_2 - x_1} $$",
        "graphData": null
      },
      {
        "explanation": "Step 3: Substitute the coordinates into the formula.",
        "workingOut": "$$ m = \\frac{-2 - (0)}{0 - (-6)} = \\frac{-2}{6} $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: Simplify the fraction to find the final gradient.",
        "workingOut": "$$ m = -\\frac{1}{3} $$",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              -8,
              2,
              2,
              -4
            ],
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nboard.create('point', [-6, 0], {name:'(-6, 0)', size:3, color:'red', label:{offset:[-20,10]}});\nboard.create('point', [0, -2], {name:'(0, -2)', size:3, color:'red', label:{offset:[10,10]}});\nboard.create('line', [[-6, 0], [0, -2]], {strokeColor: 'blue', straightFirst: true, straightLast: true});\nboard.create('segment', [[-6, 0], [0, 0]], {strokeColor: 'green', dash: 2, name: 'Run', withLabel: true});\nboard.create('segment', [[0, 0], [0, -2]], {strokeColor: 'orange', dash: 2, name: 'Rise', withLabel: true});\nboard.unsuspendUpdate();"
          }
        }
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
    },
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\\\(-\\\\frac{1}{3}\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(3\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(\\\\frac{1}{3}\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(-3\\\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y9-11c-q2e",
    "topicId": "y9-11c",
    "c": "11C",
    "t": "The gradient of a line",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the gradient of the line shown in the graph.",
    "opts": [
      "\\\\(\\\\frac{3}{4}\\\\)",
      "\\\\(\\\\frac{4}{3}\\\\)",
      "\\\\(-\\\\frac{4}{3}\\\\)",
      "\\\\(-\\\\frac{3}{4}\\\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Identify the coordinates of the two marked points on the line.",
    "solution": "The line passes through \\((-1, 2)\\) and \\((3, 5)\\).\nGradient:\n\\(m = \\frac{5 - 2}{3 - (-1)} = \\frac{3}{4}\\).",
    "solutionSteps": [
      {
        "explanation": "Step 1: Identify the coordinates of the two points.",
        "workingOut": "Let $(x_1, y_1) = (-1, 2)$ and $(x_2, y_2) = (3, 5)$.",
        "graphData": null
      },
      {
        "explanation": "Step 2: State the formula for the gradient \\(m\\).",
        "workingOut": "$$ m = \\frac{Rise}{Run} = \\frac{y_2 - y_1}{x_2 - x_1} $$",
        "graphData": null
      },
      {
        "explanation": "Step 3: Substitute the coordinates into the formula.",
        "workingOut": "$$ m = \\frac{5 - (2)}{3 - (-1)} = \\frac{3}{4} $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: Simplify the fraction to find the final gradient.",
        "workingOut": "$$ m = \\frac{3}{4} $$",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              -3,
              7,
              5,
              0
            ],
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nboard.create('point', [-1, 2], {name:'(-1, 2)', size:3, color:'red', label:{offset:[-20,10]}});\nboard.create('point', [3, 5], {name:'(3, 5)', size:3, color:'red', label:{offset:[10,10]}});\nboard.create('line', [[-1, 2], [3, 5]], {strokeColor: 'blue', straightFirst: true, straightLast: true});\nboard.create('segment', [[-1, 2], [3, 2]], {strokeColor: 'green', dash: 2, name: 'Run', withLabel: true});\nboard.create('segment', [[3, 2], [3, 5]], {strokeColor: 'orange', dash: 2, name: 'Rise', withLabel: true});\nboard.unsuspendUpdate();"
          }
        }
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
    },
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\\\(\\\\frac{3}{4}\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(\\\\frac{4}{3}\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(-\\\\frac{4}{3}\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(-\\\\frac{3}{4}\\\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y9-11c-q2f",
    "topicId": "y9-11c",
    "c": "11C",
    "t": "The gradient of a line",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the gradient of the line shown in the graph.",
    "opts": [
      "\\\\(\\\\frac{5}{4}\\\\)",
      "\\\\(\\\\frac{4}{5}\\\\)",
      "\\\\(-\\\\frac{5}{4}\\\\)",
      "\\\\(-\\\\frac{4}{5}\\\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Identify the coordinates of the two marked points on the line.",
    "solution": "The line passes through \\((-2, 4)\\) and \\((2, -1)\\).\nGradient:\n\\(m = \\frac{-1 - 4}{2 - (-2)} = \\frac{-5}{4} = -\\frac{5}{4}\\).",
    "solutionSteps": [
      {
        "explanation": "Step 1: Identify the coordinates of the two points.",
        "workingOut": "Let $(x_1, y_1) = (-2, 4)$ and $(x_2, y_2) = (2, -1)$.",
        "graphData": null
      },
      {
        "explanation": "Step 2: State the formula for the gradient \\(m\\).",
        "workingOut": "$$ m = \\frac{Rise}{Run} = \\frac{y_2 - y_1}{x_2 - x_1} $$",
        "graphData": null
      },
      {
        "explanation": "Step 3: Substitute the coordinates into the formula.",
        "workingOut": "$$ m = \\frac{-1 - (4)}{2 - (-2)} = \\frac{-5}{4} $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: Simplify the fraction to find the final gradient.",
        "workingOut": "$$ m = -\\frac{5}{4} $$",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              -4,
              6,
              4,
              -3
            ],
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nboard.create('point', [-2, 4], {name:'(-2, 4)', size:3, color:'red', label:{offset:[-20,10]}});\nboard.create('point', [2, -1], {name:'(2, -1)', size:3, color:'red', label:{offset:[10,10]}});\nboard.create('line', [[-2, 4], [2, -1]], {strokeColor: 'blue', straightFirst: true, straightLast: true});\nboard.create('segment', [[-2, 4], [2, 4]], {strokeColor: 'green', dash: 2, name: 'Run', withLabel: true});\nboard.create('segment', [[2, 4], [2, -1]], {strokeColor: 'orange', dash: 2, name: 'Rise', withLabel: true});\nboard.unsuspendUpdate();"
          }
        }
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
    },
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\\\(\\\\frac{5}{4}\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(\\\\frac{4}{5}\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(-\\\\frac{5}{4}\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(-\\\\frac{4}{5}\\\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y9-11c-q3a",
    "topicId": "y9-11c",
    "c": "11C",
    "t": "The gradient of a line",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the gradient of the line passing through \\((0, 0)\\) and \\((8, -2)\\).",
    "opts": [
      "\\\\(-4\\\\)",
      "\\\\(-\\\\frac{1}{4}\\\\)",
      "\\\\(\\\\frac{1}{4}\\\\)",
      "\\\\(4\\\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Use \\(m = \\frac{y_2 - y_1}{x_2 - x_1}\\).",
    "solution": "Using the gradient formula:\n\\(m = \\frac{-2 - 0}{8 - 0} = -\\frac{2}{8} = -\\frac{1}{4}\\).",
    "solutionSteps": [
      {
        "explanation": "Step 1: Identify the coordinates of the two points.",
        "workingOut": "Let $(x_1, y_1) = (0, 0)$ and $(x_2, y_2) = (8, -2)$.",
        "graphData": null
      },
      {
        "explanation": "Step 2: State the formula for the gradient \\(m\\).",
        "workingOut": "$$ m = \\frac{Rise}{Run} = \\frac{y_2 - y_1}{x_2 - x_1} $$",
        "graphData": null
      },
      {
        "explanation": "Step 3: Substitute the coordinates into the formula.",
        "workingOut": "$$ m = \\frac{-2 - (0)}{8 - (0)} = \\frac{-2}{8} $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: Simplify the fraction to find the final gradient.",
        "workingOut": "$$ m = -\\frac{1}{4} $$",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              -2,
              2,
              10,
              -4
            ],
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nboard.create('point', [0, 0], {name:'(0, 0)', size:3, color:'red', label:{offset:[-20,10]}});\nboard.create('point', [8, -2], {name:'(8, -2)', size:3, color:'red', label:{offset:[10,10]}});\nboard.create('line', [[0, 0], [8, -2]], {strokeColor: 'blue', straightFirst: true, straightLast: true});\nboard.create('segment', [[0, 0], [8, 0]], {strokeColor: 'green', dash: 2, name: 'Run', withLabel: true});\nboard.create('segment', [[8, 0], [8, -2]], {strokeColor: 'orange', dash: 2, name: 'Rise', withLabel: true});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\\\(-4\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(-\\\\frac{1}{4}\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(\\\\frac{1}{4}\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(4\\\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y9-11c-q3b",
    "topicId": "y9-11c",
    "c": "11C",
    "t": "The gradient of a line",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the gradient of the line passing through \\((0, 0)\\) and \\((-3, -4)\\).",
    "opts": [
      "\\\\(-\\\\frac{3}{4}\\\\)",
      "\\\\(\\\\frac{3}{4}\\\\)",
      "\\\\(-\\\\frac{4}{3}\\\\)",
      "\\\\(\\\\frac{4}{3}\\\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "Use \\(m = \\frac{y_2 - y_1}{x_2 - x_1}\\). Divide negative by negative.",
    "solution": "Using the gradient formula:\n\\(m = \\frac{-4 - 0}{-3 - 0} = \\frac{-4}{-3} = \\frac{4}{3}\\).",
    "solutionSteps": [
      {
        "explanation": "Step 1: Identify the coordinates of the two points.",
        "workingOut": "Let $(x_1, y_1) = (0, 0)$ and $(x_2, y_2) = (-3, -4)$.",
        "graphData": null
      },
      {
        "explanation": "Step 2: State the formula for the gradient \\(m\\).",
        "workingOut": "$$ m = \\frac{Rise}{Run} = \\frac{y_2 - y_1}{x_2 - x_1} $$",
        "graphData": null
      },
      {
        "explanation": "Step 3: Substitute the coordinates into the formula.",
        "workingOut": "$$ m = \\frac{-4 - (0)}{-3 - (0)} = \\frac{-4}{-3} $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: Simplify the fraction to find the final gradient.",
        "workingOut": "$$ m = \\frac{4}{3} $$",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              -5,
              2,
              2,
              -6
            ],
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nboard.create('point', [0, 0], {name:'(0, 0)', size:3, color:'red', label:{offset:[-20,10]}});\nboard.create('point', [-3, -4], {name:'(-3, -4)', size:3, color:'red', label:{offset:[10,10]}});\nboard.create('line', [[0, 0], [-3, -4]], {strokeColor: 'blue', straightFirst: true, straightLast: true});\nboard.create('segment', [[0, 0], [-3, 0]], {strokeColor: 'green', dash: 2, name: 'Run', withLabel: true});\nboard.create('segment', [[-3, 0], [-3, -4]], {strokeColor: 'orange', dash: 2, name: 'Rise', withLabel: true});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\\\(-\\\\frac{3}{4}\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(\\\\frac{3}{4}\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(-\\\\frac{4}{3}\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(\\\\frac{4}{3}\\\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y9-11c-q3c",
    "topicId": "y9-11c",
    "c": "11C",
    "t": "The gradient of a line",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the gradient of the line passing through \\((2, 5)\\) and \\((6, -3)\\).",
    "opts": [
      "\\\\(\\\\frac{1}{2}\\\\)",
      "\\\\(-\\\\frac{1}{2}\\\\)",
      "\\\\(-2\\\\)",
      "\\\\(2\\\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Use \\(m = \\frac{y_2 - y_1}{x_2 - x_1}\\). Simplify the fraction.",
    "solution": "Using the gradient formula:\n\\(m = \\frac{-3 - 5}{6 - 2} = \\frac{-8}{4} = -2\\).",
    "solutionSteps": [
      {
        "explanation": "Step 1: Identify the coordinates of the two points.",
        "workingOut": "Let $(x_1, y_1) = (2, 5)$ and $(x_2, y_2) = (6, -3)$.",
        "graphData": null
      },
      {
        "explanation": "Step 2: State the formula for the gradient \\(m\\).",
        "workingOut": "$$ m = \\frac{Rise}{Run} = \\frac{y_2 - y_1}{x_2 - x_1} $$",
        "graphData": null
      },
      {
        "explanation": "Step 3: Substitute the coordinates into the formula.",
        "workingOut": "$$ m = \\frac{-3 - (5)}{6 - (2)} = \\frac{-8}{4} $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: Simplify the fraction to find the final gradient.",
        "workingOut": "$$ m = -2 $$",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              0,
              7,
              8,
              -5
            ],
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nboard.create('point', [2, 5], {name:'(2, 5)', size:3, color:'red', label:{offset:[-20,10]}});\nboard.create('point', [6, -3], {name:'(6, -3)', size:3, color:'red', label:{offset:[10,10]}});\nboard.create('line', [[2, 5], [6, -3]], {strokeColor: 'blue', straightFirst: true, straightLast: true});\nboard.create('segment', [[2, 5], [6, 5]], {strokeColor: 'green', dash: 2, name: 'Run', withLabel: true});\nboard.create('segment', [[6, 5], [6, -3]], {strokeColor: 'orange', dash: 2, name: 'Rise', withLabel: true});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\\\(\\\\frac{1}{2}\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(-\\\\frac{1}{2}\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(-2\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(2\\\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y9-11c-q3d",
    "topicId": "y9-11c",
    "c": "11C",
    "t": "The gradient of a line",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the gradient of the line passing through \\((-3, -6)\\) and \\((-5, -2)\\).",
    "opts": [
      "\\\\(-\\\\frac{1}{2}\\\\)",
      "\\\\(-2\\\\)",
      "\\\\(2\\\\)",
      "\\\\(\\\\frac{1}{2}\\\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Watch negative signs carefully: \\(-2 - (-6) = -2 + 6 = 4\\).",
    "solution": "Using the gradient formula:\n\\(m = \\frac{-2 - (-6)}{-5 - (-3)} = \\frac{4}{-2} = -2\\).",
    "solutionSteps": [
      {
        "explanation": "Step 1: Identify the coordinates of the two points.",
        "workingOut": "Let $(x_1, y_1) = (-3, -6)$ and $(x_2, y_2) = (-5, -2)$.",
        "graphData": null
      },
      {
        "explanation": "Step 2: State the formula for the gradient \\(m\\).",
        "workingOut": "$$ m = \\frac{Rise}{Run} = \\frac{y_2 - y_1}{x_2 - x_1} $$",
        "graphData": null
      },
      {
        "explanation": "Step 3: Substitute the coordinates into the formula.",
        "workingOut": "$$ m = \\frac{-2 - (-6)}{-5 - (-3)} = \\frac{4}{-2} $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: Simplify the fraction to find the final gradient.",
        "workingOut": "$$ m = -2 $$",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              -7,
              0,
              -1,
              -8
            ],
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nboard.create('point', [-3, -6], {name:'(-3, -6)', size:3, color:'red', label:{offset:[-20,10]}});\nboard.create('point', [-5, -2], {name:'(-5, -2)', size:3, color:'red', label:{offset:[10,10]}});\nboard.create('line', [[-3, -6], [-5, -2]], {strokeColor: 'blue', straightFirst: true, straightLast: true});\nboard.create('segment', [[-3, -6], [-5, -6]], {strokeColor: 'green', dash: 2, name: 'Run', withLabel: true});\nboard.create('segment', [[-5, -6], [-5, -2]], {strokeColor: 'orange', dash: 2, name: 'Rise', withLabel: true});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\\\(-\\\\frac{1}{2}\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(-2\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(2\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(\\\\frac{1}{2}\\\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y9-11c-q3e",
    "topicId": "y9-11c",
    "c": "11C",
    "t": "The gradient of a line",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the gradient of the line passing through \\((3, -4)\\) and \\((-2, 6)\\).",
    "opts": [
      "\\\\(2\\\\)",
      "\\\\(-2\\\\)",
      "\\\\(-\\\\frac{1}{2}\\\\)",
      "\\\\(\\\\frac{1}{2}\\\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Use \\(m = \\frac{y_2 - y_1}{x_2 - x_1}\\). Make sure to simplify.",
    "solution": "Using the gradient formula:\n\\(m = \\frac{6 - (-4)}{-2 - 3} = \\frac{10}{-5} = -2\\).",
    "solutionSteps": [
      {
        "explanation": "Step 1: Identify the coordinates of the two points.",
        "workingOut": "Let $(x_1, y_1) = (3, -4)$ and $(x_2, y_2) = (-2, 6)$.",
        "graphData": null
      },
      {
        "explanation": "Step 2: State the formula for the gradient \\(m\\).",
        "workingOut": "$$ m = \\frac{Rise}{Run} = \\frac{y_2 - y_1}{x_2 - x_1} $$",
        "graphData": null
      },
      {
        "explanation": "Step 3: Substitute the coordinates into the formula.",
        "workingOut": "$$ m = \\frac{6 - (-4)}{-2 - (3)} = \\frac{10}{-5} $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: Simplify the fraction to find the final gradient.",
        "workingOut": "$$ m = -2 $$",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              -4,
              8,
              5,
              -6
            ],
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nboard.create('point', [3, -4], {name:'(3, -4)', size:3, color:'red', label:{offset:[-20,10]}});\nboard.create('point', [-2, 6], {name:'(-2, 6)', size:3, color:'red', label:{offset:[10,10]}});\nboard.create('line', [[3, -4], [-2, 6]], {strokeColor: 'blue', straightFirst: true, straightLast: true});\nboard.create('segment', [[3, -4], [-2, -4]], {strokeColor: 'green', dash: 2, name: 'Run', withLabel: true});\nboard.create('segment', [[-2, -4], [-2, 6]], {strokeColor: 'orange', dash: 2, name: 'Rise', withLabel: true});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\\\(2\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(-2\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(-\\\\frac{1}{2}\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(\\\\frac{1}{2}\\\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y9-11c-q3f",
    "topicId": "y9-11c",
    "c": "11C",
    "t": "The gradient of a line",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the gradient of the line passing through \\((-1, 8)\\) and \\((4, -2)\\).",
    "opts": [
      "\\\\(-\\\\frac{1}{2}\\\\)",
      "\\\\(-2\\\\)",
      "\\\\(\\\\frac{1}{2}\\\\)",
      "\\\\(2\\\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Apply the formula and divide.",
    "solution": "Using the gradient formula:\n\\(m = \\frac{-2 - 8}{4 - (-1)} = \\frac{-10}{5} = -2\\).",
    "solutionSteps": [
      {
        "explanation": "Step 1: Identify the coordinates of the two points.",
        "workingOut": "Let $(x_1, y_1) = (-1, 8)$ and $(x_2, y_2) = (4, -2)$.",
        "graphData": null
      },
      {
        "explanation": "Step 2: State the formula for the gradient \\(m\\).",
        "workingOut": "$$ m = \\frac{Rise}{Run} = \\frac{y_2 - y_1}{x_2 - x_1} $$",
        "graphData": null
      },
      {
        "explanation": "Step 3: Substitute the coordinates into the formula.",
        "workingOut": "$$ m = \\frac{-2 - (8)}{4 - (-1)} = \\frac{-10}{5} $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: Simplify the fraction to find the final gradient.",
        "workingOut": "$$ m = -2 $$",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              -3,
              10,
              6,
              -4
            ],
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nboard.create('point', [-1, 8], {name:'(-1, 8)', size:3, color:'red', label:{offset:[-20,10]}});\nboard.create('point', [4, -2], {name:'(4, -2)', size:3, color:'red', label:{offset:[10,10]}});\nboard.create('line', [[-1, 8], [4, -2]], {strokeColor: 'blue', straightFirst: true, straightLast: true});\nboard.create('segment', [[-1, 8], [4, 8]], {strokeColor: 'green', dash: 2, name: 'Run', withLabel: true});\nboard.create('segment', [[4, 8], [4, -2]], {strokeColor: 'orange', dash: 2, name: 'Rise', withLabel: true});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\\\(-\\\\frac{1}{2}\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(-2\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(\\\\frac{1}{2}\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(2\\\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y9-11c-q4a",
    "topicId": "y9-11c",
    "c": "11C",
    "t": "The gradient of a line",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "A line passes through the point \\((3, 5)\\) and has gradient 2. Find the \\(y\\)-coordinate of the point on the line when \\(x = 4\\).",
    "opts": [
      "\\(-7\\)",
      "\\(6\\)",
      "\\(7\\)",
      "\\(8\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Find the equation of the line first, then substitute \\(x = 4\\). Alternatively, use the definition of gradient.",
    "solution": "Using the point-gradient form of a line:\n\\(y - y_1 = m(x - x_1) \\implies y - 5 = 2(x - 3)\\)\nSimplify the equation:\n\\(y = 2x - 6 + 5 \\implies y = 2x - 1\\)\nSubstitute \\(x = 4\\):\n\\(y = 2(4) - 1 = 7\\).",
    "solutionSteps": [
      {
        "explanation": "Step 1: Write down the point-gradient formula.",
        "workingOut": "$$ m = \\frac{y - y_1}{x - x_1} $$",
        "graphData": null
      },
      {
        "explanation": "Step 2: Substitute the known point and gradient.",
        "workingOut": "Substitute $(x_1, y_1) = (3, 5)$ and $m = 2$:\n$$ \\frac{y - (5)}{x - (3)} = 2 $$",
        "graphData": null
      },
      {
        "explanation": "Step 3: Substitute the given coordinate.",
        "workingOut": "Substitute $x = 4$:\n$$ \\frac{y - (5)}{4 - (3)} = 2 $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: Solve for the unknown coordinate $y$.",
        "workingOut": "$$ \\begin{aligned} \\frac{y - (5)}{1} &= 2 \\\\ y - (5) &= 2 \\\\ y &= 7 \\end{aligned} $$",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              1,
              9,
              6,
              3
            ],
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nboard.create('point', [3, 5], {name:'(3, 5)', size:3, color:'red', label:{offset:[-20,10]}});\nboard.create('point', [4, 7], {name:'(4, 7)', size:3, color:'red', label:{offset:[10,10]}});\nboard.create('line', [[3, 5], [4, 7]], {strokeColor: 'blue', straightFirst: true, straightLast: true});\nboard.create('segment', [[3, 5], [4, 5]], {strokeColor: 'green', dash: 2});\nboard.create('segment', [[4, 5], [4, 7]], {strokeColor: 'orange', dash: 2});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11c-q4b",
    "topicId": "y9-11c",
    "c": "11C",
    "t": "The gradient of a line",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "A line passes through the point \\((6, 10)\\) and has gradient \\(\\frac{1}{2}\\). Find the \\(y\\)-coordinate of the point on the line when \\(x = 12\\).",
    "opts": [
      "\\(-13\\)",
      "\\(12\\)",
      "\\(13\\)",
      "\\(14\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Set up the equation \\(y - 10 = \\frac{1}{2}(x - 6)\\) and solve for \\(y\\) when \\(x = 12\\).",
    "solution": "Point-gradient form:\n\\(y - 10 = \\frac{1}{2}(x - 6) \\implies y = \\frac{1}{2}x - 3 + 10 \\implies y = \\frac{1}{2}x + 7\\)\nSubstitute \\(x = 12\\):\n\\(y = \\frac{1}{2}(12) + 7 = 6 + 7 = 13\\).",
    "solutionSteps": [
      {
        "explanation": "Step 1: Write down the point-gradient formula.",
        "workingOut": "$$ m = \\frac{y - y_1}{x - x_1} $$",
        "graphData": null
      },
      {
        "explanation": "Step 2: Substitute the known point and gradient.",
        "workingOut": "Substitute $(x_1, y_1) = (6, 10)$ and $m = \\frac{1}{2}$:\n$$ \\frac{y - (10)}{x - (6)} = \\frac{1}{2} $$",
        "graphData": null
      },
      {
        "explanation": "Step 3: Substitute the given coordinate.",
        "workingOut": "Substitute $x = 12$:\n$$ \\frac{y - (10)}{12 - (6)} = \\frac{1}{2} $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: Solve for the unknown coordinate $y$.",
        "workingOut": "$$ \\begin{aligned} \\frac{y - (10)}{6} &= \\frac{1}{2} \\\\ y - (10) &= 3 \\\\ y &= 13 \\end{aligned} $$",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              4,
              15,
              14,
              8
            ],
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nboard.create('point', [6, 10], {name:'(6, 10)', size:3, color:'red', label:{offset:[-20,10]}});\nboard.create('point', [12, 13], {name:'(12, 13)', size:3, color:'red', label:{offset:[10,10]}});\nboard.create('line', [[6, 10], [12, 13]], {strokeColor: 'blue', straightFirst: true, straightLast: true});\nboard.create('segment', [[6, 10], [12, 10]], {strokeColor: 'green', dash: 2});\nboard.create('segment', [[12, 10], [12, 13]], {strokeColor: 'orange', dash: 2});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11c-q4c",
    "topicId": "y9-11c",
    "c": "11C",
    "t": "The gradient of a line",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "A line passes through the point \\((-2, 7)\\) and has gradient \\(-1\\). Find the \\(y\\)-coordinate of the point on the line when \\(x = 5\\).",
    "answer": "2",
    "hint": "Find the equation of the line, keeping double negatives in mind: \\(x - (-2) = x + 2\\).",
    "solution": "0",
    "solutionSteps": [
      {
        "explanation": "Step 1: Write down the point-gradient formula.",
        "workingOut": "$$ m = \\frac{y - y_1}{x - x_1} $$",
        "graphData": null
      },
      {
        "explanation": "Step 2: Substitute the known point and gradient.",
        "workingOut": "Substitute $(x_1, y_1) = (-2, 7)$ and $m = -1$:\n$$ \\frac{y - (7)}{x - (-2)} = -1 $$",
        "graphData": null
      },
      {
        "explanation": "Step 3: Substitute the given coordinate.",
        "workingOut": "Substitute $x = 5$:\n$$ \\frac{y - (7)}{5 - (-2)} = -1 $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: Solve for the unknown coordinate $y$.",
        "workingOut": "$$ \\begin{aligned} \\frac{y - (7)}{7} &= -1 \\\\ y - (7) &= -7 \\\\ y &= 0 \\end{aligned} $$",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              -4,
              9,
              7,
              -2
            ],
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nboard.create('point', [-2, 7], {name:'(-2, 7)', size:3, color:'red', label:{offset:[-20,10]}});\nboard.create('point', [5, 0], {name:'(5, 0)', size:3, color:'red', label:{offset:[10,10]}});\nboard.create('line', [[-2, 7], [5, 0]], {strokeColor: 'blue', straightFirst: true, straightLast: true});\nboard.create('segment', [[-2, 7], [5, 7]], {strokeColor: 'green', dash: 2});\nboard.create('segment', [[5, 7], [5, 0]], {strokeColor: 'orange', dash: 2});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\\\(-1\\\\)",
      "\\\\(-2\\\\)",
      "\\\\(0\\\\)",
      "\\\\(1\\\\)"
    ],
    "a": 2,
    "options": [
      {
        "text": "\\\\(-1\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(-2\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(0\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(1\\\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y9-11c-q5a",
    "topicId": "y9-11c",
    "c": "11C",
    "t": "The gradient of a line",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "A line passes through the point \\((1, 4)\\) and has gradient 4. Find the \\(x\\)-coordinate of the point on the line when \\(y = 16\\).",
    "opts": [
      "\\(-4\\)",
      "\\(3\\)",
      "\\(4\\)",
      "\\(5\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Find the line's equation \\(y = 4x\\) first, then substitute \\(y = 16\\) and solve for \\(x\\).",
    "solution": "1. Find the equation of the line:\n   \\(y - 4 = 4(x - 1) \\implies y - 4 = 4x - 4 \\implies y = 4x\\).\n2. Substitute \\(y = 16\\) into the equation:\n   \\(16 = 4x \\implies x = 4\\).\nSo the \\(x\\)-coordinate is 4.",
    "solutionSteps": [
      {
        "explanation": "Step 1: Write down the point-gradient formula.",
        "workingOut": "$$ m = \\frac{y - y_1}{x - x_1} $$",
        "graphData": null
      },
      {
        "explanation": "Step 2: Substitute the known point and gradient.",
        "workingOut": "Substitute $(x_1, y_1) = (1, 4)$ and $m = 4$:\n$$ \\frac{y - (4)}{x - (1)} = 4 $$",
        "graphData": null
      },
      {
        "explanation": "Step 3: Substitute the given coordinate.",
        "workingOut": "Substitute $y = 16$:\n$$ \\frac{16 - (4)}{x - (1)} = 4 $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: Solve for the unknown coordinate $x$.",
        "workingOut": "$$ \\begin{aligned} \\frac{12}{x - (1)} &= 4 \\\\ 12 &= 4(x - (1)) \\\\ x - (1) &= 3 \\\\ x &= 4 \\end{aligned} $$",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              -1,
              18,
              6,
              2
            ],
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nboard.create('point', [1, 4], {name:'(1, 4)', size:3, color:'red', label:{offset:[-20,10]}});\nboard.create('point', [4, 16], {name:'(4, 16)', size:3, color:'red', label:{offset:[10,10]}});\nboard.create('line', [[1, 4], [4, 16]], {strokeColor: 'blue', straightFirst: true, straightLast: true});\nboard.create('segment', [[1, 4], [4, 4]], {strokeColor: 'green', dash: 2});\nboard.create('segment', [[4, 4], [4, 16]], {strokeColor: 'orange', dash: 2});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11c-q5b",
    "topicId": "y9-11c",
    "c": "11C",
    "t": "The gradient of a line",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "A line passes through the point \\((1, 4)\\) and has gradient 4. Find the \\(y\\)-coordinate of the point on the line when \\(x = 3\\).",
    "opts": [
      "\\(-12\\)",
      "\\(11\\)",
      "\\(12\\)",
      "\\(13\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Use the line equation \\(y = 4x\\) and substitute \\(x = 3\\).",
    "solution": "1. The line's equation is \\(y = 4x\\).\n2. Substitute \\(x = 3\\):\n   \\(y = 4(3) = 12\\).",
    "solutionSteps": [
      {
        "explanation": "Step 1: Write down the point-gradient formula.",
        "workingOut": "$$ m = \\frac{y - y_1}{x - x_1} $$",
        "graphData": null
      },
      {
        "explanation": "Step 2: Substitute the known point and gradient.",
        "workingOut": "Substitute $(x_1, y_1) = (1, 4)$ and $m = 4$:\n$$ \\frac{y - (4)}{x - (1)} = 4 $$",
        "graphData": null
      },
      {
        "explanation": "Step 3: Substitute the given coordinate.",
        "workingOut": "Substitute $x = 3$:\n$$ \\frac{y - (4)}{3 - (1)} = 4 $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: Solve for the unknown coordinate $y$.",
        "workingOut": "$$ \\begin{aligned} \\frac{y - (4)}{2} &= 4 \\\\ y - (4) &= 8 \\\\ y &= 12 \\end{aligned} $$",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              -1,
              14,
              5,
              2
            ],
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nboard.create('point', [1, 4], {name:'(1, 4)', size:3, color:'red', label:{offset:[-20,10]}});\nboard.create('point', [3, 12], {name:'(3, 12)', size:3, color:'red', label:{offset:[10,10]}});\nboard.create('line', [[1, 4], [3, 12]], {strokeColor: 'blue', straightFirst: true, straightLast: true});\nboard.create('segment', [[1, 4], [3, 4]], {strokeColor: 'green', dash: 2});\nboard.create('segment', [[3, 4], [3, 12]], {strokeColor: 'orange', dash: 2});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11c-q5c",
    "topicId": "y9-11c",
    "c": "11C",
    "t": "The gradient of a line",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "A line passes through the point \\((1, 4)\\) and has gradient 4. Find the \\(x\\)-coordinate of the point on the line when \\(y = 0\\).",
    "answer": "0",
    "hint": "Set \\(y = 0\\) in the line's equation \\(y = 4x\\) and solve for \\(x\\).",
    "solution": "0",
    "solutionSteps": [
      {
        "explanation": "Step 1: Write down the point-gradient formula.",
        "workingOut": "$$ m = \\frac{y - y_1}{x - x_1} $$",
        "graphData": null
      },
      {
        "explanation": "Step 2: Substitute the known point and gradient.",
        "workingOut": "Substitute $(x_1, y_1) = (1, 4)$ and $m = 4$:\n$$ \\frac{y - (4)}{x - (1)} = 4 $$",
        "graphData": null
      },
      {
        "explanation": "Step 3: Substitute the given coordinate.",
        "workingOut": "Substitute $y = 0$:\n$$ \\frac{0 - (4)}{x - (1)} = 4 $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: Solve for the unknown coordinate $x$.",
        "workingOut": "$$ \\begin{aligned} \\frac{-4}{x - (1)} &= 4 \\\\ -4 &= 4(x - (1)) \\\\ x - (1) &= -1 \\\\ x &= 0 \\end{aligned} $$",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              -2,
              6,
              3,
              -2
            ],
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nboard.create('point', [1, 4], {name:'(1, 4)', size:3, color:'red', label:{offset:[-20,10]}});\nboard.create('point', [0, 0], {name:'(0, 0)', size:3, color:'red', label:{offset:[10,10]}});\nboard.create('line', [[1, 4], [0, 0]], {strokeColor: 'blue', straightFirst: true, straightLast: true});\nboard.create('segment', [[1, 4], [0, 4]], {strokeColor: 'green', dash: 2});\nboard.create('segment', [[0, 4], [0, 0]], {strokeColor: 'orange', dash: 2});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-11c-q5d",
    "topicId": "y9-11c",
    "c": "11C",
    "t": "The gradient of a line",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "A line passes through the point \\((1, 4)\\) and has gradient 4. Find the \\(y\\)-coordinate of the point on the line when \\(x = -2\\).",
    "opts": [
      "\\(-7\\)",
      "\\(-8\\)",
      "\\(-9\\)",
      "\\(8\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Use the line equation \\(y = 4x\\) and substitute \\(x = -2\\).",
    "solution": "1. The line's equation is \\(y = 4x\\).\n2. Substitute \\(x = -2\\):\n   \\(y = 4(-2) = -8\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for The gradient of a line: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(y = 4x\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(y = 4(-2) = -8\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(-8\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: -8. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(-8\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11c-q6a",
    "topicId": "y9-11c",
    "c": "11C",
    "t": "The gradient of a line",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Complete the table of values for the following lines given a point and gradient.\na) Complete the table for the line passing through \\((0, 0)\\) with gradient 3. Find the missing values in order: \\(y\\) when \\(x = -2\\), \\(x\\) when \\(y = -3\\), \\(y\\) when \\(x = 1\\), and \\(x\\) when \\(y = 9\\). Format: [val1], [val2], [val3], [val4]",
    "opts": [
      "\\(-6, -1, 3, 3\\)",
      "\\(-6, -1, 3, 3 + 1\\)",
      "\\(6, -1, 3, 3\\)",
      "\\(\\dfrac{13}{6}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(-6, -1, 3, 3\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for The gradient of a line: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(-6, -1, 3, 3\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(-6, -1, 3, 3\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: -6, -1, 3, 3. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(-6, -1, 3, 3\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11c-q6b",
    "topicId": "y9-11c",
    "c": "11C",
    "t": "The gradient of a line",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Complete the table of values for the following lines given a point and gradient.\nb) Complete the table for the line passing through \\((0, 2)\\) with gradient \\(\\frac{3}{5}\\). Find the missing values: \\(x\\) when \\(y = -4\\), \\(y\\) when \\(x = -5\\), \\(y\\) when \\(x = 5\\), and \\(x\\) when \\(y = 8\\). Format: [val1], [val2], [val3], [val4]",
    "opts": [
      "\\(-10, -1, 5, 10\\)",
      "\\(-10, -1, 5, 10 + 1\\)",
      "\\(10, -1, 5, 10\\)",
      "\\(\\dfrac{13}{6}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(-10, -1, 5, 10\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for The gradient of a line: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(-10, -1, 5, 10\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(-10, -1, 5, 10\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: -10, -1, 5, 10. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(-10, -1, 5, 10\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11c-q6c",
    "topicId": "y9-11c",
    "c": "11C",
    "t": "The gradient of a line",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Complete the table of values for the following lines given a point and gradient.\nc) Complete the table for the line passing through \\((0, 3)\\) with gradient \\(\\frac{1}{2}\\). Find the missing values: \\(x\\) when \\(y = -4\\), \\(y\\) when \\(x = -4\\), and \\(x\\) when \\(y = 6\\). Format: [val1], [val2], [val3]",
    "opts": [
      "\\(-1415\\)",
      "\\(-14, 1, 6\\)",
      "\\(-1417\\)",
      "\\(1416\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is \\(-14, 1, 6\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for The gradient of a line: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(-14, 1, 6\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(-14, 1, 6\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: -14, 1, 6. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(-14, 1, 6\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11c-q6d",
    "topicId": "y9-11c",
    "c": "11C",
    "t": "The gradient of a line",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Complete the table of values for the following lines given a point and gradient.\nd) Complete the table for the line passing through \\((2, -3)\\) with gradient \\(-3\\). Find the missing values: \\(x\\) when \\(y = 9\\), \\(y\\) when \\(x = -1\\), \\(x\\) when \\(y = 3\\), and \\(y\\) when \\(x = 1\\). Format: [val1], [val2], [val3], [val4]",
    "opts": [
      "\\(-2599\\)",
      "\\(-2, 6, 0, 0\\)",
      "\\(-2601\\)",
      "\\(2600\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is \\(-2, 6, 0, 0\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for The gradient of a line: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(-2, 6, 0, 0\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(-2, 6, 0, 0\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: -2, 6, 0, 0. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(-2, 6, 0, 0\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11c-q7a",
    "topicId": "y9-11c",
    "c": "11C",
    "t": "The gradient of a line",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Complete the table relating x-intercepts, y-intercepts, and gradients of straight lines.\na) Find the missing Gradient for row a.",
    "answer": "2",
    "hint": "",
    "solution": "2",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for The gradient of a line: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(m = \\frac{4 - 0}{0 - (-2)} = 2\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(2\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 2. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-11c-q7b",
    "topicId": "y9-11c",
    "c": "11C",
    "t": "The gradient of a line",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Complete the table relating x-intercepts, y-intercepts, and gradients of straight lines.\nb) Find the missing y-intercept for row b.",
    "opts": [
      "\\(-12\\)",
      "\\(11\\)",
      "\\(12\\)",
      "\\(13\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "",
    "solution": "The correct answer is \\(12\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for The gradient of a line: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(y = 4(x + 3) \\implies y = 4x + 12\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(12\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 12. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(12\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11c-q7c",
    "topicId": "y9-11c",
    "c": "11C",
    "t": "The gradient of a line",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Complete the table relating x-intercepts, y-intercepts, and gradients of straight lines.\nc) Find the missing x-intercept for row c.",
    "opts": [
      "\\(-10\\)",
      "\\(-11\\)",
      "\\(-9\\)",
      "\\(10\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(-10\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for The gradient of a line: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(0 = \\frac{1}{2}x + 5 \\implies x = -10\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(-10\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: -10. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(-10\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11c-q7d",
    "topicId": "y9-11c",
    "c": "11C",
    "t": "The gradient of a line",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Complete the table relating x-intercepts, y-intercepts, and gradients of straight lines.\nd) Find the missing x-intercept for row d.",
    "opts": [
      "\\(-4\\)",
      "\\(3\\)",
      "\\(4\\)",
      "\\(5\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "",
    "solution": "The correct answer is \\(4\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for The gradient of a line: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(0 = \\frac{3}{4}x - 3 \\implies x = 4\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(4\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 4. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(4\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11c-q7e",
    "topicId": "y9-11c",
    "c": "11C",
    "t": "The gradient of a line",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Complete the table relating x-intercepts, y-intercepts, and gradients of straight lines.\ne) Find the missing y-intercept for row e.",
    "opts": [
      "\\(-5\\)",
      "\\(-6\\)",
      "\\(-7\\)",
      "\\(6\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is \\(-6\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for The gradient of a line: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(y = -1(x + 6) \\implies y = -x - 6\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(-6\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: -6. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(-6\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11c-q7f",
    "topicId": "y9-11c",
    "c": "11C",
    "t": "The gradient of a line",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Complete the table relating x-intercepts, y-intercepts, and gradients of straight lines.\nf) Find the missing x-intercept for row f.",
    "opts": [
      "\\(-5\\)",
      "\\(4\\)",
      "\\(5\\)",
      "\\(6\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "",
    "solution": "The correct answer is \\(5\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for The gradient of a line: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(0 = -2x + 10 \\implies x = 5\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(5\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 5. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(5\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11c-q7g",
    "topicId": "y9-11c",
    "c": "11C",
    "t": "The gradient of a line",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Complete the table relating x-intercepts, y-intercepts, and gradients of straight lines.\ng) Find the missing Gradient for row g.",
    "opts": [
      "\\(-1/4\\)",
      "\\(-1.25\\)",
      "\\(0.25\\)",
      "\\(0.75\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(-1/4\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for The gradient of a line: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(m = \\frac{2 - 0}{0 - 8} = -\\frac{1}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(-1/4\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: -1/4. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(-1/4\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11c-q8a",
    "topicId": "y9-11c",
    "c": "11C",
    "t": "The gradient of a line",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "A line passes through the point \\(A(3, 8)\\) and has gradient 2. Find where the line crosses the \\(x\\)-axis and the \\(y\\)-axis.\na) Find the coordinates of the point where the line crosses the \\(x\\)-axis.",
    "opts": [
      "\\((-1, 0)\\)",
      "\\((-1, 0) + 1\\)",
      "\\(\\dfrac{12}{5}\\)",
      "\\(\\dfrac{13}{6}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\((-1, 0)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for The gradient of a line: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(0 = 2x + 2 \\implies x = -1 \\implies (-1, 0)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\((-1, 0)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (-1, 0). Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\((-1, 0)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11c-q8b",
    "topicId": "y9-11c",
    "c": "11C",
    "t": "The gradient of a line",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "A line passes through the point \\(A(3, 8)\\) and has gradient 2. Find where the line crosses the \\(x\\)-axis and the \\(y\\)-axis.\nb) Find the coordinates of the point where the line crosses the \\(y\\)-axis.",
    "opts": [
      "\\((0, 2)\\)",
      "\\((0, 2) + 1\\)",
      "\\((0, 3)\\)",
      "\\(\\dfrac{13}{6}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\((0, 2)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for The gradient of a line: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(y = 2(0) + 2 = 2 \\implies (0, 2)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\((0, 2)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (0, 2). Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\((0, 2)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11c-q9",
    "topicId": "y9-11c",
    "c": "11C",
    "t": "The gradient of a line",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "A line passes through the point \\((3, 11)\\) and crosses the \\(y\\)-axis at the point \\((0, 5)\\). At what point does it cross the \\(x\\)-axis?",
    "opts": [
      "\\((-2.5, 0)\\)",
      "\\((-2.5, 0) + 1\\)",
      "\\((-3.5, 0)\\)",
      "\\(\\dfrac{13}{6}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Identify the y-intercept, calculate the gradient, write the line equation, and then find where \\(y = 0\\).",
    "solution": "1. The \\(y\\)-intercept is \\((0, 5)\\), so \\(c = 5\\) in \\(y = mx + c\\).\n2. Substitute the point \\((3, 11)\\) to find the gradient \\(m\\):\n   \\(11 = m(3) + 5 \\implies 3m = 6 \\implies m = 2\\).\n   So, the line's equation is \\(y = 2x + 5\\).\n3. Find the \\(x\\)-intercept by setting \\(y = 0\\):\n   \\(0 = 2x + 5 \\implies 2x = -5 \\implies x = -2.5\\).\nTherefore, the line crosses the \\(x\\)-axis at the point \\((-2.5, 0)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for The gradient of a line: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(c = 5\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(11 = 3m + 5 \\implies 3m = 6 \\implies m = 2\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(y = 2x + 5\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (-2.5, 0). Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\((-2.5, 0)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11c-q10",
    "topicId": "y9-11c",
    "c": "11C",
    "t": "The gradient of a line",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "A line passes through \\((0, p)\\) and \\((q, 0)\\). Find the gradient of the line.",
    "opts": [
      "\\\\(-\\\\frac{p}{q}\\\\)",
      "\\\\(\\\\frac{p}{q}\\\\)",
      "\\\\(-\\\\frac{q}{p}\\\\)",
      "\\\\(\\\\frac{q}{p}\\\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Substitute the variables into the gradient formula \\(m = \\frac{y_2 - y_1}{x_2 - x_1}\\) and simplify.",
    "solution": "Using the gradient formula with endpoints \\((x_1, y_1) = (0, p)\\) and \\((x_2, y_2) = (q, 0)\\):\n\\(m = \\frac{y_2 - y_1}{x_2 - x_1}\\)\n\\(m = \\frac{0 - p}{q - 0} = \\frac{-p}{q} = -\\frac{p}{q}\\).\nSo the gradient is \\(-\\frac{p}{q}\\).",
    "solutionSteps": [
      {
        "explanation": "Step 1: Identify the coordinates of the two points.",
        "workingOut": "Let $(x_1, y_1) = (0, p)$ and $(x_2, y_2) = (q, 0)$.",
        "graphData": null
      },
      {
        "explanation": "Step 2: State the formula for the gradient \\(m\\).",
        "workingOut": "$$ m = \\frac{Rise}{Run} = \\frac{y_2 - y_1}{x_2 - x_1} $$",
        "graphData": null
      },
      {
        "explanation": "Step 3: Substitute the coordinates into the formula.",
        "workingOut": "$$ m = \\frac{0 - p}{q - 0} $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: Simplify the fraction to find the final gradient.",
        "workingOut": "$$ m = \\frac{-p}{q} = -\\frac{p}{q} $$",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              -2,
              6,
              6,
              -2
            ],
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nboard.create('point', [0, 4], {name:'(0, p)', size:3, color:'red', label:{offset:[-35,10]}});\nboard.create('point', [4, 0], {name:'(q, 0)', size:3, color:'red', label:{offset:[10,10]}});\nboard.create('line', [[0, 4], [4, 0]], {strokeColor: 'blue', straightFirst: true, straightLast: true});\nboard.create('segment', [[0, 4], [4, 4]], {strokeColor: 'green', dash: 2});\nboard.create('segment', [[4, 4], [4, 0]], {strokeColor: 'orange', dash: 2});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\\\(-\\\\frac{p}{q}\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(\\\\frac{p}{q}\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(-\\\\frac{q}{p}\\\\)",
        "imageUrl": ""
      },
      {
        "text": "\\\\(\\\\frac{q}{p}\\\\)",
        "imageUrl": ""
      }
    ]
  }
];
