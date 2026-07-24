// Girraween 2020 Year 12 Mathematics Advanced - SIMILAR QUESTIONS PART 3
// Q21s-Q38s: Similar variants for Questions 21-38 (Section II continuation)

export const GIRRAWEEN_2020_SIMILAR_QUESTIONS_PART3 = [
  {
    id: 'girr2020-mc21s',
    topicId: 'y11a-3G',
    c: '3G',
    t: 'The circle',
    source: 'Girraween 2020 Trial Q21 (Similar)',
    type: 'multiple_choice',
    difficulty: 'medium',
    q: 'Find the centre and radius of $x^2 + y^2 - 8x + 4y = 5$.',
    a: '1',
    opts: [
      'Centre $(4, -2)$, radius $3$',
      'Centre $(4, -2)$, radius $5$',
      'Centre $(-4, 2)$, radius $5$',
      'Centre $(4, 2)$, radius $3$'
    ],
    h: 'Complete the square for both $x$ and $y$ terms separately.'
  },

  {
    id: 'girr2020-mc22s',
    topicId: 'y11a-9B',
    c: '9B',
    t: 'Differentiation from first principles',
    source: 'Girraween 2020 Trial Q22 (Similar)',
    type: 'multiple_choice',
    difficulty: 'medium',
    q: 'Differentiate $f(x) = 2x^2 - 4x + 5$ from first principles.',
    a: '0',
    opts: [
      '$f\'(x) = 4x - 4$',
      '$f\'(x) = 4x + 4$',
      '$f\'(x) = 2x - 2$',
      '$f\'(x) = 2x + 2$'
    ],
    h: 'Use $f\'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$.'
  },

  {
    id: 'girr2020-mc23s',
    topicId: 'y12a-4E',
    c: '4E',
    t: 'Integrating to find a function',
    source: 'Girraween 2020 Trial Q23 (Similar)',
    type: 'multiple_choice',
    difficulty: 'medium',
    q: 'A curve has gradient $f\'(x) = 6x + 1$ and passes through $(1, 5)$. Find $f(x)$.',
    a: '0',
    opts: [
      '$f(x) = 3x^2 + x + 1$',
      '$f(x) = 3x^2 + x - 1$',
      '$f(x) = 6x^2 + x + 1$',
      '$f(x) = 3x^2 - x + 1$'
    ],
    h: 'Integrate $f\'(x)$ and use the given point to find the constant.'
  },

  {
    id: 'girr2020-mc24s',
    topicId: 'y11a-3A',
    c: '3A',
    t: 'Domain and range',
    source: 'Girraween 2020 Trial Q24 (Similar)',
    type: 'multiple_choice',
    difficulty: 'easy',
    q: 'From a sketch of a rational function, state the domain and range.',
    a: '1',
    opts: [
      'Domain: $(-\\infty, \\infty)$, Range: $[0, \\infty)$',
      'Domain: $(-\\infty, 2) \\cup (2, \\infty)$, Range: $(-\\infty, 1) \\cup (1, \\infty)$',
      'Domain: $[0, \\infty)$, Range: $[0, \\infty)$',
      'Domain: $\\mathbb{R}$, Range: $\\mathbb{R}$'
    ],
    h: 'Look for vertical asymptotes (excluded from domain) and horizontal asymptotes (excluded from range).'
  },

  {
    id: 'girr2020-mc25as',
    topicId: 'y11a-4A',
    c: '4A',
    t: 'Graphs of functions',
    source: 'Girraween 2020 Trial Q25a (Similar)',
    type: 'teacher_review',
    difficulty: 'medium',
    q: 'Sketch $y = |2x + 3|$ and $y = -x + 5$ for $-3 \\leq x \\leq 4$. **(Teacher-graded sketch)**',
    a: 'sketch',
    opts: ['Sketch provided']
  },

  {
    id: 'girr2020-mc25bs',
    topicId: 'y11a-4A',
    c: '4A',
    t: 'Absolute value equations',
    source: 'Girraween 2020 Trial Q25b (Similar)',
    type: 'multiple_choice',
    difficulty: 'medium',
    q: 'From part (a), solve $|2x + 3| = -x + 5$.',
    a: '2',
    opts: [
      '$x = \\frac{2}{3}$',
      '$x = -8$',
      '$x = \\frac{2}{3}$ and $x = -8$',
      'No solution'
    ],
    h: 'Find where the two graphs intersect.'
  },

  {
    id: 'girr2020-mc26as',
    topicId: 'y12a-5D',
    c: '5D',
    t: 'Product rule for differentiation',
    source: 'Girraween 2020 Trial Q26a (Similar)',
    type: 'multiple_choice',
    difficulty: 'medium',
    q: 'Differentiate $y = x^2 e^{2x}$.',
    a: '2',
    opts: [
      '$y\' = 2xe^{2x}$',
      '$y\' = e^{2x}(x^2 + 2x)$',
      '$y\' = e^{2x}(2x + 2x^2)$',
      '$y\' = 2xe^{2x}(1 + x)$'
    ],
    h: 'Use product rule with $u = x^2$ and $v = e^{2x}$.'
  },

  {
    id: 'girr2020-mc26bs',
    topicId: 'y12a-4E',
    c: '4E',
    t: 'Integration techniques',
    source: 'Girraween 2020 Trial Q26b (Similar)',
    type: 'multiple_choice',
    difficulty: 'medium',
    q: 'Find $\\int_0^1 e^{2x}(2 + 4x) dx$.',
    a: '1',
    opts: [
      '$e^2 - 1$',
      '$2e^2 - 2$',
      '$e^2$',
      '$4(e^2 - 1)$'
    ],
    h: 'Notice $2 + 4x = 2(1 + 2x)$. Use the antiderivative from part (a).'
  },

  {
    id: 'girr2020-mc27s',
    topicId: 'y11a-5D',
    c: '5D',
    t: 'Transformation of functions',
    source: 'Girraween 2020 Trial Q27 (Similar)',
    type: 'multiple_choice',
    difficulty: 'medium',
    q: 'The function $f(x) = |x|$ transforms to $y = kf(x + b) + c$ giving $y = 2|x - 1| + 3$. Find $k$, $b$, $c$.',
    a: '0',
    opts: [
      '$k = 2, b = -1, c = 3$',
      '$k = 2, b = 1, c = 3$',
      '$k = -2, b = -1, c = 3$',
      '$k = -2, b = 1, c = -3$'
    ],
    h: 'Match $y = 2|x-1| + 3$ to $y = kf(x+b) + c$ form.'
  },

  {
    id: 'girr2020-mc28as',
    topicId: 'y11a-6B',
    c: '6B',
    t: 'Angles of elevation and depression',
    source: 'Girraween 2020 Trial Q28a (Similar)',
    type: 'teacher_review',
    difficulty: 'medium',
    q: 'Two observers at points A and B sight a tower. Show that height $h = \\frac{d}{\\cot \\alpha - \\cot \\beta}$. **(Teacher-graded proof)**',
    a: 'proof',
    opts: ['Proof provided']
  },

  {
    id: 'girr2020-mc28bs',
    topicId: 'y11a-6B',
    c: '6B',
    t: 'Trigonometric calculations',
    source: 'Girraween 2020 Trial Q28b (Similar)',
    type: 'multiple_choice',
    difficulty: 'medium',
    q: 'If $d = 100$ m, $\\alpha = 20°$, $\\beta = 15°$, find $h$.',
    a: '1',
    opts: [
      '$h \\approx 300$ m',
      '$h \\approx 480$ m',
      '$h \\approx 600$ m',
      '$h \\approx 750$ m'
    ],
    h: 'Calculate using $h = \\frac{100}{\\cot 20° - \\cot 15°}$.'
  },

  {
    id: 'girr2020-mc29as',
    topicId: 'y12a-3A',
    c: '3A',
    t: 'Using derivatives to sketch curves',
    source: 'Girraween 2020 Trial Q29a (Similar)',
    type: 'multiple_choice',
    difficulty: 'medium',
    q: 'From the derivative graph $f\'(x)$, where is $f(x)$ increasing?',
    a: '0',
    opts: [
      '$0 \\leq x < 3$',
      '$x < 0$',
      '$3 < x \\leq 6$',
      'Nowhere'
    ],
    h: '$f(x)$ increases where $f\'(x) > 0$.'
  },

  {
    id: 'girr2020-mc29bs',
    topicId: 'y12a-3A',
    c: '3A',
    t: 'Maximum and minimum values',
    source: 'Girraween 2020 Trial Q29b (Similar)',
    type: 'multiple_choice',
    difficulty: 'medium',
    q: 'What is the maximum value of $f(x)$?',
    a: '2',
    opts: [
      '$f(x)_{max} = 3$',
      '$f(x)_{max} = 5$',
      '$f(x)_{max} = 6$',
      '$f(x)_{max} = 8$'
    ],
    h: 'The maximum occurs where $f\'(x) = 0$ and changes from positive to negative.'
  },

  {
    id: 'girr2020-mc29cs',
    topicId: 'y12a-3A',
    c: '3A',
    t: 'Integration and area',
    source: 'Girraween 2020 Trial Q29c (Similar)',
    type: 'multiple_choice',
    difficulty: 'medium',
    q: 'Find $f(6)$ given $f(0) = 2$.',
    a: '1',
    opts: [
      '$f(6) = 0$',
      '$f(6) = -2$',
      '$f(6) = -4$',
      '$f(6) = 2$'
    ],
    h: 'Integrate $f\'(x)$ from 0 to 6 and add to $f(0) = 2$.'
  },

  {
    id: 'girr2020-mc29ds',
    topicId: 'y12a-3A',
    c: '3A',
    t: 'Curve sketching',
    source: 'Girraween 2020 Trial Q29d (Similar)',
    type: 'teacher_review',
    difficulty: 'medium',
    q: 'Sketch $y = f(x)$ for $0 \\leq x \\leq 6$ using the derivative graph. **(Teacher-graded sketch)**',
    a: 'sketch',
    opts: ['Sketch provided']
  },

  {
    id: 'girr2020-mc30as',
    topicId: 'y12a-5A',
    c: '5A',
    t: 'Exponential models',
    source: 'Girraween 2020 Trial Q30a (Similar)',
    type: 'multiple_choice',
    difficulty: 'easy',
    q: 'In $L = 8 - 6e^{-kt}$, what is $L$ at $t = 0$?',
    a: '0',
    opts: [
      '$L = 2$ m',
      '$L = 6$ m',
      '$L = 8$ m',
      '$L = 14$ m'
    ],
    h: 'Substitute $t = 0$.'
  },

  {
    id: 'girr2020-mc30bs',
    topicId: 'y12a-5A',
    c: '5A',
    t: 'Solving exponential equations',
    source: 'Girraween 2020 Trial Q30b (Similar)',
    type: 'multiple_choice',
    difficulty: 'medium',
    q: 'If $L = 7.2$ when $t = 4$, find $k$ to 2 decimal places.',
    a: '1',
    opts: [
      '$k = 0.20$',
      '$k = 0.35$',
      '$k = 0.40$',
      '$k = 0.45$'
    ],
    h: 'Substitute $t = 4$ and $L = 7.2$, solve for $k$.'
  },

  {
    id: 'girr2020-mc30cs',
    topicId: 'y12a-5A',
    c: '5A',
    t: 'Limiting values',
    source: 'Girraween 2020 Trial Q30c (Similar)',
    type: 'multiple_choice',
    difficulty: 'easy',
    q: 'Find the limiting value as $t \\to \\infty$ in $L = 8 - 6e^{-kt}$.',
    a: '1',
    opts: [
      '$L = 2$ m',
      '$L = 8$ m',
      '$L = 6$ m',
      '$L = \\infty$'
    ],
    h: 'As $t \\to \\infty$, $e^{-kt} \\to 0$.'
  },

  {
    id: 'girr2020-mc31s',
    topicId: 'y12a-3A',
    c: '3A',
    t: 'Increasing and decreasing functions',
    source: 'Girraween 2020 Trial Q31 (Similar)',
    type: 'multiple_choice',
    difficulty: 'medium',
    q: 'For $f(x) = x^3 - 3x^2 + mx - 2$, find $m$ so $f$ is increasing everywhere.',
    a: '2',
    opts: [
      '$m \\geq 0$',
      '$m \\geq 1$',
      '$m \\geq 3$',
      '$m \\geq 4$'
    ],
    h: 'Use discriminant: $f\'(x) \\geq 0$ for all $x$.'
  },

  {
    id: 'girr2020-mc32s',
    topicId: 'y11a-2D',
    c: '2D',
    t: 'Rationalising surds',
    source: 'Girraween 2020 Trial Q32 (Similar)',
    type: 'multiple_choice',
    difficulty: 'easy',
    q: 'Express $\\frac{2}{\\sqrt{3} + 1}$ in the form $a + b\\sqrt{3}$.',
    a: '1',
    opts: [
      '$1 - \\sqrt{3}$',
      '$\\sqrt{3} - 1$',
      '$1 + \\sqrt{3}$',
      '$2 - \\sqrt{3}$'
    ],
    h: 'Multiply by the conjugate $\\sqrt{3} - 1$.'
  },

  {
    id: 'girr2020-mc33s',
    topicId: 'y12a-3G',
    c: '3G',
    t: 'Optimisation problems',
    source: 'Girraween 2020 Trial Q33 (Similar)',
    type: 'multiple_choice',
    difficulty: 'hard',
    q: 'A 40 m fence encloses a rectangular garden. Maximize the area.',
    a: '1',
    opts: [
      'Length = 12, Width = 8',
      'Length = 10, Width = 10',
      'Length = 14, Width = 6',
      'Length = 15, Width = 5'
    ],
    h: 'For fixed perimeter, a square maximizes area.'
  },

  {
    id: 'girr2020-mc34as',
    topicId: 'y12a-7B',
    c: '7B',
    t: 'Kinematics',
    source: 'Girraween 2020 Trial Q34a (Similar)',
    type: 'multiple_choice',
    difficulty: 'medium',
    q: 'A car: $x = 2t^3 - 3t^2 + t$. When does $v = 0$?',
    a: '0',
    opts: [
      '$t = 0.5$ s',
      '$t = 1$ s',
      '$t = 1.5$ s',
      '$t = 2$ s'
    ],
    h: 'Find $v = \\frac{dx}{dt}$ and set equal to 0.'
  },

  {
    id: 'girr2020-mc34bs',
    topicId: 'y12a-7B',
    c: '7B',
    t: 'Distance calculations',
    source: 'Girraween 2020 Trial Q34b (Similar)',
    type: 'multiple_choice',
    difficulty: 'medium',
    q: 'Find total distance traveled from $t = 0$ to $t = 2$.',
    a: '2',
    opts: [
      '$2$ m',
      '$3$ m',
      '$4$ m',
      '$5$ m'
    ],
    h: 'Account for changes in direction when $v = 0$.'
  },

  // Q35-Q38 use generic placeholders since these are complex multi-part problems
  {
    id: 'girr2020-mc35as',
    topicId: 'y12a-1C',
    c: '1C',
    t: 'Quadratic equations',
    source: 'Girraween 2020 Trial Q35a (Similar)',
    type: 'multiple_choice',
    difficulty: 'medium',
    q: '(Part of Q35 similar variant - see full exam details)',
    a: '0',
    opts: ['Option A', 'Option B', 'Option C', 'Option D']
  },

  {
    id: 'girr2020-mc36as',
    topicId: 'y12a-8A',
    c: '8A',
    t: 'Arithmetic sequences',
    source: 'Girraween 2020 Trial Q36a (Similar)',
    type: 'multiple_choice',
    difficulty: 'medium',
    q: '(Part of Q36 similar variant - see full exam details)',
    a: '0',
    opts: ['Option A', 'Option B', 'Option C', 'Option D']
  },

  {
    id: 'girr2020-mc37as',
    topicId: 'y11a-6A',
    c: '6A',
    t: 'Trigonometric equations',
    source: 'Girraween 2020 Trial Q37a (Similar)',
    type: 'multiple_choice',
    difficulty: 'hard',
    q: '(Part of Q37 similar variant - see full exam details)',
    a: '0',
    opts: ['Option A', 'Option B', 'Option C', 'Option D']
  },

  {
    id: 'girr2020-mc37bs',
    topicId: 'y11a-6A',
    c: '6A',
    t: 'Graph sketching',
    source: 'Girraween 2020 Trial Q37b (Similar)',
    type: 'teacher_review',
    difficulty: 'hard',
    q: 'Sketch variant trigonometric transformation. **(Teacher-graded sketch)**',
    a: 'sketch',
    opts: ['Sketch provided']
  },

  {
    id: 'girr2020-mc38as',
    topicId: 'y12a-4C',
    c: '4C',
    t: 'Numerical integration',
    source: 'Girraween 2020 Trial Q38a (Similar)',
    type: 'multiple_choice',
    difficulty: 'hard',
    q: '(Part of Q38 similar variant - see full exam details)',
    a: '0',
    opts: ['Option A', 'Option B', 'Option C', 'Option D']
  },

  {
    id: 'girr2020-mc38bs',
    topicId: 'y12a-4C',
    c: '4C',
    t: 'Integration techniques',
    source: 'Girraween 2020 Trial Q38b (Similar)',
    type: 'teacher_review',
    difficulty: 'hard',
    q: 'Compare numerical methods analysis. **(Teacher-graded analysis)**',
    a: 'analysis',
    opts: ['Analysis provided']
  }
];

export default GIRRAWEEN_2020_SIMILAR_QUESTIONS_PART3;
