export const Y9_CH11G_QUESTIONS = [
  {
    "id": "y9-11g-q1",
    "topicId": "y9-11g",
    "c": "11G",
    "t": "Parallel and perpendicular straight lines",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "The equations of eight lines are given below:\n**a** \\(y = 3x - 5\\)\n**b** \\(2x + y = 6\\)\n**c** \\(y = 5 - 2x\\)\n**d** \\(x = \\frac{1}{3}y + 2\\)\n**e** \\(y = \\frac{1}{2}x - 4\\)\n**f** \\(2y - x = 8\\)\n**g** \\(3y + x = 9\\)\n**h** \\(y = -2x + 7\\)\n\nState which groups of lines are parallel (have the same gradient). Format parallel groups separated by semicolons (e.g. a and d; b, c and h; e and f).",
    "opts": [
      "a and d; b, c and h; e and f",
      "The opposite statement is true.",
      "This is only true for acute angles.",
      "This only holds when the triangle is isosceles."
    ],
    "a": 0,
    "answer": "0",
    "hint": "Find the gradient of each line by rearranging into the form \\(y = mx + c\\). Lines with equal gradients are parallel.",
    "solution": "Let's find the gradient \\(m\\) of each line:\n- **a**: \\(y = 3x - 5 \\implies m = 3\\)\n- **b**: \\(y = -2x + 6 \\implies m = -2\\)\n- **c**: \\(y = -2x + 5 \\implies m = -2\\)\n- **d**: \\(y = 3x - 6 \\implies m = 3\\)\n- **e**: \\(y = \\frac{1}{2}x - 4 \\implies m = \\frac{1}{2}\\)\n- **f**: \\(y = \\frac{1}{2}x + 4 \\implies m = \\frac{1}{2}\\)\n- **g**: \\(y = -\\frac{1}{3}x + 3 \\implies m = -\\frac{1}{3}\\)\n- **h**: \\(y = -2x + 7 \\implies m = -2\\)\n\nParallel groups:\n- Gradient \\(3\\): **a and d**\n- Gradient \\(-2\\): **b, c and h**\n- Gradient \\(0.5\\): **e and f**",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Parallel and perpendicular straight lines: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(m_a=3, m_b=-2, m_c=-2, m_d=3, m_e=0.5, m_f=0.5, m_g=-1/3, m_h=-2\\)",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -6,
              6,
              6,
              -6
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-6,0],[6,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-6],[0,6]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.28, -2.0999999999999996, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.4, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return (3)*x + (-5); }, -5.5, 5.5], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [2.2, 3.5, 'y = 3x-5'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "a and d; b, c and h; e and f",
        "graphData": null
      },
      {
        "explanation": "Final answer: a and d; b, c and h; e and f. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "a and d; b, c and h; e and f",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 360,
        "height": 280,
        "boundingbox": [
          -6,
          6,
          6,
          -6
        ],
        "script": "board.suspendUpdate(); board.create('arrow', [[-6,0],[6,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-6],[0,6]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.28, -2.0999999999999996, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.4, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return (3)*x + (-5); }, -5.5, 5.5], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [2.2, 3.5, 'y = 3x-5'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11g-q2a",
    "topicId": "y9-11g",
    "c": "11G",
    "t": "Parallel and perpendicular straight lines",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the equation of the line that is parallel to the line \\(y = 3x - 1\\) and passes through the point \\((2, 7)\\).",
    "opts": [
      "\\(\\dfrac{12}{5}\\)",
      "\\(\\dfrac{13}{6}\\)",
      "\\(y = 3x + 1\\)",
      "\\(y = 3x + 1 + 1\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Parallel lines have the same gradient. Find the gradient of the given line, then use point-gradient form.",
    "solution": "1. The gradient of the parallel line is same as \\(y = 3x - 1\\), which is \\(m = 3\\).\n2. Use Point-Slope formula \\(y - y_1 = m(x - x_1)\\) with point \\((2, 7)\\):\n   \\(y - 7 = 3(x - 2)\\)\n   \\(y = 3x + 1\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Parallel and perpendicular straight lines: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(m = 3\\)",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -6,
              6,
              6,
              -6
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-6,0],[6,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-6],[0,6]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.28, -2.0999999999999996, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.4, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return (3)*x + (-1); }, -5.5, 5.5], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [2.2, 3.5, 'y = 3x-1'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(y - 7 = 3(x - 2) \\implies y = 3x + 1\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(y = 3x + 1\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y = 3x + 1. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(y = 3x + 1\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 360,
        "height": 280,
        "boundingbox": [
          -6,
          6,
          6,
          -6
        ],
        "script": "board.suspendUpdate(); board.create('arrow', [[-6,0],[6,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-6],[0,6]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.28, -2.0999999999999996, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.4, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return (3)*x + (-1); }, -5.5, 5.5], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [2.2, 3.5, 'y = 3x-1'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11g-q2b",
    "topicId": "y9-11g",
    "c": "11G",
    "t": "Parallel and perpendicular straight lines",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the equation of the line that is parallel to the line \\(y = 2x + 4\\) and passes through the point \\((-1, 3)\\).",
    "opts": [
      "\\(\\dfrac{13}{6}\\)",
      "\\(y = 2x + 5\\)",
      "\\(y = 2x + 5 + 1\\)",
      "\\(y = 3x + 5\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Parallel lines have the same gradient. Find the gradient of the given line, then use point-gradient form.",
    "solution": "1. The gradient of the parallel line is same as \\(y = 2x + 4\\), which is \\(m = 2\\).\n2. Use Point-Slope formula \\(y - y_1 = m(x - x_1)\\) with point \\((-1, 3)\\):\n   \\(y - 3 = 2(x - (-1))\\)\n   \\(y = 2x + 5\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Parallel and perpendicular straight lines: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(m = 2\\)",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -6,
              6,
              6,
              -6
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-6,0],[6,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-6],[0,6]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.28, -2.0999999999999996, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.4, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return (2)*x + (+4); }, -5.5, 5.5], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [2.2, 3.5, 'y = 2x++4'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(y - 3 = 2(x - -1) \\implies y = 2x + 5\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(y = 2x + 5\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y = 2x + 5. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(y = 2x + 5\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 360,
        "height": 280,
        "boundingbox": [
          -6,
          6,
          6,
          -6
        ],
        "script": "board.suspendUpdate(); board.create('arrow', [[-6,0],[6,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-6],[0,6]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.28, -2.0999999999999996, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.4, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return (2)*x + (+4); }, -5.5, 5.5], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [2.2, 3.5, 'y = 2x++4'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11g-q2c",
    "topicId": "y9-11g",
    "c": "11G",
    "t": "Parallel and perpendicular straight lines",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the equation of the line that is parallel to the line \\(y = 3 - x\\) and passes through the point \\((-2, -3)\\).",
    "opts": [
      "\\(\\dfrac{12}{5}\\)",
      "\\(\\dfrac{13}{6}\\)",
      "\\(y = -x - 5\\)",
      "\\(y = -x - 5 + 1\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Parallel lines have the same gradient. Find the gradient of the given line, then use point-gradient form.",
    "solution": "1. The gradient of the parallel line is same as \\(y = 3 - x\\), which is \\(m = -1\\).\n2. Use Point-Slope formula \\(y - y_1 = m(x - x_1)\\) with point \\((-2, -3)\\):\n   \\(y - (-3) = -1(x - (-2))\\)\n   \\(y = -x - 5\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Parallel and perpendicular straight lines: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(m = -1\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(y - -3 = -1(x - -2) \\implies y = -x - 5\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(y = -x - 5\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y = -x - 5. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(y = -x - 5\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11g-q2d",
    "topicId": "y9-11g",
    "c": "11G",
    "t": "Parallel and perpendicular straight lines",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the equation of the line that is parallel to the line \\(x + 3y = 9\\) and passes through the point \\((3, -2)\\).",
    "opts": [
      "\\(\\dfrac{12}{5}\\)",
      "\\(\\dfrac{13}{6}\\)",
      "\\(y = -1/3x - 1\\)",
      "\\(y = -1/3x - 1 + 1\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Parallel lines have the same gradient. Find the gradient of the given line, then use point-gradient form.",
    "solution": "1. The gradient of the parallel line is same as \\(x + 3y = 9\\), which is \\(m = -\\frac{1}{3}\\).\n2. Use Point-Slope formula \\(y - y_1 = m(x - x_1)\\) with point \\((3, -2)\\):\n   \\(y - (-2) = -\\frac{1}{3}(x - 3)\\)\n   \\(y = -1/3x - 1\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Parallel and perpendicular straight lines: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(m = -\\frac{1}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(y - -2 = -\\frac{1}{3}(x - 3) \\implies y = -1/3x - 1\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(y = -1/3x - 1\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y = -1/3x - 1. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(y = -1/3x - 1\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11g-q2e",
    "topicId": "y9-11g",
    "c": "11G",
    "t": "Parallel and perpendicular straight lines",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the equation of the line that is parallel to the line \\(y - 2x = 5\\) and passes through the point \\((1, -4)\\).",
    "opts": [
      "\\(\\dfrac{13}{6}\\)",
      "\\(y = 2x - 6\\)",
      "\\(y = 2x - 6 + 1\\)",
      "\\(y = 3x - 6\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Parallel lines have the same gradient. Find the gradient of the given line, then use point-gradient form.",
    "solution": "1. The gradient of the parallel line is same as \\(y - 2x = 5\\), which is \\(m = 2\\).\n2. Use Point-Slope formula \\(y - y_1 = m(x - x_1)\\) with point \\((1, -4)\\):\n   \\(y - (-4) = 2(x - 1)\\)\n   \\(y = 2x - 6\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Parallel and perpendicular straight lines: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(m = 2\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(y - -4 = 2(x - 1) \\implies y = 2x - 6\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(y = 2x - 6\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y = 2x - 6. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(y = 2x - 6\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11g-q2f",
    "topicId": "y9-11g",
    "c": "11G",
    "t": "Parallel and perpendicular straight lines",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the equation of the line that is parallel to the line \\(3y + x = 6\\) and passes through the point \\((6, -3)\\).",
    "opts": [
      "\\(\\dfrac{12}{5}\\)",
      "\\(\\dfrac{13}{6}\\)",
      "\\(y = -1/3x - 1\\)",
      "\\(y = -1/3x - 1 + 1\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Parallel lines have the same gradient. Find the gradient of the given line, then use point-gradient form.",
    "solution": "1. The gradient of the parallel line is same as \\(3y + x = 6\\), which is \\(m = -\\frac{1}{3}\\).\n2. Use Point-Slope formula \\(y - y_1 = m(x - x_1)\\) with point \\((6, -3)\\):\n   \\(y - (-3) = -\\frac{1}{3}(x - 6)\\)\n   \\(y = -1/3x - 1\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Parallel and perpendicular straight lines: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(m = -\\frac{1}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(y - -3 = -\\frac{1}{3}(x - 6) \\implies y = -1/3x - 1\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(y = -1/3x - 1\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y = -1/3x - 1. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(y = -1/3x - 1\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11g-q3",
    "topicId": "y9-11g",
    "c": "11G",
    "t": "Parallel and perpendicular straight lines",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "If \\(y = (a + 3)x + 5\\) is parallel to \\(y = 4x - 2\\), find the value of \\(a\\).",
    "answer": "1",
    "hint": "Parallel lines have equal coefficients of \\(x\\) when written in the form \\(y = mx + c\\).",
    "solution": "1",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Parallel and perpendicular straight lines: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(a + 3 = 4\\)",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -6,
              6,
              6,
              -6
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-6,0],[6,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-6],[0,6]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.28, -2.0999999999999996, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.4, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return (4)*x + (-2); }, -5.5, 5.5], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [2.2, 3.5, 'y = 4x-2'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(a = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(1\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 1. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(1\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 360,
        "height": 280,
        "boundingbox": [
          -6,
          6,
          6,
          -6
        ],
        "script": "board.suspendUpdate(); board.create('arrow', [[-6,0],[6,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-6],[0,6]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.28, -2.0999999999999996, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.4, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return (4)*x + (-2); }, -5.5, 5.5], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [2.2, 3.5, 'y = 4x-2'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-11g-q4",
    "topicId": "y9-11g",
    "c": "11G",
    "t": "Parallel and perpendicular straight lines",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "If \\(y = (3a - 2)x + 2\\) is parallel to \\(y = 4x - 1\\), find the value of \\(a\\).",
    "answer": "2",
    "hint": "Identify the gradients of both lines and set them equal to each other.",
    "solution": "2",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Parallel and perpendicular straight lines: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(3a - 2 = 4\\)",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -6,
              6,
              6,
              -6
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-6,0],[6,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-6],[0,6]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.28, -2.0999999999999996, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.4, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return (4)*x + (-1); }, -5.5, 5.5], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [2.2, 3.5, 'y = 4x-1'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(3a = 6 \\implies a = 2\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(2\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 2. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(2\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 360,
        "height": 280,
        "boundingbox": [
          -6,
          6,
          6,
          -6
        ],
        "script": "board.suspendUpdate(); board.create('arrow', [[-6,0],[6,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-6],[0,6]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.28, -2.0999999999999996, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.4, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return (4)*x + (-1); }, -5.5, 5.5], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [2.2, 3.5, 'y = 4x-1'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-11g-q5",
    "topicId": "y9-11g",
    "c": "11G",
    "t": "Parallel and perpendicular straight lines",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "If \\(y = (2a + 3)x - 2\\) is parallel to \\(y = ax - 5\\), find the value of \\(a\\).",
    "opts": [
      "\\(-2\\)",
      "\\(-3\\)",
      "\\(-4\\)",
      "\\(3\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Set the coefficient of \\(x\\) of both equations equal to each other.",
    "solution": "Gradients of parallel lines are equal:\n\\(2a + 3 = a \\implies a = -3\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Parallel and perpendicular straight lines: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(2a + 3 = a\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(a = -3\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(-3\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: -3. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(-3\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11g-q6",
    "topicId": "y9-11g",
    "c": "11G",
    "t": "Parallel and perpendicular straight lines",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "For each perpendicular line pair \\(\\ell_1\\) and \\(\\ell_2\\), find the gradient of \\(\\ell_2\\) given the gradient of \\(\\ell_1\\):\na) \\(m_1 = \\frac{1}{3}\\)\nb) \\(m_1 = 3\\)\nc) \\(m_1 = \\frac{5}{2}\\)\nd) \\(m_1 = 4\\)\ne) \\(m_1 = \\frac{2}{3}\\)\nf) \\(m_1 = -3\\)\ng) \\(m_1 = -4\\)\nh) \\(m_1 = -\\frac{1}{3}\\)\ni) \\(m_1 = \\frac{3}{5}\\)\nj) \\(m_1 = \\frac{3}{4}\\)\n\nFormat answers in order separated by commas (e.g. -3, -1/3, ...)",
    "opts": [
      "\\(-3, -1/3, -2/5, -1/4, -3/2, 1/3, 1/4, 3, -5/3, -4/3\\)",
      "\\(-3, -1/3, -2/5, -1/4, -3/2, 1/3, 1/4, 3, -5/3, -4/3 + 1\\)",
      "\\(-3, -1/3, -3/5, -1/4, -3/3, 1/3, 1/4, 3, -5/3, -4/3\\)",
      "\\(3, -1/3, -2/5, -1/4, -3/2, 1/3, 1/4, 3, -5/3, -4/3\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Perpendicular gradients are negative reciprocals: \\(m_2 = -\\frac{1}{m_1}\\).",
    "solution": "Since \\(\\ell_1 \\perp \\ell_2\\), their gradients satisfy \\(m_1 \\times m_2 = -1\\) (negative reciprocals):\n- a) \\(m_2 = -3\\)\n- b) \\(m_2 = -\\frac{1}{3}\\)\n- c) \\(m_2 = -\\frac{2}{5}\\)\n- d) \\(m_2 = -\\frac{1}{4}\\)\n- e) \\(m_2 = -\\frac{3}{2}\\)\n- f) \\(m_2 = \\frac{1}{3}\\)\n- g) \\(m_2 = \\frac{1}{4}\\)\n- h) \\(m_2 = 3\\)\n- i) \\(m_2 = -\\frac{5}{3}\\)\n- j) \\(m_2 = -\\frac{4}{3}\\)",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Parallel and perpendicular straight lines: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(m_2 = -\\frac{1}{m_1}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(-3, -1/3, -2/5, -1/4, -3/2, 1/3, 1/4, 3, -5/3, -4/3\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: -3, -1/3, -2/5, -1/4, -3/2, 1/3, 1/4, 3, -5/3, -4/3. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(-3, -1/3, -2/5, -1/4, -3/2, 1/3, 1/4, 3, -5/3, -4/3\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11g-q7",
    "topicId": "y9-11g",
    "c": "11G",
    "t": "Parallel and perpendicular straight lines",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "The equations of eight lines are given below:\n**a** \\(y = 3x - 5\\)\n**b** \\(3y + x = 6\\)\n**c** \\(y = x + 3\\)\n**d** \\(2y - x = 4\\)\n**e** \\(y = 5 - x\\)\n**f** \\(2y + x = 6\\)\n**g** \\(2y - 4x = 8\\)\n**h** \\(y = -3x + 1\\)\n\nState which pairs of lines are perpendicular. Format perpendicular pairs separated by semicolons (e.g. a and b; c and e; f and g).",
    "opts": [
      "a and b; c and e; f and g",
      "The opposite statement is true.",
      "This is only true for acute angles.",
      "This only holds when the triangle is isosceles."
    ],
    "a": 0,
    "answer": "0",
    "hint": "Rearrange each equation to \\(y = mx + c\\) and verify if the product of their gradients is \\(-1\\).",
    "solution": "Let's find the gradient \\(m\\) of each line:\n- **a**: \\(y = 3x - 5 \\implies m_a = 3\\)\n- **b**: \\(y = -\\frac{1}{3}x + 2 \\implies m_b = -\\frac{1}{3}\\)\n- **c**: \\(y = x + 3 \\implies m_c = 1\\)\n- **d**: \\(y = \\frac{1}{2}x + 2 \\implies m_d = \\frac{1}{2}\\)\n- **e**: \\(y = -x + 5 \\implies m_e = -1\\)\n- **f**: \\(y = -\\frac{1}{2}x + 3 \\implies m_f = -\\frac{1}{2}\\)\n- **g**: \\(y = 2x + 4 \\implies m_g = 2\\)\n- **h**: \\(y = -3x + 1 \\implies m_h = -3\\)\n\nPerpendicular pairs (where \\(m_1 \\times m_2 = -1\\)):\n- \\(3 \\times -\\frac{1}{3} = -1\\): **a and b**\n- \\(1 \\times -1 = -1\\): **c and e**\n- \\(2 \\times -\\frac{1}{2} = -1\\): **f and g**",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Parallel and perpendicular straight lines: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(m_a=3, m_b=-1/3, m_c=1, m_d=1/2, m_e=-1, m_f=-1/2, m_g=2, m_h=-3\\)",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -6,
              6,
              6,
              -6
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-6,0],[6,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-6],[0,6]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.28, -2.0999999999999996, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.4, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return (3)*x + (-5); }, -5.5, 5.5], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [2.2, 3.5, 'y = 3x-5'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "a and b; c and e; f and g",
        "graphData": null
      },
      {
        "explanation": "Final answer: a and b; c and e; f and g. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "a and b; c and e; f and g",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 360,
        "height": 280,
        "boundingbox": [
          -6,
          6,
          6,
          -6
        ],
        "script": "board.suspendUpdate(); board.create('arrow', [[-6,0],[6,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-6],[0,6]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.28, -2.0999999999999996, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.4, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return (3)*x + (-5); }, -5.5, 5.5], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [2.2, 3.5, 'y = 3x-5'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11g-q8a",
    "topicId": "y9-11g",
    "c": "11G",
    "t": "Parallel and perpendicular straight lines",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the equation of the line that is perpendicular to the line \\(y = 3x - 1\\) and passes through the point \\((2, 5)\\).",
    "opts": [
      "\\(\\dfrac{12}{5}\\)",
      "\\(\\dfrac{13}{6}\\)",
      "\\(y = -1/3x + 17/3\\)",
      "\\(y = -1/3x + 17/3 + 1\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Find the gradient of the given line, determine its negative reciprocal, and then use point-gradient form.",
    "solution": "1. The gradient of the perpendicular line is the negative reciprocal of the gradient of \\(y = 3x - 1\\), which gives \\(m_2 = -\\frac{1}{3}\\).\n2. Use Point-Slope formula \\(y - y_1 = m_2(x - x_1)\\) with point \\((2, 5)\\):\n   \\(y - 5 = -\\frac{1}{3}(x - 2)\\)\n   \\(y = -1/3x + 17/3\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Parallel and perpendicular straight lines: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(m_2 = -\\frac{1}{m_1} = -\\frac{1}{3}\\)",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -6,
              6,
              6,
              -6
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-6,0],[6,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-6],[0,6]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.28, -2.0999999999999996, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.4, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return (3)*x + (-1); }, -5.5, 5.5], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [2.2, 3.5, 'y = 3x-1'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(y - 5 = -\\frac{1}{3}(x - 2) \\implies y = -1/3x + 17/3\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(y = -1/3x + 17/3\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y = -1/3x + 17/3. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(y = -1/3x + 17/3\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 360,
        "height": 280,
        "boundingbox": [
          -6,
          6,
          6,
          -6
        ],
        "script": "board.suspendUpdate(); board.create('arrow', [[-6,0],[6,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-6],[0,6]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.28, -2.0999999999999996, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.4, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return (3)*x + (-1); }, -5.5, 5.5], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [2.2, 3.5, 'y = 3x-1'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11g-q8b",
    "topicId": "y9-11g",
    "c": "11G",
    "t": "Parallel and perpendicular straight lines",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the equation of the line that is perpendicular to the line \\(y = 2x + 4\\) and passes through the point \\((-2, 4)\\).",
    "opts": [
      "\\(\\dfrac{13}{6}\\)",
      "\\(y = -1/2x + 3\\)",
      "\\(y = -1/2x + 3 + 1\\)",
      "\\(y = -1/3x + 3\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Find the gradient of the given line, determine its negative reciprocal, and then use point-gradient form.",
    "solution": "1. The gradient of the perpendicular line is the negative reciprocal of the gradient of \\(y = 2x + 4\\), which gives \\(m_2 = -\\frac{1}{2}\\).\n2. Use Point-Slope formula \\(y - y_1 = m_2(x - x_1)\\) with point \\((-2, 4)\\):\n   \\(y - 4 = -\\frac{1}{2}(x - (-2))\\)\n   \\(y = -1/2x + 3\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Parallel and perpendicular straight lines: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(m_2 = -\\frac{1}{m_1} = -\\frac{1}{2}\\)",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -6,
              6,
              6,
              -6
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-6,0],[6,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-6],[0,6]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.28, -2.0999999999999996, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.4, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return (2)*x + (+4); }, -5.5, 5.5], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [2.2, 3.5, 'y = 2x++4'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(y - 4 = -\\frac{1}{2}(x - -2) \\implies y = -1/2x + 3\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(y = -1/2x + 3\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y = -1/2x + 3. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(y = -1/2x + 3\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 360,
        "height": 280,
        "boundingbox": [
          -6,
          6,
          6,
          -6
        ],
        "script": "board.suspendUpdate(); board.create('arrow', [[-6,0],[6,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-6],[0,6]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.28, -2.0999999999999996, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.4, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return (2)*x + (+4); }, -5.5, 5.5], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [2.2, 3.5, 'y = 2x++4'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11g-q8c",
    "topicId": "y9-11g",
    "c": "11G",
    "t": "Parallel and perpendicular straight lines",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the equation of the line that is perpendicular to the line \\(y = 5 - x\\) and passes through the point \\((-3, -2)\\).",
    "opts": [
      "\\(\\dfrac{12}{5}\\)",
      "\\(\\dfrac{13}{6}\\)",
      "\\(y = x + 1\\)",
      "\\(y = x + 1 + 1\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Find the gradient of the given line, determine its negative reciprocal, and then use point-gradient form.",
    "solution": "1. The gradient of the perpendicular line is the negative reciprocal of the gradient of \\(y = 5 - x\\), which gives \\(m_2 = 1\\).\n2. Use Point-Slope formula \\(y - y_1 = m_2(x - x_1)\\) with point \\((-3, -2)\\):\n   \\(y - (-2) = 1(x - (-3))\\)\n   \\(y = x + 1\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Parallel and perpendicular straight lines: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(m_2 = -\\frac{1}{m_1} = 1\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(y - -2 = 1(x - -3) \\implies y = x + 1\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(y = x + 1\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y = x + 1. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(y = x + 1\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11g-q8d",
    "topicId": "y9-11g",
    "c": "11G",
    "t": "Parallel and perpendicular straight lines",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the equation of the line that is perpendicular to the line \\(x + 4y = 8\\) and passes through the point \\((2, -5)\\).",
    "opts": [
      "\\(\\dfrac{12}{5}\\)",
      "\\(\\dfrac{13}{6}\\)",
      "\\(y = 4x - 13\\)",
      "\\(y = 4x - 13 + 1\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Find the gradient of the given line, determine its negative reciprocal, and then use point-gradient form.",
    "solution": "1. The gradient of the perpendicular line is the negative reciprocal of the gradient of \\(x + 4y = 8\\), which gives \\(m_2 = 4\\).\n2. Use Point-Slope formula \\(y - y_1 = m_2(x - x_1)\\) with point \\((2, -5)\\):\n   \\(y - (-5) = 4(x - 2)\\)\n   \\(y = 4x - 13\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Parallel and perpendicular straight lines: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(m_2 = -\\frac{1}{m_1} = 4\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(y - -5 = 4(x - 2) \\implies y = 4x - 13\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(y = 4x - 13\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y = 4x - 13. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(y = 4x - 13\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11g-q8e",
    "topicId": "y9-11g",
    "c": "11G",
    "t": "Parallel and perpendicular straight lines",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the equation of the line that is perpendicular to the line \\(y - 3x = 6\\) and passes through the point \\((2, -4)\\).",
    "opts": [
      "\\(\\dfrac{12}{5}\\)",
      "\\(\\dfrac{13}{6}\\)",
      "\\(y = -1/3x - 10/3\\)",
      "\\(y = -1/3x - 10/3 + 1\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Find the gradient of the given line, determine its negative reciprocal, and then use point-gradient form.",
    "solution": "1. The gradient of the perpendicular line is the negative reciprocal of the gradient of \\(y - 3x = 6\\), which gives \\(m_2 = -\\frac{1}{3}\\).\n2. Use Point-Slope formula \\(y - y_1 = m_2(x - x_1)\\) with point \\((2, -4)\\):\n   \\(y - (-4) = -\\frac{1}{3}(x - 2)\\)\n   \\(y = -1/3x - 10/3\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Parallel and perpendicular straight lines: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(m_2 = -\\frac{1}{m_1} = -\\frac{1}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(y - -4 = -\\frac{1}{3}(x - 2) \\implies y = -1/3x - 10/3\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(y = -1/3x - 10/3\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y = -1/3x - 10/3. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(y = -1/3x - 10/3\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11g-q8f",
    "topicId": "y9-11g",
    "c": "11G",
    "t": "Parallel and perpendicular straight lines",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the equation of the line that is perpendicular to the line \\(2y + x = 4\\) and passes through the point \\((4, -3)\\).",
    "opts": [
      "\\(\\dfrac{13}{6}\\)",
      "\\(y = 2x - 11\\)",
      "\\(y = 2x - 11 + 1\\)",
      "\\(y = 3x - 11\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Find the gradient of the given line, determine its negative reciprocal, and then use point-gradient form.",
    "solution": "1. The gradient of the perpendicular line is the negative reciprocal of the gradient of \\(2y + x = 4\\), which gives \\(m_2 = 2\\).\n2. Use Point-Slope formula \\(y - y_1 = m_2(x - x_1)\\) with point \\((4, -3)\\):\n   \\(y - (-3) = 2(x - 4)\\)\n   \\(y = 2x - 11\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Parallel and perpendicular straight lines: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(m_2 = -\\frac{1}{m_1} = 2\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(y - -3 = 2(x - 4) \\implies y = 2x - 11\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(y = 2x - 11\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y = 2x - 11. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(y = 2x - 11\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11g-q9a",
    "topicId": "y9-11g",
    "c": "11G",
    "t": "Parallel and perpendicular straight lines",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Consider the quadrilateral \\(ABCD\\) with vertices \\(A(2, 3)\\), \\(B(4, 6)\\), \\(C(8, 0)\\), and \\(D(6, -3)\\). Answer the following sub-questions.\na) Find the coordinates of \\(M\\), the midpoint of \\(AB\\).",
    "opts": [
      "\\((3, 4.5)\\)",
      "\\((3, 4.5) + 1\\)",
      "\\(\\dfrac{12}{5}\\)",
      "\\(\\dfrac{13}{6}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\((3, 4.5)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Parallel and perpendicular straight lines: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(M = \\left(\\frac{2+4}{2}, \\frac{3+6}{2}\\right) = (3, 4.5)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\((3, 4.5)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (3, 4.5). Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\((3, 4.5)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11g-q9b",
    "topicId": "y9-11g",
    "c": "11G",
    "t": "Parallel and perpendicular straight lines",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Consider the quadrilateral \\(ABCD\\) with vertices \\(A(2, 3)\\), \\(B(4, 6)\\), \\(C(8, 0)\\), and \\(D(6, -3)\\). Answer the following sub-questions.\nb) Find the coordinates of \\(N\\), the midpoint of \\(BC\\).",
    "opts": [
      "\\((6, 3)\\)",
      "\\((6, 3) + 1\\)",
      "\\(\\dfrac{12}{5}\\)",
      "\\(\\dfrac{13}{6}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\((6, 3)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Parallel and perpendicular straight lines: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(N = \\left(\\frac{4+8}{2}, \\frac{6+0}{2}\\right) = (6, 3)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\((6, 3)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (6, 3). Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\((6, 3)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11g-q9c",
    "topicId": "y9-11g",
    "c": "11G",
    "t": "Parallel and perpendicular straight lines",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Consider the quadrilateral \\(ABCD\\) with vertices \\(A(2, 3)\\), \\(B(4, 6)\\), \\(C(8, 0)\\), and \\(D(6, -3)\\). Answer the following sub-questions.\nc) Calculate the gradient of \\(MN\\).",
    "opts": [
      "\\(-0.5\\)",
      "\\(-1\\)",
      "\\(-1.5\\)",
      "\\(0.5\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(-0.5\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Parallel and perpendicular straight lines: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(m = \\frac{3 - 4.5}{6 - 3} = -0.5\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(-0.5\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: -0.5. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(-0.5\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11g-q9d",
    "topicId": "y9-11g",
    "c": "11G",
    "t": "Parallel and perpendicular straight lines",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Consider the quadrilateral \\(ABCD\\) with vertices \\(A(2, 3)\\), \\(B(4, 6)\\), \\(C(8, 0)\\), and \\(D(6, -3)\\). Answer the following sub-questions.\nd) If \\(P\\) is the midpoint of \\(CD\\) and \\(Q\\) is the midpoint of \\(DA\\), find the gradient of \\(PQ\\).",
    "opts": [
      "\\(-0.5\\)",
      "\\(-1\\)",
      "\\(-1.5\\)",
      "\\(0.5\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(-0.5\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Parallel and perpendicular straight lines: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(P(7, -1.5), \\quad Q(4, 0) \\implies m = \\frac{0 - (-1.5)}{4 - 7} = -0.5\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(-0.5\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: -0.5. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(-0.5\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11g-q9e",
    "topicId": "y9-11g",
    "c": "11G",
    "t": "Parallel and perpendicular straight lines",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Consider the quadrilateral \\(ABCD\\) with vertices \\(A(2, 3)\\), \\(B(4, 6)\\), \\(C(8, 0)\\), and \\(D(6, -3)\\). Answer the following sub-questions.\ne) What can be concluded about the intervals \\(MN\\) and \\(PQ\\)?",
    "opts": [
      "\\(\\dfrac{12}{5}\\)",
      "\\(\\dfrac{13}{6}\\)",
      "\\(Parallel\\)",
      "Parallel + 1"
    ],
    "a": 2,
    "answer": "2",
    "hint": "",
    "solution": "The correct answer is \\(Parallel\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Parallel and perpendicular straight lines: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(m_{MN} = m_{PQ} = -0.5 \\implies Parallel\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(Parallel\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Parallel. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(Parallel\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11g-q9f",
    "topicId": "y9-11g",
    "c": "11G",
    "t": "Parallel and perpendicular straight lines",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Consider the quadrilateral \\(ABCD\\) with vertices \\(A(2, 3)\\), \\(B(4, 6)\\), \\(C(8, 0)\\), and \\(D(6, -3)\\). Answer the following sub-questions.\nf) Find the gradients of \\(QM\\) and \\(PN\\). Format: [val1], [val2]",
    "opts": [
      "\\(-4.5, -4.5\\)",
      "\\(-4.5, -4.5 + 1\\)",
      "\\(4.5, -4.5\\)",
      "\\(\\dfrac{13}{6}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(-4.5, -4.5\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Parallel and perpendicular straight lines: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(m_{QM} = \\frac{4.5 - 0}{3 - 4} = -4.5, \\quad m_{PN} = \\frac{3 - (-1.5)}{6 - 7} = -4.5\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(-4.5, -4.5\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: -4.5, -4.5. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(-4.5, -4.5\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11g-q9g",
    "topicId": "y9-11g",
    "c": "11G",
    "t": "Parallel and perpendicular straight lines",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Consider the quadrilateral \\(ABCD\\) with vertices \\(A(2, 3)\\), \\(B(4, 6)\\), \\(C(8, 0)\\), and \\(D(6, -3)\\). Answer the following sub-questions.\ng) What type of quadrilateral is \\(MNPQ\\)?",
    "opts": [
      "\\(\\dfrac{12}{5}\\)",
      "\\(\\dfrac{13}{6}\\)",
      "\\(Parallelogram\\)",
      "Parallelogram + 1"
    ],
    "a": 2,
    "answer": "2",
    "hint": "",
    "solution": "The correct answer is \\(Parallelogram\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Parallel and perpendicular straight lines: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(MN \\parallel PQ \\text{ and } QM \\parallel PN \\implies Parallelogram\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(Parallelogram\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Parallelogram. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(Parallelogram\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11g-q10",
    "topicId": "y9-11g",
    "c": "11G",
    "t": "Parallel and perpendicular straight lines",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "If the line \\(y = (a + 2)x + 3\\) is perpendicular to \\(y = 3x - 1\\), find the value of \\(a\\).",
    "opts": [
      "\\(-1.3333333333333335\\)",
      "\\(-7/3\\)",
      "\\(-3.3333333333333335\\)",
      "\\(2.3333333333333335\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Perpendicular lines satisfy \\(m_1 \\times m_2 = -1\\). Set up the equation and solve for \\(a\\).",
    "solution": "Since the lines are perpendicular, the product of their gradients is \\(-1\\):\n\\((a + 2) \\times 3 = -1\\)\n\\(a + 2 = -\\frac{1}{3}\\)\n\\(a = -2 - \\frac{1}{3} = -\\frac{7}{3}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Parallel and perpendicular straight lines: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(3(a + 2) = -1\\)",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -6,
              6,
              6,
              -6
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-6,0],[6,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-6],[0,6]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.28, -2.0999999999999996, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.4, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return (3)*x + (-1); }, -5.5, 5.5], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [2.2, 3.5, 'y = 3x-1'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(a + 2 = -\\frac{1}{3} \\implies a = -\\frac{7}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(-7/3\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: -7/3. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(-7/3\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 360,
        "height": 280,
        "boundingbox": [
          -6,
          6,
          6,
          -6
        ],
        "script": "board.suspendUpdate(); board.create('arrow', [[-6,0],[6,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-6],[0,6]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.28, -2.0999999999999996, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.4, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return (3)*x + (-1); }, -5.5, 5.5], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [2.2, 3.5, 'y = 3x-1'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11g-q11",
    "topicId": "y9-11g",
    "c": "11G",
    "t": "Parallel and perpendicular straight lines",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "If the line \\(y = (3a + 1)x + 2\\) is perpendicular to \\(y = 2x - 5\\), find the value of \\(a\\).",
    "opts": [
      "\\(-1/2\\)",
      "\\(-1\\)",
      "\\(-1.5\\)",
      "\\(0.5\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Verify gradients product rule \\(m_1 \\times m_2 = -1\\).",
    "solution": "Since the lines are perpendicular:\n\\((3a + 1) \\times 2 = -1\\)\n\\(3a + 1 = -\\frac{1}{2}\\)\n\\(3a = -\\frac{3}{2} \\implies a = -\\frac{1}{2}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Parallel and perpendicular straight lines: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(2(3a + 1) = -1\\)",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -6,
              6,
              6,
              -6
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-6,0],[6,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-6],[0,6]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.28, -2.0999999999999996, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.4, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return (2)*x + (-5); }, -5.5, 5.5], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [2.2, 3.5, 'y = 2x-5'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(3a + 1 = -\\frac{1}{2} \\implies 3a = -\\frac{3}{2} \\implies a = -\\frac{1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(-1/2\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: -1/2. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(-1/2\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 360,
        "height": 280,
        "boundingbox": [
          -6,
          6,
          6,
          -6
        ],
        "script": "board.suspendUpdate(); board.create('arrow', [[-6,0],[6,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-6],[0,6]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.28, -2.0999999999999996, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.4, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return (2)*x + (-5); }, -5.5, 5.5], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [2.2, 3.5, 'y = 2x-5'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11g-q12a",
    "topicId": "y9-11g",
    "c": "11G",
    "t": "Parallel and perpendicular straight lines",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Let \\(AB\\) be the interval with endpoints \\(A(3, 4)\\) and \\(B(7, 12)\\). Answer the following sub-questions.\na) Find the gradient of \\(AB\\).",
    "answer": "2",
    "hint": "",
    "solution": "2",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Parallel and perpendicular straight lines: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(m = \\frac{12 - 4}{7 - 3} = 2\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(2\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 2. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-11g-q12b",
    "topicId": "y9-11g",
    "c": "11G",
    "t": "Parallel and perpendicular straight lines",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Let \\(AB\\) be the interval with endpoints \\(A(3, 4)\\) and \\(B(7, 12)\\). Answer the following sub-questions.\nb) Find the coordinates of \\(C\\), the midpoint of \\(AB\\).",
    "opts": [
      "\\((5, 8)\\)",
      "\\((5, 8) + 1\\)",
      "\\(\\dfrac{12}{5}\\)",
      "\\(\\dfrac{13}{6}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\((5, 8)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Parallel and perpendicular straight lines: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(C = \\left(\\frac{3+7}{2}, \\frac{4+12}{2}\\right) = (5, 8)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\((5, 8)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (5, 8). Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\((5, 8)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11g-q12c",
    "topicId": "y9-11g",
    "c": "11G",
    "t": "Parallel and perpendicular straight lines",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Let \\(AB\\) be the interval with endpoints \\(A(3, 4)\\) and \\(B(7, 12)\\). Answer the following sub-questions.\nc) Find the equation of the line that is perpendicular to \\(AB\\) and passes through \\(C\\). This line is the perpendicular bisector of \\(AB\\).",
    "opts": [
      "\\(\\dfrac{13}{6}\\)",
      "\\(y = -1/2x + 21/2\\)",
      "\\(y = -1/2x + 21/2 + 1\\)",
      "\\(y = -1/3x + 31/3\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is \\(y = -1/2x + 21/2\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Parallel and perpendicular straight lines: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(y - 8 = -\\frac{1}{2}(x - 5) \\implies y = -\\frac{1}{2}x + \\frac{21}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(y = -1/2x + 21/2\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y = -1/2x + 21/2. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(y = -1/2x + 21/2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11g-q12d",
    "topicId": "y9-11g",
    "c": "11G",
    "t": "Parallel and perpendicular straight lines",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Let \\(AB\\) be the interval with endpoints \\(A(3, 4)\\) and \\(B(7, 12)\\). Answer the following sub-questions.\nd) What is the \\(y\\)-intercept of this perpendicular bisector?",
    "opts": [
      "\\(-10.5\\)",
      "\\(10.5\\)",
      "\\(11.5\\)",
      "\\(9.5\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is \\(10.5\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Parallel and perpendicular straight lines: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(y = \\frac{21}{2} = 10.5\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(10.5\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 10.5. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(10.5\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11g-q13",
    "topicId": "y9-11g",
    "c": "11G",
    "t": "Parallel and perpendicular straight lines",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Triangle \\(ABC\\) has vertices \\(A(2, 1)\\), \\(B(5, 5)\\) and \\(C(9, 2)\\). By calculating gradients, show that \\(\\Delta ABC\\) is right-angled.",
    "answer": "Proof: Gradient m_AB = 4/3, m_BC = -3/4.\nSince m_AB * m_BC = -1, AB is perpendicular to BC, so angle B is 90 degrees.",
    "hint": "Compute the gradients of the three sides. Look for two sides whose gradients multiply to give \\(-1\\).",
    "solution": "Proof: Gradient m_AB = 4/3, m_BC = -3/4.\nSince m_AB * m_BC = -1, AB is perpendicular to BC, so angle B is 90 degrees.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Parallel and perpendicular straight lines: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(m_{AB} = \\frac{5 - 1}{5 - 2} = \\frac{4}{3}\\)",
        "graphData": {
          "jsxGraph": {
            "width": 350,
            "height": 350,
            "boundingbox": [
              0,
              7,
              11,
              0
            ],
            "showConstructionPoints": true,
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nvar pA = board.create('point', [2, 1], {size: 3, color: 'black', name: 'A(2, 1)', withLabel: true, label: {autoPosition: false, offset: [-15, -15]}});\nvar pB = board.create('point', [5, 5], {size: 3, color: 'black', name: 'B(5, 5)', withLabel: true, label: {autoPosition: false, offset: [-10, 15]}});\nvar pC = board.create('point', [9, 2], {size: 3, color: 'black', name: 'C(9, 2)', withLabel: true, label: {autoPosition: false, offset: [15, 10]}});\nboard.create('polygon', [pA, pB, pC], {fillColor: 'none', borders: {strokeColor: 'black', strokeWidth: 1.5}});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(m_{BC} = \\frac{2 - 5}{9 - 5} = -\\frac{3}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(m_{AB} \\times m_{BC} = \\frac{4}{3} \\times -\\frac{3}{4} = -1 \\implies AB \\perp BC\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Proof: Gradient m_AB = 4/3, m_BC = -3/4.\nSince m_AB * m_BC = -1, AB is perpendicular to BC, so angle B is 90 degrees.. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Proof: Gradient m_AB = 4/3, m_BC = -3/4.\nSince m_AB * m_BC = -1, AB is perpendicular to BC, so angle B is 90 degrees.",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 350,
        "boundingbox": [
          0,
          7,
          11,
          0
        ],
        "showConstructionPoints": true,
        "boardOptions": {
          "axis": true,
          "grid": true
        },
        "script": "board.suspendUpdate();\nvar pA = board.create('point', [2, 1], {size: 3, color: 'black', name: 'A(2, 1)', withLabel: true, label: {autoPosition: false, offset: [-15, -15]}});\nvar pB = board.create('point', [5, 5], {size: 3, color: 'black', name: 'B(5, 5)', withLabel: true, label: {autoPosition: false, offset: [-10, 15]}});\nvar pC = board.create('point', [9, 2], {size: 3, color: 'black', name: 'C(9, 2)', withLabel: true, label: {autoPosition: false, offset: [15, 10]}});\nboard.create('polygon', [pA, pB, pC], {fillColor: 'none', borders: {strokeColor: 'black', strokeWidth: 1.5}});\nboard.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-11g-q14",
    "topicId": "y9-11g",
    "c": "11G",
    "t": "Parallel and perpendicular straight lines",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Quadrilateral \\(ABCD\\) has vertices \\(A(1, -3)\\), \\(B(4, 1)\\), \\(C(8, -2)\\) and \\(D(5, -6)\\). Show that the diagonals \\(AC\\) and \\(BD\\) are perpendicular.",
    "answer": "Proof: Gradient m_AC = 1/7, m_BD = -7.\nSince m_AC * m_BD = -1, the diagonals AC and BD are perpendicular.",
    "hint": "Compute the gradients of diagonals AC and BD, then verify if their product is \\(-1\\).",
    "solution": "Proof: Gradient m_AC = 1/7, m_BD = -7.\nSince m_AC * m_BD = -1, the diagonals AC and BD are perpendicular.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Parallel and perpendicular straight lines: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(m_{AC} = \\frac{-2 - (-3)}{8 - 1} = \\frac{1}{7}\\)",
        "graphData": {
          "jsxGraph": {
            "width": 350,
            "height": 350,
            "boundingbox": [
              -1,
              3,
              10,
              -8
            ],
            "showConstructionPoints": true,
            "boardOptions": {
              "axis": true,
              "grid": true
            },
            "script": "board.suspendUpdate();\nvar pA = board.create('point', [1, -3], {size: 3, color: 'black', name: 'A(1, -3)', withLabel: true, label: {autoPosition: false, offset: [-15, -15]}});\nvar pB = board.create('point', [4, 1], {size: 3, color: 'black', name: 'B(4, 1)', withLabel: true, label: {autoPosition: false, offset: [-10, 15]}});\nvar pC = board.create('point', [8, -2], {size: 3, color: 'black', name: 'C(8, -2)', withLabel: true, label: {autoPosition: false, offset: [15, 10]}});\nvar pD = board.create('point', [5, -6], {size: 3, color: 'black', name: 'D(5, -6)', withLabel: true, label: {autoPosition: false, offset: [15, -15]}});\nboard.create('polygon', [pA, pB, pC, pD], {fillColor: 'none', borders: {strokeColor: 'black', strokeWidth: 1}});\nboard.create('segment', [pA, pC], {strokeColor: 'blue', strokeWidth: 1.5, strokeDasharray: '4 4'});\nboard.create('segment', [pB, pD], {strokeColor: 'blue', strokeWidth: 1.5, strokeDasharray: '4 4'});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(m_{BD} = \\frac{-6 - 1}{5 - 4} = -7\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(m_{AC} \\times m_{BD} = \\frac{1}{7} \\times (-7) = -1\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Proof: Gradient m_AC = 1/7, m_BD = -7.\nSince m_AC * m_BD = -1, the diagonals AC and BD are perpendicular.. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Proof: Gradient m_AC = 1/7, m_BD = -7.\nSince m_AC * m_BD = -1, the diagonals AC and BD are perpendicular.",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 350,
        "boundingbox": [
          -1,
          3,
          10,
          -8
        ],
        "showConstructionPoints": true,
        "boardOptions": {
          "axis": true,
          "grid": true
        },
        "script": "board.suspendUpdate();\nvar pA = board.create('point', [1, -3], {size: 3, color: 'black', name: 'A(1, -3)', withLabel: true, label: {autoPosition: false, offset: [-15, -15]}});\nvar pB = board.create('point', [4, 1], {size: 3, color: 'black', name: 'B(4, 1)', withLabel: true, label: {autoPosition: false, offset: [-10, 15]}});\nvar pC = board.create('point', [8, -2], {size: 3, color: 'black', name: 'C(8, -2)', withLabel: true, label: {autoPosition: false, offset: [15, 10]}});\nvar pD = board.create('point', [5, -6], {size: 3, color: 'black', name: 'D(5, -6)', withLabel: true, label: {autoPosition: false, offset: [15, -15]}});\nboard.create('polygon', [pA, pB, pC, pD], {fillColor: 'none', borders: {strokeColor: 'black', strokeWidth: 1}});\nboard.create('segment', [pA, pC], {strokeColor: 'blue', strokeWidth: 1.5, strokeDasharray: '4 4'});\nboard.create('segment', [pB, pD], {strokeColor: 'blue', strokeWidth: 1.5, strokeDasharray: '4 4'});\nboard.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-11g-q15a",
    "topicId": "y9-11g",
    "c": "11G",
    "t": "Parallel and perpendicular straight lines",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "The coordinates of the vertices of \\(\\Delta PQR\\) are \\(P(2, -3)\\), \\(Q(4, 5)\\), and \\(R(8, -1)\\). Answer the following sub-questions.\na) Find the coordinates of \\(S\\), the midpoint of \\(PQ\\).",
    "opts": [
      "\\((3, 1)\\)",
      "\\((3, 1) + 1\\)",
      "\\(\\dfrac{12}{5}\\)",
      "\\(\\dfrac{13}{6}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\((3, 1)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Parallel and perpendicular straight lines: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(S = \\left(\\frac{2+4}{2}, \\frac{-3+5}{2}\\right) = (3, 1)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\((3, 1)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (3, 1). Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\((3, 1)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11g-q15b",
    "topicId": "y9-11g",
    "c": "11G",
    "t": "Parallel and perpendicular straight lines",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "The coordinates of the vertices of \\(\\Delta PQR\\) are \\(P(2, -3)\\), \\(Q(4, 5)\\), and \\(R(8, -1)\\). Answer the following sub-questions.\nb) Find the gradient of \\(SR\\).",
    "opts": [
      "\\(-0.4\\)",
      "\\(-1.4\\)",
      "\\(0.4\\)",
      "\\(0.6\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(-0.4\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Parallel and perpendicular straight lines: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(m = \\frac{-1 - 1}{8 - 3} = -0.4\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(-0.4\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: -0.4. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(-0.4\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11g-q15c",
    "topicId": "y9-11g",
    "c": "11G",
    "t": "Parallel and perpendicular straight lines",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "The coordinates of the vertices of \\(\\Delta PQR\\) are \\(P(2, -3)\\), \\(Q(4, 5)\\), and \\(R(8, -1)\\). Answer the following sub-questions.\nc) Find the equation of the line \\(SR\\).",
    "opts": [
      "\\(\\dfrac{13}{6}\\)",
      "\\(y = -2/5x + 11/5\\)",
      "\\(y = -2/5x + 11/5 + 1\\)",
      "\\(y = -3/5x + 11/5\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is \\(y = -2/5x + 11/5\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Parallel and perpendicular straight lines: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(y - 1 = -\\frac{2}{5}(x - 3) \\implies y = -\\frac{2}{5}x + \\frac{11}{5}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(y = -2/5x + 11/5\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y = -2/5x + 11/5. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(y = -2/5x + 11/5\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11g-q15d",
    "topicId": "y9-11g",
    "c": "11G",
    "t": "Parallel and perpendicular straight lines",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "The coordinates of the vertices of \\(\\Delta PQR\\) are \\(P(2, -3)\\), \\(Q(4, 5)\\), and \\(R(8, -1)\\). Answer the following sub-questions.\nd) Find the equations of the other two medians of the triangle. (Format: y = 5/4x - 11/2; y = -7x + 33)",
    "opts": [
      "\\(\\dfrac{13}{6}\\)",
      "\\(y = 5/4x - 11/2; y = -7x + 33\\)",
      "\\(y = 5/4x - 11/2; y = -7x + 33 + 1\\)",
      "\\(y = 5/4x - 11/3; y = -7x + 33\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is \\(y = 5/4x - 11/2; y = -7x + 33\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Parallel and perpendicular straight lines: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(y - 2 = \\frac{5}{4}(x - 6) \\implies y = \\frac{5}{4}x - \\frac{11}{2}; \\quad y - 5 = -7(x - 4) \\implies y = -7x + 33\\)",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -6,
              6,
              6,
              -6
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-6,0],[6,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-6],[0,6]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.28, -2.0999999999999996, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.4, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return (-7)*x + (+33); }, -5.5, 5.5], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [2.2, 3.5, 'y = -7x++33'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(y = 5/4x - 11/2; y = -7x + 33\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y = 5/4x - 11/2; y = -7x + 33. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(y = 5/4x - 11/2; y = -7x + 33\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 360,
        "height": 280,
        "boundingbox": [
          -6,
          6,
          6,
          -6
        ],
        "script": "board.suspendUpdate(); board.create('arrow', [[-6,0],[6,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-6],[0,6]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.28, -2.0999999999999996, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.4, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return (-7)*x + (+33); }, -5.5, 5.5], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [2.2, 3.5, 'y = -7x++33'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11g-q15e",
    "topicId": "y9-11g",
    "c": "11G",
    "t": "Parallel and perpendicular straight lines",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "The coordinates of the vertices of \\(\\Delta PQR\\) are \\(P(2, -3)\\), \\(Q(4, 5)\\), and \\(R(8, -1)\\). Answer the following sub-questions.\ne) Find the gradient of \\(PQ\\).",
    "opts": [
      "\\(-4\\)",
      "\\(3\\)",
      "\\(4\\)",
      "\\(5\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "",
    "solution": "The correct answer is \\(4\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Parallel and perpendicular straight lines: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(m = \\frac{5 - (-3)}{4 - 2} = 4\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(4\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 4. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(4\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11g-q15f",
    "topicId": "y9-11g",
    "c": "11G",
    "t": "Parallel and perpendicular straight lines",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "The coordinates of the vertices of \\(\\Delta PQR\\) are \\(P(2, -3)\\), \\(Q(4, 5)\\), and \\(R(8, -1)\\). Answer the following sub-questions.\nf) Find the equation of the perpendicular bisector of \\(PQ\\).",
    "opts": [
      "\\(\\dfrac{12}{5}\\)",
      "\\(\\dfrac{13}{6}\\)",
      "\\(y = -1/4x + 7/4\\)",
      "\\(y = -1/4x + 7/4 + 1\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "",
    "solution": "The correct answer is \\(y = -1/4x + 7/4\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Parallel and perpendicular straight lines: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(y - 1 = -\\frac{1}{4}(x - 3) \\implies y = -\\frac{1}{4}x + \\frac{7}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(y = -1/4x + 7/4\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y = -1/4x + 7/4. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(y = -1/4x + 7/4\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11g-q15g",
    "topicId": "y9-11g",
    "c": "11G",
    "t": "Parallel and perpendicular straight lines",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "The coordinates of the vertices of \\(\\Delta PQR\\) are \\(P(2, -3)\\), \\(Q(4, 5)\\), and \\(R(8, -1)\\). Answer the following sub-questions.\ng) Find the equation of the perpendicular bisector of the side \\(QR\\).",
    "opts": [
      "\\(\\dfrac{13}{6}\\)",
      "\\(y = 2/3x - 2\\)",
      "\\(y = 2/3x - 2 + 1\\)",
      "\\(y = 3/3x - 3\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is \\(y = 2/3x - 2\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Parallel and perpendicular straight lines: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(y - 2 = \\frac{2}{3}(x - 6) \\implies y = \\frac{2}{3}x - 2\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(y = 2/3x - 2\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y = 2/3x - 2. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(y = 2/3x - 2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11g-q15h",
    "topicId": "y9-11g",
    "c": "11G",
    "t": "Parallel and perpendicular straight lines",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "The coordinates of the vertices of \\(\\Delta PQR\\) are \\(P(2, -3)\\), \\(Q(4, 5)\\), and \\(R(8, -1)\\). Answer the following sub-questions.\nh) Find the equation of the perpendicular bisector of the side \\(PR\\).",
    "opts": [
      "\\(\\dfrac{12}{5}\\)",
      "\\(\\dfrac{13}{6}\\)",
      "\\(y = -3x + 13\\)",
      "\\(y = -3x + 13 + 1\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "",
    "solution": "The correct answer is \\(y = -3x + 13\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Parallel and perpendicular straight lines: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(y - (-2) = -3(x - 5) \\implies y = -3x + 13\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(y = -3x + 13\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y = -3x + 13. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(y = -3x + 13\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11g-q16a",
    "topicId": "y9-11g",
    "c": "11G",
    "t": "Parallel and perpendicular straight lines",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "In triangle \\(ABC\\), the altitude through \\(A\\) is the line through \\(A\\) perpendicular to \\(BC\\). The coordinates of the vertices of the triangle are \\(A(1, 2)\\), \\(B(5, 8)\\), and \\(C(7, 0)\\). Answer the following sub-questions.\na) Find the equation of the altitude through \\(C\\).",
    "opts": [
      "\\(\\dfrac{13}{6}\\)",
      "\\(y = -2/3x + 14/3\\)",
      "\\(y = -2/3x + 14/3 + 1\\)",
      "\\(y = -3/3x + 14/3\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is \\(y = -2/3x + 14/3\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Parallel and perpendicular straight lines: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(y - 0 = -\\frac{2}{3}(x - 7) \\implies y = -\\frac{2}{3}x + \\frac{14}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(y = -2/3x + 14/3\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y = -2/3x + 14/3. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(y = -2/3x + 14/3\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11g-q16b",
    "topicId": "y9-11g",
    "c": "11G",
    "t": "Parallel and perpendicular straight lines",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "In triangle \\(ABC\\), the altitude through \\(A\\) is the line through \\(A\\) perpendicular to \\(BC\\). The coordinates of the vertices of the triangle are \\(A(1, 2)\\), \\(B(5, 8)\\), and \\(C(7, 0)\\). Answer the following sub-questions.\nb) Find the equation of the altitude through \\(B\\).",
    "opts": [
      "\\(\\dfrac{12}{5}\\)",
      "\\(\\dfrac{13}{6}\\)",
      "\\(y = 3x - 7\\)",
      "\\(y = 3x - 7 + 1\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "",
    "solution": "The correct answer is \\(y = 3x - 7\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Parallel and perpendicular straight lines: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(y - 8 = 3(x - 5) \\implies y = 3x - 7\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(y = 3x - 7\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y = 3x - 7. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(y = 3x - 7\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11g-q16c",
    "topicId": "y9-11g",
    "c": "11G",
    "t": "Parallel and perpendicular straight lines",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "In triangle \\(ABC\\), the altitude through \\(A\\) is the line through \\(A\\) perpendicular to \\(BC\\). The coordinates of the vertices of the triangle are \\(A(1, 2)\\), \\(B(5, 8)\\), and \\(C(7, 0)\\). Answer the following sub-questions.\nc) Find the equation of the altitude through \\(A\\).",
    "opts": [
      "\\(\\dfrac{12}{5}\\)",
      "\\(\\dfrac{13}{6}\\)",
      "\\(y = 1/4x + 7/4\\)",
      "\\(y = 1/4x + 7/4 + 1\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "",
    "solution": "The correct answer is \\(y = 1/4x + 7/4\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Parallel and perpendicular straight lines: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(y - 2 = \\frac{1}{4}(x - 1) \\implies y = \\frac{1}{4}x + \\frac{7}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(y = 1/4x + 7/4\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y = 1/4x + 7/4. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(y = 1/4x + 7/4\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11g-q17a",
    "topicId": "y9-11g",
    "c": "11G",
    "t": "Parallel and perpendicular straight lines",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Adjacent vertices of a square \\(ABCD\\) are \\(A(4, 5)\\) and \\(B(5, 7)\\). Answer the following sub-questions.\na) Find the length of each side of the square.",
    "opts": [
      "\\(\\dfrac{12}{5}\\)",
      "\\(\\dfrac{13}{6}\\)",
      "\\(\\sqrt{5}\\)",
      "\\(\\sqrt{5} + 1\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "",
    "solution": "The correct answer is \\(\\sqrt{5}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Parallel and perpendicular straight lines: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(AB = \\sqrt{(5-4)^2 + (7-5)^2} = \\sqrt{5}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\sqrt{5}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\sqrt{5}. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(\\sqrt{5}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11g-q17b",
    "topicId": "y9-11g",
    "c": "11G",
    "t": "Parallel and perpendicular straight lines",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Adjacent vertices of a square \\(ABCD\\) are \\(A(4, 5)\\) and \\(B(5, 7)\\). Answer the following sub-questions.\nb) Find the gradient of \\(AB\\).",
    "answer": "2",
    "hint": "",
    "solution": "2",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Parallel and perpendicular straight lines: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(m = \\frac{7 - 5}{5 - 4} = 2\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(2\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 2. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-11g-q17c",
    "topicId": "y9-11g",
    "c": "11G",
    "t": "Parallel and perpendicular straight lines",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Adjacent vertices of a square \\(ABCD\\) are \\(A(4, 5)\\) and \\(B(5, 7)\\). Answer the following sub-questions.\nc) Find the gradient of \\(BC\\).",
    "opts": [
      "\\(-1/2\\)",
      "\\(-1\\)",
      "\\(-1.5\\)",
      "\\(0.5\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(-1/2\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Parallel and perpendicular straight lines: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(m = -\\frac{1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(-1/2\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: -1/2. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(-1/2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11g-q17d",
    "topicId": "y9-11g",
    "c": "11G",
    "t": "Parallel and perpendicular straight lines",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Adjacent vertices of a square \\(ABCD\\) are \\(A(4, 5)\\) and \\(B(5, 7)\\). Answer the following sub-questions.\nd) The coordinates of \\(C\\) are \\((7, c)\\). Find the value of \\(c\\).",
    "opts": [
      "\\(-6\\)",
      "\\(5\\)",
      "\\(6\\)",
      "\\(7\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "",
    "solution": "The correct answer is \\(6\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Parallel and perpendicular straight lines: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(\\frac{c - 7}{7 - 5} = -\\frac{1}{2} \\implies c - 7 = -1 \\implies c = 6\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(6\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 6. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(6\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-11g-q17e",
    "topicId": "y9-11g",
    "c": "11G",
    "t": "Parallel and perpendicular straight lines",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Adjacent vertices of a square \\(ABCD\\) are \\(A(4, 5)\\) and \\(B(5, 7)\\). Answer the following sub-questions.\ne) Find the coordinates of \\(D\\).",
    "opts": [
      "\\((6, 4)\\)",
      "\\((6, 4) + 1\\)",
      "\\(\\dfrac{12}{5}\\)",
      "\\(\\dfrac{13}{6}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\((6, 4)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Parallel and perpendicular straight lines: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(D = (4 + 2, 5 - 1) = (6, 4)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\((6, 4)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (6, 4). Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\((6, 4)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  }
];
