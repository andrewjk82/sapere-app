export const FORTST_2020_QUESTIONS = [
  {
    "id": "fortst2020-mc1",
    "topicId": "y12a-1B",
    "c": "1B",
    "t": "Arithmetic sequences",
    "source": "Fort Street 2020 Trial Q1",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "The fourth term of an arithmetic series is $27$ and the seventh term is $12$. What is the common difference?",
    "a": "0",
    "opts": [
      "$-5$",
      "$5$",
      "$13$",
      "$42$"
    ],
    "h": "Write $T_4$ and $T_7$ using $T_n = a + (n-1)d$ and subtract.",
    "s": "$T_4 = a + 3d = 27$ and $T_7 = a + 6d = 12$. Subtracting: $3d = -15$, so $d = -5$.",
    "solutionSteps": [
      {
        "explanation": "Write the fourth term using the arithmetic term formula \\(T_n = a + (n-1)d\\).",
        "workingOut": "T_4 = a + 3d = 27"
      },
      {
        "explanation": "Write the seventh term the same way.",
        "workingOut": "T_7 = a + 6d = 12"
      },
      {
        "explanation": "Subtract the first equation from the second to eliminate \\(a\\).",
        "workingOut": "(a + 6d) - (a + 3d) = 12 - 27 \\Rightarrow 3d = -15"
      },
      {
        "explanation": "Solve for the common difference.",
        "workingOut": "d = -5"
      }
    ]
  },
  {
    "id": "fortst2020-mc2",
    "topicId": "y11a-5G",
    "c": "5G",
    "t": "Combining transformations",
    "source": "Fort Street 2020 Trial Q2",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "The graph of $f(x) = 3x^{5/2}$ is reflected in the $x$-axis, then translated $3$ units right and $4$ units down. The equation of the transformed function is:",
    "a": "1",
    "opts": [
      "$y = 3(-x-3)^{5/2} - 4$",
      "$y = -3(x-3)^{5/2} - 4$",
      "$y = -3(x+3)^{5/2} - 4$",
      "$y = 3(-x+3)^{5/2} - 4$"
    ],
    "h": "Apply the transformations one at a time: reflect ($y \\to -y$), then replace $x \\to x-3$, then subtract $4$.",
    "s": "Reflection in the $x$-axis: $y = -3x^{5/2}$. Translate $3$ right: $y = -3(x-3)^{5/2}$. Translate $4$ down: $y = -3(x-3)^{5/2} - 4$.",
    "solutionSteps": [
      {
        "explanation": "Reflect in the \\(x\\)-axis by negating the whole function.",
        "workingOut": "y = -3x^{5/2}"
      },
      {
        "explanation": "Translate \\(3\\) units right by replacing \\(x\\) with \\(x - 3\\).",
        "workingOut": "y = -3(x-3)^{5/2}"
      },
      {
        "explanation": "Translate \\(4\\) units down by subtracting \\(4\\).",
        "workingOut": "y = -3(x-3)^{5/2} - 4"
      }
    ]
  },
  {
    "id": "fortst2020-mc3",
    "topicId": "y11a-11B",
    "c": "11B",
    "t": "Solving trigonometric equations",
    "source": "Fort Street 2020 Trial Q3",
    "type": "multiple_choice",
    "difficulty": "hard",
    "q": "What is the solution to the equation $\\cos 2x = \\dfrac{1}{2}$ in the domain $[-\\pi, pi]$?",
    "a": "0",
    "opts": [
      "$x = \\dfrac{\\pi}{6}, dfrac{5\\pi}{6}, dfrac{-5\\pi}{6}, dfrac{-\\pi}{6}$",
      "$x = \\dfrac{\\pi}{12}, dfrac{11\\pi}{12}, dfrac{-11\\pi}{12}, dfrac{-\\pi}{12}$",
      "$x = \\dfrac{\\pi}{6}, dfrac{5\\pi}{6}, dfrac{7\\pi}{6}, dfrac{11\\pi}{6}$",
      "$x = \\dfrac{\\pi}{12}, dfrac{11\\pi}{12}, dfrac{13\\pi}{12}, dfrac{23\\pi}{12}$"
    ],
    "h": "Expand the domain: if $-\\pi \\le x \\le \\pi$ then $-2\\pi \\le 2x \\le 2\\pi$. Solve for $2x$ first.",
    "s": "Let $u = 2x$, $-2\\pi \\le u \\le 2\\pi$. Reference angle $\\frac{\\pi}{3}$, cosine positive in Q1/Q4: $u = \\pm\\frac{\\pi}{3}, pm\\frac{5\\pi}{3}$. Then $x = \\frac{u}{2} = \\pm\\frac{\\pi}{6}, pm\\frac{5\\pi}{6}$.",
    "solutionSteps": [
      {
        "explanation": "Substitute \\(u = 2x\\) and expand the domain by multiplying the bounds by \\(2\\).",
        "workingOut": "-\\pi \\le x \\le \\pi \\Rightarrow -2\\pi \\le u \\le 2\\pi"
      },
      {
        "explanation": "The reference angle for \\(\\cos u = \\frac{1}{2}\\) is \\(\\frac{\\pi}{3}\\). Cosine is positive in the 1st and 4th quadrants.",
        "workingOut": "u = \\pm\\frac{\\pi}{3}"
      },
      {
        "explanation": "Add \\(\\pm 2\\pi\\) to find all values within \\([-2\\pi, 2\\pi]\\).",
        "workingOut": "u = \\frac{\\pi}{3}, -\\frac{\\pi}{3}, frac{5\\pi}{3}, -\\frac{5\\pi}{3}"
      },
      {
        "explanation": "Divide every value by \\(2\\) to recover \\(x\\).",
        "workingOut": "x = \\frac{\\pi}{6}, -\\frac{\\pi}{6}, frac{5\\pi}{6}, -\\frac{5\\pi}{6}"
      }
    ]
  },
  {
    "id": "fortst2020-mc4",
    "topicId": "y12a-4H",
    "c": "4H",
    "t": "The trapezoidal rule",
    "source": "Fort Street 2020 Trial Q4",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "A native garden has vertical heights (in metres) $2, 4.5, 5.1, 3.6$ and $0$ at points spaced $5$ m apart. What is the approximate area using the trapezoidal rule with $4$ intervals?",
    "a": "2",
    "opts": [
      "$31 \\text{ m}^2$",
      "$62 \\text{ m}^2$",
      "$71 \\text{ m}^2$",
      "$74 \\text{ m}^2$"
    ],
    "graphData": {
      "jsxGraph": {
        "width": 420,
        "height": 300,
        "boundingbox": [
          -3,
          7,
          23,
          -1.5
        ],
        "boardOptions": {
          "keepaspectratio": false
        },
        "script": "board.suspendUpdate();\nboard.create('segment', [[0,0],[20,0]], {strokeColor:'black'});\nvar ord=[[0,2],[5,4.5],[10,5.1],[15,3.6]];\nfor(var i=0;i<ord.length;i++){ board.create('segment', [[ord[i][0],0],ord[i]], {strokeColor:'black', dash: i===0?0:2}); }\nboard.create('functiongraph', [function(x){ var pts=[[0,2],[5,4.5],[10,5.1],[15,3.6],[20,0]]; for(var j=0;j<pts.length-1;j++){ if(x>=pts[j][0]&&x<=pts[j+1][0]){ var t=(x-pts[j][0])/(pts[j+1][0]-pts[j][0]); return pts[j][1]+t*(pts[j+1][1]-pts[j][1]); } } return 0; }, 0, 20], {strokeColor:'#1d4ed8',strokeWidth:2});\nvar labs=[[2,'2'],[5,'4.5'],[10,'5.1'],[15,'3.6']];\nboard.create('text',[-1.5,1,'2'],{fontSize:11});\nboard.create('text',[5.3,2.3,'4.5'],{fontSize:11});\nboard.create('text',[10.3,2.6,'5.1'],{fontSize:11});\nboard.create('text',[15.3,1.9,'3.6'],{fontSize:11});\nboard.create('text',[2.2,-1,'5'],{fontSize:11});board.create('text',[7.2,-1,'5'],{fontSize:11});board.create('text',[12.2,-1,'5'],{fontSize:11});board.create('text',[17.2,-1,'5'],{fontSize:11});\nboard.unsuspendUpdate();"
      }
    },
    "h": "Use $A \\approx \\frac{h}{2}[y_1 + y_5 + 2(y_2 + y_3 + y_4)]$ with $h = 5$.",
    "s": "$A \\approx \\frac{5}{2}[2 + 0 + 2(4.5 + 5.1 + 3.6)] = \\frac{5}{2}[2 + 2(13.2)] = \\frac{5}{2}(28.4) = 71 \\text{ m}^2$.",
    "solutionSteps": [
      {
        "explanation": "State the trapezoidal rule for several strips: the first and last ordinates are counted once, the interior ones twice. Here the strip width is \\(h = 5\\).",
        "workingOut": "A \\approx \\frac{h}{2}[y_1 + y_5 + 2(y_2 + y_3 + y_4)]"
      },
      {
        "explanation": "Substitute the five ordinates \\(2, 4.5, 5.1, 3.6, 0\\).",
        "workingOut": "A \\approx \\frac{5}{2}[2 + 0 + 2(4.5 + 5.1 + 3.6)]"
      },
      {
        "explanation": "Add the interior ordinates.",
        "workingOut": "= \\frac{5}{2}[2 + 2(13.2)]"
      },
      {
        "explanation": "Simplify inside the bracket.",
        "workingOut": "= \\frac{5}{2}(28.4)"
      },
      {
        "explanation": "Multiply to find the area.",
        "workingOut": "= 71 \\text{ m}^2"
      }
    ]
  },
  {
    "id": "fortst2020-mc5",
    "topicId": "y11a-3H",
    "c": "3H",
    "t": "Two graphs that have asymptotes",
    "source": "Fort Street 2020 Trial Q5",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "What is the domain and range of the function $y = \\dfrac{1}{\\sqrt{x - 9}}$?",
    "a": "1",
    "opts": [
      "Domain: $[9, infty)$, Range: $(0, infty)$",
      "Domain: $(9, infty)$, Range: $(0, infty)$",
      "Domain: $[-\\infty, infty]$, Range: $[-\\infty, infty]$",
      "Domain: $[-3, 3]$, Range: $(-\\infty, 0)$"
    ],
    "h": "The square root needs a non-negative argument; the denominator cannot be zero, so $x - 9 > 0$ strictly.",
    "s": "For $\\frac{1}{\\sqrt{x-9}}$ we need $x - 9 > 0$, i.e. $x > 9$, so the domain is $(9, infty)$. The output is always positive, giving range $(0, infty)$.",
    "solutionSteps": [
      {
        "explanation": "The square root requires its argument to be non-negative, and since it is in the denominator it cannot be zero. So \\(x - 9 > 0\\) strictly.",
        "workingOut": "x - 9 > 0 \\Rightarrow x > 9"
      },
      {
        "explanation": "State the domain in interval notation (open at \\(9\\)).",
        "workingOut": "\\text{Domain} = (9, infty)"
      },
      {
        "explanation": "For all \\(x > 9\\), \\(\\sqrt{x-9} > 0\\), so \\(\\frac{1}{\\sqrt{x-9}}\\) is always positive and can take any positive value.",
        "workingOut": "\\text{Range} = (0, infty)"
      }
    ]
  },
  {
    "id": "fortst2020-mc6",
    "topicId": "y11a-7B",
    "c": "7B",
    "t": "Gradients",
    "source": "Fort Street 2020 Trial Q6",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "At what angle is the line $y = -\\sqrt{3}\\,x$ inclined to the positive side of the $x$-axis?",
    "a": "2",
    "opts": [
      "$30°$",
      "$60°$",
      "$120°$",
      "$150°$"
    ],
    "h": "The angle of inclination $\\theta$ satisfies $\\tan\\theta = m$; a negative gradient gives an obtuse angle.",
    "s": "The gradient is $m = -\\sqrt{3}$, so $\\tan\\theta = -\\sqrt{3}$. The related (reference) angle is $60°$, and since the gradient is negative the angle of inclination is $180° - 60° = 120°$.",
    "solutionSteps": [
      {
        "explanation": "The angle of inclination \\(\\theta\\) is found from \\(\\tan\\theta = m\\), where \\(m\\) is the gradient.",
        "workingOut": "\\tan\\theta = -\\sqrt{3}"
      },
      {
        "explanation": "Find the reference angle from \\(\\tan^{-1}(\\sqrt{3}) = 60°\\).",
        "workingOut": "\\text{reference angle} = 60°"
      },
      {
        "explanation": "A negative gradient means the line slopes downward, so the angle of inclination is obtuse: \\(180° - 60°\\).",
        "workingOut": "\\theta = 180° - 60° = 120°"
      }
    ]
  },
  {
    "id": "fortst2020-mc7",
    "topicId": "y12a-3B",
    "c": "3B",
    "t": "Stationary points and turning points",
    "source": "Fort Street 2020 Trial Q7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "q": "The diagram shows a sketch of the gradient function $y = f'(x)$. Which statement about $y = f(x)$ is true?",
    "a": "2",
    "opts": [
      "A minimum turning point at $x = -4$",
      "A horizontal point of inflexion at $x = 2$",
      "A horizontal point of inflexion at $x = -4$",
      "A minimum turning point at $x = 2$"
    ],
    "graphData": {
      "jsxGraph": {
        "width": 440,
        "height": 300,
        "boundingbox": [
          -6.5,
          9,
          4.5,
          -6
        ],
        "boardOptions": {
          "keepaspectratio": false
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-6.5,0],[4.5,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-6],[0,9]], {strokeColor:'black'});\nboard.create('functiongraph', [function(x){ return -0.22*Math.pow(x+4,2)*(x-2); }, -6, 3.2], {strokeColor:'#1d4ed8',strokeWidth:2});\nboard.create('point', [-4,0], {name:'', size:2, color:'#475569', fixed:true});\nboard.create('point', [2,0], {name:'', size:2, color:'#475569', fixed:true});\nboard.create('text', [-4.3, -0.9, '-4'], {fontSize:11});\nboard.create('text', [1.8, -0.9, '2'], {fontSize:11});\nboard.create('text', [3.9, 0.5, 'x'], {fontSize:13});\nboard.create('text', [0.25, 8.3, 'y'], {fontSize:13});\nboard.create('text', [2.6, 6, \"y = f'(x)\"], {fontSize:12, strokeColor:'#1d4ed8'});\nboard.unsuspendUpdate();"
      }
    },
    "h": "A double root of $f'$ (where it touches the axis) gives a horizontal point of inflexion of $f$; a simple root (cross) gives a turning point.",
    "s": "At $x = -4$, $f'$ touches the axis (does not change sign), so $f$ has a horizontal point of inflexion there. At $x = 2$, $f'$ crosses the axis (sign change), so $f$ has a turning point there. Hence the true statement is a horizontal point of inflexion at $x = -4$.",
    "solutionSteps": [
      {
        "explanation": "Stationary points of \\(f\\) occur where \\(f'(x) = 0\\), i.e. at \\(x = -4\\) and \\(x = 2\\).",
        "workingOut": "f'(x) = 0 \\text{ at } x = -4, \\; 2"
      },
      {
        "explanation": "At \\(x = -4\\) the gradient function touches the \\(x\\)-axis (a double root), so \\(f'\\) does not change sign. A stationary point where \\(f'\\) keeps the same sign is a horizontal point of inflexion.",
        "workingOut": "x = -4: \\text{ touch} \\Rightarrow \\text{horizontal inflexion}"
      },
      {
        "explanation": "At \\(x = 2\\) the gradient function crosses the axis, so \\(f'\\) changes sign — this is a turning point (not an inflexion).",
        "workingOut": "x = 2: \\text{ cross} \\Rightarrow \\text{turning point}"
      },
      {
        "explanation": "Select the correct statement.",
        "workingOut": "\\text{horizontal point of inflexion at } x = -4"
      }
    ]
  },
  {
    "id": "fortst2020-mc8",
    "topicId": "y11a-11C",
    "c": "11C",
    "t": "Arcs and sectors",
    "source": "Fort Street 2020 Trial Q8",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "$AOB$ is a sector of a circle, centre $O$ and radius $5$ cm, with area $10\\pi \\text{ cm}^2$. What is the arc length of the sector, in centimetres?",
    "a": "1",
    "opts": [
      "$2\\pi$",
      "$4\\pi$",
      "$6\\pi$",
      "$10\\pi$"
    ],
    "graphData": {
      "jsxGraph": {
        "width": 340,
        "height": 300,
        "boundingbox": [
          -5.5,
          5,
          6,
          -2
        ],
        "boardOptions": {
          "keepaspectratio": true
        },
        "script": "board.suspendUpdate();\nvar O=[0,0];\nvar B=[5,0];\nvar A=[5*Math.cos(144*Math.PI/180), 5*Math.sin(144*Math.PI/180)];\nboard.create('sector', [O, B, A], {fillColor:'#cbd5e1', fillOpacity:0.35, strokeColor:'#475569', strokeWidth:1.5});\nboard.create('segment', [O, B], {strokeColor:'black'});\nboard.create('segment', [O, A], {strokeColor:'black'});\nboard.create('point', O, {name:'O', size:2, color:'black', fixed:true, label:{offset:[-6,-10]}});\nboard.create('point', A, {name:'A', size:2, color:'black', fixed:true, label:{offset:[-12,2]}});\nboard.create('point', B, {name:'B', size:2, color:'black', fixed:true, label:{offset:[8,-2]}});\nboard.create('text', [2.4, -0.5, '5 cm'], {fontSize:12});\nboard.unsuspendUpdate();"
      }
    },
    "h": "Find $\\theta$ from the area formula $A = \\frac{1}{2}r^2\\theta$, then use $\\ell = r\\theta$.",
    "s": "From $A = \\frac{1}{2}r^2\\theta$: $10\\pi = \\frac{1}{2}(25)\\theta$, so $\\theta = \\frac{20\\pi}{25} = \\frac{4\\pi}{5}$. Then $\\ell = r\\theta = 5 \\times \\frac{4\\pi}{5} = 4\\pi$.",
    "solutionSteps": [
      {
        "explanation": "Use the sector area formula to find the angle \\(\\theta\\) (in radians).",
        "workingOut": "A = \\frac{1}{2}r^2\\theta \\Rightarrow 10\\pi = \\frac{1}{2}(5)^2\\theta"
      },
      {
        "explanation": "Solve for \\(\\theta\\).",
        "workingOut": "\\theta = \\frac{10\\pi}{12.5} = \\frac{4\\pi}{5}"
      },
      {
        "explanation": "Apply the arc-length formula \\(\\ell = r\\theta\\).",
        "workingOut": "\\ell = 5 \\times \\frac{4\\pi}{5}"
      },
      {
        "explanation": "Simplify.",
        "workingOut": "\\ell = 4\\pi \\text{ cm}"
      }
    ]
  },
  {
    "id": "fortst2020-mc9",
    "topicId": "y12a-10C",
    "c": "10C",
    "t": "Mean and variance of a distribution",
    "source": "Fort Street 2020 Trial Q9",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "A discrete random variable $X$ has $P(X{=}0)=a$, $P(X{=}1)=3a$, $P(X{=}2)=5a$, $P(X{=}3)=7a$. The expected value of $X$ is:",
    "a": "3",
    "opts": [
      "$\\dfrac{1}{16}$",
      "$2$",
      "$\\dfrac{35}{16}$",
      "$\\dfrac{17}{8}$"
    ],
    "h": "First find $a$ from the fact that the probabilities sum to $1$, then compute $E(X) = \\sum x\\,P(x)$.",
    "s": "Sum $= a + 3a + 5a + 7a = 16a = 1$, so $a = \\frac{1}{16}$. Then $E(X) = 0(a) + 1(3a) + 2(5a) + 3(7a) = 34a = \\frac{34}{16} = \\frac{17}{8}$.",
    "solutionSteps": [
      {
        "explanation": "All probabilities sum to \\(1\\); add them to find \\(a\\).",
        "workingOut": "a + 3a + 5a + 7a = 16a = 1 \\Rightarrow a = \\frac{1}{16}"
      },
      {
        "explanation": "Apply the expected value formula \\(E(X) = \\sum x\\,P(x)\\).",
        "workingOut": "E(X) = 0(a) + 1(3a) + 2(5a) + 3(7a)"
      },
      {
        "explanation": "Collect the multiples of \\(a\\).",
        "workingOut": "= 3a + 10a + 21a = 34a"
      },
      {
        "explanation": "Substitute \\(a = \\frac{1}{16}\\) and simplify.",
        "workingOut": "E(X) = \\frac{34}{16} = \\frac{17}{8}"
      }
    ]
  },
  {
    "id": "fortst2020-mc10",
    "topicId": "y12a-3H",
    "c": "3H",
    "t": "Primitive functions",
    "source": "Fort Street 2020 Trial Q10",
    "type": "multiple_choice",
    "difficulty": "hard",
    "q": "If $f'(x) = 3x^2 - 4$, which of the following graphs could represent $y = f(x)$? (Option B is a cubic with a maximum then minimum, crossing the $x$-axis three times near $x = -2, 0, 2$.)",
    "a": "1",
    "opts": [
      "An upward parabola (Option A)",
      "A positive cubic with a max then a min (Option B)",
      "A straight line (Option C)",
      "A monotonic increasing cubic with no turning points (Option D)"
    ],
    "h": "Integrate $f'(x)$: $f(x) = x^3 - 4x + C$, a cubic. Its turning points are where $f'(x) = 0$.",
    "s": "Integrating, $f(x) = x^3 - 4x + C = x(x-2)(x+2) + C$, a positive cubic. $f'(x) = 3x^2 - 4 = 0$ gives two turning points (a maximum then a minimum), matching the cubic in Option B.",
    "solutionSteps": [
      {
        "explanation": "Find \\(f(x)\\) by integrating \\(f'(x)\\); the constant \\(C\\) shifts the graph vertically.",
        "workingOut": "f(x) = \\int (3x^2 - 4)\\,dx = x^3 - 4x + C"
      },
      {
        "explanation": "Factor to see the basic shape: a positive cubic with roots near \\(-2, 0, 2\\) (before the vertical shift).",
        "workingOut": "f(x) = x(x-2)(x+2) + C"
      },
      {
        "explanation": "Locate the turning points by setting \\(f'(x) = 0\\).",
        "workingOut": "3x^2 - 4 = 0 \\Rightarrow x = \\pm\\frac{2}{\\sqrt{3}}"
      },
      {
        "explanation": "Since the leading coefficient is positive, the cubic rises, has a local maximum, then a local minimum, then rises again — this matches Option B.",
        "workingOut": "\\text{positive cubic with max then min (Option B)}"
      },
      {
        "explanation": "Sketch of the shape of \\(y = x^3 - 4x\\) confirming two turning points.",
        "workingOut": "",
        "graphData": {
          "jsxGraph": {
            "width": 360,
            "height": 300,
            "boundingbox": [
              -3.5,
              6,
              3.5,
              -6
            ],
            "boardOptions": {
              "keepaspectratio": false
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-3.5,0],[3.5,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-6],[0,6]], {strokeColor:'black'});\nboard.create('functiongraph', [function(x){ return x*x*x - 4*x; }, -2.6, 2.6], {strokeColor:'#1d4ed8',strokeWidth:2});\nboard.create('text', [3.1, 0.5, 'x'], {fontSize:13});\nboard.create('text', [0.25, 5.4, 'y'], {fontSize:13});\nboard.unsuspendUpdate();"
          }
        }
      }
    ]
  },
  {
    "id": "fortst2020-q1a",
    "topicId": "y11a-6J",
    "c": "6J",
    "t": "Problems with general triangles",
    "source": "Fort Street 2020 Trial Q1(a)",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "From a starting point $A$, Roy rows $1500$ m on a bearing of $068°30'$ to $B$, then turns onto a bearing of $145°30'$ for $2$ km to $C$, then returns to $A$. What is the size of $\\angle ABC$?",
    "a": "$\\angle ABC = 103°$",
    "opts": [],
    "graphData": {
      "geometry": {
        "width": 300,
        "points": {
          "A": [
            0,
            0
          ],
          "B": [
            2.6,
            2.2
          ],
          "C": [
            5.2,
            -2.4
          ]
        },
        "segments": [
          {
            "from": "A",
            "to": "B"
          },
          {
            "from": "B",
            "to": "C"
          },
          {
            "from": "C",
            "to": "A"
          }
        ],
        "sideLabels": [
          {
            "between": [
              "A",
              "B"
            ],
            "text": "1500 m"
          },
          {
            "between": [
              "B",
              "C"
            ],
            "text": "2 km"
          }
        ]
      }
    },
    "h": "The reverse bearing of $A$ from $B$ is $68°30' + 180°$. Subtract the bearing of $C$ from $B$.",
    "s": "The bearing of $A$ from $B$ is $68°30' + 180° = 248°30'$. The bearing of $C$ from $B$ is $145°30'$. So $\\angle ABC = 248°30' - 145°30' = 103°$.",
    "solutionSteps": [
      {
        "explanation": "Find the back-bearing of \\(A\\) from \\(B\\) by adding \\(180°\\) to the forward bearing of \\(B\\) from \\(A\\).",
        "workingOut": "\\text{bearing of } A \\text{ from } B = 68°30' + 180° = 248°30'"
      },
      {
        "explanation": "The angle \\(\\angle ABC\\) is the difference between the bearing of \\(A\\) from \\(B\\) and the bearing of \\(C\\) from \\(B\\).",
        "workingOut": "\\angle ABC = 248°30' - 145°30'"
      },
      {
        "explanation": "Subtract.",
        "workingOut": "\\angle ABC = 103°"
      }
    ]
  },
  {
    "id": "fortst2020-q1b",
    "topicId": "y11a-6I",
    "c": "6I",
    "t": "The cosine rule",
    "source": "Fort Street 2020 Trial Q1(b)",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "Calculate $AC$, the distance Roy rows back to his starting point ($AB = 1500$ m, $BC = 2000$ m, $\\angle ABC = 103°$). Answer to the nearest metre.",
    "a": "$AC \\approx 2757$ m",
    "opts": [],
    "h": "Apply the cosine rule $AC^2 = AB^2 + BC^2 - 2\\,AB\\cdot BC\\cos(\\angle ABC)$.",
    "s": "$AC^2 = 1500^2 + 2000^2 - 2(1500)(2000)\\cos 103° = 7\\,599\\,706.3$, so $AC = \\sqrt{7\\,599\\,706.3} \\approx 2757$ m.",
    "solutionSteps": [
      {
        "explanation": "State the cosine rule for the side \\(AC\\) opposite the angle \\(\\angle ABC\\).",
        "workingOut": "AC^2 = AB^2 + BC^2 - 2\\,AB\\cdot BC\\cos(\\angle ABC)"
      },
      {
        "explanation": "Substitute \\(AB = 1500\\), \\(BC = 2000\\) and \\(\\angle ABC = 103°\\).",
        "workingOut": "AC^2 = 1500^2 + 2000^2 - 2(1500)(2000)\\cos 103°"
      },
      {
        "explanation": "Evaluate the right-hand side.",
        "workingOut": "AC^2 = 7\\,599\\,706.3"
      },
      {
        "explanation": "Take the square root (remembering to do so!) and round to the nearest metre.",
        "workingOut": "AC = \\sqrt{7\\,599\\,706.3} \\approx 2757 \\text{ m}"
      }
    ]
  },
  {
    "id": "fortst2020-q2a",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of e^x",
    "source": "Fort Street 2020 Trial Q2(a)",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "Differentiate $\\dfrac{e^{3x}}{x-1}$, simplifying your answer.",
    "a": "$\\dfrac{e^{3x}(3x-4)}{(x-1)^2}$",
    "opts": [],
    "h": "Use the quotient rule with $u = e^{3x}$ ($u' = 3e^{3x}$) and $v = x-1$.",
    "s": "$\\frac{dy}{dx} = \\frac{(x-1)(3e^{3x}) - e^{3x}(1)}{(x-1)^2} = \\frac{3xe^{3x} - 3e^{3x} - e^{3x}}{(x-1)^2} = \\frac{e^{3x}(3x-4)}{(x-1)^2}$.",
    "solutionSteps": [
      {
        "explanation": "Set up the quotient rule \\(\\frac{vu' - uv'}{v^2}\\) with \\(u = e^{3x}\\) and \\(v = x-1\\).",
        "workingOut": "u = e^{3x}, \\; u' = 3e^{3x}; \\quad v = x-1, \\; v' = 1"
      },
      {
        "explanation": "Substitute into the quotient rule.",
        "workingOut": "\\frac{dy}{dx} = \\frac{(x-1)(3e^{3x}) - e^{3x}(1)}{(x-1)^2}"
      },
      {
        "explanation": "Expand the numerator.",
        "workingOut": "= \\frac{3xe^{3x} - 3e^{3x} - e^{3x}}{(x-1)^2}"
      },
      {
        "explanation": "Factor \\(e^{3x}\\) from the numerator and simplify.",
        "workingOut": "= \\frac{e^{3x}(3x - 4)}{(x-1)^2}"
      }
    ]
  },
  {
    "id": "fortst2020-q2b",
    "topicId": "y12a-6B",
    "c": "6B",
    "t": "Differentiating the trigonometric functions",
    "source": "Fort Street 2020 Trial Q2(b)",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "Differentiate $\\tan x\\cos x$, simplifying your answer.",
    "a": "$\\cos x$",
    "opts": [],
    "h": "Simplify first: $\\tan x\\cos x = \\dfrac{\\sin x}{\\cos x}\\cdot\\cos x = \\sin x$.",
    "s": "Since $\\tan x\\cos x = \\frac{\\sin x}{\\cos x}\\cdot\\cos x = \\sin x$, the derivative is simply $\\frac{d}{dx}(\\sin x) = \\cos x$.",
    "solutionSteps": [
      {
        "explanation": "Simplify the expression before differentiating, using \\(\\tan x = \\frac{\\sin x}{\\cos x}\\).",
        "workingOut": "\\tan x\\cos x = \\frac{\\sin x}{\\cos x}\\cdot\\cos x = \\sin x"
      },
      {
        "explanation": "Differentiate the simplified function.",
        "workingOut": "\\frac{d}{dx}(\\sin x) = \\cos x"
      }
    ]
  },
  {
    "id": "fortst2020-q2c",
    "topicId": "y12a-5K",
    "c": "5K",
    "t": "Calculus with other bases",
    "source": "Fort Street 2020 Trial Q2(c)",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "Differentiate $\\log_4(x^2 + 3)$.",
    "a": "$\\dfrac{x}{(\\ln 2)(x^2 + 3)}$",
    "opts": [],
    "h": "Use $\\frac{d}{dx}\\log_a u = \\frac{u'}{(\\ln a)\\,u}$ with $a = 4$, $u = x^2 + 3$.",
    "s": "$\\frac{dy}{dx} = \\frac{2x}{(\\ln 4)(x^2+3)}$. Since $\\ln 4 = 2\\ln 2$, this simplifies to $\\frac{2x}{2\\ln 2(x^2+3)} = \\frac{x}{(\\ln 2)(x^2+3)}$.",
    "solutionSteps": [
      {
        "explanation": "Apply the rule for differentiating a logarithm with base \\(a\\): \\(\\frac{d}{dx}\\log_a u = \\frac{u'}{(\\ln a)\\,u}\\).",
        "workingOut": "\\frac{dy}{dx} = \\frac{2x}{(\\ln 4)(x^2 + 3)}"
      },
      {
        "explanation": "Simplify using \\(\\ln 4 = 2\\ln 2\\).",
        "workingOut": "= \\frac{2x}{2\\ln 2\\,(x^2 + 3)} = \\frac{x}{(\\ln 2)(x^2 + 3)}"
      }
    ]
  },
  {
    "id": "fortst2020-q3a",
    "topicId": "y12a-6D",
    "c": "6D",
    "t": "Integrating the trigonometric functions",
    "source": "Fort Street 2020 Trial Q3(a)",
    "type": "short_answer",
    "difficulty": "easy",
    "q": "Find $\\displaystyle\\int \\sin\\!\\left(\\dfrac{x}{3}\\right) dx$.",
    "a": "$-3\\cos\\!\\left(\\dfrac{x}{3}\\right) + C$",
    "opts": [],
    "h": "The primitive of $\\sin(ax)$ is $-\\frac{1}{a}\\cos(ax)$, with $a = \\frac{1}{3}$.",
    "s": "$\\int \\sin\\!\\left(\\frac{x}{3}\\right) dx = -\\frac{1}{1/3}\\cos\\!\\left(\\frac{x}{3}\\right) + C = -3\\cos\\!\\left(\\frac{x}{3}\\right) + C$.",
    "solutionSteps": [
      {
        "explanation": "Use the primitive of \\(\\sin(ax) = -\\frac{1}{a}\\cos(ax)\\). Here \\(a = \\frac{1}{3}\\), so divide by \\(\\frac{1}{3}\\) (i.e. multiply by \\(3\\)).",
        "workingOut": "\\int \\sin\\!\\left(\\frac{x}{3}\\right) dx = -3\\cos\\!\\left(\\frac{x}{3}\\right) + C"
      }
    ]
  },
  {
    "id": "fortst2020-q3b",
    "topicId": "y12a-4E",
    "c": "4E",
    "t": "The indefinite integral",
    "source": "Fort Street 2020 Trial Q3(b)",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "Find $\\displaystyle\\int x^4(x^5 - 2)^3\\,dx$.",
    "a": "$\\dfrac{1}{20}(x^5 - 2)^4 + C$",
    "opts": [],
    "h": "Use the reverse chain rule: the derivative of $x^5 - 2$ is $5x^4$, which (up to a constant) matches the $x^4$ factor.",
    "s": "Since $\\frac{d}{dx}(x^5 - 2) = 5x^4$, write $\\int x^4(x^5-2)^3 dx = \\frac{1}{20}\\int 5x^4(x^5-2)^3 dx = \\frac{1}{20}(x^5-2)^4 + C$.",
    "solutionSteps": [
      {
        "explanation": "Identify the inner function \\(u = x^5 - 2\\) whose derivative \\(5x^4\\) is proportional to the \\(x^4\\) factor outside.",
        "workingOut": "\\frac{d}{dx}(x^5 - 2) = 5x^4"
      },
      {
        "explanation": "Adjust by a constant so the integrand contains \\(5x^4\\), factoring out \\(\\frac{1}{20}\\) (since the power increases to \\(4\\)).",
        "workingOut": "\\int x^4(x^5-2)^3 dx = \\frac{1}{20}\\int 5x^4(x^5-2)^3 dx"
      },
      {
        "explanation": "Apply the reverse chain rule: raise the power by \\(1\\) and divide by the new power.",
        "workingOut": "= \\frac{1}{20}(x^5 - 2)^4 + C"
      }
    ]
  },
  {
    "id": "fortst2020-q4",
    "topicId": "y12a-5J",
    "c": "5J",
    "t": "Applications of integration of the logarithmic function",
    "source": "Fort Street 2020 Trial Q4",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "Evaluate exactly $\\displaystyle\\int_0^1 \\dfrac{x-1}{x^2 - 2x + 4}\\,dx$, simplifying your answer fully.",
    "a": "$\\ln\\!\\left(\\dfrac{\\sqrt{3}}{2}\\right)$",
    "opts": [],
    "h": "The derivative of the denominator is $2x - 2 = 2(x-1)$, so rewrite the numerator to use $\\int\\frac{f'}{f} = \\ln f$.",
    "s": "Write $\\int_0^1 \\frac{x-1}{x^2-2x+4}dx = \\frac{1}{2}\\int_0^1 \\frac{2x-2}{x^2-2x+4}dx = \\frac{1}{2}[\\ln(x^2-2x+4)]_0^1 = \\frac{1}{2}(\\ln 3 - \\ln 4) = \\frac{1}{2}\\ln\\frac{3}{4} = \\ln\\frac{\\sqrt{3}}{2}$.",
    "solutionSteps": [
      {
        "explanation": "Notice the derivative of the denominator is \\(2x - 2 = 2(x-1)\\). Rewrite the numerator as \\(\\frac{1}{2}(2x-2)\\) so the integrand has the form \\(\\frac{f'(x)}{f(x)}\\).",
        "workingOut": "\\int_0^1 \\frac{x-1}{x^2-2x+4}dx = \\frac{1}{2}\\int_0^1 \\frac{2x-2}{x^2-2x+4}dx"
      },
      {
        "explanation": "Integrate using \\(\\int \\frac{f'}{f}dx = \\ln|f|\\).",
        "workingOut": "= \\frac{1}{2}\\big[\\ln(x^2 - 2x + 4)\\big]_0^1"
      },
      {
        "explanation": "Substitute the limits: at \\(x=1\\), \\(1-2+4 = 3\\); at \\(x=0\\), \\(4\\).",
        "workingOut": "= \\frac{1}{2}(\\ln 3 - \\ln 4)"
      },
      {
        "explanation": "Combine the logarithms.",
        "workingOut": "= \\frac{1}{2}\\ln\\frac{3}{4}"
      },
      {
        "explanation": "Bring the \\(\\frac{1}{2}\\) inside as a square root to simplify fully.",
        "workingOut": "= \\ln\\sqrt{\\frac{3}{4}} = \\ln\\frac{\\sqrt{3}}{2}"
      }
    ]
  },
  {
    "id": "fortst2020-q5",
    "topicId": "y11a-1D",
    "c": "1D",
    "t": "Solving quadratic equations",
    "source": "Fort Street 2020 Trial Q5",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "For what values of $k$ does the quadratic equation $5x^2 - 2x + (8k - 15) = 0$ have real roots?",
    "a": "$k \\leq \\dfrac{19}{10}$",
    "opts": [],
    "h": "Real roots require the discriminant $\\Delta = b^2 - 4ac \\geq 0$.",
    "s": "$\\Delta = (-2)^2 - 4(5)(8k-15) \\geq 0 \\Rightarrow 4 - 160k + 300 \\geq 0 \\Rightarrow 304 \\geq 160k \\Rightarrow k \\leq \\frac{19}{10}$.",
    "solutionSteps": [
      {
        "explanation": "For real roots the discriminant must be non-negative (note: \\(\\geq 0\\) includes equal roots).",
        "workingOut": "\\Delta = b^2 - 4ac \\geq 0"
      },
      {
        "explanation": "Substitute \\(a = 5\\), \\(b = -2\\), \\(c = 8k - 15\\).",
        "workingOut": "(-2)^2 - 4(5)(8k - 15) \\geq 0"
      },
      {
        "explanation": "Expand.",
        "workingOut": "4 - 160k + 300 \\geq 0"
      },
      {
        "explanation": "Collect terms.",
        "workingOut": "304 \\geq 160k"
      },
      {
        "explanation": "Solve for \\(k\\).",
        "workingOut": "k \\leq \\frac{304}{160} = \\frac{19}{10}"
      }
    ]
  },
  {
    "id": "fortst2020-q6",
    "topicId": "y11a-3H",
    "c": "3H",
    "t": "Two graphs that have asymptotes",
    "source": "Fort Street 2020 Trial Q6",
    "type": "teacher_review",
    "difficulty": "medium",
    "q": "Sketch the graph of $y = 2 - \\dfrac{4}{x+1}$, showing all intercepts with the coordinate axes and all asymptotes.",
    "a": "Hyperbola with vertical asymptote $x = -1$, horizontal asymptote $y = 2$, $x$-intercept $(1, 0)$ and $y$-intercept $(0, -2)$.",
    "opts": [],
    "h": "Vertical asymptote where the denominator is zero; horizontal asymptote is the constant term; find intercepts by setting $y=0$ and $x=0$.",
    "s": "Vertical asymptote: $x + 1 = 0 \\Rightarrow x = -1$. Horizontal asymptote: $y = 2$. $x$-intercept: $0 = 2 - \\frac{4}{x+1} \\Rightarrow x = 1$. $y$-intercept: $x = 0 \\Rightarrow y = 2 - 4 = -2$.",
    "solutionSteps": [
      {
        "explanation": "Find the vertical asymptote where the denominator equals zero.",
        "workingOut": "x + 1 = 0 \\Rightarrow x = -1"
      },
      {
        "explanation": "Find the horizontal asymptote: as \\(x \\to \\pm\\infty\\), \\(\\frac{4}{x+1} \\to 0\\), so \\(y \\to 2\\).",
        "workingOut": "y = 2"
      },
      {
        "explanation": "Find the \\(x\\)-intercept by setting \\(y = 0\\).",
        "workingOut": "2 - \\frac{4}{x+1} = 0 \\Rightarrow x + 1 = 2 \\Rightarrow x = 1"
      },
      {
        "explanation": "Find the \\(y\\)-intercept by setting \\(x = 0\\).",
        "workingOut": "y = 2 - \\frac{4}{1} = -2"
      },
      {
        "explanation": "Sketch the hyperbola with both asymptotes and the two intercepts.",
        "workingOut": "",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 360,
            "boundingbox": [
              -9,
              9,
              9,
              -9
            ],
            "boardOptions": {
              "keepaspectratio": false
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-9,0],[9,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-9],[0,9]], {strokeColor:'black'});\nboard.create('line', [[-1,-9],[-1,9]], {strokeColor:'#94a3b8', dash:2, straightFirst:false, straightLast:false});\nboard.create('line', [[-9,2],[9,2]], {strokeColor:'#94a3b8', dash:2, straightFirst:false, straightLast:false});\nboard.create('functiongraph', [function(x){ return 2 - 4/(x+1); }, -9, -1.45], {strokeColor:'#1d4ed8',strokeWidth:2});\nboard.create('functiongraph', [function(x){ return 2 - 4/(x+1); }, -0.55, 9], {strokeColor:'#1d4ed8',strokeWidth:2});\nboard.create('point', [1,0], {name:'(1, 0)', size:2.5, color:'red', fixed:true, label:{offset:[6,12]}});\nboard.create('point', [0,-2], {name:'(0, -2)', size:2.5, color:'red', fixed:true, label:{offset:[8,-4]}});\nboard.create('text', [-3.6, 2.6, 'y = 2'], {fontSize:11});\nboard.create('text', [-2.6, -7.5, 'x = -1'], {fontSize:11});\nboard.create('text', [8.5, 0.5, 'x'], {fontSize:13});\nboard.create('text', [0.3, 8.4, 'y'], {fontSize:13});\nboard.unsuspendUpdate();"
          }
        }
      }
    ]
  },
  {
    "id": "fortst2020-q7",
    "topicId": "y12a-9A",
    "c": "9A",
    "t": "The language of statistics",
    "source": "Fort Street 2020 Trial Q7",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "Two box-and-whisker plots show tree heights (m): Central Park (median $\\approx 7.5$, symmetric, range $\\approx 6$) and East Park (median $\\approx 4$, positively skewed, range $\\approx 16$). Compare and contrast the two data sets by shape/skewness, location and spread.",
    "a": "Central Park is symmetric with a higher median ($\\approx 7.5$ vs $\\approx 4$) and smaller range/spread; East Park is positively skewed with a much larger range, so its heights are more spread out and less consistent.",
    "opts": [],
    "graphData": {
      "jsxGraph": {
        "width": 460,
        "height": 280,
        "boundingbox": [
          -3,
          6,
          23,
          -3
        ],
        "boardOptions": {
          "keepaspectratio": false
        },
        "script": "board.suspendUpdate();\nboard.create('axis', [[0,0],[1,0]], {ticks:{insertTicks:false, ticksDistance:2, minorTicks:0, drawZero:true}, strokeColor:'black'});\nfunction box(y,mn,q1,med,q3,mx,label){ board.create('segment',[[q1,y-0.6],[q3,y-0.6]],{visible:false}); board.create('polygon',[[q1,y-0.5],[q3,y-0.5],[q3,y+0.5],[q1,y+0.5]],{fillColor:'#cbd5e1',fillOpacity:0.4,borders:{strokeColor:'#475569'},vertices:{visible:false},fixed:true}); board.create('segment',[[med,y-0.5],[med,y+0.5]],{strokeColor:'#1d4ed8',strokeWidth:2}); board.create('segment',[[mn,y],[q1,y]],{strokeColor:'#475569'}); board.create('segment',[[q3,y],[mx,y]],{strokeColor:'#475569'}); board.create('segment',[[mn,y-0.25],[mn,y+0.25]],{strokeColor:'#475569'}); board.create('segment',[[mx,y-0.25],[mx,y+0.25]],{strokeColor:'#475569'}); board.create('text',[mn-2.6,y-0.2,label],{fontSize:10}); }\nbox(3.5, 4, 5.5, 7.5, 9, 10, 'Central');\nbox(1.2, 2, 3, 4, 8, 18, 'East');\nfor(var t=0;t<=22;t+=2){ board.create('text',[t-0.2,-1.4,''+t],{fontSize:9}); }\nboard.create('text',[8, -2.4, 'Tree height (metres)'],{fontSize:11});\nboard.unsuspendUpdate();"
      }
    },
    "h": "Comment on shape/skew, then medians (location), then range/IQR (spread), and interpret in context.",
    "s": "Shape: Central Park is symmetric; East Park is positively (right) skewed. Location: Central Park has the higher median ($\\approx 7.5$ vs $\\approx 4$) — in fact East Park's median equals roughly Central Park's minimum. Spread: East Park has the larger range ($\\approx 16$ vs $\\approx 6$), so its tree heights are more spread out and less consistent, though the IQRs are more similar.",
    "solutionSteps": [
      {
        "explanation": "Compare the shape and skewness. Central Park's box and whiskers are balanced about the median (symmetric); East Park has a long right whisker (positively skewed).",
        "workingOut": "\\text{Central: symmetric}; \\quad \\text{East: positively skewed}"
      },
      {
        "explanation": "Compare location using the medians. Central Park's median is about \\(7.5\\) m, East Park's about \\(4\\) m, so Central Park's trees are typically taller.",
        "workingOut": "\\text{median}_C \\approx 7.5 > \\text{median}_E \\approx 4"
      },
      {
        "explanation": "Compare spread using the range (and IQR). East Park's range is much larger.",
        "workingOut": "\\text{range}_E \\approx 16 > \\text{range}_C \\approx 6"
      },
      {
        "explanation": "Interpret in context: East Park's heights are more spread out and less consistent; half of East Park's trees are shorter than the shortest tree in Central Park.",
        "workingOut": "\\text{East Park: more variable, generally shorter trees}"
      }
    ]
  },
  {
    "id": "fortst2020-q8",
    "topicId": "y12a-5G",
    "c": "5G",
    "t": "Differentiation of logarithmic functions",
    "source": "Fort Street 2020 Trial Q8",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "Find the equation of the normal to the curve $y = \\ln\\!\\left(\\dfrac{2x-1}{x+1}\\right)$ at the point where $x = 2$.",
    "a": "$y = -3x + 6$",
    "opts": [],
    "h": "Use log laws: $y = \\ln(2x-1) - \\ln(x+1)$, differentiate, evaluate at $x = 2$, then take the negative reciprocal for the normal.",
    "s": "Write $y = \\ln(2x-1) - \\ln(x+1)$, so $\\frac{dy}{dx} = \\frac{2}{2x-1} - \\frac{1}{x+1}$. At $x = 2$: $\\frac{2}{3} - \\frac{1}{3} = \\frac{1}{3}$ (tangent gradient), so the normal gradient is $-3$. At $x = 2$, $y = \\ln\\frac{3}{3} = \\ln 1 = 0$. Normal: $y - 0 = -3(x - 2) \\Rightarrow y = -3x + 6$.",
    "solutionSteps": [
      {
        "explanation": "Use logarithm laws to split the function so it is easier to differentiate.",
        "workingOut": "y = \\ln(2x-1) - \\ln(x+1)"
      },
      {
        "explanation": "Differentiate each term using \\(\\frac{d}{dx}\\ln(ax+b) = \\frac{a}{ax+b}\\).",
        "workingOut": "\\frac{dy}{dx} = \\frac{2}{2x-1} - \\frac{1}{x+1}"
      },
      {
        "explanation": "Evaluate the tangent gradient at \\(x = 2\\).",
        "workingOut": "\\frac{2}{3} - \\frac{1}{3} = \\frac{1}{3}"
      },
      {
        "explanation": "The normal is perpendicular, so its gradient is the negative reciprocal.",
        "workingOut": "m_{\\text{normal}} = -3"
      },
      {
        "explanation": "Find the point of contact at \\(x = 2\\).",
        "workingOut": "y = \\ln\\!\\left(\\frac{3}{3}\\right) = \\ln 1 = 0 \\Rightarrow (2, 0)"
      },
      {
        "explanation": "Use point–gradient form for the normal line.",
        "workingOut": "y - 0 = -3(x - 2) \\Rightarrow y = -3x + 6"
      }
    ]
  },
  {
    "id": "fortst2020-q9",
    "topicId": "y11a-3G",
    "c": "3G",
    "t": "Powers, cubics, and circles",
    "source": "Fort Street 2020 Trial Q9",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "A circle is given by $x^2 + y^2 + 4x - 10y = -16$. Find the centre and radius of this circle.",
    "a": "Centre $(-2, 5)$, radius $\\sqrt{13}$",
    "opts": [],
    "h": "Complete the square in both $x$ and $y$.",
    "s": "Complete the square: $(x^2 + 4x + 4) + (y^2 - 10y + 25) = -16 + 4 + 25$, i.e. $(x+2)^2 + (y-5)^2 = 13$. Centre $(-2, 5)$, radius $\\sqrt{13}$.",
    "solutionSteps": [
      {
        "explanation": "Group the \\(x\\) terms and \\(y\\) terms, ready to complete the square.",
        "workingOut": "(x^2 + 4x) + (y^2 - 10y) = -16"
      },
      {
        "explanation": "Complete the square for \\(x\\) (add \\(4\\)) and for \\(y\\) (add \\(25\\)) to both sides.",
        "workingOut": "(x^2 + 4x + 4) + (y^2 - 10y + 25) = -16 + 4 + 25"
      },
      {
        "explanation": "Write each group as a perfect square and simplify the right side.",
        "workingOut": "(x + 2)^2 + (y - 5)^2 = 13"
      },
      {
        "explanation": "Read off the centre and radius from the standard form \\((x-h)^2 + (y-k)^2 = r^2\\).",
        "workingOut": "\\text{Centre } (-2, 5), quad r = \\sqrt{13}"
      }
    ]
  },
  {
    "id": "fortst2020-q10a",
    "topicId": "y11a-3D",
    "c": "3D",
    "t": "Quadratic functions",
    "source": "Fort Street 2020 Trial Q10(a)",
    "type": "short_answer",
    "difficulty": "easy",
    "q": "Let $f(x) = (x+2)(x-2)^3$. Find the $x$- and $y$-intercepts of $y = f(x)$.",
    "a": "$x$-intercepts $(-2, 0)$ and $(2, 0)$; $y$-intercept $(0, -16)$",
    "opts": [],
    "h": "For $x$-intercepts set $y = 0$; for the $y$-intercept set $x = 0$.",
    "s": "$x$-intercepts: $(x+2)(x-2)^3 = 0 \\Rightarrow x = -2$ or $x = 2$. $y$-intercept: $f(0) = (2)(-2)^3 = -16$, i.e. $(0, -16)$.",
    "solutionSteps": [
      {
        "explanation": "Find the \\(x\\)-intercepts by setting the function to zero.",
        "workingOut": "(x+2)(x-2)^3 = 0 \\Rightarrow x = -2, \\; 2"
      },
      {
        "explanation": "Find the \\(y\\)-intercept by substituting \\(x = 0\\).",
        "workingOut": "f(0) = (2)(-2)^3 = -16"
      },
      {
        "explanation": "State the intercepts.",
        "workingOut": "(-2, 0), \\; (2, 0), \\; (0, -16)"
      }
    ]
  },
  {
    "id": "fortst2020-q10b",
    "topicId": "y12a-3C",
    "c": "3C",
    "t": "Second and higher derivatives",
    "source": "Fort Street 2020 Trial Q10(b)",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "For $f(x) = (x+2)(x-2)^3$, show that $f'(x) = 4(x-2)^2(x+1)$ and $f''(x) = 12x(x-2)$.",
    "a": "$f'(x) = 4(x-2)^2(x+1)$ and $f''(x) = 12x(x-2)$",
    "opts": [],
    "h": "Use the product rule, then factor out the common $(x-2)^2$. Differentiate again for $f''$.",
    "s": "$f'(x) = (x-2)^3 + (x+2)\\cdot 3(x-2)^2 = (x-2)^2[(x-2) + 3(x+2)] = (x-2)^2(4x+4) = 4(x-2)^2(x+1)$. Then $f''(x) = 4[2(x-2)(x+1) + (x-2)^2] = 4(x-2)[2(x+1)+(x-2)] = 4(x-2)(3x) = 12x(x-2)$.",
    "solutionSteps": [
      {
        "explanation": "Differentiate \\(f(x) = (x+2)(x-2)^3\\) using the product rule.",
        "workingOut": "f'(x) = (x-2)^3(1) + (x+2)\\cdot 3(x-2)^2"
      },
      {
        "explanation": "Factor out the common factor \\((x-2)^2\\).",
        "workingOut": "= (x-2)^2[(x-2) + 3(x+2)]"
      },
      {
        "explanation": "Simplify the bracket.",
        "workingOut": "= (x-2)^2(4x + 4) = 4(x-2)^2(x+1)"
      },
      {
        "explanation": "Differentiate \\(f'(x)\\) using the product rule on \\(4(x-2)^2(x+1)\\).",
        "workingOut": "f''(x) = 4[2(x-2)(x+1) + (x-2)^2]"
      },
      {
        "explanation": "Factor out \\((x-2)\\) and simplify.",
        "workingOut": "= 4(x-2)[2(x+1) + (x-2)] = 4(x-2)(3x) = 12x(x-2)"
      }
    ]
  },
  {
    "id": "fortst2020-q10c",
    "topicId": "y12a-3B",
    "c": "3B",
    "t": "Stationary points and turning points",
    "source": "Fort Street 2020 Trial Q10(c)",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "For $f(x) = (x+2)(x-2)^3$ (with $f'(x) = 4(x-2)^2(x+1)$, $f''(x) = 12x(x-2)$), find the coordinates of the stationary points and determine their nature, justifying fully.",
    "a": "$(-1, -27)$ is a minimum turning point; $(2, 0)$ is a horizontal point of inflexion.",
    "opts": [],
    "h": "Solve $f'(x) = 0$, then test each point with $f''$ (and a sign table where $f'' = 0$).",
    "s": "$f'(x) = 0 \\Rightarrow x = -1$ or $x = 2$. $f(-1) = -27$, $f(2) = 0$. $f''(-1) = 36 > 0$, so $(-1, -27)$ is a minimum. $f''(2) = 0$, so test concavity: it changes from negative to positive around $x = 2$, so $(2, 0)$ is a horizontal point of inflexion.",
    "solutionSteps": [
      {
        "explanation": "Find the stationary points where \\(f'(x) = 0\\).",
        "workingOut": "4(x-2)^2(x+1) = 0 \\Rightarrow x = -1, \\; 2"
      },
      {
        "explanation": "Find the \\(y\\)-coordinates.",
        "workingOut": "f(-1) = (1)(-3)^3 = -27; \\quad f(2) = 0"
      },
      {
        "explanation": "Test \\(x = -1\\) with the second derivative.",
        "workingOut": "f''(-1) = 12(-1)(-3) = 36 > 0 \\Rightarrow \\text{minimum}"
      },
      {
        "explanation": "At \\(x = 2\\), \\(f''(2) = 0\\), so the test is inconclusive. Use a concavity table around \\(x = 2\\).",
        "workingOut": "f''(1.5) = -9 < 0, quad f''(2.5) = 15 > 0"
      },
      {
        "explanation": "Since concavity changes and the tangent is horizontal, \\((2, 0)\\) is a horizontal point of inflexion.",
        "workingOut": "(-1, -27)\\text{ min}, quad (2, 0)\\text{ horizontal inflexion}"
      }
    ]
  },
  {
    "id": "fortst2020-q10d",
    "topicId": "y12a-3D",
    "c": "3D",
    "t": "Concavity and points of inflection",
    "source": "Fort Street 2020 Trial Q10(d)",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "For $f(x) = (x+2)(x-2)^3$ (with $f''(x) = 12x(x-2)$), find the coordinates of all points of inflection of $y = f(x)$.",
    "a": "Points of inflection at $(0, -16)$ and $(2, 0)$",
    "opts": [],
    "h": "Set $f''(x) = 0$ and confirm a change in concavity at each candidate.",
    "s": "$f''(x) = 12x(x-2) = 0 \\Rightarrow x = 0$ or $x = 2$. $(2, 0)$ is already the horizontal inflexion. For $x = 0$: concavity changes ($f''(-0.5) > 0$, $f''(0.5) < 0$), so $(0, -16)$ is also a point of inflexion.",
    "solutionSteps": [
      {
        "explanation": "Find candidate inflection points where the second derivative is zero.",
        "workingOut": "f''(x) = 12x(x-2) = 0 \\Rightarrow x = 0, \\; 2"
      },
      {
        "explanation": "We already established \\((2, 0)\\) is a horizontal point of inflexion. Test \\(x = 0\\) for a change in concavity.",
        "workingOut": "f''(-0.5) = 15 > 0, quad f''(0.5) = -9 < 0"
      },
      {
        "explanation": "Concavity changes at \\(x = 0\\), so it is a point of inflexion; find its \\(y\\)-value.",
        "workingOut": "f(0) = -16 \\Rightarrow (0, -16)"
      },
      {
        "explanation": "State all points of inflection.",
        "workingOut": "(0, -16) \\text{ and } (2, 0)"
      }
    ]
  },
  {
    "id": "fortst2020-q10e",
    "topicId": "y12a-3E",
    "c": "3E",
    "t": "Systematic curve sketching with the derivative",
    "source": "Fort Street 2020 Trial Q10(e)",
    "type": "teacher_review",
    "difficulty": "medium",
    "q": "Sketch the graph of $y = f(x) = (x+2)(x-2)^3$, showing the intercepts, the minimum turning point and the points of inflection.",
    "a": "Quartic through $(-2,0)$ and $(2,0)$, $y$-intercept $(0,-16)$, minimum at $(-1,-27)$, points of inflection $(0,-16)$ and a horizontal one at $(2,0)$.",
    "opts": [],
    "h": "Plot the intercepts $(-2,0), (2,0), (0,-16)$, the minimum $(-1,-27)$, and the horizontal inflexion at $(2,0)$, then join as a positive quartic.",
    "s": "The curve is a positive quartic. Key features: $x$-intercepts $(-2,0)$ and $(2,0)$; $y$-intercept $(0,-16)$; minimum turning point $(-1,-27)$; point of inflection $(0,-16)$; horizontal point of inflection at $(2,0)$. Both ends rise to $+\\infty$.",
    "solutionSteps": [
      {
        "explanation": "Collect all features from parts (a), (c) and (d).",
        "workingOut": "(-2,0),(2,0),(0,-16),(-1,-27)\\text{ min},(2,0)\\text{ horiz. POI}"
      },
      {
        "explanation": "Note the end behaviour: a positive quartic rises to \\(+\\infty\\) on both sides.",
        "workingOut": "x \\to \\pm\\infty \\Rightarrow f(x) \\to +\\infty"
      },
      {
        "explanation": "Sketch the curve through all key points (using different scales on the axes).",
        "workingOut": "",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 340,
            "boundingbox": [
              -3.2,
              12,
              3.6,
              -32
            ],
            "boardOptions": {
              "keepaspectratio": false
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-3.2,0],[3.6,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-32],[0,12]], {strokeColor:'black'});\nboard.create('functiongraph', [function(x){ return (x+2)*Math.pow(x-2,3); }, -2.65, 2.85], {strokeColor:'#1d4ed8',strokeWidth:2});\nboard.create('point', [-2,0], {name:'(-2, 0)', size:2.5, color:'red', fixed:true, label:{offset:[-14,12]}});\nboard.create('point', [2,0], {name:'(2, 0)', size:2.5, color:'red', fixed:true, label:{offset:[8,12]}});\nboard.create('point', [0,-16], {name:'(0, -16)', size:2.5, color:'red', fixed:true, label:{offset:[8,-2]}});\nboard.create('point', [-1,-27], {name:'(-1, -27)', size:2.5, color:'red', fixed:true, label:{offset:[6,-10]}});\nboard.create('text', [3.3, 1.2, 'x'], {fontSize:13});\nboard.create('text', [0.3, 11, 'y'], {fontSize:13});\nboard.unsuspendUpdate();"
          }
        }
      }
    ]
  },
  {
    "id": "fortst2020-q10f",
    "topicId": "y12a-2H",
    "c": "2H",
    "t": "Combinations of transformations",
    "source": "Fort Street 2020 Trial Q10(f)",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "State, in the correct order, the transformations required to obtain the graph of $y = f\\!\\left(2\\left(x - \\dfrac{1}{4}\\right)\\right)$ from $y = f(x)$.",
    "a": "Horizontal dilation by a factor of $\\dfrac{1}{2}$, then horizontal translation $\\dfrac{1}{4}$ unit to the right.",
    "opts": [],
    "h": "The \"$2$\" inside is a horizontal dilation; the \"$-\\frac{1}{4}$\" is a horizontal translation. Apply the dilation first because it is written closest to $x$.",
    "s": "The factor $2$ multiplying $x$ gives a horizontal dilation by factor $\\frac{1}{2}$. The $-\\frac{1}{4}$ gives a horizontal translation $\\frac{1}{4}$ unit right. Reading from the bracket form $f\\!\\left(2\\left(x-\\frac{1}{4}\\right)\\right)$, the dilation is applied first, then the translation.",
    "solutionSteps": [
      {
        "explanation": "Identify the horizontal dilation from the factor multiplying \\(x\\): a factor of \\(2\\) inside means a dilation by \\(\\frac{1}{2}\\) horizontally.",
        "workingOut": "\\text{horizontal dilation, factor } \\tfrac{1}{2}"
      },
      {
        "explanation": "Identify the horizontal translation from \\(-\\frac{1}{4}\\) inside the bracket.",
        "workingOut": "\\text{horizontal translation } \\tfrac{1}{4} \\text{ unit right}"
      },
      {
        "explanation": "State the order: the dilation (closest to \\(x\\)) is applied first, then the translation.",
        "workingOut": "\\text{dilate } \\tfrac{1}{2} \\text{ THEN translate right } \\tfrac{1}{4}"
      }
    ]
  },
  {
    "id": "fortst2020-q10g",
    "topicId": "y12a-2H",
    "c": "2H",
    "t": "Combinations of transformations",
    "source": "Fort Street 2020 Trial Q10(g)",
    "type": "teacher_review",
    "difficulty": "hard",
    "q": "Sketch the graph of $y = f\\!\\left(2\\left(x - \\dfrac{1}{4}\\right)\\right)$, showing the coordinates of $x$-intercepts, stationary points and inflection points.",
    "a": "The graph of part (e) dilated horizontally by $\\frac{1}{2}$ and shifted $\\frac{1}{4}$ right: $x$-intercepts $\\left(-\\frac{3}{4},0\\right)$ and $\\left(\\frac{5}{4},0\\right)$, minimum $\\left(-\\frac{1}{4},-27\\right)$, inflections $\\left(\\frac{1}{4},-16\\right)$ and $\\left(\\frac{5}{4},0\\right)$.",
    "opts": [],
    "h": "Each feature point $(x_0, y_0)$ maps to $\\left(\\frac{x_0}{2} + \\frac{1}{4}, y_0\\right)$ — halve the $x$-coordinate then add $\\frac{1}{4}$.",
    "s": "Transform each key point by $x \\mapsto \\frac{x}{2} + \\frac{1}{4}$ (the $y$-values are unchanged): $(-2,0)\\to(-\\frac{3}{4},0)$; $(2,0)\\to(\\frac{5}{4},0)$; $(-1,-27)\\to(-\\frac{1}{4},-27)$; $(0,-16)\\to(\\frac{1}{4},-16)$; the horizontal inflexion stays at $(\\frac{5}{4},0)$.",
    "solutionSteps": [
      {
        "explanation": "Apply the mapping \\(x \\mapsto \\frac{x}{2} + \\frac{1}{4}\\) to each feature (dilation by \\(\\frac{1}{2}\\) then shift right \\(\\frac{1}{4}\\)); \\(y\\)-values are unchanged.",
        "workingOut": "(x_0, y_0) \\mapsto \\left(\\tfrac{x_0}{2} + \\tfrac{1}{4}, \\; y_0\\right)"
      },
      {
        "explanation": "Transform the \\(x\\)-intercepts.",
        "workingOut": "(-2,0)\\to(-\\tfrac{3}{4},0); \\quad (2,0)\\to(\\tfrac{5}{4},0)"
      },
      {
        "explanation": "Transform the minimum and the inflection at the origin region.",
        "workingOut": "(-1,-27)\\to(-\\tfrac{1}{4},-27); \\quad (0,-16)\\to(\\tfrac{1}{4},-16)"
      },
      {
        "explanation": "Sketch the transformed quartic through the new key points.",
        "workingOut": "",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 340,
            "boundingbox": [
              -2,
              12,
              2.4,
              -32
            ],
            "boardOptions": {
              "keepaspectratio": false
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-2,0],[2.4,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-32],[0,12]], {strokeColor:'black'});\nboard.create('functiongraph', [function(x){ var u = 2*(x - 0.25); return (u+2)*Math.pow(u-2,3); }, -1.08, 1.55], {strokeColor:'#15803d',strokeWidth:2});\nboard.create('point', [-0.75,0], {name:'(-3/4, 0)', size:2.5, color:'red', fixed:true, label:{offset:[-16,12]}});\nboard.create('point', [1.25,0], {name:'(5/4, 0)', size:2.5, color:'red', fixed:true, label:{offset:[6,12]}});\nboard.create('point', [0.25,-16], {name:'(1/4, -16)', size:2.5, color:'red', fixed:true, label:{offset:[8,-2]}});\nboard.create('point', [-0.25,-27], {name:'(-1/4, -27)', size:2.5, color:'red', fixed:true, label:{offset:[6,-10]}});\nboard.create('text', [2.1, 1.2, 'x'], {fontSize:13});\nboard.create('text', [0.3, 11, 'y'], {fontSize:13});\nboard.unsuspendUpdate();"
          }
        }
      }
    ]
  },
  {
    "id": "fortst2020-q11a",
    "topicId": "y12a-1C",
    "c": "1C",
    "t": "Geometric sequences",
    "source": "Fort Street 2020 Trial Q11(a)",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "Tom planted a silky oak ($80$ cm tall). In the first year it grew $50$ cm, and each year's growth is $90\\%$ of the previous year's. What was the total growth of the silky oak after $3$ years?",
    "a": "$135.5$ cm",
    "opts": [],
    "h": "The yearly growths form a GP: $50, 50(0.9), 50(0.9)^2$. Add the first three terms.",
    "s": "Growths: $50 + 50(0.9) + 50(0.9)^2 = 50 + 45 + 40.5 = 135.5$ cm.",
    "solutionSteps": [
      {
        "explanation": "The yearly growths form a geometric sequence with first term \\(50\\) and ratio \\(0.9\\).",
        "workingOut": "50, \\; 50(0.9), \\; 50(0.9)^2"
      },
      {
        "explanation": "Add the growths for the first three years.",
        "workingOut": "50 + 45 + 40.5"
      },
      {
        "explanation": "Total growth after \\(3\\) years.",
        "workingOut": "= 135.5 \\text{ cm}"
      }
    ]
  },
  {
    "id": "fortst2020-q11b",
    "topicId": "y12a-1H",
    "c": "1H",
    "t": "The limiting sum of a geometric series",
    "source": "Fort Street 2020 Trial Q11(b)",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "Assuming the silky oak ($80$ cm at planting, growths $50, 50(0.9), dots$) maintains this growth pattern, explain why the tree will never reach a height of $6$ metres.",
    "a": "The limiting growth is $500$ cm, so the maximum height is $80 + 500 = 580$ cm $< 600$ cm.",
    "opts": [],
    "h": "Find the limiting sum of the growth GP, then add the initial height.",
    "s": "The growths form a GP with $|r| = 0.9 < 1$, so the limiting sum is $S_\\infty = \\frac{50}{1 - 0.9} = 500$ cm. Adding the initial height, the maximum possible height is $80 + 500 = 580$ cm, which is less than $600$ cm. Hence it never reaches $6$ m.",
    "solutionSteps": [
      {
        "explanation": "Since \\(|r| = 0.9 < 1\\), the total growth has a finite limiting sum.",
        "workingOut": "S_\\infty = \\frac{a}{1 - r} = \\frac{50}{1 - 0.9}"
      },
      {
        "explanation": "Evaluate the limiting growth.",
        "workingOut": "S_\\infty = 500 \\text{ cm}"
      },
      {
        "explanation": "Add the initial height of \\(80\\) cm to find the maximum possible height.",
        "workingOut": "80 + 500 = 580 \\text{ cm}"
      },
      {
        "explanation": "Compare with \\(6\\) m \\(= 600\\) cm.",
        "workingOut": "580 < 600 \\Rightarrow \\text{never reaches } 6\\text{ m}"
      }
    ]
  },
  {
    "id": "fortst2020-q11c",
    "topicId": "y12a-1G",
    "c": "1G",
    "t": "Summing a geometric series",
    "source": "Fort Street 2020 Trial Q11(c)",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "In which year will the silky oak ($80$ cm at planting, growths $50, 50(0.9), dots$) reach a height of $5$ metres?",
    "a": "During the $18^{\\text{th}}$ year",
    "opts": [],
    "h": "It needs to grow $500 - 80 = 420$ cm. Set $S_n = 420$ using the GP sum formula and solve for $n$.",
    "s": "To reach $500$ cm it must grow $420$ cm. $S_n = \\frac{50(1 - 0.9^n)}{1 - 0.9} = 420 \\Rightarrow 1 - 0.9^n = 0.84 \\Rightarrow 0.9^n = 0.16 \\Rightarrow n = \\frac{\\ln 0.16}{\\ln 0.9} \\approx 17.39$, so it reaches $5$ m during the $18^{\\text{th}}$ year.",
    "solutionSteps": [
      {
        "explanation": "A height of \\(5\\) m \\(= 500\\) cm requires total growth of \\(500 - 80 = 420\\) cm.",
        "workingOut": "\\text{growth needed} = 420 \\text{ cm}"
      },
      {
        "explanation": "Set the GP sum equal to \\(420\\).",
        "workingOut": "\\frac{50(1 - 0.9^n)}{1 - 0.9} = 420"
      },
      {
        "explanation": "Simplify.",
        "workingOut": "500(1 - 0.9^n) = 420 \\Rightarrow 0.9^n = 0.16"
      },
      {
        "explanation": "Take logarithms and solve for \\(n\\).",
        "workingOut": "n = \\frac{\\ln 0.16}{\\ln 0.9} \\approx 17.39"
      },
      {
        "explanation": "Since \\(17 < n < 18\\), the height is reached during the \\(18^{\\text{th}}\\) year.",
        "workingOut": "\\text{18th year}"
      }
    ]
  },
  {
    "id": "fortst2020-q12a",
    "topicId": "y11a-8G",
    "c": "8G",
    "t": "Applications of exponential and logarithmic functions",
    "source": "Fort Street 2020 Trial Q12(a)",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "A chemical concentration is $C = C_0 e^{-kt}$ (in kL/ha, $t$ in years). It is $6$ kL/ha at $t = 0$ and $2.4$ kL/ha at $t = 1$. Show that $C_0 = 6$ and $k = -\\ln\\!\\left(\\dfrac{2}{5}\\right)$.",
    "a": "$C_0 = 6$ and $k = -\\ln\\!\\left(\\dfrac{2}{5}\\right)$",
    "opts": [],
    "h": "Substitute $t = 0$ to find $C_0$, then $t = 1$ to find $k$.",
    "s": "At $t = 0$: $C = C_0 e^0 = C_0 = 6$. At $t = 1$: $2.4 = 6e^{-k}$, so $e^{-k} = 0.4 = \\frac{2}{5}$, giving $-k = \\ln\\frac{2}{5}$, i.e. $k = -\\ln\\frac{2}{5}$.",
    "solutionSteps": [
      {
        "explanation": "Substitute \\(t = 0\\) into \\(C = C_0 e^{-kt}\\), using \\(e^0 = 1\\).",
        "workingOut": "C = C_0 e^{0} = C_0 = 6"
      },
      {
        "explanation": "Substitute \\(t = 1\\) and \\(C = 2.4\\).",
        "workingOut": "2.4 = 6e^{-k}"
      },
      {
        "explanation": "Solve for \\(e^{-k}\\).",
        "workingOut": "e^{-k} = \\frac{2.4}{6} = 0.4 = \\frac{2}{5}"
      },
      {
        "explanation": "Take natural logarithms to isolate \\(k\\).",
        "workingOut": "-k = \\ln\\tfrac{2}{5} \\Rightarrow k = -\\ln\\tfrac{2}{5}"
      }
    ]
  },
  {
    "id": "fortst2020-q12b",
    "topicId": "y11a-8E",
    "c": "8E",
    "t": "Equations involving logarithms and indices",
    "source": "Fort Street 2020 Trial Q12(b)",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "The paddock is safe to use once the concentration falls below $0.2$ kL/ha, where $C = 6e^{-kt}$ and $k = -\\ln\\!\\left(\\dfrac{2}{5}\\right)$. How long, to the nearest month, must the farmer wait?",
    "a": "$\\approx 3$ years $9$ months",
    "opts": [],
    "h": "Set $C = 0.2$, solve for $t$ using $t = \\dfrac{\\ln(1/30)}{\\ln(2/5)}$.",
    "s": "Set $0.2 = 6e^{-kt}$, so $e^{-kt} = \\frac{1}{30}$, giving $-kt = \\ln\\frac{1}{30}$. Since $k = -\\ln\\frac{2}{5}$, $t = \\frac{\\ln(1/30)}{\\ln(2/5)} \\approx 3.712$ years $\\approx 3$ years $9$ months.",
    "solutionSteps": [
      {
        "explanation": "Set the concentration equal to the safe threshold.",
        "workingOut": "0.2 = 6e^{-kt}"
      },
      {
        "explanation": "Solve for the exponential.",
        "workingOut": "e^{-kt} = \\frac{0.2}{6} = \\frac{1}{30}"
      },
      {
        "explanation": "Take logarithms; using \\(k = -\\ln\\frac{2}{5}\\), so \\(-kt = \\ln\\frac{2}{5}\\cdot t\\).",
        "workingOut": "\\ln\\tfrac{1}{30} = \\ln\\tfrac{2}{5}\\cdot t \\Rightarrow t = \\frac{\\ln(1/30)}{\\ln(2/5)}"
      },
      {
        "explanation": "Evaluate.",
        "workingOut": "t \\approx 3.712 \\text{ years}"
      },
      {
        "explanation": "Convert the decimal part to months (\\(0.712 \\times 12 \\approx 9\\)).",
        "workingOut": "t \\approx 3 \\text{ years } 9 \\text{ months}"
      }
    ]
  },
  {
    "id": "fortst2020-q13a",
    "topicId": "y11a-12F",
    "c": "12F",
    "t": "Probability tree diagrams",
    "source": "Fort Street 2020 Trial Q13(a)",
    "type": "teacher_review",
    "difficulty": "medium",
    "q": "Alice and Raoul take turns throwing darts; first to hit the bullseye wins. Alice (first) hits with probability $\\frac{1}{30}$, Raoul with probability $\\frac{1}{40}$. Draw a tree diagram for the first four throws (Alice, Raoul, Alice, Raoul), noting the game stops once a bullseye is hit.",
    "a": "A tree where each throw branches into Win (W) and Lose (W'); the game continues only along the \"lose\" branches: Alice $\\frac{1}{30}$, Raoul $\\frac{1}{40}$, Alice $\\frac{1}{30}$, Raoul $\\frac{1}{40}$.",
    "opts": [],
    "h": "Each throw has two outcomes (W and W'); the chain of play continues only on W' (miss) branches.",
    "s": "Alice throws first: W with $\\frac{1}{30}$ (game ends) or W' with $\\frac{29}{30}$. Then Raoul: W with $\\frac{1}{40}$ or W' with $\\frac{39}{40}$. Then Alice again ($\\frac{1}{30}, frac{29}{30}$), then Raoul ($\\frac{1}{40}, frac{39}{40}$). The game only proceeds along the \"miss\" (W') branches.",
    "solutionSteps": [
      {
        "explanation": "Each throw is a two-branch event: a win (W, game ends) or a miss (W'). Play continues only along miss branches.",
        "workingOut": "P(\\text{W}) \\text{ or } P(\\text{W}')"
      },
      {
        "explanation": "List the win/miss probabilities for each thrower in order.",
        "workingOut": "A: \\tfrac{1}{30}, tfrac{29}{30}; \\;\\; R: \\tfrac{1}{40}, tfrac{39}{40}"
      },
      {
        "explanation": "Draw the tree as a chain of four throws along the \"miss\" branches.",
        "workingOut": "",
        "graphData": {
          "jsxGraph": {
            "width": 460,
            "height": 300,
            "boundingbox": [
              -1,
              3.5,
              8,
              -1.2
            ],
            "boardOptions": {
              "keepaspectratio": false
            },
            "script": "board.suspendUpdate();\nfunction node(x,y){ return board.create('point',[x,y],{name:'',size:1.5,color:'#475569',fixed:true}); }\nvar names=['Alice','Raoul','Alice','Raoul'];\nvar win=['1/30','1/40','1/30','1/40'];\nvar lose=['29/30','39/40','29/30','39/40'];\nvar xs=[0,1.8,3.6,5.4,7.2];\nfor(var i=0;i<4;i++){ var x0=xs[i], x1=xs[i+1]; node(x0,0); board.create('segment',[[x0,0],[x1,1.6]],{strokeColor:'#475569'}); board.create('segment',[[x0,0],[x1,0]],{strokeColor:'#475569'}); board.create('point',[x1,1.6],{name:'W',size:1.5,color:'#1d4ed8',fixed:true,label:{offset:[6,4]}}); board.create('text',[(x0+x1)/2-0.2, 1.05, win[i]],{fontSize:9}); board.create('text',[(x0+x1)/2-0.2, 0.15, lose[i]],{fontSize:9}); board.create('text',[x0-0.15, 2.9, names[i]],{fontSize:11}); }\nboard.create('point',[xs[4],0],{name:\"W'\",size:1.5,color:'#475569',fixed:true,label:{offset:[6,-2]}});\nboard.create('text',[-0.9, 0.6, \"W=win\"],{fontSize:9});\nboard.create('text',[-0.9, 0.1, \"W'=lose\"],{fontSize:9});\nboard.unsuspendUpdate();"
          }
        }
      }
    ]
  },
  {
    "id": "fortst2020-q13b",
    "topicId": "y11a-12E",
    "c": "12E",
    "t": "Multi-stage experiments",
    "source": "Fort Street 2020 Trial Q13(b)",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "Alice (first, $P = \\frac{1}{30}$) and Raoul ($P = \\frac{1}{40}$) throw in turn. What is the probability that Alice wins on her first or second throw?",
    "a": "$\\dfrac{259}{4000}$",
    "opts": [],
    "h": "Alice wins on her 1st throw with $\\frac{1}{30}$; on her 2nd throw both she and Raoul must first miss, then Alice hits.",
    "s": "$P = \\frac{1}{30} + \\left(\\frac{29}{30}\\right)\\left(\\frac{39}{40}\\right)\\left(\\frac{1}{30}\\right) = \\frac{1}{30} + \\frac{1131}{36000} = \\frac{259}{4000}$.",
    "solutionSteps": [
      {
        "explanation": "Alice wins on her first throw with probability \\(\\frac{1}{30}\\).",
        "workingOut": "P_1 = \\frac{1}{30}"
      },
      {
        "explanation": "For Alice to win on her second throw, she misses (\\(\\frac{29}{30}\\)), Raoul misses (\\(\\frac{39}{40}\\)), then Alice hits (\\(\\frac{1}{30}\\)).",
        "workingOut": "P_2 = \\frac{29}{30}\\cdot\\frac{39}{40}\\cdot\\frac{1}{30}"
      },
      {
        "explanation": "Add the two probabilities.",
        "workingOut": "P = \\frac{1}{30} + \\frac{1131}{36000}"
      },
      {
        "explanation": "Simplify to a single fraction.",
        "workingOut": "P = \\frac{259}{4000}"
      }
    ]
  },
  {
    "id": "fortst2020-q13c",
    "topicId": "y12a-1H",
    "c": "1H",
    "t": "The limiting sum of a geometric series",
    "source": "Fort Street 2020 Trial Q13(c)",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "Alice (first, $P = \\frac{1}{30}$) and Raoul ($P = \\frac{1}{40}$) throw in turn until someone hits. What is the probability that Alice eventually wins the game?",
    "a": "$\\dfrac{40}{69}$",
    "opts": [],
    "h": "Alice can win on throw $1, 2, 3, dots$; these form a geometric series with ratio $r = \\frac{29}{30}\\cdot\\frac{39}{40}$.",
    "s": "Alice wins with probability $\\frac{1}{30} + \\frac{29}{30}\\cdot\\frac{39}{40}\\cdot\\frac{1}{30} + \\cdots$, a geometric series with $a = \\frac{1}{30}$ and $r = \\frac{29}{30}\\cdot\\frac{39}{40} = \\frac{1131}{1200}$. $S_\\infty = \\frac{1/30}{1 - 1131/1200} = \\frac{1/30}{69/1200} = \\frac{40}{69}$.",
    "solutionSteps": [
      {
        "explanation": "Alice wins on her 1st, 2nd, 3rd, … throw; these probabilities form a geometric series.",
        "workingOut": "P = \\frac{1}{30} + \\frac{29}{30}\\cdot\\frac{39}{40}\\cdot\\frac{1}{30} + \\cdots"
      },
      {
        "explanation": "Identify the first term and common ratio (the ratio is \"both miss a full round\").",
        "workingOut": "a = \\frac{1}{30}, quad r = \\frac{29}{30}\\cdot\\frac{39}{40} = \\frac{1131}{1200}"
      },
      {
        "explanation": "Apply the limiting sum formula \\(S_\\infty = \\frac{a}{1-r}\\).",
        "workingOut": "S_\\infty = \\frac{1/30}{1 - \\frac{1131}{1200}} = \\frac{1/30}{\\frac{69}{1200}}"
      },
      {
        "explanation": "Simplify.",
        "workingOut": "S_\\infty = \\frac{1}{30}\\cdot\\frac{1200}{69} = \\frac{40}{69}"
      }
    ]
  },
  {
    "id": "fortst2020-q14a",
    "topicId": "y11a-8E",
    "c": "8E",
    "t": "Equations involving logarithms and indices",
    "source": "Fort Street 2020 Trial Q14(a)",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "The diagram shows $y = 4e^{-x}$ and $y = e^x - 3$. Show that the curves intersect when $e^{2x} - 3e^x - 4 = 0$.",
    "a": "$e^{2x} - 3e^x - 4 = 0$",
    "opts": [],
    "graphData": {
      "jsxGraph": {
        "width": 400,
        "height": 340,
        "boundingbox": [
          -2.5,
          6,
          2.5,
          -5
        ],
        "boardOptions": {
          "keepaspectratio": false
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-2.5,0],[2.5,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-5],[0,6]], {strokeColor:'black'});\nboard.create('functiongraph', [function(x){ return 4*Math.exp(-x); }, -2.5, 1.8], {strokeColor:'#1d4ed8',strokeWidth:2});\nboard.create('functiongraph', [function(x){ return Math.exp(x) - 3; }, -2.5, 2.2], {strokeColor:'#15803d',strokeWidth:2});\nboard.create('point', [Math.log(4), 1], {name:'P', size:2.5, color:'red', fixed:true, label:{offset:[8,6]}});\nboard.create('text', [-1.7, 4.3, 'y = 4e^{-x}'], {fontSize:11, strokeColor:'#1d4ed8'});\nboard.create('text', [1.1, 3.2, 'y = e^x - 3'], {fontSize:11, strokeColor:'#15803d'});\nboard.create('text', [2.2, 0.4, 'x'], {fontSize:13});\nboard.create('text', [0.25, 5.4, 'y'], {fontSize:13});\nboard.unsuspendUpdate();"
      }
    },
    "h": "Set the two expressions equal and multiply through by $e^x$.",
    "s": "At intersection $4e^{-x} = e^x - 3$. Multiply by $e^x$: $4 = e^{2x} - 3e^x$, so $e^{2x} - 3e^x - 4 = 0$.",
    "solutionSteps": [
      {
        "explanation": "At the points of intersection the two \\(y\\)-values are equal.",
        "workingOut": "4e^{-x} = e^x - 3"
      },
      {
        "explanation": "Multiply every term by \\(e^x\\) (recall \\(e^{-x}\\cdot e^x = 1\\) and \\(e^x\\cdot e^x = e^{2x}\\)).",
        "workingOut": "4 = e^{2x} - 3e^x"
      },
      {
        "explanation": "Rearrange into the required form.",
        "workingOut": "e^{2x} - 3e^x - 4 = 0"
      }
    ]
  },
  {
    "id": "fortst2020-q14b",
    "topicId": "y11a-8E",
    "c": "8E",
    "t": "Equations involving logarithms and indices",
    "source": "Fort Street 2020 Trial Q14(b)",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "Hence show that the $x$-coordinate of the point $P$ is $x = \\ln 4$ (using $e^{2x} - 3e^x - 4 = 0$).",
    "a": "$x = \\ln 4$",
    "opts": [],
    "h": "Let $u = e^x$ to get a quadratic; reject the negative root since $e^x > 0$.",
    "s": "Let $u = e^x$: $u^2 - 3u - 4 = 0 \\Rightarrow (u-4)(u+1) = 0$, so $u = 4$ or $u = -1$. Since $e^x > 0$, $e^x = 4$, giving $x = \\ln 4$.",
    "solutionSteps": [
      {
        "explanation": "Substitute \\(u = e^x\\) to turn the equation into a quadratic.",
        "workingOut": "u^2 - 3u - 4 = 0"
      },
      {
        "explanation": "Factorise.",
        "workingOut": "(u - 4)(u + 1) = 0 \\Rightarrow u = 4 \\text{ or } u = -1"
      },
      {
        "explanation": "Reject \\(u = -1\\) because \\(e^x > 0\\) for all \\(x\\).",
        "workingOut": "e^x = 4 \\quad (e^x \\neq -1)"
      },
      {
        "explanation": "Take natural logarithms.",
        "workingOut": "x = \\ln 4"
      }
    ]
  },
  {
    "id": "fortst2020-q14c",
    "topicId": "y12a-5E",
    "c": "5E",
    "t": "Applications of integration of e^x",
    "source": "Fort Street 2020 Trial Q14(c)",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "Find the exact shaded area between the two curves $y = 4e^{-x}$ and $y = e^x - 3$, from $x = 0$ to $x = \\ln 4$.",
    "a": "$3\\ln 4 \\text{ units}^2$",
    "opts": [],
    "h": "Integrate (upper curve $-$ lower curve) $= (4e^{-x} - (e^x - 3))$ from $0$ to $\\ln 4$.",
    "s": "$A = \\int_0^{\\ln 4}(4e^{-x} - e^x + 3)\\,dx = [-4e^{-x} - e^x + 3x]_0^{\\ln 4} = (-4\\cdot\\frac{1}{4} - 4 + 3\\ln 4) - (-4 - 1 + 0) = (-1 - 4 + 3\\ln 4) + 5 = 3\\ln 4$.",
    "solutionSteps": [
      {
        "explanation": "Set up the area as the integral of the upper curve minus the lower curve over \\([0, ln 4]\\).",
        "workingOut": "A = \\int_0^{\\ln 4}\\big(4e^{-x} - (e^x - 3)\\big)\\,dx"
      },
      {
        "explanation": "Find the primitive term by term.",
        "workingOut": "= \\big[-4e^{-x} - e^x + 3x\\big]_0^{\\ln 4}"
      },
      {
        "explanation": "Substitute \\(x = \\ln 4\\), using \\(e^{-\\ln 4} = \\frac{1}{4}\\) and \\(e^{\\ln 4} = 4\\).",
        "workingOut": "= \\left(-4\\cdot\\tfrac{1}{4} - 4 + 3\\ln 4\\right) = (-1 - 4 + 3\\ln 4)"
      },
      {
        "explanation": "Substitute \\(x = 0\\) (\\(e^0 = 1\\)).",
        "workingOut": "- (-4 - 1 + 0) = +5"
      },
      {
        "explanation": "Combine to get the exact area.",
        "workingOut": "A = -5 + 3\\ln 4 + 5 = 3\\ln 4 \\text{ units}^2"
      }
    ]
  },
  {
    "id": "fortst2020-q15a",
    "topicId": "y12a-7B",
    "c": "7B",
    "t": "Velocity and acceleration as derivatives",
    "source": "Fort Street 2020 Trial Q15(a)",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "The diagram shows the velocity–time graph for a particle ($0 \\le t \\le 8$). State the times at which the acceleration is zero.",
    "a": "$t = 3$ and $t = 7$",
    "opts": [],
    "graphData": {
      "jsxGraph": {
        "width": 440,
        "height": 280,
        "boundingbox": [
          -1,
          1.6,
          9.5,
          -1.6
        ],
        "boardOptions": {
          "keepaspectratio": false
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-1,0],[9.5,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-1.6],[0,1.6]], {strokeColor:'black'});\nboard.create('functiongraph', [function(t){ return Math.sin(Math.PI*(t-1)/4); }, 0, 8.5], {strokeColor:'#1d4ed8',strokeWidth:2});\nfor(var t=1;t<=9;t++){ board.create('text',[t-0.1,-0.25,''+t],{fontSize:9}); }\nboard.create('text',[-0.4,1,'1'],{fontSize:9});board.create('text',[-0.5,-1,'-1'],{fontSize:9});\nboard.create('text', [9.1, 0.25, 't'], {fontSize:13});\nboard.create('text', [0.25, 1.45, 'v'], {fontSize:13});\nboard.unsuspendUpdate();"
      }
    },
    "h": "Acceleration is the gradient of the velocity–time graph; it is zero at the turning points (max/min of $v$).",
    "s": "Acceleration $a = \\frac{dv}{dt}$ is the gradient of the $v$–$t$ graph. The gradient is zero at the maximum ($t = 3$) and minimum ($t = 7$) of the curve.",
    "solutionSteps": [
      {
        "explanation": "Acceleration is the gradient (derivative) of the velocity–time graph.",
        "workingOut": "a = \\frac{dv}{dt}"
      },
      {
        "explanation": "The gradient is zero where the velocity curve has turning points — its maximum and minimum.",
        "workingOut": "t = 3 \\text{ (max)}, quad t = 7 \\text{ (min)}"
      }
    ]
  },
  {
    "id": "fortst2020-q15b",
    "topicId": "y12a-7B",
    "c": "7B",
    "t": "Velocity and acceleration as derivatives",
    "source": "Fort Street 2020 Trial Q15(b)",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "For the same velocity–time graph, state the times ($0 \\le t \\le 8$) at which the speed is increasing.",
    "a": "$1 < t < 3$ and $5 < t < 7$",
    "opts": [],
    "h": "Speed (the magnitude of velocity) increases when $v$ and $a$ have the same sign.",
    "s": "Speed increases when velocity and acceleration have the same sign. On $1 < t < 3$, $v > 0$ and $a > 0$; on $5 < t < 7$, $v < 0$ and $a < 0$. In both intervals the speed is increasing.",
    "solutionSteps": [
      {
        "explanation": "Speed is \\(|v|\\). It increases when the particle accelerates in its direction of motion — i.e. when \\(v\\) and \\(a\\) share the same sign.",
        "workingOut": "\\text{speed} \\uparrow \\iff v, a \\text{ same sign}"
      },
      {
        "explanation": "On \\(1 < t < 3\\) the velocity is positive and rising (so \\(a > 0\\)) — same sign.",
        "workingOut": "1 < t < 3: \\; v > 0, \\; a > 0"
      },
      {
        "explanation": "On \\(5 < t < 7\\) the velocity is negative and becoming more negative (so \\(a < 0\\)) — same sign.",
        "workingOut": "5 < t < 7: \\; v < 0, \\; a < 0"
      }
    ]
  },
  {
    "id": "fortst2020-q16a",
    "topicId": "y12a-7B",
    "c": "7B",
    "t": "Velocity and acceleration as derivatives",
    "source": "Fort Street 2020 Trial Q16(a)",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "A particle has velocity $v = \\dfrac{2}{1+t} - t$ m/s ($t \\ge 0$). Find the acceleration of the particle when $t = 0$.",
    "a": "$-3 \\text{ m/s}^2$",
    "opts": [],
    "h": "Acceleration $a = \\dfrac{dv}{dt}$; differentiate $\\dfrac{2}{1+t} = 2(1+t)^{-1}$, then substitute $t = 0$.",
    "s": "$a = \\frac{dv}{dt} = -2(1+t)^{-2} - 1 = -\\frac{2}{(1+t)^2} - 1$. At $t = 0$: $a = -2 - 1 = -3 \\text{ m/s}^2$.",
    "solutionSteps": [
      {
        "explanation": "Write the velocity with a negative index and differentiate to get acceleration.",
        "workingOut": "v = 2(1+t)^{-1} - t \\Rightarrow a = -2(1+t)^{-2} - 1"
      },
      {
        "explanation": "Substitute \\(t = 0\\).",
        "workingOut": "a = -\\frac{2}{(1)^2} - 1 = -3 \\text{ m/s}^2"
      }
    ]
  },
  {
    "id": "fortst2020-q16b",
    "topicId": "y12a-7C",
    "c": "7C",
    "t": "Integrating with respect to time",
    "source": "Fort Street 2020 Trial Q16(b)",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "For $v = \\dfrac{2}{1+t} - t$, if the particle is initially at the origin, find the displacement $x$ as a function of $t$.",
    "a": "$x = 2\\ln(1+t) - \\dfrac{t^2}{2}$",
    "opts": [],
    "h": "Integrate $v$ with respect to $t$, using $\\int\\frac{2}{1+t}dt = 2\\ln(1+t)$, then apply $x = 0$ at $t = 0$.",
    "s": "$x = \\int\\left(\\frac{2}{1+t} - t\\right)dt = 2\\ln(1+t) - \\frac{t^2}{2} + C$. At $t = 0$: $0 = 2\\ln 1 - 0 + C \\Rightarrow C = 0$. So $x = 2\\ln(1+t) - \\frac{t^2}{2}$.",
    "solutionSteps": [
      {
        "explanation": "Integrate the velocity to get displacement.",
        "workingOut": "x = \\int\\left(\\frac{2}{1+t} - t\\right)dt = 2\\ln(1+t) - \\frac{t^2}{2} + C"
      },
      {
        "explanation": "Apply the initial condition \\(x = 0\\) at \\(t = 0\\) (note \\(\\ln 1 = 0\\)).",
        "workingOut": "0 = 2\\ln 1 - 0 + C \\Rightarrow C = 0"
      },
      {
        "explanation": "State the displacement function.",
        "workingOut": "x = 2\\ln(1+t) - \\frac{t^2}{2}"
      }
    ]
  },
  {
    "id": "fortst2020-q16c",
    "topicId": "y12a-7B",
    "c": "7B",
    "t": "Velocity and acceleration as derivatives",
    "source": "Fort Street 2020 Trial Q16(c)",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "For $v = \\dfrac{2}{1+t} - t$ ($t \\ge 0$), when is the particle stationary?",
    "a": "$t = 1$ second",
    "opts": [],
    "h": "Stationary when $v = 0$; multiply through by $(1+t)$ to form a quadratic and reject negative $t$.",
    "s": "Set $v = 0$: $\\frac{2}{1+t} = t \\Rightarrow 2 = t(1+t) \\Rightarrow t^2 + t - 2 = 0 \\Rightarrow (t+2)(t-1) = 0$. Since $t \\ge 0$, $t = 1$.",
    "solutionSteps": [
      {
        "explanation": "The particle is stationary when velocity is zero.",
        "workingOut": "\\frac{2}{1+t} - t = 0"
      },
      {
        "explanation": "Multiply through by \\((1+t)\\) to clear the fraction.",
        "workingOut": "2 - t(1+t) = 0 \\Rightarrow t^2 + t - 2 = 0"
      },
      {
        "explanation": "Factorise.",
        "workingOut": "(t + 2)(t - 1) = 0"
      },
      {
        "explanation": "Reject the negative time.",
        "workingOut": "t = 1 \\text{ second} \\quad (t \\ge 0)"
      }
    ]
  },
  {
    "id": "fortst2020-q16d",
    "topicId": "y12a-7C",
    "c": "7C",
    "t": "Integrating with respect to time",
    "source": "Fort Street 2020 Trial Q16(d)",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "For $x = 2\\ln(1+t) - \\dfrac{t^2}{2}$ (stationary at $t = 1$), how far does the particle travel in the first $2$ seconds? Give your answer to three significant figures.",
    "a": "$\\approx 1.58$ m",
    "opts": [],
    "h": "The particle changes direction at $t = 1$. Find $x(0), x(1), x(2)$ and add the distances of each leg.",
    "s": "The particle is stationary (turns around) at $t = 1$. $x(0) = 0$, $x(1) = 2\\ln 2 - 0.5 \\approx 0.886$, $x(2) = 2\\ln 3 - 2 \\approx 0.197$. Distance $= |x(1) - x(0)| + |x(2) - x(1)| = 0.886 + (0.886 - 0.197) \\approx 1.58$ m.",
    "solutionSteps": [
      {
        "explanation": "The particle reverses direction at \\(t = 1\\) (from part c), so compute displacements at \\(t = 0, 1, 2\\) separately.",
        "workingOut": "x(0) = 0"
      },
      {
        "explanation": "Find the displacement at \\(t = 1\\).",
        "workingOut": "x(1) = 2\\ln 2 - \\tfrac{1}{2} \\approx 0.886"
      },
      {
        "explanation": "Find the displacement at \\(t = 2\\).",
        "workingOut": "x(2) = 2\\ln 3 - 2 \\approx 0.197"
      },
      {
        "explanation": "Add the distance of each leg (out to \\(t=1\\), then back).",
        "workingOut": "d = 0.886 + (0.886 - 0.197)"
      },
      {
        "explanation": "Total distance to three significant figures.",
        "workingOut": "d \\approx 1.58 \\text{ m}"
      }
    ]
  },
  {
    "id": "fortst2020-q17a",
    "topicId": "y11a-3A",
    "c": "3A",
    "t": "Functions and function notation",
    "source": "Fort Street 2020 Trial Q17(a)",
    "type": "short_answer",
    "difficulty": "easy",
    "q": "A tank holds water $V = 3600\\left(1 - \\dfrac{t}{60}\\right)^2$ litres ($0 \\le t \\le 60$). What volume remains after $10$ minutes?",
    "a": "$2500$ litres",
    "opts": [],
    "h": "Substitute $t = 10$ into the model.",
    "s": "$V = 3600\\left(1 - \\frac{10}{60}\\right)^2 = 3600\\left(\\frac{5}{6}\\right)^2 = 3600\\cdot\\frac{25}{36} = 2500$ litres.",
    "solutionSteps": [
      {
        "explanation": "Substitute \\(t = 10\\) into the volume model.",
        "workingOut": "V = 3600\\left(1 - \\frac{10}{60}\\right)^2"
      },
      {
        "explanation": "Simplify the bracket.",
        "workingOut": "= 3600\\left(\\frac{5}{6}\\right)^2"
      },
      {
        "explanation": "Evaluate.",
        "workingOut": "= 3600\\cdot\\frac{25}{36} = 2500 \\text{ litres}"
      }
    ]
  },
  {
    "id": "fortst2020-q17b",
    "topicId": "y11a-1D",
    "c": "1D",
    "t": "Solving quadratic equations",
    "source": "Fort Street 2020 Trial Q17(b)",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "For $V = 3600\\left(1 - \\dfrac{t}{60}\\right)^2$ ($0 \\le t \\le 60$), how long will it take for the tank to become half full (to the nearest minute)?",
    "a": "$\\approx 18$ minutes ($t \\approx 17.6$)",
    "opts": [],
    "h": "Set $V = 1800$, take square roots (both signs), and reject the root outside $0 \\le t \\le 60$.",
    "s": "Half full is $1800$ L: $3600\\left(1 - \\frac{t}{60}\\right)^2 = 1800 \\Rightarrow \\left(1 - \\frac{t}{60}\\right)^2 = \\frac{1}{2} \\Rightarrow 1 - \\frac{t}{60} = \\pm\\frac{1}{\\sqrt{2}}$. So $t = 60\\left(1 - \\frac{1}{\\sqrt2}\\right) \\approx 17.6$ or $t = 60\\left(1 + \\frac{1}{\\sqrt2}\\right) \\approx 102.4$ (rejected, $>60$). Hence $t \\approx 18$ minutes.",
    "solutionSteps": [
      {
        "explanation": "Set the volume to half of \\(3600\\), i.e. \\(1800\\) L.",
        "workingOut": "3600\\left(1 - \\frac{t}{60}\\right)^2 = 1800"
      },
      {
        "explanation": "Divide and take the square root of both sides (keep both signs).",
        "workingOut": "\\left(1 - \\frac{t}{60}\\right)^2 = \\frac{1}{2} \\Rightarrow 1 - \\frac{t}{60} = \\pm\\frac{1}{\\sqrt2}"
      },
      {
        "explanation": "Solve for \\(t\\) in both cases.",
        "workingOut": "t = 60\\left(1 - \\tfrac{1}{\\sqrt2}\\right) \\approx 17.6 \\;\\text{ or }\\; t = 60\\left(1 + \\tfrac{1}{\\sqrt2}\\right) \\approx 102.4"
      },
      {
        "explanation": "Reject \\(t \\approx 102.4\\) since \\(0 \\le t \\le 60\\), and round the valid root.",
        "workingOut": "t \\approx 17.6 \\approx 18 \\text{ minutes}"
      }
    ]
  },
  {
    "id": "fortst2020-q17c",
    "topicId": "y11a-9J",
    "c": "9J",
    "t": "Rates of change",
    "source": "Fort Street 2020 Trial Q17(c)",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "For $V = 3600\\left(1 - \\dfrac{t}{60}\\right)^2$, at what rate does the model predict the water drains after $20$ minutes?",
    "a": "$80$ L/min (draining)",
    "opts": [],
    "h": "Differentiate $V$ using the chain rule, then substitute $t = 20$.",
    "s": "$\\frac{dV}{dt} = 7200\\left(1 - \\frac{t}{60}\\right)\\left(-\\frac{1}{60}\\right) = -120\\left(1 - \\frac{t}{60}\\right)$. At $t = 20$: $-120\\left(1 - \\frac{1}{3}\\right) = -120\\cdot\\frac{2}{3} = -80$. The water drains at $80$ L/min.",
    "solutionSteps": [
      {
        "explanation": "Differentiate \\(V\\) with respect to \\(t\\) using the chain rule.",
        "workingOut": "\\frac{dV}{dt} = 2\\cdot 3600\\left(1 - \\frac{t}{60}\\right)\\left(-\\frac{1}{60}\\right) = -120\\left(1 - \\frac{t}{60}\\right)"
      },
      {
        "explanation": "Substitute \\(t = 20\\).",
        "workingOut": "\\frac{dV}{dt} = -120\\left(1 - \\frac{20}{60}\\right) = -120\\cdot\\frac{2}{3}"
      },
      {
        "explanation": "Evaluate; the negative sign indicates draining.",
        "workingOut": "= -80 \\Rightarrow 80 \\text{ L/min draining}"
      }
    ]
  },
  {
    "id": "fortst2020-q17d",
    "topicId": "y11a-9J",
    "c": "9J",
    "t": "Rates of change",
    "source": "Fort Street 2020 Trial Q17(d)",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "For $V = 3600\\left(1 - \\dfrac{t}{60}\\right)^2$ ($0 \\le t \\le 60$), at what time does the model predict the water drains at its fastest rate?",
    "a": "At $t = 0$ (rate $120$ L/min)",
    "opts": [],
    "h": "The drain rate is $\\left|\\frac{dV}{dt}\\right| = 120\\left(1 - \\frac{t}{60}\\right)$, which is largest at the smallest $t$.",
    "s": "The magnitude of the rate is $\\left|\\frac{dV}{dt}\\right| = 120\\left(1 - \\frac{t}{60}\\right)$, a decreasing function of $t$ on $[0, 60]$. It is greatest at $t = 0$, where the rate is $120$ L/min. (Note: setting $\\frac{dV}{dt} = 0$ would give the slowest rate, at $t = 60$.)",
    "solutionSteps": [
      {
        "explanation": "Write the magnitude of the drain rate from part (c).",
        "workingOut": "\\left|\\frac{dV}{dt}\\right| = 120\\left(1 - \\frac{t}{60}\\right)"
      },
      {
        "explanation": "This expression decreases as \\(t\\) increases, so it is largest at the start of the interval.",
        "workingOut": "\\text{largest at } t = 0"
      },
      {
        "explanation": "Evaluate the fastest rate.",
        "workingOut": "\\left.\\frac{dV}{dt}\\right|_{t=0} = -120 \\Rightarrow 120 \\text{ L/min}"
      }
    ]
  },
  {
    "id": "fortst2020-q18a",
    "topicId": "y11a-11D",
    "c": "11D",
    "t": "Trigonometric graphs in radians",
    "source": "Fort Street 2020 Trial Q18(a)",
    "type": "short_answer",
    "difficulty": "easy",
    "q": "The average monthly temperature is $T = 7\\sin(nx + 1.5) + 13$. According to the model, what are the maximum and minimum average monthly temperatures?",
    "a": "Maximum $20°$, minimum $6°$",
    "opts": [],
    "h": "Since $-1 \\le \\sin(\\cdot) \\le 1$, the maximum uses $\\sin = 1$ and the minimum uses $\\sin = -1$.",
    "s": "The sine term ranges from $-1$ to $1$. Maximum: $T = 7(1) + 13 = 20°$. Minimum: $T = 7(-1) + 13 = 6°$.",
    "solutionSteps": [
      {
        "explanation": "The amplitude is \\(7\\) and the vertical shift is \\(13\\), and sine ranges between \\(-1\\) and \\(1\\).",
        "workingOut": "-1 \\le \\sin(nx + 1.5) \\le 1"
      },
      {
        "explanation": "Maximum temperature when \\(\\sin = 1\\).",
        "workingOut": "T_{\\max} = 7(1) + 13 = 20°"
      },
      {
        "explanation": "Minimum temperature when \\(\\sin = -1\\).",
        "workingOut": "T_{\\min} = 7(-1) + 13 = 6°"
      }
    ]
  },
  {
    "id": "fortst2020-q18b",
    "topicId": "y11a-11D",
    "c": "11D",
    "t": "Trigonometric graphs in radians",
    "source": "Fort Street 2020 Trial Q18(b)",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "For $T = 7\\sin(nx + 1.5) + 13$, the period of the function is $12$. Determine the value of $n$ correct to $2$ decimal places.",
    "a": "$n = \\dfrac{\\pi}{6} \\approx 0.52$",
    "opts": [],
    "h": "The period of $\\sin(nx + \\dots)$ is $\\dfrac{2\\pi}{n}$. Set it equal to $12$.",
    "s": "Period $= \\frac{2\\pi}{n} = 12$, so $n = \\frac{2\\pi}{12} = \\frac{\\pi}{6} \\approx 0.52$.",
    "solutionSteps": [
      {
        "explanation": "The period of a sine function with coefficient \\(n\\) is \\(\\frac{2\\pi}{n}\\). Set it equal to \\(12\\).",
        "workingOut": "\\frac{2\\pi}{n} = 12"
      },
      {
        "explanation": "Solve for \\(n\\).",
        "workingOut": "n = \\frac{2\\pi}{12} = \\frac{\\pi}{6}"
      },
      {
        "explanation": "Evaluate to two decimal places.",
        "workingOut": "n \\approx 0.52"
      }
    ]
  },
  {
    "id": "fortst2020-q18c",
    "topicId": "y11a-11B",
    "c": "11B",
    "t": "Solving trigonometric equations",
    "source": "Fort Street 2020 Trial Q18(c)",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "For $T = 7\\sin\\!\\left(\\dfrac{\\pi}{6}x + 1.5\\right) + 13$ ($x =$ month number), which month has the lowest average monthly temperature?",
    "a": "June (month $6$)",
    "opts": [],
    "h": "The minimum occurs when $\\sin = -1$, i.e. when the argument equals $\\frac{3\\pi}{2}$.",
    "s": "The minimum occurs when $\\frac{\\pi}{6}x + 1.5 = \\frac{3\\pi}{2}$. Solving: $\\frac{\\pi}{6}x = \\frac{3\\pi}{2} - 1.5 \\Rightarrow x = \\frac{3\\pi/2 - 1.5}{\\pi/6} \\approx 6.1$. So month $6$ — June — has the lowest temperature.",
    "solutionSteps": [
      {
        "explanation": "The temperature is lowest when the sine equals \\(-1\\), i.e. its argument is \\(\\frac{3\\pi}{2}\\).",
        "workingOut": "\\frac{\\pi}{6}x + 1.5 = \\frac{3\\pi}{2}"
      },
      {
        "explanation": "Solve for \\(x\\).",
        "workingOut": "x = \\frac{\\frac{3\\pi}{2} - 1.5}{\\frac{\\pi}{6}} \\approx 6.1"
      },
      {
        "explanation": "Round to the nearest month.",
        "workingOut": "x \\approx 6 \\Rightarrow \\text{June}"
      }
    ]
  },
  {
    "id": "fortst2020-q18d",
    "topicId": "y12a-2I",
    "c": "2I",
    "t": "Trigonometric graphs",
    "source": "Fort Street 2020 Trial Q18(d)",
    "type": "teacher_review",
    "difficulty": "medium",
    "q": "Graph the function $T = 7\\sin\\!\\left(\\dfrac{\\pi}{6}x + 1.5\\right) + 13$ for $1 \\le x \\le 12$.",
    "a": "A sine curve over one period, starting near $(1, 20)$, falling to a minimum $\\approx (6.1, 6)$, and rising back to $\\approx (12, 20)$.",
    "opts": [],
    "h": "The curve has amplitude $7$, centre line $T = 13$, period $12$, max $\\approx 20$ and min $\\approx 6$ near month $6$.",
    "s": "Over $1 \\le x \\le 12$ (one full period), the curve starts high near $(1, 20)$, decreases to the minimum $\\approx (6, 6)$, then increases back to $\\approx (12, 20)$. The centre line is $T = 13$.",
    "solutionSteps": [
      {
        "explanation": "Identify the key values: amplitude \\(7\\), centre \\(T = 13\\), max \\(20\\), min \\(6\\), period \\(12\\).",
        "workingOut": "T \\in [6, 20], text{ period } 12"
      },
      {
        "explanation": "Locate the minimum at month \\(\\approx 6\\) (June) and the endpoints near the maximum.",
        "workingOut": "(1, approx 20), (6, 6), (12, approx 20)"
      },
      {
        "explanation": "Sketch the sine curve over the domain \\(1 \\le x \\le 12\\).",
        "workingOut": "",
        "graphData": {
          "jsxGraph": {
            "width": 440,
            "height": 300,
            "boundingbox": [
              -1,
              23,
              14,
              -2
            ],
            "boardOptions": {
              "keepaspectratio": false
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-1,0],[14,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-2],[0,23]], {strokeColor:'black'});\nboard.create('functiongraph', [function(x){ return 7*Math.sin(Math.PI/6*x + 1.5) + 13; }, 1, 12], {strokeColor:'#1d4ed8',strokeWidth:2});\nboard.create('point', [1, 7*Math.sin(Math.PI/6+1.5)+13], {name:'(1, 20)', size:2.5, color:'red', fixed:true, label:{offset:[-6,12]}});\nboard.create('point', [6.1, 6], {name:'(6.1, 6)', size:2.5, color:'red', fixed:true, label:{offset:[6,-10]}});\nboard.create('point', [12, 7*Math.sin(Math.PI/6*12+1.5)+13], {name:'(12, 20)', size:2.5, color:'red', fixed:true, label:{offset:[6,10]}});\nfor(var m=2;m<=12;m+=2){ board.create('text',[m-0.15,-0.9,''+m],{fontSize:9}); }\nboard.create('text', [13.6, 0.6, 'x'], {fontSize:13});\nboard.create('text', [0.3, 22, 'T'], {fontSize:13});\nboard.unsuspendUpdate();"
          }
        }
      }
    ]
  },
  {
    "id": "fortst2020-q19a",
    "topicId": "y11a-6A",
    "c": "6A",
    "t": "Trigonometry with right-angled triangles",
    "source": "Fort Street 2020 Trial Q19(a)",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "A boy travels home $H$ to school $S$ ($6$ km apart) via $H \\to B \\to C \\to S$: walks $HB$, skates $BC$, walks $CS$. The canal is $1$ km below the $HS$ line; $\\angle AHB = \\angle DSC = \\theta$. Walking speed $4$ km/h, skating $12$ km/h. Show the time is $T = \\dfrac{1}{2\\cos\\theta} + \\dfrac{1}{2} - \\dfrac{\\tan\\theta}{6}$.",
    "a": "$T = \\dfrac{1}{2\\cos\\theta} + \\dfrac{1}{2} - \\dfrac{\\tan\\theta}{6}$",
    "opts": [],
    "graphData": {
      "jsxGraph": {
        "width": 460,
        "height": 260,
        "boundingbox": [
          -1,
          4,
          8,
          -1.8
        ],
        "boardOptions": {
          "keepaspectratio": false
        },
        "script": "board.suspendUpdate();\nvar H=[0,3],S=[6,3],A=[0,0],B=[1.2,0],C=[4.8,0],D=[6,0];\nboard.create('polygon',[[ -0.3,0],[6.3,0],[6.3,-0.6],[-0.3,-0.6]],{fillColor:'#e2e8f0',fillOpacity:0.6,borders:{visible:false},vertices:{visible:false},fixed:true});\nboard.create('segment',[H,S],{strokeColor:'black'});\nboard.create('segment',[H,A],{strokeColor:'#475569',dash:2});\nboard.create('segment',[S,D],{strokeColor:'#475569',dash:2});\nboard.create('segment',[H,B],{strokeColor:'#1d4ed8',strokeWidth:2});\nboard.create('segment',[B,C],{strokeColor:'#15803d',strokeWidth:2});\nboard.create('segment',[C,S],{strokeColor:'#1d4ed8',strokeWidth:2});\nboard.create('text',[2.8,3.2,'6 km'],{fontSize:12});\nboard.create('text',[-0.8,1.5,'1km'],{fontSize:11});\nboard.create('text',[6.15,1.5,'1km'],{fontSize:11});\nboard.create('text',[0.35,2.5,'\\u03b8'],{fontSize:12});\nboard.create('text',[5.45,2.5,'\\u03b8'],{fontSize:12});\nboard.create('text',[2.9,-0.35,'CANAL'],{fontSize:10});\nboard.create('text',[-0.2,0.18,'A'],{fontSize:11});board.create('text',[1.2,0.2,'B'],{fontSize:11});board.create('text',[4.7,0.2,'C'],{fontSize:11});board.create('text',[6,0.2,'D'],{fontSize:11});\nboard.create('text',[-0.25,3.25,'H'],{fontSize:12});board.create('text',[6.05,3.25,'S'],{fontSize:12});\nboard.unsuspendUpdate();"
      }
    },
    "h": "In right triangle $AHB$, $HB = \\frac{1}{\\cos\\theta}$ and $AB = \\tan\\theta$. Distance walked $= 2HB$, skated $= 6 - 2\\tan\\theta$; time $= \\frac{\\text{distance}}{\\text{speed}}$.",
    "s": "In $\\triangle AHB$: $\\cos\\theta = \\frac{1}{HB} \\Rightarrow HB = \\frac{1}{\\cos\\theta}$ and $AB = \\tan\\theta$. By symmetry $CS = \\frac{1}{\\cos\\theta}$, $DC = \\tan\\theta$. Distance walked $= 2HB = \\frac{2}{\\cos\\theta}$, so time walked $= \\frac{2}{\\cos\\theta}\\div 4 = \\frac{1}{2\\cos\\theta}$. Distance skated $= BC = 6 - 2\\tan\\theta$, so time skated $= \\frac{6 - 2\\tan\\theta}{12} = \\frac{1}{2} - \\frac{\\tan\\theta}{6}$. Total $T = \\frac{1}{2\\cos\\theta} + \\frac{1}{2} - \\frac{\\tan\\theta}{6}$.",
    "solutionSteps": [
      {
        "explanation": "In right triangle \\(AHB\\) (vertical side \\(AH = 1\\) km, angle \\(\\theta\\) at \\(H\\)), use cosine and tangent to find the walked side \\(HB\\) and horizontal offset \\(AB\\).",
        "workingOut": "HB = \\frac{1}{\\cos\\theta}, quad AB = \\tan\\theta"
      },
      {
        "explanation": "By symmetry the other walk \\(CS\\) and offset \\(DC\\) are equal. Total distance walked is \\(2HB\\).",
        "workingOut": "\\text{walked} = 2HB = \\frac{2}{\\cos\\theta}"
      },
      {
        "explanation": "Time walked \\(= \\frac{\\text{distance}}{4}\\).",
        "workingOut": "\\text{time walked} = \\frac{2/\\cos\\theta}{4} = \\frac{1}{2\\cos\\theta}"
      },
      {
        "explanation": "The skated distance \\(BC\\) is the \\(6\\) km span minus the two horizontal offsets \\(2\\tan\\theta\\).",
        "workingOut": "BC = 6 - 2\\tan\\theta"
      },
      {
        "explanation": "Time skated \\(= \\frac{BC}{12}\\).",
        "workingOut": "\\text{time skated} = \\frac{6 - 2\\tan\\theta}{12} = \\frac{1}{2} - \\frac{\\tan\\theta}{6}"
      },
      {
        "explanation": "Add the walking and skating times.",
        "workingOut": "T = \\frac{1}{2\\cos\\theta} + \\frac{1}{2} - \\frac{\\tan\\theta}{6}"
      }
    ]
  },
  {
    "id": "fortst2020-q19b",
    "topicId": "y12a-6C",
    "c": "6C",
    "t": "Applications of differentiation of trigonometric functions",
    "source": "Fort Street 2020 Trial Q19(b)",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "For $T = \\dfrac{1}{2\\cos\\theta} + \\dfrac{1}{2} - \\dfrac{\\tan\\theta}{6}$, find, to the nearest minute, the value of $\\theta$ that minimises the travel time.",
    "a": "$\\theta \\approx 19°28'$",
    "opts": [],
    "h": "Differentiate $T$ with respect to $\\theta$, set $\\frac{dT}{d\\theta} = 0$, and solve $\\sin\\theta = \\frac{1}{3}$.",
    "s": "$\\frac{dT}{d\\theta} = \\frac{\\sin\\theta}{2\\cos^2\\theta} - \\frac{\\sec^2\\theta}{6} = \\frac{1}{\\cos^2\\theta}\\left(\\frac{\\sin\\theta}{2} - \\frac{1}{6}\\right)$. Setting this to zero: $\\frac{\\sin\\theta}{2} = \\frac{1}{6} \\Rightarrow \\sin\\theta = \\frac{1}{3} \\Rightarrow \\theta \\approx 19°28'$. A table of slopes confirms a minimum.",
    "solutionSteps": [
      {
        "explanation": "Differentiate \\(T\\). Write \\(\\frac{1}{2\\cos\\theta} = \\frac{1}{2}(\\cos\\theta)^{-1}\\) and \\(\\frac{\\tan\\theta}{6}\\), applying the chain rule.",
        "workingOut": "\\frac{dT}{d\\theta} = \\frac{\\sin\\theta}{2\\cos^2\\theta} - \\frac{\\sec^2\\theta}{6}"
      },
      {
        "explanation": "Factor out \\(\\frac{1}{\\cos^2\\theta}\\) (which is always positive).",
        "workingOut": "= \\frac{1}{\\cos^2\\theta}\\left(\\frac{\\sin\\theta}{2} - \\frac{1}{6}\\right)"
      },
      {
        "explanation": "Set \\(\\frac{dT}{d\\theta} = 0\\); since \\(\\frac{1}{\\cos^2\\theta} \\neq 0\\), the bracket must be zero.",
        "workingOut": "\\frac{\\sin\\theta}{2} - \\frac{1}{6} = 0 \\Rightarrow \\sin\\theta = \\frac{1}{3}"
      },
      {
        "explanation": "Solve for \\(\\theta\\).",
        "workingOut": "\\theta = \\sin^{-1}\\tfrac{1}{3} \\approx 19°28'"
      },
      {
        "explanation": "Confirm it is a minimum using a table of slopes (gradient changes from negative to positive).",
        "workingOut": "\\text{slope: } - \\;0\\; + \\Rightarrow \\text{minimum at } \\theta \\approx 19°28'"
      }
    ]
  }
];
