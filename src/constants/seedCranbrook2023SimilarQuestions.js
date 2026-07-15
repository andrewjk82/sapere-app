export const CRANBROOK_2023_SIMILAR_QUESTIONS = [
  {
    "id": "cra2023s-mc1",
    "topicId": "y11a-3B",
    "c": "3B",
    "t": "Functions, relations, and graphs",
    "source": "Cranbrook 2023 Trial Q1",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Which of the following sets of ordered pairs represents a one-to-many relationship?\n\n(A) $(2,1), (2,3), (3,4), (4,5)$\n\n(B) $(2,1), (3,1), (4,2), (5,3)$\n\n(C) $(2,2), (3,3), (4,4), (5,5)$\n\n(D) $(2,1), (2,3), (3,4), (4,4)$",
    "a": "0",
    "opts": [
      "$(2,1), (2,3), (3,4), (4,5)$",
      "$(2,1), (3,1), (4,2), (5,3)$",
      "$(2,2), (3,3), (4,4), (5,5)$",
      "$(2,1), (2,3), (3,4), (4,4)$"
    ],
    "h": "One-to-many means one $x$-value maps to more than one $y$-value, while every $y$-value comes from only one $x$-value.",
    "s": "In option (A), $x=2$ maps to both $y=1$ and $y=3$, and the $y$-values $1, 3, 4, 5$ are all distinct, so the relation is one-to-many. In option (D), $x=2$ maps to two $y$-values BUT $y=4$ comes from both $x=3$ and $x=4$, making it many-to-many. Option (B) is many-to-one ($y=1$ from $x=2$ and $x=3$) and option (C) is one-to-one.",
    "solutionSteps": [
      {
        "explanation": "Recall the definition of a one-to-many relation: at least one \\(x\\)-value pairs with more than one \\(y\\)-value, but each \\(y\\)-value pairs with only one \\(x\\)-value. Both directions must be checked.",
        "workingOut": "\\text{one-to-many: one } x \\to \\text{many } y, text{ each } y \\leftarrow \\text{one } x"
      },
      {
        "explanation": "Check option (A): \\(x = 2\\) maps to both \\(y = 1\\) and \\(y = 3\\), and the \\(y\\)-values \\(1, 3, 4, 5\\) are all distinct, so no \\(y\\) is repeated.",
        "workingOut": "x=2 \\to y=1, 3 \\quad \\checkmark \\qquad y\\text{-values all distinct} \\quad \\checkmark"
      },
      {
        "explanation": "Eliminate the others: (D) has \\(y=4\\) coming from two \\(x\\)-values, so it is many-to-many; (B) is many-to-one; (C) is one-to-one.",
        "workingOut": "(D): y=4 \\leftarrow x=3, 4 \\implies \\text{many-to-many} \\; \\times"
      },
      {
        "explanation": "Only option (A) satisfies the one-to-many definition.",
        "workingOut": "\\text{Answer: (A)}"
      }
    ]
  },
  {
    "id": "cra2023s-mc2",
    "topicId": "y12a-9D",
    "c": "9D",
    "t": "Bivariate data",
    "source": "Cranbrook 2023 Trial Q2",
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
        "script": "board.suspendUpdate();\nboard.create('arrow', [[0,0],[12,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,0],[0,11]], {strokeColor:'black'});\nvar pts = [[1.5,2],[2.5,8],[4.5,7],[4.5,9],[5,6.5],[5,5],[6.5,4.5],[5.5,3],[9,9.5],[9,8.5],[11,6]];\nfor (var i=0;i<pts.length;i++){ board.create('point', pts[i], {name:'', size:3, color:'#475569', fixed:true}); }\nboard.create('point', [4,6.5], {name:'Q', size:3, color:'#475569', fixed:true, label:{offset:[-14,2], fontSize:15}});\nboard.create('point', [7,4.5], {name:'P', size:3, color:'#475569', fixed:true, label:{offset:[10,2], fontSize:15}});\nboard.create('text', [4.5, -1.1, 'weight (kg)'], {fontSize:13});\nboard.create('text', [0.2, 10.6, 'height (cm)'], {fontSize:13});\nboard.unsuspendUpdate();"
      }
    },
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "The height and weight of a group of athletes is shown on a scatterplot, with weight (kg) on the horizontal axis and height (cm) on the vertical axis. Athlete P is plotted below and to the right of Athlete Q. Which of the following statements is true?",
    "a": "2",
    "opts": [
      "Athlete P is taller and weighs more than Athlete Q.",
      "Athlete P is taller and weighs less than Athlete Q.",
      "Athlete P is shorter and weighs more than Athlete Q.",
      "Athlete P is shorter and weighs less than Athlete Q."
    ],
    "h": "Read each axis separately: the vertical axis is height, the horizontal axis is weight.",
    "s": "Athlete P is lower on the plot, so P is shorter (height is on the vertical axis). Athlete P is further right, so P weighs more (weight is on the horizontal axis). Therefore P is shorter and weighs more than Q.",
    "solutionSteps": [
      {
        "explanation": "Identify the axes: vertical is height (cm), horizontal is weight (kg). Comparing two plotted points means comparing vertical positions for height and horizontal positions for weight.",
        "workingOut": "\\text{vertical} = \\text{height}, quad \\text{horizontal} = \\text{weight}"
      },
      {
        "explanation": "Athlete P is plotted below Athlete Q, so P has the smaller vertical coordinate: P is shorter.",
        "workingOut": "P \\text{ below } Q \\implies \\text{height}_P < \\text{height}_Q"
      },
      {
        "explanation": "Athlete P is plotted to the right of Athlete Q, so P has the larger horizontal coordinate: P weighs more.",
        "workingOut": "P \\text{ right of } Q \\implies \\text{weight}_P > \\text{weight}_Q"
      },
      {
        "explanation": "Combine both observations: P is shorter and weighs more than Q, which is option (C).",
        "workingOut": "\\text{Answer: (C)}"
      }
    ]
  },
  {
    "id": "cra2023s-mc3",
    "topicId": "y12a-9C",
    "c": "9C",
    "t": "Quartiles and interquartile range",
    "source": "Cranbrook 2023 Trial Q3",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "In a science examination, 25% of students scored less than 50 marks, 75% of students scored less than 90 marks and the highest mark was 100. Given that the distribution is symmetrical with no outliers, what is the lowest mark and the median of this data set?",
    "a": "0",
    "opts": [
      "Lowest mark $= 40$, Median $= 70$",
      "Lowest mark $= 40$, Median $= 65$",
      "Lowest mark $= 45$, Median $= 70$",
      "Lowest mark $= 45$, Median $= 65$"
    ],
    "h": "For a symmetrical distribution the median is midway between $Q_1$ and $Q_3$, and the minimum is as far below the median as the maximum is above it.",
    "s": "$Q_1 = 50$ and $Q_3 = 90$. By symmetry, Median $= \\dfrac{50 + 90}{2} = 70$. The maximum 100 is 30 above the median, so the minimum is 30 below: $70 - 30 = 40$.",
    "solutionSteps": [
      {
        "explanation": "Translate the percentages into quartiles: 25% below 50 means \\(Q_1 = 50\\); 75% below 90 means \\(Q_3 = 90\\).",
        "workingOut": "Q_1 = 50, quad Q_3 = 90, quad \\text{max} = 100"
      },
      {
        "explanation": "For a symmetrical distribution the median is halfway between the quartiles, so average them.",
        "workingOut": "\\text{Median} = \\dfrac{50 + 90}{2} = 70"
      },
      {
        "explanation": "Symmetry means the extremes are equidistant from the median. The maximum is \\(100 - 70 = 30\\) above, so the minimum is 30 below.",
        "workingOut": "\\text{Lowest mark} = 70 - 30 = 40"
      },
      {
        "explanation": "State the answer: lowest 40, median 70, which is option (A).",
        "workingOut": "\\text{Lowest} = 40, \\; \\text{Median} = 70"
      }
    ]
  },
  {
    "id": "cra2023s-mc4",
    "topicId": "y12a-1F",
    "c": "1F",
    "t": "Summing an arithmetic series",
    "source": "Cranbrook 2023 Trial Q4",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "In an arithmetic series, the sum of the first three terms is 24 and the sum of the first four terms is 40. What is the sum of the first five terms of this series?",
    "a": "2",
    "opts": [
      "$40$",
      "$56$",
      "$60$",
      "$64$"
    ],
    "h": "Use $S_n = \\dfrac{n}{2}(2a + (n-1)d)$ to set up two simultaneous equations in $a$ and $d$.",
    "s": "$S_3 = 3a + 3d = 24$ gives $a + d = 8$. $S_4 = 4a + 6d = 40$ gives $2a + 3d = 20$. Solving: $d = 4$, $a = 4$. Then $S_5 = 5a + 10d = 20 + 40 = 60$.",
    "solutionSteps": [
      {
        "explanation": "Apply the arithmetic series sum formula \\(S_n = \\dfrac{n}{2}(2a + (n-1)d)\\) with \\(n = 3\\) and the given \\(S_3 = 24\\).",
        "workingOut": "S_3 = 3a + 3d = 24 \\implies a + d = 8"
      },
      {
        "explanation": "Apply the formula with \\(n = 4\\) and \\(S_4 = 40\\) to get a second equation.",
        "workingOut": "S_4 = 4a + 6d = 40 \\implies 2a + 3d = 20"
      },
      {
        "explanation": "Solve simultaneously: substitute \\(a = 8 - d\\) into the second equation.",
        "workingOut": "2(8 - d) + 3d = 20 \\implies 16 + d = 20 \\implies d = 4, \\; a = 4"
      },
      {
        "explanation": "Compute the sum of the first five terms.",
        "workingOut": "S_5 = \\dfrac{5}{2}(2 \\times 4 + 4 \\times 4) = \\dfrac{5}{2}(24) = 60"
      }
    ]
  },
  {
    "id": "cra2023s-mc5",
    "topicId": "y11a-5F",
    "c": "5F",
    "t": "Composite functions",
    "source": "Cranbrook 2023 Trial Q5",
    "type": "multiple_choice",
    "difficulty": "hard",
    "q": "Let $f(x) = \\sqrt{x}$ and $g(x) = \\dfrac{1}{x-2}$. What is the domain and range valid for both $f(g(x))$ and $g(f(x))$?",
    "a": "3",
    "opts": [
      "Domain: $[-2, 2]$, Range $(-\\infty, infty)$",
      "Domain: $(0, infty)$, Range $(-\\infty, 0) \\cup (0, infty)$",
      "Domain: $[0, infty)$, Range $(0, infty)$",
      "Domain: $(2, infty)$, Range $(0, infty)$"
    ],
    "h": "Find the domain and range of each composite separately, then take the values common to both.",
    "s": "$f(g(x)) = \\sqrt{\\dfrac{1}{x-2}}$ needs $\\dfrac{1}{x-2} > 0$, i.e. $x > 2$: domain $(2, infty)$, range $(0, infty)$.\n\n$g(f(x)) = \\dfrac{1}{\\sqrt{x}-2}$ needs $x \\geq 0$ and $\\sqrt{x} \\neq 2$: domain $[0, infty)\\setminus{4}$, range $(-\\infty,-\\frac{1}{2}] \\cup (0, infty)$.\n\nCommon domain: $(2, infty)$. Common range: $(0, infty)$.",
    "solutionSteps": [
      {
        "explanation": "Form \\(f(g(x)) = \\sqrt{\\dfrac{1}{x-2}}\\). The square root needs a non-negative argument and the fraction cannot equal zero, so \\(\\dfrac{1}{x-2} > 0\\), which requires \\(x > 2\\).",
        "workingOut": "f(g(x)) = \\sqrt{\\dfrac{1}{x-2}}, quad \\text{domain: } (2, infty)"
      },
      {
        "explanation": "As \\(x\\) ranges over \\((2, infty)\\), the inner value \\(\\dfrac{1}{x-2}\\) covers \\((0, infty)\\), and so does its square root.",
        "workingOut": "\\text{range of } f(g(x)) = (0, infty)"
      },
      {
        "explanation": "Form \\(g(f(x)) = \\dfrac{1}{\\sqrt{x}-2}\\), which requires \\(x \\geq 0\\) and \\(\\sqrt{x} \\neq 2\\), i.e. \\(x \\neq 4\\). Its range: \\(\\sqrt{x} - 2\\) covers \\([-2, infty)\\setminus{0}\\), so the reciprocal covers \\((-\\infty, -\\tfrac{1}{2}] \\cup (0, infty)\\).",
        "workingOut": "g(f(x)) = \\dfrac{1}{\\sqrt{x}-2}, quad \\text{domain: } [0, infty)\\setminus{4}"
      },
      {
        "explanation": "Intersect the two domains and the two ranges to find what is valid for both composites.",
        "workingOut": "\\text{Domain: } (2, infty), quad \\text{Range: } (0, infty) \\implies \\text{(D)}"
      }
    ]
  },
  {
    "id": "cra2023s-mc6",
    "topicId": "y12a-1H",
    "c": "1H",
    "t": "The limiting sum of a geometric series",
    "source": "Cranbrook 2023 Trial Q6",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "The limiting sum of a geometric series is $\\dfrac{16}{7}$ and the sum of its first three terms is $2$. What is the common ratio of this series?",
    "a": "2",
    "opts": [
      "$1.50$",
      "$1.25$",
      "$0.50$",
      "$0.25$"
    ],
    "h": "Use $S_3 = S_\\infty(1 - r^3)$.",
    "s": "$\\dfrac{S_3}{S_\\infty} = 1 - r^3$, so $1 - r^3 = 2 \\div \\dfrac{16}{7} = \\dfrac{7}{8}$. Then $r^3 = \\dfrac{1}{8}$ and $r = \\dfrac{1}{2} = 0.50$.",
    "solutionSteps": [
      {
        "explanation": "Divide the partial sum formula \\(S_3 = \\dfrac{a(1-r^3)}{1-r}\\) by the limiting sum \\(S_\\infty = \\dfrac{a}{1-r}\\) to eliminate the first term \\(a\\).",
        "workingOut": "\\dfrac{S_3}{S_\\infty} = 1 - r^3"
      },
      {
        "explanation": "Substitute the given values \\(S_3 = 2\\) and \\(S_\\infty = \\dfrac{16}{7}\\).",
        "workingOut": "1 - r^3 = 2 \\times \\dfrac{7}{16} = \\dfrac{7}{8}"
      },
      {
        "explanation": "Solve for \\(r^3\\) and take the cube root.",
        "workingOut": "r^3 = \\dfrac{1}{8} \\implies r = \\dfrac{1}{2} = 0.50"
      },
      {
        "explanation": "Verify the limiting sum exists: \\(|0.5| < 1\\) ✓. The answer is (C).",
        "workingOut": "|r| < 1 \\quad \\checkmark"
      }
    ]
  },
  {
    "id": "cra2023s-mc7",
    "topicId": "y11a-12F",
    "c": "12F",
    "t": "Probability tree diagrams",
    "source": "Cranbrook 2023 Trial Q7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "In a bag of $n$ coloured marbles, exactly 5 are blue. Two marbles are selected at random, without replacement. The probability that both marbles are blue is $\\dfrac{5}{33}$. Which quadratic equation could be used to find the value of $n$?",
    "a": "1",
    "opts": [
      "$n^2 + n + 132 = 0$",
      "$n^2 - n - 132 = 0$",
      "$n^2 + n - 132 = 0$",
      "$n^2 - n + 132 = 0$"
    ],
    "h": "P(both blue) without replacement is $\\dfrac{5}{n} \\times \\dfrac{4}{n-1}$.",
    "s": "$\\dfrac{5}{n} \\cdot \\dfrac{4}{n-1} = \\dfrac{5}{33}$, so $\\dfrac{20}{n(n-1)} = \\dfrac{5}{33}$. Cross-multiplying: $n(n-1) = \\dfrac{20 \\times 33}{5} = 132$, giving $n^2 - n - 132 = 0$.",
    "solutionSteps": [
      {
        "explanation": "Write the probability of two blue marbles without replacement using the multiplication rule: \\(\\dfrac{5}{n}\\) for the first draw, then \\(\\dfrac{4}{n-1}\\) for the second.",
        "workingOut": "P(\\text{both blue}) = \\dfrac{5}{n} \\times \\dfrac{4}{n-1} = \\dfrac{20}{n(n-1)}"
      },
      {
        "explanation": "Set the expression equal to the given probability.",
        "workingOut": "\\dfrac{20}{n(n-1)} = \\dfrac{5}{33}"
      },
      {
        "explanation": "Cross-multiply, using \\(\\dfrac{20}{5} = 4\\), so \\(n(n-1) = 4 \\times 33 = 132\\).",
        "workingOut": "n(n-1) = 132"
      },
      {
        "explanation": "Expand and rearrange into standard quadratic form.",
        "workingOut": "n^2 - n - 132 = 0 \\implies \\text{(B)}"
      }
    ]
  },
  {
    "id": "cra2023s-mc8",
    "topicId": "y12a-7D",
    "c": "7D",
    "t": "Simple harmonic motion",
    "source": "Cranbrook 2023 Trial Q8",
    "type": "multiple_choice",
    "difficulty": "hard",
    "q": "A particle is moving in a straight line such that its displacement $x$ metres at time $t$ seconds is given by $x = k\\cos(at + b)$, where $a$, $b$ and $k$ are constants. The particle is stationary when $t = \\dfrac{\\pi}{12}, dfrac{4\\pi}{12}, dfrac{7\\pi}{12}, ldots$ The initial acceleration of the particle is $8\\ \\text{ms}^{-2}$. What could be the values of $a$, $b$ and $k$?",
    "a": "3",
    "opts": [
      "$a = 2, b = -\\dfrac{\\pi}{3}, k = -1$",
      "$a = 4, b = \\dfrac{2\\pi}{3}, k = -1$",
      "$a = 4, b = -\\dfrac{\\pi}{3}, k = 1$",
      "$a = 4, b = -\\dfrac{\\pi}{3}, k = -1$"
    ],
    "h": "Stationary times are $\\dfrac{\\pi}{a}$ apart. Then test the initial acceleration $\\ddot{x}(0) = -ka^2\\cos b$ against $8$.",
    "s": "Stationary times are spaced $\\dfrac{4\\pi}{12} - \\dfrac{\\pi}{12} = \\dfrac{\\pi}{4}$ apart, so $\\dfrac{\\pi}{a} = \\dfrac{\\pi}{4}$ gives $a = 4$ (eliminating option A). Acceleration: $\\ddot{x}(0) = -16k\\cos b = 8$. Testing (D): $-16(-1)\\cos\\!\\left(-\\dfrac{\\pi}{3}\\right) = 16 \\times \\dfrac{1}{2} = 8$ ✓.",
    "solutionSteps": [
      {
        "explanation": "The velocity \\(\\dot{x} = -ka\\sin(at+b)\\) vanishes every half-period, i.e. at intervals of \\(\\dfrac{\\pi}{a}\\). Use the spacing of the stationary times.",
        "workingOut": "\\dfrac{4\\pi}{12} - \\dfrac{\\pi}{12} = \\dfrac{\\pi}{4} = \\dfrac{\\pi}{a} \\implies a = 4"
      },
      {
        "explanation": "This eliminates option (A). Differentiate twice for the acceleration and apply the initial condition.",
        "workingOut": "\\ddot{x}(0) = -ka^2\\cos b = -16k\\cos b = 8"
      },
      {
        "explanation": "Test option (D) with \\(b = -\\dfrac{\\pi}{3}\\), \\(k = -1\\), using \\(\\cos\\!\\left(-\\dfrac{\\pi}{3}\\right) = \\dfrac{1}{2}\\).",
        "workingOut": "-16(-1) \\times \\dfrac{1}{2} = 8 \\quad \\checkmark"
      },
      {
        "explanation": "Check a stationary time fits: \\(\\dot{x} = 0\\) requires \\(4t + b = n\\pi\\); with \\(b = -\\dfrac{\\pi}{3}\\) and \\(n = 0\\): \\(t = \\dfrac{\\pi}{12}\\) ✓. Option (C) gives \\(\\ddot{x}(0) = -8\\) (wrong sign) and (B) gives \\(-8\\) as well. The answer is (D).",
        "workingOut": "4t - \\dfrac{\\pi}{3} = 0 \\implies t = \\dfrac{\\pi}{12} \\quad \\checkmark \\implies \\text{(D)}"
      }
    ]
  },
  {
    "id": "cra2023s-mc9",
    "topicId": "y11a-11B",
    "c": "11B",
    "t": "Solving trig equations",
    "source": "Cranbrook 2023 Trial Q9",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "Consider the equation $\\left(\\sin\\theta - \\dfrac{1}{2}\\right)\\left(\\tan\\theta - 1\\right) = 0$. How many solutions are there in the interval $0 \\leq \\theta \\leq \\pi$?",
    "a": "1",
    "opts": [
      "$4$",
      "$3$",
      "$2$",
      "$1$"
    ],
    "h": "Use the null factor law: solve $\\sin\\theta = \\dfrac{1}{2}$ and $\\tan\\theta = 1$ separately on $[0, pi]$.",
    "s": "$\\sin\\theta = \\dfrac{1}{2}$ gives $\\theta = \\dfrac{\\pi}{6}, dfrac{5\\pi}{6}$ (two solutions). $\\tan\\theta = 1$ gives $\\theta = \\dfrac{\\pi}{4}$ only ($\\dfrac{5\\pi}{4}$ is outside $[0, pi]$). Total: 3 solutions.",
    "solutionSteps": [
      {
        "explanation": "Apply the null factor law to split the product into two separate equations.",
        "workingOut": "\\sin\\theta = \\dfrac{1}{2} \\quad \\text{or} \\quad \\tan\\theta = 1"
      },
      {
        "explanation": "Solve \\(\\sin\\theta = \\dfrac{1}{2}\\) on \\([0, pi]\\): sine is positive in the first and second quadrants with related angle \\(\\dfrac{\\pi}{6}\\).",
        "workingOut": "\\theta = \\dfrac{\\pi}{6}, \\; \\dfrac{5\\pi}{6}"
      },
      {
        "explanation": "Solve \\(\\tan\\theta = 1\\) on \\([0, pi]\\): the first-quadrant solution is \\(\\dfrac{\\pi}{4}\\); the next, \\(\\dfrac{5\\pi}{4}\\), lies outside the interval, and tangent is negative in the second quadrant.",
        "workingOut": "\\theta = \\dfrac{\\pi}{4} \\text{ only}"
      },
      {
        "explanation": "Count the distinct solutions: \\(\\dfrac{\\pi}{6}, dfrac{\\pi}{4}, dfrac{5\\pi}{6}\\) — three in total, option (B).",
        "workingOut": "3 \\text{ solutions} \\implies \\text{(B)}"
      }
    ]
  },
  {
    "id": "cra2023s-mc10",
    "topicId": "y12a-4C",
    "c": "4C",
    "t": "The definite integral and its properties",
    "source": "Cranbrook 2023 Trial Q10",
    "graphData": {
      "jsxGraph": {
        "width": 420,
        "height": 320,
        "boundingbox": [
          -5,
          4.5,
          5,
          -4.5
        ],
        "boardOptions": {
          "keepaspectratio": false
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-5,0],[5,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-4.5],[0,4.5]], {strokeColor:'black'});\nvar f = function(x){ return 0.12*Math.pow(x,4) - 1.2*x*x + 1.4; };\nvar g = function(x){ return -0.09*Math.pow(x,3) + 0.7*x; };\nboard.create('functiongraph', [f, -4.2, 4.2], {strokeColor:'#1d4ed8',strokeWidth:2});\nboard.create('functiongraph', [g, -4.4, 4.4], {strokeColor:'#15803d',strokeWidth:2});\nfor (var k=1;k<=3;k++){ board.create('text',[k,0.15,''+k],{fontSize:11}); board.create('text',[-k,0.15,'-'+k],{fontSize:11}); }\nboard.create('text', [-2.3, -1.1, 'P'], {fontSize:15});\nboard.create('text', [-0.7, 0.7, 'Q'], {fontSize:15});\nboard.create('text', [2.1, -1.4, 'R'], {fontSize:15});\nboard.create('text', [3.9, 3.2, 'y = f(x)'], {fontSize:12});\nboard.create('text', [3.6, -2.6, 'y = g(x)'], {fontSize:12});\nboard.create('text', [0.25, 4.1, 'y'], {fontSize:13});\nboard.create('text', [4.6, 0.4, 'x'], {fontSize:13});\nboard.unsuspendUpdate();"
      }
    },
    "type": "multiple_choice",
    "difficulty": "hard",
    "q": "The graphs of an even function $f(x)$ and an odd function $g(x)$ are shown on the same axes. Let $P = \\displaystyle\\int_{-1}^{-3} f(x)\\,dx$, $Q = \\displaystyle\\int_{-1}^{0} g(x)\\,dx$ and $R = \\displaystyle\\int_{1}^{3} \\bigl(f(x) - g(x)\\bigr)\\,dx$. Which of the following expressions equals $\\displaystyle\\int_{0}^{3} g(x)\\,dx$?",
    "a": "3",
    "opts": [
      "$P + Q + R$",
      "$P - Q + R$",
      "$-P + Q - R$",
      "$-P - Q - R$"
    ],
    "h": "Use $f$ even ($\\int_{-b}^{-a} f = \\int_a^b f$), $g$ odd ($\\int_{-a}^{0} g = -\\int_0^a g$), and reversal of limits.",
    "s": "$P = -\\int_{-3}^{-1} f\\,dx = -\\int_1^3 f\\,dx$ (even), so $\\int_1^3 f\\,dx = -P$. $Q = -\\int_0^1 g\\,dx$ (odd), so $\\int_0^1 g\\,dx = -Q$. From $R = \\int_1^3 f - \\int_1^3 g$: $\\int_1^3 g\\,dx = -P - R$. Hence $\\int_0^3 g\\,dx = -Q + (-P - R) = -P - Q - R$.",
    "solutionSteps": [
      {
        "explanation": "Handle \\(P\\): reverse the backwards limits (changing the sign), then use the even-function symmetry \\(\\int_{-3}^{-1} f\\,dx = \\int_{1}^{3} f\\,dx\\).",
        "workingOut": "P = -\\int_{-3}^{-1} f\\,dx = -\\int_{1}^{3} f\\,dx \\implies \\int_1^3 f\\,dx = -P"
      },
      {
        "explanation": "Handle \\(Q\\) with the odd-function property: the integral over \\([-1, 0]\\) is the negative of the integral over \\([0, 1]\\).",
        "workingOut": "Q = -\\int_0^1 g\\,dx \\implies \\int_0^1 g\\,dx = -Q"
      },
      {
        "explanation": "Split \\(R\\) by linearity and solve for \\(\\int_1^3 g\\,dx\\).",
        "workingOut": "R = -P - \\int_1^3 g\\,dx \\implies \\int_1^3 g\\,dx = -P - R"
      },
      {
        "explanation": "Combine with the addition-of-intervals property.",
        "workingOut": "\\int_0^3 g\\,dx = (-Q) + (-P - R) = -P - Q - R \\implies \\text{(D)}"
      }
    ]
  },
  {
    "id": "cra2023s-q11",
    "topicId": "y12a-9B",
    "c": "9B",
    "t": "Grouped data and histograms",
    "source": "Cranbrook 2023 Trial Q11",
    "graphData": {
      "jsxGraph": {
        "width": 440,
        "height": 320,
        "boundingbox": [
          -0.6,
          145,
          7,
          -40
        ],
        "boardOptions": {
          "keepaspectratio": false
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[0,0],[7,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,0],[0,135]], {strokeColor:'black'});\nboard.create('arrow', [[6.6,0],[6.6,135]], {strokeColor:'black'});\nvar freq = [120,95,60,40,25,10];\nvar labels = ['Slow Svc','Wrong','Cold','Rude','Billing','Other'];\nfor (var i=0;i<freq.length;i++){ var xc=i+0.6; board.create('polygon', [[xc-0.32,0],[xc+0.32,0],[xc+0.32,freq[i]],[xc-0.32,freq[i]]], {fillColor:'#94a3b8', fillOpacity:0.7, borders:{strokeColor:'#475569'}, vertices:{visible:false}, fixed:true}); board.create('text', [xc-0.3, -11, labels[i]], {fontSize:9}); }\nvar cum=0, total=350, prev=null;\nfor (var j=0;j<freq.length;j++){ cum+=freq[j]; var y=(cum/total)*130; var xp=j+0.6; var p=board.create('point',[xp,y],{name:'',size:2,color:'#1e293b',fixed:true}); if(prev){ board.create('segment',[prev,p],{strokeColor:'#1e293b',strokeWidth:1.5}); } prev=p; }\nfor (var t=0;t<=100;t+=20){ board.create('text',[6.7,(t/100)*130-3,t+'%'],{fontSize:9}); }\nboard.create('text', [-0.5, 134, 'Frequency'], {fontSize:11});\nboard.unsuspendUpdate();"
      }
    },
    "type": "short_answer",
    "difficulty": "easy",
    "q": "A café records the type of customer complaints over a period of time. The frequencies shown in the Pareto chart are: Slow Service 120, Wrong Order 95, Cold Food 60, Rude Staff 40, Billing Error 25, Other 10. What percentage of complaints were due to \"Wrong Order\" or \"Cold Food\"? Answer to the nearest whole percent.",
    "a": "$44\\%$",
    "opts": [],
    "h": "Add the two relevant frequencies and divide by the total of all frequencies.",
    "s": "Total $= 120 + 95 + 60 + 40 + 25 + 10 = 350$. Wrong Order + Cold Food $= 95 + 60 = 155$. Percentage $= \\dfrac{155}{350} \\times 100\\% \\approx 44\\%$.",
    "solutionSteps": [
      {
        "explanation": "Find the total number of complaints by summing all six frequencies.",
        "workingOut": "120 + 95 + 60 + 40 + 25 + 10 = 350"
      },
      {
        "explanation": "Add the frequencies of the two categories in question.",
        "workingOut": "95 + 60 = 155"
      },
      {
        "explanation": "Express as a percentage of the total.",
        "workingOut": "\\dfrac{155}{350} \\times 100\\% = 44.28\\ldots\\%"
      },
      {
        "explanation": "Round to the nearest whole percent.",
        "workingOut": "\\approx 44\\%"
      }
    ]
  },
  {
    "id": "cra2023s-q12",
    "topicId": "y11a-9A",
    "c": "9A",
    "t": "Tangents and the derivative",
    "source": "Cranbrook 2023 Trial Q12",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "Find the equation of the normal to the curve $y = x^3 + x$ at the point $(1, 2)$.",
    "a": "$y = \\dfrac{9 - x}{4}$ (equivalently $x + 4y - 9 = 0$)",
    "opts": [],
    "h": "The normal is perpendicular to the tangent: its gradient is the negative reciprocal of $\\dfrac{dy}{dx}$ at the point.",
    "s": "$\\dfrac{dy}{dx} = 3x^2 + 1$. At $x = 1$: gradient of tangent $= 4$. Gradient of normal $= -\\dfrac{1}{4}$. Equation: $y - 2 = -\\dfrac{1}{4}(x - 1)$, i.e. $x + 4y - 9 = 0$.",
    "solutionSteps": [
      {
        "explanation": "Differentiate the curve using the power rule on each term.",
        "workingOut": "\\dfrac{dy}{dx} = 3x^2 + 1"
      },
      {
        "explanation": "Evaluate the derivative at \\(x = 1\\) to find the tangent gradient at the given point.",
        "workingOut": "m_{\\text{tangent}} = 3(1)^2 + 1 = 4"
      },
      {
        "explanation": "The normal is perpendicular to the tangent, so take the negative reciprocal.",
        "workingOut": "m_{\\text{normal}} = -\\dfrac{1}{4}"
      },
      {
        "explanation": "Use the point–gradient form with the point \\((1, 2)\\).",
        "workingOut": "y - 2 = -\\dfrac{1}{4}(x - 1)"
      },
      {
        "explanation": "Simplify into general form (multiply by 4 and rearrange).",
        "workingOut": "4y - 8 = -(x - 1) \\implies x + 4y - 9 = 0"
      }
    ]
  },
  {
    "id": "cra2023s-q13",
    "topicId": "y11a-3I",
    "c": "3I",
    "t": "Direct and inverse variation",
    "source": "Cranbrook 2023 Trial Q13",
    "type": "short_answer",
    "difficulty": "easy",
    "q": "The time it takes to paint a fence varies inversely with the number of painters assigned. It takes 6 painters 10 hours to paint the fence. Find the amount of time it would take 4 painters to paint the same fence.",
    "a": "$15$ hours",
    "opts": [],
    "h": "Inverse variation means $t = \\dfrac{k}{n}$ for a constant $k$. Find $k$ first.",
    "s": "$t = \\dfrac{k}{n}$. With $n = 6$, $t = 10$: $k = 60$. With $n = 4$: $t = \\dfrac{60}{4} = 15$ hours.",
    "solutionSteps": [
      {
        "explanation": "Translate \"varies inversely\" into the equation \\(t = \\dfrac{k}{n}\\), the defining form of inverse variation.",
        "workingOut": "t = \\dfrac{k}{n}"
      },
      {
        "explanation": "Substitute the given values (\\(n = 6\\), \\(t = 10\\)) to find the constant \\(k\\).",
        "workingOut": "10 = \\dfrac{k}{6} \\implies k = 60"
      },
      {
        "explanation": "Use the model with \\(n = 4\\) painters.",
        "workingOut": "t = \\dfrac{60}{4} = 15 \\text{ hours}"
      },
      {
        "explanation": "Check for reasonableness: fewer painters should take longer, and \\(15 > 10\\) ✓.",
        "workingOut": "t = 15 \\text{ hours}"
      }
    ]
  },
  {
    "id": "cra2023s-q14a",
    "topicId": "y12a-5G",
    "c": "5G",
    "t": "Differentiation of logarithmic functions",
    "source": "Cranbrook 2023 Trial Q14(a)",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "Find $\\dfrac{dy}{dx}$, given $y = (\\ln x)^3$.",
    "a": "$\\dfrac{dy}{dx} = \\dfrac{3(\\ln x)^2}{x}$",
    "opts": [],
    "h": "Use the chain rule with outer function $u^3$ and inner function $u = \\ln x$.",
    "s": "By the chain rule: $\\dfrac{dy}{dx} = 3(\\ln x)^2 \\cdot \\dfrac{1}{x} = \\dfrac{3(\\ln x)^2}{x}$.",
    "solutionSteps": [
      {
        "explanation": "Recognise the composite structure \\(y = u^3\\) with \\(u = \\ln x\\), and apply the chain rule \\(\\dfrac{dy}{dx} = \\dfrac{dy}{du}\\cdot\\dfrac{du}{dx}\\).",
        "workingOut": "y = u^3, quad u = \\ln x"
      },
      {
        "explanation": "Differentiate the outer power (bring down the 3, reduce the power) and the inner logarithm (derivative \\(\\tfrac{1}{x}\\)).",
        "workingOut": "\\dfrac{dy}{du} = 3u^2, quad \\dfrac{du}{dx} = \\dfrac{1}{x}"
      },
      {
        "explanation": "Multiply and substitute back \\(u = \\ln x\\).",
        "workingOut": "\\dfrac{dy}{dx} = \\dfrac{3(\\ln x)^2}{x}"
      }
    ]
  },
  {
    "id": "cra2023s-q14b",
    "topicId": "y12a-5I",
    "c": "5I",
    "t": "Integration of the reciprocal function",
    "source": "Cranbrook 2023 Trial Q14(b)",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "Hence or otherwise, find $\\displaystyle\\int_1^e \\dfrac{\\bigl(\\ln(x^3)\\bigr)^2}{9x}\\,dx$.",
    "a": "$\\dfrac{1}{3}$",
    "opts": [],
    "h": "Simplify $\\ln(x^3) = 3\\ln x$ first; the integrand becomes $\\dfrac{(\\ln x)^2}{x}$, which is one third of the derivative of $(\\ln x)^3$.",
    "s": "$\\dfrac{(\\ln x^3)^2}{9x} = \\dfrac{9(\\ln x)^2}{9x} = \\dfrac{(\\ln x)^2}{x}$. From part (a), $\\dfrac{d}{dx}(\\ln x)^3 = \\dfrac{3(\\ln x)^2}{x}$, so $\\displaystyle\\int \\dfrac{(\\ln x)^2}{x}\\,dx = \\dfrac{(\\ln x)^3}{3}$. Hence the integral equals $\\left[\\dfrac{(\\ln x)^3}{3}\\right]_1^e = \\dfrac{1}{3} - 0 = \\dfrac{1}{3}$.",
    "solutionSteps": [
      {
        "explanation": "Simplify the integrand using the logarithm power law \\(\\ln(x^3) = 3\\ln x\\), so the square gives \\(9(\\ln x)^2\\), cancelling the 9 in the denominator.",
        "workingOut": "\\dfrac{(\\ln x^3)^2}{9x} = \\dfrac{9(\\ln x)^2}{9x} = \\dfrac{(\\ln x)^2}{x}"
      },
      {
        "explanation": "Use part (a) in reverse: since \\(\\dfrac{d}{dx}(\\ln x)^3 = \\dfrac{3(\\ln x)^2}{x}\\), dividing by 3 gives an antiderivative of the integrand.",
        "workingOut": "\\int \\dfrac{(\\ln x)^2}{x}\\,dx = \\dfrac{(\\ln x)^3}{3} + C"
      },
      {
        "explanation": "Apply the fundamental theorem of calculus at the limits \\(x = e\\) and \\(x = 1\\).",
        "workingOut": "\\left[\\dfrac{(\\ln x)^3}{3}\\right]_1^e = \\dfrac{1^3}{3} - \\dfrac{0^3}{3}"
      },
      {
        "explanation": "Simplify using \\(\\ln e = 1\\) and \\(\\ln 1 = 0\\).",
        "workingOut": "= \\dfrac{1}{3}"
      }
    ]
  },
  {
    "id": "cra2023s-q15",
    "topicId": "y12a-6D",
    "c": "6D",
    "t": "Integrating the trig functions",
    "source": "Cranbrook 2023 Trial Q15",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "The graph of the primitive function of $f(x) = \\tan^2 x$ crosses the $x$-axis at $x = \\dfrac{\\pi}{4}$. Find the primitive function, leaving all values in exact form.",
    "a": "$F(x) = \\tan x - x + \\dfrac{\\pi}{4} - 1$",
    "opts": [],
    "h": "Use the identity $\\tan^2 x = \\sec^2 x - 1$ to integrate, then use $F\\!\\left(\\dfrac{\\pi}{4}\\right) = 0$ to find the constant.",
    "s": "$\\displaystyle\\int \\tan^2 x\\,dx = \\tan x - x + C$. Since $F\\!\\left(\\dfrac{\\pi}{4}\\right) = 0$: $1 - \\dfrac{\\pi}{4} + C = 0$, so $C = \\dfrac{\\pi}{4} - 1$. Hence $F(x) = \\tan x - x + \\dfrac{\\pi}{4} - 1$.",
    "solutionSteps": [
      {
        "explanation": "Rewrite \\(\\tan^2 x\\) using the Pythagorean identity, since \\(\\sec^2 x\\) has the known antiderivative \\(\\tan x\\).",
        "workingOut": "\\tan^2 x = \\sec^2 x - 1"
      },
      {
        "explanation": "Integrate term by term, including the constant of integration.",
        "workingOut": "F(x) = \\tan x - x + C"
      },
      {
        "explanation": "Apply the condition \\(F\\!\\left(\\dfrac{\\pi}{4}\\right) = 0\\), using \\(\\tan\\dfrac{\\pi}{4} = 1\\).",
        "workingOut": "1 - \\dfrac{\\pi}{4} + C = 0 \\implies C = \\dfrac{\\pi}{4} - 1"
      },
      {
        "explanation": "State the complete primitive in exact form.",
        "workingOut": "F(x) = \\tan x - x + \\dfrac{\\pi}{4} - 1"
      }
    ]
  },
  {
    "id": "cra2023s-q16a",
    "topicId": "y11a-4D",
    "c": "4D",
    "t": "Odd and even symmetry",
    "source": "Cranbrook 2023 Trial Q16(a)",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "Consider the function $f(x) = -\\sin\\!\\left(\\dfrac{1}{2}(x + \\pi)\\right)$. Is $f(x)$ even, odd, or neither?",
    "a": "Expanding gives $f(x) = -\\cos\\!\\left(\\dfrac{x}{2}\\right)$, and $f(-x) = -\\cos\\!\\left(-\\dfrac{x}{2}\\right) = -\\cos\\!\\left(\\dfrac{x}{2}\\right) = f(x)$.",
    "options": [
      "Even: $f(-x) = -\\cos\\!\\left(-\\dfrac{x}{2}\\right) = -\\cos\\!\\left(\\dfrac{x}{2}\\right) = f(x)$",
      "Odd: $f(-x) = -\\cos\\!\\left(-\\dfrac{x}{2}\\right) = \\cos\\!\\left(\\dfrac{x}{2}\\right) = -f(x)$",
      "Even: $f(-x) = -\\sin\\!\\left(-\\dfrac{x}{2}\\right) = f(x)$",
      "Neither even nor odd"
    ],
    "answer": "0",
    "h": "Expand $\\sin\\!\\left(\\dfrac{x}{2} + \\dfrac{\\pi}{2}\\right)$ with the compound angle formula, then check $f(-x) = f(x)$.",
    "s": "$f(x) = -\\sin\\!\\left(\\dfrac{x}{2} + \\dfrac{\\pi}{2}\\right) = -\\left[\\sin\\dfrac{x}{2}\\cos\\dfrac{\\pi}{2} + \\cos\\dfrac{x}{2}\\sin\\dfrac{\\pi}{2}\\right] = -\\cos\\dfrac{x}{2}$.\n\nThen $f(-x) = -\\cos\\!\\left(-\\dfrac{x}{2}\\right) = -\\cos\\dfrac{x}{2} = f(x)$, so $f$ is even.",
    "solutionSteps": [
      {
        "explanation": "Distribute the \\(\\dfrac{1}{2}\\) to put the argument in compound-angle form.",
        "workingOut": "f(x) = -\\sin\\!\\left(\\dfrac{x}{2} + \\dfrac{\\pi}{2}\\right)"
      },
      {
        "explanation": "Expand with \\(\\sin(A + B) = \\sin A\\cos B + \\cos A\\sin B\\) where \\(A = \\dfrac{x}{2}\\), \\(B = \\dfrac{\\pi}{2}\\).",
        "workingOut": "\\sin\\!\\left(\\dfrac{x}{2} + \\dfrac{\\pi}{2}\\right) = \\sin\\dfrac{x}{2}(0) + \\cos\\dfrac{x}{2}(1) = \\cos\\dfrac{x}{2}"
      },
      {
        "explanation": "Apply the leading negative sign to obtain a simplified rule for \\(f\\).",
        "workingOut": "f(x) = -\\cos\\dfrac{x}{2}"
      },
      {
        "explanation": "Test the even-function definition using the evenness of cosine: \\(\\cos(-u) = \\cos u\\).",
        "workingOut": "f(-x) = -\\cos\\!\\left(-\\dfrac{x}{2}\\right) = -\\cos\\dfrac{x}{2} = f(x) \\quad \\blacksquare"
      }
    ]
  },
  {
    "id": "cra2023s-q16b",
    "topicId": "y12a-6E",
    "c": "6E",
    "t": "Applications of integration of trig",
    "source": "Cranbrook 2023 Trial Q16(b)",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "Hence, or otherwise, find the area bounded by the curve $y = f(x) = -\\sin\\!\\left(\\dfrac{1}{2}(x + \\pi)\\right)$ and the $x$-axis in the interval $[-\\pi, pi]$.",
    "a": "$4$ square units",
    "opts": [],
    "h": "From part (a), $f(x) = -\\cos\\dfrac{x}{2}$, which is non-positive on $[-\\pi, pi]$: the area is the absolute value of the integral.",
    "s": "Since $f(x) = -\\cos\\dfrac{x}{2} \\leq 0$ on $[-\\pi, pi]$, the region lies below the axis.\n\nArea $= \\left|\\displaystyle\\int_{-\\pi}^{\\pi} -\\cos\\dfrac{x}{2}\\,dx\\right| = \\displaystyle\\int_{-\\pi}^{\\pi} \\cos\\dfrac{x}{2}\\,dx = 2\\left[2\\sin\\dfrac{x}{2}\\right]_0^{\\pi} = 4$.",
    "solutionSteps": [
      {
        "explanation": "Use part (a): \\(f(x) = -\\cos\\dfrac{x}{2}\\). On \\([-\\pi, pi]\\) the argument \\(\\dfrac{x}{2}\\) stays within \\(\\left[-\\dfrac{\\pi}{2}, dfrac{\\pi}{2}\\right]\\) where cosine is non-negative, so \\(f(x) \\leq 0\\): the curve lies below the axis and the area is the magnitude of the integral.",
        "workingOut": "f(x) = -\\cos\\dfrac{x}{2} \\leq 0 \\text{ on } [-\\pi, pi]"
      },
      {
        "explanation": "Write the area as the integral of \\(|f(x)| = \\cos\\dfrac{x}{2}\\), and use even symmetry to double the half-interval.",
        "workingOut": "\\text{Area} = \\int_{-\\pi}^{\\pi} \\cos\\dfrac{x}{2}\\,dx = 2\\int_0^{\\pi} \\cos\\dfrac{x}{2}\\,dx"
      },
      {
        "explanation": "Integrate: the antiderivative of \\(\\cos\\dfrac{x}{2}\\) is \\(2\\sin\\dfrac{x}{2}\\).",
        "workingOut": "= 2\\left[2\\sin\\dfrac{x}{2}\\right]_0^{\\pi} = 4\\left(\\sin\\dfrac{\\pi}{2} - 0\\right)"
      },
      {
        "explanation": "Evaluate and state the area with units.",
        "workingOut": "= 4 \\text{ square units}"
      }
    ]
  },
  {
    "id": "cra2023s-q17a",
    "topicId": "y12a-10A",
    "c": "10A",
    "t": "Probability distributions",
    "source": "Cranbrook 2023 Trial Q17(a)",
    "type": "short_answer",
    "difficulty": "easy",
    "q": "Mia buys a ticket in a raffle, where the first prize is $20,000. Tickets cost $25 each, and the prize distribution is: $P(X=0) = 0.7$, $P(X=25) = m$, $P(X=100) = 0.03$, $P(X=500) = 0.002$, $P(X=5000) = 0.0005$, $P(X=20\\,000) = 0.0001$. Find the value of $m$.",
    "a": "$m = 0.2674$",
    "opts": [],
    "h": "The probabilities in a discrete distribution must sum to 1.",
    "s": "$0.7 + m + 0.03 + 0.002 + 0.0005 + 0.0001 = 1$, so $m = 1 - 0.7326 = 0.2674$.",
    "solutionSteps": [
      {
        "explanation": "Apply the requirement that all probabilities in the distribution sum to 1.",
        "workingOut": "0.7 + m + 0.03 + 0.002 + 0.0005 + 0.0001 = 1"
      },
      {
        "explanation": "Add the known probabilities.",
        "workingOut": "0.7 + 0.03 + 0.002 + 0.0005 + 0.0001 = 0.7326"
      },
      {
        "explanation": "Solve for \\(m\\).",
        "workingOut": "m = 1 - 0.7326 = 0.2674"
      }
    ]
  },
  {
    "id": "cra2023s-q17b",
    "topicId": "y12a-10C",
    "c": "10C",
    "t": "Mean and variance of a distribution",
    "source": "Cranbrook 2023 Trial Q17(b)",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "Using the raffle distribution with $m = 0.2674$ (prizes 0, 25, 100, 500, 5000, 20000 with probabilities 0.7, 0.2674, 0.03, 0.002, 0.0005, 0.0001) and a ticket price of $25, show that Mia is expected to lose $9.82 every time she plays this raffle.",
    "a": "$E(X) = 15.185$, so expected loss $= 25 - 15.185 = 9.815 \\approx \\$9.82$",
    "opts": [],
    "h": "Compute $E(X) = \\sum x \\cdot P(X=x)$, then compare with the \\$25 ticket price.",
    "s": "$E(X) = 0(0.7) + 25(0.2674) + 100(0.03) + 500(0.002) + 5000(0.0005) + 20000(0.0001)$\n$= 0 + 6.685 + 3 + 1 + 2.5 + 2 = 15.185$.\n\nExpected loss $= 25 - 15.185 = 9.815 \\approx \\$9.82$. ✓",
    "solutionSteps": [
      {
        "explanation": "Write the expected value formula for a discrete random variable.",
        "workingOut": "E(X) = \\sum x\\,P(X = x)"
      },
      {
        "explanation": "Substitute each prize–probability pair.",
        "workingOut": "E(X) = 0(0.7) + 25(0.2674) + 100(0.03) + 500(0.002) + 5000(0.0005) + 20000(0.0001)"
      },
      {
        "explanation": "Evaluate each term and sum.",
        "workingOut": "= 0 + 6.685 + 3 + 1 + 2.5 + 2 = 15.185"
      },
      {
        "explanation": "Compare the expected winnings with the \\(25 ticket cost: the expected loss is the difference.\\)",
        "workingOut": "\\text{Expected loss} = 25 - 15.185 = 9.815 \\approx $9.82 \\quad \\blacksquare"
      }
    ]
  },
  {
    "id": "cra2023s-q17c",
    "topicId": "y12a-10C",
    "c": "10C",
    "t": "Mean and variance of a distribution",
    "source": "Cranbrook 2023 Trial Q17(c)",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "Find the variance of the raffle prize distribution (prizes 0, 25, 100, 500, 5000, 20000 with probabilities 0.7, 0.2674, 0.03, 0.002, 0.0005, 0.0001), given $E(X) = 15.185$.",
    "a": "$\\text{Var}(X) \\approx 53236.54$",
    "opts": [],
    "h": "Use $\\text{Var}(X) = E(X^2) - [E(X)]^2$.",
    "s": "$E(X^2) = 625(0.2674) + 10000(0.03) + 250000(0.002) + 25000000(0.0005) + 400000000(0.0001)$\n$= 167.125 + 300 + 500 + 12500 + 40000 = 53467.125$.\n\n$\\text{Var}(X) = 53467.125 - (15.185)^2 = 53467.125 - 230.58 \\approx 53236.54$.",
    "solutionSteps": [
      {
        "explanation": "Use the computational formula \\(\\text{Var}(X) = E(X^2) - [E(X)]^2\\), which first requires \\(E(X^2)\\).",
        "workingOut": "E(X^2) = \\sum x^2\\,P(X = x)"
      },
      {
        "explanation": "Square each prize and multiply by its probability.",
        "workingOut": "E(X^2) = 25^2(0.2674) + 100^2(0.03) + 500^2(0.002) + 5000^2(0.0005) + 20000^2(0.0001)"
      },
      {
        "explanation": "Evaluate each term and add.",
        "workingOut": "= 167.125 + 300 + 500 + 12500 + 40000 = 53467.125"
      },
      {
        "explanation": "Square the mean and subtract.",
        "workingOut": "\\text{Var}(X) = 53467.125 - (15.185)^2 = 53467.125 - 230.58 \\approx 53236.54"
      }
    ]
  },
  {
    "id": "cra2023s-q18a",
    "topicId": "y11a-8G",
    "c": "8G",
    "t": "Applications",
    "source": "Cranbrook 2023 Trial Q18(a)",
    "type": "short_answer",
    "difficulty": "easy",
    "q": "Amelia is baking bread. The temperature of her oven is modelled by $T = 190 - 160 \\times (0.85)^{0.25t}$, where $T$ is the temperature of the oven (°C) at a time $t$ minutes since the oven was switched on. What was the initial temperature of the oven?",
    "a": "$30°$C",
    "opts": [],
    "h": "Substitute $t = 0$ into the model.",
    "s": "At $t = 0$: $T = 190 - 160(0.85)^0 = 190 - 160 = 30°$C.",
    "solutionSteps": [
      {
        "explanation": "\"Initial\" means \\(t = 0\\); substitute into the model.",
        "workingOut": "T = 190 - 160 \\times (0.85)^{0}"
      },
      {
        "explanation": "Any non-zero base to the power 0 equals 1.",
        "workingOut": "T = 190 - 160 = 30"
      },
      {
        "explanation": "State the answer with units.",
        "workingOut": "T_{\\text{initial}} = 30\\,°\\text{C}"
      }
    ]
  },
  {
    "id": "cra2023s-q18b",
    "topicId": "y11a-9J",
    "c": "9J",
    "t": "Rates of change",
    "source": "Cranbrook 2023 Trial Q18(b)",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "For the oven model $T = 190 - 160 \\times (0.85)^{0.25t}$, calculate the average rate at which the temperature changes per minute from $t = 20$ to $t = 60$, correct to two decimal places.",
    "a": "$\\approx 1.43$ °C per minute",
    "opts": [],
    "h": "Average rate of change $= \\dfrac{T(60) - T(20)}{60 - 20}$.",
    "s": "$T(20) = 190 - 160(0.85)^5 = 190 - 70.9928 = 119.0072$.\n$T(60) = 190 - 160(0.85)^{15} = 190 - 13.9767 = 176.0233$.\n\nAverage rate $= \\dfrac{176.0233 - 119.0072}{40} = \\dfrac{57.0161}{40} \\approx 1.43$ °C/min.",
    "solutionSteps": [
      {
        "explanation": "The average rate of change is the change in temperature divided by the change in time — the gradient of the chord between the two points.",
        "workingOut": "\\text{Average rate} = \\dfrac{T(60) - T(20)}{60 - 20}"
      },
      {
        "explanation": "Evaluate the model at \\(t = 20\\) (exponent \\(0.25 \\times 20 = 5\\)).",
        "workingOut": "T(20) = 190 - 160(0.85)^5 = 190 - 160(0.44371) = 119.0072"
      },
      {
        "explanation": "Evaluate the model at \\(t = 60\\) (exponent \\(0.25 \\times 60 = 15\\)).",
        "workingOut": "T(60) = 190 - 160(0.85)^{15} = 190 - 160(0.08735) = 176.0233"
      },
      {
        "explanation": "Substitute into the average rate formula and divide by the 40-minute interval.",
        "workingOut": "\\dfrac{176.0233 - 119.0072}{40} = \\dfrac{57.0161}{40} = 1.4254"
      },
      {
        "explanation": "Round to two decimal places.",
        "workingOut": "\\approx 1.43\\ °\\text{C per minute}"
      }
    ]
  },
  {
    "id": "cra2023s-q18c",
    "topicId": "y12a-5K",
    "c": "5K",
    "t": "Calculus with other bases",
    "source": "Cranbrook 2023 Trial Q18(c)",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "For the oven model $T = 190 - 160 \\times (0.85)^{0.25t}$: Amelia can place the bread in the oven when the instantaneous rate of change of temperature is less than or equal to $1°$C per minute. Given that Amelia turned the oven on at 9:15 am, find the earliest time that Amelia can place the bread in the oven, correct to the nearest minute.",
    "a": "10:02 am (about 47 minutes after switch-on)",
    "opts": [],
    "h": "Differentiate using $\\dfrac{d}{dt}a^{kt} = k\\ln a \\cdot a^{kt}$, set $\\dfrac{dT}{dt} \\leq 1$ and solve with logarithms.",
    "s": "$\\dfrac{dT}{dt} = -160 \\times 0.25\\ln(0.85)(0.85)^{0.25t} = -40\\ln(0.85)(0.85)^{0.25t} \\approx 6.5008(0.85)^{0.25t}$.\n\nSet $6.5008(0.85)^{0.25t} \\leq 1$: $(0.85)^{0.25t} \\leq 0.15383$. Taking logs (inequality flips since $\\ln 0.85 < 0$): $0.25t \\geq \\dfrac{\\ln 0.15383}{\\ln 0.85} = 11.518$, so $t \\geq 46.07$ minutes.\n\nNearest minute: 47 minutes after 9:15 am $=$ 10:02 am.",
    "solutionSteps": [
      {
        "explanation": "Differentiate the model using \\(\\dfrac{d}{dt}a^{kt} = k\\ln a \\cdot a^{kt}\\) with \\(a = 0.85\\) and \\(k = 0.25\\).",
        "workingOut": "\\dfrac{dT}{dt} = -40\\ln(0.85)\\,(0.85)^{0.25t}"
      },
      {
        "explanation": "Evaluate the constant: \\(\\ln(0.85) \\approx -0.16252\\), so \\(-40\\ln(0.85) \\approx 6.5008 > 0\\) — the oven heats continuously but ever more slowly.",
        "workingOut": "\\dfrac{dT}{dt} \\approx 6.5008\\,(0.85)^{0.25t}"
      },
      {
        "explanation": "Set up the inequality for the rate to drop to at most \\(1°\\)C/min.",
        "workingOut": "6.5008\\,(0.85)^{0.25t} \\leq 1 \\implies (0.85)^{0.25t} \\leq 0.15383"
      },
      {
        "explanation": "Take natural logarithms; dividing by the negative \\(\\ln(0.85)\\) reverses the inequality.",
        "workingOut": "0.25t \\geq \\dfrac{\\ln(0.15383)}{\\ln(0.85)} = \\dfrac{-1.8719}{-0.16252} = 11.518"
      },
      {
        "explanation": "Solve for \\(t\\) and round up to the next whole minute.",
        "workingOut": "t \\geq 46.07 \\implies t = 47 \\text{ minutes}"
      },
      {
        "explanation": "Add 47 minutes to the 9:15 am start time.",
        "workingOut": "9\\!:\\!15\\text{ am} + 47\\text{ min} = 10\\!:\\!02\\text{ am}"
      }
    ]
  },
  {
    "id": "cra2023s-q19",
    "topicId": "y11a-12G",
    "c": "12G",
    "t": "Conditional probability",
    "source": "Cranbrook 2023 Trial Q19",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "A group of students were surveyed on the instruments they play. The incomplete two-way table shows: Piano & Guitar $= B$, Piano & No Guitar $= 16$, No Piano & Guitar $= 22$, No Piano & No Guitar $= 34$. Given that a student plays piano, the probability that they also play guitar is 75%. Find the probability that a student chosen at random plays both piano and guitar.",
    "a": "$\\dfrac{48}{120} = \\dfrac{2}{5}$",
    "opts": [],
    "h": "Use $P(\\text{Guitar} \\mid \\text{Piano}) = \\dfrac{B}{B + 16} = 0.75$ to find $B$ first.",
    "s": "$\\dfrac{B}{B+16} = 0.75 \\Rightarrow B = 0.75B + 12 \\Rightarrow 0.25B = 12 \\Rightarrow B = 48$.\n\nTotal students $= 48 + 16 + 22 + 34 = 120$.\n\n$P(\\text{both}) = \\dfrac{48}{120} = \\dfrac{2}{5}$.",
    "solutionSteps": [
      {
        "explanation": "Translate the conditional probability: among the \\(B + 16\\) piano players, the fraction who also play guitar is 75%.",
        "workingOut": "P(\\text{Guitar} \\mid \\text{Piano}) = \\dfrac{B}{B + 16} = 0.75"
      },
      {
        "explanation": "Solve for \\(B\\) by multiplying out and collecting terms.",
        "workingOut": "B = 0.75B + 12 \\implies 0.25B = 12 \\implies B = 48"
      },
      {
        "explanation": "Find the total number of students surveyed.",
        "workingOut": "48 + 16 + 22 + 34 = 120"
      },
      {
        "explanation": "Divide the \"both\" cell by the total.",
        "workingOut": "P(\\text{both}) = \\dfrac{48}{120} = \\dfrac{2}{5}"
      }
    ]
  },
  {
    "id": "cra2023s-q20",
    "topicId": "y11a-8G",
    "c": "8G",
    "t": "Applications",
    "source": "Cranbrook 2023 Trial Q20",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "The relative level of a noise compared to a reference level is calculated by $R = 20\\log_{10}\\!\\left(\\dfrac{N}{N_0}\\right)$, where $R$ is the relative noise level in decibels (dB), $N$ is the level of a noise and $N_0$ is the maximum noise level permitted. The relative noise level at a music festival was found to be 12 dB higher than the maximum noise level permitted. Show that the level of noise produced was approximately 4 times greater than the maximum noise level permitted.",
    "a": "$\\dfrac{N}{N_0} = 10^{0.6} \\approx 3.98 \\approx 4$",
    "opts": [],
    "h": "Set $R = 12$ and solve for the ratio $\\dfrac{N}{N_0}$ by converting to index form.",
    "s": "$12 = 20\\log_{10}\\!\\left(\\dfrac{N}{N_0}\\right)$, so $\\log_{10}\\!\\left(\\dfrac{N}{N_0}\\right) = 0.6$. Converting: $\\dfrac{N}{N_0} = 10^{0.6} \\approx 3.98$. Hence $N \\approx 4N_0$. ✓",
    "solutionSteps": [
      {
        "explanation": "Substitute the given relative noise level \\(R = 12\\) dB.",
        "workingOut": "12 = 20\\log_{10}\\!\\left(\\dfrac{N}{N_0}\\right)"
      },
      {
        "explanation": "Isolate the logarithm by dividing by 20.",
        "workingOut": "\\log_{10}\\!\\left(\\dfrac{N}{N_0}\\right) = 0.6"
      },
      {
        "explanation": "Convert to index form using the definition of the logarithm.",
        "workingOut": "\\dfrac{N}{N_0} = 10^{0.6}"
      },
      {
        "explanation": "Evaluate and interpret: the noise is roughly 4 times the permitted maximum.",
        "workingOut": "10^{0.6} = 3.981\\ldots \\approx 4 \\quad \\blacksquare"
      }
    ]
  },
  {
    "id": "cra2023s-q21",
    "topicId": "y12a-9E",
    "c": "9E",
    "t": "Line of best fit",
    "source": "Cranbrook 2023 Trial Q21",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "Leo has plotted the income he received each week for the past five weeks: $(1, 150), (2, 250), (3, 250), (4, 350), (5, 500)$, where the first coordinate is the week number $n$ and the second is the amount in dollars. Over the same five weeks, Leo's expenses, which were originally $250 per week, increase by $30 each week. Write the equation of the least-squares regression line for Leo's income, and determine the equation of Leo's expenses.",
    "a": "Income $= 80n + 60$; Expenses $= 30n + 220$",
    "opts": [],
    "h": "For the regression line compute $b = \\dfrac{\\sum xy - n\\bar{x}\\bar{y}}{\\sum x^2 - n\\bar{x}^2}$ and $a = \\bar{y} - b\\bar{x}$. The expenses form a linear pattern.",
    "s": "$\\bar{n} = 3$, $\\bar{y} = \\dfrac{1500}{5} = 300$. $\\sum ny = 150 + 500 + 750 + 1400 + 2500 = 5300$, $\\sum n^2 = 55$.\n\nGradient $= \\dfrac{5300 - 5(3)(300)}{55 - 45} = \\dfrac{800}{10} = 80$. Intercept $= 300 - 80(3) = 60$.\n\nIncome $= 80n + 60$.\n\nExpenses start at \\$250 in week 1 and rise \\$30/week: $E = 250 + 30(n-1) = 30n + 220$.",
    "solutionSteps": [
      {
        "explanation": "Compute the means of the week numbers and the income values.",
        "workingOut": "\\bar{n} = 3, quad \\bar{y} = \\dfrac{150+250+250+350+500}{5} = 300"
      },
      {
        "explanation": "Compute the sums needed for the gradient.",
        "workingOut": "\\sum ny = 150 + 500 + 750 + 1400 + 2500 = 5300, quad \\sum n^2 = 55"
      },
      {
        "explanation": "Apply the least-squares gradient formula.",
        "workingOut": "b = \\dfrac{5300 - 5(3)(300)}{55 - 5(9)} = \\dfrac{800}{10} = 80"
      },
      {
        "explanation": "Find the intercept using the mean point \\((\\bar{n}, bar{y})\\), which always lies on the regression line.",
        "workingOut": "a = 300 - 80(3) = 60 \\implies \\text{Income} = 80n + 60"
      },
      {
        "explanation": "Model the expenses: \\\\(250 in week 1, increasing \\\\)30 each week — a linear rule with gradient 30 through \\((1, 250)\\).",
        "workingOut": "E = 250 + 30(n-1) = 30n + 220"
      },
      {
        "explanation": "Draw both lines neatly over Leo's five income data points \\((1,150), (2,250), (3,250), (4,350), (5,500)\\). The income regression line (blue) passes through the mean point \\((3, 300)\\); the expenses line (green) starts at \\((1, 250)\\) and rises \\(30 each week.\\)",
        "workingOut": "",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 320,
            "boundingbox": [
              -0.5,
              580,
              6,
              -60
            ],
            "boardOptions": {
              "keepaspectratio": false
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[0,0],[6,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-60],[0,580]], {strokeColor:'black'});\nvar pts = [[1,150],[2,250],[3,250],[4,350],[5,500]];\nfor (var i=0;i<pts.length;i++){ board.create('point', pts[i], {name:'', size:2.5, color:'#64748b', fixed:true}); }\nboard.create('functiongraph', [function(x){ return 80*x+60; }, 0, 5.5], {strokeColor:'blue',strokeWidth:2,name:'Income',withLabel:true});\nboard.create('functiongraph', [function(x){ return 30*x+220; }, 0, 5.5], {strokeColor:'green',strokeWidth:2,name:'Expenses',withLabel:true});\nboard.create('text', [5.4, 40, 'n (weeks)'], {fontSize:13});\nboard.create('text', [0.2, 560, 'Amount ($)'], {fontSize:13});\nboard.unsuspendUpdate();"
          }
        }
      }
    ]
  },
  {
    "id": "cra2023s-q22a",
    "topicId": "y12a-4H",
    "c": "4H",
    "t": "The trapezoidal rule",
    "source": "Cranbrook 2023 Trial Q22(a)",
    "graphData": {
      "jsxGraph": {
        "width": 380,
        "height": 300,
        "boundingbox": [
          -0.5,
          9,
          4,
          -1
        ],
        "boardOptions": {
          "keepaspectratio": false
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[0,0],[4,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-1],[0,9]], {strokeColor:'black'});\nboard.create('functiongraph', [function(t){ return 8*Math.exp(-Math.sqrt(t)); }, 0.0001, 3.6], {strokeColor:'blue',strokeWidth:2});\nvar pts=[[0,8],[1,2.94],[2,1.95],[3,1.42]];\nvar nm=['(0, 8)','(1, 2.94)','(2, 1.95)','(3, 1.42)'];\nvar off=[[8,8],[10,8],[10,8],[10,4]];\nfor(var i=0;i<pts.length;i++){ board.create('point', pts[i], {name:nm[i], size:2.5, color:'red', fixed:true, label:{offset:off[i], fontSize:11}}); }\nboard.create('text', [3.6, 0.35, 't'], {fontSize:14});\nboard.create('text', [0.25, 8.6, 'V'], {fontSize:14});\nboard.unsuspendUpdate();"
      }
    },
    "type": "short_answer",
    "difficulty": "medium",
    "q": "A deflated hot-air balloon is being inflated such that the rate of air flow is modelled by $V = 8e^{-\\sqrt{t}}$, with flow rates at hourly intervals: $(0, 8), (1, 2.94), (2, 1.95), (3, 1.42)$. Using three applications of the Trapezoidal rule, estimate the volume of air in the balloon at time $t = 3$.",
    "a": "$\\approx 9.6$ units³",
    "opts": [],
    "h": "The volume is the area under the rate curve: $\\displaystyle\\int_0^3 V\\,dt \\approx \\dfrac{h}{2}\\bigl[f_0 + 2f_1 + 2f_2 + f_3\\bigr]$ with $h = 1$.",
    "s": "Volume $\\approx \\dfrac{1}{2}\\bigl[8 + 2(2.94) + 2(1.95) + 1.42\\bigr] = \\dfrac{1}{2}\\bigl[8 + 5.88 + 3.9 + 1.42\\bigr] = \\dfrac{19.2}{2} = 9.6$.",
    "solutionSteps": [
      {
        "explanation": "The volume is the integral of the flow rate; estimate it numerically over \\([0,3]\\) with three strips of width \\(h = 1\\).",
        "workingOut": "\\text{Volume} = \\int_0^3 V\\,dt, quad h = 1"
      },
      {
        "explanation": "Write the trapezoidal rule: end ordinates weighted once, interior ordinates twice.",
        "workingOut": "\\int_0^3 V\\,dt \\approx \\dfrac{1}{2}\\bigl[f_0 + 2f_1 + 2f_2 + f_3\\bigr]"
      },
      {
        "explanation": "Substitute the tabulated flow rates.",
        "workingOut": "\\approx \\dfrac{1}{2}\\bigl[8 + 2(2.94) + 2(1.95) + 1.42\\bigr] = \\dfrac{1}{2}(19.2)"
      },
      {
        "explanation": "Evaluate to obtain the estimated volume.",
        "workingOut": "\\text{Volume} \\approx 9.6 \\text{ units}^3"
      }
    ]
  },
  {
    "id": "cra2023s-q22b",
    "topicId": "y12a-4H",
    "c": "4H",
    "t": "The trapezoidal rule",
    "source": "Cranbrook 2023 Trial Q22(b)",
    "graphData": {
      "jsxGraph": {
        "width": 380,
        "height": 300,
        "boundingbox": [
          -0.5,
          9,
          4,
          -1
        ],
        "boardOptions": {
          "keepaspectratio": false
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[0,0],[4,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-1],[0,9]], {strokeColor:'black'});\nboard.create('functiongraph', [function(t){ return 8*Math.exp(-Math.sqrt(t)); }, 0.0001, 3.6], {strokeColor:'blue',strokeWidth:2});\nvar pts=[[0,8],[1,2.94],[2,1.95],[3,1.42]];\nvar nm=['(0, 8)','(1, 2.94)','(2, 1.95)','(3, 1.42)'];\nvar off=[[8,8],[10,8],[10,8],[10,4]];\nfor(var i=0;i<pts.length;i++){ board.create('point', pts[i], {name:nm[i], size:2.5, color:'red', fixed:true, label:{offset:off[i], fontSize:11}}); }\nboard.create('text', [3.6, 0.35, 't'], {fontSize:14});\nboard.create('text', [0.25, 8.6, 'V'], {fontSize:14});\nboard.unsuspendUpdate();"
      }
    },
    "type": "short_answer",
    "difficulty": "medium",
    "q": "A safety shutoff valve is programmed to be activated before the hot-air balloon reaches its maximum volume, after which the balloon will burst. The flow-rate curve $V = 8e^{-\\sqrt{t}}$ is concave up. By referring to the graph, or otherwise, explain why the Trapezoidal rule is a valid method of estimation in this context.",
    "a": "Because the curve is concave up, each trapezium lies above the curve, so the rule overestimates the true volume. An overestimate triggers the safety valve early — before the true maximum volume is reached — so the balloon will not burst.",
    "opts": [],
    "h": "Consider whether the trapezoidal rule over- or under-estimates for a concave-up curve, and whether an overestimate is safe here.",
    "s": "The curve $V = 8e^{-\\sqrt{t}}$ is concave up, so each chord lies above the curve and every trapezium has area greater than the region under the curve: the estimate is an overestimate. The valve therefore activates before the balloon actually reaches its maximum volume, which is the safe direction of error, so the method is valid.",
    "solutionSteps": [
      {
        "explanation": "Identify the concavity: the flow-rate curve decreases steeply then flattens, so it is concave up.",
        "workingOut": "V = 8e^{-\\sqrt{t}} \\text{ is concave up}"
      },
      {
        "explanation": "For a concave-up curve, every chord lies above the curve, so each trapezium overestimates the area beneath.",
        "workingOut": "\\text{trapezoidal estimate} > \\text{true volume}"
      },
      {
        "explanation": "Interpret in context: acting on an overestimate, the valve shuts off before the true maximum volume is reached — the safe direction — so the method is valid.",
        "workingOut": "\\text{overestimate} \\implies \\text{valve activates early} \\implies \\text{no burst} \\quad \\blacksquare"
      }
    ]
  },
  {
    "id": "cra2023s-q23a",
    "topicId": "y12a-3G",
    "c": "3G",
    "t": "Applications of maximisation and minimisation",
    "source": "Cranbrook 2023 Trial Q23(a)",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "A closed cylindrical water tank with radius $r$ metres and height $h$ metres is to be made from sheet metal. The surface area of the tank is $A$ m² and the volume is $V$ m³, where $V = \\pi r^2 h$. Show that $A = 2\\pi r^2 + \\dfrac{2V}{r}$.",
    "a": "$A = 2\\pi r^2 + 2\\pi rh$; substituting $h = \\dfrac{V}{\\pi r^2}$ gives $A = 2\\pi r^2 + \\dfrac{2V}{r}$.",
    "opts": [],
    "h": "The closed cylinder has two circular ends and a curved surface. Express $h$ in terms of $V$ and substitute.",
    "s": "Surface area: two circular ends $= 2\\pi r^2$; curved surface $= 2\\pi rh$. So $A = 2\\pi r^2 + 2\\pi rh$.\n\nFrom $V = \\pi r^2 h$: $h = \\dfrac{V}{\\pi r^2}$.\n\n$A = 2\\pi r^2 + 2\\pi r \\cdot \\dfrac{V}{\\pi r^2} = 2\\pi r^2 + \\dfrac{2V}{r}$. ✓",
    "solutionSteps": [
      {
        "explanation": "List the surfaces of the closed cylinder: two circular ends of radius \\(r\\) and the curved lateral surface.",
        "workingOut": "\\text{ends: } 2\\pi r^2, quad \\text{curved: } 2\\pi r h"
      },
      {
        "explanation": "Add the parts to express the total surface area.",
        "workingOut": "A = 2\\pi r^2 + 2\\pi rh"
      },
      {
        "explanation": "Rearrange the volume formula to express \\(h\\) in terms of the fixed volume \\(V\\) and \\(r\\).",
        "workingOut": "h = \\dfrac{V}{\\pi r^2}"
      },
      {
        "explanation": "Substitute and simplify so \\(A\\) is a function of \\(r\\) alone.",
        "workingOut": "A = 2\\pi r^2 + 2\\pi r \\times \\dfrac{V}{\\pi r^2} = 2\\pi r^2 + \\dfrac{2V}{r} \\quad \\blacksquare"
      }
    ]
  },
  {
    "id": "cra2023s-q23b",
    "topicId": "y12a-3G",
    "c": "3G",
    "t": "Applications of maximisation and minimisation",
    "source": "Cranbrook 2023 Trial Q23(b)",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "For the cylindrical tank with $A = 2\\pi r^2 + \\dfrac{2V}{r}$ (where $V$ is a fixed constant), show that the amount of sheet metal used is minimised when $r = \\sqrt[3]{\\dfrac{V}{2\\pi}}$.",
    "a": "Setting $\\dfrac{dA}{dr} = 0$ gives $r^3 = \\dfrac{V}{2\\pi}$, and $\\dfrac{d^2A}{dr^2} > 0$ confirms a minimum.",
    "opts": [],
    "h": "Differentiate $A(r) = 2\\pi r^2 + 2Vr^{-1}$, set the derivative to zero, and verify with the second derivative.",
    "s": "$\\dfrac{dA}{dr} = 4\\pi r - \\dfrac{2V}{r^2}$. Setting $= 0$: $4\\pi r = \\dfrac{2V}{r^2}$, so $r^3 = \\dfrac{V}{2\\pi}$, giving $r = \\sqrt[3]{\\dfrac{V}{2\\pi}}$.\n\n$\\dfrac{d^2A}{dr^2} = 4\\pi + \\dfrac{4V}{r^3} > 0$ for $r > 0$, so this is a minimum. ✓",
    "solutionSteps": [
      {
        "explanation": "Write \\(A\\) with a negative power of \\(r\\) ready for differentiation.",
        "workingOut": "A(r) = 2\\pi r^2 + 2V r^{-1}"
      },
      {
        "explanation": "Differentiate with the power rule.",
        "workingOut": "\\dfrac{dA}{dr} = 4\\pi r - 2V r^{-2}"
      },
      {
        "explanation": "Set the derivative to zero and multiply through by \\(r^2\\).",
        "workingOut": "4\\pi r = \\dfrac{2V}{r^2} \\implies 4\\pi r^3 = 2V \\implies r^3 = \\dfrac{V}{2\\pi}"
      },
      {
        "explanation": "Take the cube root to obtain the optimal radius.",
        "workingOut": "r = \\sqrt[3]{\\dfrac{V}{2\\pi}}"
      },
      {
        "explanation": "Confirm a minimum with the second derivative test: both terms are positive for \\(r > 0\\).",
        "workingOut": "\\dfrac{d^2A}{dr^2} = 4\\pi + \\dfrac{4V}{r^3} > 0 \\implies \\text{minimum} \\quad \\blacksquare"
      }
    ]
  },
  {
    "id": "cra2023s-q23c",
    "topicId": "y12a-3G",
    "c": "3G",
    "t": "Applications of maximisation and minimisation",
    "source": "Cranbrook 2023 Trial Q23(c)",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "Hence find the height $h$ of the cylindrical tank that minimises the sheet metal, given that the volume of the tank is 10 cubic metres. Answer correct to two decimal places.",
    "a": "$h \\approx 2.34$ m",
    "opts": [],
    "h": "Substitute $V = 10$ into $r = \\sqrt[3]{\\dfrac{V}{2\\pi}}$, then use $h = \\dfrac{V}{\\pi r^2}$. (At the optimum, $h = 2r$.)",
    "s": "$r = \\sqrt[3]{\\dfrac{10}{2\\pi}} = \\sqrt[3]{1.59155} \\approx 1.16755$ m.\n\n$h = \\dfrac{10}{\\pi(1.16755)^2} = \\dfrac{10}{4.28227} \\approx 2.34$ m. (Note $h = 2r$ at the optimum.)",
    "solutionSteps": [
      {
        "explanation": "Substitute \\(V = 10\\) into the optimal radius formula from part (b).",
        "workingOut": "r = \\sqrt[3]{\\dfrac{10}{2\\pi}} = \\sqrt[3]{1.59155} \\approx 1.16755 \\text{ m}"
      },
      {
        "explanation": "Recover the height from the volume relation \\(h = \\dfrac{V}{\\pi r^2}\\).",
        "workingOut": "h = \\dfrac{10}{\\pi (1.16755)^2} = \\dfrac{10}{4.28227}"
      },
      {
        "explanation": "Evaluate and round to two decimal places. As a check, at the optimum \\(h = 2r = 2(1.16755) = 2.3351\\) ✓.",
        "workingOut": "h \\approx 2.34 \\text{ m}"
      }
    ]
  },
  {
    "id": "cra2023s-q24a",
    "topicId": "y11a-6H",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "source": "Cranbrook 2023 Trial Q24(a)",
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
            2
          ],
          "B": [
            3.5,
            -2.4
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
            "text": "A (050°)"
          },
          {
            "between": [
              "M",
              "B"
            ],
            "text": "B (130°)"
          }
        ]
      }
    },
    "type": "short_answer",
    "difficulty": "medium",
    "q": "Sofia installs a vertical flagpole on level ground at $M$. Two pegs are installed on the ground at $A$ and $B$ on bearings of 050° and 130° respectively from $M$. The distance from $A$ to $M$ is 120 m and the area of the triangle $AMB$ is 11 818 m². Find the distance between the base of the flagpole, $M$, and the peg at $B$, to the nearest metre.",
    "a": "$MB = 200$ m",
    "opts": [],
    "h": "The angle $\\angle AMB$ is the difference of the bearings. Use $\\text{Area} = \\dfrac{1}{2}ab\\sin C$.",
    "s": "$\\angle AMB = 130° - 50° = 80°$. Area $= \\dfrac{1}{2} \\times 120 \\times MB \\times \\sin 80° = 11818$.\n\n$MB = \\dfrac{2 \\times 11818}{120\\sin 80°} = \\dfrac{23636}{118.18} \\approx 200$ m.",
    "solutionSteps": [
      {
        "explanation": "Find the included angle at \\(M\\): bearings are measured clockwise from north, so subtract.",
        "workingOut": "\\angle AMB = 130° - 50° = 80°"
      },
      {
        "explanation": "Write the area formula with two sides and the included angle.",
        "workingOut": "11818 = \\dfrac{1}{2} \\times 120 \\times MB \\times \\sin 80°"
      },
      {
        "explanation": "Solve for \\(MB\\).",
        "workingOut": "MB = \\dfrac{2 \\times 11818}{120\\sin 80°} = \\dfrac{23636}{118.18}"
      },
      {
        "explanation": "Evaluate to the nearest metre.",
        "workingOut": "MB \\approx 200 \\text{ m}"
      }
    ]
  },
  {
    "id": "cra2023s-q24b",
    "topicId": "y11a-6B",
    "c": "6B",
    "t": "Problems with right-angled triangles",
    "source": "Cranbrook 2023 Trial Q24(b)",
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
            2
          ],
          "B": [
            3.5,
            -2.4
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
            "text": "A (050°)"
          },
          {
            "between": [
              "M",
              "B"
            ],
            "text": "B (130°)"
          }
        ]
      }
    },
    "type": "short_answer",
    "difficulty": "hard",
    "q": "Supporting wires are connected from each peg ($A$ and $B$) to the top of the flagpole at $T$, where $MA = 120$ m, $MB = 200$ m, and the pole $MT$ is vertical with height $x$ m. By considering triangle $AMT$ and triangle $BMT$, find the height of the pole, given that the total length of the supporting wires is 350 m. Answer to the nearest metre.",
    "a": "$x \\approx 69$ m",
    "opts": [],
    "h": "By Pythagoras, $TA = \\sqrt{x^2 + 120^2}$ and $TB = \\sqrt{x^2 + 200^2}$. Set $TA + TB = 350$ and use the difference of squares.",
    "s": "Let $u = \\sqrt{x^2 + 14400}$ and $v = \\sqrt{x^2 + 40000}$ with $u + v = 350$.\n\n$v^2 - u^2 = 25600$, so $v - u = \\dfrac{25600}{350} = 73.143$.\n\nSolving: $u = \\dfrac{350 - 73.143}{2} = 138.429$.\n\n$x^2 = u^2 - 14400 = 19162.5 - 14400 = 4762.5$, so $x \\approx 69$ m.",
    "solutionSteps": [
      {
        "explanation": "The pole is vertical, so both triangles are right-angled at \\(M\\). Express the wire lengths by Pythagoras.",
        "workingOut": "TA = \\sqrt{x^2 + 120^2}, qquad TB = \\sqrt{x^2 + 200^2}"
      },
      {
        "explanation": "Write the total-length constraint with \\(u = TA\\), \\(v = TB\\).",
        "workingOut": "u + v = 350"
      },
      {
        "explanation": "Subtract the squares: the \\(x^2\\) terms cancel, and the difference factors as \\((v-u)(v+u)\\).",
        "workingOut": "v^2 - u^2 = 40000 - 14400 = 25600 = (v-u)(350)"
      },
      {
        "explanation": "Solve for the difference, then for \\(u\\).",
        "workingOut": "v - u = 73.143 \\implies u = \\dfrac{350 - 73.143}{2} = 138.429"
      },
      {
        "explanation": "Recover the height from \\(u^2 = x^2 + 14400\\).",
        "workingOut": "x^2 = 138.429^2 - 14400 = 4762.5 \\implies x \\approx 69 \\text{ m}"
      }
    ]
  },
  {
    "id": "cra2023s-q25",
    "topicId": "y11a-5G",
    "c": "5G",
    "t": "Combining transformations",
    "source": "Cranbrook 2023 Trial Q25",
    "type": "teacher_review",
    "difficulty": "hard",
    "q": "Consider the function $g(x) = (x+2)^2$. The following transformations are applied to the graph of $y = g(x)$ in the order shown: (1) horizontal translation right by 6 units; (2) horizontal dilation by a factor of $\\dfrac{3}{2}$; (3) vertical dilation by a factor of $\\dfrac{1}{2}$; (4) vertical translation down by 2 units; (5) reflection in the $x$-axis. Find the equation of the transformed function, and state the vertex and the axis intercepts.",
    "a": "$y = 2 - \\dfrac{2}{9}(x-6)^2$; vertex $(6, 2)$; $x$-intercepts $(3, 0)$ and $(9, 0)$; $y$-intercept $(0, -6)$.",
    "opts": [],
    "h": "Apply each transformation to the equation one at a time, in order: $x \\to x - 6$, then $x \\to \\dfrac{2x}{3}$, multiply $y$ by $\\dfrac{1}{2}$, subtract 2, then negate.",
    "s": "Step 1 (right 6): $y = (x - 6 + 2)^2 = (x-4)^2$.\nStep 2 (dilate $\\times\\frac{3}{2}$ horizontally, $x \\to \\frac{2x}{3}$): $y = \\left(\\dfrac{2x}{3} - 4\\right)^2 = \\dfrac{4}{9}(x-6)^2$.\nStep 3 (vertical $\\times\\frac{1}{2}$): $y = \\dfrac{2}{9}(x-6)^2$.\nStep 4 (down 2): $y = \\dfrac{2}{9}(x-6)^2 - 2$.\nStep 5 (reflect): $y = 2 - \\dfrac{2}{9}(x-6)^2$.\n\nVertex: maximum at $(6, 2)$. $x$-intercepts: $(x-6)^2 = 9$, so $x = 3, 9$. $y$-intercept: $x = 0$ gives $y = 2 - 8 = -6$.",
    "solutionSteps": [
      {
        "explanation": "Apply the translation 6 right by replacing \\(x\\) with \\(x - 6\\).",
        "workingOut": "y = ((x-6)+2)^2 = (x-4)^2"
      },
      {
        "explanation": "Apply the horizontal dilation by factor \\(\\dfrac{3}{2}\\) by replacing \\(x\\) with \\(\\dfrac{2x}{3}\\), then factor the bracket.",
        "workingOut": "y = \\left(\\dfrac{2x}{3} - 4\\right)^2 = \\dfrac{4}{9}(x-6)^2"
      },
      {
        "explanation": "Apply the vertical dilation by multiplying the rule by \\(\\dfrac{1}{2}\\).",
        "workingOut": "y = \\dfrac{2}{9}(x-6)^2"
      },
      {
        "explanation": "Translate down 2 and then reflect in the \\(x\\)-axis by negating.",
        "workingOut": "y = -\\left(\\dfrac{2}{9}(x-6)^2 - 2\\right) = 2 - \\dfrac{2}{9}(x-6)^2"
      },
      {
        "explanation": "Read off the vertex: concave-down parabola with maximum at \\((6, 2)\\).",
        "workingOut": "\\text{Vertex } (6, 2)"
      },
      {
        "explanation": "Find the intercepts: set \\(y = 0\\) for the \\(x\\)-intercepts and \\(x = 0\\) for the \\(y\\)-intercept.",
        "workingOut": "(x-6)^2 = 9 \\implies x = 3, 9; \\quad x = 0 \\implies y = 2 - \\dfrac{2}{9}(36) = -6"
      },
      {
        "explanation": "Sketch the concave-down parabola \\(y = 2 - \\dfrac{2}{9}(x-6)^2\\) with maximum vertex \\((6, 2)\\), \\(x\\)-intercepts \\((3, 0)\\) and \\((9, 0)\\), and \\(y\\)-intercept \\((0, -6)\\).",
        "workingOut": "",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 300,
            "boundingbox": [
              -1,
              3.5,
              10,
              -7
            ],
            "boardOptions": {
              "keepaspectratio": false
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-1,0],[10,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-7],[0,3.5]], {strokeColor:'black'});\nboard.create('functiongraph', [function(x){ return 2 - (2/9)*Math.pow(x-6,2); }, -1, 10], {strokeColor:'blue',strokeWidth:2});\nboard.create('point', [6,2], {name:'(6, 2)', size:3, color:'red', label:{offset:[8,10]}});\nboard.create('point', [3,0], {name:'(3, 0)', size:3, color:'red', label:{offset:[-10,12]}});\nboard.create('point', [9,0], {name:'(9, 0)', size:3, color:'red', label:{offset:[10,12]}});\nboard.create('point', [0,-6], {name:'(0, -6)', size:3, color:'red', label:{offset:[8,-6]}});\nboard.create('text', [9.5, 0.4, 'x'], {fontSize:14});\nboard.create('text', [0.3, 3.2, 'y'], {fontSize:14});\nboard.create('text', [-0.4, -0.5, 'O'], {fontSize:14});\nboard.unsuspendUpdate();"
          }
        }
      }
    ]
  },
  {
    "id": "cra2023s-q26a",
    "topicId": "y12a-7B",
    "c": "7B",
    "t": "Velocity and acceleration as derivatives",
    "source": "Cranbrook 2023 Trial Q26(a)",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "A particle is moving along the $x$-axis so that its position, in metres, at time $t$ seconds is given by $x = 3\\ln(t^2 + 8) - t$. Determine the times when the particle is at rest.",
    "a": "$t = 2$ s and $t = 4$ s",
    "opts": [],
    "h": "The particle is at rest when $v = \\dfrac{dx}{dt} = 0$. Differentiate and solve.",
    "s": "$v = \\dfrac{6t}{t^2+8} - 1 = \\dfrac{6t - t^2 - 8}{t^2+8} = \\dfrac{-(t-2)(t-4)}{t^2+8}$.\n\n$v = 0$ when $(t-2)(t-4) = 0$: $t = 2$ or $t = 4$ seconds.",
    "solutionSteps": [
      {
        "explanation": "Differentiate the position: the derivative of \\(3\\ln(t^2+8)\\) is \\(\\dfrac{3 \\times 2t}{t^2+8}\\) by the chain rule, and the derivative of \\(-t\\) is \\(-1\\).",
        "workingOut": "v = \\dfrac{6t}{t^2+8} - 1"
      },
      {
        "explanation": "Combine into a single fraction so \\(v = 0\\) reduces to the numerator vanishing.",
        "workingOut": "v = \\dfrac{6t - t^2 - 8}{t^2+8} = \\dfrac{-(t^2 - 6t + 8)}{t^2+8}"
      },
      {
        "explanation": "Factor the quadratic numerator.",
        "workingOut": "v = \\dfrac{-(t-2)(t-4)}{t^2+8}"
      },
      {
        "explanation": "Set the numerator to zero (the denominator is always positive).",
        "workingOut": "(t-2)(t-4) = 0 \\implies t = 2 \\text{ s or } t = 4 \\text{ s}"
      }
    ]
  },
  {
    "id": "cra2023s-q26b",
    "topicId": "y12a-7A",
    "c": "7A",
    "t": "Average velocity and speed",
    "source": "Cranbrook 2023 Trial Q26(b)",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "For the particle with position $x = 3\\ln(t^2 + 8) - t$, find the distance travelled by the particle in the first two seconds. Leave your answer in a form involving $\\ln\\!\\left(\\dfrac{a}{b}\\right)$ with integers $a, b$.",
    "a": "Distance $= 2 - \\ln\\!\\left(\\dfrac{27}{8}\\right) \\approx 0.78$ m",
    "opts": [],
    "h": "Check the sign of $v$ on $(0, 2)$: the particle does not change direction before $t = 2$, so distance $= |x(2) - x(0)|$.",
    "s": "From part (a), $v = \\dfrac{-(t-2)(t-4)}{t^2+8}$. For $0 < t < 2$ both brackets are negative, so $v < 0$ — no change of direction.\n\n$x(0) = 3\\ln 8$; $x(2) = 3\\ln 12 - 2$.\n\nDisplacement $= 3\\ln\\dfrac{12}{8} - 2 = 3\\ln\\dfrac{3}{2} - 2 = \\ln\\dfrac{27}{8} - 2 \\approx -0.784$.\n\nDistance $= 2 - \\ln\\dfrac{27}{8} \\approx 0.78$ m.",
    "solutionSteps": [
      {
        "explanation": "Check for a change of direction on \\((0, 2)\\): in \\(v = \\dfrac{-(t-2)(t-4)}{t^2+8}\\) both brackets are negative there, so \\(v < 0\\) throughout — the motion is one-directional.",
        "workingOut": "0 < t < 2: \\; v < 0"
      },
      {
        "explanation": "Since there is no turn-around, the distance equals \\(|x(2) - x(0)|\\). Evaluate both positions.",
        "workingOut": "x(0) = 3\\ln 8, qquad x(2) = 3\\ln 12 - 2"
      },
      {
        "explanation": "Compute the displacement, combining logs with \\(3\\ln\\frac{3}{2} = \\ln\\frac{27}{8}\\).",
        "workingOut": "x(2) - x(0) = 3\\ln\\dfrac{12}{8} - 2 = \\ln\\dfrac{27}{8} - 2"
      },
      {
        "explanation": "Since \\(\\ln\\dfrac{27}{8} \\approx 1.216 < 2\\), the displacement is negative; take the absolute value for the distance.",
        "workingOut": "\\text{Distance} = 2 - \\ln\\dfrac{27}{8} \\approx 0.78 \\text{ m}"
      }
    ]
  },
  {
    "id": "cra2023s-q26c",
    "topicId": "y12a-7B",
    "c": "7B",
    "t": "Velocity and acceleration as derivatives",
    "source": "Cranbrook 2023 Trial Q26(c)",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "For the particle with position $x = 3\\ln(t^2 + 8) - t$ (for $t \\geq 0$), find the maximum velocity of the particle.",
    "a": "$v_{\\max} = \\dfrac{3\\sqrt{2}}{4} - 1 \\approx 0.06$ m/s, at $t = 2\\sqrt{2}$",
    "opts": [],
    "h": "Maximise $v(t) = \\dfrac{6t}{t^2+8} - 1$ by setting the acceleration $\\dfrac{dv}{dt} = 0$.",
    "s": "$a = \\dfrac{6(t^2+8) - 6t(2t)}{(t^2+8)^2} = \\dfrac{6(8 - t^2)}{(t^2+8)^2}$.\n\n$a = 0$ at $t = 2\\sqrt{2}$ ($t \\geq 0$). $a > 0$ before, $a < 0$ after — a maximum.\n\n$v(2\\sqrt{2}) = \\dfrac{12\\sqrt{2}}{16} - 1 = \\dfrac{3\\sqrt{2}}{4} - 1 \\approx 0.061$ m/s.",
    "solutionSteps": [
      {
        "explanation": "The velocity is maximised where its derivative (the acceleration) is zero. Differentiate \\(v\\) with the quotient rule.",
        "workingOut": "a = \\dfrac{6(t^2+8) - 6t(2t)}{(t^2+8)^2} = \\dfrac{6(8 - t^2)}{(t^2+8)^2}"
      },
      {
        "explanation": "Set the numerator to zero.",
        "workingOut": "8 - t^2 = 0 \\implies t = 2\\sqrt{2} \\;\\; (t \\geq 0)"
      },
      {
        "explanation": "Confirm a maximum: \\(a > 0\\) for \\(t < 2\\sqrt{2}\\) and \\(a < 0\\) for \\(t > 2\\sqrt{2}\\).",
        "workingOut": "\\text{velocity increases then decreases} \\implies \\text{maximum at } t = 2\\sqrt{2}"
      },
      {
        "explanation": "Substitute \\(t = 2\\sqrt{2}\\) into \\(v\\), using \\((2\\sqrt{2})^2 = 8\\).",
        "workingOut": "v(2\\sqrt{2}) = \\dfrac{6(2\\sqrt{2})}{8+8} - 1 = \\dfrac{12\\sqrt{2}}{16} - 1 = \\dfrac{3\\sqrt{2}}{4} - 1"
      },
      {
        "explanation": "State the maximum velocity with its approximate value.",
        "workingOut": "v_{\\max} = \\dfrac{3\\sqrt{2}}{4} - 1 \\approx 0.06 \\text{ m/s}"
      }
    ]
  },
  {
    "id": "cra2023s-q27a",
    "topicId": "y12a-3B",
    "c": "3B",
    "t": "Stationary points and turning points",
    "source": "Cranbrook 2023 Trial Q27(a)",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "Consider the function $g(x) = 2x\\left(1 - \\dfrac{x}{3}\\right)^3 + 1$. By showing that $g'(x) = 2\\left(1 - \\dfrac{x}{3}\\right)^2\\left(1 - \\dfrac{4x}{3}\\right)$, find any stationary points and determine their nature.",
    "a": "Local maximum at $\\left(\\dfrac{3}{4}, \\dfrac{209}{128}\\right)$; horizontal point of inflection at $(3, 1)$.",
    "opts": [],
    "h": "Use the product rule with $u = 2x$ and $v = \\left(1 - \\dfrac{x}{3}\\right)^3$, then factor out $\\left(1-\\dfrac{x}{3}\\right)^2$.",
    "s": "$g'(x) = 2\\left(1-\\dfrac{x}{3}\\right)^3 + 2x \\cdot 3\\left(1-\\dfrac{x}{3}\\right)^2\\left(-\\dfrac{1}{3}\\right) = 2\\left(1-\\dfrac{x}{3}\\right)^2\\left[\\left(1-\\dfrac{x}{3}\\right) - x\\right] = 2\\left(1-\\dfrac{x}{3}\\right)^2\\left(1-\\dfrac{4x}{3}\\right)$. ✓\n\nStationary points: $x = \\dfrac{3}{4}$ and $x = 3$.\n\nAt $x = \\dfrac{3}{4}$: $g'$ changes $+ \\to -$ → local max, $g\\left(\\dfrac{3}{4}\\right) = \\dfrac{3}{2}\\left(\\dfrac{3}{4}\\right)^3 + 1 = \\dfrac{81}{128} + 1 = \\dfrac{209}{128}$.\n\nAt $x = 3$: $g' < 0$ on both sides → horizontal point of inflection, $g(3) = 1$.",
    "solutionSteps": [
      {
        "explanation": "Differentiate with the product rule: \\(u = 2x\\), \\(v = \\left(1-\\dfrac{x}{3}\\right)^3\\), where the chain rule gives \\(v' = 3\\left(1-\\dfrac{x}{3}\\right)^2\\left(-\\dfrac{1}{3}\\right)\\).",
        "workingOut": "g'(x) = 2\\left(1-\\dfrac{x}{3}\\right)^3 - 2x\\left(1-\\dfrac{x}{3}\\right)^2"
      },
      {
        "explanation": "Factor out the common \\(2\\left(1-\\dfrac{x}{3}\\right)^2\\) and simplify the remaining bracket.",
        "workingOut": "g'(x) = 2\\left(1-\\dfrac{x}{3}\\right)^2\\left[1 - \\dfrac{x}{3} - x\\right] = 2\\left(1-\\dfrac{x}{3}\\right)^2\\left(1 - \\dfrac{4x}{3}\\right) \\quad \\checkmark"
      },
      {
        "explanation": "Set \\(g'(x) = 0\\): the squared factor gives \\(x = 3\\) (a repeated zero), and the linear factor gives \\(x = \\dfrac{3}{4}\\).",
        "workingOut": "x = 3 \\;(\\text{double}) \\quad \\text{or} \\quad x = \\dfrac{3}{4}"
      },
      {
        "explanation": "Classify \\(x = \\dfrac{3}{4}\\) with a sign test: the sign of \\(g'\\) follows \\(\\left(1 - \\dfrac{4x}{3}\\right)\\), which is positive before and negative after — a local maximum. Evaluate \\(g\\left(\\dfrac{3}{4}\\right)\\).",
        "workingOut": "g\\left(\\dfrac{3}{4}\\right) = \\dfrac{3}{2}\\left(\\dfrac{3}{4}\\right)^3 + 1 = \\dfrac{81}{128} + 1 = \\dfrac{209}{128}"
      },
      {
        "explanation": "Classify \\(x = 3\\): the squared factor means \\(g'\\) does not change sign (\\(g' < 0\\) on both sides), so it is a horizontal point of inflection at \\((3, 1)\\).",
        "workingOut": "g(3) = 2(3)(0)^3 + 1 = 1 \\implies \\text{horizontal POI } (3, 1)"
      }
    ]
  },
  {
    "id": "cra2023s-q27b",
    "topicId": "y12a-3E",
    "c": "3E",
    "t": "Systematic curve sketching with the derivative",
    "source": "Cranbrook 2023 Trial Q27(b)",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "For $g(x) = 2x\\left(1 - \\dfrac{x}{3}\\right)^3 + 1$, explain why the graph of $y = g(x)$ must cross the $x$-axis at least once between $x = 4$ and $x = 5$.",
    "a": "$g(4) = \\dfrac{19}{27} > 0$ and $g(5) = -\\dfrac{53}{27} < 0$; since $g$ is continuous and changes sign, it must cross the $x$-axis between $x=4$ and $x=5$.",
    "opts": [],
    "h": "Evaluate $g(4)$ and $g(5)$ and apply the sign-change argument for a continuous function.",
    "s": "$g(4) = 8\\left(-\\dfrac{1}{3}\\right)^3 + 1 = -\\dfrac{8}{27} + 1 = \\dfrac{19}{27} > 0$.\n\n$g(5) = 10\\left(-\\dfrac{2}{3}\\right)^3 + 1 = -\\dfrac{80}{27} + 1 = -\\dfrac{53}{27} < 0$.\n\n$g$ is a polynomial, hence continuous. The sign change forces at least one crossing of the $x$-axis between $x = 4$ and $x = 5$.",
    "solutionSteps": [
      {
        "explanation": "Evaluate at \\(x = 4\\), where \\(1 - \\dfrac{4}{3} = -\\dfrac{1}{3}\\).",
        "workingOut": "g(4) = 8\\left(-\\dfrac{1}{3}\\right)^3 + 1 = \\dfrac{19}{27} > 0"
      },
      {
        "explanation": "Evaluate at \\(x = 5\\), where \\(1 - \\dfrac{5}{3} = -\\dfrac{2}{3}\\).",
        "workingOut": "g(5) = 10\\left(-\\dfrac{2}{3}\\right)^3 + 1 = -\\dfrac{53}{27} < 0"
      },
      {
        "explanation": "Apply continuity: a polynomial graph is unbroken, so passing from positive to negative values forces a crossing of the axis in between.",
        "workingOut": "g \\text{ continuous}, \\; g(4) > 0, \\; g(5) < 0 \\implies \\exists\\, c \\in (4,5): g(c) = 0 \\quad \\blacksquare"
      }
    ]
  },
  {
    "id": "cra2023s-q27c",
    "topicId": "y12a-3E",
    "c": "3E",
    "t": "Systematic curve sketching with the derivative",
    "source": "Cranbrook 2023 Trial Q27(c)",
    "type": "teacher_review",
    "difficulty": "hard",
    "q": "Sketch the graph of $y = g(x) = 2x\\left(1 - \\dfrac{x}{3}\\right)^3 + 1$ in the interval $[0, 5]$, showing the stationary points, the $y$-intercept and the approximate location of the $x$-intercept.",
    "a": "Curve starts at $(0, 1)$, rises to the local maximum $\\left(\\dfrac{3}{4}, \\dfrac{209}{128}\\right)$, falls through the horizontal point of inflection $(3, 1)$, continues falling and crosses the $x$-axis between $x = 4$ and $x = 5$, ending at $\\left(5, -\\dfrac{53}{27}\\right)$.",
    "opts": [],
    "h": "Plot $(0,1)$, local max $\\left(\\frac{3}{4}, frac{209}{128}\\right)$, horizontal POI $(3,1)$, and the $x$-intercept between 4 and 5, then join smoothly.",
    "s": "Key features: $y$-intercept $(0, 1)$; local maximum $\\left(\\dfrac{3}{4}, dfrac{209}{128}\\right) \\approx (0.75, 1.63)$; horizontal point of inflection $(3, 1)$ where the curve momentarily flattens; crossing the $x$-axis between $x = 4$ and $x = 5$ (from part (b)); $g(5) = -\\dfrac{53}{27} \\approx -1.96$.",
    "solutionSteps": [
      {
        "explanation": "Mark the \\(y\\)-intercept by evaluating \\(g(0)\\).",
        "workingOut": "g(0) = 1 \\implies (0, 1)"
      },
      {
        "explanation": "Mark the stationary points from part (a): local maximum \\(\\left(\\dfrac{3}{4}, dfrac{209}{128}\\right) \\approx (0.75, 1.63)\\) and the horizontal point of inflection \\((3, 1)\\).",
        "workingOut": "\\left(\\tfrac{3}{4}, tfrac{209}{128}\\right) \\text{ max}, quad (3, 1) \\text{ horizontal POI}"
      },
      {
        "explanation": "Mark the approximate \\(x\\)-intercept between 4 and 5 (part (b)) and the endpoint \\(g(5) \\approx -1.96\\).",
        "workingOut": "x\\text{-intercept} \\in (4, 5), quad g(5) = -\\tfrac{53}{27}"
      },
      {
        "explanation": "Join smoothly: rising on \\(\\left(0, dfrac{3}{4}\\right)\\), falling on \\(\\left(\\dfrac{3}{4}, 3\\right)\\), flattening at \\((3,1)\\), then falling through the axis to \\((5, -1.96)\\).",
        "workingOut": "(0,1) \\nearrow (0.75, 1.63) \\searrow (3,1) \\searrow (5, -1.96)"
      },
      {
        "explanation": "Sketch \\(y = 2x\\left(1 - \\dfrac{x}{3}\\right)^3 + 1\\) on \\([0, 5]\\): start at \\((0,1)\\), rise to the local maximum \\(\\left(\\tfrac{3}{4}, tfrac{209}{128}\\right)\\), fall through the horizontal point of inflection \\((3, 1)\\), then cross the \\(x\\)-axis between \\(4\\) and \\(5\\), ending near \\((5, -1.96)\\).",
        "workingOut": "",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 300,
            "boundingbox": [
              -0.6,
              2.5,
              5.6,
              -2.6
            ],
            "boardOptions": {
              "keepaspectratio": false
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-0.6,0],[5.6,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-2.6],[0,2.5]], {strokeColor:'black'});\nboard.create('functiongraph', [function(x){ return 2*x*Math.pow(1 - x/3, 3) + 1; }, 0, 5], {strokeColor:'blue',strokeWidth:2});\nboard.create('point', [0,1], {name:'(0, 1)', size:3, color:'red', label:{offset:[-14,8]}});\nboard.create('point', [0.75,1.633], {name:'(3/4, 209/128)', size:3, color:'red', label:{offset:[6,10]}});\nboard.create('point', [3,1], {name:'(3, 1)', size:3, color:'red', label:{offset:[8,12]}});\nboard.create('point', [5,-1.963], {name:'(5, -53/27)', size:3, color:'red', label:{offset:[6,-8]}});\nboard.create('text', [5.45, 0.35, 'x'], {fontSize:14});\nboard.create('text', [0.25, 2.3, 'y'], {fontSize:14});\nboard.create('text', [-0.32, -0.35, 'O'], {fontSize:14});\nboard.unsuspendUpdate();"
          }
        }
      }
    ]
  },
  {
    "id": "cra2023s-q28a",
    "topicId": "y12a-10B",
    "c": "10B",
    "t": "Continuous distributions",
    "source": "Cranbrook 2023 Trial Q28(a)",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "A continuous random variable $X$ has probability density function $f(x) = e^{-\\frac{1}{3}x}$ for $0 \\leq x \\leq \\ln\\!\\left(\\dfrac{27}{8}\\right)$, and $f(x) = 0$ otherwise. Verify that $f(x)$ is a probability density function.",
    "a": "$f(x) \\geq 0$ everywhere, and $\\displaystyle\\int_0^{\\ln(27/8)} e^{-x/3}\\,dx = 1$, so $f$ is a valid pdf.",
    "opts": [],
    "h": "Check both conditions: $f(x) \\geq 0$, and the total integral equals 1. Note $e^{-\\frac{1}{3}\\ln(27/8)} = \\dfrac{2}{3}$.",
    "s": "First, $e^{-x/3} > 0$ for all $x$. ✓\n\nSecond: $\\displaystyle\\int_0^{\\ln(27/8)} e^{-x/3}\\,dx = \\left[-3e^{-x/3}\\right]_0^{\\ln(27/8)} = -3 \\times \\dfrac{2}{3} + 3 = 1$, since $e^{-\\frac{1}{3}\\ln(27/8)} = \\left(\\dfrac{27}{8}\\right)^{-1/3} = \\dfrac{2}{3}$. ✓",
    "solutionSteps": [
      {
        "explanation": "State the two pdf conditions: non-negativity and total probability 1.",
        "workingOut": "f(x) \\geq 0 \\;\\; \\text{and} \\;\\; \\int_0^{\\ln(27/8)} f(x)\\,dx = 1"
      },
      {
        "explanation": "The exponential function is always positive, so the first condition holds.",
        "workingOut": "e^{-x/3} > 0 \\quad \\checkmark"
      },
      {
        "explanation": "Integrate: the antiderivative of \\(e^{-x/3}\\) is \\(-3e^{-x/3}\\).",
        "workingOut": "\\int_0^{\\ln(27/8)} e^{-x/3}\\,dx = \\left[-3e^{-x/3}\\right]_0^{\\ln(27/8)}"
      },
      {
        "explanation": "Evaluate, simplifying \\(e^{-\\frac{1}{3}\\ln(27/8)} = \\left(\\dfrac{27}{8}\\right)^{-1/3} = \\dfrac{2}{3}\\).",
        "workingOut": "= -3 \\times \\dfrac{2}{3} + 3 = -2 + 3 = 1 \\quad \\checkmark \\quad \\blacksquare"
      }
    ]
  },
  {
    "id": "cra2023s-q28b",
    "topicId": "y12a-10B",
    "c": "10B",
    "t": "Continuous distributions",
    "source": "Cranbrook 2023 Trial Q28(b)",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "For the pdf $f(x) = e^{-\\frac{1}{3}x}$ on $0 \\leq x \\leq \\ln\\!\\left(\\dfrac{27}{8}\\right)$, find the cumulative distribution function $F(x)$ of $X$ for $-\\infty < x < \\infty$.",
    "a": "$F(x) = 0$ for $x < 0$; $F(x) = 3 - 3e^{-x/3}$ for $0 \\leq x \\leq \\ln(27/8)$; $F(x) = 1$ for $x > \\ln(27/8)$.",
    "opts": [],
    "h": "$F(x) = \\displaystyle\\int_0^x f(t)\\,dt$ on the support; it is 0 before the support and 1 after.",
    "s": "For $0 \\leq x \\leq \\ln(27/8)$: $F(x) = \\displaystyle\\int_0^x e^{-t/3}\\,dt = \\left[-3e^{-t/3}\\right]_0^x = 3 - 3e^{-x/3}$.\n\nComplete: $F(x) = 0$ for $x < 0$; $F(x) = 3 - 3e^{-x/3}$ for $0 \\leq x \\leq \\ln(27/8)$; $F(x) = 1$ for $x > \\ln(27/8)$.",
    "solutionSteps": [
      {
        "explanation": "Below the support no probability has accumulated.",
        "workingOut": "F(x) = 0 \\text{ for } x < 0"
      },
      {
        "explanation": "On the support, integrate the pdf from 0 to \\(x\\).",
        "workingOut": "F(x) = \\int_0^x e^{-t/3}\\,dt = 3 - 3e^{-x/3}"
      },
      {
        "explanation": "Above the support all probability has accumulated. Check continuity at the join: \\(F(\\ln(27/8)) = 3 - 3 \\times \\dfrac{2}{3} = 1\\) ✓.",
        "workingOut": "F(x) = 1 \\text{ for } x > \\ln(27/8)"
      },
      {
        "explanation": "Write the full piecewise definition.",
        "workingOut": "F(x) = \\begin{cases} 0 & x < 0 \\\\ 3 - 3e^{-x/3} & 0 \\leq x \\leq \\ln\\frac{27}{8} \\\\ 1 & x > \\ln\\frac{27}{8} \\end{cases}"
      }
    ]
  },
  {
    "id": "cra2023s-q28c",
    "topicId": "y12a-10B",
    "c": "10B",
    "t": "Continuous distributions",
    "source": "Cranbrook 2023 Trial Q28(c)",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "For the distribution with CDF $F(x) = 3 - 3e^{-x/3}$ on $0 \\leq x \\leq \\ln\\!\\left(\\dfrac{27}{8}\\right)$, find in simplest exact form the median of $X$.",
    "a": "$m = 3\\ln\\!\\left(\\dfrac{6}{5}\\right) = \\ln\\!\\left(\\dfrac{216}{125}\\right)$",
    "opts": [],
    "h": "The median $m$ satisfies $F(m) = \\dfrac{1}{2}$.",
    "s": "$3 - 3e^{-m/3} = \\dfrac{1}{2}$, so $e^{-m/3} = \\dfrac{5}{6}$. Then $-\\dfrac{m}{3} = \\ln\\dfrac{5}{6}$, giving $m = 3\\ln\\dfrac{6}{5} = \\ln\\dfrac{216}{125}$.",
    "solutionSteps": [
      {
        "explanation": "The median is where the CDF equals one half.",
        "workingOut": "3 - 3e^{-m/3} = \\dfrac{1}{2}"
      },
      {
        "explanation": "Isolate the exponential term.",
        "workingOut": "3e^{-m/3} = \\dfrac{5}{2} \\implies e^{-m/3} = \\dfrac{5}{6}"
      },
      {
        "explanation": "Take logarithms and solve, using \\(-\\ln\\frac{5}{6} = \\ln\\frac{6}{5}\\).",
        "workingOut": "m = 3\\ln\\dfrac{6}{5}"
      },
      {
        "explanation": "Simplify with the power law and check the median lies in the support: \\(\\ln\\frac{216}{125} \\approx 0.547 < \\ln\\frac{27}{8} \\approx 1.216\\) ✓.",
        "workingOut": "m = \\ln\\dfrac{216}{125}"
      }
    ]
  },
  {
    "id": "cra2023s-q29a",
    "topicId": "y12a-2I",
    "c": "2I",
    "t": "Trigonometric graphs",
    "source": "Cranbrook 2023 Trial Q29(a)",
    "graphData": {
      "jsxGraph": {
        "width": 420,
        "height": 320,
        "boundingbox": [
          -0.5,
          2.8,
          6.9,
          -2.8
        ],
        "boardOptions": {
          "keepaspectratio": false
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-0.4,0],[6.8,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-2.8],[0,2.8]], {strokeColor:'black'});\nvar PI=Math.PI;\nboard.create('functiongraph', [function(x){ return 2*Math.sin(x); }, 0, 2*PI], {strokeColor:'#1d4ed8',strokeWidth:2});\nvar tan=function(x){ return Math.tan(x); };\nboard.create('functiongraph', [tan, 0, PI/2-0.08], {strokeColor:'#15803d',strokeWidth:2});\nboard.create('functiongraph', [tan, PI/2+0.08, 3*PI/2-0.08], {strokeColor:'#15803d',strokeWidth:2});\nboard.create('functiongraph', [tan, 3*PI/2+0.08, 2*PI], {strokeColor:'#15803d',strokeWidth:2});\nvar marks=[[PI/2,'π/2'],[PI,'π'],[3*PI/2,'3π/2'],[2*PI,'2π']];\nfor(var i=0;i<marks.length;i++){ board.create('text',[marks[i][0]-0.12,-0.4,marks[i][1]],{fontSize:11}); }\nboard.create('text', [1.7, 2.5, 'y = 2sin x'], {fontSize:12, strokeColor:'#1d4ed8'});\nboard.create('text', [3.4, 2.5, 'y = tan x'], {fontSize:12, strokeColor:'#15803d'});\nboard.create('text', [0.22, 2.6, 'y'], {fontSize:13});\nboard.create('text', [6.6, 0.4, 'x'], {fontSize:13});\nboard.unsuspendUpdate();"
      }
    },
    "type": "short_answer",
    "difficulty": "easy",
    "q": "The diagram shows the graphs of $y = 2\\sin x$ and $y = \\tan x$ for $0 \\leq x \\leq 2\\pi$. Write down the periods of each of the functions $y = 2\\sin(x)$ and $y = \\tan(x)$.",
    "a": "Period of $2\\sin x$ is $2\\pi$; period of $\\tan x$ is $\\pi$.",
    "opts": [],
    "h": "Vertical dilation does not change the period. Tangent repeats every $\\pi$.",
    "s": "The period of $y = 2\\sin x$ is $2\\pi$ (the vertical stretch does not affect the period). The period of $y = \\tan x$ is $\\pi$.",
    "solutionSteps": [
      {
        "explanation": "The factor 2 is a vertical dilation, which does not change the repetition interval. Sine has period \\(2\\pi\\).",
        "workingOut": "\\text{Period of } 2\\sin x = 2\\pi"
      },
      {
        "explanation": "The tangent function completes one full cycle between consecutive asymptotes, which are \\(\\pi\\) apart.",
        "workingOut": "\\text{Period of } \\tan x = \\pi"
      }
    ]
  },
  {
    "id": "cra2023s-q29b",
    "topicId": "y11a-11B",
    "c": "11B",
    "t": "Solving trig equations",
    "source": "Cranbrook 2023 Trial Q29(b)",
    "graphData": {
      "jsxGraph": {
        "width": 420,
        "height": 320,
        "boundingbox": [
          -0.5,
          2.8,
          6.9,
          -2.8
        ],
        "boardOptions": {
          "keepaspectratio": false
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-0.4,0],[6.8,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-2.8],[0,2.8]], {strokeColor:'black'});\nvar PI=Math.PI;\nboard.create('functiongraph', [function(x){ return 2*Math.sin(x); }, 0, 2*PI], {strokeColor:'#1d4ed8',strokeWidth:2});\nvar tan=function(x){ return Math.tan(x); };\nboard.create('functiongraph', [tan, 0, PI/2-0.08], {strokeColor:'#15803d',strokeWidth:2});\nboard.create('functiongraph', [tan, PI/2+0.08, 3*PI/2-0.08], {strokeColor:'#15803d',strokeWidth:2});\nboard.create('functiongraph', [tan, 3*PI/2+0.08, 2*PI], {strokeColor:'#15803d',strokeWidth:2});\nvar marks=[[PI/2,'π/2'],[PI,'π'],[3*PI/2,'3π/2'],[2*PI,'2π']];\nfor(var i=0;i<marks.length;i++){ board.create('text',[marks[i][0]-0.12,-0.4,marks[i][1]],{fontSize:11}); }\nboard.create('text', [1.7, 2.5, 'y = 2sin x'], {fontSize:12, strokeColor:'#1d4ed8'});\nboard.create('text', [3.4, 2.5, 'y = tan x'], {fontSize:12, strokeColor:'#15803d'});\nboard.create('text', [0.22, 2.6, 'y'], {fontSize:13});\nboard.create('text', [6.6, 0.4, 'x'], {fontSize:13});\nboard.unsuspendUpdate();"
      }
    },
    "type": "short_answer",
    "difficulty": "hard",
    "q": "Show that the $x$-coordinates of the points of intersection of $y = 2\\sin x$ and $y = \\tan x$ are the solutions of the equation $\\sin x\\,(2\\cos x - 1) = 0$ for $0 \\leq x \\leq 2\\pi$, then solve this equation.",
    "a": "$x = 0, \\dfrac{\\pi}{3}, \\pi, \\dfrac{5\\pi}{3}, 2\\pi$",
    "opts": [],
    "h": "Set $2\\sin x = \\dfrac{\\sin x}{\\cos x}$, multiply by $\\cos x$, and bring everything to one side before factoring.",
    "s": "At intersections: $2\\sin x = \\tan x = \\dfrac{\\sin x}{\\cos x}$. Multiplying by $\\cos x$: $2\\sin x\\cos x = \\sin x$, so $\\sin x(2\\cos x - 1) = 0$. ✓\n\n$\\sin x = 0$: $x = 0, pi, 2\\pi$.\n$\\cos x = \\dfrac{1}{2}$: $x = \\dfrac{\\pi}{3}, dfrac{5\\pi}{3}$.\n\nAll: $x = 0, dfrac{\\pi}{3}, pi, dfrac{5\\pi}{3}, 2\\pi$.",
    "solutionSteps": [
      {
        "explanation": "Equate the two functions at an intersection and write tangent as sine over cosine.",
        "workingOut": "2\\sin x = \\dfrac{\\sin x}{\\cos x}"
      },
      {
        "explanation": "Multiply both sides by \\(\\cos x\\) (where \\(\\tan x\\) is defined, \\(\\cos x \\neq 0\\), so no solutions are lost).",
        "workingOut": "2\\sin x\\cos x = \\sin x"
      },
      {
        "explanation": "Bring to one side and factor out \\(\\sin x\\) — do not divide by \\(\\sin x\\), which would lose solutions.",
        "workingOut": "\\sin x\\,(2\\cos x - 1) = 0 \\quad \\checkmark"
      },
      {
        "explanation": "Solve \\(\\sin x = 0\\) on \\([0, 2\\pi]\\).",
        "workingOut": "x = 0,\\ \\pi, 2\\pi"
      },
      {
        "explanation": "Solve \\(\\cos x = \\dfrac{1}{2}\\) on \\([0, 2\\pi]\\): cosine is positive in the first and fourth quadrants.",
        "workingOut": "x = \\dfrac{\\pi}{3},\\ \\dfrac{5\\pi}{3}"
      },
      {
        "explanation": "Collect all solutions in increasing order.",
        "workingOut": "x = 0,\\ \\dfrac{\\pi}{3},\\ \\pi,\\ \\dfrac{5\\pi}{3}, 2\\pi"
      }
    ]
  },
  {
    "id": "cra2023s-q29c",
    "topicId": "y12a-6E",
    "c": "6E",
    "t": "Applications of integration of trig",
    "source": "Cranbrook 2023 Trial Q29(c)",
    "graphData": {
      "jsxGraph": {
        "width": 420,
        "height": 320,
        "boundingbox": [
          -0.5,
          2.8,
          6.9,
          -2.8
        ],
        "boardOptions": {
          "keepaspectratio": false
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-0.4,0],[6.8,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-2.8],[0,2.8]], {strokeColor:'black'});\nvar PI=Math.PI;\nboard.create('functiongraph', [function(x){ return 2*Math.sin(x); }, 0, 2*PI], {strokeColor:'#1d4ed8',strokeWidth:2});\nvar tan=function(x){ return Math.tan(x); };\nboard.create('functiongraph', [tan, 0, PI/2-0.08], {strokeColor:'#15803d',strokeWidth:2});\nboard.create('functiongraph', [tan, PI/2+0.08, 3*PI/2-0.08], {strokeColor:'#15803d',strokeWidth:2});\nboard.create('functiongraph', [tan, 3*PI/2+0.08, 2*PI], {strokeColor:'#15803d',strokeWidth:2});\nvar marks=[[PI/2,'π/2'],[PI,'π'],[3*PI/2,'3π/2'],[2*PI,'2π']];\nfor(var i=0;i<marks.length;i++){ board.create('text',[marks[i][0]-0.12,-0.4,marks[i][1]],{fontSize:11}); }\nboard.create('text', [1.7, 2.5, 'y = 2sin x'], {fontSize:12, strokeColor:'#1d4ed8'});\nboard.create('text', [3.4, 2.5, 'y = tan x'], {fontSize:12, strokeColor:'#15803d'});\nboard.create('text', [0.22, 2.6, 'y'], {fontSize:13});\nboard.create('text', [6.6, 0.4, 'x'], {fontSize:13});\nboard.unsuspendUpdate();"
      }
    },
    "type": "short_answer",
    "difficulty": "hard",
    "q": "Find in simplest exact form the total area of the bounded region enclosed by the curves $y = 2\\sin x$ and $y = \\tan x$ for $0 < x < \\dfrac{\\pi}{2}$.",
    "a": "$1 - \\ln 2$ square units",
    "opts": [],
    "h": "The curves intersect at $x = 0$ and $x = \\dfrac{\\pi}{3}$, with $2\\sin x$ on top. Note $\\int \\tan x\\,dx = -\\ln|\\cos x|$.",
    "s": "On $\\left(0, dfrac{\\pi}{3}\\right)$, $2\\sin x > \\tan x$ (e.g. at $x = \\dfrac{\\pi}{6}$: $1 > 0.577$).\n\nArea $= \\displaystyle\\int_0^{\\pi/3} (2\\sin x - \\tan x)\\,dx = \\Bigl[-2\\cos x + \\ln|\\cos x|\\Bigr]_0^{\\pi/3}$\n\n$= \\left(-1 + \\ln\\dfrac{1}{2}\\right) - (-2 + 0) = 1 - \\ln 2$.",
    "solutionSteps": [
      {
        "explanation": "Identify the bounded region: the curves intersect at \\(x = 0\\) and \\(x = \\dfrac{\\pi}{3}\\) (from part (b)) within \\(\\left(0, dfrac{\\pi}{2}\\right)\\). Test a point to find the top curve: at \\(x = \\dfrac{\\pi}{6}\\), \\(2\\sin x = 1 > \\tan x \\approx 0.58\\).",
        "workingOut": "\\left(0, tfrac{\\pi}{3}\\right): 2\\sin x \\text{ on top}"
      },
      {
        "explanation": "Set up the integral of top minus bottom, with antiderivatives \\(\\int 2\\sin x\\,dx = -2\\cos x\\) and \\(\\int \\tan x\\,dx = -\\ln|\\cos x|\\).",
        "workingOut": "A = \\int_0^{\\pi/3} (2\\sin x - \\tan x)\\,dx = \\Bigl[-2\\cos x + \\ln|\\cos x|\\Bigr]_0^{\\pi/3}"
      },
      {
        "explanation": "Evaluate at the upper limit using \\(\\cos\\dfrac{\\pi}{3} = \\dfrac{1}{2}\\).",
        "workingOut": "-2 \\times \\dfrac{1}{2} + \\ln\\dfrac{1}{2} = -1 - \\ln 2"
      },
      {
        "explanation": "Evaluate at the lower limit (\\(\\cos 0 = 1\\), \\(\\ln 1 = 0\\)) and subtract.",
        "workingOut": "A = (-1 - \\ln 2) - (-2 + 0) = 1 - \\ln 2 \\text{ square units}"
      }
    ]
  },
  {
    "id": "cra2023s-q30a",
    "topicId": "y12a-10B",
    "c": "10B",
    "t": "Continuous distributions",
    "source": "Cranbrook 2023 Trial Q30(a)",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "The time taken, $t$ minutes, for a machine to package boxes is modelled by a continuous random variable with pdf $f(t) = k(t-2)^2$ for $2 \\leq t \\leq 3$, $f(t) = k\\left(\\dfrac{5}{2} - \\dfrac{t}{2}\\right)$ for $3 \\leq t \\leq 5$, and $f(t) = 0$ otherwise. Show that the value of $k$ is $\\dfrac{3}{4}$.",
    "a": "$\\dfrac{k}{3} + k = \\dfrac{4k}{3} = 1$ gives $k = \\dfrac{3}{4}$.",
    "opts": [],
    "h": "The total probability must equal 1: integrate both pieces and add.",
    "s": "$\\displaystyle\\int_2^3 k(t-2)^2\\,dt = k\\left[\\dfrac{(t-2)^3}{3}\\right]_2^3 = \\dfrac{k}{3}$.\n\n$\\displaystyle\\int_3^5 k\\left(\\dfrac{5}{2} - \\dfrac{t}{2}\\right)dt = k\\left[\\dfrac{5t}{2} - \\dfrac{t^2}{4}\\right]_3^5 = k\\left[\\left(\\dfrac{25}{2} - \\dfrac{25}{4}\\right) - \\left(\\dfrac{15}{2} - \\dfrac{9}{4}\\right)\\right] = k\\left(\\dfrac{25}{4} - \\dfrac{21}{4}\\right) = k$.\n\nTotal: $\\dfrac{k}{3} + k = \\dfrac{4k}{3} = 1$, so $k = \\dfrac{3}{4}$. ✓",
    "solutionSteps": [
      {
        "explanation": "For a valid pdf the total area must equal 1: integrate each piece over its interval and sum.",
        "workingOut": "\\int_2^3 k(t-2)^2\\,dt + \\int_3^5 k\\left(\\dfrac{5}{2} - \\dfrac{t}{2}\\right)dt = 1"
      },
      {
        "explanation": "Integrate the first piece using the antiderivative \\(\\dfrac{(t-2)^3}{3}\\).",
        "workingOut": "k\\left[\\dfrac{(t-2)^3}{3}\\right]_2^3 = \\dfrac{k}{3}"
      },
      {
        "explanation": "Integrate the second piece term by term.",
        "workingOut": "k\\left[\\dfrac{5t}{2} - \\dfrac{t^2}{4}\\right]_3^5 = k\\left(\\dfrac{25}{4} - \\dfrac{21}{4}\\right) = k"
      },
      {
        "explanation": "Add and solve for \\(k\\).",
        "workingOut": "\\dfrac{k}{3} + k = \\dfrac{4k}{3} = 1 \\implies k = \\dfrac{3}{4} \\quad \\blacksquare"
      }
    ]
  },
  {
    "id": "cra2023s-q30b",
    "topicId": "y12a-10B",
    "c": "10B",
    "t": "Continuous distributions",
    "source": "Cranbrook 2023 Trial Q30(b)",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "For the packaging-time distribution with $k = \\dfrac{3}{4}$, let $F(t)$ be the cumulative distribution function. Find the least amount of time taken to package 88% of the boxes.",
    "a": "$t = 4.2$ minutes",
    "opts": [],
    "h": "For $3 \\leq t \\leq 5$, build $F(t) = F(3) + \\displaystyle\\int_3^t \\dfrac{3}{4}\\left(\\dfrac{5}{2} - \\dfrac{s}{2}\\right)ds$ and solve $F(t) = 0.88$.",
    "s": "$F(3) = \\dfrac{k}{3} = \\dfrac{1}{4}$. For $3 \\leq t \\leq 5$:\n\n$F(t) = \\dfrac{1}{4} + \\dfrac{3}{4}\\left[\\dfrac{5s}{2} - \\dfrac{s^2}{4}\\right]_3^t = \\dfrac{15t}{8} - \\dfrac{3t^2}{16} - \\dfrac{59}{16}$.\n\nSet $F(t) = 0.88$ and multiply by $\\dfrac{16}{3}$: $t^2 - 10t + 24.36 = 0$.\n\n$t = \\dfrac{10 \\pm \\sqrt{100 - 97.44}}{2} = \\dfrac{10 \\pm 1.6}{2} = 4.2$ or $5.8$. Since $t \\in [3, 5]$: $t = 4.2$ minutes.",
    "solutionSteps": [
      {
        "explanation": "Check which piece contains the 88th percentile: \\(F(3) = \\dfrac{k}{3} = \\dfrac{1}{4} = 0.25 < 0.88\\), so it lies in \\(3 \\leq t \\leq 5\\). Build the CDF there.",
        "workingOut": "F(t) = \\dfrac{1}{4} + \\int_3^t \\dfrac{3}{4}\\left(\\dfrac{5}{2} - \\dfrac{s}{2}\\right)ds"
      },
      {
        "explanation": "Evaluate the integral and simplify.",
        "workingOut": "F(t) = \\dfrac{1}{4} + \\dfrac{3}{4}\\left(\\dfrac{5t}{2} - \\dfrac{t^2}{4} - \\dfrac{21}{4}\\right) = \\dfrac{15t}{8} - \\dfrac{3t^2}{16} - \\dfrac{59}{16}"
      },
      {
        "explanation": "Set \\(F(t) = 0.88\\) and clear fractions (multiply by \\(\\dfrac{16}{3}\\)) to obtain a standard quadratic.",
        "workingOut": "t^2 - 10t + 24.36 = 0"
      },
      {
        "explanation": "Solve with the quadratic formula: discriminant \\(= 100 - 97.44 = 2.56\\), \\(\\sqrt{2.56} = 1.6\\).",
        "workingOut": "t = \\dfrac{10 \\pm 1.6}{2} = 5.8 \\text{ or } 4.2"
      },
      {
        "explanation": "Reject \\(t = 5.8\\) (outside the support \\([3, 5]\\)) and verify: \\(F(4.2) = 7.875 - 3.3075 - 3.6875 = 0.88\\) ✓.",
        "workingOut": "t = 4.2 \\text{ minutes}"
      }
    ]
  },
  {
    "id": "cra2023s-q31",
    "topicId": "y11a-9G",
    "c": "9G",
    "t": "The chain rule",
    "source": "Cranbrook 2023 Trial Q31",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "A heater converts electrical power, measured in watts, into heat such that the heat produced is given by $h(x) = (f(x))^3$. The heater is plugged into a faulty socket which outputs $x = g(t)$ watts at time $t$ seconds. The power output at time $t = 2$ is 4 watts and is increasing at a rate of 5 watts per second. By considering $h'(x)$ and using the fact that $\\dfrac{d}{dt}f(g(t)) = f'(g(t)) \\times g'(t)$, find the rate of change of the heat produced at time $t = 2$, given that $f(4) = 2$ and $f'(4) = 3$.",
    "a": "$180$ watts per second",
    "opts": [],
    "h": "The heat as a function of time is $H(t) = (f(g(t)))^3$. Differentiate with the chain rule: $H'(t) = 3\\bigl(f(g(t))\\bigr)^2 \\cdot f'(g(t)) \\cdot g'(t)$.",
    "s": "Heat at time $t$: $H(t) = \\bigl(f(g(t))\\bigr)^3$.\n\n$H'(t) = 3\\bigl(f(g(t))\\bigr)^2 \\times f'(g(t)) \\times g'(t)$.\n\nAt $t = 2$: $g(2) = 4$, $g'(2) = 5$, $f(4) = 2$, $f'(4) = 3$.\n\n$H'(2) = 3 \\times 2^2 \\times 3 \\times 5 = 180$ watts per second.",
    "solutionSteps": [
      {
        "explanation": "Compose the functions: the socket outputs \\(x = g(t)\\) and the heat is \\(h(x) = (f(x))^3\\), so the heat as a function of time is \\(H(t) = \\bigl(f(g(t))\\bigr)^3\\).",
        "workingOut": "H(t) = \\bigl(f(g(t))\\bigr)^3"
      },
      {
        "explanation": "Differentiate with the chain rule twice: the outer cube brings down a 3, then the inner composite differentiates by the given fact.",
        "workingOut": "H'(t) = 3\\bigl(f(g(t))\\bigr)^2 \\times f'(g(t)) \\times g'(t)"
      },
      {
        "explanation": "Collect the values at \\(t = 2\\): \\(g(2) = 4\\) watts, \\(g'(2) = 5\\) watts/second, \\(f(4) = 2\\), \\(f'(4) = 3\\).",
        "workingOut": "g(2) = 4, quad g'(2) = 5, quad f(4) = 2, quad f'(4) = 3"
      },
      {
        "explanation": "Substitute all values.",
        "workingOut": "H'(2) = 3 \\times 2^2 \\times 3 \\times 5 = 180"
      },
      {
        "explanation": "State the answer with units.",
        "workingOut": "H'(2) = 180 \\text{ watts per second}"
      }
    ]
  }
];
