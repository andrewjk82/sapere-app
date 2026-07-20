export const ABBOTSLEIGH_2020_QUESTIONS = [
  {
    "id": "abb2020-mc1",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(x = \\dfrac{\\pi}{6},\\ \\dfrac{5\\pi}{6}\\)",
      "\\(x = \\dfrac{\\pi}{3},\\ \\dfrac{2\\pi}{3}\\)",
      "\\(x = \\dfrac{\\pi}{4},\\ \\dfrac{3\\pi}{4}\\)",
      "\\(x = \\dfrac{\\pi}{2},\\ \\dfrac{3\\pi}{2}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is \\(x = \\dfrac{\\pi}{3},\\ \\dfrac{2\\pi}{3}\\).",
    "solutionSteps": [
      {
        "explanation": "Recall the exact value: \\(\\sin 60° = \\frac{\\sqrt{3}}{2}\\), which in radians is \\(\\sin\\frac{\\pi}{3} = \\frac{\\sqrt{3}}{2}\\).",
        "workingOut": "\\(\\sin^{-1}\\!\\left(\\frac{\\sqrt{3}}{2}\\right) = \\frac{\\pi}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "This reference angle \\(\\frac{\\pi}{3}\\) is the acute angle whose sine equals \\(\\frac{\\sqrt{3}}{2}\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(\\alpha = \\frac{\\pi}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Determine which quadrants have positive sine. Sine is positive in Quadrant I (angles between \\(0\\) and \\(\\frac{\\pi}{2}\\)) and Quadrant II (angles between \\(\\frac{\\pi}{2}\\) and \\(\\pi\\)).",
        "workingOut": "\\(\\sin x > 0 \\text{ in Q1 and Q2}\\)",
        "graphData": null
      },
      {
        "explanation": "Find the Q2 solution: subtract the reference angle from \\(\\pi\\) (since Q2 angles have the form \\(\\pi - \\alpha\\)).",
        "workingOut": "\\(x_2 = \\pi - \\frac{\\pi}{3} = \\frac{3\\pi}{3} - \\frac{\\pi}{3} = \\frac{2\\pi}{3}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020-mc2",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "A moderate negative correlation",
      "A moderate positive correlation",
      "A weak positive correlation",
      "A strong negative correlation"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is A moderate negative correlation.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Abbotsleigh 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\text{Direction: negative (downward trend)}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\text{Strength: moderate}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\text{Correlation} = \\text{moderate negative}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: A moderate negative correlation. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "A moderate negative correlation",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020-mc3",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(x < -\\dfrac{1}{6}\\)",
      "\\(x > 6\\)",
      "\\(x < -6\\)",
      "\\(x > -\\dfrac{1}{6}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(x < -\\dfrac{1}{6}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Abbotsleigh 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(f'(x) = 6x^2 + 2x\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(f''(x) = 12x + 2\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(f''(x) < 0 \\Rightarrow 12x + 2 < 0\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: x < -\\dfrac{1}{6}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(x < -\\dfrac{1}{6}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020-mc4",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(3\\)",
      "\\(\\pi\\)",
      "\\(2\\pi\\)",
      "\\(-3\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is \\(\\pi\\).",
    "solutionSteps": [
      {
        "explanation": "Write the function in standard form \\(y = A\\cos(bx + c) + d\\) and identify each parameter. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(y = -3\\cos\\!\\left(2x - \\frac{\\pi}{4}\\right): \\quad A = -3, b = 2, c = -\\frac{\\pi}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "The period formula for a cosine function is \\(T = \\frac{2\\pi}{b}\\), where \\(b\\) is the coefficient of \\(x\\).",
        "workingOut": "\\(T = \\frac{2\\pi}{|b|}\\)",
        "graphData": null
      },
      {
        "explanation": "Note: the negative amplitude and phase shift do not affect the period — only \\(b\\) matters. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(T = \\pi\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020-mc5",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(\\left[\\dfrac{1}{2}, 2\\right]\\)",
      "\\(\\left(\\dfrac{1}{2}, 2\\right)\\)",
      "\\(\\left(-\\infty,\\ \\dfrac{1}{2}\\right) \\cup (2, \\infty)\\)",
      "\\(\\left(-\\infty,\\ \\dfrac{1}{2}\\right] \\cup [2, \\infty)\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "",
    "solution": "The correct answer is \\(\\left(-\\infty,\\ \\dfrac{1}{2}\\right] \\cup [2, \\infty)\\).",
    "solutionSteps": [
      {
        "explanation": "Factor the quadratic \\(2x^2 - 5x + 2\\). We need two numbers that multiply to \\(2 \\times 2 = 4\\) and add to \\(-5\\). These are \\(-4\\) and \\(-1\\): split the middle term.",
        "workingOut": "\\(2x^2 - 4x - x + 2 = 2x(x-2) - 1(x-2) = (2x-1)(x-2)\\)",
        "graphData": null
      },
      {
        "explanation": "Since the coefficient of \\(x^2\\) is positive (\\(+2\\)), the parabola opens upward. This means the quadratic is positive (≥ 0) outside the two roots and negative between them.",
        "workingOut": "\\(\\text{Parabola opens up} \\Rightarrow \\geq 0 \\text{ when } x \\leq \\tfrac{1}{2} \\text{ or } x \\geq 2\\)",
        "graphData": null
      },
      {
        "explanation": "Verify with a sign diagram. Pick \\(x = 0\\) (between roots): \\(2(0)^2 - 5(0) + 2 = 2 > 0\\)? No, \\(2 > 0\\)… wait, \\(x=0\\) is left of \\(\\frac{1}{2}\\), outside the roots. Pick \\(x = 1\\) (between roots): \\(2 - 5 + 2 = -1 < 0\\) ✓.",
        "workingOut": "\\(x=1: (2(1)-1)(1-2) = (1)(-1) = -1 < 0 \\checkmark\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020-mc6",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(3x^3(4-x)^2(7x-16)\\)",
      "\\(3x^3(4-x)^2(16-7x)\\)",
      "\\(3x^3(4-x)^3(16-7x)\\)",
      "\\(3x^3(4-x)^3(7x-16)\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is \\(3x^3(4-x)^2(16-7x)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Abbotsleigh 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(u = 3x^4 \\qquad v = (4-x)^3\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(u' = 12x^3\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(v' = -3(4-x)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 3x^3(4-x)^2(16-7x). Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(3x^3(4-x)^2(16-7x)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020-mc7",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\((4, 2)\\)",
      "\\((4,\\ -2)\\)",
      "\\((1, 2)\\)",
      "\\((1,\\ -2)\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is \\((4,\\ -2)\\).",
    "solutionSteps": [
      {
        "explanation": "The original stationary point is at \\((2, -3)\\), meaning \\(f(2) = -3\\) and \\(f'(2) = 0\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\((x_0, y_0) = (2,\\ -3)\\)",
        "graphData": null
      },
      {
        "explanation": "The transformation \\(y = -f\\!\\left(\\frac{x}{2}\\right) - 5\\) involves three steps. First: replacing \\(x\\) with \\(\\frac{x}{2}\\) is a horizontal dilation by factor 2 — every \\(x\\)-coordinate doubles.",
        "workingOut": "\\(x_0 = 2 \\xrightarrow{\\times 2} x = 4\\)",
        "graphData": null
      },
      {
        "explanation": "Second: the negative sign in front of \\(f\\) reflects the graph in the \\(x\\)-axis — every \\(y\\)-coordinate is negated.",
        "workingOut": "\\(y_0 = -3 \\xrightarrow{\\text{negate}} y = -(-3) = 3\\)",
        "graphData": null
      },
      {
        "explanation": "Third: subtracting 5 shifts the graph down by 5 — subtract 5 from the \\(y\\)-coordinate. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(y = 3 - 5 = -2\\)",
        "graphData": null
      },
      {
        "explanation": "A stationary point remains stationary under these transformations (differentiability is preserved). The new stationary point is at \\((4, -2)\\).",
        "workingOut": "\\((4,\\ -2)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020-mc8",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(\\dfrac{63\\pi}{16}\\)",
      "\\(\\dfrac{7\\pi}{2}\\)",
      "\\(\\dfrac{977\\pi}{256}\\)",
      "\\(\\dfrac{63\\pi}{64}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(\\dfrac{63\\pi}{16}\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the first term \\(a\\) and common ratio \\(r\\). The first term is \\(a = 2\\pi\\). To find \\(r\\), divide the second term by the first.",
        "workingOut": "\\(r = \\frac{\\pi}{2\\pi} = \\frac{1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the ratio is consistent: \\(\\frac{\\pi/2}{\\pi} = \\frac{1}{2}\\) ✓. This is a geometric series with \\(a = 2\\pi\\), \\(r = \\frac{1}{2}\\), \\(n = 6\\).",
        "workingOut": "\\(a = 2\\pi, quad r = \\tfrac{1}{2}, quad n = 6\\)",
        "graphData": null
      },
      {
        "explanation": "Compute \\(\\left(\\frac{1}{2}\\right)^6 = \\frac{1}{64}\\), so \\(1 - \\frac{1}{64} = \\frac{63}{64}\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(\\left(\\tfrac{1}{2}\\right)^6 = \\frac{1}{64} \\Rightarrow 1 - \\frac{1}{64} = \\frac{63}{64}\\)",
        "graphData": null
      },
      {
        "explanation": "The denominator is \\(1 - \\frac{1}{2} = \\frac{1}{2}\\). Dividing by \\(\\frac{1}{2}\\) is the same as multiplying by 2.",
        "workingOut": "\\(S_6 = \\frac{2\\pi \\cdot \\frac{63}{64}}{\\frac{1}{2}} = 2\\pi \\cdot \\frac{63}{64} \\times 2 = \\frac{4\\pi \\cdot 63}{64} = \\frac{63\\pi}{16}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020-mc9",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(e^3 - 1\\)",
      "\\(e^3 + 2\\)",
      "\\(3e^2\\)",
      "\\(3e^3 - e^{-3} + 2\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is \\(e^3 + 2\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Abbotsleigh 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y = \\ln(x-1) \\Rightarrow e^y = x - 1 \\Rightarrow x = e^y + 1\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\text{Area} = \\int_0^3 (e^y + 1)\\,dy\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\int_0^3 (e^y + 1)\\,dy = \\left[e^y + y\\right]_0^3\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: e^3 + 2. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(e^3 + 2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020-mc10",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(\\dfrac{95}{105}\\)",
      "\\(\\dfrac{95}{200}\\)",
      "\\(\\dfrac{95}{165}\\)",
      "\\(\\dfrac{165}{200}\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "",
    "solution": "The correct answer is \\(\\dfrac{95}{165}\\).",
    "solutionSteps": [
      {
        "explanation": "Understand what is being asked: we want \\(P(\\text{true statement} \\mid \\text{test was accurate})\\). This is conditional probability — we already know the test was accurate (this restricts our sample space).",
        "workingOut": "\\(P(\\text{true} \\mid \\text{accurate}) = \\frac{P(\\text{true AND accurate})}{P(\\text{accurate})}\\)",
        "graphData": null
      },
      {
        "explanation": "From the data: there are 165 accurate tests in total. Of these, 95 were accurate AND true. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(n(\\text{accurate}) = 165 \\qquad n(\\text{true AND accurate}) = 95\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the conditional probability formula using counts (the total of 200 cancels). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(P(\\text{true} \\mid \\text{accurate}) = \\frac{95/200}{165/200} = \\frac{95}{165}\\)",
        "graphData": null
      },
      {
        "explanation": "This fraction can be simplified by dividing numerator and denominator by 5: \\(\\frac{95}{165} = \\frac{19}{33}\\).",
        "workingOut": "\\(\\frac{95}{165} = \\frac{19}{33} \\approx 0.576\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020-q11a",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(\\dfrac{1}{5}\\ln|5x+1| + C\\)",
      "\\(5\\ln|5x+1| + C\\)",
      "\\(\\ln|5x+1| + C\\)",
      "\\(\\dfrac{1}{(5x+1)^2} + C\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(\\dfrac{1}{5}\\ln|5x+1| + C\\).",
    "solutionSteps": [
      {
        "explanation": "Recognise this is an integral of the form \\(\\int \\frac{1}{ax+b}\\,dx\\). The standard result is \\(\\frac{1}{a}\\ln|ax+b| + C\\).",
        "workingOut": "\\(\\int \\frac{1}{ax+b}\\,dx = \\frac{1}{a}\\ln|ax+b| + C\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the formula: the coefficient in front of \\(\\ln\\) is \\(\\frac{1}{a} = \\frac{1}{5}\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(\\int \\frac{1}{5x+1}\\,dx = \\frac{1}{5}\\ln|5x+1| + C\\)",
        "graphData": null
      },
      {
        "explanation": "Verify by differentiating the answer using the chain rule: \\(\\frac{d}{dx}\\!\\left[\\frac{1}{5}\\ln|5x+1|\\right] = \\frac{1}{5} \\cdot \\frac{5}{5x+1} = \\frac{1}{5x+1}\\) ✓.",
        "workingOut": "\\(\\frac{d}{dx}\\left[\\frac{1}{5}\\ln|5x+1|\\right] = \\frac{1}{5x+1} \\checkmark\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020-q11bi",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(50%\\)",
      "\\(25%\\)",
      "\\(75%\\)",
      "\\(100%\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(50%\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Abbotsleigh 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\text{Median} \\Rightarrow 50\\% \\text{ below, } 50\\% \\text{ above}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(50\\%\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(50%\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 50%. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(50%\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020-q11bii",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(100\\)",
      "\\(140\\)",
      "\\(75\\)",
      "\\(120\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(100\\).",
    "solutionSteps": [
      {
        "explanation": "From the boxplot, 25% of Year 11 students are taller than 175 cm. Year 11 has 140 students. Calculate the number of Year 11 students above 175 cm.",
        "workingOut": "\\(25\\% \\times 140 = 0.25 \\times 140 = 35 \\text{ students}\\)",
        "graphData": null
      },
      {
        "explanation": "We are told the number of students taller than 175 cm is the same for both year groups. So Year 12 also has 35 students above 175 cm.",
        "workingOut": "\\(n_{\\text{Year 12, above 175}} = 35\\)",
        "graphData": null
      },
      {
        "explanation": "For Year 12, 35% of students are taller than 175 cm. Let \\(N\\) be the total number of Year 12 students. Then \\(35\\% \\times N = 35\\).",
        "workingOut": "\\(0.35 \\times N = 35\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020-q11c",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(r = \\dfrac{1}{3}\\)",
      "\\(r = \\dfrac{2}{3}\\)",
      "\\(r = \\dfrac{1}{2}\\)",
      "\\(r = \\dfrac{\\sqrt{2}}{3}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(r = \\dfrac{1}{3}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Abbotsleigh 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(S_\\infty = \\frac{a}{1-r}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\frac{\\sqrt{2}}{1-r} = \\frac{3\\sqrt{2}}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(2\\sqrt{2} = 3\\sqrt{2}(1-r)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: r = \\dfrac{1}{3}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(r = \\dfrac{1}{3}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020-q11d",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(4x^2 + \\dfrac{3}{x} + C\\)",
      "\\(4x^2 - \\dfrac{3}{x} + C\\)",
      "\\(8x - \\dfrac{3}{x^2} + C\\)",
      "\\(4x^2 + 3\\ln|x| + C\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(4x^2 + \\dfrac{3}{x} + C\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Abbotsleigh 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\frac{8x^3 - 3}{x^2} = \\frac{8x^3}{x^2} - \\frac{3}{x^2} = 8x - 3x^{-2}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\int(8x - 3x^{-2})\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\int 8x\\,dx = 4x^2\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 4x^2 + \\dfrac{3}{x} + C. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(4x^2 + \\dfrac{3}{x} + C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020-q11ei",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(3x^2 + 2\\)",
      "\\(3x^2 + 2x\\)",
      "\\(x^3 + 2x - 7\\)",
      "\\(3x^2 - 4x + 1\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(3x^2 + 2\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Abbotsleigh 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\frac{d^2y}{dx^2} = \\frac{d}{dx}(x^3 + 2x - 7)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(= 3x^2 + 2 + 0\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\frac{d^2y}{dx^2} = 3x^2 + 2\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 3x^2 + 2. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(3x^2 + 2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020-q11eii",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 180,
    "question": "",
    "answer": "Since \\(3x^2 \\geq 0\\) for all \\(x\\), we have \\(d^2y/dx^2 = 3x^2 + 2 \\geq 0 + 2 = 2\\).",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "Since \\(3x^2 \\geq 0\\) for all \\(x\\), we have \\(d^2y/dx^2 = 3x^2 + 2 \\geq 0 + 2 = 2\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Abbotsleigh 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\frac{d^2y}{dx^2} = 3x^2 + 2\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(x^2 \\geq 0 \\text{ for all } x \\in \\mathbb{R}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(3x^2 \\geq 0\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Since \\(3x^2 \\geq 0\\) for all \\(x\\), we have \\(d^2y/dx^2 = 3x^2 + 2 \\geq 0 + 2 = 2\\).. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(Since \\(3x^2 \\geq 0\\) for all \\(x\\), we have \\(d^2y/dx^2 = 3x^2 + 2 \\geq 0 + 2 = 2\\).\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "abb2020-q11eiii",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(y = \\dfrac{x^4}{4} + x^2 - 7x + 10\\)",
      "\\(y = \\dfrac{x^4}{4} + x^2 - 7x + 4\\)",
      "\\(y = \\dfrac{x^4}{4} + x^2 - 7x - 6\\)",
      "\\(y = \\dfrac{x^4}{4} + x^2 - 7x + C\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(y = \\dfrac{x^4}{4} + x^2 - 7x + 10\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Abbotsleigh 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y = \\int (x^3 + 2x - 7)\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(y = \\frac{x^4}{4} + x^2 - 7x + C\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(4 = \\frac{2^4}{4} + 2^2 - 7(2) + C\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y = \\dfrac{x^4}{4} + x^2 - 7x + 10. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(y = \\dfrac{x^4}{4} + x^2 - 7x + 10\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020-q11eiv",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(x + 5y - 22 = 0\\)",
      "\\(5x - y - 6 = 0\\)",
      "\\(x + 5y - 20 = 0\\)",
      "\\(x - 5y + 18 = 0\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(x + 5y - 22 = 0\\).",
    "solutionSteps": [
      {
        "explanation": "Find the gradient of the tangent at \\(x = 2\\) by substituting into \\(\\frac{dy}{dx} = x^3 + 2x - 7\\).",
        "workingOut": "\\(m_{\\text{tan}} = 2^3 + 2(2) - 7 = 8 + 4 - 7 = 5\\)",
        "graphData": null
      },
      {
        "explanation": "The gradient of the normal is the negative reciprocal of the tangent gradient. If the tangent has slope 5, the normal has slope \\(-\\frac{1}{5}\\).",
        "workingOut": "\\(m_{\\text{norm}} = -\\frac{1}{m_{\\text{tan}}} = -\\frac{1}{5}\\)",
        "graphData": null
      },
      {
        "explanation": "Use the point-gradient formula \\(y - y_1 = m(x - x_1)\\) with point \\(P(2, 4)\\) and \\(m = -\\frac{1}{5}\\).",
        "workingOut": "\\(y - 4 = -\\frac{1}{5}(x - 2)\\)",
        "graphData": null
      },
      {
        "explanation": "Rearrange into the form \\(ax + by + c = 0\\) by moving all terms to the left side. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(x + 5y - 20 - 2 = 0 \\Rightarrow x + 5y - 22 = 0\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020-q12ai",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "x\\)-intercept: \\((2, 0)\\); \\(y\\)-intercept: \\((0, -2)",
      "x\\)-intercept: \\((2, 0)\\); \\(y\\)-intercept: \\((0, 2)",
      "x\\)-intercept: \\((-2, 0)\\); \\(y\\)-intercept: \\((0, -2)",
      "\\(x\\)-intercepts: \\((2, 0)\\) and \\((\\pm i, 0)\\); \\(y\\)-intercept: \\((0, -2)\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is x\\)-intercept: \\((2, 0)\\); \\(y\\)-intercept: \\((0, -2).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Abbotsleigh 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\((x-2)(x^2+1) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(x - 2 = 0 \\Rightarrow x = 2 \\qquad x^2 + 1 = 0 \\text{ — no real solutions}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(x\\text{-intercept: } (2, 0)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: x\\)-intercept: \\((2, 0)\\); \\(y\\)-intercept: \\((0, -2). Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "x\\)-intercept: \\((2, 0)\\); \\(y\\)-intercept: \\((0, -2)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020-q12aii",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(Local max at \\(\\left(\\dfrac{1}{3},\\ -\\dfrac{50}{27}\\right)\\) and local min at \\((1,\\ -2)\\)\\)",
      "\\(Local min at \\(\\left(\\dfrac{1}{3},\\ -\\dfrac{50}{27}\\right)\\) and local max at \\((1,\\ -2)\\)\\)",
      "\\(Local max at \\(\\left(\\dfrac{1}{3},\\ \\dfrac{50}{27}\\right)\\) and local min at \\((1, 2)\\)\\)",
      "\\(Stationary points at \\(x = \\dfrac{1}{3}\\) and \\(x = 1\\), both are inflection points\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(Local max at \\(\\left(\\dfrac{1}{3},\\ -\\dfrac{50}{27}\\right)\\) and local min at \\((1,\\ -2)\\)\\).",
    "solutionSteps": [
      {
        "explanation": "Expand \\(h(x) = (x-2)(x^2+1)\\) by distributing: \\(x(x^2+1) - 2(x^2+1) = x^3 + x - 2x^2 - 2\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(h(x) = x^3 - 2x^2 + x - 2\\)",
        "graphData": null
      },
      {
        "explanation": "Set \\(h'(x) = 0\\) and factorise. Find two numbers that multiply to \\(3 \\times 1 = 3\\) and add to \\(-4\\): these are \\(-3\\) and \\(-1\\).",
        "workingOut": "\\(3x^2 - 4x + 1 = (3x-1)(x-1) = 0 \\Rightarrow x = \\frac{1}{3} \\text{ or } x = 1\\)",
        "graphData": null
      },
      {
        "explanation": "At \\(x = \\frac{1}{3}\\): \\(h''(\\frac{1}{3}) = 6(\\frac{1}{3}) - 4 = 2 - 4 = -2 < 0\\) → local maximum. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(h''\\!\\left(\\tfrac{1}{3}\\right) = -2 < 0 \\Rightarrow \\text{local maximum}\\)",
        "graphData": null
      },
      {
        "explanation": "Calculate the \\(y\\)-coordinates: \\(h\\!(\\frac{1}{3}) = (\\frac{1}{3}-2)((\\frac{1}{3})^2+1) = (-\\frac{5}{3})(\\frac{10}{9}) = -\\frac{50}{27}\\). And \\(h(1) = (1-2)(1+1) = (-1)(2) = -2\\).",
        "workingOut": "\\(h\\!\\left(\\tfrac{1}{3}\\right) = -\\tfrac{50}{27} \\qquad h(1) = -2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020-q12aiii",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "",
    "answer": "Sketch showing: \\(x\\)-intercept at \\((2, 0)\\), \\(y\\)-intercept at \\((0, -2)\\), local max at \\((\\frac{1}{3}, -\\frac{50}{27})\\), local min at \\((1, -2)\\).\nCubic shape rising to the right.",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "Sketch showing: \\(x\\)-intercept at \\((2, 0)\\), \\(y\\)-intercept at \\((0, -2)\\), local max at \\((\\frac{1}{3}, -\\frac{50}{27})\\), local min at \\((1, -2)\\).\nCubic shape rising to the right.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Abbotsleigh 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
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
        "workingOut": "Sketch showing: \\(x\\)-intercept at \\((2, 0)\\), \\(y\\)-intercept at \\((0, -2)\\), local max at \\((\\frac{1}{3}, -\\frac{50}{27})\\), local min at \\((1, -2)\\).\nCubic shape rising to the right.",
        "graphData": null
      },
      {
        "explanation": "Final answer: Sketch showing: \\(x\\)-intercept at \\((2, 0)\\), \\(y\\)-intercept at \\((0, -2)\\), local max at \\((\\frac{1}{3}, -\\frac{50}{27})\\), local min at \\((1, -2)\\).\nCubic shape rising to the right.. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "Sketch showing: \\(x\\)-intercept at \\((2, 0)\\), \\(y\\)-intercept at \\((0, -2)\\), local max at \\((\\frac{1}{3}, -\\frac{50}{27})\\), local min at \\((1, -2)\\).\nCubic shape rising to the right.",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "abb2020-q12b",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(\\dfrac{4}{\\sqrt{41}}\\)",
      "\\(\\dfrac{5}{\\sqrt{41}}\\)",
      "\\(\\dfrac{4}{5}\\)",
      "\\(\\dfrac{\\sqrt{41}}{4}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(\\dfrac{4}{\\sqrt{41}}\\).",
    "solutionSteps": [
      {
        "explanation": "Since \\(\\tan\\theta = \\frac{4}{5} = \\frac{\\text{opposite}}{\\text{adjacent}}\\), draw a right-angled triangle with opposite side = 4, adjacent side = 5.",
        "workingOut": "\\(\\text{opp} = 4, quad \\text{adj} = 5\\)",
        "graphData": null
      },
      {
        "explanation": "Find the hypotenuse using Pythagoras' theorem: \\(\\text{hyp}^2 = 4^2 + 5^2 = 16 + 25 = 41\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(\\text{hyp} = \\sqrt{41}\\)",
        "graphData": null
      },
      {
        "explanation": "This can also be written as \\(\\frac{4\\sqrt{41}}{41}\\) after rationalising the denominator. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(\\sin\\theta = \\frac{4}{\\sqrt{41}} = \\frac{4\\sqrt{41}}{41}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020-q12ci",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(200\\)",
      "\\(100\\)",
      "\\(300\\)",
      "\\(400\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(200\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Abbotsleigh 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\text{Break-even} \\Leftrightarrow R = C\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(x = 200 \\text{ face masks}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(200\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 200. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(200\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020-q12cii",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(350 face masks\\)",
      "\\(300 face masks\\)",
      "\\(400 face masks\\)",
      "\\(500 face masks\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(350 face masks\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Abbotsleigh 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(m_C = 10 \\Rightarrow C = 10x + 2000\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(m_R = 20 \\Rightarrow R = 20x\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\text{Profit} = R - C = 20x - (10x + 2000) = 10x - 2000\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 350 face masks. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(350 face masks\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020-q13a",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(\\dfrac{\\sqrt{3}}{2}\\)",
      "\\(\\dfrac{\\sqrt{3}}{4}\\)",
      "\\(\\sqrt{3}\\)",
      "\\(\\dfrac{1}{2}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(\\dfrac{\\sqrt{3}}{2}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Abbotsleigh 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\int \\sec^2 2x\\,dx = \\frac{1}{2}\\tan 2x + C\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\int_0^{\\pi/6} \\sec^2 2x\\,dx = \\left[\\frac{1}{2}\\tan 2x\\right]_0^{\\pi/6}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\frac{1}{2}\\tan\\!\\left(\\frac{\\pi}{3}\\right) = \\frac{1}{2} \\cdot \\sqrt{3} = \\frac{\\sqrt{3}}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\dfrac{\\sqrt{3}}{2}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\dfrac{\\sqrt{3}}{2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020-q13bi",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(\\dfrac{6x}{3x^2+1}\\)",
      "\\(\\dfrac{6x^2}{3x^2+1}\\)",
      "\\(\\dfrac{1}{3x^2+1}\\)",
      "\\(\\dfrac{6x}{(3x^2+1)^2}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(\\dfrac{6x}{3x^2+1}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Abbotsleigh 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y' = \\frac{\\frac{d}{dx}(3x^2+1)}{3x^2+1}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\frac{d}{dx}(3x^2+1) = 6x\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(y' = \\frac{6x}{3x^2+1}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\dfrac{6x}{3x^2+1}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\dfrac{6x}{3x^2+1}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020-q13bii",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(\\dfrac{x\\cos x - 2\\sin x}{x^3}\\)",
      "\\(\\dfrac{x\\cos x + 2\\sin x}{x^3}\\)",
      "\\(\\dfrac{\\cos x}{x^2}\\)",
      "\\(\\dfrac{x^2\\cos x - \\sin x}{x^4}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(\\dfrac{x\\cos x - 2\\sin x}{x^3}\\).",
    "solutionSteps": [
      {
        "explanation": "Apply the quotient rule \\(\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}\\). Identify \\(u = \\sin x\\) and \\(v = x^2\\).",
        "workingOut": "\\(u = \\sin x \\qquad v = x^2\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate \\(u\\): \\(\\frac{d}{dx}(\\sin x) = \\cos x\\). Differentiate \\(v\\): \\(\\frac{d}{dx}(x^2) = 2x\\).",
        "workingOut": "\\(u' = \\cos x \\qquad v' = 2x\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify by factoring \\(x\\) from the numerator and cancelling with the denominator. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(y' = \\frac{x(x\\cos x - 2\\sin x)}{x^4} = \\frac{x\\cos x - 2\\sin x}{x^3}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020-q13ci",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "",
    "answer": "Subtract the two functions: \\(p(x) - q(x) = (5-x)(5+x) - \\frac{2}{5}(5-x)(5+x) = \\frac{3}{5}(25-x^2)\\).\nBy symmetry about the \\(y\\)-axis: \\(A = 2\\int_0^5 \\frac{3}{5}(25-x^2)\\,dx = \\frac{6}{5}\\int_0^5(25-x^2)\\,dx\\).",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "Subtract the two functions: \\(p(x) - q(x) = (5-x)(5+x) - \\frac{2}{5}(5-x)(5+x) = \\frac{3}{5}(25-x^2)\\).\nBy symmetry about the \\(y\\)-axis: \\(A = 2\\int_0^5 \\frac{3}{5}(25-x^2)\\,dx = \\frac{6}{5}\\int_0^5(25-x^2)\\,dx\\).",
    "solutionSteps": [
      {
        "explanation": "The shaded area is between the two curves. The width of the region at any \\(x\\) is \\(p(x) - q(x)\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(p(x) - q(x) = (5-x)(5+x) - \\tfrac{2}{5}(5-x)(5+x)\\)",
        "graphData": null
      },
      {
        "explanation": "Both \\(p(x)\\) and \\(q(x)\\) are even functions (symmetric about the \\(y\\)-axis), so the region is symmetric. Integrate from \\(0\\) to \\(5\\) then double.",
        "workingOut": "\\(A = 2\\int_0^5 \\tfrac{3}{5}(25-x^2)\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Pull the constant \\(\\frac{3}{5}\\) outside and combine with the factor of 2 to get \\(\\frac{6}{5}\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(A = \\frac{6}{5}\\int_0^5(25-x^2)\\,dx \\qquad \\square\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "abb2020-q13cii",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(100 square units\\)",
      "\\(\\(\\dfrac{250}{3}\\) square units\\)",
      "\\(80 square units\\)",
      "\\(120 square units\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(100 square units\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Abbotsleigh 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\int_0^5(25-x^2)\\,dx = \\left[25x - \\frac{x^3}{3}\\right]_0^5\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(125 - \\frac{125}{3} = \\frac{375}{3} - \\frac{125}{3} = \\frac{250}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\left[\\cdots\\right]_0^5 = \\frac{250}{3} - 0 = \\frac{250}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 100 square units. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(100 square units\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020-q13d",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(\\dfrac{3}{28}\\)",
      "\\(\\dfrac{3}{4}\\)",
      "\\(\\dfrac{1}{7}\\)",
      "\\(\\dfrac{4}{21}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(\\dfrac{3}{28}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Abbotsleigh 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(P(A \\cap B) = P(A \\mid B) \\times P(B)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(P(A \\cap B) = \\frac{3}{4} \\times \\frac{1}{7}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(P(A \\cap B) = \\frac{3}{28}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\dfrac{3}{28}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\dfrac{3}{28}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020-q13ei",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(r \\approx 0.9936\\)",
      "\\(r \\approx 0.9814\\)",
      "\\(r \\approx 0.9999\\)",
      "\\(r \\approx 0.9567\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(r \\approx 0.9936\\).",
    "solutionSteps": [
      {
        "explanation": "Enter the \\(t\\) values (years) and \\(H\\) values (heights) into a calculator or spreadsheet as two lists.",
        "workingOut": "t: 1, 2, 3, 4, 6, 7, 8, 9",
        "graphData": null
      },
      {
        "explanation": "Use the statistics or linear regression function on the calculator to compute Pearson's correlation coefficient \\(r\\).",
        "workingOut": "\\(r = \\text{CORR}(t, H)\\)",
        "graphData": null
      },
      {
        "explanation": "Since \\(r\\) is very close to 1, this indicates a very strong positive linear relationship between years since planting and tree height.",
        "workingOut": "\\(r \\approx 0.9936 \\approx 1 \\Rightarrow \\text{very strong positive linear correlation}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020-q13eii",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(H = -0.94 + 1.17t\\)",
      "\\(H = 0.94 + 1.17t\\)",
      "\\(H = -0.94 + 0.17t\\)",
      "\\(H = 1.17 - 0.94t\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(H = -0.94 + 1.17t\\).",
    "solutionSteps": [
      {
        "explanation": "With the data already entered in the calculator, run the linear regression (LinReg) function. This finds the line \\(H = A + Bt\\) that best fits the data by minimising the sum of squared residuals.",
        "workingOut": "\\(\\text{LinReg}(t, H) \\to A, B\\)",
        "graphData": null
      },
      {
        "explanation": "The calculator returns the \\(y\\)-intercept \\(A \\approx -0.94\\) (to 2 decimal places). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(A \\approx -0.94\\)",
        "graphData": null
      },
      {
        "explanation": "The calculator returns the slope \\(B \\approx 1.17\\) (to 2 decimal places). This means the tree grows approximately 1.17 m per year on average.",
        "workingOut": "\\(B \\approx 1.17\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020-q13eiii",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(17.9 years\\)",
      "\\(15.2 years\\)",
      "\\(18.5 years\\)",
      "\\(20.0 years\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(17.9 years\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Abbotsleigh 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(20 = -0.94 + 1.17t\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(20 + 0.94 = 1.17t \\Rightarrow 20.94 = 1.17t\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(t = \\frac{20.94}{1.17} \\approx 17.9 \\text{ years}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 17.9 years. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(17.9 years\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020-q13eiv",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 180,
    "question": "",
    "answer": "As \\(t\\) increases, tree growth may not continue in a linear fashion (e.g., growth slows as the tree matures), so the model is unreliable for long-term extrapolation.",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "As \\(t\\) increases, tree growth may not continue in a linear fashion (e.g., growth slows as the tree matures), so the model is unreliable for long-term extrapolation.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Abbotsleigh 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
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
        "workingOut": "As \\(t\\) increases, tree growth may not continue in a linear fashion (e.g., growth slows as the tree matures), so the model is unreliable for long-term extrapolation.",
        "graphData": null
      },
      {
        "explanation": "Final answer: As \\(t\\) increases, tree growth may not continue in a linear fashion (e.g., growth slows as the tree matures), so the model is unreliable for long-term extrapolation.. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "As \\(t\\) increases, tree growth may not continue in a linear fashion (e.g., growth slows as the tree matures), so the model is unreliable for long-term extrapolation.",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "abb2020-q14a",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(0.8775\\)",
      "\\(0.6500\\)",
      "\\(0.7225\\)",
      "\\(0.9975\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(0.8775\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Abbotsleigh 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(P(\\text{no booking}) = 1 - 0.65 = 0.35\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(P(\\text{no booking in either weekend}) = 0.35^2 = 0.1225\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(P(\\text{at least one}) = 1 - P(\\text{none}) = 1 - 0.1225\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 0.8775. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(0.8775\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020-q14b",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "Centre \\((2, -3)\\), radius \\(5\\)",
      "Centre \\((-2, 3)\\), radius \\(5\\)",
      "Centre \\((2, -3)\\), radius \\(25\\)",
      "Centre \\((2, 3)\\), radius \\(5\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is Centre \\((2, -3)\\), radius \\(5\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Abbotsleigh 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\((x^2 - 4x) + (y^2 + 6y) = 12\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\((x^2 - 4x + 4) + \\ldots = 12 + 4\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\ldots + (y^2 + 6y + 9) = 12 + 4 + 9 = 25\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Centre \\((2, -3)\\), radius \\(5\\). Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "Centre \\((2, -3)\\), radius \\(5\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020-q14c",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(p = \\dfrac{7}{12}\\),\\ \\(E(X) = 5\\),\\ \\(\\text{Var}(X) = \\dfrac{5}{3}\\)",
      "\\(p = \\dfrac{5}{12}\\),\\ \\(E(X) = 5\\),\\ \\(\\text{Var}(X) = \\dfrac{5}{3}\\)",
      "\\(p = \\dfrac{7}{12}\\),\\ \\(E(X) = 4\\),\\ \\(\\text{Var}(X) = \\dfrac{5}{3}\\)",
      "\\(p = \\dfrac{7}{12}\\),\\ \\(E(X) = 5\\),\\ \\(\\text{Var}(X) = \\dfrac{2}{3}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(p = \\dfrac{7}{12}\\),\\ \\(E(X) = 5\\),\\ \\(\\text{Var}(X) = \\dfrac{5}{3}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Abbotsleigh 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\frac{1}{12} + \\frac{1}{3} + p = 1 \\Rightarrow \\frac{1}{12} + \\frac{4}{12} + p = 1 \\Rightarrow p = 1 - \\frac{5}{12} = \\frac{7}{12}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(E(X) = 2 \\cdot \\frac{1}{12} + 4 \\cdot \\frac{4}{12} + 6 \\cdot \\frac{7}{12} = \\frac{2 + 16 + 42}{12} = \\frac{60}{12} = 5\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(E(X^2) = 4 \\cdot \\frac{1}{12} + 16 \\cdot \\frac{4}{12} + 36 \\cdot \\frac{7}{12} = \\frac{4 + 64 + 252}{12} = \\frac{320}{12} = \\frac{80}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: p = \\dfrac{7}{12}\\),\\ \\(E(X) = 5\\),\\ \\(\\text{Var}(X) = \\dfrac{5}{3}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(p = \\dfrac{7}{12}\\),\\ \\(E(X) = 5\\),\\ \\(\\text{Var}(X) = \\dfrac{5}{3}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020-q14di",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(\\(21 - 4\\ln 3\\) metres\\)",
      "\\(\\(21 - 4\\ln 4\\) metres\\)",
      "\\(\\(16 - 4\\ln 3\\) metres\\)",
      "\\(\\(21 + 4\\ln 3\\) metres\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(\\(21 - 4\\ln 3\\) metres\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Abbotsleigh 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(x = (4)^2 - 4\\ln(4-1) + 5\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(x = 16 - 4\\ln 3 + 5\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(x = 21 - 4\\ln 3 \\text{ metres}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(21 - 4\\ln 3\\) metres. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\(21 - 4\\ln 3\\) metres\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020-q14dii",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(\\(v = 2t - \\dfrac{4}{t-1}\\); particle comes to rest at \\(t = 2\\) s\\)",
      "\\(\\(v = 2t - \\dfrac{4}{t-1}\\); particle comes to rest at \\(t = 3\\) s\\)",
      "\\(\\(v = 2t + \\dfrac{4}{t-1}\\); particle comes to rest at \\(t = 2\\) s\\)",
      "\\(\\(v = 2 - \\dfrac{4}{(t-1)^2}\\); particle never comes to rest\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(\\(v = 2t - \\dfrac{4}{t-1}\\); particle comes to rest at \\(t = 2\\) s\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Abbotsleigh 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(v = \\frac{dx}{dt} = 2t - \\frac{4}{t-1}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(2t - \\frac{4}{t-1} = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(2t(t-1) = 4\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(v = 2t - \\dfrac{4}{t-1}\\); particle comes to rest at \\(t = 2\\) s. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\(v = 2t - \\dfrac{4}{t-1}\\); particle comes to rest at \\(t = 2\\) s\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020-q14diii",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "",
    "answer": "\\(a = 2 + \\dfrac{4}{(t-1)^2}\\).\nSince \\((t-1)^2 > 0\\) for all \\(t \\neq 1\\), we have \\(a > 2 > 0\\) for all \\(t > 1\\).",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "\\(a = 2 + \\dfrac{4}{(t-1)^2}\\).\nSince \\((t-1)^2 > 0\\) for all \\(t \\neq 1\\), we have \\(a > 2 > 0\\) for all \\(t > 1\\).",
    "solutionSteps": [
      {
        "explanation": "Differentiate \\(v = 2t - \\frac{4}{t-1} = 2t - 4(t-1)^{-1}\\) with respect to \\(t\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(a = \\frac{dv}{dt} = 2 - 4 \\cdot (-1)(t-1)^{-2} \\cdot 1\\)",
        "graphData": null
      },
      {
        "explanation": "For all \\(t > 1\\), we have \\(t - 1 > 0\\), so \\((t-1)^2 > 0\\). Therefore \\(\\frac{4}{(t-1)^2} > 0\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(t > 1 \\Rightarrow (t-1)^2 > 0 \\Rightarrow \\frac{4}{(t-1)^2} > 0\\)",
        "graphData": null
      },
      {
        "explanation": "Since both terms are positive: \\(a = 2 + \\frac{4}{(t-1)^2} > 2 > 0\\) for all \\(t > 1\\). \\(\\square\\) Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(a > 2 > 0 \\text{ for all } t > 1\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "abb2020-q14div",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(\\(12 - 4\\ln 3\\) metres\\)",
      "\\(\\(12 + 4\\ln 3\\) metres\\)",
      "\\(\\(21 - 4\\ln 3\\) metres\\)",
      "\\(\\(12 - 4\\ln 2\\) metres\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(\\(12 - 4\\ln 3\\) metres\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Abbotsleigh 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\text{distance} = |x(4) - x(2)|\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(x(2) = 4 - 4\\ln(2-1) + 5 = 4 - 4\\ln 1 + 5\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(x(2) = 9 \\text{ m}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(12 - 4\\ln 3\\) metres. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\(12 - 4\\ln 3\\) metres\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020-q15ai",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "",
    "answer": "\\(y' = -2xe^{-x^2}\\).\n\\(y'' = -2e^{-x^2} + (-2x)(-2x)e^{-x^2} = e^{-x^2}(-2 + 4x^2) = 4e^{-x^2}(x^2 - \\frac{1}{2})\\).",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "\\(y' = -2xe^{-x^2}\\).\n\\(y'' = -2e^{-x^2} + (-2x)(-2x)e^{-x^2} = e^{-x^2}(-2 + 4x^2) = 4e^{-x^2}(x^2 - \\frac{1}{2})\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Abbotsleigh 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y' = -2xe^{-x^2}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(u = -2x, u' = -2 \\qquad v = e^{-x^2}, v' = -2xe^{-x^2}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(y'' = (-2)e^{-x^2} + (-2x)(-2x)e^{-x^2} = -2e^{-x^2} + 4x^2e^{-x^2}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(y' = -2xe^{-x^2}\\).\n\\(y'' = -2e^{-x^2} + (-2x)(-2x)e^{-x^2} = e^{-x^2}(-2 + 4x^2) = 4e^{-x^2}(x^2 - \\frac{1}{2})\\).. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\(y' = -2xe^{-x^2}\\).\n\\(y'' = -2e^{-x^2} + (-2x)(-2x)e^{-x^2} = e^{-x^2}(-2 + 4x^2) = 4e^{-x^2}(x^2 - \\frac{1}{2})\\).\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "abb2020-q15aii",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(\\left(\\pm\\dfrac{1}{\\sqrt{2}}, e^{-1/2}\\right)\\)",
      "\\(\\left(\\pm\\dfrac{1}{\\sqrt{2}}, e^{1/2}\\right)\\)",
      "\\(\\left(\\pm\\dfrac{1}{2}, e^{-1/4}\\right)\\)",
      "\\(\\left(\\pm 1, e^{-1}\\right)\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(\\left(\\pm\\dfrac{1}{\\sqrt{2}}, e^{-1/2}\\right)\\).",
    "solutionSteps": [
      {
        "explanation": "Points of inflection occur where \\(y'' = 0\\) (and the concavity changes). From part (i), \\(y'' = 4e^{-x^2}\\!(x^2 - \\frac{1}{2})\\).",
        "workingOut": "\\(4e^{-x^2}\\!\\left(x^2 - \\frac{1}{2}\\right) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Since \\(e^{-x^2} > 0\\) for all \\(x\\), we only need to solve \\(x^2 - \\frac{1}{2} = 0\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(x^2 = \\frac{1}{2} \\Rightarrow x = \\pm\\frac{1}{\\sqrt{2}}\\)",
        "graphData": null
      },
      {
        "explanation": "Find the \\(y\\)-coordinate at each point by substituting into \\(y = e^{-x^2}\\): \\(y = e^{-(1/\\sqrt{2})^2} = e^{-1/2}\\).",
        "workingOut": "\\(y = e^{-1/2} = \\frac{1}{\\sqrt{e}}\\)",
        "graphData": null
      },
      {
        "explanation": "Verify the concavity changes at each point (left of \\(-\\frac{1}{\\sqrt{2}}\\): concave up; between: concave down; right of \\(\\frac{1}{\\sqrt{2}}\\): concave up), confirming these are true inflection points.",
        "workingOut": "\\(\\left(\\pm\\dfrac{1}{\\sqrt{2}}, e^{-1/2}\\right)\\)",
        "graphData": null
      },
      {
        "explanation": "The two points of inflection are at \\(\\left(-\\frac{1}{\\sqrt{2}}, e^{-1/2}\\right)\\) and \\(\\left(\\frac{1}{\\sqrt{2}}, e^{-1/2}\\right)\\).",
        "workingOut": "\\(\\left(\\pm\\tfrac{1}{\\sqrt{2}}, e^{-1/2}\\right)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020-q15aiii",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 180,
    "question": "",
    "answer": "The integrand \\(e^{-x^2}\\) cannot be expressed as \\(e^{ax+b}\\) (since the exponent \\(-x^2\\) is not linear).\nNo standard antiderivative formula on the Reference Sheet covers \\(\\int e^{-x^2}\\,dx\\).",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "The integrand \\(e^{-x^2}\\) cannot be expressed as \\(e^{ax+b}\\) (since the exponent \\(-x^2\\) is not linear).\nNo standard antiderivative formula on the Reference Sheet covers \\(\\int e^{-x^2}\\,dx\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Abbotsleigh 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
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
        "workingOut": "\\(The integrand \\(e^{-x^2}\\) cannot be expressed as \\(e^{ax+b}\\) (since the exponent \\(-x^2\\) is not linear).\nNo standard antiderivative formula on the Reference Sheet covers \\(\\int e^{-x^2}\\,dx\\).\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: The integrand \\(e^{-x^2}\\) cannot be expressed as \\(e^{ax+b}\\) (since the exponent \\(-x^2\\) is not linear).\nNo standard antiderivative formula on the Reference Sheet covers \\(\\int e^{-x^2}\\,dx\\).. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(The integrand \\(e^{-x^2}\\) cannot be expressed as \\(e^{ax+b}\\) (since the exponent \\(-x^2\\) is not linear).\nNo standard antiderivative formula on the Reference Sheet covers \\(\\int e^{-x^2}\\,dx\\).\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "abb2020-q15aiv",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "",
    "answer": "Three values at \\(x = -\\frac{1}{\\sqrt{2}}, 0, \\frac{1}{\\sqrt{2}}\\): \\(f(B) = e^{-1/2} = \\frac{1}{\\sqrt{e}}\\), \\(f(0) = 1\\), \\(f(C) = e^{-1/2}\\).\nWidth \\(h = \\frac{1}{\\sqrt{2}}\\).\nTrap rule: \\(\\frac{h}{2}[f(B)+2f(0)+f(C)] = \\frac{1}{2\\sqrt{2}}\\left[\\frac{1}{\\sqrt{e}} + 2 + \\frac{1}{\\sqrt{e}}\\right] = \\frac{1}{2\\sqrt{2}} \\cdot \\frac{2}{\\sqrt{e}} + \\frac{1}{\\sqrt{2}} = \\frac{1}{\\sqrt{2}e^{1/2}} + \\frac{1}{\\sqrt{2}}\\).",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "Three values at \\(x = -\\frac{1}{\\sqrt{2}}, 0, \\frac{1}{\\sqrt{2}}\\): \\(f(B) = e^{-1/2} = \\frac{1}{\\sqrt{e}}\\), \\(f(0) = 1\\), \\(f(C) = e^{-1/2}\\).\nWidth \\(h = \\frac{1}{\\sqrt{2}}\\).\nTrap rule: \\(\\frac{h}{2}[f(B)+2f(0)+f(C)] = \\frac{1}{2\\sqrt{2}}\\left[\\frac{1}{\\sqrt{e}} + 2 + \\frac{1}{\\sqrt{e}}\\right] = \\frac{1}{2\\sqrt{2}} \\cdot \\frac{2}{\\sqrt{e}} + \\frac{1}{\\sqrt{2}} = \\frac{1}{\\sqrt{2}e^{1/2}} + \\frac{1}{\\sqrt{2}}\\).",
    "solutionSteps": [
      {
        "explanation": "The three \\(x\\)-values are the endpoints and midpoint: \\(x_0 = -\\frac{1}{\\sqrt{2}}\\), \\(x_1 = 0\\), \\(x_2 = \\frac{1}{\\sqrt{2}}\\). The step size is \\(h = \\frac{1}{\\sqrt{2}} - 0 = \\frac{1}{\\sqrt{2}}\\).",
        "workingOut": "\\(h = \\frac{1}{\\sqrt{2}}\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the function at each point. At \\(x_0 = -\\frac{1}{\\sqrt{2}}\\): \\(f = e^{-(1/\\sqrt{2})^2} = e^{-1/2}\\). At \\(x_1 = 0\\): \\(f = e^0 = 1\\). At \\(x_2 = \\frac{1}{\\sqrt{2}}\\): \\(f = e^{-1/2}\\).",
        "workingOut": "y_0 = e^{-1/2}, quad y_1 = 1, quad y_2 = e^{-1/2}",
        "graphData": null
      },
      {
        "explanation": "Apply the trapezoidal rule with 2 subintervals: \\(\\int \\approx \\frac{h}{2}[y_0 + 2y_1 + y_2]\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(\\approx \\frac{1/\\sqrt{2}}{2}\\!\\left[e^{-1/2} + 2(1) + e^{-1/2}\\right] = \\frac{1}{2\\sqrt{2}}\\!\\left[\\frac{2}{\\sqrt{e}} + 2\\right]\\)",
        "graphData": null
      },
      {
        "explanation": "Write \\(\\frac{1}{\\sqrt{2}\\, sqrt{e}} = \\frac{1}{\\sqrt{2}\\,e^{1/2}} = \\frac{1}{\\sqrt{2}\\,e}\\) (using \\(\\sqrt{e} \\equiv e^{1/2}\\)). The approximation equals \\(\\frac{1}{\\sqrt{2}} + \\frac{1}{\\sqrt{2}\\,e}\\). \\(\\square\\).",
        "workingOut": "\\(\\approx \\frac{1}{\\sqrt{2}} + \\frac{1}{\\sqrt{2}\\,e}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "abb2020-q15av",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "The graph is concave up, so trapeziums overestimate",
      "Trapezoidal rule always overestimates every integral",
      "On this interval the graph is concave down, so trapeziums lie under the curve and underestimate the integral",
      "The rule is exact for all exponential functions"
    ],
    "a": 2,
    "answer": "2",
    "hint": "",
    "solution": "The correct answer is On this interval the graph is concave down, so trapeziums lie under the curve and underestimate the integral.",
    "solutionSteps": [
      {
        "explanation": "Whether a trapezoidal estimate is high or low depends on concavity: a chord sits above a concave-up graph (overestimate) and below a concave-down graph (underestimate).",
        "workingOut": "\\(\\text{concavity} \\Rightarrow \\text{over/under estimate}\\)",
        "graphData": null
      },
      {
        "explanation": "For \\(y=e^{-x^2}\\), differentiate twice: \\(y'=-2xe^{-x^2}\\) and \\(y''=e^{-x^2}(4x^2-2)=2e^{-x^2}(2x^2-1)\\). Inflection points where \\(y''=0\\):.",
        "workingOut": "\\(2x^2-1=0 \\implies x=\\pm\\dfrac{1}{\\sqrt{2}}\\)",
        "graphData": null
      },
      {
        "explanation": "On the open interval between the inflection points, \\(|x|<\\dfrac{1}{\\sqrt{2}}\\), so \\(2x^2-1<0\\). Since \\(e^{-x^2}>0\\), we have \\(y''<0\\): the graph is concave down on the whole integration interval.",
        "workingOut": "\\(y''<0 \\text{ on }\\left[-\\dfrac{1}{\\sqrt{2}},\\dfrac{1}{\\sqrt{2}}\\right]\\)",
        "graphData": null
      },
      {
        "explanation": "Therefore each trapezium (chord) lies under the curve, so the trapezoidal rule underestimates the true integral. That is why the true value is greater than the three-point estimate.",
        "workingOut": "\\(\\displaystyle\\int_{-\\frac{1}{\\sqrt{2}}}^{\\frac{1}{\\sqrt{2}}} e^{-x^2}\\,dx > \\text{trap. estimate}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020-q15b",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(4 solutions\\)",
      "\\(2 solutions\\)",
      "\\(3 solutions\\)",
      "\\(6 solutions\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(4 solutions\\).",
    "solutionSteps": [
      {
        "explanation": "Rearrange the equation so each side is a function: the number of solutions equals the number of intersections of \\(y = 3\\sin x\\) and \\(y = \\frac{x^2}{5} - 3\\).",
        "workingOut": "\\(y_1 = 3\\sin x \\quad \\text{and} \\quad y_2 = \\frac{x^2}{5} - 3\\)",
        "graphData": null
      },
      {
        "explanation": "Analyse \\(y_1 = 3\\sin x\\): this is a sine wave with amplitude 3 and period \\(2\\pi \\approx 6.28\\), oscillating between \\(-3\\) and \\(3\\).",
        "workingOut": "\\(-3 \\leq 3\\sin x \\leq 3\\)",
        "graphData": null
      },
      {
        "explanation": "Analyse \\(y_2 = \\frac{x^2}{5} - 3\\): this is an upward-opening parabola with vertex at \\((0, -3)\\). It equals \\(3\\) when \\(x^2 = 30\\), i.e., \\(x \\approx \\pm 5.48\\).",
        "workingOut": "\\(y_2 = 3 \\text{ when } x \\approx \\pm 5.48\\)",
        "graphData": null
      },
      {
        "explanation": "The two curves can only intersect where both functions are within range \\([-3, 3]\\), i.e., for \\(|x| \\lesssim 5.5\\). Sketching both on the same axes shows the parabola intersecting the sine wave at exactly 4 points.",
        "workingOut": "\\(4 \\text{ intersection points} \\Rightarrow 4 \\text{ solutions}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020-q15c",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "",
    "answer": "LHS: substitute \\(\\sec\\theta = \\frac{1}{\\cos\\theta}\\), multiply numerator and denominator by \\(\\cos\\theta\\): \\(\\frac{1-\\cos\\theta}{1+\\cos\\theta}\\).\nMultiply by \\(\\frac{(1+\\cos\\theta)}{(1+\\cos\\theta)}\\) ...\nor use the standard method: multiply top and bottom by \\((\\sec\\theta - 1)\\) and use Pythagorean identity.",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "LHS: substitute \\(\\sec\\theta = \\frac{1}{\\cos\\theta}\\), multiply numerator and denominator by \\(\\cos\\theta\\): \\(\\frac{1-\\cos\\theta}{1+\\cos\\theta}\\).\nMultiply by \\(\\frac{(1+\\cos\\theta)}{(1+\\cos\\theta)}\\) ...\nor use the standard method: multiply top and bottom by \\((\\sec\\theta - 1)\\) and use Pythagorean identity.",
    "solutionSteps": [
      {
        "explanation": "Start with the LHS. Replace \\(\\sec\\theta = \\frac{1}{\\cos\\theta}\\) in numerator and denominator. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(\\text{LHS} = \\frac{\\frac{1}{\\cos\\theta}-1}{\\frac{1}{\\cos\\theta}+1}\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply numerator and denominator by \\(\\cos\\theta\\) to clear the compound fraction. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(= \\frac{1-\\cos\\theta}{1+\\cos\\theta}\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply numerator and denominator by \\((1-\\cos\\theta)\\) to create a Pythagorean identity in the denominator.",
        "workingOut": "\\(= \\frac{(1-\\cos\\theta)^2}{(1+\\cos\\theta)(1-\\cos\\theta)} = \\frac{(1-\\cos\\theta)^2}{1-\\cos^2\\theta}\\)",
        "graphData": null
      },
      {
        "explanation": "Expand \\((1-\\cos\\theta)^2 = 1 - 2\\cos\\theta + \\cos^2\\theta\\) and split the fraction. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(= \\frac{1 - 2\\cos\\theta + \\cos^2\\theta}{\\sin^2\\theta}\\)",
        "graphData": null
      },
      {
        "explanation": "Write each term separately: \\(\\frac{1}{\\sin^2\\theta} - \\frac{2\\cos\\theta}{\\sin^2\\theta} + \\frac{\\cos^2\\theta}{\\sin^2\\theta}\\). Note this can be written as \\(\\left(\\frac{1}{\\sin\\theta} - \\frac{\\cos\\theta}{\\sin\\theta}\\right)^2\\)... but a cleaner path: note \\(\\frac{(1-\\cos\\theta)^2}{\\sin^2\\theta} = \\left(\\frac{1-\\cos\\theta}{\\sin\\theta}\\right)^2 \\cdot \\frac{\\sin^2\\theta}{\\sin^2\\theta}\\). Instead split directly: \\(= \\frac{1}{\\sin\\theta} - \\frac{\\cos\\theta}{\\sin\\theta}\\).",
        "workingOut": "\\(= \\cosec\\theta - \\cot\\theta = \\text{RHS} \\qquad \\square\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "abb2020-q16ai",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 180,
    "question": "",
    "answer": "Using Pythagoras: height \\(= \\sqrt{10^2 - 8^2} = \\sqrt{100 - 64} = \\sqrt{36} = 6\\) m.",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "Using Pythagoras: height \\(= \\sqrt{10^2 - 8^2} = \\sqrt{100 - 64} = \\sqrt{36} = 6\\) m.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Abbotsleigh 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\text{Half base} = \\frac{16}{2} = 8 \\text{ m}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\text{height}^2 + 8^2 = 10^2\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\text{height} = \\sqrt{36} = 6 \\text{ m} \\qquad \\square\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Using Pythagoras: height \\(= \\sqrt{10^2 - 8^2} = \\sqrt{100 - 64} = \\sqrt{36} = 6\\) m.. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(Using Pythagoras: height \\(= \\sqrt{10^2 - 8^2} = \\sqrt{100 - 64} = \\sqrt{36} = 6\\) m.\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "abb2020-q16aii",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "",
    "answer": "By similar triangles: the portion above the cylinder has height \\((6 - h)\\) and half-width \\(r\\).\nThe full triangle has height 6 and half-width 8.\nSo \\(\\frac{6-h}{r} = \\frac{6}{8} = \\frac{3}{4}\\).\nThus \\(6 - h = \\frac{3r}{4} \\Rightarrow h = 6 - \\frac{3r}{4} = \\frac{3}{4}(8-r)\\).",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "By similar triangles: the portion above the cylinder has height \\((6 - h)\\) and half-width \\(r\\).\nThe full triangle has height 6 and half-width 8.\nSo \\(\\frac{6-h}{r} = \\frac{6}{8} = \\frac{3}{4}\\).\nThus \\(6 - h = \\frac{3r}{4} \\Rightarrow h = 6 - \\frac{3r}{4} = \\frac{3}{4}(8-r)\\).",
    "solutionSteps": [
      {
        "explanation": "The cylinder of radius \\(r\\) and height \\(h\\) sits at the base of the triangle. The portion of the triangle above the cylinder is a smaller triangle similar to the original.",
        "workingOut": "\\(\\text{Smaller triangle: height } (6-h),\\ \\text{half-base } r\\)",
        "graphData": null
      },
      {
        "explanation": "The full triangle has height 6 m and half-base 8 m. By similar triangles, the ratios of corresponding sides are equal.",
        "workingOut": "\\(\\frac{r}{8} = \\frac{6-h}{6}\\)",
        "graphData": null
      },
      {
        "explanation": "Factor: \\(h = 6 - \\frac{3r}{4} = \\frac{3}{4}\\cdot 8 - \\frac{3r}{4} = \\frac{3}{4}(8-r)\\). \\(\\square\\).",
        "workingOut": "\\(h = \\frac{3}{4}(8-r)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "abb2020-q16aiii",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 180,
    "question": "",
    "answer": "\\(V = \\pi r^2 h = \\pi r^2 \\cdot \\frac{3}{4}(8-r) = \\frac{3\\pi}{4}(8r^2 - r^3)\\).",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "\\(V = \\pi r^2 h = \\pi r^2 \\cdot \\frac{3}{4}(8-r) = \\frac{3\\pi}{4}(8r^2 - r^3)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Abbotsleigh 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(V = \\pi r^2 h\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(V = \\pi r^2 \\cdot \\frac{3}{4}(8-r)\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(V = \\frac{3\\pi}{4}(8r^2 - r^3) \\qquad \\square\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(V = \\pi r^2 h = \\pi r^2 \\cdot \\frac{3}{4}(8-r) = \\frac{3\\pi}{4}(8r^2 - r^3)\\).. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\(V = \\pi r^2 h = \\pi r^2 \\cdot \\frac{3}{4}(8-r) = \\frac{3\\pi}{4}(8r^2 - r^3)\\).\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "abb2020-q16aiv",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(\\(r = \\dfrac{16}{3}\\) m; \\(V_{\\max} = \\dfrac{512\\pi}{9} \\approx 179\\) m³\\)",
      "\\(\\(r = \\dfrac{8}{3}\\) m; \\(V_{\\max} \\approx 89\\) m³\\)",
      "\\(\\(r = 4\\) m; \\(V_{\\max} \\approx 151\\) m³\\)",
      "\\(\\(r = \\dfrac{16}{3}\\) m; \\(V_{\\max} \\approx 90\\) m³\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(\\(r = \\dfrac{16}{3}\\) m; \\(V_{\\max} = \\dfrac{512\\pi}{9} \\approx 179\\) m³\\).",
    "solutionSteps": [
      {
        "explanation": "Since \\(r > 0\\) (the cylinder has positive radius) and \\(r < 8\\) (must fit in the triangle), use \\(r = \\frac{16}{3} \\approx 5.33\\) m.",
        "workingOut": "\\(r = \\frac{16}{3} \\text{ m}\\)",
        "graphData": null
      },
      {
        "explanation": "Verify this is a maximum using the second derivative: \\(\\frac{d^2V}{dr^2} = \\frac{3\\pi}{4}(16 - 6r)\\). At \\(r = \\frac{16}{3}\\): \\(16 - 6 \\cdot \\frac{16}{3} = 16 - 32 = -16 < 0\\) ✓.",
        "workingOut": "\\(\\frac{d^2V}{dr^2}\\bigg|_{16/3} = \\frac{3\\pi}{4}(-16) < 0 \\checkmark \\text{ (maximum)}\\)",
        "graphData": null
      },
      {
        "explanation": "Calculate the maximum volume. First find \\(h\\): \\(h = \\frac{3}{4}(8 - \\frac{16}{3}) = \\frac{3}{4} \\cdot \\frac{8}{3} = 2\\) m.",
        "workingOut": "\\(h = \\frac{3}{4}\\!\\left(8 - \\frac{16}{3}\\right) = \\frac{3}{4} \\cdot \\frac{8}{3} = 2 \\text{ m}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020-q16bi",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(a = 2\\)",
      "\\(a = 4\\)",
      "\\(a = 3\\)",
      "\\(a = 1\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(a = 2\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Abbotsleigh 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(a = \\frac{\\text{max} - \\text{min}}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(a = \\frac{5 - 1}{2} = \\frac{4}{2} = 2\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(a = 2\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: a = 2. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(a = 2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020-q16bii",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(c = 3\\)",
      "\\(c = 2\\)",
      "\\(c = 4\\)",
      "\\(c = 5\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(c = 3\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Abbotsleigh 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(c = \\frac{\\text{max} + \\text{min}}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(c = \\frac{5 + 1}{2} = \\frac{6}{2} = 3\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(c = 3\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: c = 3. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(c = 3\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020-q16biii",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(n = \\dfrac{\\pi}{6}\\)",
      "\\(n = \\dfrac{\\pi}{12}\\)",
      "\\(n = \\dfrac{\\pi}{3}\\)",
      "\\(n = \\dfrac{2\\pi}{3}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(n = \\dfrac{\\pi}{6}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Abbotsleigh 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(T = \\frac{2\\pi}{n}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\frac{2\\pi}{n} = 12\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(n = \\frac{2\\pi}{12} = \\frac{\\pi}{6}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: n = \\dfrac{\\pi}{6}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(n = \\dfrac{\\pi}{6}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020-q16biv",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(7 hours\\)",
      "\\(5 hours\\)",
      "\\(9 hours\\)",
      "\\(12 hours\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(7 hours\\).",
    "solutionSteps": [
      {
        "explanation": "First verify when Sophie starts recording. At \\(t = 0\\): \\(D = 2\\sin(\\frac{\\pi}{3}) + 3 = 2 \\cdot \\frac{\\sqrt{3}}{2} + 3 = \\sqrt{3} + 3 \\approx 4.73\\) m ✓.",
        "workingOut": "\\(D(0) = \\sqrt{3} + 3 \\approx 4.73 \\text{ m} \\checkmark\\)",
        "graphData": null
      },
      {
        "explanation": "The sine function equals \\(-1\\) when its argument is \\(\\frac{3\\pi}{2}\\) (i.e., \\(270°\\)). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(\\frac{\\pi t}{6} + \\frac{\\pi}{3} = \\frac{3\\pi}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Subtract \\(\\frac{\\pi}{3}\\) from both sides: \\(\\frac{\\pi t}{6} = \\frac{3\\pi}{2} - \\frac{\\pi}{3} = \\frac{9\\pi}{6} - \\frac{2\\pi}{6} = \\frac{7\\pi}{6}\\).",
        "workingOut": "\\(\\frac{\\pi t}{6} = \\frac{7\\pi}{6}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "abb2020-q16bv",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Abbotsleigh 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(At \\(t = 4\\) h; rate \\(= -\\dfrac{\\pi}{3} \\approx -1.05\\) m/h\\)",
      "\\(At \\(t = 2\\) h; rate \\(\\approx -1.05\\) m/h\\)",
      "\\(At \\(t = 4\\) h; rate \\(\\approx -0.52\\) m/h\\)",
      "\\(At \\(t = 8\\) h; rate \\(\\approx -1.05\\) m/h\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(At \\(t = 4\\) h; rate \\(= -\\dfrac{\\pi}{3} \\approx -1.05\\) m/h\\).",
    "solutionSteps": [
      {
        "explanation": "Differentiate \\(D = 2\\sin\\!\\left(\\frac{\\pi}{6}t + \\frac{\\pi}{3}\\right) + 3\\) with respect to \\(t\\). Use the chain rule: derivative of \\(\\sin(u)\\) is \\(\\cos(u) \\cdot \\frac{du}{dt}\\), where \\(u = \\frac{\\pi t}{6} + \\frac{\\pi}{3}\\) and \\(\\frac{du}{dt} = \\frac{\\pi}{6}\\).",
        "workingOut": "\\(\\dot{D} = 2 \\cdot \\cos\\!\\left(\\frac{\\pi t}{6}+\\frac{\\pi}{3}\\right) \\cdot \\frac{\\pi}{6} = \\frac{\\pi}{3}\\cos\\!\\left(\\frac{\\pi t}{6}+\\frac{\\pi}{3}\\right)\\)",
        "graphData": null
      },
      {
        "explanation": "The rate of change of depth is \\(\\dot{D}\\). To find the greatest rate of drop (most negative value), we need the minimum of \\(\\dot{D}\\).",
        "workingOut": "\\(\\dot{D}_{\\min} \\text{ occurs when } \\cos\\!\\left(\\frac{\\pi t}{6}+\\frac{\\pi}{3}\\right) = -1\\)",
        "graphData": null
      },
      {
        "explanation": "Subtract \\(\\frac{\\pi}{3}\\): \\(\\frac{\\pi t}{6} = \\pi - \\frac{\\pi}{3} = \\frac{2\\pi}{3}\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(\\frac{\\pi t}{6} = \\frac{2\\pi}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "The greatest rate of drop is \\(\\dot{D} = \\frac{\\pi}{3} \\times (-1) = -\\frac{\\pi}{3} \\approx -1.05\\) m/h.",
        "workingOut": "\\(\\dot{D} = -\\frac{\\pi}{3} \\approx -1.05 \\text{ m/h}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  }
];
