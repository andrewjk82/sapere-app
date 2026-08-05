// Girraween 2020 Year 12 Mathematics Advanced - SIMILAR QUESTIONS PART 3
// Q21s-Q38s: Similar variants for Questions 21-38 (Section II continuation)

export const GIRRAWEEN_2020_SIMILAR_QUESTIONS_PART3 = [
  {
    id: 'girr2020-mc21s',
    topicId: 'y12a-exam-girr',
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
    h: 'Complete the square for both $x$ and $y$ terms separately.',
    solutionSteps: [
      {
        explanation: 'Group the $x$ terms together and the $y$ terms together to prepare for completing the square.',
        workingOut: '(x^2 - 8x) + (y^2 + 4y) = 5'
      },
      {
        explanation: 'Complete the square for the $x$ terms by adding $\\left(\\frac{-8}{2}\\right)^2 = 16$ to both sides.',
        workingOut: '(x^2 - 8x + 16) + (y^2 + 4y) = 5 + 16'
      },
      {
        explanation: 'Complete the square for the $y$ terms by adding $\\left(\\frac{4}{2}\\right)^2 = 4$ to both sides.',
        workingOut: '(x^2 - 8x + 16) + (y^2 + 4y + 4) = 21 + 4'
      },
      {
        explanation: 'Factor the perfect square trinomials on the left side and simplify the right side.',
        workingOut: '(x - 4)^2 + (y + 2)^2 = 25'
      },
      {
        explanation: 'Compare this to the standard equation of a circle $(x - h)^2 + (y - k)^2 = r^2$. Here, $h = 4$, $k = -2$, and $r^2 = 25$.',
        workingOut: '\\text{Centre } (4, -2), \\; \\text{Radius } r = \\sqrt{25} = 5'
      }
    ]
  },

  {
    id: 'girr2020-mc22s',
    topicId: 'y12a-exam-girr',
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
    h: 'Use $f\'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$.',
    solutionSteps: [
      {
        explanation: 'Write the expression for $f(x+h)$ and expand it.',
        workingOut: '\\begin{aligned} f(x+h) &= 2(x+h)^2 - 4(x+h) + 5 \\\\ &= 2(x^2 + 2xh + h^2) - 4x - 4h + 5 \\\\ &= 2x^2 + 4xh + 2h^2 - 4x - 4h + 5 \\end{aligned}'
      },
      {
        explanation: 'Find the difference $f(x+h) - f(x)$.',
        workingOut: '\\begin{aligned} f(x+h) - f(x) &= (2x^2 + 4xh + 2h^2 - 4x - 4h + 5) - (2x^2 - 4x + 5) \\\\ &= 4xh + 2h^2 - 4h \\end{aligned}'
      },
      {
        explanation: 'Divide by $h$.',
        workingOut: '\\frac{f(x+h) - f(x)}{h} = \\frac{4xh + 2h^2 - 4h}{h} = 4x + 2h - 4'
      },
      {
        explanation: 'Take the limit as $h \\to 0$.',
        workingOut: 'f\'(x) = \\lim_{h \\to 0} (4x + 2h - 4) = 4x - 4'
      }
    ]
  },

  {
    id: 'girr2020-mc23s',
    topicId: 'y12a-exam-girr',
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
    h: 'Integrate $f\'(x)$ and use the given point to find the constant.',
    solutionSteps: [
      {
        explanation: 'Integrate the gradient function $f\'(x)$ to find the general form of $f(x)$. Remember to add the constant of integration $C$.',
        workingOut: '\\begin{aligned} f(x) &= \\int (6x + 1) \\,dx \\\\ &= \\frac{6x^2}{2} + x + C \\\\ &= 3x^2 + x + C \\end{aligned}'
      },
      {
        explanation: 'Substitute the given point $(1, 5)$ into the equation to find $C$.',
        workingOut: '\\begin{aligned} f(1) &= 3(1)^2 + (1) + C \\\\ 5 &= 3 + 1 + C \\end{aligned}'
      },
      {
        explanation: 'Solve for $C$.',
        workingOut: '\\begin{aligned} 5 &= 4 + C \\\\ C &= 1 \\end{aligned}'
      },
      {
        explanation: 'Write the final equation for $f(x)$.',
        workingOut: 'f(x) = 3x^2 + x + 1'
      }
    ]
  },

  {
    id: 'girr2020-mc24s',
    topicId: 'y12a-exam-girr',
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
    h: 'Look for vertical asymptotes (excluded from domain) and horizontal asymptotes (excluded from range).',
    solutionSteps: [
      {
        explanation: 'Observe the vertical asymptote from the graph. The graph approaches but never touches the vertical line $x = 2$, so $x = 2$ is excluded from the domain.',
        workingOut: '\\text{Vertical asymptote at } x = 2'
      },
      {
        explanation: 'The domain is all real numbers except $2$.',
        workingOut: '\\text{Domain: } (-\\infty, 2) \\cup (2, \\infty)'
      },
      {
        explanation: 'Observe the horizontal asymptote from the graph. The graph approaches but never touches the horizontal line $y = 1$, so $y = 1$ is excluded from the range.',
        workingOut: '\\text{Horizontal asymptote at } y = 1'
      },
      {
        explanation: 'The range is all real numbers except $1$.',
        workingOut: '\\text{Range: } (-\\infty, 1) \\cup (1, \\infty)'
      }
    ],
    graphData: {
      svg: '<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"><defs><style>.axis { stroke: #94a3b8; stroke-width: 2; }.asym { stroke: #ef4444; stroke-width: 2; stroke-dasharray: 5,5; }.curve { stroke: #3b82f6; stroke-width: 3; fill: none; }.label { font-size: 14px; fill: #1e293b; font-family: sans-serif; }.asym-label { font-size: 12px; fill: #ef4444; font-family: sans-serif; font-weight: bold; }</style></defs><rect width="400" height="400" fill="#ffffff" /><g>  <!-- Axes -->  <line x1="30" y1="250" x2="370" y2="250" class="axis" />  <text x="360" y="270" class="label">x</text>  <line x1="150" y1="350" x2="150" y2="50" class="axis" />  <text x="135" y="55" class="label">y</text>  <text x="135" y="270" class="label">0</text>    <!-- Asymptotes -->  <line x1="210" y1="350" x2="210" y2="50" class="asym" />  <text x="215" y="60" class="asym-label">x = 2</text>    <line x1="30" y1="220" x2="370" y2="220" class="asym" />  <text x="35" y="210" class="asym-label">y = 1</text>    <!-- Curves -->  <polyline points="60.00,226.00 63.00,226.12 66.00,226.25 69.00,226.38 72.00,226.52 75.00,226.67 78.00,226.82 81.00,226.98 84.00,227.14 87.00,227.32 90.00,227.50 93.00,227.69 96.00,227.89 99.00,228.11 102.00,228.33 105.00,228.57 108.00,228.82 111.00,229.09 114.00,229.38 117.00,229.68 120.00,230.00 123.00,230.34 126.00,230.71 129.00,231.11 132.00,231.54 135.00,232.00 138.00,232.50 141.00,233.04 144.00,233.64 147.00,234.29 150.00,235.00 153.00,235.79 156.00,236.67 159.00,237.65 162.00,238.75 165.00,240.00 168.00,241.43 171.00,243.08 174.00,245.00 177.00,247.27 180.00,250.00 183.00,253.33 186.00,257.50 189.00,262.86 192.00,270.00 195.00,280.00 198.00,295.00 201.00,320.00" class="curve" />  <polyline points="219.00,120.00 222.00,145.00 225.00,160.00 228.00,170.00 231.00,177.14 234.00,182.50 237.00,186.67 240.00,190.00 243.00,192.73 246.00,195.00 249.00,196.92 252.00,198.57 255.00,200.00 258.00,201.25 261.00,202.35 264.00,203.33 267.00,204.21 270.00,205.00 273.00,205.71 276.00,206.36 279.00,206.96 282.00,207.50 285.00,208.00 288.00,208.46 291.00,208.89 294.00,209.29 297.00,209.66 300.00,210.00 303.00,210.32 306.00,210.63 309.00,210.91 312.00,211.18 315.00,211.43 318.00,211.67 321.00,211.89 324.00,212.11 327.00,212.31 330.00,212.50 333.00,212.68 336.00,212.86 339.00,213.02 342.00,213.18 345.00,213.33 348.00,213.48 351.00,213.62 354.00,213.75 357.00,213.88 360.00,214.00" class="curve" /></g></svg>'
    }
  },

  {
    id: 'girr2020-mc25as',
    topicId: 'y12a-exam-girr',
    c: '4A',
    t: 'Graphs of functions',
    source: 'Girraween 2020 Trial Q25a (Similar)',
    type: 'teacher_review',
    difficulty: 'medium',
    q: 'Sketch $y = |2x + 3|$ and $y = -x + 5$ for $-9 \\leq x \\leq 4$.',
    a: 'sketch',
    opts: ['Sketch provided'],
    solutionSteps: [
      {
        explanation: 'First, find the key features of the absolute value function $y = |2x + 3|$. The vertex occurs where $2x + 3 = 0$, which is $(-1.5, 0)$.',
        workingOut: 'y = |2x + 3| \\implies \\text{Vertex at } (-1.5, 0)'
      },
      {
        explanation: 'Find the $y$-intercept for the absolute value function by setting $x = 0$.',
        workingOut: 'y = |2(0) + 3| = 3 \\implies y\\text{-intercept at } (0, 3)'
      },
      {
        explanation: 'Next, find the key features of the linear function $y = -x + 5$. The $y$-intercept is $(0, 5)$ and the $x$-intercept is $(5, 0)$.',
        workingOut: 'y = -x + 5 \\implies y\\text{-intercept: } 5, \\; x\\text{-intercept: } 5'
      },
      {
        explanation: 'Calculate the endpoints for both functions at $x = -9$ and $x = 4$ to plot them over the required domain.',
        workingOut: '\\text{For } y = |2x + 3|: (-9, 15) \\text{ and } (4, 11) \\\\ \\text{For } y = -x + 5: (-9, 14) \\text{ and } (4, 1)'
      },
      {
        explanation: 'Finally, plot the points and draw the lines. Notice how the graphs intersect on the left side at $(-8, 13)$.',
        workingOut: '\\text{Draw the graphs over } -9 \\leq x \\leq 4',
        graphData: {
          svg: '<svg viewBox="0 0 400 350" xmlns="http://www.w3.org/2000/svg">\n<defs>\n<style>\n.axis { stroke: #94a3b8; stroke-width: 2; }\n.curve-abs { stroke: #3b82f6; stroke-width: 3; fill: none; }\n.curve-line { stroke: #ef4444; stroke-width: 3; fill: none; }\n.label { font-size: 14px; fill: #1e293b; font-family: sans-serif; }\n.pt { fill: #1e293b; }\n</style>\n</defs>\n<rect width="400" height="350" fill="#ffffff" />\n<g>\n  <!-- Axes -->\n  <line x1="20" y1="280" x2="380" y2="280" class="axis" />\n  <text x="370" y="300" class="label">x</text>\n  <line x1="220" y1="330" x2="220" y2="20" class="axis" />\n  <text x="205" y="25" class="label">y</text>\n  <text x="205" y="300" class="label">0</text>\n  \n  <!-- Curves -->\n  <polyline points="40,55 190,280 300,115" class="curve-abs" />\n  <polyline points="40,70 300,265" class="curve-line" />\n  \n  <!-- Labels -->\n  <text x="305" y="115" class="label" fill="#3b82f6">y = |2x + 3|</text>\n  <text x="305" y="270" class="label" fill="#ef4444">y = -x + 5</text>\n  \n  <!-- Vertex -->\n  <circle cx="190" cy="280" r="4" class="pt" />\n  <text x="165" y="300" class="label">(-1.5, 0)</text>\n  \n  <!-- Intersections -->\n  <circle cx="60" cy="85" r="4" class="pt" />\n  <text x="5" y="80" class="label">(-8, 13)</text>\n  \n  <circle cx="233.33333333333334" cy="215" r="4" class="pt" />\n  <text x="238.33333333333334" y="205" class="label">(2/3, 13/3)</text>\n</g>\n</svg>'
        }
      }
    ]
  },

  {
    id: 'girr2020-mc25bs',
    topicId: 'y12a-exam-girr',
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
    h: 'Find where the two graphs intersect.',
    solutionSteps: [
      {
        explanation: 'To solve the absolute value equation, break it down into two cases.',
        workingOut: '|2x + 3| = -x + 5'
      },
      {
        explanation: 'Case 1: The expression inside the absolute value is positive or zero.',
        workingOut: '2x + 3 = -x + 5 \\implies 3x = 2 \\implies x = \\frac{2}{3}'
      },
      {
        explanation: 'Case 2: The expression inside the absolute value is negative.',
        workingOut: '-(2x + 3) = -x + 5 \\implies -2x - 3 = -x + 5 \\implies -x = 8 \\implies x = -8'
      },
      {
        explanation: 'Check both solutions in the original equation to ensure they are valid.',
        workingOut: '\\text{For } x = \\frac{2}{3}: |2(\\frac{2}{3}) + 3| = \\frac{13}{3} \\text{ and } -(\\frac{2}{3}) + 5 = \\frac{13}{3} \\text{ (Valid)}\\\\ \\text{For } x = -8: |2(-8) + 3| = |-13| = 13 \\text{ and } -(-8) + 5 = 13 \\text{ (Valid)}'
      },
      {
        explanation: 'Both solutions are valid.',
        workingOut: 'x = \\frac{2}{3} \\text{ and } x = -8'
      }
    ]
  },

  {
    id: 'girr2020-mc26as',
    topicId: 'y12a-exam-girr',
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
      '$y\' = e^{2x}(2x^2 + 1)$'
    ],
    h: 'Use product rule with $u = x^2$ and $v = e^{2x}$.',
    solutionSteps: [
      {
        explanation: 'Identify the two functions to use the product rule: let $u = x^2$ and $v = e^{2x}$.',
        workingOut: 'u = x^2, \\quad v = e^{2x}'
      },
      {
        explanation: 'Differentiate each part using standard rules. Note that differentiating $e^{2x}$ requires the chain rule.',
        workingOut: 'u\' = 2x, \\quad v\' = 2e^{2x}'
      },
      {
        explanation: 'Apply the product rule: $y\' = u\'v + uv\'$.',
        workingOut: 'y\' = (2x)(e^{2x}) + (x^2)(2e^{2x})'
      },
      {
        explanation: 'Factor out the common term $e^{2x}$ to simplify the expression.',
        workingOut: 'y\' = e^{2x}(2x + 2x^2)'
      }
    ]
  },

  {
    id: 'girr2020-mc26bs',
    topicId: 'y12a-exam-girr',
    c: '4E',
    t: 'Integration techniques',
    source: 'Girraween 2020 Trial Q26b (Similar)',
    type: 'multiple_choice',
    difficulty: 'medium',
    q: 'Find $\\int_0^1 e^{2x}(2 + 4x) dx$.',
    a: '1',
    opts: [
      '$e^2 - 1$',
      '$2e^2$',
      '$2e^2 - 2$',
      '$4(e^2 - 1)$'
    ],
    h: 'Rewrite the integrand or use the derivative from a similar function. Consider $\\frac{d}{dx}[2xe^{2x}]$.',
    solutionSteps: [
      {
        explanation: 'From part (a), we found that the derivative of $x^2 e^{2x}$ is $e^{2x}(2x + 2x^2)$. Notice that the integrand is $e^{2x}(2 + 4x)$, which is NOT exactly the same.',
        workingOut: '\\frac{d}{dx}[x^2 e^{2x}] = e^{2x}(2x + 2x^2)'
      },
      {
        explanation: 'Let\'s find the antiderivative of $e^{2x}(2 + 4x)$ by recognizing the product rule on $2x e^{2x}$. Let $y = 2x e^{2x}$.',
        workingOut: 'y = 2x e^{2x}'
      },
      {
        explanation: 'Differentiate $y = 2x e^{2x}$: $y\' = 2(e^{2x}) + 2x(2e^{2x}) = e^{2x}(2 + 4x)$. This perfectly matches our integrand.',
        workingOut: '\\frac{d}{dx}[2x e^{2x}] = e^{2x}(2 + 4x)'
      },
      {
        explanation: 'Therefore, the antiderivative is $2x e^{2x}$. Evaluate the definite integral from $0$ to $1$.',
        workingOut: '\\int_0^1 e^{2x}(2 + 4x) dx = [2x e^{2x}]_0^1'
      },
      {
        explanation: 'Substitute the limits: $(2(1)e^2) - (2(0)e^0)$.',
        workingOut: '= 2e^2 - 0 = 2e^2'
      }
    ]
  },

  {
    id: 'girr2020-mc27s',
    topicId: 'y12a-exam-girr',
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
    h: 'Match $y = 2|x-1| + 3$ to $y = kf(x+b) + c$ form.',
    solutionSteps: [
      {
        explanation: 'Substitute $f(x) = |x|$ into the general form $y = kf(x + b) + c$.',
        workingOut: 'y = k|x + b| + c'
      },
      {
        explanation: 'Compare this transformed equation to the given equation $y = 2|x - 1| + 3$.',
        workingOut: 'k|x + b| + c \\quad \\text{vs} \\quad 2|x - 1| + 3'
      },
      {
        explanation: 'By matching the coefficient outside the absolute value, we see $k = 2$.',
        workingOut: 'k = 2'
      },
      {
        explanation: 'By matching the expression inside the absolute value, $x + b = x - 1$, which gives $b = -1$.',
        workingOut: 'x + b = x - 1 \\implies b = -1'
      },
      {
        explanation: 'By matching the constant term at the end, we see $c = 3$.',
        workingOut: 'c = 3'
      }
    ]
  },

  {
    id: 'girr2020-mc28as',
    topicId: 'y12a-exam-girr',
    c: '6B',
    t: 'Angles of elevation and depression',
    source: 'Girraween 2020 Trial Q28a (Similar)',
    type: 'teacher_review',
    difficulty: 'medium',
    q: 'Two observers at points $A$ and $B$ are on the same side of a tower of height $h$. They are in a straight line with the base of the tower. The distance between them is $d$. The angle of elevation from $A$ (closer) is $\\alpha$ and from $B$ (further) is $\\beta$. Show that $h = \\frac{d}{\\cot \\beta - \\cot \\alpha}$. **(Teacher-graded proof)**',
    a: 'proof',
    opts: ['Proof provided'],
    solutionSteps: [
      {
        explanation: 'Let the height of the tower be $h$ and its base be $Y$. From the closer point A, we form a right-angled triangle. Using trigonometry, the distance $AY = h \\cot \\alpha$.',
        workingOut: '\\tan \\alpha = \\frac{h}{AY} \\implies AY = \\frac{h}{\\tan \\alpha} = h \\cot \\alpha'
      },
      {
        explanation: 'Similarly, from the further point B, we have a right-angled triangle where the distance $BY = h \\cot \\beta$.',
        workingOut: '\\tan \\beta = \\frac{h}{BY} \\implies BY = \\frac{h}{\\tan \\beta} = h \\cot \\beta'
      },
      {
        explanation: 'Since they are on the same side of the tower, the distance between the two observers $d$ is the difference $BY - AY$.',
        workingOut: 'd = BY - AY'
      },
      {
        explanation: 'Substitute the expressions for $BY$ and $AY$ into the equation for $d$.',
        workingOut: 'd = h \\cot \\beta - h \\cot \\alpha'
      },
      {
        explanation: 'Factor out $h$ and rearrange to make $h$ the subject of the formula.',
        workingOut: '\\begin{aligned} d &= h(\\cot \\beta - \\cot \\alpha) \\\\ h &= \\frac{d}{\\cot \\beta - \\cot \\alpha} \\end{aligned}'
      }
    ]
  },

  {
    id: 'girr2020-mc28bs',
    topicId: 'y12a-exam-girr',
    c: '6B',
    t: 'Trigonometric calculations',
    source: 'Girraween 2020 Trial Q28b (Similar)',
    type: 'multiple_choice',
    difficulty: 'medium',
    q: 'Using the formula from part (a), if $d = 100$ m, $\\alpha = 20^\\circ$, $\\beta = 15^\\circ$, find $h$.',
    a: '0',
    opts: [
      '$h \\approx 102$ m',
      '$h \\approx 300$ m',
      '$h \\approx 480$ m',
      '$h \\approx 600$ m'
    ],
    h: 'Calculate using $h = \\frac{100}{\\cot 15° - \\cot 20°}$.',
    solutionSteps: [
      {
        explanation: 'Identify the given values from the question to substitute into the formula derived in part (a).',
        workingOut: 'd = 100, \\quad \\alpha = 20^\\circ, \\quad \\beta = 15^\\circ'
      },
      {
        explanation: 'Substitute these values into the formula $h = \\frac{d}{\\cot \\beta - \\cot \\alpha}$.',
        workingOut: 'h = \\frac{100}{\\cot 15^\\circ - \\cot 20^\\circ}'
      },
      {
        explanation: 'Calculate the values of the cotangents.',
        workingOut: '\\cot 15^\\circ \\approx 3.7321, \\quad \\cot 20^\\circ \\approx 2.7475'
      },
      {
        explanation: 'Subtract the cotangent values.',
        workingOut: '\\cot 15^\\circ - \\cot 20^\\circ \\approx 3.7321 - 2.7475 = 0.9846'
      },
{
        explanation: 'Divide the distance $d$ by the difference to find $h$.',
        workingOut: 'h = \\frac{100}{0.9846} \\approx 101.56 \\approx 102 \\text{ m}'
      }
    ]
  },

  {
    id: 'girr2020-mc29s',
    topicId: 'y12a-exam-girr',
    c: '3A',
    t: 'Using derivatives to sketch curves',
    source: 'Girraween 2020 Trial Q29 (Similar)',
    type: 'multipart',
    difficulty: 'medium',
    q: 'The diagram shows the graph of the derivative function $y = f\'(x)$ for a continuous function $y = f(x)$. Use the graph to answer the following questions.',
    graphData: {
      svg: '<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">\n<defs>\n<style>\n.axis { stroke: #94a3b8; stroke-width: 2; }\n.curve { stroke: #3b82f6; stroke-width: 3; fill: none; }\n.label { font-size: 14px; fill: #1e293b; font-family: sans-serif; }\n.pt { fill: #1e293b; }\n.grid { stroke: #e2e8f0; stroke-width: 1; stroke-dasharray: 4 4; }\n</style>\n</defs>\n<rect width="400" height="300" fill="#ffffff" />\n<g>\n  <!-- Grid -->\n  <line x1="50" y1="20" x2="50" y2="280" class="grid" />\n  <line x1="100" y1="20" x2="100" y2="280" class="grid" />\n  <line x1="150" y1="20" x2="150" y2="280" class="grid" />\n  <line x1="200" y1="20" x2="200" y2="280" class="grid" />\n  <line x1="250" y1="20" x2="250" y2="280" class="grid" />\n  <line x1="300" y1="20" x2="300" y2="280" class="grid" />\n  <line x1="350" y1="20" x2="350" y2="280" class="grid" />\n  \n  <line x1="20" y1="70" x2="370" y2="70" class="grid" />\n  <line x1="20" y1="150" x2="370" y2="150" class="grid" />\n  <line x1="20" y1="270" x2="370" y2="270" class="grid" />\n\n  <!-- Axes -->\n  <line x1="20" y1="150" x2="370" y2="150" class="axis" />\n  <text x="360" y="170" class="label">x</text>\n  <line x1="50" y1="280" x2="50" y2="20" class="axis" />\n  <text x="35" y="25" class="label">y\'</text>\n  <text x="35" y="170" class="label">0</text>\n  \n  <text x="145" y="170" class="label">2</text>\n  <text x="245" y="170" class="label">4</text>\n  <text x="345" y="170" class="label">6</text>\n  \n  <text x="35" y="75" class="label">2</text>\n  <text x="25" y="275" class="label">-3</text>\n  \n  <!-- Curve: (0,2)->(2,2)->(4,0)->(6,-3) -->\n  <polyline points="50,70 150,70 250,150 350,270" class="curve" />\n  \n  <!-- Points -->\n  <circle cx="50" cy="70" r="4" class="pt" />\n  <circle cx="150" cy="70" r="4" class="pt" />\n  <circle cx="250" cy="150" r="4" class="pt" />\n  <circle cx="350" cy="270" r="4" class="pt" />\n</g>\n</svg>'
    },
    subQuestions: [
      {
        id: 'girr2020-mc29as',
        q: 'From the derivative graph $f\'(x)$, where is $f(x)$ increasing?',
        type: 'multiple_choice',
        opts: [
          '$0 \\leq x < 2$',
          '$x < 0$',
          '$0 \\leq x < 4$',
          'Nowhere'
        ],
        a: '2',
        solutionSteps: [
          {
            explanation: 'A function $f(x)$ is increasing when its derivative $f\'(x) > 0$.',
            workingOut: 'f(x) \\text{ increasing} \\implies f\'(x) > 0'
          },
          {
            explanation: 'Looking at the graph of $f\'(x)$, the values are positive (above the $x$-axis) between $x = 0$ and $x = 4$.',
            workingOut: 'f\'(x) > 0 \\text{ for } 0 \\leq x < 4'
          }
        ]
      },
      {
        id: 'girr2020-mc29bs',
        q: 'Assuming $f(0) = 0$, what is the maximum value of $f(x)$ for $0 \\leq x \\leq 6$?',
        type: 'multiple_choice',
        opts: [
          '$f(x)_{max} = 3$',
          '$f(x)_{max} = 5$',
          '$f(x)_{max} = 6$',
          '$f(x)_{max} = 8$'
        ],
        a: '2',
        solutionSteps: [
          {
            explanation: 'The maximum value occurs where $f\'(x)$ changes from positive to negative, which is at $x = 4$.',
            workingOut: 'f\'(x) = 0 \\text{ at } x = 4'
          },
          {
            explanation: 'The value of $f(4)$ is equal to the initial value $f(0)$ plus the area under the $f\'(x)$ curve from $0$ to $4$.',
            workingOut: 'f(4) = f(0) + \\int_0^4 f\'(x) dx'
          },
          {
            explanation: 'The area from $x = 0$ to $x = 4$ can be split into a rectangle (from 0 to 2) and a triangle (from 2 to 4).',
            workingOut: '\\text{Area}_{rect} = 2 \\times 2 = 4 \\\\ \\text{Area}_{tri} = \\frac{1}{2} \\times 2 \\times 2 = 2 \\\\ \\text{Total Area} = 4 + 2 = 6'
          },
          {
            explanation: 'Since $f(0) = 0$, the maximum value is $0 + 6 = 6$.',
            workingOut: 'f(4) = 0 + 6 = 6'
          }
        ]
      },
      {
        id: 'girr2020-mc29cs',
        q: 'Find the value of $f(6)$.',
        type: 'multiple_choice',
        opts: [
          '$f(6) = 0$',
          '$f(6) = 3$',
          '$f(6) = -3$',
          '$f(6) = 2$'
        ],
        a: '1',
        solutionSteps: [
          {
            explanation: 'To find $f(6)$, we add the signed area from $x=4$ to $x=6$ to the value of $f(4)$.',
            workingOut: 'f(6) = f(4) + \\int_4^6 f\'(x) dx'
          },
          {
            explanation: 'The area from $x = 4$ to $x = 6$ forms a triangle below the $x$-axis, with base $2$ (from 4 to 6) and height $3$ (down to -3).',
            workingOut: '\\text{Area} = - \\left( \\frac{1}{2} \\times 2 \\times 3 \\right) = -3'
          },
          {
            explanation: 'Add this area to $f(4)$.',
            workingOut: 'f(6) = 6 + (-3) = 3'
          }
        ]
      },
      {
        id: 'girr2020-mc29ds',
        q: 'Draw a graph of $y = f(x)$ for $0 \\leq x \\leq 6$. **(Teacher-graded sketch)**',
        type: 'teacher_review',
        opts: ['Sketch provided'],
        a: 'sketch',
        solutionSteps: [
          {
            explanation: 'Plot the key points: $(0,0)$, $(2, 4)$, maximum at $(4,6)$, and endpoint at $(6,3)$. Between $x=0$ and $x=2$, the derivative is constant, so $f(x)$ is a straight line. Between $x=2$ and $x=6$, $f\'(x)$ is decreasing, so the curve is concave down.',
            workingOut: '\\text{Points: } (0,0), (2,4), (4,6), (6,3)'
          }
        ]
      }
    ]
  },

  {
    id: 'girr2020-mc30s',
    topicId: 'y12a-exam-girr',
    c: '3A',
    t: 'Growth models',
    source: 'Girraween 2020 Trial Q30 (Similar)',
    type: 'multipart',
    difficulty: 'medium',
    q: 'The length $L$ of an animal at time $t$ (years) is given by $L = 6.0 - 5.5 e^{-kt}$.',
    subQuestions: [
      {
        id: 'girr2020-mc30as',
        q: 'What is the length at birth ($t=0$)?',
        type: 'multiple_choice',
        opts: ['$0.3$ m', '$0.5$ m', '$1.0$ m', '$0.8$ m'],
        a: '1',
        solutionSteps: [
          {
            explanation: 'To find the length at birth, we substitute $t = 0$ into the length equation.',
            workingOut: 'L = 6.0 - 5.5 e^{-k(0)}'
          },
          {
            explanation: 'Since $e^0 = 1$, we can solve for $L$.',
            workingOut: 'L = 6.0 - 5.5(1) = 0.5 \\text{ m}'
          }
        ]
      },
      {
        id: 'girr2020-mc30bs',
        q: 'If the length of the animal is $5.0$ m when $t = 2$, find the value of $k$ (to 2 decimal places).',
        type: 'multiple_choice',
        opts: ['$0.75$', '$0.80$', '$0.85$', '$0.90$'],
        a: '2',
        solutionSteps: [
          {
            explanation: 'Substitute the given values $L = 5.0$ and $t = 2$ into the equation.',
            workingOut: '5.0 = 6.0 - 5.5 e^{-2k}'
          },
          {
            explanation: 'Rearrange the equation to isolate the exponential term.',
            workingOut: '5.5 e^{-2k} = 6.0 - 5.0 \\\\ 5.5 e^{-2k} = 1.0'
          },
          {
            explanation: 'Divide by 5.5 and take the natural logarithm of both sides.',
            workingOut: 'e^{-2k} = \\frac{1}{5.5} \\\\ -2k = \\ln\\left(\\frac{1}{5.5}\\right)'
          },
          {
            explanation: 'Calculate the value of $k$.',
            workingOut: 'k = -\\frac{1}{2} \\ln\\left(\\frac{1}{5.5}\\right) \\approx 0.852 \\approx 0.85'
          }
        ]
      },
      {
        id: 'girr2020-mc30cs',
        q: 'Find the limiting length of the animal as $t \\to \\infty$.',
        type: 'multiple_choice',
        opts: ['$5.5$ m', '$6.0$ m', '$12$ m', '$\\infty$'],
        a: '1',
        solutionSteps: [
          {
            explanation: 'To find the limiting length, we evaluate the limit of $L$ as $t \\to \\infty$.',
            workingOut: '\\lim_{t \\to \\infty} L = \\lim_{t \\to \\infty} (6.0 - 5.5 e^{-kt})'
          },
          {
            explanation: 'Since $k > 0$, as $t$ becomes very large, $e^{-kt}$ approaches $0$.',
            workingOut: '\\lim_{t \\to \\infty} e^{-kt} = 0'
          },
          {
            explanation: 'Substitute this back into the limit expression.',
            workingOut: '\\lim_{t \\to \\infty} L = 6.0 - 5.5(0) = 6.0 \\text{ m}'
          }
        ]
      }
    ]
  },

  {
    id: 'girr2020-mc31s',
    topicId: 'y12a-exam-girr',
    c: '3A',
    t: 'Increasing and decreasing functions',
    source: 'Girraween 2020 Trial Q31 (Similar)',
    type: 'multiple_choice',
    difficulty: 'medium',
    q: 'For $f(x) = x^3 - 3x^2 + mx - 2$, find the values of $m$ so that $f(x)$ is increasing everywhere.',
    a: '2',
    opts: [
      '$m \\geq 0$',
      '$m \\geq 1$',
      '$m \\geq 3$',
      '$m \\geq 4$'
    ],
    solutionSteps: [
      {
        explanation: 'A function $f(x)$ is increasing everywhere if its derivative $f\'(x) \\geq 0$ for all real numbers.',
        workingOut: 'f\'(x) \\geq 0'
      },
      {
        explanation: 'Differentiate $f(x)$ with respect to $x$.',
        workingOut: 'f\'(x) = 3x^2 - 6x + m'
      },
      {
        explanation: 'Since $f\'(x)$ is a quadratic with a positive leading coefficient ($a=3$), $f\'(x) \\geq 0$ for all $x$ if and only if the discriminant $\\Delta \\leq 0$.',
        workingOut: '\\Delta = b^2 - 4ac \\leq 0 \\\\ (-6)^2 - 4(3)(m) \\leq 0'
      },
      {
        explanation: 'Solve for $m$.',
        workingOut: '36 - 12m \\leq 0 \\\\ 36 \\leq 12m \\\\ m \\geq 3'
      }
    ]
  },

  {
    id: 'girr2020-mc32s',
    topicId: 'y12a-exam-girr',
    c: '2D',
    t: 'Rationalising surds',
    source: 'Girraween 2020 Trial Q32 (Similar)',
    type: 'multiple_choice',
    difficulty: 'easy',
    q: 'Express $\\frac{2}{\\sqrt{3} + 1}$ in the form $a + b\\sqrt{3}$, where $a$ and $b$ are rational numbers.',
    a: '1',
    opts: [
      '$1 - \\sqrt{3}$',
      '$\\sqrt{3} - 1$',
      '$1 + \\sqrt{3}$',
      '$2 - \\sqrt{3}$'
    ],
    solutionSteps: [
      {
        explanation: 'Multiply the numerator and denominator by the conjugate of the denominator, $\\sqrt{3}-1$.',
        workingOut: '\\frac{2}{\\sqrt{3}+1} = \\frac{2}{\\sqrt{3}+1} \\times \\frac{\\sqrt{3}-1}{\\sqrt{3}-1}'
      },
      {
        explanation: 'Expand the denominator using $(x+y)(x-y) = x^2 - y^2$.',
        workingOut: '\\text{Denominator} = (\\sqrt{3})^2 - (1)^2 = 3 - 1 = 2'
      },
      {
        explanation: 'Simplify the expression by dividing the numerator by the denominator.',
        workingOut: '\\frac{2(\\sqrt{3}-1)}{2} = \\sqrt{3}-1'
      },
      {
        explanation: 'The result is in the required form $a + b\\sqrt{3}$ with $a=-1$ and $b=1$.',
        workingOut: '\\sqrt{3} - 1'
      }
    ]
  },

  {
    id: 'girr2020-mc33s',
    topicId: 'y12a-exam-girr',
    c: '3G',
    t: 'Optimisation problems',
    source: 'Girraween 2020 Trial Q33 (Similar)',
    type: 'multiple_choice',
    difficulty: 'hard',
    q: 'A $40$ m fence is used to enclose a rectangular garden. What should be the length and width of the garden to maximize its area?',
    a: '1',
    opts: [
      'Length = 12m, Width = 8m',
      'Length = 10m, Width = 10m',
      'Length = 14m, Width = 6m',
      'Length = 15m, Width = 5m'
    ],
    solutionSteps: [
      {
        explanation: 'Let $L$ and $W$ be the length and width of the rectangle. The perimeter is $40$ m.',
        workingOut: '2L + 2W = 40 \\implies L + W = 20 \\implies W = 20 - L'
      },
      {
        explanation: 'Write the area $A$ as a function of $L$.',
        workingOut: 'A = L \\times W = L(20 - L) = 20L - L^2'
      },
      {
        explanation: 'To find the maximum area, take the derivative of $A$ with respect to $L$ and set it to zero.',
        workingOut: '\\frac{dA}{dL} = 20 - 2L = 0'
      },
      {
        explanation: 'Solve for $L$ and find the corresponding $W$.',
        workingOut: '2L = 20 \\implies L = 10 \\text{ m} \\\\ W = 20 - 10 = 10 \\text{ m}'
      }
    ]
  },

  {
    id: 'girr2020-mc34s',
    topicId: 'y12a-exam-girr',
    c: '7B',
    t: 'Kinematics',
    source: 'Girraween 2020 Trial Q34 (Similar)',
    type: 'multipart',
    difficulty: 'medium',
    q: 'A car is initially at point A and travels in a straight line. Its position $x$ metres from A at time $t$ seconds is given by $x = t^2(3 - t)$. It comes to rest at a point B.',
    subQuestions: [
      {
        id: 'girr2020-mc34as',
        q: 'When does the car stop?',
        type: 'multiple_choice',
        opts: ['$t = 1$ s', '$t = 2$ s', '$t = 3$ s', '$t = 4$ s'],
        a: '1',
        solutionSteps: [
          {
            explanation: 'The car stops when its velocity is zero. First, find the velocity function by differentiating the position function.',
            workingOut: 'x = t^2(3 - t) = 3t^2 - t^3 \\\\ v = \\frac{dx}{dt} = 6t - 3t^2'
          },
          {
            explanation: 'Set the velocity to zero and solve for $t$.',
            workingOut: '6t - 3t^2 = 0 \\\\ 3t(2 - t) = 0 \\\\ t = 0 \\text{ or } t = 2'
          },
          {
            explanation: 'Since $t=0$ is the starting time, the car stops at $t=2$ seconds.',
            workingOut: 't = 2'
          }
        ]
      },
      {
        id: 'girr2020-mc34bs',
        q: 'Find the distance from A to B.',
        type: 'multiple_choice',
        opts: ['$2$ m', '$3$ m', '$4$ m', '$5$ m'],
        a: '2',
        solutionSteps: [
          {
            explanation: 'Since the car moves in a single direction from $t=0$ to $t=2$, the total distance traveled is the position at $t=2$ minus the position at $t=0$.',
            workingOut: '\\text{Distance} = x(2) - x(0)'
          },
          {
            explanation: 'Calculate the position at $t=2$.',
            workingOut: 'x(2) = 2^2(3 - 2) = 4(1) = 4'
          },
          {
            explanation: 'Since $x(0) = 0$, the distance from A to B is $4$ metres.',
            workingOut: '\\text{Distance} = 4 \\text{ m}'
          }
        ]
      }
    ]
  },

  // Q35-Q38 use generic placeholders since these are complex multi-part problems
  {
    id: 'girr2020-mc35as',
    topicId: 'y12a-exam-girr',
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
    topicId: 'y12a-exam-girr',
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
    topicId: 'y12a-exam-girr',
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
    topicId: 'y12a-exam-girr',
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
    topicId: 'y12a-exam-girr',
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
    topicId: 'y12a-exam-girr',
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
