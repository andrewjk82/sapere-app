export const Y12A_CH3_QUESTIONS = [
  {
    "id": "y12a-3a-q1a",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "In the diagram, name the points where \\( f'(x) > 0 \\). (List the letters in alphabetical order, separated by a comma and space, e.g. 'A, B')",
    "a": "A, F, G",
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Identify where the curve is rising (slanted upwards from left to right).",
        "workingOut": "\\text{Rising sections: at } A, F, G"
      },
      {
        "explanation": "Since the tangent slope is positive in rising sections, \\( f'(x) > 0 \\) at these points.",
        "workingOut": "f'(x) > 0 \\implies A, F, G"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [
          -1,
          6,
          8,
          -1
        ],
        "script": "board.suspendUpdate();\nvar f = function(x) { return x*(x-3)*(x-6)/8 + 3; };\nboard.create('functiongraph', [f, -0.5, 7.5], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [0, f(0)], {name: 'A', size: 3, color: 'red', label: {autoPosition: false, offset: [-5, 10]}});\nboard.create('point', [1.27, f(1.27)], {name: 'B', size: 3, color: 'red', label: {autoPosition: false, offset: [-5, 10]}});\nboard.create('point', [2.5, f(2.5)], {name: 'C', size: 3, color: 'red', label: {autoPosition: false, offset: [-5, -10]}});\nboard.create('point', [3.5, f(3.5)], {name: 'D', size: 3, color: 'red', label: {autoPosition: false, offset: [-5, -10]}});\nboard.create('point', [4.73, f(4.73)], {name: 'E', size: 3, color: 'red', label: {autoPosition: false, offset: [-5, -10]}});\nboard.create('point', [5.8, f(5.8)], {name: 'F', size: 3, color: 'red', label: {autoPosition: false, offset: [-5, 10]}});\nboard.create('point', [6.8, f(6.8)], {name: 'G', size: 3, color: 'red', label: {autoPosition: false, offset: [-5, 10]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y12a-3a-q1b",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "In the diagram, name the points where \\( f'(x) < 0 \\). (List the letters in alphabetical order, separated by a comma and space, e.g. 'A, B')",
    "a": "C, D",
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Identify where the curve is falling (slanted downwards from left to right).",
        "workingOut": "\\text{Falling sections: at } C, D"
      },
      {
        "explanation": "Since the tangent slope is negative in falling sections, \\( f'(x) < 0 \\) at these points.",
        "workingOut": "f'(x) < 0 \\implies C, D"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [
          -1,
          6,
          8,
          -1
        ],
        "script": "board.suspendUpdate();\nvar f = function(x) { return x*(x-3)*(x-6)/8 + 3; };\nboard.create('functiongraph', [f, -0.5, 7.5], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [0, f(0)], {name: 'A', size: 3, color: 'red', label: {autoPosition: false, offset: [-5, 10]}});\nboard.create('point', [1.27, f(1.27)], {name: 'B', size: 3, color: 'red', label: {autoPosition: false, offset: [-5, 10]}});\nboard.create('point', [2.5, f(2.5)], {name: 'C', size: 3, color: 'red', label: {autoPosition: false, offset: [-5, -10]}});\nboard.create('point', [3.5, f(3.5)], {name: 'D', size: 3, color: 'red', label: {autoPosition: false, offset: [-5, -10]}});\nboard.create('point', [4.73, f(4.73)], {name: 'E', size: 3, color: 'red', label: {autoPosition: false, offset: [-5, -10]}});\nboard.create('point', [5.8, f(5.8)], {name: 'F', size: 3, color: 'red', label: {autoPosition: false, offset: [-5, 10]}});\nboard.create('point', [6.8, f(6.8)], {name: 'G', size: 3, color: 'red', label: {autoPosition: false, offset: [-5, 10]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y12a-3a-q1c",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "In the diagram, name the points where \\( f'(x) = 0 \\). (List the letters in alphabetical order, separated by a comma and space, e.g. 'A, B')",
    "a": "B, E",
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Identify where the curve is stationary (tangent line is perfectly horizontal, i.e., peaks and valleys).",
        "workingOut": "\\text{Stationary points: local maximum } B \\text{ and local minimum } E"
      },
      {
        "explanation": "Since the tangent slope is zero at stationary points, \\( f'(x) = 0 \\) at these points.",
        "workingOut": "f'(x) = 0 \\implies B, E"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [
          -1,
          6,
          8,
          -1
        ],
        "script": "board.suspendUpdate();\nvar f = function(x) { return x*(x-3)*(x-6)/8 + 3; };\nboard.create('functiongraph', [f, -0.5, 7.5], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [0, f(0)], {name: 'A', size: 3, color: 'red', label: {autoPosition: false, offset: [-5, 10]}});\nboard.create('point', [1.27, f(1.27)], {name: 'B', size: 3, color: 'red', label: {autoPosition: false, offset: [-5, 10]}});\nboard.create('point', [2.5, f(2.5)], {name: 'C', size: 3, color: 'red', label: {autoPosition: false, offset: [-5, -10]}});\nboard.create('point', [3.5, f(3.5)], {name: 'D', size: 3, color: 'red', label: {autoPosition: false, offset: [-5, -10]}});\nboard.create('point', [4.73, f(4.73)], {name: 'E', size: 3, color: 'red', label: {autoPosition: false, offset: [-5, -10]}});\nboard.create('point', [5.8, f(5.8)], {name: 'F', size: 3, color: 'red', label: {autoPosition: false, offset: [-5, 10]}});\nboard.create('point', [6.8, f(6.8)], {name: 'G', size: 3, color: 'red', label: {autoPosition: false, offset: [-5, 10]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y12a-3a-q2a",
    "type": "short_answer",
    "question": "Find the derivative of \\( y = 2x^2 \\). By substituting \\( x = 2 \\) into the derivative, determine whether the function is increasing, decreasing or stationary at \\( x = 2 \\). (Answer 'increasing', 'decreasing', or 'stationary')",
    "a": "increasing",
    "difficulty": "easy",
    "timeLimit": 90,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Differentiate \\( y = 2x^2 \\).",
        "workingOut": "y' = 4x"
      },
      {
        "explanation": "Substitute \\( x = 2 \\) into the derivative.",
        "workingOut": "y'(2) = 4(2) = 8"
      },
      {
        "explanation": "Since \\( y'(2) > 0 \\), the function is increasing.",
        "workingOut": "8 > 0 \\implies \\text{increasing}"
      }
    ]
  },
  {
    "id": "y12a-3a-q2b",
    "type": "short_answer",
    "question": "Find the derivative of \\( y = x^2 - 3x \\). By substituting \\( x = 2 \\) into the derivative, determine whether the function is increasing, decreasing or stationary at \\( x = 2 \\). (Answer 'increasing', 'decreasing', or 'stationary')",
    "a": "increasing",
    "difficulty": "easy",
    "timeLimit": 90,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Differentiate \\( y = x^2 - 3x \\).",
        "workingOut": "y' = 2x - 3"
      },
      {
        "explanation": "Substitute \\( x = 2 \\) into the derivative.",
        "workingOut": "y'(2) = 2(2) - 3 = 1"
      },
      {
        "explanation": "Since \\( y'(2) > 0 \\), the function is increasing.",
        "workingOut": "1 > 0 \\implies \\text{increasing}"
      }
    ]
  },
  {
    "id": "y12a-3a-q2c",
    "type": "short_answer",
    "question": "Find the derivative of \\( y = 2x^2 - 6x \\). By substituting \\( x = 2 \\) into the derivative, determine whether the function is increasing, decreasing or stationary at \\( x = 2 \\). (Answer 'increasing', 'decreasing', or 'stationary')",
    "a": "increasing",
    "difficulty": "easy",
    "timeLimit": 90,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Differentiate \\( y = 2x^2 - 6x \\).",
        "workingOut": "y' = 4x - 6"
      },
      {
        "explanation": "Substitute \\( x = 2 \\) into the derivative.",
        "workingOut": "y'(2) = 4(2) - 6 = 2"
      },
      {
        "explanation": "Since \\( y'(2) > 0 \\), the function is increasing.",
        "workingOut": "2 > 0 \\implies \\text{increasing}"
      }
    ]
  },
  {
    "id": "y12a-3a-q2d",
    "type": "short_answer",
    "question": "Find the derivative of \\( y = x^2 - 4x + 9 \\). By substituting \\( x = 2 \\) into the derivative, determine whether the function is increasing, decreasing or stationary at \\( x = 2 \\). (Answer 'increasing', 'decreasing', or 'stationary')",
    "a": "stationary",
    "difficulty": "easy",
    "timeLimit": 90,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Differentiate \\( y = x^2 - 4x + 9 \\).",
        "workingOut": "y' = 2x - 4"
      },
      {
        "explanation": "Substitute \\( x = 2 \\) into the derivative.",
        "workingOut": "y'(2) = 2(2) - 4 = 0"
      },
      {
        "explanation": "Since \\( y'(2) = 0 \\), the function is stationary.",
        "workingOut": "y'(2) = 0 \\implies \\text{stationary}"
      }
    ]
  },
  {
    "id": "y12a-3a-q2e",
    "type": "short_answer",
    "question": "Find the derivative of \\( y = x^3 + 3x \\). By substituting \\( x = 2 \\) into the derivative, determine whether the function is increasing, decreasing or stationary at \\( x = 2 \\). (Answer 'increasing', 'decreasing', or 'stationary')",
    "a": "increasing",
    "difficulty": "easy",
    "timeLimit": 90,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Differentiate \\( y = x^3 + 3x \\).",
        "workingOut": "y' = 3x^2 + 3"
      },
      {
        "explanation": "Substitute \\( x = 2 \\) into the derivative.",
        "workingOut": "y'(2) = 3(2^2) + 3 = 15"
      },
      {
        "explanation": "Since \\( y'(2) > 0 \\), the function is increasing.",
        "workingOut": "15 > 0 \\implies \\text{increasing}"
      }
    ]
  },
  {
    "id": "y12a-3a-q2f",
    "type": "short_answer",
    "question": "Find the derivative of \\( y = 2x^3 - x^4 \\). By substituting \\( x = 2 \\) into the derivative, determine whether the function is increasing, decreasing or stationary at \\( x = 2 \\). (Answer 'increasing', 'decreasing', or 'stationary')",
    "a": "decreasing",
    "difficulty": "easy",
    "timeLimit": 90,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Differentiate \\( y = 2x^3 - x^4 \\).",
        "workingOut": "y' = 6x^2 - 4x^3"
      },
      {
        "explanation": "Substitute \\( x = 2 \\) into the derivative.",
        "workingOut": "y'(2) = 6(2^2) - 4(2^3) = 24 - 32 = -8"
      },
      {
        "explanation": "Since \\( y'(2) < 0 \\), the function is decreasing.",
        "workingOut": "-8 < 0 \\implies \\text{decreasing}"
      }
    ]
  },
  {
    "id": "y12a-3a-q3a",
    "type": "short_answer",
    "question": "Find the derivative \\( f'(x) \\) of \\( f(x) = x^2 - 4x + 9 \\).",
    "a": "2x-4",
    "difficulty": "easy",
    "timeLimit": 90,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Differentiate the quadratic terms of \\( f(x) = x^2 - 4x + 9 \\).",
        "workingOut": "f'(x) = 2x - 4"
      }
    ]
  },
  {
    "id": "y12a-3a-q3bi",
    "type": "short_answer",
    "question": "Determine whether \\( f(x) = x^2 - 4x + 9 \\) is increasing, decreasing or stationary at \\( x = 0 \\).",
    "a": "decreasing",
    "difficulty": "easy",
    "timeLimit": 90,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Evaluate the derivative \\( f'(x) = 2x - 4 \\) at \\( x = 0 \\).",
        "workingOut": "f'(0) = 2(0) - 4 = -4"
      },
      {
        "explanation": "Since \\( f'(0) < 0 \\), the function is decreasing.",
        "workingOut": "-4 < 0 \\implies \\text{decreasing}"
      }
    ]
  },
  {
    "id": "y12a-3a-q3bii",
    "type": "short_answer",
    "question": "Determine whether \\( f(x) = x^2 - 4x + 9 \\) is increasing, decreasing or stationary at \\( x = 1 \\).",
    "a": "decreasing",
    "difficulty": "easy",
    "timeLimit": 90,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Evaluate the derivative \\( f'(x) = 2x - 4 \\) at \\( x = 1 \\).",
        "workingOut": "f'(1) = 2(1) - 4 = -2"
      },
      {
        "explanation": "Since \\( f'(1) < 0 \\), the function is decreasing.",
        "workingOut": "-2 < 0 \\implies \\text{decreasing}"
      }
    ]
  },
  {
    "id": "y12a-3a-q3biii",
    "type": "short_answer",
    "question": "Determine whether \\( f(x) = x^2 - 4x + 9 \\) is increasing, decreasing or stationary at \\( x = 2 \\).",
    "a": "stationary",
    "difficulty": "easy",
    "timeLimit": 90,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Evaluate the derivative \\( f'(x) = 2x - 4 \\) at \\( x = 2 \\).",
        "workingOut": "f'(2) = 2(2) - 4 = 0"
      },
      {
        "explanation": "Since \\( f'(2) = 0 \\), the function is stationary.",
        "workingOut": "f'(2) = 0 \\implies \\text{stationary}"
      }
    ]
  },
  {
    "id": "y12a-3a-q3biv",
    "type": "short_answer",
    "question": "Determine whether \\( f(x) = x^2 - 4x + 9 \\) is increasing, decreasing or stationary at \\( x = 3 \\).",
    "a": "increasing",
    "difficulty": "easy",
    "timeLimit": 90,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Evaluate the derivative \\( f'(x) = 2x - 4 \\) at \\( x = 3 \\).",
        "workingOut": "f'(3) = 2(3) - 4 = 2"
      },
      {
        "explanation": "Since \\( f'(3) > 0 \\), the function is increasing.",
        "workingOut": "2 > 0 \\implies \\text{increasing}"
      }
    ]
  },
  {
    "id": "y12a-3a-q3bv",
    "type": "short_answer",
    "question": "Determine whether \\( f(x) = x^2 - 4x + 9 \\) is increasing, decreasing or stationary at \\( x = -1 \\).",
    "a": "decreasing",
    "difficulty": "easy",
    "timeLimit": 90,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Evaluate the derivative \\( f'(x) = 2x - 4 \\) at \\( x = -1 \\).",
        "workingOut": "f'(-1) = 2(-1) - 4 = -6"
      },
      {
        "explanation": "Since \\( f'(-1) < 0 \\), the function is decreasing.",
        "workingOut": "-6 < 0 \\implies \\text{decreasing}"
      }
    ]
  },
  {
    "id": "y12a-3a-q4a",
    "type": "short_answer",
    "question": "Find the derivative \\( f'(x) \\) of \\( f(x) = x^3 - 3x^2 - 9x \\).",
    "a": "3x^2-6x-9",
    "difficulty": "easy",
    "timeLimit": 90,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Apply the power rule to each term.",
        "workingOut": "f'(x) = 3x^2 - 6x - 9"
      }
    ]
  },
  {
    "id": "y12a-3a-q4bi",
    "type": "short_answer",
    "question": "Determine whether \\( f(x) = x^3 - 3x^2 - 9x \\) is increasing, decreasing or stationary at \\( x = -2 \\).",
    "a": "increasing",
    "difficulty": "easy",
    "timeLimit": 90,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Evaluate \\( f'(x) = 3x^2 - 6x - 9 \\) at \\( x = -2 \\).",
        "workingOut": "f'(-2) = 3(-2)^2 - 6(-2) - 9 = 12 + 12 - 9 = 15"
      },
      {
        "explanation": "Since \\( f'(-2) > 0 \\), the function is increasing.",
        "workingOut": "15 > 0 \\implies \\text{increasing}"
      }
    ]
  },
  {
    "id": "y12a-3a-q4bii",
    "type": "short_answer",
    "question": "Determine whether \\( f(x) = x^3 - 3x^2 - 9x \\) is increasing, decreasing or stationary at \\( x = -1 \\).",
    "a": "stationary",
    "difficulty": "easy",
    "timeLimit": 90,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Evaluate \\( f'(x) = 3x^2 - 6x - 9 \\) at \\( x = -1 \\).",
        "workingOut": "f'(-1) = 3(-1)^2 - 6(-1) - 9 = 3 + 6 - 9 = 0"
      },
      {
        "explanation": "Since \\( f'(-1) = 0 \\), the function is stationary.",
        "workingOut": "f'(-1) = 0 \\implies \\text{stationary}"
      }
    ]
  },
  {
    "id": "y12a-3a-q4biii",
    "type": "short_answer",
    "question": "Determine whether \\( f(x) = x^3 - 3x^2 - 9x \\) is increasing, decreasing or stationary at \\( x = 0 \\).",
    "a": "decreasing",
    "difficulty": "easy",
    "timeLimit": 90,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Evaluate \\( f'(x) = 3x^2 - 6x - 9 \\) at \\( x = 0 \\).",
        "workingOut": "f'(0) = 3(0)^2 - 6(0) - 9 = -9"
      },
      {
        "explanation": "Since \\( f'(0) < 0 \\), the function is decreasing.",
        "workingOut": "-9 < 0 \\implies \\text{decreasing}"
      }
    ]
  },
  {
    "id": "y12a-3a-q4biv",
    "type": "short_answer",
    "question": "Determine whether \\( f(x) = x^3 - 3x^2 - 9x \\) is increasing, decreasing or stationary at \\( x = 3 \\).",
    "a": "stationary",
    "difficulty": "easy",
    "timeLimit": 90,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Evaluate \\( f'(x) = 3x^2 - 6x - 9 \\) at \\( x = 3 \\).",
        "workingOut": "f'(3) = 3(3)^2 - 6(3) - 9 = 27 - 18 - 9 = 0"
      },
      {
        "explanation": "Since \\( f'(3) = 0 \\), the function is stationary.",
        "workingOut": "f'(3) = 0 \\implies \\text{stationary}"
      }
    ]
  },
  {
    "id": "y12a-3a-q4bv",
    "type": "short_answer",
    "question": "Determine whether \\( f(x) = x^3 - 3x^2 - 9x \\) is increasing, decreasing or stationary at \\( x = 4 \\).",
    "a": "increasing",
    "difficulty": "easy",
    "timeLimit": 90,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Evaluate \\( f'(x) = 3x^2 - 6x - 9 \\) at \\( x = 4 \\).",
        "workingOut": "f'(4) = 3(4)^2 - 6(4) - 9 = 48 - 24 - 9 = 15"
      },
      {
        "explanation": "Since \\( f'(4) > 0 \\), the function is increasing.",
        "workingOut": "15 > 0 \\implies \\text{increasing}"
      }
    ]
  },
  {
    "id": "y12a-3a-q5a",
    "type": "short_answer",
    "question": "By finding where the derivative is zero, find the \\( x \\)-coordinate of the stationary point of \\( y = x^2 - 6x \\).",
    "a": "3",
    "difficulty": "easy",
    "timeLimit": 90,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Find the derivative \\( y' \\).",
        "workingOut": "y' = 2x - 6"
      },
      {
        "explanation": "Set the derivative to zero and solve for \\( x \\).",
        "workingOut": "2x - 6 = 0 \\implies x = 3"
      }
    ]
  },
  {
    "id": "y12a-3a-q5b",
    "type": "short_answer",
    "question": "By finding where the derivative is zero, find the \\( x \\)-coordinate of the stationary point of \\( y = x^2 - 8x + 12 \\).",
    "a": "4",
    "difficulty": "easy",
    "timeLimit": 90,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Find the derivative \\( y' \\).",
        "workingOut": "y' = 2x - 8"
      },
      {
        "explanation": "Set the derivative to zero and solve for \\( x \\).",
        "workingOut": "2x - 8 = 0 \\implies x = 4"
      }
    ]
  },
  {
    "id": "y12a-3a-q5c",
    "type": "short_answer",
    "question": "By finding where the derivative is zero, find the \\( x \\)-coordinate of the stationary point of \\( y = x^2 + 4x + 4 \\).",
    "a": "-2",
    "difficulty": "easy",
    "timeLimit": 90,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Find the derivative \\( y' \\).",
        "workingOut": "y' = 2x + 4"
      },
      {
        "explanation": "Set the derivative to zero and solve for \\( x \\).",
        "workingOut": "2x + 4 = 0 \\implies x = -2"
      }
    ]
  },
  {
    "id": "y12a-3a-q5d",
    "type": "short_answer",
    "question": "By finding where the derivative is zero, find the \\( x \\)-coordinate of the stationary point of \\( y = 3x^2 - 12x \\).",
    "a": "2",
    "difficulty": "easy",
    "timeLimit": 90,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Find the derivative \\( y' \\).",
        "workingOut": "y' = 6x - 12"
      },
      {
        "explanation": "Set the derivative to zero and solve for \\( x \\).",
        "workingOut": "6x - 12 = 0 \\implies x = 2"
      }
    ]
  },
  {
    "id": "y12a-3a-q5e",
    "type": "short_answer",
    "question": "By finding where the derivative is zero, find the \\( x \\)-coordinates of the stationary points of \\( y = x^3 - 6x^2 \\). If there are multiple values, list them in ascending order, separated by a comma (e.g. '0,4').",
    "a": "0,4",
    "difficulty": "easy",
    "timeLimit": 90,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Find the derivative \\( y' \\).",
        "workingOut": "y' = 3x^2 - 12x"
      },
      {
        "explanation": "Set the derivative to zero and factor to solve.",
        "workingOut": "3x(x - 4) = 0 \\implies x = 0 \\text{ or } x = 4"
      }
    ]
  },
  {
    "id": "y12a-3a-q5f",
    "type": "short_answer",
    "question": "By finding where the derivative is zero, find the \\( x \\)-coordinates of the stationary points of \\( y = x^3 - 27x \\). If there are multiple values, list them in ascending order, separated by a comma (e.g. '-3,3').",
    "a": "-3,3",
    "difficulty": "easy",
    "timeLimit": 90,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Find the derivative \\( y' \\).",
        "workingOut": "y' = 3x^2 - 27"
      },
      {
        "explanation": "Set the derivative to zero and factor.",
        "workingOut": "3(x - 3)(x + 3) = 0 \\implies x = -3 \\text{ or } x = 3"
      }
    ]
  },
  {
    "id": "y12a-3a-q6a",
    "type": "teacher_review",
    "question": "Explain why the linear function \\( y = -3x + 4 \\) is decreasing for all \\( x \\).",
    "a": "The derivative is \\( y' = -3 \\). Since the derivative is negative and constant (\\( y' < 0 \\)) for all real numbers \\( x \\), the function is strictly decreasing for all \\( x \\).",
    "difficulty": "easy",
    "timeLimit": 90,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Differentiate \\( y = -3x + 4 \\).",
        "workingOut": "y' = -3"
      },
      {
        "explanation": "Analyse the sign of the derivative.",
        "workingOut": "y' = -3 < 0 \\quad \\text{for all } x"
      }
    ]
  },
  {
    "id": "y12a-3a-q6b",
    "type": "teacher_review",
    "question": "Explain why the linear function \\( y = 2x + 5 \\) is increasing for all \\( x \\).",
    "a": "The derivative is \\( y' = 2 \\). Since the derivative is positive and constant (\\( y' > 0 \\)) for all real numbers \\( x \\), the function is strictly increasing for all \\( x \\).",
    "difficulty": "easy",
    "timeLimit": 90,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Differentiate \\( y = 2x + 5 \\).",
        "workingOut": "y' = 2"
      },
      {
        "explanation": "Analyse the sign of the derivative.",
        "workingOut": "y' = 2 > 0 \\quad \\text{for all } x"
      }
    ]
  },
  {
    "id": "y12a-3a-q6c",
    "type": "teacher_review",
    "question": "Explain why \\( f(x) = x^3 + 1 \\) is increasing for all values of \\( x \\), apart from \\( x = 0 \\) where it is stationary.",
    "a": "The derivative is \\( f'(x) = 3x^2 \\). For all \\( x \\neq 0 \\), \\( 3x^2 > 0 \\), which means the function is increasing. At \\( x = 0 \\), \\( f'(0) = 3(0)^2 = 0 \\), which means the function has a horizontal tangent and is stationary.",
    "difficulty": "easy",
    "timeLimit": 90,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Differentiate \\( f(x) = x^3 + 1 \\).",
        "workingOut": "f'(x) = 3x^2"
      },
      {
        "explanation": "Analyse the derivative for \\( x \\neq 0 \\).",
        "workingOut": "x \\neq 0 \\implies x^2 > 0 \\implies f'(x) > 0 \\quad (\\text{increasing})"
      },
      {
        "explanation": "Analyse the derivative at \\( x = 0 \\).",
        "workingOut": "f'(0) = 0 \\quad (\\text{stationary})"
      }
    ]
  },
  {
    "id": "y12a-3a-q6d",
    "type": "teacher_review",
    "question": "Explain why \\( f(x) = 2x^2 \\) is increasing for \\( x > 0 \\) and decreasing for \\( x < 0 \\). Describe what happens at \\( x = 0 \\).",
    "a": "The derivative is \\( f'(x) = 4x \\). For \\( x > 0 \\), \\( f'(x) = 4x > 0 \\) (increasing). For \\( x < 0 \\), \\( f'(x) = 4x < 0 \\) (decreasing). At \\( x = 0 \\), \\( f'(0) = 0 \\), meaning the function has a stationary point (a vertex).",
    "difficulty": "easy",
    "timeLimit": 90,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Differentiate \\( f(x) = 2x^2 \\).",
        "workingOut": "f'(x) = 4x"
      },
      {
        "explanation": "Consider the sign of \\( f'(x) \\) on each interval.",
        "workingOut": "\\begin{aligned} x > 0 &\\implies f'(x) > 0 \\quad (\\text{increasing}) \\\\ x < 0 &\\implies f'(x) < 0 \\quad (\\text{decreasing}) \\\\ x = 0 &\\implies f'(0) = 0 \\quad (\\text{stationary}) \\end{aligned}"
      }
    ]
  },
  {
    "id": "y12a-3a-q7",
    "type": "subquestions",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Differentiate each function using the chain rule. Then evaluate \\( f'(0) \\) to establish whether the curve is increasing, decreasing or stationary at \\( x = 0 \\).",
    "t": "Increasing, decreasing and stationary at a point",
    "subQuestions": [
      {
        "id": "y12a-3a-q7a",
        "type": "short_answer",
        "question": "a) \\( f(x) = (x-2)^3 \\). Find \\( f'(0) \\) and state whether the curve is increasing, decreasing, or stationary at \\( x = 0 \\). (Format: 'value, status' e.g. '12, increasing')",
        "a": "12, increasing",
        "solutionSteps": [
          {
            "explanation": "Differentiate \\( f(x) = (x-2)^3 \\) using the chain rule.",
            "workingOut": "f'(x) = 3(x-2)^2 \\times 1 = 3(x-2)^2"
          },
          {
            "explanation": "Evaluate the derivative at \\( x = 0 \\).",
            "workingOut": "f'(0) = 3(0-2)^2 = 3(4) = 12"
          },
          {
            "explanation": "Since \\( f'(0) > 0 \\), the curve is increasing.",
            "workingOut": "12 > 0 \\implies \\text{increasing}"
          }
        ]
      },
      {
        "id": "y12a-3a-q7b",
        "type": "short_answer",
        "question": "b) \\( f(x) = (3x-1)^4 \\). Find \\( f'(0) \\) and state whether the curve is increasing, decreasing, or stationary at \\( x = 0 \\). (Format: 'value, status' e.g. '-12, decreasing')",
        "a": "-12, decreasing",
        "solutionSteps": [
          {
            "explanation": "Differentiate \\( f(x) = (3x-1)^4 \\) using the chain rule.",
            "workingOut": "f'(x) = 4(3x-1)^3 \\times 3 = 12(3x-1)^3"
          },
          {
            "explanation": "Evaluate the derivative at \\( x = 0 \\).",
            "workingOut": "f'(0) = 12(3(0)-1)^3 = 12(-1)^3 = -12"
          },
          {
            "explanation": "Since \\( f'(0) < 0 \\), the curve is decreasing.",
            "workingOut": "-12 < 0 \\implies \\text{decreasing}"
          }
        ]
      },
      {
        "id": "y12a-3a-q7c",
        "type": "short_answer",
        "question": "c) \\( f(x) = (x^2+2)^2 \\). Find \\( f'(0) \\) and state whether the curve is increasing, decreasing, or stationary at \\( x = 0 \\). (Format: 'value, status' e.g. '0, stationary')",
        "a": "0, stationary",
        "solutionSteps": [
          {
            "explanation": "Differentiate \\( f(x) = (x^2+2)^2 \\) using the chain rule.",
            "workingOut": "f'(x) = 2(x^2+2) \\times 2x = 4x(x^2+2)"
          },
          {
            "explanation": "Evaluate the derivative at \\( x = 0 \\).",
            "workingOut": "f'(0) = 4(0)(0^2+2) = 0"
          },
          {
            "explanation": "Since \\( f'(0) = 0 \\), the curve is stationary.",
            "workingOut": "0 \\implies \\text{stationary}"
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-3a-q8",
    "type": "subquestions",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Differentiate each function using the product rule. Then evaluate \\( f'(1) \\) to establish whether the curve is increasing, decreasing or stationary at \\( x = 1 \\).",
    "t": "Increasing, decreasing and stationary at a point",
    "subQuestions": [
      {
        "id": "y12a-3a-q8a",
        "type": "short_answer",
        "question": "a) \\( f(x) = (x-4)(x+2) \\). Find \\( f'(1) \\) and state whether the curve is increasing, decreasing, or stationary at \\( x = 1 \\). (Format: 'value, status')",
        "a": "0, stationary",
        "solutionSteps": [
          {
            "explanation": "Differentiate \\( f(x) = (x-4)(x+2) \\) using the product rule.",
            "workingOut": "f'(x) = 1(x+2) + (x-4)1 = 2x - 2"
          },
          {
            "explanation": "Evaluate \\( f'(1) \\).",
            "workingOut": "f'(1) = 2(1) - 2 = 0"
          },
          {
            "explanation": "Since \\( f'(1) = 0 \\), the curve is stationary.",
            "workingOut": "0 \\implies \\text{stationary}"
          }
        ]
      },
      {
        "id": "y12a-3a-q8b",
        "type": "short_answer",
        "question": "b) \\( f(x) = (x-3)(x^2+4) \\). Find \\( f'(1) \\) and state whether the curve is increasing, decreasing, or stationary at \\( x = 1 \\). (Format: 'value, status')",
        "a": "1, increasing",
        "solutionSteps": [
          {
            "explanation": "Differentiate using the product rule.",
            "workingOut": "f'(x) = 1(x^2+4) + (x-3)(2x) = x^2+4 + 2x^2 - 6x = 3x^2 - 6x + 4"
          },
          {
            "explanation": "Evaluate at \\( x = 1 \\).",
            "workingOut": "f'(1) = 3(1)^2 - 6(1) + 4 = 1"
          },
          {
            "explanation": "Since \\( f'(1) > 0 \\), the curve is increasing.",
            "workingOut": "1 > 0 \\implies \\text{increasing}"
          }
        ]
      },
      {
        "id": "y12a-3a-q8c",
        "type": "short_answer",
        "question": "c) \\( f(x) = (x^3+3)(2-x^2) \\). Find \\( f'(1) \\) and state whether the curve is increasing, decreasing, or stationary at \\( x = 1 \\). (Format: 'value, status')",
        "a": "-5, decreasing",
        "solutionSteps": [
          {
            "explanation": "Differentiate using the product rule.",
            "workingOut": "f'(x) = (3x^2)(2-x^2) + (x^3+3)(-2x) = 6x^2 - 3x^4 - 2x^4 - 6x = -5x^4 + 6x^2 - 6x"
          },
          {
            "explanation": "Evaluate at \\( x = 1 \\).",
            "workingOut": "f'(1) = -5(1)^4 + 6(1)^2 - 6(1) = -5"
          },
          {
            "explanation": "Since \\( f'(1) < 0 \\), the curve is decreasing.",
            "workingOut": "-5 < 0 \\implies \\text{decreasing}"
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-3a-q9",
    "type": "subquestions",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Differentiate each function using the quotient rule. Then evaluate \\( f'(2) \\) to establish whether the curve is increasing, decreasing or stationary at \\( x = 2 \\).",
    "t": "Increasing, decreasing and stationary at a point",
    "subQuestions": [
      {
        "id": "y12a-3a-q9a",
        "type": "short_answer",
        "question": "a) \\( f(x) = \\frac{x}{x+2} \\). Find \\( f'(2) \\) and state whether the curve is increasing, decreasing, or stationary at \\( x = 2 \\). (Format fraction/status, e.g. '1/8, increasing')",
        "a": "1/8, increasing",
        "solutionSteps": [
          {
            "explanation": "Apply the quotient rule: \\( \\frac{u'v - uv'}{v^2} \\).",
            "workingOut": "f'(x) = \\frac{1(x+2) - x(1)}{(x+2)^2} = \\frac{2}{(x+2)^2}"
          },
          {
            "explanation": "Evaluate at \\( x = 2 \\).",
            "workingOut": "f'(2) = \\frac{2}{(2+2)^2} = \\frac{2}{16} = \\frac{1}{8}"
          },
          {
            "explanation": "Since \\( f'(2) = 1/8 > 0 \\), it is increasing.",
            "workingOut": "1/8 > 0 \\implies \\text{increasing}"
          }
        ]
      },
      {
        "id": "y12a-3a-q9b",
        "type": "short_answer",
        "question": "b) \\( f(x) = \\frac{x+3}{x-1} \\). Find \\( f'(2) \\) and state whether the curve is increasing, decreasing, or stationary at \\( x = 2 \\). (Format: 'value, status')",
        "a": "-4, decreasing",
        "solutionSteps": [
          {
            "explanation": "Apply the quotient rule.",
            "workingOut": "f'(x) = \\frac{1(x-1) - (x+3)1}{(x-1)^2} = \\frac{-4}{(x-1)^2}"
          },
          {
            "explanation": "Evaluate at \\( x = 2 \\).",
            "workingOut": "f'(2) = \\frac{-4}{(2-1)^2} = -4"
          },
          {
            "explanation": "Since \\( f'(2) < 0 \\), it is decreasing.",
            "workingOut": "-4 < 0 \\implies \\text{decreasing}"
          }
        ]
      },
      {
        "id": "y12a-3a-q9c",
        "type": "short_answer",
        "question": "c) \\( f(x) = \\frac{x^2}{x+1} \\). Find \\( f'(2) \\) and state whether the curve is increasing, decreasing, or stationary at \\( x = 2 \\). (Format: 'fraction, status' e.g. '8/9, increasing')",
        "a": "8/9, increasing",
        "solutionSteps": [
          {
            "explanation": "Apply the quotient rule.",
            "workingOut": "f'(x) = \\frac{2x(x+1) - x^2(1)}{(x+1)^2} = \\frac{x^2+2x}{(x+1)^2}"
          },
          {
            "explanation": "Evaluate at \\( x = 2 \\).",
            "workingOut": "f'(2) = \\frac{2^2 + 2(2)}{(2+1)^2} = \\frac{8}{9}"
          },
          {
            "explanation": "Since \\( f'(2) = 8/9 > 0 \\), it is increasing.",
            "workingOut": "8/9 > 0 \\implies \\text{increasing}"
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-3a-q10a",
    "type": "short_answer",
    "question": "Differentiate \\( f(x) = 2\\sqrt{x} \\) by writing it in index form. Then evaluate \\( f'(1) \\) to determine whether the curve is increasing, decreasing or stationary at \\( x = 1 \\). (Format: 'value, status')",
    "a": "1, increasing",
    "difficulty": "medium",
    "timeLimit": 120,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Rewrite function in index form and differentiate.",
        "workingOut": "f(x) = 2x^{1/2} \\implies f'(x) = 2 \\times \\frac{1}{2}x^{-1/2} = x^{-1/2} = \\frac{1}{\\sqrt{x}}"
      },
      {
        "explanation": "Evaluate at \\( x = 1 \\).",
        "workingOut": "f'(1) = \\frac{1}{\\sqrt{1}} = 1"
      },
      {
        "explanation": "Determine status from the sign of the derivative.",
        "workingOut": "1 > 0 \\implies \\text{increasing}"
      }
    ]
  },
  {
    "id": "y12a-3a-q10b",
    "type": "short_answer",
    "question": "Differentiate \\( f(x) = \\frac{2}{x} \\) by writing it in index form. Then evaluate \\( f'(1) \\) to determine whether the curve is increasing, decreasing or stationary at \\( x = 1 \\). (Format: 'value, status')",
    "a": "-2, decreasing",
    "difficulty": "medium",
    "timeLimit": 120,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Rewrite in index form and differentiate.",
        "workingOut": "f(x) = 2x^{-1} \\implies f'(x) = -2x^{-2} = -\\frac{2}{x^2}"
      },
      {
        "explanation": "Evaluate at \\( x = 1 \\).",
        "workingOut": "f'(1) = -\\frac{2}{1^2} = -2"
      },
      {
        "explanation": "Determine status from the sign of the derivative.",
        "workingOut": "-2 < 0 \\implies \\text{decreasing}"
      }
    ]
  },
  {
    "id": "y12a-3a-q10c",
    "type": "short_answer",
    "question": "Differentiate \\( f(x) = -\\frac{2}{x^2} \\) by writing it in index form. Then evaluate \\( f'(1) \\) to determine whether the curve is increasing, decreasing or stationary at \\( x = 1 \\). (Format: 'value, status')",
    "a": "4, increasing",
    "difficulty": "medium",
    "timeLimit": 120,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Rewrite in index form and differentiate.",
        "workingOut": "f(x) = -2x^{-2} \\implies f'(x) = 4x^{-3} = \\frac{4}{x^3}"
      },
      {
        "explanation": "Evaluate at \\( x = 1 \\).",
        "workingOut": "f'(1) = \\frac{4}{1^3} = 4"
      },
      {
        "explanation": "Determine status from the sign of the derivative.",
        "workingOut": "4 > 0 \\implies \\text{increasing}"
      }
    ]
  },
  {
    "id": "y12a-3a-q11",
    "type": "subquestions",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Consider the function \\( f(x) = 6x - x^2 \\).",
    "t": "Increasing, decreasing and stationary at a point",
    "subQuestions": [
      {
        "id": "y12a-3a-q11a",
        "type": "short_answer",
        "question": "a) Find the derivative \\( f'(x) \\).",
        "a": "6-2x",
        "solutionSteps": [
          {
            "explanation": "Differentiate the terms.",
            "workingOut": "f'(x) = 6 - 2x"
          }
        ]
      },
      {
        "id": "y12a-3a-q11bi",
        "type": "short_answer",
        "question": "b) i) For what values of \\( x \\) is \\( f'(x) > 0 \\)?",
        "a": "x<3",
        "solutionSteps": [
          {
            "explanation": "Solve the inequality \\( f'(x) > 0 \\).",
            "workingOut": "6 - 2x > 0 \\implies 2x < 6 \\implies x < 3"
          }
        ]
      },
      {
        "id": "y12a-3a-q11bii",
        "type": "short_answer",
        "question": "b) ii) For what values of \\( x \\) is \\( f'(x) < 0 \\)?",
        "a": "x>3",
        "solutionSteps": [
          {
            "explanation": "Solve the inequality \\( f'(x) < 0 \\).",
            "workingOut": "6 - 2x < 0 \\implies 2x > 6 \\implies x > 3"
          }
        ]
      },
      {
        "id": "y12a-3a-q11biii",
        "type": "short_answer",
        "question": "b) iii) For what values of \\( x \\) is \\( f'(x) = 0 \\)?",
        "a": "x=3",
        "solutionSteps": [
          {
            "explanation": "Solve \\( f'(x) = 0 \\).",
            "workingOut": "6 - 2x = 0 \\implies x = 3"
          }
        ]
      },
      {
        "id": "y12a-3a-q11c",
        "type": "teacher_review",
        "question": "c) Find \\( f(3) \\). Then, by interpreting the results from part b geometrically, explain the shape of the graph \\( y = f(x) \\).",
        "a": "\\( f(3) = 6(3) - 3^2 = 18 - 9 = 9 \\). Geometrically, \\( (3, 9) \\) is the vertex of the concave-down parabola \\( y = 6x - x^2 \\). At \\( x = 3 \\), \\( f'(3) = 0 \\), giving a horizontal tangent. For \\( x < 3 \\), \\( f'(x) > 0 \\), meaning the curve is rising (increasing). For \\( x > 3 \\), \\( f'(x) < 0 \\), meaning the curve is falling (decreasing).",
        "solutionSteps": [
          {
            "explanation": "Substitute \\( x = 3 \\) into the original function.",
            "workingOut": "f(3) = 6(3) - (3)^2 = 9"
          },
          {
            "explanation": "Combine the intervals of increase, decrease and the stationary point to describe the geometry.",
            "workingOut": "\\text{Vertex at } (3,9), \\text{ rising for } x < 3, \\text{ stationary at } x=3, \\text{ falling for } x > 3."
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-3a-q12",
    "type": "subquestions",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Consider the function \\( f(x) = x^2 - 6x + 8 \\).",
    "t": "Increasing, decreasing and stationary at a point",
    "subQuestions": [
      {
        "id": "y12a-3a-q12a",
        "type": "short_answer",
        "question": "a) Find the derivative \\( f'(x) \\).",
        "a": "2x-6",
        "solutionSteps": [
          {
            "explanation": "Differentiate using power rule.",
            "workingOut": "f'(x) = 2x - 6"
          }
        ]
      },
      {
        "id": "y12a-3a-q12bi",
        "type": "short_answer",
        "question": "b) i) For what values of \\( x \\) is \\( f'(x) > 0 \\)?",
        "a": "x>3",
        "solutionSteps": [
          {
            "explanation": "Solve inequality \\( f'(x) > 0 \\).",
            "workingOut": "2x - 6 > 0 \\implies 2x > 6 \\implies x > 3"
          }
        ]
      },
      {
        "id": "y12a-3a-q12bii",
        "type": "short_answer",
        "question": "b) ii) For what values of \\( x \\) is \\( f'(x) < 0 \\)?",
        "a": "x<3",
        "solutionSteps": [
          {
            "explanation": "Solve inequality \\( f'(x) < 0 \\).",
            "workingOut": "2x - 6 < 0 \\implies 2x < 6 \\implies x < 3"
          }
        ]
      },
      {
        "id": "y12a-3a-q12biii",
        "type": "short_answer",
        "question": "b) iii) For what values of \\( x \\) is \\( f'(x) = 0 \\)?",
        "a": "x=3",
        "solutionSteps": [
          {
            "explanation": "Solve equation \\( f'(x) = 0 \\).",
            "workingOut": "2x - 6 = 0 \\implies x = 3"
          }
        ]
      },
      {
        "id": "y12a-3a-q12c",
        "type": "teacher_review",
        "question": "c) Find \\( f(3) \\). Then, by interpreting the results from part b geometrically, explain the shape of the graph \\( y = f(x) \\).",
        "a": "\\( f(3) = 3^2 - 6(3) + 8 = 9 - 18 + 8 = -1 \\). Geometrically, \\( (3, -1) \\) is the minimum vertex of the concave-up parabola \\( y = x^2 - 6x + 8 \\). The tangent line at the vertex is horizontal since \\( f'(3) = 0 \\). For \\( x < 3 \\), \\( f'(x) < 0 \\) which means the curve is decreasing. For \\( x > 3 \\), \\( f'(x) > 0 \\) which means the curve is increasing.",
        "solutionSteps": [
          {
            "explanation": "Substitute \\( x = 3 \\) into the original function.",
            "workingOut": "f(3) = 3^2 - 6(3) + 8 = -1"
          },
          {
            "explanation": "Describe the geometry using the derivative properties.",
            "workingOut": "\\text{Vertex at } (3,-1), \\text{ decreasing for } x < 3, \\text{ increasing for } x > 3."
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-3a-q13",
    "type": "subquestions",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Let \\( f(x) = x^3 - 6x^2 - 15x - 4 \\).",
    "t": "Increasing, decreasing and stationary at a point",
    "subQuestions": [
      {
        "id": "y12a-3a-q13a",
        "type": "teacher_review",
        "question": "a) Show that the derivative is given by \\( f'(x) = 3(x-5)(x+1) \\).",
        "a": "Differentiating \\( f(x) \\) gives \\( f'(x) = 3x^2 - 12x - 15 \\). Factoring out the common factor 3: \\( f'(x) = 3(x^2 - 4x - 5) \\). Factoring the quadratic inside the parentheses: \\( f'(x) = 3(x-5)(x+1) \\).",
        "solutionSteps": [
          {
            "explanation": "Find the derivative of the polynomial terms.",
            "workingOut": "f'(x) = 3x^2 - 12x - 15"
          },
          {
            "explanation": "Factor out 3.",
            "workingOut": "f'(x) = 3(x^2 - 4x - 5)"
          },
          {
            "explanation": "Factor the quadratic trinomial.",
            "workingOut": "f'(x) = 3(x-5)(x+1)"
          }
        ]
      },
      {
        "id": "y12a-3a-q13b",
        "type": "teacher_review",
        "question": "b) By sketching the graph of \\( y = f'(x) \\), show that \\( f(x) \\) is increasing when \\( x > 5 \\) or \\( x < -1 \\).",
        "a": "The graph of the derivative \\( y = f'(x) = 3(x-5)(x+1) \\) is a parabola opening upwards with x-intercepts at \\( x = -1 \\) and \\( x = 5 \\). The curve lies above the x-axis (meaning \\( f'(x) > 0 \\)) for \\( x < -1 \\) and \\( x > 5 \\). Since \\( f'(x) > 0 \\) in these regions, \\( f(x) \\) is increasing when \\( x > 5 \\) or \\( x < -1 \\).",
        "solutionSteps": [
          {
            "explanation": "Identify the key features of the derivative function \\( y = 3(x-5)(x+1) \\).",
            "workingOut": "\\text{Parabola opening upwards, intercepts at } x = -1, 5"
          },
          {
            "explanation": "Determine where the derivative is positive.",
            "workingOut": "f'(x) > 0 \\implies x < -1 \\text{ or } x > 5"
          },
          {
            "explanation": "Connect positive derivative to the increasing behavior of the function.",
            "workingOut": "\\text{Since } f'(x) > 0, \\, f(x) \\text{ is increasing for } x < -1 \\text{ or } x > 5"
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-3a-q14",
    "type": "subquestions",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Consider the function \\( f(x) = x^3 + x^2 - 5x + 3 \\).",
    "t": "Increasing, decreasing and stationary at a point",
    "subQuestions": [
      {
        "id": "y12a-3a-q14a",
        "type": "short_answer",
        "question": "a) Find the derivative \\( f'(x) \\).",
        "a": "3x^2+2x-5",
        "solutionSteps": [
          {
            "explanation": "Differentiate terms using power rule.",
            "workingOut": "f'(x) = 3x^2 + 2x - 5"
          }
        ]
      },
      {
        "id": "y12a-3a-q14b",
        "type": "short_answer",
        "question": "b) Use factoring to find the zeroes of \\( f'(x) \\). (Format: ascending order separated by comma, e.g. '-5/3,1')",
        "a": "-5/3,1",
        "solutionSteps": [
          {
            "explanation": "Set the derivative to zero.",
            "workingOut": "3x^2 + 2x - 5 = 0"
          },
          {
            "explanation": "Factor the quadratic by splitting the middle term: \\( 3x^2 + 5x - 3x - 5 = 0 \\).",
            "workingOut": "x(3x + 5) - 1(3x + 5) = 0 \\implies (3x+5)(x-1) = 0"
          },
          {
            "explanation": "Solve for the roots.",
            "workingOut": "x = -\\frac{5}{3} \\quad \\text{and} \\quad x = 1"
          }
        ]
      },
      {
        "id": "y12a-3a-q14c",
        "type": "teacher_review",
        "question": "c) Sketch the graph of \\( y = f'(x) \\).",
        "a": "The graph is a parabola opening upwards with x-intercepts at \\( x = -5/3 \\) and \\( x = 1 \\), and y-intercept at \\( y = -5 \\). The vertex lies at \\( x = -1/3 \\).",
        "solutionSteps": [
          {
            "explanation": "Plot key coordinates: intercepts at \\( (-5/3, 0) \\), \\( (1, 0) \\), and \\( (0, -5) \\).",
            "workingOut": "\\text{Intercepts: } (-1.67, 0), \\, (1, 0), \\, (0, -5)"
          }
        ]
      },
      {
        "id": "y12a-3a-q14d",
        "type": "short_answer",
        "question": "d) Hence find the values of \\( x \\) for which \\( f(x) \\) is decreasing. (Format inequality, e.g. '-5/3<x<1')",
        "a": "-5/3<x<1",
        "solutionSteps": [
          {
            "explanation": "The function decreases where the derivative is negative (\\( f'(x) < 0 \\)).",
            "workingOut": "3x^2 + 2x - 5 < 0"
          },
          {
            "explanation": "From the parabola graph, the derivative is negative between the two roots.",
            "workingOut": "-\\frac{5}{3} < x < 1"
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-3a-q15a",
    "type": "short_answer",
    "question": "Find the derivative of \\( y = x^2 - 6x + 5 \\). By solving the inequality \\( y' > 0 \\), find the values of \\( x \\) for which the function is increasing. (Format: 'x>3')",
    "a": "x>3",
    "difficulty": "medium",
    "timeLimit": 120,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Find the derivative \\( y' \\).",
        "workingOut": "y' = 2x - 6"
      },
      {
        "explanation": "Solve the inequality \\( y' > 0 \\).",
        "workingOut": "2x - 6 > 0 \\implies 2x > 6 \\implies x > 3"
      }
    ]
  },
  {
    "id": "y12a-3a-q15b",
    "type": "short_answer",
    "question": "Find the derivative of \\( y = 9 - 8x - x^2 \\). By solving the inequality \\( y' > 0 \\), find the values of \\( x \\) for which the function is increasing. (Format: 'x<-4')",
    "a": "x<-4",
    "difficulty": "medium",
    "timeLimit": 120,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Find the derivative \\( y' \\).",
        "workingOut": "y' = -8 - 2x"
      },
      {
        "explanation": "Solve the inequality \\( y' > 0 \\).",
        "workingOut": "-8 - 2x > 0 \\implies 2x < -8 \\implies x < -4"
      }
    ]
  },
  {
    "id": "y12a-3a-q15c",
    "type": "short_answer",
    "question": "Find the derivative of \\( y = x^3 - 12x \\). By solving the inequality \\( y' > 0 \\), find the values of \\( x \\) for which the function is increasing. (Format: 'x<-2,x>2')",
    "a": "x<-2,x>2",
    "difficulty": "medium",
    "timeLimit": 120,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Find the derivative \\( y' \\).",
        "workingOut": "y' = 3x^2 - 12"
      },
      {
        "explanation": "Solve the inequality \\( y' > 0 \\).",
        "workingOut": "3x^2 - 12 > 0 \\implies x^2 > 4 \\implies x < -2 \\text{ or } x > 2"
      }
    ]
  },
  {
    "id": "y12a-3a-q15d",
    "type": "short_answer",
    "question": "Find the derivative of \\( y = x^3 - 6x^2 + 10 \\). By solving the inequality \\( y' > 0 \\), find the values of \\( x \\) for which the function is increasing. (Format: 'x<0,x>4')",
    "a": "x<0,x>4",
    "difficulty": "medium",
    "timeLimit": 120,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Find the derivative \\( y' \\).",
        "workingOut": "y' = 3x^2 - 12x"
      },
      {
        "explanation": "Solve the inequality \\( y' > 0 \\).",
        "workingOut": "3x(x - 4) > 0 \\implies x < 0 \\text{ or } x > 4"
      }
    ]
  },
  {
    "id": "y12a-3a-q16a",
    "type": "multiple_choice",
    "question": "The graph of function A, \\( y = f(x) \\), is shown below. Match this function with the graph of its derivative.\n\nCandidates:\n- **Graph I**: A parabola opening upwards with roots at \\( x = -1 \\) and \\( x = 1 \\).\n- **Graph II**: A straight line through the origin with negative slope.\n- **Graph III**: A straight line through the origin with positive slope.\n- **Graph IV**: A parabola opening downwards with roots at \\( x = -1 \\) and \\( x = 1 \\).",
    "opts": [
      "Graph III",
      "Graph I",
      "Graph II",
      "Graph IV"
    ],
    "a": "0",
    "difficulty": "medium",
    "timeLimit": 120,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Analyze the graph of function A. It is a parabola opening upwards (concave up).",
        "workingOut": "f(x) = x^2 - 2"
      },
      {
        "explanation": "Differentiate to find the general shape of the derivative.",
        "workingOut": "f'(x) = 2x"
      },
      {
        "explanation": "The derivative \\( y = 2x \\) is a straight line through the origin with a positive slope (Graph III).",
        "workingOut": "\\text{Derivative line rises} \\implies \\text{Graph III}"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 220,
        "boundingbox": [
          -4,
          6,
          4,
          -4
        ],
        "script": "board.suspendUpdate();\nboard.create('functiongraph', [function(x){return x*x - 2;}, -3.5, 3.5], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('arrow', [[-3.5,0], [3.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.5], [0,5.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y12a-3a-q16b",
    "type": "multiple_choice",
    "question": "The graph of function B, \\( y = f(x) \\), is shown below. Match this function with the graph of its derivative.\n\nCandidates:\n- **Graph I**: A parabola opening upwards with roots at \\( x = -1 \\) and \\( x = 1 \\).\n- **Graph II**: A straight line through the origin with negative slope.\n- **Graph III**: A straight line through the origin with positive slope.\n- **Graph IV**: A parabola opening downwards with roots at \\( x = -1 \\) and \\( x = 1 \\).",
    "opts": [
      "Graph I",
      "Graph III",
      "Graph II",
      "Graph IV"
    ],
    "a": "0",
    "difficulty": "medium",
    "timeLimit": 120,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Analyze function B. It is a cubic curve rising, having a local max at \\( x = -1 \\), a local min at \\( x = 1 \\).",
        "workingOut": "f(x) = x^3 - 3x"
      },
      {
        "explanation": "Differentiate.",
        "workingOut": "f'(x) = 3x^2 - 3"
      },
      {
        "explanation": "The derivative is a parabola opening upwards with roots at \\( x = -1 \\) and \\( x = 1 \\) (Graph I).",
        "workingOut": "\\text{Upward parabola with roots } \\pm 1 \\implies \\text{Graph I}"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 220,
        "boundingbox": [
          -4,
          6,
          4,
          -6
        ],
        "script": "board.suspendUpdate();\nboard.create('functiongraph', [function(x){return x*x*x - 3*x;}, -3.5, 3.5], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('arrow', [[-3.5,0], [3.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-5.5], [0,5.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y12a-3a-q16c",
    "type": "multiple_choice",
    "question": "The graph of function C, \\( y = f(x) \\), is shown below. Match this function with the graph of its derivative.\n\nCandidates:\n- **Graph I**: A parabola opening upwards with roots at \\( x = -1 \\) and \\( x = 1 \\).\n- **Graph II**: A straight line through the origin with negative slope.\n- **Graph III**: A straight line through the origin with positive slope.\n- **Graph IV**: A parabola opening downwards with roots at \\( x = -1 \\) and \\( x = 1 \\).",
    "opts": [
      "Graph II",
      "Graph I",
      "Graph III",
      "Graph IV"
    ],
    "a": "0",
    "difficulty": "medium",
    "timeLimit": 120,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Analyze function C. It is a parabola opening downwards.",
        "workingOut": "f(x) = -x^2 + 4"
      },
      {
        "explanation": "Differentiate.",
        "workingOut": "f'(x) = -2x"
      },
      {
        "explanation": "The derivative is a straight line through the origin with a negative slope (Graph II).",
        "workingOut": "\\text{Falling straight line} \\implies \\text{Graph II}"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 220,
        "boundingbox": [
          -4,
          6,
          4,
          -4
        ],
        "script": "board.suspendUpdate();\nboard.create('functiongraph', [function(x){return -x*x + 4;}, -3.5, 3.5], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('arrow', [[-3.5,0], [3.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.5], [0,5.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y12a-3a-q16d",
    "type": "multiple_choice",
    "question": "The graph of function D, \\( y = f(x) \\), is shown below. Match this function with the graph of its derivative.\n\nCandidates:\n- **Graph I**: A parabola opening upwards with roots at \\( x = -1 \\) and \\( x = 1 \\).\n- **Graph II**: A straight line through the origin with negative slope.\n- **Graph III**: A straight line through the origin with positive slope.\n- **Graph IV**: A parabola opening downwards with roots at \\( x = -1 \\) and \\( x = 1 \\).",
    "opts": [
      "Graph IV",
      "Graph I",
      "Graph II",
      "Graph III"
    ],
    "a": "0",
    "difficulty": "medium",
    "timeLimit": 120,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Analyze function D. It is a cubic curve that is falling, having a local min at \\( x = -1 \\), local max at \\( x = 1 \\).",
        "workingOut": "f(x) = -x^3 + 3x"
      },
      {
        "explanation": "Differentiate.",
        "workingOut": "f'(x) = -3x^2 + 3"
      },
      {
        "explanation": "The derivative is a parabola opening downwards with roots at \\( x = -1 \\) and \\( x = 1 \\) (Graph IV).",
        "workingOut": "\\text{Downward parabola with roots } \\pm 1 \\implies \\text{Graph IV}"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 220,
        "boundingbox": [
          -4,
          6,
          4,
          -6
        ],
        "script": "board.suspendUpdate();\nboard.create('functiongraph', [function(x){return -x*x*x + 3*x;}, -3.5, 3.5], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('arrow', [[-3.5,0], [3.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-5.5], [0,5.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y12a-3a-q17",
    "type": "subquestions",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Consider the function \\( f(x) = -\\frac{2}{x} \\).",
    "t": "Increasing, decreasing and stationary at a point",
    "subQuestions": [
      {
        "id": "y12a-3a-q17a",
        "type": "teacher_review",
        "question": "a) Find \\( f'(x) \\), and hence prove that \\( f(x) \\) increases for all \\( x \\) in its domain.",
        "a": "\\( f(x) = -2x^{-1} \\implies f'(x) = 2x^{-2} = \\frac{2}{x^2} \\). Since \\( x^2 > 0 \\) for all \\( x \\neq 0 \\) (which is the domain of the function), we have \\( f'(x) = \\frac{2}{x^2} > 0 \\) for all \\( x \\) in the domain. Since the derivative is strictly positive, \\( f(x) \\) is increasing for all \\( x \\) in its domain.",
        "solutionSteps": [
          {
            "explanation": "Differentiate using index rules.",
            "workingOut": "f'(x) = 2x^{-2} = \\frac{2}{x^2}"
          },
          {
            "explanation": "Analyse sign of \\( f'(x) \\) over domain \\( x \\neq 0 \\).",
            "workingOut": "x \\neq 0 \\implies x^2 > 0 \\implies \\frac{2}{x^2} > 0 \\implies f'(x) > 0"
          }
        ]
      },
      {
        "id": "y12a-3a-q17b",
        "type": "teacher_review",
        "question": "b) Sketch a graph of \\( f(x) = -\\frac{2}{x} \\), and explain why \\( f(-1) > f(2) \\) despite this fact.",
        "a": "Evaluate function values: \\( f(-1) = 2 \\) and \\( f(2) = -1 \\). Even though the function is increasing on each branch \\( x < 0 \\) and \\( x > 0 \\) individually, the function is discontinuous at \\( x = 0 \\). Therefore, the 'increasing' property cannot be applied across the vertical asymptote to compare \\( f(-1) \\) and \\( f(2) \\).",
        "solutionSteps": [
          {
            "explanation": "Calculate \\( f(-1) \\) and \\( f(2) \\).",
            "workingOut": "f(-1) = -\\frac{2}{-1} = 2, \\quad f(2) = -\\frac{2}{2} = -1"
          },
          {
            "explanation": "Note the vertical asymptote at \\( x = 0 \\).",
            "workingOut": "\\text{Discontinuity at } x=0 \\implies \\text{cannot compare values across branches}"
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-3a-q18",
    "type": "subquestions",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Consider the function \\( f(x) = \\frac{3x}{x-4} \\).",
    "t": "Increasing, decreasing and stationary at a point",
    "subQuestions": [
      {
        "id": "y12a-3a-q18a",
        "type": "short_answer",
        "question": "a) Use the quotient rule to find the derivative \\( f'(x) \\).",
        "a": "-12/(x-4)^2",
        "solutionSteps": [
          {
            "explanation": "Differentiate using quotient rule: \\( u = 3x, \\, v = x-4 \\).",
            "workingOut": "f'(x) = \\frac{3(x-4) - 3x(1)}{(x-4)^2}"
          },
          {
            "explanation": "Simplify numerator.",
            "workingOut": "f'(x) = \\frac{3x - 12 - 3x}{(x-4)^2} = \\frac{-12}{(x-4)^2}"
          }
        ]
      },
      {
        "id": "y12a-3a-q18b",
        "type": "teacher_review",
        "question": "b) Explain why \\( f(x) \\) is decreasing for all \\( x \\neq 4 \\).",
        "a": "The derivative is \\( f'(x) = \\frac{-12}{(x-4)^2} \\). For all \\( x \\neq 4 \\), the denominator \\( (x-4)^2 \\) is strictly positive. Since the numerator is negative (\\( -12 \\)), the quotient \\( f'(x) < 0 \\) for all \\( x \\neq 4 \\). Since \\( f'(x) \\) is negative, \\( f(x) \\) is strictly decreasing for all \\( x \\neq 4 \\).",
        "solutionSteps": [
          {
            "explanation": "Evaluate the sign of the denominator.",
            "workingOut": "(x-4)^2 > 0 \\quad \\text{for } x \\neq 4"
          },
          {
            "explanation": "Determine the overall sign of the derivative.",
            "workingOut": "f'(x) = \\frac{-12}{(x-4)^2} < 0 \\quad \\text{for } x \\neq 4"
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-3a-q19",
    "type": "subquestions",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Consider the function \\( f(x) = \\frac{x^3}{x^2+3} \\).",
    "t": "Increasing, decreasing and stationary at a point",
    "subQuestions": [
      {
        "id": "y12a-3a-q19a",
        "type": "short_answer",
        "question": "a) Use the quotient rule to find the derivative \\( f'(x) \\).",
        "a": "(x^4+9x^2)/(x^2+3)^2",
        "solutionSteps": [
          {
            "explanation": "Differentiate using quotient rule: \\( u = x^3, \\, v = x^2+3 \\).",
            "workingOut": "f'(x) = \\frac{3x^2(x^2+3) - x^3(2x)}{(x^2+3)^2}"
          },
          {
            "explanation": "Expand numerator terms and simplify.",
            "workingOut": "f'(x) = \\frac{3x^4 + 9x^2 - 2x^4}{(x^2+3)^2} = \\frac{x^4+9x^2}{(x^2+3)^2}"
          }
        ]
      },
      {
        "id": "y12a-3a-q19b",
        "type": "teacher_review",
        "question": "b) Explain why \\( f(x) \\) is increasing for all \\( x \\), apart from \\( x = 0 \\) where it is stationary.",
        "a": "The derivative is \\( f'(x) = \\frac{x^2(x^2+9)}{(x^2+3)^2} \\). The factor \\( x^2+9 \\) and the denominator \\( (x^2+3)^2 \\) are strictly positive for all real \\( x \\). The factor \\( x^2 \\) is strictly positive for all \\( x \\neq 0 \\), and equal to 0 at \\( x = 0 \\). Thus, \\( f'(x) > 0 \\) for all \\( x \\neq 0 \\) (increasing), and \\( f'(0) = 0 \\) (stationary).",
        "solutionSteps": [
          {
            "explanation": "Factor the numerator of the derivative.",
            "workingOut": "f'(x) = \\frac{x^2(x^2+9)}{(x^2+3)^2}"
          },
          {
            "explanation": "Analyse the sign of each factor.",
            "workingOut": "(x^2+9) > 0, \\quad (x^2+3)^2 > 0, \\quad x^2 \\geq 0"
          },
          {
            "explanation": "Conclude behavior from signs.",
            "workingOut": "f'(x) > 0 \\text{ for } x \\neq 0 \\; (\\text{increasing}), \\quad f'(0) = 0 \\; (\\text{stationary})"
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-3a-q20",
    "type": "subquestions",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Consider the function \\( f(x) = \\frac{1}{3}x^3 + x^2 + 2x + 5 \\).",
    "t": "Increasing, decreasing and stationary at a point",
    "subQuestions": [
      {
        "id": "y12a-3a-q20a",
        "type": "short_answer",
        "question": "a) Find the derivative \\( f'(x) \\).",
        "a": "x^2+2x+2",
        "solutionSteps": [
          {
            "explanation": "Differentiate each term.",
            "workingOut": "f'(x) = x^2 + 2x + 2"
          }
        ]
      },
      {
        "id": "y12a-3a-q20b",
        "type": "teacher_review",
        "question": "b) By completing the square, show that \\( f'(x) = (x+1)^2 + 1 \\), and hence explain why \\( f(x) \\) is increasing for all \\( x \\).",
        "a": "Complete the square for \\( x^2 + 2x + 2 \\): \\( f'(x) = (x^2 + 2x + 1) + 1 = (x+1)^2 + 1 \\). Since \\( (x+1)^2 \\geq 0 \\) for all real \\( x \\), we have \\( (x+1)^2 + 1 \\geq 1 > 0 \\) for all \\( x \\). Since the derivative is strictly positive everywhere, \\( f(x) \\) is increasing for all \\( x \\).",
        "solutionSteps": [
          {
            "explanation": "Complete the square.",
            "workingOut": "f'(x) = (x^2 + 2x + 1) + 1 = (x+1)^2 + 1"
          },
          {
            "explanation": "Analyze the range of \\( (x+1)^2 + 1 \\).",
            "workingOut": "(x+1)^2 \\geq 0 \\implies (x+1)^2 + 1 \\geq 1 > 0 \\implies f'(x) > 0 \\quad \\text{for all } x"
          }
        ]
      },
      {
        "id": "y12a-3a-q20c",
        "type": "teacher_review",
        "question": "c) Evaluate \\( f(-3) \\) and \\( f(0) \\), and hence explain why the curve \\( y = f(x) \\) has exactly one \\( x \\)-intercept.",
        "a": "\\( f(-3) = \\frac{1}{3}(-27) + 9 - 6 + 5 = -1 \\). \\( f(0) = 5 \\). Since \\( f(-3) = -1 < 0 \\) and \\( f(0) = 5 > 0 \\), the continuous curve must cross the x-axis at least once between \\( x = -3 \\) and \\( x = 0 \\) by the Intermediate Value Theorem. Since \\( f(x) \\) is strictly increasing for all \\( x \\), it can only cross the x-axis exactly once.",
        "solutionSteps": [
          {
            "explanation": "Substitute \\( x = -3 \\) and \\( x = 0 \\) to find values.",
            "workingOut": "f(-3) = -9 + 9 - 6 + 5 = -1, \\quad f(0) = 5"
          },
          {
            "explanation": "State intercept existence and uniqueness using strictly increasing property.",
            "workingOut": "f(-3) < 0 \\text{ and } f(0) > 0 \\implies \\text{at least one root. Strictly increasing} \\implies \\text{exactly one root}"
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-3a-q21a",
    "type": "teacher_review",
    "question": "Look carefully at the function graphed below. Establish where it is increasing, decreasing and stationary, and hence sketch the graph of its derivative.",
    "a": "The function is a constant horizontal line \\( y = 2 \\). It is stationary everywhere (tangent is always horizontal). The derivative graph is a horizontal line along the x-axis: \\( y = 0 \\).",
    "difficulty": "hard",
    "timeLimit": 240,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Evaluate the tangent slope of the horizontal line.",
        "workingOut": "f(x) = C \\implies f'(x) = 0"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 220,
        "boundingbox": [
          -4,
          4,
          4,
          -4
        ],
        "script": "board.suspendUpdate();\nboard.create('line', [[-3.5, 2], [3.5, 2]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('arrow', [[-3.5,0], [3.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.5], [0,3.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y12a-3a-q21b",
    "type": "teacher_review",
    "question": "Look carefully at the function graphed below. Establish where it is increasing, decreasing and stationary, and hence sketch the graph of its derivative.",
    "a": "The function is a straight line through the origin rising. The slope is positive and constant. The derivative graph is a horizontal line above the x-axis representing this positive constant slope.",
    "difficulty": "hard",
    "timeLimit": 240,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Since the line is straight and rises, the derivative is a positive constant.",
        "workingOut": "f(x) = mx \\quad (m > 0) \\implies f'(x) = m"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 220,
        "boundingbox": [
          -4,
          4,
          4,
          -4
        ],
        "script": "board.suspendUpdate();\nboard.create('line', [[-3, -3], [3, 3]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('arrow', [[-3.5,0], [3.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.5], [0,3.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y12a-3a-q21c",
    "type": "teacher_review",
    "question": "Look carefully at the function graphed below. Establish where it is increasing, decreasing and stationary, and hence sketch the graph of its derivative.",
    "a": "The function is a straight line falling. The slope is negative and constant. The derivative graph is a horizontal line below the x-axis representing this negative constant slope.",
    "difficulty": "hard",
    "timeLimit": 240,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Since the line is straight and falls, the derivative is a negative constant.",
        "workingOut": "f(x) = mx \\quad (m < 0) \\implies f'(x) = m"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 220,
        "boundingbox": [
          -4,
          4,
          4,
          -4
        ],
        "script": "board.suspendUpdate();\nboard.create('line', [[-3, 3], [3, -3]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('arrow', [[-3.5,0], [3.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.5], [0,3.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y12a-3a-q21d",
    "type": "teacher_review",
    "question": "Look carefully at the function graphed below. Establish where it is increasing, decreasing and stationary, and hence sketch the graph of its derivative.",
    "a": "The function is a parabola opening upwards. It decreases for \\( x < 0 \\), has a stationary point (minimum) at \\( x = 0 \\), and increases for \\( x > 0 \\). The derivative is a straight line through the origin with a positive slope (negative for \\( x < 0 \\), zero at \\( x = 0 \\), positive for \\( x > 0 \\)).",
    "difficulty": "hard",
    "timeLimit": 240,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Tangent slope goes from negative to zero to positive.",
        "workingOut": "f'(x) < 0 \\text{ for } x < 0, quad f'(0) = 0, quad f'(x) > 0 \\text{ for } x > 0"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 220,
        "boundingbox": [
          -4,
          4,
          4,
          -2
        ],
        "script": "board.suspendUpdate();\nboard.create('functiongraph', [function(x){return 0.5*x*x - 1;}, -3.5, 3.5], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('arrow', [[-3.5,0], [3.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-1.5], [0,3.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y12a-3a-q21e",
    "type": "teacher_review",
    "question": "Look carefully at the function graphed below. Establish where it is increasing, decreasing and stationary, and hence sketch the graph of its derivative.",
    "a": "The function is cubic: it increases for all \\( x \\neq 0 \\), and has a horizontal point of inflection (stationary point) at \\( x = 0 \\). The derivative graph is a parabola opening upwards with its vertex tangent to the x-axis at the origin (always positive except zero at \\( x = 0 \\)).",
    "difficulty": "hard",
    "timeLimit": 240,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Derivative is always positive except at the origin where it is zero.",
        "workingOut": "f'(x) \\geq 0 \\quad \\text{and} \\quad f'(0) = 0"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 220,
        "boundingbox": [
          -4,
          4,
          4,
          -4
        ],
        "script": "board.suspendUpdate();\nboard.create('functiongraph', [function(x){return 0.15*x*x*x;}, -3.5, 3.5], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('arrow', [[-3.5,0], [3.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.5], [0,3.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y12a-3a-q21f",
    "type": "teacher_review",
    "question": "Look carefully at the function graphed below. Establish where it is increasing, decreasing and stationary, and hence sketch the graph of its derivative.",
    "a": "The function has a local maximum at \\( x = a \\) and a local minimum at \\( x = b \\). It increases for \\( x < a \\) and \\( x > b \\), and decreases for \\( a < x < b \\). The derivative graph is a parabola opening upwards with x-intercepts at \\( x = a \\) and \\( x = b \\).",
    "difficulty": "hard",
    "timeLimit": 240,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Identify stationary points and signs.",
        "workingOut": "f'(a) = 0, quad f'(b) = 0, quad f'(x) > 0 \\text{ for } x < a \\text{ or } x > b"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 220,
        "boundingbox": [
          -4,
          4,
          4,
          -4
        ],
        "script": "board.suspendUpdate();\nboard.create('functiongraph', [function(x){return (x+2.2)*(x)*(x-2.2)/6;}, -3.5, 3.5], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('arrow', [[-3.5,0], [3.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.5], [0,3.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('point', [-1.27, 0], {name: 'a', size: 1, color: 'black', label: {autoPosition: false, offset: [0, -15]}});\nboard.create('point', [1.27, 0], {name: 'b', size: 1, color: 'black', label: {autoPosition: false, offset: [0, 15]}});\nboard.create('segment', [[-1.27, 0], [-1.27, 0.68]], {dash: 2, strokeColor: 'gray'});\nboard.create('segment', [[1.27, 0], [1.27, -0.68]], {dash: 2, strokeColor: 'gray'});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y12a-3a-q21g",
    "type": "teacher_review",
    "question": "Look carefully at the function graphed below. Establish where it is increasing, decreasing and stationary, and hence sketch the graph of its derivative.",
    "a": "The function has a local minimum at \\( x = a \\), a local maximum at \\( x = b \\), and a local minimum at \\( x = c \\). It has three stationary points. The derivative is a cubic curve crossing the x-axis at \\( x = a \\), \\( x = b \\), and \\( x = c \\).",
    "difficulty": "hard",
    "timeLimit": 240,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Identify three stationary points.",
        "workingOut": "f'(a) = f'(b) = f'(c) = 0"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 220,
        "boundingbox": [
          -4,
          6,
          4,
          -2
        ],
        "script": "board.suspendUpdate();\nboard.create('functiongraph', [function(x){return 0.15*(x+2)*(x+2)*(x-2)*(x-2) - 1;}, -3.5, 3.5], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('arrow', [[-3.5,0], [3.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-1.5], [0,5.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('point', [-2, 0], {name: 'a', size: 1, color: 'black', label: {autoPosition: false, offset: [0, 15]}});\nboard.create('point', [0, 0], {name: 'b', size: 1, color: 'black', label: {autoPosition: false, offset: [10, 15]}});\nboard.create('point', [2, 0], {name: 'c', size: 1, color: 'black', label: {autoPosition: false, offset: [0, 15]}});\nboard.create('segment', [[-2, 0], [-2, -1]], {dash: 2, strokeColor: 'gray'});\nboard.create('segment', [[2, 0], [2, -1]], {dash: 2, strokeColor: 'gray'});\nboard.create('segment', [[0, 0], [0, 1.4]], {dash: 2, strokeColor: 'gray'});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y12a-3a-q21h",
    "type": "teacher_review",
    "question": "Look carefully at the function graphed below. Establish where it is increasing, decreasing and stationary, and hence sketch the graph of its derivative.",
    "a": "The function has a vertical asymptote at \\( x = 0 \\) and horizontal asymptote \\( y = 0 \\). On the branch \\( x < 0 \\), the curve is falling (decreasing) and its derivative is negative. On the branch \\( x > 0 \\), the curve is also falling (decreasing) and its derivative is negative. The derivative graph consists of two branches lying entirely below the x-axis, asymptotic to both axes.",
    "difficulty": "hard",
    "timeLimit": 240,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Analyze the derivative of a standard hyperbola branch \\( f(x) = 1/x \\).",
        "workingOut": "f'(x) = -\\frac{1}{x^2} < 0 \\quad \\text{for all } x \\neq 0"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 220,
        "boundingbox": [
          -4,
          4,
          4,
          -4
        ],
        "script": "board.suspendUpdate();\nboard.create('functiongraph', [function(x){return 1/x;}, -3.5, -0.15], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('functiongraph', [function(x){return 1/x;}, 0.15, 3.5], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('arrow', [[-3.5,0], [3.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.5], [0,3.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y12a-3a-q22",
    "type": "subquestions",
    "difficulty": "hard",
    "timeLimit": 240,
    "question": "Let \\( f(x) = -x^3 + 3x^2 - 7x + 4 \\).",
    "t": "Increasing, decreasing and stationary at a point",
    "subQuestions": [
      {
        "id": "y12a-3a-q22a",
        "type": "short_answer",
        "question": "a) Find the derivative \\( f'(x) \\).",
        "a": "-3x^2+6x-7",
        "solutionSteps": [
          {
            "explanation": "Differentiate term by term.",
            "workingOut": "f'(x) = -3x^2 + 6x - 7"
          }
        ]
      },
      {
        "id": "y12a-3a-q22b",
        "type": "teacher_review",
        "question": "b) By evaluating the discriminant \\( \\Delta \\), show that \\( f'(x) < 0 \\) for all values of \\( x \\).",
        "a": "The derivative is \\( f'(x) = -3x^2 + 6x - 7 \\), which is a quadratic in the form \\( ax^2 + bx + c \\) with \\( a = -3 \\), \\( b = 6 \\), \\( c = -7 \\). The discriminant is \\( \\Delta = b^2 - 4ac = 6^2 - 4(-3)(-7) = 36 - 84 = -48 \\). Since \\( \\Delta = -48 < 0 \\), the quadratic has no real roots and does not cross the x-axis. Since the leading coefficient \\( a = -3 < 0 \\), the parabola lies entirely below the x-axis, which means \\( f'(x) < 0 \\) for all values of \\( x \\).",
        "solutionSteps": [
          {
            "explanation": "Write down the discriminant formula.",
            "workingOut": "\\Delta = b^2 - 4ac"
          },
          {
            "explanation": "Substitute the coefficients from \\( f'(x) = -3x^2 + 6x - 7 \\).",
            "workingOut": "\\Delta = 6^2 - 4(-3)(-7) = 36 - 84 = -48"
          },
          {
            "explanation": "Explain that negative discriminant and negative leading coefficient mean the quadratic is strictly negative.",
            "workingOut": "\\Delta < 0 \\quad \\text{and} \\quad a = -3 < 0 \\implies f'(x) < 0 \\quad \\text{for all } x"
          }
        ]
      },
      {
        "id": "y12a-3a-q22c",
        "type": "short_answer",
        "question": "c) Hence deduce the number of solutions of the equation \\( 4 - 7x + 3x^2 - x^3 = 0 \\).",
        "a": "1",
        "solutionSteps": [
          {
            "explanation": "Note that the equation is equivalent to \\( f(x) = 0 \\).",
            "workingOut": "f(x) = -x^3 + 3x^2 - 7x + 4 = 0"
          },
          {
            "explanation": "Since \\( f'(x) < 0 \\) for all \\( x \\), the function \\( f(x) \\) is strictly decreasing.",
            "workingOut": "\\text{Strictly decreasing function}"
          },
          {
            "explanation": "A continuous strictly decreasing cubic function must cross the x-axis exactly once, giving exactly one solution.",
            "workingOut": "\\text{Number of solutions} = 1"
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-3a-q23a",
    "type": "teacher_review",
    "question": "Sketch a possible graph of a continuous curve \\( y = f(x) \\) that has the following properties:\n- \\( f(1) = f(-3) = 0 \\)\n- \\( f'(-1) = 0 \\)\n- \\( f'(x) > 0 \\) when \\( x < -1 \\)\n- \\( f'(x) < 0 \\) when \\( x > -1 \\)",
    "a": "The graph has x-intercepts at \\( x = -3 \\) and \\( x = 1 \\). It is increasing for \\( x < -1 \\) and decreasing for \\( x > -1 \\), with a stationary point (a local maximum) at \\( x = -1 \\). This represents a concave-down curve (like a parabola) with vertex at \\( x = -1 \\).",
    "difficulty": "hard",
    "timeLimit": 240,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Interpret key points.",
        "workingOut": "\\text{Crosses x-axis at } (-3, 0) \\text{ and } (1, 0)"
      },
      {
        "explanation": "Identify increasing/decreasing intervals and turning point.",
        "workingOut": "\\text{Peak at } x = -1, text{ rises to the left, falls to the right.}"
      }
    ]
  },
  {
    "id": "y12a-3a-q23b",
    "type": "teacher_review",
    "question": "Sketch a possible graph of a continuous curve \\( y = f(x) \\) that has the following properties:\n- \\( f(2) = f'(2) = 0 \\)\n- \\( f'(x) > 0 \\) for all \\( x \\neq 2 \\)",
    "a": "The graph passes through \\( (2,0) \\) where it has a horizontal point of inflection (since the curve is stationary at \\( x = 2 \\) but increases everywhere else). The curve rises continually from left to right, flattening momentarily at \\( (2, 0) \\).",
    "difficulty": "hard",
    "timeLimit": 240,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Evaluate the condition at \\( x = 2 \\).",
        "workingOut": "\\text{Stationary point and x-intercept at } (2,0)"
      },
      {
        "explanation": "Analyze behavior elsewhere.",
        "workingOut": "f'(x) > 0 \\text{ for all } x \\neq 2 \\implies \\text{strictly increasing except momentary flat at } x=2"
      }
    ]
  },
  {
    "id": "y12a-3a-q23c",
    "type": "teacher_review",
    "question": "Sketch a possible graph of a continuous curve \\( y = f(x) \\) that has the following properties:\n- \\( f(x) \\) is odd\n- \\( f(3) = 0 \\) and \\( f'(1) = 0 \\)\n- \\( f'(x) > 0 \\) for \\( x > 1 \\)\n- \\( f'(x) < 0 \\) for \\( 0 \\leq x < 1 \\)",
    "a": "The graph has rotational symmetry about the origin (odd). It has an x-intercept at \\( (3,0) \\) and therefore also at \\( (-3,0) \\). It is decreasing between \\( x = 0 \\) and \\( x = 1 \\), having a local minimum at \\( x = 1 \\). For \\( x > 1 \\), it is increasing. By symmetry, it has a local maximum at \\( x = -1 \\). It crosses the origin \\( (0,0) \\).",
    "difficulty": "hard",
    "timeLimit": 240,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Use symmetry to find matching features.",
        "workingOut": "\\text{Odd function: passing through } (0,0), text{ x-intercepts at } \\pm 3, text{ stationary at } \\pm 1"
      },
      {
        "explanation": "Determine shape based on increasing/decreasing directions.",
        "workingOut": "\\text{Local min at } (1, f(1)) \\implies \\text{Local max at } (-1, -f(1))"
      }
    ]
  },
  {
    "id": "y12a-3a-q23d",
    "type": "teacher_review",
    "question": "Sketch a possible graph of a continuous curve \\( y = f(x) \\) that has the following properties:\n- \\( f(x) > 0 \\) for all \\( x \\)\n- \\( f'(0) = 0 \\)\n- \\( f'(x) < 0 \\) for \\( x < 0 \\)\n- \\( f'(x) > 0 \\) for \\( x > 0 \\)",
    "a": "The graph lies entirely above the x-axis (\\( y > 0 \\)). It has a stationary point (a minimum) at \\( x = 0 \\). It decreases for negative \\( x \\) and increases for positive \\( x \\). This represents a U-shaped curve (like a parabola) with its vertex above the x-axis.",
    "difficulty": "hard",
    "timeLimit": 240,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Determine vertical position.",
        "workingOut": "f(x) > 0 \\implies \\text{curve lies completely above the x-axis}"
      },
      {
        "explanation": "Find turning point and shape.",
        "workingOut": "\\text{Minimum vertex at } x = 0, text{ decreasing on the left, increasing on the right.}"
      }
    ]
  }
];
