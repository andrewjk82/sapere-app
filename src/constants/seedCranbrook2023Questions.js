export const CRANBROOK_2023_QUESTIONS = [
  // ─── Section I: Multiple Choice (Q1–10) ───────────────────────────────────

  {
    id: 'cra2023-mc1',
    topicId: 'y11a-3B',
    c: '3B',
    t: 'Functions, relations, and graphs',
    source: 'Cranbrook 2023 Trial Q1',
    type: 'multiple_choice',
    difficulty: 'easy',
    q: 'Which of the following sets of ordered pairs represents a one-to-many relationship?\n\n(A) $(1,1), (1,2), (2,3), (3,4)$\n\n(B) $(1,1), (2,2), (3,2), (4,3)$\n\n(C) $(1,1), (2,2), (3,3), (4,4)$\n\n(D) $(1,1), (1,2), (2,3), (3,3)$',
    a: '$(1,1), (1,2), (2,3), (3,4)$',
    opts: [
      '$(1,1), (1,2), (2,3), (3,4)$',
      '$(1,1), (2,2), (3,2), (4,3)$',
      '$(1,1), (2,2), (3,3), (4,4)$',
      '$(1,1), (1,2), (2,3), (3,3)$'
    ],
    h: 'One-to-many means one $x$-value maps to more than one $y$-value, while every $y$-value comes from only one $x$-value.',
    s: 'In option (A), $x=1$ maps to both $y=1$ and $y=2$ (one-to-many), and no $y$-value is repeated for different $x$-values. In option (D), $x=1$ maps to two $y$-values BUT $y=3$ also comes from two different $x$-values ($x=2$ and $x=3$), making it many-to-many. Options (B) is many-to-one and (C) is one-to-one. The answer is (A).',
    solutionSteps: [
      {
        explanation: 'Recall the definition of a one-to-many relation: at least one $x$-value is paired with more than one $y$-value, but each $y$-value is paired with only one $x$-value. We must check both directions for every option.',
        workingOut: '\\text{one-to-many: one } x \\to \\text{many } y, \\text{ each } y \\leftarrow \\text{one } x'
      },
      {
        explanation: 'Check option (A). The $x$-value $1$ maps to both $y=1$ and $y=2$, so it is "one-to-many" in the $x$ direction. Now check the $y$-values: $1, 2, 3, 4$ are all distinct, so no $y$ comes from two different $x$-values.',
        workingOut: 'x=1 \\to y=1, 2 \\quad \\checkmark \\qquad y\\text{-values } 1,2,3,4 \\text{ all distinct} \\quad \\checkmark'
      },
      {
        explanation: 'Check option (D) which also has $x=1$ mapping to two $y$-values. However $y=3$ is produced by both $x=2$ and $x=3$, so the relation is many-to-many, not one-to-many. Options (B) and (C) have no repeated $x$-values at all.',
        workingOut: '(D): y=3 \\leftarrow x=2 \\text{ and } x=3 \\implies \\text{many-to-many} \\; \\times'
      },
      {
        explanation: 'Therefore only option (A) satisfies the one-to-many definition.',
        workingOut: '\\text{Answer: (A)}'
      }
    ]
  },

  {
    id: 'cra2023-mc2',
    topicId: 'y12a-9D',
    c: '9D',
    t: 'Bivariate data',
    source: 'Cranbrook 2023 Trial Q2',
    graphData: {
      jsxGraph: {
        width: 380,
        height: 320,
        boundingbox: [-1, 11, 12, -1.5],
        boardOptions: { keepaspectratio: false },
        script: "board.suspendUpdate();\nboard.create('arrow', [[0,0],[12,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,0],[0,11]], {strokeColor:'black'});\nvar pts = [[1.5,2],[2.5,8],[4.5,7],[4.5,9],[5,6.5],[5,5],[6.5,4.5],[5.5,3],[9,9.5],[9,8.5],[11,6]];\nfor (var i=0;i<pts.length;i++){ board.create('point', pts[i], {name:'', size:3, color:'#475569', fixed:true}); }\nboard.create('point', [4,6.5], {name:'A', size:3, color:'#475569', fixed:true, label:{offset:[-14,2], fontSize:15}});\nboard.create('point', [7,4.5], {name:'B', size:3, color:'#475569', fixed:true, label:{offset:[10,2], fontSize:15}});\nboard.create('text', [4.5, -1.1, 'weight (kg)'], {fontSize:13});\nboard.create('text', [0.2, 10.6, 'height (cm)'], {fontSize:13});\nboard.unsuspendUpdate();"
      }
    },
    type: 'multiple_choice',
    difficulty: 'easy',
    q: 'The height and weight of a group of students is shown on a scatterplot, with weight (kg) on the horizontal axis and height (cm) on the vertical axis. Student A is plotted above and to the left of Student B. Which of the following statements is true?',
    a: 'Student A is taller and weighs less than Student B.',
    opts: [
      'Student A is taller and weighs more than Student B.',
      'Student A is taller and weighs less than Student B.',
      'Student A is shorter and weighs more than Student B.',
      'Student A is shorter and weighs less than Student B.'
    ],
    h: 'Read each axis separately: the vertical axis is height, the horizontal axis is weight.',
    s: 'Student A is higher on the plot, so A is taller (height is on the vertical axis). Student A is further left, so A weighs less (weight is on the horizontal axis). Therefore A is taller and weighs less than B.',
    solutionSteps: [
      {
        explanation: 'Identify what each axis measures: the vertical axis shows height in centimetres, and the horizontal axis shows weight in kilograms. Comparing two points means comparing their vertical positions for height and horizontal positions for weight.',
        workingOut: '\\text{vertical} = \\text{height (cm)}, \\quad \\text{horizontal} = \\text{weight (kg)}'
      },
      {
        explanation: 'Student A is plotted above Student B, meaning A has a larger vertical coordinate, so Student A is taller.',
        workingOut: 'A \\text{ above } B \\implies \\text{height}_A > \\text{height}_B'
      },
      {
        explanation: 'Student A is plotted to the left of Student B, meaning A has a smaller horizontal coordinate, so Student A weighs less.',
        workingOut: 'A \\text{ left of } B \\implies \\text{weight}_A < \\text{weight}_B'
      },
      {
        explanation: 'Combining both observations: Student A is taller and weighs less than Student B.',
        workingOut: '\\text{Answer: (B)}'
      }
    ]
  },

  {
    id: 'cra2023-mc3',
    topicId: 'y12a-9C',
    c: '9C',
    t: 'Quartiles and interquartile range',
    source: 'Cranbrook 2023 Trial Q3',
    type: 'multiple_choice',
    difficulty: 'medium',
    q: 'In a mathematics examination, 25% of students scored less than 40 marks, 75% of students scored less than 86 marks and the highest mark was 96. Given that the distribution is symmetrical with no outliers, what is the lowest mark and the median of this data set?',
    a: 'Lowest mark $= 30$, Median $= 63$',
    opts: [
      'Lowest mark $= 30$, Median $= 63$',
      'Lowest mark $= 30$, Median $= 68$',
      'Lowest mark $= 36$, Median $= 63$',
      'Lowest mark $= 36$, Median $= 68$'
    ],
    h: 'For a symmetrical distribution the median is midway between $Q_1$ and $Q_3$, and the minimum is as far below the median as the maximum is above it.',
    s: '$Q_1 = 40$ and $Q_3 = 86$. By symmetry, Median $= \\dfrac{40 + 86}{2} = 63$. The maximum $96$ is $33$ above the median, so the minimum is $33$ below: $63 - 33 = 30$.',
    solutionSteps: [
      {
        explanation: 'Translate the percentile information into quartiles: 25% of students scored below 40 means the first quartile is $Q_1 = 40$; 75% scored below 86 means the third quartile is $Q_3 = 86$.',
        workingOut: 'Q_1 = 40, \\quad Q_3 = 86, \\quad \\text{max} = 96'
      },
      {
        explanation: 'For a symmetrical distribution, the median lies exactly halfway between the first and third quartiles, so average $Q_1$ and $Q_3$.',
        workingOut: '\\text{Median} = \\dfrac{40 + 86}{2} = \\dfrac{126}{2} = 63'
      },
      {
        explanation: 'Symmetry also means the maximum and minimum are equidistant from the median. Find how far the maximum is above the median.',
        workingOut: '96 - 63 = 33'
      },
      {
        explanation: 'The minimum must be the same distance below the median, which gives the lowest mark.',
        workingOut: '\\text{Lowest mark} = 63 - 33 = 30'
      },
      {
        explanation: 'State the final answer: lowest mark 30 and median 63, which is option (A).',
        workingOut: '\\text{Lowest} = 30, \\; \\text{Median} = 63'
      }
    ]
  },

  {
    id: 'cra2023-mc4',
    topicId: 'y12a-1F',
    c: '1F',
    t: 'Summing an arithmetic series',
    source: 'Cranbrook 2023 Trial Q4',
    type: 'multiple_choice',
    difficulty: 'medium',
    q: 'In an arithmetic series, the sum of the first three terms is 21 and the sum of the first four terms is 36. What is the sum of the first five terms of this series?',
    a: '$55$',
    opts: ['$15$', '$51$', '$55$', '$57$'],
    h: 'Use $S_n = \\dfrac{n}{2}(2a + (n-1)d)$ to set up two simultaneous equations in $a$ and $d$.',
    s: '$S_3 = 3a + 3d = 21$ gives $a + d = 7$. $S_4 = 4a + 6d = 36$ gives $2a + 3d = 18$. Solving: $d = 4$, $a = 3$. Then $S_5 = 5a + 10d = 15 + 40 = 55$.',
    solutionSteps: [
      {
        explanation: 'Write the sum formula for an arithmetic series, $S_n = \\dfrac{n}{2}\\bigl(2a + (n-1)d\\bigr)$, and apply it with $n = 3$ using the given $S_3 = 21$.',
        workingOut: 'S_3 = \\dfrac{3}{2}(2a + 2d) = 3a + 3d = 21 \\implies a + d = 7'
      },
      {
        explanation: 'Apply the same formula with $n = 4$ using the given $S_4 = 36$ to get a second equation.',
        workingOut: 'S_4 = \\dfrac{4}{2}(2a + 3d) = 4a + 6d = 36 \\implies 2a + 3d = 18'
      },
      {
        explanation: 'Solve the two equations simultaneously. Substitute $a = 7 - d$ from the first equation into the second to eliminate $a$.',
        workingOut: '2(7 - d) + 3d = 18 \\implies 14 + d = 18 \\implies d = 4'
      },
      {
        explanation: 'Back-substitute $d = 4$ into $a + d = 7$ to find the first term.',
        workingOut: 'a = 7 - 4 = 3'
      },
      {
        explanation: 'Compute the sum of the first five terms with $a = 3$, $d = 4$.',
        workingOut: 'S_5 = \\dfrac{5}{2}(2 \\times 3 + 4 \\times 4) = \\dfrac{5}{2}(22) = 55'
      }
    ]
  },

  {
    id: 'cra2023-mc5',
    topicId: 'y11a-5F',
    c: '5F',
    t: 'Composite functions',
    source: 'Cranbrook 2023 Trial Q5',
    type: 'multiple_choice',
    difficulty: 'hard',
    q: 'Let $f(x) = \\sqrt{x}$ and $g(x) = \\dfrac{1}{x-1}$. What is the domain and range valid for both $f(g(x))$ and $g(f(x))$?',
    a: 'Domain: $(1, \\infty)$, Range $(0, \\infty)$',
    opts: [
      'Domain: $[-1, 1]$, Range $(-\\infty, \\infty)$',
      'Domain: $(0, \\infty)$, Range $(-\\infty, 0) \\cup (0, \\infty)$',
      'Domain: $[0, \\infty)$, Range $(0, \\infty)$',
      'Domain: $(1, \\infty)$, Range $(0, \\infty)$'
    ],
    h: 'Find the domain and range of each composite separately, then take the values common to both.',
    s: '$f(g(x)) = \\sqrt{\\dfrac{1}{x-1}}$ needs $\\dfrac{1}{x-1} > 0$, i.e. $x > 1$: domain $(1,\\infty)$, range $(0,\\infty)$.\n\n$g(f(x)) = \\dfrac{1}{\\sqrt{x}-1}$ needs $x \\geq 0$ and $\\sqrt{x} \\neq 1$: domain $[0,\\infty)\\setminus{1}$, range $(-\\infty,-1] \\cup (0,\\infty)$.\n\nThe domain common to both is $(1, \\infty)$ and the range common to both is $(0, \\infty)$.',
    solutionSteps: [
      {
        explanation: 'Form the first composite $f(g(x)) = \\sqrt{\\dfrac{1}{x-1}}$. The square root requires its argument to be non-negative, and the fraction cannot be zero, so we need $\\dfrac{1}{x-1} > 0$, which happens exactly when $x - 1 > 0$.',
        workingOut: 'f(g(x)) = \\sqrt{\\dfrac{1}{x-1}}, \\quad \\text{domain: } x > 1'
      },
      {
        explanation: 'Find the range of $f(g(x))$: as $x$ runs over $(1, \\infty)$, the inner value $\\dfrac{1}{x-1}$ takes every value in $(0, \\infty)$, and the square root of these values also covers $(0, \\infty)$.',
        workingOut: '\\text{range of } f(g(x)) = (0, \\infty)'
      },
      {
        explanation: 'Form the second composite $g(f(x)) = \\dfrac{1}{\\sqrt{x} - 1}$. It requires $x \\geq 0$ for the square root and $\\sqrt{x} \\neq 1$ (i.e. $x \\neq 1$) so the denominator is non-zero.',
        workingOut: 'g(f(x)) = \\dfrac{1}{\\sqrt{x}-1}, \\quad \\text{domain: } [0,\\infty)\\setminus{1}'
      },
      {
        explanation: 'Find the range of $g(f(x))$: $\\sqrt{x} - 1$ covers $[-1, \\infty)\\setminus{0}$, so its reciprocal covers $(-\\infty, -1] \\cup (0, \\infty)$.',
        workingOut: '\\text{range of } g(f(x)) = (-\\infty, -1] \\cup (0, \\infty)'
      },
      {
        explanation: 'Intersect the two domains and the two ranges to find what is valid for both composites: $(1,\\infty) \\cap [0,\\infty)\\setminus{1} = (1,\\infty)$ and $(0,\\infty) \\cap \\bigl((-\\infty,-1] \\cup (0,\\infty)\\bigr) = (0,\\infty)$.',
        workingOut: '\\text{Domain: } (1, \\infty), \\quad \\text{Range: } (0, \\infty) \\implies \\text{(D)}'
      }
    ]
  },

  {
    id: 'cra2023-mc6',
    topicId: 'y12a-1H',
    c: '1H',
    t: 'The limiting sum of a geometric series',
    source: 'Cranbrook 2023 Trial Q6',
    type: 'multiple_choice',
    difficulty: 'medium',
    q: 'The limiting sum of a geometric series is $\\dfrac{10}{9}$ and the sum of its first three terms is $\\dfrac{26}{25}$. What is the common ratio of this series?',
    a: '$0.40$',
    opts: ['$1.39$', '$1.25$', '$0.40$', '$0.25$'],
    h: 'Use $S_3 = S_\\infty(1 - r^3)$, which follows from $S_n = \\dfrac{a(1-r^n)}{1-r}$ and $S_\\infty = \\dfrac{a}{1-r}$.',
    s: '$S_3 = S_\\infty(1 - r^3)$, so $\\dfrac{26}{25} = \\dfrac{10}{9}(1 - r^3)$. Then $1 - r^3 = \\dfrac{26}{25} \\times \\dfrac{9}{10} = \\dfrac{117}{125}$, giving $r^3 = \\dfrac{8}{125}$ and $r = \\dfrac{2}{5} = 0.40$.',
    solutionSteps: [
      {
        explanation: 'Write the two relevant formulas: the partial sum $S_n = \\dfrac{a(1 - r^n)}{1 - r}$ and the limiting sum $S_\\infty = \\dfrac{a}{1-r}$ (valid for $|r| < 1$). Dividing the first by the second eliminates $a$.',
        workingOut: '\\dfrac{S_3}{S_\\infty} = 1 - r^3'
      },
      {
        explanation: 'Substitute the given values $S_3 = \\dfrac{26}{25}$ and $S_\\infty = \\dfrac{10}{9}$.',
        workingOut: '1 - r^3 = \\dfrac{26}{25} \\div \\dfrac{10}{9} = \\dfrac{26}{25} \\times \\dfrac{9}{10} = \\dfrac{234}{250} = \\dfrac{117}{125}'
      },
      {
        explanation: 'Solve for $r^3$ by rearranging.',
        workingOut: 'r^3 = 1 - \\dfrac{117}{125} = \\dfrac{8}{125}'
      },
      {
        explanation: 'Take the cube root of both sides. Both 8 and 125 are perfect cubes.',
        workingOut: 'r = \\sqrt[3]{\\dfrac{8}{125}} = \\dfrac{2}{5} = 0.40'
      },
      {
        explanation: 'Verify the answer is valid: $|0.40| < 1$, so the limiting sum exists. The answer is (C).',
        workingOut: '|r| = 0.40 < 1 \\quad \\checkmark'
      }
    ]
  },

  {
    id: 'cra2023-mc7',
    topicId: 'y11a-12F',
    c: '12F',
    t: 'Probability tree diagrams',
    source: 'Cranbrook 2023 Trial Q7',
    type: 'multiple_choice',
    difficulty: 'medium',
    q: 'In a bag of $n$ coloured discs, exactly 7 are red. Two discs are selected at random, without replacement. The probability that both discs are red is $\\dfrac{21}{55}$. Which quadratic equation could be used to find the value of $n$?',
    a: '$n^2 - n - 110 = 0$',
    opts: [
      '$n^2 + n + 110 = 0$',
      '$n^2 - n - 110 = 0$',
      '$n^2 + n - 110 = 0$',
      '$n^2 - n + 110 = 0$'
    ],
    h: 'P(both red) without replacement is $\\dfrac{7}{n} \\times \\dfrac{6}{n-1}$.',
    s: '$\\dfrac{7}{n} \\cdot \\dfrac{6}{n-1} = \\dfrac{21}{55}$, so $\\dfrac{42}{n(n-1)} = \\dfrac{21}{55}$. Cross-multiplying: $n(n-1) = \\dfrac{42 \\times 55}{21} = 110$, giving $n^2 - n - 110 = 0$.',
    solutionSteps: [
      {
        explanation: 'Write the probability of drawing two red discs without replacement using the multiplication rule: the first draw is red with probability $\\dfrac{7}{n}$, and given that, the second is red with probability $\\dfrac{6}{n-1}$ since one red disc and one disc overall have been removed.',
        workingOut: 'P(\\text{both red}) = \\dfrac{7}{n} \\times \\dfrac{6}{n-1} = \\dfrac{42}{n(n-1)}'
      },
      {
        explanation: 'Set this expression equal to the given probability $\\dfrac{21}{55}$.',
        workingOut: '\\dfrac{42}{n(n-1)} = \\dfrac{21}{55}'
      },
      {
        explanation: 'Cross-multiply and simplify. Note that $\\dfrac{42}{21} = 2$, so $n(n-1) = 2 \\times 55 = 110$.',
        workingOut: 'n(n-1) = \\dfrac{42 \\times 55}{21} = 110'
      },
      {
        explanation: 'Expand and move everything to one side to form the quadratic equation.',
        workingOut: 'n^2 - n - 110 = 0 \\implies \\text{(B)}'
      }
    ]
  },

  {
    id: 'cra2023-mc8',
    topicId: 'y12a-7D',
    c: '7D',
    t: 'Simple harmonic motion',
    source: 'Cranbrook 2023 Trial Q8',
    type: 'multiple_choice',
    difficulty: 'hard',
    q: 'A particle is moving in a straight line such that its displacement $x$ metres at time $t$ seconds from the origin is given by $x = k\\cos(at + b)$, where $a$, $b$ and $k$ are constants. The particle is stationary when $t = \\dfrac{5\\pi}{12}, \\dfrac{11\\pi}{12}, \\dfrac{17\\pi}{12}, \\ldots$ The initial acceleration of the particle is $6\\sqrt{3}\\ \\text{ms}^{-2}$. What could be the values of $a$, $b$ and $k$?',
    a: '$a = 2,\\ b = \\dfrac{\\pi}{6},\\ k = -3$',
    opts: [
      '$a = 4,\\ b = -\\dfrac{5\\pi}{6},\\ k = 3$',
      '$a = 2,\\ b = -\\dfrac{5\\pi}{6},\\ k = -3$',
      '$a = 2,\\ b = \\dfrac{\\pi}{6},\\ k = 3$',
      '$a = 2,\\ b = \\dfrac{\\pi}{6},\\ k = -3$'
    ],
    h: 'Stationary times are $\\dfrac{\\pi}{a}$ apart. Then test the initial acceleration $\\ddot{x}(0) = -ka^2\\cos b$ against $6\\sqrt{3}$.',
    s: 'The stationary times are spaced $\\dfrac{11\\pi}{12} - \\dfrac{5\\pi}{12} = \\dfrac{\\pi}{2}$ apart. Since $v = 0$ every half-period, $\\dfrac{\\pi}{a} = \\dfrac{\\pi}{2}$ gives $a = 2$. The acceleration is $\\ddot{x} = -ka^2\\cos(at+b)$, so $\\ddot{x}(0) = -4k\\cos b = 6\\sqrt{3}$. Testing $b = \\dfrac{\\pi}{6}$, $k = -3$: $-4(-3)\\cos\\dfrac{\\pi}{6} = 12 \\cdot \\dfrac{\\sqrt{3}}{2} = 6\\sqrt{3}$. ✓ The answer is (D).',
    solutionSteps: [
      {
        explanation: 'The particle is stationary when its velocity is zero. For $x = k\\cos(at+b)$, the velocity $\\dot{x} = -ka\\sin(at+b)$ vanishes every half-period, i.e. at intervals of $\\dfrac{\\pi}{a}$. Use the spacing of the given stationary times to find $a$.',
        workingOut: '\\dfrac{11\\pi}{12} - \\dfrac{5\\pi}{12} = \\dfrac{6\\pi}{12} = \\dfrac{\\pi}{2} = \\dfrac{\\pi}{a} \\implies a = 2'
      },
      {
        explanation: 'This immediately eliminates option (A), which has $a = 4$. Next, differentiate twice to find the acceleration function.',
        workingOut: '\\ddot{x} = -ka^2\\cos(at+b) = -4k\\cos(2t + b)'
      },
      {
        explanation: 'Apply the initial condition: at $t = 0$ the acceleration is $6\\sqrt{3}$.',
        workingOut: '\\ddot{x}(0) = -4k\\cos b = 6\\sqrt{3}'
      },
      {
        explanation: 'Test option (D): $b = \\dfrac{\\pi}{6}$, $k = -3$. Substitute and check, using $\\cos\\dfrac{\\pi}{6} = \\dfrac{\\sqrt{3}}{2}$.',
        workingOut: '-4(-3)\\cos\\dfrac{\\pi}{6} = 12 \\times \\dfrac{\\sqrt{3}}{2} = 6\\sqrt{3} \\quad \\checkmark'
      },
      {
        explanation: 'Verify a stationary time also fits: $\\dot{x} = 6\\sin(2t + \\tfrac{\\pi}{6}) = 0$ at $2t + \\tfrac{\\pi}{6} = \\pi$, i.e. $t = \\dfrac{5\\pi}{12}$ ✓. Check option (C) for contrast: $k = 3$ would give $\\ddot{x}(0) = -6\\sqrt{3}$, the wrong sign. The answer is (D).',
        workingOut: 't = \\dfrac{\\pi - \\pi/6}{2} = \\dfrac{5\\pi}{12} \\quad \\checkmark \\implies \\text{(D)}'
      }
    ]
  },

  {
    id: 'cra2023-mc9',
    topicId: 'y11a-11B',
    c: '11B',
    t: 'Solving trig equations',
    source: 'Cranbrook 2023 Trial Q9',
    type: 'multiple_choice',
    difficulty: 'medium',
    q: 'Consider the equation $\\left(\\sin\\theta - \\dfrac{\\sqrt{2}}{2}\\right)\\left(\\tan\\theta - \\dfrac{\\sqrt{3}}{3}\\right) = 0$. How many solutions are there in the interval $0 \\leq \\theta \\leq \\pi$?',
    a: '$3$',
    opts: ['$4$', '$3$', '$2$', '$1$'],
    h: 'Use the null factor law: solve $\\sin\\theta = \\dfrac{\\sqrt{2}}{2}$ and $\\tan\\theta = \\dfrac{\\sqrt{3}}{3}$ separately on $[0, \\pi]$.',
    s: '$\\sin\\theta = \\dfrac{\\sqrt{2}}{2}$ gives $\\theta = \\dfrac{\\pi}{4}, \\dfrac{3\\pi}{4}$ (two solutions in $[0,\\pi]$). $\\tan\\theta = \\dfrac{\\sqrt{3}}{3} = \\dfrac{1}{\\sqrt{3}}$ gives $\\theta = \\dfrac{\\pi}{6}$ only (the next solution $\\pi + \\dfrac{\\pi}{6}$ is outside the interval). Total: $3$ solutions.',
    solutionSteps: [
      {
        explanation: 'Apply the null factor law: a product equals zero exactly when at least one factor is zero. This splits the problem into two separate trigonometric equations.',
        workingOut: '\\sin\\theta = \\dfrac{\\sqrt{2}}{2} \\quad \\text{or} \\quad \\tan\\theta = \\dfrac{\\sqrt{3}}{3}'
      },
      {
        explanation: 'Solve $\\sin\\theta = \\dfrac{\\sqrt{2}}{2}$ on $[0, \\pi]$. Sine is positive in the first and second quadrants, with related angle $\\dfrac{\\pi}{4}$, so there are two solutions.',
        workingOut: '\\theta = \\dfrac{\\pi}{4} \\quad \\text{or} \\quad \\theta = \\pi - \\dfrac{\\pi}{4} = \\dfrac{3\\pi}{4}'
      },
      {
        explanation: 'Solve $\\tan\\theta = \\dfrac{\\sqrt{3}}{3} = \\dfrac{1}{\\sqrt{3}}$ on $[0, \\pi]$. Tangent has period $\\pi$, with related angle $\\dfrac{\\pi}{6}$. The first-quadrant solution is $\\dfrac{\\pi}{6}$; the next would be $\\dfrac{\\pi}{6} + \\pi > \\pi$, outside the interval. (Tangent is negative in the second quadrant, so no solution there.)',
        workingOut: '\\theta = \\dfrac{\\pi}{6} \\text{ only}'
      },
      {
        explanation: 'Count the distinct solutions: $\\dfrac{\\pi}{6}$, $\\dfrac{\\pi}{4}$, $\\dfrac{3\\pi}{4}$ — three in total, which is option (B).',
        workingOut: '3 \\text{ solutions} \\implies \\text{(B)}'
      }
    ]
  },

  {
    id: 'cra2023-mc10',
    topicId: 'y12a-4C',
    c: '4C',
    t: 'The definite integral and its properties',
    source: 'Cranbrook 2023 Trial Q10',
    graphData: {
      jsxGraph: {
        width: 420,
        height: 320,
        boundingbox: [-6, 4.5, 6, -4.5],
        boardOptions: { keepaspectratio: false },
        script: "board.suspendUpdate();\nboard.create('arrow', [[-6,0],[6,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-4.5],[0,4.5]], {strokeColor:'black'});\nvar f = function(x){ return 0.06*Math.pow(x,4) - 0.85*x*x + 1.2; };\nvar g = function(x){ return -0.05*Math.pow(x,3) + 0.55*x; };\nboard.create('functiongraph', [f, -5.2, 5.2], {strokeColor:'#1d4ed8',strokeWidth:2});\nboard.create('functiongraph', [g, -5.5, 5.5], {strokeColor:'#15803d',strokeWidth:2});\nfor (var k=2;k<=4;k++){ board.create('text',[k,0.15,''+k],{fontSize:11}); board.create('text',[-k,0.15,'-'+k],{fontSize:11}); }\nboard.create('text', [-3.4, -1.1, 'A'], {fontSize:15});\nboard.create('text', [-1.1, 0.9, 'B'], {fontSize:15});\nboard.create('text', [3.0, -1.6, 'C'], {fontSize:15});\nboard.create('text', [5.0, 3.2, 'y = f(x)'], {fontSize:12});\nboard.create('text', [4.6, -2.6, 'y = g(x)'], {fontSize:12});\nboard.create('text', [0.25, 4.1, 'y'], {fontSize:13});\nboard.create('text', [5.6, 0.4, 'x'], {fontSize:13});\nboard.unsuspendUpdate();"
      }
    },
    type: 'multiple_choice',
    difficulty: 'hard',
    q: 'The graphs of an even function $f(x)$ and an odd function $g(x)$ are shown on the same axes. Let $A = \\displaystyle\\int_{-2}^{-4} f(x)\\,dx$, $B = \\displaystyle\\int_{-2}^{0} g(x)\\,dx$ and $C = \\displaystyle\\int_{2}^{4} \\bigl(f(x) - g(x)\\bigr)\\,dx$. Which of the following expressions equals $\\displaystyle\\int_{0}^{4} g(x)\\,dx$?',
    a: '$-A - B - C$',
    opts: ['$A + B + C$', '$A - B + C$', '$-A + B - C$', '$-A - B - C$'],
    h: 'Use $f$ even ($\\int_{-b}^{-a} f = \\int_a^b f$), $g$ odd ($\\int_{-a}^{0} g = -\\int_0^a g$), and reversal of limits.',
    s: 'Since $A = \\int_{-2}^{-4} f\\,dx = -\\int_{-4}^{-2} f\\,dx$ and $f$ is even, $\\int_{-4}^{-2} f = \\int_{2}^{4} f$, so $\\int_2^4 f\\,dx = -A$.\n\nSince $g$ is odd, $B = \\int_{-2}^{0} g\\,dx = -\\int_{0}^{2} g\\,dx$, so $\\int_0^2 g\\,dx = -B$.\n\nFrom $C = \\int_2^4 f\\,dx - \\int_2^4 g\\,dx$: $\\int_2^4 g\\,dx = -A - C$.\n\nTherefore $\\int_0^4 g\\,dx = \\int_0^2 g + \\int_2^4 g = -B + (-A - C) = -A - B - C$.',
    solutionSteps: [
      {
        explanation: 'Deal with $A$ first. Its limits run backwards (from $-2$ down to $-4$), so reverse them, which changes the sign. Then use the even-function property $\\int_{-4}^{-2} f\\,dx = \\int_{2}^{4} f\\,dx$, since an even function has mirror symmetry about the $y$-axis.',
        workingOut: 'A = -\\int_{-4}^{-2} f\\,dx = -\\int_{2}^{4} f\\,dx \\implies \\int_2^4 f\\,dx = -A'
      },
      {
        explanation: 'Deal with $B$ using the odd-function property: the area pattern of an odd function on $[-a, 0]$ is the negative of that on $[0, a]$, so $\\int_{-2}^{0} g\\,dx = -\\int_{0}^{2} g\\,dx$.',
        workingOut: 'B = -\\int_0^2 g\\,dx \\implies \\int_0^2 g\\,dx = -B'
      },
      {
        explanation: 'Split $C$ using the linearity of the definite integral, then solve for $\\int_2^4 g\\,dx$ using the result from the first step.',
        workingOut: 'C = \\int_2^4 f\\,dx - \\int_2^4 g\\,dx = -A - \\int_2^4 g\\,dx \\implies \\int_2^4 g\\,dx = -A - C'
      },
      {
        explanation: 'Combine the pieces using the addition-of-intervals property $\\int_0^4 = \\int_0^2 + \\int_2^4$.',
        workingOut: '\\int_0^4 g\\,dx = (-B) + (-A - C) = -A - B - C \\implies \\text{(D)}'
      }
    ]
  },

  // ─── Section II: Short Answer ─────────────────────────────────────────────

  {
    id: 'cra2023-q11',
    topicId: 'y12a-9B',
    c: '9B',
    t: 'Grouped data and histograms',
    source: 'Cranbrook 2023 Trial Q11',
    graphData: {
      jsxGraph: {
        width: 440,
        height: 320,
        boundingbox: [-0.6, 165, 7, -45],
        boardOptions: { keepaspectratio: false },
        script: "board.suspendUpdate();\nboard.create('arrow', [[0,0],[7,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,0],[0,160]], {strokeColor:'black'});\nboard.create('arrow', [[6.6,0],[6.6,160]], {strokeColor:'black'});\nvar freq = [145,118,65,54,25,17];\nvar labels = ['Internet','Printer','Password','Files','Slow','Other'];\nfor (var i=0;i<freq.length;i++){ var xc=i+0.6; board.create('polygon', [[xc-0.32,0],[xc+0.32,0],[xc+0.32,freq[i]],[xc-0.32,freq[i]]], {fillColor:'#94a3b8', fillOpacity:0.7, borders:{strokeColor:'#475569'}, vertices:{visible:false}, fixed:true}); board.create('text', [xc-0.3, -12, labels[i]], {fontSize:9}); }\nvar cum=0, total=424, prev=null;\nfor (var j=0;j<freq.length;j++){ cum+=freq[j]; var y=(cum/total)*150; var xp=j+0.6; var p=board.create('point',[xp,y],{name:'',size:2,color:'#1e293b',fixed:true}); if(prev){ board.create('segment',[prev,p],{strokeColor:'#1e293b',strokeWidth:1.5}); } prev=p; }\nfor (var t=0;t<=100;t+=20){ board.create('text',[6.7,(t/100)*150-3,t+'%'],{fontSize:9}); }\nboard.create('text', [-0.5, 158, 'Frequency'], {fontSize:11});\nboard.unsuspendUpdate();"
      }
    },
    type: 'short_answer',
    difficulty: 'easy',
    q: 'A company records the type of issues for IT support over a period of time. The frequencies shown in the Pareto chart are: Internet Speed 144, Printer Error 118, Forgotten Password 64, Missing Files 54, Slow Computer 26, Other 17. What percentage of issues were due to "Printer Error" or "Forgotten Password"? Answer to the nearest whole percent.',
    a: '$43\\%$',
    opts: [],
    h: 'Add the two relevant frequencies and divide by the total of all frequencies.',
    s: 'Total $= 144 + 118 + 64 + 54 + 26 + 17 = 423$. Printer Error + Forgotten Password $= 118 + 64 = 182$. Percentage $= \\dfrac{182}{423} \\times 100\\% \\approx 43\\%$.',
    solutionSteps: [
      {
        explanation: 'Find the total number of recorded issues by adding all six frequencies, because a percentage must be taken out of the whole data set.',
        workingOut: '144 + 118 + 64 + 54 + 26 + 17 = 423'
      },
      {
        explanation: 'Add the frequencies of the two categories asked about: Printer Error and Forgotten Password.',
        workingOut: '118 + 64 = 182'
      },
      {
        explanation: 'Express this count as a percentage of the total by dividing and multiplying by 100.',
        workingOut: '\\dfrac{182}{423} \\times 100\\% = 43.03\\ldots\\%'
      },
      {
        explanation: 'Round to the nearest whole percent as required.',
        workingOut: '\\approx 43\\%'
      }
    ]
  },

  {
    id: 'cra2023-q12',
    topicId: 'y11a-9A',
    c: '9A',
    t: 'Tangents and the derivative',
    source: 'Cranbrook 2023 Trial Q12',
    type: 'short_answer',
    difficulty: 'medium',
    q: 'Find the equation of the normal to the curve $y = x^3 - 2x$ at the point $(-1, 1)$.',
    a: '$y = -x$',
    opts: [],
    h: 'The normal is perpendicular to the tangent: its gradient is the negative reciprocal of $\\dfrac{dy}{dx}$ at the point.',
    s: '$\\dfrac{dy}{dx} = 3x^2 - 2$. At $x = -1$: gradient of tangent $= 3 - 2 = 1$. Gradient of normal $= -1$. Equation: $y - 1 = -(x + 1)$, i.e. $y = -x$.',
    solutionSteps: [
      {
        explanation: 'Differentiate the curve to obtain the gradient function, using the power rule term by term: the derivative of $x^3$ is $3x^2$ and the derivative of $-2x$ is $-2$.',
        workingOut: '\\dfrac{dy}{dx} = 3x^2 - 2'
      },
      {
        explanation: 'Evaluate the derivative at $x = -1$ to find the gradient of the tangent at the given point.',
        workingOut: 'm_{\\text{tangent}} = 3(-1)^2 - 2 = 3 - 2 = 1'
      },
      {
        explanation: 'The normal is perpendicular to the tangent, so its gradient is the negative reciprocal of the tangent gradient: $m_1 m_2 = -1$.',
        workingOut: 'm_{\\text{normal}} = -\\dfrac{1}{1} = -1'
      },
      {
        explanation: 'Use the point–gradient form of a line, $y - y_1 = m(x - x_1)$, with the point $(-1, 1)$ and gradient $-1$.',
        workingOut: 'y - 1 = -1\\,(x - (-1)) = -(x + 1)'
      },
      {
        explanation: 'Simplify to obtain the equation of the normal, and verify the point lies on it: at $x = -1$, $y = 1$ ✓.',
        workingOut: 'y = -x'
      }
    ]
  },

  {
    id: 'cra2023-q13',
    topicId: 'y11a-3I',
    c: '3I',
    t: 'Direct and inverse variation',
    source: 'Cranbrook 2023 Trial Q13',
    type: 'short_answer',
    difficulty: 'easy',
    q: 'The time it takes to complete a task varies inversely with the number of people assigned. It takes 5 people to complete a task in 4 hours. Find the amount of time it would take 8 people to complete the same task.',
    a: '$2.5$ hours',
    opts: [],
    h: 'Inverse variation means $t = \\dfrac{k}{n}$ for a constant $k$. Find $k$ first.',
    s: '$t = \\dfrac{k}{n}$. With $n = 5$, $t = 4$: $k = 20$. With $n = 8$: $t = \\dfrac{20}{8} = 2.5$ hours.',
    solutionSteps: [
      {
        explanation: 'Translate "varies inversely" into an equation: time $t$ equals a constant $k$ divided by the number of people $n$. This is the defining form of inverse variation.',
        workingOut: 't = \\dfrac{k}{n}'
      },
      {
        explanation: 'Substitute the given pair of values ($n = 5$ people, $t = 4$ hours) to find the constant of variation $k$.',
        workingOut: '4 = \\dfrac{k}{5} \\implies k = 20'
      },
      {
        explanation: 'Use the now-complete model $t = \\dfrac{20}{n}$ with $n = 8$ people to find the required time.',
        workingOut: 't = \\dfrac{20}{8} = 2.5 \\text{ hours}'
      },
      {
        explanation: 'Check for reasonableness: more people should take less time, and $2.5 < 4$ ✓. State the answer with units.',
        workingOut: 't = 2.5 \\text{ hours } (= 2 \\text{ hours } 30 \\text{ min})'
      }
    ]
  },

  {
    id: 'cra2023-q14a',
    topicId: 'y12a-5G',
    c: '5G',
    t: 'Differentiation of logarithmic functions',
    source: 'Cranbrook 2023 Trial Q14(a)',
    type: 'short_answer',
    difficulty: 'medium',
    q: 'Find $\\dfrac{dy}{dx}$, given $y = (\\ln x)^2$.',
    a: '$\\dfrac{dy}{dx} = \\dfrac{2\\ln x}{x}$',
    opts: [],
    h: 'Use the chain rule with outer function $u^2$ and inner function $u = \\ln x$.',
    s: 'By the chain rule: $\\dfrac{dy}{dx} = 2\\ln x \\cdot \\dfrac{1}{x} = \\dfrac{2\\ln x}{x}$.',
    solutionSteps: [
      {
        explanation: 'Recognise the composite structure: $y = u^2$ where $u = \\ln x$. The chain rule says $\\dfrac{dy}{dx} = \\dfrac{dy}{du} \\cdot \\dfrac{du}{dx}$, because the function is an outer power applied to an inner logarithm.',
        workingOut: 'y = u^2, \\quad u = \\ln x'
      },
      {
        explanation: 'Differentiate the outer function with respect to $u$ (bring down the power and reduce it by one), and the inner function with respect to $x$ (the derivative of $\\ln x$ is $\\dfrac{1}{x}$).',
        workingOut: '\\dfrac{dy}{du} = 2u, \\quad \\dfrac{du}{dx} = \\dfrac{1}{x}'
      },
      {
        explanation: 'Multiply the two derivatives and substitute back $u = \\ln x$ to express the answer in terms of $x$.',
        workingOut: '\\dfrac{dy}{dx} = 2\\ln x \\times \\dfrac{1}{x} = \\dfrac{2\\ln x}{x}'
      }
    ]
  },

  {
    id: 'cra2023-q14b',
    topicId: 'y12a-5I',
    c: '5I',
    t: 'Integration of the reciprocal function',
    source: 'Cranbrook 2023 Trial Q14(b)',
    type: 'short_answer',
    difficulty: 'medium',
    q: 'Hence or otherwise, find $\\displaystyle\\int_1^e \\dfrac{\\ln(x^2)}{2x}\\,dx$.',
    a: '$\\dfrac{1}{2}$',
    opts: [],
    h: 'Simplify $\\ln(x^2) = 2\\ln x$ first, then use part (a): the integrand becomes $\\dfrac{\\ln x}{x}$, which is half the derivative of $(\\ln x)^2$.',
    s: '$\\dfrac{\\ln(x^2)}{2x} = \\dfrac{2\\ln x}{2x} = \\dfrac{\\ln x}{x}$. From part (a), $\\dfrac{d}{dx}(\\ln x)^2 = \\dfrac{2\\ln x}{x}$, so $\\displaystyle\\int \\dfrac{\\ln x}{x}\\,dx = \\dfrac{(\\ln x)^2}{2}$. Hence $\\displaystyle\\int_1^e \\dfrac{\\ln x}{x}\\,dx = \\left[\\dfrac{(\\ln x)^2}{2}\\right]_1^e = \\dfrac{1}{2} - 0 = \\dfrac{1}{2}$.',
    solutionSteps: [
      {
        explanation: 'Simplify the integrand first using the logarithm power law $\\ln(x^2) = 2\\ln x$, which cancels with the 2 in the denominator.',
        workingOut: '\\dfrac{\\ln(x^2)}{2x} = \\dfrac{2\\ln x}{2x} = \\dfrac{\\ln x}{x}'
      },
      {
        explanation: 'Use part (a) in reverse ("hence"): since $\\dfrac{d}{dx}(\\ln x)^2 = \\dfrac{2\\ln x}{x}$, dividing by 2 shows that $\\dfrac{(\\ln x)^2}{2}$ is an antiderivative of $\\dfrac{\\ln x}{x}$.',
        workingOut: '\\int \\dfrac{\\ln x}{x}\\,dx = \\dfrac{(\\ln x)^2}{2} + C'
      },
      {
        explanation: 'Apply the fundamental theorem of calculus: evaluate the antiderivative at the limits $x = e$ and $x = 1$.',
        workingOut: '\\left[\\dfrac{(\\ln x)^2}{2}\\right]_1^e = \\dfrac{(\\ln e)^2}{2} - \\dfrac{(\\ln 1)^2}{2}'
      },
      {
        explanation: 'Simplify using $\\ln e = 1$ and $\\ln 1 = 0$ to obtain the exact value.',
        workingOut: '= \\dfrac{1}{2} - 0 = \\dfrac{1}{2}'
      }
    ]
  },

  {
    id: 'cra2023-q15',
    topicId: 'y12a-6D',
    c: '6D',
    t: 'Integrating the trig functions',
    source: 'Cranbrook 2023 Trial Q15',
    type: 'short_answer',
    difficulty: 'medium',
    q: 'The graph of the primitive function of $f(x) = \\tan^2 x$ crosses the $x$-axis at $x = \\dfrac{\\pi}{3}$. Find the primitive function, leaving all values in exact form.',
    a: '$F(x) = \\tan x - x + \\dfrac{\\pi}{3} - \\sqrt{3}$',
    opts: [],
    h: 'Use the Pythagorean identity $\\tan^2 x = \\sec^2 x - 1$ to integrate, then use $F\\!\\left(\\dfrac{\\pi}{3}\\right) = 0$ to find the constant.',
    s: '$\\displaystyle\\int \\tan^2 x\\,dx = \\int (\\sec^2 x - 1)\\,dx = \\tan x - x + C$. Since $F\\!\\left(\\dfrac{\\pi}{3}\\right) = 0$: $\\sqrt{3} - \\dfrac{\\pi}{3} + C = 0$, so $C = \\dfrac{\\pi}{3} - \\sqrt{3}$. Hence $F(x) = \\tan x - x + \\dfrac{\\pi}{3} - \\sqrt{3}$.',
    solutionSteps: [
      {
        explanation: 'Rewrite $\\tan^2 x$ using the Pythagorean identity $\\sec^2 x = 1 + \\tan^2 x$, because $\\tan^2 x$ has no direct antiderivative but $\\sec^2 x$ integrates to $\\tan x$.',
        workingOut: '\\tan^2 x = \\sec^2 x - 1'
      },
      {
        explanation: 'Integrate term by term: the antiderivative of $\\sec^2 x$ is $\\tan x$, and the antiderivative of $1$ is $x$. Include the constant of integration $C$.',
        workingOut: 'F(x) = \\int (\\sec^2 x - 1)\\,dx = \\tan x - x + C'
      },
      {
        explanation: 'Apply the given condition: the primitive crosses the $x$-axis at $x = \\dfrac{\\pi}{3}$, meaning $F\\!\\left(\\dfrac{\\pi}{3}\\right) = 0$. Substitute, using $\\tan\\dfrac{\\pi}{3} = \\sqrt{3}$.',
        workingOut: '\\sqrt{3} - \\dfrac{\\pi}{3} + C = 0'
      },
      {
        explanation: 'Solve for the constant $C$.',
        workingOut: 'C = \\dfrac{\\pi}{3} - \\sqrt{3}'
      },
      {
        explanation: 'State the complete primitive function in exact form.',
        workingOut: 'F(x) = \\tan x - x + \\dfrac{\\pi}{3} - \\sqrt{3}'
      }
    ]
  },

  {
    id: 'cra2023-q16a',
    topicId: 'y11a-4D',
    c: '4D',
    t: 'Odd and even symmetry',
    source: 'Cranbrook 2023 Trial Q16(a)',
    type: 'short_answer',
    difficulty: 'medium',
    q: 'Consider the function $f(x) = -\\sin\\!\\left(\\dfrac{1}{2}(x - \\pi)\\right)$. Show that $f(x)$ is even.',
    a: 'Expanding gives $f(x) = \\cos\\!\\left(\\dfrac{x}{2}\\right)$, and since cosine is even, $f(-x) = \\cos\\!\\left(-\\dfrac{x}{2}\\right) = \\cos\\!\\left(\\dfrac{x}{2}\\right) = f(x)$.',
    opts: [],
    h: 'Expand $\\sin\\!\\left(\\dfrac{x}{2} - \\dfrac{\\pi}{2}\\right)$ with the compound angle formula, or check $f(-x) = f(x)$ directly.',
    s: '$f(x) = -\\sin\\!\\left(\\dfrac{x}{2} - \\dfrac{\\pi}{2}\\right) = -\\left[\\sin\\dfrac{x}{2}\\cos\\dfrac{\\pi}{2} - \\cos\\dfrac{x}{2}\\sin\\dfrac{\\pi}{2}\\right] = -\\left[0 - \\cos\\dfrac{x}{2}\\right] = \\cos\\dfrac{x}{2}$.\n\nThen $f(-x) = \\cos\\!\\left(-\\dfrac{x}{2}\\right) = \\cos\\dfrac{x}{2} = f(x)$, so $f$ is even.',
    solutionSteps: [
      {
        explanation: 'Distribute the $\\dfrac{1}{2}$ inside the sine so the expression is in the standard compound-angle form $\\sin(A - B)$.',
        workingOut: 'f(x) = -\\sin\\!\\left(\\dfrac{x}{2} - \\dfrac{\\pi}{2}\\right)'
      },
      {
        explanation: 'Expand using the compound angle formula $\\sin(A - B) = \\sin A\\cos B - \\cos A\\sin B$ with $A = \\dfrac{x}{2}$ and $B = \\dfrac{\\pi}{2}$.',
        workingOut: '\\sin\\!\\left(\\dfrac{x}{2} - \\dfrac{\\pi}{2}\\right) = \\sin\\dfrac{x}{2}\\cos\\dfrac{\\pi}{2} - \\cos\\dfrac{x}{2}\\sin\\dfrac{\\pi}{2}'
      },
      {
        explanation: 'Evaluate the exact values $\\cos\\dfrac{\\pi}{2} = 0$ and $\\sin\\dfrac{\\pi}{2} = 1$, then apply the leading negative sign.',
        workingOut: 'f(x) = -\\left(0 - \\cos\\dfrac{x}{2}\\right) = \\cos\\dfrac{x}{2}'
      },
      {
        explanation: 'Test the even-function definition $f(-x) = f(x)$, using the fact that cosine is an even function: $\\cos(-u) = \\cos u$.',
        workingOut: 'f(-x) = \\cos\\!\\left(-\\dfrac{x}{2}\\right) = \\cos\\dfrac{x}{2} = f(x)'
      },
      {
        explanation: 'Since $f(-x) = f(x)$ for all $x$, the function is even, as required.',
        workingOut: 'f \\text{ is even} \\quad \\blacksquare'
      }
    ]
  },

  {
    id: 'cra2023-q16b',
    topicId: 'y12a-6E',
    c: '6E',
    t: 'Applications of integration of trig',
    source: 'Cranbrook 2023 Trial Q16(b)',
    type: 'short_answer',
    difficulty: 'medium',
    q: 'Hence, or otherwise, find the area bounded by the curve $y = f(x) = -\\sin\\!\\left(\\dfrac{1}{2}(x - \\pi)\\right)$ and the $x$-axis in the interval $[-\\pi, \\pi]$.',
    a: '$4$ square units',
    opts: [],
    h: 'From part (a), $f(x) = \\cos\\dfrac{x}{2}$, which is non-negative on $[-\\pi, \\pi]$. Use the even symmetry to double the integral over $[0, \\pi]$.',
    s: 'Since $f(x) = \\cos\\dfrac{x}{2} \\geq 0$ on $[-\\pi, \\pi]$ (as $\\dfrac{x}{2} \\in [-\\dfrac{\\pi}{2}, \\dfrac{\\pi}{2}]$):\n\nArea $= \\displaystyle\\int_{-\\pi}^{\\pi} \\cos\\dfrac{x}{2}\\,dx = 2\\int_0^{\\pi} \\cos\\dfrac{x}{2}\\,dx = 2\\left[2\\sin\\dfrac{x}{2}\\right]_0^{\\pi} = 4(1 - 0) = 4$.',
    solutionSteps: [
      {
        explanation: 'Use the result of part (a): $f(x) = \\cos\\dfrac{x}{2}$. Check the sign on the interval: for $x \\in [-\\pi, \\pi]$, the argument $\\dfrac{x}{2}$ lies in $\\left[-\\dfrac{\\pi}{2}, \\dfrac{\\pi}{2}\\right]$ where cosine is non-negative, so the curve does not dip below the $x$-axis and the area equals the integral directly.',
        workingOut: 'f(x) = \\cos\\dfrac{x}{2} \\geq 0 \\text{ on } [-\\pi, \\pi]'
      },
      {
        explanation: 'Exploit the even symmetry proven in part (a): the integral over the symmetric interval $[-\\pi, \\pi]$ is twice the integral over $[0, \\pi]$.',
        workingOut: '\\text{Area} = \\int_{-\\pi}^{\\pi} \\cos\\dfrac{x}{2}\\,dx = 2\\int_0^{\\pi} \\cos\\dfrac{x}{2}\\,dx'
      },
      {
        explanation: 'Integrate $\\cos\\dfrac{x}{2}$: the antiderivative of $\\cos(ax)$ is $\\dfrac{1}{a}\\sin(ax)$, and here $a = \\dfrac{1}{2}$ so the factor is $2$.',
        workingOut: '2\\left[2\\sin\\dfrac{x}{2}\\right]_0^{\\pi}'
      },
      {
        explanation: 'Evaluate at the limits using $\\sin\\dfrac{\\pi}{2} = 1$ and $\\sin 0 = 0$.',
        workingOut: '= 4\\left(\\sin\\dfrac{\\pi}{2} - \\sin 0\\right) = 4(1 - 0) = 4'
      },
      {
        explanation: 'State the final answer with units.',
        workingOut: '\\text{Area} = 4 \\text{ square units}'
      }
    ]
  },

  {
    id: 'cra2023-q17a',
    topicId: 'y12a-10A',
    c: '10A',
    t: 'Probability distributions',
    source: 'Cranbrook 2023 Trial Q17(a)',
    type: 'short_answer',
    difficulty: 'easy',
    q: 'Jason buys a ticket in a lottery, where the first prize is $10,000. Tickets cost $20 each, and the prize distribution is: $P(X=0) = 0.75$, $P(X=20) = m$, $P(X=100) = 0.03$, $P(X=500) = 0.002$, $P(X=5000) = 0.001$, $P(X=10\\,000) = 0.0001$. Find the value of $m$.',
    a: '$m = 0.2169$',
    opts: [],
    h: 'The probabilities in a discrete distribution must sum to 1.',
    s: '$0.75 + m + 0.03 + 0.002 + 0.001 + 0.0001 = 1$, so $m = 1 - 0.7831 = 0.2169$.',
    solutionSteps: [
      {
        explanation: 'Apply the fundamental property of a probability distribution: all probabilities must sum to exactly 1.',
        workingOut: '0.75 + m + 0.03 + 0.002 + 0.001 + 0.0001 = 1'
      },
      {
        explanation: 'Add the known probabilities together.',
        workingOut: '0.75 + 0.03 + 0.002 + 0.001 + 0.0001 = 0.7831'
      },
      {
        explanation: 'Solve for $m$ by subtracting from 1.',
        workingOut: 'm = 1 - 0.7831 = 0.2169'
      }
    ]
  },

  {
    id: 'cra2023-q17b',
    topicId: 'y12a-10C',
    c: '10C',
    t: 'Mean and variance of a distribution',
    source: 'Cranbrook 2023 Trial Q17(b)',
    type: 'short_answer',
    difficulty: 'medium',
    q: 'Using the lottery distribution with $m = 0.2169$ (prizes 0, 20, 100, 500, 5000, 10000 with probabilities 0.75, 0.2169, 0.03, 0.002, 0.001, 0.0001) and a ticket price of $20, show that Jason is expected to lose $5.66 every time he plays this lottery.',
    a: '$E(X) = 14.338$, so expected loss $= 20 - 14.338 = 5.662 \\approx \\$5.66$',
    opts: [],
    h: 'Compute $E(X) = \\sum x \\cdot P(X=x)$, then compare with the \\$20 ticket price.',
    s: '$E(X) = 0(0.75) + 20(0.2169) + 100(0.03) + 500(0.002) + 5000(0.001) + 10000(0.0001)$\n$= 0 + 4.338 + 3 + 1 + 5 + 1 = 14.338$.\n\nExpected loss $= 20 - 14.338 = 5.662 \\approx \\$5.66$. ✓',
    solutionSteps: [
      {
        explanation: 'Write the formula for the expected value of a discrete random variable: multiply each prize value by its probability and sum.',
        workingOut: 'E(X) = \\sum x\\,P(X = x)'
      },
      {
        explanation: 'Substitute each prize–probability pair into the formula.',
        workingOut: 'E(X) = 0(0.75) + 20(0.2169) + 100(0.03) + 500(0.002) + 5000(0.001) + 10000(0.0001)'
      },
      {
        explanation: 'Evaluate each term separately to keep the arithmetic transparent.',
        workingOut: '= 0 + 4.338 + 3 + 1 + 5 + 1 = 14.338'
      },
      {
        explanation: 'The expected winnings are $14.338 per game, but each ticket costs $20. The expected loss is the difference between the cost and the expected return.',
        workingOut: '\\text{Expected loss} = 20 - 14.338 = 5.662'
      },
      {
        explanation: 'Round to the nearest cent: Jason expects to lose $5.66 per play, as required.',
        workingOut: '\\approx $5.66 \\quad \\blacksquare'
      }
    ]
  },

  {
    id: 'cra2023-q17c',
    topicId: 'y12a-10C',
    c: '10C',
    t: 'Mean and variance of a distribution',
    source: 'Cranbrook 2023 Trial Q17(c)',
    type: 'short_answer',
    difficulty: 'medium',
    q: 'Find the variance of the lottery prize distribution (prizes 0, 20, 100, 500, 5000, 10000 with probabilities 0.75, 0.2169, 0.03, 0.002, 0.001, 0.0001), given $E(X) = 14.338$.',
    a: '$\\text{Var}(X) \\approx 35681.18$',
    opts: [],
    h: 'Use $\\text{Var}(X) = E(X^2) - [E(X)]^2$.',
    s: '$E(X^2) = 0 + 400(0.2169) + 10000(0.03) + 250000(0.002) + 25000000(0.001) + 100000000(0.0001)$\n$= 86.76 + 300 + 500 + 25000 + 10000 = 35886.76$.\n\n$\\text{Var}(X) = 35886.76 - (14.338)^2 = 35886.76 - 205.58 \\approx 35681.18$.',
    solutionSteps: [
      {
        explanation: 'Write the computational formula for variance: $\\text{Var}(X) = E(X^2) - [E(X)]^2$. We first need $E(X^2)$, the expected value of the squared prizes.',
        workingOut: 'E(X^2) = \\sum x^2\\,P(X = x)'
      },
      {
        explanation: 'Square each prize value and multiply by its probability.',
        workingOut: 'E(X^2) = 0^2(0.75) + 20^2(0.2169) + 100^2(0.03) + 500^2(0.002) + 5000^2(0.001) + 10000^2(0.0001)'
      },
      {
        explanation: 'Evaluate each term: $400 \\times 0.2169 = 86.76$, $10^4 \\times 0.03 = 300$, $2.5\\times10^5 \\times 0.002 = 500$, $2.5\\times10^7 \\times 0.001 = 25000$, $10^8 \\times 0.0001 = 10000$.',
        workingOut: 'E(X^2) = 86.76 + 300 + 500 + 25000 + 10000 = 35886.76'
      },
      {
        explanation: 'Square the mean found in part (b).',
        workingOut: '[E(X)]^2 = (14.338)^2 = 205.578\\ldots'
      },
      {
        explanation: 'Subtract to obtain the variance.',
        workingOut: '\\text{Var}(X) = 35886.76 - 205.58 \\approx 35681.18'
      }
    ]
  },

  {
    id: 'cra2023-q18a',
    topicId: 'y11a-8G',
    c: '8G',
    t: 'Applications',
    source: 'Cranbrook 2023 Trial Q18(a)',
    type: 'short_answer',
    difficulty: 'easy',
    q: 'Ben is cooking a pizza. The temperature of the pizza oven is modelled by $T = 175 - 150 \\times (0.9)^{0.2t}$, where $T$ is the temperature of the oven (°C) at a time $t$ minutes since the oven was switched on. What was the initial temperature of the oven?',
    a: '$25°$C',
    opts: [],
    h: 'Substitute $t = 0$ into the model.',
    s: 'At $t = 0$: $T = 175 - 150(0.9)^0 = 175 - 150 = 25°$C.',
    solutionSteps: [
      {
        explanation: '"Initial" means at the moment the oven was switched on, i.e. $t = 0$. Substitute this into the temperature model.',
        workingOut: 'T = 175 - 150 \\times (0.9)^{0.2 \\times 0}'
      },
      {
        explanation: 'Any non-zero number raised to the power 0 equals 1, so $(0.9)^0 = 1$.',
        workingOut: 'T = 175 - 150 \\times 1 = 25'
      },
      {
        explanation: 'State the answer with units.',
        workingOut: 'T_{\\text{initial}} = 25\\,°\\text{C}'
      }
    ]
  },

  {
    id: 'cra2023-q18b',
    topicId: 'y11a-9J',
    c: '9J',
    t: 'Rates of change',
    source: 'Cranbrook 2023 Trial Q18(b)',
    type: 'short_answer',
    difficulty: 'medium',
    q: 'For the oven model $T = 175 - 150 \\times (0.9)^{0.2t}$, calculate the average rate at which the temperature changes per minute from $t = 25$ to $t = 75$, correct to two decimal places.',
    a: '$\\approx 1.15$ °C per minute',
    opts: [],
    h: 'Average rate of change $= \\dfrac{T(75) - T(25)}{75 - 25}$.',
    s: '$T(25) = 175 - 150(0.9)^5 = 175 - 88.5735 = 86.4265$.\n$T(75) = 175 - 150(0.9)^{15} = 175 - 30.8837 = 144.1163$.\n\nAverage rate $= \\dfrac{144.1163 - 86.4265}{50} = \\dfrac{57.6898}{50} \\approx 1.15$ °C/min.',
    solutionSteps: [
      {
        explanation: 'The average rate of change of $T$ over an interval is the change in temperature divided by the change in time — the gradient of the chord between the two points on the curve.',
        workingOut: '\\text{Average rate} = \\dfrac{T(75) - T(25)}{75 - 25}'
      },
      {
        explanation: 'Evaluate the model at $t = 25$. Note $0.2 \\times 25 = 5$, so the exponent is 5.',
        workingOut: 'T(25) = 175 - 150(0.9)^5 = 175 - 150(0.59049) = 86.4265'
      },
      {
        explanation: 'Evaluate the model at $t = 75$. Note $0.2 \\times 75 = 15$.',
        workingOut: 'T(75) = 175 - 150(0.9)^{15} = 175 - 150(0.20589) = 144.1163'
      },
      {
        explanation: 'Substitute both values into the average rate formula and divide by the 50-minute interval.',
        workingOut: '\\dfrac{144.1163 - 86.4265}{50} = \\dfrac{57.6898}{50} = 1.1538'
      },
      {
        explanation: 'Round to two decimal places as required. The rate is positive because the oven is heating up.',
        workingOut: '\\approx 1.15\\ °\\text{C per minute}'
      }
    ]
  },

  {
    id: 'cra2023-q18c',
    topicId: 'y12a-5K',
    c: '5K',
    t: 'Calculus with other bases',
    source: 'Cranbrook 2023 Trial Q18(c)',
    type: 'short_answer',
    difficulty: 'hard',
    q: 'For the oven model $T = 175 - 150 \\times (0.9)^{0.2t}$: Ben can place the pizza in the oven when the instantaneous rate of change of temperature is less than or equal to $1°$C per minute. Given that Ben turned the oven on at 10:30 am, find the earliest time that Ben can place the pizza in the oven, correct to the nearest minute.',
    a: '11:25 am (about 55 minutes after switch-on)',
    opts: [],
    h: 'Differentiate using $\\dfrac{d}{dt}a^{kt} = k\\ln a \\cdot a^{kt}$, set $\\dfrac{dT}{dt} \\leq 1$ and solve for $t$ with logarithms.',
    s: '$\\dfrac{dT}{dt} = -150 \\times 0.2\\ln(0.9) \\times (0.9)^{0.2t} = -30\\ln(0.9)(0.9)^{0.2t} \\approx 3.1608(0.9)^{0.2t}$.\n\nSet $3.1608(0.9)^{0.2t} \\leq 1$: $(0.9)^{0.2t} \\leq 0.31637$. Taking logs (and flipping the inequality since $\\ln 0.9 < 0$): $0.2t \\geq \\dfrac{\\ln 0.31637}{\\ln 0.9} = 10.9239$, so $t \\geq 54.62$ minutes.\n\nNearest minute: $55$ minutes after 10:30 am $= $ 11:25 am.',
    solutionSteps: [
      {
        explanation: 'Differentiate the model with respect to $t$. For an exponential with base other than $e$, use $\\dfrac{d}{dt}a^{kt} = k\\ln a \\cdot a^{kt}$, applied to $a = 0.9$ and $k = 0.2$.',
        workingOut: '\\dfrac{dT}{dt} = -150 \\times 0.2\\ln(0.9) \\times (0.9)^{0.2t} = -30\\ln(0.9)\\,(0.9)^{0.2t}'
      },
      {
        explanation: 'Evaluate the constant: $\\ln(0.9) \\approx -0.10536$, so $-30\\ln(0.9) \\approx 3.1608$, which is positive — the oven temperature is always rising, but more and more slowly.',
        workingOut: '\\dfrac{dT}{dt} \\approx 3.1608\\,(0.9)^{0.2t}'
      },
      {
        explanation: 'Set up the inequality for when the heating rate has slowed to at most $1°$C per minute.',
        workingOut: '3.1608\\,(0.9)^{0.2t} \\leq 1 \\implies (0.9)^{0.2t} \\leq 0.31637'
      },
      {
        explanation: 'Take natural logarithms of both sides. Because $\\ln(0.9)$ is negative, dividing by it reverses the inequality sign.',
        workingOut: '0.2t\\,\\ln(0.9) \\leq \\ln(0.31637) \\implies 0.2t \\geq \\dfrac{-1.15094}{-0.10536} = 10.9239'
      },
      {
        explanation: 'Solve for $t$ and round up to the nearest whole minute (rounding down would not yet satisfy the condition).',
        workingOut: 't \\geq 54.62 \\implies t = 55 \\text{ minutes}'
      },
      {
        explanation: 'Add 55 minutes to the 10:30 am start time to find the earliest clock time.',
        workingOut: '10\\!:\\!30\\text{ am} + 55\\text{ min} = 11\\!:\\!25\\text{ am}'
      }
    ]
  },

  {
    id: 'cra2023-q19',
    topicId: 'y11a-12G',
    c: '12G',
    t: 'Conditional probability',
    source: 'Cranbrook 2023 Trial Q19',
    type: 'short_answer',
    difficulty: 'medium',
    q: 'A group of students were surveyed on the type of pets they own. The incomplete two-way table shows: Dog & Cat $= A$, Dog & No Cat $= 32$, No Dog & Cat $= 45$, No Dog & No Cat $= 35$. Given that a student owns a dog, the probability that they also own a cat is 60%. Find the probability that a student chosen at random owns both a cat and a dog.',
    a: '$\\dfrac{48}{160} = \\dfrac{3}{10}$',
    opts: [],
    h: 'Use $P(\\text{Cat} \\mid \\text{Dog}) = \\dfrac{A}{A + 32} = 0.6$ to find $A$ first.',
    s: '$\\dfrac{A}{A+32} = 0.6 \\Rightarrow A = 0.6A + 19.2 \\Rightarrow 0.4A = 19.2 \\Rightarrow A = 48$.\n\nTotal students $= 48 + 32 + 45 + 35 = 160$.\n\n$P(\\text{Cat and Dog}) = \\dfrac{48}{160} = \\dfrac{3}{10}$.',
    solutionSteps: [
      {
        explanation: 'Translate the conditional probability statement: given a student owns a dog, the chance they own a cat is 60%. The dog owners number $A + 32$ in total, of whom $A$ own a cat.',
        workingOut: 'P(\\text{Cat} \\mid \\text{Dog}) = \\dfrac{A}{A + 32} = 0.6'
      },
      {
        explanation: 'Solve this equation for $A$ by multiplying both sides by $(A + 32)$ and collecting the $A$ terms.',
        workingOut: 'A = 0.6(A + 32) = 0.6A + 19.2 \\implies 0.4A = 19.2 \\implies A = 48'
      },
      {
        explanation: 'Complete the table and find the total number of students surveyed by adding all four cells.',
        workingOut: '48 + 32 + 45 + 35 = 160'
      },
      {
        explanation: 'The probability that a randomly chosen student owns both pets is the "both" cell divided by the total.',
        workingOut: 'P(\\text{Cat and Dog}) = \\dfrac{48}{160} = \\dfrac{3}{10}'
      }
    ]
  },

  {
    id: 'cra2023-q20',
    topicId: 'y11a-8G',
    c: '8G',
    t: 'Applications',
    source: 'Cranbrook 2023 Trial Q20',
    type: 'short_answer',
    difficulty: 'medium',
    q: 'The relative level of a noise compared to a reference level is calculated by $R = 20\\log_{10}\\!\\left(\\dfrac{N}{N_0}\\right)$, where $R$ is the relative noise level in decibels (dB), $N$ is the level of a noise and $N_0$ is the maximum noise level permitted. The relative noise level at a construction site when operating machinery was found to be 8 dB higher than the maximum noise level permitted. Show that the level of noise produced by the machinery was approximately 2.5 times greater than the maximum noise level permitted.',
    a: '$\\dfrac{N}{N_0} = 10^{0.4} \\approx 2.51 \\approx 2.5$',
    opts: [],
    h: 'Set $R = 8$ and solve for the ratio $\\dfrac{N}{N_0}$ by converting the logarithmic equation to index form.',
    s: '$8 = 20\\log_{10}\\!\\left(\\dfrac{N}{N_0}\\right)$, so $\\log_{10}\\!\\left(\\dfrac{N}{N_0}\\right) = 0.4$. Converting to index form: $\\dfrac{N}{N_0} = 10^{0.4} \\approx 2.512$. Hence $N \\approx 2.5 N_0$. ✓',
    solutionSteps: [
      {
        explanation: 'Substitute the given relative noise level $R = 8$ dB into the formula.',
        workingOut: '8 = 20\\log_{10}\\!\\left(\\dfrac{N}{N_0}\\right)'
      },
      {
        explanation: 'Isolate the logarithm by dividing both sides by 20.',
        workingOut: '\\log_{10}\\!\\left(\\dfrac{N}{N_0}\\right) = \\dfrac{8}{20} = 0.4'
      },
      {
        explanation: 'Convert from logarithmic form to index form using the definition $\\log_{10} y = x \\iff y = 10^x$.',
        workingOut: '\\dfrac{N}{N_0} = 10^{0.4}'
      },
      {
        explanation: 'Evaluate $10^{0.4}$ with a calculator and interpret the ratio: the machinery noise is about 2.5 times the permitted maximum, as required.',
        workingOut: '10^{0.4} = 2.5118\\ldots \\approx 2.5 \\quad \\blacksquare'
      }
    ]
  },

  {
    id: 'cra2023-q21',
    topicId: 'y12a-9E',
    c: '9E',
    t: 'Line of best fit',
    source: 'Cranbrook 2023 Trial Q21',
    type: 'short_answer',
    difficulty: 'medium',
    q: 'Ivy has plotted the income she received each week for the past five weeks: $(1, 200), (2, 100), (3, 300), (4, 300), (5, 400)$, where the first coordinate is the week number $n$ and the second is the amount in dollars. Over the same five weeks, Ivy\'s expenses, which were originally $200 per week, increase by $20 each week. Write the equation of the least-squares regression line for Ivy\'s income, and determine the equation of Ivy\'s expenses.',
    a: 'Income $= 60n + 80$; Expenses $= 20n + 180$',
    opts: [],
    h: 'For the regression line compute $b = \\dfrac{\\sum xy - n\\bar{x}\\bar{y}}{\\sum x^2 - n\\bar{x}^2}$ and $a = \\bar{y} - b\\bar{x}$. The expenses form an arithmetic (linear) pattern.',
    s: '$\\bar{n} = 3$, $\\bar{y} = \\dfrac{1300}{5} = 260$. $\\sum ny = 200 + 200 + 900 + 1200 + 2000 = 4500$, $\\sum n^2 = 55$.\n\nGradient $= \\dfrac{4500 - 5(3)(260)}{55 - 5(9)} = \\dfrac{600}{10} = 60$. Intercept $= 260 - 60(3) = 80$.\n\nIncome $= 60n + 80$.\n\nExpenses start at \\$200 in week 1 and rise \\$20/week: $E = 200 + 20(n-1) = 20n + 180$.',
    solutionSteps: [
      {
        explanation: 'Compute the means of the week numbers and the income values, which are needed for the least-squares formulas.',
        workingOut: '\\bar{n} = \\dfrac{1+2+3+4+5}{5} = 3, \\quad \\bar{y} = \\dfrac{200+100+300+300+400}{5} = 260'
      },
      {
        explanation: 'Compute the two sums required for the gradient: the sum of the products $\\sum ny$ and the sum of squares $\\sum n^2$.',
        workingOut: '\\sum ny = 200 + 200 + 900 + 1200 + 2000 = 4500, \\quad \\sum n^2 = 1+4+9+16+25 = 55'
      },
      {
        explanation: 'Apply the least-squares gradient formula, which measures how income co-varies with the week number.',
        workingOut: 'b = \\dfrac{\\sum ny - 5\\bar{n}\\bar{y}}{\\sum n^2 - 5\\bar{n}^2} = \\dfrac{4500 - 3900}{55 - 45} = \\dfrac{600}{10} = 60'
      },
      {
        explanation: 'Find the intercept using the property that the regression line passes through the mean point $(\\bar{n}, \\bar{y})$.',
        workingOut: 'a = \\bar{y} - b\\bar{n} = 260 - 60(3) = 80 \\implies \\text{Income} = 60n + 80'
      },
      {
        explanation: 'Model the expenses: they start at \\$200 in week 1 and increase by \\$20 each subsequent week, so this is a linear function with gradient 20 passing through $(1, 200)$.',
        workingOut: 'E = 200 + 20(n - 1) = 20n + 180'
      },
      {
        explanation: 'State both equations, then plot them over the data. The income line $y = 60n + 80$ has $y$-intercept $80$ and gradient $60$; the expenses line $y = 20n + 180$ has $y$-intercept $180$ and gradient $20$.',
        workingOut: '\\text{Income} = 60n + 80, \\quad \\text{Expenses} = 20n + 180'
      },
      {
        explanation: 'Draw both lines neatly over Ivy\'s five income data points $(1,200), (2,100), (3,300), (4,300), (5,400)$. The income regression line (blue) passes through the mean point $(3, 260)$; the expenses line (green) starts at $(1, 200)$ and rises $20 each week.',
        workingOut: '',
        graphData: {
          jsxGraph: {
            width: 400,
            height: 320,
            boundingbox: [-0.5, 470, 6, -50],
            boardOptions: { keepaspectratio: false },
            script: "board.suspendUpdate();\nboard.create('arrow', [[0,0],[6,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-50],[0,470]], {strokeColor:'black'});\nvar pts = [[1,200],[2,100],[3,300],[4,300],[5,400]];\nfor (var i=0;i<pts.length;i++){ board.create('point', pts[i], {name:'', size:2.5, color:'#64748b', fixed:true}); }\nboard.create('functiongraph', [function(x){ return 60*x+80; }, 0, 5.5], {strokeColor:'blue',strokeWidth:2,name:'Income',withLabel:true});\nboard.create('functiongraph', [function(x){ return 20*x+180; }, 0, 5.5], {strokeColor:'green',strokeWidth:2,name:'Expenses',withLabel:true});\nboard.create('text', [5.4, 30, 'n (weeks)'], {fontSize:13});\nboard.create('text', [0.2, 455, 'Amount ($)'], {fontSize:13});\nboard.unsuspendUpdate();"
          }
        }
      }
    ]
  },

  {
    id: 'cra2023-q22a',
    topicId: 'y12a-4H',
    c: '4H',
    t: 'The trapezoidal rule',
    source: 'Cranbrook 2023 Trial Q22(a)',
    graphData: {
      jsxGraph: {
        width: 380,
        height: 300,
        boundingbox: [-0.5, 11, 4, -1.2],
        boardOptions: { keepaspectratio: false },
        script: "board.suspendUpdate();\nboard.create('arrow', [[0,0],[4,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-1.2],[0,11]], {strokeColor:'black'});\nboard.create('functiongraph', [function(t){ return 10*Math.exp(-Math.sqrt(t)); }, 0.0001, 3.6], {strokeColor:'blue',strokeWidth:2});\nvar pts=[[0,10],[1,3.68],[2,2.43],[3,1.77]];\nvar nm=['(0, 10)','(1, 3.68)','(2, 2.43)','(3, 1.77)'];\nvar off=[[8,8],[10,8],[10,8],[10,4]];\nfor(var i=0;i<pts.length;i++){ board.create('point', pts[i], {name:nm[i], size:2.5, color:'red', fixed:true, label:{offset:off[i], fontSize:11}}); }\nboard.create('text', [3.6, 0.4, 't'], {fontSize:14});\nboard.create('text', [0.25, 10.6, 'V'], {fontSize:14});\nboard.unsuspendUpdate();"
      }
    },
    type: 'short_answer',
    difficulty: 'medium',
    q: 'A deflated weather balloon is being inflated such that the rate of air flow is modelled by $V = 10e^{-\\sqrt{t}}$, with flow rates at hourly intervals: $(0, 10), (1, 3.68), (2, 2.43), (3, 1.77)$. Using three applications of the Trapezoidal rule, estimate the volume of air in the balloon at time $t = 3$.',
    a: '$\\approx 12.0$ units³',
    opts: [],
    h: 'The volume is the area under the rate curve: $\\displaystyle\\int_0^3 V\\,dt \\approx \\dfrac{h}{2}\\bigl[f_0 + 2f_1 + 2f_2 + f_3\\bigr]$ with $h = 1$.',
    s: 'Volume $\\approx \\dfrac{1}{2}\\bigl[10 + 2(3.68) + 2(2.43) + 1.77\\bigr] = \\dfrac{1}{2}\\bigl[10 + 7.36 + 4.86 + 1.77\\bigr] = \\dfrac{23.99}{2} \\approx 12.0$.',
    solutionSteps: [
      {
        explanation: 'Recognise that the volume of air is the integral of the flow rate over time, so we estimate $\\int_0^3 10e^{-\\sqrt{t}}\\,dt$ numerically. With three applications (three strips) over $[0, 3]$, the strip width is $h = 1$.',
        workingOut: '\\text{Volume} = \\int_0^3 V\\,dt, \\quad h = \\dfrac{3-0}{3} = 1'
      },
      {
        explanation: 'Write the trapezoidal rule for three strips: end ordinates are weighted once and interior ordinates twice.',
        workingOut: '\\int_0^3 V\\,dt \\approx \\dfrac{h}{2}\\bigl[f_0 + 2f_1 + 2f_2 + f_3\\bigr]'
      },
      {
        explanation: 'Substitute the tabulated flow rates $f_0 = 10$, $f_1 = 3.68$, $f_2 = 2.43$, $f_3 = 1.77$.',
        workingOut: '\\approx \\dfrac{1}{2}\\bigl[10 + 2(3.68) + 2(2.43) + 1.77\\bigr]'
      },
      {
        explanation: 'Evaluate the bracket and halve it.',
        workingOut: '= \\dfrac{1}{2}\\bigl[10 + 7.36 + 4.86 + 1.77\\bigr] = \\dfrac{23.99}{2} = 11.995'
      },
      {
        explanation: 'State the estimated volume.',
        workingOut: '\\text{Volume} \\approx 12.0 \\text{ units}^3'
      }
    ]
  },

  {
    id: 'cra2023-q22b',
    topicId: 'y12a-4H',
    c: '4H',
    t: 'The trapezoidal rule',
    source: 'Cranbrook 2023 Trial Q22(b)',
    graphData: {
      jsxGraph: {
        width: 380,
        height: 300,
        boundingbox: [-0.5, 11, 4, -1.2],
        boardOptions: { keepaspectratio: false },
        script: "board.suspendUpdate();\nboard.create('arrow', [[0,0],[4,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-1.2],[0,11]], {strokeColor:'black'});\nboard.create('functiongraph', [function(t){ return 10*Math.exp(-Math.sqrt(t)); }, 0.0001, 3.6], {strokeColor:'blue',strokeWidth:2});\nvar pts=[[0,10],[1,3.68],[2,2.43],[3,1.77]];\nvar nm=['(0, 10)','(1, 3.68)','(2, 2.43)','(3, 1.77)'];\nvar off=[[8,8],[10,8],[10,8],[10,4]];\nfor(var i=0;i<pts.length;i++){ board.create('point', pts[i], {name:nm[i], size:2.5, color:'red', fixed:true, label:{offset:off[i], fontSize:11}}); }\nboard.create('text', [3.6, 0.4, 't'], {fontSize:14});\nboard.create('text', [0.25, 10.6, 'V'], {fontSize:14});\nboard.unsuspendUpdate();"
      }
    },
    type: 'short_answer',
    difficulty: 'medium',
    q: 'A safety shutoff valve is programmed to be activated before the balloon reaches its maximum volume, after which the balloon will burst. The flow-rate curve $V = 10e^{-\\sqrt{t}}$ is concave up. By referring to the graph, or otherwise, explain why the Trapezoidal rule is a valid method of estimation in this context.',
    a: 'Because the curve is concave up, each trapezium lies above the curve, so the rule overestimates the true volume. An overestimate triggers the safety valve early — before the true maximum volume is reached — so the balloon will not burst.',
    opts: [],
    h: 'Consider whether the trapezoidal rule over- or under-estimates for a concave-up curve, and whether an overestimate is safe here.',
    s: 'The graph of $V = 10e^{-\\sqrt{t}}$ is concave up, so the chord joining two points on the curve lies above the curve. Each trapezium therefore has area greater than the area under the curve, and the trapezoidal estimate is an overestimate of the true volume. Since the valve activates based on an overestimate, it shuts off before the balloon actually reaches maximum volume — a safe outcome. Hence the method is valid in this context.',
    solutionSteps: [
      {
        explanation: 'Identify the concavity of the flow-rate curve: $V = 10e^{-\\sqrt{t}}$ decreases steeply at first and flattens out, i.e. the curve is concave up on the interval shown.',
        workingOut: 'V = 10e^{-\\sqrt{t}} \\text{ is concave up}'
      },
      {
        explanation: 'For a concave-up curve, the straight chord between any two points on the curve lies above the curve, so every trapezium contains the region under the curve.',
        workingOut: '\\text{chord above curve} \\implies \\text{trapezoidal estimate} > \\text{true integral}'
      },
      {
        explanation: 'Interpret in context: the estimated volume is larger than the actual volume, so the shutoff valve (which acts on the estimate) is triggered before the balloon truly reaches its maximum volume. Overestimating is the safe direction here, so the method is valid.',
        workingOut: '\\text{overestimate} \\implies \\text{valve activates early} \\implies \\text{balloon does not burst} \\quad \\blacksquare'
      }
    ]
  },

  {
    id: 'cra2023-q23a',
    topicId: 'y12a-3G',
    c: '3G',
    t: 'Applications of maximisation and minimisation',
    source: 'Cranbrook 2023 Trial Q23(a)',
    type: 'short_answer',
    difficulty: 'hard',
    q: 'A closed water tank in the shape of a half-cylinder with diameter $2r$ metres and length $h$ metres is made from sheet metal. The surface area of the tank is $A$ m² and the volume is $V$ m³, where $V = \\dfrac{1}{2}\\pi r^2 h$. Show that $A = \\pi r^2 + \\dfrac{2V}{\\pi}\\left(\\dfrac{2 + \\pi}{r}\\right)$.',
    a: '$A = \\pi r^2 + \\pi rh + 2rh$; substituting $h = \\dfrac{2V}{\\pi r^2}$ gives $A = \\pi r^2 + \\dfrac{2V}{\\pi}\\left(\\dfrac{2+\\pi}{r}\\right)$.',
    opts: [],
    h: 'The closed half-cylinder has two semicircular ends, a curved half-cylindrical surface, and a flat rectangular top. Express $h$ in terms of $V$ and substitute.',
    s: 'Surface area: two semicircular ends $= 2 \\times \\dfrac{1}{2}\\pi r^2 = \\pi r^2$; curved surface $= \\dfrac{1}{2}(2\\pi r)h = \\pi rh$; flat top $= 2r \\times h = 2rh$.\n\nSo $A = \\pi r^2 + \\pi rh + 2rh = \\pi r^2 + rh(\\pi + 2)$.\n\nFrom $V = \\dfrac{1}{2}\\pi r^2 h$: $h = \\dfrac{2V}{\\pi r^2}$.\n\n$A = \\pi r^2 + r(\\pi + 2)\\cdot\\dfrac{2V}{\\pi r^2} = \\pi r^2 + \\dfrac{2V(\\pi+2)}{\\pi r} = \\pi r^2 + \\dfrac{2V}{\\pi}\\left(\\dfrac{2+\\pi}{r}\\right)$. ✓',
    solutionSteps: [
      {
        explanation: 'List the surfaces of the closed half-cylinder: two semicircular ends of radius $r$, the curved surface (half of a full cylinder\'s lateral surface), and the flat rectangular top of width $2r$ and length $h$.',
        workingOut: '\\text{ends: } 2 \\times \\tfrac{1}{2}\\pi r^2 = \\pi r^2, \\quad \\text{curved: } \\tfrac{1}{2}(2\\pi r h) = \\pi r h, \\quad \\text{top: } 2rh'
      },
      {
        explanation: 'Add the three parts and factor the terms containing $h$.',
        workingOut: 'A = \\pi r^2 + \\pi rh + 2rh = \\pi r^2 + rh(\\pi + 2)'
      },
      {
        explanation: 'Rearrange the volume formula $V = \\dfrac{1}{2}\\pi r^2 h$ to express the length $h$ in terms of $V$ and $r$, so $A$ can be written as a function of $r$ alone.',
        workingOut: 'h = \\dfrac{2V}{\\pi r^2}'
      },
      {
        explanation: 'Substitute this $h$ into the area expression and simplify the powers of $r$.',
        workingOut: 'A = \\pi r^2 + r(\\pi+2) \\times \\dfrac{2V}{\\pi r^2} = \\pi r^2 + \\dfrac{2V(\\pi+2)}{\\pi r}'
      },
      {
        explanation: 'Write in the required form, which is the same expression with the constant factored as $\\dfrac{2V}{\\pi}$.',
        workingOut: 'A = \\pi r^2 + \\dfrac{2V}{\\pi}\\left(\\dfrac{2+\\pi}{r}\\right) \\quad \\blacksquare'
      }
    ]
  },

  {
    id: 'cra2023-q23b',
    topicId: 'y12a-3G',
    c: '3G',
    t: 'Applications of maximisation and minimisation',
    source: 'Cranbrook 2023 Trial Q23(b)',
    type: 'short_answer',
    difficulty: 'hard',
    q: 'For the half-cylinder tank with $A = \\pi r^2 + \\dfrac{2V}{\\pi}\\left(\\dfrac{2 + \\pi}{r}\\right)$ (where $V$ is a fixed constant), show that the amount of sheet metal used is minimised when $r = \\sqrt[3]{\\dfrac{V(2 + \\pi)}{\\pi^2}}$.',
    a: 'Setting $\\dfrac{dA}{dr} = 0$ gives $r^3 = \\dfrac{V(2+\\pi)}{\\pi^2}$, and $\\dfrac{d^2A}{dr^2} > 0$ confirms a minimum.',
    opts: [],
    h: 'Differentiate $A(r) = \\pi r^2 + \\dfrac{2V(2+\\pi)}{\\pi}r^{-1}$ with respect to $r$, set the derivative to zero, and verify with the second derivative.',
    s: '$\\dfrac{dA}{dr} = 2\\pi r - \\dfrac{2V(2+\\pi)}{\\pi}r^{-2}$. Setting $= 0$: $2\\pi r = \\dfrac{2V(2+\\pi)}{\\pi r^2}$, so $r^3 = \\dfrac{V(2+\\pi)}{\\pi^2}$, giving $r = \\sqrt[3]{\\dfrac{V(2+\\pi)}{\\pi^2}}$.\n\n$\\dfrac{d^2A}{dr^2} = 2\\pi + \\dfrac{4V(2+\\pi)}{\\pi r^3} > 0$ for $r > 0$, so this is a minimum. ✓',
    solutionSteps: [
      {
        explanation: 'Write $A$ with a negative power of $r$ so it is ready to differentiate. $V$ is constant since the tank must hold a fixed volume.',
        workingOut: 'A(r) = \\pi r^2 + \\dfrac{2V(2+\\pi)}{\\pi}\\,r^{-1}'
      },
      {
        explanation: 'Differentiate with respect to $r$ using the power rule on each term.',
        workingOut: '\\dfrac{dA}{dr} = 2\\pi r - \\dfrac{2V(2+\\pi)}{\\pi}\\,r^{-2}'
      },
      {
        explanation: 'Stationary points occur where the derivative is zero. Set the derivative to zero and multiply through by $r^2$ to clear the negative power.',
        workingOut: '2\\pi r = \\dfrac{2V(2+\\pi)}{\\pi r^2} \\implies 2\\pi r^3 = \\dfrac{2V(2+\\pi)}{\\pi}'
      },
      {
        explanation: 'Solve for $r^3$ and take the cube root.',
        workingOut: 'r^3 = \\dfrac{V(2+\\pi)}{\\pi^2} \\implies r = \\sqrt[3]{\\dfrac{V(2+\\pi)}{\\pi^2}}'
      },
      {
        explanation: 'Verify this stationary point is a minimum using the second derivative test: both terms of $A\'\'(r)$ are positive for $r > 0$, so the curve is concave up and the stationary point is a minimum.',
        workingOut: '\\dfrac{d^2A}{dr^2} = 2\\pi + \\dfrac{4V(2+\\pi)}{\\pi r^3} > 0 \\implies \\text{minimum} \\quad \\blacksquare'
      }
    ]
  },

  {
    id: 'cra2023-q23c',
    topicId: 'y12a-3G',
    c: '3G',
    t: 'Applications of maximisation and minimisation',
    source: 'Cranbrook 2023 Trial Q23(c)',
    type: 'short_answer',
    difficulty: 'medium',
    q: 'Hence find the length $h$ of the half-cylinder tank that minimises the sheet metal, given that the volume of the tank is 10 cubic metres. Answer correct to two decimal places.',
    a: '$h \\approx 2.12$ m',
    opts: [],
    h: 'Substitute $V = 10$ into $r = \\sqrt[3]{\\dfrac{V(2+\\pi)}{\\pi^2}}$, then use $h = \\dfrac{2V}{\\pi r^2}$.',
    s: '$r = \\sqrt[3]{\\dfrac{10(2+\\pi)}{\\pi^2}} = \\sqrt[3]{\\dfrac{51.4159}{9.8696}} = \\sqrt[3]{5.2095} \\approx 1.7335$ m.\n\n$h = \\dfrac{2(10)}{\\pi(1.7335)^2} = \\dfrac{20}{9.4404} \\approx 2.12$ m.',
    solutionSteps: [
      {
        explanation: 'Substitute $V = 10$ into the optimal radius formula from part (b).',
        workingOut: 'r = \\sqrt[3]{\\dfrac{10(2+\\pi)}{\\pi^2}} = \\sqrt[3]{\\dfrac{51.4159}{9.8696}} = \\sqrt[3]{5.2095}'
      },
      {
        explanation: 'Evaluate the cube root to find the optimal radius.',
        workingOut: 'r \\approx 1.7335 \\text{ m}'
      },
      {
        explanation: 'Recover the length $h$ from the volume relation $h = \\dfrac{2V}{\\pi r^2}$ established in part (a).',
        workingOut: 'h = \\dfrac{2 \\times 10}{\\pi (1.7335)^2} = \\dfrac{20}{9.4404}'
      },
      {
        explanation: 'Evaluate and round to two decimal places.',
        workingOut: 'h \\approx 2.12 \\text{ m}'
      }
    ]
  },

  {
    id: 'cra2023-q24a',
    topicId: 'y11a-6H',
    c: '6H',
    t: 'The sine rule and the area formula',
    source: 'Cranbrook 2023 Trial Q24(a)',
    graphData: {
      geometry: {
        width: 280,
        points: { "T": [0, 4.2], "M": [0, 0], "A": [3, 2.3], "B": [3.5, -2.2] },
        segments: [
          { from: "M", to: "T" },
          { from: "M", to: "A" },
          { from: "M", to: "B" },
          { from: "T", to: "A" },
          { from: "T", to: "B" }
        ],
        sideLabels: [
          { between: ["M", "A"], text: "A (045°)" },
          { between: ["M", "B"], text: "B (120°)" }
        ]
      }
    },
    type: 'short_answer',
    difficulty: 'medium',
    q: 'Michael installs a vertical radio mast on level ground at $M$. Two pegs are installed on the ground at $A$ and $B$ on bearings of 045° and 120° respectively from $M$. The distance from $A$ to $M$ is 100 m and the area of the triangle $AMB$ is 10 432 m². Find the distance between the base of the mast, $M$, and the peg at $B$.',
    a: '$MB = 216$ m',
    opts: [],
    h: 'The angle $\\angle AMB$ is the difference of the bearings. Use the area formula $\\text{Area} = \\dfrac{1}{2}ab\\sin C$.',
    s: '$\\angle AMB = 120° - 45° = 75°$. Area $= \\dfrac{1}{2} \\times 100 \\times MB \\times \\sin 75° = 10432$.\n\n$MB = \\dfrac{2 \\times 10432}{100\\sin 75°} = \\dfrac{208.64}{0.96593} = 216.0$, so $MB = 216$ m.',
    solutionSteps: [
      {
        explanation: 'Find the angle at $M$ between the two pegs: bearings are measured clockwise from north, so the included angle is the difference of the two bearings.',
        workingOut: '\\angle AMB = 120° - 45° = 75°'
      },
      {
        explanation: 'Write the area formula for a triangle given two sides and the included angle, with the known side $MA = 100$, the unknown side $MB$, and the included angle $75°$.',
        workingOut: '\\text{Area} = \\dfrac{1}{2} \\times MA \\times MB \\times \\sin(\\angle AMB)'
      },
      {
        explanation: 'Substitute the given area of 10 432 m².',
        workingOut: '10432 = \\dfrac{1}{2} \\times 100 \\times MB \\times \\sin 75°'
      },
      {
        explanation: 'Solve for $MB$ by isolating it.',
        workingOut: 'MB = \\dfrac{2 \\times 10432}{100 \\times \\sin 75°} = \\dfrac{20864}{96.593}'
      },
      {
        explanation: 'Evaluate to find the distance.',
        workingOut: 'MB = 216 \\text{ m}'
      }
    ]
  },

  {
    id: 'cra2023-q24b',
    topicId: 'y11a-6B',
    c: '6B',
    t: 'Problems with right-angled triangles',
    source: 'Cranbrook 2023 Trial Q24(b)',
    graphData: {
      geometry: {
        width: 280,
        points: { "T": [0, 4.2], "M": [0, 0], "A": [3, 2.3], "B": [3.5, -2.2] },
        segments: [
          { from: "M", to: "T" },
          { from: "M", to: "A" },
          { from: "M", to: "B" },
          { from: "T", to: "A" },
          { from: "T", to: "B" }
        ],
        sideLabels: [
          { between: ["M", "A"], text: "A (045°)" },
          { between: ["M", "B"], text: "B (120°)" }
        ]
      }
    },
    type: 'short_answer',
    difficulty: 'hard',
    q: 'Supporting wires are connected from each peg ($A$ and $B$) to the top of the mast at $T$, where $MA = 100$ m, $MB = 216$ m, and the mast $MT$ is vertical with height $x$ m. By considering triangle $AMT$ and triangle $BMT$, find the height of the mast, given that the total length of the supporting wires is 380 m.',
    a: '$x \\approx 100.5$ m',
    opts: [],
    h: 'By Pythagoras, $TA = \\sqrt{x^2 + 100^2}$ and $TB = \\sqrt{x^2 + 216^2}$. Set $TA + TB = 380$ and solve.',
    s: 'Let $u = \\sqrt{x^2 + 10000}$ and $v = \\sqrt{x^2 + 46656}$ with $u + v = 380$.\n\nThen $v^2 - u^2 = 36656$, so $v - u = \\dfrac{36656}{380} = 96.4632$.\n\nSolving: $u = \\dfrac{380 - 96.4632}{2} = 141.7684$.\n\n$x^2 = u^2 - 10000 = 20098.3 - 10000 = 10098.3$, so $x \\approx 100.5$ m.',
    solutionSteps: [
      {
        explanation: 'The mast is vertical, so triangles $AMT$ and $BMT$ are right-angled at $M$. Apply Pythagoras\' theorem in each to express the wire lengths in terms of the mast height $x$.',
        workingOut: 'TA = \\sqrt{x^2 + 100^2}, \\qquad TB = \\sqrt{x^2 + 216^2}'
      },
      {
        explanation: 'Write the constraint that the total wire length is 380 m. Let $u = TA$ and $v = TB$ for cleaner algebra.',
        workingOut: 'u + v = 380, \\quad u = \\sqrt{x^2 + 10000}, \\quad v = \\sqrt{x^2 + 46656}'
      },
      {
        explanation: 'Subtract the squared expressions: the $x^2$ terms cancel, giving the difference of squares $v^2 - u^2$, which factors as $(v-u)(v+u)$.',
        workingOut: 'v^2 - u^2 = 46656 - 10000 = 36656 = (v - u)(v + u)'
      },
      {
        explanation: 'Divide by the known sum $v + u = 380$ to find the difference $v - u$.',
        workingOut: 'v - u = \\dfrac{36656}{380} = 96.4632'
      },
      {
        explanation: 'Solve the sum and difference simultaneously for $u$.',
        workingOut: 'u = \\dfrac{380 - 96.4632}{2} = 141.7684'
      },
      {
        explanation: 'Recover the mast height from $u^2 = x^2 + 10000$ and take the positive square root.',
        workingOut: 'x^2 = 141.7684^2 - 10000 = 10098.3 \\implies x \\approx 100.5 \\text{ m}'
      }
    ]
  },

  {
    id: 'cra2023-q25',
    topicId: 'y11a-5G',
    c: '5G',
    t: 'Combining transformations',
    source: 'Cranbrook 2023 Trial Q25',
    type: 'teacher_review',
    difficulty: 'hard',
    q: 'Consider the function $f(x) = (x+1)^2$. The following transformations are applied to the graph of $y = f(x)$ in the order shown: (1) horizontal translation right by 4 units; (2) horizontal dilation by a factor of $\\dfrac{4}{3}$; (3) vertical dilation by a factor of $\\dfrac{1}{3}$; (4) vertical translation down by 3 units; (5) reflection in the $x$-axis. Find the equation of the transformed function, and state the vertex and the axis intercepts.',
    a: '$y = 3 - \\dfrac{3}{16}(x-4)^2$; vertex $(4, 3)$; intercepts $(0, 0)$ and $(8, 0)$.',
    opts: [],
    h: 'Apply each transformation to the equation one at a time, in order: replace $x \\to x - 4$, then $x \\to \\dfrac{3x}{4}$, multiply $y$ by $\\dfrac{1}{3}$, subtract 3, then negate.',
    s: 'Step 1 (right 4): $y = (x - 4 + 1)^2 = (x-3)^2$.\nStep 2 (dilate $\\times\\frac{4}{3}$ horizontally, $x \\to \\frac{3x}{4}$): $y = \\left(\\dfrac{3x}{4} - 3\\right)^2 = \\dfrac{9}{16}(x-4)^2$.\nStep 3 (vertical $\\times\\frac{1}{3}$): $y = \\dfrac{3}{16}(x-4)^2$.\nStep 4 (down 3): $y = \\dfrac{3}{16}(x-4)^2 - 3$.\nStep 5 (reflect in $x$-axis): $y = 3 - \\dfrac{3}{16}(x-4)^2$.\n\nVertex: maximum at $(4, 3)$. $x$-intercepts: $(x-4)^2 = 16$, so $x = 0, 8$. $y$-intercept: $x = 0 \\Rightarrow y = 0$. The graph is a concave-down parabola through the origin, vertex $(4,3)$, and $(8, 0)$.',
    solutionSteps: [
      {
        explanation: 'Apply the horizontal translation 4 units right by replacing $x$ with $x - 4$ in the rule, because shifting right by $c$ replaces $x \\to x - c$.',
        workingOut: 'y = ((x-4)+1)^2 = (x-3)^2'
      },
      {
        explanation: 'Apply the horizontal dilation by factor $\\dfrac{4}{3}$ by replacing $x$ with $x \\div \\dfrac{4}{3} = \\dfrac{3x}{4}$. Then simplify by factoring out the constant from the bracket.',
        workingOut: 'y = \\left(\\dfrac{3x}{4} - 3\\right)^2 = \\dfrac{9}{16}(x - 4)^2'
      },
      {
        explanation: 'Apply the vertical dilation by factor $\\dfrac{1}{3}$ by multiplying the whole rule by $\\dfrac{1}{3}$.',
        workingOut: 'y = \\dfrac{1}{3} \\times \\dfrac{9}{16}(x-4)^2 = \\dfrac{3}{16}(x-4)^2'
      },
      {
        explanation: 'Apply the vertical translation 3 units down by subtracting 3, then the reflection in the $x$-axis by negating the entire rule.',
        workingOut: 'y = -\\left(\\dfrac{3}{16}(x-4)^2 - 3\\right) = 3 - \\dfrac{3}{16}(x-4)^2'
      },
      {
        explanation: 'Read off the vertex from the completed-square form: the parabola is concave down with maximum at $x = 4$, $y = 3$.',
        workingOut: '\\text{Vertex } (4, 3), \\text{ maximum}'
      },
      {
        explanation: 'Find the intercepts. For $x$-intercepts set $y = 0$; for the $y$-intercept set $x = 0$. Both calculations confirm the curve passes through the origin.',
        workingOut: '\\dfrac{3}{16}(x-4)^2 = 3 \\implies (x-4)^2 = 16 \\implies x = 0, 8; \\quad x=0 \\implies y = 3 - 3 = 0'
      },
      {
        explanation: 'Sketch the final concave-down parabola $y = 3 - \\dfrac{3}{16}(x-4)^2$ with maximum vertex $(4, 3)$, passing through the origin $(0, 0)$ and the $x$-intercept $(8, 0)$.',
        workingOut: '',
        graphData: {
          jsxGraph: {
            width: 400,
            height: 300,
            boundingbox: [-1, 4.5, 9, -4],
            boardOptions: { keepaspectratio: false },
            script: "board.suspendUpdate();\nboard.create('arrow', [[-1,0],[9,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-4],[0,4.5]], {strokeColor:'black'});\nboard.create('functiongraph', [function(x){ return 3 - (3/16)*Math.pow(x-4,2); }, -1, 9], {strokeColor:'blue',strokeWidth:2});\nboard.create('point', [4,3], {name:'(4, 3)', size:3, color:'red', label:{offset:[8,10]}});\nboard.create('point', [0,0], {name:'(0, 0)', size:3, color:'red', label:{offset:[-12,-12]}});\nboard.create('point', [8,0], {name:'(8, 0)', size:3, color:'red', label:{offset:[10,-10]}});\nboard.create('text', [8.4, 0.5, 'x'], {fontSize:14});\nboard.create('text', [0.3, 4.1, 'y'], {fontSize:14});\nboard.create('text', [-0.4, -0.4, 'O'], {fontSize:14});\nboard.unsuspendUpdate();"
          }
        }
      }
    ]
  },

  {
    id: 'cra2023-q26a',
    topicId: 'y12a-7B',
    c: '7B',
    t: 'Velocity and acceleration as derivatives',
    source: 'Cranbrook 2023 Trial Q26(a)',
    type: 'short_answer',
    difficulty: 'medium',
    q: 'A particle is moving along the $x$-axis so that its position, in metres, at time $t$ seconds is given by $x = 2\\ln(t^2 + 3) - t$. Determine the times when the particle is at rest.',
    a: '$t = 1$ s and $t = 3$ s',
    opts: [],
    h: 'The particle is at rest when $v = \\dfrac{dx}{dt} = 0$. Differentiate and solve.',
    s: '$v = \\dfrac{4t}{t^2+3} - 1 = \\dfrac{4t - t^2 - 3}{t^2+3} = \\dfrac{-(t-1)(t-3)}{t^2+3}$.\n\n$v = 0$ when $(t-1)(t-3) = 0$: $t = 1$ or $t = 3$ seconds.',
    solutionSteps: [
      {
        explanation: 'The particle is at rest when its velocity is zero. Differentiate the position function: the derivative of $2\\ln(t^2+3)$ requires the chain rule (derivative of $\\ln u$ is $u\'/u$), and the derivative of $-t$ is $-1$.',
        workingOut: 'v = \\dfrac{dx}{dt} = \\dfrac{2 \\times 2t}{t^2 + 3} - 1 = \\dfrac{4t}{t^2+3} - 1'
      },
      {
        explanation: 'Combine into a single fraction over the common denominator $t^2 + 3$ so the equation $v = 0$ reduces to the numerator being zero.',
        workingOut: 'v = \\dfrac{4t - t^2 - 3}{t^2 + 3} = \\dfrac{-(t^2 - 4t + 3)}{t^2+3}'
      },
      {
        explanation: 'Factor the quadratic in the numerator.',
        workingOut: 'v = \\dfrac{-(t-1)(t-3)}{t^2+3}'
      },
      {
        explanation: 'Set the numerator to zero (the denominator $t^2 + 3$ is never zero) and solve.',
        workingOut: '(t-1)(t-3) = 0 \\implies t = 1 \\text{ s or } t = 3 \\text{ s}'
      }
    ]
  },

  {
    id: 'cra2023-q26b',
    topicId: 'y12a-7A',
    c: '7A',
    t: 'Average velocity and speed',
    source: 'Cranbrook 2023 Trial Q26(b)',
    type: 'short_answer',
    difficulty: 'hard',
    q: 'For the particle with position $x = 2\\ln(t^2 + 3) - t$, find the distance travelled by the particle in the first second. Leave your answer in the form involving $\\ln\\!\\left(\\dfrac{a}{b}\\right)$ with integers $a, b$.',
    a: 'Distance $= 1 - \\ln\\!\\left(\\dfrac{16}{9}\\right) \\approx 0.42$ m',
    opts: [],
    h: 'Check the sign of $v$ on $(0, 1)$: the particle does not change direction before $t = 1$, so distance $= |x(1) - x(0)|$.',
    s: 'From part (a), $v = \\dfrac{-(t-1)(t-3)}{t^2+3}$. For $0 < t < 1$: $(t-1) < 0$ and $(t-3) < 0$, so $v < 0$ — the particle moves in one direction throughout.\n\n$x(0) = 2\\ln 3$; $x(1) = 2\\ln 4 - 1$.\n\nDisplacement $= x(1) - x(0) = 2\\ln\\dfrac{4}{3} - 1 = \\ln\\dfrac{16}{9} - 1 \\approx -0.425$.\n\nDistance $= \\left|\\ln\\dfrac{16}{9} - 1\\right| = 1 - \\ln\\dfrac{16}{9} \\approx 0.42$ m.',
    solutionSteps: [
      {
        explanation: 'Before integrating or subtracting positions, check whether the particle changes direction during the first second. From part (a), $v = \\dfrac{-(t-1)(t-3)}{t^2+3}$; on $(0,1)$ both brackets are negative, so $v < 0$ throughout — no change of direction.',
        workingOut: '0 < t < 1: \\; (t-1) < 0, \\; (t-3) < 0 \\implies v < 0'
      },
      {
        explanation: 'Since the motion is one-directional, the distance is the magnitude of the displacement, $|x(1) - x(0)|$. Evaluate the position at both times.',
        workingOut: 'x(0) = 2\\ln 3, \\qquad x(1) = 2\\ln 4 - 1'
      },
      {
        explanation: 'Compute the displacement and combine the logarithms using $2\\ln\\frac{4}{3} = \\ln\\left(\\frac{4}{3}\\right)^2 = \\ln\\frac{16}{9}$.',
        workingOut: 'x(1) - x(0) = 2\\ln 4 - 1 - 2\\ln 3 = \\ln\\dfrac{16}{9} - 1'
      },
      {
        explanation: 'Evaluate the sign: $\\ln\\dfrac{16}{9} \\approx 0.575 < 1$, so the displacement is negative, consistent with $v < 0$. The distance is its absolute value.',
        workingOut: '\\text{Distance} = 1 - \\ln\\dfrac{16}{9} \\approx 0.42 \\text{ m}'
      }
    ]
  },

  {
    id: 'cra2023-q26c',
    topicId: 'y12a-7B',
    c: '7B',
    t: 'Velocity and acceleration as derivatives',
    source: 'Cranbrook 2023 Trial Q26(c)',
    type: 'short_answer',
    difficulty: 'hard',
    q: 'For the particle with position $x = 2\\ln(t^2 + 3) - t$ (for $t \\geq 0$), find the maximum velocity of the particle.',
    a: '$v_{\\max} = \\dfrac{2\\sqrt{3}}{3} - 1 \\approx 0.15$ m/s, at $t = \\sqrt{3}$',
    opts: [],
    h: 'Maximise $v(t) = \\dfrac{4t}{t^2+3} - 1$ by setting the acceleration $\\dfrac{dv}{dt} = 0$.',
    s: '$a = \\dfrac{dv}{dt} = \\dfrac{4(t^2+3) - 4t(2t)}{(t^2+3)^2} = \\dfrac{4(3 - t^2)}{(t^2+3)^2}$.\n\n$a = 0$ at $t = \\sqrt{3}$ (taking $t \\geq 0$). For $t < \\sqrt{3}$, $a > 0$; for $t > \\sqrt{3}$, $a < 0$ — a maximum.\n\n$v(\\sqrt{3}) = \\dfrac{4\\sqrt{3}}{6} - 1 = \\dfrac{2\\sqrt{3}}{3} - 1 \\approx 0.155$ m/s.',
    solutionSteps: [
      {
        explanation: 'The velocity is greatest where its derivative — the acceleration — is zero. Differentiate $v = \\dfrac{4t}{t^2+3} - 1$ using the quotient rule.',
        workingOut: 'a = \\dfrac{dv}{dt} = \\dfrac{4(t^2+3) - 4t(2t)}{(t^2+3)^2} = \\dfrac{12 - 4t^2}{(t^2+3)^2}'
      },
      {
        explanation: 'Set the numerator to zero to find the stationary point of the velocity (the denominator is always positive).',
        workingOut: '4(3 - t^2) = 0 \\implies t = \\sqrt{3} \\;\\; (t \\geq 0)'
      },
      {
        explanation: 'Confirm this is a maximum: the acceleration is positive for $t < \\sqrt{3}$ (velocity increasing) and negative for $t > \\sqrt{3}$ (velocity decreasing), so the velocity peaks at $t = \\sqrt{3}$.',
        workingOut: 'a > 0 \\text{ for } t < \\sqrt{3}, \\quad a < 0 \\text{ for } t > \\sqrt{3} \\implies \\text{maximum}'
      },
      {
        explanation: 'Substitute $t = \\sqrt{3}$ into the velocity function and simplify, rationalising the fraction.',
        workingOut: 'v(\\sqrt{3}) = \\dfrac{4\\sqrt{3}}{(\\sqrt{3})^2 + 3} - 1 = \\dfrac{4\\sqrt{3}}{6} - 1 = \\dfrac{2\\sqrt{3}}{3} - 1'
      },
      {
        explanation: 'State the maximum velocity with its approximate value.',
        workingOut: 'v_{\\max} = \\dfrac{2\\sqrt{3}}{3} - 1 \\approx 0.15 \\text{ m/s}'
      }
    ]
  },

  {
    id: 'cra2023-q27a',
    topicId: 'y12a-3B',
    c: '3B',
    t: 'Stationary points and turning points',
    source: 'Cranbrook 2023 Trial Q27(a)',
    type: 'short_answer',
    difficulty: 'hard',
    q: 'Consider the function $f(x) = 3x\\left(1 - \\dfrac{x}{4}\\right)^3 + 1$. By showing that $f\'(x) = 3\\left(1 - \\dfrac{x}{4}\\right)^2(1 - x)$, find any stationary points and determine their nature.',
    a: 'Local maximum at $\\left(1, \\dfrac{145}{64}\\right)$; horizontal point of inflection at $(4, 1)$.',
    opts: [],
    h: 'Use the product rule with $u = 3x$ and $v = \\left(1 - \\dfrac{x}{4}\\right)^3$, then factor out the common $\\left(1-\\dfrac{x}{4}\\right)^2$.',
    s: '$f\'(x) = 3\\left(1-\\dfrac{x}{4}\\right)^3 + 3x \\cdot 3\\left(1-\\dfrac{x}{4}\\right)^2\\left(-\\dfrac{1}{4}\\right) = 3\\left(1-\\dfrac{x}{4}\\right)^2\\left[\\left(1-\\dfrac{x}{4}\\right) - \\dfrac{3x}{4}\\right] = 3\\left(1-\\dfrac{x}{4}\\right)^2(1-x)$. ✓\n\nStationary points: $x = 1$ and $x = 4$.\n\nAt $x = 1$: $f\'$ changes $+ \\to -$ → local max, $f(1) = 3\\left(\\dfrac{3}{4}\\right)^3 + 1 = \\dfrac{81}{64} + 1 = \\dfrac{145}{64}$.\n\nAt $x = 4$: $f\' < 0$ on both sides (squared factor) → horizontal point of inflection, $f(4) = 1$.',
    solutionSteps: [
      {
        explanation: 'Differentiate using the product rule with $u = 3x$ and $v = \\left(1-\\dfrac{x}{4}\\right)^3$. The chain rule gives $v\' = 3\\left(1-\\dfrac{x}{4}\\right)^2 \\times \\left(-\\dfrac{1}{4}\\right)$.',
        workingOut: "f'(x) = 3\\left(1-\\dfrac{x}{4}\\right)^3 + 3x \\times 3\\left(1-\\dfrac{x}{4}\\right)^2\\left(-\\dfrac{1}{4}\\right)"
      },
      {
        explanation: 'Factor out the common factor $3\\left(1-\\dfrac{x}{4}\\right)^2$ and simplify the bracket.',
        workingOut: "f'(x) = 3\\left(1-\\dfrac{x}{4}\\right)^2\\left[1 - \\dfrac{x}{4} - \\dfrac{3x}{4}\\right] = 3\\left(1-\\dfrac{x}{4}\\right)^2(1 - x) \\quad \\checkmark"
      },
      {
        explanation: 'Find the stationary points by setting $f\'(x) = 0$: either the squared factor vanishes or $(1-x)$ vanishes.',
        workingOut: 'x = 4 \\;(\\text{double}) \\quad \\text{or} \\quad x = 1'
      },
      {
        explanation: 'Classify $x = 1$ with a sign test of $f\'$: the squared factor is always non-negative, so the sign follows $(1-x)$. For $x < 1$, $f\' > 0$; for $1 < x < 4$, $f\' < 0$. The gradient changes from positive to negative, so $x=1$ is a local maximum. Evaluate $f(1)$.',
        workingOut: "f(1) = 3(1)\\left(\\dfrac{3}{4}\\right)^3 + 1 = \\dfrac{81}{64} + 1 = \\dfrac{145}{64} \\implies \\text{local max } \\left(1, \\dfrac{145}{64}\\right)"
      },
      {
        explanation: 'Classify $x = 4$: because the factor $\\left(1-\\dfrac{x}{4}\\right)^2$ is squared, $f\'$ does not change sign there ($f\' < 0$ on both sides). A stationary point with no sign change is a horizontal point of inflection. Evaluate $f(4)$.',
        workingOut: "f(4) = 3(4)(0)^3 + 1 = 1 \\implies \\text{horizontal point of inflection } (4, 1)"
      }
    ]
  },

  {
    id: 'cra2023-q27b',
    topicId: 'y12a-3E',
    c: '3E',
    t: 'Systematic curve sketching with the derivative',
    source: 'Cranbrook 2023 Trial Q27(b)',
    type: 'short_answer',
    difficulty: 'medium',
    q: 'For $f(x) = 3x\\left(1 - \\dfrac{x}{4}\\right)^3 + 1$, explain why the graph of $y = f(x)$ must cross the $x$-axis at least once between $x = 5$ and $x = 6$.',
    a: '$f(5) = \\dfrac{49}{64} > 0$ and $f(6) = -\\dfrac{5}{4} < 0$; since $f$ is continuous and changes sign, it must cross the $x$-axis between $x=5$ and $x=6$.',
    opts: [],
    h: 'Evaluate $f(5)$ and $f(6)$ and apply the sign-change argument for a continuous function.',
    s: '$f(5) = 15\\left(-\\dfrac{1}{4}\\right)^3 + 1 = -\\dfrac{15}{64} + 1 = \\dfrac{49}{64} > 0$.\n\n$f(6) = 18\\left(-\\dfrac{1}{2}\\right)^3 + 1 = -\\dfrac{18}{8} + 1 = -\\dfrac{5}{4} < 0$.\n\n$f$ is a polynomial, hence continuous. Since $f(5) > 0$ and $f(6) < 0$, the curve must cross the $x$-axis at least once between $x = 5$ and $x = 6$.',
    solutionSteps: [
      {
        explanation: 'Evaluate the function at $x = 5$. Note $1 - \\dfrac{5}{4} = -\\dfrac{1}{4}$.',
        workingOut: 'f(5) = 15\\left(-\\dfrac{1}{4}\\right)^3 + 1 = -\\dfrac{15}{64} + 1 = \\dfrac{49}{64} > 0'
      },
      {
        explanation: 'Evaluate the function at $x = 6$. Note $1 - \\dfrac{6}{4} = -\\dfrac{1}{2}$.',
        workingOut: 'f(6) = 18\\left(-\\dfrac{1}{2}\\right)^3 + 1 = -\\dfrac{9}{4} + 1 = -\\dfrac{5}{4} < 0'
      },
      {
        explanation: 'Apply the continuity argument: $f$ is a polynomial, so its graph is an unbroken curve. A continuous curve that is above the $x$-axis at $x = 5$ and below it at $x = 6$ must cross the axis somewhere in between.',
        workingOut: 'f \\text{ continuous}, \\; f(5) > 0, \\; f(6) < 0 \\implies \\exists\\, c \\in (5,6): f(c) = 0 \\quad \\blacksquare'
      }
    ]
  },

  {
    id: 'cra2023-q27c',
    topicId: 'y12a-3E',
    c: '3E',
    t: 'Systematic curve sketching with the derivative',
    source: 'Cranbrook 2023 Trial Q27(c)',
    type: 'teacher_review',
    difficulty: 'hard',
    q: 'Sketch the graph of $y = f(x) = 3x\\left(1 - \\dfrac{x}{4}\\right)^3 + 1$ in the interval $[0, 6]$, showing the stationary points, the $y$-intercept and the approximate location of the $x$-intercept.',
    a: 'Curve starts at $(0, 1)$, rises to the local maximum $\\left(1, \\dfrac{145}{64}\\right)$, falls through the horizontal point of inflection $(4, 1)$, continues falling and crosses the $x$-axis between $x = 5$ and $x = 6$, ending at $\\left(6, -\\dfrac{5}{4}\\right)$.',
    opts: [],
    h: 'Plot the $y$-intercept $(0,1)$, local max $\\left(1, \\frac{145}{64}\\right)$, horizontal POI $(4,1)$, and the $x$-intercept between 5 and 6, then join smoothly.',
    s: 'Key features: $y$-intercept $(0, 1)$; rising to local maximum $\\left(1, \\dfrac{145}{64}\\right) \\approx (1, 2.27)$; decreasing through the horizontal point of inflection $(4, 1)$ where the curve momentarily flattens; continuing to decrease, crossing the $x$-axis between $x = 5$ and $x = 6$ (from part (b)); $f(6) = -\\dfrac{5}{4}$.',
    solutionSteps: [
      {
        explanation: 'Mark the $y$-intercept by evaluating $f(0)$.',
        workingOut: 'f(0) = 0 + 1 = 1 \\implies (0, 1)'
      },
      {
        explanation: 'Mark the stationary points found in part (a): the local maximum at $\\left(1, \\dfrac{145}{64}\\right) \\approx (1, 2.27)$ and the horizontal point of inflection at $(4, 1)$, where the tangent is horizontal but the curve keeps decreasing through it.',
        workingOut: '\\left(1, \\tfrac{145}{64}\\right) \\text{ max}, \\quad (4, 1) \\text{ horizontal POI}'
      },
      {
        explanation: 'Mark the approximate $x$-intercept between $x = 5$ and $x = 6$ (part (b)), and the right endpoint $f(6) = -\\dfrac{5}{4}$.',
        workingOut: 'x\\text{-intercept} \\in (5, 6), \\quad f(6) = -\\tfrac{5}{4}'
      },
      {
        explanation: 'Join the points smoothly: increasing on $(0,1)$, decreasing on $(1, 4)$, flattening momentarily at $(4,1)$, then decreasing through the $x$-axis to $(6, -\\tfrac{5}{4})$.',
        workingOut: '\\text{smooth curve through } (0,1) \\nearrow (1, 2.27) \\searrow (4,1) \\searrow (6, -1.25)'
      },
      {
        explanation: 'Sketch $y = 3x\\left(1 - \\dfrac{x}{4}\\right)^3 + 1$ on $[0, 6]$: start at $(0,1)$, rise to the local maximum $\\left(1, \\tfrac{145}{64}\\right)$, fall through the horizontal point of inflection $(4, 1)$, then cross the $x$-axis between $5$ and $6$, ending at $(6, -\\tfrac{5}{4})$.',
        workingOut: '',
        graphData: {
          jsxGraph: {
            width: 400,
            height: 300,
            boundingbox: [-0.7, 3, 6.7, -2],
            boardOptions: { keepaspectratio: false },
            script: "board.suspendUpdate();\nboard.create('arrow', [[-0.7,0],[6.7,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-2],[0,3]], {strokeColor:'black'});\nboard.create('functiongraph', [function(x){ return 3*x*Math.pow(1 - x/4, 3) + 1; }, 0, 6], {strokeColor:'blue',strokeWidth:2});\nboard.create('point', [0,1], {name:'(0, 1)', size:3, color:'red', label:{offset:[-14,8]}});\nboard.create('point', [1,2.266], {name:'(1, 145/64)', size:3, color:'red', label:{offset:[6,10]}});\nboard.create('point', [4,1], {name:'(4, 1)', size:3, color:'red', label:{offset:[8,12]}});\nboard.create('point', [6,-1.25], {name:'(6, -5/4)', size:3, color:'red', label:{offset:[6,-8]}});\nboard.create('text', [6.55, 0.4, 'x'], {fontSize:14});\nboard.create('text', [0.25, 2.8, 'y'], {fontSize:14});\nboard.create('text', [-0.35, -0.35, 'O'], {fontSize:14});\nboard.unsuspendUpdate();"
          }
        }
      }
    ]
  },

  {
    id: 'cra2023-q28a',
    topicId: 'y12a-10B',
    c: '10B',
    t: 'Continuous distributions',
    source: 'Cranbrook 2023 Trial Q28(a)',
    type: 'short_answer',
    difficulty: 'medium',
    q: 'A continuous random variable $X$ has probability density function $f(x) = e^{-\\frac{1}{2}x}$ for $0 \\leq x \\leq \\ln 4$, and $f(x) = 0$ otherwise. Verify that $f(x)$ is a probability density function.',
    a: '$f(x) \\geq 0$ everywhere, and $\\displaystyle\\int_0^{\\ln 4} e^{-x/2}\\,dx = 1$, so $f$ is a valid pdf.',
    opts: [],
    h: 'Check both conditions: $f(x) \\geq 0$ on its domain, and the total integral equals 1. Note $e^{-\\frac{1}{2}\\ln 4} = \\dfrac{1}{2}$.',
    s: 'First, $e^{-x/2} > 0$ for all $x$, so $f(x) \\geq 0$. ✓\n\nSecond: $\\displaystyle\\int_0^{\\ln 4} e^{-x/2}\\,dx = \\left[-2e^{-x/2}\\right]_0^{\\ln 4} = -2e^{-\\frac{1}{2}\\ln 4} + 2 = -2 \\times \\dfrac{1}{2} + 2 = 1$. ✓\n\nBoth conditions hold, so $f$ is a probability density function.',
    solutionSteps: [
      {
        explanation: 'State the two conditions a pdf must satisfy: it must be non-negative everywhere, and its total integral over the domain must equal 1.',
        workingOut: 'f(x) \\geq 0 \\;\\; \\text{and} \\;\\; \\int_{0}^{\\ln 4} f(x)\\,dx = 1'
      },
      {
        explanation: 'Check non-negativity: the exponential function is positive for every real input, so $e^{-x/2} > 0$ on $[0, \\ln 4]$.',
        workingOut: 'e^{-x/2} > 0 \\quad \\checkmark'
      },
      {
        explanation: 'Integrate: the antiderivative of $e^{-x/2}$ is $-2e^{-x/2}$ (divide by the coefficient $-\\tfrac{1}{2}$ of $x$).',
        workingOut: '\\int_0^{\\ln 4} e^{-x/2}\\,dx = \\left[-2e^{-x/2}\\right]_0^{\\ln 4}'
      },
      {
        explanation: 'Evaluate at the limits, simplifying $e^{-\\frac{1}{2}\\ln 4} = e^{\\ln 4^{-1/2}} = 4^{-1/2} = \\dfrac{1}{2}$.',
        workingOut: '= -2 \\times \\dfrac{1}{2} - (-2 \\times 1) = -1 + 2 = 1 \\quad \\checkmark'
      },
      {
        explanation: 'Both conditions are satisfied, so $f$ is a valid probability density function.',
        workingOut: 'f \\text{ is a pdf} \\quad \\blacksquare'
      }
    ]
  },

  {
    id: 'cra2023-q28b',
    topicId: 'y12a-10B',
    c: '10B',
    t: 'Continuous distributions',
    source: 'Cranbrook 2023 Trial Q28(b)',
    type: 'short_answer',
    difficulty: 'medium',
    q: 'For the pdf $f(x) = e^{-\\frac{1}{2}x}$ on $0 \\leq x \\leq \\ln 4$, find the cumulative distribution function $F(x)$ of $X$ for $-\\infty < x < \\infty$.',
    a: '$F(x) = 0$ for $x < 0$; $F(x) = 2 - 2e^{-x/2}$ for $0 \\leq x \\leq \\ln 4$; $F(x) = 1$ for $x > \\ln 4$.',
    opts: [],
    h: '$F(x) = \\displaystyle\\int_0^x f(t)\\,dt$ on the support; it is 0 before the support and 1 after.',
    s: 'For $0 \\leq x \\leq \\ln 4$: $F(x) = \\displaystyle\\int_0^x e^{-t/2}\\,dt = \\left[-2e^{-t/2}\\right]_0^x = 2 - 2e^{-x/2}$.\n\nComplete definition: $F(x) = 0$ for $x < 0$; $F(x) = 2 - 2e^{-x/2}$ for $0 \\leq x \\leq \\ln 4$; $F(x) = 1$ for $x > \\ln 4$.',
    solutionSteps: [
      {
        explanation: 'The cumulative distribution function accumulates probability from the left: $F(x) = P(X \\leq x)$. Below the support ($x < 0$) no probability has accumulated.',
        workingOut: 'F(x) = 0 \\text{ for } x < 0'
      },
      {
        explanation: 'On the support, integrate the pdf from 0 up to $x$.',
        workingOut: 'F(x) = \\int_0^x e^{-t/2}\\,dt = \\left[-2e^{-t/2}\\right]_0^x = 2 - 2e^{-x/2}'
      },
      {
        explanation: 'Above the support ($x > \\ln 4$) all probability has accumulated, so $F$ equals 1. Check continuity at the join: $F(\\ln 4) = 2 - 2(\\tfrac{1}{2}) = 1$ ✓.',
        workingOut: 'F(x) = 1 \\text{ for } x > \\ln 4'
      },
      {
        explanation: 'Write the full piecewise definition.',
        workingOut: 'F(x) = \\begin{cases} 0 & x < 0 \\\\ 2 - 2e^{-x/2} & 0 \\leq x \\leq \\ln 4 \\\\ 1 & x > \\ln 4 \\end{cases}'
      }
    ]
  },

  {
    id: 'cra2023-q28c',
    topicId: 'y12a-10B',
    c: '10B',
    t: 'Continuous distributions',
    source: 'Cranbrook 2023 Trial Q28(c)',
    type: 'short_answer',
    difficulty: 'medium',
    q: 'For the distribution with CDF $F(x) = 2 - 2e^{-x/2}$ on $0 \\leq x \\leq \\ln 4$, find in simplest exact form the median of $X$.',
    a: '$m = 2\\ln\\!\\left(\\dfrac{4}{3}\\right) = \\ln\\!\\left(\\dfrac{16}{9}\\right)$',
    opts: [],
    h: 'The median $m$ satisfies $F(m) = \\dfrac{1}{2}$.',
    s: '$2 - 2e^{-m/2} = \\dfrac{1}{2}$, so $e^{-m/2} = \\dfrac{3}{4}$. Then $-\\dfrac{m}{2} = \\ln\\dfrac{3}{4}$, giving $m = -2\\ln\\dfrac{3}{4} = 2\\ln\\dfrac{4}{3} = \\ln\\dfrac{16}{9}$.',
    solutionSteps: [
      {
        explanation: 'The median is the value $m$ where half the probability lies below: $F(m) = \\dfrac{1}{2}$.',
        workingOut: '2 - 2e^{-m/2} = \\dfrac{1}{2}'
      },
      {
        explanation: 'Isolate the exponential term.',
        workingOut: '2e^{-m/2} = \\dfrac{3}{2} \\implies e^{-m/2} = \\dfrac{3}{4}'
      },
      {
        explanation: 'Take natural logarithms of both sides and solve for $m$, using $-\\ln\\frac{3}{4} = \\ln\\frac{4}{3}$.',
        workingOut: '-\\dfrac{m}{2} = \\ln\\dfrac{3}{4} \\implies m = 2\\ln\\dfrac{4}{3}'
      },
      {
        explanation: 'Simplify to a single logarithm using the power law, and check the median lies inside the support $[0, \\ln 4]$: $\\ln\\frac{16}{9} \\approx 0.575 < \\ln 4 \\approx 1.386$ ✓.',
        workingOut: 'm = \\ln\\dfrac{16}{9}'
      }
    ]
  },

  {
    id: 'cra2023-q29a',
    topicId: 'y12a-2I',
    c: '2I',
    t: 'Trigonometric graphs',
    source: 'Cranbrook 2023 Trial Q29(a)',
    graphData: {
      jsxGraph: {
        width: 420,
        height: 320,
        boundingbox: [-0.5, 2.6, 6.9, -2.6],
        boardOptions: { keepaspectratio: false },
        script: "board.suspendUpdate();\nboard.create('arrow', [[-0.4,0],[6.8,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-2.6],[0,2.6]], {strokeColor:'black'});\nvar PI=Math.PI;\nboard.create('functiongraph', [function(x){ return 2*Math.cos(x); }, 0, 2*PI], {strokeColor:'#1d4ed8',strokeWidth:2});\nvar cot=function(x){ return Math.cos(x)/Math.sin(x); };\nboard.create('functiongraph', [cot, 0.12, PI-0.05], {strokeColor:'#15803d',strokeWidth:2});\nboard.create('functiongraph', [cot, PI+0.05, 2*PI-0.12], {strokeColor:'#15803d',strokeWidth:2});\nvar marks=[[PI/2,'π/2'],[PI,'π'],[3*PI/2,'3π/2'],[2*PI,'2π']];\nfor(var i=0;i<marks.length;i++){ board.create('text',[marks[i][0]-0.12,-0.35,marks[i][1]],{fontSize:11}); }\nboard.create('text', [2.0, 2.3, 'y = 2cos x'], {fontSize:12, strokeColor:'#1d4ed8'});\nboard.create('text', [3.4, 2.3, 'y = cot x'], {fontSize:12, strokeColor:'#15803d'});\nboard.create('text', [0.22, 2.4, 'y'], {fontSize:13});\nboard.create('text', [6.6, 0.35, 'x'], {fontSize:13});\nboard.unsuspendUpdate();"
      }
    },
    type: 'short_answer',
    difficulty: 'easy',
    q: 'The diagram shows the graphs of $y = 2\\cos x$ and $y = \\cot x$ for $0 \\leq x \\leq 2\\pi$. Write down the periods of each of the functions $y = 2\\cos(x)$ and $y = \\cot(x)$.',
    a: 'Period of $2\\cos x$ is $2\\pi$; period of $\\cot x$ is $\\pi$.',
    opts: [],
    h: 'Vertical dilation does not change the period. Cotangent repeats every $\\pi$, like tangent.',
    s: 'The period of $y = 2\\cos x$ is $2\\pi$ (the vertical stretch by 2 does not affect the period). The period of $y = \\cot x$ is $\\pi$, the same as $\\tan x$.',
    solutionSteps: [
      {
        explanation: 'The factor 2 in $y = 2\\cos x$ is a vertical dilation, which stretches the graph vertically but does not change how often it repeats. Cosine has period $2\\pi$.',
        workingOut: '\\text{Period of } 2\\cos x = 2\\pi'
      },
      {
        explanation: 'The cotangent function, like the tangent function, completes a full cycle between consecutive asymptotes, which are $\\pi$ apart.',
        workingOut: '\\text{Period of } \\cot x = \\pi'
      }
    ]
  },

  {
    id: 'cra2023-q29b',
    topicId: 'y11a-11B',
    c: '11B',
    t: 'Solving trig equations',
    source: 'Cranbrook 2023 Trial Q29(b)',
    graphData: {
      jsxGraph: {
        width: 420,
        height: 320,
        boundingbox: [-0.5, 2.6, 6.9, -2.6],
        boardOptions: { keepaspectratio: false },
        script: "board.suspendUpdate();\nboard.create('arrow', [[-0.4,0],[6.8,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-2.6],[0,2.6]], {strokeColor:'black'});\nvar PI=Math.PI;\nboard.create('functiongraph', [function(x){ return 2*Math.cos(x); }, 0, 2*PI], {strokeColor:'#1d4ed8',strokeWidth:2});\nvar cot=function(x){ return Math.cos(x)/Math.sin(x); };\nboard.create('functiongraph', [cot, 0.12, PI-0.05], {strokeColor:'#15803d',strokeWidth:2});\nboard.create('functiongraph', [cot, PI+0.05, 2*PI-0.12], {strokeColor:'#15803d',strokeWidth:2});\nvar marks=[[PI/2,'π/2'],[PI,'π'],[3*PI/2,'3π/2'],[2*PI,'2π']];\nfor(var i=0;i<marks.length;i++){ board.create('text',[marks[i][0]-0.12,-0.35,marks[i][1]],{fontSize:11}); }\nboard.create('text', [2.0, 2.3, 'y = 2cos x'], {fontSize:12, strokeColor:'#1d4ed8'});\nboard.create('text', [3.4, 2.3, 'y = cot x'], {fontSize:12, strokeColor:'#15803d'});\nboard.create('text', [0.22, 2.4, 'y'], {fontSize:13});\nboard.create('text', [6.6, 0.35, 'x'], {fontSize:13});\nboard.unsuspendUpdate();"
      }
    },
    type: 'short_answer',
    difficulty: 'hard',
    q: 'Show that the $x$-coordinates of the points of intersection of $y = 2\\cos x$ and $y = \\cot x$ are the solutions of the equation $\\cos x\\,(2\\sin x - 1) = 0$ for $0 \\leq x \\leq 2\\pi$, then solve this equation.',
    a: '$x = \\dfrac{\\pi}{6}, \\dfrac{\\pi}{2}, \\dfrac{5\\pi}{6}, \\dfrac{3\\pi}{2}$',
    opts: [],
    h: 'Set $2\\cos x = \\dfrac{\\cos x}{\\sin x}$, multiply both sides by $\\sin x$, and bring everything to one side before factoring.',
    s: 'At intersections: $2\\cos x = \\cot x = \\dfrac{\\cos x}{\\sin x}$. Multiplying by $\\sin x$: $2\\cos x\\sin x = \\cos x$, so $2\\cos x \\sin x - \\cos x = 0$, giving $\\cos x(2\\sin x - 1) = 0$. ✓\n\n$\\cos x = 0$: $x = \\dfrac{\\pi}{2}, \\dfrac{3\\pi}{2}$.\n$\\sin x = \\dfrac{1}{2}$: $x = \\dfrac{\\pi}{6}, \\dfrac{5\\pi}{6}$.\n\nAll four: $x = \\dfrac{\\pi}{6}, \\dfrac{\\pi}{2}, \\dfrac{5\\pi}{6}, \\dfrac{3\\pi}{2}$.',
    solutionSteps: [
      {
        explanation: 'At a point of intersection the two $y$-values are equal. Write $\\cot x$ in terms of sine and cosine.',
        workingOut: '2\\cos x = \\dfrac{\\cos x}{\\sin x}'
      },
      {
        explanation: 'Multiply both sides by $\\sin x$ to clear the fraction (noting $\\sin x \\neq 0$ where $\\cot x$ is defined, so no solutions are lost).',
        workingOut: '2\\cos x\\sin x = \\cos x'
      },
      {
        explanation: 'Bring everything to one side and factor out the common factor $\\cos x$ — do not divide by $\\cos x$, as that would lose solutions.',
        workingOut: '2\\cos x\\sin x - \\cos x = 0 \\implies \\cos x\\,(2\\sin x - 1) = 0 \\quad \\checkmark'
      },
      {
        explanation: 'Apply the null factor law and solve $\\cos x = 0$ on $[0, 2\\pi]$.',
        workingOut: '\\cos x = 0 \\implies x = \\dfrac{\\pi}{2},\\ \\dfrac{3\\pi}{2}'
      },
      {
        explanation: 'Solve $\\sin x = \\dfrac{1}{2}$ on $[0, 2\\pi]$: sine is positive in the first and second quadrants with related angle $\\dfrac{\\pi}{6}$.',
        workingOut: '\\sin x = \\dfrac{1}{2} \\implies x = \\dfrac{\\pi}{6},\\ \\dfrac{5\\pi}{6}'
      },
      {
        explanation: 'Collect all solutions in increasing order.',
        workingOut: 'x = \\dfrac{\\pi}{6},\\ \\dfrac{\\pi}{2},\\ \\dfrac{5\\pi}{6},\\ \\dfrac{3\\pi}{2}'
      }
    ]
  },

  {
    id: 'cra2023-q29c',
    topicId: 'y12a-6E',
    c: '6E',
    t: 'Applications of integration of trig',
    source: 'Cranbrook 2023 Trial Q29(c)',
    graphData: {
      jsxGraph: {
        width: 420,
        height: 320,
        boundingbox: [-0.5, 2.6, 6.9, -2.6],
        boardOptions: { keepaspectratio: false },
        script: "board.suspendUpdate();\nboard.create('arrow', [[-0.4,0],[6.8,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-2.6],[0,2.6]], {strokeColor:'black'});\nvar PI=Math.PI;\nboard.create('functiongraph', [function(x){ return 2*Math.cos(x); }, 0, 2*PI], {strokeColor:'#1d4ed8',strokeWidth:2});\nvar cot=function(x){ return Math.cos(x)/Math.sin(x); };\nboard.create('functiongraph', [cot, 0.12, PI-0.05], {strokeColor:'#15803d',strokeWidth:2});\nboard.create('functiongraph', [cot, PI+0.05, 2*PI-0.12], {strokeColor:'#15803d',strokeWidth:2});\nvar marks=[[PI/2,'π/2'],[PI,'π'],[3*PI/2,'3π/2'],[2*PI,'2π']];\nfor(var i=0;i<marks.length;i++){ board.create('text',[marks[i][0]-0.12,-0.35,marks[i][1]],{fontSize:11}); }\nboard.create('text', [2.0, 2.3, 'y = 2cos x'], {fontSize:12, strokeColor:'#1d4ed8'});\nboard.create('text', [3.4, 2.3, 'y = cot x'], {fontSize:12, strokeColor:'#15803d'});\nboard.create('text', [0.22, 2.4, 'y'], {fontSize:13});\nboard.create('text', [6.6, 0.35, 'x'], {fontSize:13});\nboard.unsuspendUpdate();"
      }
    },
    type: 'short_answer',
    difficulty: 'hard',
    q: 'Find in simplest exact form the total area of the bounded region enclosed by the curves $y = 2\\cos x$ and $y = \\cot x$ for $0 < x < \\pi$.',
    a: '$2 - \\ln 4$ square units (i.e. $2 - 2\\ln 2$)',
    opts: [],
    h: 'The curves intersect at $x = \\dfrac{\\pi}{6}, \\dfrac{\\pi}{2}, \\dfrac{5\\pi}{6}$. Determine which curve is on top in each strip, integrate $2\\cos x - \\cot x$ accordingly. Note $\\int \\cot x\\,dx = \\ln|\\sin x|$.',
    s: 'Intersections in $(0, \\pi)$: $x = \\dfrac{\\pi}{6}, \\dfrac{\\pi}{2}, \\dfrac{5\\pi}{6}$.\n\nOn $\\left(\\dfrac{\\pi}{6}, \\dfrac{\\pi}{2}\\right)$: $2\\cos x > \\cot x$. On $\\left(\\dfrac{\\pi}{2}, \\dfrac{5\\pi}{6}\\right)$: $\\cot x > 2\\cos x$.\n\n$A_1 = \\displaystyle\\int_{\\pi/6}^{\\pi/2} (2\\cos x - \\cot x)\\,dx = \\Bigl[2\\sin x - \\ln|\\sin x|\\Bigr]_{\\pi/6}^{\\pi/2} = (2 - 0) - \\left(1 - \\ln\\dfrac{1}{2}\\right) = 1 - \\ln 2$.\n\n$A_2 = \\displaystyle\\int_{\\pi/2}^{5\\pi/6} (\\cot x - 2\\cos x)\\,dx = \\Bigl[\\ln|\\sin x| - 2\\sin x\\Bigr]_{\\pi/2}^{5\\pi/6} = \\left(\\ln\\dfrac{1}{2} - 1\\right) - (0 - 2) = 1 - \\ln 2$.\n\nTotal $= 2(1 - \\ln 2) = 2 - \\ln 4$.',
    solutionSteps: [
      {
        explanation: 'Identify the intersection points inside $(0, \\pi)$ from part (b): $x = \\dfrac{\\pi}{6}, \\dfrac{\\pi}{2}, \\dfrac{5\\pi}{6}$. These split the bounded region into two strips. Test a point in each strip to see which curve is on top: at $x = \\dfrac{\\pi}{3}$, $2\\cos x = 1 > \\cot x \\approx 0.58$; at $x = \\dfrac{2\\pi}{3}$, $\\cot x \\approx -0.58 > 2\\cos x = -1$.',
        workingOut: '\\left(\\tfrac{\\pi}{6}, \\tfrac{\\pi}{2}\\right): 2\\cos x \\text{ on top}; \\quad \\left(\\tfrac{\\pi}{2}, \\tfrac{5\\pi}{6}\\right): \\cot x \\text{ on top}'
      },
      {
        explanation: 'Set up the first integral (top minus bottom) and find the antiderivatives: $\\int 2\\cos x\\,dx = 2\\sin x$ and $\\int \\cot x\\,dx = \\ln|\\sin x|$.',
        workingOut: 'A_1 = \\int_{\\pi/6}^{\\pi/2} (2\\cos x - \\cot x)\\,dx = \\Bigl[2\\sin x - \\ln|\\sin x|\\Bigr]_{\\pi/6}^{\\pi/2}'
      },
      {
        explanation: 'Evaluate $A_1$ at the limits, using $\\sin\\dfrac{\\pi}{2} = 1$, $\\sin\\dfrac{\\pi}{6} = \\dfrac{1}{2}$, $\\ln 1 = 0$ and $-\\ln\\dfrac{1}{2} = \\ln 2$.',
        workingOut: 'A_1 = (2 - 0) - \\left(1 - \\ln\\tfrac{1}{2}\\right) = 2 - 1 - \\ln 2 = 1 - \\ln 2'
      },
      {
        explanation: 'Set up and evaluate the second integral with the curves swapped.',
        workingOut: 'A_2 = \\Bigl[\\ln|\\sin x| - 2\\sin x\\Bigr]_{\\pi/2}^{5\\pi/6} = \\left(\\ln\\tfrac{1}{2} - 1\\right) - (0 - 2) = 1 - \\ln 2'
      },
      {
        explanation: 'Add the two strips and simplify using $2\\ln 2 = \\ln 4$.',
        workingOut: 'A = A_1 + A_2 = 2(1 - \\ln 2) = 2 - \\ln 4 \\text{ square units}'
      }
    ]
  },

  {
    id: 'cra2023-q30a',
    topicId: 'y12a-10B',
    c: '10B',
    t: 'Continuous distributions',
    source: 'Cranbrook 2023 Trial Q30(a)',
    type: 'short_answer',
    difficulty: 'hard',
    q: 'The time taken, $t$ minutes, for a machine to produce car parts is modelled by a continuous random variable with pdf $f(t) = k(t-1)^2$ for $1 \\leq t \\leq 2$, $f(t) = k\\left(2 - \\dfrac{t}{2}\\right)$ for $2 \\leq t \\leq 4$, and $f(t) = 0$ otherwise. Show that the value of $k$ is $\\dfrac{3}{4}$.',
    a: '$\\dfrac{k}{3} + k = \\dfrac{4k}{3} = 1$ gives $k = \\dfrac{3}{4}$.',
    opts: [],
    h: 'The total probability must equal 1: integrate both pieces and add.',
    s: '$\\displaystyle\\int_1^2 k(t-1)^2\\,dt = k\\left[\\dfrac{(t-1)^3}{3}\\right]_1^2 = \\dfrac{k}{3}$.\n\n$\\displaystyle\\int_2^4 k\\left(2 - \\dfrac{t}{2}\\right)dt = k\\left[2t - \\dfrac{t^2}{4}\\right]_2^4 = k[(8-4) - (4-1)] = k$.\n\nTotal: $\\dfrac{k}{3} + k = \\dfrac{4k}{3} = 1$, so $k = \\dfrac{3}{4}$. ✓',
    solutionSteps: [
      {
        explanation: 'For a valid pdf the total area under the curve must equal 1, so integrate each piece over its interval and set the sum to 1.',
        workingOut: '\\int_1^2 k(t-1)^2\\,dt + \\int_2^4 k\\left(2 - \\dfrac{t}{2}\\right)dt = 1'
      },
      {
        explanation: 'Integrate the first piece. The antiderivative of $(t-1)^2$ is $\\dfrac{(t-1)^3}{3}$.',
        workingOut: 'k\\left[\\dfrac{(t-1)^3}{3}\\right]_1^2 = k\\left(\\dfrac{1}{3} - 0\\right) = \\dfrac{k}{3}'
      },
      {
        explanation: 'Integrate the second piece term by term.',
        workingOut: 'k\\left[2t - \\dfrac{t^2}{4}\\right]_2^4 = k\\bigl[(8 - 4) - (4 - 1)\\bigr] = k(4 - 3) = k'
      },
      {
        explanation: 'Add the two areas, set equal to 1, and solve for $k$.',
        workingOut: '\\dfrac{k}{3} + k = \\dfrac{4k}{3} = 1 \\implies k = \\dfrac{3}{4} \\quad \\blacksquare'
      }
    ]
  },

  {
    id: 'cra2023-q30b',
    topicId: 'y12a-10B',
    c: '10B',
    t: 'Continuous distributions',
    source: 'Cranbrook 2023 Trial Q30(b)',
    type: 'short_answer',
    difficulty: 'hard',
    q: 'For the production-time distribution with $k = \\dfrac{3}{4}$, let $F(t)$ be the cumulative distribution function, where $F(2.16) = 0.3652$. Find the least amount of time taken to produce 88% of the parts.',
    a: '$t = 3.2$ minutes',
    opts: [],
    h: 'For $2 \\leq t \\leq 4$, build $F(t) = F(2) + \\displaystyle\\int_2^t \\dfrac{3}{4}\\left(2 - \\dfrac{s}{2}\\right)ds$ and solve $F(t) = 0.88$.',
    s: '$F(2) = \\dfrac{k}{3} = \\dfrac{1}{4}$. For $2 \\leq t \\leq 4$:\n\n$F(t) = \\dfrac{1}{4} + \\dfrac{3}{4}\\left[2s - \\dfrac{s^2}{4}\\right]_2^t = \\dfrac{1}{4} + \\dfrac{3}{4}\\left(2t - \\dfrac{t^2}{4} - 3\\right) = \\dfrac{3t}{2} - \\dfrac{3t^2}{16} - 2$.\n\nSet $F(t) = 0.88$: $\\dfrac{3t}{2} - \\dfrac{3t^2}{16} - 2 = 0.88$, i.e. $\\dfrac{3t^2}{16} - \\dfrac{3t}{2} + 2.88 = 0$, or $t^2 - 8t + 15.36 = 0$.\n\n$t = \\dfrac{8 \\pm \\sqrt{64 - 61.44}}{2} = \\dfrac{8 \\pm 1.6}{2} = 3.2$ or $4.8$. Since $t \\in [2, 4]$: $t = 3.2$ minutes.',
    solutionSteps: [
      {
        explanation: 'First check 88% falls in the second piece: $F(2) = \\dfrac{k}{3} = \\dfrac{1}{4} = 0.25 < 0.88$, so the answer lies in $2 \\leq t \\leq 4$. Build the CDF there by adding the accumulated probability up to 2 and the integral from 2 to $t$.',
        workingOut: 'F(t) = \\dfrac{1}{4} + \\int_2^t \\dfrac{3}{4}\\left(2 - \\dfrac{s}{2}\\right)ds'
      },
      {
        explanation: 'Evaluate the integral.',
        workingOut: 'F(t) = \\dfrac{1}{4} + \\dfrac{3}{4}\\left[2s - \\dfrac{s^2}{4}\\right]_2^t = \\dfrac{1}{4} + \\dfrac{3}{4}\\left(2t - \\dfrac{t^2}{4} - 3\\right) = \\dfrac{3t}{2} - \\dfrac{3t^2}{16} - 2'
      },
      {
        explanation: 'Set $F(t) = 0.88$ (88% of parts produced) and rearrange into a standard quadratic. Multiply through by $\\dfrac{16}{3}$ to clear fractions.',
        workingOut: '\\dfrac{3t}{2} - \\dfrac{3t^2}{16} - 2 = 0.88 \\implies t^2 - 8t + 15.36 = 0'
      },
      {
        explanation: 'Solve with the quadratic formula. The discriminant is $64 - 4(15.36) = 2.56$ and $\\sqrt{2.56} = 1.6$.',
        workingOut: 't = \\dfrac{8 \\pm 1.6}{2} = 4.8 \\text{ or } 3.2'
      },
      {
        explanation: 'Reject $t = 4.8$ since it lies outside the support $[2, 4]$. Verify: $F(3.2) = 4.8 - 1.92 - 2 = 0.88$ ✓.',
        workingOut: 't = 3.2 \\text{ minutes}'
      }
    ]
  },

  {
    id: 'cra2023-q31',
    topicId: 'y11a-9G',
    c: '9G',
    t: 'The chain rule',
    source: 'Cranbrook 2023 Trial Q31',
    type: 'short_answer',
    difficulty: 'hard',
    q: 'A heater converts electrical power, measured in watts, into heat such that the heat produced is given by $h(x) = (f(x))^2$. The heater is plugged into a faulty socket which outputs $x = g(t)$ watts at time $t$ seconds. The power output at time $t = 1$ is 3 watts and is increasing at a rate of 4 watts per second. By considering $h\'(x)$ and using the fact that $\\dfrac{d}{dt}f(g(t)) = f\'(g(t)) \\times g\'(t)$, find the rate of change of the heat produced at time $t = 1$, given that $f(3) = 5$ and $f\'(3) = 2$.',
    a: '$80$ watts per second',
    opts: [],
    h: 'The heat as a function of time is $H(t) = (f(g(t)))^2$. Differentiate with the chain rule: $H\'(t) = 2f(g(t)) \\cdot f\'(g(t)) \\cdot g\'(t)$.',
    s: 'Heat at time $t$: $H(t) = \\bigl(f(g(t))\\bigr)^2$.\n\n$H\'(t) = 2f(g(t)) \\times f\'(g(t)) \\times g\'(t)$.\n\nAt $t = 1$: $g(1) = 3$, $g\'(1) = 4$, $f(3) = 5$, $f\'(3) = 2$.\n\n$H\'(1) = 2 \\times 5 \\times 2 \\times 4 = 80$ watts per second.',
    solutionSteps: [
      {
        explanation: 'Express the heat as a function of time by composing the three functions: the socket outputs $x = g(t)$, and the heat is $h(x) = (f(x))^2$, so $H(t) = \\bigl(f(g(t))\\bigr)^2$.',
        workingOut: 'H(t) = \\bigl(f(g(t))\\bigr)^2'
      },
      {
        explanation: 'Differentiate using the chain rule twice: first the outer square (bring down the 2), then the inner composite $f(g(t))$ using the given fact $\\dfrac{d}{dt}f(g(t)) = f\'(g(t))\\,g\'(t)$.',
        workingOut: "H'(t) = 2f(g(t)) \\times f'(g(t)) \\times g'(t)"
      },
      {
        explanation: 'Collect the values at $t = 1$: the power output is $g(1) = 3$ watts, its rate of increase is $g\'(1) = 4$ watts/second, and we are given $f(3) = 5$ and $f\'(3) = 2$.',
        workingOut: "g(1) = 3, \\quad g'(1) = 4, \\quad f(3) = 5, \\quad f'(3) = 2"
      },
      {
        explanation: 'Substitute all four values into the derivative.',
        workingOut: "H'(1) = 2 \\times 5 \\times 2 \\times 4 = 80"
      },
      {
        explanation: 'State the final answer with units.',
        workingOut: "H'(1) = 80 \\text{ watts per second}"
      }
    ]
  },
];
