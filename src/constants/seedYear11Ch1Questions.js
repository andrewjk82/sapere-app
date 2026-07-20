export const Y11_CH1_QUESTIONS = [
  {
    "id": "y11-5g-q1a-i",
    "topicId": "y11a-5G",
    "c": "5G",
    "t": "Combining transformations",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Let \\(y = x^2 - 6x\\). Sketch the graph of this function showing the intercepts and vertex.\ni) The parabola is shifted right by 2 units. Find its new equation, expanding any brackets.",
    "opts": [
      "\\(y = x^2 + 10x - 16\\)",
      "\\(y = x^2 - 10x + 16\\)",
      "\\(y = x^2 - 10x + 16 + 1\\)",
      "\\(y = x^4 - 10x + 16\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is \\(y = x^2 - 10x + 16\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Combining transformations: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y = (x - 2)^2 - 6(x - 2)\\)",
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
            "script": "board.suspendUpdate(); board.create('arrow', [[-4,0],[4,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-4],[0,4]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [3.4, -1.4, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 3.6, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return x*x; }, -3.9, 3.9], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.2, 2.5, 'y = x²'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(y = x^2 - 4x + 4 - 6x + 12\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(y = x^2 - 10x + 16\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y = x^2 - 10x + 16. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(y = x^2 - 10x + 16\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11-5g-q1a-ii",
    "topicId": "y11a-5G",
    "c": "5G",
    "t": "Combining transformations",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Let \\(y = x^2 - 6x\\). Sketch the graph of this function showing the intercepts and vertex.\nii) The shifted parabola in part i is then shifted up 3 units. Find its final equation.",
    "opts": [
      "\\(y = x^2 + 10x - 19\\)",
      "\\(y = x^2 - 10x + 19\\)",
      "\\(y = x^2 - 10x + 19 + 1\\)",
      "\\(y = x^4 - 10x + 19\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is \\(y = x^2 - 10x + 19\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Combining transformations: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y = (x^2 - 10x + 16) + 3\\)",
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
            "script": "board.suspendUpdate(); board.create('arrow', [[-4,0],[4,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-4],[0,4]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [3.4, -1.4, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 3.6, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return x*x; }, -3.9, 3.9], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.2, 2.5, 'y = x²'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(y = x^2 - 10x + 19\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(y = x^2 - 10x + 19\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y = x^2 - 10x + 19. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(y = x^2 - 10x + 19\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11-5g-q1b-i",
    "topicId": "y11a-5G",
    "c": "5G",
    "t": "Combining transformations",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Let \\(y = x^2 - 6x\\). Sketch the graph of this function showing the intercepts and vertex.\nb) i) The original parabola \\(y = x^2 - 6x\\) is translated up 3 units. Find its equation.",
    "opts": [
      "\\(y = x^2 + 6x - 3\\)",
      "\\(y = x^2 - 6x + 3\\)",
      "\\(y = x^2 - 6x + 3 + 1\\)",
      "\\(y = x^4 - 6x + 4\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is \\(y = x^2 - 6x + 3\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Combining transformations: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y = x^2 - 6x + 3\\)",
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
            "script": "board.suspendUpdate(); board.create('arrow', [[-4,0],[4,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-4],[0,4]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [3.4, -1.4, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 3.6, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return x*x; }, -3.9, 3.9], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.2, 2.5, 'y = x²'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
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
        "workingOut": "\\(y = x^2 - 6x + 3\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y = x^2 - 6x + 3. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(y = x^2 - 6x + 3\\)",
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
        "script": "board.suspendUpdate(); board.create('arrow', [[-4,0],[4,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-4],[0,4]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [3.4, -1.4, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 3.6, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return x*x; }, -3.9, 3.9], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.2, 2.5, 'y = x²'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11-5g-q1b-ii",
    "topicId": "y11a-5G",
    "c": "5G",
    "t": "Combining transformations",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Let \\(y = x^2 - 6x\\). Sketch the graph of this function showing the intercepts and vertex.\nii) The translated parabola in part i is then translated 2 units right. Find its equation, expanding any brackets.",
    "opts": [
      "\\(y = x^2 + 10x - 19\\)",
      "\\(y = x^2 - 10x + 19\\)",
      "\\(y = x^2 - 10x + 19 + 1\\)",
      "\\(y = x^4 - 10x + 19\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is \\(y = x^2 - 10x + 19\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Combining transformations: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y = (x - 2)^2 - 6(x - 2) + 3\\)",
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
            "script": "board.suspendUpdate(); board.create('arrow', [[-4,0],[4,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-4],[0,4]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [3.4, -1.4, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 3.6, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return x*x; }, -3.9, 3.9], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.2, 2.5, 'y = x²'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(y = (x^2 - 4x + 4) - (6x - 12) + 3 = x^2 - 10x + 19\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(y = x^2 - 10x + 19\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y = x^2 - 10x + 19. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(y = x^2 - 10x + 19\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11-5g-q1c",
    "topicId": "y11a-5G",
    "c": "5G",
    "t": "Combining transformations",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Let \\(y = x^2 - 6x\\). Sketch the graph of this function showing the intercepts and vertex.\nc) Parts a and b used the same translations, 2 units right and 3 units up, but in a different order. Do these transformations commute?",
    "answer": "0",
    "hint": "",
    "solution": "0",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Combining transformations: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "y = x^2 - 6x. Sketch the graph of this function showing the intercepts and vertex.",
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
            "script": "board.suspendUpdate(); board.create('arrow', [[-4,0],[4,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-4],[0,4]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [3.4, -1.4, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 3.6, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return x*x; }, -3.9, 3.9], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.2, 2.5, 'y = x²'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
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
        "workingOut": "\\(0\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 0. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(0\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y11-5g-q2a-i",
    "topicId": "y11a-5G",
    "c": "5G",
    "t": "Combining transformations",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Start with the parabola \\(y = x^2 - 4x\\). We will apply dilations in different orders.\na) i) The parabola is dilated by a factor of 3 horizontally. Find its equation.",
    "opts": [
      "\\(y = (x/3)^2 + 4(x/3)\\)",
      "\\(y = (x/3)^2 - 4(x/3)\\)",
      "\\(y = (x/3)^2 - 4(x/3) + 1\\)",
      "\\(y = (x/4)^4 - 4(x/4)\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is \\(y = (x/3)^2 - 4(x/3)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Combining transformations: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y = \\left(\\frac{x}{3}\\right)^2 - 4\\left(\\frac{x}{3}\\right)\\)",
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
            "script": "board.suspendUpdate(); board.create('arrow', [[-4,0],[4,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-4],[0,4]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [3.4, -1.4, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 3.6, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return x*x; }, -3.9, 3.9], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.2, 2.5, 'y = x²'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
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
        "workingOut": "\\(y = (x/3)^2 - 4(x/3)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y = (x/3)^2 - 4(x/3). Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(y = (x/3)^2 - 4(x/3)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11-5g-q2a-ii",
    "topicId": "y11a-5G",
    "c": "5G",
    "t": "Combining transformations",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Start with the parabola \\(y = x^2 - 4x\\). We will apply dilations in different orders.\nii) The parabola in part i is then dilated by a factor of 2 vertically. Find its equation.",
    "opts": [
      "\\(y = 2*(x/3)^2 + 8*(x/3)\\)",
      "\\(y = 2*(x/3)^2 - 8*(x/3)\\)",
      "\\(y = 2*(x/3)^2 - 8*(x/3) + 1\\)",
      "\\(y = 4*(x/4)^4 - 8*(x/4)\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is \\(y = 2*(x/3)^2 - 8*(x/3)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Combining transformations: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y = 2\\left[\\left(\\frac{x}{3}\\right)^2 - 4\\left(\\frac{x}{3}\\right)\\right] = 2\\left(\\frac{x}{3}\\right)^2 - 8\\left(\\frac{x}{3}\\right)\\)",
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
            "script": "board.suspendUpdate(); board.create('arrow', [[-4,0],[4,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-4],[0,4]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [3.4, -1.4, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 3.6, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return x*x; }, -3.9, 3.9], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.2, 2.5, 'y = x²'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
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
        "workingOut": "\\(y = 2*(x/3)^2 - 8*(x/3)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y = 2*(x/3)^2 - 8*(x/3). Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(y = 2*(x/3)^2 - 8*(x/3)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11-5g-q2b-i",
    "topicId": "y11a-5G",
    "c": "5G",
    "t": "Combining transformations",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Start with the parabola \\(y = x^2 - 4x\\). We will apply dilations in different orders.\nb) i) The original parabola \\(y = x^2 - 4x\\) is stretched by a factor of 2 vertically. Find its equation.",
    "opts": [
      "\\(y = 2*x^2 + 8*x\\)",
      "\\(y = 2*x^2 - 8*x\\)",
      "\\(y = 2*x^2 - 8*x + 1\\)",
      "\\(y = 4*x^4 - 8*x\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is \\(y = 2*x^2 - 8*x\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Combining transformations: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y = 2(x^2 - 4x) = 2x^2 - 8x\\)",
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
            "script": "board.suspendUpdate(); board.create('arrow', [[-4,0],[4,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-4],[0,4]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [3.4, -1.4, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 3.6, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return x*x; }, -3.9, 3.9], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.2, 2.5, 'y = x²'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
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
        "workingOut": "\\(y = 2*x^2 - 8*x\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y = 2*x^2 - 8*x. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(y = 2*x^2 - 8*x\\)",
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
        "script": "board.suspendUpdate(); board.create('arrow', [[-4,0],[4,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-4],[0,4]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [3.4, -1.4, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 3.6, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return x*x; }, -3.9, 3.9], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.2, 2.5, 'y = x²'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11-5g-q2b-ii",
    "topicId": "y11a-5G",
    "c": "5G",
    "t": "Combining transformations",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Start with the parabola \\(y = x^2 - 4x\\). We will apply dilations in different orders.\nii) The parabola in part i is then stretched by a factor of 3 horizontally. Find its equation.",
    "opts": [
      "\\(y = 2*(x/3)^2 + 8*(x/3)\\)",
      "\\(y = 2*(x/3)^2 - 8*(x/3)\\)",
      "\\(y = 2*(x/3)^2 - 8*(x/3) + 1\\)",
      "\\(y = 4*(x/4)^4 - 8*(x/4)\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is \\(y = 2*(x/3)^2 - 8*(x/3)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Combining transformations: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y = 2\\left(\\frac{x}{3}\\right)^2 - 8\\left(\\frac{x}{3}\\right)\\)",
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
            "script": "board.suspendUpdate(); board.create('arrow', [[-4,0],[4,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-4],[0,4]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [3.4, -1.4, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 3.6, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return x*x; }, -3.9, 3.9], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.2, 2.5, 'y = x²'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
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
        "workingOut": "\\(y = 2*(x/3)^2 - 8*(x/3)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y = 2*(x/3)^2 - 8*(x/3). Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(y = 2*(x/3)^2 - 8*(x/3)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11-5g-q2c",
    "topicId": "y11a-5G",
    "c": "5G",
    "t": "Combining transformations",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Start with the parabola \\(y = x^2 - 4x\\). We will apply dilations in different orders.\nc) Parts a and b used the same dilations, a factor of 3 horizontally and a factor of 2 vertically, but in a different order. Do these transformations commute?",
    "answer": "0",
    "hint": "",
    "solution": "0",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Combining transformations: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "y = x^2 - 4x. We will apply dilations in different orders.",
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
            "script": "board.suspendUpdate(); board.create('arrow', [[-4,0],[4,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-4],[0,4]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [3.4, -1.4, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 3.6, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return x*x; }, -3.9, 3.9], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.2, 2.5, 'y = x²'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
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
        "workingOut": "\\(0\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 0. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(0\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y11-5g-q3a-i",
    "topicId": "y11a-5G",
    "c": "5G",
    "t": "Combining transformations",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Start with the parabola \\(y = x^2 + 4x\\). We will examine combining a horizontal dilation and a vertical translation.\na) i) The parabola is dilated by a factor of 3 horizontally. Find its equation.",
    "opts": [
      "\\(y = (x/3)^2 + 4(x/3)\\)",
      "\\(y = (x/3)^2 + 4(x/3) + 1\\)",
      "\\(y = (x/3)^2 - 4(x/3)\\)",
      "\\(y = (x/4)^4 + 4(x/4)\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(y = (x/3)^2 + 4(x/3)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Combining transformations: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y = \\left(\\frac{x}{3}\\right)^2 + 4\\left(\\frac{x}{3}\\right)\\)",
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
            "script": "board.suspendUpdate(); board.create('arrow', [[-4,0],[4,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-4],[0,4]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [3.4, -1.4, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 3.6, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return x*x; }, -3.9, 3.9], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.2, 2.5, 'y = x²'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
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
        "workingOut": "\\(y = (x/3)^2 + 4(x/3)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y = (x/3)^2 + 4(x/3). Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(y = (x/3)^2 + 4(x/3)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11-5g-q3a-ii",
    "topicId": "y11a-5G",
    "c": "5G",
    "t": "Combining transformations",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Start with the parabola \\(y = x^2 + 4x\\). We will examine combining a horizontal dilation and a vertical translation.\nii) The parabola in part i is then translated 2 units up. Find its equation.",
    "opts": [
      "\\(y = (x/3)^2 + 4(x/3) + 2\\)",
      "\\(y = (x/3)^2 + 4(x/3) + 2 + 1\\)",
      "\\(y = (x/3)^2 - 4(x/3) - 2\\)",
      "\\(y = (x/4)^4 + 4(x/4) + 4\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(y = (x/3)^2 + 4(x/3) + 2\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Combining transformations: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y = \\left(\\frac{x}{3}\\right)^2 + 4\\left(\\frac{x}{3}\\right) + 2\\)",
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
            "script": "board.suspendUpdate(); board.create('arrow', [[-4,0],[4,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-4],[0,4]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [3.4, -1.4, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 3.6, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return x*x; }, -3.9, 3.9], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.2, 2.5, 'y = x²'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
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
        "workingOut": "\\(y = (x/3)^2 + 4(x/3) + 2\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y = (x/3)^2 + 4(x/3) + 2. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(y = (x/3)^2 + 4(x/3) + 2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11-5g-q3b-i",
    "topicId": "y11a-5G",
    "c": "5G",
    "t": "Combining transformations",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Start with the parabola \\(y = x^2 + 4x\\). We will examine combining a horizontal dilation and a vertical translation.\nb) i) The original parabola is shifted 2 units up. Find its equation.",
    "opts": [
      "\\(y = x^2 + 4x + 2\\)",
      "\\(y = x^2 + 4x + 2 + 1\\)",
      "\\(y = x^2 - 4x - 2\\)",
      "\\(y = x^4 + 4x + 4\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(y = x^2 + 4x + 2\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Combining transformations: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y = x^2 + 4x + 2\\)",
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
            "script": "board.suspendUpdate(); board.create('arrow', [[-4,0],[4,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-4],[0,4]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [3.4, -1.4, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 3.6, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return x*x; }, -3.9, 3.9], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.2, 2.5, 'y = x²'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
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
        "workingOut": "\\(y = x^2 + 4x + 2\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y = x^2 + 4x + 2. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(y = x^2 + 4x + 2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11-5g-q3b-ii",
    "topicId": "y11a-5G",
    "c": "5G",
    "t": "Combining transformations",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Start with the parabola \\(y = x^2 + 4x\\). We will examine combining a horizontal dilation and a vertical translation.\nii) The parabola in part i is then dilated by a factor of 3 horizontally. Find its equation.",
    "opts": [
      "\\(y = (x/3)^2 + 4(x/3) + 2\\)",
      "\\(y = (x/3)^2 + 4(x/3) + 2 + 1\\)",
      "\\(y = (x/3)^2 - 4(x/3) - 2\\)",
      "\\(y = (x/4)^4 + 4(x/4) + 4\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(y = (x/3)^2 + 4(x/3) + 2\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Combining transformations: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y = \\left(\\frac{x}{3}\\right)^2 + 4\\left(\\frac{x}{3}\\right) + 2\\)",
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
            "script": "board.suspendUpdate(); board.create('arrow', [[-4,0],[4,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-4],[0,4]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [3.4, -1.4, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 3.6, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return x*x; }, -3.9, 3.9], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.2, 2.5, 'y = x²'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
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
        "workingOut": "\\(y = (x/3)^2 + 4(x/3) + 2\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y = (x/3)^2 + 4(x/3) + 2. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(y = (x/3)^2 + 4(x/3) + 2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11-5g-q3c",
    "topicId": "y11a-5G",
    "c": "5G",
    "t": "Combining transformations",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Start with the parabola \\(y = x^2 + 4x\\). We will examine combining a horizontal dilation and a vertical translation.\nc) Do these transformations (horizontal dilation and vertical translation) commute?",
    "answer": "0",
    "hint": "",
    "solution": "0",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Combining transformations: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "y = x^2 + 4x. We will examine combining a horizontal dilation and a vertical translation.",
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
            "script": "board.suspendUpdate(); board.create('arrow', [[-4,0],[4,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-4],[0,4]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [3.4, -1.4, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 3.6, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return x*x; }, -3.9, 3.9], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.2, 2.5, 'y = x²'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
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
        "workingOut": "\\(0\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 0. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(0\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y11-5g-q4a-i",
    "topicId": "y11a-5G",
    "c": "5G",
    "t": "Combining transformations",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Start with the parabola \\(y = x^2 - 8x\\). We will analyze a shift right and a reflection in the y-axis.\na) i) The parabola is shifted right by 3 units. Find its equation, expanding any brackets.",
    "opts": [
      "\\(y = x^2 + 14x - 33\\)",
      "\\(y = x^2 - 14x + 33\\)",
      "\\(y = x^2 - 14x + 33 + 1\\)",
      "\\(y = x^4 - 14x + 44\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is \\(y = x^2 - 14x + 33\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Combining transformations: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y = (x - 3)^2 - 8(x - 3)\\)",
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
            "script": "board.suspendUpdate(); board.create('arrow', [[-4,0],[4,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-4],[0,4]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [3.4, -1.4, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 3.6, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return x*x; }, -3.9, 3.9], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.2, 2.5, 'y = x²'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(y = x^2 - 14x + 33\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(y = x^2 - 14x + 33\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y = x^2 - 14x + 33. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(y = x^2 - 14x + 33\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11-5g-q4a-ii",
    "topicId": "y11a-5G",
    "c": "5G",
    "t": "Combining transformations",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Start with the parabola \\(y = x^2 - 8x\\). We will analyze a shift right and a reflection in the y-axis.\nii) The shifted parabola is then reflected in the y-axis. Find its equation.",
    "opts": [
      "\\(y = x^2 + 14x + 33\\)",
      "\\(y = x^2 + 14x + 33 + 1\\)",
      "\\(y = x^2 - 14x - 33\\)",
      "\\(y = x^4 + 14x + 44\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(y = x^2 + 14x + 33\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Combining transformations: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y = (-x)^2 - 14(-x) + 33 = x^2 + 14x + 33\\)",
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
            "script": "board.suspendUpdate(); board.create('arrow', [[-4,0],[4,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-4],[0,4]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [3.4, -1.4, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 3.6, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return x*x; }, -3.9, 3.9], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.2, 2.5, 'y = x²'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
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
        "workingOut": "\\(y = x^2 + 14x + 33\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y = x^2 + 14x + 33. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(y = x^2 + 14x + 33\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11-5g-q4b-i",
    "topicId": "y11a-5G",
    "c": "5G",
    "t": "Combining transformations",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Start with the parabola \\(y = x^2 - 8x\\). We will analyze a shift right and a reflection in the y-axis.\nb) i) The original parabola is reflected in the y-axis. Find its equation.",
    "opts": [
      "\\(y = x^2 + 8x\\)",
      "\\(y = x^2 + 8x + 1\\)",
      "\\(y = x^2 - 8x\\)",
      "\\(y = x^4 + 8x\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(y = x^2 + 8x\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Combining transformations: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y = (-x)^2 - 8(-x) = x^2 + 8x\\)",
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
            "script": "board.suspendUpdate(); board.create('arrow', [[-4,0],[4,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-4],[0,4]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [3.4, -1.4, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 3.6, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return x*x; }, -3.9, 3.9], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.2, 2.5, 'y = x²'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
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
        "workingOut": "\\(y = x^2 + 8x\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y = x^2 + 8x. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(y = x^2 + 8x\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11-5g-q4b-ii",
    "topicId": "y11a-5G",
    "c": "5G",
    "t": "Combining transformations",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Start with the parabola \\(y = x^2 - 8x\\). We will analyze a shift right and a reflection in the y-axis.\nii) The reflected parabola is then shifted 3 units right. Find its equation, expanding any brackets.",
    "opts": [
      "\\(y = x^2 + 2x - 15\\)",
      "\\(y = x^2 + 2x - 15 + 1\\)",
      "\\(y = x^2 - 2x + 15\\)",
      "\\(y = x^4 + 4x - 15\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(y = x^2 + 2x - 15\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Combining transformations: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y = (x - 3)^2 + 8(x - 3)\\)",
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
            "script": "board.suspendUpdate(); board.create('arrow', [[-4,0],[4,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-4],[0,4]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [3.4, -1.4, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 3.6, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return x*x; }, -3.9, 3.9], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.2, 2.5, 'y = x²'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(y = x^2 + 2x - 15\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(y = x^2 + 2x - 15\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y = x^2 + 2x - 15. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(y = x^2 + 2x - 15\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11-5g-q4c",
    "topicId": "y11a-5G",
    "c": "5G",
    "t": "Combining transformations",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Start with the parabola \\(y = x^2 - 8x\\). We will analyze a shift right and a reflection in the y-axis.\nc) Do these transformations (shift right and reflection in the y-axis) commute?",
    "answer": "1",
    "hint": "",
    "solution": "1",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Combining transformations: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "y = x^2 - 8x. We will analyze a shift right and a reflection in the y-axis.",
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
            "script": "board.suspendUpdate(); board.create('arrow', [[-4,0],[4,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-4],[0,4]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [3.4, -1.4, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 3.6, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return x*x; }, -3.9, 3.9], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.2, 2.5, 'y = x²'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
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
    "id": "y11-5g-q5a",
    "topicId": "y11a-5G",
    "c": "5G",
    "t": "Combining transformations",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Do reflection in the y-axis and horizontal translation commute?",
    "answer": "1",
    "hint": "Try translating a function by \\(a\\) and reflecting it, compared to reflecting first and then translating.",
    "solution": "1",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Combining transformations: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
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
    "id": "y11-5g-q5b",
    "topicId": "y11a-5G",
    "c": "5G",
    "t": "Combining transformations",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Do vertical dilation and vertical translation commute?",
    "answer": "1",
    "hint": "Compare multiplying a function by a factor after translating, versus translating after multiplying.",
    "solution": "1",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Combining transformations: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
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
    "id": "y11-5g-q5c",
    "topicId": "y11a-5G",
    "c": "5G",
    "t": "Combining transformations",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Do vertical dilation and reflection in the x-axis commute?",
    "answer": "0",
    "hint": "Both transformations correspond to multiplying the entire y-value by a constant.",
    "solution": "0",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Combining transformations: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
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
        "workingOut": "\\(0\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 0. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(0\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y11-5g-q5d",
    "topicId": "y11a-5G",
    "c": "5G",
    "t": "Combining transformations",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Do horizontal translation and vertical translation commute?",
    "answer": "0",
    "hint": "Think about whether moving a graph horizontally and then vertically differs from doing it in reverse.",
    "solution": "0",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Combining transformations: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
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
        "workingOut": "\\(0\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 0. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(0\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y11-5g-q5e",
    "topicId": "y11a-5G",
    "c": "5G",
    "t": "Combining transformations",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Do horizontal dilation and horizontal translation commute?",
    "answer": "1",
    "hint": "Check the arguments of the function under both orders of transformations.",
    "solution": "1",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Combining transformations: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
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
    "id": "y11-5g-q5f",
    "topicId": "y11a-5G",
    "c": "5G",
    "t": "Combining transformations",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Do reflection in the x-axis and horizontal translation commute?",
    "answer": "0",
    "hint": "Check if shifting horizontally affects the vertical reflection or vice versa.",
    "solution": "0",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Combining transformations: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
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
        "workingOut": "\\(0\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 0. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(0\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y11-5g-q6a",
    "topicId": "y11a-5G",
    "c": "5G",
    "t": "Combining transformations",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the new equation for \\(y = x^2\\) after it is shifted right 3 units, then dilated by a factor of \\(\\frac{1}{3}\\) horizontally. Sketch the resulting graph.",
    "answer": "",
    "hint": "Shift right by replacing \\(x\\) with \\(x - 3\\), then dilate horizontally by replacing \\(x\\) with \\(3x\\).",
    "solution": "",
    "solutionSteps": [
      {
        "explanation": "First, translate the parabola \\(y = x^2\\) right by 3 units to get: \\(y = (x - 3)^2\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(y = (x - 3)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Next, apply the horizontal dilation by factor \\(\\frac{1}{3}\\) by replacing \\(x\\) with \\(3x\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(y = (3x - 3)^2 = 9(x - 1)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Sketch the final graph, which is a steep parabola with vertex at \\((1, 0)\\) and y-intercept at \\((0, 9)\\).",
        "workingOut": "",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -2,
              10,
              4,
              -2
            ],
            "boardOptions": {
              "keepaspectratio": true
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-2,0],[4,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-2],[0,10]], {strokeColor:'black'});\nboard.create('functiongraph', [function(x){ return 9*(x-1)*(x-1); }, -1, 3], {strokeColor:'blue',strokeWidth:2});\nboard.create('point', [1,0], {name:'(1,0)', size:3, color:'red'});\nboard.unsuspendUpdate();"
          }
        }
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
        "script": "board.suspendUpdate(); board.create('arrow', [[-4,0],[4,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-4],[0,4]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [3.4, -1.4, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 3.6, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return x*x; }, -3.9, 3.9], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.2, 2.5, 'y = x²'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y11-5g-q6b",
    "topicId": "y11a-5G",
    "c": "5G",
    "t": "Combining transformations",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the new equation for \\(y = 3^x\\) after it is translated down 2 units, then reflected in the y-axis. Sketch the resulting graph.",
    "answer": "",
    "hint": "Subtract 2 from the function, then replace \\(x\\) with \\(-x\\).",
    "solution": "",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Combining transformations: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y = 3^x - 2\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(y = 3^{-x} - 2 = \\left(\\frac{1}{3}\\right)^x - 2\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Final answer: . Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y11-5g-q6c",
    "topicId": "y11a-5G",
    "c": "5G",
    "t": "Combining transformations",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the new equation for \\(y = x^2 - 2\\) after it is translated down 2 units, then dilated by a factor of \\(-1\\) vertically. Sketch the graph.",
    "answer": "",
    "hint": "Subtract 2, then multiply the entire function by \\(-1\\).",
    "solution": "",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Combining transformations: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y = x^2 - 4\\)",
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
            "script": "board.suspendUpdate(); board.create('arrow', [[-4,0],[4,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-4],[0,4]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [3.4, -1.4, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 3.6, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return x*x; }, -3.9, 3.9], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.2, 2.5, 'y = x²'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(y = -(x^2 - 4) = 4 - x^2\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Final answer: . Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "",
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
        "script": "board.suspendUpdate(); board.create('arrow', [[-4,0],[4,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-4],[0,4]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [3.4, -1.4, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 3.6, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return x*x; }, -3.9, 3.9], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.2, 2.5, 'y = x²'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y11-5g-q6d",
    "topicId": "y11a-5G",
    "c": "5G",
    "t": "Combining transformations",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the new equation for \\(y = \\frac{1}{x}\\) after it is shifted right 2 units, then dilated by a factor of 3 vertically. Sketch the graph.",
    "answer": "",
    "hint": "Replace \\(x\\) with \\(x - 2\\), then multiply the output by 3.",
    "solution": "",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Combining transformations: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y = \\frac{1}{x - 2}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(y = \\frac{3}{x - 2}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Final answer: . Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y11-5g-q6e",
    "topicId": "y11a-5G",
    "c": "5G",
    "t": "Combining transformations",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the new equation for \\(x^2 + y^2 = 9\\) after it is translated up 3 units, then dilated by a factor of \\(\\frac{1}{3}\\) vertically. Sketch the graph.",
    "answer": "",
    "hint": "Replace \\(y\\) with \\(y - 3\\), then replace \\(y\\) with \\(3y\\) to dilate vertically by \\(\\frac{1}{3}\\).",
    "solution": "",
    "solutionSteps": [
      {
        "explanation": "First, translate the circle \\(x^2 + y^2 = 9\\) up by 3 units: replace \\(y\\) with \\(y - 3\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(x^2 + (y - 3)^2 = 9\\)",
        "graphData": null
      },
      {
        "explanation": "Next, apply vertical dilation by factor \\(\\frac{1}{3}\\) by replacing \\(y\\) with \\(3y\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(x^2 + (3y - 3)^2 = 9 \\implies x^2 + 9(y - 1)^2 = 9 \\implies \\frac{x^2}{9} + (y - 1)^2 = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Sketch the ellipse centered at \\((0, 1)\\) with semi-major axis 3 horizontally and semi-minor axis 1 vertically.",
        "workingOut": "",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -5,
              4,
              5,
              -2
            ],
            "boardOptions": {
              "keepaspectratio": true
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-5,0],[5,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-2],[0,4]], {strokeColor:'black'});\nboard.create('ellipse', [[0,1], [3,1], [0,2]], {strokeColor:'blue', strokeWidth:2});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y11-5g-q6f",
    "topicId": "y11a-5G",
    "c": "5G",
    "t": "Combining transformations",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the new equation for \\(y = \\sqrt{x}\\) after it is translated up 3 units, then dilated by a factor of \\(-1\\) horizontally. Sketch the graph.",
    "answer": "",
    "hint": "Add 3, then replace \\(x\\) with \\(-x\\) to reflect in the y-axis.",
    "solution": "",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Combining transformations: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y = \\sqrt{x} + 3\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(y = \\sqrt{-x} + 3\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Final answer: . Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y11-5g-q7a",
    "topicId": "y11a-5G",
    "c": "5G",
    "t": "Combining transformations",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "A table shows whether pairs of transformations commute. We use H for horizontal, V for vertical, T for translation, and D for dilation. Thus HT is horizontal translation, VT is vertical translation, HD is horizontal dilation, and VD is vertical dilation.\nLet C indicate that they commute, and N indicate that they do not commute.\n\n\\(\\begin{array}{c|cccc} & \\text{HT} & \\text{VT} & \\text{HD} & \\text{VD} \\\\ \\hline \\text{HT} & C & & & \\\\ \\text{VT} & & C & & \\\\ \\text{HD} & N & & C & \\\\ \\text{VD} & & & C & C \\end{array}\\)\na) Complete the entries below the diagonal in the table.",
    "answer": "",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Combining transformations: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\begin{array}{c|cccc} & \\text{HT} & \\text{VT} & \\text{HD} & \\text{VD} \\\\ \\hline \\text{HT} & C & C & N & C \\\\ \\text{VT} & C & C & C & N \\\\ \\text{HD} & N & C & C & C \\\\ \\text{VD} & C & N & C & C \\end{array}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Final answer: . Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y11-5g-q7b",
    "topicId": "y11a-5G",
    "c": "5G",
    "t": "Combining transformations",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "A table shows whether pairs of transformations commute. We use H for horizontal, V for vertical, T for translation, and D for dilation. Thus HT is horizontal translation, VT is vertical translation, HD is horizontal dilation, and VD is vertical dilation.\nLet C indicate that they commute, and N indicate that they do not commute.\n\n\\(\\begin{array}{c|cccc} & \\text{HT} & \\text{VT} & \\text{HD} & \\text{VD} \\\\ \\hline \\text{HT} & C & & & \\\\ \\text{VT} & & C & & \\\\ \\text{HD} & N & & C & \\\\ \\text{VD} & & & C & C \\end{array}\\)\nb) The table does not directly include reflections. How can the table be used to decide whether a reflection commutes with another transformation?",
    "answer": "",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Combining transformations: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
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
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Final answer: . Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y11-5g-q7c",
    "topicId": "y11a-5G",
    "c": "5G",
    "t": "Combining transformations",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "A table shows whether pairs of transformations commute. We use H for horizontal, V for vertical, T for translation, and D for dilation. Thus HT is horizontal translation, VT is vertical translation, HD is horizontal dilation, and VD is vertical dilation.\nLet C indicate that they commute, and N indicate that they do not commute.\n\n\\(\\begin{array}{c|cccc} & \\text{HT} & \\text{VT} & \\text{HD} & \\text{VD} \\\\ \\hline \\text{HT} & C & & & \\\\ \\text{VT} & & C & & \\\\ \\text{HD} & N & & C & \\\\ \\text{VD} & & & C & C \\end{array}\\)\nc) Check that the table agrees with your answers to Question 5.",
    "answer": "",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Combining transformations: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
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
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Final answer: . Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y11-5g-q8a",
    "topicId": "y11a-5G",
    "c": "5G",
    "t": "Combining transformations",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the equation of \\(y = x^2\\) after shifting left 2 units, down 3 units, then dilating horizontally by a factor of 3.",
    "opts": [
      "\\(y = (x/3+2)^2-3\\)",
      "\\(y = (x/3+2)^2-3 + 1\\)",
      "\\(y = (x/3-2)^2+3\\)",
      "\\(y = (x/4+4)^4-4\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "First shift: \\(x \\to x + 2\\). Second shift: subtract 3. Dilate: replace \\(x\\) with \\(\\frac{x}{3}\\).",
    "solution": "The correct answer is \\(y = (x/3+2)^2-3\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Combining transformations: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y = (x + 2)^2\\)",
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
            "script": "board.suspendUpdate(); board.create('arrow', [[-4,0],[4,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-4],[0,4]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [3.4, -1.4, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 3.6, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return x*x; }, -3.9, 3.9], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.2, 2.5, 'y = x²'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(y = (x + 2)^2 - 3\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(y = \\left(\\frac{x}{3} + 2\\right)^2 - 3\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y = (x/3+2)^2-3. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(y = (x/3+2)^2-3\\)",
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
        "script": "board.suspendUpdate(); board.create('arrow', [[-4,0],[4,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-4],[0,4]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [3.4, -1.4, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 3.6, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return x*x; }, -3.9, 3.9], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.2, 2.5, 'y = x²'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11-5g-q8b",
    "topicId": "y11a-5G",
    "c": "5G",
    "t": "Combining transformations",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the equation of \\(y = x^2\\) after shifting down 3 units, dilating horizontally by a factor of 3, then shifting left 2 units.",
    "opts": [
      "\\(y = ((x+2)/3)^2-3\\)",
      "\\(y = ((x+2)/3)^2-3 + 1\\)",
      "\\(y = ((x+4)/4)^4-4\\)",
      "\\(y = ((x-2)/3)^2+3\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "First subtract 3. Then replace \\(x\\) with \\(\\frac{x}{3}\\). Finally replace \\(x\\) with \\(x + 2\\).",
    "solution": "The correct answer is \\(y = ((x+2)/3)^2-3\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Combining transformations: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y = x^2 - 3\\)",
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
            "script": "board.suspendUpdate(); board.create('arrow', [[-4,0],[4,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-4],[0,4]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [3.4, -1.4, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 3.6, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return x*x; }, -3.9, 3.9], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.2, 2.5, 'y = x²'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(y = \\left(\\frac{x}{3}\\right)^2 - 3\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(y = \\left(\\frac{x + 2}{3}\\right)^2 - 3\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y = ((x+2)/3)^2-3. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(y = ((x+2)/3)^2-3\\)",
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
        "script": "board.suspendUpdate(); board.create('arrow', [[-4,0],[4,0]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('arrow', [[0,-4],[0,4]], {strokeColor:'#94a3b8', strokeWidth:1.5}); board.create('text', [3.4, -1.4, 'x'], {fontSize:13, color:'#64748b'}); board.create('text', [0.12, 3.6, 'y'], {fontSize:13, color:'#64748b'}); board.create('functiongraph', [function(x){ return x*x; }, -3.9, 3.9], {strokeColor:'#6366f1', strokeWidth:2.6}); board.create('text', [1.2, 2.5, 'y = x²'], {fontSize:12, color:'#4f46e5'}); board.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11-5g-q8c",
    "topicId": "y11a-5G",
    "c": "5G",
    "t": "Combining transformations",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the equation of \\(y = 3^x\\) after shifting down 2 units, right 2 units, then dilating vertically by a factor of \\(-3\\).",
    "opts": [
      "\\(y = +3^(x+1)-6\\)",
      "\\(y = -3^(x-1)+6\\)",
      "\\(y = -3^(x-1)+6 + 1\\)",
      "\\(y = -4^(x-1)+6\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Subtract 2, replace \\(x\\) with \\(x - 2\\), then multiply the entire function by \\(-3\\).",
    "solution": "The correct answer is \\(y = -3^(x-1)+6\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Combining transformations: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y = 3^x - 2\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(y = 3^{x-2} - 2\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(y = -3(3^{x-2} - 2) = -3 \\cdot 3^{x-2} + 6 = -3^{x-1} + 6\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y = -3^(x-1)+6. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(y = -3^(x-1)+6\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11-5g-q8d",
    "topicId": "y11a-5G",
    "c": "5G",
    "t": "Combining transformations",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the equation of \\(y = \\frac{1}{x}\\) after shifting right 4 units, dilating by 3 vertically, then shifting up 2 units.",
    "opts": [
      "\\(y = 3/(x+4)-2\\)",
      "\\(y = 3/(x-4)+2\\)",
      "\\(y = 3/(x-4)+2 + 1\\)",
      "\\(y = 4/(x-4)+4\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Replace \\(x\\) with \\(x - 4\\), multiply by 3, then add 2.",
    "solution": "The correct answer is \\(y = 3/(x-4)+2\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Combining transformations: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y = \\frac{1}{x - 4}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(y = \\frac{3}{x - 4}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(y = \\frac{3}{x - 4} + 2\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y = 3/(x-4)+2. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(y = 3/(x-4)+2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11-5g-q9a",
    "topicId": "y11a-5G",
    "c": "5G",
    "t": "Combining transformations",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "The parabola \\(y = (x - 2)^2\\) is shifted 4 units left and then reflected in the y-axis.\na) Show that the new parabola has the same equation as the original.",
    "answer": "",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "",
    "solutionSteps": [
      {
        "explanation": "Start with the equation: \\(y = (x - 2)^2\\). Shift 4 left: replace \\(x\\) with \\(x + 4\\) to get: \\(y = (x + 4 - 2)^2 = (x + 2)^2\\).",
        "workingOut": "\\(y = (x + 2)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Next, reflect in the y-axis: replace \\(x\\) with \\(-x\\) to get: \\(y = (-x + 2)^2\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(y = (2 - x)^2 = (x - 2)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Since \\((x - 2)^2\\) matches the original equation, the new parabola is identical. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y11-5g-q9b",
    "topicId": "y11a-5G",
    "c": "5G",
    "t": "Combining transformations",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "The parabola \\(y = (x - 2)^2\\) is shifted 4 units left and then reflected in the y-axis.\nb) Investigate why this has happened.",
    "answer": "",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Combining transformations: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "y = (x - 2)^2 is shifted 4 units left and then reflected in the y-axis.",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Final answer: . Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y11-5g-q10a-i",
    "topicId": "y11a-5G",
    "c": "5G",
    "t": "Combining transformations",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Let \\(f(x)\\) be any function and let \\(\\ell(x) = ax + b\\), a linear function. The graph of \\(y = f(\\ell(x)) = f(ax + b)\\) can be obtained by two transformations of \\(y = f(x)\\).\na) i) Let \\(g(x) = f(x + 2)\\). Describe the transformation of \\(f(x)\\) to obtain \\(g(x)\\).",
    "answer": "",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Combining transformations: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y = f(\\ell(x)) = f(ax + b) can be obtained by two transformations of y = f(x).\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Final answer: . Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y11-5g-q10a-ii",
    "topicId": "y11a-5G",
    "c": "5G",
    "t": "Combining transformations",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Let \\(f(x)\\) be any function and let \\(\\ell(x) = ax + b\\), a linear function. The graph of \\(y = f(\\ell(x)) = f(ax + b)\\) can be obtained by two transformations of \\(y = f(x)\\).\nii) Let \\(h(x) = g(3x)\\). Describe the transformation of \\(g(x)\\) to obtain \\(h(x)\\).",
    "answer": "",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Combining transformations: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y = f(\\ell(x)) = f(ax + b) can be obtained by two transformations of y = f(x).\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Final answer: . Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y11-5g-q10a-iii",
    "topicId": "y11a-5G",
    "c": "5G",
    "t": "Combining transformations",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Let \\(f(x)\\) be any function and let \\(\\ell(x) = ax + b\\), a linear function. The graph of \\(y = f(\\ell(x)) = f(ax + b)\\) can be obtained by two transformations of \\(y = f(x)\\).\niii) Hence describe \\(h(x)\\) as a transformation of \\(f(x)\\), and write \\(h(x)\\) in terms of \\(f\\).",
    "answer": "",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Combining transformations: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(h(x) = f(3x + 2)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Final answer: . Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y11-5g-q10b-i",
    "topicId": "y11a-5G",
    "c": "5G",
    "t": "Combining transformations",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Let \\(f(x)\\) be any function and let \\(\\ell(x) = ax + b\\), a linear function. The graph of \\(y = f(\\ell(x)) = f(ax + b)\\) can be obtained by two transformations of \\(y = f(x)\\).\nb) i) Let \\(p(x) = f(3x)\\). Describe the transformation of \\(f(x)\\) to obtain \\(p(x)\\).",
    "answer": "",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Combining transformations: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y = f(\\ell(x)) = f(ax + b) can be obtained by two transformations of y = f(x).\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Final answer: . Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y11-5g-q10b-ii",
    "topicId": "y11a-5G",
    "c": "5G",
    "t": "Combining transformations",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Let \\(f(x)\\) be any function and let \\(\\ell(x) = ax + b\\), a linear function. The graph of \\(y = f(\\ell(x)) = f(ax + b)\\) can be obtained by two transformations of \\(y = f(x)\\).\nii) Let \\(q(x) = p\\left(x + \\frac{2}{3}\\right)\\). Describe the transformation of \\(p(x)\\) to obtain \\(q(x)\\).",
    "answer": "",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Combining transformations: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y = f(\\ell(x)) = f(ax + b) can be obtained by two transformations of y = f(x).\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Final answer: . Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y11-5g-q10b-iii",
    "topicId": "y11a-5G",
    "c": "5G",
    "t": "Combining transformations",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Let \\(f(x)\\) be any function and let \\(\\ell(x) = ax + b\\), a linear function. The graph of \\(y = f(\\ell(x)) = f(ax + b)\\) can be obtained by two transformations of \\(y = f(x)\\).\niii) Hence describe \\(q(x)\\) as a transformation of \\(f(x)\\), and write \\(q(x)\\) in terms of \\(f\\).",
    "answer": "",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Combining transformations: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(q(x) = f(3x + 2)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Final answer: . Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y11-5g-q10c",
    "topicId": "y11a-5G",
    "c": "5G",
    "t": "Combining transformations",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Let \\(f(x)\\) be any function and let \\(\\ell(x) = ax + b\\), a linear function. The graph of \\(y = f(\\ell(x)) = f(ax + b)\\) can be obtained by two transformations of \\(y = f(x)\\).\nc) The functions \\(h(x)\\) and \\(q(x)\\) are identical. Explain why the horizontal shifts of \\(f\\) differ in parts a and b.",
    "answer": "",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Combining transformations: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y = f(\\ell(x)) = f(ax + b) can be obtained by two transformations of y = f(x).\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Final answer: . Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y11-5g-q10d",
    "topicId": "y11a-5G",
    "c": "5G",
    "t": "Combining transformations",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Let \\(f(x)\\) be any function and let \\(\\ell(x) = ax + b\\), a linear function. The graph of \\(y = f(\\ell(x)) = f(ax + b)\\) can be obtained by two transformations of \\(y = f(x)\\).\nd) Describe \\(y = f(ax + b)\\) as transformations of \\(y = f(x)\\) in two different ways.",
    "answer": "",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Combining transformations: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y = f(\\ell(x)) = f(ax + b) can be obtained by two transformations of y = f(x).\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Final answer: . Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y11-5g-q10e",
    "topicId": "y11a-5G",
    "c": "5G",
    "t": "Combining transformations",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Let \\(f(x)\\) be any function and let \\(\\ell(x) = ax + b\\), a linear function. The graph of \\(y = f(\\ell(x)) = f(ax + b)\\) can be obtained by two transformations of \\(y = f(x)\\).\ne) Describe \\(y = a f(x) + b\\) as transformations of \\(y = f(x)\\) in two different ways.",
    "answer": "",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Combining transformations: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y = f(\\ell(x)) = f(ax + b) can be obtained by two transformations of y = f(x).\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Final answer: . Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  }
];
