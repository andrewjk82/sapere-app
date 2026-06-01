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
        "type": "short_answer",
        "question": "a) Find the coordinates of \\( A \\), the point where the curve cuts the \\( x \\)-axis (other than the origin).",
        "a": "(12,0)"
      },
      {
        "id": "y12a-3e-q1b",
        "type": "short_answer",
        "question": "b) Find the coordinates of the maximum turning point \\( B \\).",
        "a": "(8,256)"
      },
      {
        "id": "y12a-3e-q1c",
        "type": "short_answer",
        "question": "c) Find the coordinates of the point of inflection \\( C \\).",
        "a": "(4,128)"
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Set \\( y = 0 \\) to find the \\( x \\)-intercepts.",
        "workingOut": "12x^2 - x^3 = 0 \\implies x^2(12 - x) = 0 \\implies x = 0 \\text{ or } x = 12"
      },
      {
        "explanation": "State the coordinates of the non-zero intercept \\( A \\).",
        "workingOut": "A = (12, 0)"
      },
      {
        "explanation": "Differentiate once to find the first derivative for turning points.",
        "workingOut": "y' = 24x - 3x^2 = 3x(8 - x)"
      },
      {
        "explanation": "Set \\( y' = 0 \\) to find the stationary points.",
        "workingOut": "3x(8 - x) = 0 \\implies x = 0 \\text{ or } x = 8"
      },
      {
        "explanation": "Evaluate the \\( y \\)-coordinate for the turning point at \\( x = 8 \\).",
        "workingOut": "y(8) = 12(64) - 512 = 768 - 512 = 256 \\implies B = (8, 256)"
      },
      {
        "explanation": "Differentiate again to find the second derivative for the point of inflection.",
        "workingOut": "y'' = 24 - 6x = 6(4 - x)"
      },
      {
        "explanation": "Set \\( y'' = 0 \\) to find potential inflection points.",
        "workingOut": "6(4 - x) = 0 \\implies x = 4"
      },
      {
        "explanation": "Evaluate the \\( y \\)-coordinate for \\( C \\) and confirm concavity change.",
        "workingOut": "y(4) = 12(16) - 64 = 192 - 64 = 128 \\implies C = (4, 128)"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-3, 320, 15, -60],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-2,0], [14,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-40], [0,290]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [13.5, -15, 'x'], {fontSize: 14});\nboard.create('text', [-0.5, 275, 'y'], {fontSize: 14});\nvar f = function(x) { return 12*x*x - x*x*x; };\nboard.create('functiongraph', [f, -2, 13], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [12, 0], {name: 'A(12,0)', size: 3, color: 'red', label: {offset: [5, 12]}});\nboard.create('point', [8, 256], {name: 'B(8,256)', size: 3, color: 'red', label: {offset: [-15, 15]}});\nboard.create('point', [4, 128], {name: 'C(4,128)', size: 3, color: 'red', label: {offset: [10, 5]}});\nboard.unsuspendUpdate();"
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
        "type": "short_answer",
        "question": "a) Find the values of \\( x \\) for which \\( f'(x) = 0 \\). (If there are multiple values, list them in ascending order, separated by a comma.)",
        "a": "-2,3"
      },
      {
        "id": "y12a-3e-q2b",
        "type": "short_answer",
        "question": "b) Find the value of \\( x \\) for which \\( f''(x) = 0 \\).",
        "a": "0.5"
      },
      {
        "id": "y12a-3e-q2c",
        "type": "short_answer",
        "question": "c) State the interval of \\( x \\) for which \\( f(x) \\) is increasing. (Format: 'a < x < b')",
        "a": "-2 < x < 3"
      },
      {
        "id": "y12a-3e-q2d",
        "type": "short_answer",
        "question": "d) State the interval of \\( x \\) for which the curve is concave up, that is \\( f''(x) > 0 \\).",
        "a": "x > 0.5"
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Find where \\( f'(x) = 0 \\) by locating turning points.",
        "workingOut": "\\text{Turning points at } x = -2 \\text{ and } x = 3 \\implies f'(-2) = 0, \\, f'(3) = 0"
      },
      {
        "explanation": "Find where \\( f''(x) = 0 \\) by locating the point of inflection.",
        "workingOut": "\\text{Inflection point is at } (0.5, 1) \\implies f''(0.5) = 0"
      },
      {
        "explanation": "Identify where the curve goes upwards from left to right.",
        "workingOut": "\\text{Curve rises between the minimum at } x = -2 \\text{ and the maximum at } x = 3 \\implies -2 < x < 3"
      },
      {
        "explanation": "Identify where the curve is concave up (bending upwards).",
        "workingOut": "\\text{Curve is concave up to the right of the inflection point at } x = 0.5 \\implies x > 0.5"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-5, 8, 6, -7],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-4.5,0], [5.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-6.5], [0,7.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [5.3, -0.5, 'x'], {fontSize: 14});\nboard.create('text', [-0.5, 7.0, 'y'], {fontSize: 14});\nvar f = function(x) { return -0.16*x*x*x + 0.24*x*x + 2.88*x - 0.48; };\nboard.create('functiongraph', [f, -4.5, 5.5], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [-2, -4], {name: '(-2,-4)', size: 3, color: 'red', label: {offset: [-15, -15]}});\nboard.create('point', [3, 6], {name: '(3,6)', size: 3, color: 'red', label: {offset: [10, 10]}});\nboard.create('point', [0.5, 1], {name: '(0.5,1)', size: 2, color: 'black', label: {offset: [10, 5]}});\nboard.unsuspendUpdate();"
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
        "type": "short_answer",
        "question": "a) Find the \\( x \\)-intercepts of the parabola. (If there are multiple values, list them in ascending order, separated by a comma.)",
        "a": "-2,6"
      },
      {
        "id": "y12a-3e-q3b",
        "type": "short_answer",
        "question": "b) By putting \\( x = 0 \\, \\), find the \\( y \\)-intercept.",
        "a": "-12"
      },
      {
        "id": "y12a-3e-q3c",
        "type": "short_answer",
        "question": "c) Solve \\( \\frac{dy}{dx} = 0 \\) and hence find the coordinates of the stationary point.",
        "a": "(2,-16)"
      },
      {
        "id": "y12a-3e-q3d",
        "type": "short_answer",
        "question": "d) By examining the sign of \\( \\frac{d^2y}{dx^2} \\), state whether the stationary point is a maximum or a minimum.",
        "a": "minimum"
      },
      {
        "id": "y12a-3e-q3e",
        "type": "teacher_review",
        "question": "e) Sketch the graph of the function, indicating all important features.",
        "a": "Draw a concave up parabola with vertex at (2,-16), x-intercepts at -2 and 6, and y-intercept at -12."
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Set \\( y = 0 \\) and factor the quadratic expression to find the \\( x \\)-intercepts.",
        "workingOut": "x^2 - 4x - 12 = 0 \\implies (x - 6)(x + 2) = 0 \\implies x = -2, \\, 6"
      },
      {
        "explanation": "Find the \\( y \\)-intercept by setting \\( x = 0 \\).",
        "workingOut": "y(0) = 0^2 - 4(0) - 12 = -12"
      },
      {
        "explanation": "Differentiate the function to find \\( \\frac{dy}{dx} \\).",
        "workingOut": "\\frac{dy}{dx} = 2x - 4"
      },
      {
        "explanation": "Set \\( \\frac{dy}{dx} = 0 \\) to find the stationary point coordinates.",
        "workingOut": "2x - 4 = 0 \\implies x = 2 \\implies y(2) = 2^2 - 4(2) - 12 = -16 \\implies (2, -16)"
      },
      {
        "explanation": "Find the second derivative to classify the stationary point.",
        "workingOut": "\\frac{d^2y}{dx^2} = 2 > 0 \\implies \\text{minimum}"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-5, 6, 9, -20],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-4,0], [8,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-18], [0,4]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [7.5, -1, 'x'], {fontSize: 14});\nboard.create('text', [-1, 3, 'y'], {fontSize: 14});\nvar f = function(x) { return x*x - 4*x - 12; };\nboard.create('functiongraph', [f, -3.5, 7.5], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [2, -16], {name: '(2,-16)', size: 3, color: 'red', label: {offset: [10, -10]}});\nboard.create('point', [-2, 0], {name: '-2', size: 2, color: 'black', label: {offset: [-10, 10]}});\nboard.create('point', [6, 0], {name: '6', size: 2, color: 'black', label: {offset: [10, 10]}});\nboard.create('point', [0, -12], {name: '-12', size: 2, color: 'black', label: {offset: [-25, 0]}});\nboard.unsuspendUpdate();"
      }
    }
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
        "graphData": {
          "jsxGraph": {
            "width": 350,
            "height": 250,
            "boundingbox": [-3, 5, 9, -11],
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-2,0], [8,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-10], [0,4]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [7.5, -1, 'x'], {fontSize: 14});\nboard.create('text', [-1, 3.5, 'y'], {fontSize: 14});\nvar f = function(x) { return x*x - 6*x; };\nboard.create('functiongraph', [f, -1.5, 7.5], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [3, -9], {name: '(3,-9)', size: 3, color: 'red', label: {offset: [10, -10]}});\nboard.create('point', [0, 0], {name: '0', size: 2, color: 'black', label: {offset: [-10, 10]}});\nboard.create('point', [6, 0], {name: '6', size: 2, color: 'black', label: {offset: [10, 10]}});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "id": "y12a-3e-q4b",
        "type": "teacher_review",
        "question": "b) Sketch the graph of \\( y = 8 - 2x - x^2 \\).",
        "a": "A concave down parabola with vertex at (-1,9), passing through (-4,0), (2,0), and (0,8).",
        "graphData": {
          "jsxGraph": {
            "width": 350,
            "height": 250,
            "boundingbox": [-6, 12, 4, -4],
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-5.5,0], [3.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3], [0,11]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [3.2, -1, 'x'], {fontSize: 14});\nboard.create('text', [-1, 10.5, 'y'], {fontSize: 14});\nvar f = function(x) { return 8 - 2*x - x*x; };\nboard.create('functiongraph', [f, -5, 3], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [-1, 9], {name: '(-1,9)', size: 3, color: 'red', label: {offset: [-15, 15]}});\nboard.create('point', [-4, 0], {name: '-4', size: 2, color: 'black', label: {offset: [-15, -15]}});\nboard.create('point', [2, 0], {name: '2', size: 2, color: 'black', label: {offset: [10, -15]}});\nboard.create('point', [0, 8], {name: '8', size: 2, color: 'black', label: {offset: [10, 10]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "solutionSteps": [
      {
        "explanation": "For a), find turning point by setting \\( y' = 2x - 6 = 0 \\implies x = 3 \\). Vertex is \\( (3, -9) \\). Intercepts are \\( x = 0, \\, 6 \\).",
        "workingOut": "y = x(x-6) \\implies \\text{intercepts at } x=0, 6"
      },
      {
        "explanation": "For b), find turning point by setting \\( y' = -2 - 2x = 0 \\implies x = -1 \\). Vertex is \\( (-1, 9) \\). Intercepts are found via \\( -(x^2 + 2x - 8) = -(x+4)(x-2) = 0 \\implies x = -4, 2 \\).",
        "workingOut": "y(0) = 8 \\implies y\\text{-intercept is at } (0, 8)"
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
        "type": "teacher_review",
        "question": "a) Show that \\( y = 12x - x^3 \\) is an odd function. What symmetry does its graph display?",
        "a": "f(-x) = 12(-x) - (-x)^3 = -12x + x^3 = -f(x), so the function is odd. The graph displays rotational point symmetry of 180 degrees about the origin."
      },
      {
        "id": "y12a-3e-q5b",
        "type": "teacher_review",
        "question": "b) Show that \\( y' = 3(4 - x^2) \\) and \\( y'' = -6x \\).",
        "a": "y' = 12 - 3x^2 = 3(4-x^2), and y'' = d/dx(12-3x^2) = -6x."
      },
      {
        "id": "y12a-3e-q5c",
        "type": "short_answer",
        "question": "c) Find the coordinates of the stationary points and determine their nature. (Format: '(-2,-16) is a minimum, (2,16) is a maximum')",
        "a": "(-2,-16) is a minimum, (2,16) is a maximum"
      },
      {
        "id": "y12a-3e-q5d",
        "type": "teacher_review",
        "question": "d) Show, using a table of test values of \\( y'' \\), that \\( x = 0 \\) is a point of inflection.",
        "a": "y'' = 0 at x = 0. For x < 0, y'' > 0 (concave up). For x > 0, y'' < 0 (concave down). Since the sign of y'' changes, (0,0) is a point of inflection."
      },
      {
        "id": "y12a-3e-q5e",
        "type": "short_answer",
        "question": "e) By substituting into the gradient function \\( y' \\), find the gradient at the inflection point.",
        "a": "12"
      },
      {
        "id": "y12a-3e-q5f",
        "type": "teacher_review",
        "question": "f) Sketch the graph of the function, indicating all important features.",
        "a": "Cubic curve with minimum at (-2,-16), maximum at (2,16), inflection at (0,0), and x-intercepts at 0, \\pm 2\\sqrt{3}."
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Evaluate \\( f(-x) \\) to verify the odd function property.",
        "workingOut": "f(-x) = 12(-x) - (-x)^3 = -12x + x^3 = -(12x - x^3) = -f(x)"
      },
      {
        "explanation": "Differentiate once and twice to get the derivatives.",
        "workingOut": "y' = 12 - 3x^2 = 3(4 - x^2) \\quad \\text{and} \\quad y'' = -6x"
      },
      {
        "explanation": "Set \\( y' = 0 \\) to locate turning points.",
        "workingOut": "3(4 - x^2) = 0 \\implies x = \\pm 2 \\implies y(2) = 16, \\, y(-2) = -16"
      },
      {
        "explanation": "Examine the sign of \\( y'' \\) at the turning points.",
        "workingOut": "y''(2) = -12 < 0 \\implies (2, 16) \\text{ is max}; \\, y''(-2) = 12 > 0 \\implies (-2, -16) \\text{ is min}"
      },
      {
        "explanation": "Locate the inflection point where \\( y'' = 0 \\).",
        "workingOut": "-6x = 0 \\implies x = 0 \\implies y(0) = 0"
      },
      {
        "explanation": "Find the gradient of the curve at \\( x = 0 \\).",
        "workingOut": "y'(0) = 12(0) - 3(0)^2 + 12 = 12"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-5, 25, 5, -25],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-4.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-22], [0,22]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.3, -2, 'x'], {fontSize: 14});\nboard.create('text', [-0.5, 20, 'y'], {fontSize: 14});\nvar f = function(x) { return 12*x - x*x*x; };\nboard.create('functiongraph', [f, -4.2, 4.2], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [-2, -16], {name: 'Min(-2,-16)', size: 3, color: 'red', label: {offset: [-35, -15]}});\nboard.create('point', [2, 16], {name: 'Max(2,16)', size: 3, color: 'red', label: {offset: [10, 10]}});\nboard.create('point', [0, 0], {name: '(0,0)', size: 3, color: 'red', label: {offset: [10, 5]}});\nboard.unsuspendUpdate();"
      }
    }
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
        "type": "teacher_review",
        "question": "a) Show that \\( f'(x) = 6x(x - 3) \\) and \\( f''(x) = 6(2x - 3) \\).",
        "a": "f'(x) = 6x^2 - 18x = 6x(x-3), and f''(x) = 12x - 18 = 6(2x-3)."
      },
      {
        "id": "y12a-3e-q6b",
        "type": "short_answer",
        "question": "b) Find the coordinates of the stationary points and determine their nature. (Format: '(0,12) is a maximum, (3,-15) is a minimum')",
        "a": "(0,12) is a maximum, (3,-15) is a minimum"
      },
      {
        "id": "y12a-3e-q6c",
        "type": "short_answer",
        "question": "c) Explain why there is a point of inflection at \\( x = 1.5 \\), and find the gradient at the inflection point.",
        "a": "-13.5"
      },
      {
        "id": "y12a-3e-q6d",
        "type": "teacher_review",
        "question": "d) Sketch the graph of \\( f(x) \\), indicating all important features.",
        "a": "Cubic curve with local maximum at (0,12), local minimum at (3,-15), and point of inflection at (1.5, -1.5)."
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Differentiate once and twice.",
        "workingOut": "f'(x) = 6x^2 - 18x = 6x(x-3) \\quad \\text{and} \\quad f''(x) = 12x - 18 = 6(2x-3)"
      },
      {
        "explanation": "Solve \\( f'(x) = 0 \\) to find turning points.",
        "workingOut": "6x(x-3) = 0 \\implies x=0, 3 \\implies f(0) = 12, \\, f(3) = 2(27) - 9(9) + 12 = -15"
      },
      {
        "explanation": "Verify their nature using the second derivative.",
        "workingOut": "f''(0) = -18 < 0 \\implies (0,12) \\text{ is max}; \\, f''(3) = 18 > 0 \\implies (3,-15) \\text{ is min}"
      },
      {
        "explanation": "Find inflection point where \\( f''(x) = 0 \\) and evaluate its gradient.",
        "workingOut": "6(2x - 3) = 0 \\implies x = 1.5 \\implies f'(1.5) = 6(1.5)(1.5 - 3) = -13.5"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-3, 20, 5, -22],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-2.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-20], [0,18]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.2, -1.5, 'x'], {fontSize: 14});\nboard.create('text', [-0.5, 16, 'y'], {fontSize: 14});\nvar f = function(x) { return 2*x*x*x - 9*x*x + 12; };\nboard.create('functiongraph', [f, -2.2, 4.2], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [0, 12], {name: 'Max(0,12)', size: 3, color: 'red', label: {offset: [10, 10]}});\nboard.create('point', [3, -15], {name: 'Min(3,-15)', size: 3, color: 'red', label: {offset: [10, -10]}});\nboard.create('point', [1.5, -1.5], {name: 'Inflection(1.5,-1.5)', size: 3, color: 'red', label: {offset: [10, 5]}});\nboard.unsuspendUpdate();"
      }
    }
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
        "type": "teacher_review",
        "question": "a) Analyze and sketch the function \\( y = x(x - 3)^2 \\).",
        "a": "y' = 3(x-1)(x-3), y'' = 6(x-2). Local maximum at (1,4), local minimum at (3,0). Point of inflection at (2,2). Intercepts at (0,0) and (3,0).",
        "graphData": {
          "jsxGraph": {
            "width": 350,
            "height": 250,
            "boundingbox": [-2, 6, 5, -3],
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-1.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-2], [0,5.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.2, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.5, 5, 'y'], {fontSize: 14});\nvar f = function(x) { return x*(x-3)*(x-3); };\nboard.create('functiongraph', [f, -1.2, 4.2], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [1, 4], {name: 'Max(1,4)', size: 3, color: 'red', label: {offset: [-15, 15]}});\nboard.create('point', [3, 0], {name: 'Min(3,0)', size: 3, color: 'red', label: {offset: [10, -10]}});\nboard.create('point', [2, 2], {name: 'Inflection(2,2)', size: 3, color: 'red', label: {offset: [10, 5]}});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "id": "y12a-3e-q7b",
        "type": "teacher_review",
        "question": "b) Analyze and sketch the function \\( y = x^3 - 3x^2 - 9x + 8 \\). (No need to find x-intercepts).",
        "a": "y' = 3(x-3)(x+1), y'' = 6(x-1). Local maximum at (-1,13), local minimum at (3,-19). Point of inflection at (1,-3).",
        "graphData": {
          "jsxGraph": {
            "width": 350,
            "height": 250,
            "boundingbox": [-3, 20, 5, -25],
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-2.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-23], [0,18]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.2, -1.5, 'x'], {fontSize: 14});\nboard.create('text', [-0.5, 16, 'y'], {fontSize: 14});\nvar f = function(x) { return x*x*x - 3*x*x - 9*x + 8; };\nboard.create('functiongraph', [f, -2.5, 4.2], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [-1, 13], {name: 'Max(-1,13)', size: 3, color: 'red', label: {offset: [-30, 15]}});\nboard.create('point', [3, -19], {name: 'Min(3,-19)', size: 3, color: 'red', label: {offset: [10, -10]}});\nboard.create('point', [1, -3], {name: 'Inflection(1,-3)', size: 3, color: 'red', label: {offset: [10, 5]}});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "solutionSteps": [
      {
        "explanation": "For a), differentiate \\( y = x^3 - 6x^2 + 9x \\) once and twice.",
        "workingOut": "y' = 3x^2 - 12x + 9 = 3(x-1)(x-3) \\quad \\text{and} \\quad y'' = 6x - 12 = 6(x-2)"
      },
      {
        "explanation": "For b), differentiate \\( y = x^3 - 3x^2 - 9x + 8 \\).",
        "workingOut": "y' = 3x^2 - 6x - 9 = 3(x-3)(x+1) \\quad \\text{and} \\quad y'' = 6x - 6 = 6(x-1)"
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
        "type": "teacher_review",
        "question": "a) If \\( y = 4x^3 - x^4 + 5 \\), show that \\( y' = 4x^2(3 - x) \\) and \\( y'' = 12x(2 - x) \\).",
        "a": "y' = 12x^2 - 4x^3 = 4x^2(3-x), and y'' = 24x - 12x^2 = 12x(2-x)."
      },
      {
        "id": "y12a-3e-q8b",
        "type": "short_answer",
        "question": "b) By solving \\( y' = 0 \\), find the coordinates of any stationary points. (List points in ascending order of x, e.g. '(0,5), (3,32)')",
        "a": "(0,5), (3,32)"
      },
      {
        "id": "y12a-3e-q8c",
        "type": "teacher_review",
        "question": "c) By examining the sign of \\( y'' \\), establish the nature of the stationary point at \\( x = 3 \\). Why does this method fail for the stationary point at \\( x = 0 \\)?",
        "a": "y''(3) = -36 < 0, so (3,32) is a local maximum. The method fails at x = 0 because y''(0) = 0, which is inconclusive."
      },
      {
        "id": "y12a-3e-q8d",
        "type": "teacher_review",
        "question": "d) Use a table of test values of \\( y' \\) to show that there is a stationary point of inflection at \\( x = 0 \\).",
        "a": "For x < 0, y' > 0 (rising). At x = 0, y' = 0. For 0 < x < 3, y' > 0 (rising). Since the slope does not change sign across x = 0, (0,5) is a horizontal (stationary) point of inflection."
      },
      {
        "id": "y12a-3e-q8e",
        "type": "teacher_review",
        "question": "e) Show that there is a change in concavity at \\( x = 2 \\).",
        "a": "y'' = 12x(2-x). For x < 2 (near 2), y'' > 0 (concave up). For x > 2, y'' < 0 (concave down). Since the sign of y'' changes, (2,21) is a point of inflection."
      },
      {
        "id": "y12a-3e-q8f",
        "type": "teacher_review",
        "question": "f) Sketch the graph of the function, showing all important features.",
        "a": "Quartic curve with local maximum at (3,32), horizontal point of inflection at (0,5), and non-stationary point of inflection at (2,21)."
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Differentiate once and twice.",
        "workingOut": "y' = 12x^2 - 4x^3 = 4x^2(3-x) \\quad \\text{and} \\quad y'' = 24x - 12x^2 = 12x(2-x)"
      },
      {
        "explanation": "Find stationary points by setting \\( y' = 0 \\).",
        "workingOut": "4x^2(3-x) = 0 \\implies x=0, 3 \\implies y(0)=5, \\, y(3)=4(27)-81+5=32"
      },
      {
        "explanation": "Test nature at \\( x=3 \\) and check \\( x=0 \\).",
        "workingOut": "y''(3) = 12(3)(-1) = -36 < 0 \\, (\\text{max}). \\, y''(0) = 0 \\, (\\text{inconclusive})."
      },
      {
        "explanation": "Verify the inflection points where \\( y'' = 0 \\).",
        "workingOut": "12x(2-x) = 0 \\implies x=0, 2. \\, \\text{Sign changes show both are inflection points.}"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-2, 38, 5, -10],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-1.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-5], [0,35]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.2, -1.5, 'x'], {fontSize: 14});\nboard.create('text', [-0.5, 32, 'y'], {fontSize: 14});\nvar f = function(x) { return 4*x*x*x - x*x*x*x + 5; };\nboard.create('functiongraph', [f, -1.2, 4.2], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [3, 32], {name: 'Max(3,32)', size: 3, color: 'red', label: {offset: [10, 10]}});\nboard.create('point', [0, 5], {name: 'Inflection(0,5)', size: 3, color: 'red', label: {offset: [-110, -5]}});\nboard.create('point', [2, 21], {name: 'Inflection(2,21)', size: 3, color: 'red', label: {offset: [10, 5]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y12a-3e-q9",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Using the methods of analysis for polynomial curve sketching, find the key features of the quartic curve \\( y = 3x^4 - 16x^3 + 24x^2 + 10 \\) and sketch it.",
    "a": "Local minimum at (0,10), stationary point of inflection at (2,26), and non-stationary point of inflection at (2/3, 16.52).",
    "t": "Systematic curve sketching with the derivative",
    "solutionSteps": [
      {
        "explanation": "Differentiate once to find turning points.",
        "workingOut": "y' = 12x^3 - 48x^2 + 48x = 12x(x^2 - 4x + 4) = 12x(x - 2)^2"
      },
      {
        "explanation": "Find stationary points by setting \\( y' = 0 \\).",
        "workingOut": "12x(x-2)^2 = 0 \\implies x = 0 \\, (y=10) \\quad \\text{and} \\quad x = 2 \\, (y=26)"
      },
      {
        "explanation": "Differentiate again to analyze concavity and inflections.",
        "workingOut": "y'' = 36x^2 - 96x + 48 = 12(3x - 2)(x - 2)"
      },
      {
        "explanation": "Determine turning point natures and locate inflection points.",
        "workingOut": "y''(0) = 48 > 0 \\implies (0,10) \\text{ is a minimum}. \\, y'' = 0 \\implies x = 2/3, 2. \\text{ Both are inflection points.}"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-1, 35, 4, -5],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-0.8,0], [3.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-2], [0,32]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [3.3, -1.5, 'x'], {fontSize: 14});\nboard.create('text', [-0.5, 30, 'y'], {fontSize: 14});\nvar f = function(x) { return 3*x*x*x*x - 16*x*x*x + 24*x*x + 10; };\nboard.create('functiongraph', [f, -0.5, 3.2], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [0, 10], {name: 'Min(0,10)', size: 3, color: 'red', label: {offset: [10, -5]}});\nboard.create('point', [2, 26], {name: 'Inflection(2,26)', size: 3, color: 'red', label: {offset: [10, 10]}});\nboard.create('point', [0.67, 16.52], {name: 'Inflection(0.67, 16.52)', size: 3, color: 'red', label: {offset: [-160, 5]}});\nboard.unsuspendUpdate();"
      }
    }
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
        "type": "teacher_review",
        "question": "a) Show that the derivative of \\( f(x) = \\frac{2}{x^2 - 9} \\) is \\( f'(x) = -\\frac{4x}{(x^2 - 9)^2} \\).",
        "a": "f'(x) = d/dx[2(x^2-9)^-1] = -2(x^2-9)^-2 * 2x = -4x/(x^2-9)^2."
      },
      {
        "id": "y12a-3e-q10b",
        "type": "short_answer",
        "question": "b) Show that \\( y = f(x) \\) has a stationary point at \\( x = 0 \\). Determine its nature using a slope table. (Format: '(0,-2/9) is a maximum')",
        "a": "(0,-2/9) is a maximum"
      },
      {
        "id": "y12a-3e-q10c",
        "type": "teacher_review",
        "question": "c) Show that the function is even. What sort of symmetry does its graph have?",
        "a": "f(-x) = 2/((-x)^2-9) = 2/(x^2-9) = f(x), so the function is even. The graph is symmetric under reflection across the y-axis."
      },
      {
        "id": "y12a-3e-q10d",
        "type": "short_answer",
        "question": "d) State the domain of the function and the equations of any vertical asymptotes. (Format: 'domain: x not equal to -3 or 3; vertical asymptotes: x = -3, x = 3')",
        "a": "domain: x not equal to -3 or 3; vertical asymptotes: x = -3, x = 3"
      },
      {
        "id": "y12a-3e-q10e",
        "type": "short_answer",
        "question": "e) What value does \\( f(x) \\) approach as \\( x \\to \\infty \\) and as \\( x \\to -\\infty \\)? Hence write down the equation of the horizontal asymptote.",
        "a": "y = 0"
      },
      {
        "id": "y12a-3e-q10f",
        "type": "teacher_review",
        "question": "f) Sketch the graph of \\( y = f(x) \\), showing all important features.",
        "a": "Three branches separated by vertical asymptotes x = -3 and x = 3, with a local maximum in the middle branch at (0, -2/9), and y = 0 as the horizontal asymptote."
      },
      {
        "id": "y12a-3e-q10g",
        "type": "short_answer",
        "question": "g) Use the graph to state the range of the function. (Use '<=' for inequalities, e.g. 'y <= -2/9 or y > 0')",
        "a": "y <= -2/9 or y > 0"
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Differentiate \\( f(x) = 2(x^2 - 9)^{-1} \\) using the chain rule.",
        "workingOut": "f'(x) = -2(x^2 - 9)^{-2} \\cdot (2x) = -\\frac{4x}{(x^2 - 9)^2}"
      },
      {
        "explanation": "Find turning points where \\( f'(x) = 0 \\).",
        "workingOut": "-4x = 0 \\implies x = 0 \\implies f(0) = \\frac{2}{-9} = -\\frac{2}{9}"
      },
      {
        "explanation": "Construct a slope table around \\( x = 0 \\) to identify the nature.",
        "workingOut": "\\begin{array}{c|ccc} x & -1 & 0 & 1 \\\\ \\hline f'(x) & 4/64 > 0 & 0 & -4/64 < 0 \\\\ \\text{Slope} & / & - & \\backslash \\end{array} \\implies \\text{local maximum at } (0, -2/9)"
      },
      {
        "explanation": "Check if the function is even: \\( f(-x) = f(x) \\).",
        "workingOut": "f(-x) = \\frac{2}{(-x)^2 - 9} = \\frac{2}{x^2 - 9} = f(x)"
      },
      {
        "explanation": "Locate vertical asymptotes where the denominator is zero.",
        "workingOut": "x^2 - 9 = 0 \\implies x = \\pm 3"
      },
      {
        "explanation": "Determine horizontal asymptote by evaluating limits.",
        "workingOut": "\\lim_{x \\to \\pm\\infty} \\frac{2}{x^2 - 9} = 0 \\implies y = 0"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-6, 3, 6, -3],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-5.5,0], [5.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-2.5], [0,2.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [5.2, -0.3, 'x'], {fontSize: 14});\nboard.create('text', [-0.5, 2.2, 'y'], {fontSize: 14});\nvar f = function(x) { return 2 / (x*x - 9); };\nboard.create('functiongraph', [f, -6, -3.05], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('functiongraph', [f, -2.95, 2.95], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('functiongraph', [f, 3.05, 6], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('line', [[-3, -1], [-3, 1]], {strokeColor: 'gray', dash: 2, strokeWidth: 1});\nboard.create('line', [[3, -1], [3, 1]], {strokeColor: 'gray', dash: 2, strokeWidth: 1});\nboard.create('point', [0, -0.22], {name: 'Max(0,-2/9)', size: 3, color: 'red', label: {offset: [10, 10]}});\nboard.create('text', [-3.5, 1.5, 'x=-3'], {fontSize: 10, strokeColor: 'gray'});\nboard.create('text', [3.1, 1.5, 'x=3'], {fontSize: 10, strokeColor: 'gray'});\nboard.unsuspendUpdate();"
      }
    }
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
        "type": "teacher_review",
        "question": "a) Show that the derivative of \\( f(x) = \\frac{2x}{x^2 - 9} \\) is \\( f'(x) = -\\frac{2(x^2 + 9)}{(x^2 - 9)^2} \\).",
        "a": "f'(x) = (2(x^2-9) - 2x(2x))/(x^2-9)^2 = (2x^2 - 18 - 4x^2)/(x^2-9)^2 = -2(x^2+9)/(x^2-9)^2."
      },
      {
        "id": "y12a-3e-q11b",
        "type": "teacher_review",
        "question": "b) Explain why the curve \\( y = f(x) \\) has no stationary points, and why the curve is always decreasing.",
        "a": "Since x^2+9 > 0 and (x^2-9)^2 > 0 for all x in the domain, f'(x) = -2(x^2+9)/(x^2-9)^2 < 0. Thus, there are no turning points and the curve is always decreasing."
      },
      {
        "id": "y12a-3e-q11c",
        "type": "short_answer",
        "question": "c) Given that the second derivative is \\( f''(x) = \\frac{4x(x^2 + 27)}{(x^2 - 9)^3} \\), show that \\( (0, 0) \\) is a point of inflection. Find the gradient of the tangent at this point.",
        "a": "-2/9"
      },
      {
        "id": "y12a-3e-q11d",
        "type": "short_answer",
        "question": "d) State the domain of the function and the equations of any vertical asymptotes. (Format: 'domain: x not equal to -3 or 3; vertical asymptotes: x = -3, x = 3')",
        "a": "domain: x not equal to -3 or 3; vertical asymptotes: x = -3, x = 3"
      },
      {
        "id": "y12a-3e-q11e",
        "type": "short_answer",
        "question": "e) What value does \\( f(x) \\) approach as \\( x \\to \\pm\\infty \\)? Hence write down the equation of the horizontal asymptote.",
        "a": "y = 0"
      },
      {
        "id": "y12a-3e-q11f",
        "type": "teacher_review",
        "question": "f) Show that the function is odd. What symmetry does its graph have?",
        "a": "f(-x) = 2(-x)/((-x)^2-9) = -2x/(x^2-9) = -f(x), so the function is odd. The graph is symmetric under rotational symmetry of 180 degrees about the origin."
      },
      {
        "id": "y12a-3e-q11g",
        "type": "teacher_review",
        "question": "g) Use a table of test values of \\( y \\) to analyse the sign of the function.",
        "a": "For x < -3: y < 0; for -3 < x < 0: y > 0; for 0 < x < 3: y < 0; for x > 3: y > 0."
      },
      {
        "id": "y12a-3e-q11h",
        "type": "teacher_review",
        "question": "h) Sketch the graph of \\( y = f(x) \\), showing all important features.",
        "a": "Three branches separated by vertical asymptotes x = -3 and x = 3, passing through (0,0) with gradient -2/9, and y = 0 as the horizontal asymptote."
      },
      {
        "id": "y12a-3e-q11i",
        "type": "short_answer",
        "question": "i) Use the graph to state the range of the function.",
        "a": "all real numbers"
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Use the quotient rule to differentiate the function.",
        "workingOut": "f'(x) = \\frac{2(x^2-9) - 2x(2x)}{(x^2-9)^2} = \\frac{2x^2 - 18 - 4x^2}{(x^2-9)^2} = -\\frac{2(x^2 + 9)}{(x^2-9)^2}"
      },
      {
        "explanation": "Determine the sign of the derivative to analyze stationary points.",
        "workingOut": "2(x^2+9) > 0 \\text{ and } (x^2-9)^2 > 0 \\implies f'(x) < 0 \\text{ for all } x \\neq \\pm 3"
      },
      {
        "explanation": "Find inflection points using \\( f''(x) = 0 \\) and evaluating the inflection gradient.",
        "workingOut": "4x(x^2+27)=0 \\implies x=0 \\implies f(0)=0. \\, f'(0) = -\\frac{18}{81} = -\\frac{2}{9}"
      },
      {
        "explanation": "State the domain and identify asymptotes.",
        "workingOut": "x \\neq \\pm 3 \\implies x=-3 \\text{ and } x=3 \\text{ are vertical asymptotes.}"
      },
      {
        "explanation": "Evaluate limits at infinity to find horizontal asymptotes.",
        "workingOut": "\\lim_{x\\to\\pm\\infty} \\frac{2x}{x^2-9} = 0 \\implies y = 0"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-6, 4, 6, -4],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-5.5,0], [5.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.5], [0,3.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [5.2, -0.3, 'x'], {fontSize: 14});\nboard.create('text', [-0.5, 3.2, 'y'], {fontSize: 14});\nvar f = function(x) { return 2*x / (x*x - 9); };\nboard.create('functiongraph', [f, -6, -3.05], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('functiongraph', [f, -2.95, 2.95], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('functiongraph', [f, 3.05, 6], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('line', [[-3, -1], [-3, 1]], {strokeColor: 'gray', dash: 2, strokeWidth: 1});\nboard.create('line', [[3, -1], [3, 1]], {strokeColor: 'gray', dash: 2, strokeWidth: 1});\nboard.create('point', [0, 0], {name: 'Inflection(0,0)', size: 3, color: 'red', label: {offset: [10, 5]}});\nboard.create('text', [-3.5, 2.5, 'x=-3'], {fontSize: 10, strokeColor: 'gray'});\nboard.create('text', [3.1, 2.5, 'x=3'], {fontSize: 10, strokeColor: 'gray'});\nboard.unsuspendUpdate();"
      }
    }
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
        "type": "teacher_review",
        "question": "a) Show that the derivative of \\( y = x + \\frac{4}{x} \\) is \\( y' = \\frac{x^2 - 4}{x^2} \\).",
        "a": "y' = d/dx(x) + d/dx(4x^-1) = 1 - 4/x^2 = (x^2-4)/x^2."
      },
      {
        "id": "y12a-3e-q12b",
        "type": "short_answer",
        "question": "b) Find the stationary points and determine their nature. (Format: '(-2,-4) is a maximum, (2,4) is a minimum')",
        "a": "(-2,-4) is a maximum, (2,4) is a minimum"
      },
      {
        "id": "y12a-3e-q12c",
        "type": "teacher_review",
        "question": "c) Show that the function is odd. What symmetry does its graph have?",
        "a": "f(-x) = -x + 4/(-x) = -(x + 4/x) = -f(x), so the function is odd. The graph displays rotational point symmetry of 180 degrees about the origin."
      },
      {
        "id": "y12a-3e-q12d",
        "type": "short_answer",
        "question": "d) State the domain of the function and the equation of the vertical asymptote. (Format: 'domain: x not equal to 0; vertical asymptote: x = 0')",
        "a": "domain: x not equal to 0; vertical asymptote: x = 0"
      },
      {
        "id": "y12a-3e-q12e",
        "type": "teacher_review",
        "question": "e) Use a table of test values of \\( y \\) to analyse the sign of the function.",
        "a": "For x < 0, y < 0. For x > 0, y > 0."
      },
      {
        "id": "y12a-3e-q12f",
        "type": "teacher_review",
        "question": "f) Sketch the graph of the function. (You may assume that the diagonal line \\( y = x \\) is an oblique asymptote to the curve.)",
        "a": "Sketch curve with vertical asymptote at x = 0 and oblique asymptote at y = x, with a local maximum at (-2,-4) and a local minimum at (2,4)."
      },
      {
        "id": "y12a-3e-q12g",
        "type": "short_answer",
        "question": "g) Write down the range of the function. (Format: 'y <= -4 or y >= 4')",
        "a": "y <= -4 or y >= 4"
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Differentiate \\( y = x + 4x^{-1} \\).",
        "workingOut": "y' = 1 - 4x^{-2} = 1 - \\frac{4}{x^2} = \\frac{x^2 - 4}{x^2}"
      },
      {
        "explanation": "Set \\( y' = 0 \\) to find turning points.",
        "workingOut": "\\frac{x^2-4}{x^2} = 0 \\implies x^2 = 4 \\implies x = \\pm 2 \\implies y(2)=4, \\, y(-2)=-4"
      },
      {
        "explanation": "Use the second derivative to determine nature.",
        "workingOut": "y'' = \\frac{8}{x^3}. \\, y''(2) = 1 > 0 \\implies (2,4) \\text{ is min}; \\, y''(-2) = -1 < 0 \\implies (-2,-4) \\text{ is max}"
      },
      {
        "explanation": "Check symmetry: \\( f(-x) = -f(x) \\).",
        "workingOut": "f(-x) = -x + \\frac{4}{-x} = -\\left(x + \\frac{4}{x}\\right) = -f(x)"
      },
      {
        "explanation": "Identify asymptotes and range.",
        "workingOut": "x=0 \\text{ is a vertical asymptote}. \\, y=x \\text{ is an oblique asymptote}. \\text{ Range: } y \\le -4 \\text{ or } y \\ge 4"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-6, 8, 6, -8],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-5.5,0], [5.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-7.5], [0,7.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [5.2, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.5, 7.0, 'y'], {fontSize: 14});\nvar f = function(x) { return x + 4/x; };\nboard.create('functiongraph', [f, -6, -0.05], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('functiongraph', [f, 0.05, 6], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('line', [[0, -1], [0, 1]], {strokeColor: 'gray', dash: 2, strokeWidth: 1});\nboard.create('line', [[-6, -6], [6, 6]], {strokeColor: 'gray', dash: 2, strokeWidth: 1});\nboard.create('point', [2, 4], {name: 'Min(2,4)', size: 3, color: 'red', label: {offset: [10, -10]}});\nboard.create('point', [-2, -4], {name: 'Max(-2,-4)', size: 3, color: 'red', label: {offset: [-35, 15]}});\nboard.create('text', [3.5, 4.2, 'y=x'], {fontSize: 10, strokeColor: 'gray'});\nboard.unsuspendUpdate();"
      }
    }
  }
];
