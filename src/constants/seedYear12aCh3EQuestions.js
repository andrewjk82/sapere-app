export const Y12A_CH3E_QUESTIONS = [
  {
    "id": "y12a-3e-q1",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "The diagram shows a sketch of \\( y = 12x^2 - x^3 \\). The curve cuts the \\( x \\)-axis at \\( A \\), and has a maximum turning point at \\( B \\) and a point of inflection at \\( C \\). Analyze this curve and find the key features.",
    "t": "Systematic curve sketching with the derivative",
    "subQuestions": [
      {
        "id": "y12a-3e-q1a",
        "type": "multiple_choice",
        "question": "a) Find the coordinates of \\( A \\), the point where the curve cuts the \\( x \\)-axis (other than the origin).",
        "a": "(12,0)",
        "opts": [
          "\\( (144, 0) \\)",
          "\\( (6, 0) \\)",
          "\\( (-12, 0) \\)",
          "\\( (12, 0) \\)"
        ],
        "options": [
          {
            "text": "\\( (144, 0) \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( (6, 0) \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( (-12, 0) \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( (12, 0) \\)",
            "imageUrl": ""
          }
        ],
        "answer": "3",
        "answerStr": "3",
        "solutionSteps": [
          {
            "explanation": "Set \\( y = 0 \\) to find the x-intercepts.",
            "workingOut": "\\begin{aligned} 12x^2 - x^3 &= 0 \\\\ x^2(12 - x) &= 0 \\end{aligned}"
          },
          {
            "explanation": "Solve for \\( x \\).",
            "workingOut": "\\begin{aligned} x &= 0 \\text{ or } x = 12 \\end{aligned}"
          },
          {
            "explanation": "Identify point \\( A \\) (other than origin).",
            "workingOut": "\\text{The non-zero intercept is at } (12, 0)."
          }
        ]
      },
      {
        "id": "y12a-3e-q1b",
        "type": "multiple_choice",
        "question": "b) Find the coordinates of the maximum turning point \\( B \\).",
        "a": "(8,256)",
        "opts": [
          "\\( (4, 128) \\)",
          "\\( (12, 0) \\)",
          "\\( (8, 256) \\)",
          "\\( (6, 216) \\)"
        ],
        "options": [
          {
            "text": "\\( (4, 128) \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( (12, 0) \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( (8, 256) \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( (6, 216) \\)",
            "imageUrl": ""
          }
        ],
        "answer": "2",
        "answerStr": "2",
        "solutionSteps": [
          {
            "explanation": "Find the first derivative \\( y' \\).",
            "workingOut": "\\begin{aligned} y' &= 24x - 3x^2 \\end{aligned}"
          },
          {
            "explanation": "Set \\( y' = 0 \\) to find stationary points.",
            "workingOut": "\\begin{aligned} 24x - 3x^2 &= 0 \\\\ 3x(8 - x) &= 0 \\implies x = 0 \\text{ or } x = 8 \\end{aligned}"
          },
          {
            "explanation": "Find the y-coordinate for the maximum turning point \\( B \\). (From the graph/equation, \\( x=8 \\) is the maximum).",
            "workingOut": "\\begin{aligned} y(8) &= 12(8)^2 - (8)^3 \\\\ &= 12(64) - 512 \\\\ &= 768 - 512 = 256 \\end{aligned} \\\\ \\implies B(8, 256)"
          }
        ]
      },
      {
        "id": "y12a-3e-q1c",
        "type": "multiple_choice",
        "question": "c) Find the coordinates of the point of inflection \\( C \\).",
        "a": "(4,128)",
        "opts": [
          "\\( (8, 256) \\)",
          "\\( (4, 128) \\)",
          "\\( (2, 40) \\)",
          "\\( (6, 216) \\)"
        ],
        "options": [
          {
            "text": "\\( (8, 256) \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( (4, 128) \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( (2, 40) \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( (6, 216) \\)",
            "imageUrl": ""
          }
        ],
        "answer": "1",
        "answerStr": "1",
        "solutionSteps": [
          {
            "explanation": "Find the second derivative \\( y'' \\).",
            "workingOut": "\\begin{aligned} y'' &= \\frac{d}{dx}(24x - 3x^2) = 24 - 6x \\end{aligned}"
          },
          {
            "explanation": "Set \\( y'' = 0 \\) to find the point of inflection.",
            "workingOut": "\\begin{aligned} 24 - 6x &= 0 \\\\ 6x &= 24 \\implies x = 4 \\end{aligned}"
          },
          {
            "explanation": "Find the y-coordinate.",
            "workingOut": "\\begin{aligned} y(4) &= 12(4)^2 - (4)^3 \\\\ &= 12(16) - 64 \\\\ &= 192 - 64 = 128 \\end{aligned} \\\\ \\implies C(4, 128)"
          }
        ]
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [
          -3,
          320,
          15,
          -60
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-2,0], [14,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-40], [0,290]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [13.5, -15, 'x'], {fontSize: 14});\nboard.create('text', [-0.5, 275, 'y'], {fontSize: 14});\nvar f = function(x) { return 12*x*x - x*x*x; };\nboard.create('functiongraph', [f, -2, 13], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [12, 0], {name: 'A(12,0)', size: 3, color: 'red', label: {autoPosition: false, offset: [5, 12]}});\nboard.create('point', [8, 256], {name: 'B(8,256)', size: 3, color: 'red', label: {autoPosition: false, offset: [-15, 15]}});\nboard.create('point', [4, 128], {name: 'C(4,128)', size: 3, color: 'red', label: {autoPosition: false, offset: [10, 5]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y12a-3e-q2",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "The diagram shows a curve \\( y = f(x) \\) with turning points at \\( (-2, -4) \\) and \\( (3, 6) \\), and a point of inflection at \\( (0.5, 1) \\). Determine the properties of the curve from this graph.",
    "t": "Systematic curve sketching with the derivative",
    "subQuestions": [
      {
        "id": "y12a-3e-q2a",
        "type": "multiple_choice",
        "question": "a) Find the values of \\( x \\) for which \\( f'(x) = 0 \\). (If there are multiple values, list them in ascending order, separated by a comma.)",
        "a": "-2,3",
        "opts": [
          "\\( x = -2, 3 \\)",
          "\\( x = -4, 6 \\)",
          "\\( x = 0.5 \\)",
          "\\( x = -2, 0.5, 3 \\)"
        ],
        "options": [
          {
            "text": "\\( x = -2, 3 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( x = -4, 6 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( x = 0.5 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( x = -2, 0.5, 3 \\)",
            "imageUrl": ""
          }
        ],
        "answer": "0",
        "answerStr": "0",
        "solutionSteps": [
          {
            "explanation": "Recall the definition of a turning point.",
            "workingOut": "\\text{At a turning point, the gradient is zero, so } f'(x) = 0."
          },
          {
            "explanation": "Identify the x-coordinates of the turning points from the given information.",
            "workingOut": "\\text{The turning points are at } (-2, -4) \\text{ and } (3, 6). \\text{ Thus, } f'(x) = 0 \\text{ at } x = -2 \\text{ and } x = 3."
          }
        ]
      },
      {
        "id": "y12a-3e-q2b",
        "type": "multiple_choice",
        "question": "b) Find the value of \\( x \\) for which \\( f''(x) = 0 \\).",
        "a": "0.5",
        "opts": [
          "\\( x = -2 \\)",
          "\\( x = 1 \\)",
          "\\( x = 3 \\)",
          "\\( x = 0.5 \\)"
        ],
        "options": [
          {
            "text": "\\( x = -2 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( x = 1 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( x = 3 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( x = 0.5 \\)",
            "imageUrl": ""
          }
        ],
        "answer": "3",
        "answerStr": "3",
        "solutionSteps": [
          {
            "explanation": "Recall the definition of a point of inflection.",
            "workingOut": "\\text{At a possible point of inflection, the second derivative } f''(x) = 0."
          },
          {
            "explanation": "Identify the x-coordinate of the point of inflection from the given information.",
            "workingOut": "\\text{The point of inflection is at } (0.5, 1). \\text{ Thus, } f''(x) = 0 \\text{ at } x = 0.5."
          }
        ]
      },
      {
        "id": "y12a-3e-q2c",
        "type": "multiple_choice",
        "question": "c) State the interval of \\( x \\) for which \\( f(x) \\) is increasing. (Format: 'a < x < b')",
        "a": "-2 < x < 3",
        "opts": [
          "\\( x > 3 \\)",
          "\\( x < -2 \\text{ or } x > 3 \\)",
          "\\( x < -2 \\)",
          "\\( -2 < x < 3 \\)"
        ],
        "options": [
          {
            "text": "\\( x > 3 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( x < -2 \\text{ or } x > 3 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( x < -2 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( -2 < x < 3 \\)",
            "imageUrl": ""
          }
        ],
        "answer": "3",
        "answerStr": "3",
        "solutionSteps": [
          {
            "explanation": "Relate increasing behavior to the turning points.",
            "workingOut": "\\text{The function is increasing when } f'(x) > 0. \\text{ The curve goes from a minimum at } (-2, -4) \\text{ up to a maximum at } (3, 6)."
          },
          {
            "explanation": "Determine the interval.",
            "workingOut": "\\text{Between } x = -2 \\text{ and } x = 3 \\text{, the graph is rising. Therefore, it is increasing for } -2 < x < 3."
          }
        ]
      },
      {
        "id": "y12a-3e-q2d",
        "type": "multiple_choice",
        "question": "d) State the interval of \\( x \\) for which the curve is concave up, that is \\( f''(x) > 0 \\).",
        "a": "x > 0.5",
        "opts": [
          "\\( -2 < x < 3 \\)",
          "\\( x > 0.5 \\)",
          "\\( x < -2 \\text{ or } x > 3 \\)",
          "\\( x < 0.5 \\)"
        ],
        "options": [
          {
            "text": "\\( -2 < x < 3 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( x > 0.5 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( x < -2 \\text{ or } x > 3 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( x < 0.5 \\)",
            "imageUrl": ""
          }
        ],
        "answer": "3",
        "answerStr": "3",
        "solutionSteps": [
          {
            "explanation": "Relate concavity to the second derivative and inflection point.",
            "workingOut": "\\text{Concave up means } f''(x) > 0. \\text{ Concavity changes at the point of inflection } x = 0.5."
          },
          {
            "explanation": "Determine concavity on each side of the inflection point.",
            "workingOut": "\\text{The turning point at } x = -2 \\text{ is a local minimum, which sits in a concave up region (} f''(-2) > 0 \\text{).} \\\\ \\text{The turning point at } x = 3 \\text{ is a local maximum, which sits in a concave down region (} f''(3) < 0 \\text{).}"
          },
          {
            "explanation": "State the interval.",
            "workingOut": "\\text{The curve is concave up before the inflection point, so for } x < 0.5."
          }
        ]
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [
          -5,
          8,
          6,
          -7
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-4.5,0], [5.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-6.5], [0,7.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [5.3, -0.5, 'x'], {fontSize: 14});\nboard.create('text', [-0.5, 7.0, 'y'], {fontSize: 14});\nvar f = function(x) { return -0.16*x*x*x + 0.24*x*x + 2.88*x - 0.48; };\nboard.create('functiongraph', [f, -4.5, 5.5], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [-2, -4], {name: '(-2,-4)', size: 3, color: 'red', label: {autoPosition: false, offset: [-15, -15]}});\nboard.create('point', [3, 6], {name: '(3,6)', size: 3, color: 'red', label: {autoPosition: false, offset: [10, 10]}});\nboard.create('point', [0.5, 1], {name: '(0.5,1)', size: 2, color: 'black', label: {autoPosition: false, offset: [10, 5]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y12a-3e-q3",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "For the parabola \\( y = x^2 - 4x - 12 \\), complete the following analysis steps.",
    "t": "Systematic curve sketching with the derivative",
    "subQuestions": [
      {
        "id": "y12a-3e-q3a",
        "type": "multiple_choice",
        "question": "a) Find the \\( x \\)-intercepts of the parabola. (If there are multiple values, list them in ascending order, separated by a comma.)",
        "a": "-2,6",
        "opts": [
          "\\( x = -3, 4 \\)",
          "\\( x = -6, 2 \\)",
          "\\( x = -2, 6 \\)",
          "\\( x = 2, 6 \\)"
        ],
        "options": [
          {
            "text": "\\( x = -3, 4 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( x = -6, 2 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( x = -2, 6 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( x = 2, 6 \\)",
            "imageUrl": ""
          }
        ],
        "answer": "2",
        "answerStr": "2",
        "solutionSteps": [
          {
            "explanation": "Set \\( y = 0 \\) to find the x-intercepts.",
            "workingOut": "\\begin{aligned} x^2 - 4x - 12 &= 0 \\end{aligned}"
          },
          {
            "explanation": "Factorize the quadratic.",
            "workingOut": "\\begin{aligned} (x - 6)(x + 2) &= 0 \\end{aligned}"
          },
          {
            "explanation": "Solve for \\( x \\).",
            "workingOut": "\\begin{aligned} x = 6 \\text{ or } x = -2 \\end{aligned}"
          }
        ]
      },
      {
        "id": "y12a-3e-q3b",
        "type": "multiple_choice",
        "question": "b) By putting \\( x = 0 \\, \\), find the \\( y \\)-intercept.",
        "a": "-12",
        "opts": [
          "\\( 0 \\)",
          "\\( -4 \\)",
          "\\( 12 \\)",
          "\\( -12 \\)"
        ],
        "options": [
          {
            "text": "\\( 0 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( -4 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( 12 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( -12 \\)",
            "imageUrl": ""
          }
        ],
        "answer": "3",
        "answerStr": "3",
        "solutionSteps": [
          {
            "explanation": "Substitute \\( x = 0 \\) into the equation.",
            "workingOut": "\\begin{aligned} y(0) &= 0^2 - 4(0) - 12 \\\\ &= -12 \\end{aligned}"
          }
        ]
      },
      {
        "id": "y12a-3e-q3c",
        "type": "multiple_choice",
        "question": "c) Solve \\( \\frac{dy}{dx} = 0 \\) and hence find the coordinates of the stationary point.",
        "a": "(2,-16)",
        "opts": [
          "\\( (2, -8) \\)",
          "\\( (2, -16) \\)",
          "\\( (-2, 0) \\)",
          "\\( (4, -12) \\)"
        ],
        "options": [
          {
            "text": "\\( (2, -8) \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( (2, -16) \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( (-2, 0) \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( (4, -12) \\)",
            "imageUrl": ""
          }
        ],
        "answer": "1",
        "answerStr": "1",
        "solutionSteps": [
          {
            "explanation": "Find the derivative \\( \\frac{dy}{dx} \\).",
            "workingOut": "\\begin{aligned} \\frac{dy}{dx} &= 2x - 4 \\end{aligned}"
          },
          {
            "explanation": "Set \\( \\frac{dy}{dx} = 0 \\) and solve for \\( x \\).",
            "workingOut": "\\begin{aligned} 2x - 4 &= 0 \\\\ 2x &= 4 \\implies x = 2 \\end{aligned}"
          },
          {
            "explanation": "Find the y-coordinate.",
            "workingOut": "\\begin{aligned} y(2) &= 2^2 - 4(2) - 12 \\\\ &= 4 - 8 - 12 = -16 \\end{aligned} \\\\ \\implies (2, -16)"
          }
        ]
      },
      {
        "id": "y12a-3e-q3d",
        "type": "multiple_choice",
        "question": "d) By examining the sign of \\( \\frac{d^2y}{dx^2} \\), state whether the stationary point is a maximum or a minimum.",
        "a": "minimum",
        "opts": [
          "point of inflection",
          "minimum",
          "maximum",
          "none of the above"
        ],
        "options": [
          {
            "text": "point of inflection",
            "imageUrl": ""
          },
          {
            "text": "minimum",
            "imageUrl": ""
          },
          {
            "text": "maximum",
            "imageUrl": ""
          },
          {
            "text": "none of the above",
            "imageUrl": ""
          }
        ],
        "answer": "1",
        "answerStr": "1",
        "solutionSteps": [
          {
            "explanation": "Find the second derivative.",
            "workingOut": "\\begin{aligned} \\frac{d^2y}{dx^2} &= \\frac{d}{dx}(2x - 4) = 2 \\end{aligned}"
          },
          {
            "explanation": "Evaluate the sign of the second derivative.",
            "workingOut": "\\text{Since } \\frac{d^2y}{dx^2} = 2 > 0 \\text{ for all } x \\text{, the curve is concave up everywhere.}"
          },
          {
            "explanation": "Conclude the nature.",
            "workingOut": "\\text{Therefore, the stationary point is a minimum.}"
          }
        ]
      },
      {
        "id": "y12a-3e-q3e",
        "type": "teacher_review",
        "question": "e) Sketch the graph of the function, indicating all important features.",
        "a": "Draw a concave up parabola with vertex at (2,-16), x-intercepts at -2 and 6, and y-intercept at -12.",
        "solutionSteps": [
          {
            "explanation": "Plot the y-intercept.",
            "workingOut": "\\text{Mark the point } (0, -12) \\text{ on the y-axis.}"
          },
          {
            "explanation": "Plot the x-intercepts.",
            "workingOut": "\\text{Mark the points } (-2, 0) \\text{ and } (6, 0) \\text{ on the x-axis.}"
          },
          {
            "explanation": "Plot the turning point.",
            "workingOut": "\\text{Mark the minimum vertex at } (2, -16)."
          },
          {
            "explanation": "Draw the curve.",
            "workingOut": "\\text{Draw a smooth, concave up parabolic curve passing through all these points.}",
            "graphData": {
              "jsxGraph": {
                "width": 350,
                "height": 250,
                "boundingbox": [
                  -5,
                  6,
                  9,
                  -20
                ],
                "script": "board.suspendUpdate();\nboard.create('arrow', [[-5, 0], [9, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-18], [0,4]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [7.5, -1, 'x'], {fontSize: 14});\nboard.create('text', [-1, 3, 'y'], {fontSize: 14});\nvar f = function(x) { return x*x - 4*x - 12; };\nboard.create('functiongraph', [f, -5, 9], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [2, -16], {name: '(2,-16)', size: 3, color: 'red', label: {autoPosition: false, offset: [10, -10]}});\nboard.create('point', [-2, 0], {name: '-2', size: 2, color: 'black', label: {autoPosition: false, offset: [-10, 10]}});\nboard.create('point', [6, 0], {name: '6', size: 2, color: 'black', label: {autoPosition: false, offset: [10, 10]}});\nboard.create('point', [0, -12], {name: '-12', size: 2, color: 'black', label: {autoPosition: false, offset: [-25, 0]}});\nboard.unsuspendUpdate();"
              }
            }
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-3e-q4",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Sketch the following quadratic graphs, indicating all intercepts and turning points.",
    "t": "Systematic curve sketching with the derivative",
    "subQuestions": [
      {
        "id": "y12a-3e-q4a",
        "type": "teacher_review",
        "question": "a) Sketch the graph of \\( y = x^2 - 6x \\).",
        "a": "A concave up parabola with vertex at (3,-9), passing through (0,0) and (6,0).",
        "solutionSteps": [
          {
            "explanation": "Find the intercepts.",
            "workingOut": "\\text{y-intercept: } y(0) = 0 \\\\ \\text{x-intercepts: } x^2 - 6x = 0 \\implies x(x - 6) = 0 \\implies x = 0, 6"
          },
          {
            "explanation": "Find the turning point.",
            "workingOut": "\\text{y'} = 2x - 6 = 0 \\implies x = 3 \\\\ y(3) = 9 - 18 = -9 \\implies \\text{Min at } (3, -9)"
          },
          {
            "explanation": "Sketch the curve.",
            "workingOut": "\\text{Plot the vertex } (3, -9) \\text{ and intercepts } (0,0), (6,0) \\text{. Draw a concave up parabola.}",
            "graphData": {
              "jsxGraph": {
                "width": 350,
                "height": 250,
                "boundingbox": [
                  -3,
                  5,
                  9,
                  -11
                ],
                "script": "board.suspendUpdate();\nboard.create('arrow', [[-3, 0], [9, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-10], [0,4]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [7.5, -1, 'x'], {fontSize: 14});\nboard.create('text', [-1, 3.5, 'y'], {fontSize: 14});\nvar f = function(x) { return x*x - 6*x; };\nboard.create('functiongraph', [f, -3, 9], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [3, -9], {name: '(3,-9)', size: 3, color: 'red', label: {autoPosition: false, offset: [10, -10]}});\nboard.create('point', [0, 0], {name: '0', size: 2, color: 'black', label: {autoPosition: false, offset: [-10, 10]}});\nboard.create('point', [6, 0], {name: '6', size: 2, color: 'black', label: {autoPosition: false, offset: [10, 10]}});\nboard.unsuspendUpdate();"
              }
            }
          }
        ]
      },
      {
        "id": "y12a-3e-q4b",
        "type": "teacher_review",
        "question": "b) Sketch the graph of \\( y = 8 - 2x - x^2 \\).",
        "a": "A concave down parabola with vertex at (-1,9), passing through (-4,0), (2,0), and (0,8).",
        "solutionSteps": [
          {
            "explanation": "Find the intercepts.",
            "workingOut": "\\text{y-intercept: } y(0) = 8 \\\\ \\text{x-intercepts: } 8 - 2x - x^2 = 0 \\implies -(x + 4)(x - 2) = 0 \\implies x = -4, 2"
          },
          {
            "explanation": "Find the turning point.",
            "workingOut": "\\text{y'} = -2 - 2x = 0 \\implies x = -1 \\\\ y(-1) = 8 - 2(-1) - (-1)^2 = 8 + 2 - 1 = 9 \\implies \\text{Max at } (-1, 9)"
          },
          {
            "explanation": "Sketch the curve.",
            "workingOut": "\\text{Plot the vertex } (-1, 9) \\text{ and intercepts } (0,8), (-4,0), (2,0) \\text{. Draw a concave down parabola.}",
            "graphData": {
              "jsxGraph": {
                "width": 350,
                "height": 250,
                "boundingbox": [
                  -6,
                  12,
                  4,
                  -4
                ],
                "script": "board.suspendUpdate();\nboard.create('arrow', [[-6, 0], [4, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3], [0,11]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [3.2, -1, 'x'], {fontSize: 14});\nboard.create('text', [-1, 10.5, 'y'], {fontSize: 14});\nvar f = function(x) { return 8 - 2*x - x*x; };\nboard.create('functiongraph', [f, -6, 4], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [-1, 9], {name: '(-1,9)', size: 3, color: 'red', label: {autoPosition: false, offset: [-15, 15]}});\nboard.create('point', [-4, 0], {name: '-4', size: 2, color: 'black', label: {autoPosition: false, offset: [-15, -15]}});\nboard.create('point', [2, 0], {name: '2', size: 2, color: 'black', label: {autoPosition: false, offset: [10, -15]}});\nboard.create('point', [0, 8], {name: '8', size: 2, color: 'black', label: {autoPosition: false, offset: [10, 10]}});\nboard.unsuspendUpdate();"
              }
            }
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-3e-q5",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "For the function \\( y = 12x - x^3 \\), perform a complete calculus analysis to sketch its graph.",
    "t": "Systematic curve sketching with the derivative",
    "subQuestions": [
      {
        "id": "y12a-3e-q5a",
        "type": "multiple_choice",
        "question": "a) Show that \\( y = 12x - x^3 \\) is an odd function. What symmetry does its graph display?",
        "a": "f(-x) = 12(-x) - (-x)^3 = -12x + x^3 = -f(x), so the function is odd. The graph displays rotational point symmetry of 180 degrees about the origin.",
        "opts": [
          "It is odd because \\( f(-x) = f(x) \\). The graph displays line symmetry about the y-axis.",
          "It is odd because \\( f(-x) = -f(x) \\). The graph displays line symmetry about the x-axis.",
          "It is odd because \\( f(-x) = f(x) \\). The graph displays rotational point symmetry about the origin.",
          "It is odd because \\( f(-x) = -f(x) \\). The graph displays rotational point symmetry of 180 degrees about the origin."
        ],
        "options": [
          {
            "text": "It is odd because \\( f(-x) = f(x) \\). The graph displays line symmetry about the y-axis.",
            "imageUrl": ""
          },
          {
            "text": "It is odd because \\( f(-x) = -f(x) \\). The graph displays line symmetry about the x-axis.",
            "imageUrl": ""
          },
          {
            "text": "It is odd because \\( f(-x) = f(x) \\). The graph displays rotational point symmetry about the origin.",
            "imageUrl": ""
          },
          {
            "text": "It is odd because \\( f(-x) = -f(x) \\). The graph displays rotational point symmetry of 180 degrees about the origin.",
            "imageUrl": ""
          }
        ],
        "answer": "3",
        "answerStr": "3",
        "solutionSteps": [
          {
            "explanation": "Substitute \\( -x \\) into the function to check for parity.",
            "workingOut": "\\begin{aligned} f(-x) &= 12(-x) - (-x)^3 \\\\ &= -12x - (-x^3) \\\\ &= -12x + x^3 \\end{aligned}"
          },
          {
            "explanation": "Factor out the negative sign.",
            "workingOut": "\\begin{aligned} -12x + x^3 &= -(12x - x^3) \\\\ &= -f(x) \\end{aligned}"
          },
          {
            "explanation": "Conclude the symmetry.",
            "workingOut": "\\text{Since } f(-x) = -f(x) \\text{, the function is odd. Odd functions have rotational point symmetry of } 180^{\\circ} \\text{ about the origin.}"
          }
        ]
      },
      {
        "id": "y12a-3e-q5b",
        "type": "multiple_choice",
        "question": "b) Which of the following correctly gives the first and second derivatives of \\( y = 12x - x^3 \\)?",
        "a": "y' = 12 - 3x^2 = 3(4-x^2), and y'' = d/dx(12-3x^2) = -6x.",
        "opts": [
          "\\( y' = 3(4 - x^2) \\) and \\( y'' = -6x \\)",
          "\\( y' = 3(x^2 - 4) \\) and \\( y'' = 6x \\)",
          "\\( y' = 12 - 3x^2 \\) and \\( y'' = -3x \\)",
          "\\( y' = 3(4 - x^2) \\) and \\( y'' = 6x \\)"
        ],
        "options": [
          {
            "text": "\\( y' = 3(4 - x^2) \\) and \\( y'' = -6x \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( y' = 3(x^2 - 4) \\) and \\( y'' = 6x \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( y' = 12 - 3x^2 \\) and \\( y'' = -3x \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( y' = 3(4 - x^2) \\) and \\( y'' = 6x \\)",
            "imageUrl": ""
          }
        ],
        "answer": "0",
        "answerStr": "0",
        "solutionSteps": [
          {
            "explanation": "Differentiate \\( y \\) to find \\( y' \\).",
            "workingOut": "\\begin{aligned} y' &= \\frac{d}{dx}(12x - x^3) \\\\ &= 12 - 3x^2 \\end{aligned}"
          },
          {
            "explanation": "Factor the first derivative.",
            "workingOut": "\\begin{aligned} 12 - 3x^2 &= 3(4 - x^2) \\end{aligned}"
          },
          {
            "explanation": "Differentiate \\( y' \\) to find \\( y'' \\).",
            "workingOut": "\\begin{aligned} y'' &= \\frac{d}{dx}(12 - 3x^2) \\\\ &= -6x \\end{aligned}"
          }
        ]
      },
      {
        "id": "y12a-3e-q5c",
        "type": "multiple_choice",
        "question": "c) Find the coordinates of the stationary points and determine their nature. (Format: '(-2,-16) is a minimum, (2,16) is a maximum')",
        "a": "(-2,-16) is a minimum, (2,16) is a maximum",
        "opts": [
          "\\( (-2, 16) \\) is a minimum, \\( (2, -16) \\) is a maximum",
          "\\( (0, 0) \\) is a minimum, \\( (2, 16) \\) is a maximum",
          "\\( (-2, -16) \\) is a minimum, \\( (2, 16) \\) is a maximum",
          "\\( (-2, -16) \\) is a maximum, \\( (2, 16) \\) is a minimum"
        ],
        "options": [
          {
            "text": "\\( (-2, 16) \\) is a minimum, \\( (2, -16) \\) is a maximum",
            "imageUrl": ""
          },
          {
            "text": "\\( (0, 0) \\) is a minimum, \\( (2, 16) \\) is a maximum",
            "imageUrl": ""
          },
          {
            "text": "\\( (-2, -16) \\) is a minimum, \\( (2, 16) \\) is a maximum",
            "imageUrl": ""
          },
          {
            "text": "\\( (-2, -16) \\) is a maximum, \\( (2, 16) \\) is a minimum",
            "imageUrl": ""
          }
        ],
        "answer": "2",
        "answerStr": "2",
        "solutionSteps": [
          {
            "explanation": "Set \\( y' = 0 \\) to find the stationary points.",
            "workingOut": "\\begin{aligned} 3(4 - x^2) &= 0 \\\\ 4 - x^2 &= 0 \\\\ x^2 &= 4 \\implies x = 2, -2 \\end{aligned}"
          },
          {
            "explanation": "Find the y-coordinates.",
            "workingOut": "\\begin{aligned} y(2) &= 12(2) - (2)^3 = 24 - 8 = 16 \\\\ y(-2) &= 12(-2) - (-2)^3 = -24 - (-8) = -16 \\end{aligned} \\\\ \\implies \\text{Points are } (2, 16) \\text{ and } (-2, -16)"
          },
          {
            "explanation": "Determine the nature using \\( y'' = -6x \\).",
            "workingOut": "\\begin{aligned} y''(2) &= -6(2) = -12 < 0 \\implies (2, 16) \\text{ is a maximum} \\\\ y''(-2) &= -6(-2) = 12 > 0 \\implies (-2, -16) \\text{ is a minimum} \\end{aligned}"
          }
        ]
      },
      {
        "id": "y12a-3e-q5d",
        "type": "multiple_choice",
        "question": "d) Why is \\( x = 0 \\) a point of inflection?",
        "a": "y'' = 0 at x = 0. For x < 0, y'' > 0 (concave up). For x > 0, y'' < 0 (concave down). Since the sign of y'' changes, (0,0) is a point of inflection.",
        "opts": [
          "Because \\( y = 0 \\) at \\( x = 0 \\).",
          "Because \\( y' = 0 \\) at \\( x = 0 \\) and the sign of \\( y' \\) changes across it.",
          "Because \\( y'' = 0 \\) at \\( x = 0 \\) and the sign of \\( y'' \\) changes across it.",
          "Because \\( y'' = 0 \\) at \\( x = 0 \\) and \\( y'' \\) remains positive on both sides."
        ],
        "options": [
          {
            "text": "Because \\( y = 0 \\) at \\( x = 0 \\).",
            "imageUrl": ""
          },
          {
            "text": "Because \\( y' = 0 \\) at \\( x = 0 \\) and the sign of \\( y' \\) changes across it.",
            "imageUrl": ""
          },
          {
            "text": "Because \\( y'' = 0 \\) at \\( x = 0 \\) and the sign of \\( y'' \\) changes across it.",
            "imageUrl": ""
          },
          {
            "text": "Because \\( y'' = 0 \\) at \\( x = 0 \\) and \\( y'' \\) remains positive on both sides.",
            "imageUrl": ""
          }
        ],
        "answer": "2",
        "answerStr": "2",
        "solutionSteps": [
          {
            "explanation": "Check if the second derivative is zero.",
            "workingOut": "\\begin{aligned} y''(0) &= -6(0) = 0 \\end{aligned}"
          },
          {
            "explanation": "Test values around \\( x = 0 \\) to check for a change in concavity.",
            "workingOut": "\\begin{aligned} \\text{For } x < 0 \\; (\\text{e.g., } x = -1): y''(-1) &= -6(-1) = 6 > 0 \\; (\\text{Concave up}) \\\\ \\text{For } x > 0 \\; (\\text{e.g., } x = 1): y''(1) &= -6(1) = -6 < 0 \\; (\\text{Concave down}) \\end{aligned}"
          },
          {
            "explanation": "Conclude.",
            "workingOut": "\\text{Since } y'' \\text{ changes sign across } x = 0 \\text{, it is a point of inflection.}"
          }
        ]
      },
      {
        "id": "y12a-3e-q5e",
        "type": "multiple_choice",
        "question": "e) By substituting into the gradient function \\( y' \\), find the gradient at the inflection point.",
        "a": "12",
        "opts": [
          "\\( 4 \\)",
          "\\( 12 \\)",
          "\\( -12 \\)",
          "\\( 0 \\)"
        ],
        "options": [
          {
            "text": "\\( 4 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( 12 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( -12 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( 0 \\)",
            "imageUrl": ""
          }
        ],
        "answer": "1",
        "answerStr": "1",
        "solutionSteps": [
          {
            "explanation": "Substitute the x-coordinate of the inflection point into the gradient function.",
            "workingOut": "\\begin{aligned} y'(x) &= 12 - 3x^2 \\\\ y'(0) &= 12 - 3(0)^2 = 12 \\end{aligned}"
          }
        ]
      },
      {
        "id": "y12a-3e-q5f",
        "type": "teacher_review",
        "question": "f) Sketch the graph of the function, indicating all important features.",
        "a": "Cubic curve with minimum at (-2,-16), maximum at (2,16), inflection at (0,0), and x-intercepts at 0, \\pm 2\\sqrt{3}.",
        "solutionSteps": [
          {
            "explanation": "Plot the inflection/origin.",
            "workingOut": "\\text{Mark the origin } (0, 0) \\text{ which is the inflection point.}"
          },
          {
            "explanation": "Plot the turning points.",
            "workingOut": "\\text{Mark the minimum at } (-2, -16) \\text{ and the maximum at } (2, 16)."
          },
          {
            "explanation": "Draw the curve.",
            "workingOut": "\\text{Draw a smooth curve through the points. Since it's an odd cubic with a negative leading coefficient, it comes from } +\\infty \\text{ in the 2nd quadrant, goes down to the minimum, passes through the origin, goes up to the maximum, and goes down to } -\\infty \\text{ in the 4th quadrant.}",
            "graphData": {
              "jsxGraph": {
                "width": 350,
                "height": 250,
                "boundingbox": [
                  -5,
                  25,
                  5,
                  -25
                ],
                "script": "board.suspendUpdate();\nboard.create('arrow', [[-5, 0], [5, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-22], [0,22]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.3, -2, 'x'], {fontSize: 14});\nboard.create('text', [-0.5, 20, 'y'], {fontSize: 14});\nvar f = function(x) { return 12*x - x*x*x; };\nboard.create('functiongraph', [f, -5, 5], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [-2, -16], {name: 'Min(-2,-16)', size: 3, color: 'red', label: {autoPosition: false, offset: [-35, -15]}});\nboard.create('point', [2, 16], {name: 'Max(2,16)', size: 3, color: 'red', label: {autoPosition: false, offset: [10, 10]}});\nboard.create('point', [0, 0], {name: '(0,0)', size: 3, color: 'red', label: {autoPosition: false, offset: [10, 5]}});\nboard.unsuspendUpdate();"
              }
            }
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-3e-q6",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "For the curve \\( f(x) = 2x^3 - 9x^2 + 12 \\), perform a complete calculus analysis to sketch its graph.",
    "t": "Systematic curve sketching with the derivative",
    "subQuestions": [
      {
        "id": "y12a-3e-q6a",
        "type": "multiple_choice",
        "question": "a) Which of the following correctly gives the first and second derivatives of \\( f(x) = 2x^3 - 9x^2 + 12 \\)?",
        "a": "f'(x) = 6x^2 - 18x = 6x(x-3), and f''(x) = 12x - 18 = 6(2x-3).",
        "opts": [
          "\\( f'(x) = 3x(2x - 3) \\) and \\( f''(x) = 6(2x - 3) \\)",
          "\\( f'(x) = 6x(x - 3) \\) and \\( f''(x) = 6(2x - 3) \\)",
          "\\( f'(x) = 6x(x + 3) \\) and \\( f''(x) = 6(2x + 3) \\)",
          "\\( f'(x) = 6x(x - 3) \\) and \\( f''(x) = 12x - 9 \\)"
        ],
        "options": [
          {
            "text": "\\( f'(x) = 3x(2x - 3) \\) and \\( f''(x) = 6(2x - 3) \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( f'(x) = 6x(x - 3) \\) and \\( f''(x) = 6(2x - 3) \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( f'(x) = 6x(x + 3) \\) and \\( f''(x) = 6(2x + 3) \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( f'(x) = 6x(x - 3) \\) and \\( f''(x) = 12x - 9 \\)",
            "imageUrl": ""
          }
        ],
        "answer": "1",
        "answerStr": "1",
        "solutionSteps": [
          {
            "explanation": "Differentiate \\( f(x) \\) to find \\( f'(x) \\).",
            "workingOut": "\\begin{aligned} f'(x) &= 3(2)x^2 - 2(9)x \\\\ &= 6x^2 - 18x \\\\ &= 6x(x - 3) \\end{aligned}"
          },
          {
            "explanation": "Differentiate \\( f'(x) \\) to find \\( f''(x) \\).",
            "workingOut": "\\begin{aligned} f''(x) &= 12x - 18 \\\\ &= 6(2x - 3) \\end{aligned}"
          }
        ]
      },
      {
        "id": "y12a-3e-q6b",
        "type": "multiple_choice",
        "question": "b) Find the coordinates of the stationary points and determine their nature. (Format: '(0,12) is a maximum, (3,-15) is a minimum')",
        "a": "(0,12) is a maximum, (3,-15) is a minimum",
        "opts": [
          "\\( (0, 12) \\) is a maximum, \\( (3, -15) \\) is a minimum",
          "\\( (0, -12) \\) is a maximum, \\( (3, 15) \\) is a minimum",
          "\\( (0, 12) \\) is a maximum, \\( (3, 15) \\) is a minimum",
          "\\( (0, 12) \\) is a minimum, \\( (3, -15) \\) is a maximum"
        ],
        "options": [
          {
            "text": "\\( (0, 12) \\) is a maximum, \\( (3, -15) \\) is a minimum",
            "imageUrl": ""
          },
          {
            "text": "\\( (0, -12) \\) is a maximum, \\( (3, 15) \\) is a minimum",
            "imageUrl": ""
          },
          {
            "text": "\\( (0, 12) \\) is a maximum, \\( (3, 15) \\) is a minimum",
            "imageUrl": ""
          },
          {
            "text": "\\( (0, 12) \\) is a minimum, \\( (3, -15) \\) is a maximum",
            "imageUrl": ""
          }
        ],
        "answer": "0",
        "answerStr": "0",
        "solutionSteps": [
          {
            "explanation": "Set \\( f'(x) = 0 \\) to find the stationary points.",
            "workingOut": "\\begin{aligned} 6x(x - 3) &= 0 \\implies x = 0, 3 \\end{aligned}"
          },
          {
            "explanation": "Find the y-coordinates.",
            "workingOut": "\\begin{aligned} f(0) &= 2(0)^3 - 9(0)^2 + 12 = 12 \\\\ f(3) &= 2(27) - 9(9) + 12 = 54 - 81 + 12 = -15 \\end{aligned} \\\\ \\implies \\text{Points are } (0, 12) \\text{ and } (3, -15)"
          },
          {
            "explanation": "Determine the nature using \\( f''(x) = 12x - 18 \\).",
            "workingOut": "\\begin{aligned} f''(0) &= -18 < 0 \\implies (0, 12) \\text{ is a maximum} \\\\ f''(3) &= 12(3) - 18 = 36 - 18 = 18 > 0 \\implies (3, -15) \\text{ is a minimum} \\end{aligned}"
          }
        ]
      },
      {
        "id": "y12a-3e-q6c",
        "type": "multiple_choice",
        "question": "c) Explain why there is a point of inflection at \\( x = 1.5 \\), and find the gradient at the inflection point.",
        "a": "-13.5",
        "opts": [
          "Since \\( f''(1.5) = 0 \\) and concavity changes, it is an inflection point with gradient \\( -13.5 \\).",
          "Since \\( f''(1.5) = 0 \\) and concavity changes, it is an inflection point with gradient \\( 13.5 \\).",
          "Since \\( f'(1.5) = 0 \\), it is a stationary point with gradient \\( 0 \\).",
          "Since \\( f''(1.5) = 0 \\) and concavity does not change, it is not an inflection point."
        ],
        "options": [
          {
            "text": "Since \\( f''(1.5) = 0 \\) and concavity changes, it is an inflection point with gradient \\( -13.5 \\).",
            "imageUrl": ""
          },
          {
            "text": "Since \\( f''(1.5) = 0 \\) and concavity changes, it is an inflection point with gradient \\( 13.5 \\).",
            "imageUrl": ""
          },
          {
            "text": "Since \\( f'(1.5) = 0 \\), it is a stationary point with gradient \\( 0 \\).",
            "imageUrl": ""
          },
          {
            "text": "Since \\( f''(1.5) = 0 \\) and concavity does not change, it is not an inflection point.",
            "imageUrl": ""
          }
        ],
        "answer": "0",
        "answerStr": "0",
        "solutionSteps": [
          {
            "explanation": "Evaluate the second derivative at \\( x = 1.5 \\).",
            "workingOut": "\\begin{aligned} f''(1.5) &= 6(2(1.5) - 3) = 6(3 - 3) = 0 \\end{aligned}"
          },
          {
            "explanation": "Verify the change in concavity.",
            "workingOut": "\\begin{aligned} \\text{For } x < 1.5, f''(x) < 0 \\text{ (concave down).} \\\\ \\text{For } x > 1.5, f''(x) > 0 \\text{ (concave up).} \\\\ \\implies \\text{Concavity changes, so it is an inflection point.} \\end{aligned}"
          },
          {
            "explanation": "Find the gradient at \\( x = 1.5 \\).",
            "workingOut": "\\begin{aligned} f'(1.5) &= 6(1.5)^2 - 18(1.5) \\\\ &= 6(2.25) - 27 \\\\ &= 13.5 - 27 = -13.5 \\end{aligned}"
          }
        ]
      },
      {
        "id": "y12a-3e-q6d",
        "type": "teacher_review",
        "question": "d) Sketch the graph of \\( f(x) \\), indicating all important features.",
        "a": "Cubic curve with local maximum at (0,12), local minimum at (3,-15), and point of inflection at (1.5, -1.5).",
        "solutionSteps": [
          {
            "explanation": "Plot the turning points.",
            "workingOut": "\\text{Mark the maximum at } (0, 12) \\text{ and the minimum at } (3, -15)."
          },
          {
            "explanation": "Plot the point of inflection.",
            "workingOut": "\\text{Mark the inflection point at } (1.5, -1.5)."
          },
          {
            "explanation": "Draw the curve.",
            "workingOut": "\\text{Draw a smooth cubic curve that comes from } -\\infty \\text{, reaches the maximum on the y-axis, passes through the inflection point, hits the minimum, and goes off to } +\\infty.",
            "graphData": {
              "jsxGraph": {
                "width": 350,
                "height": 250,
                "boundingbox": [
                  -3,
                  20,
                  5,
                  -22
                ],
                "script": "board.suspendUpdate();\nboard.create('arrow', [[-3, 0], [5, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-20], [0,18]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.2, -1.5, 'x'], {fontSize: 14});\nboard.create('text', [-0.5, 16, 'y'], {fontSize: 14});\nvar f = function(x) { return 2*x*x*x - 9*x*x + 12; };\nboard.create('functiongraph', [f, -3, 5], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [0, 12], {name: 'Max(0,12)', size: 3, color: 'red', label: {autoPosition: false, offset: [10, 10]}});\nboard.create('point', [3, -15], {name: 'Min(3,-15)', size: 3, color: 'red', label: {autoPosition: false, offset: [10, -10]}});\nboard.create('point', [1.5, -1.5], {name: 'Inflection(1.5,-1.5)', size: 3, color: 'red', label: {autoPosition: false, offset: [10, 5]}});\nboard.unsuspendUpdate();"
              }
            }
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-3e-q7",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find derivatives, stationary points, inflection points, and sketch the following functions.",
    "t": "Systematic curve sketching with the derivative",
    "subQuestions": [
      {
        "id": "y12a-3e-q7a",
        "type": "multiple_choice",
        "question": "a) Which of the following correctly summarizes the key features of \\( y = x(x - 3)^2 \\)?",
        "a": "y' = 3(x-1)(x-3), y'' = 6(x-2). Local maximum at (1,4), local minimum at (3,0). Point of inflection at (2,2). Intercepts at (0,0) and (3,0).",
        "opts": [
          "Local maximum at (3,0), local minimum at (1,4). Point of inflection at (2,2). Intercepts at (0,0) and (3,0).",
          "Local maximum at (1,4), local minimum at (3,0). Point of inflection at (2,2). Intercepts at (0,0) and (3,0).",
          "Local maximum at (1,4), local minimum at (2,2). Point of inflection at (3,0). Intercepts at (0,0) and (3,0).",
          "Local maximum at (1,4), local minimum at (3,0). Point of inflection at (0,0). Intercepts at (2,2) and (3,0)."
        ],
        "options": [
          {
            "text": "Local maximum at (3,0), local minimum at (1,4). Point of inflection at (2,2). Intercepts at (0,0) and (3,0).",
            "imageUrl": ""
          },
          {
            "text": "Local maximum at (1,4), local minimum at (3,0). Point of inflection at (2,2). Intercepts at (0,0) and (3,0).",
            "imageUrl": ""
          },
          {
            "text": "Local maximum at (1,4), local minimum at (2,2). Point of inflection at (3,0). Intercepts at (0,0) and (3,0).",
            "imageUrl": ""
          },
          {
            "text": "Local maximum at (1,4), local minimum at (3,0). Point of inflection at (0,0). Intercepts at (2,2) and (3,0).",
            "imageUrl": ""
          }
        ],
        "answer": "1",
        "answerStr": "1",
        "solutionSteps": [
          {
            "explanation": "Find intercepts.",
            "workingOut": "\\text{y-intercept: } y(0) = 0 \\\\ \\text{x-intercepts: } x(x-3)^2 = 0 \\implies x=0, 3"
          },
          {
            "explanation": "Find stationary points.",
            "workingOut": "y = x(x^2 - 6x + 9) = x^3 - 6x^2 + 9x \\\\ y' = 3x^2 - 12x + 9 = 3(x-1)(x-3) = 0 \\implies x=1, 3 \\\\ y(1)=4 \\implies (1,4) \\text{ (Max)} \\\\ y(3)=0 \\implies (3,0) \\text{ (Min)}"
          },
          {
            "explanation": "Find inflection point.",
            "workingOut": "y'' = 6x - 12 = 6(x-2) = 0 \\implies x=2 \\\\ y(2) = 2(-1)^2 = 2 \\implies (2,2)"
          }
        ]
      },
      {
        "id": "y12a-3e-q7a_sketch",
        "type": "teacher_review",
        "question": "Sketch the graph of \\( y = x(x - 3)^2 \\).",
        "a": "Sketch the cubic curve.",
        "solutionSteps": [
          {
            "explanation": "Plot key points and draw the curve.",
            "workingOut": "\\text{Plot intercepts } (0,0) \\text{ and } (3,0) \\text{. Plot max } (1,4) \\text{ and min } (3,0) \\text{. Draw a positive cubic curve passing through them.}",
            "graphData": {
              "jsxGraph": {
                "width": 350,
                "height": 250,
                "boundingbox": [
                  -2,
                  6,
                  5,
                  -3
                ],
                "script": "board.suspendUpdate();\nboard.create('arrow', [[-2, 0], [5, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-2], [0,5.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.2, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.5, 5, 'y'], {fontSize: 14});\nvar f = function(x) { return x*(x-3)*(x-3); };\nboard.create('functiongraph', [f, -2, 5], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [1, 4], {name: 'Max(1,4)', size: 3, color: 'red', label: {autoPosition: false, offset: [-15, 15]}});\nboard.create('point', [3, 0], {name: 'Min(3,0)', size: 3, color: 'red', label: {autoPosition: false, offset: [10, -10]}});\nboard.create('point', [2, 2], {name: 'Inflection(2,2)', size: 3, color: 'red', label: {autoPosition: false, offset: [10, 5]}});\nboard.unsuspendUpdate();"
              }
            }
          }
        ]
      },
      {
        "id": "y12a-3e-q7b",
        "type": "multiple_choice",
        "question": "b) Which of the following correctly summarizes the key features of \\( y = x^3 - 3x^2 - 9x + 8 \\)?",
        "a": "y' = 3(x-3)(x+1), y'' = 6(x-1). Local maximum at (-1,13), local minimum at (3,-19). Point of inflection at (1,-3).",
        "opts": [
          "Local maximum at (-1,13), local minimum at (3,-19). Point of inflection at (0,8).",
          "Local maximum at (-1,13), local minimum at (3,-19). Point of inflection at (1,-3).",
          "Local maximum at (3,-19), local minimum at (-1,13). Point of inflection at (1,-3).",
          "Local maximum at (1,-3), local minimum at (3,-19). Point of inflection at (-1,13)."
        ],
        "options": [
          {
            "text": "Local maximum at (-1,13), local minimum at (3,-19). Point of inflection at (0,8).",
            "imageUrl": ""
          },
          {
            "text": "Local maximum at (-1,13), local minimum at (3,-19). Point of inflection at (1,-3).",
            "imageUrl": ""
          },
          {
            "text": "Local maximum at (3,-19), local minimum at (-1,13). Point of inflection at (1,-3).",
            "imageUrl": ""
          },
          {
            "text": "Local maximum at (1,-3), local minimum at (3,-19). Point of inflection at (-1,13).",
            "imageUrl": ""
          }
        ],
        "answer": "1",
        "answerStr": "1",
        "solutionSteps": [
          {
            "explanation": "Find stationary points.",
            "workingOut": "y' = 3x^2 - 6x - 9 = 3(x-3)(x+1) = 0 \\implies x=3, -1 \\\\ y(-1) = -1 - 3 + 9 + 8 = 13 \\implies (-1,13) \\text{ (Max)} \\\\ y(3) = 27 - 27 - 27 + 8 = -19 \\implies (3,-19) \\text{ (Min)}"
          },
          {
            "explanation": "Find inflection point.",
            "workingOut": "y'' = 6x - 6 = 6(x-1) = 0 \\implies x=1 \\\\ y(1) = 1 - 3 - 9 + 8 = -3 \\implies (1,-3)"
          }
        ]
      },
      {
        "id": "y12a-3e-q7b_sketch",
        "type": "teacher_review",
        "question": "Sketch the graph of \\( y = x^3 - 3x^2 - 9x + 8 \\).",
        "a": "Sketch the cubic curve.",
        "solutionSteps": [
          {
            "explanation": "Plot key points and draw the curve.",
            "workingOut": "\\text{Plot max } (-1,13) \\text{ and min } (3,-19) \\text{. Plot inflection } (1,-3) \\text{. Draw a positive cubic curve passing through them.}",
            "graphData": {
              "jsxGraph": {
                "width": 350,
                "height": 250,
                "boundingbox": [
                  -3,
                  20,
                  5,
                  -25
                ],
                "script": "board.suspendUpdate();\nboard.create('arrow', [[-3, 0], [5, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-23], [0,18]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.2, -1.5, 'x'], {fontSize: 14});\nboard.create('text', [-0.5, 16, 'y'], {fontSize: 14});\nvar f = function(x) { return x*x*x - 3*x*x - 9*x + 8; };\nboard.create('functiongraph', [f, -3, 5], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [-1, 13], {name: 'Max(-1,13)', size: 3, color: 'red', label: {autoPosition: false, offset: [-30, 15]}});\nboard.create('point', [3, -19], {name: 'Min(3,-19)', size: 3, color: 'red', label: {autoPosition: false, offset: [10, -10]}});\nboard.create('point', [1, -3], {name: 'Inflection(1,-3)', size: 3, color: 'red', label: {autoPosition: false, offset: [10, 5]}});\nboard.unsuspendUpdate();"
              }
            }
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-3e-q8",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "For the quartic curve \\( y = 4x^3 - x^4 + 5 \\), perform a calculus analysis to sketch its graph.",
    "t": "Systematic curve sketching with the derivative",
    "subQuestions": [
      {
        "id": "y12a-3e-q8a",
        "type": "multiple_choice",
        "question": "a) Which of the following correctly gives the first and second derivatives of \\( y = 4x^3 - x^4 + 5 \\)?",
        "a": "y' = 12x^2 - 4x^3 = 4x^2(3-x), and y'' = 24x - 12x^2 = 12x(2-x).",
        "opts": [
          "\\( y' = 4x^2(3 - x) \\) and \\( y'' = 12x(x - 2) \\)",
          "\\( y' = 12x^2 - 4x^3 \\) and \\( y'' = 24x - 6x^2 \\)",
          "\\( y' = 4x^2(3 - x) \\) and \\( y'' = 12x(2 - x) \\)",
          "\\( y' = 12x^2(1 - x) \\) and \\( y'' = 12x(2 - x) \\)"
        ],
        "options": [
          {
            "text": "\\( y' = 4x^2(3 - x) \\) and \\( y'' = 12x(x - 2) \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( y' = 12x^2 - 4x^3 \\) and \\( y'' = 24x - 6x^2 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( y' = 4x^2(3 - x) \\) and \\( y'' = 12x(2 - x) \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( y' = 12x^2(1 - x) \\) and \\( y'' = 12x(2 - x) \\)",
            "imageUrl": ""
          }
        ],
        "answer": "2",
        "answerStr": "2",
        "solutionSteps": [
          {
            "explanation": "Differentiate \\( y \\) to find \\( y' \\).",
            "workingOut": "\\begin{aligned} y' &= 12x^2 - 4x^3 \\\\ &= 4x^2(3 - x) \\end{aligned}"
          },
          {
            "explanation": "Differentiate \\( y' \\) to find \\( y'' \\).",
            "workingOut": "\\begin{aligned} y'' &= 24x - 12x^2 \\\\ &= 12x(2 - x) \\end{aligned}"
          }
        ]
      },
      {
        "id": "y12a-3e-q8b",
        "type": "multiple_choice",
        "question": "b) By solving \\( y' = 0 \\), find the coordinates of any stationary points. (List points in ascending order of x, e.g. '(0,5), (3,32)')",
        "a": "(0,5), (3,32)",
        "opts": [
          "\\( (0, 5), (3, 32) \\)",
          "\\( (0, 0), (3, 32) \\)",
          "\\( (3, 32), (4, 5) \\)",
          "\\( (0, 5), (2, 21) \\)"
        ],
        "options": [
          {
            "text": "\\( (0, 5), (3, 32) \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( (0, 0), (3, 32) \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( (3, 32), (4, 5) \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( (0, 5), (2, 21) \\)",
            "imageUrl": ""
          }
        ],
        "answer": "0",
        "answerStr": "0",
        "solutionSteps": [
          {
            "explanation": "Set \\( y' = 0 \\) to find stationary points.",
            "workingOut": "\\begin{aligned} 4x^2(3 - x) &= 0 \\implies x = 0, 3 \\end{aligned}"
          },
          {
            "explanation": "Find the corresponding y-coordinates.",
            "workingOut": "\\begin{aligned} y(0) &= 4(0)^3 - (0)^4 + 5 = 5 \\implies (0, 5) \\\\ y(3) &= 4(27) - (81) + 5 = 108 - 81 + 5 = 32 \\implies (3, 32) \\end{aligned}"
          }
        ]
      },
      {
        "id": "y12a-3e-q8c",
        "type": "multiple_choice",
        "question": "c) By examining the sign of \\( y'' \\), establish the nature of the stationary point at \\( x = 3 \\). Why does this method fail for the stationary point at \\( x = 0 \\)?",
        "a": "y''(3) = -36 < 0, so (3,32) is a local maximum. The method fails at x = 0 because y''(0) = 0, which is inconclusive.",
        "opts": [
          "\\( (3, 32) \\) is a local maximum because \\( y''(3) = -36 < 0 \\). The method fails at \\( x = 0 \\) because \\( y''(0) = 0 \\).",
          "\\( (3, 32) \\) is a local minimum because \\( y''(3) = 36 > 0 \\). The method fails at \\( x = 0 \\) because \\( y''(0) = 0 \\).",
          "\\( (3, 32) \\) is a local maximum because \\( y''(3) = -36 < 0 \\). The method fails at \\( x = 0 \\) because \\( y'(0) = 0 \\).",
          "\\( (3, 32) \\) is a point of inflection because \\( y''(3) = 0 \\)."
        ],
        "options": [
          {
            "text": "\\( (3, 32) \\) is a local maximum because \\( y''(3) = -36 < 0 \\). The method fails at \\( x = 0 \\) because \\( y''(0) = 0 \\).",
            "imageUrl": ""
          },
          {
            "text": "\\( (3, 32) \\) is a local minimum because \\( y''(3) = 36 > 0 \\). The method fails at \\( x = 0 \\) because \\( y''(0) = 0 \\).",
            "imageUrl": ""
          },
          {
            "text": "\\( (3, 32) \\) is a local maximum because \\( y''(3) = -36 < 0 \\). The method fails at \\( x = 0 \\) because \\( y'(0) = 0 \\).",
            "imageUrl": ""
          },
          {
            "text": "\\( (3, 32) \\) is a point of inflection because \\( y''(3) = 0 \\).",
            "imageUrl": ""
          }
        ],
        "answer": "0",
        "answerStr": "0",
        "solutionSteps": [
          {
            "explanation": "Evaluate the second derivative at \\( x = 3 \\).",
            "workingOut": "\\begin{aligned} y''(3) &= 12(3)(2 - 3) = 36(-1) = -36 \\end{aligned}"
          },
          {
            "explanation": "Determine the nature at \\( x = 3 \\).",
            "workingOut": "\\text{Since } y''(3) < 0 \\text{, the point } (3, 32) \\text{ is a local maximum.}"
          },
          {
            "explanation": "Evaluate the second derivative at \\( x = 0 \\).",
            "workingOut": "\\begin{aligned} y''(0) &= 12(0)(2 - 0) = 0 \\end{aligned}"
          },
          {
            "explanation": "Explain why it fails.",
            "workingOut": "\\text{The second derivative test is inconclusive when } y'' = 0. \\text{ We must use the first derivative test to determine its nature.}"
          }
        ]
      },
      {
        "id": "y12a-3e-q8d",
        "type": "multiple_choice",
        "question": "d) Use a table of test values of \\( y' \\) to show that there is a stationary point of inflection at \\( x = 0 \\).",
        "a": "For x < 0, y' > 0 (rising). At x = 0, y' = 0. For 0 < x < 3, y' > 0 (rising). Since the slope does not change sign across x = 0, (0,5) is a horizontal (stationary) point of inflection.",
        "opts": [
          "The slope is negative on both sides of \\( x = 0 \\), indicating a horizontal point of inflection.",
          "The slope is positive on both sides of \\( x = 0 \\) (\\( y' > 0 \\)), indicating it is a horizontal point of inflection.",
          "The slope changes from positive to negative, indicating a maximum.",
          "The slope changes from negative to positive, indicating a minimum."
        ],
        "options": [
          {
            "text": "The slope is negative on both sides of \\( x = 0 \\), indicating a horizontal point of inflection.",
            "imageUrl": ""
          },
          {
            "text": "The slope is positive on both sides of \\( x = 0 \\) (\\( y' > 0 \\)), indicating it is a horizontal point of inflection.",
            "imageUrl": ""
          },
          {
            "text": "The slope changes from positive to negative, indicating a maximum.",
            "imageUrl": ""
          },
          {
            "text": "The slope changes from negative to positive, indicating a minimum.",
            "imageUrl": ""
          }
        ],
        "answer": "1",
        "answerStr": "1",
        "solutionSteps": [
          {
            "explanation": "Use test values around \\( x = 0 \\) in the first derivative \\( y' = 4x^2(3 - x) \\).",
            "workingOut": "\\begin{aligned} \\text{For } x = -1: y'(-1) &= 4(-1)^2(3 - (-1)) = 4(4) = 16 > 0 \\\\ \\text{For } x = 1: y'(1) &= 4(1)^2(3 - 1) = 4(2) = 8 > 0 \\end{aligned}"
          },
          {
            "explanation": "Interpret the result.",
            "workingOut": "\\text{Since the gradient is positive before and after } x = 0 \\text{, the curve flattens out but continues to rise. Thus, } (0, 5) \\text{ is a horizontal (stationary) point of inflection.}"
          }
        ]
      },
      {
        "id": "y12a-3e-q8e",
        "type": "multiple_choice",
        "question": "e) Why is there a change in concavity at \\( x = 2 \\)?",
        "a": "y'' = 12x(2-x). For x < 2 (near 2), y'' > 0 (concave up). For x > 2, y'' < 0 (concave down). Since the sign of y'' changes, (2,21) is a point of inflection.",
        "opts": [
          "Because \\( y' = 0 \\) at \\( x = 2 \\) and changes sign across it.",
          "Because \\( y'' = 0 \\) at \\( x = 2 \\) and changes sign from negative to positive across it.",
          "Because \\( y'' > 0 \\) for all \\( x > 0 \\).",
          "Because \\( y'' = 0 \\) at \\( x = 2 \\) and changes sign from positive to negative across it."
        ],
        "options": [
          {
            "text": "Because \\( y' = 0 \\) at \\( x = 2 \\) and changes sign across it.",
            "imageUrl": ""
          },
          {
            "text": "Because \\( y'' = 0 \\) at \\( x = 2 \\) and changes sign from negative to positive across it.",
            "imageUrl": ""
          },
          {
            "text": "Because \\( y'' > 0 \\) for all \\( x > 0 \\).",
            "imageUrl": ""
          },
          {
            "text": "Because \\( y'' = 0 \\) at \\( x = 2 \\) and changes sign from positive to negative across it.",
            "imageUrl": ""
          }
        ],
        "answer": "3",
        "answerStr": "3",
        "solutionSteps": [
          {
            "explanation": "Check the second derivative at \\( x = 2 \\).",
            "workingOut": "\\begin{aligned} y''(2) &= 12(2)(2 - 2) = 0 \\end{aligned}"
          },
          {
            "explanation": "Test values around \\( x = 2 \\) in \\( y'' = 12x(2 - x) \\).",
            "workingOut": "\\begin{aligned} \\text{For } x = 1: y''(1) &= 12(1)(2 - 1) = 12 > 0 \\; (\\text{Concave up}) \\\\ \\text{For } x = 3: y''(3) &= 12(3)(2 - 3) = -36 < 0 \\; (\\text{Concave down}) \\end{aligned}"
          },
          {
            "explanation": "Conclude.",
            "workingOut": "\\text{Since } y'' \\text{ changes from positive to negative across } x = 2 \\text{, there is a change in concavity, making it a point of inflection.}"
          }
        ]
      },
      {
        "id": "y12a-3e-q8f",
        "type": "teacher_review",
        "question": "f) Sketch the graph of the function, showing all important features.",
        "a": "Quartic curve with local maximum at (3,32), horizontal point of inflection at (0,5), and non-stationary point of inflection at (2,21).",
        "solutionSteps": [
          {
            "explanation": "Plot the stationary points.",
            "workingOut": "\\text{Mark the horizontal point of inflection at } (0, 5) \\text{ and the maximum at } (3, 32)."
          },
          {
            "explanation": "Plot the non-stationary point of inflection.",
            "workingOut": "\\text{Mark the point of inflection at } (2, 21)."
          },
          {
            "explanation": "Draw the curve.",
            "workingOut": "\\text{Draw a smooth curve rising from the left, flattening at } (0, 5) \\text{, continuing to rise through } (2, 21) \\text{ to reach the peak at } (3, 32) \\text{, and then falling rapidly to the right.}",
            "graphData": {
              "jsxGraph": {
                "width": 350,
                "height": 250,
                "boundingbox": [
                  -2,
                  38,
                  5,
                  -10
                ],
                "script": "board.suspendUpdate();\nboard.create('arrow', [[-2, 0], [5, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-5], [0,35]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.2, -1.5, 'x'], {fontSize: 14});\nboard.create('text', [-0.5, 32, 'y'], {fontSize: 14});\nvar f = function(x) { return 4*x*x*x - x*x*x*x + 5; };\nboard.create('functiongraph', [f, -2, 5], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [3, 32], {name: 'Max(3,32)', size: 3, color: 'red', label: {autoPosition: false, offset: [10, 10]}});\nboard.create('point', [0, 5], {name: 'Inflection(0,5)', size: 3, color: 'red', label: {autoPosition: false, offset: [-110, -5]}});\nboard.create('point', [2, 21], {name: 'Inflection(2,21)', size: 3, color: 'red', label: {autoPosition: false, offset: [10, 5]}});\nboard.unsuspendUpdate();"
              }
            }
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-3e-q9",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Using the methods of analysis for polynomial curve sketching, find the key features of the quartic curve \\( y = 3x^4 - 16x^3 + 24x^2 + 10 \\) and sketch it.",
    "a": "Local minimum at (0,10), stationary point of inflection at (2,26), and non-stationary point of inflection at (2/3, 16.52).",
    "t": "Systematic curve sketching with the derivative",
    "subQuestions": [
      {
        "id": "y12a-3e-q9a",
        "type": "multiple_choice",
        "question": "a) Which of the following correctly summarizes the key features of \\( y = 3x^4 - 16x^3 + 24x^2 + 10 \\)?",
        "opts": [
          "Horizontal point of inflection at (0, 10), local minimum at (2, 26).",
          "Local minimum at (0, 10), local maximum at (2, 26).",
          "Local minimum at (0, 10), horizontal point of inflection at (2, 26).",
          "Local maximum at (0, 10), horizontal point of inflection at (2, 26)."
        ],
        "ans": "Local minimum at (0, 10), horizontal point of inflection at (2, 26).",
        "solutionSteps": [
          {
            "explanation": "Find the first derivative.",
            "workingOut": "\\begin{aligned} y' &= 12x^3 - 48x^2 + 48x \\\\ &= 12x(x^2 - 4x + 4) = 12x(x - 2)^2 \\end{aligned}"
          },
          {
            "explanation": "Find stationary points.",
            "workingOut": "\\text{Set } y' = 0 \\implies x = 0, 2 \\\\ y(0) = 10 \\implies (0, 10) \\\\ y(2) = 3(16) - 16(8) + 24(4) + 10 = 48 - 128 + 96 + 10 = 26 \\implies (2, 26)"
          },
          {
            "explanation": "Find the second derivative to determine nature.",
            "workingOut": "\\begin{aligned} y'' &= 36x^2 - 96x + 48 \\end{aligned}"
          },
          {
            "explanation": "Evaluate.",
            "workingOut": "\\text{At } x = 0, y''(0) = 48 > 0 \\implies (0,10) \\text{ is a local minimum.} \\\\ \\text{At } x = 2, y''(2) = 36(4) - 96(2) + 48 = 144 - 192 + 48 = 0. \\\\ \\text{Check } y': 12x(x-2)^2 \\text{ is positive for } x > 0. \\text{ The gradient does not change sign across } x=2 \\text{, so } (2,26) \\text{ is a horizontal point of inflection.}"
          }
        ],
        "options": [
          {
            "text": "Horizontal point of inflection at (0, 10), local minimum at (2, 26).",
            "imageUrl": ""
          },
          {
            "text": "Local minimum at (0, 10), local maximum at (2, 26).",
            "imageUrl": ""
          },
          {
            "text": "Local minimum at (0, 10), horizontal point of inflection at (2, 26).",
            "imageUrl": ""
          },
          {
            "text": "Local maximum at (0, 10), horizontal point of inflection at (2, 26).",
            "imageUrl": ""
          }
        ],
        "answer": "2",
        "answerStr": "2"
      },
      {
        "id": "y12a-3e-q9b",
        "type": "teacher_review",
        "question": "b) Sketch the graph of the function.",
        "a": "Sketch the quartic curve.",
        "solutionSteps": [
          {
            "explanation": "Plot stationary points.",
            "workingOut": "\\text{Mark minimum at } (0, 10) \\text{ and horizontal inflection at } (2, 26)."
          },
          {
            "explanation": "Draw the curve.",
            "workingOut": "\\text{Draw a U-shaped curve that bottoms out at } (0,10) \\text{ on the y-axis, then goes up, flattens out momentarily at } (2,26) \\text{ without dipping, and continues upwards.}",
            "graphData": {
              "jsxGraph": {
                "width": 350,
                "height": 250,
                "boundingbox": [
                  -1,
                  35,
                  4,
                  -5
                ],
                "script": "board.suspendUpdate();\nboard.create('arrow', [[-1, 0], [4, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-2], [0,32]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [3.3, -1.5, 'x'], {fontSize: 14});\nboard.create('text', [-0.5, 30, 'y'], {fontSize: 14});\nvar f = function(x) { return 3*x*x*x*x - 16*x*x*x + 24*x*x + 10; };\nboard.create('functiongraph', [f, -1, 4], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [0, 10], {name: 'Min(0,10)', size: 3, color: 'red', label: {autoPosition: false, offset: [10, -5]}});\nboard.create('point', [2, 26], {name: 'Inflection(2,26)', size: 3, color: 'red', label: {autoPosition: false, offset: [10, 10]}});\nboard.create('point', [0.67, 16.52], {name: 'Inflection(0.67, 16.52)', size: 3, color: 'red', label: {autoPosition: false, offset: [-160, 5]}});\nboard.unsuspendUpdate();"
              }
            }
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-3e-q10",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 240,
    "question": "For the rational function \\( f(x) = \\frac{2}{x^2 - 9} \\), complete the following systematic curve sketching analysis.",
    "t": "Systematic curve sketching with the derivative",
    "subQuestions": [
      {
        "id": "y12a-3e-q10a",
        "type": "multiple_choice",
        "question": "a) Which of the following correctly gives the derivative of \\( f(x) = \\frac{2}{x^2 - 9} \\)?",
        "a": "f'(x) = d/dx[2(x^2-9)^-1] = -2(x^2-9)^-2 * 2x = -4x/(x^2-9)^2.",
        "opts": [
          "\\( f'(x) = -\\frac{4x}{x^2 - 9} \\)",
          "\\( f'(x) = -\\frac{4x}{(x^2 - 9)^2} \\)",
          "\\( f'(x) = -\\frac{2x}{(x^2 - 9)^2} \\)",
          "\\( f'(x) = \\frac{4x}{(x^2 - 9)^2} \\)"
        ],
        "options": [
          {
            "text": "\\( f'(x) = -\\frac{4x}{x^2 - 9} \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( f'(x) = -\\frac{4x}{(x^2 - 9)^2} \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( f'(x) = -\\frac{2x}{(x^2 - 9)^2} \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( f'(x) = \\frac{4x}{(x^2 - 9)^2} \\)",
            "imageUrl": ""
          }
        ],
        "answer": "1",
        "answerStr": "1",
        "solutionSteps": [
          {
            "explanation": "Rewrite the function using negative exponents.",
            "workingOut": "\\begin{aligned} f(x) &= 2(x^2 - 9)^{-1} \\end{aligned}"
          },
          {
            "explanation": "Differentiate using the chain rule.",
            "workingOut": "\\begin{aligned} f'(x) &= -1 \\cdot 2(x^2 - 9)^{-2} \\cdot \\frac{d}{dx}(x^2 - 9) \\\\ &= -2(x^2 - 9)^{-2} \\cdot 2x \\\\ &= -\\frac{4x}{(x^2 - 9)^2} \\end{aligned}"
          }
        ]
      },
      {
        "id": "y12a-3e-q10b",
        "type": "multiple_choice",
        "question": "b) Show that \\( y = f(x) \\) has a stationary point at \\( x = 0 \\). Determine its nature using a slope table. (Format: '(0,-2/9) is a maximum')",
        "a": "(0,-2/9) is a maximum",
        "opts": [
          "\\( (0, -\\frac{2}{9}) \\) is a maximum",
          "\\( (0, -\\frac{2}{9}) \\) is a minimum",
          "\\( (0, \\frac{2}{9}) \\) is a maximum",
          "\\( (0, -\\frac{2}{9}) \\) is a point of inflection"
        ],
        "options": [
          {
            "text": "\\( (0, -\\frac{2}{9}) \\) is a maximum",
            "imageUrl": ""
          },
          {
            "text": "\\( (0, -\\frac{2}{9}) \\) is a minimum",
            "imageUrl": ""
          },
          {
            "text": "\\( (0, \\frac{2}{9}) \\) is a maximum",
            "imageUrl": ""
          },
          {
            "text": "\\( (0, -\\frac{2}{9}) \\) is a point of inflection",
            "imageUrl": ""
          }
        ],
        "answer": "0",
        "answerStr": "0",
        "solutionSteps": [
          {
            "explanation": "Find stationary points by setting \\( f'(x) = 0 \\).",
            "workingOut": "\\begin{aligned} -\\frac{4x}{(x^2 - 9)^2} &= 0 \\implies x = 0 \\end{aligned}"
          },
          {
            "explanation": "Find the corresponding y-coordinate.",
            "workingOut": "\\begin{aligned} f(0) &= \\frac{2}{0^2 - 9} = -\\frac{2}{9} \\implies (0, -\\frac{2}{9}) \\end{aligned}"
          },
          {
            "explanation": "Use a slope table to determine its nature.",
            "workingOut": "\\begin{aligned} \\text{For } x < 0 \\; (\\text{e.g., } x = -1): f'(-1) &= -\\frac{4(-1)}{(-1^2 - 9)^2} = \\frac{4}{64} > 0 \\; (\\text{rising}) \\\\ \\text{For } x > 0 \\; (\\text{e.g., } x = 1): f'(1) &= -\\frac{4(1)}{(1^2 - 9)^2} = -\\frac{4}{64} < 0 \\; (\\text{falling}) \\end{aligned}"
          },
          {
            "explanation": "Conclude.",
            "workingOut": "\\text{Since the gradient changes from positive to negative, the point is a local maximum.}"
          }
        ]
      },
      {
        "id": "y12a-3e-q10c",
        "type": "multiple_choice",
        "question": "c) Show that the function is even. What sort of symmetry does its graph have?",
        "a": "f(-x) = 2/((-x)^2-9) = 2/(x^2-9) = f(x), so the function is even. The graph is symmetric under reflection across the y-axis.",
        "opts": [
          "The function is even because \\( f(-x) = -f(x) \\). It is symmetric about the x-axis.",
          "The function is odd because \\( f(-x) = -f(x) \\). It has rotational point symmetry.",
          "The function is even because \\( f(-x) = f(x) \\). It is symmetric about the y-axis.",
          "The function is neither odd nor even."
        ],
        "options": [
          {
            "text": "The function is even because \\( f(-x) = -f(x) \\). It is symmetric about the x-axis.",
            "imageUrl": ""
          },
          {
            "text": "The function is odd because \\( f(-x) = -f(x) \\). It has rotational point symmetry.",
            "imageUrl": ""
          },
          {
            "text": "The function is even because \\( f(-x) = f(x) \\). It is symmetric about the y-axis.",
            "imageUrl": ""
          },
          {
            "text": "The function is neither odd nor even.",
            "imageUrl": ""
          }
        ],
        "answer": "2",
        "answerStr": "2",
        "solutionSteps": [
          {
            "explanation": "Substitute \\( -x \\) into \\( f(x) \\).",
            "workingOut": "\\begin{aligned} f(-x) &= \\frac{2}{(-x)^2 - 9} \\\\ &= \\frac{2}{x^2 - 9} \\\\ &= f(x) \\end{aligned}"
          },
          {
            "explanation": "State the symmetry.",
            "workingOut": "\\text{Since } f(-x) = f(x) \\text{, the function is even. Even functions are symmetric under reflection across the y-axis.}"
          }
        ]
      },
      {
        "id": "y12a-3e-q10d",
        "type": "multiple_choice",
        "question": "d) State the domain of the function and the equations of any vertical asymptotes. (Format: 'domain: x not equal to -3 or 3; vertical asymptotes: x = -3, x = 3')",
        "a": "domain: x not equal to -3 or 3; vertical asymptotes: x = -3, x = 3",
        "opts": [
          "domain: \\( x \\neq -3, 3 \\); vertical asymptotes: \\( x = -3, x = 3 \\)",
          "domain: \\( x > 3 \\); vertical asymptotes: \\( x = 3 \\)",
          "domain: \\( x \\neq 9 \\); vertical asymptote: \\( x = 9 \\)",
          "domain: all real \\( x \\); no vertical asymptotes"
        ],
        "options": [
          {
            "text": "domain: \\( x \\neq -3, 3 \\); vertical asymptotes: \\( x = -3, x = 3 \\)",
            "imageUrl": ""
          },
          {
            "text": "domain: \\( x > 3 \\); vertical asymptotes: \\( x = 3 \\)",
            "imageUrl": ""
          },
          {
            "text": "domain: \\( x \\neq 9 \\); vertical asymptote: \\( x = 9 \\)",
            "imageUrl": ""
          },
          {
            "text": "domain: all real \\( x \\); no vertical asymptotes",
            "imageUrl": ""
          }
        ],
        "answer": "0",
        "answerStr": "0",
        "solutionSteps": [
          {
            "explanation": "Find where the denominator is zero.",
            "workingOut": "\\begin{aligned} x^2 - 9 &= 0 \\\\ (x - 3)(x + 3) &= 0 \\implies x = 3, -3 \\end{aligned}"
          },
          {
            "explanation": "State the domain and asymptotes.",
            "workingOut": "\\text{The function is undefined at } x = 3, -3 \\text{. Therefore, the domain is all real } x \\neq -3, 3 \\text{ and the vertical asymptotes are the lines } x = 3 \\text{ and } x = -3."
          }
        ]
      },
      {
        "id": "y12a-3e-q10e",
        "type": "multiple_choice",
        "question": "e) What value does \\( f(x) \\) approach as \\( x \\to \\infty \\) and as \\( x \\to -\\infty \\)? Hence write down the equation of the horizontal asymptote.",
        "a": "y = 0",
        "opts": [
          "\\( y = 0 \\)",
          "\\( y = 2 \\)",
          "\\( y = x \\)",
          "\\( y = -\\frac{2}{9} \\)"
        ],
        "options": [
          {
            "text": "\\( y = 0 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( y = 2 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( y = x \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( y = -\\frac{2}{9} \\)",
            "imageUrl": ""
          }
        ],
        "answer": "0",
        "answerStr": "0",
        "solutionSteps": [
          {
            "explanation": "Evaluate the limit as \\( x \\to \\pm\\infty \\).",
            "workingOut": "\\begin{aligned} \\lim_{x \\to \\pm\\infty} \\frac{2}{x^2 - 9} &= 0 \\end{aligned}"
          },
          {
            "explanation": "Identify the horizontal asymptote.",
            "workingOut": "\\text{Since the function approaches 0 as } x \\text{ gets very large in either direction, the horizontal asymptote is } y = 0."
          }
        ]
      },
      {
        "id": "y12a-3e-q10f",
        "type": "teacher_review",
        "question": "f) Sketch the graph of \\( y = f(x) \\), showing all important features.",
        "a": "Three branches separated by vertical asymptotes x = -3 and x = 3, with a local maximum in the middle branch at (0, -2/9), and y = 0 as the horizontal asymptote.",
        "solutionSteps": [
          {
            "explanation": "Draw the asymptotes.",
            "workingOut": "\\text{Draw dashed vertical lines at } x = -3 \\text{ and } x = 3 \\text{, and a dashed horizontal line at } y = 0."
          },
          {
            "explanation": "Plot the turning point.",
            "workingOut": "\\text{Mark the maximum at } (0, -\\frac{2}{9})."
          },
          {
            "explanation": "Sketch the branches.",
            "workingOut": "\\text{Middle branch: A concave down U-shape peaking at } (0, -\\frac{2}{9}) \\text{ and diving down asymptomatically to } x = -3 \\text{ and } x = 3. \\\\ \\text{Outer branches: In the upper left (for } x < -3 \\text{) and upper right (for } x > 3 \\text{), hugging the asymptotes.}",
            "graphData": {
              "jsxGraph": {
                "width": 350,
                "height": 250,
                "boundingbox": [
                  -6,
                  3,
                  6,
                  -3
                ],
                "script": "board.suspendUpdate();\nboard.create('arrow', [[-6, 0], [6, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-2.5], [0,2.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [5.2, -0.3, 'x'], {fontSize: 14});\nboard.create('text', [-0.5, 2.2, 'y'], {fontSize: 14});\nvar f = function(x) { return 2 / (x*x - 9); };\nboard.create('functiongraph', [f, -6, 6], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('functiongraph', [f, -2.95, 2.95], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('functiongraph', [f, 3.05, 6], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('line', [[-3, -1], [-3, 1]], {strokeColor: 'gray', dash: 2, strokeWidth: 1});\nboard.create('line', [[3, -1], [3, 1]], {strokeColor: 'gray', dash: 2, strokeWidth: 1});\nboard.create('point', [0, -0.22], {name: 'Max(0,-2/9)', size: 3, color: 'red', label: {autoPosition: false, offset: [10, 10]}});\nboard.create('text', [-3.5, 1.5, 'x=-3'], {fontSize: 10, strokeColor: 'gray'});\nboard.create('text', [3.1, 1.5, 'x=3'], {fontSize: 10, strokeColor: 'gray'});\nboard.unsuspendUpdate();"
              }
            }
          }
        ]
      },
      {
        "id": "y12a-3e-q10g",
        "type": "multiple_choice",
        "question": "g) Use the graph to state the range of the function. (Use '<=' for inequalities, e.g. 'y <= -2/9 or y > 0')",
        "a": "y <= -2/9 or y > 0",
        "opts": [
          "\\( y < -\\frac{2}{9} \\text{ or } y \\geq 0 \\)",
          "\\( -\\frac{2}{9} \\leq y < 0 \\)",
          "All real \\( y \\)",
          "\\( y \\leq -\\frac{2}{9} \\text{ or } y > 0 \\)"
        ],
        "options": [
          {
            "text": "\\( y < -\\frac{2}{9} \\text{ or } y \\geq 0 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( -\\frac{2}{9} \\leq y < 0 \\)",
            "imageUrl": ""
          },
          {
            "text": "All real \\( y \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( y \\leq -\\frac{2}{9} \\text{ or } y > 0 \\)",
            "imageUrl": ""
          }
        ],
        "answer": "3",
        "answerStr": "3",
        "solutionSteps": [
          {
            "explanation": "Observe the sketched graph.",
            "workingOut": "\\text{The middle branch covers all values from } -\\infty \\text{ up to the maximum } y = -\\frac{2}{9}. \\text{ The outer branches cover all positive y-values above the horizontal asymptote } y = 0."
          },
          {
            "explanation": "Combine the intervals.",
            "workingOut": "\\text{Range is } y \\le -\\frac{2}{9} \\text{ or } y > 0."
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-3e-q11",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 240,
    "question": "For the rational function \\( f(x) = \\frac{2x}{x^2 - 9} \\), complete the following systematic curve sketching analysis.",
    "t": "Systematic curve sketching with the derivative",
    "subQuestions": [
      {
        "id": "y12a-3e-q11a",
        "type": "multiple_choice",
        "question": "a) Show that the derivative of \\( f(x) = \\frac{2x}{x^2 - 9} \\) is \\( f'(x) = -\\frac{2(x^2 + 9)}{(x^2 - 9)^2} \\).",
        "a": "f'(x) = (2(x^2-9) - 2x(2x))/(x^2-9)^2 = (2x^2 - 18 - 4x^2)/(x^2-9)^2 = -2(x^2+9)/(x^2-9)^2.",
        "opts": [
          "\\( f'(x) = -\\frac{2(x^2 - 9)}{(x^2 + 9)^2} \\)",
          "\\( f'(x) = \\frac{2(x^2 + 9)}{(x^2 - 9)^2} \\)",
          "\\( f'(x) = \\frac{2}{(x^2 - 9)^2} \\)",
          "\\( f'(x) = -\\frac{2(x^2 + 9)}{(x^2 - 9)^2} \\)"
        ],
        "options": [
          {
            "text": "\\( f'(x) = -\\frac{2(x^2 - 9)}{(x^2 + 9)^2} \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( f'(x) = \\frac{2(x^2 + 9)}{(x^2 - 9)^2} \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( f'(x) = \\frac{2}{(x^2 - 9)^2} \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( f'(x) = -\\frac{2(x^2 + 9)}{(x^2 - 9)^2} \\)",
            "imageUrl": ""
          }
        ],
        "answer": "3",
        "answerStr": "3",
        "solutionSteps": [
          {
            "explanation": "Use the quotient rule.",
            "workingOut": "\\begin{aligned} f'(x) &= \\frac{v u' - u v'}{v^2} \\\\ u &= 2x \\implies u' = 2 \\\\ v &= x^2 - 9 \\implies v' = 2x \\end{aligned}"
          },
          {
            "explanation": "Substitute into the formula.",
            "workingOut": "\\begin{aligned} f'(x) &= \\frac{(x^2 - 9)(2) - (2x)(2x)}{(x^2 - 9)^2} \\\\ &= \\frac{2x^2 - 18 - 4x^2}{(x^2 - 9)^2} \\\\ &= \\frac{-2x^2 - 18}{(x^2 - 9)^2} \\\\ &= -\\frac{2(x^2 + 9)}{(x^2 - 9)^2} \\end{aligned}"
          }
        ]
      },
      {
        "id": "y12a-3e-q11b",
        "type": "multiple_choice",
        "question": "b) Why does the curve \\( y = f(x) \\) have no stationary points, and why is it always decreasing?",
        "a": "Since x^2+9 > 0 and (x^2-9)^2 > 0 for all x in the domain, f'(x) = -2(x^2+9)/(x^2-9)^2 < 0. Thus, there are no turning points and the curve is always decreasing.",
        "opts": [
          "Because \\( f'(x) > 0 \\) for all \\( x \\) in the domain.",
          "Because the numerator of \\( f'(x) \\) is zero.",
          "Because \\( f'(x) < 0 \\) for all \\( x \\) in the domain.",
          "Because \\( f'(x) = 0 \\) has no real solutions, and \\( f'(x) > 0 \\)."
        ],
        "options": [
          {
            "text": "Because \\( f'(x) > 0 \\) for all \\( x \\) in the domain.",
            "imageUrl": ""
          },
          {
            "text": "Because the numerator of \\( f'(x) \\) is zero.",
            "imageUrl": ""
          },
          {
            "text": "Because \\( f'(x) < 0 \\) for all \\( x \\) in the domain.",
            "imageUrl": ""
          },
          {
            "text": "Because \\( f'(x) = 0 \\) has no real solutions, and \\( f'(x) > 0 \\).",
            "imageUrl": ""
          }
        ],
        "answer": "2",
        "answerStr": "2",
        "solutionSteps": [
          {
            "explanation": "Analyze the sign of \\( f'(x) \\).",
            "workingOut": "\\begin{aligned} f'(x) &= -\\frac{2(x^2 + 9)}{(x^2 - 9)^2} \\end{aligned}"
          },
          {
            "explanation": "Evaluate the numerator and denominator.",
            "workingOut": "\\text{For all real } x, x^2 + 9 \\ge 9 > 0. \\text{ Also, } (x^2 - 9)^2 > 0 \\text{ for all } x \\text{ in the domain.} \\\\ \\implies \\frac{2(x^2 + 9)}{(x^2 - 9)^2} \\text{ is always positive.}"
          },
          {
            "explanation": "Conclude.",
            "workingOut": "\\text{Thus, } f'(x) \\text{ is always strictly negative. The curve has no turning points and is always decreasing.}"
          }
        ]
      },
      {
        "id": "y12a-3e-q11c",
        "type": "multiple_choice",
        "question": "c) Given that the second derivative is \\( f''(x) = \\frac{4x(x^2 + 27)}{(x^2 - 9)^3} \\), show that \\( (0, 0) \\) is a point of inflection. Find the gradient of the tangent at this point.",
        "a": "-2/9",
        "opts": [
          "\\( -2 \\)",
          "\\( -\\frac{2}{9} \\)",
          "\\( 0 \\)",
          "\\( \\frac{2}{9} \\)"
        ],
        "options": [
          {
            "text": "\\( -2 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( -\\frac{2}{9} \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( 0 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( \\frac{2}{9} \\)",
            "imageUrl": ""
          }
        ],
        "answer": "1",
        "answerStr": "1",
        "solutionSteps": [
          {
            "explanation": "Verify \\( (0, 0) \\) is an inflection point.",
            "workingOut": "\\begin{aligned} f''(0) &= \\frac{4(0)(0 + 27)}{(0 - 9)^3} = 0 \\end{aligned}"
          },
          {
            "explanation": "Find the gradient at \\( x = 0 \\) using \\( f'(x) \\).",
            "workingOut": "\\begin{aligned} f'(0) &= -\\frac{2(0^2 + 9)}{(0^2 - 9)^2} = -\\frac{18}{81} = -\\frac{2}{9} \\end{aligned}"
          }
        ]
      },
      {
        "id": "y12a-3e-q11d",
        "type": "multiple_choice",
        "question": "d) State the domain of the function and the equations of any vertical asymptotes. (Format: 'domain: x not equal to -3 or 3; vertical asymptotes: x = -3, x = 3')",
        "a": "domain: x not equal to -3 or 3; vertical asymptotes: x = -3, x = 3",
        "opts": [
          "domain: \\( x \\neq -3, 3 \\); vertical asymptotes: \\( x = -3, x = 3 \\)",
          "domain: \\( x \\neq 9 \\); vertical asymptote: \\( x = 9 \\)",
          "domain: all real \\( x \\); no vertical asymptotes",
          "domain: \\( x > 3 \\); vertical asymptotes: \\( x = 3 \\)"
        ],
        "options": [
          {
            "text": "domain: \\( x \\neq -3, 3 \\); vertical asymptotes: \\( x = -3, x = 3 \\)",
            "imageUrl": ""
          },
          {
            "text": "domain: \\( x \\neq 9 \\); vertical asymptote: \\( x = 9 \\)",
            "imageUrl": ""
          },
          {
            "text": "domain: all real \\( x \\); no vertical asymptotes",
            "imageUrl": ""
          },
          {
            "text": "domain: \\( x > 3 \\); vertical asymptotes: \\( x = 3 \\)",
            "imageUrl": ""
          }
        ],
        "answer": "0",
        "answerStr": "0",
        "solutionSteps": [
          {
            "explanation": "Find where the denominator is zero.",
            "workingOut": "\\begin{aligned} x^2 - 9 &= 0 \\implies x = 3, -3 \\end{aligned}"
          },
          {
            "explanation": "State the domain and asymptotes.",
            "workingOut": "\\text{The function is undefined at } x = 3, -3 \\text{. Therefore, the domain is all real } x \\neq -3, 3 \\text{ and the vertical asymptotes are } x = -3 \\text{ and } x = 3."
          }
        ]
      },
      {
        "id": "y12a-3e-q11e",
        "type": "multiple_choice",
        "question": "e) What value does \\( f(x) \\) approach as \\( x \\to \\pm\\infty \\)? Hence write down the equation of the horizontal asymptote.",
        "a": "y = 0",
        "opts": [
          "\\( y = 0 \\)",
          "No horizontal asymptote",
          "\\( y = 2 \\)",
          "\\( y = x \\)"
        ],
        "options": [
          {
            "text": "\\( y = 0 \\)",
            "imageUrl": ""
          },
          {
            "text": "No horizontal asymptote",
            "imageUrl": ""
          },
          {
            "text": "\\( y = 2 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( y = x \\)",
            "imageUrl": ""
          }
        ],
        "answer": "0",
        "answerStr": "0",
        "solutionSteps": [
          {
            "explanation": "Evaluate the limit as \\( x \\to \\pm\\infty \\).",
            "workingOut": "\\begin{aligned} \\lim_{x \\to \\pm\\infty} \\frac{2x}{x^2 - 9} &= \\lim_{x \\to \\pm\\infty} \\frac{2/x}{1 - 9/x^2} = 0 \\end{aligned}"
          },
          {
            "explanation": "Identify the horizontal asymptote.",
            "workingOut": "\\text{The horizontal asymptote is } y = 0."
          }
        ]
      },
      {
        "id": "y12a-3e-q11f",
        "type": "multiple_choice",
        "question": "f) Which symmetry does the graph of \\( f(x) \\) display?",
        "a": "f(-x) = 2(-x)/((-x)^2-9) = -2x/(x^2-9) = -f(x), so the function is odd. The graph is symmetric under rotational symmetry of 180 degrees about the origin.",
        "opts": [
          "Line symmetry about the x-axis.",
          "Line symmetry about the y-axis.",
          "Rotational point symmetry of 180 degrees about the origin.",
          "Rotational point symmetry about (0, -3)."
        ],
        "options": [
          {
            "text": "Line symmetry about the x-axis.",
            "imageUrl": ""
          },
          {
            "text": "Line symmetry about the y-axis.",
            "imageUrl": ""
          },
          {
            "text": "Rotational point symmetry of 180 degrees about the origin.",
            "imageUrl": ""
          },
          {
            "text": "Rotational point symmetry about (0, -3).",
            "imageUrl": ""
          }
        ],
        "answer": "2",
        "answerStr": "2",
        "solutionSteps": [
          {
            "explanation": "Check for parity by substituting \\( -x \\).",
            "workingOut": "\\begin{aligned} f(-x) &= \\frac{2(-x)}{(-x)^2 - 9} \\\\ &= \\frac{-2x}{x^2 - 9} = -f(x) \\end{aligned}"
          },
          {
            "explanation": "State the symmetry.",
            "workingOut": "\\text{Since } f(-x) = -f(x) \\text{, the function is odd. It displays rotational point symmetry of 180 degrees about the origin.}"
          }
        ]
      },
      {
        "id": "y12a-3e-q11g",
        "type": "teacher_review",
        "question": "g) Use a table of test values of \\( y \\) to analyse the sign of the function.",
        "a": "For x < -3: y < 0; for -3 < x < 0: y > 0; for 0 < x < 3: y < 0; for x > 3: y > 0.",
        "solutionSteps": [
          {
            "explanation": "Set up sign table.",
            "workingOut": "\\text{Test values in the intervals partitioned by asymptotes and intercepts: } (-\\infty, -3), (-3, 0), (0, 3), (3, \\infty)."
          },
          {
            "explanation": "Test values.",
            "workingOut": "\\begin{aligned} \\text{For } x = -4: y &= \\frac{-8}{16 - 9} < 0 \\\\ \\text{For } x = -1: y &= \\frac{-2}{1 - 9} > 0 \\\\ \\text{For } x = 1: y &= \\frac{2}{1 - 9} < 0 \\\\ \\text{For } x = 4: y &= \\frac{8}{16 - 9} > 0 \\end{aligned}"
          }
        ]
      },
      {
        "id": "y12a-3e-q11h",
        "type": "teacher_review",
        "question": "h) Sketch the graph of \\( y = f(x) \\), showing all important features.",
        "a": "Three branches separated by vertical asymptotes x = -3 and x = 3, passing through (0,0) with gradient -2/9, and y = 0 as the horizontal asymptote.",
        "solutionSteps": [
          {
            "explanation": "Draw the asymptotes.",
            "workingOut": "\\text{Dashed vertical lines at } x = -3 \\text{ and } x = 3 \\text{, and a dashed horizontal line at } y = 0."
          },
          {
            "explanation": "Plot key points.",
            "workingOut": "\\text{Mark the origin } (0,0) \\text{ as a point of inflection.}"
          },
          {
            "explanation": "Sketch the branches.",
            "workingOut": "\\text{The curve is decreasing everywhere. Left branch: below x-axis. Middle branch: from } +\\infty \\text{ passing through } (0,0) \\text{ down to } -\\infty. \\text{ Right branch: from } +\\infty \\text{ above the x-axis, approaching } y=0.",
            "graphData": {
              "jsxGraph": {
                "width": 350,
                "height": 250,
                "boundingbox": [
                  -6,
                  4,
                  6,
                  -4
                ],
                "script": "board.suspendUpdate();\nboard.create('arrow', [[-6, 0], [6, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.5], [0,3.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [5.2, -0.3, 'x'], {fontSize: 14});\nboard.create('text', [-0.5, 3.2, 'y'], {fontSize: 14});\nvar f = function(x) { return 2*x / (x*x - 9); };\nboard.create('functiongraph', [f, -6, 6], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('functiongraph', [f, -2.95, 2.95], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('functiongraph', [f, 3.05, 6], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('line', [[-3, -1], [-3, 1]], {strokeColor: 'gray', dash: 2, strokeWidth: 1});\nboard.create('line', [[3, -1], [3, 1]], {strokeColor: 'gray', dash: 2, strokeWidth: 1});\nboard.create('point', [0, 0], {name: 'Inflection(0,0)', size: 3, color: 'red', label: {autoPosition: false, offset: [10, 5]}});\nboard.create('text', [-3.5, 2.5, 'x=-3'], {fontSize: 10, strokeColor: 'gray'});\nboard.create('text', [3.1, 2.5, 'x=3'], {fontSize: 10, strokeColor: 'gray'});\nboard.unsuspendUpdate();"
              }
            }
          }
        ]
      },
      {
        "id": "y12a-3e-q11i",
        "type": "multiple_choice",
        "question": "i) Use the graph to state the range of the function.",
        "a": "all real numbers",
        "opts": [
          "\\( y > 0 \\)",
          "all real numbers",
          "\\( y \\neq 0 \\)",
          "\\( -3 < y < 3 \\)"
        ],
        "options": [
          {
            "text": "\\( y > 0 \\)",
            "imageUrl": ""
          },
          {
            "text": "all real numbers",
            "imageUrl": ""
          },
          {
            "text": "\\( y \\neq 0 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( -3 < y < 3 \\)",
            "imageUrl": ""
          }
        ],
        "answer": "1",
        "answerStr": "1",
        "solutionSteps": [
          {
            "explanation": "Observe the sketched graph.",
            "workingOut": "\\text{The middle branch covers all values from } -\\infty \\text{ to } \\infty \\text{, as it passes through the origin continuously between the two vertical asymptotes.}"
          },
          {
            "explanation": "State the range.",
            "workingOut": "\\text{The range is all real numbers.}"
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-3e-q12",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 240,
    "question": "For the rational function \\( y = x + \\frac{4}{x} \\), complete the following systematic curve sketching analysis.",
    "t": "Systematic curve sketching with the derivative",
    "subQuestions": [
      {
        "id": "y12a-3e-q12a",
        "type": "multiple_choice",
        "question": "a) Show that the derivative of \\( y = x + \\frac{4}{x} \\) is \\( y' = \\frac{x^2 - 4}{x^2} \\).",
        "a": "y' = d/dx(x) + d/dx(4x^-1) = 1 - 4/x^2 = (x^2-4)/x^2.",
        "opts": [
          "\\( y' = 1 + \\frac{4}{x^2} \\)",
          "\\( y' = \\frac{x^2 - 4}{x^2} \\)",
          "\\( y' = \\frac{x^2 + 4}{x^2} \\)",
          "\\( y' = 1 - \\frac{1}{x^2} \\)"
        ],
        "options": [
          {
            "text": "\\( y' = 1 + \\frac{4}{x^2} \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( y' = \\frac{x^2 - 4}{x^2} \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( y' = \\frac{x^2 + 4}{x^2} \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( y' = 1 - \\frac{1}{x^2} \\)",
            "imageUrl": ""
          }
        ],
        "answer": "1",
        "answerStr": "1",
        "solutionSteps": [
          {
            "explanation": "Differentiate \\( y = x + 4x^{-1} \\).",
            "workingOut": "\\begin{aligned} y' &= \\frac{d}{dx}(x) + \\frac{d}{dx}(4x^{-1}) \\\\ &= 1 - 4x^{-2} = 1 - \\frac{4}{x^2} \\end{aligned}"
          },
          {
            "explanation": "Combine over a common denominator.",
            "workingOut": "\\begin{aligned} y' &= \\frac{x^2}{x^2} - \\frac{4}{x^2} = \\frac{x^2 - 4}{x^2} \\end{aligned}"
          }
        ]
      },
      {
        "id": "y12a-3e-q12b",
        "type": "multiple_choice",
        "question": "b) Find the stationary points and determine their nature. (Format: '(-2,-4) is a maximum, (2,4) is a minimum')",
        "a": "(-2,-4) is a maximum, (2,4) is a minimum",
        "opts": [
          "\\( (2, 4) \\) is a maximum, \\( (-2, -4) \\) is a minimum",
          "\\( (-2, -4) \\) is an inflection point, \\( (2, 4) \\) is an inflection point",
          "\\( (-2, -4) \\) is a maximum, \\( (2, 4) \\) is a minimum",
          "\\( (-2, -4) \\) is a minimum, \\( (2, 4) \\) is a maximum"
        ],
        "options": [
          {
            "text": "\\( (2, 4) \\) is a maximum, \\( (-2, -4) \\) is a minimum",
            "imageUrl": ""
          },
          {
            "text": "\\( (-2, -4) \\) is an inflection point, \\( (2, 4) \\) is an inflection point",
            "imageUrl": ""
          },
          {
            "text": "\\( (-2, -4) \\) is a maximum, \\( (2, 4) \\) is a minimum",
            "imageUrl": ""
          },
          {
            "text": "\\( (-2, -4) \\) is a minimum, \\( (2, 4) \\) is a maximum",
            "imageUrl": ""
          }
        ],
        "answer": "2",
        "answerStr": "2",
        "solutionSteps": [
          {
            "explanation": "Set \\( y' = 0 \\) to find stationary points.",
            "workingOut": "\\begin{aligned} \\frac{x^2 - 4}{x^2} &= 0 \\implies x^2 - 4 = 0 \\implies x = 2, -2 \\end{aligned}"
          },
          {
            "explanation": "Find y-coordinates.",
            "workingOut": "\\begin{aligned} y(2) &= 2 + \\frac{4}{2} = 4 \\implies (2, 4) \\\\ y(-2) &= -2 + \\frac{4}{-2} = -4 \\implies (-2, -4) \\end{aligned}"
          },
          {
            "explanation": "Find second derivative to determine nature.",
            "workingOut": "\\begin{aligned} y'' &= \\frac{d}{dx}(1 - 4x^{-2}) = 8x^{-3} = \\frac{8}{x^3} \\end{aligned}"
          },
          {
            "explanation": "Evaluate \\( y'' \\).",
            "workingOut": "\\begin{aligned} y''(2) &= \\frac{8}{8} = 1 > 0 \\implies (2, 4) \\text{ is a minimum} \\\\ y''(-2) &= \\frac{8}{-8} = -1 < 0 \\implies (-2, -4) \\text{ is a maximum} \\end{aligned}"
          }
        ]
      },
      {
        "id": "y12a-3e-q12c",
        "type": "multiple_choice",
        "question": "c) Show that the function is odd. What symmetry does its graph have?",
        "a": "f(-x) = -x + 4/(-x) = -(x + 4/x) = -f(x), so the function is odd. The graph displays rotational point symmetry of 180 degrees about the origin.",
        "opts": [
          "The function is even and displays line symmetry about the y-axis.",
          "The function is neither even nor odd.",
          "The function is odd and displays rotational point symmetry of 180 degrees about the origin.",
          "The function is odd and displays line symmetry about the y-axis."
        ],
        "options": [
          {
            "text": "The function is even and displays line symmetry about the y-axis.",
            "imageUrl": ""
          },
          {
            "text": "The function is neither even nor odd.",
            "imageUrl": ""
          },
          {
            "text": "The function is odd and displays rotational point symmetry of 180 degrees about the origin.",
            "imageUrl": ""
          },
          {
            "text": "The function is odd and displays line symmetry about the y-axis.",
            "imageUrl": ""
          }
        ],
        "answer": "2",
        "answerStr": "2",
        "solutionSteps": [
          {
            "explanation": "Check for parity.",
            "workingOut": "\\begin{aligned} f(-x) &= (-x) + \\frac{4}{-x} = -\\left(x + \\frac{4}{x}\\right) = -f(x) \\end{aligned}"
          },
          {
            "explanation": "State the symmetry.",
            "workingOut": "\\text{Since } f(-x) = -f(x) \\text{, the function is odd and has rotational symmetry about the origin.}"
          }
        ]
      },
      {
        "id": "y12a-3e-q12d",
        "type": "multiple_choice",
        "question": "d) State the domain of the function and the equation of the vertical asymptote. (Format: 'domain: x not equal to 0; vertical asymptote: x = 0')",
        "a": "domain: x not equal to 0; vertical asymptote: x = 0",
        "opts": [
          "domain: \\( x \\neq 0 \\); vertical asymptote: \\( x = 0 \\)",
          "domain: \\( x > 0 \\); vertical asymptote: \\( x = 0 \\)",
          "domain: all real \\( x \\); no vertical asymptote",
          "domain: \\( x \\neq -2, 2 \\); vertical asymptotes: \\( x = -2, 2 \\)"
        ],
        "options": [
          {
            "text": "domain: \\( x \\neq 0 \\); vertical asymptote: \\( x = 0 \\)",
            "imageUrl": ""
          },
          {
            "text": "domain: \\( x > 0 \\); vertical asymptote: \\( x = 0 \\)",
            "imageUrl": ""
          },
          {
            "text": "domain: all real \\( x \\); no vertical asymptote",
            "imageUrl": ""
          },
          {
            "text": "domain: \\( x \\neq -2, 2 \\); vertical asymptotes: \\( x = -2, 2 \\)",
            "imageUrl": ""
          }
        ],
        "answer": "0",
        "answerStr": "0",
        "solutionSteps": [
          {
            "explanation": "Find where the function is undefined.",
            "workingOut": "\\text{The term } \\frac{4}{x} \\text{ is undefined when } x = 0."
          },
          {
            "explanation": "State the domain and asymptote.",
            "workingOut": "\\text{The domain is all real } x \\neq 0 \\text{, and the vertical asymptote is } x = 0."
          }
        ]
      },
      {
        "id": "y12a-3e-q12e",
        "type": "teacher_review",
        "question": "e) Use a table of test values of \\( y \\) to analyse the sign of the function.",
        "a": "For x < 0, y < 0. For x > 0, y > 0.",
        "solutionSteps": [
          {
            "explanation": "Analyze the sign on either side of the asymptote.",
            "workingOut": "\\begin{aligned} \\text{For } x < 0 \\text{ (e.g., } x = -1), y &= -1 - 4 = -5 < 0 \\\\ \\text{For } x > 0 \\text{ (e.g., } x = 1), y &= 1 + 4 = 5 > 0 \\end{aligned}"
          }
        ]
      },
      {
        "id": "y12a-3e-q12f",
        "type": "teacher_review",
        "question": "f) Sketch the graph of the function. (You may assume that the diagonal line \\( y = x \\) is an oblique asymptote to the curve.)",
        "a": "Sketch curve with vertical asymptote at x = 0 and oblique asymptote at y = x, with a local maximum at (-2,-4) and a local minimum at (2,4).",
        "solutionSteps": [
          {
            "explanation": "Draw asymptotes.",
            "workingOut": "\\text{Draw dashed line for } x=0 \\text{ (y-axis) and } y = x."
          },
          {
            "explanation": "Plot turning points.",
            "workingOut": "\\text{Mark max at } (-2, -4) \\text{ and min at } (2, 4)."
          },
          {
            "explanation": "Sketch the curve.",
            "workingOut": "\\text{Draw a hyperbola-like curve approaching the asymptotes, with vertices at the turning points.}",
            "graphData": {
              "jsxGraph": {
                "width": 350,
                "height": 250,
                "boundingbox": [
                  -6,
                  8,
                  6,
                  -8
                ],
                "script": "board.suspendUpdate();\nboard.create('arrow', [[-6, 0], [6, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-7.5], [0,7.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [5.2, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.5, 7.0, 'y'], {fontSize: 14});\nvar f = function(x) { return x + 4/x; };\nboard.create('functiongraph', [f, -6, 6], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('functiongraph', [f, 0.05, 6], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('line', [[0, -1], [0, 1]], {strokeColor: 'gray', dash: 2, strokeWidth: 1});\nboard.create('line', [[-6, -6], [6, 6]], {strokeColor: 'gray', dash: 2, strokeWidth: 1});\nboard.create('point', [2, 4], {name: 'Min(2,4)', size: 3, color: 'red', label: {autoPosition: false, offset: [10, -10]}});\nboard.create('point', [-2, -4], {name: 'Max(-2,-4)', size: 3, color: 'red', label: {autoPosition: false, offset: [-35, 15]}});\nboard.create('text', [3.5, 4.2, 'y=x'], {fontSize: 10, strokeColor: 'gray'});\nboard.unsuspendUpdate();"
              }
            }
          }
        ]
      },
      {
        "id": "y12a-3e-q12g",
        "type": "multiple_choice",
        "question": "g) Write down the range of the function. (Format: 'y <= -4 or y >= 4')",
        "a": "y <= -4 or y >= 4",
        "opts": [
          "\\( -4 < y < 4 \\)",
          "All real numbers",
          "\\( y \\leq -4 \\text{ or } y \\geq 4 \\)",
          "\\( y \\leq -2 \\text{ or } y \\geq 2 \\)"
        ],
        "options": [
          {
            "text": "\\( -4 < y < 4 \\)",
            "imageUrl": ""
          },
          {
            "text": "All real numbers",
            "imageUrl": ""
          },
          {
            "text": "\\( y \\leq -4 \\text{ or } y \\geq 4 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( y \\leq -2 \\text{ or } y \\geq 2 \\)",
            "imageUrl": ""
          }
        ],
        "answer": "2",
        "answerStr": "2",
        "solutionSteps": [
          {
            "explanation": "Observe the sketched graph.",
            "workingOut": "\\text{The left branch peaks at } y = -4 \\text{, so it covers } y \\le -4. \\text{ The right branch has its lowest point at } y = 4 \\text{, so it covers } y \\ge 4."
          },
          {
            "explanation": "Combine.",
            "workingOut": "\\text{Range is } y \\le -4 \\text{ or } y \\ge 4."
          }
        ]
      }
    ]
  }
];
