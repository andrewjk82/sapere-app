export const Y12A_CH6E_QUESTIONS = [
  {
    "id": "y12a-6e-q1a",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the exact area between the curve \\( y = \\cos x \\) and the x-axis from \\( x = 0 \\) to \\( x = \\frac{\\pi}{2} \\).",
    "a": "1",
    "t": "Area",
    "solutionSteps": [
      {
        "explanation": "Working out",
        "workingOut": "1"
      }
    ]
  },
  {
    "id": "y12a-6e-q1b",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the exact area between the curve \\( y = \\cos x \\) and the x-axis from \\( x = 0 \\) to \\( x = \\frac{\\pi}{6} \\).",
    "a": "\\frac{1}{2}",
    "t": "Area",
    "solutionSteps": [
      {
        "explanation": "Working out",
        "workingOut": "\\frac{1}{2}"
      }
    ]
  },
  {
    "id": "y12a-6e-q2a",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the exact area between the curve \\( y = \\sec^2 x \\) and the x-axis from \\( x = 0 \\) to \\( x = \\frac{\\pi}{4} \\).",
    "a": "1",
    "t": "Area",
    "solutionSteps": [
      {
        "explanation": "Working out",
        "workingOut": "1"
      }
    ]
  },
  {
    "id": "y12a-6e-q2b",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the exact area between the curve \\( y = \\sec^2 x \\) and the x-axis from \\( x = 0 \\) to \\( x = \\frac{\\pi}{3} \\).",
    "a": "\\sqrt{3}",
    "t": "Area",
    "solutionSteps": [
      {
        "explanation": "Working out",
        "workingOut": "\\sqrt{3}"
      }
    ]
  },
  {
    "id": "y12a-6e-q3a",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the exact area between the curve \\( y = \\sin x \\) and the x-axis from \\( x = 0 \\) to \\( x = \\frac{\\pi}{4} \\).",
    "a": "1 - \\frac{\\sqrt{2}}{2}",
    "t": "Area",
    "solutionSteps": [
      {
        "explanation": "Working out",
        "workingOut": "1 - \\frac{\\sqrt{2}}{2}"
      }
    ]
  },
  {
    "id": "y12a-6e-q3b",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the exact area between the curve \\( y = \\sin x \\) and the x-axis from \\( x = 0 \\) to \\( x = \\frac{\\pi}{6} \\).",
    "a": "1 - \\frac{\\sqrt{3}}{2}",
    "t": "Area",
    "solutionSteps": [
      {
        "explanation": "Working out",
        "workingOut": "1 - \\frac{\\sqrt{3}}{2}"
      }
    ]
  },
  {
    "id": "y12a-6e-q4a",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the area of the shaded region.",
    "a": "1",
    "t": "Area",
    "solutionSteps": [
      {
        "explanation": "Working out",
        "workingOut": "1"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 200,
        "boundingbox": [
          -1,
          2,
          4,
          -2
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[0,0], [0, 1.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,0], [3.5, 0]], {strokeColor: 'black', strokeWidth: 1});\nvar f = function(x) { return Math.sin(x); };\nvar curve = board.create('functiongraph', [f, -0.5, 3.5], {strokeColor: 'black'});\nvar integral = board.create('integral', [[0, Math.PI/2], curve], {color: 'lightblue', fillOpacity: 0.5});\nboard.create('text', [Math.PI/2, -0.3], '\\\\(\\\\frac{\\\\pi}{2}\\\\)', {anchorX: 'middle'});\nboard.create('text', [Math.PI, -0.3], '\\\\(\\\\pi\\\\)', {anchorX: 'middle'});\nboard.create('text', [-0.3, 1], '1', {anchorX: 'right'});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y12a-6e-q4b",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Find the area of the shaded region.",
    "a": "1",
    "t": "Area",
    "solutionSteps": [
      {
        "explanation": "Working out",
        "workingOut": "1"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 200,
        "boundingbox": [
          -1,
          2,
          4,
          -2
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[0,0], [0, 1.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,0], [3.5, 0]], {strokeColor: 'black', strokeWidth: 1});\nvar f = function(x) { return Math.cos(x); };\nvar curve = board.create('functiongraph', [f, -0.5, 3.5], {strokeColor: 'black'});\nvar integral = board.create('integral', [[Math.PI/2, Math.PI], curve], {color: 'lightblue', fillOpacity: 0.5});\nboard.create('text', [Math.PI/2, 0.3], '\\\\(\\\\frac{\\\\pi}{2}\\\\)', {anchorX: 'middle'});\nboard.create('text', [Math.PI, 0.3], '\\\\(\\\\pi\\\\)', {anchorX: 'middle'});\nboard.create('text', [-0.3, 1], '1', {anchorX: 'right'});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y12a-6e-q5a",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the exact area enclosed between the curve \\( y = \\sin x \\) and the x-axis from \\( x = \\frac{\\pi}{3} \\) to \\( x = \\frac{\\pi}{2} \\).",
    "a": "\\frac{1}{2}",
    "t": "Area",
    "solutionSteps": [
      {
        "explanation": "Working out",
        "workingOut": "\\frac{1}{2}"
      }
    ]
  },
  {
    "id": "y12a-6e-q5b",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the exact area enclosed between the curve \\( y = \\sin 2x \\) and the x-axis from \\( x = \\frac{\\pi}{4} \\) to \\( x = \\frac{\\pi}{2} \\).",
    "a": "\\frac{1}{2}",
    "t": "Area",
    "solutionSteps": [
      {
        "explanation": "Working out",
        "workingOut": "\\frac{1}{2}"
      }
    ]
  },
  {
    "id": "y12a-6e-q5c",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the exact area enclosed between the curve \\( y = \\cos x \\) and the x-axis from \\( x = \\frac{\\pi}{3} \\) to \\( x = \\frac{\\pi}{2} \\).",
    "a": "1 - \\frac{\\sqrt{3}}{2}",
    "t": "Area",
    "solutionSteps": [
      {
        "explanation": "Working out",
        "workingOut": "1 - \\frac{\\sqrt{3}}{2}"
      }
    ]
  },
  {
    "id": "y12a-6e-q5d",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the exact area enclosed between the curve \\( y = \\cos 3x \\) and the x-axis from \\( x = \\frac{\\pi}{12} \\) to \\( x = \\frac{\\pi}{6} \\).",
    "a": "\\frac{1}{3} - \\frac{\\sqrt{2}}{6}",
    "t": "Area",
    "solutionSteps": [
      {
        "explanation": "Working out",
        "workingOut": "\\frac{1}{3} - \\frac{\\sqrt{2}}{6}"
      }
    ]
  },
  {
    "id": "y12a-6e-q5e",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the exact area enclosed between the curve \\( y = \\sec^2 x \\) and the x-axis from \\( x = \\frac{\\pi}{6} \\) to \\( x = \\frac{\\pi}{3} \\).",
    "a": "\\frac{2\\sqrt{3}}{3}",
    "t": "Area",
    "solutionSteps": [
      {
        "explanation": "Working out",
        "workingOut": "\\frac{2\\sqrt{3}}{3}"
      }
    ]
  },
  {
    "id": "y12a-6e-q5f",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the exact area enclosed between the curve \\( y = \\sec^2 \\frac{1}{2}x \\) and the x-axis from \\( x = -\\frac{\\pi}{2} \\) to \\( x = \\frac{\\pi}{2} \\).",
    "a": "4",
    "t": "Area",
    "solutionSteps": [
      {
        "explanation": "Working out",
        "workingOut": "4"
      }
    ]
  },
  {
    "id": "y12a-6e-q6a",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Calculate the area of the shaded region bounded by \\( y = \\sin x \\) and \\( y = \\cos x \\) from \\( x = \\frac{\\pi}{4} \\) to \\( x = \\frac{\\pi}{2} \\).",
    "a": "\\sqrt{2} - 1",
    "t": "Area",
    "solutionSteps": [
      {
        "explanation": "Working out",
        "workingOut": "\\sqrt{2} - 1"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 200,
        "boundingbox": [
          -1,
          2,
          4,
          -2
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[0,0], [0, 1.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,0], [3.5, 0]], {strokeColor: 'black', strokeWidth: 1});\nvar f1 = function(x) { return Math.sin(x); };\nvar f2 = function(x) { return Math.cos(x); };\nboard.create('functiongraph', [f1, -0.5, 3.5], {strokeColor: 'black'});\nboard.create('functiongraph', [f2, -0.5, 3.5], {strokeColor: 'black', dash: 1});\nboard.create('inequality', [board.create('functiongraph', [f1, Math.PI/4, Math.PI/2]), board.create('functiongraph', [f2, Math.PI/4, Math.PI/2])], {fillColor: 'lightblue', fillOpacity: 0.5});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y12a-6e-q6b",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Calculate the area of the shaded region bounded by \\( y = \\sin x \\) and \\( y = \\sin 2x \\) from \\( x = \\frac{\\pi}{3} \\) to \\( x = \\frac{\\pi}{2} \\).",
    "a": "\\frac{1}{4}",
    "t": "Area",
    "solutionSteps": [
      {
        "explanation": "Working out",
        "workingOut": "\\frac{1}{4}"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 200,
        "boundingbox": [
          -1,
          2,
          4,
          -2
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[0,0], [0, 1.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,0], [3.5, 0]], {strokeColor: 'black', strokeWidth: 1});\nvar f1 = function(x) { return Math.sin(x); };\nvar f2 = function(x) { return Math.sin(2*x); };\nboard.create('functiongraph', [f1, -0.5, 3.5], {strokeColor: 'black'});\nboard.create('functiongraph', [f2, -0.5, 3.5], {strokeColor: 'black', dash: 1});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y12a-6e-q6c",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Calculate the area of the shaded region bounded by \\( y = x \\) and \\( y = \\sin x \\) from \\( x = 0 \\) to \\( x = \\frac{\\pi}{2} \\).",
    "a": "\\frac{\\pi^2}{8} - 1",
    "t": "Area",
    "solutionSteps": [
      {
        "explanation": "Working out",
        "workingOut": "\\frac{\\pi^2}{8} - 1"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 250,
        "boundingbox": [
          -1,
          2.5,
          4,
          -1
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[0,0], [0, 2]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,0], [3.5, 0]], {strokeColor: 'black', strokeWidth: 1});\nvar f1 = function(x) { return x; };\nvar f2 = function(x) { return Math.sin(x); };\nboard.create('functiongraph', [f1, 0, 2], {strokeColor: 'black'});\nboard.create('functiongraph', [f2, 0, 3.5], {strokeColor: 'black', dash: 1});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y12a-6e-q6d",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Calculate the area of the shaded region bounded by \\( y = 1 \\) and \\( y = \\cos x \\) from \\( x = -\\frac{\\pi}{2} \\) to \\( x = \\frac{\\pi}{2} \\).",
    "a": "\\pi - 2",
    "t": "Area",
    "solutionSteps": [
      {
        "explanation": "Working out",
        "workingOut": "\\pi - 2"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 200,
        "boundingbox": [
          -2,
          2,
          2,
          -1
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[0,0], [0, 1.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[-1.5,0], [1.5, 0]], {strokeColor: 'black', strokeWidth: 1});\nvar f1 = function(x) { return 1; };\nvar f2 = function(x) { return Math.cos(x); };\nboard.create('functiongraph', [f1, -1.5, 1.5], {strokeColor: 'black'});\nboard.create('functiongraph', [f2, -1.5, 1.5], {strokeColor: 'black', dash: 1});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y12a-6e-q7a",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Calculate the area of the shaded region bounded by \\( y = \\sin x \\), \\( y = \\cos x \\), and the x-axis from \\( x = \\frac{\\pi}{4} \\) to \\( x = \\pi \\).",
    "a": "\\sqrt{2}",
    "t": "Area",
    "solutionSteps": [
      {
        "explanation": "Working out",
        "workingOut": "\\sqrt{2}"
      }
    ]
  },
  {
    "id": "y12a-6e-q7b",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Calculate the area of the shaded region bounded by \\( y = x + 1 \\), \\( y = \\cos x \\), and the x-axis, shown in the diagram.",
    "a": "\\frac{3}{2}",
    "t": "Area",
    "solutionSteps": [
      {
        "explanation": "Working out",
        "workingOut": "\\frac{3}{2}"
      }
    ]
  },
  {
    "id": "y12a-6e-q8a",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the area bounded by one arch of the curve \\( y = \\sin x \\) and the x-axis.",
    "a": "2",
    "t": "Area",
    "solutionSteps": [
      {
        "explanation": "Working out",
        "workingOut": "2"
      }
    ]
  },
  {
    "id": "y12a-6e-q8b",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the area bounded by one arch of the curve \\( y = \\cos 2x \\) and the x-axis.",
    "a": "1",
    "t": "Area",
    "solutionSteps": [
      {
        "explanation": "Working out",
        "workingOut": "1"
      }
    ]
  },
  {
    "id": "y12a-6e-q9a",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the exact value of the area enclosed between the curve \\( y = \\cos x \\) and the x-axis over x = 0 \\text{ to } x = \\pi.",
    "a": "2",
    "t": "Area",
    "solutionSteps": [
      {
        "explanation": "Working out",
        "workingOut": "2"
      }
    ]
  },
  {
    "id": "y12a-6e-q9b",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the exact value of the area enclosed between the curve \\( y = \\sin x \\) and the x-axis over x = \\frac{\\pi}{4} \\text{ to } x = \\frac{3\\pi}{4}.",
    "a": "\\sqrt{2}",
    "t": "Area",
    "solutionSteps": [
      {
        "explanation": "Working out",
        "workingOut": "\\sqrt{2}"
      }
    ]
  },
  {
    "id": "y12a-6e-q9c",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the exact value of the area enclosed between the curve \\( y = \\cos 2x \\) and the x-axis over x = 0 \\text{ to } x = \\pi.",
    "a": "2",
    "t": "Area",
    "solutionSteps": [
      {
        "explanation": "Working out",
        "workingOut": "2"
      }
    ]
  },
  {
    "id": "y12a-6e-q9d",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the exact value of the area enclosed between the curve \\( y = \\sin 2x \\) and the x-axis over x = \\frac{\\pi}{3} \\text{ to } x = \\frac{2\\pi}{3}.",
    "a": "\\frac{1}{2}",
    "t": "Area",
    "solutionSteps": [
      {
        "explanation": "Working out",
        "workingOut": "\\frac{1}{2}"
      }
    ]
  },
  {
    "id": "y12a-6e-q9e",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the exact value of the area enclosed between the curve \\( y = \\sin x \\) and the x-axis over x = -\\frac{5\\pi}{6} \\text{ to } x = \\frac{7\\pi}{6}.",
    "a": "4",
    "t": "Area",
    "solutionSteps": [
      {
        "explanation": "Working out",
        "workingOut": "4"
      }
    ]
  },
  {
    "id": "y12a-6e-q9f",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the exact value of the area enclosed between the curve \\( y = \\cos 3x \\) and the x-axis over x = \\frac{\\pi}{6} \\text{ to } x = \\frac{2\\pi}{3}.",
    "a": "1",
    "t": "Area",
    "solutionSteps": [
      {
        "explanation": "Working out",
        "workingOut": "1"
      }
    ]
  },
  {
    "id": "y12a-6e-q10",
    "type": "subquestions",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "",
    "t": "Area",
    "subQuestions": [
      {
        "id": "y12a-6e-q10a",
        "type": "teacher_review",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "a) Sketch the curve \\( y = 2 \\cos \\pi x \\) in the interval \\( [-1, 1] \\), clearly marking the two x-intercepts.",
        "a": "Sketch",
        "solutionSteps": [
          {
            "explanation": "Intercepts at x = -0.5, 0.5.",
            "workingOut": ""
          }
        ]
      },
      {
        "id": "y12a-6e-q10b",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "b) Find the exact area bounded by the curve \\( y = 2 \\cos \\pi x \\) and the x-axis, between the two x-intercepts.",
        "a": "\\frac{4}{\\pi}",
        "solutionSteps": [
          {
            "explanation": "Integrate from -0.5 to 0.5.",
            "workingOut": ""
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-6e-q11",
    "type": "subquestions",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "",
    "t": "Area",
    "subQuestions": [
      {
        "id": "y12a-6e-q11a",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "An arch window 3 metres high and 2 metres wide is made in the shape of the curve \\( y = 3 \\cos(\\frac{\\pi}{2} x) \\). Find the area of the window in square metres, correct to one decimal place.",
        "a": "3.8",
        "solutionSteps": [
          {
            "explanation": "Integrate from -1 to 1.",
            "workingOut": ""
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-6e-q12",
    "type": "subquestions",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "",
    "t": "Area",
    "subQuestions": [
      {
        "id": "y12a-6e-q12a",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "The graphs of \\( y = x - \\sin x \\) and \\( y = x \\) enclose an area. Find the total area enclosed between these graphs, from \\( x = 0 \\) to \\( x = 2\\pi \\).",
        "a": "4",
        "solutionSteps": [
          {
            "explanation": "Integrate the difference from 0 to pi, and pi to 2pi.",
            "workingOut": ""
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-6e-q13",
    "type": "subquestions",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "",
    "t": "Area",
    "subQuestions": [
      {
        "id": "y12a-6e-q13a",
        "type": "teacher_review",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "The region R is bounded by the curve \\( y = \\tan x \\), the x-axis and the vertical line \\( x = \\frac{\\pi}{3} \\). Show that R has area \\( \\ln 2 \\) square units.",
        "a": "Proof",
        "solutionSteps": [
          {
            "explanation": "Integrate tan x.",
            "workingOut": ""
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-6e-q14",
    "type": "subquestions",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "",
    "t": "Area",
    "subQuestions": [
      {
        "id": "y12a-6e-q14a",
        "type": "teacher_review",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "a) Sketch the region bounded by the graphs of \\( y = \\sin x \\) and \\( y = \\cos x \\), and by the vertical lines \\( x = -\\frac{\\pi}{2} \\) and \\( x = \\frac{\\pi}{6} \\).",
        "a": "Sketch",
        "solutionSteps": [
          {
            "explanation": "Draw graphs.",
            "workingOut": ""
          }
        ]
      },
      {
        "id": "y12a-6e-q14b",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "b) Find the exact area of the region in part (a).",
        "a": "\\frac{3 + \\sqrt{3}}{2}",
        "solutionSteps": [
          {
            "explanation": "Integrate cos x - sin x.",
            "workingOut": ""
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-6e-q15",
    "type": "subquestions",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "",
    "t": "Area",
    "subQuestions": [
      {
        "id": "y12a-6e-q15a",
        "type": "teacher_review",
        "difficulty": "hard",
        "timeLimit": 180,
        "question": "a) Show by substitution that \\( y = \\sin x \\) and \\( y = \\cos 2x \\) meet at \\( x = -\\frac{\\pi}{2} \\) and \\( x = \\frac{\\pi}{6} \\).",
        "a": "Proof",
        "solutionSteps": [
          {
            "explanation": "Substitute values.",
            "workingOut": ""
          }
        ]
      },
      {
        "id": "y12a-6e-q15b",
        "type": "teacher_review",
        "difficulty": "hard",
        "timeLimit": 180,
        "question": "b) On the same number plane, sketch \\( y = \\sin x \\) and \\( y = \\cos 2x \\) in the interval \\( [-\\frac{\\pi}{2}, \\frac{\\pi}{6}] \\).",
        "a": "Sketch",
        "solutionSteps": [
          {
            "explanation": "Draw graphs.",
            "workingOut": ""
          }
        ]
      },
      {
        "id": "y12a-6e-q15c",
        "type": "short_answer",
        "difficulty": "hard",
        "timeLimit": 180,
        "question": "c) Hence find the area of the region bounded by the two curves.",
        "a": "\\frac{3\\sqrt{3}}{4}",
        "solutionSteps": [
          {
            "explanation": "Integrate cos 2x - sin x.",
            "workingOut": ""
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-6e-q16a_i",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "Show that for all positive integers n: \\( \\int_0^{2\\pi} \\sin nx \\,dx = 0 \\).",
    "a": "Proof",
    "t": "Area",
    "solutionSteps": [
      {
        "explanation": "Proof or evaluate",
        "workingOut": "Proof"
      }
    ]
  },
  {
    "id": "y12a-6e-q16a_ii",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "Show that for all positive integers n: \\( \\int_0^{2\\pi} \\cos nx \\,dx = 0 \\).",
    "a": "Proof",
    "t": "Area",
    "solutionSteps": [
      {
        "explanation": "Proof or evaluate",
        "workingOut": "Proof"
      }
    ]
  },
  {
    "id": "y12a-6e-q16b_i",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "Find the area between the curve \\( y = \\sin x \\) and the x-axis, from \\( x = 0 \\) to \\( x = 2\\pi \\).",
    "a": "4",
    "t": "Area",
    "solutionSteps": [
      {
        "explanation": "Working out",
        "workingOut": "4"
      }
    ]
  },
  {
    "id": "y12a-6e-q16b_ii",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "Find the area between the curve \\( y = \\sin 2x \\) and the x-axis, from \\( x = 0 \\) to \\( x = 2\\pi \\).",
    "a": "4",
    "t": "Area",
    "solutionSteps": [
      {
        "explanation": "Working out",
        "workingOut": "4"
      }
    ]
  },
  {
    "id": "y12a-6e-q16b_iii",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "Find the area between the curve \\( y = \\sin 3x \\) and the x-axis, from \\( x = 0 \\) to \\( x = 2\\pi \\).",
    "a": "4",
    "t": "Area",
    "solutionSteps": [
      {
        "explanation": "Working out",
        "workingOut": "4"
      }
    ]
  },
  {
    "id": "y12a-6e-q16b_iv",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "Find the area between the curve \\( y = \\sin nx \\) and the x-axis, from \\( x = 0 \\) to \\( x = 2\\pi \\) (where n is a positive integer).",
    "a": "4",
    "t": "Area",
    "solutionSteps": [
      {
        "explanation": "Working out",
        "workingOut": "4"
      }
    ]
  },
  {
    "id": "y12a-6e-q16b_v",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "Find the area between the curve \\( y = \\cos nx \\) and the x-axis, from \\( x = 0 \\) to \\( x = 2\\pi \\) (where n is a positive integer).",
    "a": "4",
    "t": "Area",
    "solutionSteps": [
      {
        "explanation": "Working out",
        "workingOut": "4"
      }
    ]
  },
  {
    "id": "y12a-6e-q17",
    "type": "subquestions",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "",
    "t": "Area",
    "subQuestions": [
      {
        "id": "y12a-6e-q17a",
        "type": "teacher_review",
        "difficulty": "hard",
        "timeLimit": 180,
        "question": "a) Show that \\( \\int_0^n (1 + \\sin 2\\pi x) \\,dx = n \\), for all positive integers n.",
        "a": "Proof",
        "solutionSteps": [
          {
            "explanation": "Integrate.",
            "workingOut": ""
          }
        ]
      },
      {
        "id": "y12a-6e-q17b",
        "type": "teacher_review",
        "difficulty": "hard",
        "timeLimit": 180,
        "question": "b) Sketch \\( y = 1 + \\sin 2\\pi x \\), and interpret the result geometrically.",
        "a": "Sketch",
        "solutionSteps": [
          {
            "explanation": "Interpret as a rectangle.",
            "workingOut": ""
          }
        ]
      }
    ]
  }
];
