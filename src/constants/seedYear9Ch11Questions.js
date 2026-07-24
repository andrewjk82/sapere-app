export const Y9_CH11_QUESTIONS = [
  {
    "id": "y9-11a-q1a",
    "topicId": "y9-11a",
    "c": "11A",
    "t": "Distance between two points",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the distance between the points \\((1, 4)\\) and \\((7, 4)\\).",
    "opts": [
      "\\(5\\)",
      "\\(6\\)",
      "\\(7\\)",
      "\\(4\\)"
    ],
    "a": 1,
    "answer": "2",
    "hint": "Notice that the \\(y\\)-coordinates are identical. Subtract the smaller \\(x\\)-coordinate from the larger one.",
    "solution": "Since the \\(y\\)-coordinates are the same, the distance is simply the absolute difference of the \\(x\\)-coordinates: \\(|7 - 1| = 6\\).",
    "solutionSteps": [
      {
        "explanation": "Step 1: Identify the coordinates of the two points.",
        "workingOut": "$$ (x_1, y_1) = (1, 4) \\quad \\text{and} \\quad (x_2, y_2) = (7, 4) $$",
        "graphData": null
      },
      {
        "explanation": "Step 2: State the distance formula based on Pythagoras' theorem.",
        "workingOut": "$$ d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} $$",
        "graphData": null
      },
      {
        "explanation": "Step 3: Substitute the coordinates into the formula to find the horizontal and vertical differences.",
        "workingOut": "$$ d = \\sqrt{(7 - 1)^2 + (4 - 4)^2} $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: Calculate the squares and find the final distance.",
        "workingOut": "$$ d = \\sqrt{6^2 + 0^2} = \\sqrt{36 + 0} = \\sqrt{36} = 6 \\text{ units} $$",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              -1,
              6,
              9,
              2
            ],
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-0.5, 0], [8.5, 0]], {strokeColor: 'black'});\nboard.create('arrow', [[0, 2.5], [0, 5.5]], {strokeColor: 'black'});\nboard.create('text', [8, 0.5, 'x'], {fontSize: 12});\nboard.create('text', [0.5, 5, 'y'], {fontSize: 12});\nboard.create('point', [1, 4], {name:'(1, 4)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [7, 4], {name:'(7, 4)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('segment', [[1, 4], [7, 4]], {strokeColor:'blue', strokeWidth:2});\nboard.create('segment', [[1, 4], [7, 4]], {strokeColor:'gray', dash:2});\nboard.create('segment', [[7, 4], [7, 4]], {strokeColor:'gray', dash:2});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11a-q1b",
    "topicId": "y9-11a",
    "c": "11A",
    "t": "Distance between two points",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the distance between the points \\((6, 2)\\) and \\((-2, 2)\\).",
    "opts": [
      "\\(8\\)",
      "\\(9\\)",
      "\\(6\\)",
      "\\(7\\)"
    ],
    "a": 0,
    "answer": "2",
    "hint": "Subtract the smaller \\(x\\)-coordinate from the larger \\(x\\)-coordinate.",
    "solution": "Since the \\(y\\)-coordinates are the same, the distance is the absolute difference of the \\(x\\)-coordinates: \\(|6 - (-2)| = 8\\).",
    "solutionSteps": [
      {
        "explanation": "Step 1: Identify the coordinates of the two points.",
        "workingOut": "$$ (x_1, y_1) = (6, 2) \\quad \\text{and} \\quad (x_2, y_2) = (-2, 2) $$",
        "graphData": null
      },
      {
        "explanation": "Step 2: State the distance formula based on Pythagoras' theorem.",
        "workingOut": "$$ d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} $$",
        "graphData": null
      },
      {
        "explanation": "Step 3: Substitute the coordinates into the formula to find the horizontal and vertical differences.",
        "workingOut": "$$ d = \\sqrt{(-2 - 6)^2 + (2 - 2)^2} $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: Calculate the squares and find the final distance.",
        "workingOut": "$$ d = \\sqrt{-8^2 + 0^2} = \\sqrt{64 + 0} = \\sqrt{64} = 8 \\text{ units} $$",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              -4,
              4,
              8,
              0
            ],
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-3.5, 0], [7.5, 0]], {strokeColor: 'black'});\nboard.create('arrow', [[0, 0.5], [0, 3.5]], {strokeColor: 'black'});\nboard.create('text', [7, 0.5, 'x'], {fontSize: 12});\nboard.create('text', [0.5, 3, 'y'], {fontSize: 12});\nboard.create('point', [6, 2], {name:'(6, 2)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [-2, 2], {name:'(-2, 2)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('segment', [[6, 2], [-2, 2]], {strokeColor:'blue', strokeWidth:2});\nboard.create('segment', [[6, 2], [-2, 2]], {strokeColor:'gray', dash:2});\nboard.create('segment', [[-2, 2], [-2, 2]], {strokeColor:'gray', dash:2});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11a-q1c",
    "topicId": "y9-11a",
    "c": "11A",
    "t": "Distance between two points",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the distance between the points \\((-3, 1)\\) and \\((-3, 11)\\).",
    "opts": [
      "\\(9\\)",
      "\\(11\\)",
      "\\(8\\)",
      "\\(10\\)"
    ],
    "a": 3,
    "answer": "1",
    "hint": "Notice that the \\(x\\)-coordinates are identical. Subtract the smaller \\(y\\)-coordinate from the larger one.",
    "solution": "Since the \\(x\\)-coordinates are the same, the distance is the absolute difference of the \\(y\\)-coordinates: \\(|11 - 1| = 10\\).",
    "solutionSteps": [
      {
        "explanation": "Step 1: Identify the coordinates of the two points.",
        "workingOut": "$$ (x_1, y_1) = (-3, 1) \\quad \\text{and} \\quad (x_2, y_2) = (-3, 11) $$",
        "graphData": null
      },
      {
        "explanation": "Step 2: State the distance formula based on Pythagoras' theorem.",
        "workingOut": "$$ d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} $$",
        "graphData": null
      },
      {
        "explanation": "Step 3: Substitute the coordinates into the formula to find the horizontal and vertical differences.",
        "workingOut": "$$ d = \\sqrt{(-3 - -3)^2 + (11 - 1)^2} $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: Calculate the squares and find the final distance.",
        "workingOut": "$$ d = \\sqrt{0^2 + 10^2} = \\sqrt{0 + 100} = \\sqrt{100} = 10 \\text{ units} $$",
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
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-4.5, 0], [-1.5, 0]], {strokeColor: 'black'});\nboard.create('arrow', [[0, -0.5], [0, 12.5]], {strokeColor: 'black'});\nboard.create('text', [-2, 0.5, 'x'], {fontSize: 12});\nboard.create('text', [0.5, 12, 'y'], {fontSize: 12});\nboard.create('point', [-3, 1], {name:'(-3, 1)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [-3, 11], {name:'(-3, 11)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('segment', [[-3, 1], [-3, 11]], {strokeColor:'blue', strokeWidth:2});\nboard.create('segment', [[-3, 1], [-3, 1]], {strokeColor:'gray', dash:2});\nboard.create('segment', [[-3, 1], [-3, 11]], {strokeColor:'gray', dash:2});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11a-q1d",
    "topicId": "y9-11a",
    "c": "11A",
    "t": "Distance between two points",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the distance between the points \\((-1, -6)\\) and \\((-1, 7)\\).",
    "opts": [
      "\\(15\\)",
      "\\(11\\)",
      "\\(9\\)",
      "\\(13\\)"
    ],
    "a": 3,
    "answer": "2",
    "hint": "Subtract the smaller \\(y\\)-coordinate from the larger \\(y\\)-coordinate.",
    "solution": "Since the \\(x\\)-coordinates are the same, the distance is the absolute difference of the \\(y\\)-coordinates: \\(|7 - (-6)| = 13\\).",
    "solutionSteps": [
      {
        "explanation": "Step 1: Identify the coordinates of the two points.",
        "workingOut": "$$ (x_1, y_1) = (-1, -6) \\quad \\text{and} \\quad (x_2, y_2) = (-1, 7) $$",
        "graphData": null
      },
      {
        "explanation": "Step 2: State the distance formula based on Pythagoras' theorem.",
        "workingOut": "$$ d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} $$",
        "graphData": null
      },
      {
        "explanation": "Step 3: Substitute the coordinates into the formula to find the horizontal and vertical differences.",
        "workingOut": "$$ d = \\sqrt{(-1 - -1)^2 + (7 - -6)^2} $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: Calculate the squares and find the final distance.",
        "workingOut": "$$ d = \\sqrt{0^2 + 13^2} = \\sqrt{0 + 169} = \\sqrt{169} = 13 \\text{ units} $$",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              -3,
              9.6,
              1,
              -8.6
            ],
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-2.5, 0], [0.5, 0]], {strokeColor: 'black'});\nboard.create('arrow', [[0, -8.1], [0, 9.1]], {strokeColor: 'black'});\nboard.create('text', [0, 0.5, 'x'], {fontSize: 12});\nboard.create('text', [0.5, 8.6, 'y'], {fontSize: 12});\nboard.create('point', [-1, -6], {name:'(-1, -6)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [-1, 7], {name:'(-1, 7)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('segment', [[-1, -6], [-1, 7]], {strokeColor:'blue', strokeWidth:2});\nboard.create('segment', [[-1, -6], [-1, -6]], {strokeColor:'gray', dash:2});\nboard.create('segment', [[-1, -6], [-1, 7]], {strokeColor:'gray', dash:2});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11a-q2a",
    "topicId": "y9-11a",
    "c": "11A",
    "t": "Distance between two points",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the distance between the points \\((1, 2)\\) and \\((7, 10)\\).",
    "opts": [
      "\\(8\\)",
      "\\(10\\)",
      "\\(11\\)",
      "\\(9\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Apply the distance formula: \\(d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}\\).",
    "solution": "Using the distance formula: \\(d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} = \\sqrt{(7 - 1)^2 + (10 - 2)^2} = \\sqrt{6^2 + 8^2} = \\sqrt{100} = 10\\).",
    "solutionSteps": [
      {
        "explanation": "Step 1: Identify the coordinates of the two points.",
        "workingOut": "$$ (x_1, y_1) = (1, 2) \\quad \\text{and} \\quad (x_2, y_2) = (7, 10) $$",
        "graphData": null
      },
      {
        "explanation": "Step 2: State the distance formula based on Pythagoras' theorem.",
        "workingOut": "$$ d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} $$",
        "graphData": null
      },
      {
        "explanation": "Step 3: Substitute the coordinates into the formula to find the horizontal and vertical differences.",
        "workingOut": "$$ d = \\sqrt{(7 - 1)^2 + (10 - 2)^2} $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: Calculate the squares and find the final distance.",
        "workingOut": "$$ d = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10 \\text{ units} $$",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              -1,
              12,
              9,
              0
            ],
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-0.5, 0], [8.5, 0]], {strokeColor: 'black'});\nboard.create('arrow', [[0, 0.5], [0, 11.5]], {strokeColor: 'black'});\nboard.create('text', [8, 0.5, 'x'], {fontSize: 12});\nboard.create('text', [0.5, 11, 'y'], {fontSize: 12});\nboard.create('point', [1, 2], {name:'(1, 2)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [7, 10], {name:'(7, 10)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('segment', [[1, 2], [7, 10]], {strokeColor:'blue', strokeWidth:2});\nboard.create('segment', [[1, 2], [7, 2]], {strokeColor:'gray', dash:2});\nboard.create('segment', [[7, 2], [7, 10]], {strokeColor:'gray', dash:2});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11a-q2b",
    "topicId": "y9-11a",
    "c": "11A",
    "t": "Distance between two points",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the distance between the points \\((2, 6)\\) and \\((5, 2)\\).",
    "opts": [
      "\\(3\\)",
      "\\(4\\)",
      "\\(5\\)",
      "\\(6\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Apply the distance formula: \\(d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}\\).",
    "solution": "Using the distance formula: \\(d = \\sqrt{(5 - 2)^2 + (2 - 6)^2} = \\sqrt{3^2 + (-4)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5\\).",
    "solutionSteps": [
      {
        "explanation": "Step 1: Identify the coordinates of the two points.",
        "workingOut": "$$ (x_1, y_1) = (2, 6) \\quad \\text{and} \\quad (x_2, y_2) = (5, 2) $$",
        "graphData": null
      },
      {
        "explanation": "Step 2: State the distance formula based on Pythagoras' theorem.",
        "workingOut": "$$ d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} $$",
        "graphData": null
      },
      {
        "explanation": "Step 3: Substitute the coordinates into the formula to find the horizontal and vertical differences.",
        "workingOut": "$$ d = \\sqrt{(5 - 2)^2 + (2 - 6)^2} $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: Calculate the squares and find the final distance.",
        "workingOut": "$$ d = \\sqrt{3^2 + -4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5 \\text{ units} $$",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              0,
              8,
              7,
              0
            ],
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[0.5, 0], [6.5, 0]], {strokeColor: 'black'});\nboard.create('arrow', [[0, 0.5], [0, 7.5]], {strokeColor: 'black'});\nboard.create('text', [6, 0.5, 'x'], {fontSize: 12});\nboard.create('text', [0.5, 7, 'y'], {fontSize: 12});\nboard.create('point', [2, 6], {name:'(2, 6)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [5, 2], {name:'(5, 2)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('segment', [[2, 6], [5, 2]], {strokeColor:'blue', strokeWidth:2});\nboard.create('segment', [[2, 6], [5, 6]], {strokeColor:'gray', dash:2});\nboard.create('segment', [[5, 6], [5, 2]], {strokeColor:'gray', dash:2});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11a-q2c",
    "topicId": "y9-11a",
    "c": "11A",
    "t": "Distance between two points",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the distance between the points \\((-2, 1)\\) and \\((3, 13)\\).",
    "opts": [
      "\\(11\\)",
      "\\(9\\)",
      "\\(15\\)",
      "\\(13\\)"
    ],
    "a": 3,
    "answer": "2",
    "hint": "Be careful with double negatives: \\(3 - (-2) = 3 + 2 = 5\\).",
    "solution": "Using the distance formula: \\(d = \\sqrt{(3 - (-2))^2 + (13 - 1)^2} = \\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13\\).",
    "solutionSteps": [
      {
        "explanation": "Step 1: Identify the coordinates of the two points.",
        "workingOut": "$$ (x_1, y_1) = (-2, 1) \\quad \\text{and} \\quad (x_2, y_2) = (3, 13) $$",
        "graphData": null
      },
      {
        "explanation": "Step 2: State the distance formula based on Pythagoras' theorem.",
        "workingOut": "$$ d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} $$",
        "graphData": null
      },
      {
        "explanation": "Step 3: Substitute the coordinates into the formula to find the horizontal and vertical differences.",
        "workingOut": "$$ d = \\sqrt{(3 - -2)^2 + (13 - 1)^2} $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: Calculate the squares and find the final distance.",
        "workingOut": "$$ d = \\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13 \\text{ units} $$",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              -4,
              15.4,
              5,
              -1.4000000000000004
            ],
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-3.5, 0], [4.5, 0]], {strokeColor: 'black'});\nboard.create('arrow', [[0, -0.9000000000000004], [0, 14.9]], {strokeColor: 'black'});\nboard.create('text', [4, 0.5, 'x'], {fontSize: 12});\nboard.create('text', [0.5, 14.4, 'y'], {fontSize: 12});\nboard.create('point', [-2, 1], {name:'(-2, 1)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [3, 13], {name:'(3, 13)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('segment', [[-2, 1], [3, 13]], {strokeColor:'blue', strokeWidth:2});\nboard.create('segment', [[-2, 1], [3, 1]], {strokeColor:'gray', dash:2});\nboard.create('segment', [[3, 1], [3, 13]], {strokeColor:'gray', dash:2});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11a-q2d",
    "topicId": "y9-11a",
    "c": "11A",
    "t": "Distance between two points",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the distance between the points \\((-3, -5)\\) and \\((5, 10)\\).",
    "opts": [
      "\\(13\\)",
      "\\(17\\)",
      "\\(15\\)",
      "\\(19\\)"
    ],
    "a": 1,
    "answer": "2",
    "hint": "Use \\(d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}\\) and simplify double negatives.",
    "solution": "Using the distance formula: \\(d = \\sqrt{(5 - (-3))^2 + (10 - (-5))^2} = \\sqrt{8^2 + 15^2} = \\sqrt{64 + 225} = \\sqrt{289} = 17\\).",
    "solutionSteps": [
      {
        "explanation": "Step 1: Identify the coordinates of the two points.",
        "workingOut": "$$ (x_1, y_1) = (-3, -5) \\quad \\text{and} \\quad (x_2, y_2) = (5, 10) $$",
        "graphData": null
      },
      {
        "explanation": "Step 2: State the distance formula based on Pythagoras' theorem.",
        "workingOut": "$$ d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} $$",
        "graphData": null
      },
      {
        "explanation": "Step 3: Substitute the coordinates into the formula to find the horizontal and vertical differences.",
        "workingOut": "$$ d = \\sqrt{(5 - -3)^2 + (10 - -5)^2} $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: Calculate the squares and find the final distance.",
        "workingOut": "$$ d = \\sqrt{8^2 + 15^2} = \\sqrt{64 + 225} = \\sqrt{289} = 17 \\text{ units} $$",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              -5,
              13,
              7,
              -8
            ],
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-4.5, 0], [6.5, 0]], {strokeColor: 'black'});\nboard.create('arrow', [[0, -7.5], [0, 12.5]], {strokeColor: 'black'});\nboard.create('text', [6, 0.5, 'x'], {fontSize: 12});\nboard.create('text', [0.5, 12, 'y'], {fontSize: 12});\nboard.create('point', [-3, -5], {name:'(-3, -5)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [5, 10], {name:'(5, 10)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('segment', [[-3, -5], [5, 10]], {strokeColor:'blue', strokeWidth:2});\nboard.create('segment', [[-3, -5], [5, -5]], {strokeColor:'gray', dash:2});\nboard.create('segment', [[5, -5], [5, 10]], {strokeColor:'gray', dash:2});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11a-q2e",
    "topicId": "y9-11a",
    "c": "11A",
    "t": "Distance between two points",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the distance between the points \\((-2, -4)\\) and \\((0, -2)\\).",
    "opts": [
      "\\(2\\sqrt{2}\\)",
      "\\(3\\sqrt{2}\\)",
      "\\(4\\sqrt{2}\\)",
      "\\(\\sqrt{2}\\)"
    ],
    "a": 0,
    "answer": "1",
    "hint": "Express the resulting surd in its simplest form.",
    "solution": "Using the distance formula: \\(d = \\sqrt{(0 - (-2))^2 + (-2 - (-4))^2} = \\sqrt{2^2 + 2^2} = \\sqrt{8} = 2\\sqrt{2}\\).",
    "solutionSteps": [
      {
        "explanation": "Step 1: Identify the coordinates of the two points.",
        "workingOut": "$$ (x_1, y_1) = (-2, -4) \\quad \\text{and} \\quad (x_2, y_2) = (0, -2) $$",
        "graphData": null
      },
      {
        "explanation": "Step 2: State the distance formula based on Pythagoras' theorem.",
        "workingOut": "$$ d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} $$",
        "graphData": null
      },
      {
        "explanation": "Step 3: Substitute the coordinates into the formula to find the horizontal and vertical differences.",
        "workingOut": "$$ d = \\sqrt{(0 - -2)^2 + (-2 - -4)^2} $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: Calculate the squares and find the final distance.",
        "workingOut": "$$ d = \\sqrt{2^2 + 2^2} = \\sqrt{4 + 4} = \\sqrt{8} \\text{ units} $$",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              -4,
              0,
              2,
              -6
            ],
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-3.5, 0], [1.5, 0]], {strokeColor: 'black'});\nboard.create('arrow', [[0, -5.5], [0, -0.5]], {strokeColor: 'black'});\nboard.create('text', [1, 0.5, 'x'], {fontSize: 12});\nboard.create('text', [0.5, -1, 'y'], {fontSize: 12});\nboard.create('point', [-2, -4], {name:'(-2, -4)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [0, -2], {name:'(0, -2)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('segment', [[-2, -4], [0, -2]], {strokeColor:'blue', strokeWidth:2});\nboard.create('segment', [[-2, -4], [0, -4]], {strokeColor:'gray', dash:2});\nboard.create('segment', [[0, -4], [0, -2]], {strokeColor:'gray', dash:2});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11a-q2f",
    "topicId": "y9-11a",
    "c": "11A",
    "t": "Distance between two points",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the distance between the points \\((-4, 2)\\) and \\((2, -1)\\).",
    "opts": [
      "\\(4\\sqrt{5}\\)",
      "\\(2\\sqrt{5}\\)",
      "\\(3\\sqrt{5}\\)",
      "\\(5\\sqrt{5}\\)"
    ],
    "a": 2,
    "answer": "1",
    "hint": "Express the resulting surd in its simplest form: \\(\\sqrt{45} = \\sqrt{9 \\times 5}\\).",
    "solution": "Using the distance formula: \\(d = \\sqrt{(2 - (-4))^2 + (-1 - 2)^2} = \\sqrt{6^2 + (-3)^2} = \\sqrt{36 + 9} = \\sqrt{45} = 3\\sqrt{5}\\).",
    "solutionSteps": [
      {
        "explanation": "Step 1: Identify the coordinates of the two points.",
        "workingOut": "$$ (x_1, y_1) = (-4, 2) \\quad \\text{and} \\quad (x_2, y_2) = (2, -1) $$",
        "graphData": null
      },
      {
        "explanation": "Step 2: State the distance formula based on Pythagoras' theorem.",
        "workingOut": "$$ d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} $$",
        "graphData": null
      },
      {
        "explanation": "Step 3: Substitute the coordinates into the formula to find the horizontal and vertical differences.",
        "workingOut": "$$ d = \\sqrt{(2 - -4)^2 + (-1 - 2)^2} $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: Calculate the squares and find the final distance.",
        "workingOut": "$$ d = \\sqrt{6^2 + -3^2} = \\sqrt{36 + 9} = \\sqrt{45} \\text{ units} $$",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              -6,
              4,
              4,
              -3
            ],
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-5.5, 0], [3.5, 0]], {strokeColor: 'black'});\nboard.create('arrow', [[0, -2.5], [0, 3.5]], {strokeColor: 'black'});\nboard.create('text', [3, 0.5, 'x'], {fontSize: 12});\nboard.create('text', [0.5, 3, 'y'], {fontSize: 12});\nboard.create('point', [-4, 2], {name:'(-4, 2)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [2, -1], {name:'(2, -1)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('segment', [[-4, 2], [2, -1]], {strokeColor:'blue', strokeWidth:2});\nboard.create('segment', [[-4, 2], [2, 2]], {strokeColor:'gray', dash:2});\nboard.create('segment', [[2, 2], [2, -1]], {strokeColor:'gray', dash:2});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11a-q2g",
    "topicId": "y9-11a",
    "c": "11A",
    "t": "Distance between two points",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the distance between the points \\((1, -2)\\) and \\((5, -4)\\).",
    "opts": [
      "\\(\\sqrt{5}\\)",
      "\\(4\\sqrt{5}\\)",
      "\\(3\\sqrt{5}\\)",
      "\\(2\\sqrt{5}\\)"
    ],
    "a": 3,
    "answer": "1",
    "hint": "Apply the distance formula and simplify the surd.",
    "solution": "Using the distance formula: \\(d = \\sqrt{(5 - 1)^2 + (-4 - (-2))^2} = \\sqrt{4^2 + (-2)^2} = \\sqrt{16 + 4} = \\sqrt{20} = 2\\sqrt{5}\\).",
    "solutionSteps": [
      {
        "explanation": "Step 1: Identify the coordinates of the two points.",
        "workingOut": "$$ (x_1, y_1) = (1, -2) \\quad \\text{and} \\quad (x_2, y_2) = (5, -4) $$",
        "graphData": null
      },
      {
        "explanation": "Step 2: State the distance formula based on Pythagoras' theorem.",
        "workingOut": "$$ d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} $$",
        "graphData": null
      },
      {
        "explanation": "Step 3: Substitute the coordinates into the formula to find the horizontal and vertical differences.",
        "workingOut": "$$ d = \\sqrt{(5 - 1)^2 + (-4 - -2)^2} $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: Calculate the squares and find the final distance.",
        "workingOut": "$$ d = \\sqrt{4^2 + -2^2} = \\sqrt{16 + 4} = \\sqrt{20} \\text{ units} $$",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              -1,
              0,
              7,
              -6
            ],
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-0.5, 0], [6.5, 0]], {strokeColor: 'black'});\nboard.create('arrow', [[0, -5.5], [0, -0.5]], {strokeColor: 'black'});\nboard.create('text', [6, 0.5, 'x'], {fontSize: 12});\nboard.create('text', [0.5, -1, 'y'], {fontSize: 12});\nboard.create('point', [1, -2], {name:'(1, -2)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [5, -4], {name:'(5, -4)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('segment', [[1, -2], [5, -4]], {strokeColor:'blue', strokeWidth:2});\nboard.create('segment', [[1, -2], [5, -2]], {strokeColor:'gray', dash:2});\nboard.create('segment', [[5, -2], [5, -4]], {strokeColor:'gray', dash:2});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11a-q2h",
    "topicId": "y9-11a",
    "c": "11A",
    "t": "Distance between two points",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the distance between the points \\((-5, -2)\\) and \\((1, 0)\\).",
    "opts": [
      "\\(3\\sqrt{10}\\)",
      "\\(4\\sqrt{10}\\)",
      "\\(\\sqrt{10}\\)",
      "\\(2\\sqrt{10}\\)"
    ],
    "a": 3,
    "answer": "1",
    "hint": "Apply the distance formula and simplify the surd.",
    "solution": "Using the distance formula: \\(d = \\sqrt{(1 - (-5))^2 + (0 - (-2))^2} = \\sqrt{6^2 + 2^2} = \\sqrt{36 + 4} = \\sqrt{40} = 2\\sqrt{10}\\).",
    "solutionSteps": [
      {
        "explanation": "Step 1: Identify the coordinates of the two points.",
        "workingOut": "$$ (x_1, y_1) = (-5, -2) \\quad \\text{and} \\quad (x_2, y_2) = (1, 0) $$",
        "graphData": null
      },
      {
        "explanation": "Step 2: State the distance formula based on Pythagoras' theorem.",
        "workingOut": "$$ d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} $$",
        "graphData": null
      },
      {
        "explanation": "Step 3: Substitute the coordinates into the formula to find the horizontal and vertical differences.",
        "workingOut": "$$ d = \\sqrt{(1 - -5)^2 + (0 - -2)^2} $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: Calculate the squares and find the final distance.",
        "workingOut": "$$ d = \\sqrt{6^2 + 2^2} = \\sqrt{36 + 4} = \\sqrt{40} \\text{ units} $$",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              -7,
              2,
              3,
              -4
            ],
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-6.5, 0], [2.5, 0]], {strokeColor: 'black'});\nboard.create('arrow', [[0, -3.5], [0, 1.5]], {strokeColor: 'black'});\nboard.create('text', [2, 0.5, 'x'], {fontSize: 12});\nboard.create('text', [0.5, 1, 'y'], {fontSize: 12});\nboard.create('point', [-5, -2], {name:'(-5, -2)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [1, 0], {name:'(1, 0)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('segment', [[-5, -2], [1, 0]], {strokeColor:'blue', strokeWidth:2});\nboard.create('segment', [[-5, -2], [1, -2]], {strokeColor:'gray', dash:2});\nboard.create('segment', [[1, -2], [1, 0]], {strokeColor:'gray', dash:2});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11a-q3a",
    "topicId": "y9-11a",
    "c": "11A",
    "t": "Distance between two points",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "How far is the point \\((3, 2)\\) from the origin?",
    "opts": [
      "\\(\\sqrt{13}\\)",
      "\\(\\sqrt{14}\\)",
      "\\(\\sqrt{16}\\)",
      "\\(\\sqrt{15}\\)"
    ],
    "a": 0,
    "answer": "2",
    "hint": "Use \\(d = \\sqrt{x^2 + y^2}\\) where \\(x = 3\\) and \\(y = 2\\).",
    "solution": "The origin has coordinates \\((0, 0)\\). The distance to the origin is given by \\(d = \\sqrt{x^2 + y^2} = \\sqrt{3^2 + 2^2} = \\sqrt{9 + 4} = \\sqrt{13}\\).",
    "solutionSteps": [
      {
        "explanation": "Step 1: Identify the coordinates of the two points.",
        "workingOut": "$$ (x_1, y_1) = (3, 2) \\quad \\text{and} \\quad (x_2, y_2) = (0, 0) $$",
        "graphData": null
      },
      {
        "explanation": "Step 2: State the distance formula based on Pythagoras' theorem.",
        "workingOut": "$$ d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} $$",
        "graphData": null
      },
      {
        "explanation": "Step 3: Substitute the coordinates into the formula to find the horizontal and vertical differences.",
        "workingOut": "$$ d = \\sqrt{(0 - 3)^2 + (0 - 2)^2} $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: Calculate the squares and find the final distance.",
        "workingOut": "$$ d = \\sqrt{-3^2 + -2^2} = \\sqrt{9 + 4} = \\sqrt{13} \\text{ units} $$",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              -2,
              4,
              5,
              -2
            ],
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-1.5, 0], [4.5, 0]], {strokeColor: 'black'});\nboard.create('arrow', [[0, -1.5], [0, 3.5]], {strokeColor: 'black'});\nboard.create('text', [4, 0.5, 'x'], {fontSize: 12});\nboard.create('text', [0.5, 3, 'y'], {fontSize: 12});\nboard.create('point', [3, 2], {name:'(3, 2)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [0, 0], {name:'O(0, 0)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('segment', [[3, 2], [0, 0]], {strokeColor:'blue', strokeWidth:2});\nboard.create('segment', [[3, 2], [0, 2]], {strokeColor:'gray', dash:2});\nboard.create('segment', [[0, 2], [0, 0]], {strokeColor:'gray', dash:2});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11a-q3b",
    "topicId": "y9-11a",
    "c": "11A",
    "t": "Distance between two points",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "How far is the point \\((-4, 7)\\) from the origin?",
    "opts": [
      "\\(\\sqrt{66}\\)",
      "\\(\\sqrt{65}\\)",
      "\\(\\sqrt{68}\\)",
      "\\(\\sqrt{67}\\)"
    ],
    "a": 1,
    "answer": "2",
    "hint": "Use \\(d = \\sqrt{x^2 + y^2}\\). Note that squaring a negative number results in a positive number.",
    "solution": "The distance from the origin is \\(d = \\sqrt{(-4)^2 + 7^2} = \\sqrt{16 + 49} = \\sqrt{65}\\).",
    "solutionSteps": [
      {
        "explanation": "Step 1: Identify the coordinates of the two points.",
        "workingOut": "$$ (x_1, y_1) = (-4, 7) \\quad \\text{and} \\quad (x_2, y_2) = (0, 0) $$",
        "graphData": null
      },
      {
        "explanation": "Step 2: State the distance formula based on Pythagoras' theorem.",
        "workingOut": "$$ d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} $$",
        "graphData": null
      },
      {
        "explanation": "Step 3: Substitute the coordinates into the formula to find the horizontal and vertical differences.",
        "workingOut": "$$ d = \\sqrt{(0 - -4)^2 + (0 - 7)^2} $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: Calculate the squares and find the final distance.",
        "workingOut": "$$ d = \\sqrt{4^2 + -7^2} = \\sqrt{16 + 49} = \\sqrt{65} \\text{ units} $$",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              -6,
              9,
              2,
              -2
            ],
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-5.5, 0], [1.5, 0]], {strokeColor: 'black'});\nboard.create('arrow', [[0, -1.5], [0, 8.5]], {strokeColor: 'black'});\nboard.create('text', [1, 0.5, 'x'], {fontSize: 12});\nboard.create('text', [0.5, 8, 'y'], {fontSize: 12});\nboard.create('point', [-4, 7], {name:'(-4, 7)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [0, 0], {name:'O(0, 0)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('segment', [[-4, 7], [0, 0]], {strokeColor:'blue', strokeWidth:2});\nboard.create('segment', [[-4, 7], [0, 7]], {strokeColor:'gray', dash:2});\nboard.create('segment', [[0, 7], [0, 0]], {strokeColor:'gray', dash:2});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11a-q3c",
    "topicId": "y9-11a",
    "c": "11A",
    "t": "Distance between two points",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "How far is the point \\((-1, 5)\\) from the origin?",
    "opts": [
      "\\(\\sqrt{29}\\)",
      "\\(\\sqrt{26}\\)",
      "\\(\\sqrt{27}\\)",
      "\\(\\sqrt{28}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Use \\(d = \\sqrt{x^2 + y^2}\\).",
    "solution": "The distance from the origin is \\(d = \\sqrt{(-1)^2 + 5^2} = \\sqrt{1 + 25} = \\sqrt{26}\\).",
    "solutionSteps": [
      {
        "explanation": "Step 1: Identify the coordinates of the two points.",
        "workingOut": "$$ (x_1, y_1) = (-1, 5) \\quad \\text{and} \\quad (x_2, y_2) = (0, 0) $$",
        "graphData": null
      },
      {
        "explanation": "Step 2: State the distance formula based on Pythagoras' theorem.",
        "workingOut": "$$ d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} $$",
        "graphData": null
      },
      {
        "explanation": "Step 3: Substitute the coordinates into the formula to find the horizontal and vertical differences.",
        "workingOut": "$$ d = \\sqrt{(0 - -1)^2 + (0 - 5)^2} $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: Calculate the squares and find the final distance.",
        "workingOut": "$$ d = \\sqrt{1^2 + -5^2} = \\sqrt{1 + 25} = \\sqrt{26} \\text{ units} $$",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              -3,
              7,
              2,
              -2
            ],
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-2.5, 0], [1.5, 0]], {strokeColor: 'black'});\nboard.create('arrow', [[0, -1.5], [0, 6.5]], {strokeColor: 'black'});\nboard.create('text', [1, 0.5, 'x'], {fontSize: 12});\nboard.create('text', [0.5, 6, 'y'], {fontSize: 12});\nboard.create('point', [-1, 5], {name:'(-1, 5)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [0, 0], {name:'O(0, 0)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('segment', [[-1, 5], [0, 0]], {strokeColor:'blue', strokeWidth:2});\nboard.create('segment', [[-1, 5], [0, 5]], {strokeColor:'gray', dash:2});\nboard.create('segment', [[0, 5], [0, 0]], {strokeColor:'gray', dash:2});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11a-q3d",
    "topicId": "y9-11a",
    "c": "11A",
    "t": "Distance between two points",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "How far is the point \\((-3, -5)\\) from the origin?",
    "opts": [
      "\\(\\sqrt{34}\\)",
      "\\(\\sqrt{35}\\)",
      "\\(\\sqrt{36}\\)",
      "\\(\\sqrt{37}\\)"
    ],
    "a": 0,
    "answer": "2",
    "hint": "Use \\(d = \\sqrt{x^2 + y^2}\\) and calculate the squares of both numbers.",
    "solution": "The distance from the origin is \\(d = \\sqrt{(-3)^2 + (-5)^2} = \\sqrt{9 + 25} = \\sqrt{34}\\).",
    "solutionSteps": [
      {
        "explanation": "Step 1: Identify the coordinates of the two points.",
        "workingOut": "$$ (x_1, y_1) = (-3, -5) \\quad \\text{and} \\quad (x_2, y_2) = (0, 0) $$",
        "graphData": null
      },
      {
        "explanation": "Step 2: State the distance formula based on Pythagoras' theorem.",
        "workingOut": "$$ d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} $$",
        "graphData": null
      },
      {
        "explanation": "Step 3: Substitute the coordinates into the formula to find the horizontal and vertical differences.",
        "workingOut": "$$ d = \\sqrt{(0 - -3)^2 + (0 - -5)^2} $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: Calculate the squares and find the final distance.",
        "workingOut": "$$ d = \\sqrt{3^2 + 5^2} = \\sqrt{9 + 25} = \\sqrt{34} \\text{ units} $$",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              -5,
              2,
              2,
              -7
            ],
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-4.5, 0], [1.5, 0]], {strokeColor: 'black'});\nboard.create('arrow', [[0, -6.5], [0, 1.5]], {strokeColor: 'black'});\nboard.create('text', [1, 0.5, 'x'], {fontSize: 12});\nboard.create('text', [0.5, 1, 'y'], {fontSize: 12});\nboard.create('point', [-3, -5], {name:'(-3, -5)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [0, 0], {name:'O(0, 0)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('segment', [[-3, -5], [0, 0]], {strokeColor:'blue', strokeWidth:2});\nboard.create('segment', [[-3, -5], [0, -5]], {strokeColor:'gray', dash:2});\nboard.create('segment', [[0, -5], [0, 0]], {strokeColor:'gray', dash:2});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11a-q4",
    "topicId": "y9-11a",
    "c": "11A",
    "t": "Distance between two points",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Which of the two points \\(M(6, 9)\\) and \\(N(9, -1)\\) is closer to \\(P(1, 2)\\)?",
    "opts": [
      "\\(\\dfrac{12}{5}\\)",
      "\\(\\dfrac{13}{6}\\)",
      "\\(N\\)",
      "\\(N + 1\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Calculate the distance from \\(P\\) to both points, and determine which distance is smaller.",
    "solution": "Find the distances \\(PM\\) and \\(PN\\):\n- \\(PM = \\sqrt{(6-1)^2 + (9-2)^2} = \\sqrt{5^2 + 7^2} = \\sqrt{74}\\)\n- \\(PN = \\sqrt{(9-1)^2 + (-1-2)^2} = \\sqrt{8^2 + (-3)^2} = \\sqrt{73}\\)\nSince \\(\\sqrt{73} < \\sqrt{74}\\), point \\(N\\) is closer.",
    "solutionSteps": [
      {
        "explanation": "Step 1: Identify the coordinates of the given points.",
        "workingOut": "$$ M(6, 9), \\; N(9, -1), \\; P(1, 2) $$",
        "graphData": null
      },
      {
        "explanation": "Step 2: Use the distance formula \\( d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} \\) to calculate the required side lengths.",
        "workingOut": "The distance formula calculates the length of the line segment between two points on the Cartesian plane.",
        "graphData": null
      },
      {
        "explanation": "Step 3: Substitute the coordinates and calculate the lengths.",
        "workingOut": "$$ \\begin{aligned} MN &= \\sqrt{3^2 + -10^2} = \\sqrt{9 + 100} = \\sqrt{109} \\text{ units} \\\\\\\\ MP &= \\sqrt{-5^2 + -7^2} = \\sqrt{25 + 49} = \\sqrt{74} \\text{ units} \\\\\\\\ NP &= \\sqrt{-8^2 + 3^2} = \\sqrt{64 + 9} = \\sqrt{73} \\text{ units} \\end{aligned} $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: Answer the specific question asked.",
        "workingOut": "2",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              -1,
              11,
              11,
              -3
            ],
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-0.5, 0], [10.5, 0]], {strokeColor: 'black'});\nboard.create('arrow', [[0, -2.5], [0, 10.5]], {strokeColor: 'black'});\nboard.create('text', [10, 0.5, 'x'], {fontSize: 12});\nboard.create('text', [0.5, 10, 'y'], {fontSize: 12});\nboard.create('point', [6, 9], {name:'M(6, 9)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [9, -1], {name:'N(9, -1)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [1, 2], {name:'P(1, 2)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('polygon', [[6, 9], [9, -1], [1, 2]], {fillColor:'#3b82f6', fillOpacity:0.1, borders:{strokeColor:'blue', strokeWidth:2}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11a-q5",
    "topicId": "y9-11a",
    "c": "11A",
    "t": "Distance between two points",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Show that the point \\(A(5, 3)\\) is equidistant (that is, the same distance) from the points \\(B(2, -1)\\) and \\(C(9, 6)\\).",
    "answer": "AB = AC = 5",
    "hint": "Find the lengths of \\(AB\\) and \\(AC\\) and show that they are equal.",
    "solution": "AB = AC = 5",
    "solutionSteps": [
      {
        "explanation": "Step 1: Identify the coordinates of the given points.",
        "workingOut": "$$ A(5, 3), \\; B(2, -1), \\; C(9, 6) $$",
        "graphData": null
      },
      {
        "explanation": "Step 2: Use the distance formula \\( d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} \\) to calculate the required side lengths.",
        "workingOut": "The distance formula calculates the length of the line segment between two points on the Cartesian plane.",
        "graphData": null
      },
      {
        "explanation": "Step 3: Substitute the coordinates and calculate the lengths.",
        "workingOut": "$$ \\begin{aligned} AB &= \\sqrt{-3^2 + -4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5 \\text{ units} \\\\\\\\ AC &= \\sqrt{4^2 + 3^2} = \\sqrt{16 + 9} = \\sqrt{25} = 5 \\text{ units} \\\\\\\\ BC &= \\sqrt{7^2 + 7^2} = \\sqrt{49 + 49} = \\sqrt{98} \\text{ units} \\end{aligned} $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: Answer the specific question asked.",
        "workingOut": "AB = AC = 5",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              0,
              8,
              11,
              -3
            ],
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[0.5, 0], [10.5, 0]], {strokeColor: 'black'});\nboard.create('arrow', [[0, -2.5], [0, 7.5]], {strokeColor: 'black'});\nboard.create('text', [10, 0.5, 'x'], {fontSize: 12});\nboard.create('text', [0.5, 7, 'y'], {fontSize: 12});\nboard.create('point', [5, 3], {name:'A(5, 3)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [2, -1], {name:'B(2, -1)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [9, 6], {name:'C(9, 6)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('polygon', [[5, 3], [2, -1], [9, 6]], {fillColor:'#3b82f6', fillOpacity:0.1, borders:{strokeColor:'blue', strokeWidth:2}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-11a-q6a",
    "topicId": "y9-11a",
    "c": "11A",
    "t": "Distance between two points",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Given the three points \\(A(0, 0)\\), \\(B(5, 12)\\) and \\(C(10, 0)\\), calculate the distance \\(AB\\).",
    "opts": [
      "\\(9\\)",
      "\\(15\\)",
      "\\(13\\)",
      "\\(11\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Apply the distance formula to coordinates \\(A(0, 0)\\) and \\(B(5, 12)\\).",
    "solution": "Use the distance formula for points \\(A(0,0)\\) and \\(B(5,12)\\):\n\\(AB = \\sqrt{(5 - 0)^2 + (12 - 0)^2} = \\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13\\).",
    "solutionSteps": [
      {
        "explanation": "Step 1: Identify the coordinates of the given points.",
        "workingOut": "$$ A(0, 0), \\; B(5, 12), \\; C(10, 0) $$",
        "graphData": null
      },
      {
        "explanation": "Step 2: Use the distance formula \\( d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} \\) to calculate the required side lengths.",
        "workingOut": "The distance formula calculates the length of the line segment between two points on the Cartesian plane.",
        "graphData": null
      },
      {
        "explanation": "Step 3: Substitute the coordinates and calculate the lengths.",
        "workingOut": "$$ \\begin{aligned} AB &= \\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13 \\text{ units} \\\\\\\\ AC &= \\sqrt{10^2 + 0^2} = \\sqrt{100 + 0} = \\sqrt{100} = 10 \\text{ units} \\\\\\\\ BC &= \\sqrt{5^2 + -12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13 \\text{ units} \\end{aligned} $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: Answer the specific question asked.",
        "workingOut": "2",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              -2,
              14.4,
              12,
              -2.4000000000000004
            ],
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-1.5, 0], [11.5, 0]], {strokeColor: 'black'});\nboard.create('arrow', [[0, -1.9000000000000004], [0, 13.9]], {strokeColor: 'black'});\nboard.create('text', [11, 0.5, 'x'], {fontSize: 12});\nboard.create('text', [0.5, 13.4, 'y'], {fontSize: 12});\nboard.create('point', [0, 0], {name:'A(0, 0)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [5, 12], {name:'B(5, 12)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [10, 0], {name:'C(10, 0)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('polygon', [[0, 0], [5, 12], [10, 0]], {fillColor:'#3b82f6', fillOpacity:0.1, borders:{strokeColor:'blue', strokeWidth:2}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11a-q6b",
    "topicId": "y9-11a",
    "c": "11A",
    "t": "Distance between two points",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Given the three points \\(A(0, 0)\\), \\(B(5, 12)\\) and \\(C(10, 0)\\), calculate the distance \\(BC\\).",
    "opts": [
      "\\(15\\)",
      "\\(11\\)",
      "\\(9\\)",
      "\\(13\\)"
    ],
    "a": 3,
    "answer": "2",
    "hint": "Apply the distance formula to coordinates \\(B(5, 12)\\) and \\(C(10, 0)\\).",
    "solution": "Use the distance formula for points \\(B(5,12)\\) and \\(C(10,0)\\):\n\\(BC = \\sqrt{(10 - 5)^2 + (0 - 12)^2} = \\sqrt{5^2 + (-12)^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13\\).",
    "solutionSteps": [
      {
        "explanation": "Step 1: Identify the coordinates of the given points.",
        "workingOut": "$$ A(0, 0), \\; B(5, 12), \\; C(10, 0) $$",
        "graphData": null
      },
      {
        "explanation": "Step 2: Use the distance formula \\( d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} \\) to calculate the required side lengths.",
        "workingOut": "The distance formula calculates the length of the line segment between two points on the Cartesian plane.",
        "graphData": null
      },
      {
        "explanation": "Step 3: Substitute the coordinates and calculate the lengths.",
        "workingOut": "$$ \\begin{aligned} AB &= \\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13 \\text{ units} \\\\\\\\ AC &= \\sqrt{10^2 + 0^2} = \\sqrt{100 + 0} = \\sqrt{100} = 10 \\text{ units} \\\\\\\\ BC &= \\sqrt{5^2 + -12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13 \\text{ units} \\end{aligned} $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: Answer the specific question asked.",
        "workingOut": "2",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              -2,
              14.4,
              12,
              -2.4000000000000004
            ],
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-1.5, 0], [11.5, 0]], {strokeColor: 'black'});\nboard.create('arrow', [[0, -1.9000000000000004], [0, 13.9]], {strokeColor: 'black'});\nboard.create('text', [11, 0.5, 'x'], {fontSize: 12});\nboard.create('text', [0.5, 13.4, 'y'], {fontSize: 12});\nboard.create('point', [0, 0], {name:'A(0, 0)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [5, 12], {name:'B(5, 12)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [10, 0], {name:'C(10, 0)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('polygon', [[0, 0], [5, 12], [10, 0]], {fillColor:'#3b82f6', fillOpacity:0.1, borders:{strokeColor:'blue', strokeWidth:2}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11a-q6c",
    "topicId": "y9-11a",
    "c": "11A",
    "t": "Distance between two points",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Given the three points \\(A(0, 0)\\), \\(B(5, 12)\\) and \\(C(10, 0)\\), calculate the distance \\(AC\\).",
    "opts": [
      "\\(10\\)",
      "\\(9\\)",
      "\\(11\\)",
      "\\(8\\)"
    ],
    "a": 0,
    "answer": "1",
    "hint": "Observe the \\(y\\)-coordinates of both points to determine if they lie on a straight horizontal line.",
    "solution": "Since both points \\(A\\) and \\(C\\) lie on the \\(x\\)-axis, the distance is simply the difference of their \\(x\\)-coordinates: \\(|10 - 0| = 10\\).",
    "solutionSteps": [
      {
        "explanation": "Step 1: Identify the coordinates of the given points.",
        "workingOut": "$$ A(0, 0), \\; B(5, 12), \\; C(10, 0) $$",
        "graphData": null
      },
      {
        "explanation": "Step 2: Use the distance formula \\( d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} \\) to calculate the required side lengths.",
        "workingOut": "The distance formula calculates the length of the line segment between two points on the Cartesian plane.",
        "graphData": null
      },
      {
        "explanation": "Step 3: Substitute the coordinates and calculate the lengths.",
        "workingOut": "$$ \\begin{aligned} AB &= \\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13 \\text{ units} \\\\\\\\ AC &= \\sqrt{10^2 + 0^2} = \\sqrt{100 + 0} = \\sqrt{100} = 10 \\text{ units} \\\\\\\\ BC &= \\sqrt{5^2 + -12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13 \\text{ units} \\end{aligned} $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: Answer the specific question asked.",
        "workingOut": "1",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              -2,
              14.4,
              12,
              -2.4000000000000004
            ],
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-1.5, 0], [11.5, 0]], {strokeColor: 'black'});\nboard.create('arrow', [[0, -1.9000000000000004], [0, 13.9]], {strokeColor: 'black'});\nboard.create('text', [11, 0.5, 'x'], {fontSize: 12});\nboard.create('text', [0.5, 13.4, 'y'], {fontSize: 12});\nboard.create('point', [0, 0], {name:'A(0, 0)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [5, 12], {name:'B(5, 12)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [10, 0], {name:'C(10, 0)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('polygon', [[0, 0], [5, 12], [10, 0]], {fillColor:'#3b82f6', fillOpacity:0.1, borders:{strokeColor:'blue', strokeWidth:2}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11a-q6d",
    "topicId": "y9-11a",
    "c": "11A",
    "t": "Distance between two points",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Given the three points \\(A(0, 0)\\), \\(B(5, 12)\\) and \\(C(10, 0)\\), identify the type of triangle \\(ABC\\).",
    "opts": [
      "Scalene",
      "Isosceles",
      "Equilateral",
      "Right-angled"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Recall the definitions of scalene, isosceles, and equilateral triangles using the side lengths calculated.",
    "solution": "We calculated the side lengths to be \\(AB = 13\\), \\(BC = 13\\), and \\(AC = 10\\). Since two side lengths are equal (\\(AB = BC\\)), the triangle is isosceles.",
    "solutionSteps": [
      {
        "explanation": "Step 1: Identify the coordinates of the given points.",
        "workingOut": "$$ A(0, 0), \\; B(5, 12), \\; C(10, 0) $$",
        "graphData": null
      },
      {
        "explanation": "Step 2: Use the distance formula \\( d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} \\) to calculate the required side lengths.",
        "workingOut": "The distance formula calculates the length of the line segment between two points on the Cartesian plane.",
        "graphData": null
      },
      {
        "explanation": "Step 3: Substitute the coordinates and calculate the lengths.",
        "workingOut": "$$ \\begin{aligned} AB &= \\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13 \\text{ units} \\\\\\\\ AC &= \\sqrt{10^2 + 0^2} = \\sqrt{100 + 0} = \\sqrt{100} = 10 \\text{ units} \\\\\\\\ BC &= \\sqrt{5^2 + -12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13 \\text{ units} \\end{aligned} $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: Answer the specific question asked.",
        "workingOut": "2",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              -2,
              14.4,
              12,
              -2.4000000000000004
            ],
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-1.5, 0], [11.5, 0]], {strokeColor: 'black'});\nboard.create('arrow', [[0, -1.9000000000000004], [0, 13.9]], {strokeColor: 'black'});\nboard.create('text', [11, 0.5, 'x'], {fontSize: 12});\nboard.create('text', [0.5, 13.4, 'y'], {fontSize: 12});\nboard.create('point', [0, 0], {name:'A(0, 0)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [5, 12], {name:'B(5, 12)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [10, 0], {name:'C(10, 0)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('polygon', [[0, 0], [5, 12], [10, 0]], {fillColor:'#3b82f6', fillOpacity:0.1, borders:{strokeColor:'blue', strokeWidth:2}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11a-q7a",
    "topicId": "y9-11a",
    "c": "11A",
    "t": "Distance between two points",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Given \\(\\Delta PQR\\) with vertices \\(P(0, -1)\\), \\(Q(-6, 1)\\) and \\(R(-4, -3)\\), calculate the distance \\(PQ\\).",
    "opts": [
      "\\(3\\sqrt{10}\\)",
      "\\(\\sqrt{10}\\)",
      "\\(2\\sqrt{10}\\)",
      "\\(4\\sqrt{10}\\)"
    ],
    "a": 2,
    "answer": "1",
    "hint": "Use the distance formula and write the resulting surd in simplest form.",
    "solution": "Using the distance formula: \\(PQ = \\sqrt{(-6 - 0)^2 + (1 - (-1))^2} = \\sqrt{(-6)^2 + 2^2} = \\sqrt{36 + 4} = \\sqrt{40} = 2\\sqrt{10}\\).",
    "solutionSteps": [
      {
        "explanation": "Step 1: Identify the coordinates of the given points.",
        "workingOut": "$$ P(0, -1), \\; Q(-6, 1), \\; R(-4, -3) $$",
        "graphData": null
      },
      {
        "explanation": "Step 2: Use the distance formula \\( d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} \\) to calculate the required side lengths.",
        "workingOut": "The distance formula calculates the length of the line segment between two points on the Cartesian plane.",
        "graphData": null
      },
      {
        "explanation": "Step 3: Substitute the coordinates and calculate the lengths.",
        "workingOut": "$$ \\begin{aligned} PQ &= \\sqrt{-6^2 + 2^2} = \\sqrt{36 + 4} = \\sqrt{40} \\text{ units} \\\\\\\\ PR &= \\sqrt{-4^2 + -2^2} = \\sqrt{16 + 4} = \\sqrt{20} \\text{ units} \\\\\\\\ QR &= \\sqrt{2^2 + -4^2} = \\sqrt{4 + 16} = \\sqrt{20} \\text{ units} \\end{aligned} $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: Answer the specific question asked.",
        "workingOut": "1",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              -8,
              3,
              2,
              -5
            ],
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-7.5, 0], [1.5, 0]], {strokeColor: 'black'});\nboard.create('arrow', [[0, -4.5], [0, 2.5]], {strokeColor: 'black'});\nboard.create('text', [1, 0.5, 'x'], {fontSize: 12});\nboard.create('text', [0.5, 2, 'y'], {fontSize: 12});\nboard.create('point', [0, -1], {name:'P(0, -1)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [-6, 1], {name:'Q(-6, 1)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [-4, -3], {name:'R(-4, -3)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('polygon', [[0, -1], [-6, 1], [-4, -3]], {fillColor:'#3b82f6', fillOpacity:0.1, borders:{strokeColor:'blue', strokeWidth:2}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11a-q7b",
    "topicId": "y9-11a",
    "c": "11A",
    "t": "Distance between two points",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Given \\(\\Delta PQR\\) with vertices \\(P(0, -1)\\), \\(Q(-6, 1)\\) and \\(R(-4, -3)\\), calculate the distance \\(PR\\).",
    "opts": [
      "\\(2\\sqrt{5}\\)",
      "\\(3\\sqrt{5}\\)",
      "\\(4\\sqrt{5}\\)",
      "\\(\\sqrt{5}\\)"
    ],
    "a": 0,
    "answer": "1",
    "hint": "Use the distance formula and write the resulting surd in simplest form.",
    "solution": "Using the distance formula: \\(PR = \\sqrt{(-4 - 0)^2 + (-3 - (-1))^2} = \\sqrt{(-4)^2 + (-2)^2} = \\sqrt{16 + 4} = \\sqrt{20} = 2\\sqrt{5}\\).",
    "solutionSteps": [
      {
        "explanation": "Step 1: Identify the coordinates of the given points.",
        "workingOut": "$$ P(0, -1), \\; Q(-6, 1), \\; R(-4, -3) $$",
        "graphData": null
      },
      {
        "explanation": "Step 2: Use the distance formula \\( d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} \\) to calculate the required side lengths.",
        "workingOut": "The distance formula calculates the length of the line segment between two points on the Cartesian plane.",
        "graphData": null
      },
      {
        "explanation": "Step 3: Substitute the coordinates and calculate the lengths.",
        "workingOut": "$$ \\begin{aligned} PQ &= \\sqrt{-6^2 + 2^2} = \\sqrt{36 + 4} = \\sqrt{40} \\text{ units} \\\\\\\\ PR &= \\sqrt{-4^2 + -2^2} = \\sqrt{16 + 4} = \\sqrt{20} \\text{ units} \\\\\\\\ QR &= \\sqrt{2^2 + -4^2} = \\sqrt{4 + 16} = \\sqrt{20} \\text{ units} \\end{aligned} $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: Answer the specific question asked.",
        "workingOut": "1",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              -8,
              3,
              2,
              -5
            ],
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-7.5, 0], [1.5, 0]], {strokeColor: 'black'});\nboard.create('arrow', [[0, -4.5], [0, 2.5]], {strokeColor: 'black'});\nboard.create('text', [1, 0.5, 'x'], {fontSize: 12});\nboard.create('text', [0.5, 2, 'y'], {fontSize: 12});\nboard.create('point', [0, -1], {name:'P(0, -1)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [-6, 1], {name:'Q(-6, 1)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [-4, -3], {name:'R(-4, -3)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('polygon', [[0, -1], [-6, 1], [-4, -3]], {fillColor:'#3b82f6', fillOpacity:0.1, borders:{strokeColor:'blue', strokeWidth:2}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11a-q7c",
    "topicId": "y9-11a",
    "c": "11A",
    "t": "Distance between two points",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Given \\(\\Delta PQR\\) with vertices \\(P(0, -1)\\), \\(Q(-6, 1)\\) and \\(R(-4, -3)\\), calculate the distance \\(QR\\).",
    "opts": [
      "\\(2\\sqrt{5}\\)",
      "\\(3\\sqrt{5}\\)",
      "\\(\\sqrt{5}\\)",
      "\\(4\\sqrt{5}\\)"
    ],
    "a": 0,
    "answer": "1",
    "hint": "Use the distance formula and write the resulting surd in simplest form.",
    "solution": "Using the distance formula: \\(QR = \\sqrt{(-4 - (-6))^2 + (-3 - 1)^2} = \\sqrt{2^2 + (-4)^2} = \\sqrt{4 + 16} = \\sqrt{20} = 2\\sqrt{5}\\).",
    "solutionSteps": [
      {
        "explanation": "Step 1: Identify the coordinates of the given points.",
        "workingOut": "$$ P(0, -1), \\; Q(-6, 1), \\; R(-4, -3) $$",
        "graphData": null
      },
      {
        "explanation": "Step 2: Use the distance formula \\( d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} \\) to calculate the required side lengths.",
        "workingOut": "The distance formula calculates the length of the line segment between two points on the Cartesian plane.",
        "graphData": null
      },
      {
        "explanation": "Step 3: Substitute the coordinates and calculate the lengths.",
        "workingOut": "$$ \\begin{aligned} PQ &= \\sqrt{-6^2 + 2^2} = \\sqrt{36 + 4} = \\sqrt{40} \\text{ units} \\\\\\\\ PR &= \\sqrt{-4^2 + -2^2} = \\sqrt{16 + 4} = \\sqrt{20} \\text{ units} \\\\\\\\ QR &= \\sqrt{2^2 + -4^2} = \\sqrt{4 + 16} = \\sqrt{20} \\text{ units} \\end{aligned} $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: Answer the specific question asked.",
        "workingOut": "1",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              -8,
              3,
              2,
              -5
            ],
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-7.5, 0], [1.5, 0]], {strokeColor: 'black'});\nboard.create('arrow', [[0, -4.5], [0, 2.5]], {strokeColor: 'black'});\nboard.create('text', [1, 0.5, 'x'], {fontSize: 12});\nboard.create('text', [0.5, 2, 'y'], {fontSize: 12});\nboard.create('point', [0, -1], {name:'P(0, -1)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [-6, 1], {name:'Q(-6, 1)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [-4, -3], {name:'R(-4, -3)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('polygon', [[0, -1], [-6, 1], [-4, -3]], {fillColor:'#3b82f6', fillOpacity:0.1, borders:{strokeColor:'blue', strokeWidth:2}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11a-q7d",
    "topicId": "y9-11a",
    "c": "11A",
    "t": "Distance between two points",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Given \\(\\Delta PQR\\) with vertices \\(P(0, -1)\\), \\(Q(-6, 1)\\) and \\(R(-4, -3)\\), identify the type of triangle \\(PQR\\).",
    "opts": [
      "Scalene",
      "Right-angled isosceles",
      "Equilateral",
      "Isosceles but not right-angled"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Examine side lengths to check for equal sides and check if they satisfy Pythagoras' theorem.",
    "solution": "We have \\(PQ = \\sqrt{40}\\), \\(PR = \\sqrt{20}\\), and \\(QR = \\sqrt{20}\\):\n1. Since \\(PR = QR\\), the triangle is isosceles.\n2. Since \\(PR^2 + QR^2 = 20 + 20 = 40 = PQ^2\\), it satisfies Pythagoras' theorem and is right-angled at \\(R\\).\nTherefore, the triangle is a right-angled isosceles triangle.",
    "solutionSteps": [
      {
        "explanation": "Step 1: Identify the coordinates of the given points.",
        "workingOut": "$$ P(0, -1), \\; Q(-6, 1), \\; R(-4, -3) $$",
        "graphData": null
      },
      {
        "explanation": "Step 2: Use the distance formula \\( d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} \\) to calculate the required side lengths.",
        "workingOut": "The distance formula calculates the length of the line segment between two points on the Cartesian plane.",
        "graphData": null
      },
      {
        "explanation": "Step 3: Substitute the coordinates and calculate the lengths.",
        "workingOut": "$$ \\begin{aligned} PQ &= \\sqrt{-6^2 + 2^2} = \\sqrt{36 + 4} = \\sqrt{40} \\text{ units} \\\\\\\\ PR &= \\sqrt{-4^2 + -2^2} = \\sqrt{16 + 4} = \\sqrt{20} \\text{ units} \\\\\\\\ QR &= \\sqrt{2^2 + -4^2} = \\sqrt{4 + 16} = \\sqrt{20} \\text{ units} \\end{aligned} $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: Answer the specific question asked.",
        "workingOut": "0",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              -8,
              3,
              2,
              -5
            ],
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-7.5, 0], [1.5, 0]], {strokeColor: 'black'});\nboard.create('arrow', [[0, -4.5], [0, 2.5]], {strokeColor: 'black'});\nboard.create('text', [1, 0.5, 'x'], {fontSize: 12});\nboard.create('text', [0.5, 2, 'y'], {fontSize: 12});\nboard.create('point', [0, -1], {name:'P(0, -1)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [-6, 1], {name:'Q(-6, 1)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [-4, -3], {name:'R(-4, -3)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('polygon', [[0, -1], [-6, 1], [-4, -3]], {fillColor:'#3b82f6', fillOpacity:0.1, borders:{strokeColor:'blue', strokeWidth:2}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11a-q8",
    "topicId": "y9-11a",
    "c": "11A",
    "t": "Distance between two points",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "The points \\(A(1, 2)\\), \\(B(-2, -2)\\) and \\(C(4, -2)\\) are joined to form a triangle. Prove that the triangle is isosceles.",
    "answer": "AB = AC = 5",
    "hint": "Calculate all three side lengths of the triangle and show that two of them are equal.",
    "solution": "AB = AC = 5",
    "solutionSteps": [
      {
        "explanation": "Step 1: Identify the coordinates of the given points.",
        "workingOut": "$$ A(1, 2), \\; B(-2, -2), \\; C(4, -2) $$",
        "graphData": null
      },
      {
        "explanation": "Step 2: Use the distance formula \\( d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} \\) to calculate the required side lengths.",
        "workingOut": "The distance formula calculates the length of the line segment between two points on the Cartesian plane.",
        "graphData": null
      },
      {
        "explanation": "Step 3: Substitute the coordinates and calculate the lengths.",
        "workingOut": "$$ \\begin{aligned} AB &= \\sqrt{-3^2 + -4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5 \\text{ units} \\\\\\\\ AC &= \\sqrt{3^2 + -4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5 \\text{ units} \\\\\\\\ BC &= \\sqrt{6^2 + 0^2} = \\sqrt{36 + 0} = \\sqrt{36} = 6 \\text{ units} \\end{aligned} $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: Answer the specific question asked.",
        "workingOut": "AB = AC = 5",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              -4,
              4,
              6,
              -4
            ],
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-3.5, 0], [5.5, 0]], {strokeColor: 'black'});\nboard.create('arrow', [[0, -3.5], [0, 3.5]], {strokeColor: 'black'});\nboard.create('text', [5, 0.5, 'x'], {fontSize: 12});\nboard.create('text', [0.5, 3, 'y'], {fontSize: 12});\nboard.create('point', [1, 2], {name:'A(1, 2)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [-2, -2], {name:'B(-2, -2)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [4, -2], {name:'C(4, -2)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('polygon', [[1, 2], [-2, -2], [4, -2]], {fillColor:'#3b82f6', fillOpacity:0.1, borders:{strokeColor:'blue', strokeWidth:2}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-11a-q9",
    "topicId": "y9-11a",
    "c": "11A",
    "t": "Distance between two points",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "The points \\(A(-1, 1)\\), \\(B(2, 5)\\) and \\(C(-6, 11)\\) are joined to form a triangle. Prove that the triangle is right-angled.",
    "answer": "AB^2 + BC^2 = AC^2",
    "hint": "Use Pythagoras' theorem: calculate \\(AB^2\\), \\(BC^2\\), and \\(AC^2\\) and check if the sum of two values equals the third.",
    "solution": "AB^2 + BC^2 = AC^2",
    "solutionSteps": [
      {
        "explanation": "Step 1: Identify the coordinates of the given points.",
        "workingOut": "$$ A(-1, 1), \\; B(2, 5), \\; C(-6, 11) $$",
        "graphData": null
      },
      {
        "explanation": "Step 2: Use the distance formula \\( d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} \\) to calculate the required side lengths.",
        "workingOut": "The distance formula calculates the length of the line segment between two points on the Cartesian plane.",
        "graphData": null
      },
      {
        "explanation": "Step 3: Substitute the coordinates and calculate the lengths.",
        "workingOut": "$$ \\begin{aligned} AB &= \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5 \\text{ units} \\\\\\\\ AC &= \\sqrt{-5^2 + 10^2} = \\sqrt{25 + 100} = \\sqrt{125} \\text{ units} \\\\\\\\ BC &= \\sqrt{-8^2 + 6^2} = \\sqrt{64 + 36} = \\sqrt{100} = 10 \\text{ units} \\end{aligned} $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: Answer the specific question asked.",
        "workingOut": "AB^2 + BC^2 = AC^2",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              -8,
              13,
              4,
              -1
            ],
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-7.5, 0], [3.5, 0]], {strokeColor: 'black'});\nboard.create('arrow', [[0, -0.5], [0, 12.5]], {strokeColor: 'black'});\nboard.create('text', [3, 0.5, 'x'], {fontSize: 12});\nboard.create('text', [0.5, 12, 'y'], {fontSize: 12});\nboard.create('point', [-1, 1], {name:'A(-1, 1)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [2, 5], {name:'B(2, 5)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [-6, 11], {name:'C(-6, 11)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('polygon', [[-1, 1], [2, 5], [-6, 11]], {fillColor:'#3b82f6', fillOpacity:0.1, borders:{strokeColor:'blue', strokeWidth:2}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-11a-q10",
    "topicId": "y9-11a",
    "c": "11A",
    "t": "Distance between two points",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Calculate the perimeter of \\(\\Delta PQR\\) with vertices \\(P(1, 2)\\), \\(Q(4, 2)\\) and \\(R(4, 6)\\).",
    "opts": [
      "\\(12\\)",
      "\\(10\\)",
      "\\(14\\)",
      "\\(8\\)"
    ],
    "a": 0,
    "answer": "2",
    "hint": "Find all three side lengths (PQ, QR, PR) and add them together.",
    "solution": "Calculate the lengths of the three sides:\n- \\(PQ = |4 - 1| = 3\\) (horizontal distance)\n- \\(QR = |6 - 2| = 4\\) (vertical distance)\n- \\(PR = \\sqrt{(4-1)^2 + (6-2)^2} = \\sqrt{3^2 + 4^2} = 5\\)\nPerimeter = \\(3 + 4 + 5 = 12\\).",
    "solutionSteps": [
      {
        "explanation": "Step 1: Identify the coordinates of the given points.",
        "workingOut": "$$ P(1, 2), \\; Q(4, 2), \\; R(4, 6) $$",
        "graphData": null
      },
      {
        "explanation": "Step 2: Use the distance formula \\( d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} \\) to calculate the required side lengths.",
        "workingOut": "The distance formula calculates the length of the line segment between two points on the Cartesian plane.",
        "graphData": null
      },
      {
        "explanation": "Step 3: Substitute the coordinates and calculate the lengths.",
        "workingOut": "$$ \\begin{aligned} PQ &= \\sqrt{3^2 + 0^2} = \\sqrt{9 + 0} = \\sqrt{9} = 3 \\text{ units} \\\\\\\\ PR &= \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5 \\text{ units} \\\\\\\\ QR &= \\sqrt{0^2 + 4^2} = \\sqrt{0 + 16} = \\sqrt{16} = 4 \\text{ units} \\end{aligned} $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: Answer the specific question asked.",
        "workingOut": "2",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              -1,
              8,
              6,
              0
            ],
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-0.5, 0], [5.5, 0]], {strokeColor: 'black'});\nboard.create('arrow', [[0, 0.5], [0, 7.5]], {strokeColor: 'black'});\nboard.create('text', [5, 0.5, 'x'], {fontSize: 12});\nboard.create('text', [0.5, 7, 'y'], {fontSize: 12});\nboard.create('point', [1, 2], {name:'P(1, 2)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [4, 2], {name:'Q(4, 2)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [4, 6], {name:'R(4, 6)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('polygon', [[1, 2], [4, 2], [4, 6]], {fillColor:'#3b82f6', fillOpacity:0.1, borders:{strokeColor:'blue', strokeWidth:2}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11a-q11",
    "topicId": "y9-11a",
    "c": "11A",
    "t": "Distance between two points",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Show that the points \\(A(2, -1)\\), \\(B(5, 3)\\), \\(C(2, 7)\\) and \\(D(-1, 3)\\) are the vertices of a rhombus.",
    "answer": "AB = BC = CD = DA = 5",
    "hint": "Show that all four side lengths are equal to 5, and then show that the diagonals have different lengths.",
    "solution": "AB = BC = CD = DA = 5",
    "solutionSteps": [
      {
        "explanation": "Step 1: Identify the coordinates of the given points.",
        "workingOut": "$$ A(2, -1), \\; B(5, 3), \\; C(2, 7), \\; D(-1, 3) $$",
        "graphData": null
      },
      {
        "explanation": "Step 2: Use the distance formula \\( d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} \\) to calculate the required side lengths.",
        "workingOut": "The distance formula calculates the length of the line segment between two points on the Cartesian plane.",
        "graphData": null
      },
      {
        "explanation": "Step 3: Substitute the coordinates and calculate the lengths.",
        "workingOut": "$$ \\begin{aligned} AB &= \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5 \\text{ units} \\\\\\\\ AC &= \\sqrt{0^2 + 8^2} = \\sqrt{0 + 64} = \\sqrt{64} = 8 \\text{ units} \\\\\\\\ AD &= \\sqrt{-3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5 \\text{ units} \\\\\\\\ BC &= \\sqrt{-3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5 \\text{ units} \\\\\\\\ BD &= \\sqrt{-6^2 + 0^2} = \\sqrt{36 + 0} = \\sqrt{36} = 6 \\text{ units} \\\\\\\\ CD &= \\sqrt{-3^2 + -4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5 \\text{ units} \\end{aligned} $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: Answer the specific question asked.",
        "workingOut": "AB = BC = CD = DA = 5",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 400,
            "boundingbox": [
              -3,
              9,
              7,
              -3
            ],
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-2.5, 0], [6.5, 0]], {strokeColor: 'black'});\nboard.create('arrow', [[0, -2.5], [0, 8.5]], {strokeColor: 'black'});\nboard.create('text', [6, 0.5, 'x'], {fontSize: 12});\nboard.create('text', [0.5, 8, 'y'], {fontSize: 12});\nboard.create('point', [2, -1], {name:'A(2, -1)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [5, 3], {name:'B(5, 3)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [2, 7], {name:'C(2, 7)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('point', [-1, 3], {name:'D(-1, 3)', size:3, color:'red', label:{offset:[5,10]}});\nboard.create('polygon', [[2, -1], [5, 3], [2, 7], [-1, 3]], {fillColor:'#3b82f6', fillOpacity:0.1, borders:{strokeColor:'blue', strokeWidth:2}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  }
];
