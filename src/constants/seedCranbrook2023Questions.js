export const CRANBROOK_2023_QUESTIONS = [
  {
    "id": "cra2023-mc1",
    "topicId": "y12a-exam-cra",
    "c": "3B",
    "t": "Functions, relations, and graphs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "Which of the following sets of ordered pairs represents a one-to-many relationship?\n\n(A) $(1,1), (1,2), (2,3), (3,4)$\n\n(B) $(1,1), (2,2), (3,2), (4,3)$\n\n(C) $(1,1), (2,2), (3,3), (4,4)$\n\n(D) $(1,1), (1,2), (2,3), (3,3)$",
    "opts": [
      "\\((1,1), (1,2), (2,3), (3,4)\\)",
      "\\((1,1), (2,2), (3,2), (4,3)\\)",
      "\\((1,1), (2,2), (3,3), (4,4)\\)",
      "\\((1,1), (1,2), (2,3), (3,3)\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "One-to-many means one $x$-value maps to more than one $y$-value, while every $y$-value comes from only one $x$-value.",
    "solution": "The correct answer is \\((1,1), (1,2), (2,3), (3,4)\\).",
    "solutionSteps": [
      {
        "explanation": "Recall the definition of a one-to-many relation: at least one \\(x\\)-value is paired with more than one \\(y\\)-value, but each \\(y\\)-value is paired with only one \\(x\\)-value. We must check both directions for every option.",
        "workingOut": "\\(\\text{one-to-many: one } x \\to \\text{many } y, text{ each } y \\leftarrow \\text{one } x\\)",
        "graphData": null
      },
      {
        "explanation": "Check option (A). The \\(x\\)-value \\(1\\) maps to both \\(y=1\\) and \\(y=2\\), so it is \"one-to-many\" in the \\(x\\) direction. Now check the \\(y\\)-values: \\(1, 2, 3, 4\\) are all distinct, so no \\(y\\) comes from two different \\(x\\)-values.",
        "workingOut": "\\(x=1 \\to y=1, 2 \\quad \\checkmark \\qquad y\\text{-values } 1,2,3,4 \\text{ all distinct} \\quad \\checkmark\\)",
        "graphData": null
      },
      {
        "explanation": "Check option (D) which also has \\(x=1\\) mapping to two \\(y\\)-values. However \\(y=3\\) is produced by both \\(x=2\\) and \\(x=3\\), so the relation is many-to-many, not one-to-many. Options (B) and (C) have no repeated \\(x\\)-values at all.",
        "workingOut": "\\((D): y=3 \\leftarrow x=2 \\text{ and } x=3 \\implies \\text{many-to-many} \\; \\times\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023-mc2",
    "topicId": "y12a-exam-cra",
    "c": "9D",
    "t": "Bivariate data",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "The height and weight of a group of students is shown on a scatterplot, with weight (kg) on the horizontal axis and height (cm) on the vertical axis. Student A is plotted above and to the left of Student B. Which of the following statements is true?",
    "opts": [
      "Student A is taller and weighs more than Student B.",
      "Student A is taller and weighs less than Student B.",
      "Student A is shorter and weighs more than Student B.",
      "Student A is shorter and weighs less than Student B."
    ],
    "a": 1,
    "answer": "1",
    "hint": "Read each axis separately: the vertical axis is height, the horizontal axis is weight.",
    "solution": "The correct answer is Student A is taller and weighs less than Student B..",
    "solutionSteps": [
      {
        "explanation": "Identify what each axis measures: the vertical axis shows height in centimetres, and the horizontal axis shows weight in kilograms. Comparing two points means comparing their vertical positions for height and horizontal positions for weight.",
        "workingOut": "\\(\\text{vertical} = \\text{height (cm)}, quad \\text{horizontal} = \\text{weight (kg)}\\)",
        "graphData": null
      },
      {
        "explanation": "Student A is plotted above Student B, meaning A has a larger vertical coordinate, so Student A is taller.",
        "workingOut": "\\(A \\text{ above } B \\implies \\text{height}_A > \\text{height}_B\\)",
        "graphData": null
      },
      {
        "explanation": "Student A is plotted to the left of Student B, meaning A has a smaller horizontal coordinate, so Student A weighs less.",
        "workingOut": "\\(A \\text{ left of } B \\implies \\text{weight}_A < \\text{weight}_B\\)",
        "graphData": null
      },
      {
        "explanation": "Combining both observations: Student A is taller and weighs less than Student B. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(\\text{Answer: (B)}\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 380,
        "height": 320,
        "boundingbox": [
          -1,
          11,
          12,
          -1.5
        ],
        "boardOptions": {
          "keepaspectratio": false
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[0,0],[12,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,0],[0,11]], {strokeColor:'black'});\nvar pts = [[1.5,2],[2.5,8],[4.5,7],[4.5,9],[5,6.5],[5,5],[6.5,4.5],[5.5,3],[9,9.5],[9,8.5],[11,6]];\nfor (var i=0;i<pts.length;i++){ board.create('point', pts[i], {name:'', size:3, color:'#475569', fixed:true}); }\nboard.create('point', [4,6.5], {name:'A', size:3, color:'#475569', fixed:true, label:{offset:[-14,2], fontSize:15}});\nboard.create('point', [7,4.5], {name:'B', size:3, color:'#475569', fixed:true, label:{offset:[10,2], fontSize:15}});\nboard.create('text', [4.5, -1.1, 'weight (kg)'], {fontSize:13});\nboard.create('text', [0.2, 10.6, 'height (cm)'], {fontSize:13});\nboard.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023-mc3",
    "topicId": "y12a-exam-cra",
    "c": "9C",
    "t": "Quartiles and interquartile range",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "In a mathematics examination, 25% of students scored less than 40 marks, 75% of students scored less than 86 marks and the highest mark was 96. Given that the distribution is symmetrical with no outliers, what is the lowest mark and the median of this data set?",
    "opts": [
      "Lowest mark \\(= 30\\), Median \\(= 63\\)",
      "Lowest mark \\(= 30\\), Median \\(= 68\\)",
      "Lowest mark \\(= 36\\), Median \\(= 63\\)",
      "Lowest mark \\(= 36\\), Median \\(= 68\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "For a symmetrical distribution the median is midway between $Q_1$ and $Q_3$, and the minimum is as far below the median as the maximum is above it.",
    "solution": "The correct answer is Lowest mark \\(= 30\\), Median \\(= 63\\).",
    "solutionSteps": [
      {
        "explanation": "Translate the percentile information into quartiles: 25% of students scored below 40 means the first quartile is \\(Q_1 = 40\\); 75% scored below 86 means the third quartile is \\(Q_3 = 86\\).",
        "workingOut": "\\(Q_1 = 40, quad Q_3 = 86, quad \\text{max} = 96\\)",
        "graphData": null
      },
      {
        "explanation": "For a symmetrical distribution, the median lies exactly halfway between the first and third quartiles, so average \\(Q_1\\) and \\(Q_3\\).",
        "workingOut": "\\(\\text{Median} = \\dfrac{40 + 86}{2} = \\dfrac{126}{2} = 63\\)",
        "graphData": null
      },
      {
        "explanation": "Symmetry also means the maximum and minimum are equidistant from the median. Find how far the maximum is above the median.",
        "workingOut": "\\(96 - 63 = 33\\)",
        "graphData": null
      },
      {
        "explanation": "The minimum must be the same distance below the median, which gives the lowest mark. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(\\text{Lowest mark} = 63 - 33 = 30\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023-mc4",
    "topicId": "y12a-exam-cra",
    "c": "1F",
    "t": "Summing an arithmetic series",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "In an arithmetic series, the sum of the first three terms is 21 and the sum of the first four terms is 36. What is the sum of the first five terms of this series?",
    "opts": [
      "\\(15\\)",
      "\\(51\\)",
      "\\(55\\)",
      "\\(57\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Use $S_n = \\dfrac{n}{2}(2a + (n-1)d)$ to set up two simultaneous equations in $a$ and $d$.",
    "solution": "The correct answer is \\(55\\).",
    "solutionSteps": [
      {
        "explanation": "Write the sum formula for an arithmetic series, \\(S_n = \\dfrac{n}{2}\\bigl(2a + (n-1)d\\bigr)\\), and apply it with \\(n = 3\\) using the given \\(S_3 = 21\\).",
        "workingOut": "\\(S_3 = \\dfrac{3}{2}(2a + 2d) = 3a + 3d = 21 \\implies a + d = 7\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the same formula with \\(n = 4\\) using the given \\(S_4 = 36\\) to get a second equation. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(S_4 = \\dfrac{4}{2}(2a + 3d) = 4a + 6d = 36 \\implies 2a + 3d = 18\\)",
        "graphData": null
      },
      {
        "explanation": "Solve the two equations simultaneously. Substitute \\(a = 7 - d\\) from the first equation into the second to eliminate \\(a\\).",
        "workingOut": "\\(2(7 - d) + 3d = 18 \\implies 14 + d = 18 \\implies d = 4\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023-mc5",
    "topicId": "y12a-exam-cra",
    "c": "5F",
    "t": "Composite functions",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Let $f(x) = \\sqrt{x}$ and $g(x) = \\dfrac{1}{x-1}$. What is the domain and range valid for both $f(g(x))$ and $g(f(x))$?",
    "opts": [
      "\\(Domain: \\([-1, 1]\\), Range \\((-\\infty, infty)\\)\\)",
      "\\(Domain: \\((0, infty)\\), Range \\((-\\infty, 0) \\cup (0, infty)\\)\\)",
      "Domain: \\([0, infty)\\), Range \\((0, infty)\\)",
      "Domain: \\((1, infty)\\), Range \\((0, infty)\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "Find the domain and range of each composite separately, then take the values common to both.",
    "solution": "The correct answer is Domain: \\((1, infty)\\), Range \\((0, infty)\\).",
    "solutionSteps": [
      {
        "explanation": "Form the first composite \\(f(g(x)) = \\sqrt{\\dfrac{1}{x-1}}\\). The square root requires its argument to be non-negative, and the fraction cannot be zero, so we need \\(\\dfrac{1}{x-1} > 0\\), which happens exactly when \\(x - 1 > 0\\).",
        "workingOut": "\\(f(g(x)) = \\sqrt{\\dfrac{1}{x-1}}, quad \\text{domain: } x > 1\\)",
        "graphData": null
      },
      {
        "explanation": "Find the range of \\(f(g(x))\\): as \\(x\\) runs over \\((1, infty)\\), the inner value \\(\\dfrac{1}{x-1}\\) takes every value in \\((0, infty)\\), and the square root of these values also covers \\((0, infty)\\).",
        "workingOut": "\\(\\text{range of } f(g(x)) = (0, infty)\\)",
        "graphData": null
      },
      {
        "explanation": "Form the second composite \\(g(f(x)) = \\dfrac{1}{\\sqrt{x} - 1}\\). It requires \\(x \\geq 0\\) for the square root and \\(\\sqrt{x} \\neq 1\\) (i.e. \\(x \\neq 1\\)) so the denominator is non-zero.",
        "workingOut": "\\(g(f(x)) = \\dfrac{1}{\\sqrt{x}-1}, quad \\text{domain: } [0, infty)\\setminus{1}\\)",
        "graphData": null
      },
      {
        "explanation": "Find the range of \\(g(f(x))\\): \\(\\sqrt{x} - 1\\) covers \\([-1, infty)\\setminus{0}\\), so its reciprocal covers \\((-\\infty, -1] \\cup (0, infty)\\).",
        "workingOut": "\\(\\text{range of } g(f(x)) = (-\\infty, -1] \\cup (0, infty)\\)",
        "graphData": null
      },
      {
        "explanation": "Intersect the two domains and the two ranges to find what is valid for both composites: \\((1, infty) \\cap [0, infty)\\setminus{1} = (1, infty)\\) and \\((0, infty) \\cap \\bigl((-\\infty,-1] \\cup (0, infty)\\bigr) = (0, infty)\\).",
        "workingOut": "\\(\\text{Domain: } (1, infty), quad \\text{Range: } (0, infty) \\implies \\text{(D)}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023-mc6",
    "topicId": "y12a-exam-cra",
    "c": "1H",
    "t": "The limiting sum of a geometric series",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "The limiting sum of a geometric series is $\\dfrac{10}{9}$ and the sum of its first three terms is $\\dfrac{26}{25}$. What is the common ratio of this series?",
    "opts": [
      "\\(1.39\\)",
      "\\(1.25\\)",
      "\\(0.40\\)",
      "\\(0.25\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Use $S_3 = S_\\infty(1 - r^3)$, which follows from $S_n = \\dfrac{a(1-r^n)}{1-r}$ and $S_\\infty = \\dfrac{a}{1-r}$.",
    "solution": "The correct answer is \\(0.40\\).",
    "solutionSteps": [
      {
        "explanation": "Write the two relevant formulas: the partial sum \\(S_n = \\dfrac{a(1 - r^n)}{1 - r}\\) and the limiting sum \\(S_\\infty = \\dfrac{a}{1-r}\\) (valid for \\(|r| < 1\\)). Dividing the first by the second eliminates \\(a\\).",
        "workingOut": "\\(\\dfrac{S_3}{S_\\infty} = 1 - r^3\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the given values \\(S_3 = \\dfrac{26}{25}\\) and \\(S_\\infty = \\dfrac{10}{9}\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(1 - r^3 = \\dfrac{26}{25} \\div \\dfrac{10}{9} = \\dfrac{26}{25} \\times \\dfrac{9}{10} = \\dfrac{234}{250} = \\dfrac{117}{125}\\)",
        "graphData": null
      },
      {
        "explanation": "Verify the answer is valid: \\(|0.40| < 1\\), so the limiting sum exists. The answer is (C). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(|r| = 0.40 < 1 \\quad \\checkmark\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023-mc7",
    "topicId": "y12a-exam-cra",
    "c": "12F",
    "t": "Probability tree diagrams",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "In a bag of $n$ coloured discs, exactly 7 are red. Two discs are selected at random, without replacement. The probability that both discs are red is $\\dfrac{21}{55}$. Which quadratic equation could be used to find the value of $n$?",
    "opts": [
      "\\(n^2 + n + 110 = 0\\)",
      "\\(n^2 - n - 110 = 0\\)",
      "\\(n^2 + n - 110 = 0\\)",
      "\\(n^2 - n + 110 = 0\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "P(both red) without replacement is $\\dfrac{7}{n} \\times \\dfrac{6}{n-1}$.",
    "solution": "The correct answer is \\(n^2 - n - 110 = 0\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cranbrook 2023 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(P(\\text{both red}) = \\dfrac{7}{n} \\times \\dfrac{6}{n-1} = \\dfrac{42}{n(n-1)}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\dfrac{42}{n(n-1)} = \\dfrac{21}{55}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(n(n-1) = \\dfrac{42 \\times 55}{21} = 110\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: n^2 - n - 110 = 0. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(n^2 - n - 110 = 0\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023-mc8",
    "topicId": "y12a-exam-cra",
    "c": "7D",
    "t": "Simple harmonic motion",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "A particle is moving in a straight line such that its displacement $x$ metres at time $t$ seconds from the origin is given by $x = k\\cos(at + b)$, where $a$, $b$ and $k$ are constants. The particle is stationary when $t = \\dfrac{5\\pi}{12}, dfrac{11\\pi}{12}, dfrac{17\\pi}{12}, ldots$ The initial acceleration of the particle is $6\\sqrt{3}\\ \\text{ms}^{-2}$. What could be the values of $a$, $b$ and $k$?",
    "opts": [
      "\\(a = 4, b = -\\dfrac{5\\pi}{6}, k = 3\\)",
      "\\(a = 2, b = -\\dfrac{5\\pi}{6}, k = -3\\)",
      "\\(a = 2, b = \\dfrac{\\pi}{6}, k = 3\\)",
      "\\(a = 2, b = \\dfrac{\\pi}{6}, k = -3\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "Stationary times are $\\dfrac{\\pi}{a}$ apart. Then test the initial acceleration $\\ddot{x}(0) = -ka^2\\cos b$ against $6\\sqrt{3}$.",
    "solution": "The correct answer is \\(a = 2, b = \\dfrac{\\pi}{6}, k = -3\\).",
    "solutionSteps": [
      {
        "explanation": "The particle is stationary when its velocity is zero. For \\(x = k\\cos(at+b)\\), the velocity \\(\\dot{x} = -ka\\sin(at+b)\\) vanishes every half-period, i.e. at intervals of \\(\\dfrac{\\pi}{a}\\). Use the spacing of the given stationary times to find \\(a\\).",
        "workingOut": "\\(\\dfrac{11\\pi}{12} - \\dfrac{5\\pi}{12} = \\dfrac{6\\pi}{12} = \\dfrac{\\pi}{2} = \\dfrac{\\pi}{a} \\implies a = 2\\)",
        "graphData": null
      },
      {
        "explanation": "This immediately eliminates option (A), which has \\(a = 4\\). Next, differentiate twice to find the acceleration function.",
        "workingOut": "\\(\\ddot{x} = -ka^2\\cos(at+b) = -4k\\cos(2t + b)\\)",
        "graphData": null
      },
      {
        "explanation": "Test option (D): \\(b = \\dfrac{\\pi}{6}\\), \\(k = -3\\). Substitute and check, using \\(\\cos\\dfrac{\\pi}{6} = \\dfrac{\\sqrt{3}}{2}\\).",
        "workingOut": "\\(-4(-3)\\cos\\dfrac{\\pi}{6} = 12 \\times \\dfrac{\\sqrt{3}}{2} = 6\\sqrt{3} \\quad \\checkmark\\)",
        "graphData": null
      },
      {
        "explanation": "Verify a stationary time also fits: \\(\\dot{x} = 6\\sin(2t + \\tfrac{\\pi}{6}) = 0\\) at \\(2t + \\tfrac{\\pi}{6} = \\pi\\), i.e. \\(t = \\dfrac{5\\pi}{12}\\) ✓. Check option (C) for contrast: \\(k = 3\\) would give \\(\\ddot{x}(0) = -6\\sqrt{3}\\), the wrong sign. The answer is (D).",
        "workingOut": "\\(t = \\dfrac{\\pi - \\pi/6}{2} = \\dfrac{5\\pi}{12} \\quad \\checkmark \\implies \\text{(D)}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023-mc9",
    "topicId": "y12a-exam-cra",
    "c": "11B",
    "t": "Solving trig equations",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Consider the equation $\\left(\\sin\\theta - \\dfrac{\\sqrt{2}}{2}\\right)\\left(\\tan\\theta - \\dfrac{\\sqrt{3}}{3}\\right) = 0$. How many solutions are there in the interval $0 \\leq \\theta \\leq \\pi$?",
    "opts": [
      "\\(4\\)",
      "\\(3\\)",
      "\\(2\\)",
      "\\(1\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Use the null factor law: solve $\\sin\\theta = \\dfrac{\\sqrt{2}}{2}$ and $\\tan\\theta = \\dfrac{\\sqrt{3}}{3}$ separately on $[0, pi]$.",
    "solution": "The correct answer is \\(3\\).",
    "solutionSteps": [
      {
        "explanation": "Apply the null factor law: a product equals zero exactly when at least one factor is zero. This splits the problem into two separate trigonometric equations.",
        "workingOut": "\\(\\sin\\theta = \\dfrac{\\sqrt{2}}{2} \\quad \\text{or} \\quad \\tan\\theta = \\dfrac{\\sqrt{3}}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Solve \\(\\sin\\theta = \\dfrac{\\sqrt{2}}{2}\\) on \\([0, pi]\\). Sine is positive in the first and second quadrants, with related angle \\(\\dfrac{\\pi}{4}\\), so there are two solutions.",
        "workingOut": "\\(\\theta = \\dfrac{\\pi}{4} \\quad \\text{or} \\quad \\theta = \\pi - \\dfrac{\\pi}{4} = \\dfrac{3\\pi}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "Solve \\(\\tan\\theta = \\dfrac{\\sqrt{3}}{3} = \\dfrac{1}{\\sqrt{3}}\\) on \\([0, pi]\\). Tangent has period \\(\\pi\\), with related angle \\(\\dfrac{\\pi}{6}\\). The first-quadrant solution is \\(\\dfrac{\\pi}{6}\\); the next would be \\(\\dfrac{\\pi}{6} + \\pi > \\pi\\), outside the interval. (Tangent is negative in the second quadrant, so no solution there.).",
        "workingOut": "\\(\\theta = \\dfrac{\\pi}{6} \\text{ only}\\)",
        "graphData": null
      },
      {
        "explanation": "Count the distinct solutions: \\(\\dfrac{\\pi}{6}\\), \\(\\dfrac{\\pi}{4}\\), \\(\\dfrac{3\\pi}{4}\\) — three in total, which is option (B).",
        "workingOut": "\\(3 \\text{ solutions} \\implies \\text{(B)}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023-mc10",
    "topicId": "y12a-exam-cra",
    "c": "4C",
    "t": "The definite integral and its properties",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "The graphs of an even function $f$ and an odd function $g$ are shown. Define $A = \\displaystyle\\int_{-2}^{-4} f(x)\\,dx$, $B = \\displaystyle\\int_{-2}^{0} g(x)\\,dx$ and $C = \\displaystyle\\int_{2}^{4}\\bigl(f(x)-g(x)\\bigr)\\,dx$. (Note: the limits of $A$ run from $-2$ down to $-4$, so they are reversed.) Which expression equals $\\displaystyle\\int_{0}^{4} g(x)\\,dx$?",
    "opts": [
      "\\(A + B + C\\)",
      "\\(A - B + C\\)",
      "\\(-A + B - C\\)",
      "\\(-A - B - C\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "Reverse the limits of $A$ first. Use $f$ even ($\\int$ on $[-4,-2]$ equals $\\int$ on $[2,4]$) and $g$ odd ($\\int$ on $[-2,0]$ equals $-\\int$ on $[0,2]$). Split $C$ and the target integral at $x=2$.",
    "solution": "The correct answer is \\(-A - B - C\\).",
    "solutionSteps": [
      {
        "explanation": "Note carefully: the integral defining \\(A\\) has reversed limits (from \\(-2\\) down to \\(-4\\)). Reversing limits multiplies by \\(-1\\).",
        "workingOut": "\\(A = -\\int_{-4}^{-2} f\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Because \\(f\\) is even, \\(\\int_{-4}^{-2} f = \\int_2^4 f\\), so \\(\\int_2^4 f = -A\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(\\int_2^4 f\\,dx = -A\\)",
        "graphData": null
      },
      {
        "explanation": "Because \\(g\\) is odd, \\(B = \\int_{-2}^{0} g = -\\int_0^2 g\\), so \\(\\int_0^2 g = -B\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(\\int_0^2 g\\,dx = -B\\)",
        "graphData": null
      },
      {
        "explanation": "Split \\(C\\): \\(C = \\int_2^4 f - \\int_2^4 g = -A - \\int_2^4 g\\), hence \\(\\int_2^4 g = -A - C\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(\\int_2^4 g\\,dx = -A - C\\)",
        "graphData": null
      },
      {
        "explanation": "Split the target at \\(x=2\\): \\(\\int_0^4 g = \\int_0^2 g + \\int_2^4 g = (-B)+(-A-C)=-A-B-C\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(\\int_0^4 g\\,dx = -A - B - C\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 420,
        "height": 320,
        "boundingbox": [
          -6,
          4.5,
          6,
          -4.5
        ],
        "boardOptions": {
          "keepaspectratio": false
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-6,0],[6,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-4.5],[0,4.5]], {strokeColor:'black'});\nvar f = function(x){ return 0.06*Math.pow(x,4) - 0.85*x*x + 1.2; };\nvar g = function(x){ return -0.05*Math.pow(x,3) + 0.55*x; };\nboard.create('functiongraph', [f, -5.2, 5.2], {strokeColor:'#1d4ed8',strokeWidth:2});\nboard.create('functiongraph', [g, -5.5, 5.5], {strokeColor:'#15803d',strokeWidth:2});\nfor (var k=2;k<=4;k++){ board.create('text',[k,0.15,''+k],{fontSize:11}); board.create('text',[-k,0.15,'-'+k],{fontSize:11}); }\nboard.create('text', [-3.4, -1.1, 'A'], {fontSize:15});\nboard.create('text', [-1.1, 0.9, 'B'], {fontSize:15});\nboard.create('text', [3.0, -1.6, 'C'], {fontSize:15});\nboard.create('text', [5.0, 3.2, 'y = f(x)'], {fontSize:12});\nboard.create('text', [4.6, -2.6, 'y = g(x)'], {fontSize:12});\nboard.create('text', [0.25, 4.1, 'y'], {fontSize:13});\nboard.create('text', [5.6, 0.4, 'x'], {fontSize:13});\nboard.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023-q11",
    "topicId": "y12a-exam-cra",
    "c": "9B",
    "t": "Grouped data and histograms",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "A company records the type of issues for IT support over a period of time. The frequencies shown in the Pareto chart are: Internet Speed 144, Printer Error 118, Forgotten Password 64, Missing Files 54, Slow Computer 26, Other 17. What percentage of issues were due to \"Printer Error\" or \"Forgotten Password\"? Answer to the nearest whole percent.",
    "opts": [
      "\\(42\\%\\)",
      "\\(43\\\\)",
      "\\(43\\%\\)",
      "\\(44\\%\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Add the two relevant frequencies and divide by the total of all frequencies.",
    "solution": "The correct answer is \\(43\\%\\).",
    "solutionSteps": [
      {
        "explanation": "Find the total number of recorded issues by adding all six frequencies, because a percentage must be taken out of the whole data set.",
        "workingOut": "\\(144 + 118 + 64 + 54 + 26 + 17 = 423\\)",
        "graphData": null
      },
      {
        "explanation": "Add the frequencies of the two categories asked about: Printer Error and Forgotten Password. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(118 + 64 = 182\\)",
        "graphData": null
      },
      {
        "explanation": "Express this count as a percentage of the total by dividing and multiplying by 100. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(\\dfrac{182}{423} \\times 100\\% = 43.03\\ldots\\%\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 440,
        "height": 320,
        "boundingbox": [
          -0.6,
          165,
          7,
          -45
        ],
        "boardOptions": {
          "keepaspectratio": false
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[0,0],[7,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,0],[0,160]], {strokeColor:'black'});\nboard.create('arrow', [[6.6,0],[6.6,160]], {strokeColor:'black'});\nvar freq = [145,118,65,54,25,17];\nvar labels = ['Internet','Printer','Password','Files','Slow','Other'];\nfor (var i=0;i<freq.length;i++){ var xc=i+0.6; board.create('polygon', [[xc-0.32,0],[xc+0.32,0],[xc+0.32,freq[i]],[xc-0.32,freq[i]]], {fillColor:'#94a3b8', fillOpacity:0.7, borders:{strokeColor:'#475569'}, vertices:{visible:false}, fixed:true}); board.create('text', [xc-0.3, -12, labels[i]], {fontSize:9}); }\nvar cum=0, total=424, prev=null;\nfor (var j=0;j<freq.length;j++){ cum+=freq[j]; var y=(cum/total)*150; var xp=j+0.6; var p=board.create('point',[xp,y],{name:'',size:2,color:'#1e293b',fixed:true}); if(prev){ board.create('segment',[prev,p],{strokeColor:'#1e293b',strokeWidth:1.5}); } prev=p; }\nfor (var t=0;t<=100;t+=20){ board.create('text',[6.7,(t/100)*150-3,t+'%'],{fontSize:9}); }\nboard.create('text', [-0.5, 158, 'Frequency'], {fontSize:11});\nboard.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023-q12",
    "topicId": "y12a-exam-cra",
    "c": "9A",
    "t": "Tangents and the derivative",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the equation of the normal to the curve $y = x^3 - 2x$ at the point $(-1, 1)$.",
    "opts": [
      "\\(\\dfrac{13}{x + 3}\\)",
      "\\(y = +x\\)",
      "\\(y = -x\\)",
      "\\(y = -x + 1\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "The normal is perpendicular to the tangent: its gradient is the negative reciprocal of $\\dfrac{dy}{dx}$ at the point.",
    "solution": "The correct answer is \\(y = -x\\).",
    "solutionSteps": [
      {
        "explanation": "Differentiate the curve to obtain the gradient function, using the power rule term by term: the derivative of \\(x^3\\) is \\(3x^2\\) and the derivative of \\(-2x\\) is \\(-2\\).",
        "workingOut": "\\(\\dfrac{dy}{dx} = 3x^2 - 2\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the derivative at \\(x = -1\\) to find the gradient of the tangent at the given point. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(m_{\\text{tangent}} = 3(-1)^2 - 2 = 3 - 2 = 1\\)",
        "graphData": null
      },
      {
        "explanation": "The normal is perpendicular to the tangent, so its gradient is the negative reciprocal of the tangent gradient: \\(m_1 m_2 = -1\\).",
        "workingOut": "\\(m_{\\text{normal}} = -\\dfrac{1}{1} = -1\\)",
        "graphData": null
      },
      {
        "explanation": "Use the point–gradient form of a line, \\(y - y_1 = m(x - x_1)\\), with the point \\((-1, 1)\\) and gradient \\(-1\\).",
        "workingOut": "\\(y - 1 = -1\\,(x - (-1)) = -(x + 1)\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify to obtain the equation of the normal, and verify the point lies on it: at \\(x = -1\\), \\(y = 1\\) ✓.",
        "workingOut": "\\(y = -x\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023-q13",
    "topicId": "y12a-exam-cra",
    "c": "3I",
    "t": "Direct and inverse variation",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "The time it takes to complete a task varies inversely with the number of people assigned. It takes 5 people to complete a task in 4 hours. Find the amount of time it would take 8 people to complete the same task.",
    "opts": [
      "\\(2.5\\) hours",
      "\\(2.5\\) hours + 1",
      "\\(4.5\\) hours",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Inverse variation means $t = \\dfrac{k}{n}$ for a constant $k$. Find $k$ first.",
    "solution": "The correct answer is \\(2.5\\) hours.",
    "solutionSteps": [
      {
        "explanation": "Translate \"varies inversely\" into an equation: time \\(t\\) equals a constant \\(k\\) divided by the number of people \\(n\\). This is the defining form of inverse variation.",
        "workingOut": "\\(t = \\dfrac{k}{n}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the given pair of values (\\(n = 5\\) people, \\(t = 4\\) hours) to find the constant of variation \\(k\\).",
        "workingOut": "\\(4 = \\dfrac{k}{5} \\implies k = 20\\)",
        "graphData": null
      },
      {
        "explanation": "Use the now-complete model \\(t = \\dfrac{20}{n}\\) with \\(n = 8\\) people to find the required time. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(t = \\dfrac{20}{8} = 2.5 \\text{ hours}\\)",
        "graphData": null
      },
      {
        "explanation": "Check for reasonableness: more people should take less time, and \\(2.5 < 4\\) ✓. State the answer with units.",
        "workingOut": "\\(t = 2.5 \\text{ hours } (= 2 \\text{ hours } 30 \\text{ min})\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023-q14a",
    "topicId": "y12a-exam-cra",
    "c": "5G",
    "t": "Differentiation of logarithmic functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find $\\dfrac{dy}{dx}$, given $y = (\\ln x)^2$.",
    "opts": [
      "\\(-\\dfrac{dy}{dx} = \\dfrac{2\\ln x}{x}\\)",
      "\\(\\dfrac{dy}{dx} = \\dfrac{2\\ln x}{x}\\)",
      "\\(\\frac{1}{dx} = \\dfrac{2\\ln x}{x}\\)",
      "\\(\\frac{dx}{dy} = \\dfrac{2\\ln x}{x}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Use the chain rule with outer function $u^2$ and inner function $u = \\ln x$.",
    "solution": "The correct answer is \\(\\dfrac{dy}{dx} = \\dfrac{2\\ln x}{x}\\).",
    "solutionSteps": [
      {
        "explanation": "Recognise the composite structure: \\(y = u^2\\) where \\(u = \\ln x\\). The chain rule says \\(\\dfrac{dy}{dx} = \\dfrac{dy}{du} \\cdot \\dfrac{du}{dx}\\), because the function is an outer power applied to an inner logarithm.",
        "workingOut": "\\(y = u^2, quad u = \\ln x\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate the outer function with respect to \\(u\\) (bring down the power and reduce it by one), and the inner function with respect to \\(x\\) (the derivative of \\(\\ln x\\) is \\(\\dfrac{1}{x}\\)).",
        "workingOut": "\\(\\dfrac{dy}{du} = 2u, quad \\dfrac{du}{dx} = \\dfrac{1}{x}\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply the two derivatives and substitute back \\(u = \\ln x\\) to express the answer in terms of \\(x\\).",
        "workingOut": "\\(\\dfrac{dy}{dx} = 2\\ln x \\times \\dfrac{1}{x} = \\dfrac{2\\ln x}{x}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023-q14b",
    "topicId": "y12a-exam-cra",
    "c": "5I",
    "t": "Integration of the reciprocal function",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Hence or otherwise, find $\\displaystyle\\int_1^e \\dfrac{\\ln(x^2)}{2x}\\,dx$.",
    "opts": [
      "\\(-0.5\\)",
      "\\(\\dfrac{1}{2}\\)",
      "\\(1\\)",
      "\\(1.5\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Simplify $\\ln(x^2) = 2\\ln x$ first, then use part (a): the integrand becomes $\\dfrac{\\ln x}{x}$, which is half the derivative of $(\\ln x)^2$.",
    "solution": "The correct answer is \\(\\dfrac{1}{2}\\).",
    "solutionSteps": [
      {
        "explanation": "Simplify the integrand first using the logarithm power law \\(\\ln(x^2) = 2\\ln x\\), which cancels with the 2 in the denominator.",
        "workingOut": "\\(\\dfrac{\\ln(x^2)}{2x} = \\dfrac{2\\ln x}{2x} = \\dfrac{\\ln x}{x}\\)",
        "graphData": null
      },
      {
        "explanation": "Use part (a) in reverse (\"hence\"): since \\(\\dfrac{d}{dx}(\\ln x)^2 = \\dfrac{2\\ln x}{x}\\), dividing by 2 shows that \\(\\dfrac{(\\ln x)^2}{2}\\) is an antiderivative of \\(\\dfrac{\\ln x}{x}\\).",
        "workingOut": "\\(\\int \\dfrac{\\ln x}{x}\\,dx = \\dfrac{(\\ln x)^2}{2} + C\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the fundamental theorem of calculus: evaluate the antiderivative at the limits \\(x = e\\) and \\(x = 1\\).",
        "workingOut": "\\(\\left[\\dfrac{(\\ln x)^2}{2}\\right]_1^e = \\dfrac{(\\ln e)^2}{2} - \\dfrac{(\\ln 1)^2}{2}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023-q15",
    "topicId": "y12a-exam-cra",
    "c": "6D",
    "t": "Integrating the trig functions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "The graph of the primitive function of $f(x) = \\tan^2 x$ crosses the $x$-axis at $x = \\dfrac{\\pi}{3}$. Find the primitive function, leaving all values in exact form.",
    "opts": [
      "\\(-F(x) = \\tan x - x + \\dfrac{\\pi}{3} - \\sqrt{3}\\)",
      "\\(F(x) = \\tan x - x + \\dfrac{\\pi}{3} - \\sqrt{3}\\)",
      "\\(F(x) = \\tan x - x + \\frac{1}{3} - \\sqrt{3}\\)",
      "\\(F(x) = \\tan x - x + \\frac{3}{\\pi} - \\sqrt{3}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Use the Pythagorean identity $\\tan^2 x = \\sec^2 x - 1$ to integrate, then use $F\\!\\left(\\dfrac{\\pi}{3}\\right) = 0$ to find the constant.",
    "solution": "The correct answer is \\(F(x) = \\tan x - x + \\dfrac{\\pi}{3} - \\sqrt{3}\\).",
    "solutionSteps": [
      {
        "explanation": "Rewrite \\(\\tan^2 x\\) using the Pythagorean identity \\(\\sec^2 x = 1 + \\tan^2 x\\), because \\(\\tan^2 x\\) has no direct antiderivative but \\(\\sec^2 x\\) integrates to \\(\\tan x\\).",
        "workingOut": "\\(\\tan^2 x = \\sec^2 x - 1\\)",
        "graphData": null
      },
      {
        "explanation": "Integrate term by term: the antiderivative of \\(\\sec^2 x\\) is \\(\\tan x\\), and the antiderivative of \\(1\\) is \\(x\\). Include the constant of integration \\(C\\).",
        "workingOut": "\\(F(x) = \\int (\\sec^2 x - 1)\\,dx = \\tan x - x + C\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the given condition: the primitive crosses the \\(x\\)-axis at \\(x = \\dfrac{\\pi}{3}\\), meaning \\(F\\!\\left(\\dfrac{\\pi}{3}\\right) = 0\\). Substitute, using \\(\\tan\\dfrac{\\pi}{3} = \\sqrt{3}\\).",
        "workingOut": "\\(\\sqrt{3} - \\dfrac{\\pi}{3} + C = 0\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023-q16a",
    "topicId": "y12a-exam-cra",
    "c": "4D",
    "t": "Odd and even symmetry",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Consider the function $f(x) = -\\sin\\!\\left(\\dfrac{1}{2}(x - \\pi)\\right)$. Is $f(x)$ even, odd, or neither?",
    "opts": [
      "\\(Even\\)",
      "\\(Odd\\)",
      "\\(Neither\\)",
      "Not enough information"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Expand $\\sin\\!\\left(\\dfrac{x}{2} - \\dfrac{\\pi}{2}\\right)$ with the compound angle formula, or check $f(-x) = f(x)$ directly.",
    "solution": "The correct answer is \\(Even\\).",
    "solutionSteps": [
      {
        "explanation": "Distribute the \\(\\dfrac{1}{2}\\) inside the sine so the expression is in the standard compound-angle form \\(\\sin(A - B)\\).",
        "workingOut": "\\(f(x) = -\\sin\\!\\left(\\dfrac{x}{2} - \\dfrac{\\pi}{2}\\right)\\)",
        "graphData": null
      },
      {
        "explanation": "Expand using the compound angle formula \\(\\sin(A - B) = \\sin A\\cos B - \\cos A\\sin B\\) with \\(A = \\dfrac{x}{2}\\) and \\(B = \\dfrac{\\pi}{2}\\).",
        "workingOut": "\\(\\sin\\!\\left(\\dfrac{x}{2} - \\dfrac{\\pi}{2}\\right) = \\sin\\dfrac{x}{2}\\cos\\dfrac{\\pi}{2} - \\cos\\dfrac{x}{2}\\sin\\dfrac{\\pi}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the exact values \\(\\cos\\dfrac{\\pi}{2} = 0\\) and \\(\\sin\\dfrac{\\pi}{2} = 1\\), then apply the leading negative sign.",
        "workingOut": "\\(f(x) = -\\left(0 - \\cos\\dfrac{x}{2}\\right) = \\cos\\dfrac{x}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Test the even-function definition \\(f(-x) = f(x)\\), using the fact that cosine is an even function: \\(\\cos(-u) = \\cos u\\).",
        "workingOut": "\\(f(-x) = \\cos\\!\\left(-\\dfrac{x}{2}\\right) = \\cos\\dfrac{x}{2} = f(x)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023-q16b",
    "topicId": "y12a-exam-cra",
    "c": "6E",
    "t": "Applications of integration of trig",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Hence, or otherwise, find the area bounded by the curve $y = f(x) = -\\sin\\!\\left(\\dfrac{1}{2}(x - \\pi)\\right)$ and the $x$-axis in the interval $[-\\pi, pi]$.",
    "opts": [
      "\\(4\\) square units",
      "\\(4\\) square units + 1",
      "\\(\\dfrac{12}{x + 2}\\)",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "From part (a), $f(x) = \\cos\\dfrac{x}{2}$, which is non-negative on $[-\\pi, pi]$. Use the even symmetry to double the integral over $[0, pi]$.",
    "solution": "The correct answer is \\(4\\) square units.",
    "solutionSteps": [
      {
        "explanation": "Use the result of part (a): \\(f(x) = \\cos\\dfrac{x}{2}\\). Check the sign on the interval: for \\(x \\in [-\\pi, pi]\\), the argument \\(\\dfrac{x}{2}\\) lies in \\(\\left[-\\dfrac{\\pi}{2}, dfrac{\\pi}{2}\\right]\\) where cosine is non-negative, so the curve does not dip below the \\(x\\)-axis and the area equals the integral directly.",
        "workingOut": "\\(f(x) = \\cos\\dfrac{x}{2} \\geq 0 \\text{ on } [-\\pi, pi]\\)",
        "graphData": null
      },
      {
        "explanation": "Exploit the even symmetry proven in part (a): the integral over the symmetric interval \\([-\\pi, pi]\\) is twice the integral over \\([0, pi]\\).",
        "workingOut": "\\(\\text{Area} = \\int_{-\\pi}^{\\pi} \\cos\\dfrac{x}{2}\\,dx = 2\\int_0^{\\pi} \\cos\\dfrac{x}{2}\\,dx\\)",
        "graphData": null
      },
      {
        "explanation": "Integrate \\(\\cos\\dfrac{x}{2}\\): the antiderivative of \\(\\cos(ax)\\) is \\(\\dfrac{1}{a}\\sin(ax)\\), and here \\(a = \\dfrac{1}{2}\\) so the factor is \\(2\\).",
        "workingOut": "\\(2\\left[2\\sin\\dfrac{x}{2}\\right]_0^{\\pi}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023-q17a",
    "topicId": "y12a-exam-cra",
    "c": "10A",
    "t": "Probability distributions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "Jason buys a ticket in a lottery, where the first prize is $10,000. Tickets cost $20 each, and the prize distribution is: $P(X=0) = 0.75$, $P(X=20) = m$, $P(X=100) = 0.03$, $P(X=500) = 0.002$, $P(X=5000) = 0.001$, $P(X=10\\,000) = 0.0001$. Find the value of $m$.",
    "opts": [
      "\\(\\dfrac{13}{x + 3}\\)",
      "\\(m = 0.2169\\)",
      "\\(m = 0.2169 + 1\\)",
      "\\(m = 0.4169\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "The probabilities in a discrete distribution must sum to 1.",
    "solution": "The correct answer is \\(m = 0.2169\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cranbrook 2023 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(0.75 + m + 0.03 + 0.002 + 0.001 + 0.0001 = 1\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(0.75 + 0.03 + 0.002 + 0.001 + 0.0001 = 0.7831\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(m = 1 - 0.7831 = 0.2169\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: m = 0.2169. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(m = 0.2169\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023-q17b",
    "topicId": "y12a-exam-cra",
    "c": "10C",
    "t": "Mean and variance of a distribution",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Using the lottery distribution with $m = 0.2169$ (prizes 0, 20, 100, 500, 5000, 10000 with probabilities 0.75, 0.2169, 0.03, 0.002, 0.001, 0.0001) and a ticket price of $20, show that Jason is expected to lose $5.66 every time he plays this lottery.",
    "opts": [
      "\\(\\dfrac{9}{5}\\)",
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "\\(E(X) = 14.338\\), so expected loss \\(= 20 - 14.338 = 5.662 \\approx \\\\)5.66"
    ],
    "a": 3,
    "answer": "3",
    "hint": "Compute $E(X) = \\sum x \\cdot P(X=x)$, then compare with the \\$20 ticket price.",
    "solution": "The correct answer is \\(E(X) = 14.338\\), so expected loss \\(= 20 - 14.338 = 5.662 \\approx \\\\)5.66.",
    "solutionSteps": [
      {
        "explanation": "Write the formula for the expected value of a discrete random variable: multiply each prize value by its probability and sum.",
        "workingOut": "\\(E(X) = \\sum x\\,P(X = x)\\)",
        "graphData": null
      },
      {
        "explanation": "The expected winnings are \\(14.338 per game, but each ticket costs \\)20. The expected loss is the difference between the cost and the expected return.",
        "workingOut": "\\(\\text{Expected loss} = 20 - 14.338 = 5.662\\)",
        "graphData": null
      },
      {
        "explanation": "Round to the nearest cent: Jason expects to lose \\(5.66 per play, as required.\\) Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(\\approx 5.66 \\quad \\blacksquare\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023-q17c",
    "topicId": "y12a-exam-cra",
    "c": "10C",
    "t": "Mean and variance of a distribution",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Find the variance of the lottery prize distribution (prizes 0, 20, 100, 500, 5000, 10000 with probabilities 0.75, 0.2169, 0.03, 0.002, 0.001, 0.0001), given $E(X) = 14.338$.",
    "opts": [
      "\\(\\dfrac{13}{x + 3}\\)",
      "\\(\\text{Var}(X) \\approx 35681.18\\)",
      "\\(\\text{Var}(X) \\approx 35681.18 + 1\\)",
      "\\(\\text{Var}(X) \\approx 45681.18\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Use $\\text{Var}(X) = E(X^2) - [E(X)]^2$.",
    "solution": "The correct answer is \\(\\text{Var}(X) \\approx 35681.18\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cranbrook 2023 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(E(X^2) = \\sum x^2\\,P(X = x)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(E(X^2) = 0^2(0.75) + 20^2(0.2169) + 100^2(0.03) + 500^2(0.002) + 5000^2(0.001) + 10000^2(0.0001)\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(E(X^2) = 86.76 + 300 + 500 + 25000 + 10000 = 35886.76\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\text{Var}(X) \\approx 35681.18. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\text{Var}(X) \\approx 35681.18\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023-q18a",
    "topicId": "y12a-exam-cra",
    "c": "8G",
    "t": "Applications",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "Ben is cooking a pizza. The temperature of the pizza oven is modelled by $T = 175 - 150 \\times (0.9)^{0.2t}$, where $T$ is the temperature of the oven (°C) at a time $t$ minutes since the oven was switched on. What was the initial temperature of the oven?",
    "opts": [
      "\\(25°\\)C",
      "\\(25°\\)C + 1",
      "\\(45°\\)C",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Substitute $t = 0$ into the model.",
    "solution": "The correct answer is \\(25°\\)C.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cranbrook 2023 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(T = 175 - 150 \\times (0.9)^{0.2 \\times 0}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(T = 175 - 150 \\times 1 = 25\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(T_{\\text{initial}} = 25\\,°\\text{C}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(25°\\)C. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(25°\\)C",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023-q18b",
    "topicId": "y12a-exam-cra",
    "c": "9J",
    "t": "Rates of change",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "For the oven model $T = 175 - 150 \\times (0.9)^{0.2t}$, calculate the average rate at which the temperature changes per minute from $t = 25$ to $t = 75$, correct to two decimal places.",
    "opts": [
      "\\(\\approx 1.15\\) °C per minute",
      "\\(\\approx 1.15\\) °C per minute + 1",
      "\\(\\dfrac{12}{x + 2}\\)",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Average rate of change $= \\dfrac{T(75) - T(25)}{75 - 25}$.",
    "solution": "The correct answer is \\(\\approx 1.15\\) °C per minute.",
    "solutionSteps": [
      {
        "explanation": "The average rate of change of \\(T\\) over an interval is the change in temperature divided by the change in time — the gradient of the chord between the two points on the curve.",
        "workingOut": "\\(\\text{Average rate} = \\dfrac{T(75) - T(25)}{75 - 25}\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the model at \\(t = 25\\). Note \\(0.2 \\times 25 = 5\\), so the exponent is 5. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(T(25) = 175 - 150(0.9)^5 = 175 - 150(0.59049) = 86.4265\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute both values into the average rate formula and divide by the 50-minute interval. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(\\dfrac{144.1163 - 86.4265}{50} = \\dfrac{57.6898}{50} = 1.1538\\)",
        "graphData": null
      },
      {
        "explanation": "Round to two decimal places as required. The rate is positive because the oven is heating up. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(\\approx 1.15\\ °\\text{C per minute}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023-q18c",
    "topicId": "y12a-exam-cra",
    "c": "5K",
    "t": "Calculus with other bases",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "For the oven model $T = 175 - 150 \\times (0.9)^{0.2t}$: Ben can place the pizza in the oven when the instantaneous rate of change of temperature is less than or equal to $1°$C per minute. Given that Ben turned the oven on at 10:30 am, find the earliest time that Ben can place the pizza in the oven, correct to the nearest minute.",
    "opts": [
      "\\(-11:25 am (about 55 minutes after switch-on)\\)",
      "\\(11:25 am (about 55 minutes after switch-on)\\)",
      "\\(11:25 am (about 55 minutes after switch-on) + 1\\)",
      "\\(11:45 am (about 55 minutes after switch-on)\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Differentiate using $\\dfrac{d}{dt}a^{kt} = k\\ln a \\cdot a^{kt}$, set $\\dfrac{dT}{dt} \\leq 1$ and solve for $t$ with logarithms.",
    "solution": "The correct answer is \\(11:25 am (about 55 minutes after switch-on)\\).",
    "solutionSteps": [
      {
        "explanation": "Differentiate the model with respect to \\(t\\). For an exponential with base other than \\(e\\), use \\(\\dfrac{d}{dt}a^{kt} = k\\ln a \\cdot a^{kt}\\), applied to \\(a = 0.9\\) and \\(k = 0.2\\).",
        "workingOut": "\\(\\dfrac{dT}{dt} = -150 \\times 0.2\\ln(0.9) \\times (0.9)^{0.2t} = -30\\ln(0.9)\\,(0.9)^{0.2t}\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the constant: \\(\\ln(0.9) \\approx -0.10536\\), so \\(-30\\ln(0.9) \\approx 3.1608\\), which is positive — the oven temperature is always rising, but more and more slowly.",
        "workingOut": "\\(\\dfrac{dT}{dt} \\approx 3.1608\\,(0.9)^{0.2t}\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the inequality for when the heating rate has slowed to at most \\(1°\\)C per minute. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(3.1608\\,(0.9)^{0.2t} \\leq 1 \\implies (0.9)^{0.2t} \\leq 0.31637\\)",
        "graphData": null
      },
      {
        "explanation": "Take natural logarithms of both sides. Because \\(\\ln(0.9)\\) is negative, dividing by it reverses the inequality sign.",
        "workingOut": "\\(0.2t\\, ln(0.9) \\leq \\ln(0.31637) \\implies 0.2t \\geq \\dfrac{-1.15094}{-0.10536} = 10.9239\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for \\(t\\) and round up to the nearest whole minute (rounding down would not yet satisfy the condition).",
        "workingOut": "\\(t \\geq 54.62 \\implies t = 55 \\text{ minutes}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023-q19",
    "topicId": "y12a-exam-cra",
    "c": "12G",
    "t": "Conditional probability",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "A group of students were surveyed on the type of pets they own. The incomplete two-way table shows: Dog & Cat $= A$, Dog & No Cat $= 32$, No Dog & Cat $= 45$, No Dog & No Cat $= 35$. Given that a student owns a dog, the probability that they also own a cat is 60%. Find the probability that a student chosen at random owns both a cat and a dog.",
    "opts": [
      "\\(-\\dfrac{48}{160} = \\dfrac{3}{10}\\)",
      "\\(\\dfrac{48}{160} = \\dfrac{3}{10}\\)",
      "\\(\\frac{160}{48} = \\dfrac{3}{10}\\)",
      "\\(\\frac{1}{160} = \\dfrac{3}{10}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Use $P(\\text{Cat} \\mid \\text{Dog}) = \\dfrac{A}{A + 32} = 0.6$ to find $A$ first.",
    "solution": "The correct answer is \\(\\dfrac{48}{160} = \\dfrac{3}{10}\\).",
    "solutionSteps": [
      {
        "explanation": "Translate the conditional probability statement: given a student owns a dog, the chance they own a cat is 60%. The dog owners number \\(A + 32\\) in total, of whom \\(A\\) own a cat.",
        "workingOut": "\\(P(\\text{Cat} \\mid \\text{Dog}) = \\dfrac{A}{A + 32} = 0.6\\)",
        "graphData": null
      },
      {
        "explanation": "Solve this equation for \\(A\\) by multiplying both sides by \\((A + 32)\\) and collecting the \\(A\\) terms.",
        "workingOut": "\\(A = 0.6(A + 32) = 0.6A + 19.2 \\implies 0.4A = 19.2 \\implies A = 48\\)",
        "graphData": null
      },
      {
        "explanation": "Complete the table and find the total number of students surveyed by adding all four cells. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(48 + 32 + 45 + 35 = 160\\)",
        "graphData": null
      },
      {
        "explanation": "The probability that a randomly chosen student owns both pets is the \"both\" cell divided by the total.",
        "workingOut": "\\(P(\\text{Cat and Dog}) = \\dfrac{48}{160} = \\dfrac{3}{10}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023-q20",
    "topicId": "y12a-exam-cra",
    "c": "8G",
    "t": "Applications",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "The relative level of a noise compared to a reference level is calculated by $R = 20\\log_{10}\\!\\left(\\dfrac{N}{N_0}\\right)$, where $R$ is the relative noise level in decibels (dB), $N$ is the level of a noise and $N_0$ is the maximum noise level permitted. The relative noise level at a construction site when operating machinery was found to be 8 dB higher than the maximum noise level permitted. Show that the level of noise produced by the machinery was approximately 2.5 times greater than the maximum noise level permitted.",
    "opts": [
      "\\(-\\dfrac{N}{N_0} = 10^{0.4} \\approx 2.51 \\approx 2.5\\)",
      "\\(\\dfrac{N}{N_0} = 10^{0.4} \\approx 2.51 \\approx 2.5\\)",
      "\\(\\frac{1}{N_0} = 10^{0.4} \\approx 2.51 \\approx 2.5\\)",
      "\\(\\frac{N_0}{N} = 10^{0.4} \\approx 2.51 \\approx 2.5\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Set $R = 8$ and solve for the ratio $\\dfrac{N}{N_0}$ by converting the logarithmic equation to index form.",
    "solution": "The correct answer is \\(\\dfrac{N}{N_0} = 10^{0.4} \\approx 2.51 \\approx 2.5\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cranbrook 2023 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(8 = 20\\log_{10}\\!\\left(\\dfrac{N}{N_0}\\right)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\log_{10}\\!\\left(\\dfrac{N}{N_0}\\right) = \\dfrac{8}{20} = 0.4\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\dfrac{N}{N_0} = 10^{0.4}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\dfrac{N}{N_0} = 10^{0.4} \\approx 2.51 \\approx 2.5. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\dfrac{N}{N_0} = 10^{0.4} \\approx 2.51 \\approx 2.5\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023-q21",
    "topicId": "y12a-exam-cra",
    "c": "9E",
    "t": "Line of best fit",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Ivy has plotted the income she received each week for the past five weeks: $(1, 200), (2, 100), (3, 300), (4, 300), (5, 400)$, where the first coordinate is the week number $n$ and the second is the amount in dollars. Over the same five weeks, Ivy's expenses, which were originally $200 per week, increase by $20 each week. Write the equation of the least-squares regression line for Ivy's income, and determine the equation of Ivy's expenses.",
    "opts": [
      "Income \\(= 60n + 80\\); Expenses \\(= 20n + 180\\)",
      "The opposite of this statement is true.",
      "This is true only when the function is linear.",
      "This only holds for positive values of x."
    ],
    "a": 0,
    "answer": "0",
    "hint": "For the regression line compute $b = \\dfrac{\\sum xy - n\\bar{x}\\bar{y}}{\\sum x^2 - n\\bar{x}^2}$ and $a = \\bar{y} - b\\bar{x}$. The expenses form an arithmetic (linear) pattern.",
    "solution": "The correct answer is Income \\(= 60n + 80\\); Expenses \\(= 20n + 180\\).",
    "solutionSteps": [
      {
        "explanation": "Compute the means of the week numbers and the income values, which are needed for the least-squares formulas.",
        "workingOut": "\\(\\bar{n} = \\dfrac{1+2+3+4+5}{5} = 3, quad \\bar{y} = \\dfrac{200+100+300+300+400}{5} = 260\\)",
        "graphData": null
      },
      {
        "explanation": "Compute the two sums required for the gradient: the sum of the products \\(\\sum ny\\) and the sum of squares \\(\\sum n^2\\).",
        "workingOut": "\\(\\sum ny = 200 + 200 + 900 + 1200 + 2000 = 4500, quad \\sum n^2 = 1+4+9+16+25 = 55\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the least-squares gradient formula, which measures how income co-varies with the week number. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(b = \\dfrac{\\sum ny - 5\\bar{n}\\bar{y}}{\\sum n^2 - 5\\bar{n}^2} = \\dfrac{4500 - 3900}{55 - 45} = \\dfrac{600}{10} = 60\\)",
        "graphData": null
      },
      {
        "explanation": "Find the intercept using the property that the regression line passes through the mean point \\((\\bar{n}, bar{y})\\).",
        "workingOut": "\\(a = \\bar{y} - b\\bar{n} = 260 - 60(3) = 80 \\implies \\text{Income} = 60n + 80\\)",
        "graphData": null
      },
      {
        "explanation": "Model the expenses: they start at \\\\(200 in week 1 and increase by \\\\)20 each subsequent week, so this is a linear function with gradient 20 passing through \\((1, 200)\\).",
        "workingOut": "\\(E = 200 + 20(n - 1) = 20n + 180\\)",
        "graphData": null
      },
      {
        "explanation": "State both equations, then plot them over the data. The income line \\(y = 60n + 80\\) has \\(y\\)-intercept \\(80\\) and gradient \\(60\\); the expenses line \\(y = 20n + 180\\) has \\(y\\)-intercept \\(180\\) and gradient \\(20\\).",
        "workingOut": "\\(\\text{Income} = 60n + 80, quad \\text{Expenses} = 20n + 180\\)",
        "graphData": null
      },
      {
        "explanation": "Draw both lines neatly over Ivy's five income data points \\((1,200), (2,100), (3,300), (4,300), (5,400)\\). The income regression line (blue) passes through the mean point \\((3, 260)\\); the expenses line (green) starts at \\((1, 200)\\) and rises \\(20 each week.\\).",
        "workingOut": "Income \\(= 60n + 80\\); Expenses \\(= 20n + 180\\)",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 320,
            "boundingbox": [
              -0.5,
              470,
              6,
              -50
            ],
            "boardOptions": {
              "keepaspectratio": false
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[0,0],[6,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-50],[0,470]], {strokeColor:'black'});\nvar pts = [[1,200],[2,100],[3,300],[4,300],[5,400]];\nfor (var i=0;i<pts.length;i++){ board.create('point', pts[i], {name:'', size:2.5, color:'#64748b', fixed:true}); }\nboard.create('functiongraph', [function(x){ return 60*x+80; }, 0, 5.5], {strokeColor:'blue',strokeWidth:2,name:'Income',withLabel:true});\nboard.create('functiongraph', [function(x){ return 20*x+180; }, 0, 5.5], {strokeColor:'green',strokeWidth:2,name:'Expenses',withLabel:true});\nboard.create('text', [5.4, 30, 'n (weeks)'], {fontSize:13});\nboard.create('text', [0.2, 455, 'Amount ($)'], {fontSize:13});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023-q22a",
    "topicId": "y12a-exam-cra",
    "c": "4H",
    "t": "The trapezoidal rule",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "A deflated weather balloon is being inflated. The rate of air flow (volume per unit time) is modelled by $V=10e^{-\\sqrt{t}}$, and the graph shows the flow rates at hourly intervals: $(0,10)$, $(1,3.68)$, $(2,2.43)$, $(3,1.77)$.\n\nUsing three applications of the trapezoidal rule, estimate the volume of air in the balloon at time $t=3$.",
    "opts": [
      "\\(\\(9.0\\) units³\\)",
      "\\(\\(12.0\\) units³\\)",
      "\\(\\(15.0\\) units³\\)",
      "\\(\\(18.0\\) units³\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Volume is the area under the rate curve: $\\displaystyle\\int_0^3 V\\,dt \\approx \\dfrac{h}{2}\\bigl[f_0 + 2f_1 + 2f_2 + f_3\\bigr]$ with $h = 1$.",
    "solution": "The correct answer is \\(\\(12.0\\) units³\\).",
    "solutionSteps": [
      {
        "explanation": "The volume of air is the integral of the flow rate over time, so we estimate \\(\\displaystyle\\int_0^3 V\\,dt\\) numerically. Three applications means three strips on \\([0,3]\\), so the strip width is \\(h=1\\).",
        "workingOut": "\\(\\text{Volume}=\\int_0^3 V\\,dt,\\quad h=\\dfrac{3-0}{3}=1\\)",
        "graphData": null
      },
      {
        "explanation": "Trapezoidal rule for three strips: end ordinates once, interior ordinates twice. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(\\int_0^3 V\\,dt\\approx\\dfrac{h}{2}\\bigl[f_0+2f_1+2f_2+f_3\\bigr]\\)",
        "graphData": null
      },
      {
        "explanation": "So the estimated volume of air in the balloon at \\(t=3\\) is about \\(12.0\\) cubic units. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(\\text{Volume}\\approx 12.0\\text{ units}^3\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 380,
        "height": 300,
        "boundingbox": [
          -0.5,
          11,
          4,
          -1.2
        ],
        "boardOptions": {
          "keepaspectratio": false
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[0,0],[4,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-1.2],[0,11]], {strokeColor:'black'});\nboard.create('functiongraph', [function(t){ return 10*Math.exp(-Math.sqrt(t)); }, 0.0001, 3.6], {strokeColor:'blue',strokeWidth:2});\nvar pts=[[0,10],[1,3.68],[2,2.43],[3,1.77]];\nvar nm=['(0, 10)','(1, 3.68)','(2, 2.43)','(3, 1.77)'];\nvar off=[[8,8],[10,8],[10,8],[10,4]];\nfor(var i=0;i<pts.length;i++){ board.create('point', pts[i], {name:nm[i], size:2.5, color:'red', fixed:true, label:{offset:off[i], fontSize:11}}); }\nboard.create('text', [3.6, 0.4, 't'], {fontSize:14});\nboard.create('text', [0.25, 10.6, 'V'], {fontSize:14});\nboard.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023-q22b",
    "topicId": "y12a-exam-cra",
    "c": "4H",
    "t": "The trapezoidal rule",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "A safety shutoff valve is programmed to be activated before the balloon reaches its maximum volume, after which the balloon will burst. The flow-rate curve $V = 10e^{-\\sqrt{t}}$ is concave up. By referring to the graph, or otherwise, explain why the Trapezoidal rule is a valid method of estimation in this context.",
    "opts": [
      "Because the curve is concave up, each trapezium lies above the curve, so the rule overestimates the true volume. An overestimate triggers the safety valve early — before the true maximum volume is reached — so the balloon will not burst.",
      "The opposite of this statement is true.",
      "This is true only when the function is linear.",
      "This only holds for positive values of x."
    ],
    "a": 0,
    "answer": "0",
    "hint": "Consider whether the trapezoidal rule over- or under-estimates for a concave-up curve, and whether an overestimate is safe here.",
    "solution": "The correct answer is Because the curve is concave up, each trapezium lies above the curve, so the rule overestimates the true volume. An overestimate triggers the safety valve early — before the true maximum volume is reached — so the balloon will not burst..",
    "solutionSteps": [
      {
        "explanation": "Identify the concavity of the flow-rate curve: \\(V = 10e^{-\\sqrt{t}}\\) decreases steeply at first and flattens out, i.e. the curve is concave up on the interval shown.",
        "workingOut": "\\(V = 10e^{-\\sqrt{t}} \\text{ is concave up}\\)",
        "graphData": null
      },
      {
        "explanation": "For a concave-up curve, the straight chord between any two points on the curve lies above the curve, so every trapezium contains the region under the curve.",
        "workingOut": "\\(\\text{chord above curve} \\implies \\text{trapezoidal estimate} > \\text{true integral}\\)",
        "graphData": null
      },
      {
        "explanation": "Interpret in context: the estimated volume is larger than the actual volume, so the shutoff valve (which acts on the estimate) is triggered before the balloon truly reaches its maximum volume. Overestimating is the safe direction here, so the method is valid.",
        "workingOut": "\\(\\text{overestimate} \\implies \\text{valve activates early} \\implies \\text{balloon does not burst} \\quad \\blacksquare\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 380,
        "height": 300,
        "boundingbox": [
          -0.5,
          11,
          4,
          -1.2
        ],
        "boardOptions": {
          "keepaspectratio": false
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[0,0],[4,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-1.2],[0,11]], {strokeColor:'black'});\nboard.create('functiongraph', [function(t){ return 10*Math.exp(-Math.sqrt(t)); }, 0.0001, 3.6], {strokeColor:'blue',strokeWidth:2});\nvar pts=[[0,10],[1,3.68],[2,2.43],[3,1.77]];\nvar nm=['(0, 10)','(1, 3.68)','(2, 2.43)','(3, 1.77)'];\nvar off=[[8,8],[10,8],[10,8],[10,4]];\nfor(var i=0;i<pts.length;i++){ board.create('point', pts[i], {name:nm[i], size:2.5, color:'red', fixed:true, label:{offset:off[i], fontSize:11}}); }\nboard.create('text', [3.6, 0.4, 't'], {fontSize:14});\nboard.create('text', [0.25, 10.6, 'V'], {fontSize:14});\nboard.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023-q23a",
    "topicId": "y12a-exam-cra",
    "c": "3G",
    "t": "Applications of maximisation and minimisation",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "A closed water tank in the shape of a half-cylinder with diameter $2r$ metres and length $h$ metres is made from sheet metal. The surface area of the tank is $A$ m² and the volume is $V$ m³, where $V = \\dfrac{1}{2}\\pi r^2 h$. Show that $A = \\pi r^2 + \\dfrac{2V}{\\pi}\\left(\\dfrac{2 + \\pi}{r}\\right)$.",
    "opts": [
      "\\(\\dfrac{9}{5}\\)",
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "\\(A = \\pi r^2 + \\pi rh + 2rh\\); substituting \\(h = \\dfrac{2V}{\\pi r^2}\\) gives \\(A = \\pi r^2 + \\dfrac{2V}{\\pi}\\left(\\dfrac{2+\\pi}{r}\\right)\\)."
    ],
    "a": 3,
    "answer": "3",
    "hint": "The closed half-cylinder has two semicircular ends, a curved half-cylindrical surface, and a flat rectangular top. Express $h$ in terms of $V$ and substitute.",
    "solution": "The correct answer is \\(A = \\pi r^2 + \\pi rh + 2rh\\); substituting \\(h = \\dfrac{2V}{\\pi r^2}\\) gives \\(A = \\pi r^2 + \\dfrac{2V}{\\pi}\\left(\\dfrac{2+\\pi}{r}\\right)\\)..",
    "solutionSteps": [
      {
        "explanation": "List the surfaces of the closed half-cylinder: two semicircular ends of radius \\(r\\), the curved surface (half of a full cylinder's lateral surface), and the flat rectangular top of width \\(2r\\) and length \\(h\\).",
        "workingOut": "\\(\\text{ends: } 2 \\times \\tfrac{1}{2}\\pi r^2 = \\pi r^2, quad \\text{curved: } \\tfrac{1}{2}(2\\pi r h) = \\pi r h, quad \\text{top: } 2rh\\)",
        "graphData": null
      },
      {
        "explanation": "Rearrange the volume formula \\(V = \\dfrac{1}{2}\\pi r^2 h\\) to express the length \\(h\\) in terms of \\(V\\) and \\(r\\), so \\(A\\) can be written as a function of \\(r\\) alone.",
        "workingOut": "\\(h = \\dfrac{2V}{\\pi r^2}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute this \\(h\\) into the area expression and simplify the powers of \\(r\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(A = \\pi r^2 + r(\\pi+2) \\times \\dfrac{2V}{\\pi r^2} = \\pi r^2 + \\dfrac{2V(\\pi+2)}{\\pi r}\\)",
        "graphData": null
      },
      {
        "explanation": "Write in the required form, which is the same expression with the constant factored as \\(\\dfrac{2V}{\\pi}\\).",
        "workingOut": "\\(A = \\pi r^2 + \\dfrac{2V}{\\pi}\\left(\\dfrac{2+\\pi}{r}\\right) \\quad \\blacksquare\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023-q23b",
    "topicId": "y12a-exam-cra",
    "c": "3G",
    "t": "Applications of maximisation and minimisation",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "For the half-cylinder tank with $A = \\pi r^2 + \\dfrac{2V}{\\pi}\\left(\\dfrac{2 + \\pi}{r}\\right)$ (where $V$ is a fixed constant), show that the amount of sheet metal used is minimised when $r = \\sqrt[3]{\\dfrac{V(2 + \\pi)}{\\pi^2}}$.",
    "opts": [
      "\\(\\dfrac{9}{5}\\)",
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "Setting \\(\\dfrac{dA}{dr} = 0\\) gives \\(r^3 = \\dfrac{V(2+\\pi)}{\\pi^2}\\), and \\(\\dfrac{d^2A}{dr^2} > 0\\) confirms a minimum."
    ],
    "a": 3,
    "answer": "3",
    "hint": "Differentiate $A(r) = \\pi r^2 + \\dfrac{2V(2+\\pi)}{\\pi}r^{-1}$ with respect to $r$, set the derivative to zero, and verify with the second derivative.",
    "solution": "The correct answer is Setting \\(\\dfrac{dA}{dr} = 0\\) gives \\(r^3 = \\dfrac{V(2+\\pi)}{\\pi^2}\\), and \\(\\dfrac{d^2A}{dr^2} > 0\\) confirms a minimum..",
    "solutionSteps": [
      {
        "explanation": "Write \\(A\\) with a negative power of \\(r\\) so it is ready to differentiate. \\(V\\) is constant since the tank must hold a fixed volume.",
        "workingOut": "\\(A(r) = \\pi r^2 + \\dfrac{2V(2+\\pi)}{\\pi}\\,r^{-1}\\)",
        "graphData": null
      },
      {
        "explanation": "Stationary points occur where the derivative is zero. Set the derivative to zero and multiply through by \\(r^2\\) to clear the negative power.",
        "workingOut": "\\(2\\pi r = \\dfrac{2V(2+\\pi)}{\\pi r^2} \\implies 2\\pi r^3 = \\dfrac{2V(2+\\pi)}{\\pi}\\)",
        "graphData": null
      },
      {
        "explanation": "Verify this stationary point is a minimum using the second derivative test: both terms of \\(A''(r)\\) are positive for \\(r > 0\\), so the curve is concave up and the stationary point is a minimum.",
        "workingOut": "\\(\\dfrac{d^2A}{dr^2} = 2\\pi + \\dfrac{4V(2+\\pi)}{\\pi r^3} > 0 \\implies \\text{minimum} \\quad \\blacksquare\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023-q23c",
    "topicId": "y12a-exam-cra",
    "c": "3G",
    "t": "Applications of maximisation and minimisation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Hence find the length $h$ of the half-cylinder tank that minimises the sheet metal, given that the volume of the tank is 10 cubic metres. Answer correct to two decimal places.",
    "opts": [
      "\\(h \\approx 2.12\\) m",
      "\\(h \\approx 2.12\\) m + 1",
      "\\(h \\approx 4.14\\) m",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Substitute $V = 10$ into $r = \\sqrt[3]{\\dfrac{V(2+\\pi)}{\\pi^2}}$, then use $h = \\dfrac{2V}{\\pi r^2}$.",
    "solution": "The correct answer is \\(h \\approx 2.12\\) m.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cranbrook 2023 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(r = \\sqrt[3]{\\dfrac{10(2+\\pi)}{\\pi^2}} = \\sqrt[3]{\\dfrac{51.4159}{9.8696}} = \\sqrt[3]{5.2095}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(r \\approx 1.7335 \\text{ m}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(h = \\dfrac{2 \\times 10}{\\pi (1.7335)^2} = \\dfrac{20}{9.4404}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(h \\approx 2.12\\) m. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(h \\approx 2.12\\) m",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023-q24a",
    "topicId": "y12a-exam-cra",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Michael installs a vertical radio mast on level ground at $M$. Two pegs are installed on the ground at $A$ and $B$ on bearings of 045° and 120° respectively from $M$. The distance from $A$ to $M$ is 100 m and the area of the triangle $AMB$ is 10 432 m². Find the distance between the base of the mast, $M$, and the peg at $B$.",
    "opts": [
      "\\(MB = 216\\) m",
      "\\(MB = 216\\) m + 1",
      "\\(MB = 416\\) m",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "The angle $\\angle AMB$ is the difference of the bearings. Use the area formula $\\text{Area} = \\dfrac{1}{2}ab\\sin C$.",
    "solution": "The correct answer is \\(MB = 216\\) m.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cranbrook 2023 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\angle AMB = 120° - 45° = 75°\\)",
        "graphData": {
          "geometry": {
            "width": 280,
            "points": {
              "T": [
                0,
                4.2
              ],
              "M": [
                0,
                0
              ],
              "A": [
                3,
                2.3
              ],
              "B": [
                3.5,
                -2.2
              ]
            },
            "segments": [
              {
                "from": "M",
                "to": "T"
              },
              {
                "from": "M",
                "to": "A"
              },
              {
                "from": "M",
                "to": "B"
              },
              {
                "from": "T",
                "to": "A"
              },
              {
                "from": "T",
                "to": "B"
              }
            ],
            "sideLabels": [
              {
                "between": [
                  "M",
                  "A"
                ],
                "text": "A (045°)"
              },
              {
                "between": [
                  "M",
                  "B"
                ],
                "text": "B (120°)"
              }
            ]
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\text{Area} = \\dfrac{1}{2} \\times MA \\times MB \\times \\sin(\\angle AMB)\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(10432 = \\dfrac{1}{2} \\times 100 \\times MB \\times \\sin 75°\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(MB = 216\\) m. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(MB = 216\\) m",
        "graphData": null
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "points": {
          "T": [
            0,
            4.2
          ],
          "M": [
            0,
            0
          ],
          "A": [
            3,
            2.3
          ],
          "B": [
            3.5,
            -2.2
          ]
        },
        "segments": [
          {
            "from": "M",
            "to": "T"
          },
          {
            "from": "M",
            "to": "A"
          },
          {
            "from": "M",
            "to": "B"
          },
          {
            "from": "T",
            "to": "A"
          },
          {
            "from": "T",
            "to": "B"
          }
        ],
        "sideLabels": [
          {
            "between": [
              "M",
              "A"
            ],
            "text": "A (045°)"
          },
          {
            "between": [
              "M",
              "B"
            ],
            "text": "B (120°)"
          }
        ]
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023-q24b",
    "topicId": "y12a-exam-cra",
    "c": "6B",
    "t": "Problems with right-angled triangles",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Supporting wires are connected from each peg ($A$ and $B$) to the top of the mast at $T$, where $MA = 100$ m, $MB = 216$ m, and the mast $MT$ is vertical with height $x$ m. By considering triangle $AMT$ and triangle $BMT$, find the height of the mast, given that the total length of the supporting wires is 380 m.",
    "opts": [
      "\\(x \\approx 100.5\\) m",
      "\\(x \\approx 100.5\\) m + 1",
      "\\(\\dfrac{12}{x + 2}\\)",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "By Pythagoras, $TA = \\sqrt{x^2 + 100^2}$ and $TB = \\sqrt{x^2 + 216^2}$. Set $TA + TB = 380$ and solve.",
    "solution": "The correct answer is \\(x \\approx 100.5\\) m.",
    "solutionSteps": [
      {
        "explanation": "The mast is vertical, so triangles \\(AMT\\) and \\(BMT\\) are right-angled at \\(M\\). Apply Pythagoras' theorem in each to express the wire lengths in terms of the mast height \\(x\\).",
        "workingOut": "\\(TA = \\sqrt{x^2 + 100^2}, qquad TB = \\sqrt{x^2 + 216^2}\\)",
        "graphData": null
      },
      {
        "explanation": "Write the constraint that the total wire length is 380 m. Let \\(u = TA\\) and \\(v = TB\\) for cleaner algebra.",
        "workingOut": "\\(u + v = 380, quad u = \\sqrt{x^2 + 10000}, quad v = \\sqrt{x^2 + 46656}\\)",
        "graphData": null
      },
      {
        "explanation": "Subtract the squared expressions: the \\(x^2\\) terms cancel, giving the difference of squares \\(v^2 - u^2\\), which factors as \\((v-u)(v+u)\\).",
        "workingOut": "\\(v^2 - u^2 = 46656 - 10000 = 36656 = (v - u)(v + u)\\)",
        "graphData": null
      },
      {
        "explanation": "Recover the mast height from \\(u^2 = x^2 + 10000\\) and take the positive square root. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(x^2 = 141.7684^2 - 10000 = 10098.3 \\implies x \\approx 100.5 \\text{ m}\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "points": {
          "T": [
            0,
            4.2
          ],
          "M": [
            0,
            0
          ],
          "A": [
            3,
            2.3
          ],
          "B": [
            3.5,
            -2.2
          ]
        },
        "segments": [
          {
            "from": "M",
            "to": "T"
          },
          {
            "from": "M",
            "to": "A"
          },
          {
            "from": "M",
            "to": "B"
          },
          {
            "from": "T",
            "to": "A"
          },
          {
            "from": "T",
            "to": "B"
          }
        ],
        "sideLabels": [
          {
            "between": [
              "M",
              "A"
            ],
            "text": "A (045°)"
          },
          {
            "between": [
              "M",
              "B"
            ],
            "text": "B (120°)"
          }
        ]
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023-q25",
    "topicId": "y12a-exam-cra",
    "c": "5G",
    "t": "Combining transformations",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "Consider the function $f(x) = (x+1)^2$. The following transformations are applied to the graph of $y = f(x)$ in the order shown: (1) horizontal translation right by 4 units; (2) horizontal dilation by a factor of $\\dfrac{4}{3}$; (3) vertical dilation by a factor of $\\dfrac{1}{3}$; (4) vertical translation down by 3 units; (5) reflection in the $x$-axis. Find the equation of the transformed function, and state the vertex and the axis intercepts.",
    "answer": "\\(y = 3 - \\dfrac{3}{16}(x-4)^2\\); vertex \\((4, 3)\\); intercepts \\((0, 0)\\) and \\((8, 0)\\).",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "\\(y = 3 - \\dfrac{3}{16}(x-4)^2\\); vertex \\((4, 3)\\); intercepts \\((0, 0)\\) and \\((8, 0)\\).",
    "solutionSteps": [
      {
        "explanation": "Apply the horizontal translation 4 units right by replacing \\(x\\) with \\(x - 4\\) in the rule, because shifting right by \\(c\\) replaces \\(x \\to x - c\\).",
        "workingOut": "\\(y = ((x-4)+1)^2 = (x-3)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the horizontal dilation by factor \\(\\dfrac{4}{3}\\) by replacing \\(x\\) with \\(x \\div \\dfrac{4}{3} = \\dfrac{3x}{4}\\). Then simplify by factoring out the constant from the bracket.",
        "workingOut": "\\(y = \\left(\\dfrac{3x}{4} - 3\\right)^2 = \\dfrac{9}{16}(x - 4)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the vertical dilation by factor \\(\\dfrac{1}{3}\\) by multiplying the whole rule by \\(\\dfrac{1}{3}\\).",
        "workingOut": "\\(y = \\dfrac{1}{3} \\times \\dfrac{9}{16}(x-4)^2 = \\dfrac{3}{16}(x-4)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Apply the vertical translation 3 units down by subtracting 3, then the reflection in the \\(x\\)-axis by negating the entire rule.",
        "workingOut": "\\(y = -\\left(\\dfrac{3}{16}(x-4)^2 - 3\\right) = 3 - \\dfrac{3}{16}(x-4)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Read off the vertex from the completed-square form: the parabola is concave down with maximum at \\(x = 4\\), \\(y = 3\\).",
        "workingOut": "\\(\\text{Vertex } (4, 3), text{ maximum}\\)",
        "graphData": null
      },
      {
        "explanation": "Find the intercepts. For \\(x\\)-intercepts set \\(y = 0\\); for the \\(y\\)-intercept set \\(x = 0\\). Both calculations confirm the curve passes through the origin.",
        "workingOut": "\\(\\dfrac{3}{16}(x-4)^2 = 3 \\implies (x-4)^2 = 16 \\implies x = 0, 8; \\quad x=0 \\implies y = 3 - 3 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Sketch the final concave-down parabola \\(y = 3 - \\dfrac{3}{16}(x-4)^2\\) with maximum vertex \\((4, 3)\\), passing through the origin \\((0, 0)\\) and the \\(x\\)-intercept \\((8, 0)\\).",
        "workingOut": "\\(\\(y = 3 - \\dfrac{3}{16}(x-4)^2\\); vertex \\((4, 3)\\); intercepts \\((0, 0)\\) and \\((8, 0)\\).\\)",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 300,
            "boundingbox": [
              -1,
              4.5,
              9,
              -4
            ],
            "boardOptions": {
              "keepaspectratio": false
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-1,0],[9,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-4],[0,4.5]], {strokeColor:'black'});\nboard.create('functiongraph', [function(x){ return 3 - (3/16)*Math.pow(x-4,2); }, -1, 9], {strokeColor:'blue',strokeWidth:2});\nboard.create('point', [4,3], {name:'(4, 3)', size:3, color:'red', label:{offset:[8,10]}});\nboard.create('point', [0,0], {name:'(0, 0)', size:3, color:'red', label:{offset:[-12,-12]}});\nboard.create('point', [8,0], {name:'(8, 0)', size:3, color:'red', label:{offset:[10,-10]}});\nboard.create('text', [8.4, 0.5, 'x'], {fontSize:14});\nboard.create('text', [0.3, 4.1, 'y'], {fontSize:14});\nboard.create('text', [-0.4, -0.4, 'O'], {fontSize:14});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "cra2023-q26a",
    "topicId": "y12a-exam-cra",
    "c": "7B",
    "t": "Velocity and acceleration as derivatives",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "A particle is moving along the $x$-axis so that its position, in metres, at time $t$ seconds is given by $x = 2\\ln(t^2 + 3) - t$. Determine the times when the particle is at rest.",
    "opts": [
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "\\(t = 1\\) s and \\(t = 3\\) s",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "The particle is at rest when $v = \\dfrac{dx}{dt} = 0$. Differentiate and solve.",
    "solution": "The correct answer is \\(t = 1\\) s and \\(t = 3\\) s.",
    "solutionSteps": [
      {
        "explanation": "The particle is at rest when its velocity is zero. Differentiate the position function: the derivative of \\(2\\ln(t^2+3)\\) requires the chain rule (derivative of \\(\\ln u\\) is \\(u'/u\\)), and the derivative of \\(-t\\) is \\(-1\\).",
        "workingOut": "\\(v = \\dfrac{dx}{dt} = \\dfrac{2 \\times 2t}{t^2 + 3} - 1 = \\dfrac{4t}{t^2+3} - 1\\)",
        "graphData": null
      },
      {
        "explanation": "Combine into a single fraction over the common denominator \\(t^2 + 3\\) so the equation \\(v = 0\\) reduces to the numerator being zero.",
        "workingOut": "\\(v = \\dfrac{4t - t^2 - 3}{t^2 + 3} = \\dfrac{-(t^2 - 4t + 3)}{t^2+3}\\)",
        "graphData": null
      },
      {
        "explanation": "Set the numerator to zero (the denominator \\(t^2 + 3\\) is never zero) and solve. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\((t-1)(t-3) = 0 \\implies t = 1 \\text{ s or } t = 3 \\text{ s}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023-q26b",
    "topicId": "y12a-exam-cra",
    "c": "7A",
    "t": "Average velocity and speed",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "For the particle with position $x = 2\\ln(t^2 + 3) - t$, find the distance travelled by the particle in the first second. Leave your answer in the form involving $\\ln\\!\\left(\\dfrac{a}{b}\\right)$ with integers $a, b$.",
    "opts": [
      "-Distance \\(= 1 - \\ln\\!\\left(\\dfrac{16}{9}\\right) \\approx 0.42\\) m",
      "Distance \\(= 1 - \\ln\\!\\left(\\dfrac{16}{9}\\right) \\approx 0.42\\) m",
      "Distance \\(= 1 - \\ln\\!\\left(\\frac{1}{9}\\right) \\approx 0.42\\) m",
      "Distance \\(= 1 - \\ln\\!\\left(\\frac{9}{16}\\right) \\approx 0.42\\) m"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Check the sign of $v$ on $(0, 1)$: the particle does not change direction before $t = 1$, so distance $= |x(1) - x(0)|$.",
    "solution": "The correct answer is Distance \\(= 1 - \\ln\\!\\left(\\dfrac{16}{9}\\right) \\approx 0.42\\) m.",
    "solutionSteps": [
      {
        "explanation": "Before integrating or subtracting positions, check whether the particle changes direction during the first second. From part (a), \\(v = \\dfrac{-(t-1)(t-3)}{t^2+3}\\); on \\((0,1)\\) both brackets are negative, so \\(v < 0\\) throughout — no change of direction.",
        "workingOut": "\\(0 < t < 1: \\; (t-1) < 0, \\; (t-3) < 0 \\implies v < 0\\)",
        "graphData": null
      },
      {
        "explanation": "Since the motion is one-directional, the distance is the magnitude of the displacement, \\(|x(1) - x(0)|\\). Evaluate the position at both times.",
        "workingOut": "\\(x(0) = 2\\ln 3, qquad x(1) = 2\\ln 4 - 1\\)",
        "graphData": null
      },
      {
        "explanation": "Compute the displacement and combine the logarithms using \\(2\\ln\\frac{4}{3} = \\ln\\left(\\frac{4}{3}\\right)^2 = \\ln\\frac{16}{9}\\).",
        "workingOut": "\\(x(1) - x(0) = 2\\ln 4 - 1 - 2\\ln 3 = \\ln\\dfrac{16}{9} - 1\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the sign: \\(\\ln\\dfrac{16}{9} \\approx 0.575 < 1\\), so the displacement is negative, consistent with \\(v < 0\\). The distance is its absolute value.",
        "workingOut": "\\(\\text{Distance} = 1 - \\ln\\dfrac{16}{9} \\approx 0.42 \\text{ m}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023-q26c",
    "topicId": "y12a-exam-cra",
    "c": "7B",
    "t": "Velocity and acceleration as derivatives",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "For the particle with position $x = 2\\ln(t^2 + 3) - t$ (for $t \\geq 0$), find the maximum velocity of the particle.",
    "opts": [
      "v_{\\max} = \\dfrac{2\\sqrt{3}}{3} + 1 \\approx 0.15\\) m/s, at \\(t = \\sqrt{3}",
      "v_{\\max} = \\dfrac{2\\sqrt{3}}{3} - 1 \\approx 0.15\\) m/s, at \\(t = \\sqrt{3}",
      "v_{\\max} = \\dfrac{2\\sqrt{3}}{3} - 1 \\approx 0.15\\) m/s, at \\(t = \\sqrt{3} + 1",
      "v_{\\max} = \\dfrac{4\\sqrt{4}}{4} - 1 \\approx 0.15\\) m/s, at \\(t = \\sqrt{4}"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Maximise $v(t) = \\dfrac{4t}{t^2+3} - 1$ by setting the acceleration $\\dfrac{dv}{dt} = 0$.",
    "solution": "The correct answer is v_{\\max} = \\dfrac{2\\sqrt{3}}{3} - 1 \\approx 0.15\\) m/s, at \\(t = \\sqrt{3}.",
    "solutionSteps": [
      {
        "explanation": "The velocity is greatest where its derivative — the acceleration — is zero. Differentiate \\(v = \\dfrac{4t}{t^2+3} - 1\\) using the quotient rule.",
        "workingOut": "\\(a = \\dfrac{dv}{dt} = \\dfrac{4(t^2+3) - 4t(2t)}{(t^2+3)^2} = \\dfrac{12 - 4t^2}{(t^2+3)^2}\\)",
        "graphData": null
      },
      {
        "explanation": "Set the numerator to zero to find the stationary point of the velocity (the denominator is always positive).",
        "workingOut": "\\(4(3 - t^2) = 0 \\implies t = \\sqrt{3} \\;\\; (t \\geq 0)\\)",
        "graphData": null
      },
      {
        "explanation": "Confirm this is a maximum: the acceleration is positive for \\(t < \\sqrt{3}\\) (velocity increasing) and negative for \\(t > \\sqrt{3}\\) (velocity decreasing), so the velocity peaks at \\(t = \\sqrt{3}\\).",
        "workingOut": "\\(a > 0 \\text{ for } t < \\sqrt{3}, quad a < 0 \\text{ for } t > \\sqrt{3} \\implies \\text{maximum}\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute \\(t = \\sqrt{3}\\) into the velocity function and simplify, rationalising the fraction. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(v(\\sqrt{3}) = \\dfrac{4\\sqrt{3}}{(\\sqrt{3})^2 + 3} - 1 = \\dfrac{4\\sqrt{3}}{6} - 1 = \\dfrac{2\\sqrt{3}}{3} - 1\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023-q27a",
    "topicId": "y12a-exam-cra",
    "c": "3B",
    "t": "Stationary points and turning points",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Consider the function $f(x) = 3x\\left(1 - \\dfrac{x}{4}\\right)^3 + 1$. By showing that $f'(x) = 3\\left(1 - \\dfrac{x}{4}\\right)^2(1 - x)$, find any stationary points and determine their nature.",
    "opts": [
      "\\(\\dfrac{9}{5}\\)",
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "Local maximum at \\(\\left(1, \\dfrac{145}{64}\\right)\\); horizontal point of inflection at \\((4, 1)\\)."
    ],
    "a": 3,
    "answer": "3",
    "hint": "Use the product rule with $u = 3x$ and $v = \\left(1 - \\dfrac{x}{4}\\right)^3$, then factor out the common $\\left(1-\\dfrac{x}{4}\\right)^2$.",
    "solution": "The correct answer is Local maximum at \\(\\left(1, \\dfrac{145}{64}\\right)\\); horizontal point of inflection at \\((4, 1)\\)..",
    "solutionSteps": [
      {
        "explanation": "Differentiate using the product rule with \\(u = 3x\\) and \\(v = \\left(1-\\dfrac{x}{4}\\right)^3\\). The chain rule gives \\(v' = 3\\left(1-\\dfrac{x}{4}\\right)^2 \\times \\left(-\\dfrac{1}{4}\\right)\\).",
        "workingOut": "\\(f'(x) = 3\\left(1-\\dfrac{x}{4}\\right)^3 + 3x \\times 3\\left(1-\\dfrac{x}{4}\\right)^2\\left(-\\dfrac{1}{4}\\right)\\)",
        "graphData": null
      },
      {
        "explanation": "Factor out the common factor \\(3\\left(1-\\dfrac{x}{4}\\right)^2\\) and simplify the bracket. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(f'(x) = 3\\left(1-\\dfrac{x}{4}\\right)^2\\left[1 - \\dfrac{x}{4} - \\dfrac{3x}{4}\\right] = 3\\left(1-\\dfrac{x}{4}\\right)^2(1 - x) \\quad \\checkmark\\)",
        "graphData": null
      },
      {
        "explanation": "Find the stationary points by setting \\(f'(x) = 0\\): either the squared factor vanishes or \\((1-x)\\) vanishes.",
        "workingOut": "\\(x = 4 \\;(\\text{double}) \\quad \\text{or} \\quad x = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Classify \\(x = 1\\) with a sign test of \\(f'\\): the squared factor is always non-negative, so the sign follows \\((1-x)\\). For \\(x < 1\\), \\(f' > 0\\); for \\(1 < x < 4\\), \\(f' < 0\\). The gradient changes from positive to negative, so \\(x=1\\) is a local maximum. Evaluate \\(f(1)\\).",
        "workingOut": "\\(f(1) = 3(1)\\left(\\dfrac{3}{4}\\right)^3 + 1 = \\dfrac{81}{64} + 1 = \\dfrac{145}{64} \\implies \\text{local max } \\left(1, dfrac{145}{64}\\right)\\)",
        "graphData": null
      },
      {
        "explanation": "Classify \\(x = 4\\): because the factor \\(\\left(1-\\dfrac{x}{4}\\right)^2\\) is squared, \\(f'\\) does not change sign there (\\(f' < 0\\) on both sides). A stationary point with no sign change is a horizontal point of inflection. Evaluate \\(f(4)\\).",
        "workingOut": "\\(f(4) = 3(4)(0)^3 + 1 = 1 \\implies \\text{horizontal point of inflection } (4, 1)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023-q27b",
    "topicId": "y12a-exam-cra",
    "c": "3E",
    "t": "Systematic curve sketching with the derivative",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "For $f(x) = 3x\\left(1 - \\dfrac{x}{4}\\right)^3 + 1$, explain why the graph of $y = f(x)$ must cross the $x$-axis at least once between $x = 5$ and $x = 6$.",
    "opts": [
      "\\(f(5) = -\\dfrac{15}{64} < 0\\) and \\(f(6) = \\dfrac{9}{4} > 0\\); since \\(f\\) is continuous and changes sign, it must cross the \\(x\\)-axis.",
      "\\(f(5) = \\dfrac{49}{64} > 0\\) and \\(f(6) = \\dfrac{5}{4} > 0\\); since the derivative changes sign, it must cross the \\(x\\)-axis.",
      "\\(f(5) = -\\dfrac{49}{64} < 0\\) and \\(f(6) = -\\dfrac{5}{4} < 0\\); since the second derivative is zero, it must cross the \\(x\\)-axis.",
      "\\(f(5) = \\dfrac{49}{64} > 0\\) and \\(f(6) = -\\dfrac{5}{4} < 0\\); since \\(f\\) is continuous and changes sign, it must cross the \\(x\\)-axis."
    ],
    "a": 3,
    "answer": "3",
    "hint": "Evaluate $f(5)$ and $f(6)$ and apply the sign-change argument for a continuous function.",
    "solution": "The correct answer is \\(f(5) = \\dfrac{49}{64} > 0\\) and \\(f(6) = -\\dfrac{5}{4} < 0\\); since \\(f\\) is continuous and changes sign, it must cross the \\(x\\)-axis.",
    "solutionSteps": [
      {
        "explanation": "Step 1: To show that a curve crosses the \\(x\\)-axis between two points, we must evaluate the function at those points and check for a change in sign.",
        "workingOut": "$$ \\text{We need to find } f(5) \\text{ and } f(6). $$",
        "graphData": null
      },
      {
        "explanation": "Step 2: Substitute \\(x = 5\\) into the given function.",
        "workingOut": "$$ \\begin{aligned} f(5) &= 3(5)\\left(1 - \\dfrac{5}{4}\\right)^3 + 1 \\\\\\\\ &= 15\\left(-\\dfrac{1}{4}\\right)^3 + 1 \\\\\\\\ &= 15\\left(-\\dfrac{1}{64}\\right) + 1 \\\\\\\\ &= -\\dfrac{15}{64} + \\dfrac{64}{64} = \\dfrac{49}{64} \\end{aligned} $$",
        "graphData": null
      },
      {
        "explanation": "Step 3: Substitute \\(x = 6\\) into the given function.",
        "workingOut": "$$ \\begin{aligned} f(6) &= 3(6)\\left(1 - \\dfrac{6}{4}\\right)^3 + 1 \\\\\\\\ &= 18\\left(1 - \\dfrac{3}{2}\\right)^3 + 1 \\\\\\\\ &= 18\\left(-\\dfrac{1}{2}\\right)^3 + 1 \\\\\\\\ &= 18\\left(-\\dfrac{1}{8}\\right) + 1 \\\\\\\\ &= -\\dfrac{9}{4} + \\dfrac{4}{4} = -\\dfrac{5}{4} \\end{aligned} $$",
        "graphData": null
      },
      {
        "explanation": "Step 4: Use the Intermediate Value Theorem. Since polynomials are continuous everywhere and the function values have opposite signs, there must be a root.",
        "workingOut": "$$ \\text{Since } f(x) \\text{ is continuous, and } f(5) > 0, f(6) < 0, \\text{ the graph must cross the } x\\text{-axis between } x=5 \\text{ and } x=6. $$",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023-q27c",
    "topicId": "y12a-exam-cra",
    "c": "3E",
    "t": "Systematic curve sketching with the derivative",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "Sketch the graph of $y = f(x) = 3x\\left(1 - \\dfrac{x}{4}\\right)^3 + 1$ in the interval $[0, 6]$, showing the stationary points, the $y$-intercept and the approximate location of the $x$-intercept.",
    "answer": "Curve starts at \\((0, 1)\\), rises to the local maximum \\(\\left(1, \\dfrac{145}{64}\\right)\\), falls through the horizontal point of inflection \\((4, 1)\\), continues falling and crosses the \\(x\\)-axis between \\(x = 5\\) and \\(x = 6\\), ending at \\(\\left(6, -\\dfrac{5}{4}\\right)\\).",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "Curve starts at \\((0, 1)\\), rises to the local maximum \\(\\left(1, \\dfrac{145}{64}\\right)\\), falls through the horizontal point of inflection \\((4, 1)\\), continues falling and crosses the \\(x\\)-axis between \\(x = 5\\) and \\(x = 6\\), ending at \\(\\left(6, -\\dfrac{5}{4}\\right)\\).",
    "solutionSteps": [
      {
        "explanation": "Mark the stationary points found in part (a): the local maximum at \\(\\left(1, dfrac{145}{64}\\right) \\approx (1, 2.27)\\) and the horizontal point of inflection at \\((4, 1)\\), where the tangent is horizontal but the curve keeps decreasing through it.",
        "workingOut": "\\(\\left(1, tfrac{145}{64}\\right) \\text{ max}, quad (4, 1) \\text{ horizontal POI}\\)",
        "graphData": null
      },
      {
        "explanation": "Mark the approximate \\(x\\)-intercept between \\(x = 5\\) and \\(x = 6\\) (part (b)), and the right endpoint \\(f(6) = -\\dfrac{5}{4}\\).",
        "workingOut": "\\(x\\text{-intercept} \\in (5, 6), quad f(6) = -\\tfrac{5}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "Join the points smoothly: increasing on \\((0,1)\\), decreasing on \\((1, 4)\\), flattening momentarily at \\((4,1)\\), then decreasing through the \\(x\\)-axis to \\((6, -\\tfrac{5}{4})\\).",
        "workingOut": "\\(\\text{smooth curve through } (0,1) \\nearrow (1, 2.27) \\searrow (4,1) \\searrow (6, -1.25)\\)",
        "graphData": null
      },
      {
        "explanation": "Sketch \\(y = 3x\\left(1 - \\dfrac{x}{4}\\right)^3 + 1\\) on \\([0, 6]\\): start at \\((0,1)\\), rise to the local maximum \\(\\left(1, tfrac{145}{64}\\right)\\), fall through the horizontal point of inflection \\((4, 1)\\), then cross the \\(x\\)-axis between \\(5\\) and \\(6\\), ending at \\((6, -\\tfrac{5}{4})\\).",
        "workingOut": "\\(Curve starts at \\((0, 1)\\), rises to the local maximum \\(\\left(1, \\dfrac{145}{64}\\right)\\), falls through the horizontal point of inflection \\((4, 1)\\), continues falling and crosses the \\(x\\)-axis between \\(x = 5\\) and \\(x = 6\\), ending at \\(\\left(6, -\\dfrac{5}{4}\\right)\\).\\)",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 300,
            "boundingbox": [
              -0.7,
              3,
              6.7,
              -2
            ],
            "boardOptions": {
              "keepaspectratio": false
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-0.7,0],[6.7,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-2],[0,3]], {strokeColor:'black'});\nboard.create('functiongraph', [function(x){ return 3*x*Math.pow(1 - x/4, 3) + 1; }, 0, 6], {strokeColor:'blue',strokeWidth:2});\nboard.create('point', [0,1], {name:'(0, 1)', size:3, color:'red', label:{offset:[-14,8]}});\nboard.create('point', [1,2.266], {name:'(1, 145/64)', size:3, color:'red', label:{offset:[6,10]}});\nboard.create('point', [4,1], {name:'(4, 1)', size:3, color:'red', label:{offset:[8,12]}});\nboard.create('point', [6,-1.25], {name:'(6, -5/4)', size:3, color:'red', label:{offset:[6,-8]}});\nboard.create('text', [6.55, 0.4, 'x'], {fontSize:14});\nboard.create('text', [0.25, 2.8, 'y'], {fontSize:14});\nboard.create('text', [-0.35, -0.35, 'O'], {fontSize:14});\nboard.unsuspendUpdate();"
          }
        }
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "cra2023-q28a",
    "topicId": "y12a-exam-cra",
    "c": "10B",
    "t": "Continuous distributions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "A continuous random variable $X$ has probability density function $f(x) = e^{-\\frac{1}{2}x}$ for $0 \\leq x \\leq \\ln 4$, and $f(x) = 0$ otherwise. Verify that $f(x)$ is a probability density function.",
    "opts": [
      "\\(\\dfrac{9}{5}\\)",
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "\\(f(x) \\geq 0\\) everywhere, and \\(\\displaystyle\\int_0^{\\ln 4} e^{-x/2}\\,dx = 1\\), so \\(f\\) is a valid pdf."
    ],
    "a": 3,
    "answer": "3",
    "hint": "Check both conditions: $f(x) \\geq 0$ on its domain, and the total integral equals 1. Note $e^{-\\frac{1}{2}\\ln 4} = \\dfrac{1}{2}$.",
    "solution": "The correct answer is \\(f(x) \\geq 0\\) everywhere, and \\(\\displaystyle\\int_0^{\\ln 4} e^{-x/2}\\,dx = 1\\), so \\(f\\) is a valid pdf..",
    "solutionSteps": [
      {
        "explanation": "State the two conditions a pdf must satisfy: it must be non-negative everywhere, and its total integral over the domain must equal 1.",
        "workingOut": "\\(f(x) \\geq 0 \\;\\; \\text{and} \\;\\; \\int_{0}^{\\ln 4} f(x)\\,dx = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Check non-negativity: the exponential function is positive for every real input, so \\(e^{-x/2} > 0\\) on \\([0, ln 4]\\).",
        "workingOut": "\\(e^{-x/2} > 0 \\quad \\checkmark\\)",
        "graphData": null
      },
      {
        "explanation": "Integrate: the antiderivative of \\(e^{-x/2}\\) is \\(-2e^{-x/2}\\) (divide by the coefficient \\(-\\tfrac{1}{2}\\) of \\(x\\)).",
        "workingOut": "\\(\\int_0^{\\ln 4} e^{-x/2}\\,dx = \\left[-2e^{-x/2}\\right]_0^{\\ln 4}\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate at the limits, simplifying \\(e^{-\\frac{1}{2}\\ln 4} = e^{\\ln 4^{-1/2}} = 4^{-1/2} = \\dfrac{1}{2}\\).",
        "workingOut": "\\(= -2 \\times \\dfrac{1}{2} - (-2 \\times 1) = -1 + 2 = 1 \\quad \\checkmark\\)",
        "graphData": null
      },
      {
        "explanation": "Both conditions are satisfied, so \\(f\\) is a valid probability density function. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(f \\text{ is a pdf} \\quad \\blacksquare\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023-q28b",
    "topicId": "y12a-exam-cra",
    "c": "10B",
    "t": "Continuous distributions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "For the pdf $f(x) = e^{-\\frac{1}{2}x}$ on $0 \\leq x \\leq \\ln 4$, find the cumulative distribution function $F(x)$ of $X$ for $-\\infty < x < \\infty$.",
    "opts": [
      "\\(\\dfrac{9}{5}\\)",
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "\\(F(x) = 0\\) for \\(x < 0\\); \\(F(x) = 2 - 2e^{-x/2}\\) for \\(0 \\leq x \\leq \\ln 4\\); \\(F(x) = 1\\) for \\(x > \\ln 4\\)."
    ],
    "a": 3,
    "answer": "3",
    "hint": "$F(x) = \\displaystyle\\int_0^x f(t)\\,dt$ on the support; it is 0 before the support and 1 after.",
    "solution": "The correct answer is \\(F(x) = 0\\) for \\(x < 0\\); \\(F(x) = 2 - 2e^{-x/2}\\) for \\(0 \\leq x \\leq \\ln 4\\); \\(F(x) = 1\\) for \\(x > \\ln 4\\)..",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cranbrook 2023 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(F(x) = 0 \\text{ for } x < 0\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(F(x) = \\int_0^x e^{-t/2}\\,dt = \\left[-2e^{-t/2}\\right]_0^x = 2 - 2e^{-x/2}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(F(x) = 1 \\text{ for } x > \\ln 4\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(F(x) = 0\\) for \\(x < 0\\); \\(F(x) = 2 - 2e^{-x/2}\\) for \\(0 \\leq x \\leq \\ln 4\\); \\(F(x) = 1\\) for \\(x > \\ln 4\\).. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(F(x) = 0\\) for \\(x < 0\\); \\(F(x) = 2 - 2e^{-x/2}\\) for \\(0 \\leq x \\leq \\ln 4\\); \\(F(x) = 1\\) for \\(x > \\ln 4\\).",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023-q28c",
    "topicId": "y12a-exam-cra",
    "c": "10B",
    "t": "Continuous distributions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "For the distribution with CDF $F(x) = 2 - 2e^{-x/2}$ on $0 \\leq x \\leq \\ln 4$, find in simplest exact form the median of $X$.",
    "opts": [
      "\\(-m = 2\\ln\\!\\left(\\dfrac{4}{3}\\right) = \\ln\\!\\left(\\dfrac{16}{9}\\right)\\)",
      "\\(m = 2\\ln\\!\\left(\\dfrac{4}{3}\\right) = \\ln\\!\\left(\\dfrac{16}{9}\\right)\\)",
      "\\(m = 2\\ln\\!\\left(\\frac{1}{3}\\right) = \\ln\\!\\left(\\dfrac{16}{9}\\right)\\)",
      "\\(m = 2\\ln\\!\\left(\\frac{3}{4}\\right) = \\ln\\!\\left(\\dfrac{16}{9}\\right)\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "The median $m$ satisfies $F(m) = \\dfrac{1}{2}$.",
    "solution": "The correct answer is \\(m = 2\\ln\\!\\left(\\dfrac{4}{3}\\right) = \\ln\\!\\left(\\dfrac{16}{9}\\right)\\).",
    "solutionSteps": [
      {
        "explanation": "The median is the value \\(m\\) where half the probability lies below: \\(F(m) = \\dfrac{1}{2}\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(2 - 2e^{-m/2} = \\dfrac{1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Take natural logarithms of both sides and solve for \\(m\\), using \\(-\\ln\\frac{3}{4} = \\ln\\frac{4}{3}\\).",
        "workingOut": "\\(-\\dfrac{m}{2} = \\ln\\dfrac{3}{4} \\implies m = 2\\ln\\dfrac{4}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify to a single logarithm using the power law, and check the median lies inside the support \\([0, ln 4]\\): \\(\\ln\\frac{16}{9} \\approx 0.575 < \\ln 4 \\approx 1.386\\) ✓.",
        "workingOut": "\\(m = \\ln\\dfrac{16}{9}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023-q29a",
    "topicId": "y12a-exam-cra",
    "c": "2I",
    "t": "Trigonometric graphs",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "The diagram shows the graphs of $y = 2\\cos x$ and $y = \\cot x$ for $0 \\leq x \\leq 2\\pi$. Write down the periods of each of the functions $y = 2\\cos(x)$ and $y = \\cot(x)$.",
    "opts": [
      "\\(\\dfrac{9}{5}\\)",
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "Period of \\(2\\cos x\\) is \\(2\\pi\\); period of \\(\\cot x\\) is \\(\\pi\\)."
    ],
    "a": 3,
    "answer": "3",
    "hint": "Vertical dilation does not change the period. Cotangent repeats every $\\pi$, like tangent.",
    "solution": "The correct answer is Period of \\(2\\cos x\\) is \\(2\\pi\\); period of \\(\\cot x\\) is \\(\\pi\\)..",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cranbrook 2023 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\text{Period of } 2\\cos x = 2\\pi\\)",
        "graphData": {
          "jsxGraph": {
            "width": 420,
            "height": 320,
            "boundingbox": [
              -0.5,
              2.6,
              6.9,
              -2.6
            ],
            "boardOptions": {
              "keepaspectratio": false
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-0.4,0],[6.8,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-2.6],[0,2.6]], {strokeColor:'black'});\nvar PI=Math.PI;\nboard.create('functiongraph', [function(x){ return 2*Math.cos(x); }, 0, 2*PI], {strokeColor:'#1d4ed8',strokeWidth:2});\nvar cot=function(x){ return Math.cos(x)/Math.sin(x); };\nboard.create('functiongraph', [cot, 0.12, PI-0.05], {strokeColor:'#15803d',strokeWidth:2});\nboard.create('functiongraph', [cot, PI+0.05, 2*PI-0.12], {strokeColor:'#15803d',strokeWidth:2});\nvar marks=[[PI/2,'π/2'],[PI,'π'],[3*PI/2,'3π/2'],[2*PI,'2π']];\nfor(var i=0;i<marks.length;i++){ board.create('text',[marks[i][0]-0.12,-0.35,marks[i][1]],{fontSize:11}); }\nboard.create('text', [2.0, 2.3, 'y = 2cos x'], {fontSize:12, strokeColor:'#1d4ed8'});\nboard.create('text', [3.4, 2.3, 'y = cot x'], {fontSize:12, strokeColor:'#15803d'});\nboard.create('text', [0.22, 2.4, 'y'], {fontSize:13});\nboard.create('text', [6.6, 0.35, 'x'], {fontSize:13});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\text{Period of } \\cot x = \\pi\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "Period of \\(2\\cos x\\) is \\(2\\pi\\); period of \\(\\cot x\\) is \\(\\pi\\).",
        "graphData": null
      },
      {
        "explanation": "Final answer: Period of \\(2\\cos x\\) is \\(2\\pi\\); period of \\(\\cot x\\) is \\(\\pi\\).. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "Period of \\(2\\cos x\\) is \\(2\\pi\\); period of \\(\\cot x\\) is \\(\\pi\\).",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 420,
        "height": 320,
        "boundingbox": [
          -0.5,
          2.6,
          6.9,
          -2.6
        ],
        "boardOptions": {
          "keepaspectratio": false
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-0.4,0],[6.8,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-2.6],[0,2.6]], {strokeColor:'black'});\nvar PI=Math.PI;\nboard.create('functiongraph', [function(x){ return 2*Math.cos(x); }, 0, 2*PI], {strokeColor:'#1d4ed8',strokeWidth:2});\nvar cot=function(x){ return Math.cos(x)/Math.sin(x); };\nboard.create('functiongraph', [cot, 0.12, PI-0.05], {strokeColor:'#15803d',strokeWidth:2});\nboard.create('functiongraph', [cot, PI+0.05, 2*PI-0.12], {strokeColor:'#15803d',strokeWidth:2});\nvar marks=[[PI/2,'π/2'],[PI,'π'],[3*PI/2,'3π/2'],[2*PI,'2π']];\nfor(var i=0;i<marks.length;i++){ board.create('text',[marks[i][0]-0.12,-0.35,marks[i][1]],{fontSize:11}); }\nboard.create('text', [2.0, 2.3, 'y = 2cos x'], {fontSize:12, strokeColor:'#1d4ed8'});\nboard.create('text', [3.4, 2.3, 'y = cot x'], {fontSize:12, strokeColor:'#15803d'});\nboard.create('text', [0.22, 2.4, 'y'], {fontSize:13});\nboard.create('text', [6.6, 0.35, 'x'], {fontSize:13});\nboard.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023-q29b",
    "topicId": "y12a-exam-cra",
    "c": "11B",
    "t": "Solving trig equations",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Show that the $x$-coordinates of the points of intersection of $y = 2\\cos x$ and $y = \\cot x$ are the solutions of the equation $\\cos x\\,(2\\sin x - 1) = 0$ for $0 \\leq x \\leq 2\\pi$, then solve this equation.",
    "opts": [
      "\\(-x = \\dfrac{\\pi}{6}, \\dfrac{\\pi}{2}, \\dfrac{5\\pi}{6}, \\dfrac{3\\pi}{2}\\)",
      "\\(x = \\dfrac{\\pi}{6}, \\dfrac{\\pi}{2}, \\dfrac{5\\pi}{6}, \\dfrac{3\\pi}{2}\\)",
      "\\(x = \\frac{1}{6}, \\dfrac{\\pi}{2}, \\dfrac{5\\pi}{6}, \\dfrac{3\\pi}{2}\\)",
      "\\(x = \\frac{6}{\\pi}, \\dfrac{\\pi}{2}, \\dfrac{5\\pi}{6}, \\dfrac{3\\pi}{2}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Set $2\\cos x = \\dfrac{\\cos x}{\\sin x}$, multiply both sides by $\\sin x$, and bring everything to one side before factoring.",
    "solution": "The correct answer is \\(x = \\dfrac{\\pi}{6}, \\dfrac{\\pi}{2}, \\dfrac{5\\pi}{6}, \\dfrac{3\\pi}{2}\\).",
    "solutionSteps": [
      {
        "explanation": "At a point of intersection the two \\(y\\)-values are equal. Write \\(\\cot x\\) in terms of sine and cosine.",
        "workingOut": "\\(2\\cos x = \\dfrac{\\cos x}{\\sin x}\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply both sides by \\(\\sin x\\) to clear the fraction (noting \\(\\sin x \\neq 0\\) where \\(\\cot x\\) is defined, so no solutions are lost).",
        "workingOut": "\\(2\\cos x\\sin x = \\cos x\\)",
        "graphData": null
      },
      {
        "explanation": "Bring everything to one side and factor out the common factor \\(\\cos x\\) — do not divide by \\(\\cos x\\), as that would lose solutions.",
        "workingOut": "\\(2\\cos x\\sin x - \\cos x = 0 \\implies \\cos x\\,(2\\sin x - 1) = 0 \\quad \\checkmark\\)",
        "graphData": null
      },
      {
        "explanation": "Solve \\(\\sin x = \\dfrac{1}{2}\\) on \\([0, 2\\pi]\\): sine is positive in the first and second quadrants with related angle \\(\\dfrac{\\pi}{6}\\).",
        "workingOut": "\\(\\sin x = \\dfrac{1}{2} \\implies x = \\dfrac{\\pi}{6},\\ \\dfrac{5\\pi}{6}\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 420,
        "height": 320,
        "boundingbox": [
          -0.5,
          2.6,
          6.9,
          -2.6
        ],
        "boardOptions": {
          "keepaspectratio": false
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-0.4,0],[6.8,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-2.6],[0,2.6]], {strokeColor:'black'});\nvar PI=Math.PI;\nboard.create('functiongraph', [function(x){ return 2*Math.cos(x); }, 0, 2*PI], {strokeColor:'#1d4ed8',strokeWidth:2});\nvar cot=function(x){ return Math.cos(x)/Math.sin(x); };\nboard.create('functiongraph', [cot, 0.12, PI-0.05], {strokeColor:'#15803d',strokeWidth:2});\nboard.create('functiongraph', [cot, PI+0.05, 2*PI-0.12], {strokeColor:'#15803d',strokeWidth:2});\nvar marks=[[PI/2,'π/2'],[PI,'π'],[3*PI/2,'3π/2'],[2*PI,'2π']];\nfor(var i=0;i<marks.length;i++){ board.create('text',[marks[i][0]-0.12,-0.35,marks[i][1]],{fontSize:11}); }\nboard.create('text', [2.0, 2.3, 'y = 2cos x'], {fontSize:12, strokeColor:'#1d4ed8'});\nboard.create('text', [3.4, 2.3, 'y = cot x'], {fontSize:12, strokeColor:'#15803d'});\nboard.create('text', [0.22, 2.4, 'y'], {fontSize:13});\nboard.create('text', [6.6, 0.35, 'x'], {fontSize:13});\nboard.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023-q29c",
    "topicId": "y12a-exam-cra",
    "c": "6E",
    "t": "Applications of integration of trig",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Find in simplest exact form the total area of the bounded region enclosed by the curves $y = 2\\cos x$ and $y = \\cot x$ for $0 < x < \\pi$.",
    "opts": [
      "\\(\\dfrac{9}{5}\\)",
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "\\(2 - \\ln 4\\) square units (i.e. \\(2 - 2\\ln 2\\))"
    ],
    "a": 3,
    "answer": "3",
    "hint": "The curves intersect at $x = \\dfrac{\\pi}{6}, dfrac{\\pi}{2}, dfrac{5\\pi}{6}$. Determine which curve is on top in each strip, integrate $2\\cos x - \\cot x$ accordingly. Note $\\int \\cot x\\,dx = \\ln|\\sin x|$.",
    "solution": "The correct answer is \\(2 - \\ln 4\\) square units (i.e. \\(2 - 2\\ln 2\\)).",
    "solutionSteps": [
      {
        "explanation": "Identify the intersection points inside \\((0, pi)\\) from part (b): \\(x = \\dfrac{\\pi}{6}, dfrac{\\pi}{2}, dfrac{5\\pi}{6}\\). These split the bounded region into two strips. Test a point in each strip to see which curve is on top: at \\(x = \\dfrac{\\pi}{3}\\), \\(2\\cos x = 1 > \\cot x \\approx 0.58\\); at \\(x = \\dfrac{2\\pi}{3}\\), \\(\\cot x \\approx -0.58 > 2\\cos x = -1\\).",
        "workingOut": "\\(\\left(\\tfrac{\\pi}{6}, tfrac{\\pi}{2}\\right): 2\\cos x \\text{ on top}; \\quad \\left(\\tfrac{\\pi}{2}, tfrac{5\\pi}{6}\\right): \\cot x \\text{ on top}\\)",
        "graphData": null
      },
      {
        "explanation": "Set up the first integral (top minus bottom) and find the antiderivatives: \\(\\int 2\\cos x\\,dx = 2\\sin x\\) and \\(\\int \\cot x\\,dx = \\ln|\\sin x|\\).",
        "workingOut": "\\(A_1 = \\int_{\\pi/6}^{\\pi/2} (2\\cos x - \\cot x)\\,dx = \\Bigl[2\\sin x - \\ln|\\sin x|\\Bigr]_{\\pi/6}^{\\pi/2}\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate \\(A_1\\) at the limits, using \\(\\sin\\dfrac{\\pi}{2} = 1\\), \\(\\sin\\dfrac{\\pi}{6} = \\dfrac{1}{2}\\), \\(\\ln 1 = 0\\) and \\(-\\ln\\dfrac{1}{2} = \\ln 2\\).",
        "workingOut": "\\(A_1 = (2 - 0) - \\left(1 - \\ln\\tfrac{1}{2}\\right) = 2 - 1 - \\ln 2 = 1 - \\ln 2\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 420,
        "height": 320,
        "boundingbox": [
          -0.5,
          2.6,
          6.9,
          -2.6
        ],
        "boardOptions": {
          "keepaspectratio": false
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-0.4,0],[6.8,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-2.6],[0,2.6]], {strokeColor:'black'});\nvar PI=Math.PI;\nboard.create('functiongraph', [function(x){ return 2*Math.cos(x); }, 0, 2*PI], {strokeColor:'#1d4ed8',strokeWidth:2});\nvar cot=function(x){ return Math.cos(x)/Math.sin(x); };\nboard.create('functiongraph', [cot, 0.12, PI-0.05], {strokeColor:'#15803d',strokeWidth:2});\nboard.create('functiongraph', [cot, PI+0.05, 2*PI-0.12], {strokeColor:'#15803d',strokeWidth:2});\nvar marks=[[PI/2,'π/2'],[PI,'π'],[3*PI/2,'3π/2'],[2*PI,'2π']];\nfor(var i=0;i<marks.length;i++){ board.create('text',[marks[i][0]-0.12,-0.35,marks[i][1]],{fontSize:11}); }\nboard.create('text', [2.0, 2.3, 'y = 2cos x'], {fontSize:12, strokeColor:'#1d4ed8'});\nboard.create('text', [3.4, 2.3, 'y = cot x'], {fontSize:12, strokeColor:'#15803d'});\nboard.create('text', [0.22, 2.4, 'y'], {fontSize:13});\nboard.create('text', [6.6, 0.35, 'x'], {fontSize:13});\nboard.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023-q30a",
    "topicId": "y12a-exam-cra",
    "c": "10B",
    "t": "Continuous distributions",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "The time taken, $t$ minutes, for a machine to produce car parts is modelled by a continuous random variable with pdf $f(t) = k(t-1)^2$ for $1 \\leq t \\leq 2$, $f(t) = k\\left(2 - \\dfrac{t}{2}\\right)$ for $2 \\leq t \\leq 4$, and $f(t) = 0$ otherwise. Show that the value of $k$ is $\\dfrac{3}{4}$.",
    "opts": [
      "\\(\\dfrac{9}{5}\\)",
      "\\(\\dfrac{8}{4}\\)",
      "\\(\\dfrac{7}{3}\\)",
      "\\(\\dfrac{k}{3} + k = \\dfrac{4k}{3} = 1\\) gives \\(k = \\dfrac{3}{4}\\)."
    ],
    "a": 3,
    "answer": "3",
    "hint": "The total probability must equal 1: integrate both pieces and add.",
    "solution": "The correct answer is \\(\\dfrac{k}{3} + k = \\dfrac{4k}{3} = 1\\) gives \\(k = \\dfrac{3}{4}\\)..",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for Cranbrook 2023 Trial Exam: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\int_1^2 k(t-1)^2\\,dt + \\int_2^4 k\\left(2 - \\dfrac{t}{2}\\right)dt = 1\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(k\\left[\\dfrac{(t-1)^3}{3}\\right]_1^2 = k\\left(\\dfrac{1}{3} - 0\\right) = \\dfrac{k}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(k\\left[2t - \\dfrac{t^2}{4}\\right]_2^4 = k\\bigl[(8 - 4) - (4 - 1)\\bigr] = k(4 - 3) = k\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: \\(\\dfrac{k}{3} + k = \\dfrac{4k}{3} = 1\\) gives \\(k = \\dfrac{3}{4}\\).. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(\\dfrac{k}{3} + k = \\dfrac{4k}{3} = 1\\) gives \\(k = \\dfrac{3}{4}\\).",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023-q30b",
    "topicId": "y12a-exam-cra",
    "c": "10B",
    "t": "Continuous distributions",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "For the production-time distribution with $k = \\dfrac{3}{4}$, let $F(t)$ be the cumulative distribution function, where $F(2.16) = 0.3652$. Find the least amount of time taken to produce 88% of the parts.",
    "opts": [
      "\\(t = 3.2\\) minutes",
      "\\(t = 3.2\\) minutes + 1",
      "\\(t = 4.4\\) minutes",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "For $2 \\leq t \\leq 4$, build $F(t) = F(2) + \\displaystyle\\int_2^t \\dfrac{3}{4}\\left(2 - \\dfrac{s}{2}\\right)ds$ and solve $F(t) = 0.88$.",
    "solution": "The correct answer is \\(t = 3.2\\) minutes.",
    "solutionSteps": [
      {
        "explanation": "First check 88% falls in the second piece: \\(F(2) = \\dfrac{k}{3} = \\dfrac{1}{4} = 0.25 < 0.88\\), so the answer lies in \\(2 \\leq t \\leq 4\\). Build the CDF there by adding the accumulated probability up to 2 and the integral from 2 to \\(t\\).",
        "workingOut": "\\(F(t) = \\dfrac{1}{4} + \\int_2^t \\dfrac{3}{4}\\left(2 - \\dfrac{s}{2}\\right)ds\\)",
        "graphData": null
      },
      {
        "explanation": "Set \\(F(t) = 0.88\\) (88% of parts produced) and rearrange into a standard quadratic. Multiply through by \\(\\dfrac{16}{3}\\) to clear fractions.",
        "workingOut": "\\(\\dfrac{3t}{2} - \\dfrac{3t^2}{16} - 2 = 0.88 \\implies t^2 - 8t + 15.36 = 0\\)",
        "graphData": null
      },
      {
        "explanation": "Solve with the quadratic formula. The discriminant is \\(64 - 4(15.36) = 2.56\\) and \\(\\sqrt{2.56} = 1.6\\).",
        "workingOut": "\\(t = \\dfrac{8 \\pm 1.6}{2} = 4.8 \\text{ or } 3.2\\)",
        "graphData": null
      },
      {
        "explanation": "Reject \\(t = 4.8\\) since it lies outside the support \\([2, 4]\\). Verify: \\(F(3.2) = 4.8 - 1.92 - 2 = 0.88\\) ✓.",
        "workingOut": "\\(t = 3.2 \\text{ minutes}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023-q31",
    "topicId": "y12a-exam-cra",
    "c": "9G",
    "t": "The chain rule",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "A heater converts electrical power, measured in watts, into heat such that the heat produced is given by $h(x) = (f(x))^2$. The heater is plugged into a faulty socket which outputs $x = g(t)$ watts at time $t$ seconds. The power output at time $t = 1$ is 3 watts and is increasing at a rate of 4 watts per second. By considering $h'(x)$ and using the fact that $\\dfrac{d}{dt}f(g(t)) = f'(g(t)) \\times g'(t)$, find the rate of change of the heat produced at time $t = 1$, given that $f(3) = 5$ and $f'(3) = 2$.",
    "opts": [
      "\\(80\\) watts per second",
      "\\(80\\) watts per second + 1",
      "\\(\\dfrac{12}{x + 2}\\)",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "The heat as a function of time is $H(t) = (f(g(t)))^2$. Differentiate with the chain rule: $H'(t) = 2f(g(t)) \\cdot f'(g(t)) \\cdot g'(t)$.",
    "solution": "The correct answer is \\(80\\) watts per second.",
    "solutionSteps": [
      {
        "explanation": "Express the heat as a function of time by composing the three functions: the socket outputs \\(x = g(t)\\), and the heat is \\(h(x) = (f(x))^2\\), so \\(H(t) = \\bigl(f(g(t))\\bigr)^2\\).",
        "workingOut": "\\(H(t) = \\bigl(f(g(t))\\bigr)^2\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate using the chain rule twice: first the outer square (bring down the 2), then the inner composite \\(f(g(t))\\) using the given fact \\(\\dfrac{d}{dt}f(g(t)) = f'(g(t))\\,g'(t)\\).",
        "workingOut": "\\(H'(t) = 2f(g(t)) \\times f'(g(t)) \\times g'(t)\\)",
        "graphData": null
      },
      {
        "explanation": "Collect the values at \\(t = 1\\): the power output is \\(g(1) = 3\\) watts, its rate of increase is \\(g'(1) = 4\\) watts/second, and we are given \\(f(3) = 5\\) and \\(f'(3) = 2\\).",
        "workingOut": "g(1) = 3, quad g'(1) = 4, quad f(3) = 5, quad f'(3) = 2",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  }
];
