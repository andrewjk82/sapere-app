export const Y11_CH3B_QUESTIONS = [
  // ── QUESTION 1 ──
  {
    "id": "y11a-3b-q1a",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Copy the graph of the circle below. Draw a vertical line showing that the graph does not represent a function, and explain why.",
    "a": "Draw a vertical line that intersects the circle at two points (e.g. at \\( x = 2 \\)). Since one input \\( x \\) maps to two different output values of \\( y \\), it fails the vertical line test and is not a function.",
    "solutionSteps": [
      {
        "explanation": "A relation is a function if and only if every vertical line intersects its graph at most once.",
        "workingOut": ""
      },
      {
        "explanation": "Draw a vertical line, for example at \\( x = 2 \\). It cuts the circle at two distinct points: \\( (2, \\sqrt{12}) \\) and \\( (2, -\\sqrt{12}) \\).",
        "workingOut": "x^2 + y^2 = 16 \\implies 2^2 + y^2 = 16 \\implies y = \\pm \\sqrt{12}"
      },
      {
        "explanation": "Because one \\( x \\)-value corresponds to more than one \\( y \\)-value, the relation is not a function.",
        "workingOut": ""
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-6, 6, 6, -6],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-5,0], [5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-5], [0,5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.6, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 4.6, 'y'], {fontSize: 14});\nboard.create('circle', [[0,0], 4], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('text', [0.2, 4.2, '4'], {fontSize: 12});\nboard.create('text', [0.2, -4.2, '-4'], {fontSize: 12});\nboard.create('text', [4.2, 0.2, '4'], {fontSize: 12});\nboard.create('text', [-4.7, 0.2, '-4'], {fontSize: 12});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y11a-3b-q1b",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Copy the graph of the semicircle below. Draw a vertical line showing that the graph does not represent a function, and explain why.",
    "a": "Draw a vertical line (e.g. at \\( x = 1.5 \\)) which intersects the semicircle at two points. Because a vertical line intersects the curve more than once, it is a relation and not a function.",
    "solutionSteps": [
      {
        "explanation": "Apply the vertical line test to the semicircle on the right of the y-axis.",
        "workingOut": ""
      },
      {
        "explanation": "Any vertical line drawn for \\( 0 < x < 3 \\) (for example, \\( x = 1.5 \\)) will intersect the curve at two distinct y-coordinates.",
        "workingOut": "x = \\sqrt{9-y^2} \\implies 1.5^2 + y^2 = 9 \\implies y = \\pm \\sqrt{6.75} \\approx \\pm 2.6"
      },
      {
        "explanation": "Thus, the relation fails the vertical line test and is not a function.",
        "workingOut": ""
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-2, 4, 5, -4],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-1.5,0], [4,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.5], [0,3.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [3.8, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 3.3, 'y'], {fontSize: 14});\nboard.create('arc', [[0,0], [0,3], [0,-3]], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('text', [0.2, 3.1, '3'], {fontSize: 12});\nboard.create('text', [0.2, -3.1, '-3'], {fontSize: 12});\nboard.create('text', [3.1, 0.2, '3'], {fontSize: 12});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y11a-3b-q1c",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Copy the sideways S-curve shown below. Draw a vertical line showing that the graph does not represent a function, and explain why.",
    "a": "Draw a vertical line through the loop (e.g. \\( x = 1 \\) or \\( x = -1 \\)). This vertical line will intersect the curve at three distinct points, indicating it is not a function.",
    "solutionSteps": [
      {
        "explanation": "Examine the S-shaped curve of the relation \\( x = y^3 - 4y \\).",
        "workingOut": ""
      },
      {
        "explanation": "If we draw a vertical line near the y-axis, such as \\( x = 1 \\), it intersects the curve three times because the curve curves back on itself.",
        "workingOut": "y^3 - 4y = 1 \\implies \\text{three real solutions for } y"
      },
      {
        "explanation": "Since one value of \\( x \\) produces three values of \\( y \\), this relation is not a function.",
        "workingOut": ""
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-5, 4, 5, -4],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-4.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.5], [0,3.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 3.3, 'y'], {fontSize: 14});\nboard.create('curve', [function(t){ return t*t*t - 4*t; }, function(t){ return t; }, -2.5, 2.5], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y11a-3b-q1d",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Copy the sideways parabola opening to the left below. Draw a vertical line showing that the graph does not represent a function, and explain why.",
    "a": "Draw a vertical line (e.g. \\( x = 1 \\)). It cuts the parabola at two points (one above the x-axis, one below). Therefore, it fails the vertical line test and is not a function.",
    "solutionSteps": [
      {
        "explanation": "Observe the sideways parabola \\( x = 3 - \\frac{y^2}{2} \\).",
        "workingOut": ""
      },
      {
        "explanation": "Draw a vertical line at \\( x = 1 \\). Find the corresponding y-values.",
        "workingOut": "1 = 3 - \\frac{y^2}{2} \\implies y^2 = 4 \\implies y = \\pm 2"
      },
      {
        "explanation": "Since \\( x = 1 \\) maps to both \\( y = 2 \\) and \\( y = -2 \\), the relation is not a function.",
        "workingOut": ""
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-5, 4, 5, -4],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-4.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.5], [0,3.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 3.3, 'y'], {fontSize: 14});\nboard.create('curve', [function(t){ return 3 - t*t/2; }, function(t){ return t; }, -3.5, 3.5], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('text', [3.1, 0.2, '3'], {fontSize: 12});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y11a-3b-q1e",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Copy the hyperbola shown below. Draw a vertical line showing that the graph does not represent a function, and explain why.",
    "a": "Draw a vertical line (e.g. \\( x = 1 \\)). It intersects the upper branch at \\( (1, \\sqrt{5}) \\) and the lower branch at \\( (1, -\\sqrt{5}) \\). Since a vertical line intersects the curve twice, the relation is not a function.",
    "solutionSteps": [
      {
        "explanation": "Consider the vertical hyperbola \\( y^2 - x^2 = 4 \\).",
        "workingOut": ""
      },
      {
        "explanation": "Choose a vertical line like \\( x = 1 \\). Substitute it to find the points of intersection.",
        "workingOut": "y^2 - 1^2 = 4 \\implies y^2 = 5 \\implies y = \\pm \\sqrt{5}"
      },
      {
        "explanation": "Since there are two y-values for a single x-value, this hyperbola is not a function.",
        "workingOut": ""
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-5, 6, 5, -6],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-4.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-5.5], [0,5.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 5.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return Math.sqrt(4 + x*x); }, -5, 5], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('functiongraph', [function(x){ return -Math.sqrt(4 + x*x); }, -5, 5], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('text', [0.2, 2.2, '2'], {fontSize: 12});\nboard.create('text', [0.2, -2.2, '-2'], {fontSize: 12});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y11a-3b-q1f",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Copy the looped curve shown below. Draw a vertical line showing that the graph does not represent a function, and explain why.",
    "a": "Draw a vertical line (e.g. \\( x = -0.5 \\)). The vertical line cuts the loop at two points (above and below the x-axis). Thus it fails the vertical line test and is not a function.",
    "solutionSteps": [
      {
        "explanation": "Examine the loop curve defined by \\( x = t^2 - 1, y = t^3 - t \\).",
        "workingOut": ""
      },
      {
        "explanation": "Any vertical line drawn for \\( -1 < x < 0 \\) (such as \\( x = -0.5 \\)) intersects the loop at two distinct points.",
        "workingOut": "t^2 - 1 = -0.5 \\implies t = \\pm \\frac{1}{\\sqrt{2}} \\implies y = \\pm \\frac{1}{2\\sqrt{2}} - (\\pm \\frac{1}{\\sqrt{2}}) \\implies y = \\pm \\frac{1}{2\\sqrt{2}}"
      },
      {
        "explanation": "Because a single input \\( x \\) maps to multiple outputs \\( y \\), it is not a function.",
        "workingOut": ""
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-2.5, 2, 2.5, -2],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-2,0], [2,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-1.5], [0,1.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [1.8, -0.2, 'x'], {fontSize: 14});\nboard.create('text', [-0.2, 1.3, 'y'], {fontSize: 14});\nboard.create('curve', [function(t){ return t*t - 1; }, function(t){ return t*t*t - t; }, -1.5, 1.5], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.unsuspendUpdate();"
      }
    }
  },

  // ── QUESTION 2 ──
  {
    "id": "y11a-3b-q2a",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Use the vertical line test to determine whether the graph below represents a function. (Write 'Yes' or 'No')",
    "a": "Yes",
    "solutionSteps": [
      {
        "explanation": "Look at the parabola opening upwards. Any vertical line drawn on this graph will intersect the curve at most once.",
        "workingOut": ""
      },
      {
        "explanation": "Therefore, the relation represents a function.",
        "workingOut": ""
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-2, 6, 6, -3],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-1.5,0], [5.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-2.5], [0,5.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [5.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 5.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return x*x - 4*x + 2; }, -1.5, 5.5], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y11a-3b-q2b",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Use the vertical line test to determine whether the circular arc with open endpoints below represents a function. (Write 'Yes' or 'No')",
    "a": "No",
    "solutionSteps": [
      {
        "explanation": "A vertical line can be drawn (e.g. at \\( x = 0 \\)) that cuts the upper and lower halves of this circular shape.",
        "workingOut": ""
      },
      {
        "explanation": "Since some vertical lines intersect the graph at two points, it does not represent a function.",
        "workingOut": ""
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-7, 7, 7, -7],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-6.5,0], [6.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-6.5], [0,6.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [6.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 6.2, 'y'], {fontSize: 14});\nboard.create('arc', [[0,0], [-4,3], [4,3]], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('point', [-4, 3], {size: 3, face: 'o', color: '#4f46e5', fixed: true});\nboard.create('point', [4, 3], {size: 3, face: 'o', color: '#4f46e5', fixed: true});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y11a-3b-q2c",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Use the vertical line test to determine whether the straight line graph below represents a function. (Write 'Yes' or 'No')",
    "a": "Yes",
    "solutionSteps": [
      {
        "explanation": "This is a linear relation representing a straight line with a negative gradient.",
        "workingOut": ""
      },
      {
        "explanation": "Every vertical line intersects this straight line exactly once. Thus, it represents a function.",
        "workingOut": ""
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-2, 5, 5, -2],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-1.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-1.5], [0,4.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 4.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return 3 - x; }, -1.5, 4.5], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y11a-3b-q2d",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Use the vertical line test to determine whether the sideways parabola below represents a function. (Write 'Yes' or 'No')",
    "a": "No",
    "solutionSteps": [
      {
        "explanation": "For any value \\( x > -2 \\) (where the vertex is at \\( x = -2 \\)), a vertical line intersects the curve at two distinct points.",
        "workingOut": ""
      },
      {
        "explanation": "Therefore, the relation fails the vertical line test and is not a function.",
        "workingOut": ""
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-4, 4, 5, -4],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-3.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.5], [0,3.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 3.2, 'y'], {fontSize: 14});\nboard.create('curve', [function(t){ return t*t - 2; }, function(t){ return t; }, -3.5, 3.5], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y11a-3b-q2e",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Use the vertical line test to determine whether the vertical sinusoidal wave below represents a function. (Write 'Yes' or 'No')",
    "a": "No",
    "solutionSteps": [
      {
        "explanation": "The wave oscillates horizontally as it goes vertically.",
        "workingOut": ""
      },
      {
        "explanation": "A vertical line like \\( x = 1 \\) intersects this curve infinitely many times. So it is not a function.",
        "workingOut": ""
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-4, 5, 4, -5],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-3.5,0], [3.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-4.5], [0,4.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [3.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 4.2, 'y'], {fontSize: 14});\nboard.create('curve', [function(t){ return 2*Math.sin(t); }, function(t){ return t; }, -4.5, 4.5], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y11a-3b-q2f",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Use the vertical line test to determine whether the cubic curve below represents a function. (Write 'Yes' or 'No')",
    "a": "Yes",
    "solutionSteps": [
      {
        "explanation": "This cubic curve goes from top-left to bottom-right.",
        "workingOut": ""
      },
      {
        "explanation": "For any value of \\( x \\), there is exactly one value of \\( y \\). A vertical line intersects this curve exactly once everywhere, so it is a function.",
        "workingOut": ""
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-4, 6, 4, -6],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-3.5,0], [3.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-5.5], [0,5.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [3.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 5.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return -x*x*x + 3*x; }, -3.5, 3.5], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y11a-3b-q2g",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Use the vertical line test to determine whether the semicircle on the left of the y-axis below represents a function. (Write 'Yes' or 'No')",
    "a": "No",
    "solutionSteps": [
      {
        "explanation": "This semicircle has endpoints at \\( (0, 3) \\) and \\( (0, -3) \\) and curves to the left.",
        "workingOut": ""
      },
      {
        "explanation": "For any value \\( -3 < x < 0 \\), a vertical line cuts the semicircle twice. Hence, it is not a function.",
        "workingOut": ""
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-5, 4, 2, -4],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-4.5,0], [1.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.5], [0,3.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [1.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 3.3, 'y'], {fontSize: 14});\nboard.create('arc', [[0,0], [0,-3], [0,3]], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('text', [-3.2, 0.2, '-3'], {fontSize: 12});\nboard.create('text', [0.2, 3.1, '3'], {fontSize: 12});\nboard.create('text', [0.2, -3.1, '-3'], {fontSize: 12});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y11a-3b-q2h",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Use the vertical line test to determine whether the semicircle above the x-axis below represents a function. (Write 'Yes' or 'No')",
    "a": "Yes",
    "solutionSteps": [
      {
        "explanation": "This semicircle is on the upper half of the plane, starting at \\( (-3, 0) \\) and ending at \\( (3, 0) \\).",
        "workingOut": ""
      },
      {
        "explanation": "Any vertical line drawn through this graph will intersect the curve at most once. Hence, it represents a function.",
        "workingOut": ""
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-5, 4, 5, -2],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-4.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-1.5], [0,3.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 3.3, 'y'], {fontSize: 14});\nboard.create('arc', [[0,0], [3,0], [-3,0]], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('text', [-3.2, -0.4, '-3'], {fontSize: 12});\nboard.create('text', [3.1, -0.4, '3'], {fontSize: 12});\nboard.create('text', [-0.4, 3.1, '3'], {fontSize: 12});\nboard.unsuspendUpdate();"
      }
    }
  },

  // ── QUESTION 3 ──
  {
    "id": "y11a-3b-q3a",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "State the domain and range of the relation shown in the graph. (Format: 'Domain: all real x, Range: y >= -2')",
    "a": "Domain: all real x, Range: y >= -2",
    "solutionSteps": [
      {
        "explanation": "The graph is a parabola opening upwards with its vertex at \\( (2, -2) \\).",
        "workingOut": ""
      },
      {
        "explanation": "The curve extends infinitely in the horizontal direction, so the domain is all real \\( x \\).",
        "workingOut": ""
      },
      {
        "explanation": "The lowest point is \\( y = -2 \\), so the range is all values greater than or equal to \\( -2 \\).",
        "workingOut": "y \\ge -2"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-2, 6, 6, -3],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-1.5,0], [5.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-2.5], [0,5.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [5.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 5.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return x*x - 4*x + 2; }, -1.5, 5.5], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y11a-3b-q3b",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "State the domain and range of the circular arc (radius 5) shown in the graph, where the top endpoints at \\( y = 3 \\) are open. (Format: 'Domain: -5 < x < 5, Range: -5 <= y < 3' or similar using inequality signs)",
    "a": "Domain: -5 < x < 5, Range: -5 <= y < 3",
    "solutionSteps": [
      {
        "explanation": "The graph is a circle of radius \\( 5 \\) with the top part missing. The open endpoints are at \\( (-4, 3) \\) and \\( (4, 3) \\).",
        "workingOut": "x^2 + y^2 = 25 \\implies x = \\pm 4 \\text{ when } y = 3"
      },
      {
        "explanation": "The domain goes between the open points in the x direction: \\( -5 < x < 5 \\). Wait, the endpoints of the arc are at \\( x = -4 \\) and \\( x = 4 \\) but the circle extends to the sides to \\( -5 \\) and \\( 5 \\).",
        "workingOut": "\\text{Domain is } -5 < x < 5"
      },
      {
        "explanation": "The lowest point of the circle is at \\( y = -5 \\) (included), and the highest points are the open circles at \\( y = 3 \\). So range is \\( -5 \\le y < 3 \\).",
        "workingOut": "\\text{Range is } -5 \\le y < 3"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-7, 7, 7, -7],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-6.5,0], [6.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-6.5], [0,6.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [6.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 6.2, 'y'], {fontSize: 14});\nboard.create('arc', [[0,0], [-4,3], [4,3]], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('point', [-4, 3], {size: 3, face: 'o', color: '#4f46e5', fixed: true});\nboard.create('point', [4, 3], {size: 3, face: 'o', color: '#4f46e5', fixed: true});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y11a-3b-q3c",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "State the domain and range of the linear relation shown in the graph. (Format: 'Domain: all real x, Range: all real y')",
    "a": "Domain: all real x, Range: all real y",
    "solutionSteps": [
      {
        "explanation": "This straight line extends infinitely in both directions without any boundaries.",
        "workingOut": ""
      },
      {
        "explanation": "Therefore, both its domain and range are all real numbers.",
        "workingOut": ""
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-2, 5, 5, -2],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-1.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-1.5], [0,4.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 4.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return 3 - x; }, -1.5, 4.5], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y11a-3b-q3d",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "State the domain and range of the sideways parabola shown in the graph. (Format: 'Domain: x >= -2, Range: all real y')",
    "a": "Domain: x >= -2, Range: all real y",
    "solutionSteps": [
      {
        "explanation": "The vertex of the sideways parabola is at \\( (-2, 0) \\) and it opens to the right.",
        "workingOut": ""
      },
      {
        "explanation": "Since it only exists for \\( x \\) values to the right of the vertex, the domain is \\( x \\ge -2 \\).",
        "workingOut": ""
      },
      {
        "explanation": "The parabola opens vertically infinitely as we go right, so the range is all real \\( y \\).",
        "workingOut": ""
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-4, 4, 5, -4],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-3.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.5], [0,3.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 3.2, 'y'], {fontSize: 14});\nboard.create('curve', [function(t){ return t*t - 2; }, function(t){ return t; }, -3.5, 3.5], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y11a-3b-q3e",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "State the domain and range of the relation shown in the graph. (Format: 'Domain: -2 <= x <= 2, Range: all real y')",
    "a": "Domain: -2 <= x <= 2, Range: all real y",
    "solutionSteps": [
      {
        "explanation": "The curve is a vertically oriented sinusoidal wave.",
        "workingOut": ""
      },
      {
        "explanation": "Its horizontal width is bounded between \\( x = -2 \\) and \\( x = 2 \\), so the domain is \\( -2 \\le x \\le 2 \\).",
        "workingOut": ""
      },
      {
        "explanation": "The wave continues up and down indefinitely, so the range is all real \\( y \\).",
        "workingOut": ""
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-4, 5, 4, -5],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-3.5,0], [3.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-4.5], [0,4.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [3.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 4.2, 'y'], {fontSize: 14});\nboard.create('curve', [function(t){ return 2*Math.sin(t); }, function(t){ return t; }, -4.5, 4.5], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y11a-3b-q3f",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "State the domain and range of the cubic function shown in the graph. (Format: 'Domain: all real x, Range: all real y')",
    "a": "Domain: all real x, Range: all real y",
    "solutionSteps": [
      {
        "explanation": "This cubic curve goes from top-left to bottom-right.",
        "workingOut": ""
      },
      {
        "explanation": "Cubic polynomials have both domain and range as all real numbers, since they go to infinity in both coordinates.",
        "workingOut": ""
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-4, 6, 4, -6],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-3.5,0], [3.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-5.5], [0,5.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [3.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 5.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return -x*x*x + 3*x; }, -3.5, 3.5], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y11a-3b-q3g",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "State the domain and range of the semicircle on the left of the y-axis. (Format: 'Domain: -3 <= x <= 0, Range: -3 <= y <= 3')",
    "a": "Domain: -3 <= x <= 0, Range: -3 <= y <= 3",
    "solutionSteps": [
      {
        "explanation": "This semicircle has radius \\( 3 \\) and lies on the left of the y-axis.",
        "workingOut": ""
      },
      {
        "explanation": "The x-coordinates span from \\( -3 \\) to \\( 0 \\) inclusive. So Domain is \\( -3 \\le x \\le 0 \\).",
        "workingOut": ""
      },
      {
        "explanation": "The y-coordinates span from the lowest point \\( -3 \\) to the highest point \\( 3 \\). So Range is \\( -3 \\le y \\le 3 \\).",
        "workingOut": ""
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-5, 4, 2, -4],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-4.5,0], [1.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.5], [0,3.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [1.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 3.3, 'y'], {fontSize: 14});\nboard.create('arc', [[0,0], [0,-3], [0,3]], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('text', [-3.2, 0.2, '-3'], {fontSize: 12});\nboard.create('text', [0.2, 3.1, '3'], {fontSize: 12});\nboard.create('text', [0.2, -3.1, '-3'], {fontSize: 12});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y11a-3b-q3h",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "State the domain and range of the upper semicircle shown in the graph. (Format: 'Domain: -3 <= x <= 3, Range: 0 <= y <= 3')",
    "a": "Domain: -3 <= x <= 3, Range: 0 <= y <= 3",
    "solutionSteps": [
      {
        "explanation": "The semicircle lies above the x-axis, spanning horizontally from \\( -3 \\) to \\( 3 \\).",
        "workingOut": ""
      },
      {
        "explanation": "Thus, the Domain is \\( -3 \\le x \\le 3 \\).",
        "workingOut": ""
      },
      {
        "explanation": "The y-coordinates span from the bottom boundary \\( y = 0 \\) to the top of the curve \\( y = 3 \\). Thus, the Range is \\( 0 \\le y \\le 3 \\).",
        "workingOut": ""
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-5, 4, 5, -2],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-4.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-1.5], [0,3.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 3.3, 'y'], {fontSize: 14});\nboard.create('arc', [[0,0], [3,0], [-3,0]], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('text', [-3.2, -0.4, '-3'], {fontSize: 12});\nboard.create('text', [3.1, -0.4, '3'], {fontSize: 12});\nboard.create('text', [-0.4, 3.1, '3'], {fontSize: 12});\nboard.unsuspendUpdate();"
      }
    }
  },

  // ── QUESTION 4 ──
  {
    "id": "y11a-3b-q4a",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "For the linear function \\( y = -3x + 2 \\):\n\n(i) Copy and complete the table of values for \\( x = 0, 1, 2 \\).\n(ii) Plot the points and sketch the function.\n(iii) Write down the domain and range.",
    "a": "(i) Table of values: (0, 2), (1, -1), (2, -4).\n(ii) Line passing through these points.\n(iii) Domain: all real x, Range: all real y.",
    "solutionSteps": [
      {
        "explanation": "Substitute \\( x = 0, 1, 2 \\) into \\( y = -3x + 2 \\).",
        "workingOut": "\\begin{aligned} x=0 \\implies y &= -3(0)+2 = 2 \\\\ x=1 \\implies y &= -3(1)+2 = -1 \\\\ x=2 \\implies y &= -3(2)+2 = -4 \\end{aligned}"
      },
      {
        "explanation": "Plot the points \\( (0, 2) \\), \\( (1, -1) \\), and \\( (2, -4) \\) and connect them with a straight line.",
        "workingOut": ""
      },
      {
        "explanation": "Since it is a non-vertical straight line, the domain and range are both all real numbers.",
        "workingOut": "\\text{Domain: all real } x, \\quad \\text{Range: all real } y"
      }
    ]
  },
  {
    "id": "y11a-3b-q4b",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "For the quadratic function \\( y = x^2 - 2x + 3 \\):\n\n(i) Copy and complete the table of values for \\( x = -1, 0, 1, 2, 3 \\).\n(ii) Plot the points and sketch the parabola.\n(iii) Write down the domain and range.",
    "a": "(i) Table of values: (-1, 6), (0, 3), (1, 2), (2, 3), (3, 6).\n(ii) Parabola opening upwards with vertex at (1, 2).\n(iii) Domain: all real x, Range: y >= 2.",
    "solutionSteps": [
      {
        "explanation": "Substitute \\( x \\) values into \\( y = x^2 - 2x + 3 \\).",
        "workingOut": "\\begin{aligned} x=-1 \\implies y &= (-1)^2 - 2(-1) + 3 = 6 \\\\ x=0 \\implies y &= (0)^2 - 2(0) + 3 = 3 \\\\ x=1 \\implies y &= (1)^2 - 2(1) + 3 = 2 \\\\ x=2 \\implies y &= (2)^2 - 2(2) + 3 = 3 \\\\ x=3 \\implies y &= (3)^2 - 2(3) + 3 = 6 \\end{aligned}"
      },
      {
        "explanation": "The vertex is at \\( (1, 2) \\) and the y-intercept is at \\( (0, 3) \\). Plot the points and draw a smooth parabola opening upwards.",
        "workingOut": ""
      },
      {
        "explanation": "Identify the domain and range. The graph extends horizontally infinitely, and vertically starts from its minimum at \\( y = 2 \\).",
        "workingOut": "\\text{Domain: all real } x, \\quad \\text{Range: } y \\ge 2"
      }
    ]
  },

  // ── QUESTION 5 ──
  {
    "id": "y11a-3b-q5a",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\frac{2}{x} \\). (Format: 'x != 0' or 'all real x except x = 0')",
    "a": "x != 0",
    "solutionSteps": [
      {
        "explanation": "Division by zero is undefined, so the denominator cannot be zero.",
        "workingOut": "x \\neq 0"
      },
      {
        "explanation": "Thus, the domain includes all real numbers except \\( 0 \\).",
        "workingOut": ""
      }
    ]
  },
  {
    "id": "y11a-3b-q5b",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\frac{1}{x - 4} \\). (Format: 'x != 4')",
    "a": "x != 4",
    "solutionSteps": [
      {
        "explanation": "The denominator cannot be zero.",
        "workingOut": "x - 4 \\neq 0 \\implies x \\neq 4"
      },
      {
        "explanation": "The natural domain is all real numbers except \\( 4 \\).",
        "workingOut": ""
      }
    ]
  },
  {
    "id": "y11a-3b-q5c",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\frac{3}{x + 2} \\). (Format: 'x != -2')",
    "a": "x != -2",
    "solutionSteps": [
      {
        "explanation": "Set the denominator to not equal zero.",
        "workingOut": "x + 2 \\neq 0 \\implies x \\neq -2"
      },
      {
        "explanation": "The natural domain is all real numbers except \\( -2 \\).",
        "workingOut": ""
      }
    ]
  },
  {
    "id": "y11a-3b-q5d",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\frac{1}{3 + x} \\). (Format: 'x != -3')",
    "a": "x != -3",
    "solutionSteps": [
      {
        "explanation": "Find values of \\( x \\) that make the denominator zero.",
        "workingOut": "3 + x \\neq 0 \\implies x \\neq -3"
      },
      {
        "explanation": "The natural domain is all real numbers except \\( -3 \\).",
        "workingOut": ""
      }
    ]
  },

  // ── QUESTION 6 ──
  {
    "id": "y11a-3b-q6a",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\sqrt{2x} \\). (Format: 'x >= 0')",
    "a": "x >= 0",
    "solutionSteps": [
      {
        "explanation": "The expression inside the square root must be non-negative.",
        "workingOut": "2x \\ge 0"
      },
      {
        "explanation": "Divide by 2.",
        "workingOut": "x \\ge 0"
      }
    ]
  },
  {
    "id": "y11a-3b-q6b",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\sqrt{x - 4} \\). (Format: 'x >= 4')",
    "a": "x >= 4",
    "solutionSteps": [
      {
        "explanation": "The radicand must be non-negative.",
        "workingOut": "x - 4 \\ge 0"
      },
      {
        "explanation": "Solve for \\( x \\).",
        "workingOut": "x \\ge 4"
      }
    ]
  },
  {
    "id": "y11a-3b-q6c",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\sqrt{x + 5} \\). (Format: 'x >= -5')",
    "a": "x >= -5",
    "solutionSteps": [
      {
        "explanation": "Set the term under the radical to be greater than or equal to zero.",
        "workingOut": "x + 5 \\ge 0"
      },
      {
        "explanation": "Solve the inequality.",
        "workingOut": "x \\ge -5"
      }
    ]
  },
  {
    "id": "y11a-3b-q6d",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\sqrt{3 + x} \\). (Format: 'x >= -3')",
    "a": "x >= -3",
    "solutionSteps": [
      {
        "explanation": "Set the radical expression greater than or equal to zero.",
        "workingOut": "3 + x \\ge 0"
      },
      {
        "explanation": "Solve for \\( x \\).",
        "workingOut": "x \\ge -3"
      }
    ]
  },

  // ── QUESTION 7 ──
  {
    "id": "y11a-3b-q7a",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "A mapping diagram shows domain elements \\(\\{-3, 3, -2, 2, 0\\}\\) mapping to range elements \\(\\{9, 4, 0\\}\\) as follows:\n\n- \\(-3 \\rightarrow 9\\)\n- \\(3 \\rightarrow 9\\)\n- \\(-2 \\rightarrow 4\\)\n- \\(2 \\rightarrow 4\\)\n- \\(0 \\rightarrow 0\\)\n\nIs this relation also a function? Explain why.",
    "opts": [
      "Yes, because each element in the domain maps to exactly one element in the range.",
      "No, because two different domain elements map to the same range element.",
      "Yes, because it is a one-to-many mapping.",
      "No, because 0 maps to 0."
    ],
    "a": "Yes, because each element in the domain maps to exactly one element in the range.",
    "solutionSteps": [
      {
        "explanation": "For a relation to be a function, each input (domain value) must map to exactly one output (range value).",
        "workingOut": ""
      },
      {
        "explanation": "Here, \\(-3\\) maps only to \\(9\\), \\(3\\) maps only to \\(9\\), etc. Although multiple inputs map to the same output (many-to-one), each input has only one output.",
        "workingOut": ""
      },
      {
        "explanation": "Therefore, this relation is a function.",
        "workingOut": ""
      }
    ]
  },
  {
    "id": "y11a-3b-q7b",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "A relation is described by a diagram where domain elements \\(\\{9, 4, 0\\}\\) map to range elements \\(\\{-3, 3, -2, 2, 0\\}\\) as follows:\n\n- \\(9 \\rightarrow -3\\) and \\(9 \\rightarrow 3\\)\n- \\(4 \\rightarrow -2\\) and \\(4 \\rightarrow 2\\)\n- \\(0 \\rightarrow 0\\)\n\nIs this relation a function? Explain why.",
    "opts": [
      "No, because the inputs 9 and 4 map to more than one output value.",
      "Yes, because every element in the domain has an output.",
      "No, because it is a many-to-one relation.",
      "Yes, because it represents a vertical line."
    ],
    "a": "No, because the inputs 9 and 4 map to more than one output value.",
    "solutionSteps": [
      {
        "explanation": "A relation is not a function if any input maps to more than one output (one-to-many mapping).",
        "workingOut": ""
      },
      {
        "explanation": "Here, \\(9\\) maps to both \\(-3\\) and \\(3\\). Similarly, \\(4\\) maps to both \\(-2\\) and \\(2\\).",
        "workingOut": ""
      },
      {
        "explanation": "Since some inputs correspond to multiple outputs, the relation is not a function.",
        "workingOut": ""
      }
    ]
  },
  {
    "id": "y11a-3b-q7c",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "A relation maps \\(\\{-1, 1, 2\\}\\) to \\(\\{3, 5, 8\\}\\) as follows:\n\n- \\(-1 \\rightarrow 3\\)\n- \\(1 \\rightarrow 5\\)\n- \\(2 \\rightarrow 8\\)\n\nIs this relation a function?",
    "opts": [
      "Yes, it is a one-to-one function.",
      "No, it is not a function.",
      "Yes, but it is not a relation.",
      "No, because the inputs are not symmetrical."
    ],
    "a": "Yes, it is a one-to-one function.",
    "solutionSteps": [
      {
        "explanation": "Each element in the domain maps to exactly one unique element in the range.",
        "workingOut": ""
      },
      {
        "explanation": "Since every input has exactly one output, it is a function. Because the mapping is unique in both directions, it is a one-to-one function.",
        "workingOut": ""
      }
    ]
  },
  {
    "id": "y11a-3b-q7d",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "A mapping diagram contains domain elements \\(\\{-2, 2, 0\\}\\) and range elements \\(\\{-3, 3, -4, 4\\}\\) as follows:\n\n- \\(-2 \\rightarrow -3\\)\n- \\(2 \\rightarrow 3\\)\n- \\(0 \\rightarrow -4\\) and \\(0 \\rightarrow 4\\)\n\nIs this relation a function?",
    "opts": [
      "No, because the domain element 0 maps to two range elements.",
      "Yes, because every element in the range has a preimage.",
      "Yes, it is a function.",
      "No, because the number of elements in the domain is less than the range."
    ],
    "a": "No, because the domain element 0 maps to two range elements.",
    "solutionSteps": [
      {
        "explanation": "Look at \\( 0 \\). It maps to both \\(-4\\) and \\(4\\).",
        "workingOut": ""
      },
      {
        "explanation": "Because one input maps to more than one output, it fails the definition of a function.",
        "workingOut": ""
      }
    ]
  },

  // ── QUESTION 8 (subQuestions) ──
  {
    "id": "y11a-3b-q8",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "Answer the following questions about sets of coordinates and dice coordinates.",
    "subQuestions": [
      {
        "id": "y11a-3b-q8a",
        "type": "multiple_choice",
        "question": "a) Consider the set of points \\(\\{(1, 3), (2, 4), (3, 1), (5, 3)\\}\\). Is this a function or a relation?",
        "opts": [
          "It is a function.",
          "It is a relation but not a function."
        ],
        "a": "It is a function."
      },
      {
        "id": "y11a-3b-q8b",
        "type": "teacher_review",
        "question": "b) Two coloured dice are rolled. The value on the red die is the \\( x \\)-coordinate and the green die is the \\( y \\)-coordinate.\n\n(i) List the set of points possible if the numbers either add or multiply to give 4.\n(ii) Is this set a relation or a function?",
        "a": "(i) Points: {(1, 3), (3, 1), (2, 2), (1, 4), (4, 1)}.\n(ii) It is a relation and not a function, because the x-coordinate 1 maps to both y = 3 and y = 4."
      }
    ],
    "solutionSteps": [
      {
        "explanation": "For part a, check if any x-coordinate repeats with a different y-value in the set \\(\\{(1, 3), (2, 4), (3, 1), (5, 3)\\}\\).",
        "workingOut": "\\text{x-coordinates: } 1, 2, 3, 5 \\quad \\text{(no repeats) } \\implies \\text{Function}"
      },
      {
        "explanation": "For part b(i), find combinations of numbers on two dice (values 1 to 6) that sum to 4 or multiply to 4.",
        "workingOut": "\\begin{aligned} \\text{Sum to 4: } &(1, 3), (2, 2), (3, 1) \\\\ \\text{Multiply to 4: } &(1, 4), (2, 2), (4, 1) \\\\ \\text{Combined: } &\\{(1,3), (1,4), (2,2), (3,1), (4,1)\\} \\end{aligned}"
      },
      {
        "explanation": "For part b(ii), look at \\( x = 1 \\). It maps to both \\( y = 3 \\) and \\( y = 4 \\).",
        "workingOut": "x=1 \\implies y=3 \\text{ and } y=4 \\implies \\text{Relation, not a function}"
      }
    ]
  },

  // ── QUESTION 9 ──
  {
    "id": "y11a-3b-q9a",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "The circle below (radius 4) represents a relation that is not a function. Write down the coordinates of two points on this graph that have the same x-coordinate. (Format: '(x, y1) and (x, y2)' e.g. '(0, 4) and (0, -4)')",
    "a": "(0, 4) and (0, -4)",
    "solutionSteps": [
      {
        "explanation": "The equation of the circle centered at the origin with radius 4 is \\( x^2 + y^2 = 16 \\).",
        "workingOut": ""
      },
      {
        "explanation": "Choose any \\( x \\) value in the domain \\( -4 < x < 4 \\), for example \\( x = 0 \\).",
        "workingOut": "0^2 + y^2 = 16 \\implies y = \\pm 4"
      },
      {
        "explanation": "This gives two points with the same x-coordinate: \\( (0, 4) \\) and \\( (0, -4) \\).",
        "workingOut": ""
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-6, 6, 6, -6],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-5,0], [5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-5], [0,5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.6, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 4.6, 'y'], {fontSize: 14});\nboard.create('circle', [[0,0], 4], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('text', [0.2, 4.2, '4'], {fontSize: 12});\nboard.create('text', [0.2, -4.2, '-4'], {fontSize: 12});\nboard.create('text', [4.2, 0.2, '4'], {fontSize: 12});\nboard.create('text', [-4.7, 0.2, '-4'], {fontSize: 12});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y11a-3b-q9b",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "The sideways parabola below represents a relation that is not a function. Write down the coordinates of two points on this graph that have the same x-coordinate. (Format: '(0, 2) and (0, -2)')",
    "a": "(0, 2) and (0, -2)",
    "solutionSteps": [
      {
        "explanation": "The sideways parabola shown is \\( x = y^2 - 4 \\) (or similar). The vertex is at \\( (-4, 0) \\) and y-intercepts are at \\( \\pm 2 \\).",
        "workingOut": "0 = y^2 - 4 \\implies y = \\pm 2"
      },
      {
        "explanation": "This gives two points on the y-axis (where \\( x = 0 \\)): \\( (0, 2) \\) and \\( (0, -2) \\).",
        "workingOut": ""
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-5, 4, 3, -4],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-4.5,0], [2.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.5], [0,3.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [2.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 3.2, 'y'], {fontSize: 14});\nboard.create('curve', [function(t){ return t*t - 4; }, function(t){ return t; }, -3.5, 3.5], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('text', [-4.2, 0.2, '-4'], {fontSize: 12});\nboard.create('text', [0.2, 2.1, '2'], {fontSize: 12});\nboard.create('text', [0.2, -2.1, '-2'], {fontSize: 12});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y11a-3b-q9c",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "The circle centered at \\( (3, 2) \\) with radius \\( 3 \\) is not a function. Write down the coordinates of two points on this graph that have the same x-coordinate. (Format: '(3, 5) and (3, -1)')",
    "a": "(3, 5) and (3, -1)",
    "solutionSteps": [
      {
        "explanation": "The circle is centered at \\( (3, 2) \\) with a radius of \\( 3 \\). Its equation is \\( (x-3)^2 + (y-2)^2 = 9 \\).",
        "workingOut": ""
      },
      {
        "explanation": "Select the x-coordinate of the center, \\( x = 3 \\).",
        "workingOut": "(3-3)^2 + (y-2)^2 = 9 \\implies (y-2)^2 = 9 \\implies y - 2 = \\pm 3"
      },
      {
        "explanation": "Solve for y.",
        "workingOut": "y = 2 \\pm 3 \\implies y = 5 \\text{ or } y = -1"
      },
      {
        "explanation": "This gives two points: \\( (3, 5) \\) and \\( (3, -1) \\).",
        "workingOut": ""
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-1, 7, 8, -3],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-0.5,0], [7.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-2.5], [0,6.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [7.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 6.2, 'y'], {fontSize: 14});\nboard.create('circle', [[3,2], 3], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('point', [3,2], {name: '(3,2)', size: 2, color: 'black'});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y11a-3b-q9d",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "The vertical line at \\( x = 3 \\) is not a function. Write down the coordinates of two points on this graph that have the same x-coordinate. (Format: '(3, 1) and (3, 2)')",
    "a": "(3, 1) and (3, 2)",
    "solutionSteps": [
      {
        "explanation": "A vertical line is defined by the equation \\( x = k \\). Here, the line is \\( x = 3 \\).",
        "workingOut": ""
      },
      {
        "explanation": "Any point on this vertical line has an x-coordinate of 3. We can choose any two different y-values, for example \\( y = 1 \\) and \\( y = 2 \\).",
        "workingOut": "\\text{Points: } (3, 1) \\text{ and } (3, 2)"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-1, 5, 5, -2],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-0.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-1.5], [0,4.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 4.2, 'y'], {fontSize: 14});\nboard.create('line', [[3,-2], [3,5]], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('text', [3.2, 0.2, '3'], {fontSize: 12});\nboard.unsuspendUpdate();"
      }
    }
  },

  // ── QUESTION 10 ──
  {
    "id": "y11a-3b-q10a",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = 5x \\). (Format: 'all real x')",
    "a": "all real x",
    "solutionSteps": [
      {
        "explanation": "The function \\( f(x) = 5x \\) is a linear polynomial.",
        "workingOut": ""
      },
      {
        "explanation": "Polynomial functions are defined for all real values of \\( x \\).",
        "workingOut": "\\text{Domain: all real } x"
      }
    ]
  },
  {
    "id": "y11a-3b-q10b",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = 8 - 2x \\). (Format: 'all real x')",
    "a": "all real x",
    "solutionSteps": [
      {
        "explanation": "This is a linear polynomial function.",
        "workingOut": ""
      },
      {
        "explanation": "There are no fractions or square roots to restrict the input. The domain is all real numbers.",
        "workingOut": "\\text{Domain: all real } x"
      }
    ]
  },
  {
    "id": "y11a-3b-q10c",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\frac{1}{5 - x} \\). (Format: 'x != 5')",
    "a": "x != 5",
    "solutionSteps": [
      {
        "explanation": "The denominator cannot be equal to zero.",
        "workingOut": "5 - x \\neq 0 \\implies x \\neq 5"
      }
    ]
  },
  {
    "id": "y11a-3b-q10d",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\frac{4}{3x - 2} \\). (Format: 'x != 2/3')",
    "a": "x != 2/3",
    "solutionSteps": [
      {
        "explanation": "Set the denominator to not equal zero.",
        "workingOut": "3x - 2 \\neq 0"
      },
      {
        "explanation": "Solve for \\( x \\).",
        "workingOut": "3x \\neq 2 \\implies x \\neq \\frac{2}{3}"
      }
    ]
  },
  {
    "id": "y11a-3b-q10e",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\sqrt{x + 6} \\). (Format: 'x >= -6')",
    "a": "x >= -6",
    "solutionSteps": [
      {
        "explanation": "The quantity under the square root must be non-negative.",
        "workingOut": "x + 6 \\ge 0"
      },
      {
        "explanation": "Solve for \\( x \\).",
        "workingOut": "x \\ge -6"
      }
    ]
  },
  {
    "id": "y11a-3b-q10f",
    "type": "medium",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\sqrt{3x + 2} \\). (Format: 'x >= -2/3')",
    "a": "x >= -2/3",
    "solutionSteps": [
      {
        "explanation": "The term inside the radical must be greater than or equal to zero.",
        "workingOut": "3x + 2 \\ge 0"
      },
      {
        "explanation": "Solve the linear inequality.",
        "workingOut": "3x \\ge -2 \\implies x \\ge -\\frac{2}{3}"
      }
    ]
  },
  {
    "id": "y11a-3b-q10g",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\sqrt{6 - x} \\). (Format: 'x <= 6')",
    "a": "x <= 6",
    "solutionSteps": [
      {
        "explanation": "Ensure the radicand is non-negative.",
        "workingOut": "6 - x \\ge 0"
      },
      {
        "explanation": "Rearrange to solve for \\( x \\).",
        "workingOut": "6 \\ge x \\implies x \\le 6"
      }
    ]
  },
  {
    "id": "y11a-3b-q10h",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\sqrt{9 - 3x} \\). (Format: 'x <= 3')",
    "a": "x <= 3",
    "solutionSteps": [
      {
        "explanation": "Set the inside of the square root to be greater than or equal to zero.",
        "workingOut": "9 - 3x \\ge 0"
      },
      {
        "explanation": "Solve for \\( x \\).",
        "workingOut": "9 \\ge 3x \\implies 3 \\ge x \\implies x \\le 3"
      }
    ]
  },
  {
    "id": "y11a-3b-q10i",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\frac{2}{\\sqrt{x}} \\). (Format: 'x > 0')",
    "a": "x > 0",
    "solutionSteps": [
      {
        "explanation": "For a square root in the denominator, the value inside must be strictly positive (since it cannot be negative, and division by zero is undefined).",
        "workingOut": "x > 0"
      }
    ]
  },
  {
    "id": "y11a-3b-q10j",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\frac{1}{\\sqrt{x + 3}} \\). (Format: 'x > -3')",
    "a": "x > -3",
    "solutionSteps": [
      {
        "explanation": "The quantity under the radical in the denominator must be strictly positive.",
        "workingOut": "x + 3 > 0"
      },
      {
        "explanation": "Solve for \\( x \\).",
        "workingOut": "x > -3"
      }
    ]
  },
  {
    "id": "y11a-3b-q10k",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\frac{3}{\\sqrt{2 - x}} \\). (Format: 'x < 2')",
    "a": "x < 2",
    "solutionSteps": [
      {
        "explanation": "The radicand in the denominator must be strictly positive.",
        "workingOut": "2 - x > 0"
      },
      {
        "explanation": "Rearrange to solve the inequality.",
        "workingOut": "2 > x \\implies x < 2"
      }
    ]
  },
  {
    "id": "y11a-3b-q10l",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\frac{1}{\\sqrt{3x - 4}} \\). (Format: 'x > 4/3')",
    "a": "x > 4/3",
    "solutionSteps": [
      {
        "explanation": "Set the denominator radicand to be strictly greater than zero.",
        "workingOut": "3x - 4 > 0"
      },
      {
        "explanation": "Solve the inequality.",
        "workingOut": "3x > 4 \\implies x > \\frac{4}{3}"
      }
    ]
  },

  // ── QUESTION 11 ──
  {
    "id": "y11a-3b-q11a",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "For the exponential function \\( y = 3^x \\):\n\n(i) Copy and complete the table of values for \\( x = -2, -1, 0, 1, 2 \\).\n(ii) Plot the points and sketch the function.\n(iii) Write down the domain and range.",
    "a": "(i) Table of values: (-2, 1/9), (-1, 1/3), (0, 1), (1, 3), (2, 9).\n(ii) Exponential curve rising from left to right, asymptotic to the negative x-axis.\n(iii) Domain: all real x, Range: y > 0.",
    "solutionSteps": [
      {
        "explanation": "Evaluate \\( y = 3^x \\) for each given \\( x \\) value.",
        "workingOut": "\\begin{aligned} x=-2 \\implies y &= 3^{-2} = \\frac{1}{9} \\\\ x=-1 \\implies y &= 3^{-1} = \\frac{1}{3} \\\\ x=0 \\implies y &= 3^0 = 1 \\\\ x=1 \\implies y &= 3^1 = 3 \\\\ x=2 \\implies y &= 3^2 = 9 \\end{aligned}"
      },
      {
        "explanation": "Plot these points. Draw a smooth curve passing through them. The curve approaches the negative x-axis asymptotically (y = 0).",
        "workingOut": ""
      },
      {
        "explanation": "Identify the domain and range.",
        "workingOut": "\\text{Domain: all real } x, \\quad \\text{Range: } y > 0"
      }
    ]
  },
  {
    "id": "y11a-3b-q11b",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "For the cubic function \\( y = \\frac{1}{4}(3x - x^3) \\):\n\n(i) Copy and complete the table of values for \\( x = -3, -2, -1, 0, 1, 2, 3 \\).\n(ii) Plot the points and sketch the function.\n(iii) State the domain and range of this function.",
    "a": "(i) Table of values: (-3, 4.5), (-2, 0.5), (-1, -0.5), (0, 0), (1, 0.5), (2, -0.5), (3, -4.5).\n(ii) S-shaped curve passing through these points.\n(iii) Domain: all real x, Range: all real y.",
    "solutionSteps": [
      {
        "explanation": "Substitute \\( x \\) values into the function expression.",
        "workingOut": "\\begin{aligned} x=-3 \\implies y &= 0.25 \\times (3(-3) - (-3)^3) = 0.25 \\times (-9 + 27) = 4.5 \\\\ x=-2 \\implies y &= 0.25 \\times (3(-2) - (-2)^3) = 0.25 \\times (-6 + 8) = 0.5 \\\\ x=-1 \\implies y &= 0.25 \\times (3(-1) - (-1)^3) = 0.25 \\times (-3 + 1) = -0.5 \\\\ x=0 \\implies y &= 0.25 \\times (0) = 0 \\\\ x=1 \\implies y &= 0.25 \\times (3(1) - 1^3) = 0.25 \\times (3 - 1) = 0.5 \\\\ x=2 \\implies y &= 0.25 \\times (3(2) - 2^3) = 0.25 \\times (6 - 8) = -0.5 \\\\ x=3 \\implies y &= 0.25 \\times (3(3) - 3^3) = 0.25 \\times (9 - 27) = -4.5 \\end{aligned}"
      },
      {
        "explanation": "Plot the coordinates and draw a smooth curve. It has turning points between \\( x = -1 \\) and \\( x = 1 \\).",
        "workingOut": ""
      },
      {
        "explanation": "Since it is a cubic polynomial, the domain and range are both unrestricted.",
        "workingOut": "\\text{Domain: all real } x, \\quad \\text{Range: all real } y"
      }
    ]
  },

  // ── QUESTION 12 (subQuestions) ──
  {
    "id": "y11a-3b-q12",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "Consider the function \\( R(x) = \\sqrt{2x} \\).",
    "subQuestions": [
      {
        "id": "y11a-3b-q12a",
        "type": "short_answer",
        "question": "a) What is the natural domain of \\( R(x) \\)? (Format: 'x >= 0')",
        "a": "x >= 0"
      },
      {
        "id": "y11a-3b-q12b",
        "type": "teacher_review",
        "question": "b) Copy and complete the table of values (round to 1 decimal place where necessary) for \\( x = 0, 0.5, 1, 2, 3, 4.5, 8 \\).",
        "a": "Table of values: (0, 0), (0.5, 1), (1, 1.4), (2, 2), (3, 2.4), (4.5, 3), (8, 4)."
      },
      {
        "id": "y11a-3b-q12c",
        "type": "teacher_review",
        "question": "c) Plot these points and join them with a smooth curve starting at the origin. What type of curve is this?",
        "a": "The curve is the upper half of a parabola opening to the right (specifically, \\( y^2 = 2x \\) for \\( y \\ge 0 \\))."
      }
    ],
    "solutionSteps": [
      {
        "explanation": "For part a, find when the inside of the square root is non-negative.",
        "workingOut": "2x \\ge 0 \\implies x \\ge 0"
      },
      {
        "explanation": "For part b, calculate \\( R(x) = \\sqrt{2x} \\) for each input.",
        "workingOut": "\\begin{aligned} R(0) &= \\sqrt{0} = 0 \\\\ R(0.5) &= \\sqrt{1} = 1 \\\\ R(1) &= \\sqrt{2} \\approx 1.4 \\\\ R(2) &= \\sqrt{4} = 2 \\\\ R(3) &= \\sqrt{6} \\approx 2.4 \\\\ R(4.5) &= \\sqrt{9} = 3 \\\\ R(8) &= \\sqrt{16} = 4 \\end{aligned}"
      },
      {
        "explanation": "For part c, plotting \\( y = \\sqrt{2x} \\) and squaring both sides gives \\( y^2 = 2x \\), which is a horizontal parabola.",
        "workingOut": "y = \\sqrt{2x} \\implies y^2 = 2x \\quad (y \\ge 0)"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 400,
        "height": 300,
        "boundingbox": [-1, 5, 9, -1],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-0.5,0], [8.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-0.5], [0,4.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [8.3, -0.3, 'x'], {fontSize: 14});\nboard.create('text', [-0.3, 4.3, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return Math.sqrt(2*x); }, 0, 8.5], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('point', [0.5, 1], {size: 2, color: 'black'});\nboard.create('point', [2, 2], {size: 2, color: 'black'});\nboard.create('point', [4.5, 3], {size: 2, color: 'black'});\nboard.create('point', [8, 4], {size: 2, color: 'black'});\nboard.unsuspendUpdate();"
      }
    }
  },

  // ── QUESTION 13 (subQuestions) ──
  {
    "id": "y11a-3b-q13",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "Consider the reciprocal function \\( h(x) = \\frac{3}{x} \\).",
    "subQuestions": [
      {
        "id": "y11a-3b-q13a",
        "type": "short_answer",
        "question": "a) What is the natural domain of \\( h(x) \\)? (Format: 'x != 0')",
        "a": "x != 0"
      },
      {
        "id": "y11a-3b-q13b",
        "type": "teacher_review",
        "question": "b) Copy and complete the table of values (use '*' or 'undefined' for \\( x = 0 \\)) for \\( x = -6, -3, -1.5, -1, 0, 1, 1.5, 3, 6 \\). Explain why \\( x = 0 \\) is undefined.",
        "a": "Table of values: (-6, -0.5), (-3, -1), (-1.5, -2), (-1, -3), (0, undefined), (1, 3), (1.5, 2), (3, 1), (6, 0.5).\nAt x = 0, division by zero is undefined, so the function value does not exist."
      },
      {
        "id": "y11a-3b-q13c",
        "type": "teacher_review",
        "question": "c) Plot these points and join them with a smooth curve in two parts. What is the name of this type of curve?",
        "a": "The curve is a rectangular hyperbola with asymptotes along the x-axis and y-axis."
      }
    ],
    "solutionSteps": [
      {
        "explanation": "For part a, find when the denominator is zero.",
        "workingOut": "x \\neq 0"
      },
      {
        "explanation": "For part b, calculate \\( h(x) = \\frac{3}{x} \\) for each input value.",
        "workingOut": "\\begin{aligned} h(-6) &= -0.5, \\quad h(-3) = -1, \\quad h(-1.5) = -2, \\quad h(-1) = -3 \\\\ h(0) &\\rightarrow \\text{division by zero } \\implies \\text{undefined} \\\\ h(1) &= 3, \\quad h(1.5) = 2, \\quad h(3) = 1, \\quad h(6) = 0.5 \\end{aligned}"
      },
      {
        "explanation": "For part c, describe the hyperbola shape. As \\( x \\to 0 \\), \\( y \\to \\pm\\infty \\). As \\( x \\to \\pm\\infty \\), \\( y \\to 0 \\).",
        "workingOut": ""
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 400,
        "height": 300,
        "boundingbox": [-7, 4, 7, -4],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-6.5,0], [6.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.5], [0,3.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [6.3, -0.3, 'x'], {fontSize: 14});\nboard.create('text', [-0.3, 3.3, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return 3/x; }, 0.1, 6.5], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('functiongraph', [function(x){ return 3/x; }, -6.5, -0.1], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.unsuspendUpdate();"
      }
    }
  },

  // ── QUESTION 14 (subQuestions) ──
  {
    "id": "y11a-3b-q14",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "Jordan has a \\( 24 \\text{ cm} \\) piece of wire, which he bends into the shape of a rectangle. Let \\( x \\) be the length of one side of the rectangle.",
    "subQuestions": [
      {
        "id": "y11a-3b-q14a",
        "type": "short_answer",
        "question": "a) Write an expression for the length of the opposite side.",
        "a": "x"
      },
      {
        "id": "y11a-3b-q14b",
        "type": "short_answer",
        "question": "b) Write an expression for the length of each of the remaining sides in terms of \\( x \\).",
        "a": "12 - x"
      },
      {
        "id": "y11a-3b-q14c",
        "type": "short_answer",
        "question": "c) Express the area \\( A \\) of the rectangle as a function of \\( x \\).",
        "a": "x(12 - x)"
      },
      {
        "id": "y11a-3b-q14d",
        "type": "short_answer",
        "question": "d) Using the fact that physical lengths must be positive, state the domain of \\( A \\). (Format: '0 < x < 12')",
        "a": "0 < x < 12"
      },
      {
        "id": "y11a-3b-q14e",
        "type": "teacher_review",
        "question": "e) Sketch the graph of the area function \\( A(x) \\) over the domain found in part d.",
        "a": "Parabola opening downwards with x-intercepts at (0, 0) and (12, 0), and vertex (maximum area) at (6, 36)."
      }
    ],
    "solutionSteps": [
      {
        "explanation": "For part a, opposite sides of a rectangle are equal in length, so the opposite side must be \\( x \\).",
        "workingOut": ""
      },
      {
        "explanation": "For part b, the total perimeter is \\( 24 \\text{ cm} \\). Thus, the sum of adjacent sides is half the perimeter.",
        "workingOut": "\\text{Adjacent side} = \\frac{24 - 2x}{2} = 12 - x"
      },
      {
        "explanation": "For part c, the area is length multiplied by width.",
        "workingOut": "A(x) = x(12 - x) = 12x - x^2"
      },
      {
        "explanation": "For part d, physical dimensions must be positive, so both \\( x > 0 \\) and \\( 12 - x > 0 \\).",
        "workingOut": "x > 0 \\quad \\text{and} \\quad 12 - x > 0 \\implies 0 < x < 12"
      },
      {
        "explanation": "For part e, the graph of \\( A(x) = 12x - x^2 \\) is a downward-opening parabola with roots at \\( x = 0, 12 \\) and its vertex at the midpoint \\( x = 6 \\).",
        "workingOut": "A(6) = 6(12 - 6) = 36"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 400,
        "height": 300,
        "boundingbox": [-2, 45, 14, -5],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-1,0], [13,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3], [0,42]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [12.8, -1, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 40, 'A'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return 12*x - x*x; }, 0, 12], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('point', [6, 36], {name: '(6,36)', size: 3, color: 'red'});\nboard.create('point', [0, 0], {size: 3, face: 'o', color: '#4f46e5', fixed: true});\nboard.create('point', [12, 0], {size: 3, face: 'o', color: '#4f46e5', fixed: true});\nboard.unsuspendUpdate();"
      }
    }
  },

  // ── QUESTION 15 ──
  {
    "id": "y11a-3b-q15a",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "Solve the equation \\( 3x - y + 4 = 0 \\) for \\( y \\) and hence explain why it represents a function.",
    "a": "y = 3x + 4. It represents a function because for every input x, there is exactly one corresponding value of y.",
    "solutionSteps": [
      {
        "explanation": "Isolate \\( y \\) in the equation.",
        "workingOut": "3x - y + 4 = 0 \\implies y = 3x + 4"
      },
      {
        "explanation": "Analyze the result. For any real number \\( x \\), multiplying by 3 and adding 4 gives a single, unique real number.",
        "workingOut": ""
      },
      {
        "explanation": "Since each input has exactly one output, the equation represents a function (specifically, a linear function).",
        "workingOut": ""
      }
    ]
  },
  {
    "id": "y11a-3b-q15b",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "Solve the equation \\( xy = 6 \\) for \\( y \\) and explain why it represents a function.",
    "a": "y = 6/x. It represents a function because for every input x (except x = 0), there is exactly one value of y.",
    "solutionSteps": [
      {
        "explanation": "Divide both sides by \\( x \\), noting that \\( x \\neq 0 \\).",
        "workingOut": "y = \\frac{6}{x} \\quad (x \\neq 0)"
      },
      {
        "explanation": "For any non-zero input \\( x \\), \\( \\frac{6}{x} \\) yields a unique single output \\( y \\).",
        "workingOut": ""
      },
      {
        "explanation": "Since every value in the domain maps to exactly one value in the range, it is a function.",
        "workingOut": ""
      }
    ]
  },
  {
    "id": "y11a-3b-q15c",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "Solve the equation \\( xy - 3y = 4 \\) for \\( y \\) and explain why it represents a function.",
    "a": "y = 4/(x - 3). It represents a function because for any input x (except x = 3), there is exactly one value of y.",
    "solutionSteps": [
      {
        "explanation": "Factor out \\( y \\) on the left-hand side.",
        "workingOut": "y(x - 3) = 4"
      },
      {
        "explanation": "Divide by \\( x - 3 \\) to solve for \\( y \\).",
        "workingOut": "y = \\frac{4}{x - 3} \\quad (x \\neq 3)"
      },
      {
        "explanation": "For any input \\( x \\neq 3 \\), \\( \\frac{4}{x-3} \\) produces a single, unique real number.",
        "workingOut": ""
      },
      {
        "explanation": "Thus, the relation is a function.",
        "workingOut": ""
      }
    ]
  },
  {
    "id": "y11a-3b-q15d",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Solve the equation \\( y + 3 = \\sqrt{16 - x^2} \\) for \\( y \\) and explain why it represents a function.",
    "a": "y = \\sqrt{16 - x^2} - 3. It represents a function because the positive square root sign specifies a single principal output value of y for each input x in the domain [-4, 4].",
    "solutionSteps": [
      {
        "explanation": "Subtract 3 from both sides of the equation.",
        "workingOut": "y = \\sqrt{16 - x^2} - 3"
      },
      {
        "explanation": "Find the domain restrictions. The expression inside the radical must be non-negative.",
        "workingOut": "16 - x^2 \\ge 0 \\implies x^2 \\le 16 \\implies -4 \\le x \\le 4"
      },
      {
        "explanation": "The symbol \\( \\sqrt{} \\) represents the principal (positive) square root only. Therefore, for each \\( x \\in [-4, 4] \\), there is exactly one real value for \\( y \\).",
        "workingOut": ""
      },
      {
        "explanation": "Hence, it represents a function (specifically, the upper semicircle centered at (0, -3)).",
        "workingOut": ""
      }
    ]
  },

  // ── QUESTION 16 ──
  {
    "id": "y11a-3b-q16a",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\frac{x}{\\sqrt{x + 3}} \\). (Format: 'x > -3')",
    "a": "x > -3",
    "solutionSteps": [
      {
        "explanation": "Consider the restrictions. The denominator cannot be zero, and the radicand must be non-negative.",
        "workingOut": "\\text{Radicand: } x + 3 \\ge 0 \\implies x \\ge -3 \\\\\n\\text{Denominator } \\neq 0 \\implies \\sqrt{x+3} \\neq 0 \\implies x \\neq -3"
      },
      {
        "explanation": "Combine both conditions.",
        "workingOut": "x > -3"
      }
    ]
  },
  {
    "id": "y11a-3b-q16b",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\frac{3}{x^2 - 9} \\). (Format: 'x != 3 and x != -3')",
    "a": "x != 3 and x != -3",
    "solutionSteps": [
      {
        "explanation": "Set the quadratic denominator to not equal zero.",
        "workingOut": "x^2 - 9 \\neq 0"
      },
      {
        "explanation": "Factorise and solve.",
        "workingOut": "(x - 3)(x + 3) \\neq 0 \\implies x \\neq 3 \\text{ and } x \\neq -3"
      }
    ]
  },
  {
    "id": "y11a-3b-q16c",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\frac{1}{x^2 + 2x} \\). (Format: 'x != 0 and x != -2')",
    "a": "x != 0 and x != -2",
    "solutionSteps": [
      {
        "explanation": "Set the denominator to be non-zero.",
        "workingOut": "x^2 + 2x \\neq 0"
      },
      {
        "explanation": "Factorise the quadratic expression.",
        "workingOut": "x(x + 2) \\neq 0"
      },
      {
        "explanation": "Identify the values to exclude.",
        "workingOut": "x \\neq 0 \\text{ and } x \\neq -2"
      }
    ]
  },
  {
    "id": "y11a-3b-q16d",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\frac{1}{x^2 - 6x + 8} \\). (Format: 'x != 2 and x != 4')",
    "a": "x != 2 and x != 4",
    "solutionSteps": [
      {
        "explanation": "Set the denominator expression to not equal zero.",
        "workingOut": "x^2 - 6x + 8 \\neq 0"
      },
      {
        "explanation": "Factorise the quadratic trinomial.",
        "workingOut": "(x - 2)(x - 4) \\neq 0"
      },
      {
        "explanation": "Solve the exclusions.",
        "workingOut": "x \\neq 2 \\text{ and } x \\neq -4 \\implies x \\neq 2, 4"
      }
    ]
  },
  {
    "id": "y11a-3b-q16e",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\sqrt{x^2 - 9} \\). (Format: 'x <= -3 or x >= 3')",
    "a": "x <= -3 or x >= 3",
    "solutionSteps": [
      {
        "explanation": "The quantity under the square root must be non-negative.",
        "workingOut": "x^2 - 9 \\ge 0"
      },
      {
        "explanation": "Factorise the difference of squares.",
        "workingOut": "(x - 3)(x + 3) \\ge 0"
      },
      {
        "explanation": "For the product to be positive or zero, \\( x \\) must lie outside the roots \\( -3 \\) and \\( 3 \\).",
        "workingOut": "x \\le -3 \\quad \\text{or} \\quad x \\ge 3"
      }
    ]
  },
  {
    "id": "y11a-3b-q16f",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\frac{1}{\\sqrt{4 - x^2}} \\). (Format: '-2 < x < 2')",
    "a": "-2 < x < 2",
    "solutionSteps": [
      {
        "explanation": "The radicand in the denominator must be strictly positive.",
        "workingOut": "4 - x^2 > 0"
      },
      {
        "explanation": "Factorise the inequality.",
        "workingOut": "(2 - x)(2 + x) > 0"
      },
      {
        "explanation": "For the product to be positive, \\( x \\) must lie strictly between the roots \\( -2 \\) and \\( 2 \\).",
        "workingOut": "-2 < x < 2"
      }
    ]
  }
];
