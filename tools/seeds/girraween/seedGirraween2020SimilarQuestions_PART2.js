// Girraween 2020 Year 12 Mathematics Advanced - SIMILAR QUESTIONS PART 2
// Q11s-Q20s: Similar variants for Section II Questions 11-20

export const GIRRAWEEN_2020_SIMILAR_QUESTIONS_PART2 = [
  // ============================================================
  // SIMILAR Q11: Tangent to Curve
  // ============================================================
  {
    id: 'girr2020-mc11s',
    topicId: 'y12a-exam-girr',
    c: '5C',
    t: 'The derivative as a rate of change',
    source: 'Girraween 2020 Trial Q11 (Similar)',
    type: 'multiple_choice',
    difficulty: 'medium',
    q: 'Find the equation of the tangent to $y = \\sqrt{2x}$ at the point where $x = 8$.',
    a: '0',
    opts: [
      '$x - 4y + 8 = 0$',
      '$x - 8y + 16 = 0$',
      '$2x - y - 4 = 0$',
      '$2x - 8y + 16 = 0$'
    ],
    h: 'At $x = 8$, find $y = \\sqrt{16} = 4$. The point is $(8, 4)$. Find the gradient from the derivative.',
    s: '$\\frac{dy}{dx} = \\frac{1}{\\sqrt{2x}}$. At $x = 8$: gradient $= \\frac{1}{\\sqrt{16}} = \\frac{1}{4}$. Equation: $y - 4 = \\frac{1}{4}(x - 8)$, which simplifies to $x - 4y + 8 = 0$.',
    solutionSteps: [
      {
        explanation: 'To find the equation of a tangent line at a point, we need: (1) the coordinates of the point of tangency, and (2) the gradient at that point. First, find the $y$-coordinate when $x = 8$.',
        workingOut: 'x = 8: \\quad y = \\sqrt{2(8)} = \\sqrt{16} = 4 \\quad \\text{Point: } (8, 4)'
      },
      {
        explanation: 'Find the derivative: $y = \\sqrt{2x} = (2x)^{1/2}$. Using the chain rule: $\\frac{dy}{dx} = \\frac{1}{2}(2x)^{-1/2} \\cdot 2 = \\frac{1}{\\sqrt{2x}}$.',
        workingOut: '\\frac{dy}{dx} = \\frac{1}{\\sqrt{2x}}'
      },
      {
        explanation: 'At $x = 8$, the gradient is: $\\frac{dy}{dx}\\bigg|_{x=8} = \\frac{1}{\\sqrt{16}} = \\frac{1}{4}$.',
        workingOut: '\\text{Gradient at } x = 8: \\quad m = \\frac{1}{4}'
      },
      {
        explanation: 'Using point-slope form with $(8, 4)$ and $m = \\frac{1}{4}$: $y - 4 = \\frac{1}{4}(x - 8)$. Multiply both sides by 4: $4y - 16 = x - 8$, giving $x - 4y + 8 = 0$.',
        workingOut: 'y - 4 = \\frac{1}{4}(x - 8) \\quad \\Rightarrow \\quad 4(y-4) = x - 8 \\quad \\Rightarrow \\quad x - 4y + 8 = 0'
      }
    ]
  },

  // ============================================================
  // SIMILAR Q12: Cosine Rule
  // ============================================================
  {
    id: 'girr2020-mc12s',
    topicId: 'y12a-exam-girr',
    c: '2B',
    t: 'The cosine rule',
    source: 'Girraween 2020 Trial Q12 (Similar)',
    type: 'multiple_choice',
    difficulty: 'medium',
    q: 'In triangle PQR: $PQ = 8$ cm, $PR = 5$ cm, $\\angle QPR = 53°$. Find QR to 1 decimal place.',
    a: '1',
    opts: [
      '$5.8$ cm',
      '$6.5$ cm',
      '$7.2$ cm',
      '$8.1$ cm'
    ],
    h: 'Use the cosine rule: $a^2 = b^2 + c^2 - 2bc\\cos A$.',
    s: 'We have a triangle with two known sides and the included angle. QR is opposite to angle P. Using the cosine rule: $QR^2 = PQ^2 + PR^2 - 2(PQ)(PR)\\cos(P)$. Substituting: $QR^2 = 64 + 25 - 80\\cos(53°) = 89 - 80(0.6018) = 89 - 48.14 = 40.86$. Therefore $QR = \\sqrt{40.86} \\approx 6.39 \\approx 6.5$ cm.',
    solutionSteps: [
      {
        explanation: 'Identify the known and unknown sides. We know two sides (PQ = 8 cm, PR = 5 cm) and the angle between them (∠QPR = 53°). We need to find the side opposite to this angle, which is QR. This is a classic setup for the cosine rule.',
        workingOut: 'PQ = 8 \\text{ cm}, \\; PR = 5 \\text{ cm}, \\; \\angle QPR = 53°'
      },
      {
        explanation: 'The cosine rule states that for any triangle with sides $a$, $b$, $c$ and angle $A$ opposite to side $a$: $a^2 = b^2 + c^2 - 2bc\\cos(A)$. In our case, QR is the side opposite to angle P.',
        workingOut: 'QR^2 = PQ^2 + PR^2 - 2(PQ)(PR)\\cos(P)'
      },
      {
        explanation: 'Substitute the known values. Calculate $PQ^2 = 8^2 = 64$ and $PR^2 = 5^2 = 25$.',
        workingOut: 'QR^2 = 64 + 25 - 2(8)(5)\\cos(53°) = 89 - 80\\cos(53°)'
      },
      {
        explanation: 'Calculate the value of $\\cos(53°) \\approx 0.6018$. Then $80 \\times 0.6018 \\approx 48.144$.',
        workingOut: '80 \\times 0.6018 \\approx 48.144'
      },
      {
        explanation: 'Substitute back into the equation.',
        workingOut: 'QR^2 = 89 - 48.144 = 40.856'
      },
      {
        explanation: 'Take the square root of both sides.',
        workingOut: 'QR = \\sqrt{40.856} \\approx 6.4 \\text{ cm}'
      }
    ]
  },

  // ============================================================
  // SIMILAR Q13: Combinatorics and Probability
  // ============================================================
  {
    id: 'girr2020-mc13s',
    topicId: 'y12a-exam-girr',
    c: '12D',
    t: 'Permutations and combinations',
    source: 'Girraween 2020 Trial Q13 (Similar)',
    type: 'multiple_choice',
    difficulty: 'medium',
    q: 'The number of arrangements of the letters in the word PAPER is ____. If randomly selected, the probability of an arrangement starting with P is ____.',
    a: '0',
    opts: [
      '$60; \\frac{1}{5}$',
      '$120; \\frac{1}{5}$',
      '$60; \\frac{2}{5}$',
      '$120; \\frac{2}{5}$'
    ],
    h: 'PAPER has 5 letters with 2 As. Arrangements = $\\frac{5!}{2!}$. For starting with P, arrange the remaining 4 letters (with 2 As).',
    s: 'The word PAPER has 5 letters: P, A, P, E, R. Two of these letters are the same (two Ps). The total number of arrangements is $\\frac{5!}{2!} = \\frac{120}{2} = 60$. For arrangements starting with P: fix one P at the start, leaving 4 letters (P, A, E, R) with one duplicate A and one duplicate P already placed. Arrange the remaining 4 letters: A, P, E, R (no more duplicates), which is $4! = 24$. So the probability is $\\frac{24}{60} = \\frac{2}{5}$.',
    solutionSteps: [
      {
        explanation: 'Count the total letters in PAPER: P, A, P, E, R. There are 5 letters total, but the letter P appears twice (repeated letter).',
        workingOut: '\\text{PAPER has 5 letters with P appearing 2 times}'
      },
      {
        explanation: 'When we have repeated letters, the formula for permutations is: Number of arrangements = $\\frac{n!}{n_1! \\cdot n_2! \\cdots}$, where $n$ is the total number of letters and $n_i$ is the frequency of each repeated letter.',
        workingOut: '\\text{Arrangements} = \\frac{n!}{\\text{(product of factorials of repetitions)}}'
      },
      {
        explanation: 'Apply the formula with 5 letters and 2 Ps: Total arrangements = $\\frac{5!}{2!}$.',
        workingOut: '\\text{Total} = \\frac{5!}{2!} = \\frac{120}{2} = 60'
      },
      {
        explanation: 'For arrangements starting with P: fix one P at the beginning. This leaves 4 remaining positions to fill with the letters: A, P, E, R (one of each, since we used one P already).',
        workingOut: '\\text{After fixing P at position 1: arrange A, P, E, R in 4 positions}'
      },
      {
        explanation: 'Since the remaining 4 letters are all distinct, the number of ways to arrange them is simply $4!$.',
        workingOut: '\\text{Arrangements starting with P} = 4! = 24'
      },
      {
        explanation: 'The probability of randomly selecting an arrangement that starts with P is the ratio of favorable outcomes to total outcomes.',
        workingOut: 'P(\\text{starts with P}) = \\frac{\\text{arrangements starting with P}}{\\text{total arrangements}} = \\frac{24}{60}'
      },
      {
        explanation: 'Simplify the fraction by dividing both numerator and denominator by their GCD (12).',
        workingOut: '\\frac{24}{60} = \\frac{24 \\div 12}{60 \\div 12} = \\frac{2}{5}'
      }
    ]
  },

  // ============================================================
  // SIMILAR Q14a: Stationary Points
  // ============================================================
  {
    id: 'girr2020-mc14as',
    topicId: 'y12a-exam-girr',
    c: '3C',
    t: 'Curve sketching',
    source: 'Girraween 2020 Trial Q14a (Similar)',
    type: 'multiple_choice',
    difficulty: 'medium',
    q: 'For $f(x) = x^3 - 6x^2 + 12x$, find the $x$-coordinate of the stationary point.',
    a: '1',
    opts: [
      '$x = 0$',
      '$x = 2$',
      '$x = 3$',
      '$x = 4$'
    ],
    h: 'Find $f\'(x)$ and set it equal to zero.'
  },

  // ============================================================
  // SIMILAR Q14b: Sketch Curve
  // ============================================================
  {
    id: 'girr2020-mc14bs',
    topicId: 'y12a-exam-girr',
    c: '3C',
    t: 'Curve sketching',
    source: 'Girraween 2020 Trial Q14b (Similar)',
    type: 'teacher_review',
    difficulty: 'medium',
    q: 'Sketch the graph of $f(x) = x^3 - 6x^2 + 12x$ for $-1 \\leq x \\leq 5$. **(Teacher-graded sketch)**',
    a: 'sketch',
    opts: ['Sketch provided']
  },

  // ============================================================
  // SIMILAR Q15a: Simultaneous Equations
  // ============================================================
  {
    id: 'girr2020-mc15as',
    topicId: 'y12a-exam-girr',
    c: '1A',
    t: 'Simultaneous equations',
    source: 'Girraween 2020 Trial Q15a (Similar)',
    type: 'multiple_choice',
    difficulty: 'easy',
    q: 'Two items cost £15 total. One item costs 3 times the other. Write an equation in terms of $x$ and $y$.',
    a: '0',
    opts: [
      '$x + y = 15$ and $x = 3y$',
      '$x + y = 15$ and $y = 3x$',
      '$3x + y = 15$',
      '$x + 3y = 15$'
    ],
    h: 'Let $x$ and $y$ be the costs. One equation is the total. The other relates them.'
  },

  // ============================================================
  // SIMILAR Q15b: Solve System
  // ============================================================
  {
    id: 'girr2020-mc15bs',
    topicId: 'y12a-exam-girr',
    c: '1A',
    t: 'Simultaneous equations',
    source: 'Girraween 2020 Trial Q15b (Similar)',
    type: 'multiple_choice',
    difficulty: 'easy',
    q: 'Solve the system: $x + y = 15$ and $x = 3y$.',
    a: '1',
    opts: [
      '$x = 10, y = 5$',
      '$x = 11.25, y = 3.75$',
      '$x = 12, y = 3$',
      '$x = 9, y = 6$'
    ],
    h: 'Substitute $x = 3y$ into the first equation.'
  },

  // ============================================================
  // SIMILAR Q16: Product Rule Differentiation
  // ============================================================
  {
    id: 'girr2020-mc16s',
    topicId: 'y12a-exam-girr',
    c: '5D',
    t: 'Differentiation of $e^x$ and related functions',
    source: 'Girraween 2020 Trial Q16 (Similar)',
    type: 'multiple_choice',
    difficulty: 'medium',
    q: 'Differentiate $y = e^{-2x} \\sin x$.',
    a: '2',
    opts: [
      '$\\frac{dy}{dx} = e^{-2x} \\cos x$',
      '$\\frac{dy}{dx} = e^{-2x}(\\cos x - 2\\sin x)$',
      '$\\frac{dy}{dx} = e^{-2x}(-2\\sin x + \\cos x)$',
      '$\\frac{dy}{dx} = -2e^{-2x} \\sin x$'
    ],
    h: 'Use the product rule: $(uv)\' = u\'v + uv\'$.'
  },

  // ============================================================
  // SIMILAR Q17: Composite Functions
  // ============================================================
  {
    id: 'girr2020-mc17s',
    topicId: 'y12a-exam-girr',
    c: '5B',
    t: 'Composition of functions',
    source: 'Girraween 2020 Trial Q17 (Similar)',
    type: 'multiple_choice',
    difficulty: 'medium',
    q: 'Given $f(x) = 2x - 1$ and $g(x) = x^2 + 3$, find $f(g(x))$.',
    a: '0',
    opts: [
      '$2x^2 + 5$',
      '$2x^2 - 1$',
      '$x^2 + 2x + 2$',
      '$4x^2 + 2x + 5$'
    ],
    h: 'Substitute $g(x) = x^2 + 3$ into $f(x) = 2x - 1$.'
  },

  // ============================================================
  // SIMILAR Q18a: Sector Properties
  // ============================================================
  {
    id: 'girr2020-mc18as',
    topicId: 'y12a-exam-girr',
    c: '8E',
    t: 'Sector, arc and segment',
    source: 'Girraween 2020 Trial Q18a (Similar)',
    type: 'multiple_choice',
    difficulty: 'medium',
    q: 'A sector has arc length $5\\pi$ cm and angle $\\theta = 0.8$ radians. Show that $r \\geq 6$ when $0.8$ is the angle.',
    a: '1',
    opts: [
      '$r \\geq 5$',
      '$r \\geq 6.25$',
      '$r \\geq 7.5$',
      '$r \\geq 10$'
    ],
    h: 'Use $l = r\\theta$ to find $r = \\frac{l}{\\theta}$.'
  },

  // ============================================================
  // SIMILAR Q18b: Sector Area
  // ============================================================
  {
    id: 'girr2020-mc18bs',
    topicId: 'y12a-exam-girr',
    c: '8E',
    t: 'Sector, arc and segment',
    source: 'Girraween 2020 Trial Q18b (Similar)',
    type: 'multiple_choice',
    difficulty: 'medium',
    q: 'Find the area of the sector when $r = 5$ and $\\theta = 1.6$ radians.',
    a: '2',
    opts: [
      '$6$ square units',
      '$7.5$ square units',
      '$8$ square units',
      '$10$ square units'
    ],
    h: 'Area of sector = $\\frac{1}{2}r^2\\theta$.'
  },

  // ============================================================
  // SIMILAR Q19a: Discrete Random Variable
  // ============================================================
  {
    id: 'girr2020-mc19as',
    topicId: 'y12a-exam-girr',
    c: '10B',
    t: 'Discrete random variables',
    source: 'Girraween 2020 Trial Q19a (Similar)',
    type: 'multiple_choice',
    difficulty: 'medium',
    q: 'Check if the distribution is valid: $P(Y=0)=0.15, P(Y=1)=0.25, P(Y=2)=0.35, P(Y=3)=0.25$.',
    a: '0',
    opts: [
      'Valid: sum = 1.0',
      'Not valid: sum > 1.0',
      'Not valid: sum < 1.0',
      'Cannot determine'
    ],
    h: 'Add all probabilities: $0.15 + 0.25 + 0.35 + 0.25$.'
  },

  // ============================================================
  // SIMILAR Q19b: Expected Value
  // ============================================================
  {
    id: 'girr2020-mc19bs',
    topicId: 'y12a-exam-girr',
    c: '10B',
    t: 'Discrete random variables',
    source: 'Girraween 2020 Trial Q19b (Similar)',
    type: 'multiple_choice',
    difficulty: 'medium',
    q: 'Find $E(Y)$ using the distribution from part (a).',
    a: '1',
    opts: [
      '$E(Y) = 1.5$',
      '$E(Y) = 1.7$',
      '$E(Y) = 1.9$',
      '$E(Y) = 2.0$'
    ],
    h: '$E(Y) = \\sum y \\cdot P(Y = y)$.'
  },

  // ============================================================
  // SIMILAR Q19c: Probability Calculation
  // ============================================================
  {
    id: 'girr2020-mc19cs',
    topicId: 'y12a-exam-girr',
    c: '10B',
    t: 'Discrete random variables',
    source: 'Girraween 2020 Trial Q19c (Similar)',
    type: 'multiple_choice',
    difficulty: 'medium',
    q: 'Find $P(Y \\leq 1)$ from part (a).',
    a: '0',
    opts: [
      '$P(Y \\leq 1) = 0.40$',
      '$P(Y \\leq 1) = 0.50$',
      '$P(Y \\leq 1) = 0.60$',
      '$P(Y \\leq 1) = 0.75$'
    ],
    h: '$P(Y \\leq 1) = P(Y=0) + P(Y=1)$.'
  },

  // ============================================================
  // SIMILAR Q20: Trigonometric Differentiation
  // ============================================================
  {
    id: 'girr2020-mc20s',
    topicId: 'y12a-exam-girr',
    c: '6D',
    t: 'Differentiating trigonometric functions',
    source: 'Girraween 2020 Trial Q20 (Similar)',
    type: 'multiple_choice',
    difficulty: 'medium',
    q: 'Given $y = \\cos^2(3x)$, find $\\frac{dy}{dx}$. What is the coefficient of the leading term?',
    a: '2',
    opts: [
      '$m = -3$',
      '$m = -2$',
      '$m = -6$',
      '$m = 6$'
    ],
    h: 'Use the chain rule with $u = \\cos(3x)$, then $y = u^2$.'
  }
];

export default GIRRAWEEN_2020_SIMILAR_QUESTIONS_PART2;
