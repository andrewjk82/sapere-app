/**
 * Blacktown Boys' High School 2020 HSC Trial Exam — Advanced Mathematics (2U)
 * topicId matches curriculumData.js topic IDs exactly.
 */
export const BLACKTOWN_BOYS_2020_QUESTIONS = [

  // ─── SECTION I: MULTIPLE CHOICE ───────────────────────────────────────────

  {
    id: 'bbhs2020-mc1',
    topicId: 'y11a-3A',
    c: '3A',
    t: 'Functions and function notation',
    source: 'Blacktown Boys 2020 Trial Q1',
    type: 'multiple_choice',
    difficulty: 'easy',
    q: 'What is the domain of the function $f(x) = \\sqrt{1 - x^2}$?',
    a: '$[-1, 1]$',
    opts: [
      '$(0, 1)$',
      '$[0, 1]$',
      '$(-1, 1)$',
      '$[-1, 1]$'
    ],
    h: 'The expression under the square root must be $\\geq 0$. Solve $1 - x^2 \\geq 0$.',
    s: 'Require $1 - x^2 \\geq 0$, so $x^2 \\leq 1$, giving $-1 \\leq x \\leq 1$. Since the endpoints are included (square root of 0 is defined), the domain is $[-1, 1]$.',
    solutionSteps: [
      { explanation: 'The expression under a square root must be non-negative.', workingOut: '1 - x^2 \\geq 0' },
      { explanation: 'Rearrange the inequality.', workingOut: 'x^2 \\leq 1' },
      { explanation: 'Solve for $x$.', workingOut: '-1 \\leq x \\leq 1' },
      { explanation: 'Both endpoints are included since $\\sqrt{0} = 0$ is defined.', workingOut: '\\text{Domain} = [-1, 1]' }
    ]
  },

  {
    id: 'bbhs2020-mc2',
    topicId: 'y11a-3C',
    c: '3C',
    t: 'Review of linear graphs',
    source: 'Blacktown Boys 2020 Trial Q2',
    type: 'multiple_choice',
    difficulty: 'medium',
    q: 'What is the angle of inclination of the line $\\sqrt{3}x - y + 2\\sqrt{3} = 0$ with respect to the positive $x$-axis?',
    a: '$60°$',
    opts: [
      '$30°$',
      '$60°$',
      '$120°$',
      '$150°$'
    ],
    h: 'Rearrange to $y = mx + c$ form, then use $\\tan\\theta = m$.',
    s: '$y = \\sqrt{3}x + 2\\sqrt{3}$, so $m = \\sqrt{3}$. Then $\\tan\\theta = \\sqrt{3}$, giving $\\theta = 60°$.',
    solutionSteps: [
      { explanation: 'Rearrange to slope-intercept form.', workingOut: 'y = \\sqrt{3}x + 2\\sqrt{3}' },
      { explanation: 'Read off the gradient.', workingOut: 'm = \\sqrt{3}' },
      { explanation: 'Use $\\tan\\theta = m$ to find the angle of inclination.', workingOut: '\\tan\\theta = \\sqrt{3} \\Rightarrow \\theta = 60°' }
    ]
  },

  {
    id: 'bbhs2020-mc3',
    topicId: 'y12a-5F',
    c: '5F',
    t: 'Review of logarithmic functions',
    source: 'Blacktown Boys 2020 Trial Q3',
    type: 'multiple_choice',
    difficulty: 'medium',
    q: 'Which of the following is equal to $\\dfrac{\\log_3 32}{\\log_3 2}$?',
    a: '$5$',
    opts: [
      '$\\log_3 30$',
      '$\\log_3 16$',
      '$16$',
      '$5$'
    ],
    h: 'Use the change of base formula: $\\dfrac{\\log_3 32}{\\log_3 2} = \\log_2 32$.',
    s: '$\\dfrac{\\log_3 32}{\\log_3 2} = \\log_2 32 = \\log_2 2^5 = 5$.',
    solutionSteps: [
      { explanation: 'Recognise the change of base formula: $\\frac{\\log_b A}{\\log_b C} = \\log_C A$.', workingOut: '\\frac{\\log_3 32}{\\log_3 2} = \\log_2 32' },
      { explanation: 'Express 32 as a power of 2.', workingOut: '32 = 2^5' },
      { explanation: 'Simplify.', workingOut: '\\log_2 2^5 = 5' }
    ]
  },

  {
    id: 'bbhs2020-mc4',
    topicId: 'y12a-9A',
    c: '9A',
    t: 'Displaying data',
    source: 'Blacktown Boys 2020 Trial Q4',
    type: 'multiple_choice',
    difficulty: 'easy',
    q: 'John works in a cake shop, and based on sales over two weeks, he conducted a survey of the five most popular cakes. What type of data is this?',
    a: 'Categorical nominal',
    opts: [
      'Categorical nominal',
      'Categorical ordinal',
      'Quantitative continuous',
      'Quantitative discrete'
    ],
    h: 'Types of cakes are names/labels with no natural ordering.',
    s: 'Cake types are categories (names) with no inherent order, so the data is categorical nominal.',
    solutionSteps: [
      { explanation: 'Cake names are labels — there is no numerical quantity and no natural order between cake types.', workingOut: '\\text{Categorical (names/labels) + no ordering} \\Rightarrow \\text{Categorical nominal}' }
    ]
  },

  {
    id: 'bbhs2020-mc5',
    topicId: 'y12a-9A',
    c: '9A',
    t: 'Displaying data',
    source: 'Blacktown Boys 2020 Trial Q5',
    type: 'multiple_choice',
    difficulty: 'easy',
    q: 'A graph shows the cost and income lines for producing boxes of chocolates. The cost line starts at about $5 (fixed cost) and has a gentler slope; the income line starts at 0 with a steeper slope. They intersect at the break-even point. How many boxes need to be sold to break even?',
    a: '$3$',
    opts: [
      '$5$',
      '$4$',
      '$3$',
      '$2$'
    ],
    h: 'The break-even point is where the cost and income lines intersect.',
    s: 'From the graph, the cost and income lines intersect at $x = 3$ boxes, so 3 boxes must be sold to break even.',
    solutionSteps: [
      { explanation: 'Break-even occurs where income equals cost — the intersection point of the two lines.', workingOut: '\\text{Intersection at } x = 3' }
    ]
  },

  {
    id: 'bbhs2020-mc6',
    topicId: 'y12a-10E',
    c: '10E',
    t: 'General normal distributions',
    source: 'Blacktown Boys 2020 Trial Q6',
    type: 'multiple_choice',
    difficulty: 'medium',
    q: 'The time taken to travel between two regional cities is approximately normally distributed with a mean of 85 minutes and a standard deviation of 4 minutes. The percentage of travel times that are between 81 minutes and 93 minutes is closest to',
    a: '$81.5\\%$',
    opts: [
      '$68\\%$',
      '$70.5\\%$',
      '$81.5\\%$',
      '$95\\%$'
    ],
    h: '81 is 1 SD below the mean; 93 is 2 SD above the mean. Use the 68-95-99.7 rule.',
    s: '$81 = 85 - 4$ (1 SD below), $93 = 85 + 2(4)$ (2 SD above). $P(\\mu - \\sigma < X < \\mu + 2\\sigma) = \\frac{68\\%}{2} + \\frac{95\\%}{2} = 34\\% + 47.5\\% = 81.5\\%$.',
    solutionSteps: [
      { explanation: 'Find the $z$-scores for 81 and 93.', workingOut: 'z_{81} = \\frac{81-85}{4} = -1, \\quad z_{93} = \\frac{93-85}{4} = 2' },
      { explanation: 'Use the 68-95-99.7 rule. The area from $\\mu$ to $\\mu+\\sigma$ is 34% (half of 68%), and from $\\mu$ to $\\mu+2\\sigma$ is 47.5% (half of 95%).', workingOut: '34\\% + 47.5\\% = 81.5\\%' }
    ]
  },

  {
    id: 'bbhs2020-mc7',
    topicId: 'y12a-9A',
    c: '9A',
    t: 'Displaying data',
    source: 'Blacktown Boys 2020 Trial Q7',
    type: 'multiple_choice',
    difficulty: 'medium',
    q: 'A Pareto chart shows orders received by a business over five months: Apr (25), May (9), Mar (8), Feb (5), Jan (3). Total orders = 50. The cumulative percentage line reaches about 68% after April. What percentage of orders were received in May?',
    a: '$18\\%$',
    opts: [
      '$69\\%$',
      '$45\\%$',
      '$30\\%$',
      '$18\\%$'
    ],
    h: 'Find May\'s percentage directly: $\\frac{9}{50} \\times 100$. Or read the cumulative percentage line: 68% after April, 86% after May, so May = 86% − 68% = 18%.',
    s: 'May had 9 orders out of total 50. $\\frac{9}{50} \\times 100 = 18\\%$.',
    solutionSteps: [
      { explanation: 'Total orders = 25 + 9 + 8 + 5 + 3 = 50.', workingOut: '\\text{Total} = 50' },
      { explanation: 'May\'s percentage.', workingOut: '\\frac{9}{50} \\times 100 = 18\\%' }
    ]
  },

  {
    id: 'bbhs2020-mc8',
    topicId: 'y12a-3D',
    c: '3D',
    t: 'Concavity and points of inflection',
    source: 'Blacktown Boys 2020 Trial Q8',
    type: 'multiple_choice',
    difficulty: 'medium',
    q: 'A graph shows the curve $y = f(x)$ with a point $P(a, f(a))$ in the first quadrant. At $P$ the curve is decreasing and concave down. Which statement is true?',
    a: "$f'(a) < 0,\\ f''(a) < 0$",
    opts: [
      "$f'(a) < 0,\\ f''(a) < 0$",
      "$f'(a) > 0,\\ f''(a) > 0$",
      "$f'(a) < 0,\\ f''(a) > 0$",
      "$f'(a) > 0,\\ f''(a) < 0$"
    ],
    h: 'Decreasing means $f\'(a) < 0$. Concave down means $f\'\'(a) < 0$.',
    s: 'The curve is decreasing at $P$, so $f\'(a) < 0$. The curve is concave down at $P$, so $f\'\'(a) < 0$.',
    solutionSteps: [
      { explanation: 'Decreasing curve → negative gradient.', workingOut: "f'(a) < 0" },
      { explanation: 'Concave down → second derivative is negative.', workingOut: "f''(a) < 0" }
    ]
  },

  {
    id: 'bbhs2020-mc9',
    topicId: 'y11a-12E',
    c: '12E',
    t: 'Multi-stage experiments and the product rule',
    source: 'Blacktown Boys 2020 Trial Q9',
    type: 'multiple_choice',
    difficulty: 'medium',
    q: 'A box contains five red marbles and four blue marbles. Stella selects three marbles at random, without replacing them. The probability that at least one of the marbles that Stella selects is red is',
    a: '$\\dfrac{20}{21}$',
    opts: [
      '$\\dfrac{5}{9}$',
      '$\\dfrac{20}{21}$',
      '$\\dfrac{5}{42}$',
      '$\\dfrac{665}{729}$'
    ],
    h: 'Use the complement: $P(\\text{at least one red}) = 1 - P(\\text{no red})$.',
    s: '$P(\\text{no red}) = \\frac{4}{9} \\times \\frac{3}{8} \\times \\frac{2}{7} = \\frac{24}{504} = \\frac{1}{21}$. So $P(\\text{at least one red}) = 1 - \\frac{1}{21} = \\frac{20}{21}$.',
    solutionSteps: [
      { explanation: 'Use the complement rule.', workingOut: 'P(\\geq 1 \\text{ red}) = 1 - P(0 \\text{ red})' },
      { explanation: 'Calculate the probability of selecting no red marbles (all blue).', workingOut: 'P(0 \\text{ red}) = \\frac{4}{9} \\times \\frac{3}{8} \\times \\frac{2}{7} = \\frac{24}{504} = \\frac{1}{21}' },
      { explanation: 'Apply the complement.', workingOut: 'P(\\geq 1 \\text{ red}) = 1 - \\frac{1}{21} = \\frac{20}{21}' }
    ]
  },

  {
    id: 'bbhs2020-mc10',
    topicId: 'y12a-4G',
    c: '4G',
    t: 'Areas of compound regions',
    source: 'Blacktown Boys 2020 Trial Q10',
    type: 'multiple_choice',
    difficulty: 'hard',
    q: 'The graphs of $y = f(x)$ and $y = g(x)$ are shown. $f(x)$ is a curve that goes from $x = a$ to $x = d$; $g(x)$ goes from $x = a$ to $x = c$. They intersect at $x = b$ and $x = c$. The shaded region is between the curves from $x = b$ to $x = c$, and between $f(x)$ and the $x$-axis from $x = c$ to $x = d$, with $g(x) = 0$ for $x > c$. The area of the shaded region could be represented by',
    a: '$\\displaystyle\\int_0^d f(x)\\,dx - \\int_a^c g(x)\\,dx$',
    opts: [
      '$\\displaystyle\\int_a^d (f(x) - g(x))\\,dx$',
      '$\\displaystyle\\int_0^d (f(x) - g(x))\\,dx$',
      '$\\displaystyle\\int_0^b (f(x) - g(x))\\,dx + \\int_b^c (f(x) - g(x))\\,dx$',
      '$\\displaystyle\\int_0^d f(x)\\,dx - \\int_a^c g(x)\\,dx$'
    ],
    h: 'Consider the total area under $f(x)$ from 0 to $d$, then subtract the area under $g(x)$ from $a$ to $c$ (which overlaps with the non-shaded region).',
    s: 'The shaded region equals the area under $f(x)$ from 0 to $d$ minus the area under $g(x)$ from $a$ to $c$: $\\int_0^d f(x)\\,dx - \\int_a^c g(x)\\,dx$.',
    solutionSteps: [
      { explanation: 'The shaded area = (area under $f$ from 0 to $d$) − (area under $g$ from $a$ to $c$).', workingOut: '\\int_0^d f(x)\\,dx - \\int_a^c g(x)\\,dx' }
    ]
  },

  // ─── SECTION II ───────────────────────────────────────────────────────────

  {
    id: 'bbhs2020-11a',
    topicId: 'y11a-6I',
    c: '6I',
    t: 'The cosine rule',
    source: 'Blacktown Boys 2020 Trial Q11a',
    type: 'short_answer',
    difficulty: 'medium',
    marks: 1,
    q: 'In a triangle, the sides are 8, 10 and 7. Show that $\\cos A = \\dfrac{23}{32}$, where $A$ is the angle opposite the side of length 7.',
    a: '$\\cos A = \\dfrac{8^2 + 10^2 - 7^2}{2 \\times 8 \\times 10} = \\dfrac{64 + 100 - 49}{160} = \\dfrac{115}{160} = \\dfrac{23}{32}$',
    h: 'Use the cosine rule: $c^2 = a^2 + b^2 - 2ab\\cos C$.',
    s: 'By the cosine rule with $a = 8$, $b = 10$, $c = 7$:\n$\\cos A = \\frac{8^2 + 10^2 - 7^2}{2 \\times 8 \\times 10} = \\frac{64 + 100 - 49}{160} = \\frac{115}{160} = \\frac{23}{32}$',
    solutionSteps: [
      { explanation: 'Apply the cosine rule: $\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}$, where $a = 7$, $b = 8$, $c = 10$.', workingOut: '\\cos A = \\frac{8^2 + 10^2 - 7^2}{2 \\times 8 \\times 10}' },
      { explanation: 'Evaluate the numerator and denominator.', workingOut: '\\cos A = \\frac{64 + 100 - 49}{160} = \\frac{115}{160}' },
      { explanation: 'Simplify the fraction.', workingOut: '\\cos A = \\frac{23}{32}' }
    ]
  },

  {
    id: 'bbhs2020-11b',
    topicId: 'y11a-6H',
    c: '6H',
    t: 'The sine rule and the area formula',
    source: 'Blacktown Boys 2020 Trial Q11b',
    type: 'short_answer',
    difficulty: 'hard',
    marks: 2,
    q: 'Using the result from part (a) that $\\cos A = \\dfrac{23}{32}$ in a triangle with two sides 8 and 10, find the exact area of the triangle.',
    a: '$\\dfrac{15\\sqrt{55}}{4}$ units²',
    h: 'Find $\\sin A$ using $\\sin^2 A + \\cos^2 A = 1$, then use Area $= \\frac{1}{2}ab\\sin C$.',
    s: '$\\sin A = \\sqrt{1 - \\left(\\frac{23}{32}\\right)^2} = \\frac{\\sqrt{32^2 - 23^2}}{32} = \\frac{\\sqrt{495}}{32} = \\frac{3\\sqrt{55}}{32}$. Area $= \\frac{1}{2} \\times 8 \\times 10 \\times \\frac{3\\sqrt{55}}{32} = \\frac{15\\sqrt{55}}{4}$.',
    solutionSteps: [
      { explanation: 'Find $\\sin A$ using the Pythagorean identity.', workingOut: '\\sin A = \\sqrt{1 - \\left(\\frac{23}{32}\\right)^2} = \\frac{\\sqrt{1024 - 529}}{32} = \\frac{\\sqrt{495}}{32} = \\frac{3\\sqrt{55}}{32}' },
      { explanation: 'Apply the area formula.', workingOut: '\\text{Area} = \\tfrac{1}{2} \\times 8 \\times 10 \\times \\frac{3\\sqrt{55}}{32} = \\frac{240\\sqrt{55}}{64} = \\frac{15\\sqrt{55}}{4}' }
    ]
  },

  {
    id: 'bbhs2020-12a',
    topicId: 'y12a-1F',
    c: '1F',
    t: 'Summing an arithmetic series',
    source: 'Blacktown Boys 2020 Trial Q12a',
    type: 'short_answer',
    difficulty: 'easy',
    marks: 1,
    q: 'In an arithmetic series, the first term is 18 and the sum of the first 20 terms is 1310. Show that the 20th term is 113.',
    a: '$S_{20} = \\frac{20}{2}(18 + l) = 1310 \\Rightarrow 18 + l = 131 \\Rightarrow l = 113$',
    h: 'Use $S_n = \\frac{n}{2}(a + l)$ where $l$ is the last term.',
    s: '$S_{20} = \\frac{20}{2}(18 + l) = 1310 \\Rightarrow 10(18 + l) = 1310 \\Rightarrow 18 + l = 131 \\Rightarrow l = 113$.',
    solutionSteps: [
      { explanation: 'Use the sum formula $S_n = \\frac{n}{2}(a + l)$.', workingOut: 'S_{20} = \\frac{20}{2}(18 + l) = 1310' },
      { explanation: 'Solve for the last term $l$.', workingOut: '10(18 + l) = 1310 \\Rightarrow 18 + l = 131 \\Rightarrow l = 113' }
    ]
  },

  {
    id: 'bbhs2020-12b',
    topicId: 'y12a-1F',
    c: '1F',
    t: 'Summing an arithmetic series',
    source: 'Blacktown Boys 2020 Trial Q12b',
    type: 'short_answer',
    difficulty: 'easy',
    marks: 1,
    q: 'In an arithmetic series, the first term is 18 and the 20th term is 113. Find the common difference.',
    a: '$d = 5$',
    h: 'Use $T_n = a + (n-1)d$.',
    s: '$T_{20} = 18 + 19d = 113 \\Rightarrow 19d = 95 \\Rightarrow d = 5$.',
    solutionSteps: [
      { explanation: 'Apply the general term formula.', workingOut: 'T_{20} = a + (20-1)d \\Rightarrow 113 = 18 + 19d' },
      { explanation: 'Solve for $d$.', workingOut: '19d = 95 \\Rightarrow d = 5' }
    ]
  },

  {
    id: 'bbhs2020-12c',
    topicId: 'y12a-1F',
    c: '1F',
    t: 'Summing an arithmetic series',
    source: 'Blacktown Boys 2020 Trial Q12c',
    type: 'short_answer',
    difficulty: 'easy',
    marks: 1,
    q: 'In an arithmetic series with first term 18 and common difference 5, find the sum of the first 35 terms.',
    a: '$S_{35} = 3605$',
    h: 'Use $S_n = \\frac{n}{2}(2a + (n-1)d)$.',
    s: '$S_{35} = \\frac{35}{2}(2 \\times 18 + 34 \\times 5) = \\frac{35}{2}(36 + 170) = \\frac{35}{2} \\times 206 = 3605$.',
    solutionSteps: [
      { explanation: 'Apply the sum formula.', workingOut: 'S_{35} = \\frac{35}{2}(2 \\times 18 + (35-1) \\times 5)' },
      { explanation: 'Evaluate.', workingOut: 'S_{35} = \\frac{35}{2}(36 + 170) = \\frac{35 \\times 206}{2} = 3605' }
    ]
  },

  {
    id: 'bbhs2020-13a',
    topicId: 'y11a-4E',
    c: '4E',
    t: 'The absolute value function',
    source: 'Blacktown Boys 2020 Trial Q13a',
    type: 'short_answer',
    difficulty: 'medium',
    marks: 2,
    q: 'Given the graph of $f(x) = |ax + b|$, the graph has its vertex at $(2.5, 0)$ and $y$-intercept at $(0, 5)$. What are the values of $a$ and $b$?',
    a: '$a = 2,\\ b = -5$',
    h: 'The vertex is at the $x$-intercept where $ax + b = 0$. Use the $y$-intercept to find $|b|$, then check which sign for $b$ is consistent.',
    s: '$x$-intercept at 2.5: $2.5a + b = 0$. $y$-intercept: $|b| = 5$, so $b = \\pm5$. Testing $b = -5$: $a = 5/2.5 = 2$. Check point $(2, 1)$: $|2 \\times 2 - 5| = |{-1}| = 1$ ✓. So $a = 2$, $b = -5$.',
    solutionSteps: [
      { explanation: 'At the $x$-intercept $x = 2.5$: $2.5a + b = 0$.', workingOut: '2.5a = -b' },
      { explanation: 'At the $y$-intercept: $f(0) = |b| = 5$, so $b = \\pm5$.', workingOut: 'b = \\pm5' },
      { explanation: 'Test $b = -5$: $a = 5/2.5 = 2$. Verify with another point: $|2(2) - 5| = 1$ ✓.', workingOut: 'a = 2,\\ b = -5' }
    ]
  },

  {
    id: 'bbhs2020-13b',
    topicId: 'y11a-4E',
    c: '4E',
    t: 'The absolute value function',
    source: 'Blacktown Boys 2020 Trial Q13b',
    type: 'short_answer',
    difficulty: 'medium',
    marks: 1,
    q: 'Given $f(x) = |2x - 5|$, solve $f(x) \\geq 3$.',
    a: '$x \\leq 1$ or $x \\geq 4$',
    h: 'Solve $|2x - 5| \\geq 3$ by considering two cases: $2x - 5 \\geq 3$ or $2x - 5 \\leq -3$.',
    s: 'Case 1: $2x - 5 \\geq 3 \\Rightarrow x \\geq 4$. Case 2: $2x - 5 \\leq -3 \\Rightarrow x \\leq 1$. Answer: $x \\leq 1$ or $x \\geq 4$.',
    solutionSteps: [
      { explanation: 'Split into two inequalities.', workingOut: '2x - 5 \\geq 3 \\quad \\text{or} \\quad 2x - 5 \\leq -3' },
      { explanation: 'Solve each.', workingOut: 'x \\geq 4 \\quad \\text{or} \\quad x \\leq 1' }
    ]
  },

  {
    id: 'bbhs2020-14a',
    topicId: 'y11a-9G',
    c: '9G',
    t: 'The chain rule',
    source: 'Blacktown Boys 2020 Trial Q14a',
    type: 'short_answer',
    difficulty: 'medium',
    marks: 2,
    q: 'Differentiate $y = \\tan^3\\!\\left(\\dfrac{x}{4}\\right)$.',
    a: '$\\dfrac{dy}{dx} = \\dfrac{3}{4}\\sec^2\\!\\left(\\dfrac{x}{4}\\right)\\tan^2\\!\\left(\\dfrac{x}{4}\\right)$',
    h: 'Apply the chain rule twice: differentiate the outer power, then $\\tan$, then the inner function.',
    s: 'Let $u = \\tan(x/4)$, so $y = u^3$. $\\frac{dy}{du} = 3u^2$. $\\frac{du}{dx} = \\frac{1}{4}\\sec^2(x/4)$. So $\\frac{dy}{dx} = 3\\tan^2(x/4) \\cdot \\frac{1}{4}\\sec^2(x/4) = \\frac{3}{4}\\sec^2(x/4)\\tan^2(x/4)$.',
    solutionSteps: [
      { explanation: 'Differentiate the outer cube: bring down the power, reduce by 1.', workingOut: '\\frac{d}{dx}[u^3] = 3u^2 \\frac{du}{dx}' },
      { explanation: 'Differentiate $\\tan(x/4)$ using the chain rule.', workingOut: '\\frac{d}{dx}\\!\\left[\\tan\\!\\left(\\frac{x}{4}\\right)\\right] = \\frac{1}{4}\\sec^2\\!\\left(\\frac{x}{4}\\right)' },
      { explanation: 'Combine.', workingOut: '\\frac{dy}{dx} = \\frac{3}{4}\\sec^2\\!\\left(\\frac{x}{4}\\right)\\tan^2\\!\\left(\\frac{x}{4}\\right)' }
    ]
  },

  {
    id: 'bbhs2020-14b',
    topicId: 'y11a-9I',
    c: '9I',
    t: 'The quotient rule',
    source: 'Blacktown Boys 2020 Trial Q14b',
    type: 'short_answer',
    difficulty: 'medium',
    marks: 2,
    q: 'Differentiate $y = \\dfrac{e^{3x} - 5}{x + 1}$.',
    a: '$\\dfrac{dy}{dx} = \\dfrac{3xe^{3x} + 2e^{3x} + 5}{(x+1)^2}$',
    h: 'Use the quotient rule: $\\frac{d}{dx}\\left(\\frac{u}{v}\\right) = \\frac{v u\' - u v\'}{v^2}$.',
    s: '$u = e^{3x} - 5$, $u\' = 3e^{3x}$; $v = x + 1$, $v\' = 1$. $\\frac{dy}{dx} = \\frac{(x+1)(3e^{3x}) - (e^{3x}-5)(1)}{(x+1)^2} = \\frac{3xe^{3x} + 3e^{3x} - e^{3x} + 5}{(x+1)^2} = \\frac{3xe^{3x} + 2e^{3x} + 5}{(x+1)^2}$.',
    solutionSteps: [
      { explanation: 'Identify $u$ and $v$.', workingOut: 'u = e^{3x} - 5,\\ u\' = 3e^{3x};\\quad v = x+1,\\ v\' = 1' },
      { explanation: 'Apply the quotient rule.', workingOut: '\\frac{dy}{dx} = \\frac{(x+1)(3e^{3x}) - (e^{3x}-5)}{(x+1)^2}' },
      { explanation: 'Expand and simplify the numerator.', workingOut: '\\frac{3xe^{3x} + 3e^{3x} - e^{3x} + 5}{(x+1)^2} = \\frac{3xe^{3x} + 2e^{3x} + 5}{(x+1)^2}' }
    ]
  },

  {
    id: 'bbhs2020-15',
    topicId: 'y12a-1H',
    c: '1H',
    t: 'The limiting sum of a geometric series',
    source: 'Blacktown Boys 2020 Trial Q15',
    type: 'short_answer',
    difficulty: 'medium',
    marks: 2,
    q: 'What is the limiting sum of the geometric series $750, -300, 120, -48, \\ldots$?',
    a: '$S_\\infty = \\dfrac{3750}{7}$',
    h: 'Find the common ratio $r = T_2/T_1$. Then $S_\\infty = \\frac{a}{1-r}$ (valid when $|r| < 1$).',
    s: '$a = 750$, $r = \\frac{-300}{750} = -\\frac{2}{5}$. Since $|r| < 1$: $S_\\infty = \\frac{750}{1-(-2/5)} = \\frac{750}{7/5} = \\frac{3750}{7}$.',
    solutionSteps: [
      { explanation: 'Find the common ratio.', workingOut: 'r = \\frac{-300}{750} = -\\frac{2}{5}' },
      { explanation: 'Since $|r| = \\frac{2}{5} < 1$, the limiting sum exists.', workingOut: 'S_\\infty = \\frac{a}{1 - r} = \\frac{750}{1 + \\frac{2}{5}} = \\frac{750}{\\frac{7}{5}} = \\frac{3750}{7}' }
    ]
  },

  {
    id: 'bbhs2020-16',
    topicId: 'y12a-1C',
    c: '1C',
    t: 'Geometric sequences',
    source: 'Blacktown Boys 2020 Trial Q16',
    type: 'short_answer',
    difficulty: 'medium',
    marks: 2,
    q: 'The first four terms of a geometric sequence are $48, m, n$ and $750$. Find the values of $m$ and $n$.',
    a: '$m = 120,\\ n = 300$',
    h: 'Use $ar^3 = 750$ with $a = 48$ to find $r$, then find $m$ and $n$.',
    s: '$48r^3 = 750 \\Rightarrow r^3 = \\frac{125}{8} \\Rightarrow r = \\frac{5}{2}$. $m = 48 \\times \\frac{5}{2} = 120$. $n = 48 \\times \\left(\\frac{5}{2}\\right)^2 = 300$.',
    solutionSteps: [
      { explanation: 'The 4th term is $ar^3 = 750$.', workingOut: '48r^3 = 750 \\Rightarrow r^3 = \\frac{125}{8} \\Rightarrow r = \\frac{5}{2}' },
      { explanation: 'Find $m = ar = 48 \\times \\frac{5}{2}$.', workingOut: 'm = 120' },
      { explanation: 'Find $n = ar^2 = 48 \\times \\frac{25}{4}$.', workingOut: 'n = 300' }
    ]
  },

  {
    id: 'bbhs2020-17a',
    topicId: 'y12a-4I',
    c: '4I',
    t: 'The reverse chain rule',
    source: 'Blacktown Boys 2020 Trial Q17a',
    type: 'short_answer',
    difficulty: 'medium',
    marks: 2,
    q: 'Find the primitive function: $\\displaystyle\\int (5x + 3)^{19}\\,dx$.',
    a: '$\\dfrac{(5x+3)^{20}}{100} + C$',
    h: 'Use the reverse chain rule: $\\int (ax+b)^n dx = \\frac{(ax+b)^{n+1}}{a(n+1)} + C$.',
    s: '$\\int (5x+3)^{19}\\,dx = \\frac{(5x+3)^{20}}{20 \\times 5} + C = \\frac{(5x+3)^{20}}{100} + C$.',
    solutionSteps: [
      { explanation: 'Increase the power by 1 and divide by the new power times the coefficient of $x$.', workingOut: '\\frac{(5x+3)^{20}}{20 \\times 5} + C = \\frac{(5x+3)^{20}}{100} + C' }
    ]
  },

  {
    id: 'bbhs2020-17b',
    topicId: 'y12a-5I',
    c: '5I',
    t: 'Integration of the reciprocal function',
    source: 'Blacktown Boys 2020 Trial Q17b',
    type: 'short_answer',
    difficulty: 'medium',
    marks: 2,
    q: 'Find the primitive function: $\\displaystyle\\int \\left(2x^3 + \\dfrac{1}{3x+1}\\right)dx$.',
    a: '$\\dfrac{x^4}{2} + \\dfrac{1}{3}\\ln|3x+1| + C$',
    h: 'Integrate term by term. For $\\frac{1}{3x+1}$, use $\\int \\frac{1}{ax+b}\\,dx = \\frac{1}{a}\\ln|ax+b| + C$.',
    s: '$\\int 2x^3\\,dx + \\int \\frac{1}{3x+1}\\,dx = \\frac{2x^4}{4} + \\frac{1}{3}\\ln|3x+1| + C = \\frac{x^4}{2} + \\frac{1}{3}\\ln|3x+1| + C$.',
    solutionSteps: [
      { explanation: 'Integrate $2x^3$.', workingOut: '\\frac{2x^4}{4} = \\frac{x^4}{2}' },
      { explanation: 'Integrate $\\frac{1}{3x+1}$ using the log rule.', workingOut: '\\frac{1}{3}\\ln|3x+1|' },
      { explanation: 'Combine.', workingOut: '\\frac{x^4}{2} + \\frac{1}{3}\\ln|3x+1| + C' }
    ]
  },

  {
    id: 'bbhs2020-17c',
    topicId: 'y12a-6D',
    c: '6D',
    t: 'Integrating the trigonometric functions',
    source: 'Blacktown Boys 2020 Trial Q17c',
    type: 'short_answer',
    difficulty: 'medium',
    marks: 2,
    q: 'Find the primitive function: $\\displaystyle\\int \\left(\\sin 10x - \\dfrac{2}{e^{5x}}\\right)dx$.',
    a: '$-\\dfrac{1}{10}\\cos 10x + \\dfrac{2}{5e^{5x}} + C$',
    h: '$\\int \\sin(ax)\\,dx = -\\frac{1}{a}\\cos(ax) + C$. Write $\\frac{2}{e^{5x}} = 2e^{-5x}$ then integrate.',
    s: '$\\int \\sin 10x\\,dx = -\\frac{1}{10}\\cos 10x$. $\\int 2e^{-5x}\\,dx = \\frac{2}{-5}e^{-5x} = -\\frac{2}{5e^{5x}}$. Combined: $-\\frac{1}{10}\\cos 10x + \\frac{2}{5e^{5x}} + C$.',
    solutionSteps: [
      { explanation: 'Integrate $\\sin 10x$.', workingOut: '-\\frac{1}{10}\\cos 10x' },
      { explanation: 'Rewrite $\\frac{2}{e^{5x}} = 2e^{-5x}$ and integrate.', workingOut: '\\int 2e^{-5x}\\,dx = \\frac{2}{-5}e^{-5x} = -\\frac{2}{5e^{5x}}' },
      { explanation: 'Subtract and add constant.', workingOut: '-\\frac{1}{10}\\cos 10x + \\frac{2}{5e^{5x}} + C' }
    ]
  },

  {
    id: 'bbhs2020-18a',
    topicId: 'y12a-6B',
    c: '6B',
    t: 'Differentiating the trigonometric functions',
    source: 'Blacktown Boys 2020 Trial Q18a',
    type: 'short_answer',
    difficulty: 'medium',
    marks: 2,
    q: 'Show that $\\dfrac{d}{dx}(e^{2x}\\cos x) = e^{2x}(2\\cos x - \\sin x)$.',
    a: 'By the product rule: $\\frac{d}{dx}(e^{2x}\\cos x) = 2e^{2x}\\cos x - e^{2x}\\sin x = e^{2x}(2\\cos x - \\sin x)$.',
    h: 'Apply the product rule with $u = e^{2x}$ and $v = \\cos x$.',
    s: '$\\frac{d}{dx}(e^{2x}\\cos x) = e^{2x} \\cdot (-\\sin x) + 2e^{2x}\\cdot \\cos x = e^{2x}(-\\sin x + 2\\cos x) = e^{2x}(2\\cos x - \\sin x)$.',
    solutionSteps: [
      { explanation: 'Product rule: $\\frac{d}{dx}(uv) = u\'v + uv\'$.', workingOut: 'u = e^{2x},\\ u\' = 2e^{2x};\\quad v = \\cos x,\\ v\' = -\\sin x' },
      { explanation: 'Apply.', workingOut: '\\frac{d}{dx}(e^{2x}\\cos x) = 2e^{2x}\\cos x + e^{2x}(-\\sin x)' },
      { explanation: 'Factor out $e^{2x}$.', workingOut: '= e^{2x}(2\\cos x - \\sin x)' }
    ]
  },

  {
    id: 'bbhs2020-18b',
    topicId: 'y11a-9D',
    c: '9D',
    t: 'dy/dx notation — tangents and normals',
    source: 'Blacktown Boys 2020 Trial Q18b',
    type: 'short_answer',
    difficulty: 'medium',
    marks: 2,
    q: 'Hence find the equation of the tangent to the curve $y = e^{2x}\\cos x$ at the point where $x = 0$.',
    a: '$y = 2x + 1$, or equivalently $2x - y + 1 = 0$',
    h: 'Substitute $x = 0$ into the derivative (found in part a) to get the gradient, and into $y$ to get the $y$-coordinate.',
    s: 'At $x = 0$: gradient $= e^0(2\\cos 0 - \\sin 0) = 1 \\times 2 = 2$. Point: $y = e^0 \\cos 0 = 1$. Tangent: $y - 1 = 2(x - 0)$, i.e. $y = 2x + 1$.',
    solutionSteps: [
      { explanation: 'Find the gradient at $x = 0$ using the result from part (a).', workingOut: 'm = e^{0}(2\\cos 0 - \\sin 0) = 2' },
      { explanation: 'Find the $y$-coordinate at $x = 0$.', workingOut: 'y = e^{0}\\cos 0 = 1' },
      { explanation: 'Write the tangent equation.', workingOut: 'y - 1 = 2(x - 0) \\Rightarrow y = 2x + 1' }
    ]
  },

  {
    id: 'bbhs2020-19a',
    topicId: 'y12a-8D',
    c: '8D',
    t: 'Investing money by regular instalments',
    source: 'Blacktown Boys 2020 Trial Q19a',
    type: 'short_answer',
    difficulty: 'medium',
    marks: 2,
    q: 'Jesse plans to invest $7500 per year for 8 years in an annuity. His investment will earn interest at the rate of 6% per annum. Using the PVA table (factor for $N=8$, $r=6\\%$ is 6.2098), calculate the present value of his annuity.',
    a: '$46\\,573.50',
    h: 'Present Value = Payment × PVA factor.',
    s: '$\\text{PVA} = 7500 \\times 6.2098 = \\$46{,}573.50$.',
    solutionSteps: [
      { explanation: 'Read the PVA factor for $N = 8$, $r = 6\\%$.', workingOut: '\\text{PVA factor} = 6.2098' },
      { explanation: 'Multiply by the annual payment.', workingOut: '\\text{PVA} = 7500 \\times 6.2098 = $46{,}573.50' }
    ]
  },

  {
    id: 'bbhs2020-19b',
    topicId: 'y12a-8E',
    c: '8E',
    t: 'Paying off a loan',
    source: 'Blacktown Boys 2020 Trial Q19b',
    type: 'short_answer',
    difficulty: 'medium',
    marks: 2,
    q: 'Shaon takes out a loan of $12\\,000$ to buy a car. This loan is to be repaid over 5 years at an interest rate of 8% per year. Using the PVA table (factor for $N=5$, $r=8\\%$ is 3.9927), find his yearly repayments.',
    a: '$3005.49',
    h: '$\\text{PVA} = M \\times \\text{PVA factor} \\Rightarrow M = \\frac{\\text{PVA}}{\\text{factor}}$.',
    s: '$3.9927M = 12000 \\Rightarrow M = \\frac{12000}{3.9927} \\approx \\$3005.49$.',
    solutionSteps: [
      { explanation: 'Set up the equation: loan = repayment × PVA factor.', workingOut: '3.9927 \\times M = 12000' },
      { explanation: 'Solve for $M$.', workingOut: 'M = \\frac{12000}{3.9927} \\approx \\$3005.49' }
    ]
  },

  {
    id: 'bbhs2020-20',
    topicId: 'y12a-3H',
    c: '3H',
    t: 'Primitive functions',
    source: 'Blacktown Boys 2020 Trial Q20',
    type: 'short_answer',
    difficulty: 'medium',
    marks: 2,
    q: 'The curve $y = f(x)$ passes through the point $(-1, 2)$ and $f\'(x) = 4x^3 - 3$. Find $f(x)$.',
    a: '$f(x) = x^4 - 3x - 2$',
    h: 'Integrate $f\'(x)$ to get $f(x) = x^4 - 3x + C$, then substitute the given point to find $C$.',
    s: '$f(x) = \\int (4x^3 - 3)\\,dx = x^4 - 3x + C$. At $(-1, 2)$: $2 = 1 + 3 + C \\Rightarrow C = -2$. So $f(x) = x^4 - 3x - 2$.',
    solutionSteps: [
      { explanation: 'Integrate $f\'(x)$.', workingOut: 'f(x) = x^4 - 3x + C' },
      { explanation: 'Substitute the point $(-1, 2)$.', workingOut: '2 = (-1)^4 - 3(-1) + C = 1 + 3 + C \\Rightarrow C = -2' },
      { explanation: 'Write the final answer.', workingOut: 'f(x) = x^4 - 3x - 2' }
    ]
  },

  {
    id: 'bbhs2020-21',
    topicId: 'y12a-4B',
    c: '4B',
    t: 'The fundamental theorem of calculus',
    source: 'Blacktown Boys 2020 Trial Q21',
    type: 'short_answer',
    difficulty: 'hard',
    marks: 3,
    q: 'Show that $\\displaystyle\\int_0^2 \\sqrt{4x+1}\\,dx = \\dfrac{13}{3}$.',
    a: '$\\left[\\frac{(4x+1)^{3/2}}{6}\\right]_0^2 = \\frac{27}{6} - \\frac{1}{6} = \\frac{26}{6} = \\frac{13}{3}$',
    h: 'Write $\\sqrt{4x+1} = (4x+1)^{1/2}$ and use the reverse chain rule to integrate.',
    s: '$\\int (4x+1)^{1/2}\\,dx = \\frac{(4x+1)^{3/2}}{\\frac{3}{2} \\times 4} = \\frac{(4x+1)^{3/2}}{6}$. Evaluating: $\\frac{9^{3/2}}{6} - \\frac{1^{3/2}}{6} = \\frac{27}{6} - \\frac{1}{6} = \\frac{26}{6} = \\frac{13}{3}$.',
    solutionSteps: [
      { explanation: 'Rewrite and integrate using the reverse chain rule.', workingOut: '\\int_0^2 (4x+1)^{1/2}\\,dx = \\left[\\frac{(4x+1)^{3/2}}{6}\\right]_0^2' },
      { explanation: 'Substitute limits.', workingOut: '= \\frac{(4 \\times 2 + 1)^{3/2}}{6} - \\frac{(4 \\times 0 + 1)^{3/2}}{6} = \\frac{9^{3/2}}{6} - \\frac{1}{6}' },
      { explanation: 'Evaluate $9^{3/2} = (\\sqrt{9})^3 = 27$.', workingOut: '= \\frac{27}{6} - \\frac{1}{6} = \\frac{26}{6} = \\frac{13}{3}' }
    ]
  },

  {
    id: 'bbhs2020-22',
    topicId: 'y11a-11B',
    c: '11B',
    t: 'Solving trigonometric equations',
    source: 'Blacktown Boys 2020 Trial Q22',
    type: 'short_answer',
    difficulty: 'hard',
    marks: 3,
    q: 'Solve $4\\cos^2 x - 3 = 0$ for $-\\pi \\leq x \\leq \\pi$.',
    a: '$x = -\\dfrac{5\\pi}{6},\\ -\\dfrac{\\pi}{6},\\ \\dfrac{\\pi}{6},\\ \\dfrac{5\\pi}{6}$',
    h: 'Rearrange to $\\cos^2 x = \\frac{3}{4}$, so $\\cos x = \\pm\\frac{\\sqrt{3}}{2}$. Find all solutions in the given domain.',
    s: '$\\cos^2 x = \\frac{3}{4} \\Rightarrow \\cos x = \\pm\\frac{\\sqrt{3}}{2}$. Reference angle: $\\frac{\\pi}{6}$. Solutions in $[-\\pi, \\pi]$: $x = \\pm\\frac{\\pi}{6}$ (from $+\\frac{\\sqrt{3}}{2}$) and $x = \\pm\\frac{5\\pi}{6}$ (from $-\\frac{\\sqrt{3}}{2}$).',
    solutionSteps: [
      { explanation: 'Rearrange.', workingOut: '\\cos^2 x = \\frac{3}{4} \\Rightarrow \\cos x = \\pm\\frac{\\sqrt{3}}{2}' },
      { explanation: 'From $\\cos x = +\\frac{\\sqrt{3}}{2}$: reference angle $\\frac{\\pi}{6}$, solutions in Q1 and Q4.', workingOut: 'x = \\frac{\\pi}{6},\\ -\\frac{\\pi}{6}' },
      { explanation: 'From $\\cos x = -\\frac{\\sqrt{3}}{2}$: solutions in Q2 and Q3.', workingOut: 'x = \\pi - \\frac{\\pi}{6} = \\frac{5\\pi}{6}, \\quad x = -(\\pi - \\frac{\\pi}{6}) = -\\frac{5\\pi}{6}' },
      { explanation: 'All solutions.', workingOut: 'x = -\\frac{5\\pi}{6},\\ -\\frac{\\pi}{6},\\ \\frac{\\pi}{6},\\ \\frac{5\\pi}{6}' }
    ]
  },

  {
    id: 'bbhs2020-23',
    topicId: 'y12a-10C',
    c: '10C',
    t: 'Mean and variance of a distribution',
    source: 'Blacktown Boys 2020 Trial Q23',
    type: 'short_answer',
    difficulty: 'hard',
    marks: 3,
    q: 'A discrete random variable $X$ has the probability distribution:\n\n| $X = x$ | 20 | 21 | 22 | 23 |\n|---|---|---|---|---|\n| $P(x)$ | 0.24 | 0.2 | $m$ | 0.4 |\n\nBy finding the value of $m$, calculate the expected value and the variance of $X$.',
    a: '$m = 0.16$; $E(X) = 21.72$; $\\text{Var}(X) = 1.4816$',
    h: 'All probabilities must sum to 1. Then $E(X) = \\sum x P(x)$ and $\\text{Var}(X) = E(X^2) - [E(X)]^2$.',
    s: '$m = 1 - 0.24 - 0.2 - 0.4 = 0.16$. $E(X) = 20(0.24) + 21(0.2) + 22(0.16) + 23(0.4) = 21.72$. $E(X^2) = 400(0.24) + 441(0.2) + 484(0.16) + 529(0.4) = 473.16$. $\\text{Var}(X) = 473.16 - 21.72^2 = 1.4816$.',
    solutionSteps: [
      { explanation: 'Find $m$: all probabilities sum to 1.', workingOut: '0.24 + 0.2 + m + 0.4 = 1 \\Rightarrow m = 0.16' },
      { explanation: 'Calculate $E(X)$.', workingOut: 'E(X) = 20(0.24) + 21(0.2) + 22(0.16) + 23(0.4) = 4.8 + 4.2 + 3.52 + 9.2 = 21.72' },
      { explanation: 'Calculate $E(X^2)$.', workingOut: 'E(X^2) = 400(0.24) + 441(0.2) + 484(0.16) + 529(0.4) = 96 + 88.2 + 77.44 + 211.6 = 473.24' },
      { explanation: 'Calculate variance.', workingOut: '\\text{Var}(X) = E(X^2) - [E(X)]^2 = 473.24 - 21.72^2 \\approx 1.4816' }
    ]
  },

  {
    id: 'bbhs2020-24a',
    topicId: 'y12a-4H',
    c: '4H',
    t: 'The trapezoidal rule',
    source: 'Blacktown Boys 2020 Trial Q24a',
    type: 'short_answer',
    difficulty: 'easy',
    marks: 1,
    q: 'Given $y = \\log_e(2^x - x)$, complete the table by finding the missing value of $y$ at $x = 2.5$ to 3 decimal places.\n\n| $x$ | 1 | 1.5 | 2 | 2.5 | 3 |\n|---|---|---|---|---|---|\n| $y$ | 0 | 0.284 | 0.693 | ? | 1.609 |',
    a: '$y = 1.150$',
    h: 'Substitute $x = 2.5$ into $y = \\ln(2^{2.5} - 2.5)$.',
    s: '$y = \\ln(2^{2.5} - 2.5) = \\ln(5.6569\\ldots - 2.5) = \\ln(3.1569\\ldots) \\approx 1.150$.',
    solutionSteps: [
      { explanation: 'Substitute $x = 2.5$.', workingOut: 'y = \\ln(2^{2.5} - 2.5) = \\ln(3.157\\ldots) \\approx 1.150' }
    ]
  },

  {
    id: 'bbhs2020-24b',
    topicId: 'y12a-4H',
    c: '4H',
    t: 'The trapezoidal rule',
    source: 'Blacktown Boys 2020 Trial Q24b',
    type: 'short_answer',
    difficulty: 'medium',
    marks: 2,
    q: 'Use the trapezoidal rule with all values from the table ($x = 1, 1.5, 2, 2.5, 3$) to find an approximation for $\\displaystyle\\int_1^3 \\log_e(2^x - x)\\,dx$.',
    a: '$\\approx 1.466$',
    h: '$T \\approx \\frac{h}{2}[y_0 + 2(y_1 + y_2 + y_3) + y_4]$ with $h = 0.5$.',
    s: '$h = 0.5$. $A \\approx \\frac{0.5}{2}[0 + 2(0.284 + 0.693 + 1.150) + 1.609] = 0.25[0 + 2(2.127) + 1.609] = 0.25 \\times 5.863 \\approx 1.466$.',
    solutionSteps: [
      { explanation: 'Apply the trapezoidal rule with $h = 0.5$ and 4 strips.', workingOut: 'A \\approx \\frac{h}{2}[y_0 + 2(y_1 + y_2 + y_3) + y_4]' },
      { explanation: 'Substitute the $y$-values.', workingOut: '\\frac{0.5}{2}[0 + 2(0.284 + 0.693 + 1.150) + 1.609]' },
      { explanation: 'Evaluate.', workingOut: '= 0.25[0 + 2(2.127) + 1.609] = 0.25 \\times 5.863 \\approx 1.466' }
    ]
  },

  {
    id: 'bbhs2020-25a',
    topicId: 'y12a-9D',
    c: '9D',
    t: 'Bivariate data',
    source: 'Blacktown Boys 2020 Trial Q25a',
    type: 'short_answer',
    difficulty: 'easy',
    marks: 1,
    q: 'A scatterplot of fertiliser amount ($x$ grams) vs tomato yield ($y$ kg) for 8 plants shows a clear upward linear trend with $R^2 = 0.9453$. Use the scatterplot to describe the association between yield and fertiliser in terms of strength and direction.',
    a: 'Strong, positive, linear association.',
    h: 'Consider the direction of the trend and how closely the points follow a line.',
    s: 'The points trend upward (positive direction) and cluster closely around the line of best fit ($R^2 \\approx 0.945$), indicating a strong positive linear association.',
    solutionSteps: [
      { explanation: 'Direction: as fertiliser increases, yield increases — positive.', workingOut: '\\text{Direction: positive}' },
      { explanation: 'Strength: $R^2 = 0.9453$ indicates $r \\approx 0.97$, a strong relationship.', workingOut: '\\text{Strength: strong}' }
    ]
  },

  {
    id: 'bbhs2020-25b',
    topicId: 'y12a-9E',
    c: '9E',
    t: 'Formulae for correlation and regression',
    source: 'Blacktown Boys 2020 Trial Q25b',
    type: 'short_answer',
    difficulty: 'medium',
    marks: 2,
    q: 'For the tomato fertiliser data, determine the equation of the least-squares regression line. Round values to 2 significant figures. (Data: $x$: 1.0, 1.0, 1.5, 2.0, 2.5, 2.8, 3.0, 3.5; $y$: 3.9, 4.0, 4.4, 5.8, 6.6, 6.8, 7.0, 7.1)',
    a: '$y \\approx 1.4x + 2.6$',
    h: 'Use a calculator in statistics mode to find the regression coefficients $A$ (intercept) and $B$ (gradient), rounded to 2 significant figures.',
    s: 'Using technology: $B \\approx 1.4371 \\approx 1.4$ (2 s.f.) and $A \\approx 2.5920 \\approx 2.6$ (2 s.f.). So the regression line is $y = 1.4x + 2.6$.',
    solutionSteps: [
      { explanation: 'Enter data in calculator statistics mode and find the regression line $y = A + Bx$.', workingOut: 'A \\approx 2.59,\\ B \\approx 1.44' },
      { explanation: 'Round to 2 significant figures.', workingOut: 'y \\approx 1.4x + 2.6' }
    ]
  },

  {
    id: 'bbhs2020-25c',
    topicId: 'y12a-9E',
    c: '9E',
    t: 'Formulae for correlation and regression',
    source: 'Blacktown Boys 2020 Trial Q25c',
    type: 'short_answer',
    difficulty: 'easy',
    marks: 1,
    q: 'A plant with 2.2 grams of fertiliser was not recorded by accident. Calculate the predicted yield for this plant using the regression line $y = 1.4x + 2.6$.',
    a: '$y \\approx 5.68$ kg',
    h: 'Substitute $x = 2.2$ into the regression equation.',
    s: '$y = 1.4 \\times 2.2 + 2.6 = 3.08 + 2.6 = 5.68$ kg.',
    solutionSteps: [
      { explanation: 'Substitute $x = 2.2$ into $y = 1.4x + 2.6$.', workingOut: 'y = 1.4(2.2) + 2.6 = 3.08 + 2.6 = 5.68 \\text{ kg}' }
    ]
  },

  {
    id: 'bbhs2020-25d',
    topicId: 'y12a-9D',
    c: '9D',
    t: 'Bivariate data',
    source: 'Blacktown Boys 2020 Trial Q25d',
    type: 'short_answer',
    difficulty: 'medium',
    marks: 1,
    q: 'Explain why you should not extrapolate from this data to find the yield for high rates of fertiliser usage.',
    a: 'The linear relationship may not hold beyond the observed range of the data. High doses of fertiliser could damage the plants, so the yield may plateau or decrease rather than continue to rise linearly.',
    h: 'Extrapolation assumes the trend continues beyond the data range, which may not be valid.',
    s: 'The regression model is only reliable within the range of the observed data (approximately 1 to 3.5 g). At high fertiliser rates, the relationship may no longer be linear — excessive fertiliser could harm plants, causing yield to plateau or decrease.',
    solutionSteps: [
      { explanation: 'The data only covers the range $1 \\leq x \\leq 3.5$ g. Extrapolating assumes the linear trend continues, which may be invalid.', workingOut: '\\text{Extrapolation is unreliable beyond the data range}' }
    ]
  },

  {
    id: 'bbhs2020-26a',
    topicId: 'y12a-3B',
    c: '3B',
    t: 'Stationary points and turning points',
    source: 'Blacktown Boys 2020 Trial Q26a',
    type: 'short_answer',
    difficulty: 'hard',
    marks: 3,
    q: 'Consider the curve $y = 3x - x^3 - 1$ for $-3 \\leq x \\leq 2$. Find the stationary points and determine their nature.',
    a: 'Maximum turning point at $(1, 1)$; minimum turning point at $(-1, -3)$.',
    h: 'Set $y\' = 0$ to find stationary points. Use $y\'\'$ to classify them.',
    s: '$y\' = 3 - 3x^2 = 0 \\Rightarrow x^2 = 1 \\Rightarrow x = \\pm1$. At $x=1$: $y = 3-1-1 = 1$, $y\'\' = -6 < 0$ → maximum $(1,1)$. At $x=-1$: $y = -3+1-1 = -3$, $y\'\' = 6 > 0$ → minimum $(-1,-3)$.',
    solutionSteps: [
      { explanation: 'Differentiate and set $y\' = 0$.', workingOut: "y' = 3 - 3x^2 = 0 \\Rightarrow x = \\pm 1" },
      { explanation: 'Find the $y$-coordinates.', workingOut: 'x=1: y = 3(1) - 1 - 1 = 1; \\quad x=-1: y = -3 + 1 - 1 = -3' },
      { explanation: 'Use the second derivative $y\'\' = -6x$ to classify.', workingOut: "x=1: y'' = -6 < 0 \\text{ (max)}; \\quad x=-1: y'' = 6 > 0 \\text{ (min)}" }
    ]
  },

  {
    id: 'bbhs2020-26b',
    topicId: 'y12a-3D',
    c: '3D',
    t: 'Concavity and points of inflection',
    source: 'Blacktown Boys 2020 Trial Q26b',
    type: 'short_answer',
    difficulty: 'medium',
    marks: 1,
    q: 'For the curve $y = 3x - x^3 - 1$, find the point of inflection.',
    a: '$(0, -1)$',
    h: 'Set $y\'\' = 0$ and verify a change in concavity.',
    s: '$y\'\' = -6x = 0 \\Rightarrow x = 0$. At $x=0$: $y = -1$. Check: $y\'\'$ changes sign at $x = 0$ (positive for $x < 0$, negative for $x > 0$). Point of inflection at $(0, -1)$.',
    solutionSteps: [
      { explanation: "Set $y'' = 0$.", workingOut: "-6x = 0 \\Rightarrow x = 0, \\quad y = -1" },
      { explanation: 'Verify the change in concavity.', workingOut: "x < 0: y'' > 0 \\text{ (concave up)}; \\quad x > 0: y'' < 0 \\text{ (concave down)}" },
      { explanation: 'Conclude.', workingOut: '\\text{Point of inflection at } (0, -1)' }
    ]
  },

  {
    id: 'bbhs2020-26d',
    topicId: 'y12a-3F',
    c: '3F',
    t: 'Global maximum and minimum',
    source: 'Blacktown Boys 2020 Trial Q26d',
    type: 'short_answer',
    difficulty: 'medium',
    marks: 1,
    q: 'What is the maximum value of $y = 3x - x^3 - 1$ for $-3 \\leq x \\leq 2$?',
    a: '$y = 17$',
    h: 'Evaluate $y$ at the stationary points and at the endpoints $x = -3$ and $x = 2$, then find the greatest value.',
    s: '$y(-3) = -9+27-1 = 17$; $y(-1) = -3$; $y(1) = 1$; $y(2) = 6-8-1 = -3$. Maximum value is $\\mathbf{17}$ at $x = -3$.',
    solutionSteps: [
      { explanation: 'Evaluate at endpoints and stationary points.', workingOut: 'y(-3) = 3(-3) - (-3)^3 - 1 = -9 + 27 - 1 = 17' },
      { explanation: 'Compare all values.', workingOut: 'y(-3) = 17,\\ y(-1) = -3,\\ y(1) = 1,\\ y(2) = -3' },
      { explanation: 'The maximum value is 17 at $x = -3$.', workingOut: '\\text{Maximum} = 17' }
    ]
  },

  {
    id: 'bbhs2020-27a',
    topicId: 'y12a-10F',
    c: '10F',
    t: 'Applications of the normal distribution',
    source: 'Blacktown Boys 2020 Trial Q27a',
    type: 'short_answer',
    difficulty: 'easy',
    marks: 1,
    q: 'Chocolate consumption per person per day is normally distributed with mean 68.95 g and standard deviation 18.45 g. Above what chocolate consumption rate does 2.5% of this population lie?',
    a: '$105.85$ grams',
    h: '2.5% in the upper tail corresponds to 2 standard deviations above the mean.',
    s: '$2.5\\%$ is 2 SDs above the mean: $68.95 + 2 \\times 18.45 = 68.95 + 36.9 = 105.85$ g.',
    solutionSteps: [
      { explanation: '$2.5\\%$ above corresponds to $z = 2$ (from the 95% rule).', workingOut: 'z = 2' },
      { explanation: 'Convert to the actual value.', workingOut: '\\mu + 2\\sigma = 68.95 + 2(18.45) = 105.85 \\text{ g}' }
    ]
  },

  {
    id: 'bbhs2020-27b',
    topicId: 'y12a-10F',
    c: '10F',
    t: 'Applications of the normal distribution',
    source: 'Blacktown Boys 2020 Trial Q27b',
    type: 'short_answer',
    difficulty: 'medium',
    marks: 2,
    q: 'With mean 68.95 g and SD 18.45 g, Rahul consumed 50.5 g of chocolate in one day. What percentage of this population has a chocolate consumption rate more than Rahul\'s?',
    a: '$84\\%$',
    h: 'Find the $z$-score for 50.5 g, then determine the percentage above that value.',
    s: '$z = \\frac{50.5 - 68.95}{18.45} = -1$. $P(X > 50.5) = P(Z > -1) = 50\\% + \\frac{68\\%}{2} = 50\\% + 34\\% = 84\\%$.',
    solutionSteps: [
      { explanation: 'Find the $z$-score.', workingOut: 'z = \\frac{50.5 - 68.95}{18.45} = -1' },
      { explanation: 'The proportion above $z = -1$ equals $50\\% + 34\\% = 84\\%$ (from the 68% rule).', workingOut: 'P(X > 50.5) = 84\\%' }
    ]
  },

  {
    id: 'bbhs2020-27c',
    topicId: 'y12a-10F',
    c: '10F',
    t: 'Applications of the normal distribution',
    source: 'Blacktown Boys 2020 Trial Q27c',
    type: 'short_answer',
    difficulty: 'hard',
    marks: 2,
    q: 'Ben takes a sample of people from this population (mean 68.95 g, SD 18.45 g) and finds that 6 of them consumed less than 13.6 g per day. If Ben\'s sample has the same distribution as this population, what is Ben\'s sample size?',
    a: '$4000$',
    h: 'Find the $z$-score for 13.6 g; this gives the proportion below that value. Then set up: proportion × sample size = 6.',
    s: '$z = \\frac{13.6 - 68.95}{18.45} = -3$. $P(X < 13.6) = 0.15\\%$. $0.0015 \\times n = 6 \\Rightarrow n = 4000$.',
    solutionSteps: [
      { explanation: 'Find the $z$-score for 13.6 g.', workingOut: 'z = \\frac{13.6 - 68.95}{18.45} = -3' },
      { explanation: '$z = -3$ corresponds to the bottom 0.15% (from 99.7% rule: $\\frac{1}{2}(100\\% - 99.7\\%) = 0.15\\%$).', workingOut: 'P(X < 13.6) = 0.15\\%' },
      { explanation: 'Set up equation: proportion × sample size = 6.', workingOut: '0.0015 \\times n = 6 \\Rightarrow n = 4000' }
    ]
  },

  {
    id: 'bbhs2020-28a',
    topicId: 'y12a-10B',
    c: '10B',
    t: 'Continuous distributions',
    source: 'Blacktown Boys 2020 Trial Q28a',
    type: 'short_answer',
    difficulty: 'hard',
    marks: 2,
    q: 'The time (minutes) a customer queues has PDF $f(x) = k(64 - x^2)$ for $0 \\leq x \\leq 8$, and 0 otherwise. Show that $k = \\dfrac{3}{1024}$.',
    a: '$\\int_0^8 k(64-x^2)\\,dx = k\\left[64x - \\frac{x^3}{3}\\right]_0^8 = k \\cdot \\frac{1024}{3} = 1 \\Rightarrow k = \\frac{3}{1024}$',
    h: 'For a valid PDF, $\\int_{-\\infty}^{\\infty} f(x)\\,dx = 1$.',
    s: '$\\int_0^8 k(64-x^2)\\,dx = k\\left[64x - \\frac{x^3}{3}\\right]_0^8 = k\\left(512 - \\frac{512}{3}\\right) = k \\cdot \\frac{1024}{3} = 1 \\Rightarrow k = \\frac{3}{1024}$.',
    solutionSteps: [
      { explanation: 'Set the integral of the PDF equal to 1.', workingOut: '\\int_0^8 k(64 - x^2)\\,dx = 1' },
      { explanation: 'Integrate.', workingOut: 'k\\left[64x - \\frac{x^3}{3}\\right]_0^8 = k\\left(512 - \\frac{512}{3}\\right) = k \\cdot \\frac{1024}{3}' },
      { explanation: 'Solve for $k$.', workingOut: 'k \\cdot \\frac{1024}{3} = 1 \\Rightarrow k = \\frac{3}{1024}' }
    ]
  },

  {
    id: 'bbhs2020-28b',
    topicId: 'y12a-10B',
    c: '10B',
    t: 'Continuous distributions',
    source: 'Blacktown Boys 2020 Trial Q28b',
    type: 'short_answer',
    difficulty: 'hard',
    marks: 2,
    q: 'For the PDF $f(x) = \\dfrac{3}{1024}(64 - x^2)$ for $0 \\leq x \\leq 8$, find the cumulative distribution function $F(x)$.',
    a: '$F(x) = \\begin{cases} 0 & x < 0 \\\\ \\dfrac{3x}{16} - \\dfrac{x^3}{1024} & 0 \\leq x \\leq 8 \\\\ 1 & x > 8 \\end{cases}$',
    h: '$F(x) = \\int_0^x f(t)\\,dt$ for $0 \\leq x \\leq 8$.',
    s: '$F(x) = \\int_0^x \\frac{3}{1024}(64-t^2)\\,dt = \\frac{3}{1024}\\left[64t - \\frac{t^3}{3}\\right]_0^x = \\frac{3}{1024}\\left(64x - \\frac{x^3}{3}\\right) = \\frac{3x}{16} - \\frac{x^3}{1024}$.',
    solutionSteps: [
      { explanation: 'Integrate the PDF from 0 to $x$.', workingOut: 'F(x) = \\frac{3}{1024}\\int_0^x (64 - t^2)\\,dt = \\frac{3}{1024}\\left[64t - \\frac{t^3}{3}\\right]_0^x' },
      { explanation: 'Simplify.', workingOut: 'F(x) = \\frac{3}{1024}\\left(64x - \\frac{x^3}{3}\\right) = \\frac{3x}{16} - \\frac{x^3}{1024}' }
    ]
  },

  {
    id: 'bbhs2020-28c',
    topicId: 'y12a-10B',
    c: '10B',
    t: 'Continuous distributions',
    source: 'Blacktown Boys 2020 Trial Q28c',
    type: 'short_answer',
    difficulty: 'medium',
    marks: 1,
    q: 'Using $F(x) = \\dfrac{3x}{16} - \\dfrac{x^3}{1024}$, find the probability that a customer will queue for longer than 5 minutes. Round to 4 significant figures.',
    a: '$0.1846$',
    h: '$P(X > 5) = 1 - F(5)$.',
    s: '$F(5) = \\frac{15}{16} - \\frac{125}{1024} = \\frac{960}{1024} - \\frac{125}{1024} = \\frac{835}{1024}$. $P(X > 5) = 1 - \\frac{835}{1024} = \\frac{189}{1024} \\approx 0.1846$.',
    solutionSteps: [
      { explanation: 'Evaluate $F(5)$.', workingOut: 'F(5) = \\frac{3(5)}{16} - \\frac{125}{1024} = \\frac{15}{16} - \\frac{125}{1024} = \\frac{960 - 125}{1024} = \\frac{835}{1024}' },
      { explanation: 'Find $P(X > 5) = 1 - F(5)$.', workingOut: 'P(X > 5) = 1 - \\frac{835}{1024} = \\frac{189}{1024} \\approx 0.1846' }
    ]
  },

  {
    id: 'bbhs2020-29a',
    topicId: 'y12a-4F',
    c: '4F',
    t: 'Finding areas by integration',
    source: 'Blacktown Boys 2020 Trial Q29a',
    type: 'short_answer',
    difficulty: 'medium',
    marks: 1,
    q: 'The graphs of $y = 5 - x$ and $y = \\dfrac{4}{2x-1}$ intersect at points $A$ and $B$. Show that the $x$-coordinates of $A$ and $B$ are 1 and 4.5 respectively.',
    a: 'Solving $5-x = \\frac{4}{2x-1}$ gives $(5-x)(2x-1) = 4 \\Rightarrow 2x^2 - 11x + 9 = 0 \\Rightarrow (2x-9)(x-1) = 0 \\Rightarrow x = 1$ or $x = 4.5$.',
    h: 'Set the two expressions equal and solve the resulting quadratic.',
    s: '$(5-x)(2x-1) = 4 \\Rightarrow 10x - 5 - 2x^2 + x = 4 \\Rightarrow -2x^2 + 11x - 9 = 0 \\Rightarrow 2x^2 - 11x + 9 = 0 \\Rightarrow (2x-9)(x-1) = 0$. So $x = 1$ or $x = 4.5$.',
    solutionSteps: [
      { explanation: 'Set the equations equal.', workingOut: '5 - x = \\frac{4}{2x - 1}' },
      { explanation: 'Multiply both sides by $(2x-1)$.', workingOut: '(5-x)(2x-1) = 4 \\Rightarrow -2x^2 + 11x - 9 = 0' },
      { explanation: 'Solve the quadratic.', workingOut: '2x^2 - 11x + 9 = 0 \\Rightarrow (2x-9)(x-1) = 0 \\Rightarrow x = 1 \\text{ or } x = 4.5' }
    ]
  },

  {
    id: 'bbhs2020-29b',
    topicId: 'y12a-4G',
    c: '4G',
    t: 'Areas of compound regions',
    source: 'Blacktown Boys 2020 Trial Q29b',
    type: 'short_answer',
    difficulty: 'hard',
    marks: 3,
    q: 'Find the exact area of the region bounded by $y = 5 - x$ and $y = \\dfrac{4}{2x-1}$ between $x = 1$ and $x = 4.5$.',
    a: '$\\dfrac{63}{8} - 2\\ln 8$ units²',
    h: 'Area $= \\int_1^{4.5}\\left[(5-x) - \\frac{4}{2x-1}\\right]dx$. Integrate each term separately.',
    s: '$\\int_1^{4.5}\\!\\left(5-x-\\frac{4}{2x-1}\\right)dx = \\left[5x - \\frac{x^2}{2} - 2\\ln|2x-1|\\right]_1^{4.5}$. $= \\left(22.5 - \\frac{20.25}{2} - 2\\ln 8\\right) - \\left(5 - \\frac{1}{2} - 2\\ln 1\\right) = \\frac{99}{8} - 2\\ln 8 - \\frac{9}{2} = \\frac{63}{8} - 2\\ln 8$.',
    solutionSteps: [
      { explanation: 'Set up the integral (top curve minus bottom curve).', workingOut: 'A = \\int_1^{4.5}\\!\\left[(5-x) - \\frac{4}{2x-1}\\right]dx' },
      { explanation: 'Find the primitive function.', workingOut: '\\left[5x - \\frac{x^2}{2} - 2\\ln|2x-1|\\right]_1^{4.5}' },
      { explanation: 'Substitute limits.', workingOut: '\\left(\\frac{99}{8} - 2\\ln 8\\right) - \\left(\\frac{9}{2} - 0\\right) = \\frac{63}{8} - 2\\ln 8' }
    ]
  },

  {
    id: 'bbhs2020-30a',
    topicId: 'y12a-8A',
    c: '8A',
    t: 'Applications of APs and GPs',
    source: 'Blacktown Boys 2020 Trial Q30a',
    type: 'short_answer',
    difficulty: 'easy',
    marks: 1,
    q: 'A gardener plants roses in rows: the first row has 24, the second row has 29, and each succeeding row has 5 more than the previous row. Calculate the number of rose plants in the 8th row.',
    a: '$59$',
    h: 'This is an AP with $a = 24$, $d = 5$. Use $T_n = a + (n-1)d$.',
    s: '$T_8 = 24 + 7 \\times 5 = 24 + 35 = 59$.',
    solutionSteps: [
      { explanation: 'Apply the general term formula with $a = 24$, $d = 5$, $n = 8$.', workingOut: 'T_8 = 24 + (8-1) \\times 5 = 24 + 35 = 59' }
    ]
  },

  {
    id: 'bbhs2020-30b',
    topicId: 'y12a-8A',
    c: '8A',
    t: 'Applications of APs and GPs',
    source: 'Blacktown Boys 2020 Trial Q30b',
    type: 'short_answer',
    difficulty: 'medium',
    marks: 2,
    q: 'For the rose garden (first row 24, common difference 5), which row would be the first to contain more than 150 rose plants?',
    a: 'The 27th row.',
    h: 'Solve $24 + (n-1) \\times 5 > 150$ for the smallest integer $n$.',
    s: '$24 + 5(n-1) > 150 \\Rightarrow 5n > 131 \\Rightarrow n > 26.2$. First integer: $n = 27$.',
    solutionSteps: [
      { explanation: 'Set up the inequality.', workingOut: '24 + (n-1) \\times 5 > 150' },
      { explanation: 'Solve.', workingOut: '5n - 5 > 126 \\Rightarrow 5n > 131 \\Rightarrow n > 26.2' },
      { explanation: 'First integer value.', workingOut: 'n = 27' }
    ]
  },

  {
    id: 'bbhs2020-30c',
    topicId: 'y12a-8A',
    c: '8A',
    t: 'Applications of APs and GPs',
    source: 'Blacktown Boys 2020 Trial Q30c',
    type: 'short_answer',
    difficulty: 'hard',
    marks: 2,
    q: 'The gardener planted 2895 rose plants altogether (same AP: first row 24, $d = 5$). How many rows were planted?',
    a: '$30$ rows',
    h: 'Use $S_n = \\frac{n}{2}(2a + (n-1)d) = 2895$ and solve the resulting quadratic.',
    s: '$\\frac{n}{2}(48 + 5(n-1)) = 2895 \\Rightarrow n(43 + 5n) = 5790 \\Rightarrow 5n^2 + 43n - 5790 = 0 \\Rightarrow (n-30)(5n+193) = 0 \\Rightarrow n = 30$.',
    solutionSteps: [
      { explanation: 'Set up the sum equation.', workingOut: 'S_n = \\frac{n}{2}(2 \\times 24 + (n-1) \\times 5) = 2895' },
      { explanation: 'Simplify.', workingOut: '5n^2 + 43n - 5790 = 0' },
      { explanation: 'Factorise and solve.', workingOut: '(n - 30)(5n + 193) = 0 \\Rightarrow n = 30' }
    ]
  },

  {
    id: 'bbhs2020-31a',
    topicId: 'y12a-7B',
    c: '7B',
    t: 'Velocity and acceleration as derivatives',
    source: 'Blacktown Boys 2020 Trial Q31a',
    type: 'short_answer',
    difficulty: 'easy',
    marks: 1,
    q: 'A particle moves in a straight line with velocity $v = 2 - 4\\cos 2t$ m/s for $0 \\leq t \\leq 2\\pi$. Find the initial velocity.',
    a: '$v = -2$ m/s',
    h: 'Substitute $t = 0$.',
    s: '$v(0) = 2 - 4\\cos(0) = 2 - 4 = -2$ m/s.',
    solutionSteps: [
      { explanation: 'Substitute $t = 0$ into the velocity function.', workingOut: 'v = 2 - 4\\cos(0) = 2 - 4 = -2 \\text{ m/s}' }
    ]
  },

  {
    id: 'bbhs2020-31b',
    topicId: 'y12a-7B',
    c: '7B',
    t: 'Velocity and acceleration as derivatives',
    source: 'Blacktown Boys 2020 Trial Q31b',
    type: 'short_answer',
    difficulty: 'medium',
    marks: 2,
    q: 'For $v = 2 - 4\\cos 2t$, find all times when the particle is at rest for $0 \\leq t \\leq 2\\pi$.',
    a: '$t = \\dfrac{\\pi}{6},\\ \\dfrac{5\\pi}{6},\\ \\dfrac{7\\pi}{6},\\ \\dfrac{11\\pi}{6}$',
    h: 'Set $v = 0$ and solve $\\cos 2t = \\frac{1}{2}$.',
    s: '$2 - 4\\cos 2t = 0 \\Rightarrow \\cos 2t = \\frac{1}{2}$. For $0 \\leq 2t \\leq 4\\pi$: $2t = \\frac{\\pi}{3}, \\frac{5\\pi}{3}, \\frac{7\\pi}{3}, \\frac{11\\pi}{3}$. So $t = \\frac{\\pi}{6}, \\frac{5\\pi}{6}, \\frac{7\\pi}{6}, \\frac{11\\pi}{6}$.',
    solutionSteps: [
      { explanation: 'Set $v = 0$.', workingOut: '2 - 4\\cos 2t = 0 \\Rightarrow \\cos 2t = \\tfrac{1}{2}' },
      { explanation: 'Solve for $2t$ in $[0, 4\\pi]$.', workingOut: '2t = \\frac{\\pi}{3},\\ \\frac{5\\pi}{3},\\ \\frac{7\\pi}{3},\\ \\frac{11\\pi}{3}' },
      { explanation: 'Divide by 2.', workingOut: 't = \\frac{\\pi}{6},\\ \\frac{5\\pi}{6},\\ \\frac{7\\pi}{6},\\ \\frac{11\\pi}{6}' }
    ]
  },

  {
    id: 'bbhs2020-31d',
    topicId: 'y12a-7B',
    c: '7B',
    t: 'Velocity and acceleration as derivatives',
    source: 'Blacktown Boys 2020 Trial Q31d',
    type: 'short_answer',
    difficulty: 'easy',
    marks: 1,
    q: 'For $v = 2 - 4\\cos 2t$, find the acceleration when $t = \\dfrac{\\pi}{2}$.',
    a: '$0$ m/s²',
    h: 'Differentiate $v$ to get acceleration, then substitute $t = \\pi/2$.',
    s: '$a = \\dot{v} = 8\\sin 2t$. At $t = \\frac{\\pi}{2}$: $a = 8\\sin\\pi = 0$ m/s².',
    solutionSteps: [
      { explanation: 'Differentiate $v = 2 - 4\\cos 2t$.', workingOut: 'a = \\frac{dv}{dt} = 8\\sin 2t' },
      { explanation: 'Substitute $t = \\pi/2$.', workingOut: 'a = 8\\sin\\pi = 0 \\text{ m/s}^2' }
    ]
  },

  {
    id: 'bbhs2020-31e',
    topicId: 'y12a-7C',
    c: '7C',
    t: 'Integrating with respect to time',
    source: 'Blacktown Boys 2020 Trial Q31e',
    type: 'short_answer',
    difficulty: 'hard',
    marks: 2,
    q: 'For $v = 2 - 4\\cos 2t$ and initial displacement 3 m to the right of the origin, find the exact displacement when $t = \\pi$.',
    a: '$x = 2\\pi + 3$ metres',
    h: 'Integrate $v$ to get $x(t)$, apply the initial condition $x(0) = 3$, then substitute $t = \\pi$.',
    s: '$x = \\int (2 - 4\\cos 2t)\\,dt = 2t - 2\\sin 2t + C$. At $t=0$: $3 = 0 - 0 + C \\Rightarrow C = 3$. At $t = \\pi$: $x = 2\\pi - 2\\sin 2\\pi + 3 = 2\\pi + 3$.',
    solutionSteps: [
      { explanation: 'Integrate the velocity.', workingOut: 'x = 2t - 2\\sin 2t + C' },
      { explanation: 'Apply $x(0) = 3$.', workingOut: '3 = 0 - 0 + C \\Rightarrow C = 3' },
      { explanation: 'Substitute $t = \\pi$.', workingOut: 'x(\\pi) = 2\\pi - 2\\sin 2\\pi + 3 = 2\\pi + 3' }
    ]
  },

  {
    id: 'bbhs2020-32a',
    topicId: 'y12a-3G',
    c: '3G',
    t: 'Applications of maximisation and minimisation',
    source: 'Blacktown Boys 2020 Trial Q32a',
    type: 'short_answer',
    difficulty: 'medium',
    marks: 1,
    q: 'A window is a rectangle of width $2r$ and height $h$, surmounted by a semicircle of radius $r$. The perimeter is $16\\pi$ metres. Show that $h = 8\\pi - r - \\dfrac{1}{2}\\pi r$.',
    a: 'Perimeter $= 2h + 2r + \\pi r = 16\\pi$, so $2h = 16\\pi - 2r - \\pi r$, giving $h = 8\\pi - r - \\frac{1}{2}\\pi r$.',
    h: 'The perimeter consists of: two vertical sides ($2h$), the base ($2r$), and the semicircle ($\\pi r$).',
    s: 'Perimeter $= 2h + 2r + \\pi r = 16\\pi$. Rearranging: $2h = 16\\pi - 2r - \\pi r \\Rightarrow h = 8\\pi - r - \\frac{\\pi r}{2}$.',
    solutionSteps: [
      { explanation: 'Write the perimeter equation.', workingOut: '2h + 2r + \\pi r = 16\\pi' },
      { explanation: 'Solve for $h$.', workingOut: '2h = 16\\pi - 2r - \\pi r \\Rightarrow h = 8\\pi - r - \\frac{1}{2}\\pi r' }
    ]
  },

  {
    id: 'bbhs2020-32b',
    topicId: 'y12a-3G',
    c: '3G',
    t: 'Applications of maximisation and minimisation',
    source: 'Blacktown Boys 2020 Trial Q32b',
    type: 'short_answer',
    difficulty: 'medium',
    marks: 1,
    q: 'Given $h = 8\\pi - r - \\dfrac{\\pi r}{2}$, show that the area $A$ of the window is $A = 16\\pi r - 2r^2 - \\dfrac{1}{2}\\pi r^2$.',
    a: '$A = 2rh + \\frac{1}{2}\\pi r^2 = 2r(8\\pi - r - \\frac{\\pi r}{2}) + \\frac{\\pi r^2}{2} = 16\\pi r - 2r^2 - \\pi r^2 + \\frac{\\pi r^2}{2} = 16\\pi r - 2r^2 - \\frac{\\pi r^2}{2}$',
    h: 'Area = rectangle area + semicircle area $= 2rh + \\frac{1}{2}\\pi r^2$.',
    s: '$A = 2rh + \\frac{\\pi r^2}{2} = 2r\\!\\left(8\\pi - r - \\frac{\\pi r}{2}\\right) + \\frac{\\pi r^2}{2} = 16\\pi r - 2r^2 - \\pi r^2 + \\frac{\\pi r^2}{2} = 16\\pi r - 2r^2 - \\frac{\\pi r^2}{2}$.',
    solutionSteps: [
      { explanation: 'Write the area formula.', workingOut: 'A = 2rh + \\frac{1}{2}\\pi r^2' },
      { explanation: 'Substitute the expression for $h$.', workingOut: 'A = 2r\\!\\left(8\\pi - r - \\frac{\\pi r}{2}\\right) + \\frac{\\pi r^2}{2}' },
      { explanation: 'Expand and simplify.', workingOut: 'A = 16\\pi r - 2r^2 - \\pi r^2 + \\frac{\\pi r^2}{2} = 16\\pi r - 2r^2 - \\frac{\\pi r^2}{2}' }
    ]
  },

  {
    id: 'bbhs2020-32c',
    topicId: 'y12a-3G',
    c: '3G',
    t: 'Applications of maximisation and minimisation',
    source: 'Blacktown Boys 2020 Trial Q32c',
    type: 'short_answer',
    difficulty: 'hard',
    marks: 3,
    q: 'Given $A = 16\\pi r - 2r^2 - \\dfrac{\\pi r^2}{2}$, find the exact radius $r$ for which the area is a maximum.',
    a: '$r = \\dfrac{16\\pi}{4 + \\pi}$',
    h: 'Differentiate $A$ with respect to $r$, set $\\frac{dA}{dr} = 0$, and verify it is a maximum.',
    s: '$\\frac{dA}{dr} = 16\\pi - 4r - \\pi r = 0 \\Rightarrow r(4 + \\pi) = 16\\pi \\Rightarrow r = \\frac{16\\pi}{4 + \\pi}$. $\\frac{d^2A}{dr^2} = -4 - \\pi < 0$, confirming maximum.',
    solutionSteps: [
      { explanation: 'Differentiate.', workingOut: '\\frac{dA}{dr} = 16\\pi - 4r - \\pi r' },
      { explanation: 'Set equal to zero.', workingOut: '16\\pi - 4r - \\pi r = 0 \\Rightarrow r(4 + \\pi) = 16\\pi' },
      { explanation: 'Solve for $r$.', workingOut: 'r = \\frac{16\\pi}{4 + \\pi}' },
      { explanation: 'Verify maximum: $\\frac{d^2A}{dr^2} = -4 - \\pi < 0$ ✓', workingOut: '\\frac{d^2A}{dr^2} < 0 \\Rightarrow \\text{maximum}' }
    ]
  },

  {
    id: 'bbhs2020-32d',
    topicId: 'y12a-3G',
    c: '3G',
    t: 'Applications of maximisation and minimisation',
    source: 'Blacktown Boys 2020 Trial Q32d',
    type: 'short_answer',
    difficulty: 'medium',
    marks: 1,
    q: 'Find the maximum area of the window (to 1 decimal place), given $r = \\dfrac{16\\pi}{4 + \\pi}$.',
    a: '$176.9$ m²',
    h: 'Substitute $r = \\frac{16\\pi}{4+\\pi}$ into $A = 16\\pi r - 2r^2 - \\frac{\\pi r^2}{2}$.',
    s: '$A = 16\\pi \\cdot \\frac{16\\pi}{4+\\pi} - \\left(2 + \\frac{\\pi}{2}\\right)\\left(\\frac{16\\pi}{4+\\pi}\\right)^2 \\approx 176.9$ m².',
    solutionSteps: [
      { explanation: 'Substitute $r = \\frac{16\\pi}{4+\\pi}$ into the area formula.', workingOut: 'A = 16\\pi \\times \\frac{16\\pi}{4+\\pi} - 2\\left(\\frac{16\\pi}{4+\\pi}\\right)^2 - \\frac{\\pi}{2}\\left(\\frac{16\\pi}{4+\\pi}\\right)^2' },
      { explanation: 'Evaluate numerically.', workingOut: 'A \\approx 176.9 \\text{ m}^2' }
    ]
  }

];
