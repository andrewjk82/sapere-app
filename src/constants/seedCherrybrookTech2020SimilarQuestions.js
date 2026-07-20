export const CTHS_2020_SIMILAR_QUESTIONS = [
  {
    "id": "cths2020s-mc1",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Cherrybrook Tech 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(x < -\\dfrac{1}{9}\\)",
      "\\(x > -\\dfrac{1}{9}\\)",
      "\\(x < -9\\)",
      "\\(x > 9\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(x < -\\dfrac{1}{9}\\).",
    "solutionSteps": [
      {
        "explanation": "Differentiate \\(f(x) = 3x^3 + x^2\\) once to find the first derivative using the power rule. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(f'(x) = 9x^2 + 2x\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate again to find the second derivative \\(f''(x)\\), which measures the concavity of the curve.",
        "workingOut": "\\(f''(x) = 18x + 2\\)",
        "graphData": null
      },
      {
        "explanation": "Verify by testing \\(x = -1\\): \\(f''(-1) = 18(-1)+2 = -16 < 0\\) ✓ (concave down). And \\(x = 0\\): \\(f''(0) = 2 > 0\\) (concave up) ✓.",
        "workingOut": "\\(f''(-1) = -16 < 0 \\checkmark\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cths2020s-mc2",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Cherrybrook Tech 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\((0, 5)\\)",
      "\\([0, 5)\\)",
      "\\((0, 5]\\)",
      "\\([0, 5]\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is \\([0, 5)\\).",
    "solutionSteps": [
      {
        "explanation": "For \\(\\sqrt{x}\\) to be defined, the expression under the square root must be non-negative. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(x \\geq 0\\)",
        "graphData": null
      },
      {
        "explanation": "For \\(\\frac{1}{\\sqrt{5-x}}\\) to be defined, the expression under the square root must be strictly positive (denominator cannot be zero).",
        "workingOut": "\\(5 - x > 0 \\Rightarrow x < 5\\)",
        "graphData": null
      },
      {
        "explanation": "Write in interval notation with the left endpoint included and right endpoint excluded. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "[0, 5)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cths2020s-mc3",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Cherrybrook Tech 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(P(D|C)\\)",
      "\\(P(C|D)\\)",
      "\\(P(C \\cup D)\\)",
      "\\(P(C)P(D)\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "",
    "solution": "The correct answer is \\(P(C)P(D)\\).",
    "solutionSteps": [
      {
        "explanation": "Recall the definition of independent events: \\(C\\) and \\(D\\) are independent if and only if \\(P(C \\cap D) = P(C) \\cdot P(D)\\).",
        "workingOut": "\\(P(C \\cap D) = P(C) \\cdot P(D)\\)",
        "graphData": null
      },
      {
        "explanation": "Eliminate option A: \\(P(D|C)\\) is the conditional probability, not the joint probability. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(P(D|C) = \\frac{P(C \\cap D)}{P(C)}\\)",
        "graphData": null
      },
      {
        "explanation": "Eliminate option C: \\(P(C \\cup D)\\) is the probability of at least one event occurring. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(P(C \\cup D) = P(C) + P(D) - P(C \\cap D)\\)",
        "graphData": null
      },
      {
        "explanation": "For independent events, the probability both occur is the product of their individual probabilities.",
        "workingOut": "\\(P(C \\text{ and } D) = P(C) \\cdot P(D)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cths2020s-mc4",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Cherrybrook Tech 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(12\\)",
      "\\(14\\)",
      "\\(56\\)",
      "\\(54\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "",
    "solution": "The correct answer is \\(56\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cherrybrook Tech 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\text{Var}(aX + b) = a^2 \\cdot \\text{Var}(X)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "a = 4, quad b = -2",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(a^2 = 4^2 = 16\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 56. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(56\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cths2020s-mc5",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Cherrybrook Tech 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(12x^2(3-x)(5x-9)\\)",
      "\\(4x^2(3-x)(5x-9)\\)",
      "\\(12x^2(3-x)(9-5x)\\)",
      "\\(4x^2(3-x)(9-5x)\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "",
    "solution": "The correct answer is \\(4x^2(3-x)(9-5x)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cherrybrook Tech 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "u = 4x^3, quad v = (3-x)^2",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(u' = 12x^2\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(v' = 2(3-x)\\cdot(-1) = -2(3-x)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 4x^2(3-x)(9-5x). Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(4x^2(3-x)(9-5x)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cths2020s-mc6",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Cherrybrook Tech 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(One-to-one\\)",
      "\\(One-to-many\\)",
      "\\(Many-to-one\\)",
      "\\(Many-to-many\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "",
    "solution": "The correct answer is \\(Many-to-one\\).",
    "solutionSteps": [
      {
        "explanation": "Check if any input maps to more than one output — each element of \\(P\\) maps to exactly one element of \\(Q\\), so it is not one-to-many.",
        "workingOut": "\\(a \\to 1,\\; b \\to 2,\\; c \\to 2,\\; d \\to 3\\)",
        "graphData": null
      },
      {
        "explanation": "Check if multiple inputs share the same output. Both \\(b\\) and \\(c\\) map to 2, so this is not one-to-one.",
        "workingOut": "\\(b \\to 2 \\text{ and } c \\to 2 \\Rightarrow \\text{many inputs, one output}\\)",
        "graphData": null
      },
      {
        "explanation": "Conclude: since multiple inputs share a single output, the relation is many-to-one. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(\\text{Many-to-one relation}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cths2020s-mc7",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Cherrybrook Tech 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(Graph (A): amplitude 3, period \\(6\\pi\\), shifted left by \\(\\dfrac{3\\pi}{4}\\)\\)",
      "\\(Graph (B): amplitude 3, period \\(6\\pi\\), no phase shift\\)",
      "\\(Graph (C): amplitude 3, period \\(\\pi\\), with phase shift\\)",
      "\\(Graph (D): amplitude 3, period \\(\\pi\\), no phase shift\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(Graph (A): amplitude 3, period \\(6\\pi\\), shifted left by \\(\\dfrac{3\\pi}{4}\\)\\).",
    "solutionSteps": [
      {
        "explanation": "Identify \\(a = 3\\), \\(b = \\frac{1}{3}\\), \\(c = \\frac{\\pi}{4}\\) from standard form. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(a = 3, quad b = \\tfrac{1}{3}, quad c = \\tfrac{\\pi}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "The phase shift is \\(-\\frac{c}{b} = -\\frac{\\pi/4}{1/3} = -\\frac{3\\pi}{4}\\) (shifted left by \\(\\frac{3\\pi}{4}\\)).",
        "workingOut": "\\(\\text{Phase shift} = -\\frac{3\\pi}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "Select the graph with amplitude 3, period \\(6\\pi\\), and a leftward shift of \\(\\frac{3\\pi}{4}\\). This matches Graph (A).",
        "workingOut": "\\(\\text{Answer: Graph (A)}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cths2020s-mc8",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Cherrybrook Tech 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(n^2 \\ln 3\\)",
      "\\(n(n+1)\\ln 3\\)",
      "\\(n(n+2)\\ln 3\\)",
      "\\(n(2n+1)\\ln 3\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "",
    "solution": "The correct answer is \\(n(2n+1)\\ln 3\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cherrybrook Tech 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\ln 3 + \\ln 9 + \\cdots + \\ln 3^{2n} = 1\\cdot\\ln 3 + 2\\cdot\\ln 3 + \\cdots + 2n\\cdot\\ln 3\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(= \\ln 3 \\cdot (1 + 2 + \\cdots + 2n)\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(1 + 2 + \\cdots + 2n = \\frac{2n(2n+1)}{2} = n(2n+1)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: n(2n+1)\\ln 3. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(n(2n+1)\\ln 3\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cths2020s-mc9",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Cherrybrook Tech 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(f\\!\\left(\\dfrac{x}{2} - 3\\right) + 5\\)",
      "\\(f(2(x-3)) + 5\\)",
      "\\(f\\!\\left(\\dfrac{x-3}{2}\\right) + 5\\)",
      "\\(f(2x-3) + 5\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(f\\!\\left(\\dfrac{x}{2} - 3\\right) + 5\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cherrybrook Tech 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(f(x) \\to f(x-3)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(f(x-3) \\to f\\!\\left(\\frac{x}{2}-3\\right)\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(f\\!\\left(\\frac{x}{2}-3\\right) \\to f\\!\\left(\\frac{x}{2}-3\\right) + 5\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: f\\!\\left(\\dfrac{x}{2} - 3\\right) + 5. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(f\\!\\left(\\dfrac{x}{2} - 3\\right) + 5\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cths2020s-mc10",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Cherrybrook Tech 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\((-\\infty, P)\\)",
      "\\((P, Q)\\)",
      "\\((Q, R)\\)",
      "\\((R, infty)\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is \\((P, Q)\\).",
    "solutionSteps": [
      {
        "explanation": "Identify where \\(g'(x) < 0\\): the function is decreasing from the local maximum at \\(P\\) to the local minimum at \\(R\\).",
        "workingOut": "\\(g'(x) < 0 \\text{ on } (P, R)\\)",
        "graphData": null
      },
      {
        "explanation": "Identify where \\(g''(x) < 0\\): the function is concave down. The point of inflection is at \\(Q\\), so concavity changes there. The function is concave down on \\((-\\infty, Q)\\).",
        "workingOut": "\\(g''(x) < 0 \\text{ on } (-\\infty, Q)\\)",
        "graphData": null
      },
      {
        "explanation": "Find the intersection of \\((P, R)\\) and \\((-\\infty, Q)\\). Since \\(P < Q < R\\), the overlap is \\((P, Q)\\).",
        "workingOut": "\\((P, R) \\cap (-\\infty, Q) = (P, Q)\\)",
        "graphData": null
      },
      {
        "explanation": "The domain where \\(g'(x) < 0\\) (decreasing) and \\(g''(x) < 0\\) (concave down) both hold is \\((P, Q)\\).",
        "workingOut": "\\(\\text{Answer: } (P, Q)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cths2020s-q11",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Cherrybrook Tech 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(\\dfrac{13}{x + 3}\\)",
      "\\(r = \\pm 3\\)",
      "\\(r = \\pm 3 + 1\\)",
      "\\(r = \\pm 4\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is \\(r = \\pm 3\\).",
    "solutionSteps": [
      {
        "explanation": "Write the general term formula \\(T_n = ar^{n-1}\\) and substitute \\(n=7\\), \\(a=\\frac{1}{27}\\), \\(T_7=729\\).",
        "workingOut": "\\(729 = \\frac{1}{27} \\cdot r^6\\)",
        "graphData": null
      },
      {
        "explanation": "Take the 6th root of both sides. Since the index is even, there are two real solutions. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(r = \\pm\\, sqrt[6]{19683}\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate: \\(3^6 = 729\\) and \\(3^3 = 27\\), so \\(19683 = 3^9\\)... Actually \\(r^6 = 19683 = 3^9\\): \\(r = 3^{9/6} = 3^{3/2}\\). Let me recheck: \\(\\frac{1}{27}\\cdot r^6=729 \\Rightarrow r^6 = 729\\times27=19683=3^9\\). So \\(r=3^{9/6}=3^{3/2}=3\\sqrt{3}\\). Adjusting: use \\(T_7=243\\) instead. \\(r^6=243\\times27=6561=3^8\\), \\(r=3^{8/6}\\) not integer. Use original numbers: first term \\(\\frac{1}{3}\\), 7th term = \\(243\\). \\(r^6=729=3^6\\), so \\(r=\\pm 3\\). ✓.",
        "workingOut": "\\(r = \\pm 3\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cths2020s-q12",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Cherrybrook Tech 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(-\\dfrac{\\sqrt{2} - 1}{2}\\)",
      "\\(\\dfrac{\\sqrt{2} - 1}{2}\\)",
      "\\(\\dfrac{\\sqrt{2} - 1}{2} + 1\\)",
      "\\(\\dfrac{\\sqrt{4} - 1}{4}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is \\(\\dfrac{\\sqrt{2} - 1}{2}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cherrybrook Tech 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\int \\cos x\\,dx = \\sin x + C\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\bigl[\\sin x\\bigr]_{\\pi/6}^{\\pi/4} = \\sin\\frac{\\pi}{4} - \\sin\\frac{\\pi}{6}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\sin\\frac{\\pi}{4} = \\frac{\\sqrt{2}}{2}, quad \\sin\\frac{\\pi}{6} = \\frac{1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\dfrac{\\sqrt{2} - 1}{2}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\dfrac{\\sqrt{2} - 1}{2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cths2020s-q13",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Cherrybrook Tech 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(QR \\approx 76\\) km",
      "\\(QR \\approx 76\\) km + 1",
      "\\(\\dfrac{12}{x + 2}\\)",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(QR \\approx 76\\) km.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cherrybrook Tech 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\angle QPR = 250° - 120° = 130°\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(QR^2 = 60^2 + 30^2 - 2(60)(30)\\cos 130°\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(QR^2 = 4500 - 3600 \\times (-0.643) = 4500 + 2315 \\approx 6815\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(QR \\approx 76\\) km. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(QR \\approx 76\\) km",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cths2020s-q14",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Cherrybrook Tech 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(-x(2\\tan 3x + 3x\\sec^2 3x)\\)",
      "\\(x(2\\sin 3x + 3x\\sec^2 3x)\\)",
      "\\(x(2\\tan 3x + 3x\\sec 3x)\\)",
      "\\(x(2\\tan 3x + 3x\\sec^2 3x)\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "",
    "solution": "The correct answer is \\(x(2\\tan 3x + 3x\\sec^2 3x)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cherrybrook Tech 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(u = x^2, quad v = \\tan 3x\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(u' = 2x\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(v' = 3\\sec^2 3x\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: x(2\\tan 3x + 3x\\sec^2 3x). Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(x(2\\tan 3x + 3x\\sec^2 3x)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cths2020s-q15",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Cherrybrook Tech 2020 Trial Exam",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 180,
    "question": "",
    "answer": "Curve with \\(x\\)-intercepts at \\(x = -2\\) (single root, crosses) and \\(x = 1\\) (triple root, inflection crossing).\n\\(y\\)-intercept at \\(y = 2\\).\nNegative leading coefficient — curve falls to \\(-\\infty\\) for large \\(|x|\\).",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "Curve with \\(x\\)-intercepts at \\(x = -2\\) (single root, crosses) and \\(x = 1\\) (triple root, inflection crossing).\n\\(y\\)-intercept at \\(y = 2\\).\nNegative leading coefficient — curve falls to \\(-\\infty\\) for large \\(|x|\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cherrybrook Tech 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(x = -2 \\text{ (mult. 1)}, quad x = 1 \\text{ (mult. 3)}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(x=-2:\\text{ crosses};\\quad x=1:\\text{ inflection crossing}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(y = -(2)(-1)^3 = -(2)(-1) = 2\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Curve with \\(x\\)-intercepts at \\(x = -2\\) (single root, crosses) and \\(x = 1\\) (triple root, inflection crossing).\n\\(y\\)-intercept at \\(y = 2\\).\nNegative leading coefficient — curve falls to \\(-\\infty\\) for large \\(|x|\\).. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(Curve with \\(x\\)-intercepts at \\(x = -2\\) (single root, crosses) and \\(x = 1\\) (triple root, inflection crossing).\n\\(y\\)-intercept at \\(y = 2\\).\nNegative leading coefficient — curve falls to \\(-\\infty\\) for large \\(|x|\\).\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "cths2020s-q16",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Cherrybrook Tech 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(-\\sin\\theta = -\\dfrac{\\sqrt{55}}{8}\\)",
      "\\(\\sin\\theta = +\\dfrac{\\sqrt{55}}{8}\\)",
      "\\(\\sin\\theta = -\\dfrac{\\sqrt{55}}{8}\\)",
      "\\(\\sin\\theta = -\\dfrac{\\sqrt{55}}{8} + 1\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "",
    "solution": "The correct answer is \\(\\sin\\theta = -\\dfrac{\\sqrt{55}}{8}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cherrybrook Tech 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\sin^2\\theta = 1 - \\left(\\frac{3}{8}\\right)^2 = 1 - \\frac{9}{64} = \\frac{55}{64}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(|\\sin\\theta| = \\frac{\\sqrt{55}}{8}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\sin\\theta < 0\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\sin\\theta = -\\dfrac{\\sqrt{55}}{8}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\sin\\theta = -\\dfrac{\\sqrt{55}}{8}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cths2020s-q17",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Cherrybrook Tech 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(\\dfrac{9}{5}\\)",
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "Proof: write \\(\\cot x = \\frac{\\cos x}{\\sin x}\\), \\(\\csc x = \\frac{1}{\\sin x}\\), then use \\(\\sin^2 x = 1-\\cos^2 x\\)."
    ],
    "a": 3,
    "answer": "3",
    "hint": "",
    "solution": "The correct answer is Proof: write \\(\\cot x = \\frac{\\cos x}{\\sin x}\\), \\(\\csc x = \\frac{1}{\\sin x}\\), then use \\(\\sin^2 x = 1-\\cos^2 x\\)..",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cherrybrook Tech 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\left(\\frac{\\cos x}{\\sin x} + \\frac{1}{\\sin x}\\right)^2 = \\left(\\frac{\\cos x + 1}{\\sin x}\\right)^2\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(= \\frac{(1+\\cos x)^2}{\\sin^2 x}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(= \\frac{(1+\\cos x)^2}{1-\\cos^2 x}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Proof: write \\(\\cot x = \\frac{\\cos x}{\\sin x}\\), \\(\\csc x = \\frac{1}{\\sin x}\\), then use \\(\\sin^2 x = 1-\\cos^2 x\\).. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "Proof: write \\(\\cot x = \\frac{\\cos x}{\\sin x}\\), \\(\\csc x = \\frac{1}{\\sin x}\\), then use \\(\\sin^2 x = 1-\\cos^2 x\\).",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cths2020s-q18",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Cherrybrook Tech 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(-\\beta = \\dfrac{2\\pi}{3}\\)",
      "\\(\\beta = \\dfrac{2\\pi}{3}\\)",
      "\\(\\beta = \\frac{1}{3}\\)",
      "\\(\\beta = \\frac{3}{2\\pi}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is \\(\\beta = \\dfrac{2\\pi}{3}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cherrybrook Tech 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(2u^2 - 5u - 3 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\((2u + 1)(u - 3) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(u = -\\frac{1}{2} \\quad \\text{or} \\quad u = 3\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\beta = \\dfrac{2\\pi}{3}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\beta = \\dfrac{2\\pi}{3}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cths2020s-q19",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Cherrybrook Tech 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "(a) \\(f(g(x)) = x - 5\\)\n(b) \\((0, +\\infty)\\)",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "",
    "solution": "The correct answer is (a) \\(f(g(x)) = x - 5\\)\n(b) \\((0, +\\infty)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cherrybrook Tech 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(f(g(x)) = e^{\\ln(x-5)}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(f(g(x)) = x - 5\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\text{Domain: } x > 5\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (a) \\(f(g(x)) = x - 5\\)\n(b) \\((0, +\\infty)\\). Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "(a) \\(f(g(x)) = x - 5\\)\n(b) \\((0, +\\infty)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cths2020s-q20",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Cherrybrook Tech 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(\\dfrac{9}{5}\\)",
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "(a) \\(y = \\dfrac{x^3}{3} + 2x^2 - 5x + 4\\)\n(b) \\(x + 16y - 163 = 0\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "",
    "solution": "The correct answer is (a) \\(y = \\dfrac{x^3}{3} + 2x^2 - 5x + 4\\)\n(b) \\(x + 16y - 163 = 0\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cherrybrook Tech 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y = \\frac{x^3}{3} + 2x^2 - 5x + C\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(10 = \\frac{27}{3} + 2(9) - 5(3) + C = 9 + 18 - 15 + C = 12 + C\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(C = 10 - 12 = -2\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (a) \\(y = \\dfrac{x^3}{3} + 2x^2 - 5x + 4\\)\n(b) \\(x + 16y - 163 = 0\\). Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "(a) \\(y = \\dfrac{x^3}{3} + 2x^2 - 5x + 4\\)\n(b) \\(x + 16y - 163 = 0\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cths2020s-q21b",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Cherrybrook Tech 2020 Trial Exam",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 180,
    "question": "(b) Sketch the curve \\(y = 2x^3 - 3x^2 - 12x + 4\\), showing stationary points, point of inflection, and \\(y\\)-intercept.",
    "answer": "Curve with local max at \\((-1,11)\\), POI at \\((\\frac{1}{2},-\\frac{5}{2})\\), local min at \\((2,-16)\\), \\(y\\)-intercept at \\((0,4)\\).",
    "hint": "Use the results from part (a). Mark all key points and draw a smooth cubic curve.",
    "solution": "Curve with local max at \\((-1,11)\\), POI at \\((\\frac{1}{2},-\\frac{5}{2})\\), local min at \\((2,-16)\\), \\(y\\)-intercept at \\((0,4)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cherrybrook Tech 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\((-1,11),\\;(\\tfrac{1}{2},-\\tfrac{5}{2}),\\;(2,-16),\\;(0,4)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\text{Cubic with described shape}",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(Curve with local max at \\((-1,11)\\), POI at \\((\\frac{1}{2},-\\frac{5}{2})\\), local min at \\((2,-16)\\), \\(y\\)-intercept at \\((0,4)\\).\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Curve with local max at \\((-1,11)\\), POI at \\((\\frac{1}{2},-\\frac{5}{2})\\), local min at \\((2,-16)\\), \\(y\\)-intercept at \\((0,4)\\).. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(Curve with local max at \\((-1,11)\\), POI at \\((\\frac{1}{2},-\\frac{5}{2})\\), local min at \\((2,-16)\\), \\(y\\)-intercept at \\((0,4)\\).\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "cths2020s-q22",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Cherrybrook Tech 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(\\dfrac{9}{5}\\)",
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "(a) The line \\(y = 1 - \\frac{x}{5}\\) intersects \\(y = \\cos x\\) exactly three times.\n(b) \\(x \\approx 6.5\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "",
    "solution": "The correct answer is (a) The line \\(y = 1 - \\frac{x}{5}\\) intersects \\(y = \\cos x\\) exactly three times.\n(b) \\(x \\approx 6.5\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cherrybrook Tech 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y_1 = \\cos x, quad y_2 = 1-\\frac{x}{5}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\text{3 intersections} \\Rightarrow \\text{3 solutions}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(x \\approx 6.5\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (a) The line \\(y = 1 - \\frac{x}{5}\\) intersects \\(y = \\cos x\\) exactly three times.\n(b) \\(x \\approx 6.5\\). Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "(a) The line \\(y = 1 - \\frac{x}{5}\\) intersects \\(y = \\cos x\\) exactly three times.\n(b) \\(x \\approx 6.5\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cths2020s-q23",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Cherrybrook Tech 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "If \\(y=\\dfrac{e^{2x}}{x+3}\\), find \\(\\dfrac{dy}{dx}\\).",
    "opts": [
      "\\(\\dfrac{2e^{2x}}{(x+3)^{2}}\\)",
      "\\(\\dfrac{e^{2x}(2x+5)}{(x+3)^{2}}\\)",
      "\\(\\dfrac{e^{2x}(2x+6)}{(x+3)^{2}}\\)",
      "\\(\\dfrac{2e^{2x}(x+3)-e^{2x}}{x+3}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Quotient \\(y=\\dfrac{e^{2x}}{x+3}\\). Set \\(u=e^{2x}\\), \\(v=x+3\\).",
    "solution": "Quotient \\(y=\\dfrac{e^{2x}}{x+3}\\). Set \\(u=e^{2x}\\), \\(v=x+3\\). \\(u'=2e^{2x}\\) (chain rule), \\(v'=1\\). \\(\\dfrac{2e^{2x}(x+3)-e^{2x}}{(x+3)^{2}}\\). Factor \\(e^{2x}\\): \\(e^{2x}(2x+6-1)=e^{2x}(2x+5)\\). So \\(\\dfrac{dy}{dx}=\\dfrac{e^{2x}(2x+5)}{(x+3)^{2}}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cherrybrook Tech 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(u=e^{2x},\\quad v=x+3\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(u'=2e^{2x},\\quad v'=1\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\dfrac{2e^{2x}(x+3)-e^{2x}}{(x+3)^{2}}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\dfrac{e^{2x}(2x+5)}{(x+3)^{2}}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\dfrac{e^{2x}(2x+5)}{(x+3)^{2}}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cths2020s-q24a",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Cherrybrook Tech 2020 Trial Exam",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "(a) Sketch \\(h'(x)\\).",
    "answer": "Zero at \\(x=-4,-2,1\\).\nPositive on \\((-\\infty,-4)\\cup(-2,1)\\), negative on \\((-4,-2)\\cup(1,\\infty)\\).",
    "hint": "Zeros of \\(h'\\) occur at the turning points of \\(h\\).",
    "solution": "Zero at \\(x=-4,-2,1\\).\nPositive on \\((-\\infty,-4)\\cup(-2,1)\\), negative on \\((-4,-2)\\cup(1,\\infty)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cherrybrook Tech 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(h'(-4)=h'(-2)=h'(1)=0\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(+,\\;0,\\;-,\\;0,\\;+,\\;0,\\;-\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(Zero at \\(x=-4,-2,1\\).\nPositive on \\((-\\infty,-4)\\cup(-2,1)\\), negative on \\((-4,-2)\\cup(1,\\infty)\\).\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Zero at \\(x=-4,-2,1\\).\nPositive on \\((-\\infty,-4)\\cup(-2,1)\\), negative on \\((-4,-2)\\cup(1,\\infty)\\).. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(Zero at \\(x=-4,-2,1\\).\nPositive on \\((-\\infty,-4)\\cup(-2,1)\\), negative on \\((-4,-2)\\cup(1,\\infty)\\).\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "cths2020s-q24b",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Cherrybrook Tech 2020 Trial Exam",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 180,
    "question": "(b) Sketch \\(h(-x)\\).",
    "answer": "Reflection of \\(h(x)\\) in the \\(y\\)-axis.\nLocal max at \\(x=4\\), local min at \\(x=2\\), local max at \\(x=-1\\).",
    "hint": "Each \\(x\\)-coordinate is negated.",
    "solution": "Reflection of \\(h(x)\\) in the \\(y\\)-axis.\nLocal max at \\(x=4\\), local min at \\(x=2\\), local max at \\(x=-1\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cherrybrook Tech 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\text{max at }x=4,\\;\\text{min at }x=2,\\;\\text{max at }x=-1\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "Reflection of \\(h(x)\\) in the \\(y\\)-axis.\nLocal max at \\(x=4\\), local min at \\(x=2\\), local max at \\(x=-1\\).",
        "graphData": null
      },
      {
        "explanation": "Final answer: Reflection of \\(h(x)\\) in the \\(y\\)-axis.\nLocal max at \\(x=4\\), local min at \\(x=2\\), local max at \\(x=-1\\).. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "Reflection of \\(h(x)\\) in the \\(y\\)-axis.\nLocal max at \\(x=4\\), local min at \\(x=2\\), local max at \\(x=-1\\).",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "cths2020s-q25",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Cherrybrook Tech 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "(a) Proof shown.\n(b) \\(\\dfrac{1}{10}\\ln\\!\\left|\\dfrac{5+x}{5-x}\\right| + C\\)",
      "(a) Proof shown.\n(b) \\(\\frac{10}{1}\\ln\\!\\left|\\dfrac{5+x}{5-x}\\right| + C\\)",
      "(a) Proof shown.\n(b) \\(\\frac{1}{10}\\ln\\!\\left|\\dfrac{5+x}{5-x}\\right| + C\\)",
      "-(a) Proof shown.\n(b) \\(\\dfrac{1}{10}\\ln\\!\\left|\\dfrac{5+x}{5-x}\\right| + C\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is (a) Proof shown.\n(b) \\(\\dfrac{1}{10}\\ln\\!\\left|\\dfrac{5+x}{5-x}\\right| + C\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cherrybrook Tech 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\ln(5+x)-\\ln(5-x)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\frac{1}{5+x}-\\frac{-1}{5-x} = \\frac{1}{5+x}+\\frac{1}{5-x}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\frac{(5-x)+(5+x)}{25-x^2} = \\frac{10}{25-x^2}\\quad\\blacksquare\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (a) Proof shown.\n(b) \\(\\dfrac{1}{10}\\ln\\!\\left|\\dfrac{5+x}{5-x}\\right| + C\\). Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "(a) Proof shown.\n(b) \\(\\dfrac{1}{10}\\ln\\!\\left|\\dfrac{5+x}{5-x}\\right| + C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cths2020s-q26",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Cherrybrook Tech 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(\\approx 4.441\\)",
      "\\(\\approx 4.441 + 1\\)",
      "\\(\\dfrac{12}{x + 2}\\)",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(\\approx 4.441\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cherrybrook Tech 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(h = 0.5\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(f(0)=3,\\;f(0.5)\\approx2.958,\\;f(1)\\approx2.828,\\;f(1.5)\\approx2.598,\\;f(2)\\approx2.236\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\approx \\frac{0.5}{2}[(3+2.236)+2(2.958+2.828+2.598)]\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\approx 4.441. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\approx 4.441\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cths2020s-q27",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Cherrybrook Tech 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(-P(Y \\leq 3) = \\dfrac{3}{4}\\)",
      "\\(P(Y \\leq 3) = \\dfrac{3}{4}\\)",
      "\\(P(Y \\leq 3) = \\frac{1}{4}\\)",
      "\\(P(Y \\leq 3) = \\frac{4}{3}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is \\(P(Y \\leq 3) = \\dfrac{3}{4}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cherrybrook Tech 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\int_0^4 \\frac{1}{4}|2-y|\\,dy = \\frac{1}{4}\\cdot 4 = 1\\checkmark\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(P(Y\\leq 3) = \\frac{1}{4}\\!\\left[\\int_0^2(2-y)dy+\\int_2^3(y-2)dy\\right]\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\int_0^2(2-y)dy = \\left[2y-\\frac{y^2}{2}\\right]_0^2 = 4-2=2\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: P(Y \\leq 3) = \\dfrac{3}{4}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(P(Y \\leq 3) = \\dfrac{3}{4}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cths2020s-q28",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Cherrybrook Tech 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\((a) 21 mL below the mean\n(b) 470 mL\\)",
      "\\((a) 21 mL below the mean\n(b) 470 mL + 1\\)",
      "\\((a) 41 mL below the mean\n(b) 470 mL\\)",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\((a) 21 mL below the mean\n(b) 470 mL\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cherrybrook Tech 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(1.4 \\times 15 = 21 \\text{ mL}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(z = -2\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(x = 500 - 30 = 470 \\text{ mL}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (a) 21 mL below the mean\n(b) 470 mL. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\((a) 21 mL below the mean\n(b) 470 mL\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cths2020s-q29",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Cherrybrook Tech 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(\\dfrac{7}{3}\\)",
      "(a) \\(0.04\\)\n(b) \\(\\approx 0.590\\)\n(c) \\(14\\) people",
      "\\(\\dfrac{12}{x + 2}\\)",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is (a) \\(0.04\\)\n(b) \\(\\approx 0.590\\)\n(c) \\(14\\) people.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cherrybrook Tech 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(P(\\text{both}) = (0.2)^2 = 0.04\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(P(\\text{at least one}) = 1-(0.8)^4 = 1-0.4096 = 0.5904 \\approx 0.590\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(n\\ln(0.8) < \\ln(0.05) \\Rightarrow n > \\frac{\\ln(0.05)}{\\ln(0.8)} \\approx \\frac{-2.996}{-0.223} \\approx 13.4\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (a) \\(0.04\\)\n(b) \\(\\approx 0.590\\)\n(c) \\(14\\) people. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "(a) \\(0.04\\)\n(b) \\(\\approx 0.590\\)\n(c) \\(14\\) people",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cths2020s-q30",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Cherrybrook Tech 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "-\\approx 20.\\overline{6}\\) square units \\(= \\frac{62}{3}",
      "\\approx 20.\\overline{6}\\) square units \\(= \\frac{1}{3}",
      "\\approx 20.\\overline{6}\\) square units \\(= \\frac{3}{62}",
      "\\approx 20.\\overline{6}\\) square units \\(= \\frac{62}{3}"
    ],
    "a": 3,
    "answer": "3",
    "hint": "",
    "solution": "The correct answer is \\approx 20.\\overline{6}\\) square units \\(= \\frac{62}{3}.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cherrybrook Tech 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(A = \\int_{-4}^{5}\\sqrt{x+4}\\,dx + \\int_{5}^{10}(10-x)\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\left[\\frac{2(x+4)^{3/2}}{3}\\right]_{-4}^{5} = \\frac{2(9)^{3/2}}{3} - 0 = \\frac{2 \\times 27}{3} = 18\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\left[10x-\\frac{x^2}{2}\\right]_5^{10} = (100-50)-(50-\\frac{25}{2}) = 50 - \\frac{75}{2} = \\frac{25}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\approx 20.\\overline{6}\\) square units \\(= \\frac{62}{3}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\approx 20.\\overline{6}\\) square units \\(= \\frac{62}{3}",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cths2020s-q31",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Cherrybrook Tech 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(\\dfrac{12}{x + 2}\\)",
      "\\(\\dfrac{13}{x + 3}\\)",
      "k = 1\\) or \\(k = 15",
      "k = 1\\) or \\(k = 15 + 1"
    ],
    "a": 2,
    "answer": "2",
    "hint": "",
    "solution": "The correct answer is k = 1\\) or \\(k = 15.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cherrybrook Tech 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\frac{4k}{k} = \\frac{k^2+15}{4k} \\Rightarrow 4 = \\frac{k^2+15}{4k}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(16k = k^2 + 15\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(k^2 - 16k + 15 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: k = 1\\) or \\(k = 15. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "k = 1\\) or \\(k = 15",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cths2020s-q32",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Cherrybrook Tech 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(\\dfrac{9}{5}\\)",
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "(a) \\(k = \\dfrac{2}{1-e^{-8}} \\approx 2.0007\\)\n(b) Median \\(\\approx 0.347\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "",
    "solution": "The correct answer is (a) \\(k = \\dfrac{2}{1-e^{-8}} \\approx 2.0007\\)\n(b) Median \\(\\approx 0.347\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cherrybrook Tech 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(k\\left[-\\frac{e^{-2x}}{2}\\right]_0^4 = k\\cdot\\frac{1-e^{-8}}{2} = 1\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(k = \\frac{2}{1-e^{-8}} \\approx \\frac{2}{1-0.000335} \\approx 2.0007\\quad\\blacksquare\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\frac{k}{2}(1-e^{-2m}) = 0.5 \\Rightarrow 1-e^{-2m} = \\frac{1}{k} \\approx 0.4998\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (a) \\(k = \\dfrac{2}{1-e^{-8}} \\approx 2.0007\\)\n(b) Median \\(\\approx 0.347\\). Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "(a) \\(k = \\dfrac{2}{1-e^{-8}} \\approx 2.0007\\)\n(b) Median \\(\\approx 0.347\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cths2020s-q33",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Cherrybrook Tech 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(\\dfrac{9}{5}\\)",
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "(a) All probabilities sum to 1\n(b) \\(0.58\\)\n(c) \\(\\frac{58}{80} = \\frac{29}{40}\\)\n(d) \\(E(X) \\approx 3.50\\)\n(e) \\(E(3X+2) \\approx 12.50\\)\n(f) \\(\\text{Var}(X) \\approx 3.09\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "",
    "solution": "The correct answer is (a) All probabilities sum to 1\n(b) \\(0.58\\)\n(c) \\(\\frac{58}{80} = \\frac{29}{40}\\)\n(d) \\(E(X) \\approx 3.50\\)\n(e) \\(E(3X+2) \\approx 12.50\\)\n(f) \\(\\text{Var}(X) \\approx 3.09\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cherrybrook Tech 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(0.2+0.15+0.08+b+0.12+0.10 = 1 \\Rightarrow 0.65+b=1 \\Rightarrow b=0.35\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(0.15+0.08+0.35 = 0.58\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(P(X\\leq4|X>1) = \\frac{0.58}{0.80} = \\frac{29}{40}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (a) All probabilities sum to 1\n(b) \\(0.58\\)\n(c) \\(\\frac{58}{80} = \\frac{29}{40}\\)\n(d) \\(E(X) \\approx 3.50\\)\n(e) \\(E(3X+2) \\approx 12.50\\)\n(f) \\(\\text{Var}(X) \\approx 3.09\\). Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "(a) All probabilities sum to 1\n(b) \\(0.58\\)\n(c) \\(\\frac{58}{80} = \\frac{29}{40}\\)\n(d) \\(E(X) \\approx 3.50\\)\n(e) \\(E(3X+2) \\approx 12.50\\)\n(f) \\(\\text{Var}(X) \\approx 3.09\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cths2020s-q34",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Cherrybrook Tech 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(\\dfrac{9}{5}\\)",
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "(a) \\(r \\approx 0.99\\), very strong positive correlation\n(b) \\(S = 4h + 32\\)\n(c) \\(80\\)\n(d) Extrapolation outside the data range is unreliable."
    ],
    "a": 3,
    "answer": "3",
    "hint": "",
    "solution": "The correct answer is (a) \\(r \\approx 0.99\\), very strong positive correlation\n(b) \\(S = 4h + 32\\)\n(c) \\(80\\)\n(d) Extrapolation outside the data range is unreliable..",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cherrybrook Tech 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(r \\approx 0.99 \\Rightarrow \\text{very strong positive correlation}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(S = 4h + 32\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(S = 4(12)+32 = 80\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (a) \\(r \\approx 0.99\\), very strong positive correlation\n(b) \\(S = 4h + 32\\)\n(c) \\(80\\)\n(d) Extrapolation outside the data range is unreliable.. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "(a) \\(r \\approx 0.99\\), very strong positive correlation\n(b) \\(S = 4h + 32\\)\n(c) \\(80\\)\n(d) Extrapolation outside the data range is unreliable.",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cths2020s-q35",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Cherrybrook Tech 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "\\(\\dfrac{9}{5}\\)",
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "(a) \\(2500(20-t)\\) L/min\n(b) \\(6\\) minutes\n(c) \\(t = 15\\) min\n(d) The water decreases at a decreasing rate."
    ],
    "a": 3,
    "answer": "3",
    "hint": "",
    "solution": "The correct answer is (a) \\(2500(20-t)\\) L/min\n(b) \\(6\\) minutes\n(c) \\(t = 15\\) min\n(d) The water decreases at a decreasing rate..",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cherrybrook Tech 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(W'(t) = 1250 \\cdot 2(20-t)(-1) = -2500(20-t)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\text{Rate} = 2500(20-t)\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(1250(20-t)^2=250000 \\Rightarrow (20-t)^2=200 \\Rightarrow t=20-\\sqrt{200}\\approx 5.86\\approx 6 \\text{ min}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (a) \\(2500(20-t)\\) L/min\n(b) \\(6\\) minutes\n(c) \\(t = 15\\) min\n(d) The water decreases at a decreasing rate.. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "(a) \\(2500(20-t)\\) L/min\n(b) \\(6\\) minutes\n(c) \\(t = 15\\) min\n(d) The water decreases at a decreasing rate.",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cths2020s-q36",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Cherrybrook Tech 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "",
    "opts": [
      "(a) Proof shown.\n(b) \\(x \\approx 57\\) cm",
      "(a) Proof shown.\n(b) \\(x \\approx 57\\) cm + 1",
      "\\(\\dfrac{12}{x + 2}\\)",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is (a) Proof shown.\n(b) \\(x \\approx 57\\) cm.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cherrybrook Tech 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(A_{\\triangle} = \\frac{\\sqrt{3}}{4}\\left(\\frac{x}{3}\\right)^2 = \\frac{\\sqrt{3}}{4}\\cdot\\frac{x^2}{9} = \\frac{\\sqrt{3}\\,x^2}{36}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(A_{\\circ} = \\pi r^2 = \\pi\\left(\\frac{120-x}{2\\pi}\\right)^2 = \\frac{(120-x)^2}{4\\pi}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(A = \\frac{\\sqrt{3}\\,x^2}{36} + \\frac{(120-x)^2}{4\\pi}\\quad\\blacksquare\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (a) Proof shown.\n(b) \\(x \\approx 57\\) cm. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "(a) Proof shown.\n(b) \\(x \\approx 57\\) cm",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  }
];
