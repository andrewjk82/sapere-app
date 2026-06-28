/**
 * Fort Street 2020 HSC Trial — SIMILAR (variant) questions.
 * Same topics, structure and difficulty as the originals, with changed
 * numbers, pronumerals and contexts. Paired 1:1 with FORTST_2020_QUESTIONS.
 */
export const FORTST_2020_SIMILAR_QUESTIONS = [

// ─── SECTION I: MULTIPLE CHOICE ───────────────────────────────────────────

{
  id: 'fortst2020s-mc1',
  topicId: 'y12a-1B',
  c: '1B',
  t: 'Arithmetic sequences',
  source: 'Fort Street 2020 Trial Q1',
  type: 'multiple_choice',
  difficulty: 'easy',
  q: 'The fourth term of an arithmetic series is $40$ and the seventh term is $19$. What is the common difference?',
  a: "0",
  opts: ['$-7$', '$7$', '$19$', '$61$'],
  h: 'Write $T_4$ and $T_7$ using $T_n = a + (n-1)d$ and subtract.',
  s: '$T_4 = a + 3d = 40$ and $T_7 = a + 6d = 19$. Subtracting: $3d = -21$, so $d = -7$.',
  solutionSteps: [
  { explanation: 'Write the fourth and seventh terms with the arithmetic formula.', workingOut: 'a + 3d = 40, \\quad a + 6d = 19' },
  { explanation: 'Subtract the first from the second to eliminate $a$.', workingOut: '3d = 19 - 40 = -21' },
  { explanation: 'Solve for $d$.', workingOut: 'd = -7' }]

},

{
  id: 'fortst2020s-mc2',
  topicId: 'y11a-5G',
  c: '5G',
  t: 'Combining transformations',
  source: 'Fort Street 2020 Trial Q2',
  type: 'multiple_choice',
  difficulty: 'medium',
  q: 'The graph of $f(x) = 2x^{7/2}$ is reflected in the $x$-axis, then translated $2$ units right and $5$ units down. The equation of the transformed function is:',
  a: "1",
  opts: [
  '$y = 2(-x-2)^{7/2} - 5$',
  '$y = -2(x-2)^{7/2} - 5$',
  '$y = -2(x+2)^{7/2} - 5$',
  '$y = 2(-x+2)^{7/2} - 5$'],

  h: 'Reflect ($y \\to -y$), replace $x \\to x-2$, then subtract $5$.',
  s: 'Reflection: $y = -2x^{7/2}$. Right $2$: $y = -2(x-2)^{7/2}$. Down $5$: $y = -2(x-2)^{7/2} - 5$.',
  solutionSteps: [
  { explanation: 'Reflect in the $x$-axis by negating the function.', workingOut: 'y = -2x^{7/2}' },
  { explanation: 'Translate $2$ right by replacing $x$ with $x - 2$.', workingOut: 'y = -2(x-2)^{7/2}' },
  { explanation: 'Translate $5$ down by subtracting $5$.', workingOut: 'y = -2(x-2)^{7/2} - 5' }]

},

{
  id: 'fortst2020s-mc3',
  topicId: 'y11a-11B',
  c: '11B',
  t: 'Solving trigonometric equations',
  source: 'Fort Street 2020 Trial Q3',
  type: 'multiple_choice',
  difficulty: 'hard',
  q: 'What is the solution to $\\cos 2x = \\dfrac{\\sqrt{3}}{2}$ in the domain $[-\\pi, \\pi]$?',
  a: "1",
  opts: [
  '$x = \\dfrac{\\pi}{6}, \\dfrac{5\\pi}{6}, \\dfrac{-5\\pi}{6}, \\dfrac{-\\pi}{6}$',
  '$x = \\dfrac{\\pi}{12}, \\dfrac{11\\pi}{12}, \\dfrac{-11\\pi}{12}, \\dfrac{-\\pi}{12}$',
  '$x = \\dfrac{\\pi}{12}, \\dfrac{13\\pi}{12}, \\dfrac{7\\pi}{12}, \\dfrac{11\\pi}{12}$',
  '$x = \\dfrac{\\pi}{6}, \\dfrac{11\\pi}{6}, \\dfrac{13\\pi}{6}, \\dfrac{23\\pi}{6}$'],

  h: 'Let $u = 2x$, $-2\\pi \\le u \\le 2\\pi$; reference angle $\\frac{\\pi}{6}$.',
  s: 'With $u = 2x \\in [-2\\pi, 2\\pi]$, $\\cos u = \\frac{\\sqrt3}{2}$ gives $u = \\pm\\frac{\\pi}{6}, \\pm\\frac{11\\pi}{6}$. Then $x = \\pm\\frac{\\pi}{12}, \\pm\\frac{11\\pi}{12}$.',
  solutionSteps: [
  { explanation: 'Substitute $u = 2x$ and expand the domain.', workingOut: '-2\\pi \\le u \\le 2\\pi' },
  { explanation: 'Reference angle for $\\cos u = \\frac{\\sqrt3}{2}$ is $\\frac{\\pi}{6}$ (Q1/Q4).', workingOut: 'u = \\pm\\frac{\\pi}{6}, \\; \\pm\\frac{11\\pi}{6}' },
  { explanation: 'Divide by $2$ to find $x$.', workingOut: 'x = \\pm\\frac{\\pi}{12}, \\; \\pm\\frac{11\\pi}{12}' }]

},

{
  id: 'fortst2020s-mc4',
  topicId: 'y12a-4H',
  c: '4H',
  t: 'The trapezoidal rule',
  source: 'Fort Street 2020 Trial Q4',
  type: 'multiple_choice',
  difficulty: 'medium',
  q: 'A garden has vertical heights (m) $3, 5, 6, 4$ and $0$ at points spaced $4$ m apart. What is the approximate area using the trapezoidal rule with $4$ intervals?',
  a: "2",
  opts: ['$30 \\text{ m}^2$', '$60 \\text{ m}^2$', '$66 \\text{ m}^2$', '$72 \\text{ m}^2$'],
  graphData: {
    jsxGraph: {
      width: 420,
      height: 300,
      boundingbox: [-2.5, 8, 18.5, -1.5],
      boardOptions: { keepaspectratio: false },
      script: "board.suspendUpdate();\nboard.create('segment', [[0,0],[16,0]], {strokeColor:'black'});\nvar ord=[[0,3],[4,5],[8,6],[12,4]];\nfor(var i=0;i<ord.length;i++){ board.create('segment', [[ord[i][0],0],ord[i]], {strokeColor:'black', dash: i===0?0:2}); }\nboard.create('functiongraph', [function(x){ var pts=[[0,3],[4,5],[8,6],[12,4],[16,0]]; for(var j=0;j<pts.length-1;j++){ if(x>=pts[j][0]&&x<=pts[j+1][0]){ var t=(x-pts[j][0])/(pts[j+1][0]-pts[j][0]); return pts[j][1]+t*(pts[j+1][1]-pts[j][1]); } } return 0; }, 0, 16], {strokeColor:'#1d4ed8',strokeWidth:2});\nboard.create('text',[-1.2,1.5,'3'],{fontSize:11});board.create('text',[4.3,2.6,'5'],{fontSize:11});board.create('text',[8.3,3.1,'6'],{fontSize:11});board.create('text',[12.3,2.1,'4'],{fontSize:11});\nboard.create('text',[1.7,-1,'4'],{fontSize:11});board.create('text',[5.7,-1,'4'],{fontSize:11});board.create('text',[9.7,-1,'4'],{fontSize:11});board.create('text',[13.7,-1,'4'],{fontSize:11});\nboard.unsuspendUpdate();"
    }
  },
  h: 'Use $A \\approx \\frac{h}{2}[y_1 + y_5 + 2(y_2 + y_3 + y_4)]$ with $h = 4$.',
  s: '$A \\approx \\frac{4}{2}[3 + 0 + 2(5 + 6 + 4)] = 2[3 + 30] = 66 \\text{ m}^2$.',
  solutionSteps: [
  { explanation: 'State the trapezoidal rule with $h = 4$, first/last ordinates once and interior ones twice.', workingOut: 'A \\approx \\frac{4}{2}[y_1 + y_5 + 2(y_2 + y_3 + y_4)]' },
  { explanation: 'Substitute the five ordinates $3, 5, 6, 4, 0$.', workingOut: '= 2[3 + 0 + 2(5 + 6 + 4)]' },
  { explanation: 'Simplify and evaluate.', workingOut: '= 2[3 + 30] = 66 \\text{ m}^2' }]

},

{
  id: 'fortst2020s-mc5',
  topicId: 'y11a-3H',
  c: '3H',
  t: 'Two graphs that have asymptotes',
  source: 'Fort Street 2020 Trial Q5',
  type: 'multiple_choice',
  difficulty: 'medium',
  q: 'What is the domain and range of the function $y = \\dfrac{1}{\\sqrt{x - 4}}$?',
  a: "1",
  opts: [
  'Domain: $[4, \\infty)$, Range: $(0, \\infty)$',
  'Domain: $(4, \\infty)$, Range: $(0, \\infty)$',
  'Domain: $[-\\infty, \\infty]$, Range: $[-\\infty, \\infty]$',
  'Domain: $[-2, 2]$, Range: $(-\\infty, 0)$'],

  h: 'The square root in the denominator needs $x - 4 > 0$ strictly.',
  s: 'We need $x - 4 > 0$, so $x > 4$, giving domain $(4, \\infty)$. The output is always positive, so range $(0, \\infty)$.',
  solutionSteps: [
  { explanation: 'The denominator $\\sqrt{x-4}$ requires $x - 4 > 0$ (cannot be zero).', workingOut: 'x > 4' },
  { explanation: 'State the domain.', workingOut: '\\text{Domain} = (4, \\infty)' },
  { explanation: 'The reciprocal of a positive square root is always positive.', workingOut: '\\text{Range} = (0, \\infty)' }]

},

{
  id: 'fortst2020s-mc6',
  topicId: 'y11a-7B',
  c: '7B',
  t: 'Gradients',
  source: 'Fort Street 2020 Trial Q6',
  type: 'multiple_choice',
  difficulty: 'medium',
  q: 'At what angle is the line $y = \\sqrt{3}\\,x$ inclined to the positive side of the $x$-axis?',
  a: "1",
  opts: ['$30°$', '$60°$', '$120°$', '$150°$'],
  h: 'Use $\\tan\\theta = m$; a positive gradient gives an acute angle.',
  s: 'The gradient is $m = \\sqrt{3}$, so $\\tan\\theta = \\sqrt{3}$, giving $\\theta = 60°$ (acute, since the gradient is positive).',
  solutionSteps: [
  { explanation: 'The angle of inclination satisfies $\\tan\\theta = m$.', workingOut: '\\tan\\theta = \\sqrt{3}' },
  { explanation: 'A positive gradient means an acute angle.', workingOut: '\\theta = \\tan^{-1}(\\sqrt{3}) = 60°' }]

},

{
  id: 'fortst2020s-mc7',
  topicId: 'y12a-3B',
  c: '3B',
  t: 'Stationary points and turning points',
  source: 'Fort Street 2020 Trial Q7',
  type: 'multiple_choice',
  difficulty: 'hard',
  q: 'The diagram shows a sketch of the gradient function $y = f\'(x)$. Which statement about $y = f(x)$ is true?',
  a: "2",
  opts: [
  'A minimum turning point at $x = 3$',
  'A horizontal point of inflexion at $x = -1$',
  'A horizontal point of inflexion at $x = 3$',
  'A minimum turning point at $x = -1$'],

  graphData: {
    jsxGraph: {
      width: 440,
      height: 300,
      boundingbox: [-3.5, 8, 5.5, -5],
      boardOptions: { keepaspectratio: false },
      script: "board.suspendUpdate();\nboard.create('arrow', [[-3.5,0],[5.5,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-5],[0,8]], {strokeColor:'black'});\nboard.create('functiongraph', [function(x){ return 0.22*Math.pow(x-3,2)*(x+1); }, -2.6, 4.4], {strokeColor:'#1d4ed8',strokeWidth:2});\nboard.create('point', [3,0], {name:'', size:2, color:'#475569', fixed:true});\nboard.create('point', [-1,0], {name:'', size:2, color:'#475569', fixed:true});\nboard.create('text', [2.7, -0.8, '3'], {fontSize:11});\nboard.create('text', [-1.3, -0.8, '-1'], {fontSize:11});\nboard.create('text', [4.9, 0.5, 'x'], {fontSize:13});\nboard.create('text', [0.25, 7.3, 'y'], {fontSize:13});\nboard.create('text', [3.4, 6, \"y = f'(x)\"], {fontSize:12, strokeColor:'#1d4ed8'});\nboard.unsuspendUpdate();"
    }
  },
  h: 'A double root of $f\'$ (touch) gives a horizontal point of inflexion of $f$; a simple root (cross) gives a turning point.',
  s: 'At $x = 3$, $f\'$ touches the axis (no sign change), so $f$ has a horizontal point of inflexion. At $x = -1$, $f\'$ crosses the axis, giving a turning point. Hence the true statement is a horizontal point of inflexion at $x = 3$.',
  solutionSteps: [
  { explanation: 'Stationary points occur where $f\'(x) = 0$: at $x = -1$ and $x = 3$.', workingOut: "f'(x) = 0 \\text{ at } x = -1, \\; 3" },
  { explanation: 'At $x = 3$ the curve touches the axis (double root), so $f\'$ does not change sign — a horizontal point of inflexion.', workingOut: 'x = 3: \\text{ touch} \\Rightarrow \\text{horizontal inflexion}' },
  { explanation: 'At $x = -1$ the curve crosses the axis, so it is a turning point.', workingOut: 'x = -1: \\text{ cross} \\Rightarrow \\text{turning point}' }]

},

{
  id: 'fortst2020s-mc8',
  topicId: 'y11a-11C',
  c: '11C',
  t: 'Arcs and sectors',
  source: 'Fort Street 2020 Trial Q8',
  type: 'multiple_choice',
  difficulty: 'medium',
  q: '$AOB$ is a sector of a circle, centre $O$ and radius $4$ cm, with area $4\\pi \\text{ cm}^2$. What is the arc length of the sector, in centimetres?',
  a: "1",
  opts: ['$\\pi$', '$2\\pi$', '$4\\pi$', '$8\\pi$'],
  graphData: {
    jsxGraph: {
      width: 320,
      height: 320,
      boundingbox: [-1.5, 5, 5.5, -1.5],
      boardOptions: { keepaspectratio: true },
      script: "board.suspendUpdate();\nvar O=[0,0];\nvar B=[4,0];\nvar A=[0,4];\nboard.create('sector', [O, B, A], {fillColor:'#cbd5e1', fillOpacity:0.35, strokeColor:'#475569', strokeWidth:1.5});\nboard.create('segment', [O, B], {strokeColor:'black'});\nboard.create('segment', [O, A], {strokeColor:'black'});\nboard.create('point', O, {name:'O', size:2, color:'black', fixed:true, label:{offset:[-10,-8]}});\nboard.create('point', A, {name:'A', size:2, color:'black', fixed:true, label:{offset:[-4,12]}});\nboard.create('point', B, {name:'B', size:2, color:'black', fixed:true, label:{offset:[8,-2]}});\nboard.create('text', [2, -0.4, '4 cm'], {fontSize:12});\nboard.unsuspendUpdate();"
    }
  },
  h: 'Find $\\theta$ from $A = \\frac{1}{2}r^2\\theta$, then $\\ell = r\\theta$.',
  s: '$4\\pi = \\frac{1}{2}(16)\\theta \\Rightarrow \\theta = \\frac{\\pi}{2}$. Then $\\ell = 4\\times\\frac{\\pi}{2} = 2\\pi$.',
  solutionSteps: [
  { explanation: 'Use the sector area formula to find $\\theta$.', workingOut: '4\\pi = \\frac{1}{2}(4)^2\\theta \\Rightarrow \\theta = \\frac{\\pi}{2}' },
  { explanation: 'Apply the arc-length formula $\\ell = r\\theta$.', workingOut: '\\ell = 4\\times\\frac{\\pi}{2} = 2\\pi \\text{ cm}' }]

},

{
  id: 'fortst2020s-mc9',
  topicId: 'y12a-10C',
  c: '10C',
  t: 'Mean and variance of a distribution',
  source: 'Fort Street 2020 Trial Q9',
  type: 'multiple_choice',
  difficulty: 'medium',
  q: 'A discrete random variable $X$ has $P(X{=}0)=a$, $P(X{=}1)=2a$, $P(X{=}2)=4a$, $P(X{=}3)=8a$. The expected value of $X$ is:',
  a: "2",
  opts: ['$\\dfrac{1}{15}$', '$2$', '$\\dfrac{34}{15}$', '$\\dfrac{17}{15}$'],
  h: 'Find $a$ from $\\sum P = 1$, then compute $E(X) = \\sum x\\,P(x)$.',
  s: '$a + 2a + 4a + 8a = 15a = 1 \\Rightarrow a = \\frac{1}{15}$. $E(X) = 0 + 2a + 8a + 24a = 34a = \\frac{34}{15}$.',
  solutionSteps: [
  { explanation: 'Sum the probabilities to find $a$.', workingOut: '15a = 1 \\Rightarrow a = \\frac{1}{15}' },
  { explanation: 'Apply $E(X) = \\sum x\\,P(x)$.', workingOut: 'E(X) = 1(2a) + 2(4a) + 3(8a) = 34a' },
  { explanation: 'Substitute $a$.', workingOut: 'E(X) = \\frac{34}{15}' }]

},

{
  id: 'fortst2020s-mc10',
  topicId: 'y12a-3H',
  c: '3H',
  t: 'Primitive functions',
  source: 'Fort Street 2020 Trial Q10',
  type: 'multiple_choice',
  difficulty: 'hard',
  q: 'If $f\'(x) = 3x^2 - 9$, which of the following could represent $y = f(x)$? (Option B is a positive cubic with a local maximum then a local minimum.)',
  a: "1",
  opts: [
  'An upward parabola (Option A)',
  'A positive cubic with a max then a min (Option B)',
  'A straight line (Option C)',
  'A monotonic increasing cubic (Option D)'],

  h: 'Integrate: $f(x) = x^3 - 9x + C$, a cubic with two turning points.',
  s: 'Integrating, $f(x) = x^3 - 9x + C$. $f\'(x) = 3x^2 - 9 = 0$ gives $x = \\pm\\sqrt{3}$, two turning points — a positive cubic with a maximum then a minimum (Option B).',
  solutionSteps: [
  { explanation: 'Integrate $f\'(x)$ to find $f(x)$.', workingOut: 'f(x) = \\int (3x^2 - 9)\\,dx = x^3 - 9x + C' },
  { explanation: 'Find the turning points by setting $f\'(x) = 0$.', workingOut: '3x^2 - 9 = 0 \\Rightarrow x = \\pm\\sqrt{3}' },
  { explanation: 'A positive cubic with two turning points has a maximum then a minimum — Option B.', workingOut: '\\text{positive cubic, max then min}' },
  { explanation: 'Shape of $y = x^3 - 9x$ confirming two turning points.', workingOut: '',
    graphData: {
      jsxGraph: {
        width: 360,
        height: 300,
        boundingbox: [-4.5, 14, 4.5, -14],
        boardOptions: { keepaspectratio: false },
        script: "board.suspendUpdate();\nboard.create('arrow', [[-4.5,0],[4.5,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-14],[0,14]], {strokeColor:'black'});\nboard.create('functiongraph', [function(x){ return x*x*x - 9*x; }, -3.5, 3.5], {strokeColor:'#1d4ed8',strokeWidth:2});\nboard.create('text', [4.1, 0.8, 'x'], {fontSize:13});\nboard.create('text', [0.3, 12.8, 'y'], {fontSize:13});\nboard.unsuspendUpdate();"
      }
    }
  }]

},

// ─── SECTION II — PART A ───────────────────────────────────────────────────

{
  id: 'fortst2020s-q1a',
  topicId: 'y11a-6J',
  c: '6J',
  t: 'Problems with general triangles',
  source: 'Fort Street 2020 Trial Q1(a)',
  type: 'short_answer',
  difficulty: 'medium',
  q: 'From $A$, Mia rows $1200$ m on a bearing of $060°$ to $B$, then turns onto a bearing of $130°$ for $1.8$ km to $C$, then returns to $A$. What is the size of $\\angle ABC$?',
  a: '$\\angle ABC = 110°$',
  opts: [],
  graphData: {
    geometry: {
      width: 300,
      points: { "A": [0, 0], "B": [2.6, 2.4], "C": [5.2, -2.0] },
      segments: [
      { from: "A", to: "B" },
      { from: "B", to: "C" },
      { from: "C", to: "A" }],

      sideLabels: [
      { between: ["A", "B"], text: "1200 m" },
      { between: ["B", "C"], text: "1.8 km" }]

    }
  },
  h: 'The back-bearing of $A$ from $B$ is $060° + 180°$. Subtract the bearing of $C$ from $B$.',
  s: 'Bearing of $A$ from $B$ $= 060° + 180° = 240°$. Bearing of $C$ from $B$ $= 130°$. So $\\angle ABC = 240° - 130° = 110°$.',
  solutionSteps: [
  { explanation: 'Find the back-bearing of $A$ from $B$.', workingOut: '60° + 180° = 240°' },
  { explanation: 'Subtract the bearing of $C$ from $B$.', workingOut: '\\angle ABC = 240° - 130° = 110°' }]

},

{
  id: 'fortst2020s-q1b',
  topicId: 'y11a-6I',
  c: '6I',
  t: 'The cosine rule',
  source: 'Fort Street 2020 Trial Q1(b)',
  type: 'short_answer',
  difficulty: 'medium',
  q: 'Calculate $AC$ ($AB = 1200$ m, $BC = 1800$ m, $\\angle ABC = 110°$). Answer to the nearest metre.',
  a: '$AC \\approx 2481$ m',
  opts: [],
  h: 'Apply the cosine rule with the included angle $110°$.',
  s: '$AC^2 = 1200^2 + 1800^2 - 2(1200)(1800)\\cos 110° = 6\\,157\\,440$, so $AC \\approx 2481$ m.',
  solutionSteps: [
  { explanation: 'State the cosine rule for $AC$.', workingOut: 'AC^2 = AB^2 + BC^2 - 2\\,AB\\cdot BC\\cos(\\angle ABC)' },
  { explanation: 'Substitute the values.', workingOut: 'AC^2 = 1200^2 + 1800^2 - 2(1200)(1800)\\cos 110°' },
  { explanation: 'Evaluate.', workingOut: 'AC^2 \\approx 6\\,157\\,440' },
  { explanation: 'Take the square root and round.', workingOut: 'AC \\approx 2481 \\text{ m}' }]

},

{
  id: 'fortst2020s-q2a',
  topicId: 'y12a-5B',
  c: '5B',
  t: 'Differentiation of e^x',
  source: 'Fort Street 2020 Trial Q2(a)',
  type: 'short_answer',
  difficulty: 'medium',
  q: 'Differentiate $\\dfrac{e^{2x}}{x-2}$, simplifying your answer.',
  a: '$\\dfrac{e^{2x}(2x-5)}{(x-2)^2}$',
  opts: [],
  h: 'Quotient rule with $u = e^{2x}$ ($u\' = 2e^{2x}$), $v = x-2$.',
  s: '$\\frac{dy}{dx} = \\frac{(x-2)(2e^{2x}) - e^{2x}}{(x-2)^2} = \\frac{e^{2x}(2x - 4 - 1)}{(x-2)^2} = \\frac{e^{2x}(2x-5)}{(x-2)^2}$.',
  solutionSteps: [
  { explanation: 'Set up the quotient rule.', workingOut: 'u = e^{2x}, \\; u\' = 2e^{2x}; \\quad v = x-2, \\; v\' = 1' },
  { explanation: 'Substitute.', workingOut: '\\frac{dy}{dx} = \\frac{(x-2)(2e^{2x}) - e^{2x}}{(x-2)^2}' },
  { explanation: 'Factor $e^{2x}$ and simplify the numerator.', workingOut: '= \\frac{e^{2x}(2x - 5)}{(x-2)^2}' }]

},

{
  id: 'fortst2020s-q2b',
  topicId: 'y12a-6B',
  c: '6B',
  t: 'Differentiating the trigonometric functions',
  source: 'Fort Street 2020 Trial Q2(b)',
  type: 'short_answer',
  difficulty: 'medium',
  q: 'Differentiate $\\cot x\\sin x$, simplifying your answer.',
  a: '$-\\sin x$',
  opts: [],
  h: 'Simplify first: $\\cot x\\sin x = \\dfrac{\\cos x}{\\sin x}\\cdot\\sin x = \\cos x$.',
  s: 'Since $\\cot x\\sin x = \\frac{\\cos x}{\\sin x}\\cdot\\sin x = \\cos x$, the derivative is $\\frac{d}{dx}(\\cos x) = -\\sin x$.',
  solutionSteps: [
  { explanation: 'Simplify using $\\cot x = \\frac{\\cos x}{\\sin x}$.', workingOut: '\\cot x\\sin x = \\cos x' },
  { explanation: 'Differentiate.', workingOut: '\\frac{d}{dx}(\\cos x) = -\\sin x' }]

},

{
  id: 'fortst2020s-q2c',
  topicId: 'y12a-5K',
  c: '5K',
  t: 'Calculus with other bases',
  source: 'Fort Street 2020 Trial Q2(c)',
  type: 'short_answer',
  difficulty: 'medium',
  q: 'Differentiate $\\log_3(x^2 + 5)$.',
  a: '$\\dfrac{2x}{(\\ln 3)(x^2 + 5)}$',
  opts: [],
  h: 'Use $\\frac{d}{dx}\\log_a u = \\frac{u\'}{(\\ln a)\\,u}$.',
  s: '$\\frac{dy}{dx} = \\frac{2x}{(\\ln 3)(x^2 + 5)}$.',
  solutionSteps: [
  { explanation: 'Apply the log-derivative rule with $a = 3$, $u = x^2 + 5$, $u\' = 2x$.', workingOut: '\\frac{dy}{dx} = \\frac{2x}{(\\ln 3)(x^2 + 5)}' }]

},

{
  id: 'fortst2020s-q3a',
  topicId: 'y12a-6D',
  c: '6D',
  t: 'Integrating the trigonometric functions',
  source: 'Fort Street 2020 Trial Q3(a)',
  type: 'short_answer',
  difficulty: 'easy',
  q: 'Find $\\displaystyle\\int \\cos\\!\\left(\\dfrac{x}{4}\\right) dx$.',
  a: '$4\\sin\\!\\left(\\dfrac{x}{4}\\right) + C$',
  opts: [],
  h: 'The primitive of $\\cos(ax)$ is $\\frac{1}{a}\\sin(ax)$, with $a = \\frac{1}{4}$.',
  s: '$\\int \\cos\\!\\left(\\frac{x}{4}\\right) dx = 4\\sin\\!\\left(\\frac{x}{4}\\right) + C$.',
  solutionSteps: [
  { explanation: 'Use $\\int \\cos(ax)\\,dx = \\frac{1}{a}\\sin(ax)$ with $a = \\frac{1}{4}$ (divide by $\\frac14$, i.e. multiply by $4$).', workingOut: '\\int \\cos\\!\\left(\\frac{x}{4}\\right) dx = 4\\sin\\!\\left(\\frac{x}{4}\\right) + C' }]

},

{
  id: 'fortst2020s-q3b',
  topicId: 'y12a-4E',
  c: '4E',
  t: 'The indefinite integral',
  source: 'Fort Street 2020 Trial Q3(b)',
  type: 'short_answer',
  difficulty: 'medium',
  q: 'Find $\\displaystyle\\int x^3(x^4 - 3)^2\\,dx$.',
  a: '$\\dfrac{1}{12}(x^4 - 3)^3 + C$',
  opts: [],
  h: 'Reverse chain rule: derivative of $x^4 - 3$ is $4x^3$.',
  s: 'Since $\\frac{d}{dx}(x^4-3) = 4x^3$, $\\int x^3(x^4-3)^2 dx = \\frac{1}{12}(x^4-3)^3 + C$.',
  solutionSteps: [
  { explanation: 'Identify the inner function $u = x^4 - 3$, with $u\' = 4x^3$.', workingOut: '\\frac{d}{dx}(x^4 - 3) = 4x^3' },
  { explanation: 'Apply the reverse chain rule (raise power to $3$, divide by $3 \\times 4 = 12$).', workingOut: '= \\frac{1}{12}(x^4 - 3)^3 + C' }]

},

{
  id: 'fortst2020s-q4',
  topicId: 'y12a-5J',
  c: '5J',
  t: 'Applications of integration of the logarithmic function',
  source: 'Fort Street 2020 Trial Q4',
  type: 'short_answer',
  difficulty: 'hard',
  q: 'Evaluate exactly $\\displaystyle\\int_0^1 \\dfrac{x-1}{x^2 - 2x + 5}\\,dx$, simplifying your answer fully.',
  a: '$\\ln\\!\\left(\\dfrac{2}{\\sqrt{5}}\\right)$',
  opts: [],
  h: 'The derivative of the denominator is $2x - 2 = 2(x-1)$; use $\\int\\frac{f\'}{f} = \\ln f$.',
  s: '$\\int_0^1 \\frac{x-1}{x^2-2x+5}dx = \\frac{1}{2}[\\ln(x^2-2x+5)]_0^1 = \\frac{1}{2}(\\ln 4 - \\ln 5) = \\frac{1}{2}\\ln\\frac{4}{5} = \\ln\\frac{2}{\\sqrt5}$.',
  solutionSteps: [
  { explanation: 'Rewrite the numerator as $\\frac{1}{2}(2x-2)$ to match the derivative of the denominator.', workingOut: '= \\frac{1}{2}\\int_0^1 \\frac{2x-2}{x^2-2x+5}dx' },
  { explanation: 'Integrate using $\\int\\frac{f\'}{f} = \\ln|f|$.', workingOut: '= \\frac{1}{2}[\\ln(x^2-2x+5)]_0^1' },
  { explanation: 'Substitute the limits: at $x=1$, $4$; at $x=0$, $5$.', workingOut: '= \\frac{1}{2}(\\ln 4 - \\ln 5)' },
  { explanation: 'Combine and simplify with a square root.', workingOut: '= \\frac{1}{2}\\ln\\frac{4}{5} = \\ln\\frac{2}{\\sqrt5}' }]

},

// ─── SECTION II — PART B ───────────────────────────────────────────────────

{
  id: 'fortst2020s-q5',
  topicId: 'y11a-1D',
  c: '1D',
  t: 'Solving quadratic equations',
  source: 'Fort Street 2020 Trial Q5',
  type: 'short_answer',
  difficulty: 'medium',
  q: 'For what values of $k$ does $3x^2 - 4x + (2k - 7) = 0$ have real roots?',
  a: '$k \\leq \\dfrac{25}{6}$',
  opts: [],
  h: 'Real roots require $\\Delta = b^2 - 4ac \\geq 0$.',
  s: '$\\Delta = (-4)^2 - 4(3)(2k-7) \\geq 0 \\Rightarrow 16 - 24k + 84 \\geq 0 \\Rightarrow 100 \\geq 24k \\Rightarrow k \\leq \\frac{25}{6}$.',
  solutionSteps: [
  { explanation: 'For real roots the discriminant is non-negative.', workingOut: '\\Delta = b^2 - 4ac \\geq 0' },
  { explanation: 'Substitute $a = 3$, $b = -4$, $c = 2k - 7$.', workingOut: '16 - 4(3)(2k - 7) \\geq 0' },
  { explanation: 'Expand.', workingOut: '16 - 24k + 84 \\geq 0' },
  { explanation: 'Solve for $k$.', workingOut: '100 \\geq 24k \\Rightarrow k \\leq \\frac{25}{6}' }]

},

{
  id: 'fortst2020s-q6',
  topicId: 'y11a-3H',
  c: '3H',
  t: 'Two graphs that have asymptotes',
  source: 'Fort Street 2020 Trial Q6',
  type: 'teacher_review',
  difficulty: 'medium',
  q: 'Sketch the graph of $y = 3 - \\dfrac{6}{x-2}$, showing all intercepts and asymptotes.',
  a: 'Hyperbola with vertical asymptote $x = 2$, horizontal asymptote $y = 3$, $x$-intercept $(4, 0)$ and $y$-intercept $(0, 6)$.',
  opts: [],
  h: 'Vertical asymptote where denominator is zero; horizontal asymptote is the constant; find intercepts.',
  s: 'Vertical asymptote $x = 2$; horizontal asymptote $y = 3$. $x$-intercept: $0 = 3 - \\frac{6}{x-2} \\Rightarrow x = 4$. $y$-intercept: $x = 0 \\Rightarrow y = 3 + 3 = 6$.',
  solutionSteps: [
  { explanation: 'Vertical asymptote where the denominator is zero.', workingOut: 'x - 2 = 0 \\Rightarrow x = 2' },
  { explanation: 'Horizontal asymptote as $x \\to \\pm\\infty$.', workingOut: 'y = 3' },
  { explanation: 'Find intercepts.', workingOut: 'x\\text{-int}: x = 4; \\quad y\\text{-int}: y = 6' },
  { explanation: 'Sketch the hyperbola with asymptotes and intercepts.', workingOut: '',
    graphData: {
      jsxGraph: {
        width: 400,
        height: 360,
        boundingbox: [-7, 11, 11, -7],
        boardOptions: { keepaspectratio: false },
        script: "board.suspendUpdate();\nboard.create('arrow', [[-7,0],[11,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-7],[0,11]], {strokeColor:'black'});\nboard.create('line', [[2,-7],[2,11]], {strokeColor:'#94a3b8', dash:2, straightFirst:false, straightLast:false});\nboard.create('line', [[-7,3],[11,3]], {strokeColor:'#94a3b8', dash:2, straightFirst:false, straightLast:false});\nboard.create('functiongraph', [function(x){ return 3 - 6/(x-2); }, -7, 1.5], {strokeColor:'#1d4ed8',strokeWidth:2});\nboard.create('functiongraph', [function(x){ return 3 - 6/(x-2); }, 2.5, 11], {strokeColor:'#1d4ed8',strokeWidth:2});\nboard.create('point', [4,0], {name:'(4, 0)', size:2.5, color:'red', fixed:true, label:{offset:[6,-12]}});\nboard.create('point', [0,6], {name:'(0, 6)', size:2.5, color:'red', fixed:true, label:{offset:[-14,8]}});\nboard.create('text', [-3.4, 3.6, 'y = 3'], {fontSize:11});\nboard.create('text', [2.3, -5.5, 'x = 2'], {fontSize:11});\nboard.create('text', [10.4, 0.5, 'x'], {fontSize:13});\nboard.create('text', [0.3, 10.3, 'y'], {fontSize:13});\nboard.unsuspendUpdate();"
      }
    }
  }]

},

{
  id: 'fortst2020s-q7',
  topicId: 'y12a-9A',
  c: '9A',
  t: 'The language of statistics',
  source: 'Fort Street 2020 Trial Q7',
  type: 'short_answer',
  difficulty: 'hard',
  q: 'Two box-and-whisker plots show fish lengths (cm): Riverside (median $\\approx 8$, symmetric, range $\\approx 7$) and Lakeside (median $\\approx 5$, positively skewed, range $\\approx 17$). Compare and contrast the two data sets by shape/skewness, location and spread.',
  a: 'Riverside is symmetric with a higher median ($\\approx 8$ vs $\\approx 5$) and smaller spread; Lakeside is positively skewed with a much larger range, so its lengths are more spread out and less consistent.',
  opts: [],
  graphData: {
    jsxGraph: {
      width: 460,
      height: 280,
      boundingbox: [-3, 6, 23, -3],
      boardOptions: { keepaspectratio: false },
      script: "board.suspendUpdate();\nfunction box(y,mn,q1,med,q3,mx,label){ board.create('polygon',[[q1,y-0.5],[q3,y-0.5],[q3,y+0.5],[q1,y+0.5]],{fillColor:'#cbd5e1',fillOpacity:0.4,borders:{strokeColor:'#475569'},vertices:{visible:false},fixed:true}); board.create('segment',[[med,y-0.5],[med,y+0.5]],{strokeColor:'#1d4ed8',strokeWidth:2}); board.create('segment',[[mn,y],[q1,y]],{strokeColor:'#475569'}); board.create('segment',[[q3,y],[mx,y]],{strokeColor:'#475569'}); board.create('segment',[[mn,y-0.25],[mn,y+0.25]],{strokeColor:'#475569'}); board.create('segment',[[mx,y-0.25],[mx,y+0.25]],{strokeColor:'#475569'}); board.create('text',[mn-2.8,y-0.2,label],{fontSize:10}); }\nbox(3.5, 4.5, 6, 8, 10, 11.5, 'Riverside');\nbox(1.2, 2, 3.5, 5, 9, 19, 'Lakeside');\nfor(var t=0;t<=22;t+=2){ board.create('text',[t-0.2,-1.4,''+t],{fontSize:9}); }\nboard.create('text',[8, -2.4, 'Fish length (cm)'],{fontSize:11});\nboard.unsuspendUpdate();"
    }
  },
  h: 'Comment on shape/skew, medians (location), and range/IQR (spread), interpreting in context.',
  s: 'Shape: Riverside is symmetric; Lakeside is positively (right) skewed. Location: Riverside has the higher median ($\\approx 8$ vs $\\approx 5$). Spread: Lakeside has the larger range ($\\approx 17$ vs $\\approx 7$), so its fish lengths are more spread out and less consistent.',
  solutionSteps: [
  { explanation: 'Compare shape and skewness.', workingOut: '\\text{Riverside: symmetric}; \\quad \\text{Lakeside: positively skewed}' },
  { explanation: 'Compare location using the medians.', workingOut: '\\text{median}_R \\approx 8 > \\text{median}_L \\approx 5' },
  { explanation: 'Compare spread using the range.', workingOut: '\\text{range}_L \\approx 17 > \\text{range}_R \\approx 7' },
  { explanation: 'Interpret: Lakeside fish lengths are more variable and generally smaller.', workingOut: '\\text{Lakeside: more spread out, less consistent}' }]

},

{
  id: 'fortst2020s-q8',
  topicId: 'y12a-5G',
  c: '5G',
  t: 'Differentiation of logarithmic functions',
  source: 'Fort Street 2020 Trial Q8',
  type: 'short_answer',
  difficulty: 'hard',
  q: 'Find the equation of the normal to the curve $y = \\ln\\!\\left(\\dfrac{4x-3}{x}\\right)$ at the point where $x = 1$.',
  a: '$x + 3y - 1 = 0$',
  opts: [],
  h: 'Use log laws: $y = \\ln(4x-3) - \\ln x$, differentiate, evaluate at $x = 1$, take the negative reciprocal.',
  s: '$y = \\ln(4x-3) - \\ln x$, so $\\frac{dy}{dx} = \\frac{4}{4x-3} - \\frac{1}{x}$. At $x = 1$: $4 - 1 = 3$ (tangent), so normal gradient $-\\frac{1}{3}$. At $x = 1$, $y = \\ln 1 = 0$. Normal: $y = -\\frac{1}{3}(x - 1) \\Rightarrow x + 3y - 1 = 0$.',
  solutionSteps: [
  { explanation: 'Split using log laws.', workingOut: 'y = \\ln(4x-3) - \\ln x' },
  { explanation: 'Differentiate.', workingOut: '\\frac{dy}{dx} = \\frac{4}{4x-3} - \\frac{1}{x}' },
  { explanation: 'Evaluate the tangent gradient at $x = 1$.', workingOut: '4 - 1 = 3' },
  { explanation: 'Normal gradient is the negative reciprocal; find the point ($y = \\ln 1 = 0$).', workingOut: 'm_{\\text{normal}} = -\\frac{1}{3}, \\quad (1, 0)' },
  { explanation: 'Use point–gradient form and rearrange.', workingOut: 'y = -\\frac{1}{3}(x-1) \\Rightarrow x + 3y - 1 = 0' }]

},

{
  id: 'fortst2020s-q9',
  topicId: 'y11a-3G',
  c: '3G',
  t: 'Powers, cubics, and circles',
  source: 'Fort Street 2020 Trial Q9',
  type: 'short_answer',
  difficulty: 'medium',
  q: 'A circle is given by $x^2 + y^2 - 6x + 8y = -9$. Find the centre and radius.',
  a: 'Centre $(3, -4)$, radius $4$',
  opts: [],
  h: 'Complete the square in $x$ and $y$.',
  s: '$(x^2 - 6x + 9) + (y^2 + 8y + 16) = -9 + 9 + 16 \\Rightarrow (x-3)^2 + (y+4)^2 = 16$. Centre $(3, -4)$, radius $4$.',
  solutionSteps: [
  { explanation: 'Group and complete the square (add $9$ for $x$, $16$ for $y$).', workingOut: '(x^2 - 6x + 9) + (y^2 + 8y + 16) = -9 + 9 + 16' },
  { explanation: 'Write as perfect squares.', workingOut: '(x - 3)^2 + (y + 4)^2 = 16' },
  { explanation: 'Read off the centre and radius.', workingOut: '\\text{Centre } (3, -4), \\quad r = 4' }]

},

// ─── SECTION II — PART C ───────────────────────────────────────────────────

{
  id: 'fortst2020s-q10a',
  topicId: 'y11a-3D',
  c: '3D',
  t: 'Quadratic functions',
  source: 'Fort Street 2020 Trial Q10(a)',
  type: 'short_answer',
  difficulty: 'easy',
  q: 'Let $f(x) = (x+3)(x-1)^3$. Find the $x$- and $y$-intercepts of $y = f(x)$.',
  a: '$x$-intercepts $(-3, 0)$ and $(1, 0)$; $y$-intercept $(0, -3)$',
  opts: [],
  h: 'Set $y = 0$ for $x$-intercepts; set $x = 0$ for the $y$-intercept.',
  s: '$x$-intercepts: $x = -3, 1$. $y$-intercept: $f(0) = (3)(-1)^3 = -3$.',
  solutionSteps: [
  { explanation: 'Set the function to zero for $x$-intercepts.', workingOut: '(x+3)(x-1)^3 = 0 \\Rightarrow x = -3, \\; 1' },
  { explanation: 'Substitute $x = 0$ for the $y$-intercept.', workingOut: 'f(0) = (3)(-1)^3 = -3' }]

},

{
  id: 'fortst2020s-q10b',
  topicId: 'y12a-3C',
  c: '3C',
  t: 'Second and higher derivatives',
  source: 'Fort Street 2020 Trial Q10(b)',
  type: 'short_answer',
  difficulty: 'medium',
  q: 'For $f(x) = (x+3)(x-1)^3$, show that $f\'(x) = 4(x-1)^2(x+2)$ and $f\'\'(x) = 12(x-1)(x+1)$.',
  a: '$f\'(x) = 4(x-1)^2(x+2)$ and $f\'\'(x) = 12(x-1)(x+1)$',
  opts: [],
  h: 'Product rule, then factor out $(x-1)^2$; differentiate again for $f\'\'$.',
  s: '$f\'(x) = (x-1)^3 + (x+3)\\cdot 3(x-1)^2 = (x-1)^2[(x-1)+3(x+3)] = (x-1)^2(4x+8) = 4(x-1)^2(x+2)$. Then $f\'\'(x) = 4[2(x-1)(x+2)+(x-1)^2] = 4(x-1)(3x+3) = 12(x-1)(x+1)$.',
  solutionSteps: [
  { explanation: 'Differentiate with the product rule.', workingOut: "f'(x) = (x-1)^3 + (x+3)\\cdot 3(x-1)^2" },
  { explanation: 'Factor out $(x-1)^2$ and simplify.', workingOut: "= (x-1)^2(4x + 8) = 4(x-1)^2(x+2)" },
  { explanation: 'Differentiate again, factor out $(x-1)$.', workingOut: "f''(x) = 4(x-1)[2(x+2)+(x-1)] = 4(x-1)(3x+3)" },
  { explanation: 'Simplify.', workingOut: "= 12(x-1)(x+1)" }]

},

{
  id: 'fortst2020s-q10c',
  topicId: 'y12a-3B',
  c: '3B',
  t: 'Stationary points and turning points',
  source: 'Fort Street 2020 Trial Q10(c)',
  type: 'short_answer',
  difficulty: 'hard',
  q: 'For $f(x) = (x+3)(x-1)^3$ (with $f\'(x) = 4(x-1)^2(x+2)$, $f\'\'(x) = 12(x-1)(x+1)$), find the stationary points and determine their nature.',
  a: '$(-2, -27)$ is a minimum; $(1, 0)$ is a horizontal point of inflexion.',
  opts: [],
  h: 'Solve $f\'(x) = 0$, then test with $f\'\'$ (and a sign table where $f\'\' = 0$).',
  s: '$f\'(x) = 0 \\Rightarrow x = -2$ or $x = 1$. $f(-2) = -27$, $f(1) = 0$. $f\'\'(-2) = 12(-3)(-1) = 36 > 0 \\Rightarrow$ minimum. $f\'\'(1) = 0$; concavity changes around $x = 1$, so $(1, 0)$ is a horizontal point of inflexion.',
  solutionSteps: [
  { explanation: 'Find the stationary points.', workingOut: '4(x-1)^2(x+2) = 0 \\Rightarrow x = -2, \\; 1' },
  { explanation: 'Find the $y$-values.', workingOut: 'f(-2) = (1)(-3)^3 = -27; \\quad f(1) = 0' },
  { explanation: 'Test $x = -2$ with the second derivative.', workingOut: "f''(-2) = 12(-3)(-1) = 36 > 0 \\Rightarrow \\text{min}" },
  { explanation: 'At $x = 1$, $f\'\'(1) = 0$; a concavity table shows a sign change, so it is a horizontal inflexion.', workingOut: '(-2,-27)\\text{ min}, \\; (1,0)\\text{ horizontal inflexion}' }]

},

{
  id: 'fortst2020s-q10d',
  topicId: 'y12a-3D',
  c: '3D',
  t: 'Concavity and points of inflection',
  source: 'Fort Street 2020 Trial Q10(d)',
  type: 'short_answer',
  difficulty: 'medium',
  q: 'For $f(x) = (x+3)(x-1)^3$ (with $f\'\'(x) = 12(x-1)(x+1)$), find all points of inflection.',
  a: 'Points of inflection at $(-1, -16)$ and $(1, 0)$',
  opts: [],
  h: 'Set $f\'\'(x) = 0$ and confirm a concavity change at each.',
  s: '$f\'\'(x) = 12(x-1)(x+1) = 0 \\Rightarrow x = 1$ or $x = -1$. $(1, 0)$ is the horizontal inflexion. For $x = -1$: concavity changes, and $f(-1) = (2)(-2)^3 = -16$, so $(-1, -16)$ is also a point of inflection.',
  solutionSteps: [
  { explanation: 'Find candidate inflection points where $f\'\'(x) = 0$.', workingOut: '12(x-1)(x+1) = 0 \\Rightarrow x = 1, \\; -1' },
  { explanation: 'Find $f(-1)$ and confirm a concavity change there.', workingOut: 'f(-1) = (2)(-2)^3 = -16 \\Rightarrow (-1, -16)' },
  { explanation: 'State all points of inflection.', workingOut: '(-1, -16) \\text{ and } (1, 0)' }]

},

{
  id: 'fortst2020s-q10e',
  topicId: 'y12a-3E',
  c: '3E',
  t: 'Systematic curve sketching with the derivative',
  source: 'Fort Street 2020 Trial Q10(e)',
  type: 'teacher_review',
  difficulty: 'medium',
  q: 'Sketch the graph of $y = f(x) = (x+3)(x-1)^3$, showing the intercepts, the minimum and the points of inflection.',
  a: 'Positive quartic through $(-3,0)$ and $(1,0)$, $y$-intercept $(0,-3)$, minimum $(-2,-27)$, inflections $(-1,-16)$ and a horizontal one at $(1,0)$.',
  opts: [],
  h: 'Plot $(-3,0),(1,0),(0,-3)$, the minimum $(-2,-27)$, and the horizontal inflexion at $(1,0)$.',
  s: 'A positive quartic. Features: $x$-intercepts $(-3,0),(1,0)$; $y$-intercept $(0,-3)$; minimum $(-2,-27)$; point of inflection $(-1,-16)$; horizontal point of inflection $(1,0)$. Both ends rise to $+\\infty$.',
  solutionSteps: [
  { explanation: 'Collect the features from parts (a), (c) and (d).', workingOut: '(-3,0),(1,0),(0,-3),(-2,-27)\\text{ min}' },
  { explanation: 'Note the end behaviour of a positive quartic.', workingOut: 'x \\to \\pm\\infty \\Rightarrow f(x) \\to +\\infty' },
  { explanation: 'Sketch through all key points.', workingOut: '',
    graphData: {
      jsxGraph: {
        width: 400,
        height: 340,
        boundingbox: [-4.2, 12, 2.6, -32],
        boardOptions: { keepaspectratio: false },
        script: "board.suspendUpdate();\nboard.create('arrow', [[-4.2,0],[2.6,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-32],[0,12]], {strokeColor:'black'});\nboard.create('functiongraph', [function(x){ return (x+3)*Math.pow(x-1,3); }, -3.65, 1.85], {strokeColor:'#1d4ed8',strokeWidth:2});\nboard.create('point', [-3,0], {name:'(-3, 0)', size:2.5, color:'red', fixed:true, label:{offset:[-16,12]}});\nboard.create('point', [1,0], {name:'(1, 0)', size:2.5, color:'red', fixed:true, label:{offset:[8,12]}});\nboard.create('point', [0,-3], {name:'(0, -3)', size:2.5, color:'red', fixed:true, label:{offset:[8,-2]}});\nboard.create('point', [-2,-27], {name:'(-2, -27)', size:2.5, color:'red', fixed:true, label:{offset:[6,-10]}});\nboard.create('text', [2.3, 1.2, 'x'], {fontSize:13});\nboard.create('text', [0.3, 11, 'y'], {fontSize:13});\nboard.unsuspendUpdate();"
      }
    }
  }]

},

{
  id: 'fortst2020s-q10f',
  topicId: 'y12a-2H',
  c: '2H',
  t: 'Combinations of transformations',
  source: 'Fort Street 2020 Trial Q10(f)',
  type: 'short_answer',
  difficulty: 'medium',
  q: 'State, in order, the transformations to obtain $y = f\\!\\left(2\\left(x - \\dfrac{1}{4}\\right)\\right)$ from $y = f(x)$.',
  a: 'Horizontal dilation by a factor of $\\dfrac{1}{2}$, then horizontal translation $\\dfrac{1}{4}$ unit right.',
  opts: [],
  h: 'The "$2$" is a horizontal dilation by $\\frac12$; the "$-\\frac14$" is a translation right; apply the dilation first.',
  s: 'The factor $2$ gives a horizontal dilation by $\\frac{1}{2}$; the $-\\frac{1}{4}$ gives a translation $\\frac{1}{4}$ right. The dilation (closest to $x$) is applied first.',
  solutionSteps: [
  { explanation: 'Identify the horizontal dilation from the factor $2$.', workingOut: '\\text{horizontal dilation, factor } \\tfrac{1}{2}' },
  { explanation: 'Identify the horizontal translation.', workingOut: '\\text{translation } \\tfrac{1}{4} \\text{ right}' },
  { explanation: 'State the order: dilation first, then translation.', workingOut: '\\text{dilate } \\tfrac12 \\text{ THEN right } \\tfrac14' }]

},

{
  id: 'fortst2020s-q10g',
  topicId: 'y12a-2H',
  c: '2H',
  t: 'Combinations of transformations',
  source: 'Fort Street 2020 Trial Q10(g)',
  type: 'teacher_review',
  difficulty: 'hard',
  q: 'Sketch $y = f\\!\\left(2\\left(x - \\dfrac{1}{4}\\right)\\right)$, showing the $x$-intercepts, stationary points and inflection points.',
  a: 'Part (e) dilated horizontally by $\\frac12$ and shifted $\\frac14$ right: $x$-intercepts $\\left(-\\frac{5}{4},0\\right)$ and $\\left(\\frac{3}{4},0\\right)$, minimum $\\left(-\\frac{3}{4},-27\\right)$, inflections $\\left(-\\frac{1}{4},-16\\right)$ and $\\left(\\frac{3}{4},0\\right)$.',
  opts: [],
  h: 'Each feature $(x_0, y_0)$ maps to $\\left(\\frac{x_0}{2}+\\frac14,\\ y_0\\right)$.',
  s: 'Apply $x \\mapsto \\frac{x}{2} + \\frac{1}{4}$: $(-3,0)\\to(-\\frac{5}{4},0)$; $(1,0)\\to(\\frac{3}{4},0)$; $(-2,-27)\\to(-\\frac{3}{4},-27)$; $(-1,-16)\\to(-\\frac{1}{4},-16)$.',
  solutionSteps: [
  { explanation: 'Apply the mapping $x \\mapsto \\frac{x}{2} + \\frac{1}{4}$ (dilation then shift); $y$-values unchanged.', workingOut: '(x_0, y_0) \\mapsto \\left(\\tfrac{x_0}{2}+\\tfrac14, y_0\\right)' },
  { explanation: 'Transform the $x$-intercepts.', workingOut: '(-3,0)\\to(-\\tfrac54,0); \\; (1,0)\\to(\\tfrac34,0)' },
  { explanation: 'Transform the minimum and inflection.', workingOut: '(-2,-27)\\to(-\\tfrac34,-27); \\; (-1,-16)\\to(-\\tfrac14,-16)' },
  { explanation: 'Sketch the transformed quartic.', workingOut: '',
    graphData: {
      jsxGraph: {
        width: 400,
        height: 340,
        boundingbox: [-2.4, 12, 2, -32],
        boardOptions: { keepaspectratio: false },
        script: "board.suspendUpdate();\nboard.create('arrow', [[-2.4,0],[2,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-32],[0,12]], {strokeColor:'black'});\nboard.create('functiongraph', [function(x){ var u = 2*(x - 0.25); return (u+3)*Math.pow(u-1,3); }, -1.58, 1.05], {strokeColor:'#15803d',strokeWidth:2});\nboard.create('point', [-1.25,0], {name:'(-5/4, 0)', size:2.5, color:'red', fixed:true, label:{offset:[-16,12]}});\nboard.create('point', [0.75,0], {name:'(3/4, 0)', size:2.5, color:'red', fixed:true, label:{offset:[6,12]}});\nboard.create('point', [-0.25,-16], {name:'(-1/4, -16)', size:2.5, color:'red', fixed:true, label:{offset:[8,-2]}});\nboard.create('point', [-0.75,-27], {name:'(-3/4, -27)', size:2.5, color:'red', fixed:true, label:{offset:[-6,-10]}});\nboard.create('text', [1.7, 1.2, 'x'], {fontSize:13});\nboard.create('text', [0.3, 11, 'y'], {fontSize:13});\nboard.unsuspendUpdate();"
      }
    }
  }]

},

// ─── SECTION II — PART D ───────────────────────────────────────────────────

{
  id: 'fortst2020s-q11a',
  topicId: 'y12a-1C',
  c: '1C',
  t: 'Geometric sequences',
  source: 'Fort Street 2020 Trial Q11(a)',
  type: 'short_answer',
  difficulty: 'medium',
  q: 'A jacaranda was $60$ cm tall when planted. In the first year it grew $40$ cm, and each year\'s growth is $80\\%$ of the previous year\'s. What was the total growth after $3$ years?',
  a: '$97.6$ cm',
  opts: [],
  h: 'Growths form a GP $40, 40(0.8), 40(0.8)^2$.',
  s: 'Growths: $40 + 40(0.8) + 40(0.8)^2 = 40 + 32 + 25.6 = 97.6$ cm.',
  solutionSteps: [
  { explanation: 'The yearly growths form a GP with $a = 40$, $r = 0.8$.', workingOut: '40, \\; 40(0.8), \\; 40(0.8)^2' },
  { explanation: 'Add the first three terms.', workingOut: '40 + 32 + 25.6 = 97.6 \\text{ cm}' }]

},

{
  id: 'fortst2020s-q11b',
  topicId: 'y12a-1H',
  c: '1H',
  t: 'The limiting sum of a geometric series',
  source: 'Fort Street 2020 Trial Q11(b)',
  type: 'short_answer',
  difficulty: 'medium',
  q: 'Assuming the jacaranda ($60$ cm at planting, growths $40, 40(0.8), \\dots$) maintains this pattern, explain why it will never reach a height of $3$ metres.',
  a: 'Limiting growth $200$ cm, so maximum height $60 + 200 = 260$ cm $< 300$ cm.',
  opts: [],
  h: 'Find the limiting sum of the growth GP, then add the initial height.',
  s: '$S_\\infty = \\frac{40}{1 - 0.8} = 200$ cm. Maximum height $= 60 + 200 = 260$ cm $< 300$ cm, so it never reaches $3$ m.',
  solutionSteps: [
  { explanation: 'Since $|r| = 0.8 < 1$, the total growth has a limiting sum.', workingOut: 'S_\\infty = \\frac{40}{1 - 0.8} = 200 \\text{ cm}' },
  { explanation: 'Add the initial height.', workingOut: '60 + 200 = 260 \\text{ cm}' },
  { explanation: 'Compare with $3$ m $= 300$ cm.', workingOut: '260 < 300 \\Rightarrow \\text{never reaches } 3\\text{ m}' }]

},

{
  id: 'fortst2020s-q11c',
  topicId: 'y12a-1G',
  c: '1G',
  t: 'Summing a geometric series',
  source: 'Fort Street 2020 Trial Q11(c)',
  type: 'short_answer',
  difficulty: 'hard',
  q: 'In which year will the jacaranda ($60$ cm at planting, growths $40, 40(0.8), \\dots$) reach a height of $2.5$ metres?',
  a: 'During the $14^{\\text{th}}$ year',
  opts: [],
  h: 'It needs to grow $250 - 60 = 190$ cm. Set $S_n = 190$ and solve.',
  s: '$S_n = \\frac{40(1 - 0.8^n)}{1 - 0.8} = 190 \\Rightarrow 200(1 - 0.8^n) = 190 \\Rightarrow 0.8^n = 0.05 \\Rightarrow n = \\frac{\\ln 0.05}{\\ln 0.8} \\approx 13.4$, so during the $14^{\\text{th}}$ year.',
  solutionSteps: [
  { explanation: 'A height of $250$ cm requires growth of $250 - 60 = 190$ cm.', workingOut: '\\text{growth needed} = 190 \\text{ cm}' },
  { explanation: 'Set the GP sum equal to $190$.', workingOut: '\\frac{40(1 - 0.8^n)}{0.2} = 190 \\Rightarrow 0.8^n = 0.05' },
  { explanation: 'Take logarithms and solve.', workingOut: 'n = \\frac{\\ln 0.05}{\\ln 0.8} \\approx 13.4' },
  { explanation: 'Round up to the year.', workingOut: '\\text{14th year}' }]

},

{
  id: 'fortst2020s-q12a',
  topicId: 'y11a-8G',
  c: '8G',
  t: 'Applications of exponential and logarithmic functions',
  source: 'Fort Street 2020 Trial Q12(a)',
  type: 'short_answer',
  difficulty: 'medium',
  q: 'A concentration is $C = C_0 e^{-kt}$ (kL/ha, $t$ in years). It is $8$ kL/ha at $t = 0$ and $3$ kL/ha at $t = 1$. Show that $C_0 = 8$ and $k = -\\ln\\!\\left(\\dfrac{3}{8}\\right)$.',
  a: '$C_0 = 8$ and $k = -\\ln\\!\\left(\\dfrac{3}{8}\\right)$',
  opts: [],
  h: 'Substitute $t = 0$ then $t = 1$.',
  s: 'At $t = 0$: $C = C_0 = 8$. At $t = 1$: $3 = 8e^{-k}$, so $e^{-k} = \\frac{3}{8}$, giving $k = -\\ln\\frac{3}{8}$.',
  solutionSteps: [
  { explanation: 'Substitute $t = 0$ ($e^0 = 1$).', workingOut: 'C_0 = 8' },
  { explanation: 'Substitute $t = 1$, $C = 3$.', workingOut: '3 = 8e^{-k} \\Rightarrow e^{-k} = \\frac{3}{8}' },
  { explanation: 'Take logarithms.', workingOut: 'k = -\\ln\\tfrac{3}{8}' }]

},

{
  id: 'fortst2020s-q12b',
  topicId: 'y11a-8E',
  c: '8E',
  t: 'Equations involving logarithms and indices',
  source: 'Fort Street 2020 Trial Q12(b)',
  type: 'short_answer',
  difficulty: 'hard',
  q: 'The paddock is safe once the concentration falls below $0.5$ kL/ha, where $C = 8e^{-kt}$ and $k = -\\ln\\!\\left(\\dfrac{3}{8}\\right)$. How long, to the nearest month, must the farmer wait?',
  a: '$\\approx 2$ years $10$ months',
  opts: [],
  h: 'Set $C = 0.5$ and solve $t = \\dfrac{\\ln(1/16)}{\\ln(3/8)}$.',
  s: '$0.5 = 8e^{-kt} \\Rightarrow e^{-kt} = \\frac{1}{16}$. So $t = \\frac{\\ln(1/16)}{\\ln(3/8)} \\approx 2.83$ years $\\approx 2$ years $10$ months.',
  solutionSteps: [
  { explanation: 'Set the concentration to the threshold.', workingOut: '0.5 = 8e^{-kt} \\Rightarrow e^{-kt} = \\frac{1}{16}' },
  { explanation: 'Take logarithms; with $k = -\\ln\\frac{3}{8}$, solve for $t$.', workingOut: 't = \\frac{\\ln(1/16)}{\\ln(3/8)} \\approx 2.83 \\text{ years}' },
  { explanation: 'Convert the decimal part to months ($0.83 \\times 12 \\approx 10$).', workingOut: 't \\approx 2 \\text{ years } 10 \\text{ months}' }]

},

{
  id: 'fortst2020s-q13a',
  topicId: 'y11a-12F',
  c: '12F',
  t: 'Probability tree diagrams',
  source: 'Fort Street 2020 Trial Q13(a)',
  type: 'teacher_review',
  difficulty: 'medium',
  q: 'Bo and Cara take turns throwing darts; first to hit the bullseye wins. Bo (first) hits with probability $\\frac{1}{20}$, Cara with $\\frac{1}{25}$. Draw a tree diagram for the first four throws (Bo, Cara, Bo, Cara), noting the game stops once a bullseye is hit.',
  a: 'A tree where each throw branches Win (W)/Lose (W\'); play continues only on the "lose" branches: Bo $\\frac{1}{20}$, Cara $\\frac{1}{25}$, Bo $\\frac{1}{20}$, Cara $\\frac{1}{25}$.',
  opts: [],
  h: 'Each throw branches into W (game ends) and W\' (continue). Play follows the W\' chain.',
  s: 'Bo throws first: W $\\frac{1}{20}$ or W\' $\\frac{19}{20}$; then Cara: W $\\frac{1}{25}$ or W\' $\\frac{24}{25}$; then Bo again; then Cara. The game proceeds only along the "miss" (W\') branches.',
  solutionSteps: [
  { explanation: 'Each throw is win (W, game ends) or miss (W\'). Play continues only along miss branches.', workingOut: "P(\\text{W}) \\text{ or } P(\\text{W}')" },
  { explanation: 'List the win/miss probabilities in order.', workingOut: "Bo: \\tfrac{1}{20},\\tfrac{19}{20}; \\;\\; Cara: \\tfrac{1}{25},\\tfrac{24}{25}" },
  { explanation: 'Draw the tree as a chain of four throws.', workingOut: '',
    graphData: {
      jsxGraph: {
        width: 460,
        height: 300,
        boundingbox: [-1, 3.5, 8, -1.2],
        boardOptions: { keepaspectratio: false },
        script: "board.suspendUpdate();\nvar names=['Bo','Cara','Bo','Cara'];\nvar win=['1/20','1/25','1/20','1/25'];\nvar lose=['19/20','24/25','19/20','24/25'];\nvar xs=[0,1.8,3.6,5.4,7.2];\nfor(var i=0;i<4;i++){ var x0=xs[i], x1=xs[i+1]; board.create('point',[x0,0],{name:'',size:1.5,color:'#475569',fixed:true}); board.create('segment',[[x0,0],[x1,1.6]],{strokeColor:'#475569'}); board.create('segment',[[x0,0],[x1,0]],{strokeColor:'#475569'}); board.create('point',[x1,1.6],{name:'W',size:1.5,color:'#1d4ed8',fixed:true,label:{offset:[6,4]}}); board.create('text',[(x0+x1)/2-0.2, 1.05, win[i]],{fontSize:9}); board.create('text',[(x0+x1)/2-0.2, 0.15, lose[i]],{fontSize:9}); board.create('text',[x0-0.15, 2.9, names[i]],{fontSize:11}); }\nboard.create('point',[xs[4],0],{name:\"W'\",size:1.5,color:'#475569',fixed:true,label:{offset:[6,-2]}});\nboard.create('text',[-0.9, 0.6, \"W=win\"],{fontSize:9});\nboard.create('text',[-0.9, 0.1, \"W'=lose\"],{fontSize:9});\nboard.unsuspendUpdate();"
      }
    }
  }]

},

{
  id: 'fortst2020s-q13b',
  topicId: 'y11a-12E',
  c: '12E',
  t: 'Multi-stage experiments',
  source: 'Fort Street 2020 Trial Q13(b)',
  type: 'short_answer',
  difficulty: 'medium',
  q: 'Bo (first, $P = \\frac{1}{20}$) and Cara ($P = \\frac{1}{25}$) throw in turn. What is the probability that Bo wins on his first or second throw?',
  a: '$\\dfrac{239}{2500}$',
  opts: [],
  h: 'Bo wins on throw 1 with $\\frac{1}{20}$; on throw 2 both must miss first, then Bo hits.',
  s: '$P = \\frac{1}{20} + \\frac{19}{20}\\cdot\\frac{24}{25}\\cdot\\frac{1}{20} = \\frac{1}{20} + \\frac{456}{10000} = \\frac{239}{2500}$.',
  solutionSteps: [
  { explanation: 'Bo wins on his first throw.', workingOut: 'P_1 = \\frac{1}{20}' },
  { explanation: 'Bo wins on his second throw: Bo misses, Cara misses, Bo hits.', workingOut: 'P_2 = \\frac{19}{20}\\cdot\\frac{24}{25}\\cdot\\frac{1}{20}' },
  { explanation: 'Add and simplify.', workingOut: 'P = \\frac{1}{20} + \\frac{456}{10000} = \\frac{239}{2500}' }]

},

{
  id: 'fortst2020s-q13c',
  topicId: 'y12a-1H',
  c: '1H',
  t: 'The limiting sum of a geometric series',
  source: 'Fort Street 2020 Trial Q13(c)',
  type: 'short_answer',
  difficulty: 'hard',
  q: 'Bo (first, $P = \\frac{1}{20}$) and Cara ($P = \\frac{1}{25}$) throw in turn until someone hits. What is the probability that Bo eventually wins?',
  a: '$\\dfrac{25}{44}$',
  opts: [],
  h: 'Bo can win on throw $1, 2, 3, \\dots$; geometric series with ratio $r = \\frac{19}{20}\\cdot\\frac{24}{25}$.',
  s: 'Bo wins with $a = \\frac{1}{20}$ and $r = \\frac{19}{20}\\cdot\\frac{24}{25} = \\frac{456}{500} = \\frac{114}{125}$. $S_\\infty = \\frac{1/20}{1 - 114/125} = \\frac{1/20}{11/125} = \\frac{25}{44}$.',
  solutionSteps: [
  { explanation: 'Bo\'s winning probabilities form a geometric series.', workingOut: 'P = \\frac{1}{20} + \\frac{19}{20}\\cdot\\frac{24}{25}\\cdot\\frac{1}{20} + \\cdots' },
  { explanation: 'Identify $a$ and $r$.', workingOut: 'a = \\frac{1}{20}, \\quad r = \\frac{114}{125}' },
  { explanation: 'Apply $S_\\infty = \\frac{a}{1-r}$.', workingOut: 'S_\\infty = \\frac{1/20}{11/125} = \\frac{25}{44}' }]

},

// ─── SECTION II — PART E ───────────────────────────────────────────────────

{
  id: 'fortst2020s-q14a',
  topicId: 'y11a-8E',
  c: '8E',
  t: 'Equations involving logarithms and indices',
  source: 'Fort Street 2020 Trial Q14(a)',
  type: 'short_answer',
  difficulty: 'medium',
  q: 'The diagram shows $y = 6e^{-x}$ and $y = e^x - 1$. Show that the curves intersect when $e^{2x} - e^x - 6 = 0$.',
  a: '$e^{2x} - e^x - 6 = 0$',
  opts: [],
  graphData: {
    jsxGraph: {
      width: 400,
      height: 340,
      boundingbox: [-2.5, 7, 2.5, -4],
      boardOptions: { keepaspectratio: false },
      script: "board.suspendUpdate();\nboard.create('arrow', [[-2.5,0],[2.5,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-4],[0,7]], {strokeColor:'black'});\nboard.create('functiongraph', [function(x){ return 6*Math.exp(-x); }, -2.0, 2.0], {strokeColor:'#1d4ed8',strokeWidth:2});\nboard.create('functiongraph', [function(x){ return Math.exp(x) - 1; }, -2.5, 2.0], {strokeColor:'#15803d',strokeWidth:2});\nboard.create('point', [Math.log(3), 2], {name:'P', size:2.5, color:'red', fixed:true, label:{offset:[8,6]}});\nboard.create('text', [-1.7, 5, 'y = 6e^{-x}'], {fontSize:11, strokeColor:'#1d4ed8'});\nboard.create('text', [1.0, 4, 'y = e^x - 1'], {fontSize:11, strokeColor:'#15803d'});\nboard.create('text', [2.2, 0.4, 'x'], {fontSize:13});\nboard.create('text', [0.25, 6.4, 'y'], {fontSize:13});\nboard.unsuspendUpdate();"
    }
  },
  h: 'Set the expressions equal and multiply by $e^x$.',
  s: 'At intersection $6e^{-x} = e^x - 1$. Multiply by $e^x$: $6 = e^{2x} - e^x$, so $e^{2x} - e^x - 6 = 0$.',
  solutionSteps: [
  { explanation: 'Set the two $y$-values equal.', workingOut: '6e^{-x} = e^x - 1' },
  { explanation: 'Multiply by $e^x$.', workingOut: '6 = e^{2x} - e^x' },
  { explanation: 'Rearrange.', workingOut: 'e^{2x} - e^x - 6 = 0' }]

},

{
  id: 'fortst2020s-q14b',
  topicId: 'y11a-8E',
  c: '8E',
  t: 'Equations involving logarithms and indices',
  source: 'Fort Street 2020 Trial Q14(b)',
  type: 'short_answer',
  difficulty: 'medium',
  q: 'Hence show that the $x$-coordinate of the point $P$ is $x = \\ln 3$ (using $e^{2x} - e^x - 6 = 0$).',
  a: '$x = \\ln 3$',
  opts: [],
  h: 'Let $u = e^x$; reject the negative root.',
  s: 'Let $u = e^x$: $u^2 - u - 6 = 0 \\Rightarrow (u-3)(u+2) = 0$, so $u = 3$ or $u = -2$. Since $e^x > 0$, $e^x = 3$, giving $x = \\ln 3$.',
  solutionSteps: [
  { explanation: 'Substitute $u = e^x$.', workingOut: 'u^2 - u - 6 = 0' },
  { explanation: 'Factorise.', workingOut: '(u - 3)(u + 2) = 0 \\Rightarrow u = 3 \\text{ or } -2' },
  { explanation: 'Reject $u = -2$ since $e^x > 0$.', workingOut: 'e^x = 3 \\Rightarrow x = \\ln 3' }]

},

{
  id: 'fortst2020s-q14c',
  topicId: 'y12a-5E',
  c: '5E',
  t: 'Applications of integration of e^x',
  source: 'Fort Street 2020 Trial Q14(c)',
  type: 'short_answer',
  difficulty: 'hard',
  q: 'Find the exact shaded area between $y = 6e^{-x}$ and $y = e^x - 1$, from $x = 0$ to $x = \\ln 3$.',
  a: '$2 + \\ln 3 \\text{ units}^2$',
  opts: [],
  h: 'Integrate (upper $-$ lower) $= (6e^{-x} - (e^x - 1))$ from $0$ to $\\ln 3$.',
  s: '$A = \\int_0^{\\ln 3}(6e^{-x} - e^x + 1)\\,dx = [-6e^{-x} - e^x + x]_0^{\\ln 3} = (-2 - 3 + \\ln 3) - (-6 - 1 + 0) = -5 + \\ln 3 + 7 = 2 + \\ln 3$.',
  solutionSteps: [
  { explanation: 'Set up the area integral (upper minus lower).', workingOut: 'A = \\int_0^{\\ln 3}\\big(6e^{-x} - (e^x - 1)\\big)\\,dx' },
  { explanation: 'Find the primitive.', workingOut: '= \\big[-6e^{-x} - e^x + x\\big]_0^{\\ln 3}' },
  { explanation: 'Substitute $x = \\ln 3$ ($e^{-\\ln 3} = \\frac13$, $e^{\\ln 3} = 3$).', workingOut: '= (-2 - 3 + \\ln 3)' },
  { explanation: 'Substitute $x = 0$.', workingOut: '- (-6 - 1 + 0) = +7' },
  { explanation: 'Combine.', workingOut: 'A = -5 + \\ln 3 + 7 = 2 + \\ln 3 \\text{ units}^2' }]

},

{
  id: 'fortst2020s-q15a',
  topicId: 'y12a-7B',
  c: '7B',
  t: 'Velocity and acceleration as derivatives',
  source: 'Fort Street 2020 Trial Q15(a)',
  type: 'short_answer',
  difficulty: 'medium',
  q: 'The velocity–time graph of a particle ($0 \\le t \\le 8$) is a sine-shaped curve with a maximum at $t = 2$ and a minimum at $t = 6$. State the times at which the acceleration is zero.',
  a: '$t = 2$ and $t = 6$',
  opts: [],
  graphData: {
    jsxGraph: {
      width: 440,
      height: 280,
      boundingbox: [-1, 1.6, 9.5, -1.6],
      boardOptions: { keepaspectratio: false },
      script: "board.suspendUpdate();\nboard.create('arrow', [[-1,0],[9.5,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-1.6],[0,1.6]], {strokeColor:'black'});\nboard.create('functiongraph', [function(t){ return Math.sin(Math.PI*t/4); }, 0, 8], {strokeColor:'#1d4ed8',strokeWidth:2});\nfor(var t=1;t<=8;t++){ board.create('text',[t-0.1,-0.25,''+t],{fontSize:9}); }\nboard.create('text', [9.1, 0.25, 't'], {fontSize:13});\nboard.create('text', [0.25, 1.45, 'v'], {fontSize:13});\nboard.unsuspendUpdate();"
    }
  },
  h: 'Acceleration is the gradient of the $v$–$t$ graph; zero at the turning points.',
  s: 'Acceleration $= \\frac{dv}{dt}$ is the gradient, which is zero at the maximum ($t = 2$) and minimum ($t = 6$).',
  solutionSteps: [
  { explanation: 'Acceleration is the gradient of the velocity–time graph.', workingOut: 'a = \\frac{dv}{dt}' },
  { explanation: 'The gradient is zero at the turning points of $v$.', workingOut: 't = 2 \\text{ (max)}, \\quad t = 6 \\text{ (min)}' }]

},

{
  id: 'fortst2020s-q15b',
  topicId: 'y12a-7B',
  c: '7B',
  t: 'Velocity and acceleration as derivatives',
  source: 'Fort Street 2020 Trial Q15(b)',
  type: 'short_answer',
  difficulty: 'hard',
  q: 'For the same velocity–time graph (max at $t=2$, min at $t=6$, zeros at $t=0,4,8$), state the times at which the speed is increasing.',
  a: '$0 < t < 2$ and $4 < t < 6$',
  opts: [],
  h: 'Speed increases when $v$ and $a$ have the same sign.',
  s: 'Speed increases when velocity and acceleration share a sign. On $0 < t < 2$, $v > 0$ and $a > 0$; on $4 < t < 6$, $v < 0$ and $a < 0$.',
  solutionSteps: [
  { explanation: 'Speed $= |v|$ increases when $v$ and $a$ have the same sign.', workingOut: '\\text{speed} \\uparrow \\iff v, a \\text{ same sign}' },
  { explanation: 'On $0 < t < 2$, velocity is positive and rising.', workingOut: '0 < t < 2: \\; v > 0, \\; a > 0' },
  { explanation: 'On $4 < t < 6$, velocity is negative and falling.', workingOut: '4 < t < 6: \\; v < 0, \\; a < 0' }]

},

{
  id: 'fortst2020s-q16a',
  topicId: 'y12a-7B',
  c: '7B',
  t: 'Velocity and acceleration as derivatives',
  source: 'Fort Street 2020 Trial Q16(a)',
  type: 'short_answer',
  difficulty: 'medium',
  q: 'A particle has velocity $v = \\dfrac{6}{1+t} - t$ m/s ($t \\ge 0$). Find the acceleration when $t = 0$.',
  a: '$-7 \\text{ m/s}^2$',
  opts: [],
  h: 'Differentiate $\\frac{6}{1+t} = 6(1+t)^{-1}$, then substitute $t = 0$.',
  s: '$a = -6(1+t)^{-2} - 1$. At $t = 0$: $a = -6 - 1 = -7 \\text{ m/s}^2$.',
  solutionSteps: [
  { explanation: 'Differentiate velocity to get acceleration.', workingOut: 'a = -6(1+t)^{-2} - 1' },
  { explanation: 'Substitute $t = 0$.', workingOut: 'a = -6 - 1 = -7 \\text{ m/s}^2' }]

},

{
  id: 'fortst2020s-q16b',
  topicId: 'y12a-7C',
  c: '7C',
  t: 'Integrating with respect to time',
  source: 'Fort Street 2020 Trial Q16(b)',
  type: 'short_answer',
  difficulty: 'medium',
  q: 'For $v = \\dfrac{6}{1+t} - t$, if the particle is initially at the origin, find the displacement $x$ as a function of $t$.',
  a: '$x = 6\\ln(1+t) - \\dfrac{t^2}{2}$',
  opts: [],
  h: 'Integrate $v$; use $x = 0$ at $t = 0$.',
  s: '$x = 6\\ln(1+t) - \\frac{t^2}{2} + C$. At $t = 0$: $0 = 0 - 0 + C \\Rightarrow C = 0$. So $x = 6\\ln(1+t) - \\frac{t^2}{2}$.',
  solutionSteps: [
  { explanation: 'Integrate velocity.', workingOut: 'x = 6\\ln(1+t) - \\frac{t^2}{2} + C' },
  { explanation: 'Apply $x = 0$ at $t = 0$.', workingOut: 'C = 0' },
  { explanation: 'State the displacement.', workingOut: 'x = 6\\ln(1+t) - \\frac{t^2}{2}' }]

},

{
  id: 'fortst2020s-q16c',
  topicId: 'y12a-7B',
  c: '7B',
  t: 'Velocity and acceleration as derivatives',
  source: 'Fort Street 2020 Trial Q16(c)',
  type: 'short_answer',
  difficulty: 'medium',
  q: 'For $v = \\dfrac{6}{1+t} - t$ ($t \\ge 0$), when is the particle stationary?',
  a: '$t = 2$ seconds',
  opts: [],
  h: 'Set $v = 0$, multiply by $(1+t)$, solve and reject negative $t$.',
  s: '$\\frac{6}{1+t} = t \\Rightarrow 6 = t(1+t) \\Rightarrow t^2 + t - 6 = 0 \\Rightarrow (t+3)(t-2) = 0$. Since $t \\ge 0$, $t = 2$.',
  solutionSteps: [
  { explanation: 'Set velocity to zero.', workingOut: '\\frac{6}{1+t} - t = 0' },
  { explanation: 'Multiply by $(1+t)$.', workingOut: '6 = t(1+t) \\Rightarrow t^2 + t - 6 = 0' },
  { explanation: 'Factorise and reject the negative root.', workingOut: '(t+3)(t-2) = 0 \\Rightarrow t = 2 \\text{ s}' }]

},

{
  id: 'fortst2020s-q16d',
  topicId: 'y12a-7C',
  c: '7C',
  t: 'Integrating with respect to time',
  source: 'Fort Street 2020 Trial Q16(d)',
  type: 'short_answer',
  difficulty: 'hard',
  q: 'For $x = 6\\ln(1+t) - \\dfrac{t^2}{2}$ (stationary at $t = 2$), how far does the particle travel in the first $3$ seconds? Give your answer to three significant figures.',
  a: '$\\approx 5.37$ m',
  opts: [],
  h: 'The particle turns at $t = 2$. Find $x(0), x(2), x(3)$ and add the leg distances.',
  s: 'The particle reverses at $t = 2$. $x(0) = 0$, $x(2) = 6\\ln 3 - 2 \\approx 4.592$, $x(3) = 6\\ln 4 - 4.5 \\approx 3.818$. Distance $= 4.592 + (4.592 - 3.818) \\approx 5.37$ m.',
  solutionSteps: [
  { explanation: 'The particle reverses direction at $t = 2$, so compute displacements at $t = 0, 2, 3$.', workingOut: 'x(0) = 0' },
  { explanation: 'Find $x(2)$.', workingOut: 'x(2) = 6\\ln 3 - 2 \\approx 4.592' },
  { explanation: 'Find $x(3)$.', workingOut: 'x(3) = 6\\ln 4 - 4.5 \\approx 3.818' },
  { explanation: 'Add the distance of each leg (out then back).', workingOut: 'd = 4.592 + (4.592 - 3.818) \\approx 5.37 \\text{ m}' }]

},

// ─── SECTION II — PART F ───────────────────────────────────────────────────

{
  id: 'fortst2020s-q17a',
  topicId: 'y11a-3A',
  c: '3A',
  t: 'Functions and function notation',
  source: 'Fort Street 2020 Trial Q17(a)',
  type: 'short_answer',
  difficulty: 'easy',
  q: 'A tank holds water $V = 4900\\left(1 - \\dfrac{t}{70}\\right)^2$ litres ($0 \\le t \\le 70$). What volume remains after $10$ minutes?',
  a: '$3600$ litres',
  opts: [],
  h: 'Substitute $t = 10$.',
  s: '$V = 4900\\left(1 - \\frac{10}{70}\\right)^2 = 4900\\left(\\frac{6}{7}\\right)^2 = 4900\\cdot\\frac{36}{49} = 3600$ litres.',
  solutionSteps: [
  { explanation: 'Substitute $t = 10$.', workingOut: 'V = 4900\\left(1 - \\frac{10}{70}\\right)^2 = 4900\\left(\\frac{6}{7}\\right)^2' },
  { explanation: 'Evaluate.', workingOut: '= 4900\\cdot\\frac{36}{49} = 3600 \\text{ litres}' }]

},

{
  id: 'fortst2020s-q17b',
  topicId: 'y11a-1D',
  c: '1D',
  t: 'Solving quadratic equations',
  source: 'Fort Street 2020 Trial Q17(b)',
  type: 'short_answer',
  difficulty: 'medium',
  q: 'For $V = 4900\\left(1 - \\dfrac{t}{70}\\right)^2$ ($0 \\le t \\le 70$), how long until the tank is half full (to the nearest minute)?',
  a: '$\\approx 21$ minutes ($t \\approx 20.5$)',
  opts: [],
  h: 'Set $V = 2450$, take square roots (both signs), reject the root outside $[0, 70]$.',
  s: '$4900\\left(1 - \\frac{t}{70}\\right)^2 = 2450 \\Rightarrow \\left(1 - \\frac{t}{70}\\right)^2 = \\frac{1}{2} \\Rightarrow t = 70\\left(1 - \\frac{1}{\\sqrt2}\\right) \\approx 20.5$ or $t \\approx 119.5$ (rejected). So $t \\approx 21$ minutes.',
  solutionSteps: [
  { explanation: 'Set the volume to half of $4900$.', workingOut: '4900\\left(1 - \\frac{t}{70}\\right)^2 = 2450' },
  { explanation: 'Take the square root (both signs).', workingOut: '1 - \\frac{t}{70} = \\pm\\frac{1}{\\sqrt2}' },
  { explanation: 'Solve and reject the value $> 70$.', workingOut: 't = 70\\left(1 - \\tfrac{1}{\\sqrt2}\\right) \\approx 20.5' },
  { explanation: 'Round to the nearest minute.', workingOut: 't \\approx 21 \\text{ minutes}' }]

},

{
  id: 'fortst2020s-q17c',
  topicId: 'y11a-9J',
  c: '9J',
  t: 'Rates of change',
  source: 'Fort Street 2020 Trial Q17(c)',
  type: 'short_answer',
  difficulty: 'medium',
  q: 'For $V = 4900\\left(1 - \\dfrac{t}{70}\\right)^2$, at what rate does the water drain after $14$ minutes?',
  a: '$112$ L/min (draining)',
  opts: [],
  h: 'Differentiate using the chain rule, then substitute $t = 14$.',
  s: '$\\frac{dV}{dt} = 9800\\left(1 - \\frac{t}{70}\\right)\\left(-\\frac{1}{70}\\right) = -140\\left(1 - \\frac{t}{70}\\right)$. At $t = 14$: $-140\\left(1 - \\frac{1}{5}\\right) = -140\\cdot\\frac{4}{5} = -112$. The water drains at $112$ L/min.',
  solutionSteps: [
  { explanation: 'Differentiate $V$ with the chain rule.', workingOut: '\\frac{dV}{dt} = -140\\left(1 - \\frac{t}{70}\\right)' },
  { explanation: 'Substitute $t = 14$.', workingOut: '= -140\\left(1 - \\frac{14}{70}\\right) = -140\\cdot\\frac{4}{5}' },
  { explanation: 'Evaluate (negative = draining).', workingOut: '= -112 \\Rightarrow 112 \\text{ L/min}' }]

},

{
  id: 'fortst2020s-q17d',
  topicId: 'y11a-9J',
  c: '9J',
  t: 'Rates of change',
  source: 'Fort Street 2020 Trial Q17(d)',
  type: 'short_answer',
  difficulty: 'medium',
  q: 'For $V = 4900\\left(1 - \\dfrac{t}{70}\\right)^2$ ($0 \\le t \\le 70$), at what time does the water drain at its fastest rate?',
  a: 'At $t = 0$ (rate $140$ L/min)',
  opts: [],
  h: 'The drain rate $\\left|\\frac{dV}{dt}\\right| = 140\\left(1 - \\frac{t}{70}\\right)$ is largest at the smallest $t$.',
  s: 'The magnitude $\\left|\\frac{dV}{dt}\\right| = 140\\left(1 - \\frac{t}{70}\\right)$ decreases as $t$ increases, so it is greatest at $t = 0$, where the rate is $140$ L/min.',
  solutionSteps: [
  { explanation: 'Write the magnitude of the drain rate.', workingOut: '\\left|\\frac{dV}{dt}\\right| = 140\\left(1 - \\frac{t}{70}\\right)' },
  { explanation: 'It decreases with $t$, so the maximum is at $t = 0$.', workingOut: '\\text{fastest at } t = 0' },
  { explanation: 'Evaluate.', workingOut: '\\left.\\frac{dV}{dt}\\right|_{t=0} = -140 \\Rightarrow 140 \\text{ L/min}' }]

},

{
  id: 'fortst2020s-q18a',
  topicId: 'y11a-11D',
  c: '11D',
  t: 'Trigonometric graphs in radians',
  source: 'Fort Street 2020 Trial Q18(a)',
  type: 'short_answer',
  difficulty: 'easy',
  q: 'The average monthly temperature is $T = 8\\sin(nx + 1) + 15$. What are the maximum and minimum average monthly temperatures?',
  a: 'Maximum $23°$, minimum $7°$',
  opts: [],
  h: 'Use $\\sin = 1$ for the max and $\\sin = -1$ for the min.',
  s: 'Maximum: $8(1) + 15 = 23°$. Minimum: $8(-1) + 15 = 7°$.',
  solutionSteps: [
  { explanation: 'Sine ranges from $-1$ to $1$; amplitude $8$, shift $15$.', workingOut: '-1 \\le \\sin(nx + 1) \\le 1' },
  { explanation: 'Maximum when $\\sin = 1$.', workingOut: 'T_{\\max} = 8 + 15 = 23°' },
  { explanation: 'Minimum when $\\sin = -1$.', workingOut: 'T_{\\min} = -8 + 15 = 7°' }]

},

{
  id: 'fortst2020s-q18b',
  topicId: 'y11a-11D',
  c: '11D',
  t: 'Trigonometric graphs in radians',
  source: 'Fort Street 2020 Trial Q18(b)',
  type: 'short_answer',
  difficulty: 'medium',
  q: 'For $T = 8\\sin(nx + 1) + 15$, the period is $12$. Determine $n$ correct to $2$ decimal places.',
  a: '$n = \\dfrac{\\pi}{6} \\approx 0.52$',
  opts: [],
  h: 'Period $= \\frac{2\\pi}{n} = 12$.',
  s: '$\\frac{2\\pi}{n} = 12 \\Rightarrow n = \\frac{\\pi}{6} \\approx 0.52$.',
  solutionSteps: [
  { explanation: 'Set the period formula equal to $12$.', workingOut: '\\frac{2\\pi}{n} = 12' },
  { explanation: 'Solve and evaluate.', workingOut: 'n = \\frac{\\pi}{6} \\approx 0.52' }]

},

{
  id: 'fortst2020s-q18c',
  topicId: 'y11a-11B',
  c: '11B',
  t: 'Solving trigonometric equations',
  source: 'Fort Street 2020 Trial Q18(c)',
  type: 'short_answer',
  difficulty: 'medium',
  q: 'For $T = 8\\sin\\!\\left(\\dfrac{\\pi}{6}x + 1\\right) + 15$ ($x =$ month), which month has the lowest average temperature?',
  a: 'July (month $7$)',
  opts: [],
  h: 'Minimum when the argument equals $\\frac{3\\pi}{2}$.',
  s: 'Minimum when $\\frac{\\pi}{6}x + 1 = \\frac{3\\pi}{2}$: $x = \\frac{3\\pi/2 - 1}{\\pi/6} \\approx 7.1$, so month $7$ — July.',
  solutionSteps: [
  { explanation: 'The minimum occurs when the sine equals $-1$, i.e. argument $= \\frac{3\\pi}{2}$.', workingOut: '\\frac{\\pi}{6}x + 1 = \\frac{3\\pi}{2}' },
  { explanation: 'Solve for $x$.', workingOut: 'x = \\frac{\\frac{3\\pi}{2} - 1}{\\frac{\\pi}{6}} \\approx 7.1' },
  { explanation: 'Round to the nearest month.', workingOut: 'x \\approx 7 \\Rightarrow \\text{July}' }]

},

{
  id: 'fortst2020s-q18d',
  topicId: 'y12a-2I',
  c: '2I',
  t: 'Trigonometric graphs',
  source: 'Fort Street 2020 Trial Q18(d)',
  type: 'teacher_review',
  difficulty: 'medium',
  q: 'Graph the function $T = 8\\sin\\!\\left(\\dfrac{\\pi}{6}x + 1\\right) + 15$ for $1 \\le x \\le 12$.',
  a: 'A sine curve over one period, starting near $(1, 23)$, falling to a minimum $\\approx (7, 7)$, and rising back toward $(12, \\approx 22)$.',
  opts: [],
  h: 'Amplitude $8$, centre line $T = 15$, period $12$, max $23$, min $7$ near month $7$.',
  s: 'Over $1 \\le x \\le 12$ the curve has amplitude $8$, centre $T = 15$, maximum $23$, minimum $7$ near month $7$ (July).',
  solutionSteps: [
  { explanation: 'Identify amplitude $8$, centre $15$, period $12$, range $[7, 23]$.', workingOut: 'T \\in [7, 23], \\text{ period } 12' },
  { explanation: 'Locate the minimum near month $7$.', workingOut: '(7, 7) \\text{ minimum}' },
  { explanation: 'Sketch the sine curve over $1 \\le x \\le 12$.', workingOut: '',
    graphData: {
      jsxGraph: {
        width: 440,
        height: 300,
        boundingbox: [-1, 26, 14, -2],
        boardOptions: { keepaspectratio: false },
        script: "board.suspendUpdate();\nboard.create('arrow', [[-1,0],[14,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-2],[0,26]], {strokeColor:'black'});\nboard.create('functiongraph', [function(x){ return 8*Math.sin(Math.PI/6*x + 1) + 15; }, 1, 12], {strokeColor:'#1d4ed8',strokeWidth:2});\nboard.create('point', [1, 8*Math.sin(Math.PI/6+1)+15], {name:'(1, 23)', size:2.5, color:'red', fixed:true, label:{offset:[-6,12]}});\nboard.create('point', [7.1, 7], {name:'(7, 7)', size:2.5, color:'red', fixed:true, label:{offset:[6,-10]}});\nfor(var m=2;m<=12;m+=2){ board.create('text',[m-0.15,-0.9,''+m],{fontSize:9}); }\nboard.create('text', [13.6, 0.6, 'x'], {fontSize:13});\nboard.create('text', [0.3, 25, 'T'], {fontSize:13});\nboard.unsuspendUpdate();"
      }
    }
  }]

},

{
  id: 'fortst2020s-q19a',
  topicId: 'y11a-6A',
  c: '6A',
  t: 'Trigonometry with right-angled triangles',
  source: 'Fort Street 2020 Trial Q19(a)',
  type: 'short_answer',
  difficulty: 'hard',
  q: 'A boy travels home $H$ to school $S$ ($8$ km apart) via $H \\to B \\to C \\to S$: walks $HB$, skates $BC$, walks $CS$. The canal is $1.5$ km below the $HS$ line; $\\angle AHB = \\angle DSC = \\theta$. Walking speed $5$ km/h, skating $15$ km/h. Show the time is $T = \\dfrac{3}{5\\cos\\theta} + \\dfrac{8}{15} - \\dfrac{\\tan\\theta}{5}$.',
  a: '$T = \\dfrac{3}{5\\cos\\theta} + \\dfrac{8}{15} - \\dfrac{\\tan\\theta}{5}$',
  opts: [],
  graphData: {
    jsxGraph: {
      width: 460,
      height: 260,
      boundingbox: [-1.2, 4.2, 9, -2],
      boardOptions: { keepaspectratio: false },
      script: "board.suspendUpdate();\nvar H=[0,3],S=[8,3],A=[0,0],B=[1.4,0],C=[6.6,0],D=[8,0];\nboard.create('polygon',[[ -0.3,0],[8.3,0],[8.3,-0.6],[-0.3,-0.6]],{fillColor:'#e2e8f0',fillOpacity:0.6,borders:{visible:false},vertices:{visible:false},fixed:true});\nboard.create('segment',[H,S],{strokeColor:'black'});\nboard.create('segment',[H,A],{strokeColor:'#475569',dash:2});\nboard.create('segment',[S,D],{strokeColor:'#475569',dash:2});\nboard.create('segment',[H,B],{strokeColor:'#1d4ed8',strokeWidth:2});\nboard.create('segment',[B,C],{strokeColor:'#15803d',strokeWidth:2});\nboard.create('segment',[C,S],{strokeColor:'#1d4ed8',strokeWidth:2});\nboard.create('text',[3.8,3.2,'8 km'],{fontSize:12});\nboard.create('text',[-1.0,1.5,'1.5km'],{fontSize:10});\nboard.create('text',[8.15,1.5,'1.5km'],{fontSize:10});\nboard.create('text',[0.35,2.5,'\\u03b8'],{fontSize:12});\nboard.create('text',[7.45,2.5,'\\u03b8'],{fontSize:12});\nboard.create('text',[3.9,-0.35,'CANAL'],{fontSize:10});\nboard.create('text',[-0.2,0.2,'A'],{fontSize:11});board.create('text',[1.4,0.2,'B'],{fontSize:11});board.create('text',[6.5,0.2,'C'],{fontSize:11});board.create('text',[8,0.2,'D'],{fontSize:11});\nboard.create('text',[-0.25,3.25,'H'],{fontSize:12});board.create('text',[8.05,3.25,'S'],{fontSize:12});\nboard.unsuspendUpdate();"
    }
  },
  h: 'In right triangle $AHB$, $HB = \\frac{1.5}{\\cos\\theta}$ and $AB = 1.5\\tan\\theta$. Walked $= 2HB$, skated $= 8 - 2(1.5\\tan\\theta)$; time $=$ distance$/$speed.',
  s: 'In $\\triangle AHB$: $HB = \\frac{1.5}{\\cos\\theta}$, $AB = 1.5\\tan\\theta$. Walked $= 2HB = \\frac{3}{\\cos\\theta}$, time $= \\frac{3}{\\cos\\theta}\\div 5 = \\frac{3}{5\\cos\\theta}$. Skated $= 8 - 3\\tan\\theta$, time $= \\frac{8 - 3\\tan\\theta}{15} = \\frac{8}{15} - \\frac{\\tan\\theta}{5}$. Total $T = \\frac{3}{5\\cos\\theta} + \\frac{8}{15} - \\frac{\\tan\\theta}{5}$.',
  solutionSteps: [
  { explanation: 'In right triangle $AHB$ (vertical $1.5$ km, angle $\\theta$), find the walked side and horizontal offset.', workingOut: 'HB = \\frac{1.5}{\\cos\\theta}, \\quad AB = 1.5\\tan\\theta' },
  { explanation: 'Total distance walked is $2HB$; time $= \\frac{\\text{distance}}{5}$.', workingOut: '\\text{time walked} = \\frac{3/\\cos\\theta}{5} = \\frac{3}{5\\cos\\theta}' },
  { explanation: 'The skated distance is $8$ minus the two horizontal offsets.', workingOut: 'BC = 8 - 3\\tan\\theta' },
  { explanation: 'Time skated $= \\frac{BC}{15}$.', workingOut: '\\text{time skated} = \\frac{8 - 3\\tan\\theta}{15} = \\frac{8}{15} - \\frac{\\tan\\theta}{5}' },
  { explanation: 'Add the times.', workingOut: 'T = \\frac{3}{5\\cos\\theta} + \\frac{8}{15} - \\frac{\\tan\\theta}{5}' }]

},

{
  id: 'fortst2020s-q19b',
  topicId: 'y12a-6C',
  c: '6C',
  t: 'Applications of differentiation of trigonometric functions',
  source: 'Fort Street 2020 Trial Q19(b)',
  type: 'short_answer',
  difficulty: 'hard',
  q: 'For $T = \\dfrac{3}{5\\cos\\theta} + \\dfrac{8}{15} - \\dfrac{\\tan\\theta}{5}$, find, to the nearest minute, the value of $\\theta$ that minimises the travel time.',
  a: '$\\theta \\approx 19°28\'$',
  opts: [],
  h: 'Differentiate, set $\\frac{dT}{d\\theta} = 0$, and solve $\\sin\\theta = \\frac{1}{3}$.',
  s: '$\\frac{dT}{d\\theta} = \\frac{3\\sin\\theta}{5\\cos^2\\theta} - \\frac{\\sec^2\\theta}{5} = \\frac{1}{5\\cos^2\\theta}(3\\sin\\theta - 1)$. Setting this to zero: $3\\sin\\theta = 1 \\Rightarrow \\sin\\theta = \\frac{1}{3} \\Rightarrow \\theta \\approx 19°28\'$. A table of slopes confirms a minimum.',
  solutionSteps: [
  { explanation: 'Differentiate $T$ using the chain rule on $\\frac{3}{5}\\sec\\theta$ and $-\\frac{1}{5}\\tan\\theta$.', workingOut: '\\frac{dT}{d\\theta} = \\frac{3\\sin\\theta}{5\\cos^2\\theta} - \\frac{\\sec^2\\theta}{5}' },
  { explanation: 'Factor out $\\frac{1}{5\\cos^2\\theta}$ (always positive).', workingOut: '= \\frac{1}{5\\cos^2\\theta}(3\\sin\\theta - 1)' },
  { explanation: 'Set $\\frac{dT}{d\\theta} = 0$.', workingOut: '3\\sin\\theta - 1 = 0 \\Rightarrow \\sin\\theta = \\frac{1}{3}' },
  { explanation: 'Solve for $\\theta$.', workingOut: '\\theta = \\sin^{-1}\\tfrac{1}{3} \\approx 19°28\'' },
  { explanation: 'Confirm a minimum with a table of slopes (gradient $-,0,+$).', workingOut: '\\text{minimum at } \\theta \\approx 19°28\'' }]

}];