export const Y10_CH11C_QUESTIONS = [
  {
    "id": "1a",
    "topicId": "y10-11c",
    "c": "11C",
    "t": "Simultaneous equations",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the coordinates of the points of intersection of \\(y = x^2\\) and \\(y = 4\\)",
    "opts": [
      "\\((2, 4), (-2, 4)\\)",
      "No points of intersection",
      "\\(\\((2, 4), (-2, 4)\\) + 2\\)",
      "\\(\\((2, 4), (-2, 4)\\) + 3\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Equate the two expressions for y.",
    "solution": "\\(x^2 = 4 \\Rightarrow x = \\pm 2\\). Sub into \\(y=4\\) gives \\((2, 4)\\) and \\((-2, 4)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Simultaneous equations: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
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
        "workingOut": "\\((2, 4), (-2, 4)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (2, 4), (-2, 4). Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\((2, 4), (-2, 4)\\)",
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
    "id": "1b",
    "topicId": "y10-11c",
    "c": "11C",
    "t": "Simultaneous equations",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the coordinates of the points of intersection of \\(y = x^2\\) and \\(y = 1\\)",
    "opts": [
      "\\((1, 1), (-1, 1)\\)",
      "No points of intersection",
      "\\(\\((1, 1), (-1, 1)\\) + 2\\)",
      "\\(\\((1, 1), (-1, 1)\\) + 3\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Equate the two expressions for y.",
    "solution": "\\(x^2 = 1 \\Rightarrow x = \\pm 1\\). Sub into \\(y=1\\) gives \\((1, 1)\\) and \\((-1, 1)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Simultaneous equations: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
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
        "workingOut": "\\((1, 1), (-1, 1)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (1, 1), (-1, 1). Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\((1, 1), (-1, 1)\\)",
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
    "id": "1c",
    "topicId": "y10-11c",
    "c": "11C",
    "t": "Simultaneous equations",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the coordinates of the points of intersection of \\(y = (x - 1)^2\\) and \\(y = 2x - 3\\)",
    "opts": [
      "\\((2, 1)\\)",
      "No points of intersection",
      "\\(\\((2, 1)\\) + 2\\)",
      "\\(\\((2, 1)\\) + 3\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Expand \\((x-1)^2\\) and solve the resulting quadratic.",
    "solution": "\\((x-1)^2 = 2x-3 \\Rightarrow x^2-2x+1 = 2x-3 \\Rightarrow x^2-4x+4 = 0 \\Rightarrow (x-2)^2 = 0 \\Rightarrow x=2\\). \\(y = 2(2)-3 = 1\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Simultaneous equations: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "Identify given data",
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
            "script": "board.suspendUpdate(); board.create('arrow', [[-6,0],[6,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-6],[0,6]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.28, -2.0999999999999996, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.4, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return (2)*x + (-3); }, -5.5, 5.5], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [2.2, 3.5, 'y = 2x-3'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
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
        "workingOut": "\\((2, 1)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (2, 1). Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\((2, 1)\\)",
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
        "script": "board.suspendUpdate(); board.create('arrow', [[-6,0],[6,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-6],[0,6]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.28, -2.0999999999999996, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.4, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return (2)*x + (-3); }, -5.5, 5.5], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [2.2, 3.5, 'y = 2x-3'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "1d",
    "topicId": "y10-11c",
    "c": "11C",
    "t": "Simultaneous equations",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the coordinates of the points of intersection of \\(y = x^2\\) and \\(y = 7x - 12\\)",
    "opts": [
      "\\((3, 9), (4, 16)\\)",
      "No points of intersection",
      "\\(\\((3, 9), (4, 16)\\) + 2\\)",
      "\\(\\((3, 9), (4, 16)\\) + 3\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Bring all terms to one side and factorise.",
    "solution": "\\(x^2 = 7x-12 \\Rightarrow x^2-7x+12 = 0 \\Rightarrow (x-3)(x-4) = 0 \\Rightarrow x=3, x=4\\). \\(y(3)=9, y(4)=16\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Simultaneous equations: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
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
        "workingOut": "\\((3, 9), (4, 16)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (3, 9), (4, 16). Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\((3, 9), (4, 16)\\)",
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
    "id": "2a",
    "topicId": "y10-11c",
    "c": "11C",
    "t": "Simultaneous equations",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the coordinates of the points of intersection of \\(y = x^2 + 3x + 3\\) and \\(y = x + 2\\)",
    "opts": [
      "\\((-1, 1)\\)",
      "No points of intersection",
      "\\(\\((-1, 1)\\) + 2\\)",
      "\\(\\((-1, 1)\\) + 3\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Equate the y expressions.",
    "solution": "\\(x^2+3x+3 = x+2 \\Rightarrow x^2+2x+1=0 \\Rightarrow (x+1)^2=0 \\Rightarrow x=-1\\). \\(y = -1+2 = 1\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Simultaneous equations: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
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
        "workingOut": "\\((-1, 1)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (-1, 1). Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\((-1, 1)\\)",
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
    "id": "2b",
    "topicId": "y10-11c",
    "c": "11C",
    "t": "Simultaneous equations",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the coordinates of the points of intersection of \\(y = x^2 + 5x + 2\\) and \\(y = x + 7\\)",
    "opts": [
      "\\((1, 8), (-5, 2)\\)",
      "No points of intersection",
      "\\(\\((1, 8), (-5, 2)\\) + 2\\)",
      "\\(\\((1, 8), (-5, 2)\\) + 3\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Equate the y expressions.",
    "solution": "\\(x^2+5x+2 = x+7 \\Rightarrow x^2+4x-5=0 \\Rightarrow (x+5)(x-1)=0 \\Rightarrow x=1, -5\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Simultaneous equations: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
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
        "workingOut": "\\((1, 8), (-5, 2)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (1, 8), (-5, 2). Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\((1, 8), (-5, 2)\\)",
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
    "id": "2c",
    "topicId": "y10-11c",
    "c": "11C",
    "t": "Simultaneous equations",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the coordinates of the points of intersection of \\(y = x^2 + 2x + 4\\) and \\(y = x + 6\\)",
    "opts": [
      "\\((1, 7), (-2, 4)\\)",
      "No points of intersection",
      "\\(\\((1, 7), (-2, 4)\\) + 2\\)",
      "\\(\\((1, 7), (-2, 4)\\) + 3\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Equate the y expressions.",
    "solution": "\\(x^2+2x+4 = x+6 \\Rightarrow x^2+x-2=0 \\Rightarrow (x+2)(x-1)=0 \\Rightarrow x=1, -2\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Simultaneous equations: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
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
        "workingOut": "\\((1, 7), (-2, 4)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (1, 7), (-2, 4). Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\((1, 7), (-2, 4)\\)",
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
    "id": "2d",
    "topicId": "y10-11c",
    "c": "11C",
    "t": "Simultaneous equations",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the coordinates of the points of intersection of \\(y = 2x^2 + 3x + 1\\) and \\(y = 2x + 1\\)",
    "opts": [
      "\\((0, 1), (-\\frac{1}{2}, 0)\\)",
      "No points of intersection",
      "\\(\\((0, 1), (-\\frac{1}{2}, 0)\\) + 2\\)",
      "\\(\\((0, 1), (-\\frac{1}{2}, 0)\\) + 3\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Equate the y expressions.",
    "solution": "\\(2x^2+3x+1 = 2x+1 \\Rightarrow 2x^2+x=0 \\Rightarrow x(2x+1)=0 \\Rightarrow x=0, -1/2\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Simultaneous equations: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
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
        "workingOut": "\\((0, 1), (-\\frac{1}{2}, 0)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (0, 1), (-\\frac{1}{2}, 0). Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\((0, 1), (-\\frac{1}{2}, 0)\\)",
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
    "id": "2e",
    "topicId": "y10-11c",
    "c": "11C",
    "t": "Simultaneous equations",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the coordinates of the points of intersection of \\(y = 3x^2 + x + 2\\) and \\(y = 3x + 3\\)",
    "opts": [
      "\\((1, 6), (-\\frac{1}{3}, 2)\\)",
      "No points of intersection",
      "\\(\\((1, 6), (-\\frac{1}{3}, 2)\\) + 2\\)",
      "\\(\\((1, 6), (-\\frac{1}{3}, 2)\\) + 3\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Equate the y expressions.",
    "solution": "\\(3x^2+x+2 = 3x+3 \\Rightarrow 3x^2-2x-1=0 \\Rightarrow (3x+1)(x-1)=0 \\Rightarrow x=1, -1/3\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Simultaneous equations: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
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
        "workingOut": "\\((1, 6), (-\\frac{1}{3}, 2)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (1, 6), (-\\frac{1}{3}, 2). Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\((1, 6), (-\\frac{1}{3}, 2)\\)",
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
    "id": "2f",
    "topicId": "y10-11c",
    "c": "11C",
    "t": "Simultaneous equations",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the coordinates of the points of intersection of \\(y = 6x^2 + 9x + 5\\) and \\(y = 2x + 3\\)",
    "opts": [
      "\\((-\\frac{1}{2}, 2), (-\\frac{2}{3}, frac{5}{3})\\)",
      "No points of intersection",
      "\\(\\((-\\frac{1}{2}, 2), (-\\frac{2}{3}, frac{5}{3})\\) + 2\\)",
      "\\(\\((-\\frac{1}{2}, 2), (-\\frac{2}{3}, frac{5}{3})\\) + 3\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Equate the y expressions.",
    "solution": "\\(6x^2+9x+5 = 2x+3 \\Rightarrow 6x^2+7x+2=0 \\Rightarrow (2x+1)(3x+2)=0 \\Rightarrow x=-1/2, -2/3\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Simultaneous equations: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
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
        "workingOut": "\\((-\\frac{1}{2}, 2), (-\\frac{2}{3}, frac{5}{3})\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (-\\frac{1}{2}, 2), (-\\frac{2}{3}, frac{5}{3}). Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\((-\\frac{1}{2}, 2), (-\\frac{2}{3}, frac{5}{3})\\)",
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
    "id": "3a",
    "topicId": "y10-11c",
    "c": "11C",
    "t": "Simultaneous equations",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the coordinates of the points of intersection of \\(x^2 + y^2 = 4\\) and \\(x = 2\\)",
    "opts": [
      "\\((2, 0)\\)",
      "No points of intersection",
      "\\(\\((2, 0)\\) + 2\\)",
      "\\(\\((2, 0)\\) + 3\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Substitute \\(x=2\\) into the circle equation.",
    "solution": "\\(2^2+y^2=4 \\Rightarrow y^2=0 \\Rightarrow y=0\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Simultaneous equations: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "Identify given data",
        "graphData": {
          "jsxGraph": {
            "width": 340,
            "height": 340,
            "boundingbox": [
              -3.5,
              3.5,
              3.5,
              -3.5
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-3.5,0],[3.5,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-3.5],[0,3.5]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [3.08, -1.2249999999999999, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 3.15, 'y'], {fontSize:13, color:'#64748b'}); board.create('circle', [[0,0], 2], {strokeColor:'#6366f1', strokeWidth:2.5, fillColor:'#6366f1', fillOpacity:0.06}); board.create('point', [0,0], {name:'O', size:2, color:'#64748b', fixed:true}); board.create('text', [1, 1.5, 'x² + y² = 4'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
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
        "workingOut": "\\((2, 0)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (2, 0). Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\((2, 0)\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 340,
        "height": 340,
        "boundingbox": [
          -3.5,
          3.5,
          3.5,
          -3.5
        ],
        "script": "board.suspendUpdate(); board.create('arrow', [[-3.5,0],[3.5,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-3.5],[0,3.5]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [3.08, -1.2249999999999999, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 3.15, 'y'], {fontSize:13, color:'#64748b'}); board.create('circle', [[0,0], 2], {strokeColor:'#6366f1', strokeWidth:2.5, fillColor:'#6366f1', fillOpacity:0.06}); board.create('point', [0,0], {name:'O', size:2, color:'#64748b', fixed:true}); board.create('text', [1, 1.5, 'x² + y² = 4'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "3b",
    "topicId": "y10-11c",
    "c": "11C",
    "t": "Simultaneous equations",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the coordinates of the points of intersection of \\(x^2 + y^2 = 9\\) and \\(y = 0\\)",
    "opts": [
      "\\((3, 0), (-3, 0)\\)",
      "No points of intersection",
      "\\(\\((3, 0), (-3, 0)\\) + 2\\)",
      "\\(\\((3, 0), (-3, 0)\\) + 3\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Substitute \\(y=0\\) into the circle equation.",
    "solution": "\\(x^2+0^2=9 \\Rightarrow x^2=9 \\Rightarrow x=\\pm 3\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Simultaneous equations: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "Identify given data",
        "graphData": {
          "jsxGraph": {
            "width": 340,
            "height": 340,
            "boundingbox": [
              -4.5,
              4.5,
              4.5,
              -4.5
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-4.5,0],[4.5,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-4.5],[0,4.5]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [3.96, -1.575, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 4.05, 'y'], {fontSize:13, color:'#64748b'}); board.create('circle', [[0,0], 3], {strokeColor:'#6366f1', strokeWidth:2.5, fillColor:'#6366f1', fillOpacity:0.06}); board.create('point', [0,0], {name:'O', size:2, color:'#64748b', fixed:true}); board.create('text', [1.5, 2.25, 'x² + y² = 9'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
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
        "workingOut": "\\((3, 0), (-3, 0)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (3, 0), (-3, 0). Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\((3, 0), (-3, 0)\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 340,
        "height": 340,
        "boundingbox": [
          -4.5,
          4.5,
          4.5,
          -4.5
        ],
        "script": "board.suspendUpdate(); board.create('arrow', [[-4.5,0],[4.5,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-4.5],[0,4.5]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [3.96, -1.575, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 4.05, 'y'], {fontSize:13, color:'#64748b'}); board.create('circle', [[0,0], 3], {strokeColor:'#6366f1', strokeWidth:2.5, fillColor:'#6366f1', fillOpacity:0.06}); board.create('point', [0,0], {name:'O', size:2, color:'#64748b', fixed:true}); board.create('text', [1.5, 2.25, 'x² + y² = 9'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "3c",
    "topicId": "y10-11c",
    "c": "11C",
    "t": "Simultaneous equations",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the coordinates of the points of intersection of \\(x^2 + y^2 = 32\\) and \\(y = x\\)",
    "opts": [
      "\\((4, 4), (-4, -4)\\)",
      "No points of intersection",
      "\\(\\((4, 4), (-4, -4)\\) + 2\\)",
      "\\(\\((4, 4), (-4, -4)\\) + 3\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Substitute \\(y=x\\) into the circle equation.",
    "solution": "\\(x^2+x^2=32 \\Rightarrow 2x^2=32 \\Rightarrow x^2=16 \\Rightarrow x=\\pm 4\\). \\(y=x \\Rightarrow y=\\pm 4\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Simultaneous equations: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "Identify given data",
        "graphData": {
          "jsxGraph": {
            "width": 340,
            "height": 340,
            "boundingbox": [
              -7.156854249492381,
              7.156854249492381,
              7.156854249492381,
              -7.156854249492381
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-7.156854249492381,0],[7.156854249492381,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-7.156854249492381],[0,7.156854249492381]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [6.298031739553295, -2.504898987322333, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 6.441168824543142, 'y'], {fontSize:13, color:'#64748b'}); board.create('circle', [[0,0], 5.656854249492381], {strokeColor:'#6366f1', strokeWidth:2.5, fillColor:'#6366f1', fillOpacity:0.06}); board.create('point', [0,0], {name:'O', size:2, color:'#64748b', fixed:true}); board.create('text', [2.8284271247461903, 4.242640687119286, 'x² + y² = 32'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
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
        "workingOut": "\\((4, 4), (-4, -4)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (4, 4), (-4, -4). Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\((4, 4), (-4, -4)\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 340,
        "height": 340,
        "boundingbox": [
          -7.156854249492381,
          7.156854249492381,
          7.156854249492381,
          -7.156854249492381
        ],
        "script": "board.suspendUpdate(); board.create('arrow', [[-7.156854249492381,0],[7.156854249492381,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-7.156854249492381],[0,7.156854249492381]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [6.298031739553295, -2.504898987322333, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 6.441168824543142, 'y'], {fontSize:13, color:'#64748b'}); board.create('circle', [[0,0], 5.656854249492381], {strokeColor:'#6366f1', strokeWidth:2.5, fillColor:'#6366f1', fillOpacity:0.06}); board.create('point', [0,0], {name:'O', size:2, color:'#64748b', fixed:true}); board.create('text', [2.8284271247461903, 4.242640687119286, 'x² + y² = 32'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "3d",
    "topicId": "y10-11c",
    "c": "11C",
    "t": "Simultaneous equations",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the coordinates of the points of intersection of \\(x^2 + y^2 = 81\\) and \\(y = 2\\sqrt{2}x\\)",
    "opts": [
      "\\((3, 6\\sqrt{2}), (-3, -6\\sqrt{2})\\)",
      "No points of intersection",
      "\\(\\((3, 6\\sqrt{2}), (-3, -6\\sqrt{2})\\) + 2\\)",
      "\\(\\((3, 6\\sqrt{2}), (-3, -6\\sqrt{2})\\) + 3\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Substitute \\(y=2\\sqrt{2}x\\) into the circle equation.",
    "solution": "\\(x^2+(2\\sqrt{2}x)^2=81 \\Rightarrow x^2+8x^2=81 \\Rightarrow 9x^2=81 \\Rightarrow x^2=9 \\Rightarrow x=\\pm 3\\). \\(y=2\\sqrt{2}(\\pm 3)=\\pm 6\\sqrt{2}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Simultaneous equations: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "Identify given data",
        "graphData": {
          "jsxGraph": {
            "width": 340,
            "height": 340,
            "boundingbox": [
              -10.5,
              10.5,
              10.5,
              -10.5
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-10.5,0],[10.5,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-10.5],[0,10.5]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [9.24, -3.675, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 9.450000000000001, 'y'], {fontSize:13, color:'#64748b'}); board.create('circle', [[0,0], 9], {strokeColor:'#6366f1', strokeWidth:2.5, fillColor:'#6366f1', fillOpacity:0.06}); board.create('point', [0,0], {name:'O', size:2, color:'#64748b', fixed:true}); board.create('text', [4.5, 6.75, 'x² + y² = 81'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
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
        "workingOut": "\\((3, 6\\sqrt{2}), (-3, -6\\sqrt{2})\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (3, 6\\sqrt{2}), (-3, -6\\sqrt{2}). Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\((3, 6\\sqrt{2}), (-3, -6\\sqrt{2})\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 340,
        "height": 340,
        "boundingbox": [
          -10.5,
          10.5,
          10.5,
          -10.5
        ],
        "script": "board.suspendUpdate(); board.create('arrow', [[-10.5,0],[10.5,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-10.5],[0,10.5]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [9.24, -3.675, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 9.450000000000001, 'y'], {fontSize:13, color:'#64748b'}); board.create('circle', [[0,0], 9], {strokeColor:'#6366f1', strokeWidth:2.5, fillColor:'#6366f1', fillOpacity:0.06}); board.create('point', [0,0], {name:'O', size:2, color:'#64748b', fixed:true}); board.create('text', [4.5, 6.75, 'x² + y² = 81'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "4a",
    "topicId": "y10-11c",
    "c": "11C",
    "t": "Simultaneous equations",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the points of intersection of \\(x^2 + y^2 = 10\\) and \\(y = x + 2\\)",
    "opts": [
      "\\((1, 3), (-3, -1)\\)",
      "No points of intersection",
      "\\(\\((1, 3), (-3, -1)\\) + 2\\)",
      "\\(\\((1, 3), (-3, -1)\\) + 3\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Substitute \\(y=x+2\\) into the first equation.",
    "solution": "\\(x^2+(x+2)^2=10 \\Rightarrow 2x^2+4x-6=0 \\Rightarrow x^2+2x-3=0 \\Rightarrow (x+3)(x-1)=0 \\Rightarrow x=1, -3\\). \\(y=3, -1\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Simultaneous equations: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "Identify given data",
        "graphData": {
          "jsxGraph": {
            "width": 340,
            "height": 340,
            "boundingbox": [
              -4.66227766016838,
              4.66227766016838,
              4.66227766016838,
              -4.66227766016838
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-4.66227766016838,0],[4.66227766016838,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-4.66227766016838],[0,4.66227766016838]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [4.1028043409481745, -1.631797181058933, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 4.1960498941515425, 'y'], {fontSize:13, color:'#64748b'}); board.create('circle', [[0,0], 3.1622776601683795], {strokeColor:'#6366f1', strokeWidth:2.5, fillColor:'#6366f1', fillOpacity:0.06}); board.create('point', [0,0], {name:'O', size:2, color:'#64748b', fixed:true}); board.create('text', [1.5811388300841898, 2.3717082451262845, 'x² + y² = 10'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
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
        "workingOut": "\\((1, 3), (-3, -1)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (1, 3), (-3, -1). Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\((1, 3), (-3, -1)\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 340,
        "height": 340,
        "boundingbox": [
          -4.66227766016838,
          4.66227766016838,
          4.66227766016838,
          -4.66227766016838
        ],
        "script": "board.suspendUpdate(); board.create('arrow', [[-4.66227766016838,0],[4.66227766016838,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-4.66227766016838],[0,4.66227766016838]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [4.1028043409481745, -1.631797181058933, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 4.1960498941515425, 'y'], {fontSize:13, color:'#64748b'}); board.create('circle', [[0,0], 3.1622776601683795], {strokeColor:'#6366f1', strokeWidth:2.5, fillColor:'#6366f1', fillOpacity:0.06}); board.create('point', [0,0], {name:'O', size:2, color:'#64748b', fixed:true}); board.create('text', [1.5811388300841898, 2.3717082451262845, 'x² + y² = 10'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "4b",
    "topicId": "y10-11c",
    "c": "11C",
    "t": "Simultaneous equations",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the points of intersection of \\(x^2 + y^2 = 17\\) and \\(y = 3 - x\\)",
    "opts": [
      "\\((4, -1), (-1, 4)\\)",
      "No points of intersection",
      "\\(\\((4, -1), (-1, 4)\\) + 2\\)",
      "\\(\\((4, -1), (-1, 4)\\) + 3\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Substitute \\(y=3-x\\) into the first equation.",
    "solution": "\\(x^2+(3-x)^2=17 \\Rightarrow 2x^2-6x-8=0 \\Rightarrow x^2-3x-4=0 \\Rightarrow (x-4)(x+1)=0 \\Rightarrow x=4, -1\\). \\(y=-1, 4\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Simultaneous equations: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "Identify given data",
        "graphData": {
          "jsxGraph": {
            "width": 340,
            "height": 340,
            "boundingbox": [
              -5.623105625617661,
              5.623105625617661,
              5.623105625617661,
              -5.623105625617661
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-5.623105625617661,0],[5.623105625617661,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-5.623105625617661],[0,5.623105625617661]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [4.948332950543541, -1.968086968966181, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.060795063055894, 'y'], {fontSize:13, color:'#64748b'}); board.create('circle', [[0,0], 4.123105625617661], {strokeColor:'#6366f1', strokeWidth:2.5, fillColor:'#6366f1', fillOpacity:0.06}); board.create('point', [0,0], {name:'O', size:2, color:'#64748b', fixed:true}); board.create('text', [2.0615528128088303, 3.092329219213245, 'x² + y² = 17'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
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
        "workingOut": "\\((4, -1), (-1, 4)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (4, -1), (-1, 4). Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\((4, -1), (-1, 4)\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 340,
        "height": 340,
        "boundingbox": [
          -5.623105625617661,
          5.623105625617661,
          5.623105625617661,
          -5.623105625617661
        ],
        "script": "board.suspendUpdate(); board.create('arrow', [[-5.623105625617661,0],[5.623105625617661,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-5.623105625617661],[0,5.623105625617661]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [4.948332950543541, -1.968086968966181, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.060795063055894, 'y'], {fontSize:13, color:'#64748b'}); board.create('circle', [[0,0], 4.123105625617661], {strokeColor:'#6366f1', strokeWidth:2.5, fillColor:'#6366f1', fillOpacity:0.06}); board.create('point', [0,0], {name:'O', size:2, color:'#64748b', fixed:true}); board.create('text', [2.0615528128088303, 3.092329219213245, 'x² + y² = 17'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "4c",
    "topicId": "y10-11c",
    "c": "11C",
    "t": "Simultaneous equations",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the points of intersection of \\(x^2 + y^2 = 26\\) and \\(x + y = 4\\)",
    "opts": [
      "\\((5, -1), (-1, 5)\\)",
      "No points of intersection",
      "\\(\\((5, -1), (-1, 5)\\) + 2\\)",
      "\\(\\((5, -1), (-1, 5)\\) + 3\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Substitute \\(y=4-x\\).",
    "solution": "\\(y=4-x \\Rightarrow x^2+(4-x)^2=26 \\Rightarrow 2x^2-8x-10=0 \\Rightarrow x^2-4x-5=0 \\Rightarrow x=5, -1\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Simultaneous equations: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "Identify given data",
        "graphData": {
          "jsxGraph": {
            "width": 340,
            "height": 340,
            "boundingbox": [
              -6.5990195135927845,
              6.5990195135927845,
              6.5990195135927845,
              -6.5990195135927845
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-6.5990195135927845,0],[6.5990195135927845,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-6.5990195135927845],[0,6.5990195135927845]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.80713717196165, -2.309656829757474, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.939117562233506, 'y'], {fontSize:13, color:'#64748b'}); board.create('circle', [[0,0], 5.0990195135927845], {strokeColor:'#6366f1', strokeWidth:2.5, fillColor:'#6366f1', fillOpacity:0.06}); board.create('point', [0,0], {name:'O', size:2, color:'#64748b', fixed:true}); board.create('text', [2.5495097567963922, 3.8242646351945884, 'x² + y² = 26'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
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
        "workingOut": "\\((5, -1), (-1, 5)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (5, -1), (-1, 5). Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\((5, -1), (-1, 5)\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 340,
        "height": 340,
        "boundingbox": [
          -6.5990195135927845,
          6.5990195135927845,
          6.5990195135927845,
          -6.5990195135927845
        ],
        "script": "board.suspendUpdate(); board.create('arrow', [[-6.5990195135927845,0],[6.5990195135927845,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-6.5990195135927845],[0,6.5990195135927845]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.80713717196165, -2.309656829757474, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.939117562233506, 'y'], {fontSize:13, color:'#64748b'}); board.create('circle', [[0,0], 5.0990195135927845], {strokeColor:'#6366f1', strokeWidth:2.5, fillColor:'#6366f1', fillOpacity:0.06}); board.create('point', [0,0], {name:'O', size:2, color:'#64748b', fixed:true}); board.create('text', [2.5495097567963922, 3.8242646351945884, 'x² + y² = 26'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "4d",
    "topicId": "y10-11c",
    "c": "11C",
    "t": "Simultaneous equations",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the points of intersection of \\(x^2 + y^2 = 20\\) and \\(y = 2x\\)",
    "opts": [
      "\\((2, 4), (-2, -4)\\)",
      "No points of intersection",
      "\\(\\((2, 4), (-2, -4)\\) + 2\\)",
      "\\(\\((2, 4), (-2, -4)\\) + 3\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Substitute \\(y=2x\\).",
    "solution": "\\(x^2+(2x)^2=20 \\Rightarrow 5x^2=20 \\Rightarrow x^2=4 \\Rightarrow x=\\pm 2\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Simultaneous equations: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "Identify given data",
        "graphData": {
          "jsxGraph": {
            "width": 340,
            "height": 340,
            "boundingbox": [
              -5.97213595499958,
              5.97213595499958,
              5.97213595499958,
              -5.97213595499958
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-5.97213595499958,0],[5.97213595499958,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-5.97213595499958],[0,5.97213595499958]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.2554796403996304, -2.0902475842498527, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.374922359499622, 'y'], {fontSize:13, color:'#64748b'}); board.create('circle', [[0,0], 4.47213595499958], {strokeColor:'#6366f1', strokeWidth:2.5, fillColor:'#6366f1', fillOpacity:0.06}); board.create('point', [0,0], {name:'O', size:2, color:'#64748b', fixed:true}); board.create('text', [2.23606797749979, 3.3541019662496847, 'x² + y² = 20'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
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
        "workingOut": "\\((2, 4), (-2, -4)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (2, 4), (-2, -4). Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\((2, 4), (-2, -4)\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 340,
        "height": 340,
        "boundingbox": [
          -5.97213595499958,
          5.97213595499958,
          5.97213595499958,
          -5.97213595499958
        ],
        "script": "board.suspendUpdate(); board.create('arrow', [[-5.97213595499958,0],[5.97213595499958,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-5.97213595499958],[0,5.97213595499958]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.2554796403996304, -2.0902475842498527, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.374922359499622, 'y'], {fontSize:13, color:'#64748b'}); board.create('circle', [[0,0], 4.47213595499958], {strokeColor:'#6366f1', strokeWidth:2.5, fillColor:'#6366f1', fillOpacity:0.06}); board.create('point', [0,0], {name:'O', size:2, color:'#64748b', fixed:true}); board.create('text', [2.23606797749979, 3.3541019662496847, 'x² + y² = 20'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "4e",
    "topicId": "y10-11c",
    "c": "11C",
    "t": "Simultaneous equations",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the points of intersection of \\(x^2 + y^2 = 5\\) and \\(y = 2x - 3\\)",
    "opts": [
      "\\((2, 1), (\\frac{2}{5}, -\\frac{11}{5})\\)",
      "No points of intersection",
      "\\(\\((2, 1), (\\frac{2}{5}, -\\frac{11}{5})\\) + 2\\)",
      "\\(\\((2, 1), (\\frac{2}{5}, -\\frac{11}{5})\\) + 3\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Substitute \\(y=2x-3\\).",
    "solution": "\\(x^2+(2x-3)^2=5 \\Rightarrow x^2+4x^2-12x+9=5 \\Rightarrow 5x^2-12x+4=0 \\Rightarrow (5x-2)(x-2)=0 \\Rightarrow x=2, 2/5\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Simultaneous equations: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "Identify given data",
        "graphData": {
          "jsxGraph": {
            "width": 340,
            "height": 340,
            "boundingbox": [
              -3.73606797749979,
              3.73606797749979,
              3.73606797749979,
              -3.73606797749979
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-3.73606797749979,0],[3.73606797749979,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-3.73606797749979],[0,3.73606797749979]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [3.287739820199815, -1.3076237921249263, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 3.3624611797498107, 'y'], {fontSize:13, color:'#64748b'}); board.create('circle', [[0,0], 2.23606797749979], {strokeColor:'#6366f1', strokeWidth:2.5, fillColor:'#6366f1', fillOpacity:0.06}); board.create('point', [0,0], {name:'O', size:2, color:'#64748b', fixed:true}); board.create('text', [1.118033988749895, 1.6770509831248424, 'x² + y² = 5'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
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
        "workingOut": "\\((2, 1), (\\frac{2}{5}, -\\frac{11}{5})\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (2, 1), (\\frac{2}{5}, -\\frac{11}{5}). Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\((2, 1), (\\frac{2}{5}, -\\frac{11}{5})\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 340,
        "height": 340,
        "boundingbox": [
          -3.73606797749979,
          3.73606797749979,
          3.73606797749979,
          -3.73606797749979
        ],
        "script": "board.suspendUpdate(); board.create('arrow', [[-3.73606797749979,0],[3.73606797749979,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-3.73606797749979],[0,3.73606797749979]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [3.287739820199815, -1.3076237921249263, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 3.3624611797498107, 'y'], {fontSize:13, color:'#64748b'}); board.create('circle', [[0,0], 2.23606797749979], {strokeColor:'#6366f1', strokeWidth:2.5, fillColor:'#6366f1', fillOpacity:0.06}); board.create('point', [0,0], {name:'O', size:2, color:'#64748b', fixed:true}); board.create('text', [1.118033988749895, 1.6770509831248424, 'x² + y² = 5'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "4f",
    "topicId": "y10-11c",
    "c": "11C",
    "t": "Simultaneous equations",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the points of intersection of \\(x^2 + y^2 = 8\\) and \\(y = x + 4\\)",
    "opts": [
      "\\((-2, 2)\\)",
      "No points of intersection",
      "\\(\\((-2, 2)\\) + 2\\)",
      "\\(\\((-2, 2)\\) + 3\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Substitute \\(y=x+4\\).",
    "solution": "\\(x^2+(x+4)^2=8 \\Rightarrow 2x^2+8x+8=0 \\Rightarrow x^2+4x+4=0 \\Rightarrow (x+2)^2=0 \\Rightarrow x=-2\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Simultaneous equations: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "Identify given data",
        "graphData": {
          "jsxGraph": {
            "width": 340,
            "height": 340,
            "boundingbox": [
              -4.32842712474619,
              4.32842712474619,
              4.32842712474619,
              -4.32842712474619
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-4.32842712474619,0],[4.32842712474619,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-4.32842712474619],[0,4.32842712474619]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [3.809015869776647, -1.5149494936611663, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 3.895584412271571, 'y'], {fontSize:13, color:'#64748b'}); board.create('circle', [[0,0], 2.8284271247461903], {strokeColor:'#6366f1', strokeWidth:2.5, fillColor:'#6366f1', fillOpacity:0.06}); board.create('point', [0,0], {name:'O', size:2, color:'#64748b', fixed:true}); board.create('text', [1.4142135623730951, 2.121320343559643, 'x² + y² = 8'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
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
        "workingOut": "\\((-2, 2)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (-2, 2). Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\((-2, 2)\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 340,
        "height": 340,
        "boundingbox": [
          -4.32842712474619,
          4.32842712474619,
          4.32842712474619,
          -4.32842712474619
        ],
        "script": "board.suspendUpdate(); board.create('arrow', [[-4.32842712474619,0],[4.32842712474619,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-4.32842712474619],[0,4.32842712474619]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [3.809015869776647, -1.5149494936611663, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 3.895584412271571, 'y'], {fontSize:13, color:'#64748b'}); board.create('circle', [[0,0], 2.8284271247461903], {strokeColor:'#6366f1', strokeWidth:2.5, fillColor:'#6366f1', fillOpacity:0.06}); board.create('point', [0,0], {name:'O', size:2, color:'#64748b', fixed:true}); board.create('text', [1.4142135623730951, 2.121320343559643, 'x² + y² = 8'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "4g",
    "topicId": "y10-11c",
    "c": "11C",
    "t": "Simultaneous equations",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the points of intersection of \\(x^2 + y^2 = 18\\) and \\(x + y = 6\\)",
    "opts": [
      "\\((3, 3)\\)",
      "No points of intersection",
      "\\(\\((3, 3)\\) + 2\\)",
      "\\(\\((3, 3)\\) + 3\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Substitute \\(y=6-x\\).",
    "solution": "\\(y=6-x \\Rightarrow x^2+(6-x)^2=18 \\Rightarrow 2x^2-12x+18=0 \\Rightarrow x^2-6x+9=0 \\Rightarrow (x-3)^2=0 \\Rightarrow x=3\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Simultaneous equations: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "Identify given data",
        "graphData": {
          "jsxGraph": {
            "width": 340,
            "height": 340,
            "boundingbox": [
              -5.742640687119285,
              5.742640687119285,
              5.742640687119285,
              -5.742640687119285
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-5.742640687119285,0],[5.742640687119285,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-5.742640687119285],[0,5.742640687119285]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.05352380466497, -2.0099242404917494, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.168376618407357, 'y'], {fontSize:13, color:'#64748b'}); board.create('circle', [[0,0], 4.242640687119285], {strokeColor:'#6366f1', strokeWidth:2.5, fillColor:'#6366f1', fillOpacity:0.06}); board.create('point', [0,0], {name:'O', size:2, color:'#64748b', fixed:true}); board.create('text', [2.1213203435596424, 3.181980515339464, 'x² + y² = 18'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
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
        "workingOut": "\\((3, 3)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (3, 3). Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\((3, 3)\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 340,
        "height": 340,
        "boundingbox": [
          -5.742640687119285,
          5.742640687119285,
          5.742640687119285,
          -5.742640687119285
        ],
        "script": "board.suspendUpdate(); board.create('arrow', [[-5.742640687119285,0],[5.742640687119285,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-5.742640687119285],[0,5.742640687119285]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.05352380466497, -2.0099242404917494, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.168376618407357, 'y'], {fontSize:13, color:'#64748b'}); board.create('circle', [[0,0], 4.242640687119285], {strokeColor:'#6366f1', strokeWidth:2.5, fillColor:'#6366f1', fillOpacity:0.06}); board.create('point', [0,0], {name:'O', size:2, color:'#64748b', fixed:true}); board.create('text', [2.1213203435596424, 3.181980515339464, 'x² + y² = 18'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "4h",
    "topicId": "y10-11c",
    "c": "11C",
    "t": "Simultaneous equations",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the points of intersection of \\(x^2 + y^2 = 25\\) and \\(3x + 4y = 25\\)",
    "opts": [
      "\\((3, 4)\\)",
      "No points of intersection",
      "\\(\\((3, 4)\\) + 2\\)",
      "\\(\\((3, 4)\\) + 3\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Substitute for y or x.",
    "solution": "\\(4y=25-3x \\Rightarrow 16x^2+16y^2=400 \\Rightarrow 16x^2+(25-3x)^2=400 \\Rightarrow 25x^2-150x+225=0 \\Rightarrow x^2-6x+9=0 \\Rightarrow x=3\\). \\(y=4\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Simultaneous equations: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "Identify given data",
        "graphData": {
          "jsxGraph": {
            "width": 340,
            "height": 340,
            "boundingbox": [
              -6.5,
              6.5,
              6.5,
              -6.5
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-6.5,0],[6.5,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-6.5],[0,6.5]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.72, -2.275, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.8500000000000005, 'y'], {fontSize:13, color:'#64748b'}); board.create('circle', [[0,0], 5], {strokeColor:'#6366f1', strokeWidth:2.5, fillColor:'#6366f1', fillOpacity:0.06}); board.create('point', [0,0], {name:'O', size:2, color:'#64748b', fixed:true}); board.create('text', [2.5, 3.75, 'x² + y² = 25'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
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
        "workingOut": "\\((3, 4)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (3, 4). Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\((3, 4)\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 340,
        "height": 340,
        "boundingbox": [
          -6.5,
          6.5,
          6.5,
          -6.5
        ],
        "script": "board.suspendUpdate(); board.create('arrow', [[-6.5,0],[6.5,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-6.5],[0,6.5]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.72, -2.275, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.8500000000000005, 'y'], {fontSize:13, color:'#64748b'}); board.create('circle', [[0,0], 5], {strokeColor:'#6366f1', strokeWidth:2.5, fillColor:'#6366f1', fillOpacity:0.06}); board.create('point', [0,0], {name:'O', size:2, color:'#64748b', fixed:true}); board.create('text', [2.5, 3.75, 'x² + y² = 25'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "4i",
    "topicId": "y10-11c",
    "c": "11C",
    "t": "Simultaneous equations",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the points of intersection of \\(x^2 + y^2 = 4\\) and \\(x + y = 6\\)",
    "opts": [
      "No points of intersection",
      "No points of intersection + 1",
      "No points of intersection + 2",
      "No points of intersection + 3"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Check the discriminant.",
    "solution": "\\(x^2+(6-x)^2=4 \\Rightarrow 2x^2-12x+32=0 \\Rightarrow x^2-6x+16=0\\). \\(\\Delta = 36-64 < 0\\), no real solutions.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Simultaneous equations: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "Identify given data",
        "graphData": {
          "jsxGraph": {
            "width": 340,
            "height": 340,
            "boundingbox": [
              -3.5,
              3.5,
              3.5,
              -3.5
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-3.5,0],[3.5,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-3.5],[0,3.5]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [3.08, -1.2249999999999999, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 3.15, 'y'], {fontSize:13, color:'#64748b'}); board.create('circle', [[0,0], 2], {strokeColor:'#6366f1', strokeWidth:2.5, fillColor:'#6366f1', fillOpacity:0.06}); board.create('point', [0,0], {name:'O', size:2, color:'#64748b', fixed:true}); board.create('text', [1, 1.5, 'x² + y² = 4'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
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
        "workingOut": "No points of intersection",
        "graphData": null
      },
      {
        "explanation": "Final answer: No points of intersection. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "No points of intersection",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 340,
        "height": 340,
        "boundingbox": [
          -3.5,
          3.5,
          3.5,
          -3.5
        ],
        "script": "board.suspendUpdate(); board.create('arrow', [[-3.5,0],[3.5,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-3.5],[0,3.5]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [3.08, -1.2249999999999999, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 3.15, 'y'], {fontSize:13, color:'#64748b'}); board.create('circle', [[0,0], 2], {strokeColor:'#6366f1', strokeWidth:2.5, fillColor:'#6366f1', fillOpacity:0.06}); board.create('point', [0,0], {name:'O', size:2, color:'#64748b', fixed:true}); board.create('text', [1, 1.5, 'x² + y² = 4'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "4j",
    "topicId": "y10-11c",
    "c": "11C",
    "t": "Simultaneous equations",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the points of intersection of \\(x^2 + y^2 = 9\\) and \\(y = 2x + 8\\)",
    "opts": [
      "No points of intersection",
      "No points of intersection + 1",
      "No points of intersection + 2",
      "No points of intersection + 3"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Check the discriminant.",
    "solution": "\\(x^2+(2x+8)^2=9 \\Rightarrow 5x^2+32x+55=0\\). \\(\\Delta = 1024-1100 < 0\\), no real solutions.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Simultaneous equations: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "Identify given data",
        "graphData": {
          "jsxGraph": {
            "width": 340,
            "height": 340,
            "boundingbox": [
              -4.5,
              4.5,
              4.5,
              -4.5
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-4.5,0],[4.5,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-4.5],[0,4.5]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [3.96, -1.575, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 4.05, 'y'], {fontSize:13, color:'#64748b'}); board.create('circle', [[0,0], 3], {strokeColor:'#6366f1', strokeWidth:2.5, fillColor:'#6366f1', fillOpacity:0.06}); board.create('point', [0,0], {name:'O', size:2, color:'#64748b', fixed:true}); board.create('text', [1.5, 2.25, 'x² + y² = 9'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
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
        "workingOut": "No points of intersection",
        "graphData": null
      },
      {
        "explanation": "Final answer: No points of intersection. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "No points of intersection",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 340,
        "height": 340,
        "boundingbox": [
          -4.5,
          4.5,
          4.5,
          -4.5
        ],
        "script": "board.suspendUpdate(); board.create('arrow', [[-4.5,0],[4.5,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-4.5],[0,4.5]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [3.96, -1.575, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 4.05, 'y'], {fontSize:13, color:'#64748b'}); board.create('circle', [[0,0], 3], {strokeColor:'#6366f1', strokeWidth:2.5, fillColor:'#6366f1', fillOpacity:0.06}); board.create('point', [0,0], {name:'O', size:2, color:'#64748b', fixed:true}); board.create('text', [1.5, 2.25, 'x² + y² = 9'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "5a",
    "topicId": "y10-11c",
    "c": "11C",
    "t": "Simultaneous equations",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the points of intersection of \\(y = x - 2\\) and \\(y = \\frac{3}{x}\\)",
    "opts": [
      "\\((3, 1), (-1, -3)\\)",
      "No points of intersection",
      "\\(\\((3, 1), (-1, -3)\\) + 2\\)",
      "\\(\\((3, 1), (-1, -3)\\) + 3\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Multiply by x.",
    "solution": "\\(x-2=3/x \\Rightarrow x^2-2x-3=0 \\Rightarrow (x-3)(x+1)=0 \\Rightarrow x=3, -1\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Simultaneous equations: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "Identify given data",
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
            "script": "board.suspendUpdate(); board.create('arrow', [[-6,0],[6,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-6],[0,6]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.28, -2.0999999999999996, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.4, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return (1)*x + (-2); }, -5.5, 5.5], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [2.2, 3.5, 'y = 1x-2'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
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
        "workingOut": "\\((3, 1), (-1, -3)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (3, 1), (-1, -3). Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\((3, 1), (-1, -3)\\)",
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
        "script": "board.suspendUpdate(); board.create('arrow', [[-6,0],[6,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-6],[0,6]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.28, -2.0999999999999996, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.4, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return (1)*x + (-2); }, -5.5, 5.5], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [2.2, 3.5, 'y = 1x-2'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "5b",
    "topicId": "y10-11c",
    "c": "11C",
    "t": "Simultaneous equations",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the points of intersection of \\(y = 2x - 1\\) and \\(y = \\frac{1}{x}\\)",
    "opts": [
      "\\((1, 1), (-\\frac{1}{2}, -2)\\)",
      "No points of intersection",
      "\\(\\((1, 1), (-\\frac{1}{2}, -2)\\) + 2\\)",
      "\\(\\((1, 1), (-\\frac{1}{2}, -2)\\) + 3\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Multiply by x.",
    "solution": "\\(2x-1=1/x \\Rightarrow 2x^2-x-1=0 \\Rightarrow (2x+1)(x-1)=0 \\Rightarrow x=1, -1/2\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Simultaneous equations: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "Identify given data",
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
            "script": "board.suspendUpdate(); board.create('arrow', [[-6,0],[6,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-6],[0,6]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.28, -2.0999999999999996, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.4, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return (2)*x + (-1); }, -5.5, 5.5], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [2.2, 3.5, 'y = 2x-1'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
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
        "workingOut": "\\((1, 1), (-\\frac{1}{2}, -2)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (1, 1), (-\\frac{1}{2}, -2). Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\((1, 1), (-\\frac{1}{2}, -2)\\)",
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
        "script": "board.suspendUpdate(); board.create('arrow', [[-6,0],[6,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-6],[0,6]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.28, -2.0999999999999996, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.4, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return (2)*x + (-1); }, -5.5, 5.5], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [2.2, 3.5, 'y = 2x-1'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "5c",
    "topicId": "y10-11c",
    "c": "11C",
    "t": "Simultaneous equations",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the points of intersection of \\(y = 3x - 1\\) and \\(y = \\frac{2}{x}\\)",
    "opts": [
      "\\((1, 2), (-\\frac{2}{3}, -3)\\)",
      "No points of intersection",
      "\\(\\((1, 2), (-\\frac{2}{3}, -3)\\) + 2\\)",
      "\\(\\((1, 2), (-\\frac{2}{3}, -3)\\) + 3\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Multiply by x.",
    "solution": "\\(3x-1=2/x \\Rightarrow 3x^2-x-2=0 \\Rightarrow (3x+2)(x-1)=0 \\Rightarrow x=1, -2/3\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Simultaneous equations: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "Identify given data",
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
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\((1, 2), (-\\frac{2}{3}, -3)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (1, 2), (-\\frac{2}{3}, -3). Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\((1, 2), (-\\frac{2}{3}, -3)\\)",
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
    "id": "5d",
    "topicId": "y10-11c",
    "c": "11C",
    "t": "Simultaneous equations",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the points of intersection of \\(y = -\\frac{1}{x}\\) and \\(y = -x\\)",
    "opts": [
      "\\((1, -1), (-1, 1)\\)",
      "No points of intersection",
      "\\(\\((1, -1), (-1, 1)\\) + 2\\)",
      "\\(\\((1, -1), (-1, 1)\\) + 3\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Multiply by x.",
    "solution": "\\(-1/x = -x \\Rightarrow x^2=1 \\Rightarrow x=\\pm 1\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Simultaneous equations: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "Identify given data",
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
            "script": "board.suspendUpdate(); board.create('arrow', [[-6,0],[6,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-6],[0,6]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.28, -2.0999999999999996, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.4, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return (-1)*x + (0); }, -5.5, 5.5], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [2.2, 3.5, 'y = -1x+0'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
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
        "workingOut": "\\((1, -1), (-1, 1)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (1, -1), (-1, 1). Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\((1, -1), (-1, 1)\\)",
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
        "script": "board.suspendUpdate(); board.create('arrow', [[-6,0],[6,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-6],[0,6]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.28, -2.0999999999999996, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.4, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return (-1)*x + (0); }, -5.5, 5.5], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [2.2, 3.5, 'y = -1x+0'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "6a",
    "topicId": "y10-11c",
    "c": "11C",
    "t": "Simultaneous equations",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "The circle \\(x^2 + y^2 = 1\\), the parabola \\(y = x^2\\) and the line \\(y = x\\) are drawn on the same axes. Let A and B be the points of intersection of \\(y = x\\) with the circle and parabola (in the first quadrant), respectively. Find the coordinates of A and B.",
    "opts": [
      "\\(A(\\frac{1}{\\sqrt{2}}, frac{1}{\\sqrt{2}}), B(1, 1)\\)",
      "No points of intersection",
      "\\(\\(A(\\frac{1}{\\sqrt{2}}, frac{1}{\\sqrt{2}}), B(1, 1)\\) + 2\\)",
      "\\(\\(A(\\frac{1}{\\sqrt{2}}, frac{1}{\\sqrt{2}}), B(1, 1)\\) + 3\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Find intersections with \\(y=x\\).",
    "solution": "For A: \\(x^2+x^2=1 \\Rightarrow 2x^2=1 \\Rightarrow x=1/\\sqrt{2}\\). For B: \\(x=x^2 \\Rightarrow x^2-x=0 \\Rightarrow x(x-1)=0 \\Rightarrow x=1\\) (since B is not origin).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Simultaneous equations: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
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
        "workingOut": "\\(A(\\frac{1}{\\sqrt{2}}, frac{1}{\\sqrt{2}}), B(1, 1)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: A(\\frac{1}{\\sqrt{2}}, frac{1}{\\sqrt{2}}), B(1, 1). Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(A(\\frac{1}{\\sqrt{2}}, frac{1}{\\sqrt{2}}), B(1, 1)\\)",
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
    "id": "6b",
    "topicId": "y10-11c",
    "c": "11C",
    "t": "Simultaneous equations",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Using the points A and B from the previous part, where XA and YB are perpendicular to the x-axis, find the area of triangles OAX and OBY.",
    "opts": [
      "\\(OAX = \\frac{1}{4}, OBY = \\frac{1}{2}\\)",
      "No points of intersection",
      "\\(\\(OAX = \\frac{1}{4}, OBY = \\frac{1}{2}\\) + 2\\)",
      "\\(\\(OAX = \\frac{1}{4}, OBY = \\frac{1}{2}\\) + 3\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Area = \\(\\frac{1}{2}bh\\).",
    "solution": "Area OAX = \\(\\frac{1}{2} \\times \\frac{1}{\\sqrt{2}} \\times \\frac{1}{\\sqrt{2}} = \\frac{1}{4}\\). Area OBY = \\(\\frac{1}{2} \\times 1 \\times 1 = \\frac{1}{2}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Simultaneous equations: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
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
        "workingOut": "\\(OAX = \\frac{1}{4}, OBY = \\frac{1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: OAX = \\frac{1}{4}, OBY = \\frac{1}{2}. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(OAX = \\frac{1}{4}, OBY = \\frac{1}{2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "7",
    "topicId": "y10-11c",
    "c": "11C",
    "t": "Simultaneous equations",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Where does the line \\(3y - x = 7\\) meet the circle \\((x - 3)^2 + y^2 = 10\\)?",
    "opts": [
      "\\((2, 3)\\)",
      "No points of intersection",
      "\\(\\((2, 3)\\) + 2\\)",
      "\\(\\((2, 3)\\) + 3\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Substitute \\(x\\) in terms of \\(y\\).",
    "solution": "\\(x = 3y-7 \\Rightarrow (3y-10)^2+y^2=10 \\Rightarrow 9y^2-60y+100+y^2=10 \\Rightarrow 10y^2-60y+90=0 \\Rightarrow y^2-6y+9=0 \\Rightarrow (y-3)^2=0 \\Rightarrow y=3\\). Then \\(x=3(3)-7=2\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Simultaneous equations: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
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
        "workingOut": "\\((2, 3)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (2, 3). Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\((2, 3)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "8",
    "topicId": "y10-11c",
    "c": "11C",
    "t": "Simultaneous equations",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the points of intersection of the line \\(y = 2x\\) and the circle \\((x - 5)^2 + y^2 = 4\\).",
    "opts": [
      "No points of intersection",
      "No points of intersection + 1",
      "No points of intersection + 2",
      "No points of intersection + 3"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Check the discriminant of the resulting quadratic.",
    "solution": "\\((x-5)^2+(2x)^2=4 \\Rightarrow x^2-10x+25+4x^2=4 \\Rightarrow 5x^2-10x+21=0\\). \\(\\Delta = 100-4(5)(21) = 100-420 < 0\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Simultaneous equations: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "Identify given data",
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
            "script": "board.suspendUpdate(); board.create('arrow', [[-6,0],[6,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-6],[0,6]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.28, -2.0999999999999996, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.4, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return (2)*x + (0); }, -5.5, 5.5], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [2.2, 3.5, 'y = 2x+0'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
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
        "workingOut": "No points of intersection",
        "graphData": null
      },
      {
        "explanation": "Final answer: No points of intersection. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "No points of intersection",
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
        "script": "board.suspendUpdate(); board.create('arrow', [[-6,0],[6,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-6],[0,6]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.28, -2.0999999999999996, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.4, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return (2)*x + (0); }, -5.5, 5.5], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [2.2, 3.5, 'y = 2x+0'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "9a",
    "topicId": "y10-11c",
    "c": "11C",
    "t": "Simultaneous equations",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the values of \\(a\\) for which the graphs of \\(y = x + a\\) and \\(x^2 + y^2 = 9\\) intersect at one point.",
    "opts": [
      "\\(a = 3\\sqrt{2}, -3\\sqrt{2}\\)",
      "No points of intersection",
      "\\(\\(a = 3\\sqrt{2}, -3\\sqrt{2}\\) + 2\\)",
      "\\(\\(a = 3\\sqrt{2}, -3\\sqrt{2}\\) + 3\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Set discriminant equal to 0.",
    "solution": "\\(x^2+(x+a)^2=9 \\Rightarrow 2x^2+2ax+a^2-9=0\\). \\(\\Delta = 4a^2-8(a^2-9) = 72-4a^2\\). For one point, \\(\\Delta=0 \\Rightarrow a^2=18 \\Rightarrow a=\\pm\\sqrt{18}=\\pm3\\sqrt{2}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Simultaneous equations: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
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
        "workingOut": "\\(a = 3\\sqrt{2}, -3\\sqrt{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: a = 3\\sqrt{2}, -3\\sqrt{2}. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(a = 3\\sqrt{2}, -3\\sqrt{2}\\)",
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
    "id": "9b",
    "topicId": "y10-11c",
    "c": "11C",
    "t": "Simultaneous equations",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the values of \\(a\\) for which the graphs of \\(y = x + a\\) and \\(x^2 + y^2 = 9\\) intersect at two points.",
    "opts": [
      "\\(-3\\sqrt{2} < a < 3\\sqrt{2}\\)",
      "No points of intersection",
      "\\(\\(-3\\sqrt{2} < a < 3\\sqrt{2}\\) + 2\\)",
      "\\(\\(-3\\sqrt{2} < a < 3\\sqrt{2}\\) + 3\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Set discriminant greater than 0.",
    "solution": "\\(\\Delta > 0 \\Rightarrow 72-4a^2 > 0 \\Rightarrow a^2 < 18 \\Rightarrow -3\\sqrt{2} < a < 3\\sqrt{2}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Simultaneous equations: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
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
        "workingOut": "\\(-3\\sqrt{2} < a < 3\\sqrt{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: -3\\sqrt{2} < a < 3\\sqrt{2}. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(-3\\sqrt{2} < a < 3\\sqrt{2}\\)",
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
    "id": "9c",
    "topicId": "y10-11c",
    "c": "11C",
    "t": "Simultaneous equations",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the values of \\(a\\) for which the graphs of \\(y = x + a\\) and \\(x^2 + y^2 = 9\\) intersect at no points.",
    "opts": [
      "\\(a < -3\\sqrt{2}\\) or \\(a > 3\\sqrt{2}\\)",
      "No points of intersection",
      "\\(\\(a < -3\\sqrt{2}\\) or \\(a > 3\\sqrt{2}\\) + 2\\)",
      "\\(\\(a < -3\\sqrt{2}\\) or \\(a > 3\\sqrt{2}\\) + 3\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Set discriminant less than 0.",
    "solution": "\\(\\Delta < 0 \\Rightarrow a^2 > 18 \\Rightarrow a < -3\\sqrt{2}\\) or \\(a > 3\\sqrt{2}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Simultaneous equations: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
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
        "workingOut": "\\(a < -3\\sqrt{2}\\) or \\(a > 3\\sqrt{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: a < -3\\sqrt{2}\\) or \\(a > 3\\sqrt{2}. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(a < -3\\sqrt{2}\\) or \\(a > 3\\sqrt{2}\\)",
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
    "id": "10",
    "topicId": "y10-11c",
    "c": "11C",
    "t": "Simultaneous equations",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the points of intersection of the circles \\(x^2 + y^2 = 9\\) and \\((x - 2)^2 + y^2 = 9\\).",
    "opts": [
      "\\((1, 2\\sqrt{2}), (1, -2\\sqrt{2})\\)",
      "No points of intersection",
      "\\(\\((1, 2\\sqrt{2}), (1, -2\\sqrt{2})\\) + 2\\)",
      "\\(\\((1, 2\\sqrt{2}), (1, -2\\sqrt{2})\\) + 3\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Substitute \\(y^2 = 9-x^2\\) into the second circle.",
    "solution": "\\(y^2=9-x^2 \\Rightarrow (x-2)^2+9-x^2=9 \\Rightarrow x^2-4x+4-x^2=0 \\Rightarrow 4x=4 \\Rightarrow x=1\\). Sub into \\(y^2=9-x^2 \\Rightarrow y^2=8 \\Rightarrow y=\\pm2\\sqrt{2}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Simultaneous equations: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "Identify given data",
        "graphData": {
          "jsxGraph": {
            "width": 340,
            "height": 340,
            "boundingbox": [
              -4.5,
              4.5,
              4.5,
              -4.5
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-4.5,0],[4.5,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-4.5],[0,4.5]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [3.96, -1.575, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 4.05, 'y'], {fontSize:13, color:'#64748b'}); board.create('circle', [[0,0], 3], {strokeColor:'#6366f1', strokeWidth:2.5, fillColor:'#6366f1', fillOpacity:0.06}); board.create('point', [0,0], {name:'O', size:2, color:'#64748b', fixed:true}); board.create('text', [1.5, 2.25, 'x² + y² = 9'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
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
        "workingOut": "\\((1, 2\\sqrt{2}), (1, -2\\sqrt{2})\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (1, 2\\sqrt{2}), (1, -2\\sqrt{2}). Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\((1, 2\\sqrt{2}), (1, -2\\sqrt{2})\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 340,
        "height": 340,
        "boundingbox": [
          -4.5,
          4.5,
          4.5,
          -4.5
        ],
        "script": "board.suspendUpdate(); board.create('arrow', [[-4.5,0],[4.5,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-4.5],[0,4.5]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [3.96, -1.575, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 4.05, 'y'], {fontSize:13, color:'#64748b'}); board.create('circle', [[0,0], 3], {strokeColor:'#6366f1', strokeWidth:2.5, fillColor:'#6366f1', fillOpacity:0.06}); board.create('point', [0,0], {name:'O', size:2, color:'#64748b', fixed:true}); board.create('text', [1.5, 2.25, 'x² + y² = 9'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  }
];
