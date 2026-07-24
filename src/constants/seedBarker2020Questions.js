export const BARKER_2020_QUESTIONS = [
  {
    "id": "bar2020-mc1",
    "topicId": "y12a-exam",
    "c": "6B",
    "t": "Differentiating the trig functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "What is the derivative of $\\ln(\\cos x)$?",
    "opts": [
      "\\(-\\sec x\\)",
      "\\(-\\tan x\\)",
      "\\(\\sec x\\)",
      "\\(\\tan x\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Use the chain rule: differentiate $\\ln(u)$ then $\\cos x$.",
    "solution": "The correct answer is \\(-\\tan x\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\frac{d}{dx}\\ln(u) = \\frac{1}{u} \\cdot \\frac{du}{dx}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(u = \\cos x, quad \\frac{du}{dx} = -\\sin x\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\frac{d}{dx}\\ln(\\cos x) = \\frac{1}{\\cos x} \\cdot (-\\sin x)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: -\\tan x. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(-\\tan x\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-mc1v",
    "topicId": "y12a-exam",
    "c": "6B",
    "t": "Differentiating the trig functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "What is the derivative of $\\ln(\\sin x)$?",
    "opts": [
      "\\(\\tan x\\)",
      "\\(\\cot x\\)",
      "\\(-\\cot x\\)",
      "\\(\\sec x\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Use the chain rule: differentiate $\\ln(u)$ then $\\sin x$.",
    "solution": "The correct answer is \\(\\cot x\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\frac{d}{dx}\\ln(\\sin x) = \\frac{1}{\\sin x} \\cdot \\cos x\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(= \\cot x\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\frac{d}{dx}\\ln(\\sin x) = \\cot x\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\cot x. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\cot x\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-mc2",
    "topicId": "y12a-exam",
    "c": "9A",
    "t": "The language of statistics",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "The mean of a set of 10 scores is 14. Another two scores are included and the new mean is 16. What is the mean of the two additional scores?",
    "opts": [
      "\\(4\\)",
      "\\(16\\)",
      "\\(18\\)",
      "\\(26\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "Find the total of all 12 scores, subtract the original total.",
    "solution": "The correct answer is \\(26\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(10 \\times 14 = 140\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(12 \\times 16 = 192\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(192 - 140 = 52\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 26. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(26\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-mc2v",
    "topicId": "y12a-exam",
    "c": "9A",
    "t": "The language of statistics",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "The mean of a set of 8 scores is 12. Another two scores are included and the new mean is 15. What is the mean of the two additional scores?",
    "opts": [
      "\\(3\\)",
      "\\(15\\)",
      "\\(20\\)",
      "\\(27\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "Find the total of all 10 scores, subtract the original total.",
    "solution": "The correct answer is \\(27\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(8 \\times 12 = 96\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(10 \\times 15 = 150\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(150 - 96 = 54\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 27. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(27\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-mc3",
    "topicId": "y12a-exam",
    "c": "6A",
    "t": "The trigonometric functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "What is the greatest value of the function $f(x) = -2\\cos x + 3$?",
    "opts": [
      "\\(1\\)",
      "\\(3\\)",
      "\\(5\\)",
      "\\(7\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "The greatest value of $-\\cos x$ is $1$, occurring when $\\cos x = -1$.",
    "solution": "The correct answer is \\(5\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(-1 \\leq \\cos x \\leq 1\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(-2 \\times (-1) = 2\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(2 + 3 = 5\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 5. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(5\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-mc3v",
    "topicId": "y12a-exam",
    "c": "6A",
    "t": "The trigonometric functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "What is the greatest value of the function $f(x) = -3\\sin x + 2$?",
    "opts": [
      "\\(-1\\)",
      "\\(2\\)",
      "\\(5\\)",
      "\\(8\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "The greatest value of $-\\sin x$ is $1$, occurring when $\\sin x = -1$.",
    "solution": "The correct answer is \\(5\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(-1 \\leq \\sin x \\leq 1\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(-3 \\times (-1) = 3\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(3 + 2 = 5\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 5. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(5\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-mc4",
    "topicId": "y12a-exam",
    "c": "9B",
    "t": "Grouped data and histograms",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "Staff at a large department store prepared a Pareto chart of customer complaints over one month. The categories were: Retailer (~47), Opening Times (~30), Parking (~23), Toilets (~15), Other (~7). Approximately what percentage of complaints were about Opening Times?",
    "opts": [
      "\\(12%\\)",
      "\\(25%\\)",
      "\\(30%\\)",
      "\\(60%\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Estimate Opening Times count from the chart and divide by the total.",
    "solution": "The correct answer is \\(25%\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(47 + 30 + 23 + 15 + 7 \\approx 122\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\approx 30\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\frac{30}{122} \\approx 0.246 \\approx 25\\%\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 25%. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(25%\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-mc4v",
    "topicId": "y12a-exam",
    "c": "9B",
    "t": "Grouped data and histograms",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "A Pareto chart of 200 customer complaints shows: Product Quality (80), Staff Service (50), Wait Time (40), Cleanliness (20), Other (10). Approximately what percentage of complaints were about Staff Service?",
    "opts": [
      "\\(10%\\)",
      "\\(25%\\)",
      "\\(40%\\)",
      "\\(50%\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Divide Staff Service count by the total.",
    "solution": "The correct answer is \\(25%\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(200\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(50\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\frac{50}{200} = 25\\%\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 25%. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(25%\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-mc5",
    "topicId": "y12a-exam",
    "c": "2F",
    "t": "Review of translations and reflections",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "The function $f(x) = x^2 - 5x + 1$ is reflected about the $y$-axis. What is the equation of the new function?",
    "opts": [
      "\\(f(x) = x^2 + 5x + 1\\)",
      "\\(f(x) = x^2 + 5x - 1\\)",
      "\\(f(x) = -x^2 + 5x + 1\\)",
      "\\(f(x) = -x^2 + 5x - 1\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Reflection about the $y$-axis replaces $x$ with $-x$.",
    "solution": "The correct answer is \\(f(x) = x^2 + 5x + 1\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(f(-x)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\((-x)^2 - 5(-x) + 1\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(x^2 + 5x + 1\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: f(x) = x^2 + 5x + 1. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(f(x) = x^2 + 5x + 1\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-mc5v",
    "topicId": "y12a-exam",
    "c": "2F",
    "t": "Review of translations and reflections",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "The function $f(x) = x^2 - 3x + 4$ is reflected about the $y$-axis. What is the equation of the new function?",
    "opts": [
      "\\(f(x) = x^2 + 3x + 4\\)",
      "\\(f(x) = x^2 + 3x - 4\\)",
      "\\(f(x) = -x^2 + 3x + 4\\)",
      "\\(f(x) = -x^2 - 3x + 4\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Replace $x$ with $-x$ throughout.",
    "solution": "The correct answer is \\(f(x) = x^2 + 3x + 4\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(f(-x) = (-x)^2 - 3(-x) + 4\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(= x^2 + 3x + 4\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(f(x) = x^2 + 3x + 4\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: f(x) = x^2 + 3x + 4. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(f(x) = x^2 + 3x + 4\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-mc6",
    "topicId": "y12a-exam",
    "c": "4H",
    "t": "The trapezoidal rule",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Using the trapezoidal rule with 4 subintervals, which expression gives the approximate area under the curve $y = xe^x$ between $x = 1$ and $x = 3$?",
    "opts": [
      "\\(\\dfrac{1}{4}(e^1 + 6e^{1.5} + 4e^2 + 10e^{2.5} + 3e^3)\\)",
      "\\(\\dfrac{1}{4}(e^1 + 3e^{1.5} + 4e^2 + 5e^{2.5} + 3e^3)\\)",
      "\\(\\dfrac{1}{2}(e^1 + 6e^{1.5} + 4e^2 + 10e^{2.5} + 3e^3)\\)",
      "\\(\\dfrac{1}{2}(e^1 + 3e^{1.5} + 4e^2 + 5e^{2.5} + 3e^3)\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "$h = \\dfrac{3-1}{4} = \\dfrac{1}{2}$. Apply $\\dfrac{h}{2}[y_0 + 2(y_1+y_2+y_3)+y_4]$.",
    "solution": "The correct answer is \\(\\dfrac{1}{4}(e^1 + 3e^{1.5} + 4e^2 + 5e^{2.5} + 3e^3)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(h = \\frac{3-1}{4} = \\frac{1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(y_0=e^1, y_1=1.5e^{1.5}, y_2=2e^2, y_3=2.5e^{2.5}, y_4=3e^3\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\frac{1/2}{2}\\bigl[e^1 + 2(1.5e^{1.5}+2e^2+2.5e^{2.5}) + 3e^3\\bigr]\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\dfrac{1}{4}(e^1 + 3e^{1.5} + 4e^2 + 5e^{2.5} + 3e^3). Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\dfrac{1}{4}(e^1 + 3e^{1.5} + 4e^2 + 5e^{2.5} + 3e^3)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-mc6v",
    "topicId": "y12a-exam",
    "c": "4H",
    "t": "The trapezoidal rule",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Using the trapezoidal rule with 2 subintervals, which expression gives the approximate area under the curve $y = xe^x$ between $x = 0$ and $x = 2$?",
    "opts": [
      "\\(\\dfrac{1}{2}(0 + 2e^1 + 2e^2)\\)",
      "\\(1 \\cdot (0 + 2e^1 + 2e^2)\\)",
      "\\(1 \\cdot (0 + e^1 + 2e^2)\\)",
      "\\(\\dfrac{1}{2}(0 + e^1 + 2e^2)\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "$h = \\dfrac{2-0}{2} = 1$. Apply $\\dfrac{h}{2}[y_0 + 2y_1 + y_2]$.",
    "solution": "The correct answer is \\(1 \\cdot (0 + 2e^1 + 2e^2)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(h = \\frac{2-0}{2} = 1\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(y_0=0, y_1=e, y_2=2e^2\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\frac{1}{2}[0 + 2e + 2e^2] = e + e^2\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 1 \\cdot (0 + 2e^1 + 2e^2). Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(1 \\cdot (0 + 2e^1 + 2e^2)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-mc7",
    "topicId": "y12a-exam",
    "c": "12G",
    "t": "Conditional probability",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "In a Year 12 drama class of 26 students, all students do either music or art or both. 11 do music. 5 do both music and art. What is the probability that a randomly chosen student does music and art, given they do art?",
    "opts": [
      "\\(\\dfrac{5}{26}\\)",
      "\\(\\dfrac{1}{4}\\)",
      "\\(\\dfrac{4}{15}\\)",
      "\\(\\dfrac{5}{11}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Find the number who do art, then use $P(M \\cap A | A) = \\dfrac{n(M \\cap A)}{n(A)}$.",
    "solution": "The correct answer is \\(\\dfrac{1}{4}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\text{Art only} = 26 - 6 - 5 = 15\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(n(A) = 15 + 5 = 20\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(P(M \\cap A \\mid A) = \\frac{5}{20} = \\frac{1}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\dfrac{1}{4}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\dfrac{1}{4}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-mc7v",
    "topicId": "y12a-exam",
    "c": "12G",
    "t": "Conditional probability",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "In a class of 30 students, all students play sport or study music or both. 18 play sport. 8 do both. What is the probability that a randomly chosen student plays sport and studies music, given they study music?",
    "opts": [
      "\\(\\dfrac{8}{30}\\)",
      "\\(\\dfrac{2}{5}\\)",
      "\\(\\dfrac{8}{18}\\)",
      "\\(\\dfrac{1}{3}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Find total music students, then apply conditional probability.",
    "solution": "The correct answer is \\(\\dfrac{2}{5}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(n(\\text{music}) = 20\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(P = \\frac{8}{20} = \\frac{2}{5}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\dfrac{2}{5}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\dfrac{2}{5}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\dfrac{2}{5}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-mc8",
    "topicId": "y12a-exam",
    "c": "7B",
    "t": "Velocity and acceleration as derivatives",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "A graph shows the velocity $v$ of a particle moving in a straight line as a function of time $t$. The positive direction is to the right. At $t = t_1$, the graph is below the $x$-axis and has a positive gradient. Which statement describes the motion when $t = t_1$?",
    "opts": [
      "The velocity is positive, and the acceleration is positive",
      "The velocity is negative, and the acceleration is positive",
      "The velocity is positive, and the particle is to the right of its initial position",
      "The velocity is negative, and the particle is to the right of its initial position"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Velocity is the $y$-value on the graph; acceleration is the gradient of the velocity graph.",
    "solution": "The correct answer is The velocity is negative, and the acceleration is positive.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(v < 0 \\Rightarrow \\text{moving left (negative direction)}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(a = \\frac{dv}{dt} > 0 \\Rightarrow \\text{acceleration is positive}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\text{Velocity is negative, acceleration is positive}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: The velocity is negative, and the acceleration is positive. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "The velocity is negative, and the acceleration is positive",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-mc8v",
    "topicId": "y12a-exam",
    "c": "7B",
    "t": "Velocity and acceleration as derivatives",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "A $v$-$t$ graph is above the $x$-axis and has a negative gradient at $t = t_2$. Which statement is correct?",
    "opts": [
      "The velocity is positive, and the acceleration is negative",
      "The velocity is negative, and the acceleration is negative",
      "The velocity is positive, and the acceleration is positive",
      "The velocity is negative, and the acceleration is positive"
    ],
    "a": 0,
    "answer": "0",
    "hint": "$v > 0$ (above $x$-axis); gradient negative means $a < 0$.",
    "solution": "The correct answer is The velocity is positive, and the acceleration is negative.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "v > 0",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(a = \\frac{dv}{dt} < 0\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\text{Velocity positive, acceleration negative}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: The velocity is positive, and the acceleration is negative. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "The velocity is positive, and the acceleration is negative",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-mc9",
    "topicId": "y12a-exam",
    "c": "1H",
    "t": "The limiting sum of a geometric series",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "The first three terms of a geometric series are $\\dfrac{1}{x} + \\dfrac{1}{x^2} + \\dfrac{1}{x^3} + \\ldots$. If the series has a limiting sum, which of the following is true?",
    "opts": [
      "\\(x < -1\\) or \\(x > 1\\)",
      "\\(-1 < x < 1\\)",
      "\\(|x| < 1\\)",
      "None of the above"
    ],
    "a": 0,
    "answer": "0",
    "hint": "The common ratio is $r = \\dfrac{1}{x}$. A limiting sum requires $|r| < 1$.",
    "solution": "The correct answer is \\(x < -1\\) or \\(x > 1\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(r = \\frac{1/x^2}{1/x} = \\frac{1}{x}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\left|\\frac{1}{x}\\right| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(|x| > 1 \\Rightarrow x < -1 \\text{ or } x > 1\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: x < -1\\) or \\(x > 1. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(x < -1\\) or \\(x > 1\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-mc9v",
    "topicId": "y12a-exam",
    "c": "1H",
    "t": "The limiting sum of a geometric series",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "The series $1 + \\dfrac{2}{x} + \\dfrac{4}{x^2} + \\ldots$ has a common ratio of $\\dfrac{2}{x}$. For what values of $x$ does the series have a limiting sum?",
    "opts": [
      "\\(x < -2\\) or \\(x > 2\\)",
      "\\(-2 < x < 2\\)",
      "\\(|x| < 2\\)",
      "\\(x > 0\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Limiting sum requires $\\left|\\dfrac{2}{x}\\right| < 1$.",
    "solution": "The correct answer is \\(x < -2\\) or \\(x > 2\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\left|\\frac{2}{x}\\right| < 1\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(|x| > 2 \\Rightarrow x < -2 \\text{ or } x > 2\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(x < -2\\) or \\(x > 2\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: x < -2\\) or \\(x > 2. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(x < -2\\) or \\(x > 2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-mc10",
    "topicId": "y12a-exam",
    "c": "2H",
    "t": "Combinations of transformations",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "The function $y = f(x)$ has a turning point at $(6, 2)$. It is transformed to $y = 3f(-2x + 4) + 2$. Where is the new turning point?",
    "opts": [
      "\\((-1, 8)\\)",
      "\\((-7, 8)\\)",
      "\\((-10, 8)\\)",
      "\\((-16, 8)\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "For the $x$-coordinate: solve $-2x + 4 = 6$. For $y$: apply the $y$-transformation to the original $y$-value.",
    "solution": "The correct answer is \\((-1, 8)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(-2x + 4 = 6 \\Rightarrow -2x = 2 \\Rightarrow x = -1\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(y = 3(2) + 2 = 8\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\((-1, 8)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (-1, 8). Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\((-1, 8)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-mc10v",
    "topicId": "y12a-exam",
    "c": "2H",
    "t": "Combinations of transformations",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "The function $y = f(x)$ has a turning point at $(4, 3)$. It is transformed to $y = 2f(-x + 1) + 5$. Where is the new turning point?",
    "opts": [
      "\\((-3, 11)\\)",
      "\\((5, 11)\\)",
      "\\((-3, 5)\\)",
      "\\((3, 11)\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Solve $-x + 1 = 4$ for the new $x$. Apply the $y$-transformation to $y = 3$.",
    "solution": "The correct answer is \\((-3, 11)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(x = -3\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(2(3)+5 = 11\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\((-3, 11)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (-3, 11). Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\((-3, 11)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-q11aa",
    "topicId": "y12a-exam",
    "c": "9G",
    "t": "The chain rule",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "Differentiate $(3x + 4)^5$.",
    "opts": [
      "\\(-15(3x + 4)^4\\)",
      "\\(15(3x + 4)^4\\)",
      "\\(15(3x + 4)^4 + 1\\)",
      "\\(15(4x + 4)^4\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Use the chain rule: bring the power down, reduce by 1, then multiply by the derivative of the inner function.",
    "solution": "The correct answer is \\(15(3x + 4)^4\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\text{outer: } u^5, quad \\text{inner: } u = 3x+4\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(5u^4 = 5(3x+4)^4\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\frac{du}{dx} = 3\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 15(3x + 4)^4. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(15(3x + 4)^4\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-q11aav",
    "topicId": "y12a-exam",
    "c": "9G",
    "t": "The chain rule",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "Differentiate $(5x - 2)^4$.",
    "opts": [
      "\\(-20(5x - 2)^3\\)",
      "\\(20(5x - 2)^3\\)",
      "\\(20(5x - 2)^3 + 1\\)",
      "\\(40(5x - 4)^4\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Bring the power down, reduce by 1, multiply by the derivative of the inside.",
    "solution": "The correct answer is \\(20(5x - 2)^3\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(4(5x-2)^3 \\times 5\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(20(5x-2)^3\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(20(5x - 2)^3\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 20(5x - 2)^3. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(20(5x - 2)^3\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-q11ab",
    "topicId": "y12a-exam",
    "c": "9I",
    "t": "The quotient rule",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Differentiate $\\dfrac{\\tan x}{x}$.",
    "opts": [
      "\\(-\\dfrac{x\\sec^2 x - \\tan x}{x^2}\\)",
      "\\(\\dfrac{x\\sec^2 x - \\tan x}{x^2}\\)",
      "\\(\\frac{1}{x^2}\\)",
      "\\(\\frac{x^2}{x\\sec^2 x - \\tan x}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Use the quotient rule: $\\left(\\dfrac{u}{v}\\right)\\prime = \\dfrac{u\\prime v - uv\\prime}{v^2}$.",
    "solution": "The correct answer is \\(\\dfrac{x\\sec^2 x - \\tan x}{x^2}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(u = \\tan x, quad v = x\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(u' = \\sec^2 x, quad v' = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\frac{u'v - uv'}{v^2} = \\frac{x\\sec^2 x - \\tan x}{x^2}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\dfrac{x\\sec^2 x - \\tan x}{x^2}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\dfrac{x\\sec^2 x - \\tan x}{x^2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-q11abv",
    "topicId": "y12a-exam",
    "c": "9I",
    "t": "The quotient rule",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Differentiate $\\dfrac{\\sin x}{x}$.",
    "opts": [
      "\\(-\\dfrac{x\\cos x - \\sin x}{x^2}\\)",
      "\\(\\dfrac{x\\cos x - \\sin x}{x^2}\\)",
      "\\(\\frac{1}{x^2}\\)",
      "\\(\\frac{x^2}{x\\cos x - \\sin x}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Use the quotient rule with $u = \\sin x$, $v = x$.",
    "solution": "The correct answer is \\(\\dfrac{x\\cos x - \\sin x}{x^2}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(u' = \\cos x, quad v' = 1\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\frac{x\\cos x - \\sin x}{x^2}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\dfrac{x\\cos x - \\sin x}{x^2}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\dfrac{x\\cos x - \\sin x}{x^2}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\dfrac{x\\cos x - \\sin x}{x^2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-q11bi",
    "topicId": "y12a-exam",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "Differentiate \\(y = x e^{3x}\\).",
    "opts": [
      "\\(3e^{3x}\\)",
      "\\(e^{3x}+3x e^{3x}\\)",
      "\\(e^{3x}(3x+1)\\)",
      "\\(3x e^{3x}\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Product rule with \\(u=x\\) and \\(v=e^{3x}\\). Remember the chain-rule factor 3 on \\(e^{3x}\\).",
    "solution": "Let \\(u=x\\), \\(v=e^{3x}\\). Then \\(u'=1\\), \\(v'=3e^{3x}\\). Product rule: \\(y'=u'v+uv'=e^{3x}+3x e^{3x}=e^{3x}(3x+1)\\).",
    "solutionSteps": [
      {
        "explanation": "The function is a product of two factors of \\(x\\): \\(y=x\\cdot e^{3x}\\). Use the product rule \\((uv)'=u'v+uv'\\). Set \\(u=x\\) and \\(v=e^{3x}\\).",
        "workingOut": "\\(u=x,\\quad v=e^{3x}\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate each factor. For \\(u=x\\), clearly \\(u'=1\\). For \\(v=e^{3x}\\) use the chain rule: the exponent is \\(3x\\), so \\(v'=e^{3x}\\cdot 3=3e^{3x}\\).",
        "workingOut": "\\(u'=1,\\quad v'=3e^{3x}\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the product rule: \\(y'=u'v+uv'=1\\cdot e^{3x}+x\\cdot 3e^{3x}\\). Write both terms carefully — the second term is \\(3x e^{3x}\\), not \\(3e^{3x}\\) alone.",
        "workingOut": "\\(y'=e^{3x}+3x e^{3x}\\)",
        "graphData": null
      },
      {
        "explanation": "Factor out the common factor \\(e^{3x}\\): \\(y'=e^{3x}(1+3x)=e^{3x}(3x+1)\\). This matches the factored form in the options. (The expanded form \\(e^{3x}+3x e^{3x}\\) is equivalent.).",
        "workingOut": "\\(e^{3x}(3x+1)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-q11biv",
    "topicId": "y12a-exam",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "Differentiate \\(y = x e^{2x}\\).",
    "opts": [
      "\\(2e^{2x}\\)",
      "\\(e^{2x}(2x+1)\\)",
      "\\(2x e^{2x}\\)",
      "\\(e^{2x}+2x\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Product rule with \\(u=x\\), \\(v=e^{2x}\\). Chain rule on \\(e^{2x}\\) gives factor 2.",
    "solution": "\\(u=x\\), \\(v=e^{2x}\\); \\(u'=1\\), \\(v'=2e^{2x}\\). Then \\(y'=e^{2x}+2x e^{2x}=e^{2x}(2x+1)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(u=x,\\quad v=e^{2x}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(u'=1,\\quad v'=2e^{2x}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(e^{2x}+2x e^{2x}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: e^{2x}(2x+1). Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(e^{2x}(2x+1)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-q11bii",
    "topicId": "y12a-exam",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Using your result from part (b)(i), find the exact value of \\(\\displaystyle\\int_{0}^{2} e^{3x}(3+9x)\\,dx\\).",
    "opts": [
      "\\(3e^{6}\\)",
      "\\(2e^{6}\\)",
      "\\(6e^{6}\\)",
      "\\(6e^{2}\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Factor out 3 from $e^{3x}(3+9x)$ to get $3e^{3x}(3x+1)$. Recognise this as $3 \\cdot \\dfrac{d}{dx}[xe^{3x}]$.",
    "solution": "Factor: \\(e^{3x}(3+9x)=3e^{3x}(3x+1)=3\\dfrac{d}{dx}[xe^{3x}]\\). Hence \\(\\int_{0}^{2}=3[xe^{3x}]_{0}^{2}=3(2e^{6}-0)=6e^{6}\\).",
    "solutionSteps": [
      {
        "explanation": "From part (b)(i) we know (or can verify by the product rule) that \\(\\dfrac{d}{dx}[xe^{3x}]=e^{3x}(3x+1)\\). We want to relate the integrand to this derivative.",
        "workingOut": "\\(\\dfrac{d}{dx}[xe^{3x}]=e^{3x}(3x+1)\\)",
        "graphData": null
      },
      {
        "explanation": "Factor the integrand carefully: \\(e^{3x}(3+9x)=e^{3x}\\cdot 3(1+3x)=3e^{3x}(3x+1)\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(e^{3x}(3+9x)=3e^{3x}(3x+1)\\)",
        "graphData": null
      },
      {
        "explanation": "Compare with the derivative: \\(3e^{3x}(3x+1)=3\\dfrac{d}{dx}[xe^{3x}]\\). So the antiderivative of the integrand is \\(3xe^{3x}\\).",
        "workingOut": "\\(e^{3x}(3+9x)=3\\dfrac{d}{dx}[xe^{3x}]\\)",
        "graphData": null
      },
      {
        "explanation": "At the upper limit \\(x=2\\): \\(2e^{3\\cdot 2}=2e^{6}\\). At the lower limit \\(x=0\\): \\(0\\cdot e^{0}=0\\).",
        "workingOut": "\\(3\\bigl(2e^{6}-0=6e^{6}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-q11biiv",
    "topicId": "y12a-exam",
    "c": "5D",
    "t": "Integration of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Given that \\(\\dfrac{d}{dx}[xe^{2x}]=e^{2x}(2x+1)\\), find the exact value of \\(\\displaystyle\\int_{0}^{1} e^{2x}(2+4x)\\,dx\\).",
    "opts": [
      "\\(e^{2}\\)",
      "\\(2e^{2}\\)",
      "\\(4e^{2}\\)",
      "\\(2e\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Factor so you can use the given derivative as the antiderivative.",
    "solution": "\\(e^{2x}(2+4x)=2e^{2x}(2x+1)=2\\dfrac{d}{dx}[xe^{2x}]\\). So \\(\\int_{0}^{1}=2[xe^{2x}]_{0}^{1}=2(e^{2}-0)=2e^{2}\\).",
    "solutionSteps": [
      {
        "explanation": "We are given \\(\\dfrac{d}{dx}[xe^{2x}]=e^{2x}(2x+1)\\). Rewrite the integrand in terms of this derivative.",
        "workingOut": "\\(\\dfrac{d}{dx}[xe^{2x}]=e^{2x}(2x+1)\\)",
        "graphData": null
      },
      {
        "explanation": "Therefore the integrand is exactly \\(2\\dfrac{d}{dx}[xe^{2x}]\\), and the antiderivative is \\(2xe^{2x}\\).",
        "workingOut": "\\(e^{2x}(2+4x)=2\\dfrac{d}{dx}[xe^{2x}]\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate: \\(\\displaystyle\\int_{0}^{1}e^{2x}(2+4x)\\,dx=2\\bigl[xe^{2x}\\bigr]_{0}^{1}\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(2\\bigl[xe^{2x}\\bigr]_{0}^{1}\\)",
        "graphData": null
      },
      {
        "explanation": "At \\(x=1\\): \\(1\\cdot e^{2}=e^{2}\\). At \\(x=0\\): \\(0\\). So the value is \\(2(e^{2}-0)=2e^{2}\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(2e^{2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-q11ci",
    "topicId": "y12a-exam",
    "c": "6J",
    "t": "Problems with general triangles",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 180,
    "question": "A balloon drifts 100 km from point $A$ to point $B$ on a bearing of 28°. At point $B$ the balloon changes direction and drifts 50 km to point $C$ on a bearing of 114°. Draw a diagram showing the above information.",
    "answer": "Diagram should show: North arrows at \\(A\\) and \\(B\\); \\(AB = 100\\) km at bearing 28°; \\(BC = 50\\) km at bearing 114°; angle \\(ABC\\) labelled.",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "Diagram should show: North arrows at \\(A\\) and \\(B\\); \\(AB = 100\\) km at bearing 28°; \\(BC = 50\\) km at bearing 114°; angle \\(ABC\\) labelled.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\angle \\text{from North (clockwise)} = 28°\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\angle \\text{from North (clockwise)} = 114°\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\angle ABC = 180° - 28° + 114° - 180° = 86°\\quad(\\text{supplement analysis})\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Diagram should show: North arrows at \\(A\\) and \\(B\\); \\(AB = 100\\) km at bearing 28°; \\(BC = 50\\) km at bearing 114°; angle \\(ABC\\) labelled.. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "Diagram should show: North arrows at \\(A\\) and \\(B\\); \\(AB = 100\\) km at bearing 28°; \\(BC = 50\\) km at bearing 114°; angle \\(ABC\\) labelled.",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "bar2020-q11cii",
    "topicId": "y12a-exam",
    "c": "6I",
    "t": "The cosine rule",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 180,
    "question": "Show that the distance from point $A$ to point $C$ is 115 km to the nearest kilometre.",
    "answer": "The angle at \\(B\\) between \\(BA\\) and \\(BC\\) is \\(180° - 28° + 114° - 180° = 86°\\)...\n(using co-interior/alternate angles: \\(\\angle ABC = 180° - 28° + 114° = 266°\\)...\nthe interior angle is \\(360° - 266° = 94°\\)).\nUsing cosine rule: \\(AC^2 = 100^2 + 50^2 - 2(100)(50)\\cos(94°) \\approx 10000 + 2500 + 697 \\approx 13197\\), so \\(AC \\approx 114.88 \\approx 115\\) km.",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "The angle at \\(B\\) between \\(BA\\) and \\(BC\\) is \\(180° - 28° + 114° - 180° = 86°\\)...\n(using co-interior/alternate angles: \\(\\angle ABC = 180° - 28° + 114° = 266°\\)...\nthe interior angle is \\(360° - 266° = 94°\\)).\nUsing cosine rule: \\(AC^2 = 100^2 + 50^2 - 2(100)(50)\\cos(94°) \\approx 10000 + 2500 + 697 \\approx 13197\\), so \\(AC \\approx 114.88 \\approx 115\\) km.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "208°",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\angle ABC = 94°\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(AC^2 = 100^2 + 50^2 - 2(100)(50)\\cos(94°)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: The angle at \\(B\\) between \\(BA\\) and \\(BC\\) is \\(180° - 28° + 114° - 180° = 86°\\)...\n(using co-interior/alternate angles: \\(\\angle ABC = 180° - 28° + 114° = 266°\\)...\nthe interior angle is \\(360° - 266° = 94°\\)).\nUsing cosine rule: \\(AC^2 = 100^2 + 50^2 - 2(100)(50)\\cos(94°) \\approx 10000 + 2500 + 697 \\approx 13197\\), so \\(AC \\approx 114.88 \\approx 115\\) km.. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(The angle at \\(B\\) between \\(BA\\) and \\(BC\\) is \\(180° - 28° + 114° - 180° = 86°\\)...\n(using co-interior/alternate angles: \\(\\angle ABC = 180° - 28° + 114° = 266°\\)...\nthe interior angle is \\(360° - 266° = 94°\\)).\nUsing cosine rule: \\(AC^2 = 100^2 + 50^2 - 2(100)(50)\\cos(94°) \\approx 10000 + 2500 + 697 \\approx 13197\\), so \\(AC \\approx 114.88 \\approx 115\\) km.\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "bar2020-q11ciii",
    "topicId": "y12a-exam",
    "c": "6I",
    "t": "The cosine rule",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the bearing of point $A$ from point $C$. Give your answer to the nearest degree.",
    "opts": [
      "\\(-234°\\)",
      "\\(234°\\)",
      "\\(234° + 1\\)",
      "\\(444°\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Use the sine rule to find $\\angle BCA$, then work out the bearing.",
    "solution": "The correct answer is \\(234°\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\frac{\\sin(\\angle BCA)}{100} = \\frac{\\sin 94°}{115}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\sin(\\angle BCA) = \\frac{100\\sin 94°}{115} \\approx 0.868 \\Rightarrow \\angle BCA \\approx 60.1°\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\text{Bearing of } A \\text{ from } C = 294° - 60.1° \\approx 234°\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 234°. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(234°\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-q11ciiiv",
    "topicId": "y12a-exam",
    "c": "6I",
    "t": "The cosine rule",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "A boat travels 80 km from $P$ to $Q$ on a bearing of 040°. It then travels 60 km from $Q$ to $R$ on a bearing of 130°. Find the distance $PR$ to the nearest kilometre.",
    "opts": [
      "\\(100\\) km",
      "\\(100\\) km + 1",
      "\\(\\dfrac{12}{x + 2}\\)",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Find the angle at $Q$ using the bearings, then apply the cosine rule.",
    "solution": "The correct answer is \\(100\\) km.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\angle PQR = 220° - 130° = 90°\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(PR^2 = 80^2 + 60^2 = 6400 + 3600 = 10000\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(PR = 100\\text{ km}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(100\\) km. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(100\\) km",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-q12a",
    "topicId": "y12a-exam",
    "c": "5K",
    "t": "Calculus with other bases",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "Evaluate $\\displaystyle\\int 3^x\\, dx$.",
    "opts": [
      "\\(-\\dfrac{3^x}{\\ln 3} + C\\)",
      "\\(\\dfrac{3^x}{\\ln 3} + C\\)",
      "\\(\\frac{1}{\\ln 3} + C\\)",
      "\\(\\frac{\\ln 3}{3^x} + C\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "$\\displaystyle\\int a^x\\,dx = \\dfrac{a^x}{\\ln a} + C$.",
    "solution": "The correct answer is \\(\\dfrac{3^x}{\\ln 3} + C\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\int a^x\\,dx = \\frac{a^x}{\\ln a} + C\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\int 3^x\\,dx = \\frac{3^x}{\\ln 3} + C\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\dfrac{3^x}{\\ln 3} + C\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\dfrac{3^x}{\\ln 3} + C. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\dfrac{3^x}{\\ln 3} + C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-q12av",
    "topicId": "y12a-exam",
    "c": "5K",
    "t": "Calculus with other bases",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "Evaluate $\\displaystyle\\int 5^x\\, dx$.",
    "opts": [
      "\\(-\\dfrac{5^x}{\\ln 5} + C\\)",
      "\\(\\dfrac{5^x}{\\ln 5} + C\\)",
      "\\(\\frac{1}{\\ln 5} + C\\)",
      "\\(\\frac{\\ln 5}{5^x} + C\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Use the rule $\\displaystyle\\int a^x\\,dx = \\dfrac{a^x}{\\ln a} + C$.",
    "solution": "The correct answer is \\(\\dfrac{5^x}{\\ln 5} + C\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\frac{5^x}{\\ln 5} + C\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\dfrac{5^x}{\\ln 5} + C\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\dfrac{5^x}{\\ln 5} + C. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\dfrac{5^x}{\\ln 5} + C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-q12b",
    "topicId": "y12a-exam",
    "c": "5I",
    "t": "Integration of the reciprocal function",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Evaluate $\\displaystyle\\int \\dfrac{x}{x^2 + 3}\\, dx$.",
    "opts": [
      "\\(-\\dfrac{1}{2}\\ln(x^2 + 3) + C\\)",
      "\\(\\dfrac{1}{2}\\ln(x^2 + 3) + C\\)",
      "\\(\\frac{1}{2}\\ln(x^2 + 3) + C\\)",
      "\\(\\frac{2}{1}\\ln(x^2 + 3) + C\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "The numerator is (almost) the derivative of the denominator. Use the $\\displaystyle\\int \\dfrac{f\\prime(x)}{f(x)}\\,dx = \\ln|f(x)|$ rule.",
    "solution": "The correct answer is \\(\\dfrac{1}{2}\\ln(x^2 + 3) + C\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\frac{d}{dx}(x^2+3) = 2x\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\int \\frac{x}{x^2+3}\\,dx = \\frac{1}{2}\\int\\frac{2x}{x^2+3}\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(= \\frac{1}{2}\\ln(x^2+3) + C\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\dfrac{1}{2}\\ln(x^2 + 3) + C. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\dfrac{1}{2}\\ln(x^2 + 3) + C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-q12bv",
    "topicId": "y12a-exam",
    "c": "5I",
    "t": "Integration of the reciprocal function",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Evaluate $\\displaystyle\\int \\dfrac{x}{x^2 + 5}\\, dx$.",
    "opts": [
      "\\(-\\dfrac{1}{2}\\ln(x^2 + 5) + C\\)",
      "\\(\\dfrac{1}{2}\\ln(x^2 + 5) + C\\)",
      "\\(\\frac{1}{2}\\ln(x^2 + 5) + C\\)",
      "\\(\\frac{2}{1}\\ln(x^2 + 5) + C\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Numerator is half the derivative of the denominator.",
    "solution": "The correct answer is \\(\\dfrac{1}{2}\\ln(x^2 + 5) + C\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\frac{1}{2}\\int\\frac{2x}{x^2+5}\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(= \\frac{1}{2}\\ln(x^2+5) + C\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\dfrac{1}{2}\\ln(x^2 + 5) + C\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\dfrac{1}{2}\\ln(x^2 + 5) + C. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\dfrac{1}{2}\\ln(x^2 + 5) + C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-q12c",
    "topicId": "y12a-exam",
    "c": "6D",
    "t": "Integrating the trig functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Evaluate $\\displaystyle\\int_0^{\\pi/2} \\sin\\dfrac{x}{2}\\, dx$.",
    "opts": [
      "\\(-2 - \\sqrt{2}\\)",
      "\\(2 - \\sqrt{2}\\)",
      "\\(2 - \\sqrt{2} + 1\\)",
      "\\(4 - \\sqrt{4}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "$\\displaystyle\\int \\sin(ax)\\,dx = -\\dfrac{1}{a}\\cos(ax) + C$.",
    "solution": "The correct answer is \\(2 - \\sqrt{2}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\int \\sin\\frac{x}{2}\\,dx = -2\\cos\\frac{x}{2} + C\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(-2\\cos\\frac{\\pi}{4} = -2 \\cdot \\frac{1}{\\sqrt{2}} = -\\frac{2}{\\sqrt{2}} = -\\sqrt{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(-2\\cos 0 = -2\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 2 - \\sqrt{2}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(2 - \\sqrt{2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-q12cv",
    "topicId": "y12a-exam",
    "c": "6D",
    "t": "Integrating the trig functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Evaluate $\\displaystyle\\int_0^{\\pi} \\sin\\dfrac{x}{2}\\, dx$.",
    "opts": [
      "\\(-2\\)",
      "\\(1\\)",
      "\\(2\\)",
      "\\(3\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Antiderivative of $\\sin(x/2)$ is $-2\\cos(x/2)$.",
    "solution": "The correct answer is \\(2\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\Big[-2\\cos\\frac{x}{2}\\Big]_0^{\\pi}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(0\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(-2\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 2. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-q12di",
    "topicId": "y12a-exam",
    "c": "7E",
    "t": "Rates and integration",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "During a storm, water flows into a 7000 litre tank at a rate of $\\dfrac{dV}{dt}$ litres per minute, where $\\dfrac{dV}{dt} = 120 + 26t - t^2$ and $t$ is the time in minutes since the storm began. At what times is the tank filling at twice the initial rate?",
    "opts": [
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "\\(t = 6\\) minutes and \\(t = 20\\) minutes",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Find the initial rate (at $t=0$), double it, then solve for $t$.",
    "solution": "The correct answer is \\(t = 6\\) minutes and \\(t = 20\\) minutes.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\frac{dV}{dt}\\Big|_{t=0} = 120 + 0 - 0 = 120 \\text{ L/min}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(120 + 26t - t^2 = 240\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(t^2 - 26t + 120 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(t = 6\\) minutes and \\(t = 20\\) minutes. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(t = 6\\) minutes and \\(t = 20\\) minutes",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-q12div",
    "topicId": "y12a-exam",
    "c": "7E",
    "t": "Rates and integration",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Water flows into a tank at a rate $\\dfrac{dV}{dt} = 80 + 18t - t^2$ litres per minute. At what times is the tank filling at twice the initial rate?",
    "opts": [
      "\\(\\dfrac{7}{3}\\)",
      "\\(t = 4\\) minutes and \\(t = 14\\) minutes",
      "\\(\\dfrac{12}{x + 2}\\)",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Initial rate is at $t=0$. Set rate $= 2 \\times$ initial rate and solve the quadratic.",
    "solution": "The correct answer is \\(t = 4\\) minutes and \\(t = 14\\) minutes.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(80 \\text{ L/min}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(t^2 - 18t + 80 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\((t-4)(t-14) = 0 \\Rightarrow t = 4 \\text{ or } t = 14\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(t = 4\\) minutes and \\(t = 14\\) minutes. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(t = 4\\) minutes and \\(t = 14\\) minutes",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-q12dii",
    "topicId": "y12a-exam",
    "c": "7E",
    "t": "Rates and integration",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Initially the tank contains 1500 litres of water. When the storm finishes 30 minutes after it began, the tank is overflowing. How many litres of water have been lost?",
    "opts": [
      "\\(-800 litres\\)",
      "\\(800 litres\\)",
      "\\(800 litres + 1\\)",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Integrate $\\dfrac{dV}{dt}$ from 0 to 30 to find the total inflow, add the initial amount, then subtract tank capacity.",
    "solution": "The correct answer is \\(800 litres\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\int_0^{30}(120+26t-t^2)\\,dt = \\Big[120t+13t^2-\\frac{t^3}{3}\\Big]_0^{30}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(120(30)+13(900)-\\frac{27000}{3} = 3600+11700-9000 = 6300\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(1500 + 6300 = 7800 \\text{ L}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 800 litres. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(800 litres\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-q12diiv",
    "topicId": "y12a-exam",
    "c": "7E",
    "t": "Rates and integration",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "A tank holds 5000 litres and initially contains 1000 litres. Water flows in at $\\dfrac{dV}{dt} = 80 + 18t - t^2$ L/min for 20 minutes. How many litres overflow?",
    "opts": [
      "\\(-1800 litres\\)",
      "\\(1800 litres\\)",
      "\\(1800 litres + 1\\)",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Integrate the rate over 30 minutes, add the initial 500 litres, subtract the 5000 L capacity.",
    "solution": "The correct answer is \\(1800 litres\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\int_0^{30}(120+26t-t^2)\\,dt = 6300 \\text{ L}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(500 + 6300 = 6800 \\text{ L}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(6800 - 5000 = 1800 \\text{ litres}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 1800 litres. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(1800 litres\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-q13ai",
    "topicId": "y12a-exam",
    "c": "9D",
    "t": "Bivariate data",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "A scatterplot shows Push-ups ($P$) vs Sit-ups ($S$) for 10 students with data points roughly: (5,15), (10,25), (15,25), (20,25), (25,35), (30,50), (35,45), (40,50), (45,50), (50,60). Calculate the correlation coefficient correct to 2 decimal places and comment on the strength and direction.",
    "opts": [
      "\\(r \\approx 0.96\\); strong positive correlation",
      "\\(r \\approx 0.96\\); strong positive correlation + 1",
      "\\(\\dfrac{12}{x + 2}\\)",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Enter the data into your calculator and use the statistics function to find $r$.",
    "solution": "The correct answer is \\(r \\approx 0.96\\); strong positive correlation.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\((S, P) \\text{ pairs entered}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(r \\approx 0.96\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(|r| \\approx 1 \\Rightarrow \\text{strong; } r > 0 \\Rightarrow \\text{positive correlation}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(r \\approx 0.96\\); strong positive correlation. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(r \\approx 0.96\\); strong positive correlation",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-q13aiv",
    "topicId": "y12a-exam",
    "c": "9D",
    "t": "Bivariate data",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "A scatterplot of study hours ($H$) vs test score ($T$) for 8 students shows a strong upward trend. The correlation coefficient is calculated as $r = 0.91$. Comment on the strength and direction of the correlation.",
    "opts": [
      "Strong positive correlation",
      "The opposite of this statement is true.",
      "This is true only when the function is linear.",
      "This only holds for positive values of x."
    ],
    "a": 0,
    "answer": "0",
    "hint": "Consider both the magnitude ($|r|$ close to 1 means strong) and sign (positive = positive direction).",
    "solution": "The correct answer is Strong positive correlation.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\Rightarrow \\text{strong correlation}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\Rightarrow \\text{positive direction}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\text{Strong positive correlation}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Strong positive correlation. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "Strong positive correlation",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-q13aii",
    "topicId": "y12a-exam",
    "c": "9E",
    "t": "Line of best fit",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Determine the equation of the least-squares regression line for the push-ups ($P$) and sit-ups ($S$) data, expressing $P$ in terms of $S$.",
    "opts": [
      "\\(P = 0.95S + 12\\)",
      "\\(P = 0.95S + 12 + 1\\)",
      "\\(P = 0.95S + 14\\)",
      "\\(P = 0.95S - 12\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Use your calculator's linear regression function. The line is $P = bS + a$.",
    "solution": "The correct answer is \\(P = 0.95S + 12\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\text{Linear regression: } y = bx + a\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(b \\approx 0.95, quad a \\approx 12\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(P = 0.95S + 12\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: P = 0.95S + 12. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(P = 0.95S + 12\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-q13aiiv",
    "topicId": "y12a-exam",
    "c": "9E",
    "t": "Line of best fit",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "A least-squares regression line for height ($H$ cm) vs arm span ($A$ cm) is found to have gradient $1.02$ and $y$-intercept $-3.5$. Write the regression equation.",
    "opts": [
      "\\(A = 1.02H + 3.5\\)",
      "\\(A = 1.02H - 3.5\\)",
      "\\(A = 1.02H - 3.5 + 1\\)",
      "\\(A = 1.04H - 4.5\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Substitute the gradient and intercept into $y = mx + c$.",
    "solution": "The correct answer is \\(A = 1.02H - 3.5\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(A = 1.02H - 3.5\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(A = 1.02H - 3.5\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: A = 1.02H - 3.5. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(A = 1.02H - 3.5\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-q13aiii",
    "topicId": "y12a-exam",
    "c": "9E",
    "t": "Line of best fit",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "Using the regression line $P = 0.95S + 12$, predict the number of sit-ups a person can do if they can do 100 push-ups.",
    "opts": [
      "\\(-93 sit-ups\\)",
      "\\(93 sit-ups\\)",
      "\\(93 sit-ups + 1\\)",
      "\\(94 sit-ups\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Substitute $P = 100$ into the equation and solve for $S$.",
    "solution": "The correct answer is \\(93 sit-ups\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(100 = 0.95S + 12\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(0.95S = 88 \\Rightarrow S = \\frac{88}{0.95} \\approx 92.6\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(S \\approx 93 \\text{ sit-ups}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 93 sit-ups. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(93 sit-ups\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-q13aiiiv",
    "topicId": "y12a-exam",
    "c": "9E",
    "t": "Line of best fit",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "Using the regression line $A = 1.02H - 3.5$, predict the arm span of a person who is 170 cm tall.",
    "opts": [
      "\\(169.9\\) cm",
      "\\(169.9\\) cm + 1",
      "\\(\\dfrac{12}{x + 2}\\)",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Substitute $H = 170$ into the equation.",
    "solution": "The correct answer is \\(169.9\\) cm.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(A = 1.02(170) - 3.5 = 173.4 - 3.5 = 169.9 \\text{ cm}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(169.9\\) cm",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(169.9\\) cm. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(169.9\\) cm",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-q13bi",
    "topicId": "y12a-exam",
    "c": "1H",
    "t": "The limiting sum of a geometric series",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "An infinite geometric series has a first term of 8 and a limiting sum of 12. Calculate the common ratio.",
    "opts": [
      "\\(-r = \\dfrac{1}{3}\\)",
      "\\(r = \\dfrac{1}{3}\\)",
      "\\(r = \\frac{1}{3}\\)",
      "\\(r = \\frac{3}{1}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Use $S_\\infty = \\dfrac{a}{1-r}$ and solve for $r$.",
    "solution": "The correct answer is \\(r = \\dfrac{1}{3}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(S_\\infty = \\frac{a}{1-r} \\Rightarrow 12 = \\frac{8}{1-r}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(1 - r = \\frac{8}{12} = \\frac{2}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(r = 1 - \\frac{2}{3} = \\frac{1}{3}\\)",
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
    "id": "bar2020-q13biv",
    "topicId": "y12a-exam",
    "c": "1H",
    "t": "The limiting sum of a geometric series",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "An infinite geometric series has a first term of 10 and a limiting sum of 25. Calculate the common ratio.",
    "opts": [
      "\\(-r = \\dfrac{3}{5}\\)",
      "\\(r = \\dfrac{3}{5}\\)",
      "\\(r = \\frac{1}{5}\\)",
      "\\(r = \\frac{5}{3}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Use $S_\\infty = \\dfrac{a}{1-r}$ and solve for $r$.",
    "solution": "The correct answer is \\(r = \\dfrac{3}{5}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(25 = \\frac{10}{1-r}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(1-r = \\frac{2}{5} \\Rightarrow r = \\frac{3}{5}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(r = \\dfrac{3}{5}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: r = \\dfrac{3}{5}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(r = \\dfrac{3}{5}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-q13bii",
    "topicId": "y12a-exam",
    "c": "1G",
    "t": "Summing a geometric series",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "Hence, for the geometric series with first term 8 and common ratio $\\dfrac{1}{3}$, calculate the sum of the first three terms.",
    "opts": [
      "\\(-11.555555555555555\\)",
      "\\(10.555555555555555\\)",
      "\\(\\dfrac{104}{9}\\)",
      "\\(12.555555555555555\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Use $S_n = \\dfrac{a(r^n - 1)}{r - 1}$ with $n = 3$, or simply add the first three terms.",
    "solution": "The correct answer is \\(\\dfrac{104}{9}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(T_1 = 8, quad T_2 = \\frac{8}{3}, quad T_3 = \\frac{8}{9}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(8 + \\frac{8}{3} + \\frac{8}{9} = \\frac{72}{9} + \\frac{24}{9} + \\frac{8}{9} = \\frac{104}{9}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\dfrac{104}{9}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\dfrac{104}{9}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\dfrac{104}{9}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-q13biiv",
    "topicId": "y12a-exam",
    "c": "1G",
    "t": "Summing a geometric series",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "For a geometric series with first term 10 and common ratio $\\dfrac{3}{5}$, calculate the sum of the first four terms.",
    "opts": [
      "\\(-21.76\\)",
      "\\(20.76\\)",
      "\\(21.76\\)",
      "\\(22.76\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Add the first four terms: $10 + 6 + 3.6 + 2.16$.",
    "solution": "The correct answer is \\(21.76\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(10, 6, 3.6, 2.16\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(10+6+3.6+2.16 = 21.76\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(21.76\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 21.76. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(21.76\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-q13c",
    "topicId": "y12a-exam",
    "c": "1B",
    "t": "Arithmetic sequences",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "In an arithmetic series, the sum of the first 16 terms is 288 and the sixth term is 8. Find the first term and the common difference.",
    "opts": [
      "a = +12\\), \\(d = 4",
      "a = -12\\), \\(d = 4",
      "a = -12\\), \\(d = 4 + 1",
      "a = -14\\), \\(d = 4"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Use $T_6 = a + 5d$ and $S_{16} = \\dfrac{16}{2}(2a + 15d)$. Solve simultaneously.",
    "solution": "The correct answer is a = -12\\), \\(d = 4.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(a + 5d = 8 \\quad\\cdots(1)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\frac{16}{2}(2a+15d) = 288 \\Rightarrow 2a+15d = 36 \\quad\\cdots(2)\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(2(8-5d)+15d = 36 \\Rightarrow 16+5d=36 \\Rightarrow d=4\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: a = -12\\), \\(d = 4. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "a = -12\\), \\(d = 4",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-q13cv",
    "topicId": "y12a-exam",
    "c": "1B",
    "t": "Arithmetic sequences",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "In an arithmetic series, the sum of the first 10 terms is 95 and the fourth term is 14. Find the first term and the common difference.",
    "opts": [
      "a = 23\\), \\(d = +3",
      "a = 23\\), \\(d = -3",
      "a = 23\\), \\(d = -3 + 1",
      "a = 44\\), \\(d = -4"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Use $T_4 = a+3d$ and $S_{10} = \\dfrac{10}{2}(2a+9d)$. Solve simultaneously.",
    "solution": "The correct answer is a = 23\\), \\(d = -3.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(a + 3d = 14 \\quad\\cdots(1)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(5(2a+9d) = 95 \\Rightarrow 2a+9d = 19 \\quad\\cdots(2)\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(2(14-3d)+9d=19 \\Rightarrow 28+3d=19 \\Rightarrow d=-3\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: a = 23\\), \\(d = -3. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "a = 23\\), \\(d = -3",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-q14ai",
    "topicId": "y12a-exam",
    "c": "8B",
    "t": "Financial applications of geometric series",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Jenna saves for a holiday by contributing $500 every six months into an annuity that pays interest at 9% p.a., compounded every six months. Using the future value interest factor table provided (factor for 4.5%, 6 periods = 6.7169), determine how much she will have in 3 years.",
    "opts": [
      "\\(-3358.45\\)",
      "\\(3357.45\\)",
      "\\(3358.45\\)",
      "\\(3359.45\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Rate per period = 9% ÷ 2 = 4.5%. Periods = 3 × 2 = 6. Future value = contribution × factor.",
    "solution": "The correct answer is \\(3358.45\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(9\\% \\div 2 = 4.5\\%\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(3 \\times 2 = 6 \\text{ periods}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\text{Factor} = 6.7169\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 3358.45. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(3358.45\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-q14aiv",
    "topicId": "y12a-exam",
    "c": "8B",
    "t": "Financial applications of geometric series",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Marcus contributes $400 every six months into an annuity at 9% p.a. compounded every six months. Using the factor for 4.5%, 4 periods = 4.2782, find the value of his investment after 2 years.",
    "opts": [
      "\\(-1711.28\\)",
      "\\(1710.28\\)",
      "\\(1711.28\\)",
      "\\(1712.28\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Periods = 2 × 2 = 4. FV = contribution × factor.",
    "solution": "The correct answer is \\(1711.28\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\text{Factor} = 4.2782\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(FV = 400 \\times 4.2782 = 1711.28\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(1711.28\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 1711.28. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(1711.28\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-q14aii",
    "topicId": "y12a-exam",
    "c": "8B",
    "t": "Financial applications of geometric series",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Toby needs $5000 in 3 years using the same annuity (4.5% per 6 months, factor = 6.7169). How much more than Jenna must he contribute every six months?",
    "opts": [
      "\\(-244.39\\)",
      "\\(243.39\\)",
      "\\(244.39\\)",
      "\\(245.39\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Find Toby's required contribution per period using $FV = R \\times \\text{factor}$, then subtract Jenna's \\$500.",
    "solution": "The correct answer is \\(244.39\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(R = \\frac{5000}{6.7169} \\approx 744.39\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(744.39 - 500 = 244.39\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(244.39\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 244.39. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(244.39\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-q14aiiv",
    "topicId": "y12a-exam",
    "c": "8B",
    "t": "Financial applications of geometric series",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Sophia wants $3000 in 2 years using an annuity at 4.5% per 6 months (factor for 4 periods = 4.2782). How much must she contribute every 6 months?",
    "opts": [
      "\\(-701.29\\)",
      "\\(700.29\\)",
      "\\(701.29\\)",
      "\\(702.29\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Rearrange $FV = R \\times \\text{factor}$ to find $R$.",
    "solution": "The correct answer is \\(701.29\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(R = \\frac{FV}{\\text{factor}} = \\frac{3000}{4.2782}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(R \\approx 701.29\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(701.29\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 701.29. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(701.29\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-q14b",
    "topicId": "y12a-exam",
    "c": "6A",
    "t": "The trigonometric functions",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 180,
    "question": "On the axes provided, sketch the function $f(x) = 2\\sin 2x + 1$ in the domain $-\\pi \\leq x \\leq \\pi$. (You do not need to show $x$-intercepts.)",
    "answer": "Amplitude = 2, period = \\(\\pi\\), vertical shift up 1.\nKey points: max = 3 at \\(x = \\pi/4\\) and \\(x=-3\\pi/4\\); min = \\(-1\\) at \\(x = -\\pi/4\\) and \\(x = 3\\pi/4\\); \\(y\\)-intercept at \\((0,1)\\).",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "Amplitude = 2, period = \\(\\pi\\), vertical shift up 1.\nKey points: max = 3 at \\(x = \\pi/4\\) and \\(x=-3\\pi/4\\); min = \\(-1\\) at \\(x = -\\pi/4\\) and \\(x = 3\\pi/4\\); \\(y\\)-intercept at \\((0,1)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\text{Amplitude} = 2, quad \\text{Period} = \\pi, quad \\text{Shift} = +1\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(y \\in [-1, 3]\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\((0,1),\\ (\\tfrac{\\pi}{4},3),\\ (\\tfrac{\\pi}{2},1),\\ (\\tfrac{3\\pi}{4},-1),\\ (\\pi,1)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Amplitude = 2, period = \\(\\pi\\), vertical shift up 1.\nKey points: max = 3 at \\(x = \\pi/4\\) and \\(x=-3\\pi/4\\); min = \\(-1\\) at \\(x = -\\pi/4\\) and \\(x = 3\\pi/4\\); \\(y\\)-intercept at \\((0,1)\\).. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(Amplitude = 2, period = \\(\\pi\\), vertical shift up 1.\nKey points: max = 3 at \\(x = \\pi/4\\) and \\(x=-3\\pi/4\\); min = \\(-1\\) at \\(x = -\\pi/4\\) and \\(x = 3\\pi/4\\); \\(y\\)-intercept at \\((0,1)\\).\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "bar2020-q14ci",
    "topicId": "y12a-exam",
    "c": "4F",
    "t": "Finding areas by integration",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 180,
    "question": "The curve $y = (x-1)^2$ intersects the line $x + y = 3$ at points $A$ and $B$. Verify that the coordinates of $A$ are $(2, 1)$.",
    "answer": "Substitute \\(x=2\\): \\((2-1)^2 = 1\\) ✓ and \\(2+1=3\\) ✓.\nSo \\((2,1)\\) lies on both curves.",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "Substitute \\(x=2\\): \\((2-1)^2 = 1\\) ✓ and \\(2+1=3\\) ✓.\nSo \\((2,1)\\) lies on both curves.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y = (2-1)^2 = 1 \\checkmark\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(2 + 1 = 3 \\checkmark\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\therefore A = (2, 1) \\text{ is verified}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Substitute \\(x=2\\): \\((2-1)^2 = 1\\) ✓ and \\(2+1=3\\) ✓.\nSo \\((2,1)\\) lies on both curves.. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "Substitute \\(x=2\\): \\((2-1)^2 = 1\\) ✓ and \\(2+1=3\\) ✓.\nSo \\((2,1)\\) lies on both curves.",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "bar2020-q14cii",
    "topicId": "y12a-exam",
    "c": "4G",
    "t": "Areas of compound regions",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Find the shaded area enclosed by the curve $y = (x-1)^2$ and the lines $x + y = 3$ and $x = 3$.",
    "opts": [
      "-\\(\\dfrac{11}{6}\\) units²",
      "\\(\\dfrac{11}{6}\\) units²",
      "\\(\\frac{1}{6}\\) units²",
      "\\(\\frac{6}{11}\\) units²"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Integrate (top curve) $-$ (bottom curve) from $x=2$ to $x=3$. Top is the line $y=3-x$, bottom is the parabola $y=(x-1)^2$.",
    "solution": "The correct answer is \\(\\dfrac{11}{6}\\) units².",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\text{Top: } y=(x-1)^2, quad \\text{Bottom: } y=3-x\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(A = \\int_2^3 [(x-1)^2-(3-x)]\\,dx = \\int_2^3(x^2-x-2)\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\Big[\\frac{x^3}{3}-\\frac{x^2}{2}-2x\\Big]_2^3\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\dfrac{11}{6}\\) units². Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\dfrac{11}{6}\\) units²",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-q14ciiv",
    "topicId": "y12a-exam",
    "c": "4G",
    "t": "Areas of compound regions",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Find the area enclosed by the curve $y = (x-2)^2$ and the line $y = x$.",
    "opts": [
      "-\\(\\dfrac{9}{2}\\) units²",
      "\\(\\dfrac{9}{2}\\) units²",
      "\\(\\frac{1}{2}\\) units²",
      "\\(\\frac{2}{9}\\) units²"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Find the intersection points first, then integrate (top $-$ bottom).",
    "solution": "The correct answer is \\(\\dfrac{9}{2}\\) units².",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\((x-1)(x-4)=0 \\Rightarrow x=1, 4\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(A=\\int_1^4[x-(x-2)^2]\\,dx=\\int_1^4(-x^2+5x-4)\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\Big[-\\frac{x^3}{3}+\\frac{5x^2}{2}-4x\\Big]_1^4 = \\frac{8}{3}+\\frac{11}{6} = \\frac{9}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\dfrac{9}{2}\\) units². Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\dfrac{9}{2}\\) units²",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-q15ai",
    "topicId": "y12a-exam",
    "c": "3B",
    "t": "Stationary points and turning points",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Let $f(x) = 3x^4 - 8x^3 + 6$. Find the coordinates of the stationary points of $y = f(x)$ and determine their nature.",
    "opts": [
      "Horizontal point of inflection at \\((0, 6)\\); local minimum at \\((2, -10)\\)",
      "Local maximum at \\((0, 6)\\); local minimum at \\((2, -10)\\)",
      "Local minimum at \\((0, 6)\\); local maximum at \\((2, -10)\\)",
      "Horizontal point of inflection at \\((0, 6)\\); local maximum at \\((2, -10)\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Find $f'(x)$, set equal to zero, then use $f''(x)$ to determine the nature.",
    "solution": "The correct answer is Horizontal point of inflection at \\((0, 6)\\); local minimum at \\((2, -10)\\).",
    "solutionSteps": [
      {
        "explanation": "Step 1: To find the stationary points, find the first derivative \\(f'(x)\\) and set it to zero.",
        "workingOut": "$$ \\begin{aligned} f(x) &= 3x^4 - 8x^3 + 6 \\\\\\\\ f'(x) &= 12x^3 - 24x^2 \\\\\\\\ 12x^2(x - 2) &= 0 \\implies x = 0 \\text{ or } x = 2 \\end{aligned} $$"
      },
      {
        "explanation": "Step 2: Substitute these \\(x\\)-values back into \\(f(x)\\) to find the corresponding \\(y\\)-coordinates.",
        "workingOut": "$$ \\begin{aligned} f(0) &= 3(0)^4 - 8(0)^3 + 6 = 6 \\implies (0, 6) \\\\\\\\ f(2) &= 3(2)^4 - 8(2)^3 + 6 = 3(16) - 8(8) + 6 = 48 - 64 + 6 = -10 \\implies (2, -10) \\end{aligned} $$"
      },
      {
        "explanation": "Step 3: Find the second derivative \\(f''(x)\\) to test the nature of the stationary points.",
        "workingOut": "$$ \\begin{aligned} f''(x) &= \\frac{d}{dx}(12x^3 - 24x^2) = 36x^2 - 48x \\\\\\\\ x = 2: \\quad f''(2) &= 36(2)^2 - 48(2) = 144 - 96 = 48 > 0 \\implies \\text{Local Minimum at } (2, -10) \\end{aligned} $$"
      },
      {
        "explanation": "Step 4: At \\(x = 0\\), the second derivative is \\(f''(0) = 0\\), so the test is inconclusive. We must use the first derivative test to check the gradient around \\(x = 0\\).",
        "workingOut": "$$ \\begin{aligned} \\text{Test } x = -1: \\quad f'(-1) &= 12(-1)^3 - 24(-1)^2 = -12 - 24 = -36 < 0 \\\\\\\\ \\text{Test } x = 1: \\quad f'(1) &= 12(1)^3 - 24(1)^2 = 12 - 24 = -12 < 0 \\end{aligned} $$"
      },
      {
        "explanation": "Step 5: Since the gradient is negative on both sides of \\(x = 0\\), it does not change sign. Therefore, \\((0, 6)\\) is a horizontal point of inflection.",
        "workingOut": "$$ \\therefore \\text{Horizontal point of inflection at } (0, 6) \\text{ and local minimum at } (2, -10) $$"
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-q15aiv",
    "topicId": "y12a-exam",
    "c": "3B",
    "t": "Stationary points and turning points",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Let $f(x) = 2x^4 - 8x^3 + 5$. Find the coordinates of the stationary points and determine their nature.",
    "opts": [
      "Horizontal point of inflection at \\((0, 5)\\); minimum at \\((3, -49)\\)",
      "The opposite of this statement is true.",
      "This is true only when the function is linear.",
      "This only holds for positive values of x."
    ],
    "a": 0,
    "answer": "0",
    "hint": "Find $f'(x)$, factorise, then use the second derivative test.",
    "solution": "The correct answer is Horizontal point of inflection at \\((0, 5)\\); minimum at \\((3, -49)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(f'(x)=8x^3-24x^2=8x^2(x-3)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "x=0, quad x=3",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\text{Horizontal POI at }(0,5)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Horizontal point of inflection at \\((0, 5)\\); minimum at \\((3, -49)\\). Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "Horizontal point of inflection at \\((0, 5)\\); minimum at \\((3, -49)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-q15aii",
    "topicId": "y12a-exam",
    "c": "3E",
    "t": "Systematic curve sketching with the derivative",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 180,
    "question": "Hence, sketch the graph of $y = f(x) = 3x^4 - 8x^3 + 6$ showing all stationary points.",
    "answer": "See the solution for the full sketch.",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "A sketch of \\(y = f(x)\\) showing a horizontal point of inflection at \\((0, 6)\\) and a local minimum at \\((2, -10)\\). The curve decreases for \\(x < 2\\) and increases for \\(x > 2\\).<br/>\n<div style=\"display:flex; justify-content:center; margin: 16px 0;\">\n<svg viewBox=\"0 0 400 300\" width=\"100%\" style=\"max-width:400px; background-color:white; border:1px solid #ccc; border-radius:8px;\">\n  <!-- Axes -->\n  <line x1=\"20\" y1=\"220\" x2=\"380\" y2=\"220\" stroke=\"#333\" stroke-width=\"2\" />\n  <line x1=\"140\" y1=\"20\" x2=\"140\" y2=\"280\" stroke=\"#333\" stroke-width=\"2\" />\n  \n  <!-- Labels -->\n  <text x=\"370\" y=\"210\" fill=\"#333\" font-size=\"14\" font-family=\"sans-serif\">x</text>\n  <text x=\"150\" y=\"30\" fill=\"#333\" font-size=\"14\" font-family=\"sans-serif\">y</text>\n  <text x=\"125\" y=\"235\" fill=\"#333\" font-size=\"12\" font-family=\"sans-serif\">O</text>\n\n  <!-- Curve -->\n  <polyline fill=\"none\" stroke=\"#2563eb\" stroke-width=\"3\" points=\"56.0,11.6 59.5,32.7 63.0,51.7 66.5,68.7 70.0,84.0 73.5,97.6 77.0,109.6 80.5,120.2 84.0,129.4 87.5,137.4 91.0,144.3 94.5,150.1 98.0,155.1 101.5,159.2 105.0,162.5 108.5,165.2 112.0,167.3 115.5,168.9 119.0,170.1 122.5,170.9 126.0,171.4 129.5,171.8 133.0,171.9 136.5,172.0 140.0,172.0 143.5,172.0 147.0,172.1 150.5,172.2 154.0,172.5 157.5,172.9 161.0,173.5 164.5,174.4 168.0,175.5 171.5,176.8 175.0,178.5 178.5,180.5 182.0,182.7 185.5,185.3 189.0,188.2 192.5,191.4 196.0,194.9 199.5,198.8 203.0,202.9 206.5,207.3 210.0,212.0 213.5,216.9 217.0,222.0 220.5,227.4 224.0,232.8 227.5,238.4 231.0,244.1 234.5,249.7 238.0,255.4 241.5,261.0 245.0,266.5 248.5,271.8 252.0,276.9 255.5,281.6 259.0,286.0 262.5,289.9 266.0,293.3 269.5,296.1 273.0,298.2 276.5,299.5 280.0,300.0 283.5,299.5 287.0,297.9 290.5,295.2 294.0,291.3 297.5,285.9 301.0,279.1 304.5,270.6 308.0,260.5 311.5,248.5 315.0,234.5 318.5,218.4 322.0,200.1 325.5,179.4 329.0,156.3 332.5,130.4 336.0,101.8 339.5,70.1 343.0,35.4\" />\n  \n  <!-- Horizontal POI (0, 6) -->\n  <circle cx=\"140\" cy=\"172\" r=\"4\" fill=\"#dc2626\" />\n  <text x=\"75\" y=\"165\" fill=\"#dc2626\" font-size=\"12\" font-family=\"sans-serif\">POI (0, 6)</text>\n\n  <!-- Local Min (2, -10) -->\n  <circle cx=\"280\" cy=\"296\" r=\"4\" fill=\"#dc2626\" /> <!-- Note: (2,-10) maps to Y=300 exactly. Let's adjust slightly for text -->\n  <text x=\"285\" y=\"285\" fill=\"#dc2626\" font-size=\"12\" font-family=\"sans-serif\">Min (2, -10)</text>\n</svg>\n</div>\n",
    "solutionSteps": [
      {
        "explanation": "Step 1: From part (a)(i), gather the critical points we found. We have a horizontal point of inflection at \\((0, 6)\\) and a local minimum at \\((2, -10)\\).",
        "workingOut": "$$ \\text{Stationary points: } (0, 6) \\text{ (Horizontal POI) and } (2, -10) \\text{ (Local Minimum)} $$"
      },
      {
        "explanation": "Step 2: Determine the behavior of the curve as \\(x \\to \\pm\\infty\\). Since the leading term is \\(3x^4\\) (which has an even power and positive coefficient), the curve will go to \\(+\\infty\\) on both sides.",
        "workingOut": "$$ f(x) \\to +\\infty \\text{ as } x \\to \\pm\\infty $$"
      },
      {
        "explanation": "Step 3: Plot the points \\((0, 6)\\) and \\((2, -10)\\) on a Cartesian plane. The curve comes down from the left, flattens out temporarily at \\((0, 6)\\) but continues downwards, reaches the minimum at \\((2, -10)\\), and then rises steeply to the right.",
        "workingOut": "\n<div style=\"display:flex; justify-content:center; margin: 16px 0;\">\n<svg viewBox=\"0 0 400 300\" width=\"100%\" style=\"max-width:400px; background-color:white; border:1px solid #ccc; border-radius:8px;\">\n  <!-- Axes -->\n  <line x1=\"20\" y1=\"220\" x2=\"380\" y2=\"220\" stroke=\"#333\" stroke-width=\"2\" />\n  <line x1=\"140\" y1=\"20\" x2=\"140\" y2=\"280\" stroke=\"#333\" stroke-width=\"2\" />\n  \n  <!-- Labels -->\n  <text x=\"370\" y=\"210\" fill=\"#333\" font-size=\"14\" font-family=\"sans-serif\">x</text>\n  <text x=\"150\" y=\"30\" fill=\"#333\" font-size=\"14\" font-family=\"sans-serif\">y</text>\n  <text x=\"125\" y=\"235\" fill=\"#333\" font-size=\"12\" font-family=\"sans-serif\">O</text>\n\n  <!-- Curve -->\n  <polyline fill=\"none\" stroke=\"#2563eb\" stroke-width=\"3\" points=\"56.0,11.6 59.5,32.7 63.0,51.7 66.5,68.7 70.0,84.0 73.5,97.6 77.0,109.6 80.5,120.2 84.0,129.4 87.5,137.4 91.0,144.3 94.5,150.1 98.0,155.1 101.5,159.2 105.0,162.5 108.5,165.2 112.0,167.3 115.5,168.9 119.0,170.1 122.5,170.9 126.0,171.4 129.5,171.8 133.0,171.9 136.5,172.0 140.0,172.0 143.5,172.0 147.0,172.1 150.5,172.2 154.0,172.5 157.5,172.9 161.0,173.5 164.5,174.4 168.0,175.5 171.5,176.8 175.0,178.5 178.5,180.5 182.0,182.7 185.5,185.3 189.0,188.2 192.5,191.4 196.0,194.9 199.5,198.8 203.0,202.9 206.5,207.3 210.0,212.0 213.5,216.9 217.0,222.0 220.5,227.4 224.0,232.8 227.5,238.4 231.0,244.1 234.5,249.7 238.0,255.4 241.5,261.0 245.0,266.5 248.5,271.8 252.0,276.9 255.5,281.6 259.0,286.0 262.5,289.9 266.0,293.3 269.5,296.1 273.0,298.2 276.5,299.5 280.0,300.0 283.5,299.5 287.0,297.9 290.5,295.2 294.0,291.3 297.5,285.9 301.0,279.1 304.5,270.6 308.0,260.5 311.5,248.5 315.0,234.5 318.5,218.4 322.0,200.1 325.5,179.4 329.0,156.3 332.5,130.4 336.0,101.8 339.5,70.1 343.0,35.4\" />\n  \n  <!-- Horizontal POI (0, 6) -->\n  <circle cx=\"140\" cy=\"172\" r=\"4\" fill=\"#dc2626\" />\n  <text x=\"75\" y=\"165\" fill=\"#dc2626\" font-size=\"12\" font-family=\"sans-serif\">POI (0, 6)</text>\n\n  <!-- Local Min (2, -10) -->\n  <circle cx=\"280\" cy=\"296\" r=\"4\" fill=\"#dc2626\" /> <!-- Note: (2,-10) maps to Y=300 exactly. Let's adjust slightly for text -->\n  <text x=\"285\" y=\"285\" fill=\"#dc2626\" font-size=\"12\" font-family=\"sans-serif\">Min (2, -10)</text>\n</svg>\n</div>\n"
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "bar2020-q15bi",
    "topicId": "y12a-exam",
    "c": "10A",
    "t": "Probability distributions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "For the probability distribution below where $E(X) = 3.34$:\n\n| $x$ | 1 | 3 | $a$ | 6 |\n|---|---|---|---|---|\n| $p(x)$ | 0.4 | 0.12 | 0.3 | $b$ |\n\nEvaluate $a$ and $b$.",
    "opts": [
      "\\(\\dfrac{12}{x + 2}\\)",
      "\\(\\dfrac{13}{x + 3}\\)",
      "a = 5\\), \\(b = 0.18",
      "a = 5\\), \\(b = 0.18 + 1"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Use $\\sum p(x) = 1$ to find $b$, then $E(X) = \\sum x \\cdot p(x) = 3.34$ to find $a$.",
    "solution": "The correct answer is a = 5\\), \\(b = 0.18.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(0.4+0.12+0.3+b=1 \\Rightarrow b=0.18\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(1(0.4)+3(0.12)+a(0.3)+6(0.18)=3.34\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(0.4+0.36+0.3a+1.08=3.34 \\Rightarrow 0.3a=1.5\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: a = 5\\), \\(b = 0.18. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "a = 5\\), \\(b = 0.18",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-q15biv",
    "topicId": "y12a-exam",
    "c": "10A",
    "t": "Probability distributions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "For the probability distribution below where $E(X) = 2.8$:\n\n| $x$ | 1 | $a$ | 4 | 6 |\n|---|---|---|---|---|\n| $p(x)$ | 0.3 | 0.4 | 0.2 | $b$ |\n\nEvaluate $a$ and $b$.",
    "opts": [
      "\\(\\dfrac{13}{x + 3}\\)",
      "a = 2\\), \\(b = 0.1",
      "a = 2\\), \\(b = 0.1 + 1",
      "a = 4\\), \\(b = 0.1"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Use $\\sum p(x)=1$ first, then $E(X)=2.8$.",
    "solution": "The correct answer is a = 2\\), \\(b = 0.1.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(b=1-0.3-0.4-0.2=0.1\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(1(0.3)+a(0.4)+4(0.2)+6(0.1)=2.5\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(1.7+0.4a=2.5 \\Rightarrow 0.4a=0.8 \\Rightarrow a=2\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: a = 2\\), \\(b = 0.1. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "a = 2\\), \\(b = 0.1",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-q15bii",
    "topicId": "y12a-exam",
    "c": "10C",
    "t": "Mean and variance of a distribution",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "For the distribution with $x \\in \\{1, 3, 5, 6\\}$, $p(x) \\in \\{0.4, 0.12, 0.3, 0.18\\}$ and $E(X) = 3.34$, evaluate the Variance.",
    "opts": [
      "\\(\\dfrac{13}{x + 3}\\)",
      "\\(\\text{Var}(X) \\approx 4.30\\)",
      "\\(\\text{Var}(X) \\approx 4.30 + 1\\)",
      "\\(\\text{Var}(X) \\approx 4.40\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Use $\\text{Var}(X) = E(X^2) - [E(X)]^2$.",
    "solution": "The correct answer is \\(\\text{Var}(X) \\approx 4.30\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(1(0.4)+9(0.12)+25(0.3)+36(0.18)=0.4+1.08+7.5+6.48=15.46\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(15.46 - (3.34)^2 = 15.46 - 11.1556\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\text{Var}(X) \\approx 4.30\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\text{Var}(X) \\approx 4.30. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\text{Var}(X) \\approx 4.30\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-q15biiv",
    "topicId": "y12a-exam",
    "c": "10C",
    "t": "Mean and variance of a distribution",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "A discrete random variable $X$ has the distribution $P(X=1)=0.3$, $P(X=2)=0.4$, $P(X=4)=0.2$, $P(X=6)=0.1$. Find the variance of $X$.",
    "opts": [
      "\\(\\dfrac{13}{x + 3}\\)",
      "\\(\\text{Var}(X) = 2.45\\)",
      "\\(\\text{Var}(X) = 2.45 + 1\\)",
      "\\(\\text{Var}(X) = 4.45\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "$E(X) = \\sum xp(x)$, then $\\text{Var}(X) = E(X^2) - [E(X)]^2$.",
    "solution": "The correct answer is \\(\\text{Var}(X) = 2.45\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(E(X)=2.5\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(E(X^2)=8.7\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\text{Var}(X)=2.45\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\text{Var}(X) = 2.45. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\text{Var}(X) = 2.45\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-q16ai",
    "topicId": "y12a-exam",
    "c": "5C",
    "t": "Applications of differentiation",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 180,
    "question": "Due to overfishing, the number $N$ of a species of fish drops exponentially according to $\\dfrac{dN}{dt} = -kN$. Show that $N = Ae^{-kt}$ satisfies this equation.",
    "answer": "Given \\(N = Ae^{-kt}\\).\n\\(\\text{LHS} = \\dfrac{dN}{dt} = A \\cdot (-k)e^{-kt} = -kAe^{-kt}.\\)\n\\(\\text{RHS} = -kN = -k(Ae^{-kt}) = -kAe^{-kt}.\\)\n\\(\\text{LHS} = \\text{RHS}.\\)\nTherefore \\(N = Ae^{-kt}\\) satisfies \\(\\dfrac{dN}{dt} = -kN\\).",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "Given \\(N = Ae^{-kt}\\).\n\\(\\text{LHS} = \\dfrac{dN}{dt} = A \\cdot (-k)e^{-kt} = -kAe^{-kt}.\\)\n\\(\\text{RHS} = -kN = -k(Ae^{-kt}) = -kAe^{-kt}.\\)\n\\(\\text{LHS} = \\text{RHS}.\\)\nTherefore \\(N = Ae^{-kt}\\) satisfies \\(\\dfrac{dN}{dt} = -kN\\).",
    "solutionSteps": [
      {
        "explanation": "We must show that \\(N = Ae^{-kt}\\) satisfies the differential equation \\(\\dfrac{dN}{dt} = -kN\\). Start from the given expression for \\(N\\).",
        "workingOut": "\\(N = Ae^{-kt}\\)",
        "graphData": null
      },
      {
        "explanation": "Left-hand side: differentiate with respect to \\(t\\). The constant \\(A\\) multiplies the chain-rule factor \\(-k\\) from the exponent \\(-kt\\).",
        "workingOut": "\\(\\text{LHS} = \\dfrac{dN}{dt} = A \\cdot (-k)e^{-kt} = -kAe^{-kt}\\)",
        "graphData": null
      },
      {
        "explanation": "Both sides equal \\(-kAe^{-kt}\\). Therefore \\(\\text{LHS} = \\text{RHS}\\), and \\(N = Ae^{-kt}\\) satisfies the DE.",
        "workingOut": "\\(\\text{LHS} = \\text{RHS} = -kN\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "bar2020-q16aii",
    "topicId": "y12a-exam",
    "c": "5C",
    "t": "Applications of differentiation",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 180,
    "question": "In 1930 there were 25 000 fish ($t = 0$) and by 2020 there were only 2000 fish. Find the value of $A$ and show that $k \\approx 0.028$.",
    "answer": "At \\(t = 0\\): \\(N = A e^{0} = A = 25\\,000\\).\nSo \\(A = 25\\,000\\).\nFrom 1930 to 2020 is 90 years, so \\(t = 90\\) and \\(N = 2000\\):\n\\(2000 = 25\\,000\\,e^{-90k}\\)\n\\(e^{-90k} = \\dfrac{2000}{25\\,000} = 0.08\\)\n\\(-90k = \\ln(0.08)\\)\n\\(k = -\\dfrac{\\ln(0.08)}{90} = \\dfrac{-\\ln(0.08)}{90}\\)\n\\(\\ln(0.08) \\approx -2.5257\\), so \\(k \\approx \\dfrac{2.5257}{90} \\approx 0.02806 \\approx 0.028\\).",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "At \\(t = 0\\): \\(N = A e^{0} = A = 25\\,000\\).\nSo \\(A = 25\\,000\\).\nFrom 1930 to 2020 is 90 years, so \\(t = 90\\) and \\(N = 2000\\):\n\\(2000 = 25\\,000\\,e^{-90k}\\)\n\\(e^{-90k} = \\dfrac{2000}{25\\,000} = 0.08\\)\n\\(-90k = \\ln(0.08)\\)\n\\(k = -\\dfrac{\\ln(0.08)}{90} = \\dfrac{-\\ln(0.08)}{90}\\)\n\\(\\ln(0.08) \\approx -2.5257\\), so \\(k \\approx \\dfrac{2.5257}{90} \\approx 0.02806 \\approx 0.028\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(A = 25\\,000\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(2000 = 25\\,000\\,e^{-90k}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(e^{-90k} = \\dfrac{2000}{25\\,000} = 0.08\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: At \\(t = 0\\): \\(N = A e^{0} = A = 25\\,000\\).\nSo \\(A = 25\\,000\\).\nFrom 1930 to 2020 is 90 years, so \\(t = 90\\) and \\(N = 2000\\):\n\\(2000 = 25\\,000\\,e^{-90k}\\)\n\\(e^{-90k} = \\dfrac{2000}{25\\,000} = 0.08\\)\n\\(-90k = \\ln(0.08)\\)\n\\(k = -\\dfrac{\\ln(0.08)}{90} = \\dfrac{-\\ln(0.08)}{90}\\)\n\\(\\ln(0.08) \\approx -2.5257\\), so \\(k \\approx \\dfrac{2.5257}{90} \\approx 0.02806 \\approx 0.028\\).. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "At \\(t = 0\\): \\(N = A e^{0} = A = 25\\,000\\).\nSo \\(A = 25\\,000\\).\nFrom 1930 to 2020 is 90 years, so \\(t = 90\\) and \\(N = 2000\\):\n\\(2000 = 25\\,000\\,e^{-90k}\\)\n\\(e^{-90k} = \\dfrac{2000}{25\\,000} = 0.08\\)\n\\(-90k = \\ln(0.08)\\)\n\\(k = -\\dfrac{\\ln(0.08)}{90} = \\dfrac{-\\ln(0.08)}{90}\\)\n\\(\\ln(0.08) \\approx -2.5257\\), so \\(k \\approx \\dfrac{2.5257}{90} \\approx 0.02806 \\approx 0.028\\).",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "bar2020-q16aiii",
    "topicId": "y12a-exam",
    "c": "5C",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "This species of fish will be declared extinct in this bay when the number drops below 500. Using $N = 25000e^{-0.028t}$, in which year will this occur?",
    "opts": [
      "\\(2020\\)",
      "\\(2050\\)",
      "\\(2070\\)",
      "\\(2100\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Solve \\(25000e^{-0.028t}=500\\) for \\(t\\), then add to 1930.",
    "solution": "Set \\(N=500\\): \\(25\\,000e^{-0.028t}=500\\Rightarrow e^{-0.028t}=0.02\\). \\(t=-\\dfrac{\\ln(0.02)}{0.028}\\approx 139.7\\approx 140\\) years. Year \\(=1930+140=2070\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(25\\,000e^{-0.028t} = 500\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(e^{-0.028t} = \\dfrac{500}{25\\,000} = 0.02\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(-0.028t = \\ln(0.02) \\approx -3.9120\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 2070. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(2070\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-q16aiiiv",
    "topicId": "y12a-exam",
    "c": "5C",
    "t": "Applications of differentiation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "A population decays according to $P = 10000e^{-0.05t}$ where $t$ is years from 2000. In which year will the population drop below 1000?",
    "opts": [
      "\\(2030\\)",
      "\\(2046\\)",
      "\\(2050\\)",
      "\\(2060\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Solve \\(10000e^{-0.05t}=1000\\) for \\(t\\), then add to 2000.",
    "solution": "Set \\(P=1000\\): \\(e^{-0.05t}=0.1\\Rightarrow t=-\\dfrac{\\ln(0.1)}{0.05}\\approx 46\\). Year \\(=2000+46=2046\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(10\\,000e^{-0.05t} = 1000\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(e^{-0.05t} = 0.1\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(t = -\\dfrac{\\ln(0.1)}{0.05} \\approx \\dfrac{2.3026}{0.05} \\approx 46.05 \\approx 46\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 2046. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(2046\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-q16b",
    "topicId": "y12a-exam",
    "c": "11C",
    "t": "Arcs and sectors",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "The angle of a sector in a circle of radius 6 cm is 40°. Find the exact length of arc $AB$.",
    "opts": [
      "-\\(\\dfrac{4\\pi}{3}\\) cm",
      "\\(\\dfrac{4\\pi}{3}\\) cm",
      "\\(\\frac{1}{3}\\) cm",
      "\\(\\frac{3}{4\\pi}\\) cm"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Convert 40° to radians, then use $l = r\\theta$.",
    "solution": "The correct answer is \\(\\dfrac{4\\pi}{3}\\) cm.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\theta = 40 \\times \\frac{\\pi}{180} = \\frac{2\\pi}{9}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(l = 6 \\times \\frac{2\\pi}{9} = \\frac{12\\pi}{9} = \\frac{4\\pi}{3} \\text{ cm}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\dfrac{4\\pi}{3}\\) cm",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\dfrac{4\\pi}{3}\\) cm. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\dfrac{4\\pi}{3}\\) cm",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-q16bv",
    "topicId": "y12a-exam",
    "c": "11C",
    "t": "Arcs and sectors",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "A sector has radius 9 cm and angle 60°. Find the exact arc length.",
    "opts": [
      "\\(3\\pi\\) cm",
      "\\(3\\pi\\) cm + 1",
      "\\(4\\pi\\) cm",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Convert 60° to radians ($= \\pi/3$), then $l = r\\theta$.",
    "solution": "The correct answer is \\(3\\pi\\) cm.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\theta = \\frac{\\pi}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(l = 9 \\times \\frac{\\pi}{3} = 3\\pi \\text{ cm}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(3\\pi\\) cm",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(3\\pi\\) cm. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(3\\pi\\) cm",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-q16c",
    "topicId": "y12a-exam",
    "c": "6G",
    "t": "Trigonometric equations",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Solve $2\\cos^2 x - \\cos x = 1$ for $0 \\leq x \\leq 2\\pi$.",
    "opts": [
      "\\(-x = 0,\\ \\dfrac{2\\pi}{3},\\ \\dfrac{4\\pi}{3},\\ 2\\pi\\)",
      "\\(x = 0,\\ \\dfrac{2\\pi}{3},\\ \\dfrac{4\\pi}{3},\\ 2\\pi\\)",
      "\\(x = 0,\\ \\frac{1}{3},\\ \\dfrac{4\\pi}{3},\\ 2\\pi\\)",
      "\\(x = 0,\\ \\frac{3}{2\\pi},\\ \\dfrac{4\\pi}{3},\\ 2\\pi\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Rearrange to $2\\cos^2 x - \\cos x - 1 = 0$ and treat as a quadratic in $\\cos x$.",
    "solution": "The correct answer is \\(x = 0,\\ \\dfrac{2\\pi}{3},\\ \\dfrac{4\\pi}{3},\\ 2\\pi\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(2\\cos^2 x - \\cos x - 1 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\((2u+1)(u-1)=0 \\Rightarrow u = -\\tfrac{1}{2} \\text{ or } u=1\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(x = \\frac{2\\pi}{3},\\ \\frac{4\\pi}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: x = 0,\\ \\dfrac{2\\pi}{3},\\ \\dfrac{4\\pi}{3},\\ 2\\pi. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(x = 0,\\ \\dfrac{2\\pi}{3},\\ \\dfrac{4\\pi}{3},\\ 2\\pi\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-q16cv",
    "topicId": "y12a-exam",
    "c": "6G",
    "t": "Trigonometric equations",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Solve $2\\sin^2 x + \\sin x - 1 = 0$ for $0 \\leq x \\leq 2\\pi$.",
    "opts": [
      "\\(-x = \\dfrac{\\pi}{6},\\ \\dfrac{5\\pi}{6},\\ \\dfrac{3\\pi}{2}\\)",
      "\\(x = \\dfrac{\\pi}{6},\\ \\dfrac{5\\pi}{6},\\ \\dfrac{3\\pi}{2}\\)",
      "\\(x = \\frac{1}{6},\\ \\dfrac{5\\pi}{6},\\ \\dfrac{3\\pi}{2}\\)",
      "\\(x = \\frac{6}{\\pi},\\ \\dfrac{5\\pi}{6},\\ \\dfrac{3\\pi}{2}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Factorise as a quadratic in $\\sin x$.",
    "solution": "The correct answer is \\(x = \\dfrac{\\pi}{6},\\ \\dfrac{5\\pi}{6},\\ \\dfrac{3\\pi}{2}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\((2\\sin x-1)(\\sin x+1)=0\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(x = \\frac{\\pi}{6},\\ \\frac{5\\pi}{6}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(x = \\frac{3\\pi}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: x = \\dfrac{\\pi}{6},\\ \\dfrac{5\\pi}{6},\\ \\dfrac{3\\pi}{2}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(x = \\dfrac{\\pi}{6},\\ \\dfrac{5\\pi}{6},\\ \\dfrac{3\\pi}{2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-q17a",
    "topicId": "y12a-exam",
    "c": "4E",
    "t": "The absolute value function",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "The function $f(x) = |x|$ is transformed and the new equation is of the form $y = kf(x+b)+c$. The graph of the new function has its vertex at $(2, 1)$, opens downward, and has a \"width\" twice that of $y=|x|$ (i.e. gradient $\\pm\\frac{1}{2}$). What are the values of $k$, $b$ and $c$?",
    "opts": [
      "\\(k = -\\dfrac{1}{2}\\), \\(b = -2\\), \\(c = 1\\)",
      "\\(k = -\\dfrac{1}{2}\\), \\(b = 2\\), \\(c = 1\\)",
      "\\(k = \\dfrac{1}{2}\\), \\(b = -2\\), \\(c = 1\\)",
      "\\(k = -2\\), \\(b = -2\\), \\(c = 1\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "The vertex of $y=k|x+b|+c$ is at $(-b,c)$. Flipped (downward) means $k<0$. The gradient magnitude gives $|k|$.",
    "solution": "The correct answer is \\(k = -\\dfrac{1}{2}\\), \\(b = -2\\), \\(c = 1\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "b = -2, quad c = 1",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "k < 0",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(k = -\\frac{1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: k = -\\dfrac{1}{2}\\), \\(b = -2\\), \\(c = 1. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(k = -\\dfrac{1}{2}\\), \\(b = -2\\), \\(c = 1\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-q17av",
    "topicId": "y12a-exam",
    "c": "4E",
    "t": "The absolute value function",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "A transformed absolute value function has equation $y = kf(x+b)+c$ where $f(x)=|x|$. Its vertex is at $(-1, 3)$, it opens upward, and its gradient is $\\pm 2$. Find $k$, $b$, and $c$.",
    "opts": [
      "\\(k = 2\\), \\(b = 1\\), \\(c = 3\\)",
      "\\(k = -2\\), \\(b = 1\\), \\(c = 3\\)",
      "\\(k = 2\\), \\(b = -1\\), \\(c = 3\\)",
      "\\(k = 2\\), \\(b = 1\\), \\(c = -3\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Vertex at $(-b,c)=(-1,3)$. Upward means $k>0$. Gradient $=2$ means $|k|=2$.",
    "solution": "The correct answer is \\(k = 2\\), \\(b = 1\\), \\(c = 3\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "b=1, quad c=3",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(k=2\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(k = 2\\), \\(b = 1\\), \\(c = 3\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: k = 2\\), \\(b = 1\\), \\(c = 3. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(k = 2\\), \\(b = 1\\), \\(c = 3\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-q17bi",
    "topicId": "y12a-exam",
    "c": "8E",
    "t": "Paying off a loan",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 180,
    "question": "When Josephine started a new job, \\$450 was deposited into her superannuation fund at the beginning of each month. The money was invested at 0.5% per month, compounded monthly. Let $P$ be the value of the investment after 300 months. Show that $P = \\$313\\,406.52$.",
    "answer": "\\(A_1 = 450(1.005)^{300}\\), \\(A_2 = 450(1.005)^{299}\\), …, \\(A_{300} = 450(1.005)^1\\).\nSum (GP, \\(a=1.005\\), \\(r=1.005\\), \\(n=300\\)): \\(P = 450 \\times \\dfrac{1.005(1.005^{300}-1)}{0.005} \\approx 450 \\times 696.45 \\approx \\\\)313\\,406.52.",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "\\(A_1 = 450(1.005)^{300}\\), \\(A_2 = 450(1.005)^{299}\\), …, \\(A_{300} = 450(1.005)^1\\).\nSum (GP, \\(a=1.005\\), \\(r=1.005\\), \\(n=300\\)): \\(P = 450 \\times \\dfrac{1.005(1.005^{300}-1)}{0.005} \\approx 450 \\times 696.45 \\approx \\\\)313\\,406.52.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(P = 450(1.005)^1 + 450(1.005)^2 + \\cdots + 450(1.005)^{300}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(S = \\frac{450 \\cdot 1.005(1.005^{300}-1)}{1.005-1}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(= \\frac{450 \\times 1.005(1.005^{300}-1)}{0.005}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(A_1 = 450(1.005)^{300}\\), \\(A_2 = 450(1.005)^{299}\\), …, \\(A_{300} = 450(1.005)^1\\).\nSum (GP, \\(a=1.005\\), \\(r=1.005\\), \\(n=300\\)): \\(P = 450 \\times \\dfrac{1.005(1.005^{300}-1)}{0.005} \\approx 450 \\times 696.45 \\approx \\\\)313\\,406.52.. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\(A_1 = 450(1.005)^{300}\\), \\(A_2 = 450(1.005)^{299}\\), …, \\(A_{300} = 450(1.005)^1\\).\nSum (GP, \\(a=1.005\\), \\(r=1.005\\), \\(n=300\\)): \\(P = 450 \\times \\dfrac{1.005(1.005^{300}-1)}{0.005} \\approx 450 \\times 696.45 \\approx \\\\)313\\,406.52.\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "bar2020-q17biia",
    "topicId": "y12a-exam",
    "c": "8E",
    "t": "Paying off a loan",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "After retiring, Josephine withdraws \\$2500 from the account at the end of each month, with no further deposits. The account earns 0.5% per month. Let $A_n$ be the amount after $n$ months of retirement. Show that $A_n = (P - 500\\,000) \\times 1.005^n + 500\\,000$.",
    "answer": "\\(A_1 = P(1.005)-2500\\).\n\\(A_2 = A_1(1.005)-2500 = P(1.005)^2-2500(1.005+1)\\).\nBy induction: \\(A_n = P(1.005)^n - 2500\\cdot\\dfrac{1.005^n-1}{0.005} = P(1.005)^n - 500000(1.005^n-1) = (P-500000)(1.005)^n + 500000\\).",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "\\(A_1 = P(1.005)-2500\\).\n\\(A_2 = A_1(1.005)-2500 = P(1.005)^2-2500(1.005+1)\\).\nBy induction: \\(A_n = P(1.005)^n - 2500\\cdot\\dfrac{1.005^n-1}{0.005} = P(1.005)^n - 500000(1.005^n-1) = (P-500000)(1.005)^n + 500000\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(A_1 = 1.005P - 2500\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(A_n = P(1.005)^n - 2500\\cdot\\frac{1.005^n-1}{0.005}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(A_n = P(1.005)^n - 500000(1.005^n-1)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(A_1 = P(1.005)-2500\\).\n\\(A_2 = A_1(1.005)-2500 = P(1.005)^2-2500(1.005+1)\\).\nBy induction: \\(A_n = P(1.005)^n - 2500\\cdot\\dfrac{1.005^n-1}{0.005} = P(1.005)^n - 500000(1.005^n-1) = (P-500000)(1.005)^n + 500000\\).. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\(A_1 = P(1.005)-2500\\).\n\\(A_2 = A_1(1.005)-2500 = P(1.005)^2-2500(1.005+1)\\).\nBy induction: \\(A_n = P(1.005)^n - 2500\\cdot\\dfrac{1.005^n-1}{0.005} = P(1.005)^n - 500000(1.005^n-1) = (P-500000)(1.005)^n + 500000\\).\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "bar2020-q17biib",
    "topicId": "y12a-exam",
    "c": "8E",
    "t": "Paying off a loan",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Using $A_n = (P-500\\,000)\\times 1.005^n + 500\\,000$ with $P = 313\\,406.52$, for how many months after retirement will there be money left in the account?",
    "opts": [
      "\\(-197 months\\)",
      "\\(197 months\\)",
      "\\(197 months + 1\\)",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Set $A_n = 0$ and solve for $n$.",
    "solution": "The correct answer is \\(197 months\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\((P-500000)\\times 1.005^n = -500000\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(1.005^n = \\frac{500000}{186593.48} \\approx 2.6796\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(n = \\frac{\\ln(2.6796)}{\\ln(1.005)} \\approx 197.6\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 197 months. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(197 months\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-q17biibv",
    "topicId": "y12a-exam",
    "c": "8E",
    "t": "Paying off a loan",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "A retiree has $200\\,000 in an account earning 0.4% per month. They withdraw $1500 at the end of each month. How many complete months until the account is empty?",
    "opts": [
      "\\(-169 months\\)",
      "\\(169 months\\)",
      "\\(169 months + 1\\)",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Set $A_n = 0$ where $A_n = 200000(1.004)^n - 1500\\cdot\\dfrac{1.004^n-1}{0.004}$.",
    "solution": "The correct answer is \\(169 months\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(175000 \\times 1.004^n = 375000\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(1.004^n = \\frac{375000}{175000} \\approx 2.143\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(n = \\frac{\\ln(2.143)}{\\ln(1.004)} \\approx 169.2\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 169 months. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(169 months\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-q18ai",
    "topicId": "y12a-exam",
    "c": "7C",
    "t": "Integrating with respect to time",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "A particle moves in a straight line with velocity $v = 3e^t + 6e^{-t}$ m/s. It begins at the Origin $O$ ($t=0$, $x=0$). Find the displacement function $x$ at time $t$ seconds.",
    "opts": [
      "\\(x = 3e^t + 6e^{+t} - 3\\)",
      "\\(x = 3e^t - 6e^{-(-t)} + 3\\)",
      "\\(x = 3e^t - 6e^{-t+1} + 3\\)",
      "\\(x = 3e^t - 6e^{-t} + 3\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "Integrate $v$ with respect to $t$ and apply the initial condition $x(0) = 0$.",
    "solution": "The correct answer is \\(x = 3e^t - 6e^{-t} + 3\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(x = 3e^t - 6e^{-t} + C\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(0 = 3(1) - 6(1) + C \\Rightarrow C = 3\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(x = 3e^t - 6e^{-t} + 3\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: x = 3e^t - 6e^{-t} + 3. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(x = 3e^t - 6e^{-t} + 3\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-q18aiv",
    "topicId": "y12a-exam",
    "c": "7C",
    "t": "Integrating with respect to time",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "A particle has velocity $v = 2e^t + 4e^{-t}$ m/s and starts at the origin. Find its displacement function.",
    "opts": [
      "\\(x = 2e^t + 4e^{+t} - 2\\)",
      "\\(x = 2e^t - 4e^{-(-t)} + 2\\)",
      "\\(x = 2e^t - 4e^{-t+1} + 2\\)",
      "\\(x = 2e^t - 4e^{-t} + 2\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "Integrate $v$ and use $x(0)=0$ to find the constant.",
    "solution": "The correct answer is \\(x = 2e^t - 4e^{-t} + 2\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(x = 2e^t - 4e^{-t} + C\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(C = 2\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(x = 2e^t - 4e^{-t} + 2\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: x = 2e^t - 4e^{-t} + 2. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(x = 2e^t - 4e^{-t} + 2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-q18aii",
    "topicId": "y12a-exam",
    "c": "7C",
    "t": "Integrating with respect to time",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Find the exact time when the particle (with $x = 3e^t - 6e^{-t} + 3$) is at $x = 10$ metres.",
    "opts": [
      "\\(t = \\ln 3\\) seconds",
      "\\(t = \\ln 3\\) seconds + 1",
      "\\(t = \\ln 4\\) seconds",
      "\\(t = \\log 3\\) seconds"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Set $x=10$, multiply through by $e^t$ to get a quadratic in $e^t$.",
    "solution": "The correct answer is \\(t = \\ln 3\\) seconds.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(3e^t - 6e^{-t} = 7\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(3e^{2t} - 7e^t - 6 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\((3u+2)(u-3)=0 \\Rightarrow u=-\\tfrac{2}{3} \\text{ or } u=3\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(t = \\ln 3\\) seconds. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(t = \\ln 3\\) seconds",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-q18aiiv",
    "topicId": "y12a-exam",
    "c": "7C",
    "t": "Integrating with respect to time",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Find the exact time when the particle with $x = 2e^t - 4e^{-t} + 2$ is at $x = 4$ metres.",
    "opts": [
      "\\(t = \\ln 2\\) seconds",
      "\\(t = \\ln 2\\) seconds + 1",
      "\\(t = \\ln 4\\) seconds",
      "\\(t = \\log 2\\) seconds"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Set $x=8$, multiply by $e^t$ to get a quadratic in $e^t$.",
    "solution": "The correct answer is \\(t = \\ln 2\\) seconds.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(2e^t-4e^{-t}=2\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(2e^{2t}-2e^t-4=0 \\Rightarrow e^{2t}-e^t-2=0\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\((e^t-2)(e^t+1)=0 \\Rightarrow e^t=2\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(t = \\ln 2\\) seconds. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(t = \\ln 2\\) seconds",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-q18bi",
    "topicId": "y12a-exam",
    "c": "5A",
    "t": "Review of exponential functions base e",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "The function $y = e^x$ is reflected about the $y$-axis and moved up by 1 unit to give the function $f(x)$. Write down the equation of $f(x)$.",
    "opts": [
      "\\(f(x) = e^{+x} - 1\\)",
      "\\(f(x) = e^{-(-x)} + 1\\)",
      "\\(f(x) = e^{-x+1} + 1\\)",
      "\\(f(x) = e^{-x} + 1\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "Reflecting $e^x$ about the $y$-axis gives $e^{-x}$. Moving up 1 unit adds 1.",
    "solution": "The correct answer is \\(f(x) = e^{-x} + 1\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y = e^{-x}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(f(x) = e^{-x} + 1\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(f(x) = e^{-x} + 1\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: f(x) = e^{-x} + 1. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(f(x) = e^{-x} + 1\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-q18bii",
    "topicId": "y12a-exam",
    "c": "5A",
    "t": "Review of exponential functions base e",
    "type": "teacher_review",
    "difficulty": "easy",
    "timeLimit": 180,
    "question": "Sketch \\(y = f(x) = e^{-x} + 1\\) on the number plane showing all important details.",
    "answer": "Key features: y-intercept (0, 2); horizontal asymptote y = 1; curve always above y = 1; strictly decreasing; as x → ∞, y → 1⁺; as x → −∞, y → ∞.\nSee model sketch.",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "Key features: y-intercept (0, 2); horizontal asymptote y = 1; curve always above y = 1; strictly decreasing; as x → ∞, y → 1⁺; as x → −∞, y → ∞.\nSee model sketch.",
    "solutionSteps": [
      {
        "explanation": "Begin by listing what a full sketch must show: intercepts, asymptotes, and overall shape (increasing/decreasing, end behaviour). The given function is \\(f(x)=e^{-x}+1\\). This is the basic exponential \\(e^{x}\\) reflected in the \\(y\\)-axis (so the exponent becomes \\(-x\\)) and then translated up by 1. That strategy tells us the asymptote will be the line \\(y=1\\) rather than the \\(x\\)-axis, and the curve will decrease as \\(x\\) increases.",
        "workingOut": "\\(f(x)=e^{-x}+1\\)",
        "graphData": null
      },
      {
        "explanation": "Find the \\(y\\)-intercept by substituting \\(x=0\\). This is the point where the curve meets the vertical axis and is usually the first feature marked on a sketch. A common slip is to compute \\(e^{-0}\\) incorrectly — recall \\(e^{0}=1\\), so \\(f(0)=1+1=2\\).",
        "workingOut": "\\(f(0)=e^{0}+1=1+1=2\\;\\Rightarrow\\;(0,2)\\)",
        "graphData": null
      },
      {
        "explanation": "Determine the horizontal asymptote by considering end behaviour as \\(x\\to\\infty\\). Since \\(e^{-x}\\to 0\\), we get \\(f(x)\\to 1\\) from above. As \\(x\\to-\\infty\\), \\(e^{-x}\\to\\infty\\), so \\(f(x)\\to\\infty\\). Mark \\(y=1\\) as a dashed horizontal line — never draw the curve crossing that asymptote, because \\(e^{-x}>0\\) for all real \\(x\\).",
        "workingOut": "\\(x\\to\\infty:\\; f(x)\\to 1^{+}\\quad(\\text{asymptote }y=1)\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the curve is strictly decreasing by differentiating: \\(f'(x)=-e^{-x}\\). For every real \\(x\\), \\(e^{-x}>0\\), so \\(f'(x)<0\\). That means as you move from left to right the graph falls, approaching the asymptote \\(y=1\\). Students sometimes sketch a rising exponential by forgetting the reflection (the minus in the exponent).",
        "workingOut": "\\(f'(x)=-e^{-x}<0\\;\\Rightarrow\\;\\text{strictly decreasing}\\)",
        "graphData": null
      },
      {
        "explanation": "Assemble the sketch: draw axes; draw the dashed asymptote \\(y=1\\); plot the intercept \\((0,2)\\); then draw a smooth decreasing curve that is always above \\(y=1\\), rises steeply as \\(x\\) becomes large and negative, and flattens toward the asymptote as \\(x\\) becomes large and positive. The model graph below shows the completed diagram with these features labelled.",
        "workingOut": "\\text{Model sketch: intercept }(0,2),\\text{ asymptote }y=1,\\text{ decreasing curve}",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 320,
            "boundingbox": [
              -3.5,
              6.5,
              4.5,
              -0.8
            ],
            "boardOptions": {
              "keepaspectratio": false,
              "showCopyright": false
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-3.2,0],[4.2,0]], {strokeColor:'#0f172a', strokeWidth:1.5});\nboard.create('arrow', [[0,-0.5],[0,6.2]], {strokeColor:'#0f172a', strokeWidth:1.5});\nboard.create('text', [4.0, -0.35, 'x'], {fontSize:14});\nboard.create('text', [0.2, 6.0, 'y'], {fontSize:14});\nboard.create('line', [[-3.2,1],[4.2,1]], {strokeColor:'#94a3b8', strokeWidth:1.5, dash:2, straightFirst:false, straightLast:false});\nboard.create('text', [3.2, 1.25, 'y = 1'], {fontSize:12, strokeColor:'#64748b'});\nboard.create('functiongraph', [function(x){ return Math.exp(-x) + 1; }, -3.0, 4.0], {strokeColor:'#1d4ed8', strokeWidth:2.5});\nboard.create('point', [0, 2], {name:'(0, 2)', size:3, color:'#dc2626', fixed:true, label:{offset:[10,8], fontSize:12}});\nboard.create('point', [1, 1 + Math.exp(-1)], {name:'', size:2, color:'#1d4ed8', fixed:true});\nboard.create('point', [-1, 1 + Math.E], {name:'', size:2, color:'#1d4ed8', fixed:true});\nboard.create('text', [-2.6, 5.2, 'y = e^{-x} + 1'], {fontSize:12, strokeColor:'#1d4ed8'});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 360,
        "height": 320,
        "boundingbox": [
          -3.5,
          6.5,
          4.5,
          -0.8
        ],
        "boardOptions": {
          "keepaspectratio": false,
          "showCopyright": false
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-3.2,0],[4.2,0]], {strokeColor:'#0f172a', strokeWidth:1.5});\nboard.create('arrow', [[0,-0.5],[0,6.2]], {strokeColor:'#0f172a', strokeWidth:1.5});\nboard.create('text', [4.0, -0.35, 'x'], {fontSize:14});\nboard.create('text', [0.2, 6.0, 'y'], {fontSize:14});\n// horizontal asymptote y = 1\nboard.create('line', [[-3.2,1],[4.2,1]], {strokeColor:'#94a3b8', strokeWidth:1.5, dash:2, straightFirst:false, straightLast:false});\nboard.create('text', [3.2, 1.25, 'y = 1'], {fontSize:12, strokeColor:'#64748b'});\n// curve y = e^{-x} + 1\nboard.create('functiongraph', [function(x){ return Math.exp(-x) + 1; }, -3.0, 4.0], {strokeColor:'#1d4ed8', strokeWidth:2.5});\n// key points\nboard.create('point', [0, 2], {name:'(0, 2)', size:3, color:'#dc2626', fixed:true, label:{offset:[10,8], fontSize:12}});\nboard.create('point', [1, 1 + Math.exp(-1)], {name:'', size:2, color:'#1d4ed8', fixed:true});\nboard.create('point', [-1, 1 + Math.E], {name:'', size:2, color:'#1d4ed8', fixed:true});\nboard.create('text', [-2.6, 5.2, 'y = e^{-x} + 1'], {fontSize:12, strokeColor:'#1d4ed8'});\nboard.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "bar2020-q18biii",
    "topicId": "y12a-exam",
    "c": "5F",
    "t": "Composite functions",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Consider the function $g(x) = \\ln x$. Determine the composite function $f(g(x))$, indicating its domain and range.",
    "opts": [
      "\\(\\dfrac{9}{5}\\)",
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "f(g(x)) = \\dfrac{1}{x} + 1\\); domain: \\(x > 0\\); range: \\(y > 1"
    ],
    "a": 3,
    "answer": "3",
    "hint": "Substitute $g(x) = \\ln x$ into $f(x) = e^{-x}+1$. Then find the domain (where $\\ln x$ is defined) and resulting range.",
    "solution": "The correct answer is f(g(x)) = \\dfrac{1}{x} + 1\\); domain: \\(x > 0\\); range: \\(y > 1.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(f(g(x)) = e^{-\\ln x}+1 = x^{-1}+1 = \\frac{1}{x}+1\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\text{Domain: } x > 0\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\text{Range: } y > 1\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: f(g(x)) = \\dfrac{1}{x} + 1\\); domain: \\(x > 0\\); range: \\(y > 1. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "f(g(x)) = \\dfrac{1}{x} + 1\\); domain: \\(x > 0\\); range: \\(y > 1",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-q18biiiiv",
    "topicId": "y12a-exam",
    "c": "5F",
    "t": "Composite functions",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Let $f(x) = e^x + 2$ and $g(x) = \\ln x$. Find $f(g(x))$, its domain, and its range.",
    "opts": [
      "f(g(x)) = x + 2\\); domain: \\(x > 0\\); range: \\(y > 2",
      "The opposite of this statement is true.",
      "This is true only when the function is linear.",
      "This only holds for positive values of x."
    ],
    "a": 0,
    "answer": "0",
    "hint": "$e^{\\ln x} = x$. Find domain from $g(x)$ and range from the resulting function.",
    "solution": "The correct answer is f(g(x)) = x + 2\\); domain: \\(x > 0\\); range: \\(y > 2.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(f(g(x))=x+2\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\text{Domain: }x>0\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\text{Range: }y>2\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: f(g(x)) = x + 2\\); domain: \\(x > 0\\); range: \\(y > 2. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "f(g(x)) = x + 2\\); domain: \\(x > 0\\); range: \\(y > 2",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-q19ai",
    "topicId": "y12a-exam",
    "c": "12E",
    "t": "Multi-stage experiments",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "A student tosses two regular six-sided dice. Find the probability that their sum is greater than 7 AND an even number.",
    "opts": [
      "\\(-0.25\\)",
      "\\(-0.75\\)",
      "\\(\\dfrac{1}{4}\\)",
      "\\(1.25\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "List all outcomes (out of 36) where the sum is both $> 7$ and even (i.e. sum $= 8, 10, 12$).",
    "solution": "The correct answer is \\(\\dfrac{1}{4}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\text{Sum}=8,10,12\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(n(8)=5, n(10)=3, n(12)=1 \\Rightarrow \\text{total}=9\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(P = \\frac{9}{36} = \\frac{1}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\dfrac{1}{4}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\dfrac{1}{4}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-q19aiv",
    "topicId": "y12a-exam",
    "c": "12E",
    "t": "Multi-stage experiments",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Two dice are rolled. Find the probability that their sum is greater than 8 and odd.",
    "opts": [
      "\\(-0.16666666666666666\\)",
      "\\(-0.8333333333333334\\)",
      "\\(\\dfrac{1}{6}\\)",
      "\\(1.1666666666666667\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Odd sums $> 8$: sum $= 9$ or 11.",
    "solution": "The correct answer is \\(\\dfrac{1}{6}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(n(9)=4, n(11)=2 \\Rightarrow \\text{total}=6\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(P=\\frac{6}{36}=\\frac{1}{6}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\dfrac{1}{6}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\dfrac{1}{6}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\dfrac{1}{6}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-q19aii",
    "topicId": "y12a-exam",
    "c": "12G",
    "t": "Conditional probability",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Find the probability that the sum of two dice is greater than 7 and even, given that at least one of the numbers is even.",
    "opts": [
      "\\(-0.2222222222222222\\)",
      "\\(-0.7777777777777778\\)",
      "\\(\\dfrac{6}{27}\\)",
      "\\(1.2222222222222223\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Find $P(\\text{at least one even})$ and then how many of the 9 favourable outcomes have at least one even die.",
    "solution": "The correct answer is \\(\\dfrac{6}{27}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\((2,6),(4,4),(6,2),(4,6),(5,5\\!-\\!\\text{no}),(6,4),(6,6) \\Rightarrow 6 \\text{ outcomes}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(n(\\text{at least one even}) = 27\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(P = \\frac{6}{27}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\dfrac{6}{27}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\dfrac{6}{27}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-q19aiiv",
    "topicId": "y12a-exam",
    "c": "12G",
    "t": "Conditional probability",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Two dice are rolled. Find the probability that the sum is greater than 7 and even, given that both numbers are even.",
    "opts": [
      "\\(-0.33333333333333337\\)",
      "\\(-0.6666666666666666\\)",
      "\\(\\dfrac{2}{3}\\)",
      "\\(1.6666666666666665\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Both even: 9 outcomes. Of those, find even sum $>7$.",
    "solution": "The correct answer is \\(\\dfrac{2}{3}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\({(2,2),(2,4), ldots,(6,6)}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(6 \\text{ outcomes}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(P=\\frac{6}{9}=\\frac{2}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\dfrac{2}{3}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\dfrac{2}{3}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-q19bi",
    "topicId": "y12a-exam",
    "c": "6A",
    "t": "Trig with right-angled triangles",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "A wire frame has parts $AB$, $BC$, $CD$, $ED$, $AE$, $BD$ where $AB=ED=2$ cm, $BC=a$ cm ($a>0$), and $\\angle CBD = \\theta$. In right-angled triangles within the frame: find $BD$ and $CD$ in terms of $a$ and $\\theta$.",
    "opts": [
      "BD = a-\\cos\\theta\\), \\(CD = a-\\sin\\theta",
      "BD = a\\cos\\theta\\), \\(CD = a\\sin\\theta",
      "BD = a\\cos\\theta\\), \\(CD = a\\sin\\theta + 1",
      "BD = a\\sin\\theta\\), \\(CD = a\\sin\\theta"
    ],
    "a": 1,
    "answer": "1",
    "hint": "In triangle $BCD$: $\\cos\\theta = BD/BC$ and $\\sin\\theta = CD/BC$.",
    "solution": "The correct answer is BD = a\\cos\\theta\\), \\(CD = a\\sin\\theta.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(BD = a\\cos\\theta\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(CD = a\\sin\\theta\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "BD = a\\cos\\theta\\), \\(CD = a\\sin\\theta",
        "graphData": null
      },
      {
        "explanation": "Final answer: BD = a\\cos\\theta\\), \\(CD = a\\sin\\theta. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "BD = a\\cos\\theta\\), \\(CD = a\\sin\\theta",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-q19bii",
    "topicId": "y12a-exam",
    "c": "6A",
    "t": "Trig with right-angled triangles",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the total length $L$ of the wire frame in terms of $a$ and $\\theta$. (The 6 parts are $AB$, $BC$, $CD$, $ED$, $AE$, $BD$.)",
    "opts": [
      "\\(L = 4 + 2a-\\cos\\theta + a-\\sin\\theta + a\\)",
      "\\(L = 4 + 2a\\cos\\theta + a\\sin\\theta + a\\)",
      "\\(L = 4 + 2a\\sin\\theta + a\\sin\\theta + a\\)",
      "\\(L = 4 + 4a\\cos\\theta + a\\sin\\theta + a\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "$AB = ED = 2$, $AE = BD = a\\cos\\theta$, $BC = a$, $CD = a\\sin\\theta$. Sum all six parts.",
    "solution": "The correct answer is \\(L = 4 + 2a\\cos\\theta + a\\sin\\theta + a\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(L = 2+a+a\\sin\\theta+2+a\\cos\\theta+a\\cos\\theta\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(L = 4 + a + a\\sin\\theta + 2a\\cos\\theta\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(L = 4 + 2a\\cos\\theta + a\\sin\\theta + a\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: L = 4 + 2a\\cos\\theta + a\\sin\\theta + a. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(L = 4 + 2a\\cos\\theta + a\\sin\\theta + a\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-q19biii",
    "topicId": "y12a-exam",
    "c": "3G",
    "t": "Applications of maximisation and minimisation",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Given $a = 3\\sqrt{5}$, find the exact maximum possible length of wire in the frame.",
    "opts": [
      "\\(19 + 3\\sqrt{5}\\) cm",
      "\\(19 + 3\\sqrt{5}\\) cm + 1",
      "\\(19 + 4\\sqrt{5}\\) cm",
      "\\(19 - 3\\sqrt{5}\\) cm"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Substitute $a=3\\sqrt{5}$ into $L$, differentiate with respect to $\\theta$, set $L'=0$, verify maximum.",
    "solution": "The correct answer is \\(19 + 3\\sqrt{5}\\) cm.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(L = 4+3\\sqrt{5}(1+\\sin\\theta+2\\cos\\theta)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(L' = 3\\sqrt{5}(\\cos\\theta-2\\sin\\theta)=0 \\Rightarrow \\tan\\theta=\\tfrac{1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\sin\\theta=\\frac{1}{\\sqrt{5}}, quad \\cos\\theta=\\frac{2}{\\sqrt{5}}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(19 + 3\\sqrt{5}\\) cm. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(19 + 3\\sqrt{5}\\) cm",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-q19biiiiv",
    "topicId": "y12a-exam",
    "c": "3G",
    "t": "Applications of maximisation and minimisation",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "A length $L = 5\\sin\\theta + 12\\cos\\theta$ is to be maximised for $0 < \\theta < \\dfrac{\\pi}{2}$. Find the maximum value of $L$.",
    "opts": [
      "\\(-13\\)",
      "\\(12\\)",
      "\\(13\\)",
      "\\(14\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Use $R\\sin(\\theta+\\phi)$ form, or differentiate and set $L'=0$.",
    "solution": "The correct answer is \\(13\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Barker 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(5\\cos\\theta-12\\sin\\theta=0 \\Rightarrow \\tan\\theta=\\frac{5}{12}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\sin\\theta=\\frac{5}{13}, quad\\cos\\theta=\\frac{12}{13}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(L=\\frac{25}{13}+\\frac{144}{13}=13\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 13. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(13\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  }
];
