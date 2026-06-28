export const Y11_CH3G_QUESTIONS = [
// ── QUESTION 1a ──
{
  "id": "y11a-3g-q1a",
  "type": "short_answer",
  "difficulty": "easy",
  "timeLimit": 60,
  "t": "Powers, cubics, and circles",
  "question": "Write down the coordinates of the centre and the radius of the circle: \\( x^2 + y^2 = 25 \\). (Format: 'Centre (a, b), radius r')",
  "a": "Centre (0, 0), radius 5",
  "solutionSteps": [
  {
    "explanation": "Compare the equation to the standard form of a circle centered at the origin: \\( x^2 + y^2 = r^2 \\).",
    "workingOut": "r^2 = 25 \\implies r = 5"
  },
  {
    "explanation": "Thus, the centre is at \\( (0, 0) \\) and the radius is \\( 5 \\).",
    "workingOut": ""
  }]

},

// ── QUESTION 1b ──
{
  "id": "y11a-3g-q1b",
  "type": "short_answer",
  "difficulty": "easy",
  "timeLimit": 60,
  "t": "Powers, cubics, and circles",
  "question": "Write down the coordinates of the centre and the radius of the circle: \\( x^2 + y^2 = 64 \\). (Format: 'Centre (a, b), radius r')",
  "a": "Centre (0, 0), radius 8",
  "solutionSteps": [
  {
    "explanation": "Identify standard form parameters where \\( r^2 = 64 \\).",
    "workingOut": "r = \\sqrt{64} = 8"
  }]

},

// ── QUESTION 1c ──
{
  "id": "y11a-3g-q1c",
  "type": "short_answer",
  "difficulty": "easy",
  "timeLimit": 60,
  "t": "Powers, cubics, and circles",
  "question": "Write down the coordinates of the centre and the radius of the circle: \\( x^2 + y^2 = \\frac{1}{4} \\). (Format: 'Centre (a, b), radius r')",
  "a": "Centre (0, 0), radius 0.5",
  "solutionSteps": [
  {
    "explanation": "Find the radius: \\( r = \\sqrt{\\frac{1}{4}} = \\frac{1}{2} = 0.5 \\).",
    "workingOut": ""
  }]

},

// ── QUESTION 1d ──
{
  "id": "y11a-3g-q1d",
  "type": "short_answer",
  "difficulty": "easy",
  "timeLimit": 60,
  "t": "Powers, cubics, and circles",
  "question": "Write down the coordinates of the centre and the radius of the circle: \\( x^2 + y^2 = 1.96 \\). (Format: 'Centre (a, b), radius r')",
  "a": "Centre (0, 0), radius 1.4",
  "solutionSteps": [
  {
    "explanation": "Find the radius: \\( r = \\sqrt{1.96} = 1.4 \\).",
    "workingOut": ""
  }]

},

// ── QUESTION 2a ──
{
  "id": "y11a-3g-q2a",
  "type": "teacher_review",
  "difficulty": "easy",
  "timeLimit": 60,
  "t": "Powers, cubics, and circles",
  "question": "Sketch the graph of the circle \\( x^2 + y^2 = 4 \\). Mark all intercepts with the axes, and state its domain and range.",
  "a": "Circle centered at (0,0) with radius 2. Domain: [-2, 2], Range: [-2, 2].",
  "solutionSteps": [
  {
    "explanation": "Identify parameters: centre \\( (0, 0) \\), radius \\( r = 2 \\).",
    "workingOut": ""
  },
  {
    "explanation": "Determine intercepts: \\( x \\)-intercepts at \\( (\\pm 2, 0) \\) and \\( y \\)-intercepts at \\( (0, \\pm 2) \\).",
    "workingOut": ""
  },
  {
    "explanation": "Domain is the interval of possible \\( x \\)-values: \\( [-2, 2] \\). Range is the interval of possible \\( y \\)-values: \\( [-2, 2] \\).",
    "workingOut": ""
  }],

  "graphData": {
    "jsxGraph": {
      "width": 350,
      "height": 250,
      "boundingbox": [-3.5, 3.5, 3.5, -3.5],
      "script": "board.suspendUpdate();\nboard.create('arrow', [[-3,0], [3,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3], [0,3]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [2.8, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 2.8, 'y'], {fontSize: 14});\nboard.create('circle', [[0,0], 2], {strokeColor: '#4f46e5', strokeWidth: 2, fillColor: 'none'});\nboard.create('point', [2,0], {name: '2', visible: true, size: 2, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [-2,0], {name: '-2', visible: true, size: 2, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [0,2], {name: '2', visible: true, size: 2, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [0,-2], {name: '-2', visible: true, size: 2, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
    }
  }
},

// ── QUESTION 2b ──
{
  "id": "y11a-3g-q2b",
  "type": "teacher_review",
  "difficulty": "easy",
  "timeLimit": 60,
  "t": "Powers, cubics, and circles",
  "question": "Sketch the graph of the circle \\( x^2 + y^2 = 16 \\). Mark all intercepts with the axes, and state its domain and range.",
  "a": "Circle centered at (0,0) with radius 4. Domain: [-4, 4], Range: [-4, 4].",
  "solutionSteps": [
  {
    "explanation": "Identify parameters: centre \\( (0, 0) \\), radius \\( r = 4 \\). Intercepts are at \\( \\pm 4 \\) on both axes. Domain: \\( [-4, 4] \\). Range: \\( [-4, 4] \\).",
    "workingOut": ""
  }],

  "graphData": {
    "jsxGraph": {
      "width": 350,
      "height": 250,
      "boundingbox": [-5.5, 5.5, 5.5, -5.5],
      "script": "board.suspendUpdate();\nboard.create('arrow', [[-5,0], [5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-5], [0,5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.8, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 4.8, 'y'], {fontSize: 14});\nboard.create('circle', [[0,0], 4], {strokeColor: '#4f46e5', strokeWidth: 2, fillColor: 'none'});\nboard.create('point', [4,0], {name: '4', visible: true, size: 2, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [-4,0], {name: '-4', visible: true, size: 2, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [0,4], {name: '4', visible: true, size: 2, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [0,-4], {name: '-4', visible: true, size: 2, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
    }
  }
},

// ── QUESTION 2c ──
{
  "id": "y11a-3g-q2c",
  "type": "teacher_review",
  "difficulty": "easy",
  "timeLimit": 60,
  "t": "Powers, cubics, and circles",
  "question": "Sketch the graph of the circle \\( x^2 + y^2 = \\frac{1}{9} \\). Mark intercepts, and state domain and range.",
  "a": "Circle centered at (0,0) with radius 1/3. Domain: [-1/3, 1/3], Range: [-1/3, 1/3].",
  "solutionSteps": [
  {
    "explanation": "Identify parameters: centre \\( (0, 0) \\), radius \\( r = \\frac{1}{3} \\). Intercepts at \\( \\pm \\frac{1}{3} \\) on both axes. Domain: \\( [-\\frac{1}{3}, \\frac{1}{3}] \\). Range: \\( [-\\frac{1}{3}, \\frac{1}{3}] \\).",
    "workingOut": ""
  }],

  "graphData": {
    "jsxGraph": {
      "width": 350,
      "height": 250,
      "boundingbox": [-0.6, 0.6, 0.6, -0.6],
      "script": "board.suspendUpdate();\nboard.create('arrow', [[-0.5,0], [0.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-0.5], [0,0.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [0.48, -0.05, 'x'], {fontSize: 14});\nboard.create('text', [-0.05, 0.48, 'y'], {fontSize: 14});\nboard.create('circle', [[0,0], 0.333], {strokeColor: '#4f46e5', strokeWidth: 2, fillColor: 'none'});\nboard.create('point', [0.333,0], {name: '1/3', visible: true, size: 2, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [-0.333,0], {name: '-1/3', visible: true, size: 2, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [0,0.333], {name: '1/3', visible: true, size: 2, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [0,-0.333], {name: '-1/3', visible: true, size: 2, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
    }
  }
},

// ── QUESTION 2d ──
{
  "id": "y11a-3g-q2d",
  "type": "teacher_review",
  "difficulty": "easy",
  "timeLimit": 60,
  "t": "Powers, cubics, and circles",
  "question": "Sketch the graph of the circle \\( x^2 + y^2 = \\frac{25}{4} \\). Mark intercepts, and state domain and range.",
  "a": "Circle centered at (0,0) with radius 2.5. Domain: [-2.5, 2.5], Range: [-2.5, 2.5].",
  "solutionSteps": [
  {
    "explanation": "Identify parameters: centre \\( (0, 0) \\), radius \\( r = 2.5 \\). Intercepts at \\( \\pm 2.5 \\) on both axes. Domain: \\( [-2.5, 2.5] \\). Range: \\( [-2.5, 2.5] \\).",
    "workingOut": ""
  }],

  "graphData": {
    "jsxGraph": {
      "width": 350,
      "height": 250,
      "boundingbox": [-4, 4, 4, -4],
      "script": "board.suspendUpdate();\nboard.create('arrow', [[-3.5,0], [3.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.5], [0,3.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [3.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 3.3, 'y'], {fontSize: 14});\nboard.create('circle', [[0,0], 2.5], {strokeColor: '#4f46e5', strokeWidth: 2, fillColor: 'none'});\nboard.create('point', [2.5,0], {name: '5/2', visible: true, size: 2, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [-2.5,0], {name: '-5/2', visible: true, size: 2, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
    }
  }
},

// ── QUESTION 3 ──
{
  "id": "y11a-3g-q3",
  "type": "teacher_review",
  "difficulty": "easy",
  "timeLimit": 60,
  "t": "Powers, cubics, and circles",
  "question": "Consider the curve with equation \\( y = 2x^3 \\).",
  "subQuestions": [
  {
    "id": "y11a-3g-q3a",
    "type": "short_answer",
    "question": "a) Complete the table of values below for \\( y = 2x^3 \\).\n\n\\( x = -1.5, -1, -0.5, 0, 0.5, 1, 1.5 \\)\n\n(Format your answer as: 'y = a, b, c, d, e, f, g' in order of x)",
    "a": "y = -6.75, -2, -0.25, 0, 0.25, 2, 6.75"
  },
  {
    "id": "y11a-3g-q3b",
    "type": "teacher_review",
    "question": "b) Sketch the curve.",
    "a": "Cubic curve starting in quadrant 3 (increasing rapidly), passing through (-1.5, -6.75), (-1, -2), (-0.5, -0.25), inflection point at (0, 0), and then rising through (0.5, 0.25), (1, 2), (1.5, 6.75) into quadrant 1."
  }],

  "solutionSteps": [
  {
    "explanation": "Evaluate the function at each x-value.",
    "workingOut": "f(-1.5) = 2(-1.5)^3 = 2(-3.375) = -6.75\nf(-1) = 2(-1)^3 = -2\nf(-0.5) = 2(-0.5)^3 = 2(-0.125) = -0.25\nf(0) = 0\nf(0.5) = 0.25\nf(1) = 2\nf(1.5) = 6.75"
  }],

  "graphData": {
    "jsxGraph": {
      "width": 350,
      "height": 250,
      "boundingbox": [-2.5, 9, 2.5, -9],
      "script": "board.suspendUpdate();\nboard.create('arrow', [[-2.2,0], [2.2,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-8], [0,8]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [2.0, -0.5, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 7.5, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return 2*x*x*x; }, -1.8, 1.8], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('point', [0,0], {name: '(0,0)', visible: true, size: 2, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [1,2], {name: '(1,2)', visible: true, size: 2, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [-1,-2], {name: '(-1,-2)', visible: true, size: 2, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
    }
  }
},

// ── QUESTION 4 ──
{
  "id": "y11a-3g-q4",
  "type": "teacher_review",
  "difficulty": "easy",
  "timeLimit": 60,
  "t": "Powers, cubics, and circles",
  "question": "Consider the curve with equation \\( y = 0.5x^4 \\).",
  "subQuestions": [
  {
    "id": "y11a-3g-q4a",
    "type": "short_answer",
    "question": "a) Complete the table of values below for \\( y = 0.5x^4 \\).\n\n\\( x = -1.5, -1, -0.5, 0, 0.5, 1, 1.5 \\)\n\n(Format your answer as: 'y = a, b, c, d, e, f, g')",
    "a": "y = 2.53, 0.5, 0.03, 0, 0.03, 0.5, 2.53"
  },
  {
    "id": "y11a-3g-q4b",
    "type": "teacher_review",
    "question": "b) Sketch the curve.",
    "a": "A symmetric, flat-bottomed U-shaped curve (quartics open upwards like a parabola but flatter near the origin) with vertex (0,0)."
  }],

  "solutionSteps": [
  {
    "explanation": "Evaluate the function and round to 2 decimal places.",
    "workingOut": "f(\\pm 1.5) = 0.5(1.5)^4 = 0.5(5.0625) \\approx 2.53\nf(\\pm 1) = 0.5(1) = 0.5\nf(\\pm 0.5) = 0.5(0.0625) \\approx 0.03\nf(0) = 0"
  }],

  "graphData": {
    "jsxGraph": {
      "width": 350,
      "height": 250,
      "boundingbox": [-2.5, 4, 2.5, -1],
      "script": "board.suspendUpdate();\nboard.create('arrow', [[-2.2,0], [2.2,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-0.5], [0,3.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [2.0, -0.3, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 3.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return 0.5*Math.pow(x, 4); }, -1.8, 1.8], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('point', [0,0], {name: '(0,0)', visible: true, size: 2, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [1,0.5], {name: '(1,0.5)', visible: true, size: 2, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [-1,0.5], {name: '(-1,0.5)', visible: true, size: 2, strokeColor: '#4f46e5', label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
    }
  }
},

// ── QUESTION 5 ──
{
  "id": "y11a-3g-q5",
  "type": "teacher_review",
  "difficulty": "easy",
  "timeLimit": 60,
  "t": "Powers, cubics, and circles",
  "question": "Use a graphing system to compare \\( y = 0.5x \\), \\( y = 0.5x^3 \\), and \\( y = 0.5x^5 \\) on a single set of axes.",
  "subQuestions": [
  {
    "id": "y11a-3g-q5a",
    "type": "short_answer",
    "question": "a) Which three points do all three graphs pass through? (Format: '(x1, y1), (x2, y2), (x3, y3)' in ascending x order)",
    "a": "(-1, -0.5), (0, 0), (1, 0.5)"
  },
  {
    "id": "y11a-3g-q5b",
    "type": "multiple_choice",
    "question": "b) For \\( 0 < x < 1 \\), which curve is nearest the \\( x \\)-axis?",
    "opts": [
    "\\( y = 0.5x \\)",
    "\\( y = 0.5x^3 \\)",
    "\\( y = 0.5x^5 \\)",
    "They are all at the same distance"],

    "a": "0"
  },
  {
    "id": "y11a-3g-q5c",
    "type": "multiple_choice",
    "question": "c) For \\( x > 1 \\), which curve is nearest the \\( x \\)-axis?",
    "opts": [
    "\\( y = 0.5x \\)",
    "\\( y = 0.5x^3 \\)",
    "\\( y = 0.5x^5 \\)",
    "They are all at the same distance"],

    "a": "0"
  },
  {
    "id": "y11a-3g-q5d",
    "type": "multiple_choice",
    "question": "d) For \\( -1 < x < 0 \\), which curve is nearest the \\( x \\)-axis?",
    "opts": [
    "\\( y = 0.5x \\)",
    "\\( y = 0.5x^3 \\)",
    "\\( y = 0.5x^5 \\)",
    "They are all at the same distance"],

    "a": "0"
  },
  {
    "id": "y11a-3g-q5e",
    "type": "multiple_choice",
    "question": "e) For \\( x < -1 \\), which curve is nearest the \\( x \\)-axis?",
    "opts": [
    "\\( y = 0.5x \\)",
    "\\( y = 0.5x^3 \\)",
    "\\( y = 0.5x^5 \\)",
    "They are all at the same distance"],

    "a": "0"
  },
  {
    "id": "y11a-3g-q5f",
    "type": "teacher_review",
    "question": "f) Describe what happens when each curve is rotated by \\( 180^\\circ \\) about the origin.",
    "a": "Each curve maps exactly onto itself under a 180-degree rotation. This occurs because the index (power of x) is odd, making these functions odd functions, symmetric about the origin: \\( f(-x) = -f(x) \\)."
  }],

  "solutionSteps": [
  {
    "explanation": "Common points: Since \\( 1^p = 1 \\), \\( (-1)^p = -1 \\) (for odd \\( p \\)), and \\( 0^p = 0 \\), all functions evaluate to \\( \\pm 0.5 \\) at \\( x = \\pm 1 \\) and \\( 0 \\) at \\( x=0 \\).",
    "workingOut": ""
  },
  {
    "explanation": "Power comparisons: For \\( 0 < x < 1 \\), increasing the power reduces the value (e.g. \\( x^5 < x^3 < x \\)), so \\( 0.5x^5 \\) is closest to \\( y=0 \\). For \\( x > 1 \\), higher powers are larger, so \\( 0.5x \\) is closest to the axis.",
    "workingOut": ""
  }],

  "graphData": {
    "jsxGraph": {
      "width": 350,
      "height": 250,
      "boundingbox": [-2.2, 2.2, 2.2, -2.2],
      "script": "board.suspendUpdate();\nboard.create('arrow', [[-2,0], [2,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-2], [0,2]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [1.8, -0.3, 'x'], {fontSize: 14});\nboard.create('text', [-0.3, 1.8, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return 0.5*x; }, -2, 2], {strokeColor: '#3b82f6', strokeWidth: 1.5, name: 'y=0.5x', withLabel: true});\nboard.create('functiongraph', [function(x){ return 0.5*x*x*x; }, -1.6, 1.6], {strokeColor: '#10b981', strokeWidth: 1.5, name: 'y=0.5x³', withLabel: true});\nboard.create('functiongraph', [function(x){ return 0.5*Math.pow(x,5); }, -1.4, 1.4], {strokeColor: '#ef4444', strokeWidth: 1.5, name: 'y=0.5x⁵', withLabel: true});\nboard.create('point', [1, 0.5], {name: '(1, 0.5)', visible: true, size: 2, label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [-1, -0.5], {name: '(-1, -0.5)', visible: true, size: 2, label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
    }
  }
},

// ── QUESTION 6 ──
{
  "id": "y11a-3g-q6",
  "type": "teacher_review",
  "difficulty": "easy",
  "timeLimit": 60,
  "t": "Powers, cubics, and circles",
  "question": "Use a graphing system to compare \\( y = 2x^2 \\), \\( y = 2x^4 \\), and \\( y = 2x^6 \\) on a single set of axes.",
  "subQuestions": [
  {
    "id": "y11a-3g-q6a",
    "type": "short_answer",
    "question": "a) Which three points do all three graphs pass through? (Format: '(x1, y1), (x2, y2), (x3, y3)' in ascending x order)",
    "a": "(-1, 2), (0, 0), (1, 2)"
  },
  {
    "id": "y11a-3g-q6b",
    "type": "multiple_choice",
    "question": "b) For \\( 0 < x < 1 \\), which curve is nearest the \\( x \\)-axis?",
    "opts": [
    "\\( y = 2x^2 \\)",
    "\\( y = 2x^4 \\)",
    "\\( y = 2x^6 \\)",
    "They are all at the same distance"],

    "a": "2"
  },
  {
    "id": "y11a-3g-q6c",
    "type": "multiple_choice",
    "question": "c) For \\( x > 1 \\), which curve is nearest the \\( x \\)-axis?",
    "opts": [
    "\\( y = 2x^2 \\)",
    "\\( y = 2x^4 \\)",
    "\\( y = 2x^6 \\)",
    "They are all at the same distance"],

    "a": "0"
  },
  {
    "id": "y11a-3g-q6d",
    "type": "multiple_choice",
    "question": "d) For \\( -1 < x < 0 \\), which curve is nearest the \\( x \\)-axis?",
    "opts": [
    "\\( y = 2x^2 \\)",
    "\\( y = 2x^4 \\)",
    "\\( y = 2x^6 \\)",
    "They are all at the same distance"],

    "a": "2"
  },
  {
    "id": "y11a-3g-q6e",
    "type": "multiple_choice",
    "question": "e) For \\( x < -1 \\), which curve is nearest the \\( x \\)-axis?",
    "opts": [
    "\\( y = 2x^2 \\)",
    "\\( y = 2x^4 \\)",
    "\\( y = 2x^6 \\)",
    "They are all at the same distance"],

    "a": "0"
  },
  {
    "id": "y11a-3g-q6f",
    "type": "teacher_review",
    "question": "f) Describe what happens when each curve is reflected in the \\( y \\)-axis.",
    "a": "Each curve is symmetric in the y-axis, meaning it is unchanged by reflection. This is because the index is even, making these functions even functions: \\( f(-x) = f(x) \\)."
  }],

  "solutionSteps": [
  {
    "explanation": "Common points: Since \\( 1^p = 1 \\) and \\( (-1)^p = 1 \\) for even \\( p \\), and \\( 0^p = 0 \\), all curves evaluate to \\( 2 \\) at \\( x = \\pm 1 \\) and \\( 0 \\) at \\( x=0 \\).",
    "workingOut": ""
  }],

  "graphData": {
    "jsxGraph": {
      "width": 350,
      "height": 250,
      "boundingbox": [-2.2, 4.5, 2.2, -0.5],
      "script": "board.suspendUpdate();\nboard.create('arrow', [[-2,0], [2,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-0.2], [0,4]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [1.8, -0.3, 'x'], {fontSize: 14});\nboard.create('text', [-0.3, 3.8, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return 2*x*x; }, -1.5, 1.5], {strokeColor: '#3b82f6', strokeWidth: 1.5});\nboard.create('functiongraph', [function(x){ return 2*Math.pow(x,4); }, -1.3, 1.3], {strokeColor: '#10b981', strokeWidth: 1.5});\nboard.create('functiongraph', [function(x){ return 2*Math.pow(x,6); }, -1.2, 1.2], {strokeColor: '#ef4444', strokeWidth: 1.5});\nboard.create('point', [1, 2], {name: '(1, 2)', visible: true, size: 2, label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [-1, 2], {name: '(-1, 2)', visible: true, size: 2, label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
    }
  }
},

// ── QUESTION 7 ──
{
  "id": "y11a-3g-q7",
  "type": "teacher_review",
  "difficulty": "easy",
  "timeLimit": 60,
  "t": "Powers, cubics, and circles",
  "question": "Consider the curve with equation \\( y = 2\\sqrt{x} \\).",
  "subQuestions": [
  {
    "id": "y11a-3g-q7a",
    "type": "short_answer",
    "question": "a) Complete the table of values for \\( y = 2\\sqrt{x} \\) at \\( x = 0, 0.25, 1, 2.25, 4, 6.25 \\).\n\n(Format: 'y = a, b, c, d, e, f')",
    "a": "y = 0, 1, 2, 3, 4, 5"
  },
  {
    "id": "y11a-3g-q7b",
    "type": "teacher_review",
    "question": "b) Sketch the curve.",
    "a": "Curve starts at the origin (0,0) and rises to the right, passing through (0.25, 1), (1, 2), (2.25, 3), (4, 4), and (6.25, 5). The rate of increase decreases as x increases (concave down)."
  }],

  "solutionSteps": [
  {
    "explanation": "Find values of \\( 2\\sqrt{x} \\) for each x.",
    "workingOut": "f(0) = 2(0) = 0\nf(0.25) = 2(0.5) = 1\nf(1) = 2(1) = 2\nf(2.25) = 2(1.5) = 3\nf(4) = 2(2) = 4\nf(6.25) = 2(2.5) = 5"
  }],

  "graphData": {
    "jsxGraph": {
      "width": 350,
      "height": 250,
      "boundingbox": [-1, 6, 7, -1],
      "script": "board.suspendUpdate();\nboard.create('arrow', [[-0.5,0], [6.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-0.5], [0,5.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [6.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 5.2, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return 2*Math.sqrt(x); }, 0, 6.5], {strokeColor: '#4f46e5', strokeWidth: 2, firstArrow: false});\nboard.create('point', [0,0], {name: '(0,0)', visible: true, size: 2, label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [1,2], {name: '(1,2)', visible: true, size: 2, label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [4,4], {name: '(4,4)', visible: true, size: 2, label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
    }
  }
},

// ── QUESTION 8a ──
{
  "id": "y11a-3g-q8a",
  "type": "teacher_review",
  "difficulty": "easy",
  "timeLimit": 60,
  "t": "Powers, cubics, and circles",
  "question": "For the cubic function \\( y = (x-2)(x-4)(x-6) \\), write down its zeroes, analyze its sign in each interval, and sketch the curve, showing the \\( y \\)-intercept.",
  "a": "Zeroes are 2, 4, 6. y-intercept is (0, -48). Curve starts from bottom-left, goes up through x=2, peaks, goes down through x=4, bottoms out, and goes up through x=6.",
  "solutionSteps": [
  {
    "explanation": "Find zeroes: Set \\( y = 0 \\implies x = 2, 4, 6 \\).",
    "workingOut": ""
  },
  {
    "explanation": "Find y-intercept: Set \\( x = 0 \\implies y = (-2)(-4)(-6) = -48 \\).",
    "workingOut": ""
  },
  {
    "explanation": "Interval signs: For \\( x < 2 \\), \\( y < 0 \\); for \\( 2 < x < 4 \\), \\( y > 0 \\); for \\( 4 < x < 6 \\), \\( y < 0 \\); for \\( x > 6 \\), \\( y > 0 \\).",
    "workingOut": ""
  }],

  "graphData": {
    "jsxGraph": {
      "width": 350,
      "height": 250,
      "boundingbox": [-1, 20, 8, -60],
      "script": "board.suspendUpdate();\nboard.create('arrow', [[-0.5,0], [7.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-55], [0,15]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [7.3, -2, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 12, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return (x-2)*(x-4)*(x-6); }, 0.5, 7], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('point', [2,0], {name: '2', visible: true, size: 2, label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [4,0], {name: '4', visible: true, size: 2, label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [6,0], {name: '6', visible: true, size: 2, label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [0,-48], {name: '-48', visible: true, size: 2, label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
    }
  }
},

// ── QUESTION 8b ──
{
  "id": "y11a-3g-q8b",
  "type": "teacher_review",
  "difficulty": "easy",
  "timeLimit": 60,
  "t": "Powers, cubics, and circles",
  "question": "For the cubic function \\( y = -2(x+3)x(x-3) \\), find the zeroes and sketch the curve.",
  "a": "Zeroes: -3, 0, 3. y-intercept: (0,0). Reflects standard cubic behavior with negative leading coefficient.",
  "solutionSteps": [
  {
    "explanation": "Find zeroes: \\( x = -3, 0, 3 \\).",
    "workingOut": ""
  },
  {
    "explanation": "Since leading coefficient is negative, as \\( x \\to \\infty \\), \\( y \\to -\\infty \\). Curve starts in upper-left quadrant and ends in bottom-right.",
    "workingOut": ""
  }],

  "graphData": {
    "jsxGraph": {
      "width": 350,
      "height": 250,
      "boundingbox": [-5, 25, 5, -25],
      "script": "board.suspendUpdate();\nboard.create('arrow', [[-4.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-22], [0,22]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [4.3, -2, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 20, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return -2*(x+3)*x*(x-3); }, -3.8, 3.8], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('point', [-3,0], {name: '-3', visible: true, size: 2, label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [0,0], {name: 'O', visible: true, size: 2, label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [3,0], {name: '3', visible: true, size: 2, label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
    }
  }
},

// ── QUESTION 8c ──
{
  "id": "y11a-3g-q8c",
  "type": "teacher_review",
  "difficulty": "easy",
  "timeLimit": 60,
  "t": "Powers, cubics, and circles",
  "question": "For the cubic function \\( y = 3x^2(4-x) \\), find its zeroes and sketch the curve.",
  "a": "Zeroes: 0 (double root / turning point), 4 (single root). Curves starts from bottom-left, turns at (0,0), peaks in positive y-domain, and drops through (4,0).",
  "solutionSteps": [
  {
    "explanation": "Zeroes are at \\( x=0 \\) (multiplicity 2) and \\( x=4 \\) (multiplicity 1). The graph touches the x-axis and turns at \\( x=0 \\), and crosses the axis at \\( x=4 \\).",
    "workingOut": ""
  }],

  "graphData": {
    "jsxGraph": {
      "width": 350,
      "height": 250,
      "boundingbox": [-2, 35, 6, -10],
      "script": "board.suspendUpdate();\nboard.create('arrow', [[-1.5,0], [5.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-8], [0,32]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [5.3, -2, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 30, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return 3*x*x*(4-x); }, -1.2, 4.5], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('point', [0,0], {name: '0', visible: true, size: 2, label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [4,0], {name: '4', visible: true, size: 2, label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
    }
  }
},

// ── QUESTION 9a ──
{
  "id": "y11a-3g-q9a",
  "type": "short_answer",
  "difficulty": "medium",
  "timeLimit": 90,
  "t": "Powers, cubics, and circles",
  "question": "Write down the equation of the circle centered at the origin with radius 3.",
  "a": "x^2 + y^2 = 9",
  "solutionSteps": [
  {
    "explanation": "Use standard equation of a circle centered at the origin: \\( x^2 + y^2 = r^2 \\).",
    "workingOut": "r = 3 \\implies r^2 = 9 \\implies x^2 + y^2 = 9"
  }]

},

// ── QUESTION 9b ──
{
  "id": "y11a-3g-q9b",
  "type": "short_answer",
  "difficulty": "medium",
  "timeLimit": 90,
  "t": "Powers, cubics, and circles",
  "question": "Write down the equation of the circle centered at the origin with radius \\( \\sqrt{7} \\).",
  "a": "x^2 + y^2 = 7",
  "solutionSteps": [
  {
    "explanation": "Use \\( x^2 + y^2 = r^2 \\) with \\( r = \\sqrt{7} \\).",
    "workingOut": "r^2 = (\\sqrt{7})^2 = 7 \\implies x^2 + y^2 = 7"
  }]

},

// ── QUESTION 9c ──
{
  "id": "y11a-3g-q9c",
  "type": "short_answer",
  "difficulty": "medium",
  "timeLimit": 90,
  "t": "Powers, cubics, and circles",
  "question": "Write down the equation of the circle centered at the origin that passes through the point \\( (5, 12) \\).",
  "a": "x^2 + y^2 = 169",
  "solutionSteps": [
  {
    "explanation": "Calculate the radius squared by substituting the coordinates of the given point into \\( x^2 + y^2 = r^2 \\).",
    "workingOut": "r^2 = 5^2 + 12^2 = 25 + 144 = 169 \\implies x^2 + y^2 = 169"
  }]

},

// ── QUESTION 9d ──
{
  "id": "y11a-3g-q9d",
  "type": "short_answer",
  "difficulty": "medium",
  "timeLimit": 90,
  "t": "Powers, cubics, and circles",
  "question": "Write down the equation of the circle centered at the origin that passes through the point \\( (2, -4) \\).",
  "a": "x^2 + y^2 = 20",
  "solutionSteps": [
  {
    "explanation": "Calculate the radius squared.",
    "workingOut": "r^2 = 2^2 + (-4)^2 = 4 + 16 = 20 \\implies x^2 + y^2 = 20"
  }]

},

// ── QUESTION 10 ──
{
  "id": "y11a-3g-q10",
  "type": "teacher_review",
  "difficulty": "medium",
  "timeLimit": 90,
  "t": "Powers, cubics, and circles",
  "question": "Consider the circle with equation \\( x^2 + y^2 = 100 \\).",
  "subQuestions": [
  {
    "id": "y11a-3g-q10a",
    "type": "short_answer",
    "question": "a) Complete the table of values below for \\( y \\ge 0 \\) and \\( y \\le 0 \\) for \\( x = 0, 2, 4, 6, 8, 10 \\). Give answers to 1 decimal place.\n\n(Format: 'y >= 0: a, b, c, d, e, f; y <= 0: g, h, i, j, k, l')",
    "a": "y >= 0: 10, 9.8, 9.2, 8, 6, 0; y <= 0: -10, -9.8, -9.2, -8, -6, 0"
  },
  {
    "id": "y11a-3g-q10b",
    "type": "teacher_review",
    "question": "b) Sketch the circle using your points.",
    "a": "Circle centered at the origin with radius 10, passing through (0,10), (6,8), (8,6), (10,0), and their reflected quadrants."
  }],

  "solutionSteps": [
  {
    "explanation": "For each x, solve \\( y = \\pm \\sqrt{100 - x^2} \\).",
    "workingOut": "x=0 \\implies y=\\pm 10\nx=2 \\implies y=\\pm \\sqrt{96} \\approx \\pm 9.8\nx=4 \\implies y=\\pm \\sqrt{84} \\approx \\pm 9.2\nx=6 \\implies y=\\pm 8\nx=8 \\implies y=\\pm 6\nx=10 \\implies y=0"
  }],

  "graphData": {
    "jsxGraph": {
      "width": 350,
      "height": 250,
      "boundingbox": [-12, 12, 12, -12],
      "script": "board.suspendUpdate();\nboard.create('arrow', [[-11,0], [11,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-11], [0,11]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('circle', [[0,0], 10], {strokeColor: '#4f46e5', strokeWidth: 1.5, fillColor: 'none'});\nboard.create('point', [0, 10], {name: '10', size: 2, label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [10, 0], {name: '10', size: 2, label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
    }
  }
},

// ── QUESTION 11a ──
{
  "id": "y11a-3g-q11a",
  "type": "teacher_review",
  "difficulty": "medium",
  "timeLimit": 90,
  "t": "Powers, cubics, and circles",
  "question": "Sketch the semicircle \\( y = \\sqrt{9 - x^2} \\) and state its domain and range.",
  "a": "Top half of circle with radius 3. Domain: [-3, 3], Range: [0, 3].",
  "solutionSteps": [
  {
    "explanation": "Since \\( y = \\sqrt{9 - x^2} \\ge 0 \\), this represents the top half of the circle \\( x^2 + y^2 = 9 \\). The radius is \\( 3 \\).",
    "workingOut": ""
  },
  {
    "explanation": "Domain: \\( [-3, 3] \\). Range: \\( [0, 3] \\).",
    "workingOut": ""
  }],

  "graphData": {
    "jsxGraph": {
      "width": 350,
      "height": 250,
      "boundingbox": [-4, 4.5, 4, -1],
      "script": "board.suspendUpdate();\nboard.create('arrow', [[-3.5,0], [3.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-0.5], [0,4]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [3.3, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 3.8, 'y'], {fontSize: 14});\nboard.create('functiongraph', [function(x){ return Math.sqrt(9 - x*x); }, -3, 3], {strokeColor: '#4f46e5', strokeWidth: 2, firstArrow: false, lastArrow: false});\nboard.create('point', [3,0], {name: '3', visible: true, size: 2, label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [-3,0], {name: '-3', visible: true, size: 2, label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [0,3], {name: '3', visible: true, size: 2, label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
    }
  }
},

// ── QUESTION 11b ──
{
  "id": "y11a-3g-q11b",
  "type": "teacher_review",
  "difficulty": "medium",
  "timeLimit": 90,
  "t": "Powers, cubics, and circles",
  "question": "Sketch the semicircle \\( y = -\\sqrt{16 - x^2} \\) and state its domain and range.",
  "a": "Bottom half of circle with radius 4. Domain: [-4, 4], Range: [-4, 0].",
  "solutionSteps": [
  {
    "explanation": "Since \\( y = -\\sqrt{16 - x^2} \\le 0 \\), this is the bottom half of the circle \\( x^2 + y^2 = 16 \\) with radius \\( 4 \\).",
    "workingOut": ""
  },
  {
    "explanation": "Domain: \\( [-4, 4] \\). Range: \\( [-4, 0] \\).",
    "workingOut": ""
  }],

  "graphData": {
    "jsxGraph": {
      "width": 350,
      "height": 250,
      "boundingbox": [-5, 1, 5, -5],
      "script": "board.suspendUpdate();\nboard.create('arrow', [[-4.5,0], [4.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-4.5], [0,0.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('functiongraph', [function(x){ return -Math.sqrt(16 - x*x); }, -4, 4], {strokeColor: '#4f46e5', strokeWidth: 2, firstArrow: false, lastArrow: false});\nboard.create('point', [4,0], {name: '4', visible: true, size: 2, label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [-4,0], {name: '-4', visible: true, size: 2, label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [0,-4], {name: '-4', visible: true, size: 2, label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
    }
  }
},

// ── QUESTION 11c ──
{
  "id": "y11a-3g-q11c",
  "type": "teacher_review",
  "difficulty": "medium",
  "timeLimit": 90,
  "t": "Powers, cubics, and circles",
  "question": "Sketch the semicircle \\( y = -\\sqrt{4 - x^2} \\) and state its domain and range.",
  "a": "Bottom half of circle with radius 2. Domain: [-2, 2], Range: [-2, 0].",
  "solutionSteps": [
  {
    "explanation": "This represents the bottom half of the circle with radius \\( 2 \\). Domain is \\( [-2, 2] \\), range is \\( [-2, 0] \\).",
    "workingOut": ""
  }],

  "graphData": {
    "jsxGraph": {
      "width": 350,
      "height": 250,
      "boundingbox": [-3, 1, 3, -3],
      "script": "board.suspendUpdate();\nboard.create('arrow', [[-2.5,0], [2.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-2.5], [0,0.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('functiongraph', [function(x){ return -Math.sqrt(4 - x*x); }, -2, 2], {strokeColor: '#4f46e5', strokeWidth: 2, firstArrow: false, lastArrow: false});\nboard.create('point', [2,0], {name: '2', visible: true, size: 2, label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [-2,0], {name: '-2', visible: true, size: 2, label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [0,-2], {name: '-2', visible: true, size: 2, label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
    }
  }
},

// ── QUESTION 11d ──
{
  "id": "y11a-3g-q11d",
  "type": "teacher_review",
  "difficulty": "medium",
  "timeLimit": 90,
  "t": "Powers, cubics, and circles",
  "question": "Sketch the semicircle \\( y = \\sqrt{\\frac{49}{4} - x^2} \\) and state its domain and range.",
  "a": "Top half of circle with radius 3.5. Domain: [-3.5, 3.5], Range: [0, 3.5].",
  "solutionSteps": [
  {
    "explanation": "This represents the top half of the circle with radius \\( r = \\sqrt{12.25} = 3.5 \\). Domain is \\( [-3.5, 3.5] \\), range is \\( [0, 3.5] \\).",
    "workingOut": ""
  }],

  "graphData": {
    "jsxGraph": {
      "width": 350,
      "height": 250,
      "boundingbox": [-4.5, 4.5, 4.5, -1],
      "script": "board.suspendUpdate();\nboard.create('arrow', [[-4,0], [4,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-0.5], [0,4]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('functiongraph', [function(x){ return Math.sqrt(12.25 - x*x); }, -3.5, 3.5], {strokeColor: '#4f46e5', strokeWidth: 2, firstArrow: false, lastArrow: false});\nboard.create('point', [3.5,0], {name: '3.5', visible: true, size: 2, label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [-3.5,0], {name: '-3.5', visible: true, size: 2, label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [0,3.5], {name: '3.5', visible: true, size: 2, label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
    }
  }
},

// ── QUESTION 12a ──
{
  "id": "y11a-3g-q12a",
  "type": "teacher_review",
  "difficulty": "medium",
  "timeLimit": 90,
  "t": "Powers, cubics, and circles",
  "question": "Sketch the semicircle \\( x = \\sqrt{4 - y^2} \\) (which is not a function) and state its domain and range.",
  "a": "Right half of circle with radius 2. Domain: [0, 2], Range: [-2, 2].",
  "solutionSteps": [
  {
    "explanation": "Since \\( x \\ge 0 \\), this represents the right half of the circle \\( x^2 + y^2 = 4 \\) with radius \\( 2 \\). It is not a function because it fails the vertical line test.",
    "workingOut": ""
  },
  {
    "explanation": "Domain: \\( [0, 2] \\). Range: \\( [-2, 2] \\).",
    "workingOut": ""
  }],

  "graphData": {
    "jsxGraph": {
      "width": 350,
      "height": 250,
      "boundingbox": [-1, 3, 3.5, -3],
      "script": "board.suspendUpdate();\nboard.create('arrow', [[-0.5,0], [3,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-2.5], [0,2.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [2.8, -0.4, 'x'], {fontSize: 14});\nboard.create('text', [-0.4, 2.3, 'y'], {fontSize: 14});\nboard.create('curve', [function(t){ return Math.sqrt(4 - t*t); }, function(t){ return t; }, -2, 2], {strokeColor: '#4f46e5', strokeWidth: 2, firstArrow: false, lastArrow: false});\nboard.create('point', [2,0], {name: '2', visible: true, size: 2, label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [0,2], {name: '2', visible: true, size: 2, label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [0,-2], {name: '-2', visible: true, size: 2, label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
    }
  }
},

// ── QUESTION 12b ──
{
  "id": "y11a-3g-q12b",
  "type": "teacher_review",
  "difficulty": "medium",
  "timeLimit": 90,
  "t": "Powers, cubics, and circles",
  "question": "Sketch the semicircle \\( x = -\\sqrt{9 - y^2} \\) and state its domain and range.",
  "a": "Left half of circle with radius 3. Domain: [-3, 0], Range: [-3, 3].",
  "solutionSteps": [
  {
    "explanation": "Since \\( x = -\\sqrt{9 - y^2} \\le 0 \\), this is the left half of the circle with radius \\( 3 \\). Domain: \\( [-3, 0] \\), Range: \\( [-3, 3] \\).",
    "workingOut": ""
  }],

  "graphData": {
    "jsxGraph": {
      "width": 350,
      "height": 250,
      "boundingbox": [-4, 4, 1.5, -4],
      "script": "board.suspendUpdate();\nboard.create('arrow', [[-3.5,0], [1,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3.5], [0,3.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('curve', [function(t){ return -Math.sqrt(9 - t*t); }, function(t){ return t; }, -3, 3], {strokeColor: '#4f46e5', strokeWidth: 2, firstArrow: false, lastArrow: false});\nboard.create('point', [-3,0], {name: '-3', visible: true, size: 2, label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [0,3], {name: '3', visible: true, size: 2, label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [0,-3], {name: '-3', visible: true, size: 2, label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
    }
  }
},

// ── QUESTION 12c ──
{
  "id": "y11a-3g-q12c",
  "type": "teacher_review",
  "difficulty": "medium",
  "timeLimit": 90,
  "t": "Powers, cubics, and circles",
  "question": "Sketch the semicircle \\( x = -\\sqrt{16 - y^2} \\) and state its domain and range.",
  "a": "Left half of circle with radius 4. Domain: [-4, 0], Range: [-4, 4].",
  "solutionSteps": [
  {
    "explanation": "Left half of the circle with radius \\( 4 \\). Domain: \\( [-4, 0] \\), Range: \\( [-4, 4] \\).",
    "workingOut": ""
  }],

  "graphData": {
    "jsxGraph": {
      "width": 350,
      "height": 250,
      "boundingbox": [-5, 5, 1.5, -5],
      "script": "board.suspendUpdate();\nboard.create('arrow', [[-4.5,0], [1,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-4.5], [0,4.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('curve', [function(t){ return -Math.sqrt(16 - t*t); }, function(t){ return t; }, -4, 4], {strokeColor: '#4f46e5', strokeWidth: 2, firstArrow: false, lastArrow: false});\nboard.create('point', [-4,0], {name: '-4', visible: true, size: 2, label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [0,4], {name: '4', visible: true, size: 2, label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [0,-4], {name: '-4', visible: true, size: 2, label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
    }
  }
},

// ── QUESTION 12d ──
{
  "id": "y11a-3g-q12d",
  "type": "teacher_review",
  "difficulty": "medium",
  "timeLimit": 90,
  "t": "Powers, cubics, and circles",
  "question": "Sketch the semicircle \\( x = \\sqrt{\\frac{25}{4} - y^2} \\) and state its domain and range.",
  "a": "Right half of circle with radius 2.5. Domain: [0, 2.5], Range: [-2.5, 2.5].",
  "solutionSteps": [
  {
    "explanation": "Right half of the circle with radius \\( r = 2.5 \\). Domain: \\( [0, 2.5] \\), Range: \\( [-2.5, 2.5] \\).",
    "workingOut": ""
  }],

  "graphData": {
    "jsxGraph": {
      "width": 350,
      "height": 250,
      "boundingbox": [-1, 3.5, 3.5, -3.5],
      "script": "board.suspendUpdate();\nboard.create('arrow', [[-0.5,0], [3,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-3], [0,3]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('curve', [function(t){ return Math.sqrt(6.25 - t*t); }, function(t){ return t; }, -2.5, 2.5], {strokeColor: '#4f46e5', strokeWidth: 2, firstArrow: false, lastArrow: false});\nboard.create('point', [2.5,0], {name: '2.5', visible: true, size: 2, label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
    }
  }
},

// ── QUESTION 13a ──
{
  "id": "y11a-3g-q13a",
  "type": "short_answer",
  "difficulty": "medium",
  "timeLimit": 90,
  "t": "Powers, cubics, and circles",
  "question": "Find the equation of the semicircle: top half of circle centered at origin with radius 4.",
  "a": "y = \\sqrt{16 - x^2}",
  "solutionSteps": [
  {
    "explanation": "The circle equation is \\( x^2 + y^2 = 16 \\). Solving for y gives \\( y = \\pm \\sqrt{16 - x^2} \\). Since it is the top half, \\( y \\ge 0 \\), so \\( y = \\sqrt{16 - x^2} \\).",
    "workingOut": ""
  }]

},

// ── QUESTION 13b ──
{
  "id": "y11a-3g-q13b",
  "type": "short_answer",
  "difficulty": "medium",
  "timeLimit": 90,
  "t": "Powers, cubics, and circles",
  "question": "Find the equation of the semicircle: left half of circle centered at origin with radius 2.",
  "a": "x = -\\sqrt{4 - y^2}",
  "solutionSteps": [
  {
    "explanation": "Solving \\( x^2 + y^2 = 4 \\) for x gives \\( x = \\pm \\sqrt{4 - y^2} \\). The left half has negative x-values, so \\( x = -\\sqrt{4 - y^2} \\).",
    "workingOut": ""
  }]

},

// ── QUESTION 13c ──
{
  "id": "y11a-3g-q13c",
  "type": "short_answer",
  "difficulty": "medium",
  "timeLimit": 90,
  "t": "Powers, cubics, and circles",
  "question": "Find the equation of the semicircle: right half of circle centered at origin with radius \\( \\sqrt{5} \\).",
  "a": "x = \\sqrt{5 - y^2}",
  "solutionSteps": [
  {
    "explanation": "For the right half of the circle \\( x^2 + y^2 = 5 \\), we have \\( x \\ge 0 \\), so \\( x = \\sqrt{5 - y^2} \\).",
    "workingOut": ""
  }]

},

// ── QUESTION 13d ──
{
  "id": "y11a-3g-q13d",
  "type": "short_answer",
  "difficulty": "medium",
  "timeLimit": 90,
  "t": "Powers, cubics, and circles",
  "question": "Find the equation of the top-half semicircle centered at the origin passing through the point \\( (-6, 8) \\).",
  "a": "y = \\sqrt{100 - x^2}",
  "solutionSteps": [
  {
    "explanation": "Find radius squared using the point: \\( r^2 = (-6)^2 + 8^2 = 100 \\). The top half semicircle equation is \\( y = \\sqrt{r^2 - x^2} \\).",
    "workingOut": "y = \\sqrt{100 - x^2}"
  }]

},

// ── QUESTION 13e ──
{
  "id": "y11a-3g-q13e",
  "type": "short_answer",
  "difficulty": "medium",
  "timeLimit": 90,
  "t": "Powers, cubics, and circles",
  "question": "Find the equation of the bottom-half semicircle centered at the origin passing through the point \\( (-2, -2) \\).",
  "a": "y = -\\sqrt{8 - x^2}",
  "solutionSteps": [
  {
    "explanation": "Calculate radius squared: \\( r^2 = (-2)^2 + (-2)^2 = 8 \\). The bottom half semicircle has equation \\( y = -\\sqrt{r^2 - x^2} \\).",
    "workingOut": "y = -\\sqrt{8 - x^2}"
  }]

},

// ── QUESTION 13f ──
{
  "id": "y11a-3g-q13f",
  "type": "short_answer",
  "difficulty": "medium",
  "timeLimit": 90,
  "t": "Powers, cubics, and circles",
  "question": "Find the equation of the right-half semicircle centered at the origin passing through the point \\( (4, -1) \\).",
  "a": "x = \\sqrt{17 - y^2}",
  "solutionSteps": [
  {
    "explanation": "Calculate radius squared: \\( r^2 = 4^2 + (-1)^2 = 17 \\). Right half is \\( x = \\sqrt{r^2 - y^2} \\).",
    "workingOut": "x = \\sqrt{17 - y^2}"
  }]

},

// ── QUESTION 14 ──
{
  "id": "y11a-3g-q14",
  "type": "teacher_review",
  "difficulty": "medium",
  "timeLimit": 90,
  "t": "Powers, cubics, and circles",
  "question": "Consider the curve with equation \\( y = -3\\sqrt{x} \\).",
  "subQuestions": [
  {
    "id": "y11a-3g-q14a",
    "type": "short_answer",
    "question": "a) Complete the table of values below for \\( y = -3\\sqrt{x} \\).\n\n\\( x = 0, 0.25, 1, 2.25, 4, 6.25 \\)\n\n(Format: 'y = a, b, c, d, e, f')",
    "a": "y = 0, -1.5, -3, -4.5, -6, -7.5"
  },
  {
    "id": "y11a-3g-q14b",
    "type": "teacher_review",
    "question": "b) Sketch the curve.",
    "a": "Curve starts at the origin (0,0) and curves downwards into quadrant 4. Points: (0.25, -1.5), (1, -3), (2.25, -4.5), (4, -6), (6.25, -7.5)."
  }],

  "solutionSteps": [
  {
    "explanation": "Evaluate \\( -3\\sqrt{x} \\) at each x-value.",
    "workingOut": "f(0) = -3(0) = 0\nf(0.25) = -3(0.5) = -1.5\nf(1) = -3(1) = -3\nf(2.25) = -3(1.5) = -4.5\nf(4) = -3(2) = -6\nf(6.25) = -3(2.5) = -7.5"
  }],

  "graphData": {
    "jsxGraph": {
      "width": 350,
      "height": 250,
      "boundingbox": [-1, 1, 7, -9],
      "script": "board.suspendUpdate();\nboard.create('arrow', [[-0.5,0], [6.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-8], [0,0.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('functiongraph', [function(x){ return -3*Math.sqrt(x); }, 0, 6.5], {strokeColor: '#4f46e5', strokeWidth: 2, firstArrow: false});\nboard.create('point', [0,0], {name: '(0,0)', visible: true, size: 2, label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [1,-3], {name: '(1,-3)', visible: true, size: 2, label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [4,-6], {name: '(4,-6)', visible: true, size: 2, label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
    }
  }
},

// ── QUESTION 15 ──
{
  "id": "y11a-3g-q15",
  "type": "teacher_review",
  "difficulty": "medium",
  "timeLimit": 90,
  "t": "Powers, cubics, and circles",
  "question": "Sketch the graphs of these three cubic functions using technology or by plotting key points:\n\n\\( \\text{(i) } y = \\frac{1}{3}x^3 + 1 \\)\n\\( \\text{(ii) } y = \\frac{1}{4}(x^3 - 6x^2 + 9x) \\)\n\\( \\text{(iii) } y = \\frac{1}{3}(x^3 - 3x^2 - 9x + 5) \\)",
  "a": "i) inflection at (0,1), ii) local max at (1, 1.125), local min at (3,0), double root at 3, iii) local max at (-1, 3.33), local min at (3, -7.33), roots at 1, 5, -2.33.",
  "solutionSteps": [
  {
    "explanation": "Evaluate key characteristics of each curve.",
    "workingOut": "\\text{(i) } y = \\frac{1}{3}x^3 + 1 \\text{ is a standard cubic curve shifted up by 1. Inflection point is at } (0, 1).\n\\text{(ii) Factored form: } y = \\frac{1}{4}x(x-3)^2. \\text{ x-intercepts at } x=0 \\text{ (crosses) and } x=3 \\text{ (touches/turning point).\n(iii) Derivative: } y' = \\frac{1}{3}(3x^2 - 6x - 9) = x^2 - 2x - 3 = (x-3)(x+1). \\text{ Turning points at } x=-1 \\text{ and } x=3."
  }],

  "graphData": {
    "jsxGraph": {
      "width": 350,
      "height": 250,
      "boundingbox": [-4, 6, 6, -9],
      "script": "board.suspendUpdate();\nboard.create('arrow', [[-3.5,0], [5.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-8], [0,5.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('functiongraph', [function(x){ return (x*x*x/3) + 1; }, -2.5, 2.5], {strokeColor: '#3b82f6', strokeWidth: 1.5});\nboard.create('functiongraph', [function(x){ return 0.25*(x*x*x - 6*x*x + 9*x); }, -1, 4.5], {strokeColor: '#10b981', strokeWidth: 1.5});\nboard.create('functiongraph', [function(x){ return (x*x*x - 3*x*x - 9*x + 5)/3; }, -2.5, 5.5], {strokeColor: '#ef4444', strokeWidth: 1.5});\nboard.unsuspendUpdate();"
    }
  }
},

// ── QUESTION 16a ──
{
  "id": "y11a-3g-q16a",
  "type": "short_answer",
  "difficulty": "hard",
  "timeLimit": 120,
  "t": "Powers, cubics, and circles",
  "question": "Find the equation of the cubic curve in the form \\( y = a(x - \\alpha)(x - \\beta)(x - \\gamma) \\) if it passes through \\( (0, 6) \\) and has zeroes at \\( -3, -1, 2 \\).",
  "a": "y = -(x + 3)(x + 1)(x - 2)",
  "solutionSteps": [
  {
    "explanation": "Substitute the roots into standard factored form: \\( y = a(x+3)(x+1)(x-2) \\).",
    "workingOut": ""
  },
  {
    "explanation": "Substitute \\( (0, 6) \\) to find the scaling factor \\( a \\).",
    "workingOut": "6 = a(0+3)(0+1)(0-2) \\implies 6 = -6a \\implies a = -1 \\implies y = -(x+3)(x+1)(x-2)"
  }],

  "graphData": {
    "jsxGraph": {
      "width": 350,
      "height": 250,
      "boundingbox": [-4.5, 12, 3.5, -8],
      "script": "board.suspendUpdate();\nboard.create('arrow', [[-4,0], [3,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-6], [0,10]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('functiongraph', [function(x){ return -(x+3)*(x+1)*(x-2); }, -3.8, 2.5], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('point', [-3,0], {name: '-3', visible: true, size: 2, label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [-1,0], {name: '-1', visible: true, size: 2, label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [2,0], {name: '2', visible: true, size: 2, label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [0,6], {name: '6', visible: true, size: 2, label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
    }
  }
},

// ── QUESTION 16b ──
{
  "id": "y11a-3g-q16b",
  "type": "short_answer",
  "difficulty": "hard",
  "timeLimit": 120,
  "t": "Powers, cubics, and circles",
  "question": "Find the equation of the cubic curve passing through \\( (0, 6) \\) with a single root at \\( x = -2 \\) and a double root (touching the x-axis) at \\( x = 3 \\).",
  "a": "y = 1/3(x + 2)(x - 3)^2",
  "solutionSteps": [
  {
    "explanation": "Since the curve has a double root at \\( 3 \\), write equation as: \\( y = a(x + 2)(x - 3)^2 \\).",
    "workingOut": ""
  },
  {
    "explanation": "Substitute \\( (0, 6) \\) to find \\( a \\).",
    "workingOut": "6 = a(2)(-3)^2 \\implies 6 = 18a \\implies a = \\frac{1}{3} \\implies y = \\frac{1}{3}(x+2)(x-3)^2"
  }],

  "graphData": {
    "jsxGraph": {
      "width": 350,
      "height": 250,
      "boundingbox": [-3.5, 12, 4.5, -4],
      "script": "board.suspendUpdate();\nboard.create('arrow', [[-3,0], [4,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-2], [0,10]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('functiongraph', [function(x){ return (x+2)*(x-3)*(x-3)/3; }, -2.8, 3.8], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('point', [-2,0], {name: '-2', visible: true, size: 2, label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [3,0], {name: '3', visible: true, size: 2, label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [0,6], {name: '6', visible: true, size: 2, label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
    }
  }
},

// ── QUESTION 16c ──
{
  "id": "y11a-3g-q16c",
  "type": "short_answer",
  "difficulty": "hard",
  "timeLimit": 120,
  "t": "Powers, cubics, and circles",
  "question": "Find the equation of the cubic curve passing through \\( (0, -9) \\) with a triple root (inflection point on the x-axis) at \\( x = 3 \\).",
  "a": "y = 1/3(x - 3)^3",
  "solutionSteps": [
  {
    "explanation": "Write the general equation for a triple root at \\( 3 \\): \\( y = a(x - 3)^3 \\).",
    "workingOut": ""
  },
  {
    "explanation": "Substitute \\( (0, -9) \\) to find \\( a \\).",
    "workingOut": "-9 = a(0 - 3)^3 \\implies -9 = -27a \\implies a = \\frac{1}{3} \\implies y = \\frac{1}{3}(x-3)^3"
  }],

  "graphData": {
    "jsxGraph": {
      "width": 350,
      "height": 250,
      "boundingbox": [-1, 5, 6, -15],
      "script": "board.suspendUpdate();\nboard.create('arrow', [[-0.5,0], [5.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-13], [0,4]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('functiongraph', [function(x){ return Math.pow(x-3,3)/3; }, 0.5, 5.2], {strokeColor: '#4f46e5', strokeWidth: 2});\nboard.create('point', [3,0], {name: '3', visible: true, size: 2, label: {autoPosition: false, offset: [0, 10]}});\nboard.create('point', [0,-9], {name: '-9', visible: true, size: 2, label: {autoPosition: false, offset: [0, 10]}});\nboard.unsuspendUpdate();"
    }
  }
},

// ── QUESTION 17 ──
{
  "id": "y11a-3g-q17",
  "type": "teacher_review",
  "difficulty": "hard",
  "timeLimit": 120,
  "t": "Powers, cubics, and circles",
  "question": "On the same coordinate plane, sketch both \\( y = 2\\sqrt{x} \\) and \\( y = -2\\sqrt{x} \\). Describe the shape that is formed when these two curves are combined.",
  "a": "Combining the two halves forms a sideways parabola with equation y^2 = 4x opening to the right.",
  "solutionSteps": [
  {
    "explanation": "The curve \\( y = 2\\sqrt{x} \\) represents the upper branch of a sideways opening parabola, and \\( y = -2\\sqrt{x} \\) represents the lower branch. Combining them yields all points satisfying \\( y^2 = 4x \\).",
    "workingOut": ""
  }],

  "graphData": {
    "jsxGraph": {
      "width": 350,
      "height": 250,
      "boundingbox": [-1, 5, 6, -5],
      "script": "board.suspendUpdate();\nboard.create('arrow', [[-0.5,0], [5.5,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-4.5], [0,4.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('functiongraph', [function(x){ return 2*Math.sqrt(x); }, 0, 5.5], {strokeColor: '#3b82f6', strokeWidth: 2, firstArrow: false});\nboard.create('functiongraph', [function(x){ return -2*Math.sqrt(x); }, 0, 5.5], {strokeColor: '#ef4444', strokeWidth: 2, firstArrow: false});\nboard.unsuspendUpdate();"
    }
  }
},

// ── QUESTION 18 ──
{
  "id": "y11a-3g-q18",
  "type": "teacher_review",
  "difficulty": "hard",
  "timeLimit": 120,
  "t": "Powers, cubics, and circles",
  "question": "Analyze and graph the following cubic functions:\n\n\\( \\text{(i) } c(x) = x^3 + 2x \\)\n\\( \\text{(ii) } c(x) = 2x^3 \\)\n\\( \\text{(iii) } c(x) = x^3 - 4x \\)\n\nExplain their symmetries and key shape differences.",
  "a": "All curves are odd functions (symmetric under 180 degree rotation about the origin). i) is strictly increasing with no turning points, ii) is strictly increasing with a flat inflection point at origin, iii) has two turning points and three x-intercepts (-2, 0, 2).",
  "solutionSteps": [
  {
    "explanation": "Symmetry: For all three, \\( c(-x) = -c(x) \\), so they are odd functions (origin symmetry).",
    "workingOut": ""
  },
  {
    "explanation": "Behavior differences: \\( x^3 + 2x \\) has a derivative of \\( 3x^2 + 2 > 0 \\), so it is strictly increasing with no stationary points. \\( 2x^3 \\) has derivative \\( 6x^2 \\), which is 0 only at the origin (flat inflection). \\( x^3 - 4x \\) factorizes as \\( x(x-2)(x+2) \\) and has stationary points where \\( 3x^2 - 4 = 0 \\implies x = \\pm \\frac{2}{\\sqrt{3}} \\).",
    "workingOut": ""
  }],

  "graphData": {
    "jsxGraph": {
      "width": 350,
      "height": 250,
      "boundingbox": [-3.5, 8, 3.5, -8],
      "script": "board.suspendUpdate();\nboard.create('arrow', [[-3,0], [3,0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,-7], [0,7]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('functiongraph', [function(x){ return x*x*x + 2*x; }, -1.6, 1.6], {strokeColor: '#3b82f6', strokeWidth: 1.5});\nboard.create('functiongraph', [function(x){ return 2*x*x*x; }, -1.5, 1.5], {strokeColor: '#10b981', strokeWidth: 1.5});\nboard.create('functiongraph', [function(x){ return x*x*x - 4*x; }, -2.5, 2.5], {strokeColor: '#ef4444', strokeWidth: 1.5});\nboard.unsuspendUpdate();"
    }
  }
}];