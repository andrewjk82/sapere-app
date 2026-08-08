export const Y12A_CH3F_QUESTIONS = [
  {
    "id": "y12a-3f-q1a",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "For the curve shown in the graph, classify each labeled point \\( A \\) and \\( B \\) as one of the following: global maximum, global minimum, local maximum, local minimum, or horizontal point of inflection.",
    "a": "A: local maximum, B: local minimum",
    "t": "Global maximum and minimum",
    "solutionSteps": [
      {
        "explanation": "Examine point A.",
        "workingOut": "\\text{Point } A \\text{ is a 'peak' relative to its immediate neighbors, so it is a local maximum. It is not a global maximum because the curve rises higher elsewhere.}"
      },
      {
        "explanation": "Examine point B.",
        "workingOut": "\\text{Point } B \\text{ is a 'valley' relative to its neighbors, making it a local minimum. It is not a global minimum because the curve falls lower elsewhere.}"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [
          -3,
          4,
          3,
          -4
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-2.5,0], [2.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.5], [0,3.5]], {strokeColor: 'black', strokeWidth: 1});\nvar f = function(x) { return x*x*x - 3*x; };\nboard.create('functiongraph', [f, -2.2, 2.2], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [-1, 2], {name: 'A', size: 3, color: 'red', label: {autoPosition: false, offset: [-5, 12]}});\nboard.create('point', [1, -2], {name: 'B', size: 3, color: 'red', label: {autoPosition: false, offset: [-5, -15]}});\nboard.unsuspendUpdate();"
      }
    },
    "opts": [
      "A: global maximum, B: local minimum",
      "A: local minimum, B: local maximum",
      "A: local maximum, B: global minimum",
      "A: local maximum, B: local minimum"
    ],
    "options": [
      {
        "text": "A: global maximum, B: local minimum",
        "imageUrl": ""
      },
      {
        "text": "A: local minimum, B: local maximum",
        "imageUrl": ""
      },
      {
        "text": "A: local maximum, B: global minimum",
        "imageUrl": ""
      },
      {
        "text": "A: local maximum, B: local minimum",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "answerStr": "3"
  },
  {
    "id": "y12a-3f-q1b",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "For the curve shown in the graph on the closed interval \\( [0, 4] \\), classify each labeled point \\( C, D, E, \\) and \\( F \\) as one of the following: global maximum, global minimum, local maximum, local minimum, or horizontal point of inflection.",
    "a": "C: local maximum, D: local minimum, E: global maximum, F: global minimum",
    "t": "Global maximum and minimum",
    "solutionSteps": [
      {
        "explanation": "Identify the global extrema on the closed interval.",
        "workingOut": "\\text{The highest point on the entire interval } [0, 4] \\text{ is } E \\text{, making it the global maximum. The lowest point is } F \\text{, making it the global minimum.}"
      },
      {
        "explanation": "Identify the local extrema.",
        "workingOut": "\\text{Point } C \\text{ is a peak relative to its surroundings but is lower than } E \\text{, so it is a local maximum. Point } D \\text{ is a valley but higher than } F \\text{, so it is a local minimum.}"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [
          -0.5,
          6,
          4.5,
          -2
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-0.2,0], [4.2,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-1.5], [0,5.5]], {strokeColor: 'black', strokeWidth: 1});\nvar f = function(x) { return 0.5 * (x-1)*(x-1)*(x-4) + 4; };\nboard.create('functiongraph', [f, 0, 4], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [0, 2], {name: 'C', size: 3, color: 'red', label: {autoPosition: false, offset: [-15, 10]}});\nboard.create('point', [1, 4], {name: 'E', size: 3, color: 'red', label: {autoPosition: false, offset: [-5, 12]}});\nboard.create('point', [3, 2], {name: 'D', size: 3, color: 'red', label: {autoPosition: false, offset: [10, -5]}});\nboard.create('point', [4, 4], {name: 'F', size: 3, color: 'red', label: {autoPosition: false, offset: [10, 10]}});\n// Note: Adjustment of F as a boundary point\nboard.unsuspendUpdate();"
      }
    },
    "opts": [
      "C: local maximum, D: global minimum, E: global maximum, F: local minimum",
      "C: local minimum, D: local maximum, E: global minimum, F: global maximum",
      "C: global maximum, D: local minimum, E: local maximum, F: global minimum",
      "C: local maximum, D: local minimum, E: global maximum, F: global minimum"
    ],
    "options": [
      {
        "text": "C: local maximum, D: global minimum, E: global maximum, F: local minimum",
        "imageUrl": ""
      },
      {
        "text": "C: local minimum, D: local maximum, E: global minimum, F: global maximum",
        "imageUrl": ""
      },
      {
        "text": "C: global maximum, D: local minimum, E: local maximum, F: global minimum",
        "imageUrl": ""
      },
      {
        "text": "C: local maximum, D: local minimum, E: global maximum, F: global minimum",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "answerStr": "3"
  },
  {
    "id": "y12a-3f-q1c",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "For the curve shown in the graph, classify each labeled point \\( G \\) and \\( H \\) as one of the following: global maximum, global minimum, local maximum, local minimum, or horizontal point of inflection.",
    "a": "G: global maximum, H: horizontal point of inflection",
    "t": "Global maximum and minimum",
    "solutionSteps": [
      {
        "explanation": "Examine point G.",
        "workingOut": "\\text{Point } G \\text{ is the highest point on the entire visible curve. Since the curve goes downwards on both sides, } G \\text{ is a global maximum.}"
      },
      {
        "explanation": "Examine point H.",
        "workingOut": "\\text{At point } H \\text{, the curve flattens out (zero gradient) but continues to fall. This means concavity changes and the tangent is horizontal, so } H \\text{ is a horizontal point of inflection.}"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [
          -3,
          5,
          4,
          -4
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-2.5,0], [3.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.5], [0,4.5]], {strokeColor: 'black', strokeWidth: 1});\nvar f = function(x) { return 3 - 0.2*x*x*x - 0.5*x*x; };\nboard.create('functiongraph', [f, -2.5, 3], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [0, 3], {name: 'G', size: 3, color: 'red', label: {autoPosition: false, offset: [-5, 12]}});\nboard.create('point', [1, 1.5], {name: 'H', size: 3, color: 'red', label: {autoPosition: false, offset: [10, 5]}});\nboard.unsuspendUpdate();"
      }
    },
    "opts": [
      "G: horizontal point of inflection, H: global maximum",
      "G: local maximum, H: local minimum",
      "G: global maximum, H: horizontal point of inflection",
      "G: global maximum, H: local minimum"
    ],
    "options": [
      {
        "text": "G: horizontal point of inflection, H: global maximum",
        "imageUrl": ""
      },
      {
        "text": "G: local maximum, H: local minimum",
        "imageUrl": ""
      },
      {
        "text": "G: global maximum, H: horizontal point of inflection",
        "imageUrl": ""
      },
      {
        "text": "G: global maximum, H: local minimum",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "answerStr": "2"
  },
  {
    "id": "y12a-3f-q1d",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "For the curve shown in the graph, classify each labeled point \\( I \\) and \\( J \\) as one of the following: global maximum, global minimum, local maximum, local minimum, or horizontal point of inflection.",
    "a": "I: horizontal point of inflection, J: global minimum",
    "t": "Global maximum and minimum",
    "solutionSteps": [
      {
        "explanation": "Examine point I.",
        "workingOut": "\\text{At point } I \\text{, the curve flattens momentarily (gradient is zero) and then continues to fall. Thus, it is a horizontal point of inflection.}"
      },
      {
        "explanation": "Examine point J.",
        "workingOut": "\\text{Point } J \\text{ is the absolute lowest point on the entire domain shown, making it the global minimum.}"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [
          -4,
          6,
          4,
          -4
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-3.5,0], [3.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.5], [0,5.5]], {strokeColor: 'black', strokeWidth: 1});\nvar f = function(x) { return 0.25*x*x*x*x + 0.5*x*x*x - 2*x; };\nboard.create('functiongraph', [f, -3.2, 2.1], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [-1.5, 2.5], {name: 'I', size: 3, color: 'red', label: {autoPosition: false, offset: [-15, 10]}});\nboard.create('point', [1, -1.25], {name: 'J', size: 3, color: 'red', label: {autoPosition: false, offset: [-5, -15]}});\nboard.unsuspendUpdate();"
      }
    },
    "opts": [
      "I: horizontal point of inflection, J: global minimum",
      "I: local maximum, J: global minimum",
      "I: local minimum, J: global maximum",
      "I: horizontal point of inflection, J: local minimum"
    ],
    "options": [
      {
        "text": "I: horizontal point of inflection, J: global minimum",
        "imageUrl": ""
      },
      {
        "text": "I: local maximum, J: global minimum",
        "imageUrl": ""
      },
      {
        "text": "I: local minimum, J: global maximum",
        "imageUrl": ""
      },
      {
        "text": "I: horizontal point of inflection, J: local minimum",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "answerStr": "0"
  },
  {
    "id": "y12a-3f-q2a",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "For the function \\( y = x^2 - 1 \\), complete the following analysis:",
    "t": "Global maximum and minimum",
    "subQuestions": [
      {
        "id": "y12a-3f-q2a-1",
        "type": "multiple_choice",
        "question": "a) Find the global maximum and minimum of \\( y = x^2 - 1 \\) for \\( -3 \\le x \\le 3 \\).",
        "opts": [
          "global minimum: -1 at x = 0, global maximum: 8 at x = 3",
          "global minimum: -1 at x = 0, global maximum: 8 at x = -3, 3",
          "global minimum: 0 at x = 1, -1, global maximum: 8 at x = -3, 3",
          "global minimum: -1 at x = 0, global maximum: 9 at x = -3, 3"
        ],
        "options": [
          {
            "text": "global minimum: -1 at x = 0, global maximum: 8 at x = 3",
            "imageUrl": ""
          },
          {
            "text": "global minimum: -1 at x = 0, global maximum: 8 at x = -3, 3",
            "imageUrl": ""
          },
          {
            "text": "global minimum: 0 at x = 1, -1, global maximum: 8 at x = -3, 3",
            "imageUrl": ""
          },
          {
            "text": "global minimum: -1 at x = 0, global maximum: 9 at x = -3, 3",
            "imageUrl": ""
          }
        ],
        "answer": "1",
        "answerStr": "1",
        "solutionSteps": [
          {
            "explanation": "Find stationary points.",
            "workingOut": "y' = 2x = 0 \\implies x = 0. \\text{ This is inside the domain.} \\\\ y(0) = -1"
          },
          {
            "explanation": "Evaluate boundaries.",
            "workingOut": "y(-3) = (-3)^2 - 1 = 8 \\\\ y(3) = 3^2 - 1 = 8"
          },
          {
            "explanation": "Compare.",
            "workingOut": "\\text{Min is } -1 \\text{ at } x = 0, \\text{ Max is } 8 \\text{ at } x = -3, 3"
          }
        ]
      },
      {
        "id": "y12a-3f-q2a-2",
        "type": "teacher_review",
        "question": "b) Sketch the graph of the function on the given domain.",
        "a": "Sketch the curve.",
        "solutionSteps": [
          {
            "explanation": "Use the calculated points to draw the graph.",
            "workingOut": "\\text{Sketch a parabola opening upwards with vertex at (0,-1) and endpoints at (-3,8) and (3,8).}"
          },
          {
            "explanation": "Final graph:",
            "workingOut": "",
            "graphData": {
              "jsxGraph": {
                "width": 350,
                "height": 250,
                "boundingbox": [
                  -4,
                  10,
                  4,
                  -3
                ],
                "script": "board.suspendUpdate();\nboard.create('arrow', [[-4, 0], [4, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-2], [0,9]], {strokeColor: 'black', strokeWidth: 1});\nvar f = function(x) { return x*x - 1; };\nboard.create('functiongraph', [f, -4, 4], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [0, -1], {name: 'Min(0,-1)', size: 3, color: 'red', label: {autoPosition: false, offset: [10, -10]}});\nboard.create('point', [-3, 8], {name: '(-3,8)', size: 3, color: 'red', label: {autoPosition: false, offset: [-15, 10]}});\nboard.create('point', [3, 8], {name: '(3,8)', size: 3, color: 'red', label: {autoPosition: false, offset: [10, 10]}});\nboard.unsuspendUpdate();"
              }
            }
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-3f-q2b",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "For the function \\( y = 6 - 2x \\), complete the following analysis:",
    "t": "Global maximum and minimum",
    "subQuestions": [
      {
        "id": "y12a-3f-q2b-1",
        "type": "multiple_choice",
        "question": "a) Find the global maximum and minimum of \\( y = 6 - 2x \\) for \\( -1 \\le x \\le 4 \\).",
        "opts": [
          "global minimum: -2 at x = 4, global maximum: 6 at x = -1",
          "global minimum: -2 at x = 4, global maximum: 8 at x = -1",
          "global minimum: 0 at x = 3, global maximum: 6 at x = 0",
          "global minimum: -4 at x = 5, global maximum: 8 at x = -1"
        ],
        "options": [
          {
            "text": "global minimum: -2 at x = 4, global maximum: 6 at x = -1",
            "imageUrl": ""
          },
          {
            "text": "global minimum: -2 at x = 4, global maximum: 8 at x = -1",
            "imageUrl": ""
          },
          {
            "text": "global minimum: 0 at x = 3, global maximum: 6 at x = 0",
            "imageUrl": ""
          },
          {
            "text": "global minimum: -4 at x = 5, global maximum: 8 at x = -1",
            "imageUrl": ""
          }
        ],
        "answer": "1",
        "answerStr": "1",
        "solutionSteps": [
          {
            "explanation": "Check for stationary points.",
            "workingOut": "y' = -2 \\neq 0. \\text{ No stationary points, the line is strictly decreasing.}"
          },
          {
            "explanation": "Evaluate boundaries.",
            "workingOut": "y(-1) = 6 - 2(-1) = 8 \\\\ y(4) = 6 - 2(4) = -2"
          },
          {
            "explanation": "Compare.",
            "workingOut": "\\text{Min is } -2 \\text{ at } x = 4, \\text{ Max is } 8 \\text{ at } x = -1"
          }
        ]
      },
      {
        "id": "y12a-3f-q2b-2",
        "type": "teacher_review",
        "question": "b) Sketch the graph of the function on the given domain.",
        "a": "Sketch the curve.",
        "solutionSteps": [
          {
            "explanation": "Use the calculated points to draw the graph.",
            "workingOut": "\\text{Sketch a straight line segment from (-1,8) to (4,-2).}"
          },
          {
            "explanation": "Final graph:",
            "workingOut": "",
            "graphData": {
              "jsxGraph": {
                "width": 350,
                "height": 250,
                "boundingbox": [
                  -2,
                  10,
                  5,
                  -4
                ],
                "script": "board.suspendUpdate();\nboard.create('arrow', [[-2, 0], [5, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3], [0,9]], {strokeColor: 'black', strokeWidth: 1});\nvar f = function(x) { return 6 - 2*x; };\nboard.create('functiongraph', [f, -2, 5], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [-1, 8], {name: 'Max(-1,8)', size: 3, color: 'red', label: {autoPosition: false, offset: [10, 10]}});\nboard.create('point', [4, -2], {name: 'Min(4,-2)', size: 3, color: 'red', label: {autoPosition: false, offset: [10, 10]}});\nboard.unsuspendUpdate();"
              }
            }
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-3f-q2c",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "For the function \\( y = \\sqrt{25 - x^2} \\), complete the following analysis:",
    "t": "Global maximum and minimum",
    "subQuestions": [
      {
        "id": "y12a-3f-q2c-1",
        "type": "multiple_choice",
        "question": "a) Find the global maximum and minimum of \\( y = \\sqrt{25 - x^2} \\) for \\( -5 \\le x \\le 5 \\).",
        "opts": [
          "global minimum: -5 at x = 0, global maximum: 5 at x = 0",
          "global minimum: 0 at x = 5, global maximum: 5 at x = 0",
          "global minimum: 0 at x = -5, 5, global maximum: 5 at x = 0",
          "global minimum: 0 at x = -5, 5, global maximum: 25 at x = 0"
        ],
        "options": [
          {
            "text": "global minimum: -5 at x = 0, global maximum: 5 at x = 0",
            "imageUrl": ""
          },
          {
            "text": "global minimum: 0 at x = 5, global maximum: 5 at x = 0",
            "imageUrl": ""
          },
          {
            "text": "global minimum: 0 at x = -5, 5, global maximum: 5 at x = 0",
            "imageUrl": ""
          },
          {
            "text": "global minimum: 0 at x = -5, 5, global maximum: 25 at x = 0",
            "imageUrl": ""
          }
        ],
        "answer": "2",
        "answerStr": "2",
        "solutionSteps": [
          {
            "explanation": "Find stationary points.",
            "workingOut": "y' = \\frac{-2x}{2\\sqrt{25-x^2}} = \\frac{-x}{\\sqrt{25-x^2}}. \\\\ y' = 0 \\implies x = 0. \\text{ } y(0) = \\sqrt{25} = 5"
          },
          {
            "explanation": "Evaluate boundaries.",
            "workingOut": "y(-5) = \\sqrt{25-25} = 0 \\\\ y(5) = \\sqrt{25-25} = 0"
          },
          {
            "explanation": "Compare.",
            "workingOut": "\\text{Min is } 0 \\text{ at } x = -5, 5, \\text{ Max is } 5 \\text{ at } x = 0"
          }
        ]
      },
      {
        "id": "y12a-3f-q2c-2",
        "type": "teacher_review",
        "question": "b) Sketch the graph of the function on the given domain.",
        "a": "Sketch the curve.",
        "solutionSteps": [
          {
            "explanation": "Use the calculated points to draw the graph.",
            "workingOut": "\\text{Sketch the upper half of a circle of radius 5 centered at the origin, spanning from x=-5 to x=5.}"
          },
          {
            "explanation": "Final graph:",
            "workingOut": "",
            "graphData": {
              "jsxGraph": {
                "width": 350,
                "height": 250,
                "boundingbox": [
                  -6,
                  7,
                  6,
                  -2
                ],
                "script": "board.suspendUpdate();\nboard.create('arrow', [[-6, 0], [6, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-1], [0,6]], {strokeColor: 'black', strokeWidth: 1});\nvar f = function(x) { return Math.sqrt(25 - x*x); };\nboard.create('functiongraph', [f, -6, 6], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [0, 5], {name: 'Max(0,5)', size: 3, color: 'red', label: {autoPosition: false, offset: [10, 10]}});\nboard.create('point', [-5, 0], {name: '(-5,0)', size: 3, color: 'red', label: {autoPosition: false, offset: [-15, -15]}});\nboard.create('point', [5, 0], {name: '(5,0)', size: 3, color: 'red', label: {autoPosition: false, offset: [10, -15]}});\nboard.unsuspendUpdate();"
              }
            }
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-3f-q2d",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "For the absolute value function \\( y = |x - 2| \\), complete the following analysis:",
    "t": "Global maximum and minimum",
    "subQuestions": [
      {
        "id": "y12a-3f-q2d-1",
        "type": "multiple_choice",
        "question": "a) Find the global maximum and minimum of \\( y = |x - 2| \\) for \\( -2 \\le x \\le 5 \\).",
        "opts": [
          "global minimum: 0 at x = 2, global maximum: 4 at x = -2",
          "global minimum: 0 at x = 2, global maximum: 3 at x = 5",
          "global minimum: 2 at x = 0, global maximum: 4 at x = -2",
          "global minimum: -4 at x = -2, global maximum: 3 at x = 5"
        ],
        "options": [
          {
            "text": "global minimum: 0 at x = 2, global maximum: 4 at x = -2",
            "imageUrl": ""
          },
          {
            "text": "global minimum: 0 at x = 2, global maximum: 3 at x = 5",
            "imageUrl": ""
          },
          {
            "text": "global minimum: 2 at x = 0, global maximum: 4 at x = -2",
            "imageUrl": ""
          },
          {
            "text": "global minimum: -4 at x = -2, global maximum: 3 at x = 5",
            "imageUrl": ""
          }
        ],
        "answer": "0",
        "answerStr": "0",
        "solutionSteps": [
          {
            "explanation": "Identify the vertex (minimum) of the absolute value function.",
            "workingOut": "\\text{The minimum of } |x-2| \\text{ occurs when } x-2 = 0 \\implies x = 2. \\\\ y(2) = 0"
          },
          {
            "explanation": "Evaluate boundaries.",
            "workingOut": "y(-2) = |-2 - 2| = |-4| = 4 \\\\ y(5) = |5 - 2| = |3| = 3"
          },
          {
            "explanation": "Compare.",
            "workingOut": "\\text{Min is } 0 \\text{ at } x = 2, \\text{ Max is } 4 \\text{ at } x = -2"
          }
        ]
      },
      {
        "id": "y12a-3f-q2d-2",
        "type": "teacher_review",
        "question": "b) Sketch the graph of the function on the given domain.",
        "a": "Sketch the curve.",
        "solutionSteps": [
          {
            "explanation": "Use the calculated points to draw the graph.",
            "workingOut": "\\text{Sketch a V-shaped graph with vertex at (2,0), going up to (-2,4) on the left and (5,3) on the right.}"
          },
          {
            "explanation": "Final graph:",
            "workingOut": "",
            "graphData": {
              "jsxGraph": {
                "width": 350,
                "height": 250,
                "boundingbox": [
                  -3,
                  6,
                  6,
                  -2
                ],
                "script": "board.suspendUpdate();\nboard.create('arrow', [[-3, 0], [6, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-1], [0,5]], {strokeColor: 'black', strokeWidth: 1});\nvar f = function(x) { return Math.abs(x - 2); };\nboard.create('functiongraph', [f, -3, 6], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [2, 0], {name: 'Min(2,0)', size: 3, color: 'red', label: {autoPosition: false, offset: [-15, -15]}});\nboard.create('point', [-2, 4], {name: '(-2,4)', size: 3, color: 'red', label: {autoPosition: false, offset: [-15, 10]}});\nboard.create('point', [5, 3], {name: '(5,3)', size: 3, color: 'red', label: {autoPosition: false, offset: [10, 10]}});\nboard.unsuspendUpdate();"
              }
            }
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-3f-q2e",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "For the function \\( y = \\sqrt{2x} \\), complete the following analysis:",
    "t": "Global maximum and minimum",
    "subQuestions": [
      {
        "id": "y12a-3f-q2e-1",
        "type": "multiple_choice",
        "question": "a) Find the global maximum and minimum of \\( y = \\sqrt{2x} \\) for \\( 0 \\le x \\le 18 \\).",
        "opts": [
          "global minimum: 2 at x = 2, global maximum: 6 at x = 18",
          "global minimum: 0 at x = 0, global maximum: 6 at x = 18",
          "global minimum: 0 at x = 0, global maximum: 36 at x = 18",
          "global minimum: 0 at x = 0, global maximum: 18 at x = 18"
        ],
        "options": [
          {
            "text": "global minimum: 2 at x = 2, global maximum: 6 at x = 18",
            "imageUrl": ""
          },
          {
            "text": "global minimum: 0 at x = 0, global maximum: 6 at x = 18",
            "imageUrl": ""
          },
          {
            "text": "global minimum: 0 at x = 0, global maximum: 36 at x = 18",
            "imageUrl": ""
          },
          {
            "text": "global minimum: 0 at x = 0, global maximum: 18 at x = 18",
            "imageUrl": ""
          }
        ],
        "answer": "1",
        "answerStr": "1",
        "solutionSteps": [
          {
            "explanation": "Check for stationary points.",
            "workingOut": "y' = \\frac{1}{2}(2x)^{-1/2} \\cdot 2 = \\frac{1}{\\sqrt{2x}}. \\text{ Never zero.}"
          },
          {
            "explanation": "Evaluate boundaries.",
            "workingOut": "y(0) = \\sqrt{0} = 0 \\\\ y(18) = \\sqrt{36} = 6"
          },
          {
            "explanation": "Compare.",
            "workingOut": "\\text{Min is } 0 \\text{ at } x = 0, \\text{ Max is } 6 \\text{ at } x = 18"
          }
        ]
      },
      {
        "id": "y12a-3f-q2e-2",
        "type": "teacher_review",
        "question": "b) Sketch the graph of the function on the given domain.",
        "a": "Sketch the curve.",
        "solutionSteps": [
          {
            "explanation": "Use the calculated points to draw the graph.",
            "workingOut": "\\text{Sketch the upper half of a parabola opening to the right, starting from (0,0) and ending at (18,6).}"
          },
          {
            "explanation": "Final graph:",
            "workingOut": "",
            "graphData": {
              "jsxGraph": {
                "width": 350,
                "height": 250,
                "boundingbox": [
                  -2,
                  8,
                  20,
                  -2
                ],
                "script": "board.suspendUpdate();\nboard.create('arrow', [[-2, 0], [20, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-1], [0,7]], {strokeColor: 'black', strokeWidth: 1});\nvar f = function(x) { return Math.sqrt(2*x); };\nboard.create('functiongraph', [f, -2, 20], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [0, 0], {name: 'Min(0,0)', size: 3, color: 'red', label: {autoPosition: false, offset: [-15, -15]}});\nboard.create('point', [18, 6], {name: 'Max(18,6)', size: 3, color: 'red', label: {autoPosition: false, offset: [-20, 15]}});\nboard.unsuspendUpdate();"
              }
            }
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-3f-q2f",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "For the function \\( y = \\frac{4}{x} \\), complete the following analysis:",
    "t": "Global maximum and minimum",
    "subQuestions": [
      {
        "id": "y12a-3f-q2f-1",
        "type": "multiple_choice",
        "question": "a) Find the global maximum and minimum of \\( y = \\frac{4}{x} \\) for \\( -4 \\le x \\le -2 \\).",
        "opts": [
          "global minimum: -1 at x = -4, global maximum: -2 at x = -2",
          "global minimum: -2 at x = -2, global maximum: -1 at x = -4",
          "global minimum: -4 at x = -1, global maximum: -2 at x = -2",
          "global minimum: -2 at x = -2, global maximum: 0 at x = 0"
        ],
        "options": [
          {
            "text": "global minimum: -1 at x = -4, global maximum: -2 at x = -2",
            "imageUrl": ""
          },
          {
            "text": "global minimum: -2 at x = -2, global maximum: -1 at x = -4",
            "imageUrl": ""
          },
          {
            "text": "global minimum: -4 at x = -1, global maximum: -2 at x = -2",
            "imageUrl": ""
          },
          {
            "text": "global minimum: -2 at x = -2, global maximum: 0 at x = 0",
            "imageUrl": ""
          }
        ],
        "answer": "1",
        "answerStr": "1",
        "solutionSteps": [
          {
            "explanation": "Check for stationary points.",
            "workingOut": "y' = -\\frac{4}{x^2} < 0. \\text{ Strictly decreasing on the interval.}"
          },
          {
            "explanation": "Evaluate boundaries.",
            "workingOut": "y(-4) = \\frac{4}{-4} = -1 \\\\ y(-2) = \\frac{4}{-2} = -2"
          },
          {
            "explanation": "Compare.",
            "workingOut": "\\text{Min is } -2 \\text{ at } x = -2, \\text{ Max is } -1 \\text{ at } x = -4"
          }
        ]
      },
      {
        "id": "y12a-3f-q2f-2",
        "type": "teacher_review",
        "question": "b) Sketch the graph of the function on the given domain.",
        "a": "Sketch the curve.",
        "solutionSteps": [
          {
            "explanation": "Use the calculated points to draw the graph.",
            "workingOut": "\\text{Sketch a hyperbola branch in the third quadrant, going from (-4,-1) down to (-2,-2).}"
          },
          {
            "explanation": "Final graph:",
            "workingOut": "",
            "graphData": {
              "jsxGraph": {
                "width": 350,
                "height": 250,
                "boundingbox": [
                  -5,
                  1,
                  1,
                  -4
                ],
                "script": "board.suspendUpdate();\nboard.create('arrow', [[-5, 0], [1, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.8], [0,0.8]], {strokeColor: 'black', strokeWidth: 1});\nvar f = function(x) { return 4/x; };\nboard.create('functiongraph', [f, -5, 1], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [-4, -1], {name: 'Max(-4,-1)', size: 3, color: 'red', label: {autoPosition: false, offset: [-35, 15]}});\nboard.create('point', [-2, -2], {name: 'Min(-2,-2)', size: 3, color: 'red', label: {autoPosition: false, offset: [10, -10]}});\nboard.unsuspendUpdate();"
              }
            }
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-3f-q2g",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "For the given piecewise function, complete the following analysis:\n\\( y = -2 \\) for \\( x < -3 \\)\n\\( y = x + 1 \\) for \\( -3 \\le x < 2 \\)\n\\( y = 3 \\) for \\( x \\ge 2 \\)\nSketch the function and state its global minimum and global maximum. (Format: 'global minimum: min_val for x <= min_range, global maximum: max_val for x >= max_range')",
    "t": "Global maximum and minimum",
    "subQuestions": [
      {
        "id": "y12a-3f-q2g-1",
        "type": "multiple_choice",
        "question": "a) Find the global maximum and minimum of the given piecewise function.",
        "opts": [
          "global minimum: -3 at x = -3, global maximum: 2 at x = 2",
          "global minimum: -2 at x = -2, global maximum: 3 at x = 3",
          "global minimum: 0 at x = -1, global maximum: 3 for x >= 2",
          "global minimum: -2 for x <= -3, global maximum: 3 for x >= 2"
        ],
        "options": [
          {
            "text": "global minimum: -3 at x = -3, global maximum: 2 at x = 2",
            "imageUrl": ""
          },
          {
            "text": "global minimum: -2 at x = -2, global maximum: 3 at x = 3",
            "imageUrl": ""
          },
          {
            "text": "global minimum: 0 at x = -1, global maximum: 3 for x >= 2",
            "imageUrl": ""
          },
          {
            "text": "global minimum: -2 for x <= -3, global maximum: 3 for x >= 2",
            "imageUrl": ""
          }
        ],
        "answer": "3",
        "answerStr": "3",
        "solutionSteps": [
          {
            "explanation": "Analyze the pieces.",
            "workingOut": "1) \\text{ For } x < -3, y = -2 \\text{ (constant)}. \\\\ 2) \\text{ For } -3 \\le x < 2, y = x + 1 \\text{ (increasing from } -2 \\text{ up to } 3). \\\\ 3) \\text{ For } x \\ge 2, y = 3 \\text{ (constant)}."
          },
          {
            "explanation": "Determine max and min.",
            "workingOut": "\\text{The lowest value is } -2 \\text{ on } x \\le -3 \\text{ (since } -3+1=-2). \\text{ The highest value is } 3 \\text{ on } x \\ge 2. \\\\ \\text{Min is } -2 \\text{ for } x \\le -3, \\text{ Max is } 3 \\text{ for } x \\ge 2"
          }
        ]
      },
      {
        "id": "y12a-3f-q2g-2",
        "type": "teacher_review",
        "question": "b) Sketch the graph of the function on the given domain.",
        "a": "Sketch the curve.",
        "solutionSteps": [
          {
            "explanation": "Use the calculated points to draw the graph.",
            "workingOut": "\\text{Sketch a flat line at y=-2 for x<-3, a diagonal line from (-3,-2) to (2,3), and a flat line at y=3 for x>2.}"
          },
          {
            "explanation": "Final graph:",
            "workingOut": "",
            "graphData": {
              "jsxGraph": {
                "width": 350,
                "height": 250,
                "boundingbox": [
                  -5,
                  5,
                  4,
                  -4
                ],
                "script": "board.suspendUpdate();\nboard.create('arrow', [[-5, 0], [4, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.5], [0,4.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('segment', [[-5,-2], [-3,-2]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('segment', [[-3,-2], [2,3]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('segment', [[2,3], [4,3]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [-3, -2], {size: 2, color: 'blue', name: '', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [2, 3], {size: 2, color: 'blue', name: '', label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
              }
            }
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-3f-q3a",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "For the function \\( y = x^2 - 6x + 5 \\) for \\( 0 \\le x \\le 7 \\), complete the following analysis:",
    "t": "Global maximum and minimum",
    "subQuestions": [
      {
        "id": "y12a-3f-q3a-1",
        "type": "multiple_choice",
        "question": "a) Find the absolute minimum and absolute maximum of \\( y = x^2 - 6x + 5 \\) for \\( 0 \\le x \\le 7 \\).",
        "opts": [
          "absolute minimum: -5 at x = 3, absolute maximum: 12 at x = 7",
          "absolute minimum: -4 at x = 3, absolute maximum: 5 at x = 0",
          "absolute minimum: -4 at x = 3, absolute maximum: 12 at x = 7",
          "absolute minimum: 5 at x = 0, absolute maximum: 12 at x = 7"
        ],
        "options": [
          {
            "text": "absolute minimum: -5 at x = 3, absolute maximum: 12 at x = 7",
            "imageUrl": ""
          },
          {
            "text": "absolute minimum: -4 at x = 3, absolute maximum: 5 at x = 0",
            "imageUrl": ""
          },
          {
            "text": "absolute minimum: -4 at x = 3, absolute maximum: 12 at x = 7",
            "imageUrl": ""
          },
          {
            "text": "absolute minimum: 5 at x = 0, absolute maximum: 12 at x = 7",
            "imageUrl": ""
          }
        ],
        "answer": "2",
        "answerStr": "2",
        "solutionSteps": [
          {
            "explanation": "Find stationary points.",
            "workingOut": "y' = 2x - 6 = 0 \\implies x = 3. \\\\ y(3) = 9 - 18 + 5 = -4"
          },
          {
            "explanation": "Evaluate boundaries.",
            "workingOut": "y(0) = 5 \\\\ y(7) = 49 - 42 + 5 = 12"
          },
          {
            "explanation": "Compare.",
            "workingOut": "\\text{Min is } -4 \\text{ at } x=3, \\text{ Max is } 12 \\text{ at } x=7"
          }
        ]
      },
      {
        "id": "y12a-3f-q3a-2",
        "type": "teacher_review",
        "question": "b) Sketch the graph of the function on the given domain.",
        "a": "Sketch the curve.",
        "solutionSteps": [
          {
            "explanation": "Use the calculated points to draw the graph.",
            "workingOut": "\\text{Sketch a concave up parabola with vertex at (3,-4), crossing the y-axis at 5, ending at (7,12).}"
          },
          {
            "explanation": "Final graph:",
            "workingOut": "",
            "graphData": {
              "jsxGraph": {
                "width": 350,
                "height": 250,
                "boundingbox": [
                  -2,
                  14,
                  8,
                  -6
                ],
                "script": "board.suspendUpdate();\nboard.create('arrow', [[-2, 0], [8, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-5], [0,13]], {strokeColor: 'black', strokeWidth: 1});\nvar f = function(x) { return x*x - 6*x + 5; };\nboard.create('functiongraph', [f, -2, 8], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [3, -4], {name: 'Min(3,-4)', size: 3, color: 'red', label: {autoPosition: false, offset: [10, -10]}});\nboard.create('point', [0, 5], {name: '(0,5)', size: 3, color: 'red', label: {autoPosition: false, offset: [10, 10]}});\nboard.create('point', [7, 12], {name: 'Max(7,12)', size: 3, color: 'red', label: {autoPosition: false, offset: [-35, 15]}});\nboard.unsuspendUpdate();"
              }
            }
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-3f-q3b",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "For the function \\( y = x^3 - 3x^2 + 2 \\) for \\( -2 \\le x \\le 3 \\), complete the following analysis:",
    "t": "Global maximum and minimum",
    "subQuestions": [
      {
        "id": "y12a-3f-q3b-1",
        "type": "multiple_choice",
        "question": "a) Find the absolute minimum and absolute maximum of \\( y = x^3 - 3x^2 + 2 \\) for \\( -2 \\le x \\le 3 \\).",
        "opts": [
          "absolute minimum: -18 at x = -2, absolute maximum: 0 at x = 1",
          "absolute minimum: -2 at x = 2, absolute maximum: 20 at x = 3",
          "absolute minimum: -2 at x = 2, absolute maximum: 2 at x = 0",
          "absolute minimum: -18 at x = -2, absolute maximum: 2 at x = 0, 3"
        ],
        "options": [
          {
            "text": "absolute minimum: -18 at x = -2, absolute maximum: 0 at x = 1",
            "imageUrl": ""
          },
          {
            "text": "absolute minimum: -2 at x = 2, absolute maximum: 20 at x = 3",
            "imageUrl": ""
          },
          {
            "text": "absolute minimum: -2 at x = 2, absolute maximum: 2 at x = 0",
            "imageUrl": ""
          },
          {
            "text": "absolute minimum: -18 at x = -2, absolute maximum: 2 at x = 0, 3",
            "imageUrl": ""
          }
        ],
        "answer": "3",
        "answerStr": "3",
        "solutionSteps": [
          {
            "explanation": "Find stationary points.",
            "workingOut": "y' = 3x^2 - 6x = 3x(x - 2) = 0 \\implies x = 0, 2. \\\\ y(0) = 2 \\text{ (local max)} \\\\ y(2) = 8 - 12 + 2 = -2 \\text{ (local min)}"
          },
          {
            "explanation": "Evaluate boundaries.",
            "workingOut": "y(-2) = -8 - 12 + 2 = -18 \\\\ y(3) = 27 - 27 + 2 = 2"
          },
          {
            "explanation": "Compare.",
            "workingOut": "\\text{Min is } -18 \\text{ at } x=-2, \\text{ Max is } 2 \\text{ at } x=0, 3"
          }
        ]
      },
      {
        "id": "y12a-3f-q3b-2",
        "type": "teacher_review",
        "question": "b) Sketch the graph of the function on the given domain.",
        "a": "Sketch the curve.",
        "solutionSteps": [
          {
            "explanation": "Use the calculated points to draw the graph.",
            "workingOut": "\\text{Sketch a cubic curve from (-2,-18), up to max at (0,2), down to min at (2,-2), and up to (3,2).}"
          },
          {
            "explanation": "Final graph:",
            "workingOut": "",
            "graphData": {
              "jsxGraph": {
                "width": 350,
                "height": 250,
                "boundingbox": [
                  -3,
                  6,
                  4,
                  -22
                ],
                "script": "board.suspendUpdate();\nboard.create('arrow', [[-3, 0], [4, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-20], [0,4]], {strokeColor: 'black', strokeWidth: 1});\nvar f = function(x) { return x*x*x - 3*x*x + 2; };\nboard.create('functiongraph', [f, -3, 4], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [0, 2], {name: 'Max(0,2)', size: 3, color: 'red', label: {autoPosition: false, offset: [10, 10]}});\nboard.create('point', [2, -2], {name: 'Min(2,-2)', size: 3, color: 'red', label: {autoPosition: false, offset: [10, -10]}});\nboard.create('point', [-2, -18], {name: '(-2,-18)', size: 3, color: 'red', label: {autoPosition: false, offset: [10, -10]}});\nboard.create('point', [3, 2], {name: '(3,2)', size: 3, color: 'red', label: {autoPosition: false, offset: [10, 10]}});\nboard.unsuspendUpdate();"
              }
            }
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-3f-q3c",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "For the function \\( y = 4x^3 - 3x + 1 \\) for \\( -1 \\le x \\le 1 \\), complete the following analysis:",
    "t": "Global maximum and minimum",
    "subQuestions": [
      {
        "id": "y12a-3f-q3c-1",
        "type": "multiple_choice",
        "question": "a) Find the absolute minimum and absolute maximum of \\( y = 4x^3 - 3x + 1 \\) for \\( -1 \\le x \\le 1 \\).",
        "opts": [
          "absolute minimum: 0 at x = 0.5, absolute maximum: 2 at x = -0.5",
          "absolute minimum: 0 at x = -1, 0.5, absolute maximum: 2 at x = -0.5, 1",
          "absolute minimum: 0 at x = -1, absolute maximum: 4 at x = 1",
          "absolute minimum: -2 at x = -1, absolute maximum: 2 at x = 1"
        ],
        "options": [
          {
            "text": "absolute minimum: 0 at x = 0.5, absolute maximum: 2 at x = -0.5",
            "imageUrl": ""
          },
          {
            "text": "absolute minimum: 0 at x = -1, 0.5, absolute maximum: 2 at x = -0.5, 1",
            "imageUrl": ""
          },
          {
            "text": "absolute minimum: 0 at x = -1, absolute maximum: 4 at x = 1",
            "imageUrl": ""
          },
          {
            "text": "absolute minimum: -2 at x = -1, absolute maximum: 2 at x = 1",
            "imageUrl": ""
          }
        ],
        "answer": "1",
        "answerStr": "1",
        "solutionSteps": [
          {
            "explanation": "Find stationary points.",
            "workingOut": "y' = 12x^2 - 3 = 3(4x^2 - 1) = 0 \\implies x = 0.5, -0.5. \\\\ y(0.5) = 4(0.125) - 1.5 + 1 = 0.5 - 1.5 + 1 = 0 \\\\ y(-0.5) = 4(-0.125) + 1.5 + 1 = -0.5 + 1.5 + 1 = 2"
          },
          {
            "explanation": "Evaluate boundaries.",
            "workingOut": "y(-1) = -4 + 3 + 1 = 0 \\\\ y(1) = 4 - 3 + 1 = 2"
          },
          {
            "explanation": "Compare.",
            "workingOut": "\\text{Min is } 0 \\text{ at } x=-1, 0.5; \\text{ Max is } 2 \\text{ at } x=-0.5, 1"
          }
        ]
      },
      {
        "id": "y12a-3f-q3c-2",
        "type": "teacher_review",
        "question": "b) Sketch the graph of the function on the given domain.",
        "a": "Sketch the curve.",
        "solutionSteps": [
          {
            "explanation": "Use the calculated points to draw the graph.",
            "workingOut": "\\text{Sketch a cubic curve starting at (-1,0), rising to max (-0.5,2), falling to min (0.5,0), rising to (1,2).}"
          },
          {
            "explanation": "Final graph:",
            "workingOut": "",
            "graphData": {
              "jsxGraph": {
                "width": 350,
                "height": 250,
                "boundingbox": [
                  -1.5,
                  3,
                  1.5,
                  -1
                ],
                "script": "board.suspendUpdate();\nboard.create('arrow', [[-1.5, 0], [1.5, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-0.8], [0,2.5]], {strokeColor: 'black', strokeWidth: 1});\nvar f = function(x) { return 4*x*x*x - 3*x + 1; };\nboard.create('functiongraph', [f, -1.5, 1.5], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [-0.5, 2], {name: 'Max(-0.5,2)', size: 3, color: 'red', label: {autoPosition: false, offset: [-20, 15]}});\nboard.create('point', [0.5, 0], {name: 'Min(0.5,0)', size: 3, color: 'red', label: {autoPosition: false, offset: [10, 10]}});\nboard.create('point', [-1, 0], {name: '(-1,0)', size: 3, color: 'red', label: {autoPosition: false, offset: [-15, -15]}});\nboard.create('point', [1, 2], {name: '(1,2)', size: 3, color: 'red', label: {autoPosition: false, offset: [10, 10]}});\nboard.unsuspendUpdate();"
              }
            }
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-3f-q3d",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "For the function \\( y = x^3 - 3x^2 + 3x \\) for \\( 0 \\le x \\le 2 \\), complete the following analysis:",
    "t": "Global maximum and minimum",
    "subQuestions": [
      {
        "id": "y12a-3f-q3d-1",
        "type": "multiple_choice",
        "question": "a) Find the absolute minimum and absolute maximum of \\( y = x^3 - 3x^2 + 3x \\) for \\( 0 \\le x \\le 2 \\).",
        "opts": [
          "absolute minimum: 0 at x = 0, absolute maximum: 2 at x = 2",
          "absolute minimum: 0 at x = 0, absolute maximum: 4 at x = 2",
          "absolute minimum: -2 at x = 0, absolute maximum: 2 at x = 2",
          "absolute minimum: 1 at x = 1, absolute maximum: 2 at x = 2"
        ],
        "options": [
          {
            "text": "absolute minimum: 0 at x = 0, absolute maximum: 2 at x = 2",
            "imageUrl": ""
          },
          {
            "text": "absolute minimum: 0 at x = 0, absolute maximum: 4 at x = 2",
            "imageUrl": ""
          },
          {
            "text": "absolute minimum: -2 at x = 0, absolute maximum: 2 at x = 2",
            "imageUrl": ""
          },
          {
            "text": "absolute minimum: 1 at x = 1, absolute maximum: 2 at x = 2",
            "imageUrl": ""
          }
        ],
        "answer": "0",
        "answerStr": "0",
        "solutionSteps": [
          {
            "explanation": "Find stationary points.",
            "workingOut": "y' = 3x^2 - 6x + 3 = 3(x^2 - 2x + 1) = 3(x - 1)^2. \\\\ y'=0 \\implies x=1. \\text{ Note } y' \\ge 0 \\text{ always, so } x=1 \\text{ is a horizontal point of inflection.} \\\\ y(1) = 1 - 3 + 3 = 1"
          },
          {
            "explanation": "Evaluate boundaries.",
            "workingOut": "y(0) = 0 \\\\ y(2) = 8 - 12 + 6 = 2"
          },
          {
            "explanation": "Compare.",
            "workingOut": "\\text{Min is } 0 \\text{ at } x=0, \\text{ Max is } 2 \\text{ at } x=2"
          }
        ]
      },
      {
        "id": "y12a-3f-q3d-2",
        "type": "teacher_review",
        "question": "b) Sketch the graph of the function on the given domain.",
        "a": "Sketch the curve.",
        "solutionSteps": [
          {
            "explanation": "Use the calculated points to draw the graph.",
            "workingOut": "\\text{Sketch a continuously rising curve from (0,0) passing through a horizontal inflection at (1,1) up to (2,2).}"
          },
          {
            "explanation": "Final graph:",
            "workingOut": "",
            "graphData": {
              "jsxGraph": {
                "width": 350,
                "height": 250,
                "boundingbox": [
                  -1,
                  3,
                  3,
                  -1
                ],
                "script": "board.suspendUpdate();\nboard.create('arrow', [[-1, 0], [3, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-0.8], [0,2.8]], {strokeColor: 'black', strokeWidth: 1});\nvar f = function(x) { return x*x*x - 3*x*x + 3*x; };\nboard.create('functiongraph', [f, -1, 3], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [1, 1], {name: 'Inflection(1,1)', size: 3, color: 'red', label: {autoPosition: false, offset: [10, 5]}});\nboard.create('point', [0, 0], {name: 'Min(0,0)', size: 3, color: 'red', label: {autoPosition: false, offset: [-15, -15]}});\nboard.create('point', [2, 2], {name: 'Max(2,2)', size: 3, color: 'red', label: {autoPosition: false, offset: [10, 10]}});\nboard.unsuspendUpdate();"
              }
            }
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-3f-q4a",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 240,
    "question": "For the function \\( y = x^4 - 2x^2 + 3 \\) defined on the domain \\( 0.5 \\le x \\le 2 \\), find (i) any local maxima or minima and (ii) the global maximum and minimum. (Format: 'local minimum: min_val at x = min_x; global minimum: min_val at x = min_x, global maximum: max_val at x = max_x')",
    "a": "local minimum: 2 at x = 1; global minimum: 2 at x = 1, global maximum: 11 at x = 2",
    "t": "Global maximum and minimum",
    "solutionSteps": [
      {
        "explanation": "Find stationary points.",
        "workingOut": "y' = 4x^3 - 4x = 4x(x^2 - 1) = 4x(x-1)(x+1) = 0 \\implies x = 0, -1, 1"
      },
      {
        "explanation": "Identify points within domain \\( 0.5 \\le x \\le 2 \\).",
        "workingOut": "\\text{Only } x = 1 \\text{ is in the domain.}"
      },
      {
        "explanation": "Check nature and evaluate.",
        "workingOut": "y''(x) = 12x^2 - 4 \\implies y''(1) = 8 > 0 \\implies \\text{local min}. \\\\ y(1) = 1 - 2 + 3 = 2"
      },
      {
        "explanation": "Evaluate boundaries.",
        "workingOut": "y(0.5) = (0.5)^4 - 2(0.5)^2 + 3 = 0.0625 - 0.5 + 3 = 2.5625 \\\\ y(2) = 16 - 8 + 3 = 11"
      },
      {
        "explanation": "Compare.",
        "workingOut": "\\text{global min is } 2 \\text{ at } x=1, \\text{ global max is } 11 \\text{ at } x=2"
      }
    ],
    "opts": [
      "local minimum: 2 at x = 1; global minimum: 2 at x = 1, global maximum: 11 at x = 2",
      "local maximum: 3 at x = 0; global minimum: 2.56 at x = 0.5, global maximum: 11 at x = 2",
      "local minimum: 3 at x = 1; global minimum: 3 at x = 1, global maximum: 11 at x = 2",
      "local minimum: 2 at x = 1; global minimum: 2 at x = 1, global maximum: 3 at x = 0.5"
    ],
    "options": [
      {
        "text": "local minimum: 2 at x = 1; global minimum: 2 at x = 1, global maximum: 11 at x = 2",
        "imageUrl": ""
      },
      {
        "text": "local maximum: 3 at x = 0; global minimum: 2.56 at x = 0.5, global maximum: 11 at x = 2",
        "imageUrl": ""
      },
      {
        "text": "local minimum: 3 at x = 1; global minimum: 3 at x = 1, global maximum: 11 at x = 2",
        "imageUrl": ""
      },
      {
        "text": "local minimum: 2 at x = 1; global minimum: 2 at x = 1, global maximum: 3 at x = 0.5",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "answerStr": "0"
  },
  {
    "id": "y12a-3f-q4b",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 240,
    "question": "For the function \\( y = x^4 - 2x^2 + 3 \\) defined on the domain \\( -2 \\le x \\le 0.5 \\), find (i) any local maxima or minima and (ii) the global maximum and minimum. (Format: 'local maximum: max_val at x = max_x, local minimum: min_val at x = min_x; global minimum: min_val at x = min_x, global maximum: max_val at x = max_x')",
    "a": "local maximum: 3 at x = 0, local minimum: 2 at x = -1; global minimum: 2 at x = -1, global maximum: 11 at x = -2",
    "t": "Global maximum and minimum",
    "solutionSteps": [
      {
        "explanation": "Find stationary points.",
        "workingOut": "y' = 4x^3 - 4x = 4x(x-1)(x+1) = 0 \\implies x = 0, -1, 1"
      },
      {
        "explanation": "Identify points within domain \\( -2 \\le x \\le 0.5 \\).",
        "workingOut": "x = 0 \\text{ and } x = -1 \\text{ are in the domain.}"
      },
      {
        "explanation": "Check nature and evaluate.",
        "workingOut": "y''(x) = 12x^2 - 4. \\\\ y''(0) = -4 < 0 \\implies \\text{local max}. \\; y(0) = 3 \\\\ y''(-1) = 12 - 4 = 8 > 0 \\implies \\text{local min}. \\; y(-1) = 1 - 2 + 3 = 2"
      },
      {
        "explanation": "Evaluate boundaries.",
        "workingOut": "y(-2) = 16 - 8 + 3 = 11 \\\\ y(0.5) = 2.5625"
      },
      {
        "explanation": "Compare.",
        "workingOut": "\\text{global min is } 2 \\text{ at } x=-1, \\text{ global max is } 11 \\text{ at } x=-2"
      }
    ],
    "opts": [
      "local maximum: 2 at x = -1, local minimum: 3 at x = 0; global minimum: 2 at x = -1, global maximum: 11 at x = -2",
      "local minimum: 2 at x = -1; global minimum: 2 at x = -1, global maximum: 11 at x = -2",
      "local maximum: 3 at x = 0, local minimum: 2 at x = -1; global minimum: 2 at x = -1, global maximum: 3 at x = 0",
      "local maximum: 3 at x = 0, local minimum: 2 at x = -1; global minimum: 2 at x = -1, global maximum: 11 at x = -2"
    ],
    "options": [
      {
        "text": "local maximum: 2 at x = -1, local minimum: 3 at x = 0; global minimum: 2 at x = -1, global maximum: 11 at x = -2",
        "imageUrl": ""
      },
      {
        "text": "local minimum: 2 at x = -1; global minimum: 2 at x = -1, global maximum: 11 at x = -2",
        "imageUrl": ""
      },
      {
        "text": "local maximum: 3 at x = 0, local minimum: 2 at x = -1; global minimum: 2 at x = -1, global maximum: 3 at x = 0",
        "imageUrl": ""
      },
      {
        "text": "local maximum: 3 at x = 0, local minimum: 2 at x = -1; global minimum: 2 at x = -1, global maximum: 11 at x = -2",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "answerStr": "3"
  },
  {
    "id": "y12a-3f-q4c",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 240,
    "question": "For the function \\( y = x^4 - 2x^2 + 3 \\) defined on the domain \\( -0.5 \\le x \\le 0.5 \\), find (i) any local maxima or minima and (ii) the global maximum and minimum. (Format: 'local maximum: max_val at x = max_x; global minimum: min_val at x = min_x1, min_x2, global maximum: max_val at x = max_x')",
    "a": "local maximum: 3 at x = 0; global minimum: 2.5625 at x = -0.5, 0.5, global maximum: 3 at x = 0",
    "t": "Global maximum and minimum",
    "solutionSteps": [
      {
        "explanation": "Find stationary points.",
        "workingOut": "y' = 4x^3 - 4x = 0 \\implies x = 0, -1, 1"
      },
      {
        "explanation": "Identify points within domain \\( -0.5 \\le x \\le 0.5 \\).",
        "workingOut": "\\text{Only } x = 0 \\text{ is in the domain.}"
      },
      {
        "explanation": "Check nature and evaluate.",
        "workingOut": "y''(0) = -4 < 0 \\implies \\text{local max}. \\; y(0) = 3"
      },
      {
        "explanation": "Evaluate boundaries.",
        "workingOut": "y(-0.5) = 0.0625 - 0.5 + 3 = 2.5625 \\\\ y(0.5) = 2.5625"
      },
      {
        "explanation": "Compare.",
        "workingOut": "\\text{global min is } 2.5625 \\text{ at } x = -0.5, 0.5, \\text{ global max is } 3 \\text{ at } x=0"
      }
    ],
    "opts": [
      "local maximum: 3 at x = 0; global minimum: 0 at x = -0.5, 0.5, global maximum: 3 at x = 0",
      "local maximum: 3 at x = 0; global minimum: 2.5625 at x = -0.5, 0.5, global maximum: 3 at x = 0",
      "local maximum: 3 at x = 0; global minimum: 2 at x = 0, global maximum: 3 at x = 0",
      "local minimum: 2.5625 at x = -0.5, 0.5; global minimum: 2.5625 at x = -0.5, 0.5, global maximum: 11 at x = 2"
    ],
    "options": [
      {
        "text": "local maximum: 3 at x = 0; global minimum: 0 at x = -0.5, 0.5, global maximum: 3 at x = 0",
        "imageUrl": ""
      },
      {
        "text": "local maximum: 3 at x = 0; global minimum: 2.5625 at x = -0.5, 0.5, global maximum: 3 at x = 0",
        "imageUrl": ""
      },
      {
        "text": "local maximum: 3 at x = 0; global minimum: 2 at x = 0, global maximum: 3 at x = 0",
        "imageUrl": ""
      },
      {
        "text": "local minimum: 2.5625 at x = -0.5, 0.5; global minimum: 2.5625 at x = -0.5, 0.5, global maximum: 11 at x = 2",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "answerStr": "1"
  }
];
