export const YEAR11CH6F_QUESTIONS = [
  {
    "id": "y11a-6f-q5d",
    "topicId": "y11a-6F",
    "c": "6F",
    "t": "Trigonometric identities",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Use complementary identities to simplify: \\(\\frac{\\sin(90^{\\circ} - z)}{\\cos(90^{\\circ} - z)}\\).",
    "opts": [
      "cot z",
      "The opposite of this statement is true.",
      "This is true only when the function is linear.",
      "This only holds for positive values of x."
    ],
    "a": 0,
    "answer": "0",
    "hint": "Simplify the numerator and denominator first.",
    "solution": "We have \\(\\sin(90^{\\circ} - z) = \\cos z\\) and \\(\\cos(90^{\\circ} - z) = \\sin z\\). Thus, the expression simplifies to \\(\\frac{\\cos z}{\\sin z} = \\cot z\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Trigonometric identities: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\sin(90^{\\circ} - z) = \\cos z, quad \\cos(90^{\\circ} - z) = \\sin z\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\frac{\\cos z}{\\sin z} = \\cot z\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "cot z",
        "graphData": null
      },
      {
        "explanation": "Final answer: cot z. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "cot z",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  }
];
