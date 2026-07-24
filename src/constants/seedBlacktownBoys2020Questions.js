export const BLACKTOWN_BOYS_2020_QUESTIONS = [
  {
    "id": "bbhs2020-mc1",
    "topicId": "y12a-exam-bbhs",
    "c": "3A",
    "t": "Functions and function notation",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "What is the domain of the function $f(x) = \\sqrt{1 - x^2}$?",
    "opts": [
      "\\((0, 1)\\)",
      "\\([0, 1]\\)",
      "\\((-1, 1)\\)",
      "\\([-1, 1]\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "The expression under the square root must be $\\geq 0$. Solve $1 - x^2 \\geq 0$.",
    "solution": "The correct answer is \\([-1, 1]\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Blacktown Boys 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(1 - x^2 \\geq 0\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(x^2 \\leq 1\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(-1 \\leq x \\leq 1\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: [-1, 1]. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\([-1, 1]\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bbhs2020-mc2",
    "topicId": "y12a-exam-bbhs",
    "c": "3C",
    "t": "Review of linear graphs",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "What is the angle of inclination of the line $\\sqrt{3}x - y + 2\\sqrt{3} = 0$ with respect to the positive $x$-axis?",
    "opts": [
      "\\(30°\\)",
      "\\(60°\\)",
      "\\(120°\\)",
      "\\(150°\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Rearrange to $y = mx + c$ form, then use $\\tan\\theta = m$.",
    "solution": "The correct answer is \\(60°\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Blacktown Boys 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y = \\sqrt{3}x + 2\\sqrt{3}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(m = \\sqrt{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\tan\\theta = \\sqrt{3} \\Rightarrow \\theta = 60°\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 60°. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(60°\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bbhs2020-mc3",
    "topicId": "y12a-exam-bbhs",
    "c": "5F",
    "t": "Review of logarithmic functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Which of the following is equal to $\\dfrac{\\log_3 32}{\\log_3 2}$?",
    "opts": [
      "\\(\\log_3 30\\)",
      "\\(\\log_3 16\\)",
      "\\(16\\)",
      "\\(5\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "Use the change of base formula: $\\dfrac{\\log_3 32}{\\log_3 2} = \\log_2 32$.",
    "solution": "The correct answer is \\(5\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Blacktown Boys 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\frac{\\log_3 32}{\\log_3 2} = \\log_2 32\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(32 = 2^5\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\log_2 2^5 = 5\\)",
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
    "id": "bbhs2020-mc4",
    "topicId": "y12a-exam-bbhs",
    "c": "9A",
    "t": "Displaying data",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "John works in a cake shop, and based on sales over two weeks, he conducted a survey of the five most popular cakes. What type of data is this?",
    "opts": [
      "Categorical nominal",
      "Categorical ordinal",
      "Quantitative continuous",
      "Quantitative discrete"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Types of cakes are names/labels with no natural ordering.",
    "solution": "The correct answer is Categorical nominal.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Blacktown Boys 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\text{Categorical (names/labels) + no ordering} \\Rightarrow \\text{Categorical nominal}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "Categorical nominal",
        "graphData": null
      },
      {
        "explanation": "Final answer: Categorical nominal. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "Categorical nominal",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bbhs2020-mc5",
    "topicId": "y12a-exam-bbhs",
    "c": "9A",
    "t": "Displaying data",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "A graph shows the cost and income lines for producing boxes of chocolates. The cost line starts at about $5 (fixed cost) and has a gentler slope; the income line starts at 0 with a steeper slope. They intersect at the break-even point. How many boxes need to be sold to break even?",
    "opts": [
      "\\(5\\)",
      "\\(4\\)",
      "\\(3\\)",
      "\\(2\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "The break-even point is where the cost and income lines intersect.",
    "solution": "The correct answer is \\(3\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Blacktown Boys 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\text{Intersection at } x = 3\\)",
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
    "requiresManualGrading": false
  },
  {
    "id": "bbhs2020-mc6",
    "topicId": "y12a-exam-bbhs",
    "c": "10E",
    "t": "General normal distributions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "The time taken to travel between two regional cities is approximately normally distributed with a mean of 85 minutes and a standard deviation of 4 minutes. The percentage of travel times that are between 81 minutes and 93 minutes is closest to",
    "opts": [
      "\\(68\\%\\)",
      "\\(70.5\\%\\)",
      "\\(81.5\\%\\)",
      "\\(95\\%\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "81 is 1 SD below the mean; 93 is 2 SD above the mean. Use the 68-95-99.7 rule.",
    "solution": "The correct answer is \\(81.5\\%\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Blacktown Boys 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(z_{81} = \\frac{81-85}{4} = -1, quad z_{93} = \\frac{93-85}{4} = 2\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(34\\% + 47.5\\% = 81.5\\%\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(81.5\\%\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 81.5\\%. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(81.5\\%\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bbhs2020-mc7",
    "topicId": "y12a-exam-bbhs",
    "c": "9A",
    "t": "Displaying data",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "A Pareto chart shows orders received by a business over five months: Apr (25), May (9), Mar (8), Feb (5), Jan (3). Total orders = 50. The cumulative percentage line reaches about 68% after April. What percentage of orders were received in May?",
    "opts": [
      "\\(69\\%\\)",
      "\\(45\\%\\)",
      "\\(30\\%\\)",
      "\\(18\\%\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "Find May's percentage directly: $\\frac{9}{50} \\times 100$. Or read the cumulative percentage line: 68% after April, 86% after May, so May = 86% − 68% = 18%.",
    "solution": "The correct answer is \\(18\\%\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Blacktown Boys 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\text{Total} = 50\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\frac{9}{50} \\times 100 = 18\\%\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(18\\%\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 18\\%. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(18\\%\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bbhs2020-mc8",
    "topicId": "y12a-exam-bbhs",
    "c": "3D",
    "t": "Concavity and points of inflection",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "A graph shows the curve $y = f(x)$ with a point $P(a, f(a))$ in the first quadrant. At $P$ the curve is decreasing and concave down. Which statement is true?",
    "opts": [
      "\\(f'(a) < 0, f''(a) < 0\\)",
      "\\(f'(a) > 0, f''(a) > 0\\)",
      "\\(f'(a) < 0, f''(a) > 0\\)",
      "\\(f'(a) > 0, f''(a) < 0\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Decreasing means $f'(a) < 0$. Concave down means $f''(a) < 0$.",
    "solution": "The correct answer is \\(f'(a) < 0, f''(a) < 0\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Blacktown Boys 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "f'(a) < 0",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "f''(a) < 0",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(f'(a) < 0, f''(a) < 0\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: f'(a) < 0, f''(a) < 0. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(f'(a) < 0, f''(a) < 0\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bbhs2020-mc9",
    "topicId": "y12a-exam-bbhs",
    "c": "12E",
    "t": "Multi-stage experiments and the product rule",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "A box contains five red marbles and four blue marbles. Stella selects three marbles at random, without replacing them. The probability that at least one of the marbles that Stella selects is red is",
    "opts": [
      "\\(\\dfrac{5}{9}\\)",
      "\\(\\dfrac{20}{21}\\)",
      "\\(\\dfrac{5}{42}\\)",
      "\\(\\dfrac{665}{729}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Use the complement: $P(\\text{at least one red}) = 1 - P(\\text{no red})$.",
    "solution": "The correct answer is \\(\\dfrac{20}{21}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Blacktown Boys 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(P(\\geq 1 \\text{ red}) = 1 - P(0 \\text{ red})\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(P(0 \\text{ red}) = \\frac{4}{9} \\times \\frac{3}{8} \\times \\frac{2}{7} = \\frac{24}{504} = \\frac{1}{21}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(P(\\geq 1 \\text{ red}) = 1 - \\frac{1}{21} = \\frac{20}{21}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\dfrac{20}{21}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\dfrac{20}{21}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bbhs2020-mc10",
    "topicId": "y12a-exam-bbhs",
    "c": "4G",
    "t": "Areas of compound regions",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "The graphs of $y = f(x)$ and $y = g(x)$ are shown. $f(x)$ is a curve that goes from $x = a$ to $x = d$; $g(x)$ goes from $x = a$ to $x = c$. They intersect at $x = b$ and $x = c$. The shaded region is between the curves from $x = b$ to $x = c$, and between $f(x)$ and the $x$-axis from $x = c$ to $x = d$, with $g(x) = 0$ for $x > c$. The area of the shaded region could be represented by",
    "opts": [
      "\\(\\displaystyle\\int_a^d (f(x) - g(x))\\,dx\\)",
      "\\(\\displaystyle\\int_0^d (f(x) - g(x))\\,dx\\)",
      "\\(\\displaystyle\\int_0^b (f(x) - g(x))\\,dx + \\int_b^c (f(x) - g(x))\\,dx\\)",
      "\\(\\displaystyle\\int_0^d f(x)\\,dx - \\int_a^c g(x)\\,dx\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "Split the shaded region into (i) between the curves on $[b,c]$ and (ii) under $f$ on $[c,d]$. Alternatively: total area under $f$ from $0$ to $d$, minus area under $g$ from $a$ to $c$.",
    "solution": "The correct answer is \\(\\displaystyle\\int_0^d f(x)\\,dx - \\int_a^c g(x)\\,dx\\).",
    "solutionSteps": [
      {
        "explanation": "Read the diagram carefully. The shaded region has two pieces: (i) the area between the curves \\(y=f(x)\\) and \\(y=g(x)\\) from their intersection at \\(x=b\\) to where \\(g\\) meets the axis at \\(x=c\\); (ii) the area under \\(f\\) alone from \\(x=c\\) to \\(x=d\\) (since \\(g(x)=0\\) for \\(x>c\\)).",
        "workingOut": "\\(\\text{shaded }=\\text{between }f,g\\text{ on }[b,c]\\;+\\;\\text{under }f\\text{ on }[c,d]\\)",
        "graphData": null
      },
      {
        "explanation": "Write each piece as an integral. On \\([b,c]\\) take upper minus lower; on \\([c,d]\\) integrate \\(f\\) down to the \\(x\\)-axis.",
        "workingOut": "\\(A=\\displaystyle\\int_b^c\\big(f(x)-g(x)\\big)\\,dx+\\int_c^d f(x)\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "An equivalent construction that matches an option: take the whole area under \\(f\\) from the left of the figure (\\(x=0\\)) out to \\(x=d\\), then subtract the whole area under \\(g\\) from \\(x=a\\) to \\(x=c\\). Subtracting under \\(g\\) removes exactly the unshaded region that sits under \\(g\\), leaving only the shaded set.",
        "workingOut": "\\(A=\\displaystyle\\int_0^d f(x)\\,dx-\\int_a^c g(x)\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "That is option D. Check the others fail: A and B integrate \\((f-g)\\) over intervals that include unshaded strips between the curves (wrong left endpoint / wrong range). C only runs up to \\(x=c\\), so it misses the strip under \\(f\\) on \\([c,d]\\), and it also includes an extra between-curve piece on \\([0,b]\\).",
        "workingOut": "\\(\\displaystyle\\int_0^d f(x)\\,dx-\\int_a^c g(x)\\,dx\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bbhs2020-11a",
    "topicId": "y12a-exam-bbhs",
    "c": "6I",
    "t": "The cosine rule",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "In a triangle, the sides are 8, 10 and 7. Show that $\\cos A = \\dfrac{23}{32}$, where $A$ is the angle opposite the side of length 7.",
    "opts": [
      "\\(-\\cos A = \\dfrac{8^2 + 10^2 - 7^2}{2 \\times 8 \\times 10} = \\dfrac{64 + 100 - 49}{160} = \\dfrac{115}{160} = \\dfrac{23}{32}\\)",
      "\\(\\cos A = \\dfrac{8^2 + 10^2 - 7^2}{2 \\times 8 \\times 10} = \\dfrac{64 + 100 - 49}{160} = \\dfrac{115}{160} = \\dfrac{23}{32}\\)",
      "\\(\\cos A = \\frac{1}{2 \\times 8 \\times 10} = \\dfrac{64 + 100 - 49}{160} = \\dfrac{115}{160} = \\dfrac{23}{32}\\)",
      "\\(\\cos A = \\frac{2 \\times 8 \\times 10}{8^2 + 10^2 - 7^2} = \\dfrac{64 + 100 - 49}{160} = \\dfrac{115}{160} = \\dfrac{23}{32}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Use the cosine rule: $c^2 = a^2 + b^2 - 2ab\\cos C$.",
    "solution": "The correct answer is \\(\\cos A = \\dfrac{8^2 + 10^2 - 7^2}{2 \\times 8 \\times 10} = \\dfrac{64 + 100 - 49}{160} = \\dfrac{115}{160} = \\dfrac{23}{32}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Blacktown Boys 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\cos A = \\frac{8^2 + 10^2 - 7^2}{2 \\times 8 \\times 10}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\cos A = \\frac{64 + 100 - 49}{160} = \\frac{115}{160}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\cos A = \\frac{23}{32}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\cos A = \\dfrac{8^2 + 10^2 - 7^2}{2 \\times 8 \\times 10} = \\dfrac{64 + 100 - 49}{160} = \\dfrac{115}{160} = \\dfrac{23}{32}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\cos A = \\dfrac{8^2 + 10^2 - 7^2}{2 \\times 8 \\times 10} = \\dfrac{64 + 100 - 49}{160} = \\dfrac{115}{160} = \\dfrac{23}{32}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bbhs2020-11b",
    "topicId": "y12a-exam-bbhs",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Using the result from part (a) that $\\cos A = \\dfrac{23}{32}$ in a triangle with two sides 8 and 10, find the exact area of the triangle.",
    "opts": [
      "\\(\\dfrac{15\\sqrt{55}}{4}\\) units²",
      "\\(\\dfrac{15\\sqrt{55}}{4}\\) units² + 1",
      "\\(\\dfrac{12}{x + 2}\\)",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Find $\\sin A$ using $\\sin^2 A + \\cos^2 A = 1$, then use Area $= \\frac{1}{2}ab\\sin C$.",
    "solution": "The correct answer is \\(\\dfrac{15\\sqrt{55}}{4}\\) units².",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Blacktown Boys 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\sin A = \\sqrt{1 - \\left(\\frac{23}{32}\\right)^2} = \\frac{\\sqrt{1024 - 529}}{32} = \\frac{\\sqrt{495}}{32} = \\frac{3\\sqrt{55}}{32}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\text{Area} = \\tfrac{1}{2} \\times 8 \\times 10 \\times \\frac{3\\sqrt{55}}{32} = \\frac{240\\sqrt{55}}{64} = \\frac{15\\sqrt{55}}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\dfrac{15\\sqrt{55}}{4}\\) units²",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\dfrac{15\\sqrt{55}}{4}\\) units². Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\dfrac{15\\sqrt{55}}{4}\\) units²",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bbhs2020-12a",
    "topicId": "y12a-exam-bbhs",
    "c": "1F",
    "t": "Summing an arithmetic series",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "In an arithmetic series, the first term is 18 and the sum of the first 20 terms is 1310. Show that the 20th term is 113.",
    "opts": [
      "\\(-S_{20} = \\frac{20}{2}(18 + l) = 1310 \\Rightarrow 18 + l = 131 \\Rightarrow l = 113\\)",
      "\\(S_{20} = \\frac{1}{2}(18 + l) = 1310 \\Rightarrow 18 + l = 131 \\Rightarrow l = 113\\)",
      "\\(S_{20} = \\frac{20}{2}(18 + l) = 1310 \\Rightarrow 18 + l = 131 \\Rightarrow l = 113\\)",
      "\\(S_{20} = \\frac{2}{20}(18 + l) = 1310 \\Rightarrow 18 + l = 131 \\Rightarrow l = 113\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Use $S_n = \\frac{n}{2}(a + l)$ where $l$ is the last term.",
    "solution": "The correct answer is \\(S_{20} = \\frac{20}{2}(18 + l) = 1310 \\Rightarrow 18 + l = 131 \\Rightarrow l = 113\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Blacktown Boys 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(S_{20} = \\frac{20}{2}(18 + l) = 1310\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(10(18 + l) = 1310 \\Rightarrow 18 + l = 131 \\Rightarrow l = 113\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(S_{20} = \\frac{20}{2}(18 + l) = 1310 \\Rightarrow 18 + l = 131 \\Rightarrow l = 113\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: S_{20} = \\frac{20}{2}(18 + l) = 1310 \\Rightarrow 18 + l = 131 \\Rightarrow l = 113. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(S_{20} = \\frac{20}{2}(18 + l) = 1310 \\Rightarrow 18 + l = 131 \\Rightarrow l = 113\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bbhs2020-12b",
    "topicId": "y12a-exam-bbhs",
    "c": "1F",
    "t": "Summing an arithmetic series",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "In an arithmetic series, the first term is 18 and the 20th term is 113. Find the common difference.",
    "opts": [
      "\\(\\dfrac{12}{x + 2}\\)",
      "\\(\\dfrac{13}{x + 3}\\)",
      "\\(d = 5\\)",
      "\\(d = 5 + 1\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Use $T_n = a + (n-1)d$.",
    "solution": "The correct answer is \\(d = 5\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Blacktown Boys 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(T_{20} = a + (20-1)d \\Rightarrow 113 = 18 + 19d\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(19d = 95 \\Rightarrow d = 5\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(d = 5\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: d = 5. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(d = 5\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bbhs2020-12c",
    "topicId": "y12a-exam-bbhs",
    "c": "1F",
    "t": "Summing an arithmetic series",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "In an arithmetic series with first term 18 and common difference 5, find the sum of the first 35 terms.",
    "opts": [
      "\\(\\dfrac{13}{x + 3}\\)",
      "\\(S_{35} = 3605\\)",
      "\\(S_{35} = 3605 + 1\\)",
      "\\(S_{45} = 4605\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Use $S_n = \\frac{n}{2}(2a + (n-1)d)$.",
    "solution": "The correct answer is \\(S_{35} = 3605\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Blacktown Boys 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(S_{35} = \\frac{35}{2}(2 \\times 18 + (35-1) \\times 5)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(S_{35} = \\frac{35}{2}(36 + 170) = \\frac{35 \\times 206}{2} = 3605\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(S_{35} = 3605\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: S_{35} = 3605. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(S_{35} = 3605\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bbhs2020-13a",
    "topicId": "y12a-exam-bbhs",
    "c": "4E",
    "t": "The absolute value function",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Given the graph of $f(x) = |ax + b|$, the graph has its vertex at $(2.5, 0)$ and $y$-intercept at $(0, 5)$. What are the values of $a$ and $b$?",
    "opts": [
      "\\(a = 2,\\ b = -5\\)",
      "\\(a = -2,\\ b = 5\\)",
      "\\(a = 2,\\ b = 5\\)",
      "\\(a = 1,\\ b = -2.5\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "The vertex is at the $x$-intercept where $ax + b = 0$. Use the $y$-intercept to find $|b|$, then check which sign for $b$ is consistent.",
    "solution": "The correct answer is \\(a = 2,\\ b = -5\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Blacktown Boys 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(2.5a = -b\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(b = \\pm5\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(a = 2, b = -5\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: a = 2,\\ b = -5. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(a = 2,\\ b = -5\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bbhs2020-13b",
    "topicId": "y12a-exam-bbhs",
    "c": "4E",
    "t": "The absolute value function",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Given $f(x) = |2x - 5|$, solve $f(x) \\geq 3$.",
    "opts": [
      "\\(x \\le 1\\) or \\(x \\ge 4\\)",
      "\\(1 \\le x \\le 4\\)",
      "\\(x \\le -1\\) or \\(x \\ge 4\\)",
      "\\(x \\le 1\\) or \\(x \\ge 5\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Solve $|2x - 5| \\geq 3$ by considering two cases: $2x - 5 \\geq 3$ or $2x - 5 \\leq -3$.",
    "solution": "The correct answer is \\(x \\le 1\\) or \\(x \\ge 4\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Blacktown Boys 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(2x - 5 \\geq 3 \\quad \\text{or} \\quad 2x - 5 \\leq -3\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(x \\geq 4 \\quad \\text{or} \\quad x \\leq 1\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(x \\le 1\\) or \\(x \\ge 4\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: x \\le 1\\) or \\(x \\ge 4. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(x \\le 1\\) or \\(x \\ge 4\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bbhs2020-14a",
    "topicId": "y12a-exam-bbhs",
    "c": "9G",
    "t": "The chain rule",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Differentiate $y = \\tan^3\\!\\left(\\dfrac{x}{4}\\right)$.",
    "opts": [
      "\\(-\\dfrac{dy}{dx} = \\dfrac{3}{4}\\sec^2\\!\\left(\\dfrac{x}{4}\\right)\\tan^2\\!\\left(\\dfrac{x}{4}\\right)\\)",
      "\\(\\dfrac{dy}{dx} = \\dfrac{3}{4}\\sec^2\\!\\left(\\dfrac{x}{4}\\right)\\tan^2\\!\\left(\\dfrac{x}{4}\\right)\\)",
      "\\(\\frac{1}{dx} = \\dfrac{3}{4}\\sec^2\\!\\left(\\dfrac{x}{4}\\right)\\tan^2\\!\\left(\\dfrac{x}{4}\\right)\\)",
      "\\(\\frac{dx}{dy} = \\dfrac{3}{4}\\sec^2\\!\\left(\\dfrac{x}{4}\\right)\\tan^2\\!\\left(\\dfrac{x}{4}\\right)\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Apply the chain rule twice: differentiate the outer power, then $\\tan$, then the inner function.",
    "solution": "The correct answer is \\(\\dfrac{dy}{dx} = \\dfrac{3}{4}\\sec^2\\!\\left(\\dfrac{x}{4}\\right)\\tan^2\\!\\left(\\dfrac{x}{4}\\right)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Blacktown Boys 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\frac{d}{dx}[u^3] = 3u^2 \\frac{du}{dx}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\frac{d}{dx}\\!\\left[\\tan\\!\\left(\\frac{x}{4}\\right)\\right] = \\frac{1}{4}\\sec^2\\!\\left(\\frac{x}{4}\\right)\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\frac{dy}{dx} = \\frac{3}{4}\\sec^2\\!\\left(\\frac{x}{4}\\right)\\tan^2\\!\\left(\\frac{x}{4}\\right)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\dfrac{dy}{dx} = \\dfrac{3}{4}\\sec^2\\!\\left(\\dfrac{x}{4}\\right)\\tan^2\\!\\left(\\dfrac{x}{4}\\right). Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\dfrac{dy}{dx} = \\dfrac{3}{4}\\sec^2\\!\\left(\\dfrac{x}{4}\\right)\\tan^2\\!\\left(\\dfrac{x}{4}\\right)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bbhs2020-14b",
    "topicId": "y12a-exam-bbhs",
    "c": "9I",
    "t": "The quotient rule",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Differentiate $y = \\dfrac{e^{3x} - 5}{x + 1}$.",
    "opts": [
      "\\(-\\dfrac{dy}{dx} = \\dfrac{3xe^{3x} + 2e^{3x} + 5}{(x+1)^2}\\)",
      "\\(\\dfrac{dy}{dx} = \\dfrac{3xe^{3x} + 2e^{3x} + 5}{(x+1)^2}\\)",
      "\\(\\frac{1}{dx} = \\dfrac{3xe^{3x} + 2e^{3x} + 5}{(x+1)^2}\\)",
      "\\(\\frac{dx}{dy} = \\dfrac{3xe^{3x} + 2e^{3x} + 5}{(x+1)^2}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Use the quotient rule: $\\frac{d}{dx}\\left(\\frac{u}{v}\\right) = \\frac{v u' - u v'}{v^2}$.",
    "solution": "The correct answer is \\(\\dfrac{dy}{dx} = \\dfrac{3xe^{3x} + 2e^{3x} + 5}{(x+1)^2}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Blacktown Boys 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(u = e^{3x} - 5, u' = 3e^{3x};\\quad v = x+1, v' = 1\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\frac{dy}{dx} = \\frac{(x+1)(3e^{3x}) - (e^{3x}-5)}{(x+1)^2}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\frac{3xe^{3x} + 3e^{3x} - e^{3x} + 5}{(x+1)^2} = \\frac{3xe^{3x} + 2e^{3x} + 5}{(x+1)^2}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\dfrac{dy}{dx} = \\dfrac{3xe^{3x} + 2e^{3x} + 5}{(x+1)^2}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\dfrac{dy}{dx} = \\dfrac{3xe^{3x} + 2e^{3x} + 5}{(x+1)^2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bbhs2020-15",
    "topicId": "y12a-exam-bbhs",
    "c": "1H",
    "t": "The limiting sum of a geometric series",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "What is the limiting sum of the geometric series $750, -300, 120, -48, ldots$?",
    "opts": [
      "\\(-S_\\infty = \\dfrac{3750}{7}\\)",
      "\\(S_\\infty = \\dfrac{3750}{7}\\)",
      "\\(S_\\infty = \\frac{1}{7}\\)",
      "\\(S_\\infty = \\frac{7}{3750}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Find the common ratio $r = T_2/T_1$. Then $S_\\infty = \\frac{a}{1-r}$ (valid when $|r| < 1$).",
    "solution": "The correct answer is \\(S_\\infty = \\dfrac{3750}{7}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Blacktown Boys 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(r = \\frac{-300}{750} = -\\frac{2}{5}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(S_\\infty = \\frac{a}{1 - r} = \\frac{750}{1 + \\frac{2}{5}} = \\frac{750}{\\frac{7}{5}} = \\frac{3750}{7}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(S_\\infty = \\dfrac{3750}{7}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: S_\\infty = \\dfrac{3750}{7}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(S_\\infty = \\dfrac{3750}{7}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bbhs2020-16",
    "topicId": "y12a-exam-bbhs",
    "c": "1C",
    "t": "Geometric sequences",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "The first four terms of a geometric sequence are $48, m, n$ and $750$. Find the values of $m$ and $n$.",
    "opts": [
      "\\(\\dfrac{13}{x + 3}\\)",
      "\\(m = 120,\\ n = 300\\)",
      "\\(m = 120,\\ n = 300 + 1\\)",
      "\\(m = 140,\\ n = 400\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Use $ar^3 = 750$ with $a = 48$ to find $r$, then find $m$ and $n$.",
    "solution": "The correct answer is \\(m = 120,\\ n = 300\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Blacktown Boys 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(48r^3 = 750 \\Rightarrow r^3 = \\frac{125}{8} \\Rightarrow r = \\frac{5}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(m = 120\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(n = 300\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: m = 120,\\ n = 300. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(m = 120,\\ n = 300\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bbhs2020-17a",
    "topicId": "y12a-exam-bbhs",
    "c": "4I",
    "t": "The reverse chain rule",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the primitive function: $\\displaystyle\\int (5x + 3)^{19}\\,dx$.",
    "opts": [
      "\\(-\\dfrac{(5x+3)^{20}}{100} + C\\)",
      "\\(\\dfrac{(5x+3)^{20}}{100}\\)",
      "\\(\\dfrac{(5x+3)^{20}}{100} + C\\)",
      "\\(\\dfrac{(5x+4)^{40}}{100} + C\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Use the reverse chain rule: $\\int (ax+b)^n dx = \\frac{(ax+b)^{n+1}}{a(n+1)} + C$.",
    "solution": "The correct answer is \\(\\dfrac{(5x+3)^{20}}{100} + C\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Blacktown Boys 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\frac{(5x+3)^{20}}{20 \\times 5} + C = \\frac{(5x+3)^{20}}{100} + C\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\dfrac{(5x+3)^{20}}{100} + C\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\dfrac{(5x+3)^{20}}{100} + C. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\dfrac{(5x+3)^{20}}{100} + C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bbhs2020-17b",
    "topicId": "y12a-exam-bbhs",
    "c": "5I",
    "t": "Integration of the reciprocal function",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the primitive function: $\\displaystyle\\int \\left(2x^3 + \\dfrac{1}{3x+1}\\right)dx$.",
    "opts": [
      "\\(-\\dfrac{x^4}{2} + \\dfrac{1}{3}\\ln|3x+1| + C\\)",
      "\\(\\dfrac{x^4}{2} + \\dfrac{1}{3}\\ln|3x+1| + C\\)",
      "\\(\\frac{1}{2} + \\dfrac{1}{3}\\ln|3x+1| + C\\)",
      "\\(\\frac{2}{x^4} + \\dfrac{1}{3}\\ln|3x+1| + C\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Integrate term by term. For $\\frac{1}{3x+1}$, use $\\int \\frac{1}{ax+b}\\,dx = \\frac{1}{a}\\ln|ax+b| + C$.",
    "solution": "The correct answer is \\(\\dfrac{x^4}{2} + \\dfrac{1}{3}\\ln|3x+1| + C\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Blacktown Boys 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\frac{2x^4}{4} = \\frac{x^4}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\frac{1}{3}\\ln|3x+1|\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\frac{x^4}{2} + \\frac{1}{3}\\ln|3x+1| + C\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\dfrac{x^4}{2} + \\dfrac{1}{3}\\ln|3x+1| + C. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\dfrac{x^4}{2} + \\dfrac{1}{3}\\ln|3x+1| + C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bbhs2020-17c",
    "topicId": "y12a-exam-bbhs",
    "c": "6D",
    "t": "Integrating the trigonometric functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the primitive function: $\\displaystyle\\int \\left(\\sin 10x - \\dfrac{2}{e^{5x}}\\right)dx$.",
    "opts": [
      "\\(--\\dfrac{1}{10}\\cos 10x + \\dfrac{2}{5e^{5x}} + C\\)",
      "\\(-\\dfrac{1}{10}\\cos 10x + \\dfrac{2}{5e^{5x}} + C\\)",
      "\\(-\\frac{10}{1}\\cos 10x + \\dfrac{2}{5e^{5x}} + C\\)",
      "\\(-\\frac{1}{10}\\cos 10x + \\dfrac{2}{5e^{5x}} + C\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "$\\int \\sin(ax)\\,dx = -\\frac{1}{a}\\cos(ax) + C$. Write $\\frac{2}{e^{5x}} = 2e^{-5x}$ then integrate.",
    "solution": "The correct answer is \\(-\\dfrac{1}{10}\\cos 10x + \\dfrac{2}{5e^{5x}} + C\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Blacktown Boys 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(-\\frac{1}{10}\\cos 10x\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\int 2e^{-5x}\\,dx = \\frac{2}{-5}e^{-5x} = -\\frac{2}{5e^{5x}}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(-\\frac{1}{10}\\cos 10x + \\frac{2}{5e^{5x}} + C\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: -\\dfrac{1}{10}\\cos 10x + \\dfrac{2}{5e^{5x}} + C. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(-\\dfrac{1}{10}\\cos 10x + \\dfrac{2}{5e^{5x}} + C\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bbhs2020-18a",
    "topicId": "y12a-exam-bbhs",
    "c": "6B",
    "t": "Differentiating the trigonometric functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Show that $\\dfrac{d}{dx}(e^{2x}\\cos x) = e^{2x}(2\\cos x - \\sin x)$.",
    "opts": [
      "-By the product rule: \\(\\frac{d}{dx}(e^{2x}\\cos x) = 2e^{2x}\\cos x - e^{2x}\\sin x = e^{2x}(2\\cos x - \\sin x)\\).",
      "By the product rule: \\(\\frac{1}{dx}(e^{2x}\\cos x) = 2e^{2x}\\cos x - e^{2x}\\sin x = e^{2x}(2\\cos x - \\sin x)\\).",
      "By the product rule: \\(\\frac{dx}{d}(e^{2x}\\cos x) = 2e^{2x}\\cos x - e^{2x}\\sin x = e^{2x}(2\\cos x - \\sin x)\\).",
      "By the product rule: \\(\\frac{d}{dx}(e^{2x}\\cos x) = 2e^{2x}\\cos x - e^{2x}\\sin x = e^{2x}(2\\cos x - \\sin x)\\)."
    ],
    "a": 3,
    "answer": "3",
    "hint": "Apply the product rule with $u = e^{2x}$ and $v = \\cos x$.",
    "solution": "The correct answer is By the product rule: \\(\\frac{d}{dx}(e^{2x}\\cos x) = 2e^{2x}\\cos x - e^{2x}\\sin x = e^{2x}(2\\cos x - \\sin x)\\)..",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Blacktown Boys 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(u = e^{2x}, u' = 2e^{2x};\\quad v = \\cos x, v' = -\\sin x\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\frac{d}{dx}(e^{2x}\\cos x) = 2e^{2x}\\cos x + e^{2x}(-\\sin x)\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(= e^{2x}(2\\cos x - \\sin x)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: By the product rule: \\(\\frac{d}{dx}(e^{2x}\\cos x) = 2e^{2x}\\cos x - e^{2x}\\sin x = e^{2x}(2\\cos x - \\sin x)\\).. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "By the product rule: \\(\\frac{d}{dx}(e^{2x}\\cos x) = 2e^{2x}\\cos x - e^{2x}\\sin x = e^{2x}(2\\cos x - \\sin x)\\).",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bbhs2020-18b",
    "topicId": "y12a-exam-bbhs",
    "c": "9D",
    "t": "dy/dx notation — tangents and normals",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Hence find the equation of the tangent to the curve $y = e^{2x}\\cos x$ at the point where $x = 0$.",
    "opts": [
      "The opposite of this statement is true.",
      "This is true only when the function is linear.",
      "This only holds for positive values of x.",
      "y = 2x + 1\\), or equivalently \\(2x - y + 1 = 0"
    ],
    "a": 3,
    "answer": "3",
    "hint": "Substitute $x = 0$ into the derivative (found in part a) to get the gradient, and into $y$ to get the $y$-coordinate.",
    "solution": "The correct answer is y = 2x + 1\\), or equivalently \\(2x - y + 1 = 0.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Blacktown Boys 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(m = e^{0}(2\\cos 0 - \\sin 0) = 2\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(y = e^{0}\\cos 0 = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(y - 1 = 2(x - 0) \\Rightarrow y = 2x + 1\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y = 2x + 1\\), or equivalently \\(2x - y + 1 = 0. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "y = 2x + 1\\), or equivalently \\(2x - y + 1 = 0",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bbhs2020-19a",
    "topicId": "y12a-exam-bbhs",
    "c": "8D",
    "t": "Investing money by regular instalments",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Jesse plans to invest $7500 per year for 8 years in an annuity. His investment will earn interest at the rate of 6% per annum. Using the PVA table (factor for $N=8$, $r=6\\%$ is 6.2098), calculate the present value of his annuity.",
    "opts": [
      "\\(-46\\,573.50\\)",
      "\\(46\\,573.50\\)",
      "\\(46\\,573.50 + 1\\)",
      "\\(46\\,574.50\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Present Value = Payment × PVA factor.",
    "solution": "The correct answer is \\(46\\,573.50\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Blacktown Boys 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\text{PVA factor} = 6.2098\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\text{PVA} = 7500 \\times 6.2098 = 46{,}573.50\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(46\\,573.50\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 46\\,573.50. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(46\\,573.50\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bbhs2020-19b",
    "topicId": "y12a-exam-bbhs",
    "c": "8E",
    "t": "Paying off a loan",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Shaon takes out a loan of $12\\,000$ to buy a car. This loan is to be repaid over 5 years at an interest rate of 8% per year. Using the PVA table (factor for $N=5$, $r=8\\%$ is 3.9927), find his yearly repayments.",
    "opts": [
      "\\(-3005.49\\)",
      "\\(3004.49\\)",
      "\\(3005.49\\)",
      "\\(3006.49\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "$\\text{PVA} = M \\times \\text{PVA factor} \\Rightarrow M = \\frac{\\text{PVA}}{\\text{factor}}$.",
    "solution": "The correct answer is \\(3005.49\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Blacktown Boys 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(3.9927 \\times M = 12000\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(M = \\frac{12000}{3.9927} \\approx \\$3005.49\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(3005.49\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 3005.49. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(3005.49\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bbhs2020-20",
    "topicId": "y12a-exam-bbhs",
    "c": "3H",
    "t": "Primitive functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "The curve $y = f(x)$ passes through the point $(-1, 2)$ and $f'(x) = 4x^3 - 3$. Find $f(x)$.",
    "opts": [
      "\\(f(x) = x^4 + 3x + 2\\)",
      "\\(f(x) = x^4 - 3x - 2\\)",
      "\\(f(x) = x^4 - 3x - 2 + 1\\)",
      "\\(f(x) = x^4 - 4x - 4\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Integrate $f'(x)$ to get $f(x) = x^4 - 3x + C$, then substitute the given point to find $C$.",
    "solution": "The correct answer is \\(f(x) = x^4 - 3x - 2\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Blacktown Boys 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(f(x) = x^4 - 3x + C\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(2 = (-1)^4 - 3(-1) + C = 1 + 3 + C \\Rightarrow C = -2\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(f(x) = x^4 - 3x - 2\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: f(x) = x^4 - 3x - 2. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(f(x) = x^4 - 3x - 2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bbhs2020-21",
    "topicId": "y12a-exam-bbhs",
    "c": "4B",
    "t": "The fundamental theorem of calculus",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Show that $\\displaystyle\\int_0^2 \\sqrt{4x+1}\\,dx = \\dfrac{13}{3}$.",
    "opts": [
      "\\(-\\left[\\frac{(4x+1)^{3/2}}{6}\\right]_0^2 = \\frac{27}{6} - \\frac{1}{6} = \\frac{26}{6} = \\frac{13}{3}\\)",
      "\\(\\left[\\frac{(4x+1)^{3/2}}{6}\\right]_0^2 = \\frac{27}{6} - \\frac{1}{6} = \\frac{26}{6} = \\frac{13}{3}\\)",
      "\\(\\left[\\frac{(4x+1)^{3/2}}{6}\\right]_0^2 = \\frac{6}{27} - \\frac{1}{6} = \\frac{26}{6} = \\frac{13}{3}\\)",
      "\\(\\left[\\frac{1}}{6}\\right]_0^2 = \\frac{27}{6} - \\frac{1}{6} = \\frac{26}{6} = \\frac{13}{3}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Write $\\sqrt{4x+1} = (4x+1)^{1/2}$ and use the reverse chain rule to integrate.",
    "solution": "The correct answer is \\(\\left[\\frac{(4x+1)^{3/2}}{6}\\right]_0^2 = \\frac{27}{6} - \\frac{1}{6} = \\frac{26}{6} = \\frac{13}{3}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Blacktown Boys 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\int_0^2 (4x+1)^{1/2}\\,dx = \\left[\\frac{(4x+1)^{3/2}}{6}\\right]_0^2\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(= \\frac{(4 \\times 2 + 1)^{3/2}}{6} - \\frac{(4 \\times 0 + 1)^{3/2}}{6} = \\frac{9^{3/2}}{6} - \\frac{1}{6}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(= \\frac{27}{6} - \\frac{1}{6} = \\frac{26}{6} = \\frac{13}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\left[\\frac{(4x+1)^{3/2}}{6}\\right]_0^2 = \\frac{27}{6} - \\frac{1}{6} = \\frac{26}{6} = \\frac{13}{3}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\left[\\frac{(4x+1)^{3/2}}{6}\\right]_0^2 = \\frac{27}{6} - \\frac{1}{6} = \\frac{26}{6} = \\frac{13}{3}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bbhs2020-22",
    "topicId": "y12a-exam-bbhs",
    "c": "11B",
    "t": "Solving trigonometric equations",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Solve $4\\cos^2 x - 3 = 0$ for $-\\pi \\leq x \\leq \\pi$.",
    "opts": [
      "\\(-x = -\\dfrac{5\\pi}{6},\\ -\\dfrac{\\pi}{6},\\ \\dfrac{\\pi}{6},\\ \\dfrac{5\\pi}{6}\\)",
      "\\(x = -\\dfrac{5\\pi}{6},\\ -\\dfrac{\\pi}{6},\\ \\dfrac{\\pi}{6},\\ \\dfrac{5\\pi}{6}\\)",
      "\\(x = -\\frac{1}{6},\\ -\\dfrac{\\pi}{6},\\ \\dfrac{\\pi}{6},\\ \\dfrac{5\\pi}{6}\\)",
      "\\(x = -\\frac{6}{5\\pi},\\ -\\dfrac{\\pi}{6},\\ \\dfrac{\\pi}{6},\\ \\dfrac{5\\pi}{6}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Rearrange to $\\cos^2 x = \\frac{3}{4}$, so $\\cos x = \\pm\\frac{\\sqrt{3}}{2}$. Find all solutions in the given domain.",
    "solution": "The correct answer is \\(x = -\\dfrac{5\\pi}{6},\\ -\\dfrac{\\pi}{6},\\ \\dfrac{\\pi}{6},\\ \\dfrac{5\\pi}{6}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Blacktown Boys 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\cos^2 x = \\frac{3}{4} \\Rightarrow \\cos x = \\pm\\frac{\\sqrt{3}}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(x = \\frac{\\pi}{6},\\ -\\frac{\\pi}{6}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(x = \\pi - \\frac{\\pi}{6} = \\frac{5\\pi}{6}, quad x = -(\\pi - \\frac{\\pi}{6}) = -\\frac{5\\pi}{6}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: x = -\\dfrac{5\\pi}{6},\\ -\\dfrac{\\pi}{6},\\ \\dfrac{\\pi}{6},\\ \\dfrac{5\\pi}{6}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(x = -\\dfrac{5\\pi}{6},\\ -\\dfrac{\\pi}{6},\\ \\dfrac{\\pi}{6},\\ \\dfrac{5\\pi}{6}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bbhs2020-23",
    "topicId": "y12a-exam-bbhs",
    "c": "10C",
    "t": "Mean and variance of a distribution",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "A discrete random variable $X$ has the probability distribution:\n\n| $X = x$ | 20 | 21 | 22 | 23 |\n|---|---|---|---|---|\n| $P(x)$ | 0.24 | 0.2 | $m$ | 0.4 |\n\nBy finding the value of $m$, calculate the expected value and the variance of $X$.",
    "opts": [
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "\\(\\dfrac{13}{x + 3}\\)",
      "m = 0.16\\); \\(E(X) = 21.72\\); \\(\\text{Var}(X) = 1.4816"
    ],
    "a": 3,
    "answer": "3",
    "hint": "All probabilities must sum to 1. Then $E(X) = \\sum x P(x)$ and $\\text{Var}(X) = E(X^2) - [E(X)]^2$.",
    "solution": "The correct answer is m = 0.16\\); \\(E(X) = 21.72\\); \\(\\text{Var}(X) = 1.4816.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Blacktown Boys 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(0.24 + 0.2 + m + 0.4 = 1 \\Rightarrow m = 0.16\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(E(X) = 20(0.24) + 21(0.2) + 22(0.16) + 23(0.4) = 4.8 + 4.2 + 3.52 + 9.2 = 21.72\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(E(X^2) = 400(0.24) + 441(0.2) + 484(0.16) + 529(0.4) = 96 + 88.2 + 77.44 + 211.6 = 473.24\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: m = 0.16\\); \\(E(X) = 21.72\\); \\(\\text{Var}(X) = 1.4816. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "m = 0.16\\); \\(E(X) = 21.72\\); \\(\\text{Var}(X) = 1.4816",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bbhs2020-24a",
    "topicId": "y12a-exam-bbhs",
    "c": "4H",
    "t": "The trapezoidal rule",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "Given $y = \\log_e(2^x - x)$, complete the table by finding the missing value of $y$ at $x = 2.5$ to 3 decimal places.\n\n| $x$ | 1 | 1.5 | 2 | 2.5 | 3 |\n|---|---|---|---|---|---|\n| $y$ | 0 | 0.284 | 0.693 | ? | 1.609 |",
    "opts": [
      "\\(\\dfrac{12}{x + 2}\\)",
      "\\(\\dfrac{13}{x + 3}\\)",
      "\\(y = 1.150\\)",
      "\\(y = 1.150 + 1\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Substitute $x = 2.5$ into $y = \\ln(2^{2.5} - 2.5)$.",
    "solution": "The correct answer is \\(y = 1.150\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Blacktown Boys 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y = \\ln(2^{2.5} - 2.5) = \\ln(3.157\\ldots) \\approx 1.150\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(y = 1.150\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y = 1.150. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(y = 1.150\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bbhs2020-24b",
    "topicId": "y12a-exam-bbhs",
    "c": "4H",
    "t": "The trapezoidal rule",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Use the trapezoidal rule with all values from the table ($x = 1, 1.5, 2, 2.5, 3$) to find an approximation for $\\displaystyle\\int_1^3 \\log_e(2^x - x)\\,dx$.",
    "opts": [
      "\\(\\approx 1.466\\)",
      "\\(\\approx 1.466 + 1\\)",
      "\\(\\dfrac{12}{x + 2}\\)",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "$T \\approx \\frac{h}{2}[y_0 + 2(y_1 + y_2 + y_3) + y_4]$ with $h = 0.5$.",
    "solution": "The correct answer is \\(\\approx 1.466\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Blacktown Boys 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(A \\approx \\frac{h}{2}[y_0 + 2(y_1 + y_2 + y_3) + y_4]\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\frac{0.5}{2}[0 + 2(0.284 + 0.693 + 1.150) + 1.609]\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(= 0.25[0 + 2(2.127) + 1.609] = 0.25 \\times 5.863 \\approx 1.466\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\approx 1.466. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\approx 1.466\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bbhs2020-25a",
    "topicId": "y12a-exam-bbhs",
    "c": "9D",
    "t": "Bivariate data",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "A scatterplot of fertiliser amount ($x$ grams) vs tomato yield ($y$ kg) for 8 plants shows a clear upward linear trend with $R^2 = 0.9453$. Use the scatterplot to describe the association between yield and fertiliser in terms of strength and direction.",
    "opts": [
      "Strong, positive, linear association.",
      "The opposite of this statement is true.",
      "This is true only when the function is linear.",
      "This only holds for positive values of x."
    ],
    "a": 0,
    "answer": "0",
    "hint": "Consider the direction of the trend and how closely the points follow a line.",
    "solution": "The correct answer is Strong, positive, linear association..",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Blacktown Boys 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\text{Direction: positive}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\text{Strength: strong}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "Strong, positive, linear association.",
        "graphData": null
      },
      {
        "explanation": "Final answer: Strong, positive, linear association.. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "Strong, positive, linear association.",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bbhs2020-25b",
    "topicId": "y12a-exam-bbhs",
    "c": "9E",
    "t": "Formulae for correlation and regression",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "For the tomato fertiliser data, determine the equation of the least-squares regression line. Round values to 2 significant figures. (Data: $x$: 1.0, 1.0, 1.5, 2.0, 2.5, 2.8, 3.0, 3.5; $y$: 3.9, 4.0, 4.4, 5.8, 6.6, 6.8, 7.0, 7.1)",
    "opts": [
      "\\(y \\approx 1.4x + 2.6\\)",
      "\\(y \\approx 1.4x + 2.6 + 1\\)",
      "\\(y \\approx 1.4x + 4.6\\)",
      "\\(y \\approx 1.4x - 2.6\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Use a calculator in statistics mode to find the regression coefficients $A$ (intercept) and $B$ (gradient), rounded to 2 significant figures.",
    "solution": "The correct answer is \\(y \\approx 1.4x + 2.6\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Blacktown Boys 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(A \\approx 2.59, B \\approx 1.44\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(y \\approx 1.4x + 2.6\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(y \\approx 1.4x + 2.6\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y \\approx 1.4x + 2.6. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(y \\approx 1.4x + 2.6\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bbhs2020-25c",
    "topicId": "y12a-exam-bbhs",
    "c": "9E",
    "t": "Formulae for correlation and regression",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "A plant with 2.2 grams of fertiliser was not recorded by accident. Calculate the predicted yield for this plant using the regression line $y = 1.4x + 2.6$.",
    "opts": [
      "\\(y \\approx 5.68\\) kg",
      "\\(y \\approx 5.68\\) kg + 1",
      "\\(\\dfrac{12}{x + 2}\\)",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Substitute $x = 2.2$ into the regression equation.",
    "solution": "The correct answer is \\(y \\approx 5.68\\) kg.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Blacktown Boys 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y = 1.4(2.2) + 2.6 = 3.08 + 2.6 = 5.68 \\text{ kg}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(y \\approx 5.68\\) kg",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(y \\approx 5.68\\) kg. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(y \\approx 5.68\\) kg",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bbhs2020-25d",
    "topicId": "y12a-exam-bbhs",
    "c": "9D",
    "t": "Bivariate data",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Explain why you should not extrapolate from this data to find the yield for high rates of fertiliser usage.",
    "opts": [
      "The linear relationship may not hold beyond the observed range of the data. High doses of fertiliser could damage the plants, so the yield may plateau or decrease rather than continue to rise linearly.",
      "The opposite of this statement is true.",
      "This is true only when the function is linear.",
      "This only holds for positive values of x."
    ],
    "a": 0,
    "answer": "0",
    "hint": "Extrapolation assumes the trend continues beyond the data range, which may not be valid.",
    "solution": "The correct answer is The linear relationship may not hold beyond the observed range of the data. High doses of fertiliser could damage the plants, so the yield may plateau or decrease rather than continue to rise linearly..",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Blacktown Boys 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\text{Extrapolation is unreliable beyond the data range}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "The linear relationship may not hold beyond the observed range of the data. High doses of fertiliser could damage the plants, so the yield may plateau or decrease rather than continue to rise linearly.",
        "graphData": null
      },
      {
        "explanation": "Final answer: The linear relationship may not hold beyond the observed range of the data. High doses of fertiliser could damage the plants, so the yield may plateau or decrease rather than continue to rise linearly.. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "The linear relationship may not hold beyond the observed range of the data. High doses of fertiliser could damage the plants, so the yield may plateau or decrease rather than continue to rise linearly.",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bbhs2020-26a",
    "topicId": "y12a-exam-bbhs",
    "c": "3B",
    "t": "Stationary points and turning points",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Consider the curve $y = 3x - x^3 - 1$ for $-3 \\leq x \\leq 2$. Find the stationary points and determine their nature.",
    "opts": [
      "Local maximum at \\((1, 1)\\); local minimum at \\((-1, -3)\\)",
      "Local minimum at \\((1, 1)\\); local maximum at \\((-1, -3)\\)",
      "Local maximum at \\((1, 3)\\); local minimum at \\((-1, -5)\\)",
      "Local minimum at \\((1, 3)\\); local maximum at \\((-1, -5)\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Set $y' = 0$ to find stationary points. Use $y''$ to classify them.",
    "solution": "The correct answer is Local maximum at \\((1, 1)\\); local minimum at \\((-1, -3)\\).",
    "solutionSteps": [
      {
        "explanation": "Step 1: Find the first derivative \\(y'\\) and set it equal to zero to find the \\(x\\)-coordinates of the stationary points.",
        "workingOut": "$$ \\begin{aligned} y &= 3x - x^3 - 1 \\\\\\\\ y' &= 3 - 3x^2 \\\\\\\\ 3 - 3x^2 &= 0 \\implies 3(1 - x^2) = 0 \\implies x^2 = 1 \\implies x = \\pm 1 \\end{aligned} $$"
      },
      {
        "explanation": "Step 2: Substitute \\(x = 1\\) and \\(x = -1\\) into the original function to find the corresponding \\(y\\)-coordinates.",
        "workingOut": "$$ \\begin{aligned} \\text{For } x = 1: &\\quad y = 3(1) - (1)^3 - 1 = 3 - 1 - 1 = 1 \\implies \\text{Point at } (1, 1) \\\\\\\\ \\text{For } x = -1: &\\quad y = 3(-1) - (-1)^3 - 1 = -3 + 1 - 1 = -3 \\implies \\text{Point at } (-1, -3) \\end{aligned} $$"
      },
      {
        "explanation": "Step 3: Find the second derivative \\(y''\\) and use it to determine the nature of each stationary point.",
        "workingOut": "$$ \\begin{aligned} y'' &= -6x \\\\\\\\ \\text{At } x = 1: &\\quad y'' = -6(1) = -6 < 0 \\implies \\text{Local Maximum at } (1, 1) \\\\\\\\ \\text{At } x = -1: &\\quad y'' = -6(-1) = 6 > 0 \\implies \\text{Local Minimum at } (-1, -3) \\end{aligned} $$"
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bbhs2020-26b",
    "topicId": "y12a-exam-bbhs",
    "c": "3D",
    "t": "Concavity and points of inflection",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "For the curve $y = 3x - x^3 - 1$, find the point of inflection.",
    "opts": [
      "\\((0, +1)\\)",
      "\\((0, -1)\\)",
      "\\((0, -1) + 1\\)",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Set $y'' = 0$ and verify a change in concavity.",
    "solution": "The correct answer is \\((0, -1)\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Blacktown Boys 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(-6x = 0 \\Rightarrow x = 0, quad y = -1\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(x < 0: y'' > 0 \\text{ (concave up)}; \\quad x > 0: y'' < 0 \\text{ (concave down)}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\text{Point of inflection at } (0, -1)\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: (0, -1). Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\((0, -1)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bbhs2020-26d",
    "topicId": "y12a-exam-bbhs",
    "c": "3F",
    "t": "Global maximum and minimum",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "What is the maximum value of $y = 3x - x^3 - 1$ for $-3 \\leq x \\leq 2$?",
    "opts": [
      "\\(\\dfrac{12}{x + 2}\\)",
      "\\(\\dfrac{13}{x + 3}\\)",
      "\\(y = 17\\)",
      "\\(y = 17 + 1\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Evaluate $y$ at the stationary points and at the endpoints $x = -3$ and $x = 2$, then find the greatest value.",
    "solution": "The correct answer is \\(y = 17\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Blacktown Boys 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(y(-3) = 3(-3) - (-3)^3 - 1 = -9 + 27 - 1 = 17\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(y(-3) = 17, y(-1) = -3, y(1) = 1, y(2) = -3\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\text{Maximum} = 17\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: y = 17. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(y = 17\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bbhs2020-27a",
    "topicId": "y12a-exam-bbhs",
    "c": "10F",
    "t": "Applications of the normal distribution",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "Chocolate consumption per person per day is normally distributed with mean 68.95 g and standard deviation 18.45 g. Above what chocolate consumption rate does 2.5% of this population lie?",
    "opts": [
      "\\(105.85\\) grams",
      "\\(105.85\\) grams + 1",
      "\\(\\dfrac{12}{x + 2}\\)",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "2.5% in the upper tail corresponds to 2 standard deviations above the mean.",
    "solution": "The correct answer is \\(105.85\\) grams.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Blacktown Boys 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(z = 2\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\mu + 2\\sigma = 68.95 + 2(18.45) = 105.85 \\text{ g}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(105.85\\) grams",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(105.85\\) grams. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(105.85\\) grams",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bbhs2020-27b",
    "topicId": "y12a-exam-bbhs",
    "c": "10F",
    "t": "Applications of the normal distribution",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "With mean 68.95 g and SD 18.45 g, Rahul consumed 50.5 g of chocolate in one day. What percentage of this population has a chocolate consumption rate more than Rahul's?",
    "opts": [
      "\\(83\\%\\)",
      "\\(84\\\\)",
      "\\(84\\%\\)",
      "\\(85\\%\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Find the $z$-score for 50.5 g, then determine the percentage above that value.",
    "solution": "The correct answer is \\(84\\%\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Blacktown Boys 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(z = \\frac{50.5 - 68.95}{18.45} = -1\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(P(X > 50.5) = 84\\%\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(84\\%\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 84\\%. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(84\\%\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bbhs2020-27c",
    "topicId": "y12a-exam-bbhs",
    "c": "10F",
    "t": "Applications of the normal distribution",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Ben takes a sample of people from this population (mean 68.95 g, SD 18.45 g) and finds that 6 of them consumed less than 13.6 g per day. If Ben's sample has the same distribution as this population, what is Ben's sample size?",
    "opts": [
      "\\(-4000\\)",
      "\\(3999\\)",
      "\\(4000\\)",
      "\\(4001\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Find the $z$-score for 13.6 g; this gives the proportion below that value. Then set up: proportion × sample size = 6.",
    "solution": "The correct answer is \\(4000\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Blacktown Boys 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(z = \\frac{13.6 - 68.95}{18.45} = -3\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(P(X < 13.6) = 0.15\\%\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(0.0015 \\times n = 6 \\Rightarrow n = 4000\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 4000. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(4000\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bbhs2020-28a",
    "topicId": "y12a-exam-bbhs",
    "c": "10B",
    "t": "Continuous distributions",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "The time (minutes) a customer queues has PDF $f(x) = k(64 - x^2)$ for $0 \\leq x \\leq 8$, and 0 otherwise. Show that $k = \\dfrac{3}{1024}$.",
    "opts": [
      "\\(-\\int_0^8 k(64-x^2)\\,dx = k\\left[64x - \\frac{x^3}{3}\\right]_0^8 = k \\cdot \\frac{1024}{3} = 1 \\Rightarrow k = \\frac{3}{1024}\\)",
      "\\(\\int_0^8 k(64-x^2)\\,dx = k\\left[64x - \\frac{1}{3}\\right]_0^8 = k \\cdot \\frac{1024}{3} = 1 \\Rightarrow k = \\frac{3}{1024}\\)",
      "\\(\\int_0^8 k(64-x^2)\\,dx = k\\left[64x - \\frac{3}{x^3}\\right]_0^8 = k \\cdot \\frac{1024}{3} = 1 \\Rightarrow k = \\frac{3}{1024}\\)",
      "\\(\\int_0^8 k(64-x^2)\\,dx = k\\left[64x - \\frac{x^3}{3}\\right]_0^8 = k \\cdot \\frac{1024}{3} = 1 \\Rightarrow k = \\frac{3}{1024}\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "For a valid PDF, $\\int_{-\\infty}^{\\infty} f(x)\\,dx = 1$.",
    "solution": "The correct answer is \\(\\int_0^8 k(64-x^2)\\,dx = k\\left[64x - \\frac{x^3}{3}\\right]_0^8 = k \\cdot \\frac{1024}{3} = 1 \\Rightarrow k = \\frac{3}{1024}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Blacktown Boys 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\int_0^8 k(64 - x^2)\\,dx = 1\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(k\\left[64x - \\frac{x^3}{3}\\right]_0^8 = k\\left(512 - \\frac{512}{3}\\right) = k \\cdot \\frac{1024}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(k \\cdot \\frac{1024}{3} = 1 \\Rightarrow k = \\frac{3}{1024}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\int_0^8 k(64-x^2)\\,dx = k\\left[64x - \\frac{x^3}{3}\\right]_0^8 = k \\cdot \\frac{1024}{3} = 1 \\Rightarrow k = \\frac{3}{1024}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\int_0^8 k(64-x^2)\\,dx = k\\left[64x - \\frac{x^3}{3}\\right]_0^8 = k \\cdot \\frac{1024}{3} = 1 \\Rightarrow k = \\frac{3}{1024}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bbhs2020-28b",
    "topicId": "y12a-exam-bbhs",
    "c": "10B",
    "t": "Continuous distributions",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "For the PDF $f(x) = \\dfrac{3}{1024}(64 - x^2)$ for $0 \\leq x \\leq 8$, find the cumulative distribution function $F(x)$.",
    "opts": [
      "\\(-F(x) = \\begin{cases} 0 & x < 0 \\\\ \\dfrac{3x}{16} - \\dfrac{x^3}{1024} & 0 \\leq x \\leq 8 \\\\ 1 & x > 8 \\end{cases}\\)",
      "\\(F(x) = \\begin{cases} 0 & x < 0 \\\\ \\dfrac{3x}{16} - \\dfrac{x^3}{1024} & 0 \\leq x \\leq 8 \\\\ 1 & x > 8 \\end{cases}\\)",
      "\\(F(x) = \\begin{cases} 0 & x < 0 \\\\ \\frac{16}{3x} - \\dfrac{x^3}{1024} & 0 \\leq x \\leq 8 \\\\ 1 & x > 8 \\end{cases}\\)",
      "\\(F(x) = \\begin{cases} 0 & x < 0 \\\\ \\frac{1}{16} - \\dfrac{x^3}{1024} & 0 \\leq x \\leq 8 \\\\ 1 & x > 8 \\end{cases}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "$F(x) = \\int_0^x f(t)\\,dt$ for $0 \\leq x \\leq 8$.",
    "solution": "The correct answer is \\(F(x) = \\begin{cases} 0 & x < 0 \\\\ \\dfrac{3x}{16} - \\dfrac{x^3}{1024} & 0 \\leq x \\leq 8 \\\\ 1 & x > 8 \\end{cases}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Blacktown Boys 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(F(x) = \\frac{3}{1024}\\int_0^x (64 - t^2)\\,dt = \\frac{3}{1024}\\left[64t - \\frac{t^3}{3}\\right]_0^x\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(F(x) = \\frac{3}{1024}\\left(64x - \\frac{x^3}{3}\\right) = \\frac{3x}{16} - \\frac{x^3}{1024}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(F(x) = \\begin{cases} 0 & x < 0 \\\\ \\dfrac{3x}{16} - \\dfrac{x^3}{1024} & 0 \\leq x \\leq 8 \\\\ 1 & x > 8 \\end{cases}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: F(x) = \\begin{cases} 0 & x < 0 \\\\ \\dfrac{3x}{16} - \\dfrac{x^3}{1024} & 0 \\leq x \\leq 8 \\\\ 1 & x > 8 \\end{cases}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(F(x) = \\begin{cases} 0 & x < 0 \\\\ \\dfrac{3x}{16} - \\dfrac{x^3}{1024} & 0 \\leq x \\leq 8 \\\\ 1 & x > 8 \\end{cases}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bbhs2020-28c",
    "topicId": "y12a-exam-bbhs",
    "c": "10B",
    "t": "Continuous distributions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Using $F(x) = \\dfrac{3x}{16} - \\dfrac{x^3}{1024}$, find the probability that a customer will queue for longer than 5 minutes. Round to 4 significant figures.",
    "opts": [
      "\\(-0.1846\\)",
      "\\(-0.8154\\)",
      "\\(0.1846\\)",
      "\\(1.1846\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "$P(X > 5) = 1 - F(5)$.",
    "solution": "The correct answer is \\(0.1846\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Blacktown Boys 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(F(5) = \\frac{3(5)}{16} - \\frac{125}{1024} = \\frac{15}{16} - \\frac{125}{1024} = \\frac{960 - 125}{1024} = \\frac{835}{1024}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(P(X > 5) = 1 - \\frac{835}{1024} = \\frac{189}{1024} \\approx 0.1846\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(0.1846\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 0.1846. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(0.1846\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bbhs2020-29a",
    "topicId": "y12a-exam-bbhs",
    "c": "4F",
    "t": "Finding areas by integration",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "The graphs of $y = 5 - x$ and $y = \\dfrac{4}{2x-1}$ intersect at points $A$ and $B$. Show that the $x$-coordinates of $A$ and $B$ are 1 and 4.5 respectively.",
    "opts": [
      "\\(\\dfrac{9}{5}\\)",
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "Solving \\(5-x = \\frac{4}{2x-1}\\) gives \\((5-x)(2x-1) = 4 \\Rightarrow 2x^2 - 11x + 9 = 0 \\Rightarrow (2x-9)(x-1) = 0 \\Rightarrow x = 1\\) or \\(x = 4.5\\)."
    ],
    "a": 3,
    "answer": "3",
    "hint": "Set the two expressions equal and solve the resulting quadratic.",
    "solution": "The correct answer is Solving \\(5-x = \\frac{4}{2x-1}\\) gives \\((5-x)(2x-1) = 4 \\Rightarrow 2x^2 - 11x + 9 = 0 \\Rightarrow (2x-9)(x-1) = 0 \\Rightarrow x = 1\\) or \\(x = 4.5\\)..",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Blacktown Boys 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(5 - x = \\frac{4}{2x - 1}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\((5-x)(2x-1) = 4 \\Rightarrow -2x^2 + 11x - 9 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(2x^2 - 11x + 9 = 0 \\Rightarrow (2x-9)(x-1) = 0 \\Rightarrow x = 1 \\text{ or } x = 4.5\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: Solving \\(5-x = \\frac{4}{2x-1}\\) gives \\((5-x)(2x-1) = 4 \\Rightarrow 2x^2 - 11x + 9 = 0 \\Rightarrow (2x-9)(x-1) = 0 \\Rightarrow x = 1\\) or \\(x = 4.5\\).. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "Solving \\(5-x = \\frac{4}{2x-1}\\) gives \\((5-x)(2x-1) = 4 \\Rightarrow 2x^2 - 11x + 9 = 0 \\Rightarrow (2x-9)(x-1) = 0 \\Rightarrow x = 1\\) or \\(x = 4.5\\).",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bbhs2020-29b",
    "topicId": "y12a-exam-bbhs",
    "c": "4G",
    "t": "Areas of compound regions",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Find the exact area of the region bounded by $y = 5 - x$ and $y = \\dfrac{4}{2x-1}$ between $x = 1$ and $x = 4.5$.",
    "opts": [
      "-\\(\\dfrac{63}{8} - 2\\ln 8\\) units²",
      "\\(\\dfrac{63}{8} - 2\\ln 8\\) units²",
      "\\(\\frac{1}{8} - 2\\ln 8\\) units²",
      "\\(\\frac{8}{63} - 2\\ln 8\\) units²"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Area $= \\int_1^{4.5}\\left[(5-x) - \\frac{4}{2x-1}\\right]dx$. Integrate each term separately.",
    "solution": "The correct answer is \\(\\dfrac{63}{8} - 2\\ln 8\\) units².",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Blacktown Boys 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(A = \\int_1^{4.5}\\!\\left[(5-x) - \\frac{4}{2x-1}\\right]dx\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\left[5x - \\frac{x^2}{2} - 2\\ln|2x-1|\\right]_1^{4.5}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\left(\\frac{99}{8} - 2\\ln 8\\right) - \\left(\\frac{9}{2} - 0\\right) = \\frac{63}{8} - 2\\ln 8\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\dfrac{63}{8} - 2\\ln 8\\) units². Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\dfrac{63}{8} - 2\\ln 8\\) units²",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bbhs2020-30a",
    "topicId": "y12a-exam-bbhs",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "A gardener plants roses in rows: the first row has 24, the second row has 29, and each succeeding row has 5 more than the previous row. Calculate the number of rose plants in the 8th row.",
    "opts": [
      "\\(-59\\)",
      "\\(58\\)",
      "\\(59\\)",
      "\\(60\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "This is an AP with $a = 24$, $d = 5$. Use $T_n = a + (n-1)d$.",
    "solution": "The correct answer is \\(59\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Blacktown Boys 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(T_8 = 24 + (8-1) \\times 5 = 24 + 35 = 59\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(59\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 59. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(59\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bbhs2020-30b",
    "topicId": "y12a-exam-bbhs",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "For the rose garden (first row 24, common difference 5), which row would be the first to contain more than 150 rose plants?",
    "opts": [
      "The 27th row.",
      "The opposite of this statement is true.",
      "This is true only when the function is linear.",
      "This only holds for positive values of x."
    ],
    "a": 0,
    "answer": "0",
    "hint": "Solve $24 + (n-1) \\times 5 > 150$ for the smallest integer $n$.",
    "solution": "The correct answer is The 27th row..",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Blacktown Boys 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(24 + (n-1) \\times 5 > 150\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(5n - 5 > 126 \\Rightarrow 5n > 131 \\Rightarrow n > 26.2\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(n = 27\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: The 27th row.. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "The 27th row.",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bbhs2020-30c",
    "topicId": "y12a-exam-bbhs",
    "c": "8A",
    "t": "Applications of APs and GPs",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "The gardener planted 2895 rose plants altogether (same AP: first row 24, $d = 5$). How many rows were planted?",
    "opts": [
      "\\(30\\) rows",
      "\\(30\\) rows + 1",
      "\\(40\\) rows",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Use $S_n = \\frac{n}{2}(2a + (n-1)d) = 2895$ and solve the resulting quadratic.",
    "solution": "The correct answer is \\(30\\) rows.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Blacktown Boys 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(S_n = \\frac{n}{2}(2 \\times 24 + (n-1) \\times 5) = 2895\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(5n^2 + 43n - 5790 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\((n - 30)(5n + 193) = 0 \\Rightarrow n = 30\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(30\\) rows. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(30\\) rows",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bbhs2020-31a",
    "topicId": "y12a-exam-bbhs",
    "c": "7B",
    "t": "Velocity and acceleration as derivatives",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "A particle moves in a straight line with velocity $v = 2 - 4\\cos 2t$ m/s for $0 \\leq t \\leq 2\\pi$. Find the initial velocity.",
    "opts": [
      "\\(v = +2\\) m/s",
      "\\(v = -2\\) m/s",
      "\\(v = -2\\) m/s + 1",
      "\\(v = -4\\) m/s"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Substitute $t = 0$.",
    "solution": "The correct answer is \\(v = -2\\) m/s.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Blacktown Boys 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(v = 2 - 4\\cos(0) = 2 - 4 = -2 \\text{ m/s}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "Apply the appropriate standard form",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(v = -2\\) m/s",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(v = -2\\) m/s. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(v = -2\\) m/s",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bbhs2020-31b",
    "topicId": "y12a-exam-bbhs",
    "c": "7B",
    "t": "Velocity and acceleration as derivatives",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "For $v = 2 - 4\\cos 2t$, find all times when the particle is at rest for $0 \\leq t \\leq 2\\pi$.",
    "opts": [
      "\\(-t = \\dfrac{\\pi}{6},\\ \\dfrac{5\\pi}{6},\\ \\dfrac{7\\pi}{6},\\ \\dfrac{11\\pi}{6}\\)",
      "\\(t = \\dfrac{\\pi}{6},\\ \\dfrac{5\\pi}{6},\\ \\dfrac{7\\pi}{6},\\ \\dfrac{11\\pi}{6}\\)",
      "\\(t = \\frac{1}{6},\\ \\dfrac{5\\pi}{6},\\ \\dfrac{7\\pi}{6},\\ \\dfrac{11\\pi}{6}\\)",
      "\\(t = \\frac{6}{\\pi},\\ \\dfrac{5\\pi}{6},\\ \\dfrac{7\\pi}{6},\\ \\dfrac{11\\pi}{6}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Set $v = 0$ and solve $\\cos 2t = \\frac{1}{2}$.",
    "solution": "The correct answer is \\(t = \\dfrac{\\pi}{6},\\ \\dfrac{5\\pi}{6},\\ \\dfrac{7\\pi}{6},\\ \\dfrac{11\\pi}{6}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Blacktown Boys 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(2 - 4\\cos 2t = 0 \\Rightarrow \\cos 2t = \\tfrac{1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(2t = \\frac{\\pi}{3},\\ \\frac{5\\pi}{3},\\ \\frac{7\\pi}{3},\\ \\frac{11\\pi}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(t = \\frac{\\pi}{6},\\ \\frac{5\\pi}{6},\\ \\frac{7\\pi}{6},\\ \\frac{11\\pi}{6}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: t = \\dfrac{\\pi}{6},\\ \\dfrac{5\\pi}{6},\\ \\dfrac{7\\pi}{6},\\ \\dfrac{11\\pi}{6}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(t = \\dfrac{\\pi}{6},\\ \\dfrac{5\\pi}{6},\\ \\dfrac{7\\pi}{6},\\ \\dfrac{11\\pi}{6}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bbhs2020-31d",
    "topicId": "y12a-exam-bbhs",
    "c": "7B",
    "t": "Velocity and acceleration as derivatives",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "For $v = 2 - 4\\cos 2t$, find the acceleration when $t = \\dfrac{\\pi}{2}$.",
    "opts": [
      "\\(0\\) m/s²",
      "\\(0\\) m/s² + 1",
      "\\(\\dfrac{12}{x + 2}\\)",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Differentiate $v$ to get acceleration, then substitute $t = \\pi/2$.",
    "solution": "The correct answer is \\(0\\) m/s².",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Blacktown Boys 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(a = \\frac{dv}{dt} = 8\\sin 2t\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(a = 8\\sin\\pi = 0 \\text{ m/s}^2\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(0\\) m/s²",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(0\\) m/s². Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(0\\) m/s²",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bbhs2020-31e",
    "topicId": "y12a-exam-bbhs",
    "c": "7C",
    "t": "Integrating with respect to time",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "For $v = 2 - 4\\cos 2t$ and initial displacement 3 m to the right of the origin, find the exact displacement when $t = \\pi$.",
    "opts": [
      "\\(x = 2\\pi + 3\\) metres",
      "\\(x = 2\\pi + 3\\) metres + 1",
      "\\(x = 2\\pi - 3\\) metres",
      "\\(x = 4\\pi + 4\\) metres"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Integrate $v$ to get $x(t)$, apply the initial condition $x(0) = 3$, then substitute $t = \\pi$.",
    "solution": "The correct answer is \\(x = 2\\pi + 3\\) metres.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Blacktown Boys 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(x = 2t - 2\\sin 2t + C\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(3 = 0 - 0 + C \\Rightarrow C = 3\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(x(\\pi) = 2\\pi - 2\\sin 2\\pi + 3 = 2\\pi + 3\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(x = 2\\pi + 3\\) metres. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(x = 2\\pi + 3\\) metres",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bbhs2020-32a",
    "topicId": "y12a-exam-bbhs",
    "c": "3G",
    "t": "Applications of maximisation and minimisation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "A window is a rectangle of width $2r$ and height $h$, surmounted by a semicircle of radius $r$. The perimeter is $16\\pi$ metres. Show that $h = 8\\pi - r - \\dfrac{1}{2}\\pi r$.",
    "opts": [
      "\\(\\dfrac{9}{5}\\)",
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "Perimeter \\(= 2h + 2r + \\pi r = 16\\pi\\), so \\(2h = 16\\pi - 2r - \\pi r\\), giving \\(h = 8\\pi - r - \\frac{1}{2}\\pi r\\)."
    ],
    "a": 3,
    "answer": "3",
    "hint": "The perimeter consists of: two vertical sides ($2h$), the base ($2r$), and the semicircle ($\\pi r$).",
    "solution": "The correct answer is Perimeter \\(= 2h + 2r + \\pi r = 16\\pi\\), so \\(2h = 16\\pi - 2r - \\pi r\\), giving \\(h = 8\\pi - r - \\frac{1}{2}\\pi r\\)..",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Blacktown Boys 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(2h + 2r + \\pi r = 16\\pi\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(2h = 16\\pi - 2r - \\pi r \\Rightarrow h = 8\\pi - r - \\frac{1}{2}\\pi r\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "Perimeter \\(= 2h + 2r + \\pi r = 16\\pi\\), so \\(2h = 16\\pi - 2r - \\pi r\\), giving \\(h = 8\\pi - r - \\frac{1}{2}\\pi r\\).",
        "graphData": null
      },
      {
        "explanation": "Final answer: Perimeter \\(= 2h + 2r + \\pi r = 16\\pi\\), so \\(2h = 16\\pi - 2r - \\pi r\\), giving \\(h = 8\\pi - r - \\frac{1}{2}\\pi r\\).. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "Perimeter \\(= 2h + 2r + \\pi r = 16\\pi\\), so \\(2h = 16\\pi - 2r - \\pi r\\), giving \\(h = 8\\pi - r - \\frac{1}{2}\\pi r\\).",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bbhs2020-32b",
    "topicId": "y12a-exam-bbhs",
    "c": "3G",
    "t": "Applications of maximisation and minimisation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Given $h = 8\\pi - r - \\dfrac{\\pi r}{2}$, show that the area $A$ of the window is $A = 16\\pi r - 2r^2 - \\dfrac{1}{2}\\pi r^2$.",
    "opts": [
      "\\(-A = 2rh + \\frac{1}{2}\\pi r^2 = 2r(8\\pi - r - \\frac{\\pi r}{2}) + \\frac{\\pi r^2}{2} = 16\\pi r - 2r^2 - \\pi r^2 + \\frac{\\pi r^2}{2} = 16\\pi r - 2r^2 - \\frac{\\pi r^2}{2}\\)",
      "\\(A = 2rh + \\frac{1}{2}\\pi r^2 = 2r(8\\pi - r - \\frac{\\pi r}{2}) + \\frac{\\pi r^2}{2} = 16\\pi r - 2r^2 - \\pi r^2 + \\frac{\\pi r^2}{2} = 16\\pi r - 2r^2 - \\frac{\\pi r^2}{2}\\)",
      "\\(A = 2rh + \\frac{2}{1}\\pi r^2 = 2r(8\\pi - r - \\frac{\\pi r}{2}) + \\frac{\\pi r^2}{2} = 16\\pi r - 2r^2 - \\pi r^2 + \\frac{\\pi r^2}{2} = 16\\pi r - 2r^2 - \\frac{\\pi r^2}{2}\\)",
      "\\(A = 4rh + \\frac{1}{4}\\pi r^4 = 4r(8\\pi - r - \\frac{\\pi r}{4}) + \\frac{\\pi r^4}{4} = 16\\pi r - 4r^4 - \\pi r^4 + \\frac{\\pi r^4}{4} = 16\\pi r - 4r^4 - \\frac{\\pi r^4}{4}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Area = rectangle area + semicircle area $= 2rh + \\frac{1}{2}\\pi r^2$.",
    "solution": "The correct answer is \\(A = 2rh + \\frac{1}{2}\\pi r^2 = 2r(8\\pi - r - \\frac{\\pi r}{2}) + \\frac{\\pi r^2}{2} = 16\\pi r - 2r^2 - \\pi r^2 + \\frac{\\pi r^2}{2} = 16\\pi r - 2r^2 - \\frac{\\pi r^2}{2}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Blacktown Boys 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(A = 2rh + \\frac{1}{2}\\pi r^2\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(A = 2r\\!\\left(8\\pi - r - \\frac{\\pi r}{2}\\right) + \\frac{\\pi r^2}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(A = 16\\pi r - 2r^2 - \\pi r^2 + \\frac{\\pi r^2}{2} = 16\\pi r - 2r^2 - \\frac{\\pi r^2}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: A = 2rh + \\frac{1}{2}\\pi r^2 = 2r(8\\pi - r - \\frac{\\pi r}{2}) + \\frac{\\pi r^2}{2} = 16\\pi r - 2r^2 - \\pi r^2 + \\frac{\\pi r^2}{2} = 16\\pi r - 2r^2 - \\frac{\\pi r^2}{2}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(A = 2rh + \\frac{1}{2}\\pi r^2 = 2r(8\\pi - r - \\frac{\\pi r}{2}) + \\frac{\\pi r^2}{2} = 16\\pi r - 2r^2 - \\pi r^2 + \\frac{\\pi r^2}{2} = 16\\pi r - 2r^2 - \\frac{\\pi r^2}{2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bbhs2020-32c",
    "topicId": "y12a-exam-bbhs",
    "c": "3G",
    "t": "Applications of maximisation and minimisation",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Given $A = 16\\pi r - 2r^2 - \\dfrac{\\pi r^2}{2}$, find the exact radius $r$ for which the area is a maximum.",
    "opts": [
      "\\(-r = \\dfrac{16\\pi}{4 + \\pi}\\)",
      "\\(r = \\dfrac{16\\pi}{4 + \\pi}\\)",
      "\\(r = \\frac{1}{4 + \\pi}\\)",
      "\\(r = \\frac{4 + \\pi}{16\\pi}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Differentiate $A$ with respect to $r$, set $\\frac{dA}{dr} = 0$, and verify it is a maximum.",
    "solution": "The correct answer is \\(r = \\dfrac{16\\pi}{4 + \\pi}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Blacktown Boys 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\frac{dA}{dr} = 16\\pi - 4r - \\pi r\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(16\\pi - 4r - \\pi r = 0 \\Rightarrow r(4 + \\pi) = 16\\pi\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(r = \\frac{16\\pi}{4 + \\pi}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: r = \\dfrac{16\\pi}{4 + \\pi}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(r = \\dfrac{16\\pi}{4 + \\pi}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bbhs2020-32d",
    "topicId": "y12a-exam-bbhs",
    "c": "3G",
    "t": "Applications of maximisation and minimisation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the maximum area of the window (to 1 decimal place), given $r = \\dfrac{16\\pi}{4 + \\pi}$.",
    "opts": [
      "\\(176.9\\) m²",
      "\\(176.9\\) m² + 1",
      "\\(\\dfrac{12}{x + 2}\\)",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Substitute $r = \\frac{16\\pi}{4+\\pi}$ into $A = 16\\pi r - 2r^2 - \\frac{\\pi r^2}{2}$.",
    "solution": "The correct answer is \\(176.9\\) m².",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Blacktown Boys 2020 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(A = 16\\pi \\times \\frac{16\\pi}{4+\\pi} - 2\\left(\\frac{16\\pi}{4+\\pi}\\right)^2 - \\frac{\\pi}{2}\\left(\\frac{16\\pi}{4+\\pi}\\right)^2\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(A \\approx 176.9 \\text{ m}^2\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(176.9\\) m²",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(176.9\\) m². Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(176.9\\) m²",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  }
];
