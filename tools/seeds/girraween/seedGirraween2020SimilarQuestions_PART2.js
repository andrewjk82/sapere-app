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
        workingOut: '$PQ = 8\\text{ cm}, PR = 5\\text{ cm}, \\angle QPR = 53^\\circ$'
      },
      {
        explanation: 'The cosine rule states that for any triangle with sides $a$, $b$, $c$ and angle $A$ opposite to side $a$: $a^2 = b^2 + c^2 - 2bc\\cos(A)$. In our case, QR is the side opposite to angle P.',
        workingOut: '$QR^2 = PQ^2 + PR^2 - 2(PQ)(PR)\\cos(P)$'
      },
      {
        explanation: 'Substitute the known values. Calculate $PQ^2 = 8^2 = 64$ and $PR^2 = 5^2 = 25$.',
        workingOut: '$QR^2 = 64 + 25 - 2(8)(5)\\cos(53°) = 89 - 80\\cos(53°)$'
      },
      {
        explanation: 'Calculate the value of $\\cos(53^\\circ) \\approx 0.6018$. Then $80 \\times 0.6018 \\approx 48.144$.',
        workingOut: '$80 \\times 0.6018 \\approx 48.144$'
      },
      {
        explanation: 'Substitute back into the equation.',
        workingOut: '$QR^2 = 89 - 48.144 = 40.856$'
      },
      {
        explanation: 'Take the square root of both sides.',
        workingOut: '$QR = \\sqrt{40.856} \\approx 6.4\\text{ cm}$'
      }
    ],
    graphData: null
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
        workingOut: '$n = 5, \\; n_P = 2$'
      },
      {
        explanation: 'When we have repeated letters, the formula for permutations is: Number of arrangements = $\\frac{n!}{n_1! \\cdot n_2! \\cdots}$, where $n$ is the total number of letters and $n_i$ is the frequency of each repeated letter.',
        workingOut: '$\\text{Arrangements} = \\frac{n!}{n_1! \\cdot n_2! \\cdots}$'
      },
      {
        explanation: 'Apply the formula with 5 letters and 2 Ps: Total arrangements = $\\frac{5!}{2!}$.',
        workingOut: '$\\text{Total} = \\frac{5!}{2!} = 60$'
      },
      {
        explanation: 'For arrangements starting with P: fix one P at the beginning. This leaves 4 remaining positions to fill with the letters: A, P, E, R (one of each, since we used one P already).',
        workingOut: '$n_{\\text{remaining}} = 4$'
      },
      {
        explanation: 'Since the remaining 4 letters are all distinct, the number of ways to arrange them is simply $4!$.',
        workingOut: '$\\text{Arrangements starting with P} = 4! = 24$'
      },
      {
        explanation: 'The probability of randomly selecting an arrangement that starts with P is the ratio of favorable outcomes to total outcomes.',
        workingOut: '$P(\\text{starts with P}) = \\frac{24}{60}$'
      },
      {
        explanation: 'Simplify the fraction by dividing both numerator and denominator by their GCD (12).',
        workingOut: '$\\frac{24}{60} = \\frac{2}{5}$'
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
    h: 'Find $f\'(x)$ and set it equal to zero.',
    s: 'Stationary points occur where the derivative equals zero. Find $f\'(x)$: $f\'(x) = 3x^2 - 12x + 12$. Set $f\'(x) = 0$: $3x^2 - 12x + 12 = 0$. Divide by 3: $x^2 - 4x + 4 = 0$. Factor: $(x - 2)^2 = 0$. Therefore, $x = 2$ is the stationary point.',
    solutionSteps: [
      {
        explanation: 'A stationary point (or critical point) occurs where the first derivative of the function equals zero. At these points, the gradient of the curve is zero, meaning the tangent line is horizontal. To find stationary points, we need to find $f\'(x)$ and solve $f\'(x) = 0$.',
        workingOut: '\\text{Stationary points occur where } f\'(x) = 0'
      },
      {
        explanation: 'Find the first derivative of $f(x) = x^3 - 6x^2 + 12x$ using the power rule. The power rule states that $\\frac{d}{dx}(x^n) = nx^{n-1}$.',
        workingOut: 'f\'(x) = 3x^2 - 12x + 12'
      },
      {
        explanation: 'Set the derivative equal to zero to find stationary points. This gives us the equation $3x^2 - 12x + 12 = 0$.',
        workingOut: '3x^2 - 12x + 12 = 0'
      },
      {
        explanation: 'Simplify the equation by dividing all terms by 3 (the common factor). This gives us a simpler quadratic equation to solve.',
        workingOut: 'x^2 - 4x + 4 = 0'
      },
      {
        explanation: 'Factor the quadratic. Notice that $x^2 - 4x + 4$ is a perfect square trinomial: $(x - 2)^2 = 0$. This means we have a repeated root at $x = 2$.',
        workingOut: '(x - 2)^2 = 0'
      },
      {
        explanation: 'Solve the equation. Since $(x - 2)^2 = 0$, we have $x - 2 = 0$, which gives $x = 2$. This is the $x$-coordinate of the stationary point.',
        workingOut: 'x = 2'
      }
    ]
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
    q: 'Sketch the graph of $f(x) = x^3 - 6x^2 + 12x$ for $-1 \\leq x \\leq 5$.',
    a: 'sketch',
    opts: ['Sketch provided'],
    solutionSteps: [
      {
        explanation: 'First, find the endpoints of the domain $-1 \\leq x \\leq 5$. Evaluate $f(x)$ at $x = -1$ and $x = 5$.',
        workingOut: '$\\begin{aligned} f(-1) &= (-1)^3 - 6(-1)^2 + 12(-1) = -1 - 6 - 12 = -19 \\\\ f(5) &= 5^3 - 6(5)^2 + 12(5) = 125 - 150 + 60 = 35 \\end{aligned}$'
      },
      {
        explanation: 'Next, find the axes intercepts. For the $y$-intercept, set $x = 0$. For the $x$-intercept, set $f(x) = 0$.',
        workingOut: '$f(0) = 0^3 - 6(0)^2 + 12(0) = 0 \\quad \\Rightarrow \\quad (0, 0)$'
      },
      {
        explanation: 'To find the $x$-intercepts, solve $x^3 - 6x^2 + 12x = 0$. Factor out $x$: $x(x^2 - 6x + 12) = 0$. The quadratic has discriminant $\\Delta = (-6)^2 - 4(1)(12) = 36 - 48 = -12 < 0$, so no real roots. The only intercept is $(0, 0)$.',
        workingOut: '$x(x^2 - 6x + 12) = 0 \\quad \\Rightarrow \\quad x = 0$'
      },
      {
        explanation: 'Find the stationary points by setting the first derivative $f\'(x)$ to zero.',
        workingOut: '$\\begin{aligned} f\'(x) &= 3x^2 - 12x + 12 = 3(x^2 - 4x + 4) = 3(x - 2)^2 \\\\ 3(x - 2)^2 &= 0 \\quad \\Rightarrow \\quad x = 2 \\end{aligned}$'
      },
      {
        explanation: 'Find the $y$-coordinate of the stationary point at $x = 2$.',
        workingOut: '$f(2) = 2^3 - 6(2)^2 + 12(2) = 8 - 24 + 24 = 8 \\quad \\Rightarrow \\quad (2, 8)$'
      },
      {
        explanation: 'Determine the nature of the stationary point $(2, 8)$. Since $f\'(x) = 3(x - 2)^2 \\geq 0$ for all $x$, the gradient never becomes negative. It is positive on both sides of $x=2$.',
        workingOut: '$\\text{The point } (2, 8) \\text{ is a horizontal point of inflection.}$',
        graphData: {
          svg: '<svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg"><defs><style>.axis { stroke: #94a3b8; stroke-width: 2; }.curve { stroke: #3b82f6; stroke-width: 3; fill: none; }.point { fill: #ef4444; }.label { font-size: 14px; fill: #1e293b; font-family: sans-serif; }</style></defs><rect width="500" height="500" fill="#ffffff" /><g transform="translate(150, 300)"><line x1="-70" y1="0" x2="250" y2="0" class="axis" /><text x="240" y="20" class="label">x</text><line x1="0" y1="-250" x2="0" y2="150" class="axis" /><text x="-15" y="-240" class="label">y</text><line x1="-40" y1="-5" x2="-40" y2="5" class="axis" /><text x="-50" y="20" class="label">-1</text><line x1="80" y1="-5" x2="80" y2="5" class="axis" /><text x="75" y="20" class="label">2</text><line x1="200" y1="-5" x2="200" y2="5" class="axis" /><text x="195" y="20" class="label">5</text><line x1="-5" y1="114" x2="5" y2="114" class="axis" /><text x="-35" y="119" class="label">-19</text><line x1="-5" y1="-48" x2="5" y2="-48" class="axis" /><text x="-20" y="-43" class="label">8</text><line x1="-5" y1="-210" x2="5" y2="-210" class="axis" /><text x="-25" y="-205" class="label">35</text><polyline points="-40.00,114.00 -36.00,98.33 -32.00,83.71 -28.00,70.10 -24.00,57.46 -20.00,45.75 -16.00,34.94 -12.00,25.00 -8.00,15.89 -4.00,7.57 -0.00,0.00 4.00,-6.85 8.00,-13.01 12.00,-18.52 16.00,-23.42 20.00,-27.75 24.00,-31.54 28.00,-34.82 32.00,-37.63 36.00,-40.01 40.00,-42.00 44.00,-43.63 48.00,-44.93 52.00,-45.94 56.00,-46.70 60.00,-47.25 64.00,-47.62 68.00,-47.84 72.00,-47.95 76.00,-47.99 80.00,-48.00 84.00,-48.01 88.00,-48.05 92.00,-48.16 96.00,-48.38 100.00,-48.75 104.00,-49.30 108.00,-50.06 112.00,-51.07 116.00,-52.37 120.00,-54.00 124.00,-55.99 128.00,-58.37 132.00,-61.18 136.00,-64.46 140.00,-68.25 144.00,-72.58 148.00,-77.48 152.00,-82.99 156.00,-89.15 160.00,-96.00 164.00,-103.57 168.00,-111.89 172.00,-121.00 176.00,-130.94 180.00,-141.75 184.00,-153.46 188.00,-166.10 192.00,-179.71 196.00,-194.33 200.00,-210.00" class="curve" /><circle cx="-40" cy="114" r="4" class="point" /><circle cx="0" cy="0" r="4" class="point" /><circle cx="80" cy="-48" r="4" class="point" /><circle cx="200" cy="-210" r="4" class="point" /><text x="-30" y="129" class="label">(-1, -19)</text><text x="10" y="15" class="label">(0, 0)</text><text x="85" y="-58" class="label">(2, 8)</text><text x="210" y="-200" class="label">(5, 35)</text></g></svg>'
        }
      }
    ]
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
    h: 'Let $x$ and $y$ be the costs. One equation is the total. The other relates them.',
    solutionSteps: [
      {
        explanation: 'First, let $x$ and $y$ be the costs of the two items.',
        workingOut: '$\\text{Let the costs be } x \\text{ and } y$'
      },
      {
        explanation: 'The problem states "Two items cost £15 total". This gives us our first equation.',
        workingOut: '$x + y = 15$'
      },
      {
        explanation: 'The problem also states "One item costs 3 times the other". This gives us our second equation.',
        workingOut: '$x = 3y$'
      },
      {
        explanation: 'Combining these gives the system of linear equations.',
        workingOut: '$\\text{The equations are } x + y = 15 \\text{ and } x = 3y$',
        graphData: {
          svg: '<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"><defs><style>.axis { stroke: #94a3b8; stroke-width: 2; }.line1 { stroke: #3b82f6; stroke-width: 2; }.line2 { stroke: #10b981; stroke-width: 2; }.point { fill: #ef4444; }.label { font-size: 14px; fill: #1e293b; font-family: sans-serif; }</style></defs><rect width="400" height="400" fill="#ffffff" /><g><line x1="30" y1="350" x2="380" y2="350" class="axis" /><text x="370" y="380" class="label">x</text><line x1="50" y1="370" x2="50" y2="20" class="axis" /><text x="20" y="30" class="label">y</text><line x1="50" y1="355" x2="50" y2="345" class="axis" /><text x="40" y="375" class="label">0</text><line x1="350" y1="355" x2="350" y2="345" class="axis" /><text x="340" y="375" class="label">15</text><line x1="45" y1="50" x2="55" y2="50" class="axis" /><text x="20" y="55" class="label">15</text><line x1="50" y1="50" x2="350" y2="350" class="line1" /><text x="300" y="330" fill="#3b82f6" class="label">x + y = 15</text><line x1="50" y1="350" x2="350" y2="250" class="line2" /><text x="310" y="240" fill="#10b981" class="label">x = 3y</text><circle cx="275" cy="275" r="5" class="point" /><text x="285" y="270" class="label" font-weight="bold">(11.25, 3.75)</text></g></svg>'
        }
      }
    ]
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
    h: 'Substitute $x = 3y$ into the first equation.',
    solutionSteps: [
      {
        explanation: 'We are given the system of equations $x + y = 15$ and $x = 3y$. Substitute the expression for $x$ from the second equation into the first equation.',
        workingOut: '$\\begin{aligned} x + y &= 15 \\\\ (3y) + y &= 15 \\end{aligned}$'
      },
      {
        explanation: 'Combine like terms and solve for $y$.',
        workingOut: '$\\begin{aligned} 4y &= 15 \\\\ y &= \\frac{15}{4} = 3.75 \\end{aligned}$'
      },
      {
        explanation: 'Substitute the value of $y$ back into the second equation to find $x$.',
        workingOut: '$\\begin{aligned} x &= 3(3.75) \\\\ x &= 11.25 \\end{aligned}$'
      },
      {
        explanation: 'The solution is the intersection of the two lines.',
        workingOut: '$\\text{Solution: } x = 11.25, y = 3.75$',
        graphData: {
          svg: '<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"><defs><style>.axis { stroke: #94a3b8; stroke-width: 2; }.line1 { stroke: #3b82f6; stroke-width: 2; }.line2 { stroke: #10b981; stroke-width: 2; }.point { fill: #ef4444; }.label { font-size: 14px; fill: #1e293b; font-family: sans-serif; }</style></defs><rect width="400" height="400" fill="#ffffff" /><g><line x1="30" y1="350" x2="380" y2="350" class="axis" /><text x="370" y="380" class="label">x</text><line x1="50" y1="370" x2="50" y2="20" class="axis" /><text x="20" y="30" class="label">y</text><line x1="50" y1="355" x2="50" y2="345" class="axis" /><text x="40" y="375" class="label">0</text><line x1="350" y1="355" x2="350" y2="345" class="axis" /><text x="340" y="375" class="label">15</text><line x1="45" y1="50" x2="55" y2="50" class="axis" /><text x="20" y="55" class="label">15</text><line x1="50" y1="50" x2="350" y2="350" class="line1" /><text x="300" y="330" fill="#3b82f6" class="label">x + y = 15</text><line x1="50" y1="350" x2="350" y2="250" class="line2" /><text x="310" y="240" fill="#10b981" class="label">x = 3y</text><circle cx="275" cy="275" r="5" class="point" /><text x="285" y="270" class="label" font-weight="bold">(11.25, 3.75)</text></g></svg>'
        }
      }
    ]
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
    h: 'Use the product rule: $(uv)\' = u\'v + uv\'$.',
    solutionSteps: [
      {
        explanation: 'We need to differentiate $y = e^{-2x} \\sin x$. We will use the product rule: $(uv)\' = u\'v + uv\'$.',
        workingOut: '$\\text{Let } u = e^{-2x} \\text{ and } v = \\sin x$'
      },
      {
        explanation: 'Find the derivatives of $u$ and $v$ with respect to $x$.',
        workingOut: '$\\begin{aligned} u\' &= -2e^{-2x} \\\\ v\' &= \\cos x \\end{aligned}$'
      },
      {
        explanation: 'Apply the product rule formula by substituting the expressions.',
        workingOut: '$\\begin{aligned} y\' &= u\'v + uv\' \\\\ y\' &= (-2e^{-2x})(\\sin x) + (e^{-2x})(\\cos x) \\end{aligned}$'
      },
      {
        explanation: 'Factor out the common term $e^{-2x}$.',
        workingOut: '$\\begin{aligned} y\' &= e^{-2x}(-2\\sin x + \\cos x) \\\\ y\' &= e^{-2x}(\\cos x - 2\\sin x) \\end{aligned}$',
        graphData: {
          svg: '<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"><defs><style>.axis { stroke: #94a3b8; stroke-width: 2; }.curve { stroke: #3b82f6; stroke-width: 3; fill: none; }.label { font-size: 14px; fill: #1e293b; font-family: sans-serif; }</style></defs><rect width="400" height="400" fill="#ffffff" /><g><line x1="30" y1="300" x2="380" y2="300" class="axis" /><text x="370" y="320" class="label">x</text><line x1="50" y1="350" x2="50" y2="50" class="axis" /><text x="30" y="45" class="label">y</text><polyline points="50.00,300.00 53.75,254.78 57.50,218.26 61.25,189.29 65.00,166.83 68.75,149.94 72.50,137.82 76.25,129.72 80.00,125.02 83.75,123.16 87.50,123.63 91.25,126.01 95.00,129.93 98.75,135.07 102.50,141.14 106.25,147.91 110.00,155.17 113.75,162.75 117.50,170.52 121.25,178.34 125.00,186.12 128.75,193.78 132.50,201.25 136.25,208.49 140.00,215.45 143.75,222.10 147.50,228.43 151.25,234.43 155.00,240.07 158.75,245.38 162.50,250.34 166.25,254.96 170.00,259.26 173.75,263.23 177.50,266.90 181.25,270.29 185.00,273.39 188.75,276.23 192.50,278.83 196.25,281.20 200.00,283.35 203.75,285.29 207.50,287.06 211.25,288.64 215.00,290.07 218.75,291.36 222.50,292.50 226.25,293.53 230.00,294.44 233.75,295.25 237.50,295.97 241.25,296.60 245.00,297.16 248.75,297.64 252.50,298.07 256.25,298.44 260.00,298.76 263.75,299.04 267.50,299.28 271.25,299.48 275.00,299.65 278.75,299.79 282.50,299.92 286.25,300.02 290.00,300.10 293.75,300.16 297.50,300.21 301.25,300.25 305.00,300.28 308.75,300.31 312.50,300.32 316.25,300.33 320.00,300.33 323.75,300.33 327.50,300.32 331.25,300.32 335.00,300.31 338.75,300.29 342.50,300.28 346.25,300.27 350.00,300.25" class="curve" /><text x="250" y="100" fill="#3b82f6" class="label" font-weight="bold">y = e⁻²ˣ sin(x)</text></g></svg>'
        }
      }
    ]
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
    h: 'Substitute $g(x) = x^2 + 3$ into $f(x) = 2x - 1$.',
    solutionSteps: [
      {
        explanation: 'We are given the functions $f(x) = 2x - 1$ and $g(x) = x^2 + 3$. We need to find the composite function $f(g(x))$.',
        workingOut: '$\\text{Find } f(g(x)) = f(x^2 + 3)$'
      },
      {
        explanation: 'Substitute the entire expression for $g(x)$ in place of $x$ in the function $f(x)$.',
        workingOut: '$f(x^2 + 3) = 2(x^2 + 3) - 1$'
      },
      {
        explanation: 'Expand the expression by distributing the $2$.',
        workingOut: '$f(x^2 + 3) = 2x^2 + 6 - 1$'
      },
      {
        explanation: 'Simplify the constant terms.',
        workingOut: '$f(g(x)) = 2x² + 5$',
        graphData: {
          svg: '<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"><defs><style>.axis { stroke: #94a3b8; stroke-width: 2; }.curve { stroke: #10b981; stroke-width: 3; fill: none; }.point { fill: #ef4444; }.label { font-size: 14px; fill: #1e293b; font-family: sans-serif; }</style></defs><rect width="400" height="400" fill="#ffffff" /><g><line x1="30" y1="350" x2="370" y2="350" class="axis" /><text x="360" y="370" class="label">x</text><line x1="200" y1="370" x2="200" y2="30" class="axis" /><text x="180" y="25" class="label">y</text><polyline points="50.00,74.00 55.00,88.16 60.00,101.84 65.00,115.04 70.00,127.76 75.00,140.00 80.00,151.76 85.00,163.04 90.00,173.84 95.00,184.16 100.00,194.00 105.00,203.36 110.00,212.24 115.00,220.64 120.00,228.56 125.00,236.00 130.00,242.96 135.00,249.44 140.00,255.44 145.00,260.96 150.00,266.00 155.00,270.56 160.00,274.64 165.00,278.24 170.00,281.36 175.00,284.00 180.00,286.16 185.00,287.84 190.00,289.04 195.00,289.76 200.00,290.00 205.00,289.76 210.00,289.04 215.00,287.84 220.00,286.16 225.00,284.00 230.00,281.36 235.00,278.24 240.00,274.64 245.00,270.56 250.00,266.00 255.00,260.96 260.00,255.44 265.00,249.44 270.00,242.96 275.00,236.00 280.00,228.56 285.00,220.64 290.00,212.24 295.00,203.36 300.00,194.00 305.00,184.16 310.00,173.84 315.00,163.04 320.00,151.76 325.00,140.00 330.00,127.76 335.00,115.04 340.00,101.84 345.00,88.16" class="curve" /><circle cx="200" cy="290" r="4" class="point" /><text x="210" y="295" class="label">(0, 5)</text><text x="250" y="100" fill="#10b981" class="label" font-weight="bold">f(g(x)) = 2x² + 5</text></g></svg>'
        }
      }
    ]
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
    q: 'A sector has arc length $5$ cm and angle $\\theta = 0.8$ radians. Find the radius $r$.',
    a: '1',
    opts: [
      '$r = 5$',
      '$r = 6.25$',
      '$r = 7.5$',
      '$r = 10$'
    ],
    h: 'Use $l = r\\theta$ to find $r = \\frac{l}{\\theta}$.',
    solutionSteps: [
      {
        explanation: 'The formula for the arc length of a sector is $l = r\\theta$, where $r$ is the radius and $\\theta$ is the angle in radians.',
        workingOut: '$l = r\\theta$'
      },
      {
        explanation: 'We are given the arc length $l = 5$ cm and the angle $\\theta = 0.8$ radians. Substitute these values into the formula.',
        workingOut: '$5 = r(0.8)$'
      },
      {
        explanation: 'Rearrange the equation to solve for $r$.',
        workingOut: '$r = \\frac{5}{0.8}$'
      },
      {
        explanation: 'Calculate the value. Note that $0.8 = \\frac{4}{5}$.',
        workingOut: '$\\begin{aligned} r &= \\frac{5}{4/5} \\\\ r &= \\frac{25}{4} = 6.25 \\end{aligned}$',
        graphData: {
          svg: '<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"><defs><style>.line { stroke: #3b82f6; stroke-width: 3; fill: none; }.arc { stroke: #f59e0b; stroke-width: 2; fill: none; }.label { font-size: 16px; fill: #1e293b; font-family: sans-serif; }</style></defs><rect width="400" height="400" fill="#ffffff" /><g><path d="M 200 300 L 387.5 300 A 187.5 187.5 0 0 0 330.6325080025935 165.49573295633948 Z" fill="#e0f2fe" stroke="#3b82f6" stroke-width="2" /><path d="M 240 300 A 40 40 0 0 0 227.86826837388662 271.3057563640191" class="arc" /><text x="245" y="285" fill="#d97706" class="label">0.8 rad</text><text x="280" y="320" class="label">r = 6.25</text><text x="350" y="200" fill="#2563eb" class="label" font-weight="bold">l = 5 cm</text></g></svg>'
        }
      }
    ]
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
    q: 'Find the area of the sector when $r = 5$ cm and $\\theta = 0.64$ radians.',
    a: '2',
    opts: [
      '$6$ square units',
      '$7.5$ square units',
      '$8$ square units',
      '$10$ square units'
    ],
    h: 'Area of sector = $\\frac{1}{2}r^2\\theta$.',
    solutionSteps: [
      {
        explanation: 'The formula for the area of a sector is $A = \\frac{1}{2}r^2\\theta$, where $r$ is the radius and $\\theta$ is the angle in radians.',
        workingOut: '$A = \\frac{1}{2}r^2\\theta$'
      },
      {
        explanation: 'Substitute the given values $r = 5$ and $\\theta = 0.64$ into the formula.',
        workingOut: '$A = \\frac{1}{2}(5)^2(0.64)$'
      },
      {
        explanation: 'Calculate the square of the radius.',
        workingOut: '$\\begin{aligned} A &= \\frac{1}{2}(25)(0.64) \\end{aligned}$'
      },
      {
        explanation: 'Multiply the terms to find the final area.',
        workingOut: '$\\begin{aligned} A &= 12.5 \\times 0.64 \\\\ A &= 8 \\end{aligned}$'
      }
    ]
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
    h: 'Add all probabilities: $0.15 + 0.25 + 0.35 + 0.25$.',
    solutionSteps: [
      {
        explanation: 'For a discrete probability distribution to be valid, all individual probabilities must be between 0 and 1, and their sum must equal exactly $1$.',
        workingOut: '$\\sum P(Y=y) = 1$'
      },
      {
        explanation: 'Add all the given probabilities together.',
        workingOut: '$\\begin{aligned} \\sum P(Y=y) &= P(Y=0) + P(Y=1) + P(Y=2) + P(Y=3) \\\\ &= 0.15 + 0.25 + 0.35 + 0.25 \\end{aligned}$'
      },
      {
        explanation: 'Calculate the total sum.',
        workingOut: '$\\sum P(Y=y) = 1.0$'
      },
      {
        explanation: 'Since the sum is $1.0$, the distribution is valid.',
        workingOut: '$\\text{Valid: sum } = 1.0$'
      }
    ]
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
    q: 'Given the distribution $P(Y=0)=0.15, P(Y=1)=0.25, P(Y=2)=0.35, P(Y=3)=0.25$, find $E(Y)$.',
    a: '1',
    opts: [
      '$E(Y) = 1.5$',
      '$E(Y) = 1.7$',
      '$E(Y) = 1.9$',
      '$E(Y) = 2.0$'
    ],
    h: '$E(Y) = \\sum y \\cdot P(Y = y)$.',
    solutionSteps: [
      {
        explanation: 'The expected value $E(Y)$ of a discrete random variable is found by multiplying each outcome $y$ by its probability $P(Y=y)$, and summing the results.',
        workingOut: '$E(Y) = \\sum y \\cdot P(Y=y)$'
      },
      {
        explanation: 'Substitute the values from the probability distribution.',
        workingOut: '$E(Y) = 0(0.15) + 1(0.25) + 2(0.35) + 3(0.25)$'
      },
      {
        explanation: 'Multiply each pair of values.',
        workingOut: '$\\begin{aligned} E(Y) &= 0 + 0.25 + 0.70 + 0.75 \\end{aligned}$'
      },
      {
        explanation: 'Add the products to find the expected value.',
        workingOut: '$\\begin{aligned} E(Y) &= 1.7 \\end{aligned}$'
      }
    ]
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
    q: 'Given the distribution $P(Y=0)=0.15, P(Y=1)=0.25, P(Y=2)=0.35, P(Y=3)=0.25$, find $P(Y \\leq 1)$.',
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
    h: 'Use the chain rule with $u = \\cos(3x)$, then $y = u^2$.',
    solutionSteps: [
      {
        explanation: 'To differentiate $y = \\cos^2(3x)$, we rewrite it as $y = (\\cos(3x))^2$ and apply the chain rule.',
        workingOut: '$y = (\\cos(3x))^2$'
      },
      {
        explanation: 'First, apply the power rule (the outer layer of the chain rule). Bring down the exponent 2 and subtract 1 from the power.',
        workingOut: '$\\frac{dy}{dx} = 2(\\cos(3x))^1 \\cdot \\frac{d}{dx}(\\cos(3x))$'
      },
      {
        explanation: 'Next, differentiate the inner function $\\cos(3x)$. The derivative of $\\cos(kx)$ is $-k\\sin(kx)$.',
        workingOut: '$\\frac{d}{dx}(\\cos(3x)) = -3\\sin(3x)$'
      },
      {
        explanation: 'Multiply the parts together to find the final derivative.',
        workingOut: '$\\begin{aligned} \\frac{dy}{dx} &= 2\\cos(3x) \\cdot (-3\\sin(3x)) \\\\ &= -6\\sin(3x)\\cos(3x) \\end{aligned}$'
      },
      {
        explanation: 'Looking at the expression $-6\\sin(3x)\\cos(3x)$, the coefficient of the leading term is $-6$.',
        workingOut: '$m = -6$'
      }
    ]
  }
];

export default GIRRAWEEN_2020_SIMILAR_QUESTIONS_PART2;
