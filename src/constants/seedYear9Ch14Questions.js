export const Y9_CH14_QUESTIONS = [
  {
    "id": "y9-14a-q1a",
    "topicId": "y9-14a",
    "c": "14A",
    "t": "Solving simultaneous equations by drawing graphs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Determine by substitution whether \\( (2, 3) \\) is a solution of the simultaneous equations \\( x + y = 5 \\) and \\( y = x + 1 \\). (Answer Yes or No)",
    "opts": [
      "\\(\\dfrac{12}{5}\\)",
      "\\(\\dfrac{13}{6}\\)",
      "\\(Yes\\)",
      "\\(Yes + 1\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Substitute x = 2 and y = 3 into both equations to see if they hold true.",
    "solution": "Substituting \\( x = 2 \\) and \\( y = 3 \\) into both equations: \n\\( 2 + 3 = 5 \\) (True)\n\\( 3 = 2 + 1 \\) (True).\nSince both are true, the point is a solution.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Solving simultaneous equations by drawing graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(2 + 3 = 5 \\quad \\text{(True)}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(3 = 2 + 1 \\quad \\text{(True)}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\text{Yes}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Yes. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(Yes\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-14a-q1b",
    "topicId": "y9-14a",
    "c": "14A",
    "t": "Solving simultaneous equations by drawing graphs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Determine by substitution whether \\( (-2, 5) \\) is a solution of the simultaneous equations \\( x + y = 4 \\) and \\( y = x + 7 \\). (Answer Yes or No)",
    "opts": [
      "\\(\\dfrac{12}{5}\\)",
      "\\(\\dfrac{13}{6}\\)",
      "\\(No\\)",
      "\\(No + 1\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Substitute x = -2 and y = 5 into the equations and verify if they are true.",
    "solution": "Substituting \\( x = -2 \\) and \\( y = 5 \\) into the equations: \n\\( -2 + 5 = 3 \\neq 4 \\) (False).\nSince the first equation is not satisfied, the point is not a solution.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Solving simultaneous equations by drawing graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(-2 + 5 = 3 \\neq 4 \\quad \\text{(False)}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(\\text{No}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(No\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: No. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(No\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-14a-q2ai",
    "topicId": "y9-14a",
    "c": "14A",
    "t": "Solving simultaneous equations by drawing graphs",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Sketch the graph of the line: \\( y = x \\).",
    "answer": "Graph drawn correctly",
    "hint": "Plot the points (0, 0) and (1, 1), then draw a straight line through them.",
    "solution": "Graph drawn correctly",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Solving simultaneous equations by drawing graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
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
            "script": "board.suspendUpdate(); board.create('arrow', [[-6,0],[6,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-6],[0,6]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.28, -2.0999999999999996, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.4, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return (1)*x + (0); }, -5.5, 5.5], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [2.2, 3.5, 'y = 1x+0'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
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
        "workingOut": "Graph drawn correctly",
        "graphData": null
      },
      {
        "explanation": "Final answer: Graph drawn correctly. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Graph drawn correctly",
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
        "script": "board.suspendUpdate(); board.create('arrow', [[-6,0],[6,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-6],[0,6]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.28, -2.0999999999999996, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.4, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return (1)*x + (0); }, -5.5, 5.5], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [2.2, 3.5, 'y = 1x+0'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-14a-q2aii",
    "topicId": "y9-14a",
    "c": "14A",
    "t": "Solving simultaneous equations by drawing graphs",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Sketch the graph of the line: \\( y = 3x - 4 \\).",
    "answer": "Graph drawn correctly",
    "hint": "Identify the y-intercept at (0, -4) and calculate a second point such as (2, 2) to plot.",
    "solution": "Graph drawn correctly",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Solving simultaneous equations by drawing graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
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
            "script": "board.suspendUpdate(); board.create('arrow', [[-6,0],[6,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-6],[0,6]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.28, -2.0999999999999996, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.4, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return (3)*x + (-4); }, -5.5, 5.5], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [2.2, 3.5, 'y = 3x-4'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
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
        "workingOut": "Graph drawn correctly",
        "graphData": null
      },
      {
        "explanation": "Final answer: Graph drawn correctly. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Graph drawn correctly",
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
        "script": "board.suspendUpdate(); board.create('arrow', [[-6,0],[6,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-6],[0,6]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.28, -2.0999999999999996, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.4, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return (3)*x + (-4); }, -5.5, 5.5], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [2.2, 3.5, 'y = 3x-4'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-14a-q2aiii",
    "topicId": "y9-14a",
    "c": "14A",
    "t": "Solving simultaneous equations by drawing graphs",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Sketch the graph of the line: \\( x + y = 8 \\).",
    "answer": "Graph drawn correctly",
    "hint": "Find where the line crosses the x-axis (y = 0) and y-axis (x = 0), and connect them.",
    "solution": "Graph drawn correctly",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Solving simultaneous equations by drawing graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
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
        "workingOut": "Graph drawn correctly",
        "graphData": null
      },
      {
        "explanation": "Final answer: Graph drawn correctly. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Graph drawn correctly",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-14a-q2bi",
    "topicId": "y9-14a",
    "c": "14A",
    "t": "Solving simultaneous equations by drawing graphs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Use graphs to solve the pair of equations simultaneously for \\( x \\) and \\( y \\):\n\\( y = x \\)\n\\( y = 3x - 4 \\)\nFormat: x=_, y=_",
    "opts": [
      "\\(-x=2, y=2\\)",
      "\\(x=2, y=2\\)",
      "\\(x=2, y=2 + 1\\)",
      "\\(x=3, y=3\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Find the x and y coordinates of the intersection point of the two lines.",
    "solution": "The intersection of the lines \\( y = x \\) and \\( y = 3x - 4 \\) is the point \\( (2, 2) \\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Solving simultaneous equations by drawing graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(x = 3x - 4 \\implies 2x = 4 \\implies x = 2\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(y = 2\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(x=2, y=2\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: x=2, y=2. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(x=2, y=2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-14a-q2bii",
    "topicId": "y9-14a",
    "c": "14A",
    "t": "Solving simultaneous equations by drawing graphs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Use graphs to solve the pair of equations simultaneously for \\( x \\) and \\( y \\):\n\\( y = x \\)\n\\( x + y = 8 \\)\nFormat: x=_, y=_",
    "opts": [
      "\\(-x=4, y=4\\)",
      "\\(\\dfrac{13}{6}\\)",
      "\\(x=4, y=4\\)",
      "\\(x=4, y=4 + 1\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Find the intersection point of the two graphs on your sketch.",
    "solution": "The intersection of the lines \\( y = x \\) and \\( x + y = 8 \\) is the point \\( (4, 4) \\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Solving simultaneous equations by drawing graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(x + x = 8 \\implies 2x = 8 \\implies x = 4\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(y = 4\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(x=4, y=4\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: x=4, y=4. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(x=4, y=4\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-14a-q2biii",
    "topicId": "y9-14a",
    "c": "14A",
    "t": "Solving simultaneous equations by drawing graphs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Use graphs to solve the pair of equations simultaneously for \\( x \\) and \\( y \\):\n\\( y = 3x - 4 \\)\n\\( x + y = 8 \\)\nFormat: x=_, y=_",
    "opts": [
      "\\(-x=3, y=5\\)",
      "\\(\\dfrac{13}{6}\\)",
      "\\(x=3, y=5\\)",
      "\\(x=3, y=5 + 1\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Identify the intersection coordinates from your plotted lines.",
    "solution": "The intersection of the lines \\( y = 3x - 4 \\) and \\( x + y = 8 \\) is the point \\( (3, 5) \\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Solving simultaneous equations by drawing graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(x + (3x - 4) = 8 \\implies 4x - 4 = 8 \\implies 4x = 12 \\implies x = 3\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(y = 3(3) - 4 = 5\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(x=3, y=5\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: x=3, y=5. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(x=3, y=5\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-14a-q3a",
    "topicId": "y9-14a",
    "c": "14A",
    "t": "Solving simultaneous equations by drawing graphs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Solve the pair of simultaneous equations by drawing graphs:\n\\( y = x + 3 \\)\n\\( y = 2x + 5 \\)\nFormat: x=_, y=_",
    "opts": [
      "\\(-x=-2, y=1\\)",
      "\\(x=-2, y=1\\)",
      "\\(x=-2, y=1 + 1\\)",
      "\\(x=-3, y=1\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Plot both straight lines and find their point of intersection.",
    "solution": "The lines intersect at \\( (-2, 1) \\). Let's verify by substitution:\n\\( 1 = -2 + 3 \\) (True)\n\\( 1 = 2(-2) + 5 \\) (True).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Solving simultaneous equations by drawing graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(x + 3 = 2x + 5\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(x = -2\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(y = -2 + 3 = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: x=-2, y=1. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(x=-2, y=1\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-14a-q3b",
    "topicId": "y9-14a",
    "c": "14A",
    "t": "Solving simultaneous equations by drawing graphs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Solve the pair of simultaneous equations by drawing graphs:\n\\( y = 2x - 1 \\)\n\\( y = 3x - 3 \\)\nFormat: x=_, y=_",
    "opts": [
      "\\(-x=2, y=3\\)",
      "\\(x=2, y=3\\)",
      "\\(x=2, y=3 + 1\\)",
      "\\(x=3, y=3\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Graph the two lines using intercepts and find their intersection.",
    "solution": "The lines intersect at \\( (2, 3) \\). Let's verify by substitution:\n\\( 3 = 2(2) - 1 \\) (True)\n\\( 3 = 3(2) - 3 \\) (True).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Solving simultaneous equations by drawing graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(2x - 1 = 3x - 3\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(x = 2\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(y = 2(2) - 1 = 3\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: x=2, y=3. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(x=2, y=3\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-14a-q3c",
    "topicId": "y9-14a",
    "c": "14A",
    "t": "Solving simultaneous equations by drawing graphs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Solve the pair of simultaneous equations by drawing graphs:\n\\( y = x + 1 \\)\n\\( y = 7 - x \\)\nFormat: x=_, y=_",
    "opts": [
      "\\(-x=3, y=4\\)",
      "\\(\\dfrac{13}{6}\\)",
      "\\(x=3, y=4\\)",
      "\\(x=3, y=4 + 1\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Plot the line with positive slope and the line with negative slope, then identify the intersection.",
    "solution": "The lines intersect at \\( (3, 4) \\). Let's verify by substitution:\n\\( 4 = 3 + 1 \\) (True)\n\\( 4 = 7 - 3 \\) (True).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Solving simultaneous equations by drawing graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(x + 1 = 7 - x\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(2x = 6 \\implies x = 3\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(y = 3 + 1 = 4\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: x=3, y=4. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(x=3, y=4\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-14a-q3d",
    "topicId": "y9-14a",
    "c": "14A",
    "t": "Solving simultaneous equations by drawing graphs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Solve the pair of simultaneous equations by drawing graphs:\n\\( y = 2x + 2 \\)\n\\( y = 8 - x \\)\nFormat: x=_, y=_",
    "opts": [
      "\\(-x=2, y=6\\)",
      "\\(x=2, y=6\\)",
      "\\(x=2, y=6 + 1\\)",
      "\\(x=3, y=6\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Graph the two equations and find where they cross.",
    "solution": "The lines intersect at \\( (2, 6) \\). Let's verify by substitution:\n\\( 6 = 2(2) + 2 \\) (True)\n\\( 6 = 8 - 2 \\) (True).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Solving simultaneous equations by drawing graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(2x + 2 = 8 - x\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(3x = 6 \\implies x = 2\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(y = 8 - 2 = 6\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: x=2, y=6. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(x=2, y=6\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-14a-q3e",
    "topicId": "y9-14a",
    "c": "14A",
    "t": "Solving simultaneous equations by drawing graphs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Solve the pair of simultaneous equations by drawing graphs:\n\\( x + y = 5 \\)\n\\( 2x + y = 7 \\)\nFormat: x=_, y=_",
    "opts": [
      "\\(-x=2, y=3\\)",
      "\\(x=2, y=3\\)",
      "\\(x=2, y=3 + 1\\)",
      "\\(x=3, y=3\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Use x-intercepts and y-intercepts to sketch both lines on the same axes.",
    "solution": "The lines intersect at \\( (2, 3) \\). Let's verify by substitution:\n\\( 2 + 3 = 5 \\) (True)\n\\( 2(2) + 3 = 7 \\) (True).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Solving simultaneous equations by drawing graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(y = 5 - x \\quad \\text{and} \\quad y = 7 - 2x\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(5 - x = 7 - 2x \\implies x = 2\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(y = 5 - 2 = 3\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: x=2, y=3. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(x=2, y=3\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-14a-q3f",
    "topicId": "y9-14a",
    "c": "14A",
    "t": "Solving simultaneous equations by drawing graphs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Solve the pair of simultaneous equations by drawing graphs:\n\\( x - y = 2 \\)\n\\( 3x + y = 6 \\)\nFormat: x=_, y=_",
    "opts": [
      "\\(-x=2, y=0\\)",
      "\\(x=2, y=0\\)",
      "\\(x=2, y=0 + 1\\)",
      "\\(x=3, y=0\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Identify the coordinates where the lines cross.",
    "solution": "The lines intersect at \\( (2, 0) \\). Let's verify by substitution:\n\\( 2 - 0 = 2 \\) (True)\n\\( 3(2) + 0 = 6 \\) (True).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Solving simultaneous equations by drawing graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(y = x - 2 \\quad \\text{and} \\quad y = 6 - 3x\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(x - 2 = 6 - 3x \\implies 4x = 8 \\implies x = 2\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(y = 2 - 2 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: x=2, y=0. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(x=2, y=0\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-14a-q3g",
    "topicId": "y9-14a",
    "c": "14A",
    "t": "Solving simultaneous equations by drawing graphs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Solve the pair of simultaneous equations by drawing graphs:\n\\( y = x - 2 \\)\n\\( y = 3x - 8 \\)\nFormat: x=_, y=_",
    "opts": [
      "\\(-x=3, y=1\\)",
      "\\(\\dfrac{13}{6}\\)",
      "\\(x=3, y=1\\)",
      "\\(x=3, y=1 + 1\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Graph the two lines using slope-intercept form and find the intersection.",
    "solution": "The lines intersect at \\( (3, 1) \\). Let's verify by substitution:\n\\( 1 = 3 - 2 \\) (True)\n\\( 1 = 3(3) - 8 \\) (True).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Solving simultaneous equations by drawing graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(x - 2 = 3x - 8\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(2x = 6 \\implies x = 3\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(y = 3 - 2 = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: x=3, y=1. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(x=3, y=1\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-14a-q3h",
    "topicId": "y9-14a",
    "c": "14A",
    "t": "Solving simultaneous equations by drawing graphs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Solve the pair of simultaneous equations by drawing graphs:\n\\( y = -3x + 4 \\)\n\\( y = x \\)\nFormat: x=_, y=_",
    "opts": [
      "\\(-x=1, y=1\\)",
      "\\(\\dfrac{13}{6}\\)",
      "\\(x=1, y=1\\)",
      "\\(x=1, y=1 + 1\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Graph the line y = x and the line with negative slope, then note the intersection point.",
    "solution": "The lines intersect at \\( (1, 1) \\). Let's verify by substitution:\n\\( 1 = -3(1) + 4 \\) (True)\n\\( 1 = 1 \\) (True).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Solving simultaneous equations by drawing graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(-3x + 4 = x\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(4x = 4 \\implies x = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(y = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: x=1, y=1. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(x=1, y=1\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-14a-q3i",
    "topicId": "y9-14a",
    "c": "14A",
    "t": "Solving simultaneous equations by drawing graphs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Solve the pair of simultaneous equations by drawing graphs:\n\\( y = 2x - 1 \\)\n\\( y = 5 - x \\)\nFormat: x=_, y=_",
    "opts": [
      "\\(-x=2, y=3\\)",
      "\\(x=2, y=3\\)",
      "\\(x=2, y=3 + 1\\)",
      "\\(x=3, y=3\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Draw both straight lines and locate where they cross.",
    "solution": "The lines intersect at \\( (2, 3) \\). Let's verify by substitution:\n\\( 3 = 2(2) - 1 \\) (True)\n\\( 3 = 5 - 2 \\) (True).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Solving simultaneous equations by drawing graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(2x - 1 = 5 - x\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(3x = 6 \\implies x = 2\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(y = 5 - 2 = 3\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: x=2, y=3. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(x=2, y=3\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-14a-q3j",
    "topicId": "y9-14a",
    "c": "14A",
    "t": "Solving simultaneous equations by drawing graphs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Solve the pair of simultaneous equations by drawing graphs:\n\\( y = 3x - 2 \\)\n\\( y = 10 - x \\)\nFormat: x=_, y=_",
    "opts": [
      "\\(-x=3, y=7\\)",
      "\\(\\dfrac{13}{6}\\)",
      "\\(x=3, y=7\\)",
      "\\(x=3, y=7 + 1\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Identify where the line with gradient 3 meets the line with gradient -1.",
    "solution": "The lines intersect at \\( (3, 7) \\). Let's verify by substitution:\n\\( 7 = 3(3) - 2 \\) (True)\n\\( 7 = 10 - 3 \\) (True).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Solving simultaneous equations by drawing graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(3x - 2 = 10 - x\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(4x = 12 \\implies x = 3\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(y = 10 - 3 = 7\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: x=3, y=7. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(x=3, y=7\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-14a-q3k",
    "topicId": "y9-14a",
    "c": "14A",
    "t": "Solving simultaneous equations by drawing graphs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Solve the pair of simultaneous equations by drawing graphs:\n\\( x - y = 3 \\)\n\\( x = 2y - 2 \\)\nFormat: x=_, y=_",
    "opts": [
      "\\(-x=8, y=5\\)",
      "\\(\\dfrac{13}{6}\\)",
      "\\(x=8, y=5\\)",
      "\\(x=8, y=5 + 1\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Rearrange both equations to standard straight line format (e.g. y = mx + c) and plot.",
    "solution": "The lines intersect at \\( (8, 5) \\). Let's verify by substitution:\n\\( 8 - 5 = 3 \\) (True)\n\\( 8 = 2(5) - 2 \\) (True).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Solving simultaneous equations by drawing graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\((2y - 2) - y = 3\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(y = 5\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(x = 2(5) - 2 = 8\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: x=8, y=5. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(x=8, y=5\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-14a-q3l",
    "topicId": "y9-14a",
    "c": "14A",
    "t": "Solving simultaneous equations by drawing graphs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Solve the pair of simultaneous equations by drawing graphs:\n\\( x + 3y = 7 \\)\n\\( 2x - y = -7 \\)\nFormat: x=_, y=_",
    "opts": [
      "\\(-x=-2, y=3\\)",
      "\\(x=-2, y=3\\)",
      "\\(x=-2, y=3 + 1\\)",
      "\\(x=-3, y=3\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Identify the coordinates where both lines cross.",
    "solution": "The lines intersect at \\( (-2, 3) \\). Let's verify by substitution:\n\\( -2 + 3(3) = 7 \\) (True)\n\\( 2(-2) - 3 = -7 \\) (True).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Solving simultaneous equations by drawing graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(y = -\\frac{1}{3}x + \\frac{7}{3} \\quad \\text{and} \\quad y = 2x + 7\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(2x + 7 = -\\frac{1}{3}x + \\frac{7}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(6x + 21 = -x + 7 \\implies 7x = -14 \\implies x = -2\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: x=-2, y=3. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(x=-2, y=3\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-14a-q4a",
    "topicId": "y9-14a",
    "c": "14A",
    "t": "Solving simultaneous equations by drawing graphs",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Suppose you plot the lines \\( y = 3x + 1 \\) and \\( y = 3x + 4 \\) on the same set of axes. What do you notice about these two lines?",
    "opts": [
      "They are parallel lines",
      "They are perpendicular lines",
      "They are the exact same line",
      "They intersect at the origin"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Compare the gradients (slopes) of both linear equations.",
    "solution": "Both lines have the same gradient \\( m = 3 \\) but different y-intercepts (1 and 4). Thus, they are parallel.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Solving simultaneous equations by drawing graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
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
            "script": "board.suspendUpdate(); board.create('arrow', [[-6,0],[6,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-6],[0,6]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.28, -2.0999999999999996, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.4, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return (3)*x + (+1); }, -5.5, 5.5], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [2.2, 3.5, 'y = 3x++1'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(m = 3\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\text{They are parallel}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: They are parallel lines. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "They are parallel lines",
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
        "script": "board.suspendUpdate(); board.create('arrow', [[-6,0],[6,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-6],[0,6]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.28, -2.0999999999999996, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.4, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return (3)*x + (+1); }, -5.5, 5.5], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [2.2, 3.5, 'y = 3x++1'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-14a-q4b",
    "topicId": "y9-14a",
    "c": "14A",
    "t": "Solving simultaneous equations by drawing graphs",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "How many solutions do the simultaneous equations \\( y = 3x + 1 \\) and \\( y = 3x + 4 \\) have?",
    "answer": "0",
    "hint": "Parallel lines do not intersect. How many common points do they share?",
    "solution": "0",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Solving simultaneous equations by drawing graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(\\text{Number of solutions} = 0\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(0\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 0. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(0\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-14a-q5a",
    "topicId": "y9-14a",
    "c": "14A",
    "t": "Solving simultaneous equations by drawing graphs",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Suppose you plot the lines \\( x + y = 4 \\) and \\( 2x + 2y = 8 \\) on the same set of axes. What do you notice about these two lines?",
    "opts": [
      "They are the exact same line (coincident)",
      "They are parallel lines",
      "They are perpendicular lines",
      "They intersect at the coordinate (4, 4)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Try to simplify the second equation by dividing all terms by 2.",
    "solution": "Dividing both sides of the second equation \\( 2x + 2y = 8 \\) by 2 gives \\( x + y = 4 \\), which is identical to the first equation.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Solving simultaneous equations by drawing graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(x + y = 4\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(\\text{Same line}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "They are the exact same line (coincident)",
        "graphData": null
      },
      {
        "explanation": "Final answer: They are the exact same line (coincident). Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "They are the exact same line (coincident)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-14a-q5b",
    "topicId": "y9-14a",
    "c": "14A",
    "t": "Solving simultaneous equations by drawing graphs",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "How many solutions do the simultaneous equations \\( x + y = 4 \\) and \\( 2x + 2y = 8 \\) have?",
    "opts": [
      "Infinitely many solutions",
      "Zero solutions",
      "Exactly one solution",
      "Exactly two solutions"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Think about how many points two overlapping lines share.",
    "solution": "Since the two equations represent the exact same line, every point on the line is a solution. Thus, there are infinitely many solutions.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Solving simultaneous equations by drawing graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(\\text{Infinitely many solutions}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "Infinitely many solutions",
        "graphData": null
      },
      {
        "explanation": "Final answer: Infinitely many solutions. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "Infinitely many solutions",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-14a-q6",
    "topicId": "y9-14a",
    "c": "14A",
    "t": "Solving simultaneous equations by drawing graphs",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "How many solutions do the simultaneous equations \\( y = 3x + 2 \\) and \\( 3x - y = 5 \\) have?",
    "answer": "0",
    "hint": "Rearrange the second equation into y = mx + c form and compare the gradients.",
    "solution": "0",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Solving simultaneous equations by drawing graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(y = 3x - 5\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(m_1 = 3, \\; m_2 = 3\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(0\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 0. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(0\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-14a-q7ai",
    "topicId": "y9-14a",
    "c": "14A",
    "t": "Solving simultaneous equations by drawing graphs",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Solve the pair of simultaneous equations by drawing graphs:\n\\( y = x + 3 \\)\n\\( y = 3x + 1 \\)\nFormat: x=_, y=_",
    "opts": [
      "\\(-x=1, y=4\\)",
      "\\(\\dfrac{13}{6}\\)",
      "\\(x=1, y=4\\)",
      "\\(x=1, y=4 + 1\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Graph the two lines and find their point of intersection.",
    "solution": "The lines intersect at \\( (1, 4) \\). Verify by substitution:\n\\( 4 = 1 + 3 \\) (True)\n\\( 4 = 3(1) + 1 \\) (True).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Solving simultaneous equations by drawing graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(x + 3 = 3x + 1\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(2x = 2 \\implies x = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(y = 1 + 3 = 4\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: x=1, y=4. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(x=1, y=4\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-14a-q7aii",
    "topicId": "y9-14a",
    "c": "14A",
    "t": "Solving simultaneous equations by drawing graphs",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Solve the pair of simultaneous equations by drawing graphs:\n\\( y = 4x - 2 \\)\n\\( y = x + 4 \\)\nFormat: x=_, y=_",
    "opts": [
      "\\(-x=2, y=6\\)",
      "\\(x=2, y=6\\)",
      "\\(x=2, y=6 + 1\\)",
      "\\(x=3, y=6\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Plot both lines and look for their intersection on the coordinate plane.",
    "solution": "The lines intersect at \\( (2, 6) \\). Verify by substitution:\n\\( 6 = 4(2) - 2 \\) (True)\n\\( 6 = 2 + 4 \\) (True).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Solving simultaneous equations by drawing graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(4x - 2 = x + 4\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(3x = 6 \\implies x = 2\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(y = 2 + 4 = 6\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: x=2, y=6. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(x=2, y=6\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-14a-q7aiii",
    "topicId": "y9-14a",
    "c": "14A",
    "t": "Solving simultaneous equations by drawing graphs",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Solve the pair of simultaneous equations by drawing graphs:\n\\( 3x + 2y = 12 \\)\n\\( 2x - y = 1 \\)\nFormat: x=_, y=_",
    "opts": [
      "\\(-x=2, y=3\\)",
      "\\(x=2, y=3\\)",
      "\\(x=2, y=3 + 1\\)",
      "\\(x=3, y=3\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Convert both linear equations into slope-intercept form and find their intersection.",
    "solution": "The lines intersect at \\( (2, 3) \\). Verify by substitution:\n\\( 3(2) + 2(3) = 12 \\) (True)\n\\( 2(2) - 3 = 1 \\) (True).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Solving simultaneous equations by drawing graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(y = -\\frac{3}{2}x + 6 \\quad \\text{and} \\quad y = 2x - 1\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(2x - 1 = -\\frac{3}{2}x + 6\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(4x - 2 = -3x + 12 \\implies 7x = 14 \\implies x = 2\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: x=2, y=3. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(x=2, y=3\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-14a-q7b",
    "topicId": "y9-14a",
    "c": "14A",
    "t": "Solving simultaneous equations by drawing graphs",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "What is a main limitation of using graphs to solve a pair of simultaneous equations?",
    "opts": [
      "It can be difficult to read non-integer (fractional or decimal) coordinates accurately",
      "Graphs can only show parallel lines",
      "Linear equations cannot be represented on a Cartesian plane",
      "It is only valid for positive numbers"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Consider what happens when the intersection point is a decimal value like (1.43, 2.19).",
    "solution": "If the intersection point involves fractional values (e.g., x = 1.34, y = 2.57), it is nearly impossible to read this exactly from a hand-drawn graph.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Solving simultaneous equations by drawing graphs: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(\\text{Accuracy is limited for fractional/decimal values.}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "It can be difficult to read non-integer (fractional or decimal) coordinates accurately",
        "graphData": null
      },
      {
        "explanation": "Final answer: It can be difficult to read non-integer (fractional or decimal) coordinates accurately. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "It can be difficult to read non-integer (fractional or decimal) coordinates accurately",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  }
];
