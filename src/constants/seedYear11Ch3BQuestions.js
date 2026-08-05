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
        "explanation": "Identify the relation and the goal. We need to determine if the given graph or relation represents a function.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Apply the vertical line test: a function must pass the vertical line test, meaning no vertical line can cross the graph more than once.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Examine the specific intersections. If a vertical line is drawn, check how many times it intersects the curve.",
        "workingOut": "\\(x^2 + y^2 = 16 \\implies 2^2 + y^2 = 16 \\implies y = \\pm \\sqrt{12}\\)",
        "graphData": null
      },
      {
        "explanation": "Conclude based on the test. **Warning:** Remember, circles and sideways parabolas fail the vertical line test. If a vertical line intersects the curve more than once, it is a relation, not a function.",
        "workingOut": "\\( \\text{Final Answer} \\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 350,
        "boundingbox": [
          -5,
          5,
          5,
          -5
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-5,0], [5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-5], [0,5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('circle', [[0,0], 4], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('text', [0.2, 4.2, '4'], {fontSize: 12});\nboard.create('text', [0.2, -4.2, '-4'], {fontSize: 12});\nboard.create('text', [4.2, 0.2, '4'], {fontSize: 12});\nboard.create('text', [-4.7, 0.2, '-4'], {fontSize: 12});\nboard.unsuspendUpdate();"
      }
    },
    "options": [
      {
        "text": "No — a vertical line (e.g. \\( x = 2 \\)) crosses the circle twice, at \\( (2, \\sqrt{12}) \\) and \\( (2, -\\sqrt{12}) \\).",
        "imageUrl": ""
      },
      {
        "text": "Yes — every \\( x \\)-value on the circle has exactly one \\( y \\)-value.",
        "imageUrl": ""
      },
      {
        "text": "No — the circle is not centred at the origin.",
        "imageUrl": ""
      },
      {
        "text": "Yes — the circle passes the horizontal line test.",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
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
        "explanation": "Identify the relation and the goal. We need to determine if the given graph or relation represents a function.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Apply the vertical line test: a function must pass the vertical line test, meaning no vertical line can cross the graph more than once.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Examine the specific intersections. If a vertical line is drawn, check how many times it intersects the curve.",
        "workingOut": "\\(x = \\sqrt{9-y^2} \\implies 1.5^2 + y^2 = 9 \\implies y = \\pm \\sqrt{6.75} \\approx \\pm 2.6\\)",
        "graphData": null
      },
      {
        "explanation": "Conclude based on the test. **Warning:** Remember, circles and sideways parabolas fail the vertical line test. If a vertical line intersects the curve more than once, it is a relation, not a function.",
        "workingOut": "\\( \\text{Final Answer} \\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 350,
        "boundingbox": [
          -4,
          4,
          4,
          -4
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-1.5,0], [4,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.5], [0,3.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('curve', [function(t){ return 3*Math.cos(t); }, function(t){ return 3*Math.sin(t); }, Math.PI/2, 3*Math.PI/2], {strokeColor: '#4f46e5', strokeWidth: 2, firstArrow: false, lastArrow: false});\nboard.create('text', [0.2, 3.1, '3'], {fontSize: 12});\nboard.create('text', [0.2, -3.1, '-3'], {fontSize: 12});\nboard.create('text', [3.1, 0.2, '3'], {fontSize: 12});\nboard.unsuspendUpdate();"
      }
    },
    "options": [
      {
        "text": "Yes — a semicircle always passes the vertical line test.",
        "imageUrl": ""
      },
      {
        "text": "No — a vertical line (e.g. \\( x = 1.5 \\)) crosses the semicircle twice.",
        "imageUrl": ""
      },
      {
        "text": "No — the semicircle has open endpoints.",
        "imageUrl": ""
      },
      {
        "text": "Yes — every \\( x \\)-value gives a unique \\( y \\)-value.",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
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
        "explanation": "Identify the relation and the goal. We need to determine if the given graph or relation represents a function.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Apply the vertical line test: a function must pass the vertical line test, meaning no vertical line can cross the graph more than once.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Examine the specific intersections. If a vertical line is drawn, check how many times it intersects the curve.",
        "workingOut": "\\(y^3 - 4y = 1 \\implies \\text{three real solutions for } y\\)",
        "graphData": null
      },
      {
        "explanation": "Conclude based on the test. **Warning:** Remember, circles and sideways parabolas fail the vertical line test. If a vertical line intersects the curve more than once, it is a relation, not a function.",
        "workingOut": "\\( \\text{Final Answer} \\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 175,
        "boundingbox": [
          -6,
          3,
          6,
          -3
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-4.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.5], [0,3.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('curve', [function(t){ return t*t*t - 4*t; }, function(t){ return t; }, -2.5, 2.5], {strokeColor: '#4f46e5', strokeWidth: 2, firstArrow: false, lastArrow: false});\nboard.unsuspendUpdate();"
      }
    },
    "options": [
      {
        "text": "Yes — the curve is symmetric about the origin.",
        "imageUrl": ""
      },
      {
        "text": "No — a vertical line (e.g. \\( x = 1 \\)) crosses the curve three times.",
        "imageUrl": ""
      },
      {
        "text": "No — the curve does not pass through the origin.",
        "imageUrl": ""
      },
      {
        "text": "Yes — every \\( x \\)-value gives one \\( y \\)-value.",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
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
        "explanation": "Identify the relation and the goal. We need to determine if the given graph or relation represents a function.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Apply the vertical line test: a function must pass the vertical line test, meaning no vertical line can cross the graph more than once.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Examine the specific intersections. If a vertical line is drawn, check how many times it intersects the curve.",
        "workingOut": "\\(1 = 3 - \\frac{y^2}{2} \\implies y^2 = 4 \\implies y = \\pm 2\\)",
        "graphData": null
      },
      {
        "explanation": "Conclude based on the test. **Warning:** Remember, circles and sideways parabolas fail the vertical line test. If a vertical line intersects the curve more than once, it is a relation, not a function.",
        "workingOut": "\\( \\text{Final Answer} \\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 350,
        "boundingbox": [
          -4,
          4,
          4,
          -4
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-4.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.5], [0,3.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('curve', [function(t){ return 3 - t*t/2; }, function(t){ return t; }, -3.5, 3.5], {strokeColor: '#4f46e5', strokeWidth: 2, firstArrow: false, lastArrow: false});\nboard.create('text', [3.1, 0.2, '3'], {fontSize: 12});\nboard.unsuspendUpdate();"
      }
    },
    "options": [
      {
        "text": "No — a vertical line (e.g. \\( x = 1 \\)) crosses the parabola twice, at \\( y = 2 \\) and \\( y = -2 \\).",
        "imageUrl": ""
      },
      {
        "text": "Yes — parabolas always pass the vertical line test.",
        "imageUrl": ""
      },
      {
        "text": "No — the parabola only exists for \\( x < 0 \\).",
        "imageUrl": ""
      },
      {
        "text": "Yes — this parabola opens upwards.",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
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
        "explanation": "Identify the relation and the goal. We need to determine if the given graph or relation represents a function.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Apply the vertical line test: a function must pass the vertical line test, meaning no vertical line can cross the graph more than once.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Examine the specific intersections. If a vertical line is drawn, check how many times it intersects the curve.",
        "workingOut": "\\(y^2 - 1^2 = 4 \\implies y^2 = 5 \\implies y = \\pm \\sqrt{5}\\)",
        "graphData": null
      },
      {
        "explanation": "Conclude based on the test. **Warning:** Remember, circles and sideways parabolas fail the vertical line test. If a vertical line intersects the curve more than once, it is a relation, not a function.",
        "workingOut": "\\( \\text{Final Answer} \\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 350,
        "boundingbox": [
          -6,
          6,
          6,
          -6
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-4.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-5.5], [0,5.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('functiongraph', [function(x){ return Math.sqrt(4 + x*x); }, -5, 5], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('functiongraph', [function(x){ return -Math.sqrt(4 + x*x); }, -5, 5], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('text', [0.2, 2.2, '2'], {fontSize: 12});\nboard.create('text', [0.2, -2.2, '-2'], {fontSize: 12});\nboard.unsuspendUpdate();"
      }
    },
    "options": [
      {
        "text": "No — a hyperbola has no \\( y \\)-intercepts.",
        "imageUrl": ""
      },
      {
        "text": "Yes — the two branches never share an \\( x \\)-value.",
        "imageUrl": ""
      },
      {
        "text": "No — a vertical line (e.g. \\( x = 1 \\)) crosses both branches, at \\( (1, \\sqrt{5}) \\) and \\( (1, -\\sqrt{5}) \\).",
        "imageUrl": ""
      },
      {
        "text": "Yes — a hyperbola opens along the \\( x \\)-axis only.",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
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
        "explanation": "Identify the relation and the goal. We need to determine if the given graph or relation represents a function.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Apply the vertical line test: a function must pass the vertical line test, meaning no vertical line can cross the graph more than once.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Examine the specific intersections. If a vertical line is drawn, check how many times it intersects the curve.",
        "workingOut": "\\(t^2 - 1 = -0.5 \\implies t = \\pm \\frac{1}{\\sqrt{2}} \\implies y = \\pm \\frac{1}{2\\sqrt{2}} - (\\pm \\frac{1}{\\sqrt{2}}) \\implies y = \\pm \\frac{1}{2\\sqrt{2}}\\)",
        "graphData": null
      },
      {
        "explanation": "Conclude based on the test. **Warning:** Remember, circles and sideways parabolas fail the vertical line test. If a vertical line intersects the curve more than once, it is a relation, not a function.",
        "workingOut": "\\( \\text{Final Answer} \\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 350,
        "boundingbox": [
          -2,
          2,
          2,
          -2
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-2,0], [2,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-1.5], [0,1.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('curve', [function(t){ return t*t - 1; }, function(t){ return t*t*t - t; }, -1.5, 1.5], {strokeColor: '#4f46e5', strokeWidth: 2, firstArrow: false, lastArrow: false});\nboard.unsuspendUpdate();"
      }
    },
    "options": [
      {
        "text": "Yes — the loop only touches itself once.",
        "imageUrl": ""
      },
      {
        "text": "No — the loop is not a closed curve.",
        "imageUrl": ""
      },
      {
        "text": "No — a vertical line (e.g. \\( x = -0.5 \\)) crosses the loop at two points.",
        "imageUrl": ""
      },
      {
        "text": "Yes — every \\( x \\)-value in the loop gives one \\( y \\)-value.",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
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
        "explanation": "Identify the relation and the goal. We need to determine if the given graph or relation represents a function.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Apply the vertical line test: a function must pass the vertical line test, meaning no vertical line can cross the graph more than once.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Examine the specific intersections. If a vertical line is drawn, check how many times it intersects the curve.",
        "workingOut": "",
        "graphData": {
          "jsxGraph": {
            "width": 207,
            "height": 380,
            "boundingbox": [
              -1,
              8,
              5,
              -3
            ],
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-1.5,0], [5.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-2.5], [0,5.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('functiongraph', [function(x){ return x*x - 4*x + 2; }, -1.5, 5.5], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('line', [[2, -10], [2, 10]], {strokeColor: 'red', strokeWidth: 2, dash: 2});\nboard.create('point', [2, -2], {size: 4, face: 'o', color: 'red', fixed: true, withLabel: false});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Conclude based on the test. **Warning:** Remember, circles and sideways parabolas fail the vertical line test. If a vertical line intersects the curve more than once, it is a relation, not a function.",
        "workingOut": "\\( \\text{Final Answer} \\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 207,
        "height": 380,
        "boundingbox": [
          -1,
          8,
          5,
          -3
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-1.5,0], [5.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-2.5], [0,5.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('functiongraph', [function(x){ return x*x - 4*x + 2; }, -1.5, 5.5], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.unsuspendUpdate();"
      }
    },
    "options": [
      {
        "text": "Yes",
        "imageUrl": ""
      },
      {
        "text": "No",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
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
        "explanation": "Identify the relation and the goal. We need to determine if the given graph or relation represents a function.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Apply the vertical line test: a function must pass the vertical line test, meaning no vertical line can cross the graph more than once.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Examine the specific intersections. If a vertical line is drawn, check how many times it intersects the curve.",
        "workingOut": "",
        "graphData": {
          "jsxGraph": {
            "width": 350,
            "height": 292,
            "boundingbox": [
              -6,
              4,
              6,
              -6
            ],
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-6.5,0], [6.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-6.5], [0,6.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('curve', [function(t){ return 5*Math.cos(t); }, function(t){ return 5*Math.sin(t); }, Math.atan2(3,-4), Math.atan2(3,-4) + (2*Math.PI - (Math.atan2(3,-4) - Math.atan2(3,4)))], {strokeColor: '#4f46e5', strokeWidth: 2, firstArrow: false, lastArrow: false});\nboard.create('point', [-4, 3], {size: 3, face: 'o', color: '#4f46e5', fixed: true});\nboard.create('point', [4, 3], {size: 3, face: 'o', color: '#4f46e5', fixed: true});\nboard.create('line', [[0, -10], [0, 10]], {strokeColor: 'red', strokeWidth: 2, dash: 2});\nboard.create('point', [0, 5], {size: 4, face: 'o', color: 'red', fixed: true, withLabel: false});\nboard.create('point', [0, -5], {size: 4, face: 'o', color: 'red', fixed: true, withLabel: false});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Conclude based on the test. **Warning:** Remember, circles and sideways parabolas fail the vertical line test. If a vertical line intersects the curve more than once, it is a relation, not a function.",
        "workingOut": "\\( \\text{Final Answer} \\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 292,
        "boundingbox": [
          -6,
          4,
          6,
          -6
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-6.5,0], [6.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-6.5], [0,6.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('curve', [function(t){ return 5*Math.cos(t); }, function(t){ return 5*Math.sin(t); }, Math.atan2(3,-4), Math.atan2(3,-4) + (2*Math.PI - (Math.atan2(3,-4) - Math.atan2(3,4)))], {strokeColor: '#4f46e5', strokeWidth: 2, firstArrow: false, lastArrow: false});\nboard.create('point', [-4, 3], {size: 3, face: 'o', color: '#4f46e5', fixed: true});\nboard.create('point', [4, 3], {size: 3, face: 'o', color: '#4f46e5', fixed: true});\nboard.unsuspendUpdate();"
      }
    },
    "options": [
      {
        "text": "No",
        "imageUrl": ""
      },
      {
        "text": "Yes",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
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
        "explanation": "Identify the relation and the goal. We need to determine if the given graph or relation represents a function.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Apply the vertical line test: a function must pass the vertical line test, meaning no vertical line can cross the graph more than once.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Examine the specific intersections. If a vertical line is drawn, check how many times it intersects the curve.",
        "workingOut": "",
        "graphData": {
          "jsxGraph": {
            "width": 350,
            "height": 350,
            "boundingbox": [
              -2,
              5,
              5,
              -2
            ],
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-1.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-1.5], [0,4.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('functiongraph', [function(x){ return 3 - x; }, -1.5, 4.5], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('line', [[1, -10], [1, 10]], {strokeColor: 'red', strokeWidth: 2, dash: 2});\nboard.create('point', [1, 1], {size: 4, face: 'o', color: 'red', fixed: true, withLabel: false});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Conclude based on the test. **Warning:** Remember, circles and sideways parabolas fail the vertical line test. If a vertical line intersects the curve more than once, it is a relation, not a function.",
        "workingOut": "\\( \\text{Final Answer} \\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 350,
        "boundingbox": [
          -2,
          5,
          5,
          -2
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-1.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-1.5], [0,4.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('functiongraph', [function(x){ return 3 - x; }, -1.5, 4.5], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.unsuspendUpdate();"
      }
    },
    "options": [
      {
        "text": "Yes",
        "imageUrl": ""
      },
      {
        "text": "No",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
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
        "explanation": "Identify the relation and the goal. We need to determine if the given graph or relation represents a function.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Apply the vertical line test: a function must pass the vertical line test, meaning no vertical line can cross the graph more than once.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Examine the specific intersections. If a vertical line is drawn, check how many times it intersects the curve.",
        "workingOut": "",
        "graphData": {
          "jsxGraph": {
            "width": 350,
            "height": 350,
            "boundingbox": [
              -3,
              5,
              7,
              -5
            ],
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-3.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.5], [0,3.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('curve', [function(t){ return t*t - 2; }, function(t){ return t; }, -3, 3], {strokeColor: '#4f46e5', strokeWidth: 2, firstArrow: false, lastArrow: false});\nboard.create('line', [[5, -10], [5, 10]], {strokeColor: 'red', strokeWidth: 2, dash: 2});\nboard.create('point', [5, 2], {size: 4, face: 'o', color: 'red', fixed: true, withLabel: false});\nboard.create('point', [5, -2], {size: 4, face: 'o', color: 'red', fixed: true, withLabel: false});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Conclude based on the test. **Warning:** Remember, circles and sideways parabolas fail the vertical line test. If a vertical line intersects the curve more than once, it is a relation, not a function.",
        "workingOut": "\\( \\text{Final Answer} \\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 350,
        "boundingbox": [
          -3,
          5,
          7,
          -5
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-3.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.5], [0,3.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('curve', [function(t){ return t*t - 2; }, function(t){ return t; }, -3, 3], {strokeColor: '#4f46e5', strokeWidth: 2, firstArrow: false, lastArrow: false});\nboard.unsuspendUpdate();"
      }
    },
    "options": [
      {
        "text": "No",
        "imageUrl": ""
      },
      {
        "text": "Yes",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
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
        "explanation": "Identify the relation and the goal. We need to determine if the given graph or relation represents a function.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Apply the vertical line test: a function must pass the vertical line test, meaning no vertical line can cross the graph more than once.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Examine the specific intersections. If a vertical line is drawn, check how many times it intersects the curve.",
        "workingOut": "",
        "graphData": {
          "jsxGraph": {
            "width": 253,
            "height": 380,
            "boundingbox": [
              -3,
              4.5,
              3,
              -4.5
            ],
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-3.5,0], [3.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-4.5], [0,4.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('curve', [function(t){ return 2*Math.sin(t); }, function(t){ return t; }, -4.5, 4.5], {strokeColor: '#4f46e5', strokeWidth: 2, firstArrow: false, lastArrow: false});\nboard.create('line', [[0, -10], [0, 10]], {strokeColor: 'red', strokeWidth: 2, dash: 2});\nboard.create('point', [0, 0], {size: 4, face: 'o', color: 'red', fixed: true, withLabel: false});\nboard.create('point', [0, 3.1415], {size: 4, face: 'o', color: 'red', fixed: true, withLabel: false});\nboard.create('point', [0, -3.1415], {size: 4, face: 'o', color: 'red', fixed: true, withLabel: false});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Conclude based on the test. **Warning:** Remember, circles and sideways parabolas fail the vertical line test. If a vertical line intersects the curve more than once, it is a relation, not a function.",
        "workingOut": "\\( \\text{Final Answer} \\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 253,
        "height": 380,
        "boundingbox": [
          -3,
          4.5,
          3,
          -4.5
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-3.5,0], [3.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-4.5], [0,4.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('curve', [function(t){ return 2*Math.sin(t); }, function(t){ return t; }, -4.5, 4.5], {strokeColor: '#4f46e5', strokeWidth: 2, firstArrow: false, lastArrow: false});\nboard.unsuspendUpdate();"
      }
    },
    "options": [
      {
        "text": "No",
        "imageUrl": ""
      },
      {
        "text": "Yes",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
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
        "explanation": "Identify the relation and the goal. We need to determine if the given graph or relation represents a function.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Apply the vertical line test: a function must pass the vertical line test, meaning no vertical line can cross the graph more than once.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Examine the specific intersections. If a vertical line is drawn, check how many times it intersects the curve.",
        "workingOut": "",
        "graphData": {
          "jsxGraph": {
            "width": 350,
            "height": 350,
            "boundingbox": [
              -3,
              3,
              3,
              -3
            ],
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-3.5,0], [3.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-5.5], [0,5.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('functiongraph', [function(x){ return -x*x*x + 3*x; }, -3.5, 3.5], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('line', [[1, -10], [1, 10]], {strokeColor: 'red', strokeWidth: 2, dash: 2});\nboard.create('point', [1, -1], {size: 4, face: 'o', color: 'red', fixed: true, withLabel: false});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Conclude based on the test. **Warning:** Remember, circles and sideways parabolas fail the vertical line test. If a vertical line intersects the curve more than once, it is a relation, not a function.",
        "workingOut": "\\( \\text{Final Answer} \\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 350,
        "boundingbox": [
          -3,
          3,
          3,
          -3
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-3.5,0], [3.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-5.5], [0,5.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('functiongraph', [function(x){ return -x*x*x + 3*x; }, -3.5, 3.5], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.unsuspendUpdate();"
      }
    },
    "options": [
      {
        "text": "Yes",
        "imageUrl": ""
      },
      {
        "text": "No",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
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
        "explanation": "Identify the relation and the goal. We need to determine if the given graph or relation represents a function.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Apply the vertical line test: a function must pass the vertical line test, meaning no vertical line can cross the graph more than once.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Examine the specific intersections. If a vertical line is drawn, check how many times it intersects the curve.",
        "workingOut": "",
        "graphData": {
          "jsxGraph": {
            "width": 350,
            "height": 350,
            "boundingbox": [
              -4,
              4,
              4,
              -4
            ],
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-4.5,0], [1.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.5], [0,3.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('curve', [function(t){ return 3*Math.cos(t); }, function(t){ return 3*Math.sin(t); }, Math.PI/2, 3*Math.PI/2], {strokeColor: '#4f46e5', strokeWidth: 2, firstArrow: false, lastArrow: false});\nboard.create('text', [-3.2, 0.2, '-3'], {fontSize: 12});\nboard.create('text', [0.2, 3.1, '3'], {fontSize: 12});\nboard.create('text', [0.2, -3.1, '-3'], {fontSize: 12});\nboard.create('line', [[-3, -10], [-3, 10]], {strokeColor: 'red', strokeWidth: 2, dash: 2});\nboard.create('point', [-3, 3], {size: 4, face: 'o', color: 'red', fixed: true, withLabel: false});\nboard.create('point', [-3, -3], {size: 4, face: 'o', color: 'red', fixed: true, withLabel: false});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Conclude based on the test. **Warning:** Remember, circles and sideways parabolas fail the vertical line test. If a vertical line intersects the curve more than once, it is a relation, not a function.",
        "workingOut": "\\( \\text{Final Answer} \\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 350,
        "boundingbox": [
          -4,
          4,
          4,
          -4
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-4.5,0], [1.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.5], [0,3.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('curve', [function(t){ return 3*Math.cos(t); }, function(t){ return 3*Math.sin(t); }, Math.PI/2, 3*Math.PI/2], {strokeColor: '#4f46e5', strokeWidth: 2, firstArrow: false, lastArrow: false});\nboard.create('text', [-3.2, 0.2, '-3'], {fontSize: 12});\nboard.create('text', [0.2, 3.1, '3'], {fontSize: 12});\nboard.create('text', [0.2, -3.1, '-3'], {fontSize: 12});\nboard.unsuspendUpdate();"
      }
    },
    "options": [
      {
        "text": "No",
        "imageUrl": ""
      },
      {
        "text": "Yes",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
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
        "explanation": "Identify the relation and the goal. We need to determine if the given graph or relation represents a function.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Apply the vertical line test: a function must pass the vertical line test, meaning no vertical line can cross the graph more than once.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Examine the specific intersections. If a vertical line is drawn, check how many times it intersects the curve.",
        "workingOut": "",
        "graphData": {
          "jsxGraph": {
            "width": 350,
            "height": 241,
            "boundingbox": [
              -4,
              4,
              4,
              -1.5
            ],
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-4.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-1.5], [0,3.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('curve', [function(t){ return 3*Math.cos(t); }, function(t){ return 3*Math.sin(t); }, 0, Math.PI], {strokeColor: '#4f46e5', strokeWidth: 2, firstArrow: false, lastArrow: false});\nboard.create('text', [-3.2, -0.4, '-3'], {fontSize: 12});\nboard.create('text', [3.1, -0.4, '3'], {fontSize: 12});\nboard.create('text', [-0.4, 3.1, '3'], {fontSize: 12});\nboard.create('line', [[2, -10], [2, 10]], {strokeColor: 'red', strokeWidth: 2, dash: 2});\nboard.create('point', [2, 3.4641016151377544], {size: 4, face: 'o', color: 'red', fixed: true, withLabel: false});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "Conclude based on the test. **Warning:** Remember, circles and sideways parabolas fail the vertical line test. If a vertical line intersects the curve more than once, it is a relation, not a function.",
        "workingOut": "\\( \\text{Final Answer} \\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 241,
        "boundingbox": [
          -4,
          4,
          4,
          -1.5
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-4.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-1.5], [0,3.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('curve', [function(t){ return 3*Math.cos(t); }, function(t){ return 3*Math.sin(t); }, 0, Math.PI], {strokeColor: '#4f46e5', strokeWidth: 2, firstArrow: false, lastArrow: false});\nboard.create('text', [-3.2, -0.4, '-3'], {fontSize: 12});\nboard.create('text', [3.1, -0.4, '3'], {fontSize: 12});\nboard.create('text', [-0.4, 3.1, '3'], {fontSize: 12});\nboard.unsuspendUpdate();"
      }
    },
    "options": [
      {
        "text": "Yes",
        "imageUrl": ""
      },
      {
        "text": "No",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q3a",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "State the domain and range of the relation shown in the graph.",
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
        "width": 207,
        "height": 380,
        "boundingbox": [
          -1,
          8,
          5,
          -3
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-1.5,0], [5.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-2.5], [0,5.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('functiongraph', [function(x){ return x*x - 4*x + 2; }, -1.5, 5.5], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.unsuspendUpdate();"
      }
    },
    "options": [
      {
        "text": "\\( \\text{Domain: all real } x,\\ \\text{Range: } y \\leq -2 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( \\text{Domain: all real } x,\\ \\text{Range: } y \\geq -2 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( \\text{Domain: } y \\geq -2,\\ \\text{Range: all real } x \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( \\text{Domain: } x \\geq -2,\\ \\text{Range: all real } y \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q3b",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "State the domain and range of the circular arc (radius 5) shown in the graph, where the top endpoints at \\( y = 3 \\) are open.",
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
        "height": 292,
        "boundingbox": [
          -6,
          4,
          6,
          -6
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-6.5,0], [6.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-6.5], [0,6.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('curve', [function(t){ return 5*Math.cos(t); }, function(t){ return 5*Math.sin(t); }, Math.atan2(3,-4), Math.atan2(3,-4) + (2*Math.PI - (Math.atan2(3,-4) - Math.atan2(3,4)))], {strokeColor: '#4f46e5', strokeWidth: 2, firstArrow: false, lastArrow: false});\nboard.create('point', [-4, 3], {size: 3, face: 'o', color: '#4f46e5', fixed: true});\nboard.create('point', [4, 3], {size: 3, face: 'o', color: '#4f46e5', fixed: true});\nboard.unsuspendUpdate();"
      }
    },
    "options": [
      {
        "text": "\\( \\text{Domain: } -5 < x < 5,\\ \\text{Range: } -5 \\leq y < 3 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( \\text{Domain: } -5 \\leq x \\leq 5,\\ \\text{Range: } -5 < y \\leq 3 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( \\text{Domain: } -5 \\leq y < 3,\\ \\text{Range: } -5 < x < 5 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( \\text{Domain: } -5 \\leq x \\leq 5,\\ \\text{Range: } -5 \\leq y \\leq 3 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q3c",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "State the domain and range of the linear relation shown in the graph.",
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
        "height": 350,
        "boundingbox": [
          -2,
          5,
          5,
          -2
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-1.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-1.5], [0,4.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('functiongraph', [function(x){ return 3 - x; }, -1.5, 4.5], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.unsuspendUpdate();"
      }
    },
    "options": [
      {
        "text": "\\( \\text{Domain: all real } x,\\ \\text{Range: all real } y \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( \\text{Domain: } x \\geq 0,\\ \\text{Range: all real } y \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( \\text{Domain: all real } x,\\ \\text{Range: } y \\geq 0 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( \\text{Domain: all real } x,\\ \\text{Range: } y \\neq 0 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q3d",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "State the domain and range of the sideways parabola shown in the graph.",
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
        "height": 350,
        "boundingbox": [
          -3,
          5,
          7,
          -5
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-3.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.5], [0,3.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('curve', [function(t){ return t*t - 2; }, function(t){ return t; }, -3, 3], {strokeColor: '#4f46e5', strokeWidth: 2, firstArrow: false, lastArrow: false});\nboard.unsuspendUpdate();"
      }
    },
    "options": [
      {
        "text": "\\( \\text{Domain: } x > -2,\\ \\text{Range: all real } y \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( \\text{Domain: } x \\geq -2,\\ \\text{Range: all real } y \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( \\text{Domain: all real } x,\\ \\text{Range: } y \\geq -2 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( \\text{Domain: } x \\leq -2,\\ \\text{Range: all real } y \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q3e",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "State the domain and range of the relation shown in the graph.",
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
        "width": 253,
        "height": 380,
        "boundingbox": [
          -3,
          4.5,
          3,
          -4.5
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-3.5,0], [3.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-4.5], [0,4.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('curve', [function(t){ return 2*Math.sin(t); }, function(t){ return t; }, -4.5, 4.5], {strokeColor: '#4f46e5', strokeWidth: 2, firstArrow: false, lastArrow: false});\nboard.unsuspendUpdate();"
      }
    },
    "options": [
      {
        "text": "\\( \\text{Domain: } -2 \\leq x \\leq 2,\\ \\text{Range: all real } y \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( \\text{Domain: all real } x,\\ \\text{Range: } -2 \\leq y \\leq 2 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( \\text{Domain: } -2 < x < 2,\\ \\text{Range: all real } y \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( \\text{Domain: } -2 \\leq x \\leq 2,\\ \\text{Range: } -2 \\leq y \\leq 2 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q3f",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "State the domain and range of the cubic function shown in the graph.",
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
        "height": 350,
        "boundingbox": [
          -3,
          3,
          3,
          -3
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-3.5,0], [3.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-5.5], [0,5.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('functiongraph', [function(x){ return -x*x*x + 3*x; }, -3.5, 3.5], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.unsuspendUpdate();"
      }
    },
    "options": [
      {
        "text": "\\( \\text{Domain: all real } x,\\ \\text{Range: all real } y \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( \\text{Domain: all real } x,\\ \\text{Range: } y \\geq 0 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( \\text{Domain: } x \\geq 0,\\ \\text{Range: all real } y \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( \\text{Domain: all real } x,\\ \\text{Range: } y \\neq 0 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q3g",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "State the domain and range of the semicircle on the left of the y-axis.",
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
        "height": 350,
        "boundingbox": [
          -4,
          4,
          4,
          -4
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-4.5,0], [1.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.5], [0,3.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('curve', [function(t){ return 3*Math.cos(t); }, function(t){ return 3*Math.sin(t); }, Math.PI/2, 3*Math.PI/2], {strokeColor: '#4f46e5', strokeWidth: 2, firstArrow: false, lastArrow: false});\nboard.create('text', [-3.2, 0.2, '-3'], {fontSize: 12});\nboard.create('text', [0.2, 3.1, '3'], {fontSize: 12});\nboard.create('text', [0.2, -3.1, '-3'], {fontSize: 12});\nboard.unsuspendUpdate();"
      }
    },
    "options": [
      {
        "text": "\\( \\text{Domain: } -3 \\leq y \\leq 3,\\ \\text{Range: } -3 \\leq x \\leq 0 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( \\text{Domain: } -3 \\leq x \\leq 0,\\ \\text{Range: } -3 \\leq y \\leq 3 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( \\text{Domain: } 0 \\leq x \\leq 3,\\ \\text{Range: } -3 \\leq y \\leq 3 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( \\text{Domain: } -3 < x < 0,\\ \\text{Range: } -3 \\leq y \\leq 3 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q3h",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "State the domain and range of the upper semicircle shown in the graph.",
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
        "height": 241,
        "boundingbox": [
          -4,
          4,
          4,
          -1.5
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-4.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-1.5], [0,3.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('curve', [function(t){ return 3*Math.cos(t); }, function(t){ return 3*Math.sin(t); }, 0, Math.PI], {strokeColor: '#4f46e5', strokeWidth: 2, firstArrow: false, lastArrow: false});\nboard.create('text', [-3.2, -0.4, '-3'], {fontSize: 12});\nboard.create('text', [3.1, -0.4, '3'], {fontSize: 12});\nboard.create('text', [-0.4, 3.1, '3'], {fontSize: 12});\nboard.unsuspendUpdate();"
      }
    },
    "options": [
      {
        "text": "\\( \\text{Domain: } 0 \\leq y \\leq 3,\\ \\text{Range: } -3 \\leq x \\leq 3 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( \\text{Domain: } -3 \\leq x \\leq 3,\\ \\text{Range: } 0 \\leq y \\leq 3 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( \\text{Domain: } -3 \\leq x \\leq 3,\\ \\text{Range: } -3 \\leq y \\leq 3 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( \\text{Domain: } -3 \\leq x \\leq 3,\\ \\text{Range: } 0 \\leq y < 3 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q4a",
    "type": "parent",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "For the linear function \\( y = -3x + 2 \\):",
    "subQuestions": [
      {
        "id": "y11a-3b-q4a-1",
        "type": "teacher_review",
        "question": "(i) Copy and complete the table of values for \\( x = 0, 1, 2 \\).",
        "a": "See solution",
        "solution": "Substitute \\( x = 0, 1, 2 \\) into \\( y = -3x + 2 \\) to get \\( y = 2, -1, -4 \\).",
        "solutionSteps": [
          {
            "explanation": "Substitute \\( x = 0, 1, 2 \\) into \\( y = -3x + 2 \\).",
            "workingOut": "\\(\\begin{aligned} x=0 \\implies y &= -3(0)+2 = 2 \\\\ x=1 \\implies y &= -3(1)+2 = -1 \\\\ x=2 \\implies y &= -3(2)+2 = -4 \\end{aligned}\\)\n\n\\(\\begin{array}{|c|c|c|c|}\\hline x & 0 & 1 & 2 \\\\ \\hline y & 2 & -1 & -4 \\\\ \\hline \\end{array}\\)",
            "graphData": null
          }
        ]
      },
      {
        "id": "y11a-3b-q4a-2",
        "type": "teacher_review",
        "question": "(ii) Plot the points and sketch the function.",
        "a": "See solution",
        "solution": "Plot \\( (0, 2) \\), \\( (1, -1) \\), and \\( (2, -4) \\) and connect them with a straight line.",
        "solutionSteps": [
          {
            "explanation": "Plot the points \\( (0, 2) \\), \\( (1, -1) \\), and \\( (2, -4) \\) and connect them with a straight line.",
            "workingOut": "",
            "graphData": {
              "jsxGraph": {
                "width": 300,
                "height": 300,
                "boundingbox": [
                  -2,
                  5,
                  4,
                  -6
                ],
                "script": "board.suspendUpdate();\nboard.create('arrow', [[-2,0], [4,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-6], [0,5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('functiongraph', [function(x){ return -3*x + 2; }, -2, 4], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('point', [0, 2], {size: 3, face: 'o', color: '#4f46e5', fixed: true, withLabel: true, name: '(0,2)'});\nboard.create('point', [1, -1], {size: 3, face: 'o', color: '#4f46e5', fixed: true, withLabel: true, name: '(1,-1)'});\nboard.create('point', [2, -4], {size: 3, face: 'o', color: '#4f46e5', fixed: true, withLabel: true, name: '(2,-4)'});\nboard.unsuspendUpdate();"
              }
            }
          }
        ]
      },
      {
        "id": "y11a-3b-q4a-3",
        "type": "multiple_choice",
        "question": "(iii) Write down the domain and range.",
        "a": "2",
        "options": [
          {
            "text": "\\( \\text{Domain: all real } x,\\ \\text{Range: } y \\geq 0 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( \\text{Domain: } x \\geq 0,\\ \\text{Range: all real } y \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( \\text{Domain: all real } x,\\ \\text{Range: all real } y \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( \\text{Domain: all real } x,\\ \\text{Range: } y \\neq 0 \\)",
            "imageUrl": ""
          }
        ],
        "solutionSteps": [
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
        ]
      }
    ]
  },
  {
    "id": "y11a-3b-q4b",
    "type": "parent",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "For the quadratic function \\( y = x^2 - 2x + 3 \\):",
    "subQuestions": [
      {
        "id": "y11a-3b-q4b-1",
        "type": "teacher_review",
        "question": "(i) Copy and complete the table of values for \\( x = -1, 0, 1, 2, 3 \\).",
        "a": "See solution",
        "solution": "Substitute the x values to get y = 6, 3, 2, 3, 6.",
        "solutionSteps": [
          {
            "explanation": "Substitute \\( x \\) values into \\( y = x^2 - 2x + 3 \\).",
            "workingOut": "\\(\\begin{aligned} x=-1 \\implies y &= (-1)^2 - 2(-1) + 3 = 6 \\\\ x=0 \\implies y &= (0)^2 - 2(0) + 3 = 3 \\\\ x=1 \\implies y &= (1)^2 - 2(1) + 3 = 2 \\\\ x=2 \\implies y &= (2)^2 - 2(2) + 3 = 3 \\\\ x=3 \\implies y &= (3)^2 - 2(3) + 3 = 6 \\end{aligned}\\)\n\n\\(\\begin{array}{|c|c|c|c|c|c|}\\hline x & -1 & 0 & 1 & 2 & 3 \\\\ \\hline y & 6 & 3 & 2 & 3 & 6 \\\\ \\hline \\end{array}\\)",
            "graphData": null
          }
        ]
      },
      {
        "id": "y11a-3b-q4b-2",
        "type": "teacher_review",
        "question": "(ii) Plot the points and sketch the parabola.",
        "a": "See solution",
        "solution": "Plot the points with the vertex at (1, 2) and draw a smooth upward-opening parabola.",
        "solutionSteps": [
          {
            "explanation": "The vertex is at \\( (1, 2) \\) and the y-intercept is at \\( (0, 3) \\). Plot the points and draw a smooth parabola opening upwards.",
            "workingOut": "",
            "graphData": {
              "jsxGraph": {
                "width": 300,
                "height": 300,
                "boundingbox": [
                  -3,
                  8,
                  5,
                  -2
                ],
                "script": "board.suspendUpdate();\nboard.create('arrow', [[-3,0], [5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-2], [0,8]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('functiongraph', [function(x){ return x*x - 2*x + 3; }, -3, 5], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('point', [-1, 6], {size: 3, face: 'o', color: '#4f46e5', fixed: true, withLabel: true, name: '(-1,6)'});\nboard.create('point', [0, 3], {size: 3, face: 'o', color: '#4f46e5', fixed: true, withLabel: true, name: '(0,3)'});\nboard.create('point', [1, 2], {size: 3, face: 'o', color: '#4f46e5', fixed: true, withLabel: true, name: '(1,2)'});\nboard.create('point', [2, 3], {size: 3, face: 'o', color: '#4f46e5', fixed: true, withLabel: true, name: '(2,3)'});\nboard.create('point', [3, 6], {size: 3, face: 'o', color: '#4f46e5', fixed: true, withLabel: true, name: '(3,6)'});\nboard.unsuspendUpdate();"
              }
            }
          }
        ]
      },
      {
        "id": "y11a-3b-q4b-3",
        "type": "multiple_choice",
        "question": "(iii) Write down the domain and range.",
        "a": "2",
        "options": [
          {
            "text": "\\( \\text{Domain: all real } x,\\ \\text{Range: } y \\leq 2 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( \\text{Domain: } x \\geq 2,\\ \\text{Range: all real } y \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( \\text{Domain: all real } x,\\ \\text{Range: } y \\geq 2 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( \\text{Domain: all real } x,\\ \\text{Range: } y > 2 \\)",
            "imageUrl": ""
          }
        ],
        "solutionSteps": [
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
        ]
      }
    ]
  },
  {
    "id": "y11a-3b-q5a",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\frac{2}{x} \\).",
    "a": "0",
    "solutionSteps": [
      {
        "explanation": "Identify the function type to find the natural domain. Check if the function contains fractions, square roots, or both.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Apply the analytical rules for natural domains: denominators cannot equal zero, and values inside a square root must be non-negative (greater than or equal to zero).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Set up and solve the resulting inequality or equation to find the restrictions on \\( x \\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "State the final domain. **Warning:** Always check the natural domain carefully. Missing a zero denominator or a negative radicand is a common pitfall.",
        "workingOut": "\\( \\text{Final Domain} \\)",
        "graphData": null
      }
    ],
    "options": [
      {
        "text": "\\( x \\neq 0 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x \\neq 5 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x \\in \\mathbb{R}\\ (\\text{all real } x) \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x = 0 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q5b",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\frac{1}{x - 4} \\).",
    "a": "2",
    "solutionSteps": [
      {
        "explanation": "Identify the function type to find the natural domain. Check if the function contains fractions, square roots, or both.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Apply the analytical rules for natural domains: denominators cannot equal zero, and values inside a square root must be non-negative (greater than or equal to zero).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Set up and solve the resulting inequality or equation to find the restrictions on \\( x \\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "State the final domain. **Warning:** Always check the natural domain carefully. Missing a zero denominator or a negative radicand is a common pitfall.",
        "workingOut": "\\( \\text{Final Domain} \\)",
        "graphData": null
      }
    ],
    "options": [
      {
        "text": "\\( x \\neq -4 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x \\in \\mathbb{R}\\ (\\text{all real } x) \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x \\neq 4 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x = 4 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q5c",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\frac{3}{x + 2} \\).",
    "a": "2",
    "solutionSteps": [
      {
        "explanation": "Identify the function type to find the natural domain. Check if the function contains fractions, square roots, or both.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Apply the analytical rules for natural domains: denominators cannot equal zero, and values inside a square root must be non-negative (greater than or equal to zero).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Set up and solve the resulting inequality or equation to find the restrictions on \\( x \\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "State the final domain. **Warning:** Always check the natural domain carefully. Missing a zero denominator or a negative radicand is a common pitfall.",
        "workingOut": "\\( \\text{Final Domain} \\)",
        "graphData": null
      }
    ],
    "options": [
      {
        "text": "\\( x \\neq 2 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x \\in \\mathbb{R}\\ (\\text{all real } x) \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x \\neq -2 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x = -2 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q5d",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\frac{1}{3 + x} \\).",
    "a": "2",
    "solutionSteps": [
      {
        "explanation": "Identify the function type to find the natural domain. Check if the function contains fractions, square roots, or both.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Apply the analytical rules for natural domains: denominators cannot equal zero, and values inside a square root must be non-negative (greater than or equal to zero).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Set up and solve the resulting inequality or equation to find the restrictions on \\( x \\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "State the final domain. **Warning:** Always check the natural domain carefully. Missing a zero denominator or a negative radicand is a common pitfall.",
        "workingOut": "\\( \\text{Final Domain} \\)",
        "graphData": null
      }
    ],
    "options": [
      {
        "text": "\\( x \\in \\mathbb{R}\\ (\\text{all real } x) \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x \\neq 3 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x \\neq -3 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x = -3 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q6a",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\sqrt{2x} \\).",
    "a": "0",
    "solutionSteps": [
      {
        "explanation": "Identify the function type to find the natural domain. Check if the function contains fractions, square roots, or both.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Apply the analytical rules for natural domains: denominators cannot equal zero, and values inside a square root must be non-negative (greater than or equal to zero).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Set up and solve the resulting inequality or equation to find the restrictions on \\( x \\).",
        "workingOut": "\\( x \\ge 0 \\)",
        "graphData": null
      },
      {
        "explanation": "State the final domain. **Warning:** Always check the natural domain carefully. Missing a zero denominator or a negative radicand is a common pitfall.",
        "workingOut": "\\( \\text{Final Domain} \\)",
        "graphData": null
      }
    ],
    "options": [
      {
        "text": "\\( x \\geq 0 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x \\leq 0 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x > 0 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x \\geq 5 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q6b",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\sqrt{x - 4} \\).",
    "a": "0",
    "solutionSteps": [
      {
        "explanation": "Identify the function type to find the natural domain. Check if the function contains fractions, square roots, or both.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Apply the analytical rules for natural domains: denominators cannot equal zero, and values inside a square root must be non-negative (greater than or equal to zero).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Set up and solve the resulting inequality or equation to find the restrictions on \\( x \\).",
        "workingOut": "\\( x \\ge 4 \\)",
        "graphData": null
      },
      {
        "explanation": "State the final domain. **Warning:** Always check the natural domain carefully. Missing a zero denominator or a negative radicand is a common pitfall.",
        "workingOut": "\\( \\text{Final Domain} \\)",
        "graphData": null
      }
    ],
    "options": [
      {
        "text": "\\( x \\geq 4 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x \\leq 4 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x > 4 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x \\geq -4 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q6c",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\sqrt{x + 5} \\).",
    "a": "1",
    "solutionSteps": [
      {
        "explanation": "Identify the function type to find the natural domain. Check if the function contains fractions, square roots, or both.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Apply the analytical rules for natural domains: denominators cannot equal zero, and values inside a square root must be non-negative (greater than or equal to zero).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Set up and solve the resulting inequality or equation to find the restrictions on \\( x \\).",
        "workingOut": "\\( x \\ge -5 \\)",
        "graphData": null
      },
      {
        "explanation": "State the final domain. **Warning:** Always check the natural domain carefully. Missing a zero denominator or a negative radicand is a common pitfall.",
        "workingOut": "\\( \\text{Final Domain} \\)",
        "graphData": null
      }
    ],
    "options": [
      {
        "text": "\\( x \\leq -5 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x \\geq -5 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x > -5 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x \\geq 5 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q6d",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\sqrt{3 + x} \\).",
    "a": "2",
    "solutionSteps": [
      {
        "explanation": "Identify the function type to find the natural domain. Check if the function contains fractions, square roots, or both.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Apply the analytical rules for natural domains: denominators cannot equal zero, and values inside a square root must be non-negative (greater than or equal to zero).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Set up and solve the resulting inequality or equation to find the restrictions on \\( x \\).",
        "workingOut": "\\( x \\ge -3 \\)",
        "graphData": null
      },
      {
        "explanation": "State the final domain. **Warning:** Always check the natural domain carefully. Missing a zero denominator or a negative radicand is a common pitfall.",
        "workingOut": "\\( \\text{Final Domain} \\)",
        "graphData": null
      }
    ],
    "options": [
      {
        "text": "\\( x > -3 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x \\leq -3 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x \\geq -3 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x \\geq 3 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q7a",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "A mapping diagram shows domain elements \\({-3, 3, -2, 2, 0}\\) mapping to range elements \\({9, 4, 0}\\) as follows:\n\n- \\(-3 \\rightarrow 9\\)\n- \\(3 \\rightarrow 9\\)\n- \\(-2 \\rightarrow 4\\)\n- \\(2 \\rightarrow 4\\)\n- \\(0 \\rightarrow 0\\)\n\nIs this relation also a function? Explain why.",
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
    ],
    "options": [
      {
        "text": "Yes, because each element in the domain maps to exactly one element in the range.",
        "imageUrl": ""
      },
      {
        "text": "No, because two different domain elements map to the same range element.",
        "imageUrl": ""
      },
      {
        "text": "Yes, because it is a one-to-many mapping.",
        "imageUrl": ""
      },
      {
        "text": "No, because 0 maps to 0.",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q7b",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "A relation is described by a diagram where domain elements \\({9, 4, 0}\\) map to range elements \\({-3, 3, -2, 2, 0}\\) as follows:\n\n- \\(9 \\rightarrow -3\\) and \\(9 \\rightarrow 3\\)\n- \\(4 \\rightarrow -2\\) and \\(4 \\rightarrow 2\\)\n- \\(0 \\rightarrow 0\\)\n\nIs this relation a function? Explain why.",
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
    ],
    "options": [
      {
        "text": "No, because the inputs 9 and 4 map to more than one output value.",
        "imageUrl": ""
      },
      {
        "text": "Yes, because every element in the domain has an output.",
        "imageUrl": ""
      },
      {
        "text": "No, because it is a many-to-one relation.",
        "imageUrl": ""
      },
      {
        "text": "Yes, because it represents a vertical line.",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q7c",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "A relation maps \\({-1, 1, 2}\\) to \\({3, 5, 8}\\) as follows:\n\n- \\(-1 \\rightarrow 3\\)\n- \\(1 \\rightarrow 5\\)\n- \\(2 \\rightarrow 8\\)\n\nIs this relation a function?",
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
    ],
    "options": [
      {
        "text": "Yes, it is a one-to-one function.",
        "imageUrl": ""
      },
      {
        "text": "No, it is not a function.",
        "imageUrl": ""
      },
      {
        "text": "Yes, but it is not a relation.",
        "imageUrl": ""
      },
      {
        "text": "No, because the inputs are not symmetrical.",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q7d",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "A mapping diagram contains domain elements \\({-2, 2, 0}\\) and range elements \\({-3, 3, -4, 4}\\) as follows:\n\n- \\(-2 \\rightarrow -3\\)\n- \\(2 \\rightarrow 3\\)\n- \\(0 \\rightarrow -4\\) and \\(0 \\rightarrow 4\\)\n\nIs this relation a function?",
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
    ],
    "options": [
      {
        "text": "No, because the domain element 0 maps to two range elements.",
        "imageUrl": ""
      },
      {
        "text": "Yes, because every element in the range has a preimage.",
        "imageUrl": ""
      },
      {
        "text": "Yes, it is a function.",
        "imageUrl": ""
      },
      {
        "text": "No, because the number of elements in the domain is less than the range.",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
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
        "a": "0",
        "options": [
          {
            "text": "It is a function.",
            "imageUrl": ""
          },
          {
            "text": "It is a relation but not a function.",
            "imageUrl": ""
          }
        ],
        "isManual": false,
        "requiresManualGrading": false
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
        "options": [
          {
            "text": "Relation, not a function — because \\( x = 2 \\) maps to two different \\( y \\)-values.",
            "imageUrl": ""
          },
          {
            "text": "Relation, not a function — the input \\( x = 1 \\) maps to both \\( y = 3 \\) and \\( y = 4 \\).",
            "imageUrl": ""
          },
          {
            "text": "Function — every \\( x \\)-value maps to exactly one \\( y \\)-value.",
            "imageUrl": ""
          },
          {
            "text": "Function — this is a one-to-one mapping.",
            "imageUrl": ""
          }
        ],
        "isManual": false,
        "requiresManualGrading": false
      }
    ]
  },
  {
    "id": "y11a-3b-q9a",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "The circle below (radius 4) represents a relation that is not a function. Write down the coordinates of two points on this graph that have the same x-coordinate.",
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
        "height": 350,
        "boundingbox": [
          -5,
          5,
          5,
          -5
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-5,0], [5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-5], [0,5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('circle', [[0,0], 4], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('text', [0.2, 4.2, '4'], {fontSize: 12});\nboard.create('text', [0.2, -4.2, '-4'], {fontSize: 12});\nboard.create('text', [4.2, 0.2, '4'], {fontSize: 12});\nboard.create('text', [-4.7, 0.2, '-4'], {fontSize: 12});\nboard.unsuspendUpdate();"
      }
    },
    "options": [
      {
        "text": "\\( (0, 4) \\text{ and } (4, 0) \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( (4, 0) \\text{ and } (-4, 0) \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( (0, 4) \\text{ and } (0, -4) \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( (0, 4) \\text{ and } (0, 0) \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q9b",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "The sideways parabola below represents a relation that is not a function. Write down the coordinates of two points on this graph that have the same x-coordinate.",
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
        "height": 255,
        "boundingbox": [
          -5,
          4,
          6,
          -4
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-4.5,0], [2.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.5], [0,3.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('curve', [function(t){ return t*t - 4; }, function(t){ return t; }, -3, 3], {strokeColor: '#4f46e5', strokeWidth: 2, firstArrow: false, lastArrow: false});\nboard.create('text', [-4.2, 0.2, '-4'], {fontSize: 12});\nboard.create('text', [0.2, 2.1, '2'], {fontSize: 12});\nboard.create('text', [0.2, -2.1, '-2'], {fontSize: 12});\nboard.unsuspendUpdate();"
      }
    },
    "options": [
      {
        "text": "\\( (2, 0) \\text{ and } (-2, 0) \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( (0, 2) \\text{ and } (2, 0) \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( (0, 2) \\text{ and } (0, -2) \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( (0, 2) \\text{ and } (0, 0) \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q9c",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "The circle centered at \\( (3, 2) \\) with radius \\( 3 \\) is not a function. Write down the coordinates of two points on this graph that have the same x-coordinate.",
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
        "height": 350,
        "boundingbox": [
          -1,
          6,
          7,
          -2
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-0.5,0], [7.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-2.5], [0,6.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('circle', [[3,2], 3], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('point', [3,2], {name: '(3,2)', size: 2, color: 'black', label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
      }
    },
    "options": [
      {
        "text": "\\( (3, 5) \\text{ and } (3, -1) \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( (3, 5) \\text{ and } (3, 2) \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( (5, 2) \\text{ and } (-1, 2) \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( (3, 2) \\text{ and } (3, -2) \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q9d",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "The vertical line at \\( x = 3 \\) is not a function. Write down the coordinates of two points on this graph that have the same x-coordinate.",
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
        "width": 326,
        "height": 380,
        "boundingbox": [
          -1,
          5,
          5,
          -2
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-0.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-1.5], [0,4.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('line', [[3,-2], [3,5]], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('text', [3.2, 0.2, '3'], {fontSize: 12});\nboard.unsuspendUpdate();"
      }
    },
    "options": [
      {
        "text": "\\( (3, 1) \\text{ and } (3, 2) \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( (3, 0) \\text{ and } (0, 3) \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( (1, 3) \\text{ and } (2, 3) \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( (1, 3) \\text{ and } (3, 1) \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q10a",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = 5x \\).",
    "a": "0",
    "solutionSteps": [
      {
        "explanation": "Identify the function type to find the natural domain. Check if the function contains fractions, square roots, or both.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Apply the analytical rules for natural domains: denominators cannot equal zero, and values inside a square root must be non-negative (greater than or equal to zero).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Set up and solve the resulting inequality or equation to find the restrictions on \\( x \\).",
        "workingOut": "\\(\\text{Domain: all real } x\\)",
        "graphData": null
      },
      {
        "explanation": "State the final domain. **Warning:** Always check the natural domain carefully. Missing a zero denominator or a negative radicand is a common pitfall.",
        "workingOut": "\\( \\text{Final Domain} \\)",
        "graphData": null
      }
    ],
    "options": [
      {
        "text": "\\( x \\in \\mathbb{R}\\ (\\text{all real } x) \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x \\neq 0 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x \\leq 0 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x \\geq 0 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q10b",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = 8 - 2x \\).",
    "a": "1",
    "solutionSteps": [
      {
        "explanation": "Identify the function type to find the natural domain. Check if the function contains fractions, square roots, or both.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Apply the analytical rules for natural domains: denominators cannot equal zero, and values inside a square root must be non-negative (greater than or equal to zero).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Set up and solve the resulting inequality or equation to find the restrictions on \\( x \\).",
        "workingOut": "\\(\\text{Domain: all real } x\\)",
        "graphData": null
      },
      {
        "explanation": "State the final domain. **Warning:** Always check the natural domain carefully. Missing a zero denominator or a negative radicand is a common pitfall.",
        "workingOut": "\\( \\text{Final Domain} \\)",
        "graphData": null
      }
    ],
    "options": [
      {
        "text": "\\( x \\neq 0 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x \\in \\mathbb{R}\\ (\\text{all real } x) \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x \\leq 0 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x \\geq 0 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q10c",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\frac{1}{5 - x} \\).",
    "a": "2",
    "solutionSteps": [
      {
        "explanation": "Identify the function type to find the natural domain. Check if the function contains fractions, square roots, or both.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Apply the analytical rules for natural domains: denominators cannot equal zero, and values inside a square root must be non-negative (greater than or equal to zero).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Set up and solve the resulting inequality or equation to find the restrictions on \\( x \\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "State the final domain. **Warning:** Always check the natural domain carefully. Missing a zero denominator or a negative radicand is a common pitfall.",
        "workingOut": "\\( \\text{Final Domain} \\)",
        "graphData": null
      }
    ],
    "options": [
      {
        "text": "\\( x \\neq -5 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x = 5 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x \\neq 5 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x \\in \\mathbb{R}\\ (\\text{all real } x) \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q10d",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\frac{4}{3x - 2} \\).",
    "a": "2",
    "solutionSteps": [
      {
        "explanation": "Identify the function type to find the natural domain. Check if the function contains fractions, square roots, or both.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Apply the analytical rules for natural domains: denominators cannot equal zero, and values inside a square root must be non-negative (greater than or equal to zero).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Set up and solve the resulting inequality or equation to find the restrictions on \\( x \\).",
        "workingOut": "\\(3x \\neq 2 \\implies x \\neq \\frac{2}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "State the final domain. **Warning:** Always check the natural domain carefully. Missing a zero denominator or a negative radicand is a common pitfall.",
        "workingOut": "\\( \\text{Final Domain} \\)",
        "graphData": null
      }
    ],
    "options": [
      {
        "text": "\\( x = \\frac{2}{3} \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x \\neq -\\frac{2}{3} \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x \\neq \\frac{2}{3} \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x \\in \\mathbb{R}\\ (\\text{all real } x) \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q10e",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\sqrt{x + 6} \\).",
    "a": "2",
    "solutionSteps": [
      {
        "explanation": "Identify the function type to find the natural domain. Check if the function contains fractions, square roots, or both.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Apply the analytical rules for natural domains: denominators cannot equal zero, and values inside a square root must be non-negative (greater than or equal to zero).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Set up and solve the resulting inequality or equation to find the restrictions on \\( x \\).",
        "workingOut": "\\( x \\ge -6 \\)",
        "graphData": null
      },
      {
        "explanation": "State the final domain. **Warning:** Always check the natural domain carefully. Missing a zero denominator or a negative radicand is a common pitfall.",
        "workingOut": "\\( \\text{Final Domain} \\)",
        "graphData": null
      }
    ],
    "options": [
      {
        "text": "\\( x \\leq -6 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x \\geq 6 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x \\geq -6 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x > -6 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q10f",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\sqrt{3x + 2} \\).",
    "a": "2",
    "solutionSteps": [
      {
        "explanation": "Identify the function type to find the natural domain. Check if the function contains fractions, square roots, or both.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Apply the analytical rules for natural domains: denominators cannot equal zero, and values inside a square root must be non-negative (greater than or equal to zero).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Set up and solve the resulting inequality or equation to find the restrictions on \\( x \\).",
        "workingOut": "\\(3x \\ge -2 \\implies x \\ge -\\frac{2}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "State the final domain. **Warning:** Always check the natural domain carefully. Missing a zero denominator or a negative radicand is a common pitfall.",
        "workingOut": "\\( \\text{Final Domain} \\)",
        "graphData": null
      }
    ],
    "options": [
      {
        "text": "\\( x \\leq -\\frac{2}{3} \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x \\geq \\frac{2}{3} \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x \\geq -\\frac{2}{3} \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x > -\\frac{2}{3} \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q10g",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\sqrt{6 - x} \\).",
    "a": "0",
    "solutionSteps": [
      {
        "explanation": "Identify the function type to find the natural domain. Check if the function contains fractions, square roots, or both.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Apply the analytical rules for natural domains: denominators cannot equal zero, and values inside a square root must be non-negative (greater than or equal to zero).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Set up and solve the resulting inequality or equation to find the restrictions on \\( x \\).",
        "workingOut": "\\( 6 \\ge x \\implies x \\le 6 \\)",
        "graphData": null
      },
      {
        "explanation": "State the final domain. **Warning:** Always check the natural domain carefully. Missing a zero denominator or a negative radicand is a common pitfall.",
        "workingOut": "\\( \\text{Final Domain} \\)",
        "graphData": null
      }
    ],
    "options": [
      {
        "text": "\\( x \\leq 6 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x \\leq -6 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x \\geq 6 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x < 6 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q10h",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\sqrt{9 - 3x} \\).",
    "a": "1",
    "solutionSteps": [
      {
        "explanation": "Identify the function type to find the natural domain. Check if the function contains fractions, square roots, or both.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Apply the analytical rules for natural domains: denominators cannot equal zero, and values inside a square root must be non-negative (greater than or equal to zero).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Set up and solve the resulting inequality or equation to find the restrictions on \\( x \\).",
        "workingOut": "\\( 9 \\ge 3x \\implies 3 \\ge x \\implies x \\le 3 \\)",
        "graphData": null
      },
      {
        "explanation": "State the final domain. **Warning:** Always check the natural domain carefully. Missing a zero denominator or a negative radicand is a common pitfall.",
        "workingOut": "\\( \\text{Final Domain} \\)",
        "graphData": null
      }
    ],
    "options": [
      {
        "text": "\\( x \\leq -3 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x \\leq 3 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x \\geq 3 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x < 3 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q10i",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\frac{2}{\\sqrt{x}} \\).",
    "a": "1",
    "solutionSteps": [
      {
        "explanation": "Identify the function type to find the natural domain. Check if the function contains fractions, square roots, or both.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Apply the analytical rules for natural domains: denominators cannot equal zero, and values inside a square root must be non-negative (greater than or equal to zero).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Set up and solve the resulting inequality or equation to find the restrictions on \\( x \\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "State the final domain. **Warning:** Always check the natural domain carefully. Missing a zero denominator or a negative radicand is a common pitfall.",
        "workingOut": "\\( \\text{Final Domain} \\)",
        "graphData": null
      }
    ],
    "options": [
      {
        "text": "\\( x > 5 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x > 0 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x < 0 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x \\geq 0 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q10j",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\frac{1}{\\sqrt{x + 3}} \\).",
    "a": "0",
    "solutionSteps": [
      {
        "explanation": "Identify the function type to find the natural domain. Check if the function contains fractions, square roots, or both.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Apply the analytical rules for natural domains: denominators cannot equal zero, and values inside a square root must be non-negative (greater than or equal to zero).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Set up and solve the resulting inequality or equation to find the restrictions on \\( x \\).",
        "workingOut": "\\\\( x > -3 \\\\)",
        "graphData": null
      },
      {
        "explanation": "State the final domain. **Warning:** Always check the natural domain carefully. Missing a zero denominator or a negative radicand is a common pitfall.",
        "workingOut": "\\( \\text{Final Domain} \\)",
        "graphData": null
      }
    ],
    "options": [
      {
        "text": "\\( x > -3 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x > 3 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x < -3 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x \\geq -3 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q10k",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\frac{3}{\\sqrt{2 - x}} \\).",
    "a": "0",
    "solutionSteps": [
      {
        "explanation": "Identify the function type to find the natural domain. Check if the function contains fractions, square roots, or both.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Apply the analytical rules for natural domains: denominators cannot equal zero, and values inside a square root must be non-negative (greater than or equal to zero).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Set up and solve the resulting inequality or equation to find the restrictions on \\( x \\).",
        "workingOut": "\\( 2 > x \\implies x < 2 \\)",
        "graphData": null
      },
      {
        "explanation": "State the final domain. **Warning:** Always check the natural domain carefully. Missing a zero denominator or a negative radicand is a common pitfall.",
        "workingOut": "\\( \\text{Final Domain} \\)",
        "graphData": null
      }
    ],
    "options": [
      {
        "text": "\\( x < 2 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x > 2 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x < -2 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x \\leq 2 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q10l",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\frac{1}{\\sqrt{3x - 4}} \\).",
    "a": "1",
    "solutionSteps": [
      {
        "explanation": "Identify the function type to find the natural domain. Check if the function contains fractions, square roots, or both.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Apply the analytical rules for natural domains: denominators cannot equal zero, and values inside a square root must be non-negative (greater than or equal to zero).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Set up and solve the resulting inequality or equation to find the restrictions on \\( x \\).",
        "workingOut": "\\(3x > 4 \\implies x > \\frac{4}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "State the final domain. **Warning:** Always check the natural domain carefully. Missing a zero denominator or a negative radicand is a common pitfall.",
        "workingOut": "\\( \\text{Final Domain} \\)",
        "graphData": null
      }
    ],
    "options": [
      {
        "text": "\\( x < \\frac{4}{3} \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x > \\frac{4}{3} \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x > -\\frac{4}{3} \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x \\geq \\frac{4}{3} \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q11a",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "For the exponential function \\( y = 3^x \\):",
    "isManual": false,
    "requiresManualGrading": true,
    "subQuestions": [
      {
        "id": "y11a-3b-q11a-i",
        "type": "teacher_review",
        "difficulty": "easy",
        "timeLimit": 30,
        "question": "(i) Copy and complete the table of values for \\( x = -2, -1, 0, 1, 2 \\).",
        "solutionSteps": [
          {
            "explanation": "Evaluate \\( y = 3^x \\) for each given \\( x \\) value.",
            "workingOut": "\\(\\begin{array}{|c|c|c|c|c|c|}\\hline x & -2 & -1 & 0 & 1 & 2 \\\\ \\hline y & \\frac{1}{9} & \\frac{1}{3} & 1 & 3 & 9 \\\\ \\hline \\end{array}\\)\n\n\\(\\begin{aligned} x=-2 &\\implies y = 3^{-2} = \\frac{1}{9} \\\\ x=-1 &\\implies y = 3^{-1} = \\frac{1}{3} \\\\ x=0 &\\implies y = 3^0 = 1 \\\\ x=1 &\\implies y = 3^1 = 3 \\\\ x=2 &\\implies y = 3^2 = 9 \\end{aligned}\\)",
            "graphData": null
          }
        ],
        "isManual": false,
        "requiresManualGrading": true
      },
      {
        "id": "y11a-3b-q11a-ii",
        "type": "graph_sketch",
        "difficulty": "medium",
        "timeLimit": 30,
        "question": "(ii) Plot the points and sketch the function.",
        "solutionSteps": [
          {
            "explanation": "**Step 1: Identify the function and goals**\nThe equation \\( y = 3^x \\) is an exponential function. We need to plot the calculated points from part (i) and sketch its curve.",
            "workingOut": "",
            "graphData": null
          },
          {
            "explanation": "**Step 2: Apply the core analytical tool**\nFor an exponential function \\( y = a^x \\) where \\( a > 1 \\), the graph will grow rapidly as \\( x \\) increases and approach a horizontal asymptote as \\( x \\) decreases.",
            "workingOut": "\\( y = 0 \\text{ is the horizontal asymptote.} \\)",
            "graphData": null
          },
          {
            "explanation": "**Step 3: Perform calculations and extract features**\nThe y-intercept occurs at \\( x = 0 \\), which gives \\( y = 3^0 = 1 \\). Plot the coordinates \\( (-2, \\frac{1}{9}) \\), \\( (-1, \\frac{1}{3}) \\), \\( (0, 1) \\), \\( (1, 3) \\), and \\( (2, 9) \\).",
            "workingOut": "",
            "graphData": null
          },
          {
            "explanation": "**Step 4: Final Answer & Pitfall Warning**\nDraw a smooth curve through the points.\n*Warning: A common pitfall is drawing the curve crossing the x-axis. Remember that \\( 3^x \\) is strictly positive, so the curve approaches the negative x-axis asymptotically (\\( y = 0 \\)) but never touches it.*",
            "workingOut": "",
            "graphData": {
              "jsxGraph": {
                "width": 400,
                "height": 400,
                "boundingbox": [
                  -3,
                  10,
                  3,
                  -2
                ],
                "boardOptions": {
                  "keepaspectratio": true
                },
                "script": "board.suspendUpdate();\nboard.create('axis', [[0, 0], [1, 0]]);\nboard.create('axis', [[0, 0], [0, 1]]);\nboard.create('functiongraph', [function(x){ return Math.pow(3, x); }, -3, 3], {strokeColor: '#007FFF', strokeWidth: 2});\nboard.create('point', [-2, 1/9], {name: '', size: 2, color: 'red'});\nboard.create('point', [-1, 1/3], {name: '', size: 2, color: 'red'});\nboard.create('point', [0, 1], {name: '(0, 1)', size: 2, color: 'red'});\nboard.create('point', [1, 3], {name: '', size: 2, color: 'red'});\nboard.create('point', [2, 9], {name: '', size: 2, color: 'red'});\nboard.unsuspendUpdate();"
              }
            }
          }
        ],
        "graphData": null,
        "isManual": false,
        "requiresManualGrading": true
      },
      {
        "id": "y11a-3b-q11a-iii",
        "type": "multiple_choice",
        "difficulty": "medium",
        "timeLimit": 30,
        "question": "(iii) State the domain and range.",
        "options": [
          {
            "text": "\\( \\text{Domain: all real } x,\\ \\text{Range: } y > 0 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( \\text{Domain: all real } x,\\ \\text{Range: all real } y \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( \\text{Domain: all real } x,\\ \\text{Range: } y \\geq 0 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( \\text{Domain: } x > 0,\\ \\text{Range: all real } y \\)",
            "imageUrl": ""
          }
        ],
        "a": "0",
        "solutionSteps": [
          {
            "explanation": "**Step 1: Identify the function and goals**\nThe given equation \\( y = 3^x \\) is an exponential function. We need to determine its natural domain (all valid x-values) and range (all possible y-values).",
            "workingOut": "",
            "graphData": null
          },
          {
            "explanation": "**Step 2: Apply the core analytical tool**\nFor the domain, check if there are any mathematical restrictions on \\( x \\) (e.g., denominators or square roots). For the range, consider the behavior of the exponential curve.",
            "workingOut": "",
            "graphData": null
          },
          {
            "explanation": "**Step 3: Perform calculations and extract features**\nSince \\( x \\) is in the exponent, any real number can be substituted without yielding undefined results, so the domain is unrestricted. For the range, \\( 3^x \\) is strictly positive for any real \\( x \\). It asymptotically approaches \\( y = 0 \\) as \\( x \\to -\\infty \\), but never reaches it.",
            "workingOut": "",
            "graphData": null
          },
          {
            "explanation": "**Step 4: Final Answer & Pitfall Warning**\nBased on our analysis, the domain is all real numbers, and the range is all positive real numbers.\n*Warning: A common pitfall is forgetting that an exponential function cannot equal zero. The range is strictly \\( y > 0 \\), not \\( y \\ge 0 \\).*.",
            "workingOut": "\\( \\text{Domain: all real } x, \\quad \\text{Range: } y > 0 \\)",
            "graphData": null
          }
        ],
        "isManual": false,
        "requiresManualGrading": false
      }
    ]
  },
  {
    "id": "y11a-3b-q11b",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "For the cubic function \\( y = \\frac{1}{4}(3x - x^3) \\):",
    "isManual": false,
    "requiresManualGrading": true,
    "subQuestions": [
      {
        "id": "y11a-3b-q11b-i",
        "type": "teacher_review",
        "difficulty": "easy",
        "timeLimit": 30,
        "question": "(i) Copy and complete the table of values for \\( x = -3, -2, -1, 0, 1, 2, 3 \\).",
        "solutionSteps": [
          {
            "explanation": "Substitute \\( x \\) values into the function expression.",
            "workingOut": "\\(\\begin{array}{|c|c|c|c|c|c|c|c|}\\hline x & -3 & -2 & -1 & 0 & 1 & 2 & 3 \\\\ \\hline y & 4.5 & 0.5 & -0.5 & 0 & 0.5 & -0.5 & -4.5 \\\\ \\hline \\end{array}\\)\n\n\\(\\begin{aligned} x=-3 &\\implies y = \\frac{1}{4}(3(-3) - (-3)^3) = 4.5 \\\\ x=-2 &\\implies y = \\frac{1}{4}(3(-2) - (-2)^3) = 0.5 \\\\ x=-1 &\\implies y = \\frac{1}{4}(3(-1) - (-1)^3) = -0.5 \\\\ x=0 &\\implies y = 0 \\\\ x=1 &\\implies y = 0.5 \\\\ x=2 &\\implies y = -0.5 \\\\ x=3 &\\implies y = -4.5 \\end{aligned}\\)",
            "graphData": null
          }
        ],
        "isManual": false,
        "requiresManualGrading": true
      },
      {
        "id": "y11a-3b-q11b-ii",
        "type": "graph_sketch",
        "difficulty": "medium",
        "timeLimit": 30,
        "question": "(ii) Plot the points and sketch the function.",
        "solutionSteps": [
          {
            "explanation": "**Step 1: Identify the function and goals**\nThe equation \\( y = \\frac{1}{4}(3x - x^3) \\) is a cubic polynomial. We need to plot the calculated points from part (i) and sketch the shape of the cubic curve.",
            "workingOut": "",
            "graphData": null
          },
          {
            "explanation": "**Step 2: Apply the core analytical tool**\nSince the highest power is 3 and its coefficient is negative (\\( -\\frac{1}{4}x^3 \\)), the curve will start in the top-left quadrant and end in the bottom-right quadrant.",
            "workingOut": "",
            "graphData": null
          },
          {
            "explanation": "**Step 3: Perform calculations and extract features**\nPlot the points from the table: \\( (-3, 4.5), (-2, 0.5), (-1, -0.5), (0, 0), (1, 0.5), (2, -0.5) \\), and \\( (3, -4.5) \\). Note the turning points (local minimum and maximum) around \\( x = -1 \\) and \\( x = 1 \\).",
            "workingOut": "",
            "graphData": null
          },
          {
            "explanation": "**Step 4: Final Answer & Pitfall Warning**\nDraw a smooth cubic curve passing through all points.\n*Warning: Do not connect the points with straight lines. Polynomial functions must be sketched as continuous, smooth curves.*",
            "workingOut": "",
            "graphData": {
              "jsxGraph": {
                "width": 400,
                "height": 400,
                "boundingbox": [
                  -4,
                  5,
                  4,
                  -5
                ],
                "boardOptions": {
                  "keepaspectratio": true
                },
                "script": "board.suspendUpdate();\nboard.create('axis', [[0, 0], [1, 0]]);\nboard.create('axis', [[0, 0], [0, 1]]);\nboard.create('functiongraph', [function(x){ return 0.25 * (3*x - Math.pow(x, 3)); }, -4, 4], {strokeColor: '#007FFF', strokeWidth: 2});\nboard.create('point', [-3, 4.5], {name: '', size: 2, color: 'red'});\nboard.create('point', [-2, 0.5], {name: '', size: 2, color: 'red'});\nboard.create('point', [-1, -0.5], {name: 'Min (-1, -0.5)', size: 2, color: 'red'});\nboard.create('point', [0, 0], {name: 'Origin', size: 2, color: 'red'});\nboard.create('point', [1, 0.5], {name: 'Max (1, 0.5)', size: 2, color: 'red'});\nboard.create('point', [2, -0.5], {name: '', size: 2, color: 'red'});\nboard.create('point', [3, -4.5], {name: '', size: 2, color: 'red'});\nboard.unsuspendUpdate();"
              }
            }
          }
        ],
        "graphData": null,
        "isManual": false,
        "requiresManualGrading": true
      },
      {
        "id": "y11a-3b-q11b-iii",
        "type": "multiple_choice",
        "difficulty": "hard",
        "timeLimit": 30,
        "question": "(iii) State the domain and range of this function.",
        "options": [
          {
            "text": "\\( \\text{Domain: all real } x,\\ \\text{Range: all real } y \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( \\text{Domain: all real } x,\\ \\text{Range: } y \\geq 0 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( \\text{Domain: all real } x,\\ \\text{Range: } y \\neq 0 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( \\text{Domain: } x \\geq 0,\\ \\text{Range: all real } y \\)",
            "imageUrl": ""
          }
        ],
        "a": "0",
        "solutionSteps": [
          {
            "explanation": "**Step 1: Identify the function and goals**\nThe given equation \\( y = \\frac{1}{4}(3x - x^3) \\) is a cubic polynomial. We need to determine its domain and range.",
            "workingOut": "",
            "graphData": null
          },
          {
            "explanation": "**Step 2: Apply the core analytical tool**\nFor polynomials, we analyze the natural domain (checking for undefined operations like dividing by zero) and the end behavior of the curve to determine the range.",
            "workingOut": "",
            "graphData": null
          },
          {
            "explanation": "**Step 3: Perform calculations and extract features**\nA cubic function has no variables in a denominator and no square roots, so there are no restrictions on \\( x \\). As \\( x \\to \\infty \\), the dominant term \\( -x^3 \\) dominates and \\( y \\to -\\infty \\). As \\( x \\to -\\infty \\), \\( y \\to \\infty \\). Thus, the graph extends infinitely in both vertical directions.",
            "workingOut": "",
            "graphData": null
          },
          {
            "explanation": "**Step 4: Final Answer & Pitfall Warning**\nSince there are no restrictions horizontally or vertically, both the domain and range are all real numbers.\n*Warning: Unlike quadratics (parabolas) which always have a minimum or maximum value and a restricted range, odd-degree polynomials like cubics typically have a range of all real numbers.*",
            "workingOut": "\\( \\text{Domain: all real } x, \\quad \\text{Range: all real } y \\)",
            "graphData": null
          }
        ],
        "isManual": false,
        "requiresManualGrading": false
      }
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
        "question": "a) What is the natural domain of \\( R(x) \\)?",
        "a": "1",
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
        ],
        "options": [
          {
            "text": "\\( x \\geq 5 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( x \\geq 0 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( x \\leq 0 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( x > 0 \\)",
            "imageUrl": ""
          }
        ],
        "isManual": false,
        "requiresManualGrading": false
      },
      {
        "id": "y11a-3b-q12b",
        "type": "multiple_choice",
        "question": "b) Copy and complete the table of values (round to 1 decimal place where necessary) for \\( R(x) = \\sqrt{2x} \\).\n\n\\(\\begin{array}{|c|c|c|c|c|c|c|c|}\\hline x & 0 & 0.5 & 1 & 2 & 3 & 4.5 & 8 \\\\ \\hline y & a & b & c & d & e & f & g \\\\ \\hline \\end{array}\\)",
        "a": "0",
        "solutionSteps": [
          {
            "explanation": "Evaluate \\( R(x) = \\sqrt{2x} \\) at each given \\( x \\)-value.",
            "workingOut": "\\(\\begin{aligned} a & = R(0) = \\sqrt{0} = 0 \\\\ b & = R(0.5) = \\sqrt{1} = 1 \\\\ c & = R(1) = \\sqrt{2} \\approx 1.4 \\\\ d & = R(2) = \\sqrt{4} = 2 \\\\ e & = R(3) = \\sqrt{6} \\approx 2.4 \\\\ f & = R(4.5) = \\sqrt{9} = 3 \\\\ g & = R(8) = \\sqrt{16} = 4 \\end{aligned}\\)",
            "graphData": null
          }
        ],
        "options": [
          {
            "text": "\\( a=0,\\ b=1,\\ c=1.4,\\ d=2,\\ e=2.4,\\ f=3,\\ g=4 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( a=0,\\ b=1,\\ c=1.4,\\ d=2,\\ e=2.4,\\ f=3,\\ g=4.5 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( a=0,\\ b=1,\\ c=1.4,\\ d=2,\\ e=2.2,\\ f=3,\\ g=4 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( a=0,\\ b=0.7,\\ c=1,\\ d=1.4,\\ e=1.7,\\ f=2.1,\\ g=2.8 \\)",
            "imageUrl": ""
          }
        ],
        "isManual": false,
        "requiresManualGrading": false
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
            "graphData": {
              "jsxGraph": {
                "width": 400,
                "height": 400,
                "boundingbox": [
                  -1,
                  5,
                  9,
                  -1
                ],
                "boardOptions": {
                  "keepaspectratio": true
                },
                "script": "board.suspendUpdate();\nboard.create('axis', [[0, 0], [1, 0]]);\nboard.create('axis', [[0, 0], [0, 1]]);\nboard.create('functiongraph', [function(x){ return Math.sqrt(2 * x); }, 0, 8], {strokeColor: '#007FFF', strokeWidth: 2});\nboard.create('point', [0, 0], {name: 'Origin (0,0)', size: 2, color: 'red'});\nboard.create('point', [0.5, 1], {name: '(0.5, 1)', size: 2, color: 'red'});\nboard.create('point', [2, 2], {name: '(2, 2)', size: 2, color: 'red'});\nboard.create('point', [4.5, 3], {name: '(4.5, 3)', size: 2, color: 'red'});\nboard.create('point', [8, 4], {name: '(8, 4)', size: 2, color: 'red'});\nboard.unsuspendUpdate();"
              }
            }
          }
        ],
        "options": [
          {
            "text": "The curve is the upper half of a parabola opening to the right.",
            "imageUrl": ""
          },
          {
            "text": "The curve is a semicircle centred at the origin.",
            "imageUrl": ""
          },
          {
            "text": "The curve is a full parabola opening upwards.",
            "imageUrl": ""
          },
          {
            "text": "The curve is one branch of a hyperbola.",
            "imageUrl": ""
          }
        ],
        "isManual": false,
        "requiresManualGrading": false
      }
    ]
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
        "question": "a) What is the natural domain of \\( h(x) \\)?",
        "a": "2",
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
        ],
        "options": [
          {
            "text": "\\( x \\neq 5 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( x = 0 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( x \\neq 0 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( x \\in \\mathbb{R}\\ (\\text{all real } x) \\)",
            "imageUrl": ""
          }
        ],
        "isManual": false,
        "requiresManualGrading": false
      },
      {
        "id": "y11a-3b-q13b",
        "type": "multiple_choice",
        "question": "b) Copy and complete the table of values (use '*' or 'undefined' for \\( x = 0 \\)) for \\( h(x) = \\frac{3}{x} \\). Explain why \\( x = 0 \\) is undefined.\n\n\\(\\begin{array}{|c|c|c|c|c|c|c|c|c|c|}\\hline x & -6 & -3 & -1.5 & -1 & 0 & 1 & 1.5 & 3 & 6 \\\\ \\hline y & a & b & c & d & e & f & g & h & i \\\\ \\hline \\end{array}\\)",
        "a": "1",
        "solutionSteps": [
          {
            "explanation": "Evaluate \\( h(x) = \\frac{3}{x} \\) at each given \\( x \\)-value. Remember that dividing by zero is undefined.",
            "workingOut": "\\(\\begin{aligned} a & = \\frac{3}{-6} = -0.5 \\\\ b & = \\frac{3}{-3} = -1 \\\\ c & = \\frac{3}{-1.5} = -2 \\\\ d & = \\frac{3}{-1} = -3 \\\\ e & = \\frac{3}{0} \\implies \\text{undefined} \\\\ f & = \\frac{3}{1} = 3 \\\\ g & = \\frac{3}{1.5} = 2 \\\\ h & = \\frac{3}{3} = 1 \\\\ i & = \\frac{3}{6} = 0.5 \\end{aligned}\\)",
            "graphData": null
          }
        ],
        "options": [
          {
            "text": "\\( a=-0.5,\\ b=-1,\\ c=-2,\\ d=-3,\\ e=\\text{undefined},\\ f=3,\\ g=1.5,\\ h=1,\\ i=0.5 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( a=-0.5,\\ b=-1,\\ c=-2,\\ d=-3,\\ e=\\text{undefined},\\ f=3,\\ g=2,\\ h=1,\\ i=0.5 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( a=0.5,\\ b=1,\\ c=2,\\ d=3,\\ e=\\text{undefined},\\ f=-3,\\ g=-2,\\ h=-1,\\ i=-0.5 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( a=-0.5,\\ b=-1,\\ c=-2,\\ d=-3,\\ e=0,\\ f=3,\\ g=2,\\ h=1,\\ i=0.5 \\)",
            "imageUrl": ""
          }
        ],
        "isManual": false,
        "requiresManualGrading": false
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
            "graphData": {
              "jsxGraph": {
                "width": 400,
                "height": 229,
                "boundingbox": [
                  -7,
                  4,
                  7,
                  -4
                ],
                "script": "board.suspendUpdate();\nboard.create('arrow', [[-6.5,0], [6.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.5], [0,3.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('functiongraph', [function(x){ return 3/x; }, 0.1, 6.5], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('functiongraph', [function(x){ return 3/x; }, -6.5, -0.1], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.unsuspendUpdate();"
              }
            }
          }
        ],
        "options": [
          {
            "text": "The curve is a rectangular hyperbola with asymptotes along the \\( x \\)-axis and \\( y \\)-axis.",
            "imageUrl": ""
          },
          {
            "text": "The curve is a full circle centred at the origin.",
            "imageUrl": ""
          },
          {
            "text": "The curve is a parabola with vertex at the origin.",
            "imageUrl": ""
          },
          {
            "text": "The curve is a straight line through the origin.",
            "imageUrl": ""
          }
        ],
        "isManual": false,
        "requiresManualGrading": false
      }
    ]
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
        "solutionSteps": [
          {
            "explanation": "Opposite sides of a rectangle are always equal in length, so the opposite side is also \\( x \\).",
            "workingOut": "",
            "graphData": null
          }
        ],
        "options": [
          {
            "text": "\\( 24 - x \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( 12 - x \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( x \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( 2x \\)",
            "imageUrl": ""
          }
        ],
        "isManual": false,
        "requiresManualGrading": false
      },
      {
        "id": "y11a-3b-q14b",
        "type": "multiple_choice",
        "question": "b) Write an expression for the length of each of the remaining sides in terms of \\( x \\).",
        "a": "2",
        "solutionSteps": [
          {
            "explanation": "Half the perimeter (\\(12\\text{ cm}\\)) is shared between one pair of adjacent sides, so the remaining side is \\( 12 - x \\).",
            "workingOut": "",
            "graphData": null
          }
        ],
        "options": [
          {
            "text": "\\( 24 - x \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( x \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( 12 - x \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( 12 - 2x \\)",
            "imageUrl": ""
          }
        ],
        "isManual": false,
        "requiresManualGrading": false
      },
      {
        "id": "y11a-3b-q14c",
        "type": "multiple_choice",
        "question": "c) Express the area \\( A \\) of the rectangle as a function of \\( x \\).",
        "a": "2",
        "solutionSteps": [
          {
            "explanation": "Area \\( = \\) length \\( \\times \\) width \\( = x(12-x) \\).",
            "workingOut": "",
            "graphData": null
          }
        ],
        "options": [
          {
            "text": "\\( x^2(12 - x) \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( 2x(12 - x) \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( x(12 - x) \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( x + (12 - x) \\)",
            "imageUrl": ""
          }
        ],
        "isManual": false,
        "requiresManualGrading": false
      },
      {
        "id": "y11a-3b-q14d",
        "type": "multiple_choice",
        "question": "d) Using the fact that physical lengths must be positive, state the domain of \\( A \\).",
        "a": "0",
        "solutionSteps": [
          {
            "explanation": "Both side lengths \\( x \\) and \\( 12-x \\) must be strictly positive, giving \\( 0 < x < 12 \\).",
            "workingOut": "",
            "graphData": null
          }
        ],
        "options": [
          {
            "text": "\\( 0 < x < 12 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( x > 0 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( 0 \\leq x \\leq 12 \\)",
            "imageUrl": ""
          },
          {
            "text": "\\( 0 < x < 24 \\)",
            "imageUrl": ""
          }
        ],
        "isManual": false,
        "requiresManualGrading": false
      },
      {
        "id": "y11a-3b-q14e",
        "type": "teacher_review",
        "question": "e) Sketch the graph of the area function \\( A(x) \\) over the domain found in part d.",
        "a": "Parabola opening downwards with x-intercepts at (0, 0) and (12, 0), and vertex (maximum area) at (6, 36).",
        "solutionSteps": [
          {
            "explanation": "We need to sketch the quadratic function \\( A(x) = 12x - x^2 \\) over the restricted domain \\( 0 < x < 12 \\).",
            "workingOut": "",
            "graphData": null
          },
          {
            "explanation": "First, find the key features: the \\( x \\)-intercepts and the vertex (turning point).\nThe \\( x \\)-intercepts occur when \\( A(x) = 0 \\).\nThe vertex is exactly halfway between the intercepts.",
            "workingOut": "\\(\\begin{aligned} x(12-x) & = 0 \\\\ x & = 0 \\text{ or } x = 12 \\end{aligned}\\)\n\n\\(\\begin{aligned} x_{\\text{vertex}} & = \\frac{0 + 12}{2} = 6 \\\\ y_{\\text{vertex}} & = A(6) = 6(12-6) = 36 \\end{aligned}\\)",
            "graphData": null
          },
          {
            "explanation": "Plot the intercepts \\( (0,0) \\) and \\( (12,0) \\) as **open circles**, because the domain is strictly \\( 0 < x < 12 \\). Plot the vertex \\( (6,36) \\) and draw a smooth, downward-opening parabola connecting them.",
            "workingOut": "",
            "graphData": null
          },
          {
            "explanation": "The graph is an inverted parabola representing the area. Notice that the curve only exists for positive area values.\n\n**Pitfall**: Do not draw arrows at the ends of the curve or extend it below the \\( x \\)-axis. Physical dimensions (length and area) cannot be negative or zero in this context.",
            "workingOut": "",
            "graphData": {
              "jsxGraph": {
                "width": 400,
                "height": 380,
                "boundingbox": [
                  -2,
                  45,
                  14,
                  -5
                ],
                "boardOptions": {
                  "keepaspectratio": false
                },
                "script": "board.suspendUpdate();\nboard.create('arrow', [[-1,0], [13,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3], [0,42]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [-0.4, 40, 'A'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return 12*x - x*x; }, 0, 12], {strokeColor: '#007FFF', strokeWidth: 2, firstArrow: false, lastArrow: false});\nboard.create('point', [6, 36], {name: '(6,36)', size: 3, color: 'red', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [0, 0], {name: '(0,0)', size: 3, face: 'o', color: '#007FFF', fixed: true, strokeWidth: 2, fillColor: 'white'});\nboard.create('point', [12, 0], {name: '(12,0)', size: 3, face: 'o', color: '#007FFF', fixed: true, strokeWidth: 2, fillColor: 'white'});\nboard.unsuspendUpdate();"
              }
            }
          }
        ]
      }
    ]
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
        "explanation": "To determine if the equation represents a function, we must first make \\( y \\) the subject (isolate \\( y \\)).",
        "workingOut": "\\( 3x - y + 4 = 0 \\)",
        "graphData": null
      },
      {
        "explanation": "Add \\( y \\) to both sides to isolate it.",
        "workingOut": "\\( y = 3x + 4 \\)",
        "graphData": null
      },
      {
        "explanation": "Analyze the resulting equation. For every real number we substitute for \\( x \\), the expression \\( 3x + 4 \\) will evaluate to exactly one unique real number for \\( y \\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Since each valid input \\( x \\) produces exactly one output \\( y \\), this equation represents a function.",
        "workingOut": "",
        "graphData": null
      }
    ],
    "options": [
      {
        "text": "\\( y = 3x + 4 \\). It represents a function because for every input \\( x \\), there is exactly one corresponding value of \\( y \\).",
        "imageUrl": ""
      },
      {
        "text": "\\( y = 3x + 4 \\). It represents a relation but not a function because it is a straight line.",
        "imageUrl": ""
      },
      {
        "text": "\\( y = 3x - 4 \\). It represents a function because for every input \\( x \\), there is exactly one corresponding value of \\( y \\).",
        "imageUrl": ""
      },
      {
        "text": "\\( y = -3x + 4 \\). It represents a function because for every input \\( x \\), there is exactly one corresponding value of \\( y \\).",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
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
        "explanation": "We start by making \\( y \\) the subject of the formula.",
        "workingOut": "\\( xy = 6 \\)",
        "graphData": null
      },
      {
        "explanation": "Divide both sides by \\( x \\). Note that this means \\( x \\neq 0 \\).",
        "workingOut": "\\( y = \\frac{6}{x} \\)",
        "graphData": null
      },
      {
        "explanation": "For any valid input \\( x \\) in the domain (i.e., all real numbers except \\( 0 \\)), the fraction \\( \\frac{6}{x} \\) evaluates to a single, unique value of \\( y \\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Since there is exactly one \\( y \\)-value for every valid \\( x \\)-value, it represents a function.",
        "workingOut": "",
        "graphData": null
      }
    ],
    "options": [
      {
        "text": "\\( y = \\frac{6}{x} \\). It represents a function because for every input \\( x \\) (except \\( x = 0 \\)), there is exactly one value of \\( y \\).",
        "imageUrl": ""
      },
      {
        "text": "\\( y = \\frac{6}{x} \\). It represents a relation but not a function because \\( x = 0 \\) gives undefined values.",
        "imageUrl": ""
      },
      {
        "text": "\\( y = -\\frac{6}{x} \\). It represents a function because for every input \\( x \\) (except \\( x = 0 \\)), there is exactly one value of \\( y \\).",
        "imageUrl": ""
      },
      {
        "text": "\\( y = \\frac{x}{6} \\). It represents a function because for every input \\( x \\), there is exactly one value of \\( y \\).",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
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
        "explanation": "We want to make \\( y \\) the subject. Notice that \\( y \\) appears in two terms.",
        "workingOut": "\\( xy - 3y = 4 \\)",
        "graphData": null
      },
      {
        "explanation": "Factor out \\( y \\) on the left hand side.",
        "workingOut": "\\( y(x - 3) = 4 \\)",
        "graphData": null
      },
      {
        "explanation": "Divide both sides by \\( x - 3 \\). (This restricts the domain to \\( x \\neq 3 \\)).",
        "workingOut": "\\( y = \\frac{4}{x - 3} \\)",
        "graphData": null
      },
      {
        "explanation": "For any valid input \\( x \\neq 3 \\), the expression yields exactly one output \\( y \\). Therefore, it is a function.",
        "workingOut": "",
        "graphData": null
      }
    ],
    "options": [
      {
        "text": "\\( y = \\frac{4}{x+3} \\). It represents a function because for any input \\( x \\) (except \\( x = -3 \\)), there is exactly one value of \\( y \\).",
        "imageUrl": ""
      },
      {
        "text": "\\( y = \\frac{x-3}{4} \\). It represents a function because for any input \\( x \\), there is exactly one value of \\( y \\).",
        "imageUrl": ""
      },
      {
        "text": "\\( y = \\frac{4}{x-3} \\). It represents a function because for any input \\( x \\) (except \\( x = 3 \\)), there is exactly one value of \\( y \\).",
        "imageUrl": ""
      },
      {
        "text": "\\( y = \\frac{4}{x-3} \\). It represents a relation but not a function because \\( x = 3 \\) is undefined.",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
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
        "explanation": "Isolate \\( y \\) to determine whether the equation represents a function.",
        "workingOut": "\\( y + 3 = \\sqrt{16 - x^2} \\)",
        "graphData": null
      },
      {
        "explanation": "Subtract 3 from both sides.",
        "workingOut": "\\( y = \\sqrt{16 - x^2} - 3 \\)",
        "graphData": null
      },
      {
        "explanation": "Observe the square root symbol. Unlike introducing a square root (which requires \\( \\pm \\)), the symbol \\( \\sqrt{} \\) already present in the question explicitly refers only to the **principal (positive)** square root.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "For any \\( x \\) in the domain (\\( -4 \\le x \\le 4 \\)), the principal square root yields exactly one value. Subtracting 3 still leaves exactly one value for \\( y \\). Thus, it is a function.",
        "workingOut": "",
        "graphData": null
      }
    ],
    "options": [
      {
        "text": "\\( y = \\sqrt{16+x^2} - 3 \\). It represents a function because the positive square root sign specifies a single principal output value of \\( y \\).",
        "imageUrl": ""
      },
      {
        "text": "\\( y = \\pm\\sqrt{16-x^2} - 3 \\). It represents a relation but not a function because each \\( x \\)-value gives two \\( y \\)-values.",
        "imageUrl": ""
      },
      {
        "text": "\\( y = \\sqrt{16-x^2} - 3 \\). It represents a function because the positive square root sign specifies a single principal output value of \\( y \\) for each input \\( x \\) in the domain \\( [-4, 4] \\).",
        "imageUrl": ""
      },
      {
        "text": "\\( y = \\sqrt{16-x^2} + 3 \\). It represents a function because the positive square root sign specifies a single principal output value of \\( y \\).",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q16a",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\frac{x}{\\sqrt{x + 3}} \\).",
    "a": "1",
    "solutionSteps": [
      {
        "explanation": "Identify the function type to find the natural domain. Check if the function contains fractions, square roots, or both.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Apply the analytical rules for natural domains: denominators cannot equal zero, and values inside a square root must be non-negative (greater than or equal to zero).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Set up and solve the resulting inequality or equation to find the restrictions on \\( x \\).",
        "workingOut": "\\\\( x > -3 \\\\)",
        "graphData": null
      },
      {
        "explanation": "State the final domain. **Warning:** Always check the natural domain carefully. Missing a zero denominator or a negative radicand is a common pitfall.",
        "workingOut": "\\( \\text{Final Domain} \\)",
        "graphData": null
      }
    ],
    "options": [
      {
        "text": "\\( x < -3 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x > -3 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x > 3 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x \\geq -3 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q16b",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\frac{3}{x^2 - 9} \\).",
    "a": "0",
    "solutionSteps": [
      {
        "explanation": "Identify the function type to find the natural domain. Check if the function contains fractions, square roots, or both.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Apply the analytical rules for natural domains: denominators cannot equal zero, and values inside a square root must be non-negative (greater than or equal to zero).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Set up and solve the resulting inequality or equation to find the restrictions on \\( x \\).",
        "workingOut": "\\((x - 3)(x + 3) \\neq 0 \\implies x \\neq 3 \\text{ and } x \\neq -3\\)",
        "graphData": null
      },
      {
        "explanation": "State the final domain. **Warning:** Always check the natural domain carefully. Missing a zero denominator or a negative radicand is a common pitfall.",
        "workingOut": "\\( \\text{Final Domain} \\)",
        "graphData": null
      }
    ],
    "options": [
      {
        "text": "\\( x \\neq 3 \\text{ and } x \\neq -3 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x \\neq 3 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x \\in \\mathbb{R}\\ (\\text{all real } x) \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x \\neq -3 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q16c",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\frac{1}{x^2 + 2x} \\).",
    "a": "1",
    "solutionSteps": [
      {
        "explanation": "Identify the function type to find the natural domain. Check if the function contains fractions, square roots, or both.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Apply the analytical rules for natural domains: denominators cannot equal zero, and values inside a square root must be non-negative (greater than or equal to zero).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Set up and solve the resulting inequality or equation to find the restrictions on \\( x \\).",
        "workingOut": "\\( x(x + 2) \\neq 0 \\)",
        "graphData": null
      },
      {
        "explanation": "State the final domain. **Warning:** Always check the natural domain carefully. Missing a zero denominator or a negative radicand is a common pitfall.",
        "workingOut": "\\( \\text{Final Domain} \\)",
        "graphData": null
      }
    ],
    "options": [
      {
        "text": "\\( x \\neq 0 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x \\neq 0 \\text{ and } x \\neq -2 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x \\in \\mathbb{R}\\ (\\text{all real } x) \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x \\neq -2 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q16d",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\frac{1}{x^2 - 6x + 8} \\).",
    "a": "1",
    "solutionSteps": [
      {
        "explanation": "Identify the function type to find the natural domain. Check if the function contains fractions, square roots, or both.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Apply the analytical rules for natural domains: denominators cannot equal zero, and values inside a square root must be non-negative (greater than or equal to zero).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Set up and solve the resulting inequality or equation to find the restrictions on \\( x \\).",
        "workingOut": "\\( (x - 2)(x - 4) \\neq 0 \\)",
        "graphData": null
      },
      {
        "explanation": "State the final domain. **Warning:** Always check the natural domain carefully. Missing a zero denominator or a negative radicand is a common pitfall.",
        "workingOut": "\\( \\text{Final Domain} \\)",
        "graphData": null
      }
    ],
    "options": [
      {
        "text": "\\( x \\neq 2 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x \\neq 2 \\text{ and } x \\neq 4 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x \\in \\mathbb{R}\\ (\\text{all real } x) \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x \\neq 4 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q16e",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\sqrt{x^2 - 9} \\).",
    "a": "2",
    "solutionSteps": [
      {
        "explanation": "Identify the function type to find the natural domain. Check if the function contains fractions, square roots, or both.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Apply the analytical rules for natural domains: denominators cannot equal zero, and values inside a square root must be non-negative (greater than or equal to zero).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Set up and solve the resulting inequality or equation to find the restrictions on \\( x \\).",
        "workingOut": "\\( (x - 3)(x + 3) \\ge 0 \\)",
        "graphData": null
      },
      {
        "explanation": "State the final domain. **Warning:** Always check the natural domain carefully. Missing a zero denominator or a negative radicand is a common pitfall.",
        "workingOut": "\\( \\text{Final Domain} \\)",
        "graphData": null
      }
    ],
    "options": [
      {
        "text": "\\( x \\geq 3 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( -3 \\leq x \\leq 3 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x \\leq -3 \\text{ or } x \\geq 3 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x < -3 \\text{ or } x > 3 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q16f",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of \\( f(x) = \\frac{1}{\\sqrt{4 - x^2}} \\).",
    "a": "2",
    "solutionSteps": [
      {
        "explanation": "Identify the function type to find the natural domain. Check if the function contains fractions, square roots, or both.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Apply the analytical rules for natural domains: denominators cannot equal zero, and values inside a square root must be non-negative (greater than or equal to zero).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Set up and solve the resulting inequality or equation to find the restrictions on \\( x \\).",
        "workingOut": "\\\\( (2 - x)(2 + x) > 0 \\\\)",
        "graphData": null
      },
      {
        "explanation": "State the final domain. **Warning:** Always check the natural domain carefully. Missing a zero denominator or a negative radicand is a common pitfall.",
        "workingOut": "\\( \\text{Final Domain} \\)",
        "graphData": null
      }
    ],
    "options": [
      {
        "text": "\\( x \\leq -2 \\text{ or } x \\geq 2 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x < 2 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( -2 < x < 2 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( -2 \\leq x \\leq 2 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q17a",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of the function \\( f(x) = \\sqrt{\\frac{x - 2}{x - 3}} \\).",
    "a": "1",
    "solutionSteps": [
      {
        "explanation": "First, rationalize the denominator by multiplying the numerator and denominator inside the square root by \\( (x - 3) \\).",
        "workingOut": "\\( \\sqrt{\\frac{x - 2}{x - 3}} = \\sqrt{\\frac{(x - 2)(x - 3)}{(x - 3)^2}} = \\frac{\\sqrt{(x - 2)(x - 3)}}{|x - 3|} \\)",
        "graphData": null
      },
      {
        "explanation": "From this rationalized form, identify the two conditions required for the natural domain: the expression inside the square root (surd) in the numerator must be non-negative, and the denominator cannot be zero.",
        "workingOut": "\\begin{aligned} \\text{Numerator condition: } & (x - 2)(x - 3) \\ge 0 \\\\ \\text{Denominator condition: } & x - 3 \\neq 0 \\implies x \\neq 3 \\end{aligned}",
        "graphData": null
      },
      {
        "explanation": "Solve the quadratic inequality \\( (x - 2)(x - 3) \\ge 0 \\). This represents a parabola opening upwards with roots at \\( x = 2 \\) and \\( x = 3 \\).",
        "workingOut": "\\( (x - 2)(x - 3) \\ge 0 \\implies x \\le 2 \\text{ or } x \\ge 3 \\)",
        "graphData": null
      },
      {
        "explanation": "Combine the inequality solution with the denominator restriction to state the final natural domain. We must exclude \\( x = 3 \\).",
        "workingOut": "\\( x \\le 2 \\text{ or } x > 3 \\)",
        "graphData": null
      }
    ],
    "options": [
      {
        "text": "\\( x \\neq 3 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x \\leq 2 \\text{ or } x > 3 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x < 2 \\text{ or } x \\geq 3 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( 2 \\leq x < 3 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q17b",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of the function \\( f(x) = \\sqrt{\\frac{x - 4}{x - 6}} \\).",
    "a": "0",
    "solutionSteps": [
      {
        "explanation": "First, rationalize the denominator by multiplying the numerator and denominator inside the square root by \\( (x - 6) \\).",
        "workingOut": "\\( \\sqrt{\\frac{x - 4}{x - 6}} = \\sqrt{\\frac{(x - 4)(x - 6)}{(x - 6)^2}} = \\frac{\\sqrt{(x - 4)(x - 6)}}{|x - 6|} \\)",
        "graphData": null
      },
      {
        "explanation": "From this rationalized form, identify the two conditions required for the natural domain: the expression inside the square root (surd) in the numerator must be non-negative, and the denominator cannot be zero.",
        "workingOut": "\\begin{aligned} \\text{Numerator condition: } & (x - 4)(x - 6) \\ge 0 \\\\ \\text{Denominator condition: } & x - 6 \\neq 0 \\implies x \\neq 6 \\end{aligned}",
        "graphData": null
      },
      {
        "explanation": "Solve the quadratic inequality \\( (x - 4)(x - 6) \\ge 0 \\). This represents a parabola opening upwards with roots at \\( x = 4 \\) and \\( x = 6 \\).",
        "workingOut": "\\( (x - 4)(x - 6) \\ge 0 \\implies x \\le 4 \\text{ or } x \\ge 6 \\)",
        "graphData": null
      },
      {
        "explanation": "Combine the inequality solution with the denominator restriction to state the final natural domain. We must exclude \\( x = 6 \\).",
        "workingOut": "\\( x \\le 4 \\text{ or } x > 6 \\)",
        "graphData": null
      }
    ],
    "options": [
      {
        "text": "\\( x \\leq 4 \\text{ or } x > 6 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x \\neq 6 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x < 4 \\text{ or } x \\geq 6 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( 4 \\leq x < 6 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q17c",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of the function \\( f(x) = \\sqrt{\\frac{x - 6}{x - 9}} \\).",
    "a": "0",
    "solutionSteps": [
      {
        "explanation": "First, rationalize the denominator by multiplying the numerator and denominator inside the square root by \\( (x - 9) \\).",
        "workingOut": "\\( \\sqrt{\\frac{x - 6}{x - 9}} = \\sqrt{\\frac{(x - 6)(x - 9)}{(x - 9)^2}} = \\frac{\\sqrt{(x - 6)(x - 9)}}{|x - 9|} \\)",
        "graphData": null
      },
      {
        "explanation": "From this rationalized form, identify the two conditions required for the natural domain: the expression inside the square root (surd) in the numerator must be non-negative, and the denominator cannot be zero.",
        "workingOut": "\\begin{aligned} \\text{Numerator condition: } & (x - 6)(x - 9) \\ge 0 \\\\ \\text{Denominator condition: } & x - 9 \\neq 0 \\implies x \\neq 9 \\end{aligned}",
        "graphData": null
      },
      {
        "explanation": "Solve the quadratic inequality \\( (x - 6)(x - 9) \\ge 0 \\). This represents a parabola opening upwards with roots at \\( x = 6 \\) and \\( x = 9 \\).",
        "workingOut": "\\( (x - 6)(x - 9) \\ge 0 \\implies x \\le 6 \\text{ or } x \\ge 9 \\)",
        "graphData": null
      },
      {
        "explanation": "Combine the inequality solution with the denominator restriction to state the final natural domain. We must exclude \\( x = 9 \\).",
        "workingOut": "\\( x \\le 6 \\text{ or } x > 9 \\)",
        "graphData": null
      }
    ],
    "options": [
      {
        "text": "\\( x \\leq 6 \\text{ or } x > 9 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x < 6 \\text{ or } x \\geq 9 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x \\neq 9 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( 6 \\leq x < 9 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q17d",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of the function \\( f(x) = \\sqrt{\\frac{x - 8}{x - 12}} \\).",
    "a": "1",
    "solutionSteps": [
      {
        "explanation": "First, rationalize the denominator by multiplying the numerator and denominator inside the square root by \\( (x - 12) \\).",
        "workingOut": "\\( \\sqrt{\\frac{x - 8}{x - 12}} = \\sqrt{\\frac{(x - 8)(x - 12)}{(x - 12)^2}} = \\frac{\\sqrt{(x - 8)(x - 12)}}{|x - 12|} \\)",
        "graphData": null
      },
      {
        "explanation": "From this rationalized form, identify the two conditions required for the natural domain: the expression inside the square root (surd) in the numerator must be non-negative, and the denominator cannot be zero.",
        "workingOut": "\\begin{aligned} \\text{Numerator condition: } & (x - 8)(x - 12) \\ge 0 \\\\ \\text{Denominator condition: } & x - 12 \\neq 0 \\implies x \\neq 12 \\end{aligned}",
        "graphData": null
      },
      {
        "explanation": "Solve the quadratic inequality \\( (x - 8)(x - 12) \\ge 0 \\). This represents a parabola opening upwards with roots at \\( x = 8 \\) and \\( x = 12 \\).",
        "workingOut": "\\( (x - 8)(x - 12) \\ge 0 \\implies x \\le 8 \\text{ or } x \\ge 12 \\)",
        "graphData": null
      },
      {
        "explanation": "Combine the inequality solution with the denominator restriction to state the final natural domain. We must exclude \\( x = 12 \\).",
        "workingOut": "\\( x \\le 8 \\text{ or } x > 12 \\)",
        "graphData": null
      }
    ],
    "options": [
      {
        "text": "\\( x < 8 \\text{ or } x \\geq 12 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x \\leq 8 \\text{ or } x > 12 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( 8 \\leq x < 12 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x \\neq 12 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q17e",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of the function \\( f(x) = \\sqrt{\\frac{x - 10}{x - 15}} \\).",
    "a": "1",
    "solutionSteps": [
      {
        "explanation": "First, rationalize the denominator by multiplying the numerator and denominator inside the square root by \\( (x - 15) \\).",
        "workingOut": "\\( \\sqrt{\\frac{x - 10}{x - 15}} = \\sqrt{\\frac{(x - 10)(x - 15)}{(x - 15)^2}} = \\frac{\\sqrt{(x - 10)(x - 15)}}{|x - 15|} \\)",
        "graphData": null
      },
      {
        "explanation": "From this rationalized form, identify the two conditions required for the natural domain: the expression inside the square root (surd) in the numerator must be non-negative, and the denominator cannot be zero.",
        "workingOut": "\\begin{aligned} \\text{Numerator condition: } & (x - 10)(x - 15) \\ge 0 \\\\ \\text{Denominator condition: } & x - 15 \\neq 0 \\implies x \\neq 15 \\end{aligned}",
        "graphData": null
      },
      {
        "explanation": "Solve the quadratic inequality \\( (x - 10)(x - 15) \\ge 0 \\). This represents a parabola opening upwards with roots at \\( x = 10 \\) and \\( x = 15 \\).",
        "workingOut": "\\( (x - 10)(x - 15) \\ge 0 \\implies x \\le 10 \\text{ or } x \\ge 15 \\)",
        "graphData": null
      },
      {
        "explanation": "Combine the inequality solution with the denominator restriction to state the final natural domain. We must exclude \\( x = 15 \\).",
        "workingOut": "\\( x \\le 10 \\text{ or } x > 15 \\)",
        "graphData": null
      }
    ],
    "options": [
      {
        "text": "\\( x < 10 \\text{ or } x \\geq 15 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x \\leq 10 \\text{ or } x > 15 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( 10 \\leq x < 15 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x \\neq 15 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q17f",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of the function \\( f(x) = \\sqrt{\\frac{x - 12}{x - 18}} \\).",
    "a": "0",
    "solutionSteps": [
      {
        "explanation": "First, rationalize the denominator by multiplying the numerator and denominator inside the square root by \\( (x - 18) \\).",
        "workingOut": "\\( \\sqrt{\\frac{x - 12}{x - 18}} = \\sqrt{\\frac{(x - 12)(x - 18)}{(x - 18)^2}} = \\frac{\\sqrt{(x - 12)(x - 18)}}{|x - 18|} \\)",
        "graphData": null
      },
      {
        "explanation": "From this rationalized form, identify the two conditions required for the natural domain: the expression inside the square root (surd) in the numerator must be non-negative, and the denominator cannot be zero.",
        "workingOut": "\\begin{aligned} \\text{Numerator condition: } & (x - 12)(x - 18) \\ge 0 \\\\ \\text{Denominator condition: } & x - 18 \\neq 0 \\implies x \\neq 18 \\end{aligned}",
        "graphData": null
      },
      {
        "explanation": "Solve the quadratic inequality \\( (x - 12)(x - 18) \\ge 0 \\). This represents a parabola opening upwards with roots at \\( x = 12 \\) and \\( x = 18 \\).",
        "workingOut": "\\( (x - 12)(x - 18) \\ge 0 \\implies x \\le 12 \\text{ or } x \\ge 18 \\)",
        "graphData": null
      },
      {
        "explanation": "Combine the inequality solution with the denominator restriction to state the final natural domain. We must exclude \\( x = 18 \\).",
        "workingOut": "\\( x \\le 12 \\text{ or } x > 18 \\)",
        "graphData": null
      }
    ],
    "options": [
      {
        "text": "\\( x \\leq 12 \\text{ or } x > 18 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x < 12 \\text{ or } x \\geq 18 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( 12 \\leq x < 18 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x \\neq 18 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q17g",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of the function \\( f(x) = \\sqrt{\\frac{x - 14}{x - 21}} \\).",
    "a": "2",
    "solutionSteps": [
      {
        "explanation": "First, rationalize the denominator by multiplying the numerator and denominator inside the square root by \\( (x - 21) \\).",
        "workingOut": "\\( \\sqrt{\\frac{x - 14}{x - 21}} = \\sqrt{\\frac{(x - 14)(x - 21)}{(x - 21)^2}} = \\frac{\\sqrt{(x - 14)(x - 21)}}{|x - 21|} \\)",
        "graphData": null
      },
      {
        "explanation": "From this rationalized form, identify the two conditions required for the natural domain: the expression inside the square root (surd) in the numerator must be non-negative, and the denominator cannot be zero.",
        "workingOut": "\\begin{aligned} \\text{Numerator condition: } & (x - 14)(x - 21) \\ge 0 \\\\ \\text{Denominator condition: } & x - 21 \\neq 0 \\implies x \\neq 21 \\end{aligned}",
        "graphData": null
      },
      {
        "explanation": "Solve the quadratic inequality \\( (x - 14)(x - 21) \\ge 0 \\). This represents a parabola opening upwards with roots at \\( x = 14 \\) and \\( x = 21 \\).",
        "workingOut": "\\( (x - 14)(x - 21) \\ge 0 \\implies x \\le 14 \\text{ or } x \\ge 21 \\)",
        "graphData": null
      },
      {
        "explanation": "Combine the inequality solution with the denominator restriction to state the final natural domain. We must exclude \\( x = 21 \\).",
        "workingOut": "\\( x \\le 14 \\text{ or } x > 21 \\)",
        "graphData": null
      }
    ],
    "options": [
      {
        "text": "\\( x < 14 \\text{ or } x \\geq 21 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( 14 \\leq x < 21 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x \\leq 14 \\text{ or } x > 21 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x \\neq 21 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q17h",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of the function \\( f(x) = \\sqrt{\\frac{x - 16}{x - 24}} \\).",
    "a": "2",
    "solutionSteps": [
      {
        "explanation": "First, rationalize the denominator by multiplying the numerator and denominator inside the square root by \\( (x - 24) \\).",
        "workingOut": "\\( \\sqrt{\\frac{x - 16}{x - 24}} = \\sqrt{\\frac{(x - 16)(x - 24)}{(x - 24)^2}} = \\frac{\\sqrt{(x - 16)(x - 24)}}{|x - 24|} \\)",
        "graphData": null
      },
      {
        "explanation": "From this rationalized form, identify the two conditions required for the natural domain: the expression inside the square root (surd) in the numerator must be non-negative, and the denominator cannot be zero.",
        "workingOut": "\\begin{aligned} \\text{Numerator condition: } & (x - 16)(x - 24) \\ge 0 \\\\ \\text{Denominator condition: } & x - 24 \\neq 0 \\implies x \\neq 24 \\end{aligned}",
        "graphData": null
      },
      {
        "explanation": "Solve the quadratic inequality \\( (x - 16)(x - 24) \\ge 0 \\). This represents a parabola opening upwards with roots at \\( x = 16 \\) and \\( x = 24 \\).",
        "workingOut": "\\( (x - 16)(x - 24) \\ge 0 \\implies x \\le 16 \\text{ or } x \\ge 24 \\)",
        "graphData": null
      },
      {
        "explanation": "Combine the inequality solution with the denominator restriction to state the final natural domain. We must exclude \\( x = 24 \\).",
        "workingOut": "\\( x \\le 16 \\text{ or } x > 24 \\)",
        "graphData": null
      }
    ],
    "options": [
      {
        "text": "\\( x < 16 \\text{ or } x \\geq 24 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( 16 \\leq x < 24 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x \\leq 16 \\text{ or } x > 24 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x \\neq 24 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q17i",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of the function \\( f(x) = \\sqrt{\\frac{x - 18}{x - 27}} \\).",
    "a": "2",
    "solutionSteps": [
      {
        "explanation": "First, rationalize the denominator by multiplying the numerator and denominator inside the square root by \\( (x - 27) \\).",
        "workingOut": "\\( \\sqrt{\\frac{x - 18}{x - 27}} = \\sqrt{\\frac{(x - 18)(x - 27)}{(x - 27)^2}} = \\frac{\\sqrt{(x - 18)(x - 27)}}{|x - 27|} \\)",
        "graphData": null
      },
      {
        "explanation": "From this rationalized form, identify the two conditions required for the natural domain: the expression inside the square root (surd) in the numerator must be non-negative, and the denominator cannot be zero.",
        "workingOut": "\\begin{aligned} \\text{Numerator condition: } & (x - 18)(x - 27) \\ge 0 \\\\ \\text{Denominator condition: } & x - 27 \\neq 0 \\implies x \\neq 27 \\end{aligned}",
        "graphData": null
      },
      {
        "explanation": "Solve the quadratic inequality \\( (x - 18)(x - 27) \\ge 0 \\). This represents a parabola opening upwards with roots at \\( x = 18 \\) and \\( x = 27 \\).",
        "workingOut": "\\( (x - 18)(x - 27) \\ge 0 \\implies x \\le 18 \\text{ or } x \\ge 27 \\)",
        "graphData": null
      },
      {
        "explanation": "Combine the inequality solution with the denominator restriction to state the final natural domain. We must exclude \\( x = 27 \\).",
        "workingOut": "\\( x \\le 18 \\text{ or } x > 27 \\)",
        "graphData": null
      }
    ],
    "options": [
      {
        "text": "\\( 18 \\leq x < 27 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x < 18 \\text{ or } x \\geq 27 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x \\leq 18 \\text{ or } x > 27 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x \\neq 27 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q17j",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the natural domain of the function \\( f(x) = \\sqrt{\\frac{x - 20}{x - 30}} \\).",
    "a": "2",
    "solutionSteps": [
      {
        "explanation": "First, rationalize the denominator by multiplying the numerator and denominator inside the square root by \\( (x - 30) \\).",
        "workingOut": "\\( \\sqrt{\\frac{x - 20}{x - 30}} = \\sqrt{\\frac{(x - 20)(x - 30)}{(x - 30)^2}} = \\frac{\\sqrt{(x - 20)(x - 30)}}{|x - 30|} \\)",
        "graphData": null
      },
      {
        "explanation": "From this rationalized form, identify the two conditions required for the natural domain: the expression inside the square root (surd) in the numerator must be non-negative, and the denominator cannot be zero.",
        "workingOut": "\\begin{aligned} \\text{Numerator condition: } & (x - 20)(x - 30) \\ge 0 \\\\ \\text{Denominator condition: } & x - 30 \\neq 0 \\implies x \\neq 30 \\end{aligned}",
        "graphData": null
      },
      {
        "explanation": "Solve the quadratic inequality \\( (x - 20)(x - 30) \\ge 0 \\). This represents a parabola opening upwards with roots at \\( x = 20 \\) and \\( x = 30 \\).",
        "workingOut": "\\( (x - 20)(x - 30) \\ge 0 \\implies x \\le 20 \\text{ or } x \\ge 30 \\)",
        "graphData": null
      },
      {
        "explanation": "Combine the inequality solution with the denominator restriction to state the final natural domain. We must exclude \\( x = 30 \\).",
        "workingOut": "\\( x \\le 20 \\text{ or } x > 30 \\)",
        "graphData": null
      }
    ],
    "options": [
      {
        "text": "\\( x < 20 \\text{ or } x \\geq 30 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( 20 \\leq x < 30 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x \\leq 20 \\text{ or } x > 30 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( x \\neq 30 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q18a",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the range of the rational function \\( f(x) = \\frac{1x + 3}{5x - 1} \\).",
    "a": "0",
    "solutionSteps": [
      {
        "explanation": "To find the range of this rational function, we find its horizontal asymptote by evaluating the limit as \\( x \\to \\infty \\).",
        "workingOut": "\\( \\lim_{x \\to \\infty} \\frac{x + 3}{5x - 1} \\)",
        "graphData": null
      },
      {
        "explanation": "Divide every term in the numerator and the denominator by \\( x \\) (the leading term's variable of the denominator).",
        "workingOut": "\\( = \\lim_{x \\to \\infty} \\frac{1 + \\frac{3}{x}}{5 + \\frac{-1}{x}} \\)",
        "graphData": null
      },
      {
        "explanation": "As \\( x \\) approaches infinity, any term with \\( x \\) in the denominator approaches zero.",
        "workingOut": "\\( = \\frac{1 + 0}{5 + 0} = \\frac{1}{5} \\)",
        "graphData": null
      },
      {
        "explanation": "The horizontal asymptote is \\( y = \\frac{1}{5} \\). Since the graph approaches but never touches this line, this value is excluded from the range.",
        "workingOut": "\\( y \\neq \\frac{1}{5} \\)",
        "graphData": null
      }
    ],
    "options": [
      {
        "text": "\\( y \\neq \\frac{1}{5} \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( y \\neq \\frac{5}{1} \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( y \\in \\mathbb{R}\\ (\\text{all real } y) \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( y \\neq \\frac{3}{5} \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q18b",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the range of the rational function \\( f(x) = \\frac{2x + 4}{6x - 2} \\).",
    "a": "0",
    "solutionSteps": [
      {
        "explanation": "To find the range of this rational function, we find its horizontal asymptote by evaluating the limit as \\( x \\to \\infty \\).",
        "workingOut": "\\( \\lim_{x \\to \\infty} \\frac{2x + 4}{6x - 2} \\)",
        "graphData": null
      },
      {
        "explanation": "Divide every term in the numerator and the denominator by \\( x \\) (the leading term's variable of the denominator).",
        "workingOut": "\\( = \\lim_{x \\to \\infty} \\frac{2 + \\frac{4}{x}}{6 + \\frac{-2}{x}} \\)",
        "graphData": null
      },
      {
        "explanation": "As \\( x \\) approaches infinity, any term with \\( x \\) in the denominator approaches zero.",
        "workingOut": "\\( = \\frac{2 + 0}{6 + 0} = \\frac{2}{6} \\)",
        "graphData": null
      },
      {
        "explanation": "The horizontal asymptote is \\( y = \\frac{2}{6} \\). Since the graph approaches but never touches this line, this value is excluded from the range.",
        "workingOut": "\\( y \\neq \\frac{2}{6} \\)",
        "graphData": null
      }
    ],
    "options": [
      {
        "text": "\\( y \\neq \\frac{2}{6} \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( y \\in \\mathbb{R}\\ (\\text{all real } y) \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( y \\neq \\frac{4}{6} \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( y \\neq \\frac{6}{2} \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q18c",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the range of the rational function \\( f(x) = \\frac{3x + 5}{7x - 3} \\).",
    "a": "2",
    "solutionSteps": [
      {
        "explanation": "To find the range of this rational function, we find its horizontal asymptote by evaluating the limit as \\( x \\to \\infty \\).",
        "workingOut": "\\( \\lim_{x \\to \\infty} \\frac{3x + 5}{7x - 3} \\)",
        "graphData": null
      },
      {
        "explanation": "Divide every term in the numerator and the denominator by \\( x \\) (the leading term's variable of the denominator).",
        "workingOut": "\\( = \\lim_{x \\to \\infty} \\frac{3 + \\frac{5}{x}}{7 + \\frac{-3}{x}} \\)",
        "graphData": null
      },
      {
        "explanation": "As \\( x \\) approaches infinity, any term with \\( x \\) in the denominator approaches zero.",
        "workingOut": "\\( = \\frac{3 + 0}{7 + 0} = \\frac{3}{7} \\)",
        "graphData": null
      },
      {
        "explanation": "The horizontal asymptote is \\( y = \\frac{3}{7} \\). Since the graph approaches but never touches this line, this value is excluded from the range.",
        "workingOut": "\\( y \\neq \\frac{3}{7} \\)",
        "graphData": null
      }
    ],
    "options": [
      {
        "text": "\\( y \\neq \\frac{5}{7} \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( y \\neq \\frac{7}{3} \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( y \\neq \\frac{3}{7} \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( y \\in \\mathbb{R}\\ (\\text{all real } y) \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q18d",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the range of the rational function \\( f(x) = \\frac{4x + 6}{8x - 4} \\).",
    "a": "2",
    "solutionSteps": [
      {
        "explanation": "To find the range of this rational function, we find its horizontal asymptote by evaluating the limit as \\( x \\to \\infty \\).",
        "workingOut": "\\( \\lim_{x \\to \\infty} \\frac{4x + 6}{8x - 4} \\)",
        "graphData": null
      },
      {
        "explanation": "Divide every term in the numerator and the denominator by \\( x \\) (the leading term's variable of the denominator).",
        "workingOut": "\\( = \\lim_{x \\to \\infty} \\frac{4 + \\frac{6}{x}}{8 + \\frac{-4}{x}} \\)",
        "graphData": null
      },
      {
        "explanation": "As \\( x \\) approaches infinity, any term with \\( x \\) in the denominator approaches zero.",
        "workingOut": "\\( = \\frac{4 + 0}{8 + 0} = \\frac{4}{8} \\)",
        "graphData": null
      },
      {
        "explanation": "The horizontal asymptote is \\( y = \\frac{4}{8} \\). Since the graph approaches but never touches this line, this value is excluded from the range.",
        "workingOut": "\\( y \\neq \\frac{4}{8} \\)",
        "graphData": null
      }
    ],
    "options": [
      {
        "text": "\\( y \\in \\mathbb{R}\\ (\\text{all real } y) \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( y \\neq \\frac{6}{8} \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( y \\neq \\frac{4}{8} \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( y \\neq \\frac{8}{4} \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q18e",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the range of the rational function \\( f(x) = \\frac{5x + 7}{9x - 5} \\).",
    "a": "1",
    "solutionSteps": [
      {
        "explanation": "To find the range of this rational function, we find its horizontal asymptote by evaluating the limit as \\( x \\to \\infty \\).",
        "workingOut": "\\( \\lim_{x \\to \\infty} \\frac{5x + 7}{9x - 5} \\)",
        "graphData": null
      },
      {
        "explanation": "Divide every term in the numerator and the denominator by \\( x \\) (the leading term's variable of the denominator).",
        "workingOut": "\\( = \\lim_{x \\to \\infty} \\frac{5 + \\frac{7}{x}}{9 + \\frac{-5}{x}} \\)",
        "graphData": null
      },
      {
        "explanation": "As \\( x \\) approaches infinity, any term with \\( x \\) in the denominator approaches zero.",
        "workingOut": "\\( = \\frac{5 + 0}{9 + 0} = \\frac{5}{9} \\)",
        "graphData": null
      },
      {
        "explanation": "The horizontal asymptote is \\( y = \\frac{5}{9} \\). Since the graph approaches but never touches this line, this value is excluded from the range.",
        "workingOut": "\\( y \\neq \\frac{5}{9} \\)",
        "graphData": null
      }
    ],
    "options": [
      {
        "text": "\\( y \\neq \\frac{7}{9} \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( y \\neq \\frac{5}{9} \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( y \\neq \\frac{9}{5} \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( y \\in \\mathbb{R}\\ (\\text{all real } y) \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q18f",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the range of the rational function \\( f(x) = \\frac{6x + 8}{10x - 6} \\).",
    "a": "1",
    "solutionSteps": [
      {
        "explanation": "To find the range of this rational function, we find its horizontal asymptote by evaluating the limit as \\( x \\to \\infty \\).",
        "workingOut": "\\( \\lim_{x \\to \\infty} \\frac{6x + 8}{10x - 6} \\)",
        "graphData": null
      },
      {
        "explanation": "Divide every term in the numerator and the denominator by \\( x \\) (the leading term's variable of the denominator).",
        "workingOut": "\\( = \\lim_{x \\to \\infty} \\frac{6 + \\frac{8}{x}}{10 + \\frac{-6}{x}} \\)",
        "graphData": null
      },
      {
        "explanation": "As \\( x \\) approaches infinity, any term with \\( x \\) in the denominator approaches zero.",
        "workingOut": "\\( = \\frac{6 + 0}{10 + 0} = \\frac{6}{10} \\)",
        "graphData": null
      },
      {
        "explanation": "The horizontal asymptote is \\( y = \\frac{6}{10} \\). Since the graph approaches but never touches this line, this value is excluded from the range.",
        "workingOut": "\\( y \\neq \\frac{6}{10} \\)",
        "graphData": null
      }
    ],
    "options": [
      {
        "text": "\\( y \\neq \\frac{8}{10} \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( y \\neq \\frac{6}{10} \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( y \\in \\mathbb{R}\\ (\\text{all real } y) \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( y \\neq \\frac{10}{6} \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q18g",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the range of the rational function \\( f(x) = \\frac{7x + 9}{11x - 7} \\).",
    "a": "0",
    "solutionSteps": [
      {
        "explanation": "To find the range of this rational function, we find its horizontal asymptote by evaluating the limit as \\( x \\to \\infty \\).",
        "workingOut": "\\( \\lim_{x \\to \\infty} \\frac{7x + 9}{11x - 7} \\)",
        "graphData": null
      },
      {
        "explanation": "Divide every term in the numerator and the denominator by \\( x \\) (the leading term's variable of the denominator).",
        "workingOut": "\\( = \\lim_{x \\to \\infty} \\frac{7 + \\frac{9}{x}}{11 + \\frac{-7}{x}} \\)",
        "graphData": null
      },
      {
        "explanation": "As \\( x \\) approaches infinity, any term with \\( x \\) in the denominator approaches zero.",
        "workingOut": "\\( = \\frac{7 + 0}{11 + 0} = \\frac{7}{11} \\)",
        "graphData": null
      },
      {
        "explanation": "The horizontal asymptote is \\( y = \\frac{7}{11} \\). Since the graph approaches but never touches this line, this value is excluded from the range.",
        "workingOut": "\\( y \\neq \\frac{7}{11} \\)",
        "graphData": null
      }
    ],
    "options": [
      {
        "text": "\\( y \\neq \\frac{7}{11} \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( y \\neq \\frac{9}{11} \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( y \\neq \\frac{11}{7} \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( y \\in \\mathbb{R}\\ (\\text{all real } y) \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q18h",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the range of the rational function \\( f(x) = \\frac{8x + 10}{12x - 8} \\).",
    "a": "0",
    "solutionSteps": [
      {
        "explanation": "To find the range of this rational function, we find its horizontal asymptote by evaluating the limit as \\( x \\to \\infty \\).",
        "workingOut": "\\( \\lim_{x \\to \\infty} \\frac{8x + 10}{12x - 8} \\)",
        "graphData": null
      },
      {
        "explanation": "Divide every term in the numerator and the denominator by \\( x \\) (the leading term's variable of the denominator).",
        "workingOut": "\\( = \\lim_{x \\to \\infty} \\frac{8 + \\frac{10}{x}}{12 + \\frac{-8}{x}} \\)",
        "graphData": null
      },
      {
        "explanation": "As \\( x \\) approaches infinity, any term with \\( x \\) in the denominator approaches zero.",
        "workingOut": "\\( = \\frac{8 + 0}{12 + 0} = \\frac{8}{12} \\)",
        "graphData": null
      },
      {
        "explanation": "The horizontal asymptote is \\( y = \\frac{8}{12} \\). Since the graph approaches but never touches this line, this value is excluded from the range.",
        "workingOut": "\\( y \\neq \\frac{8}{12} \\)",
        "graphData": null
      }
    ],
    "options": [
      {
        "text": "\\( y \\neq \\frac{8}{12} \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( y \\neq \\frac{12}{8} \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( y \\in \\mathbb{R}\\ (\\text{all real } y) \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( y \\neq \\frac{10}{12} \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q18i",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the range of the rational function \\( f(x) = \\frac{9x + 11}{13x - 9} \\).",
    "a": "3",
    "solutionSteps": [
      {
        "explanation": "To find the range of this rational function, we find its horizontal asymptote by evaluating the limit as \\( x \\to \\infty \\).",
        "workingOut": "\\( \\lim_{x \\to \\infty} \\frac{9x + 11}{13x - 9} \\)",
        "graphData": null
      },
      {
        "explanation": "Divide every term in the numerator and the denominator by \\( x \\) (the leading term's variable of the denominator).",
        "workingOut": "\\( = \\lim_{x \\to \\infty} \\frac{9 + \\frac{11}{x}}{13 + \\frac{-9}{x}} \\)",
        "graphData": null
      },
      {
        "explanation": "As \\( x \\) approaches infinity, any term with \\( x \\) in the denominator approaches zero.",
        "workingOut": "\\( = \\frac{9 + 0}{13 + 0} = \\frac{9}{13} \\)",
        "graphData": null
      },
      {
        "explanation": "The horizontal asymptote is \\( y = \\frac{9}{13} \\). Since the graph approaches but never touches this line, this value is excluded from the range.",
        "workingOut": "\\( y \\neq \\frac{9}{13} \\)",
        "graphData": null
      }
    ],
    "options": [
      {
        "text": "\\( y \\in \\mathbb{R}\\ (\\text{all real } y) \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( y \\neq \\frac{13}{9} \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( y \\neq \\frac{11}{13} \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( y \\neq \\frac{9}{13} \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q18j",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the range of the rational function \\( f(x) = \\frac{10x + 12}{14x - 10} \\).",
    "a": "2",
    "solutionSteps": [
      {
        "explanation": "To find the range of this rational function, we find its horizontal asymptote by evaluating the limit as \\( x \\to \\infty \\).",
        "workingOut": "\\( \\lim_{x \\to \\infty} \\frac{10x + 12}{14x - 10} \\)",
        "graphData": null
      },
      {
        "explanation": "Divide every term in the numerator and the denominator by \\( x \\) (the leading term's variable of the denominator).",
        "workingOut": "\\( = \\lim_{x \\to \\infty} \\frac{10 + \\frac{12}{x}}{14 + \\frac{-10}{x}} \\)",
        "graphData": null
      },
      {
        "explanation": "As \\( x \\) approaches infinity, any term with \\( x \\) in the denominator approaches zero.",
        "workingOut": "\\( = \\frac{10 + 0}{14 + 0} = \\frac{10}{14} \\)",
        "graphData": null
      },
      {
        "explanation": "The horizontal asymptote is \\( y = \\frac{10}{14} \\). Since the graph approaches but never touches this line, this value is excluded from the range.",
        "workingOut": "\\( y \\neq \\frac{10}{14} \\)",
        "graphData": null
      }
    ],
    "options": [
      {
        "text": "\\( y \\in \\mathbb{R}\\ (\\text{all real } y) \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( y \\neq \\frac{14}{10} \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( y \\neq \\frac{10}{14} \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( y \\neq \\frac{12}{14} \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
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
    "options": [
      {
        "text": "\\( k = 8 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( k = 1 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( k = 7 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( k = 6 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
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
    "options": [
      {
        "text": "\\( k = 0 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( k = 13 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( k = 12 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( k = 11 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
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
    "options": [
      {
        "text": "\\( k = -1 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( k = 18 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( k = 17 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( k = 16 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
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
    "options": [
      {
        "text": "\\( k = 22 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( k = 23 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( k = -2 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( k = 21 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
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
    "options": [
      {
        "text": "\\( k = 28 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( k = 27 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( k = -3 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( k = 26 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
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
    "options": [
      {
        "text": "\\( k = 33 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( k = 32 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( k = -4 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( k = 31 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
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
    "options": [
      {
        "text": "\\( k = 37 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( k = -5 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( k = 38 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( k = 36 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
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
    "options": [
      {
        "text": "\\( k = 42 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( k = -6 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( k = 43 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( k = 41 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
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
    "options": [
      {
        "text": "\\( k = -7 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( k = 47 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( k = 48 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( k = 46 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
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
    "options": [
      {
        "text": "\\( k = 52 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( k = -8 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( k = 53 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( k = 51 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
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
    "options": [
      {
        "text": "\\( d = 0 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( d = -3 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( d = 4 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( d = 3 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": true,
    "requiresManualGrading": false
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
    "options": [
      {
        "text": "\\( d = -6 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( d = 8 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( d = 0 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( d = 6 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
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
    "options": [
      {
        "text": "\\( d = -9 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( d = 12 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( d = 0 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( d = 9 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
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
    "options": [
      {
        "text": "\\( d = 16 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( d = -12 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( d = 0 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( d = 12 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
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
    "options": [
      {
        "text": "\\( d = 20 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( d = 0 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( d = -15 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( d = 15 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
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
    "options": [
      {
        "text": "\\( d = 24 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( d = 0 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( d = -18 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( d = 18 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
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
    "options": [
      {
        "text": "\\( d = 0 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( d = 28 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( d = -21 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( d = 21 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
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
    "options": [
      {
        "text": "\\( d = 32 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( d = 0 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( d = -24 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( d = 24 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
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
    "options": [
      {
        "text": "\\( d = -27 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( d = 0 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( d = 36 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( d = 27 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
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
    "options": [
      {
        "text": "\\( d = 0 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( d = -30 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( d = 40 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( d = 30 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q21a",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the inverse function \\( f^{-1}(x) \\) of \\( f(x) = \\sqrt{x - 1} + 2 \\) and state its domain.",
    "a": "0",
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
    "options": [
      {
        "text": "\\( f^{-1}(x) = (x-2)^2+1,\\ \\ x \\geq 2 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( f^{-1}(x) = (x-1)^2+2,\\ \\ x \\geq 1 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( f^{-1}(x) = (x-2)^2-1,\\ \\ x \\geq 2 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( f^{-1}(x) = (x-2)^2+1,\\ \\ x \\in \\mathbb{R} \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q21b",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the inverse function \\( f^{-1}(x) \\) of \\( f(x) = \\sqrt{x - 2} + 3 \\) and state its domain.",
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
    "options": [
      {
        "text": "\\( f^{-1}(x) = (x-2)^2+3,\\ \\ x \\geq 2 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( f^{-1}(x) = (x-3)^2-2,\\ \\ x \\geq 3 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( f^{-1}(x) = (x-3)^2+2,\\ \\ x \\in \\mathbb{R} \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( f^{-1}(x) = (x-3)^2+2,\\ \\ x \\geq 3 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q21c",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the inverse function \\( f^{-1}(x) \\) of \\( f(x) = \\sqrt{x - 3} + 4 \\) and state its domain.",
    "a": "2",
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
    "options": [
      {
        "text": "\\( f^{-1}(x) = (x-3)^2+4,\\ \\ x \\geq 3 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( f^{-1}(x) = (x-4)^2-3,\\ \\ x \\geq 4 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( f^{-1}(x) = (x-4)^2+3,\\ \\ x \\geq 4 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( f^{-1}(x) = (x-4)^2+3,\\ \\ x \\in \\mathbb{R} \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q21d",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the inverse function \\( f^{-1}(x) \\) of \\( f(x) = \\sqrt{x - 4} + 5 \\) and state its domain.",
    "a": "2",
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
    "options": [
      {
        "text": "\\( f^{-1}(x) = (x-5)^2-4,\\ \\ x \\geq 5 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( f^{-1}(x) = (x-5)^2+4,\\ \\ x \\in \\mathbb{R} \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( f^{-1}(x) = (x-5)^2+4,\\ \\ x \\geq 5 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( f^{-1}(x) = (x-4)^2+5,\\ \\ x \\geq 4 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q21e",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the inverse function \\( f^{-1}(x) \\) of \\( f(x) = \\sqrt{x - 5} + 6 \\) and state its domain.",
    "a": "2",
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
    "options": [
      {
        "text": "\\( f^{-1}(x) = (x-5)^2+6,\\ \\ x \\geq 5 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( f^{-1}(x) = (x-6)^2+5,\\ \\ x \\in \\mathbb{R} \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( f^{-1}(x) = (x-6)^2+5,\\ \\ x \\geq 6 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( f^{-1}(x) = (x-6)^2-5,\\ \\ x \\geq 6 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q21f",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the inverse function \\( f^{-1}(x) \\) of \\( f(x) = \\sqrt{x - 6} + 7 \\) and state its domain.",
    "a": "0",
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
    "options": [
      {
        "text": "\\( f^{-1}(x) = (x-7)^2+6,\\ \\ x \\geq 7 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( f^{-1}(x) = (x-7)^2+6,\\ \\ x \\in \\mathbb{R} \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( f^{-1}(x) = (x-7)^2-6,\\ \\ x \\geq 7 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( f^{-1}(x) = (x-6)^2+7,\\ \\ x \\geq 6 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q21g",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the inverse function \\( f^{-1}(x) \\) of \\( f(x) = \\sqrt{x - 7} + 8 \\) and state its domain.",
    "a": "0",
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
    "options": [
      {
        "text": "\\( f^{-1}(x) = (x-8)^2+7,\\ \\ x \\geq 8 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( f^{-1}(x) = (x-8)^2+7,\\ \\ x \\in \\mathbb{R} \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( f^{-1}(x) = (x-7)^2+8,\\ \\ x \\geq 7 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( f^{-1}(x) = (x-8)^2-7,\\ \\ x \\geq 8 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q21h",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the inverse function \\( f^{-1}(x) \\) of \\( f(x) = \\sqrt{x - 8} + 9 \\) and state its domain.",
    "a": "0",
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
    "options": [
      {
        "text": "\\( f^{-1}(x) = (x-9)^2+8,\\ \\ x \\geq 9 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( f^{-1}(x) = (x-9)^2-8,\\ \\ x \\geq 9 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( f^{-1}(x) = (x-9)^2+8,\\ \\ x \\in \\mathbb{R} \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( f^{-1}(x) = (x-8)^2+9,\\ \\ x \\geq 8 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q21i",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the inverse function \\( f^{-1}(x) \\) of \\( f(x) = \\sqrt{x - 9} + 10 \\) and state its domain.",
    "a": "1",
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
    "options": [
      {
        "text": "\\( f^{-1}(x) = (x-9)^2+10,\\ \\ x \\geq 9 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( f^{-1}(x) = (x-10)^2+9,\\ \\ x \\geq 10 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( f^{-1}(x) = (x-10)^2+9,\\ \\ x \\in \\mathbb{R} \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( f^{-1}(x) = (x-10)^2-9,\\ \\ x \\geq 10 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q21j",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the inverse function \\( f^{-1}(x) \\) of \\( f(x) = \\sqrt{x - 10} + 11 \\) and state its domain.",
    "a": "2",
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
    "options": [
      {
        "text": "\\( f^{-1}(x) = (x-10)^2+11,\\ \\ x \\geq 10 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( f^{-1}(x) = (x-11)^2-10,\\ \\ x \\geq 11 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( f^{-1}(x) = (x-11)^2+10,\\ \\ x \\geq 11 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( f^{-1}(x) = (x-11)^2+10,\\ \\ x \\in \\mathbb{R} \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q22a",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "A function \\( y = f(x) \\) undergoes the following sequence of transformations:\n\n1. Dilated vertically by a factor of \\( 1 \\).\n2. Reflected in the \\( x \\)-axis.\n3. Shifted horizontally to the right by \\( 2 \\) units.\n4. Shifted vertically upwards by \\( 3 \\) units.\n\nWrite down the equation of the transformed function \\( g(x) \\) in terms of \\( f(x) \\).",
    "a": "3",
    "solutionSteps": [
      {
        "explanation": "General rule: apply transformations in the stated order, wrapping each one around the previous result — dilation coefficient multiplies \\(f\\), reflection flips its sign, horizontal shifts change what's inside \\(f(\\cdot)\\), vertical shifts are added outside.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Apply vertical dilation by a factor of the coefficient.",
        "workingOut": "\\(y = f(x)\\)",
        "graphData": null
      },
      {
        "explanation": "Apply reflection in the x-axis.",
        "workingOut": "\\(y = -f(x)\\)",
        "graphData": null
      },
      {
        "explanation": "Apply horizontal translation to the right.",
        "workingOut": "\\(y = -f(x - 2)\\)",
        "graphData": null
      },
      {
        "explanation": "Apply vertical translation upwards to get the final function.",
        "workingOut": "\\(g(x) = -f(x - 2) + 3\\)",
        "graphData": null
      },
      {
        "explanation": "Dilate by 1, reflect in the \\(x\\)-axis, shift right 2, then shift up 3: \\( g(x) = -f(x-2)+3 \\).",
        "workingOut": "",
        "graphData": null
      }
    ],
    "options": [
      {
        "text": "\\( g(x) = -f(x+2)+3 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( g(x) = -f(x-3)+2 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( g(x) = f(x-2)+3 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( g(x) = -f(x-2)+3 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q22b",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "A function \\( y = f(x) \\) undergoes the following sequence of transformations:\n\n1. Dilated vertically by a factor of \\( 2 \\).\n2. Reflected in the \\( x \\)-axis.\n3. Shifted horizontally to the right by \\( 3 \\) units.\n4. Shifted vertically upwards by \\( 4 \\) units.\n\nWrite down the equation of the transformed function \\( g(x) \\) in terms of \\( f(x) \\).",
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
    "options": [
      {
        "text": "\\( g(x) = -2f(x-4)+3 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( g(x) = 2f(x-3)+4 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( g(x) = -2f(x+3)+4 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( g(x) = -2f(x-3)+4 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q22c",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "A function \\( y = f(x) \\) undergoes the following sequence of transformations:\n\n1. Dilated vertically by a factor of \\( 3 \\).\n2. Reflected in the \\( x \\)-axis.\n3. Shifted horizontally to the right by \\( 4 \\) units.\n4. Shifted vertically upwards by \\( 5 \\) units.\n\nWrite down the equation of the transformed function \\( g(x) \\) in terms of \\( f(x) \\).",
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
    "options": [
      {
        "text": "\\( g(x) = -3f(x-5)+4 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( g(x) = 3f(x-4)+5 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( g(x) = -3f(x+4)+5 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( g(x) = -3f(x-4)+5 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q22d",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "A function \\( y = f(x) \\) undergoes the following sequence of transformations:\n\n1. Dilated vertically by a factor of \\( 4 \\).\n2. Reflected in the \\( x \\)-axis.\n3. Shifted horizontally to the right by \\( 5 \\) units.\n4. Shifted vertically upwards by \\( 6 \\) units.\n\nWrite down the equation of the transformed function \\( g(x) \\) in terms of \\( f(x) \\).",
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
    "options": [
      {
        "text": "\\( g(x) = 4f(x-5)+6 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( g(x) = -4f(x-6)+5 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( g(x) = -4f(x+5)+6 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( g(x) = -4f(x-5)+6 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q22e",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "A function \\( y = f(x) \\) undergoes the following sequence of transformations:\n\n1. Dilated vertically by a factor of \\( 5 \\).\n2. Reflected in the \\( x \\)-axis.\n3. Shifted horizontally to the right by \\( 6 \\) units.\n4. Shifted vertically upwards by \\( 7 \\) units.\n\nWrite down the equation of the transformed function \\( g(x) \\) in terms of \\( f(x) \\).",
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
    "options": [
      {
        "text": "\\( g(x) = -5f(x-7)+6 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( g(x) = 5f(x-6)+7 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( g(x) = -5f(x+6)+7 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( g(x) = -5f(x-6)+7 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q22f",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "A function \\( y = f(x) \\) undergoes the following sequence of transformations:\n\n1. Dilated vertically by a factor of \\( 6 \\).\n2. Reflected in the \\( x \\)-axis.\n3. Shifted horizontally to the right by \\( 7 \\) units.\n4. Shifted vertically upwards by \\( 8 \\) units.\n\nWrite down the equation of the transformed function \\( g(x) \\) in terms of \\( f(x) \\).",
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
    "options": [
      {
        "text": "\\( g(x) = -6f(x+7)+8 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( g(x) = 6f(x-7)+8 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( g(x) = -6f(x-8)+7 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( g(x) = -6f(x-7)+8 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q22g",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "A function \\( y = f(x) \\) undergoes the following sequence of transformations:\n\n1. Dilated vertically by a factor of \\( 7 \\).\n2. Reflected in the \\( x \\)-axis.\n3. Shifted horizontally to the right by \\( 8 \\) units.\n4. Shifted vertically upwards by \\( 9 \\) units.\n\nWrite down the equation of the transformed function \\( g(x) \\) in terms of \\( f(x) \\).",
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
    "options": [
      {
        "text": "\\( g(x) = 7f(x-8)+9 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( g(x) = -7f(x+8)+9 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( g(x) = -7f(x-9)+8 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( g(x) = -7f(x-8)+9 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q22h",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "A function \\( y = f(x) \\) undergoes the following sequence of transformations:\n\n1. Dilated vertically by a factor of \\( 8 \\).\n2. Reflected in the \\( x \\)-axis.\n3. Shifted horizontally to the right by \\( 9 \\) units.\n4. Shifted vertically upwards by \\( 10 \\) units.\n\nWrite down the equation of the transformed function \\( g(x) \\) in terms of \\( f(x) \\).",
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
    "options": [
      {
        "text": "\\( g(x) = -8f(x+9)+10 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( g(x) = 8f(x-9)+10 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( g(x) = -8f(x-10)+9 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( g(x) = -8f(x-9)+10 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q22i",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "A function \\( y = f(x) \\) undergoes the following sequence of transformations:\n\n1. Dilated vertically by a factor of \\( 9 \\).\n2. Reflected in the \\( x \\)-axis.\n3. Shifted horizontally to the right by \\( 10 \\) units.\n4. Shifted vertically upwards by \\( 11 \\) units.\n\nWrite down the equation of the transformed function \\( g(x) \\) in terms of \\( f(x) \\).",
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
    "options": [
      {
        "text": "\\( g(x) = -9f(x-11)+10 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( g(x) = -9f(x+10)+11 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( g(x) = 9f(x-10)+11 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( g(x) = -9f(x-10)+11 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q22j",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "A function \\( y = f(x) \\) undergoes the following sequence of transformations:\n\n1. Dilated vertically by a factor of \\( 10 \\).\n2. Reflected in the \\( x \\)-axis.\n3. Shifted horizontally to the right by \\( 11 \\) units.\n4. Shifted vertically upwards by \\( 12 \\) units.\n\nWrite down the equation of the transformed function \\( g(x) \\) in terms of \\( f(x) \\).",
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
    "options": [
      {
        "text": "\\( g(x) = -10f(x+11)+12 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( g(x) = -10f(x-12)+11 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( g(x) = 10f(x-11)+12 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( g(x) = -10f(x-11)+12 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q23a",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the equation of the tangent line to the circle \\( x^2 + y^2 = 25 \\) at the point \\( (3, 4) \\).",
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
    "options": [
      {
        "text": "\\( 3x + 4y = -25 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( 3x + 4y = 5 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( 4x + 3y = 25 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( 3x + 4y = 25 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q23b",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the equation of the tangent line to the circle \\( x^2 + y^2 = 100 \\) at the point \\( (6, 8) \\).",
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
    "options": [
      {
        "text": "\\( 3x + 4y = -50 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( 3x + 4y = 5 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( 4x + 3y = 50 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( 3x + 4y = 50 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q23c",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the equation of the tangent line to the circle \\( x^2 + y^2 = 225 \\) at the point \\( (9, 12) \\).",
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
    "options": [
      {
        "text": "\\( 3x + 4y = 5 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( 3x + 4y = -75 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( 4x + 3y = 75 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( 3x + 4y = 75 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q23d",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the equation of the tangent line to the circle \\( x^2 + y^2 = 400 \\) at the point \\( (12, 16) \\).",
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
    "options": [
      {
        "text": "\\( 4x + 3y = 100 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( 3x + 4y = 5 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( 3x + 4y = -100 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( 3x + 4y = 100 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q23e",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the equation of the tangent line to the circle \\( x^2 + y^2 = 625 \\) at the point \\( (15, 20) \\).",
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
    "options": [
      {
        "text": "\\( 4x + 3y = 125 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( 3x + 4y = 5 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( 3x + 4y = -125 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( 3x + 4y = 125 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q23f",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the equation of the tangent line to the circle \\( x^2 + y^2 = 900 \\) at the point \\( (18, 24) \\).",
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
    "options": [
      {
        "text": "\\( 3x + 4y = 5 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( 4x + 3y = 150 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( 3x + 4y = -150 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( 3x + 4y = 150 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q23g",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the equation of the tangent line to the circle \\( x^2 + y^2 = 1225 \\) at the point \\( (21, 28) \\).",
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
    "options": [
      {
        "text": "\\( 4x + 3y = 175 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( 3x + 4y = 5 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( 3x + 4y = -175 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( 3x + 4y = 175 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q23h",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the equation of the tangent line to the circle \\( x^2 + y^2 = 1600 \\) at the point \\( (24, 32) \\).",
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
    "options": [
      {
        "text": "\\( 4x + 3y = 200 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( 3x + 4y = -200 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( 3x + 4y = 5 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( 3x + 4y = 200 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q23i",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the equation of the tangent line to the circle \\( x^2 + y^2 = 2025 \\) at the point \\( (27, 36) \\).",
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
    "options": [
      {
        "text": "\\( 3x + 4y = -225 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( 4x + 3y = 225 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( 3x + 4y = 5 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( 3x + 4y = 225 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q23j",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the equation of the tangent line to the circle \\( x^2 + y^2 = 2500 \\) at the point \\( (30, 40) \\).",
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
    "options": [
      {
        "text": "\\( 3x + 4y = -250 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( 4x + 3y = 250 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( 3x + 4y = 5 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( 3x + 4y = 250 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q24a",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the coordinates of the two points of intersection of the line \\( y = x + 7 \\) and the circle \\( x^2 + y^2 = 25 \\).",
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
    "options": [
      {
        "text": "\\( (-3, 3) \\text{ and } (-4, 4) \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( (4, -3) \\text{ and } (3, -4) \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( (-4, 4) \\text{ and } (-3, 3) \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( (-4, 3) \\text{ and } (-3, 4) \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q24b",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the coordinates of the two points of intersection of the line \\( y = x + 14 \\) and the circle \\( x^2 + y^2 = 100 \\).",
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
    "options": [
      {
        "text": "\\( (8, -6) \\text{ and } (6, -8) \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( (-6, 6) \\text{ and } (-8, 8) \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( (-8, 8) \\text{ and } (-6, 6) \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( (-8, 6) \\text{ and } (-6, 8) \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q24c",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the coordinates of the two points of intersection of the line \\( y = x + 21 \\) and the circle \\( x^2 + y^2 = 225 \\).",
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
    "options": [
      {
        "text": "\\( (-12, 12) \\text{ and } (-9, 9) \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( (-9, 9) \\text{ and } (-12, 12) \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( (12, -9) \\text{ and } (9, -12) \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( (-12, 9) \\text{ and } (-9, 12) \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q24d",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the coordinates of the two points of intersection of the line \\( y = x + 28 \\) and the circle \\( x^2 + y^2 = 400 \\).",
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
    "options": [
      {
        "text": "\\( (-16, 16) \\text{ and } (-12, 12) \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( (-12, 12) \\text{ and } (-16, 16) \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( (16, -12) \\text{ and } (12, -16) \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( (-16, 12) \\text{ and } (-12, 16) \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q24e",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the coordinates of the two points of intersection of the line \\( y = x + 35 \\) and the circle \\( x^2 + y^2 = 625 \\).",
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
    "options": [
      {
        "text": "\\( (-15, 15) \\text{ and } (-20, 20) \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( (-20, 20) \\text{ and } (-15, 15) \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( (20, -15) \\text{ and } (15, -20) \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( (-20, 15) \\text{ and } (-15, 20) \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q24f",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the coordinates of the two points of intersection of the line \\( y = x + 42 \\) and the circle \\( x^2 + y^2 = 900 \\).",
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
    "options": [
      {
        "text": "\\( (24, -18) \\text{ and } (18, -24) \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( (-24, 24) \\text{ and } (-18, 18) \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( (-18, 18) \\text{ and } (-24, 24) \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( (-24, 18) \\text{ and } (-18, 24) \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q24g",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the coordinates of the two points of intersection of the line \\( y = x + 49 \\) and the circle \\( x^2 + y^2 = 1225 \\).",
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
    "options": [
      {
        "text": "\\( (-28, 28) \\text{ and } (-21, 21) \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( (28, -21) \\text{ and } (21, -28) \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( (-21, 21) \\text{ and } (-28, 28) \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( (-28, 21) \\text{ and } (-21, 28) \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q24h",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the coordinates of the two points of intersection of the line \\( y = x + 56 \\) and the circle \\( x^2 + y^2 = 1600 \\).",
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
    "options": [
      {
        "text": "\\( (32, -24) \\text{ and } (24, -32) \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( (-32, 32) \\text{ and } (-24, 24) \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( (-24, 24) \\text{ and } (-32, 32) \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( (-32, 24) \\text{ and } (-24, 32) \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q24i",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the coordinates of the two points of intersection of the line \\( y = x + 63 \\) and the circle \\( x^2 + y^2 = 2025 \\).",
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
    "options": [
      {
        "text": "\\( (36, -27) \\text{ and } (27, -36) \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( (-36, 36) \\text{ and } (-27, 27) \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( (-27, 27) \\text{ and } (-36, 36) \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( (-36, 27) \\text{ and } (-27, 36) \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q24j",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the coordinates of the two points of intersection of the line \\( y = x + 70 \\) and the circle \\( x^2 + y^2 = 2500 \\).",
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
    "options": [
      {
        "text": "\\( (-30, 30) \\text{ and } (-40, 40) \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( (40, -30) \\text{ and } (30, -40) \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( (-40, 40) \\text{ and } (-30, 30) \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( (-40, 30) \\text{ and } (-30, 40) \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q25a",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Determine the symmetries of the relation defined by the equation \\( \\frac{x^2}{4} + \\frac{y^2}{9} = 1 \\).",
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
    ],
    "options": [
      {
        "text": "Symmetric with respect to the x-axis, y-axis, and the origin.",
        "imageUrl": ""
      },
      {
        "text": "Symmetric with respect to the y-axis only.",
        "imageUrl": ""
      },
      {
        "text": "Symmetric with respect to the x-axis only.",
        "imageUrl": ""
      },
      {
        "text": "Symmetric with respect to the origin only.",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q25b",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Determine the symmetries of the relation defined by the equation \\( \\frac{x^2}{16} + \\frac{y^2}{36} = 1 \\).",
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
    ],
    "options": [
      {
        "text": "Symmetric with respect to the x-axis, y-axis, and the origin.",
        "imageUrl": ""
      },
      {
        "text": "Symmetric with respect to the y-axis only.",
        "imageUrl": ""
      },
      {
        "text": "Symmetric with respect to the x-axis only.",
        "imageUrl": ""
      },
      {
        "text": "Symmetric with respect to the origin only.",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q25c",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Determine the symmetries of the relation defined by the equation \\( \\frac{x^2}{36} + \\frac{y^2}{81} = 1 \\).",
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
    ],
    "options": [
      {
        "text": "Symmetric with respect to the x-axis, y-axis, and the origin.",
        "imageUrl": ""
      },
      {
        "text": "Symmetric with respect to the y-axis only.",
        "imageUrl": ""
      },
      {
        "text": "Symmetric with respect to the x-axis only.",
        "imageUrl": ""
      },
      {
        "text": "Symmetric with respect to the origin only.",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q25d",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Determine the symmetries of the relation defined by the equation \\( \\frac{x^2}{64} + \\frac{y^2}{144} = 1 \\).",
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
    ],
    "options": [
      {
        "text": "Symmetric with respect to the x-axis, y-axis, and the origin.",
        "imageUrl": ""
      },
      {
        "text": "Symmetric with respect to the y-axis only.",
        "imageUrl": ""
      },
      {
        "text": "Symmetric with respect to the x-axis only.",
        "imageUrl": ""
      },
      {
        "text": "Symmetric with respect to the origin only.",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q25e",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Determine the symmetries of the relation defined by the equation \\( \\frac{x^2}{100} + \\frac{y^2}{225} = 1 \\).",
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
    ],
    "options": [
      {
        "text": "Symmetric with respect to the x-axis, y-axis, and the origin.",
        "imageUrl": ""
      },
      {
        "text": "Symmetric with respect to the y-axis only.",
        "imageUrl": ""
      },
      {
        "text": "Symmetric with respect to the x-axis only.",
        "imageUrl": ""
      },
      {
        "text": "Symmetric with respect to the origin only.",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q25f",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Determine the symmetries of the relation defined by the equation \\( \\frac{x^2}{144} + \\frac{y^2}{324} = 1 \\).",
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
    ],
    "options": [
      {
        "text": "Symmetric with respect to the x-axis, y-axis, and the origin.",
        "imageUrl": ""
      },
      {
        "text": "Symmetric with respect to the y-axis only.",
        "imageUrl": ""
      },
      {
        "text": "Symmetric with respect to the x-axis only.",
        "imageUrl": ""
      },
      {
        "text": "Symmetric with respect to the origin only.",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q25g",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Determine the symmetries of the relation defined by the equation \\( \\frac{x^2}{196} + \\frac{y^2}{441} = 1 \\).",
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
    ],
    "options": [
      {
        "text": "Symmetric with respect to the x-axis, y-axis, and the origin.",
        "imageUrl": ""
      },
      {
        "text": "Symmetric with respect to the y-axis only.",
        "imageUrl": ""
      },
      {
        "text": "Symmetric with respect to the x-axis only.",
        "imageUrl": ""
      },
      {
        "text": "Symmetric with respect to the origin only.",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q25h",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Determine the symmetries of the relation defined by the equation \\( \\frac{x^2}{256} + \\frac{y^2}{576} = 1 \\).",
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
    ],
    "options": [
      {
        "text": "Symmetric with respect to the x-axis, y-axis, and the origin.",
        "imageUrl": ""
      },
      {
        "text": "Symmetric with respect to the y-axis only.",
        "imageUrl": ""
      },
      {
        "text": "Symmetric with respect to the x-axis only.",
        "imageUrl": ""
      },
      {
        "text": "Symmetric with respect to the origin only.",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q25i",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Determine the symmetries of the relation defined by the equation \\( \\frac{x^2}{324} + \\frac{y^2}{729} = 1 \\).",
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
    ],
    "options": [
      {
        "text": "Symmetric with respect to the x-axis, y-axis, and the origin.",
        "imageUrl": ""
      },
      {
        "text": "Symmetric with respect to the y-axis only.",
        "imageUrl": ""
      },
      {
        "text": "Symmetric with respect to the x-axis only.",
        "imageUrl": ""
      },
      {
        "text": "Symmetric with respect to the origin only.",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q25j",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Determine the symmetries of the relation defined by the equation \\( \\frac{x^2}{400} + \\frac{y^2}{900} = 1 \\).",
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
    ],
    "options": [
      {
        "text": "Symmetric with respect to the x-axis, y-axis, and the origin.",
        "imageUrl": ""
      },
      {
        "text": "Symmetric with respect to the y-axis only.",
        "imageUrl": ""
      },
      {
        "text": "Symmetric with respect to the x-axis only.",
        "imageUrl": ""
      },
      {
        "text": "Symmetric with respect to the origin only.",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q26a",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the range of the function \\( f(x) = 2 - \\sqrt{4 - x^2} \\).",
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
    "options": [
      {
        "text": "\\( 0 \\leq y \\leq 4 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( 1 \\leq y \\leq 3 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( -2 \\leq y \\leq 2 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( 0 \\leq y \\leq 2 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q26b",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the range of the function \\( f(x) = 4 - \\sqrt{9 - x^2} \\).",
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
    "options": [
      {
        "text": "\\( 2 \\leq y \\leq 5 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( 1 \\leq y \\leq 6 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( -3 \\leq y \\leq 3 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( 1 \\leq y \\leq 4 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q26c",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the range of the function \\( f(x) = 6 - \\sqrt{16 - x^2} \\).",
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
    "options": [
      {
        "text": "\\( 2 \\leq y \\leq 8 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( -4 \\leq y \\leq 4 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( 3 \\leq y \\leq 7 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( 2 \\leq y \\leq 6 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q26d",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the range of the function \\( f(x) = 8 - \\sqrt{25 - x^2} \\).",
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
    "options": [
      {
        "text": "\\( 3 \\leq y \\leq 10 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( -5 \\leq y \\leq 5 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( 4 \\leq y \\leq 9 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( 3 \\leq y \\leq 8 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q26e",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the range of the function \\( f(x) = 10 - \\sqrt{36 - x^2} \\).",
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
    "options": [
      {
        "text": "\\( -6 \\leq y \\leq 6 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( 4 \\leq y \\leq 12 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( 5 \\leq y \\leq 11 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( 4 \\leq y \\leq 10 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q26f",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the range of the function \\( f(x) = 12 - \\sqrt{49 - x^2} \\).",
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
    "options": [
      {
        "text": "\\( 5 \\leq y \\leq 14 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( -7 \\leq y \\leq 7 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( 6 \\leq y \\leq 13 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( 5 \\leq y \\leq 12 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q26g",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the range of the function \\( f(x) = 14 - \\sqrt{64 - x^2} \\).",
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
    "options": [
      {
        "text": "\\( -8 \\leq y \\leq 8 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( 7 \\leq y \\leq 15 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( 6 \\leq y \\leq 16 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( 6 \\leq y \\leq 14 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q26h",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the range of the function \\( f(x) = 16 - \\sqrt{81 - x^2} \\).",
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
    "options": [
      {
        "text": "\\( 8 \\leq y \\leq 17 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( -9 \\leq y \\leq 9 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( 7 \\leq y \\leq 18 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( 7 \\leq y \\leq 16 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q26i",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the range of the function \\( f(x) = 18 - \\sqrt{100 - x^2} \\).",
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
    "options": [
      {
        "text": "\\( 9 \\leq y \\leq 19 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( -10 \\leq y \\leq 10 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( 8 \\leq y \\leq 20 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( 8 \\leq y \\leq 18 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-3b-q26j",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Functions, relations, and graphs",
    "question": "Find the range of the function \\( f(x) = 20 - \\sqrt{121 - x^2} \\).",
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
    "options": [
      {
        "text": "\\( 9 \\leq y \\leq 22 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( 10 \\leq y \\leq 21 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( -11 \\leq y \\leq 11 \\)",
        "imageUrl": ""
      },
      {
        "text": "\\( 9 \\leq y \\leq 20 \\)",
        "imageUrl": ""
      }
    ],
    "isManual": false,
    "requiresManualGrading": false
  }
];
