export const Y10_CH7H_QUESTIONS = [
  {
    "id": "y10-7h-q1a",
    "topicId": "y10-7h",
    "c": "7H",
    "t": "Revision",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the \\( x \\)-intercepts of the graph for the equation \\( y = x^2 + 5x + 4 \\).",
    "opts": [
      "\\(-1, -4\\)",
      "\\(-1, -4 + 1\\)",
      "\\(1, -4\\)",
      "\\(\\dfrac{13}{6}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(-1, -4\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Revision: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(x^2 + 5x + 4 = 0\\)",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -5,
              8,
              5,
              -2
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-5,0],[5,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-2],[0,8]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [4.4, -0.7, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 7.2, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return x*x; }, -4.2, 4.2], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.6, 5.5, 'y = x²'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\((x + 1)(x + 4) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(x = -1 \\text{ or } x = -4\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: -1, -4. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(-1, -4\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 360,
        "height": 280,
        "boundingbox": [
          -5,
          8,
          5,
          -2
        ],
        "script": "board.suspendUpdate(); board.create('arrow', [[-5,0],[5,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-2],[0,8]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [4.4, -0.7, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 7.2, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return x*x; }, -4.2, 4.2], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.6, 5.5, 'y = x²'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-7h-q1b",
    "topicId": "y10-7h",
    "c": "7H",
    "t": "Revision",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the \\( x \\)-intercepts of the graph for the equation \\( y = 3x^2 - 10x - 8 \\).",
    "opts": [
      "\\(-2/3, 4\\)",
      "\\(-1.0588235294117647\\)",
      "\\(0.058823529411764705\\)",
      "\\(0.9411764705882353\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(-2/3, 4\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Revision: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(3x^2 - 10x - 8 = 0\\)",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -5,
              8,
              5,
              -2
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-5,0],[5,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-2],[0,8]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [4.4, -0.7, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 7.2, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return x*x; }, -4.2, 4.2], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.6, 5.5, 'y = x²'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\((3x + 2)(x - 4) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(x = -\\frac{2}{3} \\text{ or } x = 4\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: -2/3, 4. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(-2/3, 4\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 360,
        "height": 280,
        "boundingbox": [
          -5,
          8,
          5,
          -2
        ],
        "script": "board.suspendUpdate(); board.create('arrow', [[-5,0],[5,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-2],[0,8]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [4.4, -0.7, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 7.2, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return x*x; }, -4.2, 4.2], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.6, 5.5, 'y = x²'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-7h-q1c",
    "topicId": "y10-7h",
    "c": "7H",
    "t": "Revision",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the \\( x \\)-intercepts of the graph for the equation \\( y = (x + 5)^2 - 4 \\).",
    "opts": [
      "\\(-3, -7\\)",
      "\\(-3, -7 + 1\\)",
      "\\(3, -7\\)",
      "\\(\\dfrac{13}{6}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(-3, -7\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Revision: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\((x + 5)^2 - 4 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\((x + 5)^2 = 4\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(x + 5 = \\pm 2\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: -3, -7. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(-3, -7\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-7h-q1d",
    "topicId": "y10-7h",
    "c": "7H",
    "t": "Revision",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find the \\( x \\)-intercepts of the graph for the equation \\( y = 2(x - 3)^2 - 8 \\).",
    "opts": [
      "\\(-15\\)",
      "\\(14\\)",
      "\\(1, 5\\)",
      "\\(16\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "",
    "solution": "The correct answer is \\(1, 5\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Revision: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(2(x - 3)^2 - 8 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\((x - 3)^2 = 4\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(x - 3 = \\pm 2\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 1, 5. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(1, 5\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-7h-q2a",
    "topicId": "y10-7h",
    "c": "7H",
    "t": "Revision",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Express the equation \\( y = x^2 + 8x + 5 \\) in the form \\( y = a(x - h)^2 + k \\), and hence state the coordinates of the vertex.",
    "opts": [
      "\\((-4, -11)\\)",
      "\\((-4, -11) + 1\\)",
      "\\(\\dfrac{12}{5}\\)",
      "\\(\\dfrac{13}{6}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\((-4, -11)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Revision: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(y = (x^2 + 8x + 16) - 16 + 5\\)",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -5,
              8,
              5,
              -2
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-5,0],[5,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-2],[0,8]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [4.4, -0.7, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 7.2, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return x*x; }, -4.2, 4.2], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.6, 5.5, 'y = x²'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(y = (x + 4)^2 - 11\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\((-4, -11)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (-4, -11). Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\((-4, -11)\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 360,
        "height": 280,
        "boundingbox": [
          -5,
          8,
          5,
          -2
        ],
        "script": "board.suspendUpdate(); board.create('arrow', [[-5,0],[5,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-2],[0,8]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [4.4, -0.7, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 7.2, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return x*x; }, -4.2, 4.2], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.6, 5.5, 'y = x²'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-7h-q2b",
    "topicId": "y10-7h",
    "c": "7H",
    "t": "Revision",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Express the equation \\( y = x^2 - 6x + 4 \\) in the form \\( y = a(x - h)^2 + k \\), and hence state the coordinates of the vertex.",
    "opts": [
      "\\((3, -5)\\)",
      "\\((3, -5) + 1\\)",
      "\\(\\dfrac{12}{5}\\)",
      "\\(\\dfrac{13}{6}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\((3, -5)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Revision: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(y = (x^2 - 6x + 9) - 9 + 4\\)",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -5,
              8,
              5,
              -2
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-5,0],[5,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-2],[0,8]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [4.4, -0.7, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 7.2, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return x*x; }, -4.2, 4.2], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.6, 5.5, 'y = x²'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(y = (x - 3)^2 - 5\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\((3, -5)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (3, -5). Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\((3, -5)\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 360,
        "height": 280,
        "boundingbox": [
          -5,
          8,
          5,
          -2
        ],
        "script": "board.suspendUpdate(); board.create('arrow', [[-5,0],[5,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-2],[0,8]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [4.4, -0.7, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 7.2, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return x*x; }, -4.2, 4.2], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.6, 5.5, 'y = x²'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-7h-q2c",
    "topicId": "y10-7h",
    "c": "7H",
    "t": "Revision",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Express the equation \\( y = 2x^2 + 8x + 3 \\) in the form \\( y = a(x - h)^2 + k \\), and hence state the coordinates of the vertex.",
    "opts": [
      "\\((-2, -5)\\)",
      "\\((-2, -5) + 1\\)",
      "\\((-3, -5)\\)",
      "\\(\\dfrac{13}{6}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\((-2, -5)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Revision: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(y = 2(x^2 + 4x) + 3\\)",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -5,
              8,
              5,
              -2
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-5,0],[5,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-2],[0,8]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [4.4, -0.7, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 7.2, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return x*x; }, -4.2, 4.2], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.6, 5.5, 'y = x²'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(y = 2(x^2 + 4x + 4 - 4) + 3\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(y = 2(x + 2)^2 - 8 + 3 = 2(x + 2)^2 - 5\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (-2, -5). Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\((-2, -5)\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 360,
        "height": 280,
        "boundingbox": [
          -5,
          8,
          5,
          -2
        ],
        "script": "board.suspendUpdate(); board.create('arrow', [[-5,0],[5,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-2],[0,8]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [4.4, -0.7, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 7.2, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return x*x; }, -4.2, 4.2], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.6, 5.5, 'y = x²'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-7h-q2d",
    "topicId": "y10-7h",
    "c": "7H",
    "t": "Revision",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Express the equation \\( y = 3x^2 + 12x + 5 \\) in the form \\( y = a(x - h)^2 + k \\), and hence state the coordinates of the vertex.",
    "opts": [
      "\\((-2, -7)\\)",
      "\\((-2, -7) + 1\\)",
      "\\((-3, -7)\\)",
      "\\(\\dfrac{13}{6}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\((-2, -7)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Revision: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(y = 3(x^2 + 4x) + 5\\)",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -5,
              8,
              5,
              -2
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-5,0],[5,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-2],[0,8]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [4.4, -0.7, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 7.2, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return x*x; }, -4.2, 4.2], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.6, 5.5, 'y = x²'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(y = 3(x^2 + 4x + 4 - 4) + 5\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(y = 3(x + 2)^2 - 12 + 5 = 3(x + 2)^2 - 7\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (-2, -7). Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\((-2, -7)\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 360,
        "height": 280,
        "boundingbox": [
          -5,
          8,
          5,
          -2
        ],
        "script": "board.suspendUpdate(); board.create('arrow', [[-5,0],[5,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-2],[0,8]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [4.4, -0.7, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 7.2, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return x*x; }, -4.2, 4.2], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.6, 5.5, 'y = x²'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-7h-q3a",
    "topicId": "y10-7h",
    "c": "7H",
    "t": "Revision",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "A parabola has \\( x \\)-intercepts \\( -2 \\) and \\( 5 \\), and \\( y \\)-intercept \\( 10 \\). Find the equation of the parabola.",
    "opts": [
      "\\(\\dfrac{13}{6}\\)",
      "\\(y = -x^2 + 3x + 10\\)",
      "\\(y = -x^2 + 3x + 10 + 1\\)",
      "\\(y = -x^3 + 3x + 10\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is \\(y = -x^2 + 3x + 10\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Revision: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(y = a(x + 2)(x - 5)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(10 = a(2)(-5) = -10a \\Rightarrow a = -1\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(y = -(x^2 - 3x - 10) = -x^2 + 3x + 10\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y = -x^2 + 3x + 10. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(y = -x^2 + 3x + 10\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-7h-q3b",
    "topicId": "y10-7h",
    "c": "7H",
    "t": "Revision",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "A parabola has \\( x \\)-intercepts \\( 2 \\) and \\( 6 \\), and passes through the point \\( (1, 10) \\). Find the equation of the parabola.",
    "opts": [
      "\\(\\dfrac{13}{6}\\)",
      "\\(y = 2x^2 - 16x + 24\\)",
      "\\(y = 2x^2 - 16x + 24 + 1\\)",
      "\\(y = 3x^3 - 16x + 34\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is \\(y = 2x^2 - 16x + 24\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Revision: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(y = a(x - 2)(x - 6)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(10 = a(1 - 2)(1 - 6) = 5a \\Rightarrow a = 2\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(y = 2(x^2 - 8x + 12) = 2x^2 - 16x + 24\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y = 2x^2 - 16x + 24. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(y = 2x^2 - 16x + 24\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-7h-q4a",
    "topicId": "y10-7h",
    "c": "7H",
    "t": "Revision",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "A parabola has vertex \\( (4, -3) \\) and \\( y \\)-intercept \\( 13 \\). Find the equation of the parabola.",
    "opts": [
      "\\(\\dfrac{13}{6}\\)",
      "\\(y = x^2 - 8x + 13\\)",
      "\\(y = x^2 - 8x + 13 + 1\\)",
      "\\(y = x^3 - 8x + 13\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is \\(y = x^2 - 8x + 13\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Revision: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(y = a(x - 4)^2 - 3\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(13 = 16a - 3 \\Rightarrow a = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(y = x^2 - 8x + 13\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y = x^2 - 8x + 13. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(y = x^2 - 8x + 13\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-7h-q4b",
    "topicId": "y10-7h",
    "c": "7H",
    "t": "Revision",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "A parabola has vertex \\( (3, 6) \\) and passes through the point \\( (1, -2) \\). Find the equation of the parabola.",
    "opts": [
      "\\(\\dfrac{13}{6}\\)",
      "\\(y = -2x^2 + 12x - 12\\)",
      "\\(y = -2x^2 + 12x - 12 + 1\\)",
      "\\(y = -3x^3 + 13x - 13\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is \\(y = -2x^2 + 12x - 12\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Revision: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(y = a(x - 3)^2 + 6\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(-2 = 4a + 6 \\Rightarrow a = -2\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(y = -2x^2 + 12x - 12\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y = -2x^2 + 12x - 12. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(y = -2x^2 + 12x - 12\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-7h-q5a",
    "topicId": "y10-7h",
    "c": "7H",
    "t": "Revision",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Write the equation of the parabola obtained when the graph of \\( y = x^2 \\) is stretched by a factor of 2 from the \\( x \\)-axis and translated 3 units to the right.",
    "opts": [
      "\\(\\dfrac{13}{6}\\)",
      "\\(y = 2(x - 3)^2\\)",
      "\\(y = 2(x - 3)^2 + 1\\)",
      "\\(y = 3(x - 3)^3\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is \\(y = 2(x - 3)^2\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Revision: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(y = 2x^2\\)",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -5,
              8,
              5,
              -2
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-5,0],[5,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-2],[0,8]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [4.4, -0.7, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 7.2, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return x*x; }, -4.2, 4.2], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.6, 5.5, 'y = x²'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(y = 2(x - 3)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(y = 2(x - 3)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y = 2(x - 3)^2. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(y = 2(x - 3)^2\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 360,
        "height": 280,
        "boundingbox": [
          -5,
          8,
          5,
          -2
        ],
        "script": "board.suspendUpdate(); board.create('arrow', [[-5,0],[5,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-2],[0,8]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [4.4, -0.7, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 7.2, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return x*x; }, -4.2, 4.2], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.6, 5.5, 'y = x²'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-7h-q5b",
    "topicId": "y10-7h",
    "c": "7H",
    "t": "Revision",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Write the equation of the parabola obtained when the graph of \\( y = x^2 \\) is reflected in the \\( x \\)-axis and then translated 2 units to the left and 4 units up.",
    "opts": [
      "\\(\\dfrac{13}{6}\\)",
      "\\(y = -(x + 2)^2 + 4\\)",
      "\\(y = -(x + 2)^2 + 4 + 1\\)",
      "\\(y = -(x + 3)^3 + 4\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is \\(y = -(x + 2)^2 + 4\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Revision: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(y = -x^2\\)",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -5,
              8,
              5,
              -2
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-5,0],[5,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-2],[0,8]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [4.4, -0.7, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 7.2, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return x*x; }, -4.2, 4.2], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.6, 5.5, 'y = x²'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(y = -(x + 2)^2 + 4\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(y = -(x + 2)^2 + 4\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y = -(x + 2)^2 + 4. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(y = -(x + 2)^2 + 4\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 360,
        "height": 280,
        "boundingbox": [
          -5,
          8,
          5,
          -2
        ],
        "script": "board.suspendUpdate(); board.create('arrow', [[-5,0],[5,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-2],[0,8]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [4.4, -0.7, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 7.2, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return x*x; }, -4.2, 4.2], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.6, 5.5, 'y = x²'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-7h-q5c",
    "topicId": "y10-7h",
    "c": "7H",
    "t": "Revision",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Write the equation of the parabola obtained when the graph of \\( y = x^2 \\) is translated 4 units to the right and 5 units down.",
    "opts": [
      "\\(\\dfrac{13}{6}\\)",
      "\\(y = (x - 4)^2 - 5\\)",
      "\\(y = (x - 4)^2 - 5 + 1\\)",
      "\\(y = (x - 4)^3 - 5\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is \\(y = (x - 4)^2 - 5\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Revision: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(y = (x - 4)^2 - 5\\)",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -5,
              8,
              5,
              -2
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-5,0],[5,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-2],[0,8]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [4.4, -0.7, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 7.2, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return x*x; }, -4.2, 4.2], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.6, 5.5, 'y = x²'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
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
        "workingOut": "\\(y = (x - 4)^2 - 5\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y = (x - 4)^2 - 5. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(y = (x - 4)^2 - 5\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 360,
        "height": 280,
        "boundingbox": [
          -5,
          8,
          5,
          -2
        ],
        "script": "board.suspendUpdate(); board.create('arrow', [[-5,0],[5,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-2],[0,8]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [4.4, -0.7, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 7.2, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return x*x; }, -4.2, 4.2], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.6, 5.5, 'y = x²'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-7h-q6a",
    "topicId": "y10-7h",
    "c": "7H",
    "t": "Revision",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Sketch the graph of \\( y = x^2 - 4x + 3 \\), labelling the vertex, axis of symmetry and the intercepts.",
    "answer": "",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Revision: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "Identify given data",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -5,
              8,
              5,
              -2
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-5,0],[5,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-2],[0,8]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [4.4, -0.7, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 7.2, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return x*x; }, -4.2, 4.2], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.6, 5.5, 'y = x²'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
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
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Final answer: . Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 360,
        "height": 280,
        "boundingbox": [
          -5,
          8,
          5,
          -2
        ],
        "script": "board.suspendUpdate(); board.create('arrow', [[-5,0],[5,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-2],[0,8]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [4.4, -0.7, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 7.2, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return x*x; }, -4.2, 4.2], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.6, 5.5, 'y = x²'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y10-7h-q6b",
    "topicId": "y10-7h",
    "c": "7H",
    "t": "Revision",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Sketch the graph of \\( y = -x^2 - 2x + 8 \\), labelling the vertex, axis of symmetry and the intercepts.",
    "answer": "",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Revision: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "Identify given data",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -5,
              8,
              5,
              -2
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-5,0],[5,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-2],[0,8]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [4.4, -0.7, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 7.2, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return x*x; }, -4.2, 4.2], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.6, 5.5, 'y = x²'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
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
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Final answer: . Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 360,
        "height": 280,
        "boundingbox": [
          -5,
          8,
          5,
          -2
        ],
        "script": "board.suspendUpdate(); board.create('arrow', [[-5,0],[5,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-2],[0,8]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [4.4, -0.7, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 7.2, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return x*x; }, -4.2, 4.2], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.6, 5.5, 'y = x²'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y10-7h-q6c",
    "topicId": "y10-7h",
    "c": "7H",
    "t": "Revision",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Sketch the graph of \\( y = 9 - x^2 \\), labelling the vertex, axis of symmetry and the intercepts.",
    "answer": "",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Revision: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "Identify given data",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -5,
              8,
              5,
              -2
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-5,0],[5,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-2],[0,8]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [4.4, -0.7, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 7.2, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return x*x; }, -4.2, 4.2], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.6, 5.5, 'y = x²'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
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
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Final answer: . Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 360,
        "height": 280,
        "boundingbox": [
          -5,
          8,
          5,
          -2
        ],
        "script": "board.suspendUpdate(); board.create('arrow', [[-5,0],[5,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-2],[0,8]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [4.4, -0.7, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 7.2, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return x*x; }, -4.2, 4.2], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.6, 5.5, 'y = x²'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y10-7h-q6d",
    "topicId": "y10-7h",
    "c": "7H",
    "t": "Revision",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Sketch the graph of \\( y = (x + 2)^2 \\), labelling the vertex, axis of symmetry and the intercepts.",
    "answer": "",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Revision: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "Identify given data",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Final answer: . Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y10-7h-q6e",
    "topicId": "y10-7h",
    "c": "7H",
    "t": "Revision",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Sketch the graph of \\( y = (x - 2)^2 - 9 \\), labelling the vertex, axis of symmetry and the intercepts.",
    "answer": "",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Revision: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "Identify given data",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Final answer: . Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y10-7h-q6f",
    "topicId": "y10-7h",
    "c": "7H",
    "t": "Revision",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Sketch the graph of \\( y = x^2 - 4 \\), labelling the vertex, axis of symmetry and the intercepts.",
    "answer": "",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Revision: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "Identify given data",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -5,
              8,
              5,
              -2
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-5,0],[5,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-2],[0,8]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [4.4, -0.7, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 7.2, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return x*x; }, -4.2, 4.2], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.6, 5.5, 'y = x²'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
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
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Final answer: . Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 360,
        "height": 280,
        "boundingbox": [
          -5,
          8,
          5,
          -2
        ],
        "script": "board.suspendUpdate(); board.create('arrow', [[-5,0],[5,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-2],[0,8]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [4.4, -0.7, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 7.2, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return x*x; }, -4.2, 4.2], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.6, 5.5, 'y = x²'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y10-7h-q7a",
    "topicId": "y10-7h",
    "c": "7H",
    "t": "Revision",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "For the graph with equation \\( y = 2x^2 - 4x - 6 \\), find the coordinates of the:\na) vertex",
    "opts": [
      "\\((1, -8)\\)",
      "\\((1, -8) + 1\\)",
      "\\(\\dfrac{12}{5}\\)",
      "\\(\\dfrac{13}{6}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\((1, -8)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Revision: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(y = 2(x^2 - 2x) - 6\\)",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -5,
              8,
              5,
              -2
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-5,0],[5,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-2],[0,8]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [4.4, -0.7, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 7.2, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return x*x; }, -4.2, 4.2], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.6, 5.5, 'y = x²'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(y = 2(x - 1)^2 - 8\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\((1, -8)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (1, -8). Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\((1, -8)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-7h-q7b",
    "topicId": "y10-7h",
    "c": "7H",
    "t": "Revision",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "For the graph with equation \\( y = 2x^2 - 4x - 6 \\), find the coordinates of the:\nb) \\( x \\)-intercepts",
    "opts": [
      "\\(-12\\)",
      "\\(-1, 3\\)",
      "\\(-14\\)",
      "\\(13\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is \\(-1, 3\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Revision: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(2x^2 - 4x - 6 = 0\\)",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -5,
              8,
              5,
              -2
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-5,0],[5,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-2],[0,8]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [4.4, -0.7, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 7.2, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return x*x; }, -4.2, 4.2], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.6, 5.5, 'y = x²'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(x^2 - 2x - 3 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\((x - 3)(x + 1) = 0 \\Rightarrow x = 3, -1\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: -1, 3. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(-1, 3\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-7h-q8a",
    "topicId": "y10-7h",
    "c": "7H",
    "t": "Revision",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "A gardener is planning to establish a vegetable garden. The garden will have a wooden border and two wooden dividers to form three partitions. Thirty-two metres of timber is used for the border and the dividers. Let \\( x \\) m be the length of the dividers and two of the sides of the garden.\na) Express the other side length of the garden in terms of \\( x \\).",
    "opts": [
      "\\(-16 - 2x\\)",
      "\\(16 - 2x\\)",
      "\\(16 - 2x + 1\\)",
      "\\(16 - 3x\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is \\(16 - 2x\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Revision: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(4x + 2y = 32\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(y = 16 - 2x\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(16 - 2x\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 16 - 2x. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(16 - 2x\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-7h-q8b",
    "topicId": "y10-7h",
    "c": "7H",
    "t": "Revision",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "A gardener is planning to establish a vegetable garden. The garden will have a wooden border and two wooden dividers to form three partitions. Thirty-two metres of timber is used for the border and the dividers. Let \\( x \\) m be the length of the dividers and two of the sides of the garden.\nb) Let \\( A \\) m\\(^2\\) be the area of the garden. Write an equation for \\( A \\) in terms of \\( x \\).",
    "opts": [
      "\\(\\dfrac{13}{6}\\)",
      "\\(A = 16x - 2x^2\\)",
      "\\(A = 16x - 2x^2 + 1\\)",
      "\\(A = 16x - 3x^3\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is \\(A = 16x - 2x^2\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Revision: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(A = x(16 - 2x) = 16x - 2x^2\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(A = 16x - 2x^2\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: A = 16x - 2x^2. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(A = 16x - 2x^2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-7h-q8c",
    "topicId": "y10-7h",
    "c": "7H",
    "t": "Revision",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "A gardener is planning to establish a vegetable garden. The garden will have a wooden border and two wooden dividers to form three partitions. Thirty-two metres of timber is used for the border and the dividers. Let \\( x \\) m be the length of the dividers and two of the sides of the garden.\nc) Find the length and width in order for the area to be a maximum.",
    "opts": [
      "length 8 m, width 4 m",
      "The opposite statement is true.",
      "This is only true for acute angles.",
      "This only holds when the triangle is isosceles."
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is length 8 m, width 4 m.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Revision: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(A = -2(x - 4)^2 + 32\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(\\text{Width } x = 4 \\text{ m}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(y = 16 - 2(4) = 8 \\text{ m}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: length 8 m, width 4 m. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "length 8 m, width 4 m",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-7h-q9a",
    "topicId": "y10-7h",
    "c": "7H",
    "t": "Revision",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Consider the quadratic equation \\( y = x^2 + 4x - 5 \\).\na) By expressing the equation in the form \\( y = a(x - h)^2 + k \\), find the turning point.",
    "opts": [
      "\\((-2, -9)\\)",
      "\\((-2, -9) + 1\\)",
      "\\((-3, -9)\\)",
      "\\(\\dfrac{13}{6}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\((-2, -9)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Revision: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(y = (x + 2)^2 - 9\\)",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -5,
              8,
              5,
              -2
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-5,0],[5,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-2],[0,8]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [4.4, -0.7, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 7.2, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return x*x; }, -4.2, 4.2], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.6, 5.5, 'y = x²'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\((-2, -9)\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\((-2, -9)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (-2, -9). Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\((-2, -9)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-7h-q9b",
    "topicId": "y10-7h",
    "c": "7H",
    "t": "Revision",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Consider the quadratic equation \\( y = x^2 + 4x - 5 \\).\nb) Find the points of intersection with the axes.",
    "opts": [
      "\\((0, -5), (-5, 0), (1, 0)\\)",
      "\\((0, -5), (-5, 0), (1, 0) + 1\\)",
      "\\(\\dfrac{12}{5}\\)",
      "\\(\\dfrac{13}{6}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\((0, -5), (-5, 0), (1, 0)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Revision: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(y = -5 \\Rightarrow (0, -5)\\)",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -5,
              8,
              5,
              -2
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-5,0],[5,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-2],[0,8]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [4.4, -0.7, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 7.2, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return x*x; }, -4.2, 4.2], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.6, 5.5, 'y = x²'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\((x + 5)(x - 1) = 0 \\Rightarrow x = -5, 1\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\((0, -5), (-5, 0), (1, 0)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (0, -5), (-5, 0), (1, 0). Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\((0, -5), (-5, 0), (1, 0)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-7h-q9c",
    "topicId": "y10-7h",
    "c": "7H",
    "t": "Revision",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 180,
    "question": "Consider the quadratic equation \\( y = x^2 + 4x - 5 \\).\nc) Sketch the graph, marking on your sketch the points found in a and b.",
    "answer": "",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Revision: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "Identify given data",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -5,
              8,
              5,
              -2
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-5,0],[5,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-2],[0,8]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [4.4, -0.7, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 7.2, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return x*x; }, -4.2, 4.2], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.6, 5.5, 'y = x²'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
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
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Final answer: . Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y10-7h-q9d",
    "topicId": "y10-7h",
    "c": "7H",
    "t": "Revision",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Consider the quadratic equation \\( y = x^2 + 4x - 5 \\).\nd) Solve \\( x^2 + 4x - 5 \\le 0 \\) for \\( x \\).",
    "opts": [
      "\\(-5 \\le x \\le 1\\)",
      "\\(-5 \\le x \\le 1 + 1\\)",
      "\\(5 \\le x \\le 1\\)",
      "\\(\\dfrac{13}{6}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(-5 \\le x \\le 1\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Revision: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(-5 \\le x \\le 1\\)",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -5,
              8,
              5,
              -2
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-5,0],[5,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-2],[0,8]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [4.4, -0.7, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 7.2, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return x*x; }, -4.2, 4.2], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.6, 5.5, 'y = x²'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
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
        "workingOut": "\\(-5 \\le x \\le 1\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: -5 \\le x \\le 1. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(-5 \\le x \\le 1\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-7h-q10a",
    "topicId": "y10-7h",
    "c": "7H",
    "t": "Revision",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 180,
    "question": "Consider the quadratic equation \\( y = 2x^2 - 4x - 6 \\).\na) Sketch the graph, labelling clearly the coordinates of the turning point and the points of intersection with the axes.",
    "answer": "",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Revision: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "Identify given data",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -5,
              8,
              5,
              -2
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-5,0],[5,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-2],[0,8]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [4.4, -0.7, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 7.2, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return x*x; }, -4.2, 4.2], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.6, 5.5, 'y = x²'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
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
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Final answer: . Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y10-7h-q10b",
    "topicId": "y10-7h",
    "c": "7H",
    "t": "Revision",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Consider the quadratic equation \\( y = 2x^2 - 4x - 6 \\).\nb) Solve \\( 2x^2 - 4x - 6 < 0 \\) for \\( x \\).",
    "opts": [
      "\\(-1 < x < 3\\)",
      "\\(-1 < x < 3 + 1\\)",
      "\\(1 < x < 3\\)",
      "\\(\\dfrac{13}{6}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(-1 < x < 3\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Revision: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "-1 < x < 3",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 280,
            "boundingbox": [
              -5,
              8,
              5,
              -2
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-5,0],[5,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-2],[0,8]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [4.4, -0.7, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 7.2, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return x*x; }, -4.2, 4.2], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.6, 5.5, 'y = x²'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
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
        "workingOut": "\\(-1 < x < 3\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: -1 < x < 3. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(-1 < x < 3\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-7h-q11a",
    "topicId": "y10-7h",
    "c": "7H",
    "t": "Revision",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Solve for \\( x \\): \\( x^2 + 2x < 15 \\)",
    "opts": [
      "\\(-5 < x < 3\\)",
      "\\(-5 < x < 3 + 1\\)",
      "\\(5 < x < 3\\)",
      "\\(\\dfrac{13}{6}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(-5 < x < 3\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Revision: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(x^2 + 2x - 15 < 0\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "(x + 5)(x - 3) < 0",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "-5 < x < 3",
        "graphData": null
      },
      {
        "explanation": "Final answer: -5 < x < 3. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(-5 < x < 3\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-7h-q11b",
    "topicId": "y10-7h",
    "c": "7H",
    "t": "Revision",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Solve for \\( x \\): \\( x^2 + 4x \\ge -3 \\)",
    "opts": [
      "\\(-x \\le -3 \\text{ or } x \\ge -1\\)",
      "\\(\\dfrac{13}{6}\\)",
      "\\(x \\le -3 \\text{ or } x \\ge -1\\)",
      "\\(x \\le -3 \\text{ or } x \\ge -1 + 1\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "",
    "solution": "The correct answer is \\(x \\le -3 \\text{ or } x \\ge -1\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Revision: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(x^2 + 4x + 3 \\ge 0\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\((x + 3)(x + 1) \\ge 0\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(x \\le -3 \\text{ or } x \\ge -1\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: x \\le -3 \\text{ or } x \\ge -1. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(x \\le -3 \\text{ or } x \\ge -1\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-7h-q11c",
    "topicId": "y10-7h",
    "c": "7H",
    "t": "Revision",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Solve for \\( x \\): \\( -x^2 + 2x + 24 \\le 0 \\)",
    "opts": [
      "\\(-x \\le -4 \\text{ or } x \\ge 6\\)",
      "\\(\\dfrac{13}{6}\\)",
      "\\(x \\le -4 \\text{ or } x \\ge 6\\)",
      "\\(x \\le -4 \\text{ or } x \\ge 6 + 1\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "",
    "solution": "The correct answer is \\(x \\le -4 \\text{ or } x \\ge 6\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Revision: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(x^2 - 2x - 24 \\ge 0\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\((x - 6)(x + 4) \\ge 0\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(x \\le -4 \\text{ or } x \\ge 6\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: x \\le -4 \\text{ or } x \\ge 6. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(x \\le -4 \\text{ or } x \\ge 6\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  }
];
