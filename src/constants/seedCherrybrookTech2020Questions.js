export const CTHS_2020_QUESTIONS = [
  {
    "id": "cths2020-mc1",
    "topicId": "y12a-exam",
    "c": "3D",
    "t": "Concavity and points of inflection",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "For what values of $x$ is the curve $f(x) = 2x^3 + x^2$ concave down?",
    "opts": [
      "\\(x < -\\dfrac{1}{6}\\)",
      "\\(x > -\\dfrac{1}{6}\\)",
      "\\(x < -6\\)",
      "\\(x > 6\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Find $f''(x)$ and set it less than zero to find where the curve is concave down.",
    "solution": "The correct answer is \\(x < -\\dfrac{1}{6}\\).",
    "solutionSteps": [
      {
        "explanation": "Differentiate \\(f(x) = 2x^3 + x^2\\) once to find the first derivative using the power rule, bringing the power down and reducing the exponent by 1 for each term.",
        "workingOut": "\\(f'(x) = 6x^2 + 2x\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate again to find the second derivative \\(f''(x)\\), which measures the concavity of the curve.",
        "workingOut": "\\(f''(x) = 12x + 2\\)",
        "graphData": null
      },
      {
        "explanation": "Verify by testing \\(x = -1\\): \\(f''(-1) = 12(-1)+2 = -10 < 0\\) ✓ (concave down). And \\(x = 0\\): \\(f''(0) = 2 > 0\\) (concave up) ✓.",
        "workingOut": "\\(f''(-1) = -10 < 0 \\checkmark\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cths2020-mc2",
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
    "hint": "For $\\sqrt{x}$ we need $x \\geq 0$; for $\\frac{1}{\\sqrt{2-x}}$ we need $2-x > 0$. Combine both restrictions.",
    "solution": "The correct answer is \\([0, 2)\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the restrictions from each part. For \\(\\sqrt{x}\\) to be defined, the expression under the square root must be non-negative.",
        "workingOut": "\\(x \\geq 0\\)",
        "graphData": null
      },
      {
        "explanation": "For \\(\\frac{1}{\\sqrt{2-x}}\\) to be defined, the expression under the square root must be positive (strictly, since it is in the denominator and cannot equal zero).",
        "workingOut": "\\(2 - x > 0 \\Rightarrow x < 2\\)",
        "graphData": null
      },
      {
        "explanation": "Write this in interval notation. The left endpoint \\(x=0\\) is included (closed bracket), and the right endpoint \\(x=2\\) is excluded (open bracket).",
        "workingOut": "[0, 2)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cths2020-mc3",
    "topicId": "y12a-exam",
    "c": "12E",
    "t": "Multi-stage experiments",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "Two events, $A$ and $B$, are independent, and $P(A)$ and $P(B)$ are both non-zero.\n\nWhich of the following expressions gives the probability that event $A$ occurs and then event $B$ also occurs?",
    "opts": [
      "\\(P(B|A)\\)",
      "\\(P(A|B)\\)",
      "\\(P(A \\cup B)\\)",
      "\\(P(A)P(B)\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "For independent events, knowing $A$ occurred does not affect the probability of $B$. Use the multiplication rule for independent events.",
    "solution": "The correct answer is \\(P(A)P(B)\\).",
    "solutionSteps": [
      {
        "explanation": "Recall the definition of independent events: \\(A\\) and \\(B\\) are independent if and only if the occurrence of one does not affect the probability of the other.",
        "workingOut": "\\(P(A \\cap B) = P(A) \\cdot P(B)\\)",
        "graphData": null
      },
      {
        "explanation": "Eliminate option A: \\(P(B|A)\\) is the conditional probability of \\(B\\) given \\(A\\), not the probability of both occurring.",
        "workingOut": "\\(P(B|A) = \\frac{P(A \\cap B)}{P(A)} \\neq P(A)P(B) \\text{ in general}\\)",
        "graphData": null
      },
      {
        "explanation": "Eliminate option C: \\(P(A \\cup B)\\) is the probability that at least one of \\(A\\) or \\(B\\) occurs, which is not what is asked.",
        "workingOut": "\\(P(A \\cup B) = P(A) + P(B) - P(A \\cap B)\\)",
        "graphData": null
      },
      {
        "explanation": "For independent events, the multiplication rule gives the probability that both \\(A\\) and \\(B\\) occur.",
        "workingOut": "\\(P(A \\text{ and } B) = P(A) \\cdot P(B)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cths2020-mc4",
    "topicId": "y12a-exam",
    "c": "10C",
    "t": "Mean and variance of a distribution",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "The variance of a discrete random variable $X$ is $\\text{Var}(X) = 2.6$.\n\nCalculate $\\text{Var}(3X - 1)$.",
    "opts": [
      "\\(6.8\\)",
      "\\(7.8\\)",
      "\\(23.4\\)",
      "\\(22.4\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Use the rule $\\text{Var}(aX + b) = a^2 \\cdot \\text{Var}(X)$. Note that adding a constant does not change variance.",
    "solution": "The correct answer is \\(23.4\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cherrybrook Tech 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\text{Var}(aX + b) = a^2 \\cdot \\text{Var}(X)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "a = 3, quad b = -1",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(a^2 = 3^2 = 9\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 23.4. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(23.4\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cths2020-mc5",
    "topicId": "y12a-exam",
    "c": "9H",
    "t": "The product rule",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "What is $f'(x)$ if $f(x) = 3x^4(4-x)^3$?",
    "opts": [
      "\\(12x^3(4-x)^2(7x-16)\\)",
      "\\(12x^3(4-x)^2(16-7x)\\)",
      "\\(3x^3(4-x)^2(7x-16)\\)",
      "\\(3x^3(4-x)^2(16-7x)\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "Apply the product rule with $u = 3x^4$ and $v = (4-x)^3$. Factor the result carefully.",
    "solution": "The correct answer is \\(3x^3(4-x)^2(16-7x)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cherrybrook Tech 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "u = 3x^4, quad v = (4-x)^3",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(u' = 12x^3\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(v' = 3(4-x)^2 \\cdot (-1) = -3(4-x)^2\\)",
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
    "id": "cths2020-mc6",
    "topicId": "y12a-exam",
    "c": "3B",
    "t": "Functions, relations, and graphs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "Which type of relation is shown below?\n\nSet $X = {1, 2, 3, 4}$ maps to set $Y = {D, B, C}$ with: $1 \\to D$, $2 \\to B$, $3 \\to B$, $4 \\to C$.",
    "opts": [
      "\\(One-to-one\\)",
      "\\(One-to-many\\)",
      "\\(Many-to-one\\)",
      "\\(Many-to-many\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Check: does each input map to one output (function)? Do multiple inputs share the same output?",
    "solution": "The correct answer is \\(Many-to-one\\).",
    "solutionSteps": [
      {
        "explanation": "Check if each input maps to more than one output. Each element of \\(X\\) maps to exactly one element of \\(Y\\), so it is not one-to-many.",
        "workingOut": "\\(1 \\to D,\\; 2 \\to B,\\; 3 \\to B,\\; 4 \\to C\\)",
        "graphData": null
      },
      {
        "explanation": "Check if multiple inputs share the same output. Both 2 and 3 map to \\(B\\), so this is not one-to-one.",
        "workingOut": "\\(2 \\to B \\text{ and } 3 \\to B \\Rightarrow \\text{many inputs share one output}\\)",
        "graphData": null
      },
      {
        "explanation": "Since multiple inputs (2 and 3) share a single output (\\(B\\)), the relation is many-to-one. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(\\text{Many-to-one relation}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cths2020-mc7",
    "topicId": "y12a-exam",
    "c": "2I",
    "t": "Trigonometric graphs",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Which of the following best represents the graph of $g(x) = 2\\cos\\!\\left(\\dfrac{x}{2} + \\dfrac{\\pi}{3}\\right)$?",
    "opts": [
      "\\(Graph (A): amplitude 2, period \\(4\\pi\\), shifted left by \\(\\dfrac{2\\pi}{3}\\)\\)",
      "\\(Graph (B): amplitude 2, period \\(4\\pi\\), no phase shift\\)",
      "\\(Graph (C): amplitude 2, period \\(\\pi\\), with phase shift\\)",
      "\\(Graph (D): amplitude 2, period \\(\\pi\\), no phase shift\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Identify amplitude $= |a|$, period $= \\frac{2\\pi}{|b|}$, and phase shift $= -\\frac{c}{b}$ from $g(x) = a\\cos(bx+c)$.",
    "solution": "The correct answer is \\(Graph (A): amplitude 2, period \\(4\\pi\\), shifted left by \\(\\dfrac{2\\pi}{3}\\)\\).",
    "solutionSteps": [
      {
        "explanation": "Write \\(g(x) = 2\\cos\\!\\left(\\frac{x}{2} + \\frac{\\pi}{3}\\right)\\) in standard form \\(a\\cos(bx + c)\\). Identify \\(a = 2\\), \\(b = \\frac{1}{2}\\), \\(c = \\frac{\\pi}{3}\\).",
        "workingOut": "\\(a = 2, quad b = \\tfrac{1}{2}, quad c = \\tfrac{\\pi}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "The phase shift is \\(-\\frac{c}{b} = -\\frac{\\pi/3}{1/2} = -\\frac{2\\pi}{3}\\), meaning the graph is shifted left by \\(\\frac{2\\pi}{3}\\).",
        "workingOut": "\\(\\text{Phase shift} = -\\frac{\\pi/3}{1/2} = -\\frac{2\\pi}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Select the graph with amplitude 2, period \\(4\\pi\\), and a leftward phase shift of \\(\\frac{2\\pi}{3}\\). This matches Graph (A).",
        "workingOut": "\\(\\text{Answer: Graph (A)}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cths2020-mc8",
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
    "hint": "Use log laws to write each term as a multiple of $\\ln 2$, then sum the resulting arithmetic series.",
    "solution": "The correct answer is \\(n(2n+1)\\ln 2\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cherrybrook Tech 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\ln 2 + \\ln 4 + \\cdots + \\ln 2^{2n} = 1\\cdot\\ln 2 + 2\\cdot\\ln 2 + 3\\cdot\\ln 2 + \\cdots + 2n\\cdot\\ln 2\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(= \\ln 2 \\cdot (1 + 2 + 3 + \\cdots + 2n)\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(1 + 2 + \\cdots + 2n = \\frac{2n(2n+1)}{2} = n(2n+1)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: n(2n+1)\\ln 2. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(n(2n+1)\\ln 2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cths2020-mc9",
    "topicId": "y12a-exam",
    "c": "2H",
    "t": "Combinations of transformations",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "What is the equation of the function $f(x)$ whose graph has undergone transformations in the following order?\n- Translated left 2 units\n- Horizontally dilated by a factor of 3\n- Translated down 4 units",
    "opts": [
      "\\(f\\!\\left(\\dfrac{x}{3} + 2\\right) - 4\\)",
      "\\(f(3(x+2)) - 4\\)",
      "\\(f\\!\\left(\\dfrac{x+2}{3}\\right) - 4\\)",
      "\\(f(3x+2) - 4\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Apply transformations to the input $x$ in order: first translate, then dilate. Translating left by 2 replaces $x$ with $x+2$; dilating horizontally by 3 replaces $x$ with $x/3$.",
    "solution": "The correct answer is \\(f\\!\\left(\\dfrac{x}{3} + 2\\right) - 4\\).",
    "solutionSteps": [
      {
        "explanation": "Start with \\(f(x)\\). Step 1 — Translate left 2 units: replace every \\(x\\) with \\((x+2)\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(f(x) \\to f(x+2)\\)",
        "graphData": null
      },
      {
        "explanation": "Step 2 — Horizontally dilate by factor 3: a horizontal dilation by factor \\(k\\) replaces \\(x\\) with \\(x/k\\), so replace \\(x\\) with \\(x/3\\) throughout.",
        "workingOut": "\\(f(x+2) \\to f\\!\\left(\\frac{x}{3}+2\\right)\\)",
        "graphData": null
      },
      {
        "explanation": "The final equation is \\(f\\!\\left(\\frac{x}{3}+2\\right)-4\\), which matches option (A). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(f\\!\\left(\\frac{x}{3}+2\\right) - 4\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cths2020-mc10",
    "topicId": "y12a-exam",
    "c": "3D",
    "t": "Concavity and points of inflection",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "The graph of $y = f(x)$ is shown below. $x = A$ and $x = C$ are stationary points, and $x = B$ is a point of inflection.\n\nFrom the graph: $A < B < C < 0$, the curve has a local maximum at $A$, decreases to a local minimum at $C$, with $B$ between them, and then increases after $C$.\n\nOver what domain is $f'(x) < 0$ and $f''(x) > 0$?",
    "opts": [
      "\\((-\\infty, A)\\)",
      "\\((A, B)\\)",
      "\\((B, C)\\)",
      "\\((C, infty)\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "$f'(x) < 0$ where the function is decreasing. $f''(x) > 0$ where the function is concave up. Find the interval where both hold simultaneously.",
    "solution": "The correct answer is \\((B, C)\\).",
    "solutionSteps": [
      {
        "explanation": "Identify where \\(f'(x) < 0\\): the function is decreasing. From the graph, \\(f\\) decreases from the local maximum at \\(A\\) to the local minimum at \\(C\\), so \\(f'(x) < 0\\) on \\((A, C)\\).",
        "workingOut": "\\(f'(x) < 0 \\text{ on } (A, C)\\)",
        "graphData": null
      },
      {
        "explanation": "Identify where \\(f''(x) > 0\\): the function is concave up. \\(B\\) is the point of inflection, so concavity changes at \\(B\\). From the graph, the curve is concave up after \\(B\\) (transitioning from the decreasing-concave-down phase to the decreasing-concave-up phase).",
        "workingOut": "\\(f''(x) > 0 \\text{ on } (B, infty)\\)",
        "graphData": null
      },
      {
        "explanation": "The domain where both \\(f'(x) < 0\\) (decreasing) and \\(f''(x) > 0\\) (concave up) hold is \\((B, C)\\).",
        "workingOut": "\\(\\text{Answer: } (B, C)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cths2020-q11",
    "topicId": "y12a-exam",
    "c": "1C",
    "t": "Geometric sequences",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "A geometric sequence has a first term of $\\dfrac{1}{8}$ and the 9th term of the sequence is $8192$. What is the common ratio?",
    "opts": [
      "\\(\\dfrac{12}{x + 2}\\)",
      "\\(\\dfrac{13}{x + 3}\\)",
      "\\(r = \\pm 4\\)",
      "\\(r = \\pm 4 + 1\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Use the formula $T_n = ar^{n-1}$ with $a = \\frac{1}{8}$, $T_9 = 8192$, and $n = 9$.",
    "solution": "The correct answer is \\(r = \\pm 4\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cherrybrook Tech 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(T_n = ar^{n-1}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(8192 = \\frac{1}{8} \\cdot r^{9-1} = \\frac{1}{8} r^8\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(r^8 = 8192 \\times 8 = 65536\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: r = \\pm 4. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(r = \\pm 4\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cths2020-q12",
    "topicId": "y12a-exam",
    "c": "6D",
    "t": "Integrating the trigonometric functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the exact value of $\\displaystyle\\int_{\\pi/4}^{\\pi/3} \\cos x\\, dx$.",
    "opts": [
      "\\(-\\dfrac{\\sqrt{3} - \\sqrt{2}}{2}\\)",
      "\\(\\dfrac{\\sqrt{3} - \\sqrt{2}}{2}\\)",
      "\\(\\dfrac{\\sqrt{3} - \\sqrt{2}}{2} + 1\\)",
      "\\(\\dfrac{\\sqrt{4} - \\sqrt{4}}{4}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "The antiderivative of $\\cos x$ is $\\sin x$. Evaluate $[\\sin x]$ at the limits $\\frac{\\pi}{3}$ and $\\frac{\\pi}{4}$.",
    "solution": "The correct answer is \\(\\dfrac{\\sqrt{3} - \\sqrt{2}}{2}\\).",
    "solutionSteps": [
      {
        "explanation": "Identify the antiderivative of \\(\\cos x\\). Recall that \\(\\frac{d}{dx}(\\sin x) = \\cos x\\), so \\(\\int \\cos x\\, dx = \\sin x + C\\).",
        "workingOut": "\\(\\int \\cos x\\,dx = \\sin x + C\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the Fundamental Theorem of Calculus: evaluate the antiderivative at the upper limit minus the lower limit.",
        "workingOut": "\\(\\bigl[\\sin x\\bigr]_{\\pi/4}^{\\pi/3} = \\sin\\frac{\\pi}{3} - \\sin\\frac{\\pi}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "Recall exact values: \\(\\sin\\frac{\\pi}{3} = \\frac{\\sqrt{3}}{2}\\) and \\(\\sin\\frac{\\pi}{4} = \\frac{\\sqrt{2}}{2}\\).",
        "workingOut": "\\(\\sin\\frac{\\pi}{3} = \\frac{\\sqrt{3}}{2}, quad \\sin\\frac{\\pi}{4} = \\frac{\\sqrt{2}}{2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cths2020-q13",
    "topicId": "y12a-exam",
    "c": "6I",
    "t": "The cosine rule",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Three towns, $A$, $B$ and $C$ form a triangle. Town $A$ is 80 km from Town $B$ and Town $C$ is 40 km from Town $A$.\n\nThe bearing of Town $B$ from Town $A$ is $130°$. The bearing of Town $C$ from Town $A$ is $240°$.\n\nFind the distance between Town $B$ and Town $C$, to the nearest kilometre.",
    "opts": [
      "\\(BC \\approx 101\\) km",
      "\\(BC \\approx 101\\) km + 1",
      "\\(\\dfrac{12}{x + 2}\\)",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Find the angle $\\angle BAC$ between the two bearings, then apply the cosine rule: $BC^2 = AB^2 + AC^2 - 2 \\cdot AB \\cdot AC \\cdot \\cos(\\angle BAC)$.",
    "solution": "The correct answer is \\(BC \\approx 101\\) km.",
    "solutionSteps": [
      {
        "explanation": "Find the angle at \\(A\\) between the directions to \\(B\\) and \\(C\\). The bearing to \\(B\\) is \\(130°\\) and to \\(C\\) is \\(240°\\), so the angle between them is found by subtraction.",
        "workingOut": "\\(\\angle BAC = 240° - 130° = 110°\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the cosine rule to find side \\(BC\\), using \\(AB = 80\\) km, \\(AC = 40\\) km, and \\(\\angle BAC = 110°\\).",
        "workingOut": "\\(BC^2 = AB^2 + AC^2 - 2 \\cdot AB \\cdot AC \\cdot \\cos(\\angle BAC)\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate: \\(80^2 = 6400\\), \\(40^2 = 1600\\), \\(2(80)(40) = 6400\\), and \\(\\cos 110° \\approx -0.342\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(BC^2 = 6400 + 1600 - 6400 \\times (-0.342) = 8000 + 2189 \\approx 10189\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cths2020-q14",
    "topicId": "y12a-exam",
    "c": "9H",
    "t": "The product rule",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find $\\dfrac{d}{dx}\\left(x^3 \\tan 2x\\right)$.",
    "opts": [
      "\\(-x^2(3\\tan 2x + 2x\\sec^2 2x)\\)",
      "\\(x(3\\tan 2x + 2x\\sec 2x)\\)",
      "\\(x^2(3\\sin 2x + 2x\\sec^2 2x)\\)",
      "\\(x^2(3\\tan 2x + 2x\\sec^2 2x)\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "Use the product rule with $u = x^3$ and $v = \\tan 2x$. Recall $\\frac{d}{dx}(\\tan kx) = k\\sec^2 kx$.",
    "solution": "The correct answer is \\(x^2(3\\tan 2x + 2x\\sec^2 2x)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cherrybrook Tech 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(u = x^3, quad v = \\tan 2x\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(u' = 3x^2\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(v' = 2\\sec^2 2x\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: x^2(3\\tan 2x + 2x\\sec^2 2x). Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(x^2(3\\tan 2x + 2x\\sec^2 2x)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cths2020-q15",
    "topicId": "y12a-exam",
    "c": "3E",
    "t": "Systematic curve sketching with the derivative",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 180,
    "question": "Sketch the graph of $y = -(x+1)(x-2)^3$, showing the intercepts.",
    "answer": "Curve with \\(x\\)-intercepts at \\(x = -1\\) (single root, crosses axis) and \\(x = 2\\) (triple root, inflection at axis).\n\\(y\\)-intercept at \\(y = 8\\).\nCurve goes from top-left to bottom-right (negative leading coefficient).",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "Curve with \\(x\\)-intercepts at \\(x = -1\\) (single root, crosses axis) and \\(x = 2\\) (triple root, inflection at axis).\n\\(y\\)-intercept at \\(y = 8\\).\nCurve goes from top-left to bottom-right (negative leading coefficient).",
    "solutionSteps": [
      {
        "explanation": "Determine the behaviour at each intercept. A root of odd multiplicity 1 means the curve crosses the \\(x\\)-axis at \\(x=-1\\). A root of odd multiplicity 3 means the curve crosses with an inflection (flat) at \\(x=2\\).",
        "workingOut": "\\(x=-1: \\text{crosses}\\quad x=2: \\text{inflection crossing}\\)",
        "graphData": null
      },
      {
        "explanation": "Determine the end behaviour from the leading term. Expanding: \\(-(x+1)(x-2)^3 \\approx -x^4\\) for large \\(|x|\\).",
        "workingOut": "\\(\\text{As } x \\to \\pm\\infty,\\; y \\to -\\infty\\)",
        "graphData": null
      },
      {
        "explanation": "Sketch the curve: starts from bottom-left, rises through \\((-1, 0)\\), peaks somewhere between \\(-1\\) and \\(2\\), passes through \\((0, 8)\\), inflects through \\((2, 0)\\), then falls to bottom-right.",
        "workingOut": "\\text{Sketch with } (-1,0),\\; (0,8),\\; (2,0)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "cths2020-q16",
    "topicId": "y12a-exam",
    "c": "6E",
    "t": "Given one trig function, find another",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Given $\\cos\\theta = \\dfrac{2}{7}$ and $270° \\leq \\theta \\leq 360°$, find the exact value of $\\sin\\theta$.",
    "opts": [
      "\\(-\\sin\\theta = -\\dfrac{3\\sqrt{5}}{7}\\)",
      "\\(\\sin\\theta = -\\dfrac{3\\sqrt{5}}{7}\\)",
      "\\(\\sin\\theta = -\\dfrac{3\\sqrt{5}}{7} + 1\\)",
      "\\(\\sin\\theta = -\\dfrac{4\\sqrt{5}}{7}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Use the Pythagorean identity $\\sin^2\\theta + \\cos^2\\theta = 1$. Determine the sign of $\\sin\\theta$ from the given quadrant.",
    "solution": "The correct answer is \\(\\sin\\theta = -\\dfrac{3\\sqrt{5}}{7}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cherrybrook Tech 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\sin^2\\theta = 1 - \\cos^2\\theta = 1 - \\left(\\frac{2}{7}\\right)^2 = 1 - \\frac{4}{49} = \\frac{45}{49}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(|\\sin\\theta| = \\sqrt{\\frac{45}{49}} = \\frac{\\sqrt{45}}{7} = \\frac{3\\sqrt{5}}{7}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(270° \\leq \\theta \\leq 360° \\Rightarrow \\sin\\theta < 0\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\sin\\theta = -\\dfrac{3\\sqrt{5}}{7}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\sin\\theta = -\\dfrac{3\\sqrt{5}}{7}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cths2020-q17",
    "topicId": "y12a-exam",
    "c": "6F",
    "t": "Trigonometric identities",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Show that $(\\tan x + \\sec x)^2 = \\dfrac{1 + \\sin x}{1 - \\sin x}$.",
    "opts": [
      "\\(\\dfrac{9}{5}\\)",
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "Proof: expand LHS using \\(\\tan x = \\frac{\\sin x}{\\cos x}\\), \\(\\sec x = \\frac{1}{\\cos x}\\), and \\(\\cos^2 x = 1-\\sin^2 x\\)."
    ],
    "a": 3,
    "answer": "3",
    "hint": "Expand the LHS by writing $\\tan x$ and $\\sec x$ in terms of $\\sin x$ and $\\cos x$, then use $\\cos^2 x = 1-\\sin^2 x = (1-\\sin x)(1+\\sin x)$ to simplify.",
    "solution": "The correct answer is Proof: expand LHS using \\(\\tan x = \\frac{\\sin x}{\\cos x}\\), \\(\\sec x = \\frac{1}{\\cos x}\\), and \\(\\cos^2 x = 1-\\sin^2 x\\)..",
    "solutionSteps": [
      {
        "explanation": "Start with the LHS. Write \\(\\tan x = \\frac{\\sin x}{\\cos x}\\) and \\(\\sec x = \\frac{1}{\\cos x}\\) and combine over a common denominator.",
        "workingOut": "\\(\\text{LHS} = \\left(\\frac{\\sin x}{\\cos x} + \\frac{1}{\\cos x}\\right)^2 = \\left(\\frac{\\sin x + 1}{\\cos x}\\right)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Replace \\(\\cos^2 x\\) in the denominator using the Pythagorean identity \\(\\cos^2 x = 1 - \\sin^2 x\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(= \\frac{(1 + \\sin x)^2}{1 - \\sin^2 x}\\)",
        "graphData": null
      },
      {
        "explanation": "Factorise the denominator as a difference of squares: \\(1 - \\sin^2 x = (1-\\sin x)(1+\\sin x)\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(= \\frac{(1+\\sin x)^2}{(1-\\sin x)(1+\\sin x)}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cths2020-q18",
    "topicId": "y12a-exam",
    "c": "6G",
    "t": "Trigonometric equations",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Solve $2\\cos^2\\alpha - 3\\cos\\alpha - 2 = 0$ for $0 \\leq \\alpha \\leq \\pi$.",
    "opts": [
      "\\(-\\alpha = \\dfrac{2\\pi}{3}\\)",
      "\\(\\alpha = \\dfrac{2\\pi}{3}\\)",
      "\\(\\alpha = \\frac{1}{3}\\)",
      "\\(\\alpha = \\frac{3}{2\\pi}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Let $u = \\cos\\alpha$ and solve the resulting quadratic. Reject solutions outside $[-1, 1]$ and use the quadrant to find the angle.",
    "solution": "The correct answer is \\(\\alpha = \\dfrac{2\\pi}{3}\\).",
    "solutionSteps": [
      {
        "explanation": "Substitute \\(u = \\cos\\alpha\\) to convert the trigonometric equation into a quadratic in \\(u\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(2u^2 - 3u - 2 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve \\(\\cos\\alpha = -\\frac{1}{2}\\) in \\([0, pi]\\). The reference angle is \\(\\frac{\\pi}{3}\\). Since \\(\\cos\\) is negative in the 2nd quadrant, \\(\\alpha = \\pi - \\frac{\\pi}{3}\\).",
        "workingOut": "\\(\\alpha = \\pi - \\frac{\\pi}{3} = \\frac{2\\pi}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Verify: \\(\\cos\\frac{2\\pi}{3} = -\\frac{1}{2}\\) ✓ and \\(\\frac{2\\pi}{3} \\in [0, pi]\\) ✓. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(\\alpha = \\frac{2\\pi}{3}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cths2020-q19",
    "topicId": "y12a-exam",
    "c": "5F",
    "t": "Composite functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Consider the functions $f(x) = e^x$ and $g(x) = \\ln(x-2)$.\n\n(a) Find the composite function $f(g(x))$.\n\n(b) Find in interval notation the range of the composite function.",
    "opts": [
      "\\(\\dfrac{9}{5}\\)",
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "(a) \\(f(g(x)) = x - 2\\)\n(b) \\((0, +\\infty)\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "For (a): substitute $g(x)$ into $f$, then simplify using $e^{\\ln u} = u$. For (b): the domain of $g$ restricts $x$, and this determines the range of $f(g(x))$.",
    "solution": "The correct answer is (a) \\(f(g(x)) = x - 2\\)\n(b) \\((0, +\\infty)\\).",
    "solutionSteps": [
      {
        "explanation": "Part (a): Form the composite by substituting \\(g(x) = \\ln(x-2)\\) into \\(f(x) = e^x\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(f(g(x)) = e^{g(x)} = e^{\\ln(x-2)}\\)",
        "graphData": null
      },
      {
        "explanation": "Note the domain restriction: \\(g(x) = \\ln(x-2)\\) requires \\(x - 2 > 0\\), so \\(x > 2\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(\\text{Domain of } f(g(x)): x > 2\\)",
        "graphData": null
      },
      {
        "explanation": "As \\(x\\) ranges over \\((2, +\\infty)\\), the value \\(x-2\\) ranges over \\((0, +\\infty)\\). State the range in interval notation.",
        "workingOut": "\\(\\text{Range} = (0, +\\infty)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cths2020-q20",
    "topicId": "y12a-exam",
    "c": "3H",
    "t": "Primitive functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "A curve with the equation $y = f(x)$, has $\\dfrac{dy}{dx} = x^3 + 2x - 7$.\n\n(a) The point $P(2, 4)$ lies on the curve. Find the equation of $y$.\n\n(b) Find the equation of the normal to the curve at point $P$, giving your answer in general form.",
    "opts": [
      "\\(\\dfrac{9}{5}\\)",
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "(a) \\(y = \\dfrac{x^4}{4} + x^2 - 7x + 10\\)\n(b) \\(x + 5y - 22 = 0\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "For (a): integrate $\\frac{dy}{dx}$ then use the point $P(2,4)$ to find $C$. For (b): find the gradient of the tangent at $P$, then the normal gradient is $-1/m$.",
    "solution": "The correct answer is (a) \\(y = \\dfrac{x^4}{4} + x^2 - 7x + 10\\)\n(b) \\(x + 5y - 22 = 0\\).",
    "solutionSteps": [
      {
        "explanation": "Part (a): Integrate \\(\\frac{dy}{dx} = x^3 + 2x - 7\\) term by term to find \\(y\\), remembering to add the constant of integration \\(C\\).",
        "workingOut": "\\(y = \\frac{x^4}{4} + x^2 - 7x + C\\)",
        "graphData": null
      },
      {
        "explanation": "Part (b): Find the gradient of the tangent at \\(P\\) by substituting \\(x=2\\) into \\(\\frac{dy}{dx}\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(m_{\\text{tangent}} = 2^3 + 2(2) - 7 = 8 + 4 - 7 = 5\\)",
        "graphData": null
      },
      {
        "explanation": "Use the point-slope form \\(y - y_1 = m(x - x_1)\\) with \\(P(2,4)\\) and \\(m = -\\frac{1}{5}\\), then rearrange to general form.",
        "workingOut": "\\(y - 4 = -\\frac{1}{5}(x-2) \\Rightarrow 5y - 20 = -x + 2 \\Rightarrow x + 5y - 22 = 0\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cths2020-q21b",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Cherrybrook Tech 2020 Trial Exam",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 180,
    "question": "(b) Sketch the curve \\(y = 2x^3 + 3x^2 - 12x - 5\\), showing the stationary points, the point(s) of inflection and the \\(y\\)-intercept.",
    "answer": "Curve with: local max at \\((-2, 15)\\), point of inflection at \\((-\\frac{1}{2}, \\frac{3}{2})\\), local min at \\((1, -12)\\), \\(y\\)-intercept at \\((0, -5)\\).",
    "hint": "Use the results from part (a). The \\(y\\)-intercept is found by substituting \\(x=0\\).",
    "solution": "Curve with: local max at \\((-2, 15)\\), point of inflection at \\((-\\frac{1}{2}, \\frac{3}{2})\\), local min at \\((1, -12)\\), \\(y\\)-intercept at \\((0, -5)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cherrybrook Tech 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\((-2,15),\\;(-\\tfrac{1}{2},\\tfrac{3}{2}),\\;(1,-12),\\;(0,-5)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\text{Cubic shape with negative middle section}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(Curve with: local max at \\((-2, 15)\\), point of inflection at \\((-\\frac{1}{2}, \\frac{3}{2})\\), local min at \\((1, -12)\\), \\(y\\)-intercept at \\((0, -5)\\).\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Curve with: local max at \\((-2, 15)\\), point of inflection at \\((-\\frac{1}{2}, \\frac{3}{2})\\), local min at \\((1, -12)\\), \\(y\\)-intercept at \\((0, -5)\\).. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(Curve with: local max at \\((-2, 15)\\), point of inflection at \\((-\\frac{1}{2}, \\frac{3}{2})\\), local min at \\((1, -12)\\), \\(y\\)-intercept at \\((0, -5)\\).\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "cths2020-q22",
    "topicId": "y12a-exam",
    "c": "2E",
    "t": "Using graphs to solve equations and inequations",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "The graph of $y = \\sin x$ is shown.\n\n(a) Explain why the equation $\\sin x = 1 - \\dfrac{x}{4}$ has three solutions.\n\n(b) Use the graph to approximate the largest solution to the equation $\\sin x = 1 - \\dfrac{x}{4}$.",
    "opts": [
      "\\(\\dfrac{9}{5}\\)",
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "(a) The line \\(y = 1 - \\frac{x}{4}\\) intersects the curve \\(y = \\sin x\\) exactly three times.\n(b) \\(x \\approx 5.8\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "For (a): draw $y = 1 - \\frac{x}{4}$ (a line with $y$-intercept 1 and slope $-\\frac{1}{4}$) on the same axes as $y = \\sin x$ and count intersections. For (b): read off the largest $x$-coordinate of intersection.",
    "solution": "The correct answer is (a) The line \\(y = 1 - \\frac{x}{4}\\) intersects the curve \\(y = \\sin x\\) exactly three times.\n(b) \\(x \\approx 5.8\\).",
    "solutionSteps": [
      {
        "explanation": "Part (a): Rewrite as finding where \\(y=\\sin x\\) and \\(y = 1-\\frac{x}{4}\\) intersect. The line has \\(y\\)-intercept \\((0,1)\\) and slope \\(-\\frac{1}{4}\\).",
        "workingOut": "\\(y_1 = \\sin x, quad y_2 = 1 - \\frac{x}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "The line starts at \\((0,1)\\) and decreases slowly. The sinusoidal curve oscillates between \\(-1\\) and \\(1\\). In the visible domain, the line cuts the sine curve exactly 3 times.",
        "workingOut": "\\(\\text{3 intersection points} \\Rightarrow \\text{3 solutions}\\)",
        "graphData": null
      },
      {
        "explanation": "Part (b): Read the \\(x\\)-coordinate of the rightmost intersection from the graph. The sine curve is decreasing towards \\(-1\\) around \\(x \\approx \\frac{3\\pi}{2} \\approx 4.7\\), and the line intersects near \\(x \\approx 5.8\\).",
        "workingOut": "\\(x \\approx 5.8\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cths2020-q23",
    "topicId": "y12a-exam",
    "c": "5B",
    "t": "Differentiation of exponential functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "If \\(y=\\dfrac{e^{3x}}{x+1}\\), find \\(\\dfrac{dy}{dx}\\).",
    "opts": [
      "\\(\\dfrac{3e^{3x}}{(x+1)^{2}}\\)",
      "\\(\\dfrac{e^{3x}(3x+2)}{(x+1)^{2}}\\)",
      "\\(\\dfrac{e^{3x}(3x+3)}{(x+1)^{2}}\\)",
      "\\(\\dfrac{3e^{3x}(x+1)-e^{3x}}{x+1}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Quotient form \\(y=\\dfrac{e^{3x}}{x+1}\\). Use \\(\\dfrac{vu'-uv'}{v^{2}}\\) with \\(u=e^{3x}\\), \\(v=x+1\\).",
    "solution": "Quotient form \\(y=\\dfrac{e^{3x}}{x+1}\\). Use \\(\\dfrac{vu'-uv'}{v^{2}}\\) with \\(u=e^{3x}\\), \\(v=x+1\\). Chain rule on the numerator: \\(u'=3e^{3x}\\). Denominator: \\(v'=1\\). Quotient rule: \\(\\dfrac{3e^{3x}(x+1)-e^{3x}\\cdot 1}{(x+1)^{2}}\\). Factor \\(e^{3x}\\): numerator \\(e^{3x}\\bigl(3(x+1)-1\\bigr)=e^{3x}(3x+3-1)=e^{3x}(3x+2)\\). Therefore \\(\\dfrac{dy}{dx}=\\dfrac{e^{3x}(3x+2)}{(x+1)^{2}}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cherrybrook Tech 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(u=e^{3x},\\quad v=x+1\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(u'=3e^{3x},\\quad v'=1\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\dfrac{3e^{3x}(x+1)-e^{3x}}{(x+1)^{2}}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\dfrac{e^{3x}(3x+2)}{(x+1)^{2}}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\dfrac{e^{3x}(3x+2)}{(x+1)^{2}}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cths2020-q24a",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Cherrybrook Tech 2020 Trial Exam",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "(a) Sketch \\(f'(x)\\).",
    "answer": "\\(f'(x)\\) is zero at \\(x=-3\\), \\(x=-1\\), \\(x=2\\).\nPositive on \\((-\\infty,-3)\\cup(-1,2)\\), negative on \\((-3,-1)\\cup(2,\\infty)\\).",
    "hint": "The derivative is zero at each turning point of \\(f\\). Use the sign of the slope to determine the sign of \\(f'\\).",
    "solution": "\\(f'(x)\\) is zero at \\(x=-3\\), \\(x=-1\\), \\(x=2\\).\nPositive on \\((-\\infty,-3)\\cup(-1,2)\\), negative on \\((-3,-1)\\cup(2,\\infty)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cherrybrook Tech 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(f'(-3)=f'(-1)=f'(2)=0\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\text{Sign chart: }+,\\,0,-,\\,0,+,\\,0,-\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\(f'(x)\\) is zero at \\(x=-3\\), \\(x=-1\\), \\(x=2\\).\nPositive on \\((-\\infty,-3)\\cup(-1,2)\\), negative on \\((-3,-1)\\cup(2,\\infty)\\).\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(f'(x)\\) is zero at \\(x=-3\\), \\(x=-1\\), \\(x=2\\).\nPositive on \\((-\\infty,-3)\\cup(-1,2)\\), negative on \\((-3,-1)\\cup(2,\\infty)\\).. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\(f'(x)\\) is zero at \\(x=-3\\), \\(x=-1\\), \\(x=2\\).\nPositive on \\((-\\infty,-3)\\cup(-1,2)\\), negative on \\((-3,-1)\\cup(2,\\infty)\\).\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "cths2020-q24b",
    "topicId": "y12a-exam",
    "c": "EXAM",
    "t": "Cherrybrook Tech 2020 Trial Exam",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 180,
    "question": "(b) Sketch \\(f(-x)\\).",
    "answer": "Reflection of \\(f(x)\\) in the \\(y\\)-axis.\nLocal max at \\(x=3\\), local min at \\(x=1\\), local max at \\(x=-2\\).",
    "hint": "Reflecting in the \\(y\\)-axis maps each point \\((a, b)\\) to \\((-a, b)\\).",
    "solution": "Reflection of \\(f(x)\\) in the \\(y\\)-axis.\nLocal max at \\(x=3\\), local min at \\(x=1\\), local max at \\(x=-2\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cherrybrook Tech 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\((x, y) \\to (-x, y)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\text{Reflected graph with max at }x=3,\\text{ min at }x=1\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "Reflection of \\(f(x)\\) in the \\(y\\)-axis.\nLocal max at \\(x=3\\), local min at \\(x=1\\), local max at \\(x=-2\\).",
        "graphData": null
      },
      {
        "explanation": "Final answer: Reflection of \\(f(x)\\) in the \\(y\\)-axis.\nLocal max at \\(x=3\\), local min at \\(x=1\\), local max at \\(x=-2\\).. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "Reflection of \\(f(x)\\) in the \\(y\\)-axis.\nLocal max at \\(x=3\\), local min at \\(x=1\\), local max at \\(x=-2\\).",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "cths2020-q25",
    "topicId": "y12a-exam",
    "c": "5G",
    "t": "Differentiation of logarithmic functions",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "(a) Show that the derivative of $\\ln\\!\\left(\\dfrac{3+x}{3-x}\\right)$ is $\\dfrac{6}{9-x^2}$.\n\n(b) Hence or otherwise find $\\displaystyle\\int \\dfrac{1}{9-x^2}\\, dx$.",
    "opts": [
      "(a) Proof shown.\n(b) \\(\\dfrac{1}{6}\\ln\\!\\left|\\dfrac{3+x}{3-x}\\right| + C\\)",
      "(a) Proof shown.\n(b) \\(\\frac{1}{6}\\ln\\!\\left|\\dfrac{3+x}{3-x}\\right| + C\\)",
      "(a) Proof shown.\n(b) \\(\\frac{6}{1}\\ln\\!\\left|\\dfrac{3+x}{3-x}\\right| + C\\)",
      "-(a) Proof shown.\n(b) \\(\\dfrac{1}{6}\\ln\\!\\left|\\dfrac{3+x}{3-x}\\right| + C\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "For (a): use $\\ln(A/B) = \\ln A - \\ln B$, then differentiate using $\\frac{d}{dx}\\ln(ax+b) = \\frac{a}{ax+b}$. For (b): reverse the result from (a).",
    "solution": "The correct answer is (a) Proof shown.\n(b) \\(\\dfrac{1}{6}\\ln\\!\\left|\\dfrac{3+x}{3-x}\\right| + C\\).",
    "solutionSteps": [
      {
        "explanation": "Part (a): Use the log quotient law to split \\(\\ln\\!\\left(\\frac{3+x}{3-x}\\right) = \\ln(3+x) - \\ln(3-x)\\).",
        "workingOut": "\\(\\ln\\!\\left(\\frac{3+x}{3-x}\\right) = \\ln(3+x) - \\ln(3-x)\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate each term: \\(\\frac{d}{dx}\\ln(3+x) = \\frac{1}{3+x}\\) and \\(\\frac{d}{dx}\\ln(3-x) = \\frac{-1}{3-x}\\).",
        "workingOut": "\\(\\frac{d}{dx}\\!\\left[\\ln\\!\\left(\\frac{3+x}{3-x}\\right)\\right] = \\frac{1}{3+x} - \\frac{-1}{3-x} = \\frac{1}{3+x} + \\frac{1}{3-x}\\)",
        "graphData": null
      },
      {
        "explanation": "Part (b): From part (a), \\(\\frac{d}{dx}\\!\\left[\\ln\\!\\left(\\frac{3+x}{3-x}\\right)\\right] = \\frac{6}{9-x^2}\\). Therefore \\(\\int\\frac{6}{9-x^2}\\,dx = \\ln\\!\\left|\\frac{3+x}{3-x}\\right| + C\\).",
        "workingOut": "\\(\\int \\frac{6}{9-x^2}\\,dx = \\ln\\!\\left|\\frac{3+x}{3-x}\\right| + C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cths2020-q26",
    "topicId": "y12a-exam",
    "c": "4H",
    "t": "The trapezoidal rule",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the Trapezoidal rule, with four sub-intervals, to estimate the value of $\\displaystyle\\int_0^2 \\sqrt{4-x^2}\\, dx$, correct to 3 decimal places.",
    "opts": [
      "\\(\\approx 2.996\\)",
      "\\(\\approx 2.996 + 1\\)",
      "\\(\\approx 4.996\\)",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "With 4 sub-intervals over $[0,2]$, the width is $h = 0.5$. Evaluate $f(x) = \\sqrt{4-x^2}$ at $x = 0, 0.5, 1, 1.5, 2$ then apply the trapezoid formula.",
    "solution": "The correct answer is \\(\\approx 2.996\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cherrybrook Tech 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(h = \\frac{2-0}{4} = 0.5\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(x = 0,\\; 0.5,\\; 1,\\; 1.5,\\; 2\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(f(0)=2,\\; f(0.5)=\\tfrac{\\sqrt{15}}{2},\\; f(1)=\\sqrt{3},\\; f(1.5)=\\tfrac{\\sqrt{7}}{2},\\; f(2)=0\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\approx 2.996. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\approx 2.996\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cths2020-q27",
    "topicId": "y12a-exam",
    "c": "10B",
    "t": "Continuous distributions",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "The probability density function for the continuous random variable $X$ is given by:\n$$f(x) = \\begin{cases} |1-x| & 0 \\leq x \\leq 2 \\\\ 0 & \\text{otherwise} \\end{cases}$$\nFind $P(X \\leq 1.5)$.",
    "opts": [
      "\\(-P(X \\leq 1.5) = \\dfrac{5}{8}\\)",
      "\\(P(X \\leq 1.5) = \\dfrac{5}{8}\\)",
      "\\(P(X \\leq 1.5) = \\frac{1}{8}\\)",
      "\\(P(X \\leq 1.5) = \\frac{8}{5}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Split $|1-x|$ into cases: $(1-x)$ for $x \\leq 1$ and $(x-1)$ for $x > 1$. Integrate separately on $[0,1]$ and $[1, 1.5]$.",
    "solution": "The correct answer is \\(P(X \\leq 1.5) = \\dfrac{5}{8}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cherrybrook Tech 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(|1-x| = \\begin{cases}1-x & x \\leq 1\\\\x-1 & x > 1\\end{cases}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\left[x - \\frac{x^2}{2}\\right]_0^1 = \\left(1 - \\frac{1}{2}\\right) - 0 = \\frac{1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\left[\\frac{x^2}{2} - x\\right]_1^{1.5} = \\left(\\frac{2.25}{2}-1.5\\right)-\\left(\\frac{1}{2}-1\\right) = (-0.375)-(-0.5) = 0.125 = \\frac{1}{8}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: P(X \\leq 1.5) = \\dfrac{5}{8}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(P(X \\leq 1.5) = \\dfrac{5}{8}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cths2020-q28",
    "topicId": "y12a-exam",
    "c": "10E",
    "t": "Normal distributions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "A soft drink company produces a bottled drink. The amount of liquid poured into each bottle by the bottling machine is normally distributed, with a mean of 300 mL and a standard deviation of 10 mL.\n\n(a) A bottle has a $z$-score of $-1.2$. How many mL below the mean is this bottle?\n\n(b) In order to comply with local regulations, at least $97.5\\%$ of bottles must contain more liquid than indicated on the label. What is the largest amount of millilitres the bottle's label should show in order to comply with the regulations?",
    "opts": [
      "\\((a) 12 mL below the mean\n(b) 280 mL\\)",
      "\\((a) 12 mL below the mean\n(b) 280 mL + 1\\)",
      "\\((a) 14 mL below the mean\n(b) 480 mL\\)",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "For (a): use $x = \\mu + z\\sigma$. For (b): 97.5% above the label means 2.5% are below, which corresponds to $z = -2$ (since 95% lie within 2 standard deviations).",
    "solution": "The correct answer is \\((a) 12 mL below the mean\n(b) 280 mL\\).",
    "solutionSteps": [
      {
        "explanation": "Part (a): The \\(z\\)-score measures how many standard deviations away from the mean. \\(z = -1.2\\) means \\(1.2\\) standard deviations below the mean.",
        "workingOut": "\\(\\text{Distance below mean} = |z| \\times \\sigma = 1.2 \\times 10 = 12 \\text{ mL}\\)",
        "graphData": null
      },
      {
        "explanation": "Part (b): If 97.5% of bottles must be above the label value, then 2.5% are below. By the empirical rule, 95% of data lies within \\(\\pm 2\\) standard deviations, so 2.5% lies below \\(\\mu - 2\\sigma\\).",
        "workingOut": "\\(P(X < \\text{label}) = 2.5\\%  \\Rightarrow z = -2\\)",
        "graphData": null
      },
      {
        "explanation": "The label should show at most 280 mL to ensure 97.5% of bottles contain more than the label amount. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(\\text{Maximum label value} = 280 \\text{ mL}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cths2020-q29",
    "topicId": "y12a-exam",
    "c": "12E",
    "t": "Multi-stage experiments",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "It is known at the beginning of winter in a large population, 15% of the people in the population will be infected with a particular virus.\n\n(a) Two people are selected at random, find the probability that both of them have the virus.\n\n(b) Four people are selected at random, find the probability that at least one of them has the virus. Give your answer to 3 decimal places.\n\n(c) What is the smallest number of people a drug company would need to test to have a greater than 95% chance that at least one of the tested people had the virus?",
    "opts": [
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "(a) \\(0.0225\\)\n(b) \\(\\approx 0.478\\)\n(c) \\(19\\) people",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "For (a): multiply probabilities for independent selections. For (b): use complement $P(\\text{at least one}) = 1 - P(\\text{none})$. For (c): solve the inequality $1-(0.85)^n > 0.95$.",
    "solution": "The correct answer is (a) \\(0.0225\\)\n(b) \\(\\approx 0.478\\)\n(c) \\(19\\) people.",
    "solutionSteps": [
      {
        "explanation": "Part (a): Since selections are independent, multiply the probability that one person has the virus by itself for two people.",
        "workingOut": "\\(P(\\text{both}) = (0.15)^2 = 0.0225\\)",
        "graphData": null
      },
      {
        "explanation": "Part (b): Use the complement rule. \\(P(\\text{at least one has virus}) = 1 - P(\\text{none have virus})\\).",
        "workingOut": "\\(P(\\text{at least one}) = 1 - P(\\text{none}) = 1 - (0.85)^4\\)",
        "graphData": null
      },
      {
        "explanation": "Part (c): Set up the inequality for a greater than 95% chance. \\(P(\\text{at least one}) > 0.95 \\Rightarrow 1-(0.85)^n > 0.95 \\Rightarrow (0.85)^n < 0.05\\).",
        "workingOut": "\\((0.85)^n < 0.05\\)",
        "graphData": null
      },
      {
        "explanation": "Take natural logarithm of both sides. Since \\(\\ln(0.85) < 0\\), the inequality reverses when dividing.",
        "workingOut": "\\(n\\ln(0.85) < \\ln(0.05) \\Rightarrow n > \\frac{\\ln(0.05)}{\\ln(0.85)} \\approx \\frac{-2.996}{-0.163} \\approx 18.4\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cths2020-q30",
    "topicId": "y12a-exam",
    "c": "4G",
    "t": "Areas of compound regions",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "The functions $y = \\sqrt{x+1}$ and $y = 11-x$ are sketched below. They intersect at $(8, 3)$.\n\nCalculate the area bounded by the curves $y = \\sqrt{x+1}$ and $y = 11-x$ and the $x$-axis.",
    "opts": [
      "\\(22.5\\) square units",
      "\\(22.5\\) square units + 1",
      "\\(44.5\\) square units",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Split the area into two parts at the intersection point $x=8$: integrate $\\sqrt{x+1}$ from $x=-1$ to $x=8$, then integrate $11-x$ from $x=8$ to $x=11$ (where it meets the $x$-axis).",
    "solution": "The correct answer is \\(22.5\\) square units.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cherrybrook Tech 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(A = \\int_{-1}^{8}\\sqrt{x+1}\\,dx + \\int_{8}^{11}(11-x)\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\int_{-1}^{8}\\sqrt{x+1}\\,dx = \\left[\\frac{2(x+1)^{3/2}}{3}\\right]_{-1}^{8} = \\frac{2(9)^{3/2}}{3} - 0 = \\frac{2 \\times 27}{3} = 18\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\int_{8}^{11}(11-x)\\,dx = \\left[11x-\\frac{x^2}{2}\\right]_8^{11} = \\left(121-\\frac{121}{2}\\right)-\\left(88-32\\right) = \\frac{121}{2}-56 = \\frac{9}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(22.5\\) square units. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(22.5\\) square units",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cths2020-q31",
    "topicId": "y12a-exam",
    "c": "1C",
    "t": "Geometric sequences",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the value(s) of $m$ given that $m$, $3m$ and $m^2 + 20$ are consecutive terms of a geometric sequence.",
    "opts": [
      "\\(\\dfrac{12}{x + 2}\\)",
      "\\(\\dfrac{13}{x + 3}\\)",
      "m = 4\\) or \\(m = 5",
      "m = 4\\) or \\(m = 5 + 1"
    ],
    "a": 2,
    "answer": "2",
    "hint": "In a geometric sequence, the ratio between consecutive terms is constant: $\\frac{3m}{m} = \\frac{m^2+20}{3m}$. Cross-multiply to form a quadratic equation.",
    "solution": "The correct answer is m = 4\\) or \\(m = 5.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cherrybrook Tech 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\frac{3m}{m} = \\frac{m^2+20}{3m}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(3 = \\frac{m^2+20}{3m} \\Rightarrow 9m = m^2 + 20\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(m^2 - 9m + 20 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: m = 4\\) or \\(m = 5. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "m = 4\\) or \\(m = 5",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cths2020-q32",
    "topicId": "y12a-exam",
    "c": "10B",
    "t": "Continuous distributions",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "A probability density function is defined as $f(x) = ke^{-x}$ in the domain $[0, 3]$.\n\n(a) Show that $k = 1.0524$, correct to four decimal places.\n\n(b) Hence, find the median value of the probability density function, correct to three decimal places.",
    "opts": [
      "\\(\\dfrac{9}{5}\\)",
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "(a) \\(k = \\dfrac{1}{1-e^{-3}} \\approx 1.0524\\)\n(b) Median \\(\\approx 0.645\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "For (a): use $\\int_0^3 ke^{-x}dx = 1$ to solve for $k$. For (b): solve $\\int_0^m ke^{-x}dx = 0.5$ for $m$.",
    "solution": "The correct answer is (a) \\(k = \\dfrac{1}{1-e^{-3}} \\approx 1.0524\\)\n(b) Median \\(\\approx 0.645\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cherrybrook Tech 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\int_0^3 ke^{-x}\\,dx = 1\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\left[-ke^{-x}\\right]_0^3 = 1 \\Rightarrow -ke^{-3} + k = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(k(1-e^{-3}) = 1 \\Rightarrow k = \\frac{1}{1-e^{-3}} \\approx \\frac{1}{1-0.0498} \\approx \\frac{1}{0.9502} \\approx 1.0524\\quad\\blacksquare\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (a) \\(k = \\dfrac{1}{1-e^{-3}} \\approx 1.0524\\)\n(b) Median \\(\\approx 0.645\\). Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "(a) \\(k = \\dfrac{1}{1-e^{-3}} \\approx 1.0524\\)\n(b) Median \\(\\approx 0.645\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cths2020-q33",
    "topicId": "y12a-exam",
    "c": "10C",
    "t": "Mean and variance of a distribution",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "A six-sided die is biased as shown in the probability distribution below.\n\n| $x$ | 1 | 2 | 3 | 4 | 5 | 6 |\n|---|---|---|---|---|---|---|\n| $P(X=x)$ | 0.1 | 0.25 | 0.05 | $a$ | 0.17 | 0.13 |\n\n(a) Explain why $a = 0.3$.\n(b) Find $P(2 < X \\leq 4)$.\n(c) Find $P(X \\leq 4 \\mid X > 2)$.\n(d) Find the expected value of $X$.\n(e) Find $E(4X+1)$.\n(f) Find the variance of $X$.",
    "opts": [
      "\\(\\dfrac{9}{5}\\)",
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "(a) All probabilities sum to 1\n(b) \\(0.35\\)\n(c) \\(\\dfrac{7}{13}\\)\n(d) \\(E(X) = 3.58\\)\n(e) \\(E(4X+1) = 15.32\\)\n(f) \\(\\text{Var}(X) \\approx 2.4636\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "For (a): use $\\sum P = 1$. For (c): use conditional probability formula. For (d)-(f): use $E(X) = \\sum x p_x$ and $\\text{Var}(X) = E(X^2) - [E(X)]^2$.",
    "solution": "The correct answer is (a) All probabilities sum to 1\n(b) \\(0.35\\)\n(c) \\(\\dfrac{7}{13}\\)\n(d) \\(E(X) = 3.58\\)\n(e) \\(E(4X+1) = 15.32\\)\n(f) \\(\\text{Var}(X) \\approx 2.4636\\).",
    "solutionSteps": [
      {
        "explanation": "Part (a): All probabilities in a distribution must sum to 1. Add all given probabilities and solve for \\(a\\).",
        "workingOut": "\\(0.1+0.25+0.05+a+0.17+0.13 = 1 \\Rightarrow 0.7 + a = 1 \\Rightarrow a = 0.3\\)",
        "graphData": null
      },
      {
        "explanation": "Part (c): Use \\(P(X\\leq 4|X>2) = \\frac{P(2<X\\leq 4)}{P(X>2)}\\). The denominator \\(P(X>2) = P(3)+P(4)+P(5)+P(6) = 0.05+0.3+0.17+0.13 = 0.65\\).",
        "workingOut": "\\(P(X\\leq 4|X>2) = \\frac{0.35}{0.65} = \\frac{35}{65} = \\frac{7}{13}\\)",
        "graphData": null
      },
      {
        "explanation": "Part (f): Compute \\(E(X^2) = \\sum x^2 P(X=x)\\), then \\(\\text{Var}(X) = E(X^2) - [E(X)]^2\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(E(X^2) = 1(0.1)+4(0.25)+9(0.05)+16(0.3)+25(0.17)+36(0.13) = 0.1+1+0.45+4.8+4.25+4.68 = 15.28\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cths2020-q34",
    "topicId": "y12a-exam",
    "c": "9E",
    "t": "Line of best fit",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Max conducted a survey about age and weekly wage:\n\n| Age ($x$) | 18 | 45 | 28 | 15 | 32 | 68 |\n|---|---|---|---|---|---|---|\n| Wage (\\$/week) ($W$) | 715 | 2350 | 1530 | 438 | 1690 | 1320 |\n\n(a) Using your calculator, find (r) Pearson's correlation coefficient correct to 2 decimal places and describe the type and strength of correlation.\n\n(b) Using your calculator, find the equation of the least-squares regression line in the form $W = Bx + A$ where $A$ and $B$ are integers.\n\n(c) Use your equation to estimate the earnings of a 50 year-old worker.\n\n(d) Justify why the equation from part (b) cannot be used to make valid estimates for ages greater than 68 and less than 15 years.",
    "opts": [
      "\\(\\dfrac{9}{5}\\)",
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "(a) \\(r \\approx 0.53\\), moderate positive correlation\n(b) \\(W = 18x + 706\\)\n(c) 1606\n(d) Extrapolation beyond the data range is unreliable."
    ],
    "a": 3,
    "answer": "3",
    "hint": "Enter data into calculator for (a) and (b). For (d): the regression model is only valid within the range of collected data.",
    "solution": "The correct answer is (a) \\(r \\approx 0.53\\), moderate positive correlation\n(b) \\(W = 18x + 706\\)\n(c) 1606\n(d) Extrapolation beyond the data range is unreliable..",
    "solutionSteps": [
      {
        "explanation": "Part (a): Enter the data pairs into a calculator and compute the Pearson correlation coefficient. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(r \\approx 0.53 \\Rightarrow \\text{moderate positive correlation}\\)",
        "graphData": null
      },
      {
        "explanation": "Part (b): Use the calculator's linear regression function to find the least-squares line. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(W = 18x + 706\\)",
        "graphData": null
      },
      {
        "explanation": "Part (d): The equation is derived from data in the range \\(15 \\leq x \\leq 68\\). Extrapolating beyond this range assumes the linear relationship continues, which may not be valid. For example, substituting \\(x=8\\) gives \\(850 (unrealistic for an 8-year-old).\\).",
        "workingOut": "\\(\\text{Valid only for } 15 \\leq x \\leq 68 \\text{ (interpolation)}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cths2020-q35",
    "topicId": "y12a-exam",
    "c": "7E",
    "t": "Rates and integration",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "A swimming pool is to be emptied for maintenance. The quantity of water, $Q$ in litres, remaining in the pool at a time, $t$ minutes, is given by:\n$$Q(t) = 2000(25-t)^2, quad 0 \\leq t \\leq 25$$\n\n(a) At what rate (in litres/min) is the water being removed at any time $t$?\n\n(b) How long will it take to remove at least half of the water from the pool? Answer to the nearest minute.\n\n(c) At what time does the rate of flow of water from the pool reach 20 kL/minute?\n\n(d) Describe how the amount of water remaining in the pool changes as the pool empties. Mention how the rate itself changes in your answer.",
    "opts": [
      "\\(\\dfrac{9}{5}\\)",
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "(a) \\(4000(25-t)\\) L/min\n(b) 8 minutes\n(c) \\(t = 20\\) min\n(d) The water decreases at a decreasing rate (the rate of removal slows down as the pool empties)."
    ],
    "a": 3,
    "answer": "3",
    "hint": "For (a): differentiate $Q(t)$ and note the rate of removal is $-Q'(t)$. For (b): find when $Q(t) = \\frac{1}{2}Q(0)$. For (c): set $-Q'(t) = 20000$.",
    "solution": "The correct answer is (a) \\(4000(25-t)\\) L/min\n(b) 8 minutes\n(c) \\(t = 20\\) min\n(d) The water decreases at a decreasing rate (the rate of removal slows down as the pool empties)..",
    "solutionSteps": [
      {
        "explanation": "Part (b): Initial volume \\(Q(0) = 2000(25)^2 = 1{,}250{,}000\\) L. Half is \\(625{,}000\\) L. Solve \\(2000(25-t)^2 = 625000\\).",
        "workingOut": "\\((25-t)^2 = 312.5 \\Rightarrow 25-t = \\sqrt{312.5} \\Rightarrow t = 25 - \\sqrt{312.5} \\approx 7.32\\)",
        "graphData": null
      },
      {
        "explanation": "Round to the nearest minute: \\(t \\approx 8\\) minutes (since we need at least half removed, we take \\(t = 8\\)).",
        "workingOut": "\\(t \\approx 8 \\text{ minutes}\\)",
        "graphData": null
      },
      {
        "explanation": "Part (c): Set the removal rate equal to 20 kL/min = 20,000 L/min and solve for \\(t\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(4000(25-t) = 20000 \\Rightarrow 25-t = 5 \\Rightarrow t = 20 \\text{ min}\\)",
        "graphData": null
      },
      {
        "explanation": "Part (d): As \\(t\\) increases from 0 to 25, \\((25-t)\\) decreases, so the rate \\(4000(25-t)\\) decreases. The pool empties at a decreasing rate — it starts fast and slows down as it empties.",
        "workingOut": "\\(\\text{Rate } = 4000(25-t) \\text{ is decreasing as } t \\text{ increases}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cths2020-q36",
    "topicId": "y12a-exam",
    "c": "3G",
    "t": "Applications of maximisation and minimisation",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "A 100 centimetre length of wire is cut into two pieces at point P, where $x$ is the length of one of the two pieces of wire.\n\n(a) The piece that is length $x$ cm is used to form a circle and the other is used to form a square. Show that the total area of the circle and square can be given by:\n$$A = \\dfrac{x^2}{4\\pi} + \\dfrac{(100-x)^2}{16}$$\n\n(b) At what length should $x$ be cut to minimise the total area of the circle and square? Give your answer to the nearest centimetre.",
    "opts": [
      "(a) Proof shown.\n(b) \\(x \\approx 44\\) cm",
      "(a) Proof shown.\n(b) \\(x \\approx 44\\) cm + 1",
      "\\(\\dfrac{12}{x + 2}\\)",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "For (a): circumference of circle $= x$, so $r = \\frac{x}{2\\pi}$; area $= \\pi r^2 = \\frac{x^2}{4\\pi}$. Square side $= \\frac{100-x}{4}$; area $= \\frac{(100-x)^2}{16}$. For (b): differentiate $A$, set $A'=0$.",
    "solution": "The correct answer is (a) Proof shown.\n(b) \\(x \\approx 44\\) cm.",
    "solutionSteps": [
      {
        "explanation": "Part (a): The piece of length \\(x\\) forms a circle. Its circumference equals \\(x\\), so \\(2\\pi r = x\\), giving \\(r = \\frac{x}{2\\pi}\\).",
        "workingOut": "\\(r = \\frac{x}{2\\pi}\\)",
        "graphData": null
      },
      {
        "explanation": "The piece of length \\((100-x)\\) forms a square. Each side has length \\(\\frac{100-x}{4}\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(A_{\\text{square}} = \\left(\\frac{100-x}{4}\\right)^2 = \\frac{(100-x)^2}{16}\\)",
        "graphData": null
      },
      {
        "explanation": "Part (b): Differentiate \\(A\\) with respect to \\(x\\) and set \\(\\frac{dA}{dx} = 0\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(\\frac{dA}{dx} = \\frac{x}{2\\pi} - \\frac{2(100-x)}{16} = \\frac{x}{2\\pi} - \\frac{100-x}{8} = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate numerically and verify it is a minimum using \\(A'' = \\frac{1}{2\\pi}+\\frac{1}{8} > 0\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(x = \\frac{100\\pi}{4+\\pi} \\approx \\frac{314.16}{7.142} \\approx 43.99 \\approx 44 \\text{ cm}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  }
];
