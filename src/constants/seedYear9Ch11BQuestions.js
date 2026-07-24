export const Y9_CH11B_QUESTIONS = [
  {
    "id": "y9-11b-q1a",
    "topicId": "y9-11b",
    "c": "11B",
    "t": "The midpoint of an interval",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the coordinates of the midpoint of the interval \\(AB\\) with endpoints \\((1, 4)\\) and \\((9, 4)\\).",
    "opts": [
      "\\((4, 5)\\)",
      "\\((5, 3)\\)",
      "\\((6, 4)\\)",
      "\\((5, 4)\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "Use the midpoint formula: average the \\(x\\)-coordinates and average the \\(y\\)-coordinates.",
    "solution": "Using the midpoint formula:\n\\(M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)\\)\nHere, \\(M = \\left(\\frac{1 + 9}{2}, \\frac{4 + 4}{2}\\right) = \\left(\\frac{10}{2}, \\frac{8}{2}\\right) = (5, 4)\\).",
    "solutionSteps": [
      {
        "explanation": "Step 1: Identify the coordinates of the given endpoints.",
        "workingOut": "$$ A(1, 4), \\; B(9, 4) $$",
        "graphData": null
      },
      {
        "explanation": "Step 2: State the midpoint formula.",
        "workingOut": "\\( M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right) \\)",
        "graphData": null
      },
      {
        "explanation": "Step 3: Substitute the coordinates and calculate.",
        "workingOut": "$$ \\begin{aligned} x_M &= \\frac{1 + 9}{2} = 5 \\\\\\\\ y_M &= \\frac{4 + 4}{2} = 4 \\end{aligned} $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: State the final coordinates of the midpoint \\(M\\).",
        "workingOut": "$$ M(5, 4) $$",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              -1,
              6,
              11,
              -1
            ],
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-1, 0], [11, 0]], {strokeColor: 'black'});\nboard.create('arrow', [[0, 2], [0, 6]], {strokeColor: 'black'});\nboard.create('point', [1, 4], {name:'A(1, 4)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [9, 4], {name:'B(9, 4)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [5, 4], {name:'M(5, 4)', size:3, color:'green', label:{offset:[5,10]}});\nboard.create('segment', [[1, 4], [9, 4]], {strokeColor: 'blue', dash: 2});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\((4, 5)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((5, 3)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((6, 4)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((5, 4)\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y9-11b-q1b",
    "topicId": "y9-11b",
    "c": "11B",
    "t": "The midpoint of an interval",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the coordinates of the midpoint of the interval \\(AB\\) with endpoints \\((6, 5)\\) and \\((-2, 5)\\).",
    "opts": [
      "\\((5, 2)\\)",
      "\\((3, 5)\\)",
      "\\((2, 5)\\)",
      "\\((2, 4)\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Apply the midpoint formula: \\(M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)\\).",
    "solution": "Using the midpoint formula:\n\\(M = \\left(\\frac{6 + (-2)}{2}, \\frac{5 + 5}{2}\\right) = \\left(\\frac{4}{2}, \\frac{10}{2}\\right) = (2, 5)\\).",
    "solutionSteps": [
      {
        "explanation": "Step 1: Identify the coordinates of the given endpoints.",
        "workingOut": "$$ A(6, 5), \\; B(-2, 5) $$",
        "graphData": null
      },
      {
        "explanation": "Step 2: State the midpoint formula.",
        "workingOut": "\\( M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right) \\)",
        "graphData": null
      },
      {
        "explanation": "Step 3: Substitute the coordinates and calculate.",
        "workingOut": "$$ \\begin{aligned} x_M &= \\frac{6 + -2}{2} = 2 \\\\\\\\ y_M &= \\frac{5 + 5}{2} = 5 \\end{aligned} $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: State the final coordinates of the midpoint \\(M\\).",
        "workingOut": "$$ M(2, 5) $$",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              -4,
              7,
              8,
              -1
            ],
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-4, 0], [8, 0]], {strokeColor: 'black'});\nboard.create('arrow', [[0, 3], [0, 7]], {strokeColor: 'black'});\nboard.create('point', [6, 5], {name:'A(6, 5)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [-2, 5], {name:'B(-2, 5)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [2, 5], {name:'M(2, 5)', size:3, color:'green', label:{offset:[5,10]}});\nboard.create('segment', [[6, 5], [-2, 5]], {strokeColor: 'blue', dash: 2});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\((5, 2)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((3, 5)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((2, 5)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((2, 4)\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y9-11b-q1c",
    "topicId": "y9-11b",
    "c": "11B",
    "t": "The midpoint of an interval",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the coordinates of the midpoint of the interval \\(AB\\) with endpoints \\((-3, 1)\\) and \\((-3, 11)\\).",
    "opts": [
      "\\((-2, 6)\\)",
      "\\((-3, 5)\\)",
      "\\((-3, 6)\\)",
      "\\((6, -3)\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Observe that the \\(x\\)-coordinate remains \\(-3\\). Average the \\(y\\)-coordinates.",
    "solution": "Using the midpoint formula:\n\\(M = \\left(\\frac{-3 + (-3)}{2}, \\frac{1 + 11}{2}\\right) = \\left(\\frac{-6}{2}, \\frac{12}{2}\\right) = (-3, 6)\\).",
    "solutionSteps": [
      {
        "explanation": "Step 1: Identify the coordinates of the given endpoints.",
        "workingOut": "$$ A(-3, 1), \\; B(-3, 11) $$",
        "graphData": null
      },
      {
        "explanation": "Step 2: State the midpoint formula.",
        "workingOut": "\\( M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right) \\)",
        "graphData": null
      },
      {
        "explanation": "Step 3: Substitute the coordinates and calculate.",
        "workingOut": "$$ \\begin{aligned} x_M &= \\frac{-3 + -3}{2} = -3 \\\\\\\\ y_M &= \\frac{1 + 11}{2} = 6 \\end{aligned} $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: State the final coordinates of the midpoint \\(M\\).",
        "workingOut": "$$ M(-3, 6) $$",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              -5,
              13,
              -1,
              -1
            ],
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-5, 0], [-1, 0]], {strokeColor: 'black'});\nboard.create('arrow', [[0, -1], [0, 13]], {strokeColor: 'black'});\nboard.create('point', [-3, 1], {name:'A(-3, 1)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [-3, 11], {name:'B(-3, 11)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [-3, 6], {name:'M(-3, 6)', size:3, color:'green', label:{offset:[5,10]}});\nboard.create('segment', [[-3, 1], [-3, 11]], {strokeColor: 'blue', dash: 2});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\((-2, 6)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((-3, 5)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((-3, 6)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((6, -3)\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y9-11b-q1d",
    "topicId": "y9-11b",
    "c": "11B",
    "t": "The midpoint of an interval",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the coordinates of the midpoint of the interval \\(AB\\) with endpoints \\((-4, -6)\\) and \\((-4, 9)\\).",
    "opts": [
      "\\((-3, 1.5)\\)",
      "\\((-4, 1.5)\\)",
      "\\((-4, 0.5)\\)",
      "\\((1.5, -4)\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Average the \\(x\\)-coordinates and \\(y\\)-coordinates. The \\(y\\)-coordinate will be a decimal.",
    "solution": "Using the midpoint formula:\n\\(M = \\left(\\frac{-4 + (-4)}{2}, \\frac{-6 + 9}{2}\\right) = \\left(\\frac{-8}{2}, \\frac{3}{2}\\right) = (-4, 1.5)\\).",
    "solutionSteps": [
      {
        "explanation": "Step 1: Identify the coordinates of the given endpoints.",
        "workingOut": "$$ A(-4, -6), \\; B(-4, 9) $$",
        "graphData": null
      },
      {
        "explanation": "Step 2: State the midpoint formula.",
        "workingOut": "\\( M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right) \\)",
        "graphData": null
      },
      {
        "explanation": "Step 3: Substitute the coordinates and calculate.",
        "workingOut": "$$ \\begin{aligned} x_M &= \\frac{-4 + -4}{2} = -4 \\\\\\\\ y_M &= \\frac{-6 + 9}{2} = 1.5 \\end{aligned} $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: State the final coordinates of the midpoint \\(M\\).",
        "workingOut": "$$ M(-4, 1.5) $$",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              -6,
              11,
              -2,
              -8
            ],
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-6, 0], [-2, 0]], {strokeColor: 'black'});\nboard.create('arrow', [[0, -8], [0, 11]], {strokeColor: 'black'});\nboard.create('point', [-4, -6], {name:'A(-4, -6)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [-4, 9], {name:'B(-4, 9)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [-4, 1.5], {name:'M(-4, 1.5)', size:3, color:'green', label:{offset:[5,10]}});\nboard.create('segment', [[-4, -6], [-4, 9]], {strokeColor: 'blue', dash: 2});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\((-3, 1.5)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((-4, 1.5)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((-4, 0.5)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((1.5, -4)\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y9-11b-q1e",
    "topicId": "y9-11b",
    "c": "11B",
    "t": "The midpoint of an interval",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the coordinates of the midpoint of the interval \\(AB\\) with endpoints \\((1, 2)\\) and \\((7, 10)\\).",
    "opts": [
      "\\((5, 6)\\)",
      "\\((4, 5)\\)",
      "\\((6, 4)\\)",
      "\\((4, 6)\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "Add the respective \\(x\\) and \\(y\\) coordinates, then divide by 2.",
    "solution": "Using the midpoint formula:\n\\(M = \\left(\\frac{1 + 7}{2}, \\frac{2 + 10}{2}\\right) = \\left(\\frac{8}{2}, \\frac{12}{2}\\right) = (4, 6)\\).",
    "solutionSteps": [
      {
        "explanation": "Step 1: Identify the coordinates of the given endpoints.",
        "workingOut": "$$ A(1, 2), \\; B(7, 10) $$",
        "graphData": null
      },
      {
        "explanation": "Step 2: State the midpoint formula.",
        "workingOut": "\\( M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right) \\)",
        "graphData": null
      },
      {
        "explanation": "Step 3: Substitute the coordinates and calculate.",
        "workingOut": "$$ \\begin{aligned} x_M &= \\frac{1 + 7}{2} = 4 \\\\\\\\ y_M &= \\frac{2 + 10}{2} = 6 \\end{aligned} $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: State the final coordinates of the midpoint \\(M\\).",
        "workingOut": "$$ M(4, 6) $$",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              -1,
              12,
              9,
              -1
            ],
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-1, 0], [9, 0]], {strokeColor: 'black'});\nboard.create('arrow', [[0, 0], [0, 12]], {strokeColor: 'black'});\nboard.create('point', [1, 2], {name:'A(1, 2)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [7, 10], {name:'B(7, 10)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [4, 6], {name:'M(4, 6)', size:3, color:'green', label:{offset:[5,10]}});\nboard.create('segment', [[1, 2], [7, 10]], {strokeColor: 'blue', dash: 2});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\((5, 6)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((4, 5)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((6, 4)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((4, 6)\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y9-11b-q1f",
    "topicId": "y9-11b",
    "c": "11B",
    "t": "The midpoint of an interval",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the coordinates of the midpoint of the interval \\(AB\\) with endpoints \\((4, 8)\\) and \\((7, 4)\\).",
    "opts": [
      "\\((6, 5.5)\\)",
      "\\((5.5, 5)\\)",
      "\\((6.5, 6)\\)",
      "\\((5.5, 6)\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "Use the midpoint formula. Be prepared for a decimal in the \\(x\\)-coordinate.",
    "solution": "Using the midpoint formula:\n\\(M = \\left(\\frac{4 + 7}{2}, \\frac{8 + 4}{2}\\right) = \\left(\\frac{11}{2}, \\frac{12}{2}\\right) = (5.5, 6)\\).",
    "solutionSteps": [
      {
        "explanation": "Step 1: Identify the coordinates of the given endpoints.",
        "workingOut": "$$ A(4, 8), \\; B(7, 4) $$",
        "graphData": null
      },
      {
        "explanation": "Step 2: State the midpoint formula.",
        "workingOut": "\\( M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right) \\)",
        "graphData": null
      },
      {
        "explanation": "Step 3: Substitute the coordinates and calculate.",
        "workingOut": "$$ \\begin{aligned} x_M &= \\frac{4 + 7}{2} = 5.5 \\\\\\\\ y_M &= \\frac{8 + 4}{2} = 6 \\end{aligned} $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: State the final coordinates of the midpoint \\(M\\).",
        "workingOut": "$$ M(5.5, 6) $$",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              2,
              10,
              9,
              -1
            ],
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[2, 0], [9, 0]], {strokeColor: 'black'});\nboard.create('arrow', [[0, 2], [0, 10]], {strokeColor: 'black'});\nboard.create('point', [4, 8], {name:'A(4, 8)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [7, 4], {name:'B(7, 4)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [5.5, 6], {name:'M(5.5, 6)', size:3, color:'green', label:{offset:[5,10]}});\nboard.create('segment', [[4, 8], [7, 4]], {strokeColor: 'blue', dash: 2});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\((6, 5.5)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((5.5, 5)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((6.5, 6)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((5.5, 6)\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y9-11b-q1g",
    "topicId": "y9-11b",
    "c": "11B",
    "t": "The midpoint of an interval",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the coordinates of the midpoint of the interval \\(AB\\) with endpoints \\((-3, 0)\\) and \\((2, 10)\\).",
    "opts": [
      "\\((-0.5, 4)\\)",
      "\\((5, -0.5)\\)",
      "\\((0.5, 5)\\)",
      "\\((-0.5, 5)\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "Apply the midpoint formula, watch the negative signs.",
    "solution": "Using the midpoint formula:\n\\(M = \\left(\\frac{-3 + 2}{2}, \\frac{0 + 10}{2}\\right) = \\left(\\frac{-1}{2}, \\frac{10}{2}\\right) = (-0.5, 5)\\).",
    "solutionSteps": [
      {
        "explanation": "Step 1: Identify the coordinates of the given endpoints.",
        "workingOut": "$$ A(-3, 0), \\; B(2, 10) $$",
        "graphData": null
      },
      {
        "explanation": "Step 2: State the midpoint formula.",
        "workingOut": "\\( M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right) \\)",
        "graphData": null
      },
      {
        "explanation": "Step 3: Substitute the coordinates and calculate.",
        "workingOut": "$$ \\begin{aligned} x_M &= \\frac{-3 + 2}{2} = -0.5 \\\\\\\\ y_M &= \\frac{0 + 10}{2} = 5 \\end{aligned} $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: State the final coordinates of the midpoint \\(M\\).",
        "workingOut": "$$ M(-0.5, 5) $$",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              -5,
              12,
              4,
              -2
            ],
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-5, 0], [4, 0]], {strokeColor: 'black'});\nboard.create('arrow', [[0, -2], [0, 12]], {strokeColor: 'black'});\nboard.create('point', [-3, 0], {name:'A(-3, 0)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [2, 10], {name:'B(2, 10)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [-0.5, 5], {name:'M(-0.5, 5)', size:3, color:'green', label:{offset:[5,10]}});\nboard.create('segment', [[-3, 0], [2, 10]], {strokeColor: 'blue', dash: 2});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\((-0.5, 4)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((5, -0.5)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((0.5, 5)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((-0.5, 5)\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y9-11b-q1h",
    "topicId": "y9-11b",
    "c": "11B",
    "t": "The midpoint of an interval",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the coordinates of the midpoint of the interval \\(AB\\) with endpoints \\((-1, -5)\\) and \\((7, 10)\\).",
    "opts": [
      "\\((4, 2.5)\\)",
      "\\((3, 2.5)\\)",
      "\\((2.5, 3)\\)",
      "\\((3, 1.5)\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Average both sets of coordinates.",
    "solution": "Using the midpoint formula:\n\\(M = \\left(\\frac{-1 + 7}{2}, \\frac{-5 + 10}{2}\\right) = \\left(\\frac{6}{2}, \\frac{5}{2}\\right) = (3, 2.5)\\).",
    "solutionSteps": [
      {
        "explanation": "Step 1: Identify the coordinates of the given endpoints.",
        "workingOut": "$$ A(-1, -5), \\; B(7, 10) $$",
        "graphData": null
      },
      {
        "explanation": "Step 2: State the midpoint formula.",
        "workingOut": "\\( M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right) \\)",
        "graphData": null
      },
      {
        "explanation": "Step 3: Substitute the coordinates and calculate.",
        "workingOut": "$$ \\begin{aligned} x_M &= \\frac{-1 + 7}{2} = 3 \\\\\\\\ y_M &= \\frac{-5 + 10}{2} = 2.5 \\end{aligned} $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: State the final coordinates of the midpoint \\(M\\).",
        "workingOut": "$$ M(3, 2.5) $$",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              -3,
              12,
              9,
              -7
            ],
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-3, 0], [9, 0]], {strokeColor: 'black'});\nboard.create('arrow', [[0, -7], [0, 12]], {strokeColor: 'black'});\nboard.create('point', [-1, -5], {name:'A(-1, -5)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [7, 10], {name:'B(7, 10)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [3, 2.5], {name:'M(3, 2.5)', size:3, color:'green', label:{offset:[5,10]}});\nboard.create('segment', [[-1, -5], [7, 10]], {strokeColor: 'blue', dash: 2});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\((4, 2.5)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((3, 2.5)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((2.5, 3)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((3, 1.5)\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y9-11b-q1i",
    "topicId": "y9-11b",
    "c": "11B",
    "t": "The midpoint of an interval",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the coordinates of the midpoint of the interval \\(AB\\) with endpoints \\((-2, -4)\\) and \\((2, -2)\\).",
    "opts": [
      "\\((0, -3)\\)",
      "\\((0, -4)\\)",
      "\\((1, -3)\\)",
      "\\((-3, 0)\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Average \\(x\\) and \\(y\\) coordinates, being careful with negative numbers.",
    "solution": "Using the midpoint formula:\n\\(M = \\left(\\frac{-2 + 2}{2}, \\frac{-4 + (-2)}{2}\\right) = \\left(\\frac{0}{2}, \\frac{-6}{2}\\right) = (0, -3)\\).",
    "solutionSteps": [
      {
        "explanation": "Step 1: Identify the coordinates of the given endpoints.",
        "workingOut": "$$ A(-2, -4), \\; B(2, -2) $$",
        "graphData": null
      },
      {
        "explanation": "Step 2: State the midpoint formula.",
        "workingOut": "\\( M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right) \\)",
        "graphData": null
      },
      {
        "explanation": "Step 3: Substitute the coordinates and calculate.",
        "workingOut": "$$ \\begin{aligned} x_M &= \\frac{-2 + 2}{2} = 0 \\\\\\\\ y_M &= \\frac{-4 + -2}{2} = -3 \\end{aligned} $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: State the final coordinates of the midpoint \\(M\\).",
        "workingOut": "$$ M(0, -3) $$",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              -4,
              1,
              4,
              -6
            ],
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-4, 0], [4, 0]], {strokeColor: 'black'});\nboard.create('arrow', [[0, -6], [0, 0]], {strokeColor: 'black'});\nboard.create('point', [-2, -4], {name:'A(-2, -4)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [2, -2], {name:'B(2, -2)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [0, -3], {name:'M(0, -3)', size:3, color:'green', label:{offset:[5,10]}});\nboard.create('segment', [[-2, -4], [2, -2]], {strokeColor: 'blue', dash: 2});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\((0, -3)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((0, -4)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((1, -3)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((-3, 0)\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y9-11b-q1j",
    "topicId": "y9-11b",
    "c": "11B",
    "t": "The midpoint of an interval",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the coordinates of the midpoint of the interval \\(AB\\) with endpoints \\((-5, 5)\\) and \\((5, 0)\\).",
    "opts": [
      "\\((0, 1.5)\\)",
      "\\((1, 2.5)\\)",
      "\\((0, 2.5)\\)",
      "\\((2.5, 0)\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Apply the formula: add and divide by 2.",
    "solution": "Using the midpoint formula:\n\\(M = \\left(\\frac{-5 + 5}{2}, \\frac{5 + 0}{2}\\right) = \\left(\\frac{0}{2}, \\frac{5}{2}\\right) = (0, 2.5)\\).",
    "solutionSteps": [
      {
        "explanation": "Step 1: Identify the coordinates of the given endpoints.",
        "workingOut": "$$ A(-5, 5), \\; B(5, 0) $$",
        "graphData": null
      },
      {
        "explanation": "Step 2: State the midpoint formula.",
        "workingOut": "\\( M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right) \\)",
        "graphData": null
      },
      {
        "explanation": "Step 3: Substitute the coordinates and calculate.",
        "workingOut": "$$ \\begin{aligned} x_M &= \\frac{-5 + 5}{2} = 0 \\\\\\\\ y_M &= \\frac{5 + 0}{2} = 2.5 \\end{aligned} $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: State the final coordinates of the midpoint \\(M\\).",
        "workingOut": "$$ M(0, 2.5) $$",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              -7,
              7,
              7,
              -2
            ],
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-7, 0], [7, 0]], {strokeColor: 'black'});\nboard.create('arrow', [[0, -2], [0, 7]], {strokeColor: 'black'});\nboard.create('point', [-5, 5], {name:'A(-5, 5)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [5, 0], {name:'B(5, 0)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [0, 2.5], {name:'M(0, 2.5)', size:3, color:'green', label:{offset:[5,10]}});\nboard.create('segment', [[-5, 5], [5, 0]], {strokeColor: 'blue', dash: 2});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\((0, 1.5)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((1, 2.5)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((0, 2.5)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((2.5, 0)\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y9-11b-q1k",
    "topicId": "y9-11b",
    "c": "11B",
    "t": "The midpoint of an interval",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the coordinates of the midpoint of the interval \\(AB\\) with endpoints \\((1, -2)\\) and \\((5, -6)\\).",
    "opts": [
      "\\((3, -5)\\)",
      "\\((3, -4)\\)",
      "\\((-4, 3)\\)",
      "\\((4, -4)\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Average \\(x\\) coordinates and \\(y\\) coordinates.",
    "solution": "Using the midpoint formula:\n\\(M = \\left(\\frac{1 + 5}{2}, \\frac{-2 + (-6)}{2}\\right) = \\left(\\frac{6}{2}, \\frac{-8}{2}\\right) = (3, -4)\\).",
    "solutionSteps": [
      {
        "explanation": "Step 1: Identify the coordinates of the given endpoints.",
        "workingOut": "$$ A(1, -2), \\; B(5, -6) $$",
        "graphData": null
      },
      {
        "explanation": "Step 2: State the midpoint formula.",
        "workingOut": "\\( M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right) \\)",
        "graphData": null
      },
      {
        "explanation": "Step 3: Substitute the coordinates and calculate.",
        "workingOut": "$$ \\begin{aligned} x_M &= \\frac{1 + 5}{2} = 3 \\\\\\\\ y_M &= \\frac{-2 + -6}{2} = -4 \\end{aligned} $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: State the final coordinates of the midpoint \\(M\\).",
        "workingOut": "$$ M(3, -4) $$",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              -1,
              1,
              7,
              -8
            ],
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-1, 0], [7, 0]], {strokeColor: 'black'});\nboard.create('arrow', [[0, -8], [0, 0]], {strokeColor: 'black'});\nboard.create('point', [1, -2], {name:'A(1, -2)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [5, -6], {name:'B(5, -6)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [3, -4], {name:'M(3, -4)', size:3, color:'green', label:{offset:[5,10]}});\nboard.create('segment', [[1, -2], [5, -6]], {strokeColor: 'blue', dash: 2});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\((3, -5)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((3, -4)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((-4, 3)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((4, -4)\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y9-11b-q1l",
    "topicId": "y9-11b",
    "c": "11B",
    "t": "The midpoint of an interval",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the coordinates of the midpoint of the interval \\(AB\\) with endpoints \\((-8, -5)\\) and \\((0, -3)\\).",
    "opts": [
      "\\((-4, -5)\\)",
      "\\((-4, -4)\\)",
      "\\((-3, -4)\\)",
      "\\((-5, -3)\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Use \\(M = \\left(\\frac{x_1+x_2}{2}, \\frac{y_1+y_2}{2}\\right)\\).",
    "solution": "Using the midpoint formula:\n\\(M = \\left(\\frac{-8 + 0}{2}, \\frac{-5 + (-3)}{2}\\right) = \\left(\\frac{-8}{2}, \\frac{-8}{2}\\right) = (-4, -4)\\).",
    "solutionSteps": [
      {
        "explanation": "Step 1: Identify the coordinates of the given endpoints.",
        "workingOut": "$$ A(-8, -5), \\; B(0, -3) $$",
        "graphData": null
      },
      {
        "explanation": "Step 2: State the midpoint formula.",
        "workingOut": "\\( M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right) \\)",
        "graphData": null
      },
      {
        "explanation": "Step 3: Substitute the coordinates and calculate.",
        "workingOut": "$$ \\begin{aligned} x_M &= \\frac{-8 + 0}{2} = -4 \\\\\\\\ y_M &= \\frac{-5 + -3}{2} = -4 \\end{aligned} $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: State the final coordinates of the midpoint \\(M\\).",
        "workingOut": "$$ M(-4, -4) $$",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              -10,
              1,
              2,
              -7
            ],
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-10, 0], [2, 0]], {strokeColor: 'black'});\nboard.create('arrow', [[0, -7], [0, -1]], {strokeColor: 'black'});\nboard.create('point', [-8, -5], {name:'A(-8, -5)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [0, -3], {name:'B(0, -3)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [-4, -4], {name:'M(-4, -4)', size:3, color:'green', label:{offset:[5,10]}});\nboard.create('segment', [[-8, -5], [0, -3]], {strokeColor: 'blue', dash: 2});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\((-4, -5)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((-4, -4)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((-3, -4)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((-5, -3)\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y9-11b-q2a",
    "topicId": "y9-11b",
    "c": "11B",
    "t": "The midpoint of an interval",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "The point \\(M\\) is the midpoint of the interval \\(AB\\). Find the coordinates of \\(B\\) given that \\(A(2, 5)\\) and \\(M(9, 5)\\).",
    "opts": [
      "\\((5, 16)\\)",
      "\\((17, 5)\\)",
      "\\((16, 5)\\)",
      "\\((16, 4)\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Use the rearranged midpoint formula: \\(B = 2M - A\\).",
    "solution": "Since \\(M\\) is the midpoint of \\(AB\\), we have:\n\\(x_M = \\frac{x_A + x_B}{2} \\implies x_B = 2x_M - x_A\\)\n\\(y_M = \\frac{y_A + y_B}{2} \\implies y_B = 2y_M - y_A\\)\nSubstituting the values:\n\\(x_B = 2(9) - 2 = 18 - 2 = 16\\)\n\\(y_B = 2(5) - 5 = 10 - 5 = 5\\)\nSo, \\(B\\) has coordinates \\((16, 5)\\).",
    "solutionSteps": [
      {
        "explanation": "Step 1: Identify the coordinates of the known endpoint and the midpoint.",
        "workingOut": "$$ A(2, 5), \\; M(9, 5) $$",
        "graphData": null
      },
      {
        "explanation": "Step 2: Set up equations using the midpoint formula \\( M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right) \\).",
        "workingOut": "$$ \\frac{2 + x_2}{2} = 9, \\quad \\frac{5 + y_2}{2} = 5 $$",
        "graphData": null
      },
      {
        "explanation": "Step 3: Solve for the unknown coordinates \\(x_2\\) and \\(y_2\\).",
        "workingOut": "$$ \\begin{aligned} \\frac{2 + x_2}{2} &= 9 \\implies 2 + x_2 = 18 \\implies x_2 = 16 \\\\\\\\ \\frac{5 + y_2}{2} &= 5 \\implies 5 + y_2 = 10 \\implies y_2 = 5 \\end{aligned} $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: State the final coordinates of the unknown endpoint \\(B\\).",
        "workingOut": "$$ B(16, 5) $$",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              0,
              7,
              18,
              -1
            ],
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[0, 0], [18, 0]], {strokeColor: 'black'});\nboard.create('arrow', [[0, 3], [0, 7]], {strokeColor: 'black'});\nboard.create('point', [2, 5], {name:'A(2, 5)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [9, 5], {name:'M(9, 5)', size:3, color:'green', label:{offset:[5,10]}});\nboard.create('point', [16, 5], {name:'B(16, 5)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('segment', [[2, 5], [16, 5]], {strokeColor: 'blue', dash: 2});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\((5, 16)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((17, 5)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((16, 5)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((16, 4)\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y9-11b-q2b",
    "topicId": "y9-11b",
    "c": "11B",
    "t": "The midpoint of an interval",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "The point \\(M\\) is the midpoint of the interval \\(AB\\). Find the coordinates of \\(B\\) given that \\(A(3, 4)\\) and \\(M(-8, 4)\\).",
    "opts": [
      "\\((-19, 3)\\)",
      "\\((-19, 4)\\)",
      "\\((4, -19)\\)",
      "\\((-18, 4)\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Multiply \\(M\\)'s coordinates by 2 and subtract \\(A\\)'s coordinates.",
    "solution": "Using the formula \\(B = 2M - A\\):\n\\(x_B = 2(-8) - 3 = -16 - 3 = -19\\)\n\\(y_B = 2(4) - 4 = 8 - 4 = 4\\)\nSo, \\(B\\) has coordinates \\((-19, 4)\\).",
    "solutionSteps": [
      {
        "explanation": "Step 1: Identify the coordinates of the known endpoint and the midpoint.",
        "workingOut": "$$ A(3, 4), \\; M(-8, 4) $$",
        "graphData": null
      },
      {
        "explanation": "Step 2: Set up equations using the midpoint formula \\( M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right) \\).",
        "workingOut": "$$ \\frac{3 + x_2}{2} = -8, \\quad \\frac{4 + y_2}{2} = 4 $$",
        "graphData": null
      },
      {
        "explanation": "Step 3: Solve for the unknown coordinates \\(x_2\\) and \\(y_2\\).",
        "workingOut": "$$ \\begin{aligned} \\frac{3 + x_2}{2} &= -8 \\implies 3 + x_2 = -16 \\implies x_2 = -19 \\\\\\\\ \\frac{4 + y_2}{2} &= 4 \\implies 4 + y_2 = 8 \\implies y_2 = 4 \\end{aligned} $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: State the final coordinates of the unknown endpoint \\(B\\).",
        "workingOut": "$$ B(-19, 4) $$",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              -21,
              6,
              5,
              -1
            ],
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-21, 0], [5, 0]], {strokeColor: 'black'});\nboard.create('arrow', [[0, 2], [0, 6]], {strokeColor: 'black'});\nboard.create('point', [3, 4], {name:'A(3, 4)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [-8, 4], {name:'M(-8, 4)', size:3, color:'green', label:{offset:[5,10]}});\nboard.create('point', [-19, 4], {name:'B(-19, 4)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('segment', [[3, 4], [-19, 4]], {strokeColor: 'blue', dash: 2});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\((-19, 3)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((-19, 4)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((4, -19)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((-18, 4)\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y9-11b-q2c",
    "topicId": "y9-11b",
    "c": "11B",
    "t": "The midpoint of an interval",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "The point \\(M\\) is the midpoint of the interval \\(AB\\). Find the coordinates of \\(B\\) given that \\(A(-2, 5)\\) and \\(M(-4, 3)\\).",
    "opts": [
      "\\((-6, 1)\\)",
      "\\((-5, 1)\\)",
      "\\((1, -6)\\)",
      "\\((-6, 0)\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Use \\(x_B = 2x_M - x_A\\) and \\(y_B = 2y_M - y_A\\). Be careful with double negatives.",
    "solution": "Using \\(B = 2M - A\\):\n\\(x_B = 2(-4) - (-2) = -8 + 2 = -6\\)\n\\(y_B = 2(3) - 5 = 6 - 5 = 1\\)\nSo, \\(B\\) has coordinates \\((-6, 1)\\).",
    "solutionSteps": [
      {
        "explanation": "Step 1: Identify the coordinates of the known endpoint and the midpoint.",
        "workingOut": "$$ A(-2, 5), \\; M(-4, 3) $$",
        "graphData": null
      },
      {
        "explanation": "Step 2: Set up equations using the midpoint formula \\( M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right) \\).",
        "workingOut": "$$ \\frac{-2 + x_2}{2} = -4, \\quad \\frac{5 + y_2}{2} = 3 $$",
        "graphData": null
      },
      {
        "explanation": "Step 3: Solve for the unknown coordinates \\(x_2\\) and \\(y_2\\).",
        "workingOut": "$$ \\begin{aligned} \\frac{-2 + x_2}{2} &= -4 \\implies -2 + x_2 = -8 \\implies x_2 = -6 \\\\\\\\ \\frac{5 + y_2}{2} &= 3 \\implies 5 + y_2 = 6 \\implies y_2 = 1 \\end{aligned} $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: State the final coordinates of the unknown endpoint \\(B\\).",
        "workingOut": "$$ B(-6, 1) $$",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              -8,
              7,
              0,
              -1
            ],
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-8, 0], [0, 0]], {strokeColor: 'black'});\nboard.create('arrow', [[0, -1], [0, 7]], {strokeColor: 'black'});\nboard.create('point', [-2, 5], {name:'A(-2, 5)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [-4, 3], {name:'M(-4, 3)', size:3, color:'green', label:{offset:[5,10]}});\nboard.create('point', [-6, 1], {name:'B(-6, 1)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('segment', [[-2, 5], [-6, 1]], {strokeColor: 'blue', dash: 2});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\((-6, 1)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((-5, 1)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((1, -6)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((-6, 0)\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y9-11b-q2d",
    "topicId": "y9-11b",
    "c": "11B",
    "t": "The midpoint of an interval",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "The point \\(M\\) is the midpoint of the interval \\(AB\\). Find the coordinates of \\(B\\) given that \\(A(3, -5)\\) and \\(M(2, 7)\\).",
    "opts": [
      "\\((19, 1)\\)",
      "\\((2, 19)\\)",
      "\\((1, 18)\\)",
      "\\((1, 19)\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "Use \\(B = 2M - A\\). Note the double negative: \\(14 - (-5) = 14 + 5\\).",
    "solution": "Using \\(B = 2M - A\\):\n\\(x_B = 2(2) - 3 = 4 - 3 = 1\\)\n\\(y_B = 2(7) - (-5) = 14 + 5 = 19\\)\nSo, \\(B\\) has coordinates \\((1, 19)\\).",
    "solutionSteps": [
      {
        "explanation": "Step 1: Identify the coordinates of the known endpoint and the midpoint.",
        "workingOut": "$$ A(3, -5), \\; M(2, 7) $$",
        "graphData": null
      },
      {
        "explanation": "Step 2: Set up equations using the midpoint formula \\( M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right) \\).",
        "workingOut": "$$ \\frac{3 + x_2}{2} = 2, \\quad \\frac{-5 + y_2}{2} = 7 $$",
        "graphData": null
      },
      {
        "explanation": "Step 3: Solve for the unknown coordinates \\(x_2\\) and \\(y_2\\).",
        "workingOut": "$$ \\begin{aligned} \\frac{3 + x_2}{2} &= 2 \\implies 3 + x_2 = 4 \\implies x_2 = 1 \\\\\\\\ \\frac{-5 + y_2}{2} &= 7 \\implies -5 + y_2 = 14 \\implies y_2 = 19 \\end{aligned} $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: State the final coordinates of the unknown endpoint \\(B\\).",
        "workingOut": "$$ B(1, 19) $$",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              -1,
              21,
              5,
              -7
            ],
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-1, 0], [5, 0]], {strokeColor: 'black'});\nboard.create('arrow', [[0, -7], [0, 21]], {strokeColor: 'black'});\nboard.create('point', [3, -5], {name:'A(3, -5)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [2, 7], {name:'M(2, 7)', size:3, color:'green', label:{offset:[5,10]}});\nboard.create('point', [1, 19], {name:'B(1, 19)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('segment', [[3, -5], [1, 19]], {strokeColor: 'blue', dash: 2});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\((19, 1)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((2, 19)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((1, 18)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((1, 19)\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y9-11b-q2e",
    "topicId": "y9-11b",
    "c": "11B",
    "t": "The midpoint of an interval",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "The point \\(M\\) is the midpoint of the interval \\(AB\\). Find the coordinates of \\(B\\) given that \\(A(4, -2)\\) and \\(M(-3, 8)\\).",
    "opts": [
      "\\((-10, 18)\\)",
      "\\((-9, 18)\\)",
      "\\((18, -10)\\)",
      "\\((-10, 17)\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Use \\(B = 2M - A\\) and double-check negative additions.",
    "solution": "Using \\(B = 2M - A\\):\n\\(x_B = 2(-3) - 4 = -6 - 4 = -10\\)\n\\(y_B = 2(8) - (-2) = 16 + 2 = 18\\)\nSo, \\(B\\) has coordinates \\((-10, 18)\\).",
    "solutionSteps": [
      {
        "explanation": "Step 1: Identify the coordinates of the known endpoint and the midpoint.",
        "workingOut": "$$ A(4, -2), \\; M(-3, 8) $$",
        "graphData": null
      },
      {
        "explanation": "Step 2: Set up equations using the midpoint formula \\( M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right) \\).",
        "workingOut": "$$ \\frac{4 + x_2}{2} = -3, \\quad \\frac{-2 + y_2}{2} = 8 $$",
        "graphData": null
      },
      {
        "explanation": "Step 3: Solve for the unknown coordinates \\(x_2\\) and \\(y_2\\).",
        "workingOut": "$$ \\begin{aligned} \\frac{4 + x_2}{2} &= -3 \\implies 4 + x_2 = -6 \\implies x_2 = -10 \\\\\\\\ \\frac{-2 + y_2}{2} &= 8 \\implies -2 + y_2 = 16 \\implies y_2 = 18 \\end{aligned} $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: State the final coordinates of the unknown endpoint \\(B\\).",
        "workingOut": "$$ B(-10, 18) $$",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              -12,
              20,
              6,
              -4
            ],
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-12, 0], [6, 0]], {strokeColor: 'black'});\nboard.create('arrow', [[0, -4], [0, 20]], {strokeColor: 'black'});\nboard.create('point', [4, -2], {name:'A(4, -2)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [-3, 8], {name:'M(-3, 8)', size:3, color:'green', label:{offset:[5,10]}});\nboard.create('point', [-10, 18], {name:'B(-10, 18)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('segment', [[4, -2], [-10, 18]], {strokeColor: 'blue', dash: 2});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\((-10, 18)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((-9, 18)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((18, -10)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((-10, 17)\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y9-11b-q2f",
    "topicId": "y9-11b",
    "c": "11B",
    "t": "The midpoint of an interval",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "The point \\(M\\) is the midpoint of the interval \\(AB\\). Find the coordinates of \\(B\\) given that \\(A(6, -5)\\) and \\(M(-3, -3)\\).",
    "opts": [
      "\\((-1, -12)\\)",
      "\\((-12, -1)\\)",
      "\\((-11, -1)\\)",
      "\\((-12, -2)\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Subtract \\(A\\) from twice \\(M\\).",
    "solution": "Using \\(B = 2M - A\\):\n\\(x_B = 2(-3) - 6 = -6 - 6 = -12\\)\n\\(y_B = 2(-3) - (-5) = -6 + 5 = -1\\)\nSo, \\(B\\) has coordinates \\((-12, -1)\\).",
    "solutionSteps": [
      {
        "explanation": "Step 1: Identify the coordinates of the known endpoint and the midpoint.",
        "workingOut": "$$ A(6, -5), \\; M(-3, -3) $$",
        "graphData": null
      },
      {
        "explanation": "Step 2: Set up equations using the midpoint formula \\( M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right) \\).",
        "workingOut": "$$ \\frac{6 + x_2}{2} = -3, \\quad \\frac{-5 + y_2}{2} = -3 $$",
        "graphData": null
      },
      {
        "explanation": "Step 3: Solve for the unknown coordinates \\(x_2\\) and \\(y_2\\).",
        "workingOut": "$$ \\begin{aligned} \\frac{6 + x_2}{2} &= -3 \\implies 6 + x_2 = -6 \\implies x_2 = -12 \\\\\\\\ \\frac{-5 + y_2}{2} &= -3 \\implies -5 + y_2 = -6 \\implies y_2 = -1 \\end{aligned} $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: State the final coordinates of the unknown endpoint \\(B\\).",
        "workingOut": "$$ B(-12, -1) $$",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              -14,
              1,
              8,
              -7
            ],
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-14, 0], [8, 0]], {strokeColor: 'black'});\nboard.create('arrow', [[0, -7], [0, 1]], {strokeColor: 'black'});\nboard.create('point', [6, -5], {name:'A(6, -5)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [-3, -3], {name:'M(-3, -3)', size:3, color:'green', label:{offset:[5,10]}});\nboard.create('point', [-12, -1], {name:'B(-12, -1)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('segment', [[6, -5], [-12, -1]], {strokeColor: 'blue', dash: 2});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\((-1, -12)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((-12, -1)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((-11, -1)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((-12, -2)\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y9-11b-q3a",
    "topicId": "y9-11b",
    "c": "11B",
    "t": "The midpoint of an interval",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Fill in the missing entries in the table below, where <em>M</em> is the midpoint of the interval <em>AB</em>.<br>\n<div class=\"my-6 overflow-x-auto rounded-xl border border-slate-200 shadow-sm\">\n  <table class=\"w-full text-sm border-collapse bg-white\">\n    <thead>\n      <tr class=\"bg-slate-50 text-slate-700 font-semibold border-b border-slate-200\">\n        <th class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">Row</th>\n        <th class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">Point \\(A\\)</th>\n        <th class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">Point \\(B\\)</th>\n        <th class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">Midpoint \\(M\\)</th>\n      </tr>\n    </thead>\n    <tbody class=\"text-slate-800\">\n      <tr class=\"border-b border-slate-200 last:border-b-0 hover:bg-slate-50/50 transition-colors\">\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0 font-medium bg-slate-50/30\"><strong>a</strong></td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">\\((2, 5)\\)</td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">\\((6, 11)\\)</td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0 font-semibold text-indigo-600\">?</td>\n      </tr>\n      <tr class=\"border-b border-slate-200 last:border-b-0 hover:bg-slate-50/50 transition-colors\">\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0 font-medium bg-slate-50/30\"><strong>b</strong></td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0 font-semibold text-indigo-600\">?</td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">\\((4, 5)\\)</td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">\\((8, 10)\\)</td>\n      </tr>\n      <tr class=\"border-b border-slate-200 last:border-b-0 hover:bg-slate-50/50 transition-colors\">\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0 font-medium bg-slate-50/30\"><strong>c</strong></td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">\\((-2, -5)\\)</td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0 font-semibold text-indigo-600\">?</td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">\\((2, -2)\\)</td>\n      </tr>\n      <tr class=\"border-b border-slate-200 last:border-b-0 hover:bg-slate-50/50 transition-colors\">\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0 font-medium bg-slate-50/30\"><strong>d</strong></td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">\\((1.5, 5.3)\\)</td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">\\((7.7, 2.2)\\)</td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0 font-semibold text-indigo-600\">?</td>\n      </tr>\n      <tr class=\"border-b border-slate-200 last:border-b-0 hover:bg-slate-50/50 transition-colors\">\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0 font-medium bg-slate-50/30\"><strong>e</strong></td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0 font-semibold text-indigo-600\">?</td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">\\((-2.5, -3.1)\\)</td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">\\((0.5, -1.5)\\)</td>\n      </tr>\n      <tr class=\"border-b border-slate-200 last:border-b-0 hover:bg-slate-50/50 transition-colors\">\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0 font-medium bg-slate-50/30\"><strong>f</strong></td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">\\((-4.8, 5)\\)</td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0 font-semibold text-indigo-600\">?</td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">\\((0, 4)\\)</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\nFind the missing midpoint \\(M\\) for row a.",
    "opts": [
      "\\((4, 7)\\)",
      "\\((4, 8)\\)",
      "\\((5, 8)\\)",
      "\\((8, 4)\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is \\((4, 8)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for The midpoint of an interval: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(M = \\left(\\frac{2+6}{2}, \\frac{5+11}{2}\\right) = (4, 8)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\((4, 8)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (4, 8). Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\((4, 8)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\((4, 7)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((4, 8)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((5, 8)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((8, 4)\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y9-11b-q3b",
    "topicId": "y9-11b",
    "c": "11B",
    "t": "The midpoint of an interval",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Fill in the missing entries in the table below, where <em>M</em> is the midpoint of the interval <em>AB</em>.<br>\n<div class=\"my-6 overflow-x-auto rounded-xl border border-slate-200 shadow-sm\">\n  <table class=\"w-full text-sm border-collapse bg-white\">\n    <thead>\n      <tr class=\"bg-slate-50 text-slate-700 font-semibold border-b border-slate-200\">\n        <th class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">Row</th>\n        <th class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">Point \\(A\\)</th>\n        <th class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">Point \\(B\\)</th>\n        <th class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">Midpoint \\(M\\)</th>\n      </tr>\n    </thead>\n    <tbody class=\"text-slate-800\">\n      <tr class=\"border-b border-slate-200 last:border-b-0 hover:bg-slate-50/50 transition-colors\">\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0 font-medium bg-slate-50/30\"><strong>a</strong></td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">\\((2, 5)\\)</td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">\\((6, 11)\\)</td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0 font-semibold text-indigo-600\">?</td>\n      </tr>\n      <tr class=\"border-b border-slate-200 last:border-b-0 hover:bg-slate-50/50 transition-colors\">\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0 font-medium bg-slate-50/30\"><strong>b</strong></td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0 font-semibold text-indigo-600\">?</td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">\\((4, 5)\\)</td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">\\((8, 10)\\)</td>\n      </tr>\n      <tr class=\"border-b border-slate-200 last:border-b-0 hover:bg-slate-50/50 transition-colors\">\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0 font-medium bg-slate-50/30\"><strong>c</strong></td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">\\((-2, -5)\\)</td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0 font-semibold text-indigo-600\">?</td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">\\((2, -2)\\)</td>\n      </tr>\n      <tr class=\"border-b border-slate-200 last:border-b-0 hover:bg-slate-50/50 transition-colors\">\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0 font-medium bg-slate-50/30\"><strong>d</strong></td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">\\((1.5, 5.3)\\)</td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">\\((7.7, 2.2)\\)</td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0 font-semibold text-indigo-600\">?</td>\n      </tr>\n      <tr class=\"border-b border-slate-200 last:border-b-0 hover:bg-slate-50/50 transition-colors\">\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0 font-medium bg-slate-50/30\"><strong>e</strong></td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0 font-semibold text-indigo-600\">?</td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">\\((-2.5, -3.1)\\)</td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">\\((0.5, -1.5)\\)</td>\n      </tr>\n      <tr class=\"border-b border-slate-200 last:border-b-0 hover:bg-slate-50/50 transition-colors\">\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0 font-medium bg-slate-50/30\"><strong>f</strong></td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">\\((-4.8, 5)\\)</td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0 font-semibold text-indigo-600\">?</td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">\\((0, 4)\\)</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\nFind the missing point \\(A\\) for row b.",
    "opts": [
      "\\((12, 14)\\)",
      "\\((12, 15)\\)",
      "\\((13, 15)\\)",
      "\\((15, 12)\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is \\((12, 15)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for The midpoint of an interval: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(A = 2(8, 10) - (4, 5) = (16, 20) - (4, 5) = (12, 15)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\((12, 15)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (12, 15). Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\((12, 15)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\((12, 14)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((12, 15)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((13, 15)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((15, 12)\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y9-11b-q3c",
    "topicId": "y9-11b",
    "c": "11B",
    "t": "The midpoint of an interval",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Fill in the missing entries in the table below, where <em>M</em> is the midpoint of the interval <em>AB</em>.<br>\n<div class=\"my-6 overflow-x-auto rounded-xl border border-slate-200 shadow-sm\">\n  <table class=\"w-full text-sm border-collapse bg-white\">\n    <thead>\n      <tr class=\"bg-slate-50 text-slate-700 font-semibold border-b border-slate-200\">\n        <th class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">Row</th>\n        <th class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">Point \\(A\\)</th>\n        <th class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">Point \\(B\\)</th>\n        <th class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">Midpoint \\(M\\)</th>\n      </tr>\n    </thead>\n    <tbody class=\"text-slate-800\">\n      <tr class=\"border-b border-slate-200 last:border-b-0 hover:bg-slate-50/50 transition-colors\">\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0 font-medium bg-slate-50/30\"><strong>a</strong></td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">\\((2, 5)\\)</td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">\\((6, 11)\\)</td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0 font-semibold text-indigo-600\">?</td>\n      </tr>\n      <tr class=\"border-b border-slate-200 last:border-b-0 hover:bg-slate-50/50 transition-colors\">\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0 font-medium bg-slate-50/30\"><strong>b</strong></td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0 font-semibold text-indigo-600\">?</td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">\\((4, 5)\\)</td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">\\((8, 10)\\)</td>\n      </tr>\n      <tr class=\"border-b border-slate-200 last:border-b-0 hover:bg-slate-50/50 transition-colors\">\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0 font-medium bg-slate-50/30\"><strong>c</strong></td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">\\((-2, -5)\\)</td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0 font-semibold text-indigo-600\">?</td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">\\((2, -2)\\)</td>\n      </tr>\n      <tr class=\"border-b border-slate-200 last:border-b-0 hover:bg-slate-50/50 transition-colors\">\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0 font-medium bg-slate-50/30\"><strong>d</strong></td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">\\((1.5, 5.3)\\)</td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">\\((7.7, 2.2)\\)</td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0 font-semibold text-indigo-600\">?</td>\n      </tr>\n      <tr class=\"border-b border-slate-200 last:border-b-0 hover:bg-slate-50/50 transition-colors\">\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0 font-medium bg-slate-50/30\"><strong>e</strong></td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0 font-semibold text-indigo-600\">?</td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">\\((-2.5, -3.1)\\)</td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">\\((0.5, -1.5)\\)</td>\n      </tr>\n      <tr class=\"border-b border-slate-200 last:border-b-0 hover:bg-slate-50/50 transition-colors\">\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0 font-medium bg-slate-50/30\"><strong>f</strong></td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">\\((-4.8, 5)\\)</td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0 font-semibold text-indigo-600\">?</td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">\\((0, 4)\\)</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\nFind the missing point \\(B\\) for row c.",
    "opts": [
      "\\((6, 0)\\)",
      "\\((6, 1)\\)",
      "\\((1, 6)\\)",
      "\\((7, 1)\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is \\((6, 1)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for The midpoint of an interval: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(B = 2(2, -2) - (-2, -5) = (4, -4) - (-2, -5) = (6, 1)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\((6, 1)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (6, 1). Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\((6, 1)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\((6, 0)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((6, 1)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((1, 6)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((7, 1)\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y9-11b-q3d",
    "topicId": "y9-11b",
    "c": "11B",
    "t": "The midpoint of an interval",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Fill in the missing entries in the table below, where <em>M</em> is the midpoint of the interval <em>AB</em>.<br>\n<div class=\"my-6 overflow-x-auto rounded-xl border border-slate-200 shadow-sm\">\n  <table class=\"w-full text-sm border-collapse bg-white\">\n    <thead>\n      <tr class=\"bg-slate-50 text-slate-700 font-semibold border-b border-slate-200\">\n        <th class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">Row</th>\n        <th class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">Point \\(A\\)</th>\n        <th class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">Point \\(B\\)</th>\n        <th class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">Midpoint \\(M\\)</th>\n      </tr>\n    </thead>\n    <tbody class=\"text-slate-800\">\n      <tr class=\"border-b border-slate-200 last:border-b-0 hover:bg-slate-50/50 transition-colors\">\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0 font-medium bg-slate-50/30\"><strong>a</strong></td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">\\((2, 5)\\)</td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">\\((6, 11)\\)</td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0 font-semibold text-indigo-600\">?</td>\n      </tr>\n      <tr class=\"border-b border-slate-200 last:border-b-0 hover:bg-slate-50/50 transition-colors\">\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0 font-medium bg-slate-50/30\"><strong>b</strong></td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0 font-semibold text-indigo-600\">?</td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">\\((4, 5)\\)</td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">\\((8, 10)\\)</td>\n      </tr>\n      <tr class=\"border-b border-slate-200 last:border-b-0 hover:bg-slate-50/50 transition-colors\">\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0 font-medium bg-slate-50/30\"><strong>c</strong></td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">\\((-2, -5)\\)</td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0 font-semibold text-indigo-600\">?</td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">\\((2, -2)\\)</td>\n      </tr>\n      <tr class=\"border-b border-slate-200 last:border-b-0 hover:bg-slate-50/50 transition-colors\">\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0 font-medium bg-slate-50/30\"><strong>d</strong></td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">\\((1.5, 5.3)\\)</td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">\\((7.7, 2.2)\\)</td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0 font-semibold text-indigo-600\">?</td>\n      </tr>\n      <tr class=\"border-b border-slate-200 last:border-b-0 hover:bg-slate-50/50 transition-colors\">\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0 font-medium bg-slate-50/30\"><strong>e</strong></td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0 font-semibold text-indigo-600\">?</td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">\\((-2.5, -3.1)\\)</td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">\\((0.5, -1.5)\\)</td>\n      </tr>\n      <tr class=\"border-b border-slate-200 last:border-b-0 hover:bg-slate-50/50 transition-colors\">\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0 font-medium bg-slate-50/30\"><strong>f</strong></td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">\\((-4.8, 5)\\)</td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0 font-semibold text-indigo-600\">?</td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">\\((0, 4)\\)</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\nFind the missing midpoint \\(M\\) for row d.",
    "opts": [
      "\\((4.6, 3.75)\\)",
      "\\((5.6, 3.75)\\)",
      "\\((4.6, 2.75)\\)",
      "\\((3.75, 4.6)\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\((4.6, 3.75)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for The midpoint of an interval: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(M = \\left(\\frac{1.5+7.7}{2}, \\frac{5.3+2.2}{2}\\right) = (4.6, 3.75)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\((4.6, 3.75)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (4.6, 3.75). Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\((4.6, 3.75)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\((4.6, 3.75)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((5.6, 3.75)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((4.6, 2.75)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((3.75, 4.6)\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y9-11b-q3e",
    "topicId": "y9-11b",
    "c": "11B",
    "t": "The midpoint of an interval",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Fill in the missing entries in the table below, where <em>M</em> is the midpoint of the interval <em>AB</em>.<br>\n<div class=\"my-6 overflow-x-auto rounded-xl border border-slate-200 shadow-sm\">\n  <table class=\"w-full text-sm border-collapse bg-white\">\n    <thead>\n      <tr class=\"bg-slate-50 text-slate-700 font-semibold border-b border-slate-200\">\n        <th class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">Row</th>\n        <th class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">Point \\(A\\)</th>\n        <th class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">Point \\(B\\)</th>\n        <th class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">Midpoint \\(M\\)</th>\n      </tr>\n    </thead>\n    <tbody class=\"text-slate-800\">\n      <tr class=\"border-b border-slate-200 last:border-b-0 hover:bg-slate-50/50 transition-colors\">\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0 font-medium bg-slate-50/30\"><strong>a</strong></td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">\\((2, 5)\\)</td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">\\((6, 11)\\)</td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0 font-semibold text-indigo-600\">?</td>\n      </tr>\n      <tr class=\"border-b border-slate-200 last:border-b-0 hover:bg-slate-50/50 transition-colors\">\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0 font-medium bg-slate-50/30\"><strong>b</strong></td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0 font-semibold text-indigo-600\">?</td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">\\((4, 5)\\)</td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">\\((8, 10)\\)</td>\n      </tr>\n      <tr class=\"border-b border-slate-200 last:border-b-0 hover:bg-slate-50/50 transition-colors\">\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0 font-medium bg-slate-50/30\"><strong>c</strong></td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">\\((-2, -5)\\)</td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0 font-semibold text-indigo-600\">?</td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">\\((2, -2)\\)</td>\n      </tr>\n      <tr class=\"border-b border-slate-200 last:border-b-0 hover:bg-slate-50/50 transition-colors\">\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0 font-medium bg-slate-50/30\"><strong>d</strong></td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">\\((1.5, 5.3)\\)</td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">\\((7.7, 2.2)\\)</td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0 font-semibold text-indigo-600\">?</td>\n      </tr>\n      <tr class=\"border-b border-slate-200 last:border-b-0 hover:bg-slate-50/50 transition-colors\">\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0 font-medium bg-slate-50/30\"><strong>e</strong></td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0 font-semibold text-indigo-600\">?</td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">\\((-2.5, -3.1)\\)</td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">\\((0.5, -1.5)\\)</td>\n      </tr>\n      <tr class=\"border-b border-slate-200 last:border-b-0 hover:bg-slate-50/50 transition-colors\">\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0 font-medium bg-slate-50/30\"><strong>f</strong></td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">\\((-4.8, 5)\\)</td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0 font-semibold text-indigo-600\">?</td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">\\((0, 4)\\)</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\nFind the missing point \\(A\\) for row e.",
    "opts": [
      "\\((4.5, 0.1)\\)",
      "\\((3.5, -0.9)\\)",
      "\\((3.5, 0.1)\\)",
      "\\((0.1, 3.5)\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "",
    "solution": "The correct answer is \\((3.5, 0.1)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for The midpoint of an interval: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(A = 2(0.5, -1.5) - (-2.5, -3.1) = (1, -3) - (-2.5, -3.1) = (3.5, 0.1)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\((3.5, 0.1)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (3.5, 0.1). Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\((3.5, 0.1)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\((4.5, 0.1)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((3.5, -0.9)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((3.5, 0.1)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((0.1, 3.5)\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y9-11b-q3f",
    "topicId": "y9-11b",
    "c": "11B",
    "t": "The midpoint of an interval",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Fill in the missing entries in the table below, where <em>M</em> is the midpoint of the interval <em>AB</em>.<br>\n<div class=\"my-6 overflow-x-auto rounded-xl border border-slate-200 shadow-sm\">\n  <table class=\"w-full text-sm border-collapse bg-white\">\n    <thead>\n      <tr class=\"bg-slate-50 text-slate-700 font-semibold border-b border-slate-200\">\n        <th class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">Row</th>\n        <th class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">Point \\(A\\)</th>\n        <th class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">Point \\(B\\)</th>\n        <th class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">Midpoint \\(M\\)</th>\n      </tr>\n    </thead>\n    <tbody class=\"text-slate-800\">\n      <tr class=\"border-b border-slate-200 last:border-b-0 hover:bg-slate-50/50 transition-colors\">\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0 font-medium bg-slate-50/30\"><strong>a</strong></td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">\\((2, 5)\\)</td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">\\((6, 11)\\)</td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0 font-semibold text-indigo-600\">?</td>\n      </tr>\n      <tr class=\"border-b border-slate-200 last:border-b-0 hover:bg-slate-50/50 transition-colors\">\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0 font-medium bg-slate-50/30\"><strong>b</strong></td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0 font-semibold text-indigo-600\">?</td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">\\((4, 5)\\)</td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">\\((8, 10)\\)</td>\n      </tr>\n      <tr class=\"border-b border-slate-200 last:border-b-0 hover:bg-slate-50/50 transition-colors\">\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0 font-medium bg-slate-50/30\"><strong>c</strong></td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">\\((-2, -5)\\)</td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0 font-semibold text-indigo-600\">?</td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">\\((2, -2)\\)</td>\n      </tr>\n      <tr class=\"border-b border-slate-200 last:border-b-0 hover:bg-slate-50/50 transition-colors\">\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0 font-medium bg-slate-50/30\"><strong>d</strong></td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">\\((1.5, 5.3)\\)</td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">\\((7.7, 2.2)\\)</td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0 font-semibold text-indigo-600\">?</td>\n      </tr>\n      <tr class=\"border-b border-slate-200 last:border-b-0 hover:bg-slate-50/50 transition-colors\">\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0 font-medium bg-slate-50/30\"><strong>e</strong></td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0 font-semibold text-indigo-600\">?</td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">\\((-2.5, -3.1)\\)</td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">\\((0.5, -1.5)\\)</td>\n      </tr>\n      <tr class=\"border-b border-slate-200 last:border-b-0 hover:bg-slate-50/50 transition-colors\">\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0 font-medium bg-slate-50/30\"><strong>f</strong></td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">\\((-4.8, 5)\\)</td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0 font-semibold text-indigo-600\">?</td>\n        <td class=\"px-4 py-3 text-center border-r border-slate-200 last:border-r-0\">\\((0, 4)\\)</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\nFind the missing point \\(B\\) for row f.",
    "opts": [
      "\\((5.8, 3)\\)",
      "\\((4.8, 2)\\)",
      "\\((4.8, 3)\\)",
      "\\((3, 4.8)\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "",
    "solution": "The correct answer is \\((4.8, 3)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for The midpoint of an interval: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(B = 2(0, 4) - (-4.8, 5) = (0, 8) - (-4.8, 5) = (4.8, 3)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\((4.8, 3)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (4.8, 3). Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\((4.8, 3)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\((5.8, 3)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((4.8, 2)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((4.8, 3)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((3, 4.8)\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y9-11b-q4a",
    "topicId": "y9-11b",
    "c": "11B",
    "t": "The midpoint of an interval",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Consider the three points \\(A(1, 2)\\), \\(B(5, 4)\\) and \\(C(7, 0)\\). Let \\(M\\) and \\(N\\) be the midpoints of \\(AB\\) and \\(AC\\) respectively. Answer the following questions.\nFind the coordinates of \\(M\\).",
    "opts": [
      "\\((3, 3)\\)",
      "\\((3, 2)\\)",
      "\\((4, 3)\\)",
      "\\((2, 4)\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\((3, 3)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for The midpoint of an interval: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(M = \\left(\\frac{1+5}{2}, \\frac{2+4}{2}\\right) = (3, 3)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\((3, 3)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (3, 3). Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\((3, 3)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\((3, 3)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((3, 2)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((4, 3)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((2, 4)\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y9-11b-q4b",
    "topicId": "y9-11b",
    "c": "11B",
    "t": "The midpoint of an interval",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Consider the three points \\(A(1, 2)\\), \\(B(5, 4)\\) and \\(C(7, 0)\\). Let \\(M\\) and \\(N\\) be the midpoints of \\(AB\\) and \\(AC\\) respectively. Answer the following questions.\nFind the coordinates of \\(N\\).",
    "opts": [
      "\\((4, 1)\\)",
      "\\((1, 4)\\)",
      "\\((4, 0)\\)",
      "\\((5, 1)\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\((4, 1)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for The midpoint of an interval: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(N = \\left(\\frac{1+7}{2}, \\frac{2+0}{2}\\right) = (4, 1)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\((4, 1)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (4, 1). Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\((4, 1)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\((4, 1)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((1, 4)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((4, 0)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((5, 1)\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y9-11b-q4c",
    "topicId": "y9-11b",
    "c": "11B",
    "t": "The midpoint of an interval",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Consider the three points \\(A(1, 2)\\), \\(B(5, 4)\\) and \\(C(7, 0)\\). Let \\(M\\) and \\(N\\) be the midpoints of \\(AB\\) and \\(AC\\) respectively. Answer the following questions.\nCalculate the distance \\(BC\\).",
    "opts": [
      "Cannot be determined",
      "Not enough information",
      "None of the above",
      "\\(2\\sqrt{5}\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "",
    "solution": "The correct answer is \\(2\\sqrt{5}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for The midpoint of an interval: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(BC = \\sqrt{(7-5)^2 + (0-4)^2} = \\sqrt{20} = 2\\sqrt{5}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(2\\sqrt{5}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 2\\sqrt{5}. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(2\\sqrt{5}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "Cannot be determined",
        "imageUrl": ""
      },
      {
        "text": "Not enough information",
        "imageUrl": ""
      },
      {
        "text": "None of the above",
        "imageUrl": ""
      },
      {
        "text": "\\(2\\sqrt{5}\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y9-11b-q4d",
    "topicId": "y9-11b",
    "c": "11B",
    "t": "The midpoint of an interval",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Consider the three points \\(A(1, 2)\\), \\(B(5, 4)\\) and \\(C(7, 0)\\). Let \\(M\\) and \\(N\\) be the midpoints of \\(AB\\) and \\(AC\\) respectively. Answer the following questions.\nCalculate the distance \\(MN\\).",
    "opts": [
      "Cannot be determined",
      "None of the above",
      "Not enough information",
      "\\(\\sqrt{5}\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "",
    "solution": "The correct answer is \\(\\sqrt{5}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for The midpoint of an interval: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(MN = \\sqrt{(4-3)^2 + (1-3)^2} = \\sqrt{5}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\sqrt{5}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\sqrt{5}. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(\\sqrt{5}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "Cannot be determined",
        "imageUrl": ""
      },
      {
        "text": "None of the above",
        "imageUrl": ""
      },
      {
        "text": "Not enough information",
        "imageUrl": ""
      },
      {
        "text": "\\(\\sqrt{5}\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y9-11b-q4e",
    "topicId": "y9-11b",
    "c": "11B",
    "t": "The midpoint of an interval",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Consider the three points \\(A(1, 2)\\), \\(B(5, 4)\\) and \\(C(7, 0)\\). Let \\(M\\) and \\(N\\) be the midpoints of \\(AB\\) and \\(AC\\) respectively. Answer the following questions.\nCompare the distance \\(BC\\) with the distance \\(MN\\).",
    "opts": [
      "\\(BC = 2MN\\)",
      "None of the above",
      "Cannot be determined",
      "Not enough information"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(BC = 2MN\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for The midpoint of an interval: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(BC = 2 \\times MN\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(BC = 2MN\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: BC = 2MN. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(BC = 2MN\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\(BC = 2MN\\)",
        "imageUrl": ""
      },
      {
        "text": "None of the above",
        "imageUrl": ""
      },
      {
        "text": "Cannot be determined",
        "imageUrl": ""
      },
      {
        "text": "Not enough information",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y9-11b-q4f",
    "topicId": "y9-11b",
    "c": "11B",
    "t": "The midpoint of an interval",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Consider the three points \\(A(1, 2)\\), \\(B(5, 4)\\) and \\(C(7, 0)\\). Let \\(M\\) and \\(N\\) be the midpoints of \\(AB\\) and \\(AC\\) respectively. Answer the following questions.\nWhat is the relation between \\(\\Delta ABC\\) and \\(\\Delta AMN\\)?",
    "opts": [
      "Cannot be determined",
      "Similar triangles",
      "Not enough information",
      "None of the above"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is Similar triangles.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for The midpoint of an interval: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(\\Delta ABC \\sim \\Delta AMN \\quad \\text{(SAS similarity, scale factor 2)}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "Similar triangles",
        "graphData": null
      },
      {
        "explanation": "Final answer: Similar triangles. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Similar triangles",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "Cannot be determined",
        "imageUrl": ""
      },
      {
        "text": "Similar triangles",
        "imageUrl": ""
      },
      {
        "text": "Not enough information",
        "imageUrl": ""
      },
      {
        "text": "None of the above",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y9-11b-q5a",
    "topicId": "y9-11b",
    "c": "11B",
    "t": "The midpoint of an interval",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "The parallelogram \\(PQRS\\) has vertices \\(P(1, 7)\\), \\(Q(6, 6)\\), \\(R(5, 1)\\) and \\(S(0, 2)\\). Complete the following tasks.\nFind the coordinates of the midpoint of the diagonal \\(PR\\).",
    "opts": [
      "\\((4, 3)\\)",
      "\\((3, 3)\\)",
      "\\((3, 4)\\)",
      "\\((4, 4)\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "",
    "solution": "The correct answer is \\((3, 4)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for The midpoint of an interval: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(M = \\left(\\frac{1+5}{2}, \\frac{7+1}{2}\\right) = (3, 4)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\((3, 4)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (3, 4). Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\((3, 4)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\((4, 3)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((3, 3)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((3, 4)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((4, 4)\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y9-11b-q5b",
    "topicId": "y9-11b",
    "c": "11B",
    "t": "The midpoint of an interval",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "The parallelogram \\(PQRS\\) has vertices \\(P(1, 7)\\), \\(Q(6, 6)\\), \\(R(5, 1)\\) and \\(S(0, 2)\\). Complete the following tasks.\nFind the coordinates of the midpoint of the diagonal \\(SQ\\).",
    "opts": [
      "\\((4, 4)\\)",
      "\\((3, 3)\\)",
      "\\((3, 4)\\)",
      "\\((4, 3)\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "",
    "solution": "The correct answer is \\((3, 4)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for The midpoint of an interval: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(M = \\left(\\frac{0+6}{2}, \\frac{2+6}{2}\\right) = (3, 4)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\((3, 4)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (3, 4). Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\((3, 4)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\((4, 4)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((3, 3)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((3, 4)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((4, 3)\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y9-11b-q5c",
    "topicId": "y9-11b",
    "c": "11B",
    "t": "The midpoint of an interval",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "The parallelogram \\(PQRS\\) has vertices \\(P(1, 7)\\), \\(Q(6, 6)\\), \\(R(5, 1)\\) and \\(S(0, 2)\\). Complete the following tasks.\nWhat well-known property of a parallelogram does this demonstrate?",
    "opts": [
      "Diagonals bisect each other",
      "Not enough information",
      "None of the above",
      "Cannot be determined"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is Diagonals bisect each other.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for The midpoint of an interval: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(\\text{The diagonals of a parallelogram bisect each other.}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "Diagonals bisect each other",
        "graphData": null
      },
      {
        "explanation": "Final answer: Diagonals bisect each other. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Diagonals bisect each other",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "Diagonals bisect each other",
        "imageUrl": ""
      },
      {
        "text": "Not enough information",
        "imageUrl": ""
      },
      {
        "text": "None of the above",
        "imageUrl": ""
      },
      {
        "text": "Cannot be determined",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y9-11b-q6",
    "topicId": "y9-11b",
    "c": "11B",
    "t": "The midpoint of an interval",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Use the midpoint formula to find the coordinates of three more points that lie on the line passing through the points \\((0, 0)\\) and \\((4, 6)\\).",
    "answer": "(2, 3), (1, 1.5), (3, 4.5)",
    "hint": "Find the midpoint of the endpoints. Then, find the midpoints of the resulting segments.",
    "solution": "(2, 3), (1, 1.5), (3, 4.5)",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for The midpoint of an interval: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(M_1 = \\left(\\frac{0+4}{2}, frac{0+6}{2}\\right) = (2, 3)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(M_2 = \\left(\\frac{0+2}{2}, frac{0+3}{2}\\right) = (1, 1.5)\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(M_3 = \\left(\\frac{2+4}{2}, frac{3+6}{2}\\right) = (3, 4.5)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (2, 3), (1, 1.5), (3, 4.5). Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\((2, 3), (1, 1.5), (3, 4.5)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-11b-q7",
    "topicId": "y9-11b",
    "c": "11B",
    "t": "The midpoint of an interval",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the coordinates of three more points that lie on the line passing through the points \\((-2, -3)\\) and \\((2, 5)\\).",
    "answer": "(0, 1), (-1, -1), (1, 3)",
    "hint": "Calculate successive midpoints between endpoints and previous midpoints.",
    "solution": "(0, 1), (-1, -1), (1, 3)",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for The midpoint of an interval: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(M_1 = \\left(\\frac{-2+2}{2}, frac{-3+5}{2}\\right) = (0, 1)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(M_2 = \\left(\\frac{-2+0}{2}, frac{-3+1}{2}\\right) = (-1, -1)\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(M_3 = \\left(\\frac{0+2}{2}, frac{1+5}{2}\\right) = (1, 3)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (0, 1), (-1, -1), (1, 3). Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\((0, 1), (-1, -1), (1, 3)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-11b-q8a",
    "topicId": "y9-11b",
    "c": "11B",
    "t": "The midpoint of an interval",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "The triangle \\(ABC\\) has vertices \\(A(-3, 2)\\), \\(B(-2, 5)\\) and \\(C(4, 3)\\). Complete the following tasks.\nFind the coordinates of \\(M\\), the midpoint of \\(AC\\).",
    "opts": [
      "\\((2.5, 0.5)\\)",
      "\\((0.5, 2.5)\\)",
      "\\((0.5, 1.5)\\)",
      "\\((1.5, 2.5)\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is \\((0.5, 2.5)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for The midpoint of an interval: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(M = \\left(\\frac{-3+4}{2}, \\frac{2+3}{2}\\right) = (0.5, 2.5)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\((0.5, 2.5)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (0.5, 2.5). Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\((0.5, 2.5)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\((2.5, 0.5)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((0.5, 2.5)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((0.5, 1.5)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((1.5, 2.5)\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y9-11b-q8b",
    "topicId": "y9-11b",
    "c": "11B",
    "t": "The midpoint of an interval",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "The triangle \\(ABC\\) has vertices \\(A(-3, 2)\\), \\(B(-2, 5)\\) and \\(C(4, 3)\\). Complete the following tasks.\nFind the distance \\(BM\\).",
    "opts": [
      "\\(5\\sqrt{2}/2\\)",
      "Not enough information",
      "None of the above",
      "Cannot be determined"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(5\\sqrt{2}/2\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for The midpoint of an interval: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(BM = \\sqrt{(0.5 - (-2))^2 + (2.5 - 5)^2} = \\sqrt{12.5} = \\frac{5\\sqrt{2}}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(5\\sqrt{2}/2\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 5\\sqrt{2}/2. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(5\\sqrt{2}/2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\(5\\sqrt{2}/2\\)",
        "imageUrl": ""
      },
      {
        "text": "Not enough information",
        "imageUrl": ""
      },
      {
        "text": "None of the above",
        "imageUrl": ""
      },
      {
        "text": "Cannot be determined",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y9-11b-q8c",
    "topicId": "y9-11b",
    "c": "11B",
    "t": "The midpoint of an interval",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "The triangle \\(ABC\\) has vertices \\(A(-3, 2)\\), \\(B(-2, 5)\\) and \\(C(4, 3)\\). Complete the following tasks.\nShow that \\(M\\) is equidistant from \\(A\\), \\(B\\) and \\(C\\).",
    "answer": "AM = BM = CM = \\sqrt{12.5}",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "AM = BM = CM = \\sqrt{12.5}",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for The midpoint of an interval: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(AM = CM = \\sqrt{3.5^2 + 0.5^2} = \\sqrt{12.5}, \\quad BM = \\sqrt{12.5}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(AM = BM = CM = \\sqrt{12.5}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(AM = BM = CM = \\sqrt{12.5}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: AM = BM = CM = \\sqrt{12.5}. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(AM = BM = CM = \\sqrt{12.5}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-11b-q9a",
    "topicId": "y9-11b",
    "c": "11B",
    "t": "The midpoint of an interval",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "The triangle \\(ABC\\) has vertices \\(A(1, 2)\\), \\(B(3, 8)\\) and \\(C(7, 2)\\). Complete the following tasks.\nFind the coordinates of the midpoints \\(M\\) and \\(N\\) of sides \\(AB\\) and \\(BC\\) respectively. Format: M(x, y), N(x, y)",
    "opts": [
      "Not enough information",
      "\\(M(2, 5), N(5, 5)\\)",
      "Cannot be determined",
      "None of the above"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is \\(M(2, 5), N(5, 5)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for The midpoint of an interval: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(M = (2, 5), \\quad N = (5, 5)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(M(2, 5), N(5, 5)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: M(2, 5), N(5, 5). Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(M(2, 5), N(5, 5)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "Not enough information",
        "imageUrl": ""
      },
      {
        "text": "\\(M(2, 5), N(5, 5)\\)",
        "imageUrl": ""
      },
      {
        "text": "Cannot be determined",
        "imageUrl": ""
      },
      {
        "text": "None of the above",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y9-11b-q9b",
    "topicId": "y9-11b",
    "c": "11B",
    "t": "The midpoint of an interval",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "The triangle \\(ABC\\) has vertices \\(A(1, 2)\\), \\(B(3, 8)\\) and \\(C(7, 2)\\). Complete the following tasks.\nShow that \\(BC = 2MP\\) and \\(AB = 2PN\\).",
    "answer": "BC = 2\\sqrt{13}, MP = \\sqrt{13}; AB = 2\\sqrt{10}, PN = \\sqrt{10}",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "BC = 2\\sqrt{13}, MP = \\sqrt{13}; AB = 2\\sqrt{10}, PN = \\sqrt{10}",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for The midpoint of an interval: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(BC = \\sqrt{52} = 2\\sqrt{13}, \\quad MP = \\sqrt{13} \\implies BC = 2MP\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(AB = \\sqrt{40} = 2\\sqrt{10}, \\quad PN = \\sqrt{10} \\implies AB = 2PN\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(BC = 2\\sqrt{13}, MP = \\sqrt{13}; AB = 2\\sqrt{10}, PN = \\sqrt{10}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: BC = 2\\sqrt{13}, MP = \\sqrt{13}; AB = 2\\sqrt{10}, PN = \\sqrt{10}. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(BC = 2\\sqrt{13}, MP = \\sqrt{13}; AB = 2\\sqrt{10}, PN = \\sqrt{10}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-11b-q10",
    "topicId": "y9-11b",
    "c": "11B",
    "t": "The midpoint of an interval",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "The triangle \\(ABC\\) has vertices \\(A(2, 5)\\), \\(B(2, 11)\\) and \\(C(a, 7)\\). The area of \\(\\Delta ABC\\) is 15. Find the possible values of \\(a\\).",
    "opts": [
      "\\(5 \\text{ or } -1\\)",
      "\\(7 \\text{ or } -3\\)",
      "\\(7 \\text{ or } 3\\)",
      "\\(-7 \\text{ or } 3\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Identify that side \\(AB\\) is vertical. Use \\(\\text{Area} = \\frac{1}{2} \\times \\text{base} \\times \\text{height}\\), where the height is \\(|a - 2|\\).",
    "solution": "1. The vertices \\(A(2, 5)\\) and \\(B(2, 11)\\) lie on the vertical line \\(x = 2\\). The base length \\(AB\\) is:\n   \\(AB = |11 - 5| = 6\\).\n2. The height of \\(\\Delta ABC\\) is the perpendicular horizontal distance from \\(C(a, 7)\\) to the line \\(x = 2\\), which is:\n   \\(h = |a - 2|\\).\n3. Using the area formula:\n   \\(\\text{Area} = \\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2} \\times 6 \\times |a - 2| = 3|a - 2|\\).\n4. Given the area is 15:\n   \\(3|a - 2| = 15 \\implies |a - 2| = 5\\).\n5. Solve the absolute value equation:\n   \\(a - 2 = 5 \\implies a = 7\\)\n   \\(a - 2 = -5 \\implies a = -3\\).\nSo the possible values of \\(a\\) are \\(7\\) or \\(-3\\).",
    "solutionSteps": [
      {
        "explanation": "Step 1: Identify that side \\(AB\\) is vertical.",
        "workingOut": "The vertices \\(A(2, 5)\\) and \\(B(2, 11)\\) lie on the vertical line \\(x = 2\\). Therefore, the base length is \\(AB = |11 - 5| = 6\\).",
        "graphData": null
      },
      {
        "explanation": "Step 2: Determine the height of the triangle \\(\\Delta ABC\\).",
        "workingOut": "The height of the triangle is the perpendicular distance from \\(C(a, 7)\\) to the line \\(x = 2\\), which is given by \\(h = |a - 2|\\).",
        "graphData": null
      },
      {
        "explanation": "Step 3: Use the area formula to set up an equation.",
        "workingOut": "$$ \\begin{aligned} \\text{Area} &= \\frac{1}{2} \\times \\text{base} \\times \\text{height} \\\\\\\\ 15 &= \\frac{1}{2} \\times 6 \\times |a - 2| \\\\\\\\ 15 &= 3|a - 2| \\implies |a - 2| = 5 \\end{aligned} $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: Solve the absolute value equation for \\(a\\).",
        "workingOut": "$$ \\begin{aligned} a - 2 &= 5 \\implies a = 7 \\\\\\\\ a - 2 &= -5 \\implies a = -3 \\end{aligned} $$ \nTherefore, the possible values are \\(7 \\text{ or } -3\\).",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              -5,
              13,
              10,
              -2
            ],
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-5, 0], [10, 0]], {strokeColor: 'black'});\nboard.create('arrow', [[0, -2], [0, 13]], {strokeColor: 'black'});\nboard.create('point', [2, 5], {name:'A(2, 5)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [2, 11], {name:'B(2, 11)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('segment', [[2, 5], [2, 11]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [7, 7], {name:'C1(7, 7)', size:3, color:'green', label:{offset:[5,10]}});\nboard.create('point', [-3, 7], {name:'C2(-3, 7)', size:3, color:'green', label:{offset:[5,10]}});\nboard.create('polygon', [[2, 5], [2, 11], [7, 7]], {fillColor: 'rgba(0,0,255,0.1)', borders:{strokeColor:'blue', dash: 2}});\nboard.create('polygon', [[2, 5], [2, 11], [-3, 7]], {fillColor: 'rgba(255,0,0,0.1)', borders:{strokeColor:'red', dash: 2}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\(5 \\text{ or } -1\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7 \\text{ or } -3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(7 \\text{ or } 3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-7 \\text{ or } 3\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y9-11b-q11a",
    "topicId": "y9-11b",
    "c": "11B",
    "t": "The midpoint of an interval",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "The triangle \\(ABC\\) has vertices \\(A(0, 0)\\), \\(B(0, 8)\\) and \\(C(12, 8)\\). Let \\(M\\), \\(N\\) and \\(P\\) be the midpoints of sides \\(AB\\), \\(BC\\) and \\(CA\\) respectively. Complete the following tasks.\nFind the coordinates of \\(M\\), \\(N\\) and \\(P\\). Format: M(x, y), N(x, y), P(x, y)",
    "opts": [
      "\\(M(4, 0), N(6, 8), P(6, 4)\\)",
      "\\(M(0, 4), N(8, 6), P(4, 6)\\)",
      "\\(M(0, 4), N(6, 8), P(6, 4)\\)",
      "\\(M(0, 4), N(6, 4), P(6, 8)\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "",
    "solution": "The correct answer is \\(M(0, 4), N(6, 8), P(6, 4)\\).",
    "solutionSteps": [
      {
        "explanation": "Step 1: Identify the coordinates of the vertices.",
        "workingOut": "\\(A(0, 0)\\), \\(B(0, 8)\\), \\(C(12, 8)\\)",
        "graphData": null
      },
      {
        "explanation": "Step 2: State the midpoint formula.",
        "workingOut": "\\( M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right) \\)",
        "graphData": null
      },
      {
        "explanation": "Step 3: Calculate the midpoint for each side.",
        "workingOut": "$$ \\begin{aligned} M_{AB} &= \\left(\\frac{0 + 0}{2}, \\frac{0 + 8}{2}\\right) = (0, 4) \\\\\\\\ N_{BC} &= \\left(\\frac{0 + 12}{2}, \\frac{8 + 8}{2}\\right) = (6, 8) \\\\\\\\ P_{CA} &= \\left(\\frac{12 + 0}{2}, \\frac{8 + 0}{2}\\right) = (6, 4) \\end{aligned} $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: State the final coordinates.",
        "workingOut": "\\(M(0, 4), N(6, 8), P(6, 4)\\)",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              -3,
              11,
              14,
              -3
            ],
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-2, 0], [14, 0]], {strokeColor: 'black'});\nboard.create('arrow', [[0, -2], [0, 10]], {strokeColor: 'black'});\nlet pA = board.create('point', [0, 0], {name:'A(0, 0)', size:3, color:'red', label:{offset:[-15,-15]}});\nlet pB = board.create('point', [0, 8], {name:'B(0, 8)', size:3, color:'red', label:{offset:[-15,10]}});\nlet pC = board.create('point', [12, 8], {name:'C(12, 8)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('polygon', [pA, pB, pC], {fillColor:'rgba(255,0,0,0.1)', borders:{strokeColor:'red', strokeWidth:2}});\n\nboard.create('point', [0, 4], {name:'M(0, 4)', size:3, color:'green', label:{offset:[-35,0]}});\nboard.create('point', [6, 8], {name:'N(6, 8)', size:3, color:'green', label:{offset:[0,15]}});\nboard.create('point', [6, 4], {name:'P(6, 4)', size:3, color:'green', label:{offset:[5,-15]}});\nboard.create('polygon', [[0,4], [6,8], [6,4]], {fillColor:'rgba(0,255,0,0.2)', borders:{strokeColor:'green', dash:2}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\(M(4, 0), N(6, 8), P(6, 4)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(M(0, 4), N(8, 6), P(4, 6)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(M(0, 4), N(6, 8), P(6, 4)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(M(0, 4), N(6, 4), P(6, 8)\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y9-11b-q11b",
    "topicId": "y9-11b",
    "c": "11B",
    "t": "The midpoint of an interval",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "The triangle \\(ABC\\) has vertices \\(A(0, 0)\\), \\(B(0, 8)\\) and \\(C(12, 8)\\). Let \\(M\\), \\(N\\) and \\(P\\) be the midpoints of sides \\(AB\\), \\(BC\\) and \\(CA\\) respectively. Complete the following tasks.\nFind the coordinates of the midpoints of the sides of \\(\\Delta MNP\\). Format: (x, y), (x, y), (x, y)",
    "opts": [
      "\\((3, 6), (6, 4), (3, 4)\\)",
      "\\((3, 6), (6, 6), (3, 4)\\)",
      "\\((3, 4), (6, 6), (3, 6)\\)",
      "\\((6, 3), (6, 6), (4, 3)\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is \\((3, 6), (6, 6), (3, 4)\\).",
    "solutionSteps": [
      {
        "explanation": "Step 1: Identify the coordinates of the vertices of \\(\\Delta MNP\\) (from the previous part).",
        "workingOut": "\\(M(0, 4)\\), \\(N(6, 8)\\), \\(P(6, 4)\\)",
        "graphData": null
      },
      {
        "explanation": "Step 2: State the midpoint formula.",
        "workingOut": "\\( \\text{Midpoint} = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right) \\)",
        "graphData": null
      },
      {
        "explanation": "Step 3: Calculate the midpoint for each side of \\(\\Delta MNP\\).",
        "workingOut": "$$ \\begin{aligned} \\text{Midpoint of } MN &= \\left(\\frac{0 + 6}{2}, \\frac{4 + 8}{2}\\right) = (3, 6) \\\\\\\\ \\text{Midpoint of } NP &= \\left(\\frac{6 + 6}{2}, \\frac{8 + 4}{2}\\right) = (6, 6) \\\\\\\\ \\text{Midpoint of } PM &= \\left(\\frac{6 + 0}{2}, \\frac{4 + 4}{2}\\right) = (3, 4) \\end{aligned} $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: State the final coordinates of the midpoints.",
        "workingOut": "\\((3, 6), (6, 6), (3, 4)\\)",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              -3,
              11,
              14,
              -3
            ],
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-2, 0], [14, 0]], {strokeColor: 'black'});\nboard.create('arrow', [[0, -2], [0, 10]], {strokeColor: 'black'});\n\nboard.create('polygon', [[0,0], [0,8], [12,8]], {fillColor:'transparent', borders:{strokeColor:'gray', dash:1}});\n\nlet pM = board.create('point', [0, 4], {name:'M(0, 4)', size:3, color:'green', label:{offset:[-35,0]}});\nlet pN = board.create('point', [6, 8], {name:'N(6, 8)', size:3, color:'green', label:{offset:[0,10]}});\nlet pP = board.create('point', [6, 4], {name:'P(6, 4)', size:3, color:'green', label:{offset:[10,-10]}});\nboard.create('polygon', [pM, pN, pP], {fillColor:'rgba(0,255,0,0.1)', borders:{strokeColor:'green', strokeWidth:2}});\n\nboard.create('point', [3, 6], {name:'(3, 6)', size:3, color:'blue', label:{offset:[-30,10]}});\nboard.create('point', [6, 6], {name:'(6, 6)', size:3, color:'blue', label:{offset:[10,0]}});\nboard.create('point', [3, 4], {name:'(3, 4)', size:3, color:'blue', label:{offset:[-10,-15]}});\nboard.create('polygon', [[3,6], [6,6], [3,4]], {fillColor:'rgba(0,0,255,0.2)', borders:{strokeColor:'blue', dash:2}});\n\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false,
    "options": [
      {
        "text": "\\((3, 6), (6, 4), (3, 4)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((3, 6), (6, 6), (3, 4)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((3, 4), (6, 6), (3, 6)\\)",
        "imageUrl": ""
      },
      {
        "text": "\\((6, 3), (6, 6), (4, 3)\\)",
        "imageUrl": ""
      }
    ]
  },
  {
    "id": "y9-11b-q12",
    "topicId": "y9-11b",
    "c": "11B",
    "t": "The midpoint of an interval",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "The quadrilateral \\(ABCD\\) has vertices \\(A(0, 0)\\), \\(B(4, 8)\\), \\(C(12, 10)\\) and \\(D(2, 6)\\). \\(M\\), \\(N\\), \\(O\\) and \\(P\\) are the midpoints of the sides \\(AB\\), \\(BC\\), \\(CD\\) and \\(DA\\) respectively. Find the lengths of the sides of quadrilateral \\(MNOP\\) and describe this quadrilateral.",
    "answer": "3",
    "hint": "Use the midpoint formula to find the four vertices \\(M, N, O, P\\). Then find the distance between adjacent points and check if opposite sides are equal.",
    "solution": "MN = OP = \\sqrt{61}, NO = PM = \\sqrt{2}; Parallelogram",
    "solutionSteps": [
      {
        "explanation": "Step 1: Find the coordinates of the midpoints M, N, O, P.",
        "workingOut": "Using the midpoint formula \\( \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right) \\):\n- \\(M\\) (midpoint of \\(AB\\)): \\( \\left(\\frac{0+4}{2}, \\frac{0+8}{2}\\right) = (2, 4) \\)\n- \\(N\\) (midpoint of \\(BC\\)): \\( \\left(\\frac{4+12}{2}, \\frac{8+10}{2}\\right) = (8, 9) \\)\n- \\(O\\) (midpoint of \\(CD\\)): \\( \\left(\\frac{12+2}{2}, \\frac{10+6}{2}\\right) = (7, 8) \\)\n- \\(P\\) (midpoint of \\(DA\\)): \\( \\left(\\frac{2+0}{2}, \\frac{6+0}{2}\\right) = (1, 3) \\)",
        "graphData": null
      },
      {
        "explanation": "Step 2: Calculate the lengths of the opposite sides \\(MN\\) and \\(OP\\).",
        "workingOut": "Using the distance formula \\( d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} \\):\n$$ \\begin{aligned} MN &= \\sqrt{(8 - 2)^2 + (9 - 4)^2} = \\sqrt{6^2 + 5^2} = \\sqrt{36 + 25} = \\sqrt{61} \\\\\\\\ OP &= \\sqrt{(1 - 7)^2 + (3 - 8)^2} = \\sqrt{(-6)^2 + (-5)^2} = \\sqrt{36 + 25} = \\sqrt{61} \\end{aligned} $$\nThus, \\( MN = OP = \\sqrt{61} \\).",
        "graphData": null
      },
      {
        "explanation": "Step 3: Calculate the lengths of the opposite sides \\(NO\\) and \\(PM\\).",
        "workingOut": "$$ \\begin{aligned} NO &= \\sqrt{(7 - 8)^2 + (8 - 9)^2} = \\sqrt{(-1)^2 + (-1)^2} = \\sqrt{1 + 1} = \\sqrt{2} \\\\\\\\ PM &= \\sqrt{(2 - 1)^2 + (4 - 3)^2} = \\sqrt{1^2 + 1^2} = \\sqrt{1 + 1} = \\sqrt{2} \\end{aligned} $$\nThus, \\( NO = PM = \\sqrt{2} \\).",
        "graphData": null
      },
      {
        "explanation": "Step 4: Describe the quadrilateral.",
        "workingOut": "Since the opposite sides of the quadrilateral \\(MNOP\\) are equal in length (\\(MN = OP\\) and \\(NO = PM\\)), the quadrilateral is a **parallelogram**.",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              -3,
              13,
              15,
              -3
            ],
            "boardOptions": {
              "axis": false,
              "grid": true
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-2, 0], [14, 0]], {strokeColor: 'black'});\nboard.create('arrow', [[0, -2], [0, 12]], {strokeColor: 'black'});\nlet pA = board.create('point', [0, 0], {name:'A', size:2, color:'gray'});\nlet pB = board.create('point', [4, 8], {name:'B', size:2, color:'gray'});\nlet pC = board.create('point', [12, 10], {name:'C', size:2, color:'gray'});\nlet pD = board.create('point', [2, 6], {name:'D', size:2, color:'gray'});\nboard.create('polygon', [pA, pB, pC, pD], {fillColor:'rgba(255,0,0,0.05)', borders:{strokeColor:'gray', strokeWidth:1, dash:2}});\n\nlet pM = board.create('point', [2, 4], {name:'M(2, 4)', size:3, color:'blue', label:{offset:[-35,0]}});\nlet pN = board.create('point', [8, 9], {name:'N(8, 9)', size:3, color:'blue', label:{offset:[0,15]}});\nlet pO = board.create('point', [7, 8], {name:'O(7, 8)', size:3, color:'blue', label:{offset:[10,-10]}});\nlet pP = board.create('point', [1, 3], {name:'P(1, 3)', size:3, color:'blue', label:{offset:[-35,-5]}});\nboard.create('polygon', [pM, pN, pO, pP], {fillColor:'rgba(0,0,255,0.2)', borders:{strokeColor:'blue', strokeWidth:2}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 400,
        "height": 400,
        "boundingbox": [
          -3,
          13,
          15,
          -3
        ],
        "boardOptions": {
          "axis": false,
          "grid": true
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-2, 0], [14, 0]], {strokeColor: 'black'});\nboard.create('arrow', [[0, -2], [0, 12]], {strokeColor: 'black'});\nlet pA = board.create('point', [0, 0], {name:'A(0, 0)', size:3, color:'red', label:{offset:[-20,-10]}});\nlet pB = board.create('point', [4, 8], {name:'B(4, 8)', size:3, color:'red', label:{offset:[-20,10]}});\nlet pC = board.create('point', [12, 10], {name:'C(12, 10)', size:3, color:'red', label:{offset:[10,10]}});\nlet pD = board.create('point', [2, 6], {name:'D(2, 6)', size:3, color:'red', label:{offset:[-20,-10]}});\nboard.create('polygon', [pA, pB, pC, pD], {fillColor:'rgba(255,0,0,0.05)', borders:{strokeColor:'red', strokeWidth:2}});\nboard.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false,
    "opts": [
      "\\(MN = OP = \\sqrt{53}, NO = PM = \\sqrt{5}\\); Parallelogram",
      "\\(MN = OP = \\sqrt{61}, NO = PM = \\sqrt{2}\\); Rectangle",
      "\\(MN = OP = 61, NO = PM = 2\\); Parallelogram",
      "\\(MN = OP = \\sqrt{61}, NO = PM = \\sqrt{2}\\); Parallelogram"
    ],
    "a": 3,
    "options": [
      {
        "text": "\\(MN = OP = \\sqrt{53}, NO = PM = \\sqrt{5}\\); Parallelogram",
        "imageUrl": ""
      },
      {
        "text": "\\(MN = OP = \\sqrt{61}, NO = PM = \\sqrt{2}\\); Rectangle",
        "imageUrl": ""
      },
      {
        "text": "\\(MN = OP = 61, NO = PM = 2\\); Parallelogram",
        "imageUrl": ""
      },
      {
        "text": "\\(MN = OP = \\sqrt{61}, NO = PM = \\sqrt{2}\\); Parallelogram",
        "imageUrl": ""
      }
    ]
  }
];
