/**
 * Danebank 2020 HSC Trial — SIMILAR (variant) questions.
 * Same topics, structure and difficulty as the originals, with changed
 * numbers, pronumerals and contexts. Paired 1:1 with DANEBANK_2020_QUESTIONS.
 */
export const DANEBANK_2020_SIMILAR_QUESTIONS = [

  // ─── SECTION I: MULTIPLE CHOICE ───────────────────────────────────────────

  {
    id: 'dane2020s-mc1',
    topicId: 'y11a-7C',
    c: '7C',
    t: 'Equations of lines',
    source: 'Danebank 2020 Trial Q1',
    type: 'multiple_choice',
    difficulty: 'easy',
    q: 'What is the gradient of the line $\\dfrac{x}{4} + \\dfrac{y}{3} = 1$?',
    a: '$-\\dfrac{3}{4}$',
    opts: ['$-\\dfrac{4}{3}$', '$-\\dfrac{3}{4}$', '$\\dfrac{3}{4}$', '$\\dfrac{4}{3}$'],
    h: 'Rearrange into $y = mx + b$; the coefficient of $x$ is the gradient.',
    s: 'Make $y$ the subject: $\\frac{y}{3} = 1 - \\frac{x}{4}$, so $y = 3 - \\frac{3}{4}x$. The gradient is $-\\frac{3}{4}$.',
    solutionSteps: [
      { explanation: 'Isolate the $y$ term to begin rearranging into gradient–intercept form.', workingOut: '\\frac{y}{3} = 1 - \\frac{x}{4}' },
      { explanation: 'Multiply every term by $3$ to make $y$ the subject.', workingOut: 'y = 3 - \\frac{3}{4}x' },
      { explanation: 'Read off the gradient as the coefficient of $x$.', workingOut: 'm = -\\frac{3}{4}' }
    ]
  },

  {
    id: 'dane2020s-mc2',
    topicId: 'y11a-9E',
    c: '9E',
    t: 'Negative index powers',
    source: 'Danebank 2020 Trial Q2',
    type: 'multiple_choice',
    difficulty: 'easy',
    q: 'What is the expression for $\\dfrac{dy}{dx}$ if $y = \\dfrac{1}{x^3}$?',
    a: '$-\\dfrac{3}{x^4}$',
    opts: ['$-\\dfrac{3}{x^4}$', '$-\\dfrac{1}{x^2}$', '$\\dfrac{1}{x^2}$', '$\\dfrac{3}{x^4}$'],
    h: 'Rewrite $\\dfrac{1}{x^3}$ as $x^{-3}$ and apply the power rule.',
    s: 'Write $y = x^{-3}$. By the power rule, $\\frac{dy}{dx} = -3x^{-4} = -\\frac{3}{x^4}$.',
    solutionSteps: [
      { explanation: 'Rewrite using a negative index.', workingOut: 'y = \\frac{1}{x^3} = x^{-3}' },
      { explanation: 'Apply the power rule: bring down $-3$, reduce the index by $1$.', workingOut: '\\frac{dy}{dx} = -3x^{-4}' },
      { explanation: 'Rewrite with a positive index.', workingOut: '\\frac{dy}{dx} = -\\frac{3}{x^4}' }
    ]
  },

  {
    id: 'dane2020s-mc3',
    topicId: 'y11a-3G',
    c: '3G',
    t: 'Powers, cubics, and circles',
    source: 'Danebank 2020 Trial Q3',
    type: 'multiple_choice',
    difficulty: 'medium',
    q: 'What is the value of $c$ for which the circle $(x-2)^2 + (y-5)^2 = c$ touches the $x$-axis?',
    a: '$25$',
    opts: ['$5$', '$10$', '$25$', '$2$'],
    h: 'The radius must equal the distance from the centre to the $x$-axis.',
    s: 'The centre is $(2, 5)$, distance $5$ to the $x$-axis. For tangency $r = 5$, so $c = r^2 = 25$.',
    solutionSteps: [
      { explanation: 'Identify the centre from the standard form.', workingOut: '\\text{Centre } (2, 5)' },
      { explanation: 'For the circle to touch the $x$-axis, the radius equals the $y$-coordinate of the centre.', workingOut: 'r = 5' },
      { explanation: 'Since $c = r^2$, substitute $r = 5$.', workingOut: 'c = 25' }
    ]
  },

  {
    id: 'dane2020s-mc4',
    topicId: 'y11a-3B',
    c: '3B',
    t: 'Functions, relations, and graphs',
    source: 'Danebank 2020 Trial Q4',
    type: 'multiple_choice',
    difficulty: 'medium',
    q: 'What is the domain of the function $f(x) = \\sqrt{x} + \\dfrac{1}{\\sqrt{3-x}}$?',
    a: '$[0, 3)$',
    opts: ['$(0, 3)$', '$[0, 3)$', '$(0, 3]$', '$[0, 3]$'],
    h: '$\\sqrt{x}$ needs $x \\geq 0$; $\\dfrac{1}{\\sqrt{3-x}}$ needs $3 - x > 0$.',
    s: '$\\sqrt{x}$ requires $x \\geq 0$. $\\frac{1}{\\sqrt{3-x}}$ requires $3 - x > 0$, i.e. $x < 3$. Combined: $[0, 3)$.',
    solutionSteps: [
      { explanation: 'The square root $\\sqrt{x}$ requires a non-negative argument.', workingOut: 'x \\geq 0' },
      { explanation: 'The term $\\frac{1}{\\sqrt{3-x}}$ needs $3 - x > 0$ (strict, since it is a denominator).', workingOut: '3 - x > 0 \\Rightarrow x < 3' },
      { explanation: 'Combine both restrictions.', workingOut: '0 \\leq x < 3' },
      { explanation: 'Write in interval notation.', workingOut: '[0, 3)' }
    ]
  },

  {
    id: 'dane2020s-mc5',
    topicId: 'y12a-1B',
    c: '1B',
    t: 'Arithmetic sequences',
    source: 'Danebank 2020 Trial Q5',
    type: 'multiple_choice',
    difficulty: 'medium',
    q: 'The $5^{\\text{th}}$ term of an arithmetic sequence is $23$ and the $9^{\\text{th}}$ term is $43$. Find the first term $a$ and the common difference $d$.',
    a: '$a = 3$ and $d = 5$',
    opts: ['$a = 3$ and $d = 5$', '$a = 5$ and $d = 3$', '$a = -3$ and $d = 5$', '$a = 3$ and $d = -5$'],
    h: 'Use $T_n = a + (n-1)d$ to write two equations and subtract.',
    s: '$T_5 = a + 4d = 23$, $T_9 = a + 8d = 43$. Subtracting: $4d = 20$, so $d = 5$, and $a = 23 - 4(5) = 3$.',
    solutionSteps: [
      { explanation: 'Write the $5^{\\text{th}}$ term using $T_n = a + (n-1)d$.', workingOut: 'a + 4d = 23' },
      { explanation: 'Write the $9^{\\text{th}}$ term.', workingOut: 'a + 8d = 43' },
      { explanation: 'Subtract to eliminate $a$ and solve for $d$.', workingOut: '4d = 20 \\Rightarrow d = 5' },
      { explanation: 'Back-substitute to find $a$.', workingOut: 'a = 23 - 20 = 3' }
    ]
  },

  {
    id: 'dane2020s-mc6',
    topicId: 'y12a-3D',
    c: '3D',
    t: 'Concavity and points of inflection',
    source: 'Danebank 2020 Trial Q6',
    type: 'multiple_choice',
    difficulty: 'medium',
    q: 'The graph of $y = f(x)$ is shown. $x = A$ and $x = C$ are stationary points, and $x = B$ is a point of inflection. For $B < x < C$, which statement is true?',
    a: '$f\'(x) < 0$ and $f\'\'(x) > 0$',
    opts: [
      '$f\'(x) < 0$ and $f\'\'(x) > 0$',
      '$f\'(x) < 0$ and $f\'\'(x) < 0$',
      '$f\'(x) > 0$ and $f\'\'(x) > 0$',
      '$f\'(x) > 0$ and $f\'\'(x) < 0$'
    ],
    graphData: {
      jsxGraph: {
        width: 420,
        height: 320,
        boundingbox: [-4, 6, 4, -6],
        boardOptions: { keepaspectratio: false },
        script: "board.suspendUpdate();\nboard.create('arrow', [[-4,0],[4,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-6],[0,6]], {strokeColor:'black'});\nvar f=function(x){ return 0.9*Math.pow(x,3) - 1.2*x*x - 2.7*x + 0.6; };\nboard.create('functiongraph', [function(x){ return f(x); }, -2.6, 3.0], {strokeColor:'#1d4ed8',strokeWidth:2});\nboard.create('point', [-0.776, f(-0.776)], {name:'A', size:2.5, color:'#475569', fixed:true, label:{offset:[-6,-14]}});\nboard.create('point', [0.444, f(0.444)], {name:'B', size:2.5, color:'#475569', fixed:true, label:{offset:[-6,-14]}});\nboard.create('point', [2.0, f(2.0)], {name:'C', size:2.5, color:'#475569', fixed:true, label:{offset:[0,-14]}});\nboard.create('text', [3.6, 0.4, 'x'], {fontSize:13});\nboard.create('text', [0.25, 5.5, 'y'], {fontSize:13});\nboard.unsuspendUpdate();"
      }
    },
    h: 'Between the inflection $B$ and the minimum $C$, decide if the curve is rising or falling and how it bends.',
    s: 'Between $B$ and $C$ the curve is still falling (towards the minimum at $C$), so $f\'(x) < 0$. Past the inflection at $B$ the curve is concave up, so $f\'\'(x) > 0$.',
    solutionSteps: [
      { explanation: 'On $B < x < C$ the curve continues to decrease towards the minimum at $C$.', workingOut: 'f\'(x) < 0 \\quad (\\text{decreasing})' },
      { explanation: 'Concavity changes at the inflection $B$; just to the right of $B$ the curve is concave up.', workingOut: 'f\'\'(x) > 0 \\quad (\\text{concave up})' },
      { explanation: 'Combine the two conditions.', workingOut: 'f\'(x) < 0 \\text{ and } f\'\'(x) > 0' }
    ]
  },

  {
    id: 'dane2020s-mc7',
    topicId: 'y11a-4B',
    c: '4B',
    t: 'Solving quadratic inequations',
    source: 'Danebank 2020 Trial Q7',
    type: 'multiple_choice',
    difficulty: 'medium',
    q: 'Which one of the following is the set of all solutions to $3x^2 - 7x + 2 \\geq 0$?',
    a: '$\\left(-\\infty, \\dfrac{1}{3}\\right] \\cup [2, \\infty)$',
    opts: [
      '$\\left[\\dfrac{1}{3}, 2\\right]$',
      '$\\left(\\dfrac{1}{3}, 2\\right)$',
      '$\\left(-\\infty, \\dfrac{1}{3}\\right) \\cup (2, \\infty)$',
      '$\\left(-\\infty, \\dfrac{1}{3}\\right] \\cup [2, \\infty)$'
    ],
    h: 'Factorise; for "$\\geq 0$" with an upward parabola the solution is outside (and at) the roots.',
    s: '$3x^2 - 7x + 2 = (3x-1)(x-2)$, roots $x = \\frac{1}{3}, 2$. Upward parabola is $\\geq 0$ outside the roots: $x \\leq \\frac{1}{3}$ or $x \\geq 2$.',
    solutionSteps: [
      { explanation: 'Factorise the quadratic.', workingOut: '3x^2 - 7x + 2 = (3x - 1)(x - 2)' },
      { explanation: 'Find the roots.', workingOut: 'x = \\frac{1}{3}, \\quad x = 2' },
      { explanation: 'The parabola opens upward, so it is $\\geq 0$ outside and at the roots.', workingOut: 'x \\leq \\frac{1}{3} \\text{ or } x \\geq 2' },
      { explanation: 'Write in interval notation with closed brackets.', workingOut: '\\left(-\\infty, \\tfrac{1}{3}\\right] \\cup [2, \\infty)' }
    ]
  },

  {
    id: 'dane2020s-mc8',
    topicId: 'y12a-2I',
    c: '2I',
    t: 'Trigonometric graphs',
    source: 'Danebank 2020 Trial Q8',
    type: 'multiple_choice',
    difficulty: 'medium',
    q: 'What is the change in amplitude and period when $f(x) = \\tfrac{1}{2}\\sin 6x$ is transformed into $g(x) = \\sin 3x$?',
    a: 'The amplitude is doubled and the period is doubled.',
    opts: [
      'The amplitude is halved and the period is halved.',
      'The amplitude is halved and the period is doubled.',
      'The amplitude is doubled and the period is halved.',
      'The amplitude is doubled and the period is doubled.'
    ],
    h: 'Compare amplitudes (front coefficient) and periods ($\\frac{2\\pi}{b}$).',
    s: 'For $f$: amplitude $\\frac{1}{2}$, period $\\frac{2\\pi}{6} = \\frac{\\pi}{3}$. For $g$: amplitude $1$, period $\\frac{2\\pi}{3}$. Amplitude doubles ($\\frac{1}{2} \\to 1$); period doubles ($\\frac{\\pi}{3} \\to \\frac{2\\pi}{3}$).',
    solutionSteps: [
      { explanation: 'Find amplitude and period of $f$.', workingOut: '\\text{amp}_f = \\tfrac{1}{2}, \\quad T_f = \\frac{2\\pi}{6} = \\frac{\\pi}{3}' },
      { explanation: 'Find amplitude and period of $g$.', workingOut: '\\text{amp}_g = 1, \\quad T_g = \\frac{2\\pi}{3}' },
      { explanation: 'Compare amplitudes: factor of $2$.', workingOut: '\\frac{1}{1/2} = 2 \\Rightarrow \\text{doubled}' },
      { explanation: 'Compare periods: factor of $2$.', workingOut: '\\frac{2\\pi/3}{\\pi/3} = 2 \\Rightarrow \\text{doubled}' }
    ]
  },

  {
    id: 'dane2020s-mc9',
    topicId: 'y12a-9C',
    c: '9C',
    t: 'Quartiles and interquartile range',
    source: 'Danebank 2020 Trial Q9',
    type: 'multiple_choice',
    difficulty: 'hard',
    q: 'For an ungrouped data set with no outliers, the largest possible range is how many times the interquartile range?',
    a: '$4$ times',
    opts: ['$2$ times', '$3$ times', '$4$ times', '$5$ times'],
    h: 'Each whisker extends at most $1.5\\times\\text{IQR}$; the box spans $1\\times\\text{IQR}$.',
    s: 'No outliers means each whisker is at most $1.5\\times\\text{IQR}$. Adding the box ($1\\times\\text{IQR}$): $1.5 + 1 + 1.5 = 4$ times the IQR.',
    solutionSteps: [
      { explanation: 'With no outliers, each whisker can extend at most $1.5\\times\\text{IQR}$ from a quartile.', workingOut: '\\text{each whisker} \\leq 1.5\\,\\text{IQR}' },
      { explanation: 'The box between the quartiles spans one IQR.', workingOut: '\\text{box} = 1\\,\\text{IQR}' },
      { explanation: 'Add lower whisker, box and upper whisker.', workingOut: '1.5 + 1 + 1.5 = 4 \\Rightarrow 4 \\times \\text{IQR}' }
    ]
  },

  {
    id: 'dane2020s-mc10',
    topicId: 'y12a-5K',
    c: '5K',
    t: 'Calculus with other bases',
    source: 'Danebank 2020 Trial Q10',
    type: 'multiple_choice',
    difficulty: 'hard',
    q: 'What is the value of $\\displaystyle\\int_1^2 3^{-x}\\,dx$?',
    a: '$\\dfrac{2}{9\\ln 3}$',
    opts: ['$\\dfrac{2}{9\\ln 3}$', '$\\dfrac{1}{9\\ln 3}$', '$\\dfrac{2\\ln 3}{9}$', '$\\dfrac{\\ln 3}{9}$'],
    h: 'The primitive of $3^{-x}$ is $\\dfrac{3^{-x}}{-\\ln 3}$.',
    s: '$\\int 3^{-x}\\,dx = \\frac{3^{-x}}{-\\ln 3}$. Evaluate from $1$ to $2$: $\\frac{1}{-\\ln 3}\\left(\\frac{1}{9} - \\frac{1}{3}\\right) = \\frac{1}{-\\ln 3}\\left(-\\frac{2}{9}\\right) = \\frac{2}{9\\ln 3}$.',
    solutionSteps: [
      { explanation: 'Find the primitive, dividing by the inner derivative $-1$ and $\\ln 3$.', workingOut: '\\int 3^{-x}\\,dx = \\frac{3^{-x}}{-\\ln 3}' },
      { explanation: 'Substitute the limits $x = 2$ and $x = 1$.', workingOut: '\\frac{1}{-\\ln 3}\\left(3^{-2} - 3^{-1}\\right)' },
      { explanation: 'Evaluate the powers.', workingOut: '= \\frac{1}{-\\ln 3}\\left(\\frac{1}{9} - \\frac{1}{3}\\right) = \\frac{1}{-\\ln 3}\\left(-\\frac{2}{9}\\right)' },
      { explanation: 'Simplify.', workingOut: '= \\frac{2}{9\\ln 3}' }
    ]
  },

  // ─── SECTION II: FREE RESPONSE ────────────────────────────────────────────

  {
    id: 'dane2020s-q11',
    topicId: 'y12a-4H',
    c: '4H',
    t: 'The trapezoidal rule',
    source: 'Danebank 2020 Trial Q11',
    type: 'short_answer',
    difficulty: 'medium',
    q: 'Use two applications of the trapezoidal rule to approximate the area of the figure, which has heights $8$ m, $9$ m and $12$ m at points spaced $5$ m apart along the base.',
    a: '$95 \\text{ m}^2$',
    opts: [],
    graphData: {
      jsxGraph: {
        width: 420,
        height: 280,
        boundingbox: [-2, 14, 14, -3],
        boardOptions: { keepaspectratio: false },
        script: "board.suspendUpdate();\nboard.create('segment', [[0,0],[10,0]], {strokeColor:'black'});\nboard.create('segment', [[0,0],[0,8]], {strokeColor:'black'});\nboard.create('segment', [[5,0],[5,9]], {strokeColor:'black', dash:2});\nboard.create('segment', [[10,0],[10,12]], {strokeColor:'black'});\nboard.create('functiongraph', [function(x){ return 8 + (4/100)*x*x; }, 0, 10], {strokeColor:'#1d4ed8',strokeWidth:2});\nboard.create('text', [-1.6, 4, '8 m'], {fontSize:12});\nboard.create('text', [3.3, 4.5, '9 m'], {fontSize:12});\nboard.create('text', [10.4, 6, '12 m'], {fontSize:12});\nboard.create('text', [2, -1.7, '5 m'], {fontSize:12});\nboard.create('text', [7, -1.7, '5 m'], {fontSize:12});\nboard.unsuspendUpdate();"
      }
    },
    h: 'Apply $A \\approx \\dfrac{h}{2}(f_0 + f_1)$ to each $5$ m strip and add.',
    s: 'First strip: $\\frac{5}{2}(8 + 9) = 42.5$. Second strip: $\\frac{5}{2}(9 + 12) = 52.5$. Total $\\approx 95 \\text{ m}^2$.',
    solutionSteps: [
      { explanation: 'State the trapezoidal rule for one strip of width $h = 5$.', workingOut: 'A \\approx \\frac{h}{2}(f_0 + f_1), \\quad h = 5' },
      { explanation: 'Apply to the first strip (heights $8$ and $9$).', workingOut: 'A_1 = \\frac{5}{2}(8 + 9) = 42.5' },
      { explanation: 'Apply to the second strip (heights $9$ and $12$).', workingOut: 'A_2 = \\frac{5}{2}(9 + 12) = 52.5' },
      { explanation: 'Add the two strip areas.', workingOut: 'A \\approx 42.5 + 52.5 = 95 \\text{ m}^2' }
    ]
  },

  {
    id: 'dane2020s-q12a',
    topicId: 'y11a-11C',
    c: '11C',
    t: 'Arcs and sectors',
    source: 'Danebank 2020 Trial Q12(a)',
    type: 'short_answer',
    difficulty: 'easy',
    q: 'Mia found the radius of sector $OAB$ (area $\\dfrac{49\\pi}{8}$, arc length $\\dfrac{7\\pi}{4}$) using: $(1)\\ \\tfrac{1}{2}r^2\\theta = \\tfrac{49\\pi}{8}$, $(2)\\ r\\theta = \\tfrac{7\\pi}{4}$, $(3)\\ \\tfrac{1}{2}r = \\tfrac{7}{2}$. What operation did Mia perform on $(1)$ and $(2)$ to get $(3)$?',
    a: 'She divided equation $(1)$ by equation $(2)$.',
    opts: [],
    graphData: {
      jsxGraph: {
        width: 320,
        height: 320,
        boundingbox: [-1.5, 5, 5, -3.5],
        boardOptions: { keepaspectratio: true },
        script: "board.suspendUpdate();\nvar O=[0,0];\nvar A=[0,4];\nvar B=[4*Math.cos(-Math.PI/3), 4*Math.sin(-Math.PI/3)];\nboard.create('sector', [O, A, B], {fillColor:'#cbd5e1', fillOpacity:0.4, strokeColor:'#475569', strokeWidth:1.5});\nboard.create('segment', [O, A], {strokeColor:'black'});\nboard.create('segment', [O, B], {strokeColor:'black'});\nboard.create('point', O, {name:'O', size:2, color:'black', fixed:true, label:{offset:[-12,-2]}});\nboard.create('point', A, {name:'A', size:2, color:'black', fixed:true, label:{offset:[-4,12]}});\nboard.create('point', B, {name:'B', size:2, color:'black', fixed:true, label:{offset:[8,-6]}});\nboard.create('text', [-0.6, 2, 'r'], {fontSize:14});\nboard.create('text', [0.55, 0.25, '\\u03b8'], {fontSize:14});\nboard.unsuspendUpdate();"
      }
    },
    h: 'See how $\\theta$ cancels between $(1)$, $(2)$ and $(3)$.',
    s: 'Dividing $(1)$ by $(2)$ cancels $r\\theta$: $\\frac{\\frac{1}{2}r^2\\theta}{r\\theta} = \\frac{1}{2}r$, and $\\frac{49\\pi/8}{7\\pi/4} = \\frac{7}{2}$, giving $(3)$.',
    solutionSteps: [
      { explanation: 'Dividing the left sides cancels $r\\theta$, leaving $\\frac{1}{2}r$.', workingOut: '\\frac{\\frac{1}{2}r^2\\theta}{r\\theta} = \\frac{1}{2}r' },
      { explanation: 'Check the right sides divide to $(3)$’s value.', workingOut: '\\frac{49\\pi/8}{7\\pi/4} = \\frac{7}{2}' },
      { explanation: 'State the operation.', workingOut: '(3) = (1) \\div (2)' }
    ]
  },

  {
    id: 'dane2020s-q12b',
    topicId: 'y11a-11C',
    c: '11C',
    t: 'Arcs and sectors',
    source: 'Danebank 2020 Trial Q12(b)',
    type: 'short_answer',
    difficulty: 'easy',
    q: 'Using the equations from part (a), with $r = 7$ units, what is the value of $\\theta$ for sector $OAB$ (arc length $\\dfrac{7\\pi}{4}$)?',
    a: '$\\theta = \\dfrac{\\pi}{4}$',
    opts: [],
    h: 'Substitute $r = 7$ into $r\\theta = \\dfrac{7\\pi}{4}$.',
    s: 'From $(3)$, $\\frac{1}{2}r = \\frac{7}{2}$ gives $r = 7$. Then $7\\theta = \\frac{7\\pi}{4}$, so $\\theta = \\frac{\\pi}{4}$.',
    solutionSteps: [
      { explanation: 'Confirm the radius from equation $(3)$.', workingOut: 'r = 7 \\text{ units}' },
      { explanation: 'Substitute into the arc-length equation.', workingOut: '7\\theta = \\frac{7\\pi}{4}' },
      { explanation: 'Divide by $7$.', workingOut: '\\theta = \\frac{\\pi}{4}' }
    ]
  },

  {
    id: 'dane2020s-q13a',
    topicId: 'y11a-6J',
    c: '6J',
    t: 'Problems with general triangles',
    source: 'Danebank 2020 Trial Q13(a)',
    type: 'short_answer',
    difficulty: 'medium',
    q: '$ABC$ is a triangular field with $AB = BC = 6$ km. The bearing of $B$ from $A$ is $125°$ and the bearing of $C$ from $B$ is $035°$. Show that $\\angle ABC = 90°$.',
    a: '$\\angle ABC = 90°$',
    opts: [],
    graphData: {
      geometry: {
        width: 280,
        points: { "A": [0, 3], "C": [4.5, 3.4], "B": [1.8, 0] },
        segments: [
          { from: "A", to: "B" },
          { from: "B", to: "C" },
          { from: "C", to: "A" }
        ],
        sideLabels: [
          { between: ["A", "B"], text: "6 km" },
          { between: ["B", "C"], text: "6 km" }
        ]
      }
    },
    h: 'Use alternate angles on the parallel north lines for the $125°$ bearing.',
    s: 'The north lines at $A$ and $B$ are parallel, so $\\angle N_1BA = 180° - 125° = 55°$. The bearing of $C$ from $B$ is $035°$, so $\\angle N_1BC = 35°$. Hence $\\angle ABC = 55° + 35° = 90°$.',
    solutionSteps: [
      { explanation: 'By alternate angles between the parallel north lines, the angle between $BA$ and north at $B$ is $180° - 125°$.', workingOut: '\\angle ABN_1 = 180° - 125° = 55° \\quad [\\text{alternate angles}]' },
      { explanation: 'The bearing of $C$ from $B$ gives the angle from north to $BC$.', workingOut: '\\angle N_1BC = 35°' },
      { explanation: 'Add the two angles at $B$.', workingOut: '\\angle ABC = 55° + 35° = 90°' }
    ]
  },

  {
    id: 'dane2020s-q13b',
    topicId: 'y11a-6H',
    c: '6H',
    t: 'The sine rule and the area formula',
    source: 'Danebank 2020 Trial Q13(b)',
    type: 'short_answer',
    difficulty: 'medium',
    q: 'For the field $ABC$ with $AB = BC = 6$ km and $\\angle ABC = 90°$, find the area of the field correct to the nearest square kilometre.',
    a: '$18 \\text{ km}^2$',
    opts: [],
    h: 'Use $A = \\dfrac{1}{2}ac\\sin B$ with the included angle $90°$.',
    s: '$A = \\frac{1}{2}(6)(6)\\sin 90° = \\frac{1}{2}(36)(1) = 18 \\text{ km}^2$.',
    solutionSteps: [
      { explanation: 'State the area formula with two sides and the included angle.', workingOut: 'A = \\frac{1}{2}ac\\sin B' },
      { explanation: 'Substitute $a = c = 6$ and $B = 90°$.', workingOut: 'A = \\frac{1}{2}(6)(6)\\sin 90°' },
      { explanation: 'Evaluate ($\\sin 90° = 1$).', workingOut: 'A = 18 \\text{ km}^2' }
    ]
  },

  {
    id: 'dane2020s-q14a',
    topicId: 'y11a-1E',
    c: '1E',
    t: 'Solving simultaneous equations',
    source: 'Danebank 2020 Trial Q14(a)',
    type: 'short_answer',
    difficulty: 'medium',
    q: 'The curves $y = 2 - \\dfrac{2}{x}$ and $y = x - 1$ (for $x \\geq 0$) meet at $P$ and $Q$. Find the $x$-coordinates of $P$ and $Q$.',
    a: '$x = 1$ (at $P$) and $x = 2$ (at $Q$)',
    opts: [],
    graphData: {
      jsxGraph: {
        width: 400,
        height: 320,
        boundingbox: [-1, 4, 5, -4],
        boardOptions: { keepaspectratio: false },
        script: "board.suspendUpdate();\nboard.create('arrow', [[-1,0],[5,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-4],[0,4]], {strokeColor:'black'});\nboard.create('functiongraph', [function(x){ return x - 1; }, -1, 5], {strokeColor:'#15803d',strokeWidth:2});\nboard.create('functiongraph', [function(x){ return 2 - 2/x; }, 0.35, 5], {strokeColor:'#1d4ed8',strokeWidth:2});\nboard.create('point', [1,0], {name:'P', size:2.5, color:'red', fixed:true, label:{offset:[-14,-6]}});\nboard.create('point', [2,1], {name:'Q', size:2.5, color:'red', fixed:true, label:{offset:[8,8]}});\nboard.create('text', [4.6, 0.4, 'x'], {fontSize:13});\nboard.create('text', [0.25, 3.6, 'y'], {fontSize:13});\nboard.unsuspendUpdate();"
      }
    },
    h: 'Set the expressions equal and multiply by $x$ to form a quadratic.',
    s: 'Set $x - 1 = 2 - \\frac{2}{x}$. Multiply by $x$: $x^2 - x = 2x - 2$, so $x^2 - 3x + 2 = 0$, i.e. $(x-1)(x-2) = 0$. Thus $x = 1$ (at $P$) and $x = 2$ (at $Q$).',
    solutionSteps: [
      { explanation: 'Set the $y$-values equal at the intersections.', workingOut: 'x - 1 = 2 - \\frac{2}{x}' },
      { explanation: 'Multiply every term by $x$.', workingOut: 'x^2 - x = 2x - 2' },
      { explanation: 'Form a quadratic in standard form.', workingOut: 'x^2 - 3x + 2 = 0' },
      { explanation: 'Factorise and solve.', workingOut: '(x-1)(x-2) = 0 \\Rightarrow x = 1\\,(P),\\ 2\\,(Q)' }
    ]
  },

  {
    id: 'dane2020s-q14b',
    topicId: 'y12a-4F',
    c: '4F',
    t: 'Finding areas by integration',
    source: 'Danebank 2020 Trial Q14(b)',
    type: 'short_answer',
    difficulty: 'hard',
    q: 'Hence find, in simplest exact form, the area of the region between $y = 2 - \\dfrac{2}{x}$ and $y = x - 1$ (between $x = 1$ and $x = 2$).',
    a: '$\\dfrac{3}{2} - 2\\ln 2 \\text{ units}^2$',
    opts: [],
    h: 'Integrate (upper $-$ lower) from $1$ to $2$; the hyperbola is on top here.',
    s: '$A = \\int_1^2 \\left[\\left(2 - \\frac{2}{x}\\right) - (x - 1)\\right] dx = \\int_1^2 \\left(3 - \\frac{2}{x} - x\\right) dx = \\left[3x - 2\\ln x - \\frac{x^2}{2}\\right]_1^2 = (6 - 2\\ln 2 - 2) - (3 - 0 - \\tfrac{1}{2}) = \\frac{3}{2} - 2\\ln 2$.',
    solutionSteps: [
      { explanation: 'Set up the area as upper minus lower curve between the intersections.', workingOut: 'A = \\int_1^2 \\left[\\left(2 - \\tfrac{2}{x}\\right) - (x - 1)\\right] dx' },
      { explanation: 'Simplify the integrand.', workingOut: 'A = \\int_1^2 \\left(3 - \\frac{2}{x} - x\\right) dx' },
      { explanation: 'Find the primitive.', workingOut: '= \\left[3x - 2\\ln x - \\frac{x^2}{2}\\right]_1^2' },
      { explanation: 'Substitute the limits ($\\ln 1 = 0$).', workingOut: '= (6 - 2\\ln 2 - 2) - \\left(3 - \\tfrac{1}{2}\\right)' },
      { explanation: 'Combine constants.', workingOut: 'A = \\frac{3}{2} - 2\\ln 2 \\text{ units}^2' }
    ]
  },

  {
    id: 'dane2020s-q15',
    topicId: 'y11a-11B',
    c: '11B',
    t: 'Solving trigonometric equations',
    source: 'Danebank 2020 Trial Q15',
    type: 'short_answer',
    difficulty: 'medium',
    q: 'Solve the equation $|2\\cos x + 1| = 1$ for $0 \\leq x \\leq \\pi$.',
    a: '$x = \\dfrac{\\pi}{2}$ or $x = \\pi$',
    opts: [],
    h: 'Split $|A| = 1$ into $A = 1$ and $A = -1$, then solve each.',
    s: 'Case 1: $2\\cos x + 1 = 1 \\Rightarrow \\cos x = 0 \\Rightarrow x = \\frac{\\pi}{2}$. Case 2: $2\\cos x + 1 = -1 \\Rightarrow \\cos x = -1 \\Rightarrow x = \\pi$. Both lie in $[0, \\pi]$.',
    solutionSteps: [
      { explanation: 'Split the absolute value equation into two cases.', workingOut: '2\\cos x + 1 = 1 \\text{ or } 2\\cos x + 1 = -1' },
      { explanation: 'Solve the first case.', workingOut: '\\cos x = 0 \\Rightarrow x = \\frac{\\pi}{2}' },
      { explanation: 'Solve the second case.', workingOut: '\\cos x = -1 \\Rightarrow x = \\pi' },
      { explanation: 'Both solutions lie in the domain.', workingOut: 'x = \\frac{\\pi}{2}, \\; \\pi \\in [0, \\pi] \\;\\checkmark' }
    ]
  },

  {
    id: 'dane2020s-q16',
    topicId: 'y11a-7B',
    c: '7B',
    t: 'Gradients',
    source: 'Danebank 2020 Trial Q16',
    type: 'short_answer',
    difficulty: 'medium',
    q: '$A(1, 12)$, $B(-3, 4)$ and $C(7, 0)$ are three points. $D$ is the midpoint of $AB$ and $E$ is the midpoint of $AC$. Show that $DE$ is parallel to $BC$.',
    a: '$m_{DE} = m_{BC} = -\\dfrac{2}{5}$, so $DE \\parallel BC$.',
    opts: [],
    h: 'Find $D$ and $E$ with the midpoint formula, then compare gradients.',
    s: '$D = \\left(\\frac{1-3}{2}, \\frac{12+4}{2}\\right) = (-1, 8)$, $E = \\left(\\frac{1+7}{2}, \\frac{12+0}{2}\\right) = (4, 6)$. $m_{DE} = \\frac{8-6}{-1-4} = -\\frac{2}{5}$, $m_{BC} = \\frac{4-0}{-3-7} = -\\frac{2}{5}$. Equal gradients ⇒ parallel.',
    solutionSteps: [
      { explanation: 'Find $D$, the midpoint of $AB$.', workingOut: 'D = \\left(\\frac{1+(-3)}{2}, \\frac{12+4}{2}\\right) = (-1, 8)' },
      { explanation: 'Find $E$, the midpoint of $AC$.', workingOut: 'E = \\left(\\frac{1+7}{2}, \\frac{12+0}{2}\\right) = (4, 6)' },
      { explanation: 'Compute the gradient of $DE$.', workingOut: 'm_{DE} = \\frac{8 - 6}{-1 - 4} = -\\frac{2}{5}' },
      { explanation: 'Compute the gradient of $BC$.', workingOut: 'm_{BC} = \\frac{4 - 0}{-3 - 7} = -\\frac{2}{5}' },
      { explanation: 'Equal gradients imply parallel lines.', workingOut: 'm_{DE} = m_{BC} \\Rightarrow DE \\parallel BC \\quad \\blacksquare' }
    ]
  },

  {
    id: 'dane2020s-q17a',
    topicId: 'y11a-12G',
    c: '12G',
    t: 'Conditional probability',
    source: 'Danebank 2020 Trial Q17(a)',
    type: 'short_answer',
    difficulty: 'medium',
    q: '$250$ people took a lie detector test. Of those lying, $120$ tested positive and $30$ negative; of those not lying, $10$ tested positive and $90$ negative. Find the probability that a person who was lying tested positive.',
    a: '$\\dfrac{4}{5}$',
    opts: [],
    h: 'Restrict to the people who were lying, then find the fraction testing positive.',
    s: 'Lying total $= 120 + 30 = 150$. Of these, $120$ tested positive: $P(\\text{positive} \\mid \\text{lying}) = \\frac{120}{150} = \\frac{4}{5}$.',
    solutionSteps: [
      { explanation: 'Count the total who were lying.', workingOut: '\\text{lying} = 120 + 30 = 150' },
      { explanation: 'Count those lying who tested positive.', workingOut: '\\text{lying and positive} = 120' },
      { explanation: 'Form and simplify the conditional probability.', workingOut: 'P(\\text{positive} \\mid \\text{lying}) = \\frac{120}{150} = \\frac{4}{5}' }
    ]
  },

  {
    id: 'dane2020s-q17b',
    topicId: 'y11a-12D',
    c: '12D',
    t: 'Venn diagrams and the addition theorem',
    source: 'Danebank 2020 Trial Q17(b)',
    type: 'short_answer',
    difficulty: 'medium',
    q: 'For the same data ($250$ people: lying $120$ pos / $30$ neg; not lying $10$ pos / $90$ neg), find the probability that the test was inaccurate.',
    a: '$\\dfrac{4}{25}$',
    opts: [],
    h: 'Inaccurate = (lying and negative) or (not lying and positive); add those counts over $250$.',
    s: 'Inaccurate results: $30 + 10 = 40$ people. $P(\\text{inaccurate}) = \\frac{40}{250} = \\frac{4}{25}$.',
    solutionSteps: [
      { explanation: 'Identify the two inaccurate outcomes.', workingOut: '(\\text{lying} \\cap \\text{negative}) \\cup (\\text{not lying} \\cap \\text{positive})' },
      { explanation: 'Add the two counts.', workingOut: '30 + 10 = 40' },
      { explanation: 'Divide by the total and simplify.', workingOut: 'P = \\frac{40}{250} = \\frac{4}{25}' }
    ]
  },

  {
    id: 'dane2020s-q18',
    topicId: 'y11a-9A',
    c: '9A',
    t: 'Tangents and the derivative',
    source: 'Danebank 2020 Trial Q18',
    type: 'short_answer',
    difficulty: 'medium',
    q: 'Find, in general form, the equation of the normal to the curve $y = \\sqrt{x}$ at the point where $x = 9$.',
    a: '$6x + y - 57 = 0$',
    opts: [],
    h: 'Tangent gradient is $\\dfrac{1}{2\\sqrt{x}}$ at $x = 9$; the normal gradient is its negative reciprocal.',
    s: '$\\frac{dy}{dx} = \\frac{1}{2\\sqrt{x}}$; at $x = 9$, gradient $= \\frac{1}{6}$, so normal gradient $= -6$. Point $(9, 3)$. Normal: $y - 3 = -6(x - 9)$, i.e. $6x + y - 57 = 0$.',
    solutionSteps: [
      { explanation: 'Differentiate $y = x^{1/2}$.', workingOut: '\\frac{dy}{dx} = \\frac{1}{2\\sqrt{x}}' },
      { explanation: 'Evaluate the tangent gradient at $x = 9$.', workingOut: '\\left.\\frac{dy}{dx}\\right|_{x=9} = \\frac{1}{6}' },
      { explanation: 'The normal gradient is the negative reciprocal.', workingOut: 'm_{\\text{normal}} = -6' },
      { explanation: 'Find the point of contact.', workingOut: 'y = \\sqrt{9} = 3 \\Rightarrow (9, 3)' },
      { explanation: 'Use point–gradient form and rearrange to general form.', workingOut: 'y - 3 = -6(x - 9) \\Rightarrow 6x + y - 57 = 0' }
    ]
  },

  {
    id: 'dane2020s-q19a',
    topicId: 'y11a-8D',
    c: '8D',
    t: 'Laws for logarithms',
    source: 'Danebank 2020 Trial Q19(a)',
    type: 'short_answer',
    difficulty: 'easy',
    q: 'Show that $\\log_x 3 = \\dfrac{1}{\\log_3 x}$.',
    a: 'By change of base, $\\log_x 3 = \\dfrac{\\log_3 3}{\\log_3 x} = \\dfrac{1}{\\log_3 x}$.',
    opts: [],
    h: 'Apply the change-of-base rule in base $3$.',
    s: 'Change to base $3$: $\\log_x 3 = \\frac{\\log_3 3}{\\log_3 x} = \\frac{1}{\\log_3 x}$ since $\\log_3 3 = 1$.',
    solutionSteps: [
      { explanation: 'Apply the change-of-base rule with base $3$.', workingOut: '\\log_x 3 = \\frac{\\log_3 3}{\\log_3 x}' },
      { explanation: 'Simplify using $\\log_3 3 = 1$.', workingOut: '= \\frac{1}{\\log_3 x} \\quad \\blacksquare' }
    ]
  },

  {
    id: 'dane2020s-q19b',
    topicId: 'y11a-8E',
    c: '8E',
    t: 'Equations involving logarithms and indices',
    source: 'Danebank 2020 Trial Q19(b)',
    type: 'short_answer',
    difficulty: 'medium',
    q: 'Solve the equation $\\log_3 x = 9\\log_x 3$.',
    a: '$x = 27$ or $x = \\dfrac{1}{27}$',
    opts: [],
    h: 'Use part (a) to replace $\\log_x 3$, then let $u = \\log_3 x$.',
    s: 'Using (a): $\\log_3 x = \\frac{9}{\\log_3 x}$, so $(\\log_3 x)^2 = 9$, giving $\\log_3 x = 3$ or $-3$. Thus $x = 3^3 = 27$ or $x = 3^{-3} = \\frac{1}{27}$.',
    solutionSteps: [
      { explanation: 'Substitute the result from (a).', workingOut: '\\log_3 x = 9 \\times \\frac{1}{\\log_3 x}' },
      { explanation: 'Multiply through by $\\log_3 x$.', workingOut: '(\\log_3 x)^2 = 9' },
      { explanation: 'Take square roots.', workingOut: '\\log_3 x = 3 \\text{ or } -3' },
      { explanation: 'Convert to index form.', workingOut: 'x = 27 \\text{ or } \\frac{1}{27}' }
    ]
  },

  {
    id: 'dane2020s-q20',
    topicId: 'y12a-3H',
    c: '3H',
    t: 'Primitive functions',
    source: 'Danebank 2020 Trial Q20',
    type: 'short_answer',
    difficulty: 'medium',
    q: 'If $f\'(x) = 6x^2 - 4x + 3$ and $f(1) = 8$, find an expression for $f(x)$.',
    a: '$f(x) = 2x^3 - 2x^2 + 3x + 5$',
    opts: [],
    h: 'Integrate $f\'(x)$, then use $f(1) = 8$ to find $C$.',
    s: '$f(x) = 2x^3 - 2x^2 + 3x + C$. Using $f(1) = 8$: $2 - 2 + 3 + C = 8$, so $C = 5$. Hence $f(x) = 2x^3 - 2x^2 + 3x + 5$.',
    solutionSteps: [
      { explanation: 'Integrate term by term, adding a constant.', workingOut: 'f(x) = 2x^3 - 2x^2 + 3x + C' },
      { explanation: 'Substitute $f(1) = 8$.', workingOut: '2 - 2 + 3 + C = 8' },
      { explanation: 'Solve for $C$.', workingOut: 'C = 5' },
      { explanation: 'State the final expression.', workingOut: 'f(x) = 2x^3 - 2x^2 + 3x + 5' }
    ]
  },

  {
    id: 'dane2020s-q21a',
    topicId: 'y12a-3B',
    c: '3B',
    t: 'Stationary points and turning points',
    source: 'Danebank 2020 Trial Q21(a)',
    type: 'short_answer',
    difficulty: 'hard',
    q: 'Consider $f(x) = 8x^3 - 3x^4$. Find the stationary points on $y = f(x)$ and determine their nature.',
    a: '$(0, 0)$ is a horizontal point of inflection; $(2, 16)$ is a maximum turning point.',
    opts: [],
    h: 'Solve $f\'(x) = 0$, then classify with $f\'\'(x)$ or a sign table.',
    s: '$f\'(x) = 24x^2 - 12x^3 = 12x^2(2 - x) = 0$ gives $x = 0$ or $x = 2$. $f\'\'(x) = 48x - 36x^2$. $f\'\'(0) = 0$ with $f\'$ not changing sign ⇒ $(0, 0)$ is a horizontal point of inflection. $f\'\'(2) = -48 < 0$ ⇒ $(2, 16)$ is a maximum.',
    solutionSteps: [
      { explanation: 'Differentiate and factorise.', workingOut: 'f\'(x) = 24x^2 - 12x^3 = 12x^2(2 - x)' },
      { explanation: 'Set $f\'(x) = 0$.', workingOut: 'x = 0 \\text{ or } x = 2' },
      { explanation: 'Find the $y$-values.', workingOut: 'f(0) = 0, \\quad f(2) = 64 - 48 = 16' },
      { explanation: 'Second derivative for classification.', workingOut: 'f\'\'(x) = 48x - 36x^2' },
      { explanation: 'At $x = 0$, $f\'\'(0) = 0$ and a sign table shows $f\' > 0$ on both sides — a horizontal point of inflection.', workingOut: '(0, 0): \\text{ horizontal POI}' },
      { explanation: 'At $x = 2$, $f\'\'(2) = 96 - 144 = -48 < 0$ — a maximum.', workingOut: '(2, 16): \\text{ maximum}' }
    ]
  },

  {
    id: 'dane2020s-q21b',
    topicId: 'y12a-3E',
    c: '3E',
    t: 'Systematic curve sketching with the derivative',
    source: 'Danebank 2020 Trial Q21(b)',
    type: 'teacher_review',
    difficulty: 'medium',
    q: 'Sketch the graph of $f(x) = 8x^3 - 3x^4$, showing the stationary points and the intercepts on the axes.',
    a: 'Curve with $x$-intercepts at $(0,0)$ and $\\left(\\tfrac{8}{3},0\\right)$, a horizontal point of inflection at $(0,0)$, and a maximum at $(2,16)$.',
    opts: [],
    h: 'Plot $(0,0)$, the maximum $(2,16)$ and the intercept $\\left(\\tfrac{8}{3},0\\right)$, then join smoothly.',
    s: 'Intercepts: $f(x) = x^3(8 - 3x) = 0$ gives $x = 0$ and $x = \\frac{8}{3}$. Horizontal POI at $(0,0)$; maximum at $(2,16)$. Negative leading coefficient ⇒ both ends go down.',
    solutionSteps: [
      { explanation: 'Find the $x$-intercepts.', workingOut: 'x^3(8 - 3x) = 0 \\Rightarrow x = 0,\\ \\tfrac{8}{3}' },
      { explanation: 'Recall key features from part (a).', workingOut: '(0,0)\\text{ POI}, \\quad (2,16)\\text{ max}' },
      { explanation: 'End behaviour from the leading term $-3x^4$.', workingOut: 'x \\to \\pm\\infty \\Rightarrow f(x) \\to -\\infty' },
      { explanation: 'Sketch the curve through the key points.', workingOut: '',
        graphData: {
          jsxGraph: {
            width: 400,
            height: 320,
            boundingbox: [-1.2, 20, 3.5, -10],
            boardOptions: { keepaspectratio: false },
            script: "board.suspendUpdate();\nboard.create('arrow', [[-1.2,0],[3.5,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-10],[0,20]], {strokeColor:'black'});\nboard.create('functiongraph', [function(x){ return 8*Math.pow(x,3) - 3*Math.pow(x,4); }, -1.0, 3.1], {strokeColor:'#1d4ed8',strokeWidth:2});\nboard.create('point', [0,0], {name:'(0, 0)', size:2.5, color:'red', fixed:true, label:{offset:[-16,-12]}});\nboard.create('point', [2,16], {name:'(2, 16)', size:2.5, color:'red', fixed:true, label:{offset:[8,6]}});\nboard.create('point', [2.667,0], {name:'(8/3, 0)', size:2.5, color:'red', fixed:true, label:{offset:[6,12]}});\nboard.create('text', [3.3, 1.2, 'x'], {fontSize:13});\nboard.create('text', [0.3, 19, 'y'], {fontSize:13});\nboard.unsuspendUpdate();"
          }
        }
      }
    ]
  },

  {
    id: 'dane2020s-q22a',
    topicId: 'y12a-10A',
    c: '10A',
    t: 'Probability distributions',
    source: 'Danebank 2020 Trial Q22(a)',
    type: 'short_answer',
    difficulty: 'medium',
    q: 'A discrete random variable $X$ has $P(X{=}1)=0.25$, $P(X{=}2)=0.4$, $P(X{=}3)=a$, $P(X{=}4)=b$, and mean $2.2$. Find two equations in $a$ and $b$.',
    a: '$a + b = 0.35$ and $3a + 4b = 1.15$',
    opts: [],
    h: 'Probabilities sum to $1$; and $\\sum x\\,P(x) = 2.2$.',
    s: 'Sum: $0.25 + 0.4 + a + b = 1 \\Rightarrow a + b = 0.35$. Mean: $0.25 + 0.8 + 3a + 4b = 2.2 \\Rightarrow 3a + 4b = 1.15$.',
    solutionSteps: [
      { explanation: 'All probabilities sum to $1$.', workingOut: '0.25 + 0.4 + a + b = 1 \\Rightarrow a + b = 0.35' },
      { explanation: 'Apply $E(X) = \\sum x P(x) = 2.2$, with $1(0.25) + 2(0.4) = 1.05$.', workingOut: '1.05 + 3a + 4b = 2.2' },
      { explanation: 'Simplify to the second equation.', workingOut: '3a + 4b = 1.15' }
    ]
  },

  {
    id: 'dane2020s-q22b',
    topicId: 'y12a-10A',
    c: '10A',
    t: 'Probability distributions',
    source: 'Danebank 2020 Trial Q22(b)',
    type: 'short_answer',
    difficulty: 'medium',
    q: 'Hence find the values of $a$ and $b$ (where $a + b = 0.35$ and $3a + 4b = 1.15$).',
    a: '$a = 0.25$ and $b = 0.10$',
    opts: [],
    h: 'Multiply the first equation by $3$ and subtract from the second.',
    s: 'Multiply $(1)$ by $3$: $3a + 3b = 1.05$. Subtract from $3a + 4b = 1.15$: $b = 0.10$. Then $a = 0.35 - 0.10 = 0.25$.',
    solutionSteps: [
      { explanation: 'Scale the first equation to match the $a$-terms.', workingOut: '3a + 3b = 1.05' },
      { explanation: 'Subtract to eliminate $a$.', workingOut: '(3a + 4b) - (3a + 3b) = 1.15 - 1.05 \\Rightarrow b = 0.10' },
      { explanation: 'Back-substitute for $a$.', workingOut: 'a = 0.35 - 0.10 = 0.25' }
    ]
  },

  {
    id: 'dane2020s-q23',
    topicId: 'y12a-6B',
    c: '6B',
    t: 'Differentiating the trigonometric functions',
    source: 'Danebank 2020 Trial Q23',
    type: 'short_answer',
    difficulty: 'medium',
    q: 'If $y = x\\cos 3x$, find $\\dfrac{dy}{dx}$.',
    a: '$\\dfrac{dy}{dx} = \\cos 3x - 3x\\sin 3x$',
    opts: [],
    h: 'Product rule with $u = x$, $v = \\cos 3x$; $\\frac{d}{dx}\\cos 3x = -3\\sin 3x$.',
    s: 'With $u = x$ ($u\' = 1$) and $v = \\cos 3x$ ($v\' = -3\\sin 3x$): $\\frac{dy}{dx} = x(-3\\sin 3x) + \\cos 3x = \\cos 3x - 3x\\sin 3x$.',
    solutionSteps: [
      { explanation: 'Set up the product rule.', workingOut: 'u = x, \\quad v = \\cos 3x' },
      { explanation: 'Differentiate each factor (chain rule on $\\cos 3x$).', workingOut: 'u\' = 1, \\quad v\' = -3\\sin 3x' },
      { explanation: 'Apply $\\frac{dy}{dx} = uv\' + vu\'$.', workingOut: '\\frac{dy}{dx} = x(-3\\sin 3x) + \\cos 3x(1)' },
      { explanation: 'Simplify.', workingOut: '\\frac{dy}{dx} = \\cos 3x - 3x\\sin 3x' }
    ]
  },

  {
    id: 'dane2020s-q24a',
    topicId: 'y11a-5F',
    c: '5F',
    t: 'Composite functions',
    source: 'Danebank 2020 Trial Q24(a)',
    type: 'short_answer',
    difficulty: 'easy',
    q: 'Consider $f(x) = e^x$ and $g(x) = \\ln(x - 3)$. Find the composite function $f(g(x))$.',
    a: '$f(g(x)) = x - 3$',
    opts: [],
    h: 'Substitute $g$ into $f$; $e^{\\ln A} = A$.',
    s: '$f(g(x)) = e^{\\ln(x-3)} = x - 3$.',
    solutionSteps: [
      { explanation: 'Substitute $g(x)$ into $f$.', workingOut: 'f(g(x)) = e^{\\ln(x-3)}' },
      { explanation: 'Simplify using $e^{\\ln A} = A$.', workingOut: 'f(g(x)) = x - 3' }
    ]
  },

  {
    id: 'dane2020s-q24b',
    topicId: 'y11a-5F',
    c: '5F',
    t: 'Composite functions',
    source: 'Danebank 2020 Trial Q24(b)',
    type: 'short_answer',
    difficulty: 'medium',
    q: 'Find, in interval notation, the range of the composite function $f(g(x)) = x - 3$ (where $g(x) = \\ln(x-3)$).',
    a: '$(0, \\infty)$',
    opts: [],
    h: 'The domain restriction from $g$ is $x > 3$; apply it before finding the range.',
    s: 'The logarithm requires $x - 3 > 0$, so $x > 3$. Then $y = x - 3 > 0$, giving range $(0, \\infty)$.',
    solutionSteps: [
      { explanation: 'Find the domain restriction from $\\ln(x-3)$.', workingOut: 'x - 3 > 0 \\Rightarrow x > 3' },
      { explanation: 'Apply it to $y = x - 3$.', workingOut: 'x > 3 \\Rightarrow y > 0' },
      { explanation: 'State the range.', workingOut: '(0, \\infty)' }
    ]
  },

  {
    id: 'dane2020s-q25a',
    topicId: 'y12a-9D',
    c: '9D',
    t: 'Bivariate data',
    source: 'Danebank 2020 Trial Q25(a)',
    type: 'short_answer',
    difficulty: 'medium',
    q: 'For a class of students, the English marks $x$ and Science marks $y$ have a strong upward linear trend. A calculator gives the correlation coefficient as approximately $0.9$. Describe the nature of the correlation.',
    a: 'A strong positive correlation.',
    opts: [],
    h: 'Interpret $r$ near $+1$.',
    s: 'Since $r \\approx 0.9$ is close to $1$ and positive, there is a strong positive correlation between English and Science marks.',
    solutionSteps: [
      { explanation: 'Read the correlation coefficient from the calculator output.', workingOut: 'r \\approx 0.9' },
      { explanation: 'Interpret a value near $+1$.', workingOut: 'r \\approx 0.9 \\Rightarrow \\text{strong positive correlation}' }
    ]
  },

  {
    id: 'dane2020s-q25b',
    topicId: 'y12a-9E',
    c: '9E',
    t: 'Line of best fit',
    source: 'Danebank 2020 Trial Q25(b)',
    type: 'short_answer',
    difficulty: 'medium',
    q: 'The least-squares regression line of Science mark $y$ on English mark $x$ is $y = 0.72x + 18$. Estimate the Science mark of a student whose English mark is $83$.',
    a: 'Estimated Science mark $\\approx 78$',
    opts: [],
    h: 'Substitute $x = 83$ into the regression equation.',
    s: '$y = 0.72(83) + 18 = 77.76 \\approx 78$.',
    solutionSteps: [
      { explanation: 'Substitute the English mark $x = 83$ into the regression line.', workingOut: 'y = 0.72(83) + 18' },
      { explanation: 'Evaluate and round to a whole mark.', workingOut: 'y = 77.76 \\approx 78' }
    ]
  },

  {
    id: 'dane2020s-q26',
    topicId: 'y12a-5B',
    c: '5B',
    t: 'Differentiation of e^x',
    source: 'Danebank 2020 Trial Q26',
    type: 'short_answer',
    difficulty: 'medium',
    q: 'If $y = \\dfrac{e^x}{x+2}$, find $\\dfrac{dy}{dx}$.',
    a: '$\\dfrac{dy}{dx} = \\dfrac{(x+1)e^x}{(x+2)^2}$',
    opts: [],
    h: 'Quotient rule with $u = e^x$, $v = x + 2$.',
    s: '$\\frac{dy}{dx} = \\frac{(x+2)e^x - e^x}{(x+2)^2} = \\frac{e^x(x+1)}{(x+2)^2}$.',
    solutionSteps: [
      { explanation: 'Set up the quotient rule.', workingOut: 'u = e^x, \\quad v = x + 2' },
      { explanation: 'Differentiate numerator and denominator.', workingOut: 'u\' = e^x, \\quad v\' = 1' },
      { explanation: 'Apply the quotient rule.', workingOut: '\\frac{dy}{dx} = \\frac{(x+2)e^x - e^x}{(x+2)^2}' },
      { explanation: 'Factor $e^x$ and simplify.', workingOut: '= \\frac{(x+1)e^x}{(x+2)^2}' }
    ]
  },

  {
    id: 'dane2020s-q27',
    topicId: 'y12a-6D',
    c: '6D',
    t: 'Integrating the trigonometric functions',
    source: 'Danebank 2020 Trial Q27',
    type: 'short_answer',
    difficulty: 'easy',
    q: 'Find $\\displaystyle\\int \\cos 2x - \\sin 3x\\ dx$.',
    a: '$\\dfrac{1}{2}\\sin 2x + \\dfrac{1}{3}\\cos 3x + C$',
    opts: [],
    h: '$\\int \\cos 2x\\,dx = \\frac{1}{2}\\sin 2x$ and $\\int -\\sin 3x\\,dx = \\frac{1}{3}\\cos 3x$.',
    s: '$\\int \\cos 2x\\,dx = \\frac{1}{2}\\sin 2x$ and $\\int -\\sin 3x\\,dx = \\frac{1}{3}\\cos 3x$. So the integral is $\\frac{1}{2}\\sin 2x + \\frac{1}{3}\\cos 3x + C$.',
    solutionSteps: [
      { explanation: 'Integrate $\\cos 2x$.', workingOut: '\\int \\cos 2x\\,dx = \\frac{1}{2}\\sin 2x' },
      { explanation: 'Integrate $-\\sin 3x$ (gives $+\\frac{1}{3}\\cos 3x$).', workingOut: '\\int -\\sin 3x\\,dx = \\frac{1}{3}\\cos 3x' },
      { explanation: 'Combine with the constant of integration.', workingOut: '\\frac{1}{2}\\sin 2x + \\frac{1}{3}\\cos 3x + C' }
    ]
  },

  {
    id: 'dane2020s-q28',
    topicId: 'y12a-1H',
    c: '1H',
    t: 'The limiting sum of a geometric series',
    source: 'Danebank 2020 Trial Q28',
    type: 'short_answer',
    difficulty: 'medium',
    q: 'Find, in simplest form, the limiting sum of the series $\\cos^2 x + \\cos^4 x + \\cos^6 x + \\cdots$ for $0 < x < \\dfrac{\\pi}{2}$.',
    a: '$\\cot^2 x$',
    opts: [],
    h: 'Geometric with $a = \\cos^2 x$, $r = \\cos^2 x$; use $1 - \\cos^2 x = \\sin^2 x$.',
    s: '$a = \\cos^2 x$, $r = \\cos^2 x$ ($0 < r < 1$). $S_\\infty = \\frac{\\cos^2 x}{1 - \\cos^2 x} = \\frac{\\cos^2 x}{\\sin^2 x} = \\cot^2 x$.',
    solutionSteps: [
      { explanation: 'Identify the geometric first term and ratio.', workingOut: 'a = \\cos^2 x, \\quad r = \\cos^2 x' },
      { explanation: 'Apply $S_\\infty = \\frac{a}{1-r}$.', workingOut: 'S_\\infty = \\frac{\\cos^2 x}{1 - \\cos^2 x}' },
      { explanation: 'Use $1 - \\cos^2 x = \\sin^2 x$.', workingOut: '= \\frac{\\cos^2 x}{\\sin^2 x}' },
      { explanation: 'Simplify.', workingOut: '= \\cot^2 x' }
    ]
  },

  {
    id: 'dane2020s-q29a',
    topicId: 'y12a-3G',
    c: '3G',
    t: 'Applications of maximisation and minimisation',
    source: 'Danebank 2020 Trial Q29(a)',
    type: 'short_answer',
    difficulty: 'medium',
    q: 'A closed metal crate of fixed volume $36\\text{ m}^3$ is a rectangular prism with length $3x$ m, width $x$ m and height $h$ m. Show that the surface area is $A = 6x^2 + \\dfrac{96}{x}$.',
    a: '$A = 6x^2 + \\dfrac{96}{x}$',
    opts: [],
    graphData: {
      jsxGraph: {
        width: 360,
        height: 300,
        boundingbox: [-1.5, 5, 7.5, -2],
        boardOptions: { keepaspectratio: true },
        script: "board.suspendUpdate();\nvar dx=1.6, dy=1.1;\nvar A=[0,0],B=[4,0],C=[4,2],D=[0,2];\nvar E=[dx,dy],F=[4+dx,dy],G=[4+dx,2+dy],H=[dx,2+dy];\nfunction seg(p,q,o){ board.create('segment',[p,q],o||{strokeColor:'black'}); }\nseg(A,B);seg(B,C);seg(C,D);seg(D,A);\nseg(E,F,{strokeColor:'#94a3b8',dash:2});seg(F,G);seg(G,H);seg(H,E,{strokeColor:'#94a3b8',dash:2});\nseg(A,E,{strokeColor:'#94a3b8',dash:2});seg(B,F);seg(C,G);seg(D,H);\nboard.create('text',[1.8,-1,'3x'],{fontSize:13});\nboard.create('text',[4.5,2.5,'h'],{fontSize:13});\nboard.create('text',[4.75,0.4,'x'],{fontSize:13});\nboard.unsuspendUpdate();"
      }
    },
    h: 'Write surface area in terms of $x$ and $h$, then use $V = 3x^2h = 36$ to eliminate $h$.',
    s: 'Surface area: $A = 2(3x\\cdot x) + 2(x\\cdot h) + 2(3x\\cdot h) = 6x^2 + 8xh$. Volume: $3x^2h = 36 \\Rightarrow h = \\frac{12}{x^2}$. Substituting: $A = 6x^2 + 8x\\cdot\\frac{12}{x^2} = 6x^2 + \\frac{96}{x}$.',
    solutionSteps: [
      { explanation: 'Write the total surface area of the closed box.', workingOut: 'A = 2(3x \\cdot x) + 2(x \\cdot h) + 2(3x \\cdot h)' },
      { explanation: 'Simplify.', workingOut: 'A = 6x^2 + 2xh + 6xh = 6x^2 + 8xh' },
      { explanation: 'Use the fixed volume to express $h$.', workingOut: 'V = 3x^2 h = 36 \\Rightarrow h = \\frac{12}{x^2}' },
      { explanation: 'Substitute $h$.', workingOut: 'A = 6x^2 + 8x \\cdot \\frac{12}{x^2}' },
      { explanation: 'Simplify the second term.', workingOut: 'A = 6x^2 + \\frac{96}{x}' }
    ]
  },

  {
    id: 'dane2020s-q29b',
    topicId: 'y12a-3G',
    c: '3G',
    t: 'Applications of maximisation and minimisation',
    source: 'Danebank 2020 Trial Q29(b)',
    type: 'short_answer',
    difficulty: 'hard',
    q: 'Hence find the minimum area of metal required for the crate, where $A = 6x^2 + \\dfrac{96}{x}$.',
    a: '$72 \\text{ m}^2$ (at $x = 2$ m)',
    opts: [],
    h: 'Differentiate, set $A\' = 0$, confirm with $A\'\'$, then evaluate $A$.',
    s: '$A\' = 12x - \\frac{96}{x^2} = 0 \\Rightarrow 12x^3 = 96 \\Rightarrow x = 2$. $A\'\' = 12 + \\frac{192}{x^3} = 36 > 0$, a minimum. $A = 6(2)^2 + \\frac{96}{2} = 24 + 48 = 72 \\text{ m}^2$.',
    solutionSteps: [
      { explanation: 'Differentiate $A = 6x^2 + 96x^{-1}$.', workingOut: 'A\' = 12x - \\frac{96}{x^2}' },
      { explanation: 'Set $A\' = 0$.', workingOut: '12x - \\frac{96}{x^2} = 0 \\Rightarrow 12x^3 = 96' },
      { explanation: 'Solve for $x$.', workingOut: 'x^3 = 8 \\Rightarrow x = 2' },
      { explanation: 'Confirm a minimum with the second derivative.', workingOut: 'A\'\' = 12 + \\frac{192}{x^3}; \\quad A\'\'(2) = 36 > 0' },
      { explanation: 'Evaluate $A$ at $x = 2$.', workingOut: 'A = 6(4) + \\frac{96}{2} = 24 + 48 = 72 \\text{ m}^2' }
    ]
  },

  {
    id: 'dane2020s-q30',
    topicId: 'y12a-2H',
    c: '2H',
    t: 'Combinations of transformations',
    source: 'Danebank 2020 Trial Q30',
    type: 'short_answer',
    difficulty: 'medium',
    q: 'The function $f(x) = x^2$ is transformed into a new function whose graph is a downward parabola with vertex $(2, -4)$ passing through $(0, -8)$. Find the equation in the form $g(x) = k\\,f(x + b) + c$.',
    a: '$g(x) = -f(x - 2) - 4$',
    opts: [],
    graphData: {
      jsxGraph: {
        width: 360,
        height: 320,
        boundingbox: [-2, 2, 6, -10],
        boardOptions: { keepaspectratio: false },
        script: "board.suspendUpdate();\nboard.create('arrow', [[-2,0],[6,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-10],[0,2]], {strokeColor:'black'});\nboard.create('functiongraph', [function(x){ return -Math.pow(x-2,2) - 4; }, -0.5, 4.5], {strokeColor:'#1d4ed8',strokeWidth:2});\nboard.create('point', [2,-4], {name:'(2, -4)', size:2.5, color:'red', fixed:true, label:{offset:[8,8]}});\nboard.create('point', [0,-8], {name:'(0, -8)', size:2.5, color:'red', fixed:true, label:{offset:[8,0]}});\nboard.create('text', [5.6, 0.4, 'x'], {fontSize:13});\nboard.create('text', [0.25, 1.6, 'y'], {fontSize:13});\nboard.unsuspendUpdate();"
      }
    },
    h: 'The vertex shift gives $b$ and $c$; substitute $(0, -8)$ to find $k$.',
    s: 'Vertex moved to $(2, -4)$: right $2$ ($x \\to x - 2$, $b = -2$) and down $4$ ($c = -4$). So $g(x) = k\\,f(x - 2) - 4$. Using $(0, -8)$, with $f(-2) = 4$: $-8 = 4k - 4$, so $k = -1$. Thus $g(x) = -f(x - 2) - 4$.',
    solutionSteps: [
      { explanation: 'Read the shifts from the vertex at $(2, -4)$.', workingOut: 'x \\to x - 2 \\;(b = -2), \\quad c = -4' },
      { explanation: 'Write the partial form.', workingOut: 'g(x) = k\\,f(x - 2) - 4' },
      { explanation: 'Use the point $(0, -8)$ with $f(-2) = (-2)^2 = 4$.', workingOut: '-8 = k(4) - 4' },
      { explanation: 'Solve for $k$.', workingOut: '4k = -4 \\Rightarrow k = -1' },
      { explanation: 'State the final function.', workingOut: 'g(x) = -f(x - 2) - 4' }
    ]
  },

  {
    id: 'dane2020s-q31',
    topicId: 'y11a-11B',
    c: '11B',
    t: 'Solving trigonometric equations',
    source: 'Danebank 2020 Trial Q31',
    type: 'short_answer',
    difficulty: 'hard',
    q: 'Solve $2\\sin(3\\theta) = \\sqrt{3}$ for $0 \\leq \\theta \\leq \\pi$.',
    a: '$\\theta = \\dfrac{\\pi}{9}, \\dfrac{2\\pi}{9}, \\dfrac{7\\pi}{9}, \\dfrac{8\\pi}{9}$',
    opts: [],
    h: 'Expand to $0 \\leq 3\\theta \\leq 3\\pi$; solve for $3\\theta$ first.',
    s: '$\\sin 3\\theta = \\frac{\\sqrt{3}}{2}$. Over $0 \\leq 3\\theta \\leq 3\\pi$: $3\\theta = \\frac{\\pi}{3}, \\frac{2\\pi}{3}, \\frac{7\\pi}{3}, \\frac{8\\pi}{3}$. Dividing by $3$: $\\theta = \\frac{\\pi}{9}, \\frac{2\\pi}{9}, \\frac{7\\pi}{9}, \\frac{8\\pi}{9}$.',
    solutionSteps: [
      { explanation: 'Isolate the sine.', workingOut: '\\sin 3\\theta = \\frac{\\sqrt{3}}{2}' },
      { explanation: 'Expand the domain for $3\\theta$.', workingOut: '0 \\leq 3\\theta \\leq 3\\pi' },
      { explanation: 'Reference angle $\\frac{\\pi}{3}$; list 1st/2nd-quadrant solutions plus their $+2\\pi$ copies within $[0, 3\\pi]$.', workingOut: '3\\theta = \\frac{\\pi}{3}, \\frac{2\\pi}{3}, \\frac{7\\pi}{3}, \\frac{8\\pi}{3}' },
      { explanation: 'Divide every value by $3$.', workingOut: '\\theta = \\frac{\\pi}{9}, \\frac{2\\pi}{9}, \\frac{7\\pi}{9}, \\frac{8\\pi}{9}' }
    ]
  },

  {
    id: 'dane2020s-q32a',
    topicId: 'y12a-2I',
    c: '2I',
    t: 'Trigonometric graphs',
    source: 'Danebank 2020 Trial Q32(a)',
    type: 'teacher_review',
    difficulty: 'medium',
    q: 'On the same diagram, draw the graphs of $y = \\cos \\pi x$ and $y = 1 - |x|$ for $-3 \\leq x \\leq 3$.',
    a: 'A cosine wave (amplitude $1$, period $2$) together with an inverted-V graph with apex $(0,1)$ and $x$-intercepts $(\\pm 1, 0)$.',
    opts: [],
    h: '$y = \\cos\\pi x$ has period $2$, amplitude $1$; $y = 1 - |x|$ is a "$\\wedge$" with apex $(0,1)$.',
    s: '$y = \\cos\\pi x$ oscillates between $1$ and $-1$ with period $2$; $y = 1 - |x|$ is a downward V with vertex $(0,1)$ and $x$-intercepts $(\\pm 1, 0)$, reaching $-2$ at $x = \\pm 3$.',
    solutionSteps: [
      { explanation: 'Describe the cosine graph.', workingOut: 'y = \\cos\\pi x: \\text{ period } 2, \\text{ amplitude } 1' },
      { explanation: 'Describe the absolute value graph.', workingOut: 'y = 1 - |x|: \\text{ apex } (0,1), \\text{ x-ints } (\\pm 1, 0)' },
      { explanation: 'Draw both on the same axes.', workingOut: '',
        graphData: {
          jsxGraph: {
            width: 440,
            height: 300,
            boundingbox: [-3.5, 1.8, 3.5, -2.6],
            boardOptions: { keepaspectratio: false },
            script: "board.suspendUpdate();\nboard.create('arrow', [[-3.5,0],[3.5,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-2.6],[0,1.8]], {strokeColor:'black'});\nboard.create('functiongraph', [function(x){ return Math.cos(Math.PI*x); }, -3, 3], {strokeColor:'#1d4ed8',strokeWidth:2});\nboard.create('functiongraph', [function(x){ return 1 - Math.abs(x); }, -3, 3], {strokeColor:'#15803d',strokeWidth:2});\nfor (var k=-3;k<=3;k++){ if(k!==0) board.create('text',[k-0.1,-0.3,''+k],{fontSize:10}); }\nboard.create('text', [2.4, 1.4, 'y = cos\\u03c0x'], {fontSize:11, strokeColor:'#1d4ed8'});\nboard.create('text', [1.3, -1.9, 'y = 1 - |x|'], {fontSize:11, strokeColor:'#15803d'});\nboard.create('text', [3.3, 0.35, 'x'], {fontSize:13});\nboard.create('text', [0.25, 1.6, 'y'], {fontSize:13});\nboard.unsuspendUpdate();"
          }
        }
      }
    ]
  },

  {
    id: 'dane2020s-q32b',
    topicId: 'y12a-2E',
    c: '2E',
    t: 'Using graphs to solve equations and inequations',
    source: 'Danebank 2020 Trial Q32(b)',
    type: 'short_answer',
    difficulty: 'medium',
    q: 'Hence find the number of solutions of $\\cos \\pi x = 1 - |x|$ in the domain $(-\\infty, \\infty)$.',
    a: '$5$ solutions',
    opts: [],
    h: 'Count the intersections; for $|x| > 2$ the line is below $-1$, where cosine cannot reach.',
    s: 'The solutions are the intersections of the two graphs. For $|x| > 2$, $1 - |x| < -1$, outside the range of cosine, so all intersections lie in $[-2, 2]$. Counting gives $5$ solutions.',
    solutionSteps: [
      { explanation: 'Each solution is an intersection of the two graphs.', workingOut: '\\cos\\pi x = 1 - |x| \\iff \\text{graphs intersect}' },
      { explanation: 'Restrict the search: $1 - |x| < -1$ for $|x| > 2$.', workingOut: '|x| > 2 \\Rightarrow \\text{no intersections}' },
      { explanation: 'Count the intersections from the sketch.', workingOut: '5 \\text{ solutions}' }
    ]
  },

  {
    id: 'dane2020s-q33a',
    topicId: 'y12a-4A',
    c: '4A',
    t: 'Areas and the definite integral',
    source: 'Danebank 2020 Trial Q33(a)',
    type: 'short_answer',
    difficulty: 'hard',
    q: 'The graph of $y = f(x)$ consists of a quarter circle $AB$ (from $A(0,2)$ to $B(2,0)$), a straight segment $BC$ (to $C(3,-2)$), a horizontal segment $CD$ (to $D(6,-2)$) and a quarter circle $DE$ (to $E(8,0)$). Evaluate $\\displaystyle\\int_0^8 f(x)\\,dx$.',
    a: '$-7$',
    opts: [],
    graphData: {
      jsxGraph: {
        width: 440,
        height: 280,
        boundingbox: [-1, 3, 9, -3.5],
        boardOptions: { keepaspectratio: true },
        script: "board.suspendUpdate();\nboard.create('arrow', [[-1,0],[9,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-3.5],[0,3]], {strokeColor:'black'});\nboard.create('arc', [[0,0],[2,0],[0,2]], {strokeColor:'#1d4ed8', strokeWidth:2});\nboard.create('segment', [[2,0],[3,-2]], {strokeColor:'#1d4ed8', strokeWidth:2});\nboard.create('segment', [[3,-2],[6,-2]], {strokeColor:'#1d4ed8', strokeWidth:2});\nboard.create('arc', [[8,-2],[6,-2],[8,0]], {strokeColor:'#1d4ed8', strokeWidth:2});\nboard.create('point', [0,2], {name:'A', size:2, color:'#475569', fixed:true, label:{offset:[-12,4]}});\nboard.create('point', [2,0], {name:'B', size:2, color:'#475569', fixed:true, label:{offset:[2,12]}});\nboard.create('point', [3,-2], {name:'C', size:2, color:'#475569', fixed:true, label:{offset:[-2,-12]}});\nboard.create('point', [6,-2], {name:'D', size:2, color:'#475569', fixed:true, label:{offset:[2,-12]}});\nboard.create('point', [8,0], {name:'E', size:2, color:'#475569', fixed:true, label:{offset:[6,8]}});\nboard.create('text', [8.6, 0.4, 'x'], {fontSize:13});\nboard.create('text', [0.3, 2.7, 'y'], {fontSize:13});\nboard.unsuspendUpdate();"
      }
    },
    h: 'Split into the four pieces; below-axis areas are negative. Use circle, triangle and rectangle areas.',
    s: 'Quarter circle $AB$ (above): $+\\frac{1}{4}\\pi(2)^2 = \\pi$. Triangle $BC$ (below, base $1$, height $2$): $-1$. Rectangle $CD$ (below, $3\\times 2$): $-6$. Quarter circle $DE$ (below): $-\\pi$. Total: $\\pi - 1 - 6 - \\pi = -7$.',
    solutionSteps: [
      { explanation: 'Break the signed area into four geometric pieces.', workingOut: '\\int_0^8 f\\,dx = [AB] + [BC] + [CD] + [DE]' },
      { explanation: 'Quarter circle $AB$, radius $2$, above the axis.', workingOut: '[AB] = +\\tfrac{1}{4}\\pi(2)^2 = \\pi' },
      { explanation: 'Triangle $BC$ below the axis: base $1$, height $2$.', workingOut: '[BC] = -\\tfrac{1}{2}(1)(2) = -1' },
      { explanation: 'Rectangle $CD$ below the axis: width $3$, height $2$.', workingOut: '[CD] = -(3)(2) = -6' },
      { explanation: 'Quarter circle $DE$, radius $2$, below the axis.', workingOut: '[DE] = -\\tfrac{1}{4}\\pi(2)^2 = -\\pi' },
      { explanation: 'Add the signed areas; the $\\pi$ terms cancel.', workingOut: '\\pi - 1 - 6 - \\pi = -7' }
    ]
  },

  {
    id: 'dane2020s-q33b',
    topicId: 'y11a-9A',
    c: '9A',
    t: 'Tangents and the derivative',
    source: 'Danebank 2020 Trial Q33(b)',
    type: 'short_answer',
    difficulty: 'medium',
    q: 'For the graph of $y = f(x)$ in Q33, for what values of $x$ in $0 < x < 8$ is the function NOT differentiable?',
    a: '$x = 2$ and $x = 3$',
    opts: [],
    h: 'A function is not differentiable at sharp corners.',
    s: 'The graph has sharp corners where the quarter circle meets the line at $B(2,0)$ and where the line meets the horizontal segment at $C(3,-2)$, so it is not differentiable at $x = 2$ and $x = 3$.',
    solutionSteps: [
      { explanation: 'Differentiability requires a smooth curve with no corners.', workingOut: '\\text{differentiable} \\Rightarrow \\text{smooth}' },
      { explanation: 'Locate the corners at $B$ and $C$ (the join at $D$ is smooth).', workingOut: '\\text{corners at } B(2,0), \\; C(3,-2)' },
      { explanation: 'State the non-differentiable $x$-values.', workingOut: 'x = 2 \\text{ and } x = 3' }
    ]
  },

  {
    id: 'dane2020s-q34a',
    topicId: 'y12a-8B',
    c: '8B',
    t: 'Financial applications of geometric series',
    source: 'Danebank 2020 Trial Q34(a)',
    type: 'short_answer',
    difficulty: 'medium',
    q: 'Using a future-value factor of $6.3081$ for $n = 6$ periods at $2\\%$, an annuity has contributions of $\\$1500$ at the end of each half-year for $3$ years at $4\\%$ p.a. compounding half-yearly. Calculate the final amount immediately after the last contribution.',
    a: '$\\$9462.15$',
    opts: [],
    h: 'Per period: $2\\%$, $6$ periods. Multiply the contribution by the factor.',
    s: '$n = 6$, $r = 2\\%$, factor $= 6.3081$. $FV = 1500 \\times 6.3081 = \\$9462.15$.',
    solutionSteps: [
      { explanation: 'Convert to per-period values.', workingOut: 'r = 2\\%, \\quad n = 6' },
      { explanation: 'Use the future-value factor.', workingOut: '\\text{factor} = 6.3081' },
      { explanation: 'Multiply by the contribution.', workingOut: 'FV = 1500 \\times 6.3081 = \\$9462.15' }
    ]
  },

  {
    id: 'dane2020s-q34b',
    topicId: 'y12a-8C',
    c: '8C',
    t: 'Simple and compound interest',
    source: 'Danebank 2020 Trial Q34(b)',
    type: 'short_answer',
    difficulty: 'medium',
    q: 'Calculate the single lump sum needed at the start to reach the same final amount ($\\$9462.15$) after $3$ years at $4\\%$ p.a. compounding half-yearly.',
    a: '$\\$8402.11$',
    opts: [],
    h: 'Use $A = P(1+r)^n$ with $A = 9462.15$, $r = 0.02$, $n = 6$.',
    s: '$9462.15 = P(1.02)^6$, so $P = \\frac{9462.15}{(1.02)^6} = \\$8402.11$.',
    solutionSteps: [
      { explanation: 'Apply the compound interest formula.', workingOut: 'A = P(1 + r)^n' },
      { explanation: 'Substitute the values.', workingOut: '9462.15 = P(1.02)^6' },
      { explanation: 'Solve for $P$.', workingOut: 'P = \\frac{9462.15}{(1.02)^6} = \\$8402.11' }
    ]
  },

  {
    id: 'dane2020s-q35',
    topicId: 'y12a-6B',
    c: '6B',
    t: 'Differentiating the trigonometric functions',
    source: 'Danebank 2020 Trial Q35',
    type: 'short_answer',
    difficulty: 'hard',
    q: 'If $y = 2\\tan^2 x$, find the values of the constants $a$ and $b$ such that $\\dfrac{d^2y}{dx^2} = ay^2 + by + 4$.',
    a: '$a = 3$ and $b = 8$',
    opts: [],
    h: 'Differentiate twice, write in powers of $\\tan x$ using $\\sec^2 x = 1 + \\tan^2 x$, then express in terms of $y = 2\\tan^2 x$.',
    s: '$y\' = 4\\tan x\\sec^2 x = 4\\tan x + 4\\tan^3 x$. $y\'\' = 4\\sec^2 x + 12\\tan^2 x\\sec^2 x = 4(1+\\tan^2 x) + 12\\tan^2 x(1+\\tan^2 x) = 12\\tan^4 x + 16\\tan^2 x + 4$. Since $y = 2\\tan^2 x$, $\\tan^2 x = \\frac{y}{2}$ and $\\tan^4 x = \\frac{y^2}{4}$, so $y\'\' = 3y^2 + 8y + 4$. Thus $a = 3$, $b = 8$.',
    solutionSteps: [
      { explanation: 'Differentiate $y = 2\\tan^2 x$ and expand using $\\sec^2 x = 1 + \\tan^2 x$.', workingOut: 'y\' = 4\\tan x\\sec^2 x = 4\\tan x + 4\\tan^3 x' },
      { explanation: 'Differentiate again.', workingOut: 'y\'\' = 4\\sec^2 x + 12\\tan^2 x\\sec^2 x' },
      { explanation: 'Replace each $\\sec^2 x$ with $1 + \\tan^2 x$ and expand.', workingOut: '= 4 + 4\\tan^2 x + 12\\tan^2 x + 12\\tan^4 x = 12\\tan^4 x + 16\\tan^2 x + 4' },
      { explanation: 'Use $\\tan^2 x = \\frac{y}{2}$, so $\\tan^4 x = \\frac{y^2}{4}$, and substitute.', workingOut: 'y\'\' = 12\\cdot\\tfrac{y^2}{4} + 16\\cdot\\tfrac{y}{2} + 4 = 3y^2 + 8y + 4' },
      { explanation: 'Match coefficients.', workingOut: 'a = 3, \\quad b = 8' }
    ]
  },

  {
    id: 'dane2020s-q36a',
    topicId: 'y12a-5C',
    c: '5C',
    t: 'Applications of differentiation',
    source: 'Danebank 2020 Trial Q36(a)',
    type: 'short_answer',
    difficulty: 'medium',
    q: 'At time $t$ years after purchase the value of a car is $V = 30\\,000\\,e^{-0.4t}$. Find the loss in value during the third year.',
    a: '$\\approx \\$4444.05$',
    opts: [],
    h: 'The third year is $t = 2$ to $t = 3$; loss $= V(2) - V(3)$.',
    s: 'Loss $= V(2) - V(3) = 30\\,000e^{-0.8} - 30\\,000e^{-1.2} = 30\\,000(e^{-0.8} - e^{-1.2}) \\approx \\$4444.05$.',
    solutionSteps: [
      { explanation: 'The loss is the value at the start of the third year minus the value at its end.', workingOut: '\\text{Loss} = V(2) - V(3)' },
      { explanation: 'Evaluate $V(2)$.', workingOut: 'V(2) = 30\\,000e^{-0.8}' },
      { explanation: 'Evaluate $V(3)$.', workingOut: 'V(3) = 30\\,000e^{-1.2}' },
      { explanation: 'Subtract.', workingOut: '\\text{Loss} = 30\\,000(e^{-0.8} - e^{-1.2}) \\approx \\$4444.05' }
    ]
  },

  {
    id: 'dane2020s-q36b',
    topicId: 'y12a-5C',
    c: '5C',
    t: 'Applications of differentiation',
    source: 'Danebank 2020 Trial Q36(b)',
    type: 'short_answer',
    difficulty: 'hard',
    q: 'For $V = 30\\,000\\,e^{-0.4t}$, find the year in which the car is losing value at a rate of $\\$100$ per year.',
    a: 'During the $12^{\\text{th}}$ year ($t \\approx 11.97$)',
    opts: [],
    h: 'Set $\\frac{dV}{dt} = -100$ and solve for $t$.',
    s: '$\\frac{dV}{dt} = -12\\,000e^{-0.4t}$. Set $= -100$: $e^{-0.4t} = \\frac{100}{12\\,000} = 0.008\\overline{3}$, so $-0.4t = \\ln 0.008\\overline{3}$, giving $t \\approx 11.97$ — during the $12^{\\text{th}}$ year.',
    solutionSteps: [
      { explanation: 'Differentiate $V$.', workingOut: '\\frac{dV}{dt} = -12\\,000e^{-0.4t}' },
      { explanation: 'Set the rate equal to $-100$.', workingOut: '-100 = -12\\,000e^{-0.4t}' },
      { explanation: 'Solve for the exponential.', workingOut: 'e^{-0.4t} = \\frac{100}{12\\,000} = 0.008\\overline{3}' },
      { explanation: 'Take logarithms and solve for $t$.', workingOut: 't = \\frac{\\ln 0.008\\overline{3}}{-0.4} \\approx 11.97' },
      { explanation: 'Interpret: $11 < t < 12$, so during the $12^{\\text{th}}$ year.', workingOut: '\\text{during the } 12^{\\text{th}} \\text{ year}' }
    ]
  },

  {
    id: 'dane2020s-q37',
    topicId: 'y12a-8E',
    c: '8E',
    t: 'Paying off a loan',
    source: 'Danebank 2020 Trial Q37',
    type: 'short_answer',
    difficulty: 'hard',
    q: 'Bianca retires with $\\$800\\,000$ earning $6\\%$ p.a. compounded monthly. She withdraws $\\$5000$ at the end of each month, with $A_n = 800\\,000(1.005)^n - 5000\\{1 + 1.005 + \\cdots + (1.005)^{n-1}\\}$. Find, to the nearest month, the time for the fund to halve.',
    a: '$n \\approx 220$ months ($\\approx 18$ years $4$ months)',
    opts: [],
    h: 'Sum the geometric bracket, set $A_n = 400\\,000$, solve for $n$ with logarithms.',
    s: 'The bracket sums to $\\frac{(1.005)^n - 1}{0.005}$, so $A_n = 800\\,000(1.005)^n - 1\\,000\\,000((1.005)^n - 1)$. Setting $A_n = 400\\,000$: $200\\,000(1.005)^n = 600\\,000$, so $(1.005)^n = 3$ and $n = \\frac{\\ln 3}{\\ln 1.005} \\approx 220.3$, i.e. $\\approx 220$ months $\\approx 18$ years $4$ months.',
    solutionSteps: [
      { explanation: 'Sum the geometric series (ratio $1.005$, $n$ terms).', workingOut: '1 + 1.005 + \\cdots + (1.005)^{n-1} = \\frac{(1.005)^n - 1}{0.005}' },
      { explanation: 'Substitute into $A_n$ and set equal to half the initial value.', workingOut: '400\\,000 = 800\\,000(1.005)^n - 1\\,000\\,000((1.005)^n - 1)' },
      { explanation: 'Collect the exponential terms.', workingOut: '400\\,000 = 1\\,000\\,000 - 200\\,000(1.005)^n' },
      { explanation: 'Rearrange.', workingOut: '200\\,000(1.005)^n = 600\\,000 \\Rightarrow (1.005)^n = 3' },
      { explanation: 'Solve with logarithms.', workingOut: 'n = \\frac{\\ln 3}{\\ln 1.005} \\approx 220.3' },
      { explanation: 'Round up and convert.', workingOut: 'n \\approx 220 \\text{ months} \\approx 18 \\text{ years } 4 \\text{ months}' }
    ]
  },

  {
    id: 'dane2020s-q38a',
    topicId: 'y12a-7C',
    c: '7C',
    t: 'Integrating with respect to time',
    source: 'Danebank 2020 Trial Q38(a)',
    type: 'short_answer',
    difficulty: 'medium',
    q: 'A particle moves in a straight line with acceleration $a = 6t - 18$. Initially it is at rest at the origin $O$. Find expressions for the velocity $v$ and displacement $x$ in terms of $t$.',
    a: '$v = 3t^2 - 18t$ and $x = t^3 - 9t^2$',
    opts: [],
    h: 'Integrate $a$ for $v$ (use $v=0$ at $t=0$), then $v$ for $x$ (use $x=0$ at $t=0$).',
    s: '$v = \\int(6t - 18)\\,dt = 3t^2 - 18t + C$; $v = 0$ at $t = 0$ gives $C = 0$, so $v = 3t^2 - 18t$. $x = \\int(3t^2 - 18t)\\,dt = t^3 - 9t^2 + C_1$; $x = 0$ at $t = 0$ gives $C_1 = 0$, so $x = t^3 - 9t^2$.',
    solutionSteps: [
      { explanation: 'Integrate acceleration to get velocity.', workingOut: 'v = \\int(6t - 18)\\,dt = 3t^2 - 18t + C' },
      { explanation: 'Apply $v = 0$ at $t = 0$.', workingOut: 'C = 0 \\Rightarrow v = 3t^2 - 18t' },
      { explanation: 'Integrate velocity to get displacement.', workingOut: 'x = \\int(3t^2 - 18t)\\,dt = t^3 - 9t^2 + C_1' },
      { explanation: 'Apply $x = 0$ at $t = 0$.', workingOut: 'C_1 = 0 \\Rightarrow x = t^3 - 9t^2' }
    ]
  },

  {
    id: 'dane2020s-q38b',
    topicId: 'y12a-7B',
    c: '7B',
    t: 'Velocity and acceleration as derivatives',
    source: 'Danebank 2020 Trial Q38(b)',
    type: 'short_answer',
    difficulty: 'medium',
    q: 'For the particle with $v = 3t^2 - 18t$ and $x = t^3 - 9t^2$, find when and where the particle is next at rest.',
    a: 'At $t = 6$ s, at $x = -108$ m (108 m to the left of $O$)',
    opts: [],
    h: 'Set $v = 0$; take the non-zero time and substitute into $x$.',
    s: 'At rest: $3t^2 - 18t = 0 \\Rightarrow 3t(t - 6) = 0$, so $t = 0$ or $t = 6$. Next rest at $t = 6$: $x = 6^3 - 9(6)^2 = 216 - 324 = -108$, i.e. $108$ m left of $O$.',
    solutionSteps: [
      { explanation: 'Set velocity to zero and factorise.', workingOut: '3t^2 - 18t = 0 \\Rightarrow 3t(t - 6) = 0' },
      { explanation: 'Solve; the next rest after $t = 0$ is $t = 6$.', workingOut: 't = 0 \\text{ or } t = 6 \\Rightarrow t = 6 \\text{ s}' },
      { explanation: 'Substitute $t = 6$ into the displacement.', workingOut: 'x = 6^3 - 9(6)^2 = 216 - 324 = -108' },
      { explanation: 'Interpret the sign.', workingOut: 'x = -108 \\text{ m (108 m left of } O)' }
    ]
  },

  {
    id: 'dane2020s-q39a',
    topicId: 'y12a-5J',
    c: '5J',
    t: 'Applications of integration of the logarithmic function',
    source: 'Danebank 2020 Trial Q39(a)',
    type: 'short_answer',
    difficulty: 'hard',
    q: 'The curve is $y = \\dfrac{e^x - e^{-x}}{e^x + e^{-x}}$. Show that the region bounded by the curve, the $x$-axis and the line $x = k$ ($k > 0$) has area $\\ln\\!\\left(\\dfrac{e^k + e^{-k}}{2}\\right)$.',
    a: 'Area $= \\ln\\!\\left(\\dfrac{e^k + e^{-k}}{2}\\right)$',
    opts: [],
    graphData: {
      jsxGraph: {
        width: 400,
        height: 320,
        boundingbox: [-3, 1.8, 3, -1.8],
        boardOptions: { keepaspectratio: false },
        script: "board.suspendUpdate();\nboard.create('arrow', [[-3,0],[3,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-1.8],[0,1.8]], {strokeColor:'black'});\nboard.create('line', [[-3,1],[3,1]], {strokeColor:'#94a3b8', dash:2, straightFirst:false, straightLast:false});\nboard.create('line', [[-3,-1],[3,-1]], {strokeColor:'#94a3b8', dash:2, straightFirst:false, straightLast:false});\nvar f=function(x){ return (Math.exp(x)-Math.exp(-x))/(Math.exp(x)+Math.exp(-x)); };\nboard.create('functiongraph', [f, -3, 3], {strokeColor:'#1d4ed8',strokeWidth:2});\nboard.create('segment', [[1.2,0],[1.2,f(1.2)]], {strokeColor:'#475569', dash:1});\nboard.create('text', [1.35, 0.45, 'x = k'], {fontSize:11});\nboard.create('text', [-2.6, 1.15, 'y = 1'], {fontSize:11});\nboard.create('text', [-2.6, -1.2, 'y = -1'], {fontSize:11});\nboard.create('text', [2.6, 0.35, 'x'], {fontSize:13});\nboard.create('text', [0.25, 1.6, 'y'], {fontSize:13});\nboard.unsuspendUpdate();"
      }
    },
    h: 'The integrand has the form $\\frac{f\'(x)}{f(x)}$ with $f(x) = e^x + e^{-x}$.',
    s: '$A = \\int_0^k \\frac{e^x - e^{-x}}{e^x + e^{-x}}\\,dx = [\\ln(e^x + e^{-x})]_0^k = \\ln(e^k + e^{-k}) - \\ln 2 = \\ln\\!\\left(\\frac{e^k + e^{-k}}{2}\\right)$.',
    solutionSteps: [
      { explanation: 'Set up the area integral from $0$ to $k$.', workingOut: 'A = \\int_0^k \\frac{e^x - e^{-x}}{e^x + e^{-x}}\\,dx' },
      { explanation: 'The numerator is the derivative of the denominator, giving a $\\ln$ primitive.', workingOut: '\\frac{d}{dx}(e^x + e^{-x}) = e^x - e^{-x}' },
      { explanation: 'Write the primitive and apply the limits.', workingOut: 'A = \\left[\\ln(e^x + e^{-x})\\right]_0^k' },
      { explanation: 'Substitute the limits (at $x = 0$, $e^0 + e^0 = 2$).', workingOut: '= \\ln(e^k + e^{-k}) - \\ln 2' },
      { explanation: 'Combine the logarithms.', workingOut: '= \\ln\\!\\left(\\frac{e^k + e^{-k}}{2}\\right) \\quad \\blacksquare' }
    ]
  },

  {
    id: 'dane2020s-q39b',
    topicId: 'y11a-8E',
    c: '8E',
    t: 'Equations involving logarithms and indices',
    source: 'Danebank 2020 Trial Q39(b)',
    type: 'short_answer',
    difficulty: 'hard',
    q: 'Find, in simplest exact form, the value of $k$ such that the shaded region has area $2$ units squared (where the area is $\\ln\\!\\left(\\dfrac{e^k + e^{-k}}{2}\\right)$).',
    a: '$k = \\ln\\!\\left(e^2 + \\sqrt{e^4 - 1}\\right)$',
    opts: [],
    h: 'Set the area to $2$, exponentiate, let $u = e^k$ to form a quadratic, and reject the root with $k < 0$.',
    s: 'Set $\\ln\\!\\left(\\frac{e^k+e^{-k}}{2}\\right) = 2$, so $e^k + e^{-k} = 2e^2$. Multiply by $e^k$: $(e^k)^2 - 2e^2 e^k + 1 = 0$. Let $u = e^k$: $u = e^2 \\pm \\sqrt{e^4 - 1}$. Since $k > 0$ needs $u > 1$, take $u = e^2 + \\sqrt{e^4 - 1}$, so $k = \\ln\\!\\left(e^2 + \\sqrt{e^4 - 1}\\right)$.',
    solutionSteps: [
      { explanation: 'Set the area expression equal to $2$.', workingOut: '\\ln\\!\\left(\\frac{e^k + e^{-k}}{2}\\right) = 2' },
      { explanation: 'Exponentiate and multiply out.', workingOut: 'e^k + e^{-k} = 2e^2' },
      { explanation: 'Multiply by $e^k$ to form a quadratic in $e^k$.', workingOut: '(e^k)^2 - 2e^2 e^k + 1 = 0' },
      { explanation: 'Let $u = e^k$ and apply the quadratic formula.', workingOut: 'u = \\frac{2e^2 \\pm \\sqrt{4e^4 - 4}}{2} = e^2 \\pm \\sqrt{e^4 - 1}' },
      { explanation: 'Reject the root $< 1$ (gives $k < 0$); keep the larger root.', workingOut: 'u = e^2 + \\sqrt{e^4 - 1}' },
      { explanation: 'Take logarithms to solve for $k$.', workingOut: 'k = \\ln\\!\\left(e^2 + \\sqrt{e^4 - 1}\\right)' }
    ]
  },

];
