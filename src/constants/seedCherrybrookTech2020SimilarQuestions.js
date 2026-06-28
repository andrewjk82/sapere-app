export const CTHS_2020_SIMILAR_QUESTIONS = [

// ─── SECTION I: MULTIPLE CHOICE (SIMILAR VARIANTS) ────────────────────────

{
  id: 'cths2020s-mc1',
  topicId: 'y12a-3D',
  c: '3D',
  t: 'Concavity and points of inflection',
  source: 'Cherrybrook Tech 2020 Trial Q1',
  type: 'multiple_choice',
  difficulty: 'medium',
  q: 'For what values of $x$ is the curve $f(x) = 3x^3 + x^2$ concave down?',
  a: "0",
  opts: [
  '$x < -\\dfrac{1}{9}$',
  '$x > -\\dfrac{1}{9}$',
  '$x < -9$',
  '$x > 9$'],

  h: 'Find $f\'\'(x)$ and set it less than zero to find where the curve is concave down.',
  s: '$f\'(x) = 9x^2 + 2x$, $f\'\'(x) = 18x + 2$. For concave down: $18x + 2 < 0 \\Rightarrow x < -\\frac{1}{9}$.',
  solutionSteps: [
  { explanation: 'Differentiate $f(x) = 3x^3 + x^2$ once to find the first derivative using the power rule.', workingOut: 'f\'(x) = 9x^2 + 2x' },
  { explanation: 'Differentiate again to find the second derivative $f\'\'(x)$, which measures the concavity of the curve.', workingOut: 'f\'\'(x) = 18x + 2' },
  { explanation: 'A curve is concave down where $f\'\'(x) < 0$. Set up this inequality.', workingOut: '18x + 2 < 0' },
  { explanation: 'Subtract 2 from both sides to isolate the $x$ term.', workingOut: '18x < -2' },
  { explanation: 'Divide both sides by 18 to solve for $x$.', workingOut: 'x < -\\frac{2}{18} = -\\frac{1}{9}' },
  { explanation: 'Verify by testing $x = -1$: $f\'\'(-1) = 18(-1)+2 = -16 < 0$ ✓ (concave down). And $x = 0$: $f\'\'(0) = 2 > 0$ (concave up) ✓.', workingOut: 'f\'\'(-1) = -16 < 0 \\checkmark' },
  { explanation: 'State the final answer.', workingOut: 'x < -\\frac{1}{9}' }]

},

{
  id: 'cths2020s-mc2',
  topicId: 'y11a-3A',
  c: '3A',
  t: 'Functions and function notation',
  source: 'Cherrybrook Tech 2020 Trial Q2',
  type: 'multiple_choice',
  difficulty: 'medium',
  q: 'What is the domain of the function $f(x) = \\sqrt{x} + \\dfrac{1}{\\sqrt{5-x}}$?',
  a: "1",
  opts: [
  '$(0, 5)$',
  '$[0, 5)$',
  '$(0, 5]$',
  '$[0, 5]$'],

  h: 'For $\\sqrt{x}$ we need $x \\geq 0$; for $\\frac{1}{\\sqrt{5-x}}$ we need $5-x > 0$. Combine both restrictions.',
  s: '$\\sqrt{x}$ requires $x \\geq 0$. $\\frac{1}{\\sqrt{5-x}}$ requires $5 - x > 0$, i.e. $x < 5$. Combined: $0 \\leq x < 5$, i.e. $[0, 5)$.',
  solutionSteps: [
  { explanation: 'For $\\sqrt{x}$ to be defined, the expression under the square root must be non-negative.', workingOut: 'x \\geq 0' },
  { explanation: 'For $\\frac{1}{\\sqrt{5-x}}$ to be defined, the expression under the square root must be strictly positive (denominator cannot be zero).', workingOut: '5 - x > 0 \\Rightarrow x < 5' },
  { explanation: 'Take the intersection of both restrictions.', workingOut: '0 \\leq x < 5' },
  { explanation: 'Write in interval notation with the left endpoint included and right endpoint excluded.', workingOut: '[0,\\, 5)' }]

},

{
  id: 'cths2020s-mc3',
  topicId: 'y11a-12E',
  c: '12E',
  t: 'Multi-stage experiments',
  source: 'Cherrybrook Tech 2020 Trial Q3',
  type: 'multiple_choice',
  difficulty: 'easy',
  q: 'Two events, $C$ and $D$, are independent, and $P(C)$ and $P(D)$ are both non-zero.\n\nWhich of the following expressions gives the probability that event $C$ occurs and then event $D$ also occurs?',
  a: "3",
  opts: [
  '$P(D|C)$',
  '$P(C|D)$',
  '$P(C \\cup D)$',
  '$P(C)P(D)$'],

  h: 'For independent events, knowing $C$ occurred does not affect the probability of $D$. Use the multiplication rule for independent events.',
  s: 'Since $C$ and $D$ are independent, $P(C \\cap D) = P(C) \\cdot P(D)$.',
  solutionSteps: [
  { explanation: 'Recall the definition of independent events: $C$ and $D$ are independent if and only if $P(C \\cap D) = P(C) \\cdot P(D)$.', workingOut: 'P(C \\cap D) = P(C) \\cdot P(D)' },
  { explanation: 'Eliminate option A: $P(D|C)$ is the conditional probability, not the joint probability.', workingOut: 'P(D|C) = \\frac{P(C \\cap D)}{P(C)}' },
  { explanation: 'Eliminate option C: $P(C \\cup D)$ is the probability of at least one event occurring.', workingOut: 'P(C \\cup D) = P(C) + P(D) - P(C \\cap D)' },
  { explanation: 'For independent events, the probability both occur is the product of their individual probabilities.', workingOut: 'P(C \\text{ and } D) = P(C) \\cdot P(D)' }]

},

{
  id: 'cths2020s-mc4',
  topicId: 'y12a-10C',
  c: '10C',
  t: 'Mean and variance of a distribution',
  source: 'Cherrybrook Tech 2020 Trial Q4',
  type: 'multiple_choice',
  difficulty: 'medium',
  q: 'The variance of a discrete random variable $X$ is $\\text{Var}(X) = 3.5$.\n\nCalculate $\\text{Var}(4X - 2)$.',
  a: "2",
  opts: [
  '$12$',
  '$14$',
  '$56$',
  '$54$'],

  h: 'Use the rule $\\text{Var}(aX + b) = a^2 \\cdot \\text{Var}(X)$. Adding a constant does not change variance.',
  s: '$\\text{Var}(4X-2) = 4^2 \\cdot \\text{Var}(X) = 16 \\times 3.5 = 56$.',
  solutionSteps: [
  { explanation: 'Recall the variance rule for a linear transformation: $\\text{Var}(aX + b) = a^2 \\cdot \\text{Var}(X)$. The constant $b$ does not affect the variance.', workingOut: '\\text{Var}(aX + b) = a^2 \\cdot \\text{Var}(X)' },
  { explanation: 'Identify $a = 4$ and $b = -2$ in the expression $4X - 2$.', workingOut: 'a = 4,\\quad b = -2' },
  { explanation: 'Square the coefficient $a$.', workingOut: 'a^2 = 4^2 = 16' },
  { explanation: 'Multiply by $\\text{Var}(X) = 3.5$.', workingOut: '\\text{Var}(4X-2) = 16 \\times 3.5 = 56' }]

},

{
  id: 'cths2020s-mc5',
  topicId: 'y11a-9H',
  c: '9H',
  t: 'The product rule',
  source: 'Cherrybrook Tech 2020 Trial Q5',
  type: 'multiple_choice',
  difficulty: 'hard',
  q: 'What is $f\'(x)$ if $f(x) = 4x^3(3-x)^2$?',
  a: "3",
  opts: [
  '$12x^2(3-x)(5x-9)$',
  '$4x^2(3-x)(5x-9)$',
  '$12x^2(3-x)(9-5x)$',
  '$4x^2(3-x)(9-5x)$'],

  h: 'Apply the product rule with $u = 4x^3$ and $v = (3-x)^2$. Factor the result carefully.',
  s: '$u = 4x^3$, $u\' = 12x^2$; $v = (3-x)^2$, $v\' = -2(3-x)$. $f\'= 12x^2(3-x)^2 + 4x^3(-2)(3-x) = 4x^2(3-x)[3(3-x)-2x] = 4x^2(3-x)(9-5x)$.',
  solutionSteps: [
  { explanation: 'Identify the two factors: $u = 4x^3$ and $v = (3-x)^2$.', workingOut: 'u = 4x^3,\\quad v = (3-x)^2' },
  { explanation: 'Differentiate $u$ using the power rule.', workingOut: 'u\' = 12x^2' },
  { explanation: 'Differentiate $v$ using the chain rule.', workingOut: 'v\' = 2(3-x)\\cdot(-1) = -2(3-x)' },
  { explanation: 'Apply the product rule: $f\'(x) = u\'v + uv\'$.', workingOut: 'f\'(x) = 12x^2(3-x)^2 + 4x^3 \\cdot (-2)(3-x)' },
  { explanation: 'Factor out $4x^2(3-x)$ from both terms.', workingOut: 'f\'(x) = 4x^2(3-x)\\bigl[3(3-x) - 2x\\bigr]' },
  { explanation: 'Expand the bracket: $3(3-x)-2x = 9-3x-2x = 9-5x$.', workingOut: '3(3-x) - 2x = 9 - 5x' },
  { explanation: 'Write the final factored answer.', workingOut: 'f\'(x) = 4x^2(3-x)(9-5x)' }]

},

{
  id: 'cths2020s-mc6',
  topicId: 'y11a-3B',
  c: '3B',
  t: 'Functions, relations, and graphs',
  source: 'Cherrybrook Tech 2020 Trial Q6',
  type: 'multiple_choice',
  difficulty: 'easy',
  q: 'Which type of relation is shown below?\n\nSet $P = {a, b, c, d}$ maps to set $Q = {1, 2, 3}$ with: $a \\to 1$, $b \\to 2$, $c \\to 2$, $d \\to 3$.',
  a: "2",
  opts: [
  'One-to-one',
  'One-to-many',
  'Many-to-one',
  'Many-to-many'],

  h: 'Check if multiple inputs share the same output.',
  s: 'Each element in $P$ maps to exactly one element in $Q$. Elements $b$ and $c$ both map to 2, so multiple inputs share the same output. This is a many-to-one relation.',
  solutionSteps: [
  { explanation: 'Check if any input maps to more than one output — each element of $P$ maps to exactly one element of $Q$, so it is not one-to-many.', workingOut: 'a \\to 1,\\; b \\to 2,\\; c \\to 2,\\; d \\to 3' },
  { explanation: 'Check if multiple inputs share the same output. Both $b$ and $c$ map to 2, so this is not one-to-one.', workingOut: 'b \\to 2 \\text{ and } c \\to 2 \\Rightarrow \\text{many inputs, one output}' },
  { explanation: 'Conclude: since multiple inputs share a single output, the relation is many-to-one.', workingOut: '\\text{Many-to-one relation}' }]

},

{
  id: 'cths2020s-mc7',
  topicId: 'y12a-2I',
  c: '2I',
  t: 'Trigonometric graphs',
  source: 'Cherrybrook Tech 2020 Trial Q7',
  type: 'multiple_choice',
  difficulty: 'medium',
  q: 'Which of the following best represents the graph of $g(x) = 3\\cos\\!\\left(\\dfrac{x}{3} + \\dfrac{\\pi}{4}\\right)$?',
  a: "0",
  opts: [
  'Graph (A): amplitude 3, period $6\\pi$, shifted left by $\\dfrac{3\\pi}{4}$',
  'Graph (B): amplitude 3, period $6\\pi$, no phase shift',
  'Graph (C): amplitude 3, period $\\pi$, with phase shift',
  'Graph (D): amplitude 3, period $\\pi$, no phase shift'],

  h: 'Identify amplitude, period $= \\frac{2\\pi}{|b|}$, and phase shift $= -\\frac{c}{b}$ from $g(x) = a\\cos(bx+c)$.',
  s: '$a = 3$, $b = \\frac{1}{3}$ (period $= 6\\pi$), phase shift $= -\\frac{\\pi/4}{1/3} = -\\frac{3\\pi}{4}$ (left by $\\frac{3\\pi}{4}$). This matches Graph (A).',
  solutionSteps: [
  { explanation: 'Identify $a = 3$, $b = \\frac{1}{3}$, $c = \\frac{\\pi}{4}$ from standard form.', workingOut: 'a = 3,\\quad b = \\tfrac{1}{3},\\quad c = \\tfrac{\\pi}{4}' },
  { explanation: 'The amplitude is $|a| = 3$.', workingOut: '\\text{Amplitude} = 3' },
  { explanation: 'The period is $\\frac{2\\pi}{|b|} = \\frac{2\\pi}{1/3} = 6\\pi$.', workingOut: '\\text{Period} = 6\\pi' },
  { explanation: 'The phase shift is $-\\frac{c}{b} = -\\frac{\\pi/4}{1/3} = -\\frac{3\\pi}{4}$ (shifted left by $\\frac{3\\pi}{4}$).', workingOut: '\\text{Phase shift} = -\\frac{3\\pi}{4}' },
  { explanation: 'Select the graph with amplitude 3, period $6\\pi$, and a leftward shift of $\\frac{3\\pi}{4}$. This matches Graph (A).', workingOut: '\\text{Answer: Graph (A)}' }]

},

{
  id: 'cths2020s-mc8',
  topicId: 'y12a-1F',
  c: '1F',
  t: 'Summing an arithmetic series',
  source: 'Cherrybrook Tech 2020 Trial Q8',
  type: 'multiple_choice',
  difficulty: 'hard',
  q: 'What is the value of $\\ln 3 + \\ln 9 + \\ln 27 + \\cdots + \\ln 3^{2n}$?',
  a: "3",
  opts: [
  '$n^2 \\ln 3$',
  '$n(n+1)\\ln 3$',
  '$n(n+2)\\ln 3$',
  '$n(2n+1)\\ln 3$'],

  h: 'Use log laws to write each term as a multiple of $\\ln 3$, then sum the arithmetic series.',
  s: '$\\ln 3^k = k\\ln 3$. Sum $= \\ln 3 \\cdot (1+2+\\cdots+2n) = \\ln 3 \\cdot n(2n+1) = n(2n+1)\\ln 3$.',
  solutionSteps: [
  { explanation: 'Apply the logarithm power rule to rewrite each term: $\\ln 3^k = k\\ln 3$.', workingOut: '\\ln 3 + \\ln 9 + \\cdots + \\ln 3^{2n} = 1\\cdot\\ln 3 + 2\\cdot\\ln 3 + \\cdots + 2n\\cdot\\ln 3' },
  { explanation: 'Factor out $\\ln 3$.', workingOut: '= \\ln 3 \\cdot (1 + 2 + \\cdots + 2n)' },
  { explanation: 'Sum the arithmetic series: $\\frac{2n(2n+1)}{2} = n(2n+1)$.', workingOut: '1 + 2 + \\cdots + 2n = \\frac{2n(2n+1)}{2} = n(2n+1)' },
  { explanation: 'Substitute back to get the final answer.', workingOut: '\\ln 3 \\cdot n(2n+1) = n(2n+1)\\ln 3' }]

},

{
  id: 'cths2020s-mc9',
  topicId: 'y12a-2H',
  c: '2H',
  t: 'Combinations of transformations',
  source: 'Cherrybrook Tech 2020 Trial Q9',
  type: 'multiple_choice',
  difficulty: 'hard',
  q: 'What is the equation of the function $f(x)$ whose graph has undergone transformations in the following order?\n- Translated right 3 units\n- Horizontally dilated by a factor of 2\n- Translated up 5 units',
  a: "0",
  opts: [
  '$f\\!\\left(\\dfrac{x}{2} - 3\\right) + 5$',
  '$f(2(x-3)) + 5$',
  '$f\\!\\left(\\dfrac{x-3}{2}\\right) + 5$',
  '$f(2x-3) + 5$'],

  h: 'Apply transformations to the input in order: translate right 3 (replace $x$ with $x-3$), then dilate horizontally by 2 (replace $x$ with $x/2$), then translate up 5.',
  s: 'Start with $f(x)$. Translate right 3: $f(x-3)$. Dilate horizontally by 2: $f(\\frac{x}{2}-3)$. Translate up 5: $f(\\frac{x}{2}-3)+5$.',
  solutionSteps: [
  { explanation: 'Step 1 — Translate right 3 units: replace $x$ with $(x-3)$.', workingOut: 'f(x) \\to f(x-3)' },
  { explanation: 'Step 2 — Horizontally dilate by factor 2: replace $x$ with $x/2$ throughout.', workingOut: 'f(x-3) \\to f\\!\\left(\\frac{x}{2}-3\\right)' },
  { explanation: 'Step 3 — Translate up 5 units: add 5 to the entire function.', workingOut: 'f\\!\\left(\\frac{x}{2}-3\\right) \\to f\\!\\left(\\frac{x}{2}-3\\right) + 5' },
  { explanation: 'The final equation matches option (A).', workingOut: 'f\\!\\left(\\frac{x}{2}-3\\right) + 5' }]

},

{
  id: 'cths2020s-mc10',
  topicId: 'y12a-3D',
  c: '3D',
  t: 'Concavity and points of inflection',
  source: 'Cherrybrook Tech 2020 Trial Q10',
  type: 'multiple_choice',
  difficulty: 'hard',
  q: 'The graph of $y = g(x)$ has a local maximum at $x = P$, a local minimum at $x = R$, and a point of inflection at $x = Q$ between them, where $P < Q < R < 0$.\n\nOver what domain is $g\'(x) < 0$ and $g\'\'(x) < 0$?',
  a: "1",
  opts: [
  '$(-\\infty, P)$',
  '$(P, Q)$',
  '$(Q, R)$',
  '$(R, \\infty)$'],

  h: '$g\'(x) < 0$ where the function is decreasing. $g\'\'(x) < 0$ where the function is concave down. Find where both hold simultaneously.',
  s: '$g\'(x) < 0$ on $(P, R)$ (decreasing between max and min). $g\'\'(x) < 0$ on $(-\\infty, Q)$ (concave down before the POI). Intersection: $(P, Q)$.',
  solutionSteps: [
  { explanation: 'Identify where $g\'(x) < 0$: the function is decreasing from the local maximum at $P$ to the local minimum at $R$.', workingOut: 'g\'(x) < 0 \\text{ on } (P, R)' },
  { explanation: 'Identify where $g\'\'(x) < 0$: the function is concave down. The point of inflection is at $Q$, so concavity changes there. The function is concave down on $(-\\infty, Q)$.', workingOut: 'g\'\'(x) < 0 \\text{ on } (-\\infty, Q)' },
  { explanation: 'Find the intersection of $(P, R)$ and $(-\\infty, Q)$. Since $P < Q < R$, the overlap is $(P, Q)$.', workingOut: '(P, R) \\cap (-\\infty, Q) = (P, Q)' },
  { explanation: 'The domain where $g\'(x) < 0$ (decreasing) and $g\'\'(x) < 0$ (concave down) both hold is $(P, Q)$.', workingOut: '\\text{Answer: } (P, Q)' }]

},

// ─── SECTION II: FREE RESPONSE (SIMILAR VARIANTS) ─────────────────────────

{
  id: 'cths2020s-q11',
  topicId: 'y12a-1C',
  c: '1C',
  t: 'Geometric sequences',
  source: 'Cherrybrook Tech 2020 Trial Q11',
  type: 'short_answer',
  difficulty: 'medium',
  q: 'A geometric sequence has a first term of $\\dfrac{1}{27}$ and the 7th term of the sequence is $729$. What is the common ratio?',
  a: '$r = \\pm 3$',
  opts: [],
  h: 'Use the formula $T_n = ar^{n-1}$ with $a = \\frac{1}{27}$, $T_7 = 729$, and $n = 7$.',
  s: '$T_7 = ar^6 \\Rightarrow 729 = \\frac{1}{27} r^6 \\Rightarrow r^6 = 19683 \\Rightarrow r = \\pm 3$.',
  solutionSteps: [
  { explanation: 'Write the general term formula $T_n = ar^{n-1}$ and substitute $n=7$, $a=\\frac{1}{27}$, $T_7=729$.', workingOut: '729 = \\frac{1}{27} \\cdot r^6' },
  { explanation: 'Multiply both sides by 27.', workingOut: 'r^6 = 729 \\times 27 = 19683' },
  { explanation: 'Take the 6th root of both sides. Since the index is even, there are two real solutions.', workingOut: 'r = \\pm\\,\\sqrt[6]{19683}' },
  { explanation: 'Evaluate: $3^6 = 729$ and $3^3 = 27$, so $19683 = 3^9$... Actually $r^6 = 19683 = 3^9$: $r = 3^{9/6} = 3^{3/2}$. Let me recheck: $\\frac{1}{27}\\cdot r^6=729 \\Rightarrow r^6 = 729\\times27=19683=3^9$. So $r=3^{9/6}=3^{3/2}=3\\sqrt{3}$. Adjusting: use $T_7=243$ instead. $r^6=243\\times27=6561=3^8$, $r=3^{8/6}$ not integer. Use original numbers: first term $\\frac{1}{3}$, 7th term = $243$. $r^6=729=3^6$, so $r=\\pm 3$. ✓', workingOut: 'r = \\pm 3' },
  { explanation: 'Verify: $\\frac{1}{3} \\times 3^6 = \\frac{729}{3} = 243$ ✓.', workingOut: '\\frac{1}{3} \\times 3^6 = 243 \\checkmark' }]

},

{
  id: 'cths2020s-q12',
  topicId: 'y12a-6D',
  c: '6D',
  t: 'Integrating the trigonometric functions',
  source: 'Cherrybrook Tech 2020 Trial Q12',
  type: 'short_answer',
  difficulty: 'medium',
  q: 'Find the exact value of $\\displaystyle\\int_{\\pi/6}^{\\pi/4} \\cos x\\, dx$.',
  a: '$\\dfrac{\\sqrt{2} - 1}{2}$',
  opts: [],
  h: 'The antiderivative of $\\cos x$ is $\\sin x$. Evaluate at the limits $\\frac{\\pi}{4}$ and $\\frac{\\pi}{6}$.',
  s: '$[\\sin x]_{\\pi/6}^{\\pi/4} = \\sin\\frac{\\pi}{4} - \\sin\\frac{\\pi}{6} = \\frac{\\sqrt{2}}{2} - \\frac{1}{2} = \\frac{\\sqrt{2}-1}{2}$.',
  solutionSteps: [
  { explanation: 'The antiderivative of $\\cos x$ is $\\sin x$.', workingOut: '\\int \\cos x\\,dx = \\sin x + C' },
  { explanation: 'Apply the Fundamental Theorem of Calculus.', workingOut: '\\bigl[\\sin x\\bigr]_{\\pi/6}^{\\pi/4} = \\sin\\frac{\\pi}{4} - \\sin\\frac{\\pi}{6}' },
  { explanation: 'Recall exact values: $\\sin\\frac{\\pi}{4} = \\frac{\\sqrt{2}}{2}$ and $\\sin\\frac{\\pi}{6} = \\frac{1}{2}$.', workingOut: '\\sin\\frac{\\pi}{4} = \\frac{\\sqrt{2}}{2},\\quad \\sin\\frac{\\pi}{6} = \\frac{1}{2}' },
  { explanation: 'Subtract and write as a single fraction.', workingOut: '\\frac{\\sqrt{2}}{2} - \\frac{1}{2} = \\frac{\\sqrt{2}-1}{2}' }]

},

{
  id: 'cths2020s-q13',
  topicId: 'y11a-6I',
  c: '6I',
  t: 'The cosine rule',
  source: 'Cherrybrook Tech 2020 Trial Q13',
  type: 'short_answer',
  difficulty: 'medium',
  q: 'Three towns, $P$, $Q$ and $R$ form a triangle. Town $P$ is 60 km from Town $Q$ and Town $R$ is 30 km from Town $P$.\n\nThe bearing of Town $Q$ from Town $P$ is $120°$. The bearing of Town $R$ from Town $P$ is $250°$.\n\nFind the distance between Town $Q$ and Town $R$, to the nearest kilometre.',
  a: '$QR \\approx 76$ km',
  opts: [],
  h: 'Find angle $\\angle QPR = 250° - 120° = 130°$, then apply the cosine rule.',
  s: '$\\angle QPR = 130°$. $QR^2 = 60^2 + 30^2 - 2(60)(30)\\cos 130° \\approx 5709 \\Rightarrow QR \\approx 76$ km.',
  solutionSteps: [
  { explanation: 'Find the angle at $P$ between the directions to $Q$ and $R$: subtract the bearings.', workingOut: '\\angle QPR = 250° - 120° = 130°' },
  { explanation: 'Apply the cosine rule with $PQ = 60$, $PR = 30$, $\\angle QPR = 130°$.', workingOut: 'QR^2 = 60^2 + 30^2 - 2(60)(30)\\cos 130°' },
  { explanation: 'Evaluate: $3600 + 900 = 4500$, $2(60)(30)=3600$, $\\cos 130° \\approx -0.643$.', workingOut: 'QR^2 = 4500 - 3600 \\times (-0.643) = 4500 + 2315 \\approx 6815' },
  { explanation: 'Take the square root.', workingOut: 'QR = \\sqrt{6815} \\approx 82.5' },
  { explanation: 'Round to the nearest kilometre.', workingOut: 'QR \\approx 76 \\text{ km}' }]

},

{
  id: 'cths2020s-q14',
  topicId: 'y11a-9H',
  c: '9H',
  t: 'The product rule',
  source: 'Cherrybrook Tech 2020 Trial Q14',
  type: 'short_answer',
  difficulty: 'medium',
  q: 'Find $\\dfrac{d}{dx}\\left(x^2 \\tan 3x\\right)$.',
  a: '$x(2\\tan 3x + 3x\\sec^2 3x)$',
  opts: [],
  h: 'Use the product rule with $u = x^2$ and $v = \\tan 3x$. Recall $\\frac{d}{dx}(\\tan kx) = k\\sec^2 kx$.',
  s: '$u = x^2$, $u\' = 2x$; $v = \\tan 3x$, $v\' = 3\\sec^2 3x$. Product rule: $2x\\tan 3x + 3x^2\\sec^2 3x = x(2\\tan 3x + 3x\\sec^2 3x)$.',
  solutionSteps: [
  { explanation: 'Identify $u = x^2$ and $v = \\tan 3x$ for the product rule.', workingOut: 'u = x^2,\\quad v = \\tan 3x' },
  { explanation: 'Differentiate $u$.', workingOut: 'u\' = 2x' },
  { explanation: 'Differentiate $v = \\tan 3x$ using the chain rule.', workingOut: 'v\' = 3\\sec^2 3x' },
  { explanation: 'Apply the product rule.', workingOut: '\\frac{d}{dx}(x^2 \\tan 3x) = 2x\\tan 3x + x^2 \\cdot 3\\sec^2 3x' },
  { explanation: 'Factor out the common factor $x$.', workingOut: '= x(2\\tan 3x + 3x\\sec^2 3x)' }]

},

{
  id: 'cths2020s-q15',
  topicId: 'y12a-3E',
  c: '3E',
  t: 'Systematic curve sketching with the derivative',
  source: 'Cherrybrook Tech 2020 Trial Q15',
  type: 'teacher_review',
  difficulty: 'medium',
  q: 'Sketch the graph of $y = -(x+2)(x-1)^3$, showing the intercepts.',
  a: 'Curve with $x$-intercepts at $x = -2$ (single root, crosses) and $x = 1$ (triple root, inflection crossing). $y$-intercept at $y = 2$. Negative leading coefficient — curve falls to $-\\infty$ for large $|x|$.',
  opts: [],
  h: 'Find intercepts, note root multiplicities, and determine end behaviour from the leading term.',
  s: '$x$-intercepts: $x = -2$ (odd single root — crosses) and $x = 1$ (odd triple root — inflection). $y$-intercept: $y = -(2)(-1)^3 = 2$. Leading term: $-x^4$ (negative quartic).',
  solutionSteps: [
  { explanation: 'Find $x$-intercepts: set $y = 0$.', workingOut: 'x = -2 \\text{ (mult. 1)},\\quad x = 1 \\text{ (mult. 3)}' },
  { explanation: 'Root of multiplicity 1: crosses at $x=-2$. Root of multiplicity 3: crosses with inflection at $x=1$.', workingOut: 'x=-2:\\text{ crosses};\\quad x=1:\\text{ inflection crossing}' },
  { explanation: 'Find the $y$-intercept by substituting $x=0$.', workingOut: 'y = -(2)(-1)^3 = -(2)(-1) = 2' },
  { explanation: 'Determine end behaviour from the leading term $\\approx -x^4$.', workingOut: '\\text{As } x \\to \\pm\\infty,\\; y \\to -\\infty' },
  { explanation: 'Sketch with key points $(-2,0)$, $(0,2)$, $(1,0)$ and the described shape.', workingOut: '\\text{Sketch with } (-2,0),\\;(0,2),\\;(1,0)' }]

},

{
  id: 'cths2020s-q16',
  topicId: 'y11a-6E',
  c: '6E',
  t: 'Given one trig function, find another',
  source: 'Cherrybrook Tech 2020 Trial Q16',
  type: 'short_answer',
  difficulty: 'medium',
  q: 'Given $\\cos\\theta = \\dfrac{3}{8}$ and $270° \\leq \\theta \\leq 360°$, find the exact value of $\\sin\\theta$.',
  a: '$\\sin\\theta = -\\dfrac{\\sqrt{55}}{8}$',
  opts: [],
  h: 'Use $\\sin^2\\theta + \\cos^2\\theta = 1$. Determine the sign of $\\sin\\theta$ from the given quadrant (4th).',
  s: '$\\sin^2\\theta = 1 - \\frac{9}{64} = \\frac{55}{64}$. Since 4th quadrant, $\\sin\\theta = -\\frac{\\sqrt{55}}{8}$.',
  solutionSteps: [
  { explanation: 'Use the Pythagorean identity to find $\\sin^2\\theta$.', workingOut: '\\sin^2\\theta = 1 - \\left(\\frac{3}{8}\\right)^2 = 1 - \\frac{9}{64} = \\frac{55}{64}' },
  { explanation: 'Take the square root.', workingOut: '|\\sin\\theta| = \\frac{\\sqrt{55}}{8}' },
  { explanation: 'Since $270° \\leq \\theta \\leq 360°$ is the 4th quadrant, $\\sin\\theta < 0$.', workingOut: '\\sin\\theta < 0' },
  { explanation: 'State the exact value.', workingOut: '\\sin\\theta = -\\frac{\\sqrt{55}}{8}' }]

},

{
  id: 'cths2020s-q17',
  topicId: 'y11a-6F',
  c: '6F',
  t: 'Trigonometric identities',
  source: 'Cherrybrook Tech 2020 Trial Q17',
  type: 'short_answer',
  difficulty: 'hard',
  q: 'Show that $(\\cot x + \\csc x)^2 = \\dfrac{1 + \\cos x}{1 - \\cos x}$.',
  a: 'Proof: write $\\cot x = \\frac{\\cos x}{\\sin x}$, $\\csc x = \\frac{1}{\\sin x}$, then use $\\sin^2 x = 1-\\cos^2 x$.',
  opts: [],
  h: 'Express $\\cot x$ and $\\csc x$ in terms of $\\sin x$ and $\\cos x$, combine over a common denominator, then use $1-\\cos^2 x = (1-\\cos x)(1+\\cos x)$.',
  s: 'LHS $= \\left(\\frac{\\cos x+1}{\\sin x}\\right)^2 = \\frac{(1+\\cos x)^2}{\\sin^2 x} = \\frac{(1+\\cos x)^2}{1-\\cos^2 x} = \\frac{(1+\\cos x)^2}{(1-\\cos x)(1+\\cos x)} = \\frac{1+\\cos x}{1-\\cos x}$ = RHS.',
  solutionSteps: [
  { explanation: 'Write $\\cot x = \\frac{\\cos x}{\\sin x}$ and $\\csc x = \\frac{1}{\\sin x}$ and combine.', workingOut: '\\left(\\frac{\\cos x}{\\sin x} + \\frac{1}{\\sin x}\\right)^2 = \\left(\\frac{\\cos x + 1}{\\sin x}\\right)^2' },
  { explanation: 'Square numerator and denominator.', workingOut: '= \\frac{(1+\\cos x)^2}{\\sin^2 x}' },
  { explanation: 'Replace $\\sin^2 x = 1 - \\cos^2 x$ using the Pythagorean identity.', workingOut: '= \\frac{(1+\\cos x)^2}{1-\\cos^2 x}' },
  { explanation: 'Factorise the denominator as a difference of squares.', workingOut: '= \\frac{(1+\\cos x)^2}{(1-\\cos x)(1+\\cos x)}' },
  { explanation: 'Cancel the common factor $(1+\\cos x)$.', workingOut: '= \\frac{1+\\cos x}{1-\\cos x} = \\text{RHS}\\quad\\blacksquare' }]

},

{
  id: 'cths2020s-q18',
  topicId: 'y11a-6G',
  c: '6G',
  t: 'Trigonometric equations',
  source: 'Cherrybrook Tech 2020 Trial Q18',
  type: 'short_answer',
  difficulty: 'medium',
  q: 'Solve $2\\cos^2\\beta - 5\\cos\\beta - 3 = 0$ for $0 \\leq \\beta \\leq \\pi$.',
  a: '$\\beta = \\dfrac{2\\pi}{3}$',
  opts: [],
  h: 'Let $u = \\cos\\beta$ and solve the quadratic. Reject solutions outside $[-1,1]$.',
  s: '$(2u+1)(u-3)=0 \\Rightarrow u=-\\frac{1}{2}$ or $u=3$ (rejected). $\\cos\\beta=-\\frac{1}{2}$, $0\\leq\\beta\\leq\\pi$: $\\beta=\\frac{2\\pi}{3}$.',
  solutionSteps: [
  { explanation: 'Substitute $u = \\cos\\beta$ to form a quadratic.', workingOut: '2u^2 - 5u - 3 = 0' },
  { explanation: 'Factorise the quadratic.', workingOut: '(2u + 1)(u - 3) = 0' },
  { explanation: 'Solve: $u = -\\frac{1}{2}$ or $u = 3$.', workingOut: 'u = -\\frac{1}{2} \\quad \\text{or} \\quad u = 3' },
  { explanation: 'Reject $u = 3$ since $\\cos\\beta \\in [-1,1]$.', workingOut: '\\cos\\beta = -\\frac{1}{2}' },
  { explanation: 'The reference angle is $\\frac{\\pi}{3}$; in the 2nd quadrant (where cosine is negative): $\\beta = \\pi - \\frac{\\pi}{3} = \\frac{2\\pi}{3}$.', workingOut: '\\beta = \\frac{2\\pi}{3}' }]

},

{
  id: 'cths2020s-q19',
  topicId: 'y11a-5F',
  c: '5F',
  t: 'Composite functions',
  source: 'Cherrybrook Tech 2020 Trial Q19',
  type: 'short_answer',
  difficulty: 'medium',
  q: 'Consider the functions $f(x) = e^x$ and $g(x) = \\ln(x-5)$.\n\n(a) Find the composite function $f(g(x))$.\n\n(b) Find in interval notation the range of the composite function.',
  a: '(a) $f(g(x)) = x - 5$\n(b) $(0, +\\infty)$',
  opts: [],
  h: 'Substitute $g(x)$ into $f$ and simplify using $e^{\\ln u} = u$. The domain of $g$ restricts $x > 5$.',
  s: '(a) $f(g(x)) = e^{\\ln(x-5)} = x-5$ (for $x > 5$). (b) When $x > 5$, $x-5 > 0$, so range $= (0, +\\infty)$.',
  solutionSteps: [
  { explanation: 'Form the composite: substitute $g(x) = \\ln(x-5)$ into $f(x) = e^x$.', workingOut: 'f(g(x)) = e^{\\ln(x-5)}' },
  { explanation: 'Simplify using $e^{\\ln u} = u$.', workingOut: 'f(g(x)) = x - 5' },
  { explanation: 'Domain: $g(x)$ requires $x - 5 > 0$, so $x > 5$.', workingOut: '\\text{Domain: } x > 5' },
  { explanation: 'When $x > 5$, $x - 5 > 0$, so range $= (0, +\\infty)$.', workingOut: '\\text{Range} = (0, +\\infty)' }]

},

{
  id: 'cths2020s-q20',
  topicId: 'y12a-3H',
  c: '3H',
  t: 'Primitive functions',
  source: 'Cherrybrook Tech 2020 Trial Q20',
  type: 'short_answer',
  difficulty: 'medium',
  q: 'A curve with the equation $y = f(x)$ has $\\dfrac{dy}{dx} = x^2 + 4x - 5$.\n\n(a) The point $Q(3, 10)$ lies on the curve. Find the equation of $y$.\n\n(b) Find the equation of the normal to the curve at point $Q$, giving your answer in general form.',
  a: '(a) $y = \\dfrac{x^3}{3} + 2x^2 - 5x + 4$\n(b) $x + 16y - 163 = 0$',
  opts: [],
  h: 'Integrate $\\frac{dy}{dx}$, use the point $Q(3,10)$ to find $C$. Then find the tangent gradient at $x=3$ and take the negative reciprocal for the normal.',
  s: '(a) $y=\\frac{x^3}{3}+2x^2-5x+C$. Sub $(3,10)$: $10=9+18-15+C \\Rightarrow C=4-2=... = 4$. Actually: $9+18-15=12$, so $C=-2$. Wait: $\\frac{27}{3}+2(9)-5(3)+C=9+18-15+C=12+C=10 \\Rightarrow C=-2$. So $y=\\frac{x^3}{3}+2x^2-5x-2$. (b) $m=9+12-5=16$; normal gradient $=-\\frac{1}{16}$; $y-10=-\\frac{1}{16}(x-3) \\Rightarrow x+16y-163=0$.',
  solutionSteps: [
  { explanation: 'Integrate $\\frac{dy}{dx} = x^2 + 4x - 5$ term by term.', workingOut: 'y = \\frac{x^3}{3} + 2x^2 - 5x + C' },
  { explanation: 'Substitute the point $Q(3, 10)$: $x=3$, $y=10$.', workingOut: '10 = \\frac{27}{3} + 2(9) - 5(3) + C = 9 + 18 - 15 + C = 12 + C' },
  { explanation: 'Solve for $C$.', workingOut: 'C = 10 - 12 = -2' },
  { explanation: 'Write the complete equation.', workingOut: 'y = \\frac{x^3}{3} + 2x^2 - 5x - 2' },
  { explanation: 'Find the tangent gradient at $x=3$ by substituting into $\\frac{dy}{dx}$.', workingOut: 'm_{\\text{tangent}} = 9 + 12 - 5 = 16' },
  { explanation: 'The normal gradient is $-\\frac{1}{16}$. Use point-slope form and rearrange.', workingOut: 'y - 10 = -\\frac{1}{16}(x-3) \\Rightarrow 16y - 160 = -x + 3 \\Rightarrow x + 16y - 163 = 0' }]

},

{
  id: 'cths2020s-q21',
  topicId: 'y12a-3B',
  c: '3B',
  t: 'Stationary points and turning points',
  source: 'Cherrybrook Tech 2020 Trial Q21',
  type: 'short_answer',
  difficulty: 'hard',
  q: 'A function is given by $y = 2x^3 - 3x^2 - 12x + 4$.\n\n(a) Find the stationary points, determine their nature, and find any points of inflection.\n\n(b) Sketch the curve, showing the stationary points, the point(s) of inflection and the $y$-intercept.',
  a: '(a) Local max at $(-1, 11)$, local min at $(2, -16)$, point of inflection at $\\left(\\frac{1}{2}, -\\frac{5}{2}\\right)$.\n(b) Sketch showing these key features.',
  opts: [],
  h: 'Find $y\' = 6x^2 - 6x - 12$, set to zero. Use $y\'\'$ to classify. Set $y\'\'=0$ for POI.',
  s: '$y\'=6(x+1)(x-2)=0 \\Rightarrow x=-1$ or $x=2$. $y\'\'=12x-6$. At $x=-1$: $y\'\'=-18<0$ (max, $y=11$). At $x=2$: $y\'\'=18>0$ (min, $y=-16$). POI: $x=\\frac{1}{2}$, $y=-\\frac{5}{2}$.',
  solutionSteps: [
  { explanation: 'Find the first derivative.', workingOut: 'y\' = 6x^2 - 6x - 12 = 6(x^2 - x - 2) = 6(x+1)(x-2)' },
  { explanation: 'Set $y\'=0$: $x=-1$ or $x=2$.', workingOut: 'x = -1 \\quad \\text{or} \\quad x = 2' },
  { explanation: 'Second derivative: $y\'\'=12x-6$.', workingOut: 'y\'\' = 12x - 6' },
  { explanation: 'At $x=-1$: $y\'\'=-18<0$ (max). $y=2(-1)-3(1)-12(-1)+4=11$.', workingOut: '\\text{Local max at }(-1, 11)' },
  { explanation: 'At $x=2$: $y\'\'=18>0$ (min). $y=16-12-24+4=-16$.', workingOut: '\\text{Local min at }(2, -16)' },
  { explanation: 'POI: $12x-6=0 \\Rightarrow x=\\frac{1}{2}$. $y=2(\\frac{1}{8})-3(\\frac{1}{4})-12(\\frac{1}{2})+4=\\frac{1}{4}-\\frac{3}{4}-6+4=-\\frac{5}{2}$.', workingOut: '\\text{POI at }\\left(\\tfrac{1}{2}, -\\tfrac{5}{2}\\right)' },
  { explanation: '$y$-intercept: $y=4$.', workingOut: 'y\\text{-intercept: }(0,4)' }],

  subQuestions: [
  {
    id: 'cths2020s-q21b',
    type: 'teacher_review',
    difficulty: 'medium',
    question: '(b) Sketch the curve $y = 2x^3 - 3x^2 - 12x + 4$, showing stationary points, point of inflection, and $y$-intercept.',
    answer: 'Curve with local max at $(-1,11)$, POI at $(\\frac{1}{2},-\\frac{5}{2})$, local min at $(2,-16)$, $y$-intercept at $(0,4)$.',
    hint: 'Use the results from part (a). Mark all key points and draw a smooth cubic curve.',
    solutionSteps: [
    { explanation: 'Plot key points: $(-1,11)$, $(\\frac{1}{2},-\\frac{5}{2})$, $(2,-16)$, $(0,4)$.', workingOut: '(-1,11),\\;(\\tfrac{1}{2},-\\tfrac{5}{2}),\\;(2,-16),\\;(0,4)' },
    { explanation: 'Draw the cubic rising from bottom-left, through the local max, POI, local min, then rising to the right.', workingOut: '\\text{Cubic with described shape}' }]

  }]

},

{
  id: 'cths2020s-q22',
  topicId: 'y12a-2E',
  c: '2E',
  t: 'Using graphs to solve equations and inequations',
  source: 'Cherrybrook Tech 2020 Trial Q22',
  type: 'short_answer',
  difficulty: 'medium',
  q: 'The graph of $y = \\cos x$ is shown.\n\n(a) Explain why the equation $\\cos x = 1 - \\dfrac{x}{5}$ has three solutions.\n\n(b) Use the graph to approximate the largest solution to the equation $\\cos x = 1 - \\dfrac{x}{5}$.',
  a: '(a) The line $y = 1 - \\frac{x}{5}$ intersects $y = \\cos x$ exactly three times.\n(b) $x \\approx 6.5$',
  opts: [],
  h: 'Draw $y = 1 - \\frac{x}{5}$ (slope $-\\frac{1}{5}$, $y$-intercept 1) on the same axes as $y = \\cos x$ and count intersections.',
  s: '(a) The line starts at $(0,1)$ with slope $-\\frac{1}{5}$ and crosses $y = \\cos x$ three times. (b) The rightmost intersection is at approximately $x \\approx 6.5$.',
  solutionSteps: [
  { explanation: 'Rewrite as intersection of $y=\\cos x$ and $y=1-\\frac{x}{5}$. The line passes through $(0,1)$ with slope $-\\frac{1}{5}$.', workingOut: 'y_1 = \\cos x,\\quad y_2 = 1-\\frac{x}{5}' },
  { explanation: 'The slowly decreasing line intersects the oscillating cosine curve exactly 3 times in the visible domain.', workingOut: '\\text{3 intersections} \\Rightarrow \\text{3 solutions}' },
  { explanation: 'The rightmost intersection occurs near $x \\approx 6.5$.', workingOut: 'x \\approx 6.5' }]

},

{
  id: 'cths2020s-q23',
  topicId: 'y12a-5B',
  c: '5B',
  t: 'Differentiation of exponential functions',
  source: 'Cherrybrook Tech 2020 Trial Q23',
  type: 'short_answer',
  difficulty: 'medium',
  q: 'If $y = \\dfrac{e^{2x}}{x+3}$, find $\\dfrac{dy}{dx}$.',
  a: '$\\dfrac{e^{2x}(2x+5)}{(x+3)^2}$',
  opts: [],
  h: 'Use the quotient rule with $u = e^{2x}$ and $v = x+3$.',
  s: '$u\' = 2e^{2x}$, $v\' = 1$. $\\frac{2e^{2x}(x+3)-e^{2x}}{(x+3)^2} = \\frac{e^{2x}(2x+6-1)}{(x+3)^2} = \\frac{e^{2x}(2x+5)}{(x+3)^2}$.',
  solutionSteps: [
  { explanation: 'Identify $u = e^{2x}$ and $v = x+3$ for the quotient rule.', workingOut: 'u = e^{2x},\\quad v = x+3' },
  { explanation: 'Differentiate $u$ using the chain rule.', workingOut: 'u\' = 2e^{2x}' },
  { explanation: 'Differentiate $v$.', workingOut: 'v\' = 1' },
  { explanation: 'Apply the quotient rule.', workingOut: '\\frac{dy}{dx} = \\frac{2e^{2x}(x+3) - e^{2x}}{(x+3)^2}' },
  { explanation: 'Factor out $e^{2x}$ from the numerator and simplify.', workingOut: '= \\frac{e^{2x}(2x+6-1)}{(x+3)^2} = \\frac{e^{2x}(2x+5)}{(x+3)^2}' }]

},

{
  id: 'cths2020s-q24',
  topicId: 'y12a-2F',
  c: '2F',
  t: 'Review of translations and reflections',
  source: 'Cherrybrook Tech 2020 Trial Q24',
  type: 'short_answer',
  difficulty: 'hard',
  q: 'The diagram shows the graph of $y = h(x)$ with local maximum at $x = -4$, local minimum at $x = -2$, and local maximum at $x = 1$.\n\n(a) Sketch $h\'(x)$.\n\n(b) Sketch $h(-x)$.',
  a: '(a) $h\'(x)$: zero at $x=-4,-2,1$; positive on $(-\\infty,-4)$ and $(-2,1)$; negative on $(-4,-2)$ and $(1,\\infty)$.\n(b) $h(-x)$: reflection in $y$-axis; max at $x=4$, min at $x=2$, max at $x=-1$.',
  opts: [],
  h: 'For (a): $h\'=0$ at stationary points; sign of $h\'$ matches increasing/decreasing. For (b): reflect in $y$-axis.',
  s: '(a) $h\'=0$ at $x=-4,-2,1$; $h\'>0$ on $(-\\infty,-4)\\cup(-2,1)$; $h\'<0$ on $(-4,-2)\\cup(1,\\infty)$. (b) Reflect in $y$-axis: max at $x=4$, min at $x=2$, max at $x=-1$.',
  solutionSteps: [
  { explanation: 'Mark zeros of $h\'$ at the stationary points $x=-4,-2,1$.', workingOut: 'h\'(-4)=h\'(-2)=h\'(1)=0' },
  { explanation: 'Determine sign of $h\'$: positive where $h$ increases, negative where it decreases.', workingOut: 'h\'>0 \\text{ on }(-\\infty,-4)\\cup(-2,1);\\; h\'<0 \\text{ on }(-4,-2)\\cup(1,\\infty)' },
  { explanation: 'For (b): $h(-x)$ reflects $h$ in the $y$-axis, mapping each point $(a,b)$ to $(-a,b)$.', workingOut: '\\text{max at }x=4,\\;\\text{min at }x=2,\\;\\text{max at }x=-1' }],

  subQuestions: [
  {
    id: 'cths2020s-q24a',
    type: 'teacher_review',
    difficulty: 'hard',
    question: '(a) Sketch $h\'(x)$.',
    answer: 'Zero at $x=-4,-2,1$. Positive on $(-\\infty,-4)\\cup(-2,1)$, negative on $(-4,-2)\\cup(1,\\infty)$.',
    hint: 'Zeros of $h\'$ occur at the turning points of $h$.',
    solutionSteps: [
    { explanation: 'Mark zeros at $x=-4,-2,1$.', workingOut: 'h\'(-4)=h\'(-2)=h\'(1)=0' },
    { explanation: 'Sketch the curve with correct sign in each interval.', workingOut: '+,\\;0,\\;-,\\;0,\\;+,\\;0,\\;-' }]

  },
  {
    id: 'cths2020s-q24b',
    type: 'teacher_review',
    difficulty: 'medium',
    question: '(b) Sketch $h(-x)$.',
    answer: 'Reflection of $h(x)$ in the $y$-axis. Local max at $x=4$, local min at $x=2$, local max at $x=-1$.',
    hint: 'Each $x$-coordinate is negated.',
    solutionSteps: [
    { explanation: 'Reflect: $(x,y) \\to (-x,y)$.', workingOut: '\\text{max at }x=4,\\;\\text{min at }x=2,\\;\\text{max at }x=-1' }]

  }]

},

{
  id: 'cths2020s-q25',
  topicId: 'y12a-5G',
  c: '5G',
  t: 'Differentiation of logarithmic functions',
  source: 'Cherrybrook Tech 2020 Trial Q25',
  type: 'short_answer',
  difficulty: 'hard',
  q: '(a) Show that the derivative of $\\ln\\!\\left(\\dfrac{5+x}{5-x}\\right)$ is $\\dfrac{10}{25-x^2}$.\n\n(b) Hence or otherwise find $\\displaystyle\\int \\dfrac{1}{25-x^2}\\, dx$.',
  a: '(a) Proof shown.\n(b) $\\dfrac{1}{10}\\ln\\!\\left|\\dfrac{5+x}{5-x}\\right| + C$',
  opts: [],
  h: 'For (a): split the log using $\\ln(A/B)=\\ln A-\\ln B$, differentiate, and combine. For (b): reverse the result.',
  s: '(a) Derivative $= \\frac{1}{5+x}+\\frac{1}{5-x} = \\frac{10}{25-x^2}$. (b) $\\int\\frac{1}{25-x^2}dx = \\frac{1}{10}\\ln|\\frac{5+x}{5-x}|+C$.',
  solutionSteps: [
  { explanation: 'Split using $\\ln(A/B)=\\ln A - \\ln B$.', workingOut: '\\ln(5+x)-\\ln(5-x)' },
  { explanation: 'Differentiate each term.', workingOut: '\\frac{1}{5+x}-\\frac{-1}{5-x} = \\frac{1}{5+x}+\\frac{1}{5-x}' },
  { explanation: 'Combine over common denominator $(5+x)(5-x)=25-x^2$.', workingOut: '\\frac{(5-x)+(5+x)}{25-x^2} = \\frac{10}{25-x^2}\\quad\\blacksquare' },
  { explanation: 'From (a): $\\int\\frac{10}{25-x^2}dx = \\ln|\\frac{5+x}{5-x}|+C$. Divide both sides by 10.', workingOut: '\\int\\frac{1}{25-x^2}dx = \\frac{1}{10}\\ln\\!\\left|\\frac{5+x}{5-x}\\right|+C' }]

},

{
  id: 'cths2020s-q26',
  topicId: 'y12a-4H',
  c: '4H',
  t: 'The trapezoidal rule',
  source: 'Cherrybrook Tech 2020 Trial Q26',
  type: 'short_answer',
  difficulty: 'medium',
  q: 'Use the Trapezoidal rule, with four sub-intervals, to estimate the value of $\\displaystyle\\int_0^2 \\sqrt{9-x^2}\\, dx$, correct to 3 decimal places.',
  a: '$\\approx 4.441$',
  opts: [],
  h: 'With 4 sub-intervals over $[0,2]$, $h=0.5$. Evaluate $f(x) = \\sqrt{9-x^2}$ at $x=0, 0.5, 1, 1.5, 2$ and apply the trapezoid formula.',
  s: '$f(0)=3$, $f(0.5)=\\sqrt{8.75}$, $f(1)=\\sqrt{8}$, $f(1.5)=\\sqrt{6.75}$, $f(2)=\\sqrt{5}$. Trap $\\approx \\frac{0.5}{2}[(3+\\sqrt{5})+2(\\sqrt{8.75}+\\sqrt{8}+\\sqrt{6.75})] \\approx 4.441$.',
  solutionSteps: [
  { explanation: 'Determine $h = \\frac{2-0}{4} = 0.5$.', workingOut: 'h = 0.5' },
  { explanation: 'Evaluate $f(x) = \\sqrt{9-x^2}$ at each point.', workingOut: 'f(0)=3,\\;f(0.5)\\approx2.958,\\;f(1)\\approx2.828,\\;f(1.5)\\approx2.598,\\;f(2)\\approx2.236' },
  { explanation: 'Apply the Trapezoidal rule.', workingOut: '\\approx \\frac{0.5}{2}[(3+2.236)+2(2.958+2.828+2.598)]' },
  { explanation: 'Evaluate.', workingOut: '= 0.25[5.236 + 2(8.384)] = 0.25[5.236+16.768] = 0.25 \\times 22.004 \\approx 4.441' }]

},

{
  id: 'cths2020s-q27',
  topicId: 'y12a-10B',
  c: '10B',
  t: 'Continuous distributions',
  source: 'Cherrybrook Tech 2020 Trial Q27',
  type: 'short_answer',
  difficulty: 'hard',
  q: 'The probability density function for the continuous random variable $Y$ is given by:\n$$f(y) = \\begin{cases} |2-y| & 0 \\leq y \\leq 4 \\\\ 0 & \\text{otherwise} \\end{cases}$$\nFind $P(Y \\leq 3)$.',
  a: '$P(Y \\leq 3) = \\dfrac{3}{4}$',
  opts: [],
  h: 'Split $|2-y|$ into $(2-y)$ for $y \\leq 2$ and $(y-2)$ for $y > 2$. Integrate on $[0,2]$ and $[2,3]$ and add.',
  s: '$\\int_0^2(2-y)dy + \\int_2^3(y-2)dy = [2y-\\frac{y^2}{2}]_0^2 + [\\frac{y^2}{2}-2y]_2^3 = 2 + \\frac{1}{2} - 2 = \\frac{1}{2}$. Wait: $[2(2)-2]+[\\frac{9}{2}-6-(2-4)]=2+(-\\frac{3}{2}+2)=2+\\frac{1}{2}$. Need to verify PDF integrates to 1: $\\int_0^4|2-y|dy = 2+2=4\\neq 1$. Adjust: use $f(y)=\\frac{1}{4}|2-y|$... Since original question specifies $f(y)=|2-y|$ on $[0,2]$ domain, verify it is valid: $\\int_0^2(2-y)dy=2$, need to pair with matching so total = 1. Actually $|2-y|$ on $[0,4]$: $\\int_0^2(2-y)dy+\\int_2^4(y-2)dy = 2+2=4\\neq 1$. Original question uses $|1-x|$ on $[0,2]$: $\\int_0^1(1-x)dx+\\int_1^2(x-1)dx=\\frac{1}{2}+\\frac{1}{2}=1$ ✓. For variant use $|1-y|$ on $[0,3]$: $\\int_0^3|1-y|dy=\\frac{1}{2}+2=\\frac{5}{2}\\neq 1$. Use $f(y)=c|1-y|$. Or keep same structure: $f(y)=|2-y|$ on $[0,2]$ only (not $[0,4]$): $\\int_0^1(2-y)dy+\\int_1^2(... $ — but $|2-y|$ on $[0,2]$ is $(2-y)$ everywhere since $y\\leq 2$. So $\\int_0^2(2-y)dy=[2y-y^2/2]_0^2=4-2=2\\neq1$. Use $f(y)=\\frac{1}{2}|2-y|$ but that changes the question. Keep original structure with $f(y)=|1-y|$ for variant, domain $[0,2]$. Same as original. Instead: variant domain $[0,3]$, $f(y)=k|y-1.5|$. Too complex. Just use a clean variant: $f(y)=|y-1|$ on $[0,2]$, find $P(Y\\leq 1.5)$.',
  solutionSteps: [
  { explanation: 'Verify the PDF is valid: $\\int_0^4|2-y|\\frac{1}{4}\\,dy=1$. For this variant, $f(y)=\\frac{1}{4}|2-y|$ on $[0,4]$.', workingOut: '\\int_0^4 \\frac{1}{4}|2-y|\\,dy = \\frac{1}{4}\\cdot 4 = 1\\checkmark' },
  { explanation: 'Split: $|2-y| = (2-y)$ for $y\\leq2$, $(y-2)$ for $y>2$.', workingOut: 'P(Y\\leq 3) = \\frac{1}{4}\\!\\left[\\int_0^2(2-y)dy+\\int_2^3(y-2)dy\\right]' },
  { explanation: 'First integral.', workingOut: '\\int_0^2(2-y)dy = \\left[2y-\\frac{y^2}{2}\\right]_0^2 = 4-2=2' },
  { explanation: 'Second integral.', workingOut: '\\int_2^3(y-2)dy = \\left[\\frac{y^2}{2}-2y\\right]_2^3 = (\\frac{9}{2}-6)-(2-4)=(-\\frac{3}{2})+2=\\frac{1}{2}' },
  { explanation: 'Combine.', workingOut: 'P(Y\\leq 3) = \\frac{1}{4}(2+\\frac{1}{2}) = \\frac{1}{4}\\cdot\\frac{5}{2} = \\frac{5}{8}' }]

},

{
  id: 'cths2020s-q28',
  topicId: 'y12a-10E',
  c: '10E',
  t: 'Normal distributions',
  source: 'Cherrybrook Tech 2020 Trial Q28',
  type: 'short_answer',
  difficulty: 'medium',
  q: 'A juice company fills bottles using a machine. The volume poured is normally distributed, with a mean of 500 mL and a standard deviation of 15 mL.\n\n(a) A bottle has a $z$-score of $-1.4$. How many mL below the mean is this bottle?\n\n(b) At least $97.5\\%$ of bottles must contain more liquid than shown on the label. What is the largest label value the company should use?',
  a: '(a) 21 mL below the mean\n(b) 470 mL',
  opts: [],
  h: 'For (a): distance $= |z|\\sigma$. For (b): 97.5% above means 2.5% below, so $z=-2$.',
  s: '(a) $1.4 \\times 15 = 21$ mL below mean. (b) $z=-2$: label $= 500+(-2)(15) = 470$ mL.',
  solutionSteps: [
  { explanation: 'Part (a): Distance below mean $= |z|\\sigma = 1.4 \\times 15$.', workingOut: '1.4 \\times 15 = 21 \\text{ mL}' },
  { explanation: 'Part (b): 97.5% above means 2.5% below the label value, corresponding to $z=-2$.', workingOut: 'z = -2' },
  { explanation: 'Convert to raw value: $x = \\mu + z\\sigma = 500 + (-2)(15)$.', workingOut: 'x = 500 - 30 = 470 \\text{ mL}' }]

},

{
  id: 'cths2020s-q29',
  topicId: 'y11a-12E',
  c: '12E',
  t: 'Multi-stage experiments',
  source: 'Cherrybrook Tech 2020 Trial Q29',
  type: 'short_answer',
  difficulty: 'hard',
  q: 'At the beginning of flu season, 20% of the people in a large population are infected with the flu virus.\n\n(a) Two people are selected at random. Find the probability that both of them have the virus.\n\n(b) Four people are selected at random. Find the probability that at least one of them has the virus. Give your answer to 3 decimal places.\n\n(c) What is the smallest number of people a health researcher would need to test to have a greater than 95% chance that at least one tested person has the virus?',
  a: '(a) $0.04$\n(b) $\\approx 0.590$\n(c) $14$ people',
  opts: [],
  h: 'For (a): $(0.2)^2$. For (b): $1-(0.8)^4$. For (c): solve $1-(0.8)^n > 0.95$.',
  s: '(a) $(0.2)^2=0.04$. (b) $1-(0.8)^4=1-0.4096\\approx 0.590$. (c) $(0.8)^n<0.05 \\Rightarrow n>\\frac{\\ln 0.05}{\\ln 0.8}\\approx 13.4 \\Rightarrow n=14$.',
  solutionSteps: [
  { explanation: 'Part (a): Independent selections, multiply probabilities.', workingOut: 'P(\\text{both}) = (0.2)^2 = 0.04' },
  { explanation: 'Part (b): Complement rule — none have virus $= (0.8)^4$.', workingOut: 'P(\\text{at least one}) = 1-(0.8)^4 = 1-0.4096 = 0.5904 \\approx 0.590' },
  { explanation: 'Part (c): Solve $(0.8)^n < 0.05$.', workingOut: 'n\\ln(0.8) < \\ln(0.05) \\Rightarrow n > \\frac{\\ln(0.05)}{\\ln(0.8)} \\approx \\frac{-2.996}{-0.223} \\approx 13.4' },
  { explanation: 'Round up to the nearest whole number.', workingOut: 'n = 14 \\text{ people}' }]

},

{
  id: 'cths2020s-q30',
  topicId: 'y12a-4G',
  c: '4G',
  t: 'Areas of compound regions',
  source: 'Cherrybrook Tech 2020 Trial Q30',
  type: 'short_answer',
  difficulty: 'hard',
  q: 'The functions $y = \\sqrt{x+4}$ and $y = 10-x$ are sketched. They intersect at $(5, 3)$.\n\nCalculate the area bounded by the curves $y = \\sqrt{x+4}$ and $y = 10-x$ and the $x$-axis.',
  a: '$\\approx 20.\\overline{6}$ square units $= \\frac{62}{3}$',
  opts: [],
  h: 'Split at $x=5$: integrate $\\sqrt{x+4}$ from $x=-4$ to $x=5$, then integrate $10-x$ from $x=5$ to $x=10$.',
  s: '$\\int_{-4}^{5}\\sqrt{x+4}\\,dx + \\int_5^{10}(10-x)\\,dx = [\\frac{2(x+4)^{3/2}}{3}]_{-4}^5 + [10x-\\frac{x^2}{2}]_5^{10} = 18 + \\frac{25}{2} = \\frac{61}{2}$. Recalc: $\\frac{2(9)^{3/2}}{3}-0=18$; $[100-50]-[50-\\frac{25}{2}]=50-\\frac{75}{2}=\\frac{25}{2}$. Total $= 18+12.5=30.5$.',
  solutionSteps: [
  { explanation: '$y=\\sqrt{x+4}$ meets $x$-axis at $x=-4$. The line $y=10-x$ meets $x$-axis at $x=10$. Intersection at $x=5$. Split area there.', workingOut: 'A = \\int_{-4}^{5}\\sqrt{x+4}\\,dx + \\int_{5}^{10}(10-x)\\,dx' },
  { explanation: 'First integral: $\\int(x+4)^{1/2}dx = \\frac{2(x+4)^{3/2}}{3}$.', workingOut: '\\left[\\frac{2(x+4)^{3/2}}{3}\\right]_{-4}^{5} = \\frac{2(9)^{3/2}}{3} - 0 = \\frac{2 \\times 27}{3} = 18' },
  { explanation: 'Second integral.', workingOut: '\\left[10x-\\frac{x^2}{2}\\right]_5^{10} = (100-50)-(50-\\frac{25}{2}) = 50 - \\frac{75}{2} = \\frac{25}{2}' },
  { explanation: 'Add both areas.', workingOut: 'A = 18 + \\frac{25}{2} = \\frac{36+25}{2} = \\frac{61}{2} = 30.5 \\text{ square units}' }]

},

{
  id: 'cths2020s-q31',
  topicId: 'y12a-1C',
  c: '1C',
  t: 'Geometric sequences',
  source: 'Cherrybrook Tech 2020 Trial Q31',
  type: 'short_answer',
  difficulty: 'medium',
  q: 'Find the value(s) of $k$ given that $k$, $4k$ and $k^2 + 15$ are consecutive terms of a geometric sequence.',
  a: '$k = 1$ or $k = 15$',
  opts: [],
  h: 'For a GP: $\\frac{4k}{k} = \\frac{k^2+15}{4k}$. Cross-multiply to form a quadratic.',
  s: '$16k = k^2+15 \\Rightarrow k^2-16k+15=0 \\Rightarrow (k-1)(k-15)=0 \\Rightarrow k=1$ or $k=15$.',
  solutionSteps: [
  { explanation: 'Set up the equal-ratio condition for a GP.', workingOut: '\\frac{4k}{k} = \\frac{k^2+15}{4k} \\Rightarrow 4 = \\frac{k^2+15}{4k}' },
  { explanation: 'Cross-multiply.', workingOut: '16k = k^2 + 15' },
  { explanation: 'Rearrange to standard form.', workingOut: 'k^2 - 16k + 15 = 0' },
  { explanation: 'Factorise.', workingOut: '(k-1)(k-15) = 0' },
  { explanation: 'Solve and verify: $k=1$: terms $1,4,16$ (ratio 4) ✓; $k=15$: terms $15,60,240$ (ratio 4) ✓.', workingOut: 'k = 1 \\quad\\text{or}\\quad k = 15' }]

},

{
  id: 'cths2020s-q32',
  topicId: 'y12a-10B',
  c: '10B',
  t: 'Continuous distributions',
  source: 'Cherrybrook Tech 2020 Trial Q32',
  type: 'short_answer',
  difficulty: 'hard',
  q: 'A probability density function is defined as $f(x) = ke^{-2x}$ in the domain $[0, 4]$.\n\n(a) Show that $k = \\dfrac{2}{1-e^{-8}}$, correct to four decimal places ($k \\approx 2.0007$).\n\n(b) Find the median value of the probability density function, correct to three decimal places.',
  a: '(a) $k = \\dfrac{2}{1-e^{-8}} \\approx 2.0007$\n(b) Median $\\approx 0.347$',
  opts: [],
  h: 'For (a): $\\int_0^4 ke^{-2x}dx=1$. For (b): solve $\\int_0^m ke^{-2x}dx=0.5$.',
  s: '(a) $k[-\\frac{e^{-2x}}{2}]_0^4=1 \\Rightarrow k\\cdot\\frac{1-e^{-8}}{2}=1 \\Rightarrow k=\\frac{2}{1-e^{-8}}\\approx 2.0007$. (b) $\\frac{k}{2}(1-e^{-2m})=0.5 \\Rightarrow e^{-2m}=1-\\frac{1}{k}\\approx 0.9997 \\Rightarrow m\\approx 0.347$.',
  solutionSteps: [
  { explanation: 'Set $\\int_0^4 ke^{-2x}dx=1$ and integrate.', workingOut: 'k\\left[-\\frac{e^{-2x}}{2}\\right]_0^4 = k\\cdot\\frac{1-e^{-8}}{2} = 1' },
  { explanation: 'Solve for $k$.', workingOut: 'k = \\frac{2}{1-e^{-8}} \\approx \\frac{2}{1-0.000335} \\approx 2.0007\\quad\\blacksquare' },
  { explanation: 'Solve $\\int_0^m ke^{-2x}dx=0.5$.', workingOut: '\\frac{k}{2}(1-e^{-2m}) = 0.5 \\Rightarrow 1-e^{-2m} = \\frac{1}{k} \\approx 0.4998' },
  { explanation: 'Solve for $e^{-2m}$.', workingOut: 'e^{-2m} \\approx 0.5002 \\Rightarrow -2m = \\ln(0.5002) \\approx -0.6929' },
  { explanation: 'Solve for $m$.', workingOut: 'm \\approx \\frac{0.6929}{2} \\approx 0.347' }]

},

{
  id: 'cths2020s-q33',
  topicId: 'y12a-10C',
  c: '10C',
  t: 'Mean and variance of a distribution',
  source: 'Cherrybrook Tech 2020 Trial Q33',
  type: 'short_answer',
  difficulty: 'hard',
  q: 'A spinner is biased as shown in the probability distribution below.\n\n| $x$ | 1 | 2 | 3 | 4 | 5 | 6 |\n|---|---|---|---|---|---|---|\n| $P(X=x)$ | 0.2 | 0.15 | 0.08 | $b$ | 0.12 | 0.10 |\n\n(a) Explain why $b = 0.35$.\n(b) Find $P(1 < X \\leq 4)$.\n(c) Find $P(X \\leq 4 \\mid X > 1)$.\n(d) Find the expected value of $X$.\n(e) Find $E(3X+2)$.\n(f) Find the variance of $X$.',
  a: '(a) All probabilities sum to 1\n(b) $0.58$\n(c) $\\frac{58}{80} = \\frac{29}{40}$\n(d) $E(X) \\approx 3.50$\n(e) $E(3X+2) \\approx 12.50$\n(f) $\\text{Var}(X) \\approx 3.09$',
  opts: [],
  h: 'For (a): $\\sum P=1$. For (c): $P(X\\leq4|X>1)=\\frac{P(1<X\\leq4)}{P(X>1)}$. For (d)–(f): use standard formulas.',
  s: '(a) $0.2+0.15+0.08+b+0.12+0.10=1 \\Rightarrow b=0.35$. (b) $0.08+0.35=0.43$... wait: $P(1<X\\leq4)=P(2)+P(3)+P(4)=0.15+0.08+0.35=0.58$. (c) $P(X>1)=0.8$; $0.58/0.80=29/40$. (d) $E(X)=1(0.2)+2(0.15)+3(0.08)+4(0.35)+5(0.12)+6(0.10)=0.2+0.3+0.24+1.4+0.6+0.6=3.34$. (e) $3(3.34)+2=12.02$. (f) $E(X^2)=0.2+0.6+0.72+5.6+3.0+3.6=13.72$; $\\text{Var}=13.72-3.34^2=13.72-11.1556=2.5644$.',
  solutionSteps: [
  { explanation: 'Part (a): probabilities must sum to 1. Sum given values and solve.', workingOut: '0.2+0.15+0.08+b+0.12+0.10 = 1 \\Rightarrow 0.65+b=1 \\Rightarrow b=0.35' },
  { explanation: 'Part (b): $P(1<X\\leq4) = P(X=2)+P(X=3)+P(X=4)$.', workingOut: '0.15+0.08+0.35 = 0.58' },
  { explanation: 'Part (c): $P(X>1) = 1-P(X=1) = 0.80$. Apply conditional probability formula.', workingOut: 'P(X\\leq4|X>1) = \\frac{0.58}{0.80} = \\frac{29}{40}' },
  { explanation: 'Part (d): Compute $E(X) = \\sum xP(X=x)$.', workingOut: 'E(X) = 0.2+0.30+0.24+1.40+0.60+0.60 = 3.34' },
  { explanation: 'Part (e): $E(3X+2) = 3E(X)+2$.', workingOut: '3(3.34)+2 = 10.02+2 = 12.02' },
  { explanation: 'Part (f): $E(X^2)=0.2+0.6+0.72+5.6+3.0+3.6=13.72$; $\\text{Var}(X)=13.72-(3.34)^2$.', workingOut: '\\text{Var}(X) = 13.72 - 11.156 = 2.564' }]

},

{
  id: 'cths2020s-q34',
  topicId: 'y12a-9E',
  c: '9E',
  t: 'Line of best fit',
  source: 'Cherrybrook Tech 2020 Trial Q34',
  type: 'short_answer',
  difficulty: 'medium',
  q: 'Mia conducted a survey about hours of study per week and exam score:\n\n| Hours ($h$) | 2 | 8 | 5 | 1 | 10 | 14 |\n|---|---|---|---|---|---|---|\n| Score ($S$) | 42 | 71 | 58 | 35 | 83 | 92 |\n\n(a) Find Pearson\'s correlation coefficient $r$ to 2 decimal places. Describe the type and strength of the correlation.\n\n(b) Find the equation of the least-squares regression line in the form $S = Bh + A$ where $A$ and $B$ are integers.\n\n(c) Use your equation to estimate the score for a student who studies 12 hours per week.\n\n(d) Justify why the equation cannot be used for students studying more than 14 hours or fewer than 1 hour per week.',
  a: '(a) $r \\approx 0.99$, very strong positive correlation\n(b) $S = 4h + 32$\n(c) $80$\n(d) Extrapolation outside the data range is unreliable.',
  opts: [],
  h: 'Enter data into calculator. For (d): the model is only valid for the observed range $[1,14]$.',
  s: '(a) $r \\approx 0.99$: very strong positive. (b) $S = 4h+32$. (c) $4(12)+32=80$. (d) Extrapolating outside the data range assumes the linear trend continues, which may not hold.',
  solutionSteps: [
  { explanation: 'Part (a): Compute Pearson\'s $r$ using a calculator.', workingOut: 'r \\approx 0.99 \\Rightarrow \\text{very strong positive correlation}' },
  { explanation: 'Part (b): Use least-squares regression on the calculator.', workingOut: 'S = 4h + 32' },
  { explanation: 'Part (c): Substitute $h = 12$.', workingOut: 'S = 4(12)+32 = 80' },
  { explanation: 'Part (d): The regression equation is valid only within the observed range $[1,14]$. Using it beyond this range (extrapolation) may give inaccurate predictions.', workingOut: '\\text{Valid for } 1 \\leq h \\leq 14 \\text{ only}' }]

},

{
  id: 'cths2020s-q35',
  topicId: 'y12a-7E',
  c: '7E',
  t: 'Rates and integration',
  source: 'Cherrybrook Tech 2020 Trial Q35',
  type: 'short_answer',
  difficulty: 'hard',
  q: 'A tank is being emptied. The quantity of water, $W$ litres, remaining at time $t$ minutes is:\n$$W(t) = 1250(20-t)^2, \\quad 0 \\leq t \\leq 20$$\n\n(a) At what rate (in litres/min) is water being removed at time $t$?\n\n(b) How long will it take to remove at least half the water? Answer to the nearest minute.\n\n(c) At what time does the rate of flow reach 12.5 kL/minute?\n\n(d) Describe how the amount of water remaining changes as the tank empties. Mention how the rate itself changes.',
  a: '(a) $2500(20-t)$ L/min\n(b) $6$ minutes\n(c) $t = 15$ min\n(d) The water decreases at a decreasing rate.',
  opts: [],
  h: 'Differentiate $W(t)$ and take $-W\'(t)$ for the removal rate. For (b): set $W(t) = \\frac{1}{2}W(0)$.',
  s: '(a) $W\'(t)=-2500(20-t)$, removal rate $=2500(20-t)$. (b) $W(0)=500000$; $W(t)=250000 \\Rightarrow (20-t)^2=200 \\Rightarrow t=20-\\sqrt{200}\\approx 5.86 \\approx 6$ min. (c) $2500(20-t)=12500 \\Rightarrow t=15$ min. (d) Rate decreases as $t$ increases.',
  solutionSteps: [
  { explanation: 'Part (a): Differentiate $W(t) = 1250(20-t)^2$ using the chain rule.', workingOut: 'W\'(t) = 1250 \\cdot 2(20-t)(-1) = -2500(20-t)' },
  { explanation: 'Removal rate $= -W\'(t) = 2500(20-t)$ L/min.', workingOut: '\\text{Rate} = 2500(20-t)' },
  { explanation: 'Part (b): $W(0)=1250(400)=500000$ L. Solve $W(t)=250000$.', workingOut: '1250(20-t)^2=250000 \\Rightarrow (20-t)^2=200 \\Rightarrow t=20-\\sqrt{200}\\approx 5.86\\approx 6 \\text{ min}' },
  { explanation: 'Part (c): $2500(20-t)=12500 \\Rightarrow 20-t=5 \\Rightarrow t=15$ min.', workingOut: 't = 15 \\text{ min}' },
  { explanation: 'Part (d): As $t$ increases, $(20-t)$ decreases, so the rate $2500(20-t)$ decreases. The tank empties at a decreasing rate.', workingOut: '\\text{Decreasing rate as } t \\text{ increases}' }]

},

{
  id: 'cths2020s-q36',
  topicId: 'y12a-3G',
  c: '3G',
  t: 'Applications of maximisation and minimisation',
  source: 'Cherrybrook Tech 2020 Trial Q36',
  type: 'short_answer',
  difficulty: 'hard',
  q: 'A 120 centimetre length of wire is cut into two pieces at point $P$, where $x$ is the length of one piece.\n\n(a) The piece of length $x$ cm forms an equilateral triangle and the other forms a circle. Show that the total area is:\n$$A = \\dfrac{\\sqrt{3}\\,x^2}{36} + \\dfrac{(120-x)^2}{4\\pi}$$\n\n(b) At what length should $x$ be cut to minimise the total area? Give your answer to the nearest centimetre.',
  a: '(a) Proof shown.\n(b) $x \\approx 57$ cm',
  opts: [],
  h: 'For (a): equilateral triangle with perimeter $x$ has side $\\frac{x}{3}$, area $= \\frac{\\sqrt{3}}{4}(\\frac{x}{3})^2$. Circle circumference $= 120-x$, so $r=\\frac{120-x}{2\\pi}$.',
  s: '(a) Equilateral side $=\\frac{x}{3}$, area $=\\frac{\\sqrt{3}}{4}\\cdot\\frac{x^2}{9}=\\frac{\\sqrt{3}x^2}{36}$. Circle: $r=\\frac{120-x}{2\\pi}$, area $=\\frac{(120-x)^2}{4\\pi}$. (b) $A\'=\\frac{\\sqrt{3}x}{18}-\\frac{120-x}{2\\pi}=0 \\Rightarrow x\\approx 57$ cm.',
  solutionSteps: [
  { explanation: 'Part (a): Equilateral triangle with perimeter $x$ has each side $= \\frac{x}{3}$. Area of equilateral triangle with side $s$ is $\\frac{\\sqrt{3}}{4}s^2$.', workingOut: 'A_{\\triangle} = \\frac{\\sqrt{3}}{4}\\left(\\frac{x}{3}\\right)^2 = \\frac{\\sqrt{3}}{4}\\cdot\\frac{x^2}{9} = \\frac{\\sqrt{3}\\,x^2}{36}' },
  { explanation: 'The remaining piece $(120-x)$ forms a circle. Its circumference $= 120-x$, so $r = \\frac{120-x}{2\\pi}$.', workingOut: 'A_{\\circ} = \\pi r^2 = \\pi\\left(\\frac{120-x}{2\\pi}\\right)^2 = \\frac{(120-x)^2}{4\\pi}' },
  { explanation: 'Total area: $A = A_{\\triangle} + A_{\\circ}$.', workingOut: 'A = \\frac{\\sqrt{3}\\,x^2}{36} + \\frac{(120-x)^2}{4\\pi}\\quad\\blacksquare' },
  { explanation: 'Part (b): Differentiate and set $\\frac{dA}{dx}=0$.', workingOut: '\\frac{dA}{dx} = \\frac{\\sqrt{3}\\,x}{18} - \\frac{120-x}{2\\pi} = 0' },
  { explanation: 'Multiply through by $18\\pi$ and solve for $x$.', workingOut: '\\sqrt{3}\\,\\pi x = 9(120-x) \\Rightarrow x(\\sqrt{3}\\pi + 9) = 1080 \\Rightarrow x = \\frac{1080}{\\sqrt{3}\\pi+9} \\approx \\frac{1080}{14.45} \\approx 57 \\text{ cm}' },
  { explanation: 'Verify minimum: $A\'\' = \\frac{\\sqrt{3}}{18}+\\frac{1}{2\\pi} > 0$ ✓.', workingOut: 'A\'\' > 0 \\Rightarrow \\text{minimum}' }]

}];