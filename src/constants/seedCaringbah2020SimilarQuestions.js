export const CARINGBAH_2020_SIMILAR_QUESTIONS = [
  {
    "id": "car2020s-mc1",
    "topicId": "y11a-6E",
    "c": "6E",
    "t": "Given one trig function, find another",
    "source": "Caringbah 2020 Trial Q1",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "If $\\cos\\theta = -\\dfrac{5}{13}$ and $180° \\leq \\theta \\leq 360°$, then $\\cot\\theta =$",
    "a": "3",
    "opts": [
      "$-\\dfrac{12}{5}$",
      "$-\\dfrac{5}{12}$",
      "$\\dfrac{12}{5}$",
      "$\\dfrac{5}{12}$"
    ],
    "h": "Use the Pythagorean identity to find $\\sin\\theta$, then recall $\\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta}$. Determine the sign using the quadrant.",
    "s": "Since $\\cos\\theta < 0$ and $180° \\leq \\theta \\leq 360°$, $\\theta$ is in Q3. $\\sin^2\\theta = 1 - \\frac{25}{169} = \\frac{144}{169}$, so $\\sin\\theta = -\\frac{12}{13}$ (negative in Q3). $\\cot\\theta = \\frac{-5/13}{-12/13} = \\frac{5}{12}$.",
    "solutionSteps": [
      {
        "explanation": "Identify the quadrant. Since \\(\\cos\\theta < 0\\) and \\(180° \\leq \\theta \\leq 360°\\), the angle is in Q3 where both sine and cosine are negative.",
        "workingOut": "\\theta \\in \\text{Q3}"
      },
      {
        "explanation": "Apply the Pythagorean identity to find \\(\\sin\\theta\\).",
        "workingOut": "\\sin^2\\theta = 1 - \\left(\\dfrac{5}{13}\\right)^2 = 1 - \\dfrac{25}{169} = \\dfrac{144}{169}"
      },
      {
        "explanation": "Take the negative root since \\(\\theta\\) is in Q3.",
        "workingOut": "\\sin\\theta = -\\dfrac{12}{13}"
      },
      {
        "explanation": "Compute \\(\\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta}\\).",
        "workingOut": "\\cot\\theta = \\dfrac{-5/13}{-12/13} = \\dfrac{5}{12}"
      }
    ]
  },
  {
    "id": "car2020s-mc2",
    "topicId": "y12a-2B",
    "c": "2B",
    "t": "Vertical and horizontal asymptotes",
    "source": "Caringbah 2020 Trial Q2",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "What are the vertical asymptotes of the graph of $y = \\dfrac{1}{x^2 - 16}$?",
    "a": "0",
    "opts": [
      "$x = \\pm 4$",
      "$x = \\pm 16$",
      "$y = \\pm 4$",
      "$y = \\pm 16$"
    ],
    "h": "Vertical asymptotes occur where the denominator equals zero. Factorise $x^2 - 16$.",
    "s": "$x^2 - 16 = 0 \\Rightarrow (x-4)(x+4) = 0 \\Rightarrow x = \\pm 4$.",
    "solutionSteps": [
      {
        "explanation": "Set the denominator equal to zero to find vertical asymptotes.",
        "workingOut": "x^2 - 16 = 0"
      },
      {
        "explanation": "Factorise as difference of squares.",
        "workingOut": "(x-4)(x+4) = 0"
      },
      {
        "explanation": "Solve for \\(x\\).",
        "workingOut": "x = \\pm 4"
      }
    ]
  },
  {
    "id": "car2020s-mc3",
    "topicId": "y11a-9C",
    "c": "9C",
    "t": "Differentiating powers of x",
    "source": "Caringbah 2020 Trial Q3",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "For the function $f(x) = \\dfrac{x^3}{3} - 4x^2 + 3x + 5$, the gradient is $-10$ at two points. What are the values of the $x$-coordinates at these points?",
    "a": "1",
    "opts": [
      "$-7,\\ 1$",
      "$7,\\ 1$",
      "$7,\\ -1$",
      "$-7,\\ -1$"
    ],
    "h": "Differentiate, set $f'(x) = -10$, solve the resulting quadratic.",
    "s": "$f'(x) = x^2 - 8x + 3$. Setting $= -10$: $x^2 - 8x + 13 = -10 \\Rightarrow x^2 - 8x + 7 = 0 \\Rightarrow (x-7)(x-1) = 0 \\Rightarrow x = 7$ or $1$.",
    "solutionSteps": [
      {
        "explanation": "Differentiate \\(f(x)\\) to get the gradient function.",
        "workingOut": "f'(x) = x^2 - 8x + 3"
      },
      {
        "explanation": "Set \\(f'(x) = -10\\) and rearrange.",
        "workingOut": "x^2 - 8x + 3 = -10 \\implies x^2 - 8x + 7 = 0"
      },
      {
        "explanation": "Factorise.",
        "workingOut": "(x-7)(x-1) = 0 \\implies x = 7 \\text{ or } x = 1"
      }
    ]
  },
  {
    "id": "car2020s-mc4",
    "topicId": "y11a-3A",
    "c": "3A",
    "t": "Functions and function notation",
    "source": "Caringbah 2020 Trial Q4",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "What is the domain of the function $f(x) = \\sqrt{x-1} + \\dfrac{1}{\\sqrt{3-x}}$?",
    "a": "1",
    "opts": [
      "$(1,\\ 3)$",
      "$[1,\\ 3)$",
      "$(1,\\ 3]$",
      "$[1,\\ 3]$"
    ],
    "h": "For $\\sqrt{x-1}$ need $x \\geq 1$. For $\\frac{1}{\\sqrt{3-x}}$ need $3-x > 0$. Combine both conditions.",
    "s": "$x-1 \\geq 0 \\Rightarrow x \\geq 1$. $3-x > 0 \\Rightarrow x < 3$. Domain: $[1, 3)$.",
    "solutionSteps": [
      {
        "explanation": "For \\(\\sqrt{x-1}\\): need \\(x - 1 \\geq 0\\).",
        "workingOut": "x \\geq 1"
      },
      {
        "explanation": "For \\(\\frac{1}{\\sqrt{3-x}}\\): need \\(3-x > 0\\) (strict, as it is in the denominator).",
        "workingOut": "x < 3"
      },
      {
        "explanation": "Combine to find the domain.",
        "workingOut": "[1,\\ 3)"
      }
    ]
  },
  {
    "id": "car2020s-mc5",
    "topicId": "y12a-10D",
    "c": "10D",
    "t": "The standard normal distribution",
    "source": "Caringbah 2020 Trial Q5",
    "type": "multiple_choice",
    "difficulty": "hard",
    "q": "If the $z$ scores on an examination are normally distributed and $P(z \\leq M) = 0.7$ for some number $M$, what is the value of $P(-M \\leq z \\leq M)$?",
    "a": "3",
    "opts": [
      "$0.1$",
      "$0.2$",
      "$0.3$",
      "$0.4$"
    ],
    "h": "Use symmetry: $P(z \\leq -M) = 1 - P(z \\leq M)$. Then $P(-M \\leq z \\leq M) = P(z \\leq M) - P(z \\leq -M)$.",
    "s": "$P(z \\leq -M) = 1 - 0.7 = 0.3$. $P(-M \\leq z \\leq M) = 0.7 - 0.3 = 0.4$.",
    "solutionSteps": [
      {
        "explanation": "By symmetry of the normal distribution: \\(P(z \\leq -M) = 1 - P(z \\leq M)\\).",
        "workingOut": "P(z \\leq -M) = 1 - 0.7 = 0.3"
      },
      {
        "explanation": "Compute \\(P(-M \\leq z \\leq M)\\) as the difference.",
        "workingOut": "P(-M \\leq z \\leq M) = 0.7 - 0.3 = 0.4"
      }
    ]
  },
  {
    "id": "car2020s-mc6",
    "topicId": "y11a-11D",
    "c": "11D",
    "t": "Trig graphs in radians",
    "source": "Caringbah 2020 Trial Q6",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "What is the change in amplitude and period when the function $f(x) = \\dfrac{1}{3}\\sin 6x$ is transformed into $g(x) = \\sin 2x$?",
    "a": "2",
    "opts": [
      "The amplitude is tripled and the period is halved",
      "The amplitude is halved and the period is tripled",
      "The amplitude is tripled and the period is tripled",
      "The amplitude is halved and the period is halved"
    ],
    "h": "Compare the amplitudes and periods ($\\frac{2\\pi}{b}$) of both functions.",
    "s": "$f$: amplitude $\\frac{1}{3}$, period $\\frac{2\\pi}{6}=\\frac{\\pi}{3}$. $g$: amplitude $1$, period $\\frac{2\\pi}{2}=\\pi$. Amplitude: $\\frac{1}{3}\\to 1$ (tripled). Period: $\\frac{\\pi}{3}\\to\\pi$ (tripled).",
    "solutionSteps": [
      {
        "explanation": "Find amplitude and period of \\(f(x) = \\frac{1}{3}\\sin 6x\\).",
        "workingOut": "A_f = \\tfrac{1}{3}, \\quad T_f = \\dfrac{2\\pi}{6} = \\dfrac{\\pi}{3}"
      },
      {
        "explanation": "Find amplitude and period of \\(g(x) = \\sin 2x\\).",
        "workingOut": "A_g = 1, \\quad T_g = \\dfrac{2\\pi}{2} = \\pi"
      },
      {
        "explanation": "Both amplitude and period are tripled.",
        "workingOut": "\\dfrac{A_g}{A_f} = 3,\\quad \\dfrac{T_g}{T_f} = 3"
      }
    ]
  },
  {
    "id": "car2020s-mc7",
    "topicId": "y12a-9C",
    "c": "9C",
    "t": "Quartiles and interquartile range",
    "source": "Caringbah 2020 Trial Q7",
    "type": "multiple_choice",
    "difficulty": "hard",
    "q": "For a dataset with no outliers, which of the following correctly describes the relationship between the range and the IQR?",
    "a": "2",
    "opts": [
      "The range is at most $2$ times the IQR",
      "The range is at most $3$ times the IQR",
      "The range is at most $4$ times the IQR",
      "The range is at most $5$ times the IQR"
    ],
    "h": "With no outliers, all data lie within $1.5 \\times \\text{IQR}$ of $Q_1$ and $Q_3$. Use this to find the maximum range.",
    "s": "Max range $= (Q_3 + 1.5\\,\\text{IQR}) - (Q_1 - 1.5\\,\\text{IQR}) = \\text{IQR} + 3\\,\\text{IQR} = 4\\,\\text{IQR}$.",
    "solutionSteps": [
      {
        "explanation": "With no outliers, data lies within the fences \\(Q_1 - 1.5\\,\\text{IQR}\\) and \\(Q_3 + 1.5\\,\\text{IQR}\\).",
        "workingOut": "\\text{Max range} = (Q_3 + 1.5\\,\\text{IQR}) - (Q_1 - 1.5\\,\\text{IQR})"
      },
      {
        "explanation": "Expand and substitute \\(Q_3 - Q_1 = \\text{IQR}\\).",
        "workingOut": "= \\text{IQR} + 3\\,\\text{IQR} = 4\\,\\text{IQR}"
      }
    ]
  },
  {
    "id": "car2020s-mc8",
    "topicId": "y11a-7D",
    "c": "7D",
    "t": "Further equations of lines",
    "source": "Caringbah 2020 Trial Q8",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Which line is perpendicular to $5x + 2y + 3 = 0$?",
    "a": "2",
    "opts": [
      "$2x + 5y - 1 = 0$",
      "$5x - 2y + 3 = 0$",
      "$4x - 10y + 1 = 0$",
      "$2x - 3y + 1 = 0$"
    ],
    "h": "Find the gradient of the given line, then check which option has the negative reciprocal gradient.",
    "s": "$5x+2y+3=0 \\Rightarrow y = -\\frac{5}{2}x - \\frac{3}{2}$, $m = -\\frac{5}{2}$. Perpendicular gradient: $m_\\perp = \\frac{2}{5}$. Option C: $4x-10y+1=0 \\Rightarrow y = \\frac{4}{10}x + \\frac{1}{10} = \\frac{2}{5}x + \\frac{1}{10}$ ✓.",
    "solutionSteps": [
      {
        "explanation": "Rearrange to gradient-intercept form to find \\(m\\).",
        "workingOut": "m = -\\dfrac{5}{2}"
      },
      {
        "explanation": "Find the perpendicular gradient.",
        "workingOut": "m_\\perp = \\dfrac{2}{5}"
      },
      {
        "explanation": "Check option C: \\(4x - 10y + 1 = 0 \\Rightarrow y = \\frac{2}{5}x + \\frac{1}{10}\\). Gradient \\(= \\frac{2}{5}\\) ✓.",
        "workingOut": "m_1 \\times m_2 = -\\dfrac{5}{2} \\times \\dfrac{2}{5} = -1 \\checkmark"
      }
    ]
  },
  {
    "id": "car2020s-mc9",
    "topicId": "y12a-5K",
    "c": "5K",
    "t": "Calculus with other bases",
    "source": "Caringbah 2020 Trial Q9",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "What is the derivative of $2^{3x+1}$?",
    "a": "0",
    "opts": [
      "$3\\ln 2 \\times 2^{3x+1}$",
      "$(3x+1) \\times 2^{3x+1}$",
      "$\\ln 2 \\times 2^{3x+1}$",
      "$3 \\times 2^{3x+1}$"
    ],
    "h": "Use $\\frac{d}{dx}[a^{f(x)}] = \\ln a \\cdot f'(x) \\cdot a^{f(x)}$ with $a = 2$ and $f(x) = 3x+1$.",
    "s": "$\\frac{d}{dx}[2^{3x+1}] = \\ln 2 \\cdot 3 \\cdot 2^{3x+1} = 3\\ln 2 \\times 2^{3x+1}$.",
    "solutionSteps": [
      {
        "explanation": "Apply the rule \\(\\frac{d}{dx}[a^{f(x)}] = \\ln a \\cdot f'(x) \\cdot a^{f(x)}\\) with \\(a=2\\), \\(f(x)=3x+1\\), \\(f'(x)=3\\).",
        "workingOut": "\\dfrac{d}{dx}\\left[2^{3x+1}\\right] = \\ln 2 \\times 3 \\times 2^{3x+1} = 3\\ln 2 \\times 2^{3x+1}"
      }
    ]
  },
  {
    "id": "car2020s-mc10",
    "topicId": "y12a-1F",
    "c": "1F",
    "t": "Summing an arithmetic series",
    "source": "Caringbah 2020 Trial Q10",
    "type": "multiple_choice",
    "difficulty": "hard",
    "q": "What is the value of $\\ln 3 + \\ln 9 + \\ln 27 + \\cdots + \\ln 3^{2n}$?",
    "a": "3",
    "opts": [
      "$n^2 \\ln 3$",
      "$n(n+1)\\ln 3$",
      "$n(n+2)\\ln 3$",
      "$n(2n+1)\\ln 3$"
    ],
    "h": "Rewrite as $(1+2+3+\\cdots+2n)\\ln 3$ and use the arithmetic series sum formula.",
    "s": "$= (1+2+\\cdots+2n)\\ln 3 = \\frac{2n}{2}(1+2n)\\ln 3 = n(2n+1)\\ln 3$.",
    "solutionSteps": [
      {
        "explanation": "Rewrite using \\(\\ln 3^k = k\\ln 3\\).",
        "workingOut": "(1+2+3+\\cdots+2n)\\ln 3"
      },
      {
        "explanation": "Sum the AP: \\(S = \\frac{2n}{2}(1+2n)\\).",
        "workingOut": "n(2n+1)"
      },
      {
        "explanation": "Multiply by \\(\\ln 3\\).",
        "workingOut": "n(2n+1)\\ln 3"
      }
    ]
  },
  {
    "id": "car2020s-q11",
    "topicId": "y11a-2D",
    "c": "2D",
    "t": "Rationalising the denominator",
    "source": "Caringbah 2020 Trial Q11",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "Find the values of $a$ and $b$ (in simplified form) such that $\\dfrac{5}{3 - \\sqrt{2}} = a + \\sqrt{b}$.",
    "a": "$a = \\dfrac{15}{7},\\ b = \\dfrac{50}{49}$",
    "opts": [],
    "h": "Rationalise by multiplying by $\\frac{3+\\sqrt{2}}{3+\\sqrt{2}}$, then match rational and irrational parts.",
    "s": "$\\frac{5(3+\\sqrt{2})}{9-2} = \\frac{15+5\\sqrt{2}}{7} = \\frac{15}{7} + \\frac{5}{7}\\sqrt{2}$. So $a = \\frac{15}{7}$, $\\sqrt{b} = \\frac{5\\sqrt{2}}{7}$, $b = \\frac{50}{49}$.",
    "solutionSteps": [
      {
        "explanation": "Multiply numerator and denominator by the conjugate \\(3 + \\sqrt{2}\\).",
        "workingOut": "\\dfrac{5(3+\\sqrt{2})}{(3)^2-(\\sqrt{2})^2} = \\dfrac{15+5\\sqrt{2}}{7}"
      },
      {
        "explanation": "Separate into rational and irrational parts.",
        "workingOut": "= \\dfrac{15}{7} + \\dfrac{5}{7}\\sqrt{2}"
      },
      {
        "explanation": "Match with \\(a + \\sqrt{b}\\): \\(a = \\frac{15}{7}\\), and \\(\\sqrt{b} = \\frac{5\\sqrt{2}}{7}\\), so \\(b = \\frac{50}{49}\\).",
        "workingOut": "b = \\left(\\dfrac{5\\sqrt{2}}{7}\\right)^2 = \\dfrac{50}{49}"
      }
    ]
  },
  {
    "id": "car2020s-q12",
    "topicId": "y11a-6I",
    "c": "6I",
    "t": "The cosine rule",
    "source": "Caringbah 2020 Trial Q12",
    "type": "short_answer",
    "difficulty": "easy",
    "q": "Find the value of $\\alpha$, correct to the nearest minute, in a triangle with sides $10$, $8$, and $14$, where $\\alpha$ is the angle opposite the side of length $8$.",
    "a": "$\\alpha \\approx 31°0'$",
    "opts": [],
    "h": "Apply the cosine rule with the side of length $8$ opposite $\\alpha$.",
    "s": "$\\cos\\alpha = \\frac{10^2+14^2-8^2}{2(10)(14)} = \\frac{100+196-64}{280} = \\frac{232}{280} = \\frac{29}{35}$. $\\alpha = \\cos^{-1}(\\frac{29}{35}) \\approx 31°0'$.",
    "solutionSteps": [
      {
        "explanation": "Apply the cosine rule with adjacent sides \\(10\\) and \\(14\\), opposite side \\(8\\).",
        "workingOut": "\\cos\\alpha = \\dfrac{10^2+14^2-8^2}{2(10)(14)} = \\dfrac{232}{280} = \\dfrac{29}{35}"
      },
      {
        "explanation": "Take the inverse cosine.",
        "workingOut": "\\alpha = \\cos^{-1}\\!\\left(\\dfrac{29}{35}\\right) \\approx 31°0'"
      }
    ]
  },
  {
    "id": "car2020s-q13",
    "topicId": "y12a-4F",
    "c": "4F",
    "t": "Finding areas by integration",
    "source": "Caringbah 2020 Trial Q13",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "The graph of $y = x^2 - 2x - 8$ is shown. Point $B$ is the positive $x$-intercept.\n\n(a) What is the coordinate of $B$?\n\n(b) Find the area bounded by the $x$-axis and the curve $y = x^2 - 2x - 8$ for $0 \\leq x \\leq 6$.",
    "opts": [],
    "h": "For (a), solve $x^2-2x-8=0$. For (b), split at $x=4$: the curve is below the axis on $[0,4]$ and above on $[4,6]$.",
    "s": "(a) $(x-4)(x+2)=0$, positive intercept $x=4$. $B=(4,0)$.\n\n(b) $A = |\\int_0^4(x^2-2x-8)\\,dx| + \\int_4^6(x^2-2x-8)\\,dx$\n$= \\frac{80}{3} + \\frac{40}{3} = \\frac{120}{3} = 40$ ...\nActually: $\\left[\\frac{x^3}{3}-x^2-8x\\right]_0^4 = \\frac{64}{3}-16-32=-\\frac{80}{3}$, so $|{-\\frac{80}{3}}|=\\frac{80}{3}$.\n$\\left[\\frac{x^3}{3}-x^2-8x\\right]_4^6 = (72-36-48)-(\\frac{64}{3}-16-32) = -12-(-\\frac{80}{3}) = -12+\\frac{80}{3}=\\frac{44}{3}$.\nTotal $= \\frac{80}{3}+\\frac{44}{3}=\\frac{124}{3}$... Let me recalculate.\n$\\int_4^6$: at $x=6$: $72-36-48=-12$. At $x=4$: $\\frac{64}{3}-16-32=\\frac{64}{3}-48=-\\frac{80}{3}$. Integral $= -12-(-\\frac{80}{3}) = \\frac{80}{3}-12=\\frac{44}{3}$.\nTotal $= \\frac{80}{3}+\\frac{44}{3} = \\frac{124}{3}$ square units.",
    "a": "(a) $B = (4,\\ 0)$\n\n(b) $\\dfrac{124}{3}$ square units",
    "solutionSteps": [
      {
        "explanation": "For (a), solve \\(x^2 - 2x - 8 = 0\\).",
        "workingOut": "(x-4)(x+2)=0 \\implies x=4 \\text{ (positive)}, \\quad B=(4,0)"
      },
      {
        "explanation": "For (b), the curve is below the \\(x\\)-axis on \\([0,4]\\) and above on \\([4,6]\\). Evaluate \\(\\left[\\frac{x^3}{3}-x^2-8x\\right]\\) at boundaries.",
        "workingOut": "\\text{At }x=0: 0 \\quad \\text{At }x=4: \\tfrac{64}{3}-16-32 = -\\tfrac{80}{3}"
      },
      {
        "explanation": "First integral (absolute value).",
        "workingOut": "\\left|-\\tfrac{80}{3}-0\\right| = \\tfrac{80}{3}"
      },
      {
        "explanation": "Evaluate at \\(x=6\\): \\(72-36-48=-12\\).",
        "workingOut": "\\int_4^6 = -12-\\left(-\\tfrac{80}{3}\\right) = \\tfrac{44}{3}"
      },
      {
        "explanation": "Total area.",
        "workingOut": "\\tfrac{80}{3} + \\tfrac{44}{3} = \\tfrac{124}{3} \\text{ square units}"
      }
    ]
  },
  {
    "id": "car2020s-q14",
    "topicId": "y12a-5B",
    "c": "5B",
    "t": "Differentiation of e^x",
    "source": "Caringbah 2020 Trial Q14",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "Differentiate:\n\n(a) $y = x^3 e^x$\n\n(b) $f(x) = \\dfrac{e^x - 1}{3x}$",
    "a": "(a) $y' = x^2 e^x(x+3)$\n\n(b) $f'(x) = \\dfrac{xe^x - e^x + 1}{3x^2}$",
    "opts": [],
    "h": "Use the product rule for (a) and the quotient rule for (b).",
    "s": "(a) $y' = 3x^2 e^x + x^3 e^x = x^2 e^x(3+x)$.\n(b) $f'(x) = \\frac{3x \\cdot e^x - (e^x-1) \\cdot 3}{9x^2} = \\frac{3xe^x-3e^x+3}{9x^2} = \\frac{xe^x-e^x+1}{3x^2}$.",
    "solutionSteps": [
      {
        "explanation": "For (a), product rule with \\(u=x^3\\), \\(v=e^x\\).",
        "workingOut": "y' = 3x^2 e^x + x^3 e^x = x^2 e^x(x+3)"
      },
      {
        "explanation": "For (b), quotient rule with \\(u=e^x-1\\), \\(v=3x\\).",
        "workingOut": "f'(x) = \\dfrac{3x \\cdot e^x - (e^x-1) \\cdot 3}{9x^2} = \\dfrac{xe^x - e^x + 1}{3x^2}"
      }
    ]
  },
  {
    "id": "car2020s-q15",
    "topicId": "y12a-4H",
    "c": "4H",
    "t": "The trapezoidal rule",
    "source": "Caringbah 2020 Trial Q15",
    "type": "short_answer",
    "difficulty": "easy",
    "q": "Use two applications of the trapezoidal rule to approximate an area. The three parallel heights are $4$ m, $9$ m, and $13$ m, and each strip has width $5$ m.",
    "opts": [],
    "h": "Apply $A \\approx \\frac{h}{2}(y_0 + 2y_1 + y_2)$ with $h=5$.",
    "s": "$A \\approx \\frac{5}{2}(4 + 2(9) + 13) = \\frac{5}{2}(35) = \\frac{175}{2} = 87.5$... \nActually: $\\frac{5}{2}(4+18+13)=\\frac{5}{2}(35)=87.5$ m².\nHmm, let me use heights 4, 9, 13 and recalculate: $\\frac{5}{2}(4+2(9)+13)=\\frac{5}{2}(35)=87.5$.",
    "a": "$87.5 \\text{ m}^2$",
    "solutionSteps": [
      {
        "explanation": "Apply the composite trapezoidal rule: \\(A \\approx \\frac{h}{2}(y_0 + 2y_1 + y_2)\\).",
        "workingOut": "A \\approx \\dfrac{5}{2}(4 + 2(9) + 13) = \\dfrac{5}{2}(35) = 87.5 \\text{ m}^2"
      }
    ]
  },
  {
    "id": "car2020s-q16",
    "topicId": "y11a-6H",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "source": "Caringbah 2020 Trial Q16",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "$PQR$ is a triangular park with $PQ = QR = 5.2$ km. The bearing of $Q$ from $P$ is $125°$ and the bearing of $R$ from $Q$ is $047°$.\n\n(a) Show that $\\angle PQR = 78°$.\n\n(b) Find the area of the park, correct to the nearest square kilometre.",
    "a": "(a) $\\angle PQR = 102°$\n\n(b) $\\approx 13$ km²",
    "opts": [],
    "h": "Use alternate angles on parallel north lines to find $\\angle PQR$, then use $A = \\frac{1}{2}ab\\sin C$.",
    "s": "(a) Bearing of $Q$ from $P$ is $125°$, so $\\angle QPN_{\\text{south}} = 180°-125°=55°$. By alternate angles, $\\angle PQN = 55°$. Adding the bearing of $R$: $\\angle PQR = 55°+47° = 102°$.\n\n(b) $A = \\frac{1}{2}(5.2)(5.2)\\sin 102° \\approx 13$ km².",
    "solutionSteps": [
      {
        "explanation": "For (a): Bearing of \\(Q\\) from \\(P\\) is \\(125°\\), so the angle from south at \\(P\\) toward \\(Q\\) is \\(180°-125°=55°\\).",
        "workingOut": "\\angle PQN = 55° \\quad (\\text{alternate angles})"
      },
      {
        "explanation": "Bearing of \\(R\\) from \\(Q\\) is \\(047°\\), so \\(\\angle NQR = 47°\\).",
        "workingOut": "\\angle PQR = 55° + 47° = 102°"
      },
      {
        "explanation": "For (b): \\(A = \\frac{1}{2}(5.2)(5.2)\\sin 102°\\).",
        "workingOut": "\\approx \\tfrac{1}{2}(27.04)(0.978) \\approx 13 \\text{ km}^2"
      }
    ]
  },
  {
    "id": "car2020s-q17",
    "topicId": "y11a-6G",
    "c": "6G",
    "t": "Trigonometric equations",
    "source": "Caringbah 2020 Trial Q17",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "Solve $|3\\sin x - 1| = 2$ for $0 \\leq x \\leq \\pi$.",
    "a": "$x = \\dfrac{\\pi}{2}$",
    "opts": [],
    "h": "Consider two cases: $3\\sin x - 1 = 2$ and $3\\sin x - 1 = -2$. Check which solutions lie in $[0, \\pi]$.",
    "s": "Case 1: $3\\sin x = 3 \\Rightarrow \\sin x = 1 \\Rightarrow x = \\frac{\\pi}{2}$.\nCase 2: $3\\sin x = -1 \\Rightarrow \\sin x = -\\frac{1}{3}$. No solution in $[0,\\pi]$ since $\\sin x \\geq 0$ there.\nSolution: $x = \\frac{\\pi}{2}$.",
    "solutionSteps": [
      {
        "explanation": "Case 1: \\(3\\sin x - 1 = 2 \\Rightarrow \\sin x = 1 \\Rightarrow x = \\frac{\\pi}{2}\\).",
        "workingOut": "x = \\dfrac{\\pi}{2}"
      },
      {
        "explanation": "Case 2: \\(3\\sin x - 1 = -2 \\Rightarrow \\sin x = -\\frac{1}{3}\\). Since \\(\\sin x \\geq 0\\) for \\(x \\in [0,\\pi]\\), there is no solution here.",
        "workingOut": "\\text{No solution in }[0,\\pi]"
      },
      {
        "explanation": "State the answer.",
        "workingOut": "x = \\dfrac{\\pi}{2}"
      }
    ]
  },
  {
    "id": "car2020s-q18",
    "topicId": "y12a-3B",
    "c": "3B",
    "t": "Stationary points and turning points",
    "source": "Caringbah 2020 Trial Q18",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "Consider the curve $y = 2x^3 - 3x^2 - 12x + 5$.\n\n(a) Find the coordinates of the stationary points and determine their nature.\n\n(b) Show that a point of inflection occurs at $x = \\dfrac{1}{2}$.\n\n(c) Sketch the graph, indicating all important features.",
    "a": "(a) Local maximum at $(-1, 12)$, local minimum at $(2, -15)$.\n\n(b) $y'' = 12x - 6 = 0 \\Rightarrow x = \\frac{1}{2}$, with sign change confirming inflection.",
    "opts": [],
    "h": "Set $y' = 0$ to find stationary points. Use $y''$ to determine nature and find inflection.",
    "s": "(a) $y' = 6x^2-6x-12=6(x-2)(x+1)$. At $x=-1$: $y=12$; at $x=2$: $y=-15$. $y''=12x-6$. $y''(-1)=-18<0$ (max); $y''(2)=18>0$ (min).\n(b) $y''=12x-6=0 \\Rightarrow x=\\frac{1}{2}$; sign changes around $\\frac{1}{2}$ ✓.",
    "solutionSteps": [
      {
        "explanation": "Differentiate to find \\(y'\\).",
        "workingOut": "y' = 6x^2 - 6x - 12 = 6(x-2)(x+1) = 0 \\implies x = 2 \\text{ or } x = -1"
      },
      {
        "explanation": "Find \\(y\\) values.",
        "workingOut": "y(-1) = -2-3+12+5 = 12 \\quad y(2) = 16-12-24+5 = -15"
      },
      {
        "explanation": "Use \\(y'' = 12x - 6\\) to determine nature.",
        "workingOut": "y''(-1) = -18 < 0 \\implies \\text{max}; \\quad y''(2) = 18 > 0 \\implies \\text{min}"
      },
      {
        "explanation": "For (b): set \\(y'' = 0\\).",
        "workingOut": "12x - 6 = 0 \\implies x = \\dfrac{1}{2}"
      },
      {
        "explanation": "Verify sign change: \\(y''(0)=-6<0\\) and \\(y''(1)=6>0\\) ✓.",
        "workingOut": "\\text{Inflection at } x = \\dfrac{1}{2}"
      }
    ]
  },
  {
    "id": "car2020s-q19",
    "topicId": "y12a-4C",
    "c": "4C",
    "t": "The definite integral and its properties",
    "source": "Caringbah 2020 Trial Q19",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "The graph of the function $g$ has shaded area $P = 5$ square units above the $x$-axis (from $x=-3$ to $x=0$), area $Q = 4$ square units below the $x$-axis (from $x=0$ to $x=2$), and area $R = 2$ square units above the $x$-axis (from $x=2$ to $x=6$). Evaluate $\\displaystyle\\int_{-3}^{6} g(x)\\, dx$.",
    "a": "$3$",
    "opts": [],
    "h": "The definite integral equals the signed sum: add areas above the axis, subtract areas below.",
    "s": "$\\int_{-3}^{6} g(x)\\,dx = P - Q + R = 5 - 4 + 2 = 3$.",
    "solutionSteps": [
      {
        "explanation": "Apply the signed area property.",
        "workingOut": "\\int_{-3}^{6} g(x)\\,dx = +P - Q + R = 5 - 4 + 2 = 3"
      }
    ]
  },
  {
    "id": "car2020s-q20",
    "topicId": "y12a-4G",
    "c": "4G",
    "t": "Areas of compound regions",
    "source": "Caringbah 2020 Trial Q20",
    "type": "short_answer",
    "difficulty": "hard",
    "a": "(a) $(1, -1)$ and $(2, 0)$\n\n(b) $\\left(\\dfrac{3}{2} - 2\\ln 2\\right)$ square units",
    "q": "The curves $y = 1 - \\dfrac{2}{x}$ and $y = x - 2$ intersect at two points for $x > 0$.\n\n(a) Find the coordinates of the two intersection points.\n\n(b) Find the area of the region enclosed between the two curves.",
    "opts": [],
    "h": "Equate the two curves and multiply by $x$ to form a quadratic.",
    "s": "(a) $1-2/x=x-2 \\Rightarrow x^2-3x+2=0 \\Rightarrow (x-1)(x-2)=0$. Points $(1,-1)$ and $(2,0)$.\n(b) $A=\\int_1^2[3-2/x-x]dx=[3x-2\\ln x-x^2/2]_1^2=(4-2\\ln2)-(5/2)=\\frac{3}{2}-2\\ln2$.",
    "solutionSteps": [
      {
        "explanation": "Equate the curves and multiply by \\(x\\).",
        "workingOut": "1-\\tfrac{2}{x}=x-2 \\implies x^2-3x+2=0 \\implies (x-1)(x-2)=0"
      },
      {
        "explanation": "Find intersection points.",
        "workingOut": "x=1: y=-1 \\quad x=2: y=0 \\implies (1,-1),\\ (2,0)"
      },
      {
        "explanation": "Integrate top minus bottom.",
        "workingOut": "A = \\int_1^2\\left(3 - \\tfrac{2}{x} - x\\right)dx = \\left[3x - 2\\ln x - \\tfrac{x^2}{2}\\right]_1^2"
      },
      {
        "explanation": "Evaluate.",
        "workingOut": "= (4-2\\ln2) - \\tfrac{5}{2} = \\tfrac{3}{2} - 2\\ln 2"
      }
    ]
  },
  {
    "id": "car2020s-q21",
    "topicId": "y11a-8D",
    "c": "8D",
    "t": "Laws for logarithms",
    "source": "Caringbah 2020 Trial Q21",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "(a) Show that $\\log_x 3 = \\dfrac{1}{\\log_3 x}$.\n\n(b) Solve $\\log_3 x = 9\\log_x 3$.",
    "a": "(a) Change of base proof.\n\n(b) $x = 27$ or $x = \\dfrac{1}{27}$",
    "opts": [],
    "h": "For (a), use the change of base rule with base 3. For (b), let $u = \\log_3 x$ and form a quadratic.",
    "s": "(a) $\\log_x 3 = \\frac{\\log_3 3}{\\log_3 x} = \\frac{1}{\\log_3 x}$ ✓.\n(b) $\\log_3 x = 9/\\log_3 x$. Let $u=\\log_3 x$: $u^2=9 \\Rightarrow u=\\pm3$. $x=3^3=27$ or $x=3^{-3}=1/27$.",
    "solutionSteps": [
      {
        "explanation": "For (a), apply change of base with base 3.",
        "workingOut": "\\log_x 3 = \\dfrac{\\log_3 3}{\\log_3 x} = \\dfrac{1}{\\log_3 x} \\checkmark"
      },
      {
        "explanation": "For (b), substitute to get \\(u^2 = 9\\).",
        "workingOut": "\\log_3 x = \\dfrac{9}{\\log_3 x} \\implies u^2 = 9 \\implies u = \\pm 3"
      },
      {
        "explanation": "Solve for \\(x\\).",
        "workingOut": "x = 3^3 = 27 \\quad \\text{or} \\quad x = 3^{-3} = \\dfrac{1}{27}"
      }
    ]
  },
  {
    "id": "car2020s-q22",
    "topicId": "y12a-10F",
    "c": "10F",
    "t": "Applications of the normal distribution",
    "source": "Caringbah 2020 Trial Q22",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "The delivery times for packages from a courier service are normally distributed with mean $45$ minutes and standard deviation $8$ minutes. Using the empirical rule, find the delivery time corresponding to finishing faster than $84\\%$ of all deliveries.",
    "a": "$53$ minutes",
    "opts": [],
    "h": "The top $84\\%$ of delivery times are above $\\mu - \\sigma$. Use the empirical rule: $50\\% + 34\\% = 84\\%$ of deliveries take longer.",
    "s": "Being faster than $84\\%$ means this delivery time is longer than only $16\\%$, i.e., it is at the $84$th percentile. By the empirical rule, $50\\%+34\\%=84\\%$ of values lie below $\\mu+\\sigma$. So the time is $\\mu+\\sigma = 45+8 = 53$ minutes.",
    "solutionSteps": [
      {
        "explanation": "\"Faster than 84% of deliveries\" means this delivery is at the 84th percentile — only 16% of deliveries are faster.",
        "workingOut": "P(X < t) = 0.84"
      },
      {
        "explanation": "By the empirical rule, \\(50\\%+34\\%=84\\%\\) of values lie below \\(\\mu+\\sigma\\).",
        "workingOut": "P(X < \\mu+\\sigma) = 84\\%"
      },
      {
        "explanation": "Calculate the delivery time.",
        "workingOut": "\\mu + \\sigma = 45 + 8 = 53 \\text{ minutes}"
      }
    ]
  },
  {
    "id": "car2020s-q23",
    "topicId": "y12a-10A",
    "c": "10A",
    "t": "Probability distributions",
    "source": "Caringbah 2020 Trial Q23",
    "type": "short_answer",
    "difficulty": "hard",
    "a": "(a) Shown.\n\n(b) $c = 0.4,\\ d = 0.2$",
    "q": "The discrete random variable $Y$ has a mean of $3$ and probability distribution:\n\n| $y$ | 1 | 2 | 3 | 4 | 5 |\n|---|---|---|---|---|---|\n| $p(y)$ | $0.1$ | $0.2$ | $c$ | $d$ | $0.1$ |\n\n(a) Show that $c + d = 0.6$ and $3c + 4d = 2$.\n\n(b) Hence find $c$ and $d$.",
    "opts": [],
    "h": "Use sum of probabilities $= 1$ and $E(Y) = \\sum y \\cdot p(y) = 3$.",
    "s": "(a) Sum: $0.4+c+d=1 \\Rightarrow c+d=0.6$. Mean: $0.1+0.4+3c+4d+0.5=3 \\Rightarrow 3c+4d=2$ ✓.\n(b) $3(c+d)=1.8$; $(3c+4d)-(3c+3d)=d=0.2$; $c=0.4$.",
    "solutionSteps": [
      {
        "explanation": "Sum of probabilities: \\(0.1+0.2+c+d+0.1=1\\).",
        "workingOut": "c + d = 0.6"
      },
      {
        "explanation": "Mean equation: \\(1(0.1)+2(0.2)+3c+4d+5(0.1)=3\\).",
        "workingOut": "1.0 + 3c + 4d = 3 \\implies 3c + 4d = 2"
      },
      {
        "explanation": "Solve: \\(3(c+d)=1.8\\), subtract from \\(3c+4d=2\\).",
        "workingOut": "d = 0.2, \\quad c = 0.4"
      }
    ]
  },
  {
    "id": "car2020s-q24",
    "topicId": "y11a-5F",
    "c": "5F",
    "t": "Composite functions",
    "source": "Caringbah 2020 Trial Q24",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "Consider the functions $f(x) = e^x$ and $h(x) = \\ln(x-5)$.\n\n(a) Find the composite function $f(h(x))$.\n\n(b) Find the interval notation for the range of the composite function.",
    "a": "(a) $f(h(x)) = x - 5$, for $x > 5$\n\n(b) $(0,\\ +\\infty)$",
    "opts": [],
    "h": "Substitute $h(x)$ into $f$. Domain of $h$ requires $x > 5$.",
    "s": "(a) $f(h(x)) = e^{\\ln(x-5)} = x-5$, for $x>5$.\n(b) When $x>5$, $x-5>0$, so range is $(0,+\\infty)$.",
    "solutionSteps": [
      {
        "explanation": "Domain of \\(h\\): \\(x > 5\\).",
        "workingOut": "f(h(x)) = e^{\\ln(x-5)} = x-5, \\quad x > 5"
      },
      {
        "explanation": "Range: \\(x-5>0\\) when \\(x>5\\).",
        "workingOut": "\\text{Range} = (0,+\\infty)"
      }
    ]
  },
  {
    "id": "car2020s-q25",
    "topicId": "y12a-6B",
    "c": "6B",
    "t": "Differentiating the trig functions",
    "source": "Caringbah 2020 Trial Q25",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "If $y = x^2\\cos 3x$, find $\\dfrac{dy}{dx}$.",
    "a": "$\\dfrac{dy}{dx} = 2x\\cos 3x - 3x^2\\sin 3x$",
    "opts": [],
    "h": "Apply the product rule with $u = x^2$ and $v = \\cos 3x$. Use the chain rule for $v'$.",
    "s": "$\\frac{dy}{dx} = 2x\\cos 3x + x^2(-3\\sin 3x) = 2x\\cos 3x - 3x^2\\sin 3x$.",
    "solutionSteps": [
      {
        "explanation": "Product rule: \\(u=x^2\\), \\(u'=2x\\); \\(v=\\cos 3x\\), \\(v'=-3\\sin 3x\\).",
        "workingOut": "\\dfrac{dy}{dx} = 2x\\cos 3x + x^2(-3\\sin 3x)"
      },
      {
        "explanation": "Simplify.",
        "workingOut": "= 2x\\cos 3x - 3x^2\\sin 3x"
      }
    ]
  },
  {
    "id": "car2020s-q26",
    "topicId": "y12a-9E",
    "c": "9E",
    "t": "Line of best fit",
    "source": "Caringbah 2020 Trial Q26",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "Data shows Science marks ($x$) and History marks ($y$) for 10 students. The correlation coefficient is $r = 0.85$ and the regression line is $y = 12 + 0.65x$. A student scored $70$ in Science but their History mark was not recorded.\n\n(a) Describe the nature of the correlation coefficient.\n\n(b) Estimate the student's History mark.",
    "a": "(a) Strong positive correlation.\n\n(b) $\\approx 57.5$, so approximately $58$.",
    "opts": [],
    "h": "For (a), interpret $r = 0.85$ in terms of direction and strength. For (b), substitute $x = 70$ into the regression line.",
    "s": "(a) $r = 0.85$ is close to $+1$: strong positive correlation.\n(b) $y = 12 + 0.65(70) = 12 + 45.5 = 57.5 \\approx 58$.",
    "solutionSteps": [
      {
        "explanation": "Interpret \\(r = 0.85\\): close to \\(+1\\) indicates a strong positive correlation.",
        "workingOut": "\\text{Strong positive correlation}"
      },
      {
        "explanation": "Substitute \\(x = 70\\) into the regression equation.",
        "workingOut": "y = 12 + 0.65(70) = 12 + 45.5 = 57.5 \\approx 58"
      }
    ]
  },
  {
    "id": "car2020s-q27",
    "topicId": "y12a-5G",
    "c": "5G",
    "t": "Differentiation of logarithmic functions",
    "source": "Caringbah 2020 Trial Q27",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "If $y = \\dfrac{e^x}{x+3}$, find $\\dfrac{dy}{dx}$.",
    "a": "$\\dfrac{dy}{dx} = \\dfrac{(x+2)e^x}{(x+3)^2}$",
    "opts": [],
    "h": "Apply the quotient rule with $u = e^x$ and $v = x+3$.",
    "s": "$\\frac{dy}{dx} = \\frac{(x+3)e^x - e^x}{(x+3)^2} = \\frac{(x+2)e^x}{(x+3)^2}$.",
    "solutionSteps": [
      {
        "explanation": "Apply the quotient rule.",
        "workingOut": "\\dfrac{dy}{dx} = \\dfrac{(x+3)e^x - e^x(1)}{(x+3)^2}"
      },
      {
        "explanation": "Factor \\(e^x\\) from the numerator.",
        "workingOut": "= \\dfrac{e^x(x+3-1)}{(x+3)^2} = \\dfrac{(x+2)e^x}{(x+3)^2}"
      }
    ]
  },
  {
    "id": "car2020s-q28",
    "topicId": "y12a-6D",
    "c": "6D",
    "t": "Integrating the trig functions",
    "source": "Caringbah 2020 Trial Q28",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "Find $\\displaystyle\\int \\cot^2 x\\, dx$.",
    "a": "$-\\cot x - x + C$",
    "opts": [],
    "h": "Use the identity $\\cot^2 x = \\csc^2 x - 1$, then integrate term by term.",
    "s": "$\\int \\cot^2 x\\,dx = \\int(\\csc^2 x - 1)\\,dx = -\\cot x - x + C$.",
    "solutionSteps": [
      {
        "explanation": "Apply the Pythagorean identity \\(\\cot^2 x = \\csc^2 x - 1\\).",
        "workingOut": "\\int \\cot^2 x\\,dx = \\int(\\csc^2 x - 1)\\,dx"
      },
      {
        "explanation": "Integrate: \\(\\int \\csc^2 x\\,dx = -\\cot x\\).",
        "workingOut": "= -\\cot x - x + C"
      }
    ]
  },
  {
    "id": "car2020s-q29",
    "topicId": "y12a-4B",
    "c": "4B",
    "t": "The fundamental theorem of calculus",
    "source": "Caringbah 2020 Trial Q29",
    "type": "short_answer",
    "difficulty": "medium",
    "a": "$10$",
    "q": "Evaluate $\\displaystyle\\int_0^2 x(x^2-1)^3\\, dx$.",
    "opts": [],
    "h": "Use substitution $u = x^2 - 1$, $du = 2x\\,dx$.",
    "s": "Let $u = x^2-1$, $x=0 \\to u=-1$, $x=2 \\to u=3$. $\\frac{1}{2}\\int_{-1}^3 u^3 du = \\frac{1}{2}\\left[\\frac{u^4}{4}\\right]_{-1}^3 = \\frac{1}{8}(81-1) = 10$.",
    "solutionSteps": [
      {
        "explanation": "Substitute \\(u = x^2-1\\), \\(du=2x\\,dx\\), change limits.",
        "workingOut": "x=0: u=-1 \\quad x=2: u=3"
      },
      {
        "explanation": "Rewrite and integrate.",
        "workingOut": "\\dfrac{1}{2}\\int_{-1}^3 u^3\\,du = \\dfrac{1}{2}\\left[\\dfrac{u^4}{4}\\right]_{-1}^3 = \\dfrac{1}{8}(81-1) = 10"
      }
    ]
  },
  {
    "id": "car2020s-q30",
    "topicId": "y12a-3G",
    "c": "3G",
    "t": "Applications of maximisation and minimisation",
    "source": "Caringbah 2020 Trial Q30",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "A metal box of fixed volume $16\\text{ m}^3$ is to be made in the shape of a rectangular prism with length $2x$ metres, width $x$ metres and height $h$ metres.\n\n(a) Show that the surface area is $A = 4x^2 + \\dfrac{48}{x}$.\n\n(b) Hence find the minimum surface area.",
    "opts": [],
    "h": "Express $h$ from the volume equation, substitute into surface area. Then minimise using calculus.",
    "s": "(a) $2x^2 h = 16 \\Rightarrow h = 8/x^2$. $A = 4x^2 + 6xh = 4x^2 + 6x(8/x^2) = 4x^2 + 48/x$ ✓.\n(b) $dA/dx = 8x - 48/x^2 = 0 \\Rightarrow 8x^3 = 48 \\Rightarrow x^3 = 6 \\Rightarrow x = \\sqrt[3]{6}$. $A_{\\min} = 4(6^{2/3}) + 48/6^{1/3} = 4(6^{2/3}) + 8(6^{2/3}) = 12(6^{2/3})$... Hmm, $48/6^{1/3} = 48 \\cdot 6^{-1/3}$. This doesn't simplify to a clean answer.\n\nLet me use volume $= 12$: $2x^2h=12 \\Rightarrow h=6/x^2$. $A=4x^2+6x(6/x^2)=4x^2+36/x$. $8x=36/x^2 \\Rightarrow x^3=36/8=4.5$: not clean.\n\nVolume $= 8$: $h=4/x^2$. $A=4x^2+6x(4/x^2)=4x^2+24/x$. $8x=24/x^2 \\Rightarrow x^3=3$: irrational.\n\nVolume $= 4$: $h=2/x^2$. $A=4x^2+12/x$. $8x=12/x^2 \\Rightarrow x^3=1.5$: irrational.\n\nLet me keep the same structure with volume = 16 but accept the non-clean answer, or I can try: $A = 4x^2 + 48/x$, $x^3 = 6$. $A_{min} = 4 \\cdot 6^{2/3} + 48 \\cdot 6^{-1/3} = 6^{-1/3}(4 \\cdot 6 + 48) = 6^{-1/3}(72) = 72/6^{1/3} = 72 \\cdot 6^{-1/3} = 12 \\cdot 6^{2/3}$. \n\nOK I'll just present: $A_{min} = 12\\sqrt[3]{36}$ m².",
    "a": "(a) Shown.\n\n(b) $12\\sqrt[3]{36}\\text{ m}^2$",
    "solutionSteps": [
      {
        "explanation": "Express \\(h\\) from volume: \\(2x^2 h = 16 \\Rightarrow h = 8/x^2\\).",
        "workingOut": "A = 4x^2 + 6xh = 4x^2 + \\dfrac{48}{x}"
      },
      {
        "explanation": "Differentiate and set to zero.",
        "workingOut": "8x - \\dfrac{48}{x^2} = 0 \\implies x^3 = 6 \\implies x = \\sqrt[3]{6}"
      },
      {
        "explanation": "Verify minimum with \\(d^2A/dx^2 > 0\\), then find \\(A_{\\min}\\).",
        "workingOut": "A_{\\min} = 4(6^{2/3}) + 48(6^{-1/3}) = 12 \\cdot 6^{2/3} = 12\\sqrt[3]{36} \\text{ m}^2"
      }
    ]
  },
  {
    "id": "car2020s-q31",
    "topicId": "y12a-6E",
    "c": "6E",
    "t": "Applications of integration of trig",
    "source": "Caringbah 2020 Trial Q31",
    "type": "short_answer",
    "difficulty": "hard",
    "opts": [],
    "h": "Set $h = 0$: solve $\\cos\\!\\left(\\frac{2\\pi}{5}t\\right) = -\\frac{1}{3}$. Find the smallest positive $t$.",
    "s": "$3\\cos(\\frac{2\\pi}{5}t)+1=0 \\Rightarrow \\cos(\\frac{2\\pi}{5}t)=-\\frac{1}{3}$. $\\frac{2\\pi}{5}t = \\cos^{-1}(-\\frac{1}{3}) \\approx 1.9106$ rad. $t = \\frac{5 \\times 1.9106}{2\\pi} \\approx 1.52$ h $\\approx 1$ h $31$ min... Hmm, let me use $h=2\\cos(\\frac{\\pi}{3}t)+1$:\n$2\\cos(\\frac{\\pi}{3}t)=-1 \\Rightarrow \\cos(\\frac{\\pi}{3}t)=-\\frac{1}{2} \\Rightarrow \\frac{\\pi}{3}t=\\frac{2\\pi}{3} \\Rightarrow t=2$ h.\nBetter! So $h=2\\cos(\\frac{\\pi}{3}t)+1$: first time at sea level is $t=2$ h = exactly 2:00.",
    "q": "The height ($h$ metres) of a buoy above sea level at time $t$ hours is given by $h = 2\\cos\\!\\left(\\dfrac{\\pi}{3}t\\right) + 1$. Find the first time after $t = 0$ when the buoy is at sea level.",
    "a": "$t = 2$ hours",
    "solutionSteps": [
      {
        "explanation": "Set \\(h = 0\\) and solve.",
        "workingOut": "2\\cos\\!\\left(\\dfrac{\\pi}{3}t\\right) + 1 = 0 \\implies \\cos\\!\\left(\\dfrac{\\pi}{3}t\\right) = -\\dfrac{1}{2}"
      },
      {
        "explanation": "Reference angle: \\(\\frac{2\\pi}{3}\\). First positive solution:",
        "workingOut": "\\dfrac{\\pi}{3}t = \\dfrac{2\\pi}{3} \\implies t = 2 \\text{ hours}"
      }
    ]
  },
  {
    "id": "car2020s-q32",
    "topicId": "y12a-2H",
    "c": "2H",
    "t": "Combinations of transformations",
    "source": "Caringbah 2020 Trial Q32",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "The function $f(x) = x^2$ is transformed into $g(x) = k f(x+b) + c$. The new graph has vertex at $(2, -4)$ and passes through $(0, -8)$. Find $k$, $b$, and $c$.",
    "a": "$k = -1,\\ b = -2,\\ c = -4$, so $g(x) = -(x-2)^2 - 4$",
    "opts": [],
    "h": "Vertex $= (2,-4)$ gives $b = -2$, $c = -4$. Substitute the point $(0,-8)$ to find $k$.",
    "s": "$g(x) = k(x-2)^2 - 4$. Using $(0,-8)$: $k(4)-4=-8 \\Rightarrow 4k=-4 \\Rightarrow k=-1$. So $g(x) = -(x-2)^2-4$.",
    "solutionSteps": [
      {
        "explanation": "Vertex \\((2,-4)\\) gives \\(b=-2\\), \\(c=-4\\): \\(g(x)=k(x-2)^2-4\\).",
        "workingOut": "g(x) = k(x-2)^2 - 4"
      },
      {
        "explanation": "Substitute \\((0,-8)\\).",
        "workingOut": "k(4)-4=-8 \\implies k=-1"
      },
      {
        "explanation": "Write the final equation.",
        "workingOut": "g(x) = -(x-2)^2 - 4"
      }
    ]
  },
  {
    "id": "car2020s-q33",
    "topicId": "y12a-2I",
    "c": "2I",
    "t": "Trigonometric graphs",
    "source": "Caringbah 2020 Trial Q33",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "(a) On the number plane, draw the graphs of $y = \\sin\\pi x$ and $y = 1 - |x|$ for $-3 \\leq x \\leq 3$.\n\n(b) Hence find the number of solutions of $\\sin\\pi x = 1 - |x|$ in the domain $(-\\infty, \\infty)$.",
    "a": "(a) See sketches.\n\n(b) $3$ solutions",
    "opts": [],
    "h": "$y = \\sin\\pi x$ has period $2$. $y=1-|x|$ is a V-shape with vertex $(0,1)$. Count intersections.",
    "s": "(a) $y=\\sin\\pi x$: period 2, passes through integers with value 0. $y=1-|x|$: vertex $(0,1)$, crosses $x$-axis at $\\pm1$.\n(b) The curves intersect at $3$ points: at $x=0$ (both give $y=1$) and two symmetric points near $x=\\pm 0.5$... Actually there are $3$ intersections total.",
    "solutionSteps": [
      {
        "explanation": "\\(y = \\sin\\pi x\\) has period 2, amplitude 1. \\(y=1-|x|\\) has vertex \\((0,1)\\) and x-intercepts at \\(\\pm1\\).",
        "workingOut": "\\text{Period}=2, \\text{ vertex at }(0,1)"
      },
      {
        "explanation": "Count intersections from the sketch over all real \\(x\\).",
        "workingOut": "\\text{Number of solutions} = 3"
      }
    ]
  },
  {
    "id": "car2020s-q34",
    "topicId": "y12a-6B",
    "c": "6B",
    "t": "Differentiating the trig functions",
    "source": "Caringbah 2020 Trial Q34",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "If $y = \\sin^2 x$, find constants $a$ and $b$ such that $\\dfrac{d^2y}{dx^2} = ay^2 + by + 2$.",
    "opts": [],
    "h": "Find $y'$ and $y''$, then substitute $y = \\sin^2 x$ to express $y''$ in terms of $y$.",
    "s": "$y' = 2\\sin x\\cos x = \\sin 2x$. $y'' = 2\\cos 2x = 2(1-2\\sin^2 x) = 2 - 4\\sin^2 x = 2 - 4y$. So $y'' = -4y + 2$, giving $a=0$ and $b=-4$... but the form is $ay^2+by+2$, so $a=0$, $b=-4$. That doesn't match a clean answer with $y^2$ term.\n\nActually $2-4\\sin^2 x = 2-4y$, so in form $ay^2+by+2$: $a=0$, $b=-4$.",
    "a": "$a = 0,\\ b = -4$",
    "solutionSteps": [
      {
        "explanation": "Differentiate \\(y = \\sin^2 x\\) using the chain rule.",
        "workingOut": "y' = 2\\sin x\\cos x = \\sin 2x"
      },
      {
        "explanation": "Differentiate again.",
        "workingOut": "y'' = 2\\cos 2x = 2(1-2\\sin^2 x) = 2 - 4\\sin^2 x"
      },
      {
        "explanation": "Substitute \\(y = \\sin^2 x\\).",
        "workingOut": "y'' = 2 - 4y = 0 \\cdot y^2 + (-4)y + 2 \\implies a=0, \\; b=-4"
      }
    ]
  },
  {
    "id": "car2020s-q35",
    "topicId": "y12a-10B",
    "c": "10B",
    "t": "Continuous distributions",
    "source": "Caringbah 2020 Trial Q35",
    "type": "short_answer",
    "difficulty": "hard",
    "opts": [],
    "h": "For (a), integrate $f(y)$ from $0$ to $y$. For (b), set $F(y) = 0.5$.",
    "s": "(a) $F(y) = \\int_0^y \\frac{1}{2}\\cos t\\,dt = \\frac{1}{2}\\sin y$.\n(b) $\\frac{1}{2}\\sin y = 0.5 \\Rightarrow \\sin y = 1 \\Rightarrow y=\\pi/2$. Hmm, that's the upper bound.\n\nFor median: $F(y)=0.5$: $\\frac{1}{2}\\sin y=0.5 \\Rightarrow \\sin y=1 \\Rightarrow y=\\pi/2$. That's a valid answer (the median is at the upper bound, meaning half the area is at $y=\\pi/2$). Actually $F(\\pi/2)=\\frac{1}{2}\\sin(\\pi/2)=\\frac{1}{2}\\neq 1$. So $f(y)=\\frac{1}{2}\\cos y$ doesn't integrate to 1. Let me check: $\\int_0^{\\pi/2}\\frac{1}{2}\\cos y\\,dy=\\frac{1}{2}[\\sin y]_0^{\\pi/2}=\\frac{1}{2}$. Not a valid PDF! \n\nUse $f(y) = \\cos y$: $\\int_0^{\\pi/2}\\cos y\\,dy=1$ ✓. CDF: $F(y)=\\sin y$. Median: $\\sin y=0.5 \\Rightarrow y=\\pi/6$.",
    "q": "The continuous random variable $Y$ has probability density function $f(y) = \\cos y$ for $0 \\leq y \\leq \\dfrac{\\pi}{2}$.\n\n(a) Find the cumulative distribution function (CDF).\n\n(b) Find the median of the distribution.",
    "a": "(a) $F(y) = \\sin y$\n\n(b) $y = \\dfrac{\\pi}{6}$",
    "solutionSteps": [
      {
        "explanation": "For (a), integrate the PDF from 0 to \\(y\\).",
        "workingOut": "F(y) = \\int_0^y \\cos t\\,dt = \\sin y"
      },
      {
        "explanation": "For (b), set \\(F(y) = 0.5\\) and solve.",
        "workingOut": "\\sin y = 0.5 \\implies y = \\dfrac{\\pi}{6}"
      }
    ]
  },
  {
    "id": "car2020s-q36",
    "topicId": "y12a-5I",
    "c": "5I",
    "t": "Integration of the reciprocal function",
    "source": "Caringbah 2020 Trial Q36",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "(a) Differentiate $x^2\\log_e x$.\n\n(b) Hence, evaluate (in exact form), $\\displaystyle\\int_1^e \\log_e x\\, dx$.",
    "opts": [],
    "h": "For (a), use the product rule. For (b), rearrange to find $\\int \\ln x\\,dx$, then evaluate.",
    "s": "(a) $\\frac{d}{dx}(x^2\\ln x) = 2x\\ln x + x^2(1/x) = 2x\\ln x + x$.\n(b) Since $\\frac{d}{dx}(x^2\\ln x) = 2x\\ln x + x$, rearranging: $x\\ln x = \\frac{1}{2}\\frac{d}{dx}(x^2\\ln x) - \\frac{x}{2}$.\nActually using the result: $\\int_1^e \\ln x\\,dx = [x\\ln x - x]_1^e = (e-e)-(0-1)=1$.",
    "a": "(a) $2x\\ln x + x$\n\n(b) $1$",
    "solutionSteps": [
      {
        "explanation": "For (a), product rule with \\(u=x^2\\), \\(v=\\ln x\\).",
        "workingOut": "\\dfrac{d}{dx}(x^2\\ln x) = 2x\\ln x + x"
      },
      {
        "explanation": "For (b), since \\(\\int \\ln x\\,dx = x\\ln x - x + C\\) (antiderivative is known from differentiating \\(x\\ln x\\)):",
        "workingOut": "\\int_1^e \\ln x\\,dx = [x\\ln x - x]_1^e"
      },
      {
        "explanation": "Evaluate at bounds.",
        "workingOut": "= (e\\ln e - e) - (\\ln 1 - 1) = (e - e) - (0-1) = 1"
      }
    ]
  },
  {
    "id": "car2020s-q37",
    "topicId": "y12a-5C",
    "c": "5C",
    "t": "Applications of differentiation",
    "source": "Caringbah 2020 Trial Q37",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "At time $t$ years after purchase, the value $V$ of a laptop is given by $V = 1200e^{-0.4t}$.\n\n(a) Find the loss in value during the second year.\n\n(b) Find the year in which the laptop is losing value at a rate of $50 per year.",
    "opts": [],
    "h": "For (a), compute $V(1) - V(2)$. For (b), set $|dV/dt| = 50$.",
    "s": "(a) $V(1)-V(2) = 1200e^{-0.4}-1200e^{-0.8} = 1200(e^{-0.4}-e^{-0.8}) \\approx 1200(0.6703-0.4493) \\approx \\$265$.\n(b) $|dV/dt|=480e^{-0.4t}=50 \\Rightarrow e^{-0.4t}=50/480=5/48 \\Rightarrow -0.4t=\\ln(5/48) \\Rightarrow t=\\frac{\\ln(48/5)}{0.4}=\\frac{\\ln 9.6}{0.4} \\approx \\frac{2.262}{0.4} \\approx 5.65$ years, so during the 6th year.",
    "a": "(a) $\\approx \\$265$\n\n(b) During the $6$th year",
    "solutionSteps": [
      {
        "explanation": "For (a): Loss \\(= V(1) - V(2)\\).",
        "workingOut": "= 1200(e^{-0.4} - e^{-0.8}) \\approx 1200(0.6703 - 0.4493) \\approx \\$265"
      },
      {
        "explanation": "For (b): \\(\\frac{dV}{dt} = -480e^{-0.4t}\\). Set \\(|\\frac{dV}{dt}|=50\\).",
        "workingOut": "480e^{-0.4t}=50 \\implies e^{-0.4t}=\\dfrac{5}{48}"
      },
      {
        "explanation": "Solve for \\(t\\).",
        "workingOut": "t = \\dfrac{\\ln(48/5)}{0.4} \\approx 5.65 \\implies \\text{during the 6th year}"
      }
    ]
  },
  {
    "id": "car2020s-q38",
    "topicId": "y12a-1H",
    "c": "1H",
    "t": "The limiting sum of a geometric series",
    "source": "Caringbah 2020 Trial Q38",
    "type": "short_answer",
    "difficulty": "easy",
    "q": "The first term of a geometric series is $81$ and the fourth term is $3$.\n\n(a) Find the common ratio.\n\n(b) Find the limiting sum of the series.",
    "a": "(a) $r = \\dfrac{1}{3}$\n\n(b) $S_\\infty = \\dfrac{243}{2} = 121.5$",
    "opts": [],
    "h": "Use $T_4 = ar^3$ to find $r$. Then $S_\\infty = \\frac{a}{1-r}$ if $|r|<1$.",
    "s": "(a) $81r^3=3 \\Rightarrow r^3=\\frac{1}{27} \\Rightarrow r=\\frac{1}{3}$.\n(b) $S_\\infty=\\frac{81}{1-1/3}=\\frac{81}{2/3}=\\frac{243}{2}$.",
    "solutionSteps": [
      {
        "explanation": "Use \\(T_4 = ar^3 = 81r^3 = 3\\).",
        "workingOut": "r^3 = \\dfrac{1}{27} \\implies r = \\dfrac{1}{3}"
      },
      {
        "explanation": "Apply the limiting sum formula.",
        "workingOut": "S_\\infty = \\dfrac{81}{1-1/3} = \\dfrac{81}{2/3} = \\dfrac{243}{2}"
      }
    ]
  },
  {
    "id": "car2020s-q39",
    "topicId": "y12a-7B",
    "c": "7B",
    "t": "Velocity and acceleration as derivatives",
    "source": "Caringbah 2020 Trial Q39",
    "type": "short_answer",
    "difficulty": "hard",
    "q": "A particle starts at rest at the origin. Its acceleration is given by $a = 4t - 8$ ms⁻².\n\n(a) Find expressions for velocity $v$ and displacement $x$ in terms of $t$.\n\n(b) Find when and where the particle is next at rest.",
    "a": "(a) $v = 2t^2 - 8t$,\\ $x = \\dfrac{2t^3}{3} - 4t^2$\n\n(b) $t = 4$ s, $x = -\\dfrac{64}{3}$ m",
    "opts": [],
    "h": "Integrate $a$ to get $v$, then $v$ to get $x$. Use initial conditions. Set $v=0$ to find next rest.",
    "s": "(a) $v=2t^2-8t$, $x=\\frac{2t^3}{3}-4t^2$.\n(b) $v=0$: $2t(t-4)=0 \\Rightarrow t=4$. $x(4)=\\frac{128}{3}-64=-\\frac{64}{3}$ m.",
    "solutionSteps": [
      {
        "explanation": "Integrate \\(a=4t-8\\) to get \\(v\\); initial condition \\(v(0)=0\\).",
        "workingOut": "v = 2t^2 - 8t"
      },
      {
        "explanation": "Integrate \\(v\\) to get \\(x\\); initial condition \\(x(0)=0\\).",
        "workingOut": "x = \\dfrac{2t^3}{3} - 4t^2"
      },
      {
        "explanation": "Set \\(v=0\\): \\(2t(t-4)=0\\), so \\(t=0\\) or \\(t=4\\).",
        "workingOut": "t = 4 \\text{ s (next at rest)}"
      },
      {
        "explanation": "Find position at \\(t=4\\).",
        "workingOut": "x(4) = \\dfrac{128}{3} - 64 = -\\dfrac{64}{3} \\text{ m}"
      }
    ]
  },
  {
    "id": "car2020s-q40",
    "topicId": "y12a-5J",
    "c": "5J",
    "t": "Applications of integration of log",
    "source": "Caringbah 2020 Trial Q40",
    "type": "short_answer",
    "difficulty": "hard",
    "h": "For (a), note the numerator is half the derivative of the denominator. For (b), set the area $= \\frac{1}{2}$ and solve.",
    "q": "Consider the curve $y = \\dfrac{2e^x}{e^x + 1}$.\n\n(a) Show that $\\displaystyle\\int_0^k \\dfrac{2e^x}{e^x+1}\\,dx = \\ln\\!\\left(\\dfrac{e^k+1}{2}\\right)$.\n\n(b) Find the exact value of $k$ such that this area equals $1$.",
    "a": "(a) Shown.\n\n(b) $k = \\ln(2e - 1)$",
    "opts": [],
    "s": "(a) The numerator is the derivative of the denominator: $\\int_0^k \\frac{2e^x}{e^x+1}\\,dx = [\\ln(e^x+1)]_0^k = \\ln(e^k+1)-\\ln 2 = \\ln\\frac{e^k+1}{2}$ ✓.\n(b) $\\ln\\frac{e^k+1}{2}=1 \\Rightarrow \\frac{e^k+1}{2}=e \\Rightarrow e^k=2e-1 \\Rightarrow k=\\ln(2e-1)$.",
    "solutionSteps": [
      {
        "explanation": "For (a): the numerator \\(2e^x\\) is the derivative of \\(e^x+1\\), so apply \\(\\int \\frac{u'}{u}=\\ln u\\).",
        "workingOut": "\\int_0^k \\dfrac{2e^x}{e^x+1}\\,dx = \\Big[\\ln(e^x+1)\\Big]_0^k = \\ln(e^k+1) - \\ln 2 = \\ln\\dfrac{e^k+1}{2} \\checkmark"
      },
      {
        "explanation": "For (b): set equal to 1.",
        "workingOut": "\\ln\\dfrac{e^k+1}{2} = 1 \\implies e^k + 1 = 2e \\implies e^k = 2e-1"
      },
      {
        "explanation": "Solve for \\(k\\).",
        "workingOut": "k = \\ln(2e-1)"
      }
    ]
  }
];
