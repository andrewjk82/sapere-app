export const Y9_CH14F_QUESTIONS = [
  {
    "id": "y9-14f-q1a",
    "topicId": "y9-14f",
    "c": "14F",
    "t": "Families of straight lines",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Describe the geometric properties of the family of straight lines given by the equation:\n\\( y = x + b \\)\nwhere \\( b \\) is a real parameter, by considering specific lines like \\( y = x + 1 \\), \\( y = x + 3 \\), and \\( y = x - 2 \\).",
    "answer": "This represents a family of parallel lines, all having a gradient of 1, but with different y-intercepts b.",
    "hint": "Look at the slope (coefficient of x) and the y-intercept of the lines in the family.",
    "solution": "This represents a family of parallel lines, all having a gradient of 1, but with different y-intercepts b.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Families of straight lines: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(y = x + b \\implies m = 1\\)",
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
        "workingOut": "\\(b \\text{ represents the varying y-intercept}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\text{The lines are all parallel to } y = x\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: This represents a family of parallel lines, all having a gradient of 1, but with different y-intercepts b.. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "This represents a family of parallel lines, all having a gradient of 1, but with different y-intercepts b.",
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
    "id": "y9-14f-q1b",
    "topicId": "y9-14f",
    "c": "14F",
    "t": "Families of straight lines",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Describe the geometric properties of the family of straight lines given by the equation:\n\\( y = mx + 2 \\)\nwhere \\( m \\) is a real parameter, by considering specific lines like \\( y = 2x + 2 \\), \\( y = -x + 2 \\), and \\( y = -3x + 2 \\).",
    "answer": "This represents a family of lines that all pass through the common point (0, 2), which is their y-intercept.",
    "hint": "Substitute x = 0 into the equation and observe what happens to the parameter m.",
    "solution": "This represents a family of lines that all pass through the common point (0, 2), which is their y-intercept.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Families of straight lines: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(\\text{For any value of } m, \\; x = 0 \\implies y = 2\\)",
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
            "script": "board.suspendUpdate(); board.create('arrow', [[-6,0],[6,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-6],[0,6]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.28, -2.0999999999999996, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.4, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return (2)*x + (+2); }, -5.5, 5.5], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [2.2, 3.5, 'y = 2x++2'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(m \\text{ represents the varying gradient}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\text{A family of lines intersecting at } (0, 2)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: This represents a family of lines that all pass through the common point (0, 2), which is their y-intercept.. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "This represents a family of lines that all pass through the common point (0, 2), which is their y-intercept.",
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
        "script": "board.suspendUpdate(); board.create('arrow', [[-6,0],[6,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-6],[0,6]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.28, -2.0999999999999996, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.4, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return (2)*x + (+2); }, -5.5, 5.5], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [2.2, 3.5, 'y = 2x++2'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-14f-q1c",
    "topicId": "y9-14f",
    "c": "14F",
    "t": "Families of straight lines",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Describe the geometric properties of the family of straight lines given by the equation:\n\\( y = mx + 3 \\)\nwhere \\( m \\) is a real parameter, by considering specific lines like \\( y = 3x + 3 \\), \\( y = -2x + 3 \\), and \\( y = 4x + 3 \\).",
    "answer": "This represents a family of lines that all pass through the common point (0, 3), which is their y-intercept.",
    "hint": "Find the point where all these lines intersect by substituting x = 0.",
    "solution": "This represents a family of lines that all pass through the common point (0, 3), which is their y-intercept.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Families of straight lines: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(\\text{When } x = 0, \\; y = 3 \\implies (0, 3)\\)",
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
            "script": "board.suspendUpdate(); board.create('arrow', [[-6,0],[6,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-6],[0,6]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.28, -2.0999999999999996, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.4, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return (3)*x + (+3); }, -5.5, 5.5], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [2.2, 3.5, 'y = 3x++3'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(m \\text{ determines the steepness and direction (gradient)}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\text{The lines all intersect at } (0, 3)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: This represents a family of lines that all pass through the common point (0, 3), which is their y-intercept.. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "This represents a family of lines that all pass through the common point (0, 3), which is their y-intercept.",
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
        "script": "board.suspendUpdate(); board.create('arrow', [[-6,0],[6,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-6],[0,6]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.28, -2.0999999999999996, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.4, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return (3)*x + (+3); }, -5.5, 5.5], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [2.2, 3.5, 'y = 3x++3'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-14f-q2a",
    "topicId": "y9-14f",
    "c": "14F",
    "t": "Families of straight lines",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "The equations of two lines are \\( y = x + 4 \\) and \\( y = mx - 3 \\). For what value of \\( m \\) will the two lines not intersect?",
    "answer": "1",
    "hint": "Parallel lines have the same gradient and do not intersect.",
    "solution": "1",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Families of straight lines: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(y = x + 4 \\implies m_1 = 1\\)",
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
            "script": "board.suspendUpdate(); board.create('arrow', [[-6,0],[6,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-6],[0,6]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.28, -2.0999999999999996, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.4, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return (1)*x + (+4); }, -5.5, 5.5], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [2.2, 3.5, 'y = 1x++4'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(m = m_1 \\implies m = 1\\)",
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
        "script": "board.suspendUpdate(); board.create('arrow', [[-6,0],[6,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-6],[0,6]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.28, -2.0999999999999996, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.4, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return (1)*x + (+4); }, -5.5, 5.5], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [2.2, 3.5, 'y = 1x++4'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-14f-q2b",
    "topicId": "y9-14f",
    "c": "14F",
    "t": "Families of straight lines",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "The equations of two lines are \\( y = x + 4 \\) and \\( y = mx - 3 \\). For what values of \\( m \\) will the two lines intersect?",
    "opts": [
      "\\(\\dfrac{12}{5}\\)",
      "\\(\\dfrac{13}{6}\\)",
      "\\(m!=1\\)",
      "\\(m!=1 + 1\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Lines intersect if they have different gradients.",
    "solution": "Two lines will intersect at exactly one point if they are not parallel (different gradients).\nThe gradient of the first line is \\( 1 \\).\nThe gradient of the second line is \\( m \\).\nFor the lines to intersect, their gradients must be different:\n\\( m \\neq 1 \\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Families of straight lines: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(m_1 = 1 \\text{ and } m_2 = m\\)",
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
            "script": "board.suspendUpdate(); board.create('arrow', [[-6,0],[6,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-6],[0,6]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.28, -2.0999999999999996, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.4, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return (1)*x + (+4); }, -5.5, 5.5], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [2.2, 3.5, 'y = 1x++4'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(m \\neq 1\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(m!=1\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: m!=1. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(m!=1\\)",
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
        "script": "board.suspendUpdate(); board.create('arrow', [[-6,0],[6,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-6],[0,6]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.28, -2.0999999999999996, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.4, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return (1)*x + (+4); }, -5.5, 5.5], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [2.2, 3.5, 'y = 1x++4'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-14f-q2c",
    "topicId": "y9-14f",
    "c": "14F",
    "t": "Families of straight lines",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "The equations of two lines are \\( y = x + 4 \\) and \\( y = mx - 3 \\). Given that the lines intersect at \\( (7, 11) \\), find \\( m \\).",
    "answer": "2",
    "hint": "Substitute the x and y coordinates of the intersection point into the equation with m.",
    "solution": "2",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Families of straight lines: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(11 = 7m - 3\\)",
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
            "script": "board.suspendUpdate(); board.create('arrow', [[-6,0],[6,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-6],[0,6]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.28, -2.0999999999999996, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.4, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return (1)*x + (+4); }, -5.5, 5.5], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [2.2, 3.5, 'y = 1x++4'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(7m = 14 \\implies m = 2\\)",
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
        "script": "board.suspendUpdate(); board.create('arrow', [[-6,0],[6,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-6],[0,6]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.28, -2.0999999999999996, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.4, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return (1)*x + (+4); }, -5.5, 5.5], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [2.2, 3.5, 'y = 1x++4'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-14f-q3a",
    "topicId": "y9-14f",
    "c": "14F",
    "t": "Families of straight lines",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "The equations of two lines are \\( y = x - 2 \\) and \\( mx - 3y = 6 \\). For what value of \\( m \\) will the two lines not intersect?",
    "answer": "3",
    "hint": "Rearrange the second equation to y = (m/3)x - 2. Note that both lines share the y-intercept of -2.",
    "solution": "3",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Families of straight lines: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(y = \\frac{m}{3}x - 2\\)",
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
        "workingOut": "\\(\\text{Both lines have y-intercept } -2\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\text{Since intercepts are equal, they cannot be parallel and separate. No values of m.}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 3. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(3\\)",
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
    "requiresManualGrading": true
  },
  {
    "id": "y9-14f-q3b",
    "topicId": "y9-14f",
    "c": "14F",
    "t": "Families of straight lines",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "The equations of two lines are \\( y = x - 2 \\) and \\( mx - 3y = 6 \\). For what values of \\( m \\) will the two lines intersect?",
    "opts": [
      "All values of m",
      "\\(m!=3\\)",
      "\\(m=3\\)",
      "No values of m"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Since both lines pass through the point (0, -2), they always intersect regardless of the gradient.",
    "solution": "Rearrange the second equation to \\( y = \\frac{m}{3}x - 2 \\).\nBoth lines share the same y-intercept \\( (0, -2) \\).\n- If \\( m \\neq 3 \\), the gradients are different, so the lines intersect at exactly one point: \\( (0, -2) \\).\n- If \\( m = 3 \\), the lines are identical, so they intersect at infinitely many points.\nIn either case, the lines intersect. Thus, they intersect for **all values of m**.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Families of straight lines: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(\\text{Both lines pass through } (0, -2)\\)",
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
        "workingOut": "\\(\\text{They intersect at least at (0, -2) for all } m\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "All values of m",
        "graphData": null
      },
      {
        "explanation": "Final answer: All values of m. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "All values of m",
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
    "id": "y9-14f-q3c",
    "topicId": "y9-14f",
    "c": "14F",
    "t": "Families of straight lines",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "The equations of two lines are \\( y = x - 2 \\) and \\( mx - 3y = 6 \\). Given that the lines intersect at \\( (5, 3) \\), find \\( m \\).",
    "answer": "3",
    "hint": "Substitute x = 5 and y = 3 into the second equation.",
    "solution": "3",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Families of straight lines: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(5m - 3(3) = 6\\)",
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
        "workingOut": "\\(5m - 9 = 6 \\implies 5m = 15 \\implies m = 3\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(3\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 3. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(3\\)",
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
    "requiresManualGrading": true
  },
  {
    "id": "y9-14f-q4a",
    "topicId": "y9-14f",
    "c": "14F",
    "t": "Families of straight lines",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "The equations of two lines are \\( y = mx + 4 \\) and \\( 4x + 2y = 8 \\). For what values of \\( m \\) will the two lines not intersect?",
    "opts": [
      "\\(\\dfrac{12}{5}\\)",
      "\\(\\dfrac{13}{6}\\)",
      "\\(None\\)",
      "None + 1"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Rewrite the second equation and identify the y-intercept.",
    "solution": "Write the second equation in slope-intercept form:\n\\( 2y = -4x + 8 \\implies y = -2x + 4 \\).\nBoth lines have the y-intercept of \\( 4 \\). Since they both pass through \\( (0, 4) \\), they always intersect at least at that point.\nThus, there are no values of \\( m \\) for which they do not intersect.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Families of straight lines: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(y = -2x + 4\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(\\text{Both lines pass through } (0, 4) \\implies \\text{No values of m}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(None\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: None. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(None\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-14f-q4b",
    "topicId": "y9-14f",
    "c": "14F",
    "t": "Families of straight lines",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "The equations of two lines are \\( y = mx + 4 \\) and \\( 4x + 2y = 8 \\). For what values of \\( m \\) will the two lines intersect?",
    "opts": [
      "All values of m",
      "\\(m!=-2\\)",
      "\\(m=-2\\)",
      "No values of m"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Consider the y-intercepts of both lines.",
    "solution": "Since both lines pass through the point \\( (0, 4) \\), they will always intersect for any value of \\( m \\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Families of straight lines: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(\\text{They intersect at } (0, 4) \\text{ for all } m\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "All values of m",
        "graphData": null
      },
      {
        "explanation": "Final answer: All values of m. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "All values of m",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-14f-q4c",
    "topicId": "y9-14f",
    "c": "14F",
    "t": "Families of straight lines",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "For the values of \\( m \\) where the lines \\( y = mx + 4 \\) and \\( 4x + 2y = 8 \\) intersect, comment on the nature of their intersection.",
    "answer": "For m != -2, the lines intersect at exactly one point (0, 4).\nFor m = -2, the lines are identical, so they intersect at infinitely many points along the entire line.",
    "hint": "Compare the case where the gradients are different (m != -2) with the case where they are equal (m = -2).",
    "solution": "For m != -2, the lines intersect at exactly one point (0, 4).\nFor m = -2, the lines are identical, so they intersect at infinitely many points along the entire line.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Families of straight lines: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(m \\neq -2 \\implies \\text{One intersection point at } (0, 4)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(m = -2 \\implies \\text{Lines are identical, infinitely many intersection points}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "For m != -2, the lines intersect at exactly one point (0, 4).\nFor m = -2, the lines are identical, so they intersect at infinitely many points along the entire line.",
        "graphData": null
      },
      {
        "explanation": "Final answer: For m != -2, the lines intersect at exactly one point (0, 4).\nFor m = -2, the lines are identical, so they intersect at infinitely many points along the entire line.. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "For m != -2, the lines intersect at exactly one point (0, 4).\nFor m = -2, the lines are identical, so they intersect at infinitely many points along the entire line.",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-14f-q5a",
    "topicId": "y9-14f",
    "c": "14F",
    "t": "Families of straight lines",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "The equations of two lines are \\( x + 3y = 6 \\) and \\( 2x + 6y = k \\). For what value of \\( k \\) will the two lines intersect?",
    "opts": [
      "\\(-12\\)",
      "\\(11\\)",
      "\\(12\\)",
      "\\(13\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Since the lines have the same coefficients on the left-hand side, they are parallel. They can only intersect if they represent the same line.",
    "solution": "Express both lines in slope-intercept form:\n1) \\( 3y = -x + 6 \\implies y = -\\frac{1}{3}x + 2 \\) (gradient is \\( -\\frac{1}{3} \\))\n2) \\( 6y = -2x + k \\implies y = -\\frac{1}{3}x + \\frac{k}{6} \\) (gradient is \\( -\\frac{1}{3} \\))\nSince they have the same gradient, they are parallel. Parallel lines only intersect if they are the same line (infinitely many solutions).\nThey will be the same line if their y-intercepts are equal:\n\\( \\frac{k}{6} = 2 \\implies k = 12 \\).\nThus, the lines intersect only when \\( k = 12 \\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Families of straight lines: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(m_1 = -\\frac{1}{3} \\text{ and } m_2 = -\\frac{1}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(\\frac{k}{6} = 2 \\implies k = 12\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(12\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 12. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(12\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-14f-q5b",
    "topicId": "y9-14f",
    "c": "14F",
    "t": "Families of straight lines",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "The equations of two lines are \\( x + 3y = 6 \\) and \\( 2x + 6y = k \\). For what values of \\( k \\) will the two lines not intersect?",
    "opts": [
      "\\(\\dfrac{13}{6}\\)",
      "\\(k!=12\\)",
      "\\(k!=12 + 1\\)",
      "\\(k!=13\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "The lines do not intersect if they are parallel but not identical.",
    "solution": "The lines are parallel since they both have a gradient of \\( -\\frac{1}{3} \\).\nThey will not intersect if they are parallel and distinct (different y-intercepts).\nThis happens when \\( k \\neq 12 \\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Families of straight lines: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(\\frac{k}{6} \\neq 2 \\implies k \\neq 12\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(k!=12\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: k!=12. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(k!=12\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-14f-q5c",
    "topicId": "y9-14f",
    "c": "14F",
    "t": "Families of straight lines",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "For the value of \\( k \\) where the lines \\( x + 3y = 6 \\) and \\( 2x + 6y = k \\) intersect, comment on the nature of their intersection.",
    "answer": "For k = 12, the two equations represent the same line.\nTherefore, they intersect at infinitely many points.",
    "hint": "Substitute k = 12 into the second equation and compare it to the first equation.",
    "solution": "For k = 12, the two equations represent the same line.\nTherefore, they intersect at infinitely many points.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Families of straight lines: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(2x + 6y = 12 \\implies x + 3y = 6\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(\\text{The lines are identical, so they coincide and have infinitely many intersection points.}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "For k = 12, the two equations represent the same line.\nTherefore, they intersect at infinitely many points.",
        "graphData": null
      },
      {
        "explanation": "Final answer: For k = 12, the two equations represent the same line.\nTherefore, they intersect at infinitely many points.. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "For k = 12, the two equations represent the same line.\nTherefore, they intersect at infinitely many points.",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-14f-q6a",
    "topicId": "y9-14f",
    "c": "14F",
    "t": "Families of straight lines",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "The lines with equations \\( y = x + k \\) and \\( y = mx + 3 \\) intersect at \\( (1, 2) \\). Find \\( k \\).",
    "answer": "1",
    "hint": "Substitute the x and y values of the intersection point into the first equation.",
    "solution": "1",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Families of straight lines: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(2 = 1 + k\\)",
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
        "workingOut": "\\(k = 1\\)",
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
        "script": "board.suspendUpdate(); board.create('arrow', [[-6,0],[6,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-6],[0,6]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [5.28, -2.0999999999999996, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 5.4, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return (1)*x + (0); }, -5.5, 5.5], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [2.2, 3.5, 'y = 1x+0'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y9-14f-q6b",
    "topicId": "y9-14f",
    "c": "14F",
    "t": "Families of straight lines",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "The lines with equations \\( y = x + k \\) and \\( y = mx + 3 \\) intersect at \\( (1, 2) \\). Find \\( m \\).",
    "opts": [
      "\\(-1\\)",
      "\\(-2\\)",
      "\\(0\\)",
      "\\(1\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Substitute the x and y values of the intersection point into the second equation.",
    "solution": "Substitute the intersection point \\( (1, 2) \\) into the second equation:\n\\( 2 = m(1) + 3 \\implies 2 = m + 3 \\implies m = -1 \\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Families of straight lines: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(2 = m(1) + 3\\)",
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
        "workingOut": "\\(m = -1\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(-1\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: -1. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(-1\\)",
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
    "requiresManualGrading": false
  },
  {
    "id": "y9-14f-q7a",
    "topicId": "y9-14f",
    "c": "14F",
    "t": "Families of straight lines",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "The lines with equations \\( y = nx + 1 \\) and \\( y = mx + 9 \\) intersect at \\( (2, 5) \\). Find \\( n \\).",
    "answer": "2",
    "hint": "Substitute the coordinates (2, 5) into the equation y = nx + 1.",
    "solution": "2",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Families of straight lines: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(5 = 2n + 1\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(2n = 4 \\implies n = 2\\)",
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
    "id": "y9-14f-q7b",
    "topicId": "y9-14f",
    "c": "14F",
    "t": "Families of straight lines",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "The lines with equations \\( y = nx + 1 \\) and \\( y = mx + 9 \\) intersect at \\( (2, 5) \\). Find \\( m \\).",
    "opts": [
      "\\(-1\\)",
      "\\(-2\\)",
      "\\(-3\\)",
      "\\(2\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Substitute the coordinates (2, 5) into the equation y = mx + 9.",
    "solution": "Substitute the intersection point \\( (2, 5) \\) into the second equation:\n\\( 5 = m(2) + 9 \\implies 5 = 2m + 9 \\implies 2m = -4 \\implies m = -2 \\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Families of straight lines: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(5 = 2m + 9\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(2m = -4 \\implies m = -2\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(-2\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: -2. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(-2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  }
];
