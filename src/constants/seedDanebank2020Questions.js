export const DANEBANK_2020_QUESTIONS = [
  {
    "id": "dane2020-mc1",
    "topicId": "y11a-7C",
    "c": "7C",
    "t": "Equations of lines",
    "source": "Danebank 2020 Trial Q1",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "What is the gradient of the line $\\dfrac{x}{3} + \\dfrac{y}{2} = 1$?",
    "a": "1",
    "opts": [
      "$-\\dfrac{3}{2}$",
      "$-\\dfrac{2}{3}$",
      "$\\dfrac{2}{3}$",
      "$\\dfrac{3}{2}$"
    ],
    "h": "Rearrange the equation into gradient–intercept form $y = mx + b$; the coefficient of $x$ is the gradient.",
    "s": "Make $y$ the subject: $\\frac{y}{2} = 1 - \\frac{x}{3}$, so $y = 2 - \\frac{2}{3}x$. The gradient is the coefficient of $x$, which is $-\\frac{2}{3}$.",
    "solutionSteps": [
      {
        "explanation": "To find the gradient, rearrange the equation into gradient–intercept form \\(y = mx + b\\), where \\(m\\) is the gradient. Start by isolating the \\(y\\) term.",
        "workingOut": "\\frac{y}{2} = 1 - \\frac{x}{3}"
      },
      {
        "explanation": "Multiply every term by \\(2\\) to make \\(y\\) the subject.",
        "workingOut": "y = 2 - \\frac{2}{3}x"
      },
      {
        "explanation": "Identify the gradient as the coefficient of \\(x\\) in this form.",
        "workingOut": "m = -\\frac{2}{3}"
      }
    ]
  },
  {
    "id": "dane2020-mc2",
    "topicId": "y11a-9E",
    "c": "9E",
    "t": "Negative index powers",
    "source": "Danebank 2020 Trial Q2",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "What is the expression for $\\dfrac{dy}{dx}$ if $y = \\dfrac{1}{x^2}$?",
    "a": "0",
    "opts": [
      "$-\\dfrac{2}{x^3}$",
      "$-\\dfrac{1}{x}$",
      "$\\dfrac{1}{x}$",
      "$\\dfrac{2}{x^3}$"
    ],
    "h": "Rewrite $\\dfrac{1}{x^2}$ as $x^{-2}$ and apply the power rule.",
    "s": "Write $y = x^{-2}$. By the power rule, $\\frac{dy}{dx} = -2x^{-3} = -\\frac{2}{x^3}$.",
    "solutionSteps": [
      {
        "explanation": "Rewrite the function using a negative index so the power rule can be applied directly.",
        "workingOut": "y = \\frac{1}{x^2} = x^{-2}"
      },
      {
        "explanation": "Apply the power rule \\(\\frac{d}{dx}(x^n) = nx^{n-1}\\): bring down the power \\(-2\\) and reduce the index by \\(1\\).",
        "workingOut": "\\frac{dy}{dx} = -2x^{-3}"
      },
      {
        "explanation": "Rewrite with a positive index to match the answer format.",
        "workingOut": "\\frac{dy}{dx} = -\\frac{2}{x^3}"
      }
    ]
  },
  {
    "id": "dane2020-mc3",
    "topicId": "y11a-3G",
    "c": "3G",
    "t": "Powers, cubics, and circles",
    "source": "Danebank 2020 Trial Q3",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "What is the value of $c$ for which the circle $(x-3)^2 + (y-2)^2 = c$ touches the $x$-axis?",
    "a": "2",
    "opts": [
      "$2$",
      "$3$",
      "$4$",
      "$9$"
    ],
    "h": "The circle touches the $x$-axis when its radius equals the distance from the centre to the $x$-axis.",
    "s": "The centre is $(3, 2)$, so its distance to the $x$-axis is $2$. For the circle to touch the $x$-axis, the radius must equal $2$, so $r = 2$ and $c = r^2 = 4$.",
    "solutionSteps": [
      {
        "explanation": "Identify the centre of the circle from the standard form \\((x-h)^2 + (y-k)^2 = r^2\\).",
        "workingOut": "\\text{Centre } (3, 2)"
      },
      {
        "explanation": "For a circle to touch (be tangent to) the \\(x\\)-axis, the radius must equal the perpendicular distance from the centre to the \\(x\\)-axis, which is the \\(y\\)-coordinate of the centre.",
        "workingOut": "r = 2"
      },
      {
        "explanation": "Since \\(c = r^2\\) in this equation, substitute \\(r = 2\\).",
        "workingOut": "c = r^2 = 2^2 = 4"
      }
    ]
  },
  {
    "id": "dane2020-mc4",
    "topicId": "y11a-3B",
    "c": "3B",
    "t": "Functions, relations, and graphs",
    "source": "Danebank 2020 Trial Q4",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "What is the domain of the function $f(x) = \\sqrt{x} + \\dfrac{1}{\\sqrt{2-x}}$?",
    "a": "1",
    "opts": [
      "$(0, 2)$",
      "$[0, 2)$",
      "$(0, 2]$",
      "$[0, 2]$"
    ],
    "h": "Each part imposes a restriction: $\\sqrt{x}$ needs $x \\geq 0$, and $\\dfrac{1}{\\sqrt{2-x}}$ needs $2 - x > 0$.",
    "s": "The term $\\sqrt{x}$ requires $x \\geq 0$. The term $\\frac{1}{\\sqrt{2-x}}$ requires $2 - x > 0$ (strictly, since it is in a denominator), giving $x < 2$. Combining: $0 \\leq x < 2$, i.e. $[0, 2)$.",
    "solutionSteps": [
      {
        "explanation": "Analyse the first term \\(\\sqrt{x}\\). A square root is defined only for non-negative arguments, so the radicand must be \\(\\geq 0\\).",
        "workingOut": "x \\geq 0"
      },
      {
        "explanation": "Analyse the second term \\(\\frac{1}{\\sqrt{2-x}}\\). The square root requires \\(2 - x \\geq 0\\), but because it sits in the denominator it cannot be zero, so \\(2 - x > 0\\) strictly.",
        "workingOut": "2 - x > 0 \\Rightarrow x < 2"
      },
      {
        "explanation": "Combine both restrictions: \\(x\\) must be at least \\(0\\) (included) and strictly less than \\(2\\).",
        "workingOut": "0 \\leq x < 2"
      },
      {
        "explanation": "Write the domain in interval notation, with a square bracket at \\(0\\) (included) and a round bracket at \\(2\\) (excluded).",
        "workingOut": "[0, 2)"
      }
    ]
  },
  {
    "id": "dane2020-mc5",
    "topicId": "y12a-1B",
    "c": "1B",
    "t": "Arithmetic sequences",
    "source": "Danebank 2020 Trial Q5",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "The $7^{\\text{th}}$ term of an arithmetic sequence is $45$ and the $11^{\\text{th}}$ term is $77$. Find the first term $a$ and the common difference $d$.",
    "a": "0",
    "opts": [
      "$a = -3$ and $d = 8$",
      "$a = 3$ and $d = 8$",
      "$a = 8$ and $d = -3$",
      "$a = 8$ and $d = 3$"
    ],
    "h": "Use $T_n = a + (n-1)d$ to write two equations and subtract them.",
    "s": "From $T_7 = a + 6d = 45$ and $T_{11} = a + 10d = 77$, subtracting gives $4d = 32$, so $d = 8$. Then $a = 45 - 6(8) = -3$.",
    "solutionSteps": [
      {
        "explanation": "Write the \\(7^{\\text{th}}\\) term using the arithmetic formula \\(T_n = a + (n-1)d\\).",
        "workingOut": "T_7 = a + 6d = 45"
      },
      {
        "explanation": "Write the \\(11^{\\text{th}}\\) term the same way.",
        "workingOut": "T_{11} = a + 10d = 77"
      },
      {
        "explanation": "Subtract the first equation from the second to eliminate \\(a\\) and solve for \\(d\\).",
        "workingOut": "4d = 32 \\Rightarrow d = 8"
      },
      {
        "explanation": "Substitute \\(d = 8\\) back into \\(a + 6d = 45\\) to find \\(a\\).",
        "workingOut": "a + 6(8) = 45 \\Rightarrow a = 45 - 48 = -3"
      }
    ]
  },
  {
    "id": "dane2020-mc6",
    "topicId": "y12a-3D",
    "c": "3D",
    "t": "Concavity and points of inflection",
    "source": "Danebank 2020 Trial Q6",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "The graph of $y = f(x)$ is shown. $x = A$ and $x = C$ are stationary points, and $x = B$ is a point of inflection. For $A < x < B$, which statement is true?",
    "a": "1",
    "opts": [
      "$f'(x) < 0$ and $f''(x) > 0$",
      "$f'(x) < 0$ and $f''(x) < 0$",
      "$f'(x) > 0$ and $f''(x) > 0$",
      "$f'(x) > 0$ and $f''(x) < 0$"
    ],
    "graphData": {
      "jsxGraph": {
        "width": 420,
        "height": 320,
        "boundingbox": [
          -4,
          6,
          4,
          -6
        ],
        "boardOptions": {
          "keepaspectratio": false
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-4,0],[4,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-6],[0,6]], {strokeColor:'black'});\nvar f=function(x){ return 0.9*Math.pow(x,3) - 1.2*x*x - 2.7*x + 0.6; };\nboard.create('functiongraph', [function(x){ return f(x); }, -2.6, 3.0], {strokeColor:'#1d4ed8',strokeWidth:2});\nboard.create('point', [-0.776, f(-0.776)], {name:'A', size:2.5, color:'#475569', fixed:true, label:{offset:[-6,-14]}});\nboard.create('point', [0.444, f(0.444)], {name:'B', size:2.5, color:'#475569', fixed:true, label:{offset:[-6,-14]}});\nboard.create('point', [2.0, f(2.0)], {name:'C', size:2.5, color:'#475569', fixed:true, label:{offset:[0,-14]}});\nboard.create('text', [3.6, 0.4, 'x'], {fontSize:13});\nboard.create('text', [0.25, 5.5, 'y'], {fontSize:13});\nboard.unsuspendUpdate();"
      }
    },
    "h": "Between the maximum at $A$ and the inflection at $B$, decide if the curve is rising or falling, and whether it bends up or down.",
    "s": "Between $A$ (a maximum) and $B$ (the inflection), the curve is falling, so $f'(x) < 0$. It is still concave down on this interval (concavity only changes at $B$), so $f''(x) < 0$.",
    "solutionSteps": [
      {
        "explanation": "Determine the sign of the first derivative. \\(A\\) is a maximum turning point and the curve falls from \\(A\\) towards \\(C\\), so on \\(A < x < B\\) the function is decreasing.",
        "workingOut": "f'(x) < 0 \\quad (\\text{curve decreasing})"
      },
      {
        "explanation": "Determine the sign of the second derivative. The point of inflection is at \\(B\\), where concavity changes. Just to the left of \\(B\\) (i.e. on \\(A<x<B\\)) the curve is concave down.",
        "workingOut": "f''(x) < 0 \\quad (\\text{concave down})"
      },
      {
        "explanation": "Combine both: decreasing and concave down.",
        "workingOut": "f'(x) < 0 \\text{ and } f''(x) < 0"
      }
    ]
  },
  {
    "id": "dane2020-mc7",
    "topicId": "y11a-4B",
    "c": "4B",
    "t": "Solving quadratic inequations",
    "source": "Danebank 2020 Trial Q7",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "Which one of the following is the set of all solutions to $2x^2 - 5x + 2 \\geq 0$?",
    "a": "3",
    "opts": [
      "$\\left[\\dfrac{1}{2}, 2\\right]$",
      "$\\left(\\dfrac{1}{2}, 2\\right)$",
      "$\\left(-\\infty, dfrac{1}{2}\\right) \\cup (2, infty)$",
      "$\\left(-\\infty, dfrac{1}{2}\\right] \\cup [2, infty)$"
    ],
    "h": "Factorise the quadratic; for a \"$\\geq 0$\" parabola opening upward, the solution is outside the roots (inclusive).",
    "s": "Factorise: $2x^2 - 5x + 2 = (2x-1)(x-2)$, with roots $x = \\frac{1}{2}$ and $x = 2$. The parabola opens upward, so it is $\\geq 0$ outside (and at) the roots: $x \\leq \\frac{1}{2}$ or $x \\geq 2$.",
    "solutionSteps": [
      {
        "explanation": "Factorise the quadratic. Find two numbers that multiply to \\(2 \\times 2 = 4\\) and add to \\(-5\\), giving the factorisation by grouping.",
        "workingOut": "2x^2 - 5x + 2 = (2x - 1)(x - 2)"
      },
      {
        "explanation": "Find the roots by setting each factor to zero.",
        "workingOut": "x = \\frac{1}{2}, quad x = 2"
      },
      {
        "explanation": "The coefficient of \\(x^2\\) is positive, so the parabola opens upward and lies above or on the \\(x\\)-axis outside the two roots. Because the inequality is \"\\(\\geq\\)\", the roots are included.",
        "workingOut": "x \\leq \\frac{1}{2} \\quad \\text{or} \\quad x \\geq 2"
      },
      {
        "explanation": "Write the solution set in interval notation with closed brackets at the roots.",
        "workingOut": "\\left(-\\infty, tfrac{1}{2}\\right] \\cup [2, infty)"
      }
    ]
  },
  {
    "id": "dane2020-mc8",
    "topicId": "y12a-2I",
    "c": "2I",
    "t": "Trigonometric graphs",
    "source": "Danebank 2020 Trial Q8",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "What is the change in amplitude and period when $f(x) = \\tfrac{1}{2}\\sin 4x$ is transformed into $g(x) = \\sin 2x$?",
    "a": "3",
    "opts": [
      "The amplitude is halved and the period is halved.",
      "The amplitude is halved and the period is doubled.",
      "The amplitude is doubled and the period is halved.",
      "The amplitude is doubled and the period is doubled."
    ],
    "h": "Compare amplitudes (the coefficient in front) and periods ($\\frac{2\\pi}{b}$) of the two functions.",
    "s": "For $f$: amplitude $\\frac{1}{2}$, period $\\frac{2\\pi}{4} = \\frac{\\pi}{2}$. For $g$: amplitude $1$, period $\\frac{2\\pi}{2} = \\pi$. Amplitude goes $\\frac{1}{2} \\to 1$ (doubled); period goes $\\frac{\\pi}{2} \\to \\pi$ (doubled).",
    "solutionSteps": [
      {
        "explanation": "Find the amplitude and period of \\(f(x) = \\frac{1}{2}\\sin 4x\\). The amplitude is the coefficient \\(\\frac{1}{2}\\); the period is \\(\\frac{2\\pi}{b}\\) with \\(b = 4\\).",
        "workingOut": "\\text{amp}_f = \\tfrac{1}{2}, quad T_f = \\frac{2\\pi}{4} = \\frac{\\pi}{2}"
      },
      {
        "explanation": "Find the amplitude and period of \\(g(x) = \\sin 2x\\). The amplitude is \\(1\\); the period uses \\(b = 2\\).",
        "workingOut": "\\text{amp}_g = 1, quad T_g = \\frac{2\\pi}{2} = \\pi"
      },
      {
        "explanation": "Compare the amplitudes: it changed from \\(\\frac{1}{2}\\) to \\(1\\), a factor of \\(2\\).",
        "workingOut": "\\frac{1}{1/2} = 2 \\Rightarrow \\text{amplitude doubled}"
      },
      {
        "explanation": "Compare the periods: it changed from \\(\\frac{\\pi}{2}\\) to \\(\\pi\\), a factor of \\(2\\).",
        "workingOut": "\\frac{\\pi}{\\pi/2} = 2 \\Rightarrow \\text{period doubled}"
      }
    ]
  },
  {
    "id": "dane2020-mc9",
    "topicId": "y12a-9C",
    "c": "9C",
    "t": "Quartiles and interquartile range",
    "source": "Danebank 2020 Trial Q9",
    "type": "multiple_choice",
    "difficulty": "hard",
    "q": "Which statement is true for an ungrouped data set with no outliers?",
    "a": "2",
    "opts": [
      "The largest possible range is 2 times the interquartile range.",
      "The largest possible range is 3 times the interquartile range.",
      "The largest possible range is 4 times the interquartile range.",
      "The largest possible range is 5 times the interquartile range."
    ],
    "h": "With no outliers, each whisker can extend at most $1.5 \\times \\text{IQR}$ beyond the box, which itself spans $1 \\times \\text{IQR}$.",
    "s": "An outlier lies more than $1.5 \\times \\text{IQR}$ beyond a quartile. With no outliers, each whisker extends at most $1.5 \\times \\text{IQR}$. The box spans $1 \\times \\text{IQR}$, so the maximum range is $1.5 + 1 + 1.5 = 4$ times the IQR.",
    "solutionSteps": [
      {
        "explanation": "Recall the outlier rule: a value is an outlier if it lies more than \\(1.5 \\times \\text{IQR}\\) below \\(Q_1\\) or above \\(Q_3\\). So with no outliers, the minimum and maximum can each be at most \\(1.5 \\times \\text{IQR}\\) from the nearest quartile.",
        "workingOut": "\\text{each whisker} \\leq 1.5 \\times \\text{IQR}"
      },
      {
        "explanation": "The box (between \\(Q_1\\) and \\(Q_3\\)) spans exactly one interquartile range.",
        "workingOut": "\\text{box} = 1 \\times \\text{IQR}"
      },
      {
        "explanation": "The range is the distance from minimum to maximum: lower whisker + box + upper whisker.",
        "workingOut": "\\text{range} = 1.5\\, text{IQR} + 1\\, text{IQR} + 1.5\\, text{IQR}"
      },
      {
        "explanation": "Add the multiples to find the largest possible range.",
        "workingOut": "\\text{range} = 4 \\times \\text{IQR}"
      }
    ]
  },
  {
    "id": "dane2020-mc10",
    "topicId": "y12a-5K",
    "c": "5K",
    "t": "Calculus with other bases",
    "source": "Danebank 2020 Trial Q10",
    "type": "multiple_choice",
    "difficulty": "hard",
    "q": "What is the value of $\\displaystyle\\int_1^2 2^{-x}\\,dx$?",
    "a": "0",
    "opts": [
      "$\\dfrac{1}{4\\ln 2}$",
      "$\\dfrac{1}{2\\ln 2}$",
      "$\\dfrac{\\ln 2}{4}$",
      "$\\dfrac{\\ln 2}{2}$"
    ],
    "h": "The primitive of $a^{u}$ is $\\dfrac{a^{u}}{\\ln a}$; here $a = 2$ and $u = -x$, so include the inner derivative.",
    "s": "Since $\\int 2^{-x}\\,dx = \\frac{2^{-x}}{-\\ln 2}$, evaluate from $1$ to $2$: $\\frac{1}{-\\ln 2}\\left(2^{-2} - 2^{-1}\\right) = \\frac{1}{-\\ln 2}\\left(\\frac{1}{4} - \\frac{1}{2}\\right) = \\frac{1}{-\\ln 2}\\left(-\\frac{1}{4}\\right) = \\frac{1}{4\\ln 2}$.",
    "solutionSteps": [
      {
        "explanation": "Find the primitive. For base \\(a\\), \\(\\int a^{x}\\,dx = \\frac{a^{x}}{\\ln a}\\). Here the exponent is \\(-x\\), so dividing by the inner derivative \\(-1\\) gives a factor of \\(\\frac{1}{-\\ln 2}\\).",
        "workingOut": "\\int 2^{-x}\\,dx = \\frac{2^{-x}}{-\\ln 2}"
      },
      {
        "explanation": "Substitute the upper and lower limits \\(x = 2\\) and \\(x = 1\\).",
        "workingOut": "\\left[\\frac{2^{-x}}{-\\ln 2}\\right]_1^2 = \\frac{1}{-\\ln 2}\\left(2^{-2} - 2^{-1}\\right)"
      },
      {
        "explanation": "Evaluate the powers of \\(2\\).",
        "workingOut": "= \\frac{1}{-\\ln 2}\\left(\\frac{1}{4} - \\frac{1}{2}\\right)"
      },
      {
        "explanation": "Simplify inside the bracket.",
        "workingOut": "= \\frac{1}{-\\ln 2}\\left(-\\frac{1}{4}\\right)"
      },
      {
        "explanation": "The two negatives cancel, giving the final value.",
        "workingOut": "= \\frac{1}{4\\ln 2}"
      }
    ]
  },
  {
    "id": "dane2020-q11",
    "topicId": "y12a-4H",
    "c": "4H",
    "t": "The trapezoidal rule",
    "source": "Danebank 2020 Trial Q11",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Use two applications of the trapezoidal rule to approximate the area of the figure below. The figure has heights $6$ m, $7$ m and $10$ m at points spaced $6$ m apart along the base.",
    "a": "3",
    "opts": [
      "$69\\text{ m}^2$",
      "$84\\text{ m}^2$",
      "$100\\text{ m}^2$",
      "$90\\text{ m}^2$"
    ],
    "graphData": {
      "jsxGraph": {
        "width": 420,
        "height": 280,
        "boundingbox": [
          -2,
          12,
          15,
          -3
        ],
        "boardOptions": {
          "keepaspectratio": false
        },
        "script": "board.suspendUpdate();\nboard.create('segment', [[0,0],[12,0]], {strokeColor:'#0f172a', strokeWidth:1.5});\nboard.create('segment', [[0,0],[0,6]], {strokeColor:'#334155', strokeWidth:1.5});\nboard.create('segment', [[6,0],[6,7]], {strokeColor:'#64748b', strokeWidth:1.5, dash:2});\nboard.create('segment', [[12,0],[12,10]], {strokeColor:'#334155', strokeWidth:1.5});\n// Curve through the three measured heights (0,6), (6,7), (12,10): y = 6 + x^2/36\nboard.create('functiongraph', [function(x){ return 6 + (x*x)/36; }, 0, 12], {strokeColor:'#1d4ed8', strokeWidth:2.5});\n// Trapezoid chords (what the rule uses)\nboard.create('segment', [[0,6],[6,7]], {strokeColor:'#94a3b8', strokeWidth:1.5, dash:1});\nboard.create('segment', [[6,7],[12,10]], {strokeColor:'#94a3b8', strokeWidth:1.5, dash:1});\nvar tops=[[0,6],[6,7],[12,10]];\nfor(var i=0;i<tops.length;i++){ board.create('point', tops[i], {name:'', size:2.5, color:'#dc2626', fixed:true}); }\nboard.create('text', [-1.7, 3, '6 m'], {fontSize:12});\nboard.create('text', [4.2, 3.5, '7 m'], {fontSize:12});\nboard.create('text', [12.4, 5, '10 m'], {fontSize:12});\nboard.create('text', [2.4, -1.6, '6 m'], {fontSize:12});\nboard.create('text', [8.4, -1.6, '6 m'], {fontSize:12});\nboard.unsuspendUpdate();"
      }
    },
    "h": "Apply $A \\approx \\dfrac{h}{2}(f_0 + f_1)$ to each of the two strips (each $6$ m wide) and add. Or one formula: $A\\approx\\dfrac{h}{2}(y_0+2y_1+y_2)$.",
    "s": "Each strip has width $h = 6$. First strip: $\\frac{6}{2}(6 + 7) = 39$. Second strip: $\\frac{6}{2}(7 + 10) = 51$. Total area $\\approx 39 + 51 = 90 \\text{ m}^2$.",
    "solutionSteps": [
      {
        "explanation": "Two applications means two strips and three heights. Strip width \\(h=6\\) m. Formula: \\(A\\approx\\dfrac{h}{2}(y_0+2y_1+y_2)\\).",
        "workingOut": "A\\approx\\dfrac{6}{2}(6+2\\cdot 7+10)"
      },
      {
        "explanation": "Inside the brackets: \\(6+14+10=30\\). Then multiply by \\(3\\).",
        "workingOut": "3\\times 30=90"
      },
      {
        "explanation": "Approximate area is \\(90\\) square metres.",
        "workingOut": "90\\text{ m}^2"
      }
    ]
  },
  {
    "id": "dane2020-q12a",
    "topicId": "y11a-11C",
    "c": "11C",
    "t": "Arcs and sectors",
    "source": "Danebank 2020 Trial Q12(a)",
    "type": "short_answer",
    "difficulty": "easy",
    "q": "Tim found the radius of sector $OAB$ (area $\\dfrac{25\\pi}{6}$, arc length $\\dfrac{5\\pi}{3}$) using these equations: $(1)\\ \\tfrac{1}{2}r^2\\theta = \\tfrac{25\\pi}{6}$, $(2)\\ r\\theta = \\tfrac{5\\pi}{3}$, $(3)\\ \\tfrac{1}{2}r = \\tfrac{5}{2}$. What operation did Tim perform on equations $(1)$ and $(2)$ to get equation $(3)$?",
    "a": "He divided equation $(1)$ by equation $(2)$.",
    "opts": [],
    "graphData": {
      "jsxGraph": {
        "width": 320,
        "height": 320,
        "boundingbox": [
          -1.5,
          5,
          5,
          -3.5
        ],
        "boardOptions": {
          "keepaspectratio": true
        },
        "script": "board.suspendUpdate();\nvar O=[0,0];\nvar A=[0,4];\nvar B=[4*Math.cos(-Math.PI/3), 4*Math.sin(-Math.PI/3)];\nboard.create('sector', [O, A, B], {fillColor:'#cbd5e1', fillOpacity:0.4, strokeColor:'#475569', strokeWidth:1.5});\nboard.create('segment', [O, A], {strokeColor:'black'});\nboard.create('segment', [O, B], {strokeColor:'black'});\nboard.create('point', O, {name:'O', size:2, color:'black', fixed:true, label:{offset:[-12,-2]}});\nboard.create('point', A, {name:'A', size:2, color:'black', fixed:true, label:{offset:[-4,12]}});\nboard.create('point', B, {name:'B', size:2, color:'black', fixed:true, label:{offset:[8,-6]}});\nboard.create('text', [-0.6, 2, 'r'], {fontSize:14});\nboard.create('text', [0.55, 0.25, '\\u03b8'], {fontSize:14});\nboard.unsuspendUpdate();"
      }
    },
    "h": "Look at how the variable $\\theta$ disappears between $(1)$, $(2)$ and $(3)$.",
    "s": "Dividing equation $(1)$ by equation $(2)$ cancels the common factor $r\\theta$: $\\frac{\\frac{1}{2}r^2\\theta}{r\\theta} = \\frac{1}{2}r$, and $\\frac{25\\pi/6}{5\\pi/3} = \\frac{5}{2}$, giving equation $(3)$.",
    "solutionSteps": [
      {
        "explanation": "Compare the left-hand sides of \\((1)\\) and \\((2)\\). Dividing \\(\\frac{1}{2}r^2\\theta\\) by \\(r\\theta\\) cancels \\(r\\theta\\), leaving \\(\\frac{1}{2}r\\), which is exactly the left side of \\((3)\\).",
        "workingOut": "\\frac{\\frac{1}{2}r^2\\theta}{r\\theta} = \\frac{1}{2}r"
      },
      {
        "explanation": "Check the right-hand sides divide consistently to give \\((3)\\)’s right side.",
        "workingOut": "\\frac{25\\pi/6}{5\\pi/3} = \\frac{25\\pi}{6}\\times\\frac{3}{5\\pi} = \\frac{5}{2}"
      },
      {
        "explanation": "Conclude the operation performed.",
        "workingOut": "(3) = (1) \\div (2)"
      }
    ]
  },
  {
    "id": "dane2020-q12b",
    "topicId": "y11a-11C",
    "c": "11C",
    "t": "Arcs and sectors",
    "source": "Danebank 2020 Trial Q12(b)",
    "type": "short_answer",
    "difficulty": "easy",
    "q": "Using the equations from part (a), with $r = 5$ units, what is the value of $\\theta$ for sector $OAB$ (arc length $\\dfrac{5\\pi}{3}$)?",
    "a": "$\\theta = \\dfrac{\\pi}{3}$",
    "opts": [],
    "h": "Substitute $r = 5$ into the arc-length equation $r\\theta = \\dfrac{5\\pi}{3}$.",
    "s": "From equation $(3)$, $\\frac{1}{2}r = \\frac{5}{2}$ gives $r = 5$. Substitute into $r\\theta = \\frac{5\\pi}{3}$: $5\\theta = \\frac{5\\pi}{3}$, so $\\theta = \\frac{\\pi}{3}$.",
    "solutionSteps": [
      {
        "explanation": "From equation \\((3)\\), solve \\(\\frac{1}{2}r = \\frac{5}{2}\\) to confirm the radius.",
        "workingOut": "r = 5 \\text{ units}"
      },
      {
        "explanation": "Substitute \\(r = 5\\) into the arc-length equation \\(r\\theta = \\frac{5\\pi}{3}\\).",
        "workingOut": "5\\theta = \\frac{5\\pi}{3}"
      },
      {
        "explanation": "Divide both sides by \\(5\\) to solve for \\(\\theta\\).",
        "workingOut": "\\theta = \\frac{\\pi}{3}"
      }
    ]
  },
  {
    "id": "dane2020-q13a",
    "topicId": "y11a-6J",
    "c": "6J",
    "t": "Problems with general triangles",
    "source": "Danebank 2020 Trial Q13(a)",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "$ABC$ is a triangular airfield with $AB = BC = 6.4$ km. The bearing of $B$ from $A$ is $140°$ and the bearing of $C$ from $B$ is $032°$. Show that $\\angle ABC = 72°$.",
    "a": "$\\angle ABC = 72°$",
    "opts": [],
    "graphData": {
      "geometry": {
        "width": 280,
        "points": {
          "A": [
            0,
            3
          ],
          "C": [
            4.5,
            3.4
          ],
          "B": [
            1.8,
            0
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
            "text": "6.4 km"
          },
          {
            "between": [
              "B",
              "C"
            ],
            "text": "6.4 km"
          }
        ]
      }
    },
    "h": "Use the parallel north lines: the angle $\\angle ABN_1$ is the alternate angle to the southerly direction of the $140°$ bearing.",
    "s": "The bearing of $B$ from $A$ is $140°$. The north line at $B$ is parallel to the north line at $A$, so the alternate angle $\\angle N_1BA = 180° - 140° = 40°$. The bearing of $C$ from $B$ is $032°$, so $\\angle N_1BC = 32°$. Therefore $\\angle ABC = 40° + 32° = 72°$.",
    "solutionSteps": [
      {
        "explanation": "The bearing of \\(B\\) from \\(A\\) is \\(140°\\) (measured clockwise from north at \\(A\\)). The north lines at \\(A\\) and \\(B\\) are parallel, so by alternate angles the angle between \\(BA\\) and the north line at \\(B\\) is \\(180° - 140° = 40°\\).",
        "workingOut": "\\angle ABN_1 = 180° - 140° = 40° \\quad [\\text{alternate angles}]"
      },
      {
        "explanation": "The bearing of \\(C\\) from \\(B\\) is \\(032°\\), which is the angle between the north line at \\(B\\) and \\(BC\\).",
        "workingOut": "\\angle N_1BC = 32°"
      },
      {
        "explanation": "Add the two angles at \\(B\\) on either side of the north line to get the full angle \\(\\angle ABC\\).",
        "workingOut": "\\angle ABC = 40° + 32° = 72°"
      }
    ]
  },
  {
    "id": "dane2020-q13b",
    "topicId": "y11a-6H",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "source": "Danebank 2020 Trial Q13(b)",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "For the triangular airfield $ABC$ with $AB = BC = 6.4$ km and $\\angle ABC = 72°$, find the area of the airfield correct to the nearest square kilometre.",
    "a": "$19 \\text{ km}^2$",
    "opts": [],
    "h": "Use the area formula $A = \\dfrac{1}{2}ac\\sin B$ with the two known sides and the included angle.",
    "s": "$A = \\frac{1}{2}ac\\sin B = \\frac{1}{2}(6.4)(6.4)\\sin 72° = 19.4776\\ldots \\approx 19 \\text{ km}^2$.",
    "solutionSteps": [
      {
        "explanation": "State the area formula for a triangle given two sides and the included angle. Here the included angle \\(\\angle ABC = 72°\\) lies between the two equal sides.",
        "workingOut": "A = \\frac{1}{2}ac\\sin B"
      },
      {
        "explanation": "Substitute \\(a = c = 6.4\\) km and \\(B = 72°\\).",
        "workingOut": "A = \\frac{1}{2}(6.4)(6.4)\\sin 72°"
      },
      {
        "explanation": "Evaluate the expression.",
        "workingOut": "A = 19.4776\\ldots"
      },
      {
        "explanation": "Round to the nearest square kilometre.",
        "workingOut": "A \\approx 19 \\text{ km}^2"
      }
    ]
  },
  {
    "id": "dane2020-q14a",
    "topicId": "y11a-1E",
    "c": "1E",
    "t": "Solving simultaneous equations",
    "source": "Danebank 2020 Trial Q14(a)",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "The diagram shows the curves $y = 2 - \\dfrac{3}{x}$ and $y = x - 2$ for $x \\geq 0$, meeting at $P$ and $Q$. Find the $x$-coordinates of $P$ and $Q$.",
    "a": "$x = 1$ (at $P$) and $x = 3$ (at $Q$)",
    "opts": [],
    "graphData": {
      "jsxGraph": {
        "width": 400,
        "height": 320,
        "boundingbox": [
          -1,
          4,
          5,
          -4
        ],
        "boardOptions": {
          "keepaspectratio": false
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-1,0],[5,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-4],[0,4]], {strokeColor:'black'});\nboard.create('functiongraph', [function(x){ return x - 2; }, -1, 5], {strokeColor:'#15803d',strokeWidth:2});\nboard.create('functiongraph', [function(x){ return 2 - 3/x; }, 0.4, 5], {strokeColor:'#1d4ed8',strokeWidth:2});\nboard.create('point', [1,-1], {name:'P', size:2.5, color:'red', fixed:true, label:{offset:[-14,-4]}});\nboard.create('point', [3,1], {name:'Q', size:2.5, color:'red', fixed:true, label:{offset:[8,8]}});\nboard.create('text', [4.6, 0.4, 'x'], {fontSize:13});\nboard.create('text', [0.25, 3.6, 'y'], {fontSize:13});\nboard.create('text', [4.1, 2.5, 'y = x - 2'], {fontSize:11, strokeColor:'#15803d'});\nboard.unsuspendUpdate();"
      }
    },
    "h": "Set the two expressions equal and multiply through by $x$ to form a quadratic.",
    "s": "Set $x - 2 = 2 - \\frac{3}{x}$. Multiply by $x$: $x^2 - 2x = 2x - 3$, so $x^2 - 4x + 3 = 0$, i.e. $(x-3)(x-1) = 0$. Thus $x = 1$ (at $P$) and $x = 3$ (at $Q$).",
    "solutionSteps": [
      {
        "explanation": "At the points of intersection the two \\(y\\)-values are equal, so set the right-hand sides equal.",
        "workingOut": "x - 2 = 2 - \\frac{3}{x}"
      },
      {
        "explanation": "Multiply every term by \\(x\\) to clear the fraction (valid since \\(x > 0\\)).",
        "workingOut": "x^2 - 2x = 2x - 3"
      },
      {
        "explanation": "Collect all terms on one side to form a quadratic equation in standard form.",
        "workingOut": "x^2 - 4x + 3 = 0"
      },
      {
        "explanation": "Factorise the quadratic.",
        "workingOut": "(x - 3)(x - 1) = 0"
      },
      {
        "explanation": "Solve for \\(x\\); the smaller value is the \\(x\\)-coordinate of \\(P\\) and the larger is that of \\(Q\\).",
        "workingOut": "x = 1 \\;(P), quad x = 3 \\;(Q)"
      }
    ]
  },
  {
    "id": "dane2020-q14b",
    "topicId": "y12a-4F",
    "c": "4F",
    "t": "Finding areas by integration",
    "source": "Danebank 2020 Trial Q14(b)",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "Hence find, in simplest exact form, the area of the shaded region contained between the two curves $y = 2 - \\dfrac{3}{x}$ and $y = x - 2$ (between $x = 1$ and $x = 3$).",
    "a": "$4 - 3\\ln 3 \\text{ units}^2$",
    "opts": [],
    "h": "Integrate (upper curve $-$ lower curve) from $1$ to $3$. The hyperbola $y = 2 - \\frac{3}{x}$ is on top in this region.",
    "s": "$A = \\int_1^3 \\left[\\left(2 - \\frac{3}{x}\\right) - (x - 2)\\right] dx = \\int_1^3 \\left(4 - \\frac{3}{x} - x\\right) dx = \\left[4x - 3\\ln x - \\frac{x^2}{2}\\right]_1^3$. Evaluating: $\\left(12 - 3\\ln 3 - \\frac{9}{2}\\right) - \\left(4 - 0 - \\frac{1}{2}\\right) = 4 - 3\\ln 3$.",
    "solutionSteps": [
      {
        "explanation": "Set up the area as the integral of the upper curve minus the lower curve between the intersection points. Here \\(y = 2 - \\frac{3}{x}\\) is above \\(y = x - 2\\) on \\(1 < x < 3\\).",
        "workingOut": "A = \\int_1^3 \\left[\\left(2 - \\frac{3}{x}\\right) - (x - 2)\\right] dx"
      },
      {
        "explanation": "Simplify the integrand by expanding the brackets.",
        "workingOut": "A = \\int_1^3 \\left(4 - \\frac{3}{x} - x\\right) dx"
      },
      {
        "explanation": "Find the primitive term by term, using \\(\\int \\frac{1}{x}\\,dx = \\ln x\\).",
        "workingOut": "= \\left[4x - 3\\ln x - \\frac{x^2}{2}\\right]_1^3"
      },
      {
        "explanation": "Substitute the upper limit \\(x = 3\\).",
        "workingOut": "= 12 - 3\\ln 3 - \\frac{9}{2}"
      },
      {
        "explanation": "Substitute the lower limit \\(x = 1\\) (note \\(\\ln 1 = 0\\)).",
        "workingOut": "- \\left(4 - 0 - \\frac{1}{2}\\right)"
      },
      {
        "explanation": "Combine the constants: \\(\\left(12 - \\frac{9}{2}\\right) - \\left(4 - \\frac{1}{2}\\right) = \\frac{15}{2} - \\frac{7}{2} = 4\\).",
        "workingOut": "A = 4 - 3\\ln 3 \\text{ units}^2"
      }
    ]
  },
  {
    "id": "dane2020-q15",
    "topicId": "y11a-11B",
    "c": "11B",
    "t": "Solving trigonometric equations",
    "source": "Danebank 2020 Trial Q15",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "Solve the equation $|2\\cos x - 1| = 1$ for $0 \\leq x \\leq \\pi$.",
    "a": "$x = 0$ or $x = \\dfrac{\\pi}{2}$",
    "opts": [],
    "h": "An absolute value equation $|A| = 1$ splits into $A = 1$ and $A = -1$. Solve each in the given domain.",
    "s": "Case 1: $2\\cos x - 1 = 1 \\Rightarrow \\cos x = 1 \\Rightarrow x = 0$. Case 2: $-(2\\cos x - 1) = 1 \\Rightarrow 2\\cos x = 0 \\Rightarrow \\cos x = 0 \\Rightarrow x = \\frac{\\pi}{2}$. Both lie in $[0, pi]$.",
    "solutionSteps": [
      {
        "explanation": "Split the absolute value equation \\(|2\\cos x - 1| = 1\\) into its two cases: the inside equals \\(+1\\) or \\(-1\\).",
        "workingOut": "2\\cos x - 1 = 1 \\quad \\text{or} \\quad 2\\cos x - 1 = -1"
      },
      {
        "explanation": "Solve the first case: \\(2\\cos x - 1 = 1\\) gives \\(\\cos x = 1\\).",
        "workingOut": "\\cos x = 1 \\Rightarrow x = 0"
      },
      {
        "explanation": "Solve the second case: \\(2\\cos x - 1 = -1\\) gives \\(\\cos x = 0\\).",
        "workingOut": "\\cos x = 0 \\Rightarrow x = \\frac{\\pi}{2}"
      },
      {
        "explanation": "Check both solutions lie in the domain \\(0 \\leq x \\leq \\pi\\) — they do.",
        "workingOut": "x = 0, \\; \\frac{\\pi}{2} \\in [0, pi] \\;\\checkmark"
      }
    ]
  },
  {
    "id": "dane2020-q16",
    "topicId": "y11a-7B",
    "c": "7B",
    "t": "Gradients",
    "source": "Danebank 2020 Trial Q16",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "$A(-1, 16)$, $B(-3, 2)$ and $C(5, -2)$ are three points. $D$ is the midpoint of $AB$ and $E$ is the midpoint of $AC$. Show that $DE$ is parallel to $BC$.",
    "a": "$m_{DE} = m_{BC} = -\\dfrac{1}{2}$, so $DE \\parallel BC$.",
    "opts": [],
    "h": "Find $D$ and $E$ using the midpoint formula, then show $m_{DE} = m_{BC}$.",
    "s": "$D = \\left(\\frac{-1-3}{2}, frac{16+2}{2}\\right) = (-2, 9)$ and $E = \\left(\\frac{-1+5}{2}, frac{16-2}{2}\\right) = (2, 7)$. Then $m_{DE} = \\frac{9-7}{-2-2} = -\\frac{1}{2}$ and $m_{BC} = \\frac{2-(-2)}{-3-5} = -\\frac{1}{2}$. Since the gradients are equal, $DE \\parallel BC$.",
    "solutionSteps": [
      {
        "explanation": "Find \\(D\\), the midpoint of \\(AB\\), using the midpoint formula \\(\\left(\\frac{x_1+x_2}{2}, frac{y_1+y_2}{2}\\right)\\).",
        "workingOut": "D = \\left(\\frac{-1+(-3)}{2}, frac{16+2}{2}\\right) = (-2, 9)"
      },
      {
        "explanation": "Find \\(E\\), the midpoint of \\(AC\\), the same way.",
        "workingOut": "E = \\left(\\frac{-1+5}{2}, frac{16+(-2)}{2}\\right) = (2, 7)"
      },
      {
        "explanation": "Compute the gradient of \\(DE\\) using \\(m = \\frac{y_2 - y_1}{x_2 - x_1}\\).",
        "workingOut": "m_{DE} = \\frac{9 - 7}{-2 - 2} = \\frac{2}{-4} = -\\frac{1}{2}"
      },
      {
        "explanation": "Compute the gradient of \\(BC\\).",
        "workingOut": "m_{BC} = \\frac{2 - (-2)}{-3 - 5} = \\frac{4}{-8} = -\\frac{1}{2}"
      },
      {
        "explanation": "Since the two gradients are equal, the lines are parallel.",
        "workingOut": "m_{DE} = m_{BC} \\Rightarrow DE \\parallel BC \\quad \\blacksquare"
      }
    ]
  },
  {
    "id": "dane2020-q17a",
    "topicId": "y11a-12G",
    "c": "12G",
    "t": "Conditional probability",
    "source": "Danebank 2020 Trial Q17(a)",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "$200$ people took a lie detector test. Of those lying, $96$ tested positive and $24$ tested negative; of those not lying, $8$ tested positive and $72$ tested negative. Find the probability that a person who was lying tested positive.",
    "a": "$\\dfrac{4}{5}$",
    "opts": [],
    "h": "This is conditional: restrict to the $120$ people who were lying, then find the fraction who tested positive.",
    "s": "There were $96 + 24 = 120$ people lying. Of these, $96$ tested positive, so $P(\\text{positive} \\mid \\text{lying}) = \\frac{96}{120} = \\frac{4}{5}$.",
    "solutionSteps": [
      {
        "explanation": "Identify the total number of people who were lying (the condition restricts the sample space to this group).",
        "workingOut": "\\text{lying} = 96 + 24 = 120"
      },
      {
        "explanation": "Of those lying, count how many tested positive.",
        "workingOut": "\\text{lying and positive} = 96"
      },
      {
        "explanation": "Form the conditional probability as the fraction of the lying group that tested positive, and simplify.",
        "workingOut": "P(\\text{positive} \\mid \\text{lying}) = \\frac{96}{120} = \\frac{4}{5}"
      }
    ]
  },
  {
    "id": "dane2020-q17b",
    "topicId": "y11a-12D",
    "c": "12D",
    "t": "Venn diagrams and the addition theorem",
    "source": "Danebank 2020 Trial Q17(b)",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "For the same lie detector data ($200$ people: lying $96$ positive / $24$ negative; not lying $8$ positive / $72$ negative), find the probability that the test was inaccurate.",
    "a": "$\\dfrac{4}{25}$",
    "opts": [],
    "h": "The test is inaccurate when a liar tests negative OR a truthful person tests positive — add those two counts over $200$.",
    "s": "Inaccurate results are (lying and negative) or (not lying and positive): $24 + 8 = 32$ people. So $P(\\text{inaccurate}) = \\frac{32}{200} = \\frac{4}{25}$.",
    "solutionSteps": [
      {
        "explanation": "Identify the two ways the test gives a wrong result: a person who is lying but tests negative, or a person who is not lying but tests positive.",
        "workingOut": "\\text{inaccurate} = (\\text{lying} \\cap \\text{negative}) \\cup (\\text{not lying} \\cap \\text{positive})"
      },
      {
        "explanation": "Read off and add the two counts from the table.",
        "workingOut": "24 + 8 = 32"
      },
      {
        "explanation": "Divide by the total of \\(200\\) people and simplify.",
        "workingOut": "P(\\text{inaccurate}) = \\frac{32}{200} = \\frac{4}{25}"
      }
    ]
  },
  {
    "id": "dane2020-q18",
    "topicId": "y11a-9A",
    "c": "9A",
    "t": "Tangents and the derivative",
    "source": "Danebank 2020 Trial Q18",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "Find, in general form, the equation of the normal to the curve $y = \\sqrt{x}$ at the point where $x = 4$.",
    "a": "$4x + y - 18 = 0$",
    "opts": [],
    "h": "Differentiate to get the tangent gradient at $x = 4$; the normal gradient is its negative reciprocal.",
    "s": "$y = x^{1/2}$, so $\\frac{dy}{dx} = \\frac{1}{2\\sqrt{x}}$. At $x = 4$, gradient $= \\frac{1}{4}$, so the normal gradient is $-4$. The point is $(4, 2)$. Normal: $y - 2 = -4(x - 4)$, i.e. $4x + y - 18 = 0$.",
    "solutionSteps": [
      {
        "explanation": "Write the curve with a fractional index and differentiate using the power rule.",
        "workingOut": "y = x^{1/2} \\Rightarrow \\frac{dy}{dx} = \\frac{1}{2}x^{-1/2} = \\frac{1}{2\\sqrt{x}}"
      },
      {
        "explanation": "Evaluate the tangent gradient at \\(x = 4\\).",
        "workingOut": "\\left.\\frac{dy}{dx}\\right|_{x=4} = \\frac{1}{2\\sqrt{4}} = \\frac{1}{4}"
      },
      {
        "explanation": "The normal is perpendicular to the tangent, so its gradient is the negative reciprocal.",
        "workingOut": "m_{\\text{normal}} = -4"
      },
      {
        "explanation": "Find the point of contact by substituting \\(x = 4\\) into the curve.",
        "workingOut": "y = \\sqrt{4} = 2 \\Rightarrow (4, 2)"
      },
      {
        "explanation": "Use point–gradient form for the normal line.",
        "workingOut": "y - 2 = -4(x - 4)"
      },
      {
        "explanation": "Expand and rearrange into general form \\(ax + by + c = 0\\).",
        "workingOut": "y - 2 = -4x + 16 \\Rightarrow 4x + y - 18 = 0"
      }
    ]
  },
  {
    "id": "dane2020-q19a",
    "topicId": "y11a-8D",
    "c": "8D",
    "t": "Laws for logarithms",
    "source": "Danebank 2020 Trial Q19(a)",
    "type": "short_answer",
    "difficulty": "easy",
    "q": "Show that $\\log_x 2 = \\dfrac{1}{\\log_2 x}$.",
    "a": "By the change-of-base rule, $\\log_x 2 = \\dfrac{\\log_2 2}{\\log_2 x} = \\dfrac{1}{\\log_2 x}$.",
    "opts": [],
    "h": "Apply the change-of-base rule to rewrite $\\log_x 2$ in base $2$.",
    "s": "Using change of base to base $2$: $\\log_x 2 = \\frac{\\log_2 2}{\\log_2 x} = \\frac{1}{\\log_2 x}$, since $\\log_2 2 = 1$.",
    "solutionSteps": [
      {
        "explanation": "Apply the change-of-base rule \\(\\log_b a = \\frac{\\log_c a}{\\log_c b}\\), choosing base \\(c = 2\\).",
        "workingOut": "\\log_x 2 = \\frac{\\log_2 2}{\\log_2 x}"
      },
      {
        "explanation": "Simplify the numerator using \\(\\log_2 2 = 1\\).",
        "workingOut": "= \\frac{1}{\\log_2 x} \\quad \\blacksquare"
      }
    ]
  },
  {
    "id": "dane2020-q19b",
    "topicId": "y11a-8E",
    "c": "8E",
    "t": "Equations involving logarithms and indices",
    "source": "Danebank 2020 Trial Q19(b)",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "Solve the equation $\\log_2 x = 4\\log_x 2$.",
    "a": "$x = 4$ or $x = \\dfrac{1}{4}$",
    "opts": [],
    "h": "Use part (a) to replace $\\log_x 2$ with $\\dfrac{1}{\\log_2 x}$, then let $u = \\log_2 x$.",
    "s": "Using (a): $\\log_2 x = \\frac{4}{\\log_2 x}$, so $(\\log_2 x)^2 = 4$, giving $\\log_2 x = 2$ or $\\log_2 x = -2$. Thus $x = 2^2 = 4$ or $x = 2^{-2} = \\frac{1}{4}$.",
    "solutionSteps": [
      {
        "explanation": "Substitute the result from part (a), \\(\\log_x 2 = \\frac{1}{\\log_2 x}\\), into the equation.",
        "workingOut": "\\log_2 x = 4 \\times \\frac{1}{\\log_2 x}"
      },
      {
        "explanation": "Multiply both sides by \\(\\log_2 x\\) to clear the fraction.",
        "workingOut": "(\\log_2 x)^2 = 4"
      },
      {
        "explanation": "Take square roots, remembering both signs.",
        "workingOut": "\\log_2 x = 2 \\quad \\text{or} \\quad \\log_2 x = -2"
      },
      {
        "explanation": "Convert each logarithmic equation back to index form to solve for \\(x\\).",
        "workingOut": "x = 2^2 = 4 \\quad \\text{or} \\quad x = 2^{-2} = \\frac{1}{4}"
      }
    ]
  },
  {
    "id": "dane2020-q20",
    "topicId": "y12a-3H",
    "c": "3H",
    "t": "Primitive functions",
    "source": "Danebank 2020 Trial Q20",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "If $f'(x) = 6x^2 + 5x - 1$ and $f(-1) = 5$, find an expression for $f(x)$.",
    "a": "$f(x) = 2x^3 + \\dfrac{5}{2}x^2 - x + \\dfrac{7}{2}$",
    "opts": [],
    "h": "Integrate $f'(x)$ to get $f(x) + C$, then use $f(-1) = 5$ to find $C$.",
    "s": "Integrating, $f(x) = 2x^3 + \\frac{5}{2}x^2 - x + C$. Using $f(-1) = 5$: $-2 + \\frac{5}{2} + 1 + C = 5$, so $C = \\frac{7}{2}$. Hence $f(x) = 2x^3 + \\frac{5}{2}x^2 - x + \\frac{7}{2}$.",
    "solutionSteps": [
      {
        "explanation": "Integrate \\(f'(x)\\) term by term to recover \\(f(x)\\), adding a constant of integration \\(C\\).",
        "workingOut": "f(x) = 2x^3 + \\frac{5}{2}x^2 - x + C"
      },
      {
        "explanation": "Substitute the known value \\(f(-1) = 5\\) to set up an equation for \\(C\\).",
        "workingOut": "2(-1)^3 + \\frac{5}{2}(-1)^2 - (-1) + C = 5"
      },
      {
        "explanation": "Simplify the left side.",
        "workingOut": "-2 + \\frac{5}{2} + 1 + C = 5 \\Rightarrow \\frac{3}{2} + C = 5"
      },
      {
        "explanation": "Solve for \\(C\\).",
        "workingOut": "C = 5 - \\frac{3}{2} = \\frac{7}{2}"
      },
      {
        "explanation": "Write the final expression for \\(f(x)\\).",
        "workingOut": "f(x) = 2x^3 + \\frac{5}{2}x^2 - x + \\frac{7}{2}"
      }
    ]
  },
  {
    "id": "dane2020-q21a",
    "topicId": "y12a-3B",
    "c": "3B",
    "t": "Stationary points and turning points",
    "source": "Danebank 2020 Trial Q21(a)",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "Consider the function $f(x) = 4x^3 - x^4$. Find the stationary points on the curve $y = f(x)$ and determine their nature.",
    "a": "$(0, 0)$ is a horizontal point of inflection; $(3, 27)$ is a maximum turning point.",
    "opts": [],
    "h": "Solve $f'(x) = 0$, then use $f''(x)$ (or a sign table) to classify each stationary point.",
    "s": "$f'(x) = 12x^2 - 4x^3 = 4x^2(3 - x) = 0$ gives $x = 0$ or $x = 3$. $f''(x) = 24x - 12x^2$. $f''(0) = 0$ and a sign table shows $f'$ does not change sign at $x = 0$, so $(0, 0)$ is a horizontal point of inflection. $f''(3) = -36 < 0$, so $(3, 27)$ is a maximum turning point.",
    "solutionSteps": [
      {
        "explanation": "Differentiate \\(f(x) = 4x^3 - x^4\\) and factorise to find where the gradient is zero.",
        "workingOut": "f'(x) = 12x^2 - 4x^3 = 4x^2(3 - x)"
      },
      {
        "explanation": "Set \\(f'(x) = 0\\) and solve for the \\(x\\)-values of the stationary points.",
        "workingOut": "4x^2(3 - x) = 0 \\Rightarrow x = 0 \\text{ or } x = 3"
      },
      {
        "explanation": "Find the corresponding \\(y\\)-values by substituting into \\(f\\).",
        "workingOut": "f(0) = 0, quad f(3) = 4(27) - 81 = 27"
      },
      {
        "explanation": "Find the second derivative to test the nature of each point.",
        "workingOut": "f''(x) = 24x - 12x^2"
      },
      {
        "explanation": "At \\(x = 0\\), \\(f''(0) = 0\\), so the test is inconclusive. A sign table of \\(f'\\) around \\(x = 0\\) shows \\(f'>0\\) on both sides (\\(f'(-1) = 16\\), \\(f'(1) = 8\\)), so the gradient does not change sign — a horizontal point of inflection.",
        "workingOut": "(0, 0): \\text{ horizontal point of inflection}"
      },
      {
        "explanation": "At \\(x = 3\\), \\(f''(3) = 72 - 108 = -36 < 0\\), indicating concave down, so this is a maximum.",
        "workingOut": "(3, 27): \\text{ maximum turning point}"
      }
    ]
  },
  {
    "id": "dane2020-q21b",
    "topicId": "y12a-3E",
    "c": "3E",
    "t": "Systematic curve sketching with the derivative",
    "source": "Danebank 2020 Trial Q21(b)",
    "type": "teacher_review",
    "difficulty": "medium",
    "q": "Sketch the graph of $f(x) = 4x^3 - x^4$, showing the stationary points and the intercepts on the axes.",
    "a": "Curve with $x$-intercepts at $(0,0)$ and $(4,0)$, a horizontal point of inflection at $(0,0)$, and a maximum turning point at $(3,27)$.",
    "opts": [],
    "h": "Plot the intercepts $(0,0)$ and $(4,0)$, the horizontal POI at $(0,0)$ and the maximum at $(3,27)$, then join smoothly.",
    "s": "Intercepts: $f(x) = x^3(4 - x) = 0$ gives $x = 0$ and $x = 4$. Horizontal point of inflection at $(0, 0)$; maximum turning point at $(3, 27)$. The quartic has a negative leading coefficient, so both ends go down.",
    "solutionSteps": [
      {
        "explanation": "Find the \\(x\\)-intercepts by factorising \\(f(x) = 4x^3 - x^4 = x^3(4 - x)\\) and setting it to zero.",
        "workingOut": "x^3(4 - x) = 0 \\Rightarrow x = 0, 4"
      },
      {
        "explanation": "Recall the key features from part (a): a horizontal point of inflection at \\((0,0)\\) and a maximum at \\((3,27)\\).",
        "workingOut": "(0,0)\\text{ horizontal POI}, quad (3,27)\\text{ max}"
      },
      {
        "explanation": "Note the end behaviour: the leading term \\(-x^4\\) dominates, so \\(f(x) \\to -\\infty\\) as \\(x \\to \\pm\\infty\\).",
        "workingOut": "x \\to \\pm\\infty \\Rightarrow f(x) \\to -\\infty"
      },
      {
        "explanation": "Sketch the curve through all the key points with the correct shape.",
        "workingOut": "",
        "graphData": {
          "jsxGraph": {
            "width": 400,
            "height": 320,
            "boundingbox": [
              -1.5,
              33,
              5,
              -14
            ],
            "boardOptions": {
              "keepaspectratio": false
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-1.5,0],[5,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-14],[0,33]], {strokeColor:'black'});\nboard.create('functiongraph', [function(x){ return 4*Math.pow(x,3) - Math.pow(x,4); }, -1.3, 4.6], {strokeColor:'#1d4ed8',strokeWidth:2});\nboard.create('point', [0,0], {name:'(0, 0)', size:2.5, color:'red', fixed:true, label:{offset:[-16,-12]}});\nboard.create('point', [3,27], {name:'(3, 27)', size:2.5, color:'red', fixed:true, label:{offset:[8,6]}});\nboard.create('point', [4,0], {name:'(4, 0)', size:2.5, color:'red', fixed:true, label:{offset:[6,12]}});\nboard.create('text', [4.6, 1.5, 'x'], {fontSize:13});\nboard.create('text', [0.3, 31, 'y'], {fontSize:13});\nboard.unsuspendUpdate();"
          }
        }
      }
    ]
  },
  {
    "id": "dane2020-q22a",
    "topicId": "y12a-10A",
    "c": "10A",
    "t": "Probability distributions",
    "source": "Danebank 2020 Trial Q22(a)",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "A discrete random variable $X$ has $P(X{=}1)=0.3$, $P(X{=}2)=0.45$, $P(X{=}3)=a$, $P(X{=}4)=b$, and mean $2$. Find two equations in $a$ and $b$.",
    "a": "$a + b = 0.25$ and $3a + 4b = 0.8$",
    "opts": [],
    "h": "Use that probabilities sum to $1$, and that $\\sum x\\,P(x) = \\text{mean}$.",
    "s": "Sum of probabilities: $0.3 + 0.45 + a + b = 1 \\Rightarrow a + b = 0.25$. Mean: $\\sum x P(x) = 0.3 + 0.9 + 3a + 4b = 2 \\Rightarrow 3a + 4b = 0.8$.",
    "solutionSteps": [
      {
        "explanation": "Apply the first property of a probability distribution: all probabilities must sum to \\(1\\).",
        "workingOut": "0.3 + 0.45 + a + b = 1 \\Rightarrow a + b = 0.25"
      },
      {
        "explanation": "Apply the mean (expected value) formula \\(E(X) = \\sum x\\,P(x) = 2\\), computing the known terms \\(1(0.3) + 2(0.45) = 1.2\\).",
        "workingOut": "0.3 + 0.9 + 3a + 4b = 2"
      },
      {
        "explanation": "Simplify to the second equation.",
        "workingOut": "3a + 4b = 0.8"
      }
    ]
  },
  {
    "id": "dane2020-q22b",
    "topicId": "y12a-10A",
    "c": "10A",
    "t": "Probability distributions",
    "source": "Danebank 2020 Trial Q22(b)",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "Hence find the values of $a$ and $b$ (where $a + b = 0.25$ and $3a + 4b = 0.8$).",
    "a": "$a = 0.2$ and $b = 0.05$",
    "opts": [],
    "h": "Multiply the first equation by $3$ and subtract from the second to eliminate $a$.",
    "s": "Multiply $(1)$ by $3$: $3a + 3b = 0.75$. Subtract from $3a + 4b = 0.8$: $b = 0.05$. Then $a = 0.25 - 0.05 = 0.2$.",
    "solutionSteps": [
      {
        "explanation": "Multiply the first equation \\(a + b = 0.25\\) by \\(3\\) so the \\(a\\)-terms match the second equation.",
        "workingOut": "3a + 3b = 0.75"
      },
      {
        "explanation": "Subtract this from \\(3a + 4b = 0.8\\) to eliminate \\(a\\) and solve for \\(b\\).",
        "workingOut": "(3a + 4b) - (3a + 3b) = 0.8 - 0.75 \\Rightarrow b = 0.05"
      },
      {
        "explanation": "Substitute \\(b = 0.05\\) back into \\(a + b = 0.25\\).",
        "workingOut": "a = 0.25 - 0.05 = 0.2"
      }
    ]
  },
  {
    "id": "dane2020-q23",
    "topicId": "y12a-6B",
    "c": "6B",
    "t": "Differentiating the trigonometric functions",
    "source": "Danebank 2020 Trial Q23",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "If $y = x\\sin 2x$, find $\\dfrac{dy}{dx}$.",
    "a": "$\\dfrac{dy}{dx} = 2x\\cos 2x + \\sin 2x$",
    "opts": [],
    "h": "Use the product rule with $u = x$ and $v = \\sin 2x$; remember $\\frac{d}{dx}\\sin 2x = 2\\cos 2x$.",
    "s": "With $u = x$ ($u' = 1$) and $v = \\sin 2x$ ($v' = 2\\cos 2x$): $\\frac{dy}{dx} = uv' + vu' = x(2\\cos 2x) + \\sin 2x = 2x\\cos 2x + \\sin 2x$.",
    "solutionSteps": [
      {
        "explanation": "Identify this as a product of two functions and set up the product rule \\(\\frac{dy}{dx} = uv' + vu'\\).",
        "workingOut": "u = x, quad v = \\sin 2x"
      },
      {
        "explanation": "Differentiate each factor. The derivative of \\(\\sin 2x\\) uses the chain rule, giving \\(2\\cos 2x\\).",
        "workingOut": "u' = 1, quad v' = 2\\cos 2x"
      },
      {
        "explanation": "Apply the product rule and substitute.",
        "workingOut": "\\frac{dy}{dx} = x(2\\cos 2x) + \\sin 2x(1)"
      },
      {
        "explanation": "Simplify.",
        "workingOut": "\\frac{dy}{dx} = 2x\\cos 2x + \\sin 2x"
      }
    ]
  },
  {
    "id": "dane2020-q24a",
    "topicId": "y11a-5F",
    "c": "5F",
    "t": "Composite functions",
    "source": "Danebank 2020 Trial Q24(a)",
    "type": "short_answer",
    "difficulty": "easy",
    "q": "Consider $f(x) = e^x$ and $g(x) = \\ln(x - 2)$. Find the composite function $f(g(x))$.",
    "a": "$f(g(x)) = x - 2$",
    "opts": [],
    "h": "Substitute $g(x)$ into $f$; recall $e^{\\ln A} = A$.",
    "s": "$f(g(x)) = e^{\\ln(x-2)} = x - 2$, since $e$ and $\\ln$ are inverse functions.",
    "solutionSteps": [
      {
        "explanation": "Substitute \\(g(x) = \\ln(x-2)\\) into \\(f(x) = e^x\\) wherever \\(x\\) appears.",
        "workingOut": "f(g(x)) = e^{\\ln(x-2)}"
      },
      {
        "explanation": "Simplify using the inverse relationship \\(e^{\\ln A} = A\\).",
        "workingOut": "f(g(x)) = x - 2"
      }
    ]
  },
  {
    "id": "dane2020-q24b",
    "topicId": "y11a-5F",
    "c": "5F",
    "t": "Composite functions",
    "source": "Danebank 2020 Trial Q24(b)",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "Find, in interval notation, the range of the composite function $f(g(x)) = x - 2$ (where $g(x) = \\ln(x-2)$).",
    "a": "$(0, \\infty)$",
    "opts": [],
    "h": "Although $f(g(x))$ simplifies to $x - 2$, its domain is restricted by $g$; apply that restriction before finding the range.",
    "s": "The natural domain requires $x - 2 > 0$ (from $\\ln(x-2)$), so $x > 2$. For $x > 2$, $y = x - 2 > 0$, so the range is $(0, infty)$.",
    "solutionSteps": [
      {
        "explanation": "Identify the domain restriction inherited from \\(g(x) = \\ln(x-2)\\): the logarithm requires a positive argument.",
        "workingOut": "x - 2 > 0 \\Rightarrow x > 2"
      },
      {
        "explanation": "Apply this restriction to the simplified composite \\(y = x - 2\\). As \\(x\\) ranges over \\((2, infty)\\), compute the resulting \\(y\\)-values.",
        "workingOut": "x > 2 \\Rightarrow y = x - 2 > 0"
      },
      {
        "explanation": "State the range in interval notation.",
        "workingOut": "\\text{Range} = (0, infty)"
      }
    ]
  },
  {
    "id": "dane2020-q25a",
    "topicId": "y12a-9D",
    "c": "9D",
    "t": "Bivariate data",
    "source": "Danebank 2020 Trial Q25(a)",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "The English marks $x$ and Mathematics marks $y$ for students A–K are: $(67,58),(61,64),(65,66),(67,68),(75,70),(75,72),(69,72),(85,76),(85,80),(89,82),(87,84)$. Calculate the correlation coefficient and describe the nature of the correlation.",
    "a": "$r \\approx 0.9$ — a strong positive correlation.",
    "opts": [],
    "h": "Use the statistics function on a calculator to find $r$; interpret a value near $1$ as strong and positive.",
    "s": "Entering the data into a calculator gives $r \\approx 0.9$. Since $r$ is close to $1$ and positive, there is a strong positive correlation between English and Mathematics marks.",
    "solutionSteps": [
      {
        "explanation": "Enter the eleven \\((x, y)\\) pairs for students A–K into the statistics mode of a calculator and read off Pearson’s correlation coefficient \\(r\\).",
        "workingOut": "r \\approx 0.9"
      },
      {
        "explanation": "Interpret the value: \\(r\\) near \\(+1\\) indicates a strong, positive linear relationship.",
        "workingOut": "r \\approx 0.9 \\Rightarrow \\text{strong positive correlation}"
      }
    ]
  },
  {
    "id": "dane2020-q25b",
    "topicId": "y12a-9E",
    "c": "9E",
    "t": "Line of best fit",
    "source": "Danebank 2020 Trial Q25(b)",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "Find the equation of the least-squares regression line of $y$ on $x$ for students A–K, and estimate the Mathematics mark of student L, whose English mark is $80$.",
    "a": "$y = 0.72x + 18$; estimated Mathematics mark $\\approx 76$",
    "opts": [],
    "h": "Use the calculator’s regression output to get the gradient and intercept, then substitute $x = 80$.",
    "s": "The least-squares line is $y = 0.72x + 18$. For student L with $x = 80$: $y = 0.72(80) + 18 = 75.6 \\approx 76$.",
    "solutionSteps": [
      {
        "explanation": "Use the linear regression function on the calculator to obtain the gradient and \\(y\\)-intercept of the least-squares line \\(y = bx + a\\).",
        "workingOut": "b = 0.72, quad a = 18 \\Rightarrow y = 0.72x + 18"
      },
      {
        "explanation": "Substitute student L’s English mark \\(x = 80\\) into the regression equation.",
        "workingOut": "y = 0.72(80) + 18"
      },
      {
        "explanation": "Evaluate and round to a whole mark.",
        "workingOut": "y = 75.6 \\approx 76"
      }
    ]
  },
  {
    "id": "dane2020-q26",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of e^x",
    "source": "Danebank 2020 Trial Q26",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "If \\(y=\\dfrac{e^{x}}{x+1}\\), find \\(\\dfrac{dy}{dx}\\).",
    "a": 1,
    "opts": [
      "\\(\\dfrac{e^{x}}{(x+1)^{2}}\\)",
      "\\(\\dfrac{xe^{x}}{(x+1)^{2}}\\)",
      "\\(\\dfrac{e^{x}(x+1)}{(x+1)^{2}}\\)",
      "\\(\\dfrac{(x+1)e^{x}-e^{x}}{x+1}\\)"
    ],
    "h": "The function is a quotient \\(y=\\dfrac{e^{x}}{x+1}\\). Use the quotient rule \\(\\dfrac{dy}{dx}=\\dfrac{vu'-uv'}{v^{2}}\\). Se",
    "s": "\\(u=e^{x},\\quad v=x+1\\) ; \\(u'=e^{x},\\quad v'=1\\) ; \\(\\dfrac{(x+1)e^{x}-e^{x}}{(x+1)^{2}}\\) ; \\(\\dfrac{e^{x}(x+1-1)}{(x+1)^{2}}\\) ; \\(\\dfrac{xe^{x}}{(x+1)^{2}}\\)",
    "solutionSteps": [
      {
        "explanation": "The function is a quotient \\(y=\\dfrac{e^{x}}{x+1}\\). Use the quotient rule \\(\\dfrac{dy}{dx}=\\dfrac{vu'-uv'}{v^{2}}\\). Set numerator \\(u=e^{x}\\) and denominator \\(v=x+1\\).",
        "workingOut": "\\(u=e^{x},\\quad v=x+1\\)",
        "graphData": null
      },
      {
        "explanation": "Differentiate each piece: \\(u'=e^{x}\\) (exponential is its own derivative). For the denominator, \\(v'=1\\).",
        "workingOut": "\\(u'=e^{x},\\quad v'=1\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute into the quotient rule carefully: numerator is \\(v u'-u v'=(x+1)e^{x}-e^{x}\\cdot 1\\), denominator is \\((x+1)^{2}\\).",
        "workingOut": "\\(\\dfrac{(x+1)e^{x}-e^{x}}{(x+1)^{2}}\\)",
        "graphData": null
      },
      {
        "explanation": "Factor \\(e^{x}\\) from the numerator: \\(e^{x}\\bigl((x+1)-1\\bigr)=e^{x}\\cdot x=xe^{x}\\).",
        "workingOut": "\\(\\dfrac{e^{x}(x+1-1)}{(x+1)^{2}}\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify: \\(\\dfrac{dy}{dx}=\\dfrac{xe^{x}}{(x+1)^{2}}\\).",
        "workingOut": "\\(\\dfrac{xe^{x}}{(x+1)^{2}}\\)",
        "graphData": null
      }
    ],
    "question": "If \\(y=\\dfrac{e^{x}}{x+1}\\), find \\(\\dfrac{dy}{dx}\\).",
    "answer": "1",
    "hint": "The function is a quotient \\(y=\\dfrac{e^{x}}{x+1}\\). Use the quotient rule \\(\\dfrac{dy}{dx}=\\dfrac{vu'-uv'}{v^{2}}\\). Se",
    "solution": "The function is a quotient \\(y=\\dfrac{e^{x}}{x+1}\\). Use the quotient rule \\(\\dfrac{dy}{dx}=\\dfrac{vu'-uv'}{v^{2}}\\). Set numerator \\(u=e^{x}\\) and denominator \\(v=x+1\\). Differentiate each piece: \\(u'=e^{x}\\) (exponential is its own derivative). For the denominator, \\(v'=1\\). Substitute into the quotient rule carefully: numerator is \\(v u'-u v'=(x+1)e^{x}-e^{x}\\cdot 1\\), denominator is \\((x+1)^{2}\\). Factor \\(e^{x}\\) from the numerator: \\(e^{x}\\bigl((x+1)-1\\bigr)=e^{x}\\cdot x=xe^{x}\\). Simplify: \\(\\dfrac{dy}{dx}=\\dfrac{xe^{x}}{(x+1)^{2}}\\)."
  },
  {
    "id": "dane2020-q27",
    "topicId": "y12a-6D",
    "c": "6D",
    "t": "Integrating the trigonometric functions",
    "source": "Danebank 2020 Trial Q27",
    "type": "short_answer",
    "difficulty": "easy",
    "q": "Find $\\displaystyle\\int \\cos 4x - \\sin x\\ dx$.",
    "a": "$\\dfrac{1}{4}\\sin 4x + \\cos x + C$",
    "opts": [],
    "h": "Integrate each term: $\\int \\cos 4x\\,dx = \\frac{1}{4}\\sin 4x$ and $\\int -\\sin x\\,dx = \\cos x$.",
    "s": "$\\int \\cos 4x\\,dx = \\frac{1}{4}\\sin 4x$ and $\\int -\\sin x\\,dx = \\cos x$. So the integral is $\\frac{1}{4}\\sin 4x + \\cos x + C$.",
    "solutionSteps": [
      {
        "explanation": "Integrate \\(\\cos 4x\\). The primitive of \\(\\cos(ax)\\) is \\(\\frac{1}{a}\\sin(ax)\\), with \\(a = 4\\).",
        "workingOut": "\\int \\cos 4x\\,dx = \\frac{1}{4}\\sin 4x"
      },
      {
        "explanation": "Integrate \\(-\\sin x\\). Since \\(\\int \\sin x\\,dx = -\\cos x\\), the negative makes it \\(+\\cos x\\).",
        "workingOut": "\\int -\\sin x\\,dx = \\cos x"
      },
      {
        "explanation": "Combine the results and add the constant of integration.",
        "workingOut": "\\frac{1}{4}\\sin 4x + \\cos x + C"
      }
    ]
  },
  {
    "id": "dane2020-q28",
    "topicId": "y12a-1H",
    "c": "1H",
    "t": "The limiting sum of a geometric series",
    "source": "Danebank 2020 Trial Q28",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "Find, in simplest form, the limiting sum of the series $\\sin^2 x + \\sin^4 x + \\sin^6 x + \\cdots$ for $0 < x < \\dfrac{\\pi}{2}$.",
    "a": "$\\tan^2 x$",
    "opts": [],
    "h": "This is geometric with first term $a = \\sin^2 x$ and ratio $r = \\sin^2 x$; use $S_\\infty = \\frac{a}{1-r}$ and the identity $1 - \\sin^2 x = \\cos^2 x$.",
    "s": "Here $a = \\sin^2 x$ and $r = \\sin^2 x$ (with $0 < r < 1$). $S_\\infty = \\frac{\\sin^2 x}{1 - \\sin^2 x} = \\frac{\\sin^2 x}{\\cos^2 x} = \\tan^2 x$.",
    "solutionSteps": [
      {
        "explanation": "Recognise the series as geometric: each term is the previous one multiplied by \\(\\sin^2 x\\). Identify the first term and common ratio.",
        "workingOut": "a = \\sin^2 x, quad r = \\sin^2 x"
      },
      {
        "explanation": "Since \\(0 < x < \\frac{\\pi}{2}\\), \\(0 < \\sin^2 x < 1\\), so a limiting sum exists. Apply \\(S_\\infty = \\frac{a}{1 - r}\\).",
        "workingOut": "S_\\infty = \\frac{\\sin^2 x}{1 - \\sin^2 x}"
      },
      {
        "explanation": "Use the Pythagorean identity \\(1 - \\sin^2 x = \\cos^2 x\\) in the denominator.",
        "workingOut": "= \\frac{\\sin^2 x}{\\cos^2 x}"
      },
      {
        "explanation": "Simplify to a single trig function.",
        "workingOut": "= \\tan^2 x"
      }
    ]
  },
  {
    "id": "dane2020-q29a",
    "topicId": "y12a-3G",
    "c": "3G",
    "t": "Applications of maximisation and minimisation",
    "source": "Danebank 2020 Trial Q29(a)",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "A closed metal crate of fixed volume $9\\text{ m}^3$ is a rectangular prism with length $2x$ m, width $x$ m and height $h$ m. Show that the surface area is $A = 4x^2 + \\dfrac{27}{x}$.",
    "a": "$A = 4x^2 + \\dfrac{27}{x}$",
    "opts": [],
    "graphData": {
      "jsxGraph": {
        "width": 360,
        "height": 300,
        "boundingbox": [
          -1.5,
          5,
          7.5,
          -2
        ],
        "boardOptions": {
          "keepaspectratio": true
        },
        "script": "board.suspendUpdate();\nvar dx=1.6, dy=1.1;\nvar A=[0,0],B=[4,0],C=[4,2],D=[0,2];\nvar E=[dx,dy],F=[4+dx,dy],G=[4+dx,2+dy],H=[dx,2+dy];\nfunction seg(p,q,o){ board.create('segment',[p,q],o||{strokeColor:'black'}); }\nseg(A,B);seg(B,C);seg(C,D);seg(D,A);\nseg(E,F,{strokeColor:'#94a3b8',dash:2});seg(F,G);seg(G,H);seg(H,E,{strokeColor:'#94a3b8',dash:2});\nseg(A,E,{strokeColor:'#94a3b8',dash:2});seg(B,F);seg(C,G);seg(D,H);\nboard.create('text',[1.8,-1,'2x'],{fontSize:13});\nboard.create('text',[4.5,2.5,'h'],{fontSize:13});\nboard.create('text',[4.75,0.4,'x'],{fontSize:13});\nboard.unsuspendUpdate();"
      }
    },
    "h": "Write the total surface area in terms of $x$ and $h$, then use $V = 2x^2h = 9$ to eliminate $h$.",
    "s": "Surface area: $A = 2(2x\\cdot x) + 2(x\\cdot h) + 2(2x\\cdot h) = 4x^2 + 6xh$. Volume: $2x^2h = 9 \\Rightarrow h = \\frac{9}{2x^2}$. Substituting: $A = 4x^2 + 6x\\cdot\\frac{9}{2x^2} = 4x^2 + \\frac{27}{x}$.",
    "solutionSteps": [
      {
        "explanation": "Write the total surface area of the closed box: two faces of each pair (top/bottom, two sides, two ends).",
        "workingOut": "A = 2(2x \\cdot x) + 2(x \\cdot h) + 2(2x \\cdot h)"
      },
      {
        "explanation": "Simplify the surface-area expression.",
        "workingOut": "A = 4x^2 + 2xh + 4xh = 4x^2 + 6xh"
      },
      {
        "explanation": "Use the fixed volume to express \\(h\\) in terms of \\(x\\).",
        "workingOut": "V = 2x^2 h = 9 \\Rightarrow h = \\frac{9}{2x^2}"
      },
      {
        "explanation": "Substitute \\(h\\) into the surface-area formula.",
        "workingOut": "A = 4x^2 + 6x \\cdot \\frac{9}{2x^2}"
      },
      {
        "explanation": "Simplify the second term.",
        "workingOut": "A = 4x^2 + \\frac{27}{x}"
      }
    ]
  },
  {
    "id": "dane2020-q29b",
    "topicId": "y12a-3G",
    "c": "3G",
    "t": "Applications of maximisation and minimisation",
    "source": "Danebank 2020 Trial Q29(b)",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "Hence find the minimum area of metal required for the crate, where $A = 4x^2 + \\dfrac{27}{x}$.",
    "a": "$27 \\text{ m}^2$ (at $x = 1.5$ m)",
    "opts": [],
    "h": "Differentiate $A$, set $A' = 0$ to find $x$, confirm a minimum with $A''$, then evaluate $A$.",
    "s": "$A' = 8x - \\frac{27}{x^2} = 0 \\Rightarrow 8x^3 = 27 \\Rightarrow x = \\frac{3}{2}$. $A'' = 8 + \\frac{54}{x^3} = 24 > 0$, confirming a minimum. $A = 4(1.5)^2 + \\frac{27}{1.5} = 9 + 18 = 27 \\text{ m}^2$.",
    "solutionSteps": [
      {
        "explanation": "Differentiate \\(A = 4x^2 + 27x^{-1}\\) with respect to \\(x\\).",
        "workingOut": "A' = 8x - 27x^{-2} = 8x - \\frac{27}{x^2}"
      },
      {
        "explanation": "Set \\(A' = 0\\) to find the stationary point.",
        "workingOut": "8x - \\frac{27}{x^2} = 0 \\Rightarrow 8x^3 = 27"
      },
      {
        "explanation": "Solve for \\(x\\).",
        "workingOut": "x^3 = \\frac{27}{8} \\Rightarrow x = \\frac{3}{2}"
      },
      {
        "explanation": "Confirm it is a minimum using the second derivative.",
        "workingOut": "A'' = 8 + \\frac{54}{x^3}; \\quad A''(1.5) = 24 > 0 \\Rightarrow \\text{min}"
      },
      {
        "explanation": "Substitute \\(x = 1.5\\) into \\(A\\) to find the minimum area.",
        "workingOut": "A = 4(1.5)^2 + \\frac{27}{1.5} = 9 + 18 = 27 \\text{ m}^2"
      }
    ]
  },
  {
    "id": "dane2020-q30",
    "topicId": "y12a-2H",
    "c": "2H",
    "t": "Combinations of transformations",
    "source": "Danebank 2020 Trial Q30",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "The function $f(x) = x^2$ is transformed into a new function whose graph (shown) is a downward parabola with vertex $(-1, -3)$ passing through $(0, -5)$. Find the equation of the new function in the form $g(x) = k\\,f(x + b) + c$.",
    "a": "$g(x) = -2f(x + 1) - 3$",
    "opts": [],
    "graphData": {
      "jsxGraph": {
        "width": 360,
        "height": 320,
        "boundingbox": [
          -5,
          2,
          3,
          -9
        ],
        "boardOptions": {
          "keepaspectratio": false
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-5,0],[3,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-9],[0,2]], {strokeColor:'black'});\nboard.create('functiongraph', [function(x){ return -2*Math.pow(x+1,2) - 3; }, -3.2, 1.2], {strokeColor:'#1d4ed8',strokeWidth:2});\nboard.create('point', [-1,-3], {name:'(-1, -3)', size:2.5, color:'red', fixed:true, label:{offset:[8,8]}});\nboard.create('point', [0,-5], {name:'-5', size:2.5, color:'red', fixed:true, label:{offset:[8,0]}});\nboard.create('text', [2.6, 0.4, 'x'], {fontSize:13});\nboard.create('text', [0.25, 1.6, 'y'], {fontSize:13});\nboard.unsuspendUpdate();"
      }
    },
    "h": "The vertex shift gives $b$ and $c$; substitute the point $(0, -5)$ to solve for $k$.",
    "s": "The vertex moved from $(0,0)$ to $(-1,-3)$: left $1$ (so $x \\to x+1$, $b = 1$) and down $3$ ($c = -3$). So $g(x) = k\\,f(x+1) - 3$. Using $(0, -5)$: $-5 = k\\,f(1) - 3 = k(1) - 3$, so $k = -2$. Thus $g(x) = -2f(x+1) - 3$.",
    "solutionSteps": [
      {
        "explanation": "Determine the horizontal and vertical shifts from the vertex moving from \\((0,0)\\) to \\((-1,-3)\\): \\(1\\) unit left and \\(3\\) units down.",
        "workingOut": "x \\to x + 1 \\;(b = 1), quad c = -3"
      },
      {
        "explanation": "Write the partial form with the shifts in place.",
        "workingOut": "g(x) = k\\,f(x + 1) - 3"
      },
      {
        "explanation": "Use the known point \\((0, -5)\\) on the graph, noting \\(f(1) = 1^2 = 1\\).",
        "workingOut": "-5 = k\\,f(1) - 3 = k(1) - 3"
      },
      {
        "explanation": "Solve for the vertical dilation factor \\(k\\).",
        "workingOut": "-5 = k - 3 \\Rightarrow k = -2"
      },
      {
        "explanation": "State the final transformed function.",
        "workingOut": "g(x) = -2f(x + 1) - 3"
      }
    ]
  },
  {
    "id": "dane2020-q31",
    "topicId": "y11a-11B",
    "c": "11B",
    "t": "Solving trigonometric equations",
    "source": "Danebank 2020 Trial Q31",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "Solve $2\\sin(3\\theta) = 1$ for $0 \\leq \\theta \\leq \\pi$.",
    "a": "$\\theta = \\dfrac{\\pi}{18}, \\dfrac{5\\pi}{18}, \\dfrac{13\\pi}{18}, \\dfrac{17\\pi}{18}$",
    "opts": [],
    "h": "First expand the domain: if $0 \\leq \\theta \\leq \\pi$ then $0 \\leq 3\\theta \\leq 3\\pi$. Solve for $3\\theta$ first, then divide by $3$.",
    "s": "$\\sin 3\\theta = \\frac{1}{2}$. Over $0 \\leq 3\\theta \\leq 3\\pi$, the solutions are $3\\theta = \\frac{\\pi}{6}, frac{5\\pi}{6}, frac{13\\pi}{6}, frac{17\\pi}{6}$. Dividing by $3$: $\\theta = \\frac{\\pi}{18}, frac{5\\pi}{18}, frac{13\\pi}{18}, frac{17\\pi}{18}$.",
    "solutionSteps": [
      {
        "explanation": "Isolate the sine function.",
        "workingOut": "\\sin 3\\theta = \\frac{1}{2}"
      },
      {
        "explanation": "Expand the domain to match the argument \\(3\\theta\\): multiply the bounds of \\(\\theta\\) by \\(3\\).",
        "workingOut": "0 \\leq \\theta \\leq \\pi \\Rightarrow 0 \\leq 3\\theta \\leq 3\\pi"
      },
      {
        "explanation": "Sine is \\(\\frac{1}{2}\\) at the reference angle \\(\\frac{\\pi}{6}\\), in the 1st and 2nd quadrants. List all values of \\(3\\theta\\) in \\([0, 3\\pi]\\) by adding \\(2\\pi\\) to each base solution.",
        "workingOut": "3\\theta = \\frac{\\pi}{6}, frac{5\\pi}{6}, frac{13\\pi}{6}, frac{17\\pi}{6}"
      },
      {
        "explanation": "Check that the next candidates \\(\\frac{25\\pi}{6}\\) and \\(\\frac{29\\pi}{6}\\) exceed \\(3\\pi\\) and are rejected.",
        "workingOut": "\\frac{25\\pi}{6}, frac{29\\pi}{6} > 3\\pi \\;\\text{(rejected)}"
      },
      {
        "explanation": "Divide every solution by \\(3\\) to find \\(\\theta\\).",
        "workingOut": "\\theta = \\frac{\\pi}{18}, frac{5\\pi}{18}, frac{13\\pi}{18}, frac{17\\pi}{18}"
      }
    ]
  },
  {
    "id": "dane2020-q32a",
    "topicId": "y12a-2I",
    "c": "2I",
    "t": "Trigonometric graphs",
    "source": "Danebank 2020 Trial Q32(a)",
    "type": "teacher_review",
    "difficulty": "medium",
    "q": "On the same diagram, draw the graphs of $y = \\cos \\pi x$ and $y = 1 - |x|$ for $-3 \\leq x \\leq 3$.",
    "a": "A cosine wave of amplitude $1$ and period $2$, together with an inverted-V (absolute value) graph peaking at $(0, 1)$ with $x$-intercepts at $(\\pm 1, 0)$.",
    "opts": [],
    "h": "$y = \\cos\\pi x$ has period $\\frac{2\\pi}{\\pi} = 2$ and amplitude $1$; $y = 1 - |x|$ is a \"$\\wedge$\" shape with apex $(0,1)$.",
    "s": "$y = \\cos\\pi x$ oscillates between $1$ and $-1$ with period $2$ (equals $1$ at even integers, $-1$ at odd integers). $y = 1 - |x|$ is a downward V with vertex $(0,1)$, crossing the $x$-axis at $\\pm 1$ and reaching $-2$ at $x = \\pm 3$.",
    "solutionSteps": [
      {
        "explanation": "Describe \\(y = \\cos\\pi x\\): amplitude \\(1\\), period \\(\\frac{2\\pi}{\\pi} = 2\\). It equals \\(1\\) at \\(x = 0, pm 2\\) and \\(-1\\) at \\(x = \\pm 1, pm 3\\).",
        "workingOut": "y = \\cos\\pi x: \\text{ period } 2, text{ amplitude } 1"
      },
      {
        "explanation": "Describe \\(y = 1 - |x|\\): a V-shape opening downward with apex at \\((0, 1)\\) and gradient \\(\\mp 1\\).",
        "workingOut": "y = 1 - |x|: \\text{ apex } (0,1), text{ x-ints } (\\pm 1, 0)"
      },
      {
        "explanation": "Draw both on the same axes over \\(-3 \\leq x \\leq 3\\).",
        "workingOut": "",
        "graphData": {
          "jsxGraph": {
            "width": 440,
            "height": 300,
            "boundingbox": [
              -3.5,
              1.8,
              3.5,
              -2.6
            ],
            "boardOptions": {
              "keepaspectratio": false
            },
            "script": "board.suspendUpdate();\nboard.create('arrow', [[-3.5,0],[3.5,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-2.6],[0,1.8]], {strokeColor:'black'});\nboard.create('functiongraph', [function(x){ return Math.cos(Math.PI*x); }, -3, 3], {strokeColor:'#1d4ed8',strokeWidth:2});\nboard.create('functiongraph', [function(x){ return 1 - Math.abs(x); }, -3, 3], {strokeColor:'#15803d',strokeWidth:2});\nfor (var k=-3;k<=3;k++){ if(k!==0) board.create('text',[k-0.1,-0.3,''+k],{fontSize:10}); }\nboard.create('text', [2.4, 1.4, 'y = cos\\u03c0x'], {fontSize:11, strokeColor:'#1d4ed8'});\nboard.create('text', [1.3, -1.9, 'y = 1 - |x|'], {fontSize:11, strokeColor:'#15803d'});\nboard.create('text', [3.3, 0.35, 'x'], {fontSize:13});\nboard.create('text', [0.25, 1.6, 'y'], {fontSize:13});\nboard.unsuspendUpdate();"
          }
        }
      }
    ]
  },
  {
    "id": "dane2020-q32b",
    "topicId": "y12a-2E",
    "c": "2E",
    "t": "Using graphs to solve equations and inequations",
    "source": "Danebank 2020 Trial Q32(b)",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "Hence find the number of solutions of the equation $\\cos \\pi x = 1 - |x|$ in the domain $(-\\infty, infty)$.",
    "a": "$5$ solutions",
    "opts": [],
    "h": "The solutions are the intersections of the two graphs. Outside $[-1, 1]$ the line drops below $-1$, where cosine cannot reach, so count intersections only near the centre.",
    "s": "The number of solutions equals the number of intersection points of $y = \\cos\\pi x$ and $y = 1 - |x|$. For $|x| > 2$, $1 - |x| < -1$, below the range of cosine, so no intersections occur there. Counting the intersections gives $5$ solutions.",
    "solutionSteps": [
      {
        "explanation": "Each solution of the equation corresponds to a point where the two graphs cross. Use the diagram from part (a).",
        "workingOut": "\\cos\\pi x = 1 - |x| \\iff \\text{graphs intersect}"
      },
      {
        "explanation": "Note that \\(\\cos\\pi x \\in [-1, 1]\\), while \\(1 - |x| < -1\\) once \\(|x| > 2\\). So all intersections must lie in \\(-2 \\leq x \\leq 2\\).",
        "workingOut": "1 - |x| < -1 \\text{ for } |x| > 2"
      },
      {
        "explanation": "Count the intersection points within this region from the sketch.",
        "workingOut": "\\text{5 points of intersection} \\Rightarrow 5 \\text{ solutions}"
      }
    ]
  },
  {
    "id": "dane2020-q33a",
    "topicId": "y12a-4A",
    "c": "4A",
    "t": "Areas and the definite integral",
    "source": "Danebank 2020 Trial Q33(a)",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "The graph of $y = f(x)$ consists of a quarter circle $AB$ (from $A(0,2)$ to $B(2,0)$), a straight segment $BC$ (to $C(4,-2)$), a horizontal segment $CD$ (to $D(6,-2)$) and a quarter circle $DE$ (to $E(8,0)$). Evaluate $\\displaystyle\\int_0^8 f(x)\\,dx$.",
    "a": "$-6$",
    "opts": [],
    "graphData": {
      "jsxGraph": {
        "width": 440,
        "height": 280,
        "boundingbox": [
          -1,
          3,
          9,
          -3.5
        ],
        "boardOptions": {
          "keepaspectratio": true
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-1,0],[9,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-3.5],[0,3]], {strokeColor:'black'});\nboard.create('arc', [[0,0],[2,0],[0,2]], {strokeColor:'#1d4ed8', strokeWidth:2});\nboard.create('segment', [[2,0],[4,-2]], {strokeColor:'#1d4ed8', strokeWidth:2});\nboard.create('segment', [[4,-2],[6,-2]], {strokeColor:'#1d4ed8', strokeWidth:2});\nboard.create('arc', [[8,-2],[6,-2],[8,0]], {strokeColor:'#1d4ed8', strokeWidth:2});\nboard.create('point', [0,2], {name:'A', size:2, color:'#475569', fixed:true, label:{offset:[-12,4]}});\nboard.create('point', [2,0], {name:'B', size:2, color:'#475569', fixed:true, label:{offset:[2,12]}});\nboard.create('point', [4,-2], {name:'C', size:2, color:'#475569', fixed:true, label:{offset:[-2,-12]}});\nboard.create('point', [6,-2], {name:'D', size:2, color:'#475569', fixed:true, label:{offset:[2,-12]}});\nboard.create('point', [8,0], {name:'E', size:2, color:'#475569', fixed:true, label:{offset:[6,8]}});\nboard.create('text', [8.6, 0.4, 'x'], {fontSize:13});\nboard.create('text', [0.3, 2.7, 'y'], {fontSize:13});\nboard.unsuspendUpdate();"
      }
    },
    "h": "Split the integral into the four pieces; areas below the $x$-axis count as negative. Use circle and triangle/rectangle area formulas.",
    "s": "Quarter circle $AB$ (radius $2$, above axis): $+\\frac{1}{4}\\pi(2)^2 = \\pi$. Triangle $BC$ (below): $-\\frac{1}{2}(2)(2) = -2$. Rectangle $CD$ (below): $-(2)(2) = -4$. Quarter circle $DE$ (below): $-\\frac{1}{4}\\pi(2)^2 = -\\pi$. Total: $\\pi - 2 - 4 - \\pi = -6$.",
    "solutionSteps": [
      {
        "explanation": "A definite integral equals signed area: regions above the \\(x\\)-axis count positive, regions below count negative. Split the path into the four geometric pieces \\(AB\\), \\(BC\\), \\(CD\\), and \\(DE\\).",
        "workingOut": "\\displaystyle\\int_0^8 f(x)\\,dx = [AB] + [BC] + [CD] + [DE]"
      },
      {
        "explanation": "Piece \\(AB\\): quarter circle of radius \\(2\\) centred at the origin, from \\(A(0,2)\\) to \\(B(2,0)\\), entirely above the \\(x\\)-axis. Area of a full circle is \\(\\pi r^2\\), so a quarter is \\(\\tfrac14\\pi r^2\\).",
        "workingOut": "[AB] = +\\dfrac{1}{4}\\pi(2)^2 = +\\dfrac{1}{4}\\pi\\cdot 4 = +\\pi"
      },
      {
        "explanation": "Piece \\(BC\\): straight line from \\(B(2,0)\\) to \\(C(4,-2)\\), entirely below the \\(x\\)-axis. The region between this line and the \\(x\\)-axis is a right triangle with base \\(4-2=2\\) and height \\(2\\). Signed area is negative.",
        "workingOut": "[BC] = -\\dfrac{1}{2}\\times 2\\times 2 = -2"
      },
      {
        "explanation": "Piece \\(CD\\): horizontal segment from \\(C(4,-2)\\) to \\(D(6,-2)\\), so \\(y=-2\\) for \\(4\\le x\\le 6\\). This is a rectangle of width \\(6-4=2\\) and height \\(2\\), fully below the axis.",
        "workingOut": "[CD] = -(2)\\times(2) = -4"
      },
      {
        "explanation": "Piece \\(DE\\): quarter circle of radius \\(2\\) from \\(D(6,-2)\\) to \\(E(8,0)\\) (centre \\((8,-2)\\)), entirely below the \\(x\\)-axis. Same area magnitude as \\(AB\\), but signed negative.",
        "workingOut": "[DE] = -\\dfrac{1}{4}\\pi(2)^2 = -\\pi"
      },
      {
        "explanation": "Add the four signed areas. The \\(+\\pi\\) and \\(-\\pi\\) cancel, leaving the triangular and rectangular contributions.",
        "workingOut": "\\pi + (-2) + (-4) + (-\\pi) = \\pi - 2 - 4 - \\pi = -6"
      },
      {
        "explanation": "Therefore \\(\\displaystyle\\int_0^8 f(x)\\,dx = -6\\). (Net area below the axis exceeds the area above.)",
        "workingOut": "-6"
      }
    ]
  },
  {
    "id": "dane2020-q33b",
    "topicId": "y11a-9A",
    "c": "9A",
    "t": "Tangents and the derivative",
    "source": "Danebank 2020 Trial Q33(b)",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "For the graph of $y = f(x)$ in Q33, for what values of $x$ in the domain $0 < x < 8$ is the function NOT differentiable?",
    "a": "$x = 2$ and $x = 4$",
    "opts": [],
    "h": "A function fails to be differentiable where the graph has a sharp corner (the gradient changes abruptly).",
    "s": "A function must be smooth (and continuous) to be differentiable. The graph has sharp corners at $B(2, 0)$ and $C(4, -2)$, so it is not differentiable at $x = 2$ and $x = 4$.",
    "solutionSteps": [
      {
        "explanation": "Recall that differentiability requires the curve to be smooth — no sharp corners or breaks — so the tangent gradient is well defined.",
        "workingOut": "\\text{differentiable} \\Rightarrow \\text{smooth and continuous}"
      },
      {
        "explanation": "Locate the corners on the graph: where the quarter circle meets the line at \\(B\\), and where the line meets the horizontal segment at \\(C\\). At \\(D\\) the horizontal segment meets the quarter circle smoothly (tangent), so it is differentiable there.",
        "workingOut": "\\text{corners at } B(2,0) \\text{ and } C(4,-2)"
      },
      {
        "explanation": "State the \\(x\\)-values where the function is not differentiable.",
        "workingOut": "x = 2 \\text{ and } x = 4"
      }
    ]
  },
  {
    "id": "dane2020-q34a",
    "topicId": "y12a-8B",
    "c": "8B",
    "t": "Financial applications of geometric series",
    "source": "Danebank 2020 Trial Q34(a)",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "Using the future-value table (the factor for $n = 6$ periods at $2\\%$ is $6.3081$), an annuity has contributions of $1200 at the end of each half-year for $3$ years at $4\\%$ p.a. compounding half-yearly. Calculate the final amount immediately after the last contribution.",
    "a": "$7569.72",
    "opts": [],
    "h": "Per period: rate $= 4\\% \\div 2 = 2\\%$, number of periods $= 3 \\times 2 = 6$. Multiply the contribution by the table factor.",
    "s": "There are $n = 3 \\times 2 = 6$ half-yearly periods at $r = 4\\% \\div 2 = 2\\%$ per period. The future-value factor is $6.3081$, so $FV = 1200 \\times 6.3081 = \\$7569.72$.",
    "solutionSteps": [
      {
        "explanation": "Convert the annual terms to per-period terms: the half-yearly rate is \\(4\\% \\div 2 = 2\\%\\), and over \\(3\\) years there are \\(3 \\times 2 = 6\\) compounding periods.",
        "workingOut": "r = 2\\%, quad n = 6"
      },
      {
        "explanation": "Look up the future-value interest factor for \\(n = 6\\) at \\(2\\%\\) from the table.",
        "workingOut": "\\text{factor} = 6.3081"
      },
      {
        "explanation": "Multiply the regular contribution by the factor.",
        "workingOut": "FV = 1200 \\times 6.3081 = $7569.72"
      }
    ]
  },
  {
    "id": "dane2020-q34b",
    "topicId": "y12a-8C",
    "c": "8C",
    "t": "Simple and compound interest",
    "source": "Danebank 2020 Trial Q34(b)",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "Calculate the single lump sum that would need to be invested at the start to reach the same final amount ($7569.72) at the end of $3$ years at $4\\%$ p.a. compounding half-yearly.",
    "a": "$6721.69",
    "opts": [],
    "h": "Use $A = P(1+r)^n$ with $A = 7569.72$, $r = 0.02$, $n = 6$, and solve for $P$.",
    "s": "Using $A = P(1+r)^n$ with $A = 7569.72$, $r = 0.02$, $n = 6$: $7569.72 = P(1.02)^6$, so $P = \\frac{7569.72}{(1.02)^6} = \\$6721.69$.",
    "solutionSteps": [
      {
        "explanation": "Apply the compound interest formula for a single lump sum, with the same per-period rate and number of periods.",
        "workingOut": "A = P(1 + r)^n"
      },
      {
        "explanation": "Substitute the target amount, \\(r = 0.02\\) and \\(n = 6\\).",
        "workingOut": "7569.72 = P(1.02)^6"
      },
      {
        "explanation": "Solve for \\(P\\) by dividing.",
        "workingOut": "P = \\frac{7569.72}{(1.02)^6}"
      },
      {
        "explanation": "Evaluate to the nearest cent.",
        "workingOut": "P = $6721.69"
      }
    ]
  },
  {
    "id": "dane2020-q35",
    "topicId": "y12a-6B",
    "c": "6B",
    "t": "Differentiating the trigonometric functions",
    "source": "Danebank 2020 Trial Q35",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "If $y = \\tan^2 x$, find the values of the constants $a$ and $b$ such that $\\dfrac{d^2y}{dx^2} = ay^2 + by + 2$.",
    "a": "$a = 6$ and $b = 8$",
    "opts": [],
    "h": "Differentiate twice, expressing everything in terms of $\\tan x$ using $\\sec^2 x = 1 + \\tan^2 x$, then compare with $a\\tan^4 x + b\\tan^2 x + 2$.",
    "s": "$y' = 2\\tan x\\sec^2 x = 2\\tan x + 2\\tan^3 x$. Differentiating: $y'' = 2\\sec^2 x + 6\\tan^2 x\\sec^2 x = 2(1+\\tan^2 x) + 6\\tan^2 x(1+\\tan^2 x) = 6\\tan^4 x + 8\\tan^2 x + 2$. Since $y = \\tan^2 x$, $y'' = 6y^2 + 8y + 2$, so $a = 6$, $b = 8$.",
    "solutionSteps": [
      {
        "explanation": "Differentiate \\(y = \\tan^2 x\\) using the chain rule, then rewrite \\(\\sec^2 x = 1 + \\tan^2 x\\) to express in powers of \\(\\tan x\\).",
        "workingOut": "y' = 2\\tan x\\sec^2 x = 2\\tan x(1+\\tan^2 x) = 2\\tan x + 2\\tan^3 x"
      },
      {
        "explanation": "Differentiate again term by term. \\(\\frac{d}{dx}(2\\tan x) = 2\\sec^2 x\\) and \\(\\frac{d}{dx}(2\\tan^3 x) = 6\\tan^2 x\\sec^2 x\\).",
        "workingOut": "y'' = 2\\sec^2 x + 6\\tan^2 x\\sec^2 x"
      },
      {
        "explanation": "Replace each \\(\\sec^2 x\\) with \\(1 + \\tan^2 x\\).",
        "workingOut": "= 2(1+\\tan^2 x) + 6\\tan^2 x(1+\\tan^2 x)"
      },
      {
        "explanation": "Expand and collect like terms in powers of \\(\\tan x\\).",
        "workingOut": "= 2 + 2\\tan^2 x + 6\\tan^2 x + 6\\tan^4 x = 6\\tan^4 x + 8\\tan^2 x + 2"
      },
      {
        "explanation": "Since \\(y = \\tan^2 x\\), we have \\(\\tan^4 x = y^2\\). Match coefficients with \\(ay^2 + by + 2\\).",
        "workingOut": "y'' = 6y^2 + 8y + 2 \\Rightarrow a = 6, \\; b = 8"
      }
    ]
  },
  {
    "id": "dane2020-q36a",
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "source": "Danebank 2020 Trial Q36(a)",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "At time \\(t\\) years after purchase the value of a car is \\(V = 25\\,000e^{-0.5t}\\). Find the loss in value of the car during the third year.",
    "question": "At time \\(t\\) years after purchase the value of a car is \\(V = 25\\,000e^{-0.5t}\\). Find the loss in value of the car during the third year.",
    "a": 1,
    "answer": "1",
    "opts": ["\\(\\$2\\,500\\)","\\(\\$3\\,619\\) (approx.)","\\(\\$5\\,000\\)","\\(\\$9\\,200\\) (approx.)"],
    "h": "The third year runs from \\(t=2\\) to \\(t=3\\). Loss \\(= V(2)-V(3)\\).",
    "s": "Loss \\(= V(2)-V(3)=25\\,000\\bigl(e^{-1}-e^{-1.5}\\bigr)\\approx \\$3\\,619\\).",
    "solution": "Loss \\(= V(2)-V(3)=25\\,000\\bigl(e^{-1}-e^{-1.5}\\bigr)\\approx \\$3\\,619\\).",
    "solutionSteps": [
      {
        "explanation": "The third year of ownership runs from the end of year 2 to the end of year 3, i.e. from \\(t=2\\) to \\(t=3\\). The loss is the fall in value: \\(V(2)-V(3)\\).",
        "workingOut": "\\(\\text{Loss} = V(2) - V(3)\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute into \\(V=25\\,000e^{-0.5t}\\):\n\\(V(2)=25\\,000e^{-0.5\\cdot 2}=25\\,000e^{-1}\\),\n\\(V(3)=25\\,000e^{-0.5\\cdot 3}=25\\,000e^{-1.5}\\).",
        "workingOut": "\\(V(2)=25\\,000e^{-1},\\quad V(3)=25\\,000e^{-1.5}\\)",
        "graphData": null
      },
      {
        "explanation": "Factor out the constant:",
        "workingOut": "\\(\\text{Loss} = 25\\,000\\bigl(e^{-1}-e^{-1.5}\\bigr)\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate numerically (\\(e^{-1}\\approx 0.367879\\), \\(e^{-1.5}\\approx 0.223130\\)):",
        "workingOut": "\\(25\\,000(0.367879 - 0.223130) = 25\\,000\\times 0.144749 \\approx 3\\,618.73\\)",
        "graphData": null
      },
      {
        "explanation": "Therefore the loss during the third year is approximately \\(\\$3\\,619\\) (or \\(\\$3\\,618.73\\) to the nearest cent).",
        "workingOut": "\\(\\text{Loss} \\approx \\$3\\,619\\)",
        "graphData": null
      }
    ]
  ,
    "options": ["\\(\\$2\\,500\\)","\\(\\$3\\,619\\) (approx.)","\\(\\$5\\,000\\)","\\(\\$9\\,200\\) (approx.)"]
  },
  {
    "id": "dane2020-q36b",
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "source": "Danebank 2020 Trial Q36(b)",
    "type": "multiple_choice",
    "difficulty": "hard",
    "q": "For \\(V = 25\\,000e^{-0.5t}\\), find the year in which the car is losing value at a rate of \\(\\$100\\) per year.",
    "question": "For \\(V = 25\\,000e^{-0.5t}\\), find the year in which the car is losing value at a rate of \\(\\"q": "For \\(V = 25\\,000e^{-0.5t}\\), find the year in which the car is losing value at a rate of \\(\\$100\\) per year.",00\\) per year.",
    "a": 2,
    "answer": "2",
    "opts": ["During the 5th year","During the 8th year","During the 10th year","During the 12th year"],
    "h": "Differentiate \\(V\\), set \\(\\left|\\dfrac{dV}{dt}\\right|=100\\), solve for \\(t\\), then interpret the year.",
    "s": "\\(\\dfrac{dV}{dt}=-12\\,500e^{-0.5t}\\). Set \\(12\\,500e^{-0.5t}=100\\Rightarrow t=2\\ln 125\\approx 9.66\\). During the 10th year.",
    "solution": "\\(\\dfrac{dV}{dt}=-12\\,500e^{-0.5t}\\). Set \\(12\\,500e^{-0.5t}=100\\Rightarrow t=2\\ln 125\\approx 9.66\\). During the 10th year.",
    "solutionSteps": [
      {
        "explanation": "Differentiate \\(V=25\\,000e^{-0.5t}\\) using the chain rule (exponent contributes factor \\(-0.5\\)):",
        "workingOut": "\\(\\dfrac{dV}{dt} = 25\\,000\\cdot(-0.5)e^{-0.5t} = -12\\,500e^{-0.5t}\\)",
        "graphData": null
      },
      {
        "explanation": "The rate of loss is the magnitude \\(\\left|\\dfrac{dV}{dt}\\right|=12\\,500e^{-0.5t}\\). Set this equal to 100:",
        "workingOut": "\\(12\\,500e^{-0.5t} = 100\\)",
        "graphData": null
      },
      {
        "explanation": "Divide both sides by 12 500:",
        "workingOut": "\\(e^{-0.5t} = \\dfrac{100}{12\\,500} = 0.008 = \\dfrac{1}{125}\\)",
        "graphData": null
      },
      {
        "explanation": "Take natural log of both sides:",
        "workingOut": "\\(-0.5t = \\ln(0.008) = -\\ln 125\\)",
        "graphData": null
      },
      {
        "explanation": "Solve for \\(t\\):",
        "workingOut": "\\(t = \\dfrac{\\ln 125}{0.5} = 2\\ln 125 \\approx 2\\times 4.8283 \\approx 9.66\\text{ years}\\)",
        "graphData": null
      },
      {
        "explanation": "Since \\(9 < 9.66 < 10\\), this falls during the 10th year of ownership.",
        "workingOut": "\\(\\text{During the 10th year}\\)",
        "graphData": null
      }
    ]
  ,
    "options": ["During the 5th year","During the 8th year","During the 10th year","During the 12th year"]
  },
  {
    "id": "dane2020-q37",
    "topicId": "y12a-8E",
    "c": "8E",
    "t": "Paying off a loan",
    "source": "Danebank 2020 Trial Q37",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "Ozzie retires with $600,000 earning $3\\%$ p.a. compounded monthly. He withdraws $4000 at the end of each month, and the amount after the $n^{\\text{th}}$ withdrawal is $A_n = 600\\,000(1.0025)^n - 4000{1 + 1.0025 + \\cdots + (1.0025)^{n-1}}$. Find, to the nearest month, the time for the fund to halve.",
    "a": "$n \\approx 105$ months ($\\approx 8$ years $9$ months)",
    "opts": [],
    "h": "Sum the geometric bracket, set $A_n = 300\\,000$, and solve for $n$ using logarithms.",
    "s": "The bracket sums to $\\frac{(1.0025)^n - 1}{0.0025}$, so $A_n = 600\\,000(1.0025)^n - 1\\,600\\,000((1.0025)^n - 1)$. Setting $A_n = 300\\,000$: $1\\,000\\,000(1.0025)^n = 1\\,300\\,000$, so $(1.0025)^n = 1.3$ and $n = \\frac{\\ln 1.3}{\\ln 1.0025} \\approx 105.07$, i.e. $\\approx 105$ months $\\approx 8$ years $9$ months.",
    "solutionSteps": [
      {
        "explanation": "Sum the geometric series in the braces (first term \\(1\\), ratio \\(1.0025\\), \\(n\\) terms).",
        "workingOut": "1 + 1.0025 + \\cdots + (1.0025)^{n-1} = \\frac{(1.0025)^n - 1}{0.0025}"
      },
      {
        "explanation": "Substitute into \\(A_n\\) and set it equal to half the initial value, \\(300\\,000\\).",
        "workingOut": "300\\,000 = 600\\,000(1.0025)^n - 1\\,600\\,000((1.0025)^n - 1)"
      },
      {
        "explanation": "Expand and collect the \\((1.0025)^n\\) terms.",
        "workingOut": "300\\,000 = 1\\,600\\,000 - 1\\,000\\,000(1.0025)^n"
      },
      {
        "explanation": "Rearrange to isolate the exponential.",
        "workingOut": "1\\,000\\,000(1.0025)^n = 1\\,300\\,000 \\Rightarrow (1.0025)^n = 1.3"
      },
      {
        "explanation": "Take logarithms of both sides and solve for \\(n\\).",
        "workingOut": "n = \\frac{\\ln 1.3}{\\ln 1.0025} \\approx 105.07"
      },
      {
        "explanation": "Round up to the nearest whole month and convert to years and months.",
        "workingOut": "n \\approx 105 \\text{ months} \\approx 8 \\text{ years } 9 \\text{ months}"
      }
    ]
  },
  {
    "id": "dane2020-q38a",
    "topicId": "y12a-7C",
    "c": "7C",
    "t": "Integrating with respect to time",
    "source": "Danebank 2020 Trial Q38(a)",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "A particle moves in a straight line with acceleration $a = 6t - 12$. Initially it is at rest at the origin $O$. Find expressions for the velocity $v$ and displacement $x$ in terms of $t$.",
    "a": "$v = 3t^2 - 12t$ and $x = t^3 - 6t^2$",
    "opts": [],
    "h": "Integrate acceleration to get $v$ (use $v = 0$ at $t = 0$), then integrate $v$ to get $x$ (use $x = 0$ at $t = 0$).",
    "s": "$v = \\int(6t - 12)\\,dt = 3t^2 - 12t + C$; since $v = 0$ at $t = 0$, $C = 0$, so $v = 3t^2 - 12t$. $x = \\int(3t^2 - 12t)\\,dt = t^3 - 6t^2 + C_1$; since $x = 0$ at $t = 0$, $C_1 = 0$, so $x = t^3 - 6t^2$.",
    "solutionSteps": [
      {
        "explanation": "Integrate the acceleration to find velocity, adding a constant.",
        "workingOut": "v = \\int(6t - 12)\\,dt = 3t^2 - 12t + C"
      },
      {
        "explanation": "Apply the initial condition \"at rest\" (\\(v = 0\\)) at \\(t = 0\\) to find \\(C\\).",
        "workingOut": "t = 0, v = 0 \\Rightarrow C = 0 \\Rightarrow v = 3t^2 - 12t"
      },
      {
        "explanation": "Integrate the velocity to find displacement, adding a constant.",
        "workingOut": "x = \\int(3t^2 - 12t)\\,dt = t^3 - 6t^2 + C_1"
      },
      {
        "explanation": "Apply the initial condition \"at \\(O\\)\" (\\(x = 0\\)) at \\(t = 0\\) to find \\(C_1\\).",
        "workingOut": "t = 0, x = 0 \\Rightarrow C_1 = 0 \\Rightarrow x = t^3 - 6t^2"
      }
    ]
  },
  {
    "id": "dane2020-q38b",
    "topicId": "y12a-7B",
    "c": "7B",
    "t": "Velocity and acceleration as derivatives",
    "source": "Danebank 2020 Trial Q38(b)",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "For the particle with $v = 3t^2 - 12t$ and $x = t^3 - 6t^2$, find when and where the particle is next at rest.",
    "a": "At $t = 4$ s, at $x = -32$ m (32 m to the left of $O$)",
    "opts": [],
    "h": "The particle is at rest when $v = 0$; take the non-zero time and substitute into $x$.",
    "s": "At rest: $3t^2 - 12t = 0 \\Rightarrow 3t(t - 4) = 0$, so $t = 0$ or $t = 4$. The next rest is at $t = 4$. Then $x = 4^3 - 6(4)^2 = 64 - 96 = -32$, so it is $32$ m to the left of $O$.",
    "solutionSteps": [
      {
        "explanation": "The particle is at rest when its velocity is zero. Set \\(v = 0\\) and factorise.",
        "workingOut": "3t^2 - 12t = 0 \\Rightarrow 3t(t - 4) = 0"
      },
      {
        "explanation": "Solve for \\(t\\). Since \\(t = 0\\) is the initial instant, the next rest is at \\(t = 4\\).",
        "workingOut": "t = 0 \\text{ or } t = 4 \\Rightarrow \\text{next at } t = 4 \\text{ s}"
      },
      {
        "explanation": "Substitute \\(t = 4\\) into the displacement to find the position.",
        "workingOut": "x = 4^3 - 6(4)^2 = 64 - 96 = -32"
      },
      {
        "explanation": "Interpret the negative sign: the particle is \\(32\\) m to the left of the origin.",
        "workingOut": "x = -32 \\text{ m (32 m left of } O)"
      }
    ]
  },
  {
    "id": "dane2020-q39a",
    "topicId": "y12a-5J",
    "c": "5J",
    "t": "Applications of integration of the logarithmic function",
    "source": "Danebank 2020 Trial Q39(a)",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "The curve is $y = \\dfrac{e^x - e^{-x}}{e^x + e^{-x}}$. Show that the region bounded by the curve, the $x$-axis and the line $x = k$ ($k > 0$) has area $\\ln\\!\\left(\\dfrac{e^k + e^{-k}}{2}\\right)$.",
    "a": "Area $= \\ln\\!\\left(\\dfrac{e^k + e^{-k}}{2}\\right)$",
    "opts": [],
    "graphData": {
      "jsxGraph": {
        "width": 400,
        "height": 320,
        "boundingbox": [
          -3,
          1.8,
          3,
          -1.8
        ],
        "boardOptions": {
          "keepaspectratio": false
        },
        "script": "board.suspendUpdate();\nboard.create('arrow', [[-3,0],[3,0]], {strokeColor:'black'});\nboard.create('arrow', [[0,-1.8],[0,1.8]], {strokeColor:'black'});\nboard.create('line', [[-3,1],[3,1]], {strokeColor:'#94a3b8', dash:2, straightFirst:false, straightLast:false});\nboard.create('line', [[-3,-1],[3,-1]], {strokeColor:'#94a3b8', dash:2, straightFirst:false, straightLast:false});\nvar f=function(x){ return (Math.exp(x)-Math.exp(-x))/(Math.exp(x)+Math.exp(-x)); };\nboard.create('functiongraph', [f, -3, 3], {strokeColor:'#1d4ed8',strokeWidth:2});\nboard.create('segment', [[1.2,0],[1.2,f(1.2)]], {strokeColor:'#475569', dash:1});\nboard.create('text', [1.35, 0.45, 'x = k'], {fontSize:11});\nboard.create('text', [-2.6, 1.15, 'y = 1'], {fontSize:11});\nboard.create('text', [-2.6, -1.2, 'y = -1'], {fontSize:11});\nboard.create('text', [2.6, 0.35, 'x'], {fontSize:13});\nboard.create('text', [0.25, 1.6, 'y'], {fontSize:13});\nboard.unsuspendUpdate();"
      }
    },
    "h": "The integrand has the form $\\dfrac{f'(x)}{f(x)}$ with $f(x) = e^x + e^{-x}$, so $\\int \\dfrac{f'}{f}\\,dx = \\ln f(x)$.",
    "s": "$A = \\int_0^k \\frac{e^x - e^{-x}}{e^x + e^{-x}}\\,dx$. The numerator is the derivative of the denominator, so $A = [\\ln(e^x + e^{-x})]_0^k = \\ln(e^k + e^{-k}) - \\ln(e^0 + e^0) = \\ln(e^k + e^{-k}) - \\ln 2 = \\ln\\!\\left(\\frac{e^k + e^{-k}}{2}\\right)$.",
    "solutionSteps": [
      {
        "explanation": "Set up the area as the integral of the curve from \\(0\\) to \\(k\\) (the curve is positive for \\(x > 0\\)).",
        "workingOut": "A = \\int_0^k \\frac{e^x - e^{-x}}{e^x + e^{-x}}\\,dx"
      },
      {
        "explanation": "Notice the numerator is exactly the derivative of the denominator, so the integral has the form \\(\\int \\frac{f'(x)}{f(x)}\\,dx = \\ln|f(x)|\\).",
        "workingOut": "\\frac{d}{dx}(e^x + e^{-x}) = e^x - e^{-x}"
      },
      {
        "explanation": "Write the primitive and apply the limits.",
        "workingOut": "A = \\left[\\ln(e^x + e^{-x})\\right]_0^k"
      },
      {
        "explanation": "Substitute the limits; at \\(x = 0\\), \\(e^0 + e^0 = 2\\).",
        "workingOut": "= \\ln(e^k + e^{-k}) - \\ln 2"
      },
      {
        "explanation": "Combine the logarithms using the quotient law.",
        "workingOut": "= \\ln\\!\\left(\\frac{e^k + e^{-k}}{2}\\right) \\quad \\blacksquare"
      }
    ]
  },
  {
    "id": "dane2020-q39b",
    "topicId": "y11a-8E",
    "c": "8E",
    "t": "Equations involving logarithms and indices",
    "source": "Danebank 2020 Trial Q39(b)",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "Find, in simplest exact form, the value of $k$ such that the shaded region has area $1$ unit squared (where the area is $\\ln\\!\\left(\\dfrac{e^k + e^{-k}}{2}\\right)$).",
    "a": "$k = \\ln\\!\\left(e + \\sqrt{e^2 - 1}\\right)$",
    "opts": [],
    "h": "Set the area equal to $1$, exponentiate, then let $u = e^k$ to form a quadratic. Reject the root that gives $k < 0$.",
    "s": "Set $\\ln\\!\\left(\\frac{e^k+e^{-k}}{2}\\right) = 1$, so $e^k + e^{-k} = 2e$. Multiply by $e^k$: $(e^k)^2 - 2e\\,e^k + 1 = 0$. Let $u = e^k$: $u = \\frac{2e \\pm \\sqrt{4e^2 - 4}}{2} = e \\pm \\sqrt{e^2 - 1}$. Since $k > 0$ requires $u > 1$, take $u = e + \\sqrt{e^2 - 1}$, so $k = \\ln\\!\\left(e + \\sqrt{e^2 - 1}\\right)$.",
    "solutionSteps": [
      {
        "explanation": "Set the area expression equal to \\(1\\).",
        "workingOut": "\\ln\\!\\left(\\frac{e^k + e^{-k}}{2}\\right) = 1"
      },
      {
        "explanation": "Exponentiate both sides (apply \\(e^{(\\cdot)}\\)) and multiply out.",
        "workingOut": "\\frac{e^k + e^{-k}}{2} = e \\Rightarrow e^k + e^{-k} = 2e"
      },
      {
        "explanation": "Multiply through by \\(e^k\\) to clear the negative exponent and rearrange into a quadratic in \\(e^k\\).",
        "workingOut": "(e^k)^2 - 2e\\,e^k + 1 = 0"
      },
      {
        "explanation": "Let \\(u = e^k\\) and apply the quadratic formula.",
        "workingOut": "u = \\frac{2e \\pm \\sqrt{4e^2 - 4}}{2} = e \\pm \\sqrt{e^2 - 1}"
      },
      {
        "explanation": "Since \\(k > 0\\) we need \\(u = e^k > 1\\). The root \\(e - \\sqrt{e^2-1} \\approx 0.19 < 1\\) gives \\(k < 0\\) and is rejected; keep the larger root.",
        "workingOut": "u = e + \\sqrt{e^2 - 1}"
      },
      {
        "explanation": "Take logarithms to solve for \\(k\\).",
        "workingOut": "k = \\ln\\!\\left(e + \\sqrt{e^2 - 1}\\right)"
      }
    ]
  }
];
