export const Y12A_CH5H_QUESTIONS = [
  {
    "id": "y12a-5h-q1a",
    "topicId": "y12a-5H",
    "c": "5H",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Consider the curve \\(y = 3\\ln x\\) and the point \\(P(e, 3)\\) on the curve.\n\nWrite down the derivative \\(\\dfrac{dy}{dx}\\).",
    "a": 2,
    "answer": "2",
    "opts": [
      "\\(-\\dfrac{3}{x}\\)",
      "\\(\\dfrac{1}{x}\\)",
      "\\(\\dfrac{3}{x}\\)",
      "\\(\\dfrac{x}{3}\\)"
    ],
    "hint": "\\(\\dfrac{d}{dx}(a\\ln x) = \\dfrac{a}{x}\\).",
    "solution": "The correct answer is \\(\\dfrac{3}{x}\\).",
    "solutionSteps": [
      {
        "explanation": "Given \\(y = 3\\ln x\\). Use \\(\\dfrac{d}{dx}\\ln x = \\dfrac{1}{x}\\) and multiply by the constant 3.",
        "workingOut": "\\(y = 3\\ln x\\)",
        "graphData": null
      },
      {
        "explanation": "So \\(\\dfrac{dy}{dx} = 3\\cdot\\dfrac{1}{x} = \\dfrac{3}{x}\\). Do not drop the factor 3.",
        "workingOut": "\\(\\dfrac{dy}{dx} = \\dfrac{3}{x}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\dfrac{3}{x}\\) (domain \\(x > 0\\)).",
        "workingOut": "\\(\\dfrac{3}{x}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5h-q1b",
    "topicId": "y12a-5H",
    "c": "5H",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Consider the curve \\(y = 3\\ln x\\) and the point \\(P(e, 3)\\) on the curve.\n\nFrom part (a), \\(\\dfrac{dy}{dx} = \\dfrac{3}{x}\\). Find the gradient of the tangent at \\(P(e, 3)\\).",
    "a": 2,
    "answer": "2",
    "opts": [
      "\\(-\\dfrac{3}{e}\\)",
      "\\(\\dfrac{1}{e}\\)",
      "\\(\\dfrac{3}{e}\\)",
      "\\(\\dfrac{e}{3}\\)"
    ],
    "hint": "Differentiate carefully; evaluate at the given point when asked.",
    "solution": "The correct answer is \\(\\dfrac{3}{e}\\).",
    "solutionSteps": [
      {
        "explanation": "Gradient of the tangent = derivative at the point. Substitute \\(x = e\\) into \\(\\dfrac{3}{x}\\).",
        "workingOut": "\\(m = \\dfrac{3}{e}\\)",
        "graphData": null
      },
      {
        "explanation": "Check \\(P\\) is on the curve: \\(3\\ln e = 3\\). Final gradient: \\(\\dfrac{3}{e}\\).",
        "workingOut": "\\(\\dfrac{3}{e}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5h-q1c",
    "topicId": "y12a-5H",
    "c": "5H",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Consider the curve \\(y = 3\\ln x\\) and the point \\(P(e, 3)\\) on the curve.\n\nThe gradient at \\(P\\) is \\(m = \\dfrac{3}{e}\\). Find the equation of the tangent at \\(P\\). (This line passes through the origin.)",
    "a": 1,
    "answer": "1",
    "opts": [
      "\\(y = \\dfrac{3}{e}x + 3\\)",
      "\\(y = \\dfrac{3}{e}x\\)",
      "\\(y = 3x - e\\)",
      "\\(y = \\dfrac{e}{3}x\\)"
    ],
    "hint": "Differentiate carefully; evaluate at the given point when asked.",
    "solution": "The correct answer is \\(y = \\dfrac{3}{e}x\\).",
    "solutionSteps": [
      {
        "explanation": "Point–gradient form with \\(P(e, 3)\\) and \\(m = \\dfrac{3}{e}\\):",
        "workingOut": "\\(y - 3 = \\dfrac{3}{e}(x - e)\\)",
        "graphData": null
      },
      {
        "explanation": "Expand: \\(y - 3 = \\dfrac{3}{e}x - 3\\), so \\(y = \\dfrac{3}{e}x\\).",
        "workingOut": "\\(y = \\dfrac{3}{e}x\\)",
        "graphData": null
      },
      {
        "explanation": "At \\(x = 0\\), \\(y = 0\\), so the tangent passes through \\(O\\).",
        "workingOut": "\\(x = 0 \\Rightarrow y = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Final equation: \\(y = \\dfrac{3}{e}x\\). Why this step? It isolates one clear rule or substitution so the next algebra stays reliable. A common slip is a sign error or wrong evaluation point — re-check before continuing.",
        "workingOut": "\\(y = \\dfrac{3}{e}x\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5h-q2a",
    "topicId": "y12a-5H",
    "c": "5H",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Consider the curve \\(y = 2\\ln x\\) and the point \\(Q(1, 0)\\) on the curve.\n\nFind the gradient of the tangent at \\(Q(1, 0)\\).",
    "a": 0,
    "answer": "0",
    "opts": [
      "\\(2\\)",
      "\\(1\\)",
      "\\(\\dfrac{1}{2}\\)",
      "\\(-2\\)"
    ],
    "hint": "Differentiate carefully; evaluate at the given point when asked.",
    "solution": "The correct answer is \\(2\\).",
    "solutionSteps": [
      {
        "explanation": "Differentiate: \\(\\dfrac{d}{dx}(2\\ln x) = \\dfrac{2}{x}\\).",
        "workingOut": "\\(y' = \\dfrac{2}{x}\\)",
        "graphData": null
      },
      {
        "explanation": "At \\(x = 1\\): \\(m = \\dfrac{2}{1} = 2\\). Why this step? It isolates one clear rule or substitution so the next algebra stays reliable. A common slip is a sign error or wrong evaluation point — re-check before continuing.",
        "workingOut": "\\(m = 2\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: gradient \\(2\\). Why this step? It isolates one clear rule or substitution so the next algebra stays reliable. A common slip is a sign error or wrong evaluation point — re-check before continuing.",
        "workingOut": "\\(2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5h-q2b",
    "topicId": "y12a-5H",
    "c": "5H",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Consider the curve \\(y = 2\\ln x\\) and the point \\(Q(1, 0)\\) on the curve.\n\nThe gradient at \\(Q\\) is \\(2\\). Find the equation of the tangent at \\(Q\\). (This line passes through \\(A(0, -2)\\).)",
    "a": 0,
    "answer": "0",
    "opts": [
      "\\(y = 2x - 2\\)",
      "\\(y = 2x\\)",
      "\\(y = 2x + 2\\)",
      "\\(y = x - 2\\)"
    ],
    "hint": "Differentiate carefully; evaluate at the given point when asked.",
    "solution": "The correct answer is \\(y = 2x - 2\\).",
    "solutionSteps": [
      {
        "explanation": "Point–gradient at \\(Q(1, 0)\\) with \\(m = 2\\): Why this step? It isolates one clear rule or substitution so the next algebra stays reliable. A common slip is a sign error or wrong evaluation point — re-check before continuing.",
        "workingOut": "\\(y - 0 = 2(x - 1)\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify: \\(y = 2x - 2\\). Why this step? It isolates one clear rule or substitution so the next algebra stays reliable. A common slip is a sign error or wrong evaluation point — re-check before continuing.",
        "workingOut": "\\(y = 2x - 2\\)",
        "graphData": null
      },
      {
        "explanation": "At \\(x = 0\\): \\(y = -2\\), so the line passes through \\(A(0, -2)\\).",
        "workingOut": "\\(x = 0 \\Rightarrow y = -2\\)",
        "graphData": null
      },
      {
        "explanation": "Final equation: \\(y = 2x - 2\\). Why this step? It isolates one clear rule or substitution so the next algebra stays reliable. A common slip is a sign error or wrong evaluation point — re-check before continuing.",
        "workingOut": "\\(y = 2x - 2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5h-q3a",
    "topicId": "y12a-5H",
    "c": "5H",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Consider the curve \\(y = \\ln x\\) and the point \\(R(e^{-2}, -2)\\) on the curve.\n\nFind the gradient of the tangent at \\(R(e^{-2}, -2)\\).",
    "a": 1,
    "answer": "1",
    "opts": [
      "\\(e^{-2}\\)",
      "\\(e^{2}\\)",
      "\\(1\\)",
      "\\(-2\\)"
    ],
    "hint": "Differentiate carefully; evaluate at the given point when asked.",
    "solution": "The correct answer is \\(e^{2}\\).",
    "solutionSteps": [
      {
        "explanation": "Differentiate: \\(y' = \\dfrac{1}{x}\\). Why this step? It isolates one clear rule or substitution so the next algebra stays reliable. A common slip is a sign error or wrong evaluation point — re-check before continuing.",
        "workingOut": "\\(y' = \\dfrac{1}{x}\\)",
        "graphData": null
      },
      {
        "explanation": "At \\(x = e^{-2}\\): \\(m = \\dfrac{1}{e^{-2}} = e^{2}\\).",
        "workingOut": "\\(m = e^{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(e^{2}\\). Why this step? It isolates one clear rule or substitution so the next algebra stays reliable. A common slip is a sign error or wrong evaluation point — re-check before continuing.",
        "workingOut": "\\(e^{2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5h-q3b",
    "topicId": "y12a-5H",
    "c": "5H",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Consider the curve \\(y = \\ln x\\) and the point \\(R(e^{-2}, -2)\\) on the curve.\n\nThe gradient at \\(R\\) is \\(e^{2}\\). Find the equation of the tangent at \\(R\\). (This line passes through \\(B(0, -3)\\).)",
    "a": 0,
    "answer": "0",
    "opts": [
      "\\(y = e^{2}x - 3\\)",
      "\\(y = e^{2}x + 3\\)",
      "\\(y = e^{2}x - 2\\)",
      "\\(y = e^{-2}x - 3\\)"
    ],
    "hint": "Differentiate carefully; evaluate at the given point when asked.",
    "solution": "The correct answer is \\(y = e^{2}x - 3\\).",
    "solutionSteps": [
      {
        "explanation": "Point–gradient: \\(y - (-2) = e^{2}\\big(x - e^{-2}\\big)\\).",
        "workingOut": "\\(y + 2 = e^{2}x - 1\\)",
        "graphData": null
      },
      {
        "explanation": "Since \\(e^{2}\\cdot e^{-2} = 1\\): \\(y + 2 = e^{2}x - 1\\), so \\(y = e^{2}x - 3\\).",
        "workingOut": "\\(y = e^{2}x - 3\\)",
        "graphData": null
      },
      {
        "explanation": "At \\(x = 0\\): \\(y = -3\\), so the line passes through \\(B(0, -3)\\).",
        "workingOut": "\\(x = 0 \\Rightarrow y = -3\\)",
        "graphData": null
      },
      {
        "explanation": "Final equation: \\(y = e^{2}x - 3\\). Why this step? It isolates one clear rule or substitution so the next algebra stays reliable. A common slip is a sign error or wrong evaluation point — re-check before continuing.",
        "workingOut": "\\(y = e^{2}x - 3\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5h-q4a",
    "topicId": "y12a-5H",
    "c": "5H",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Consider the curve \\(y = 3\\ln x\\) and the point \\(A(1, 0)\\) on the curve.\n\nFind the gradient of the tangent at \\(A(1, 0)\\).",
    "a": 0,
    "answer": "0",
    "opts": [
      "\\(3\\)",
      "\\(1\\)",
      "\\(\\dfrac{1}{3}\\)",
      "\\(-3\\)"
    ],
    "hint": "Differentiate carefully; evaluate at the given point when asked.",
    "solution": "The correct answer is \\(3\\).",
    "solutionSteps": [
      {
        "explanation": "\\(y' = \\dfrac{3}{x}\\). At \\(x = 1\\): \\(m_t = 3\\). Why this step? It isolates one clear rule or substitution so the next algebra stays reliable. A common slip is a sign error or wrong evaluation point — re-check before continuing.",
        "workingOut": "\\(m_t = 3\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: tangent gradient \\(3\\). Why this step? It isolates one clear rule or substitution so the next algebra stays reliable. A common slip is a sign error or wrong evaluation point — re-check before continuing.",
        "workingOut": "\\(3\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5h-q4b",
    "topicId": "y12a-5H",
    "c": "5H",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Consider the curve \\(y = 3\\ln x\\) and the point \\(A(1, 0)\\) on the curve.\n\nThe tangent gradient at \\(A\\) is \\(3\\). What is the gradient of the normal at \\(A\\)?",
    "a": 0,
    "answer": "0",
    "opts": [
      "\\(-\\dfrac{1}{3}\\)",
      "\\(3\\)",
      "\\(-3\\)",
      "\\(\\dfrac{1}{3}\\)"
    ],
    "hint": "Differentiate carefully; evaluate at the given point when asked.",
    "solution": "The correct answer is \\(-\\dfrac{1}{3}\\).",
    "solutionSteps": [
      {
        "explanation": "Tangent and normal are perpendicular, so product of gradients is \\(-1\\).",
        "workingOut": "\\(m_t m_n = -1\\)",
        "graphData": null
      },
      {
        "explanation": "With \\(m_t = 3\\): \\(3 m_n = -1\\), so \\(m_n = -\\dfrac{1}{3}\\).",
        "workingOut": "\\(m_n = -\\dfrac{1}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(-\\dfrac{1}{3}\\). Why this step? It isolates one clear rule or substitution so the next algebra stays reliable. A common slip is a sign error or wrong evaluation point — re-check before continuing.",
        "workingOut": "\\(-\\dfrac{1}{3}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5h-q4c",
    "topicId": "y12a-5H",
    "c": "5H",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Consider the curve \\(y = 3\\ln x\\) and the point \\(A(1, 0)\\) on the curve.\n\nThe normal at \\(A\\) has gradient \\(-\\dfrac{1}{3}\\). Find its equation.",
    "a": 1,
    "answer": "1",
    "opts": [
      "\\(y = -\\dfrac{1}{3}x\\)",
      "\\(y = -\\dfrac{1}{3}x + \\dfrac{1}{3}\\)",
      "\\(y = 3x + \\dfrac{1}{3}\\)",
      "\\(y = -\\dfrac{1}{3}x - \\dfrac{1}{3}\\)"
    ],
    "hint": "Differentiate carefully; evaluate at the given point when asked.",
    "solution": "The correct answer is \\(y = -\\dfrac{1}{3}x + \\dfrac{1}{3}\\).",
    "solutionSteps": [
      {
        "explanation": "Point–gradient at \\(A(1, 0)\\): Why this step? It isolates one clear rule or substitution so the next algebra stays reliable. A common slip is a sign error or wrong evaluation point — re-check before continuing.",
        "workingOut": "\\(y - 0 = -\\dfrac{1}{3}(x - 1)\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify: \\(y = -\\dfrac{1}{3}x + \\dfrac{1}{3}\\). Why this step? It isolates one clear rule or substitution so the next algebra stays reliable. A common slip is a sign error or wrong evaluation point — re-check before continuing.",
        "workingOut": "\\(y = -\\dfrac{1}{3}x + \\dfrac{1}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Final equation: \\(y = -\\dfrac{1}{3}x + \\dfrac{1}{3}\\).",
        "workingOut": "\\(y = -\\dfrac{1}{3}x + \\dfrac{1}{3}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5h-q4d",
    "topicId": "y12a-5H",
    "c": "5H",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Consider the curve \\(y = 3\\ln x\\) and the point \\(A(1, 0)\\) on the curve.\n\nThe normal has equation \\(y = -\\dfrac{1}{3}x + \\dfrac{1}{3}\\). What is its \\(y\\)-intercept?",
    "a": 2,
    "answer": "2",
    "opts": [
      "\\(-\\dfrac{1}{3}\\)",
      "\\(1\\)",
      "\\(\\dfrac{1}{3}\\)",
      "\\(3\\)"
    ],
    "hint": "Differentiate carefully; evaluate at the given point when asked.",
    "solution": "The correct answer is \\(\\dfrac{1}{3}\\).",
    "solutionSteps": [
      {
        "explanation": "Set \\(x = 0\\): \\(y = \\dfrac{1}{3}\\). Why this step? It isolates one clear rule or substitution so the next algebra stays reliable. A common slip is a sign error or wrong evaluation point — re-check before continuing.",
        "workingOut": "\\(y = \\dfrac{1}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\dfrac{1}{3}\\). Why this step? It isolates one clear rule or substitution so the next algebra stays reliable. A common slip is a sign error or wrong evaluation point — re-check before continuing.",
        "workingOut": "\\(\\dfrac{1}{3}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5h-q5a",
    "topicId": "y12a-5H",
    "c": "5H",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find, giving answers in the form \\( y = mx + b \\), the equations of the tangent to \\( y = 5 \\log_e x \\) at the point \\( Q(1, 0) \\).",
    "opts": [
      "\\(\\dfrac{13}{x + 3}\\)",
      "\\(y = 5x + 5\\)",
      "\\(y = 5x - 5\\)",
      "\\(y = 5x - 5 + 1\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Find the derivative, evaluate at x = 1, then use point-gradient form.",
    "solution": "The correct answer is \\(y = 5x - 5\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Applications of differentiation: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y' = \\frac{5}{x}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(m = \\frac{5}{1} = 5\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(y - 0 = 5(x - 1)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y = 5x - 5. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(y = 5x - 5\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5h-q5a-normal",
    "topicId": "y12a-5H",
    "c": "5H",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find, giving answers in the form \\( y = mx + b \\), the equations of the normal to \\( y = 5 \\log_e x \\) at the point \\( Q(1, 0) \\).",
    "opts": [
      "\\(-y = -\\frac{1}{5}x + \\frac{1}{5}\\)",
      "\\(y = -\\frac{1}{5}x + \\frac{1}{5}\\)",
      "\\(y = -\\frac{1}{5}x + \\frac{1}{5} + 1\\)",
      "\\(y = -\\frac{5}{1}x + \\frac{1}{5}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "The gradient of the normal is \\( -1/m \\).",
    "solution": "The correct answer is \\(y = -\\frac{1}{5}x + \\frac{1}{5}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Applications of differentiation: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(m_t = 5\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(m_n = -\\frac{1}{5}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(y - 0 = -\\frac{1}{5}(x - 1)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y = -\\frac{1}{5}x + \\frac{1}{5}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(y = -\\frac{1}{5}x + \\frac{1}{5}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5h-q5b",
    "topicId": "y12a-5H",
    "c": "5H",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find, giving answers in the form \\( y = mx + b \\), the equations of the tangent to \\( y = \\log_e x + 4 \\) at the point \\( R(1, 4) \\).",
    "opts": [
      "\\(y = x + 3\\)",
      "\\(y = x + 3 + 1\\)",
      "\\(y = x + 4\\)",
      "\\(y = x - 3\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Find the derivative and evaluate at x = 1.",
    "solution": "The correct answer is \\(y = x + 3\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Applications of differentiation: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y' = \\frac{1}{x}\\)",
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
        "workingOut": "\\(m = \\frac{1}{1} = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(y - 4 = 1(x - 1)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y = x + 3. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(y = x + 3\\)",
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
    "id": "y12a-5h-q5b-normal",
    "topicId": "y12a-5H",
    "c": "5H",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find, giving answers in the form \\( y = mx + b \\), the equations of the normal to \\( y = \\log_e x + 4 \\) at the point \\( R(1, 4) \\).",
    "opts": [
      "\\(\\dfrac{13}{x + 3}\\)",
      "\\(y = +x - 5\\)",
      "\\(y = -x + 5\\)",
      "\\(y = -x + 5 + 1\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "The gradient of the normal is \\( -1/m \\).",
    "solution": "The correct answer is \\(y = -x + 5\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Applications of differentiation: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(m_t = 1\\)",
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
        "workingOut": "\\(m_n = -1\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(y - 4 = -1(x - 1)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y = -x + 5. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(y = -x + 5\\)",
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
    "id": "y12a-5h-q5c",
    "topicId": "y12a-5H",
    "c": "5H",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find, giving answers in the form \\( y = mx + b \\), the equations of the tangent to \\( y = 3 \\log_e x - 3 \\) at the point \\( S(1, -3) \\).",
    "opts": [
      "\\(y = 3x + 6\\)",
      "\\(y = 3x - 6\\)",
      "\\(y = 3x - 6 + 1\\)",
      "\\(y = 4x - 6\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Find the derivative and evaluate at x = 1.",
    "solution": "The correct answer is \\(y = 3x - 6\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Applications of differentiation: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y' = \\frac{3}{x}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(m = \\frac{3}{1} = 3\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(y - (-3) = 3(x - 1)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y = 3x - 6. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(y = 3x - 6\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5h-q5c-normal",
    "topicId": "y12a-5H",
    "c": "5H",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find, giving answers in the form \\( y = mx + b \\), the equations of the normal to \\( y = 3 \\log_e x - 3 \\) at the point \\( S(1, -3) \\).",
    "opts": [
      "\\(-y = -\\frac{1}{3}x - \\frac{8}{3}\\)",
      "\\(y = -\\frac{1}{3}x - \\frac{8}{3}\\)",
      "\\(y = -\\frac{1}{4}x - \\frac{8}{4}\\)",
      "\\(y = -\\frac{3}{1}x - \\frac{8}{3}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "The gradient of the normal is \\( -1/m \\).",
    "solution": "The correct answer is \\(y = -\\frac{1}{3}x - \\frac{8}{3}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Applications of differentiation: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(m_t = 3\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(m_n = -\\frac{1}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(y - (-3) = -\\frac{1}{3}(x - 1)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y = -\\frac{1}{3}x - \\frac{8}{3}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(y = -\\frac{1}{3}x - \\frac{8}{3}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5h-q6a",
    "topicId": "y12a-5H",
    "c": "5H",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Consider the curve \\(y = \\ln(4x - 3)\\) and the point \\(P(1, 0)\\).\n\nWhich calculation correctly shows that \\(P(1, 0)\\) lies on the curve?",
    "a": 0,
    "answer": "0",
    "opts": [
      "\\(\\ln(4\\cdot 1 - 3) = \\ln 1 = 0\\)",
      "\\(\\ln(4\\cdot 1 - 3) = \\ln 4\\)",
      "\\(\\ln(4 - 3) = 1\\)",
      "\\(\\ln(1) = 1\\)"
    ],
    "hint": "Differentiate carefully; evaluate at the given point when asked.",
    "solution": "The correct answer is \\(\\ln(4\\cdot 1 - 3) = \\ln 1 = 0\\).",
    "solutionSteps": [
      {
        "explanation": "Substitute \\(x = 1\\) into the curve equation. Why this step? It isolates one clear rule or substitution so the next algebra stays reliable. A common slip is a sign error or wrong evaluation point — re-check before continuing.",
        "workingOut": "\\(y = \\ln(4\\cdot 1 - 3) = \\ln 1\\)",
        "graphData": null
      },
      {
        "explanation": "Since \\(\\ln 1 = 0\\), the point is \\((1, 0)\\). So \\(P\\) lies on the curve.",
        "workingOut": "\\(\\ln 1 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Final check: LHS = RHS = 0. Why this step? It isolates one clear rule or substitution so the next algebra stays reliable. A common slip is a sign error or wrong evaluation point — re-check before continuing.",
        "workingOut": "\\(\\ln(4-3) = 0\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5h-q6b",
    "topicId": "y12a-5H",
    "c": "5H",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Consider the curve \\(y = \\ln(4x - 3)\\) and the point \\(P(1, 0)\\).\n\nFind the gradient of the tangent at \\(P(1, 0)\\).",
    "a": 2,
    "answer": "2",
    "opts": [
      "\\(1\\)",
      "\\(\\dfrac{1}{4}\\)",
      "\\(4\\)",
      "\\(-4\\)"
    ],
    "hint": "Differentiate carefully; evaluate at the given point when asked.",
    "solution": "The correct answer is \\(4\\).",
    "solutionSteps": [
      {
        "explanation": "Chain rule: \\(y' = \\dfrac{4}{4x - 3}\\). Why this step? It isolates one clear rule or substitution so the next algebra stays reliable. A common slip is a sign error or wrong evaluation point — re-check before continuing.",
        "workingOut": "\\(y' = \\dfrac{4}{4x-3}\\)",
        "graphData": null
      },
      {
        "explanation": "At \\(x = 1\\): \\(m_t = \\dfrac{4}{1} = 4\\). Why this step? It isolates one clear rule or substitution so the next algebra stays reliable. A common slip is a sign error or wrong evaluation point — re-check before continuing.",
        "workingOut": "\\(m_t = 4\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(4\\). Why this step? It isolates one clear rule or substitution so the next algebra stays reliable. A common slip is a sign error or wrong evaluation point — re-check before continuing.",
        "workingOut": "\\(4\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5h-q6b-normal",
    "topicId": "y12a-5H",
    "c": "5H",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Consider the curve \\(y = \\ln(4x - 3)\\) and the point \\(P(1, 0)\\).\n\nThe tangent gradient at \\(P\\) is \\(4\\). Find the gradient of the normal at \\(P\\).",
    "a": 0,
    "answer": "0",
    "opts": [
      "\\(-\\dfrac{1}{4}\\)",
      "\\(4\\)",
      "\\(-4\\)",
      "\\(\\dfrac{1}{4}\\)"
    ],
    "hint": "Differentiate carefully; evaluate at the given point when asked.",
    "solution": "The correct answer is \\(-\\dfrac{1}{4}\\).",
    "solutionSteps": [
      {
        "explanation": "Perpendicular: \\(m_n = -\\dfrac{1}{m_t} = -\\dfrac{1}{4}\\).",
        "workingOut": "\\(m_n = -\\dfrac{1}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(-\\dfrac{1}{4}\\). Why this step? It isolates one clear rule or substitution so the next algebra stays reliable. A common slip is a sign error or wrong evaluation point — re-check before continuing.",
        "workingOut": "\\(-\\dfrac{1}{4}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5h-q6c",
    "topicId": "y12a-5H",
    "c": "5H",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Consider the curve \\(y = \\ln(4x - 3)\\) and the point \\(P(1, 0)\\).\n\nThe tangent gradient at \\(P\\) is \\(4\\). Find the equation of the tangent at \\(P\\).",
    "a": 1,
    "answer": "1",
    "opts": [
      "\\(y = 4x\\)",
      "\\(y = 4x - 4\\)",
      "\\(y = 4x + 4\\)",
      "\\(y = x - 4\\)"
    ],
    "hint": "Differentiate carefully; evaluate at the given point when asked.",
    "solution": "The correct answer is \\(y = 4x - 4\\).",
    "solutionSteps": [
      {
        "explanation": "Point–gradient: \\(y - 0 = 4(x - 1)\\). Why this step? It isolates one clear rule or substitution so the next algebra stays reliable. A common slip is a sign error or wrong evaluation point — re-check before continuing.",
        "workingOut": "\\(y = 4(x-1)\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify: \\(y = 4x - 4\\). Why this step? It isolates one clear rule or substitution so the next algebra stays reliable. A common slip is a sign error or wrong evaluation point — re-check before continuing.",
        "workingOut": "\\(y = 4x - 4\\)",
        "graphData": null
      },
      {
        "explanation": "Final equation: \\(y = 4x - 4\\). Why this step? It isolates one clear rule or substitution so the next algebra stays reliable. A common slip is a sign error or wrong evaluation point — re-check before continuing.",
        "workingOut": "\\(y = 4x - 4\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5h-q6c-yint1",
    "topicId": "y12a-5H",
    "c": "5H",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Consider the curve \\(y = \\ln(4x - 3)\\) and the point \\(P(1, 0)\\).\n\nThe tangent is \\(y = 4x - 4\\). What is its \\(y\\)-intercept?",
    "a": 1,
    "answer": "1",
    "opts": [
      "\\(4\\)",
      "\\(-4\\)",
      "\\(0\\)",
      "\\(1\\)"
    ],
    "hint": "Differentiate carefully; evaluate at the given point when asked.",
    "solution": "The correct answer is \\(-4\\).",
    "solutionSteps": [
      {
        "explanation": "Set \\(x = 0\\): \\(y = -4\\). Why this step? It isolates one clear rule or substitution so the next algebra stays reliable. A common slip is a sign error or wrong evaluation point — re-check before continuing.",
        "workingOut": "\\(y = -4\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(-4\\). Why this step? It isolates one clear rule or substitution so the next algebra stays reliable. A common slip is a sign error or wrong evaluation point — re-check before continuing.",
        "workingOut": "\\(-4\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5h-q6c-normal-eq",
    "topicId": "y12a-5H",
    "c": "5H",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Consider the curve \\(y = \\ln(4x - 3)\\) and the point \\(P(1, 0)\\).\n\nThe normal gradient at \\(P\\) is \\(-\\dfrac{1}{4}\\). Find the equation of the normal at \\(P\\).",
    "a": 1,
    "answer": "1",
    "opts": [
      "\\(y = -\\dfrac{1}{4}x\\)",
      "\\(y = -\\dfrac{1}{4}x + \\dfrac{1}{4}\\)",
      "\\(y = 4x + \\dfrac{1}{4}\\)",
      "\\(y = -\\dfrac{1}{4}x - \\dfrac{1}{4}\\)"
    ],
    "hint": "Differentiate carefully; evaluate at the given point when asked.",
    "solution": "The correct answer is \\(y = -\\dfrac{1}{4}x + \\dfrac{1}{4}\\).",
    "solutionSteps": [
      {
        "explanation": "Point–gradient: \\(y = -\\dfrac{1}{4}(x - 1)\\). Why this step? It isolates one clear rule or substitution so the next algebra stays reliable. A common slip is a sign error or wrong evaluation point — re-check before continuing.",
        "workingOut": "\\(y = -\\dfrac{1}{4}x + \\dfrac{1}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "Final equation: \\(y = -\\dfrac{1}{4}x + \\dfrac{1}{4}\\).",
        "workingOut": "\\(y = -\\dfrac{1}{4}x + \\dfrac{1}{4}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5h-q6c-yint2",
    "topicId": "y12a-5H",
    "c": "5H",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Consider the curve \\(y = \\ln(4x - 3)\\) and the point \\(P(1, 0)\\).\n\nThe normal is \\(y = -\\dfrac{1}{4}x + \\dfrac{1}{4}\\). What is its \\(y\\)-intercept?",
    "a": 2,
    "answer": "2",
    "opts": [
      "\\(-\\dfrac{1}{4}\\)",
      "\\(4\\)",
      "\\(\\dfrac{1}{4}\\)",
      "\\(0\\)"
    ],
    "hint": "Differentiate carefully; evaluate at the given point when asked.",
    "solution": "The correct answer is \\(\\dfrac{1}{4}\\).",
    "solutionSteps": [
      {
        "explanation": "Set \\(x = 0\\): \\(y = \\dfrac{1}{4}\\). Why this step? It isolates one clear rule or substitution so the next algebra stays reliable. A common slip is a sign error or wrong evaluation point — re-check before continuing.",
        "workingOut": "\\(y = \\dfrac{1}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\dfrac{1}{4}\\). Why this step? It isolates one clear rule or substitution so the next algebra stays reliable. A common slip is a sign error or wrong evaluation point — re-check before continuing.",
        "workingOut": "\\(\\dfrac{1}{4}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5h-q6d",
    "topicId": "y12a-5H",
    "c": "5H",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 150,
    "question": "Consider the curve \\(y = \\ln(4x - 3)\\) and the point \\(P(1, 0)\\).\n\nThe tangent meets the \\(y\\)-axis at \\((0, -4)\\) and the normal meets it at \\((0, \\dfrac{1}{4})\\). Both lines pass through \\(P(1, 0)\\). Find the area of the triangle formed by the tangent, the normal and the \\(y\\)-axis.",
    "a": 2,
    "answer": "2",
    "opts": [
      "\\(\\dfrac{17}{4}\\)",
      "\\(\\dfrac{15}{8}\\)",
      "\\(\\dfrac{17}{8}\\)",
      "\\(4\\)"
    ],
    "hint": "Differentiate carefully; evaluate at the given point when asked.",
    "solution": "The correct answer is \\(\\dfrac{17}{8}\\).",
    "solutionSteps": [
      {
        "explanation": "Base on the \\(y\\)-axis: distance between intercepts \\(\\big|\\dfrac{1}{4} - (-4)\\big| = \\dfrac{17}{4}\\).",
        "workingOut": "\\(b = \\dfrac{17}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "Height is the perpendicular distance from the \\(y\\)-axis to \\(P\\), which is \\(1\\) (the \\(x\\)-coordinate of \\(P\\)).",
        "workingOut": "\\(h = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Area = \\(\\dfrac{1}{2}\\times\\text{base}\\times\\text{height} = \\dfrac{1}{2}\\cdot\\dfrac{17}{4}\\cdot 1 = \\dfrac{17}{8}\\).",
        "workingOut": "\\(\\dfrac{17}{8}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\dfrac{17}{8}\\). Why this step? It isolates one clear rule or substitution so the next algebra stays reliable. A common slip is a sign error or wrong evaluation point — re-check before continuing.",
        "workingOut": "\\(\\dfrac{17}{8}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5h-q7a",
    "topicId": "y12a-5H",
    "c": "5H",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Consider the curve \\(y = \\ln x - \\dfrac{x}{3} + 1\\).\n\nFind the gradient of the tangent at \\(x = 1\\).",
    "a": 2,
    "answer": "2",
    "opts": [
      "\\(\\dfrac{1}{3}\\)",
      "\\(1\\)",
      "\\(\\dfrac{2}{3}\\)",
      "\\(-\\dfrac{2}{3}\\)"
    ],
    "hint": "Differentiate carefully; evaluate at the given point when asked.",
    "solution": "The correct answer is \\(\\dfrac{2}{3}\\).",
    "solutionSteps": [
      {
        "explanation": "Differentiate: \\(y' = \\dfrac{1}{x} - \\dfrac{1}{3}\\).",
        "workingOut": "\\(y' = \\dfrac{1}{x} - \\dfrac{1}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "At \\(x = 1\\): \\(m = 1 - \\dfrac{1}{3} = \\dfrac{2}{3}\\).",
        "workingOut": "\\(m = \\dfrac{2}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\dfrac{2}{3}\\). Why this step? It isolates one clear rule or substitution so the next algebra stays reliable. A common slip is a sign error or wrong evaluation point — re-check before continuing.",
        "workingOut": "\\(\\dfrac{2}{3}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5h-q7b",
    "topicId": "y12a-5H",
    "c": "5H",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Consider the curve \\(y = \\ln x - \\dfrac{x}{3} + 1\\).\n\nAt \\(x = 1\\) the gradient is \\(\\dfrac{2}{3}\\). Find the equation of the tangent. (This line passes through the origin.)",
    "a": 0,
    "answer": "0",
    "opts": [
      "\\(y = \\dfrac{2}{3}x\\)",
      "\\(y = \\dfrac{2}{3}x + 1\\)",
      "\\(y = \\dfrac{2}{3}x - \\dfrac{2}{3}\\)",
      "\\(y = x\\)"
    ],
    "hint": "Differentiate carefully; evaluate at the given point when asked.",
    "solution": "The correct answer is \\(y = \\dfrac{2}{3}x\\).",
    "solutionSteps": [
      {
        "explanation": "Point on curve at \\(x = 1\\): \\(y = \\ln 1 - \\dfrac{1}{3} + 1 = \\dfrac{2}{3}\\).",
        "workingOut": "\\(P\\left(1,\\dfrac{2}{3}\\right)\\)",
        "graphData": null
      },
      {
        "explanation": "Point–gradient: \\(y - \\dfrac{2}{3} = \\dfrac{2}{3}(x - 1)\\).",
        "workingOut": "\\(y - \\dfrac{2}{3} = \\dfrac{2}{3}(x-1)\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify: \\(y = \\dfrac{2}{3}x\\). At \\(x = 0\\), \\(y = 0\\) (passes through origin).",
        "workingOut": "\\(y = \\dfrac{2}{3}x\\)",
        "graphData": null
      },
      {
        "explanation": "Final equation: \\(y = \\dfrac{2}{3}x\\). Why this step? It isolates one clear rule or substitution so the next algebra stays reliable. A common slip is a sign error or wrong evaluation point — re-check before continuing.",
        "workingOut": "\\(y = \\dfrac{2}{3}x\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5h-q8a",
    "topicId": "y12a-5H",
    "c": "5H",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 150,
    "question": "Consider the curve \\(y = (3 - x)\\ln x\\).\n\nFind the equation of the tangent at \\(x = 3\\).",
    "a": 1,
    "answer": "1",
    "opts": [
      "\\(y = (\\ln 3)x + 3\\ln 3\\)",
      "\\(y = -(\\ln 3)x + 3\\ln 3\\)",
      "\\(y = -(\\ln 3)x\\)",
      "\\(y = -x + 3\\ln 3\\)"
    ],
    "hint": "Differentiate carefully; evaluate at the given point when asked.",
    "solution": "The correct answer is \\(y = -(\\ln 3)x + 3\\ln 3\\).",
    "solutionSteps": [
      {
        "explanation": "At \\(x = 3\\): \\(y = (3-3)\\ln 3 = 0\\). Point \\((3, 0)\\).",
        "workingOut": "\\(P(3,0)\\)",
        "graphData": null
      },
      {
        "explanation": "Product rule: \\(y' = -\\ln x + (3-x)\\cdot\\dfrac{1}{x}\\). At \\(x = 3\\): \\(m = -\\ln 3\\).",
        "workingOut": "\\(m = -\\ln 3\\)",
        "graphData": null
      },
      {
        "explanation": "Tangent: \\(y - 0 = -(\\ln 3)(x - 3)\\), so \\(y = -(\\ln 3)x + 3\\ln 3\\).",
        "workingOut": "\\(y = -(\\ln 3)x + 3\\ln 3\\)",
        "graphData": null
      },
      {
        "explanation": "Final equation: \\(y = -(\\ln 3)x + 3\\ln 3\\). Why this step? It isolates one clear rule or substitution so the next algebra stays reliable. A common slip is a sign error or wrong evaluation point — re-check before continuing.",
        "workingOut": "\\(y = -(\\ln 3)x + 3\\ln 3\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5h-q8b",
    "topicId": "y12a-5H",
    "c": "5H",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Consider the curve \\(y = (3 - x)\\ln x\\).\n\nThe tangent is \\(y = -(\\ln 3)x + 3\\ln 3\\). What is its \\(y\\)-intercept?",
    "a": 1,
    "answer": "1",
    "opts": [
      "\\(\\ln 3\\)",
      "\\(3\\ln 3\\)",
      "\\(-3\\ln 3\\)",
      "\\(0\\)"
    ],
    "hint": "Differentiate carefully; evaluate at the given point when asked.",
    "solution": "The correct answer is \\(3\\ln 3\\).",
    "solutionSteps": [
      {
        "explanation": "Set \\(x = 0\\): \\(y = 3\\ln 3\\). Why this step? It isolates one clear rule or substitution so the next algebra stays reliable. A common slip is a sign error or wrong evaluation point — re-check before continuing.",
        "workingOut": "\\(y = 3\\ln 3\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(3\\ln 3\\). Why this step? It isolates one clear rule or substitution so the next algebra stays reliable. A common slip is a sign error or wrong evaluation point — re-check before continuing.",
        "workingOut": "\\(3\\ln 3\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5h-q9a",
    "topicId": "y12a-5H",
    "c": "5H",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Consider the curve \\(y = 2\\ln x\\).\n\nWhat is the natural domain of \\(y = 2\\ln x\\)?",
    "a": 2,
    "answer": "2",
    "opts": [
      "\\(x \\ge 0\\)",
      "\\(x \\neq 0\\)",
      "\\(x > 0\\)",
      "\\(x < 0\\)"
    ],
    "hint": "Differentiate carefully; evaluate at the given point when asked.",
    "solution": "The correct answer is \\(x > 0\\).",
    "solutionSteps": [
      {
        "explanation": "\\(\\ln x\\) requires \\(x > 0\\). Why this step? It isolates one clear rule or substitution so the next algebra stays reliable. A common slip is a sign error or wrong evaluation point — re-check before continuing.",
        "workingOut": "\\(x > 0\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(x > 0\\). Why this step? It isolates one clear rule or substitution so the next algebra stays reliable. A common slip is a sign error or wrong evaluation point — re-check before continuing.",
        "workingOut": "\\(x > 0\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5h-q9a-deriv",
    "topicId": "y12a-5H",
    "c": "5H",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Consider the curve \\(y = 2\\ln x\\).\n\nWrite down \\(\\dfrac{dy}{dx}\\).",
    "a": 2,
    "answer": "2",
    "opts": [
      "\\(\\dfrac{1}{x}\\)",
      "\\(2x\\)",
      "\\(\\dfrac{2}{x}\\)",
      "\\(-\\dfrac{2}{x}\\)"
    ],
    "hint": "Differentiate carefully; evaluate at the given point when asked.",
    "solution": "The correct answer is \\(\\dfrac{2}{x}\\).",
    "solutionSteps": [
      {
        "explanation": "\\(\\dfrac{d}{dx}(2\\ln x) = \\dfrac{2}{x}\\). Why this step? It isolates one clear rule or substitution so the next algebra stays reliable. A common slip is a sign error or wrong evaluation point — re-check before continuing.",
        "workingOut": "\\(y' = \\dfrac{2}{x}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\dfrac{2}{x}\\). Why this step? It isolates one clear rule or substitution so the next algebra stays reliable. A common slip is a sign error or wrong evaluation point — re-check before continuing.",
        "workingOut": "\\(\\dfrac{2}{x}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5h-q9b",
    "topicId": "y12a-5H",
    "c": "5H",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Consider the curve \\(y = 2\\ln x\\).\n\nGiven domain \\(x > 0\\) and \\(y' = \\dfrac{2}{x}\\), why is the gradient of every tangent positive?",
    "a": 0,
    "answer": "0",
    "opts": [
      "\\(\\dfrac{2}{x} > 0\\) for all \\(x > 0\\)",
      "\\(\\dfrac{2}{x} < 0\\) for all \\(x > 0\\)",
      "\\(y' = 0\\) everywhere",
      "\\(y'\\) is undefined on the domain"
    ],
    "hint": "Differentiate carefully; evaluate at the given point when asked.",
    "solution": "The correct answer is \\(\\dfrac{2}{x} > 0\\) for all \\(x > 0\\).",
    "solutionSteps": [
      {
        "explanation": "On the domain \\(x > 0\\), the denominator is positive and the numerator is 2, so \\(\\dfrac{2}{x} > 0\\).",
        "workingOut": "\\(\\dfrac{2}{x} > 0\\)",
        "graphData": null
      },
      {
        "explanation": "Therefore every tangent has positive gradient (the curve is strictly increasing).",
        "workingOut": "\\(\\text{always increasing}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5h-q9c",
    "topicId": "y12a-5H",
    "c": "5H",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Consider the curve \\(y = 2\\ln x\\).\n\nGiven \\(y' = \\dfrac{2}{x}\\) for \\(x > 0\\), why is the gradient of every normal negative?",
    "a": 0,
    "answer": "0",
    "opts": [
      "\\(m_n = -\\dfrac{x}{2} < 0\\) for all \\(x > 0\\)",
      "\\(m_n = \\dfrac{x}{2} > 0\\) for all \\(x > 0\\)",
      "\\(m_n = -\\dfrac{2}{x} > 0\\)",
      "Normals have the same gradient as tangents"
    ],
    "hint": "Differentiate carefully; evaluate at the given point when asked.",
    "solution": "The correct answer is \\(m_n = -\\dfrac{x}{2} < 0\\) for all \\(x > 0\\).",
    "solutionSteps": [
      {
        "explanation": "Normal gradient: \\(m_n = -\\dfrac{1}{y'} = -\\dfrac{x}{2}\\).",
        "workingOut": "\\(m_n = -\\dfrac{x}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "For \\(x > 0\\), \\(-\\dfrac{x}{2} < 0\\). So every normal has negative gradient.",
        "workingOut": "\\(m_n < 0\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5h-q9d",
    "topicId": "y12a-5H",
    "c": "5H",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Consider the curve \\(y = 2\\ln x\\).\n\nFind \\(y''\\).",
    "a": 2,
    "answer": "2",
    "opts": [
      "\\(\\dfrac{2}{x^{2}}\\)",
      "\\(-\\dfrac{2}{x}\\)",
      "\\(-\\dfrac{2}{x^{2}}\\)",
      "\\(\\dfrac{1}{x^{2}}\\)"
    ],
    "hint": "Differentiate carefully; evaluate at the given point when asked.",
    "solution": "The correct answer is \\(-\\dfrac{2}{x^{2}}\\).",
    "solutionSteps": [
      {
        "explanation": "\\(y' = 2x^{-1}\\), so \\(y'' = -2x^{-2} = -\\dfrac{2}{x^{2}}\\).",
        "workingOut": "\\(y'' = -\\dfrac{2}{x^{2}}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(-\\dfrac{2}{x^{2}}\\). Why this step? It isolates one clear rule or substitution so the next algebra stays reliable. A common slip is a sign error or wrong evaluation point — re-check before continuing.",
        "workingOut": "\\(-\\dfrac{2}{x^{2}}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5h-q9d-explain",
    "topicId": "y12a-5H",
    "c": "5H",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Consider the curve \\(y = 2\\ln x\\).\n\nGiven \\(y'' = -\\dfrac{2}{x^{2}}\\) on \\(x > 0\\), which statement is correct?",
    "a": 0,
    "answer": "0",
    "opts": [
      "\\(y'' < 0\\) for all \\(x > 0\\), so the curve is concave down",
      "\\(y'' > 0\\) for all \\(x > 0\\), so the curve is concave up",
      "\\(y'' = 0\\) everywhere, so the curve is a straight line",
      "\\(y''\\) changes sign, so there is a point of inflection"
    ],
    "hint": "Differentiate carefully; evaluate at the given point when asked.",
    "solution": "The correct answer is \\(y'' < 0\\) for all \\(x > 0\\), so the curve is concave down.",
    "solutionSteps": [
      {
        "explanation": "For all \\(x > 0\\), \\(x^{2} > 0\\), so \\(-\\dfrac{2}{x^{2}} < 0\\).",
        "workingOut": "\\(y'' < 0\\)",
        "graphData": null
      },
      {
        "explanation": "A negative second derivative means the curve is concave down on its whole domain.",
        "workingOut": "\\(\\text{concave down}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5h-q10a",
    "topicId": "y12a-5H",
    "c": "5H",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the coordinates of the point on \\( y = 2 \\log_e x \\) where the tangent has gradient \\( \\frac{1}{2} \\).",
    "opts": [
      "\\((4, 2 \\log_e 4)\\)",
      "\\((4, 2 \\log_e 4) + 1\\)",
      "\\((4, 4 \\log_e 4)\\)",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Set the derivative equal to 1/2 and solve for x.",
    "solution": "The correct answer is \\((4, 2 \\log_e 4)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Applications of differentiation: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y' = \\frac{2}{x}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\frac{2}{x} = \\frac{1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(x = 4\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (4, 2 \\log_e 4). Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\((4, 2 \\log_e 4)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5h-q10a-tan",
    "topicId": "y12a-5H",
    "c": "5H",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the equation of the tangent at this point in the form \\( y = mx + b \\).",
    "opts": [
      "\\(-y = \\frac{1}{2}x - 2 + 2 \\log_e 4\\)",
      "\\(y = \\frac{1}{2}x + 2 - 2 \\log_e 4\\)",
      "\\(y = \\frac{1}{2}x - 2 + 2 \\log_e 4\\)",
      "\\(y = \\frac{2}{1}x - 2 + 2 \\log_e 4\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Use point-gradient form with m = 1/2.",
    "solution": "The correct answer is \\(y = \\frac{1}{2}x - 2 + 2 \\log_e 4\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Applications of differentiation: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y - 2 \\log_e 4 = \\frac{1}{2}(x - 4)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(y = \\frac{1}{2}x - 2 + 2 \\log_e 4\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(y = \\frac{1}{2}x - 2 + 2 \\log_e 4\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y = \\frac{1}{2}x - 2 + 2 \\log_e 4. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(y = \\frac{1}{2}x - 2 + 2 \\log_e 4\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5h-q10a-norm",
    "topicId": "y12a-5H",
    "c": "5H",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the equation of the normal at this point in the form \\( y = mx + b \\).",
    "opts": [
      "\\(y = +2x - 8 - 2 \\log_e 4\\)",
      "\\(y = -2x + 8 + 2 \\log_e 4\\)",
      "\\(y = -2x + 8 + 2 \\log_e 4 + 1\\)",
      "\\(y = -4x + 8 + 4 \\log_e 4\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Use normal gradient m = -2.",
    "solution": "The correct answer is \\(y = -2x + 8 + 2 \\log_e 4\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Applications of differentiation: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(m_n = -2\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(y - 2 \\log_e 4 = -2(x - 4)\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(y = -2x + 8 + 2 \\log_e 4\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y = -2x + 8 + 2 \\log_e 4. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(y = -2x + 8 + 2 \\log_e 4\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5h-q10b",
    "topicId": "y12a-5H",
    "c": "5H",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the coordinates of the point on \\( y = 2 \\log_e x \\) where the tangent has gradient 4.",
    "opts": [
      "\\((\\frac{1}{2}, +2 \\log_e 2)\\)",
      "\\((\\frac{1}{2}, -2 \\log_e 2)\\)",
      "\\((\\frac{2}{1}, -2 \\log_e 2)\\)",
      "\\(-(\\frac{1}{2}, -2 \\log_e 2)\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Set the derivative equal to 4 and solve for x.",
    "solution": "The correct answer is \\((\\frac{1}{2}, -2 \\log_e 2)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Applications of differentiation: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y' = \\frac{2}{x}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\frac{2}{x} = 4\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(x = \\frac{1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (\\frac{1}{2}, -2 \\log_e 2). Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\((\\frac{1}{2}, -2 \\log_e 2)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5h-q10b-tan",
    "topicId": "y12a-5H",
    "c": "5H",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the equation of the tangent at this point in the form \\( y = mx + b \\).",
    "opts": [
      "\\(y = 4x + 2 + 2 \\log_e 2\\)",
      "\\(y = 4x - 2 - 2 \\log_e 2\\)",
      "\\(y = 4x - 2 - 2 \\log_e 2 + 1\\)",
      "\\(y = 4x - 4 - 4 \\log_e 4\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Use point-gradient form with m = 4.",
    "solution": "The correct answer is \\(y = 4x - 2 - 2 \\log_e 2\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Applications of differentiation: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y - (-2 \\log_e 2) = 4(x - \\frac{1}{2})\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(y = 4x - 2 - 2 \\log_e 2\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(y = 4x - 2 - 2 \\log_e 2\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y = 4x - 2 - 2 \\log_e 2. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(y = 4x - 2 - 2 \\log_e 2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5h-q10b-norm",
    "topicId": "y12a-5H",
    "c": "5H",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the equation of the normal at this point in the form \\( y = mx + b \\).",
    "opts": [
      "\\(-y = -\\frac{1}{4}x + \\frac{1}{8} - 2 \\log_e 2\\)",
      "\\(y = +\\frac{1}{4}x - \\frac{1}{8} + 2 \\log_e 2\\)",
      "\\(y = -\\frac{1}{4}x + \\frac{1}{8} - 2 \\log_e 2\\)",
      "\\(y = -\\frac{4}{1}x + \\frac{1}{8} - 2 \\log_e 2\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Use normal gradient m = -1/4.",
    "solution": "The correct answer is \\(y = -\\frac{1}{4}x + \\frac{1}{8} - 2 \\log_e 2\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Applications of differentiation: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(m_n = -\\frac{1}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(y - (-2 \\log_e 2) = -\\frac{1}{4}(x - \\frac{1}{2})\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(y = -\\frac{1}{4}x + \\frac{1}{8} - 2 \\log_e 2\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y = -\\frac{1}{4}x + \\frac{1}{8} - 2 \\log_e 2. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(y = -\\frac{1}{4}x + \\frac{1}{8} - 2 \\log_e 2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5h-q12a",
    "topicId": "y12a-5H",
    "c": "5H",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Consider the function \\(y = 2x - \\ln x\\).\n\nWrite down the natural domain.",
    "a": 2,
    "answer": "2",
    "opts": [
      "\\(x \\ge 0\\)",
      "\\(x \\neq 0\\)",
      "\\(x > 0\\)",
      "\\(x < 0\\)"
    ],
    "hint": "Differentiate carefully; evaluate at the given point when asked.",
    "solution": "The correct answer is \\(x > 0\\).",
    "solutionSteps": [
      {
        "explanation": "\\(\\ln x\\) requires \\(x > 0\\); the linear term does not restrict further.",
        "workingOut": "\\(x > 0\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(x > 0\\). Why this step? It isolates one clear rule or substitution so the next algebra stays reliable. A common slip is a sign error or wrong evaluation point — re-check before continuing.",
        "workingOut": "\\(x > 0\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5h-q12b1",
    "topicId": "y12a-5H",
    "c": "5H",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Consider the function \\(y = 2x - \\ln x\\).\n\nFind the first derivative \\(y'\\).",
    "a": 1,
    "answer": "1",
    "opts": [
      "\\(2 + \\dfrac{1}{x}\\)",
      "\\(2 - \\dfrac{1}{x}\\)",
      "\\(-2 - \\dfrac{1}{x}\\)",
      "\\(2 - x\\)"
    ],
    "hint": "Differentiate carefully; evaluate at the given point when asked.",
    "solution": "The correct answer is \\(2 - \\dfrac{1}{x}\\).",
    "solutionSteps": [
      {
        "explanation": "Differentiate term by term: \\(\\dfrac{d}{dx}(2x) = 2\\) and \\(\\dfrac{d}{dx}(-\\ln x) = -\\dfrac{1}{x}\\).",
        "workingOut": "\\(y' = 2 - \\dfrac{1}{x}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(2 - \\dfrac{1}{x}\\). Why this step? It isolates one clear rule or substitution so the next algebra stays reliable. A common slip is a sign error or wrong evaluation point — re-check before continuing.",
        "workingOut": "\\(2 - \\dfrac{1}{x}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5h-q12b2",
    "topicId": "y12a-5H",
    "c": "5H",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Consider the function \\(y = 2x - \\ln x\\).\n\nGiven \\(y' = 2 - \\dfrac{1}{x}\\), find \\(y''\\).",
    "a": 1,
    "answer": "1",
    "opts": [
      "\\(-\\dfrac{1}{x^{2}}\\)",
      "\\(\\dfrac{1}{x^{2}}\\)",
      "\\(\\dfrac{1}{x}\\)",
      "\\(2\\)"
    ],
    "hint": "Differentiate carefully; evaluate at the given point when asked.",
    "solution": "The correct answer is \\(\\dfrac{1}{x^{2}}\\).",
    "solutionSteps": [
      {
        "explanation": "\\(\\dfrac{d}{dx}\\big(2 - x^{-1}\\big) = x^{-2} = \\dfrac{1}{x^{2}}\\).",
        "workingOut": "\\(y'' = \\dfrac{1}{x^{2}}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\dfrac{1}{x^{2}}\\). Why this step? It isolates one clear rule or substitution so the next algebra stays reliable. A common slip is a sign error or wrong evaluation point — re-check before continuing.",
        "workingOut": "\\(\\dfrac{1}{x^{2}}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5h-q12c",
    "topicId": "y12a-5H",
    "c": "5H",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Consider the function \\(y = 2x - \\ln x\\).\n\nGiven \\(y'' = \\dfrac{1}{x^{2}}\\) and domain \\(x > 0\\), which statement correctly shows the curve is concave up on its domain?",
    "a": 0,
    "answer": "0",
    "opts": [
      "\\(y'' > 0\\) for all \\(x > 0\\), so the curve is concave up",
      "\\(y'' < 0\\) for all \\(x > 0\\), so the curve is concave down",
      "\\(y'' = 0\\) for all \\(x > 0\\)",
      "\\(y''\\) changes sign at \\(x = 1\\)"
    ],
    "hint": "Differentiate carefully; evaluate at the given point when asked.",
    "solution": "The correct answer is \\(y'' > 0\\) for all \\(x > 0\\), so the curve is concave up.",
    "solutionSteps": [
      {
        "explanation": "For every \\(x > 0\\), \\(x^{2} > 0\\), so \\(\\dfrac{1}{x^{2}} > 0\\).",
        "workingOut": "\\(y'' > 0\\)",
        "graphData": null
      },
      {
        "explanation": "Positive second derivative on the whole domain means the curve is concave up everywhere it is defined.",
        "workingOut": "\\(\\text{concave up}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5h-q12d",
    "topicId": "y12a-5H",
    "c": "5H",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 150,
    "question": "Consider the function \\(y = 2x - \\ln x\\).\n\nGiven \\(y' = 2 - \\dfrac{1}{x}\\), find the coordinates of the minimum turning point.",
    "a": 0,
    "answer": "0",
    "opts": [
      "\\(\\left(\\dfrac{1}{2},\\, 1 + \\ln 2\\right)\\)",
      "\\(\\left(\\dfrac{1}{2},\\, 1 - \\ln 2\\right)\\)",
      "\\(\\left(2,\\, 1 + \\ln 2\\right)\\)",
      "\\(\\left(\\dfrac{1}{2},\\, \\ln 2\\right)\\)"
    ],
    "hint": "Differentiate carefully; evaluate at the given point when asked.",
    "solution": "The correct answer is \\(\\left(\\dfrac{1}{2},\\, 1 + \\ln 2\\right)\\).",
    "solutionSteps": [
      {
        "explanation": "Set \\(y' = 0\\): \\(2 - \\dfrac{1}{x} = 0\\) so \\(x = \\dfrac{1}{2}\\).",
        "workingOut": "\\(x = \\dfrac{1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Then \\(y = 2\\cdot\\dfrac{1}{2} - \\ln\\dfrac{1}{2} = 1 - (-\\ln 2) = 1 + \\ln 2\\).",
        "workingOut": "\\(y = 1 + \\ln 2\\)",
        "graphData": null
      },
      {
        "explanation": "Since \\(y'' > 0\\), this stationary point is a minimum. Turning point: \\(\\left(\\dfrac{1}{2}, 1 + \\ln 2\\right)\\).",
        "workingOut": "\\(\\left(\\dfrac{1}{2}, 1 + \\ln 2\\right)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5h-q12e",
    "topicId": "y12a-5H",
    "c": "5H",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Consider the function \\(y = 2x - \\ln x\\).\n\nThe curve has an absolute minimum value of \\(1 + \\ln 2\\). What is its range?",
    "a": 0,
    "answer": "0",
    "opts": [
      "\\(y \\ge 1 + \\ln 2\\)",
      "\\(y > 1 + \\ln 2\\)",
      "\\(y \\ge 1 - \\ln 2\\)",
      "\\(y \\ge \\ln 2\\)"
    ],
    "hint": "Differentiate carefully; evaluate at the given point when asked.",
    "solution": "The correct answer is \\(y \\ge 1 + \\ln 2\\).",
    "solutionSteps": [
      {
        "explanation": "The curve is always concave up with a global minimum of \\(1 + \\ln 2\\).",
        "workingOut": "\\(\\text{global min }1+\\ln 2\\)",
        "graphData": null
      },
      {
        "explanation": "Therefore the range is \\(y \\ge 1 + \\ln 2\\). Why this step? It isolates one clear rule or substitution so the next algebra stays reliable. A common slip is a sign error or wrong evaluation point — re-check before continuing.",
        "workingOut": "\\(y \\ge 1 + \\ln 2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5h-q15a-dom",
    "topicId": "y12a-5H",
    "c": "5H",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Consider the curve \\(y = 2x\\ln x\\).\n\nWrite down the domain.",
    "a": 1,
    "answer": "1",
    "opts": [
      "\\(x \\ge 0\\)",
      "\\(x > 0\\)",
      "\\(x \\neq 0\\)",
      "\\(x < 0\\)"
    ],
    "hint": "Differentiate carefully; evaluate at the given point when asked.",
    "solution": "The correct answer is \\(x > 0\\).",
    "solutionSteps": [
      {
        "explanation": "\\(\\ln x\\) requires \\(x > 0\\). Why this step? It isolates one clear rule or substitution so the next algebra stays reliable. A common slip is a sign error or wrong evaluation point — re-check before continuing.",
        "workingOut": "\\(x > 0\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(x > 0\\). Why this step? It isolates one clear rule or substitution so the next algebra stays reliable. A common slip is a sign error or wrong evaluation point — re-check before continuing.",
        "workingOut": "\\(x > 0\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5h-q15a-int",
    "topicId": "y12a-5H",
    "c": "5H",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Consider the curve \\(y = 2x\\ln x\\).\n\nFind the \\(x\\)-intercept (where the curve meets the \\(x\\)-axis).",
    "a": 0,
    "answer": "0",
    "opts": [
      "\\(x = 1\\)",
      "\\(x = 0\\)",
      "\\(x = e\\)",
      "\\(x = \\dfrac{1}{e}\\)"
    ],
    "hint": "Differentiate carefully; evaluate at the given point when asked.",
    "solution": "The correct answer is \\(x = 1\\).",
    "solutionSteps": [
      {
        "explanation": "Set \\(y = 0\\): \\(2x\\ln x = 0\\). Since \\(x > 0\\), we need \\(\\ln x = 0\\).",
        "workingOut": "\\(2x\\ln x = 0\\)",
        "graphData": null
      },
      {
        "explanation": "So \\(x = 1\\). Why this step? It isolates one clear rule or substitution so the next algebra stays reliable. A common slip is a sign error or wrong evaluation point — re-check before continuing.",
        "workingOut": "\\(x = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(x = 1\\). Why this step? It isolates one clear rule or substitution so the next algebra stays reliable. A common slip is a sign error or wrong evaluation point — re-check before continuing.",
        "workingOut": "\\(x = 1\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5h-q15b",
    "topicId": "y12a-5H",
    "c": "5H",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Consider the curve \\(y = 2x\\ln x\\).\n\nGiven \\(y' = 2 + 2\\ln x\\), find \\(y''\\).",
    "a": 2,
    "answer": "2",
    "opts": [
      "\\(2\\)",
      "\\(\\dfrac{1}{x}\\)",
      "\\(\\dfrac{2}{x}\\)",
      "\\(2 + \\dfrac{2}{x}\\)"
    ],
    "hint": "Differentiate carefully; evaluate at the given point when asked.",
    "solution": "The correct answer is \\(\\dfrac{2}{x}\\).",
    "solutionSteps": [
      {
        "explanation": "\\(\\dfrac{d}{dx}(2 + 2\\ln x) = \\dfrac{2}{x}\\). Why this step? It isolates one clear rule or substitution so the next algebra stays reliable. A common slip is a sign error or wrong evaluation point — re-check before continuing.",
        "workingOut": "\\(y'' = \\dfrac{2}{x}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\dfrac{2}{x}\\). Why this step? It isolates one clear rule or substitution so the next algebra stays reliable. A common slip is a sign error or wrong evaluation point — re-check before continuing.",
        "workingOut": "\\(\\dfrac{2}{x}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5h-q15c",
    "topicId": "y12a-5H",
    "c": "5H",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 150,
    "question": "Consider the curve \\(y = 2x\\ln x\\).\n\nGiven \\(y' = 2 + 2\\ln x\\), find the coordinates of the stationary point.",
    "a": 0,
    "answer": "0",
    "opts": [
      "\\(\\left(\\dfrac{1}{e},\\, -\\dfrac{2}{e}\\right)\\)",
      "\\(\\left(e,\\, -\\dfrac{2}{e}\\right)\\)",
      "\\(\\left(\\dfrac{1}{e},\\, \\dfrac{2}{e}\\right)\\)",
      "\\((1, 0)\\)"
    ],
    "hint": "Differentiate carefully; evaluate at the given point when asked.",
    "solution": "The correct answer is \\(\\left(\\dfrac{1}{e},\\, -\\dfrac{2}{e}\\right)\\).",
    "solutionSteps": [
      {
        "explanation": "Set \\(y' = 0\\): \\(2 + 2\\ln x = 0\\) so \\(\\ln x = -1\\) and \\(x = e^{-1} = \\dfrac{1}{e}\\).",
        "workingOut": "\\(x = \\dfrac{1}{e}\\)",
        "graphData": null
      },
      {
        "explanation": "Then \\(y = 2\\cdot\\dfrac{1}{e}\\cdot\\ln\\dfrac{1}{e} = \\dfrac{2}{e}\\cdot(-1) = -\\dfrac{2}{e}\\).",
        "workingOut": "\\(y = -\\dfrac{2}{e}\\)",
        "graphData": null
      },
      {
        "explanation": "Stationary point: \\(\\left(\\dfrac{1}{e}, -\\dfrac{2}{e}\\right)\\).",
        "workingOut": "\\(\\left(\\dfrac{1}{e}, -\\dfrac{2}{e}\\right)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5h-q15c-nature",
    "topicId": "y12a-5H",
    "c": "5H",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Consider the curve \\(y = 2x\\ln x\\).\n\nAt the stationary point \\(x = \\dfrac{1}{e}\\), we have \\(y'' = \\dfrac{2}{x}\\). What is the nature of the stationary point?",
    "a": 1,
    "answer": "1",
    "opts": [
      "Maximum (since \\(y''\\left(\\dfrac{1}{e}\\right) < 0\\))",
      "Minimum (since \\(y''\\left(\\dfrac{1}{e}\\right) = 2e > 0\\))",
      "Point of inflection",
      "Neither max nor min"
    ],
    "hint": "Differentiate carefully; evaluate at the given point when asked.",
    "solution": "The correct answer is Minimum (since \\(y''\\left(\\dfrac{1}{e}\\right) = 2e > 0\\)).",
    "solutionSteps": [
      {
        "explanation": "\\(y''\\left(\\dfrac{1}{e}\\right) = 2e > 0\\). Why this step? It isolates one clear rule or substitution so the next algebra stays reliable. A common slip is a sign error or wrong evaluation point — re-check before continuing.",
        "workingOut": "\\(y'' = 2e > 0\\)",
        "graphData": null
      },
      {
        "explanation": "Positive second derivative means a local minimum. Why this step? It isolates one clear rule or substitution so the next algebra stays reliable. A common slip is a sign error or wrong evaluation point — re-check before continuing.",
        "workingOut": "\\(\\text{minimum}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5h-q15d",
    "topicId": "y12a-5H",
    "c": "5H",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Consider the curve \\(y = 2x\\ln x\\).\n\nThe curve has an absolute minimum value of \\(-\\dfrac{2}{e}\\). What is its range?",
    "a": 2,
    "answer": "2",
    "opts": [
      "\\(y > -\\dfrac{2}{e}\\)",
      "\\(y \\le -\\dfrac{2}{e}\\)",
      "\\(y \\ge -\\dfrac{2}{e}\\)",
      "\\(y \\ge 0\\)"
    ],
    "hint": "Differentiate carefully; evaluate at the given point when asked.",
    "solution": "The correct answer is \\(y \\ge -\\dfrac{2}{e}\\).",
    "solutionSteps": [
      {
        "explanation": "Global minimum value is \\(-\\dfrac{2}{e}\\) at \\(x = \\dfrac{1}{e}\\).",
        "workingOut": "\\(\\min = -\\dfrac{2}{e}\\)",
        "graphData": null
      },
      {
        "explanation": "Range: \\(y \\ge -\\dfrac{2}{e}\\). Why this step? It isolates one clear rule or substitution so the next algebra stays reliable. A common slip is a sign error or wrong evaluation point — re-check before continuing.",
        "workingOut": "\\(y \\ge -\\dfrac{2}{e}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5h-q16a-dom",
    "topicId": "y12a-5H",
    "c": "5H",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Consider the curve \\(y = 2x\\ln x - 2x\\).\n\nWrite down the domain.",
    "a": 1,
    "answer": "1",
    "opts": [
      "\\(x \\ge 0\\)",
      "\\(x > 0\\)",
      "\\(x \\neq 0\\)",
      "\\(x < 0\\)"
    ],
    "hint": "Differentiate carefully; evaluate at the given point when asked.",
    "solution": "The correct answer is \\(x > 0\\).",
    "solutionSteps": [
      {
        "explanation": "\\(\\ln x\\) requires \\(x > 0\\). Why this step? It isolates one clear rule or substitution so the next algebra stays reliable. A common slip is a sign error or wrong evaluation point — re-check before continuing.",
        "workingOut": "\\(x > 0\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(x > 0\\). Why this step? It isolates one clear rule or substitution so the next algebra stays reliable. A common slip is a sign error or wrong evaluation point — re-check before continuing.",
        "workingOut": "\\(x > 0\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5h-q16a-int",
    "topicId": "y12a-5H",
    "c": "5H",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Consider the curve \\(y = 2x\\ln x - 2x\\).\n\nFind the \\(x\\)-intercept.",
    "a": 1,
    "answer": "1",
    "opts": [
      "\\(x = 1\\)",
      "\\(x = e\\)",
      "\\(x = \\dfrac{1}{e}\\)",
      "\\(x = 0\\)"
    ],
    "hint": "Differentiate carefully; evaluate at the given point when asked.",
    "solution": "The correct answer is \\(x = e\\).",
    "solutionSteps": [
      {
        "explanation": "Set \\(y = 0\\): \\(2x(\\ln x - 1) = 0\\). With \\(x > 0\\), \\(\\ln x = 1\\).",
        "workingOut": "\\(2x(\\ln x - 1) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "So \\(x = e\\). Why this step? It isolates one clear rule or substitution so the next algebra stays reliable. A common slip is a sign error or wrong evaluation point — re-check before continuing.",
        "workingOut": "\\(x = e\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(x = e\\). Why this step? It isolates one clear rule or substitution so the next algebra stays reliable. A common slip is a sign error or wrong evaluation point — re-check before continuing.",
        "workingOut": "\\(x = e\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5h-q16b",
    "topicId": "y12a-5H",
    "c": "5H",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Consider the curve \\(y = 2x\\ln x - 2x\\).\n\nGiven \\(y' = 2\\ln x\\), find \\(y''\\).",
    "a": 2,
    "answer": "2",
    "opts": [
      "\\(2\\)",
      "\\(\\dfrac{1}{x}\\)",
      "\\(\\dfrac{2}{x}\\)",
      "\\(2\\ln x\\)"
    ],
    "hint": "Differentiate carefully; evaluate at the given point when asked.",
    "solution": "The correct answer is \\(\\dfrac{2}{x}\\).",
    "solutionSteps": [
      {
        "explanation": "\\(\\dfrac{d}{dx}(2\\ln x) = \\dfrac{2}{x}\\). Why this step? It isolates one clear rule or substitution so the next algebra stays reliable. A common slip is a sign error or wrong evaluation point — re-check before continuing.",
        "workingOut": "\\(y'' = \\dfrac{2}{x}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\dfrac{2}{x}\\). Why this step? It isolates one clear rule or substitution so the next algebra stays reliable. A common slip is a sign error or wrong evaluation point — re-check before continuing.",
        "workingOut": "\\(\\dfrac{2}{x}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5h-q16c",
    "topicId": "y12a-5H",
    "c": "5H",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Consider the curve \\(y = 2x\\ln x - 2x\\).\n\nGiven \\(y' = 2\\ln x\\), find the coordinates of the stationary point.",
    "a": 0,
    "answer": "0",
    "opts": [
      "\\((1, -2)\\)",
      "\\((e, -2)\\)",
      "\\((1, 0)\\)",
      "\\((1, 2)\\)"
    ],
    "hint": "Differentiate carefully; evaluate at the given point when asked.",
    "solution": "The correct answer is \\((1, -2)\\).",
    "solutionSteps": [
      {
        "explanation": "Set \\(y' = 0\\): \\(2\\ln x = 0\\) so \\(x = 1\\). Why this step? It isolates one clear rule or substitution so the next algebra stays reliable. A common slip is a sign error or wrong evaluation point — re-check before continuing.",
        "workingOut": "\\(x = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Then \\(y = 2(1)\\ln 1 - 2(1) = -2\\). Why this step? It isolates one clear rule or substitution so the next algebra stays reliable. A common slip is a sign error or wrong evaluation point — re-check before continuing.",
        "workingOut": "\\(y = -2\\)",
        "graphData": null
      },
      {
        "explanation": "Stationary point: \\((1, -2)\\). Why this step? It isolates one clear rule or substitution so the next algebra stays reliable. A common slip is a sign error or wrong evaluation point — re-check before continuing.",
        "workingOut": "\\((1,-2)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5h-q16c-nature",
    "topicId": "y12a-5H",
    "c": "5H",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Consider the curve \\(y = 2x\\ln x - 2x\\).\n\nAt the stationary point \\(x = 1\\), \\(y'' = \\dfrac{2}{x}\\). What is its nature?",
    "a": 1,
    "answer": "1",
    "opts": [
      "Maximum (since \\(y''(1) < 0\\))",
      "Minimum (since \\(y''(1) = 2 > 0\\))",
      "Point of inflection",
      "Neither"
    ],
    "hint": "Differentiate carefully; evaluate at the given point when asked.",
    "solution": "The correct answer is Minimum (since \\(y''(1) = 2 > 0\\)).",
    "solutionSteps": [
      {
        "explanation": "\\(y''(1) = 2 > 0\\), so the stationary point is a local minimum.",
        "workingOut": "\\(y''(1) = 2 > 0\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: minimum. Why this step? It isolates one clear rule or substitution so the next algebra stays reliable. A common slip is a sign error or wrong evaluation point — re-check before continuing.",
        "workingOut": "\\(\\text{minimum}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5h-q16e",
    "topicId": "y12a-5H",
    "c": "5H",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Consider the curve \\(y = 2x\\ln x - 2x\\).\n\nThe curve has an absolute minimum value of \\(-2\\). What is its range?",
    "a": 0,
    "answer": "0",
    "opts": [
      "\\(y \\ge -2\\)",
      "\\(y > -2\\)",
      "\\(y \\le -2\\)",
      "\\(y \\ge 0\\)"
    ],
    "hint": "Differentiate carefully; evaluate at the given point when asked.",
    "solution": "The correct answer is \\(y \\ge -2\\).",
    "solutionSteps": [
      {
        "explanation": "Global minimum is \\(-2\\) at \\(x = 1\\). Why this step? It isolates one clear rule or substitution so the next algebra stays reliable. A common slip is a sign error or wrong evaluation point — re-check before continuing.",
        "workingOut": "\\(\\min = -2\\)",
        "graphData": null
      },
      {
        "explanation": "Range: \\(y \\ge -2\\). Why this step? It isolates one clear rule or substitution so the next algebra stays reliable. A common slip is a sign error or wrong evaluation point — re-check before continuing.",
        "workingOut": "\\(y \\ge -2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5h-q17a",
    "topicId": "y12a-5H",
    "c": "5H",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Consider the curve \\(y = \\ln(4 + x^{2})\\).\n\nWrite down the domain.",
    "a": 0,
    "answer": "0",
    "opts": [
      "All real \\(x\\)",
      "\\(x > 0\\)",
      "\\(x \\ge 0\\)",
      "\\(|x| > 2\\)"
    ],
    "hint": "Differentiate carefully; evaluate at the given point when asked.",
    "solution": "The correct answer is All real \\(x\\).",
    "solutionSteps": [
      {
        "explanation": "Argument of log: \\(4 + x^{2} \\ge 4 > 0\\) for every real \\(x\\).",
        "workingOut": "\\(4 + x^{2} > 0\\)",
        "graphData": null
      },
      {
        "explanation": "Domain: all real \\(x\\). Why this step? It isolates one clear rule or substitution so the next algebra stays reliable. A common slip is a sign error or wrong evaluation point — re-check before continuing.",
        "workingOut": "\\(\\mathbb{R}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5h-q17b",
    "topicId": "y12a-5H",
    "c": "5H",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Consider the curve \\(y = \\ln(4 + x^{2})\\).\n\nIs the curve even, odd, or neither?",
    "a": 2,
    "answer": "2",
    "opts": [
      "Odd",
      "Neither",
      "Even",
      "Both even and odd"
    ],
    "hint": "Differentiate carefully; evaluate at the given point when asked.",
    "solution": "The correct answer is Even.",
    "solutionSteps": [
      {
        "explanation": "Check \\(y(-x)\\): \\(\\ln(4 + (-x)^{2}) = \\ln(4 + x^{2}) = y(x)\\).",
        "workingOut": "\\(y(-x) = y(x)\\)",
        "graphData": null
      },
      {
        "explanation": "So the function is even (symmetric about the \\(y\\)-axis).",
        "workingOut": "\\(\\text{even}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5h-q17d1",
    "topicId": "y12a-5H",
    "c": "5H",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Consider the curve \\(y = \\ln(4 + x^{2})\\).\n\nFind \\(y'\\).",
    "a": 2,
    "answer": "2",
    "opts": [
      "\\(\\dfrac{2x}{4 - x^{2}}\\)",
      "\\(\\dfrac{1}{4 + x^{2}}\\)",
      "\\(\\dfrac{2x}{4 + x^{2}}\\)",
      "\\(\\dfrac{2}{4 + x^{2}}\\)"
    ],
    "hint": "Differentiate carefully; evaluate at the given point when asked.",
    "solution": "The correct answer is \\(\\dfrac{2x}{4 + x^{2}}\\).",
    "solutionSteps": [
      {
        "explanation": "Chain rule: \\(\\dfrac{d}{dx}\\ln(4 + x^{2}) = \\dfrac{2x}{4 + x^{2}}\\).",
        "workingOut": "\\(y' = \\dfrac{2x}{4+x^{2}}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\dfrac{2x}{4 + x^{2}}\\). Why this step? It isolates one clear rule or substitution so the next algebra stays reliable. A common slip is a sign error or wrong evaluation point — re-check before continuing.",
        "workingOut": "\\(\\dfrac{2x}{4+x^{2}}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5h-q17d2",
    "topicId": "y12a-5H",
    "c": "5H",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 150,
    "question": "Consider the curve \\(y = \\ln(4 + x^{2})\\).\n\nGiven \\(y' = \\dfrac{2x}{4 + x^{2}}\\), find \\(y''\\).",
    "a": 3,
    "answer": "3",
    "opts": [
      "\\(\\dfrac{2(4 + x^{2})}{(4 + x^{2})^{2}}\\)",
      "\\(\\dfrac{2(x^{2} - 4)}{(4 + x^{2})^{2}}\\)",
      "\\(\\dfrac{2x}{(4 + x^{2})^{2}}\\)",
      "\\(\\dfrac{2(4 - x^{2})}{(4 + x^{2})^{2}}\\)"
    ],
    "hint": "Differentiate carefully; evaluate at the given point when asked.",
    "solution": "The correct answer is \\(\\dfrac{2(4 - x^{2})}{(4 + x^{2})^{2}}\\).",
    "solutionSteps": [
      {
        "explanation": "Quotient rule with \\(u = 2x\\), \\(v = 4 + x^{2}\\): Why this step? It isolates one clear rule or substitution so the next algebra stays reliable. A common slip is a sign error or wrong evaluation point — re-check before continuing.",
        "workingOut": "\\(y'' = \\dfrac{2(4+x^{2}) - 2x\\cdot 2x}{(4+x^{2})^{2}}\\)",
        "graphData": null
      },
      {
        "explanation": "Numerator: \\(8 + 2x^{2} - 4x^{2} = 8 - 2x^{2} = 2(4 - x^{2})\\).",
        "workingOut": "\\(y'' = \\dfrac{2(4-x^{2})}{(4+x^{2})^{2}}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\dfrac{2(4 - x^{2})}{(4 + x^{2})^{2}}\\).",
        "workingOut": "\\(\\dfrac{2(4-x^{2})}{(4+x^{2})^{2}}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5h-q17e",
    "topicId": "y12a-5H",
    "c": "5H",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Consider the curve \\(y = \\ln(4 + x^{2})\\).\n\nFind the coordinates of the stationary point.",
    "a": 0,
    "answer": "0",
    "opts": [
      "\\((0,\\, \\ln 4)\\)",
      "\\((0,\\, 0)\\)",
      "\\((2,\\, \\ln 8)\\)",
      "\\((0,\\, \\ln 2)\\)"
    ],
    "hint": "Differentiate carefully; evaluate at the given point when asked.",
    "solution": "The correct answer is \\((0,\\, \\ln 4)\\).",
    "solutionSteps": [
      {
        "explanation": "Set \\(y' = 0\\): \\(\\dfrac{2x}{4 + x^{2}} = 0\\) so \\(x = 0\\).",
        "workingOut": "\\(x = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Then \\(y = \\ln(4 + 0) = \\ln 4\\). Why this step? It isolates one clear rule or substitution so the next algebra stays reliable. A common slip is a sign error or wrong evaluation point — re-check before continuing.",
        "workingOut": "\\(y = \\ln 4\\)",
        "graphData": null
      },
      {
        "explanation": "Stationary point: \\((0, \\ln 4)\\). (It is a minimum since \\(y''(0) > 0\\).)",
        "workingOut": "\\((0,\\ln 4)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y12a-5h-q17f",
    "topicId": "y12a-5H",
    "c": "5H",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Consider the curve \\(y = \\ln(4 + x^{2})\\).\n\nGiven \\(y'' = \\dfrac{2(4 - x^{2})}{(4 + x^{2})^{2}}\\), find the \\(x\\)-coordinates of the points of inflection.",
    "a": 1,
    "answer": "1",
    "opts": [
      "\\(x = \\pm 4\\)",
      "\\(x = \\pm 2\\)",
      "\\(x = 0\\)",
      "\\(x = \\pm 1\\)"
    ],
    "hint": "Differentiate carefully; evaluate at the given point when asked.",
    "solution": "The correct answer is \\(x = \\pm 2\\).",
    "solutionSteps": [
      {
        "explanation": "Inflection candidates where \\(y'' = 0\\) and denominator \\(\\neq 0\\): \\(4 - x^{2} = 0\\).",
        "workingOut": "\\(4 - x^{2} = 0\\)",
        "graphData": null
      },
      {
        "explanation": "So \\(x = \\pm 2\\). (Sign of \\(y''\\) changes across these values.)",
        "workingOut": "\\(x = \\pm 2\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(x = \\pm 2\\). Why this step? It isolates one clear rule or substitution so the next algebra stays reliable. A common slip is a sign error or wrong evaluation point — re-check before continuing.",
        "workingOut": "\\(x = \\pm 2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  }
];
