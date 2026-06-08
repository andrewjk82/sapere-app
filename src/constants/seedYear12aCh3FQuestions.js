export const Y12A_CH3F_QUESTIONS = [
  {
    "id": "y12a-3f-q1a",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "For the curve shown in the graph, classify each labeled point \\( A \\) and \\( B \\) as one of the following: global maximum, global minimum, local maximum, local minimum, or horizontal point of inflection.",
    "a": "A: local maximum, B: local minimum",
    "t": "Global maximum and minimum",
    "solutionSteps": [
      {
        "explanation": "Identify the features of point \\( A \\).",
        "workingOut": "\\text{Point } A \\text{ is a turning point that is higher than nearby points, so it is a local maximum.}"
      },
      {
        "explanation": "Identify the features of point \\( B \\).",
        "workingOut": "\\text{Point } B \\text{ is a turning point that is lower than nearby points, so it is a local minimum.}"
      },
      {
        "explanation": "Confirm if they are global extrema.",
        "workingOut": "\\text{Since the curve goes to } \\infty \\text{ on the right and } -\\infty \\text{ on the left, there are no global extrema.}"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-3, 4, 3, -4],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-2.5,0], [2.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.5], [0,3.5]], {strokeColor: 'black', strokeWidth: 1});\nvar f = function(x) { return x*x*x - 3*x; };\nboard.create('functiongraph', [f, -2.2, 2.2], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [-1, 2], {name: 'A', size: 3, color: 'red', label: {offset: [-5, 12]}});\nboard.create('point', [1, -2], {name: 'B', size: 3, color: 'red', label: {offset: [-5, -15]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y12a-3f-q1b",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "For the curve shown in the graph on the closed interval \\( [0, 4] \\), classify each labeled point \\( C, D, E, \\) and \\( F \\) as one of the following: global maximum, global minimum, local maximum, local minimum, or horizontal point of inflection.",
    "a": "C: local maximum, D: local minimum, E: global maximum, F: global minimum",
    "t": "Global maximum and minimum",
    "solutionSteps": [
      {
        "explanation": "Examine point \\( C \\) at the left endpoint/turning point.",
        "workingOut": "\\text{Point } C \\text{ is a local maximum (turning point).}"
      },
      {
        "explanation": "Examine turning point \\( D \\) and \\( E \\).",
        "workingOut": "\\text{Point } D \\text{ is a local minimum, and Point } E \\text{ is a local maximum which is the highest point on the interval, hence global maximum.}"
      },
      {
        "explanation": "Examine the right endpoint \\( F \\).",
        "workingOut": "\\text{Point } F \\text{ is the lowest overall point on the restricted domain, making it the global minimum.}"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-0.5, 6, 4.5, -2],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-0.2,0], [4.2,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-1.5], [0,5.5]], {strokeColor: 'black', strokeWidth: 1});\nvar f = function(x) { return 0.5 * (x-1)*(x-1)*(x-4) + 4; };\nboard.create('functiongraph', [f, 0, 4], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [0, 2], {name: 'C', size: 3, color: 'red', label: {offset: [-15, 10]}});\nboard.create('point', [1, 4], {name: 'E', size: 3, color: 'red', label: {offset: [-5, 12]}});\nboard.create('point', [3, 2], {name: 'D', size: 3, color: 'red', label: {offset: [10, -5]}});\nboard.create('point', [4, 4], {name: 'F', size: 3, color: 'red', label: {offset: [10, 10]}});\n// Note: Adjustment of F as a boundary point\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y12a-3f-q1c",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "For the curve shown in the graph, classify each labeled point \\( G \\) and \\( H \\) as one of the following: global maximum, global minimum, local maximum, local minimum, or horizontal point of inflection.",
    "a": "G: global maximum, H: horizontal point of inflection",
    "t": "Global maximum and minimum",
    "solutionSteps": [
      {
        "explanation": "Analyze point \\( G \\).",
        "workingOut": "\\text{Point } G \\text{ is a turning point and is the absolute highest point on this graph, so it is the global maximum.}"
      },
      {
        "explanation": "Analyze point \\( H \\).",
        "workingOut": "\\text{At point } H \\text{, the tangent is horizontal but the curve does not turn; it continues to fall, so it is a horizontal point of inflection.}"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-3, 5, 4, -4],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-2.5,0], [3.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.5], [0,4.5]], {strokeColor: 'black', strokeWidth: 1});\nvar f = function(x) { return 3 - 0.2*x*x*x - 0.5*x*x; };\nboard.create('functiongraph', [f, -2.5, 3], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [0, 3], {name: 'G', size: 3, color: 'red', label: {offset: [-5, 12]}});\nboard.create('point', [1, 1.5], {name: 'H', size: 3, color: 'red', label: {offset: [10, 5]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y12a-3f-q1d",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "For the curve shown in the graph, classify each labeled point \\( I \\) and \\( J \\) as one of the following: global maximum, global minimum, local maximum, local minimum, or horizontal point of inflection.",
    "a": "I: horizontal point of inflection, J: global minimum",
    "t": "Global maximum and minimum",
    "solutionSteps": [
      {
        "explanation": "Analyze point \\( I \\).",
        "workingOut": "\\text{The tangent at } I \\text{ is horizontal and the curve continues to go down, so it is a horizontal point of inflection.}"
      },
      {
        "explanation": "Analyze point \\( J \\).",
        "workingOut": "\\text{Point } J \\text{ is the lowest turning point on the entire curve, making it the global minimum.}"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-4, 6, 4, -4],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-3.5,0], [3.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.5], [0,5.5]], {strokeColor: 'black', strokeWidth: 1});\nvar f = function(x) { return 0.25*x*x*x*x + 0.5*x*x*x - 2*x; };\nboard.create('functiongraph', [f, -3.2, 2.1], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [-1.5, 2.5], {name: 'I', size: 3, color: 'red', label: {offset: [-15, 10]}});\nboard.create('point', [1, -1.25], {name: 'J', size: 3, color: 'red', label: {offset: [-5, -15]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y12a-3f-q2a",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Sketch the function \\( y = x^2 - 1 \\) for the restricted domain \\( -3 \\le x \\le 3 \\). Find its global minimum and global maximum in this domain. (Format: 'global minimum: min_val at x = min_x, global maximum: max_val at x = max_x1, max_x2')",
    "a": "global minimum: -1 at x = 0, global maximum: 8 at x = -3, 3",
    "t": "Global maximum and minimum",
    "solutionSteps": [
      {
        "explanation": "Find the vertex (local minimum) by setting \\( y' = 0 \\).",
        "workingOut": "y' = 2x = 0 \\implies x = 0 \\implies y(0) = -1"
      },
      {
        "explanation": "Evaluate the function at the boundary endpoints \\( x = -3 \\) and \\( x = 3 \\).",
        "workingOut": "y(-3) = (-3)^2 - 1 = 8 \\quad \\text{and} \\quad y(3) = 3^2 - 1 = 8"
      },
      {
        "explanation": "Compare the turning point value with the boundary values to state the global extrema.",
        "workingOut": "-1 < 8 \\implies \\text{global min: } -1 \\text{ at } x=0, \\, \\text{global max: } 8 \\text{ at } x = \\pm 3"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-4, 10, 4, -3],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-3.8,0], [3.8,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-2], [0,9]], {strokeColor: 'black', strokeWidth: 1});\nvar f = function(x) { return x*x - 1; };\nboard.create('functiongraph', [f, -3, 3], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [0, -1], {name: 'Min(0,-1)', size: 3, color: 'red', label: {offset: [10, -10]}});\nboard.create('point', [-3, 8], {name: '(-3,8)', size: 3, color: 'red', label: {offset: [-15, 10]}});\nboard.create('point', [3, 8], {name: '(3,8)', size: 3, color: 'red', label: {offset: [10, 10]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y12a-3f-q2b",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Sketch the function \\( y = 6 - 2x \\) for the restricted domain \\( -1 \\le x \\le 4 \\). Find its global minimum and global maximum in this domain. (Format: 'global minimum: min_val at x = min_x, global maximum: max_val at x = max_x')",
    "a": "global minimum: -2 at x = 4, global maximum: 8 at x = -1",
    "t": "Global maximum and minimum",
    "solutionSteps": [
      {
        "explanation": "Evaluate the linear function at the left boundary \\( x = -1 \\).",
        "workingOut": "y(-1) = 6 - 2(-1) = 8"
      },
      {
        "explanation": "Evaluate the linear function at the right boundary \\( x = 4 \\).",
        "workingOut": "y(4) = 6 - 2(4) = -2"
      },
      {
        "explanation": "Since the function is linear with a negative gradient, it is strictly decreasing. The extrema must occur at the boundary endpoints.",
        "workingOut": "\\text{global min: } -2 \\text{ at } x = 4, \\, \\text{global max: } 8 \\text{ at } x = -1"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-2, 10, 5, -4],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-1.8,0], [4.8,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3], [0,9]], {strokeColor: 'black', strokeWidth: 1});\nvar f = function(x) { return 6 - 2*x; };\nboard.create('functiongraph', [f, -1, 4], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [-1, 8], {name: 'Max(-1,8)', size: 3, color: 'red', label: {offset: [10, 10]}});\nboard.create('point', [4, -2], {name: 'Min(4,-2)', size: 3, color: 'red', label: {offset: [10, 10]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y12a-3f-q2c",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Sketch the function \\( y = \\sqrt{25 - x^2} \\) for the domain \\( -5 \\le x \\le 5 \\). Find its global minimum and global maximum in this domain. (Format: 'global minimum: min_val at x = min_x1, min_x2, global maximum: max_val at x = max_x')",
    "a": "global minimum: 0 at x = -5, 5, global maximum: 5 at x = 0",
    "t": "Global maximum and minimum",
    "solutionSteps": [
      {
        "explanation": "Identify the curve as a semi-circle centered at the origin with radius 5.",
        "workingOut": "x^2 + y^2 = 25 \\quad (y \\ge 0)"
      },
      {
        "explanation": "Evaluate the function at the boundary endpoints \\( x = \\pm 5 \\).",
        "workingOut": "y(-5) = 0 \\quad \\text{and} \\quad y(5) = 0"
      },
      {
        "explanation": "Find the maximum turning point at \\( x = 0 \\).",
        "workingOut": "y(0) = \\sqrt{25} = 5"
      },
      {
        "explanation": "State the global extrema.",
        "workingOut": "\\text{global min: } 0 \\text{ at } x = -5, \\, 5 \\quad \\text{and} \\quad \\text{global max: } 5 \\text{ at } x = 0"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-6, 7, 6, -2],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-5.8,0], [5.8,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-1], [0,6]], {strokeColor: 'black', strokeWidth: 1});\nvar f = function(x) { return Math.sqrt(25 - x*x); };\nboard.create('functiongraph', [f, -5, 5], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [0, 5], {name: 'Max(0,5)', size: 3, color: 'red', label: {offset: [10, 10]}});\nboard.create('point', [-5, 0], {name: '(-5,0)', size: 3, color: 'red', label: {offset: [-15, -15]}});\nboard.create('point', [5, 0], {name: '(5,0)', size: 3, color: 'red', label: {offset: [10, -15]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y12a-3f-q2d",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Sketch the absolute value function \\( y = |x - 2| \\) for the domain \\( -2 \\le x \\le 5 \\). Find its global minimum and global maximum in this domain. (Format: 'global minimum: min_val at x = min_x, global maximum: max_val at x = max_x')",
    "a": "global minimum: 0 at x = 2, global maximum: 4 at x = -2",
    "t": "Global maximum and minimum",
    "solutionSteps": [
      {
        "explanation": "Find the vertex (minimum) where the expression inside the absolute value is zero.",
        "workingOut": "x - 2 = 0 \\implies x = 2 \\implies y(2) = 0"
      },
      {
        "explanation": "Evaluate the function at the boundary endpoints \\( x = -2 \\) and \\( x = 5 \\).",
        "workingOut": "y(-2) = |-2 - 2| = 4 \\quad \\text{and} \\quad y(5) = |5 - 2| = 3"
      },
      {
        "explanation": "Compare the boundary values to find the global maximum.",
        "workingOut": "4 > 3 \\implies \\text{global max: } 4 \\text{ at } x = -2. \\, \\text{Global min is } 0 \\text{ at } x = 2."
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-3, 6, 6, -2],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-2.8,0], [5.8,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-1], [0,5]], {strokeColor: 'black', strokeWidth: 1});\nvar f = function(x) { return Math.abs(x - 2); };\nboard.create('functiongraph', [f, -2, 5], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [2, 0], {name: 'Min(2,0)', size: 3, color: 'red', label: {offset: [-15, -15]}});\nboard.create('point', [-2, 4], {name: '(-2,4)', size: 3, color: 'red', label: {offset: [-15, 10]}});\nboard.create('point', [5, 3], {name: '(5,3)', size: 3, color: 'red', label: {offset: [10, 10]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y12a-3f-q2e",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Sketch the function \\( y = \\sqrt{2x} \\) for \\( 0 \\le x \\le 18 \\). Find its global minimum and global maximum in this domain. (Format: 'global minimum: min_val at x = min_x, global maximum: max_val at x = max_x')",
    "a": "global minimum: 0 at x = 0, global maximum: 6 at x = 18",
    "t": "Global maximum and minimum",
    "solutionSteps": [
      {
        "explanation": "Evaluate the function at the left endpoint \\( x = 0 \\).",
        "workingOut": "y(0) = \\sqrt{0} = 0"
      },
      {
        "explanation": "Evaluate the function at the right endpoint \\( x = 18 \\).",
        "workingOut": "y(18) = \\sqrt{2(18)} = \\sqrt{36} = 6"
      },
      {
        "explanation": "Since the square root function is strictly increasing, the global minimum is at the left boundary and the global maximum is at the right boundary.",
        "workingOut": "\\text{global min: } 0 \\text{ at } x = 0, \\, \\text{global max: } 6 \\text{ at } x = 18"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-2, 8, 20, -2],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-1.8,0], [19.8,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-1], [0,7]], {strokeColor: 'black', strokeWidth: 1});\nvar f = function(x) { return Math.sqrt(2*x); };\nboard.create('functiongraph', [f, 0, 18], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [0, 0], {name: 'Min(0,0)', size: 3, color: 'red', label: {offset: [-15, -15]}});\nboard.create('point', [18, 6], {name: 'Max(18,6)', size: 3, color: 'red', label: {offset: [-20, 15]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y12a-3f-q2f",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Sketch the function \\( y = \\frac{4}{x} \\) for the negative restricted domain \\( -4 \\le x \\le -2 \\). Find its global minimum and global maximum in this domain. (Format: 'global minimum: min_val at x = min_x, global maximum: max_val at x = max_x')",
    "a": "global minimum: -2 at x = -2, global maximum: -1 at x = -4",
    "t": "Global maximum and minimum",
    "solutionSteps": [
      {
        "explanation": "Evaluate the hyperbola at the left endpoint \\( x = -4 \\).",
        "workingOut": "y(-4) = \\frac{4}{-4} = -1"
      },
      {
        "explanation": "Evaluate the hyperbola at the right endpoint \\( x = -2 \\).",
        "workingOut": "y(-2) = \\frac{4}{-2} = -2"
      },
      {
        "explanation": "Since \\( y = \\frac{4}{x} \\) is decreasing on negative values, compare endpoints to identify global extrema.",
        "workingOut": "-2 < -1 \\implies \\text{global min: } -2 \\text{ at } x = -2, \\, \\text{global max: } -1 \\text{ at } x = -4"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-5, 1, 1, -4],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-4.8,0], [0.8,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.8], [0,0.8]], {strokeColor: 'black', strokeWidth: 1});\nvar f = function(x) { return 4/x; };\nboard.create('functiongraph', [f, -4, -2], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [-4, -1], {name: 'Max(-4,-1)', size: 3, color: 'red', label: {offset: [-35, 15]}});\nboard.create('point', [-2, -2], {name: 'Min(-2,-2)', size: 3, color: 'red', label: {offset: [10, -10]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y12a-3f-q2g",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Consider the piecewise function:\n\\( y = -2 \\) for \\( x < -3 \\)\n\\( y = x + 1 \\) for \\( -3 \\le x < 2 \\)\n\\( y = 3 \\) for \\( x \\ge 2 \\)\nSketch the function and state its global minimum and global maximum. (Format: 'global minimum: min_val for x <= min_range, global maximum: max_val for x >= max_range')",
    "a": "global minimum: -2 for x <= -3, global maximum: 3 for x >= 2",
    "t": "Global maximum and minimum",
    "solutionSteps": [
      {
        "explanation": "Analyze the range of the function in the first domain \\( x < -3 \\).",
        "workingOut": "y = -2"
      },
      {
        "explanation": "Analyze the range of the function in the second domain \\( -3 \\le x < 2 \\).",
        "workingOut": "\\text{For } x = -3, \\, y = -2. \\, \\text{As } x \\to 2, \\, y \\to 3. \\text{ Thus, } y \\text{ ranges from } -2 \\text{ to } 3."
      },
      {
        "explanation": "Analyze the range of the function in the third domain \\( x \\ge 2 \\).",
        "workingOut": "y = 3"
      },
      {
        "explanation": "Identify the overall minimum and maximum of the combined piecewise graph.",
        "workingOut": "\\text{Minimum is } -2 \\text{ for all } x \\le -3 \\quad \\text{and} \\quad \\text{maximum is } 3 \\text{ for all } x \\ge 2"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-5, 5, 4, -4],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-4.8,0], [3.8,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.5], [0,4.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('segment', [[-5,-2], [-3,-2]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('segment', [[-3,-2], [2,3]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('segment', [[2,3], [4,3]], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [-3, -2], {size: 2, color: 'blue', name: '', label: {offset: [0, 10]}});\nboard.create('point', [2, 3], {size: 2, color: 'blue', name: '', label: {offset: [0, 10]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y12a-3f-q3a",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Sketch the graph of \\( y = x^2 - 6x + 5 \\) for \\( 0 \\le x \\le 7 \\), clearly indicating any stationary points. Determine the absolute minimum and absolute maximum of the function in this domain. (Format: 'absolute minimum: min_val at x = min_x, absolute maximum: max_val at x = max_x')",
    "a": "absolute minimum: -4 at x = 3, absolute maximum: 12 at x = 7",
    "t": "Global maximum and minimum",
    "solutionSteps": [
      {
        "explanation": "Differentiate once to find any stationary points.",
        "workingOut": "y' = 2x - 6 = 0 \\implies x = 3"
      },
      {
        "explanation": "Evaluate the \\( y \\)-coordinate at the turning point.",
        "workingOut": "y(3) = 3^2 - 6(3) + 5 = -4"
      },
      {
        "explanation": "Evaluate the function at the boundary endpoints \\( x = 0 \\) and \\( x = 7 \\).",
        "workingOut": "y(0) = 5 \\quad \\text{and} \\quad y(7) = 49 - 42 + 5 = 12"
      },
      {
        "explanation": "Compare turning points and boundary values to identify absolute extrema.",
        "workingOut": "\\text{Values are } y(3) = -4, \\, y(0) = 5, \\, y(7) = 12 \\implies \\text{min: } -4 \\text{ at } x=3, \\, \\text{max: } 12 \\text{ at } x=7"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-2, 14, 8, -6],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-1.5,0], [7.8,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-5], [0,13]], {strokeColor: 'black', strokeWidth: 1});\nvar f = function(x) { return x*x - 6*x + 5; };\nboard.create('functiongraph', [f, 0, 7], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [3, -4], {name: 'Min(3,-4)', size: 3, color: 'red', label: {offset: [10, -10]}});\nboard.create('point', [0, 5], {name: '(0,5)', size: 3, color: 'red', label: {offset: [10, 10]}});\nboard.create('point', [7, 12], {name: 'Max(7,12)', size: 3, color: 'red', label: {offset: [-35, 15]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y12a-3f-q3b",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Sketch the graph of \\( y = x^3 - 3x^2 + 2 \\) for \\( -2 \\le x \\le 3 \\), clearly indicating any stationary points. Determine the absolute minimum and absolute maximum of the function in this domain. (Format: 'absolute minimum: min_val at x = min_x, absolute maximum: max_val at x = max_x1, max_x2')",
    "a": "absolute minimum: -18 at x = -2, absolute maximum: 2 at x = 0, 3",
    "t": "Global maximum and minimum",
    "solutionSteps": [
      {
        "explanation": "Differentiate the cubic function to find stationary points.",
        "workingOut": "y' = 3x^2 - 6x = 3x(x - 2) = 0 \\implies x = 0, \\, 2"
      },
      {
        "explanation": "Evaluate the function at the turning points.",
        "workingOut": "y(0) = 2 \\quad \\text{and} \\quad y(2) = 8 - 12 + 2 = -2"
      },
      {
        "explanation": "Evaluate the function at the boundaries \\( x = -2 \\) and \\( x = 3 \\).",
        "workingOut": "y(-2) = -8 - 12 + 2 = -18 \\quad \\text{and} \\quad y(3) = 27 - 27 + 2 = 2"
      },
      {
        "explanation": "Compare all values to find the absolute minimum and maximum.",
        "workingOut": "\\text{Values: } \\{-18, -2, 2, 2\\} \\implies \\text{min: } -18 \\text{ at } x=-2, \\, \\text{max: } 2 \\text{ at } x=0, 3"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-3, 6, 4, -22],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-2.5,0], [3.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-20], [0,4]], {strokeColor: 'black', strokeWidth: 1});\nvar f = function(x) { return x*x*x - 3*x*x + 2; };\nboard.create('functiongraph', [f, -2, 3], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [0, 2], {name: 'Max(0,2)', size: 3, color: 'red', label: {offset: [10, 10]}});\nboard.create('point', [2, -2], {name: 'Min(2,-2)', size: 3, color: 'red', label: {offset: [10, -10]}});\nboard.create('point', [-2, -18], {name: '(-2,-18)', size: 3, color: 'red', label: {offset: [10, -10]}});\nboard.create('point', [3, 2], {name: '(3,2)', size: 3, color: 'red', label: {offset: [10, 10]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y12a-3f-q3c",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Sketch the graph of \\( y = 4x^3 - 3x + 1 \\) for \\( -1 \\le x \\le 1 \\), clearly indicating any stationary points. Determine the absolute minimum and absolute maximum of the function in this domain. (Format: 'absolute minimum: min_val at x = min_x1, min_x2, absolute maximum: max_val at x = max_x1, max_x2')",
    "a": "absolute minimum: 0 at x = -1, 0.5, absolute maximum: 2 at x = -0.5, 1",
    "t": "Global maximum and minimum",
    "solutionSteps": [
      {
        "explanation": "Differentiate once to find stationary points.",
        "workingOut": "y' = 12x^2 - 3 = 3(4x^2 - 1) = 0 \\implies x = \\pm 0.5"
      },
      {
        "explanation": "Evaluate the \\( y \\)-coordinates at the stationary points.",
        "workingOut": "y(-0.5) = 4(-0.125) - 3(-0.5) + 1 = 2 \\quad \\text{and} \\quad y(0.5) = 4(0.125) - 3(0.5) + 1 = 0"
      },
      {
        "explanation": "Evaluate the function at the domain boundaries \\( x = -1 \\) and \\( x = 1 \\).",
        "workingOut": "y(-1) = 4(-1) - 3(-1) + 1 = 0 \\quad \\text{and} \\quad y(1) = 4(1) - 3(1) + 1 = 2"
      },
      {
        "explanation": "Compare values to identify the absolute minimum and maximum.",
        "workingOut": "\\text{Values: } \\{0, 2, 0, 2\\} \\implies \\text{min: } 0 \\text{ at } x=-1, 0.5, \\, \\text{max: } 2 \\text{ at } x=-0.5, 1"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-1.5, 3, 1.5, -1],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-1.3,0], [1.3,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-0.8], [0,2.5]], {strokeColor: 'black', strokeWidth: 1});\nvar f = function(x) { return 4*x*x*x - 3*x + 1; };\nboard.create('functiongraph', [f, -1, 1], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [-0.5, 2], {name: 'Max(-0.5,2)', size: 3, color: 'red', label: {offset: [-20, 15]}});\nboard.create('point', [0.5, 0], {name: 'Min(0.5,0)', size: 3, color: 'red', label: {offset: [10, 10]}});\nboard.create('point', [-1, 0], {name: '(-1,0)', size: 3, color: 'red', label: {offset: [-15, -15]}});\nboard.create('point', [1, 2], {name: '(1,2)', size: 3, color: 'red', label: {offset: [10, 10]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y12a-3f-q3d",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Sketch the graph of \\( y = x^3 - 3x^2 + 3x \\) for \\( 0 \\le x \\le 2 \\), clearly indicating any stationary points. Determine the absolute minimum and absolute maximum of the function in this domain. (Format: 'absolute minimum: min_val at x = min_x, absolute maximum: max_val at x = max_x')",
    "a": "absolute minimum: 0 at x = 0, absolute maximum: 2 at x = 2",
    "t": "Global maximum and minimum",
    "solutionSteps": [
      {
        "explanation": "Differentiate to check for turning points.",
        "workingOut": "y' = 3x^2 - 6x + 3 = 3(x - 1)^2 = 0 \\implies x = 1"
      },
      {
        "explanation": "Verify the nature of the stationary point at \\( x = 1 \\).",
        "workingOut": "y' \\ge 0 \\text{ everywhere} \\implies \\text{it is a horizontal point of inflection at } (1, 1)"
      },
      {
        "explanation": "Evaluate endpoints since the curve is strictly increasing.",
        "workingOut": "y(0) = 0 \\quad \\text{and} \\quad y(2) = 8 - 12 + 6 = 2"
      },
      {
        "explanation": "Identify absolute minimum and absolute maximum.",
        "workingOut": "\\text{global min: } 0 \\text{ at } x=0, \\, \\text{global max: } 2 \\text{ at } x=2"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-1, 3, 3, -1],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-0.8,0], [2.8,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-0.8], [0,2.8]], {strokeColor: 'black', strokeWidth: 1});\nvar f = function(x) { return x*x*x - 3*x*x + 3*x; };\nboard.create('functiongraph', [f, 0, 2], {strokeColor: 'blue', strokeWidth: 2});\nboard.create('point', [1, 1], {name: 'Inflection(1,1)', size: 3, color: 'red', label: {offset: [10, 5]}});\nboard.create('point', [0, 0], {name: 'Min(0,0)', size: 3, color: 'red', label: {offset: [-15, -15]}});\nboard.create('point', [2, 2], {name: 'Max(2,2)', size: 3, color: 'red', label: {offset: [10, 10]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y12a-3f-q4a",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 240,
    "question": "For the function \\( y = x^4 - 2x^2 + 3 \\) defined on the domain \\( 0.5 \\le x \\le 2 \\), find (i) any local maxima or minima and (ii) the global maximum and minimum. (Format: 'local minimum: min_val at x = min_x; global minimum: min_val at x = min_x, global maximum: max_val at x = max_x')",
    "a": "local minimum: 2 at x = 1; global minimum: 2 at x = 1, global maximum: 11 at x = 2",
    "t": "Global maximum and minimum",
    "solutionSteps": [
      {
        "explanation": "Differentiate the function to locate turning points.",
        "workingOut": "y' = 4x^3 - 4x = 4x(x - 1)(x + 1) = 0 \\implies x = 0, \\, \pm 1"
      },
      {
        "explanation": "Identify which turning points lie inside the domain \\( 0.5 \\le x \\le 2 \\).",
        "workingOut": "x = 1 \\text{ is the only stationary point in } [0.5, 2]"
      },
      {
        "explanation": "Examine the turning point's nature and coordinate.",
        "workingOut": "y''(1) = 12(1)^2 - 4 = 8 > 0 \\implies \\text{local minimum at } (1, 2)"
      },
      {
        "explanation": "Evaluate the function at the domain boundaries.",
        "workingOut": "y(0.5) = 0.0625 - 0.5 + 3 = 2.5625 \\quad \\text{and} \\quad y(2) = 16 - 8 + 3 = 11"
      },
      {
        "explanation": "Compare turning points and boundaries to state the global maximum and minimum.",
        "workingOut": "\\text{global min: } 2 \\text{ at } x=1, \\, \\text{global max: } 11 \\text{ at } x=2"
      }
    ]
  },
  {
    "id": "y12a-3f-q4b",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 240,
    "question": "For the function \\( y = x^4 - 2x^2 + 3 \\) defined on the domain \\( -2 \\le x \\le 0.5 \\), find (i) any local maxima or minima and (ii) the global maximum and minimum. (Format: 'local maximum: max_val at x = max_x, local minimum: min_val at x = min_x; global minimum: min_val at x = min_x, global maximum: max_val at x = max_x')",
    "a": "local maximum: 3 at x = 0, local minimum: 2 at x = -1; global minimum: 2 at x = -1, global maximum: 11 at x = -2",
    "t": "Global maximum and minimum",
    "solutionSteps": [
      {
        "explanation": "Find critical points of the function.",
        "workingOut": "y' = 4x(x - 1)(x + 1) = 0 \\implies x = 0, \\, \pm 1"
      },
      {
        "explanation": "Identify the critical points inside \\( -2 \\le x \\le 0.5 \\).",
        "workingOut": "x = -1 \\text{ and } x = 0 \\text{ are in the domain.}"
      },
      {
        "explanation": "Determine their coordinates and local nature.",
        "workingOut": "y(0) = 3 \\, (\\text{local max since } y'' < 0) \\quad \\text{and} \\quad y(-1) = 2 \\, (\\text{local min since } y'' > 0)"
      },
      {
        "explanation": "Evaluate the function at the boundary endpoints.",
        "workingOut": "y(-2) = 16 - 8 + 3 = 11 \\quad \\text{and} \\quad y(0.5) = 2.5625"
      },
      {
        "explanation": "Compare turning points and boundaries to identify the global extrema.",
        "workingOut": "\\text{Values: } \\{2, 3, 11, 2.5625\\} \\implies \\text{global min: } 2 \\text{ at } x=-1, \\, \\text{global max: } 11 \\text{ at } x=-2"
      }
    ]
  },
  {
    "id": "y12a-3f-q4c",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 240,
    "question": "For the function \\( y = x^4 - 2x^2 + 3 \\) defined on the domain \\( -0.5 \\le x \\le 0.5 \\), find (i) any local maxima or minima and (ii) the global maximum and minimum. (Format: 'local maximum: max_val at x = max_x; global minimum: min_val at x = min_x1, min_x2, global maximum: max_val at x = max_x')",
    "a": "local maximum: 3 at x = 0; global minimum: 2.5625 at x = -0.5, 0.5, global maximum: 3 at x = 0",
    "t": "Global maximum and minimum",
    "solutionSteps": [
      {
        "explanation": "Find critical points inside \\( -0.5 \\le x \\le 0.5 \\).",
        "workingOut": "y' = 4x(x - 1)(x + 1) = 0 \\implies x = 0 \\text{ is the only turning point in the domain.}"
      },
      {
        "explanation": "Determine its coordinates and local nature.",
        "workingOut": "y(0) = 3 \\, (\\text{local max because } y''(0) = -4 < 0)"
      },
      {
        "explanation": "Evaluate the function at the boundary endpoints.",
        "workingOut": "y(-0.5) = 0.0625 - 0.5 + 3 = 2.5625 \\quad \\text{and} \\quad y(0.5) = 2.5625"
      },
      {
        "explanation": "Compare turning point with boundaries to state the global maximum and minimum.",
        "workingOut": "\\text{global min: } 2.5625 \\text{ at } x = \\pm 0.5, \\, \\text{global max: } 3 \\text{ at } x=0"
      }
    ]
  }
];
