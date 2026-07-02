export const Y11_CH3B_QUESTIONS = [
  {
    "id": "y11a-3b-q1a",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Copy the graph of the circle below. Draw a vertical line showing that the graph does not represent a function, and explain why.",
    "a": "0",
    "solutionSteps": [
      {
        "explanation": "Recall: the vertical line test states a graph represents a function only if every possible vertical line crosses it at most once. If any vertical line crosses the graph twice or more, the graph is not a function.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "A relation is a function if and only if every vertical line intersects its graph at most once.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Draw a vertical line, for example at \\( x = 2 \\). It cuts the circle at two distinct points: \\( (2, sqrt{12}) \\) and \\( (2, -\\sqrt{12}) \\).",
        "workingOut": "\\(x^2 + y^2 = 16 \\implies 2^2 + y^2 = 16 \\implies y = \\pm \\sqrt{12}\\)",
        "graphData": null
      },
      {
        "explanation": "Because one \\( x \\)-value corresponds to more than one \\( y \\)-value, the relation is not a function.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Applying the vertical line test confirms: No — a vertical line (e.g. \\( x = 2 \\)) crosses the circle twice, at \\( (2, \\sqrt{12}) \\) and \\( (2, -\\sqrt{12}) \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [
          -6,
          6,
          6,
          -6
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-5,0], [5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-5], [0,5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.6, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 4.6, 'y'], {fontSize: 14});\nboard.create('circle', [[0,0], 4], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('text', [0.2, 4.2, '4'], {fontSize: 12});\nboard.create('text', [0.2, -4.2, '-4'], {fontSize: 12});\nboard.create('text', [4.2, 0.2, '4'], {fontSize: 12});\nboard.create('text', [-4.7, 0.2, '-4'], {fontSize: 12});\nboard.unsuspendUpdate();"
      }
    },
    "opts": [
      "No — a vertical line (e.g. \\( x = 2 \\)) crosses the circle twice, at \\( (2, \\sqrt{12}) \\) and \\( (2, -\\sqrt{12}) \\).",
      "Yes — every \\( x \\)-value on the circle has exactly one \\( y \\)-value.",
      "No — the circle is not centred at the origin.",
      "Yes — the circle passes the horizontal line test."
    ]
  },
  {
    "id": "y11a-3b-q1b",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Copy the graph of the semicircle below. Draw a vertical line showing that the graph does not represent a function, and explain why.",
    "a": "1",
    "solutionSteps": [
      {
        "explanation": "Recall: the vertical line test states a graph represents a function only if every possible vertical line crosses it at most once. If any vertical line crosses the graph twice or more, the graph is not a function.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Apply the vertical line test to the semicircle on the right of the y-axis.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Any vertical line drawn for \\( 0 < x < 3 \\) (for example, \\( x = 1.5 \\)) will intersect the curve at two distinct y-coordinates.",
        "workingOut": "\\(x = \\sqrt{9-y^2} \\implies 1.5^2 + y^2 = 9 \\implies y = \\pm \\sqrt{6.75} \\approx \\pm 2.6\\)",
        "graphData": null
      },
      {
        "explanation": "Thus, the relation fails the vertical line test and is not a function.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Applying the vertical line test confirms: No — a vertical line (e.g. \\( x = 1.5 \\)) crosses the semicircle twice.",
        "workingOut": "",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [
          -2,
          4,
          5,
          -4
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-1.5,0], [4,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.5], [0,3.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [3.8, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 3.3, 'y'], {fontSize: 14});\nboard.create('arc', [[0,0], [0,3], [0,-3]], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('text', [0.2, 3.1, '3'], {fontSize: 12});\nboard.create('text', [0.2, -3.1, '-3'], {fontSize: 12});\nboard.create('text', [3.1, 0.2, '3'], {fontSize: 12});\nboard.unsuspendUpdate();"
      }
    },
    "opts": [
      "Yes — a semicircle always passes the vertical line test.",
      "No — a vertical line (e.g. \\( x = 1.5 \\)) crosses the semicircle twice.",
      "No — the semicircle has open endpoints.",
      "Yes — every \\( x \\)-value gives a unique \\( y \\)-value."
    ]
  },
  {
    "id": "y11a-3b-q1c",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Copy the sideways S-curve shown below. Draw a vertical line showing that the graph does not represent a function, and explain why.",
    "a": "1",
    "solutionSteps": [
      {
        "explanation": "Recall: the vertical line test states a graph represents a function only if every possible vertical line crosses it at most once. If any vertical line crosses the graph twice or more, the graph is not a function.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Examine the S-shaped curve of the relation \\( x = y^3 - 4y \\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "If we draw a vertical line near the y-axis, such as \\( x = 1 \\), it intersects the curve three times because the curve curves back on itself.",
        "workingOut": "\\(y^3 - 4y = 1 \\implies \\text{three real solutions for } y\\)",
        "graphData": null
      },
      {
        "explanation": "Since one value of \\( x \\) produces three values of \\( y \\), this relation is not a function.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Applying the vertical line test confirms: No — a vertical line (e.g. \\( x = 1 \\)) crosses the curve three times.",
        "workingOut": "",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [
          -5,
          4,
          5,
          -4
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-4.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.5], [0,3.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 3.3, 'y'], {fontSize: 14});\nboard.create('curve', [function(t){ return t*t*t - 4*t; }, function(t){ return t; }, -2.5, 2.5], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.unsuspendUpdate();"
      }
    },
    "opts": [
      "Yes — the curve is symmetric about the origin.",
      "No — a vertical line (e.g. \\( x = 1 \\)) crosses the curve three times.",
      "No — the curve does not pass through the origin.",
      "Yes — every \\( x \\)-value gives one \\( y \\)-value."
    ]
  },
  {
    "id": "y11a-3b-q1d",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Copy the sideways parabola opening to the left below. Draw a vertical line showing that the graph does not represent a function, and explain why.",
    "a": "0",
    "solutionSteps": [
      {
        "explanation": "Recall: the vertical line test states a graph represents a function only if every possible vertical line crosses it at most once. If any vertical line crosses the graph twice or more, the graph is not a function.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Observe the sideways parabola \\( x = 3 - \\frac{y^2}{2} \\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Draw a vertical line at \\( x = 1 \\). Find the corresponding y-values.",
        "workingOut": "\\(1 = 3 - \\frac{y^2}{2} \\implies y^2 = 4 \\implies y = \\pm 2\\)",
        "graphData": null
      },
      {
        "explanation": "Since \\( x = 1 \\) maps to both \\( y = 2 \\) and \\( y = -2 \\), the relation is not a function.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Applying the vertical line test confirms: No — a vertical line (e.g. \\( x = 1 \\)) crosses the parabola twice, at \\( y = 2 \\) and \\( y = -2 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [
          -5,
          4,
          5,
          -4
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-4.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.5], [0,3.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 3.3, 'y'], {fontSize: 14});\nboard.create('curve', [function(t){ return 3 - t*t/2; }, function(t){ return t; }, -3.5, 3.5], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('text', [3.1, 0.2, '3'], {fontSize: 12});\nboard.unsuspendUpdate();"
      }
    },
    "opts": [
      "No — a vertical line (e.g. \\( x = 1 \\)) crosses the parabola twice, at \\( y = 2 \\) and \\( y = -2 \\).",
      "Yes — parabolas always pass the vertical line test.",
      "No — the parabola only exists for \\( x < 0 \\).",
      "Yes — this parabola opens upwards."
    ]
  },
  {
    "id": "y11a-3b-q1e",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Copy the hyperbola shown below. Draw a vertical line showing that the graph does not represent a function, and explain why.",
    "a": "2",
    "solutionSteps": [
      {
        "explanation": "Recall: the vertical line test states a graph represents a function only if every possible vertical line crosses it at most once. If any vertical line crosses the graph twice or more, the graph is not a function.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Consider the vertical hyperbola \\( y^2 - x^2 = 4 \\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Choose a vertical line like \\( x = 1 \\). Substitute it to find the points of intersection.",
        "workingOut": "\\(y^2 - 1^2 = 4 \\implies y^2 = 5 \\implies y = \\pm \\sqrt{5}\\)",
        "graphData": null
      },
      {
        "explanation": "Since there are two y-values for a single x-value, this hyperbola is not a function.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Applying the vertical line test confirms: No — a vertical line (e.g. \\( x = 1 \\)) crosses both branches, at \\( (1, \\sqrt{5}) \\) and \\( (1, -\\sqrt{5}) \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [
          -5,
          6,
          5,
          -6
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-4.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-5.5], [0,5.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 5.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return Math.sqrt(4 + x*x); }, -5, 5], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('functiongraph', [function(x){ return -Math.sqrt(4 + x*x); }, -5, 5], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('text', [0.2, 2.2, '2'], {fontSize: 12});\nboard.create('text', [0.2, -2.2, '-2'], {fontSize: 12});\nboard.unsuspendUpdate();"
      }
    },
    "opts": [
      "No — a hyperbola has no \\( y \\)-intercepts.",
      "Yes — the two branches never share an \\( x \\)-value.",
      "No — a vertical line (e.g. \\( x = 1 \\)) crosses both branches, at \\( (1, \\sqrt{5}) \\) and \\( (1, -\\sqrt{5}) \\).",
      "Yes — a hyperbola opens along the \\( x \\)-axis only."
    ]
  },
  {
    "id": "y11a-3b-q1f",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Copy the looped curve shown below. Draw a vertical line showing that the graph does not represent a function, and explain why.",
    "a": "2",
    "solutionSteps": [
      {
        "explanation": "Recall: the vertical line test states a graph represents a function only if every possible vertical line crosses it at most once. If any vertical line crosses the graph twice or more, the graph is not a function.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Examine the loop curve defined by \\( x = t^2 - 1, y = t^3 - t \\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Any vertical line drawn for \\( -1 < x < 0 \\) (such as \\( x = -0.5 \\)) intersects the loop at two distinct points.",
        "workingOut": "\\(t^2 - 1 = -0.5 \\implies t = \\pm \\frac{1}{\\sqrt{2}} \\implies y = \\pm \\frac{1}{2\\sqrt{2}} - (\\pm \\frac{1}{\\sqrt{2}}) \\implies y = \\pm \\frac{1}{2\\sqrt{2}}\\)",
        "graphData": null
      },
      {
        "explanation": "Because a single input \\( x \\) maps to multiple outputs \\( y \\), it is not a function.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Applying the vertical line test confirms: No — a vertical line (e.g. \\( x = -0.5 \\)) crosses the loop at two points.",
        "workingOut": "",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [
          -2.5,
          2,
          2.5,
          -2
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-2,0], [2,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-1.5], [0,1.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [1.8, -0.2, 'x'], {fontSize: 14});\nboard.create('text', [-0.2, 1.3, 'y'], {fontSize: 14});\nboard.create('curve', [function(t){ return t*t - 1; }, function(t){ return t*t*t - t; }, -1.5, 1.5], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.unsuspendUpdate();"
      }
    },
    "opts": [
      "Yes — the loop only touches itself once.",
      "No — the loop is not a closed curve.",
      "No — a vertical line (e.g. \\( x = -0.5 \\)) crosses the loop at two points.",
      "Yes — every \\( x \\)-value in the loop gives one \\( y \\)-value."
    ]
  },
  {
    "id": "y11a-3b-q2a",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Use the vertical line test to determine whether the graph below represents a function. (Write 'Yes' or 'No')",
    "a": "0",
    "solutionSteps": [
      {
        "explanation": "General rule: the vertical line test says a graph represents a function only if every possible vertical line crosses it at most once anywhere along the curve.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Look at the parabola opening upwards. Any vertical line drawn on this graph will intersect the curve at most once.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Therefore, the relation represents a function.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Applying the test to this curve, the correct answer is \"Yes\".",
        "workingOut": "",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [
          -2,
          6,
          6,
          -3
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-1.5,0], [5.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-2.5], [0,5.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [5.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 5.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return x*x - 4*x + 2; }, -1.5, 5.5], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.unsuspendUpdate();"
      }
    },
    "opts": [
      "Yes",
      "No"
    ]
  },
  {
    "id": "y11a-3b-q2b",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Use the vertical line test to determine whether the circular arc with open endpoints below represents a function. (Write 'Yes' or 'No')",
    "a": "0",
    "solutionSteps": [
      {
        "explanation": "General rule: the vertical line test says a graph represents a function only if every possible vertical line crosses it at most once anywhere along the curve.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "A vertical line can be drawn (e.g. at \\( x = 0 \\)) that cuts the upper and lower halves of this circular shape.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Since some vertical lines intersect the graph at two points, it does not represent a function.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Applying the test to this curve, the correct answer is \"No\".",
        "workingOut": "",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [
          -7,
          7,
          7,
          -7
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-6.5,0], [6.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-6.5], [0,6.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [6.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 6.2, 'y'], {fontSize: 14});\nboard.create('arc', [[0,0], [-4,3], [4,3]], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('point', [-4, 3], {size: 3, face: 'o', color: '#4f46e5', fixed: true});\nboard.create('point', [4, 3], {size: 3, face: 'o', color: '#4f46e5', fixed: true});\nboard.unsuspendUpdate();"
      }
    },
    "opts": [
      "No",
      "Yes"
    ]
  },
  {
    "id": "y11a-3b-q2c",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Use the vertical line test to determine whether the straight line graph below represents a function. (Write 'Yes' or 'No')",
    "a": "0",
    "solutionSteps": [
      {
        "explanation": "General rule: the vertical line test says a graph represents a function only if every possible vertical line crosses it at most once anywhere along the curve.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "This is a linear relation representing a straight line with a negative gradient.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Every vertical line intersects this straight line exactly once. Thus, it represents a function.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Applying the test to this curve, the correct answer is \"Yes\".",
        "workingOut": "",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [
          -2,
          5,
          5,
          -2
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-1.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-1.5], [0,4.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 4.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return 3 - x; }, -1.5, 4.5], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.unsuspendUpdate();"
      }
    },
    "opts": [
      "Yes",
      "No"
    ]
  },
  {
    "id": "y11a-3b-q2d",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Use the vertical line test to determine whether the sideways parabola below represents a function. (Write 'Yes' or 'No')",
    "a": "0",
    "solutionSteps": [
      {
        "explanation": "General rule: the vertical line test says a graph represents a function only if every possible vertical line crosses it at most once anywhere along the curve.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "For any value \\( x > -2 \\) (where the vertex is at \\( x = -2 \\)), a vertical line intersects the curve at two distinct points.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Therefore, the relation fails the vertical line test and is not a function.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Applying the test to this curve, the correct answer is \"No\".",
        "workingOut": "",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [
          -4,
          4,
          5,
          -4
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-3.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.5], [0,3.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 3.2, 'y'], {fontSize: 14});\nboard.create('curve', [function(t){ return t*t - 2; }, function(t){ return t; }, -3.5, 3.5], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.unsuspendUpdate();"
      }
    },
    "opts": [
      "No",
      "Yes"
    ]
  },
  {
    "id": "y11a-3b-q2e",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Use the vertical line test to determine whether the vertical sinusoidal wave below represents a function. (Write 'Yes' or 'No')",
    "a": "0",
    "solutionSteps": [
      {
        "explanation": "General rule: the vertical line test says a graph represents a function only if every possible vertical line crosses it at most once anywhere along the curve.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "The wave oscillates horizontally as it goes vertically.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "A vertical line like \\( x = 1 \\) intersects this curve infinitely many times. So it is not a function.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Applying the test to this curve, the correct answer is \"No\".",
        "workingOut": "",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [
          -4,
          5,
          4,
          -5
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-3.5,0], [3.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-4.5], [0,4.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [3.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 4.2, 'y'], {fontSize: 14});\nboard.create('curve', [function(t){ return 2*Math.sin(t); }, function(t){ return t; }, -4.5, 4.5], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.unsuspendUpdate();"
      }
    },
    "opts": [
      "No",
      "Yes"
    ]
  },
  {
    "id": "y11a-3b-q2f",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Use the vertical line test to determine whether the cubic curve below represents a function. (Write 'Yes' or 'No')",
    "a": "0",
    "solutionSteps": [
      {
        "explanation": "General rule: the vertical line test says a graph represents a function only if every possible vertical line crosses it at most once anywhere along the curve.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "This cubic curve goes from top-left to bottom-right.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "For any value of \\( x \\), there is exactly one value of \\( y \\). A vertical line intersects this curve exactly once everywhere, so it is a function.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Applying the test to this curve, the correct answer is \"Yes\".",
        "workingOut": "",
        "graphData": null
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
          -6
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-3.5,0], [3.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-5.5], [0,5.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [3.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 5.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return -x*x*x + 3*x; }, -3.5, 3.5], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.unsuspendUpdate();"
      }
    },
    "opts": [
      "Yes",
      "No"
    ]
  },
  {
    "id": "y11a-3b-q2g",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Use the vertical line test to determine whether the semicircle on the left of the y-axis below represents a function. (Write 'Yes' or 'No')",
    "a": "0",
    "solutionSteps": [
      {
        "explanation": "General rule: the vertical line test says a graph represents a function only if every possible vertical line crosses it at most once anywhere along the curve.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "This semicircle has endpoints at \\( (0, 3) \\) and \\( (0, -3) \\) and curves to the left.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "For any value \\( -3 < x < 0 \\), a vertical line cuts the semicircle twice. Hence, it is not a function.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Applying the test to this curve, the correct answer is \"No\".",
        "workingOut": "",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [
          -5,
          4,
          2,
          -4
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-4.5,0], [1.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.5], [0,3.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [1.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 3.3, 'y'], {fontSize: 14});\nboard.create('arc', [[0,0], [0,-3], [0,3]], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('text', [-3.2, 0.2, '-3'], {fontSize: 12});\nboard.create('text', [0.2, 3.1, '3'], {fontSize: 12});\nboard.create('text', [0.2, -3.1, '-3'], {fontSize: 12});\nboard.unsuspendUpdate();"
      }
    },
    "opts": [
      "No",
      "Yes"
    ]
  },
  {
    "id": "y11a-3b-q2h",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Use the vertical line test to determine whether the semicircle above the x-axis below represents a function. (Write 'Yes' or 'No')",
    "a": "0",
    "solutionSteps": [
      {
        "explanation": "General rule: the vertical line test says a graph represents a function only if every possible vertical line crosses it at most once anywhere along the curve.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "This semicircle is on the upper half of the plane, starting at \\( (-3, 0) \\) and ending at \\( (3, 0) \\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Any vertical line drawn through this graph will intersect the curve at most once. Hence, it represents a function.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Applying the test to this curve, the correct answer is \"Yes\".",
        "workingOut": "",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [
          -5,
          4,
          5,
          -2
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-4.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-1.5], [0,3.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 3.3, 'y'], {fontSize: 14});\nboard.create('arc', [[0,0], [3,0], [-3,0]], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('text', [-3.2, -0.4, '-3'], {fontSize: 12});\nboard.create('text', [3.1, -0.4, '3'], {fontSize: 12});\nboard.create('text', [-0.4, 3.1, '3'], {fontSize: 12});\nboard.unsuspendUpdate();"
      }
    },
    "opts": [
      "Yes",
      "No"
    ]
  },
  {
    "id": "y11a-3b-q3a",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "State the domain and range of the relation shown in the graph. (Format: 'Domain: all real x, Range: y >= -2')",
    "a": "1",
    "solutionSteps": [
      {
        "explanation": "General rule: the domain is the full set of x-values the graph covers (read left-to-right); the range is the full set of y-values it covers (read bottom-to-top).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "The graph is a parabola opening upwards with its vertex at \\( (2, -2) \\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "The curve extends infinitely in the horizontal direction, so the domain is all real \\( x \\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "The lowest point is \\( y = -2 \\), so the range is all values greater than or equal to \\( -2 \\).",
        "workingOut": "\\( y \\ge -2 \\)",
        "graphData": null
      },
      {
        "explanation": "Reading the extent of the curve along each axis confirms the answer: \\( \\text{Domain: all real } x,\\ \\text{Range: } y \\geq -2 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [
          -2,
          6,
          6,
          -3
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-1.5,0], [5.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-2.5], [0,5.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [5.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 5.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return x*x - 4*x + 2; }, -1.5, 5.5], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.unsuspendUpdate();"
      }
    },
    "opts": [
      "\\( \\text{Domain: all real } x,\\ \\text{Range: } y \\leq -2 \\)",
      "\\( \\text{Domain: all real } x,\\ \\text{Range: } y \\geq -2 \\)",
      "\\( \\text{Domain: } y \\geq -2,\\ \\text{Range: all real } x \\)",
      "\\( \\text{Domain: } x \\geq -2,\\ \\text{Range: all real } y \\)"
    ]
  },
  {
    "id": "y11a-3b-q3b",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "State the domain and range of the circular arc (radius 5) shown in the graph, where the top endpoints at \\( y = 3 \\) are open. (Format: 'Domain: -5 < x < 5, Range: -5 <= y < 3' or similar using inequality signs)",
    "a": "0",
    "solutionSteps": [
      {
        "explanation": "General rule: the domain is the full set of x-values the graph covers (read left-to-right); the range is the full set of y-values it covers (read bottom-to-top).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "The graph is a circle of radius \\( 5 \\) with the top part missing. The open endpoints are at \\( (-4, 3) \\) and \\( (4, 3) \\).",
        "workingOut": "\\(x^2 + y^2 = 25 \\implies x = \\pm 4 \\text{ when } y = 3\\)",
        "graphData": null
      },
      {
        "explanation": "The domain goes between the open points in the x direction: \\( -5 < x < 5 \\). Wait, the endpoints of the arc are at \\( x = -4 \\) and \\( x = 4 \\) but the circle extends to the sides to \\( -5 \\) and \\( 5 \\).",
        "workingOut": "\\(\\text{Domain is } -5 < x < 5\\)",
        "graphData": null
      },
      {
        "explanation": "The lowest point of the circle is at \\( y = -5 \\) (included), and the highest points are the open circles at \\( y = 3 \\). So range is \\( -5 \\le y < 3 \\).",
        "workingOut": "\\(\\text{Range is } -5 \\le y < 3\\)",
        "graphData": null
      },
      {
        "explanation": "Reading the extent of the curve along each axis confirms the answer: \\( \\text{Domain: } -5 < x < 5,\\ \\text{Range: } -5 \\leq y < 3 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [
          -7,
          7,
          7,
          -7
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-6.5,0], [6.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-6.5], [0,6.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [6.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 6.2, 'y'], {fontSize: 14});\nboard.create('arc', [[0,0], [-4,3], [4,3]], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('point', [-4, 3], {size: 3, face: 'o', color: '#4f46e5', fixed: true});\nboard.create('point', [4, 3], {size: 3, face: 'o', color: '#4f46e5', fixed: true});\nboard.unsuspendUpdate();"
      }
    },
    "opts": [
      "\\( \\text{Domain: } -5 < x < 5,\\ \\text{Range: } -5 \\leq y < 3 \\)",
      "\\( \\text{Domain: } -5 \\leq x \\leq 5,\\ \\text{Range: } -5 < y \\leq 3 \\)",
      "\\( \\text{Domain: } -5 \\leq y < 3,\\ \\text{Range: } -5 < x < 5 \\)",
      "\\( \\text{Domain: } -5 \\leq x \\leq 5,\\ \\text{Range: } -5 \\leq y \\leq 3 \\)"
    ]
  },
  {
    "id": "y11a-3b-q3c",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "State the domain and range of the linear relation shown in the graph. (Format: 'Domain: all real x, Range: all real y')",
    "a": "0",
    "solutionSteps": [
      {
        "explanation": "General rule: the domain is the full set of x-values the graph covers (read left-to-right); the range is the full set of y-values it covers (read bottom-to-top).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "This straight line extends infinitely in both directions without any boundaries.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Therefore, both its domain and range are all real numbers.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Reading the extent of the curve along each axis confirms the answer: \\( \\text{Domain: all real } x,\\ \\text{Range: all real } y \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [
          -2,
          5,
          5,
          -2
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-1.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-1.5], [0,4.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 4.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return 3 - x; }, -1.5, 4.5], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.unsuspendUpdate();"
      }
    },
    "opts": [
      "\\( \\text{Domain: all real } x,\\ \\text{Range: all real } y \\)",
      "\\( \\text{Domain: } x \\geq 0,\\ \\text{Range: all real } y \\)",
      "\\( \\text{Domain: all real } x,\\ \\text{Range: } y \\geq 0 \\)",
      "\\( \\text{Domain: all real } x,\\ \\text{Range: } y \\neq 0 \\)"
    ]
  },
  {
    "id": "y11a-3b-q3d",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "State the domain and range of the sideways parabola shown in the graph. (Format: 'Domain: x >= -2, Range: all real y')",
    "a": "1",
    "solutionSteps": [
      {
        "explanation": "General rule: the domain is the full set of x-values the graph covers (read left-to-right); the range is the full set of y-values it covers (read bottom-to-top).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "The vertex of the sideways parabola is at \\( (-2, 0) \\) and it opens to the right.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Since it only exists for \\( x \\) values to the right of the vertex, the domain is \\( x \\ge -2 \\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "The parabola opens vertically infinitely as we go right, so the range is all real \\( y \\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Reading the extent of the curve along each axis confirms the answer: \\( \\text{Domain: } x \\geq -2,\\ \\text{Range: all real } y \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [
          -4,
          4,
          5,
          -4
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-3.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.5], [0,3.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 3.2, 'y'], {fontSize: 14});\nboard.create('curve', [function(t){ return t*t - 2; }, function(t){ return t; }, -3.5, 3.5], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.unsuspendUpdate();"
      }
    },
    "opts": [
      "\\( \\text{Domain: } x > -2,\\ \\text{Range: all real } y \\)",
      "\\( \\text{Domain: } x \\geq -2,\\ \\text{Range: all real } y \\)",
      "\\( \\text{Domain: all real } x,\\ \\text{Range: } y \\geq -2 \\)",
      "\\( \\text{Domain: } x \\leq -2,\\ \\text{Range: all real } y \\)"
    ]
  },
  {
    "id": "y11a-3b-q3e",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "State the domain and range of the relation shown in the graph. (Format: 'Domain: -2 <= x <= 2, Range: all real y')",
    "a": "0",
    "solutionSteps": [
      {
        "explanation": "General rule: the domain is the full set of x-values the graph covers (read left-to-right); the range is the full set of y-values it covers (read bottom-to-top).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "The curve is a vertically oriented sinusoidal wave.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Its horizontal width is bounded between \\( x = -2 \\) and \\( x = 2 \\), so the domain is \\( -2 \\le x \\le 2 \\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "The wave continues up and down indefinitely, so the range is all real \\( y \\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Reading the extent of the curve along each axis confirms the answer: \\( \\text{Domain: } -2 \\leq x \\leq 2,\\ \\text{Range: all real } y \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [
          -4,
          5,
          4,
          -5
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-3.5,0], [3.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-4.5], [0,4.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [3.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 4.2, 'y'], {fontSize: 14});\nboard.create('curve', [function(t){ return 2*Math.sin(t); }, function(t){ return t; }, -4.5, 4.5], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.unsuspendUpdate();"
      }
    },
    "opts": [
      "\\( \\text{Domain: } -2 \\leq x \\leq 2,\\ \\text{Range: all real } y \\)",
      "\\( \\text{Domain: all real } x,\\ \\text{Range: } -2 \\leq y \\leq 2 \\)",
      "\\( \\text{Domain: } -2 < x < 2,\\ \\text{Range: all real } y \\)",
      "\\( \\text{Domain: } -2 \\leq x \\leq 2,\\ \\text{Range: } -2 \\leq y \\leq 2 \\)"
    ]
  },
  {
    "id": "y11a-3b-q3f",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "State the domain and range of the cubic function shown in the graph. (Format: 'Domain: all real x, Range: all real y')",
    "a": "0",
    "solutionSteps": [
      {
        "explanation": "General rule: the domain is the full set of x-values the graph covers (read left-to-right); the range is the full set of y-values it covers (read bottom-to-top).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "This cubic curve goes from top-left to bottom-right.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Cubic polynomials have both domain and range as all real numbers, since they go to infinity in both coordinates.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Reading the extent of the curve along each axis confirms the answer: \\( \\text{Domain: all real } x,\\ \\text{Range: all real } y \\).",
        "workingOut": "",
        "graphData": null
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
          -6
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-3.5,0], [3.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-5.5], [0,5.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [3.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 5.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return -x*x*x + 3*x; }, -3.5, 3.5], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.unsuspendUpdate();"
      }
    },
    "opts": [
      "\\( \\text{Domain: all real } x,\\ \\text{Range: all real } y \\)",
      "\\( \\text{Domain: all real } x,\\ \\text{Range: } y \\geq 0 \\)",
      "\\( \\text{Domain: } x \\geq 0,\\ \\text{Range: all real } y \\)",
      "\\( \\text{Domain: all real } x,\\ \\text{Range: } y \\neq 0 \\)"
    ]
  },
  {
    "id": "y11a-3b-q3g",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "State the domain and range of the semicircle on the left of the y-axis. (Format: 'Domain: -3 <= x <= 0, Range: -3 <= y <= 3')",
    "a": "1",
    "solutionSteps": [
      {
        "explanation": "General rule: the domain is the full set of x-values the graph covers (read left-to-right); the range is the full set of y-values it covers (read bottom-to-top).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "This semicircle has radius \\( 3 \\) and lies on the left of the y-axis.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "The x-coordinates span from \\( -3 \\) to \\( 0 \\) inclusive. So Domain is \\( -3 \\le x \\le 0 \\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "The y-coordinates span from the lowest point \\( -3 \\) to the highest point \\( 3 \\). So Range is \\( -3 \\le y \\le 3 \\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Reading the extent of the curve along each axis confirms the answer: \\( \\text{Domain: } -3 \\leq x \\leq 0,\\ \\text{Range: } -3 \\leq y \\leq 3 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [
          -5,
          4,
          2,
          -4
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-4.5,0], [1.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.5], [0,3.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [1.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 3.3, 'y'], {fontSize: 14});\nboard.create('arc', [[0,0], [0,-3], [0,3]], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('text', [-3.2, 0.2, '-3'], {fontSize: 12});\nboard.create('text', [0.2, 3.1, '3'], {fontSize: 12});\nboard.create('text', [0.2, -3.1, '-3'], {fontSize: 12});\nboard.unsuspendUpdate();"
      }
    },
    "opts": [
      "\\( \\text{Domain: } -3 \\leq y \\leq 3,\\ \\text{Range: } -3 \\leq x \\leq 0 \\)",
      "\\( \\text{Domain: } -3 \\leq x \\leq 0,\\ \\text{Range: } -3 \\leq y \\leq 3 \\)",
      "\\( \\text{Domain: } 0 \\leq x \\leq 3,\\ \\text{Range: } -3 \\leq y \\leq 3 \\)",
      "\\( \\text{Domain: } -3 < x < 0,\\ \\text{Range: } -3 \\leq y \\leq 3 \\)"
    ]
  },
  {
    "id": "y11a-3b-q3h",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "State the domain and range of the upper semicircle shown in the graph. (Format: 'Domain: -3 <= x <= 3, Range: 0 <= y <= 3')",
    "a": "1",
    "solutionSteps": [
      {
        "explanation": "General rule: the domain is the full set of x-values the graph covers (read left-to-right); the range is the full set of y-values it covers (read bottom-to-top).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "The semicircle lies above the x-axis, spanning horizontally from \\( -3 \\) to \\( 3 \\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Thus, the Domain is \\( -3 \\le x \\le 3 \\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "The y-coordinates span from the bottom boundary \\( y = 0 \\) to the top of the curve \\( y = 3 \\). Thus, the Range is \\( 0 \\le y \\le 3 \\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Reading the extent of the curve along each axis confirms the answer: \\( \\text{Domain: } -3 \\leq x \\leq 3,\\ \\text{Range: } 0 \\leq y \\leq 3 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [
          -5,
          4,
          5,
          -2
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-4.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-1.5], [0,3.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 3.3, 'y'], {fontSize: 14});\nboard.create('arc', [[0,0], [3,0], [-3,0]], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('text', [-3.2, -0.4, '-3'], {fontSize: 12});\nboard.create('text', [3.1, -0.4, '3'], {fontSize: 12});\nboard.create('text', [-0.4, 3.1, '3'], {fontSize: 12});\nboard.unsuspendUpdate();"
      }
    },
    "opts": [
      "\\( \\text{Domain: } 0 \\leq y \\leq 3,\\ \\text{Range: } -3 \\leq x \\leq 3 \\)",
      "\\( \\text{Domain: } -3 \\leq x \\leq 3,\\ \\text{Range: } 0 \\leq y \\leq 3 \\)",
      "\\( \\text{Domain: } -3 \\leq x \\leq 3,\\ \\text{Range: } -3 \\leq y \\leq 3 \\)",
      "\\( \\text{Domain: } -3 \\leq x \\leq 3,\\ \\text{Range: } 0 \\leq y < 3 \\)"
    ]
  },
  {
    "id": "y11a-3b-q4a",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "For the linear function \\( y = -3x + 2 \\):\n\n(i) Copy and complete the table of values for \\( x = 0, 1, 2 \\).\n(ii) Plot the points and sketch the function.\n(iii) Write down the domain and range.",
    "a": "2",
    "solutionSteps": [
      {
        "explanation": "Substitute \\( x = 0, 1, 2 \\) into \\( y = -3x + 2 \\).",
        "workingOut": "\\(\\begin{aligned} x=0 \\implies y &= -3(0)+2 = 2 \\\\ x=1 \\implies y &= -3(1)+2 = -1 \\\\ x=2 \\implies y &= -3(2)+2 = -4 \\end{aligned}\\)",
        "graphData": null
      },
      {
        "explanation": "Plot the points \\( (0, 2) \\), \\( (1, -1) \\), and \\( (2, -4) \\) and connect them with a straight line.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Since it is a non-vertical straight line, the domain and range are both all real numbers.",
        "workingOut": "\\(\\text{Domain: all real } x, \\quad \\text{Range: all real } y\\)",
        "graphData": null
      },
      {
        "explanation": "Recognising the general shape of this function family (linear, quadratic, exponential, or cubic) helps you predict the domain and range quickly, even before plotting every point.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Reading the extent of the curve along each axis gives \\( \\text{Domain: all real } x,\\ \\text{Range: all real } y \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( \\text{Domain: all real } x,\\ \\text{Range: } y \\geq 0 \\)",
      "\\( \\text{Domain: } x \\geq 0,\\ \\text{Range: all real } y \\)",
      "\\( \\text{Domain: all real } x,\\ \\text{Range: all real } y \\)",
      "\\( \\text{Domain: all real } x,\\ \\text{Range: } y \\neq 0 \\)"
    ]
  },
  {
    "id": "y11a-3b-q4b",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "For the quadratic function \\( y = x^2 - 2x + 3 \\):\n\n(i) Copy and complete the table of values for \\( x = -1, 0, 1, 2, 3 \\).\n(ii) Plot the points and sketch the parabola.\n(iii) Write down the domain and range.",
    "a": "2",
    "solutionSteps": [
      {
        "explanation": "Substitute \\( x \\) values into \\( y = x^2 - 2x + 3 \\).",
        "workingOut": "\\(\\begin{aligned} x=-1 \\implies y &= (-1)^2 - 2(-1) + 3 = 6 \\\\ x=0 \\implies y &= (0)^2 - 2(0) + 3 = 3 \\\\ x=1 \\implies y &= (1)^2 - 2(1) + 3 = 2 \\\\ x=2 \\implies y &= (2)^2 - 2(2) + 3 = 3 \\\\ x=3 \\implies y &= (3)^2 - 2(3) + 3 = 6 \\end{aligned}\\)",
        "graphData": null
      },
      {
        "explanation": "The vertex is at \\( (1, 2) \\) and the y-intercept is at \\( (0, 3) \\). Plot the points and draw a smooth parabola opening upwards.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Identify the domain and range. The graph extends horizontally infinitely, and vertically starts from its minimum at \\( y = 2 \\).",
        "workingOut": "\\(\\text{Domain: all real } x, \\quad \\text{Range: } y \\ge 2\\)",
        "graphData": null
      },
      {
        "explanation": "Recognising the general shape of this function family (linear, quadratic, exponential, or cubic) helps you predict the domain and range quickly, even before plotting every point.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Reading the extent of the curve along each axis gives \\( \\text{Domain: all real } x,\\ \\text{Range: } y \\geq 2 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( \\text{Domain: all real } x,\\ \\text{Range: } y \\leq 2 \\)",
      "\\( \\text{Domain: } x \\geq 2,\\ \\text{Range: all real } y \\)",
      "\\( \\text{Domain: all real } x,\\ \\text{Range: } y \\geq 2 \\)",
      "\\( \\text{Domain: all real } x,\\ \\text{Range: } y > 2 \\)"
    ]
  },
  {
    "id": "y11a-3b-q5a",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\frac{2}{x} \\). (Format: 'x != 0' or 'all real x except x = 0')",
    "a": "0",
    "solutionSteps": [
      {
        "explanation": "General rule: for an expression under a square root, the radicand must be \\( \\geq 0 \\); for an expression in a denominator, the denominator must be \\( \\neq 0 \\). Combine every such restriction to get the natural domain.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Division by zero is undefined, so the denominator cannot be zero.",
        "workingOut": "\\( x \\neq 0 \\)",
        "graphData": null
      },
      {
        "explanation": "Thus, the domain includes all real numbers except \\( 0 \\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "The natural domain is \\( x \\neq 0 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( x \\neq 0 \\)",
      "\\( x \\neq 5 \\)",
      "\\( x \\in \\mathbb{R}\\ (\\text{all real } x) \\)",
      "\\( x = 0 \\)"
    ]
  },
  {
    "id": "y11a-3b-q5b",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\frac{1}{x - 4} \\). (Format: 'x != 4')",
    "a": "2",
    "solutionSteps": [
      {
        "explanation": "General rule: for an expression under a square root, the radicand must be \\( \\geq 0 \\); for an expression in a denominator, the denominator must be \\( \\neq 0 \\). Combine every such restriction to get the natural domain.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "The denominator cannot be zero.",
        "workingOut": "\\( x - 4 \\neq 0 \\implies x \\neq 4 \\)",
        "graphData": null
      },
      {
        "explanation": "The natural domain is all real numbers except \\( 4 \\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "The natural domain is \\( x \\neq 4 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( x \\neq -4 \\)",
      "\\( x \\in \\mathbb{R}\\ (\\text{all real } x) \\)",
      "\\( x \\neq 4 \\)",
      "\\( x = 4 \\)"
    ]
  },
  {
    "id": "y11a-3b-q5c",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\frac{3}{x + 2} \\). (Format: 'x != -2')",
    "a": "2",
    "solutionSteps": [
      {
        "explanation": "General rule: for an expression under a square root, the radicand must be \\( \\geq 0 \\); for an expression in a denominator, the denominator must be \\( \\neq 0 \\). Combine every such restriction to get the natural domain.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Set the denominator to not equal zero.",
        "workingOut": "\\( x + 2 \\neq 0 \\implies x \\neq -2 \\)",
        "graphData": null
      },
      {
        "explanation": "The natural domain is all real numbers except \\( -2 \\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "The natural domain is \\( x \\neq -2 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( x \\neq 2 \\)",
      "\\( x \\in \\mathbb{R}\\ (\\text{all real } x) \\)",
      "\\( x \\neq -2 \\)",
      "\\( x = -2 \\)"
    ]
  },
  {
    "id": "y11a-3b-q5d",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\frac{1}{3 + x} \\). (Format: 'x != -3')",
    "a": "2",
    "solutionSteps": [
      {
        "explanation": "General rule: for an expression under a square root, the radicand must be \\( \\geq 0 \\); for an expression in a denominator, the denominator must be \\( \\neq 0 \\). Combine every such restriction to get the natural domain.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Find values of \\( x \\) that make the denominator zero.",
        "workingOut": "\\( 3 + x \\neq 0 \\implies x \\neq -3 \\)",
        "graphData": null
      },
      {
        "explanation": "The natural domain is all real numbers except \\( -3 \\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "The natural domain is \\( x \\neq -3 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( x \\in \\mathbb{R}\\ (\\text{all real } x) \\)",
      "\\( x \\neq 3 \\)",
      "\\( x \\neq -3 \\)",
      "\\( x = -3 \\)"
    ]
  },
  {
    "id": "y11a-3b-q6a",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\sqrt{2x} \\). (Format: 'x >= 0')",
    "a": "0",
    "solutionSteps": [
      {
        "explanation": "General rule: for an expression under a square root, the radicand must be \\( \\geq 0 \\); for an expression in a denominator, the denominator must be \\( \\neq 0 \\). Combine every such restriction to get the natural domain.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "The expression inside the square root must be non-negative.",
        "workingOut": "\\( 2x \\ge 0 \\)",
        "graphData": null
      },
      {
        "explanation": "Divide by 2.",
        "workingOut": "\\( x \\ge 0 \\)",
        "graphData": null
      },
      {
        "explanation": "The natural domain is \\( x \\geq 0 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( x \\geq 0 \\)",
      "\\( x \\leq 0 \\)",
      "\\( x > 0 \\)",
      "\\( x \\geq 5 \\)"
    ]
  },
  {
    "id": "y11a-3b-q6b",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\sqrt{x - 4} \\). (Format: 'x >= 4')",
    "a": "0",
    "solutionSteps": [
      {
        "explanation": "General rule: for an expression under a square root, the radicand must be \\( \\geq 0 \\); for an expression in a denominator, the denominator must be \\( \\neq 0 \\). Combine every such restriction to get the natural domain.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "The radicand must be non-negative.",
        "workingOut": "\\( x - 4 \\ge 0 \\)",
        "graphData": null
      },
      {
        "explanation": "Solve for \\( x \\).",
        "workingOut": "\\( x \\ge 4 \\)",
        "graphData": null
      },
      {
        "explanation": "The natural domain is \\( x \\geq 4 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( x \\geq 4 \\)",
      "\\( x \\leq 4 \\)",
      "\\( x > 4 \\)",
      "\\( x \\geq -4 \\)"
    ]
  },
  {
    "id": "y11a-3b-q6c",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\sqrt{x + 5} \\). (Format: 'x >= -5')",
    "a": "1",
    "solutionSteps": [
      {
        "explanation": "General rule: for an expression under a square root, the radicand must be \\( \\geq 0 \\); for an expression in a denominator, the denominator must be \\( \\neq 0 \\). Combine every such restriction to get the natural domain.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Set the term under the radical to be greater than or equal to zero.",
        "workingOut": "\\( x + 5 \\ge 0 \\)",
        "graphData": null
      },
      {
        "explanation": "Solve the inequality.",
        "workingOut": "\\( x \\ge -5 \\)",
        "graphData": null
      },
      {
        "explanation": "The natural domain is \\( x \\geq -5 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( x \\leq -5 \\)",
      "\\( x \\geq -5 \\)",
      "\\( x > -5 \\)",
      "\\( x \\geq 5 \\)"
    ]
  },
  {
    "id": "y11a-3b-q6d",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\sqrt{3 + x} \\). (Format: 'x >= -3')",
    "a": "2",
    "solutionSteps": [
      {
        "explanation": "General rule: for an expression under a square root, the radicand must be \\( \\geq 0 \\); for an expression in a denominator, the denominator must be \\( \\neq 0 \\). Combine every such restriction to get the natural domain.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Set the radical expression greater than or equal to zero.",
        "workingOut": "\\( 3 + x \\ge 0 \\)",
        "graphData": null
      },
      {
        "explanation": "Solve for \\( x \\).",
        "workingOut": "\\( x \\ge -3 \\)",
        "graphData": null
      },
      {
        "explanation": "The natural domain is \\( x \\geq -3 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( x > -3 \\)",
      "\\( x \\leq -3 \\)",
      "\\( x \\geq -3 \\)",
      "\\( x \\geq 3 \\)"
    ]
  },
  {
    "id": "y11a-3b-q7a",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "A mapping diagram shows domain elements \\({-3, 3, -2, 2, 0}\\) mapping to range elements \\({9, 4, 0}\\) as follows:\n\n- \\(-3 \\rightarrow 9\\)\n- \\(3 \\rightarrow 9\\)\n- \\(-2 \\rightarrow 4\\)\n- \\(2 \\rightarrow 4\\)\n- \\(0 \\rightarrow 0\\)\n\nIs this relation also a function? Explain why.",
    "opts": [
      "Yes, because each element in the domain maps to exactly one element in the range.",
      "No, because two different domain elements map to the same range element.",
      "Yes, because it is a one-to-many mapping.",
      "No, because 0 maps to 0."
    ],
    "a": "0",
    "solutionSteps": [
      {
        "explanation": "General rule: a relation is a function only if every element of the domain maps to exactly one element of the range (no input has two different outputs).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "For a relation to be a function, each input (domain value) must map to exactly one output (range value).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Here, \\(-3\\) maps only to \\(9\\), \\(3\\) maps only to \\(9\\), etc. Although multiple inputs map to the same output (many-to-one), each input has only one output.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Therefore, this relation is a function.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Comparing with the answer options, the correct choice is: \"Yes, because each element in the domain maps to exactly one element in the range.\".",
        "workingOut": "",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-3b-q7b",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "A relation is described by a diagram where domain elements \\({9, 4, 0}\\) map to range elements \\({-3, 3, -2, 2, 0}\\) as follows:\n\n- \\(9 \\rightarrow -3\\) and \\(9 \\rightarrow 3\\)\n- \\(4 \\rightarrow -2\\) and \\(4 \\rightarrow 2\\)\n- \\(0 \\rightarrow 0\\)\n\nIs this relation a function? Explain why.",
    "opts": [
      "No, because the inputs 9 and 4 map to more than one output value.",
      "Yes, because every element in the domain has an output.",
      "No, because it is a many-to-one relation.",
      "Yes, because it represents a vertical line."
    ],
    "a": "0",
    "solutionSteps": [
      {
        "explanation": "General rule: a relation is a function only if every element of the domain maps to exactly one element of the range (no input has two different outputs).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "A relation is not a function if any input maps to more than one output (one-to-many mapping).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Here, \\(9\\) maps to both \\(-3\\) and \\(3\\). Similarly, \\(4\\) maps to both \\(-2\\) and \\(2\\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Since some inputs correspond to multiple outputs, the relation is not a function.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Comparing with the answer options, the correct choice is: \"No, because the inputs 9 and 4 map to more than one output value.\".",
        "workingOut": "",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-3b-q7c",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "A relation maps \\({-1, 1, 2}\\) to \\({3, 5, 8}\\) as follows:\n\n- \\(-1 \\rightarrow 3\\)\n- \\(1 \\rightarrow 5\\)\n- \\(2 \\rightarrow 8\\)\n\nIs this relation a function?",
    "opts": [
      "Yes, it is a one-to-one function.",
      "No, it is not a function.",
      "Yes, but it is not a relation.",
      "No, because the inputs are not symmetrical."
    ],
    "a": "0",
    "solutionSteps": [
      {
        "explanation": "General rule: a relation is a function only if every element of the domain maps to exactly one element of the range (no input has two different outputs).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Each element in the domain maps to exactly one unique element in the range.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Since every input has exactly one output, it is a function. Because the mapping is unique in both directions, it is a one-to-one function.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Comparing with the answer options, the correct choice is: \"Yes, it is a one-to-one function.\".",
        "workingOut": "",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-3b-q7d",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "A mapping diagram contains domain elements \\({-2, 2, 0}\\) and range elements \\({-3, 3, -4, 4}\\) as follows:\n\n- \\(-2 \\rightarrow -3\\)\n- \\(2 \\rightarrow 3\\)\n- \\(0 \\rightarrow -4\\) and \\(0 \\rightarrow 4\\)\n\nIs this relation a function?",
    "opts": [
      "No, because the domain element 0 maps to two range elements.",
      "Yes, because every element in the range has a preimage.",
      "Yes, it is a function.",
      "No, because the number of elements in the domain is less than the range."
    ],
    "a": "0",
    "solutionSteps": [
      {
        "explanation": "General rule: a relation is a function only if every element of the domain maps to exactly one element of the range (no input has two different outputs).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Look at \\( 0 \\). It maps to both \\(-4\\) and \\(4\\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Because one input maps to more than one output, it fails the definition of a function.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Comparing with the answer options, the correct choice is: \"No, because the domain element 0 maps to two range elements.\".",
        "workingOut": "",
        "graphData": null
      }
    ]
  },
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
        "question": "a) Consider the set of points \\({(1, 3), (2, 4), (3, 1), (5, 3)}\\). Is this a function or a relation?",
        "opts": [
          "It is a function.",
          "It is a relation but not a function."
        ],
        "a": "0"
      },
      {
        "id": "y11a-3b-q8b",
        "type": "multiple_choice",
        "question": "b) Two coloured dice are rolled. The value on the red die is the \\( x \\)-coordinate and the green die is the \\( y \\)-coordinate.\n\n(i) List the set of points possible if the numbers either add or multiply to give 4.\n(ii) Is this set a relation or a function?",
        "a": "1",
        "solutionSteps": [
          {
            "explanation": "Two dice each show values from 1 to 6, giving 36 equally likely outcomes (x, y) in total before filtering for the given condition.",
            "workingOut": "",
            "graphData": null
          },
          {
            "explanation": "Since \\( x=1 \\) gives both \\( y=3 \\) and \\( y=4 \\), the set is: Relation, not a function — the input \\( x = 1 \\) maps to both \\( y = 3 \\) and \\( y = 4 \\).",
            "workingOut": "",
            "graphData": null
          }
        ],
        "opts": [
          "Relation, not a function — because \\( x = 2 \\) maps to two different \\( y \\)-values.",
          "Relation, not a function — the input \\( x = 1 \\) maps to both \\( y = 3 \\) and \\( y = 4 \\).",
          "Function — every \\( x \\)-value maps to exactly one \\( y \\)-value.",
          "Function — this is a one-to-one mapping."
        ]
      }
    ],
    "solutionSteps": [
      {
        "explanation": "For part a, check if any x-coordinate repeats with a different y-value in the set \\({(1, 3), (2, 4), (3, 1), (5, 3)}\\).",
        "workingOut": "\\(\\text{x-coordinates: } 1, 2, 3, 5 \\quad \\text{(no repeats) } \\implies \\text{Function}\\)",
        "graphData": null
      },
      {
        "explanation": "For part b(i), find combinations of numbers on two dice (values 1 to 6) that sum to 4 or multiply to 4.",
        "workingOut": "\\(\\begin{aligned} \\text{Sum to 4: } &(1, 3), (2, 2), (3, 1) \\\\ \\text{Multiply to 4: } &(1, 4), (2, 2), (4, 1) \\\\ \\text{Combined: } &{(1,3), (1,4), (2,2), (3,1), (4,1)} \\end{aligned}\\)",
        "graphData": null
      },
      {
        "explanation": "For part b(ii), look at \\( x = 1 \\). It maps to both \\( y = 3 \\) and \\( y = 4 \\).",
        "workingOut": "\\(x=1 \\implies y=3 \\text{ and } y=4 \\implies \\text{Relation, not a function}\\)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-3b-q9a",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "The circle below (radius 4) represents a relation that is not a function. Write down the coordinates of two points on this graph that have the same x-coordinate. (Format: '(x, y1) and (x, y2)' e.g. '(0, 4) and (0, -4)')",
    "a": "2",
    "solutionSteps": [
      {
        "explanation": "General rule: on a graph that fails the vertical line test, pick any x-coordinate where the curve is crossed twice, then read off the two different y-values at that x.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "The equation of the circle centered at the origin with radius 4 is \\( x^2 + y^2 = 16 \\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Choose any \\( x \\) value in the domain \\( -4 < x < 4 \\), for example \\( x = 0 \\).",
        "workingOut": "\\( 0^2 + y^2 = 16 \\implies y = \\pm 4 \\)",
        "graphData": null
      },
      {
        "explanation": "This gives two points with the same x-coordinate: \\( (0, 4) \\) and \\( (0, -4) \\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Two points sharing that x-coordinate are \\( (0, 4) \\text{ and } (0, -4) \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [
          -6,
          6,
          6,
          -6
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-5,0], [5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-5], [0,5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.6, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 4.6, 'y'], {fontSize: 14});\nboard.create('circle', [[0,0], 4], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('text', [0.2, 4.2, '4'], {fontSize: 12});\nboard.create('text', [0.2, -4.2, '-4'], {fontSize: 12});\nboard.create('text', [4.2, 0.2, '4'], {fontSize: 12});\nboard.create('text', [-4.7, 0.2, '-4'], {fontSize: 12});\nboard.unsuspendUpdate();"
      }
    },
    "opts": [
      "\\( (0, 4) \\text{ and } (4, 0) \\)",
      "\\( (4, 0) \\text{ and } (-4, 0) \\)",
      "\\( (0, 4) \\text{ and } (0, -4) \\)",
      "\\( (0, 4) \\text{ and } (0, 0) \\)"
    ]
  },
  {
    "id": "y11a-3b-q9b",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "The sideways parabola below represents a relation that is not a function. Write down the coordinates of two points on this graph that have the same x-coordinate. (Format: '(0, 2) and (0, -2)')",
    "a": "2",
    "solutionSteps": [
      {
        "explanation": "General rule: on a graph that fails the vertical line test, pick any x-coordinate where the curve is crossed twice, then read off the two different y-values at that x.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "The sideways parabola shown is \\( x = y^2 - 4 \\) (or similar). The vertex is at \\( (-4, 0) \\) and y-intercepts are at \\( \\pm 2 \\).",
        "workingOut": "\\( 0 = y^2 - 4 \\implies y = \\pm 2 \\)",
        "graphData": null
      },
      {
        "explanation": "This gives two points on the y-axis (where \\( x = 0 \\)): \\( (0, 2) \\) and \\( (0, -2) \\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Two points sharing that x-coordinate are \\( (0, 2) \\text{ and } (0, -2) \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [
          -5,
          4,
          3,
          -4
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-4.5,0], [2.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.5], [0,3.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [2.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 3.2, 'y'], {fontSize: 14});\nboard.create('curve', [function(t){ return t*t - 4; }, function(t){ return t; }, -3.5, 3.5], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('text', [-4.2, 0.2, '-4'], {fontSize: 12});\nboard.create('text', [0.2, 2.1, '2'], {fontSize: 12});\nboard.create('text', [0.2, -2.1, '-2'], {fontSize: 12});\nboard.unsuspendUpdate();"
      }
    },
    "opts": [
      "\\( (2, 0) \\text{ and } (-2, 0) \\)",
      "\\( (0, 2) \\text{ and } (2, 0) \\)",
      "\\( (0, 2) \\text{ and } (0, -2) \\)",
      "\\( (0, 2) \\text{ and } (0, 0) \\)"
    ]
  },
  {
    "id": "y11a-3b-q9c",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "The circle centered at \\( (3, 2) \\) with radius \\( 3 \\) is not a function. Write down the coordinates of two points on this graph that have the same x-coordinate. (Format: '(3, 5) and (3, -1)')",
    "a": "0",
    "solutionSteps": [
      {
        "explanation": "General rule: on a graph that fails the vertical line test, pick any x-coordinate where the curve is crossed twice, then read off the two different y-values at that x.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "The circle is centered at \\( (3, 2) \\) with a radius of \\( 3 \\). Its equation is \\( (x-3)^2 + (y-2)^2 = 9 \\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Select the x-coordinate of the center, \\( x = 3 \\).",
        "workingOut": "\\( (3-3)^2 + (y-2)^2 = 9 \\implies (y-2)^2 = 9 \\implies y - 2 = \\pm 3 \\)",
        "graphData": null
      },
      {
        "explanation": "Solve for y.",
        "workingOut": "\\(y = 2 \\pm 3 \\implies y = 5 \\text{ or } y = -1\\)",
        "graphData": null
      },
      {
        "explanation": "This gives two points: \\( (3, 5) \\) and \\( (3, -1) \\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Two points sharing that x-coordinate are \\( (3, 5) \\text{ and } (3, -1) \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [
          -1,
          7,
          8,
          -3
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-0.5,0], [7.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-2.5], [0,6.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [7.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 6.2, 'y'], {fontSize: 14});\nboard.create('circle', [[3,2], 3], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('point', [3,2], {name: '(3,2)', size: 2, color: 'black', label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
      }
    },
    "opts": [
      "\\( (3, 5) \\text{ and } (3, -1) \\)",
      "\\( (3, 5) \\text{ and } (3, 2) \\)",
      "\\( (5, 2) \\text{ and } (-1, 2) \\)",
      "\\( (3, 2) \\text{ and } (3, -2) \\)"
    ]
  },
  {
    "id": "y11a-3b-q9d",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "The vertical line at \\( x = 3 \\) is not a function. Write down the coordinates of two points on this graph that have the same x-coordinate. (Format: '(3, 1) and (3, 2)')",
    "a": "0",
    "solutionSteps": [
      {
        "explanation": "General rule: on a graph that fails the vertical line test, pick any x-coordinate where the curve is crossed twice, then read off the two different y-values at that x.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "A vertical line is defined by the equation \\( x = k \\). Here, the line is \\( x = 3 \\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Any point on this vertical line has an x-coordinate of 3. We can choose any two different y-values, for example \\( y = 1 \\) and \\( y = 2 \\).",
        "workingOut": "\\(\\text{Points: } (3, 1) \\text{ and } (3, 2)\\)",
        "graphData": null
      },
      {
        "explanation": "Two points sharing that x-coordinate are \\( (3, 1) \\text{ and } (3, 2) \\).",
        "workingOut": "",
        "graphData": null
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
          -2
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-0.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-1.5], [0,4.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 4.2, 'y'], {fontSize: 14});\nboard.create('line', [[3,-2], [3,5]], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('text', [3.2, 0.2, '3'], {fontSize: 12});\nboard.unsuspendUpdate();"
      }
    },
    "opts": [
      "\\( (3, 1) \\text{ and } (3, 2) \\)",
      "\\( (3, 0) \\text{ and } (0, 3) \\)",
      "\\( (1, 3) \\text{ and } (2, 3) \\)",
      "\\( (1, 3) \\text{ and } (3, 1) \\)"
    ]
  },
  {
    "id": "y11a-3b-q10a",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = 5x \\). (Format: 'all real x')",
    "a": "0",
    "solutionSteps": [
      {
        "explanation": "General rule: for an expression under a square root, the radicand must be \\( \\geq 0 \\); for an expression in a denominator, the denominator must be \\( \\neq 0 \\). Combine every such restriction to get the natural domain.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "The function \\( f(x) = 5x \\) is a linear polynomial.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Polynomial functions are defined for all real values of \\( x \\).",
        "workingOut": "\\(\\text{Domain: all real } x\\)",
        "graphData": null
      },
      {
        "explanation": "The natural domain is \\( x \\in \\mathbb{R}\\ (\\text{all real } x) \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( x \\in \\mathbb{R}\\ (\\text{all real } x) \\)",
      "\\( x \\neq 0 \\)",
      "\\( x \\leq 0 \\)",
      "\\( x \\geq 0 \\)"
    ]
  },
  {
    "id": "y11a-3b-q10b",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = 8 - 2x \\). (Format: 'all real x')",
    "a": "1",
    "solutionSteps": [
      {
        "explanation": "General rule: for an expression under a square root, the radicand must be \\( \\geq 0 \\); for an expression in a denominator, the denominator must be \\( \\neq 0 \\). Combine every such restriction to get the natural domain.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "This is a linear polynomial function.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "There are no fractions or square roots to restrict the input. The domain is all real numbers.",
        "workingOut": "\\(\\text{Domain: all real } x\\)",
        "graphData": null
      },
      {
        "explanation": "The natural domain is \\( x \\in \\mathbb{R}\\ (\\text{all real } x) \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( x \\neq 0 \\)",
      "\\( x \\in \\mathbb{R}\\ (\\text{all real } x) \\)",
      "\\( x \\leq 0 \\)",
      "\\( x \\geq 0 \\)"
    ]
  },
  {
    "id": "y11a-3b-q10c",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\frac{1}{5 - x} \\). (Format: 'x != 5')",
    "a": "2",
    "solutionSteps": [
      {
        "explanation": "General rule: for an expression under a square root, the radicand must be \\( \\geq 0 \\); for an expression in a denominator, the denominator must be \\( \\neq 0 \\). Combine every such restriction to get the natural domain.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "The denominator cannot be equal to zero.",
        "workingOut": "\\( 5 - x \\neq 0 \\implies x \\neq 5 \\)",
        "graphData": null
      },
      {
        "explanation": "The natural domain is \\( x \\neq 5 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( x \\neq -5 \\)",
      "\\( x = 5 \\)",
      "\\( x \\neq 5 \\)",
      "\\( x \\in \\mathbb{R}\\ (\\text{all real } x) \\)"
    ]
  },
  {
    "id": "y11a-3b-q10d",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\frac{4}{3x - 2} \\). (Format: 'x != 2/3')",
    "a": "2",
    "solutionSteps": [
      {
        "explanation": "General rule: for an expression under a square root, the radicand must be \\( \\geq 0 \\); for an expression in a denominator, the denominator must be \\( \\neq 0 \\). Combine every such restriction to get the natural domain.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Set the denominator to not equal zero.",
        "workingOut": "\\( 3x - 2 \\neq 0 \\)",
        "graphData": null
      },
      {
        "explanation": "Solve for \\( x \\).",
        "workingOut": "\\(3x \\neq 2 \\implies x \\neq \\frac{2}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "The natural domain is \\( x \\neq \\frac{2}{3} \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( x = \\frac{2}{3} \\)",
      "\\( x \\neq -\\frac{2}{3} \\)",
      "\\( x \\neq \\frac{2}{3} \\)",
      "\\( x \\in \\mathbb{R}\\ (\\text{all real } x) \\)"
    ]
  },
  {
    "id": "y11a-3b-q10e",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\sqrt{x + 6} \\). (Format: 'x >= -6')",
    "a": "2",
    "solutionSteps": [
      {
        "explanation": "General rule: for an expression under a square root, the radicand must be \\( \\geq 0 \\); for an expression in a denominator, the denominator must be \\( \\neq 0 \\). Combine every such restriction to get the natural domain.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "The quantity under the square root must be non-negative.",
        "workingOut": "\\( x + 6 \\ge 0 \\)",
        "graphData": null
      },
      {
        "explanation": "Solve for \\( x \\).",
        "workingOut": "\\( x \\ge -6 \\)",
        "graphData": null
      },
      {
        "explanation": "The natural domain is \\( x \\geq -6 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( x \\leq -6 \\)",
      "\\( x \\geq 6 \\)",
      "\\( x \\geq -6 \\)",
      "\\( x > -6 \\)"
    ]
  },
  {
    "id": "y11a-3b-q10f",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\sqrt{3x + 2} \\). (Format: 'x >= -2/3')",
    "a": "2",
    "solutionSteps": [
      {
        "explanation": "General rule: for an expression under a square root, the radicand must be \\( \\geq 0 \\); for an expression in a denominator, the denominator must be \\( \\neq 0 \\). Combine every such restriction to get the natural domain.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "The term inside the radical must be greater than or equal to zero.",
        "workingOut": "\\( 3x + 2 \\ge 0 \\)",
        "graphData": null
      },
      {
        "explanation": "Solve the linear inequality.",
        "workingOut": "\\(3x \\ge -2 \\implies x \\ge -\\frac{2}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "The natural domain is \\( x \\geq -\\frac{2}{3} \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( x \\leq -\\frac{2}{3} \\)",
      "\\( x \\geq \\frac{2}{3} \\)",
      "\\( x \\geq -\\frac{2}{3} \\)",
      "\\( x > -\\frac{2}{3} \\)"
    ]
  },
  {
    "id": "y11a-3b-q10g",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\sqrt{6 - x} \\). (Format: 'x <= 6')",
    "a": "0",
    "solutionSteps": [
      {
        "explanation": "General rule: for an expression under a square root, the radicand must be \\( \\geq 0 \\); for an expression in a denominator, the denominator must be \\( \\neq 0 \\). Combine every such restriction to get the natural domain.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Ensure the radicand is non-negative.",
        "workingOut": "\\( 6 - x \\ge 0 \\)",
        "graphData": null
      },
      {
        "explanation": "Rearrange to solve for \\( x \\).",
        "workingOut": "\\( 6 \\ge x \\implies x \\le 6 \\)",
        "graphData": null
      },
      {
        "explanation": "The natural domain is \\( x \\leq 6 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( x \\leq 6 \\)",
      "\\( x \\leq -6 \\)",
      "\\( x \\geq 6 \\)",
      "\\( x < 6 \\)"
    ]
  },
  {
    "id": "y11a-3b-q10h",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\sqrt{9 - 3x} \\). (Format: 'x <= 3')",
    "a": "1",
    "solutionSteps": [
      {
        "explanation": "General rule: for an expression under a square root, the radicand must be \\( \\geq 0 \\); for an expression in a denominator, the denominator must be \\( \\neq 0 \\). Combine every such restriction to get the natural domain.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Set the inside of the square root to be greater than or equal to zero.",
        "workingOut": "\\( 9 - 3x \\ge 0 \\)",
        "graphData": null
      },
      {
        "explanation": "Solve for \\( x \\).",
        "workingOut": "\\( 9 \\ge 3x \\implies 3 \\ge x \\implies x \\le 3 \\)",
        "graphData": null
      },
      {
        "explanation": "The natural domain is \\( x \\leq 3 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( x \\leq -3 \\)",
      "\\( x \\leq 3 \\)",
      "\\( x \\geq 3 \\)",
      "\\( x < 3 \\)"
    ]
  },
  {
    "id": "y11a-3b-q10i",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\frac{2}{\\sqrt{x}} \\). (Format: 'x > 0')",
    "a": "1",
    "solutionSteps": [
      {
        "explanation": "General rule: for an expression under a square root, the radicand must be \\( \\geq 0 \\); for an expression in a denominator, the denominator must be \\( \\neq 0 \\). Combine every such restriction to get the natural domain.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "For a square root in the denominator, the value inside must be strictly positive (since it cannot be negative, and division by zero is undefined).",
        "workingOut": "x > 0",
        "graphData": null
      },
      {
        "explanation": "The natural domain is \\( x > 0 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( x > 5 \\)",
      "\\( x > 0 \\)",
      "\\( x < 0 \\)",
      "\\( x \\geq 0 \\)"
    ]
  },
  {
    "id": "y11a-3b-q10j",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\frac{1}{\\sqrt{x + 3}} \\). (Format: 'x > -3')",
    "a": "0",
    "solutionSteps": [
      {
        "explanation": "General rule: for an expression under a square root, the radicand must be \\( \\geq 0 \\); for an expression in a denominator, the denominator must be \\( \\neq 0 \\). Combine every such restriction to get the natural domain.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "The quantity under the radical in the denominator must be strictly positive.",
        "workingOut": "x + 3 > 0",
        "graphData": null
      },
      {
        "explanation": "Solve for \\( x \\).",
        "workingOut": "x > -3",
        "graphData": null
      },
      {
        "explanation": "The natural domain is \\( x > -3 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( x > -3 \\)",
      "\\( x > 3 \\)",
      "\\( x < -3 \\)",
      "\\( x \\geq -3 \\)"
    ]
  },
  {
    "id": "y11a-3b-q10k",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\frac{3}{\\sqrt{2 - x}} \\). (Format: 'x < 2')",
    "a": "0",
    "solutionSteps": [
      {
        "explanation": "General rule: for an expression under a square root, the radicand must be \\( \\geq 0 \\); for an expression in a denominator, the denominator must be \\( \\neq 0 \\). Combine every such restriction to get the natural domain.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "The radicand in the denominator must be strictly positive.",
        "workingOut": "2 - x > 0",
        "graphData": null
      },
      {
        "explanation": "Rearrange to solve the inequality.",
        "workingOut": "\\( 2 > x \\implies x < 2 \\)",
        "graphData": null
      },
      {
        "explanation": "The natural domain is \\( x < 2 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( x < 2 \\)",
      "\\( x > 2 \\)",
      "\\( x < -2 \\)",
      "\\( x \\leq 2 \\)"
    ]
  },
  {
    "id": "y11a-3b-q10l",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\frac{1}{\\sqrt{3x - 4}} \\). (Format: 'x > 4/3')",
    "a": "1",
    "solutionSteps": [
      {
        "explanation": "General rule: for an expression under a square root, the radicand must be \\( \\geq 0 \\); for an expression in a denominator, the denominator must be \\( \\neq 0 \\). Combine every such restriction to get the natural domain.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Set the denominator radicand to be strictly greater than zero.",
        "workingOut": "3x - 4 > 0",
        "graphData": null
      },
      {
        "explanation": "Solve the inequality.",
        "workingOut": "\\(3x > 4 \\implies x > \\frac{4}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "The natural domain is \\( x > \\frac{4}{3} \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( x < \\frac{4}{3} \\)",
      "\\( x > \\frac{4}{3} \\)",
      "\\( x > -\\frac{4}{3} \\)",
      "\\( x \\geq \\frac{4}{3} \\)"
    ]
  },
  {
    "id": "y11a-3b-q11a",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "For the exponential function \\( y = 3^x \\):\n\n(i) Copy and complete the table of values for \\( x = -2, -1, 0, 1, 2 \\).\n(ii) Plot the points and sketch the function.\n(iii) Write down the domain and range.",
    "a": "0",
    "solutionSteps": [
      {
        "explanation": "Evaluate \\( y = 3^x \\) for each given \\( x \\) value.",
        "workingOut": "\\(\\begin{aligned} x=-2 \\implies y &= 3^{-2} = \\frac{1}{9} \\\\ x=-1 \\implies y &= 3^{-1} = \\frac{1}{3} \\\\ x=0 \\implies y &= 3^0 = 1 \\\\ x=1 \\implies y &= 3^1 = 3 \\\\ x=2 \\implies y &= 3^2 = 9 \\end{aligned}\\)",
        "graphData": null
      },
      {
        "explanation": "Plot these points. Draw a smooth curve passing through them. The curve approaches the negative x-axis asymptotically (y = 0).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Identify the domain and range.",
        "workingOut": "\\(\\text{Domain: all real } x, \\quad \\text{Range: } y > 0\\)",
        "graphData": null
      },
      {
        "explanation": "Recognising the general shape of this function family (linear, quadratic, exponential, or cubic) helps you predict the domain and range quickly, even before plotting every point.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Reading the extent of the curve along each axis gives \\( \\text{Domain: all real } x,\\ \\text{Range: } y > 0 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( \\text{Domain: all real } x,\\ \\text{Range: } y > 0 \\)",
      "\\( \\text{Domain: all real } x,\\ \\text{Range: all real } y \\)",
      "\\( \\text{Domain: all real } x,\\ \\text{Range: } y \\geq 0 \\)",
      "\\( \\text{Domain: } x > 0,\\ \\text{Range: all real } y \\)"
    ]
  },
  {
    "id": "y11a-3b-q11b",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "For the cubic function \\( y = \\frac{1}{4}(3x - x^3) \\):\n\n(i) Copy and complete the table of values for \\( x = -3, -2, -1, 0, 1, 2, 3 \\).\n(ii) Plot the points and sketch the function.\n(iii) State the domain and range of this function.",
    "a": "0",
    "solutionSteps": [
      {
        "explanation": "Substitute \\( x \\) values into the function expression.",
        "workingOut": "\\(\\begin{aligned} x=-3 \\implies y &= 0.25 \\times (3(-3) - (-3)^3) = 0.25 \\times (-9 + 27) = 4.5 \\\\ x=-2 \\implies y &= 0.25 \\times (3(-2) - (-2)^3) = 0.25 \\times (-6 + 8) = 0.5 \\\\ x=-1 \\implies y &= 0.25 \\times (3(-1) - (-1)^3) = 0.25 \\times (-3 + 1) = -0.5 \\\\ x=0 \\implies y &= 0.25 \\times (0) = 0 \\\\ x=1 \\implies y &= 0.25 \\times (3(1) - 1^3) = 0.25 \\times (3 - 1) = 0.5 \\\\ x=2 \\implies y &= 0.25 \\times (3(2) - 2^3) = 0.25 \\times (6 - 8) = -0.5 \\\\ x=3 \\implies y &= 0.25 \\times (3(3) - 3^3) = 0.25 \\times (9 - 27) = -4.5 \\end{aligned}\\)",
        "graphData": null
      },
      {
        "explanation": "Plot the coordinates and draw a smooth curve. It has turning points between \\( x = -1 \\) and \\( x = 1 \\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Since it is a cubic polynomial, the domain and range are both unrestricted.",
        "workingOut": "\\(\\text{Domain: all real } x, \\quad \\text{Range: all real } y\\)",
        "graphData": null
      },
      {
        "explanation": "Recognising the general shape of this function family (linear, quadratic, exponential, or cubic) helps you predict the domain and range quickly, even before plotting every point.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Reading the extent of the curve along each axis gives \\( \\text{Domain: all real } x,\\ \\text{Range: all real } y \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( \\text{Domain: all real } x,\\ \\text{Range: all real } y \\)",
      "\\( \\text{Domain: all real } x,\\ \\text{Range: } y \\geq 0 \\)",
      "\\( \\text{Domain: all real } x,\\ \\text{Range: } y \\neq 0 \\)",
      "\\( \\text{Domain: } x \\geq 0,\\ \\text{Range: all real } y \\)"
    ]
  },
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
        "type": "multiple_choice",
        "question": "a) What is the natural domain of \\( R(x) \\)? (Format: 'x >= 0')",
        "a": "1",
        "opts": [
          "\\( x \\geq 5 \\)",
          "\\( x \\geq 0 \\)",
          "\\( x \\leq 0 \\)",
          "\\( x > 0 \\)"
        ],
        "solutionSteps": [
          {
            "explanation": "General rule: for an expression under a square root, the radicand must be \\( \\geq 0 \\); for an expression in a denominator, the denominator must be \\( \\neq 0 \\). Combine every such restriction to get the natural domain.",
            "workingOut": "",
            "graphData": null
          },
          {
            "explanation": "The natural domain is \\( x \\geq 0 \\).",
            "workingOut": "",
            "graphData": null
          }
        ]
      },
      {
        "id": "y11a-3b-q12b",
        "type": "multiple_choice",
        "question": "b) Copy and complete the table of values (round to 1 decimal place where necessary) for \\( x = 0, 0.5, 1, 2, 3, 4.5, 8 \\).",
        "a": "0",
        "solutionSteps": [
          {
            "explanation": "Comparing the table of values to the sketch confirms the shape and direction of the curve described in the answer.",
            "workingOut": "",
            "graphData": null
          },
          {
            "explanation": "Evaluating \\( R(x)=\\sqrt{2x} \\) at each \\( x \\)-value gives the table \\( (0,0),\\ (0.5,1),\\ (1,1.4),\\ (2,2),\\ (3,2.4),\\ (4.5,3),\\ (8,4) \\).",
            "workingOut": "",
            "graphData": null
          }
        ],
        "opts": [
          "\\( (0,0),\\ (0.5,1),\\ (1,1.4),\\ (2,2),\\ (3,2.4),\\ (4.5,3),\\ (8,4) \\)",
          "\\( (0,0),\\ (0.5,1),\\ (1,1.4),\\ (2,2),\\ (3,2.4),\\ (4.5,3),\\ (8,4.5) \\)",
          "\\( (0,0),\\ (0.5,1),\\ (1,1.4),\\ (2,2),\\ (3,2.2),\\ (4.5,3),\\ (8,4) \\)",
          "\\( (0,0),\\ (0.5,0.7),\\ (1,1),\\ (2,1.4),\\ (3,1.7),\\ (4.5,2.1),\\ (8,2.8) \\)"
        ]
      },
      {
        "id": "y11a-3b-q12c",
        "type": "multiple_choice",
        "question": "c) Plot these points and join them with a smooth curve starting at the origin. What type of curve is this?",
        "a": "0",
        "solutionSteps": [
          {
            "explanation": "Comparing the table of values to the sketch confirms the shape and direction of the curve described in the answer.",
            "workingOut": "",
            "graphData": null
          },
          {
            "explanation": "Squaring \\( y=\\sqrt{2x} \\) gives \\( y^2=2x \\) with \\( y \\geq 0 \\), which is the upper half of a rightward-opening parabola: The curve is the upper half of a parabola opening to the right.",
            "workingOut": "",
            "graphData": null
          }
        ],
        "opts": [
          "The curve is the upper half of a parabola opening to the right.",
          "The curve is a semicircle centred at the origin.",
          "The curve is a full parabola opening upwards.",
          "The curve is one branch of a hyperbola."
        ]
      }
    ],
    "solutionSteps": [
      {
        "explanation": "For part a, find when the inside of the square root is non-negative.",
        "workingOut": "\\( 2x \\ge 0 \\implies x \\ge 0 \\)",
        "graphData": null
      },
      {
        "explanation": "For part b, calculate \\( R(x) = \\sqrt{2x} \\) for each input.",
        "workingOut": "\\(\\begin{aligned} R(0) &= \\sqrt{0} = 0 \\\\ R(0.5) &= \\sqrt{1} = 1 \\\\ R(1) &= \\sqrt{2} \\approx 1.4 \\\\ R(2) &= \\sqrt{4} = 2 \\\\ R(3) &= \\sqrt{6} \\approx 2.4 \\\\ R(4.5) &= \\sqrt{9} = 3 \\\\ R(8) &= \\sqrt{16} = 4 \\end{aligned}\\)",
        "graphData": null
      },
      {
        "explanation": "For part c, plotting \\( y = \\sqrt{2x} \\) and squaring both sides gives \\( y^2 = 2x \\), which is a horizontal parabola.",
        "workingOut": "\\(y = \\sqrt{2x} \\implies y^2 = 2x \\quad (y \\ge 0)\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 400,
        "height": 300,
        "boundingbox": [
          -1,
          5,
          9,
          -1
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-0.5,0], [8.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-0.5], [0,4.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [8.3, -0.3, 'x'], {fontSize: 14});\nboard.create('text', [-0.3, 4.3, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return Math.sqrt(2*x); }, 0, 8.5], {strokeColor: '#4f46e5', strokeWidth: 2, firstArrow: false});\nboard.create('point', [0.5, 1], {size: 2, color: 'black'});\nboard.create('point', [2, 2], {size: 2, color: 'black'});\nboard.create('point', [4.5, 3], {size: 2, color: 'black'});\nboard.create('point', [8, 4], {size: 2, color: 'black'});\nboard.unsuspendUpdate();"
      }
    }
  },
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
        "type": "multiple_choice",
        "question": "a) What is the natural domain of \\( h(x) \\)? (Format: 'x != 0')",
        "a": "2",
        "opts": [
          "\\( x \\neq 5 \\)",
          "\\( x = 0 \\)",
          "\\( x \\neq 0 \\)",
          "\\( x \\in \\mathbb{R}\\ (\\text{all real } x) \\)"
        ],
        "solutionSteps": [
          {
            "explanation": "General rule: for an expression under a square root, the radicand must be \\( \\geq 0 \\); for an expression in a denominator, the denominator must be \\( \\neq 0 \\). Combine every such restriction to get the natural domain.",
            "workingOut": "",
            "graphData": null
          },
          {
            "explanation": "The natural domain is \\( x \\neq 0 \\).",
            "workingOut": "",
            "graphData": null
          }
        ]
      },
      {
        "id": "y11a-3b-q13b",
        "type": "multiple_choice",
        "question": "b) Copy and complete the table of values (use '*' or 'undefined' for \\( x = 0 \\)) for \\( x = -6, -3, -1.5, -1, 0, 1, 1.5, 3, 6 \\). Explain why \\( x = 0 \\) is undefined.",
        "a": "1",
        "solutionSteps": [
          {
            "explanation": "Comparing the table of values to the sketch confirms the shape and direction of the curve described in the answer.",
            "workingOut": "",
            "graphData": null
          },
          {
            "explanation": "Evaluating \\( h(x)=\\frac{3}{x} \\) at each \\( x \\)-value (undefined at \\( x=0 \\), since division by zero is undefined) gives \\( (-6,-0.5),\\ (-3,-1),\\ (-1.5,-2),\\ (-1,-3),\\ (0,\\text{undefined}),\\ (1,3),\\ (1.5,2),\\ (3,1),\\ (6,0.5) \\).",
            "workingOut": "",
            "graphData": null
          }
        ],
        "opts": [
          "\\( (-6,-0.5),\\ (-3,-1),\\ (-1.5,-2),\\ (-1,-3),\\ (0,\\text{undefined}),\\ (1,3),\\ (1.5,1.5),\\ (3,1),\\ (6,0.5) \\)",
          "\\( (-6,-0.5),\\ (-3,-1),\\ (-1.5,-2),\\ (-1,-3),\\ (0,\\text{undefined}),\\ (1,3),\\ (1.5,2),\\ (3,1),\\ (6,0.5) \\)",
          "\\( (-6,0.5),\\ (-3,1),\\ (-1.5,2),\\ (-1,3),\\ (0,\\text{undefined}),\\ (1,-3),\\ (1.5,-2),\\ (3,-1),\\ (6,-0.5) \\)",
          "\\( (-6,-0.5),\\ (-3,-1),\\ (-1.5,-2),\\ (-1,-3),\\ (0,0),\\ (1,3),\\ (1.5,2),\\ (3,1),\\ (6,0.5) \\)"
        ]
      },
      {
        "id": "y11a-3b-q13c",
        "type": "multiple_choice",
        "question": "c) Plot these points and join them with a smooth curve in two parts. What is the name of this type of curve?",
        "a": "0",
        "solutionSteps": [
          {
            "explanation": "Comparing the table of values to the sketch confirms the shape and direction of the curve described in the answer.",
            "workingOut": "",
            "graphData": null
          },
          {
            "explanation": "As \\( x \\to 0 \\), \\( y \\to \\pm\\infty \\), and as \\( x \\to \\pm\\infty \\), \\( y \\to 0 \\): The curve is a rectangular hyperbola with asymptotes along the \\( x \\)-axis and \\( y \\)-axis.",
            "workingOut": "",
            "graphData": null
          }
        ],
        "opts": [
          "The curve is a rectangular hyperbola with asymptotes along the \\( x \\)-axis and \\( y \\)-axis.",
          "The curve is a full circle centred at the origin.",
          "The curve is a parabola with vertex at the origin.",
          "The curve is a straight line through the origin."
        ]
      }
    ],
    "solutionSteps": [
      {
        "explanation": "For part a, find when the denominator is zero.",
        "workingOut": "\\( x \\neq 0 \\)",
        "graphData": null
      },
      {
        "explanation": "For part b, calculate \\( h(x) = \\frac{3}{x} \\) for each input value.",
        "workingOut": "\\(\\begin{aligned} h(-6) &= -0.5, \\quad h(-3) = -1, \\quad h(-1.5) = -2, \\quad h(-1) = -3 \\\\ h(0) &\\rightarrow \\text{division by zero } \\implies \\text{undefined} \\\\ h(1) &= 3, \\quad h(1.5) = 2, \\quad h(3) = 1, \\quad h(6) = 0.5 \\end{aligned}\\)",
        "graphData": null
      },
      {
        "explanation": "For part c, describe the hyperbola shape. As \\( x \\to 0 \\), \\( y \\to \\pm\\infty \\). As \\( x \\to \\pm\\infty \\), \\( y \\to 0 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 400,
        "height": 300,
        "boundingbox": [
          -7,
          4,
          7,
          -4
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-6.5,0], [6.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.5], [0,3.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [6.3, -0.3, 'x'], {fontSize: 14});\nboard.create('text', [-0.3, 3.3, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return 3/x; }, 0.1, 6.5], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('functiongraph', [function(x){ return 3/x; }, -6.5, -0.1], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.unsuspendUpdate();"
      }
    }
  },
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
        "type": "multiple_choice",
        "question": "a) Write an expression for the length of the opposite side.",
        "a": "2",
        "opts": [
          "\\( 24 - x \\)",
          "\\( 12 - x \\)",
          "\\( x \\)",
          "\\( 2x \\)"
        ],
        "solutionSteps": [
          {
            "explanation": "Opposite sides of a rectangle are always equal in length, so the opposite side is also \\( x \\).",
            "workingOut": "",
            "graphData": null
          }
        ]
      },
      {
        "id": "y11a-3b-q14b",
        "type": "multiple_choice",
        "question": "b) Write an expression for the length of each of the remaining sides in terms of \\( x \\).",
        "a": "2",
        "opts": [
          "\\( 24 - x \\)",
          "\\( x \\)",
          "\\( 12 - x \\)",
          "\\( 12 - 2x \\)"
        ],
        "solutionSteps": [
          {
            "explanation": "Half the perimeter (\\(12\\text{ cm}\\)) is shared between one pair of adjacent sides, so the remaining side is \\( 12 - x \\).",
            "workingOut": "",
            "graphData": null
          }
        ]
      },
      {
        "id": "y11a-3b-q14c",
        "type": "multiple_choice",
        "question": "c) Express the area \\( A \\) of the rectangle as a function of \\( x \\).",
        "a": "2",
        "opts": [
          "\\( x^2(12 - x) \\)",
          "\\( 2x(12 - x) \\)",
          "\\( x(12 - x) \\)",
          "\\( x + (12 - x) \\)"
        ],
        "solutionSteps": [
          {
            "explanation": "Area \\( = \\) length \\( \\times \\) width \\( = x(12-x) \\).",
            "workingOut": "",
            "graphData": null
          }
        ]
      },
      {
        "id": "y11a-3b-q14d",
        "type": "multiple_choice",
        "question": "d) Using the fact that physical lengths must be positive, state the domain of \\( A \\). (Format: '0 < x < 12')",
        "a": "0",
        "opts": [
          "\\( 0 < x < 12 \\)",
          "\\( x > 0 \\)",
          "\\( 0 \\leq x \\leq 12 \\)",
          "\\( 0 < x < 24 \\)"
        ],
        "solutionSteps": [
          {
            "explanation": "Both side lengths \\( x \\) and \\( 12-x \\) must be strictly positive, giving \\( 0 < x < 12 \\).",
            "workingOut": "",
            "graphData": null
          }
        ]
      },
      {
        "id": "y11a-3b-q14e",
        "type": "teacher_review",
        "question": "e) Sketch the graph of the area function \\( A(x) \\) over the domain found in part d.",
        "a": "Parabola opening downwards with x-intercepts at (0, 0) and (12, 0), and vertex (maximum area) at (6, 36).",
        "solutionSteps": [
          {
            "explanation": "Since A(x) = 12x - x^2 is a downward-opening parabola, its maximum value occurs exactly at the vertex, halfway between the two x-intercepts (x = 0 and x = 12).",
            "workingOut": "",
            "graphData": null
          },
          {
            "explanation": "The roots are at x = 0 and x = 12, and the vertex (maximum area) is at the midpoint x = 6.",
            "workingOut": "\\( A(6) = 6(12-6) = 36 \\)",
            "graphData": null
          }
        ]
      }
    ],
    "solutionSteps": [
      {
        "explanation": "For part a, opposite sides of a rectangle are equal in length, so the opposite side must be \\( x \\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "For part b, the total perimeter is \\( 24 \\text{ cm} \\). Thus, the sum of adjacent sides is half the perimeter.",
        "workingOut": "\\(\\text{Adjacent side} = \\frac{24 - 2x}{2} = 12 - x\\)",
        "graphData": null
      },
      {
        "explanation": "For part c, the area is length multiplied by width.",
        "workingOut": "A(x) = x(12 - x) = 12x - x^2",
        "graphData": null
      },
      {
        "explanation": "For part d, physical dimensions must be positive, so both \\( x > 0 \\) and \\( 12 - x > 0 \\).",
        "workingOut": "\\(x > 0 \\quad \\text{and} \\quad 12 - x > 0 \\implies 0 < x < 12\\)",
        "graphData": null
      },
      {
        "explanation": "For part e, the graph of \\( A(x) = 12x - x^2 \\) is a downward-opening parabola with roots at \\( x = 0, 12 \\) and its vertex at the midpoint \\( x = 6 \\).",
        "workingOut": "A(6) = 6(12 - 6) = 36",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 400,
        "height": 300,
        "boundingbox": [
          -2,
          45,
          14,
          -5
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-1,0], [13,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3], [0,42]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [12.8, -1, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 40, 'A'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return 12*x - x*x; }, 0, 12], {strokeColor: '#4f46e5', strokeWidth: 2, firstArrow: false, lastArrow: false});\nboard.create('point', [6, 36], {name: '(6,36)', size: 3, color: 'red', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [0, 0], {size: 3, face: 'o', color: '#4f46e5', fixed: true});\nboard.create('point', [12, 0], {size: 3, face: 'o', color: '#4f46e5', fixed: true});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y11a-3b-q15a",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "Solve the equation \\( 3x - y + 4 = 0 \\) for \\( y \\) and hence explain why it represents a function.",
    "a": "0",
    "solutionSteps": [
      {
        "explanation": "General principle: once an equation is rearranged into the form y = (a single expression in x), every input x produces exactly one output y, so the relation is a function.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Isolate \\( y \\) in the equation.",
        "workingOut": "\\( 3x - y + 4 = 0 \\implies y = 3x + 4 \\)",
        "graphData": null
      },
      {
        "explanation": "Analyze the result. For any real number \\( x \\), multiplying by 3 and adding 4 gives a single, unique real number.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Since each input has exactly one output, the equation represents a function (specifically, a linear function).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Solving explicitly for \\( y \\) gives a single expression in \\( x \\): \\( y = 3x + 4 \\). It represents a function because for every input \\( x \\), there is exactly one corresponding value of \\( y \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( y = 3x + 4 \\). It represents a function because for every input \\( x \\), there is exactly one corresponding value of \\( y \\).",
      "\\( y = 3x + 4 \\). It represents a relation but not a function because some \\( x \\)-values give two \\( y \\)-values.",
      "\\( y = 3x - 4 \\). It represents a function because for every input \\( x \\), there is exactly one corresponding value of \\( y \\).",
      "\\( y = -3x - 4 \\). It represents a function because it is linear."
    ]
  },
  {
    "id": "y11a-3b-q15b",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "Solve the equation \\( xy = 6 \\) for \\( y \\) and explain why it represents a function.",
    "a": "0",
    "solutionSteps": [
      {
        "explanation": "General principle: once an equation is rearranged into the form y = (a single expression in x), every input x produces exactly one output y, so the relation is a function.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Divide both sides by \\( x \\), noting that \\( x \\neq 0 \\).",
        "workingOut": "\\(y = \\frac{6}{x} \\quad (x \\neq 0)\\)",
        "graphData": null
      },
      {
        "explanation": "For any non-zero input \\( x \\), \\( \\frac{6}{x} \\) yields a unique single output \\( y \\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Since every value in the domain maps to exactly one value in the range, it is a function.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Solving explicitly for \\( y \\) gives a single expression in \\( x \\): \\( y = \\frac{6}{x} \\). It represents a function because for every input \\( x \\) (except \\( x = 0 \\)), there is exactly one value of \\( y \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( y = \\frac{6}{x} \\). It represents a function because for every input \\( x \\) (except \\( x = 0 \\)), there is exactly one value of \\( y \\).",
      "\\( y = \\frac{6}{x} \\). It represents a relation but not a function because \\( x = 0 \\) gives two values of \\( y \\).",
      "\\( y = -\\frac{6}{x} \\). It represents a function because for every input \\( x \\) (except \\( x = 0 \\)), there is exactly one value of \\( y \\).",
      "\\( y = \\frac{x}{6} \\). It represents a function because for every input \\( x \\), there is exactly one value of \\( y \\)."
    ]
  },
  {
    "id": "y11a-3b-q15c",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "Solve the equation \\( xy - 3y = 4 \\) for \\( y \\) and explain why it represents a function.",
    "a": "2",
    "solutionSteps": [
      {
        "explanation": "General principle: once an equation is rearranged into the form y = (a single expression in x), every input x produces exactly one output y, so the relation is a function.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Factor out \\( y \\) on the left-hand side.",
        "workingOut": "y(x - 3) = 4",
        "graphData": null
      },
      {
        "explanation": "Divide by \\( x - 3 \\) to solve for \\( y \\).",
        "workingOut": "\\(y = \\frac{4}{x - 3} \\quad (x \\neq 3)\\)",
        "graphData": null
      },
      {
        "explanation": "For any input \\( x \\neq 3 \\), \\( \\frac{4}{x-3} \\) produces a single, unique real number.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Thus, the relation is a function.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Solving explicitly for \\( y \\) gives a single expression in \\( x \\): \\( y = \\frac{4}{x-3} \\). It represents a function because for any input \\( x \\) (except \\( x = 3 \\)), there is exactly one value of \\( y \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( y = \\frac{4}{x+3} \\). It represents a function because for any input \\( x \\) (except \\( x = -3 \\)), there is exactly one value of \\( y \\).",
      "\\( y = \\frac{x-3}{4} \\). It represents a function because it is linear.",
      "\\( y = \\frac{4}{x-3} \\). It represents a function because for any input \\( x \\) (except \\( x = 3 \\)), there is exactly one value of \\( y \\).",
      "\\( y = \\frac{4}{x-3} \\). It represents a relation but not a function because \\( x = 3 \\) gives two values of \\( y \\)."
    ]
  },
  {
    "id": "y11a-3b-q15d",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Solve the equation \\( y + 3 = \\sqrt{16 - x^2} \\) for \\( y \\) and explain why it represents a function.",
    "a": "2",
    "solutionSteps": [
      {
        "explanation": "General principle: once an equation is rearranged into the form y = (a single expression in x), every input x produces exactly one output y, so the relation is a function.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Subtract 3 from both sides of the equation.",
        "workingOut": "\\(y = \\sqrt{16 - x^2} - 3\\)",
        "graphData": null
      },
      {
        "explanation": "Find the domain restrictions. The expression inside the radical must be non-negative.",
        "workingOut": "\\( 16 - x^2 \\ge 0 \\implies x^2 \\le 16 \\implies -4 \\le x \\le 4 \\)",
        "graphData": null
      },
      {
        "explanation": "The symbol \\( \\sqrt{} \\) represents the principal (positive) square root only. Therefore, for each \\( x \\in [-4, 4] \\), there is exactly one real value for \\( y \\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Hence, it represents a function (specifically, the upper semicircle centered at (0, -3)).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Solving explicitly for \\( y \\) gives a single expression in \\( x \\): \\( y = \\sqrt{16-x^2} - 3 \\). It represents a function because the positive square root sign specifies a single principal output value of \\( y \\) for each input \\( x \\) in the domain \\( [-4, 4] \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( y = \\sqrt{16+x^2} - 3 \\). It represents a function because the positive square root sign specifies a single principal output value of \\( y \\).",
      "\\( y = \\pm\\sqrt{16-x^2} - 3 \\). It represents a relation but not a function because each \\( x \\)-value (except the endpoints) gives two \\( y \\)-values.",
      "\\( y = \\sqrt{16-x^2} - 3 \\). It represents a function because the positive square root sign specifies a single principal output value of \\( y \\) for each input \\( x \\) in the domain \\( [-4, 4] \\).",
      "\\( y = \\sqrt{16-x^2} + 3 \\). It represents a function because the positive square root sign specifies a single principal output value of \\( y \\)."
    ]
  },
  {
    "id": "y11a-3b-q16a",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\frac{x}{\\sqrt{x + 3}} \\). (Format: 'x > -3')",
    "a": "1",
    "solutionSteps": [
      {
        "explanation": "General rule: for an expression under a square root, the radicand must be \\( \\geq 0 \\); for an expression in a denominator, the denominator must be \\( \\neq 0 \\). Combine every such restriction to get the natural domain.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Consider the restrictions. The denominator cannot be zero, and the radicand must be non-negative.",
        "workingOut": "\\\\( \\\\text{Radicand: } x + 3 \\\\ge 0 \\\\implies x \\\\ge -3 \\\\\\\\ \\\\text{Denominator } \\\\neq 0 \\\\implies \\\\sqrt{x+3} \\\\neq 0 \\\\implies x \\\\neq -3 \\\\)",
        "graphData": null
      },
      {
        "explanation": "Combine both conditions.",
        "workingOut": "x > -3",
        "graphData": null
      },
      {
        "explanation": "The natural domain is \\( x > -3 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( x < -3 \\)",
      "\\( x > -3 \\)",
      "\\( x > 3 \\)",
      "\\( x \\geq -3 \\)"
    ]
  },
  {
    "id": "y11a-3b-q16b",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\frac{3}{x^2 - 9} \\). (Format: 'x != 3 and x != -3')",
    "a": "0",
    "solutionSteps": [
      {
        "explanation": "General rule: for an expression under a square root, the radicand must be \\( \\geq 0 \\); for an expression in a denominator, the denominator must be \\( \\neq 0 \\). Combine every such restriction to get the natural domain.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Set the quadratic denominator to not equal zero.",
        "workingOut": "\\( x^2 - 9 \\neq 0 \\)",
        "graphData": null
      },
      {
        "explanation": "Factorise and solve.",
        "workingOut": "\\((x - 3)(x + 3) \\neq 0 \\implies x \\neq 3 \\text{ and } x \\neq -3\\)",
        "graphData": null
      },
      {
        "explanation": "The natural domain is \\( x \\neq 3 \\text{ and } x \\neq -3 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( x \\neq 3 \\text{ and } x \\neq -3 \\)",
      "\\( x \\neq 3 \\)",
      "\\( x \\in \\mathbb{R}\\ (\\text{all real } x) \\)",
      "\\( x \\neq -3 \\)"
    ]
  },
  {
    "id": "y11a-3b-q16c",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\frac{1}{x^2 + 2x} \\). (Format: 'x != 0 and x != -2')",
    "a": "1",
    "solutionSteps": [
      {
        "explanation": "General rule: for an expression under a square root, the radicand must be \\( \\geq 0 \\); for an expression in a denominator, the denominator must be \\( \\neq 0 \\). Combine every such restriction to get the natural domain.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Set the denominator to be non-zero.",
        "workingOut": "\\( x^2 + 2x \\neq 0 \\)",
        "graphData": null
      },
      {
        "explanation": "Factorise the quadratic expression.",
        "workingOut": "\\( x(x + 2) \\neq 0 \\)",
        "graphData": null
      },
      {
        "explanation": "Identify the values to exclude.",
        "workingOut": "\\(x \\neq 0 \\text{ and } x \\neq -2\\)",
        "graphData": null
      },
      {
        "explanation": "The natural domain is \\( x \\neq 0 \\text{ and } x \\neq -2 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( x \\neq 0 \\)",
      "\\( x \\neq 0 \\text{ and } x \\neq -2 \\)",
      "\\( x \\in \\mathbb{R}\\ (\\text{all real } x) \\)",
      "\\( x \\neq -2 \\)"
    ]
  },
  {
    "id": "y11a-3b-q16d",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\frac{1}{x^2 - 6x + 8} \\). (Format: 'x != 2 and x != 4')",
    "a": "1",
    "solutionSteps": [
      {
        "explanation": "General rule: for an expression under a square root, the radicand must be \\( \\geq 0 \\); for an expression in a denominator, the denominator must be \\( \\neq 0 \\). Combine every such restriction to get the natural domain.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Set the denominator expression to not equal zero.",
        "workingOut": "\\( x^2 - 6x + 8 \\neq 0 \\)",
        "graphData": null
      },
      {
        "explanation": "Factorise the quadratic trinomial.",
        "workingOut": "\\( (x - 2)(x - 4) \\neq 0 \\)",
        "graphData": null
      },
      {
        "explanation": "Solve the exclusions.",
        "workingOut": "\\(x \\neq 2 \\text{ and } x \\neq -4 \\implies x \\neq 2, 4\\)",
        "graphData": null
      },
      {
        "explanation": "The natural domain is \\( x \\neq 2 \\text{ and } x \\neq 4 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( x \\neq 2 \\)",
      "\\( x \\neq 2 \\text{ and } x \\neq 4 \\)",
      "\\( x \\in \\mathbb{R}\\ (\\text{all real } x) \\)",
      "\\( x \\neq 4 \\)"
    ]
  },
  {
    "id": "y11a-3b-q16e",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\sqrt{x^2 - 9} \\). (Format: 'x <= -3 or x >= 3')",
    "a": "2",
    "solutionSteps": [
      {
        "explanation": "General rule: for an expression under a square root, the radicand must be \\( \\geq 0 \\); for an expression in a denominator, the denominator must be \\( \\neq 0 \\). Combine every such restriction to get the natural domain.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "The quantity under the square root must be non-negative.",
        "workingOut": "\\( x^2 - 9 \\ge 0 \\)",
        "graphData": null
      },
      {
        "explanation": "Factorise the difference of squares.",
        "workingOut": "\\( (x - 3)(x + 3) \\ge 0 \\)",
        "graphData": null
      },
      {
        "explanation": "For the product to be positive or zero, \\( x \\) must lie outside the roots \\( -3 \\) and \\( 3 \\).",
        "workingOut": "\\(x \\le -3 \\quad \\text{or} \\quad x \\ge 3\\)",
        "graphData": null
      },
      {
        "explanation": "The natural domain is \\( x \\leq -3 \\text{ or } x \\geq 3 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( x \\geq 3 \\)",
      "\\( -3 \\leq x \\leq 3 \\)",
      "\\( x \\leq -3 \\text{ or } x \\geq 3 \\)",
      "\\( x < -3 \\text{ or } x > 3 \\)"
    ]
  },
  {
    "id": "y11a-3b-q16f",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\frac{1}{\\sqrt{4 - x^2}} \\). (Format: '-2 < x < 2')",
    "a": "2",
    "solutionSteps": [
      {
        "explanation": "General rule: for an expression under a square root, the radicand must be \\( \\geq 0 \\); for an expression in a denominator, the denominator must be \\( \\neq 0 \\). Combine every such restriction to get the natural domain.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "The radicand in the denominator must be strictly positive.",
        "workingOut": "4 - x^2 > 0",
        "graphData": null
      },
      {
        "explanation": "Factorise the inequality.",
        "workingOut": "(2 - x)(2 + x) > 0",
        "graphData": null
      },
      {
        "explanation": "For the product to be positive, \\( x \\) must lie strictly between the roots \\( -2 \\) and \\( 2 \\).",
        "workingOut": "-2 < x < 2",
        "graphData": null
      },
      {
        "explanation": "The natural domain is \\( -2 < x < 2 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( x \\leq -2 \\text{ or } x \\geq 2 \\)",
      "\\( x < 2 \\)",
      "\\( -2 < x < 2 \\)",
      "\\( -2 \\leq x \\leq 2 \\)"
    ]
  },
  {
    "id": "y11a-3b-q17a",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of the function \\( f(x) = \\sqrt{\\frac{x - 2}{x - 3}} \\). (Format: 'x <= 2 or x > 3')",
    "a": "1",
    "solutionSteps": [
      {
        "explanation": "The expression under the square root, \\( \\frac{x-2}{x-3} \\), must be \\( \\geq 0 \\), and since it is also a denominator, \\( x \\neq 3 \\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Identify the conditions under which the expression inside the square root is defined.",
        "workingOut": "\\(\\frac{x - 2}{x - 3} \\ge 0 \\quad \\text{and} \\quad x - 3 \\neq 0\\)",
        "graphData": null
      },
      {
        "explanation": "Determine the critical points where the numerator or denominator is zero.",
        "workingOut": "\\(x = 2 \\quad \\text{and} \\quad x = 3\\)",
        "graphData": null
      },
      {
        "explanation": "Test the intervals defined by the critical points.",
        "workingOut": "\\(\\text{For } x < 2: \\frac{-}{-} > 0, \\quad \\text{For } 2 \\le x < 3: \\frac{+}{-} \\le 0, \\quad \\text{For } x > 3: \\frac{+}{+} > 0\\)",
        "graphData": null
      },
      {
        "explanation": "State the domain using inequalities, keeping in mind that the denominator cannot be zero.",
        "workingOut": "\\(x \\le 2 \\quad \\text{or} \\quad x > 3\\)",
        "graphData": null
      },
      {
        "explanation": "Testing the sign of \\( \\frac{x-2}{x-3} \\) on each interval gives the domain \\( x \\leq 2 \\text{ or } x > 3 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( x \\neq 3 \\)",
      "\\( x \\leq 2 \\text{ or } x > 3 \\)",
      "\\( x < 2 \\text{ or } x \\geq 3 \\)",
      "\\( 2 \\leq x < 3 \\)"
    ]
  },
  {
    "id": "y11a-3b-q17b",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of the function \\( f(x) = \\sqrt{\\frac{x - 4}{x - 6}} \\). (Format: 'x <= 4 or x > 6')",
    "a": "0",
    "solutionSteps": [
      {
        "explanation": "The expression under the square root, \\( \\frac{x-4}{x-6} \\), must be \\( \\geq 0 \\), and since it is also a denominator, \\( x \\neq 6 \\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Identify the conditions under which the expression inside the square root is defined.",
        "workingOut": "\\(\\frac{x - 4}{x - 6} \\ge 0 \\quad \\text{and} \\quad x - 6 \\neq 0\\)",
        "graphData": null
      },
      {
        "explanation": "Determine the critical points where the numerator or denominator is zero.",
        "workingOut": "\\(x = 4 \\quad \\text{and} \\quad x = 6\\)",
        "graphData": null
      },
      {
        "explanation": "Test the intervals defined by the critical points.",
        "workingOut": "\\(\\text{For } x < 4: \\frac{-}{-} > 0, \\quad \\text{For } 4 \\le x < 6: \\frac{+}{-} \\le 0, \\quad \\text{For } x > 6: \\frac{+}{+} > 0\\)",
        "graphData": null
      },
      {
        "explanation": "State the domain using inequalities, keeping in mind that the denominator cannot be zero.",
        "workingOut": "\\(x \\le 4 \\quad \\text{or} \\quad x > 6\\)",
        "graphData": null
      },
      {
        "explanation": "Testing the sign of \\( \\frac{x-4}{x-6} \\) on each interval gives the domain \\( x \\leq 4 \\text{ or } x > 6 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( x \\leq 4 \\text{ or } x > 6 \\)",
      "\\( x \\neq 6 \\)",
      "\\( x < 4 \\text{ or } x \\geq 6 \\)",
      "\\( 4 \\leq x < 6 \\)"
    ]
  },
  {
    "id": "y11a-3b-q17c",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of the function \\( f(x) = \\sqrt{\\frac{x - 6}{x - 9}} \\). (Format: 'x <= 6 or x > 9')",
    "a": "0",
    "solutionSteps": [
      {
        "explanation": "The expression under the square root, \\( \\frac{x-6}{x-9} \\), must be \\( \\geq 0 \\), and since it is also a denominator, \\( x \\neq 9 \\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Identify the conditions under which the expression inside the square root is defined.",
        "workingOut": "\\(\\frac{x - 6}{x - 9} \\ge 0 \\quad \\text{and} \\quad x - 9 \\neq 0\\)",
        "graphData": null
      },
      {
        "explanation": "Determine the critical points where the numerator or denominator is zero.",
        "workingOut": "\\(x = 6 \\quad \\text{and} \\quad x = 9\\)",
        "graphData": null
      },
      {
        "explanation": "Test the intervals defined by the critical points.",
        "workingOut": "\\(\\text{For } x < 6: \\frac{-}{-} > 0, \\quad \\text{For } 6 \\le x < 9: \\frac{+}{-} \\le 0, \\quad \\text{For } x > 9: \\frac{+}{+} > 0\\)",
        "graphData": null
      },
      {
        "explanation": "State the domain using inequalities, keeping in mind that the denominator cannot be zero.",
        "workingOut": "\\(x \\le 6 \\quad \\text{or} \\quad x > 9\\)",
        "graphData": null
      },
      {
        "explanation": "Testing the sign of \\( \\frac{x-6}{x-9} \\) on each interval gives the domain \\( x \\leq 6 \\text{ or } x > 9 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( x \\leq 6 \\text{ or } x > 9 \\)",
      "\\( x < 6 \\text{ or } x \\geq 9 \\)",
      "\\( x \\neq 9 \\)",
      "\\( 6 \\leq x < 9 \\)"
    ]
  },
  {
    "id": "y11a-3b-q17d",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of the function \\( f(x) = \\sqrt{\\frac{x - 8}{x - 12}} \\). (Format: 'x <= 8 or x > 12')",
    "a": "1",
    "solutionSteps": [
      {
        "explanation": "The expression under the square root, \\( \\frac{x-8}{x-12} \\), must be \\( \\geq 0 \\), and since it is also a denominator, \\( x \\neq 12 \\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Identify the conditions under which the expression inside the square root is defined.",
        "workingOut": "\\(\\frac{x - 8}{x - 12} \\ge 0 \\quad \\text{and} \\quad x - 12 \\neq 0\\)",
        "graphData": null
      },
      {
        "explanation": "Determine the critical points where the numerator or denominator is zero.",
        "workingOut": "\\(x = 8 \\quad \\text{and} \\quad x = 12\\)",
        "graphData": null
      },
      {
        "explanation": "Test the intervals defined by the critical points.",
        "workingOut": "\\(\\text{For } x < 8: \\frac{-}{-} > 0, \\quad \\text{For } 8 \\le x < 12: \\frac{+}{-} \\le 0, \\quad \\text{For } x > 12: \\frac{+}{+} > 0\\)",
        "graphData": null
      },
      {
        "explanation": "State the domain using inequalities, keeping in mind that the denominator cannot be zero.",
        "workingOut": "\\(x \\le 8 \\quad \\text{or} \\quad x > 12\\)",
        "graphData": null
      },
      {
        "explanation": "Testing the sign of \\( \\frac{x-8}{x-12} \\) on each interval gives the domain \\( x \\leq 8 \\text{ or } x > 12 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( x < 8 \\text{ or } x \\geq 12 \\)",
      "\\( x \\leq 8 \\text{ or } x > 12 \\)",
      "\\( 8 \\leq x < 12 \\)",
      "\\( x \\neq 12 \\)"
    ]
  },
  {
    "id": "y11a-3b-q17e",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of the function \\( f(x) = \\sqrt{\\frac{x - 10}{x - 15}} \\). (Format: 'x <= 10 or x > 15')",
    "a": "1",
    "solutionSteps": [
      {
        "explanation": "The expression under the square root, \\( \\frac{x-10}{x-15} \\), must be \\( \\geq 0 \\), and since it is also a denominator, \\( x \\neq 15 \\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Identify the conditions under which the expression inside the square root is defined.",
        "workingOut": "\\(\\frac{x - 10}{x - 15} \\ge 0 \\quad \\text{and} \\quad x - 15 \\neq 0\\)",
        "graphData": null
      },
      {
        "explanation": "Determine the critical points where the numerator or denominator is zero.",
        "workingOut": "\\(x = 10 \\quad \\text{and} \\quad x = 15\\)",
        "graphData": null
      },
      {
        "explanation": "Test the intervals defined by the critical points.",
        "workingOut": "\\(\\text{For } x < 10: \\frac{-}{-} > 0, \\quad \\text{For } 10 \\le x < 15: \\frac{+}{-} \\le 0, \\quad \\text{For } x > 15: \\frac{+}{+} > 0\\)",
        "graphData": null
      },
      {
        "explanation": "State the domain using inequalities, keeping in mind that the denominator cannot be zero.",
        "workingOut": "\\(x \\le 10 \\quad \\text{or} \\quad x > 15\\)",
        "graphData": null
      },
      {
        "explanation": "Testing the sign of \\( \\frac{x-10}{x-15} \\) on each interval gives the domain \\( x \\leq 10 \\text{ or } x > 15 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( x < 10 \\text{ or } x \\geq 15 \\)",
      "\\( x \\leq 10 \\text{ or } x > 15 \\)",
      "\\( 10 \\leq x < 15 \\)",
      "\\( x \\neq 15 \\)"
    ]
  },
  {
    "id": "y11a-3b-q17f",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of the function \\( f(x) = \\sqrt{\\frac{x - 12}{x - 18}} \\). (Format: 'x <= 12 or x > 18')",
    "a": "0",
    "solutionSteps": [
      {
        "explanation": "The expression under the square root, \\( \\frac{x-12}{x-18} \\), must be \\( \\geq 0 \\), and since it is also a denominator, \\( x \\neq 18 \\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Identify the conditions under which the expression inside the square root is defined.",
        "workingOut": "\\(\\frac{x - 12}{x - 18} \\ge 0 \\quad \\text{and} \\quad x - 18 \\neq 0\\)",
        "graphData": null
      },
      {
        "explanation": "Determine the critical points where the numerator or denominator is zero.",
        "workingOut": "\\(x = 12 \\quad \\text{and} \\quad x = 18\\)",
        "graphData": null
      },
      {
        "explanation": "Test the intervals defined by the critical points.",
        "workingOut": "\\(\\text{For } x < 12: \\frac{-}{-} > 0, \\quad \\text{For } 12 \\le x < 18: \\frac{+}{-} \\le 0, \\quad \\text{For } x > 18: \\frac{+}{+} > 0\\)",
        "graphData": null
      },
      {
        "explanation": "State the domain using inequalities, keeping in mind that the denominator cannot be zero.",
        "workingOut": "\\(x \\le 12 \\quad \\text{or} \\quad x > 18\\)",
        "graphData": null
      },
      {
        "explanation": "Testing the sign of \\( \\frac{x-12}{x-18} \\) on each interval gives the domain \\( x \\leq 12 \\text{ or } x > 18 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( x \\leq 12 \\text{ or } x > 18 \\)",
      "\\( x < 12 \\text{ or } x \\geq 18 \\)",
      "\\( 12 \\leq x < 18 \\)",
      "\\( x \\neq 18 \\)"
    ]
  },
  {
    "id": "y11a-3b-q17g",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of the function \\( f(x) = \\sqrt{\\frac{x - 14}{x - 21}} \\). (Format: 'x <= 14 or x > 21')",
    "a": "2",
    "solutionSteps": [
      {
        "explanation": "The expression under the square root, \\( \\frac{x-14}{x-21} \\), must be \\( \\geq 0 \\), and since it is also a denominator, \\( x \\neq 21 \\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Identify the conditions under which the expression inside the square root is defined.",
        "workingOut": "\\(\\frac{x - 14}{x - 21} \\ge 0 \\quad \\text{and} \\quad x - 21 \\neq 0\\)",
        "graphData": null
      },
      {
        "explanation": "Determine the critical points where the numerator or denominator is zero.",
        "workingOut": "\\(x = 14 \\quad \\text{and} \\quad x = 21\\)",
        "graphData": null
      },
      {
        "explanation": "Test the intervals defined by the critical points.",
        "workingOut": "\\(\\text{For } x < 14: \\frac{-}{-} > 0, \\quad \\text{For } 14 \\le x < 21: \\frac{+}{-} \\le 0, \\quad \\text{For } x > 21: \\frac{+}{+} > 0\\)",
        "graphData": null
      },
      {
        "explanation": "State the domain using inequalities, keeping in mind that the denominator cannot be zero.",
        "workingOut": "\\(x \\le 14 \\quad \\text{or} \\quad x > 21\\)",
        "graphData": null
      },
      {
        "explanation": "Testing the sign of \\( \\frac{x-14}{x-21} \\) on each interval gives the domain \\( x \\leq 14 \\text{ or } x > 21 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( x < 14 \\text{ or } x \\geq 21 \\)",
      "\\( 14 \\leq x < 21 \\)",
      "\\( x \\leq 14 \\text{ or } x > 21 \\)",
      "\\( x \\neq 21 \\)"
    ]
  },
  {
    "id": "y11a-3b-q17h",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of the function \\( f(x) = \\sqrt{\\frac{x - 16}{x - 24}} \\). (Format: 'x <= 16 or x > 24')",
    "a": "2",
    "solutionSteps": [
      {
        "explanation": "The expression under the square root, \\( \\frac{x-16}{x-24} \\), must be \\( \\geq 0 \\), and since it is also a denominator, \\( x \\neq 24 \\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Identify the conditions under which the expression inside the square root is defined.",
        "workingOut": "\\(\\frac{x - 16}{x - 24} \\ge 0 \\quad \\text{and} \\quad x - 24 \\neq 0\\)",
        "graphData": null
      },
      {
        "explanation": "Determine the critical points where the numerator or denominator is zero.",
        "workingOut": "\\(x = 16 \\quad \\text{and} \\quad x = 24\\)",
        "graphData": null
      },
      {
        "explanation": "Test the intervals defined by the critical points.",
        "workingOut": "\\(\\text{For } x < 16: \\frac{-}{-} > 0, \\quad \\text{For } 16 \\le x < 24: \\frac{+}{-} \\le 0, \\quad \\text{For } x > 24: \\frac{+}{+} > 0\\)",
        "graphData": null
      },
      {
        "explanation": "State the domain using inequalities, keeping in mind that the denominator cannot be zero.",
        "workingOut": "\\(x \\le 16 \\quad \\text{or} \\quad x > 24\\)",
        "graphData": null
      },
      {
        "explanation": "Testing the sign of \\( \\frac{x-16}{x-24} \\) on each interval gives the domain \\( x \\leq 16 \\text{ or } x > 24 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( x < 16 \\text{ or } x \\geq 24 \\)",
      "\\( 16 \\leq x < 24 \\)",
      "\\( x \\leq 16 \\text{ or } x > 24 \\)",
      "\\( x \\neq 24 \\)"
    ]
  },
  {
    "id": "y11a-3b-q17i",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of the function \\( f(x) = \\sqrt{\\frac{x - 18}{x - 27}} \\). (Format: 'x <= 18 or x > 27')",
    "a": "2",
    "solutionSteps": [
      {
        "explanation": "The expression under the square root, \\( \\frac{x-18}{x-27} \\), must be \\( \\geq 0 \\), and since it is also a denominator, \\( x \\neq 27 \\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Identify the conditions under which the expression inside the square root is defined.",
        "workingOut": "\\(\\frac{x - 18}{x - 27} \\ge 0 \\quad \\text{and} \\quad x - 27 \\neq 0\\)",
        "graphData": null
      },
      {
        "explanation": "Determine the critical points where the numerator or denominator is zero.",
        "workingOut": "\\(x = 18 \\quad \\text{and} \\quad x = 27\\)",
        "graphData": null
      },
      {
        "explanation": "Test the intervals defined by the critical points.",
        "workingOut": "\\(\\text{For } x < 18: \\frac{-}{-} > 0, \\quad \\text{For } 18 \\le x < 27: \\frac{+}{-} \\le 0, \\quad \\text{For } x > 27: \\frac{+}{+} > 0\\)",
        "graphData": null
      },
      {
        "explanation": "State the domain using inequalities, keeping in mind that the denominator cannot be zero.",
        "workingOut": "\\(x \\le 18 \\quad \\text{or} \\quad x > 27\\)",
        "graphData": null
      },
      {
        "explanation": "Testing the sign of \\( \\frac{x-18}{x-27} \\) on each interval gives the domain \\( x \\leq 18 \\text{ or } x > 27 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( 18 \\leq x < 27 \\)",
      "\\( x < 18 \\text{ or } x \\geq 27 \\)",
      "\\( x \\leq 18 \\text{ or } x > 27 \\)",
      "\\( x \\neq 27 \\)"
    ]
  },
  {
    "id": "y11a-3b-q17j",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of the function \\( f(x) = \\sqrt{\\frac{x - 20}{x - 30}} \\). (Format: 'x <= 20 or x > 30')",
    "a": "2",
    "solutionSteps": [
      {
        "explanation": "The expression under the square root, \\( \\frac{x-20}{x-30} \\), must be \\( \\geq 0 \\), and since it is also a denominator, \\( x \\neq 30 \\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Identify the conditions under which the expression inside the square root is defined.",
        "workingOut": "\\(\\frac{x - 20}{x - 30} \\ge 0 \\quad \\text{and} \\quad x - 30 \\neq 0\\)",
        "graphData": null
      },
      {
        "explanation": "Determine the critical points where the numerator or denominator is zero.",
        "workingOut": "\\(x = 20 \\quad \\text{and} \\quad x = 30\\)",
        "graphData": null
      },
      {
        "explanation": "Test the intervals defined by the critical points.",
        "workingOut": "\\(\\text{For } x < 20: \\frac{-}{-} > 0, \\quad \\text{For } 20 \\le x < 30: \\frac{+}{-} \\le 0, \\quad \\text{For } x > 30: \\frac{+}{+} > 0\\)",
        "graphData": null
      },
      {
        "explanation": "State the domain using inequalities, keeping in mind that the denominator cannot be zero.",
        "workingOut": "\\(x \\le 20 \\quad \\text{or} \\quad x > 30\\)",
        "graphData": null
      },
      {
        "explanation": "Testing the sign of \\( \\frac{x-20}{x-30} \\) on each interval gives the domain \\( x \\leq 20 \\text{ or } x > 30 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( x < 20 \\text{ or } x \\geq 30 \\)",
      "\\( 20 \\leq x < 30 \\)",
      "\\( x \\leq 20 \\text{ or } x > 30 \\)",
      "\\( x \\neq 30 \\)"
    ]
  },
  {
    "id": "y11a-3b-q18a",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the range of the rational function \\( f(x) = \\frac{1x + 3}{5x - 1} \\). (Format: 'y != 1/5')",
    "a": "2",
    "solutionSteps": [
      {
        "explanation": "General rule: for a rational function of the form \\( \\frac{ax+b}{cx+d} \\), the range excludes the horizontal asymptote \\( y = \\frac{a}{c} \\) (the ratio of the \\(x\\)-coefficients).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Set y equal to f(x) and rearrange the equation to express x in terms of y.",
        "workingOut": "\\(y = \\frac{1x + 3}{5x - 1} \\implies y(5x - 1) = 1x + 3\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the left side and group all terms containing x on one side.",
        "workingOut": "\\(5xy - 1y = 1x + 3 \\implies 5xy - 1x = 1y + 3\\)",
        "graphData": null
      },
      {
        "explanation": "Factor out x and solve.",
        "workingOut": "\\(x(5y - 1) = 1y + 3 \\implies x = \\frac{1y + 3}{5y - 1}\\)",
        "graphData": null
      },
      {
        "explanation": "Determine the restriction on y such that x is a real value.",
        "workingOut": "\\(5y - 1 \\neq 0 \\implies y \\neq \\frac{1}{5}\\)",
        "graphData": null
      },
      {
        "explanation": "The range excludes \\( y = \\frac{1}{5} \\), so the answer is \\( y \\neq \\frac{1}{5} \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( y \\neq \\frac{3}{5} \\)",
      "\\( y \\neq -\\frac{1}{5} \\)",
      "\\( y \\neq \\frac{1}{5} \\)",
      "\\( y \\in \\mathbb{R}\\ (\\text{all real } y) \\)"
    ]
  },
  {
    "id": "y11a-3b-q18b",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the range of the rational function \\( f(x) = \\frac{2x + 4}{6x - 2} \\). (Format: 'y != 2/6')",
    "a": "1",
    "solutionSteps": [
      {
        "explanation": "General rule: for a rational function of the form \\( \\frac{ax+b}{cx+d} \\), the range excludes the horizontal asymptote \\( y = \\frac{a}{c} \\) (the ratio of the \\(x\\)-coefficients).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Set y equal to f(x) and rearrange the equation to express x in terms of y.",
        "workingOut": "\\(y = \\frac{2x + 4}{6x - 2} \\implies y(6x - 2) = 2x + 4\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the left side and group all terms containing x on one side.",
        "workingOut": "\\(6xy - 2y = 2x + 4 \\implies 6xy - 2x = 2y + 4\\)",
        "graphData": null
      },
      {
        "explanation": "Factor out x and solve.",
        "workingOut": "\\(x(6y - 2) = 2y + 4 \\implies x = \\frac{2y + 4}{6y - 2}\\)",
        "graphData": null
      },
      {
        "explanation": "Determine the restriction on y such that x is a real value.",
        "workingOut": "\\(6y - 2 \\neq 0 \\implies y \\neq \\frac{2}{6}\\)",
        "graphData": null
      },
      {
        "explanation": "The range excludes \\( y = \\frac{2}{6} \\), so the answer is \\( y \\neq \\frac{2}{6} \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( y \\neq \\frac{4}{6} \\)",
      "\\( y \\neq \\frac{2}{6} \\)",
      "\\( y \\neq -\\frac{2}{6} \\)",
      "\\( y \\in \\mathbb{R}\\ (\\text{all real } y) \\)"
    ]
  },
  {
    "id": "y11a-3b-q18c",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the range of the rational function \\( f(x) = \\frac{3x + 5}{7x - 3} \\). (Format: 'y != 3/7')",
    "a": "0",
    "solutionSteps": [
      {
        "explanation": "General rule: for a rational function of the form \\( \\frac{ax+b}{cx+d} \\), the range excludes the horizontal asymptote \\( y = \\frac{a}{c} \\) (the ratio of the \\(x\\)-coefficients).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Set y equal to f(x) and rearrange the equation to express x in terms of y.",
        "workingOut": "\\(y = \\frac{3x + 5}{7x - 3} \\implies y(7x - 3) = 3x + 5\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the left side and group all terms containing x on one side.",
        "workingOut": "\\(7xy - 3y = 3x + 5 \\implies 7xy - 3x = 3y + 5\\)",
        "graphData": null
      },
      {
        "explanation": "Factor out x and solve.",
        "workingOut": "\\(x(7y - 3) = 3y + 5 \\implies x = \\frac{3y + 5}{7y - 3}\\)",
        "graphData": null
      },
      {
        "explanation": "Determine the restriction on y such that x is a real value.",
        "workingOut": "\\(7y - 3 \\neq 0 \\implies y \\neq \\frac{3}{7}\\)",
        "graphData": null
      },
      {
        "explanation": "The range excludes \\( y = \\frac{3}{7} \\), so the answer is \\( y \\neq \\frac{3}{7} \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( y \\neq \\frac{3}{7} \\)",
      "\\( y \\neq \\frac{5}{7} \\)",
      "\\( y \\neq -\\frac{3}{7} \\)",
      "\\( y \\in \\mathbb{R}\\ (\\text{all real } y) \\)"
    ]
  },
  {
    "id": "y11a-3b-q18d",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the range of the rational function \\( f(x) = \\frac{4x + 6}{8x - 4} \\). (Format: 'y != 4/8')",
    "a": "0",
    "solutionSteps": [
      {
        "explanation": "General rule: for a rational function of the form \\( \\frac{ax+b}{cx+d} \\), the range excludes the horizontal asymptote \\( y = \\frac{a}{c} \\) (the ratio of the \\(x\\)-coefficients).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Set y equal to f(x) and rearrange the equation to express x in terms of y.",
        "workingOut": "\\(y = \\frac{4x + 6}{8x - 4} \\implies y(8x - 4) = 4x + 6\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the left side and group all terms containing x on one side.",
        "workingOut": "\\(8xy - 4y = 4x + 6 \\implies 8xy - 4x = 4y + 6\\)",
        "graphData": null
      },
      {
        "explanation": "Factor out x and solve.",
        "workingOut": "\\(x(8y - 4) = 4y + 6 \\implies x = \\frac{4y + 6}{8y - 4}\\)",
        "graphData": null
      },
      {
        "explanation": "Determine the restriction on y such that x is a real value.",
        "workingOut": "\\(8y - 4 \\neq 0 \\implies y \\neq \\frac{4}{8}\\)",
        "graphData": null
      },
      {
        "explanation": "The range excludes \\( y = \\frac{4}{8} \\), so the answer is \\( y \\neq \\frac{4}{8} \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( y \\neq \\frac{4}{8} \\)",
      "\\( y \\neq \\frac{6}{8} \\)",
      "\\( y \\neq -\\frac{4}{8} \\)",
      "\\( y \\in \\mathbb{R}\\ (\\text{all real } y) \\)"
    ]
  },
  {
    "id": "y11a-3b-q18e",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the range of the rational function \\( f(x) = \\frac{5x + 7}{9x - 5} \\). (Format: 'y != 5/9')",
    "a": "1",
    "solutionSteps": [
      {
        "explanation": "General rule: for a rational function of the form \\( \\frac{ax+b}{cx+d} \\), the range excludes the horizontal asymptote \\( y = \\frac{a}{c} \\) (the ratio of the \\(x\\)-coefficients).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Set y equal to f(x) and rearrange the equation to express x in terms of y.",
        "workingOut": "\\(y = \\frac{5x + 7}{9x - 5} \\implies y(9x - 5) = 5x + 7\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the left side and group all terms containing x on one side.",
        "workingOut": "\\(9xy - 5y = 5x + 7 \\implies 9xy - 5x = 5y + 7\\)",
        "graphData": null
      },
      {
        "explanation": "Factor out x and solve.",
        "workingOut": "\\(x(9y - 5) = 5y + 7 \\implies x = \\frac{5y + 7}{9y - 5}\\)",
        "graphData": null
      },
      {
        "explanation": "Determine the restriction on y such that x is a real value.",
        "workingOut": "\\(9y - 5 \\neq 0 \\implies y \\neq \\frac{5}{9}\\)",
        "graphData": null
      },
      {
        "explanation": "The range excludes \\( y = \\frac{5}{9} \\), so the answer is \\( y \\neq \\frac{5}{9} \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( y \\neq -\\frac{5}{9} \\)",
      "\\( y \\neq \\frac{5}{9} \\)",
      "\\( y \\neq \\frac{7}{9} \\)",
      "\\( y \\in \\mathbb{R}\\ (\\text{all real } y) \\)"
    ]
  },
  {
    "id": "y11a-3b-q18f",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the range of the rational function \\( f(x) = \\frac{6x + 8}{10x - 6} \\). (Format: 'y != 6/10')",
    "a": "0",
    "solutionSteps": [
      {
        "explanation": "General rule: for a rational function of the form \\( \\frac{ax+b}{cx+d} \\), the range excludes the horizontal asymptote \\( y = \\frac{a}{c} \\) (the ratio of the \\(x\\)-coefficients).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Set y equal to f(x) and rearrange the equation to express x in terms of y.",
        "workingOut": "\\(y = \\frac{6x + 8}{10x - 6} \\implies y(10x - 6) = 6x + 8\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the left side and group all terms containing x on one side.",
        "workingOut": "\\(10xy - 6y = 6x + 8 \\implies 10xy - 6x = 6y + 8\\)",
        "graphData": null
      },
      {
        "explanation": "Factor out x and solve.",
        "workingOut": "\\(x(10y - 6) = 6y + 8 \\implies x = \\frac{6y + 8}{10y - 6}\\)",
        "graphData": null
      },
      {
        "explanation": "Determine the restriction on y such that x is a real value.",
        "workingOut": "\\(10y - 6 \\neq 0 \\implies y \\neq \\frac{6}{10}\\)",
        "graphData": null
      },
      {
        "explanation": "The range excludes \\( y = \\frac{6}{10} \\), so the answer is \\( y \\neq \\frac{6}{10} \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( y \\neq \\frac{6}{10} \\)",
      "\\( y \\neq -\\frac{6}{10} \\)",
      "\\( y \\neq \\frac{8}{10} \\)",
      "\\( y \\in \\mathbb{R}\\ (\\text{all real } y) \\)"
    ]
  },
  {
    "id": "y11a-3b-q18g",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the range of the rational function \\( f(x) = \\frac{7x + 9}{11x - 7} \\). (Format: 'y != 7/11')",
    "a": "0",
    "solutionSteps": [
      {
        "explanation": "General rule: for a rational function of the form \\( \\frac{ax+b}{cx+d} \\), the range excludes the horizontal asymptote \\( y = \\frac{a}{c} \\) (the ratio of the \\(x\\)-coefficients).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Set y equal to f(x) and rearrange the equation to express x in terms of y.",
        "workingOut": "\\(y = \\frac{7x + 9}{11x - 7} \\implies y(11x - 7) = 7x + 9\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the left side and group all terms containing x on one side.",
        "workingOut": "\\(11xy - 7y = 7x + 9 \\implies 11xy - 7x = 7y + 9\\)",
        "graphData": null
      },
      {
        "explanation": "Factor out x and solve.",
        "workingOut": "\\(x(11y - 7) = 7y + 9 \\implies x = \\frac{7y + 9}{11y - 7}\\)",
        "graphData": null
      },
      {
        "explanation": "Determine the restriction on y such that x is a real value.",
        "workingOut": "\\(11y - 7 \\neq 0 \\implies y \\neq \\frac{7}{11}\\)",
        "graphData": null
      },
      {
        "explanation": "The range excludes \\( y = \\frac{7}{11} \\), so the answer is \\( y \\neq \\frac{7}{11} \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( y \\neq \\frac{7}{11} \\)",
      "\\( y \\neq -\\frac{7}{11} \\)",
      "\\( y \\neq \\frac{9}{11} \\)",
      "\\( y \\in \\mathbb{R}\\ (\\text{all real } y) \\)"
    ]
  },
  {
    "id": "y11a-3b-q18h",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the range of the rational function \\( f(x) = \\frac{8x + 10}{12x - 8} \\). (Format: 'y != 8/12')",
    "a": "1",
    "solutionSteps": [
      {
        "explanation": "General rule: for a rational function of the form \\( \\frac{ax+b}{cx+d} \\), the range excludes the horizontal asymptote \\( y = \\frac{a}{c} \\) (the ratio of the \\(x\\)-coefficients).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Set y equal to f(x) and rearrange the equation to express x in terms of y.",
        "workingOut": "\\(y = \\frac{8x + 10}{12x - 8} \\implies y(12x - 8) = 8x + 10\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the left side and group all terms containing x on one side.",
        "workingOut": "\\(12xy - 8y = 8x + 10 \\implies 12xy - 8x = 8y + 10\\)",
        "graphData": null
      },
      {
        "explanation": "Factor out x and solve.",
        "workingOut": "\\(x(12y - 8) = 8y + 10 \\implies x = \\frac{8y + 10}{12y - 8}\\)",
        "graphData": null
      },
      {
        "explanation": "Determine the restriction on y such that x is a real value.",
        "workingOut": "\\(12y - 8 \\neq 0 \\implies y \\neq \\frac{8}{12}\\)",
        "graphData": null
      },
      {
        "explanation": "The range excludes \\( y = \\frac{8}{12} \\), so the answer is \\( y \\neq \\frac{8}{12} \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( y \\neq -\\frac{8}{12} \\)",
      "\\( y \\neq \\frac{8}{12} \\)",
      "\\( y \\neq \\frac{10}{12} \\)",
      "\\( y \\in \\mathbb{R}\\ (\\text{all real } y) \\)"
    ]
  },
  {
    "id": "y11a-3b-q18i",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the range of the rational function \\( f(x) = \\frac{9x + 11}{13x - 9} \\). (Format: 'y != 9/13')",
    "a": "2",
    "solutionSteps": [
      {
        "explanation": "General rule: for a rational function of the form \\( \\frac{ax+b}{cx+d} \\), the range excludes the horizontal asymptote \\( y = \\frac{a}{c} \\) (the ratio of the \\(x\\)-coefficients).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Set y equal to f(x) and rearrange the equation to express x in terms of y.",
        "workingOut": "\\(y = \\frac{9x + 11}{13x - 9} \\implies y(13x - 9) = 9x + 11\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the left side and group all terms containing x on one side.",
        "workingOut": "\\(13xy - 9y = 9x + 11 \\implies 13xy - 9x = 9y + 11\\)",
        "graphData": null
      },
      {
        "explanation": "Factor out x and solve.",
        "workingOut": "\\(x(13y - 9) = 9y + 11 \\implies x = \\frac{9y + 11}{13y - 9}\\)",
        "graphData": null
      },
      {
        "explanation": "Determine the restriction on y such that x is a real value.",
        "workingOut": "\\(13y - 9 \\neq 0 \\implies y \\neq \\frac{9}{13}\\)",
        "graphData": null
      },
      {
        "explanation": "The range excludes \\( y = \\frac{9}{13} \\), so the answer is \\( y \\neq \\frac{9}{13} \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( y \\neq \\frac{11}{13} \\)",
      "\\( y \\neq -\\frac{9}{13} \\)",
      "\\( y \\neq \\frac{9}{13} \\)",
      "\\( y \\in \\mathbb{R}\\ (\\text{all real } y) \\)"
    ]
  },
  {
    "id": "y11a-3b-q18j",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the range of the rational function \\( f(x) = \\frac{10x + 12}{14x - 10} \\). (Format: 'y != 10/14')",
    "a": "2",
    "solutionSteps": [
      {
        "explanation": "General rule: for a rational function of the form \\( \\frac{ax+b}{cx+d} \\), the range excludes the horizontal asymptote \\( y = \\frac{a}{c} \\) (the ratio of the \\(x\\)-coefficients).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Set y equal to f(x) and rearrange the equation to express x in terms of y.",
        "workingOut": "\\(y = \\frac{10x + 12}{14x - 10} \\implies y(14x - 10) = 10x + 12\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the left side and group all terms containing x on one side.",
        "workingOut": "\\(14xy - 10y = 10x + 12 \\implies 14xy - 10x = 10y + 12\\)",
        "graphData": null
      },
      {
        "explanation": "Factor out x and solve.",
        "workingOut": "\\(x(14y - 10) = 10y + 12 \\implies x = \\frac{10y + 12}{14y - 10}\\)",
        "graphData": null
      },
      {
        "explanation": "Determine the restriction on y such that x is a real value.",
        "workingOut": "\\(14y - 10 \\neq 0 \\implies y \\neq \\frac{10}{14}\\)",
        "graphData": null
      },
      {
        "explanation": "The range excludes \\( y = \\frac{10}{14} \\), so the answer is \\( y \\neq \\frac{10}{14} \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( y \\neq \\frac{12}{14} \\)",
      "\\( y \\neq -\\frac{10}{14} \\)",
      "\\( y \\neq \\frac{10}{14} \\)",
      "\\( y \\in \\mathbb{R}\\ (\\text{all real } y) \\)"
    ]
  },
  {
    "id": "y11a-3b-q19a",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "A piecewise function is defined by:\n\n\\( f(x) = \\begin{cases} 2x + k, & x < 2 \\\\ kx - 3, & x \\ge 2 \\end{cases} \\)\n\nFind the value of the constant \\( k \\) that makes the function continuous at \\( x = 2 \\).",
    "a": "2",
    "solutionSteps": [
      {
        "explanation": "General rule: a piecewise function is continuous at the boundary point when the two pieces give the same value there — set the two expressions equal at that \\(x\\)-value and solve.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "For the function to be continuous at the boundary, the left-hand limit and right-hand limit must be equal.",
        "workingOut": "\\(\\lim_{x \\to 2^-} f(x) = \\lim_{x \\to 2^+} f(x)\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the left-hand limit by substituting the boundary value into the first expression.",
        "workingOut": "\\(\\lim_{x \\to 2^-} (2x + k) = 2(2) + k = 4 + k\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the right-hand limit by substituting the boundary value into the second expression.",
        "workingOut": "\\(\\lim_{x \\to 2^+} (kx - 3) = k(2) - 3 = 2k - 3\\)",
        "graphData": null
      },
      {
        "explanation": "Equate the two limits and solve for k.",
        "workingOut": "\\(4 + k = 2k - 3 \\implies 7 = k \\implies k = 7\\)",
        "graphData": null
      },
      {
        "explanation": "Setting the two pieces equal at \\( x = 2 \\): \\( 2(2) + k = 2k - 3 \\), which solves to \\( k = 7 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( k = 8 \\)",
      "\\( k = 1 \\)",
      "\\( k = 7 \\)",
      "\\( k = 6 \\)"
    ]
  },
  {
    "id": "y11a-3b-q19b",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "A piecewise function is defined by:\n\n\\( f(x) = \\begin{cases} 3x + k, & x < 2 \\\\ kx - 6, & x \\ge 2 \\end{cases} \\)\n\nFind the value of the constant \\( k \\) that makes the function continuous at \\( x = 2 \\).",
    "a": "2",
    "solutionSteps": [
      {
        "explanation": "General rule: a piecewise function is continuous at the boundary point when the two pieces give the same value there — set the two expressions equal at that \\(x\\)-value and solve.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "For the function to be continuous at the boundary, the left-hand limit and right-hand limit must be equal.",
        "workingOut": "\\(\\lim_{x \\to 2^-} f(x) = \\lim_{x \\to 2^+} f(x)\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the left-hand limit by substituting the boundary value into the first expression.",
        "workingOut": "\\(\\lim_{x \\to 2^-} (3x + k) = 3(2) + k = 6 + k\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the right-hand limit by substituting the boundary value into the second expression.",
        "workingOut": "\\(\\lim_{x \\to 2^+} (kx - 6) = k(2) - 6 = 2k - 6\\)",
        "graphData": null
      },
      {
        "explanation": "Equate the two limits and solve for k.",
        "workingOut": "\\(6 + k = 2k - 6 \\implies 12 = k \\implies k = 12\\)",
        "graphData": null
      },
      {
        "explanation": "Setting the two pieces equal at \\( x = 2 \\): \\( 2(3) + k = 2k - 6 \\), which solves to \\( k = 12 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( k = 0 \\)",
      "\\( k = 13 \\)",
      "\\( k = 12 \\)",
      "\\( k = 11 \\)"
    ]
  },
  {
    "id": "y11a-3b-q19c",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "A piecewise function is defined by:\n\n\\( f(x) = \\begin{cases} 4x + k, & x < 2 \\\\ kx - 9, & x \\ge 2 \\end{cases} \\)\n\nFind the value of the constant \\( k \\) that makes the function continuous at \\( x = 2 \\).",
    "a": "2",
    "solutionSteps": [
      {
        "explanation": "General rule: a piecewise function is continuous at the boundary point when the two pieces give the same value there — set the two expressions equal at that \\(x\\)-value and solve.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "For the function to be continuous at the boundary, the left-hand limit and right-hand limit must be equal.",
        "workingOut": "\\(\\lim_{x \\to 2^-} f(x) = \\lim_{x \\to 2^+} f(x)\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the left-hand limit by substituting the boundary value into the first expression.",
        "workingOut": "\\(\\lim_{x \\to 2^-} (4x + k) = 4(2) + k = 8 + k\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the right-hand limit by substituting the boundary value into the second expression.",
        "workingOut": "\\(\\lim_{x \\to 2^+} (kx - 9) = k(2) - 9 = 2k - 9\\)",
        "graphData": null
      },
      {
        "explanation": "Equate the two limits and solve for k.",
        "workingOut": "\\(8 + k = 2k - 9 \\implies 17 = k \\implies k = 17\\)",
        "graphData": null
      },
      {
        "explanation": "Setting the two pieces equal at \\( x = 2 \\): \\( 2(4) + k = 2k - 9 \\), which solves to \\( k = 17 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( k = -1 \\)",
      "\\( k = 18 \\)",
      "\\( k = 17 \\)",
      "\\( k = 16 \\)"
    ]
  },
  {
    "id": "y11a-3b-q19d",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "A piecewise function is defined by:\n\n\\( f(x) = \\begin{cases} 5x + k, & x < 2 \\\\ kx - 12, & x \\ge 2 \\end{cases} \\)\n\nFind the value of the constant \\( k \\) that makes the function continuous at \\( x = 2 \\).",
    "a": "0",
    "solutionSteps": [
      {
        "explanation": "General rule: a piecewise function is continuous at the boundary point when the two pieces give the same value there — set the two expressions equal at that \\(x\\)-value and solve.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "For the function to be continuous at the boundary, the left-hand limit and right-hand limit must be equal.",
        "workingOut": "\\(\\lim_{x \\to 2^-} f(x) = \\lim_{x \\to 2^+} f(x)\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the left-hand limit by substituting the boundary value into the first expression.",
        "workingOut": "\\(\\lim_{x \\to 2^-} (5x + k) = 5(2) + k = 10 + k\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the right-hand limit by substituting the boundary value into the second expression.",
        "workingOut": "\\(\\lim_{x \\to 2^+} (kx - 12) = k(2) - 12 = 2k - 12\\)",
        "graphData": null
      },
      {
        "explanation": "Equate the two limits and solve for k.",
        "workingOut": "\\(10 + k = 2k - 12 \\implies 22 = k \\implies k = 22\\)",
        "graphData": null
      },
      {
        "explanation": "Setting the two pieces equal at \\( x = 2 \\): \\( 2(5) + k = 2k - 12 \\), which solves to \\( k = 22 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( k = 22 \\)",
      "\\( k = 23 \\)",
      "\\( k = -2 \\)",
      "\\( k = 21 \\)"
    ]
  },
  {
    "id": "y11a-3b-q19e",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "A piecewise function is defined by:\n\n\\( f(x) = \\begin{cases} 6x + k, & x < 2 \\\\ kx - 15, & x \\ge 2 \\end{cases} \\)\n\nFind the value of the constant \\( k \\) that makes the function continuous at \\( x = 2 \\).",
    "a": "1",
    "solutionSteps": [
      {
        "explanation": "General rule: a piecewise function is continuous at the boundary point when the two pieces give the same value there — set the two expressions equal at that \\(x\\)-value and solve.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "For the function to be continuous at the boundary, the left-hand limit and right-hand limit must be equal.",
        "workingOut": "\\(\\lim_{x \\to 2^-} f(x) = \\lim_{x \\to 2^+} f(x)\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the left-hand limit by substituting the boundary value into the first expression.",
        "workingOut": "\\(\\lim_{x \\to 2^-} (6x + k) = 6(2) + k = 12 + k\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the right-hand limit by substituting the boundary value into the second expression.",
        "workingOut": "\\(\\lim_{x \\to 2^+} (kx - 15) = k(2) - 15 = 2k - 15\\)",
        "graphData": null
      },
      {
        "explanation": "Equate the two limits and solve for k.",
        "workingOut": "\\(12 + k = 2k - 15 \\implies 27 = k \\implies k = 27\\)",
        "graphData": null
      },
      {
        "explanation": "Setting the two pieces equal at \\( x = 2 \\): \\( 2(6) + k = 2k - 15 \\), which solves to \\( k = 27 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( k = 28 \\)",
      "\\( k = 27 \\)",
      "\\( k = -3 \\)",
      "\\( k = 26 \\)"
    ]
  },
  {
    "id": "y11a-3b-q19f",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "A piecewise function is defined by:\n\n\\( f(x) = \\begin{cases} 7x + k, & x < 2 \\\\ kx - 18, & x \\ge 2 \\end{cases} \\)\n\nFind the value of the constant \\( k \\) that makes the function continuous at \\( x = 2 \\).",
    "a": "1",
    "solutionSteps": [
      {
        "explanation": "General rule: a piecewise function is continuous at the boundary point when the two pieces give the same value there — set the two expressions equal at that \\(x\\)-value and solve.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "For the function to be continuous at the boundary, the left-hand limit and right-hand limit must be equal.",
        "workingOut": "\\(\\lim_{x \\to 2^-} f(x) = \\lim_{x \\to 2^+} f(x)\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the left-hand limit by substituting the boundary value into the first expression.",
        "workingOut": "\\(\\lim_{x \\to 2^-} (7x + k) = 7(2) + k = 14 + k\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the right-hand limit by substituting the boundary value into the second expression.",
        "workingOut": "\\(\\lim_{x \\to 2^+} (kx - 18) = k(2) - 18 = 2k - 18\\)",
        "graphData": null
      },
      {
        "explanation": "Equate the two limits and solve for k.",
        "workingOut": "\\(14 + k = 2k - 18 \\implies 32 = k \\implies k = 32\\)",
        "graphData": null
      },
      {
        "explanation": "Setting the two pieces equal at \\( x = 2 \\): \\( 2(7) + k = 2k - 18 \\), which solves to \\( k = 32 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( k = 33 \\)",
      "\\( k = 32 \\)",
      "\\( k = -4 \\)",
      "\\( k = 31 \\)"
    ]
  },
  {
    "id": "y11a-3b-q19g",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "A piecewise function is defined by:\n\n\\( f(x) = \\begin{cases} 8x + k, & x < 2 \\\\ kx - 21, & x \\ge 2 \\end{cases} \\)\n\nFind the value of the constant \\( k \\) that makes the function continuous at \\( x = 2 \\).",
    "a": "0",
    "solutionSteps": [
      {
        "explanation": "General rule: a piecewise function is continuous at the boundary point when the two pieces give the same value there — set the two expressions equal at that \\(x\\)-value and solve.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "For the function to be continuous at the boundary, the left-hand limit and right-hand limit must be equal.",
        "workingOut": "\\(\\lim_{x \\to 2^-} f(x) = \\lim_{x \\to 2^+} f(x)\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the left-hand limit by substituting the boundary value into the first expression.",
        "workingOut": "\\(\\lim_{x \\to 2^-} (8x + k) = 8(2) + k = 16 + k\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the right-hand limit by substituting the boundary value into the second expression.",
        "workingOut": "\\(\\lim_{x \\to 2^+} (kx - 21) = k(2) - 21 = 2k - 21\\)",
        "graphData": null
      },
      {
        "explanation": "Equate the two limits and solve for k.",
        "workingOut": "\\(16 + k = 2k - 21 \\implies 37 = k \\implies k = 37\\)",
        "graphData": null
      },
      {
        "explanation": "Setting the two pieces equal at \\( x = 2 \\): \\( 2(8) + k = 2k - 21 \\), which solves to \\( k = 37 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( k = 37 \\)",
      "\\( k = -5 \\)",
      "\\( k = 38 \\)",
      "\\( k = 36 \\)"
    ]
  },
  {
    "id": "y11a-3b-q19h",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "A piecewise function is defined by:\n\n\\( f(x) = \\begin{cases} 9x + k, & x < 2 \\\\ kx - 24, & x \\ge 2 \\end{cases} \\)\n\nFind the value of the constant \\( k \\) that makes the function continuous at \\( x = 2 \\).",
    "a": "0",
    "solutionSteps": [
      {
        "explanation": "General rule: a piecewise function is continuous at the boundary point when the two pieces give the same value there — set the two expressions equal at that \\(x\\)-value and solve.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "For the function to be continuous at the boundary, the left-hand limit and right-hand limit must be equal.",
        "workingOut": "\\(\\lim_{x \\to 2^-} f(x) = \\lim_{x \\to 2^+} f(x)\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the left-hand limit by substituting the boundary value into the first expression.",
        "workingOut": "\\(\\lim_{x \\to 2^-} (9x + k) = 9(2) + k = 18 + k\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the right-hand limit by substituting the boundary value into the second expression.",
        "workingOut": "\\(\\lim_{x \\to 2^+} (kx - 24) = k(2) - 24 = 2k - 24\\)",
        "graphData": null
      },
      {
        "explanation": "Equate the two limits and solve for k.",
        "workingOut": "\\(18 + k = 2k - 24 \\implies 42 = k \\implies k = 42\\)",
        "graphData": null
      },
      {
        "explanation": "Setting the two pieces equal at \\( x = 2 \\): \\( 2(9) + k = 2k - 24 \\), which solves to \\( k = 42 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( k = 42 \\)",
      "\\( k = -6 \\)",
      "\\( k = 43 \\)",
      "\\( k = 41 \\)"
    ]
  },
  {
    "id": "y11a-3b-q19i",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "A piecewise function is defined by:\n\n\\( f(x) = \\begin{cases} 10x + k, & x < 2 \\\\ kx - 27, & x \\ge 2 \\end{cases} \\)\n\nFind the value of the constant \\( k \\) that makes the function continuous at \\( x = 2 \\).",
    "a": "1",
    "solutionSteps": [
      {
        "explanation": "General rule: a piecewise function is continuous at the boundary point when the two pieces give the same value there — set the two expressions equal at that \\(x\\)-value and solve.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "For the function to be continuous at the boundary, the left-hand limit and right-hand limit must be equal.",
        "workingOut": "\\(\\lim_{x \\to 2^-} f(x) = \\lim_{x \\to 2^+} f(x)\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the left-hand limit by substituting the boundary value into the first expression.",
        "workingOut": "\\(\\lim_{x \\to 2^-} (10x + k) = 10(2) + k = 20 + k\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the right-hand limit by substituting the boundary value into the second expression.",
        "workingOut": "\\(\\lim_{x \\to 2^+} (kx - 27) = k(2) - 27 = 2k - 27\\)",
        "graphData": null
      },
      {
        "explanation": "Equate the two limits and solve for k.",
        "workingOut": "\\(20 + k = 2k - 27 \\implies 47 = k \\implies k = 47\\)",
        "graphData": null
      },
      {
        "explanation": "Setting the two pieces equal at \\( x = 2 \\): \\( 2(10) + k = 2k - 27 \\), which solves to \\( k = 47 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( k = -7 \\)",
      "\\( k = 47 \\)",
      "\\( k = 48 \\)",
      "\\( k = 46 \\)"
    ]
  },
  {
    "id": "y11a-3b-q19j",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "A piecewise function is defined by:\n\n\\( f(x) = \\begin{cases} 11x + k, & x < 2 \\\\ kx - 30, & x \\ge 2 \\end{cases} \\)\n\nFind the value of the constant \\( k \\) that makes the function continuous at \\( x = 2 \\).",
    "a": "0",
    "solutionSteps": [
      {
        "explanation": "General rule: a piecewise function is continuous at the boundary point when the two pieces give the same value there — set the two expressions equal at that \\(x\\)-value and solve.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "For the function to be continuous at the boundary, the left-hand limit and right-hand limit must be equal.",
        "workingOut": "\\(\\lim_{x \\to 2^-} f(x) = \\lim_{x \\to 2^+} f(x)\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the left-hand limit by substituting the boundary value into the first expression.",
        "workingOut": "\\(\\lim_{x \\to 2^-} (11x + k) = 11(2) + k = 22 + k\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the right-hand limit by substituting the boundary value into the second expression.",
        "workingOut": "\\(\\lim_{x \\to 2^+} (kx - 30) = k(2) - 30 = 2k - 30\\)",
        "graphData": null
      },
      {
        "explanation": "Equate the two limits and solve for k.",
        "workingOut": "\\(22 + k = 2k - 30 \\implies 52 = k \\implies k = 52\\)",
        "graphData": null
      },
      {
        "explanation": "Setting the two pieces equal at \\( x = 2 \\): \\( 2(11) + k = 2k - 30 \\), which solves to \\( k = 52 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( k = 52 \\)",
      "\\( k = -8 \\)",
      "\\( k = 53 \\)",
      "\\( k = 51 \\)"
    ]
  },
  {
    "id": "y11a-3b-q20a",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Consider the quadratic function \\( f(x) = 1(x - 3)^2 + 4 \\) defined on a restricted domain \\( x \\ge d \\). Find the smallest value of \\( d \\) such that \\( f(x) \\) is a one-to-one function and thus has a well-defined inverse.",
    "a": "3",
    "solutionSteps": [
      {
        "explanation": "General rule: a quadratic \\( f(x) = a(x-h)^2+k \\) is one-to-one exactly when its domain is restricted to one side of the vertex \\( x = h \\); the smallest valid \\( d \\) for \\( x \\geq d \\) is the vertex itself.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Identify the vertex of the parabola from the vertex form equation.",
        "workingOut": "\\(\\text{Vertex: } (3, 4)\\)",
        "graphData": null
      },
      {
        "explanation": "Determine the axis of symmetry of the parabola.",
        "workingOut": "\\(x = 3\\)",
        "graphData": null
      },
      {
        "explanation": "A quadratic function is one-to-one on either side of its axis of symmetry.",
        "workingOut": "\\(\\text{Domain must be restricted to } x \\ge 3 \\text{ or } x \\le 3\\)",
        "graphData": null
      },
      {
        "explanation": "Find the smallest value of d for the restricted domain x >= d.",
        "workingOut": "\\(d \\ge 3 \\implies \\text{smallest } d = 3\\)",
        "graphData": null
      },
      {
        "explanation": "The vertex of \\( f(x) = 1(x-3)^2 + 4 \\) is at \\( x = 3 \\), so the smallest valid \\( d \\) is \\( d = 3 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( d = 0 \\)",
      "\\( d = -3 \\)",
      "\\( d = 4 \\)",
      "\\( d = 3 \\)"
    ]
  },
  {
    "id": "y11a-3b-q20b",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Consider the quadratic function \\( f(x) = 2(x - 6)^2 + 8 \\) defined on a restricted domain \\( x \\ge d \\). Find the smallest value of \\( d \\) such that \\( f(x) \\) is a one-to-one function and thus has a well-defined inverse.",
    "a": "3",
    "solutionSteps": [
      {
        "explanation": "General rule: a quadratic \\( f(x) = a(x-h)^2+k \\) is one-to-one exactly when its domain is restricted to one side of the vertex \\( x = h \\); the smallest valid \\( d \\) for \\( x \\geq d \\) is the vertex itself.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Identify the vertex of the parabola from the vertex form equation.",
        "workingOut": "\\(\\text{Vertex: } (6, 8)\\)",
        "graphData": null
      },
      {
        "explanation": "Determine the axis of symmetry of the parabola.",
        "workingOut": "\\(x = 6\\)",
        "graphData": null
      },
      {
        "explanation": "A quadratic function is one-to-one on either side of its axis of symmetry.",
        "workingOut": "\\(\\text{Domain must be restricted to } x \\ge 6 \\text{ or } x \\le 6\\)",
        "graphData": null
      },
      {
        "explanation": "Find the smallest value of d for the restricted domain x >= d.",
        "workingOut": "\\(d \\ge 6 \\implies \\text{smallest } d = 6\\)",
        "graphData": null
      },
      {
        "explanation": "The vertex of \\( f(x) = 2(x-6)^2 + 8 \\) is at \\( x = 6 \\), so the smallest valid \\( d \\) is \\( d = 6 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( d = -6 \\)",
      "\\( d = 8 \\)",
      "\\( d = 0 \\)",
      "\\( d = 6 \\)"
    ]
  },
  {
    "id": "y11a-3b-q20c",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Consider the quadratic function \\( f(x) = 3(x - 9)^2 + 12 \\) defined on a restricted domain \\( x \\ge d \\). Find the smallest value of \\( d \\) such that \\( f(x) \\) is a one-to-one function and thus has a well-defined inverse.",
    "a": "3",
    "solutionSteps": [
      {
        "explanation": "General rule: a quadratic \\( f(x) = a(x-h)^2+k \\) is one-to-one exactly when its domain is restricted to one side of the vertex \\( x = h \\); the smallest valid \\( d \\) for \\( x \\geq d \\) is the vertex itself.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Identify the vertex of the parabola from the vertex form equation.",
        "workingOut": "\\(\\text{Vertex: } (9, 12)\\)",
        "graphData": null
      },
      {
        "explanation": "Determine the axis of symmetry of the parabola.",
        "workingOut": "\\(x = 9\\)",
        "graphData": null
      },
      {
        "explanation": "A quadratic function is one-to-one on either side of its axis of symmetry.",
        "workingOut": "\\(\\text{Domain must be restricted to } x \\ge 9 \\text{ or } x \\le 9\\)",
        "graphData": null
      },
      {
        "explanation": "Find the smallest value of d for the restricted domain x >= d.",
        "workingOut": "\\(d \\ge 9 \\implies \\text{smallest } d = 9\\)",
        "graphData": null
      },
      {
        "explanation": "The vertex of \\( f(x) = 3(x-9)^2 + 12 \\) is at \\( x = 9 \\), so the smallest valid \\( d \\) is \\( d = 9 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( d = -9 \\)",
      "\\( d = 12 \\)",
      "\\( d = 0 \\)",
      "\\( d = 9 \\)"
    ]
  },
  {
    "id": "y11a-3b-q20d",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Consider the quadratic function \\( f(x) = 4(x - 12)^2 + 16 \\) defined on a restricted domain \\( x \\ge d \\). Find the smallest value of \\( d \\) such that \\( f(x) \\) is a one-to-one function and thus has a well-defined inverse.",
    "a": "3",
    "solutionSteps": [
      {
        "explanation": "General rule: a quadratic \\( f(x) = a(x-h)^2+k \\) is one-to-one exactly when its domain is restricted to one side of the vertex \\( x = h \\); the smallest valid \\( d \\) for \\( x \\geq d \\) is the vertex itself.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Identify the vertex of the parabola from the vertex form equation.",
        "workingOut": "\\(\\text{Vertex: } (12, 16)\\)",
        "graphData": null
      },
      {
        "explanation": "Determine the axis of symmetry of the parabola.",
        "workingOut": "\\(x = 12\\)",
        "graphData": null
      },
      {
        "explanation": "A quadratic function is one-to-one on either side of its axis of symmetry.",
        "workingOut": "\\(\\text{Domain must be restricted to } x \\ge 12 \\text{ or } x \\le 12\\)",
        "graphData": null
      },
      {
        "explanation": "Find the smallest value of d for the restricted domain x >= d.",
        "workingOut": "\\(d \\ge 12 \\implies \\text{smallest } d = 12\\)",
        "graphData": null
      },
      {
        "explanation": "The vertex of \\( f(x) = 4(x-12)^2 + 16 \\) is at \\( x = 12 \\), so the smallest valid \\( d \\) is \\( d = 12 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( d = 16 \\)",
      "\\( d = -12 \\)",
      "\\( d = 0 \\)",
      "\\( d = 12 \\)"
    ]
  },
  {
    "id": "y11a-3b-q20e",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Consider the quadratic function \\( f(x) = 5(x - 15)^2 + 20 \\) defined on a restricted domain \\( x \\ge d \\). Find the smallest value of \\( d \\) such that \\( f(x) \\) is a one-to-one function and thus has a well-defined inverse.",
    "a": "3",
    "solutionSteps": [
      {
        "explanation": "General rule: a quadratic \\( f(x) = a(x-h)^2+k \\) is one-to-one exactly when its domain is restricted to one side of the vertex \\( x = h \\); the smallest valid \\( d \\) for \\( x \\geq d \\) is the vertex itself.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Identify the vertex of the parabola from the vertex form equation.",
        "workingOut": "\\(\\text{Vertex: } (15, 20)\\)",
        "graphData": null
      },
      {
        "explanation": "Determine the axis of symmetry of the parabola.",
        "workingOut": "\\(x = 15\\)",
        "graphData": null
      },
      {
        "explanation": "A quadratic function is one-to-one on either side of its axis of symmetry.",
        "workingOut": "\\(\\text{Domain must be restricted to } x \\ge 15 \\text{ or } x \\le 15\\)",
        "graphData": null
      },
      {
        "explanation": "Find the smallest value of d for the restricted domain x >= d.",
        "workingOut": "\\(d \\ge 15 \\implies \\text{smallest } d = 15\\)",
        "graphData": null
      },
      {
        "explanation": "The vertex of \\( f(x) = 5(x-15)^2 + 20 \\) is at \\( x = 15 \\), so the smallest valid \\( d \\) is \\( d = 15 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( d = 20 \\)",
      "\\( d = 0 \\)",
      "\\( d = -15 \\)",
      "\\( d = 15 \\)"
    ]
  },
  {
    "id": "y11a-3b-q20f",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Consider the quadratic function \\( f(x) = 6(x - 18)^2 + 24 \\) defined on a restricted domain \\( x \\ge d \\). Find the smallest value of \\( d \\) such that \\( f(x) \\) is a one-to-one function and thus has a well-defined inverse.",
    "a": "3",
    "solutionSteps": [
      {
        "explanation": "General rule: a quadratic \\( f(x) = a(x-h)^2+k \\) is one-to-one exactly when its domain is restricted to one side of the vertex \\( x = h \\); the smallest valid \\( d \\) for \\( x \\geq d \\) is the vertex itself.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Identify the vertex of the parabola from the vertex form equation.",
        "workingOut": "\\(\\text{Vertex: } (18, 24)\\)",
        "graphData": null
      },
      {
        "explanation": "Determine the axis of symmetry of the parabola.",
        "workingOut": "\\(x = 18\\)",
        "graphData": null
      },
      {
        "explanation": "A quadratic function is one-to-one on either side of its axis of symmetry.",
        "workingOut": "\\(\\text{Domain must be restricted to } x \\ge 18 \\text{ or } x \\le 18\\)",
        "graphData": null
      },
      {
        "explanation": "Find the smallest value of d for the restricted domain x >= d.",
        "workingOut": "\\(d \\ge 18 \\implies \\text{smallest } d = 18\\)",
        "graphData": null
      },
      {
        "explanation": "The vertex of \\( f(x) = 6(x-18)^2 + 24 \\) is at \\( x = 18 \\), so the smallest valid \\( d \\) is \\( d = 18 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( d = 24 \\)",
      "\\( d = 0 \\)",
      "\\( d = -18 \\)",
      "\\( d = 18 \\)"
    ]
  },
  {
    "id": "y11a-3b-q20g",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Consider the quadratic function \\( f(x) = 7(x - 21)^2 + 28 \\) defined on a restricted domain \\( x \\ge d \\). Find the smallest value of \\( d \\) such that \\( f(x) \\) is a one-to-one function and thus has a well-defined inverse.",
    "a": "3",
    "solutionSteps": [
      {
        "explanation": "General rule: a quadratic \\( f(x) = a(x-h)^2+k \\) is one-to-one exactly when its domain is restricted to one side of the vertex \\( x = h \\); the smallest valid \\( d \\) for \\( x \\geq d \\) is the vertex itself.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Identify the vertex of the parabola from the vertex form equation.",
        "workingOut": "\\(\\text{Vertex: } (21, 28)\\)",
        "graphData": null
      },
      {
        "explanation": "Determine the axis of symmetry of the parabola.",
        "workingOut": "\\(x = 21\\)",
        "graphData": null
      },
      {
        "explanation": "A quadratic function is one-to-one on either side of its axis of symmetry.",
        "workingOut": "\\(\\text{Domain must be restricted to } x \\ge 21 \\text{ or } x \\le 21\\)",
        "graphData": null
      },
      {
        "explanation": "Find the smallest value of d for the restricted domain x >= d.",
        "workingOut": "\\(d \\ge 21 \\implies \\text{smallest } d = 21\\)",
        "graphData": null
      },
      {
        "explanation": "The vertex of \\( f(x) = 7(x-21)^2 + 28 \\) is at \\( x = 21 \\), so the smallest valid \\( d \\) is \\( d = 21 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( d = 0 \\)",
      "\\( d = 28 \\)",
      "\\( d = -21 \\)",
      "\\( d = 21 \\)"
    ]
  },
  {
    "id": "y11a-3b-q20h",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Consider the quadratic function \\( f(x) = 8(x - 24)^2 + 32 \\) defined on a restricted domain \\( x \\ge d \\). Find the smallest value of \\( d \\) such that \\( f(x) \\) is a one-to-one function and thus has a well-defined inverse.",
    "a": "3",
    "solutionSteps": [
      {
        "explanation": "General rule: a quadratic \\( f(x) = a(x-h)^2+k \\) is one-to-one exactly when its domain is restricted to one side of the vertex \\( x = h \\); the smallest valid \\( d \\) for \\( x \\geq d \\) is the vertex itself.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Identify the vertex of the parabola from the vertex form equation.",
        "workingOut": "\\(\\text{Vertex: } (24, 32)\\)",
        "graphData": null
      },
      {
        "explanation": "Determine the axis of symmetry of the parabola.",
        "workingOut": "\\(x = 24\\)",
        "graphData": null
      },
      {
        "explanation": "A quadratic function is one-to-one on either side of its axis of symmetry.",
        "workingOut": "\\(\\text{Domain must be restricted to } x \\ge 24 \\text{ or } x \\le 24\\)",
        "graphData": null
      },
      {
        "explanation": "Find the smallest value of d for the restricted domain x >= d.",
        "workingOut": "\\(d \\ge 24 \\implies \\text{smallest } d = 24\\)",
        "graphData": null
      },
      {
        "explanation": "The vertex of \\( f(x) = 8(x-24)^2 + 32 \\) is at \\( x = 24 \\), so the smallest valid \\( d \\) is \\( d = 24 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( d = 32 \\)",
      "\\( d = 0 \\)",
      "\\( d = -24 \\)",
      "\\( d = 24 \\)"
    ]
  },
  {
    "id": "y11a-3b-q20i",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Consider the quadratic function \\( f(x) = 9(x - 27)^2 + 36 \\) defined on a restricted domain \\( x \\ge d \\). Find the smallest value of \\( d \\) such that \\( f(x) \\) is a one-to-one function and thus has a well-defined inverse.",
    "a": "3",
    "solutionSteps": [
      {
        "explanation": "General rule: a quadratic \\( f(x) = a(x-h)^2+k \\) is one-to-one exactly when its domain is restricted to one side of the vertex \\( x = h \\); the smallest valid \\( d \\) for \\( x \\geq d \\) is the vertex itself.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Identify the vertex of the parabola from the vertex form equation.",
        "workingOut": "\\(\\text{Vertex: } (27, 36)\\)",
        "graphData": null
      },
      {
        "explanation": "Determine the axis of symmetry of the parabola.",
        "workingOut": "\\(x = 27\\)",
        "graphData": null
      },
      {
        "explanation": "A quadratic function is one-to-one on either side of its axis of symmetry.",
        "workingOut": "\\(\\text{Domain must be restricted to } x \\ge 27 \\text{ or } x \\le 27\\)",
        "graphData": null
      },
      {
        "explanation": "Find the smallest value of d for the restricted domain x >= d.",
        "workingOut": "\\(d \\ge 27 \\implies \\text{smallest } d = 27\\)",
        "graphData": null
      },
      {
        "explanation": "The vertex of \\( f(x) = 9(x-27)^2 + 36 \\) is at \\( x = 27 \\), so the smallest valid \\( d \\) is \\( d = 27 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( d = -27 \\)",
      "\\( d = 0 \\)",
      "\\( d = 36 \\)",
      "\\( d = 27 \\)"
    ]
  },
  {
    "id": "y11a-3b-q20j",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Consider the quadratic function \\( f(x) = 10(x - 30)^2 + 40 \\) defined on a restricted domain \\( x \\ge d \\). Find the smallest value of \\( d \\) such that \\( f(x) \\) is a one-to-one function and thus has a well-defined inverse.",
    "a": "3",
    "solutionSteps": [
      {
        "explanation": "General rule: a quadratic \\( f(x) = a(x-h)^2+k \\) is one-to-one exactly when its domain is restricted to one side of the vertex \\( x = h \\); the smallest valid \\( d \\) for \\( x \\geq d \\) is the vertex itself.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Identify the vertex of the parabola from the vertex form equation.",
        "workingOut": "\\(\\text{Vertex: } (30, 40)\\)",
        "graphData": null
      },
      {
        "explanation": "Determine the axis of symmetry of the parabola.",
        "workingOut": "\\(x = 30\\)",
        "graphData": null
      },
      {
        "explanation": "A quadratic function is one-to-one on either side of its axis of symmetry.",
        "workingOut": "\\(\\text{Domain must be restricted to } x \\ge 30 \\text{ or } x \\le 30\\)",
        "graphData": null
      },
      {
        "explanation": "Find the smallest value of d for the restricted domain x >= d.",
        "workingOut": "\\(d \\ge 30 \\implies \\text{smallest } d = 30\\)",
        "graphData": null
      },
      {
        "explanation": "The vertex of \\( f(x) = 10(x-30)^2 + 40 \\) is at \\( x = 30 \\), so the smallest valid \\( d \\) is \\( d = 30 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( d = 0 \\)",
      "\\( d = -30 \\)",
      "\\( d = 40 \\)",
      "\\( d = 30 \\)"
    ]
  },
  {
    "id": "y11a-3b-q21a",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the inverse function \\( f^{-1}(x) \\) of \\( f(x) = \\sqrt{x - 1} + 2 \\) and state its domain. (Format: 'f^-1(x) = (x - 2)^2 + 1, x >= 2')",
    "a": "3",
    "solutionSteps": [
      {
        "explanation": "General method: swap \\( x \\) and \\( y \\) in \\( y = \\sqrt{x-1}+2 \\), then solve for \\( y \\); restrict the domain of the inverse to the range of the original function.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Set y equal to f(x) and state the range, which becomes the domain of the inverse function.",
        "workingOut": "\\(y = \\sqrt{x - 1} + 2 \\implies y \\ge 2 \\implies \\text{Domain of } f^{-1} \\text{ is } x \\ge 2\\)",
        "graphData": null
      },
      {
        "explanation": "Swap the variables x and y.",
        "workingOut": "\\(x = \\sqrt{y - 1} + 2\\)",
        "graphData": null
      },
      {
        "explanation": "Isolate the radical term and square both sides.",
        "workingOut": "\\(x - 2 = \\sqrt{y - 1} \\implies (x - 2)^2 = y - 1\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for y to obtain the inverse function formula.",
        "workingOut": "\\(f^{-1}(x) = (x - 2)^2 + 1 \\quad \\text{for } x \\ge 2\\)",
        "graphData": null
      },
      {
        "explanation": "Solving \\( x = \\sqrt{y-1}+2 \\) for \\( y \\) gives \\( f^{-1}(x) = (x-2)^2+1,\\ \\ x \\geq 2 \\) (since the range of \\( f \\) is \\( y \\geq 2 \\)).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( f^{-1}(x) = (x-2)^2+1,\\ \\ x \\in \\mathbb{R} \\)",
      "\\( f^{-1}(x) = (x-2)^2+1,\\ \\ x \\leq 2 \\)",
      "\\( f^{-1}(x) = (x-1)^2+2,\\ \\ x \\geq 1 \\)",
      "\\( f^{-1}(x) = (x-2)^2+1,\\ \\ x \\geq 2 \\)"
    ]
  },
  {
    "id": "y11a-3b-q21b",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the inverse function \\( f^{-1}(x) \\) of \\( f(x) = \\sqrt{x - 2} + 3 \\) and state its domain. (Format: 'f^-1(x) = (x - 3)^2 + 2, x >= 3')",
    "a": "3",
    "solutionSteps": [
      {
        "explanation": "General method: swap \\( x \\) and \\( y \\) in \\( y = \\sqrt{x-2}+3 \\), then solve for \\( y \\); restrict the domain of the inverse to the range of the original function.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Set y equal to f(x) and state the range, which becomes the domain of the inverse function.",
        "workingOut": "\\(y = \\sqrt{x - 2} + 3 \\implies y \\ge 3 \\implies \\text{Domain of } f^{-1} \\text{ is } x \\ge 3\\)",
        "graphData": null
      },
      {
        "explanation": "Swap the variables x and y.",
        "workingOut": "\\(x = \\sqrt{y - 2} + 3\\)",
        "graphData": null
      },
      {
        "explanation": "Isolate the radical term and square both sides.",
        "workingOut": "\\(x - 3 = \\sqrt{y - 2} \\implies (x - 3)^2 = y - 2\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for y to obtain the inverse function formula.",
        "workingOut": "\\(f^{-1}(x) = (x - 3)^2 + 2 \\quad \\text{for } x \\ge 3\\)",
        "graphData": null
      },
      {
        "explanation": "Solving \\( x = \\sqrt{y-2}+3 \\) for \\( y \\) gives \\( f^{-1}(x) = (x-3)^2+2,\\ \\ x \\geq 3 \\) (since the range of \\( f \\) is \\( y \\geq 3 \\)).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( f^{-1}(x) = (x-3)^2+2,\\ \\ x \\in \\mathbb{R} \\)",
      "\\( f^{-1}(x) = (x-3)^2+2,\\ \\ x \\leq 3 \\)",
      "\\( f^{-1}(x) = (x-2)^2+3,\\ \\ x \\geq 2 \\)",
      "\\( f^{-1}(x) = (x-3)^2+2,\\ \\ x \\geq 3 \\)"
    ]
  },
  {
    "id": "y11a-3b-q21c",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the inverse function \\( f^{-1}(x) \\) of \\( f(x) = \\sqrt{x - 3} + 4 \\) and state its domain. (Format: 'f^-1(x) = (x - 4)^2 + 3, x >= 4')",
    "a": "3",
    "solutionSteps": [
      {
        "explanation": "General method: swap \\( x \\) and \\( y \\) in \\( y = \\sqrt{x-3}+4 \\), then solve for \\( y \\); restrict the domain of the inverse to the range of the original function.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Set y equal to f(x) and state the range, which becomes the domain of the inverse function.",
        "workingOut": "\\(y = \\sqrt{x - 3} + 4 \\implies y \\ge 4 \\implies \\text{Domain of } f^{-1} \\text{ is } x \\ge 4\\)",
        "graphData": null
      },
      {
        "explanation": "Swap the variables x and y.",
        "workingOut": "\\(x = \\sqrt{y - 3} + 4\\)",
        "graphData": null
      },
      {
        "explanation": "Isolate the radical term and square both sides.",
        "workingOut": "\\(x - 4 = \\sqrt{y - 3} \\implies (x - 4)^2 = y - 3\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for y to obtain the inverse function formula.",
        "workingOut": "\\(f^{-1}(x) = (x - 4)^2 + 3 \\quad \\text{for } x \\ge 4\\)",
        "graphData": null
      },
      {
        "explanation": "Solving \\( x = \\sqrt{y-3}+4 \\) for \\( y \\) gives \\( f^{-1}(x) = (x-4)^2+3,\\ \\ x \\geq 4 \\) (since the range of \\( f \\) is \\( y \\geq 4 \\)).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( f^{-1}(x) = (x-4)^2+3,\\ \\ x \\leq 4 \\)",
      "\\( f^{-1}(x) = (x-4)^2+3,\\ \\ x \\in \\mathbb{R} \\)",
      "\\( f^{-1}(x) = (x-3)^2+4,\\ \\ x \\geq 3 \\)",
      "\\( f^{-1}(x) = (x-4)^2+3,\\ \\ x \\geq 4 \\)"
    ]
  },
  {
    "id": "y11a-3b-q21d",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the inverse function \\( f^{-1}(x) \\) of \\( f(x) = \\sqrt{x - 4} + 5 \\) and state its domain. (Format: 'f^-1(x) = (x - 5)^2 + 4, x >= 5')",
    "a": "3",
    "solutionSteps": [
      {
        "explanation": "General method: swap \\( x \\) and \\( y \\) in \\( y = \\sqrt{x-4}+5 \\), then solve for \\( y \\); restrict the domain of the inverse to the range of the original function.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Set y equal to f(x) and state the range, which becomes the domain of the inverse function.",
        "workingOut": "\\(y = \\sqrt{x - 4} + 5 \\implies y \\ge 5 \\implies \\text{Domain of } f^{-1} \\text{ is } x \\ge 5\\)",
        "graphData": null
      },
      {
        "explanation": "Swap the variables x and y.",
        "workingOut": "\\(x = \\sqrt{y - 4} + 5\\)",
        "graphData": null
      },
      {
        "explanation": "Isolate the radical term and square both sides.",
        "workingOut": "\\(x - 5 = \\sqrt{y - 4} \\implies (x - 5)^2 = y - 4\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for y to obtain the inverse function formula.",
        "workingOut": "\\(f^{-1}(x) = (x - 5)^2 + 4 \\quad \\text{for } x \\ge 5\\)",
        "graphData": null
      },
      {
        "explanation": "Solving \\( x = \\sqrt{y-4}+5 \\) for \\( y \\) gives \\( f^{-1}(x) = (x-5)^2+4,\\ \\ x \\geq 5 \\) (since the range of \\( f \\) is \\( y \\geq 5 \\)).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( f^{-1}(x) = (x-4)^2+5,\\ \\ x \\geq 4 \\)",
      "\\( f^{-1}(x) = (x-5)^2+4,\\ \\ x \\leq 5 \\)",
      "\\( f^{-1}(x) = (x-5)^2+4,\\ \\ x \\in \\mathbb{R} \\)",
      "\\( f^{-1}(x) = (x-5)^2+4,\\ \\ x \\geq 5 \\)"
    ]
  },
  {
    "id": "y11a-3b-q21e",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the inverse function \\( f^{-1}(x) \\) of \\( f(x) = \\sqrt{x - 5} + 6 \\) and state its domain. (Format: 'f^-1(x) = (x - 6)^2 + 5, x >= 6')",
    "a": "3",
    "solutionSteps": [
      {
        "explanation": "General method: swap \\( x \\) and \\( y \\) in \\( y = \\sqrt{x-5}+6 \\), then solve for \\( y \\); restrict the domain of the inverse to the range of the original function.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Set y equal to f(x) and state the range, which becomes the domain of the inverse function.",
        "workingOut": "\\(y = \\sqrt{x - 5} + 6 \\implies y \\ge 6 \\implies \\text{Domain of } f^{-1} \\text{ is } x \\ge 6\\)",
        "graphData": null
      },
      {
        "explanation": "Swap the variables x and y.",
        "workingOut": "\\(x = \\sqrt{y - 5} + 6\\)",
        "graphData": null
      },
      {
        "explanation": "Isolate the radical term and square both sides.",
        "workingOut": "\\(x - 6 = \\sqrt{y - 5} \\implies (x - 6)^2 = y - 5\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for y to obtain the inverse function formula.",
        "workingOut": "\\(f^{-1}(x) = (x - 6)^2 + 5 \\quad \\text{for } x \\ge 6\\)",
        "graphData": null
      },
      {
        "explanation": "Solving \\( x = \\sqrt{y-5}+6 \\) for \\( y \\) gives \\( f^{-1}(x) = (x-6)^2+5,\\ \\ x \\geq 6 \\) (since the range of \\( f \\) is \\( y \\geq 6 \\)).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( f^{-1}(x) = (x-5)^2+6,\\ \\ x \\geq 5 \\)",
      "\\( f^{-1}(x) = (x-6)^2+5,\\ \\ x \\leq 6 \\)",
      "\\( f^{-1}(x) = (x-6)^2+5,\\ \\ x \\in \\mathbb{R} \\)",
      "\\( f^{-1}(x) = (x-6)^2+5,\\ \\ x \\geq 6 \\)"
    ]
  },
  {
    "id": "y11a-3b-q21f",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the inverse function \\( f^{-1}(x) \\) of \\( f(x) = \\sqrt{x - 6} + 7 \\) and state its domain. (Format: 'f^-1(x) = (x - 7)^2 + 6, x >= 7')",
    "a": "3",
    "solutionSteps": [
      {
        "explanation": "General method: swap \\( x \\) and \\( y \\) in \\( y = \\sqrt{x-6}+7 \\), then solve for \\( y \\); restrict the domain of the inverse to the range of the original function.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Set y equal to f(x) and state the range, which becomes the domain of the inverse function.",
        "workingOut": "\\(y = \\sqrt{x - 6} + 7 \\implies y \\ge 7 \\implies \\text{Domain of } f^{-1} \\text{ is } x \\ge 7\\)",
        "graphData": null
      },
      {
        "explanation": "Swap the variables x and y.",
        "workingOut": "\\(x = \\sqrt{y - 6} + 7\\)",
        "graphData": null
      },
      {
        "explanation": "Isolate the radical term and square both sides.",
        "workingOut": "\\(x - 7 = \\sqrt{y - 6} \\implies (x - 7)^2 = y - 6\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for y to obtain the inverse function formula.",
        "workingOut": "\\(f^{-1}(x) = (x - 7)^2 + 6 \\quad \\text{for } x \\ge 7\\)",
        "graphData": null
      },
      {
        "explanation": "Solving \\( x = \\sqrt{y-6}+7 \\) for \\( y \\) gives \\( f^{-1}(x) = (x-7)^2+6,\\ \\ x \\geq 7 \\) (since the range of \\( f \\) is \\( y \\geq 7 \\)).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( f^{-1}(x) = (x-7)^2+6,\\ \\ x \\leq 7 \\)",
      "\\( f^{-1}(x) = (x-6)^2+7,\\ \\ x \\geq 6 \\)",
      "\\( f^{-1}(x) = (x-7)^2+6,\\ \\ x \\in \\mathbb{R} \\)",
      "\\( f^{-1}(x) = (x-7)^2+6,\\ \\ x \\geq 7 \\)"
    ]
  },
  {
    "id": "y11a-3b-q21g",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the inverse function \\( f^{-1}(x) \\) of \\( f(x) = \\sqrt{x - 7} + 8 \\) and state its domain. (Format: 'f^-1(x) = (x - 8)^2 + 7, x >= 8')",
    "a": "3",
    "solutionSteps": [
      {
        "explanation": "General method: swap \\( x \\) and \\( y \\) in \\( y = \\sqrt{x-7}+8 \\), then solve for \\( y \\); restrict the domain of the inverse to the range of the original function.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Set y equal to f(x) and state the range, which becomes the domain of the inverse function.",
        "workingOut": "\\(y = \\sqrt{x - 7} + 8 \\implies y \\ge 8 \\implies \\text{Domain of } f^{-1} \\text{ is } x \\ge 8\\)",
        "graphData": null
      },
      {
        "explanation": "Swap the variables x and y.",
        "workingOut": "\\(x = \\sqrt{y - 7} + 8\\)",
        "graphData": null
      },
      {
        "explanation": "Isolate the radical term and square both sides.",
        "workingOut": "\\(x - 8 = \\sqrt{y - 7} \\implies (x - 8)^2 = y - 7\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for y to obtain the inverse function formula.",
        "workingOut": "\\(f^{-1}(x) = (x - 8)^2 + 7 \\quad \\text{for } x \\ge 8\\)",
        "graphData": null
      },
      {
        "explanation": "Solving \\( x = \\sqrt{y-7}+8 \\) for \\( y \\) gives \\( f^{-1}(x) = (x-8)^2+7,\\ \\ x \\geq 8 \\) (since the range of \\( f \\) is \\( y \\geq 8 \\)).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( f^{-1}(x) = (x-7)^2+8,\\ \\ x \\geq 7 \\)",
      "\\( f^{-1}(x) = (x-8)^2+7,\\ \\ x \\in \\mathbb{R} \\)",
      "\\( f^{-1}(x) = (x-8)^2+7,\\ \\ x \\leq 8 \\)",
      "\\( f^{-1}(x) = (x-8)^2+7,\\ \\ x \\geq 8 \\)"
    ]
  },
  {
    "id": "y11a-3b-q21h",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the inverse function \\( f^{-1}(x) \\) of \\( f(x) = \\sqrt{x - 8} + 9 \\) and state its domain. (Format: 'f^-1(x) = (x - 9)^2 + 8, x >= 9')",
    "a": "3",
    "solutionSteps": [
      {
        "explanation": "General method: swap \\( x \\) and \\( y \\) in \\( y = \\sqrt{x-8}+9 \\), then solve for \\( y \\); restrict the domain of the inverse to the range of the original function.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Set y equal to f(x) and state the range, which becomes the domain of the inverse function.",
        "workingOut": "\\(y = \\sqrt{x - 8} + 9 \\implies y \\ge 9 \\implies \\text{Domain of } f^{-1} \\text{ is } x \\ge 9\\)",
        "graphData": null
      },
      {
        "explanation": "Swap the variables x and y.",
        "workingOut": "\\(x = \\sqrt{y - 8} + 9\\)",
        "graphData": null
      },
      {
        "explanation": "Isolate the radical term and square both sides.",
        "workingOut": "\\(x - 9 = \\sqrt{y - 8} \\implies (x - 9)^2 = y - 8\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for y to obtain the inverse function formula.",
        "workingOut": "\\(f^{-1}(x) = (x - 9)^2 + 8 \\quad \\text{for } x \\ge 9\\)",
        "graphData": null
      },
      {
        "explanation": "Solving \\( x = \\sqrt{y-8}+9 \\) for \\( y \\) gives \\( f^{-1}(x) = (x-9)^2+8,\\ \\ x \\geq 9 \\) (since the range of \\( f \\) is \\( y \\geq 9 \\)).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( f^{-1}(x) = (x-9)^2+8,\\ \\ x \\in \\mathbb{R} \\)",
      "\\( f^{-1}(x) = (x-8)^2+9,\\ \\ x \\geq 8 \\)",
      "\\( f^{-1}(x) = (x-9)^2+8,\\ \\ x \\leq 9 \\)",
      "\\( f^{-1}(x) = (x-9)^2+8,\\ \\ x \\geq 9 \\)"
    ]
  },
  {
    "id": "y11a-3b-q21i",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the inverse function \\( f^{-1}(x) \\) of \\( f(x) = \\sqrt{x - 9} + 10 \\) and state its domain. (Format: 'f^-1(x) = (x - 10)^2 + 9, x >= 10')",
    "a": "3",
    "solutionSteps": [
      {
        "explanation": "General method: swap \\( x \\) and \\( y \\) in \\( y = \\sqrt{x-9}+10 \\), then solve for \\( y \\); restrict the domain of the inverse to the range of the original function.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Set y equal to f(x) and state the range, which becomes the domain of the inverse function.",
        "workingOut": "\\(y = \\sqrt{x - 9} + 10 \\implies y \\ge 10 \\implies \\text{Domain of } f^{-1} \\text{ is } x \\ge 10\\)",
        "graphData": null
      },
      {
        "explanation": "Swap the variables x and y.",
        "workingOut": "\\(x = \\sqrt{y - 9} + 10\\)",
        "graphData": null
      },
      {
        "explanation": "Isolate the radical term and square both sides.",
        "workingOut": "\\(x - 10 = \\sqrt{y - 9} \\implies (x - 10)^2 = y - 9\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for y to obtain the inverse function formula.",
        "workingOut": "\\(f^{-1}(x) = (x - 10)^2 + 9 \\quad \\text{for } x \\ge 10\\)",
        "graphData": null
      },
      {
        "explanation": "Solving \\( x = \\sqrt{y-9}+10 \\) for \\( y \\) gives \\( f^{-1}(x) = (x-10)^2+9,\\ \\ x \\geq 10 \\) (since the range of \\( f \\) is \\( y \\geq 10 \\)).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( f^{-1}(x) = (x-9)^2+10,\\ \\ x \\geq 9 \\)",
      "\\( f^{-1}(x) = (x-10)^2+9,\\ \\ x \\in \\mathbb{R} \\)",
      "\\( f^{-1}(x) = (x-10)^2+9,\\ \\ x \\leq 10 \\)",
      "\\( f^{-1}(x) = (x-10)^2+9,\\ \\ x \\geq 10 \\)"
    ]
  },
  {
    "id": "y11a-3b-q21j",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the inverse function \\( f^{-1}(x) \\) of \\( f(x) = \\sqrt{x - 10} + 11 \\) and state its domain. (Format: 'f^-1(x) = (x - 11)^2 + 10, x >= 11')",
    "a": "3",
    "solutionSteps": [
      {
        "explanation": "General method: swap \\( x \\) and \\( y \\) in \\( y = \\sqrt{x-10}+11 \\), then solve for \\( y \\); restrict the domain of the inverse to the range of the original function.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Set y equal to f(x) and state the range, which becomes the domain of the inverse function.",
        "workingOut": "\\(y = \\sqrt{x - 10} + 11 \\implies y \\ge 11 \\implies \\text{Domain of } f^{-1} \\text{ is } x \\ge 11\\)",
        "graphData": null
      },
      {
        "explanation": "Swap the variables x and y.",
        "workingOut": "\\(x = \\sqrt{y - 10} + 11\\)",
        "graphData": null
      },
      {
        "explanation": "Isolate the radical term and square both sides.",
        "workingOut": "\\(x - 11 = \\sqrt{y - 10} \\implies (x - 11)^2 = y - 10\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for y to obtain the inverse function formula.",
        "workingOut": "\\(f^{-1}(x) = (x - 11)^2 + 10 \\quad \\text{for } x \\ge 11\\)",
        "graphData": null
      },
      {
        "explanation": "Solving \\( x = \\sqrt{y-10}+11 \\) for \\( y \\) gives \\( f^{-1}(x) = (x-11)^2+10,\\ \\ x \\geq 11 \\) (since the range of \\( f \\) is \\( y \\geq 11 \\)).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( f^{-1}(x) = (x-10)^2+11,\\ \\ x \\geq 10 \\)",
      "\\( f^{-1}(x) = (x-11)^2+10,\\ \\ x \\in \\mathbb{R} \\)",
      "\\( f^{-1}(x) = (x-11)^2+10,\\ \\ x \\leq 11 \\)",
      "\\( f^{-1}(x) = (x-11)^2+10,\\ \\ x \\geq 11 \\)"
    ]
  },
  {
    "id": "y11a-3b-q22a",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "A function \\( y = f(x) \\) undergoes the following sequence of transformations:\n\n1. Dilated vertically by a factor of \\( 1 \\).\n2. Reflected in the \\( x \\)-axis.\n3. Shifted horizontally to the right by \\( 2 \\) units.\n4. Shifted vertically upwards by \\( 3 \\) units.\n\nWrite down the equation of the transformed function \\( g(x) \\) in terms of \\( f(x) \\). (Format: 'g(x) = -1*f(x - 2) + 3')",
    "a": "3",
    "solutionSteps": [
      {
        "explanation": "General rule: apply transformations in the stated order, wrapping each one around the previous result — dilation coefficient multiplies \\(f\\), reflection flips its sign, horizontal shifts change what's inside \\(f(\\cdot)\\), vertical shifts are added outside.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Apply vertical dilation by a factor of the coefficient.",
        "workingOut": "\\(y = 1f(x)\\)",
        "graphData": null
      },
      {
        "explanation": "Apply reflection in the x-axis.",
        "workingOut": "\\(y = -1f(x)\\)",
        "graphData": null
      },
      {
        "explanation": "Apply horizontal translation to the right.",
        "workingOut": "\\(y = -1f(x - 2)\\)",
        "graphData": null
      },
      {
        "explanation": "Apply vertical translation upwards to get the final function.",
        "workingOut": "\\(g(x) = -1f(x - 2) + 3\\)",
        "graphData": null
      },
      {
        "explanation": "Dilate by 1, reflect in the \\(x\\)-axis, shift right 2, then shift up 3: \\( g(x) = -1f(x-2)+3 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( g(x) = -1f(x+2)+3 \\)",
      "\\( g(x) = -1f(x-3)+2 \\)",
      "\\( g(x) = 1f(x-2)+3 \\)",
      "\\( g(x) = -1f(x-2)+3 \\)"
    ]
  },
  {
    "id": "y11a-3b-q22b",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "A function \\( y = f(x) \\) undergoes the following sequence of transformations:\n\n1. Dilated vertically by a factor of \\( 2 \\).\n2. Reflected in the \\( x \\)-axis.\n3. Shifted horizontally to the right by \\( 3 \\) units.\n4. Shifted vertically upwards by \\( 4 \\) units.\n\nWrite down the equation of the transformed function \\( g(x) \\) in terms of \\( f(x) \\). (Format: 'g(x) = -2*f(x - 3) + 4')",
    "a": "3",
    "solutionSteps": [
      {
        "explanation": "General rule: apply transformations in the stated order, wrapping each one around the previous result — dilation coefficient multiplies \\(f\\), reflection flips its sign, horizontal shifts change what's inside \\(f(\\cdot)\\), vertical shifts are added outside.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Apply vertical dilation by a factor of the coefficient.",
        "workingOut": "\\(y = 2f(x)\\)",
        "graphData": null
      },
      {
        "explanation": "Apply reflection in the x-axis.",
        "workingOut": "\\(y = -2f(x)\\)",
        "graphData": null
      },
      {
        "explanation": "Apply horizontal translation to the right.",
        "workingOut": "\\(y = -2f(x - 3)\\)",
        "graphData": null
      },
      {
        "explanation": "Apply vertical translation upwards to get the final function.",
        "workingOut": "\\(g(x) = -2f(x - 3) + 4\\)",
        "graphData": null
      },
      {
        "explanation": "Dilate by 2, reflect in the \\(x\\)-axis, shift right 3, then shift up 4: \\( g(x) = -2f(x-3)+4 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( g(x) = -2f(x-4)+3 \\)",
      "\\( g(x) = 2f(x-3)+4 \\)",
      "\\( g(x) = -2f(x+3)+4 \\)",
      "\\( g(x) = -2f(x-3)+4 \\)"
    ]
  },
  {
    "id": "y11a-3b-q22c",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "A function \\( y = f(x) \\) undergoes the following sequence of transformations:\n\n1. Dilated vertically by a factor of \\( 3 \\).\n2. Reflected in the \\( x \\)-axis.\n3. Shifted horizontally to the right by \\( 4 \\) units.\n4. Shifted vertically upwards by \\( 5 \\) units.\n\nWrite down the equation of the transformed function \\( g(x) \\) in terms of \\( f(x) \\). (Format: 'g(x) = -3*f(x - 4) + 5')",
    "a": "3",
    "solutionSteps": [
      {
        "explanation": "General rule: apply transformations in the stated order, wrapping each one around the previous result — dilation coefficient multiplies \\(f\\), reflection flips its sign, horizontal shifts change what's inside \\(f(\\cdot)\\), vertical shifts are added outside.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Apply vertical dilation by a factor of the coefficient.",
        "workingOut": "\\(y = 3f(x)\\)",
        "graphData": null
      },
      {
        "explanation": "Apply reflection in the x-axis.",
        "workingOut": "\\(y = -3f(x)\\)",
        "graphData": null
      },
      {
        "explanation": "Apply horizontal translation to the right.",
        "workingOut": "\\(y = -3f(x - 4)\\)",
        "graphData": null
      },
      {
        "explanation": "Apply vertical translation upwards to get the final function.",
        "workingOut": "\\(g(x) = -3f(x - 4) + 5\\)",
        "graphData": null
      },
      {
        "explanation": "Dilate by 3, reflect in the \\(x\\)-axis, shift right 4, then shift up 5: \\( g(x) = -3f(x-4)+5 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( g(x) = -3f(x-5)+4 \\)",
      "\\( g(x) = 3f(x-4)+5 \\)",
      "\\( g(x) = -3f(x+4)+5 \\)",
      "\\( g(x) = -3f(x-4)+5 \\)"
    ]
  },
  {
    "id": "y11a-3b-q22d",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "A function \\( y = f(x) \\) undergoes the following sequence of transformations:\n\n1. Dilated vertically by a factor of \\( 4 \\).\n2. Reflected in the \\( x \\)-axis.\n3. Shifted horizontally to the right by \\( 5 \\) units.\n4. Shifted vertically upwards by \\( 6 \\) units.\n\nWrite down the equation of the transformed function \\( g(x) \\) in terms of \\( f(x) \\). (Format: 'g(x) = -4*f(x - 5) + 6')",
    "a": "3",
    "solutionSteps": [
      {
        "explanation": "General rule: apply transformations in the stated order, wrapping each one around the previous result — dilation coefficient multiplies \\(f\\), reflection flips its sign, horizontal shifts change what's inside \\(f(\\cdot)\\), vertical shifts are added outside.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Apply vertical dilation by a factor of the coefficient.",
        "workingOut": "\\(y = 4f(x)\\)",
        "graphData": null
      },
      {
        "explanation": "Apply reflection in the x-axis.",
        "workingOut": "\\(y = -4f(x)\\)",
        "graphData": null
      },
      {
        "explanation": "Apply horizontal translation to the right.",
        "workingOut": "\\(y = -4f(x - 5)\\)",
        "graphData": null
      },
      {
        "explanation": "Apply vertical translation upwards to get the final function.",
        "workingOut": "\\(g(x) = -4f(x - 5) + 6\\)",
        "graphData": null
      },
      {
        "explanation": "Dilate by 4, reflect in the \\(x\\)-axis, shift right 5, then shift up 6: \\( g(x) = -4f(x-5)+6 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( g(x) = 4f(x-5)+6 \\)",
      "\\( g(x) = -4f(x-6)+5 \\)",
      "\\( g(x) = -4f(x+5)+6 \\)",
      "\\( g(x) = -4f(x-5)+6 \\)"
    ]
  },
  {
    "id": "y11a-3b-q22e",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "A function \\( y = f(x) \\) undergoes the following sequence of transformations:\n\n1. Dilated vertically by a factor of \\( 5 \\).\n2. Reflected in the \\( x \\)-axis.\n3. Shifted horizontally to the right by \\( 6 \\) units.\n4. Shifted vertically upwards by \\( 7 \\) units.\n\nWrite down the equation of the transformed function \\( g(x) \\) in terms of \\( f(x) \\). (Format: 'g(x) = -5*f(x - 6) + 7')",
    "a": "3",
    "solutionSteps": [
      {
        "explanation": "General rule: apply transformations in the stated order, wrapping each one around the previous result — dilation coefficient multiplies \\(f\\), reflection flips its sign, horizontal shifts change what's inside \\(f(\\cdot)\\), vertical shifts are added outside.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Apply vertical dilation by a factor of the coefficient.",
        "workingOut": "\\(y = 5f(x)\\)",
        "graphData": null
      },
      {
        "explanation": "Apply reflection in the x-axis.",
        "workingOut": "\\(y = -5f(x)\\)",
        "graphData": null
      },
      {
        "explanation": "Apply horizontal translation to the right.",
        "workingOut": "\\(y = -5f(x - 6)\\)",
        "graphData": null
      },
      {
        "explanation": "Apply vertical translation upwards to get the final function.",
        "workingOut": "\\(g(x) = -5f(x - 6) + 7\\)",
        "graphData": null
      },
      {
        "explanation": "Dilate by 5, reflect in the \\(x\\)-axis, shift right 6, then shift up 7: \\( g(x) = -5f(x-6)+7 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( g(x) = -5f(x-7)+6 \\)",
      "\\( g(x) = 5f(x-6)+7 \\)",
      "\\( g(x) = -5f(x+6)+7 \\)",
      "\\( g(x) = -5f(x-6)+7 \\)"
    ]
  },
  {
    "id": "y11a-3b-q22f",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "A function \\( y = f(x) \\) undergoes the following sequence of transformations:\n\n1. Dilated vertically by a factor of \\( 6 \\).\n2. Reflected in the \\( x \\)-axis.\n3. Shifted horizontally to the right by \\( 7 \\) units.\n4. Shifted vertically upwards by \\( 8 \\) units.\n\nWrite down the equation of the transformed function \\( g(x) \\) in terms of \\( f(x) \\). (Format: 'g(x) = -6*f(x - 7) + 8')",
    "a": "3",
    "solutionSteps": [
      {
        "explanation": "General rule: apply transformations in the stated order, wrapping each one around the previous result — dilation coefficient multiplies \\(f\\), reflection flips its sign, horizontal shifts change what's inside \\(f(\\cdot)\\), vertical shifts are added outside.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Apply vertical dilation by a factor of the coefficient.",
        "workingOut": "\\(y = 6f(x)\\)",
        "graphData": null
      },
      {
        "explanation": "Apply reflection in the x-axis.",
        "workingOut": "\\(y = -6f(x)\\)",
        "graphData": null
      },
      {
        "explanation": "Apply horizontal translation to the right.",
        "workingOut": "\\(y = -6f(x - 7)\\)",
        "graphData": null
      },
      {
        "explanation": "Apply vertical translation upwards to get the final function.",
        "workingOut": "\\(g(x) = -6f(x - 7) + 8\\)",
        "graphData": null
      },
      {
        "explanation": "Dilate by 6, reflect in the \\(x\\)-axis, shift right 7, then shift up 8: \\( g(x) = -6f(x-7)+8 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( g(x) = -6f(x+7)+8 \\)",
      "\\( g(x) = 6f(x-7)+8 \\)",
      "\\( g(x) = -6f(x-8)+7 \\)",
      "\\( g(x) = -6f(x-7)+8 \\)"
    ]
  },
  {
    "id": "y11a-3b-q22g",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "A function \\( y = f(x) \\) undergoes the following sequence of transformations:\n\n1. Dilated vertically by a factor of \\( 7 \\).\n2. Reflected in the \\( x \\)-axis.\n3. Shifted horizontally to the right by \\( 8 \\) units.\n4. Shifted vertically upwards by \\( 9 \\) units.\n\nWrite down the equation of the transformed function \\( g(x) \\) in terms of \\( f(x) \\). (Format: 'g(x) = -7*f(x - 8) + 9')",
    "a": "3",
    "solutionSteps": [
      {
        "explanation": "General rule: apply transformations in the stated order, wrapping each one around the previous result — dilation coefficient multiplies \\(f\\), reflection flips its sign, horizontal shifts change what's inside \\(f(\\cdot)\\), vertical shifts are added outside.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Apply vertical dilation by a factor of the coefficient.",
        "workingOut": "\\(y = 7f(x)\\)",
        "graphData": null
      },
      {
        "explanation": "Apply reflection in the x-axis.",
        "workingOut": "\\(y = -7f(x)\\)",
        "graphData": null
      },
      {
        "explanation": "Apply horizontal translation to the right.",
        "workingOut": "\\(y = -7f(x - 8)\\)",
        "graphData": null
      },
      {
        "explanation": "Apply vertical translation upwards to get the final function.",
        "workingOut": "\\(g(x) = -7f(x - 8) + 9\\)",
        "graphData": null
      },
      {
        "explanation": "Dilate by 7, reflect in the \\(x\\)-axis, shift right 8, then shift up 9: \\( g(x) = -7f(x-8)+9 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( g(x) = 7f(x-8)+9 \\)",
      "\\( g(x) = -7f(x+8)+9 \\)",
      "\\( g(x) = -7f(x-9)+8 \\)",
      "\\( g(x) = -7f(x-8)+9 \\)"
    ]
  },
  {
    "id": "y11a-3b-q22h",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "A function \\( y = f(x) \\) undergoes the following sequence of transformations:\n\n1. Dilated vertically by a factor of \\( 8 \\).\n2. Reflected in the \\( x \\)-axis.\n3. Shifted horizontally to the right by \\( 9 \\) units.\n4. Shifted vertically upwards by \\( 10 \\) units.\n\nWrite down the equation of the transformed function \\( g(x) \\) in terms of \\( f(x) \\). (Format: 'g(x) = -8*f(x - 9) + 10')",
    "a": "3",
    "solutionSteps": [
      {
        "explanation": "General rule: apply transformations in the stated order, wrapping each one around the previous result — dilation coefficient multiplies \\(f\\), reflection flips its sign, horizontal shifts change what's inside \\(f(\\cdot)\\), vertical shifts are added outside.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Apply vertical dilation by a factor of the coefficient.",
        "workingOut": "\\(y = 8f(x)\\)",
        "graphData": null
      },
      {
        "explanation": "Apply reflection in the x-axis.",
        "workingOut": "\\(y = -8f(x)\\)",
        "graphData": null
      },
      {
        "explanation": "Apply horizontal translation to the right.",
        "workingOut": "\\(y = -8f(x - 9)\\)",
        "graphData": null
      },
      {
        "explanation": "Apply vertical translation upwards to get the final function.",
        "workingOut": "\\(g(x) = -8f(x - 9) + 10\\)",
        "graphData": null
      },
      {
        "explanation": "Dilate by 8, reflect in the \\(x\\)-axis, shift right 9, then shift up 10: \\( g(x) = -8f(x-9)+10 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( g(x) = -8f(x+9)+10 \\)",
      "\\( g(x) = 8f(x-9)+10 \\)",
      "\\( g(x) = -8f(x-10)+9 \\)",
      "\\( g(x) = -8f(x-9)+10 \\)"
    ]
  },
  {
    "id": "y11a-3b-q22i",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "A function \\( y = f(x) \\) undergoes the following sequence of transformations:\n\n1. Dilated vertically by a factor of \\( 9 \\).\n2. Reflected in the \\( x \\)-axis.\n3. Shifted horizontally to the right by \\( 10 \\) units.\n4. Shifted vertically upwards by \\( 11 \\) units.\n\nWrite down the equation of the transformed function \\( g(x) \\) in terms of \\( f(x) \\). (Format: 'g(x) = -9*f(x - 10) + 11')",
    "a": "3",
    "solutionSteps": [
      {
        "explanation": "General rule: apply transformations in the stated order, wrapping each one around the previous result — dilation coefficient multiplies \\(f\\), reflection flips its sign, horizontal shifts change what's inside \\(f(\\cdot)\\), vertical shifts are added outside.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Apply vertical dilation by a factor of the coefficient.",
        "workingOut": "\\(y = 9f(x)\\)",
        "graphData": null
      },
      {
        "explanation": "Apply reflection in the x-axis.",
        "workingOut": "\\(y = -9f(x)\\)",
        "graphData": null
      },
      {
        "explanation": "Apply horizontal translation to the right.",
        "workingOut": "\\(y = -9f(x - 10)\\)",
        "graphData": null
      },
      {
        "explanation": "Apply vertical translation upwards to get the final function.",
        "workingOut": "\\(g(x) = -9f(x - 10) + 11\\)",
        "graphData": null
      },
      {
        "explanation": "Dilate by 9, reflect in the \\(x\\)-axis, shift right 10, then shift up 11: \\( g(x) = -9f(x-10)+11 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( g(x) = -9f(x-11)+10 \\)",
      "\\( g(x) = -9f(x+10)+11 \\)",
      "\\( g(x) = 9f(x-10)+11 \\)",
      "\\( g(x) = -9f(x-10)+11 \\)"
    ]
  },
  {
    "id": "y11a-3b-q22j",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "A function \\( y = f(x) \\) undergoes the following sequence of transformations:\n\n1. Dilated vertically by a factor of \\( 10 \\).\n2. Reflected in the \\( x \\)-axis.\n3. Shifted horizontally to the right by \\( 11 \\) units.\n4. Shifted vertically upwards by \\( 12 \\) units.\n\nWrite down the equation of the transformed function \\( g(x) \\) in terms of \\( f(x) \\). (Format: 'g(x) = -10*f(x - 11) + 12')",
    "a": "3",
    "solutionSteps": [
      {
        "explanation": "General rule: apply transformations in the stated order, wrapping each one around the previous result — dilation coefficient multiplies \\(f\\), reflection flips its sign, horizontal shifts change what's inside \\(f(\\cdot)\\), vertical shifts are added outside.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Apply vertical dilation by a factor of the coefficient.",
        "workingOut": "\\(y = 10f(x)\\)",
        "graphData": null
      },
      {
        "explanation": "Apply reflection in the x-axis.",
        "workingOut": "\\(y = -10f(x)\\)",
        "graphData": null
      },
      {
        "explanation": "Apply horizontal translation to the right.",
        "workingOut": "\\(y = -10f(x - 11)\\)",
        "graphData": null
      },
      {
        "explanation": "Apply vertical translation upwards to get the final function.",
        "workingOut": "\\(g(x) = -10f(x - 11) + 12\\)",
        "graphData": null
      },
      {
        "explanation": "Dilate by 10, reflect in the \\(x\\)-axis, shift right 11, then shift up 12: \\( g(x) = -10f(x-11)+12 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( g(x) = -10f(x+11)+12 \\)",
      "\\( g(x) = -10f(x-12)+11 \\)",
      "\\( g(x) = 10f(x-11)+12 \\)",
      "\\( g(x) = -10f(x-11)+12 \\)"
    ]
  },
  {
    "id": "y11a-3b-q23a",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the equation of the tangent line to the circle \\( x^2 + y^2 = 25 \\) at the point \\( (3, 4) \\). (Format: '3x + 4y = 25')",
    "a": "3",
    "solutionSteps": [
      {
        "explanation": "General rule: the tangent to \\( x^2+y^2=r^2 \\) at the point \\( (x_0,y_0) \\) is \\( x_0x + y_0y = r^2 \\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Recall the equation of the tangent line to a circle at a given point.",
        "workingOut": "\\(x_1 x + y_1 y = r^2\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the coordinates of the point and the radius squared.",
        "workingOut": "\\(3x + 4y = 25\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the equation by dividing both sides by the common factor.",
        "workingOut": "\\(3x + 4y = 25\\)",
        "graphData": null
      },
      {
        "explanation": "With \\( (x_0,y_0)=(3,4) \\) and \\( r^2=25 \\), this gives \\( 3x+4y=25 \\), which simplifies (dividing by \\( 1 \\)) to \\( 3x + 4y = 25 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( 3x + 4y = -25 \\)",
      "\\( 3x + 4y = 5 \\)",
      "\\( 4x + 3y = 25 \\)",
      "\\( 3x + 4y = 25 \\)"
    ]
  },
  {
    "id": "y11a-3b-q23b",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the equation of the tangent line to the circle \\( x^2 + y^2 = 100 \\) at the point \\( (6, 8) \\). (Format: '3x + 4y = 50')",
    "a": "3",
    "solutionSteps": [
      {
        "explanation": "General rule: the tangent to \\( x^2+y^2=r^2 \\) at the point \\( (x_0,y_0) \\) is \\( x_0x + y_0y = r^2 \\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Recall the equation of the tangent line to a circle at a given point.",
        "workingOut": "\\(x_1 x + y_1 y = r^2\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the coordinates of the point and the radius squared.",
        "workingOut": "\\(6x + 8y = 100\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the equation by dividing both sides by the common factor.",
        "workingOut": "\\(3x + 4y = 50\\)",
        "graphData": null
      },
      {
        "explanation": "With \\( (x_0,y_0)=(6,8) \\) and \\( r^2=100 \\), this gives \\( 6x+8y=100 \\), which simplifies (dividing by \\( 2 \\)) to \\( 3x + 4y = 50 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( 3x + 4y = -50 \\)",
      "\\( 3x + 4y = 5 \\)",
      "\\( 4x + 3y = 50 \\)",
      "\\( 3x + 4y = 50 \\)"
    ]
  },
  {
    "id": "y11a-3b-q23c",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the equation of the tangent line to the circle \\( x^2 + y^2 = 225 \\) at the point \\( (9, 12) \\). (Format: '3x + 4y = 75')",
    "a": "3",
    "solutionSteps": [
      {
        "explanation": "General rule: the tangent to \\( x^2+y^2=r^2 \\) at the point \\( (x_0,y_0) \\) is \\( x_0x + y_0y = r^2 \\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Recall the equation of the tangent line to a circle at a given point.",
        "workingOut": "\\(x_1 x + y_1 y = r^2\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the coordinates of the point and the radius squared.",
        "workingOut": "\\(9x + 12y = 225\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the equation by dividing both sides by the common factor.",
        "workingOut": "\\(3x + 4y = 75\\)",
        "graphData": null
      },
      {
        "explanation": "With \\( (x_0,y_0)=(9,12) \\) and \\( r^2=225 \\), this gives \\( 9x+12y=225 \\), which simplifies (dividing by \\( 3 \\)) to \\( 3x + 4y = 75 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( 3x + 4y = 5 \\)",
      "\\( 3x + 4y = -75 \\)",
      "\\( 4x + 3y = 75 \\)",
      "\\( 3x + 4y = 75 \\)"
    ]
  },
  {
    "id": "y11a-3b-q23d",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the equation of the tangent line to the circle \\( x^2 + y^2 = 400 \\) at the point \\( (12, 16) \\). (Format: '3x + 4y = 100')",
    "a": "3",
    "solutionSteps": [
      {
        "explanation": "General rule: the tangent to \\( x^2+y^2=r^2 \\) at the point \\( (x_0,y_0) \\) is \\( x_0x + y_0y = r^2 \\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Recall the equation of the tangent line to a circle at a given point.",
        "workingOut": "\\(x_1 x + y_1 y = r^2\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the coordinates of the point and the radius squared.",
        "workingOut": "\\(12x + 16y = 400\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the equation by dividing both sides by the common factor.",
        "workingOut": "\\(3x + 4y = 100\\)",
        "graphData": null
      },
      {
        "explanation": "With \\( (x_0,y_0)=(12,16) \\) and \\( r^2=400 \\), this gives \\( 12x+16y=400 \\), which simplifies (dividing by \\( 4 \\)) to \\( 3x + 4y = 100 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( 4x + 3y = 100 \\)",
      "\\( 3x + 4y = 5 \\)",
      "\\( 3x + 4y = -100 \\)",
      "\\( 3x + 4y = 100 \\)"
    ]
  },
  {
    "id": "y11a-3b-q23e",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the equation of the tangent line to the circle \\( x^2 + y^2 = 625 \\) at the point \\( (15, 20) \\). (Format: '3x + 4y = 125')",
    "a": "3",
    "solutionSteps": [
      {
        "explanation": "General rule: the tangent to \\( x^2+y^2=r^2 \\) at the point \\( (x_0,y_0) \\) is \\( x_0x + y_0y = r^2 \\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Recall the equation of the tangent line to a circle at a given point.",
        "workingOut": "\\(x_1 x + y_1 y = r^2\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the coordinates of the point and the radius squared.",
        "workingOut": "\\(15x + 20y = 625\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the equation by dividing both sides by the common factor.",
        "workingOut": "\\(3x + 4y = 125\\)",
        "graphData": null
      },
      {
        "explanation": "With \\( (x_0,y_0)=(15,20) \\) and \\( r^2=625 \\), this gives \\( 15x+20y=625 \\), which simplifies (dividing by \\( 5 \\)) to \\( 3x + 4y = 125 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( 4x + 3y = 125 \\)",
      "\\( 3x + 4y = 5 \\)",
      "\\( 3x + 4y = -125 \\)",
      "\\( 3x + 4y = 125 \\)"
    ]
  },
  {
    "id": "y11a-3b-q23f",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the equation of the tangent line to the circle \\( x^2 + y^2 = 900 \\) at the point \\( (18, 24) \\). (Format: '3x + 4y = 150')",
    "a": "3",
    "solutionSteps": [
      {
        "explanation": "General rule: the tangent to \\( x^2+y^2=r^2 \\) at the point \\( (x_0,y_0) \\) is \\( x_0x + y_0y = r^2 \\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Recall the equation of the tangent line to a circle at a given point.",
        "workingOut": "\\(x_1 x + y_1 y = r^2\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the coordinates of the point and the radius squared.",
        "workingOut": "\\(18x + 24y = 900\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the equation by dividing both sides by the common factor.",
        "workingOut": "\\(3x + 4y = 150\\)",
        "graphData": null
      },
      {
        "explanation": "With \\( (x_0,y_0)=(18,24) \\) and \\( r^2=900 \\), this gives \\( 18x+24y=900 \\), which simplifies (dividing by \\( 6 \\)) to \\( 3x + 4y = 150 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( 3x + 4y = 5 \\)",
      "\\( 4x + 3y = 150 \\)",
      "\\( 3x + 4y = -150 \\)",
      "\\( 3x + 4y = 150 \\)"
    ]
  },
  {
    "id": "y11a-3b-q23g",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the equation of the tangent line to the circle \\( x^2 + y^2 = 1225 \\) at the point \\( (21, 28) \\). (Format: '3x + 4y = 175')",
    "a": "3",
    "solutionSteps": [
      {
        "explanation": "General rule: the tangent to \\( x^2+y^2=r^2 \\) at the point \\( (x_0,y_0) \\) is \\( x_0x + y_0y = r^2 \\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Recall the equation of the tangent line to a circle at a given point.",
        "workingOut": "\\(x_1 x + y_1 y = r^2\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the coordinates of the point and the radius squared.",
        "workingOut": "\\(21x + 28y = 1225\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the equation by dividing both sides by the common factor.",
        "workingOut": "\\(3x + 4y = 175\\)",
        "graphData": null
      },
      {
        "explanation": "With \\( (x_0,y_0)=(21,28) \\) and \\( r^2=1225 \\), this gives \\( 21x+28y=1225 \\), which simplifies (dividing by \\( 7 \\)) to \\( 3x + 4y = 175 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( 4x + 3y = 175 \\)",
      "\\( 3x + 4y = 5 \\)",
      "\\( 3x + 4y = -175 \\)",
      "\\( 3x + 4y = 175 \\)"
    ]
  },
  {
    "id": "y11a-3b-q23h",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the equation of the tangent line to the circle \\( x^2 + y^2 = 1600 \\) at the point \\( (24, 32) \\). (Format: '3x + 4y = 200')",
    "a": "3",
    "solutionSteps": [
      {
        "explanation": "General rule: the tangent to \\( x^2+y^2=r^2 \\) at the point \\( (x_0,y_0) \\) is \\( x_0x + y_0y = r^2 \\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Recall the equation of the tangent line to a circle at a given point.",
        "workingOut": "\\(x_1 x + y_1 y = r^2\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the coordinates of the point and the radius squared.",
        "workingOut": "\\(24x + 32y = 1600\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the equation by dividing both sides by the common factor.",
        "workingOut": "\\(3x + 4y = 200\\)",
        "graphData": null
      },
      {
        "explanation": "With \\( (x_0,y_0)=(24,32) \\) and \\( r^2=1600 \\), this gives \\( 24x+32y=1600 \\), which simplifies (dividing by \\( 8 \\)) to \\( 3x + 4y = 200 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( 4x + 3y = 200 \\)",
      "\\( 3x + 4y = -200 \\)",
      "\\( 3x + 4y = 5 \\)",
      "\\( 3x + 4y = 200 \\)"
    ]
  },
  {
    "id": "y11a-3b-q23i",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the equation of the tangent line to the circle \\( x^2 + y^2 = 2025 \\) at the point \\( (27, 36) \\). (Format: '3x + 4y = 225')",
    "a": "3",
    "solutionSteps": [
      {
        "explanation": "General rule: the tangent to \\( x^2+y^2=r^2 \\) at the point \\( (x_0,y_0) \\) is \\( x_0x + y_0y = r^2 \\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Recall the equation of the tangent line to a circle at a given point.",
        "workingOut": "\\(x_1 x + y_1 y = r^2\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the coordinates of the point and the radius squared.",
        "workingOut": "\\(27x + 36y = 2025\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the equation by dividing both sides by the common factor.",
        "workingOut": "\\(3x + 4y = 225\\)",
        "graphData": null
      },
      {
        "explanation": "With \\( (x_0,y_0)=(27,36) \\) and \\( r^2=2025 \\), this gives \\( 27x+36y=2025 \\), which simplifies (dividing by \\( 9 \\)) to \\( 3x + 4y = 225 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( 3x + 4y = -225 \\)",
      "\\( 4x + 3y = 225 \\)",
      "\\( 3x + 4y = 5 \\)",
      "\\( 3x + 4y = 225 \\)"
    ]
  },
  {
    "id": "y11a-3b-q23j",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the equation of the tangent line to the circle \\( x^2 + y^2 = 2500 \\) at the point \\( (30, 40) \\). (Format: '3x + 4y = 250')",
    "a": "3",
    "solutionSteps": [
      {
        "explanation": "General rule: the tangent to \\( x^2+y^2=r^2 \\) at the point \\( (x_0,y_0) \\) is \\( x_0x + y_0y = r^2 \\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Recall the equation of the tangent line to a circle at a given point.",
        "workingOut": "\\(x_1 x + y_1 y = r^2\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the coordinates of the point and the radius squared.",
        "workingOut": "\\(30x + 40y = 2500\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the equation by dividing both sides by the common factor.",
        "workingOut": "\\(3x + 4y = 250\\)",
        "graphData": null
      },
      {
        "explanation": "With \\( (x_0,y_0)=(30,40) \\) and \\( r^2=2500 \\), this gives \\( 30x+40y=2500 \\), which simplifies (dividing by \\( 10 \\)) to \\( 3x + 4y = 250 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( 3x + 4y = -250 \\)",
      "\\( 4x + 3y = 250 \\)",
      "\\( 3x + 4y = 5 \\)",
      "\\( 3x + 4y = 250 \\)"
    ]
  },
  {
    "id": "y11a-3b-q24a",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the coordinates of the two points of intersection of the line \\( y = x + 7 \\) and the circle \\( x^2 + y^2 = 25 \\). (Format: '(-3, 4) and (-4, 3)' or similar, enter coordinates ordered by increasing x)",
    "a": "3",
    "solutionSteps": [
      {
        "explanation": "General method: substitute \\( y = x + 7 \\) into \\( x^2+y^2=25 \\) to get a quadratic in \\( x \\), then factorise and solve.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Substitute the linear equation into the circle equation.",
        "workingOut": "\\(x^2 + (x + 7)^2 = 25\\)",
        "graphData": null
      },
      {
        "explanation": "Expand and simplify the equation to obtain a quadratic equation.",
        "workingOut": "\\(2x^2 + 14x + 24 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Divide by 2 and factorise the quadratic trinomial.",
        "workingOut": "\\(x^2 + 7x + 12 = 0 \\implies (x + 3)(x + 4) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Determine the x-coordinates, then solve for the corresponding y-coordinates.",
        "workingOut": "\\(x = -4 \\implies y = 3 \\quad \\text{and} \\quad x = -3 \\implies y = 4\\)",
        "graphData": null
      },
      {
        "explanation": "This gives \\( x^2 + 7x + 12 = 0 \\), which factors as \\( (x+3)(x+4)=0 \\), so \\( x=-3 \\) or \\( x=-4 \\), giving \\( (-4, 3) \\text{ and } (-3, 4) \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( (-3, 3) \\text{ and } (-4, 4) \\)",
      "\\( (4, -3) \\text{ and } (3, -4) \\)",
      "\\( (-4, 4) \\text{ and } (-3, 3) \\)",
      "\\( (-4, 3) \\text{ and } (-3, 4) \\)"
    ]
  },
  {
    "id": "y11a-3b-q24b",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the coordinates of the two points of intersection of the line \\( y = x + 14 \\) and the circle \\( x^2 + y^2 = 100 \\). (Format: '(-3, 4) and (-4, 3)' or similar, enter coordinates ordered by increasing x)",
    "a": "3",
    "solutionSteps": [
      {
        "explanation": "General method: substitute \\( y = x + 14 \\) into \\( x^2+y^2=100 \\) to get a quadratic in \\( x \\), then factorise and solve.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Substitute the linear equation into the circle equation.",
        "workingOut": "\\(x^2 + (x + 14)^2 = 100\\)",
        "graphData": null
      },
      {
        "explanation": "Expand and simplify the equation to obtain a quadratic equation.",
        "workingOut": "\\(2x^2 + 28x + 96 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Divide by 2 and factorise the quadratic trinomial.",
        "workingOut": "\\(x^2 + 14x + 48 = 0 \\implies (x + 6)(x + 8) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Determine the x-coordinates, then solve for the corresponding y-coordinates.",
        "workingOut": "\\(x = -8 \\implies y = 6 \\quad \\text{and} \\quad x = -6 \\implies y = 8\\)",
        "graphData": null
      },
      {
        "explanation": "This gives \\( x^2 + 14x + 48 = 0 \\), which factors as \\( (x+6)(x+8)=0 \\), so \\( x=-6 \\) or \\( x=-8 \\), giving \\( (-8, 6) \\text{ and } (-6, 8) \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( (8, -6) \\text{ and } (6, -8) \\)",
      "\\( (-6, 6) \\text{ and } (-8, 8) \\)",
      "\\( (-8, 8) \\text{ and } (-6, 6) \\)",
      "\\( (-8, 6) \\text{ and } (-6, 8) \\)"
    ]
  },
  {
    "id": "y11a-3b-q24c",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the coordinates of the two points of intersection of the line \\( y = x + 21 \\) and the circle \\( x^2 + y^2 = 225 \\). (Format: '(-3, 4) and (-4, 3)' or similar, enter coordinates ordered by increasing x)",
    "a": "3",
    "solutionSteps": [
      {
        "explanation": "General method: substitute \\( y = x + 21 \\) into \\( x^2+y^2=225 \\) to get a quadratic in \\( x \\), then factorise and solve.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Substitute the linear equation into the circle equation.",
        "workingOut": "\\(x^2 + (x + 21)^2 = 225\\)",
        "graphData": null
      },
      {
        "explanation": "Expand and simplify the equation to obtain a quadratic equation.",
        "workingOut": "\\(2x^2 + 42x + 216 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Divide by 2 and factorise the quadratic trinomial.",
        "workingOut": "\\(x^2 + 21x + 108 = 0 \\implies (x + 9)(x + 12) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Determine the x-coordinates, then solve for the corresponding y-coordinates.",
        "workingOut": "\\(x = -12 \\implies y = 9 \\quad \\text{and} \\quad x = -9 \\implies y = 12\\)",
        "graphData": null
      },
      {
        "explanation": "This gives \\( x^2 + 21x + 108 = 0 \\), which factors as \\( (x+9)(x+12)=0 \\), so \\( x=-9 \\) or \\( x=-12 \\), giving \\( (-12, 9) \\text{ and } (-9, 12) \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( (-12, 12) \\text{ and } (-9, 9) \\)",
      "\\( (-9, 9) \\text{ and } (-12, 12) \\)",
      "\\( (12, -9) \\text{ and } (9, -12) \\)",
      "\\( (-12, 9) \\text{ and } (-9, 12) \\)"
    ]
  },
  {
    "id": "y11a-3b-q24d",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the coordinates of the two points of intersection of the line \\( y = x + 28 \\) and the circle \\( x^2 + y^2 = 400 \\). (Format: '(-3, 4) and (-4, 3)' or similar, enter coordinates ordered by increasing x)",
    "a": "3",
    "solutionSteps": [
      {
        "explanation": "General method: substitute \\( y = x + 28 \\) into \\( x^2+y^2=400 \\) to get a quadratic in \\( x \\), then factorise and solve.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Substitute the linear equation into the circle equation.",
        "workingOut": "\\(x^2 + (x + 28)^2 = 400\\)",
        "graphData": null
      },
      {
        "explanation": "Expand and simplify the equation to obtain a quadratic equation.",
        "workingOut": "\\(2x^2 + 56x + 384 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Divide by 2 and factorise the quadratic trinomial.",
        "workingOut": "\\(x^2 + 28x + 192 = 0 \\implies (x + 12)(x + 16) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Determine the x-coordinates, then solve for the corresponding y-coordinates.",
        "workingOut": "\\(x = -16 \\implies y = 12 \\quad \\text{and} \\quad x = -12 \\implies y = 16\\)",
        "graphData": null
      },
      {
        "explanation": "This gives \\( x^2 + 28x + 192 = 0 \\), which factors as \\( (x+12)(x+16)=0 \\), so \\( x=-12 \\) or \\( x=-16 \\), giving \\( (-16, 12) \\text{ and } (-12, 16) \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( (-16, 16) \\text{ and } (-12, 12) \\)",
      "\\( (-12, 12) \\text{ and } (-16, 16) \\)",
      "\\( (16, -12) \\text{ and } (12, -16) \\)",
      "\\( (-16, 12) \\text{ and } (-12, 16) \\)"
    ]
  },
  {
    "id": "y11a-3b-q24e",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the coordinates of the two points of intersection of the line \\( y = x + 35 \\) and the circle \\( x^2 + y^2 = 625 \\). (Format: '(-3, 4) and (-4, 3)' or similar, enter coordinates ordered by increasing x)",
    "a": "3",
    "solutionSteps": [
      {
        "explanation": "General method: substitute \\( y = x + 35 \\) into \\( x^2+y^2=625 \\) to get a quadratic in \\( x \\), then factorise and solve.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Substitute the linear equation into the circle equation.",
        "workingOut": "\\(x^2 + (x + 35)^2 = 625\\)",
        "graphData": null
      },
      {
        "explanation": "Expand and simplify the equation to obtain a quadratic equation.",
        "workingOut": "\\(2x^2 + 70x + 600 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Divide by 2 and factorise the quadratic trinomial.",
        "workingOut": "\\(x^2 + 35x + 300 = 0 \\implies (x + 15)(x + 20) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Determine the x-coordinates, then solve for the corresponding y-coordinates.",
        "workingOut": "\\(x = -20 \\implies y = 15 \\quad \\text{and} \\quad x = -15 \\implies y = 20\\)",
        "graphData": null
      },
      {
        "explanation": "This gives \\( x^2 + 35x + 300 = 0 \\), which factors as \\( (x+15)(x+20)=0 \\), so \\( x=-15 \\) or \\( x=-20 \\), giving \\( (-20, 15) \\text{ and } (-15, 20) \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( (-15, 15) \\text{ and } (-20, 20) \\)",
      "\\( (-20, 20) \\text{ and } (-15, 15) \\)",
      "\\( (20, -15) \\text{ and } (15, -20) \\)",
      "\\( (-20, 15) \\text{ and } (-15, 20) \\)"
    ]
  },
  {
    "id": "y11a-3b-q24f",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the coordinates of the two points of intersection of the line \\( y = x + 42 \\) and the circle \\( x^2 + y^2 = 900 \\). (Format: '(-3, 4) and (-4, 3)' or similar, enter coordinates ordered by increasing x)",
    "a": "3",
    "solutionSteps": [
      {
        "explanation": "General method: substitute \\( y = x + 42 \\) into \\( x^2+y^2=900 \\) to get a quadratic in \\( x \\), then factorise and solve.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Substitute the linear equation into the circle equation.",
        "workingOut": "\\(x^2 + (x + 42)^2 = 900\\)",
        "graphData": null
      },
      {
        "explanation": "Expand and simplify the equation to obtain a quadratic equation.",
        "workingOut": "\\(2x^2 + 84x + 864 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Divide by 2 and factorise the quadratic trinomial.",
        "workingOut": "\\(x^2 + 42x + 432 = 0 \\implies (x + 18)(x + 24) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Determine the x-coordinates, then solve for the corresponding y-coordinates.",
        "workingOut": "\\(x = -24 \\implies y = 18 \\quad \\text{and} \\quad x = -18 \\implies y = 24\\)",
        "graphData": null
      },
      {
        "explanation": "This gives \\( x^2 + 42x + 432 = 0 \\), which factors as \\( (x+18)(x+24)=0 \\), so \\( x=-18 \\) or \\( x=-24 \\), giving \\( (-24, 18) \\text{ and } (-18, 24) \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( (24, -18) \\text{ and } (18, -24) \\)",
      "\\( (-24, 24) \\text{ and } (-18, 18) \\)",
      "\\( (-18, 18) \\text{ and } (-24, 24) \\)",
      "\\( (-24, 18) \\text{ and } (-18, 24) \\)"
    ]
  },
  {
    "id": "y11a-3b-q24g",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the coordinates of the two points of intersection of the line \\( y = x + 49 \\) and the circle \\( x^2 + y^2 = 1225 \\). (Format: '(-3, 4) and (-4, 3)' or similar, enter coordinates ordered by increasing x)",
    "a": "3",
    "solutionSteps": [
      {
        "explanation": "General method: substitute \\( y = x + 49 \\) into \\( x^2+y^2=1225 \\) to get a quadratic in \\( x \\), then factorise and solve.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Substitute the linear equation into the circle equation.",
        "workingOut": "\\(x^2 + (x + 49)^2 = 1225\\)",
        "graphData": null
      },
      {
        "explanation": "Expand and simplify the equation to obtain a quadratic equation.",
        "workingOut": "\\(2x^2 + 98x + 1176 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Divide by 2 and factorise the quadratic trinomial.",
        "workingOut": "\\(x^2 + 49x + 588 = 0 \\implies (x + 21)(x + 28) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Determine the x-coordinates, then solve for the corresponding y-coordinates.",
        "workingOut": "\\(x = -28 \\implies y = 21 \\quad \\text{and} \\quad x = -21 \\implies y = 28\\)",
        "graphData": null
      },
      {
        "explanation": "This gives \\( x^2 + 49x + 588 = 0 \\), which factors as \\( (x+21)(x+28)=0 \\), so \\( x=-21 \\) or \\( x=-28 \\), giving \\( (-28, 21) \\text{ and } (-21, 28) \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( (-28, 28) \\text{ and } (-21, 21) \\)",
      "\\( (28, -21) \\text{ and } (21, -28) \\)",
      "\\( (-21, 21) \\text{ and } (-28, 28) \\)",
      "\\( (-28, 21) \\text{ and } (-21, 28) \\)"
    ]
  },
  {
    "id": "y11a-3b-q24h",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the coordinates of the two points of intersection of the line \\( y = x + 56 \\) and the circle \\( x^2 + y^2 = 1600 \\). (Format: '(-3, 4) and (-4, 3)' or similar, enter coordinates ordered by increasing x)",
    "a": "3",
    "solutionSteps": [
      {
        "explanation": "General method: substitute \\( y = x + 56 \\) into \\( x^2+y^2=1600 \\) to get a quadratic in \\( x \\), then factorise and solve.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Substitute the linear equation into the circle equation.",
        "workingOut": "\\(x^2 + (x + 56)^2 = 1600\\)",
        "graphData": null
      },
      {
        "explanation": "Expand and simplify the equation to obtain a quadratic equation.",
        "workingOut": "\\(2x^2 + 112x + 1536 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Divide by 2 and factorise the quadratic trinomial.",
        "workingOut": "\\(x^2 + 56x + 768 = 0 \\implies (x + 24)(x + 32) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Determine the x-coordinates, then solve for the corresponding y-coordinates.",
        "workingOut": "\\(x = -32 \\implies y = 24 \\quad \\text{and} \\quad x = -24 \\implies y = 32\\)",
        "graphData": null
      },
      {
        "explanation": "This gives \\( x^2 + 56x + 768 = 0 \\), which factors as \\( (x+24)(x+32)=0 \\), so \\( x=-24 \\) or \\( x=-32 \\), giving \\( (-32, 24) \\text{ and } (-24, 32) \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( (32, -24) \\text{ and } (24, -32) \\)",
      "\\( (-32, 32) \\text{ and } (-24, 24) \\)",
      "\\( (-24, 24) \\text{ and } (-32, 32) \\)",
      "\\( (-32, 24) \\text{ and } (-24, 32) \\)"
    ]
  },
  {
    "id": "y11a-3b-q24i",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the coordinates of the two points of intersection of the line \\( y = x + 63 \\) and the circle \\( x^2 + y^2 = 2025 \\). (Format: '(-3, 4) and (-4, 3)' or similar, enter coordinates ordered by increasing x)",
    "a": "3",
    "solutionSteps": [
      {
        "explanation": "General method: substitute \\( y = x + 63 \\) into \\( x^2+y^2=2025 \\) to get a quadratic in \\( x \\), then factorise and solve.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Substitute the linear equation into the circle equation.",
        "workingOut": "\\(x^2 + (x + 63)^2 = 2025\\)",
        "graphData": null
      },
      {
        "explanation": "Expand and simplify the equation to obtain a quadratic equation.",
        "workingOut": "\\(2x^2 + 126x + 1944 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Divide by 2 and factorise the quadratic trinomial.",
        "workingOut": "\\(x^2 + 63x + 972 = 0 \\implies (x + 27)(x + 36) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Determine the x-coordinates, then solve for the corresponding y-coordinates.",
        "workingOut": "\\(x = -36 \\implies y = 27 \\quad \\text{and} \\quad x = -27 \\implies y = 36\\)",
        "graphData": null
      },
      {
        "explanation": "This gives \\( x^2 + 63x + 972 = 0 \\), which factors as \\( (x+27)(x+36)=0 \\), so \\( x=-27 \\) or \\( x=-36 \\), giving \\( (-36, 27) \\text{ and } (-27, 36) \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( (36, -27) \\text{ and } (27, -36) \\)",
      "\\( (-36, 36) \\text{ and } (-27, 27) \\)",
      "\\( (-27, 27) \\text{ and } (-36, 36) \\)",
      "\\( (-36, 27) \\text{ and } (-27, 36) \\)"
    ]
  },
  {
    "id": "y11a-3b-q24j",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the coordinates of the two points of intersection of the line \\( y = x + 70 \\) and the circle \\( x^2 + y^2 = 2500 \\). (Format: '(-3, 4) and (-4, 3)' or similar, enter coordinates ordered by increasing x)",
    "a": "3",
    "solutionSteps": [
      {
        "explanation": "General method: substitute \\( y = x + 70 \\) into \\( x^2+y^2=2500 \\) to get a quadratic in \\( x \\), then factorise and solve.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Substitute the linear equation into the circle equation.",
        "workingOut": "\\(x^2 + (x + 70)^2 = 2500\\)",
        "graphData": null
      },
      {
        "explanation": "Expand and simplify the equation to obtain a quadratic equation.",
        "workingOut": "\\(2x^2 + 140x + 2400 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Divide by 2 and factorise the quadratic trinomial.",
        "workingOut": "\\(x^2 + 70x + 1200 = 0 \\implies (x + 30)(x + 40) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Determine the x-coordinates, then solve for the corresponding y-coordinates.",
        "workingOut": "\\(x = -40 \\implies y = 30 \\quad \\text{and} \\quad x = -30 \\implies y = 40\\)",
        "graphData": null
      },
      {
        "explanation": "This gives \\( x^2 + 70x + 1200 = 0 \\), which factors as \\( (x+30)(x+40)=0 \\), so \\( x=-30 \\) or \\( x=-40 \\), giving \\( (-40, 30) \\text{ and } (-30, 40) \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( (-30, 30) \\text{ and } (-40, 40) \\)",
      "\\( (40, -30) \\text{ and } (30, -40) \\)",
      "\\( (-40, 40) \\text{ and } (-30, 30) \\)",
      "\\( (-40, 30) \\text{ and } (-30, 40) \\)"
    ]
  },
  {
    "id": "y11a-3b-q25a",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Determine the symmetries of the relation defined by the equation \\( \\frac{x^2}{4} + \\frac{y^2}{9} = 1 \\).",
    "opts": [
      "Symmetric with respect to the x-axis, y-axis, and the origin.",
      "Symmetric with respect to the y-axis only.",
      "Symmetric with respect to the x-axis only.",
      "Symmetric with respect to the origin only."
    ],
    "a": "0",
    "solutionSteps": [
      {
        "explanation": "General rule: a curve is symmetric about the \\(y\\)-axis if replacing \\(x\\) with \\(-x\\) leaves the equation unchanged; about the \\(x\\)-axis if replacing \\(y\\) with \\(-y\\) leaves it unchanged; about the origin if replacing both does.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Test for symmetry about the y-axis by substituting -x for x.",
        "workingOut": "\\(\\frac{(-x)^2}{4} + \\frac{y^2}{9} = 1 \\implies \\frac{x^2}{4} + \\frac{y^2}{9} = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Test for symmetry about the x-axis by substituting -y for y.",
        "workingOut": "\\(\\frac{x^2}{4} + \\frac{(-y)^2}{9} = 1 \\implies \\frac{x^2}{4} + \\frac{y^2}{9} = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Test for symmetry about the origin by substituting both -x and -y.",
        "workingOut": "\\(\\frac{(-x)^2}{4} + \\frac{(-y)^2}{9} = 1 \\implies \\frac{x^2}{4} + \\frac{y^2}{9} = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Comparing with the answer options, the correct choice is: \"Symmetric with respect to the x-axis, y-axis, and the origin.\".",
        "workingOut": "",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-3b-q25b",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Determine the symmetries of the relation defined by the equation \\( \\frac{x^2}{16} + \\frac{y^2}{36} = 1 \\).",
    "opts": [
      "Symmetric with respect to the x-axis, y-axis, and the origin.",
      "Symmetric with respect to the y-axis only.",
      "Symmetric with respect to the x-axis only.",
      "Symmetric with respect to the origin only."
    ],
    "a": "0",
    "solutionSteps": [
      {
        "explanation": "General rule: a curve is symmetric about the \\(y\\)-axis if replacing \\(x\\) with \\(-x\\) leaves the equation unchanged; about the \\(x\\)-axis if replacing \\(y\\) with \\(-y\\) leaves it unchanged; about the origin if replacing both does.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Test for symmetry about the y-axis by substituting -x for x.",
        "workingOut": "\\(\\frac{(-x)^2}{16} + \\frac{y^2}{36} = 1 \\implies \\frac{x^2}{16} + \\frac{y^2}{36} = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Test for symmetry about the x-axis by substituting -y for y.",
        "workingOut": "\\(\\frac{x^2}{16} + \\frac{(-y)^2}{36} = 1 \\implies \\frac{x^2}{16} + \\frac{y^2}{36} = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Test for symmetry about the origin by substituting both -x and -y.",
        "workingOut": "\\(\\frac{(-x)^2}{16} + \\frac{(-y)^2}{36} = 1 \\implies \\frac{x^2}{16} + \\frac{y^2}{36} = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Comparing with the answer options, the correct choice is: \"Symmetric with respect to the x-axis, y-axis, and the origin.\".",
        "workingOut": "",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-3b-q25c",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Determine the symmetries of the relation defined by the equation \\( \\frac{x^2}{36} + \\frac{y^2}{81} = 1 \\).",
    "opts": [
      "Symmetric with respect to the x-axis, y-axis, and the origin.",
      "Symmetric with respect to the y-axis only.",
      "Symmetric with respect to the x-axis only.",
      "Symmetric with respect to the origin only."
    ],
    "a": "0",
    "solutionSteps": [
      {
        "explanation": "General rule: a curve is symmetric about the \\(y\\)-axis if replacing \\(x\\) with \\(-x\\) leaves the equation unchanged; about the \\(x\\)-axis if replacing \\(y\\) with \\(-y\\) leaves it unchanged; about the origin if replacing both does.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Test for symmetry about the y-axis by substituting -x for x.",
        "workingOut": "\\(\\frac{(-x)^2}{36} + \\frac{y^2}{81} = 1 \\implies \\frac{x^2}{36} + \\frac{y^2}{81} = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Test for symmetry about the x-axis by substituting -y for y.",
        "workingOut": "\\(\\frac{x^2}{36} + \\frac{(-y)^2}{81} = 1 \\implies \\frac{x^2}{36} + \\frac{y^2}{81} = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Test for symmetry about the origin by substituting both -x and -y.",
        "workingOut": "\\(\\frac{(-x)^2}{36} + \\frac{(-y)^2}{81} = 1 \\implies \\frac{x^2}{36} + \\frac{y^2}{81} = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Comparing with the answer options, the correct choice is: \"Symmetric with respect to the x-axis, y-axis, and the origin.\".",
        "workingOut": "",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-3b-q25d",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Determine the symmetries of the relation defined by the equation \\( \\frac{x^2}{64} + \\frac{y^2}{144} = 1 \\).",
    "opts": [
      "Symmetric with respect to the x-axis, y-axis, and the origin.",
      "Symmetric with respect to the y-axis only.",
      "Symmetric with respect to the x-axis only.",
      "Symmetric with respect to the origin only."
    ],
    "a": "0",
    "solutionSteps": [
      {
        "explanation": "General rule: a curve is symmetric about the \\(y\\)-axis if replacing \\(x\\) with \\(-x\\) leaves the equation unchanged; about the \\(x\\)-axis if replacing \\(y\\) with \\(-y\\) leaves it unchanged; about the origin if replacing both does.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Test for symmetry about the y-axis by substituting -x for x.",
        "workingOut": "\\(\\frac{(-x)^2}{64} + \\frac{y^2}{144} = 1 \\implies \\frac{x^2}{64} + \\frac{y^2}{144} = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Test for symmetry about the x-axis by substituting -y for y.",
        "workingOut": "\\(\\frac{x^2}{64} + \\frac{(-y)^2}{144} = 1 \\implies \\frac{x^2}{64} + \\frac{y^2}{144} = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Test for symmetry about the origin by substituting both -x and -y.",
        "workingOut": "\\(\\frac{(-x)^2}{64} + \\frac{(-y)^2}{144} = 1 \\implies \\frac{x^2}{64} + \\frac{y^2}{144} = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Comparing with the answer options, the correct choice is: \"Symmetric with respect to the x-axis, y-axis, and the origin.\".",
        "workingOut": "",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-3b-q25e",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Determine the symmetries of the relation defined by the equation \\( \\frac{x^2}{100} + \\frac{y^2}{225} = 1 \\).",
    "opts": [
      "Symmetric with respect to the x-axis, y-axis, and the origin.",
      "Symmetric with respect to the y-axis only.",
      "Symmetric with respect to the x-axis only.",
      "Symmetric with respect to the origin only."
    ],
    "a": "0",
    "solutionSteps": [
      {
        "explanation": "General rule: a curve is symmetric about the \\(y\\)-axis if replacing \\(x\\) with \\(-x\\) leaves the equation unchanged; about the \\(x\\)-axis if replacing \\(y\\) with \\(-y\\) leaves it unchanged; about the origin if replacing both does.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Test for symmetry about the y-axis by substituting -x for x.",
        "workingOut": "\\(\\frac{(-x)^2}{100} + \\frac{y^2}{225} = 1 \\implies \\frac{x^2}{100} + \\frac{y^2}{225} = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Test for symmetry about the x-axis by substituting -y for y.",
        "workingOut": "\\(\\frac{x^2}{100} + \\frac{(-y)^2}{225} = 1 \\implies \\frac{x^2}{100} + \\frac{y^2}{225} = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Test for symmetry about the origin by substituting both -x and -y.",
        "workingOut": "\\(\\frac{(-x)^2}{100} + \\frac{(-y)^2}{225} = 1 \\implies \\frac{x^2}{100} + \\frac{y^2}{225} = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Comparing with the answer options, the correct choice is: \"Symmetric with respect to the x-axis, y-axis, and the origin.\".",
        "workingOut": "",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-3b-q25f",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Determine the symmetries of the relation defined by the equation \\( \\frac{x^2}{144} + \\frac{y^2}{324} = 1 \\).",
    "opts": [
      "Symmetric with respect to the x-axis, y-axis, and the origin.",
      "Symmetric with respect to the y-axis only.",
      "Symmetric with respect to the x-axis only.",
      "Symmetric with respect to the origin only."
    ],
    "a": "0",
    "solutionSteps": [
      {
        "explanation": "General rule: a curve is symmetric about the \\(y\\)-axis if replacing \\(x\\) with \\(-x\\) leaves the equation unchanged; about the \\(x\\)-axis if replacing \\(y\\) with \\(-y\\) leaves it unchanged; about the origin if replacing both does.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Test for symmetry about the y-axis by substituting -x for x.",
        "workingOut": "\\(\\frac{(-x)^2}{144} + \\frac{y^2}{324} = 1 \\implies \\frac{x^2}{144} + \\frac{y^2}{324} = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Test for symmetry about the x-axis by substituting -y for y.",
        "workingOut": "\\(\\frac{x^2}{144} + \\frac{(-y)^2}{324} = 1 \\implies \\frac{x^2}{144} + \\frac{y^2}{324} = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Test for symmetry about the origin by substituting both -x and -y.",
        "workingOut": "\\(\\frac{(-x)^2}{144} + \\frac{(-y)^2}{324} = 1 \\implies \\frac{x^2}{144} + \\frac{y^2}{324} = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Comparing with the answer options, the correct choice is: \"Symmetric with respect to the x-axis, y-axis, and the origin.\".",
        "workingOut": "",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-3b-q25g",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Determine the symmetries of the relation defined by the equation \\( \\frac{x^2}{196} + \\frac{y^2}{441} = 1 \\).",
    "opts": [
      "Symmetric with respect to the x-axis, y-axis, and the origin.",
      "Symmetric with respect to the y-axis only.",
      "Symmetric with respect to the x-axis only.",
      "Symmetric with respect to the origin only."
    ],
    "a": "0",
    "solutionSteps": [
      {
        "explanation": "General rule: a curve is symmetric about the \\(y\\)-axis if replacing \\(x\\) with \\(-x\\) leaves the equation unchanged; about the \\(x\\)-axis if replacing \\(y\\) with \\(-y\\) leaves it unchanged; about the origin if replacing both does.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Test for symmetry about the y-axis by substituting -x for x.",
        "workingOut": "\\(\\frac{(-x)^2}{196} + \\frac{y^2}{441} = 1 \\implies \\frac{x^2}{196} + \\frac{y^2}{441} = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Test for symmetry about the x-axis by substituting -y for y.",
        "workingOut": "\\(\\frac{x^2}{196} + \\frac{(-y)^2}{441} = 1 \\implies \\frac{x^2}{196} + \\frac{y^2}{441} = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Test for symmetry about the origin by substituting both -x and -y.",
        "workingOut": "\\(\\frac{(-x)^2}{196} + \\frac{(-y)^2}{441} = 1 \\implies \\frac{x^2}{196} + \\frac{y^2}{441} = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Comparing with the answer options, the correct choice is: \"Symmetric with respect to the x-axis, y-axis, and the origin.\".",
        "workingOut": "",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-3b-q25h",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Determine the symmetries of the relation defined by the equation \\( \\frac{x^2}{256} + \\frac{y^2}{576} = 1 \\).",
    "opts": [
      "Symmetric with respect to the x-axis, y-axis, and the origin.",
      "Symmetric with respect to the y-axis only.",
      "Symmetric with respect to the x-axis only.",
      "Symmetric with respect to the origin only."
    ],
    "a": "0",
    "solutionSteps": [
      {
        "explanation": "General rule: a curve is symmetric about the \\(y\\)-axis if replacing \\(x\\) with \\(-x\\) leaves the equation unchanged; about the \\(x\\)-axis if replacing \\(y\\) with \\(-y\\) leaves it unchanged; about the origin if replacing both does.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Test for symmetry about the y-axis by substituting -x for x.",
        "workingOut": "\\(\\frac{(-x)^2}{256} + \\frac{y^2}{576} = 1 \\implies \\frac{x^2}{256} + \\frac{y^2}{576} = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Test for symmetry about the x-axis by substituting -y for y.",
        "workingOut": "\\(\\frac{x^2}{256} + \\frac{(-y)^2}{576} = 1 \\implies \\frac{x^2}{256} + \\frac{y^2}{576} = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Test for symmetry about the origin by substituting both -x and -y.",
        "workingOut": "\\(\\frac{(-x)^2}{256} + \\frac{(-y)^2}{576} = 1 \\implies \\frac{x^2}{256} + \\frac{y^2}{576} = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Comparing with the answer options, the correct choice is: \"Symmetric with respect to the x-axis, y-axis, and the origin.\".",
        "workingOut": "",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-3b-q25i",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Determine the symmetries of the relation defined by the equation \\( \\frac{x^2}{324} + \\frac{y^2}{729} = 1 \\).",
    "opts": [
      "Symmetric with respect to the x-axis, y-axis, and the origin.",
      "Symmetric with respect to the y-axis only.",
      "Symmetric with respect to the x-axis only.",
      "Symmetric with respect to the origin only."
    ],
    "a": "0",
    "solutionSteps": [
      {
        "explanation": "General rule: a curve is symmetric about the \\(y\\)-axis if replacing \\(x\\) with \\(-x\\) leaves the equation unchanged; about the \\(x\\)-axis if replacing \\(y\\) with \\(-y\\) leaves it unchanged; about the origin if replacing both does.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Test for symmetry about the y-axis by substituting -x for x.",
        "workingOut": "\\(\\frac{(-x)^2}{324} + \\frac{y^2}{729} = 1 \\implies \\frac{x^2}{324} + \\frac{y^2}{729} = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Test for symmetry about the x-axis by substituting -y for y.",
        "workingOut": "\\(\\frac{x^2}{324} + \\frac{(-y)^2}{729} = 1 \\implies \\frac{x^2}{324} + \\frac{y^2}{729} = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Test for symmetry about the origin by substituting both -x and -y.",
        "workingOut": "\\(\\frac{(-x)^2}{324} + \\frac{(-y)^2}{729} = 1 \\implies \\frac{x^2}{324} + \\frac{y^2}{729} = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Comparing with the answer options, the correct choice is: \"Symmetric with respect to the x-axis, y-axis, and the origin.\".",
        "workingOut": "",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-3b-q25j",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Determine the symmetries of the relation defined by the equation \\( \\frac{x^2}{400} + \\frac{y^2}{900} = 1 \\).",
    "opts": [
      "Symmetric with respect to the x-axis, y-axis, and the origin.",
      "Symmetric with respect to the y-axis only.",
      "Symmetric with respect to the x-axis only.",
      "Symmetric with respect to the origin only."
    ],
    "a": "0",
    "solutionSteps": [
      {
        "explanation": "General rule: a curve is symmetric about the \\(y\\)-axis if replacing \\(x\\) with \\(-x\\) leaves the equation unchanged; about the \\(x\\)-axis if replacing \\(y\\) with \\(-y\\) leaves it unchanged; about the origin if replacing both does.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Test for symmetry about the y-axis by substituting -x for x.",
        "workingOut": "\\(\\frac{(-x)^2}{400} + \\frac{y^2}{900} = 1 \\implies \\frac{x^2}{400} + \\frac{y^2}{900} = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Test for symmetry about the x-axis by substituting -y for y.",
        "workingOut": "\\(\\frac{x^2}{400} + \\frac{(-y)^2}{900} = 1 \\implies \\frac{x^2}{400} + \\frac{y^2}{900} = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Test for symmetry about the origin by substituting both -x and -y.",
        "workingOut": "\\(\\frac{(-x)^2}{400} + \\frac{(-y)^2}{900} = 1 \\implies \\frac{x^2}{400} + \\frac{y^2}{900} = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Comparing with the answer options, the correct choice is: \"Symmetric with respect to the x-axis, y-axis, and the origin.\".",
        "workingOut": "",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-3b-q26a",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the range of the function \\( f(x) = 2 - \\sqrt{4 - x^2} \\). (Format: '0 <= y <= 2')",
    "a": "3",
    "solutionSteps": [
      {
        "explanation": "General method: \\( f(x) = 2 - \\sqrt{4 - x^2} \\) is smallest when the square-root term is largest, and largest when the square-root term is \\(0\\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Determine the domain of the function based on the radicand definition.",
        "workingOut": "\\(4 - x^2 \\ge 0 \\implies x^2 \\le 4 \\implies -2 \\le x \\le 2\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the range of the radical term.",
        "workingOut": "\\(\\text{Minimum value is } 0 \\text{ (at } x = \\pm 2 \\text{), Maximum value is } 2 \\text{ (at } x = 0\\text{)}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the boundaries of the radical term back into the function equation.",
        "workingOut": "\\(\\text{Maximum } f(x) = 2 - 0 = 2, \\quad \\text{Minimum } f(x) = 2 - 2 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Conclude the range of the function using inequalities.",
        "workingOut": "\\(0 \\le y \\le 2\\)",
        "graphData": null
      },
      {
        "explanation": "The square root ranges from \\(0\\) to \\(2\\), so \\(f\\) ranges from \\(2-2=0\\) to \\(2-0=2\\): \\( 0 \\leq y \\leq 2 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( 0 \\leq y \\leq 4 \\)",
      "\\( 1 \\leq y \\leq 3 \\)",
      "\\( -2 \\leq y \\leq 2 \\)",
      "\\( 0 \\leq y \\leq 2 \\)"
    ]
  },
  {
    "id": "y11a-3b-q26b",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the range of the function \\( f(x) = 4 - \\sqrt{9 - x^2} \\). (Format: '1 <= y <= 4')",
    "a": "3",
    "solutionSteps": [
      {
        "explanation": "General method: \\( f(x) = 4 - \\sqrt{9 - x^2} \\) is smallest when the square-root term is largest, and largest when the square-root term is \\(0\\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Determine the domain of the function based on the radicand definition.",
        "workingOut": "\\(9 - x^2 \\ge 0 \\implies x^2 \\le 9 \\implies -3 \\le x \\le 3\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the range of the radical term.",
        "workingOut": "\\(\\text{Minimum value is } 0 \\text{ (at } x = \\pm 3 \\text{), Maximum value is } 3 \\text{ (at } x = 0\\text{)}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the boundaries of the radical term back into the function equation.",
        "workingOut": "\\(\\text{Maximum } f(x) = 4 - 0 = 4, \\quad \\text{Minimum } f(x) = 4 - 3 = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Conclude the range of the function using inequalities.",
        "workingOut": "\\(1 \\le y \\le 4\\)",
        "graphData": null
      },
      {
        "explanation": "The square root ranges from \\(0\\) to \\(3\\), so \\(f\\) ranges from \\(4-3=1\\) to \\(4-0=4\\): \\( 1 \\leq y \\leq 4 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( 2 \\leq y \\leq 5 \\)",
      "\\( 1 \\leq y \\leq 6 \\)",
      "\\( -3 \\leq y \\leq 3 \\)",
      "\\( 1 \\leq y \\leq 4 \\)"
    ]
  },
  {
    "id": "y11a-3b-q26c",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the range of the function \\( f(x) = 6 - \\sqrt{16 - x^2} \\). (Format: '2 <= y <= 6')",
    "a": "3",
    "solutionSteps": [
      {
        "explanation": "General method: \\( f(x) = 6 - \\sqrt{16 - x^2} \\) is smallest when the square-root term is largest, and largest when the square-root term is \\(0\\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Determine the domain of the function based on the radicand definition.",
        "workingOut": "\\(16 - x^2 \\ge 0 \\implies x^2 \\le 16 \\implies -4 \\le x \\le 4\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the range of the radical term.",
        "workingOut": "\\(\\text{Minimum value is } 0 \\text{ (at } x = \\pm 4 \\text{), Maximum value is } 4 \\text{ (at } x = 0\\text{)}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the boundaries of the radical term back into the function equation.",
        "workingOut": "\\(\\text{Maximum } f(x) = 6 - 0 = 6, \\quad \\text{Minimum } f(x) = 6 - 4 = 2\\)",
        "graphData": null
      },
      {
        "explanation": "Conclude the range of the function using inequalities.",
        "workingOut": "\\(2 \\le y \\le 6\\)",
        "graphData": null
      },
      {
        "explanation": "The square root ranges from \\(0\\) to \\(4\\), so \\(f\\) ranges from \\(6-4=2\\) to \\(6-0=6\\): \\( 2 \\leq y \\leq 6 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( 2 \\leq y \\leq 8 \\)",
      "\\( -4 \\leq y \\leq 4 \\)",
      "\\( 3 \\leq y \\leq 7 \\)",
      "\\( 2 \\leq y \\leq 6 \\)"
    ]
  },
  {
    "id": "y11a-3b-q26d",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the range of the function \\( f(x) = 8 - \\sqrt{25 - x^2} \\). (Format: '3 <= y <= 8')",
    "a": "3",
    "solutionSteps": [
      {
        "explanation": "General method: \\( f(x) = 8 - \\sqrt{25 - x^2} \\) is smallest when the square-root term is largest, and largest when the square-root term is \\(0\\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Determine the domain of the function based on the radicand definition.",
        "workingOut": "\\(25 - x^2 \\ge 0 \\implies x^2 \\le 25 \\implies -5 \\le x \\le 5\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the range of the radical term.",
        "workingOut": "\\(\\text{Minimum value is } 0 \\text{ (at } x = \\pm 5 \\text{), Maximum value is } 5 \\text{ (at } x = 0\\text{)}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the boundaries of the radical term back into the function equation.",
        "workingOut": "\\(\\text{Maximum } f(x) = 8 - 0 = 8, \\quad \\text{Minimum } f(x) = 8 - 5 = 3\\)",
        "graphData": null
      },
      {
        "explanation": "Conclude the range of the function using inequalities.",
        "workingOut": "\\(3 \\le y \\le 8\\)",
        "graphData": null
      },
      {
        "explanation": "The square root ranges from \\(0\\) to \\(5\\), so \\(f\\) ranges from \\(8-5=3\\) to \\(8-0=8\\): \\( 3 \\leq y \\leq 8 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( 3 \\leq y \\leq 10 \\)",
      "\\( -5 \\leq y \\leq 5 \\)",
      "\\( 4 \\leq y \\leq 9 \\)",
      "\\( 3 \\leq y \\leq 8 \\)"
    ]
  },
  {
    "id": "y11a-3b-q26e",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the range of the function \\( f(x) = 10 - \\sqrt{36 - x^2} \\). (Format: '4 <= y <= 10')",
    "a": "3",
    "solutionSteps": [
      {
        "explanation": "General method: \\( f(x) = 10 - \\sqrt{36 - x^2} \\) is smallest when the square-root term is largest, and largest when the square-root term is \\(0\\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Determine the domain of the function based on the radicand definition.",
        "workingOut": "\\(36 - x^2 \\ge 0 \\implies x^2 \\le 36 \\implies -6 \\le x \\le 6\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the range of the radical term.",
        "workingOut": "\\(\\text{Minimum value is } 0 \\text{ (at } x = \\pm 6 \\text{), Maximum value is } 6 \\text{ (at } x = 0\\text{)}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the boundaries of the radical term back into the function equation.",
        "workingOut": "\\(\\text{Maximum } f(x) = 10 - 0 = 10, \\quad \\text{Minimum } f(x) = 10 - 6 = 4\\)",
        "graphData": null
      },
      {
        "explanation": "Conclude the range of the function using inequalities.",
        "workingOut": "\\(4 \\le y \\le 10\\)",
        "graphData": null
      },
      {
        "explanation": "The square root ranges from \\(0\\) to \\(6\\), so \\(f\\) ranges from \\(10-6=4\\) to \\(10-0=10\\): \\( 4 \\leq y \\leq 10 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( -6 \\leq y \\leq 6 \\)",
      "\\( 4 \\leq y \\leq 12 \\)",
      "\\( 5 \\leq y \\leq 11 \\)",
      "\\( 4 \\leq y \\leq 10 \\)"
    ]
  },
  {
    "id": "y11a-3b-q26f",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the range of the function \\( f(x) = 12 - \\sqrt{49 - x^2} \\). (Format: '5 <= y <= 12')",
    "a": "3",
    "solutionSteps": [
      {
        "explanation": "General method: \\( f(x) = 12 - \\sqrt{49 - x^2} \\) is smallest when the square-root term is largest, and largest when the square-root term is \\(0\\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Determine the domain of the function based on the radicand definition.",
        "workingOut": "\\(49 - x^2 \\ge 0 \\implies x^2 \\le 49 \\implies -7 \\le x \\le 7\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the range of the radical term.",
        "workingOut": "\\(\\text{Minimum value is } 0 \\text{ (at } x = \\pm 7 \\text{), Maximum value is } 7 \\text{ (at } x = 0\\text{)}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the boundaries of the radical term back into the function equation.",
        "workingOut": "\\(\\text{Maximum } f(x) = 12 - 0 = 12, \\quad \\text{Minimum } f(x) = 12 - 7 = 5\\)",
        "graphData": null
      },
      {
        "explanation": "Conclude the range of the function using inequalities.",
        "workingOut": "\\(5 \\le y \\le 12\\)",
        "graphData": null
      },
      {
        "explanation": "The square root ranges from \\(0\\) to \\(7\\), so \\(f\\) ranges from \\(12-7=5\\) to \\(12-0=12\\): \\( 5 \\leq y \\leq 12 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( 5 \\leq y \\leq 14 \\)",
      "\\( -7 \\leq y \\leq 7 \\)",
      "\\( 6 \\leq y \\leq 13 \\)",
      "\\( 5 \\leq y \\leq 12 \\)"
    ]
  },
  {
    "id": "y11a-3b-q26g",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the range of the function \\( f(x) = 14 - \\sqrt{64 - x^2} \\). (Format: '6 <= y <= 14')",
    "a": "3",
    "solutionSteps": [
      {
        "explanation": "General method: \\( f(x) = 14 - \\sqrt{64 - x^2} \\) is smallest when the square-root term is largest, and largest when the square-root term is \\(0\\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Determine the domain of the function based on the radicand definition.",
        "workingOut": "\\(64 - x^2 \\ge 0 \\implies x^2 \\le 64 \\implies -8 \\le x \\le 8\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the range of the radical term.",
        "workingOut": "\\(\\text{Minimum value is } 0 \\text{ (at } x = \\pm 8 \\text{), Maximum value is } 8 \\text{ (at } x = 0\\text{)}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the boundaries of the radical term back into the function equation.",
        "workingOut": "\\(\\text{Maximum } f(x) = 14 - 0 = 14, \\quad \\text{Minimum } f(x) = 14 - 8 = 6\\)",
        "graphData": null
      },
      {
        "explanation": "Conclude the range of the function using inequalities.",
        "workingOut": "\\(6 \\le y \\le 14\\)",
        "graphData": null
      },
      {
        "explanation": "The square root ranges from \\(0\\) to \\(8\\), so \\(f\\) ranges from \\(14-8=6\\) to \\(14-0=14\\): \\( 6 \\leq y \\leq 14 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( -8 \\leq y \\leq 8 \\)",
      "\\( 7 \\leq y \\leq 15 \\)",
      "\\( 6 \\leq y \\leq 16 \\)",
      "\\( 6 \\leq y \\leq 14 \\)"
    ]
  },
  {
    "id": "y11a-3b-q26h",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the range of the function \\( f(x) = 16 - \\sqrt{81 - x^2} \\). (Format: '7 <= y <= 16')",
    "a": "3",
    "solutionSteps": [
      {
        "explanation": "General method: \\( f(x) = 16 - \\sqrt{81 - x^2} \\) is smallest when the square-root term is largest, and largest when the square-root term is \\(0\\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Determine the domain of the function based on the radicand definition.",
        "workingOut": "\\(81 - x^2 \\ge 0 \\implies x^2 \\le 81 \\implies -9 \\le x \\le 9\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the range of the radical term.",
        "workingOut": "\\(\\text{Minimum value is } 0 \\text{ (at } x = \\pm 9 \\text{), Maximum value is } 9 \\text{ (at } x = 0\\text{)}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the boundaries of the radical term back into the function equation.",
        "workingOut": "\\(\\text{Maximum } f(x) = 16 - 0 = 16, \\quad \\text{Minimum } f(x) = 16 - 9 = 7\\)",
        "graphData": null
      },
      {
        "explanation": "Conclude the range of the function using inequalities.",
        "workingOut": "\\(7 \\le y \\le 16\\)",
        "graphData": null
      },
      {
        "explanation": "The square root ranges from \\(0\\) to \\(9\\), so \\(f\\) ranges from \\(16-9=7\\) to \\(16-0=16\\): \\( 7 \\leq y \\leq 16 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( 8 \\leq y \\leq 17 \\)",
      "\\( -9 \\leq y \\leq 9 \\)",
      "\\( 7 \\leq y \\leq 18 \\)",
      "\\( 7 \\leq y \\leq 16 \\)"
    ]
  },
  {
    "id": "y11a-3b-q26i",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the range of the function \\( f(x) = 18 - \\sqrt{100 - x^2} \\). (Format: '8 <= y <= 18')",
    "a": "3",
    "solutionSteps": [
      {
        "explanation": "General method: \\( f(x) = 18 - \\sqrt{100 - x^2} \\) is smallest when the square-root term is largest, and largest when the square-root term is \\(0\\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Determine the domain of the function based on the radicand definition.",
        "workingOut": "\\(100 - x^2 \\ge 0 \\implies x^2 \\le 100 \\implies -10 \\le x \\le 10\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the range of the radical term.",
        "workingOut": "\\(\\text{Minimum value is } 0 \\text{ (at } x = \\pm 10 \\text{), Maximum value is } 10 \\text{ (at } x = 0\\text{)}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the boundaries of the radical term back into the function equation.",
        "workingOut": "\\(\\text{Maximum } f(x) = 18 - 0 = 18, \\quad \\text{Minimum } f(x) = 18 - 10 = 8\\)",
        "graphData": null
      },
      {
        "explanation": "Conclude the range of the function using inequalities.",
        "workingOut": "\\(8 \\le y \\le 18\\)",
        "graphData": null
      },
      {
        "explanation": "The square root ranges from \\(0\\) to \\(10\\), so \\(f\\) ranges from \\(18-10=8\\) to \\(18-0=18\\): \\( 8 \\leq y \\leq 18 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( 9 \\leq y \\leq 19 \\)",
      "\\( -10 \\leq y \\leq 10 \\)",
      "\\( 8 \\leq y \\leq 20 \\)",
      "\\( 8 \\leq y \\leq 18 \\)"
    ]
  },
  {
    "id": "y11a-3b-q26j",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the range of the function \\( f(x) = 20 - \\sqrt{121 - x^2} \\). (Format: '9 <= y <= 20')",
    "a": "3",
    "solutionSteps": [
      {
        "explanation": "General method: \\( f(x) = 20 - \\sqrt{121 - x^2} \\) is smallest when the square-root term is largest, and largest when the square-root term is \\(0\\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Determine the domain of the function based on the radicand definition.",
        "workingOut": "\\(121 - x^2 \\ge 0 \\implies x^2 \\le 121 \\implies -11 \\le x \\le 11\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the range of the radical term.",
        "workingOut": "\\(\\text{Minimum value is } 0 \\text{ (at } x = \\pm 11 \\text{), Maximum value is } 11 \\text{ (at } x = 0\\text{)}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the boundaries of the radical term back into the function equation.",
        "workingOut": "\\(\\text{Maximum } f(x) = 20 - 0 = 20, \\quad \\text{Minimum } f(x) = 20 - 11 = 9\\)",
        "graphData": null
      },
      {
        "explanation": "Conclude the range of the function using inequalities.",
        "workingOut": "\\(9 \\le y \\le 20\\)",
        "graphData": null
      },
      {
        "explanation": "The square root ranges from \\(0\\) to \\(11\\), so \\(f\\) ranges from \\(20-11=9\\) to \\(20-0=20\\): \\( 9 \\leq y \\leq 20 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "opts": [
      "\\( 9 \\leq y \\leq 22 \\)",
      "\\( 10 \\leq y \\leq 21 \\)",
      "\\( -11 \\leq y \\leq 11 \\)",
      "\\( 9 \\leq y \\leq 20 \\)"
    ]
  }
];
