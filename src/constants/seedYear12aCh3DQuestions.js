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
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find \\( f''(x) \\) for \\( f(x) = 2x^3 - 6x^2 \\). Evaluate \\( f''(0) \\) to determine whether the curve is concave up or concave down at \\( x = 0 \\).",
    "a": "concave down",
    "t": "Concavity and points of inflection",
    "solutionSteps": [
      {
        "explanation": "Find the first derivative.",
        "workingOut": "\\begin{aligned} f'(x) &= 2 \\times 3x^{3-1} - 6 \\times 2x^{2-1} \\\\ &= 6x^2 - 12x \\end{aligned}"
      },
      {
        "explanation": "Find the second derivative.",
        "workingOut": "\\begin{aligned} f''(x) &= 6 \\times 2x^{2-1} - 12 \\\\ &= 12x - 12 \\end{aligned}"
      },
      {
        "explanation": "Evaluate \\( f''(x) \\) at \\( x = 0 \\).",
        "workingOut": "\\begin{aligned} f''(0) &= 12(0) - 12 \\\\ &= -12 \\end{aligned}"
      },
      {
        "explanation": "Determine concavity based on the sign of \\( f''(0) \\).",
        "workingOut": "\\text{Since } f''(0) = -12 < 0 \\text{, the curve is concave down.}"
      }
    ],
    "opts": [
      "Concave up because \\( f''(0) = -12 < 0 \\)",
      "Concave down because \\( f''(0) = 12 > 0 \\)",
      "Concave up because \\( f''(0) = 12 > 0 \\)",
      "Concave down because \\( f''(0) = -12 < 0 \\)"
    ],
    "options": [
      {
        "text": "Concave up because \\( f''(0) = -12 < 0 \\)",
        "imageUrl": ""
      },
      {
        "text": "Concave down because \\( f''(0) = 12 > 0 \\)",
        "imageUrl": ""
      },
      {
        "text": "Concave up because \\( f''(0) = 12 > 0 \\)",
        "imageUrl": ""
      },
      {
        "text": "Concave down because \\( f''(0) = -12 < 0 \\)",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "answerStr": "3"
  },
  {
    "id": "y12a-3d-q2b",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find \\( f''(x) \\) for \\( f(x) = x^3 + 3x^2 - 4x + 9 \\). Evaluate \\( f''(0) \\) to determine whether the curve is concave up or concave down at \\( x = 0 \\).",
    "a": "concave up",
    "t": "Concavity and points of inflection",
    "solutionSteps": [
      {
        "explanation": "Find the first derivative.",
        "workingOut": "\\begin{aligned} f'(x) &= 3x^2 + 3 \\times 2x - 4 \\\\ &= 3x^2 + 6x - 4 \\end{aligned}"
      },
      {
        "explanation": "Find the second derivative.",
        "workingOut": "\\begin{aligned} f''(x) &= 3 \\times 2x + 6 \\\\ &= 6x + 6 \\end{aligned}"
      },
      {
        "explanation": "Evaluate \\( f''(x) \\) at \\( x = 0 \\).",
        "workingOut": "\\begin{aligned} f''(0) &= 6(0) + 6 \\\\ &= 6 \\end{aligned}"
      },
      {
        "explanation": "Determine concavity based on the sign of \\( f''(0) \\).",
        "workingOut": "\\text{Since } f''(0) = 6 > 0 \\text{, the curve is concave up.}"
      }
    ],
    "opts": [
      "Concave up because \\( f''(0) = -6 < 0 \\)",
      "Concave down because \\( f''(0) = -6 < 0 \\)",
      "Concave up because \\( f''(0) = 6 > 0 \\)",
      "Concave down because \\( f''(0) = 6 > 0 \\)"
    ],
    "options": [
      {
        "text": "Concave up because \\( f''(0) = -6 < 0 \\)",
        "imageUrl": ""
      },
      {
        "text": "Concave down because \\( f''(0) = -6 < 0 \\)",
        "imageUrl": ""
      },
      {
        "text": "Concave up because \\( f''(0) = 6 > 0 \\)",
        "imageUrl": ""
      },
      {
        "text": "Concave down because \\( f''(0) = 6 > 0 \\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "answerStr": "2"
  },
  {
    "id": "y12a-3d-q2c",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find \\( f''(x) \\) for \\( f(x) = 2x^4 + 3x^2 - 5 \\). Evaluate \\( f''(0) \\) to determine whether the curve is concave up or concave down at \\( x = 0 \\).",
    "a": "concave up",
    "t": "Concavity and points of inflection",
    "solutionSteps": [
      {
        "explanation": "Find the first derivative.",
        "workingOut": "\\begin{aligned} f'(x) &= 2 \\times 4x^3 + 3 \\times 2x \\\\ &= 8x^3 + 6x \\end{aligned}"
      },
      {
        "explanation": "Find the second derivative.",
        "workingOut": "\\begin{aligned} f''(x) &= 8 \\times 3x^2 + 6 \\\\ &= 24x^2 + 6 \\end{aligned}"
      },
      {
        "explanation": "Evaluate \\( f''(x) \\) at \\( x = 0 \\).",
        "workingOut": "\\begin{aligned} f''(0) &= 24(0)^2 + 6 \\\\ &= 6 \\end{aligned}"
      },
      {
        "explanation": "Determine concavity based on the sign of \\( f''(0) \\).",
        "workingOut": "\\text{Since } f''(0) = 6 > 0 \\text{, the curve is concave up.}"
      }
    ],
    "opts": [
      "Concave up because \\( f''(0) = -5 < 0 \\)",
      "Concave down because \\( f''(0) = -5 < 0 \\)",
      "Concave up because \\( f''(0) = 6 > 0 \\)",
      "Concave down because \\( f''(0) = 6 > 0 \\)"
    ],
    "options": [
      {
        "text": "Concave up because \\( f''(0) = -5 < 0 \\)",
        "imageUrl": ""
      },
      {
        "text": "Concave down because \\( f''(0) = -5 < 0 \\)",
        "imageUrl": ""
      },
      {
        "text": "Concave up because \\( f''(0) = 6 > 0 \\)",
        "imageUrl": ""
      },
      {
        "text": "Concave down because \\( f''(0) = 6 > 0 \\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "answerStr": "2"
  },
  {
    "id": "y12a-3d-q2d",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find \\( f''(x) \\) for \\( f(x) = 8x - 5x^2 - 3x^4 \\). Evaluate \\( f''(0) \\) to determine whether the curve is concave up or concave down at \\( x = 0 \\).",
    "a": "concave down",
    "t": "Concavity and points of inflection",
    "solutionSteps": [
      {
        "explanation": "Find the first derivative.",
        "workingOut": "\\begin{aligned} f'(x) &= 8 - 5 \\times 2x - 3 \\times 4x^3 \\\\ &= 8 - 10x - 12x^3 \\end{aligned}"
      },
      {
        "explanation": "Find the second derivative.",
        "workingOut": "\\begin{aligned} f''(x) &= -10 - 12 \\times 3x^2 \\\\ &= -10 - 36x^2 \\end{aligned}"
      },
      {
        "explanation": "Evaluate \\( f''(x) \\) at \\( x = 0 \\).",
        "workingOut": "\\begin{aligned} f''(0) &= -10 - 36(0)^2 \\\\ &= -10 \\end{aligned}"
      },
      {
        "explanation": "Determine concavity based on the sign of \\( f''(0) \\).",
        "workingOut": "\\text{Since } f''(0) = -10 < 0 \\text{, the curve is concave down.}"
      }
    ],
    "opts": [
      "Concave down because \\( f''(0) = -10 < 0 \\)",
      "Concave up because \\( f''(0) = 8 > 0 \\)",
      "Concave down because \\( f''(0) = 8 > 0 \\)",
      "Concave up because \\( f''(0) = -10 < 0 \\)"
    ],
    "options": [
      {
        "text": "Concave down because \\( f''(0) = -10 < 0 \\)",
        "imageUrl": ""
      },
      {
        "text": "Concave up because \\( f''(0) = 8 > 0 \\)",
        "imageUrl": ""
      },
      {
        "text": "Concave down because \\( f''(0) = 8 > 0 \\)",
        "imageUrl": ""
      },
      {
        "text": "Concave up because \\( f''(0) = -10 < 0 \\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "answerStr": "0"
  },
  {
    "id": "y12a-3d-q3a",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Given \\( f'(3) = 0 \\), note that \\( f(x) = x^2 - 6x + 9 \\) has a stationary point at \\( x = 3 \\). Then evaluate \\( f''(3) \\) to determine whether this stationary point is a maximum, minimum, or a horizontal point of inflection.",
    "a": "minimum",
    "t": "Concavity and points of inflection",
    "solutionSteps": [
      {
        "explanation": "Find the first derivative.",
        "workingOut": "\\begin{aligned} f'(x) &= 2x - 6 \\end{aligned}"
      },
      {
        "explanation": "Verify the stationary point by evaluating \\( f'(3) \\).",
        "workingOut": "\\begin{aligned} f'(3) &= 2(3) - 6 \\\\ &= 6 - 6 \\\\ &= 0 \\end{aligned}"
      },
      {
        "explanation": "Find the second derivative.",
        "workingOut": "\\begin{aligned} f''(x) &= 2 \\end{aligned}"
      },
      {
        "explanation": "Determine the nature of the stationary point.",
        "workingOut": "\\text{Since } f''(3) = 2 > 0 \\text{, the point at } x = 3 \\text{ is a local minimum.}"
      }
    ],
    "opts": [
      "Maximum because \\( f''(3) = 2 > 0 \\)",
      "Minimum because \\( f''(3) = 2 > 0 \\)",
      "Maximum because \\( f''(3) = -2 < 0 \\)",
      "Minimum because \\( f''(3) = -2 < 0 \\)"
    ],
    "options": [
      {
        "text": "Maximum because \\( f''(3) = 2 > 0 \\)",
        "imageUrl": ""
      },
      {
        "text": "Minimum because \\( f''(3) = 2 > 0 \\)",
        "imageUrl": ""
      },
      {
        "text": "Maximum because \\( f''(3) = -2 < 0 \\)",
        "imageUrl": ""
      },
      {
        "text": "Minimum because \\( f''(3) = -2 < 0 \\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "answerStr": "1"
  },
  {
    "id": "y12a-3d-q3b",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Given \\( f'(3) = 0 \\), note that \\( f(x) = 12 + 6x - x^2 \\) has a stationary point at \\( x = 3 \\). Then evaluate \\( f''(3) \\) to determine whether this stationary point is a maximum, minimum, or a horizontal point of inflection.",
    "a": "maximum",
    "t": "Concavity and points of inflection",
    "solutionSteps": [
      {
        "explanation": "Find the first derivative.",
        "workingOut": "\\begin{aligned} f'(x) &= 6 - 2x \\end{aligned}"
      },
      {
        "explanation": "Verify the stationary point by evaluating \\( f'(3) \\).",
        "workingOut": "\\begin{aligned} f'(3) &= 6 - 2(3) \\\\ &= 6 - 6 \\\\ &= 0 \\end{aligned}"
      },
      {
        "explanation": "Find the second derivative.",
        "workingOut": "\\begin{aligned} f''(x) &= -2 \\end{aligned}"
      },
      {
        "explanation": "Determine the nature of the stationary point.",
        "workingOut": "\\text{Since } f''(3) = -2 < 0 \\text{, the point at } x = 3 \\text{ is a local maximum.}"
      }
    ],
    "opts": [
      "Maximum because \\( f''(3) = -2 < 0 \\)",
      "Minimum because \\( f''(3) = 2 > 0 \\)",
      "Maximum because \\( f''(3) = 2 > 0 \\)",
      "Minimum because \\( f''(3) = -2 < 0 \\)"
    ],
    "options": [
      {
        "text": "Maximum because \\( f''(3) = -2 < 0 \\)",
        "imageUrl": ""
      },
      {
        "text": "Minimum because \\( f''(3) = 2 > 0 \\)",
        "imageUrl": ""
      },
      {
        "text": "Maximum because \\( f''(3) = 2 > 0 \\)",
        "imageUrl": ""
      },
      {
        "text": "Minimum because \\( f''(3) = -2 < 0 \\)",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "answerStr": "0"
  },
  {
    "id": "y12a-3d-q3c",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Given \\( f'(3) = 0 \\), note that \\( f(x) = x^3 - 27x \\) has a stationary point at \\( x = 3 \\). Then evaluate \\( f''(3) \\) to determine whether this stationary point is a maximum, minimum, or a horizontal point of inflection.",
    "a": "minimum",
    "t": "Concavity and points of inflection",
    "solutionSteps": [
      {
        "explanation": "Find the first derivative.",
        "workingOut": "\\begin{aligned} f'(x) &= 3x^2 - 27 \\end{aligned}"
      },
      {
        "explanation": "Verify the stationary point by evaluating \\( f'(3) \\).",
        "workingOut": "\\begin{aligned} f'(3) &= 3(3)^2 - 27 \\\\ &= 3(9) - 27 \\\\ &= 27 - 27 \\\\ &= 0 \\end{aligned}"
      },
      {
        "explanation": "Find the second derivative.",
        "workingOut": "\\begin{aligned} f''(x) &= 6x \\end{aligned}"
      },
      {
        "explanation": "Determine the nature of the stationary point.",
        "workingOut": "\\begin{aligned} f''(3) &= 6(3) = 18 > 0 \\end{aligned} \\\\ \\text{Since } f''(3) > 0 \\text{, the point at } x = 3 \\text{ is a local minimum.}"
      }
    ],
    "opts": [
      "Minimum because \\( f''(3) = -18 < 0 \\)",
      "Minimum because \\( f''(3) = 18 > 0 \\)",
      "Maximum because \\( f''(3) = -18 < 0 \\)",
      "Maximum because \\( f''(3) = 18 > 0 \\)"
    ],
    "options": [
      {
        "text": "Minimum because \\( f''(3) = -18 < 0 \\)",
        "imageUrl": ""
      },
      {
        "text": "Minimum because \\( f''(3) = 18 > 0 \\)",
        "imageUrl": ""
      },
      {
        "text": "Maximum because \\( f''(3) = -18 < 0 \\)",
        "imageUrl": ""
      },
      {
        "text": "Maximum because \\( f''(3) = 18 > 0 \\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "answerStr": "1"
  },
  {
    "id": "y12a-3d-q3d",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Given \\( f'(3) = 0 \\), note that \\( f(x) = x^3 - 3x^2 - 9x + 5 \\) has a stationary point at \\( x = 3 \\). Then evaluate \\( f''(3) \\) to determine whether this stationary point is a maximum, minimum, or a horizontal point of inflection.",
    "a": "minimum",
    "t": "Concavity and points of inflection",
    "solutionSteps": [
      {
        "explanation": "Find the first derivative.",
        "workingOut": "\\begin{aligned} f'(x) &= 3x^2 - 6x - 9 \\end{aligned}"
      },
      {
        "explanation": "Verify the stationary point by evaluating \\( f'(3) \\).",
        "workingOut": "\\begin{aligned} f'(3) &= 3(3)^2 - 6(3) - 9 \\\\ &= 27 - 18 - 9 \\\\ &= 0 \\end{aligned}"
      },
      {
        "explanation": "Find the second derivative.",
        "workingOut": "\\begin{aligned} f''(x) &= 6x - 6 \\end{aligned}"
      },
      {
        "explanation": "Determine the nature of the stationary point.",
        "workingOut": "\\begin{aligned} f''(3) &= 6(3) - 6 = 18 - 6 = 12 > 0 \\end{aligned} \\\\ \\text{Since } f''(3) > 0 \\text{, the point at } x = 3 \\text{ is a local minimum.}"
      }
    ],
    "opts": [
      "Maximum because \\( f''(3) = -12 < 0 \\)",
      "Minimum because \\( f''(3) = -12 < 0 \\)",
      "Minimum because \\( f''(3) = 12 > 0 \\)",
      "Maximum because \\( f''(3) = 12 > 0 \\)"
    ],
    "options": [
      {
        "text": "Maximum because \\( f''(3) = -12 < 0 \\)",
        "imageUrl": ""
      },
      {
        "text": "Minimum because \\( f''(3) = -12 < 0 \\)",
        "imageUrl": ""
      },
      {
        "text": "Minimum because \\( f''(3) = 12 > 0 \\)",
        "imageUrl": ""
      },
      {
        "text": "Maximum because \\( f''(3) = 12 > 0 \\)",
        "imageUrl": ""
      }
    ],
    "answer": "2",
    "answerStr": "2"
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
        "type": "multiple_choice",
        "question": "a) Explain why \\( y = x^2 - 5x + 9 \\) is concave up for all values of \\( x \\).",
        "a": "The second derivative is \\( d^2y/dx^2 = 2 \\). Since this is positive and constant for all \\( x \\), the curve is concave up everywhere.",
        "opts": [
          "\\( y'' = 2x - 5 \\), which is positive for \\( x > 2.5 \\)",
          "\\( y'' = 2x \\), which is positive for \\( x > 0 \\)",
          "\\( y'' = 2 \\), which is always positive",
          "\\( y'' = -5 \\), which is always negative"
        ],
        "solutionSteps": [
          {
            "explanation": "Find the first derivative.",
            "workingOut": "\\begin{aligned} y' &= 2x - 5 \\end{aligned}"
          },
          {
            "explanation": "Find the second derivative.",
            "workingOut": "\\begin{aligned} y'' &= 2 \\end{aligned}"
          },
          {
            "explanation": "Determine concavity.",
            "workingOut": "\\text{Since } y'' = 2 > 0 \\text{ for all } x \\text{, the curve is always concave up.}"
          }
        ],
        "options": [
          {
            "text": "\\( y'' = 2x - 5 \\), which is positive for \\( x > 2.5 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( y'' = 2x \\), which is positive for \\( x > 0 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( y'' = 2 \\), which is always positive",
            "imageUrl": ""
          },
          {
            "text": "\\( y'' = -5 \\), which is always negative",
            "imageUrl": ""
          }
        ],
        "answer": "2",
        "answerStr": "2"
      },
      {
        "id": "y12a-3d-q4b",
        "type": "multiple_choice",
        "question": "b) Explain why \\( y = -4x^2 + 3x - 8 \\) is concave down for all values of \\( x \\).",
        "a": "The second derivative is \\( d^2y/dx^2 = -8 \\). Since this is negative and constant for all \\( x \\), the curve is concave down everywhere.",
        "opts": [
          "\\( y'' = -8x + 3 \\), which is negative for \\( x > \\frac{3}{8} \\)",
          "\\( y'' = -8x \\), which is negative for \\( x > 0 \\)",
          "\\( y'' = 3 \\), which is always positive",
          "\\( y'' = -8 \\), which is always negative"
        ],
        "solutionSteps": [
          {
            "explanation": "Find the first derivative.",
            "workingOut": "\\begin{aligned} y' &= -8x + 3 \\end{aligned}"
          },
          {
            "explanation": "Find the second derivative.",
            "workingOut": "\\begin{aligned} y'' &= -8 \\end{aligned}"
          },
          {
            "explanation": "Determine concavity.",
            "workingOut": "\\text{Since } y'' = -8 < 0 \\text{ for all } x \\text{, the curve is always concave down.}"
          }
        ],
        "options": [
          {
            "text": "\\( y'' = -8x + 3 \\), which is negative for \\( x > \\frac{3}{8} \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( y'' = -8x \\), which is negative for \\( x > 0 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( y'' = 3 \\), which is always positive",
            "imageUrl": ""
          },
          {
            "text": "\\( y'' = -8 \\), which is always negative",
            "imageUrl": ""
          }
        ],
        "answer": "3",
        "answerStr": "3"
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
        "type": "multiple_choice",
        "question": "a) Find the second derivative \\( \\frac{d^2y}{dx^2} \\) of \\( y = x^3 - 6x^2 - 9x + 4 \\).",
        "a": "dy/dx = 3x^2 - 12x - 9, so d^2y/dx^2 = 6x - 12.",
        "opts": [
          "\\( 6x + 12 \\)",
          "\\( 6x - 12 \\)",
          "\\( 3x^2 - 12x - 9 \\)",
          "\\( 6x - 9 \\)"
        ],
        "solutionSteps": [
          {
            "explanation": "Find the first derivative.",
            "workingOut": "\\begin{aligned} \\frac{dy}{dx} &= 3x^2 - 12x - 9 \\end{aligned}"
          },
          {
            "explanation": "Find the second derivative.",
            "workingOut": "\\begin{aligned} \\frac{d^2y}{dx^2} &= 6x - 12 \\end{aligned}"
          }
        ],
        "options": [
          {
            "text": "\\( 6x + 12 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( 6x - 12 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( 3x^2 - 12x - 9 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( 6x - 9 \\)",
            "imageUrl": ""
          }
        ],
        "answer": "1",
        "answerStr": "1"
      },
      {
        "id": "y12a-3d-q5bi",
        "type": "multiple_choice",
        "question": "b) i) Find the values of \\( x \\) for which the curve is concave up.",
        "a": "x>2",
        "opts": [
          "\\( x < -2 \\)",
          "\\( x < 2 \\)",
          "\\( x > -2 \\)",
          "\\( x > 2 \\)"
        ],
        "solutionSteps": [
          {
            "explanation": "The curve is concave up when the second derivative is positive.",
            "workingOut": "\\begin{aligned} \\frac{d^2y}{dx^2} &> 0 \\\\ 6x - 12 &> 0 \\\\ 6x &> 12 \\\\ x &> 2 \\end{aligned}"
          }
        ],
        "options": [
          {
            "text": "\\( x < -2 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( x < 2 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( x > -2 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( x > 2 \\)",
            "imageUrl": ""
          }
        ],
        "answer": "3",
        "answerStr": "3"
      },
      {
        "id": "y12a-3d-q5bii",
        "type": "multiple_choice",
        "question": "b) ii) Find the values of \\( x \\) for which the curve is concave down.",
        "a": "x<2",
        "opts": [
          "\\( x < -2 \\)",
          "\\( x < 2 \\)",
          "\\( x > -2 \\)",
          "\\( x > 2 \\)"
        ],
        "solutionSteps": [
          {
            "explanation": "The curve is concave down when the second derivative is negative.",
            "workingOut": "\\begin{aligned} \\frac{d^2y}{dx^2} &< 0 \\\\ 6x - 12 &< 0 \\\\ 6x &< 12 \\\\ x &< 2 \\end{aligned}"
          }
        ],
        "options": [
          {
            "text": "\\( x < -2 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( x < 2 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( x > -2 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( x > 2 \\)",
            "imageUrl": ""
          }
        ],
        "answer": "1",
        "answerStr": "1"
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
        "type": "multiple_choice",
        "question": "a) Find the second derivative \\( \\frac{d^2y}{dx^2} \\) of \\( y = 2x^3 - 3x^2 - 12x + 7 \\).",
        "a": "dy/dx = 6x^2 - 6x - 12, so d^2y/dx^2 = 12x - 6.",
        "opts": [
          "\\( 12x - 6 \\)",
          "\\( 6x^2 - 6x - 12 \\)",
          "\\( 12x - 12 \\)",
          "\\( 12x + 6 \\)"
        ],
        "solutionSteps": [
          {
            "explanation": "Find the first derivative.",
            "workingOut": "\\begin{aligned} \\frac{dy}{dx} &= 6x^2 - 6x - 12 \\end{aligned}"
          },
          {
            "explanation": "Find the second derivative.",
            "workingOut": "\\begin{aligned} \\frac{d^2y}{dx^2} &= 12x - 6 \\end{aligned}"
          }
        ],
        "options": [
          {
            "text": "\\( 12x - 6 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( 6x^2 - 6x - 12 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( 12x - 12 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( 12x + 6 \\)",
            "imageUrl": ""
          }
        ],
        "answer": "0",
        "answerStr": "0"
      },
      {
        "id": "y12a-3d-q6bi",
        "type": "multiple_choice",
        "question": "b) i) Find the values of \\( x \\) for which the curve is concave up.",
        "a": "x>0.5",
        "opts": [
          "\\( x > 2 \\)",
          "\\( x < -0.5 \\)",
          "\\( x < 0.5 \\)",
          "\\( x > 0.5 \\)"
        ],
        "solutionSteps": [
          {
            "explanation": "The curve is concave up when the second derivative is positive.",
            "workingOut": "\\begin{aligned} \\frac{d^2y}{dx^2} &> 0 \\\\ 12x - 6 &> 0 \\\\ 12x &> 6 \\\\ x &> 0.5 \\end{aligned}"
          }
        ],
        "options": [
          {
            "text": "\\( x > 2 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( x < -0.5 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( x < 0.5 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( x > 0.5 \\)",
            "imageUrl": ""
          }
        ],
        "answer": "3",
        "answerStr": "3"
      },
      {
        "id": "y12a-3d-q6bii",
        "type": "multiple_choice",
        "question": "b) ii) Find the values of \\( x \\) for which the curve is concave down.",
        "a": "x<0.5",
        "opts": [
          "\\( x < 0.5 \\)",
          "\\( x > 0.5 \\)",
          "\\( x > -0.5 \\)",
          "\\( x < 2 \\)"
        ],
        "solutionSteps": [
          {
            "explanation": "The curve is concave down when the second derivative is negative.",
            "workingOut": "\\begin{aligned} \\frac{d^2y}{dx^2} &< 0 \\\\ 12x - 6 &< 0 \\\\ 12x &< 6 \\\\ x &< 0.5 \\end{aligned}"
          }
        ],
        "options": [
          {
            "text": "\\( x < 0.5 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( x > 0.5 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( x > -0.5 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( x < 2 \\)",
            "imageUrl": ""
          }
        ],
        "answer": "0",
        "answerStr": "0"
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
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "A function has second derivative \\( y'' = 5x^2(x - 4)^3(x + 1) \\). Determine the \\( x \\)-coordinates of the points of inflection on the graph of the function. If there are multiple values, list them in ascending order, separated by a comma (e.g. '-1,4').",
    "a": "-1,4",
    "t": "Concavity and points of inflection",
    "solutionSteps": [
      {
        "explanation": "Set the second derivative to zero to find potential inflection points.",
        "workingOut": "\\begin{aligned} y'' &= 0 \\\\ 5x^2(x - 4)^3(x + 1) &= 0 \\\\ x &= 0, 4, -1 \\end{aligned}"
      },
      {
        "explanation": "Analyze the sign change of \\( y'' \\) around each root. At \\( x = 0 \\), the factor \\( x^2 \\) has an even power.",
        "workingOut": "\\text{No sign change at } x = 0 \\implies \\text{not an inflection point}"
      },
      {
        "explanation": "At \\( x = -1 \\) and \\( x = 4 \\), the factors \\( (x+1) \\) and \\( (x-4)^3 \\) have odd powers.",
        "workingOut": "\\text{Sign changes at } x = -1 \\text{ and } x = 4"
      },
      {
        "explanation": "State the x-coordinates of the inflection points.",
        "workingOut": "x = -1, 4"
      }
    ],
    "opts": [
      "\\( 0, 4 \\)",
      "\\( -1, 4 \\)",
      "\\( -1, 0 \\)",
      "\\( -1, 0, 4 \\)"
    ],
    "options": [
      {
        "text": "\\( 0, 4 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( -1, 4 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( -1, 0 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( -1, 0, 4 \\)",
        "imageUrl": ""
      }
    ],
    "answer": "1",
    "answerStr": "1"
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
        "type": "multiple_choice",
        "question": "Find \\( y' \\) and \\( y'' \\) for \\( y = x^3 - 3x^2 - 9x + 13 \\).",
        "a": "f'(x) = 3x^2 - 12 = 3(x-2)(x+2), and f''(x) = d/dx[3x^2-12] = 6x.",
        "opts": [
          "\\( y' = 3x^2 - 6x - 9 \\), \\( y'' = 6x \\)",
          "\\( y' = 3x^2 - 6x \\), \\( y'' = 6x - 6 \\)",
          "\\( y' = 3x^2 - 9 \\), \\( y'' = 6x \\)",
          "\\( y' = 3x^2 - 6x - 9 \\), \\( y'' = 6x - 6 \\)"
        ],
        "solutionSteps": [
          {
            "explanation": "Find the first derivative.",
            "workingOut": "\\begin{aligned} y' &= 3x^2 - 2 \\times 3x - 9 \\\\ &= 3x^2 - 6x - 9 \\end{aligned}"
          },
          {
            "explanation": "Find the second derivative.",
            "workingOut": "\\begin{aligned} y'' &= 2 \\times 3x - 6 \\\\ &= 6x - 6 \\end{aligned}"
          }
        ],
        "options": [
          {
            "text": "\\( y' = 3x^2 - 6x - 9 \\), \\( y'' = 6x \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( y' = 3x^2 - 6x \\), \\( y'' = 6x - 6 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( y' = 3x^2 - 9 \\), \\( y'' = 6x \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( y' = 3x^2 - 6x - 9 \\), \\( y'' = 6x - 6 \\)",
            "imageUrl": ""
          }
        ],
        "answer": "3",
        "answerStr": "3"
      },
      {
        "id": "y12a-3d-q8b",
        "type": "multiple_choice",
        "question": "Find the stationary points of \\( y = x^3 - 3x^2 - 9x + 13 \\) and determine their nature.",
        "a": "Stationary points are at (2, -16) and (-2, 16).",
        "opts": [
          "Max at \\( (-1, 18) \\), Min at \\( (3, -14) \\)",
          "Max at \\( (-1, 13) \\), Min at \\( (3, -14) \\)",
          "Min at \\( (-1, 13) \\), Max at \\( (3, 14) \\)",
          "Min at \\( (-1, 18) \\), Max at \\( (3, -14) \\)"
        ],
        "solutionSteps": [
          {
            "explanation": "Set the first derivative to zero.",
            "workingOut": "\\begin{aligned} 3x^2 - 6x - 9 &= 0 \\\\ 3(x^2 - 2x - 3) &= 0 \\\\ 3(x - 3)(x + 1) &= 0 \\\\ x &= 3, -1 \\end{aligned}"
          },
          {
            "explanation": "Find the y-coordinates.",
            "workingOut": "\\begin{aligned} y(3) &= 3^3 - 3(3)^2 - 9(3) + 13 = 27 - 27 - 27 + 13 = -14 \\\\ y(-1) &= (-1)^3 - 3(-1)^2 - 9(-1) + 13 = -1 - 3 + 9 + 13 = 18 \\end{aligned}"
          },
          {
            "explanation": "Determine nature using the second derivative.",
            "workingOut": "\\begin{aligned} y''(3) &= 6(3) - 6 = 12 > 0 \\implies \\text{Minimum at } (3, -14) \\\\ y''(-1) &= 6(-1) - 6 = -12 < 0 \\implies \\text{Maximum at } (-1, 18) \\end{aligned}"
          }
        ],
        "options": [
          {
            "text": "Max at \\( (-1, 18) \\), Min at \\( (3, -14) \\)",
            "imageUrl": ""
          },
          {
            "text": "Max at \\( (-1, 13) \\), Min at \\( (3, -14) \\)",
            "imageUrl": ""
          },
          {
            "text": "Min at \\( (-1, 13) \\), Max at \\( (3, 14) \\)",
            "imageUrl": ""
          },
          {
            "text": "Min at \\( (-1, 18) \\), Max at \\( (3, -14) \\)",
            "imageUrl": ""
          }
        ],
        "answer": "0",
        "answerStr": "0"
      },
      {
        "id": "y12a-3d-q8c",
        "type": "multiple_choice",
        "question": "Find the coordinates of the point of inflection.",
        "a": "f''(2) = 12 > 0 (minimum); f''(-2) = -12 < 0 (maximum).",
        "opts": [
          "\\( (-1, 18) \\)",
          "\\( (1, 2) \\)",
          "\\( (3, -14) \\)",
          "\\( (0, 13) \\)"
        ],
        "solutionSteps": [
          {
            "explanation": "Set the second derivative to zero.",
            "workingOut": "\\begin{aligned} y'' &= 6x - 6 = 0 \\\\ 6x &= 6 \\\\ x &= 1 \\end{aligned}"
          },
          {
            "explanation": "Find the y-coordinate.",
            "workingOut": "\\begin{aligned} y(1) &= 1^3 - 3(1)^2 - 9(1) + 13 \\\\ &= 1 - 3 - 9 + 13 \\\\ &= 2 \\end{aligned}"
          },
          {
            "explanation": "Verify concavity changes.",
            "workingOut": "\\text{For } x < 1, y'' < 0. \\text{ For } x > 1, y'' > 0. \\text{ Thus, } (1, 2) \\text{ is a point of inflection.}"
          }
        ],
        "options": [
          {
            "text": "\\( (-1, 18) \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( (1, 2) \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( (3, -14) \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( (0, 13) \\)",
            "imageUrl": ""
          }
        ],
        "answer": "1",
        "answerStr": "1"
      },
      {
        "id": "y12a-3d-q8d",
        "type": "multiple_choice",
        "question": "Which of the following correctly summarizes the key features of the graph?",
        "a": "Inflection point is at (0, 0) since f''(0) = 0 and sign of f''(x) changes from negative (for x < 0) to positive (for x > 0).",
        "opts": [
          "Max at (1, 2), Min at (3, -14), Inflection at (-1, 18)",
          "Max at (3, -14), Min at (-1, 18), Inflection at (1, 2)",
          "Max at (-1, 18), Min at (3, -14), Inflection at (1, 2)",
          "Max at (-1, 18), Min at (3, -14), Inflection at (0, 13)"
        ],
        "solutionSteps": [
          {
            "explanation": "Identify turning points from previous steps.",
            "workingOut": "\\text{Maximum at } (-1, 18), \\text{ Minimum at } (3, -14)"
          },
          {
            "explanation": "Identify the inflection point.",
            "workingOut": "\\text{Point of inflection at } (1, 2)"
          },
          {
            "explanation": "Identify the y-intercept.",
            "workingOut": "\\text{y-intercept is at } x = 0 \\implies y(0) = 13"
          }
        ],
        "options": [
          {
            "text": "Max at (1, 2), Min at (3, -14), Inflection at (-1, 18)",
            "imageUrl": ""
          },
          {
            "text": "Max at (3, -14), Min at (-1, 18), Inflection at (1, 2)",
            "imageUrl": ""
          },
          {
            "text": "Max at (-1, 18), Min at (3, -14), Inflection at (1, 2)",
            "imageUrl": ""
          },
          {
            "text": "Max at (-1, 18), Min at (3, -14), Inflection at (0, 13)",
            "imageUrl": ""
          }
        ],
        "answer": "2",
        "answerStr": "2"
      },
      {
        "id": "y12a-3d-q8e",
        "type": "teacher_review",
        "question": "e) Sketch the graph of \\( f(x) \\), indicating all important features.",
        "a": "Sketch cubic curve showing maximum at (-2,16), minimum at (2,-16), point of inflection at (0,0), and x-intercepts at \\( \\pm 2\\sqrt{3} \\).",
        "solutionSteps": [
          {
            "explanation": "Verify your sketch against the graph shown.",
            "workingOut": "\\text{Ensure the extrema, inflection points, and intercepts are correctly placed and the concavity matches.}",
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
          }
        ]
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
    ]
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
        "type": "multiple_choice",
        "question": "Find \\( y' \\) and \\( y'' \\) for \\( y = 5 + 9x + 3x^2 - x^3 \\).",
        "a": "f'(x) = 3x^2 - 6x - 24 = 3(x-4)(x+2), and f''(x) = 6x - 6 = 6(x-1).",
        "opts": [
          "\\( y' = 9 + 6x - 3x^2 \\), \\( y'' = 6 - 6x \\)",
          "\\( y' = 9 + 3x - 3x^2 \\), \\( y'' = 3 - 6x \\)",
          "\\( y' = 5 + 6x - 3x^2 \\), \\( y'' = 6 - 6x \\)",
          "\\( y' = 9 + 6x - x^3 \\), \\( y'' = 6 - 6x \\)"
        ],
        "solutionSteps": [
          {
            "explanation": "Find the first derivative.",
            "workingOut": "\\begin{aligned} y' &= 0 + 9(1) + 3(2x) - 3x^2 \\\\ &= 9 + 6x - 3x^2 \\end{aligned}"
          },
          {
            "explanation": "Find the second derivative.",
            "workingOut": "\\begin{aligned} y'' &= 0 + 6(1) - 3(2x) \\\\ &= 6 - 6x \\end{aligned}"
          }
        ],
        "options": [
          {
            "text": "\\( y' = 9 + 6x - 3x^2 \\), \\( y'' = 6 - 6x \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( y' = 9 + 3x - 3x^2 \\), \\( y'' = 3 - 6x \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( y' = 5 + 6x - 3x^2 \\), \\( y'' = 6 - 6x \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( y' = 9 + 6x - x^3 \\), \\( y'' = 6 - 6x \\)",
            "imageUrl": ""
          }
        ],
        "answer": "0",
        "answerStr": "0"
      },
      {
        "id": "y12a-3d-q9b",
        "type": "multiple_choice",
        "question": "Find the stationary points of \\( y = 5 + 9x + 3x^2 - x^3 \\) and determine their nature.",
        "a": "Stationary points at (-2, 38) (maximum) and (4, -70) (minimum).",
        "opts": [
          "Min at \\( (1, 16) \\), Max at \\( (3, 32) \\)",
          "Min at \\( (-1, 5) \\), Max at \\( (3, 32) \\)",
          "Min at \\( (-1, 0) \\), Max at \\( (3, 32) \\)",
          "Max at \\( (-1, 0) \\), Min at \\( (3, 32) \\)"
        ],
        "solutionSteps": [
          {
            "explanation": "Set the first derivative to zero.",
            "workingOut": "\\begin{aligned} 9 + 6x - 3x^2 &= 0 \\\\ -3(x^2 - 2x - 3) &= 0 \\\\ -3(x - 3)(x + 1) &= 0 \\\\ x &= 3, -1 \\end{aligned}"
          },
          {
            "explanation": "Find the y-coordinates.",
            "workingOut": "\\begin{aligned} y(3) &= 5 + 9(3) + 3(3)^2 - 3^3 = 5 + 27 + 27 - 27 = 32 \\\\ y(-1) &= 5 + 9(-1) + 3(-1)^2 - (-1)^3 = 5 - 9 + 3 + 1 = 0 \\end{aligned}"
          },
          {
            "explanation": "Determine nature using the second derivative.",
            "workingOut": "\\begin{aligned} y''(3) &= 6 - 6(3) = -12 < 0 \\implies \\text{Maximum at } (3, 32) \\\\ y''(-1) &= 6 - 6(-1) = 12 > 0 \\implies \\text{Minimum at } (-1, 0) \\end{aligned}"
          }
        ],
        "options": [
          {
            "text": "Min at \\( (1, 16) \\), Max at \\( (3, 32) \\)",
            "imageUrl": ""
          },
          {
            "text": "Min at \\( (-1, 5) \\), Max at \\( (3, 32) \\)",
            "imageUrl": ""
          },
          {
            "text": "Min at \\( (-1, 0) \\), Max at \\( (3, 32) \\)",
            "imageUrl": ""
          },
          {
            "text": "Max at \\( (-1, 0) \\), Min at \\( (3, 32) \\)",
            "imageUrl": ""
          }
        ],
        "answer": "2",
        "answerStr": "2"
      },
      {
        "id": "y12a-3d-q9c",
        "type": "multiple_choice",
        "question": "Find the coordinates of the point of inflection.",
        "a": "Inflection point is at (1, -16) since f''(1) = 0 and f'' changes from negative (for x < 1) to positive (for x > 1).",
        "opts": [
          "\\( (1, 16) \\)",
          "\\( (-1, 0) \\)",
          "\\( (0, 5) \\)",
          "\\( (3, 32) \\)"
        ],
        "solutionSteps": [
          {
            "explanation": "Set the second derivative to zero.",
            "workingOut": "\\begin{aligned} y'' &= 6 - 6x = 0 \\\\ 6x &= 6 \\\\ x &= 1 \\end{aligned}"
          },
          {
            "explanation": "Find the y-coordinate.",
            "workingOut": "\\begin{aligned} y(1) &= 5 + 9(1) + 3(1)^2 - 1^3 \\\\ &= 5 + 9 + 3 - 1 \\\\ &= 16 \\end{aligned}"
          },
          {
            "explanation": "Verify concavity changes.",
            "workingOut": "\\text{For } x < 1, y'' > 0. \\text{ For } x > 1, y'' < 0. \\text{ Thus, } (1, 16) \\text{ is a point of inflection.}"
          }
        ],
        "options": [
          {
            "text": "\\( (1, 16) \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( (-1, 0) \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( (0, 5) \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( (3, 32) \\)",
            "imageUrl": ""
          }
        ],
        "answer": "0",
        "answerStr": "0"
      },
      {
        "id": "y12a-3d-q9d",
        "type": "multiple_choice",
        "question": "Which of the following correctly summarizes the key features of the graph?",
        "a": "Sketch cubic curve showing maximum at (-2,38), minimum at (4,-70), and point of inflection at (1,-16).",
        "opts": [
          "Min at (1, 16), Max at (3, 32), Inflection at (-1, 0)",
          "Min at (-1, 0), Max at (3, 32), Inflection at (1, 16)",
          "Min at (-1, 0), Max at (3, 32), Inflection at (0, 5)",
          "Max at (-1, 0), Min at (3, 32), Inflection at (1, 16)"
        ],
        "solutionSteps": [
          {
            "explanation": "Identify turning points from previous steps.",
            "workingOut": "\\text{Minimum at } (-1, 0), \\text{ Maximum at } (3, 32)"
          },
          {
            "explanation": "Identify the inflection point.",
            "workingOut": "\\text{Point of inflection at } (1, 16)"
          },
          {
            "explanation": "Identify the y-intercept.",
            "workingOut": "\\text{y-intercept is at } x = 0 \\implies y(0) = 5"
          }
        ],
        "options": [
          {
            "text": "Min at (1, 16), Max at (3, 32), Inflection at (-1, 0)",
            "imageUrl": ""
          },
          {
            "text": "Min at (-1, 0), Max at (3, 32), Inflection at (1, 16)",
            "imageUrl": ""
          },
          {
            "text": "Min at (-1, 0), Max at (3, 32), Inflection at (0, 5)",
            "imageUrl": ""
          },
          {
            "text": "Max at (-1, 0), Min at (3, 32), Inflection at (1, 16)",
            "imageUrl": ""
          }
        ],
        "answer": "1",
        "answerStr": "1"
      },
      {
        "id": "y12a-3d-q9e",
        "type": "teacher_review",
        "question": "e) Sketch the graph of the function, indicating all important features.",
        "a": "Sketch the curve showing the turning points, point(s) of inflection, and y-intercept.",
        "solutionSteps": [
          {
            "explanation": "Verify your sketch against the graph shown.",
            "workingOut": "\\text{Ensure the extrema, inflection points, and intercepts are correctly placed and the concavity matches.}",
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
          }
        ]
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
    ]
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
        "type": "multiple_choice",
        "question": "Find \\( y' \\) and \\( y'' \\) for \\( y = x^3 - 6x^2 - 15x + 20 \\).",
        "a": "y' = 3x^2 - 12x - 15 = 3(x-5)(x+1), and y'' = 6x - 12 = 6(x-2).",
        "opts": [
          "\\( y' = 3x^2 - 12x - 15 \\), \\( y'' = 6x - 12 \\)",
          "\\( y' = 3x^2 - 12x \\), \\( y'' = 6x - 12 \\)",
          "\\( y' = 3x^2 - 12x - 15 \\), \\( y'' = 6x \\)",
          "\\( y' = 3x^2 - 6x - 15 \\), \\( y'' = 6x - 6 \\)"
        ],
        "solutionSteps": [
          {
            "explanation": "Find the first derivative.",
            "workingOut": "\\begin{aligned} y' &= 3x^2 - 2(6)x - 15 \\\\ &= 3x^2 - 12x - 15 \\end{aligned}"
          },
          {
            "explanation": "Find the second derivative.",
            "workingOut": "\\begin{aligned} y'' &= 2(3)x - 12 \\\\ &= 6x - 12 \\end{aligned}"
          }
        ],
        "options": [
          {
            "text": "\\( y' = 3x^2 - 12x - 15 \\), \\( y'' = 6x - 12 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( y' = 3x^2 - 12x \\), \\( y'' = 6x - 12 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( y' = 3x^2 - 12x - 15 \\), \\( y'' = 6x \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( y' = 3x^2 - 6x - 15 \\), \\( y'' = 6x - 6 \\)",
            "imageUrl": ""
          }
        ],
        "answer": "0",
        "answerStr": "0"
      },
      {
        "id": "y12a-3d-q10b",
        "type": "multiple_choice",
        "question": "Find the stationary points of \\( y = x^3 - 6x^2 - 15x + 20 \\) and determine their nature.",
        "a": "Stationary points are at (-1, 28) (maximum) and (5, -80) (minimum).",
        "opts": [
          "Max at \\( (-1, 20) \\), Min at \\( (5, -80) \\)",
          "Min at \\( (-1, 28) \\), Max at \\( (5, -80) \\)",
          "Min at \\( (-1, 28) \\), Max at \\( (5, 80) \\)",
          "Max at \\( (-1, 28) \\), Min at \\( (5, -80) \\)"
        ],
        "solutionSteps": [
          {
            "explanation": "Set the first derivative to zero.",
            "workingOut": "\\begin{aligned} 3x^2 - 12x - 15 &= 0 \\\\ 3(x^2 - 4x - 5) &= 0 \\\\ 3(x - 5)(x + 1) &= 0 \\\\ x &= 5, -1 \\end{aligned}"
          },
          {
            "explanation": "Find the y-coordinates.",
            "workingOut": "\\begin{aligned} y(5) &= 5^3 - 6(5)^2 - 15(5) + 20 = 125 - 150 - 75 + 20 = -80 \\\\ y(-1) &= (-1)^3 - 6(-1)^2 - 15(-1) + 20 = -1 - 6 + 15 + 20 = 28 \\end{aligned}"
          },
          {
            "explanation": "Determine nature using the second derivative.",
            "workingOut": "\\begin{aligned} y''(5) &= 6(5) - 12 = 18 > 0 \\implies \\text{Minimum at } (5, -80) \\\\ y''(-1) &= 6(-1) - 12 = -18 < 0 \\implies \\text{Maximum at } (-1, 28) \\end{aligned}"
          }
        ],
        "options": [
          {
            "text": "Max at \\( (-1, 20) \\), Min at \\( (5, -80) \\)",
            "imageUrl": ""
          },
          {
            "text": "Min at \\( (-1, 28) \\), Max at \\( (5, -80) \\)",
            "imageUrl": ""
          },
          {
            "text": "Min at \\( (-1, 28) \\), Max at \\( (5, 80) \\)",
            "imageUrl": ""
          },
          {
            "text": "Max at \\( (-1, 28) \\), Min at \\( (5, -80) \\)",
            "imageUrl": ""
          }
        ],
        "answer": "3",
        "answerStr": "3"
      },
      {
        "id": "y12a-3d-q10c",
        "type": "multiple_choice",
        "question": "Find the coordinates of the point of inflection.",
        "a": "Inflection point is at (2, -26) since y'' = 0 at x = 2 and concavity changes from down (for x < 2) to up (for x > 2).",
        "opts": [
          "\\( (0, 20) \\)",
          "\\( (2, -26) \\)",
          "\\( (5, -80) \\)",
          "\\( (-1, 28) \\)"
        ],
        "solutionSteps": [
          {
            "explanation": "Set the second derivative to zero.",
            "workingOut": "\\begin{aligned} y'' &= 6x - 12 = 0 \\\\ 6x &= 12 \\\\ x &= 2 \\end{aligned}"
          },
          {
            "explanation": "Find the y-coordinate.",
            "workingOut": "\\begin{aligned} y(2) &= 2^3 - 6(2)^2 - 15(2) + 20 \\\\ &= 8 - 24 - 30 + 20 \\\\ &= -26 \\end{aligned}"
          },
          {
            "explanation": "Verify concavity changes.",
            "workingOut": "\\text{For } x < 2, y'' < 0. \\text{ For } x > 2, y'' > 0. \\text{ Thus, } (2, -26) \\text{ is a point of inflection.}"
          }
        ],
        "options": [
          {
            "text": "\\( (0, 20) \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( (2, -26) \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( (5, -80) \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( (-1, 28) \\)",
            "imageUrl": ""
          }
        ],
        "answer": "1",
        "answerStr": "1"
      },
      {
        "id": "y12a-3d-q10d",
        "type": "multiple_choice",
        "question": "Which of the following correctly summarizes the key features of the graph?",
        "a": "Sketch cubic curve showing maximum at (-1,28), minimum at (5,-80), point of inflection at (2,-26), and y-intercept at (0,20).",
        "opts": [
          "Max at (-1, 28), Min at (5, -80), Inflection at (2, -26)",
          "Max at (-1, 28), Min at (5, -80), Inflection at (0, 20)",
          "Max at (5, -80), Min at (-1, 28), Inflection at (2, -26)",
          "Max at (2, -26), Min at (5, -80), Inflection at (-1, 28)"
        ],
        "solutionSteps": [
          {
            "explanation": "Identify turning points from previous steps.",
            "workingOut": "\\text{Maximum at } (-1, 28), \\text{ Minimum at } (5, -80)"
          },
          {
            "explanation": "Identify the inflection point.",
            "workingOut": "\\text{Point of inflection at } (2, -26)"
          },
          {
            "explanation": "Identify the y-intercept.",
            "workingOut": "\\text{y-intercept is at } x = 0 \\implies y(0) = 20"
          }
        ],
        "options": [
          {
            "text": "Max at (-1, 28), Min at (5, -80), Inflection at (2, -26)",
            "imageUrl": ""
          },
          {
            "text": "Max at (-1, 28), Min at (5, -80), Inflection at (0, 20)",
            "imageUrl": ""
          },
          {
            "text": "Max at (5, -80), Min at (-1, 28), Inflection at (2, -26)",
            "imageUrl": ""
          },
          {
            "text": "Max at (2, -26), Min at (5, -80), Inflection at (-1, 28)",
            "imageUrl": ""
          }
        ],
        "answer": "0",
        "answerStr": "0"
      },
      {
        "id": "y12a-3d-q10e",
        "type": "teacher_review",
        "question": "e) Sketch the graph of the function, indicating all important features.",
        "a": "Sketch the curve showing the turning points, point(s) of inflection, and y-intercept.",
        "solutionSteps": [
          {
            "explanation": "Verify your sketch against the graph shown.",
            "workingOut": "\\text{Ensure the extrema, inflection points, and intercepts are correctly placed and the concavity matches.}",
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
          }
        ]
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
    ]
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
        "type": "multiple_choice",
        "question": "Find \\( y' \\) and \\( y'' \\) for \\( y = 16 + 8x^3 - 3x^4 \\).",
        "a": "y' = 24x^2 - 12x^3 = 12x^2(2-x), and y'' = 48x - 36x^2 = 12x(4-3x).",
        "opts": [
          "\\( y' = 24x^2 - 12x^3 \\), \\( y'' = 24x - 36x^2 \\)",
          "\\( y' = 24x^2 - 12x^3 \\), \\( y'' = 48x - 36x^2 \\)",
          "\\( y' = 24x^2 - 12x^4 \\), \\( y'' = 48x - 48x^3 \\)",
          "\\( y' = 16 + 24x^2 - 12x^3 \\), \\( y'' = 48x - 36x^2 \\)"
        ],
        "solutionSteps": [
          {
            "explanation": "Find the first derivative.",
            "workingOut": "\\begin{aligned} y' &= 0 + 8(3x^2) - 3(4x^3) \\\\ &= 24x^2 - 12x^3 \\end{aligned}"
          },
          {
            "explanation": "Find the second derivative.",
            "workingOut": "\\begin{aligned} y'' &= 24(2x) - 12(3x^2) \\\\ &= 48x - 36x^2 \\end{aligned}"
          }
        ],
        "options": [
          {
            "text": "\\( y' = 24x^2 - 12x^3 \\), \\( y'' = 24x - 36x^2 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( y' = 24x^2 - 12x^3 \\), \\( y'' = 48x - 36x^2 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( y' = 24x^2 - 12x^4 \\), \\( y'' = 48x - 48x^3 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( y' = 16 + 24x^2 - 12x^3 \\), \\( y'' = 48x - 36x^2 \\)",
            "imageUrl": ""
          }
        ],
        "answer": "1",
        "answerStr": "1"
      },
      {
        "id": "y12a-3d-q11b",
        "type": "multiple_choice",
        "question": "Find the stationary points of \\( y = 16 + 8x^3 - 3x^4 \\) and determine their nature.",
        "a": "Stationary points are at (0, 16) (horizontal point of inflection) and (2, 32) (maximum turning point).",
        "opts": [
          "Horizontal inflection at \\( (0, 0) \\), Max at \\( (2, 32) \\)",
          "Min at \\( (0, 16) \\), Max at \\( (2, 32) \\)",
          "Max at \\( (0, 16) \\), Min at \\( (2, 32) \\)",
          "Horizontal inflection at \\( (0, 16) \\), Max at \\( (2, 32) \\)"
        ],
        "solutionSteps": [
          {
            "explanation": "Set the first derivative to zero.",
            "workingOut": "\\begin{aligned} 24x^2 - 12x^3 &= 0 \\\\ 12x^2(2 - x) &= 0 \\\\ x &= 0, 2 \\end{aligned}"
          },
          {
            "explanation": "Find the y-coordinates.",
            "workingOut": "\\begin{aligned} y(0) &= 16 + 8(0) - 3(0) = 16 \\\\ y(2) &= 16 + 8(2^3) - 3(2^4) = 16 + 64 - 48 = 32 \\end{aligned}"
          },
          {
            "explanation": "Use a slope table or second derivative to determine nature.",
            "workingOut": "\\begin{aligned} y''(2) &= 48(2) - 36(4) = 96 - 144 = -48 < 0 \\implies \\text{Max at } (2, 32) \\\\ y''(0) &= 0 \\implies \\text{Test } x = \\pm 1: \\, y'(-1) = 36 > 0, y'(1) = 12 > 0 \\implies \\text{Horizontal inflection at } (0, 16) \\end{aligned}"
          }
        ],
        "options": [
          {
            "text": "Horizontal inflection at \\( (0, 0) \\), Max at \\( (2, 32) \\)",
            "imageUrl": ""
          },
          {
            "text": "Min at \\( (0, 16) \\), Max at \\( (2, 32) \\)",
            "imageUrl": ""
          },
          {
            "text": "Max at \\( (0, 16) \\), Min at \\( (2, 32) \\)",
            "imageUrl": ""
          },
          {
            "text": "Horizontal inflection at \\( (0, 16) \\), Max at \\( (2, 32) \\)",
            "imageUrl": ""
          }
        ],
        "answer": "3",
        "answerStr": "3"
      },
      {
        "id": "y12a-3d-q11c",
        "type": "multiple_choice",
        "question": "Find the coordinates of the points of inflection.",
        "a": "Inflection points are at (0, 16) and (4/3, 688/27).",
        "opts": [
          "\\( (2, 32) \\) and \\( (\\frac{4}{3}, 25.5) \\)",
          "\\( (0, 16) \\) and \\( (1, 21) \\)",
          "\\( (0, 0) \\) and \\( (\\frac{4}{3}, \\frac{688}{27}) \\)",
          "\\( (0, 16) \\) and \\( (\\frac{4}{3}, \\frac{688}{27}) \\)"
        ],
        "solutionSteps": [
          {
            "explanation": "Set the second derivative to zero.",
            "workingOut": "\\begin{aligned} y'' &= 48x - 36x^2 = 0 \\\\ 12x(4 - 3x) &= 0 \\\\ x &= 0, \\frac{4}{3} \\end{aligned}"
          },
          {
            "explanation": "Find the corresponding y-coordinates.",
            "workingOut": "\\begin{aligned} y(0) &= 16 \\\\ y\\left(\\frac{4}{3}\\right) &= 16 + 8\\left(\\frac{4}{3}\\right)^3 - 3\\left(\\frac{4}{3}\\right)^4 = \\frac{688}{27} \\approx 25.48 \\end{aligned}"
          },
          {
            "explanation": "Verify concavity changes.",
            "workingOut": "\\text{Since } y'' \\text{ is a downward parabola, its sign changes across its roots. Both are inflection points.}"
          }
        ],
        "options": [
          {
            "text": "\\( (2, 32) \\) and \\( (\\frac{4}{3}, 25.5) \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( (0, 16) \\) and \\( (1, 21) \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( (0, 0) \\) and \\( (\\frac{4}{3}, \\frac{688}{27}) \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( (0, 16) \\) and \\( (\\frac{4}{3}, \\frac{688}{27}) \\)",
            "imageUrl": ""
          }
        ],
        "answer": "3",
        "answerStr": "3"
      },
      {
        "id": "y12a-3d-q11d",
        "type": "multiple_choice",
        "question": "Which of the following correctly summarizes the key features of the graph?",
        "a": "Sketch quartic showing maximum at (2,32), inflection points at (0,16) and (4/3, 25.48), and y-intercept at (0,16).",
        "opts": [
          "Max at (0, 16), Inflection at (4/3, 25.48)",
          "Min at (2, 32), Inflections at (0, 16) and (4/3, 25.48)",
          "Max at (2, 32), Inflection at (0, 16) only",
          "Max at (2, 32), Inflections at (0, 16) and (4/3, 25.48)"
        ],
        "solutionSteps": [
          {
            "explanation": "Identify turning points from previous steps.",
            "workingOut": "\\text{Maximum at } (2, 32), \\text{ horizontal inflection at } (0, 16)"
          },
          {
            "explanation": "Identify all inflection points.",
            "workingOut": "\\text{Points of inflection at } (0, 16) \\text{ and } (4/3, 688/27 \\approx 25.48)"
          },
          {
            "explanation": "Identify the y-intercept.",
            "workingOut": "\\text{y-intercept is at } x = 0 \\implies y(0) = 16"
          }
        ],
        "options": [
          {
            "text": "Max at (0, 16), Inflection at (4/3, 25.48)",
            "imageUrl": ""
          },
          {
            "text": "Min at (2, 32), Inflections at (0, 16) and (4/3, 25.48)",
            "imageUrl": ""
          },
          {
            "text": "Max at (2, 32), Inflection at (0, 16) only",
            "imageUrl": ""
          },
          {
            "text": "Max at (2, 32), Inflections at (0, 16) and (4/3, 25.48)",
            "imageUrl": ""
          }
        ],
        "answer": "3",
        "answerStr": "3"
      },
      {
        "id": "y12a-3d-q11e",
        "type": "teacher_review",
        "question": "e) Sketch the graph of the function, indicating all important features.",
        "a": "Sketch the curve showing the turning points, point(s) of inflection, and y-intercept.",
        "solutionSteps": [
          {
            "explanation": "Verify your sketch against the graph shown.",
            "workingOut": "\\text{Ensure the extrema, inflection points, and intercepts are correctly placed and the concavity matches.}",
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
          }
        ]
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
        "workingOut": "\\(\\begin{array}{c|ccccc} x & -1 & 0 & 1 & 2 & 3 \\\\ \\hline y' & 36 & 0 & 12 & 0 & -108 \\\\ \\text{Slope} & / & - & / & - & \\backslash \\end{array}\\)"
      },
      {
        "explanation": "Identify points of inflection where \\( y'' = 0 \\) and check for a concavity change.",
        "workingOut": "12x(4-3x) = 0 \\implies x = 0 \\text{ or } x = \\frac{4}{3}. \\, text{Since } y'' \\text{ changes sign across both, both are inflection points: } (0, 16) \\text{ and } (\\frac{4}{3}, frac{688}{27})"
      }
    ]
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
        "type": "multiple_choice",
        "question": "a) increasing, that is \\( y' > 0 \\)",
        "a": "x<-1 or x>4",
        "opts": [
          "\\( -1 < x < 4 \\)",
          "\\( x < -1 \\) or \\( x > 4 \\)",
          "\\( x > 1.5 \\)",
          "\\( x < 1.5 \\)"
        ],
        "solutionSteps": [
          {
            "explanation": "Find the first derivative.",
            "workingOut": "\\begin{aligned} y' &= 3 \\times 2x^2 - 2 \\times 9x - 24 \\\\ &= 6x^2 - 18x - 24 \\end{aligned}"
          },
          {
            "explanation": "For the curve to be increasing, the first derivative must be positive.",
            "workingOut": "\\begin{aligned} y' &> 0 \\\\ 6x^2 - 18x - 24 &> 0 \\\\ 6(x^2 - 3x - 4) &> 0 \\\\ 6(x - 4)(x + 1) &> 0 \\end{aligned}"
          },
          {
            "explanation": "Solve the quadratic inequality.",
            "workingOut": "\\text{The roots are } x = 4 \\text{ and } x = -1. \\text{ This is an upward-opening parabola, so it is positive outside the roots: } \\\\ x < -1 \\text{ or } x > 4"
          }
        ],
        "options": [
          {
            "text": "\\( -1 < x < 4 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( x < -1 \\) or \\( x > 4 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( x > 1.5 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( x < 1.5 \\)",
            "imageUrl": ""
          }
        ],
        "answer": "1",
        "answerStr": "1"
      },
      {
        "id": "y12a-3d-q12b",
        "type": "multiple_choice",
        "question": "b) decreasing, that is \\( y' < 0 \\)",
        "a": "-1<x<4",
        "opts": [
          "\\( -1 < x < 4 \\)",
          "\\( x > 1.5 \\)",
          "\\( x < -1 \\) or \\( x > 4 \\)",
          "\\( x < 1.5 \\)"
        ],
        "solutionSteps": [
          {
            "explanation": "Use the first derivative factored form.",
            "workingOut": "y' = 6(x - 4)(x + 1)"
          },
          {
            "explanation": "For the curve to be decreasing, the first derivative must be negative.",
            "workingOut": "\\begin{aligned} 6(x - 4)(x + 1) &< 0 \\end{aligned}"
          },
          {
            "explanation": "Solve the quadratic inequality.",
            "workingOut": "\\text{The parabola is below the x-axis between the roots: } \\\\ -1 < x < 4"
          }
        ],
        "options": [
          {
            "text": "\\( -1 < x < 4 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( x > 1.5 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( x < -1 \\) or \\( x > 4 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( x < 1.5 \\)",
            "imageUrl": ""
          }
        ],
        "answer": "0",
        "answerStr": "0"
      },
      {
        "id": "y12a-3d-q12c",
        "type": "multiple_choice",
        "question": "c) concave up, that is \\( y'' > 0 \\)",
        "a": "x>1.5",
        "opts": [
          "\\( -1 < x < 4 \\)",
          "\\( x > 4 \\)",
          "\\( x > 1.5 \\)",
          "\\( x < 1.5 \\)"
        ],
        "solutionSteps": [
          {
            "explanation": "Find the second derivative by differentiating \\( y' = 6x^2 - 18x - 24 \\).",
            "workingOut": "\\begin{aligned} y'' &= 2 \\times 6x - 18 \\\\ &= 12x - 18 \\end{aligned}"
          },
          {
            "explanation": "For the curve to be concave up, the second derivative must be positive.",
            "workingOut": "\\begin{aligned} y'' &> 0 \\\\ 12x - 18 &> 0 \\\\ 12x &> 18 \\\\ x &> \\frac{18}{12} \\\\ x &> 1.5 \\end{aligned}"
          }
        ],
        "options": [
          {
            "text": "\\( -1 < x < 4 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( x > 4 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( x > 1.5 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( x < 1.5 \\)",
            "imageUrl": ""
          }
        ],
        "answer": "2",
        "answerStr": "2"
      },
      {
        "id": "y12a-3d-q12d",
        "type": "multiple_choice",
        "question": "d) concave down, that is \\( y'' < 0 \\)",
        "a": "x<1.5",
        "opts": [
          "\\( x > 1.5 \\)",
          "\\( x < -1 \\)",
          "\\( -1 < x < 4 \\)",
          "\\( x < 1.5 \\)"
        ],
        "solutionSteps": [
          {
            "explanation": "Use the second derivative.",
            "workingOut": "\\begin{aligned} y'' &= 12x - 18 \\end{aligned}"
          },
          {
            "explanation": "For the curve to be concave down, the second derivative must be negative.",
            "workingOut": "\\begin{aligned} 12x - 18 &< 0 \\\\ 12x &< 18 \\\\ x &< 1.5 \\end{aligned}"
          }
        ],
        "options": [
          {
            "text": "\\( x > 1.5 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( x < -1 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( -1 < x < 4 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( x < 1.5 \\)",
            "imageUrl": ""
          }
        ],
        "answer": "3",
        "answerStr": "3"
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
        "type": "multiple_choice",
        "question": "Find \\( y' \\) and \\( y'' \\) for \\( y = x^3 + 6x^2 - 15x + 12 \\).",
        "a": "y' = 3x^2 + 12x - 15, and y'' = 6x + 12.",
        "opts": [
          "\\( y' = 3x^2 + 12x \\), \\( y'' = 6x + 12 \\)",
          "\\( y' = 3x^2 + 12x - 15 \\), \\( y'' = 6x + 12 \\)",
          "\\( y' = 3x^2 + 12x - 15 \\), \\( y'' = 6x \\)",
          "\\( y' = 3x^2 + 6x - 15 \\), \\( y'' = 6x + 6 \\)"
        ],
        "solutionSteps": [
          {
            "explanation": "Apply the power rule to find the first derivative.",
            "workingOut": "\\begin{aligned} y' &= 3x^2 + 2 \\times 6x - 15 \\\\ &= 3x^2 + 12x - 15 \\end{aligned}"
          },
          {
            "explanation": "Apply the power rule again to find the second derivative.",
            "workingOut": "\\begin{aligned} y'' &= 2 \\times 3x + 12 \\\\ &= 6x + 12 \\end{aligned}"
          }
        ],
        "options": [
          {
            "text": "\\( y' = 3x^2 + 12x \\), \\( y'' = 6x + 12 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( y' = 3x^2 + 12x - 15 \\), \\( y'' = 6x + 12 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( y' = 3x^2 + 12x - 15 \\), \\( y'' = 6x \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( y' = 3x^2 + 6x - 15 \\), \\( y'' = 6x + 6 \\)",
            "imageUrl": ""
          }
        ],
        "answer": "1",
        "answerStr": "1"
      },
      {
        "id": "y12a-3d-q13b",
        "type": "multiple_choice",
        "question": "Find the coordinates of the point of inflection.",
        "a": "y'' = 0 at x = -2; y(-2) = 58. Since y'' changes sign from negative (for x < -2) to positive (for x > -2), (-2, 58) is a point of inflection.",
        "opts": [
          "\\( (-2, 58) \\)",
          "\\( (2, 58) \\)",
          "\\( (1, 4) \\)",
          "\\( (-2, -18) \\)"
        ],
        "solutionSteps": [
          {
            "explanation": "Set the second derivative to zero.",
            "workingOut": "\\begin{aligned} y'' &= 6x + 12 = 0 \\\\ 6x &= -12 \\\\ x &= -2 \\end{aligned}"
          },
          {
            "explanation": "Substitute \\( x = -2 \\) into the original equation to find the y-coordinate.",
            "workingOut": "\\begin{aligned} y(-2) &= (-2)^3 + 6(-2)^2 - 15(-2) + 12 \\\\ &= -8 + 6(4) + 30 + 12 \\\\ &= -8 + 24 + 30 + 12 \\\\ &= 58 \\end{aligned}"
          },
          {
            "explanation": "Verify concavity changes across \\( x = -2 \\).",
            "workingOut": "\\text{For } x < -2, y'' < 0. \\text{ For } x > -2, y'' > 0. \\text{ Therefore, } (-2, 58) \\text{ is a point of inflection.}"
          }
        ],
        "options": [
          {
            "text": "\\( (-2, 58) \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( (2, 58) \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( (1, 4) \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( (-2, -18) \\)",
            "imageUrl": ""
          }
        ],
        "answer": "0",
        "answerStr": "0"
      },
      {
        "id": "y12a-3d-q13c",
        "type": "multiple_choice",
        "question": "Find the gradient of the tangent at the point of inflection.",
        "a": "Evaluate y' at x = -2: y'(-2) = 3(-2)^2 + 12(-2) - 15 = 12 - 24 - 15 = -27.",
        "opts": [
          "\\( 27 \\)",
          "\\( 15 \\)",
          "\\( -27 \\)",
          "\\( -15 \\)"
        ],
        "solutionSteps": [
          {
            "explanation": "The point of inflection occurs at \\( x = -2 \\). Evaluate \\( y'(-2) \\) to find the gradient.",
            "workingOut": "\\begin{aligned} y'(-2) &= 3(-2)^2 + 12(-2) - 15 \\\\ &= 3(4) - 24 - 15 \\\\ &= 12 - 24 - 15 \\\\ &= -27 \\end{aligned}"
          }
        ],
        "options": [
          {
            "text": "\\( 27 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( 15 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( -27 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( -15 \\)",
            "imageUrl": ""
          }
        ],
        "answer": "2",
        "answerStr": "2"
      },
      {
        "id": "y12a-3d-q13d",
        "type": "multiple_choice",
        "question": "d) Hence find the equation of the tangent at the point of inflection. (Format: 'y = mx + c')",
        "a": "y = -27x + 4",
        "opts": [
          "\\( y = 27x + 112 \\)",
          "\\( y = -27x + 4 \\)",
          "\\( y = -27x - 4 \\)",
          "\\( y = -27x + 58 \\)"
        ],
        "solutionSteps": [
          {
            "explanation": "Use the point-slope formula \\( y - y_1 = m(x - x_1) \\) with point \\( (-2, 58) \\) and gradient \\( m = -27 \\).",
            "workingOut": "\\begin{aligned} y - 58 &= -27(x - (-2)) \\\\ y - 58 &= -27(x + 2) \\end{aligned}"
          },
          {
            "explanation": "Expand and simplify into \\( y = mx + c \\) form.",
            "workingOut": "\\begin{aligned} y - 58 &= -27x - 54 \\\\ y &= -27x - 54 + 58 \\\\ y &= -27x + 4 \\end{aligned}"
          }
        ],
        "options": [
          {
            "text": "\\( y = 27x + 112 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( y = -27x + 4 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( y = -27x - 4 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( y = -27x + 58 \\)",
            "imageUrl": ""
          }
        ],
        "answer": "1",
        "answerStr": "1"
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
        "type": "multiple_choice",
        "question": "Find \\( f'(x) \\), \\( f''(x) \\), \\( g'(x) \\) and \\( g''(x) \\) for \\( f(x) = 2x^3 \\) and \\( g(x) = 3x^4 \\).",
        "a": "f'(x) = 6x^2, f''(x) = 12x, g'(x) = 12x^3, and g''(x) = 36x^2.",
        "opts": [
          "\\( f'(x) = 6x^2, f''(x) = 12x, g'(x) = 12x^3, g''(x) = 36x^2 \\)",
          "\\( f'(x) = 3x^2, f''(x) = 6x, g'(x) = 4x^3, g''(x) = 12x^2 \\)",
          "\\( f'(x) = 6x^2, f''(x) = 6x, g'(x) = 12x^3, g''(x) = 24x^2 \\)",
          "\\( f'(x) = 6x^3, f''(x) = 12x^2, g'(x) = 12x^4, g''(x) = 36x^3 \\)"
        ],
        "solutionSteps": [
          {
            "explanation": "Differentiate \\( f(x) = 2x^3 \\) twice.",
            "workingOut": "\\begin{aligned} f'(x) &= 3 \\times 2x^2 = 6x^2 \\\\ f''(x) &= 2 \\times 6x = 12x \\end{aligned}"
          },
          {
            "explanation": "Differentiate \\( g(x) = 3x^4 \\) twice.",
            "workingOut": "\\begin{aligned} g'(x) &= 4 \\times 3x^3 = 12x^3 \\\\ g''(x) &= 3 \\times 12x^2 = 36x^2 \\end{aligned}"
          }
        ],
        "options": [
          {
            "text": "\\( f'(x) = 6x^2, f''(x) = 12x, g'(x) = 12x^3, g''(x) = 36x^2 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( f'(x) = 3x^2, f''(x) = 6x, g'(x) = 4x^3, g''(x) = 12x^2 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( f'(x) = 6x^2, f''(x) = 6x, g'(x) = 12x^3, g''(x) = 24x^2 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( f'(x) = 6x^3, f''(x) = 12x^2, g'(x) = 12x^4, g''(x) = 36x^3 \\)",
            "imageUrl": ""
          }
        ],
        "answer": "0",
        "answerStr": "0"
      },
      {
        "id": "y12a-3d-q14b",
        "type": "multiple_choice",
        "question": "Evaluate \\( f''(0) \\) and \\( g''(0) \\). Can you determine the nature of the stationary points at \\( x=0 \\) from this calculation?",
        "a": "f''(0) = 0 and g''(0) = 0. No, when the second derivative is zero, the second derivative test is inconclusive.",
        "opts": [
          "\\( f''(0) = 0 \\) and \\( g''(0) = 1 \\). No, the test is inconclusive.",
          "\\( f''(0) = 0 \\) and \\( g''(0) = 0 \\). Yes, this means both are inflection points.",
          "\\( f''(0) = 0 \\) and \\( g''(0) = 0 \\). Yes, this means both are minimum points.",
          "\\( f''(0) = 0 \\) and \\( g''(0) = 0 \\). No, the second derivative test is inconclusive."
        ],
        "solutionSteps": [
          {
            "explanation": "Substitute \\( x = 0 \\) into \\( f''(x) \\) and \\( g''(x) \\).",
            "workingOut": "\\begin{aligned} f''(0) &= 12(0) = 0 \\\\ g''(0) &= 36(0)^2 = 0 \\end{aligned}"
          },
          {
            "explanation": "Interpret the result.",
            "workingOut": "\\text{When the second derivative is exactly 0 at a stationary point, the test fails to classify it. We must use the first derivative test (slope table).}"
          }
        ],
        "options": [
          {
            "text": "\\( f''(0) = 0 \\) and \\( g''(0) = 1 \\). No, the test is inconclusive.",
            "imageUrl": ""
          },
          {
            "text": "\\( f''(0) = 0 \\) and \\( g''(0) = 0 \\). Yes, this means both are inflection points.",
            "imageUrl": ""
          },
          {
            "text": "\\( f''(0) = 0 \\) and \\( g''(0) = 0 \\). Yes, this means both are minimum points.",
            "imageUrl": ""
          },
          {
            "text": "\\( f''(0) = 0 \\) and \\( g''(0) = 0 \\). No, the second derivative test is inconclusive.",
            "imageUrl": ""
          }
        ],
        "answer": "3",
        "answerStr": "3"
      },
      {
        "id": "y12a-3d-q14c",
        "type": "multiple_choice",
        "question": "Use the first derivative test to determine the nature of the stationary points at \\( x=0 \\) for \\( f(x) \\) and \\( g(x) \\).",
        "a": "For f(x), f'(x) = 6x^2 is always non-negative, so (0,0) is a horizontal point of inflection. For g(x), g'(x) changes sign from negative (for x < 0) to positive (for x > 0), so (0,0) is a minimum.",
        "opts": [
          "\\( f(x) \\) has a horizontal point of inflection, \\( g(x) \\) has a maximum.",
          "\\( f(x) \\) has a horizontal point of inflection, \\( g(x) \\) has a minimum.",
          "\\( f(x) \\) has a minimum, \\( g(x) \\) has a minimum.",
          "\\( f(x) \\) has a minimum, \\( g(x) \\) has a horizontal point of inflection."
        ],
        "solutionSteps": [
          {
            "explanation": "Test the slope of \\( f(x) \\) on either side of \\( x=0 \\).",
            "workingOut": "\\begin{aligned} f'(-1) &= 6(-1)^2 = 6 > 0 \\, (\\text{increasing}) \\\\ f'(1) &= 6(1)^2 = 6 > 0 \\, (\\text{increasing}) \\end{aligned} \\\\ \\text{Since the slope does not change sign, } f(x) \\text{ has a horizontal point of inflection.}"
          },
          {
            "explanation": "Test the slope of \\( g(x) \\) on either side of \\( x=0 \\).",
            "workingOut": "\\begin{aligned} g'(-1) &= 12(-1)^3 = -12 < 0 \\, (\\text{decreasing}) \\\\ g'(1) &= 12(1)^3 = 12 > 0 \\, (\\text{increasing}) \\end{aligned} \\\\ \\text{Since the slope changes from negative to positive, } g(x) \\text{ has a minimum.}"
          }
        ],
        "options": [
          {
            "text": "\\( f(x) \\) has a horizontal point of inflection, \\( g(x) \\) has a maximum.",
            "imageUrl": ""
          },
          {
            "text": "\\( f(x) \\) has a horizontal point of inflection, \\( g(x) \\) has a minimum.",
            "imageUrl": ""
          },
          {
            "text": "\\( f(x) \\) has a minimum, \\( g(x) \\) has a minimum.",
            "imageUrl": ""
          },
          {
            "text": "\\( f(x) \\) has a minimum, \\( g(x) \\) has a horizontal point of inflection.",
            "imageUrl": ""
          }
        ],
        "answer": "1",
        "answerStr": "1"
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
        "type": "multiple_choice",
        "question": "a) Find \\( a \\) if the curve \\( y = x^3 - ax^2 + 4x - 5 \\) has an inflection at the point where \\( x = 3 \\).",
        "a": "9",
        "opts": [
          "\\( 3 \\)",
          "\\( 4 \\)",
          "\\( 9 \\)",
          "\\( -9 \\)"
        ],
        "solutionSteps": [
          {
            "explanation": "Find the first and second derivatives.",
            "workingOut": "\\begin{aligned} y' &= 3x^2 - 2ax + 4 \\\\ y'' &= 6x - 2a \\end{aligned}"
          },
          {
            "explanation": "An inflection point at \\( x = 3 \\) means \\( y''(3) = 0 \\).",
            "workingOut": "\\begin{aligned} 6(3) - 2a &= 0 \\\\ 18 - 2a &= 0 \\\\ 2a &= 18 \\\\ a &= 9 \\end{aligned}"
          }
        ],
        "options": [
          {
            "text": "\\( 3 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( 4 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( 9 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( -9 \\)",
            "imageUrl": ""
          }
        ],
        "answer": "2",
        "answerStr": "2"
      },
      {
        "id": "y12a-3d-q15b",
        "type": "multiple_choice",
        "question": "b) For what values of \\( a \\) is \\( y = x^3 + 3ax^2 + 5x - 7 \\) concave up at the point where \\( x = -1 \\)? (Format: 'a>N')",
        "a": "a>1",
        "opts": [
          "\\( a > 1 \\)",
          "\\( a < 1 \\)",
          "\\( a < -1 \\)",
          "\\( a > -1 \\)"
        ],
        "solutionSteps": [
          {
            "explanation": "Find the first and second derivatives.",
            "workingOut": "\\begin{aligned} y' &= 3x^2 + 6ax + 5 \\\\ y'' &= 6x + 6a \\end{aligned}"
          },
          {
            "explanation": "The curve is concave up at \\( x = -1 \\) if \\( y''(-1) > 0 \\).",
            "workingOut": "\\begin{aligned} 6(-1) + 6a &> 0 \\\\ -6 + 6a &> 0 \\\\ 6a &> 6 \\\\ a &> 1 \\end{aligned}"
          }
        ],
        "options": [
          {
            "text": "\\( a > 1 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( a < 1 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( a < -1 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( a > -1 \\)",
            "imageUrl": ""
          }
        ],
        "answer": "0",
        "answerStr": "0"
      },
      {
        "id": "y12a-3d-q15c",
        "type": "multiple_choice",
        "question": "c) Find \\( a \\) and \\( b \\) if the curve \\( y = x^4 + ax^3 + bx^2 \\) has an inflection at \\( (1, 0) \\).",
        "a": "a = -2.5, b = 1.5",
        "opts": [
          "\\( a = -1.5, \\, b = 2.5 \\)",
          "\\( a = -3, \\, b = 2 \\)",
          "\\( a = 2.5, \\, b = -1.5 \\)",
          "\\( a = -2.5, \\, b = 1.5 \\)"
        ],
        "solutionSteps": [
          {
            "explanation": "The curve passes through \\( (1, 0) \\), so \\( y(1) = 0 \\).",
            "workingOut": "\\begin{aligned} 1^4 + a(1)^3 + b(1)^2 &= 0 \\\\ 1 + a + b &= 0 \\\\ a + b &= -1 \\quad \\text{--- (Eq 1)} \\end{aligned}"
          },
          {
            "explanation": "Find the second derivative.",
            "workingOut": "\\begin{aligned} y' &= 4x^3 + 3ax^2 + 2bx \\\\ y'' &= 12x^2 + 6ax + 2b \\end{aligned}"
          },
          {
            "explanation": "An inflection at \\( x = 1 \\) means \\( y''(1) = 0 \\).",
            "workingOut": "\\begin{aligned} 12(1)^2 + 6a(1) + 2b &= 0 \\\\ 12 + 6a + 2b &= 0 \\\\ 6a + 2b &= -12 \\\\ 3a + b &= -6 \\quad \\text{--- (Eq 2)} \\end{aligned}"
          },
          {
            "explanation": "Solve the simultaneous equations.",
            "workingOut": "\\text{From (Eq 1), } b = -1 - a \\\\ \\begin{aligned} \\text{Substitute into (Eq 2):} \\quad 3a + (-1 - a) &= -6 \\\\ 2a - 1 &= -6 \\\\ 2a &= -5 \\\\ a &= -2.5 \\end{aligned}"
          },
          {
            "explanation": "Find \\( b \\).",
            "workingOut": "\\begin{aligned} b &= -1 - (-2.5) \\\\ b &= -1 + 2.5 \\\\ b &= 1.5 \\end{aligned}"
          }
        ],
        "options": [
          {
            "text": "\\( a = -1.5, \\, b = 2.5 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( a = -3, \\, b = 2 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( a = 2.5, \\, b = -1.5 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( a = -2.5, \\, b = 1.5 \\)",
            "imageUrl": ""
          }
        ],
        "answer": "3",
        "answerStr": "3"
      },
      {
        "id": "y12a-3d-q15d",
        "type": "multiple_choice",
        "question": "d) For what values of \\( a \\) is \\( y = x^4 + ax^3 - 3x^2 \\) concave up and increasing when \\( x = 1 \\)? (Format: 'a>N/M' e.g. 'a>2/3')",
        "a": "a>2/3",
        "opts": [
          "\\( a < \\frac{2}{3} \\)",
          "\\( a > -1 \\)",
          "\\( a > \\frac{3}{2} \\)",
          "\\( a > \\frac{2}{3} \\)"
        ],
        "solutionSteps": [
          {
            "explanation": "Find the first and second derivatives.",
            "workingOut": "\\begin{aligned} y' &= 4x^3 + 3ax^2 - 6x \\\\ y'' &= 12x^2 + 6ax - 6 \\end{aligned}"
          },
          {
            "explanation": "The curve is increasing at \\( x = 1 \\), so \\( y'(1) > 0 \\).",
            "workingOut": "\\begin{aligned} 4(1)^3 + 3a(1)^2 - 6(1) &> 0 \\\\ 4 + 3a - 6 &> 0 \\\\ 3a - 2 &> 0 \\\\ 3a &> 2 \\\\ a &> \\frac{2}{3} \\end{aligned}"
          },
          {
            "explanation": "The curve is concave up at \\( x = 1 \\), so \\( y''(1) > 0 \\).",
            "workingOut": "\\begin{aligned} 12(1)^2 + 6a(1) - 6 &> 0 \\\\ 12 + 6a - 6 &> 0 \\\\ 6a + 6 &> 0 \\\\ 6a &> -6 \\\\ a &> -1 \\end{aligned}"
          },
          {
            "explanation": "Combine the conditions. For both to be true, \\( a \\) must be greater than the larger value.",
            "workingOut": "\\text{Since } a > \\frac{2}{3} \\text{ is a stricter condition than } a > -1 \\text{, the final answer is: } \\\\ a > \\frac{2}{3}"
          }
        ],
        "options": [
          {
            "text": "\\( a < \\frac{2}{3} \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( a > -1 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( a > \\frac{3}{2} \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( a > \\frac{2}{3} \\)",
            "imageUrl": ""
          }
        ],
        "answer": "3",
        "answerStr": "3"
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
        "type": "multiple_choice",
        "question": "a) \\( f'(a) > 0 \\) and \\( f''(a) > 0 \\)",
        "a": "The curve is increasing and concave up (slanted upwards, bending upwards).",
        "opts": [
          "increasing and concave up",
          "decreasing and concave down",
          "increasing and concave down",
          "decreasing and concave up"
        ],
        "solutionSteps": [
          {
            "explanation": "Determine whether the function is increasing or decreasing using the first derivative.",
            "workingOut": "\\text{Since } f'(a) > 0 \\text{, the function is increasing (rising) at } x = a."
          },
          {
            "explanation": "Determine concavity using the second derivative.",
            "workingOut": "\\text{Since } f''(a) > 0 \\text{, the function is concave up (bending upwards) at } x = a."
          }
        ],
        "options": [
          {
            "text": "increasing and concave up",
            "imageUrl": ""
          },
          {
            "text": "decreasing and concave down",
            "imageUrl": ""
          },
          {
            "text": "increasing and concave down",
            "imageUrl": ""
          },
          {
            "text": "decreasing and concave up",
            "imageUrl": ""
          }
        ],
        "answer": "0",
        "answerStr": "0"
      },
      {
        "id": "y12a-3d-q17b",
        "type": "multiple_choice",
        "question": "b) \\( f'(a) > 0 \\) and \\( f''(a) < 0 \\)",
        "a": "The curve is increasing and concave down (slanted upwards, bending downwards).",
        "opts": [
          "increasing and concave up",
          "increasing and concave down",
          "decreasing and concave up",
          "decreasing and concave down"
        ],
        "solutionSteps": [
          {
            "explanation": "Determine whether the function is increasing or decreasing using the first derivative.",
            "workingOut": "\\text{Since } f'(a) > 0 \\text{, the function is increasing (rising) at } x = a."
          },
          {
            "explanation": "Determine concavity using the second derivative.",
            "workingOut": "\\text{Since } f''(a) < 0 \\text{, the function is concave down (bending downwards) at } x = a."
          }
        ],
        "options": [
          {
            "text": "increasing and concave up",
            "imageUrl": ""
          },
          {
            "text": "increasing and concave down",
            "imageUrl": ""
          },
          {
            "text": "decreasing and concave up",
            "imageUrl": ""
          },
          {
            "text": "decreasing and concave down",
            "imageUrl": ""
          }
        ],
        "answer": "1",
        "answerStr": "1"
      },
      {
        "id": "y12a-3d-q17c",
        "type": "multiple_choice",
        "question": "c) \\( f'(a) < 0 \\) and \\( f''(a) > 0 \\)",
        "a": "The curve is decreasing and concave up (slanted downwards, bending upwards).",
        "opts": [
          "increasing and concave up",
          "decreasing and concave up",
          "decreasing and concave down",
          "increasing and concave down"
        ],
        "solutionSteps": [
          {
            "explanation": "Determine whether the function is increasing or decreasing using the first derivative.",
            "workingOut": "\\text{Since } f'(a) < 0 \\text{, the function is decreasing (falling) at } x = a."
          },
          {
            "explanation": "Determine concavity using the second derivative.",
            "workingOut": "\\text{Since } f''(a) > 0 \\text{, the function is concave up (bending upwards) at } x = a."
          }
        ],
        "options": [
          {
            "text": "increasing and concave up",
            "imageUrl": ""
          },
          {
            "text": "decreasing and concave up",
            "imageUrl": ""
          },
          {
            "text": "decreasing and concave down",
            "imageUrl": ""
          },
          {
            "text": "increasing and concave down",
            "imageUrl": ""
          }
        ],
        "answer": "1",
        "answerStr": "1"
      },
      {
        "id": "y12a-3d-q17d",
        "type": "multiple_choice",
        "question": "d) \\( f'(a) < 0 \\) and \\( f''(a) < 0 \\)",
        "a": "The curve is decreasing and concave down (slanted downwards, bending downwards).",
        "opts": [
          "increasing and concave down",
          "decreasing and concave down",
          "increasing and concave up",
          "decreasing and concave up"
        ],
        "solutionSteps": [
          {
            "explanation": "Determine whether the function is increasing or decreasing using the first derivative.",
            "workingOut": "\\text{Since } f'(a) < 0 \\text{, the function is decreasing (falling) at } x = a."
          },
          {
            "explanation": "Determine concavity using the second derivative.",
            "workingOut": "\\text{Since } f''(a) < 0 \\text{, the function is concave down (bending downwards) at } x = a."
          }
        ],
        "options": [
          {
            "text": "increasing and concave down",
            "imageUrl": ""
          },
          {
            "text": "decreasing and concave down",
            "imageUrl": ""
          },
          {
            "text": "increasing and concave up",
            "imageUrl": ""
          },
          {
            "text": "decreasing and concave up",
            "imageUrl": ""
          }
        ],
        "answer": "1",
        "answerStr": "1"
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
        "type": "multiple_choice",
        "question": "Why does the function have no stationary points?",
        "a": "y' = x^2 - 4x + 7. The discriminant of y' = 0 is \\( \\Delta = (-4)^2 - 4(1)(7) = -12 < 0 \\). Since \\( y' > 0 \\) for all \\( x \\), there are no real roots and thus no stationary points.",
        "opts": [
          "Because \\( y' = 0 \\) at \\( x = 2 \\) only",
          "Because \\( y' = x^2 - 4x + 7 \\) has a positive discriminant (\\( \\Delta = 12 \\))",
          "Because \\( y'' = 2x - 4 \\) does not equal 0",
          "Because \\( y' = x^2 - 4x + 7 \\) has a negative discriminant (\\( \\Delta = -12 \\))"
        ],
        "solutionSteps": [
          {
            "explanation": "Find the first derivative.",
            "workingOut": "\\begin{aligned} y' &= 3 \\times \\frac{1}{3}x^2 - 2 \\times 2x + 7 \\\\ &= x^2 - 4x + 7 \\end{aligned}"
          },
          {
            "explanation": "Check for stationary points by setting \\( y' = 0 \\).",
            "workingOut": "\\begin{aligned} x^2 - 4x + 7 &= 0 \\end{aligned}"
          },
          {
            "explanation": "Calculate the discriminant to check for real roots.",
            "workingOut": "\\begin{aligned} \\Delta &= b^2 - 4ac \\\\ &= (-4)^2 - 4(1)(7) \\\\ &= 16 - 28 \\\\ &= -12 \\end{aligned}"
          },
          {
            "explanation": "Interpret the discriminant.",
            "workingOut": "\\text{Since } \\Delta < 0 \\text{, the quadratic equation has no real roots. Therefore, the function has no stationary points.}"
          }
        ],
        "options": [
          {
            "text": "Because \\( y' = 0 \\) at \\( x = 2 \\) only",
            "imageUrl": ""
          },
          {
            "text": "Because \\( y' = x^2 - 4x + 7 \\) has a positive discriminant (\\( \\Delta = 12 \\))",
            "imageUrl": ""
          },
          {
            "text": "Because \\( y'' = 2x - 4 \\) does not equal 0",
            "imageUrl": ""
          },
          {
            "text": "Because \\( y' = x^2 - 4x + 7 \\) has a negative discriminant (\\( \\Delta = -12 \\))",
            "imageUrl": ""
          }
        ],
        "answer": "3",
        "answerStr": "3"
      },
      {
        "id": "y12a-3d-q18b",
        "type": "multiple_choice",
        "question": "Why does the function have a point of inflection?",
        "a": "y'' = 2x - 4 = 0 at x = 2; y(2) = 11/3. Since y'' changes sign from negative (for x < 2) to positive (for x > 2), (2, 11/3) is an inflection point.",
        "opts": [
          "Because \\( y' = 0 \\) at \\( x = 2 \\) and changes sign across it",
          "Because \\( y'' = 0 \\) at \\( x = 2 \\) and changes sign across it",
          "Because \\( y'' = 0 \\) at \\( x = 2 \\) and remains positive on both sides",
          "Because \\( y'' > 0 \\) for all \\( x \\)"
        ],
        "solutionSteps": [
          {
            "explanation": "Find the second derivative.",
            "workingOut": "\\begin{aligned} y'' &= 2x - 4 \\end{aligned}"
          },
          {
            "explanation": "Set the second derivative to zero to find potential points of inflection.",
            "workingOut": "\\begin{aligned} 2x - 4 &= 0 \\\\ 2x &= 4 \\\\ x &= 2 \\end{aligned}"
          },
          {
            "explanation": "Verify that the concavity changes across \\( x = 2 \\).",
            "workingOut": "\\text{For } x < 2, \\, y'' < 0 \\, \\text{(concave down)}. \\\\ \\text{For } x > 2, \\, y'' > 0 \\, \\text{(concave up)}. \\\\ \\text{Since } y'' \\text{ changes sign, there is a point of inflection at } x = 2."
          }
        ],
        "options": [
          {
            "text": "Because \\( y' = 0 \\) at \\( x = 2 \\) and changes sign across it",
            "imageUrl": ""
          },
          {
            "text": "Because \\( y'' = 0 \\) at \\( x = 2 \\) and changes sign across it",
            "imageUrl": ""
          },
          {
            "text": "Because \\( y'' = 0 \\) at \\( x = 2 \\) and remains positive on both sides",
            "imageUrl": ""
          },
          {
            "text": "Because \\( y'' > 0 \\) for all \\( x \\)",
            "imageUrl": ""
          }
        ],
        "answer": "1",
        "answerStr": "1"
      },
      {
        "id": "y12a-3d-q18c",
        "type": "multiple_choice",
        "question": "How many \\( x \\)-intercepts does the graph of the function have? Justify your answer.",
        "a": "Exactly 1 x-intercept. Since f(x) is continuous and strictly increasing (y' > 0 everywhere), it must cross the x-axis exactly once.",
        "opts": [
          "Exactly 3, because it is a cubic curve.",
          "Exactly 1, because the function is continuous and strictly increasing.",
          "Exactly 2, because it is a cubic curve.",
          "0, because it has no stationary points."
        ],
        "solutionSteps": [
          {
            "explanation": "Recall the behavior of the first derivative from part (a).",
            "workingOut": "\\text{We found that } y' = x^2 - 4x + 7 \\text{ has no real roots and opens upwards, so } y' > 0 \\text{ for all } x."
          },
          {
            "explanation": "Relate the first derivative to the behavior of the function.",
            "workingOut": "\\text{Since } y' > 0 \\text{ everywhere, the function is strictly increasing.}"
          },
          {
            "explanation": "Combine this with the fact that cubic functions are continuous and have range } (-\\infty, \\infty) \\text{.",
            "workingOut": "\\text{A continuous, strictly increasing curve that goes from } -\\infty \\text{ to } \\infty \\text{ must cross the x-axis exactly once.}"
          }
        ],
        "options": [
          {
            "text": "Exactly 3, because it is a cubic curve.",
            "imageUrl": ""
          },
          {
            "text": "Exactly 1, because the function is continuous and strictly increasing.",
            "imageUrl": ""
          },
          {
            "text": "Exactly 2, because it is a cubic curve.",
            "imageUrl": ""
          },
          {
            "text": "0, because it has no stationary points.",
            "imageUrl": ""
          }
        ],
        "answer": "1",
        "answerStr": "1"
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
        "type": "multiple_choice",
        "question": "a) Find the value of \\( a \\).",
        "a": "2",
        "opts": [
          "\\( 4 \\)",
          "\\( -2 \\)",
          "\\( 3 \\)",
          "\\( 2 \\)"
        ],
        "solutionSteps": [
          {
            "explanation": "Use the coordinates of the turning point \\( (0, 8) \\) to find \\( d \\).",
            "workingOut": "\\begin{aligned} y(0) &= a(0)^3 + b(0)^2 + c(0) + d = 8 \\\\ d &= 8 \\end{aligned}"
          },
          {
            "explanation": "Use the fact that \\( (0, 8) \\) is a turning point to find \\( c \\).",
            "workingOut": "\\begin{aligned} y' &= 3ax^2 + 2bx + c \\\\ y'(0) &= 3a(0)^2 + 2b(0) + c = 0 \\\\ c &= 0 \\end{aligned}"
          },
          {
            "explanation": "Use the fact that there is an inflection point at \\( x = 1 \\).",
            "workingOut": "\\begin{aligned} y'' &= 6ax + 2b \\\\ y''(1) &= 6a(1) + 2b = 0 \\\\ 2b &= -6a \\\\ b &= -3a \\end{aligned}"
          },
          {
            "explanation": "Use the \\( x \\)-intercept at \\( x = -1 \\) to solve for \\( a \\). Substitute \\( b = -3a \\), \\( c = 0 \\), and \\( d = 8 \\).",
            "workingOut": "\\begin{aligned} y(-1) &= a(-1)^3 + b(-1)^2 + 0(-1) + 8 = 0 \\\\ -a + b + 8 &= 0 \\\\ -a + (-3a) + 8 &= 0 \\\\ -4a &= -8 \\\\ a &= 2 \\end{aligned}"
          }
        ],
        "options": [
          {
            "text": "\\( 4 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( -2 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( 3 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( 2 \\)",
            "imageUrl": ""
          }
        ],
        "answer": "3",
        "answerStr": "3"
      },
      {
        "id": "y12a-3d-q19b",
        "type": "multiple_choice",
        "question": "b) Find the value of \\( b \\).",
        "a": "-6",
        "opts": [
          "\\( 6 \\)",
          "\\( -6 \\)",
          "\\( 8 \\)",
          "\\( -4 \\)"
        ],
        "solutionSteps": [
          {
            "explanation": "Use the relationship between \\( a \\) and \\( b \\) found in part (a).",
            "workingOut": "\\begin{aligned} b &= -3a \\end{aligned}"
          },
          {
            "explanation": "Substitute the value of \\( a = 2 \\).",
            "workingOut": "\\begin{aligned} b &= -3(2) \\\\ b &= -6 \\end{aligned}"
          }
        ],
        "options": [
          {
            "text": "\\( 6 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( -6 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( 8 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( -4 \\)",
            "imageUrl": ""
          }
        ],
        "answer": "1",
        "answerStr": "1"
      },
      {
        "id": "y12a-3d-q19c",
        "type": "multiple_choice",
        "question": "c) Find the value of \\( c \\).",
        "a": "0",
        "opts": [
          "\\( 8 \\)",
          "\\( 0 \\)",
          "\\( 2 \\)",
          "\\( 1 \\)"
        ],
        "solutionSteps": [
          {
            "explanation": "Find the first derivative.",
            "workingOut": "\\begin{aligned} y' &= 3ax^2 + 2bx + c \\end{aligned}"
          },
          {
            "explanation": "A turning point at \\( (0, 8) \\) means the derivative is zero at \\( x = 0 \\).",
            "workingOut": "\\begin{aligned} y'(0) &= 3a(0)^2 + 2b(0) + c = 0 \\\\ c &= 0 \\end{aligned}"
          }
        ],
        "options": [
          {
            "text": "\\( 8 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( 0 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( 2 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( 1 \\)",
            "imageUrl": ""
          }
        ],
        "answer": "1",
        "answerStr": "1"
      },
      {
        "id": "y12a-3d-q19d",
        "type": "multiple_choice",
        "question": "d) Find the value of \\( d \\).",
        "a": "8",
        "opts": [
          "\\( 2 \\)",
          "\\( 8 \\)",
          "\\( 0 \\)",
          "\\( -8 \\)"
        ],
        "solutionSteps": [
          {
            "explanation": "A turning point at \\( (0, 8) \\) means the curve passes through \\( (0, 8) \\). Substitute \\( x = 0 \\) into the original equation.",
            "workingOut": "\\begin{aligned} y(0) &= a(0)^3 + b(0)^2 + c(0) + d \\\\ 8 &= 0 + 0 + 0 + d \\\\ d &= 8 \\end{aligned}"
          }
        ],
        "options": [
          {
            "text": "\\( 2 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( 8 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( 0 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( -8 \\)",
            "imageUrl": ""
          }
        ],
        "answer": "1",
        "answerStr": "1"
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
