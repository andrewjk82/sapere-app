export const Y12A_CH6F_QUESTIONS = [
  {
    "id": "y12a-6f-q1a",
    "topicId": "y12a-6F",
    "c": "6F",
    "t": "Chapter review exercise",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Differentiate with respect to \\( x \\):<br>\\( y = 4 \\sin x \\)",
    "opts": [
      "\\(y' = 4 -\\cos x\\)",
      "\\(y' = 4 \\cos x\\)",
      "\\(y' = 4 \\cos x + 1\\)",
      "\\(y' = 4 \\sin x\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is \\(y' = 4 \\cos x\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Chapter review exercise: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y = 4 \\sin x\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(y' = 4 \\cos x\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y' = 4 \\cos x. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(y' = 4 \\cos x\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-6f-q1b",
    "topicId": "y12a-6F",
    "c": "6F",
    "t": "Chapter review exercise",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Differentiate with respect to \\( x \\):<br>\\( y = \\sin 4x \\)",
    "opts": [
      "\\(y' = 4 -\\cos 4x\\)",
      "\\(y' = 4 \\cos 4x\\)",
      "\\(y' = 4 \\cos 4x + 1\\)",
      "\\(y' = 4 \\sin 4x\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is \\(y' = 4 \\cos 4x\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Chapter review exercise: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y = \\sin 4x\\)",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 260,
            "boundingbox": [
              -4,
              4,
              4,
              -4
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-4,0],[4,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-4],[0,4]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [3.4, -1.4, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 3.6, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return Math.sin(x); }, -3.9, 3.9], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.2, 2.5, 'y = sin x'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(y' = 4 \\cos 4x\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y' = 4 \\cos 4x. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(y' = 4 \\cos 4x\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 360,
        "height": 260,
        "boundingbox": [
          -4,
          4,
          4,
          -4
        ],
        "script": "board.suspendUpdate(); board.create('arrow', [[-4,0],[4,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-4],[0,4]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [3.4, -1.4, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 3.6, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return Math.sin(x); }, -3.9, 3.9], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.2, 2.5, 'y = sin x'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-6f-q1c",
    "topicId": "y12a-6F",
    "c": "6F",
    "t": "Chapter review exercise",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Differentiate with respect to \\( x \\):<br>\\( y = 4 \\cos 4x \\)",
    "opts": [
      "\\(y' = +16 \\sin 4x\\)",
      "\\(y' = -16 -\\sin 4x\\)",
      "\\(y' = -16 \\sin 4x\\)",
      "\\(y' = -16 \\sin 4x + 1\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "",
    "solution": "The correct answer is \\(y' = -16 \\sin 4x\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Chapter review exercise: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y = 4 \\cos 4x\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(y' = -16 \\sin 4x\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y' = -16 \\sin 4x. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(y' = -16 \\sin 4x\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-6f-q1d",
    "topicId": "y12a-6F",
    "c": "6F",
    "t": "Chapter review exercise",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Differentiate with respect to \\( x \\):<br>\\( y = \\tan(4x - 3) \\)",
    "opts": [
      "\\(y' = 4 \\sec^2 (4x + 3)\\)",
      "\\(y' = 4 \\sec^2 (4x - 3)\\)",
      "\\(y' = 4 \\sec^2 (4x - 3) + 1\\)",
      "\\(y' = 4 \\sec^4 (4x - 4)\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is \\(y' = 4 \\sec^2 (4x - 3)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Chapter review exercise: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y = \\tan(4x - 3)\\)",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 260,
            "boundingbox": [
              -4,
              4,
              4,
              -4
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-4,0],[4,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-4],[0,4]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [3.4, -1.4, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 3.6, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return Math.tan(x); }, -3.9, 3.9], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.2, 2.5, 'y = tan x'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(y' = 4 \\sec^2 (4x - 3)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y' = 4 \\sec^2 (4x - 3). Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(y' = 4 \\sec^2 (4x - 3)\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 360,
        "height": 260,
        "boundingbox": [
          -4,
          4,
          4,
          -4
        ],
        "script": "board.suspendUpdate(); board.create('arrow', [[-4,0],[4,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-4],[0,4]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [3.4, -1.4, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 3.6, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return Math.tan(x); }, -3.9, 3.9], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.2, 2.5, 'y = tan x'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-6f-q1e",
    "topicId": "y12a-6F",
    "c": "6F",
    "t": "Chapter review exercise",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Differentiate with respect to \\( x \\):<br>\\( y = x \\sin 4x \\)",
    "opts": [
      "\\(y' = -\\sin 4x + 4x -\\cos 4x\\)",
      "\\(y' = \\sin 4x + 4x \\cos 4x\\)",
      "\\(y' = \\sin 4x + 4x \\cos 4x + 1\\)",
      "\\(y' = \\sin 4x + 4x \\sin 4x\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is \\(y' = \\sin 4x + 4x \\cos 4x\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Chapter review exercise: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y = x \\sin 4x\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(y' = \\sin 4x + 4x \\cos 4x\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y' = \\sin 4x + 4x \\cos 4x. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(y' = \\sin 4x + 4x \\cos 4x\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-6f-q1f",
    "topicId": "y12a-6F",
    "c": "6F",
    "t": "Chapter review exercise",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Differentiate with respect to \\( x \\):<br>\\( y = \\frac{\\cos 4x}{x} \\)",
    "opts": [
      "\\(-y' = \\frac{-4x \\sin 4x - \\cos 4x}{x^2}\\)",
      "\\(y' = \\frac{-4x \\sin 4x - \\cos 4x}{x^2}\\)",
      "\\(y' = \\frac{4x \\sin 4x - \\cos 4x}{x^2}\\)",
      "\\(y' = \\frac{x^2}{-4x \\sin 4x - \\cos 4x}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is \\(y' = \\frac{-4x \\sin 4x - \\cos 4x}{x^2}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Chapter review exercise: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y = \\frac{\\cos 4x}{x}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(y' = \\frac{-4x \\sin 4x - \\cos 4x}{x^2}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y' = \\frac{-4x \\sin 4x - \\cos 4x}{x^2}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(y' = \\frac{-4x \\sin 4x - \\cos 4x}{x^2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-6f-q1g",
    "topicId": "y12a-6F",
    "c": "6F",
    "t": "Chapter review exercise",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Differentiate with respect to \\( x \\):<br>\\( y = \\sin^4 x \\)",
    "opts": [
      "\\(y' = 4 -\\sin^3 x -\\cos x\\)",
      "\\(y' = 4 \\sin^3 x \\cos x\\)",
      "\\(y' = 4 \\sin^3 x \\sin x\\)",
      "\\(y' = 4 \\sin^4 x \\cos x\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is \\(y' = 4 \\sin^3 x \\cos x\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Chapter review exercise: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y = \\sin^4 x\\)",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 260,
            "boundingbox": [
              -4,
              4,
              4,
              -4
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-4,0],[4,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-4],[0,4]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [3.4, -1.4, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 3.6, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return Math.sin(x); }, -3.9, 3.9], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.2, 2.5, 'y = sin x'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(y' = 4 \\sin^3 x \\cos x\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y' = 4 \\sin^3 x \\cos x. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(y' = 4 \\sin^3 x \\cos x\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 360,
        "height": 260,
        "boundingbox": [
          -4,
          4,
          4,
          -4
        ],
        "script": "board.suspendUpdate(); board.create('arrow', [[-4,0],[4,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-4],[0,4]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [3.4, -1.4, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 3.6, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return Math.sin(x); }, -3.9, 3.9], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.2, 2.5, 'y = sin x'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-6f-q1h",
    "topicId": "y12a-6F",
    "c": "6F",
    "t": "Chapter review exercise",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Differentiate with respect to \\( x \\):<br>\\( y = \\tan(x^4) \\)",
    "opts": [
      "\\(\\dfrac{13}{x + 3}\\)",
      "\\(y' = 4x^3 \\sec^2(x^4)\\)",
      "\\(y' = 4x^3 \\sec^2(x^4) + 1\\)",
      "\\(y' = 4x^4 \\sec^4(x^4)\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is \\(y' = 4x^3 \\sec^2(x^4)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Chapter review exercise: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y = \\tan(x^4)\\)",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 260,
            "boundingbox": [
              -4,
              4,
              4,
              -4
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-4,0],[4,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-4],[0,4]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [3.4, -1.4, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 3.6, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return Math.tan(x); }, -3.9, 3.9], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.2, 2.5, 'y = tan x'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(y' = 4x^3 \\sec^2(x^4)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y' = 4x^3 \\sec^2(x^4). Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(y' = 4x^3 \\sec^2(x^4)\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 360,
        "height": 260,
        "boundingbox": [
          -4,
          4,
          4,
          -4
        ],
        "script": "board.suspendUpdate(); board.create('arrow', [[-4,0],[4,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-4],[0,4]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [3.4, -1.4, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 3.6, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return Math.tan(x); }, -3.9, 3.9], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.2, 2.5, 'y = tan x'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-6f-q1i",
    "topicId": "y12a-6F",
    "c": "6F",
    "t": "Chapter review exercise",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Differentiate with respect to \\( x \\):<br>\\( y = e^{\\cos 4x} \\)",
    "opts": [
      "\\(y' = +4 \\sin 4x \\cdot e^{\\cos 4x}\\)",
      "\\(y' = -4 -\\sin 4x \\cdot e^{-\\cos 4x}\\)",
      "\\(y' = -4 \\sin 4x \\cdot e^{\\cos 4x}\\)",
      "\\(y' = -4 \\sin 4x \\cdot e^{\\sin 4x}\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "",
    "solution": "The correct answer is \\(y' = -4 \\sin 4x \\cdot e^{\\cos 4x}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Chapter review exercise: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y = e^{\\cos 4x}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(y' = -4 \\sin 4x \\cdot e^{\\cos 4x}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y' = -4 \\sin 4x \\cdot e^{\\cos 4x}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(y' = -4 \\sin 4x \\cdot e^{\\cos 4x}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-6f-q1j",
    "topicId": "y12a-6F",
    "c": "6F",
    "t": "Chapter review exercise",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Differentiate with respect to \\( x \\):<br>\\( y = \\log_e(\\sin 4x) \\)",
    "opts": [
      "\\(\\dfrac{12}{x + 2}\\)",
      "\\(\\dfrac{13}{x + 3}\\)",
      "\\(y' = 4 \\cot 4x\\)",
      "\\(y' = 4 \\cot 4x + 1\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "",
    "solution": "The correct answer is \\(y' = 4 \\cot 4x\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Chapter review exercise: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y = \\log_e(\\sin 4x)\\)",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 260,
            "boundingbox": [
              0.1,
              4,
              5,
              -2
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[0.1,0],[5,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-2],[0,4]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [4.25, -0.7, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 3.6, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return Math.log(x); }, 0.15, 4.9], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [2.5, 2.2, 'y = ln x'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(y' = 4 \\cot 4x\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y' = 4 \\cot 4x. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(y' = 4 \\cot 4x\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 360,
        "height": 260,
        "boundingbox": [
          0.1,
          4,
          5,
          -2
        ],
        "script": "board.suspendUpdate(); board.create('arrow', [[0.1,0],[5,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-2],[0,4]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [4.25, -0.7, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 3.6, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return Math.log(x); }, 0.15, 4.9], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [2.5, 2.2, 'y = ln x'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-6f-q2",
    "topicId": "y12a-6F",
    "c": "6F",
    "t": "Chapter review exercise",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the exact gradient of the tangent to \\( y = \\cos 3x \\) at the point on the curve where \\( x = \\frac{\\pi}{4} \\).",
    "opts": [
      "\\(--\\frac{3}{\\sqrt{2}}\\)",
      "\\(-\\frac{1}{\\sqrt{2}}\\)",
      "\\(-\\frac{3}{\\sqrt{2}}\\)",
      "\\(-\\frac{\\sqrt{2}{3}}\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "",
    "solution": "The correct answer is \\(-\\frac{3}{\\sqrt{2}}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Chapter review exercise: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y = \\cos 3x  at the point on the curve where  x = \\frac{\\pi}{4} .\\)",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 260,
            "boundingbox": [
              -4,
              4,
              4,
              -4
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-4,0],[4,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-4],[0,4]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [3.4, -1.4, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 3.6, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return Math.cos(x); }, -3.9, 3.9], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.2, 2.5, 'y = cos x'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(-\\frac{3}{\\sqrt{2}}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: -\\frac{3}{\\sqrt{2}}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(-\\frac{3}{\\sqrt{2}}\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 360,
        "height": 260,
        "boundingbox": [
          -4,
          4,
          4,
          -4
        ],
        "script": "board.suspendUpdate(); board.create('arrow', [[-4,0],[4,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-4],[0,4]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [3.4, -1.4, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 3.6, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return Math.cos(x); }, -3.9, 3.9], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.2, 2.5, 'y = cos x'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-6f-q3a",
    "topicId": "y12a-6F",
    "c": "6F",
    "t": "Chapter review exercise",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "a) Find the equation of the tangent to \\( y = \\tan x \\) at the point where \\( x = \\frac{\\pi}{4} \\).",
    "opts": [
      "\\(-y = 2x - \\frac{\\pi}{2} + 1\\)",
      "\\(y = 2x - \\frac{1}{2} + 1\\)",
      "\\(y = 2x - \\frac{2}{\\pi} + 1\\)",
      "\\(y = 2x - \\frac{\\pi}{2} + 1\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "",
    "solution": "The correct answer is \\(y = 2x - \\frac{\\pi}{2} + 1\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Chapter review exercise: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y = \\tan x  at the point where  x = \\frac{\\pi}{4} .\\)",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 260,
            "boundingbox": [
              -4,
              4,
              4,
              -4
            ],
            "script": "board.suspendUpdate(); board.create('arrow', [[-4,0],[4,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-4],[0,4]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [3.4, -1.4, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 3.6, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return Math.tan(x); }, -3.9, 3.9], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.2, 2.5, 'y = tan x'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(y = 2x - \\frac{\\pi}{2} + 1\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y = 2x - \\frac{\\pi}{2} + 1. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(y = 2x - \\frac{\\pi}{2} + 1\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 360,
        "height": 260,
        "boundingbox": [
          -4,
          4,
          4,
          -4
        ],
        "script": "board.suspendUpdate(); board.create('arrow', [[-4,0],[4,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-4],[0,4]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [3.4, -1.4, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 3.6, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return Math.tan(x); }, -3.9, 3.9], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.2, 2.5, 'y = tan x'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-6f-q3b",
    "topicId": "y12a-6F",
    "c": "6F",
    "t": "Chapter review exercise",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "b) Find the equation of the tangent to \\( y = x \\sin x \\) at the point where \\( x = \\frac{\\pi}{2} \\).",
    "opts": [
      "\\(\\dfrac{12}{x + 2}\\)",
      "\\(\\dfrac{13}{x + 3}\\)",
      "\\(y = x\\)",
      "\\(y = x + 1\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "",
    "solution": "The correct answer is \\(y = x\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Chapter review exercise: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y = x \\sin x  at the point where  x = \\frac{\\pi}{2} .\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(y = x\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y = x. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(y = x\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-6f-q4a",
    "topicId": "y12a-6F",
    "c": "6F",
    "t": "Chapter review exercise",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the \\( x \\)-coordinates of the stationary points on the curve \\( y = x - 2\\sin x \\), for \\( 0 \\le x \\le 2\\pi \\).<br>(Enter answers separated by commas)",
    "opts": [
      "\\(-\\frac{\\pi}{3}, \\frac{5\\pi}{3}\\)",
      "\\(\\frac{1}{3}, \\frac{5\\pi}{3}\\)",
      "\\(\\frac{3}{\\pi}, \\frac{5\\pi}{3}\\)",
      "\\(\\frac{\\pi}{3}, \\frac{5\\pi}{3}\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "",
    "solution": "The correct answer is \\(\\frac{\\pi}{3}, \\frac{5\\pi}{3}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Chapter review exercise: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y = x - 2\\sin x , for  0 \\le x \\le 2\\pi .<br>(Enter answers separated by commas)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\frac{\\pi}{3}, \\frac{5\\pi}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\frac{\\pi}{3}, \\frac{5\\pi}{3}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\frac{\\pi}{3}, \\frac{5\\pi}{3}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-6f-q4b",
    "topicId": "y12a-6F",
    "c": "6F",
    "t": "Chapter review exercise",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the \\( x \\)-coordinates of the stationary points on the curve \\( y = \\sqrt{3}\\sin x + \\cos x \\), for \\( 0 \\le x \\le 2\\pi \\).<br>(Enter answers separated by commas)",
    "opts": [
      "\\(-\\frac{\\pi}{3}, \\frac{4\\pi}{3}\\)",
      "\\(\\frac{1}{3}, \\frac{4\\pi}{3}\\)",
      "\\(\\frac{3}{\\pi}, \\frac{4\\pi}{3}\\)",
      "\\(\\frac{\\pi}{3}, \\frac{4\\pi}{3}\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "",
    "solution": "The correct answer is \\(\\frac{\\pi}{3}, \\frac{4\\pi}{3}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Chapter review exercise: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y = \\sqrt{3}\\sin x + \\cos x , for  0 \\le x \\le 2\\pi .<br>(Enter answers separated by commas)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\frac{\\pi}{3}, \\frac{4\\pi}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\frac{\\pi}{3}, \\frac{4\\pi}{3}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\frac{\\pi}{3}, \\frac{4\\pi}{3}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-6f-q5a",
    "topicId": "y12a-6F",
    "c": "6F",
    "t": "Chapter review exercise",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find:<br>\\( \\int 5\\sin x \\, dx \\)<br>(Omit the constant of integration \\( C \\) in your answer)",
    "opts": [
      "\\(-5-\\cos x\\)",
      "\\(-5\\cos x\\)",
      "\\(-5\\sin x\\)",
      "\\(5\\cos x\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is \\(-5\\cos x\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Chapter review exercise: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "Given data",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(-5\\cos x\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: -5\\cos x. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(-5\\cos x\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-6f-q5b",
    "topicId": "y12a-6F",
    "c": "6F",
    "t": "Chapter review exercise",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find:<br>\\( \\int \\cos 5x \\, dx \\)<br>(Omit the constant of integration \\( C \\) in your answer)",
    "opts": [
      "\\(-\\frac{1}{5}\\sin 5x\\)",
      "\\(\\frac{1}{5}-\\sin 5x\\)",
      "\\(\\frac{1}{5}\\sin 5x\\)",
      "\\(\\frac{5}{1}\\sin 5x\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "",
    "solution": "The correct answer is \\(\\frac{1}{5}\\sin 5x\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Chapter review exercise: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "Given data",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\frac{1}{5}\\sin 5x\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\frac{1}{5}\\sin 5x. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\frac{1}{5}\\sin 5x\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-6f-q5c",
    "topicId": "y12a-6F",
    "c": "6F",
    "t": "Chapter review exercise",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find:<br>\\( \\int \\sec^2 \\frac{x}{5} \\, dx \\)<br>(Omit the constant of integration \\( C \\) in your answer)",
    "opts": [
      "\\(-5\\tan \\frac{x}{5}\\)",
      "\\(5\\tan \\frac{1}{5}\\)",
      "\\(5\\tan \\frac{5}{x}\\)",
      "\\(5\\tan \\frac{x}{5}\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "",
    "solution": "The correct answer is \\(5\\tan \\frac{x}{5}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Chapter review exercise: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "Given data",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(5\\tan \\frac{x}{5}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 5\\tan \\frac{x}{5}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(5\\tan \\frac{x}{5}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-6f-q6a",
    "topicId": "y12a-6F",
    "c": "6F",
    "t": "Chapter review exercise",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the exact value of:<br>\\( \\int_{0}^{\\frac{\\pi}{4}} \\sec^2 x \\, dx \\)",
    "answer": "1",
    "hint": "",
    "solution": "1",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Chapter review exercise: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "Given data",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(1\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 1. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(1\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y12a-6f-q6b",
    "topicId": "y12a-6F",
    "c": "6F",
    "t": "Chapter review exercise",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the exact value of:<br>\\( \\int_{0}^{\\frac{\\pi}{6}} \\cos 3x \\, dx \\)",
    "opts": [
      "\\(-0.3333333333333333\\)",
      "\\(-0.6666666666666667\\)",
      "\\(\\frac{1}{3}\\)",
      "\\(1.3333333333333333\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "",
    "solution": "The correct answer is \\(\\frac{1}{3}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Chapter review exercise: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "Given data",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\frac{1}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\frac{1}{3}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\frac{1}{3}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-6f-q6c",
    "topicId": "y12a-6F",
    "c": "6F",
    "t": "Chapter review exercise",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the exact value of:<br>\\( \\int_{0}^{\\frac{1}{2}} \\pi \\cos(\\pi x) \\, dx \\)",
    "answer": "1",
    "hint": "",
    "solution": "1",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Chapter review exercise: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "Given data",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(1\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 1. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(1\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y12a-6f-q7",
    "topicId": "y12a-6F",
    "c": "6F",
    "t": "Chapter review exercise",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "Find the value of \\( \\int_{0}^{\\frac{\\pi}{3}} \\cos 2x \\, dx \\), correct to three decimal places.",
    "opts": [
      "\\(-0.433\\)",
      "\\(-0.567\\)",
      "\\(0.433\\)",
      "\\(1.433\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "",
    "solution": "The correct answer is \\(0.433\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Chapter review exercise: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "Given data",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(0.433\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 0.433. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(0.433\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-6f-q8",
    "topicId": "y12a-6F",
    "c": "6F",
    "t": "Chapter review exercise",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "A curve has gradient function \\( y' = \\sin \\frac{1}{2}x \\) and passes through the point \\( (\\pi, 2) \\). Find its equation.",
    "opts": [
      "\\(-y = -2\\cos \\frac{x}{2} + 2\\)",
      "\\(y = -2\\cos \\frac{1}{2} + 2\\)",
      "\\(y = -2\\cos \\frac{2}{x} + 2\\)",
      "\\(y = -2\\cos \\frac{x}{2} + 2\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "",
    "solution": "The correct answer is \\(y = -2\\cos \\frac{x}{2} + 2\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Chapter review exercise: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "Given data",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(y = -2\\cos \\frac{x}{2} + 2\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y = -2\\cos \\frac{x}{2} + 2. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(y = -2\\cos \\frac{x}{2} + 2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-6f-q9a",
    "topicId": "y12a-6F",
    "c": "6F",
    "t": "Chapter review exercise",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "a) Sketch the curve \\( y = 3\\cos 2x \\) in the interval \\( [0, \\pi] \\), and then shade the area between the curve and the \\( x \\)-axis from \\( x = \\frac{\\pi}{4} \\) to \\( x = \\frac{3\\pi}{4} \\).",
    "answer": "Sketch",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "Sketch",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Chapter review exercise: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y = 3\\cos 2x  in the interval  [0, \\pi] , and then shade the area between the curve and the  x -axis from  x = \\frac{\\pi}{4}  to  x = \\frac{3\\pi}{4} .\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "Sketch",
        "graphData": null
      },
      {
        "explanation": "Final answer: Sketch. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "Sketch",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y12a-6f-q9b",
    "topicId": "y12a-6F",
    "c": "6F",
    "t": "Chapter review exercise",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "b) Calculate the exact value of the shaded area in part (a).",
    "answer": "3",
    "hint": "",
    "solution": "3",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Chapter review exercise: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "Given data",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(3\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 3. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(3\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y12a-6f-q10a",
    "topicId": "y12a-6F",
    "c": "6F",
    "t": "Chapter review exercise",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "Find the exact area of the shaded region bounded by \\( y = \\sin 2x \\) and \\( y = \\sin x \\) from \\( x = 0 \\) to \\( x = \\frac{\\pi}{3} \\).",
    "opts": [
      "\\(-0.25\\)",
      "\\(-0.75\\)",
      "\\(\\frac{1}{4}\\)",
      "\\(1.25\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "",
    "solution": "The correct answer is \\(\\frac{1}{4}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Chapter review exercise: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y = \\sin 2x  and  y = \\sin x  from  x = 0  to  x = \\frac{\\pi}{3} .\\)",
        "graphData": {
          "jsxGraph": {
            "width": 350,
            "height": 250,
            "boundingbox": [
              -0.2,
              1.2,
              1.2,
              -0.2
            ],
            "script": "board.suspendUpdate();\nboard.create('arrow', [[0,0], [0, 1.2]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,0], [1.2, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [1.15, -0.05], 'x', {anchorX: 'right', anchorY: 'top'});\nboard.create('text', [-0.05, 1.15], 'y', {anchorX: 'right', anchorY: 'top'});\nvar c1 = board.create('functiongraph', [function(x){return Math.sin(2*x);}, 0, Math.PI/3], {strokeColor: 'black'});\nvar c2 = board.create('functiongraph', [function(x){return Math.sin(x);}, 0, Math.PI/3], {strokeColor: 'black'});\nboard.create('inequality', [c1], {inverse: true, fillColor: 'lightblue', fillOpacity: 0.5});\nboard.create('text', [Math.PI/3, -0.05], '\\\\(\\\frac{\\pi}{3}\\\\)', {anchorX: 'middle', anchorY: 'top'});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\frac{1}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\frac{1}{4}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\frac{1}{4}\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [
          -0.2,
          1.2,
          1.2,
          -0.2
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[0,0], [0, 1.2]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,0], [1.2, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [1.15, -0.05], 'x', {anchorX: 'right', anchorY: 'top'});\nboard.create('text', [-0.05, 1.15], 'y', {anchorX: 'right', anchorY: 'top'});\nvar c1 = board.create('functiongraph', [function(x){return Math.sin(2*x);}, 0, Math.PI/3], {strokeColor: 'black'});\nvar c2 = board.create('functiongraph', [function(x){return Math.sin(x);}, 0, Math.PI/3], {strokeColor: 'black'});\nboard.create('inequality', [c1], {inverse: true, fillColor: 'lightblue', fillOpacity: 0.5});\nboard.create('text', [Math.PI/3, -0.05], '\\\\(\\\frac{\\pi}{3}\\\\)', {anchorX: 'middle', anchorY: 'top'});\nboard.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-6f-q10b",
    "topicId": "y12a-6F",
    "c": "6F",
    "t": "Chapter review exercise",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "Find the exact area of the shaded region bounded by \\( y = \\cos x \\) and \\( y = \\sin 2x \\) from \\( x = \\frac{\\pi}{6} \\) to \\( x = \\frac{\\pi}{2} \\).",
    "opts": [
      "\\(-0.25\\)",
      "\\(-0.75\\)",
      "\\(\\frac{1}{4}\\)",
      "\\(1.25\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "",
    "solution": "The correct answer is \\(\\frac{1}{4}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Chapter review exercise: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y = \\cos x  and  y = \\sin 2x  from  x = \\frac{\\pi}{6}  to  x = \\frac{\\pi}{2} .\\)",
        "graphData": {
          "jsxGraph": {
            "width": 350,
            "height": 250,
            "boundingbox": [
              0,
              1.2,
              1.8,
              -0.5
            ],
            "script": "board.suspendUpdate();\nboard.create('arrow', [[0,0], [0, 1.2]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,0], [1.8, 0]], {strokeColor: 'black', strokeWidth: 1});\nvar c1 = board.create('functiongraph', [function(x){return Math.cos(x);}, Math.PI/6, Math.PI/2], {strokeColor: 'black'});\nvar c2 = board.create('functiongraph', [function(x){return Math.sin(2*x);}, Math.PI/6, Math.PI/2], {strokeColor: 'black'});\nboard.create('text', [Math.PI/6, -0.05], '\\\\(\\\frac{\\pi}{6}\\\\)', {anchorX: 'middle', anchorY: 'top'});\nboard.create('text', [Math.PI/2, -0.05], '\\\\(\\\frac{\\pi}{2}\\\\)', {anchorX: 'middle', anchorY: 'top'});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\frac{1}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\frac{1}{4}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\frac{1}{4}\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [
          0,
          1.2,
          1.8,
          -0.5
        ],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[0,0], [0, 1.2]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,0], [1.8, 0]], {strokeColor: 'black', strokeWidth: 1});\nvar c1 = board.create('functiongraph', [function(x){return Math.cos(x);}, Math.PI/6, Math.PI/2], {strokeColor: 'black'});\nvar c2 = board.create('functiongraph', [function(x){return Math.sin(2*x);}, Math.PI/6, Math.PI/2], {strokeColor: 'black'});\nboard.create('text', [Math.PI/6, -0.05], '\\\\(\\\frac{\\pi}{6}\\\\)', {anchorX: 'middle', anchorY: 'top'});\nboard.create('text', [Math.PI/2, -0.05], '\\\\(\\\frac{\\pi}{2}\\\\)', {anchorX: 'middle', anchorY: 'top'});\nboard.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-6f-q11a",
    "topicId": "y12a-6F",
    "c": "6F",
    "t": "Chapter review exercise",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "a) Write \\( \\cot x \\) in terms of \\( \\sin x \\) and \\( \\cos x \\).",
    "opts": [
      "\\(-\\frac{\\cos x}{\\sin x}\\)",
      "\\(\\frac{1}{\\sin x}\\)",
      "\\(\\frac{\\cos x}{\\sin x}\\)",
      "\\(\\frac{\\sin x}{\\cos x}\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "",
    "solution": "The correct answer is \\(\\frac{\\cos x}{\\sin x}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Chapter review exercise: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "Given data",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\frac{\\cos x}{\\sin x}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\frac{\\cos x}{\\sin x}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\frac{\\cos x}{\\sin x}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-6f-q11b",
    "topicId": "y12a-6F",
    "c": "6F",
    "t": "Chapter review exercise",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "b) Hence find the exact area of the shaded region bounded by \\( y = \\cot x \\), the \\( x \\)-axis, and the vertical lines \\( x = \\frac{\\pi}{6} \\) and \\( x = \\frac{\\pi}{2} \\).",
    "opts": [
      "\\(-\\ln 2\\)",
      "\\(\\ln 2\\)",
      "\\(\\ln 4\\)",
      "\\(\\log 2\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is \\(\\ln 2\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Chapter review exercise: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y = \\cot x , the  x -axis, and the vertical lines  x = \\frac{\\pi}{6}  and  x = \\frac{\\pi}{2} .\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\ln 2\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\ln 2. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\ln 2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  }
];
