export const Y12A_CH3_QUESTIONS = [
  {
    "id": "y12a-3a-q1a",
    "type": "multiple_choice",
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
    },
    "opts": [
      "A, C, E",
      "C, D",
      "B, E",
      "A, F, G"
    ],
    "options": [
      {
        "text": "A, C, E",
        "imageUrl": ""
      },
      {
        "text": "C, D",
        "imageUrl": ""
      },
      {
        "text": "B, E",
        "imageUrl": ""
      },
      {
        "text": "A, F, G",
        "imageUrl": ""
      }
    ],
    "answer": "3"
  },
  {
    "id": "y12a-3a-q1b",
    "type": "multiple_choice",
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
    },
    "opts": [
      "B, E",
      "A, F, G",
      "B, C, D",
      "C, D"
    ],
    "options": [
      {
        "text": "B, E",
        "imageUrl": ""
      },
      {
        "text": "A, F, G",
        "imageUrl": ""
      },
      {
        "text": "B, C, D",
        "imageUrl": ""
      },
      {
        "text": "C, D",
        "imageUrl": ""
      }
    ],
    "answer": "3"
  },
  {
    "id": "y12a-3a-q1c",
    "type": "multiple_choice",
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
    },
    "opts": [
      "B, E",
      "C, D",
      "A, F, G",
      "C, E"
    ],
    "options": [
      {
        "text": "B, E",
        "imageUrl": ""
      },
      {
        "text": "C, D",
        "imageUrl": ""
      },
      {
        "text": "A, F, G",
        "imageUrl": ""
      },
      {
        "text": "C, E",
        "imageUrl": ""
      }
    ],
    "answer": "0"
  },
  {
    "id": "y12a-3a-q2a",
    "type": "multiple_choice",
    "question": "Find the derivative of \\( y = 2x^2 \\). By substituting \\( x = 2 \\) into the derivative, determine whether the function is increasing, decreasing or stationary at \\( x = 2 \\). (Answer 'increasing', 'decreasing', or 'stationary')",
    "a": "increasing",
    "difficulty": "easy",
    "timeLimit": 90,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Find the derivative.",
        "workingOut": "Apply the power rule to \\( y = 2x^2 \\):\n\\[ y' = 4x \\]",
        "graphData": null
      },
      {
        "explanation": "Evaluate the derivative at the given point.",
        "workingOut": "Substitute \\( x = 2 \\) into the derivative:\n\\[ y'(2) = 4(2) \\]\n\\[ y'(2) = 8 \\]",
        "graphData": null
      },
      {
        "explanation": "State the conclusion.",
        "workingOut": "Since \\( 8 > 0 \\), the gradient is positive, meaning the function is increasing at \\( x = 2 \\).",
        "graphData": null
      }
    ],
    "opts": [
      "increasing",
      "decreasing",
      "stationary"
    ],
    "options": [
      {
        "text": "increasing",
        "imageUrl": ""
      },
      {
        "text": "decreasing",
        "imageUrl": ""
      },
      {
        "text": "stationary",
        "imageUrl": ""
      }
    ],
    "answer": "0"
  },
  {
    "id": "y12a-3a-q2b",
    "type": "multiple_choice",
    "question": "Find the derivative of \\( y = x^2 - 3x \\). By substituting \\( x = 2 \\) into the derivative, determine whether the function is increasing, decreasing or stationary at \\( x = 2 \\). (Answer 'increasing', 'decreasing', or 'stationary')",
    "a": "increasing",
    "difficulty": "easy",
    "timeLimit": 90,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Find the derivative.",
        "workingOut": "Apply the power rule to \\( y = x^2 - 3x \\):\n\\[ y' = 2x - 3 \\]",
        "graphData": null
      },
      {
        "explanation": "Evaluate the derivative at the given point.",
        "workingOut": "Substitute \\( x = 2 \\) into the derivative:\n\\[ y'(2) = 2(2) - 3 \\]\n\\[ y'(2) = 4 - 3 \\]\n\\[ y'(2) = 1 \\]",
        "graphData": null
      },
      {
        "explanation": "State the conclusion.",
        "workingOut": "Since \\( 1 > 0 \\), the gradient is positive, meaning the function is increasing at \\( x = 2 \\).",
        "graphData": null
      }
    ],
    "opts": [
      "increasing",
      "decreasing",
      "stationary"
    ],
    "options": [
      {
        "text": "increasing",
        "imageUrl": ""
      },
      {
        "text": "decreasing",
        "imageUrl": ""
      },
      {
        "text": "stationary",
        "imageUrl": ""
      }
    ],
    "answer": "0"
  },
  {
    "id": "y12a-3a-q2c",
    "type": "multiple_choice",
    "question": "Find the derivative of \\( y = 2x^2 - 6x \\). By substituting \\( x = 2 \\) into the derivative, determine whether the function is increasing, decreasing or stationary at \\( x = 2 \\). (Answer 'increasing', 'decreasing', or 'stationary')",
    "a": "increasing",
    "difficulty": "easy",
    "timeLimit": 90,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Find the derivative.",
        "workingOut": "Apply the power rule to \\( y = 5x - x^2 \\):\n\\[ y' = 5 - 2x \\]",
        "graphData": null
      },
      {
        "explanation": "Evaluate the derivative at the given point.",
        "workingOut": "Substitute \\( x = 3 \\) into the derivative:\n\\[ y'(3) = 5 - 2(3) \\]\n\\[ y'(3) = 5 - 6 \\]\n\\[ y'(3) = -1 \\]",
        "graphData": null
      },
      {
        "explanation": "State the conclusion.",
        "workingOut": "Since \\( -1 < 0 \\), the gradient is negative, meaning the function is decreasing at \\( x = 3 \\).",
        "graphData": null
      }
    ],
    "opts": [
      "increasing",
      "decreasing",
      "stationary"
    ],
    "options": [
      {
        "text": "increasing",
        "imageUrl": ""
      },
      {
        "text": "decreasing",
        "imageUrl": ""
      },
      {
        "text": "stationary",
        "imageUrl": ""
      }
    ],
    "answer": "1"
  },
  {
    "id": "y12a-3a-q2d",
    "type": "multiple_choice",
    "question": "Find the derivative of \\( y = x^2 - 4x + 9 \\). By substituting \\( x = 2 \\) into the derivative, determine whether the function is increasing, decreasing or stationary at \\( x = 2 \\). (Answer 'increasing', 'decreasing', or 'stationary')",
    "a": "stationary",
    "difficulty": "easy",
    "timeLimit": 90,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Find the derivative.",
        "workingOut": "Apply the power rule to \\( y = x^2 - 4x + 7 \\):\n\\[ y' = 2x - 4 \\]",
        "graphData": null
      },
      {
        "explanation": "Evaluate the derivative at the given point.",
        "workingOut": "Substitute \\( x = 2 \\) into the derivative:\n\\[ y'(2) = 2(2) - 4 \\]\n\\[ y'(2) = 4 - 4 \\]\n\\[ y'(2) = 0 \\]",
        "graphData": null
      },
      {
        "explanation": "State the conclusion.",
        "workingOut": "Since \\( y'(2) = 0 \\), the gradient is zero, meaning the function is stationary at \\( x = 2 \\).",
        "graphData": null
      }
    ],
    "opts": [
      "increasing",
      "decreasing",
      "stationary"
    ],
    "options": [
      {
        "text": "increasing",
        "imageUrl": ""
      },
      {
        "text": "decreasing",
        "imageUrl": ""
      },
      {
        "text": "stationary",
        "imageUrl": ""
      }
    ],
    "answer": "2"
  },
  {
    "id": "y12a-3a-q2e",
    "type": "multiple_choice",
    "question": "Find the derivative of \\( y = x^3 + 3x \\). By substituting \\( x = 2 \\) into the derivative, determine whether the function is increasing, decreasing or stationary at \\( x = 2 \\). (Answer 'increasing', 'decreasing', or 'stationary')",
    "a": "increasing",
    "difficulty": "easy",
    "timeLimit": 90,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Find the derivative.",
        "workingOut": "Apply the power rule to \\( y = x^3 - 3x^2 + 5x \\):\n\\[ y' = 3x^2 - 6x + 5 \\]",
        "graphData": null
      },
      {
        "explanation": "Evaluate the derivative at the given point.",
        "workingOut": "Substitute \\( x = -1 \\) into the derivative:\n\\[ y'(-1) = 3(-1)^2 - 6(-1) + 5 \\]\n\\[ y'(-1) = 3(1) + 6 + 5 \\]\n\\[ y'(-1) = 14 \\]",
        "graphData": null
      },
      {
        "explanation": "State the conclusion.",
        "workingOut": "Since \\( 14 > 0 \\), the function is increasing at \\( x = -1 \\).",
        "graphData": null
      }
    ],
    "opts": [
      "increasing",
      "decreasing",
      "stationary"
    ],
    "options": [
      {
        "text": "increasing",
        "imageUrl": ""
      },
      {
        "text": "decreasing",
        "imageUrl": ""
      },
      {
        "text": "stationary",
        "imageUrl": ""
      }
    ],
    "answer": "0"
  },
  {
    "id": "y12a-3a-q2f",
    "type": "multiple_choice",
    "question": "Find the derivative of \\( y = 2x^3 - x^4 \\). By substituting \\( x = 2 \\) into the derivative, determine whether the function is increasing, decreasing or stationary at \\( x = 2 \\). (Answer 'increasing', 'decreasing', or 'stationary')",
    "a": "decreasing",
    "difficulty": "easy",
    "timeLimit": 90,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Find the derivative.",
        "workingOut": "Apply the power rule to \\( y = x^3 - 3x \\):\n\\[ y' = 3x^2 - 3 \\]",
        "graphData": null
      },
      {
        "explanation": "Evaluate the derivative at the given point.",
        "workingOut": "Substitute \\( x = 1 \\) into the derivative:\n\\[ y'(1) = 3(1)^2 - 3 \\]\n\\[ y'(1) = 3 - 3 \\]\n\\[ y'(1) = 0 \\]",
        "graphData": null
      },
      {
        "explanation": "State the conclusion.",
        "workingOut": "Since \\( y'(1) = 0 \\), the function is stationary at \\( x = 1 \\).",
        "graphData": null
      }
    ],
    "opts": [
      "increasing",
      "decreasing",
      "stationary"
    ],
    "options": [
      {
        "text": "increasing",
        "imageUrl": ""
      },
      {
        "text": "decreasing",
        "imageUrl": ""
      },
      {
        "text": "stationary",
        "imageUrl": ""
      }
    ],
    "answer": "2"
  },
  {
    "id": "y12a-3a-q3a",
    "type": "multiple_choice",
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
    ],
    "opts": [
      "\\(2x-9\\)",
      "\\(x-4\\)",
      "\\(2x+4\\)",
      "\\(2x-4\\)"
    ],
    "options": [
      {
        "text": "\\(2x-9\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x-4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2x+4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(2x-4\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3"
  },
  {
    "id": "y12a-3a-q3bi",
    "type": "multiple_choice",
    "question": "Determine whether \\( f(x) = x^2 - 4x + 9 \\) is increasing, decreasing or stationary at \\( x = 0 \\).",
    "a": "decreasing",
    "difficulty": "easy",
    "timeLimit": 90,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Evaluate the derivative at the given point.",
        "workingOut": "From the previous part, \\( f'(x) = 2x - 4 \\). Substitute \\( x = 0 \\):\n\\[ f'(0) = 2(0) - 4 \\]\n\\[ f'(0) = -4 \\]",
        "graphData": null
      },
      {
        "explanation": "State the conclusion.",
        "workingOut": "Since \\( -4 < 0 \\), the function is decreasing.",
        "graphData": null
      }
    ],
    "opts": [
      "increasing",
      "decreasing",
      "stationary"
    ],
    "options": [
      {
        "text": "increasing",
        "imageUrl": ""
      },
      {
        "text": "decreasing",
        "imageUrl": ""
      },
      {
        "text": "stationary",
        "imageUrl": ""
      }
    ],
    "answer": "1"
  },
  {
    "id": "y12a-3a-q3bii",
    "type": "multiple_choice",
    "question": "Determine whether \\( f(x) = x^2 - 4x + 9 \\) is increasing, decreasing or stationary at \\( x = 1 \\).",
    "a": "decreasing",
    "difficulty": "easy",
    "timeLimit": 90,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Evaluate the derivative at the given point.",
        "workingOut": "Substitute \\( x = 1 \\) into \\( f'(x) = 2x - 4 \\):\n\\[ f'(1) = 2(1) - 4 \\]\n\\[ f'(1) = -2 \\]",
        "graphData": null
      },
      {
        "explanation": "State the conclusion.",
        "workingOut": "Since \\( -2 < 0 \\), the function is decreasing.",
        "graphData": null
      }
    ],
    "opts": [
      "increasing",
      "decreasing",
      "stationary"
    ],
    "options": [
      {
        "text": "increasing",
        "imageUrl": ""
      },
      {
        "text": "decreasing",
        "imageUrl": ""
      },
      {
        "text": "stationary",
        "imageUrl": ""
      }
    ],
    "answer": "1"
  },
  {
    "id": "y12a-3a-q3biii",
    "type": "multiple_choice",
    "question": "Determine whether \\( f(x) = x^2 - 4x + 9 \\) is increasing, decreasing or stationary at \\( x = 2 \\).",
    "a": "stationary",
    "difficulty": "easy",
    "timeLimit": 90,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Evaluate the derivative at the given point.",
        "workingOut": "Substitute \\( x = 2 \\) into \\( f'(x) = 2x - 4 \\):\n\\[ f'(2) = 2(2) - 4 \\]\n\\[ f'(2) = 0 \\]",
        "graphData": null
      },
      {
        "explanation": "State the conclusion.",
        "workingOut": "Since \\( f'(2) = 0 \\), the function is stationary.",
        "graphData": null
      }
    ],
    "opts": [
      "increasing",
      "decreasing",
      "stationary"
    ],
    "options": [
      {
        "text": "increasing",
        "imageUrl": ""
      },
      {
        "text": "decreasing",
        "imageUrl": ""
      },
      {
        "text": "stationary",
        "imageUrl": ""
      }
    ],
    "answer": "2"
  },
  {
    "id": "y12a-3a-q3biv",
    "type": "multiple_choice",
    "question": "Determine whether \\( f(x) = x^2 - 4x + 9 \\) is increasing, decreasing or stationary at \\( x = 3 \\).",
    "a": "increasing",
    "difficulty": "easy",
    "timeLimit": 90,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Evaluate the derivative at the given point.",
        "workingOut": "Substitute \\( x = 3 \\) into \\( f'(x) = 2x - 4 \\):\n\\[ f'(3) = 2(3) - 4 \\]\n\\[ f'(3) = 2 \\]",
        "graphData": null
      },
      {
        "explanation": "State the conclusion.",
        "workingOut": "Since \\( 2 > 0 \\), the function is increasing.",
        "graphData": null
      }
    ],
    "opts": [
      "increasing",
      "decreasing",
      "stationary"
    ],
    "options": [
      {
        "text": "increasing",
        "imageUrl": ""
      },
      {
        "text": "decreasing",
        "imageUrl": ""
      },
      {
        "text": "stationary",
        "imageUrl": ""
      }
    ],
    "answer": "0"
  },
  {
    "id": "y12a-3a-q3bv",
    "type": "multiple_choice",
    "question": "Determine whether \\( f(x) = x^2 - 4x + 9 \\) is increasing, decreasing or stationary at \\( x = -1 \\).",
    "a": "decreasing",
    "difficulty": "easy",
    "timeLimit": 90,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Evaluate the derivative at the given point.",
        "workingOut": "Substitute \\( x = 4 \\) into \\( f'(x) = 2x - 4 \\):\n\\[ f'(4) = 2(4) - 4 \\]\n\\[ f'(4) = 4 \\]",
        "graphData": null
      },
      {
        "explanation": "State the conclusion.",
        "workingOut": "Since \\( 4 > 0 \\), the function is increasing.",
        "graphData": null
      }
    ],
    "opts": [
      "increasing",
      "decreasing",
      "stationary"
    ],
    "options": [
      {
        "text": "increasing",
        "imageUrl": ""
      },
      {
        "text": "decreasing",
        "imageUrl": ""
      },
      {
        "text": "stationary",
        "imageUrl": ""
      }
    ],
    "answer": "0"
  },
  {
    "id": "y12a-3a-q4a",
    "type": "multiple_choice",
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
    ],
    "opts": [
      "\\(3x^2+6x-9\\)",
      "\\(3x^2-6x+9\\)",
      "\\(3x^2-3x-9\\)",
      "\\(3x^2-6x-9\\)"
    ],
    "options": [
      {
        "text": "\\(3x^2+6x-9\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3x^2-6x+9\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3x^2-3x-9\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(3x^2-6x-9\\)",
        "imageUrl": ""
      }
    ],
    "answer": "3"
  },
  {
    "id": "y12a-3a-q4bi",
    "type": "multiple_choice",
    "question": "Determine whether \\( f(x) = x^3 - 3x^2 - 9x \\) is increasing, decreasing or stationary at \\( x = -2 \\).",
    "a": "increasing",
    "difficulty": "easy",
    "timeLimit": 90,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Evaluate the derivative at the given point.",
        "workingOut": "Substitute \\( x = -2 \\) into \\( f'(x) = 3x^2 - 6x - 9 \\):\n\\[ f'(-2) = 3(-2)^2 - 6(-2) - 9 \\]\n\\[ f'(-2) = 3(4) + 12 - 9 \\]\n\\[ f'(-2) = 12 + 12 - 9 = 15 \\]",
        "graphData": null
      },
      {
        "explanation": "State the conclusion.",
        "workingOut": "Since \\( 15 > 0 \\), the function is increasing.",
        "graphData": null
      }
    ],
    "opts": [
      "increasing",
      "decreasing",
      "stationary"
    ],
    "options": [
      {
        "text": "increasing",
        "imageUrl": ""
      },
      {
        "text": "decreasing",
        "imageUrl": ""
      },
      {
        "text": "stationary",
        "imageUrl": ""
      }
    ],
    "answer": "0"
  },
  {
    "id": "y12a-3a-q4bii",
    "type": "multiple_choice",
    "question": "Determine whether \\( f(x) = x^3 - 3x^2 - 9x \\) is increasing, decreasing or stationary at \\( x = -1 \\).",
    "a": "stationary",
    "difficulty": "easy",
    "timeLimit": 90,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Evaluate the derivative at the given point.",
        "workingOut": "Substitute \\( x = -1 \\) into \\( f'(x) = 3x^2 - 6x - 9 \\):\n\\[ f'(-1) = 3(-1)^2 - 6(-1) - 9 \\]\n\\[ f'(-1) = 3(1) + 6 - 9 \\]\n\\[ f'(-1) = 9 - 9 = 0 \\]",
        "graphData": null
      },
      {
        "explanation": "State the conclusion.",
        "workingOut": "Since \\( f'(-1) = 0 \\), the function is stationary.",
        "graphData": null
      }
    ],
    "opts": [
      "increasing",
      "decreasing",
      "stationary"
    ],
    "options": [
      {
        "text": "increasing",
        "imageUrl": ""
      },
      {
        "text": "decreasing",
        "imageUrl": ""
      },
      {
        "text": "stationary",
        "imageUrl": ""
      }
    ],
    "answer": "2"
  },
  {
    "id": "y12a-3a-q4biii",
    "type": "multiple_choice",
    "question": "Determine whether \\( f(x) = x^3 - 3x^2 - 9x \\) is increasing, decreasing or stationary at \\( x = 0 \\).",
    "a": "decreasing",
    "difficulty": "easy",
    "timeLimit": 90,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Evaluate the derivative at the given point.",
        "workingOut": "Substitute \\( x = 0 \\) into \\( f'(x) = 3x^2 - 6x - 9 \\):\n\\[ f'(0) = 3(0)^2 - 6(0) - 9 \\]\n\\[ f'(0) = -9 \\]",
        "graphData": null
      },
      {
        "explanation": "State the conclusion.",
        "workingOut": "Since \\( -9 < 0 \\), the function is decreasing.",
        "graphData": null
      }
    ],
    "opts": [
      "increasing",
      "decreasing",
      "stationary"
    ],
    "options": [
      {
        "text": "increasing",
        "imageUrl": ""
      },
      {
        "text": "decreasing",
        "imageUrl": ""
      },
      {
        "text": "stationary",
        "imageUrl": ""
      }
    ],
    "answer": "1"
  },
  {
    "id": "y12a-3a-q4biv",
    "type": "multiple_choice",
    "question": "Determine whether \\( f(x) = x^3 - 3x^2 - 9x \\) is increasing, decreasing or stationary at \\( x = 3 \\).",
    "a": "stationary",
    "difficulty": "easy",
    "timeLimit": 90,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Evaluate the derivative at the given point.",
        "workingOut": "Substitute \\( x = 3 \\) into \\( f'(x) = 3x^2 - 6x - 9 \\):\n\\[ f'(3) = 3(3)^2 - 6(3) - 9 \\]\n\\[ f'(3) = 3(9) - 18 - 9 \\]\n\\[ f'(3) = 27 - 27 = 0 \\]",
        "graphData": null
      },
      {
        "explanation": "State the conclusion.",
        "workingOut": "Since \\( f'(3) = 0 \\), the function is stationary.",
        "graphData": null
      }
    ],
    "opts": [
      "increasing",
      "decreasing",
      "stationary"
    ],
    "options": [
      {
        "text": "increasing",
        "imageUrl": ""
      },
      {
        "text": "decreasing",
        "imageUrl": ""
      },
      {
        "text": "stationary",
        "imageUrl": ""
      }
    ],
    "answer": "2"
  },
  {
    "id": "y12a-3a-q4bv",
    "type": "multiple_choice",
    "question": "Determine whether \\( f(x) = x^3 - 3x^2 - 9x \\) is increasing, decreasing or stationary at \\( x = 4 \\).",
    "a": "increasing",
    "difficulty": "easy",
    "timeLimit": 90,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Evaluate the derivative at the given point.",
        "workingOut": "Substitute \\( x = 4 \\) into \\( f'(x) = 3x^2 - 6x - 9 \\):\n\\[ f'(4) = 3(4)^2 - 6(4) - 9 \\]\n\\[ f'(4) = 3(16) - 24 - 9 \\]\n\\[ f'(4) = 48 - 33 = 15 \\]",
        "graphData": null
      },
      {
        "explanation": "State the conclusion.",
        "workingOut": "Since \\( 15 > 0 \\), the function is increasing.",
        "graphData": null
      }
    ],
    "opts": [
      "increasing",
      "decreasing",
      "stationary"
    ],
    "options": [
      {
        "text": "increasing",
        "imageUrl": ""
      },
      {
        "text": "decreasing",
        "imageUrl": ""
      },
      {
        "text": "stationary",
        "imageUrl": ""
      }
    ],
    "answer": "0"
  },
  {
    "id": "y12a-3a-q5a",
    "type": "multiple_choice",
    "question": "By finding where the derivative is zero, find the \\( x \\)-coordinate of the stationary point of \\( y = x^2 - 6x \\).",
    "a": "3",
    "difficulty": "easy",
    "timeLimit": 90,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Find the derivative.",
        "workingOut": "For \\( y = x^2 - 6x \\), the derivative is:\n\\[ y' = 2x - 6 \\]",
        "graphData": null
      },
      {
        "explanation": "Set the derivative to zero and solve.",
        "workingOut": "A stationary point occurs when \\( y' = 0 \\):\n\\[ 2x - 6 = 0 \\]\n\\[ 2x = 6 \\]\n\\[ x = 3 \\]",
        "graphData": null
      }
    ],
    "opts": [
      "-3",
      "6",
      "-6",
      "3"
    ],
    "options": [
      {
        "text": "-3",
        "imageUrl": ""
      },
      {
        "text": "6",
        "imageUrl": ""
      },
      {
        "text": "-6",
        "imageUrl": ""
      },
      {
        "text": "3",
        "imageUrl": ""
      }
    ],
    "answer": "3"
  },
  {
    "id": "y12a-3a-q5b",
    "type": "multiple_choice",
    "question": "By finding where the derivative is zero, find the \\( x \\)-coordinate of the stationary point of \\( y = x^2 - 8x + 12 \\).",
    "a": "4",
    "difficulty": "easy",
    "timeLimit": 90,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Find the derivative.",
        "workingOut": "For \\( y = x^2 - 8x + 12 \\), the derivative is:\n\\[ y' = 2x - 8 \\]",
        "graphData": null
      },
      {
        "explanation": "Set the derivative to zero and solve.",
        "workingOut": "A stationary point occurs when \\( y' = 0 \\):\n\\[ 2x - 8 = 0 \\]\n\\[ 2x = 8 \\]\n\\[ x = 4 \\]",
        "graphData": null
      }
    ],
    "opts": [
      "4",
      "2",
      "8",
      "-4"
    ],
    "options": [
      {
        "text": "4",
        "imageUrl": ""
      },
      {
        "text": "2",
        "imageUrl": ""
      },
      {
        "text": "8",
        "imageUrl": ""
      },
      {
        "text": "-4",
        "imageUrl": ""
      }
    ],
    "answer": "0"
  },
  {
    "id": "y12a-3a-q5c",
    "type": "multiple_choice",
    "question": "By finding where the derivative is zero, find the \\( x \\)-coordinate of the stationary point of \\( y = x^2 + 4x + 4 \\).",
    "a": "-2",
    "difficulty": "easy",
    "timeLimit": 90,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Find the derivative.",
        "workingOut": "For \\( y = x^2 + 4x + 4 \\), the derivative is:\n\\[ y' = 2x + 4 \\]",
        "graphData": null
      },
      {
        "explanation": "Set the derivative to zero and solve.",
        "workingOut": "A stationary point occurs when \\( y' = 0 \\):\n\\[ 2x + 4 = 0 \\]\n\\[ 2x = -4 \\]\n\\[ x = -2 \\]",
        "graphData": null
      }
    ],
    "opts": [
      "-4",
      "4",
      "-2",
      "2"
    ],
    "options": [
      {
        "text": "-4",
        "imageUrl": ""
      },
      {
        "text": "4",
        "imageUrl": ""
      },
      {
        "text": "-2",
        "imageUrl": ""
      },
      {
        "text": "2",
        "imageUrl": ""
      }
    ],
    "answer": "2"
  },
  {
    "id": "y12a-3a-q5d",
    "type": "multiple_choice",
    "question": "By finding where the derivative is zero, find the \\( x \\)-coordinate of the stationary point of \\( y = 3x^2 - 12x \\).",
    "a": "2",
    "difficulty": "easy",
    "timeLimit": 90,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Find the derivative.",
        "workingOut": "For \\( y = 3x^2 - 12x \\), the derivative is:\n\\[ y' = 6x - 12 \\]",
        "graphData": null
      },
      {
        "explanation": "Set the derivative to zero and solve.",
        "workingOut": "A stationary point occurs when \\( y' = 0 \\):\n\\[ 6x - 12 = 0 \\]\n\\[ 6x = 12 \\]\n\\[ x = 2 \\]",
        "graphData": null
      }
    ],
    "opts": [
      "2",
      "-4",
      "4",
      "-2"
    ],
    "options": [
      {
        "text": "2",
        "imageUrl": ""
      },
      {
        "text": "-4",
        "imageUrl": ""
      },
      {
        "text": "4",
        "imageUrl": ""
      },
      {
        "text": "-2",
        "imageUrl": ""
      }
    ],
    "answer": "0"
  },
  {
    "id": "y12a-3a-q5e",
    "type": "multiple_choice",
    "question": "By finding where the derivative is zero, find the \\( x \\)-coordinates of the stationary points of \\( y = x^3 - 6x^2 \\). If there are multiple values, list them in ascending order, separated by a comma (e.g. '0,4').",
    "a": "0,4",
    "difficulty": "easy",
    "timeLimit": 90,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Find the derivative.",
        "workingOut": "For \\( y = x^3 - 6x^2 \\), the derivative is:\n\\[ y' = 3x^2 - 12x \\]",
        "graphData": null
      },
      {
        "explanation": "Set the derivative to zero and solve.",
        "workingOut": "A stationary point occurs when \\( y' = 0 \\):\n\\[ 3x^2 - 12x = 0 \\]\nFactor out the common term \\( 3x \\):\n\\[ 3x(x - 4) = 0 \\]\nSo, \\( x = 0 \\) or \\( x = 4 \\).",
        "graphData": null
      }
    ],
    "opts": [
      "0, -4",
      "-2, 4",
      "0, 4",
      "2, 4"
    ],
    "options": [
      {
        "text": "0, -4",
        "imageUrl": ""
      },
      {
        "text": "-2, 4",
        "imageUrl": ""
      },
      {
        "text": "0, 4",
        "imageUrl": ""
      },
      {
        "text": "2, 4",
        "imageUrl": ""
      }
    ],
    "answer": "2"
  },
  {
    "id": "y12a-3a-q5f",
    "type": "multiple_choice",
    "question": "By finding where the derivative is zero, find the \\( x \\)-coordinates of the stationary points of \\( y = x^3 - 27x \\). If there are multiple values, list them in ascending order, separated by a comma (e.g. '-3,3').",
    "a": "-3,3",
    "difficulty": "easy",
    "timeLimit": 90,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Find the derivative.",
        "workingOut": "For \\( y = x^3 - 27x \\), the derivative is:\n\\[ y' = 3x^2 - 27 \\]",
        "graphData": null
      },
      {
        "explanation": "Set the derivative to zero and solve.",
        "workingOut": "A stationary point occurs when \\( y' = 0 \\):\n\\[ 3x^2 - 27 = 0 \\]\n\\[ 3x^2 = 27 \\]\n\\[ x^2 = 9 \\]\nSo, \\( x = -3 \\) or \\( x = 3 \\).",
        "graphData": null
      }
    ],
    "opts": [
      "0, 3",
      "-9, 9",
      "-3, 3",
      "0, 9"
    ],
    "options": [
      {
        "text": "0, 3",
        "imageUrl": ""
      },
      {
        "text": "-9, 9",
        "imageUrl": ""
      },
      {
        "text": "-3, 3",
        "imageUrl": ""
      },
      {
        "text": "0, 9",
        "imageUrl": ""
      }
    ],
    "answer": "2"
  },
  {
    "id": "y12a-3a-q6a",
    "type": "multiple_choice",
    "question": "Explain why the linear function \\( y = -3x + 4 \\) is decreasing for all \\( x \\).",
    "a": "The derivative is \\( y' = -3 \\). Since the derivative is negative and constant (\\( y' < 0 \\)) for all real numbers \\( x \\), the function is strictly decreasing for all \\( x \\).",
    "difficulty": "easy",
    "timeLimit": 90,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Find the derivative.",
        "workingOut": "\\[ f'(x) = -3 \\]"
      },
      {
        "explanation": "Analyze the sign of the derivative.",
        "workingOut": "Since \\( f'(x) < 0 \\) for all \\( x \\), the function is strictly decreasing."
      }
    ],
    "opts": [
      "Because the function is linear.",
      "Because the derivative is always negative, \\( f'(x) = -3 \\).",
      "Because the derivative is zero.",
      "Because the y-intercept is positive, \\( f(0) = 4 \\)."
    ],
    "answerStr": "1"
  },
  {
    "id": "y12a-3a-q6b",
    "type": "multiple_choice",
    "question": "Explain why the linear function \\( y = 2x + 5 \\) is increasing for all \\( x \\).",
    "a": "The derivative is \\( y' = 2 \\). Since the derivative is positive and constant (\\( y' > 0 \\)) for all real numbers \\( x \\), the function is strictly increasing for all \\( x \\).",
    "difficulty": "easy",
    "timeLimit": 90,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Find the derivative.",
        "workingOut": "\\[ f'(x) = 2 \\]"
      },
      {
        "explanation": "Analyze the sign of the derivative.",
        "workingOut": "Since \\( f'(x) > 0 \\) for all \\( x \\), the function is strictly increasing."
      }
    ],
    "opts": [
      "Because the derivative is always positive, \\( f'(x) = 2 \\).",
      "Because the y-intercept is positive, \\( f(0) = 5 \\).",
      "Because the derivative is increasing.",
      "Because the function is linear."
    ],
    "answerStr": "0"
  },
  {
    "id": "y12a-3a-q6c",
    "type": "multiple_choice",
    "question": "Explain why \\( f(x) = x^3 + 1 \\) is increasing for all values of \\( x \\), apart from \\( x = 0 \\) where it is stationary.",
    "a": "The derivative is \\( f'(x) = 3x^2 \\). For all \\( x \neq 0 \\), \\( 3x^2 > 0 \\), which means the function is increasing. At \\( x = 0 \\), \\( f'(0) = 3(0)^2 = 0 \\), which means the function has a horizontal tangent and is stationary.",
    "difficulty": "easy",
    "timeLimit": 90,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Find the derivative.",
        "workingOut": "\\[ f'(x) = 3x^2 \\]"
      },
      {
        "explanation": "Analyze the sign of the derivative.",
        "workingOut": "For all \\( x \\neq 0 \\), \\( 3x^2 > 0 \\), so the curve is increasing.\nAt \\( x = 0 \\), \\( f'(0) = 0 \\), so the curve is stationary."
      }
    ],
    "opts": [
      "Because the derivative is always strictly greater than 0.",
      "Because the function has a positive y-intercept.",
      "Because \\( f'(x) = 3x^2 \\), which is positive for all \\( x \\neq 0 \\), and \\( f'(0) = 0 \\).",
      "Because \\( f'(x) = 3x^2 + 1 \\), which is always positive."
    ],
    "answerStr": "2"
  },
  {
    "id": "y12a-3a-q6d",
    "type": "multiple_choice",
    "question": "Explain why \\( f(x) = 2x^2 \\) is increasing for \\( x > 0 \\) and decreasing for \\( x < 0 \\). Describe what happens at \\( x = 0 \\).",
    "a": "The derivative is \\( f'(x) = 4x \\). For \\( x > 0 \\), \\( f'(x) = 4x > 0 \\) (increasing). For \\( x < 0 \\), \\( f'(x) = 4x < 0 \\) (decreasing). At \\( x = 0 \\), \\( f'(0) = 0 \\), meaning the function has a stationary point (a vertex).",
    "difficulty": "easy",
    "timeLimit": 90,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Find the derivative.",
        "workingOut": "\\[ f'(x) = 4x \\]"
      },
      {
        "explanation": "Analyze the sign over different intervals.",
        "workingOut": "When \\( x > 0 \\), \\( f'(x) > 0 \\) (increasing).\nWhen \\( x < 0 \\), \\( f'(x) < 0 \\) (decreasing).\nWhen \\( x = 0 \\), \\( f'(0) = 0 \\) (stationary)."
      }
    ],
    "opts": [
      "\\( f'(x) = 4x^2 \\). The derivative is always positive, so it is always increasing.",
      "\\( f'(x) = 4x \\). For \\( x > 0 \\), \\( f'(x) < 0 \\). For \\( x < 0 \\), \\( f'(x) > 0 \\). At \\( x = 0 \\), it is stationary.",
      "\\( f'(x) = 4x \\). For \\( x > 0 \\), \\( f'(x) > 0 \\). For \\( x < 0 \\), \\( f'(x) < 0 \\). At \\( x = 0 \\), it is stationary.",
      "\\( f'(x) = 2x \\). It is increasing because it is a parabola."
    ],
    "answerStr": "2"
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
        "type": "multiple_choice",
        "question": "a) \\( f(x) = (x-2)^3 \\). Find \\( f'(0) \\) and state whether the curve is increasing, decreasing, or stationary at \\( x = 0 \\). (Format: 'value, status' e.g. '12, increasing')",
        "a": "12, increasing",
        "solutionSteps": [
          {
            "explanation": "Differentiate the function.",
            "workingOut": "Find the derivative using the appropriate rules:\n\\[ f'(x) = 3(x-2)^2 \\]",
            "graphData": null
          },
          {
            "explanation": "Evaluate the derivative at \\( x = 0 \\).",
            "workingOut": "Substitute \\( x = 0 \\) into the derivative:\n\\[ f'(0) = 12 \\]",
            "graphData": null
          },
          {
            "explanation": "Determine status from the sign of the derivative.",
            "workingOut": "Since \\( f'(0) > 0 \\), the curve is increasing.",
            "graphData": null
          }
        ],
        "opts": [
          "8, increasing",
          "0, stationary",
          "-12, decreasing",
          "12, increasing"
        ],
        "answerStr": "3",
        "options": [
          {
            "text": "8, increasing",
            "imageUrl": ""
          },
          {
            "text": "0, stationary",
            "imageUrl": ""
          },
          {
            "text": "-12, decreasing",
            "imageUrl": ""
          },
          {
            "text": "12, increasing",
            "imageUrl": ""
          }
        ],
        "answer": "3"
      },
      {
        "id": "y12a-3a-q7b",
        "type": "multiple_choice",
        "question": "b) \\( f(x) = (3x-1)^4 \\). Find \\( f'(0) \\) and state whether the curve is increasing, decreasing, or stationary at \\( x = 0 \\). (Format: 'value, status' e.g. '-12, decreasing')",
        "a": "-12, decreasing",
        "solutionSteps": [
          {
            "explanation": "Differentiate the function.",
            "workingOut": "Find the derivative using the appropriate rules:\n\\[ f'(x) = 4(3x-1)^3 \\cdot 3 \\]",
            "graphData": null
          },
          {
            "explanation": "Evaluate the derivative at \\( x = 0 \\).",
            "workingOut": "Substitute \\( x = 0 \\) into the derivative:\n\\[ f'(0) = -12 \\]",
            "graphData": null
          },
          {
            "explanation": "Determine status from the sign of the derivative.",
            "workingOut": "Since \\( f'(0) < 0 \\), the curve is decreasing.",
            "graphData": null
          }
        ],
        "opts": [
          "12, increasing",
          "-4, decreasing",
          "0, stationary",
          "-12, decreasing"
        ],
        "answerStr": "3",
        "options": [
          {
            "text": "12, increasing",
            "imageUrl": ""
          },
          {
            "text": "-4, decreasing",
            "imageUrl": ""
          },
          {
            "text": "0, stationary",
            "imageUrl": ""
          },
          {
            "text": "-12, decreasing",
            "imageUrl": ""
          }
        ],
        "answer": "3"
      },
      {
        "id": "y12a-3a-q7c",
        "type": "multiple_choice",
        "question": "c) \\( f(x) = (x^2+2)^2 \\). Find \\( f'(0) \\) and state whether the curve is increasing, decreasing, or stationary at \\( x = 0 \\). (Format: 'value, status' e.g. '0, stationary')",
        "a": "0, stationary",
        "solutionSteps": [
          {
            "explanation": "Differentiate the function.",
            "workingOut": "Find the derivative using the appropriate rules:\n\\[ f'(x) = 2(x^2+2) \\cdot 2x \\]",
            "graphData": null
          },
          {
            "explanation": "Evaluate the derivative at \\( x = 0 \\).",
            "workingOut": "Substitute \\( x = 0 \\) into the derivative:\n\\[ f'(0) = 0 \\]",
            "graphData": null
          },
          {
            "explanation": "Determine status from the sign of the derivative.",
            "workingOut": "Since \\( f'(0) = 0 \\), the curve is stationary.",
            "graphData": null
          }
        ],
        "opts": [
          "-4, decreasing",
          "4, increasing",
          "2, increasing",
          "0, stationary"
        ],
        "answerStr": "3",
        "options": [
          {
            "text": "-4, decreasing",
            "imageUrl": ""
          },
          {
            "text": "4, increasing",
            "imageUrl": ""
          },
          {
            "text": "2, increasing",
            "imageUrl": ""
          },
          {
            "text": "0, stationary",
            "imageUrl": ""
          }
        ],
        "answer": "3"
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
        "type": "multiple_choice",
        "question": "a) \\( f(x) = (x-4)(x+2) \\). Find \\( f'(1) \\) and state whether the curve is increasing, decreasing, or stationary at \\( x = 1 \\). (Format: 'value, status')",
        "a": "0, stationary",
        "solutionSteps": [
          {
            "explanation": "Expand the function and differentiate.",
            "workingOut": "First expand the brackets to avoid product rule:\n\\[ f(x) = x^2 - 2x - 8 \\]\nDifferentiate each term:\n\\[ f'(x) = 2x - 2 \\]",
            "graphData": null
          },
          {
            "explanation": "Evaluate the derivative at \\( x = 1 \\).",
            "workingOut": "Substitute \\( x = 1 \\) into the derivative:\n\\[ f'(1) = 0 \\]",
            "graphData": null
          },
          {
            "explanation": "Determine status from the sign of the derivative.",
            "workingOut": "Since \\( f'(1) = 0 \\), the curve is stationary.",
            "graphData": null
          }
        ],
        "opts": [
          "4, increasing",
          "2, increasing",
          "-2, decreasing",
          "0, stationary"
        ],
        "answerStr": "3",
        "options": [
          {
            "text": "4, increasing",
            "imageUrl": ""
          },
          {
            "text": "2, increasing",
            "imageUrl": ""
          },
          {
            "text": "-2, decreasing",
            "imageUrl": ""
          },
          {
            "text": "0, stationary",
            "imageUrl": ""
          }
        ],
        "answer": "3"
      },
      {
        "id": "y12a-3a-q8b",
        "type": "multiple_choice",
        "question": "b) \\( f(x) = (x-3)(x^2+4) \\). Find \\( f'(1) \\) and state whether the curve is increasing, decreasing, or stationary at \\( x = 1 \\). (Format: 'value, status')",
        "a": "1, increasing",
        "solutionSteps": [
          {
            "explanation": "Expand the function and differentiate.",
            "workingOut": "First expand the brackets to avoid product rule:\n\\[ f(x) = x^3 - 3x^2 + 4x - 12 \\]\nDifferentiate each term:\n\\[ f'(x) = 3x^2 - 6x + 4 \\]",
            "graphData": null
          },
          {
            "explanation": "Evaluate the derivative at \\( x = 1 \\).",
            "workingOut": "Substitute \\( x = 1 \\) into the derivative:\n\\[ f'(1) = 1 \\]",
            "graphData": null
          },
          {
            "explanation": "Determine status from the sign of the derivative.",
            "workingOut": "Since \\( f'(1) > 0 \\), the curve is increasing.",
            "graphData": null
          }
        ],
        "opts": [
          "5, increasing",
          "0, stationary",
          "-1, decreasing",
          "1, increasing"
        ],
        "answerStr": "3",
        "options": [
          {
            "text": "5, increasing",
            "imageUrl": ""
          },
          {
            "text": "0, stationary",
            "imageUrl": ""
          },
          {
            "text": "-1, decreasing",
            "imageUrl": ""
          },
          {
            "text": "1, increasing",
            "imageUrl": ""
          }
        ],
        "answer": "3"
      },
      {
        "id": "y12a-3a-q8c",
        "type": "multiple_choice",
        "question": "c) \\( f(x) = (x^3+3)(2-x^2) \\). Find \\( f'(1) \\) and state whether the curve is increasing, decreasing, or stationary at \\( x = 1 \\). (Format: 'value, status')",
        "a": "-5, decreasing",
        "solutionSteps": [
          {
            "explanation": "Expand the function and differentiate.",
            "workingOut": "First expand the brackets to avoid product rule:\n\\[ f(x) = -x^5 + 2x^3 - 3x^2 + 6 \\]\nDifferentiate each term:\n\\[ f'(x) = -5x^4 + 6x^2 - 6x \\]",
            "graphData": null
          },
          {
            "explanation": "Evaluate the derivative at \\( x = 1 \\).",
            "workingOut": "Substitute \\( x = 1 \\) into the derivative:\n\\[ f'(1) = -5 \\]",
            "graphData": null
          },
          {
            "explanation": "Determine status from the sign of the derivative.",
            "workingOut": "Since \\( f'(1) < 0 \\), the curve is decreasing.",
            "graphData": null
          }
        ],
        "opts": [
          "1, increasing",
          "-5, decreasing",
          "5, increasing",
          "-1, decreasing"
        ],
        "answerStr": "1",
        "options": [
          {
            "text": "1, increasing",
            "imageUrl": ""
          },
          {
            "text": "-5, decreasing",
            "imageUrl": ""
          },
          {
            "text": "5, increasing",
            "imageUrl": ""
          },
          {
            "text": "-1, decreasing",
            "imageUrl": ""
          }
        ],
        "answer": "1"
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
        "type": "multiple_choice",
        "question": "a) \\( f(x) = \\frac{x}{x+2} \\). Find \\( f'(2) \\) and state whether the curve is increasing, decreasing, or stationary at \\( x = 2 \\). (Format fraction/status, e.g. '1/8, increasing')",
        "a": "1/8, increasing",
        "solutionSteps": [
          {
            "explanation": "Differentiate the function.",
            "workingOut": "Find the derivative using the appropriate rules:\n\\[ f'(x) = \\frac{(1)(x+2) - (x)(1)}{(x+2)^2} = \\frac{2}{(x+2)^2} \\]",
            "graphData": null
          },
          {
            "explanation": "Evaluate the derivative at \\( x = 2 \\).",
            "workingOut": "Substitute \\( x = 2 \\) into the derivative:\n\\[ f'(2) = \\frac{1}{8} \\]",
            "graphData": null
          },
          {
            "explanation": "Determine status from the sign of the derivative.",
            "workingOut": "Since \\( f'(2) > 0 \\), the curve is increasing.",
            "graphData": null
          }
        ],
        "opts": [
          "\\frac{1}{4}, increasing",
          "-\\frac{1}{4}, decreasing",
          "\\frac{1}{8}, increasing",
          "-\\frac{1}{8}, decreasing"
        ],
        "answerStr": "2",
        "options": [
          {
            "text": "\\frac{1}{4}, increasing",
            "imageUrl": ""
          },
          {
            "text": "-\\frac{1}{4}, decreasing",
            "imageUrl": ""
          },
          {
            "text": "\\frac{1}{8}, increasing",
            "imageUrl": ""
          },
          {
            "text": "-\\frac{1}{8}, decreasing",
            "imageUrl": ""
          }
        ],
        "answer": "2"
      },
      {
        "id": "y12a-3a-q9b",
        "type": "multiple_choice",
        "question": "b) \\( f(x) = \\frac{x+3}{x-1} \\). Find \\( f'(2) \\) and state whether the curve is increasing, decreasing, or stationary at \\( x = 2 \\). (Format: 'value, status')",
        "a": "-4, decreasing",
        "solutionSteps": [
          {
            "explanation": "Differentiate the function.",
            "workingOut": "Find the derivative using the appropriate rules:\n\\[ f'(x) = \\frac{(1)(x-1) - (x+3)(1)}{(x-1)^2} = \\frac{-4}{(x-1)^2} \\]",
            "graphData": null
          },
          {
            "explanation": "Evaluate the derivative at \\( x = 2 \\).",
            "workingOut": "Substitute \\( x = 2 \\) into the derivative:\n\\[ f'(2) = -4 \\]",
            "graphData": null
          },
          {
            "explanation": "Determine status from the sign of the derivative.",
            "workingOut": "Since \\( f'(2) < 0 \\), the curve is decreasing.",
            "graphData": null
          }
        ],
        "opts": [
          "-4, decreasing",
          "1, increasing",
          "4, increasing",
          "-1, decreasing"
        ],
        "answerStr": "0",
        "options": [
          {
            "text": "-4, decreasing",
            "imageUrl": ""
          },
          {
            "text": "1, increasing",
            "imageUrl": ""
          },
          {
            "text": "4, increasing",
            "imageUrl": ""
          },
          {
            "text": "-1, decreasing",
            "imageUrl": ""
          }
        ],
        "answer": "0"
      },
      {
        "id": "y12a-3a-q9c",
        "type": "multiple_choice",
        "question": "c) \\( f(x) = \\frac{x^2}{x+1} \\). Find \\( f'(2) \\) and state whether the curve is increasing, decreasing, or stationary at \\( x = 2 \\). (Format: 'fraction, status' e.g. '8/9, increasing')",
        "a": "8/9, increasing",
        "solutionSteps": [
          {
            "explanation": "Differentiate the function.",
            "workingOut": "Find the derivative using the appropriate rules:\n\\[ f'(x) = \\frac{(2x)(x+1) - (x^2)(1)}{(x+1)^2} = \\frac{x^2+2x}{(x+1)^2} \\]",
            "graphData": null
          },
          {
            "explanation": "Evaluate the derivative at \\( x = 2 \\).",
            "workingOut": "Substitute \\( x = 2 \\) into the derivative:\n\\[ f'(2) = \\frac{8}{9} \\]",
            "graphData": null
          },
          {
            "explanation": "Determine status from the sign of the derivative.",
            "workingOut": "Since \\( f'(2) > 0 \\), the curve is increasing.",
            "graphData": null
          }
        ],
        "opts": [
          "-\\frac{4}{9}, decreasing",
          "\\frac{8}{9}, increasing",
          "-\\frac{8}{9}, decreasing",
          "\\frac{4}{9}, increasing"
        ],
        "answerStr": "1",
        "options": [
          {
            "text": "-\\frac{4}{9}, decreasing",
            "imageUrl": ""
          },
          {
            "text": "\\frac{8}{9}, increasing",
            "imageUrl": ""
          },
          {
            "text": "-\\frac{8}{9}, decreasing",
            "imageUrl": ""
          },
          {
            "text": "\\frac{4}{9}, increasing",
            "imageUrl": ""
          }
        ],
        "answer": "1"
      }
    ]
  },
  {
    "id": "y12a-3a-q10a",
    "type": "multiple_choice",
    "question": "Differentiate \\( f(x) = 2\\sqrt{x} \\) by writing it in index form. Then evaluate \\( f'(1) \\) to determine whether the curve is increasing, decreasing or stationary at \\( x = 1 \\).",
    "a": "1, increasing",
    "difficulty": "medium",
    "timeLimit": 120,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Rewrite function in index form and differentiate.",
        "workingOut": "Rewrite the function as a fractional or negative index:\n\\[ f(x) = 2x^{\\frac{1}{2}} \\]\nApply the power rule to differentiate:\n\\[ f'(x) = x^{-\\frac{1}{2}} = \\frac{1}{\\sqrt{x}} \\]",
        "graphData": null
      },
      {
        "explanation": "Evaluate the derivative at \\( x = 1 \\).",
        "workingOut": "Substitute \\( x = 1 \\) into the derivative:\n\\[ f'(1) = 1 \\]",
        "graphData": null
      },
      {
        "explanation": "Determine status from the sign of the derivative.",
        "workingOut": "Since \\( f'(1) > 0 \\), the curve is increasing.",
        "graphData": null
      }
    ],
    "opts": [
      "-1, decreasing",
      "2, increasing",
      "1, increasing",
      "0, stationary"
    ],
    "options": [
      {
        "text": "1, increasing",
        "imageUrl": ""
      },
      {
        "text": "-1, decreasing",
        "imageUrl": ""
      },
      {
        "text": "1, stationary",
        "imageUrl": ""
      },
      {
        "text": "2, increasing",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "answerStr": "2"
  },
  {
    "id": "y12a-3a-q10b",
    "type": "multiple_choice",
    "question": "Differentiate \\( f(x) = \\frac{2}{x} \\) by writing it in index form. Then evaluate \\( f'(1) \\) to determine whether the curve is increasing, decreasing or stationary at \\( x = 1 \\).",
    "a": "-2, decreasing",
    "difficulty": "medium",
    "timeLimit": 120,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Rewrite function in index form and differentiate.",
        "workingOut": "Rewrite the function as a fractional or negative index:\n\\[ f(x) = 2x^{-1} \\]\nApply the power rule to differentiate:\n\\[ f'(x) = -2x^{-2} = -\\frac{2}{x^2} \\]",
        "graphData": null
      },
      {
        "explanation": "Evaluate the derivative at \\( x = 1 \\).",
        "workingOut": "Substitute \\( x = 1 \\) into the derivative:\n\\[ f'(1) = -2 \\]",
        "graphData": null
      },
      {
        "explanation": "Determine status from the sign of the derivative.",
        "workingOut": "Since \\( f'(1) < 0 \\), the curve is decreasing.",
        "graphData": null
      }
    ],
    "opts": [
      "1, increasing",
      "2, increasing",
      "-1, decreasing",
      "-2, decreasing"
    ],
    "options": [
      {
        "text": "-2, decreasing",
        "imageUrl": ""
      },
      {
        "text": "-1, decreasing",
        "imageUrl": ""
      },
      {
        "text": "-2, stationary",
        "imageUrl": ""
      },
      {
        "text": "2, increasing",
        "imageUrl": ""
      }
    ],
    "answer": "0",
    "answerStr": "3"
  },
  {
    "id": "y12a-3a-q10c",
    "type": "multiple_choice",
    "question": "Differentiate \\( f(x) = -\\frac{2}{x^2} \\) by writing it in index form. Then evaluate \\( f'(1) \\) to determine whether the curve is increasing, decreasing or stationary at \\( x = 1 \\).",
    "a": "4, increasing",
    "difficulty": "medium",
    "timeLimit": 120,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Rewrite function in index form and differentiate.",
        "workingOut": "Rewrite the function as a fractional or negative index:\n\\[ f(x) = -2x^{-2} \\]\nApply the power rule to differentiate:\n\\[ f'(x) = 4x^{-3} = \\frac{4}{x^3} \\]",
        "graphData": null
      },
      {
        "explanation": "Evaluate the derivative at \\( x = 1 \\).",
        "workingOut": "Substitute \\( x = 1 \\) into the derivative:\n\\[ f'(1) = 4 \\]",
        "graphData": null
      },
      {
        "explanation": "Determine status from the sign of the derivative.",
        "workingOut": "Since \\( f'(1) > 0 \\), the curve is increasing.",
        "graphData": null
      }
    ],
    "opts": [
      "2, increasing",
      "-2, decreasing",
      "4, increasing",
      "-4, decreasing"
    ],
    "options": [
      {
        "text": "4, stationary",
        "imageUrl": ""
      },
      {
        "text": "-4, decreasing",
        "imageUrl": ""
      },
      {
        "text": "2, increasing",
        "imageUrl": ""
      },
      {
        "text": "4, increasing",
        "imageUrl": ""
      }
    ],
    "answer": "3",
    "answerStr": "2"
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
        "type": "multiple_choice",
        "question": "a) Find the derivative \\( f'(x) \\).",
        "a": "6-2x",
        "solutionSteps": [
          {
            "explanation": "Differentiate the terms.",
            "workingOut": "Apply the power rule to \\( f(x) = 6x - x^2 \\):\n\\[ f'(x) = 6 - 2x \\]",
            "graphData": null
          }
        ],
        "opts": [
          "\\(6-2x\\)",
          "\\(6x-2\\)",
          "\\(-2x\\)",
          "\\(6+2x\\)"
        ],
        "options": [
          {
            "text": "\\(6-2x\\)",
            "imageUrl": ""
          },
          {
            "text": "\\(6x-2\\)",
            "imageUrl": ""
          },
          {
            "text": "\\(-2x\\)",
            "imageUrl": ""
          },
          {
            "text": "\\(6+2x\\)",
            "imageUrl": ""
          }
        ],
        "answer": "0"
      },
      {
        "id": "y12a-3a-q11bi",
        "type": "multiple_choice",
        "question": "b) i) For what values of \\( x \\) is \\( f'(x) > 0 \\)?",
        "a": "x<3",
        "solutionSteps": [
          {
            "explanation": "Set up the inequality.",
            "workingOut": "We need to find where \\( f'(x) > 0 \\):\n\\[ 6 - 2x > 0 \\]",
            "graphData": null
          },
          {
            "explanation": "Solve the inequality algebraically.",
            "workingOut": "Move \\( 2x \\) to the other side to keep the variable positive:\n\\[ 6 > 2x \\]\nDivide both sides by 2:\n\\[ 3 > x \\]\nWhich is the same as:\n\\[ x < 3 \\]",
            "graphData": null
          }
        ],
        "opts": [
          "\\(x < 6\\)",
          "\\(x < 3\\)",
          "\\(x > 3\\)",
          "\\(x > -3\\)"
        ],
        "options": [
          {
            "text": "\\(x < 6\\)",
            "imageUrl": ""
          },
          {
            "text": "\\(x < 3\\)",
            "imageUrl": ""
          },
          {
            "text": "\\(x > 3\\)",
            "imageUrl": ""
          },
          {
            "text": "\\(x > -3\\)",
            "imageUrl": ""
          }
        ],
        "answer": "1"
      },
      {
        "id": "y12a-3a-q11bii",
        "type": "multiple_choice",
        "question": "b) ii) For what values of \\( x \\) is \\( f'(x) < 0 \\)?",
        "a": "x>3",
        "solutionSteps": [
          {
            "explanation": "Set up the inequality.",
            "workingOut": "We need to find where \\( f'(x) < 0 \\):\n\\[ 6 - 2x < 0 \\]",
            "graphData": null
          },
          {
            "explanation": "Solve the inequality algebraically.",
            "workingOut": "Move \\( 2x \\) to the other side:\n\\[ 6 < 2x \\]\nDivide both sides by 2:\n\\[ 3 < x \\]\nWhich is the same as:\n\\[ x > 3 \\]",
            "graphData": null
          }
        ],
        "opts": [
          "\\(x < -3\\)",
          "\\(x > 6\\)",
          "\\(x > 3\\)",
          "\\(x < 3\\)"
        ],
        "options": [
          {
            "text": "\\(x < -3\\)",
            "imageUrl": ""
          },
          {
            "text": "\\(x > 6\\)",
            "imageUrl": ""
          },
          {
            "text": "\\(x > 3\\)",
            "imageUrl": ""
          },
          {
            "text": "\\(x < 3\\)",
            "imageUrl": ""
          }
        ],
        "answer": "2"
      },
      {
        "id": "y12a-3a-q11biii",
        "type": "multiple_choice",
        "question": "b) iii) For what values of \\( x \\) is \\( f'(x) = 0 \\)?",
        "a": "x=3",
        "solutionSteps": [
          {
            "explanation": "Set up the equation.",
            "workingOut": "We need to find where \\( f'(x) = 0 \\):\n\\[ 6 - 2x = 0 \\]",
            "graphData": null
          },
          {
            "explanation": "Solve the equation.",
            "workingOut": "Move \\( 2x \\) to the other side:\n\\[ 6 = 2x \\]\nDivide by 2:\n\\[ x = 3 \\]",
            "graphData": null
          }
        ],
        "opts": [
          "\\(x = -6\\)",
          "\\(x = 6\\)",
          "\\(x = -3\\)",
          "\\(x = 3\\)"
        ],
        "options": [
          {
            "text": "\\(x = -6\\)",
            "imageUrl": ""
          },
          {
            "text": "\\(x = 6\\)",
            "imageUrl": ""
          },
          {
            "text": "\\(x = -3\\)",
            "imageUrl": ""
          },
          {
            "text": "\\(x = 3\\)",
            "imageUrl": ""
          }
        ],
        "answer": "3"
      },
      {
        "id": "y12a-3a-q11c",
        "type": "multiple_choice",
        "question": "c) Find \\( f(3) \\). Then, by interpreting the results from part b geometrically, explain the shape of the graph \\( y = f(x) \\).",
        "a": "\\( f(3) = 6(3) - 3^2 = 18 - 9 = 9 \\). Geometrically, \\( (3, 9) \\) is the vertex of the concave-down parabola \\( y = 6x - x^2 \\). At \\( x = 3 \\), \\( f'(3) = 0 \\), giving a horizontal tangent. For \\( x < 3 \\), \\( f'(x) > 0 \\), meaning the curve is rising (increasing). For \\( x > 3 \\), \\( f'(x) < 0 \\), meaning the curve is falling (decreasing).",
        "solutionSteps": [
          {
            "explanation": "Evaluate \\( f(3) \\).",
            "workingOut": "Substitute \\( x = 3 \\) into the original function \\( f(x) = 6x - x^2 \\):\n\\[ f(3) = 6(3) - (3)^2 \\]\n\\[ f(3) = 18 - 9 \\]\n\\[ f(3) = 9 \\]\nSo the point is \\( (3, 9) \\).",
            "graphData": null
          },
          {
            "explanation": "Interpret the geometric shape.",
            "workingOut": "From the previous parts, we know:\n- \\( f'(3) = 0 \\) (stationary point)\n- \\( f'(x) > 0 \\) for \\( x < 3 \\) (increasing before the point)\n- \\( f'(x) < 0 \\) for \\( x > 3 \\) (decreasing after the point)\nSince the curve goes up, peaks at \\( (3,9) \\), and then goes down, this point is a local maximum, and the shape is a concave-down parabola.",
            "graphData": null
          }
        ],
        "opts": [
          "\\(f(3)=-9\\), point of inflection.",
          "\\(f(3)=9\\), vertex of a concave-down parabola (maximum).",
          "\\(f(3)=18\\), vertex of a concave-down parabola (maximum).",
          "\\(f(3)=9\\), vertex of a concave-up parabola (minimum)."
        ],
        "options": [
          {
            "text": "\\(f(3)=-9\\), point of inflection.",
            "imageUrl": ""
          },
          {
            "text": "\\(f(3)=9\\), vertex of a concave-down parabola (maximum).",
            "imageUrl": ""
          },
          {
            "text": "\\(f(3)=18\\), vertex of a concave-down parabola (maximum).",
            "imageUrl": ""
          },
          {
            "text": "\\(f(3)=9\\), vertex of a concave-up parabola (minimum).",
            "imageUrl": ""
          }
        ],
        "answer": "1"
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
        "type": "multiple_choice",
        "question": "a) Find the derivative \\( f'(x) \\).",
        "a": "2x-6",
        "solutionSteps": [
          {
            "explanation": "Differentiate using power rule.",
            "workingOut": "Apply the power rule to \\( f(x) = x^2 - 6x + 8 \\):\n\\[ f'(x) = 2x - 6 \\]",
            "graphData": null
          }
        ],
        "opts": [
          "\\(2x+6\\)",
          "\\(x^2-6\\)",
          "\\(x-6\\)",
          "\\(2x-6\\)"
        ],
        "options": [
          {
            "text": "\\(2x+6\\)",
            "imageUrl": ""
          },
          {
            "text": "\\(x^2-6\\)",
            "imageUrl": ""
          },
          {
            "text": "\\(x-6\\)",
            "imageUrl": ""
          },
          {
            "text": "\\(2x-6\\)",
            "imageUrl": ""
          }
        ],
        "answer": "3"
      },
      {
        "id": "y12a-3a-q12bi",
        "type": "multiple_choice",
        "question": "b) i) For what values of \\( x \\) is \\( f'(x) > 0 \\)?",
        "a": "x>3",
        "solutionSteps": [
          {
            "explanation": "Set up the inequality.",
            "workingOut": "We need to find where \\( f'(x) > 0 \\):\n\\[ 2x - 6 > 0 \\]",
            "graphData": null
          },
          {
            "explanation": "Solve the inequality algebraically.",
            "workingOut": "Move \\( 6 \\) to the other side:\n\\[ 2x > 6 \\]\nDivide both sides by 2:\n\\[ x > 3 \\]",
            "graphData": null
          }
        ],
        "opts": [
          "\\(x > -3\\)",
          "\\(x < 3\\)",
          "\\(x < -3\\)",
          "\\(x > 3\\)"
        ],
        "options": [
          {
            "text": "\\(x > -3\\)",
            "imageUrl": ""
          },
          {
            "text": "\\(x < 3\\)",
            "imageUrl": ""
          },
          {
            "text": "\\(x < -3\\)",
            "imageUrl": ""
          },
          {
            "text": "\\(x > 3\\)",
            "imageUrl": ""
          }
        ],
        "answer": "3"
      },
      {
        "id": "y12a-3a-q12bii",
        "type": "multiple_choice",
        "question": "b) ii) For what values of \\( x \\) is \\( f'(x) < 0 \\)?",
        "a": "x<3",
        "solutionSteps": [
          {
            "explanation": "Set up the inequality.",
            "workingOut": "We need to find where \\( f'(x) < 0 \\):\n\\[ 2x - 6 < 0 \\]",
            "graphData": null
          },
          {
            "explanation": "Solve the inequality algebraically.",
            "workingOut": "Move \\( 6 \\) to the other side:\n\\[ 2x < 6 \\]\nDivide both sides by 2:\n\\[ x < 3 \\]",
            "graphData": null
          }
        ],
        "opts": [
          "\\(x > 3\\)",
          "\\(x < 3\\)",
          "\\(x > -3\\)",
          "\\(x < -3\\)"
        ],
        "options": [
          {
            "text": "\\(x > 3\\)",
            "imageUrl": ""
          },
          {
            "text": "\\(x < 3\\)",
            "imageUrl": ""
          },
          {
            "text": "\\(x > -3\\)",
            "imageUrl": ""
          },
          {
            "text": "\\(x < -3\\)",
            "imageUrl": ""
          }
        ],
        "answer": "1"
      },
      {
        "id": "y12a-3a-q12biii",
        "type": "multiple_choice",
        "question": "b) iii) For what values of \\( x \\) is \\( f'(x) = 0 \\)?",
        "a": "x=3",
        "solutionSteps": [
          {
            "explanation": "Set up the equation.",
            "workingOut": "We need to find where \\( f'(x) = 0 \\):\n\\[ 2x - 6 = 0 \\]",
            "graphData": null
          },
          {
            "explanation": "Solve the equation.",
            "workingOut": "Move \\( 6 \\) to the other side:\n\\[ 2x = 6 \\]\nDivide by 2:\n\\[ x = 3 \\]",
            "graphData": null
          }
        ],
        "opts": [
          "\\(x = -3\\)",
          "\\(x = 6\\)",
          "\\(x = 3\\)",
          "\\(x = -6\\)"
        ],
        "options": [
          {
            "text": "\\(x = -3\\)",
            "imageUrl": ""
          },
          {
            "text": "\\(x = 6\\)",
            "imageUrl": ""
          },
          {
            "text": "\\(x = 3\\)",
            "imageUrl": ""
          },
          {
            "text": "\\(x = -6\\)",
            "imageUrl": ""
          }
        ],
        "answer": "2"
      },
      {
        "id": "y12a-3a-q12c",
        "type": "multiple_choice",
        "question": "c) Find \\( f(3) \\). Then, by interpreting the results from part b geometrically, explain the shape of the graph \\( y = f(x) \\).",
        "a": "\\( f(3) = 3^2 - 6(3) + 8 = 9 - 18 + 8 = -1 \\). Geometrically, \\( (3, -1) \\) is the minimum vertex of the concave-up parabola \\( y = x^2 - 6x + 8 \\). The tangent line at the vertex is horizontal since \\( f'(3) = 0 \\). For \\( x < 3 \\), \\( f'(x) < 0 \\) which means the curve is decreasing. For \\( x > 3 \\), \\( f'(x) > 0 \\) which means the curve is increasing.",
        "solutionSteps": [
          {
            "explanation": "Evaluate \\( f(3) \\).",
            "workingOut": "Substitute \\( x = 3 \\) into the original function \\( f(x) = x^2 - 6x + 8 \\):\n\\[ f(3) = (3)^2 - 6(3) + 8 \\]\n\\[ f(3) = 9 - 18 + 8 \\]\n\\[ f(3) = -1 \\]\nSo the point is \\( (3, -1) \\).",
            "graphData": null
          },
          {
            "explanation": "Interpret the geometric shape.",
            "workingOut": "From the previous parts, we know:\n- \\( f'(3) = 0 \\) (stationary point)\n- \\( f'(x) < 0 \\) for \\( x < 3 \\) (decreasing before the point)\n- \\( f'(x) > 0 \\) for \\( x > 3 \\) (increasing after the point)\nSince the curve goes down, hits bottom at \\( (3,-1) \\), and then goes up, this point is a local minimum, and the shape is a concave-up parabola.",
            "graphData": null
          }
        ],
        "opts": [
          "\\(f(3)=-1\\), point of inflection.",
          "\\(f(3)=-1\\), vertex of a concave-down parabola (maximum).",
          "\\(f(3)=1\\), vertex of a concave-up parabola (minimum).",
          "\\(f(3)=-1\\), vertex of a concave-up parabola (minimum)."
        ],
        "options": [
          {
            "text": "\\(f(3)=-1\\), point of inflection.",
            "imageUrl": ""
          },
          {
            "text": "\\(f(3)=-1\\), vertex of a concave-down parabola (maximum).",
            "imageUrl": ""
          },
          {
            "text": "\\(f(3)=1\\), vertex of a concave-up parabola (minimum).",
            "imageUrl": ""
          },
          {
            "text": "\\(f(3)=-1\\), vertex of a concave-up parabola (minimum).",
            "imageUrl": ""
          }
        ],
        "answer": "3"
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
        "type": "multiple_choice",
        "question": "a) Find the fully factorised derivative of \\( f(x) \\).",
        "a": "Differentiating \\( f(x) \\) gives \\( f'(x) = 3x^2 - 12x - 15 \\). Factoring out the common factor 3: \\( f'(x) = 3(x^2 - 4x - 5) \\). Factoring the quadratic inside the parentheses: \\( f'(x) = 3(x-5)(x+1) \\).",
        "solutionSteps": [
          {
            "explanation": "Find the derivative of the polynomial terms.",
            "workingOut": "Apply the power rule to \\( f(x) = x^3 - 6x^2 - 15x - 4 \\):\n\\[ f'(x) = 3x^2 - 12x - 15 \\]",
            "graphData": null
          },
          {
            "explanation": "Factor out the common factor.",
            "workingOut": "Pull out the common factor of 3:\n\\[ f'(x) = 3(x^2 - 4x - 5) \\]",
            "graphData": null
          },
          {
            "explanation": "Factor the quadratic trinomial.",
            "workingOut": "Find two numbers that multiply to -5 and add to -4 (which are -5 and +1):\n\\[ f'(x) = 3(x-5)(x+1) \\]",
            "graphData": null
          }
        ],
        "opts": [
          "\\(3(x-5)(x-1)\\)",
          "\\(3(x+5)(x-1)\\)",
          "\\(3(x-5)(x+1)\\)",
          "\\(3(x+5)(x+1)\\)"
        ],
        "options": [
          {
            "text": "\\(3(x-5)(x-1)\\)",
            "imageUrl": ""
          },
          {
            "text": "\\(3(x+5)(x-1)\\)",
            "imageUrl": ""
          },
          {
            "text": "\\(3(x-5)(x+1)\\)",
            "imageUrl": ""
          },
          {
            "text": "\\(3(x+5)(x+1)\\)",
            "imageUrl": ""
          }
        ],
        "answer": "2"
      },
      {
        "id": "y12a-3a-q13b",
        "type": "multiple_choice",
        "question": "b) For what values of \\( x \\) is \\( f(x) \\) increasing?",
        "a": "The graph of the derivative \\( y = f'(x) = 3(x-5)(x+1) \\) is a parabola opening upwards with x-intercepts at \\( x = -1 \\) and \\( x = 5 \\). The curve lies above the x-axis (meaning \\( f'(x) > 0 \\)) for \\( x < -1 \\) and \\( x > 5 \\). Since \\( f'(x) > 0 \\) in these regions, \\( f(x) \\) is increasing when \\( x > 5 \\) or \\( x < -1 \\).",
        "solutionSteps": [
          {
            "explanation": "Identify the key features of the derivative function.",
            "workingOut": "The derivative is \\( f'(x) = 3(x-5)(x+1) \\).\nThis is a parabola opening upwards with x-intercepts at \\( x = -1 \\) and \\( x = 5 \\).",
            "graphData": null
          },
          {
            "explanation": "Determine where the derivative is positive.",
            "workingOut": "A function is increasing where \\( f'(x) > 0 \\).\nSince it is a concave-up parabola, it lies above the x-axis on the outer regions:\n\\[ x < -1 \\quad \\text{or} \\quad x > 5 \\]",
            "graphData": null
          }
        ],
        "opts": [
          "\\(-5 < x < 1\\)",
          "\\(x < -5 \\text{ or } x > 1\\)",
          "\\(x < -1 \\text{ or } x > 5\\)",
          "\\(-1 < x < 5\\)"
        ],
        "options": [
          {
            "text": "\\(-5 < x < 1\\)",
            "imageUrl": ""
          },
          {
            "text": "\\(x < -5 \\text{ or } x > 1\\)",
            "imageUrl": ""
          },
          {
            "text": "\\(x < -1 \\text{ or } x > 5\\)",
            "imageUrl": ""
          },
          {
            "text": "\\(-1 < x < 5\\)",
            "imageUrl": ""
          }
        ],
        "answer": "2"
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
        "type": "multiple_choice",
        "question": "a) Find the derivative \\( f'(x) \\).",
        "a": "3x^2+2x-5",
        "solutionSteps": [
          {
            "explanation": "Differentiate terms using power rule.",
            "workingOut": "Apply the power rule to \\( f(x) = x^3 + x^2 - 5x + 3 \\):\n\\[ f'(x) = 3x^2 + 2x - 5 \\]",
            "graphData": null
          }
        ],
        "opts": [
          "\\(3x^2+2x-5\\)",
          "\\(3x^2+2x+5\\)",
          "\\(x^2+2x-5\\)",
          "\\(3x^2-2x-5\\)"
        ],
        "options": [
          {
            "text": "\\(3x^2+2x-5\\)",
            "imageUrl": ""
          },
          {
            "text": "\\(3x^2+2x+5\\)",
            "imageUrl": ""
          },
          {
            "text": "\\(x^2+2x-5\\)",
            "imageUrl": ""
          },
          {
            "text": "\\(3x^2-2x-5\\)",
            "imageUrl": ""
          }
        ],
        "answer": "0"
      },
      {
        "id": "y12a-3a-q14b",
        "type": "multiple_choice",
        "question": "b) Use factoring to find the zeroes of \\( f'(x) \\).",
        "a": "-5/3,1",
        "solutionSteps": [
          {
            "explanation": "Set the derivative to zero.",
            "workingOut": "To find the zeroes, set \\( f'(x) = 0 \\):\n\\[ 3x^2 + 2x - 5 = 0 \\]",
            "graphData": null
          },
          {
            "explanation": "Factor the quadratic.",
            "workingOut": "Split the middle term (or use cross-multiplication):\n\\[ 3x^2 + 5x - 3x - 5 = 0 \\]\n\\[ x(3x + 5) - 1(3x + 5) = 0 \\]\n\\[ (3x+5)(x-1) = 0 \\]",
            "graphData": null
          },
          {
            "explanation": "Solve for the roots.",
            "workingOut": "Set each bracket to zero:\n\\[ 3x+5 = 0 \\implies x = -\\frac{5}{3} \\]\n\\[ x-1 = 0 \\implies x = 1 \\]",
            "graphData": null
          }
        ],
        "opts": [
          "\\(5, \\, -3\\)",
          "\\(5/3, \\, -1\\)",
          "\\(-5, \\, 3\\)",
          "\\(-5/3, \\, 1\\)"
        ],
        "options": [
          {
            "text": "\\(5, \\, -3\\)",
            "imageUrl": ""
          },
          {
            "text": "\\(5/3, \\, -1\\)",
            "imageUrl": ""
          },
          {
            "text": "\\(-5, \\, 3\\)",
            "imageUrl": ""
          },
          {
            "text": "\\(-5/3, \\, 1\\)",
            "imageUrl": ""
          }
        ],
        "answer": "3"
      },
      {
        "id": "y12a-3a-q14c",
        "type": "multiple_choice",
        "question": "c) Which statement best describes the graph of \\( y = f'(x) \\)?",
        "a": "The graph is a parabola opening upwards with x-intercepts at \\( x = -5/3 \\) and \\( x = 1 \\), and y-intercept at \\( y = -5 \\). The vertex lies at \\( x = -1/3 \\).",
        "solutionSteps": [
          {
            "explanation": "Analyze the derivative equation.",
            "workingOut": "The derivative is \\( f'(x) = 3x^2 + 2x - 5 \\).\nSince the highest power is 2, it is a parabola. Since the leading coefficient (3) is positive, it opens upwards (concave-up).",
            "graphData": null
          },
          {
            "explanation": "Identify the x-intercepts.",
            "workingOut": "From the previous part, the zeroes of \\( f'(x) \\) are \\( -5/3 \\) and \\( 1 \\). Therefore, the graph crosses the x-axis at these points.",
            "graphData": null
          }
        ],
        "opts": [
          "A concave-up parabola with x-intercepts at -5/3 and 1",
          "A cubic curve with roots at -5/3 and 1",
          "A concave-up parabola with x-intercepts at 5/3 and -1",
          "A concave-down parabola with x-intercepts at -5/3 and 1"
        ],
        "options": [
          {
            "text": "A concave-up parabola with x-intercepts at -5/3 and 1",
            "imageUrl": ""
          },
          {
            "text": "A cubic curve with roots at -5/3 and 1",
            "imageUrl": ""
          },
          {
            "text": "A concave-up parabola with x-intercepts at 5/3 and -1",
            "imageUrl": ""
          },
          {
            "text": "A concave-down parabola with x-intercepts at -5/3 and 1",
            "imageUrl": ""
          }
        ],
        "answer": "0"
      },
      {
        "id": "y12a-3a-q14d",
        "type": "multiple_choice",
        "question": "d) Hence find the values of \\( x \\) for which \\( f(x) \\) is decreasing.",
        "a": "-5/3<x<1",
        "solutionSteps": [
          {
            "explanation": "Relate decreasing behavior to the derivative.",
            "workingOut": "The function decreases where the derivative is negative:\n\\[ f'(x) < 0 \\]",
            "graphData": null
          },
          {
            "explanation": "Solve the inequality using the graph.",
            "workingOut": "We know \\( y = f'(x) \\) is a concave-up parabola with x-intercepts at \\( -5/3 \\) and \\( 1 \\).\nThe parabola lies below the x-axis (is negative) *between* the two roots:\n\\[ -\\frac{5}{3} < x < 1 \\]",
            "graphData": null
          }
        ],
        "opts": [
          "\\(-5/3 < x < 1\\)",
          "\\(x < -1 \\text{ or } x > 5/3\\)",
          "\\(x < -5/3 \\text{ or } x > 1\\)",
          "\\(-1 < x < 5/3\\)"
        ],
        "options": [
          {
            "text": "\\(-5/3 < x < 1\\)",
            "imageUrl": ""
          },
          {
            "text": "\\(x < -1 \\text{ or } x > 5/3\\)",
            "imageUrl": ""
          },
          {
            "text": "\\(x < -5/3 \\text{ or } x > 1\\)",
            "imageUrl": ""
          },
          {
            "text": "\\(-1 < x < 5/3\\)",
            "imageUrl": ""
          }
        ],
        "answer": "0"
      }
    ]
  },
  {
    "id": "y12a-3a-q15a",
    "type": "multiple_choice",
    "question": "Find the derivative of \\( y = x^2 - 6x + 5 \\). By solving the inequality \\( y' > 0 \\), find the values of \\( x \\) for which the function is increasing.",
    "a": "x>3",
    "difficulty": "medium",
    "timeLimit": 120,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Find the derivative \\( y' \\).",
        "workingOut": "Apply the power rule to \\( y = x^2 - 6x + 5 \\):\n\\[ y' = 2x - 6 \\]",
        "graphData": null
      },
      {
        "explanation": "Solve the inequality \\( y' > 0 \\).",
        "workingOut": "Set the derivative greater than zero to find where the function is increasing:\n\\[ 2x - 6 > 0 \\]\nMove 6 to the other side:\n\\[ 2x > 6 \\]\nDivide by 2:\n\\[ x > 3 \\]",
        "graphData": null
      }
    ],
    "opts": [
      "\\(x > 3\\)",
      "\\(x < 3\\)",
      "\\(x < -3\\)",
      "\\(x > -3\\)"
    ],
    "options": [
      {
        "text": "\\(x > 3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x < 3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x < -3\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x > -3\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0"
  },
  {
    "id": "y12a-3a-q15b",
    "type": "multiple_choice",
    "question": "Find the derivative of \\( y = 9 - 8x - x^2 \\). By solving the inequality \\( y' > 0 \\), find the values of \\( x \\) for which the function is increasing.",
    "a": "x<-4",
    "difficulty": "medium",
    "timeLimit": 120,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Find the derivative \\( y' \\).",
        "workingOut": "Apply the power rule to \\( y = 9 - 8x - x^2 \\):\n\\[ y' = -8 - 2x \\]",
        "graphData": null
      },
      {
        "explanation": "Solve the inequality \\( y' > 0 \\).",
        "workingOut": "Set the derivative greater than zero:\n\\[ -8 - 2x > 0 \\]\nMove \\( 2x \\) to the other side to keep the coefficient positive:\n\\[ -8 > 2x \\]\nDivide by 2:\n\\[ -4 > x \\]\nWhich is the same as:\n\\[ x < -4 \\]",
        "graphData": null
      }
    ],
    "opts": [
      "\\(x > -4\\)",
      "\\(x < 4\\)",
      "\\(x < -4\\)",
      "\\(x > 4\\)"
    ],
    "options": [
      {
        "text": "\\(x > -4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x < 4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x < -4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x > 4\\)",
        "imageUrl": ""
      }
    ],
    "answer": "2"
  },
  {
    "id": "y12a-3a-q15c",
    "type": "multiple_choice",
    "question": "Find the derivative of \\( y = x^3 - 12x \\). By solving the inequality \\( y' > 0 \\), find the values of \\( x \\) for which the function is increasing.",
    "a": "x<-2,x>2",
    "difficulty": "medium",
    "timeLimit": 120,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Find the derivative \\( y' \\).",
        "workingOut": "Apply the power rule to \\( y = x^3 - 12x \\):\n\\[ y' = 3x^2 - 12 \\]",
        "graphData": null
      },
      {
        "explanation": "Solve the quadratic inequality \\( y' > 0 \\).",
        "workingOut": "Set the derivative greater than zero:\n\\[ 3x^2 - 12 > 0 \\]\nDivide by 3:\n\\[ x^2 - 4 > 0 \\]\nFactor as a difference of two squares:\n\\[ (x - 2)(x + 2) > 0 \\]\nThis is a concave-up parabola with roots at \\( x = 2 \\) and \\( x = -2 \\). It is positive on the outside of the roots:\n\\[ x < -2 \\quad \\text{or} \\quad x > 2 \\]",
        "graphData": null
      }
    ],
    "opts": [
      "\\(x < -2 \\text{ or } x > 2\\)",
      "\\(-2 < x < 2\\)",
      "\\(-12 < x < 12\\)",
      "\\(x < -12 \\text{ or } x > 12\\)"
    ],
    "options": [
      {
        "text": "\\(x < -2 \\text{ or } x > 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-2 < x < 2\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-12 < x < 12\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x < -12 \\text{ or } x > 12\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0"
  },
  {
    "id": "y12a-3a-q15d",
    "type": "multiple_choice",
    "question": "Find the derivative of \\( y = x^3 - 6x^2 + 10 \\). By solving the inequality \\( y' > 0 \\), find the values of \\( x \\) for which the function is increasing.",
    "a": "x<0,x>4",
    "difficulty": "medium",
    "timeLimit": 120,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Find the derivative \\( y' \\).",
        "workingOut": "Apply the power rule to \\( y = x^3 - 6x^2 + 10 \\):\n\\[ y' = 3x^2 - 12x \\]",
        "graphData": null
      },
      {
        "explanation": "Solve the quadratic inequality \\( y' > 0 \\).",
        "workingOut": "Set the derivative greater than zero:\n\\[ 3x^2 - 12x > 0 \\]\nFactor out \\( 3x \\):\n\\[ 3x(x - 4) > 0 \\]\nThis is a concave-up parabola with roots at \\( x = 0 \\) and \\( x = 4 \\). It is positive on the outside of the roots:\n\\[ x < 0 \\quad \\text{or} \\quad x > 4 \\]",
        "graphData": null
      }
    ],
    "opts": [
      "\\(x < 0 \\text{ or } x > 4\\)",
      "\\(0 < x < 4\\)",
      "\\(x < -4 \\text{ or } x > 0\\)",
      "\\(-4 < x < 0\\)"
    ],
    "options": [
      {
        "text": "\\(x < 0 \\text{ or } x > 4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(0 < x < 4\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(x < -4 \\text{ or } x > 0\\)",
        "imageUrl": ""
      },
      {
        "text": "\\(-4 < x < 0\\)",
        "imageUrl": ""
      }
    ],
    "answer": "0"
  },
  {
    "id": "y12a-3a-q16a",
    "type": "multiple_choice",
    "question": "The graph of function A, \\( y = f(x) \\), is shown below. Match this function with the graph of its derivative.\n\nCandidates:\nGraph I: A parabola opening upwards with roots at \\( x = -1 \\) and \\( x = 1 \\).\nGraph II: A straight line through the origin with negative slope.\nGraph III: A straight line through the origin with positive slope.\nGraph IV: A parabola opening downwards with roots at \\( x = -1 \\) and \\( x = 1 \\).",
    "opts": [
      "Graph IV",
      "Graph II",
      "Graph III",
      "Graph I"
    ],
    "a": "0",
    "difficulty": "medium",
    "timeLimit": 120,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Identify the function type.",
        "workingOut": "The graph is a parabola opening upwards (e.g. \\( y = x^2 - 2 \\))."
      },
      {
        "explanation": "Differentiate to find the shape of the derivative.",
        "workingOut": "The derivative of a positive quadratic is a linear function with a positive slope (e.g. \\( y' = 2x \\)). This matches Graph III."
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
        "script": "board.suspendUpdate();\nboard.create('functiongraph', [function(x){return x*x - 2;}, -3.5, 3.5], {strokeColor: 'blue', strokeWidth: 2});\nboard.unsuspendUpdate();"
      }
    },
    "answerStr": "2"
  },
  {
    "id": "y12a-3a-q16b",
    "type": "multiple_choice",
    "question": "The graph of function B, \\( y = f(x) \\), is shown below. Match this function with the graph of its derivative.\n\nCandidates:\nGraph I: A parabola opening upwards with roots at \\( x = -1 \\) and \\( x = 1 \\).\nGraph II: A straight line through the origin with negative slope.\nGraph III: A straight line through the origin with positive slope.\nGraph IV: A parabola opening downwards with roots at \\( x = -1 \\) and \\( x = 1 \\).",
    "opts": [
      "Graph I",
      "Graph II",
      "Graph IV",
      "Graph III"
    ],
    "a": "0",
    "difficulty": "medium",
    "timeLimit": 120,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Identify the function type.",
        "workingOut": "The graph is a cubic function with a positive leading coefficient."
      },
      {
        "explanation": "Differentiate to find the shape of the derivative.",
        "workingOut": "The derivative of a positive cubic is a positive quadratic (a parabola opening upwards). It has roots where the original cubic has turning points (around \\( x = -1 \\) and \\( x = 1 \\)). This matches Graph I."
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
        "script": "board.suspendUpdate();\nboard.create('functiongraph', [function(x){return x*x*x - 3*x;}, -3.5, 3.5], {strokeColor: 'blue', strokeWidth: 2});\nboard.unsuspendUpdate();"
      }
    },
    "answerStr": "0"
  },
  {
    "id": "y12a-3a-q16c",
    "type": "multiple_choice",
    "question": "The graph of function C, \\( y = f(x) \\), is shown below. Match this function with the graph of its derivative.\n\nCandidates:\nGraph I: A parabola opening upwards with roots at \\( x = -1 \\) and \\( x = 1 \\).\nGraph II: A straight line through the origin with negative slope.\nGraph III: A straight line through the origin with positive slope.\nGraph IV: A parabola opening downwards with roots at \\( x = -1 \\) and \\( x = 1 \\).",
    "opts": [
      "Graph III",
      "Graph II",
      "Graph I",
      "Graph IV"
    ],
    "a": "0",
    "difficulty": "medium",
    "timeLimit": 120,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Identify the function type.",
        "workingOut": "The graph is a parabola opening downwards (e.g. \\( y = -x^2 + 4 \\))."
      },
      {
        "explanation": "Differentiate to find the shape of the derivative.",
        "workingOut": "The derivative of a negative quadratic is a linear function with a negative slope (e.g. \\( y' = -2x \\)). This matches Graph II."
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
        "script": "board.suspendUpdate();\nboard.create('functiongraph', [function(x){return -x*x + 4;}, -3.5, 3.5], {strokeColor: 'blue', strokeWidth: 2});\nboard.unsuspendUpdate();"
      }
    },
    "answerStr": "1"
  },
  {
    "id": "y12a-3a-q16d",
    "type": "multiple_choice",
    "question": "The graph of function D, \\( y = f(x) \\), is shown below. Match this function with the graph of its derivative.\n\nCandidates:\nGraph I: A parabola opening upwards with roots at \\( x = -1 \\) and \\( x = 1 \\).\nGraph II: A straight line through the origin with negative slope.\nGraph III: A straight line through the origin with positive slope.\nGraph IV: A parabola opening downwards with roots at \\( x = -1 \\) and \\( x = 1 \\).",
    "opts": [
      "Graph III",
      "Graph II",
      "Graph IV",
      "Graph I"
    ],
    "a": "0",
    "difficulty": "medium",
    "timeLimit": 120,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Identify the function type.",
        "workingOut": "The graph is a cubic function with a negative leading coefficient."
      },
      {
        "explanation": "Differentiate to find the shape of the derivative.",
        "workingOut": "The derivative of a negative cubic is a negative quadratic (a parabola opening downwards). It has roots at the turning points of the cubic (around \\( x = -1 \\) and \\( x = 1 \\)). This matches Graph IV."
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
        "script": "board.suspendUpdate();\nboard.create('functiongraph', [function(x){return -x*x*x + 3*x;}, -3.5, 3.5], {strokeColor: 'blue', strokeWidth: 2});\nboard.unsuspendUpdate();"
      }
    },
    "answerStr": "2"
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
        "type": "multiple_choice",
        "question": "a) Find the derivative \\( f'(x) \\).",
        "solutionSteps": [
          {
            "explanation": "Rewrite the function using a negative index.",
            "workingOut": "\\[ f(x) = -\\frac{2}{x} = -2x^{-1} \\]"
          },
          {
            "explanation": "Differentiate using the power rule.",
            "workingOut": "\\[ f'(x) = -2(-1)x^{-2} = 2x^{-2} = \\frac{2}{x^2} \\]"
          }
        ],
        "opts": [
          "\\( -\\frac{2}{x^2} \\)",
          "\\( \\frac{2}{x^2} \\)",
          "\\( \\frac{2}{x} \\)",
          "\\( -\\frac{2}{x} \\)"
        ],
        "options": [
          {
            "text": "\\( -\\frac{2}{x^2} \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( \\frac{2}{x^2} \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( \\frac{2}{x} \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( -\\frac{2}{x} \\)",
            "imageUrl": ""
          }
        ],
        "answerStr": "1",
        "answer": "1"
      },
      {
        "id": "y12a-3a-q17b",
        "type": "multiple_choice",
        "question": "b) Hence, prove that \\( f(x) \\) increases for all \\( x \\) in its domain.",
        "solutionSteps": [
          {
            "explanation": "Analyze the sign of the derivative.",
            "workingOut": "For all \\( x \\neq 0 \\), the denominator \\( x^2 \\) is strictly positive.\nTherefore, \\( f'(x) = \\frac{2}{x^2} > 0 \\) for all \\( x \\) in the domain.\nSince the derivative is always positive, the function is always increasing on its domain."
          }
        ],
        "opts": [
          "Because \\( f'(x) = -\\frac{2}{x} < 0 \\) for all \\( x \\neq 0 \\).",
          "Because \\( f'(x) = \\frac{2}{x} > 0 \\) for all \\( x \\neq 0 \\).",
          "Because \\( f'(x) = \\frac{2}{x^2} > 0 \\) for all \\( x \\neq 0 \\).",
          "Because \\( f'(x) = -\\frac{2}{x^2} < 0 \\) for all \\( x \\neq 0 \\)."
        ],
        "options": [
          {
            "text": "Because \\( f'(x) = -\\frac{2}{x} < 0 \\) for all \\( x \\neq 0 \\).",
            "imageUrl": ""
          },
          {
            "text": "Because \\( f'(x) = \\frac{2}{x} > 0 \\) for all \\( x \\neq 0 \\).",
            "imageUrl": ""
          },
          {
            "text": "Because \\( f'(x) = \\frac{2}{x^2} > 0 \\) for all \\( x \\neq 0 \\).",
            "imageUrl": ""
          },
          {
            "text": "Because \\( f'(x) = -\\frac{2}{x^2} < 0 \\) for all \\( x \\neq 0 \\).",
            "imageUrl": ""
          }
        ],
        "answerStr": "2",
        "answer": "2"
      },
      {
        "id": "y12a-3a-q17c",
        "type": "teacher_review",
        "question": "c) Sketch a graph of \\( f(x) = -\\frac{2}{x} \\), and explain why \\( f(-1) > f(2) \\) despite this fact.",
        "a": "Evaluate function values: \\( f(-1) = 2 \\) and \\( f(2) = -1 \\). Even though the function is increasing on each branch \\( x < 0 \\) and \\( x > 0 \\) individually, the function is discontinuous at \\( x = 0 \\). Therefore, the 'increasing' property cannot be applied across the vertical asymptote to compare \\( f(-1) \\) and \\( f(2) \\).",
        "solutionSteps": [
          {
            "explanation": "Calculate the function values.",
            "workingOut": "\\[ f(-1) = -\\frac{2}{-1} = 2 \\]\n\\[ f(2) = -\\frac{2}{2} = -1 \\]",
            "graphData": {
              "jsxGraph": {
                "width": 300,
                "height": 300,
                "boundingbox": [
                  -4,
                  6,
                  4,
                  -6
                ],
                "showGrid": true,
                "showAxisLabels": true,
                "script": "board.suspendUpdate();\nboard.create('functiongraph', [function(x){ return -2/x; }], {strokeColor: 'blue', strokeWidth: 2});\nboard.unsuspendUpdate();"
              }
            }
          },
          {
            "explanation": "Explain the apparent contradiction.",
            "workingOut": "Although \\( f(-1) > f(2) \\), this does not contradict the fact that the function is strictly increasing.\nThe function has a vertical asymptote at \\( x = 0 \\), which breaks the domain into two separate branches.\nThe property of being 'increasing' applies within each continuous interval (branch), not across the asymptote."
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
        "type": "multiple_choice",
        "question": "a) Find the derivative \\( f'(x) \\).",
        "solutionSteps": [
          {
            "explanation": "Identify components for the quotient rule.",
            "workingOut": "\\[ f(x) = \\frac{3x}{x-4} \\]\nLet \\( u = 3x \\) and \\( v = x - 4 \\).\nThen \\( u' = 3 \\) and \\( v' = 1 \\)."
          },
          {
            "explanation": "Apply the quotient rule.",
            "workingOut": "\\[ f'(x) = \\frac{u'v - uv'}{v^2} \\]\n\\[ f'(x) = \\frac{3(x-4) - (3x)(1)}{(x-4)^2} \\]\n\\[ f'(x) = \\frac{3x - 12 - 3x}{(x-4)^2} \\]\n\\[ f'(x) = -\\frac{12}{(x-4)^2} \\]"
          }
        ],
        "opts": [
          "\\( \\frac{12}{(x-4)^2} \\)",
          "\\( \\frac{3}{(x-4)^2} \\)",
          "\\( -\\frac{12}{(x-4)^2} \\)",
          "\\( -\\frac{3}{(x-4)^2} \\)"
        ],
        "options": [
          {
            "text": "\\( \\frac{12}{(x-4)^2} \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( \\frac{3}{(x-4)^2} \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( -\\frac{12}{(x-4)^2} \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( -\\frac{3}{(x-4)^2} \\)",
            "imageUrl": ""
          }
        ],
        "answerStr": "2",
        "answer": "2"
      },
      {
        "id": "y12a-3a-q18b",
        "type": "multiple_choice",
        "question": "b) Explain why \\( f(x) \\) is decreasing for all \\( x \\neq 4 \\).",
        "solutionSteps": [
          {
            "explanation": "Analyze the sign of the derivative.",
            "workingOut": "From the previous part, we found:\n\\[ f'(x) = -\\frac{12}{(x-4)^2} \\]"
          },
          {
            "explanation": "Evaluate the denominator and overall sign.",
            "workingOut": "For any \\( x \\neq 4 \\), the square \\( (x-4)^2 \\) is strictly positive.\nTherefore, a negative numerator (-12) divided by a positive denominator is strictly negative.\nSince \\( f'(x) < 0 \\) for all \\( x \\neq 4 \\), the function is always decreasing."
          }
        ],
        "opts": [
          "Because \\( f'(x) = -\\frac{3}{(x-4)^2} < 0 \\) for all \\( x \\neq 4 \\).",
          "Because \\( f'(x) = -\\frac{12}{x-4} < 0 \\) for all \\( x \\neq 4 \\).",
          "Because \\( f'(x) = \\frac{12}{(x-4)^2} > 0 \\) for all \\( x \\neq 4 \\).",
          "Because \\( f'(x) = -\\frac{12}{(x-4)^2} < 0 \\) for all \\( x \\neq 4 \\)."
        ],
        "options": [
          {
            "text": "Because \\( f'(x) = -\\frac{3}{(x-4)^2} < 0 \\) for all \\( x \\neq 4 \\).",
            "imageUrl": ""
          },
          {
            "text": "Because \\( f'(x) = -\\frac{12}{x-4} < 0 \\) for all \\( x \\neq 4 \\).",
            "imageUrl": ""
          },
          {
            "text": "Because \\( f'(x) = \\frac{12}{(x-4)^2} > 0 \\) for all \\( x \\neq 4 \\).",
            "imageUrl": ""
          },
          {
            "text": "Because \\( f'(x) = -\\frac{12}{(x-4)^2} < 0 \\) for all \\( x \\neq 4 \\).",
            "imageUrl": ""
          }
        ],
        "answerStr": "3",
        "answer": "3"
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
        "type": "multiple_choice",
        "question": "a) Find the derivative \\( f'(x) \\).",
        "solutionSteps": [
          {
            "explanation": "Identify components for the quotient rule.",
            "workingOut": "\\[ f(x) = \\frac{x^3}{x^2+3} \\]\nLet \\( u = x^3 \\) and \\( v = x^2+3 \\).\nThen \\( u' = 3x^2 \\) and \\( v' = 2x \\)."
          },
          {
            "explanation": "Apply the quotient rule.",
            "workingOut": "\\[ f'(x) = \\frac{u'v - uv'}{v^2} \\]\n\\[ f'(x) = \\frac{(3x^2)(x^2+3) - (x^3)(2x)}{(x^2+3)^2} \\]"
          },
          {
            "explanation": "Simplify the numerator.",
            "workingOut": "\\[ f'(x) = \\frac{3x^4 + 9x^2 - 2x^4}{(x^2+3)^2} \\]\n\\[ f'(x) = \\frac{x^4 + 9x^2}{(x^2+3)^2} = \\frac{x^2(x^2+9)}{(x^2+3)^2} \\]"
          }
        ],
        "opts": [
          "\\( \\frac{x^2(x^2-9)}{(x^2+3)^2} \\)",
          "\\( \\frac{5x^4+9x^2}{(x^2+3)^2} \\)",
          "\\( \\frac{x^4-9x^2}{(x^2+3)^2} \\)",
          "\\( \\frac{x^2(x^2+9)}{(x^2+3)^2} \\)"
        ],
        "options": [
          {
            "text": "\\( \\frac{x^2(x^2-9)}{(x^2+3)^2} \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( \\frac{5x^4+9x^2}{(x^2+3)^2} \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( \\frac{x^4-9x^2}{(x^2+3)^2} \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( \\frac{x^2(x^2+9)}{(x^2+3)^2} \\)",
            "imageUrl": ""
          }
        ],
        "answerStr": "3",
        "answer": "3"
      },
      {
        "id": "y12a-3a-q19b",
        "type": "multiple_choice",
        "question": "b) Explain why \\( f(x) \\) is increasing for all \\( x \\), apart from \\( x = 0 \\) where it is stationary.",
        "solutionSteps": [
          {
            "explanation": "Analyze the sign of the factored derivative.",
            "workingOut": "We have \\( f'(x) = \\frac{x^2(x^2+9)}{(x^2+3)^2} \\).\nNotice that \\( x^2+9 > 0 \\) and \\( (x^2+3)^2 > 0 \\) for all real \\( x \\)."
          },
          {
            "explanation": "Examine the remaining term \\( x^2 \\).",
            "workingOut": "The term \\( x^2 \\) is strictly positive for all \\( x \\neq 0 \\), and equals 0 at \\( x = 0 \\).\nThus, \\( f'(x) > 0 \\) (increasing) for all \\( x \\neq 0 \\).\nAt \\( x = 0 \\), \\( f'(0) = 0 \\) (stationary)."
          }
        ],
        "opts": [
          "Because the denominator \\( (x^2+3)^2 \\) is always positive, and the numerator can be negative.",
          "Because \\( f'(x) = \\frac{x^2(x^2-9)}{(x^2+3)^2} \\), which is positive for all \\( x \\neq 0 \\).",
          "Because \\( f'(x) \\) is a polynomial of degree 4, which always increases.",
          "Because \\( f'(x) = \\frac{x^2(x^2+9)}{(x^2+3)^2} \\). Since \\( x^2 > 0 \\) for \\( x \\neq 0 \\), and the other factors are strictly positive, \\( f'(x) > 0 \\)."
        ],
        "options": [
          {
            "text": "Because the denominator \\( (x^2+3)^2 \\) is always positive, and the numerator can be negative.",
            "imageUrl": ""
          },
          {
            "text": "Because \\( f'(x) = \\frac{x^2(x^2-9)}{(x^2+3)^2} \\), which is positive for all \\( x \\neq 0 \\).",
            "imageUrl": ""
          },
          {
            "text": "Because \\( f'(x) \\) is a polynomial of degree 4, which always increases.",
            "imageUrl": ""
          },
          {
            "text": "Because \\( f'(x) = \\frac{x^2(x^2+9)}{(x^2+3)^2} \\). Since \\( x^2 > 0 \\) for \\( x \\neq 0 \\), and the other factors are strictly positive, \\( f'(x) > 0 \\).",
            "imageUrl": ""
          }
        ],
        "answerStr": "3",
        "answer": "3"
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
        "type": "multiple_choice",
        "question": "a) Find the derivative \\( f'(x) \\).",
        "solutionSteps": [
          {
            "explanation": "Identify the function.",
            "workingOut": "\\[ f(x) = \\frac{1}{3}x^3 + x^2 + 2x + 5 \\]"
          },
          {
            "explanation": "Differentiate term by term.",
            "workingOut": "\\[ f'(x) = \\frac{1}{3}(3x^2) + 2x + 2 \\]\n\\[ f'(x) = x^2 + 2x + 2 \\]"
          }
        ],
        "opts": [
          "\\( \\frac{1}{3}x^2+2x+2 \\)",
          "\\( x^2+2x+5 \\)",
          "\\( x^2+x+2 \\)",
          "\\( x^2+2x+2 \\)"
        ],
        "options": [
          {
            "text": "\\( \\frac{1}{3}x^2+2x+2 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( x^2+2x+5 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( x^2+x+2 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( x^2+2x+2 \\)",
            "imageUrl": ""
          }
        ],
        "answerStr": "3",
        "answer": "3"
      },
      {
        "id": "y12a-3a-q20b",
        "type": "multiple_choice",
        "question": "b) Explain why \\( f(x) \\) is increasing for all \\( x \\).",
        "solutionSteps": [
          {
            "explanation": "Complete the square for the derivative.",
            "workingOut": "We have \\( f'(x) = x^2 + 2x + 2 \\).\nTake half of the x-coefficient (2), halve it (1), and square it (1).\n\\[ f'(x) = (x^2 + 2x + 1) - 1 + 2 \\]\n\\[ f'(x) = (x+1)^2 + 1 \\]"
          },
          {
            "explanation": "Analyze the sign of the completed square.",
            "workingOut": "Since \\( (x+1)^2 \\geq 0 \\) for all real \\( x \\),\n\\[ (x+1)^2 + 1 \\geq 1 > 0 \\]\nBecause \\( f'(x) > 0 \\) for all \\( x \\), the function is strictly increasing everywhere."
          }
        ],
        "opts": [
          "Because \\( f'(x) = (x+1)^2 + 1 \\), which can be negative for some values of \\( x \\).",
          "Because \\( f'(x) = (x+1)^2 - 1 \\), which is always positive.",
          "Because \\( f'(x) = (x+1)^2 + 1 \\), which is always strictly greater than 0.",
          "Because the original function is a cubic, and all cubics are strictly increasing."
        ],
        "options": [
          {
            "text": "Because \\( f'(x) = (x+1)^2 + 1 \\), which can be negative for some values of \\( x \\).",
            "imageUrl": ""
          },
          {
            "text": "Because \\( f'(x) = (x+1)^2 - 1 \\), which is always positive.",
            "imageUrl": ""
          },
          {
            "text": "Because \\( f'(x) = (x+1)^2 + 1 \\), which is always strictly greater than 0.",
            "imageUrl": ""
          },
          {
            "text": "Because the original function is a cubic, and all cubics are strictly increasing.",
            "imageUrl": ""
          }
        ],
        "answerStr": "2",
        "answer": "2"
      },
      {
        "id": "y12a-3a-q20c",
        "type": "multiple_choice",
        "question": "c) Evaluate \\( f(-3) \\) and \\( f(0) \\), and hence deduce the number of x-intercepts for the curve \\( y = f(x) \\).",
        "solutionSteps": [
          {
            "explanation": "Evaluate the function at the given points.",
            "workingOut": "\\[ f(-3) = \\frac{1}{3}(-27) + 9 - 6 + 5 = -9 + 9 - 6 + 5 = -1 \\]\n\\[ f(0) = 5 \\]"
          },
          {
            "explanation": "Deduce the number of x-intercepts.",
            "workingOut": "Since \\( f(-3) < 0 \\) and \\( f(0) > 0 \\), the curve crosses the x-axis at least once.\nFurthermore, because the function is strictly increasing from \\( -\\infty \\) to \\( \\infty \\), it cannot cross back down.\nTherefore, there is exactly one x-intercept."
          }
        ],
        "opts": [
          "\\( f(-3) = -1 \\) and \\( f(0) = 5 \\). Since it is a cubic, it must have exactly 3 x-intercepts.",
          "\\( f(-3) = 1 \\) and \\( f(0) = 5 \\). Since both are positive, it has no x-intercepts.",
          "\\( f(-3) = -1 \\) and \\( f(0) = 5 \\). Since it changes sign and is strictly increasing, it has exactly 1 x-intercept.",
          "\\( f(-3) = -5 \\) and \\( f(0) = 1 \\). Since it changes sign, it has exactly 2 x-intercepts."
        ],
        "options": [
          {
            "text": "\\( f(-3) = -1 \\) and \\( f(0) = 5 \\). Since it is a cubic, it must have exactly 3 x-intercepts.",
            "imageUrl": ""
          },
          {
            "text": "\\( f(-3) = 1 \\) and \\( f(0) = 5 \\). Since both are positive, it has no x-intercepts.",
            "imageUrl": ""
          },
          {
            "text": "\\( f(-3) = -1 \\) and \\( f(0) = 5 \\). Since it changes sign and is strictly increasing, it has exactly 1 x-intercept.",
            "imageUrl": ""
          },
          {
            "text": "\\( f(-3) = -5 \\) and \\( f(0) = 1 \\). Since it changes sign, it has exactly 2 x-intercepts.",
            "imageUrl": ""
          }
        ],
        "answerStr": "2",
        "answer": "2"
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
        "explanation": "Identify the mathematical function for the graph.",
        "workingOut": "The graph represents a constant horizontal line at \\( y = 2 \\).\n\\[ f(x) = 2 \\]"
      },
      {
        "explanation": "Calculate the derivative.",
        "workingOut": "Differentiating a constant yields zero.\n\\[ f'(x) = 0 \\]"
      },
      {
        "explanation": "Sketch the derivative.",
        "workingOut": "The derivative is \\( 0 \\) for all \\( x \\), which means the derivative graph is a horizontal line lying exactly on the x-axis."
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
        "script": "board.suspendUpdate();\nboard.create('functiongraph', [function(x){ return 2; }], {strokeColor: 'blue', strokeWidth: 2});\nboard.unsuspendUpdate();"
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
        "explanation": "Identify the mathematical function for the graph.",
        "workingOut": "The graph represents a straight line passing through the origin with a slope of 1.\n\\[ f(x) = x \\]"
      },
      {
        "explanation": "Calculate the derivative.",
        "workingOut": "Differentiating \\( x \\) yields a constant positive value.\n\\[ f'(x) = 1 \\]"
      },
      {
        "explanation": "Sketch the derivative.",
        "workingOut": "The derivative is \\( 1 \\) for all \\( x \\). The derivative graph is a constant horizontal line at \\( y = 1 \\)."
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
        "script": "board.suspendUpdate();\nboard.create('functiongraph', [function(x){ return x; }], {strokeColor: 'blue', strokeWidth: 2});\nboard.unsuspendUpdate();"
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
        "explanation": "Identify the mathematical function for the graph.",
        "workingOut": "The graph represents a straight line passing through the origin with a slope of -1.\n\\[ f(x) = -x \\]"
      },
      {
        "explanation": "Calculate the derivative.",
        "workingOut": "Differentiating \\( -x \\) yields a constant negative value.\n\\[ f'(x) = -1 \\]"
      },
      {
        "explanation": "Sketch the derivative.",
        "workingOut": "The derivative is \\( -1 \\) for all \\( x \\). The derivative graph is a constant horizontal line at \\( y = -1 \\)."
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
        "script": "board.suspendUpdate();\nboard.create('functiongraph', [function(x){ return -x; }], {strokeColor: 'blue', strokeWidth: 2});\nboard.unsuspendUpdate();"
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
        "explanation": "Identify the mathematical function for the graph.",
        "workingOut": "The graph is a parabola opening upwards. For example, it can be modeled as:\n\\[ f(x) = \\frac{1}{2}x^2 - 1 \\]"
      },
      {
        "explanation": "Calculate the derivative.",
        "workingOut": "Apply the power rule to find the derivative.\n\\[ f'(x) = 2 \\cdot \\frac{1}{2}x = x \\]"
      },
      {
        "explanation": "Sketch the derivative.",
        "workingOut": "The derivative \\( f'(x) = x \\) is a straight line passing through the origin with a positive slope. This matches the fact that the original parabola has a minimum at \\( x = 0 \\)."
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
        "script": "board.suspendUpdate();\nboard.create('functiongraph', [function(x){return 0.5*x*x - 1;}, -3.5, 3.5], {strokeColor: 'blue', strokeWidth: 2});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y12a-3a-q21e",
    "type": "teacher_review",
    "question": "Look carefully at the function graphed below. Establish where it is increasing, decreasing and stationary, and hence sketch the graph of its derivative.",
    "a": "The function is cubic: it increases for all \\( x \neq 0 \\), and has a horizontal point of inflection (stationary point) at \\( x = 0 \\). The derivative graph is a parabola opening upwards with its vertex tangent to the x-axis at the origin (always positive except zero at \\( x = 0 \\)).",
    "difficulty": "hard",
    "timeLimit": 240,
    "t": "Increasing, decreasing and stationary at a point",
    "solutionSteps": [
      {
        "explanation": "Identify the mathematical function for the graph.",
        "workingOut": "The graph is a cubic curve with a horizontal point of inflection at the origin. It can be modeled as:\n\\[ f(x) = 0.15x^3 \\]"
      },
      {
        "explanation": "Calculate the derivative.",
        "workingOut": "Apply the power rule to differentiate the cubic function.\n\\[ f'(x) = 3 \\cdot 0.15x^2 = 0.45x^2 \\]"
      },
      {
        "explanation": "Sketch the derivative.",
        "workingOut": "The derivative \\( f'(x) = 0.45x^2 \\) is a parabola opening upwards with its vertex at the origin.\nIt is always \\( \\geq 0 \\), which confirms the original function is always increasing or stationary."
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
        "script": "board.suspendUpdate();\nboard.create('functiongraph', [function(x){return 0.15*x*x*x;}, -3.5, 3.5], {strokeColor: 'blue', strokeWidth: 2});\nboard.unsuspendUpdate();"
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
        "explanation": "Identify the mathematical function for the graph.",
        "workingOut": "The graph is a cubic with two turning points and roots at \\( x = 0, \\pm 2.2 \\). It is modeled as:\n\\[ f(x) = \\frac{1}{6}x(x^2 - 4.84) = \\frac{1}{6}x^3 - 0.807x \\]"
      },
      {
        "explanation": "Calculate the derivative.",
        "workingOut": "Apply the power rule to find the derivative.\n\\[ f'(x) = \\frac{1}{2}x^2 - 0.807 \\]"
      },
      {
        "explanation": "Sketch the derivative.",
        "workingOut": "The derivative is an upward-opening parabola \\( f'(x) = \\frac{1}{2}x^2 - 0.807 \\).\nIts roots (where \\( f'(x) = 0 \\)) perfectly align with the local maximum and minimum of the original cubic curve."
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
        "script": "board.suspendUpdate();\nboard.create('functiongraph', [function(x){return (x+2.2)*(x)*(x-2.2)/6;}, -3.5, 3.5], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [-1.27, 0], {name: 'a', size: 1, color: 'black', label: {autoPosition: false, offset: [0, -15]}});\nboard.create('point', [1.27, 0], {name: 'b', size: 1, color: 'black', label: {autoPosition: false, offset: [0, 15]}});\nboard.create('segment', [[-1.27, 0], [-1.27, 0.68]], {dash: 2, strokeColor: 'gray'});\nboard.create('segment', [[1.27, 0], [1.27, -0.68]], {dash: 2, strokeColor: 'gray'});\nboard.unsuspendUpdate();"
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
        "explanation": "Identify the mathematical function for the graph.",
        "workingOut": "The graph is a 'W' shaped quartic function with minima at \\( \\pm 2 \\) and a maximum at \\( 0 \\). It is modeled as:\n\\[ f(x) = 0.15(x^2 - 4)^2 - 1 \\]"
      },
      {
        "explanation": "Calculate the derivative.",
        "workingOut": "Use the chain rule to differentiate the function.\n\\[ f'(x) = 2 \\cdot 0.15(x^2 - 4) \\cdot (2x) \\]\n\\[ f'(x) = 0.6x(x^2 - 4) = 0.6x(x-2)(x+2) \\]"
      },
      {
        "explanation": "Sketch the derivative.",
        "workingOut": "The derivative is a positive cubic \\( f'(x) = 0.6x(x-2)(x+2) \\).\nIt crosses the x-axis at \\( x = -2, 0, 2 \\), matching the three stationary points of the original quartic curve."
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
        "script": "board.suspendUpdate();\nboard.create('functiongraph', [function(x){return 0.15*(x+2)*(x+2)*(x-2)*(x-2) - 1;}, -3.5, 3.5], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [-2, 0], {name: 'a', size: 1, color: 'black', label: {autoPosition: false, offset: [0, 15]}});\nboard.create('point', [0, 0], {name: 'b', size: 1, color: 'black', label: {autoPosition: false, offset: [10, 15]}});\nboard.create('point', [2, 0], {name: 'c', size: 1, color: 'black', label: {autoPosition: false, offset: [0, 15]}});\nboard.create('segment', [[-2, 0], [-2, -1]], {dash: 2, strokeColor: 'gray'});\nboard.create('segment', [[2, 0], [2, -1]], {dash: 2, strokeColor: 'gray'});\nboard.create('segment', [[0, 0], [0, 1.4]], {dash: 2, strokeColor: 'gray'});\nboard.unsuspendUpdate();"
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
        "explanation": "Identify the mathematical function for the graph.",
        "workingOut": "The graph represents the two branches of a standard hyperbola:\n\\[ f(x) = \\frac{1}{x} = x^{-1} \\]"
      },
      {
        "explanation": "Calculate the derivative.",
        "workingOut": "Apply the power rule for negative indices.\n\\[ f'(x) = -1 \\cdot x^{-2} = -\\frac{1}{x^2} \\]"
      },
      {
        "explanation": "Sketch the derivative.",
        "workingOut": "The derivative is \\( f'(x) = -\\frac{1}{x^2} \\).\nSince \\( x^2 > 0 \\) for all \\( x \\neq 0 \\), \\( f'(x) < 0 \\) everywhere. The derivative graph is always below the x-axis, mirroring the fact that the hyperbola is always decreasing."
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
        "script": "board.suspendUpdate();\nboard.create('functiongraph', [function(x){return 1/x;}, -3.5, -0.15], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('functiongraph', [function(x){return 1/x;}, 0.15, 3.5], {strokeColor: 'blue', strokeWidth: 2});\nboard.unsuspendUpdate();"
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
        "type": "multiple_choice",
        "question": "a) Find the derivative \\( f'(x) \\).",
        "solutionSteps": [
          {
            "explanation": "Differentiate the function.",
            "workingOut": "\\[ f(x) = 4 - 7x + 3x^2 - x^3 \\]\n\\[ f'(x) = -7 + 6x - 3x^2 \\]\n\\[ f'(x) = -3x^2 + 6x - 7 \\]"
          }
        ],
        "opts": [
          "\\( 3x^2+6x+7 \\)",
          "\\( -3x^2+6x-7 \\)",
          "\\( -3x^2+6x+7 \\)",
          "\\( -3x^2-6x-7 \\)"
        ],
        "options": [
          {
            "text": "\\( 3x^2+6x+7 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( -3x^2+6x-7 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( -3x^2+6x+7 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( -3x^2-6x-7 \\)",
            "imageUrl": ""
          }
        ],
        "answerStr": "1",
        "answer": "1"
      },
      {
        "id": "y12a-3a-q22b",
        "type": "multiple_choice",
        "question": "b) By evaluating the discriminant \\( \\Delta \\), explain why \\( f'(x) < 0 \\) for all values of \\( x \\).",
        "solutionSteps": [
          {
            "explanation": "Calculate the discriminant of the derivative.",
            "workingOut": "The derivative is a quadratic \\( -3x^2 + 6x - 7 \\).\n\\[ \\Delta = b^2 - 4ac \\]\n\\[ \\Delta = (6)^2 - 4(-3)(-7) \\]\n\\[ \\Delta = 36 - 84 = -48 \\]"
          },
          {
            "explanation": "Analyze the result.",
            "workingOut": "Since \\( \\Delta < 0 \\), the quadratic has no real roots and does not cross the x-axis.\nBecause the leading coefficient is negative (-3), the parabola opens downwards and is always below the x-axis.\nTherefore, \\( f'(x) < 0 \\) for all \\( x \\)."
          }
        ],
        "opts": [
          "Because \\( \\Delta = -48 < 0 \\), the parabola \\( f'(x) \\) has no real roots. Since \\( a = -3 < 0 \\), it is entirely below the x-axis.",
          "Because \\( \\Delta = 48 > 0 \\), the parabola \\( f'(x) \\) has two roots, but both are negative.",
          "Because \\( \\Delta = -48 < 0 \\), the parabola \\( f'(x) \\) has no real roots. Since \\( a = -3 < 0 \\), it is entirely above the x-axis.",
          "Because \\( \\Delta = -48 < 0 \\), the parabola \\( f'(x) \\) has no real roots. Since it is a cubic, it must be negative."
        ],
        "options": [
          {
            "text": "Because \\( \\Delta = -48 < 0 \\), the parabola \\( f'(x) \\) has no real roots. Since \\( a = -3 < 0 \\), it is entirely below the x-axis.",
            "imageUrl": ""
          },
          {
            "text": "Because \\( \\Delta = 48 > 0 \\), the parabola \\( f'(x) \\) has two roots, but both are negative.",
            "imageUrl": ""
          },
          {
            "text": "Because \\( \\Delta = -48 < 0 \\), the parabola \\( f'(x) \\) has no real roots. Since \\( a = -3 < 0 \\), it is entirely above the x-axis.",
            "imageUrl": ""
          },
          {
            "text": "Because \\( \\Delta = -48 < 0 \\), the parabola \\( f'(x) \\) has no real roots. Since it is a cubic, it must be negative.",
            "imageUrl": ""
          }
        ],
        "answerStr": "0",
        "answer": "0"
      },
      {
        "id": "y12a-3a-q22c",
        "type": "multiple_choice",
        "question": "c) Hence deduce the number of solutions to the equation \\( -x^3 + 3x^2 - 7x + 4 = 0 \\).",
        "solutionSteps": [
          {
            "explanation": "Use the derivative to deduce properties of the original function.",
            "workingOut": "Since \\( f'(x) < 0 \\) for all \\( x \\), the function \\( f(x) \\) is strictly decreasing for all real numbers."
          },
          {
            "explanation": "Determine the number of solutions.",
            "workingOut": "A continuous, strictly decreasing cubic function will cross the x-axis exactly once.\nThus, the equation \\( 4 - 7x + 3x^2 - x^3 = 0 \\) has exactly 1 solution."
          }
        ],
        "opts": [
          "Exactly 1, because the function is strictly decreasing for all real numbers.",
          "0, because the discriminant of the derivative is negative.",
          "Exactly 2, because the derivative is a quadratic equation.",
          "Exactly 3, because the equation is a cubic equation."
        ],
        "options": [
          {
            "text": "Exactly 1, because the function is strictly decreasing for all real numbers.",
            "imageUrl": ""
          },
          {
            "text": "0, because the discriminant of the derivative is negative.",
            "imageUrl": ""
          },
          {
            "text": "Exactly 2, because the derivative is a quadratic equation.",
            "imageUrl": ""
          },
          {
            "text": "Exactly 3, because the equation is a cubic equation.",
            "imageUrl": ""
          }
        ],
        "answerStr": "0",
        "answer": "0"
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
        "explanation": "Identify the x-intercepts.",
        "workingOut": "The condition \\( f(1) = f(-3) = 0 \\) means the curve passes through the x-axis at \\( x = 1 \\) and \\( x = -3 \\).\nThese are our x-intercepts."
      },
      {
        "explanation": "Identify the turning point and its nature.",
        "workingOut": "The condition \\( f'(-1) = 0 \\) indicates a stationary point at \\( x = -1 \\).\nSince \\( f'(x) > 0 \\) for \\( x < -1 \\) (increasing) and \\( f'(x) < 0 \\) for \\( x > -1 \\) (decreasing), the point at \\( x = -1 \\) must be a local maximum."
      },
      {
        "explanation": "Construct a possible mathematical model.",
        "workingOut": "A downward-opening parabola with roots at 1 and -3 fits perfectly:\n\\[ f(x) = -(x-1)(x+3) = -x^2 - 2x + 3 \\]\nChecking the derivative: \\( f'(x) = -2x - 2 \\), which equals 0 at \\( x = -1 \\). This confirms our model.",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -5,
              5,
              5,
              -5
            ],
            "showGrid": true,
            "showAxisLabels": true,
            "script": "board.suspendUpdate();\nboard.create('functiongraph', [function(x){ return -x*x - 2*x + 3; }], {strokeColor: 'blue', strokeWidth: 2});\nboard.unsuspendUpdate();"
          }
        }
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
        "workingOut": "The condition \\( f(2) = 0 \\) means the curve passes through \\( (2,0) \\).\nThe condition \\( f'(2) = 0 \\) means the curve is stationary at this point."
      },
      {
        "explanation": "Analyze the increasing nature of the curve.",
        "workingOut": "We are given \\( f'(x) > 0 \\) for all \\( x \\neq 2 \\).\nThis means the curve is strictly increasing everywhere except at \\( x = 2 \\), where it momentarily flattens out. This describes a horizontal point of inflection."
      },
      {
        "explanation": "Construct a possible mathematical model.",
        "workingOut": "A basic cubic curve shifted to the right fits this description:\n\\[ f(x) = (x-2)^3 \\]\nChecking the derivative: \\( f'(x) = 3(x-2)^2 \\), which is always positive except at \\( x=2 \\) where it is zero.",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -2,
              5,
              6,
              -5
            ],
            "showGrid": true,
            "showAxisLabels": true,
            "script": "board.suspendUpdate();\nboard.create('functiongraph', [function(x){ return Math.pow(x-2, 3); }], {strokeColor: 'blue', strokeWidth: 2});\nboard.unsuspendUpdate();"
          }
        }
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
        "explanation": "Use symmetry to map the given points.",
        "workingOut": "Since \\( f(x) \\) is an odd function, it has rotational symmetry about the origin, meaning \\( f(x) = -f(-x) \\) and it passes through \\( (0,0) \\).\nGiven \\( f(3) = 0 \\), it must also pass through \\( (-3,0) \\).\nGiven \\( f'(1) = 0 \\), it must also have a stationary point at \\( x = -1 \\)."
      },
      {
        "explanation": "Determine the shape using intervals of increase/decrease.",
        "workingOut": "We are given \\( f'(x) < 0 \\) for \\( 0 \\leq x < 1 \\) (decreasing) and \\( f'(x) > 0 \\) for \\( x > 1 \\) (increasing).\nThis makes \\( x = 1 \\) a local minimum. By odd symmetry, \\( x = -1 \\) must be a local maximum."
      },
      {
        "explanation": "Sketch the curve.",
        "workingOut": "The curve starts low, rises to a peak at \\( x = -1 \\), passes through the origin \\( (0,0) \\), dips to a valley at \\( x = 1 \\), and then rises to cross the x-axis at \\( x = 3 \\).",
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
            "showGrid": true,
            "showAxisLabels": true,
            "script": "board.suspendUpdate();\nboard.create('spline', [[-4, -3, -1, 0, 1, 3, 4], [-4, 0, 2, 0, -2, 0, 4]], {strokeColor: 'blue', strokeWidth: 2});\nboard.unsuspendUpdate();"
          }
        }
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
        "explanation": "Determine the vertical position of the curve.",
        "workingOut": "The condition \\( f(x) > 0 \\) for all \\( x \\) means the entire curve must lie strictly above the x-axis. It never crosses or touches it."
      },
      {
        "explanation": "Find the turning point and general shape.",
        "workingOut": "The condition \\( f'(0) = 0 \\) indicates a stationary point on the y-axis.\nSince \\( f'(x) < 0 \\) for \\( x < 0 \\) (decreasing) and \\( f'(x) > 0 \\) for \\( x > 0 \\) (increasing), this stationary point is a local minimum."
      },
      {
        "explanation": "Construct a possible mathematical model.",
        "workingOut": "An upward-opening parabola shifted vertically upwards satisfies all conditions perfectly:\n\\[ f(x) = x^2 + 1 \\]\nChecking the derivative: \\( f'(x) = 2x \\), which is negative for \\( x < 0 \\) and positive for \\( x > 0 \\).",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -4,
              6,
              4,
              -2
            ],
            "showGrid": true,
            "showAxisLabels": true,
            "script": "board.suspendUpdate();\nboard.create('functiongraph', [function(x){ return x*x + 1; }], {strokeColor: 'blue', strokeWidth: 2});\nboard.unsuspendUpdate();"
          }
        }
      }
    ]
  }
];
