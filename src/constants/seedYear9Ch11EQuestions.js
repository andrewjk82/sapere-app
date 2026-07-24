export const Y9_CH11E_QUESTIONS = [
  {
    "id": "y9-11e-q1a",
    "topicId": "y9-11e",
    "c": "11E",
    "t": "Sketching linear graphs",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Sketch the graph of the line \\(y = 3x + 1\\) by calculating the \\(y\\)-intercept and finding one other point.",
    "answer": "Line with y-intercept at \\((0, 1)\\) passing through \\((1, 4)\\).",
    "hint": "Substitute \\(x = 0\\) to find the \\(y\\)-intercept, then choose another value like \\(x = 1\\) to find a second point.",
    "solution": "Line with y-intercept at \\((0, 1)\\) passing through \\((1, 4)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sketching linear graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(x = 0 \\implies y = 1\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(x = 1 \\implies y = 4\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\text{Line passes through } (0, 1) \\text{ and } (1, 4)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Line with y-intercept at \\((0, 1)\\) passing through \\((1, 4)\\).. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Line with y-intercept at \\((0, 1)\\) passing through \\((1, 4)\\).",
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
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-4, 0], [4, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -4], [0, 6]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [3.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 5.7, 'y'], {fontSize: 12});\nboard.create('line', [[0, 1], [1, 4]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [0, 1], {size: 3, color: 'red', name: '(0, 1)', withLabel: true, label: {autoPosition: false, offset: [10, 5]}});\nboard.create('point', [1, 4], {size: 3, color: 'red', name: '(1, 4)', withLabel: true, label: {autoPosition: false, offset: [10, 5]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-11e-q1b",
    "topicId": "y9-11e",
    "c": "11E",
    "t": "Sketching linear graphs",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Sketch the graph of the line \\(y = 2x + 3\\) by calculating the \\(y\\)-intercept and finding one other point.",
    "answer": "Line with y-intercept at \\((0, 3)\\) passing through \\((1, 5)\\).",
    "hint": "Substitute \\(x = 0\\) to find the \\(y\\)-intercept, then choose another value like \\(x = 1\\) to find a second point.",
    "solution": "Line with y-intercept at \\((0, 3)\\) passing through \\((1, 5)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sketching linear graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(x = 0 \\implies y = 3\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(x = 1 \\implies y = 5\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\text{Line passes through } (0, 3) \\text{ and } (1, 5)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Line with y-intercept at \\((0, 3)\\) passing through \\((1, 5)\\).. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Line with y-intercept at \\((0, 3)\\) passing through \\((1, 5)\\).",
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
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-4.5, 0], [4, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -4], [0, 6]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [3.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 5.7, 'y'], {fontSize: 12});\nboard.create('line', [[0, 3], [1, 5]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [0, 3], {size: 3, color: 'red', name: '(0, 3)', withLabel: true, label: {autoPosition: false, offset: [10, 5]}});\nboard.create('point', [1, 5], {size: 3, color: 'red', name: '(1, 5)', withLabel: true, label: {autoPosition: false, offset: [10, 5]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-11e-q1c",
    "topicId": "y9-11e",
    "c": "11E",
    "t": "Sketching linear graphs",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Sketch the graph of the line \\(y = 2x - 3\\) by calculating the \\(y\\)-intercept and finding one other point.",
    "answer": "Line with y-intercept at \\((0, -3)\\) passing through \\((1, -1)\\).",
    "hint": "Substitute \\(x = 0\\) to find the \\(y\\)-intercept, then choose another value like \\(x = 1\\) to find a second point.",
    "solution": "Line with y-intercept at \\((0, -3)\\) passing through \\((1, -1)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sketching linear graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(x = 0 \\implies y = -3\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(x = 1 \\implies y = -1\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\text{Line passes through } (0, -3) \\text{ and } (1, -1)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Line with y-intercept at \\((0, -3)\\) passing through \\((1, -1)\\).. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Line with y-intercept at \\((0, -3)\\) passing through \\((1, -1)\\).",
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
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-4, 0], [4.5, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -6], [0, 6]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.2, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 5.7, 'y'], {fontSize: 12});\nboard.create('line', [[0, -3], [1, -1]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [0, -3], {size: 3, color: 'red', name: '(0, -3)', withLabel: true, label: {autoPosition: false, offset: [10, 5]}});\nboard.create('point', [1, -1], {size: 3, color: 'red', name: '(1, -1)', withLabel: true, label: {autoPosition: false, offset: [10, 5]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-11e-q1d",
    "topicId": "y9-11e",
    "c": "11E",
    "t": "Sketching linear graphs",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Sketch the graph of the line \\(y = 3x + 4\\) by calculating the \\(y\\)-intercept and finding one other point.",
    "answer": "Line with y-intercept at \\((0, 4)\\) passing through \\((1, 7)\\).",
    "hint": "Substitute \\(x = 0\\) to find the \\(y\\)-intercept, then choose another value like \\(x = 1\\) to find a second point.",
    "solution": "Line with y-intercept at \\((0, 4)\\) passing through \\((1, 7)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sketching linear graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(x = 0 \\implies y = 4\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(x = 1 \\implies y = 7\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\text{Line passes through } (0, 4) \\text{ and } (1, 7)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Line with y-intercept at \\((0, 4)\\) passing through \\((1, 7)\\).. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Line with y-intercept at \\((0, 4)\\) passing through \\((1, 7)\\).",
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
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-4.333333333333333, 0], [4, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -4], [0, 7]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [3.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 6.7, 'y'], {fontSize: 12});\nboard.create('line', [[0, 4], [1, 7]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [0, 4], {size: 3, color: 'red', name: '(0, 4)', withLabel: true, label: {autoPosition: false, offset: [10, 5]}});\nboard.create('point', [1, 7], {size: 3, color: 'red', name: '(1, 7)', withLabel: true, label: {autoPosition: false, offset: [10, 5]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-11e-q1e",
    "topicId": "y9-11e",
    "c": "11E",
    "t": "Sketching linear graphs",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Sketch the graph of the line \\(y = 5 - 3x\\) by calculating the \\(y\\)-intercept and finding one other point.",
    "answer": "Line with y-intercept at \\((0, 5)\\) passing through \\((1, 2)\\).",
    "hint": "Substitute \\(x = 0\\) to find the \\(y\\)-intercept, then choose another value like \\(x = 1\\) to find a second point.",
    "solution": "Line with y-intercept at \\((0, 5)\\) passing through \\((1, 2)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sketching linear graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(x = 0 \\implies y = 5\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(x = 1 \\implies y = 2\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\text{Line passes through } (0, 5) \\text{ and } (1, 2)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Line with y-intercept at \\((0, 5)\\) passing through \\((1, 2)\\).. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Line with y-intercept at \\((0, 5)\\) passing through \\((1, 2)\\).",
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
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-4, 0], [4.666666666666667, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -4], [0, 8]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.366666666666667, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 7.7, 'y'], {fontSize: 12});\nboard.create('line', [[0, 5], [1, 2]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [0, 5], {size: 3, color: 'red', name: '(0, 5)', withLabel: true, label: {autoPosition: false, offset: [10, 5]}});\nboard.create('point', [1, 2], {size: 3, color: 'red', name: '(1, 2)', withLabel: true, label: {autoPosition: false, offset: [10, 5]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-11e-q1f",
    "topicId": "y9-11e",
    "c": "11E",
    "t": "Sketching linear graphs",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Sketch the graph of the line \\(y = 4 - x\\) by calculating the \\(y\\)-intercept and finding one other point.",
    "answer": "Line with y-intercept at \\((0, 4)\\) passing through \\((1, 3)\\).",
    "hint": "Substitute \\(x = 0\\) to find the \\(y\\)-intercept, then choose another value like \\(x = 1\\) to find a second point.",
    "solution": "Line with y-intercept at \\((0, 4)\\) passing through \\((1, 3)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sketching linear graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(x = 0 \\implies y = 4\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(x = 1 \\implies y = 3\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\text{Line passes through } (0, 4) \\text{ and } (1, 3)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Line with y-intercept at \\((0, 4)\\) passing through \\((1, 3)\\).. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Line with y-intercept at \\((0, 4)\\) passing through \\((1, 3)\\).",
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
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-4, 0], [7, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -4], [0, 7]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [6.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 6.7, 'y'], {fontSize: 12});\nboard.create('line', [[0, 4], [1, 3]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [0, 4], {size: 3, color: 'red', name: '(0, 4)', withLabel: true, label: {autoPosition: false, offset: [10, 5]}});\nboard.create('point', [1, 3], {size: 3, color: 'red', name: '(1, 3)', withLabel: true, label: {autoPosition: false, offset: [10, 5]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-11e-q1g",
    "topicId": "y9-11e",
    "c": "11E",
    "t": "Sketching linear graphs",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Sketch the graph of the line \\(y = \\frac{1}{3}x + 2\\) by calculating the \\(y\\)-intercept and finding one other point.",
    "answer": "Line with y-intercept at \\((0, 2)\\) passing through \\((1, 2.3333333333333335)\\).",
    "hint": "Substitute \\(x = 0\\) to find the \\(y\\)-intercept, then choose another value like \\(x = 1\\) to find a second point.",
    "solution": "Line with y-intercept at \\((0, 2)\\) passing through \\((1, 2.3333333333333335)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sketching linear graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(x = 0 \\implies y = 2\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(x = 1 \\implies y = 2.3333333333333335\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\text{Line passes through } (0, 2) \\text{ and } (1, 2.3333333333333335)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Line with y-intercept at \\((0, 2)\\) passing through \\((1, 2.3333333333333335)\\).. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Line with y-intercept at \\((0, 2)\\) passing through \\((1, 2.3333333333333335)\\).",
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
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-9, 0], [4, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -4], [0, 6]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [3.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 5.7, 'y'], {fontSize: 12});\nboard.create('line', [[0, 2], [1, 2.3333333333333335]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [0, 2], {size: 3, color: 'red', name: '(0, 2)', withLabel: true, label: {autoPosition: false, offset: [10, 5]}});\nboard.create('point', [1, 2.3333333333333335], {size: 3, color: 'red', name: '(1, 2.3333333333333335)', withLabel: true, label: {autoPosition: false, offset: [10, 5]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-11e-q1h",
    "topicId": "y9-11e",
    "c": "11E",
    "t": "Sketching linear graphs",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Sketch the graph of the line \\(y = \\frac{3}{4}x + 1\\) by calculating the \\(y\\)-intercept and finding one other point.",
    "answer": "Line with y-intercept at \\((0, 1)\\) passing through \\((1, 1.75)\\).",
    "hint": "Substitute \\(x = 0\\) to find the \\(y\\)-intercept, then choose another value like \\(x = 1\\) to find a second point.",
    "solution": "Line with y-intercept at \\((0, 1)\\) passing through \\((1, 1.75)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sketching linear graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(x = 0 \\implies y = 1\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(x = 1 \\implies y = 1.75\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\text{Line passes through } (0, 1) \\text{ and } (1, 1.75)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Line with y-intercept at \\((0, 1)\\) passing through \\((1, 1.75)\\).. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Line with y-intercept at \\((0, 1)\\) passing through \\((1, 1.75)\\).",
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
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-4.333333333333333, 0], [4, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -4], [0, 6]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [3.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 5.7, 'y'], {fontSize: 12});\nboard.create('line', [[0, 1], [1, 1.75]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [0, 1], {size: 3, color: 'red', name: '(0, 1)', withLabel: true, label: {autoPosition: false, offset: [10, 5]}});\nboard.create('point', [1, 1.75], {size: 3, color: 'red', name: '(1, 1.75)', withLabel: true, label: {autoPosition: false, offset: [10, 5]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-11e-q1i",
    "topicId": "y9-11e",
    "c": "11E",
    "t": "Sketching linear graphs",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Sketch the graph of the line \\(y = -3x + 2\\) by calculating the \\(y\\)-intercept and finding one other point.",
    "answer": "Line with y-intercept at \\((0, 2)\\) passing through \\((1, -1)\\).",
    "hint": "Substitute \\(x = 0\\) to find the \\(y\\)-intercept, then choose another value like \\(x = 1\\) to find a second point.",
    "solution": "Line with y-intercept at \\((0, 2)\\) passing through \\((1, -1)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sketching linear graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(x = 0 \\implies y = 2\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(x = 1 \\implies y = -1\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\text{Line passes through } (0, 2) \\text{ and } (1, -1)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Line with y-intercept at \\((0, 2)\\) passing through \\((1, -1)\\).. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Line with y-intercept at \\((0, 2)\\) passing through \\((1, -1)\\).",
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
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-4, 0], [4, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -4], [0, 6]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [3.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 5.7, 'y'], {fontSize: 12});\nboard.create('line', [[0, 2], [1, -1]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [0, 2], {size: 3, color: 'red', name: '(0, 2)', withLabel: true, label: {autoPosition: false, offset: [10, 5]}});\nboard.create('point', [1, -1], {size: 3, color: 'red', name: '(1, -1)', withLabel: true, label: {autoPosition: false, offset: [10, 5]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-11e-q2a",
    "topicId": "y9-11e",
    "c": "11E",
    "t": "Sketching linear graphs",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Sketch the graph of the line \\(y = 5x\\).",
    "answer": "Line passing through the origin \\((0, 0)\\) and \\((2, 10)\\).",
    "hint": "This line passes through the origin. Find a second point by substituting a non-zero value for \\(x\\).",
    "solution": "Line passing through the origin \\((0, 0)\\) and \\((2, 10)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sketching linear graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(x = 0 \\implies y = 0\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(x = 2 \\implies y = 10\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "Line passing through the origin \\((0, 0)\\) and \\((2, 10)\\).",
        "graphData": null
      },
      {
        "explanation": "Final answer: Line passing through the origin \\((0, 0)\\) and \\((2, 10)\\).. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Line passing through the origin \\((0, 0)\\) and \\((2, 10)\\).",
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
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-6, 0], [6, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -13], [0, 13]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [5.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 12.7, 'y'], {fontSize: 12});\nboard.create('line', [[0, 0], [2, 10]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [0, 0], {size: 3, color: 'red', name: '(0, 0)', withLabel: true, label: {autoPosition: false, offset: [-15, -15]}});\nboard.create('point', [2, 10], {size: 3, color: 'red', name: '(2, 10)', withLabel: true, label: {autoPosition: false, offset: [10, 5]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-11e-q2b",
    "topicId": "y9-11e",
    "c": "11E",
    "t": "Sketching linear graphs",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Sketch the graph of the line \\(y = 3x\\).",
    "answer": "Line passing through the origin \\((0, 0)\\) and \\((2, 6)\\).",
    "hint": "This line passes through the origin. Find a second point by substituting a non-zero value for \\(x\\).",
    "solution": "Line passing through the origin \\((0, 0)\\) and \\((2, 6)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sketching linear graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(x = 0 \\implies y = 0\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(x = 2 \\implies y = 6\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "Line passing through the origin \\((0, 0)\\) and \\((2, 6)\\).",
        "graphData": null
      },
      {
        "explanation": "Final answer: Line passing through the origin \\((0, 0)\\) and \\((2, 6)\\).. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Line passing through the origin \\((0, 0)\\) and \\((2, 6)\\).",
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
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-6, 0], [6, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -9], [0, 9]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [5.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 8.7, 'y'], {fontSize: 12});\nboard.create('line', [[0, 0], [2, 6]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [0, 0], {size: 3, color: 'red', name: '(0, 0)', withLabel: true, label: {autoPosition: false, offset: [-15, -15]}});\nboard.create('point', [2, 6], {size: 3, color: 'red', name: '(2, 6)', withLabel: true, label: {autoPosition: false, offset: [10, 5]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-11e-q2c",
    "topicId": "y9-11e",
    "c": "11E",
    "t": "Sketching linear graphs",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Sketch the graph of the line \\(y = 4x\\).",
    "answer": "Line passing through the origin \\((0, 0)\\) and \\((2, 8)\\).",
    "hint": "This line passes through the origin. Find a second point by substituting a non-zero value for \\(x\\).",
    "solution": "Line passing through the origin \\((0, 0)\\) and \\((2, 8)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sketching linear graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(x = 0 \\implies y = 0\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(x = 2 \\implies y = 8\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "Line passing through the origin \\((0, 0)\\) and \\((2, 8)\\).",
        "graphData": null
      },
      {
        "explanation": "Final answer: Line passing through the origin \\((0, 0)\\) and \\((2, 8)\\).. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Line passing through the origin \\((0, 0)\\) and \\((2, 8)\\).",
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
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-6, 0], [6, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -11], [0, 11]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [5.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 10.7, 'y'], {fontSize: 12});\nboard.create('line', [[0, 0], [2, 8]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [0, 0], {size: 3, color: 'red', name: '(0, 0)', withLabel: true, label: {autoPosition: false, offset: [-15, -15]}});\nboard.create('point', [2, 8], {size: 3, color: 'red', name: '(2, 8)', withLabel: true, label: {autoPosition: false, offset: [10, 5]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-11e-q2d",
    "topicId": "y9-11e",
    "c": "11E",
    "t": "Sketching linear graphs",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Sketch the graph of the line \\(y = \\frac{1}{3}x\\).",
    "answer": "Line passing through the origin \\((0, 0)\\) and \\((12, 4)\\).",
    "hint": "This line passes through the origin. Find a second point by substituting a non-zero value for \\(x\\).",
    "solution": "Line passing through the origin \\((0, 0)\\) and \\((12, 4)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sketching linear graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(x = 0 \\implies y = 0\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(x = 12 \\implies y = 4\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "Line passing through the origin \\((0, 0)\\) and \\((12, 4)\\).",
        "graphData": null
      },
      {
        "explanation": "Final answer: Line passing through the origin \\((0, 0)\\) and \\((12, 4)\\).. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Line passing through the origin \\((0, 0)\\) and \\((12, 4)\\).",
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
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-15, 0], [15, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -7], [0, 7]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [14.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 6.7, 'y'], {fontSize: 12});\nboard.create('line', [[0, 0], [12, 4]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [0, 0], {size: 3, color: 'red', name: '(0, 0)', withLabel: true, label: {autoPosition: false, offset: [-15, -15]}});\nboard.create('point', [12, 4], {size: 3, color: 'red', name: '(12, 4)', withLabel: true, label: {autoPosition: false, offset: [10, 5]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-11e-q2e",
    "topicId": "y9-11e",
    "c": "11E",
    "t": "Sketching linear graphs",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Sketch the graph of the line \\(y = -3x\\).",
    "answer": "Line passing through the origin \\((0, 0)\\) and \\((2, -6)\\).",
    "hint": "This line passes through the origin. Find a second point by substituting a non-zero value for \\(x\\).",
    "solution": "Line passing through the origin \\((0, 0)\\) and \\((2, -6)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sketching linear graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(x = 0 \\implies y = 0\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(x = 2 \\implies y = -6\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "Line passing through the origin \\((0, 0)\\) and \\((2, -6)\\).",
        "graphData": null
      },
      {
        "explanation": "Final answer: Line passing through the origin \\((0, 0)\\) and \\((2, -6)\\).. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Line passing through the origin \\((0, 0)\\) and \\((2, -6)\\).",
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
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-6, 0], [6, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -9], [0, 9]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [5.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 8.7, 'y'], {fontSize: 12});\nboard.create('line', [[0, 0], [2, -6]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [0, 0], {size: 3, color: 'red', name: '(0, 0)', withLabel: true, label: {autoPosition: false, offset: [-15, -15]}});\nboard.create('point', [2, -6], {size: 3, color: 'red', name: '(2, -6)', withLabel: true, label: {autoPosition: false, offset: [10, 5]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-11e-q2f",
    "topicId": "y9-11e",
    "c": "11E",
    "t": "Sketching linear graphs",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Sketch the graph of the line \\(y = -2x\\).",
    "answer": "Line passing through the origin \\((0, 0)\\) and \\((2, -4)\\).",
    "hint": "This line passes through the origin. Find a second point by substituting a non-zero value for \\(x\\).",
    "solution": "Line passing through the origin \\((0, 0)\\) and \\((2, -4)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sketching linear graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(x = 0 \\implies y = 0\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(x = 2 \\implies y = -4\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "Line passing through the origin \\((0, 0)\\) and \\((2, -4)\\).",
        "graphData": null
      },
      {
        "explanation": "Final answer: Line passing through the origin \\((0, 0)\\) and \\((2, -4)\\).. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Line passing through the origin \\((0, 0)\\) and \\((2, -4)\\).",
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
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-6, 0], [6, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -7], [0, 7]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [5.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 6.7, 'y'], {fontSize: 12});\nboard.create('line', [[0, 0], [2, -4]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [0, 0], {size: 3, color: 'red', name: '(0, 0)', withLabel: true, label: {autoPosition: false, offset: [-15, -15]}});\nboard.create('point', [2, -4], {size: 3, color: 'red', name: '(2, -4)', withLabel: true, label: {autoPosition: false, offset: [10, 5]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-11e-q2g",
    "topicId": "y9-11e",
    "c": "11E",
    "t": "Sketching linear graphs",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Sketch the graph of the line \\(x + 3y = 0\\).",
    "answer": "Line passing through the origin \\((0, 0)\\) and \\((12, -4)\\).",
    "hint": "This line passes through the origin. Find a second point by substituting a non-zero value for \\(x\\).",
    "solution": "Line passing through the origin \\((0, 0)\\) and \\((12, -4)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sketching linear graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(y = -\\frac{1}{3}x\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(x = 0 \\implies y = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(x = 12 \\implies y = -4\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Line passing through the origin \\((0, 0)\\) and \\((12, -4)\\).. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Line passing through the origin \\((0, 0)\\) and \\((12, -4)\\).",
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
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-15, 0], [15, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -7], [0, 7]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [14.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 6.7, 'y'], {fontSize: 12});\nboard.create('line', [[0, 0], [12, -4]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [0, 0], {size: 3, color: 'red', name: '(0, 0)', withLabel: true, label: {autoPosition: false, offset: [-15, -15]}});\nboard.create('point', [12, -4], {size: 3, color: 'red', name: '(12, -4)', withLabel: true, label: {autoPosition: false, offset: [10, 5]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-11e-q2h",
    "topicId": "y9-11e",
    "c": "11E",
    "t": "Sketching linear graphs",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Sketch the graph of the line \\(3x + y = 0\\).",
    "answer": "Line passing through the origin \\((0, 0)\\) and \\((2, -6)\\).",
    "hint": "This line passes through the origin. Find a second point by substituting a non-zero value for \\(x\\).",
    "solution": "Line passing through the origin \\((0, 0)\\) and \\((2, -6)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sketching linear graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(y = -3x\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(x = 0 \\implies y = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(x = 2 \\implies y = -6\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Line passing through the origin \\((0, 0)\\) and \\((2, -6)\\).. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Line passing through the origin \\((0, 0)\\) and \\((2, -6)\\).",
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
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-6, 0], [6, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -9], [0, 9]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [5.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 8.7, 'y'], {fontSize: 12});\nboard.create('line', [[0, 0], [2, -6]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [0, 0], {size: 3, color: 'red', name: '(0, 0)', withLabel: true, label: {autoPosition: false, offset: [-15, -15]}});\nboard.create('point', [2, -6], {size: 3, color: 'red', name: '(2, -6)', withLabel: true, label: {autoPosition: false, offset: [10, 5]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-11e-q2i",
    "topicId": "y9-11e",
    "c": "11E",
    "t": "Sketching linear graphs",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Sketch the graph of the line \\(3y - 2x = 0\\).",
    "answer": "Line passing through the origin \\((0, 0)\\) and \\((12, 8)\\).",
    "hint": "This line passes through the origin. Find a second point by substituting a non-zero value for \\(x\\).",
    "solution": "Line passing through the origin \\((0, 0)\\) and \\((12, 8)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sketching linear graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(y = \\frac{2}{3}x\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(x = 0 \\implies y = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(x = 12 \\implies y = 8\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Line passing through the origin \\((0, 0)\\) and \\((12, 8)\\).. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Line passing through the origin \\((0, 0)\\) and \\((12, 8)\\).",
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
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-15, 0], [15, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -11], [0, 11]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [14.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 10.7, 'y'], {fontSize: 12});\nboard.create('line', [[0, 0], [12, 8]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [0, 0], {size: 3, color: 'red', name: '(0, 0)', withLabel: true, label: {autoPosition: false, offset: [-15, -15]}});\nboard.create('point', [12, 8], {size: 3, color: 'red', name: '(12, 8)', withLabel: true, label: {autoPosition: false, offset: [10, 5]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-11e-q2j",
    "topicId": "y9-11e",
    "c": "11E",
    "t": "Sketching linear graphs",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Sketch the graph of the line \\(2x + y = 0\\).",
    "answer": "Line passing through the origin \\((0, 0)\\) and \\((2, -4)\\).",
    "hint": "This line passes through the origin. Find a second point by substituting a non-zero value for \\(x\\).",
    "solution": "Line passing through the origin \\((0, 0)\\) and \\((2, -4)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sketching linear graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(y = -2x\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(x = 0 \\implies y = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(x = 2 \\implies y = -4\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Line passing through the origin \\((0, 0)\\) and \\((2, -4)\\).. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Line passing through the origin \\((0, 0)\\) and \\((2, -4)\\).",
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
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-6, 0], [6, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -7], [0, 7]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [5.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 6.7, 'y'], {fontSize: 12});\nboard.create('line', [[0, 0], [2, -4]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [0, 0], {size: 3, color: 'red', name: '(0, 0)', withLabel: true, label: {autoPosition: false, offset: [-15, -15]}});\nboard.create('point', [2, -4], {size: 3, color: 'red', name: '(2, -4)', withLabel: true, label: {autoPosition: false, offset: [10, 5]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-11e-q2k",
    "topicId": "y9-11e",
    "c": "11E",
    "t": "Sketching linear graphs",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Sketch the graph of the line \\(\\frac{x}{4} - \\frac{y}{3} = 0\\).",
    "answer": "Line passing through the origin \\((0, 0)\\) and \\((12, 9)\\).",
    "hint": "This line passes through the origin. Find a second point by substituting a non-zero value for \\(x\\).",
    "solution": "Line passing through the origin \\((0, 0)\\) and \\((12, 9)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sketching linear graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(y = \\frac{3}{4}x\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(x = 0 \\implies y = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(x = 12 \\implies y = 9\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Line passing through the origin \\((0, 0)\\) and \\((12, 9)\\).. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Line passing through the origin \\((0, 0)\\) and \\((12, 9)\\).",
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
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-15, 0], [15, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -12], [0, 12]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [14.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 11.7, 'y'], {fontSize: 12});\nboard.create('line', [[0, 0], [12, 9]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [0, 0], {size: 3, color: 'red', name: '(0, 0)', withLabel: true, label: {autoPosition: false, offset: [-15, -15]}});\nboard.create('point', [12, 9], {size: 3, color: 'red', name: '(12, 9)', withLabel: true, label: {autoPosition: false, offset: [10, 5]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-11e-q2l",
    "topicId": "y9-11e",
    "c": "11E",
    "t": "Sketching linear graphs",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Sketch the graph of the line \\(\\frac{y}{3} - x = 0\\).",
    "answer": "Line passing through the origin \\((0, 0)\\) and \\((12, 36)\\).",
    "hint": "This line passes through the origin. Find a second point by substituting a non-zero value for \\(x\\).",
    "solution": "Line passing through the origin \\((0, 0)\\) and \\((12, 36)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sketching linear graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(y = 3x\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(x = 0 \\implies y = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(x = 12 \\implies y = 36\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Line passing through the origin \\((0, 0)\\) and \\((12, 36)\\).. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Line passing through the origin \\((0, 0)\\) and \\((12, 36)\\).",
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
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-15, 0], [15, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -39], [0, 39]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [14.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 38.7, 'y'], {fontSize: 12});\nboard.create('line', [[0, 0], [12, 36]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [0, 0], {size: 3, color: 'red', name: '(0, 0)', withLabel: true, label: {autoPosition: false, offset: [-15, -15]}});\nboard.create('point', [12, 36], {size: 3, color: 'red', name: '(12, 36)', withLabel: true, label: {autoPosition: false, offset: [10, 5]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-11e-q3a",
    "topicId": "y9-11e",
    "c": "11E",
    "t": "Sketching linear graphs",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Sketch the graph of the line \\(3x + y = 6\\) by calculating the coordinates of the \\(x\\)- and \\(y\\)-intercepts.",
    "answer": "Line with x-intercept at \\((2, 0)\\) and y-intercept at \\((0, 6)\\).",
    "hint": "Set \\(x = 0\\) to find the \\(y\\)-intercept, and set \\(y = 0\\) to find the \\(x\\)-intercept.",
    "solution": "Line with x-intercept at \\((2, 0)\\) and y-intercept at \\((0, 6)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sketching linear graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(x = 0 \\implies y = 6\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(y = 0 \\implies x = 2\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\text{Line passes through } (0, 6) \\text{ and } (2, 0)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Line with x-intercept at \\((2, 0)\\) and y-intercept at \\((0, 6)\\).. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Line with x-intercept at \\((2, 0)\\) and y-intercept at \\((0, 6)\\).",
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
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-5, 0], [5, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -5], [0, 9]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 8.7, 'y'], {fontSize: 12});\nboard.create('line', [[2, 0], [0, 6]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [2, 0], {size: 3, color: 'red', name: '(2, 0)', withLabel: true, label: {autoPosition: false, offset: [5, 10]}});\nboard.create('point', [0, 6], {size: 3, color: 'red', name: '(0, 6)', withLabel: true, label: {autoPosition: false, offset: [10, 5]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-11e-q3b",
    "topicId": "y9-11e",
    "c": "11E",
    "t": "Sketching linear graphs",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Sketch the graph of the line \\(x + 2y = 4\\) by calculating the coordinates of the \\(x\\)- and \\(y\\)-intercepts.",
    "answer": "Line with x-intercept at \\((4, 0)\\) and y-intercept at \\((0, 2)\\).",
    "hint": "Set \\(x = 0\\) to find the \\(y\\)-intercept, and set \\(y = 0\\) to find the \\(x\\)-intercept.",
    "solution": "Line with x-intercept at \\((4, 0)\\) and y-intercept at \\((0, 2)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sketching linear graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(x = 0 \\implies y = 2\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(y = 0 \\implies x = 4\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\text{Line passes through } (0, 2) \\text{ and } (4, 0)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Line with x-intercept at \\((4, 0)\\) and y-intercept at \\((0, 2)\\).. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Line with x-intercept at \\((4, 0)\\) and y-intercept at \\((0, 2)\\).",
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
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-5, 0], [7, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -5], [0, 5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [6.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 4.7, 'y'], {fontSize: 12});\nboard.create('line', [[4, 0], [0, 2]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [4, 0], {size: 3, color: 'red', name: '(4, 0)', withLabel: true, label: {autoPosition: false, offset: [5, 10]}});\nboard.create('point', [0, 2], {size: 3, color: 'red', name: '(0, 2)', withLabel: true, label: {autoPosition: false, offset: [10, 5]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-11e-q3c",
    "topicId": "y9-11e",
    "c": "11E",
    "t": "Sketching linear graphs",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Sketch the graph of the line \\(2x + 5y = 10\\) by calculating the coordinates of the \\(x\\)- and \\(y\\)-intercepts.",
    "answer": "Line with x-intercept at \\((5, 0)\\) and y-intercept at \\((0, 2)\\).",
    "hint": "Set \\(x = 0\\) to find the \\(y\\)-intercept, and set \\(y = 0\\) to find the \\(x\\)-intercept.",
    "solution": "Line with x-intercept at \\((5, 0)\\) and y-intercept at \\((0, 2)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sketching linear graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(x = 0 \\implies y = 2\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(y = 0 \\implies x = 5\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\text{Line passes through } (0, 2) \\text{ and } (5, 0)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Line with x-intercept at \\((5, 0)\\) and y-intercept at \\((0, 2)\\).. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Line with x-intercept at \\((5, 0)\\) and y-intercept at \\((0, 2)\\).",
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
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-5, 0], [8, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -5], [0, 5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [7.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 4.7, 'y'], {fontSize: 12});\nboard.create('line', [[5, 0], [0, 2]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [5, 0], {size: 3, color: 'red', name: '(5, 0)', withLabel: true, label: {autoPosition: false, offset: [5, 10]}});\nboard.create('point', [0, 2], {size: 3, color: 'red', name: '(0, 2)', withLabel: true, label: {autoPosition: false, offset: [10, 5]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-11e-q3d",
    "topicId": "y9-11e",
    "c": "11E",
    "t": "Sketching linear graphs",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Sketch the graph of the line \\(3x + 2y = 6\\) by calculating the coordinates of the \\(x\\)- and \\(y\\)-intercepts.",
    "answer": "Line with x-intercept at \\((2, 0)\\) and y-intercept at \\((0, 3)\\).",
    "hint": "Set \\(x = 0\\) to find the \\(y\\)-intercept, and set \\(y = 0\\) to find the \\(x\\)-intercept.",
    "solution": "Line with x-intercept at \\((2, 0)\\) and y-intercept at \\((0, 3)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sketching linear graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(x = 0 \\implies y = 3\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(y = 0 \\implies x = 2\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\text{Line passes through } (0, 3) \\text{ and } (2, 0)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Line with x-intercept at \\((2, 0)\\) and y-intercept at \\((0, 3)\\).. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Line with x-intercept at \\((2, 0)\\) and y-intercept at \\((0, 3)\\).",
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
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-5, 0], [5, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -5], [0, 6]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 5.7, 'y'], {fontSize: 12});\nboard.create('line', [[2, 0], [0, 3]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [2, 0], {size: 3, color: 'red', name: '(2, 0)', withLabel: true, label: {autoPosition: false, offset: [5, 10]}});\nboard.create('point', [0, 3], {size: 3, color: 'red', name: '(0, 3)', withLabel: true, label: {autoPosition: false, offset: [10, 5]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-11e-q3e",
    "topicId": "y9-11e",
    "c": "11E",
    "t": "Sketching linear graphs",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Sketch the graph of the line \\(x + 3y = 3\\) by calculating the coordinates of the \\(x\\)- and \\(y\\)-intercepts.",
    "answer": "Line with x-intercept at \\((3, 0)\\) and y-intercept at \\((0, 1)\\).",
    "hint": "Set \\(x = 0\\) to find the \\(y\\)-intercept, and set \\(y = 0\\) to find the \\(x\\)-intercept.",
    "solution": "Line with x-intercept at \\((3, 0)\\) and y-intercept at \\((0, 1)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sketching linear graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(x = 0 \\implies y = 1\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(y = 0 \\implies x = 3\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\text{Line passes through } (0, 1) \\text{ and } (3, 0)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Line with x-intercept at \\((3, 0)\\) and y-intercept at \\((0, 1)\\).. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Line with x-intercept at \\((3, 0)\\) and y-intercept at \\((0, 1)\\).",
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
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-5, 0], [6, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -5], [0, 5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [5.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 4.7, 'y'], {fontSize: 12});\nboard.create('line', [[3, 0], [0, 1]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [3, 0], {size: 3, color: 'red', name: '(3, 0)', withLabel: true, label: {autoPosition: false, offset: [5, 10]}});\nboard.create('point', [0, 1], {size: 3, color: 'red', name: '(0, 1)', withLabel: true, label: {autoPosition: false, offset: [10, 5]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-11e-q3f",
    "topicId": "y9-11e",
    "c": "11E",
    "t": "Sketching linear graphs",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Sketch the graph of the line \\(2x + y = 4\\) by calculating the coordinates of the \\(x\\)- and \\(y\\)-intercepts.",
    "answer": "Line with x-intercept at \\((2, 0)\\) and y-intercept at \\((0, 4)\\).",
    "hint": "Set \\(x = 0\\) to find the \\(y\\)-intercept, and set \\(y = 0\\) to find the \\(x\\)-intercept.",
    "solution": "Line with x-intercept at \\((2, 0)\\) and y-intercept at \\((0, 4)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sketching linear graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(x = 0 \\implies y = 4\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(y = 0 \\implies x = 2\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\text{Line passes through } (0, 4) \\text{ and } (2, 0)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Line with x-intercept at \\((2, 0)\\) and y-intercept at \\((0, 4)\\).. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Line with x-intercept at \\((2, 0)\\) and y-intercept at \\((0, 4)\\).",
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
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-5, 0], [5, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -5], [0, 7]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 6.7, 'y'], {fontSize: 12});\nboard.create('line', [[2, 0], [0, 4]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [2, 0], {size: 3, color: 'red', name: '(2, 0)', withLabel: true, label: {autoPosition: false, offset: [5, 10]}});\nboard.create('point', [0, 4], {size: 3, color: 'red', name: '(0, 4)', withLabel: true, label: {autoPosition: false, offset: [10, 5]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-11e-q3g",
    "topicId": "y9-11e",
    "c": "11E",
    "t": "Sketching linear graphs",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Sketch the graph of the line \\(x - y = 3\\) by calculating the coordinates of the \\(x\\)- and \\(y\\)-intercepts.",
    "answer": "Line with x-intercept at \\((3, 0)\\) and y-intercept at \\((0, -3)\\).",
    "hint": "Set \\(x = 0\\) to find the \\(y\\)-intercept, and set \\(y = 0\\) to find the \\(x\\)-intercept.",
    "solution": "Line with x-intercept at \\((3, 0)\\) and y-intercept at \\((0, -3)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sketching linear graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(x = 0 \\implies y = -3\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(y = 0 \\implies x = 3\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\text{Line passes through } (0, -3) \\text{ and } (3, 0)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Line with x-intercept at \\((3, 0)\\) and y-intercept at \\((0, -3)\\).. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Line with x-intercept at \\((3, 0)\\) and y-intercept at \\((0, -3)\\).",
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
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-5, 0], [6, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -6], [0, 5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [5.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 4.7, 'y'], {fontSize: 12});\nboard.create('line', [[3, 0], [0, -3]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [3, 0], {size: 3, color: 'red', name: '(3, 0)', withLabel: true, label: {autoPosition: false, offset: [5, 10]}});\nboard.create('point', [0, -3], {size: 3, color: 'red', name: '(0, -3)', withLabel: true, label: {autoPosition: false, offset: [10, 5]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-11e-q3h",
    "topicId": "y9-11e",
    "c": "11E",
    "t": "Sketching linear graphs",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Sketch the graph of the line \\(x - y = 2\\) by calculating the coordinates of the \\(x\\)- and \\(y\\)-intercepts.",
    "answer": "Line with x-intercept at \\((2, 0)\\) and y-intercept at \\((0, -2)\\).",
    "hint": "Set \\(x = 0\\) to find the \\(y\\)-intercept, and set \\(y = 0\\) to find the \\(x\\)-intercept.",
    "solution": "Line with x-intercept at \\((2, 0)\\) and y-intercept at \\((0, -2)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sketching linear graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(x = 0 \\implies y = -2\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(y = 0 \\implies x = 2\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\text{Line passes through } (0, -2) \\text{ and } (2, 0)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Line with x-intercept at \\((2, 0)\\) and y-intercept at \\((0, -2)\\).. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Line with x-intercept at \\((2, 0)\\) and y-intercept at \\((0, -2)\\).",
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
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-5, 0], [5, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -5], [0, 5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 4.7, 'y'], {fontSize: 12});\nboard.create('line', [[2, 0], [0, -2]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [2, 0], {size: 3, color: 'red', name: '(2, 0)', withLabel: true, label: {autoPosition: false, offset: [5, 10]}});\nboard.create('point', [0, -2], {size: 3, color: 'red', name: '(0, -2)', withLabel: true, label: {autoPosition: false, offset: [10, 5]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-11e-q3i",
    "topicId": "y9-11e",
    "c": "11E",
    "t": "Sketching linear graphs",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Sketch the graph of the line \\(4x - y = 4\\) by calculating the coordinates of the \\(x\\)- and \\(y\\)-intercepts.",
    "answer": "Line with x-intercept at \\((1, 0)\\) and y-intercept at \\((0, -4)\\).",
    "hint": "Set \\(x = 0\\) to find the \\(y\\)-intercept, and set \\(y = 0\\) to find the \\(x\\)-intercept.",
    "solution": "Line with x-intercept at \\((1, 0)\\) and y-intercept at \\((0, -4)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sketching linear graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(x = 0 \\implies y = -4\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(y = 0 \\implies x = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\text{Line passes through } (0, -4) \\text{ and } (1, 0)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Line with x-intercept at \\((1, 0)\\) and y-intercept at \\((0, -4)\\).. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Line with x-intercept at \\((1, 0)\\) and y-intercept at \\((0, -4)\\).",
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
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-5, 0], [5, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -7], [0, 5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 4.7, 'y'], {fontSize: 12});\nboard.create('line', [[1, 0], [0, -4]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [1, 0], {size: 3, color: 'red', name: '(1, 0)', withLabel: true, label: {autoPosition: false, offset: [5, 10]}});\nboard.create('point', [0, -4], {size: 3, color: 'red', name: '(0, -4)', withLabel: true, label: {autoPosition: false, offset: [10, 5]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-11e-q3j",
    "topicId": "y9-11e",
    "c": "11E",
    "t": "Sketching linear graphs",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Sketch the graph of the line \\(x - 3y = 6\\) by calculating the coordinates of the \\(x\\)- and \\(y\\)-intercepts.",
    "answer": "Line with x-intercept at \\((6, 0)\\) and y-intercept at \\((0, -2)\\).",
    "hint": "Set \\(x = 0\\) to find the \\(y\\)-intercept, and set \\(y = 0\\) to find the \\(x\\)-intercept.",
    "solution": "Line with x-intercept at \\((6, 0)\\) and y-intercept at \\((0, -2)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sketching linear graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(x = 0 \\implies y = -2\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(y = 0 \\implies x = 6\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\text{Line passes through } (0, -2) \\text{ and } (6, 0)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Line with x-intercept at \\((6, 0)\\) and y-intercept at \\((0, -2)\\).. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Line with x-intercept at \\((6, 0)\\) and y-intercept at \\((0, -2)\\).",
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
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-5, 0], [9, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -5], [0, 5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [8.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 4.7, 'y'], {fontSize: 12});\nboard.create('line', [[6, 0], [0, -2]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [6, 0], {size: 3, color: 'red', name: '(6, 0)', withLabel: true, label: {autoPosition: false, offset: [5, 10]}});\nboard.create('point', [0, -2], {size: 3, color: 'red', name: '(0, -2)', withLabel: true, label: {autoPosition: false, offset: [10, 5]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-11e-q3k",
    "topicId": "y9-11e",
    "c": "11E",
    "t": "Sketching linear graphs",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Sketch the graph of the line \\(3x - 2y = 6\\) by calculating the coordinates of the \\(x\\)- and \\(y\\)-intercepts.",
    "answer": "Line with x-intercept at \\((2, 0)\\) and y-intercept at \\((0, -3)\\).",
    "hint": "Set \\(x = 0\\) to find the \\(y\\)-intercept, and set \\(y = 0\\) to find the \\(x\\)-intercept.",
    "solution": "Line with x-intercept at \\((2, 0)\\) and y-intercept at \\((0, -3)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sketching linear graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(x = 0 \\implies y = -3\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(y = 0 \\implies x = 2\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\text{Line passes through } (0, -3) \\text{ and } (2, 0)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Line with x-intercept at \\((2, 0)\\) and y-intercept at \\((0, -3)\\).. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Line with x-intercept at \\((2, 0)\\) and y-intercept at \\((0, -3)\\).",
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
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-5, 0], [5, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -6], [0, 5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 4.7, 'y'], {fontSize: 12});\nboard.create('line', [[2, 0], [0, -3]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [2, 0], {size: 3, color: 'red', name: '(2, 0)', withLabel: true, label: {autoPosition: false, offset: [5, 10]}});\nboard.create('point', [0, -3], {size: 3, color: 'red', name: '(0, -3)', withLabel: true, label: {autoPosition: false, offset: [10, 5]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-11e-q3l",
    "topicId": "y9-11e",
    "c": "11E",
    "t": "Sketching linear graphs",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Sketch the graph of the line \\(2x - 3y = 6\\) by calculating the coordinates of the \\(x\\)- and \\(y\\)-intercepts.",
    "answer": "Line with x-intercept at \\((3, 0)\\) and y-intercept at \\((0, -2)\\).",
    "hint": "Set \\(x = 0\\) to find the \\(y\\)-intercept, and set \\(y = 0\\) to find the \\(x\\)-intercept.",
    "solution": "Line with x-intercept at \\((3, 0)\\) and y-intercept at \\((0, -2)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sketching linear graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(x = 0 \\implies y = -2\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(y = 0 \\implies x = 3\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\text{Line passes through } (0, -2) \\text{ and } (3, 0)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Line with x-intercept at \\((3, 0)\\) and y-intercept at \\((0, -2)\\).. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Line with x-intercept at \\((3, 0)\\) and y-intercept at \\((0, -2)\\).",
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
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-5, 0], [6, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -5], [0, 5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [5.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 4.7, 'y'], {fontSize: 12});\nboard.create('line', [[3, 0], [0, -2]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [3, 0], {size: 3, color: 'red', name: '(3, 0)', withLabel: true, label: {autoPosition: false, offset: [5, 10]}});\nboard.create('point', [0, -2], {size: 3, color: 'red', name: '(0, -2)', withLabel: true, label: {autoPosition: false, offset: [10, 5]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-11e-q3m",
    "topicId": "y9-11e",
    "c": "11E",
    "t": "Sketching linear graphs",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Sketch the graph of the line \\(2y - x = 6\\) by calculating the coordinates of the \\(x\\)- and \\(y\\)-intercepts.",
    "answer": "Line with x-intercept at \\((-6, 0)\\) and y-intercept at \\((0, 3)\\).",
    "hint": "Set \\(x = 0\\) to find the \\(y\\)-intercept, and set \\(y = 0\\) to find the \\(x\\)-intercept.",
    "solution": "Line with x-intercept at \\((-6, 0)\\) and y-intercept at \\((0, 3)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sketching linear graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(x = 0 \\implies y = 3\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(y = 0 \\implies x = -6\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\text{Line passes through } (0, 3) \\text{ and } (-6, 0)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Line with x-intercept at \\((-6, 0)\\) and y-intercept at \\((0, 3)\\).. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Line with x-intercept at \\((-6, 0)\\) and y-intercept at \\((0, 3)\\).",
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
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-9, 0], [5, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -5], [0, 6]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 5.7, 'y'], {fontSize: 12});\nboard.create('line', [[-6, 0], [0, 3]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [-6, 0], {size: 3, color: 'red', name: '(-6, 0)', withLabel: true, label: {autoPosition: false, offset: [5, 10]}});\nboard.create('point', [0, 3], {size: 3, color: 'red', name: '(0, 3)', withLabel: true, label: {autoPosition: false, offset: [10, 5]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-11e-q3n",
    "topicId": "y9-11e",
    "c": "11E",
    "t": "Sketching linear graphs",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Sketch the graph of the line \\(3y - 2x = 6\\) by calculating the coordinates of the \\(x\\)- and \\(y\\)-intercepts.",
    "answer": "Line with x-intercept at \\((-3, 0)\\) and y-intercept at \\((0, 2)\\).",
    "hint": "Set \\(x = 0\\) to find the \\(y\\)-intercept, and set \\(y = 0\\) to find the \\(x\\)-intercept.",
    "solution": "Line with x-intercept at \\((-3, 0)\\) and y-intercept at \\((0, 2)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sketching linear graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(x = 0 \\implies y = 2\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(y = 0 \\implies x = -3\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\text{Line passes through } (0, 2) \\text{ and } (-3, 0)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Line with x-intercept at \\((-3, 0)\\) and y-intercept at \\((0, 2)\\).. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Line with x-intercept at \\((-3, 0)\\) and y-intercept at \\((0, 2)\\).",
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
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-6, 0], [5, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -5], [0, 5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 4.7, 'y'], {fontSize: 12});\nboard.create('line', [[-3, 0], [0, 2]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [-3, 0], {size: 3, color: 'red', name: '(-3, 0)', withLabel: true, label: {autoPosition: false, offset: [5, 10]}});\nboard.create('point', [0, 2], {size: 3, color: 'red', name: '(0, 2)', withLabel: true, label: {autoPosition: false, offset: [10, 5]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-11e-q3o",
    "topicId": "y9-11e",
    "c": "11E",
    "t": "Sketching linear graphs",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Sketch the graph of the line \\(\\frac{x}{3} + \\frac{y}{2} = 1\\) by calculating the coordinates of the \\(x\\)- and \\(y\\)-intercepts.",
    "answer": "Line with x-intercept at \\((3, 0)\\) and y-intercept at \\((0, 2)\\).",
    "hint": "Set \\(x = 0\\) to find the \\(y\\)-intercept, and set \\(y = 0\\) to find the \\(x\\)-intercept.",
    "solution": "Line with x-intercept at \\((3, 0)\\) and y-intercept at \\((0, 2)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sketching linear graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(x = 0 \\implies y = 2\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(y = 0 \\implies x = 3\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\text{Line passes through } (0, 2) \\text{ and } (3, 0)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Line with x-intercept at \\((3, 0)\\) and y-intercept at \\((0, 2)\\).. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Line with x-intercept at \\((3, 0)\\) and y-intercept at \\((0, 2)\\).",
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
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-5, 0], [6, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -5], [0, 5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [5.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 4.7, 'y'], {fontSize: 12});\nboard.create('line', [[3, 0], [0, 2]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [3, 0], {size: 3, color: 'red', name: '(3, 0)', withLabel: true, label: {autoPosition: false, offset: [5, 10]}});\nboard.create('point', [0, 2], {size: 3, color: 'red', name: '(0, 2)', withLabel: true, label: {autoPosition: false, offset: [10, 5]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-11e-q3p",
    "topicId": "y9-11e",
    "c": "11E",
    "t": "Sketching linear graphs",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Sketch the graph of the line \\(\\frac{x}{2} - \\frac{y}{5} = 1\\) by calculating the coordinates of the \\(x\\)- and \\(y\\)-intercepts.",
    "answer": "Line with x-intercept at \\((2, 0)\\) and y-intercept at \\((0, -5)\\).",
    "hint": "Set \\(x = 0\\) to find the \\(y\\)-intercept, and set \\(y = 0\\) to find the \\(x\\)-intercept.",
    "solution": "Line with x-intercept at \\((2, 0)\\) and y-intercept at \\((0, -5)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sketching linear graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(x = 0 \\implies y = -5\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(y = 0 \\implies x = 2\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\text{Line passes through } (0, -5) \\text{ and } (2, 0)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Line with x-intercept at \\((2, 0)\\) and y-intercept at \\((0, -5)\\).. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Line with x-intercept at \\((2, 0)\\) and y-intercept at \\((0, -5)\\).",
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
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-5, 0], [5, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -8], [0, 5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 4.7, 'y'], {fontSize: 12});\nboard.create('line', [[2, 0], [0, -5]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [2, 0], {size: 3, color: 'red', name: '(2, 0)', withLabel: true, label: {autoPosition: false, offset: [5, 10]}});\nboard.create('point', [0, -5], {size: 3, color: 'red', name: '(0, -5)', withLabel: true, label: {autoPosition: false, offset: [10, 5]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-11e-q3q",
    "topicId": "y9-11e",
    "c": "11E",
    "t": "Sketching linear graphs",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Sketch the graph of the line \\(\\frac{3x}{4} - \\frac{2y}{3} = 2\\) by calculating the coordinates of the \\(x\\)- and \\(y\\)-intercepts.",
    "answer": "Line with x-intercept at \\((2.7, 0)\\) and y-intercept at \\((0, -3)\\).",
    "hint": "Set \\(x = 0\\) to find the \\(y\\)-intercept, and set \\(y = 0\\) to find the \\(x\\)-intercept.",
    "solution": "Line with x-intercept at \\((2.7, 0)\\) and y-intercept at \\((0, -3)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sketching linear graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(x = 0 \\implies y = -3\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(y = 0 \\implies x = 2.7\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\text{Line passes through } (0, -3) \\text{ and } (2.7, 0)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Line with x-intercept at \\((2.7, 0)\\) and y-intercept at \\((0, -3)\\).. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Line with x-intercept at \\((2.7, 0)\\) and y-intercept at \\((0, -3)\\).",
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
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-5, 0], [5.666666666666666, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -6], [0, 5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [5.366666666666666, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 4.7, 'y'], {fontSize: 12});\nboard.create('line', [[2.6666666666666665, 0], [0, -3]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [2.6666666666666665, 0], {size: 3, color: 'red', name: '(2.7, 0)', withLabel: true, label: {autoPosition: false, offset: [5, 10]}});\nboard.create('point', [0, -3], {size: 3, color: 'red', name: '(0, -3)', withLabel: true, label: {autoPosition: false, offset: [10, 5]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-11e-q3r",
    "topicId": "y9-11e",
    "c": "11E",
    "t": "Sketching linear graphs",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Sketch the graph of the line \\(\\frac{x}{5} + \\frac{3y}{2} = 3\\) by calculating the coordinates of the \\(x\\)- and \\(y\\)-intercepts.",
    "answer": "Line with x-intercept at \\((15, 0)\\) and y-intercept at \\((0, 2)\\).",
    "hint": "Set \\(x = 0\\) to find the \\(y\\)-intercept, and set \\(y = 0\\) to find the \\(x\\)-intercept.",
    "solution": "Line with x-intercept at \\((15, 0)\\) and y-intercept at \\((0, 2)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sketching linear graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(x = 0 \\implies y = 2\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(y = 0 \\implies x = 15\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\text{Line passes through } (0, 2) \\text{ and } (15, 0)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Line with x-intercept at \\((15, 0)\\) and y-intercept at \\((0, 2)\\).. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Line with x-intercept at \\((15, 0)\\) and y-intercept at \\((0, 2)\\).",
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
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-5, 0], [18, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -5], [0, 5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [17.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 4.7, 'y'], {fontSize: 12});\nboard.create('line', [[15, 0], [0, 2]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [15, 0], {size: 3, color: 'red', name: '(15, 0)', withLabel: true, label: {autoPosition: false, offset: [5, 10]}});\nboard.create('point', [0, 2], {size: 3, color: 'red', name: '(0, 2)', withLabel: true, label: {autoPosition: false, offset: [10, 5]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-11e-q4a",
    "topicId": "y9-11e",
    "c": "11E",
    "t": "Sketching linear graphs",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Sketch the graph of the line \\(y = 4\\).",
    "answer": "Horizontal line at y = 4.",
    "hint": "Rearrange the equation if needed. Remember that \\(y = k\\) is a horizontal line and \\(x = k\\) is a vertical line.",
    "solution": "Horizontal line at y = 4.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sketching linear graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(y = 4\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(\\text{Line passes through } (0, 4)\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "Horizontal line at y = 4.",
        "graphData": null
      },
      {
        "explanation": "Final answer: Horizontal line at y = 4.. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Horizontal line at y = 4.",
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
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-7, 0], [7, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -7], [0, 7]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [6.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 6.7, 'y'], {fontSize: 12});\nboard.create('line', [[-10, 4], [10, 4]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [0, 4], {size: 3, color: 'red', name: '(0, 4)', withLabel: true, label: {autoPosition: false, offset: [10, 5]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-11e-q4b",
    "topicId": "y9-11e",
    "c": "11E",
    "t": "Sketching linear graphs",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Sketch the graph of the line \\(x = -2\\).",
    "answer": "Vertical line at x = -2.",
    "hint": "Rearrange the equation if needed. Remember that \\(y = k\\) is a horizontal line and \\(x = k\\) is a vertical line.",
    "solution": "Vertical line at x = -2.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sketching linear graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(x = -2\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(\\text{Line passes through } (-2, 0)\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "Vertical line at x = -2.",
        "graphData": null
      },
      {
        "explanation": "Final answer: Vertical line at x = -2.. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Vertical line at x = -2.",
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
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-7, 0], [7, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -7], [0, 7]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [6.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 6.7, 'y'], {fontSize: 12});\nboard.create('line', [[-2, -10], [-2, 10]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [-2, 0], {size: 3, color: 'red', name: '(-2, 0)', withLabel: true, label: {autoPosition: false, offset: [5, 10]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-11e-q4c",
    "topicId": "y9-11e",
    "c": "11E",
    "t": "Sketching linear graphs",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Sketch the graph of the line \\(x + 3 = 0\\).",
    "answer": "Vertical line at x = -3.",
    "hint": "Rearrange the equation if needed. Remember that \\(y = k\\) is a horizontal line and \\(x = k\\) is a vertical line.",
    "solution": "Vertical line at x = -3.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sketching linear graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(x = -3\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(\\text{Line passes through } (-3, 0)\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "Vertical line at x = -3.",
        "graphData": null
      },
      {
        "explanation": "Final answer: Vertical line at x = -3.. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Vertical line at x = -3.",
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
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-7, 0], [7, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -7], [0, 7]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [6.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 6.7, 'y'], {fontSize: 12});\nboard.create('line', [[-3, -10], [-3, 10]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [-3, 0], {size: 3, color: 'red', name: '(-3, 0)', withLabel: true, label: {autoPosition: false, offset: [5, 10]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-11e-q4d",
    "topicId": "y9-11e",
    "c": "11E",
    "t": "Sketching linear graphs",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Sketch the graph of the line \\(y - 4 = 0\\).",
    "answer": "Horizontal line at y = 4.",
    "hint": "Rearrange the equation if needed. Remember that \\(y = k\\) is a horizontal line and \\(x = k\\) is a vertical line.",
    "solution": "Horizontal line at y = 4.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sketching linear graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(y = 4\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(\\text{Line passes through } (0, 4)\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "Horizontal line at y = 4.",
        "graphData": null
      },
      {
        "explanation": "Final answer: Horizontal line at y = 4.. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Horizontal line at y = 4.",
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
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-7, 0], [7, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -7], [0, 7]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [6.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 6.7, 'y'], {fontSize: 12});\nboard.create('line', [[-10, 4], [10, 4]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [0, 4], {size: 3, color: 'red', name: '(0, 4)', withLabel: true, label: {autoPosition: false, offset: [10, 5]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-11e-q4e",
    "topicId": "y9-11e",
    "c": "11E",
    "t": "Sketching linear graphs",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Sketch the graph of the line \\(5 - y = 0\\).",
    "answer": "Horizontal line at y = 5.",
    "hint": "Rearrange the equation if needed. Remember that \\(y = k\\) is a horizontal line and \\(x = k\\) is a vertical line.",
    "solution": "Horizontal line at y = 5.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sketching linear graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(y = 5\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(\\text{Line passes through } (0, 5)\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "Horizontal line at y = 5.",
        "graphData": null
      },
      {
        "explanation": "Final answer: Horizontal line at y = 5.. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Horizontal line at y = 5.",
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
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-7, 0], [7, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -7], [0, 8]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [6.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 7.7, 'y'], {fontSize: 12});\nboard.create('line', [[-10, 5], [10, 5]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [0, 5], {size: 3, color: 'red', name: '(0, 5)', withLabel: true, label: {autoPosition: false, offset: [10, 5]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-11e-q4f",
    "topicId": "y9-11e",
    "c": "11E",
    "t": "Sketching linear graphs",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Sketch the graph of the line \\(6 + x = 0\\).",
    "answer": "Vertical line at x = -6.",
    "hint": "Rearrange the equation if needed. Remember that \\(y = k\\) is a horizontal line and \\(x = k\\) is a vertical line.",
    "solution": "Vertical line at x = -6.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sketching linear graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(x = -6\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(\\text{Line passes through } (-6, 0)\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "Vertical line at x = -6.",
        "graphData": null
      },
      {
        "explanation": "Final answer: Vertical line at x = -6.. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Vertical line at x = -6.",
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
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-9, 0], [7, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -7], [0, 7]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [6.7, -0.5, 'x'], {fontSize: 12});\nboard.create('text', [-0.5, 6.7, 'y'], {fontSize: 12});\nboard.create('line', [[-6, -10], [-6, 10]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [-6, 0], {size: 3, color: 'red', name: '(-6, 0)', withLabel: true, label: {autoPosition: false, offset: [5, 10]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  }
];
