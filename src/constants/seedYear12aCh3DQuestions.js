export const Y12A_CH3D_QUESTIONS = [
  {
    "id": "y12a-3d-q1",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "For the function shown in the graph, complete the table by stating whether the first derivative \\( y' \\) and the second derivative \\( y'' \\) are positive, negative, or zero at each of the labeled points A, B, C, D, E, F, G, H, and I.",
    "a": "A: y'=0, y''>0; B: y'>0, y''=0; C: y'=0, y''<0; D: y'<0, y''=0; E: y'<0, y''>0; F: y'<0, y''>0; G: y'=0, y''>0; H: y'>0, y''>0; I: y'>0, y''>0.",
    "t": "Concavity and points of inflection",
    "solutionSteps": [
      {
        "explanation": "Point A is a local minimum: tangent is horizontal (\\( y' = 0 \\)) and curve is concave up (\\( y'' > 0 \\)).",
        "workingOut": "y'(A) = 0, quad y''(A) > 0"
      },
      {
        "explanation": "Point B is on the rising section where concavity changes from up to down: rising (\\( y' > 0 \\)) and point of inflection (\\( y'' = 0 \\)).",
        "workingOut": "y'(B) > 0, quad y''(B) = 0"
      },
      {
        "explanation": "Point C is a local maximum: tangent is horizontal (\\( y' = 0 \\)) and curve is concave down (\\( y'' < 0 \\)).",
        "workingOut": "y'(C) = 0, quad y''(C) < 0"
      },
      {
        "explanation": "Point D is on the falling section where concavity changes from down to up: falling (\\( y' < 0 \\)) and point of inflection (\\( y'' = 0 \\)).",
        "workingOut": "y'(D) < 0, quad y''(D) = 0"
      },
      {
        "explanation": "Points E and F are on the falling section after the inflection point: falling (\\( y' < 0 \\)) and concave up (\\( y'' > 0 \\)).",
        "workingOut": "y'(E) < 0, y''(E) > 0 \\quad \\text{and} \\quad y'(F) < 0, y''(F) > 0"
      },
      {
        "explanation": "Point G is a local minimum: tangent is horizontal (\\( y' = 0 \\)) and curve is concave up (\\( y'' > 0 \\)).",
        "workingOut": "y'(G) = 0, quad y''(G) > 0"
      },
      {
        "explanation": "Points H and I are on the rising section where the curve continues to bend upwards: rising (\\( y' > 0 \\)) and concave up (\\( y'' > 0 \\)).",
        "workingOut": "y'(H) > 0, y''(H) > 0 \\quad \\text{and} \\quad y'(I) > 0, y''(I) > 0"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [
          -3,
          6,
          4,
          -6
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-2.5,0], [3.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-5.5], [0,5.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [3.3, -0.5, 'x'], {fontSize: 14});\nboard.create('text', [-0.5, 5.2, 'y'], {fontSize: 14});\nvar f = function(x) { return 0.25*x*x*x*x - 2*x*x; };\nboard.create('functiongraph', [f, -2.5, 2.5], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [-2, -4], {name: 'A', size: 3, color: 'red', label: {autoPosition: false, offset: [-5, -15]}});\nboard.create('point', [-1.15, -2.31], {name: 'B', size: 3, color: 'red', label: {autoPosition: false, offset: [-15, 10]}});\nboard.create('point', [0, 0], {name: 'C', size: 3, color: 'red', label: {autoPosition: false, offset: [-5, 12]}});\nboard.create('point', [1.15, -2.31], {name: 'D', size: 3, color: 'red', label: {autoPosition: false, offset: [10, 10]}});\nboard.create('point', [1.5, -3.23], {name: 'E', size: 3, color: 'red', label: {autoPosition: false, offset: [10, 5]}});\nboard.create('point', [1.8, -3.83], {name: 'F', size: 3, color: 'red', label: {autoPosition: false, offset: [10, -5]}});\nboard.create('point', [2, -4], {name: 'G', size: 3, color: 'red', label: {autoPosition: false, offset: [-5, -15]}});\nboard.create('point', [2.2, -3.83], {name: 'H', size: 3, color: 'red', label: {autoPosition: false, offset: [-15, 10]}});\nboard.create('point', [2.4, -3.23], {name: 'I', size: 3, color: 'red', label: {autoPosition: false, offset: [-15, 10]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y12a-3d-q2a",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find \\( f''(x) \\) for \\( f(x) = 2x^3 - 6x^2 \\). By evaluating \\( f''(0) \\), state whether the curve is concave up or concave down at \\( x = 0 \\).",
    "a": "concave down",
    "t": "Concavity and points of inflection",
    "solutionSteps": [
      {
        "explanation": "Differentiate once to find the first derivative.",
        "workingOut": "f'(x) = 6x^2 - 12x"
      },
      {
        "explanation": "Differentiate again to find the second derivative.",
        "workingOut": "f''(x) = 12x - 12"
      },
      {
        "explanation": "Evaluate the second derivative at \\( x = 0 \\).",
        "workingOut": "f''(0) = 12(0) - 12 = -12"
      },
      {
        "explanation": "Since \\( f''(0) < 0 \\), the curve is concave down at \\( x = 0 \\).",
        "workingOut": "-12 < 0 \\implies \\text{concave down}"
      }
    ]
  },
  {
    "id": "y12a-3d-q2b",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find \\( f''(x) \\) for \\( f(x) = x^3 + 3x^2 - 4x + 9 \\). By evaluating \\( f''(0) \\), state whether the curve is concave up or concave down at \\( x = 0 \\).",
    "a": "concave up",
    "t": "Concavity and points of inflection",
    "solutionSteps": [
      {
        "explanation": "Find the first derivative.",
        "workingOut": "f'(x) = 3x^2 + 6x - 4"
      },
      {
        "explanation": "Find the second derivative.",
        "workingOut": "f''(x) = 6x + 6"
      },
      {
        "explanation": "Evaluate at \\( x = 0 \\).",
        "workingOut": "f''(0) = 6(0) + 6 = 6"
      },
      {
        "explanation": "Since \\( f''(0) > 0 \\), the curve is concave up.",
        "workingOut": "6 > 0 \\implies \\text{concave up}"
      }
    ]
  },
  {
    "id": "y12a-3d-q2c",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find \\( f''(x) \\) for \\( f(x) = 2x^4 + 3x^2 - 5 \\). By evaluating \\( f''(0) \\), state whether the curve is concave up or concave down at \\( x = 0 \\).",
    "a": "concave up",
    "t": "Concavity and points of inflection",
    "solutionSteps": [
      {
        "explanation": "Find the first derivative.",
        "workingOut": "f'(x) = 8x^3 + 6x"
      },
      {
        "explanation": "Find the second derivative.",
        "workingOut": "f''(x) = 24x^2 + 6"
      },
      {
        "explanation": "Evaluate at \\( x = 0 \\).",
        "workingOut": "f''(0) = 24(0)^2 + 6 = 6"
      },
      {
        "explanation": "Since \\( f''(0) > 0 \\), the curve is concave up.",
        "workingOut": "6 > 0 \\implies \\text{concave up}"
      }
    ]
  },
  {
    "id": "y12a-3d-q2d",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find \\( f''(x) \\) for \\( f(x) = 8x - 5x^2 - 3x^4 \\). By evaluating \\( f''(0) \\), state whether the curve is concave up or concave down at \\( x = 0 \\).",
    "a": "concave down",
    "t": "Concavity and points of inflection",
    "solutionSteps": [
      {
        "explanation": "Find the first derivative.",
        "workingOut": "f'(x) = 8 - 10x - 12x^3"
      },
      {
        "explanation": "Find the second derivative.",
        "workingOut": "f''(x) = -10 - 36x^2"
      },
      {
        "explanation": "Evaluate at \\( x = 0 \\).",
        "workingOut": "f''(0) = -10 - 36(0)^2 = -10"
      },
      {
        "explanation": "Since \\( f''(0) < 0 \\), the curve is concave down.",
        "workingOut": "-10 < 0 \\implies \\text{concave down}"
      }
    ]
  },
  {
    "id": "y12a-3d-q3a",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "By showing that \\( f'(3) = 0 \\), prove that \\( f(x) = x^2 - 6x + 9 \\) has a stationary point at \\( x = 3 \\). Then evaluate \\( f''(3) \\) to determine whether this stationary point is a maximum, minimum, or a horizontal point of inflection.",
    "a": "minimum",
    "t": "Concavity and points of inflection",
    "solutionSteps": [
      {
        "explanation": "Find \\( f'(x) \\) and verify it equals zero at \\( x = 3 \\).",
        "workingOut": "f'(x) = 2x - 6 \\implies f'(3) = 2(3) - 6 = 0"
      },
      {
        "explanation": "Find \\( f''(x) \\) and evaluate it at \\( x = 3 \\).",
        "workingOut": "f''(x) = 2 \\implies f''(3) = 2"
      },
      {
        "explanation": "Since \\( f''(3) > 0 \\), the stationary point is a local minimum.",
        "workingOut": "2 > 0 \\implies \\text{minimum}"
      }
    ]
  },
  {
    "id": "y12a-3d-q3b",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "By showing that \\( f'(3) = 0 \\), prove that \\( f(x) = 12 + 6x - x^2 \\) has a stationary point at \\( x = 3 \\). Then evaluate \\( f''(3) \\) to determine whether this stationary point is a maximum, minimum, or a horizontal point of inflection.",
    "a": "maximum",
    "t": "Concavity and points of inflection",
    "solutionSteps": [
      {
        "explanation": "Find \\( f'(x) \\) and evaluate at \\( x = 3 \\).",
        "workingOut": "f'(x) = 6 - 2x \\implies f'(3) = 6 - 2(3) = 0"
      },
      {
        "explanation": "Find \\( f''(x) \\) and evaluate at \\( x = 3 \\).",
        "workingOut": "f''(x) = -2 \\implies f''(3) = -2"
      },
      {
        "explanation": "Since \\( f''(3) < 0 \\), the stationary point is a local maximum.",
        "workingOut": "-2 < 0 \\implies \\text{maximum}"
      }
    ]
  },
  {
    "id": "y12a-3d-q3c",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "By showing that \\( f'(3) = 0 \\), prove that \\( f(x) = x^3 - 27x \\) has a stationary point at \\( x = 3 \\). Then evaluate \\( f''(3) \\) to determine whether this stationary point is a maximum, minimum, or a horizontal point of inflection.",
    "a": "minimum",
    "t": "Concavity and points of inflection",
    "solutionSteps": [
      {
        "explanation": "Find the first derivative.",
        "workingOut": "f'(x) = 3x^2 - 27 \\implies f'(3) = 3(9) - 27 = 0"
      },
      {
        "explanation": "Find the second derivative.",
        "workingOut": "f''(x) = 6x \\implies f''(3) = 6(3) = 18"
      },
      {
        "explanation": "Since \\( f''(3) > 0 \\), the stationary point is a minimum.",
        "workingOut": "18 > 0 \\implies \\text{minimum}"
      }
    ]
  },
  {
    "id": "y12a-3d-q3d",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "By showing that \\( f'(3) = 0 \\), prove that \\( f(x) = x^3 - 3x^2 - 9x + 5 \\) has a stationary point at \\( x = 3 \\). Then evaluate \\( f''(3) \\) to determine whether this stationary point is a maximum, minimum, or a horizontal point of inflection.",
    "a": "minimum",
    "t": "Concavity and points of inflection",
    "solutionSteps": [
      {
        "explanation": "Find the first derivative.",
        "workingOut": "f'(x) = 3x^2 - 6x - 9 \\implies f'(3) = 3(9) - 6(3) - 9 = 0"
      },
      {
        "explanation": "Find the second derivative.",
        "workingOut": "f''(x) = 6x - 6 \\implies f''(3) = 6(3) - 6 = 12"
      },
      {
        "explanation": "Since \\( f''(3) > 0 \\), the stationary point is a minimum.",
        "workingOut": "12 > 0 \\implies \\text{minimum}"
      }
    ]
  },
  {
    "id": "y12a-3d-q4",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Analyze the concavity of the following quadratic functions.",
    "t": "Concavity and points of inflection",
    "subQuestions": [
      {
        "id": "y12a-3d-q4a",
        "type": "teacher_review",
        "question": "a) Explain why \\( y = x^2 - 5x + 9 \\) is concave up for all values of \\( x \\).",
        "a": "The second derivative is \\( d^2y/dx^2 = 2 \\). Since this is positive and constant for all \\( x \\), the curve is concave up everywhere."
      },
      {
        "id": "y12a-3d-q4b",
        "type": "teacher_review",
        "question": "b) Explain why \\( y = -4x^2 + 3x - 8 \\) is concave down for all values of \\( x \\).",
        "a": "The second derivative is \\( d^2y/dx^2 = -8 \\). Since this is negative and constant for all \\( x \\), the curve is concave down everywhere."
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Find the second derivative of \\( y = x^2 - 5x + 9 \\).",
        "workingOut": "y' = 2x - 5 \\implies y'' = 2 > 0 \\quad \\text{for all } x"
      },
      {
        "explanation": "Find the second derivative of \\( y = -4x^2 + 3x - 8 \\).",
        "workingOut": "y' = -8x + 3 \\implies y'' = -8 < 0 \\quad \\text{for all } x"
      }
    ]
  },
  {
    "id": "y12a-3d-q5",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "For the curve \\( y = x^3 - 6x^2 - 9x + 4 \\), complete the following steps to find its second derivative and determine intervals of concavity.",
    "t": "Concavity and points of inflection",
    "subQuestions": [
      {
        "id": "y12a-3d-q5a",
        "type": "teacher_review",
        "question": "a) Find the second derivative \\( \\frac{d^2y}{dx^2} \\) of \\( y = x^3 - 6x^2 - 9x + 4 \\).",
        "a": "dy/dx = 3x^2 - 12x - 9, so d^2y/dx^2 = 6x - 12."
      },
      {
        "id": "y12a-3d-q5bi",
        "type": "short_answer",
        "question": "b) i) Find the values of \\( x \\) for which the curve is concave up.",
        "a": "x>2"
      },
      {
        "id": "y12a-3d-q5bii",
        "type": "short_answer",
        "question": "b) ii) Find the values of \\( x \\) for which the curve is concave down.",
        "a": "x<2"
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Differentiate once to find the first derivative.",
        "workingOut": "\\frac{dy}{dx} = 3x^2 - 12x - 9"
      },
      {
        "explanation": "Differentiate again to obtain the second derivative.",
        "workingOut": "\\frac{d^2y}{dx^2} = 6x - 12"
      },
      {
        "explanation": "Set the second derivative greater than zero to determine the concave up region.",
        "workingOut": "6x - 12 > 0 \\implies 6x > 12 \\implies x > 2"
      },
      {
        "explanation": "Set the second derivative less than zero to determine the concave down region.",
        "workingOut": "6x - 12 < 0 \\implies 6x < 12 \\implies x < 2"
      }
    ]
  },
  {
    "id": "y12a-3d-q6",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "For the curve \\( y = 2x^3 - 3x^2 - 12x + 7 \\), complete the following steps to find its second derivative and determine intervals of concavity.",
    "t": "Concavity and points of inflection",
    "subQuestions": [
      {
        "id": "y12a-3d-q6a",
        "type": "teacher_review",
        "question": "a) Find the second derivative \\( \\frac{d^2y}{dx^2} \\) of \\( y = 2x^3 - 3x^2 - 12x + 7 \\).",
        "a": "dy/dx = 6x^2 - 6x - 12, so d^2y/dx^2 = 12x - 6."
      },
      {
        "id": "y12a-3d-q6bi",
        "type": "short_answer",
        "question": "b) i) Find the values of \\( x \\) for which the curve is concave up.",
        "a": "x>0.5"
      },
      {
        "id": "y12a-3d-q6bii",
        "type": "short_answer",
        "question": "b) ii) Find the values of \\( x \\) for which the curve is concave down.",
        "a": "x<0.5"
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Differentiate once to find the first derivative.",
        "workingOut": "\\frac{dy}{dx} = 6x^2 - 6x - 12"
      },
      {
        "explanation": "Differentiate again to find the second derivative.",
        "workingOut": "\\frac{d^2y}{dx^2} = 12x - 6"
      },
      {
        "explanation": "Set the second derivative greater than zero.",
        "workingOut": "12x - 6 > 0 \\implies 12x > 6 \\implies x > 0.5"
      },
      {
        "explanation": "Set the second derivative less than zero.",
        "workingOut": "12x - 6 < 0 \\implies 12x < 6 \\implies x < 0.5"
      }
    ]
  },
  {
    "id": "y12a-3d-q7",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "A function has second derivative \\( y'' = 5x^2(x - 4)^3(x + 1) \\). Determine the \\( x \\)-coordinates of the points of inflection on the graph of the function. If there are multiple values, list them in ascending order, separated by a comma (e.g. '-1,4').",
    "a": "-1,4",
    "t": "Concavity and points of inflection",
    "solutionSteps": [
      {
        "explanation": "Points of inflection require that \\( y'' = 0 \\) and that the sign of \\( y'' \\) changes across the point.",
        "workingOut": "5x^2(x-4)^3(x+1) = 0 \\implies x = 0, 4, \\, -1"
      },
      {
        "explanation": "Analyze the sign change of \\( y'' \\) around each root. At \\( x = 0 \\), the factor \\( x^2 \\) has an even power, so \\( y'' \\) does not change sign.",
        "workingOut": "\\text{No sign change at } x = 0 \\implies \\text{not an inflection point}"
      },
      {
        "explanation": "At \\( x = -1 \\) and \\( x = 4 \\), the corresponding factors \\( (x+1) \\) and \\( (x-4)^3 \\) have odd powers, meaning \\( y'' \\) changes sign across these values.",
        "workingOut": "\\text{Sign changes at } x = -1 \\text{ and } x = 4"
      },
      {
        "explanation": "State the x-coordinates of the inflection points.",
        "workingOut": "x = -1, 4"
      }
    ]
  },
  {
    "id": "y12a-3d-q8",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Analyze and sketch the cubic function \\( f(x) = x^3 - 12x \\) using calculus.",
    "t": "Concavity and points of inflection",
    "subQuestions": [
      {
        "id": "y12a-3d-q8a",
        "type": "teacher_review",
        "question": "a) If \\( f(x) = x^3 - 12x \\), show that \\( f'(x) = 3(x - 2)(x + 2) \\) and \\( f''(x) = 6x \\).",
        "a": "f'(x) = 3x^2 - 12 = 3(x-2)(x+2), and f''(x) = d/dx[3x^2-12] = 6x."
      },
      {
        "id": "y12a-3d-q8b",
        "type": "teacher_review",
        "question": "b) By solving \\( f'(x) = 0 \\), find the coordinates of any stationary points.",
        "a": "Stationary points are at (2, -16) and (-2, 16)."
      },
      {
        "id": "y12a-3d-q8c",
        "type": "teacher_review",
        "question": "c) Examine the sign of \\( f''(2) \\) and \\( f''(-2) \\) to determine their nature.",
        "a": "f''(2) = 12 > 0 (minimum); f''(-2) = -12 < 0 (maximum)."
      },
      {
        "id": "y12a-3d-q8d",
        "type": "teacher_review",
        "question": "d) Find the coordinates of the point of inflection. Remember that you must show that the sign of \\( f''(x) \\) changes about this point.",
        "a": "Inflection point is at (0, 0) since f''(0) = 0 and sign of f''(x) changes from negative (for x < 0) to positive (for x > 0)."
      },
      {
        "id": "y12a-3d-q8e",
        "type": "teacher_review",
        "question": "e) Sketch the graph of \\( f(x) \\), indicating all important features.",
        "a": "Sketch cubic curve showing maximum at (-2,16), minimum at (2,-16), point of inflection at (0,0), and x-intercepts at \\( \\pm 2\\sqrt{3} \\)."
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Differentiate \\( f(x) = x^3 - 12x \\).",
        "workingOut": "f'(x) = 3x^2 - 12 = 3(x - 2)(x + 2)"
      },
      {
        "explanation": "Differentiate again to find the second derivative.",
        "workingOut": "f''(x) = 6x"
      },
      {
        "explanation": "Locate stationary points where \\( f'(x) = 0 \\).",
        "workingOut": "3(x-2)(x+2) = 0 \\implies x = 2 \\text{ or } x = -2 \\implies y(2) = -16, y(-2) = 16"
      },
      {
        "explanation": "Test concavities at the stationary points.",
        "workingOut": "f''(2) = 12 > 0 \\, (\\text{min}) \\quad \\text{and} \\quad f''(-2) = -12 < 0 \\, (\\text{max})"
      },
      {
        "explanation": "Find inflection points where \\( f''(x) = 0 \\) and check for a sign change.",
        "workingOut": "6x = 0 \\implies x = 0 \\implies y(0) = 0. \\text{ Sign changes from } - \\text{ to } + \\implies (0,0) \\text{ is inflection.}"
      }
    ],
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
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-4.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-22], [0,22]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.3, -2, 'x'], {fontSize: 14});\nboard.create('text', [-0.5, 20, 'y'], {fontSize: 14});\nvar f = function(x) { return x*x*x - 12*x; };\nboard.create('functiongraph', [f, -4.2, 4.2], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [-2, 16], {name: 'Max(-2,16)', size: 3, color: 'red', label: {autoPosition: false, offset: [-30, 15]}});\nboard.create('point', [2, -16], {name: 'Min(2,-16)', size: 3, color: 'red', label: {autoPosition: false, offset: [10, -10]}});\nboard.create('point', [0, 0], {name: 'Inflection(0,0)', size: 3, color: 'red', label: {autoPosition: false, offset: [10, 5]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y12a-3d-q9",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Analyze and sketch the cubic function \\( f(x) = x^3 - 3x^2 - 24x + 10 \\).",
    "t": "Concavity and points of inflection",
    "subQuestions": [
      {
        "id": "y12a-3d-q9a",
        "type": "teacher_review",
        "question": "a) If \\( f(x) = x^3 - 3x^2 - 24x + 10 \\), show that \\( f'(x) = 3(x - 4)(x + 2) \\) and \\( f''(x) = 6(x - 1) \\).",
        "a": "f'(x) = 3x^2 - 6x - 24 = 3(x-4)(x+2), and f''(x) = 6x - 6 = 6(x-1)."
      },
      {
        "id": "y12a-3d-q9b",
        "type": "teacher_review",
        "question": "b) Find any stationary points and use the sign of \\( f''(x) \\) to determine their nature.",
        "a": "Stationary points at (-2, 38) (maximum) and (4, -70) (minimum)."
      },
      {
        "id": "y12a-3d-q9c",
        "type": "teacher_review",
        "question": "c) Find the coordinates of any points of inflection, testing them with a table of concavities.",
        "a": "Inflection point is at (1, -16) since f''(1) = 0 and f'' changes from negative (for x < 1) to positive (for x > 1)."
      },
      {
        "id": "y12a-3d-q9d",
        "type": "teacher_review",
        "question": "d) Sketch the graph of \\( f(x) \\), indicating all important features.",
        "a": "Sketch cubic curve showing maximum at (-2,38), minimum at (4,-70), and point of inflection at (1,-16)."
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Differentiate \\( f(x) = x^3 - 3x^2 - 24x + 10 \\).",
        "workingOut": "f'(x) = 3x^2 - 6x - 24 = 3(x - 4)(x + 2)"
      },
      {
        "explanation": "Differentiate again.",
        "workingOut": "f''(x) = 6x - 6 = 6(x - 1)"
      },
      {
        "explanation": "Solve \\( f'(x) = 0 \\) to find turning coordinates.",
        "workingOut": "x = 4 \\implies y(4) = -70 \\quad \\text{and} \\quad x = -2 \\implies y(-2) = 38"
      },
      {
        "explanation": "Evaluate second derivatives to find point types.",
        "workingOut": "f''(4) = 18 > 0 \\, (\\text{min}) \\quad \\text{and} \\quad f''(-2) = -18 < 0 \\, (\\text{max})"
      },
      {
        "explanation": "Locate points of inflection.",
        "workingOut": "f''(x) = 0 \\implies x = 1 \\implies y(1) = -16. \\, text{Table around } x=1 \\text{ shows } y'' \\text{ sign change.}"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [
          -5,
          60,
          6,
          -95
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-4.5,0], [5.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-90], [0,55]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [5.3, -5, 'x'], {fontSize: 14});\nboard.create('text', [-0.5, 50, 'y'], {fontSize: 14});\nvar f = function(x) { return x*x*x - 3*x*x - 24*x + 10; };\nboard.create('functiongraph', [f, -4.5, 5.5], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [-2, 38], {name: 'Max(-2,38)', size: 3, color: 'red', label: {autoPosition: false, offset: [-30, 15]}});\nboard.create('point', [4, -70], {name: 'Min(4,-70)', size: 3, color: 'red', label: {autoPosition: false, offset: [10, -10]}});\nboard.create('point', [1, -16], {name: 'Inflection(1,-16)', size: 3, color: 'red', label: {autoPosition: false, offset: [10, 5]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y12a-3d-q10",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Analyze and sketch the cubic function \\( y = x^3 - 6x^2 - 15x + 20 \\).",
    "t": "Concavity and points of inflection",
    "subQuestions": [
      {
        "id": "y12a-3d-q10a",
        "type": "teacher_review",
        "question": "a) If \\( y = x^3 - 6x^2 - 15x + 20 \\), show that \\( y' = 3(x - 5)(x + 1) \\) and \\( y'' = 6(x - 2) \\).",
        "a": "y' = 3x^2 - 12x - 15 = 3(x-5)(x+1), and y'' = 6x - 12 = 6(x-2)."
      },
      {
        "id": "y12a-3d-q10b",
        "type": "teacher_review",
        "question": "b) Find any stationary points and use the sign of \\( y'' \\) to determine their nature.",
        "a": "Stationary points are at (-1, 28) (maximum) and (5, -80) (minimum)."
      },
      {
        "id": "y12a-3d-q10c",
        "type": "teacher_review",
        "question": "c) Find the coordinates of any points of inflection, testing them with a table of concavities.",
        "a": "Inflection point is at (2, -26) since y'' = 0 at x = 2 and concavity changes from down (for x < 2) to up (for x > 2)."
      },
      {
        "id": "y12a-3d-q10d",
        "type": "teacher_review",
        "question": "d) Sketch the graph of the function, indicating all important features.",
        "a": "Sketch cubic curve showing maximum at (-1,28), minimum at (5,-80), point of inflection at (2,-26), and y-intercept at (0,20)."
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Find first and second derivatives.",
        "workingOut": "y' = 3x^2 - 12x - 15 = 3(x - 5)(x + 1) \\quad \\text{and} \\quad y'' = 6x - 12 = 6(x - 2)"
      },
      {
        "explanation": "Set \\( y' = 0 \\) to find stationary points.",
        "workingOut": "x = 5 \\implies y(5) = -80 \\quad \\text{and} \\quad x = -1 \\implies y(-1) = 28"
      },
      {
        "explanation": "Classify stationary points using second derivative values.",
        "workingOut": "y''(5) = 18 > 0 \\, (\\text{min}) \\quad \\text{and} \\quad y''(-1) = -18 < 0 \\, (\\text{max})"
      },
      {
        "explanation": "Set \\( y'' = 0 \\) to find points of inflection.",
        "workingOut": "6(x-2) = 0 \\implies x = 2 \\implies y(2) = -26. \\, y'' \\text{ changes sign across } x = 2 \\text{, so it is an inflection point.}"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [
          -3,
          50,
          7,
          -100
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-2.5,0], [6.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-95], [0,45]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [6.3, -5, 'x'], {fontSize: 14});\nboard.create('text', [-0.5, 40, 'y'], {fontSize: 14});\nvar f = function(x) { return x*x*x - 6*x*x - 15*x + 20; };\nboard.create('functiongraph', [f, -2.5, 6.5], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [-1, 28], {name: 'Max(-1,28)', size: 3, color: 'red', label: {autoPosition: false, offset: [-30, 15]}});\nboard.create('point', [5, -80], {name: 'Min(5,-80)', size: 3, color: 'red', label: {autoPosition: false, offset: [10, -10]}});\nboard.create('point', [2, -26], {name: 'Inflection(2,-26)', size: 3, color: 'red', label: {autoPosition: false, offset: [10, 5]}});\nboard.create('point', [0, 20], {name: '20', size: 2, color: 'black', label: {autoPosition: false, offset: [-20, 0]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y12a-3d-q11",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Analyze and sketch the quartic function \\( y = 16 + 8x^3 - 3x^4 \\).",
    "t": "Concavity and points of inflection",
    "subQuestions": [
      {
        "id": "y12a-3d-q11a",
        "type": "teacher_review",
        "question": "a) If \\( y = 16 + 8x^3 - 3x^4 \\), show that \\( y' = 12x^2(2 - x) \\) and \\( y'' = 12x(4 - 3x) \\).",
        "a": "y' = 24x^2 - 12x^3 = 12x^2(2-x), and y'' = 48x - 36x^2 = 12x(4-3x)."
      },
      {
        "id": "y12a-3d-q11b",
        "type": "teacher_review",
        "question": "b) Find any stationary points and use a table of test values of \\( y' \\) to determine their nature.",
        "a": "Stationary points are at (0, 16) (horizontal point of inflection) and (2, 32) (maximum turning point)."
      },
      {
        "id": "y12a-3d-q11c",
        "type": "teacher_review",
        "question": "c) Find the coordinates of any points of inflection.",
        "a": "Inflection points are at (0, 16) and (4/3, 688/27)."
      },
      {
        "id": "y12a-3d-q11d",
        "type": "teacher_review",
        "question": "d) Sketch the graph of the function, indicating all important features.",
        "a": "Sketch quartic showing maximum at (2,32), inflection points at (0,16) and (4/3, 25.48), and y-intercept at (0,16)."
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Differentiate to find \\( y' \\) and \\( y'' \\).",
        "workingOut": "y' = 24x^2 - 12x^3 = 12x^2(2 - x) \\quad \\text{and} \\quad y'' = 48x - 36x^2 = 12x(4 - 3x)"
      },
      {
        "explanation": "Solve \\( y' = 0 \\) to find critical points.",
        "workingOut": "12x^2(2-x) = 0 \\implies x = 0 \\, (y=16) \\quad \\text{and} \\quad x = 2 \\, (y=32)"
      },
      {
        "explanation": "Analyze signs of \\( y' \\) in a slope table.",
        "workingOut": "\\begin{array}{c|ccccc} x & -1 & 0 & 1 & 2 & 3 \\\\ \\hline y' & 36 & 0 & 12 & 0 & -108 \\\\ \\text{Slope} & / & - & / & - & \\backslash \\end{array}"
      },
      {
        "explanation": "Identify points of inflection where \\( y'' = 0 \\) and check for a concavity change.",
        "workingOut": "12x(4-3x) = 0 \\implies x = 0 \\text{ or } x = \\frac{4}{3}. \\, text{Since } y'' \\text{ changes sign across both, both are inflection points: } (0, 16) \\text{ and } (\\frac{4}{3}, frac{688}{27})"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [
          -2,
          40,
          4,
          -10
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-1.5,0], [3.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-5], [0,38]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [3.3, -1, 'x'], {fontSize: 14});\nboard.create('text', [-0.5, 36, 'y'], {fontSize: 14});\nvar f = function(x) { return 16 + 8*x*x*x - 3*x*x*x*x; };\nboard.create('functiongraph', [f, -1.2, 2.4], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [0, 16], {name: 'Inflection(0,16)', size: 3, color: 'red', label: {autoPosition: false, offset: [-110, -5]}});\nboard.create('point', [1.33, 25.48], {name: 'Inflection(1.33, 25.48)', size: 3, color: 'red', label: {autoPosition: false, offset: [10, -5]}});\nboard.create('point', [2, 32], {name: 'Max(2,32)', size: 3, color: 'red', label: {autoPosition: false, offset: [10, 10]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y12a-3d-q12",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "For the curve \\( y = 2x^3 - 9x^2 - 24x + 15 \\), find the range of values of \\( x \\) for which the curve satisfies each condition.",
    "t": "Concavity and points of inflection",
    "subQuestions": [
      {
        "id": "y12a-3d-q12a",
        "type": "short_answer",
        "question": "a) increasing, that is \\( y' > 0 \\)",
        "a": "x<-1 or x>4"
      },
      {
        "id": "y12a-3d-q12b",
        "type": "short_answer",
        "question": "b) decreasing, that is \\( y' < 0 \\)",
        "a": "-1<x<4"
      },
      {
        "id": "y12a-3d-q12c",
        "type": "short_answer",
        "question": "c) concave up, that is \\( y'' > 0 \\)",
        "a": "x>1.5"
      },
      {
        "id": "y12a-3d-q12d",
        "type": "short_answer",
        "question": "d) concave down, that is \\( y'' < 0 \\)",
        "a": "x<1.5"
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Differentiate once to find the first derivative.",
        "workingOut": "y' = 6x^2 - 18x - 24 = 6(x^2 - 3x - 4) = 6(x - 4)(x + 1)"
      },
      {
        "explanation": "Solve \\( y' > 0 \\) to find the increasing range.",
        "workingOut": "6(x-4)(x+1) > 0 \\implies x < -1 \\text{ or } x > 4"
      },
      {
        "explanation": "Solve \\( y' < 0 \\) to find the decreasing range.",
        "workingOut": "6(x-4)(x+1) < 0 \\implies -1 < x < 4"
      },
      {
        "explanation": "Differentiate again to obtain the second derivative.",
        "workingOut": "y'' = 12x - 18 = 6(2x - 3)"
      },
      {
        "explanation": "Solve \\( y'' > 0 \\) for concaving up.",
        "workingOut": "6(2x - 3) > 0 \\implies 2x > 3 \\implies x > 1.5"
      },
      {
        "explanation": "Solve \\( y'' < 0 \\) for concaving down.",
        "workingOut": "6(2x - 3) < 0 \\implies 2x < 3 \\implies x < 1.5"
      }
    ]
  },
  {
    "id": "y12a-3d-q13",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "For the curve \\( y = x^3 + 6x^2 - 15x + 12 \\), complete the following steps to analyze its inflection point and tangent.",
    "t": "Concavity and points of inflection",
    "subQuestions": [
      {
        "id": "y12a-3d-q13a",
        "type": "teacher_review",
        "question": "a) Find \\( y' \\) and \\( y'' \\).",
        "a": "y' = 3x^2 + 12x - 15, and y'' = 6x + 12."
      },
      {
        "id": "y12a-3d-q13b",
        "type": "teacher_review",
        "question": "b) Show that the curve has a point of inflection at \\( (-2, 58) \\).",
        "a": "y'' = 0 at x = -2; y(-2) = 58. Since y'' changes sign from negative (for x < -2) to positive (for x > -2), (-2, 58) is a point of inflection."
      },
      {
        "id": "y12a-3d-q13c",
        "type": "teacher_review",
        "question": "c) Show that the gradient of the tangent at the point of inflection is \\( -27 \\).",
        "a": "Evaluate y' at x = -2: y'(-2) = 3(-2)^2 + 12(-2) - 15 = 12 - 24 - 15 = -27."
      },
      {
        "id": "y12a-3d-q13d",
        "type": "short_answer",
        "question": "d) Hence find the equation of the tangent at the point of inflection. (Format: 'y = mx + c')",
        "a": "y = -27x + 4"
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Differentiate once and twice.",
        "workingOut": "y' = 3x^2 + 12x - 15 \\quad \\text{and} \\quad y'' = 6x + 12"
      },
      {
        "explanation": "Locate the point where \\( y'' = 0 \\) and evaluate \\( y \\).",
        "workingOut": "6x + 12 = 0 \\implies x = -2 \\implies y(-2) = (-2)^3 + 6(-2)^2 - 15(-2) + 12 = 58"
      },
      {
        "explanation": "Find the tangent gradient at \\( x = -2 \\).",
        "workingOut": "m = y'(-2) = 3(4) - 24 - 15 = -27"
      },
      {
        "explanation": "Use the point-slope formula to construct the line equation.",
        "workingOut": "y - 58 = -27(x + 2) \\implies y - 58 = -27x - 54 \\implies y = -27x + 4"
      }
    ]
  },
  {
    "id": "y12a-3d-q14",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Compare the nature of the stationary points of \\( f(x) = 2x^3 \\) and \\( g(x) = 3x^4 \\).",
    "t": "Concavity and points of inflection",
    "subQuestions": [
      {
        "id": "y12a-3d-q14a",
        "type": "teacher_review",
        "question": "a) Find \\( f'(x) \\), \\( f''(x) \\), \\( g'(x) \\) and \\( g''(x) \\).",
        "a": "f'(x) = 6x^2, f''(x) = 12x, g'(x) = 12x^3, and g''(x) = 36x^2."
      },
      {
        "id": "y12a-3d-q14b",
        "type": "teacher_review",
        "question": "b) Both functions have a stationary point at \\( (0, 0) \\). Evaluate \\( f''(0) \\) and \\( g''(0) \\). Can you determine the nature of the stationary points from this calculation?",
        "a": "f''(0) = 0 and g''(0) = 0. No, when the second derivative is zero, the second derivative test is inconclusive."
      },
      {
        "id": "y12a-3d-q14c",
        "type": "teacher_review",
        "question": "c) Use tables of values of \\( f'(x) \\) and \\( g'(x) \\) to determine the nature of the stationary points.",
        "a": "For f(x), f'(x) = 6x^2 is always non-negative, so (0,0) is a horizontal point of inflection. For g(x), g'(x) changes sign from negative (for x < 0) to positive (for x > 0), so (0,0) is a minimum."
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Differentiate each function twice.",
        "workingOut": "\\begin{aligned} f'(x) &= 6x^2, quad f''(x) = 12x \\\\ g'(x) &= 12x^3, quad g''(x) = 36x^2 \\end{aligned}"
      },
      {
        "explanation": "Show second derivatives at the origin are zero.",
        "workingOut": "f''(0) = 0 \\quad \\text{and} \\quad g''(0) = 0"
      },
      {
        "explanation": "Analyze first derivatives around the origin to determine natures.",
        "workingOut": "\\text{For } f(x): \\, f'(-1)=6 > 0, f'(1)=6 > 0 \\implies \\text{inflection. For } g(x): \\, g'(-1)=-12 < 0, g'(1)=12 > 0 \\implies \\text{minimum.}"
      }
    ]
  },
  {
    "id": "y12a-3d-q15",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Solve the following problems involving parameters, concavity, and inflection points.",
    "t": "Concavity and points of inflection",
    "subQuestions": [
      {
        "id": "y12a-3d-q15a",
        "type": "short_answer",
        "question": "a) Find \\( a \\) if the curve \\( y = x^3 - ax^2 + 4x - 5 \\) has an inflection at the point where \\( x = 3 \\).",
        "a": "9"
      },
      {
        "id": "y12a-3d-q15b",
        "type": "short_answer",
        "question": "b) For what values of \\( a \\) is \\( y = x^3 + 3ax^2 + 5x - 7 \\) concave up at the point where \\( x = -1 \\)? (Format: 'a>N')",
        "a": "a>1"
      },
      {
        "id": "y12a-3d-q15c",
        "type": "teacher_review",
        "question": "c) Find \\( a \\) and \\( b \\) if the curve \\( y = x^4 + ax^3 + bx^2 \\) has an inflection at \\( (1, 0) \\).",
        "a": "a = -2.5, b = 1.5"
      },
      {
        "id": "y12a-3d-q15d",
        "type": "short_answer",
        "question": "d) For what values of \\( a \\) is \\( y = x^4 + ax^3 - 3x^2 \\) concave up and increasing when \\( x = 1 \\)? (Format: 'a>N/M' e.g. 'a>2/3')",
        "a": "a>2/3"
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Part a: Find \\( y'' \\) and set \\( y''(3) = 0 \\).",
        "workingOut": "y' = 3x^2 - 2ax + 4 \\implies y'' = 6x - 2a \\implies 6(3) - 2a = 0 \\implies a = 9"
      },
      {
        "explanation": "Part b: Solve \\( y''(-1) > 0 \\).",
        "workingOut": "y' = 3x^2 + 6ax + 5 \\implies y'' = 6x + 6a \\implies -6 + 6a > 0 \\implies a > 1"
      },
      {
        "explanation": "Part c: Solve simultaneous equations \\( y(1) = 0 \\) and \\( y''(1) = 0 \\).",
        "workingOut": "\\begin{aligned} 1 + a + b = 0 &\\implies a + b = -1 \\\\ y'' = 12x^2 + 6ax + 2b &\\implies 12 + 6a + 2b = 0 \\implies 3a + b = -6 \\\\ \\text{Subtracting: } 2a = -5 &\\implies a = -2.5 \\implies b = 1.5 \\end{aligned}"
      },
      {
        "explanation": "Part d: Solve inequalities \\( y'(1) > 0 \\) and \\( y''(1) > 0 \\).",
        "workingOut": "\\begin{aligned} y' = 4x^3 + 3ax^2 - 6x &\\implies 4 + 3a - 6 > 0 \\implies 3a > 2 \\implies a > 2/3 \\\\ y'' = 12x^2 + 6ax - 6 &\\implies 12 + 6a - 6 > 0 \\implies 6a > -6 \\implies a > -1 \\\\ \\text{Combined: } a > 2/3 & \\end{aligned}"
      }
    ]
  },
  {
    "id": "y12a-3d-q16",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "The diagram shows the graph of the derivative \\( y = f'(x) \\) of the function \\( y = f(x) \\), with domain \\( x > 0 \\).",
    "t": "Concavity and points of inflection",
    "subQuestions": [
      {
        "id": "y12a-3d-q16a",
        "type": "short_answer",
        "question": "a) State whether the graph of \\( y = f(x) \\) is increasing or decreasing throughout its domain. (Answer 'increasing' or 'decreasing')",
        "a": "increasing"
      },
      {
        "id": "y12a-3d-q16b",
        "type": "short_answer",
        "question": "b) State whether the graph of \\( y = f(x) \\) is concave up or concave down throughout its domain. (Answer 'concave up' or 'concave down')",
        "a": "concave down"
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Analyze the sign of the first derivative \\( f'(x) \\). Since the graph of \\( y = f'(x) \\) lies completely above the x-axis, \\( f'(x) > 0 \\) for all \\( x > 0 \\).",
        "workingOut": "f'(x) > 0 \\implies \\text{increasing}"
      },
      {
        "explanation": "Analyze the slope of the first derivative graph to determine \\( f''(x) \\). Since \\( y = f'(x) \\) is a decreasing function, its derivative is negative.",
        "workingOut": "f''(x) = \\frac{d}{dx}[f'(x)] < 0 \\implies \\text{concave down}"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [
          -1,
          5,
          5,
          -1
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-0.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-0.5], [0,4.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.3, -0.3, 'x'], {fontSize: 14});\nboard.create('text', [-0.5, 4.2, \"f'(x)\"], {fontSize: 14});\nvar f = function(x) { return 4 / (x + 1); };\nboard.create('functiongraph', [f, 0.01, 4.2], {strokeColor: 'blue', strokeWidth: 2});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y12a-3d-q17",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 240,
    "question": "Describe the graphical shape of a continuous function \\( f(x) \\) around a point \\( x = a \\) under each set of derivative conditions.",
    "t": "Concavity and points of inflection",
    "subQuestions": [
      {
        "id": "y12a-3d-q17a",
        "type": "teacher_review",
        "question": "a) \\( f'(a) > 0 \\) and \\( f''(a) > 0 \\)",
        "a": "The curve is increasing and concave up (slanted upwards, bending upwards)."
      },
      {
        "id": "y12a-3d-q17b",
        "type": "teacher_review",
        "question": "b) \\( f'(a) > 0 \\) and \\( f''(a) < 0 \\)",
        "a": "The curve is increasing and concave down (slanted upwards, bending downwards)."
      },
      {
        "id": "y12a-3d-q17c",
        "type": "teacher_review",
        "question": "c) \\( f'(a) < 0 \\) and \\( f''(a) > 0 \\)",
        "a": "The curve is decreasing and concave up (slanted downwards, bending upwards)."
      },
      {
        "id": "y12a-3d-q17d",
        "type": "teacher_review",
        "question": "d) \\( f'(a) < 0 \\) and \\( f''(a) < 0 \\)",
        "a": "The curve is decreasing and concave down (slanted downwards, bending downwards)."
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Part a: A positive first derivative means rising, and a positive second derivative means bending up.",
        "workingOut": "f'(a) > 0 \\implies \\text{rising}, quad f''(a) > 0 \\implies \\text{concave up}"
      },
      {
        "explanation": "Part b: A positive first derivative means rising, and a negative second derivative means bending down.",
        "workingOut": "f'(a) > 0 \\implies \\text{rising}, quad f''(a) < 0 \\implies \\text{concave down}"
      },
      {
        "explanation": "Part c: A negative first derivative means falling, and a positive second derivative means bending up.",
        "workingOut": "f'(a) < 0 \\implies \\text{falling}, quad f''(a) > 0 \\implies \\text{concave up}"
      },
      {
        "explanation": "Part d: A negative first derivative means falling, and a negative second derivative means bending down.",
        "workingOut": "f'(a) < 0 \\implies \\text{falling}, quad f''(a) < 0 \\implies \\text{concave down}"
      }
    ]
  },
  {
    "id": "y12a-3d-q18",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 240,
    "question": "A function has equation \\( y = \\frac{1}{3}x^3 - 2x^2 + 7x - 5 \\). Complete the following steps.",
    "t": "Concavity and points of inflection",
    "subQuestions": [
      {
        "id": "y12a-3d-q18a",
        "type": "teacher_review",
        "question": "a) Show that the function has no stationary points.",
        "a": "y' = x^2 - 4x + 7. The discriminant of y' = 0 is \\( \\Delta = (-4)^2 - 4(1)(7) = -12 < 0 \\). Since \\( y' > 0 \\) for all \\( x \\), there are no real roots and thus no stationary points."
      },
      {
        "id": "y12a-3d-q18b",
        "type": "teacher_review",
        "question": "b) Show that there is a point of inflection.",
        "a": "y'' = 2x - 4 = 0 at x = 2; y(2) = 11/3. Since y'' changes sign from negative (for x < 2) to positive (for x > 2), (2, 11/3) is an inflection point."
      },
      {
        "id": "y12a-3d-q18c",
        "type": "teacher_review",
        "question": "c) How many \\( x \\)-intercepts does the graph of the function have? Justify your answer.",
        "a": "Exactly 1 x-intercept. Since f(x) is continuous and strictly increasing (y' > 0 everywhere), it must cross the x-axis exactly once."
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Differentiate \\( y = \\frac{1}{3}x^3 - 2x^2 + 7x - 5 \\) to find \\( y' \\).",
        "workingOut": "y' = x^2 - 4x + 7"
      },
      {
        "explanation": "Calculate the discriminant of the quadratic derivative.",
        "workingOut": "\\Delta = (-4)^2 - 4(1)(7) = 16 - 28 = -12 < 0"
      },
      {
        "explanation": "Differentiate again to find \\( y'' \\).",
        "workingOut": "y'' = 2x - 4"
      },
      {
        "explanation": "Solve \\( y'' = 0 \\) and evaluate \\( y(2) \\). Verify sign changes.",
        "workingOut": "2x - 4 = 0 \\implies x = 2 \\implies y(2) = 11/3. \\, y'' < 0 \\text{ for } x<2 \\text{, and } y''>0 \\text{ for } x>2."
      },
      {
        "explanation": "Deduce number of intercepts.",
        "workingOut": "y' > 0 \\implies \\text{strictly increasing} \\implies \\text{exactly 1 x-intercept}"
      }
    ]
  },
  {
    "id": "y12a-3d-q19",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 240,
    "question": "A curve has equation \\( y = ax^3 + bx^2 + cx + d \\) and crosses the \\( x \\)-axis at \\( x = -1 \\). It has a turning point at \\( (0, 8) \\) and a point of inflection at \\( x = 1 \\). Complete the steps to find the parameters.",
    "t": "Concavity and points of inflection",
    "subQuestions": [
      {
        "id": "y12a-3d-q19a",
        "type": "short_answer",
        "question": "a) Find the value of \\( a \\).",
        "a": "2"
      },
      {
        "id": "y12a-3d-q19b",
        "type": "short_answer",
        "question": "b) Find the value of \\( b \\).",
        "a": "-6"
      },
      {
        "id": "y12a-3d-q19c",
        "type": "short_answer",
        "question": "c) Find the value of \\( c \\).",
        "a": "0"
      },
      {
        "id": "y12a-3d-q19d",
        "type": "short_answer",
        "question": "d) Find the value of \\( d \\).",
        "a": "8"
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Use the coordinates of the turning point \\( (0, 8) \\) to find \\( d \\).",
        "workingOut": "y(0) = a(0)^3 + b(0)^2 + c(0) + d = 8 \\implies d = 8"
      },
      {
        "explanation": "Find the derivative \\( y' \\). Since there is a turning point at \\( x = 0 \\), set \\( y'(0) = 0 \\) to find \\( c \\).",
        "workingOut": "y' = 3ax^2 + 2bx + c \\implies y'(0) = c = 0"
      },
      {
        "explanation": "Find \\( y'' \\). Since there is an inflection point at \\( x = 1 \\), set \\( y''(1) = 0 \\) to relate \\( a \\) and \\( b \\).",
        "workingOut": "y'' = 6ax + 2b \\implies 6a(1) + 2b = 0 \\implies b = -3a"
      },
      {
        "explanation": "Use the \\( x \\)-intercept at \\( x = -1 \\). Set \\( y(-1) = 0 \\) and substitute \\( b = -3a \\) and \\( d = 8 \\).",
        "workingOut": "\\begin{aligned} y(-1) = a(-1)^3 + b(-1)^2 + 8 = 0 &\\implies -a + b + 8 = 0 \\\\ -a - 3a + 8 = 0 &\\implies -4a = -8 \\implies a = 2 \\end{aligned}"
      },
      {
        "explanation": "Solve for \\( b \\).",
        "workingOut": "b = -3a = -3(2) = -6"
      }
    ]
  }
];
