export const YEAR11CH6K_QUESTIONS = [
  {
    "id": "y11a-6k-q2c",
    "topicId": "y11a-6k",
    "c": "6K",
    "t": "Revision",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Simplify: \\(\\frac{\\tan \\theta}{\\sec \\theta}\\)",
    "opts": [
      "\\(\\dfrac{12}{x + 2}\\)",
      "\\(\\dfrac{13}{x + 3}\\)",
      "\\(sin \\theta\\)",
      "\\(sin \\theta + 1\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Rewrite both \\(\\tan \\theta\\) and \\(\\sec \\theta\\) in terms of sine and cosine.",
    "solution": "\\(\\frac{\\tan \\theta}{\\sec \\theta} = \\frac{\\sin \\theta / \\cos \\theta}{1 / \\cos \\theta} = \\sin \\theta\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Revision: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\tan \\theta = \\frac{\\sin \\theta}{\\cos \\theta}, quad \\sec \\theta = \\frac{1}{\\cos \\theta}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\frac{\\frac{\\sin \\theta}{\\cos \\theta}}{\\frac{1}{\\cos \\theta}} = \\sin \\theta\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(sin \\theta\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: sin \\theta. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(sin \\theta\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6k-q3b",
    "topicId": "y11a-6k",
    "c": "6K",
    "t": "Revision",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Show that \\(\\cot \\theta \\sec \\theta = \\text{cosec } \\theta\\).",
    "answer": "\\(\\frac{\\cos \\theta}{\\sin \\theta} \\times \\frac{1}{\\cos \\theta} = \\frac{1}{\\sin \\theta} = \\text{cosec } \\theta\\)",
    "hint": "Rewrite cotangent and secant in terms of sine and cosine.",
    "solution": "\\(\\frac{\\cos \\theta}{\\sin \\theta} \\times \\frac{1}{\\cos \\theta} = \\frac{1}{\\sin \\theta} = \\text{cosec } \\theta\\)",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Revision: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\cot \\theta = \\frac{\\cos \\theta}{\\sin \\theta}, quad \\sec \\theta = \\frac{1}{\\cos \\theta}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\frac{\\cos \\theta}{\\sin \\theta} \\times \\frac{1}{\\cos \\theta} = \\frac{1}{\\sin \\theta}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\frac{1}{\\sin \\theta} = \\text{cosec } \\theta\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\frac{\\cos \\theta}{\\sin \\theta} \\times \\frac{1}{\\cos \\theta} = \\frac{1}{\\sin \\theta} = \\text{cosec } \\theta. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\frac{\\cos \\theta}{\\sin \\theta} \\times \\frac{1}{\\cos \\theta} = \\frac{1}{\\sin \\theta} = \\text{cosec } \\theta\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y11a-6k-q4a",
    "topicId": "y11a-6k",
    "c": "6K",
    "t": "Revision",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Solve the trigonometric equation for \\(0^{\\circ} \\le x \\le 360^{\\circ}\\): \\(\\cos x = \\frac{\\sqrt{3}}{2}\\)",
    "opts": [
      "\\(-30°, 330°\\)",
      "\\(30°, 330°\\)",
      "\\(30°, 330° + 1\\)",
      "\\(40°, 440°\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Cosine is positive in Quadrants I and IV. Use reference angle \\(30^{\\circ}\\).",
    "solution": "\\(x = 30^{\\circ}, 360^{\\circ} - 30^{\\circ} = 330^{\\circ}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Revision: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\theta = 30^{\\circ}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(x = 30^{\\circ}, quad 360^{\\circ} - 30^{\\circ} = 330^{\\circ}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(30°, 330°\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 30°, 330°. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(30°, 330°\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6k-q4c",
    "topicId": "y11a-6k",
    "c": "6K",
    "t": "Revision",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Solve the trigonometric equation for \\(0^{\\circ} \\le x \\le 360^{\\circ}\\): \\(\\tan x = 1\\)",
    "opts": [
      "\\(-45°, 225°\\)",
      "\\(45°, 225°\\)",
      "\\(45°, 225° + 1\\)",
      "\\(45°, 445°\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Tangent is positive in Quadrants I and III. Use reference angle \\(45^{\\circ}\\).",
    "solution": "\\(x = 45^{\\circ}, 180^{\\circ} + 45^{\\circ} = 225^{\\circ}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Revision: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\theta = \\tan^{-1}(1) = 45^{\\circ}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(x = 45^{\\circ}, quad 180^{\\circ} + 45^{\\circ} = 225^{\\circ}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(45°, 225°\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 45°, 225°. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(45°, 225°\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6k-q4e",
    "topicId": "y11a-6k",
    "c": "6K",
    "t": "Revision",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Solve the trigonometric equation for \\(0^{\\circ} \\le x \\le 360^{\\circ}\\): \\(\\tan x = \\sqrt{3}\\)",
    "opts": [
      "\\(-60°, 240°\\)",
      "\\(60°, 240°\\)",
      "\\(60°, 240° + 1\\)",
      "\\(60°, 440°\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Tangent is positive in Quadrants I and III. Reference angle is \\(60^{\\circ}\\).",
    "solution": "\\(x = 60^{\\circ}, 180^{\\circ} + 60^{\\circ} = 240^{\\circ}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Revision: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\theta = \\tan^{-1}(\\sqrt{3}) = 60^{\\circ}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(x = 60^{\\circ}, quad 180^{\\circ} + 60^{\\circ} = 240^{\\circ}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(60°, 240°\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 60°, 240°. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(60°, 240°\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6k-q4g",
    "topicId": "y11a-6k",
    "c": "6K",
    "t": "Revision",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Solve the trigonometric equation for \\(0^{\\circ} \\le x \\le 360^{\\circ}\\): \\(2\\sin x + 1 = 0\\)",
    "opts": [
      "\\(-210°, 330°\\)",
      "\\(210°, 330°\\)",
      "\\(210°, 330° + 1\\)",
      "\\(410°, 440°\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Rearrange to solve for \\(\\sin x\\). Sine is negative in Quadrants III and IV.",
    "solution": "\\(\\sin x = -\\frac{1}{2} \\implies x = 180^{\\circ} + 30^{\\circ} = 210^{\\circ}, quad 360^{\\circ} - 30^{\\circ} = 330^{\\circ}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Revision: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(2\\sin x = -1 \\implies \\sin x = -\\frac{1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(x = 180^{\\circ} + 30^{\\circ} = 210^{\\circ}, quad 360^{\\circ} - 30^{\\circ} = 330^{\\circ}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(210°, 330°\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 210°, 330°. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(210°, 330°\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6k-q4h",
    "topicId": "y11a-6k",
    "c": "6K",
    "t": "Revision",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Solve the trigonometric equation for \\(0^{\\circ} \\le x \\le 360^{\\circ}\\): \\(\\sqrt{2}\\cos x + 1 = 0\\)",
    "opts": [
      "\\(-135°, 225°\\)",
      "\\(135°, 225°\\)",
      "\\(135°, 225° + 1\\)",
      "\\(145°, 445°\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Isolate \\(\\cos x\\). Cosine is negative in Quadrants II and III.",
    "solution": "\\(\\cos x = -\\frac{1}{\\sqrt{2}} \\implies x = 180^{\\circ} - 45^{\\circ} = 135^{\\circ}, quad 180^{\\circ} + 45^{\\circ} = 225^{\\circ}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Revision: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\sqrt{2}\\cos x = -1 \\implies \\cos x = -\\frac{1}{\\sqrt{2}}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(x = 180^{\\circ} - 45^{\\circ} = 135^{\\circ}, quad 180^{\\circ} + 45^{\\circ} = 225^{\\circ}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(135°, 225°\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 135°, 225°. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(135°, 225°\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6k-q4i",
    "topicId": "y11a-6k",
    "c": "6K",
    "t": "Revision",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Solve the trigonometric equation for \\(0^{\\circ} \\le x \\le 360^{\\circ}\\): \\(\\sin^2 x = \\frac{3}{4}\\)",
    "opts": [
      "\\(-60°, 120°, 240°, 300°\\)",
      "\\(60°, 120°, 240°, 300°\\)",
      "\\(60°, 120°, 240°, 300° + 1\\)",
      "\\(60°, 140°, 440°, 400°\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Take the square root to get \\(\\sin x = \\pm \\frac{\\sqrt{3}}{2}\\). All 4 quadrants are valid.",
    "solution": "\\(\\sin x = \\pm \\frac{\\sqrt{3}}{2} \\implies x = 60^{\\circ}, 120^{\\circ}, 240^{\\circ}, 300^{\\circ}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Revision: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\sin x = \\pm \\sqrt{\\frac{3}{4}} = \\pm \\frac{\\sqrt{3}}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(x = 60^{\\circ}, 180^{\\circ} - 60^{\\circ} = 120^{\\circ}, 180^{\\circ} + 60^{\\circ} = 240^{\\circ}, 360^{\\circ} - 60^{\\circ} = 300^{\\circ}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(60°, 120°, 240°, 300°\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 60°, 120°, 240°, 300°. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(60°, 120°, 240°, 300°\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  }
];
