export const CARINGBAH_2020_QUESTIONS = [
  {
    "id": "car2020-mc1",
    "topicId": "y12a-exam",
    "c": "6E",
    "t": "Given one trig function, find another",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "If $\\cos\\theta = -\\dfrac{12}{13}$ and $180° \\leq \\theta \\leq 360°$, then $\\cot\\theta =$",
    "opts": [
      "\\(-\\dfrac{5}{12}\\)",
      "\\(-\\dfrac{12}{5}\\)",
      "\\(\\dfrac{5}{12}\\)",
      "\\(\\dfrac{12}{5}\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "Use the Pythagorean identity to find $\\sin\\theta$, then recall $\\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta}$. Determine the sign using the quadrant.",
    "solution": "The correct answer is \\(\\dfrac{12}{5}\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the quadrant. Since \\(\\cos\\theta < 0\\) and \\(180° \\leq \\theta \\leq 360°\\), the angle must be in the third quadrant (Q3), where both sine and cosine are negative.",
        "workingOut": "\\(180° \\leq \\theta \\leq 270°,\\ \\text{Q3}\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the Pythagorean identity \\(\\sin^2\\theta + \\cos^2\\theta = 1\\) to find \\(\\sin\\theta\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(\\sin^2\\theta = 1 - \\cos^2\\theta = 1 - \\left(\\dfrac{12}{13}\\right)^2 = 1 - \\dfrac{144}{169} = \\dfrac{25}{169}\\)",
        "graphData": null
      },
      {
        "explanation": "Use the definition \\(\\cot\\theta = \\dfrac{\\cos\\theta}{\\sin\\theta}\\) to compute the answer. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(\\cot\\theta = \\dfrac{-12/13}{-5/13} = \\dfrac{12}{5}\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the sign: both numerator and denominator are negative in Q3, so \\(\\cot\\theta\\) is positive. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(\\cot\\theta = \\dfrac{12}{5}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "car2020-mc2",
    "topicId": "y12a-exam",
    "c": "2B",
    "t": "Vertical and horizontal asymptotes",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "What are the asymptotes of the graph of $y = \\dfrac{1}{x^2 - 9}$?",
    "opts": [
      "\\(x = \\pm 3\\)",
      "\\(x = \\pm 9\\)",
      "\\(y = \\pm 3\\)",
      "\\(y = \\pm 9\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Vertical asymptotes occur where the denominator equals zero. Factorise $x^2 - 9$ to find these values.",
    "solution": "The correct answer is \\(x = \\pm 3\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Caringbah 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(x^2 - 9 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\((x-3)(x+3) = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(x = 3 \\quad \\text{or} \\quad x = -3\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: x = \\pm 3. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(x = \\pm 3\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "car2020-mc3",
    "topicId": "y12a-exam",
    "c": "9C",
    "t": "Differentiating powers of x",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "For the function $f(x) = \\dfrac{x^3}{3} - 5x^2 + 2x + 10$, the gradient is $-14$ at two points. What are the values of the $x$-coordinates at these points?",
    "opts": [
      "\\(-8, 2\\)",
      "\\(8, 2\\)",
      "\\(8,\\ -2\\)",
      "\\(-8,\\ -2\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Differentiate $f(x)$, set $f'(x) = -14$, then solve the resulting quadratic equation.",
    "solution": "The correct answer is \\(8, 2\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Caringbah 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(f'(x) = x^2 - 10x + 2\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(x^2 - 10x + 2 = -14\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(x^2 - 10x + 16 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 8, 2. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(8, 2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "car2020-mc4",
    "topicId": "y12a-exam",
    "c": "3A",
    "t": "Functions and function notation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "What is the domain of the function $f(x) = \\sqrt{x} + \\dfrac{1}{\\sqrt{2-x}}$?",
    "opts": [
      "\\((0, 2)\\)",
      "\\([0, 2)\\)",
      "\\((0, 2]\\)",
      "\\([0, 2]\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "For $\\sqrt{x}$ we need $x \\geq 0$. For $\\frac{1}{\\sqrt{2-x}}$ we need $2-x > 0$. Combine both conditions.",
    "solution": "The correct answer is \\([0, 2)\\).",
    "solutionSteps": [
      {
        "explanation": "For the first term \\(\\sqrt{x}\\), the expression under the square root must be non-negative. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(x \\geq 0\\)",
        "graphData": null
      },
      {
        "explanation": "For the second term \\(\\frac{1}{\\sqrt{2-x}}\\), the expression under the square root must be strictly positive (it cannot be zero because it is in the denominator).",
        "workingOut": "\\(2 - x > 0 \\implies x < 2\\)",
        "graphData": null
      },
      {
        "explanation": "Write the domain in interval notation. The left endpoint is included (closed bracket) and the right is excluded (open bracket).",
        "workingOut": "[0, 2)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "car2020-mc5",
    "topicId": "y12a-exam",
    "c": "10D",
    "t": "The standard normal distribution",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "If the $z$ scores on an examination are normally distributed and $P(z \\leq N) = 0.6$ for some number $N$, what is the value of $P(-N \\leq z \\leq N)$?",
    "opts": [
      "\\(0.1\\)",
      "\\(0.3\\)",
      "\\(0.2\\)",
      "\\(0.4\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "By symmetry of the standard normal, $P(z \\leq -N) = 1 - P(z \\leq N)$. Then use $P(-N \\leq z \\leq N) = P(z \\leq N) - P(z \\leq -N)$.",
    "solution": "The correct answer is \\(0.2\\).",
    "solutionSteps": [
      {
        "explanation": "Since \\(P(z \\leq N) = 0.6 > 0.5\\), the value \\(N\\) is positive (above the mean). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "N > 0",
        "graphData": null
      },
      {
        "explanation": "Use the symmetry of the normal distribution: \\(P(z \\leq -N) = 1 - P(z \\leq N)\\), because the distribution is symmetric about zero.",
        "workingOut": "\\(P(z \\leq -N) = 1 - 0.6 = 0.4\\)",
        "graphData": null
      },
      {
        "explanation": "Express \\(P(-N \\leq z \\leq N)\\) as the difference between two cumulative probabilities. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(P(-N \\leq z \\leq N) = P(z \\leq N) - P(z \\leq -N)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "car2020-mc6",
    "topicId": "y12a-exam",
    "c": "11D",
    "t": "Trig graphs in radians",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "What is the change in amplitude and period when the function $f(x) = \\dfrac{1}{2}\\sin 4x$ is transformed into $g(x) = \\sin 2x$?",
    "opts": [
      "The amplitude is halved and the period is halved",
      "The amplitude is halved and the period is doubled",
      "The amplitude is doubled and the period is halved",
      "The amplitude is doubled and the period is doubled"
    ],
    "a": 3,
    "answer": "3",
    "hint": "Compare the amplitudes (the coefficients) and periods ($2\\pi$ divided by the coefficient of $x$) of both functions.",
    "solution": "The correct answer is The amplitude is doubled and the period is doubled.",
    "solutionSteps": [
      {
        "explanation": "For \\(f(x) = \\frac{1}{2}\\sin 4x\\), identify the amplitude as the coefficient of sine, and the period as \\(\\frac{2\\pi}{b}\\) where \\(b\\) is the coefficient of \\(x\\).",
        "workingOut": "\\(A_f = \\tfrac{1}{2}, quad T_f = \\dfrac{2\\pi}{4} = \\dfrac{\\pi}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Compare amplitudes: the amplitude increases from \\(\\frac{1}{2}\\) to \\(1\\), which is a doubling. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(\\dfrac{A_g}{A_f} = \\dfrac{1}{1/2} = 2 \\quad (\\text{doubled})\\)",
        "graphData": null
      },
      {
        "explanation": "Compare periods: the period increases from \\(\\frac{\\pi}{2}\\) to \\(\\pi\\), which is also a doubling. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(\\dfrac{T_g}{T_f} = \\dfrac{\\pi}{\\pi/2} = 2 \\quad (\\text{doubled})\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "car2020-mc7",
    "topicId": "y12a-exam",
    "c": "9C",
    "t": "Quartiles and interquartile range",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Which statement is true for an ungrouped data set with no outliers?",
    "opts": [
      "The largest possible range is 2 times the IQR",
      "The largest possible range is 3 times the IQR",
      "The largest possible range is 4 times the IQR",
      "The largest possible range is 5 times the IQR"
    ],
    "a": 2,
    "answer": "2",
    "hint": "With no outliers, the minimum and maximum lie within $1.5 \\times \\text{IQR}$ of the lower and upper quartiles. Use this to express the range in terms of the IQR.",
    "solution": "The correct answer is The largest possible range is 4 times the IQR.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Caringbah 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\text{Lower fence} = Q_1 - 1.5\\, text{IQR}, quad \\text{Upper fence} = Q_3 + 1.5\\, text{IQR}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\text{Max range} = (Q_3 + 1.5\\, text{IQR}) - (Q_1 - 1.5\\, text{IQR})\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(= (Q_3 - Q_1) + 3\\, text{IQR}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: The largest possible range is 4 times the IQR. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "The largest possible range is 4 times the IQR",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "car2020-mc8",
    "topicId": "y12a-exam",
    "c": "7D",
    "t": "Further equations of lines",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "Which line is perpendicular to $3x + 4y + 7 = 0$?",
    "opts": [
      "\\(4x + 3y - 7 = 0\\)",
      "\\(3x - 4y + 7 = 0\\)",
      "\\(8x - 6y - 7 = 0\\)",
      "\\(4x - 7y + 7 = 0\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Find the gradient of the given line, then the perpendicular gradient is its negative reciprocal. Check which option has that gradient.",
    "solution": "The correct answer is \\(8x - 6y - 7 = 0\\).",
    "solutionSteps": [
      {
        "explanation": "Rearrange \\(3x + 4y + 7 = 0\\) into gradient-intercept form \\(y = mx + b\\) to identify the gradient. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(4y = -3x - 7 \\implies y = -\\dfrac{3}{4}x - \\dfrac{7}{4}, quad m = -\\dfrac{3}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "The gradient of a perpendicular line is the negative reciprocal of the original gradient. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(m_\\perp = -\\dfrac{1}{m} = -\\dfrac{1}{-3/4} = \\dfrac{4}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm the gradient matches \\(\\frac{4}{3}\\) and verify the product of gradients is \\(-1\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(m_1 \\times m_2 = -\\dfrac{3}{4} \\times \\dfrac{4}{3} = -1 \\checkmark\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "car2020-mc9",
    "topicId": "y12a-exam",
    "c": "5K",
    "t": "Calculus with other bases",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "What is the derivative of $3^{4x+5}$?",
    "opts": [
      "\\(\\ln 3 \\times 4 \\times 3^{4x+5}\\)",
      "\\((4x+5) \\times 3^{4x+5}\\)",
      "\\(\\ln 3 \\times 3^{4x+5}\\)",
      "\\(4 \\times 3^{4x+5}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Use the rule: $\\frac{d}{dx}[a^{f(x)}] = \\ln a \\cdot f'(x) \\cdot a^{f(x)}$.",
    "solution": "The correct answer is \\(\\ln 3 \\times 4 \\times 3^{4x+5}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Caringbah 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\dfrac{d}{dx}\\left[a^{f(x)}\\right] = \\ln a \\cdot f'(x) \\cdot a^{f(x)}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(f'(x) = 4\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\dfrac{d}{dx}\\left[3^{4x+5}\\right] = \\ln 3 \\times 4 \\times 3^{4x+5}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\ln 3 \\times 4 \\times 3^{4x+5}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\ln 3 \\times 4 \\times 3^{4x+5}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "car2020-mc10",
    "topicId": "y12a-exam",
    "c": "1F",
    "t": "Summing an arithmetic series",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "What is the value of $\\ln 2 + \\ln 4 + \\ln 8 + \\cdots + \\ln 2^{2n}$?",
    "opts": [
      "\\(n^2 \\ln 2\\)",
      "\\(n(n+1)\\ln 2\\)",
      "\\(n(n+2)\\ln 2\\)",
      "\\(n(2n+1)\\ln 2\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "Rewrite each term as a multiple of $\\ln 2$, then identify the arithmetic series $1 + 2 + 3 + \\cdots + 2n$ and use the sum formula.",
    "solution": "The correct answer is \\(n(2n+1)\\ln 2\\).",
    "solutionSteps": [
      {
        "explanation": "Rewrite each logarithm term using the log power rule \\(\\ln a^k = k\\ln a\\), expressing everything as a multiple of \\(\\ln 2\\).",
        "workingOut": "\\(\\ln 2^1 + \\ln 2^2 + \\ln 2^3 + \\cdots + \\ln 2^{2n} = (1 + 2 + 3 + \\cdots + 2n)\\ln 2\\)",
        "graphData": null
      },
      {
        "explanation": "Identify the inner sum as an arithmetic series with first term \\(a = 1\\), last term \\(l = 2n\\), and \\(2n\\) terms in total.",
        "workingOut": "\\(a = 1, quad l = 2n, quad n_{\\text{terms}} = 2n\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the arithmetic series sum formula \\(S = \\frac{n_{\\text{terms}}}{2}(a + l)\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(S = \\dfrac{2n}{2}(1 + 2n) = n(1 + 2n)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "car2020-q11",
    "topicId": "y12a-exam",
    "c": "2D",
    "t": "Rationalising the denominator",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the values of $a$ and $b$ (in simplified form) such that $\\dfrac{3}{4 - \\sqrt{2}} = a + \\sqrt{b}$.",
    "opts": [
      "\\(-a = \\dfrac{6}{7},\\ b = \\dfrac{9}{98}\\)",
      "\\(a = \\dfrac{6}{7},\\ b = \\dfrac{9}{98}\\)",
      "\\(a = \\frac{1}{7},\\ b = \\dfrac{9}{98}\\)",
      "\\(a = \\frac{7}{6},\\ b = \\dfrac{9}{98}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Rationalise the denominator by multiplying by $\\frac{4+\\sqrt{2}}{4+\\sqrt{2}}$, then match the rational and irrational parts.",
    "solution": "The correct answer is \\(a = \\dfrac{6}{7},\\ b = \\dfrac{9}{98}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Caringbah 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\dfrac{3}{4-\\sqrt{2}} \\times \\dfrac{4+\\sqrt{2}}{4+\\sqrt{2}} = \\dfrac{3(4+\\sqrt{2})}{(4)^2 - (\\sqrt{2})^2}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(= \\dfrac{12 + 3\\sqrt{2}}{16 - 2} = \\dfrac{12 + 3\\sqrt{2}}{14}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(= \\dfrac{6}{7} + \\dfrac{3}{14}\\sqrt{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: a = \\dfrac{6}{7},\\ b = \\dfrac{9}{98}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(a = \\dfrac{6}{7},\\ b = \\dfrac{9}{98}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "car2020-q12",
    "topicId": "y12a-exam",
    "c": "6I",
    "t": "The cosine rule",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "Find the value of $\\theta$, correct to the nearest minute, in a triangle with sides $16$, $12$, and $20$, where $\\theta$ is the angle opposite the side of length $12$.",
    "opts": [
      "\\(\\dfrac{13}{x + 3}\\)",
      "\\(\\theta = 36°52'\\)",
      "\\(\\theta = 36°52' + 1\\)",
      "\\(\\theta = 46°54'\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Apply the cosine rule: $\\cos\\theta = \\frac{a^2 + b^2 - c^2}{2ab}$ where $c$ is the side opposite $\\theta$.",
    "solution": "The correct answer is \\(\\theta = 36°52'\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Caringbah 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\cos\\theta = \\dfrac{a^2 + b^2 - c^2}{2ab} = \\dfrac{16^2 + 20^2 - 12^2}{2 \\times 16 \\times 20}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(= \\dfrac{256 + 400 - 144}{640} = \\dfrac{512}{640}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(= \\dfrac{4}{5}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\theta = 36°52'. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\theta = 36°52'\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "car2020-q13",
    "topicId": "y12a-exam",
    "c": "4F",
    "t": "Finding areas by integration",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "The diagram below shows the graph of $y = x^2 - x - 6$. Point $A$ is where the curve crosses the $x$-axis between $x = 0$ and $x = 6$.\n\n(a) What is the coordinate of $A$?\n\n(b) Find the area bounded by the $x$-axis and the curve $y = x^2 - x - 6$ for the interval $0 \\leq x \\leq 6$.",
    "opts": [
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "(a) \\(A = (3,\\ 0)\\)\n\n(b) \\(45\\) square units",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "For (a), solve $x^2 - x - 6 = 0$. For (b), the curve is below the $x$-axis on $[0,3]$ and above on $[3,6]$, so split the integral and take the absolute value of each part.",
    "solution": "The correct answer is (a) \\(A = (3,\\ 0)\\)\n\n(b) \\(45\\) square units.",
    "solutionSteps": [
      {
        "explanation": "For part (a), find the x-intercept by setting \\(y = 0\\) and solving the quadratic. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(x^2 - x - 6 = 0 \\implies (x-3)(x+2) = 0 \\implies x = 3 \\text{ or } x = -2\\)",
        "graphData": null
      },
      {
        "explanation": "Since \\(A\\) is in the interval \\(0 \\leq x \\leq 6\\), the coordinate is \\(A = (3, 0)\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(A = (3, 0)\\)",
        "graphData": null
      },
      {
        "explanation": "For part (b), note that the curve is below the \\(x\\)-axis on \\([0,3]\\) (where \\(y < 0\\)) and above on \\([3,6]\\) (where \\(y > 0\\)). Split the integral at \\(x = 3\\).",
        "workingOut": "\\(A = \\left|\\int_0^3(x^2-x-6)\\,dx\\right| + \\int_3^6(x^2-x-6)\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Integrate and evaluate the antiderivative at the endpoints for each sub-interval. At \\(x=3\\): \\(\\frac{27}{3}-\\frac{9}{2}-18 = 9-4.5-18=-13.5\\). At \\(x=0\\): \\(0\\).",
        "workingOut": "\\(\\int_0^3 = -13.5 - 0 = -13.5, quad \\left|-13.5\\right| = 13.5\\)",
        "graphData": null
      },
      {
        "explanation": "For the second integral: at \\(x=6\\): \\(\\frac{216}{3}-\\frac{36}{2}-36 = 72-18-36=18\\). At \\(x=3\\): \\(-13.5\\).",
        "workingOut": "\\(\\int_3^6 = 18 - (-13.5) = 31.5\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "car2020-q14a",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Caringbah 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 180,
    "question": "Differentiate each of the following functions.\nDifferentiate \\(y = x^{2} e^{x}\\).",
    "opts": [
      "\\(2x e^{x}\\)",
      "\\(x^{2} e^{x}+2x\\)",
      "\\(x e^{x}(x+2)\\)",
      "\\(2x e^{x}+x^{2}\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Product rule with \\(u=x^{2}\\) and \\(v=e^{x}\\). Then factor \\(x e^{x}\\).",
    "solution": "The correct answer is \\(x e^{x}(x+2)\\).",
    "solutionSteps": [
      {
        "explanation": "The function is a product: \\(y=x^{2}\\cdot e^{x}\\). Use the product rule \\((uv)'=u'v+uv'\\). Set \\(u=x^{2}\\) and \\(v=e^{x}\\).",
        "workingOut": "\\(u=x^{2},\\quad v=e^{x}\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate each factor: power rule gives \\(u'=2x\\). The exponential is its own derivative, so \\(v'=e^{x}\\).",
        "workingOut": "\\(u'=2x,\\quad v'=e^{x}\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the product rule: \\(y'=u'v+uv'=(2x)\\cdot e^{x}+(x^{2})\\cdot e^{x}=2x e^{x}+x^{2} e^{x}\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(y'=2x e^{x}+x^{2} e^{x}\\)",
        "graphData": null
      },
      {
        "explanation": "Factor out the common factor \\(x e^{x}\\): first term \\(2x e^{x}=x e^{x}\\cdot 2\\); second term \\(x^{2} e^{x}=x e^{x}\\cdot x\\). So \\(y'=x e^{x}(2+x)\\).",
        "workingOut": "\\(y'=x e^{x}(2+x)\\)",
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
    "id": "car2020-q14b",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Caringbah 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 180,
    "question": "Differentiate each of the following functions.\nDifferentiate \\(f(x)=\\dfrac{e^{x}+1}{2x}\\).",
    "opts": [
      "\\(\\dfrac{e^{x}}{2x}\\)",
      "\\(\\dfrac{x e^{x}-e^{x}-1}{2x^{2}}\\)",
      "\\(\\dfrac{2x e^{x}-(e^{x}+1)}{4x^{2}}\\)",
      "\\(\\dfrac{e^{x}-1}{2x^{2}}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Quotient rule with \\(u=e^{x}+1\\) and \\(v=2x\\). Simplify the fraction carefully at the end.",
    "solution": "The correct answer is \\(\\dfrac{x e^{x}-e^{x}-1}{2x^{2}}\\).",
    "solutionSteps": [
      {
        "explanation": "The function is a quotient: \\(f(x)=\\dfrac{e^{x}+1}{2x}\\). Use the quotient rule \\(\\dfrac{dy}{dx}=\\dfrac{v u'-u v'}{v^{2}}\\). Set numerator \\(u=e^{x}+1\\) and denominator \\(v=2x\\).",
        "workingOut": "\\(u=e^{x}+1,\\quad v=2x\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate each piece: \\(u'=e^{x}\\) (the constant 1 vanishes). For the denominator, \\(v'=2\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(u'=e^{x},\\quad v'=2\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute into the quotient rule. The denominator is \\(v^{2}=(2x)^{2}=4x^{2}\\). The numerator is \\(v u'-u v'=2x\\cdot e^{x}-(e^{x}+1)\\cdot 2\\).",
        "workingOut": "\\(f'(x)=\\dfrac{2x e^{x}-2(e^{x}+1)}{4x^{2}}\\)",
        "graphData": null
      },
      {
        "explanation": "Expand the numerator: \\(2x e^{x}-2e^{x}-2\\). So \\(f'(x)=\\dfrac{2x e^{x}-2e^{x}-2}{4x^{2}}\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(\\dfrac{2xe^{x}-2e^{x}-2}{4x^{2}}\\)",
        "graphData": null
      },
      {
        "explanation": "Cancel a common factor of 2 from every term in the numerator and from the denominator: numerator becomes \\(x e^{x}-e^{x}-1\\), denominator becomes \\(2x^{2}\\).",
        "workingOut": "\\(f'(x)=\\dfrac{x e^{x}-e^{x}-1}{2x^{2}}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "car2020-q15",
    "topicId": "y12a-exam",
    "c": "4H",
    "t": "The trapezoidal rule",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "Use two applications of the trapezoidal rule to find an approximation to the area given in the diagram. The three parallel heights are $6$ m, $7$ m, and $10$ m, and each strip has width $6$ m.",
    "opts": [
      "\\(-90 \\text{ m}^2\\)",
      "\\(90 \\text{ m}^2\\)",
      "\\(90 \\text{ m}^2 + 1\\)",
      "\\(90 \\text{ m}^4\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Apply the trapezoidal rule: $A \\approx \\frac{h}{2}(y_0 + 2y_1 + y_2)$ where $h$ is the common width and $y_0, y_1, y_2$ are the three heights.",
    "solution": "The correct answer is \\(90 \\text{ m}^2\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Caringbah 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(A \\approx \\dfrac{h}{2}(y_0 + 2y_1 + y_2)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(A \\approx \\dfrac{6}{2}(6 + 2(7) + 10) = 3(6 + 14 + 10)\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(= 3 \\times 30 = 90 \\text{ m}^2\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 90 \\text{ m}^2. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(90 \\text{ m}^2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "car2020-q16",
    "topicId": "y12a-exam",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "$ABC$ is a triangular airfield with $AB = BC = 6.4$ km. The bearing of $B$ from $A$ is $140°$ and the bearing of $C$ from $B$ is $032°$.\n\n(a) Show that $\\angle ABC = 72°$.\n\n(b) Find the area of the airfield, correct to the nearest square kilometre.",
    "opts": [
      "\\(\\dfrac{9}{5}\\)",
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "(a) \\(\\angle ABC = \\angle ABN + \\angle NBC = 40° + 32° = 72°\\)\n\n(b) \\(\\approx 19 \\text{ km}^2\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "For (a), use the property that alternate angles on parallel north lines are equal. For (b), use the area formula $A = \\frac{1}{2}ab\\sin C$.",
    "solution": "The correct answer is (a) \\(\\angle ABC = \\angle ABN + \\angle NBC = 40° + 32° = 72°\\)\n\n(b) \\(\\approx 19 \\text{ km}^2\\).",
    "solutionSteps": [
      {
        "explanation": "For (a): The bearing of \\(B\\) from \\(A\\) is \\(140°\\). The angle between the north direction at \\(A\\) and the line \\(AB\\) measured clockwise is \\(140°\\), so the angle between line \\(AB\\) and the south direction is \\(180°-140° = 40°\\).",
        "workingOut": "\\(\\angle \\text{(south at }A\\text{, toward }B) = 180° - 140° = 40°\\)",
        "graphData": null
      },
      {
        "explanation": "By alternate interior angles on parallel north lines (north at \\(A\\) \\!\\!\\parallel\\!\\! north at \\(B\\)), the angle \\(\\angle ABN\\) (from line \\(BA\\) to north at \\(B\\)) is also \\(40°\\).",
        "workingOut": "\\(\\angle ABN = 40° \\quad (\\text{alternate angles, parallel north lines})\\)",
        "graphData": null
      },
      {
        "explanation": "The bearing of \\(C\\) from \\(B\\) is \\(032°\\), so \\(\\angle NBC = 32°\\). Adding the two angles at \\(B\\):.",
        "workingOut": "\\(\\angle ABC = \\angle ABN + \\angle NBC = 40° + 32° = 72° \\checkmark\\)",
        "graphData": null
      },
      {
        "explanation": "For (b): use the area formula \\(A = \\frac{1}{2}ab\\sin C\\) with \\(a = b = 6.4\\) km and \\(C = 72°\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(A = \\tfrac{1}{2} \\times 6.4 \\times 6.4 \\times \\sin 72°\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "car2020-q17",
    "topicId": "y12a-exam",
    "c": "6G",
    "t": "Trigonometric equations",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Solve $|2\\cos x - 1| = 1$ for $0 \\leq x \\leq \\pi$.",
    "opts": [
      "\\(-x = 0,\\ \\dfrac{\\pi}{2}\\)",
      "\\(x = 0,\\ \\dfrac{\\pi}{2}\\)",
      "\\(x = 0,\\ \\frac{1}{2}\\)",
      "\\(x = 0,\\ \\frac{2}{\\pi}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Remove the absolute value by considering two cases: $2\\cos x - 1 = 1$ and $2\\cos x - 1 = -1$.",
    "solution": "The correct answer is \\(x = 0,\\ \\dfrac{\\pi}{2}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Caringbah 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(2\\cos x - 1 = 1 \\quad \\text{or} \\quad 2\\cos x - 1 = -1\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(2\\cos x = 2 \\implies \\cos x = 1 \\implies x = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "2\\cos x = 0 \\implies \\cos x = 0 \\implies x = \\dfrac{\\pi}{2}\\( (in \\)[0, pi])",
        "graphData": null
      },
      {
        "explanation": "Final answer: x = 0,\\ \\dfrac{\\pi}{2}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(x = 0,\\ \\dfrac{\\pi}{2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "car2020-q18",
    "topicId": "y12a-exam",
    "c": "3B",
    "t": "Stationary points and turning points",
    "type": "multi_part",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Consider the curve \\(y = 2x^3 - 9x^2 + 12x\\).",
    "a": "",
    "solution": "",
    "subQuestions": [
      {
        "id": "car2020-q18a",
        "topicId": "y12a-exam",
        "c": "3B",
        "t": "Stationary points and turning points",
        "type": "multiple_choice",
        "difficulty": "hard",
        "timeLimit": 120,
        "question": "(a) Find the coordinates of the stationary points and determine their nature.",
        "opts": [
          "Local maximum at \\((1, 5)\\); local minimum at \\((2, 4)\\)",
          "Local minimum at \\((1, 5)\\); local maximum at \\((2, 4)\\)",
          "Local maximum at \\((-1, -23)\\); local minimum at \\((2, 4)\\)",
          "Local minimum at \\((-1, -23)\\); local maximum at \\((2, 4)\\)"
        ],
        "a": 0,
        "answer": "0",
        "hint": "Find \\(y'\\) and set it to zero. Use \\(y''\\) to classify.",
        "solution": "The correct answer is Local maximum at \\((1, 5)\\); local minimum at \\((2, 4)\\).",
        "solutionSteps": [
          {
            "explanation": "Step 1: Differentiate the function to find the first derivative \\(y'\\).",
            "workingOut": "$$ y' = 6x^2 - 18x + 12 $$",
            "graphData": null
          },
          {
            "explanation": "Step 2: Set \\(y' = 0\\) to find the \\(x\\)-coordinates of the stationary points.",
            "workingOut": "$$ \\begin{aligned} 6x^2 - 18x + 12 &= 0 \\\\\\\\ 6(x^2 - 3x + 2) &= 0 \\\\\\\\ (x - 1)(x - 2) &= 0 \\implies x = 1, x = 2 \\end{aligned} $$",
            "graphData": null
          },
          {
            "explanation": "Step 3: Find the corresponding \\(y\\)-coordinates by substituting \\(x = 1\\) and \\(x = 2\\) into the original equation.",
            "workingOut": "$$ \\begin{aligned} \\text{For } x = 1: &\\quad y = 2(1)^3 - 9(1)^2 + 12(1) = 5 \\implies (1, 5) \\\\\\\\ \\text{For } x = 2: &\\quad y = 2(2)^3 - 9(2)^2 + 12(2) = 4 \\implies (2, 4) \\end{aligned} $$",
            "graphData": null
          },
          {
            "explanation": "Step 4: Find the second derivative \\(y''\\) and use it to determine the nature of each stationary point.",
            "workingOut": "$$ \\begin{aligned} y'' &= 12x - 18 \\\\\\\\ \\text{At } x = 1: &\\quad y'' = 12(1) - 18 = -6 < 0 \\implies \\text{Local Maximum at } (1, 5) \\\\\\\\ \\text{At } x = 2: &\\quad y'' = 12(2) - 18 = 6 > 0 \\implies \\text{Local Minimum at } (2, 4) \\end{aligned} $$",
            "graphData": null
          }
        ],
        "graphData": null,
        "isNew": true,
        "requiresManualGrading": false
      },
      {
        "id": "car2020-q18b",
        "topicId": "y12a-exam",
        "c": "3B",
        "t": "Stationary points and turning points",
        "type": "multiple_choice",
        "difficulty": "hard",
        "timeLimit": 120,
        "question": "(b) Which of the following is true about its point of inflection?",
        "opts": [
          "It occurs at \\(x = \\frac{3}{2}\\) because \\(y'' = 0\\) and concavity changes.",
          "It occurs at \\(x = 1\\) because \\(y' = 0\\) and gradient changes.",
          "It occurs at \\(x = 2\\) because \\(y'' = 0\\) and concavity changes.",
          "There is no point of inflection."
        ],
        "a": 0,
        "answer": "0",
        "hint": "Set \\(y'' = 0\\) and verify that the sign of \\(y''\\) changes.",
        "solution": "The correct answer is It occurs at \\(x = \\frac{3}{2}\\) because \\(y'' = 0\\) and concavity changes.",
        "solutionSteps": [
          {
            "explanation": "Step 1: Set the second derivative \\(y''\\) to zero to find the possible point of inflection.",
            "workingOut": "$$ \\begin{aligned} y'' &= 12x - 18 \\\\\\\\ 12x - 18 &= 0 \\implies 12x = 18 \\implies x = \\frac{3}{2} \\end{aligned} $$",
            "graphData": null
          },
          {
            "explanation": "Step 2: Verify that the concavity actually changes at \\(x = \\frac{3}{2}\\) by testing \\(y''\\) on either side.",
            "workingOut": "$$ \\begin{aligned} \\text{Test } x = 1: &\\quad y''(1) = -6 < 0 \\quad (\\text{Concave down}) \\\\\\\\ \\text{Test } x = 2: &\\quad y''(2) = 6 > 0 \\quad (\\text{Concave up}) \\end{aligned} $$",
            "graphData": null
          },
          {
            "explanation": "Step 3: Conclude that a change in concavity confirms a point of inflection.",
            "workingOut": "$$ \\text{Since concavity changes, there is a true point of inflection at } x = \\frac{3}{2}. $$",
            "graphData": null
          }
        ],
        "graphData": null,
        "isNew": true,
        "requiresManualGrading": false
      },
      {
        "id": "car2020-q18c",
        "topicId": "y12a-exam",
        "c": "3B",
        "t": "Stationary points and turning points",
        "type": "teacher_review",
        "difficulty": "hard",
        "timeLimit": 120,
        "question": "(c) Sketch the graph, indicating clearly all important features.",
        "opts": [],
        "a": 0,
        "answer": "See the solution for the full sketch.",
        "hint": "Combine the stationary points, point of inflection, and y-intercept \\((0,0)\\) to draw the curve.",
        "solution": "The curve passes through the origin, has a local maximum at \\((1, 5)\\), a point of inflection at \\((1.5, 4.5)\\), and a local minimum at \\((2, 4)\\).<br/>\n<div style=\"display:flex; justify-content:center; margin: 16px 0;\">\n<svg viewBox=\"0 0 400 300\" width=\"100%\" style=\"max-width:400px; background-color:white; border:1px solid #ccc; border-radius:8px;\">\n  <!-- Axes -->\n  <line x1=\"20\" y1=\"250\" x2=\"380\" y2=\"250\" stroke=\"#333\" stroke-width=\"2\" /> <!-- x-axis -->\n  <line x1=\"50\" y1=\"20\" x2=\"50\" y2=\"280\" stroke=\"#333\" stroke-width=\"2\" /> <!-- y-axis -->\n  \n  <!-- Labels -->\n  <text x=\"370\" y=\"240\" fill=\"#333\" font-size=\"14\" font-family=\"sans-serif\">x</text>\n  <text x=\"60\" y=\"30\" fill=\"#333\" font-size=\"14\" font-family=\"sans-serif\">y</text>\n  <text x=\"35\" y=\"265\" fill=\"#333\" font-size=\"12\" font-family=\"sans-serif\">O</text>\n\n  <!-- Curve -->\n  <polyline fill=\"none\" stroke=\"#2563eb\" stroke-width=\"3\" points=\"34.0,305.5 42.0,275.8 50.0,250.0 58.0,227.8 66.0,208.9 74.0,193.1 82.0,180.2 90.0,170.0 98.0,162.2 106.0,156.5 114.0,152.7 122.0,150.6 130.0,150.0 138.0,150.6 146.0,152.1 154.0,154.3 162.0,157.0 170.0,160.0 178.0,163.0 186.0,165.7 194.0,167.9 202.0,169.4 210.0,170.0 218.0,169.4 226.0,167.3 234.0,163.5 242.0,157.8 250.0,150.0 258.0,139.8 266.0,126.9 274.0,111.1 282.0,92.2 290.0,70.0 298.0,44.2\" />\n  \n  <!-- Points -->\n  <circle cx=\"130\" cy=\"150\" r=\"4\" fill=\"#dc2626\" />\n  <text x=\"110\" y=\"140\" fill=\"#dc2626\" font-size=\"12\" font-family=\"sans-serif\">(1, 5)</text>\n  \n  <circle cx=\"210\" cy=\"170\" r=\"4\" fill=\"#dc2626\" />\n  <text x=\"215\" y=\"185\" fill=\"#dc2626\" font-size=\"12\" font-family=\"sans-serif\">(2, 4)</text>\n  \n  <circle cx=\"170\" cy=\"160\" r=\"4\" fill=\"#059669\" />\n  <text x=\"175\" y=\"155\" fill=\"#059669\" font-size=\"12\" font-family=\"sans-serif\">POI (1.5, 4.5)</text>\n</svg>\n</div>\n",
        "solutionSteps": [
          {
            "explanation": "Step 1: Identify the \\(y\\)-intercept.",
            "workingOut": "$$ \\text{When } x = 0, \\quad y = 2(0)^3 - 9(0)^2 + 12(0) = 0 \\implies (0, 0) $$",
            "graphData": null
          },
          {
            "explanation": "Step 2: Use the stationary points from part (a).",
            "workingOut": "$$ \\text{Local max at } (1, 5) \\text{ and local min at } (2, 4) $$",
            "graphData": null
          },
          {
            "explanation": "Step 3: Use the point of inflection from part (b).",
            "workingOut": "$$ \\text{Point of inflection at } (1.5, 4.5) $$",
            "graphData": null
          },
          {
            "explanation": "Step 4: Analyze end behavior. As \\(x \\to \\infty\\), \\(y \\to \\infty\\). As \\(x \\to -\\infty\\), \\(y \\to -\\infty\\).",
            "workingOut": "$$ \\text{End behavior: cubic with positive leading coefficient} $$",
            "graphData": null
          },
          {
            "explanation": "Step 5: Sketch the graph smoothly connecting these features.",
            "workingOut": "\n<div style=\"display:flex; justify-content:center; margin: 16px 0;\">\n<svg viewBox=\"0 0 400 300\" width=\"100%\" style=\"max-width:400px; background-color:white; border:1px solid #ccc; border-radius:8px;\">\n  <!-- Axes -->\n  <line x1=\"20\" y1=\"250\" x2=\"380\" y2=\"250\" stroke=\"#333\" stroke-width=\"2\" /> <!-- x-axis -->\n  <line x1=\"50\" y1=\"20\" x2=\"50\" y2=\"280\" stroke=\"#333\" stroke-width=\"2\" /> <!-- y-axis -->\n  \n  <!-- Labels -->\n  <text x=\"370\" y=\"240\" fill=\"#333\" font-size=\"14\" font-family=\"sans-serif\">x</text>\n  <text x=\"60\" y=\"30\" fill=\"#333\" font-size=\"14\" font-family=\"sans-serif\">y</text>\n  <text x=\"35\" y=\"265\" fill=\"#333\" font-size=\"12\" font-family=\"sans-serif\">O</text>\n\n  <!-- Curve -->\n  <polyline fill=\"none\" stroke=\"#2563eb\" stroke-width=\"3\" points=\"34.0,305.5 42.0,275.8 50.0,250.0 58.0,227.8 66.0,208.9 74.0,193.1 82.0,180.2 90.0,170.0 98.0,162.2 106.0,156.5 114.0,152.7 122.0,150.6 130.0,150.0 138.0,150.6 146.0,152.1 154.0,154.3 162.0,157.0 170.0,160.0 178.0,163.0 186.0,165.7 194.0,167.9 202.0,169.4 210.0,170.0 218.0,169.4 226.0,167.3 234.0,163.5 242.0,157.8 250.0,150.0 258.0,139.8 266.0,126.9 274.0,111.1 282.0,92.2 290.0,70.0 298.0,44.2\" />\n  \n  <!-- Points -->\n  <circle cx=\"130\" cy=\"150\" r=\"4\" fill=\"#dc2626\" />\n  <text x=\"110\" y=\"140\" fill=\"#dc2626\" font-size=\"12\" font-family=\"sans-serif\">(1, 5)</text>\n  \n  <circle cx=\"210\" cy=\"170\" r=\"4\" fill=\"#dc2626\" />\n  <text x=\"215\" y=\"185\" fill=\"#dc2626\" font-size=\"12\" font-family=\"sans-serif\">(2, 4)</text>\n  \n  <circle cx=\"170\" cy=\"160\" r=\"4\" fill=\"#059669\" />\n  <text x=\"175\" y=\"155\" fill=\"#059669\" font-size=\"12\" font-family=\"sans-serif\">POI (1.5, 4.5)</text>\n</svg>\n</div>\n",
            "graphData": null
          }
        ],
        "graphData": null,
        "isNew": true,
        "requiresManualGrading": true
      }
    ],
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "car2020-q19",
    "topicId": "y12a-exam",
    "c": "4C",
    "t": "The definite integral and its properties",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "The graph of the function $f$ is shown. The shaded areas bounded by $y = f(x)$ and the $x$-axis are: area $A = 8$ (above), area $B = 3$ (below), area $C = 1$ (above). Evaluate $\\displaystyle\\int_{-2}^{5} f(x)\\, dx$.",
    "opts": [
      "\\(-6\\)",
      "\\(5\\)",
      "\\(6\\)",
      "\\(7\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Use the signed area property: a definite integral equals the area above the $x$-axis minus the area below. Identify where $f$ is positive or negative.",
    "solution": "The correct answer is \\(6\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Caringbah 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\int_{-2}^{5} f(x)\\,dx = +A - B + C\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(A=8\\ (\\text{above}),\\; B=3\\ (\\text{below}),\\; C=1\\ (\\text{above})\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(+8 - 3 + 1 = 6\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 6. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(6\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "car2020-q20",
    "topicId": "y12a-exam",
    "c": "4G",
    "t": "Areas of compound regions",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "The diagram shows the curves $y = 2 - \\dfrac{3}{x}$ and $y = x - 2$ for $x \\geq 0$.\n\n(a) Find the coordinates of the two points $P$ and $Q$ where the two curves intersect.\n\n(b) Hence, find in simplest form, the area of the shaded region contained between the two curves.",
    "opts": [
      "\\(\\dfrac{9}{5}\\)",
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "(a) \\(P(1,\\ -1)\\) and \\(Q(3,\\ 1)\\)\n\n(b) \\((4 - 3\\ln 3)\\) square units"
    ],
    "a": 3,
    "answer": "3",
    "hint": "For (a), equate the two expressions and solve. For (b), integrate the top curve minus the bottom curve between the intersection points.",
    "solution": "The correct answer is (a) \\(P(1,\\ -1)\\) and \\(Q(3,\\ 1)\\)\n\n(b) \\((4 - 3\\ln 3)\\) square units.",
    "solutionSteps": [
      {
        "explanation": "For part (a), find the intersection points by equating the two expressions and rearranging. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(2 - \\dfrac{3}{x} = x - 2 \\implies 4x - 3 = x^2 - 2x \\implies x^2 - 4x + 3 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Find the corresponding \\(y\\) values. At \\(x=1\\): \\(y = 1-2 = -1\\). At \\(x=3\\): \\(y = 3-2 = 1\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(P(1, -1) \\quad \\text{and} \\quad Q(3, 1)\\)",
        "graphData": null
      },
      {
        "explanation": "For part (b), the top curve on \\([1,3]\\) is \\(y = 2 - \\frac{3}{x}\\) and the bottom is \\(y = x-2\\). Integrate their difference.",
        "workingOut": "\\(A = \\int_1^3 \\left[(2 - \\tfrac{3}{x}) - (x-2)\\right]dx = \\int_1^3 \\left(4 - \\tfrac{3}{x} - x\\right)dx\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "car2020-q21",
    "topicId": "y12a-exam",
    "c": "8D",
    "t": "Laws for logarithms",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "(a) Show that $\\log_x 2 = \\dfrac{1}{\\log_2 x}$.\n\n(b) Solve the equation $\\log_2 x = 4\\log_x 2$.",
    "opts": [
      "\\(\\dfrac{9}{5}\\)",
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "(a) Change of base proof.\n\n(b) \\(x = 4\\) or \\(x = \\dfrac{1}{4}\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "For (a), apply the change of base rule with base 2. For (b), substitute the result from (a) to create a quadratic in $\\log_2 x$.",
    "solution": "The correct answer is (a) Change of base proof.\n\n(b) \\(x = 4\\) or \\(x = \\dfrac{1}{4}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Caringbah 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\log_x 2 = \\dfrac{\\log_2 2}{\\log_2 x} = \\dfrac{1}{\\log_2 x} \\checkmark\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\log_2 x = \\dfrac{4}{\\log_2 x}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(u^2 = 4 \\implies u = \\pm 2\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (a) Change of base proof.\n\n(b) \\(x = 4\\) or \\(x = \\dfrac{1}{4}\\). Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "(a) Change of base proof.\n\n(b) \\(x = 4\\) or \\(x = \\dfrac{1}{4}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "car2020-q22",
    "topicId": "y12a-exam",
    "c": "10F",
    "t": "Applications of the normal distribution",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "The completion times for the Oztown triathlon race were normally distributed with mean $60$ minutes and standard deviation $5$ minutes. Using the empirical rule, find Ozzie's completion time if he finished ahead of $84\\%$ of competitors.",
    "opts": [
      "\\(55\\) minutes",
      "\\(55\\) minutes + 1",
      "\\(\\dfrac{12}{x + 2}\\)",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Finishing ahead of $84\\%$ means $84\\%$ had a longer time than Ozzie. By the empirical rule, $50\\% + 34\\% = 84\\%$ of values lie above $\\mu - \\sigma$.",
    "solution": "The correct answer is \\(55\\) minutes.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Caringbah 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(P(X > t_{\\text{Ozzie}}) = 84\\%\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(P(X > \\mu - \\sigma) = 50\\% + 34\\% = 84\\%\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(t_{\\text{Ozzie}} = \\mu - \\sigma = 60 - 5 = 55 \\text{ minutes}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(55\\) minutes. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(55\\) minutes",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "car2020-q23",
    "topicId": "y12a-exam",
    "c": "10A",
    "t": "Probability distributions",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "The discrete random variable $X$ has a mean of $2$ and probability distribution:\n\n| $x$ | 1 | 2 | 3 | 4 |\n|---|---|---|---|---|\n| $p(x)$ | $0.3$ | $0.45$ | $a$ | $b$ |\n\n(a) Show that the two equations in terms of $a$ and $b$ are $a + b = 0.25$ and $3a + 4b = 0.8$.\n\n(b) Hence find the values of $a$ and $b$.",
    "opts": [
      "(a) Shown using sum+to+one and mean conditions.\n\n(b) \\(a = 0.2,\\ b = 0.05\\)",
      "(a) Shown using sum-to-one and mean conditions.\n\n(b) \\(a = 0.2,\\ b = 0.05\\)",
      "(a) Shown using sum-to-one and mean conditions.\n\n(b) \\(a = 0.2,\\ b = 0.05\\) + 1",
      "(a) Shown using sum-to-one and mean conditions.\n\n(b) \\(a = 0.4,\\ b = 0.05\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Use the two conditions: (1) all probabilities sum to 1, and (2) $E(X) = \\sum x \\cdot p(x) = 2$.",
    "solution": "The correct answer is (a) Shown using sum-to-one and mean conditions.\n\n(b) \\(a = 0.2,\\ b = 0.05\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Caringbah 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(0.3 + 0.45 + a + b = 1 \\implies a + b = 0.25\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(1(0.3) + 2(0.45) + 3a + 4b = 2 \\implies 1.2 + 3a + 4b = 2 \\implies 3a + 4b = 0.8\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(4a + 4b = 1 \\quad \\cdots (1)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (a) Shown using sum-to-one and mean conditions.\n\n(b) \\(a = 0.2,\\ b = 0.05\\). Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "(a) Shown using sum-to-one and mean conditions.\n\n(b) \\(a = 0.2,\\ b = 0.05\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "car2020-q24",
    "topicId": "y12a-exam",
    "c": "5F",
    "t": "Composite functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Consider the functions $f(x) = e^x$ and $g(x) = \\ln(x-2)$.\n\n(a) Find the composite function $f(g(x))$.\n\n(b) Find the interval notation for the range of the composite function.",
    "opts": [
      "\\(\\dfrac{9}{5}\\)",
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "(a) \\(f(g(x)) = x - 2\\), for \\(x > 2\\)\n\n(b) \\((0,\\ +\\infty)\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "For (a), substitute $g(x)$ into $f$. Note that the domain of $g$ restricts the overall domain. For (b), determine what values $x - 2$ takes when $x > 2$.",
    "solution": "The correct answer is (a) \\(f(g(x)) = x - 2\\), for \\(x > 2\\)\n\n(b) \\((0,\\ +\\infty)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Caringbah 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\text{Domain of } g: x > 2\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(f(g(x)) = e^{g(x)} = e^{\\ln(x-2)}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(f(g(x)) = x - 2 \\quad (x > 2)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (a) \\(f(g(x)) = x - 2\\), for \\(x > 2\\)\n\n(b) \\((0,\\ +\\infty)\\). Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "(a) \\(f(g(x)) = x - 2\\), for \\(x > 2\\)\n\n(b) \\((0,\\ +\\infty)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "car2020-q25",
    "topicId": "y12a-exam",
    "c": "6B",
    "t": "Differentiating the trig functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "If $y = x\\sin 2x$, find $\\dfrac{dy}{dx}$.",
    "opts": [
      "\\(-\\dfrac{dy}{dx} = 2x\\cos 2x + \\sin 2x\\)",
      "\\(\\dfrac{dy}{dx} = 2x\\cos 2x + \\sin 2x\\)",
      "\\(\\frac{1}{dx} = 2x\\cos 2x + \\sin 2x\\)",
      "\\(\\frac{dx}{dy} = 2x\\cos 2x + \\sin 2x\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Apply the product rule with $u = x$ and $v = \\sin 2x$. Remember the chain rule when differentiating $\\sin 2x$.",
    "solution": "The correct answer is \\(\\dfrac{dy}{dx} = 2x\\cos 2x + \\sin 2x\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Caringbah 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(u = x, u' = 1 \\qquad v = \\sin 2x, v' = 2\\cos 2x\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\dfrac{dy}{dx} = (1)(\\sin 2x) + x(2\\cos 2x)\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(= \\sin 2x + 2x\\cos 2x\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\dfrac{dy}{dx} = 2x\\cos 2x + \\sin 2x. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\dfrac{dy}{dx} = 2x\\cos 2x + \\sin 2x\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "car2020-q26",
    "topicId": "y12a-exam",
    "c": "9E",
    "t": "Line of best fit",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "The table below shows the English marks ($x$) and Mathematics marks ($y$) for a class of 12 students (A–L). Only the English mark is available for student $L$ ($x = 80$).\n\n(a) Calculate the correlation coefficient between $x$ and $y$ for students $A$ to $K$. Describe the nature of the correlation.\n\n(b) Find the equation of the least squares regression line of $y$ on $x$ for students $A$ to $K$. Estimate the Mathematics mark of student $L$.",
    "opts": [
      "\\(\\dfrac{9}{5}\\)",
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "(a) \\(r \\approx 0.9\\); strong positive correlation.\n\n(b) \\(y = 18 + 0.72x\\); student \\(L\\)'s estimated mark \\(\\approx 76\\)."
    ],
    "a": 3,
    "answer": "3",
    "hint": "Use a calculator in statistics mode. Describe the sign and strength of $r$. Substitute $x = 80$ into the regression line to predict $L$'s mark.",
    "solution": "The correct answer is (a) \\(r \\approx 0.9\\); strong positive correlation.\n\n(b) \\(y = 18 + 0.72x\\); student \\(L\\)'s estimated mark \\(\\approx 76\\)..",
    "solutionSteps": [
      {
        "explanation": "Enter the data for students A to K into a calculator and compute the correlation coefficient \\(r\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(r \\approx 0.9\\)",
        "graphData": null
      },
      {
        "explanation": "Interpret \\(r\\): since \\(r\\) is close to \\(+1\\), the correlation is strong and positive — as English marks increase, Mathematics marks tend to increase as well.",
        "workingOut": "\\(\\text{Strong positive correlation}\\)",
        "graphData": null
      },
      {
        "explanation": "Using the calculator's linear regression function, find the least squares regression line. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(y = 18 + 0.72x\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute student \\(L\\)'s English mark \\(x = 80\\) into the regression equation. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(y = 18 + 0.72(80) = 18 + 57.6 = 75.6\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "car2020-q27",
    "topicId": "y12a-exam",
    "c": "5G",
    "t": "Differentiation of logarithmic functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "If $y = \\dfrac{e^x}{x+1}$, find $\\dfrac{dy}{dx}$.",
    "opts": [
      "\\(-\\dfrac{dy}{dx} = \\dfrac{xe^x}{(x+1)^2}\\)",
      "\\(\\dfrac{dy}{dx} = \\dfrac{xe^x}{(x+1)^2}\\)",
      "\\(\\frac{1}{dx} = \\dfrac{xe^x}{(x+1)^2}\\)",
      "\\(\\frac{dx}{dy} = \\dfrac{xe^x}{(x+1)^2}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Apply the quotient rule with $u = e^x$ and $v = x+1$.",
    "solution": "The correct answer is \\(\\dfrac{dy}{dx} = \\dfrac{xe^x}{(x+1)^2}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Caringbah 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\dfrac{dy}{dx} = \\dfrac{(x+1)e^x - e^x(1)}{(x+1)^2}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(= \\dfrac{xe^x + e^x - e^x}{(x+1)^2}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(= \\dfrac{xe^x}{(x+1)^2}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\dfrac{dy}{dx} = \\dfrac{xe^x}{(x+1)^2}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\dfrac{dy}{dx} = \\dfrac{xe^x}{(x+1)^2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "car2020-q28",
    "topicId": "y12a-exam",
    "c": "6D",
    "t": "Integrating the trig functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find $\\displaystyle\\int \\tan^2 x\\, dx$.",
    "opts": [
      "\\(\\sin x - x + C\\)",
      "\\(\\tan x - x\\)",
      "\\(\\tan x - x + C\\)",
      "\\(\\tan x - x + C + 1\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Use the Pythagorean identity $\\tan^2 x = \\sec^2 x - 1$ to rewrite the integrand in a form that can be integrated directly.",
    "solution": "The correct answer is \\(\\tan x - x + C\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Caringbah 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\int \\tan^2 x\\,dx = \\int (\\sec^2 x - 1)\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(= \\tan x - x + C\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\tan x - x + C\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\tan x - x + C. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\tan x - x + C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "car2020-q29",
    "topicId": "y12a-exam",
    "c": "4B",
    "t": "The fundamental theorem of calculus",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Evaluate $\\displaystyle\\int_0^2 x(x^2-4)^3\\, dx$.",
    "opts": [
      "\\(-31\\)",
      "\\(-32\\)",
      "\\(-33\\)",
      "\\(32\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Use the reverse chain rule (substitution). Let $u = x^2 - 4$ so that $du = 2x\\,dx$.",
    "solution": "The correct answer is \\(-32\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Caringbah 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(u = x^2 - 4 \\implies du = 2x\\,dx \\implies x\\,dx = \\dfrac{1}{2}\\,du\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(x=0 \\implies u = -4 \\qquad x=2 \\implies u = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\dfrac{1}{2}\\int_{-4}^{0} u^3\\,du\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: -32. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(-32\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "car2020-q30",
    "topicId": "y12a-exam",
    "c": "3G",
    "t": "Applications of maximisation and minimisation",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "A metal crate of fixed volume $9\\text{ m}^3$ is to be made in the shape of a rectangular prism with length $2x$ metres, width $x$ metres and height $h$ metres.\n\n(a) Show that the area $A\\text{ m}^2$ of metal required is given by $A = 4x^2 + \\dfrac{27}{x}$.\n\n(b) Hence find the minimum area of metal required.",
    "opts": [
      "(a) Shown.\n\n(b) \\(27\\text{ m}^2\\)",
      "(a) Shown.\n\n(b) \\(27\\text{ m}^2\\) + 1",
      "(a) Shown.\n\n(b) \\(47\\text{ m}^4\\)",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "For (a), express $h$ from the volume constraint, then substitute into the total surface area formula. For (b), find $dA/dx = 0$ and verify it is a minimum.",
    "solution": "The correct answer is (a) Shown.\n\n(b) \\(27\\text{ m}^2\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Caringbah 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(V = 2x \\cdot x \\cdot h = 2x^2 h = 9 \\implies h = \\dfrac{9}{2x^2}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(A = 2(2x)(x) + 2(2x)h + 2(x)h = 4x^2 + 6xh\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(A = 4x^2 + 6x \\cdot \\dfrac{9}{2x^2} = 4x^2 + \\dfrac{27}{x} \\checkmark\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (a) Shown.\n\n(b) \\(27\\text{ m}^2\\). Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "(a) Shown.\n\n(b) \\(27\\text{ m}^2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "car2020-q31",
    "topicId": "y12a-exam",
    "c": "6E",
    "t": "Applications of integration of trig",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "At time $t$ hours after $12\\!:\\!00$ am, the height ($h$ metres) of the deck of a boat above the level of the jetty is given by $h = 2\\cos\\!\\left(\\dfrac{4\\pi}{25}t\\right) + 1$. Find, correct to the nearest minute, the first time after $12\\!:\\!00$ am when the deck of the boat is level with the jetty.",
    "opts": [
      "\\(4\\!:\\!10\\) am",
      "\\(4\\!:\\!10\\) am + 1",
      "\\(\\dfrac{12}{x + 2}\\)",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Set $h = 0$ and solve $\\cos\\!\\left(\\frac{4\\pi}{25}t\\right) = -\\frac{1}{2}$. Find the smallest positive $t$ and convert to hours and minutes.",
    "solution": "The correct answer is \\(4\\!:\\!10\\) am.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Caringbah 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(2\\cos\\!\\left(\\dfrac{4\\pi}{25}t\\right) + 1 = 0 \\implies \\cos\\!\\left(\\dfrac{4\\pi}{25}t\\right) = -\\dfrac{1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\dfrac{4\\pi}{25}t = \\dfrac{2\\pi}{3} \\quad \\text{or} \\quad \\dfrac{4\\pi}{25}t = \\dfrac{4\\pi}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(t = \\dfrac{25}{6} \\text{ hours}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(4\\!:\\!10\\) am. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(4\\!:\\!10\\) am",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "car2020-q32",
    "topicId": "y12a-exam",
    "c": "2H",
    "t": "Combinations of transformations",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "The function $f(x) = x^2$ is transformed into a new function whose graph is shown in the diagram. The graph has vertex at $(-1, -3)$ and $y$-intercept at $(0, -5)$. Find the equation of the new function in the form $g(x) = kf(x+b) + c$ for some constants $k$, $b$ and $c$.",
    "opts": [
      "\\(g(x) = +2(x-1)^2 + 3\\)",
      "\\(g(x) = -2(x+1)^2 - 3\\)",
      "\\(g(x) = -2(x+1)^2 - 3 + 1\\)",
      "\\(g(x) = -4(x+1)^4 - 4\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "The vertex is at $(-1,-3)$, giving $b=1$ and $c=-3$. Use the $y$-intercept to find $k$.",
    "solution": "The correct answer is \\(g(x) = -2(x+1)^2 - 3\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Caringbah 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(g(x) = k(x+1)^2 - 3\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(g(0) = k(0+1)^2 - 3 = k - 3 = -5\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(k = -2\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: g(x) = -2(x+1)^2 - 3. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(g(x) = -2(x+1)^2 - 3\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "car2020-q33",
    "topicId": "y12a-exam",
    "c": "2I",
    "t": "Trigonometric graphs",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "(a) On the number plane, draw the graphs of $y = \\cos\\pi x$ and $y = 1 - |x|$ for $-3 \\leq x \\leq 3$.\n\n(b) Hence find the number of solutions of the equation $\\cos\\pi x = 1 - |x|$ in the domain $(-\\infty, infty)$.",
    "opts": [
      "(a) See sketches.\n\n(b) \\(5\\) solutions",
      "The opposite of this statement is true.",
      "This is true only when the function is linear.",
      "This only holds for positive values of x."
    ],
    "a": 0,
    "answer": "0",
    "hint": "For (a), $y = \\cos\\pi x$ has period $2$ and amplitude $1$. $y = 1-|x|$ is a V-shape with vertex at $(0,1)$. For (b), count all intersection points over all real $x$.",
    "solution": "The correct answer is (a) See sketches.\n\n(b) \\(5\\) solutions.",
    "solutionSteps": [
      {
        "explanation": "Analyse \\(y = \\cos\\pi x\\): it has period \\(\\frac{2\\pi}{\\pi} = 2\\), amplitude \\(1\\), and passes through \\((0,1)\\), \\((1,0)\\), \\((2,-1)\\), \\((-1,0)\\), \\((-2,-1)\\), etc.",
        "workingOut": "\\(\\text{Period} = 2, quad \\text{Amplitude} = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Analyse \\(y = 1 - |x|\\): it is a V-shape with vertex \\((0,1)\\), crossing the \\(x\\)-axis at \\(x = \\pm 1\\), and is negative for \\(|x| > 1\\).",
        "workingOut": "\\(y = 1 - |x|: \\text{vertex at }(0,1), text{ x-intercepts at }\\pm 1\\)",
        "graphData": null
      },
      {
        "explanation": "From the graph, the two curves intersect at exactly \\(5\\) points over all real \\(x\\): one at \\(x=0\\) and two pairs of symmetric intersections.",
        "workingOut": "\\(\\text{Number of solutions} = 5\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "car2020-q34",
    "topicId": "y12a-exam",
    "c": "6B",
    "t": "Differentiating the trig functions",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "If $y = \\tan^2 x$, find the values of the constants $a$ and $b$ such that $\\dfrac{d^2y}{dx^2} = ay^2 + by + 2$.",
    "opts": [
      "\\(\\dfrac{12}{x + 2}\\)",
      "\\(\\dfrac{13}{x + 3}\\)",
      "\\(a = 6,\\ b = 8\\)",
      "\\(a = 6,\\ b = 8 + 1\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Find $y'$ and $y''$, then substitute $y = \\tan^2 x$ to express $y''$ in terms of $y$.",
    "solution": "The correct answer is \\(a = 6,\\ b = 8\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Caringbah 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\dfrac{dy}{dx} = 2\\tan x \\cdot \\sec^2 x\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(= 2\\tan x(1 + \\tan^2 x) = 2\\tan x + 2\\tan^3 x\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\dfrac{d^2y}{dx^2} = 2\\sec^2 x + 6\\tan^2 x \\cdot \\sec^2 x\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: a = 6,\\ b = 8. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(a = 6,\\ b = 8\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "car2020-q35",
    "topicId": "y12a-exam",
    "c": "10B",
    "t": "Continuous distributions",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "The continuous random variable $X$ has probability density function $f(x) = \\dfrac{1}{2}\\sin x$ for $0 \\leq x \\leq \\pi$.\n\n(a) Find the cumulative distribution function (CDF).\n\n(b) Find the first quartile of the distribution.",
    "opts": [
      "\\(\\dfrac{9}{5}\\)",
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "(a) \\(F(x) = \\dfrac{1}{2}(1 - \\cos x)\\)\n\n(b) \\(x = \\dfrac{\\pi}{3}\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "For (a), integrate $f(x)$ from $0$ to $x$. For (b), set $F(x) = 0.25$ and solve.",
    "solution": "The correct answer is (a) \\(F(x) = \\dfrac{1}{2}(1 - \\cos x)\\)\n\n(b) \\(x = \\dfrac{\\pi}{3}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Caringbah 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(F(x) = \\int_0^x \\dfrac{1}{2}\\sin t\\,dt\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(= \\left[-\\dfrac{1}{2}\\cos t\\right]_0^x = -\\dfrac{1}{2}\\cos x + \\dfrac{1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(F(x) = \\dfrac{1}{2}(1-\\cos x)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (a) \\(F(x) = \\dfrac{1}{2}(1 - \\cos x)\\)\n\n(b) \\(x = \\dfrac{\\pi}{3}\\). Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "(a) \\(F(x) = \\dfrac{1}{2}(1 - \\cos x)\\)\n\n(b) \\(x = \\dfrac{\\pi}{3}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "car2020-q36",
    "topicId": "y12a-exam",
    "c": "5I",
    "t": "Integration of the reciprocal function",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "(a) Differentiate $x\\log_e x$.\n\n(b) Hence or otherwise, evaluate (in exact form), $\\displaystyle\\int_1^2 \\log_e x\\, dx$.",
    "opts": [
      "\\(\\dfrac{9}{5}\\)",
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "(a) \\(1 + \\log_e x\\)\n\n(b) \\(2\\ln 2 - 1\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "For (a), use the product rule. For (b), use the result from (a) to reverse-engineer the antiderivative of $\\ln x$.",
    "solution": "The correct answer is (a) \\(1 + \\log_e x\\)\n\n(b) \\(2\\ln 2 - 1\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Caringbah 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\dfrac{d}{dx}(x\\ln x) = x \\cdot \\dfrac{1}{x} + \\ln x \\cdot 1 = 1 + \\ln x\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\int \\ln x\\,dx = x\\ln x - x + C\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\int_1^2 \\ln x\\,dx = \\big[x\\ln x - x\\big]_1^2\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (a) \\(1 + \\log_e x\\)\n\n(b) \\(2\\ln 2 - 1\\). Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "(a) \\(1 + \\log_e x\\)\n\n(b) \\(2\\ln 2 - 1\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "car2020-q37a",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Caringbah 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 240,
    "question": "At time \\(t\\) years after it was purchased, the value \\(\\$V\\) of a car is given by\n\\( V = 25\\,000e^{-0.5t} \\).\nFind the loss in value of the car during the third year (from the start of year 3 to the end of year 3).",
    "opts": [
      "\\(\\$2\\,500\\)",
      "\\(\\$3\\,620\\) (approx.)",
      "\\(\\$5\\,000\\)",
      "\\(\\$9\\,200\\) (approx.)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "The third year runs from \\(t=2\\) to \\(t=3\\). Loss \\(= V(2)-V(3)\\).",
    "solution": "Loss \\(= V(2)-V(3)=25\\,000\\bigl(e^{-1}-e^{-1.5}\\bigr)\\approx 25\\,000(0.3679-0.2231)\\approx \\$3\\,620\\).",
    "solutionSteps": [
      {
        "explanation": "The third year of ownership runs from the end of year 2 to the end of year 3, i.e. from \\(t=2\\) to \\(t=3\\). The loss in value is the fall in \\(V\\) over that interval: \\(V(2)-V(3)\\).",
        "workingOut": "\\(\\text{Loss} = V(2) - V(3)\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute into \\(V = 25\\,000e^{-0.5t}\\):\n\\(V(2) = 25\\,000e^{-0.5\\cdot 2} = 25\\,000e^{-1}\\),\n\\(V(3) = 25\\,000e^{-0.5\\cdot 3} = 25\\,000e^{-1.5}\\).",
        "workingOut": "\\(V(2)=25\\,000e^{-1},\\quad V(3)=25\\,000e^{-1.5}\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate numerically (using \\(e^{-1}\\approx 0.3679\\) and \\(e^{-1.5}\\approx 0.2231\\)): Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(25\\,000(0.3679 - 0.2231) = 25\\,000\\times 0.1448 \\approx 3\\,620\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "car2020-q37b",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Caringbah 2020 Trial Exam",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 240,
    "question": "At time \\(t\\) years after it was purchased, the value \\(\\$V\\) of a car is given by\n\\( V = 25\\,000e^{-0.5t} \\).\nFind the year in which the car is losing value at a rate of \\(\\$100\\) per year.",
    "opts": [
      "During the 5th year",
      "During the 8th year",
      "During the 10th year",
      "During the 12th year"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Differentiate \\(V\\), set \\(\\left|\\dfrac{dV}{dt}\\right|=100\\), solve for \\(t\\), then interpret which year that falls in.",
    "solution": "\\(\\dfrac{dV}{dt}=-12\\,500e^{-0.5t}\\). Set \\(12\\,500e^{-0.5t}=100\\Rightarrow t=2\\ln 125\\approx 9.66\\). So the rate is \\(\\$100\\) per year during the 10th year.",
    "solutionSteps": [
      {
        "explanation": "The rate of change of value is the derivative. Differentiate \\(V=25\\,000e^{-0.5t}\\) using the chain rule (factor \\(-0.5\\) from the exponent):.",
        "workingOut": "\\(\\dfrac{dV}{dt} = 25\\,000 \\cdot (-0.5)e^{-0.5t} = -12\\,500e^{-0.5t}\\)",
        "graphData": null
      },
      {
        "explanation": "The car is losing value, so the rate of loss is the magnitude \\(\\left|\\dfrac{dV}{dt}\\right|=12\\,500e^{-0.5t}\\). Set this equal to 100:.",
        "workingOut": "\\(12\\,500e^{-0.5t} = 100\\)",
        "graphData": null
      },
      {
        "explanation": "Since \\(9 < 9.66 < 10\\), this occurs between the end of year 9 and the end of year 10 — that is, during the 10th year of ownership.",
        "workingOut": "\\(\\text{During the 10th year}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "car2020-q38",
    "topicId": "y12a-exam",
    "c": "1H",
    "t": "The limiting sum of a geometric series",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "The first term of a geometric series is $16$ and the fourth term is $\\dfrac{1}{4}$.\n\n(a) Find the common ratio.\n\n(b) Find the limiting sum of the series.",
    "opts": [
      "\\(\\dfrac{9}{5}\\)",
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "(a) \\(r = \\dfrac{1}{4}\\)\n\n(b) \\(S_\\infty = \\dfrac{64}{3} = 21\\dfrac{1}{3}\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "Use $T_4 = ar^3$ to find $r$. The limiting sum exists when $|r| < 1$: $S_\\infty = \\frac{a}{1-r}$.",
    "solution": "The correct answer is (a) \\(r = \\dfrac{1}{4}\\)\n\n(b) \\(S_\\infty = \\dfrac{64}{3} = 21\\dfrac{1}{3}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Caringbah 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(16r^3 = \\dfrac{1}{4} \\implies r^3 = \\dfrac{1}{64}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(r = \\dfrac{1}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(S_\\infty = \\dfrac{16}{1 - \\frac{1}{4}} = \\dfrac{16}{\\frac{3}{4}} = \\dfrac{64}{3} = 21\\tfrac{1}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (a) \\(r = \\dfrac{1}{4}\\)\n\n(b) \\(S_\\infty = \\dfrac{64}{3} = 21\\dfrac{1}{3}\\). Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "(a) \\(r = \\dfrac{1}{4}\\)\n\n(b) \\(S_\\infty = \\dfrac{64}{3} = 21\\dfrac{1}{3}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "car2020-q39",
    "topicId": "y12a-exam",
    "c": "7B",
    "t": "Velocity and acceleration as derivatives",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "A particle is moving in a straight line. At time $t$ seconds it has a displacement $x$ metres from a fixed point $O$ on the line, velocity $v$ ms$^{-1}$, and acceleration $a$ ms$^{-2}$ given by $a = 6t - 12$. Initially, the particle is at rest at $O$.\n\n(a) Find expressions for $v$ and $x$ in terms of $t$.\n\n(b) Find when and where the particle is next at rest.",
    "opts": [
      "\\(\\dfrac{9}{5}\\)",
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "(a) \\(v = 3t^2 - 12t\\),\\ \\(x = t^3 - 6t^2\\)\n\n(b) Next at rest at \\(t = 4\\) s, position \\(x = -32\\) m (32 m to the left of \\(O\\))"
    ],
    "a": 3,
    "answer": "3",
    "hint": "Integrate $a$ to get $v$, then integrate $v$ to get $x$. Use initial conditions to find constants. For (b), set $v = 0$ and solve, excluding $t = 0$.",
    "solution": "The correct answer is (a) \\(v = 3t^2 - 12t\\),\\ \\(x = t^3 - 6t^2\\)\n\n(b) Next at rest at \\(t = 4\\) s, position \\(x = -32\\) m (32 m to the left of \\(O\\)).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Caringbah 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(v = \\int(6t-12)\\,dt = 3t^2 - 12t + C\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(v(0) = C = 0 \\implies v = 3t^2 - 12t\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(x = \\int(3t^2-12t)\\,dt = t^3 - 6t^2 + C\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (a) \\(v = 3t^2 - 12t\\),\\ \\(x = t^3 - 6t^2\\)\n\n(b) Next at rest at \\(t = 4\\) s, position \\(x = -32\\) m (32 m to the left of \\(O\\)). Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "(a) \\(v = 3t^2 - 12t\\),\\ \\(x = t^3 - 6t^2\\)\n\n(b) Next at rest at \\(t = 4\\) s, position \\(x = -32\\) m (32 m to the left of \\(O\\))",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "car2020-q40",
    "topicId": "y12a-exam",
    "c": "5J",
    "t": "Applications of integration of log",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "The diagram shows the graph of the curve $y = \\dfrac{e^x - e^{-x}}{e^x + e^{-x}}$.\n\n(a) Show that the shaded region bounded by the curve, the $x$-axis and the line $x = k$, where $k > 0$, has area $\\ln\\!\\left(\\dfrac{e^k + e^{-k}}{2}\\right)$.\n\n(b) Find, in simplest exact form, the value of $k$ such that the shaded region has area $1$ square unit.",
    "opts": [
      "(a) Shown by integrating and simplifying.\n\n(b) \\(k = \\ln\\!\\left(e + \\sqrt{e^2 - 1}\\right)\\)",
      "(a) Shown by integrating and simplifying.\n\n(b) \\(k = \\ln\\!\\left(e + \\sqrt{e^4 - 1}\\right)\\)",
      "(a) Shown by integrating and simplifying.\n\n(b) \\(k = \\ln\\!\\left(e - \\sqrt{e^2 + 1}\\right)\\)",
      "(a) Shown by integrating and simplifying.\n\n(b) \\(k = \\log\\!\\left(e + \\sqrt{e^2 - 1}\\right)\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "For (a), integrate the function and note the antiderivative of $\\frac{u'}{u}$ is $\\ln|u|$. For (b), set the area equal to 1 and solve using a quadratic substitution.",
    "solution": "The correct answer is (a) Shown by integrating and simplifying.\n\n(b) \\(k = \\ln\\!\\left(e + \\sqrt{e^2 - 1}\\right)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Caringbah 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\int_0^k \\dfrac{e^x - e^{-x}}{e^x + e^{-x}}\\,dx = \\Big[\\ln(e^x + e^{-x})\\Big]_0^k\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(= \\ln(e^k + e^{-k}) - \\ln(e^0 + e^0) = \\ln(e^k + e^{-k}) - \\ln 2\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(= \\ln\\!\\left(\\dfrac{e^k + e^{-k}}{2}\\right) \\checkmark\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (a) Shown by integrating and simplifying.\n\n(b) \\(k = \\ln\\!\\left(e + \\sqrt{e^2 - 1}\\right)\\). Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "(a) Shown by integrating and simplifying.\n\n(b) \\(k = \\ln\\!\\left(e + \\sqrt{e^2 - 1}\\right)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  }
];
