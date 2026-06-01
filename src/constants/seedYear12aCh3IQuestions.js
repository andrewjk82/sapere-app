export const Y12A_CH3I_QUESTIONS = [
  {
    "id": "y12a-3i-q1a",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "In the diagram, name all labeled points where the first derivative is positive, \\( f'(x) > 0 \\).",
    "a": "C, H",
    "t": "Chapter review exercise",
    "hint": "The first derivative f'(x) is positive where the curve is rising (increasing).",
    "solutionSteps": [
      {
        "explanation": "Identify the segments where the curve is rising",
        "workingOut": "\\text{The curve is increasing between turning points } B \\text{ and } D \\text{, and to the right of turning point } G."
      },
      {
        "explanation": "Select the points located on these rising segments",
        "workingOut": "\\text{Point } C \\text{ lies between } B \\text{ and } D \\text{. Point } H \\text{ lies to the right of } G. \\text{ Thus, } f'(x) > 0 \\text{ at } C \\text{ and } H."
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-4.0, 8.0, 5.0, -6.0],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-3.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-5.5], [0,7.5]], {strokeColor: 'black', strokeWidth: 1});\nvar f = function(x) { return 0.2*Math.pow(x,4) - 0.4*Math.pow(x,3) - 2.4*x*x + 2.4*x + 4; };\nboard.create('functiongraph', [f, -3.2, 4.2], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [-2.5, f(-2.5)], {name: 'A', size: 3, color: 'red', label: {offset: [-15, -15]}});\nboard.create('point', [-1.82, f(-1.82)], {name: 'B', size: 3, color: 'red', label: {offset: [-5, -15]}});\nboard.create('point', [-1.0, f(-1.0)], {name: 'C', size: 3, color: 'red', label: {offset: [-15, 10]}});\nboard.create('point', [0.46, f(0.46)], {name: 'D', size: 3, color: 'red', label: {offset: [-5, 12]}});\nboard.create('point', [1.2, f(1.2)], {name: 'E', size: 3, color: 'red', label: {offset: [-15, -15]}});\nboard.create('point', [2.0, f(2.0)], {name: 'F', size: 3, color: 'red', label: {offset: [10, -10]}});\nboard.create('point', [2.86, f(2.86)], {name: 'G', size: 3, color: 'red', label: {offset: [-5, -15]}});\nboard.create('point', [3.5, f(3.5)], {name: 'H', size: 3, color: 'red', label: {offset: [10, 10]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y12a-3i-q1b",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "In the diagram, name all labeled points where the first derivative is negative, \\( f'(x) < 0 \\).",
    "a": "A, E, F",
    "t": "Chapter review exercise",
    "hint": "The first derivative f'(x) is negative where the curve is falling (decreasing).",
    "solutionSteps": [
      {
        "explanation": "Identify the segments where the curve is falling",
        "workingOut": "\\text{The curve is decreasing to the left of turning point } B \\text{, and between turning points } D \\text{ and } G."
      },
      {
        "explanation": "Select the points located on these falling segments",
        "workingOut": "\\text{Point } A \\text{ is to the left of } B. \\text{ Points } E \\text{ and } F \\text{ lie between } D \\text{ and } G. \\text{ Thus, } f'(x) < 0 \\text{ at } A, E, F."
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-4.0, 8.0, 5.0, -6.0],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-3.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-5.5], [0,7.5]], {strokeColor: 'black', strokeWidth: 1});\nvar f = function(x) { return 0.2*Math.pow(x,4) - 0.4*Math.pow(x,3) - 2.4*x*x + 2.4*x + 4; };\nboard.create('functiongraph', [f, -3.2, 4.2], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [-2.5, f(-2.5)], {name: 'A', size: 3, color: 'red', label: {offset: [-15, -15]}});\nboard.create('point', [-1.82, f(-1.82)], {name: 'B', size: 3, color: 'red', label: {offset: [-5, -15]}});\nboard.create('point', [-1.0, f(-1.0)], {name: 'C', size: 3, color: 'red', label: {offset: [-15, 10]}});\nboard.create('point', [0.46, f(0.46)], {name: 'D', size: 3, color: 'red', label: {offset: [-5, 12]}});\nboard.create('point', [1.2, f(1.2)], {name: 'E', size: 3, color: 'red', label: {offset: [-15, -15]}});\nboard.create('point', [2.0, f(2.0)], {name: 'F', size: 3, color: 'red', label: {offset: [10, -10]}});\nboard.create('point', [2.86, f(2.86)], {name: 'G', size: 3, color: 'red', label: {offset: [-5, -15]}});\nboard.create('point', [3.5, f(3.5)], {name: 'H', size: 3, color: 'red', label: {offset: [10, 10]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y12a-3i-q1c",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "In the diagram, name all labeled points where the first derivative is zero, \\( f'(x) = 0 \\).",
    "a": "B, D, G",
    "t": "Chapter review exercise",
    "hint": "The first derivative is zero at stationary points (turning points).",
    "solutionSteps": [
      {
        "explanation": "Identify the turning points of the curve",
        "workingOut": "\\text{The turning points of the curve are the local minima and maxima.}"
      },
      {
        "explanation": "Match points to local extrema",
        "workingOut": "\\text{Point } B \\text{ is a local minimum, } D \\text{ is a local maximum, and } G \\text{ is a local minimum. Thus, } f'(x) = 0 \\text{ at } B, D, G."
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-4.0, 8.0, 5.0, -6.0],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-3.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-5.5], [0,7.5]], {strokeColor: 'black', strokeWidth: 1});\nvar f = function(x) { return 0.2*Math.pow(x,4) - 0.4*Math.pow(x,3) - 2.4*x*x + 2.4*x + 4; };\nboard.create('functiongraph', [f, -3.2, 4.2], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [-2.5, f(-2.5)], {name: 'A', size: 3, color: 'red', label: {offset: [-15, -15]}});\nboard.create('point', [-1.82, f(-1.82)], {name: 'B', size: 3, color: 'red', label: {offset: [-5, -15]}});\nboard.create('point', [-1.0, f(-1.0)], {name: 'C', size: 3, color: 'red', label: {offset: [-15, 10]}});\nboard.create('point', [0.46, f(0.46)], {name: 'D', size: 3, color: 'red', label: {offset: [-5, 12]}});\nboard.create('point', [1.2, f(1.2)], {name: 'E', size: 3, color: 'red', label: {offset: [-15, -15]}});\nboard.create('point', [2.0, f(2.0)], {name: 'F', size: 3, color: 'red', label: {offset: [10, -10]}});\nboard.create('point', [2.86, f(2.86)], {name: 'G', size: 3, color: 'red', label: {offset: [-5, -15]}});\nboard.create('point', [3.5, f(3.5)], {name: 'H', size: 3, color: 'red', label: {offset: [10, 10]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y12a-3i-q1d",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "In the diagram, name all labeled points where the second derivative is positive, \\( f''(x) > 0 \\).",
    "a": "A, B, G, H",
    "t": "Chapter review exercise",
    "hint": "The second derivative is positive where the curve is concave up (holds water).",
    "solutionSteps": [
      {
        "explanation": "Identify the regions of concavity",
        "workingOut": "\\text{The curve is concave up for } x < -1 \\text{ and for } x > 2 \\text{, with inflection points at } x = -1, 2."
      },
      {
        "explanation": "Match points in the concave up regions",
        "workingOut": "\\text{Points } A \\text{ (at } x=-2.5\\text{) and } B \\text{ (at } x=-1.82\\text{) lie in } x < -1. \\text{ Points } G \\text{ (at } x=2.86\\text{) and } H \\text{ (at } x=3.5\\text{) lie in } x > 2. \\text{ Thus, } f''(x) > 0 \\text{ at } A, B, G, H."
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-4.0, 8.0, 5.0, -6.0],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-3.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-5.5], [0,7.5]], {strokeColor: 'black', strokeWidth: 1});\nvar f = function(x) { return 0.2*Math.pow(x,4) - 0.4*Math.pow(x,3) - 2.4*x*x + 2.4*x + 4; };\nboard.create('functiongraph', [f, -3.2, 4.2], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [-2.5, f(-2.5)], {name: 'A', size: 3, color: 'red', label: {offset: [-15, -15]}});\nboard.create('point', [-1.82, f(-1.82)], {name: 'B', size: 3, color: 'red', label: {offset: [-5, -15]}});\nboard.create('point', [-1.0, f(-1.0)], {name: 'C', size: 3, color: 'red', label: {offset: [-15, 10]}});\nboard.create('point', [0.46, f(0.46)], {name: 'D', size: 3, color: 'red', label: {offset: [-5, 12]}});\nboard.create('point', [1.2, f(1.2)], {name: 'E', size: 3, color: 'red', label: {offset: [-15, -15]}});\nboard.create('point', [2.0, f(2.0)], {name: 'F', size: 3, color: 'red', label: {offset: [10, -10]}});\nboard.create('point', [2.86, f(2.86)], {name: 'G', size: 3, color: 'red', label: {offset: [-5, -15]}});\nboard.create('point', [3.5, f(3.5)], {name: 'H', size: 3, color: 'red', label: {offset: [10, 10]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y12a-3i-q1e",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "In the diagram, name all labeled points where the second derivative is negative, \\( f''(x) < 0 \\).",
    "a": "D, E",
    "t": "Chapter review exercise",
    "hint": "The second derivative is negative where the curve is concave down (spills water).",
    "solutionSteps": [
      {
        "explanation": "Identify the regions of concavity",
        "workingOut": "\\text{The curve is concave down between the inflection points, which is } -1 < x < 2."
      },
      {
        "explanation": "Match points in this concave down region",
        "workingOut": "\\text{Points } D \\text{ (at } x=0.46\\text{) and } E \\text{ (at } x=1.2\\text{) lie inside the interval } (-1, 2). \\text{ Thus, } f''(x) < 0 \\text{ at } D, E."
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-4.0, 8.0, 5.0, -6.0],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-3.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-5.5], [0,7.5]], {strokeColor: 'black', strokeWidth: 1});\nvar f = function(x) { return 0.2*Math.pow(x,4) - 0.4*Math.pow(x,3) - 2.4*x*x + 2.4*x + 4; };\nboard.create('functiongraph', [f, -3.2, 4.2], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [-2.5, f(-2.5)], {name: 'A', size: 3, color: 'red', label: {offset: [-15, -15]}});\nboard.create('point', [-1.82, f(-1.82)], {name: 'B', size: 3, color: 'red', label: {offset: [-5, -15]}});\nboard.create('point', [-1.0, f(-1.0)], {name: 'C', size: 3, color: 'red', label: {offset: [-15, 10]}});\nboard.create('point', [0.46, f(0.46)], {name: 'D', size: 3, color: 'red', label: {offset: [-5, 12]}});\nboard.create('point', [1.2, f(1.2)], {name: 'E', size: 3, color: 'red', label: {offset: [-15, -15]}});\nboard.create('point', [2.0, f(2.0)], {name: 'F', size: 3, color: 'red', label: {offset: [10, -10]}});\nboard.create('point', [2.86, f(2.86)], {name: 'G', size: 3, color: 'red', label: {offset: [-5, -15]}});\nboard.create('point', [3.5, f(3.5)], {name: 'H', size: 3, color: 'red', label: {offset: [10, 10]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y12a-3i-q1f",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "In the diagram, name all labeled points where the second derivative is zero, \\( f''(x) = 0 \\).",
    "a": "C, F",
    "t": "Chapter review exercise",
    "hint": "The second derivative is zero at inflection points where concavity changes.",
    "solutionSteps": [
      {
        "explanation": "Identify the inflection points of the curve",
        "workingOut": "\\text{Inflection points occur where the concavity changes from concave up to down or vice versa.}"
      },
      {
        "explanation": "Match points to inflection coordinates",
        "workingOut": "\\text{At point } C \\text{ (at } x=-1\\text{), concavity changes from up to down. At point } F \\text{ (at } x=2\\text{), concavity changes from down to up. Thus, } f''(x) = 0 \\text{ at } C, F."
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-4.0, 8.0, 5.0, -6.0],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-3.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-5.5], [0,7.5]], {strokeColor: 'black', strokeWidth: 1});\nvar f = function(x) { return 0.2*Math.pow(x,4) - 0.4*Math.pow(x,3) - 2.4*x*x + 2.4*x + 4; };\nboard.create('functiongraph', [f, -3.2, 4.2], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [-2.5, f(-2.5)], {name: 'A', size: 3, color: 'red', label: {offset: [-15, -15]}});\nboard.create('point', [-1.82, f(-1.82)], {name: 'B', size: 3, color: 'red', label: {offset: [-5, -15]}});\nboard.create('point', [-1.0, f(-1.0)], {name: 'C', size: 3, color: 'red', label: {offset: [-15, 10]}});\nboard.create('point', [0.46, f(0.46)], {name: 'D', size: 3, color: 'red', label: {offset: [-5, 12]}});\nboard.create('point', [1.2, f(1.2)], {name: 'E', size: 3, color: 'red', label: {offset: [-15, -15]}});\nboard.create('point', [2.0, f(2.0)], {name: 'F', size: 3, color: 'red', label: {offset: [10, -10]}});\nboard.create('point', [2.86, f(2.86)], {name: 'G', size: 3, color: 'red', label: {offset: [-5, -15]}});\nboard.create('point', [3.5, f(3.5)], {name: 'H', size: 3, color: 'red', label: {offset: [10, 10]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y12a-3i-q2a",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the derivative \\( f'(x) \\) of the function:\n\\( f(x) = x^3 - 3x^2 - 9x + 5 \\)",
    "a": "3x^2 - 6x - 9",
    "t": "Chapter review exercise",
    "hint": "Differentiate term-by-term using the power rule.",
    "solutionSteps": [
      {
        "explanation": "Differentiate each term using the power rule",
        "workingOut": "f'(x) = \\frac{d}{dx}(x^3) - \\frac{d}{dx}(3x^2) - \\frac{d}{dx}(9x) + \\frac{d}{dx}(5)"
      },
      {
        "explanation": "Simplify the derivative expression",
        "workingOut": "f'(x) = 3x^2 - 6x - 9"
      }
    ]
  },
  {
    "id": "y12a-3i-q2bi",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "For the function \\( f(x) = x^3 - 3x^2 - 9x + 5 \\) with derivative \\( f'(x) = 3x^2 - 6x - 9 \\), determine whether the function is increasing, decreasing, or stationary at \\( x = 0 \\).",
    "a": "decreasing",
    "t": "Chapter review exercise",
    "hint": "Evaluate f'(0) and check its sign.",
    "solutionSteps": [
      {
        "explanation": "Evaluate the derivative at x = 0",
        "workingOut": "f'(0) = 3(0)^2 - 6(0) - 9 = -9"
      },
      {
        "explanation": "Determine the state based on the sign of the derivative",
        "workingOut": "\\text{Since } f'(0) = -9 < 0 \\text{, the function is decreasing at } x = 0."
      }
    ]
  },
  {
    "id": "y12a-3i-q2bii",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "For the function \\( f(x) = x^3 - 3x^2 - 9x + 5 \\) with derivative \\( f'(x) = 3x^2 - 6x - 9 \\), determine whether the function is increasing, decreasing, or stationary at \\( x = 4 \\).",
    "a": "increasing",
    "t": "Chapter review exercise",
    "hint": "Substitute x = 4 into f'(x) and check whether it is positive, negative, or zero.",
    "solutionSteps": [
      {
        "explanation": "Evaluate the derivative at x = 4",
        "workingOut": "f'(4) = 3(4)^2 - 6(4) - 9 = 48 - 24 - 9 = 15"
      },
      {
        "explanation": "Determine the state based on the sign of the derivative",
        "workingOut": "\\text{Since } f'(4) = 15 > 0 \\text{, the function is increasing at } x = 4."
      }
    ]
  },
  {
    "id": "y12a-3i-q2biii",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "For the function \\( f(x) = x^3 - 3x^2 - 9x + 5 \\) with derivative \\( f'(x) = 3x^2 - 6x - 9 \\), determine whether the function is increasing, decreasing, or stationary at \\( x = -1 \\).",
    "a": "stationary",
    "t": "Chapter review exercise",
    "hint": "Check the value of f'(-1).",
    "solutionSteps": [
      {
        "explanation": "Evaluate the derivative at x = -1",
        "workingOut": "f'(-1) = 3(-1)^2 - 6(-1) - 9 = 3 + 6 - 9 = 0"
      },
      {
        "explanation": "Determine the state based on the value of the derivative",
        "workingOut": "\\text{Since } f'(-1) = 0 \\text{, the function is stationary at } x = -1."
      }
    ]
  },
  {
    "id": "y12a-3i-q2biv",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "For the function \\( f(x) = x^3 - 3x^2 - 9x + 5 \\) with derivative \\( f'(x) = 3x^2 - 6x - 9 \\), determine whether the function is increasing, decreasing, or stationary at \\( x = 3 \\).",
    "a": "stationary",
    "t": "Chapter review exercise",
    "hint": "Find the value of f'(3).",
    "solutionSteps": [
      {
        "explanation": "Evaluate the derivative at x = 3",
        "workingOut": "f'(3) = 3(3)^2 - 6(3) - 9 = 27 - 18 - 9 = 0"
      },
      {
        "explanation": "Determine the state based on the value of the derivative",
        "workingOut": "\\text{Since } f'(3) = 0 \\text{, the function is stationary at } x = 3."
      }
    ]
  },
  {
    "id": "y12a-3i-q3a",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the derivative \\( f'(x) \\) of the function:\n\\( f(x) = x^2 - 6x + 8 \\)",
    "a": "2x - 6",
    "t": "Chapter review exercise",
    "hint": "Apply the power rule to each term.",
    "solutionSteps": [
      {
        "explanation": "Differentiate each term",
        "workingOut": "f'(x) = 2x - 6"
      }
    ]
  },
  {
    "id": "y12a-3i-q3bi",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the range of \\( x \\) for which the function \\( f(x) = x^2 - 6x + 8 \\) is increasing. (Write as an inequality, e.g. x > a)",
    "a": "x > 3",
    "t": "Chapter review exercise",
    "hint": "Set f'(x) > 0 and solve for x.",
    "solutionSteps": [
      {
        "explanation": "Find the derivative f'(x)",
        "workingOut": "f'(x) = 2x - 6"
      },
      {
        "explanation": "Set the derivative to be strictly positive",
        "workingOut": "2x - 6 > 0 \\implies 2x > 6"
      },
      {
        "explanation": "Solve the inequality",
        "workingOut": "x > 3"
      }
    ]
  },
  {
    "id": "y12a-3i-q3bii",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the range of \\( x \\) for which the function \\( f(x) = x^2 - 6x + 8 \\) is decreasing. (Write as an inequality, e.g. x < a)",
    "a": "x < 3",
    "t": "Chapter review exercise",
    "hint": "Set the derivative f'(x) < 0 and solve for x.",
    "solutionSteps": [
      {
        "explanation": "Set the derivative to be strictly negative",
        "workingOut": "2x - 6 < 0 \\implies 2x < 6"
      },
      {
        "explanation": "Solve the inequality",
        "workingOut": "x < 3"
      }
    ]
  },
  {
    "id": "y12a-3i-q3biii",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the value of \\( x \\) for which the function \\( f(x) = x^2 - 6x + 8 \\) is stationary.",
    "a": "3",
    "t": "Chapter review exercise",
    "hint": "Set f'(x) = 0 and solve for x.",
    "solutionSteps": [
      {
        "explanation": "Set the derivative to zero",
        "workingOut": "2x - 6 = 0"
      },
      {
        "explanation": "Solve for x",
        "workingOut": "2x = 6 \\implies x = 3"
      }
    ]
  },
  {
    "id": "y12a-3i-q4a",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Differentiate \\( f(x) = x^4 \\), then evaluate \\( f'(1) \\) to determine whether the function is increasing, decreasing, or stationary at \\( x = 1 \\).",
    "a": "increasing",
    "t": "Chapter review exercise",
    "hint": "Find f'(x), evaluate it at x = 1, and check if f'(1) is positive, negative, or zero.",
    "solutionSteps": [
      {
        "explanation": "Differentiate f(x)",
        "workingOut": "f'(x) = 4x^3"
      },
      {
        "explanation": "Evaluate f'(1)",
        "workingOut": "f'(1) = 4(1)^3 = 4"
      },
      {
        "explanation": "Determine the state",
        "workingOut": "\\text{Since } f'(1) = 4 > 0 \\text{, the function is increasing at } x = 1."
      }
    ]
  },
  {
    "id": "y12a-3i-q4b",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Differentiate \\( f(x) = (x-2)(x-4) \\), then evaluate \\( f'(1) \\) to determine whether the function is increasing, decreasing, or stationary at \\( x = 1 \\).",
    "a": "decreasing",
    "t": "Chapter review exercise",
    "hint": "Expand f(x) to quadratic form first, find f'(x), and then substitute x = 1.",
    "solutionSteps": [
      {
        "explanation": "Expand f(x)",
        "workingOut": "f(x) = x^2 - 6x + 8"
      },
      {
        "explanation": "Find f'(x)",
        "workingOut": "f'(x) = 2x - 6"
      },
      {
        "explanation": "Evaluate f'(1)",
        "workingOut": "f'(1) = 2(1) - 6 = -4"
      },
      {
        "explanation": "Determine the state",
        "workingOut": "\\text{Since } f'(1) = -4 < 0 \\text{, the function is decreasing at } x = 1."
      }
    ]
  },
  {
    "id": "y12a-3i-q4c",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Differentiate \\( f(x) = (x-1)^4 \\), then evaluate \\( f'(1) \\) to determine whether the function is increasing, decreasing, or stationary at \\( x = 1 \\).",
    "a": "stationary",
    "t": "Chapter review exercise",
    "hint": "Use chain rule to differentiate, then substitute x = 1.",
    "solutionSteps": [
      {
        "explanation": "Apply the chain rule to differentiate",
        "workingOut": "f'(x) = 4(x-1)^3"
      },
      {
        "explanation": "Evaluate f'(1)",
        "workingOut": "f'(1) = 4(1-1)^3 = 0"
      },
      {
        "explanation": "Determine the state",
        "workingOut": "\\text{Since } f'(1) = 0 \\text{, the function is stationary at } x = 1."
      }
    ]
  },
  {
    "id": "y12a-3i-q4d",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Differentiate \\( f(x) = \\frac{x+2}{x-2} \\), then evaluate \\( f'(1) \\) to determine whether the function is increasing, decreasing, or stationary at \\( x = 1 \\).",
    "a": "decreasing",
    "t": "Chapter review exercise",
    "hint": "Use the quotient rule: (u'v - uv') / v^2.",
    "solutionSteps": [
      {
        "explanation": "Apply the quotient rule to differentiate f(x)",
        "workingOut": "f'(x) = \\frac{1(x-2) - (x+2)(1)}{(x-2)^2} = \\frac{x - 2 - x - 2}{(x-2)^2} = -\\frac{4}{(x-2)^2}"
      },
      {
        "explanation": "Evaluate f'(1)",
        "workingOut": "f'(1) = -\\frac{4}{(1-2)^2} = -\\frac{4}{1} = -4"
      },
      {
        "explanation": "Determine the state",
        "workingOut": "\\text{Since } f'(1) = -4 < 0 \\text{, the function is decreasing at } x = 1."
      }
    ]
  },
  {
    "id": "y12a-3i-q5a",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the second derivative \\( y'' \\) of the function:\n\\( y = x^6 \\)",
    "a": "30x^4",
    "t": "Chapter review exercise",
    "hint": "Find the first derivative y' first, then differentiate again.",
    "solutionSteps": [
      {
        "explanation": "Find the first derivative y'",
        "workingOut": "y' = 6x^5"
      },
      {
        "explanation": "Differentiate y' to find the second derivative y''",
        "workingOut": "y'' = 30x^4"
      }
    ]
  },
  {
    "id": "y12a-3i-q5b",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the second derivative \\( y'' \\) of the function:\n\\( y = x^4 - 3x^2 \\)",
    "a": "12x^2 - 6",
    "t": "Chapter review exercise",
    "hint": "Differentiate twice using the power rule.",
    "solutionSteps": [
      {
        "explanation": "Find the first derivative y'",
        "workingOut": "y' = 4x^3 - 6x"
      },
      {
        "explanation": "Find the second derivative y''",
        "workingOut": "y'' = 12x^2 - 6"
      }
    ]
  },
  {
    "id": "y12a-3i-q5c",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the second derivative \\( y'' \\) of the function:\n\\( y = (x-3)^4 \\)",
    "a": "12(x-3)^2",
    "t": "Chapter review exercise",
    "hint": "Use chain rule twice.",
    "solutionSteps": [
      {
        "explanation": "Find the first derivative y'",
        "workingOut": "y' = 4(x-3)^3"
      },
      {
        "explanation": "Find the second derivative y''",
        "workingOut": "y'' = 12(x-3)^2"
      }
    ]
  },
  {
    "id": "y12a-3i-q5d",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the second derivative \\( y'' \\) of the function:\n\\( y = \\frac{2}{x} \\)",
    "a": "\\frac{4}{x^3}",
    "t": "Chapter review exercise",
    "hint": "Write y as 2x^(-1) before differentiating twice.",
    "solutionSteps": [
      {
        "explanation": "Rewrite function in index form and differentiate once",
        "workingOut": "y = 2x^{-1} \\implies y' = -2x^{-2} = -\\frac{2}{x^2}"
      },
      {
        "explanation": "Differentiate again to find y''",
        "workingOut": "y'' = -2(-2)x^{-3} = 4x^{-3} = \\frac{4}{x^3}"
      }
    ]
  },
  {
    "id": "y12a-3i-q6a",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "For the function \\( f(x) = x^3 - 2x^2 + 3x - 1 \\), find \\( f''(x) \\) and evaluate \\( f''(1) \\) to state whether the curve is concave up or concave down at \\( x = 1 \\).",
    "a": "concave up",
    "t": "Chapter review exercise",
    "hint": "Find the second derivative, substitute x = 1, and check if the result is positive or negative.",
    "solutionSteps": [
      {
        "explanation": "Find the first derivative f'(x)",
        "workingOut": "f'(x) = 3x^2 - 4x + 3"
      },
      {
        "explanation": "Find the second derivative f''(x)",
        "workingOut": "f''(x) = 6x - 4"
      },
      {
        "explanation": "Evaluate at x = 1",
        "workingOut": "f''(1) = 6(1) - 4 = 2"
      },
      {
        "explanation": "State concavity state",
        "workingOut": "\\text{Since } f''(1) = 2 > 0 \\text{, the curve is concave up at } x = 1."
      }
    ]
  },
  {
    "id": "y12a-3i-q6b",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "For the function \\( f(x) = 5 - 3x^3 - 2x^4 \\), find \\( f''(x) \\) and evaluate \\( f''(1) \\) to state whether the curve is concave up or concave down at \\( x = 1 \\).",
    "a": "concave down",
    "t": "Chapter review exercise",
    "hint": "Calculate the second derivative f''(x), plug in x = 1, and verify the concavity.",
    "solutionSteps": [
      {
        "explanation": "Find the first derivative f'(x)",
        "workingOut": "f'(x) = -9x^2 - 8x^3"
      },
      {
        "explanation": "Find the second derivative f''(x)",
        "workingOut": "f''(x) = -18x - 24x^2"
      },
      {
        "explanation": "Evaluate f''(1)",
        "workingOut": "f''(1) = -18(1) - 24(1)^2 = -42"
      },
      {
        "explanation": "State concavity state",
        "workingOut": "\\text{Since } f''(1) = -42 < 0 \\text{, the curve is concave down at } x = 1."
      }
    ]
  },
  {
    "id": "y12a-3i-q7",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "For the function \\( f(x) = 2x^3 - 9x^2 + 12x - 3 \\), complete parts a) and b).",
    "t": "Chapter review exercise",
    "solutionSteps": [],
    "subQuestions": [
      {
        "id": "y12a-3i-q7a",
        "type": "short_answer",
        "question": "a) Find the second derivative \\( f''(x) \\).",
        "a": "12x - 18",
        "solutionSteps": [
          {
            "explanation": "Find the first derivative f'(x)",
            "workingOut": "f'(x) = 6x^2 - 18x + 12"
          },
          {
            "explanation": "Differentiate f'(x) to get f''(x)",
            "workingOut": "f''(x) = 12x - 18"
          }
        ]
      },
      {
        "id": "y12a-3i-q7bi",
        "type": "short_answer",
        "question": "b) i) Find the values of \\( x \\) for which the function \\( f(x) \\) is concave up. (Write as an inequality, e.g. x > a)",
        "a": "x > 1.5",
        "solutionSteps": [
          {
            "explanation": "Set the second derivative positive",
            "workingOut": "f''(x) > 0 \\implies 12x - 18 > 0"
          },
          {
            "explanation": "Solve the inequality",
            "workingOut": "12x > 18 \\implies x > 1.5"
          }
        ]
      },
      {
        "id": "y12a-3i-q7bii",
        "type": "short_answer",
        "question": "b) ii) Find the values of \\( x \\) for which the function \\( f(x) \\) is concave down. (Write as an inequality, e.g. x < a)",
        "a": "x < 1.5",
        "solutionSteps": [
          {
            "explanation": "Set the second derivative negative",
            "workingOut": "f''(x) < 0 \\implies 12x - 18 < 0"
          },
          {
            "explanation": "Solve the inequality",
            "workingOut": "12x < 18 \\implies x < 1.5"
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-3i-q8a",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the values of \\( x \\) for which the curve \\( y = x^3 - 3x^2 - 24x + 10 \\) is increasing. (Format: x < a or x > b)",
    "a": "x < -2 or x > 4",
    "t": "Chapter review exercise",
    "hint": "Set y' > 0 and solve the quadratic inequality.",
    "solutionSteps": [
      {
        "explanation": "Find the derivative y'",
        "workingOut": "y' = 3x^2 - 6x - 24"
      },
      {
        "explanation": "Factor the quadratic derivative",
        "workingOut": "y' = 3(x^2 - 2x - 8) = 3(x-4)(x+2)"
      },
      {
        "explanation": "Solve inequality y' > 0",
        "workingOut": "3(x-4)(x+2) > 0 \\implies x < -2 \\text{ or } x > 4"
      }
    ]
  },
  {
    "id": "y12a-3i-q8b",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the values of \\( x \\) for which the curve \\( y = x^3 - 3x^2 - 24x + 10 \\) is decreasing. (Format: a < x < b)",
    "a": "-2 < x < 4",
    "t": "Chapter review exercise",
    "hint": "Set y' < 0 and solve the quadratic inequality.",
    "solutionSteps": [
      {
        "explanation": "Find the factored derivative y'",
        "workingOut": "y' = 3(x-4)(x+2)"
      },
      {
        "explanation": "Solve inequality y' < 0",
        "workingOut": "3(x-4)(x+2) < 0 \\implies -2 < x < 4"
      }
    ]
  },
  {
    "id": "y12a-3i-q8c",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the values of \\( x \\) for which the curve \\( y = x^3 - 3x^2 - 24x + 10 \\) is concave up. (Format: x > a)",
    "a": "x > 1",
    "t": "Chapter review exercise",
    "hint": "Set the second derivative y'' > 0 and solve.",
    "solutionSteps": [
      {
        "explanation": "Find the second derivative y''",
        "workingOut": "y'' = \\frac{d}{dx}(3x^2 - 6x - 24) = 6x - 6"
      },
      {
        "explanation": "Solve inequality y'' > 0",
        "workingOut": "6x - 6 > 0 \\implies 6x > 6 \\implies x > 1"
      }
    ]
  },
  {
    "id": "y12a-3i-q8d",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the values of \\( x \\) for which the curve \\( y = x^3 - 3x^2 - 24x + 10 \\) is concave down. (Format: x < a)",
    "a": "x < 1",
    "t": "Chapter review exercise",
    "hint": "Set the second derivative y'' < 0 and solve.",
    "solutionSteps": [
      {
        "explanation": "Find the second derivative y''",
        "workingOut": "y'' = 6x - 6"
      },
      {
        "explanation": "Solve inequality y'' < 0",
        "workingOut": "6x - 6 < 0 \\implies 6x < 6 \\implies x < 1"
      }
    ]
  },
  {
    "id": "y12a-3i-q9a",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "The constant function \\( y = 3 \\) is graphed below. Select the correct shape and equation of its derivative function \\( y' \\).",
    "opts": [
      "A horizontal line on the x-axis, y = 0",
      "A rising line with slope 1, y = x",
      "A horizontal line above the x-axis, y = 3",
      "A vertical line at x = 0"
    ],
    "a": "A horizontal line on the x-axis, y = 0",
    "t": "Chapter review exercise",
    "hint": "The derivative of any constant function is 0.",
    "solutionSteps": [
      {
        "explanation": "Differentiate constant function",
        "workingOut": "y' = \\frac{d}{dx}(3) = 0"
      },
      {
        "explanation": "Draw derivative graph shape",
        "workingOut": "\\text{The line } y = 0 \\text{ is a horizontal line lying exactly on the x-axis.}"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-5.0, 5.0, 5.0, -2.0],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-4,0], [4,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-1.5], [0,4.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('segment', [[-4,3], [4,3]], {strokeColor: 'blue', strokeWidth: 2});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y12a-3i-q9b",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "A rising line passing through the origin with slope 1.5, \\( y = 1.5x \\), is shown below. Select the correct graph of its derivative \\( y' \\).",
    "opts": [
      "A constant horizontal line at y = 1.5",
      "A constant horizontal line at y = 0",
      "A linear line passing through the origin",
      "A parabola opening upwards"
    ],
    "a": "A constant horizontal line at y = 1.5",
    "t": "Chapter review exercise",
    "hint": "The derivative of f(x) = mx + c is f'(x) = m.",
    "solutionSteps": [
      {
        "explanation": "Differentiate linear function",
        "workingOut": "y' = \\frac{d}{dx}(1.5x) = 1.5"
      },
      {
        "explanation": "Determine the derivative graph shape",
        "workingOut": "\\text{Since the derivative is constant, it is represented by a horizontal line at } y = 1.5."
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-5.0, 6.0, 5.0, -6.0],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-4,0], [4,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-5], [0,5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('segment', [[-3,-4.5], [3,4.5]], {strokeColor: 'blue', strokeWidth: 2});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y12a-3i-q9c",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "A parabola with vertex at \\( x = 3 \\), \\( y = (x-3)^2 \\), is graphed below. Select the correct description of its derivative graph \\( y' \\).",
    "opts": [
      "A straight line crossing the x-axis at x = 3",
      "A horizontal line at y = 3",
      "Another parabola with vertex at x = 0",
      "A straight line crossing the y-axis at y = 3"
    ],
    "a": "A straight line crossing the x-axis at x = 3",
    "t": "Chapter review exercise",
    "hint": "Differentiate f(x) to get a linear equation, and check where it is 0.",
    "solutionSteps": [
      {
        "explanation": "Differentiate quadratic function using chain rule",
        "workingOut": "y' = 2(x-3) = 2x - 6"
      },
      {
        "explanation": "Determine x-intercept of derivative line",
        "workingOut": "2x - 6 = 0 \\implies x = 3"
      },
      {
        "explanation": "Identify derivative graph style",
        "workingOut": "\\text{The derivative is a line with positive gradient crossing the x-axis at } x = 3."
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-2.0, 8.0, 7.0, -2.0],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-1,0], [6,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-1], [0,7]], {strokeColor: 'black', strokeWidth: 1});\nvar f = function(x){return (x-3)*(x-3);};\nboard.create('functiongraph', [f, -1, 6], {strokeColor: 'blue', strokeWidth: 2});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y12a-3i-q9d",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "A cubic curve with turning points at \\( x = -2 \\) and \\( x = 2 \\), \\( y = 0.1(12x - x^3) \\), is shown below. Select the correct graph description of its derivative \\( y' \\).",
    "opts": [
      "A concave down parabola crossing the x-axis at x = -2 and x = 2",
      "A concave up parabola with vertex at the origin",
      "A straight line crossing the x-axis at x = 0",
      "A cubic curve with turning points at the origin"
    ],
    "a": "A concave down parabola crossing the x-axis at x = -2 and x = 2",
    "t": "Chapter review exercise",
    "hint": "The derivative of a cubic is a quadratic (parabola). Identify where y' = 0.",
    "solutionSteps": [
      {
        "explanation": "Differentiate cubic function",
        "workingOut": "y' = 0.1(12 - 3x^2) = 1.2 - 0.3x^2"
      },
      {
        "explanation": "Determine critical values where y' = 0",
        "workingOut": "1.2 - 0.3x^2 = 0 \\implies x^2 = 4 \\implies x = \\pm 2"
      },
      {
        "explanation": "Check direction of parabola",
        "workingOut": "\\text{Since coefficient of } x^2 \\text{ is negative, it is a concave down parabola crossing x-axis at } \\pm 2."
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-5.0, 4.0, 5.0, -4.0],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-4, 0], [4, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0, -3], [0, 3]], {strokeColor: 'black', strokeWidth: 1});\nvar f = function(x){return 0.1*(12*x - x*x*x);};\nboard.create('functiongraph', [f, -4, 4], {strokeColor: 'blue', strokeWidth: 2});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y12a-3i-q10",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "The curve \\( y = x^3 - 3x^2 - 9x + 15 \\) is graphed below. The points \\( P \\) and \\( Q \\) are stationary points. Complete parts a) to c).",
    "t": "Chapter review exercise",
    "solutionSteps": [],
    "subQuestions": [
      {
        "id": "y12a-3i-q10a",
        "type": "short_answer",
        "question": "a) Find the coordinates of \\( P \\) and \\( Q \\). (Format: P(x,y), Q(x,y))",
        "a": "P(-1,20), Q(3,-12)",
        "solutionSteps": [
          {
            "explanation": "Differentiate the function to locate stationary points",
            "workingOut": "y' = 3x^2 - 6x - 9 = 3(x-3)(x+1) = 0 \\implies x = -1, 3"
          },
          {
            "explanation": "Evaluate the function at x = -1 to find point P",
            "workingOut": "y(-1) = (-1)^3 - 3(-1)^2 - 9(-1) + 15 = -1 - 3 + 9 + 15 = 20 \\implies P(-1, 20)"
          },
          {
            "explanation": "Evaluate the function at x = 3 to find point Q",
            "workingOut": "y(3) = 3^3 - 3(3)^2 - 9(3) + 15 = 27 - 27 - 27 + 15 = -12 \\implies Q(3, -12)"
          }
        ]
      },
      {
        "id": "y12a-3i-q10b",
        "type": "short_answer",
        "question": "b) For what values of \\( x \\) is the curve concave up? (Write as an inequality, e.g. x > a)",
        "a": "x > 1",
        "solutionSteps": [
          {
            "explanation": "Find the second derivative y''",
            "workingOut": "y'' = 6x - 6"
          },
          {
            "explanation": "Set second derivative strictly positive",
            "workingOut": "6x - 6 > 0 \\implies 6x > 6 \\implies x > 1"
          }
        ]
      },
      {
        "id": "y12a-3i-q10c",
        "type": "short_answer",
        "question": "c) For what values of \\( k \\) are there three distinct solutions of the equation \\( x^3 - 3x^2 - 9x + 15 = k \\)? (Format: a < k < b)",
        "a": "-12 < k < 20",
        "solutionSteps": [
          {
            "explanation": "Analyze cubic solutions visually",
            "workingOut": "\\text{Three solutions exist when the horizontal line } y = k \\text{ intersects the cubic in three places.}"
          },
          {
            "explanation": "Identify boundary limits using stationary values",
            "workingOut": "\\text{The line must lie strictly between the turning point coordinates } y(Q) = -12 \\text{ and } y(P) = 20."
          },
          {
            "explanation": "State inequality range",
            "workingOut": "-12 < k < 20"
          }
        ]
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-3.0, 26.0, 5.0, -18.0],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-2.8,0], [4.8,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-16.5], [0,24.5]], {strokeColor: 'black', strokeWidth: 1});\nvar f = function(x){return x*x*x - 3*x*x - 9*x + 15;};\nboard.create('functiongraph', [f, -2.5, 4.5], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [-1, 20], {name: 'P(-1, 20)', size: 3, color: 'red', label: {offset: [-15, 12]}});\nboard.create('point', [3, -12], {name: 'Q(3, -12)', size: 3, color: 'red', label: {offset: [10, -10]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y12a-3i-q11a",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Sketch the graph of \\( y = x^2 - 4x - 5 \\), indicating the coordinates of any stationary points and points of inflection.",
    "a": "Vertex / Stationary point at (2, -9), no points of inflection.",
    "t": "Chapter review exercise",
    "hint": "This is a quadratic parabola. Find the vertex where y' = 0.",
    "solutionSteps": [
      {
        "explanation": "Differentiate to find stationary points",
        "workingOut": "y' = 2x - 4 = 0 \\implies x = 2"
      },
      {
        "explanation": "Find coordinates of turning point",
        "workingOut": "y(2) = 2^2 - 4(2) - 5 = -9 \\implies (2, -9) \\text{ is local minimum}"
      },
      {
        "explanation": "Verify points of inflection",
        "workingOut": "y'' = 2 \\ne 0 \\implies \\text{no inflection points.}"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-3.0, 6.0, 7.0, -11.0],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-2.5,0], [6.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-10.5], [0,5.5]], {strokeColor: 'black', strokeWidth: 1});\nvar f = function(x){return x*x - 4*x - 5;};\nboard.create('functiongraph', [f, -2, 6], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [2, -9], {name: 'Vertex(2,-9)', size: 3, color: 'red', label: {offset: [10, -10]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y12a-3i-q11b",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Sketch the graph of \\( y = x^3 - 3x^2 + 4 \\), indicating all stationary points and points of inflection.",
    "a": "Local Max at (0, 4), Local Min at (2, 0), Inflection Point at (1, 2).",
    "t": "Chapter review exercise",
    "hint": "Integrate key calculus landmarks: find where y' = 0 and y'' = 0.",
    "solutionSteps": [
      {
        "explanation": "Differentiate to find stationary points",
        "workingOut": "y' = 3x^2 - 6x = 3x(x-2) = 0 \\implies x = 0, 2"
      },
      {
        "explanation": "Calculate y-coordinates of stationary points",
        "workingOut": "y(0) = 4 \\implies (0, 4) \\text{ (Max)}; \\quad y(2) = 8 - 12 + 4 = 0 \\implies (2, 0) \\text{ (Min)}"
      },
      {
        "explanation": "Differentiate again to locate inflection points",
        "workingOut": "y'' = 6x - 6 = 0 \\implies x = 1"
      },
      {
        "explanation": "Find coordinate of inflection point",
        "workingOut": "y(1) = 1 - 3 + 4 = 2 \\implies (1, 2) \\text{ is point of inflection}"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-2.0, 7.0, 4.0, -2.0],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-1.8,0], [3.8,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-1.5], [0,6.5]], {strokeColor: 'black', strokeWidth: 1});\nvar f = function(x){return x*x*x - 3*x*x + 4;};\nboard.create('functiongraph', [f, -1.5, 3.5], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [0, 4], {name: 'Local Max(0,4)', size: 3, color: 'red', label: {offset: [10, 10]}});\nboard.create('point', [2, 0], {name: 'Local Min(2,0)', size: 3, color: 'red', label: {offset: [10, 10]}});\nboard.create('point', [1, 2], {name: 'Inflection(1,2)', size: 3, color: 'red', label: {offset: [10, 5]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y12a-3i-q11c",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Sketch the graph of \\( y = 2x^3 - 6x^2 - 18x + 5 \\), indicating all stationary points and points of inflection.",
    "a": "Local Max at (-1, 15), Local Min at (3, -49), Inflection Point at (1, -17).",
    "t": "Chapter review exercise",
    "hint": "Analyze derivative roots and second derivative roots for landmarks.",
    "solutionSteps": [
      {
        "explanation": "Find first derivative",
        "workingOut": "y' = 6x^2 - 12x - 18 = 6(x-3)(x+1) = 0 \\implies x = -1, 3"
      },
      {
        "explanation": "Evaluate stationary coordinates",
        "workingOut": "y(-1) = -2 - 6 + 18 + 5 = 15 \\implies (-1, 15); \\quad y(3) = 54 - 54 - 54 + 5 = -49 \\implies (3, -49)"
      },
      {
        "explanation": "Determine second derivative and inflection coordinates",
        "workingOut": "y'' = 12x - 12 = 0 \\implies x = 1 \\implies y(1) = 2 - 6 - 18 + 5 = -17 \\implies (1, -17)"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-3.0, 25.0, 5.0, -55.0],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-2.8,0], [4.8,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-52.5], [0,22.5]], {strokeColor: 'black', strokeWidth: 1});\nvar f = function(x){return 2*x*x*x - 6*x*x - 18*x + 5;};\nboard.create('functiongraph', [f, -2.5, 4.5], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [-1, 15], {name: 'Max(-1,15)', size: 3, color: 'red', label: {offset: [-15, 12]}});\nboard.create('point', [3, -49], {name: 'Min(3,-49)', size: 3, color: 'red', label: {offset: [10, -10]}});\nboard.create('point', [1, -17], {name: 'Inflection(1,-17)', size: 3, color: 'red', label: {offset: [10, 5]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y12a-3i-q12",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "For the cubic curve \\( y = x^3 - 3x^2 - 24x + 28 \\), complete parts a) and b) for the domain \\( -3 \\le x \\le 6 \\).",
    "t": "Chapter review exercise",
    "solutionSteps": [],
    "subQuestions": [
      {
        "id": "y12a-3i-q12a",
        "type": "teacher_review",
        "question": "a) Sketch the graph of the function on the domain, indicating all stationary points.",
        "a": "Local Max at (-2, 56), Local Min at (4, -52). Endpoints at (-3, 46) and (6, -8).",
        "solutionSteps": [
          {
            "explanation": "Differentiate the function to find stationary points",
            "workingOut": "y' = 3x^2 - 6x - 24 = 3(x-4)(x+2) = 0 \\implies x = -2, 4"
          },
          {
            "explanation": "Determine stationary point coordinates",
            "workingOut": "y(-2) = 56 \\implies (-2, 56) \\text{ (Max)}; \\quad y(4) = -52 \\implies (4, -52) \\text{ (Min)}"
          },
          {
            "explanation": "Evaluate values at domain boundaries",
            "workingOut": "y(-3) = 46; \\quad y(6) = -8"
          }
        ]
      },
      {
        "id": "y12a-3i-q12b",
        "type": "short_answer",
        "question": "b) Determine the global maximum and minimum values of the function in this domain. (Format: global maximum: max_val, global minimum: min_val)",
        "a": "global maximum: 56, global minimum: -52",
        "solutionSteps": [
          {
            "explanation": "Compare local extrema and boundary values",
            "workingOut": "\\text{Candidate values: } y(-3) = 46, \\, y(-2) = 56, \\, y(4) = -52, \\, y(6) = -8"
          },
          {
            "explanation": "Select the absolute minimum and maximum values",
            "workingOut": "\\text{The largest value is } 56 \\text{ at } x=-2 \\text{, and the smallest value is } -52 \\text{ at } x=4."
          }
        ]
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-4.5, 70.0, 7.5, -60.0],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-4.0,0], [7.0,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-58.0], [0,68.0]], {strokeColor: 'black', strokeWidth: 1});\nvar f = function(x){return x*x*x - 3*x*x - 24*x + 28;};\nboard.create('functiongraph', [f, -3, 6], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [-2, 56], {name: 'Global Max(-2,56)', size: 3, color: 'red', label: {offset: [-15, 12]}});\nboard.create('point', [4, -52], {name: 'Global Min(4,-52)', size: 3, color: 'red', label: {offset: [10, -10]}});\nboard.create('point', [-3, 46], {name: '(-3,46)', size: 2, color: 'green', label: {offset: [-15, 10]}});\nboard.create('point', [6, -8], {name: '(6,-8)', size: 2, color: 'green', label: {offset: [10, 10]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y12a-3i-q13a",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "The tangent to the curve \\( y = x^2 - ax + 12 \\) is horizontal at \\( x = -2 \\). Find the value of \\( a \\).",
    "a": "-4",
    "t": "Chapter review exercise",
    "hint": "Set y' = 0 at x = -2 and solve for a.",
    "solutionSteps": [
      {
        "explanation": "Differentiate the function",
        "workingOut": "y' = 2x - a"
      },
      {
        "explanation": "Set the derivative to zero at x = -2",
        "workingOut": "y'(-2) = 2(-2) - a = 0"
      },
      {
        "explanation": "Solve for a",
        "workingOut": "-4 - a = 0 \\implies a = -4"
      }
    ]
  },
  {
    "id": "y12a-3i-q13ba",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "The curve \\( y = ax^2 + bx + 5 \\) has a turning point at \\( (-2, 1) \\). Find the value of the coefficient \\( a \\).",
    "a": "1",
    "t": "Chapter review exercise",
    "hint": "Set the derivative at x = -2 equal to 0, and plug the coordinate (-2, 1) into the curve equation.",
    "solutionSteps": [
      {
        "explanation": "Substitute coordinates (-2, 1) into the curve equation",
        "workingOut": "1 = a(-2)^2 + b(-2) + 5 \\implies 4a - 2b = -4 \\implies 2a - b = -2"
      },
      {
        "explanation": "Differentiate and set derivative equal to 0 at turning point x = -2",
        "workingOut": "y' = 2ax + b \\implies 2a(-2) + b = 0 \\implies -4a + b = 0 \\implies b = 4a"
      },
      {
        "explanation": "Solve the system of equations for a",
        "workingOut": "2a - (4a) = -2 \\implies -2a = -2 \\implies a = 1"
      }
    ]
  },
  {
    "id": "y12a-3i-q13bb",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "The curve \\( y = ax^2 + bx + 5 \\) has a turning point at \\( (-2, 1) \\). Find the value of the coefficient \\( b \\).",
    "a": "4",
    "t": "Chapter review exercise",
    "hint": "Use the relation b = 4a after finding a = 1.",
    "solutionSteps": [
      {
        "explanation": "Use the derivative relation at turning point x = -2",
        "workingOut": "y'(-2) = 2a(-2) + b = 0 \\implies b = 4a"
      },
      {
        "explanation": "Substitute a = 1 to solve for b",
        "workingOut": "b = 4(1) = 4"
      }
    ]
  },
  {
    "id": "y12a-3i-q14",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "For the curve \\( y = x^4 - 4x^3 + 12 \\), complete parts a) to c).",
    "t": "Chapter review exercise",
    "solutionSteps": [],
    "subQuestions": [
      {
        "id": "y12a-3i-q14a",
        "type": "teacher_review",
        "question": "a) Show that the curve has a point of inflection at \\( (2, -4) \\).",
        "a": "The second derivative y'' = 12x(x-2) is 0 at x = 2. Since y'' changes sign from negative to positive around x = 2, and y(2) = -4, (2, -4) is a point of inflection.",
        "solutionSteps": [
          {
            "explanation": "Find the first and second derivatives of the function",
            "workingOut": "y' = 4x^3 - 12x^2 \\implies y'' = 12x^2 - 24x = 12x(x - 2)"
          },
          {
            "explanation": "Find where the second derivative is zero",
            "workingOut": "12x(x - 2) = 0 \\implies x = 0 \\text{ or } x = 2"
          },
          {
            "explanation": "Verify sign change of y'' around x = 2",
            "workingOut": "\\text{For } x < 2, \\, y'' < 0. \\text{ For } x > 2, \\, y'' > 0. \\text{ Concavity changes.}"
          },
          {
            "explanation": "Substitute x = 2 into y",
            "workingOut": "y(2) = 2^4 - 4(2)^3 + 12 = 16 - 32 + 12 = -4 \\implies (2, -4) \\text{ is inflection point}"
          }
        ]
      },
      {
        "id": "y12a-3i-q14b",
        "type": "short_answer",
        "question": "b) Find the gradient of the curve at this point of inflection.",
        "a": "-16",
        "solutionSteps": [
          {
            "explanation": "Substitute x = 2 into first derivative function y'",
            "workingOut": "y'(2) = 4(2)^3 - 12(2)^2 = 32 - 48 = -16"
          }
        ]
      },
      {
        "id": "y12a-3i-q14c",
        "type": "teacher_review",
        "question": "c) Hence show that the tangent at the point of inflection is \\( 16x + y - 28 = 0 \\).",
        "a": "The tangent line passing through (2, -4) with gradient -16 is y - (-4) = -16(x - 2), which simplifies to 16x + y - 28 = 0.",
        "solutionSteps": [
          {
            "explanation": "Write line equation using point-slope formula",
            "workingOut": "y - y_1 = m(x - x_1) \\implies y - (-4) = -16(x - 2)"
          },
          {
            "explanation": "Expand and rearrange to standard form",
            "workingOut": "y + 4 = -16x + 32 \\implies 16x + y - 28 = 0"
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-3i-q15",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "The number \\( S \\) of students logged onto a particular website over a five-hour period is given by the formula \\( S = 600 + 54t^2 - 3t^4 \\), for \\( 0 \\le t \\le 5 \\). Complete parts a) to c).",
    "t": "Chapter review exercise",
    "solutionSteps": [],
    "subQuestions": [
      {
        "id": "y12a-3i-q15a",
        "type": "short_answer",
        "question": "a) What is the initial number of students that are logged on?",
        "a": "600",
        "solutionSteps": [
          {
            "explanation": "Evaluate S at initial time t = 0",
            "workingOut": "S(0) = 600 + 54(0)^2 - 3(0)^4 = 600"
          }
        ]
      },
      {
        "id": "y12a-3i-q15b",
        "type": "short_answer",
        "question": "b) How many students are logged on at the end of the five hours?",
        "a": "75",
        "solutionSteps": [
          {
            "explanation": "Substitute t = 5 into the formula",
            "workingOut": "S(5) = 600 + 54(5)^2 - 3(5)^4 = 600 + 54(25) - 3(625)"
          },
          {
            "explanation": "Calculate the numerical value",
            "workingOut": "S(5) = 600 + 1350 - 1875 = 75"
          }
        ]
      },
      {
        "id": "y12a-3i-q15c",
        "type": "short_answer",
        "question": "c) What was the maximum number of students logged onto the website during the five-hour period?",
        "a": "843",
        "solutionSteps": [
          {
            "explanation": "Differentiate S with respect to t to find critical points",
            "workingOut": "\\frac{dS}{dt} = 108t - 12t^3 = 12t(9 - t^2) = 0"
          },
          {
            "explanation": "Solve for t inside the domain",
            "workingOut": "t = 3 \\text{ hours (since } t \\ge 0\\text{)}"
          },
          {
            "explanation": "Evaluate S at t = 3 to find peak number",
            "workingOut": "S(3) = 600 + 54(3)^2 - 3(3)^4 = 600 + 486 - 243 = 843"
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-3i-q16",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "A rectangular sheet of cardboard measures 20 cm by 12 cm. Equal squares of side length \\( x \\) cm are cut out of the corners and the sides are turned up to form an open rectangular box. Complete parts a) and b).",
    "t": "Chapter review exercise",
    "solutionSteps": [],
    "subQuestions": [
      {
        "id": "y12a-3i-q16a",
        "type": "teacher_review",
        "question": "a) Show that the volume \\( V \\) of the box is given by \\( V = 4x^3 - 64x^2 + 240x \\).",
        "a": "The base of the box has dimensions 20 - 2x and 12 - 2x. The height is x. Thus V = x(20 - 2x)(12 - 2x) = 4x^3 - 64x^2 + 240x.",
        "solutionSteps": [
          {
            "explanation": "Write expression for dimensions of the box",
            "workingOut": "\\text{Height } = x, \\, \\text{Length } = 20 - 2x, \\, \\text{Width } = 12 - 2x"
          },
          {
            "explanation": "Write down the volume product and expand",
            "workingOut": "V = x(20 - 2x)(12 - 2x) = x(240 - 40x - 24x + 4x^2) = x(240 - 64x + 4x^2)"
          },
          {
            "explanation": "Distribute x to get final expression",
            "workingOut": "V = 4x^3 - 64x^2 + 240x"
          }
        ]
      },
      {
        "id": "y12a-3i-q16b",
        "type": "short_answer",
        "question": "b) Find, in exact fraction form, the maximum volume of the box in cubic centimetres.",
        "a": "\\frac{6400}{27}",
        "solutionSteps": [
          {
            "explanation": "Differentiate V and set equal to 0",
            "workingOut": "\\frac{dV}{dx} = 12x^2 - 128x + 240 = 4(3x^2 - 32x + 60) = 0"
          },
          {
            "explanation": "Factor the quadratic equation",
            "workingOut": "(3x - 10)(x - 6) = 0 \\implies x = \\frac{10}{3} \\text{ or } x = 6"
          },
          {
            "explanation": "Reject x = 6 as it makes width zero, then substitute x = 10/3 into V",
            "workingOut": "V\\left(\\frac{10}{3}\\right) = \\frac{10}{3}\\left(20 - \\frac{20}{3}\\right)\\left(12 - \\frac{20}{3}\\right) = \\frac{10}{3}\\left(\\frac{40}{3}\\right)\\left(\\frac{16}{3}\\right)"
          },
          {
            "explanation": "Calculate exact fraction",
            "workingOut": "\\frac{6400}{27}"
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-3i-q17",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 240,
    "question": "A coal chute is built in the shape of an upturned cone. The sum of the base radius \\( r \\) and the height \\( h \\) is 15 metres. Complete parts a) and b).",
    "t": "Chapter review exercise",
    "solutionSteps": [],
    "subQuestions": [
      {
        "id": "y12a-3i-q17a",
        "type": "teacher_review",
        "question": "a) Show that the volume \\( V \\) of the coal chute is given by \\( V = 5\\pi r^2 - \\frac{1}{3}\\pi r^3 \\).",
        "a": "Since r + h = 15, h = 15 - r. Using V = 1/3 * pi * r^2 * h gives V = 1/3 * pi * r^2 * (15 - r) = 5*pi*r^2 - 1/3*pi*r^3.",
        "solutionSteps": [
          {
            "explanation": "Relate radius and height using the sum condition",
            "workingOut": "r + h = 15 \\implies h = 15 - r"
          },
          {
            "explanation": "Substitute height into the cone volume formula",
            "workingOut": "V = \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi r^2 (15 - r)"
          },
          {
            "explanation": "Expand the expression",
            "workingOut": "V = 5\\pi r^2 - \\frac{1}{3}\\pi r^3"
          }
        ]
      },
      {
        "id": "y12a-3i-q17b",
        "type": "short_answer",
        "question": "b) Find the radius of the cone in metres that yields the maximum volume.",
        "a": "10",
        "solutionSteps": [
          {
            "explanation": "Differentiate V with respect to r",
            "workingOut": "\\frac{dV}{dr} = 10\\pi r - \\pi r^2"
          },
          {
            "explanation": "Set the derivative to zero and solve for r",
            "workingOut": "\\pi r (10 - r) = 0 \\implies r = 10 \\text{ (since } r > 0\\text{)}"
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-3i-q18a",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 240,
    "question": "Find the primitive of the function:\n\\( f(x) = x^8 \\)",
    "a": "\\frac{x^9}{9} + C",
    "t": "Chapter review exercise",
    "hint": "Use the integration power rule: increase the power by 1 and divide by the new power.",
    "solutionSteps": [
      {
        "explanation": "Apply power rule of integration",
        "workingOut": "\\int x^8 \\, dx = \\frac{x^9}{9} + C"
      }
    ]
  },
  {
    "id": "y12a-3i-q18b",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 240,
    "question": "Find the primitive of the function:\n\\( f(x) = 4x \\)",
    "a": "2x^2 + C",
    "t": "Chapter review exercise",
    "hint": "Integrate x to x^2 / 2, keeping the coefficient.",
    "solutionSteps": [
      {
        "explanation": "Integrate using power rule",
        "workingOut": "\\int 4x \\, dx = 4 \\left( \\frac{x^2}{2} \\right) + C = 2x^2 + C"
      }
    ]
  },
  {
    "id": "y12a-3i-q18c",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 240,
    "question": "Find the primitive of the constant function:\n\\( f(x) = 6 \\)",
    "a": "6x + C",
    "t": "Chapter review exercise",
    "hint": "The primitive of a constant k is kx + C.",
    "solutionSteps": [
      {
        "explanation": "Integrate constant",
        "workingOut": "\\int 6 \\, dx = 6x + C"
      }
    ]
  },
  {
    "id": "y12a-3i-q18d",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 240,
    "question": "Find the primitive of the function:\n\\( f(x) = 15x^4 \\)",
    "a": "3x^5 + C",
    "t": "Chapter review exercise",
    "hint": "Add 1 to power of 4, then divide coefficient 15 by 5.",
    "solutionSteps": [
      {
        "explanation": "Apply integration power rule",
        "workingOut": "\\int 15x^4 \\, dx = 15 \\left( \\frac{x^5}{5} \\right) + C = 3x^5 + C"
      }
    ]
  },
  {
    "id": "y12a-3i-q18e",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 240,
    "question": "Find the primitive of the function:\n\\( f(x) = 6x + 6x^2 - 4x^3 \\)",
    "a": "3x^2 + 2x^3 - x^4 + C",
    "t": "Chapter review exercise",
    "hint": "Integrate each polynomial term individually.",
    "solutionSteps": [
      {
        "explanation": "Integrate term-by-term using power rule",
        "workingOut": "\\int (6x + 6x^2 - 4x^3) \\, dx = 6\\left(\\frac{x^2}{2}\\right) + 6\\left(\\frac{x^3}{3}\\right) - 4\\left(\\frac{x^4}{4}\\right) + C"
      },
      {
        "explanation": "Simplify coefficients",
        "workingOut": "3x^2 + 2x^3 - x^4 + C"
      }
    ]
  },
  {
    "id": "y12a-3i-q19a",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 240,
    "question": "Find the primitive after expanding brackets first:\n\\( f(x) = 2x(x - 3) \\)",
    "a": "\\frac{2x^3}{3} - 3x^2 + C",
    "t": "Chapter review exercise",
    "hint": "Expand brackets to 2x^2 - 6x, then integrate.",
    "solutionSteps": [
      {
        "explanation": "Expand brackets",
        "workingOut": "2x(x-3) = 2x^2 - 6x"
      },
      {
        "explanation": "Integrate term-by-term",
        "workingOut": "\\int (2x^2 - 6x) \\, dx = \\frac{2x^3}{3} - 3x^2 + C"
      }
    ]
  },
  {
    "id": "y12a-3i-q19b",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 240,
    "question": "Find the primitive after expanding brackets first:\n\\( f(x) = (x + 2)(x - 4) \\)",
    "a": "\\frac{x^3}{3} - x^2 - 8x + C",
    "t": "Chapter review exercise",
    "hint": "Expand using FOIL to get x^2 - 2x - 8, then integrate.",
    "solutionSteps": [
      {
        "explanation": "Expand brackets",
        "workingOut": "(x + 2)(x - 4) = x^2 - 2x - 8"
      },
      {
        "explanation": "Integrate term-by-term",
        "workingOut": "\\int (x^2 - 2x - 8) \\, dx = \\frac{x^3}{3} - x^2 - 8x + C"
      }
    ]
  },
  {
    "id": "y12a-3i-q19c",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 240,
    "question": "Find the primitive after expanding brackets first:\n\\( f(x) = (3x - 2)^2 \\)",
    "a": "3x^3 - 6x^2 + 4x + C",
    "t": "Chapter review exercise",
    "hint": "Expand the perfect square trinomial to 9x^2 - 12x + 4, then integrate.",
    "solutionSteps": [
      {
        "explanation": "Expand perfect square brackets",
        "workingOut": "(3x - 2)^2 = 9x^2 - 12x + 4"
      },
      {
        "explanation": "Integrate term-by-term",
        "workingOut": "\\int (9x^2 - 12x + 4) \\, dx = 3x^3 - 6x^2 + 4x + C"
      }
    ]
  },
  {
    "id": "y12a-3i-q20a",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 240,
    "question": "Find the primitive of the function:\n\\( f(x) = (x+3)^4 \\)",
    "a": "\\frac{(x+3)^5}{5} + C",
    "t": "Chapter review exercise",
    "hint": "Apply composite linear integration rule with a = 1.",
    "solutionSteps": [
      {
        "explanation": "Apply composite integration rule",
        "workingOut": "\\int (x+3)^4 \\, dx = \\frac{(x+3)^5}{5} + C"
      }
    ]
  },
  {
    "id": "y12a-3i-q20b",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 240,
    "question": "Find the primitive of the function:\n\\( f(x) = (x-2)^6 \\)",
    "a": "\\frac{(x-2)^7}{7} + C",
    "t": "Chapter review exercise",
    "hint": "Apply composite linear integration rule.",
    "solutionSteps": [
      {
        "explanation": "Integrate composite function",
        "workingOut": "\\int (x-2)^6 \\, dx = \\frac{(x-2)^7}{7} + C"
      }
    ]
  },
  {
    "id": "y12a-3i-q20c",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 240,
    "question": "Find the primitive of the function:\n\\( f(x) = (3x-1)^4 \\)",
    "a": "\\frac{(3x-1)^5}{15} + C",
    "t": "Chapter review exercise",
    "hint": "The coefficient of x is a = 3. Divide by 3 * 5 = 15.",
    "solutionSteps": [
      {
        "explanation": "Apply composite linear integration rule",
        "workingOut": "\\int (3x-1)^4 \\, dx = \\frac{(3x-1)^5}{3 \\times 5} + C"
      },
      {
        "explanation": "Simplify denominator",
        "workingOut": "\\frac{(3x-1)^5}{15} + C"
      }
    ]
  },
  {
    "id": "y12a-3i-q21a",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 240,
    "question": "Find the primitive after writing as a power of \\( x \\):\n\\( f(x) = \\frac{1}{x^3} \\)",
    "a": "-\\frac{1}{2x^2} + C",
    "t": "Chapter review exercise",
    "hint": "Rewrite as x^(-3) first, then integrate.",
    "solutionSteps": [
      {
        "explanation": "Rewrite in index form",
        "workingOut": "f(x) = x^{-3}"
      },
      {
        "explanation": "Integrate using power rule",
        "workingOut": "\\int x^{-3} \\, dx = \\frac{x^{-2}}{-2} + C = -\\frac{1}{2x^2} + C"
      }
    ]
  },
  {
    "id": "y12a-3i-q21b",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 240,
    "question": "Find the primitive after writing as a power of \\( x \\):\n\\( f(x) = \\sqrt[3]{x} \\)",
    "a": "\\frac{3}{4}x^{\\frac{4}{3}} + C",
    "t": "Chapter review exercise",
    "hint": "Rewrite in rational exponent index form x^(1/3).",
    "solutionSteps": [
      {
        "explanation": "Rewrite in index form",
        "workingOut": "f(x) = x^{\\frac{1}{3}}"
      },
      {
        "explanation": "Integrate using power rule",
        "workingOut": "\\int x^{\\frac{1}{3}} \\, dx = \\frac{x^{\\frac{4}{3}}}{\\frac{4}{3}} + C = \\frac{3}{4}x^{\\frac{4}{3}} + C"
      }
    ]
  },
  {
    "id": "y12a-3i-q22",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 240,
    "question": "Find the equation of the curve passing through the point \\( (2, 4) \\) with gradient function:\n\\( f'(x) = 3x^2 - 6x + 2 \\)",
    "a": "y = x^3 - 3x^2 + 2x + 4",
    "t": "Chapter review exercise",
    "hint": "Integrate gradient function to get family y = x^3 - 3x^2 + 2x + C, then plug in (2, 4).",
    "solutionSteps": [
      {
        "explanation": "Integrate the derivative to find the curve family",
        "workingOut": "y = \\int (3x^2 - 6x + 2) \\, dx = x^3 - 3x^2 + 2x + C"
      },
      {
        "explanation": "Substitute coordinates (2, 4) to solve for C",
        "workingOut": "4 = 2^3 - 3(2)^2 + 2(2) + C \\implies 4 = 8 - 12 + 4 + C \\implies 4 = C"
      },
      {
        "explanation": "State final curve equation",
        "workingOut": "y = x^3 - 3x^2 + 2x + 4"
      }
    ]
  },
  {
    "id": "y12a-3i-q23",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 240,
    "question": "If \\( f'(x) = 6x - 2 \\) and \\( f(2) = 11 \\), find the value of \\( f(3) \\).",
    "a": "24",
    "t": "Chapter review exercise",
    "hint": "Integrate f'(x) to find f(x), solve for C with f(2) = 11, then calculate f(3).",
    "solutionSteps": [
      {
        "explanation": "Integrate derivative to get function f(x)",
        "workingOut": "f(x) = \\int (6x - 2) \\, dx = 3x^2 - 2x + C"
      },
      {
        "explanation": "Substitute x = 2, f(2) = 11 to solve for C",
        "workingOut": "11 = 3(2)^2 - 2(2) + C \\implies 11 = 12 - 4 + C \\implies 11 = 8 + C \\implies C = 3"
      },
      {
        "explanation": "State complete function f(x)",
        "workingOut": "f(x) = 3x^2 - 2x + 3"
      },
      {
        "explanation": "Evaluate f(3)",
        "workingOut": "f(3) = 3(3)^2 - 2(3) + 3 = 27 - 6 + 3 = 24"
      }
    ]
  }
];
