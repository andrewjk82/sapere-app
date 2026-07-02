export const Y11_CH3H_QUESTIONS = [
  {
    "id": "y11a-3h-q1",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Two graphs that have asymptotes",
    "question": "Consider the hyperbola \\( y = \\frac{6}{x} \\).",
    "subQuestions": [
      {
        "id": "y11a-3h-q1a",
        "type": "short_answer",
        "question": "a) Complete the table of values for \\( y = \\frac{6}{x} \\) at \\( x = -6, -3, -2, -1, -0.5, 0, 0.5, 1, 2, 3, 6 \\). (Format: 'y = a, b, c, d, e, undefined, f, g, h, i, j')",
        "a": "y = -1, -2, -3, -6, -12, undefined, 12, 6, 3, 2, 1"
      },
      {
        "id": "y11a-3h-q1b",
        "type": "teacher_review",
        "question": "b) Plot the points and sketch the hyperbola.",
        "a": "Two branches of a hyperbola: one in quadrant 1 passing through (0.5,12), (1,6), (2,3), (3,2), (6,1) and one in quadrant 3 passing through (-0.5,-12), (-1,-6), (-2,-3), (-3,-2), (-6,-1)."
      },
      {
        "id": "y11a-3h-q1c",
        "type": "multiple_choice",
        "question": "c) Which two quadrants do the branches of the curve lie in?",
        "opts": [
          "Quadrants 1 and 3",
          "Quadrants 2 and 4",
          "Quadrants 1 and 2",
          "Quadrants 3 and 4"
        ],
        "a": "0"
      },
      {
        "id": "y11a-3h-q1d",
        "type": "short_answer",
        "question": "d) Write down the equations of the two asymptotes of the hyperbola. (Format: 'x = a, y = b')",
        "a": "x = 0, y = 0"
      },
      {
        "id": "y11a-3h-q1e",
        "type": "short_answer",
        "question": "e) State the domain and range of the function. (Format: 'domain: x != a, range: y != b')",
        "a": "domain: x != 0, range: y != 0"
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Evaluate \\( y = \\frac{6}{x} \\) for each x-value. Notice that \\( x=0 \\) is undefined because division by zero is impossible.",
        "workingOut": "y(-6) = 6/(-6) = -1\ny(-3) = 6/(-3) = -2\ny(-2) = 6/(-2) = -3\ny(-1) = 6/(-1) = -6\ny(-0.5) = 6/(-0.5) = -12\ny(0) = \\text{undefined}\ny(0.5) = 12\ny(1) = 6\ny(2) = 3\ny(3) = 2\ny(6) = 1"
      },
      {
        "explanation": "The curve consists of two separate smooth branches lying in quadrants 1 and 3.",
        "workingOut": ""
      },
      {
        "explanation": "As \\( x \\to \\pm\\infty \\), \\( y \\to 0 \\), so \\( y=0 \\) is a horizontal asymptote. As \\( x \\to 0 \\), \\( y \\to \\pm\\infty \\), so \\( x=0 \\) is a vertical asymptote.",
        "workingOut": ""
      },
      {
        "explanation": "Since the function is undefined only at \\( x=0 \\) and can yield any value except \\( y=0 \\), the domain is \\( x \\neq 0 \\) and range is \\( y \\neq 0 \\).",
        "workingOut": ""
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [
          -8,
          8,
          8,
          -8
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-7.5,0], [7.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-7.5], [0,7.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [7.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 7.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return 6/x; }, 0.1, 7.5], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('functiongraph', [function(x){ return 6/x; }, -7.5, -0.1], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('point', [1,6], {name: '(1,6)', visible: true, size: 2, label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [2,3], {name: '(2,3)', visible: true, size: 2, label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [-1,-6], {name: '(-1,-6)', visible: true, size: 2, label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [-2,-3], {name: '(-2,-3)', visible: true, size: 2, label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y11a-3h-q2a",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Two graphs that have asymptotes",
    "question": "Construct a table of values and sketch the hyperbola \\( y = -\\frac{8}{x} \\). Write down its domain, range, asymptotes, and which quadrants the branches lie in.",
    "a": "Branches lie in quadrants 2 and 4. Domain: x != 0, Range: y != 0. Asymptotes: x = 0, y = 0.",
    "solutionSteps": [
      {
        "explanation": "Since the numerator is negative, the branches of the hyperbola lie in quadrants 2 and 4. The vertical asymptote is \\( x = 0 \\) and the horizontal asymptote is \\( y = 0 \\).",
        "workingOut": ""
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [
          -10,
          10,
          10,
          -10
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-9.5,0], [9.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-9.5], [0,9.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [9.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 9.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return -8/x; }, 0.1, 9.5], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('functiongraph', [function(x){ return -8/x; }, -9.5, -0.1], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y11a-3h-q2b",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Two graphs that have asymptotes",
    "question": "Construct a table of values and sketch the hyperbola \\( y = -\\frac{5}{x} \\). Write down its domain, range, asymptotes, and quadrants.",
    "a": "Branches lie in quadrants 2 and 4. Domain: x != 0, Range: y != 0. Asymptotes: x = 0, y = 0.",
    "solutionSteps": [
      {
        "explanation": "This hyperbola lies in quadrants 2 and 4. Its asymptotes are the axes \\( x = 0 \\) and \\( y = 0 \\).",
        "workingOut": ""
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [
          -8,
          8,
          8,
          -8
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-7.5,0], [7.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-7.5], [0,7.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('functiongraph', [function(x){ return -5/x; }, 0.1, 7.5], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('functiongraph', [function(x){ return -5/x; }, -7.5, -0.1], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y11a-3h-q3",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Two graphs that have asymptotes",
    "question": "Compare the hyperbolas \\( y = \\frac{2}{x} \\), \\( y = \\frac{6}{x} \\), and \\( y = \\frac{12}{x} \\).",
    "subQuestions": [
      {
        "id": "y11a-3h-q3a",
        "type": "multiple_choice",
        "question": "a) Which two quadrants do the branches of each hyperbola lie in?",
        "opts": [
          "Quadrants 1 and 3",
          "Quadrants 2 and 4",
          "Quadrants 1 and 2",
          "Quadrants 3 and 4"
        ],
        "a": "0"
      },
      {
        "id": "y11a-3h-q3b",
        "type": "short_answer",
        "question": "b) Write down the coordinates of the points on each hyperbola closest to the origin. (Format: 'k=2: (x1, y1) and (x2, y2); k=6: ...; k=12: ...' to 2 dec places)",
        "a": "k=2: (-1.41, -1.41) and (1.41, 1.41); k=6: (-2.45, -2.45) and (2.45, 2.45); k=12: (-3.46, -3.46) and (3.46, 3.46)"
      },
      {
        "id": "y11a-3h-q3c",
        "type": "multiple_choice",
        "question": "c) Besides \\( y = x \\), in which other line are the graphs of these hyperbolas symmetric?",
        "opts": [
          "\\( y = -x \\)",
          "\\( y = 0 \\)",
          "\\( x = 0 \\)",
          "\\( y = 2x \\)"
        ],
        "a": "0"
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Since all numerators are positive, the branches are in quadrants 1 and 3.",
        "workingOut": ""
      },
      {
        "explanation": "The point on \\( y = \\frac{k}{x} \\) closest to the origin lies on the line of symmetry \\( y = x \\). Substituting \\( y = x \\) gives \\( x^2 = k \\implies x = \\pm\\sqrt{k} \\).",
        "workingOut": "k=2 \\implies x = \\pm\\sqrt{2} \\approx \\pm 1.41\nk=6 \\implies x = \\pm\\sqrt{6} \\approx \\pm 2.45\nk=12 \\implies x = \\pm\\sqrt{12} \\approx \\pm 3.46"
      },
      {
        "explanation": "Hyperbolas of the form \\( y = \\frac{k}{x} \\) are symmetric in both lines of symmetry \\( y = x \\) (which crosses the branches) and \\( y = -x \\) (which separates the branches).",
        "workingOut": ""
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [
          -8,
          8,
          8,
          -8
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-7.5,0], [7.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-7.5], [0,7.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('functiongraph', [function(x){ return 2/x; }, 0.1, 7.5], {strokeColor: '#3b82f6', strokeWidth: 1.5});\nboard.create('functiongraph', [function(x){ return 2/x; }, -7.5, -0.1], {strokeColor: '#3b82f6', strokeWidth: 1.5});\nboard.create('functiongraph', [function(x){ return 6/x; }, 0.1, 7.5], {strokeColor: '#10b981', strokeWidth: 1.5});\nboard.create('functiongraph', [function(x){ return 6/x; }, -7.5, -0.1], {strokeColor: '#10b981', strokeWidth: 1.5});\nboard.create('functiongraph', [function(x){ return 12/x; }, 0.1, 7.5], {strokeColor: '#ef4444', strokeWidth: 1.5});\nboard.create('functiongraph', [function(x){ return 12/x; }, -7.5, -0.1], {strokeColor: '#ef4444', strokeWidth: 1.5});\nboard.create('line', [[-6,-6],[6,6]], {strokeColor: 'gray', dash: 2, strokeWidth: 1});\nboard.create('line', [[-6,6],[6,-6]], {strokeColor: 'gray', dash: 2, strokeWidth: 1});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y11a-3h-q4",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Two graphs that have asymptotes",
    "question": "Consider the exponential curve \\( y = 2^x \\).",
    "subQuestions": [
      {
        "id": "y11a-3h-q4a",
        "type": "short_answer",
        "question": "a) Complete the table of values for \\( y = 2^x \\) for \\( x = -2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2 \\). Round to 2 decimal places. (Format: 'y = a, b, c, d, e, f, g, h, i')",
        "a": "y = 0.25, 0.35, 0.5, 0.71, 1, 1.41, 2, 2.83, 4"
      },
      {
        "id": "y11a-3h-q4b",
        "type": "teacher_review",
        "question": "b) Sketch the curve.",
        "a": "Curves rising to the right, passing through (0,1), (1,2), (2,4) and tending towards y=0 (x-axis) to the left."
      },
      {
        "id": "y11a-3h-q4c",
        "type": "short_answer",
        "question": "c) What is the \\( y \\)-intercept of the function?",
        "a": "1"
      },
      {
        "id": "y11a-3h-q4d",
        "type": "short_answer",
        "question": "d) What is the \\( y \\)-coordinate when \\( x = 1 \\)?",
        "a": "2"
      },
      {
        "id": "y11a-3h-q4e",
        "type": "short_answer",
        "question": "e) Write down the equation of the horizontal asymptote.",
        "a": "y = 0"
      },
      {
        "id": "y11a-3h-q4f",
        "type": "short_answer",
        "question": "f) State the domain and range of the function. (Format: 'domain: all real x, range: y > k')",
        "a": "domain: all real x, range: y > 0"
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Evaluate the powers of 2 for each x-value.",
        "workingOut": "y(-2) = 2^{-2} = 0.25\ny(-1.5) = 2^{-1.5} \\approx 0.35\ny(-1) = 2^{-1} = 0.5\ny(-0.5) = 2^{-0.5} \\approx 0.71\ny(0) = 2^0 = 1\ny(0.5) = 2^{0.5} \\approx 1.41\ny(1) = 2^1 = 2\ny(1.5) = 2^{1.5} \\approx 2.83\ny(2) = 2^2 = 4"
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [
          -3,
          5,
          3,
          -1
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-2.5,0], [2.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-0.5], [0,4.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('functiongraph', [function(x){ return Math.pow(2,x); }, -2.8, 2.8], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('point', [0,1], {name: '(0,1)', visible: true, size: 2, label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [1,2], {name: '(1,2)', visible: true, size: 2, label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [2,4], {name: '(2,4)', visible: true, size: 2, label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y11a-3h-q5",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Two graphs that have asymptotes",
    "question": "Consider the exponential function \\( y = 3^x \\).",
    "subQuestions": [
      {
        "id": "y11a-3h-q5a",
        "type": "short_answer",
        "question": "a) Complete the table of values for \\( x = -2, -1, 0, 1, 2 \\). (Format: 'y = a, b, c, d, e' using fractions for small values)",
        "a": "y = 1/9, 1/3, 1, 3, 9"
      },
      {
        "id": "y11a-3h-q5b",
        "type": "short_answer",
        "question": "b) Write down the \\( y \\)-intercept and the horizontal asymptote.",
        "a": "(0, 1), y = 0"
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Evaluate the exponential powers.",
        "workingOut": "y(-2) = 3^{-2} = 1/9\ny(-1) = 3^{-1} = 1/3\ny(0) = 3^0 = 1\ny(1) = 3^1 = 3\ny(2) = 3^2 = 9"
      }
    ]
  },
  {
    "id": "y11a-3h-q6",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "t": "Two graphs that have asymptotes",
    "question": "Sketch the shifted exponential curve \\( y = 2^x - 4 \\). Identify the \\( y \\)-intercept, the \\( x \\)-intercept, the horizontal asymptote, and state the domain and range.",
    "a": "y-intercept: (0, -3), x-intercept: (2, 0), Asymptote: y = -4. Domain: all real x, Range: y > -4.",
    "solutionSteps": [
      {
        "explanation": "Substitute \\( x = 0 \\) to find the y-intercept: \\( y = 2^0 - 4 = -3 \\).",
        "workingOut": ""
      },
      {
        "explanation": "Set \\( y = 0 \\) to find the x-intercept: \\( 2^x - 4 = 0 \\implies 2^x = 4 \\implies x = 2 \\).",
        "workingOut": ""
      },
      {
        "explanation": "The horizontal asymptote is shifted down by 4, so it is \\( y = -4 \\). Range is \\( y > -4 \\).",
        "workingOut": ""
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [
          -4,
          3,
          4,
          -5
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-3.5,0], [3.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-4.5], [0,2.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('line', [[-4,-4], [4,-4]], {strokeColor: 'gray', dash: 2, strokeWidth: 1});\nboard.create('functiongraph', [function(x){ return Math.pow(2,x) - 4; }, -3.8, 2.5], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('point', [0,-3], {name: '-3', visible: true, size: 2, label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [2,0], {name: '2', visible: true, size: 2, label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y11a-3h-q7",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Two graphs that have asymptotes",
    "question": "Compare the exponential curves \\( y = 1.8^x \\), \\( y = 2.8^x \\), and \\( y = 3.8^x \\) on a single set of axes. Describe how the curves behave for \\( x > 0 \\) and \\( x < 0 \\).",
    "a": "For x > 0, higher bases rise faster. For x < 0, higher bases approach the asymptote y=0 faster. All pass through (0,1).",
    "solutionSteps": [
      {
        "explanation": "Since all bases are greater than 1, all curves represent exponential growth and pass through the point \\( (0, 1) \\).",
        "workingOut": ""
      },
      {
        "explanation": "For \\( x > 0 \\), \\( 3.8^x > 2.8^x > 1.8^x \\), so the curve with the largest base rises the steepest. For \\( x < 0 \\), the curve with the largest base decays to zero the fastest.",
        "workingOut": ""
      }
    ]
  },
  {
    "id": "y11a-3h-q8a",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Two graphs that have asymptotes",
    "question": "Sketch the exponential curve \\( y = 8^x \\). Identify its key features.",
    "a": "Strictly increasing curve passing through (0,1) and (1,8). Horizontal asymptote at y = 0.",
    "solutionSteps": [
      {
        "explanation": "This represents rapid exponential growth. The y-intercept is at \\( (0, 1) \\) and horizontal asymptote is the x-axis \\( y = 0 \\).",
        "workingOut": ""
      }
    ]
  },
  {
    "id": "y11a-3h-q8b",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Two graphs that have asymptotes",
    "question": "Sketch the exponential curve \\( y = 0.25^x \\). Identify its key features.",
    "a": "Strictly decreasing curve passing through (0,1) and (-1,4). Horizontal asymptote at y = 0 to the right.",
    "solutionSteps": [
      {
        "explanation": "Since the base is \\( 0.25 = \\frac{1}{4} = 4^{-1} < 1 \\), this represents exponential decay. The curve falls from left to right.",
        "workingOut": ""
      }
    ]
  },
  {
    "id": "y11a-3h-q9",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Two graphs that have asymptotes",
    "question": "Consider the functions \\( y = 2^{-x} \\), \\( y = 5^{-x} \\), and \\( y = 2.5^{-x} \\).",
    "subQuestions": [
      {
        "id": "y11a-3h-q9a",
        "type": "teacher_review",
        "question": "a) Sketch these three exponential functions on a single set of axes.",
        "a": "Three decreasing exponential curves, all passing through (0,1). The curve y = 5^-x is steepest for x < 0 and closest to the x-axis for x > 0."
      },
      {
        "id": "y11a-3h-q9b",
        "type": "multiple_choice",
        "question": "b) How do these curves compare to the standard growth curves \\( y = 2^x \\) and \\( y = 5^x \\)?",
        "opts": [
          "They are reflections of the growth curves in the y-axis.",
          "They are reflections of the growth curves in the x-axis.",
          "They are shifted versions of the growth curves.",
          "They are identical to the growth curves."
        ],
        "a": "0"
      },
      {
        "id": "y11a-3h-q9c",
        "type": "short_answer",
        "question": "c) Write down the domain and range of each function. (Format: 'domain: ..., range: ...')",
        "a": "domain: all real x, range: y > 0"
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Since \\( a^{-x} = (a^{-1})^x = (\\frac{1}{a})^x \\), these represent exponential decay.",
        "workingOut": ""
      },
      {
        "explanation": "Replacing \\( x \\) with \\( -x \\) in any function \\( f(x) \\) reflects its graph horizontally across the y-axis.",
        "workingOut": ""
      }
    ]
  },
  {
    "id": "y11a-3h-q10a",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Two graphs that have asymptotes",
    "question": "Sketch the exponential graph \\( y = 6^x \\) without using a table of values. Make sure the y-intercept and one other reference point are clearly marked.",
    "a": "Graph rising to the right, passing through (0,1) and (1,6). Horizontal asymptote at y = 0.",
    "solutionSteps": [
      {
        "explanation": "Locate the y-intercept: \\( f(0) = 6^0 = 1 \\). Find another reference point: \\( f(1) = 6^1 = 6 \\). Draw the growth curve heading towards the x-axis on the left.",
        "workingOut": ""
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [
          -3,
          8,
          2,
          -1
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-2.5,0], [1.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-0.5], [0,7.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('functiongraph', [function(x){ return Math.pow(6,x); }, -2.8, 1.2], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('point', [0,1], {name: '(0,1)', visible: true, size: 2, label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [1,6], {name: '(1,6)', visible: true, size: 2, label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y11a-3h-q10b",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Two graphs that have asymptotes",
    "question": "Sketch the exponential graph \\( y = 3^{-x} \\) without using a table of values.",
    "a": "Graph falling to the right, passing through (0,1) and (-1,3). Horizontal asymptote at y = 0 on the right.",
    "solutionSteps": [
      {
        "explanation": "Y-intercept is \\( (0,1) \\). Another point is \\( x = -1 \\implies y = 3 \\). Since the exponent has a negative sign, the graph decays to the right.",
        "workingOut": ""
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [
          -2,
          5,
          3,
          -1
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-1.5,0], [2.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-0.5], [0,4.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('functiongraph', [function(x){ return Math.pow(3,-x); }, -1.2, 2.8], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('point', [0,1], {name: '(0,1)', visible: true, size: 2, label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [-1,3], {name: '(-1,3)', visible: true, size: 2, label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
      }
    }
  },
  {
    "id": "y11a-3h-q11",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Two graphs that have asymptotes",
    "question": "Justify the asymptotic behavior of the following curves using the language of limits.",
    "subQuestions": [
      {
        "id": "y11a-3h-q11a",
        "type": "teacher_review",
        "question": "a) For \\( y = 2^x \\), justify why \\( y = 0 \\) is a horizontal asymptote.",
        "a": "Proof: As x approaches negative infinity (x -> -infinity), 2^x approaches 0. Therefore, the line y = 0 is a horizontal asymptote."
      },
      {
        "id": "y11a-3h-q11b",
        "type": "teacher_review",
        "question": "b) For \\( y = 5^{-x} \\), justify why \\( y = 0 \\) is a horizontal asymptote.",
        "a": "Proof: As x approaches positive infinity (x -> infinity), 5^-x = 1/5^x approaches 0. Therefore, the line y = 0 is a horizontal asymptote."
      },
      {
        "id": "y11a-3h-q11c",
        "type": "teacher_review",
        "question": "c) For \\( y = \\frac{6}{x} \\), justify the vertical and horizontal asymptotes.",
        "a": "Proof: As x approaches +/- infinity, 6/x approaches 0, so y = 0 is a horizontal asymptote. As x approaches 0 from the positive side, 6/x -> infinity; from the negative side, 6/x -> -infinity, so x = 0 is a vertical asymptote."
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Evaluate the limits as \\( x \\to \\pm\\infty \\) or \\( x \\to 0 \\).",
        "workingOut": "\\lim_{x \\to -\\infty} 2^x = 0\n\\lim_{x \\to \\infty} 5^{-x} = 0\n\\lim_{x \\to \\pm\\infty} \\frac{6}{x} = 0, quad \\lim_{x \\to 0^\\pm} \\frac{6}{x} = \\pm\\infty"
      }
    ]
  },
  {
    "id": "y11a-3h-q12",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Two graphs that have asymptotes",
    "question": "Does the equation \\( x^2 - y^2 = 0 \\) represent a hyperbola? Justify your choice.",
    "opts": [
      "No, because it factorizes into \\( (x-y)(x+y) = 0 \\), which represents two intersecting straight lines.",
      "Yes, it is a standard rectangular hyperbola centered at the origin.",
      "Yes, it is a hyperbola with asymptotes \\( y = \\pm x \\) but has no real vertices.",
      "No, it represents a circle of radius 0."
    ],
    "a": "0",
    "solutionSteps": [
      {
        "explanation": "Factorize the difference of two squares.",
        "workingOut": "x^2 - y^2 = 0 \\implies (x - y)(x + y) = 0"
      },
      {
        "explanation": "This yields two linear equations: \\( y = x \\) or \\( y = -x \\). This is a pair of intersecting lines, not a hyperbola (it is a degenerate hyperbola).",
        "workingOut": ""
      }
    ]
  },
  {
    "id": "y11a-3h-q13",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Two graphs that have asymptotes",
    "question": "Consider the function \\( y = \\left(\\frac{1}{3}\\right)^x \\).",
    "subQuestions": [
      {
        "id": "y11a-3h-q13a",
        "type": "teacher_review",
        "question": "a) Construct a table of values and sketch the graph.",
        "a": "Symmetric decaying curve passing through (0,1), (1, 1/3), (-1, 3), and (-2, 9)."
      },
      {
        "id": "y11a-3h-q13b",
        "type": "teacher_review",
        "question": "b) Use the index laws to explain why \\( y = \\left(\\frac{1}{3}\\right)^x \\) has the exact same graph as \\( y = 3^{-x} \\).",
        "a": "Proof: By definition, 1/3 = 3^-1. Using the power of a power rule: (1/3)^x = (3^-1)^x = 3^(-1*x) = 3^-x. Thus the functions are identical."
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Rewrite the fraction using a negative index.",
        "workingOut": "\\left(\\frac{1}{3}\\right)^x = (3^{-1})^x = 3^{-x}"
      }
    ]
  },
  {
    "id": "y11a-3h-q14",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Two graphs that have asymptotes",
    "question": "Consider the rectangular hyperbola \\( xy = c^2 \\) (where \\( c > 0 \\)) and the line \\( y = 2x \\).",
    "subQuestions": [
      {
        "id": "y11a-3h-q14a",
        "type": "short_answer",
        "question": "a) Solve the equations simultaneously to find the coordinates of the intersection points in terms of \\( c \\). (Format: '(-a, -b) and (a, b)' where parameters are expressed in terms of c)",
        "a": "(-c/\\sqrt{2}, -c\\sqrt{2}) and (c/\\sqrt{2}, c\\sqrt{2})"
      },
      {
        "id": "y11a-3h-q14b",
        "type": "short_answer",
        "question": "b) Find the exact intersection points when \\( c = 4 \\). (Format: '(-x, -y) and (x, y)')",
        "a": "(-2\\sqrt{2}, -4\\sqrt{2}) and (2\\sqrt{2}, 4\\sqrt{2})"
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Substitute \\( y = 2x \\) into \\( xy = c^2 \\).",
        "workingOut": "x(2x) = c^2 \\implies 2x^2 = c^2 \\implies x^2 = \\frac{c^2}{2} \\implies x = \\pm \\frac{c}{\\sqrt{2}}"
      },
      {
        "explanation": "Substitute \\( x \\) back to find \\( y \\).",
        "workingOut": "y = 2x \\implies y = \\pm \\frac{2c}{\\sqrt{2}} = \\pm c\\sqrt{2}"
      },
      {
        "explanation": "For \\( c = 4 \\), substitute \\( c = 4 \\) into the formulas.",
        "workingOut": "x = \\pm \\frac{4}{\\sqrt{2}} = \\pm 2\\sqrt{2}\ny = \\pm 4\\sqrt{2}"
      }
    ]
  },
  {
    "id": "y11a-3h-q15",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Two graphs that have asymptotes",
    "question": "Some curves can cross their asymptotes. Consider the curve \\( y = \\frac{4x}{x^2+1} \\).",
    "subQuestions": [
      {
        "id": "y11a-3h-q15a",
        "type": "short_answer",
        "question": "a) Complete the table of values for \\( y = \\frac{4x}{x^2+1} \\) at \\( x = -6, -3, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 3, 6 \\). Round to 2 decimal places. (Format: 'y = a, b, c, d, e, f, g, h, i, j, k')",
        "a": "y = -0.65, -1.2, -1.85, -2, -1.6, 0, 1.6, 2, 1.85, 1.2, 0.65"
      },
      {
        "id": "y11a-3h-q15b",
        "type": "teacher_review",
        "question": "b) Plot the points and join them with a smooth curve.",
        "a": "Curve starts close to y=0 on the left, dips to a local minimum at (-1, -2), rises through (0,0) to a local maximum at (1, 2), and then decreases, approaching y=0 from above as x -> infinity."
      },
      {
        "id": "y11a-3h-q15c",
        "type": "short_answer",
        "question": "c) What is the horizontal asymptote of this curve?",
        "a": "y = 0"
      },
      {
        "id": "y11a-3h-q15d",
        "type": "short_answer",
        "question": "d) Where does the curve cross its asymptote? (Format: '(x, y)')",
        "a": "(0, 0)"
      }
    ],
    "solutionSteps": [
      {
        "explanation": "Evaluate \\( f(x) = \\frac{4x}{x^2+1} \\) for each x-value.",
        "workingOut": "f(0) = 0\nf(1) = 4/2 = 2, quad f(-1) = -2\nf(3) = 12/10 = 1.2, quad f(-3) = -1.2\nf(0.5) = 2/1.25 = 1.6, quad f(-0.5) = -1.6\nf(6) = 24/37 \\approx 0.65, quad f(-6) \\approx -0.65"
      },
      {
        "explanation": "As \\( x \\to \\pm\\infty \\), the denominator \\( x^2+1 \\) grows much faster than \\( 4x \\), so \\( y \\to 0 \\). Thus \\( y = 0 \\) (the x-axis) is the horizontal asymptote.",
        "workingOut": ""
      },
      {
        "explanation": "Find where \\( y = 0 \\) (crosses asymptote): \\( \\frac{4x}{x^2+1} = 0 \\implies 4x = 0 \\implies x = 0 \\). The crossing point is \\( (0, 0) \\).",
        "workingOut": ""
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [
          -7,
          3,
          7,
          -3
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-6.5,0], [6.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-2.5], [0,2.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [6.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 2.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return 4*x/(x*x+1); }, -6.5, 6.5], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('point', [1,2], {name: 'Max(1,2)', visible: true, size: 2, label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [-1,-2], {name: 'Min(-1,-2)', visible: true, size: 2, label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [0,0], {name: '(0,0)', visible: true, size: 2, label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
      }
    }
  }
];
