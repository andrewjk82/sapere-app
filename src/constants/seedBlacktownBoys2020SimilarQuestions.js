/**
 * Similar questions based on Blacktown Boys' High School 2020 HSC Trial Exam.
 * Numbers, names, and pronumerals changed — same topics and structure.
 */
export const BLACKTOWN_BOYS_2020_SIMILAR_QUESTIONS = [

  // ─── SECTION I VARIANTS: MULTIPLE CHOICE ──────────────────────────────────

  {
    id: 'bbhs2020s-mc1',
    topicId: 'y11a-3A',
    c: '3A',
    t: 'Functions and function notation',
    source: 'Similar to Blacktown Boys 2020 Trial Q1',
    type: 'multiple_choice',
    difficulty: 'easy',
    q: 'What is the domain of the function $f(x) = \\sqrt{4 - x^2}$?',
    a: '$[-2, 2]$',
    opts: [
      '$(0, 2)$',
      '$[0, 2]$',
      '$(-2, 2)$',
      '$[-2, 2]$'
    ],
    h: 'The expression under the square root must be $\\geq 0$. Solve $4 - x^2 \\geq 0$.',
    s: 'Require $4 - x^2 \\geq 0$, so $x^2 \\leq 4$, giving $-2 \\leq x \\leq 2$. Both endpoints are included since $\\sqrt{0} = 0$ is defined. Domain is $[-2, 2]$.',
    solutionSteps: [
      { explanation: 'The expression under a square root must be non-negative.', workingOut: '4 - x^2 \\geq 0' },
      { explanation: 'Rearrange.', workingOut: 'x^2 \\leq 4' },
      { explanation: 'Solve for $x$.', workingOut: '-2 \\leq x \\leq 2' },
      { explanation: 'Both endpoints are included.', workingOut: '\\text{Domain} = [-2, 2]' }
    ]
  },

  {
    id: 'bbhs2020s-mc2',
    topicId: 'y11a-3C',
    c: '3C',
    t: 'Review of linear graphs',
    source: 'Similar to Blacktown Boys 2020 Trial Q2',
    type: 'multiple_choice',
    difficulty: 'medium',
    q: 'What is the angle of inclination of the line $x - \\sqrt{3}\\,y + 6 = 0$ with respect to the positive $x$-axis?',
    a: '$30°$',
    opts: [
      '$30°$',
      '$60°$',
      '$120°$',
      '$150°$'
    ],
    h: 'Rearrange to $y = mx + c$ form, then use $\\tan\\theta = m$.',
    s: '$\\sqrt{3}\\,y = x + 6$, so $y = \\dfrac{x}{\\sqrt{3}} + 2\\sqrt{3}$. Gradient $m = \\dfrac{1}{\\sqrt{3}}$, so $\\tan\\theta = \\dfrac{1}{\\sqrt{3}}$, giving $\\theta = 30°$.',
    solutionSteps: [
      { explanation: 'Rearrange to slope-intercept form.', workingOut: 'y = \\frac{1}{\\sqrt{3}}x + 2\\sqrt{3}' },
      { explanation: 'Read off the gradient.', workingOut: 'm = \\frac{1}{\\sqrt{3}}' },
      { explanation: 'Use $\\tan\\theta = m$.', workingOut: '\\tan\\theta = \\frac{1}{\\sqrt{3}} \\Rightarrow \\theta = 30°' }
    ]
  },

  {
    id: 'bbhs2020s-mc3',
    topicId: 'y12a-5F',
    c: '5F',
    t: 'Review of logarithmic functions',
    source: 'Similar to Blacktown Boys 2020 Trial Q3',
    type: 'multiple_choice',
    difficulty: 'medium',
    q: 'Which of the following is equal to $\\dfrac{\\log_5 125}{\\log_5 5}$?',
    a: '$3$',
    opts: [
      '$\\log_5 120$',
      '$\\log_5 25$',
      '$25$',
      '$3$'
    ],
    h: 'Use the change of base formula: $\\dfrac{\\log_5 125}{\\log_5 5} = \\log_5 125$.',
    s: '$\\dfrac{\\log_5 125}{\\log_5 5} = \\log_5 125 = \\log_5 5^3 = 3$.',
    solutionSteps: [
      { explanation: 'Recognise: $\\frac{\\log_b A}{\\log_b C} = \\log_C A$.', workingOut: '\\frac{\\log_5 125}{\\log_5 5} = \\log_5 125' },
      { explanation: 'Express 125 as a power of 5.', workingOut: '125 = 5^3' },
      { explanation: 'Simplify.', workingOut: '\\log_5 5^3 = 3' }
    ]
  },

  {
    id: 'bbhs2020s-mc4',
    topicId: 'y12a-9A',
    c: '9A',
    t: 'Displaying data',
    source: 'Similar to Blacktown Boys 2020 Trial Q4',
    type: 'multiple_choice',
    difficulty: 'easy',
    q: 'Emma works in a music store and surveys customers about their five most preferred music genres. What type of data is this?',
    a: 'Categorical nominal',
    opts: [
      'Categorical nominal',
      'Categorical ordinal',
      'Quantitative continuous',
      'Quantitative discrete'
    ],
    h: 'Music genre names are labels with no natural ordering.',
    s: 'Music genres are categories (names) with no inherent order between them, so the data is categorical nominal.',
    solutionSteps: [
      { explanation: 'Genre names are labels — no numerical quantity and no natural order between genres.', workingOut: '\\text{Categorical (names/labels) + no ordering} \\Rightarrow \\text{Categorical nominal}' }
    ]
  },

  {
    id: 'bbhs2020s-mc5',
    topicId: 'y12a-9A',
    c: '9A',
    t: 'Displaying data',
    source: 'Similar to Blacktown Boys 2020 Trial Q5',
    type: 'multiple_choice',
    difficulty: 'easy',
    q: 'A graph shows the cost and income lines for producing jars of honey. The cost line starts at about \\$8 (fixed cost) with a gentler slope; the income line starts at 0 with a steeper slope. They intersect at the break-even point. How many jars need to be sold to break even?',
    a: '$4$',
    opts: [
      '$8$',
      '$6$',
      '$4$',
      '$2$'
    ],
    h: 'The break-even point is where the cost and income lines intersect.',
    s: 'From the graph, the cost and income lines intersect at $x = 4$ jars, so 4 jars must be sold to break even.',
    solutionSteps: [
      { explanation: 'Break-even occurs at the intersection of the cost and income lines.', workingOut: '\\text{Intersection at } x = 4' }
    ]
  },

  {
    id: 'bbhs2020s-mc6',
    topicId: 'y12a-10E',
    c: '10E',
    t: 'General normal distributions',
    source: 'Similar to Blacktown Boys 2020 Trial Q6',
    type: 'multiple_choice',
    difficulty: 'medium',
    q: 'The time (in seconds) to complete an online task is normally distributed with mean 100 seconds and standard deviation 15 seconds. The percentage of times that fall between 85 seconds and 130 seconds is closest to',
    a: '$81.5\\%$',
    opts: [
      '$68\\%$',
      '$70.5\\%$',
      '$81.5\\%$',
      '$95\\%$'
    ],
    h: '85 is 1 SD below the mean; 130 is 2 SD above the mean. Use the 68-95-99.7 rule.',
    s: '$z_{85} = \\frac{85-100}{15} = -1$, $z_{130} = \\frac{130-100}{15} = 2$. $P(\\mu - \\sigma < X < \\mu + 2\\sigma) = \\frac{68\\%}{2} + \\frac{95\\%}{2} = 34\\% + 47.5\\% = 81.5\\%$.',
    solutionSteps: [
      { explanation: 'Find the $z$-scores.', workingOut: 'z_{85} = \\frac{85-100}{15} = -1, \\quad z_{130} = \\frac{130-100}{15} = 2' },
      { explanation: 'Use the 68-95-99.7 rule: area from $\\mu-\\sigma$ to $\\mu$ is 34%; area from $\\mu$ to $\\mu+2\\sigma$ is 47.5%.', workingOut: '34\\% + 47.5\\% = 81.5\\%' }
    ]
  },

  {
    id: 'bbhs2020s-mc7',
    topicId: 'y12a-9A',
    c: '9A',
    t: 'Displaying data',
    source: 'Similar to Blacktown Boys 2020 Trial Q7',
    type: 'multiple_choice',
    difficulty: 'medium',
    q: 'A Pareto chart shows complaints received by a business over five months: Jun (30), Jul (10), Aug (6), Sep (4), Oct (2). Total complaints = 52. The cumulative percentage line reaches about 58% after June. What percentage of complaints were received in July?',
    a: '$19\\%$',
    opts: [
      '$58\\%$',
      '$40\\%$',
      '$27\\%$',
      '$19\\%$'
    ],
    h: 'Calculate July\'s percentage directly: $\\frac{10}{52} \\times 100$.',
    s: 'July had 10 complaints out of total 52. $\\frac{10}{52} \\times 100 \\approx 19.2\\% \\approx 19\\%$.',
    solutionSteps: [
      { explanation: 'Total complaints = 30 + 10 + 6 + 4 + 2 = 52.', workingOut: '\\text{Total} = 52' },
      { explanation: 'July\'s percentage.', workingOut: '\\frac{10}{52} \\times 100 \\approx 19\\%' }
    ]
  },

  {
    id: 'bbhs2020s-mc8',
    topicId: 'y12a-3D',
    c: '3D',
    t: 'Concavity and points of inflection',
    source: 'Similar to Blacktown Boys 2020 Trial Q8',
    type: 'multiple_choice',
    difficulty: 'medium',
    q: 'A graph shows the curve $y = f(x)$ with a point $Q(b, f(b))$ in the first quadrant. At $Q$ the curve is increasing and concave up. Which statement is true?',
    a: "$f'(b) > 0,\\ f''(b) > 0$",
    opts: [
      "$f'(b) < 0,\\ f''(b) < 0$",
      "$f'(b) > 0,\\ f''(b) > 0$",
      "$f'(b) < 0,\\ f''(b) > 0$",
      "$f'(b) > 0,\\ f''(b) < 0$"
    ],
    h: 'Increasing means $f\'(b) > 0$. Concave up means $f\'\'(b) > 0$.',
    s: 'The curve is increasing at $Q$, so $f\'(b) > 0$. The curve is concave up at $Q$, so $f\'\'(b) > 0$.',
    solutionSteps: [
      { explanation: 'Increasing curve → positive gradient.', workingOut: "f'(b) > 0" },
      { explanation: 'Concave up → second derivative is positive.', workingOut: "f''(b) > 0" }
    ]
  },

  {
    id: 'bbhs2020s-mc9',
    topicId: 'y11a-12E',
    c: '12E',
    t: 'Multi-stage experiments and the product rule',
    source: 'Similar to Blacktown Boys 2020 Trial Q9',
    type: 'multiple_choice',
    difficulty: 'medium',
    q: 'A bag contains six red balls and four blue balls. Marcus selects three balls at random without replacement. The probability that at least one of the balls is red is',
    a: '$\\dfrac{29}{30}$',
    opts: [
      '$\\dfrac{3}{5}$',
      '$\\dfrac{29}{30}$',
      '$\\dfrac{1}{30}$',
      '$\\dfrac{216}{1000}$'
    ],
    h: 'Use the complement: $P(\\text{at least one red}) = 1 - P(\\text{no red})$.',
    s: '$P(\\text{no red}) = \\frac{4}{10} \\times \\frac{3}{9} \\times \\frac{2}{8} = \\frac{24}{720} = \\frac{1}{30}$. So $P(\\text{at least one red}) = 1 - \\frac{1}{30} = \\frac{29}{30}$.',
    solutionSteps: [
      { explanation: 'Use the complement rule.', workingOut: 'P(\\geq 1 \\text{ red}) = 1 - P(0 \\text{ red})' },
      { explanation: 'Calculate the probability of selecting no red balls (all blue).', workingOut: 'P(0 \\text{ red}) = \\frac{4}{10} \\times \\frac{3}{9} \\times \\frac{2}{8} = \\frac{24}{720} = \\frac{1}{30}' },
      { explanation: 'Apply the complement.', workingOut: 'P(\\geq 1 \\text{ red}) = 1 - \\frac{1}{30} = \\frac{29}{30}' }
    ]
  },

  {
    id: 'bbhs2020s-mc10',
    topicId: 'y12a-4G',
    c: '4G',
    t: 'Areas of compound regions',
    source: 'Similar to Blacktown Boys 2020 Trial Q10',
    type: 'multiple_choice',
    difficulty: 'hard',
    q: 'Two curves $y = p(x)$ and $y = q(x)$ are shown. They intersect at $x = c$ and $x = d$. $q(x)$ lies above $p(x)$ for $c \\leq x \\leq d$, and $p(x) \\geq 0$ throughout. The shaded area between the curves from $x = c$ to $x = d$ could be represented by',
    a: '$\\displaystyle\\int_c^d q(x)\\,dx - \\int_c^d p(x)\\,dx$',
    opts: [
      '$\\displaystyle\\int_c^d p(x)\\,dx - \\int_c^d q(x)\\,dx$',
      '$\\displaystyle\\int_c^d q(x)\\,dx - \\int_c^d p(x)\\,dx$',
      '$\\displaystyle\\int_c^d [q(x) + p(x)]\\,dx$',
      '$\\displaystyle\\int_0^d q(x)\\,dx - \\int_0^c p(x)\\,dx$'
    ],
    h: 'Area between curves = $\\int_c^d [\\text{top} - \\text{bottom}]\\,dx$ when both curves are above the $x$-axis.',
    s: 'Since $q(x) \\geq p(x)$ on $[c,d]$, the area between them is $\\int_c^d q(x)\\,dx - \\int_c^d p(x)\\,dx$.',
    solutionSteps: [
      { explanation: 'Area between two curves where top $= q(x)$, bottom $= p(x)$.', workingOut: 'A = \\int_c^d [q(x) - p(x)]\\,dx = \\int_c^d q(x)\\,dx - \\int_c^d p(x)\\,dx' }
    ]
  },

  // ─── SECTION II VARIANTS ──────────────────────────────────────────────────

  {
    id: 'bbhs2020s-11a',
    topicId: 'y11a-6I',
    c: '6I',
    t: 'The cosine rule',
    source: 'Similar to Blacktown Boys 2020 Trial Q11a',
    type: 'short_answer',
    difficulty: 'medium',
    marks: 1,
    q: 'In a triangle, the sides are 9, 12 and 6. Show that $\\cos A = \\dfrac{7}{8}$, where $A$ is the angle opposite the side of length 6.',
    a: '$\\cos A = \\dfrac{9^2 + 12^2 - 6^2}{2 \\times 9 \\times 12} = \\dfrac{81 + 144 - 36}{216} = \\dfrac{189}{216} = \\dfrac{7}{8}$',
    h: 'Use the cosine rule: $\\cos A = \\dfrac{b^2 + c^2 - a^2}{2bc}$.',
    s: 'By the cosine rule with $a = 6$, $b = 9$, $c = 12$:\n$\\cos A = \\frac{9^2 + 12^2 - 6^2}{2 \\times 9 \\times 12} = \\frac{81 + 144 - 36}{216} = \\frac{189}{216} = \\frac{7}{8}$',
    solutionSteps: [
      { explanation: 'Apply the cosine rule with $a = 6$ (opposite side), $b = 9$, $c = 12$.', workingOut: '\\cos A = \\frac{9^2 + 12^2 - 6^2}{2 \\times 9 \\times 12}' },
      { explanation: 'Evaluate numerator and denominator.', workingOut: '\\cos A = \\frac{81 + 144 - 36}{216} = \\frac{189}{216}' },
      { explanation: 'Simplify.', workingOut: '\\cos A = \\frac{7}{8}' }
    ]
  },

  {
    id: 'bbhs2020s-11b',
    topicId: 'y11a-6H',
    c: '6H',
    t: 'The sine rule and the area formula',
    source: 'Similar to Blacktown Boys 2020 Trial Q11b',
    type: 'short_answer',
    difficulty: 'hard',
    marks: 2,
    q: 'Using the result from part (a) that $\\cos A = \\dfrac{7}{8}$ in a triangle with two sides 9 and 12, find the exact area of the triangle.',
    a: '$\\dfrac{27\\sqrt{15}}{4}$ units²',
    h: 'Find $\\sin A$ using $\\sin^2 A + \\cos^2 A = 1$, then use Area $= \\frac{1}{2}ab\\sin A$.',
    s: '$\\sin A = \\sqrt{1 - \\left(\\frac{7}{8}\\right)^2} = \\frac{\\sqrt{64 - 49}}{8} = \\frac{\\sqrt{15}}{8}$. Area $= \\frac{1}{2} \\times 9 \\times 12 \\times \\frac{\\sqrt{15}}{8} = \\frac{108\\sqrt{15}}{16} = \\frac{27\\sqrt{15}}{4}$.',
    solutionSteps: [
      { explanation: 'Find $\\sin A$ using the Pythagorean identity.', workingOut: '\\sin A = \\sqrt{1 - \\left(\\frac{7}{8}\\right)^2} = \\frac{\\sqrt{15}}{8}' },
      { explanation: 'Apply the area formula.', workingOut: '\\text{Area} = \\tfrac{1}{2} \\times 9 \\times 12 \\times \\frac{\\sqrt{15}}{8} = \\frac{108\\sqrt{15}}{16} = \\frac{27\\sqrt{15}}{4}' }
    ]
  },

  {
    id: 'bbhs2020s-12a',
    topicId: 'y12a-1F',
    c: '1F',
    t: 'Summing an arithmetic series',
    source: 'Similar to Blacktown Boys 2020 Trial Q12a',
    type: 'short_answer',
    difficulty: 'easy',
    marks: 1,
    q: 'In an arithmetic series, the first term is 20 and the sum of the first 20 terms is 1160. Show that the 20th term is 96.',
    a: '$S_{20} = \\frac{20}{2}(20 + l) = 1160 \\Rightarrow 20 + l = 116 \\Rightarrow l = 96$',
    h: 'Use $S_n = \\frac{n}{2}(a + l)$ where $l$ is the last term.',
    s: '$S_{20} = \\frac{20}{2}(20 + l) = 1160 \\Rightarrow 10(20 + l) = 1160 \\Rightarrow 20 + l = 116 \\Rightarrow l = 96$.',
    solutionSteps: [
      { explanation: 'Use the sum formula $S_n = \\frac{n}{2}(a + l)$.', workingOut: 'S_{20} = \\frac{20}{2}(20 + l) = 1160' },
      { explanation: 'Solve for the last term $l$.', workingOut: '10(20 + l) = 1160 \\Rightarrow 20 + l = 116 \\Rightarrow l = 96' }
    ]
  },

  {
    id: 'bbhs2020s-12b',
    topicId: 'y12a-1F',
    c: '1F',
    t: 'Summing an arithmetic series',
    source: 'Similar to Blacktown Boys 2020 Trial Q12b',
    type: 'short_answer',
    difficulty: 'easy',
    marks: 1,
    q: 'In an arithmetic series, the first term is 20 and the 20th term is 96. Find the common difference.',
    a: '$d = 4$',
    h: 'Use $T_n = a + (n-1)d$.',
    s: '$T_{20} = 20 + 19d = 96 \\Rightarrow 19d = 76 \\Rightarrow d = 4$.',
    solutionSteps: [
      { explanation: 'Apply the general term formula.', workingOut: 'T_{20} = 20 + (20-1)d \\Rightarrow 96 = 20 + 19d' },
      { explanation: 'Solve for $d$.', workingOut: '19d = 76 \\Rightarrow d = 4' }
    ]
  },

  {
    id: 'bbhs2020s-12c',
    topicId: 'y12a-1F',
    c: '1F',
    t: 'Summing an arithmetic series',
    source: 'Similar to Blacktown Boys 2020 Trial Q12c',
    type: 'short_answer',
    difficulty: 'easy',
    marks: 1,
    q: 'In an arithmetic series with first term 20 and common difference 4, find the sum of the first 35 terms.',
    a: '$S_{35} = 3080$',
    h: 'Use $S_n = \\frac{n}{2}(2a + (n-1)d)$.',
    s: '$S_{35} = \\frac{35}{2}(2 \\times 20 + 34 \\times 4) = \\frac{35}{2}(40 + 136) = \\frac{35}{2} \\times 176 = 3080$.',
    solutionSteps: [
      { explanation: 'Apply the sum formula.', workingOut: 'S_{35} = \\frac{35}{2}(2 \\times 20 + (35-1) \\times 4)' },
      { explanation: 'Evaluate.', workingOut: 'S_{35} = \\frac{35}{2}(40 + 136) = \\frac{35 \\times 176}{2} = 3080' }
    ]
  },

  {
    id: 'bbhs2020s-13a',
    topicId: 'y11a-4E',
    c: '4E',
    t: 'The absolute value function',
    source: 'Similar to Blacktown Boys 2020 Trial Q13a',
    type: 'short_answer',
    difficulty: 'medium',
    marks: 2,
    q: 'The graph of $f(x) = |ax + b|$ has its vertex at $(1.5,\\ 0)$ and $y$-intercept at $(0,\\ 3)$. Find the values of $a$ and $b$.',
    a: '$a = 2,\\ b = -3$',
    h: 'At the vertex, $ax + b = 0$. Use the $y$-intercept to find $|b|$, then determine the sign of $b$.',
    s: 'Vertex at $x = 1.5$: $1.5a + b = 0$. $y$-intercept: $|b| = 3$, so $b = \\pm 3$. Testing $b = -3$: $a = 3/1.5 = 2$. Verify: $f(0) = |0 - 3| = 3$ ✓. So $a = 2$, $b = -3$.',
    solutionSteps: [
      { explanation: 'At the vertex $x = 1.5$: $1.5a + b = 0$.', workingOut: '1.5a = -b' },
      { explanation: 'At the $y$-intercept: $|b| = 3$, so $b = \\pm 3$.', workingOut: 'b = \\pm 3' },
      { explanation: 'Test $b = -3$: $a = 3/1.5 = 2$.', workingOut: 'a = 2,\\ b = -3' }
    ]
  },

  {
    id: 'bbhs2020s-13b',
    topicId: 'y11a-4E',
    c: '4E',
    t: 'The absolute value function',
    source: 'Similar to Blacktown Boys 2020 Trial Q13b',
    type: 'short_answer',
    difficulty: 'medium',
    marks: 1,
    q: 'Given $f(x) = |2x - 3|$, solve $f(x) \\geq 5$.',
    a: '$x \\leq -1$ or $x \\geq 4$',
    h: 'Solve $|2x - 3| \\geq 5$ by considering two cases.',
    s: 'Case 1: $2x - 3 \\geq 5 \\Rightarrow x \\geq 4$. Case 2: $2x - 3 \\leq -5 \\Rightarrow x \\leq -1$. Answer: $x \\leq -1$ or $x \\geq 4$.',
    solutionSteps: [
      { explanation: 'Split into two inequalities.', workingOut: '2x - 3 \\geq 5 \\quad \\text{or} \\quad 2x - 3 \\leq -5' },
      { explanation: 'Solve each.', workingOut: 'x \\geq 4 \\quad \\text{or} \\quad x \\leq -1' }
    ]
  },

  {
    id: 'bbhs2020s-14a',
    topicId: 'y11a-9G',
    c: '9G',
    t: 'The chain rule',
    source: 'Similar to Blacktown Boys 2020 Trial Q14a',
    type: 'short_answer',
    difficulty: 'medium',
    marks: 2,
    q: 'Differentiate $y = \\sin^3\\!\\left(\\dfrac{x}{3}\\right)$.',
    a: '$\\dfrac{dy}{dx} = \\sin^2\\!\\left(\\dfrac{x}{3}\\right)\\cos\\!\\left(\\dfrac{x}{3}\\right)$',
    h: 'Apply the chain rule twice: differentiate the outer cube, then $\\sin$, then the inner function.',
    s: 'Let $u = \\sin(x/3)$, so $y = u^3$. $\\frac{dy}{du} = 3u^2$. $\\frac{du}{dx} = \\frac{1}{3}\\cos(x/3)$. So $\\frac{dy}{dx} = 3\\sin^2(x/3) \\cdot \\frac{1}{3}\\cos(x/3) = \\sin^2(x/3)\\cos(x/3)$.',
    solutionSteps: [
      { explanation: 'Differentiate the outer cube.', workingOut: '\\frac{d}{dx}[u^3] = 3u^2 \\frac{du}{dx}' },
      { explanation: 'Differentiate $\\sin(x/3)$ using chain rule.', workingOut: '\\frac{d}{dx}\\!\\left[\\sin\\!\\left(\\frac{x}{3}\\right)\\right] = \\frac{1}{3}\\cos\\!\\left(\\frac{x}{3}\\right)' },
      { explanation: 'Combine and simplify.', workingOut: '\\frac{dy}{dx} = 3\\sin^2\\!\\left(\\frac{x}{3}\\right) \\cdot \\frac{1}{3}\\cos\\!\\left(\\frac{x}{3}\\right) = \\sin^2\\!\\left(\\frac{x}{3}\\right)\\cos\\!\\left(\\frac{x}{3}\\right)' }
    ]
  },

  {
    id: 'bbhs2020s-14b',
    topicId: 'y11a-9I',
    c: '9I',
    t: 'The quotient rule',
    source: 'Similar to Blacktown Boys 2020 Trial Q14b',
    type: 'short_answer',
    difficulty: 'medium',
    marks: 2,
    q: 'Differentiate $y = \\dfrac{e^{2x} + 3}{x - 1}$.',
    a: '$\\dfrac{dy}{dx} = \\dfrac{2xe^{2x} - 3e^{2x} - 3}{(x-1)^2}$',
    h: 'Use the quotient rule: $\\dfrac{d}{dx}\\left(\\dfrac{u}{v}\\right) = \\dfrac{v u\' - u v\'}{v^2}$.',
    s: '$u = e^{2x}+3$, $u\' = 2e^{2x}$; $v = x-1$, $v\' = 1$. $\\frac{dy}{dx} = \\frac{(x-1)(2e^{2x}) - (e^{2x}+3)}{(x-1)^2} = \\frac{2xe^{2x} - 2e^{2x} - e^{2x} - 3}{(x-1)^2} = \\frac{2xe^{2x} - 3e^{2x} - 3}{(x-1)^2}$.',
    solutionSteps: [
      { explanation: 'Identify $u$ and $v$.', workingOut: 'u = e^{2x}+3,\\ u\' = 2e^{2x};\\quad v = x-1,\\ v\' = 1' },
      { explanation: 'Apply the quotient rule.', workingOut: '\\frac{dy}{dx} = \\frac{(x-1)(2e^{2x}) - (e^{2x}+3)}{(x-1)^2}' },
      { explanation: 'Expand and simplify.', workingOut: '\\frac{2xe^{2x} - 2e^{2x} - e^{2x} - 3}{(x-1)^2} = \\frac{2xe^{2x} - 3e^{2x} - 3}{(x-1)^2}' }
    ]
  },

  {
    id: 'bbhs2020s-15',
    topicId: 'y12a-1H',
    c: '1H',
    t: 'The limiting sum of a geometric series',
    source: 'Similar to Blacktown Boys 2020 Trial Q15',
    type: 'short_answer',
    difficulty: 'medium',
    marks: 2,
    q: 'What is the limiting sum of the geometric series $500, -200, 80, -32, \\ldots$?',
    a: '$S_\\infty = \\dfrac{2500}{7}$',
    h: 'Find the common ratio $r = T_2/T_1$. Then use $S_\\infty = \\dfrac{a}{1-r}$ when $|r| < 1$.',
    s: '$a = 500$, $r = \\frac{-200}{500} = -\\frac{2}{5}$. Since $|r| < 1$: $S_\\infty = \\frac{500}{1-(-2/5)} = \\frac{500}{7/5} = \\frac{2500}{7}$.',
    solutionSteps: [
      { explanation: 'Find the common ratio.', workingOut: 'r = \\frac{-200}{500} = -\\frac{2}{5}' },
      { explanation: 'Since $|r| < 1$, the limiting sum exists.', workingOut: 'S_\\infty = \\frac{500}{1 + \\frac{2}{5}} = \\frac{500}{\\frac{7}{5}} = \\frac{2500}{7}' }
    ]
  },

  {
    id: 'bbhs2020s-16',
    topicId: 'y12a-1C',
    c: '1C',
    t: 'Geometric sequences',
    source: 'Similar to Blacktown Boys 2020 Trial Q16',
    type: 'short_answer',
    difficulty: 'medium',
    marks: 2,
    q: 'The first four terms of a geometric sequence are $3, m, n$ and $375$. Find the values of $m$ and $n$.',
    a: '$m = 15,\\ n = 75$',
    h: 'Use $ar^3 = 375$ with $a = 3$ to find $r$, then find $m$ and $n$.',
    s: '$3r^3 = 375 \\Rightarrow r^3 = 125 \\Rightarrow r = 5$. $m = 3 \\times 5 = 15$. $n = 3 \\times 25 = 75$.',
    solutionSteps: [
      { explanation: 'The 4th term is $ar^3 = 375$.', workingOut: '3r^3 = 375 \\Rightarrow r^3 = 125 \\Rightarrow r = 5' },
      { explanation: 'Find $m = ar$.', workingOut: 'm = 3 \\times 5 = 15' },
      { explanation: 'Find $n = ar^2$.', workingOut: 'n = 3 \\times 25 = 75' }
    ]
  },

  {
    id: 'bbhs2020s-17a',
    topicId: 'y12a-4I',
    c: '4I',
    t: 'The reverse chain rule',
    source: 'Similar to Blacktown Boys 2020 Trial Q17a',
    type: 'short_answer',
    difficulty: 'medium',
    marks: 2,
    q: 'Find the primitive function: $\\displaystyle\\int (3x - 2)^{15}\\,dx$.',
    a: '$\\dfrac{(3x-2)^{16}}{48} + C$',
    h: 'Use the reverse chain rule: $\\int (ax+b)^n\\,dx = \\dfrac{(ax+b)^{n+1}}{a(n+1)} + C$.',
    s: '$\\int (3x-2)^{15}\\,dx = \\dfrac{(3x-2)^{16}}{16 \\times 3} + C = \\dfrac{(3x-2)^{16}}{48} + C$.',
    solutionSteps: [
      { explanation: 'Increase the power by 1 and divide by the new power times the coefficient of $x$.', workingOut: '\\frac{(3x-2)^{16}}{16 \\times 3} + C = \\frac{(3x-2)^{16}}{48} + C' }
    ]
  },

  {
    id: 'bbhs2020s-17b',
    topicId: 'y12a-5I',
    c: '5I',
    t: 'Integration of the reciprocal function',
    source: 'Similar to Blacktown Boys 2020 Trial Q17b',
    type: 'short_answer',
    difficulty: 'medium',
    marks: 2,
    q: 'Find the primitive function: $\\displaystyle\\int \\left(3x^4 + \\dfrac{1}{2x+1}\\right)dx$.',
    a: '$\\dfrac{3x^5}{5} + \\dfrac{1}{2}\\ln|2x+1| + C$',
    h: 'Integrate term by term. For $\\frac{1}{2x+1}$, use $\\int \\frac{1}{ax+b}\\,dx = \\frac{1}{a}\\ln|ax+b| + C$.',
    s: '$\\int 3x^4\\,dx + \\int \\frac{1}{2x+1}\\,dx = \\frac{3x^5}{5} + \\frac{1}{2}\\ln|2x+1| + C$.',
    solutionSteps: [
      { explanation: 'Integrate $3x^4$.', workingOut: '\\frac{3x^5}{5}' },
      { explanation: 'Integrate $\\frac{1}{2x+1}$ using the log rule.', workingOut: '\\frac{1}{2}\\ln|2x+1|' },
      { explanation: 'Combine.', workingOut: '\\frac{3x^5}{5} + \\frac{1}{2}\\ln|2x+1| + C' }
    ]
  },

  {
    id: 'bbhs2020s-17c',
    topicId: 'y12a-6D',
    c: '6D',
    t: 'Integrating the trigonometric functions',
    source: 'Similar to Blacktown Boys 2020 Trial Q17c',
    type: 'short_answer',
    difficulty: 'medium',
    marks: 2,
    q: 'Find the primitive function: $\\displaystyle\\int \\left(\\cos 6x + \\dfrac{3}{e^{4x}}\\right)dx$.',
    a: '$\\dfrac{1}{6}\\sin 6x + \\dfrac{3}{4e^{4x}} + C$',
    h: '$\\int \\cos(ax)\\,dx = \\frac{1}{a}\\sin(ax) + C$. Write $\\frac{3}{e^{4x}} = 3e^{-4x}$ then integrate.',
    s: '$\\int \\cos 6x\\,dx = \\frac{1}{6}\\sin 6x$. $\\int 3e^{-4x}\\,dx = \\frac{3}{-4}e^{-4x} = -\\frac{3}{4e^{4x}}$. Combined: $\\frac{1}{6}\\sin 6x + \\frac{3}{4e^{4x}} + C$.',
    solutionSteps: [
      { explanation: 'Integrate $\\cos 6x$.', workingOut: '\\frac{1}{6}\\sin 6x' },
      { explanation: 'Rewrite $\\frac{3}{e^{4x}} = 3e^{-4x}$ and integrate.', workingOut: '\\int 3e^{-4x}\\,dx = \\frac{3}{-4}e^{-4x} = -\\frac{3}{4e^{4x}}' },
      { explanation: 'Subtract gives a positive term; combine and add constant.', workingOut: '\\frac{1}{6}\\sin 6x + \\frac{3}{4e^{4x}} + C' }
    ]
  },

  {
    id: 'bbhs2020s-18a',
    topicId: 'y12a-6B',
    c: '6B',
    t: 'Differentiating the trigonometric functions',
    source: 'Similar to Blacktown Boys 2020 Trial Q18a',
    type: 'short_answer',
    difficulty: 'medium',
    marks: 2,
    q: 'Show that $\\dfrac{d}{dx}(e^{3x}\\sin x) = e^{3x}(3\\sin x + \\cos x)$.',
    a: 'By the product rule: $\\frac{d}{dx}(e^{3x}\\sin x) = 3e^{3x}\\sin x + e^{3x}\\cos x = e^{3x}(3\\sin x + \\cos x)$.',
    h: 'Apply the product rule with $u = e^{3x}$ and $v = \\sin x$.',
    s: '$\\frac{d}{dx}(e^{3x}\\sin x) = 3e^{3x}\\sin x + e^{3x}\\cos x = e^{3x}(3\\sin x + \\cos x)$.',
    solutionSteps: [
      { explanation: 'Product rule: $\\frac{d}{dx}(uv) = u\'v + uv\'$.', workingOut: 'u = e^{3x},\\ u\' = 3e^{3x};\\quad v = \\sin x,\\ v\' = \\cos x' },
      { explanation: 'Apply.', workingOut: '\\frac{d}{dx}(e^{3x}\\sin x) = 3e^{3x}\\sin x + e^{3x}\\cos x' },
      { explanation: 'Factor out $e^{3x}$.', workingOut: '= e^{3x}(3\\sin x + \\cos x)' }
    ]
  },

  {
    id: 'bbhs2020s-18b',
    topicId: 'y11a-9D',
    c: '9D',
    t: 'dy/dx notation — tangents and normals',
    source: 'Similar to Blacktown Boys 2020 Trial Q18b',
    type: 'short_answer',
    difficulty: 'medium',
    marks: 2,
    q: 'Hence find the equation of the tangent to the curve $y = e^{3x}\\sin x$ at the point where $x = 0$.',
    a: '$y = x$, or equivalently $x - y = 0$',
    h: 'Substitute $x = 0$ into the derivative (from part a) for the gradient, and into $y$ for the $y$-coordinate.',
    s: 'At $x = 0$: gradient $= e^0(3\\sin 0 + \\cos 0) = 1 \\times 1 = 1$. Point: $y = e^0 \\sin 0 = 0$. Tangent: $y - 0 = 1(x - 0)$, i.e. $y = x$.',
    solutionSteps: [
      { explanation: 'Find the gradient at $x = 0$ using the result from part (a).', workingOut: 'm = e^{0}(3\\sin 0 + \\cos 0) = 1' },
      { explanation: 'Find the $y$-coordinate at $x = 0$.', workingOut: 'y = e^{0}\\sin 0 = 0' },
      { explanation: 'Write the tangent equation.', workingOut: 'y - 0 = 1(x - 0) \\Rightarrow y = x' }
    ]
  },

  {
    id: 'bbhs2020s-19a',
    topicId: 'y12a-8D',
    c: '8D',
    t: 'Investing money by regular instalments',
    source: 'Similar to Blacktown Boys 2020 Trial Q19a',
    type: 'short_answer',
    difficulty: 'medium',
    marks: 2,
    q: 'Mia plans to invest $6000 per year for 10 years in an annuity earning 5% per annum. Using the PVA table (factor for $N=10$, $r=5\\%$ is 7.7217), calculate the present value of her annuity.',
    a: '\\$46\\,330.20',
    h: 'Present Value = Payment × PVA factor.',
    s: '$\\text{PVA} = 6000 \\times 7.7217 = \\$46{,}330.20$.',
    solutionSteps: [
      { explanation: 'Read the PVA factor for $N = 10$, $r = 5\\%$.', workingOut: '\\text{PVA factor} = 7.7217' },
      { explanation: 'Multiply by the annual payment.', workingOut: '\\text{PVA} = 6000 \\times 7.7217 = \\$46{,}330.20' }
    ]
  },

  {
    id: 'bbhs2020s-19b',
    topicId: 'y12a-8E',
    c: '8E',
    t: 'Paying off a loan',
    source: 'Similar to Blacktown Boys 2020 Trial Q19b',
    type: 'short_answer',
    difficulty: 'medium',
    marks: 2,
    q: 'Kaito takes out a loan of $15\\,000$ to buy equipment. This loan is to be repaid over 4 years at an interest rate of 10% per year. Using the PVA table (factor for $N=4$, $r=10\\%$ is 3.1699), find his yearly repayments.',
    a: '\\$4731.50',
    h: '$\\text{PVA} = M \\times \\text{PVA factor} \\Rightarrow M = \\frac{\\text{PVA}}{\\text{factor}}$.',
    s: '$3.1699 \\times M = 15000 \\Rightarrow M = \\frac{15000}{3.1699} \\approx \\$4731.50$.',
    solutionSteps: [
      { explanation: 'Set up the equation: loan = repayment × PVA factor.', workingOut: '3.1699 \\times M = 15000' },
      { explanation: 'Solve for $M$.', workingOut: 'M = \\frac{15000}{3.1699} \\approx \\$4731.50' }
    ]
  },

  {
    id: 'bbhs2020s-20',
    topicId: 'y12a-3H',
    c: '3H',
    t: 'Primitive functions',
    source: 'Similar to Blacktown Boys 2020 Trial Q20',
    type: 'short_answer',
    difficulty: 'medium',
    marks: 2,
    q: 'The curve $y = f(x)$ passes through the point $(1, -3)$ and $f\'(x) = 6x^2 - 2$. Find $f(x)$.',
    a: '$f(x) = 2x^3 - 2x - 3$',
    h: 'Integrate $f\'(x)$ to get $f(x) = 2x^3 - 2x + C$, then substitute the given point to find $C$.',
    s: '$f(x) = \\int (6x^2 - 2)\\,dx = 2x^3 - 2x + C$. At $(1, -3)$: $-3 = 2 - 2 + C \\Rightarrow C = -3$. So $f(x) = 2x^3 - 2x - 3$.',
    solutionSteps: [
      { explanation: 'Integrate $f\'(x)$.', workingOut: 'f(x) = 2x^3 - 2x + C' },
      { explanation: 'Substitute the point $(1, -3)$.', workingOut: '-3 = 2(1)^3 - 2(1) + C = 0 + C \\Rightarrow C = -3' },
      { explanation: 'Write the final answer.', workingOut: 'f(x) = 2x^3 - 2x - 3' }
    ]
  },

  {
    id: 'bbhs2020s-21',
    topicId: 'y12a-4B',
    c: '4B',
    t: 'The fundamental theorem of calculus',
    source: 'Similar to Blacktown Boys 2020 Trial Q21',
    type: 'short_answer',
    difficulty: 'hard',
    marks: 3,
    q: 'Show that $\\displaystyle\\int_0^3 \\sqrt{4x+4}\\,dx = \\dfrac{28}{3}$.',
    a: '$\\int_0^3 2\\sqrt{x+1}\\,dx = \\left[\\frac{4}{3}(x+1)^{3/2}\\right]_0^3 = \\frac{4}{3}(8) - \\frac{4}{3}(1) = \\frac{28}{3}$',
    h: 'Write $\\sqrt{4x+4} = 2\\sqrt{x+1} = 2(x+1)^{1/2}$ and integrate using the reverse chain rule.',
    s: '$\\int_0^3 2(x+1)^{1/2}\\,dx = \\left[\\frac{2(x+1)^{3/2}}{3/2}\\right]_0^3 = \\left[\\frac{4}{3}(x+1)^{3/2}\\right]_0^3 = \\frac{4}{3}(4^{3/2}) - \\frac{4}{3}(1^{3/2}) = \\frac{4}{3}(8) - \\frac{4}{3} = \\frac{28}{3}$.',
    solutionSteps: [
      { explanation: 'Factor: $\\sqrt{4x+4} = 2\\sqrt{x+1} = 2(x+1)^{1/2}$.', workingOut: '\\int_0^3 2(x+1)^{1/2}\\,dx = \\left[\\frac{4}{3}(x+1)^{3/2}\\right]_0^3' },
      { explanation: 'Substitute upper limit: $(3+1)^{3/2} = 4^{3/2} = 8$.', workingOut: '\\frac{4}{3}(8)' },
      { explanation: 'Substitute lower limit: $(0+1)^{3/2} = 1$.', workingOut: '\\frac{4}{3}(8) - \\frac{4}{3}(1) = \\frac{32 - 4}{3} = \\frac{28}{3}' }
    ]
  },

  {
    id: 'bbhs2020s-22',
    topicId: 'y11a-11B',
    c: '11B',
    t: 'Solving trigonometric equations',
    source: 'Similar to Blacktown Boys 2020 Trial Q22',
    type: 'short_answer',
    difficulty: 'hard',
    marks: 3,
    q: 'Solve $4\\sin^2 x - 1 = 0$ for $-\\pi \\leq x \\leq \\pi$.',
    a: '$x = -\\dfrac{5\\pi}{6},\\ -\\dfrac{\\pi}{6},\\ \\dfrac{\\pi}{6},\\ \\dfrac{5\\pi}{6}$',
    h: 'Rearrange to $\\sin^2 x = \\frac{1}{4}$, so $\\sin x = \\pm\\frac{1}{2}$. Find all solutions in $[-\\pi, \\pi]$.',
    s: '$\\sin^2 x = \\frac{1}{4} \\Rightarrow \\sin x = \\pm\\frac{1}{2}$. Reference angle: $\\frac{\\pi}{6}$. From $\\sin x = +\\frac{1}{2}$: $x = \\frac{\\pi}{6},\\ \\frac{5\\pi}{6}$. From $\\sin x = -\\frac{1}{2}$: $x = -\\frac{\\pi}{6},\\ -\\frac{5\\pi}{6}$.',
    solutionSteps: [
      { explanation: 'Rearrange.', workingOut: '\\sin^2 x = \\frac{1}{4} \\Rightarrow \\sin x = \\pm\\frac{1}{2}' },
      { explanation: 'From $\\sin x = +\\frac{1}{2}$: in Q1 and Q2.', workingOut: 'x = \\frac{\\pi}{6},\\ \\frac{5\\pi}{6}' },
      { explanation: 'From $\\sin x = -\\frac{1}{2}$: in Q3 and Q4.', workingOut: 'x = -\\frac{\\pi}{6},\\ -\\frac{5\\pi}{6}' },
      { explanation: 'All solutions.', workingOut: 'x = -\\frac{5\\pi}{6},\\ -\\frac{\\pi}{6},\\ \\frac{\\pi}{6},\\ \\frac{5\\pi}{6}' }
    ]
  },

  {
    id: 'bbhs2020s-23',
    topicId: 'y12a-10C',
    c: '10C',
    t: 'Mean and variance of a distribution',
    source: 'Similar to Blacktown Boys 2020 Trial Q23',
    type: 'short_answer',
    difficulty: 'hard',
    marks: 3,
    q: 'A discrete random variable $X$ has the probability distribution:\n\n| $X = x$ | 10 | 11 | 12 | 13 |\n|---|---|---|---|---|\n| $P(x)$ | 0.30 | 0.25 | $m$ | 0.35 |\n\nBy finding the value of $m$, calculate the expected value and the variance of $X$.',
    a: '$m = 0.10$; $E(X) = 11.5$; $\\text{Var}(X) = 1.55$',
    h: 'All probabilities must sum to 1. Then $E(X) = \\sum x P(x)$ and $\\text{Var}(X) = E(X^2) - [E(X)]^2$.',
    s: '$m = 1 - 0.30 - 0.25 - 0.35 = 0.10$. $E(X) = 10(0.30) + 11(0.25) + 12(0.10) + 13(0.35) = 11.5$. $E(X^2) = 100(0.30) + 121(0.25) + 144(0.10) + 169(0.35) = 133.80$. $\\text{Var}(X) = 133.80 - 11.5^2 = 1.55$.',
    solutionSteps: [
      { explanation: 'Find $m$: all probabilities sum to 1.', workingOut: '0.30 + 0.25 + m + 0.35 = 1 \\Rightarrow m = 0.10' },
      { explanation: 'Calculate $E(X)$.', workingOut: 'E(X) = 10(0.30) + 11(0.25) + 12(0.10) + 13(0.35) = 3 + 2.75 + 1.2 + 4.55 = 11.5' },
      { explanation: 'Calculate $E(X^2)$.', workingOut: 'E(X^2) = 100(0.30) + 121(0.25) + 144(0.10) + 169(0.35) = 30 + 30.25 + 14.4 + 59.15 = 133.80' },
      { explanation: 'Calculate variance.', workingOut: '\\text{Var}(X) = 133.80 - 11.5^2 = 133.80 - 132.25 = 1.55' }
    ]
  },

  {
    id: 'bbhs2020s-24a',
    topicId: 'y12a-4H',
    c: '4H',
    t: 'The trapezoidal rule',
    source: 'Similar to Blacktown Boys 2020 Trial Q24a',
    type: 'short_answer',
    difficulty: 'easy',
    marks: 1,
    q: 'Given $y = \\log_e(x^2 + 1)$, complete the table by finding the missing value of $y$ at $x = 2.5$ to 3 decimal places.\n\n| $x$ | 1 | 1.5 | 2 | 2.5 | 3 |\n|---|---|---|---|---|---|\n| $y$ | 0.693 | 1.179 | 1.609 | ? | 2.303 |',
    a: '$y \\approx 1.981$',
    h: 'Substitute $x = 2.5$ into $y = \\ln((2.5)^2 + 1)$.',
    s: '$y = \\ln(6.25 + 1) = \\ln(7.25) \\approx 1.981$.',
    solutionSteps: [
      { explanation: 'Substitute $x = 2.5$.', workingOut: 'y = \\ln(2.5^2 + 1) = \\ln(7.25) \\approx 1.981' }
    ]
  },

  {
    id: 'bbhs2020s-24b',
    topicId: 'y12a-4H',
    c: '4H',
    t: 'The trapezoidal rule',
    source: 'Similar to Blacktown Boys 2020 Trial Q24b',
    type: 'short_answer',
    difficulty: 'medium',
    marks: 2,
    q: 'Use the trapezoidal rule with all values from the table ($x = 1, 1.5, 2, 2.5, 3$) to find an approximation for $\\displaystyle\\int_1^3 \\log_e(x^2+1)\\,dx$.',
    a: '$\\approx 3.134$',
    h: '$T \\approx \\frac{h}{2}[y_0 + 2(y_1 + y_2 + y_3) + y_4]$ with $h = 0.5$.',
    s: '$h = 0.5$. $A \\approx \\frac{0.5}{2}[0.693 + 2(1.179 + 1.609 + 1.981) + 2.303] = 0.25[0.693 + 2(4.769) + 2.303] = 0.25 \\times 12.534 \\approx 3.134$.',
    solutionSteps: [
      { explanation: 'Apply the trapezoidal rule with $h = 0.5$ and 4 strips.', workingOut: 'A \\approx \\frac{h}{2}[y_0 + 2(y_1 + y_2 + y_3) + y_4]' },
      { explanation: 'Substitute the $y$-values.', workingOut: '\\frac{0.5}{2}[0.693 + 2(1.179 + 1.609 + 1.981) + 2.303]' },
      { explanation: 'Evaluate.', workingOut: '= 0.25[0.693 + 9.538 + 2.303] = 0.25 \\times 12.534 \\approx 3.134' }
    ]
  },

  {
    id: 'bbhs2020s-25a',
    topicId: 'y12a-9D',
    c: '9D',
    t: 'Bivariate data',
    source: 'Similar to Blacktown Boys 2020 Trial Q25a',
    type: 'short_answer',
    difficulty: 'easy',
    marks: 1,
    q: 'A scatterplot of daily study hours ($x$) vs exam score ($y$) for 8 students shows a clear upward linear trend with $R^2 = 0.9901$. Use the scatterplot to describe the association between exam score and study hours in terms of strength and direction.',
    a: 'Strong, positive, linear association.',
    h: 'Consider the direction of the trend and how closely the points follow a line.',
    s: 'The points trend upward (positive direction) and cluster closely around the line of best fit ($R^2 \\approx 0.99$), indicating a strong positive linear association.',
    solutionSteps: [
      { explanation: 'Direction: as study hours increase, exam score increases — positive.', workingOut: '\\text{Direction: positive}' },
      { explanation: 'Strength: $R^2 = 0.9901$ indicates $r \\approx 0.995$, a very strong relationship.', workingOut: '\\text{Strength: strong}' }
    ]
  },

  {
    id: 'bbhs2020s-25b',
    topicId: 'y12a-9E',
    c: '9E',
    t: 'Formulae for correlation and regression',
    source: 'Similar to Blacktown Boys 2020 Trial Q25b',
    type: 'short_answer',
    difficulty: 'medium',
    marks: 2,
    q: 'For the study hours data, determine the equation of the least-squares regression line. Round values to 2 significant figures. (Data: $x$: 1.0, 1.0, 2.0, 3.0, 3.5, 4.0, 4.5, 5.0; $y$: 35, 38, 46, 58, 62, 68, 72, 77)',
    a: '$y \\approx 8.5x + 27$',
    h: 'Use a calculator in statistics mode to find the regression coefficients, rounded to 2 significant figures.',
    s: 'Using technology: gradient $B \\approx 8.5$ (2 s.f.) and intercept $A \\approx 27$ (2 s.f.). So the regression line is $y = 8.5x + 27$.',
    solutionSteps: [
      { explanation: 'Enter data in calculator statistics mode and find the regression line $y = A + Bx$.', workingOut: 'A \\approx 27,\\ B \\approx 8.5' },
      { explanation: 'Round to 2 significant figures.', workingOut: 'y \\approx 8.5x + 27' }
    ]
  },

  {
    id: 'bbhs2020s-25c',
    topicId: 'y12a-9E',
    c: '9E',
    t: 'Formulae for correlation and regression',
    source: 'Similar to Blacktown Boys 2020 Trial Q25c',
    type: 'short_answer',
    difficulty: 'easy',
    marks: 1,
    q: 'A student who studied for 2.5 hours was absent during data collection. Predict their exam score using the regression line $y = 8.5x + 27$.',
    a: '$y \\approx 48.25$ (about $48$ marks)',
    h: 'Substitute $x = 2.5$ into the regression equation.',
    s: '$y = 8.5 \\times 2.5 + 27 = 21.25 + 27 = 48.25$ marks.',
    solutionSteps: [
      { explanation: 'Substitute $x = 2.5$ into $y = 8.5x + 27$.', workingOut: 'y = 8.5(2.5) + 27 = 21.25 + 27 = 48.25 \\text{ marks}' }
    ]
  },

  {
    id: 'bbhs2020s-25d',
    topicId: 'y12a-9D',
    c: '9D',
    t: 'Bivariate data',
    source: 'Similar to Blacktown Boys 2020 Trial Q25d',
    type: 'short_answer',
    difficulty: 'medium',
    marks: 1,
    q: 'Explain why you should not use this regression line to predict the exam score for a student who studied for 20 hours.',
    a: 'The data only covers the range of approximately 1 to 5 hours. Extrapolating to 20 hours assumes the linear relationship continues far beyond the observed range, which is unreliable — there are likely diminishing returns and a score cannot exceed 100.',
    h: 'Extrapolation goes beyond the range of the observed data.',
    s: 'The regression model is reliable only within the observed range (approximately 1 to 5 hours of study). Using it at $x = 20$ is extrapolation; the linear trend may not continue and there is an upper bound of 100 marks.',
    solutionSteps: [
      { explanation: 'The data only covers $1 \\leq x \\leq 5$ hours. Extrapolation to 20 hours may be invalid.', workingOut: '\\text{Extrapolation is unreliable beyond the observed data range}' }
    ]
  },

  {
    id: 'bbhs2020s-26a',
    topicId: 'y12a-3B',
    c: '3B',
    t: 'Stationary points and turning points',
    source: 'Similar to Blacktown Boys 2020 Trial Q26a',
    type: 'short_answer',
    difficulty: 'hard',
    marks: 3,
    q: 'Consider the curve $y = x^3 - 3x + 2$ for $-2 \\leq x \\leq 3$. Find the stationary points and determine their nature.',
    a: 'Maximum turning point at $(-1, 4)$; minimum turning point at $(1, 0)$.',
    h: 'Set $y\' = 0$ to find stationary points. Use $y\'\'$ to classify them.',
    s: '$y\' = 3x^2 - 3 = 0 \\Rightarrow x^2 = 1 \\Rightarrow x = \\pm1$. At $x = 1$: $y = 0$, $y\'\' = 6 > 0$ → minimum $(1, 0)$. At $x = -1$: $y = 4$, $y\'\' = -6 < 0$ → maximum $(-1, 4)$.',
    solutionSteps: [
      { explanation: 'Differentiate and set $y\' = 0$.', workingOut: "y' = 3x^2 - 3 = 0 \\Rightarrow x = \\pm 1" },
      { explanation: 'Find the $y$-coordinates.', workingOut: 'x=1: y = 1 - 3 + 2 = 0; \\quad x=-1: y = -1 + 3 + 2 = 4' },
      { explanation: 'Use the second derivative $y\'\' = 6x$ to classify.', workingOut: "x=1: y'' = 6 > 0 \\text{ (min)}; \\quad x=-1: y'' = -6 < 0 \\text{ (max)}" }
    ]
  },

  {
    id: 'bbhs2020s-26b',
    topicId: 'y12a-3D',
    c: '3D',
    t: 'Concavity and points of inflection',
    source: 'Similar to Blacktown Boys 2020 Trial Q26b',
    type: 'short_answer',
    difficulty: 'medium',
    marks: 1,
    q: 'For the curve $y = x^3 - 3x + 2$, find the point of inflection.',
    a: '$(0, 2)$',
    h: 'Set $y\'\' = 0$ and verify a change in concavity.',
    s: '$y\'\' = 6x = 0 \\Rightarrow x = 0$. At $x = 0$: $y = 2$. Check: $y\'\'$ changes sign at $x = 0$ (negative for $x < 0$, positive for $x > 0$). Point of inflection at $(0, 2)$.',
    solutionSteps: [
      { explanation: "Set $y'' = 0$.", workingOut: "6x = 0 \\Rightarrow x = 0, \\quad y = 2" },
      { explanation: 'Verify the change in concavity.', workingOut: "x < 0: y'' < 0 \\text{ (concave down)}; \\quad x > 0: y'' > 0 \\text{ (concave up)}" },
      { explanation: 'Conclude.', workingOut: '\\text{Point of inflection at } (0, 2)' }
    ]
  },

  {
    id: 'bbhs2020s-26d',
    topicId: 'y12a-3F',
    c: '3F',
    t: 'Global maximum and minimum',
    source: 'Similar to Blacktown Boys 2020 Trial Q26d',
    type: 'short_answer',
    difficulty: 'medium',
    marks: 1,
    q: 'What is the maximum value of $y = x^3 - 3x + 2$ for $-2 \\leq x \\leq 3$?',
    a: '$y = 20$',
    h: 'Evaluate $y$ at the stationary points and at the endpoints $x = -2$ and $x = 3$, then find the greatest value.',
    s: '$y(-2) = -8+6+2 = 0$; $y(-1) = 4$; $y(1) = 0$; $y(3) = 27-9+2 = 20$. Maximum value is $20$ at $x = 3$.',
    solutionSteps: [
      { explanation: 'Evaluate at endpoints and stationary points.', workingOut: 'y(-2) = 0,\\ y(-1) = 4,\\ y(1) = 0,\\ y(3) = 27 - 9 + 2 = 20' },
      { explanation: 'The maximum value is 20 at $x = 3$.', workingOut: '\\text{Maximum} = 20' }
    ]
  },

  {
    id: 'bbhs2020s-27a',
    topicId: 'y12a-10F',
    c: '10F',
    t: 'Applications of the normal distribution',
    source: 'Similar to Blacktown Boys 2020 Trial Q27a',
    type: 'short_answer',
    difficulty: 'easy',
    marks: 1,
    q: 'Daily screen time for adults is normally distributed with mean 75 minutes and standard deviation 10 minutes. Above what screen time does 2.5% of this population lie?',
    a: '$95$ minutes',
    h: '2.5% in the upper tail corresponds to 2 standard deviations above the mean.',
    s: '$2.5\\%$ is 2 SDs above the mean: $75 + 2 \\times 10 = 95$ minutes.',
    solutionSteps: [
      { explanation: '$2.5\\%$ above corresponds to $z = 2$ (from the 95% rule).', workingOut: 'z = 2' },
      { explanation: 'Convert to the actual value.', workingOut: '\\mu + 2\\sigma = 75 + 2(10) = 95 \\text{ minutes}' }
    ]
  },

  {
    id: 'bbhs2020s-27b',
    topicId: 'y12a-10F',
    c: '10F',
    t: 'Applications of the normal distribution',
    source: 'Similar to Blacktown Boys 2020 Trial Q27b',
    type: 'short_answer',
    difficulty: 'medium',
    marks: 2,
    q: 'With mean 75 min and SD 10 min, Priya has a daily screen time of 55 minutes. What percentage of this population has a screen time more than Priya\'s?',
    a: '$97.5\\%$',
    h: 'Find the $z$-score for 55 min, then determine the percentage above that value.',
    s: '$z = \\frac{55 - 75}{10} = -2$. $P(X > 55) = P(Z > -2) = 50\\% + \\frac{95\\%}{2} = 50\\% + 47.5\\% = 97.5\\%$.',
    solutionSteps: [
      { explanation: 'Find the $z$-score.', workingOut: 'z = \\frac{55 - 75}{10} = -2' },
      { explanation: 'The proportion above $z = -2$ equals $50\\% + 47.5\\% = 97.5\\%$ (from the 95% rule).', workingOut: 'P(X > 55) = 97.5\\%' }
    ]
  },

  {
    id: 'bbhs2020s-27c',
    topicId: 'y12a-10F',
    c: '10F',
    t: 'Applications of the normal distribution',
    source: 'Similar to Blacktown Boys 2020 Trial Q27c',
    type: 'short_answer',
    difficulty: 'hard',
    marks: 2,
    q: 'From the same population (mean 75 min, SD 10 min), Liam finds that 3 people had screen times below 45 minutes. If Liam\'s sample has the same distribution as the population, what is Liam\'s sample size?',
    a: '$2000$',
    h: 'Find the $z$-score for 45 min; this gives the proportion below that value. Then: proportion × sample size = 3.',
    s: '$z = \\frac{45 - 75}{10} = -3$. $P(X < 45) = 0.15\\%$. $0.0015 \\times n = 3 \\Rightarrow n = 2000$.',
    solutionSteps: [
      { explanation: 'Find the $z$-score for 45 min.', workingOut: 'z = \\frac{45 - 75}{10} = -3' },
      { explanation: '$z = -3$ corresponds to the bottom 0.15% (from 99.7% rule).', workingOut: 'P(X < 45) = 0.15\\%' },
      { explanation: 'Set up equation: proportion × sample size = 3.', workingOut: '0.0015 \\times n = 3 \\Rightarrow n = 2000' }
    ]
  },

  {
    id: 'bbhs2020s-28a',
    topicId: 'y12a-10B',
    c: '10B',
    t: 'Continuous distributions',
    source: 'Similar to Blacktown Boys 2020 Trial Q28a',
    type: 'short_answer',
    difficulty: 'hard',
    marks: 2,
    q: 'The time (minutes) spent at a self-serve checkout has PDF $f(x) = k(25 - x^2)$ for $0 \\leq x \\leq 5$, and 0 otherwise. Show that $k = \\dfrac{3}{250}$.',
    a: '$\\int_0^5 k(25-x^2)\\,dx = k\\left[25x - \\frac{x^3}{3}\\right]_0^5 = k \\cdot \\frac{250}{3} = 1 \\Rightarrow k = \\frac{3}{250}$',
    h: 'For a valid PDF, $\\int_{-\\infty}^{\\infty} f(x)\\,dx = 1$.',
    s: '$\\int_0^5 k(25-x^2)\\,dx = k\\left[25x - \\frac{x^3}{3}\\right]_0^5 = k\\left(125 - \\frac{125}{3}\\right) = k \\cdot \\frac{250}{3} = 1 \\Rightarrow k = \\frac{3}{250}$.',
    solutionSteps: [
      { explanation: 'Set the integral of the PDF equal to 1.', workingOut: '\\int_0^5 k(25 - x^2)\\,dx = 1' },
      { explanation: 'Integrate.', workingOut: 'k\\left[25x - \\frac{x^3}{3}\\right]_0^5 = k\\left(125 - \\frac{125}{3}\\right) = k \\cdot \\frac{250}{3}' },
      { explanation: 'Solve for $k$.', workingOut: 'k \\cdot \\frac{250}{3} = 1 \\Rightarrow k = \\frac{3}{250}' }
    ]
  },

  {
    id: 'bbhs2020s-28b',
    topicId: 'y12a-10B',
    c: '10B',
    t: 'Continuous distributions',
    source: 'Similar to Blacktown Boys 2020 Trial Q28b',
    type: 'short_answer',
    difficulty: 'hard',
    marks: 2,
    q: 'For the PDF $f(x) = \\dfrac{3}{250}(25 - x^2)$ for $0 \\leq x \\leq 5$, find the cumulative distribution function $F(x)$.',
    a: '$F(x) = \\begin{cases} 0 & x < 0 \\\\ \\dfrac{3x}{10} - \\dfrac{x^3}{250} & 0 \\leq x \\leq 5 \\\\ 1 & x > 5 \\end{cases}$',
    h: '$F(x) = \\int_0^x f(t)\\,dt$ for $0 \\leq x \\leq 5$.',
    s: '$F(x) = \\frac{3}{250}\\left[25t - \\frac{t^3}{3}\\right]_0^x = \\frac{3}{250}\\left(25x - \\frac{x^3}{3}\\right) = \\frac{3x}{10} - \\frac{x^3}{250}$.',
    solutionSteps: [
      { explanation: 'Integrate the PDF from 0 to $x$.', workingOut: 'F(x) = \\frac{3}{250}\\int_0^x (25 - t^2)\\,dt = \\frac{3}{250}\\left[25t - \\frac{t^3}{3}\\right]_0^x' },
      { explanation: 'Simplify.', workingOut: 'F(x) = \\frac{3}{250}\\left(25x - \\frac{x^3}{3}\\right) = \\frac{3x}{10} - \\frac{x^3}{250}' }
    ]
  },

  {
    id: 'bbhs2020s-28c',
    topicId: 'y12a-10B',
    c: '10B',
    t: 'Continuous distributions',
    source: 'Similar to Blacktown Boys 2020 Trial Q28c',
    type: 'short_answer',
    difficulty: 'medium',
    marks: 1,
    q: 'Using $F(x) = \\dfrac{3x}{10} - \\dfrac{x^3}{250}$, find the probability that a customer spends longer than 4 minutes at the checkout. Express as a fraction.',
    a: '$\\dfrac{7}{125}$',
    h: '$P(X > 4) = 1 - F(4)$.',
    s: '$F(4) = \\frac{12}{10} - \\frac{64}{250} = \\frac{300}{250} - \\frac{64}{250} = \\frac{236}{250}$. $P(X > 4) = 1 - \\frac{236}{250} = \\frac{14}{250} = \\frac{7}{125}$.',
    solutionSteps: [
      { explanation: 'Evaluate $F(4)$.', workingOut: 'F(4) = \\frac{3(4)}{10} - \\frac{64}{250} = \\frac{300}{250} - \\frac{64}{250} = \\frac{236}{250}' },
      { explanation: 'Find $P(X > 4) = 1 - F(4)$.', workingOut: 'P(X > 4) = \\frac{14}{250} = \\frac{7}{125}' }
    ]
  },

  {
    id: 'bbhs2020s-29a',
    topicId: 'y12a-4F',
    c: '4F',
    t: 'Finding areas by integration',
    source: 'Similar to Blacktown Boys 2020 Trial Q29a',
    type: 'short_answer',
    difficulty: 'medium',
    marks: 1,
    q: 'The graphs of $y = 6 - x$ and $y = \\dfrac{5}{2x-1}$ intersect at points $A$ and $B$. Show that the $x$-coordinates of $A$ and $B$ are 1 and 5.5 respectively.',
    a: 'Solving $(6-x)(2x-1) = 5$ gives $2x^2 - 13x + 11 = 0 \\Rightarrow (2x-11)(x-1) = 0 \\Rightarrow x = 1$ or $x = 5.5$.',
    h: 'Set the two expressions equal and solve the resulting quadratic.',
    s: '$(6-x)(2x-1) = 5 \\Rightarrow 12x - 6 - 2x^2 + x = 5 \\Rightarrow -2x^2 + 13x - 11 = 0 \\Rightarrow 2x^2 - 13x + 11 = 0 \\Rightarrow (2x-11)(x-1) = 0$. So $x = 1$ or $x = 5.5$.',
    solutionSteps: [
      { explanation: 'Set the equations equal.', workingOut: '6 - x = \\frac{5}{2x - 1}' },
      { explanation: 'Multiply both sides by $(2x-1)$.', workingOut: '(6-x)(2x-1) = 5 \\Rightarrow -2x^2 + 13x - 11 = 0' },
      { explanation: 'Solve the quadratic.', workingOut: '2x^2 - 13x + 11 = 0 \\Rightarrow (2x-11)(x-1) = 0 \\Rightarrow x = 1 \\text{ or } x = 5.5' }
    ]
  },

  {
    id: 'bbhs2020s-29b',
    topicId: 'y12a-4G',
    c: '4G',
    t: 'Areas of compound regions',
    source: 'Similar to Blacktown Boys 2020 Trial Q29b',
    type: 'short_answer',
    difficulty: 'hard',
    marks: 3,
    q: 'Find the exact area of the region bounded by $y = 6 - x$ and $y = \\dfrac{5}{2x-1}$ between $x = 1$ and $x = 5.5$.',
    a: '$\\dfrac{99}{8} - \\dfrac{5}{2}\\ln 10$ units²',
    h: 'Area $= \\int_1^{5.5}\\left[(6-x) - \\frac{5}{2x-1}\\right]dx$. Integrate each term separately.',
    s: '$\\int_1^{5.5}\\!\\left(6-x-\\frac{5}{2x-1}\\right)dx = \\left[6x - \\frac{x^2}{2} - \\frac{5}{2}\\ln|2x-1|\\right]_1^{5.5}$. $= \\left(33 - \\frac{30.25}{2} - \\frac{5}{2}\\ln 10\\right) - \\left(6 - \\frac{1}{2} - 0\\right) = \\frac{99}{8} - \\frac{5}{2}\\ln 10$.',
    solutionSteps: [
      { explanation: 'Set up the integral (top curve minus bottom curve).', workingOut: 'A = \\int_1^{5.5}\\!\\left[(6-x) - \\frac{5}{2x-1}\\right]dx' },
      { explanation: 'Find the primitive function.', workingOut: '\\left[6x - \\frac{x^2}{2} - \\frac{5}{2}\\ln|2x-1|\\right]_1^{5.5}' },
      { explanation: 'Substitute limits. At $x=5.5$: $6(5.5) - (5.5)^2/2 - (5/2)\\ln 10 = 33 - 15.125 - (5/2)\\ln 10$. At $x=1$: $6 - 0.5 - 0 = 5.5$.', workingOut: '\\left(\\frac{99}{8} - \\frac{5}{2}\\ln 10\\right) - \\frac{9}{2} = \\frac{99}{8} - \\frac{5}{2}\\ln 10' }
    ]
  },

  {
    id: 'bbhs2020s-30a',
    topicId: 'y12a-8A',
    c: '8A',
    t: 'Applications of APs and GPs',
    source: 'Similar to Blacktown Boys 2020 Trial Q30a',
    type: 'short_answer',
    difficulty: 'easy',
    marks: 1,
    q: 'A gardener plants sunflowers in rows: the first row has 30, the second row has 35, and each succeeding row has 5 more than the previous row. Calculate the number of sunflowers in the 8th row.',
    a: '$65$',
    h: 'This is an AP with $a = 30$, $d = 5$. Use $T_n = a + (n-1)d$.',
    s: '$T_8 = 30 + 7 \\times 5 = 30 + 35 = 65$.',
    solutionSteps: [
      { explanation: 'Apply the general term formula with $a = 30$, $d = 5$, $n = 8$.', workingOut: 'T_8 = 30 + (8-1) \\times 5 = 30 + 35 = 65' }
    ]
  },

  {
    id: 'bbhs2020s-30b',
    topicId: 'y12a-8A',
    c: '8A',
    t: 'Applications of APs and GPs',
    source: 'Similar to Blacktown Boys 2020 Trial Q30b',
    type: 'short_answer',
    difficulty: 'medium',
    marks: 2,
    q: 'For the sunflower garden (first row 30, common difference 5), which row would be the first to contain more than 200 sunflowers?',
    a: 'The 36th row.',
    h: 'Solve $30 + (n-1) \\times 5 > 200$ for the smallest integer $n$.',
    s: '$30 + 5(n-1) > 200 \\Rightarrow 5n > 175 \\Rightarrow n > 35$. First integer: $n = 36$.',
    solutionSteps: [
      { explanation: 'Set up the inequality.', workingOut: '30 + (n-1) \\times 5 > 200' },
      { explanation: 'Solve.', workingOut: '5n - 5 > 170 \\Rightarrow 5n > 175 \\Rightarrow n > 35' },
      { explanation: 'First integer value.', workingOut: 'n = 36' }
    ]
  },

  {
    id: 'bbhs2020s-30c',
    topicId: 'y12a-8A',
    c: '8A',
    t: 'Applications of APs and GPs',
    source: 'Similar to Blacktown Boys 2020 Trial Q30c',
    type: 'short_answer',
    difficulty: 'hard',
    marks: 2,
    q: 'The gardener planted 5100 sunflowers altogether (same AP: first row 30, $d = 5$). How many rows were planted?',
    a: '$40$ rows',
    h: 'Use $S_n = \\frac{n}{2}(2a + (n-1)d) = 5100$ and solve the resulting quadratic.',
    s: '$\\frac{n}{2}(60 + 5(n-1)) = 5100 \\Rightarrow n(55 + 5n) = 10200 \\Rightarrow 5n^2 + 55n - 10200 = 0 \\Rightarrow n^2 + 11n - 2040 = 0 \\Rightarrow (n-40)(n+51) = 0 \\Rightarrow n = 40$.',
    solutionSteps: [
      { explanation: 'Set up the sum equation.', workingOut: 'S_n = \\frac{n}{2}(2 \\times 30 + (n-1) \\times 5) = 5100' },
      { explanation: 'Simplify.', workingOut: 'n^2 + 11n - 2040 = 0' },
      { explanation: 'Factorise and solve.', workingOut: '(n - 40)(n + 51) = 0 \\Rightarrow n = 40' }
    ]
  },

  {
    id: 'bbhs2020s-31a',
    topicId: 'y12a-7B',
    c: '7B',
    t: 'Velocity and acceleration as derivatives',
    source: 'Similar to Blacktown Boys 2020 Trial Q31a',
    type: 'short_answer',
    difficulty: 'easy',
    marks: 1,
    q: 'A particle moves in a straight line with velocity $v = 3 - 6\\cos 2t$ m/s for $0 \\leq t \\leq 2\\pi$. Find the initial velocity.',
    a: '$v = -3$ m/s',
    h: 'Substitute $t = 0$.',
    s: '$v(0) = 3 - 6\\cos(0) = 3 - 6 = -3$ m/s.',
    solutionSteps: [
      { explanation: 'Substitute $t = 0$ into the velocity function.', workingOut: 'v = 3 - 6\\cos(0) = 3 - 6 = -3 \\text{ m/s}' }
    ]
  },

  {
    id: 'bbhs2020s-31b',
    topicId: 'y12a-7B',
    c: '7B',
    t: 'Velocity and acceleration as derivatives',
    source: 'Similar to Blacktown Boys 2020 Trial Q31b',
    type: 'short_answer',
    difficulty: 'medium',
    marks: 2,
    q: 'For $v = 3 - 6\\cos 2t$, find all times when the particle is at rest for $0 \\leq t \\leq 2\\pi$.',
    a: '$t = \\dfrac{\\pi}{6},\\ \\dfrac{5\\pi}{6},\\ \\dfrac{7\\pi}{6},\\ \\dfrac{11\\pi}{6}$',
    h: 'Set $v = 0$ and solve $\\cos 2t = \\frac{1}{2}$.',
    s: '$3 - 6\\cos 2t = 0 \\Rightarrow \\cos 2t = \\frac{1}{2}$. For $0 \\leq 2t \\leq 4\\pi$: $2t = \\frac{\\pi}{3}, \\frac{5\\pi}{3}, \\frac{7\\pi}{3}, \\frac{11\\pi}{3}$. So $t = \\frac{\\pi}{6}, \\frac{5\\pi}{6}, \\frac{7\\pi}{6}, \\frac{11\\pi}{6}$.',
    solutionSteps: [
      { explanation: 'Set $v = 0$.', workingOut: '3 - 6\\cos 2t = 0 \\Rightarrow \\cos 2t = \\tfrac{1}{2}' },
      { explanation: 'Solve for $2t$ in $[0, 4\\pi]$.', workingOut: '2t = \\frac{\\pi}{3},\\ \\frac{5\\pi}{3},\\ \\frac{7\\pi}{3},\\ \\frac{11\\pi}{3}' },
      { explanation: 'Divide by 2.', workingOut: 't = \\frac{\\pi}{6},\\ \\frac{5\\pi}{6},\\ \\frac{7\\pi}{6},\\ \\frac{11\\pi}{6}' }
    ]
  },

  {
    id: 'bbhs2020s-31d',
    topicId: 'y12a-7B',
    c: '7B',
    t: 'Velocity and acceleration as derivatives',
    source: 'Similar to Blacktown Boys 2020 Trial Q31d',
    type: 'short_answer',
    difficulty: 'easy',
    marks: 1,
    q: 'For $v = 3 - 6\\cos 2t$, find the acceleration when $t = \\dfrac{\\pi}{2}$.',
    a: '$0$ m/s²',
    h: 'Differentiate $v$ to get acceleration, then substitute $t = \\pi/2$.',
    s: '$a = \\dot{v} = 12\\sin 2t$. At $t = \\frac{\\pi}{2}$: $a = 12\\sin\\pi = 0$ m/s².',
    solutionSteps: [
      { explanation: 'Differentiate $v = 3 - 6\\cos 2t$.', workingOut: 'a = \\frac{dv}{dt} = 12\\sin 2t' },
      { explanation: 'Substitute $t = \\pi/2$.', workingOut: 'a = 12\\sin\\pi = 0 \\text{ m/s}^2' }
    ]
  },

  {
    id: 'bbhs2020s-31e',
    topicId: 'y12a-7C',
    c: '7C',
    t: 'Integrating with respect to time',
    source: 'Similar to Blacktown Boys 2020 Trial Q31e',
    type: 'short_answer',
    difficulty: 'hard',
    marks: 2,
    q: 'For $v = 3 - 6\\cos 2t$ and initial displacement 5 m to the right of the origin, find the exact displacement when $t = \\pi$.',
    a: '$x = 3\\pi + 5$ metres',
    h: 'Integrate $v$ to get $x(t)$, apply the initial condition $x(0) = 5$, then substitute $t = \\pi$.',
    s: '$x = \\int (3 - 6\\cos 2t)\\,dt = 3t - 3\\sin 2t + C$. At $t=0$: $5 = 0 - 0 + C \\Rightarrow C = 5$. At $t = \\pi$: $x = 3\\pi - 3\\sin 2\\pi + 5 = 3\\pi + 5$.',
    solutionSteps: [
      { explanation: 'Integrate the velocity.', workingOut: 'x = 3t - 3\\sin 2t + C' },
      { explanation: 'Apply $x(0) = 5$.', workingOut: '5 = 0 - 0 + C \\Rightarrow C = 5' },
      { explanation: 'Substitute $t = \\pi$.', workingOut: 'x(\\pi) = 3\\pi - 3\\sin 2\\pi + 5 = 3\\pi + 5' }
    ]
  },

  {
    id: 'bbhs2020s-32a',
    topicId: 'y12a-3G',
    c: '3G',
    t: 'Applications of maximisation and minimisation',
    source: 'Similar to Blacktown Boys 2020 Trial Q32a',
    type: 'short_answer',
    difficulty: 'medium',
    marks: 1,
    q: 'A window is a rectangle of width $2r$ and height $h$, surmounted by a semicircle of radius $r$. The perimeter is $20\\pi$ metres. Show that $h = 10\\pi - r - \\dfrac{1}{2}\\pi r$.',
    a: 'Perimeter $= 2h + 2r + \\pi r = 20\\pi$, so $2h = 20\\pi - 2r - \\pi r$, giving $h = 10\\pi - r - \\frac{1}{2}\\pi r$.',
    h: 'The perimeter consists of: two vertical sides ($2h$), the base ($2r$), and the semicircle ($\\pi r$).',
    s: 'Perimeter $= 2h + 2r + \\pi r = 20\\pi$. Rearranging: $2h = 20\\pi - 2r - \\pi r \\Rightarrow h = 10\\pi - r - \\frac{\\pi r}{2}$.',
    solutionSteps: [
      { explanation: 'Write the perimeter equation.', workingOut: '2h + 2r + \\pi r = 20\\pi' },
      { explanation: 'Solve for $h$.', workingOut: '2h = 20\\pi - 2r - \\pi r \\Rightarrow h = 10\\pi - r - \\frac{1}{2}\\pi r' }
    ]
  },

  {
    id: 'bbhs2020s-32b',
    topicId: 'y12a-3G',
    c: '3G',
    t: 'Applications of maximisation and minimisation',
    source: 'Similar to Blacktown Boys 2020 Trial Q32b',
    type: 'short_answer',
    difficulty: 'medium',
    marks: 1,
    q: 'Given $h = 10\\pi - r - \\dfrac{\\pi r}{2}$, show that the area $A$ of the window is $A = 20\\pi r - 2r^2 - \\dfrac{\\pi r^2}{2}$.',
    a: '$A = 2rh + \\frac{\\pi r^2}{2} = 2r(10\\pi - r - \\frac{\\pi r}{2}) + \\frac{\\pi r^2}{2} = 20\\pi r - 2r^2 - \\pi r^2 + \\frac{\\pi r^2}{2} = 20\\pi r - 2r^2 - \\frac{\\pi r^2}{2}$',
    h: 'Area = rectangle area + semicircle area $= 2rh + \\frac{1}{2}\\pi r^2$.',
    s: '$A = 2rh + \\frac{\\pi r^2}{2} = 2r\\!\\left(10\\pi - r - \\frac{\\pi r}{2}\\right) + \\frac{\\pi r^2}{2} = 20\\pi r - 2r^2 - \\pi r^2 + \\frac{\\pi r^2}{2} = 20\\pi r - 2r^2 - \\frac{\\pi r^2}{2}$.',
    solutionSteps: [
      { explanation: 'Write the area formula.', workingOut: 'A = 2rh + \\frac{1}{2}\\pi r^2' },
      { explanation: 'Substitute the expression for $h$.', workingOut: 'A = 2r\\!\\left(10\\pi - r - \\frac{\\pi r}{2}\\right) + \\frac{\\pi r^2}{2}' },
      { explanation: 'Expand and simplify.', workingOut: 'A = 20\\pi r - 2r^2 - \\pi r^2 + \\frac{\\pi r^2}{2} = 20\\pi r - 2r^2 - \\frac{\\pi r^2}{2}' }
    ]
  },

  {
    id: 'bbhs2020s-32c',
    topicId: 'y12a-3G',
    c: '3G',
    t: 'Applications of maximisation and minimisation',
    source: 'Similar to Blacktown Boys 2020 Trial Q32c',
    type: 'short_answer',
    difficulty: 'hard',
    marks: 3,
    q: 'Given $A = 20\\pi r - 2r^2 - \\dfrac{\\pi r^2}{2}$, find the exact radius $r$ for which the area is a maximum.',
    a: '$r = \\dfrac{20\\pi}{4 + \\pi}$',
    h: 'Differentiate $A$ with respect to $r$, set $\\frac{dA}{dr} = 0$, and verify it is a maximum.',
    s: '$\\frac{dA}{dr} = 20\\pi - 4r - \\pi r = 0 \\Rightarrow r(4 + \\pi) = 20\\pi \\Rightarrow r = \\frac{20\\pi}{4 + \\pi}$. $\\frac{d^2A}{dr^2} = -4 - \\pi < 0$, confirming maximum.',
    solutionSteps: [
      { explanation: 'Differentiate.', workingOut: '\\frac{dA}{dr} = 20\\pi - 4r - \\pi r' },
      { explanation: 'Set equal to zero.', workingOut: '20\\pi - 4r - \\pi r = 0 \\Rightarrow r(4 + \\pi) = 20\\pi' },
      { explanation: 'Solve for $r$.', workingOut: 'r = \\frac{20\\pi}{4 + \\pi}' },
      { explanation: 'Verify maximum: $\\frac{d^2A}{dr^2} = -4 - \\pi < 0$ ✓', workingOut: '\\frac{d^2A}{dr^2} < 0 \\Rightarrow \\text{maximum}' }
    ]
  },

  {
    id: 'bbhs2020s-32d',
    topicId: 'y12a-3G',
    c: '3G',
    t: 'Applications of maximisation and minimisation',
    source: 'Similar to Blacktown Boys 2020 Trial Q32d',
    type: 'short_answer',
    difficulty: 'medium',
    marks: 1,
    q: 'Find the maximum area of the window (to 1 decimal place), given $r = \\dfrac{20\\pi}{4 + \\pi}$.',
    a: '$276.4$ m²',
    h: 'Substitute $r = \\frac{20\\pi}{4+\\pi}$ into $A = 20\\pi r - 2r^2 - \\frac{\\pi r^2}{2}$.',
    s: 'Substituting $r = \\frac{20\\pi}{4+\\pi}$ gives $A = \\frac{200\\pi^2}{4+\\pi} \\approx 276.4$ m².',
    solutionSteps: [
      { explanation: 'Substitute $r = \\frac{20\\pi}{4+\\pi}$ into the area formula.', workingOut: 'A = 20\\pi \\times \\frac{20\\pi}{4+\\pi} - 2\\left(\\frac{20\\pi}{4+\\pi}\\right)^2 - \\frac{\\pi}{2}\\left(\\frac{20\\pi}{4+\\pi}\\right)^2' },
      { explanation: 'Simplify to $\\frac{200\\pi^2}{4+\\pi}$ and evaluate numerically.', workingOut: 'A \\approx 276.4 \\text{ m}^2' }
    ]
  }

];
