export const Y11_CH6E_QUESTIONS = [
  {
    "id": "y11a-6e-q1a-sin",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "A ray passing through the point \\((5, 12)\\) on a circle of radius \\(13\\) forms an angle \\(\\theta\\) with the positive x-axis. Find the value of \\(\\sin \\theta\\).",
    "opts": [
      "\\\\(-0.07692307692307687\\\\)",
      "\\\\(-0.9230769230769231\\\\)",
      "\\\\(\\\\frac{12}{13}\\\\)",
      "\\\\(1.9230769230769231\\\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Recall that sin \\theta = y/r.",
    "solution": "Using the definition \\(\\sin \\theta = \\frac{y}{r}\\) with \\(y = 12\\) and \\(r = 13\\), we get \\(\\sin \\theta = \\frac{12}{13}\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the coordinates \\((x, y)\\) and the radius \\(r\\) of the circle.",
        "workingOut": "Using the definition \\(\\sin \\theta = \\frac{y}{r}\\) with \\(y = 12\\) and \\(r = 13\\).",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -4,
              4,
              4,
              -4
            ],
            "boardOptions": {
              "keepaspectratio": true,
              "showNavigation": false,
              "axis": true
            },
            "elements": [],
            "script": "board.suspendUpdate();\nvar origin = board.create('point', [0, 0], {visible: false, name: ''});\nvar p = board.create('point', [2.5, 2.5], {name: '', size: 3, color: 'blue'});\nboard.create('segment', [origin, p], {strokeColor: 'blue', strokeWidth: 2});\nvar xAxis = board.create('point', [2, 0], {visible: false, name: ''});\nboard.create('angle', [xAxis, origin, p], {radius: 1, color: 'red', name: '\\\\theta'});\nboard.create('text', [2.5, 3, 'Quadrant I'], {fontSize: 16, color: 'blue', anchorX: 'middle'});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Recall the definition of the requested trigonometric ratio in terms of \\(x, y\\), and \\(r\\).",
        "workingOut": "Recall that sin \\theta = y/r.",
        "graphData": null
      },
      {
        "explanation": "Substitute the values to calculate the final exact ratio.",
        "workingOut": "\\\\(\\\\frac{12}{13}\\\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6e-q1a-cos",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "A ray passing through the point \\((5, 12)\\) on a circle of radius \\(13\\) forms an angle \\(\\theta\\) with the positive x-axis. Find the value of \\(\\cos \\theta\\).",
    "opts": [
      "\\\\(-0.38461538461538464\\\\)",
      "\\\\(-0.6153846153846154\\\\)",
      "\\\\(\\\\frac{5}{13}\\\\)",
      "\\\\(1.3846153846153846\\\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Recall that cos \\theta = x/r.",
    "solution": "Using the definition \\(\\cos \\theta = \\frac{x}{r}\\) with \\(x = 5\\) and \\(r = 13\\), we get \\(\\cos \\theta = \\frac{5}{13}\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the coordinates \\((x, y)\\) and the radius \\(r\\) of the circle.",
        "workingOut": "Using the definition \\(\\cos \\theta = \\frac{x}{r}\\) with \\(x = 5\\) and \\(r = 13\\).",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -4,
              4,
              4,
              -4
            ],
            "boardOptions": {
              "keepaspectratio": true,
              "showNavigation": false,
              "axis": true
            },
            "elements": [],
            "script": "board.suspendUpdate();\nvar origin = board.create('point', [0, 0], {visible: false, name: ''});\nvar p = board.create('point', [2.5, 2.5], {name: '', size: 3, color: 'blue'});\nboard.create('segment', [origin, p], {strokeColor: 'blue', strokeWidth: 2});\nvar xAxis = board.create('point', [2, 0], {visible: false, name: ''});\nboard.create('angle', [xAxis, origin, p], {radius: 1, color: 'red', name: '\\\\theta'});\nboard.create('text', [2.5, 3, 'Quadrant I'], {fontSize: 16, color: 'blue', anchorX: 'middle'});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Recall the definition of the requested trigonometric ratio in terms of \\(x, y\\), and \\(r\\).",
        "workingOut": "Recall that cos \\theta = x/r.",
        "graphData": null
      },
      {
        "explanation": "Substitute the values to calculate the final exact ratio.",
        "workingOut": "\\\\(\\\\frac{5}{13}\\\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6e-q1a-tan",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "A ray passing through the point \\((5, 12)\\) on a circle of radius \\(13\\) forms an angle \\(\\theta\\) with the positive x-axis. Find the value of \\(\\tan \\theta\\).",
    "opts": [
      "\\\\(-2.4\\\\)",
      "\\\\(1.4\\\\)",
      "\\\\(\\\\frac{12}{5}\\\\)",
      "\\\\(3.4\\\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Recall that tan \\theta = y/x.",
    "solution": "Using the definition \\(\\tan \\theta = \\frac{y}{x}\\) with \\(x = 5\\) and \\(y = 12\\), we get \\(\\tan \\theta = \\frac{12}{5}\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the coordinates \\((x, y)\\) and the radius \\(r\\) of the circle.",
        "workingOut": "Using the definition \\(\\tan \\theta = \\frac{y}{x}\\) with \\(x = 5\\) and \\(y = 12\\).",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -4,
              4,
              4,
              -4
            ],
            "boardOptions": {
              "keepaspectratio": true,
              "showNavigation": false,
              "axis": true
            },
            "elements": [],
            "script": "board.suspendUpdate();\nvar origin = board.create('point', [0, 0], {visible: false, name: ''});\nvar p = board.create('point', [2.5, 2.5], {name: '', size: 3, color: 'blue'});\nboard.create('segment', [origin, p], {strokeColor: 'blue', strokeWidth: 2});\nvar xAxis = board.create('point', [2, 0], {visible: false, name: ''});\nboard.create('angle', [xAxis, origin, p], {radius: 1, color: 'red', name: '\\\\theta'});\nboard.create('text', [2.5, 3, 'Quadrant I'], {fontSize: 16, color: 'blue', anchorX: 'middle'});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Recall the definition of the requested trigonometric ratio in terms of \\(x, y\\), and \\(r\\).",
        "workingOut": "Recall that tan \\theta = y/x.",
        "graphData": null
      },
      {
        "explanation": "Substitute the values to calculate the final exact ratio.",
        "workingOut": "\\\\(\\\\frac{12}{5}\\\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6e-q1b-sin",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "A ray passing through the point \\((-8, 15)\\) on a circle of radius \\(17\\) forms an angle \\(\\theta\\) with the positive x-axis. Find the value of \\(\\sin \\theta\\).",
    "opts": [
      "\\\\(-0.11764705882352944\\\\)",
      "\\\\(-0.8823529411764706\\\\)",
      "\\\\(\\\\frac{15}{17}\\\\)",
      "\\\\(1.8823529411764706\\\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "sine is y/r.",
    "solution": "Since \\(y = 15\\) and \\(r = 17\\), \\(\\sin \\theta = \\frac{15}{17}\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the coordinates \\((x, y)\\) and the radius \\(r\\) of the circle.",
        "workingOut": "Since \\(y = 15\\) and \\(r = 17\\).",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -4,
              4,
              4,
              -4
            ],
            "boardOptions": {
              "keepaspectratio": true,
              "showNavigation": false,
              "axis": true
            },
            "elements": [],
            "script": "board.suspendUpdate();\nvar origin = board.create('point', [0, 0], {visible: false, name: ''});\nvar p = board.create('point', [-2.5, 2.5], {name: '', size: 3, color: 'blue'});\nboard.create('segment', [origin, p], {strokeColor: 'blue', strokeWidth: 2});\nvar xAxis = board.create('point', [2, 0], {visible: false, name: ''});\nboard.create('angle', [xAxis, origin, p], {radius: 1, color: 'red', name: '\\\\theta'});\nboard.create('text', [-2.5, 3, 'Quadrant II'], {fontSize: 16, color: 'blue', anchorX: 'middle'});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Recall the definition of the requested trigonometric ratio in terms of \\(x, y\\), and \\(r\\).",
        "workingOut": "sine is y/r.",
        "graphData": null
      },
      {
        "explanation": "Substitute the values to calculate the final exact ratio.",
        "workingOut": "\\\\(\\\\frac{15}{17}\\\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6e-q1b-cos",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "A ray passing through the point \\((-8, 15)\\) on a circle of radius \\(17\\) forms an angle \\(\\theta\\) with the positive x-axis. Find the value of \\(\\cos \\theta\\).",
    "opts": [
      "\\\\(\\\\frac{-8}{17}\\\\)",
      "\\\\(-1.4705882352941178\\\\)",
      "\\\\(0.47058823529411764\\\\)",
      "\\\\(0.5294117647058824\\\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "cosine is x/r. Make sure to keep the negative sign.",
    "solution": "Since \\(x = -8\\) and \\(r = 17\\), \\(\\cos \\theta = \\frac{-8}{17} = -\\frac{8}{17}\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the coordinates \\((x, y)\\) and the radius \\(r\\) of the circle.",
        "workingOut": "Since \\(x = -8\\) and \\(r = 17\\).",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -4,
              4,
              4,
              -4
            ],
            "boardOptions": {
              "keepaspectratio": true,
              "showNavigation": false,
              "axis": true
            },
            "elements": [],
            "script": "board.suspendUpdate();\nvar origin = board.create('point', [0, 0], {visible: false, name: ''});\nvar p = board.create('point', [-2.5, 2.5], {name: '', size: 3, color: 'blue'});\nboard.create('segment', [origin, p], {strokeColor: 'blue', strokeWidth: 2});\nvar xAxis = board.create('point', [2, 0], {visible: false, name: ''});\nboard.create('angle', [xAxis, origin, p], {radius: 1, color: 'red', name: '\\\\theta'});\nboard.create('text', [-2.5, 3, 'Quadrant II'], {fontSize: 16, color: 'blue', anchorX: 'middle'});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Recall the definition of the requested trigonometric ratio in terms of \\(x, y\\), and \\(r\\).",
        "workingOut": "cosine is x/r. Make sure to keep the negative sign.",
        "graphData": null
      },
      {
        "explanation": "Substitute the values to calculate the final exact ratio.",
        "workingOut": "\\\\(\\\\frac{-8}{17}\\\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6e-q1b-tan",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "A ray passing through the point \\((-8, 15)\\) on a circle of radius \\(17\\) forms an angle \\(\\theta\\) with the positive x-axis. Find the value of \\(\\tan \\theta\\).",
    "opts": [
      "\\\\(-0.875\\\\)",
      "\\\\(\\\\frac{-15}{8}\\\\)",
      "\\\\(-2.875\\\\)",
      "\\\\(1.875\\\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "tangent is y/x.",
    "solution": "Since \\(x = -8\\) and \\(y = 15\\), \\(\\tan \\theta = \\frac{15}{-8} = -\\frac{15}{8}\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the coordinates \\((x, y)\\) and the radius \\(r\\) of the circle.",
        "workingOut": "Since \\(x = -8\\) and \\(y = 15\\).",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -4,
              4,
              4,
              -4
            ],
            "boardOptions": {
              "keepaspectratio": true,
              "showNavigation": false,
              "axis": true
            },
            "elements": [],
            "script": "board.suspendUpdate();\nvar origin = board.create('point', [0, 0], {visible: false, name: ''});\nvar p = board.create('point', [-2.5, 2.5], {name: '', size: 3, color: 'blue'});\nboard.create('segment', [origin, p], {strokeColor: 'blue', strokeWidth: 2});\nvar xAxis = board.create('point', [2, 0], {visible: false, name: ''});\nboard.create('angle', [xAxis, origin, p], {radius: 1, color: 'red', name: '\\\\theta'});\nboard.create('text', [-2.5, 3, 'Quadrant II'], {fontSize: 16, color: 'blue', anchorX: 'middle'});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Recall the definition of the requested trigonometric ratio in terms of \\(x, y\\), and \\(r\\).",
        "workingOut": "tangent is y/x.",
        "graphData": null
      },
      {
        "explanation": "Substitute the values to calculate the final exact ratio.",
        "workingOut": "\\\\(\\\\frac{-15}{8}\\\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6e-q1c-sin",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "A ray passing through the point \\((-12, -5)\\) on a circle of radius \\(13\\) forms an angle \\(\\theta\\) with the positive x-axis. Find the value of \\(\\sin \\theta\\).",
    "opts": [
      "\\\\(\\\\frac{-5}{13}\\\\)",
      "\\\\(-1.3846153846153846\\\\)",
      "\\\\(0.38461538461538464\\\\)",
      "\\\\(0.6153846153846154\\\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "sine is y/r.",
    "solution": "With \\(y = -5\\) and \\(r = 13\\), \\(\\sin \\theta = -\\frac{5}{13}\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the coordinates \\((x, y)\\) and the radius \\(r\\) of the circle.",
        "workingOut": "With \\(y = -5\\) and \\(r = 13\\).",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -4,
              4,
              4,
              -4
            ],
            "boardOptions": {
              "keepaspectratio": true,
              "showNavigation": false,
              "axis": true
            },
            "elements": [],
            "script": "board.suspendUpdate();\nvar origin = board.create('point', [0, 0], {visible: false, name: ''});\nvar p = board.create('point', [-2.5, -2.5], {name: '', size: 3, color: 'blue'});\nboard.create('segment', [origin, p], {strokeColor: 'blue', strokeWidth: 2});\nvar xAxis = board.create('point', [2, 0], {visible: false, name: ''});\nboard.create('angle', [xAxis, origin, p], {radius: 1, color: 'red', name: '\\\\theta'});\nboard.create('text', [-2.5, -3, 'Quadrant III'], {fontSize: 16, color: 'blue', anchorX: 'middle'});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Recall the definition of the requested trigonometric ratio in terms of \\(x, y\\), and \\(r\\).",
        "workingOut": "sine is y/r.",
        "graphData": null
      },
      {
        "explanation": "Substitute the values to calculate the final exact ratio.",
        "workingOut": "\\\\(\\\\frac{-5}{13}\\\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6e-q1c-cos",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "A ray passing through the point \\((-12, -5)\\) on a circle of radius \\(13\\) forms an angle \\(\\theta\\) with the positive x-axis. Find the value of \\(\\cos \\theta\\).",
    "opts": [
      "\\\\(\\\\frac{-12}{13}\\\\)",
      "\\\\(-1.9230769230769231\\\\)",
      "\\\\(0.07692307692307687\\\\)",
      "\\\\(0.9230769230769231\\\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "cosine is x/r.",
    "solution": "With \\(x = -12\\) and \\(r = 13\\), \\(\\cos \\theta = -\\frac{12}{13}\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the coordinates \\((x, y)\\) and the radius \\(r\\) of the circle.",
        "workingOut": "With \\(x = -12\\) and \\(r = 13\\).",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -4,
              4,
              4,
              -4
            ],
            "boardOptions": {
              "keepaspectratio": true,
              "showNavigation": false,
              "axis": true
            },
            "elements": [],
            "script": "board.suspendUpdate();\nvar origin = board.create('point', [0, 0], {visible: false, name: ''});\nvar p = board.create('point', [-2.5, -2.5], {name: '', size: 3, color: 'blue'});\nboard.create('segment', [origin, p], {strokeColor: 'blue', strokeWidth: 2});\nvar xAxis = board.create('point', [2, 0], {visible: false, name: ''});\nboard.create('angle', [xAxis, origin, p], {radius: 1, color: 'red', name: '\\\\theta'});\nboard.create('text', [-2.5, -3, 'Quadrant III'], {fontSize: 16, color: 'blue', anchorX: 'middle'});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Recall the definition of the requested trigonometric ratio in terms of \\(x, y\\), and \\(r\\).",
        "workingOut": "cosine is x/r.",
        "graphData": null
      },
      {
        "explanation": "Substitute the values to calculate the final exact ratio.",
        "workingOut": "\\\\(\\\\frac{-12}{13}\\\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6e-q1c-tan",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "A ray passing through the point \\((-12, -5)\\) on a circle of radius \\(13\\) forms an angle \\(\\theta\\) with the positive x-axis. Find the value of \\(\\tan \\theta\\).",
    "opts": [
      "\\\\(-0.4166666666666667\\\\)",
      "\\\\(-0.5833333333333333\\\\)",
      "\\\\(\\\\frac{5}{12}\\\\)",
      "\\\\(1.4166666666666667\\\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "tangent is y/x. The two negative signs will cancel.",
    "solution": "With \\(x = -12\\) and \\(y = -5\\), \\(\\tan \\theta = \\frac{-5}{-12} = \\frac{5}{12}\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the coordinates \\((x, y)\\) and the radius \\(r\\) of the circle.",
        "workingOut": "With \\(x = -12\\) and \\(y = -5\\).",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -4,
              4,
              4,
              -4
            ],
            "boardOptions": {
              "keepaspectratio": true,
              "showNavigation": false,
              "axis": true
            },
            "elements": [],
            "script": "board.suspendUpdate();\nvar origin = board.create('point', [0, 0], {visible: false, name: ''});\nvar p = board.create('point', [-2.5, -2.5], {name: '', size: 3, color: 'blue'});\nboard.create('segment', [origin, p], {strokeColor: 'blue', strokeWidth: 2});\nvar xAxis = board.create('point', [2, 0], {visible: false, name: ''});\nboard.create('angle', [xAxis, origin, p], {radius: 1, color: 'red', name: '\\\\theta'});\nboard.create('text', [-2.5, -3, 'Quadrant III'], {fontSize: 16, color: 'blue', anchorX: 'middle'});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Recall the definition of the requested trigonometric ratio in terms of \\(x, y\\), and \\(r\\).",
        "workingOut": "tangent is y/x. The two negative signs will cancel.",
        "graphData": null
      },
      {
        "explanation": "Substitute the values to calculate the final exact ratio.",
        "workingOut": "\\\\(\\\\frac{5}{12}\\\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6e-q1d-sin",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "A ray passing through the point \\((7, -24)\\) on a circle of radius \\(25\\) forms an angle \\(\\theta\\) with the positive x-axis. Find the value of \\(\\sin \\theta\\).",
    "opts": [
      "\\\\(\\\\frac{-24}{25}\\\\)",
      "\\\\(-1.96\\\\)",
      "\\\\(0.040000000000000036\\\\)",
      "\\\\(0.96\\\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "sine is y/r.",
    "solution": "With \\(y = -24\\) and \\(r = 25\\), \\(\\sin \\theta = -\\frac{24}{25}\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the coordinates \\((x, y)\\) and the radius \\(r\\) of the circle.",
        "workingOut": "With \\(y = -24\\) and \\(r = 25\\).",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -4,
              4,
              4,
              -4
            ],
            "boardOptions": {
              "keepaspectratio": true,
              "showNavigation": false,
              "axis": true
            },
            "elements": [],
            "script": "board.suspendUpdate();\nvar origin = board.create('point', [0, 0], {visible: false, name: ''});\nvar p = board.create('point', [2.5, -2.5], {name: '', size: 3, color: 'blue'});\nboard.create('segment', [origin, p], {strokeColor: 'blue', strokeWidth: 2});\nvar xAxis = board.create('point', [2, 0], {visible: false, name: ''});\nboard.create('angle', [xAxis, origin, p], {radius: 1, color: 'red', name: '\\\\theta'});\nboard.create('text', [2.5, -3, 'Quadrant IV'], {fontSize: 16, color: 'blue', anchorX: 'middle'});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Recall the definition of the requested trigonometric ratio in terms of \\(x, y\\), and \\(r\\).",
        "workingOut": "sine is y/r.",
        "graphData": null
      },
      {
        "explanation": "Substitute the values to calculate the final exact ratio.",
        "workingOut": "\\\\(\\\\frac{-24}{25}\\\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6e-q1d-cos",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "A ray passing through the point \\((7, -24)\\) on a circle of radius \\(25\\) forms an angle \\(\\theta\\) with the positive x-axis. Find the value of \\(\\cos \\theta\\).",
    "opts": [
      "\\\\(-0.28\\\\)",
      "\\\\(-0.72\\\\)",
      "\\\\(\\\\frac{7}{25}\\\\)",
      "\\\\(1.28\\\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "cosine is x/r.",
    "solution": "With \\(x = 7\\) and \\(r = 25\\), \\(\\cos \\theta = \\frac{7}{25}\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the coordinates \\((x, y)\\) and the radius \\(r\\) of the circle.",
        "workingOut": "With \\(x = 7\\) and \\(r = 25\\).",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -4,
              4,
              4,
              -4
            ],
            "boardOptions": {
              "keepaspectratio": true,
              "showNavigation": false,
              "axis": true
            },
            "elements": [],
            "script": "board.suspendUpdate();\nvar origin = board.create('point', [0, 0], {visible: false, name: ''});\nvar p = board.create('point', [2.5, -2.5], {name: '', size: 3, color: 'blue'});\nboard.create('segment', [origin, p], {strokeColor: 'blue', strokeWidth: 2});\nvar xAxis = board.create('point', [2, 0], {visible: false, name: ''});\nboard.create('angle', [xAxis, origin, p], {radius: 1, color: 'red', name: '\\\\theta'});\nboard.create('text', [2.5, -3, 'Quadrant IV'], {fontSize: 16, color: 'blue', anchorX: 'middle'});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Recall the definition of the requested trigonometric ratio in terms of \\(x, y\\), and \\(r\\).",
        "workingOut": "cosine is x/r.",
        "graphData": null
      },
      {
        "explanation": "Substitute the values to calculate the final exact ratio.",
        "workingOut": "\\\\(\\\\frac{7}{25}\\\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6e-q1d-tan",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "A ray passing through the point \\((7, -24)\\) on a circle of radius \\(25\\) forms an angle \\(\\theta\\) with the positive x-axis. Find the value of \\(\\tan \\theta\\).",
    "opts": [
      "\\\\(-2.4285714285714284\\\\)",
      "\\\\(\\\\frac{-24}{7}\\\\)",
      "\\\\(-4.428571428571429\\\\)",
      "\\\\(3.4285714285714284\\\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "tangent is y/x.",
    "solution": "With \\(x = 7\\) and \\(y = -24\\), \\(\\tan \\theta = -\\frac{24}{7}\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the coordinates \\((x, y)\\) and the radius \\(r\\) of the circle.",
        "workingOut": "With \\(x = 7\\) and \\(y = -24\\).",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -4,
              4,
              4,
              -4
            ],
            "boardOptions": {
              "keepaspectratio": true,
              "showNavigation": false,
              "axis": true
            },
            "elements": [],
            "script": "board.suspendUpdate();\nvar origin = board.create('point', [0, 0], {visible: false, name: ''});\nvar p = board.create('point', [2.5, -2.5], {name: '', size: 3, color: 'blue'});\nboard.create('segment', [origin, p], {strokeColor: 'blue', strokeWidth: 2});\nvar xAxis = board.create('point', [2, 0], {visible: false, name: ''});\nboard.create('angle', [xAxis, origin, p], {radius: 1, color: 'red', name: '\\\\theta'});\nboard.create('text', [2.5, -3, 'Quadrant IV'], {fontSize: 16, color: 'blue', anchorX: 'middle'});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Recall the definition of the requested trigonometric ratio in terms of \\(x, y\\), and \\(r\\).",
        "workingOut": "tangent is y/x.",
        "graphData": null
      },
      {
        "explanation": "Substitute the values to calculate the final exact ratio.",
        "workingOut": "\\\\(\\\\frac{-24}{7}\\\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6e-q2a-side",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "In Quadrant I, a point on a circle of radius \\(r = 17\\) has an x-coordinate of \\(x = 8\\). Use Pythagoras' theorem to find the unknown positive y-coordinate.",
    "opts": [
      "\\\\(-15\\\\)",
      "\\\\(14\\\\)",
      "\\\\(15\\\\)",
      "\\\\(16\\\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Apply x^2 + y^2 = r^2.",
    "solution": "Using \\(x^2 + y^2 = r^2\\): \\(8^2 + y^2 = 17^2 \\implies 64 + y^2 = 289 \\implies y^2 = 225 \\implies y = 15\\) (since it is in Quadrant I, \\(y > 0\\)).",
    "solutionSteps": [
      {
        "explanation": "Identify the given coordinate, the radius, and the quadrant to determine the sign of the missing coordinate.",
        "workingOut": "Apply x^2 + y^2 = r^2.",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -4,
              4,
              4,
              -4
            ],
            "boardOptions": {
              "keepaspectratio": true,
              "showNavigation": false,
              "axis": true
            },
            "elements": [],
            "script": "board.suspendUpdate();\nvar origin = board.create('point', [0, 0], {visible: false, name: ''});\nvar p = board.create('point', [2.5, 2.5], {name: '', size: 3, color: 'blue'});\nboard.create('segment', [origin, p], {strokeColor: 'blue', strokeWidth: 2});\nvar xAxis = board.create('point', [2, 0], {visible: false, name: ''});\nboard.create('angle', [xAxis, origin, p], {radius: 1, color: 'red', name: '\\\\theta'});\nboard.create('text', [2.5, 3, 'Quadrant I'], {fontSize: 16, color: 'blue', anchorX: 'middle'});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Use Pythagoras' theorem (\\(x^2 + y^2 = r^2\\)) to find the missing coordinate.",
        "workingOut": "Using \\(x^2 + y^2 = r^2\\): \\(8^2 + y^2 = 17^2 \\implies 64 + y^2 = 289 \\implies y^2 = 225 \\implies y = 15\\) (since it is in Quadrant I, \\(y > 0\\)).",
        "graphData": null
      },
      {
        "explanation": "Apply the definition of the required trigonometric ratio using the known \\(x, y\\), and \\(r\\) values.",
        "workingOut": "\\\\(15\\\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6e-q2a-sin",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Using \\(x = 8\\), \\(y = 15\\), and \\(r = 17\\) in Quadrant I, find \\(\\sin \\alpha\\).",
    "opts": [
      "\\\\(-0.11764705882352944\\\\)",
      "\\\\(-0.8823529411764706\\\\)",
      "\\\\(\\\\frac{15}{17}\\\\)",
      "\\\\(1.8823529411764706\\\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "sin alpha = y/r.",
    "solution": "From the coordinates, \\(\\sin \\alpha = \\frac{y}{r} = \\frac{15}{17}\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the given coordinate, the radius, and the quadrant to determine the sign of the missing coordinate.",
        "workingOut": "sin alpha = y/r.",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -4,
              4,
              4,
              -4
            ],
            "boardOptions": {
              "keepaspectratio": true,
              "showNavigation": false,
              "axis": true
            },
            "elements": [],
            "script": "board.suspendUpdate();\nvar origin = board.create('point', [0, 0], {visible: false, name: ''});\nvar p = board.create('point', [2.5, 2.5], {name: '', size: 3, color: 'blue'});\nboard.create('segment', [origin, p], {strokeColor: 'blue', strokeWidth: 2});\nvar xAxis = board.create('point', [2, 0], {visible: false, name: ''});\nboard.create('angle', [xAxis, origin, p], {radius: 1, color: 'red', name: '\\\\theta'});\nboard.create('text', [2.5, 3, 'Quadrant I'], {fontSize: 16, color: 'blue', anchorX: 'middle'});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Use Pythagoras' theorem (\\(x^2 + y^2 = r^2\\)) to find the missing coordinate.",
        "workingOut": "From the coordinates, \\(\\sin \\alpha = \\frac{y}{r} = \\frac{15}{17}\\).",
        "graphData": null
      },
      {
        "explanation": "Apply the definition of the required trigonometric ratio using the known \\(x, y\\), and \\(r\\) values.",
        "workingOut": "\\\\(\\\\frac{15}{17}\\\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6e-q2a-cos",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Using \\(x = 8\\), \\(y = 15\\), and \\(r = 17\\) in Quadrant I, find \\(\\cos \\alpha\\).",
    "opts": [
      "\\\\(-0.47058823529411764\\\\)",
      "\\\\(-0.5294117647058824\\\\)",
      "\\\\(\\\\frac{8}{17}\\\\)",
      "\\\\(1.4705882352941178\\\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "cos alpha = x/r.",
    "solution": "From the coordinates, \\(\\cos \\alpha = \\frac{x}{r} = \\frac{8}{17}\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the given coordinate, the radius, and the quadrant to determine the sign of the missing coordinate.",
        "workingOut": "cos alpha = x/r.",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -4,
              4,
              4,
              -4
            ],
            "boardOptions": {
              "keepaspectratio": true,
              "showNavigation": false,
              "axis": true
            },
            "elements": [],
            "script": "board.suspendUpdate();\nvar origin = board.create('point', [0, 0], {visible: false, name: ''});\nvar p = board.create('point', [2.5, 2.5], {name: '', size: 3, color: 'blue'});\nboard.create('segment', [origin, p], {strokeColor: 'blue', strokeWidth: 2});\nvar xAxis = board.create('point', [2, 0], {visible: false, name: ''});\nboard.create('angle', [xAxis, origin, p], {radius: 1, color: 'red', name: '\\\\theta'});\nboard.create('text', [2.5, 3, 'Quadrant I'], {fontSize: 16, color: 'blue', anchorX: 'middle'});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Use Pythagoras' theorem (\\(x^2 + y^2 = r^2\\)) to find the missing coordinate.",
        "workingOut": "From the coordinates, \\(\\cos \\alpha = \\frac{x}{r} = \\frac{8}{17}\\).",
        "graphData": null
      },
      {
        "explanation": "Apply the definition of the required trigonometric ratio using the known \\(x, y\\), and \\(r\\) values.",
        "workingOut": "\\\\(\\\\frac{8}{17}\\\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6e-q2a-tan",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Using \\(x = 8\\), \\(y = 15\\), and \\(r = 17\\) in Quadrant I, find \\(\\tan \\alpha\\).",
    "opts": [
      "\\\\(-1.875\\\\)",
      "\\\\(0.875\\\\)",
      "\\\\(\\\\frac{15}{8}\\\\)",
      "\\\\(2.875\\\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "tan alpha = y/x.",
    "solution": "From the coordinates, \\(\\tan \\alpha = \\frac{y}{x} = \\frac{15}{8}\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the given coordinate, the radius, and the quadrant to determine the sign of the missing coordinate.",
        "workingOut": "tan alpha = y/x.",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -4,
              4,
              4,
              -4
            ],
            "boardOptions": {
              "keepaspectratio": true,
              "showNavigation": false,
              "axis": true
            },
            "elements": [],
            "script": "board.suspendUpdate();\nvar origin = board.create('point', [0, 0], {visible: false, name: ''});\nvar p = board.create('point', [2.5, 2.5], {name: '', size: 3, color: 'blue'});\nboard.create('segment', [origin, p], {strokeColor: 'blue', strokeWidth: 2});\nvar xAxis = board.create('point', [2, 0], {visible: false, name: ''});\nboard.create('angle', [xAxis, origin, p], {radius: 1, color: 'red', name: '\\\\theta'});\nboard.create('text', [2.5, 3, 'Quadrant I'], {fontSize: 16, color: 'blue', anchorX: 'middle'});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Use Pythagoras' theorem (\\(x^2 + y^2 = r^2\\)) to find the missing coordinate.",
        "workingOut": "From the coordinates, \\(\\tan \\alpha = \\frac{y}{x} = \\frac{15}{8}\\).",
        "graphData": null
      },
      {
        "explanation": "Apply the definition of the required trigonometric ratio using the known \\(x, y\\), and \\(r\\) values.",
        "workingOut": "\\\\(\\\\frac{15}{8}\\\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6e-q2b-side",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "In Quadrant II, a point on a circle has coordinates \\((-\\sqrt{7}, 3)\\). Use Pythagoras' theorem to find the radius \\(r\\).",
    "opts": [
      "\\\\(-4\\\\)",
      "\\\\(3\\\\)",
      "\\\\(4\\\\)",
      "\\\\(5\\\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Calculate r = sqrt(x^2 + y^2).",
    "solution": "Using \\(r^2 = x^2 + y^2 = (-\\sqrt{7})^2 + 3^2 = 7 + 9 = 16 \\implies r = 4\\) (radius is always positive).",
    "solutionSteps": [
      {
        "explanation": "Identify the given coordinate, the radius, and the quadrant to determine the sign of the missing coordinate.",
        "workingOut": "Calculate r = sqrt(x^2 + y^2).",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -4,
              4,
              4,
              -4
            ],
            "boardOptions": {
              "keepaspectratio": true,
              "showNavigation": false,
              "axis": true
            },
            "elements": [],
            "script": "board.suspendUpdate();\nvar origin = board.create('point', [0, 0], {visible: false, name: ''});\nvar p = board.create('point', [-2.5, 2.5], {name: '', size: 3, color: 'blue'});\nboard.create('segment', [origin, p], {strokeColor: 'blue', strokeWidth: 2});\nvar xAxis = board.create('point', [2, 0], {visible: false, name: ''});\nboard.create('angle', [xAxis, origin, p], {radius: 1, color: 'red', name: '\\\\theta'});\nboard.create('text', [-2.5, 3, 'Quadrant II'], {fontSize: 16, color: 'blue', anchorX: 'middle'});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Use Pythagoras' theorem (\\(x^2 + y^2 = r^2\\)) to find the missing coordinate.",
        "workingOut": "Using \\(r^2 = x^2 + y^2 = (-\\sqrt{7})^2 + 3^2 = 7 + 9 = 16 \\implies r = 4\\) (radius is always positive).",
        "graphData": null
      },
      {
        "explanation": "Apply the definition of the required trigonometric ratio using the known \\(x, y\\), and \\(r\\) values.",
        "workingOut": "\\\\(4\\\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6e-q2b-sin",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Using \\(x = -\\sqrt{7}\\), \\(y = 3\\), and \\(r = 4\\) in Quadrant II, find \\(\\sin \\alpha\\).",
    "opts": [
      "\\\\(-0.25\\\\)",
      "\\\\(-0.75\\\\)",
      "\\\\(\\\\frac{3}{4}\\\\)",
      "\\\\(1.75\\\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "sin alpha = y/r.",
    "solution": "Sine is \\(\\frac{y}{r} = \\frac{3}{4}\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the given coordinate, the radius, and the quadrant to determine the sign of the missing coordinate.",
        "workingOut": "sin alpha = y/r.",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -4,
              4,
              4,
              -4
            ],
            "boardOptions": {
              "keepaspectratio": true,
              "showNavigation": false,
              "axis": true
            },
            "elements": [],
            "script": "board.suspendUpdate();\nvar origin = board.create('point', [0, 0], {visible: false, name: ''});\nvar p = board.create('point', [-2.5, 2.5], {name: '', size: 3, color: 'blue'});\nboard.create('segment', [origin, p], {strokeColor: 'blue', strokeWidth: 2});\nvar xAxis = board.create('point', [2, 0], {visible: false, name: ''});\nboard.create('angle', [xAxis, origin, p], {radius: 1, color: 'red', name: '\\\\theta'});\nboard.create('text', [-2.5, 3, 'Quadrant II'], {fontSize: 16, color: 'blue', anchorX: 'middle'});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Use Pythagoras' theorem (\\(x^2 + y^2 = r^2\\)) to find the missing coordinate.",
        "workingOut": "Sine is \\(\\frac{y}{r} = \\frac{3}{4}\\).",
        "graphData": null
      },
      {
        "explanation": "Apply the definition of the required trigonometric ratio using the known \\(x, y\\), and \\(r\\) values.",
        "workingOut": "\\\\(\\\\frac{3}{4}\\\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6e-q2b-cos",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Using \\(x = -\\sqrt{7}\\), \\(y = 3\\), and \\(r = 4\\) in Quadrant II, find \\(\\cos \\alpha\\).",
    "opts": [
      "\\\\(+\\\\sqrt{7}/4\\\\)",
      "\\\\(-\\\\sqrt{7}/4\\\\)",
      "\\\\(-\\\\sqrt{7}/4 + 1\\\\)",
      "\\\\(\\\\sqrt{7}/4\\\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "cos alpha = x/r.",
    "solution": "Cosine is \\(\\frac{x}{r} = -\\frac{\\sqrt{7}}{4}\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the given coordinate, the radius, and the quadrant to determine the sign of the missing coordinate.",
        "workingOut": "cos alpha = x/r.",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -4,
              4,
              4,
              -4
            ],
            "boardOptions": {
              "keepaspectratio": true,
              "showNavigation": false,
              "axis": true
            },
            "elements": [],
            "script": "board.suspendUpdate();\nvar origin = board.create('point', [0, 0], {visible: false, name: ''});\nvar p = board.create('point', [-2.5, 2.5], {name: '', size: 3, color: 'blue'});\nboard.create('segment', [origin, p], {strokeColor: 'blue', strokeWidth: 2});\nvar xAxis = board.create('point', [2, 0], {visible: false, name: ''});\nboard.create('angle', [xAxis, origin, p], {radius: 1, color: 'red', name: '\\\\theta'});\nboard.create('text', [-2.5, 3, 'Quadrant II'], {fontSize: 16, color: 'blue', anchorX: 'middle'});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Use Pythagoras' theorem (\\(x^2 + y^2 = r^2\\)) to find the missing coordinate.",
        "workingOut": "Cosine is \\(\\frac{x}{r} = -\\frac{\\sqrt{7}}{4}\\).",
        "graphData": null
      },
      {
        "explanation": "Apply the definition of the required trigonometric ratio using the known \\(x, y\\), and \\(r\\) values.",
        "workingOut": "\\\\(-\\\\sqrt{7}/4\\\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6e-q2b-tan",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Using \\(x = -\\sqrt{7}\\), \\(y = 3\\), and \\(r = 4\\) in Quadrant II, find \\(\\tan \\alpha\\).",
    "opts": [
      "\\\\(\\\\frac{-3}{\\\\sqrt{7}}\\\\)",
      "\\\\(\\\\frac{-3}{\\\\sqrt{7}} + 1\\\\)",
      "\\\\(\\\\frac{-4}{\\\\sqrt{7}}\\\\)",
      "\\\\(\\\\frac{3}{\\\\sqrt{7}}\\\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "tan alpha = y/x.",
    "solution": "Tangent is \\(\\frac{y}{x} = \\frac{3}{-\\sqrt{7}} = -\\frac{3}{\\sqrt{7}}\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the given coordinate, the radius, and the quadrant to determine the sign of the missing coordinate.",
        "workingOut": "tan alpha = y/x.",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -4,
              4,
              4,
              -4
            ],
            "boardOptions": {
              "keepaspectratio": true,
              "showNavigation": false,
              "axis": true
            },
            "elements": [],
            "script": "board.suspendUpdate();\nvar origin = board.create('point', [0, 0], {visible: false, name: ''});\nvar p = board.create('point', [-2.5, 2.5], {name: '', size: 3, color: 'blue'});\nboard.create('segment', [origin, p], {strokeColor: 'blue', strokeWidth: 2});\nvar xAxis = board.create('point', [2, 0], {visible: false, name: ''});\nboard.create('angle', [xAxis, origin, p], {radius: 1, color: 'red', name: '\\\\theta'});\nboard.create('text', [-2.5, 3, 'Quadrant II'], {fontSize: 16, color: 'blue', anchorX: 'middle'});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Use Pythagoras' theorem (\\(x^2 + y^2 = r^2\\)) to find the missing coordinate.",
        "workingOut": "Tangent is \\(\\frac{y}{x} = \\frac{3}{-\\sqrt{7}} = -\\frac{3}{\\sqrt{7}}\\).",
        "graphData": null
      },
      {
        "explanation": "Apply the definition of the required trigonometric ratio using the known \\(x, y\\), and \\(r\\) values.",
        "workingOut": "\\\\(\\\\frac{-3}{\\\\sqrt{7}}\\\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6e-q2c-side",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "In Quadrant III, a point on a circle of radius \\(r = 5\\) has a y-coordinate of \\(y = -4\\). Use Pythagoras' theorem to find the unknown x-coordinate.",
    "opts": [
      "\\\\(-2\\\\)",
      "\\\\(-3\\\\)",
      "\\\\(-4\\\\)",
      "\\\\(3\\\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Solve x^2 + y^2 = r^2. Remember x is negative in Quadrant III.",
    "solution": "Using \\(x^2 + y^2 = r^2\\): \\(x^2 + (-4)^2 = 5^2 \\implies x^2 + 16 = 25 \\implies x^2 = 9 \\implies x = -3\\) (since it is in Quadrant III, \\(x < 0\\)).",
    "solutionSteps": [
      {
        "explanation": "Identify the given coordinate, the radius, and the quadrant to determine the sign of the missing coordinate.",
        "workingOut": "Solve x^2 + y^2 = r^2. Remember x is negative in Quadrant III.",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -4,
              4,
              4,
              -4
            ],
            "boardOptions": {
              "keepaspectratio": true,
              "showNavigation": false,
              "axis": true
            },
            "elements": [],
            "script": "board.suspendUpdate();\nvar origin = board.create('point', [0, 0], {visible: false, name: ''});\nvar p = board.create('point', [-2.5, -2.5], {name: '', size: 3, color: 'blue'});\nboard.create('segment', [origin, p], {strokeColor: 'blue', strokeWidth: 2});\nvar xAxis = board.create('point', [2, 0], {visible: false, name: ''});\nboard.create('angle', [xAxis, origin, p], {radius: 1, color: 'red', name: '\\\\theta'});\nboard.create('text', [-2.5, -3, 'Quadrant III'], {fontSize: 16, color: 'blue', anchorX: 'middle'});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Use Pythagoras' theorem (\\(x^2 + y^2 = r^2\\)) to find the missing coordinate.",
        "workingOut": "Using \\(x^2 + y^2 = r^2\\): \\(x^2 + (-4)^2 = 5^2 \\implies x^2 + 16 = 25 \\implies x^2 = 9 \\implies x = -3\\) (since it is in Quadrant III, \\(x < 0\\)).",
        "graphData": null
      },
      {
        "explanation": "Apply the definition of the required trigonometric ratio using the known \\(x, y\\), and \\(r\\) values.",
        "workingOut": "\\\\(-3\\\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6e-q2c-sin",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Using \\(x = -3\\), \\(y = -4\\), and \\(r = 5\\) in Quadrant III, find \\(\\sin \\alpha\\).",
    "opts": [
      "\\\\(\\\\frac{-4}{5}\\\\)",
      "\\\\(-1.8\\\\)",
      "\\\\(0.19999999999999996\\\\)",
      "\\\\(0.8\\\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "sin alpha = y/r.",
    "solution": "Sine is \\(\\frac{y}{r} = \\frac{-4}{5} = -\\frac{4}{5}\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the given coordinate, the radius, and the quadrant to determine the sign of the missing coordinate.",
        "workingOut": "sin alpha = y/r.",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -4,
              4,
              4,
              -4
            ],
            "boardOptions": {
              "keepaspectratio": true,
              "showNavigation": false,
              "axis": true
            },
            "elements": [],
            "script": "board.suspendUpdate();\nvar origin = board.create('point', [0, 0], {visible: false, name: ''});\nvar p = board.create('point', [-2.5, -2.5], {name: '', size: 3, color: 'blue'});\nboard.create('segment', [origin, p], {strokeColor: 'blue', strokeWidth: 2});\nvar xAxis = board.create('point', [2, 0], {visible: false, name: ''});\nboard.create('angle', [xAxis, origin, p], {radius: 1, color: 'red', name: '\\\\theta'});\nboard.create('text', [-2.5, -3, 'Quadrant III'], {fontSize: 16, color: 'blue', anchorX: 'middle'});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Use Pythagoras' theorem (\\(x^2 + y^2 = r^2\\)) to find the missing coordinate.",
        "workingOut": "Sine is \\(\\frac{y}{r} = \\frac{-4}{5} = -\\frac{4}{5}\\).",
        "graphData": null
      },
      {
        "explanation": "Apply the definition of the required trigonometric ratio using the known \\(x, y\\), and \\(r\\) values.",
        "workingOut": "\\\\(\\\\frac{-4}{5}\\\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6e-q2c-cos",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Using \\(x = -3\\), \\(y = -4\\), and \\(r = 5\\) in Quadrant III, find \\(\\cos \\alpha\\).",
    "opts": [
      "\\\\(\\\\frac{-3}{5}\\\\)",
      "\\\\(-1.6\\\\)",
      "\\\\(0.4\\\\)",
      "\\\\(0.6\\\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "cos alpha = x/r.",
    "solution": "Cosine is \\(\\frac{x}{r} = -\\frac{3}{5}\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the given coordinate, the radius, and the quadrant to determine the sign of the missing coordinate.",
        "workingOut": "cos alpha = x/r.",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -4,
              4,
              4,
              -4
            ],
            "boardOptions": {
              "keepaspectratio": true,
              "showNavigation": false,
              "axis": true
            },
            "elements": [],
            "script": "board.suspendUpdate();\nvar origin = board.create('point', [0, 0], {visible: false, name: ''});\nvar p = board.create('point', [-2.5, -2.5], {name: '', size: 3, color: 'blue'});\nboard.create('segment', [origin, p], {strokeColor: 'blue', strokeWidth: 2});\nvar xAxis = board.create('point', [2, 0], {visible: false, name: ''});\nboard.create('angle', [xAxis, origin, p], {radius: 1, color: 'red', name: '\\\\theta'});\nboard.create('text', [-2.5, -3, 'Quadrant III'], {fontSize: 16, color: 'blue', anchorX: 'middle'});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Use Pythagoras' theorem (\\(x^2 + y^2 = r^2\\)) to find the missing coordinate.",
        "workingOut": "Cosine is \\(\\frac{x}{r} = -\\frac{3}{5}\\).",
        "graphData": null
      },
      {
        "explanation": "Apply the definition of the required trigonometric ratio using the known \\(x, y\\), and \\(r\\) values.",
        "workingOut": "\\\\(\\\\frac{-3}{5}\\\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6e-q2c-tan",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Using \\(x = -3\\), \\(y = -4\\), and \\(r = 5\\) in Quadrant III, find \\(\\tan \\alpha\\).",
    "opts": [
      "\\\\(-1.3333333333333333\\\\)",
      "\\\\(0.33333333333333326\\\\)",
      "\\\\(\\\\frac{4}{3}\\\\)",
      "\\\\(2.333333333333333\\\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "tan alpha = y/x.",
    "solution": "Tangent is \\(\\frac{y}{x} = \\frac{-4}{-3} = \\frac{4}{3}\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the given coordinate, the radius, and the quadrant to determine the sign of the missing coordinate.",
        "workingOut": "tan alpha = y/x.",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -4,
              4,
              4,
              -4
            ],
            "boardOptions": {
              "keepaspectratio": true,
              "showNavigation": false,
              "axis": true
            },
            "elements": [],
            "script": "board.suspendUpdate();\nvar origin = board.create('point', [0, 0], {visible: false, name: ''});\nvar p = board.create('point', [-2.5, -2.5], {name: '', size: 3, color: 'blue'});\nboard.create('segment', [origin, p], {strokeColor: 'blue', strokeWidth: 2});\nvar xAxis = board.create('point', [2, 0], {visible: false, name: ''});\nboard.create('angle', [xAxis, origin, p], {radius: 1, color: 'red', name: '\\\\theta'});\nboard.create('text', [-2.5, -3, 'Quadrant III'], {fontSize: 16, color: 'blue', anchorX: 'middle'});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Use Pythagoras' theorem (\\(x^2 + y^2 = r^2\\)) to find the missing coordinate.",
        "workingOut": "Tangent is \\(\\frac{y}{x} = \\frac{-4}{-3} = \\frac{4}{3}\\).",
        "graphData": null
      },
      {
        "explanation": "Apply the definition of the required trigonometric ratio using the known \\(x, y\\), and \\(r\\) values.",
        "workingOut": "\\\\(\\\\frac{4}{3}\\\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6e-q2d-side",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "In Quadrant IV, a point on a circle of radius \\(r = \\sqrt{10}\\) has an x-coordinate of \\(x = 3\\). Use Pythagoras' theorem to find the unknown y-coordinate.",
    "opts": [
      "\\\\(-1\\\\)",
      "\\\\(-2\\\\)",
      "\\\\(0\\\\)",
      "\\\\(1\\\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Solve x^2 + y^2 = r^2. Recall y is negative in Quadrant IV.",
    "solution": "Using \\(x^2 + y^2 = r^2\\): \\(3^2 + y^2 = (\\sqrt{10})^2 \\implies 9 + y^2 = 10 \\implies y^2 = 1 \\implies y = -1\\) (since it is in Quadrant IV, \\(y < 0\\)).",
    "solutionSteps": [
      {
        "explanation": "Identify the given coordinate, the radius, and the quadrant to determine the sign of the missing coordinate.",
        "workingOut": "Solve x^2 + y^2 = r^2. Recall y is negative in Quadrant IV.",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -4,
              4,
              4,
              -4
            ],
            "boardOptions": {
              "keepaspectratio": true,
              "showNavigation": false,
              "axis": true
            },
            "elements": [],
            "script": "board.suspendUpdate();\nvar origin = board.create('point', [0, 0], {visible: false, name: ''});\nvar p = board.create('point', [2.5, -2.5], {name: '', size: 3, color: 'blue'});\nboard.create('segment', [origin, p], {strokeColor: 'blue', strokeWidth: 2});\nvar xAxis = board.create('point', [2, 0], {visible: false, name: ''});\nboard.create('angle', [xAxis, origin, p], {radius: 1, color: 'red', name: '\\\\theta'});\nboard.create('text', [2.5, -3, 'Quadrant IV'], {fontSize: 16, color: 'blue', anchorX: 'middle'});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Use Pythagoras' theorem (\\(x^2 + y^2 = r^2\\)) to find the missing coordinate.",
        "workingOut": "Using \\(x^2 + y^2 = r^2\\): \\(3^2 + y^2 = (\\sqrt{10})^2 \\implies 9 + y^2 = 10 \\implies y^2 = 1 \\implies y = -1\\) (since it is in Quadrant IV, \\(y < 0\\)).",
        "graphData": null
      },
      {
        "explanation": "Apply the definition of the required trigonometric ratio using the known \\(x, y\\), and \\(r\\) values.",
        "workingOut": "\\\\(-1\\\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6e-q2d-sin",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Using \\(x = 3\\), \\(y = -1\\), and \\(r = \\sqrt{10}\\) in Quadrant IV, find \\(\\sin \\alpha\\).",
    "opts": [
      "\\\\(+\\\\frac{1}{\\\\sqrt{10}}\\\\)",
      "\\\\(\\\\frac{-1}{\\\\sqrt{10}}\\\\)",
      "\\\\(\\\\frac{-1}{\\\\sqrt{10}} + 1\\\\)",
      "\\\\(\\\\frac{1}{\\\\sqrt{10}}\\\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "sin alpha = y/r.",
    "solution": "Sine is \\(\\frac{y}{r} = -\\frac{1}{\\sqrt{10}}\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the given coordinate, the radius, and the quadrant to determine the sign of the missing coordinate.",
        "workingOut": "sin alpha = y/r.",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -4,
              4,
              4,
              -4
            ],
            "boardOptions": {
              "keepaspectratio": true,
              "showNavigation": false,
              "axis": true
            },
            "elements": [],
            "script": "board.suspendUpdate();\nvar origin = board.create('point', [0, 0], {visible: false, name: ''});\nvar p = board.create('point', [2.5, -2.5], {name: '', size: 3, color: 'blue'});\nboard.create('segment', [origin, p], {strokeColor: 'blue', strokeWidth: 2});\nvar xAxis = board.create('point', [2, 0], {visible: false, name: ''});\nboard.create('angle', [xAxis, origin, p], {radius: 1, color: 'red', name: '\\\\theta'});\nboard.create('text', [2.5, -3, 'Quadrant IV'], {fontSize: 16, color: 'blue', anchorX: 'middle'});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Use Pythagoras' theorem (\\(x^2 + y^2 = r^2\\)) to find the missing coordinate.",
        "workingOut": "Sine is \\(\\frac{y}{r} = -\\frac{1}{\\sqrt{10}}\\).",
        "graphData": null
      },
      {
        "explanation": "Apply the definition of the required trigonometric ratio using the known \\(x, y\\), and \\(r\\) values.",
        "workingOut": "\\\\(\\\\frac{-1}{\\\\sqrt{10}}\\\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6e-q2d-cos",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Using \\(x = 3\\), \\(y = -1\\), and \\(r = \\sqrt{10}\\) in Quadrant IV, find \\(\\cos \\alpha\\).",
    "opts": [
      "\\\\(\\\\frac{-3}{\\\\sqrt{10}}\\\\)",
      "\\\\(\\\\frac{3}{\\\\sqrt{10}}\\\\)",
      "\\\\(\\\\frac{3}{\\\\sqrt{10}} + 1\\\\)",
      "\\\\(\\\\frac{4}{\\\\sqrt{10}}\\\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "cos alpha = x/r.",
    "solution": "Cosine is \\(\\frac{x}{r} = \\frac{3}{\\sqrt{10}}\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the given coordinate, the radius, and the quadrant to determine the sign of the missing coordinate.",
        "workingOut": "cos alpha = x/r.",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -4,
              4,
              4,
              -4
            ],
            "boardOptions": {
              "keepaspectratio": true,
              "showNavigation": false,
              "axis": true
            },
            "elements": [],
            "script": "board.suspendUpdate();\nvar origin = board.create('point', [0, 0], {visible: false, name: ''});\nvar p = board.create('point', [2.5, -2.5], {name: '', size: 3, color: 'blue'});\nboard.create('segment', [origin, p], {strokeColor: 'blue', strokeWidth: 2});\nvar xAxis = board.create('point', [2, 0], {visible: false, name: ''});\nboard.create('angle', [xAxis, origin, p], {radius: 1, color: 'red', name: '\\\\theta'});\nboard.create('text', [2.5, -3, 'Quadrant IV'], {fontSize: 16, color: 'blue', anchorX: 'middle'});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Use Pythagoras' theorem (\\(x^2 + y^2 = r^2\\)) to find the missing coordinate.",
        "workingOut": "Cosine is \\(\\frac{x}{r} = \\frac{3}{\\sqrt{10}}\\).",
        "graphData": null
      },
      {
        "explanation": "Apply the definition of the required trigonometric ratio using the known \\(x, y\\), and \\(r\\) values.",
        "workingOut": "\\\\(\\\\frac{3}{\\\\sqrt{10}}\\\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6e-q2d-tan",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Using \\(x = 3\\), \\(y = -1\\), and \\(r = \\sqrt{10}\\) in Quadrant IV, find \\(\\tan \\alpha\\).",
    "opts": [
      "\\\\(\\\\frac{-1}{3}\\\\)",
      "\\\\(-1.3333333333333333\\\\)",
      "\\\\(0.3333333333333333\\\\)",
      "\\\\(0.6666666666666667\\\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "tan alpha = y/x.",
    "solution": "Tangent is \\(\\frac{y}{x} = -\\frac{1}{3}\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the given coordinate, the radius, and the quadrant to determine the sign of the missing coordinate.",
        "workingOut": "tan alpha = y/x.",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -4,
              4,
              4,
              -4
            ],
            "boardOptions": {
              "keepaspectratio": true,
              "showNavigation": false,
              "axis": true
            },
            "elements": [],
            "script": "board.suspendUpdate();\nvar origin = board.create('point', [0, 0], {visible: false, name: ''});\nvar p = board.create('point', [2.5, -2.5], {name: '', size: 3, color: 'blue'});\nboard.create('segment', [origin, p], {strokeColor: 'blue', strokeWidth: 2});\nvar xAxis = board.create('point', [2, 0], {visible: false, name: ''});\nboard.create('angle', [xAxis, origin, p], {radius: 1, color: 'red', name: '\\\\theta'});\nboard.create('text', [2.5, -3, 'Quadrant IV'], {fontSize: 16, color: 'blue', anchorX: 'middle'});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Use Pythagoras' theorem (\\(x^2 + y^2 = r^2\\)) to find the missing coordinate.",
        "workingOut": "Tangent is \\(\\frac{y}{x} = -\\frac{1}{3}\\).",
        "graphData": null
      },
      {
        "explanation": "Apply the definition of the required trigonometric ratio using the known \\(x, y\\), and \\(r\\) values.",
        "workingOut": "\\\\(\\\\frac{-1}{3}\\\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6e-q3ai",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Let \\(\\cos \\theta = \\frac{5}{13}\\), where \\(270^{\\circ} < \\theta < 360^{\\circ}\\). Find the value of \\(\\sin \\theta\\).",
    "opts": [
      "\\\\(\\\\frac{-12}{13}\\\\)",
      "\\\\(-1.9230769230769231\\\\)",
      "\\\\(0.07692307692307687\\\\)",
      "\\\\(0.9230769230769231\\\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Quadrant IV. Apply sin^2 \theta + cos^2 \theta = 1.",
    "solution": "In Quadrant IV, sine is negative. Since \\(\\cos \\theta = \\frac{5}{13}\\), \\(\\sin \\theta = -\\sqrt{1 - \\cos^2 \\theta} = -\\sqrt{1 - \\left(\\frac{5}{13}\\right)^2} = -\\sqrt{1 - \\frac{25}{169}} = -\\sqrt{\\frac{144}{169}} = -\\frac{12}{13}\\).",
    "solutionSteps": [
      {
        "explanation": "Determine the correct quadrant based on the given signs of the trigonometric functions.",
        "workingOut": "Quadrant IV. Apply sin^2 \theta + cos^2 \theta = 1.",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -4,
              4,
              4,
              -4
            ],
            "boardOptions": {
              "keepaspectratio": true,
              "showNavigation": false,
              "axis": true
            },
            "elements": [],
            "script": "board.suspendUpdate();\nvar origin = board.create('point', [0, 0], {visible: false, name: ''});\nvar p = board.create('point', [2.5, -2.5], {name: '', size: 3, color: 'blue'});\nboard.create('segment', [origin, p], {strokeColor: 'blue', strokeWidth: 2});\nvar xAxis = board.create('point', [2, 0], {visible: false, name: ''});\nboard.create('angle', [xAxis, origin, p], {radius: 1, color: 'red', name: '\\\\theta'});\nboard.create('text', [2.5, -3, 'Quadrant IV'], {fontSize: 16, color: 'blue', anchorX: 'middle'});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Calculate the magnitude of the required trigonometric ratio using a reference right-angled triangle or Pythagorean identity (e.g., \\(\\sin^2 A + \\cos^2 A = 1\\)).",
        "workingOut": "In Quadrant IV, sine is negative. Since \\(\\cos \\theta = \\frac{5}{13}\\), \\(\\sin \\theta = -\\sqrt{1 - \\cos^2 \\theta} = -\\sqrt{1 - \\left(\\frac{5}{13}\\right)^2} = -\\sqrt{1 - \\frac{25}{169}} = -\\sqrt{\\frac{144}{169}} = -\\frac{12}{13}\\).",
        "graphData": null
      },
      {
        "explanation": "Apply the correct sign for the determined quadrant to obtain the final answer.",
        "workingOut": "\\\\(\\\\frac{-12}{13}\\\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6e-q3aii",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Let \\(\\cos \\theta = \\frac{5}{13}\\), where \\(270^{\\circ} < \\theta < 360^{\\circ}\\). Find \\(\\tan \\theta\\).",
    "opts": [
      "\\\\(-1.4\\\\)",
      "\\\\(\\\\frac{-12}{5}\\\\)",
      "\\\\(-3.4\\\\)",
      "\\\\(2.4\\\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Use tan \\theta = sin \\theta / cos \\theta.",
    "solution": "Since \\(\\sin \\theta = -\\frac{12}{13}\\) and \\(\\cos \\theta = \\frac{5}{13}\\), we get \\(\\tan \\theta = \\frac{\\sin \\theta}{\\cos \\theta} = \\frac{-12/13}{5/13} = -\\frac{12}{5}\\).",
    "solutionSteps": [
      {
        "explanation": "Determine the correct quadrant based on the given signs of the trigonometric functions.",
        "workingOut": "Use tan \\theta = sin \\theta / cos \\theta.",
        "graphData": null
      },
      {
        "explanation": "Calculate the magnitude of the required trigonometric ratio using a reference right-angled triangle or Pythagorean identity (e.g., \\(\\sin^2 A + \\cos^2 A = 1\\)).",
        "workingOut": "Since \\(\\sin \\theta = -\\frac{12}{13}\\) and \\(\\cos \\theta = \\frac{5}{13}\\), we get \\(\\tan \\theta = \\frac{\\sin \\theta}{\\cos \\theta} = \\frac{-12/13}{5/13} = -\\frac{12}{5}\\).",
        "graphData": null
      },
      {
        "explanation": "Apply the correct sign for the determined quadrant to obtain the final answer.",
        "workingOut": "\\\\(\\\\frac{-12}{5}\\\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6e-q3bi",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Let \\(\\tan \\theta = -\\frac{3}{4}\\), where \\(\\theta\\) is obtuse. Find \\(\\sin \\theta\\).",
    "opts": [
      "\\\\(-0.4\\\\)",
      "\\\\(-0.6\\\\)",
      "\\\\(\\\\frac{3}{5}\\\\)",
      "\\\\(1.6\\\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Obtuse means Quadrant II, where sine is positive. Use a right-angled triangle ratio.",
    "solution": "In Quadrant II, sine is positive. Given \\(\\tan \\theta = -\\frac{3}{4}\\), the opposite side is \\(3\\) and the adjacent is \\(4\\). The hypotenuse is \\(\\sqrt{3^2 + 4^2} = 5\\). Thus, \\(\\sin \\theta = \\frac{3}{5}\\).",
    "solutionSteps": [
      {
        "explanation": "Determine the correct quadrant based on the given signs of the trigonometric functions.",
        "workingOut": "Obtuse means Quadrant II, where sine is positive. Use a right-angled triangle ratio.",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -4,
              4,
              4,
              -4
            ],
            "boardOptions": {
              "keepaspectratio": true,
              "showNavigation": false,
              "axis": true
            },
            "elements": [],
            "script": "board.suspendUpdate();\nvar origin = board.create('point', [0, 0], {visible: false, name: ''});\nvar p = board.create('point', [-2.5, 2.5], {name: '', size: 3, color: 'blue'});\nboard.create('segment', [origin, p], {strokeColor: 'blue', strokeWidth: 2});\nvar xAxis = board.create('point', [2, 0], {visible: false, name: ''});\nboard.create('angle', [xAxis, origin, p], {radius: 1, color: 'red', name: '\\\\theta'});\nboard.create('text', [-2.5, 3, 'Quadrant II'], {fontSize: 16, color: 'blue', anchorX: 'middle'});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Calculate the magnitude of the required trigonometric ratio using a reference right-angled triangle or Pythagorean identity (e.g., \\(\\sin^2 A + \\cos^2 A = 1\\)).",
        "workingOut": "In Quadrant II, sine is positive. Given \\(\\tan \\theta = -\\frac{3}{4}\\), the opposite side is \\(3\\) and the adjacent is \\(4\\). The hypotenuse is \\(\\sqrt{3^2 + 4^2} = 5\\).",
        "graphData": null
      },
      {
        "explanation": "Apply the correct sign for the determined quadrant to obtain the final answer.",
        "workingOut": "\\\\(\\\\frac{3}{5}\\\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6e-q3bii",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Let \\(\\tan \\theta = -\\frac{3}{4}\\), where \\(\\theta\\) is obtuse. Find \\(\\cos \\theta\\).",
    "opts": [
      "\\\\(\\\\frac{-4}{5}\\\\)",
      "\\\\(-1.8\\\\)",
      "\\\\(0.19999999999999996\\\\)",
      "\\\\(0.8\\\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Obtuse means Quadrant II, where cosine is negative.",
    "solution": "In Quadrant II, cosine is negative. With \\(\\text{Adjacent} = 4\\) and \\(\\text{Hypotenuse} = 5\\), \\(\\cos \\theta = -\\frac{4}{5}\\).",
    "solutionSteps": [
      {
        "explanation": "Determine the correct quadrant based on the given signs of the trigonometric functions.",
        "workingOut": "Obtuse means Quadrant II, where cosine is negative.",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -4,
              4,
              4,
              -4
            ],
            "boardOptions": {
              "keepaspectratio": true,
              "showNavigation": false,
              "axis": true
            },
            "elements": [],
            "script": "board.suspendUpdate();\nvar origin = board.create('point', [0, 0], {visible: false, name: ''});\nvar p = board.create('point', [-2.5, 2.5], {name: '', size: 3, color: 'blue'});\nboard.create('segment', [origin, p], {strokeColor: 'blue', strokeWidth: 2});\nvar xAxis = board.create('point', [2, 0], {visible: false, name: ''});\nboard.create('angle', [xAxis, origin, p], {radius: 1, color: 'red', name: '\\\\theta'});\nboard.create('text', [-2.5, 3, 'Quadrant II'], {fontSize: 16, color: 'blue', anchorX: 'middle'});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Calculate the magnitude of the required trigonometric ratio using a reference right-angled triangle or Pythagorean identity (e.g., \\(\\sin^2 A + \\cos^2 A = 1\\)).",
        "workingOut": "In Quadrant II, cosine is negative. With \\(\\text{Adjacent} = 4\\) and \\(\\text{Hypotenuse} = 5\\), \\(\\cos \\theta = -\\frac{4}{5}\\).",
        "graphData": null
      },
      {
        "explanation": "Apply the correct sign for the determined quadrant to obtain the final answer.",
        "workingOut": "\\\\(\\\\frac{-4}{5}\\\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6e-q4ai",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Suppose that \\(\\sin \\theta = -\\frac{\\sqrt{5}}{3}\\). Find the possible values of \\(\\cos \\theta\\) (express as 'value or -value').",
    "opts": [
      "\\\\(\\\\frac{-2}{3} or \\\\frac{-2}{3}\\\\)",
      "\\\\(\\\\frac{2}{3} or \\\\frac{-2}{3}\\\\)",
      "\\\\(\\\\frac{2}{3} or \\\\frac{-2}{3} + 1\\\\)",
      "\\\\(\\\\frac{4}{4} or \\\\frac{-4}{4}\\\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Find cos^2 \theta = 1 - sin^2 \theta, then take square root.",
    "solution": "Using \\(\\cos^2 \\theta = 1 - \\sin^2 \\theta = 1 - \\left(-\\frac{\\sqrt{5}}{3}\\right)^2 = 1 - \\frac{5}{9} = \\frac{4}{9}\\). Taking the square root, \\(\\cos \\theta = \\pm \\frac{2}{3}\\). Hence, the possible values are \\(2/3 \\text{ or } -2/3\\).",
    "solutionSteps": [
      {
        "explanation": "Determine the correct quadrant based on the given signs of the trigonometric functions.",
        "workingOut": "Find cos^2 \theta = 1 - sin^2 \theta, then take square root.",
        "graphData": null
      },
      {
        "explanation": "Calculate the magnitude of the required trigonometric ratio using a reference right-angled triangle or Pythagorean identity (e.g., \\(\\sin^2 A + \\cos^2 A = 1\\)).",
        "workingOut": "Using \\(\\cos^2 \\theta = 1 - \\sin^2 \\theta = 1 - \\left(-\\frac{\\sqrt{5}}{3}\\right)^2 = 1 - \\frac{5}{9} = \\frac{4}{9}\\). Taking the square root, \\(\\cos \\theta = \\pm \\frac{2}{3}\\). Hence, the possible values are \\(2/3 \\text{ or } -2/3\\).",
        "graphData": null
      },
      {
        "explanation": "Apply the correct sign for the determined quadrant to obtain the final answer.",
        "workingOut": "\\\\(\\\\frac{2}{3} or \\\\frac{-2}{3}\\\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6e-q4aii",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Suppose that \\(\\sin \\theta = -\\frac{\\sqrt{5}}{3}\\). Find the possible values of \\(\\tan \\theta\\).",
    "opts": [
      "\\\\(\\\\sqrt{5}/2 or -\\\\sqrt{5}/2\\\\)",
      "\\\\(The opposite of this statement is true.\\\\)",
      "\\\\(This is true only when the function is linear.\\\\)",
      "\\\\(This only holds for positive values of x.\\\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Use tan \\theta = sin \\theta / cos \\theta.",
    "solution": "Since \\(\\sin \\theta = -\\frac{\\sqrt{5}}{3}\\) and \\(\\cos \\theta = \\pm \\frac{2}{3}\\), \\(\\tan \\theta = \\frac{-\\sqrt{5}/3}{\\pm 2/3} = \\pm \\frac{\\sqrt{5}}{2}\\). Hence, \\(\\sqrt{5}/2 \\text{ or } -\\sqrt{5}/2\\).",
    "solutionSteps": [
      {
        "explanation": "Determine the correct quadrant based on the given signs of the trigonometric functions.",
        "workingOut": "Use tan \\theta = sin \\theta / cos \\theta.",
        "graphData": null
      },
      {
        "explanation": "Calculate the magnitude of the required trigonometric ratio using a reference right-angled triangle or Pythagorean identity (e.g., \\(\\sin^2 A + \\cos^2 A = 1\\)).",
        "workingOut": "Since \\(\\sin \\theta = -\\frac{\\sqrt{5}}{3}\\) and \\(\\cos \\theta = \\pm \\frac{2}{3}\\), \\(\\tan \\theta = \\frac{-\\sqrt{5}/3}{\\pm 2/3} = \\pm \\frac{\\sqrt{5}}{2}\\). Hence, \\(\\sqrt{5}/2 \\text{ or } -\\sqrt{5}/2\\).",
        "graphData": null
      },
      {
        "explanation": "Apply the correct sign for the determined quadrant to obtain the final answer.",
        "workingOut": "\\\\(\\\\sqrt{5}/2 or -\\\\sqrt{5}/2\\\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6e-q4bi",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Suppose that \\(\\cos \\theta = -\\frac{1}{3}\\). Find the possible values of \\(\\sin \\theta\\).",
    "opts": [
      "\\\\(\\\\sqrt{8}/3 or -\\\\sqrt{8}/3\\\\)",
      "\\\\(The opposite of this statement is true.\\\\)",
      "\\\\(This is true only when the function is linear.\\\\)",
      "\\\\(This only holds for positive values of x.\\\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Find sin^2 \theta = 1 - cos^2 \theta.",
    "solution": "We have \\(\\sin^2 \\theta = 1 - \\cos^2 \\theta = 1 - \\left(-\\frac{1}{3}\\right)^2 = 1 - \\frac{1}{9} = \\frac{8}{9}\\). Thus, \\(\\sin \\theta = \\pm \\frac{\\sqrt{8}}{3}\\).",
    "solutionSteps": [
      {
        "explanation": "Determine the correct quadrant based on the given signs of the trigonometric functions.",
        "workingOut": "Find sin^2 \theta = 1 - cos^2 \theta.",
        "graphData": null
      },
      {
        "explanation": "Calculate the magnitude of the required trigonometric ratio using a reference right-angled triangle or Pythagorean identity (e.g., \\(\\sin^2 A + \\cos^2 A = 1\\)).",
        "workingOut": "We have \\(\\sin^2 \\theta = 1 - \\cos^2 \\theta = 1 - \\left(-\\frac{1}{3}\\right)^2 = 1 - \\frac{1}{9} = \\frac{8}{9}\\).",
        "graphData": null
      },
      {
        "explanation": "Apply the correct sign for the determined quadrant to obtain the final answer.",
        "workingOut": "\\\\(\\\\sqrt{8}/3 or -\\\\sqrt{8}/3\\\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6e-q4bii",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Suppose that \\(\\cos \\theta = -\\frac{1}{3}\\). Find the possible values of \\(\\tan \\theta\\).",
    "opts": [
      "\\\\(\\\\sqrt{8} or -\\\\sqrt{8}\\\\)",
      "\\\\(The opposite of this statement is true.\\\\)",
      "\\\\(This is true only when the function is linear.\\\\)",
      "\\\\(This only holds for positive values of x.\\\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Use tan \\theta = sin \\theta / cos \\theta.",
    "solution": "Since \\(\\cos \\theta = -\\frac{1}{3}\\) and \\(\\sin \\theta = \\pm \\frac{\\sqrt{8}}{3}\\), \\(\\tan \\theta = \\frac{\\pm \\sqrt{8}/3}{-1/3} = \\pm \\sqrt{8}\\).",
    "solutionSteps": [
      {
        "explanation": "Determine the correct quadrant based on the given signs of the trigonometric functions.",
        "workingOut": "Use tan \\theta = sin \\theta / cos \\theta.",
        "graphData": null
      },
      {
        "explanation": "Calculate the magnitude of the required trigonometric ratio using a reference right-angled triangle or Pythagorean identity (e.g., \\(\\sin^2 A + \\cos^2 A = 1\\)).",
        "workingOut": "Since \\(\\cos \\theta = -\\frac{1}{3}\\) and \\(\\sin \\theta = \\pm \\frac{\\sqrt{8}}{3}\\), \\(\\tan \\theta = \\frac{\\pm \\sqrt{8}/3}{-1/3} = \\pm \\sqrt{8}\\).",
        "graphData": null
      },
      {
        "explanation": "Apply the correct sign for the determined quadrant to obtain the final answer.",
        "workingOut": "\\\\(\\\\sqrt{8} or -\\\\sqrt{8}\\\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6e-q5a",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "If \\(\\cos \\theta = \\frac{1}{4}\\) and \\(\\theta\\) is acute, find the exact value of \\(\\tan \\theta\\).",
    "opts": [
      "\\\\(\\dfrac{12}{x + 2}\\\\)",
      "\\\\(\\dfrac{13}{x + 3}\\\\)",
      "\\\\(\\\\sqrt{15}\\\\)",
      "\\\\(\\\\sqrt{15} + 1\\\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Since \theta is acute, tan is positive.",
    "solution": "Since \\(\\theta\\) is acute (Quadrant I), \\(\\tan \\theta\\) is positive. \\(\\sin \\theta = \\sqrt{1 - \\cos^2 \\theta} = \\sqrt{1 - \\frac{1}{16}} = \\frac{\\sqrt{15}}{4}\\). Thus, \\(\\tan \\theta = \\frac{\\sin \\theta}{\\cos \\theta} = \\frac{\\sqrt{15}/4}{1/4} = \\sqrt{15}\\).",
    "solutionSteps": [
      {
        "explanation": "Determine the correct quadrant based on the given signs of the trigonometric functions.",
        "workingOut": "Since \theta is acute, tan is positive.",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -4,
              4,
              4,
              -4
            ],
            "boardOptions": {
              "keepaspectratio": true,
              "showNavigation": false,
              "axis": true
            },
            "elements": [],
            "script": "board.suspendUpdate();\nvar origin = board.create('point', [0, 0], {visible: false, name: ''});\nvar p = board.create('point', [2.5, 2.5], {name: '', size: 3, color: 'blue'});\nboard.create('segment', [origin, p], {strokeColor: 'blue', strokeWidth: 2});\nvar xAxis = board.create('point', [2, 0], {visible: false, name: ''});\nboard.create('angle', [xAxis, origin, p], {radius: 1, color: 'red', name: '\\\\theta'});\nboard.create('text', [2.5, 3, 'Quadrant I'], {fontSize: 16, color: 'blue', anchorX: 'middle'});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Calculate the magnitude of the required trigonometric ratio using a reference right-angled triangle or Pythagorean identity (e.g., \\(\\sin^2 A + \\cos^2 A = 1\\)).",
        "workingOut": "Since \\(\\theta\\) is acute (Quadrant I), \\(\\tan \\theta\\) is positive. \\(\\sin \\theta = \\sqrt{1 - \\cos^2 \\theta} = \\sqrt{1 - \\frac{1}{16}} = \\frac{\\sqrt{15}}{4}\\).",
        "graphData": null
      },
      {
        "explanation": "Apply the correct sign for the determined quadrant to obtain the final answer.",
        "workingOut": "\\\\(\\\\sqrt{15}\\\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6e-q5b",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "If \\(\\cos \\theta = -\\frac{3}{5}\\) and \\(\\theta\\) is obtuse, find the exact value of \\(\\tan \\theta\\).",
    "opts": [
      "\\\\(-0.33333333333333326\\\\)",
      "\\\\(\\\\frac{-4}{3}\\\\)",
      "\\\\(-2.333333333333333\\\\)",
      "\\\\(1.3333333333333333\\\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Obtuse means Quadrant II, where tangent is negative.",
    "solution": "In Quadrant II, tangent is negative. Since \\(\\cos \\theta = -\\frac{3}{5}\\), \\(\\sin \\theta = \\frac{4}{5}\\). Therefore, \\(\\tan \\theta = \\frac{\\sin \\theta}{\\cos \\theta} = \\frac{4/5}{-3/5} = -\\frac{4}{3}\\).",
    "solutionSteps": [
      {
        "explanation": "Determine the correct quadrant based on the given signs of the trigonometric functions.",
        "workingOut": "Obtuse means Quadrant II, where tangent is negative.",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -4,
              4,
              4,
              -4
            ],
            "boardOptions": {
              "keepaspectratio": true,
              "showNavigation": false,
              "axis": true
            },
            "elements": [],
            "script": "board.suspendUpdate();\nvar origin = board.create('point', [0, 0], {visible: false, name: ''});\nvar p = board.create('point', [-2.5, 2.5], {name: '', size: 3, color: 'blue'});\nboard.create('segment', [origin, p], {strokeColor: 'blue', strokeWidth: 2});\nvar xAxis = board.create('point', [2, 0], {visible: false, name: ''});\nboard.create('angle', [xAxis, origin, p], {radius: 1, color: 'red', name: '\\\\theta'});\nboard.create('text', [-2.5, 3, 'Quadrant II'], {fontSize: 16, color: 'blue', anchorX: 'middle'});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Calculate the magnitude of the required trigonometric ratio using a reference right-angled triangle or Pythagorean identity (e.g., \\(\\sin^2 A + \\cos^2 A = 1\\)).",
        "workingOut": "In Quadrant II, tangent is negative. Since \\(\\cos \\theta = -\\frac{3}{5}\\), \\(\\sin \\theta = \\frac{4}{5}\\). Therefore, \\(\\tan \\theta = \\frac{\\sin \\theta}{\\cos \\theta} = \\frac{4/5}{-3/5} = -\\frac{4}{3}\\).",
        "graphData": null
      },
      {
        "explanation": "Apply the correct sign for the determined quadrant to obtain the final answer.",
        "workingOut": "\\\\(\\\\frac{-4}{3}\\\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6e-q5c",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "If \\(\\cos \\theta = \\frac{1}{3}\\) and \\(\\theta\\) is reflex, find the exact value of \\(\\sin \\theta\\).",
    "opts": [
      "\\\\(-\\\\sqrt{8}/3\\\\)",
      "\\\\(-\\\\sqrt{8}/3 + 1\\\\)",
      "\\\\(-\\\\sqrt{8}/4\\\\)",
      "\\\\(\\\\sqrt{8}/3\\\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Reflex angle is in Q3 or Q4. Since cosine is positive, it must be Q4, so sine is negative.",
    "solution": "A reflex angle is between 180° and 360°. Since \\(\\cos \\theta = \\frac{1}{3}\\) is positive, \\(\\theta\\) must lie in Quadrant IV. In Quadrant IV, sine is negative. Thus, \\(\\sin \\theta = -\\sqrt{1 - \\cos^2 \\theta} = -\\sqrt{1 - \\frac{1}{9}} = -\\frac{\\sqrt{8}}{3}\\).",
    "solutionSteps": [
      {
        "explanation": "Determine the correct quadrant based on the given signs of the trigonometric functions.",
        "workingOut": "Reflex angle is in Q3 or Q4. Since cosine is positive, it must be Q4, so sine is negative.",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -4,
              4,
              4,
              -4
            ],
            "boardOptions": {
              "keepaspectratio": true,
              "showNavigation": false,
              "axis": true
            },
            "elements": [],
            "script": "board.suspendUpdate();\nvar origin = board.create('point', [0, 0], {visible: false, name: ''});\nvar p = board.create('point', [2.5, -2.5], {name: '', size: 3, color: 'blue'});\nboard.create('segment', [origin, p], {strokeColor: 'blue', strokeWidth: 2});\nvar xAxis = board.create('point', [2, 0], {visible: false, name: ''});\nboard.create('angle', [xAxis, origin, p], {radius: 1, color: 'red', name: '\\\\theta'});\nboard.create('text', [2.5, -3, 'Quadrant IV'], {fontSize: 16, color: 'blue', anchorX: 'middle'});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Calculate the magnitude of the required trigonometric ratio using a reference right-angled triangle or Pythagorean identity (e.g., \\(\\sin^2 A + \\cos^2 A = 1\\)).",
        "workingOut": "A reflex angle is between 180° and 360°. Since \\(\\cos \\theta = \\frac{1}{3}\\) is positive, \\(\\theta\\) must lie in Quadrant IV. In Quadrant IV, sine is negative.",
        "graphData": null
      },
      {
        "explanation": "Apply the correct sign for the determined quadrant to obtain the final answer.",
        "workingOut": "\\\\(-\\\\sqrt{8}/3\\\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6e-q5d",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Find the exact value of \\(\\cos \\theta\\) if \\(\\tan \\theta = -\\frac{3}{4}\\) and \\(\\theta\\) is reflex.",
    "opts": [
      "\\\\(-0.19999999999999996\\\\)",
      "\\\\(-0.8\\\\)",
      "\\\\(\\\\frac{4}{5}\\\\)",
      "\\\\(1.8\\\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Reflex angle with negative tangent must be in Quadrant IV. Cosine is positive.",
    "solution": "Reflex and negative tangent means Quadrant IV. In Quadrant IV, cosine is positive. \\(\\text{Adjacent} = 4\\), \\(\\text{Opposite} = 3\\), so \\(\\text{Hypotenuse} = 5\\). Thus, \\(\\cos \\theta = \\frac{4}{5}\\).",
    "solutionSteps": [
      {
        "explanation": "Determine the correct quadrant based on the given signs of the trigonometric functions.",
        "workingOut": "Reflex angle with negative tangent must be in Quadrant IV. Cosine is positive.",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -4,
              4,
              4,
              -4
            ],
            "boardOptions": {
              "keepaspectratio": true,
              "showNavigation": false,
              "axis": true
            },
            "elements": [],
            "script": "board.suspendUpdate();\nvar origin = board.create('point', [0, 0], {visible: false, name: ''});\nvar p = board.create('point', [2.5, -2.5], {name: '', size: 3, color: 'blue'});\nboard.create('segment', [origin, p], {strokeColor: 'blue', strokeWidth: 2});\nvar xAxis = board.create('point', [2, 0], {visible: false, name: ''});\nboard.create('angle', [xAxis, origin, p], {radius: 1, color: 'red', name: '\\\\theta'});\nboard.create('text', [2.5, -3, 'Quadrant IV'], {fontSize: 16, color: 'blue', anchorX: 'middle'});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Calculate the magnitude of the required trigonometric ratio using a reference right-angled triangle or Pythagorean identity (e.g., \\(\\sin^2 A + \\cos^2 A = 1\\)).",
        "workingOut": "Reflex and negative tangent means Quadrant IV. In Quadrant IV, cosine is positive. \\(\\text{Adjacent} = 4\\), \\(\\text{Opposite} = 3\\), so \\(\\text{Hypotenuse} = 5\\).",
        "graphData": null
      },
      {
        "explanation": "Apply the correct sign for the determined quadrant to obtain the final answer.",
        "workingOut": "\\\\(\\\\frac{4}{5}\\\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6e-q5e",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Find \\(\\sin \\theta\\), given that \\(\\cos \\theta = -\\frac{24}{25}\\) and \\(0^{\\circ} \\le \\theta \\le 180^{\\circ}\\).",
    "opts": [
      "\\\\(-0.28\\\\)",
      "\\\\(-0.72\\\\)",
      "\\\\(\\\\frac{7}{25}\\\\)",
      "\\\\(1.28\\\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Since cosine is negative, the angle is in Quadrant II. Sine is positive.",
    "solution": "Since \\(\\cos \\theta < 0\\) and \\(0^{\\circ} \\le \\theta \\le 180^{\\circ}\\), \\(\\theta\\) must be in Quadrant II. In Quadrant II, sine is positive. Thus, \\(\\sin \\theta = \\sqrt{1 - \\cos^2 \\theta} = \\sqrt{1 - \\left(-\\frac{24}{25}\\right)^2} = \\sqrt{\\frac{49}{625}} = \\frac{7}{25}\\).",
    "solutionSteps": [
      {
        "explanation": "Determine the correct quadrant based on the given signs of the trigonometric functions.",
        "workingOut": "Since cosine is negative, the angle is in Quadrant II. Sine is positive.",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -4,
              4,
              4,
              -4
            ],
            "boardOptions": {
              "keepaspectratio": true,
              "showNavigation": false,
              "axis": true
            },
            "elements": [],
            "script": "board.suspendUpdate();\nvar origin = board.create('point', [0, 0], {visible: false, name: ''});\nvar p = board.create('point', [-2.5, 2.5], {name: '', size: 3, color: 'blue'});\nboard.create('segment', [origin, p], {strokeColor: 'blue', strokeWidth: 2});\nvar xAxis = board.create('point', [2, 0], {visible: false, name: ''});\nboard.create('angle', [xAxis, origin, p], {radius: 1, color: 'red', name: '\\\\theta'});\nboard.create('text', [-2.5, 3, 'Quadrant II'], {fontSize: 16, color: 'blue', anchorX: 'middle'});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Calculate the magnitude of the required trigonometric ratio using a reference right-angled triangle or Pythagorean identity (e.g., \\(\\sin^2 A + \\cos^2 A = 1\\)).",
        "workingOut": "Since \\(\\cos \\theta < 0\\) and \\(0^{\\circ} \\le \\theta \\le 180^{\\circ}\\), \\(\\theta\\) must be in Quadrant II. In Quadrant II, sine is positive.",
        "graphData": null
      },
      {
        "explanation": "Apply the correct sign for the determined quadrant to obtain the final answer.",
        "workingOut": "\\\\(\\\\frac{7}{25}\\\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6e-q5f",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Find \\(\\tan \\theta\\), given that \\(\\sin \\theta = \\frac{1}{\\sqrt{10}}\\) and \\(-90^{\\circ} \\le \\theta \\le 90^{\\circ}\\).",
    "opts": [
      "\\\\(-0.3333333333333333\\\\)",
      "\\\\(-0.6666666666666667\\\\)",
      "\\\\(\\\\frac{1}{3}\\\\)",
      "\\\\(1.3333333333333333\\\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Since sine is positive, the angle is in Quadrant I. Cosine and tangent are positive.",
    "solution": "Sine is positive in \\([-90^{\\circ}, 90^{\\circ}]\\), placing it in Quadrant I. \\(\\cos \\theta = \\sqrt{1 - \\sin^2 \\theta} = \\sqrt{1 - \\frac{1}{10}} = \\frac{3}{\\sqrt{10}}\\). Thus, \\(\\tan \\theta = \\frac{\\sin \\theta}{\\cos \\theta} = \\frac{1/\\sqrt{10}}{3/\\sqrt{10}} = \\frac{1}{3}\\).",
    "solutionSteps": [
      {
        "explanation": "Determine the correct quadrant based on the given signs of the trigonometric functions.",
        "workingOut": "Since sine is positive, the angle is in Quadrant I. Cosine and tangent are positive.",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -4,
              4,
              4,
              -4
            ],
            "boardOptions": {
              "keepaspectratio": true,
              "showNavigation": false,
              "axis": true
            },
            "elements": [],
            "script": "board.suspendUpdate();\nvar origin = board.create('point', [0, 0], {visible: false, name: ''});\nvar p = board.create('point', [2.5, 2.5], {name: '', size: 3, color: 'blue'});\nboard.create('segment', [origin, p], {strokeColor: 'blue', strokeWidth: 2});\nvar xAxis = board.create('point', [2, 0], {visible: false, name: ''});\nboard.create('angle', [xAxis, origin, p], {radius: 1, color: 'red', name: '\\\\theta'});\nboard.create('text', [2.5, 3, 'Quadrant I'], {fontSize: 16, color: 'blue', anchorX: 'middle'});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Calculate the magnitude of the required trigonometric ratio using a reference right-angled triangle or Pythagorean identity (e.g., \\(\\sin^2 A + \\cos^2 A = 1\\)).",
        "workingOut": "Sine is positive in \\([-90^{\\circ}, 90^{\\circ}]\\), placing it in Quadrant I. \\(\\cos \\theta = \\sqrt{1 - \\sin^2 \\theta} = \\sqrt{1 - \\frac{1}{10}} = \\frac{3}{\\sqrt{10}}\\).",
        "graphData": null
      },
      {
        "explanation": "Apply the correct sign for the determined quadrant to obtain the final answer.",
        "workingOut": "\\\\(\\\\frac{1}{3}\\\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6e-q6a",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "If \\(\\tan \\alpha = \\frac{1}{2}\\), find the possible values of \\(\\sin \\alpha\\). (Express as 'value or -value')",
    "opts": [
      "\\\\(\\\\frac{-1}{\\\\sqrt{5}} or \\\\frac{-1}{\\\\sqrt{5}}\\\\)",
      "\\\\(\\\\frac{1}{\\\\sqrt{5}} or +\\\\frac{1}{\\\\sqrt{5}}\\\\)",
      "\\\\(\\\\frac{1}{\\\\sqrt{5}} or \\\\frac{-1}{\\\\sqrt{5}}\\\\)",
      "\\\\(\\\\frac{1}{\\\\sqrt{5}} or \\\\frac{-1}{\\\\sqrt{5}} + 1\\\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "tan is positive in Q1 and Q3, so sin can be positive or negative.",
    "solution": "Given \\(\\tan \\alpha = \\frac{1}{2}\\), the hypotenuse is \\(\\sqrt{1^2 + 2^2} = \\sqrt{5}\\). Tangent is positive in Quadrants I and III. Thus, \\(\\sin \\alpha\\) can be positive or negative: \\(\\sin \\alpha = \\pm \\frac{1}{\\sqrt{5}}\\). Hence, \\(1/\\sqrt{5} \\text{ or } -1/\\sqrt{5}\\).",
    "solutionSteps": [
      {
        "explanation": "Determine the correct quadrant based on the given signs of the trigonometric functions.",
        "workingOut": "tan is positive in Q1 and Q3, so sin can be positive or negative.",
        "graphData": null
      },
      {
        "explanation": "Calculate the magnitude of the required trigonometric ratio using a reference right-angled triangle or Pythagorean identity (e.g., \\(\\sin^2 A + \\cos^2 A = 1\\)).",
        "workingOut": "Given \\(\\tan \\alpha = \\frac{1}{2}\\), the hypotenuse is \\(\\sqrt{1^2 + 2^2} = \\sqrt{5}\\). Tangent is positive in Quadrants I and III.",
        "graphData": null
      },
      {
        "explanation": "Apply the correct sign for the determined quadrant to obtain the final answer.",
        "workingOut": "\\\\(\\\\frac{1}{\\\\sqrt{5}} or \\\\frac{-1}{\\\\sqrt{5}}\\\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6e-q6b",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "If \\(\\cos \\theta = \\frac{3}{\\sqrt{10}}\\), find the possible values of \\(\\sin \\theta\\).",
    "opts": [
      "\\\\(\\\\frac{-1}{\\\\sqrt{10}} or \\\\frac{-1}{\\\\sqrt{10}}\\\\)",
      "\\\\(\\\\frac{1}{\\\\sqrt{10}} or +\\\\frac{1}{\\\\sqrt{10}}\\\\)",
      "\\\\(\\\\frac{1}{\\\\sqrt{10}} or \\\\frac{-1}{\\\\sqrt{10}}\\\\)",
      "\\\\(\\\\frac{1}{\\\\sqrt{10}} or \\\\frac{-1}{\\\\sqrt{10}} + 1\\\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "cos is positive in Q1 and Q4.",
    "solution": "Cosine is positive in Quadrants I and IV. \\(\\sin \\theta = \\pm \\sqrt{1 - \\cos^2 \\theta} = \\pm \\sqrt{1 - \\frac{9}{10}} = \\pm \\frac{1}{\\sqrt{10}}\\).",
    "solutionSteps": [
      {
        "explanation": "Determine the correct quadrant based on the given signs of the trigonometric functions.",
        "workingOut": "cos is positive in Q1 and Q4.",
        "graphData": null
      },
      {
        "explanation": "Calculate the magnitude of the required trigonometric ratio using a reference right-angled triangle or Pythagorean identity (e.g., \\(\\sin^2 A + \\cos^2 A = 1\\)).",
        "workingOut": "Cosine is positive in Quadrants I and IV. \\(\\sin \\theta = \\pm \\sqrt{1 - \\cos^2 \\theta} = \\pm \\sqrt{1 - \\frac{9}{10}} = \\pm \\frac{1}{\\sqrt{10}}\\).",
        "graphData": null
      },
      {
        "explanation": "Apply the correct sign for the determined quadrant to obtain the final answer.",
        "workingOut": "\\\\(\\\\frac{1}{\\\\sqrt{10}} or \\\\frac{-1}{\\\\sqrt{10}}\\\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6e-q6c",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "If \\(\\sin \\theta = \\frac{4}{5}\\), find the possible values of \\(\\cos \\theta\\).",
    "opts": [
      "\\\\(\\\\frac{-3}{5} or \\\\frac{-3}{5}\\\\)",
      "\\\\(\\\\frac{3}{5} or \\\\frac{-3}{5}\\\\)",
      "\\\\(\\\\frac{3}{5} or \\\\frac{-3}{5} + 1\\\\)",
      "\\\\(\\\\frac{4}{5} or \\\\frac{-4}{5}\\\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "sin is positive in Q1 and Q2.",
    "solution": "Sine is positive in Quadrants I and II. \\(\\cos \\theta = \\pm \\sqrt{1 - \\sin^2 \\theta} = \\pm \\sqrt{1 - \\frac{16}{25}} = \\pm \\frac{3}{5}\\).",
    "solutionSteps": [
      {
        "explanation": "Determine the correct quadrant based on the given signs of the trigonometric functions.",
        "workingOut": "sin is positive in Q1 and Q2.",
        "graphData": null
      },
      {
        "explanation": "Calculate the magnitude of the required trigonometric ratio using a reference right-angled triangle or Pythagorean identity (e.g., \\(\\sin^2 A + \\cos^2 A = 1\\)).",
        "workingOut": "Sine is positive in Quadrants I and II. \\(\\cos \\theta = \\pm \\sqrt{1 - \\sin^2 \\theta} = \\pm \\sqrt{1 - \\frac{16}{25}} = \\pm \\frac{3}{5}\\).",
        "graphData": null
      },
      {
        "explanation": "Apply the correct sign for the determined quadrant to obtain the final answer.",
        "workingOut": "\\\\(\\\\frac{3}{5} or \\\\frac{-3}{5}\\\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6e-q6d",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the possible values of \\(\\tan \\theta\\), given that \\(\\cos \\theta = -\\frac{3}{4}\\).",
    "opts": [
      "\\\\(\\\\sqrt{7}/3 or -\\\\sqrt{7}/3\\\\)",
      "\\\\(The opposite of this statement is true.\\\\)",
      "\\\\(This is true only when the function is linear.\\\\)",
      "\\\\(This only holds for positive values of x.\\\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "cos is negative in Q2 and Q3.",
    "solution": "Cosine is negative in Quadrants II and III. \\(\\sin \\theta = \\pm \\sqrt{1 - \\cos^2 \\theta} = \\pm \\sqrt{1 - \\frac{9}{16}} = \\pm \\frac{\\sqrt{7}}{4}\\). Thus, \\(\\tan \\theta = \\frac{\\sin \\theta}{\\cos \\theta} = \\frac{\\pm \\sqrt{7}/4}{-3/4} = \\mp \\frac{\\sqrt{7}}{3}\\).",
    "solutionSteps": [
      {
        "explanation": "Determine the correct quadrant based on the given signs of the trigonometric functions.",
        "workingOut": "cos is negative in Q2 and Q3.",
        "graphData": null
      },
      {
        "explanation": "Calculate the magnitude of the required trigonometric ratio using a reference right-angled triangle or Pythagorean identity (e.g., \\(\\sin^2 A + \\cos^2 A = 1\\)).",
        "workingOut": "Cosine is negative in Quadrants II and III. \\(\\sin \\theta = \\pm \\sqrt{1 - \\cos^2 \\theta} = \\pm \\sqrt{1 - \\frac{9}{16}} = \\pm \\frac{\\sqrt{7}}{4}\\).",
        "graphData": null
      },
      {
        "explanation": "Apply the correct sign for the determined quadrant to obtain the final answer.",
        "workingOut": "\\\\(\\\\sqrt{7}/3 or -\\\\sqrt{7}/3\\\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6e-q6e",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the possible values of \\(\\tan \\theta\\), given that \\(\\sin \\theta = -\\frac{5}{13}\\).",
    "opts": [
      "\\\\(\\\\frac{-5}{12} or \\\\frac{-5}{12}\\\\)",
      "\\\\(\\\\frac{5}{12} or \\\\frac{-5}{12}\\\\)",
      "\\\\(\\\\frac{5}{12} or \\\\frac{-5}{12} + 1\\\\)",
      "\\\\(\\\\frac{5}{14} or \\\\frac{-5}{14}\\\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "sin is negative in Q3 and Q4.",
    "solution": "Sine is negative in Quadrants III and IV. \\(\\cos \\theta = \\pm \\sqrt{1 - \\sin^2 \\theta} = \\pm \\frac{12}{13}\\). Thus, \\(\\tan \\theta = \\frac{\\sin \\theta}{\\cos \\theta} = \\frac{-5/13}{\\pm 12/13} = \\mp \\frac{5}{12}\\).",
    "solutionSteps": [
      {
        "explanation": "Determine the correct quadrant based on the given signs of the trigonometric functions.",
        "workingOut": "sin is negative in Q3 and Q4.",
        "graphData": null
      },
      {
        "explanation": "Calculate the magnitude of the required trigonometric ratio using a reference right-angled triangle or Pythagorean identity (e.g., \\(\\sin^2 A + \\cos^2 A = 1\\)).",
        "workingOut": "Sine is negative in Quadrants III and IV. \\(\\cos \\theta = \\pm \\sqrt{1 - \\sin^2 \\theta} = \\pm \\frac{12}{13}\\).",
        "graphData": null
      },
      {
        "explanation": "Apply the correct sign for the determined quadrant to obtain the final answer.",
        "workingOut": "\\\\(\\\\frac{5}{12} or \\\\frac{-5}{12}\\\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6e-q6f",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the possible values of \\(\\cos \\theta\\), given that \\(\\tan \\theta = -\\frac{3}{\\sqrt{2}}\\).",
    "opts": [
      "\\\\(\\\\sqrt{2}/\\\\sqrt{11} or -\\\\sqrt{2}/\\\\sqrt{11}\\\\)",
      "\\\\(The opposite of this statement is true.\\\\)",
      "\\\\(This is true only when the function is linear.\\\\)",
      "\\\\(This only holds for positive values of x.\\\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "tan is negative in Q2 and Q4.",
    "solution": "Given \\(\\tan \\theta = -\\frac{3}{\\sqrt{2}}\\), \\(\\text{Opposite} = 3\\) and \\(\\text{Adjacent} = \\sqrt{2}\\). The hypotenuse is \\(\\sqrt{3^2 + (\\sqrt{2})^2} = \\sqrt{9 + 2} = \\sqrt{11}\\). Tangent is negative in Quadrants II and IV, so cosine can be negative or positive: \\(\\cos \\theta = \\pm \\frac{\\sqrt{2}}{\\sqrt{11}}\\).",
    "solutionSteps": [
      {
        "explanation": "Determine the correct quadrant based on the given signs of the trigonometric functions.",
        "workingOut": "tan is negative in Q2 and Q4.",
        "graphData": null
      },
      {
        "explanation": "Calculate the magnitude of the required trigonometric ratio using a reference right-angled triangle or Pythagorean identity (e.g., \\(\\sin^2 A + \\cos^2 A = 1\\)).",
        "workingOut": "Given \\(\\tan \\theta = -\\frac{3}{\\sqrt{2}}\\), \\(\\text{Opposite} = 3\\) and \\(\\text{Adjacent} = \\sqrt{2}\\). The hypotenuse is \\(\\sqrt{3^2 + (\\sqrt{2})^2} = \\sqrt{9 + 2} = \\sqrt{11}\\). Tangent is negative in Quadrants II and IV, so cosine can be negative or positive: \\(\\cos \\theta = \\pm \\frac{\\sqrt{2}}{\\sqrt{11}}\\).",
        "graphData": null
      },
      {
        "explanation": "Apply the correct sign for the determined quadrant to obtain the final answer.",
        "workingOut": "\\\\(\\\\sqrt{2}/\\\\sqrt{11} or -\\\\sqrt{2}/\\\\sqrt{11}\\\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6e-q7a",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "If \\(\\cos \\alpha = \\frac{3}{5}\\) and \\(\\sin \\alpha < 0\\), find the value of \\(\\tan \\alpha\\).",
    "opts": [
      "\\\\(-0.33333333333333326\\\\)",
      "\\\\(\\\\frac{-4}{3}\\\\)",
      "\\\\(-2.333333333333333\\\\)",
      "\\\\(1.3333333333333333\\\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Determine quadrant: positive cos and negative sin means Quadrant IV.",
    "solution": "Cosine is positive and sine is negative in Quadrant IV. In Quadrant IV, tangent is negative. Since \\(\\cos \\alpha = \\frac{3}{5}\\), \\(\\sin \\alpha = -\\frac{4}{5}\\). Thus, \\(\\tan \\alpha = \\frac{\\sin \\alpha}{\\cos \\alpha} = -\\frac{4}{3}\\).",
    "solutionSteps": [
      {
        "explanation": "Determine the correct quadrant based on the given signs of the trigonometric functions.",
        "workingOut": "Determine quadrant: positive cos and negative sin means Quadrant IV.",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -4,
              4,
              4,
              -4
            ],
            "boardOptions": {
              "keepaspectratio": true,
              "showNavigation": false,
              "axis": true
            },
            "elements": [],
            "script": "board.suspendUpdate();\nvar origin = board.create('point', [0, 0], {visible: false, name: ''});\nvar p = board.create('point', [2.5, -2.5], {name: '', size: 3, color: 'blue'});\nboard.create('segment', [origin, p], {strokeColor: 'blue', strokeWidth: 2});\nvar xAxis = board.create('point', [2, 0], {visible: false, name: ''});\nboard.create('angle', [xAxis, origin, p], {radius: 1, color: 'red', name: '\\\\theta'});\nboard.create('text', [2.5, -3, 'Quadrant IV'], {fontSize: 16, color: 'blue', anchorX: 'middle'});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Calculate the magnitude of the required trigonometric ratio using a reference right-angled triangle or Pythagorean identity (e.g., \\(\\sin^2 A + \\cos^2 A = 1\\)).",
        "workingOut": "Cosine is positive and sine is negative in Quadrant IV. In Quadrant IV, tangent is negative. Since \\(\\cos \\alpha = \\frac{3}{5}\\), \\(\\sin \\alpha = -\\frac{4}{5}\\).",
        "graphData": null
      },
      {
        "explanation": "Apply the correct sign for the determined quadrant to obtain the final answer.",
        "workingOut": "\\\\(\\\\frac{-4}{3}\\\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6e-q7b",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "If \\(\\tan \\theta = -\\frac{12}{5}\\) and \\(\\sin \\theta > 0\\), find the value of \\(\\cos \\theta\\).",
    "opts": [
      "\\\\(\\\\frac{-5}{13}\\\\)",
      "\\\\(-1.3846153846153846\\\\)",
      "\\\\(0.38461538461538464\\\\)",
      "\\\\(0.6153846153846154\\\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Negative tan and positive sin means Quadrant II.",
    "solution": "In Quadrant II, cosine is negative. With \\(\\text{Opposite} = 12\\), \\(\\text{Adjacent} = 5\\), the hypotenuse is \\(13\\). Thus, \\(\\cos \\theta = -\\frac{5}{13}\\).",
    "solutionSteps": [
      {
        "explanation": "Determine the correct quadrant based on the given signs of the trigonometric functions.",
        "workingOut": "Negative tan and positive sin means Quadrant II.",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -4,
              4,
              4,
              -4
            ],
            "boardOptions": {
              "keepaspectratio": true,
              "showNavigation": false,
              "axis": true
            },
            "elements": [],
            "script": "board.suspendUpdate();\nvar origin = board.create('point', [0, 0], {visible: false, name: ''});\nvar p = board.create('point', [-2.5, 2.5], {name: '', size: 3, color: 'blue'});\nboard.create('segment', [origin, p], {strokeColor: 'blue', strokeWidth: 2});\nvar xAxis = board.create('point', [2, 0], {visible: false, name: ''});\nboard.create('angle', [xAxis, origin, p], {radius: 1, color: 'red', name: '\\\\theta'});\nboard.create('text', [-2.5, 3, 'Quadrant II'], {fontSize: 16, color: 'blue', anchorX: 'middle'});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Calculate the magnitude of the required trigonometric ratio using a reference right-angled triangle or Pythagorean identity (e.g., \\(\\sin^2 A + \\cos^2 A = 1\\)).",
        "workingOut": "In Quadrant II, cosine is negative. With \\(\\text{Opposite} = 12\\), \\(\\text{Adjacent} = 5\\), the hypotenuse is \\(13\\).",
        "graphData": null
      },
      {
        "explanation": "Apply the correct sign for the determined quadrant to obtain the final answer.",
        "workingOut": "\\\\(\\\\frac{-5}{13}\\\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6e-q7c",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the value of \\(\\cos \\theta\\), given that \\(\\sin \\theta = \\frac{1}{3}\\) and \\(\\tan \\theta < 0\\).",
    "opts": [
      "\\\\(-\\\\sqrt{8}/3\\\\)",
      "\\\\(-\\\\sqrt{8}/3 + 1\\\\)",
      "\\\\(-\\\\sqrt{8}/4\\\\)",
      "\\\\(\\\\sqrt{8}/3\\\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Positive sin and negative tan means Quadrant II.",
    "solution": "In Quadrant II, cosine is negative. Thus, \\(\\cos \\theta = -\\sqrt{1 - \\sin^2 \\theta} = -\\sqrt{1 - \\frac{1}{9}} = -\\frac{\\sqrt{8}}{3}\\).",
    "solutionSteps": [
      {
        "explanation": "Determine the correct quadrant based on the given signs of the trigonometric functions.",
        "workingOut": "Positive sin and negative tan means Quadrant II.",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -4,
              4,
              4,
              -4
            ],
            "boardOptions": {
              "keepaspectratio": true,
              "showNavigation": false,
              "axis": true
            },
            "elements": [],
            "script": "board.suspendUpdate();\nvar origin = board.create('point', [0, 0], {visible: false, name: ''});\nvar p = board.create('point', [-2.5, 2.5], {name: '', size: 3, color: 'blue'});\nboard.create('segment', [origin, p], {strokeColor: 'blue', strokeWidth: 2});\nvar xAxis = board.create('point', [2, 0], {visible: false, name: ''});\nboard.create('angle', [xAxis, origin, p], {radius: 1, color: 'red', name: '\\\\theta'});\nboard.create('text', [-2.5, 3, 'Quadrant II'], {fontSize: 16, color: 'blue', anchorX: 'middle'});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Calculate the magnitude of the required trigonometric ratio using a reference right-angled triangle or Pythagorean identity (e.g., \\(\\sin^2 A + \\cos^2 A = 1\\)).",
        "workingOut": "In Quadrant II, cosine is negative.",
        "graphData": null
      },
      {
        "explanation": "Apply the correct sign for the determined quadrant to obtain the final answer.",
        "workingOut": "\\\\(-\\\\sqrt{8}/3\\\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6e-q7d",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the value of \\(\\sin \\theta\\), given that \\(\\tan \\theta = \\frac{15}{8}\\) and \\(\\cos \\theta > 0\\).",
    "opts": [
      "\\\\(-0.11764705882352944\\\\)",
      "\\\\(-0.8823529411764706\\\\)",
      "\\\\(\\\\frac{15}{17}\\\\)",
      "\\\\(1.8823529411764706\\\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Positive tan and positive cos means Quadrant I.",
    "solution": "In Quadrant I, sine is positive. With \\(\\text{Opposite} = 15\\), \\(\\text{Adjacent} = 8\\), the hypotenuse is \\(17\\). Thus, \\(\\sin \\theta = \\frac{15}{17}\\).",
    "solutionSteps": [
      {
        "explanation": "Determine the correct quadrant based on the given signs of the trigonometric functions.",
        "workingOut": "Positive tan and positive cos means Quadrant I.",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -4,
              4,
              4,
              -4
            ],
            "boardOptions": {
              "keepaspectratio": true,
              "showNavigation": false,
              "axis": true
            },
            "elements": [],
            "script": "board.suspendUpdate();\nvar origin = board.create('point', [0, 0], {visible: false, name: ''});\nvar p = board.create('point', [2.5, 2.5], {name: '', size: 3, color: 'blue'});\nboard.create('segment', [origin, p], {strokeColor: 'blue', strokeWidth: 2});\nvar xAxis = board.create('point', [2, 0], {visible: false, name: ''});\nboard.create('angle', [xAxis, origin, p], {radius: 1, color: 'red', name: '\\\\theta'});\nboard.create('text', [2.5, 3, 'Quadrant I'], {fontSize: 16, color: 'blue', anchorX: 'middle'});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Calculate the magnitude of the required trigonometric ratio using a reference right-angled triangle or Pythagorean identity (e.g., \\(\\sin^2 A + \\cos^2 A = 1\\)).",
        "workingOut": "In Quadrant I, sine is positive. With \\(\\text{Opposite} = 15\\), \\(\\text{Adjacent} = 8\\), the hypotenuse is \\(17\\).",
        "graphData": null
      },
      {
        "explanation": "Apply the correct sign for the determined quadrant to obtain the final answer.",
        "workingOut": "\\\\(\\\\frac{15}{17}\\\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6e-q7e",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the value of \\(\\tan \\theta\\), given that \\(\\sin \\theta = -\\frac{7}{25}\\) and \\(\\cos \\theta > 0\\).",
    "opts": [
      "\\\\(\\\\frac{-7}{24}\\\\)",
      "\\\\(-1.2916666666666667\\\\)",
      "\\\\(0.2916666666666667\\\\)",
      "\\\\(0.7083333333333333\\\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Negative sin and positive cos means Quadrant IV.",
    "solution": "In Quadrant IV, tangent is negative. Since \\(\\sin \\theta = -\\frac{7}{25}\\), the adjacent side is \\(\\sqrt{25^2 - 7^2} = 24\\), so \\(\\cos \\theta = \\frac{24}{25}\\). Thus, \\(\\tan \\theta = \\frac{\\sin \\theta}{\\cos \\theta} = -\\frac{7}{24}\\).",
    "solutionSteps": [
      {
        "explanation": "Determine the correct quadrant based on the given signs of the trigonometric functions.",
        "workingOut": "Negative sin and positive cos means Quadrant IV.",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -4,
              4,
              4,
              -4
            ],
            "boardOptions": {
              "keepaspectratio": true,
              "showNavigation": false,
              "axis": true
            },
            "elements": [],
            "script": "board.suspendUpdate();\nvar origin = board.create('point', [0, 0], {visible: false, name: ''});\nvar p = board.create('point', [2.5, -2.5], {name: '', size: 3, color: 'blue'});\nboard.create('segment', [origin, p], {strokeColor: 'blue', strokeWidth: 2});\nvar xAxis = board.create('point', [2, 0], {visible: false, name: ''});\nboard.create('angle', [xAxis, origin, p], {radius: 1, color: 'red', name: '\\\\theta'});\nboard.create('text', [2.5, -3, 'Quadrant IV'], {fontSize: 16, color: 'blue', anchorX: 'middle'});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Calculate the magnitude of the required trigonometric ratio using a reference right-angled triangle or Pythagorean identity (e.g., \\(\\sin^2 A + \\cos^2 A = 1\\)).",
        "workingOut": "In Quadrant IV, tangent is negative. Since \\(\\sin \\theta = -\\frac{7}{25}\\), the adjacent side is \\(\\sqrt{25^2 - 7^2} = 24\\), so \\(\\cos \\theta = \\frac{24}{25}\\).",
        "graphData": null
      },
      {
        "explanation": "Apply the correct sign for the determined quadrant to obtain the final answer.",
        "workingOut": "\\\\(\\\\frac{-7}{24}\\\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6e-q7f",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the value of \\(\\sin \\theta\\), given that \\(\\cos \\theta = -\\frac{4}{5}\\) and \\(\\tan \\theta < 0\\).",
    "opts": [
      "\\\\(-0.4\\\\)",
      "\\\\(-0.6\\\\)",
      "\\\\(\\\\frac{3}{5}\\\\)",
      "\\\\(1.6\\\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Negative cos and negative tan means Quadrant II.",
    "solution": "In Quadrant II, sine is positive. Since \\(\\cos \\theta = -\\frac{4}{5}\\), \\(\\sin \\theta = \\sqrt{1 - \\cos^2 \\theta} = \\frac{3}{5}\\).",
    "solutionSteps": [
      {
        "explanation": "Determine the correct quadrant based on the given signs of the trigonometric functions.",
        "workingOut": "Negative cos and negative tan means Quadrant II.",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -4,
              4,
              4,
              -4
            ],
            "boardOptions": {
              "keepaspectratio": true,
              "showNavigation": false,
              "axis": true
            },
            "elements": [],
            "script": "board.suspendUpdate();\nvar origin = board.create('point', [0, 0], {visible: false, name: ''});\nvar p = board.create('point', [-2.5, 2.5], {name: '', size: 3, color: 'blue'});\nboard.create('segment', [origin, p], {strokeColor: 'blue', strokeWidth: 2});\nvar xAxis = board.create('point', [2, 0], {visible: false, name: ''});\nboard.create('angle', [xAxis, origin, p], {radius: 1, color: 'red', name: '\\\\theta'});\nboard.create('text', [-2.5, 3, 'Quadrant II'], {fontSize: 16, color: 'blue', anchorX: 'middle'});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Calculate the magnitude of the required trigonometric ratio using a reference right-angled triangle or Pythagorean identity (e.g., \\(\\sin^2 A + \\cos^2 A = 1\\)).",
        "workingOut": "In Quadrant II, sine is positive. Since \\(\\cos \\theta = -\\frac{4}{5}\\), \\(\\sin \\theta = \\sqrt{1 - \\cos^2 \\theta} = \\frac{3}{5}\\).",
        "graphData": null
      },
      {
        "explanation": "Apply the correct sign for the determined quadrant to obtain the final answer.",
        "workingOut": "\\\\(\\\\frac{3}{5}\\\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6e-q8a",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the possible values of \\(\\sec \\theta\\), given that \\(\\sin \\theta = \\frac{1}{\\sqrt{3}}\\).",
    "opts": [
      "\\\\(\\\\sqrt{3}/\\\\sqrt{2} or -\\\\sqrt{3}/\\\\sqrt{2}\\\\)",
      "\\\\(The opposite of this statement is true.\\\\)",
      "\\\\(This is true only when the function is linear.\\\\)",
      "\\\\(This only holds for positive values of x.\\\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Find cos \theta, then take its reciprocal.",
    "solution": "We have \\(\\cos^2 \\theta = 1 - \\sin^2 \\theta = 1 - \\frac{1}{3} = \\frac{2}{3} \\implies \\cos \\theta = pm \\frac{\\sqrt{2}}{\\sqrt{3}}\\). Thus, \\(\\sec \\theta = \\frac{1}{\\cos \\theta} = pm \\frac{\\sqrt{3}}{\\sqrt{2}}\\).",
    "solutionSteps": [
      {
        "explanation": "Determine the correct quadrant based on the given signs of the trigonometric functions.",
        "workingOut": "Find cos \theta, then take its reciprocal.",
        "graphData": null
      },
      {
        "explanation": "Calculate the magnitude of the required trigonometric ratio using a reference right-angled triangle or Pythagorean identity (e.g., \\(\\sin^2 A + \\cos^2 A = 1\\)).",
        "workingOut": "We have \\(\\cos^2 \\theta = 1 - \\sin^2 \\theta = 1 - \\frac{1}{3} = \\frac{2}{3} \\implies \\cos \\theta = pm \\frac{\\sqrt{2}}{\\sqrt{3}}\\).",
        "graphData": null
      },
      {
        "explanation": "Apply the correct sign for the determined quadrant to obtain the final answer.",
        "workingOut": "\\\\(\\\\sqrt{3}/\\\\sqrt{2} or -\\\\sqrt{3}/\\\\sqrt{2}\\\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6e-q8b",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the possible values of \\(\\tan \\theta\\), given that \\(\\sec \\theta = -\\frac{13}{5}\\).",
    "opts": [
      "\\\\(\\\\frac{-12}{5} or \\\\frac{-12}{5}\\\\)",
      "\\\\(\\\\frac{12}{5} or \\\\frac{-12}{5}\\\\)",
      "\\\\(\\\\frac{12}{5} or \\\\frac{-12}{5} + 1\\\\)",
      "\\\\(\\\\frac{14}{5} or \\\\frac{-14}{5}\\\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Recall secant is 1/cos, so cos \theta = -5/13.",
    "solution": "Since \\(\\sec \\theta = -\\frac{13}{5}\\), \\(\\cos \\theta = -\\frac{5}{13}\\). Thus, \\(\\sin \\theta = pm \\frac{12}{13}\\). Therefore, \\(\\tan \\theta = \\frac{\\sin \\theta}{\\cos \\theta} = pm \\frac{12}{5}\\).",
    "solutionSteps": [
      {
        "explanation": "Determine the correct quadrant based on the given signs of the trigonometric functions.",
        "workingOut": "Recall secant is 1/cos, so cos \theta = -5/13.",
        "graphData": null
      },
      {
        "explanation": "Calculate the magnitude of the required trigonometric ratio using a reference right-angled triangle or Pythagorean identity (e.g., \\(\\sin^2 A + \\cos^2 A = 1\\)).",
        "workingOut": "Since \\(\\sec \\theta = -\\frac{13}{5}\\), \\(\\cos \\theta = -\\frac{5}{13}\\).",
        "graphData": null
      },
      {
        "explanation": "Apply the correct sign for the determined quadrant to obtain the final answer.",
        "workingOut": "\\\\(\\\\frac{12}{5} or \\\\frac{-12}{5}\\\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6e-q8c",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "If \\(\\sec C = -\\frac{\\sqrt{5}}{\\sqrt{2}}\\), find the possible values of \\(\\text{cot } C\\).",
    "opts": [
      "\\\\(\\\\sqrt{2}/\\\\sqrt{3} or -\\\\sqrt{2}/\\\\sqrt{3}\\\\)",
      "\\\\(The opposite of this statement is true.\\\\)",
      "\\\\(This is true only when the function is linear.\\\\)",
      "\\\\(This only holds for positive values of x.\\\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Find cos C = -sqrt(2)/sqrt(5), then find sin C.",
    "solution": "We have \\(\\cos C = -\\frac{\\sqrt{2}}{\\sqrt{5}}\\). Thus, \\(\\sin C = pm \\sqrt{1 - \\frac{2}{5}} = pm \\frac{\\sqrt{3}}{\\sqrt{5}}\\). Consequently, \\(\\cot C = \\frac{\\cos C}{\\sin C} = \\frac{-\\sqrt{2}/\\sqrt{5}}{pm \\sqrt{3}/\\sqrt{5}} = pm \\frac{\\sqrt{2}}{\\sqrt{3}}\\).",
    "solutionSteps": [
      {
        "explanation": "Determine the correct quadrant based on the given signs of the trigonometric functions.",
        "workingOut": "Find cos C = -sqrt(2)/sqrt(5), then find sin C.",
        "graphData": null
      },
      {
        "explanation": "Calculate the magnitude of the required trigonometric ratio using a reference right-angled triangle or Pythagorean identity (e.g., \\(\\sin^2 A + \\cos^2 A = 1\\)).",
        "workingOut": "We have \\(\\cos C = -\\frac{\\sqrt{2}}{\\sqrt{5}}\\).",
        "graphData": null
      },
      {
        "explanation": "Apply the correct sign for the determined quadrant to obtain the final answer.",
        "workingOut": "\\\\(\\\\sqrt{2}/\\\\sqrt{3} or -\\\\sqrt{2}/\\\\sqrt{3}\\\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6e-q8d",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "If \\(\\cot D = \\frac{\\sqrt{7}}{3}\\), find the possible values of \\(\\csc D\\).",
    "opts": [
      "\\\\(\\\\frac{-4}{3} or \\\\frac{-4}{3}\\\\)",
      "\\\\(\\\\frac{4}{3} or \\\\frac{-4}{3}\\\\)",
      "\\\\(\\\\frac{4}{3} or \\\\frac{-4}{3} + 1\\\\)",
      "\\\\(\\\\frac{4}{4} or \\\\frac{-4}{4}\\\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Use 1 + cot^2 D = csc^2 D.",
    "solution": "Using the identity \\(\\csc^2 D = 1 + \\cot^2 D = 1 + \\left(\\frac{\\sqrt{7}}{3}\\right)^2 = 1 + \\frac{7}{9} = \\frac{16}{9}\\). Taking the square root gives \\(\\csc D = pm \\frac{4}{3}\\).",
    "solutionSteps": [
      {
        "explanation": "Determine the correct quadrant based on the given signs of the trigonometric functions.",
        "workingOut": "Use 1 + cot^2 D = csc^2 D.",
        "graphData": null
      },
      {
        "explanation": "Calculate the magnitude of the required trigonometric ratio using a reference right-angled triangle or Pythagorean identity (e.g., \\(\\sin^2 A + \\cos^2 A = 1\\)).",
        "workingOut": "Using the identity \\(\\csc^2 D = 1 + \\cot^2 D = 1 + \\left(\\frac{\\sqrt{7}}{3}\\right)^2 = 1 + \\frac{7}{9} = \\frac{16}{9}\\). Taking the square root gives \\(\\csc D = pm \\frac{4}{3}\\).",
        "graphData": null
      },
      {
        "explanation": "Apply the correct sign for the determined quadrant to obtain the final answer.",
        "workingOut": "\\\\(\\\\frac{4}{3} or \\\\frac{-4}{3}\\\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6e-q9a",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find \\(\\sec \\theta\\), given that \\(\\csc \\theta = \\frac{4}{3}\\) and \\(\\theta\\) is obtuse.",
    "opts": [
      "\\\\(+\\\\frac{4}{\\\\sqrt{7}}\\\\)",
      "\\\\(\\\\frac{-4}{\\\\sqrt{7}}\\\\)",
      "\\\\(\\\\frac{-4}{\\\\sqrt{7}} + 1\\\\)",
      "\\\\(\\\\frac{4}{\\\\sqrt{7}}\\\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Obtuse means Quadrant II. secant is negative in Quadrant II.",
    "solution": "Since \\(\\csc \\theta = \\frac{4}{3}\\), \\(\\sin \\theta = \\frac{3}{4}\\). In Quadrant II, cosine (and secant) is negative. \\(\\cos \\theta = -\\sqrt{1 - (3/4)^2} = -\\frac{\\sqrt{7}}{4}\\). Thus, \\(\\sec \\theta = -\\frac{4}{\\sqrt{7}}\\).",
    "solutionSteps": [
      {
        "explanation": "Determine the correct quadrant based on the given signs of the trigonometric functions.",
        "workingOut": "Obtuse means Quadrant II. secant is negative in Quadrant II.",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -4,
              4,
              4,
              -4
            ],
            "boardOptions": {
              "keepaspectratio": true,
              "showNavigation": false,
              "axis": true
            },
            "elements": [],
            "script": "board.suspendUpdate();\nvar origin = board.create('point', [0, 0], {visible: false, name: ''});\nvar p = board.create('point', [-2.5, 2.5], {name: '', size: 3, color: 'blue'});\nboard.create('segment', [origin, p], {strokeColor: 'blue', strokeWidth: 2});\nvar xAxis = board.create('point', [2, 0], {visible: false, name: ''});\nboard.create('angle', [xAxis, origin, p], {radius: 1, color: 'red', name: '\\\\theta'});\nboard.create('text', [-2.5, 3, 'Quadrant II'], {fontSize: 16, color: 'blue', anchorX: 'middle'});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Calculate the magnitude of the required trigonometric ratio using a reference right-angled triangle or Pythagorean identity (e.g., \\(\\sin^2 A + \\cos^2 A = 1\\)).",
        "workingOut": "Since \\(\\csc \\theta = \\frac{4}{3}\\), \\(\\sin \\theta = \\frac{3}{4}\\). In Quadrant II, cosine (and secant) is negative. \\(\\cos \\theta = -\\sqrt{1 - (3/4)^2} = -\\frac{\\sqrt{7}}{4}\\).",
        "graphData": null
      },
      {
        "explanation": "Apply the correct sign for the determined quadrant to obtain the final answer.",
        "workingOut": "\\\\(\\\\frac{-4}{\\\\sqrt{7}}\\\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6e-q9b",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find \\(\\sec \\theta\\), given that \\(\\cot \\theta = \\frac{5}{12}\\) and \\(\\theta\\) is reflex.",
    "opts": [
      "\\\\(-1.6\\\\)",
      "\\\\(\\\\frac{-13}{5}\\\\)",
      "\\\\(-3.6\\\\)",
      "\\\\(2.6\\\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Reflex and positive cotangent means Quadrant III. secant is negative in Quadrant III.",
    "solution": "A reflex angle with positive cotangent lies in Quadrant III. In Quadrant III, cosine (and secant) is negative. Using a 5-12-13 triangle, \\(\\cos \\theta = -\\frac{5}{13}\\). Thus, \\(\\sec \\theta = -\\frac{13}{5}\\).",
    "solutionSteps": [
      {
        "explanation": "Determine the correct quadrant based on the given signs of the trigonometric functions.",
        "workingOut": "Reflex and positive cotangent means Quadrant III. secant is negative in Quadrant III.",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -4,
              4,
              4,
              -4
            ],
            "boardOptions": {
              "keepaspectratio": true,
              "showNavigation": false,
              "axis": true
            },
            "elements": [],
            "script": "board.suspendUpdate();\nvar origin = board.create('point', [0, 0], {visible: false, name: ''});\nvar p = board.create('point', [-2.5, -2.5], {name: '', size: 3, color: 'blue'});\nboard.create('segment', [origin, p], {strokeColor: 'blue', strokeWidth: 2});\nvar xAxis = board.create('point', [2, 0], {visible: false, name: ''});\nboard.create('angle', [xAxis, origin, p], {radius: 1, color: 'red', name: '\\\\theta'});\nboard.create('text', [-2.5, -3, 'Quadrant III'], {fontSize: 16, color: 'blue', anchorX: 'middle'});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Calculate the magnitude of the required trigonometric ratio using a reference right-angled triangle or Pythagorean identity (e.g., \\(\\sin^2 A + \\cos^2 A = 1\\)).",
        "workingOut": "A reflex angle with positive cotangent lies in Quadrant III. In Quadrant III, cosine (and secant) is negative. Using a 5-12-13 triangle, \\(\\cos \\theta = -\\frac{5}{13}\\).",
        "graphData": null
      },
      {
        "explanation": "Apply the correct sign for the determined quadrant to obtain the final answer.",
        "workingOut": "\\\\(\\\\frac{-13}{5}\\\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6e-q9c",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find \\(\\tan \\theta\\), given that \\(\\sec \\theta = -\\frac{13}{5}\\) and \\(0^{\\circ} \\le \\theta \\le 180^{\\circ}\\).",
    "opts": [
      "\\\\(-1.4\\\\)",
      "\\\\(\\\\frac{-12}{5}\\\\)",
      "\\\\(-3.4\\\\)",
      "\\\\(2.4\\\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "sec is negative in Quadrant II within the given range.",
    "solution": "Since \\(\\sec \\theta < 0\\) and \\(0^{\\circ} \\le \\theta \\le 180^{\\circ}\\), \\(\\theta\\) lies in Quadrant II. In Quadrant II, tangent is negative. \\(\\cos \\theta = -\\frac{5}{13} \\implies \\sin \\theta = \\frac{12}{13}\\). Thus, \\(\\tan \\theta = -\\frac{12}{5}\\).",
    "solutionSteps": [
      {
        "explanation": "Determine the correct quadrant based on the given signs of the trigonometric functions.",
        "workingOut": "sec is negative in Quadrant II within the given range.",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -4,
              4,
              4,
              -4
            ],
            "boardOptions": {
              "keepaspectratio": true,
              "showNavigation": false,
              "axis": true
            },
            "elements": [],
            "script": "board.suspendUpdate();\nvar origin = board.create('point', [0, 0], {visible: false, name: ''});\nvar p = board.create('point', [-2.5, 2.5], {name: '', size: 3, color: 'blue'});\nboard.create('segment', [origin, p], {strokeColor: 'blue', strokeWidth: 2});\nvar xAxis = board.create('point', [2, 0], {visible: false, name: ''});\nboard.create('angle', [xAxis, origin, p], {radius: 1, color: 'red', name: '\\\\theta'});\nboard.create('text', [-2.5, 3, 'Quadrant II'], {fontSize: 16, color: 'blue', anchorX: 'middle'});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Calculate the magnitude of the required trigonometric ratio using a reference right-angled triangle or Pythagorean identity (e.g., \\(\\sin^2 A + \\cos^2 A = 1\\)).",
        "workingOut": "Since \\(\\sec \\theta < 0\\) and \\(0^{\\circ} \\le \\theta \\le 180^{\\circ}\\), \\(\\theta\\) lies in Quadrant II. In Quadrant II, tangent is negative. \\(\\cos \\theta = -\\frac{5}{13} \\implies \\sin \\theta = \\frac{12}{13}\\).",
        "graphData": null
      },
      {
        "explanation": "Apply the correct sign for the determined quadrant to obtain the final answer.",
        "workingOut": "\\\\(\\\\frac{-12}{5}\\\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6e-q9d",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find \\(\\csc \\theta\\), given that \\(\\cot \\theta = \\frac{3}{4}\\) and \\(-90^{\\circ} \\le \\theta \\le 90^{\\circ}\\).",
    "opts": [
      "\\\\(-1.25\\\\)",
      "\\\\(0.25\\\\)",
      "\\\\(\\\\frac{5}{4}\\\\)",
      "\\\\(2.25\\\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "cot is positive, so the angle is in Quadrant I within the given range.",
    "solution": "Since \\(\\cot \\theta > 0\\) and \\(-90^{\\circ} \\le \\theta \\le 90^{\\circ}\\), \\(\\theta\\) is in Quadrant I. All ratios are positive. With opposite = 4, adjacent = 3, hypotenuse = 5, we have \\(\\sin \\theta = \\frac{4}{5}\\), so \\(\\csc \\theta = \\frac{5}{4}\\).",
    "solutionSteps": [
      {
        "explanation": "Determine the correct quadrant based on the given signs of the trigonometric functions.",
        "workingOut": "cot is positive, so the angle is in Quadrant I within the given range.",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -4,
              4,
              4,
              -4
            ],
            "boardOptions": {
              "keepaspectratio": true,
              "showNavigation": false,
              "axis": true
            },
            "elements": [],
            "script": "board.suspendUpdate();\nvar origin = board.create('point', [0, 0], {visible: false, name: ''});\nvar p = board.create('point', [2.5, 2.5], {name: '', size: 3, color: 'blue'});\nboard.create('segment', [origin, p], {strokeColor: 'blue', strokeWidth: 2});\nvar xAxis = board.create('point', [2, 0], {visible: false, name: ''});\nboard.create('angle', [xAxis, origin, p], {radius: 1, color: 'red', name: '\\\\theta'});\nboard.create('text', [2.5, 3, 'Quadrant I'], {fontSize: 16, color: 'blue', anchorX: 'middle'});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Calculate the magnitude of the required trigonometric ratio using a reference right-angled triangle or Pythagorean identity (e.g., \\(\\sin^2 A + \\cos^2 A = 1\\)).",
        "workingOut": "Since \\(\\cot \\theta > 0\\) and \\(-90^{\\circ} \\le \\theta \\le 90^{\\circ}\\), \\(\\theta\\) is in Quadrant I. All ratios are positive. With opposite = 4, adjacent = 3, hypotenuse = 5, we have \\(\\sin \\theta = \\frac{4}{5}\\), so \\(\\csc \\theta = \\frac{5}{4}\\).",
        "graphData": null
      },
      {
        "explanation": "Apply the correct sign for the determined quadrant to obtain the final answer.",
        "workingOut": "\\\\(\\\\frac{5}{4}\\\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6e-q10a",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "If \\(\\sin A = -\\frac{1}{4}\\) and \\(\\tan A < 0\\), find \\(\\sec A\\).",
    "opts": [
      "\\\\(\\\\frac{-4}{\\\\sqrt{15}}\\\\)",
      "\\\\(\\\\frac{4}{\\\\sqrt{15}}\\\\)",
      "\\\\(\\\\frac{4}{\\\\sqrt{15}} + 1\\\\)",
      "\\\\(\\dfrac{13}{x + 3}\\\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Negative sine and negative tangent means Quadrant IV. secant is positive.",
    "solution": "In Quadrant IV, secant (reciprocal of cosine) is positive. \\(\\cos A = \\sqrt{1 - (-1/4)^2} = \\frac{\\sqrt{15}}{4}\\). Thus, \\(\\sec A = \\frac{4}{\\sqrt{15}}\\).",
    "solutionSteps": [
      {
        "explanation": "Determine the correct quadrant based on the given signs of the trigonometric functions.",
        "workingOut": "Negative sine and negative tangent means Quadrant IV. secant is positive.",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -4,
              4,
              4,
              -4
            ],
            "boardOptions": {
              "keepaspectratio": true,
              "showNavigation": false,
              "axis": true
            },
            "elements": [],
            "script": "board.suspendUpdate();\nvar origin = board.create('point', [0, 0], {visible: false, name: ''});\nvar p = board.create('point', [2.5, -2.5], {name: '', size: 3, color: 'blue'});\nboard.create('segment', [origin, p], {strokeColor: 'blue', strokeWidth: 2});\nvar xAxis = board.create('point', [2, 0], {visible: false, name: ''});\nboard.create('angle', [xAxis, origin, p], {radius: 1, color: 'red', name: '\\\\theta'});\nboard.create('text', [2.5, -3, 'Quadrant IV'], {fontSize: 16, color: 'blue', anchorX: 'middle'});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Calculate the magnitude of the required trigonometric ratio using a reference right-angled triangle or Pythagorean identity (e.g., \\(\\sin^2 A + \\cos^2 A = 1\\)).",
        "workingOut": "In Quadrant IV, secant (reciprocal of cosine) is positive. \\(\\cos A = \\sqrt{1 - (-1/4)^2} = \\frac{\\sqrt{15}}{4}\\).",
        "graphData": null
      },
      {
        "explanation": "Apply the correct sign for the determined quadrant to obtain the final answer.",
        "workingOut": "\\\\(\\\\frac{4}{\\\\sqrt{15}}\\\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6e-q10b",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "If \\(\\csc B = \\frac{5}{2}\\) and \\(\\cos B < 0\\), find \\(\\tan B\\).",
    "opts": [
      "\\\\(\\\\frac{-2}{\\\\sqrt{21}}\\\\)",
      "\\\\(\\\\frac{-2}{\\\\sqrt{21}} + 1\\\\)",
      "\\\\(\\\\frac{-4}{\\\\sqrt{41}}\\\\)",
      "\\\\(\\\\frac{2}{\\\\sqrt{21}}\\\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Positive cosecant (sine) and negative cosine means Quadrant II.",
    "solution": "In Quadrant II, tangent is negative. Since \\(\\sin B = \\frac{2}{5}\\), \\(\\cos B = -\\sqrt{1 - (2/5)^2} = -\\frac{\\sqrt{21}}{5}\\). Thus, \\(\\tan B = \\frac{\\sin B}{\\cos B} = -\\frac{2}{\\sqrt{21}}\\).",
    "solutionSteps": [
      {
        "explanation": "Determine the correct quadrant based on the given signs of the trigonometric functions.",
        "workingOut": "Positive cosecant (sine) and negative cosine means Quadrant II.",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -4,
              4,
              4,
              -4
            ],
            "boardOptions": {
              "keepaspectratio": true,
              "showNavigation": false,
              "axis": true
            },
            "elements": [],
            "script": "board.suspendUpdate();\nvar origin = board.create('point', [0, 0], {visible: false, name: ''});\nvar p = board.create('point', [-2.5, 2.5], {name: '', size: 3, color: 'blue'});\nboard.create('segment', [origin, p], {strokeColor: 'blue', strokeWidth: 2});\nvar xAxis = board.create('point', [2, 0], {visible: false, name: ''});\nboard.create('angle', [xAxis, origin, p], {radius: 1, color: 'red', name: '\\\\theta'});\nboard.create('text', [-2.5, 3, 'Quadrant II'], {fontSize: 16, color: 'blue', anchorX: 'middle'});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Calculate the magnitude of the required trigonometric ratio using a reference right-angled triangle or Pythagorean identity (e.g., \\(\\sin^2 A + \\cos^2 A = 1\\)).",
        "workingOut": "In Quadrant II, tangent is negative. Since \\(\\sin B = \\frac{2}{5}\\), \\(\\cos B = -\\sqrt{1 - (2/5)^2} = -\\frac{\\sqrt{21}}{5}\\).",
        "graphData": null
      },
      {
        "explanation": "Apply the correct sign for the determined quadrant to obtain the final answer.",
        "workingOut": "\\\\(\\\\frac{-2}{\\\\sqrt{21}}\\\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6e-q10c",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find \\(\\cot \\theta\\), given that \\(\\sec \\theta = -\\sqrt{3}\\) and \\(\\csc \\theta < 0\\).",
    "opts": [
      "\\\\(\\\\frac{-1}{\\\\sqrt{2}}\\\\)",
      "\\\\(\\\\frac{1}{\\\\sqrt{2}}\\\\)",
      "\\\\(\\\\frac{1}{\\\\sqrt{2}} + 1\\\\)",
      "\\\\(\\\\frac{1}{\\\\sqrt{4}}\\\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Negative secant (cosine) and negative cosecant (sine) means Quadrant III.",
    "solution": "In Quadrant III, cotangent is positive. \\(\\cos \\theta = -\\frac{1}{\\sqrt{3}}\\). \\(\\sin \\theta = -\\sqrt{1 - \\cos^2 \\theta} = -\\sqrt{1 - \\frac{1}{3}} = -\\frac{\\sqrt{2}}{\\sqrt{3}}\\). Thus, \\(\\cot \\theta = \\frac{\\cos \\theta}{\\sin \\theta} = \\frac{-1/\\sqrt{3}}{-\\sqrt{2}/\\sqrt{3}} = \\frac{1}{\\sqrt{2}}\\).",
    "solutionSteps": [
      {
        "explanation": "Determine the correct quadrant based on the given signs of the trigonometric functions.",
        "workingOut": "Negative secant (cosine) and negative cosecant (sine) means Quadrant III.",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -4,
              4,
              4,
              -4
            ],
            "boardOptions": {
              "keepaspectratio": true,
              "showNavigation": false,
              "axis": true
            },
            "elements": [],
            "script": "board.suspendUpdate();\nvar origin = board.create('point', [0, 0], {visible: false, name: ''});\nvar p = board.create('point', [-2.5, -2.5], {name: '', size: 3, color: 'blue'});\nboard.create('segment', [origin, p], {strokeColor: 'blue', strokeWidth: 2});\nvar xAxis = board.create('point', [2, 0], {visible: false, name: ''});\nboard.create('angle', [xAxis, origin, p], {radius: 1, color: 'red', name: '\\\\theta'});\nboard.create('text', [-2.5, -3, 'Quadrant III'], {fontSize: 16, color: 'blue', anchorX: 'middle'});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Calculate the magnitude of the required trigonometric ratio using a reference right-angled triangle or Pythagorean identity (e.g., \\(\\sin^2 A + \\cos^2 A = 1\\)).",
        "workingOut": "In Quadrant III, cotangent is positive. \\(\\cos \\theta = -\\frac{1}{\\sqrt{3}}\\). \\(\\sin \\theta = -\\sqrt{1 - \\cos^2 \\theta} = -\\sqrt{1 - \\frac{1}{3}} = -\\frac{\\sqrt{2}}{\\sqrt{3}}\\).",
        "graphData": null
      },
      {
        "explanation": "Apply the correct sign for the determined quadrant to obtain the final answer.",
        "workingOut": "\\\\(\\\\frac{1}{\\\\sqrt{2}}\\\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6e-q10d",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find \\(\\cos \\theta\\), given that \\(\\csc \\theta = -\\frac{17}{8}\\) and \\(\\cot \\theta < 0\\).",
    "opts": [
      "\\\\(-0.11764705882352944\\\\)",
      "\\\\(-0.8823529411764706\\\\)",
      "\\\\(\\\\frac{15}{17}\\\\)",
      "\\\\(1.8823529411764706\\\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Negative cosecant (sine) and negative cotangent means Quadrant IV.",
    "solution": "In Quadrant IV, cosine is positive. Since \\(\\sin \\theta = -\\frac{8}{17}\\), the adjacent side is \\(15\\), so \\(\\cos \\theta = \\frac{15}{17}\\).",
    "solutionSteps": [
      {
        "explanation": "Determine the correct quadrant based on the given signs of the trigonometric functions.",
        "workingOut": "Negative cosecant (sine) and negative cotangent means Quadrant IV.",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -4,
              4,
              4,
              -4
            ],
            "boardOptions": {
              "keepaspectratio": true,
              "showNavigation": false,
              "axis": true
            },
            "elements": [],
            "script": "board.suspendUpdate();\nvar origin = board.create('point', [0, 0], {visible: false, name: ''});\nvar p = board.create('point', [2.5, -2.5], {name: '', size: 3, color: 'blue'});\nboard.create('segment', [origin, p], {strokeColor: 'blue', strokeWidth: 2});\nvar xAxis = board.create('point', [2, 0], {visible: false, name: ''});\nboard.create('angle', [xAxis, origin, p], {radius: 1, color: 'red', name: '\\\\theta'});\nboard.create('text', [2.5, -3, 'Quadrant IV'], {fontSize: 16, color: 'blue', anchorX: 'middle'});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Calculate the magnitude of the required trigonometric ratio using a reference right-angled triangle or Pythagorean identity (e.g., \\(\\sin^2 A + \\cos^2 A = 1\\)).",
        "workingOut": "In Quadrant IV, cosine is positive. Since \\(\\sin \\theta = -\\frac{8}{17}\\), the adjacent side is \\(15\\), so \\(\\cos \\theta = \\frac{15}{17}\\).",
        "graphData": null
      },
      {
        "explanation": "Apply the correct sign for the determined quadrant to obtain the final answer.",
        "workingOut": "\\\\(\\\\frac{15}{17}\\\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6e-q11-cos",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Given that \\(\\sin \\theta = \\frac{a}{b}\\), with \\(\\theta\\) obtuse and \\(a\\) and \\(b\\) both positive, find an expression for \\(\\cos \\theta\\) in terms of \\(a\\) and \\(b\\).",
    "opts": [
      "\\\\(-\\\\sqrt{b^2-a^2}/b\\\\)",
      "\\\\(-\\\\sqrt{b^2-a^2}/b + 1\\\\)",
      "\\\\(-\\\\sqrt{b^4-a^4}/b\\\\)",
      "\\\\(\\\\sqrt{b^2-a^2}/b\\\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Since \theta is obtuse (Quadrant II), cosine is negative. Apply sin^2 \theta + cos^2 \theta = 1.",
    "solution": "In Quadrant II, cosine is negative. Since \\(\\sin \\theta = \\frac{a}{b}\\), we have \\(\\cos \\theta = -\\sqrt{1 - \\sin^2 \\theta} = -\\sqrt{1 - \\frac{a^2}{b^2}} = -\\sqrt{\\frac{b^2 - a^2}{b^2}} = -\\frac{\\sqrt{b^2 - a^2}}{b}\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the coordinates \\((x, y)\\) and the radius \\(r\\) of the circle.",
        "workingOut": "In Quadrant II.",
        "graphData": null
      },
      {
        "explanation": "Recall the definition of the requested trigonometric ratio in terms of \\(x, y\\), and \\(r\\).",
        "workingOut": "Since \theta is obtuse (Quadrant II), cosine is negative. Apply sin^2 \theta + cos^2 \theta = 1.",
        "graphData": null
      },
      {
        "explanation": "Substitute the values to calculate the final exact ratio.",
        "workingOut": "\\\\(-\\\\sqrt{b^2-a^2}/b\\\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6e-q11-tan",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Given that \\(\\sin \\theta = \\frac{a}{b}\\), with \\(\\theta\\) obtuse and \\(a\\) and \\(b\\) both positive, find an expression for \\(\\tan \\theta\\) in terms of \\(a\\) and \\(b\\).",
    "opts": [
      "\\\\(-a/\\\\sqrt{b^2-a^2}\\\\)",
      "\\\\(-a/\\\\sqrt{b^2-a^2} + 1\\\\)",
      "\\\\(-a/\\\\sqrt{b^4-a^4}\\\\)",
      "\\\\(a/\\\\sqrt{b^2-a^2}\\\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Use tan \\theta = sin \\theta / cos \\theta.",
    "solution": "Since \\(\\sin \\theta = \\frac{a}{b}\\) and \\(\\cos \\theta = -\\frac{\\sqrt{b^2 - a^2}}{b}\\), \\(\\tan \\theta = \\frac{\\sin \\theta}{\\cos \\theta} = \\frac{a/b}{-\\sqrt{b^2-a^2}/b} = -\\frac{a}{\\sqrt{b^2 - a^2}}\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the coordinates \\((x, y)\\) and the radius \\(r\\) of the circle.",
        "workingOut": "Since \\(\\sin \\theta = \\frac{a}{b}\\) and \\(\\cos \\theta = -\\frac{\\sqrt{b^2 - a^2}}{b}\\).",
        "graphData": null
      },
      {
        "explanation": "Recall the definition of the requested trigonometric ratio in terms of \\(x, y\\), and \\(r\\).",
        "workingOut": "Use tan \\theta = sin \\theta / cos \\theta.",
        "graphData": null
      },
      {
        "explanation": "Substitute the values to calculate the final exact ratio.",
        "workingOut": "\\\\(-a/\\\\sqrt{b^2-a^2}\\\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6e-q12-sin",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "If \\(\\tan \\alpha = m\\), where \\(m > 0\\), find the possible values of \\(\\sin \\alpha\\) in terms of \\(m\\). (Express as 'value or -value')",
    "opts": [
      "\\\\(m/\\\\sqrt{1+m^2} or -m/\\\\sqrt{1+m^2}\\\\)",
      "\\\\(The opposite of this statement is true.\\\\)",
      "\\\\(This is true only when the function is linear.\\\\)",
      "\\\\(This only holds for positive values of x.\\\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "tan is positive in Q1 and Q3, so sin can be positive or negative.",
    "solution": "Given \\(\\tan \\alpha = m\\), the opposite side is \\(m\\) and the adjacent is \\(1\\). The hypotenuse is \\(\\sqrt{1 + m^2}\\). Tangent is positive in Quadrants I and III, so sine is positive or negative: \\(\\sin \\alpha = \\pm \\frac{m}{\\sqrt{1 + m^2}}\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the coordinates \\((x, y)\\) and the radius \\(r\\) of the circle.",
        "workingOut": "Given \\(\\tan \\alpha = m\\).",
        "graphData": null
      },
      {
        "explanation": "Recall the definition of the requested trigonometric ratio in terms of \\(x, y\\), and \\(r\\).",
        "workingOut": "tan is positive in Q1 and Q3, so sin can be positive or negative.",
        "graphData": null
      },
      {
        "explanation": "Substitute the values to calculate the final exact ratio.",
        "workingOut": "\\\\(m/\\\\sqrt{1+m^2} or -m/\\\\sqrt{1+m^2}\\\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6e-q12-sec",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "If \\(\\tan \\alpha = m\\), where \\(m > 0\\), find the possible values of \\(\\sec \\alpha\\) in terms of \\(m\\).",
    "opts": [
      "\\\\(\\\\sqrt{1+m^2} or -\\\\sqrt{1+m^2}\\\\)",
      "\\\\(The opposite of this statement is true.\\\\)",
      "\\\\(This is true only when the function is linear.\\\\)",
      "\\\\(This only holds for positive values of x.\\\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Use 1 + tan^2 alpha = sec^2 alpha.",
    "solution": "Using the identity \\(\\sec^2 \\alpha = 1 + \\tan^2 \\alpha = 1 + m^2\\). Taking the square root gives \\(\\sec \\alpha = \\pm \\sqrt{1 + m^2}\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the coordinates \\((x, y)\\) and the radius \\(r\\) of the circle.",
        "workingOut": "Using the identity \\(\\sec^2 \\alpha = 1 + \\tan^2 \\alpha = 1 + m^2\\). Taking the square root gives \\(\\sec \\alpha = \\pm \\sqrt{1 + m^2}\\)..",
        "graphData": null
      },
      {
        "explanation": "Recall the definition of the requested trigonometric ratio in terms of \\(x, y\\), and \\(r\\).",
        "workingOut": "Use 1 + tan^2 alpha = sec^2 alpha.",
        "graphData": null
      },
      {
        "explanation": "Substitute the values to calculate the final exact ratio.",
        "workingOut": "\\\\(\\\\sqrt{1+m^2} or -\\\\sqrt{1+m^2}\\\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6e-q13a",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Prove the algebraic identity \\((k^2 - 1)^2 + (2k)^2 = (k^2 + 1)^2\\). Show all expansion steps.",
    "answer": "LHS = k^4 - 2k^2 + 1 + 4k^2 = k^4 + 2k^2 + 1 = (k^2 + 1)^2 = RHS",
    "hint": "Expand both sides or expand LHS and show it equals RHS.",
    "solution": "LHS = k^4 - 2k^2 + 1 + 4k^2 = k^4 + 2k^2 + 1 = (k^2 + 1)^2 = RHS",
    "solutionSteps": [
      {
        "explanation": "Identify the coordinates \\((x, y)\\) and the radius \\(r\\) of the circle.",
        "workingOut": "LHS = k^4 - 2k^2 + 1 + 4k^2 = k^4 + 2k^2 + 1 = (k^2 + 1)^2 = RHS.",
        "graphData": null
      },
      {
        "explanation": "Recall the definition of the requested trigonometric ratio in terms of \\(x, y\\), and \\(r\\).",
        "workingOut": "Expand both sides or expand LHS and show it equals RHS.",
        "graphData": null
      },
      {
        "explanation": "Substitute the values to calculate the final exact ratio.",
        "workingOut": "LHS = k^4 - 2k^2 + 1 + 4k^2 = k^4 + 2k^2 + 1 = (k^2 + 1)^2 = RHS",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y11a-6e-q13b-sin",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "If \\(\\cos x = \\frac{k^2 - 1}{k^2 + 1}\\), where \\(x\\) is acute and \\(k > 1\\), find an expression for \\(\\sin x\\) in terms of \\(k\\).",
    "opts": [
      "\\\\(-2k/(k^2+1)\\\\)",
      "\\\\(2k/(k^2+1)\\\\)",
      "\\\\(2k/(k^2+1) + 1\\\\)",
      "\\\\(4k/(k^4+1)\\\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Use the identity from part (a): (k^2 - 1)^2 + (2k)^2 = (k^2 + 1)^2.",
    "solution": "Since \\(x\\) is acute, \\(\\sin x\\) is positive. Let the adjacent side be \\(k^2 - 1\\) and the hypotenuse be \\(k^2 + 1\\). From part (a), the opposite side is \\(2k\\). Thus, \\(\\sin x = \\frac{\\text{Opposite}}{\\text{Hypotenuse}} = \\frac{2k}{k^2 + 1}\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the coordinates \\((x, y)\\) and the radius \\(r\\) of the circle.",
        "workingOut": "Since \\(x\\) is acute.",
        "graphData": null
      },
      {
        "explanation": "Recall the definition of the requested trigonometric ratio in terms of \\(x, y\\), and \\(r\\).",
        "workingOut": "Use the identity from part (a): (k^2 - 1)^2 + (2k)^2 = (k^2 + 1)^2.",
        "graphData": null
      },
      {
        "explanation": "Substitute the values to calculate the final exact ratio.",
        "workingOut": "\\\\(2k/(k^2+1)\\\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6e-q13b-tan",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trigonometric function, find another",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "If \\(\\cos x = \\frac{k^2 - 1}{k^2 + 1}\\), where \\(x\\) is acute and \\(k > 1\\), find an expression for \\(\\tan x\\) in terms of \\(k\\).",
    "opts": [
      "\\\\(-2k/(k^2-1)\\\\)",
      "\\\\(2k/(k^2-1)\\\\)",
      "\\\\(2k/(k^2-1) + 1\\\\)",
      "\\\\(4k/(k^4-1)\\\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Use tan x = sin x / cos x.",
    "solution": "Since \\(\\sin x = \\frac{2k}{k^2 + 1}\\) and \\(\\cos x = \\frac{k^2 - 1}{k^2 + 1}\\), \\(\\tan x = \\frac{2k}{k^2 - 1}\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the coordinates \\((x, y)\\) and the radius \\(r\\) of the circle.",
        "workingOut": "Since \\(\\sin x = \\frac{2k}{k^2 + 1}\\) and \\(\\cos x = \\frac{k^2 - 1}{k^2 + 1}\\).",
        "graphData": null
      },
      {
        "explanation": "Recall the definition of the requested trigonometric ratio in terms of \\(x, y\\), and \\(r\\).",
        "workingOut": "Use tan x = sin x / cos x.",
        "graphData": null
      },
      {
        "explanation": "Substitute the values to calculate the final exact ratio.",
        "workingOut": "\\\\(2k/(k^2-1)\\\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  }
];
